# Maths A12 D01: How does the derivative change when an exponential is scaled or shifted? Squashing, sliding and stretching e^x, and the chain rule proof (design)

Status: Revision 2 (1 Nov): brief 130 learning review and maths check resolved (0 blockers; slide wording now "a slide adds no derivative factor" and keeps slope at the moved point; key notes 2 and 5 scoped for a ≠ 0, |a| < 1 and negative a). Narration 6,350 characters, about 570 s. Needs a Codex error check before voicing (Google voice, after the brief 124 pilot).

Earlier status, Revision 1 (1 Nov): needs learning review (`../../student-learning-review.md`) and maths check (Codex); then a Codex error check. Voicing is gated by the brief 124 Google voice pilot, and the build is gated by the brief 129 kit (FunctionGraph, SecantToTangent, DerivativeTracer, AlignedAlgebra extensions).

Narration 6,332 characters (Revision 1), 16 scenes, about 9.5 minutes (569 s), counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending.

Scope: first video of the Year 12 Mathematics Advanced differential calculus strand, and the template for the maths strand. Format follows `chem-m8-c01.md` (Revision 3): crossed chips, countdown ring, key notes board, one reasoning stage at a time. Visual system: the explainer engine (`src/explainer`), paper style and fonts, extending `src/explainer/math/kit.tsx` (programme plan decision 4). All maths visuals are coded; no painted plates (decision 5). Pre-design pack: `../pre-design/maths-a12/math-a12-d01.md`. Site lesson read (1 Nov, read-only) for its orient, derive, worked-example, traps and drill sections: `C:/Users/kygs/hscscience/subjects/maths-advanced/year12/differential-calculus/lesson01.sa.html` (SHA256 in the pack). Route entry: `math-a12-d01` in `../../maths-a12-video-route.json` (route-approved by root, 1 Nov). Route start: "Recall that e^x is its own derivative, then connect the horizontal scale in e^(ax+b) to its gradient." Route stop: "Differentiate k e^(ax+b), retaining the inner expression and multiplying by a. Stop before general bases, products and quotients." Next: math-a12-d02 (rewrite a^x with base e).

Owner rules applied: new 2024 syllabus only, content points cited by codename and exact wording, no site "Year 11 / Module 4" labels anywhere; maths visuals coded, never painted; no people; one reasoning stage at a time with only the needed earlier results kept; the worked example as separate task, equation and grouped givens; "Pause here to answer." then a 10 s countdown with the full worded question kept on screen; givens underlined in the feedback as they are used; brief feedback with one crossed-out mistake; original HSC-style questions; optional key-notes hold; Australian spelling; no em dashes; conversational narration that explains the cause before the rule; Year 11 knowledge recalled in a sentence, not re-taught.

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 12; NESA content-system codenames, official `code` field empty), quoted from the route JSON `syllabusActions`, with the MathML written in linear form:

- `ci8306d30a`: "Apply the rules of differentiation to find the derivative of f(x) = ke^(ax), where k and a are constants"
- `ci4380403a`: "Use the chain rule to prove d/dx(e^(ax+b)) = ae^(ax+b), where a and b are constants and a ≠ 0"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4d003480

**Boundary:** starts by recalling that e^x is its own derivative (so on its graph the gradient equals the height), and stops at differentiating k e^(ax+b) and evaluating the gradient at a point. It teaches: what a sideways squash (x replaced by ax), a sideways slide (+b) and an upward stretch (k) each do to every tangent; why only a changes how the gradient compares with the height; the chain rule proof of d/dx(e^(ax+b)) = ae^(ax+b); the result for k e^(ax+b); negative a gives a negative gradient while the height stays positive; the power-rule trap. Not taught: general bases a^x (d02), e^(f(x)) with a non-linear inner function (d06), products and quotients (d07, d08), increasing and decreasing intervals as a topic (d09), adding a constant on the end (author note e), differential equations.

## Decisions

- **Learner question kept (route).** "How does the derivative change when an exponential is scaled or shifted?" The route recommendation is applied: the unscaled rule is Year 11 (`ciac4383bd`), so it is recalled in one sentence and the video extends to k e^(ax+b).
- **Cause before rule (owner quality bar).** The rule appears only in scene 7, after scenes 3 to 6 have shown on the graph what each constant does to every tangent. The chain rule proof then confirms what the graph showed. This is the reverse of the site's order (rule, then examples).
- **The hook surprise.** At x = 0, the slid curve y = e^(x+1) is steeper (gradient e, about 2.7) than the squashed curve y = e^(2x) (gradient 2), yet only the squashed curve gains a factor in its derivative. The resolution (scene 5) is the lesson's key idea: the factor a sets how the gradient compares with the height, not how steep the curve is at a given x. The hook poses the guess and does not answer it until scene 5.
- **The "gradient equals height" measuring stick.** For y = e^x the gradient at every point equals the y value (its own derivative, recall). Every later scene compares gradient with height using two coded readouts ("height y", "gradient") and a ratio chip, never the screen angle. The axes have different screen scales, so the narration never says "looks twice as steep" without the numbers (pack section 5).
- **Squash shown with a tangent triangle.** On e^x at x = 1 the tangent triangle runs 1 and rises e. When the curve is squashed sideways by a factor of 2 (e^(2x)), the triangle squashes with it: run 1/2, rise e, so the slope doubles. The same squash applies to every point, so every slope doubles. This is the cause of the factor a. For a = 3 the run becomes 1/3; for a = 1/2 the curve is stretched and the slopes halve (author fact; cut from the narration for length, see "Narration length estimate"); for a = −2 the curve is also mirrored in the y-axis, which turns every uphill tangent into a downhill one of the same steepness.
- **Gradient marks (site interactive idea, coded).** The site's "Tangents on y = e^(kx)" interactive marks (x, m) and shows every mark landing on y = e^x. Scene 2 reuses this as gradient marks on the same axes: on e^x the marks land on the curve itself. Scene 3 repeats it on e^(2x): the marks land on a curve twice as tall, the graph of 2e^(2x). Built with `DerivativeTracer` in single-axes overlay mode (Open decisions).
- **Slide shown as rigid motion.** Sliding e^x one unit left (e^(x+1)) carries every tangent with its point, unchanged. At each height the gradient still equals the height. Only horizontal slides are shown, because that is what +b in the power does. The fact that e^(x+1) = e × e^x (a slide is also an upward stretch by e) is a neat check, but it is kept in author notes (note c) to avoid a second idea in scene 5.
- **Stretch k (Year 11 constant multiple rule, `cif6a6cb7d`, recalled).** 3e^x triples every rise with the run unchanged, so every slope triples. Gradient still equals height, because both grow by 3. So k does not change the gradient-to-height ratio; only a does. This sentence is what makes the general rule "dy/dx = a × y" for y = k e^(ax+b) understandable (key note 2).
- **Chain rule recalled, not taught (`ci00fa8fac`).** One sentence names it as the Year 11 rule. The proof is set in `AlignedAlgebra` with the inner expression u = ax + b kept in a highlighted slot from the first line to the last, as the route stop requires ("retaining the inner expression").
- **Notation follows the syllabus, not the site.** The site writes the shortcut as d/dx(e^(kx)) = ke^(kx), using k for the horizontal constant. The syllabus uses k for the vertical multiple and a for the horizontal one. The video uses the syllabus letters throughout, so k always means "out the front" and a always means "with x in the power".
- **"Comes down in front" avoided.** The site says the constant k "comes down in front". That phrase is close to the power rule's "bring the power down", which is the trap scene 8 crosses out. The video says "copy the exponential, then multiply by k and a".
- **Worked examples.** Example 1 is the site's `we-1` (y = e^(3x)), reused exactly, with a graph check at x = 0 (height 1, gradient 3; pack recalculation). Example 2 is original and uses all three constants: f(x) = 5e^(2x+6), find f′(−3). It gives f′(x) = 10e^(2x+6) and f′(−3) = 10, with a graph check (height 5, gradient 10, twice the height). Site examples `we-2` (product) and `we-3` (quotient) are deferred to d07 and d08 (pack).
- **Attempts (original, unseen, all conditions visible).** The pack's two candidate questions, recalculated: (A1) f(x) = 4e^(2x−1), f′(1/2) = 8; crossed mistake: dropping the factor 2 (answer 4; site Trap 01). (A2) y = 3e^(−2x), gradient at 0 is −6, decreasing because e^(−2x) > 0 for every x; crossed mistake: "the curve is below the axis" (pack trap: a negative exponent does not make the exponential negative).
- **Mistake scene:** none separate. "Bring the power down as with x³" (scene 8, crossed chip; site quick-check distractor B); "forget the inner factor" (feedback 1, crossed); "a negative power makes the curve negative" (scene 4 said positively; feedback 2, crossed); "a slide changes the derivative" (scene 5, said positively; hook surprise).
- **Memory aid:** a playback-speed analogy for the power ax + b, plus the short rule "copy the exponential, then multiply by k and a" (see "Memory aid check").
- **Handoff teaser.** Scene 15 says that 2^x is secretly e to some number times x, without naming ln 2, so d02 can find it.
- **Site sources used:** orient section (the two moves, the e^(kx) shortcut, used with syllabus letters); derive section (self-derivative recall; the tangent-marking interactive idea); `we-1` (all numbers); traps section (Trap 01, missing factor; the quick-check distractor x²e^(x²−1) for the power-rule trap, with an original linear example); drill item 2 (3e^(−2x)), which also matches pack question 2. Product and quotient reminders, e^(x²) and differential-equation material are later videos and not used.
- **Site corrections (new; quoted from site lesson 1, read 1 Nov; for `../site-corrections-maths-a12.md`):**
  1. Traps section, Trap 03: "Leaving $2xe^x + x^2 e^x$ unfactorised costs a mark. HSC markers expect $xe^x(x + 2)$." This states a marking rule that no published marking guideline supports in general; whether an unfactorised derivative loses a mark depends on the question. Correct: "Factorise fully when the question asks for a simplified or factorised form, or when you need to solve dy/dx = 0. Factorising e^x first makes the next step easier." (Product-rule content: d07, not used here.)
  2. Derive section, "Why this matters for differential equations": "This underpins radioactive decay ($k < 0$), compound interest, bacterial growth, and Newton's law of cooling, all solved by differentiating $e^{kx}$." Newton's law of cooling has solution T = T_env + Ce^(−kt), which is not of the form Ce^(kx) unless the temperature is measured from the surroundings. Correct: "...and Newton's law of cooling, where the temperature difference from the surroundings follows Ce^(−kt)." (Not used here.)
  3. Orient and derive sections: the shortcut "$\dfrac{d}{dx}(e^{kx}) = ke^{kx}$, the constant $k$ comes down in front" uses k for the constant the 2024 syllabus calls a (`ci8306d30a` writes ke^(ax)). Not a mathematical error. Suggest the syllabus letters, d/dx(e^(ax)) = ae^(ax), and "multiplies the exponential" rather than "comes down", which echoes the power rule.
  - The stale "Year 11 Module 4" metadata is already logged (log item 1).
- **Pack questions answered:** primary example `we-1` used; the two candidate practice questions used as A1 and A2 with worked answers checked (author note d); lesson length set by this design (about 9 minutes).
- **Cause chain taught, in order:** (1) the gradient at a point is the tangent's slope, and for e^x it equals the height (recall); (2) replacing x by 2x squashes the curve sideways by a factor of 2; every tangent triangle keeps its rise and halves its run, so every slope doubles; the gradient becomes 2 × height; (3) the same works for any a; a = 1/2 stretches and halves the slopes; a negative a also mirrors the curve, so slopes turn negative while heights stay positive; (4) adding b slides the curve sideways; tangents move with their points, unchanged, so the gradient still equals the height; the slid curve is steeper at x = 0 only because it is higher there; (5) k stretches heights and rises together, so gradient and height grow by the same factor; only a changes the ratio; (6) the chain rule proves d/dx(e^(ax+b)) = ae^(ax+b), and k rides along; (7, 8) apply, with graph checks; (9) memory aid.
- **Entry knowledge (route `entryKnowledge`):** `ciac4383bd` (e^x is its own derivative); `ci00fa8fac` (the chain rule); `cif6a6cb7d` (the derivative of a multiple of a function); `ci98f43d14` (graphs of exponential functions, asymptote, y-intercept). Also assumed from Year 11: the gradient at a point is the slope of the tangent (introduction to differentiation), and graph transformations as squash, slide and stretch are described in plain words, so no transformation vocabulary ("dilation") is needed.
- **Learner-visible vocabulary (plain meaning at first use):** gradient (recall; the slope of the tangent at that point); height (the y value of the point); tangent triangle (screen; a run along and the rise that the tangent makes over it); inside part or inner expression (the power ax + b, called u in the proof); squash, slide, stretch (plain words, each shown as it is said).
- **Legacy logic ported:** none.
- **New explainer motion (coded; brief 129 kit):** **curve morph** (`FunctionGraph` plotting y = e^(s·x) with s animated from 1 to 2, from 1 to 3, and through the mirror for −2; one coordinate transform for curve, point, tangent and triangle, so the triangle squashes with the curve); **tangent triangle** (run and rise legs with coded labels "run", "rise" and their values; the legs resize at the cue); **moving point with tangent** (`FunctionGraph` moving point; tangent drawn from the exact derivative); **secant to tangent** (`SecantToTangent`, scene 2 only, with the local zoom inset); **gradient marks** (`DerivativeTracer` in overlay mode: dots at (x, gradient) placed on the same axes); **readout pair** (two number tickers, "height y" and "gradient", plus a ratio chip "gradient = 1 × height", "2 × height"); **slide** (the whole curve translates with its tangents attached); **aligned algebra** (`AlignedAlgebra` with the nested inner slot and the derivative-factor highlight; one row per spoken step; earlier rows dimmed but kept); crossed chips (`Chip` with `cross`, `CrossedHabit`), `Callout`, `PenArrow`, scribble circles, `Countdown`, `QuestionCard`, `KeyNotes` (shared kit).
- **Board layout (constant):** heading top-left; graph left 60% of the frame; readouts and algebra in the right 40%. The same axes window (x from −2 to 2, y from 0 to 8) is used for scenes 1 to 6, so curves can be compared. Worked examples use their own windows (see "Numbers used").
- **No human figures, no painted plates:** the memory aid's playback-speed idea is a coded speed badge on the board, not a device or a person.
- **Author notes (not learner copy):**
  (a) Squash: y = e^(ax) is y = e^x scaled horizontally by 1/a about the y-axis. The point (x₀, e^(x₀)) on e^x maps to (x₀/a, e^(x₀)); a tangent line's run is multiplied by 1/a and its rise unchanged, so its slope is multiplied by a. This is exactly d/dx(e^(ax)) = ae^(ax), so the triangle picture is a correct geometric reading of the chain rule, not an analogy. For a < 0 the scaling by 1/a includes the reflection in the y-axis. a = 0 is excluded in `ci4380403a`; the formula still gives 0 for the constant e^b.
  (b) "Gradient = a × height": for y = k e^(ax+b), dy/dx = ka e^(ax+b) = a·y. It holds only for this family. It fails if a constant is added (y = e^(2x) + 5 has dy/dx = 2e^(2x), not 2y), so the key note states it with "For y = k e^(ax+b)".
  (c) Slide: e^(x+1) = e·e^x, so a horizontal slide of an exponential is also a vertical stretch by e (about 2.72), consistent with "gradient = height". Not in narration.
  (d) A1: f′(x) = 4 × 2e^(2x−1) = 8e^(2x−1); 2(1/2) − 1 = 0; f′(1/2) = 8. Crossed: 4. A2: y′ = 3 × (−2)e^(−2x) = −6e^(−2x); y′(0) = −6; e^(−2x) > 0 for all real x, so y′ < 0 for all real x and y is decreasing on its whole domain. Also y > 0 for all x. Crossed: "decreasing because y < 0".
  (e) Adding a constant (e^(2x) + 5) uses the Year 11 sum rule and is met in d06 (mixed composites). It is not in this video because the syllabus point is ke^(ax) and e^(ax+b), and it would break the "gradient compares with height" idea of scene 5 (note b). Root may add one sentence if the learning review asks (Open decisions).
  (f) Pronunciations: "e to the two x"; "f prime"; "d y by d u"; "a half" for 1/2. The letter e is said as the letter, never as "exp". The constant a must be said as the letter name ("ay") everywhere it is a constant ("a x plus b", "multiply by k and a", "a is two", "a equals two", "a is the speed"), never as the article "uh". The brief 124 pilot must test this; if the voice reads it as the article, use a per-word pronunciation override and keep the caption text "a" (Open decisions).

Main question: *Squash e^x sideways and its derivative gains a factor. Slide it sideways and there is no extra derivative factor, even though the slid curve can be steeper. Why, and how do you differentiate k e^(ax+b)?*
Entry knowledge (Year 11, `ciac4383bd`, `ci00fa8fac`, `cif6a6cb7d`, `ci98f43d14`): e^x is its own derivative; the chain rule; the constant multiple rule; graphs of exponentials; gradient as the slope of the tangent.
Stops after: explaining with the graph why the factor a appears and why b adds nothing; proving d/dx(e^(ax+b)) = ae^(ax+b) with the chain rule; differentiating k e^(ax+b) and finding a gradient at a point; using the sign of a to decide whether the curve rises or falls. No general bases, products or quotients.
Handoff: 2^x written as e to some multiple of x (route math-a12-d02).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key: e^x ink (later a dashed grey ghost); the current changed curve blue; tangent line and tangent triangle amber (`MATH_ACCENT`); the inner expression and its derivative factor amber highlight; readouts navy; givens navy; the current answer bright; earlier lines dim. Screen maths uses superscripts (e²ˣ, e^(ax+b) set as a raised power), never "exp".

### 1. hook (squash or slide?)
> Here's the curve y equals e to the x. Squash it sideways, and you get y equals e to the two x. Or slide it one unit left, and you get y equals e to the x plus one. At x equals zero, which new curve do you think is **steeper**? Hold on to your guess. Here's the twist. Only one of them puts a new factor into its derivative, and it might not be the one you'd pick. By the end, you'll know why, and how to differentiate k e to the a x plus **b**.

Visual: heading writes on: "Squash it or slide it: what happens to the derivative?". `FunctionGraph` draws axes (x from −2 to 2, y from 0 to 8) and y = eˣ draws on left to right in ink, label "y = eˣ". On "squash" a blue copy morphs sideways toward the y-axis into y = e²ˣ (label writes); it fades to a thin blue line. On "slide" a second copy (teal) translates one unit left into y = e^(x+1) (label writes). On "steeper" a vertical dashed line draws at x = 0 and two small hollow rings mark (0, 1) on e²ˣ and (0, e) on e^(x+1), each with a "?" chip. No gradient numbers yet. On "twist" the two labels pulse once each. On "b" the curves fade to ghosts and a dim chip writes at the right: "y = k e^(ax+b)", with k, a and b in amber. Two question chips stay dim at the right edge: "steeper at x = 0?" and "which gains a derivative factor?".

### 2. recall: gradient equals height
> Two quick reminders. The gradient at a point is the slope of the tangent there, the line the secants settle onto as the second point slides **in**. And e to the x is its own derivative. On the graph, that means at every point, the gradient equals the height, the y value. Where the curve is one unit high, the tangent's slope is **one**. Where it's about two point seven high, the slope is about two point **seven**. Height and gradient always match, and that's our measuring stick.

Visual: the ghosts clear; y = eˣ stays in ink. `SecantToTangent` on y = eˣ at x = 1: a fixed point P and a second point Q at x = 2 with the secant drawn; a grey chip "Year 11: gradient = slope of the tangent". On "in" Q slides toward P, the secant turns onto the tangent, and the local zoom inset shows the two points staying distinct until the tangent is drawn (never divide by zero). The secant and inset fade; the amber tangent at P stays. A grey chip "Year 11: d/dx(eˣ) = eˣ" writes. The readout pair opens on the right: "height y" and "gradient". The point moves to x = 0 with its tangent. On "one" both tickers read 1.00 and a ratio chip writes "gradient = 1 × height". The point moves to x = 1; on "seven" both tickers read 2.72 (tickers count up together). Gradient marks: as the point moves back from x = 1 to x = −1, small amber dots are left at (x, gradient) and every dot lands on the ink curve; a tag "gradient marks land on the curve itself". At most three bright items: the point and tangent, the readout pair, the ratio chip.

### 3. the squash doubles every slope
> Now squash it. In e to the two x, x gets doubled before the exponential acts. So the new curve reaches every height in half the sideways distance. Watch this tangent triangle. It runs across one unit and rises about two point seven. Squash the curve, and the triangle squashes with it. The rise stays the same, but the run **halves**. Same rise, half the run, so the slope is twice as steep. The whole curve squashed evenly, so that's true at every point. At height one, the slope is now **two**. The gradient is always two times the height, so the derivative of e to the two x is two e to the two **x**.

Visual: the gradient marks clear. On the ink curve at x = 1 the amber tangent triangle draws: run leg from (1, e) to (2, e) labelled "run 1", rise leg from (2, e) to (2, 2e) labelled "rise 2.72". The readouts show height 2.72, gradient 2.72. A small chip writes: "e²ˣ: x is doubled first". On "squash" e^x is copied as a dashed grey ghost and the blue curve morphs (FunctionGraph, s from 1 to 2 over about 1.5 s); the point slides from x = 1 to x = 0.5 at the same height, and the triangle's run leg shrinks with the curve. On "halves" the run label changes "run 1" to "run ½" with a scribble circle, and the rise label stays "rise 2.72" with a small "same" tag. Chip writes: "same rise, half the run → twice the slope". As the run halves, the gradient ticker climbs from 2.72 to 5.44 while the height ticker stays at 2.72. On "two" the point moves to x = 0: height 1.00, gradient 2.00, and the ratio chip writes "gradient = 2 × height" (bright). The point then returns to x = 0.5 (height 2.72, gradient 5.44, ratio chip unchanged), so the student sees the same ratio at two heights. Gradient marks: as the point moves from x = 0.5 to x = −1, amber dots land at (x, 2e²ˣ), on a curve exactly twice as tall as the blue one, which draws faintly through them. On "x" the result writes at the right: "d/dx(e²ˣ) = 2e²ˣ" (bright); the triangle and marks dim.

### 4. any a: squash, stretch or mirror
> Squash by three, and every run shrinks to a third, so every slope is three times as steep. The derivative of e to the three x is three e to the three **x**. What about a negative number, like e to the minus two x? The minus also flips the curve in the y axis, so it falls instead of rising. Every uphill tangent becomes a downhill one, just as steep. So the gradient is minus two times the height. The height stays positive, because e to any power is positive. It's only the slope that turns **negative**.

Visual: the result line from scene 3 shrinks to the top right as an established result. On "three" the blue curve morphs on to s = 3 (triangle run "⅓", rise "2.72", point at x = ⅓); the ratio chip changes to "gradient = 3 × height"; on "x" a second result line writes under the first: "d/dx(e³ˣ) = 3e³ˣ". The curve then morphs back to e²ˣ with its tangent at x = 0.5; on "flips" it mirrors across the y-axis (a flip animation about the y-axis, about 1 s) into y = e^(−2x); the point lands at x = −0.5, height 2.72; the tangent turns from uphill to downhill and the triangle mirrors with it: run "½" now drawn to the left, rise "2.72". The gradient ticker swings 5.44 to −5.44; ratio chip "gradient = −2 × height". On "positive" the height ticker glows (2.72) and a tag writes under the curve "always above the x-axis (y > 0)". On "negative" the gradient ticker's minus sign is circled. At most three bright items.

### 5. the slide changes nothing
> Now the slide. E to the x plus one is the same curve moved one unit left. Sliding doesn't tilt anything. Each tangent just slides along with its point, keeping its slope. So the gradient still equals the height, and the derivative of e to the x plus one is just e to the x plus **one**. Back to your guess. At x equals zero, the slid curve is about two point seven high, so its slope is about two point seven. The squashed curve is only one high there, with a slope of **two**. So the slid curve is steeper at zero only because it's higher. What matters is how the gradient compares with the **height**.

Visual: board resets to the scene 1 window: y = eˣ in ink with the amber tangent triangle at x = 0 (run 1, rise 1), readouts 1.00 and 1.00. On "slide" the whole curve translates one unit left with the triangle attached (rigid; no change in the legs), becoming teal y = e^(x+1); the ink original stays as a ghost. The readouts follow the point: height 1.00, gradient 1.00 at x = −1; ratio chip "gradient = 1 × height". On "one" the result writes: "d/dx(e^(x+1)) = e^(x+1)" (bright) and a small tag "slide: slopes unchanged". On "guess" the two "?" chips from the hook return at x = 0. The teal point moves to x = 0: readouts 2.72, 2.72, chip "1 × height". Then e²ˣ returns in blue with its own point at (0, 1) and a second, smaller readout pair: 1.00, 2.00, chip "2 × height". On "two" both "?" chips are answered: "e^(x+1): gradient 2.72" ticks, "e²ˣ: gradient 2.00". On "height" the two ratio chips are circled together and a handwritten line writes: "a sets gradient ÷ height". The slid curve's tangent is drawn steeper on screen, matching its larger number.

### 6. the stretch scales height and slope together
> Last change: stretch the curve upwards. Three e to the x makes every height three times taller. Look at the tangent triangle. The run doesn't change, but the rise is three times bigger, so the slope is three times steeper. That's the Year 11 constant multiple rule: the three comes along for the **ride**. And notice, the gradient still equals the height, because both grew by the same factor of **three**. So k scales everything, but only a changes the gradient compared with the height.

Visual: board resets: y = eˣ in ink with the triangle at x = 0 (run 1, rise 1). On "stretch" the curve stretches upward (each point's y multiplied by 3 over about 1.5 s) into blue y = 3eˣ; the point rises from (0, 1) to (0, 3); the rise leg grows from 1 to 3 while the run leg stays 1 (label "run 1" glows: "same"). Readouts tick to height 3.00, gradient 3.00. On "ride" a grey chip writes "Year 11: d/dx(k·f) = k·f′" and the result "d/dx(3eˣ) = 3eˣ" writes. On "three" the ratio chip writes "gradient = 1 × height" and is circled. Last line: a summary strip writes across the top, built from the established results, each with its tag: "squash by a: slopes × a", "slide: no change", "stretch by k: heights and slopes × k". Earlier result lines dim.

### 7. the chain rule proof
> Now let's prove it, with the Year 11 chain rule. Take y equals e to the a x plus b. Call the inside part u, so u equals a x plus **b**. Then y equals e to the u, and since that's its own derivative, d y by d u is e to the **u**. The inside part's derivative, d u by d x, is just **a**, because the b is a constant. The chain rule multiplies them: e to the u, times a. Put the inside part back, and you get a e to the a x plus **b**. The b stays in the power, but it adds nothing to the factor, just like the slide. And with k out the front, k just rides **along**.

Visual: the graph shrinks to a small thumbnail at the top left (e²ˣ with its triangle) and the summary strip stays dim at the top. `AlignedAlgebra` board on the right, task strip "Prove: d/dx(e^(ax+b)) = ae^(ax+b)", grey chip "Year 11: dy/dx = dy/du × du/dx". Rows, one per cue, equals signs aligned:
1. "y = e^(ax+b)" (writes on "Take"); the power "ax+b" sits in an amber inner slot.
2. On "b": "let u = ax + b" (the inner slot's contents copy down into this row; the slot stays highlighted).
3. On "u": "y = eᵘ, so dy/du = eᵘ".
4. On "a": "du/dx = a" (the "a" gets the derivative-factor highlight; the "+ b" in row 2 dims with a tiny tag "constant → 0").
5. "dy/dx = dy/du × du/dx = eᵘ × a".
6. On "b" (second): "= ae^(ax+b)" (bright); the amber inner slot reappears in the power, showing the inner expression kept, and the "a" factor carries its highlight from row 4. A tick mark draws.
On "slide" the thumbnail's slide tag from scene 5 flashes. On "along" a boxed result writes under the proof: "d/dx(k e^(ax+b)) = k·a·e^(ax+b)" (bright); rows 1 to 5 dim.

### 8. worked example 1: e to the three x
> Let's use it. Differentiate y equals e to the three x. The inside part is three x, and its derivative is **three**. So keep e to the three x exactly as it is, and multiply by three. The derivative is three e to the three **x**. Check it on the graph. At x equals zero, the curve is one unit high, and its slope is three, three times the height. One trap. Don't bring the power down like you would for x cubed. That rule needs x in the base, and here x is in the power, so the exponential stays **whole**.

Visual: board clears to a calculation layout: task strip "Differentiate"; equation strip "y = e³ˣ" (site `we-1`). `AlignedAlgebra` rows: "u = 3x" with the inner slot highlighted; on "three" "du/dx = 3" (factor highlight). On "x" "dy/dx = e³ˣ × 3 = 3e³ˣ" (bright; the e³ˣ is drawn as the same glyph copied from the equation strip, unchanged). On "graph" a small `FunctionGraph` (x from −1.5 to 0.8, y from 0 to 8) draws y = e³ˣ with the point (0, 1), its tangent and triangle (run ⅓, rise 1); readouts 1.00 and 3.00; chip "3 × height". On "trap" a chip writes "dy/dx = 3x · e^(3x − 1)" and is crossed (`Chip` with `cross`), caption "power rule needs x in the base"; a tiny comparison tag beside it: "x³ → 3x²: x in the base". On "whole" the e³ˣ in the answer is circled.

### 9. worked example 2: all three constants
> Now all three constants. The task: find f prime of minus three. The function is f of x equals five e to the two x plus six. So k is five, a is two and b is **six**. Copy the exponential, then multiply by k and a. Five times two is ten, so f prime of x is ten e to the two x plus **six**. Now substitute minus three. Two times minus three, plus six, is zero, and e to the zero is **one**. So f prime of minus three is **ten**. On the graph, it's five high there with a slope of ten, twice the height, as a equals two **predicts**.

Visual: calculation board sets up at the top: task strip "Find f′(−3)"; equation strip "f(x) = 5e^(2x+6)"; givens group (navy), each written on its spoken word ("five", "two", then the first bold "six"): "k = 5", "a = 2", "b = 6", each with a small leader to its place in the equation (k under the 5, a under the 2, b under the 6). `AlignedAlgebra` rows, one at a time: on "a" (in "multiply by k and a") the k and a givens glow; row 1 "f′(x) = 5 × 2 × e^(2x+6)"; on the second "six" row 2 "= 10e^(2x+6)" (bright; inner slot kept). Row 1 dims. On "minus three" row 3 "f′(−3) = 10e^(2(−3)+6)"; on "one" the power ticks "2(−3) + 6 = 0" and row 4 "= 10e⁰ = 10 × 1"; on "ten" row 5 "= 10" (bright). Rows 2 to 4 dim; row 2 and the answer stay. On "graph" a small `FunctionGraph` (x from −4.5 to −2, y from 0 to 12, curve clipped at the top) draws y = 5e^(2x+6) with the point (−3, 5), tangent and triangle (run ½, rise 5); readouts 5.00 and 10.00; on "predicts" the ratio chip "gradient = 2 × height" writes and the "a = 2" given glows.

### 10. memory aid
> Here's one way to remember it. Think of the power, a x plus b, as the playback speed of the curve. a is the speed. Play it twice as fast, and the curve rises twice as fast at every height. Play it backwards, and it falls instead. b just starts the playback at a different point, so it adds no rate factor. And k makes the whole picture bigger, so heights and slopes grow **together**. In short, copy the exponential, then multiply by k and by **a**.

Visual: board clears. The thumbnail of e^x returns with a coded speed badge beside it (a rounded chip, "×1"). On "twice" the badge reads "×2" and the curve morphs to e²ˣ (the scene 3 morph, replayed fast). On "backwards" the badge reads "×(−1)" and the curve mirrors to e^(−x). On "different point" the badge stays and the curve slides (scene 5 replay, short). On "together" the curve stretches up (scene 6 replay, short). On "a" the handwritten line writes large: "Copy the exponential, then multiply by k and a." Under it, smaller: "d/dx(k e^(ax+b)) = k·a·e^(ax+b)". Hold about 2 seconds.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. Differentiate f of x equals four e to the two x minus one, then find f prime of a half. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Consider the function f(x) = 4e^(2x − 1). (a) Find f′(x). (b) Hence find the exact value of f′(½)." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no graph, no constants labelled).

### 12. feedback 1 (brief)
> The inside part is two x minus one, with derivative **two**. So f prime of x is four times two, e to the two x minus one, which is eight e to the two x minus **one**. At a half, the power is zero, and e to the zero is one, so f prime of a half is **eight**. If you got four, you dropped the factor of two from the **inside**.

Visual: card shrinks to the top. On "two" "2x − 1" in the card is underlined and a row writes "u = 2x − 1, du/dx = 2" (factor highlight). On "one" "f′(x) = 4 × 2 × e^(2x−1) = 8e^(2x−1)" (bright; "4e" underlined in the card). On "eight" "½" is underlined; row "2(½) − 1 = 0, so f′(½) = 8e⁰ = 8" (bright). On "inside" a chip "f′(x) = 4e^(2x−1), so f′(½) = 4" fades in and is crossed (caption "multiply by the inner derivative, 2"). Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. A curve has equation y equals three e to the minus two x. Find its gradient at x equals zero, and explain why the curve is decreasing for every x. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A curve has equation y = 3e^(−2x). (a) Find the gradient of the curve at x = 0. (b) Explain why the curve is decreasing for all real values of x." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 2 (brief)
> The derivative is three times minus two, e to the minus two x, which is minus six e to the minus two **x**. At zero, that's minus **six**. E to any power is positive, so e to the minus two x is always positive. Times minus six, the gradient is negative for every x, so the curve is always **decreasing**. It isn't because the curve dips below zero. It never **does**.

Visual: card shrinks to the top. On "x" "−2x" in the card is underlined; row "dy/dx = 3 × (−2) × e^(−2x) = −6e^(−2x)" (bright). On "six" "x = 0" underlined; row "at x = 0: −6e⁰ = −6" (bright). On "positive" a chip writes "e^(−2x) > 0 for every x" and "(−6) × (positive) < 0" beside it; "for all real values of x" is underlined. On "decreasing" a small `FunctionGraph` thumbnail draws y = 3e^(−2x) falling, staying above the x-axis. On "does" a chip "decreasing because y < 0" fades in and is crossed (caption "y > 0; the minus comes from a = −2"). Hold about 1 second.

### 15. handoff
> So horizontal scaling multiplies slopes by a, a slide adds no factor, and k multiplies heights and slopes. **Next**: what about two to the x? Two to the x is secretly e to some number times x. Find that number, and you can differentiate it the same way.

Visual: board clears. The memory line from scene 10 returns small at the top. On "Next" a blue curve y = 2ˣ draws beside the ghost of eˣ (same window), with a chip "2ˣ = e^(? · x)" in which the "?" sits in an amber inner slot; chip "Next: differentiating aˣ". Hold about 2 seconds.

### 16. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. d/dx(e^(ax+b)) = ae^(ax+b), and d/dx(k e^(ax+b)) = k·a·e^(ax+b). Copy the exponential, then multiply by k and a.
2. Why: for a ≠ 0, the horizontal scale is 1/|a|, with a mirror if a < 0; slopes multiply by a. +b slides it sideways: slopes unchanged. k stretches heights and slopes together. So for y = k e^(ax+b), gradient = a × height.
3. Proof: let u = ax + b, so du/dx = a. dy/dx = dy/du × du/dx = eᵘ × a = ae^(ax+b).
4. Example: f(x) = 5e^(2x+6) gives f′(x) = 10e^(2x+6), and f′(−3) = 10e⁰ = 10.
5. Traps: not 3x·e^(3x−1) (the power rule needs x in the base). e to any power is positive; for y = e^(ax+b), negative a makes the gradient negative while y stays positive.

Memory aid (large, on the notes screen): *Copy the exponential, then multiply by k and a.* Second line: *a is the playback speed: it changes the slopes; b only changes the start.*

## Teaching checks

- **Does it explain causes?** Why e^(2x) gains a factor 2: the sideways squash halves every run and keeps every rise (3). Why the same holds at every point: the whole curve is squashed by the same factor (3). Why a negative a gives a negative gradient: the mirror flips uphill to downhill, while the height stays positive (4). Why b adds nothing: a slide moves each tangent without tilting it (5); in the proof, b is a constant in the inner expression (7). Why the slid curve can still be steeper: it is higher, and its gradient equals its height (5). Why k multiplies the derivative: every rise grows by k with the run unchanged (6). Why the chain rule gives a: du/dx = a (7).
- **Misconceptions addressed:** "a slide changes the derivative" (5, hook surprise); "steeper curve means a bigger factor" (5); "bring the power down" (8, crossed); "forget the inner factor" (feedback 1, crossed; site Trap 01); "a negative power makes the curve negative" (4; feedback 2, crossed); "k changes the gradient-to-height ratio" (6, said positively).
- **One idea at a time:** one change per scene (squash, then other a, then slide, then stretch); one readout pair live at a time except the scene 5 comparison, where the second pair is the point of the scene; the tangent triangle is the only construction on the graph; one algebra row at a time with earlier rows dimmed; established results kept as a short strip.
- **Video makes it easier:** the student predicts which curve is steeper (1), watches the triangle squash and the readout double (3), sees tangents slide unchanged (5) and the rise grow alone (6), then sees the hook answered with numbers (5). The morph and slide are the explanation, not decoration.
- **Response opportunity:** two unseen HSC-style tasks with every condition visible (the function, the point, and the "for all real x" demand), 10 seconds each with the invitation to pause, nothing answer-bearing. One crossed mistake each; feedback about 23 s and 26 s.
- **Avoided double teaching:** e^x as its own derivative, the tangent meaning of gradient, the chain rule and the constant multiple rule are each one sentence with a grey "Year 11" chip; no first-principles limit is shown.
- **Syllabus coverage:** `ci8306d30a` (scenes 6 to 9, attempts) and `ci4380403a` (scene 7, the proof, with a ≠ 0 implicit in the squash; author note a). Both points are owned by this video (route `coverage: owned-action`).
- **Out of scope by design:** a^x, e^(f(x)) with non-linear f, products, quotients, adding a constant, stationary points, differential equations.

## Practice questions and model answers

**Attempt 1 (scene 11; original, HSC style, 2 marks suggested, not an official marking scheme).** "Consider the function f(x) = 4e^(2x − 1). (a) Find f′(x). (b) Hence find the exact value of f′(½)."
Model answer: (a) u = 2x − 1, du/dx = 2, so f′(x) = 4 × 2e^(2x−1) = 8e^(2x−1). (b) 2(½) − 1 = 0, so f′(½) = 8e⁰ = 8. Classic mistake (crossed): f′(x) = 4e^(2x−1), giving 4.

**Attempt 2 (scene 13; original, HSC style, 3 marks suggested).** "A curve has equation y = 3e^(−2x). (a) Find the gradient of the curve at x = 0. (b) Explain why the curve is decreasing for all real values of x."
Model answer: (a) dy/dx = 3 × (−2)e^(−2x) = −6e^(−2x); at x = 0, dy/dx = −6. (b) e^(−2x) > 0 for every real x, so dy/dx = −6e^(−2x) < 0 for every real x, so the curve is decreasing everywhere. Classic mistake (crossed): "decreasing because y < 0" (in fact y > 0 for all x).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Main window | x from −2 to 2, y from 0 to 8 (scenes 1 to 6, 10, 15) | 1 to 6 |
| e | 2.718 (shown 2.72; said "about two point seven") | 2 to 5 |
| e^x at x = 0, 1 | height 1, gradient 1; height 2.72, gradient 2.72 | 2 |
| Triangle on e^x at x = 1 | run 1, rise e (2.72), from (1, e) to (2, 2e = 5.44) | 3 |
| e^(2x) | at x = 0: 1, gradient 2; at x = 0.5: 2.72, gradient 5.44; triangle run ½, rise 2.72 | 3, 5 |
| e^(3x) | at x = ⅓: 2.72, gradient 8.15; triangle run ⅓, rise 2.72 | 4 |
| e^(x/2) | at x = 2: 2.72, gradient 1.36 (memory aid check only; not on screen) | none |
| e^(−2x) | at x = −0.5: 2.72, gradient −5.44; triangle run ½ (left), rise 2.72 | 4 |
| e^(x+1) | at x = −1: 1, gradient 1; at x = 0: 2.72, gradient 2.72 | 5 |
| 3e^x | at x = 0: 3, gradient 3; triangle run 1, rise 3 | 6 |
| Example 1 (site we-1) | y = e^(3x), dy/dx = 3e^(3x); at 0: height 1, gradient 3; window x from −1.5 to 0.8 | 8 |
| Example 2 | f(x) = 5e^(2x+6), f′(x) = 10e^(2x+6), f′(−3) = 10; height 5; window x from −4.5 to −2, y from 0 to 12 | 9, notes |
| Crossed (8) | 3x·e^(3x−1) | 8 |
| A1 | f′(x) = 8e^(2x−1), f′(½) = 8; crossed 4 | 11, 12 |
| A2 | dy/dx = −6e^(−2x), gradient at 0 = −6; crossed "y < 0" | 13, 14 |
| Handoff | 2^x on the same window | 15 |

## Numbers to verify (all values, repeated for Codex)

Checked by hand (1 Nov); Codex to re-check numerically and with a CAS.

- e = 2.71828; 2e = 5.43656; 3e = 8.15485; e/2 = 1.35914.
- d/dx e^(sx) = s e^(sx). At the matched point x = 1/s, height e and gradient s·e for s = 1, 2, 3, ½, and for s = −2 at x = −½ (height e, gradient −2e).
- Triangle on y = e^x at x = 1: tangent y = e·x, passes (1, e) and (2, 2e); run 1, rise e. Under x → x/s, the run becomes 1/s and the rise stays e, slope s·e. Confirm the tangent of e^(2x) at x = ½ is y = 2e(x − ½) + e, through (1, 2e).
- e^(x+1) at 0: e¹ = 2.718, gradient 2.718; e^(2x) at 0: 1, gradient 2. So the slid curve is steeper at 0 (2.72 > 2).
- 3e^x at 0: height 3, gradient 3; tangent y = 3x + 3, through (1, 6).
- Example 1: d/dx e^(3x) = 3e^(3x); at 0: 3. Window: e^(3x) = 8 at x = ln 8 / 3 = 0.693.
- Example 2: f′(x) = 5 × 2e^(2x+6) = 10e^(2x+6); 2(−3) + 6 = 0; f′(−3) = 10. f(−3) = 5. Tangent y = 10(x + 3) + 5, through (−2.5, 10). Curve reaches y = 12 at x = (ln 2.4 − 6)/2 = −2.562.
- A1: f′(x) = 8e^(2x−1); f′(½) = 8. Crossed: 4.
- A2: dy/dx = −6e^(−2x); at 0: −6; e^(−2x) > 0 for all real x.
- Gradient marks in scene 3: points (x, 2e^(2x)) for x from −1 to 0.5 (from 0.27 to 5.44), all inside the window.
- e^(x+1) = e·e^x (author note c); dy/dx = a·y for y = k e^(ax+b) (author note b).

## Memory aid check

- **"Copy the exponential, then multiply by k and a."** Written for this lesson. It restates d/dx(k e^(ax+b)) = k·a·e^(ax+b). Assumptions checked: the power must be linear in x (ax + b). For e^(x²) the inner derivative 2x is a variable, which d06 covers; the aid is phrased with "a", which this video defines as the coefficient of x in a linear power, so it does not claim more. Introduced after the cause (scenes 3 to 6) and the proof (scene 7).
- **Playback-speed analogy for the power ax + b.** Treat the power as the curve's playback position: a is the speed, b the starting point, k the picture's size. It supports a new case: e^(x/2) is half speed, so half the slope at every height; e^(−3x) is three times speed backwards, so falling at three times the height. Assumptions checked: "rate" means the rate with respect to x; the analogy is exact for linear powers (speed constant), which is the only case here; a = 0 means a paused picture (constant e^b, derivative 0), consistent with the formula and with `ci4380403a` excluding a = 0 from the proof. Limit: it says nothing about adding a constant to the whole function (author note e), and the narration does not claim it does. The visual is a coded speed badge, not a device or a person.
- **Considered, not used:** "the derivative of e to the anything is e to the anything times the derivative of the anything" (true and common, but it skips the graph cause and belongs to d06); the site's "the constant comes down in front" (echoes the power rule; site correction 3).

## Narration length estimate

Revision 1 count (1 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **6,332 characters**, 16 scenes. Characters per scene (1 to 16): 436, 470, 592, 497, 591, 480, 544, 492, 509, 434, 120, 309, 178, 351, 239, 75. At 13.3 characters per second the speech is about 476 s; add about 18 s of holds and settling time for the morphs, 20 s for two countdowns and about 55 s more of the quiet notes hold: **about 9.5 minutes (569 s)**, inside the 5,500 to 6,800 character band and under the 570 s cap. Scenes 3 and 5 are the longest; watch the morph timing against speech in the voiced preview (the morph must finish before "halves" and the slide before "one"). Feedback: scene 12 about 23 s, scene 14 about 26 s, both inside the 30 s guide. Reserve trims if the voiced take runs long: scene 6's last sentence (keep the circled chip), scene 9's graph-check sentence (keep the ratio chip). A sentence on a = ½ ("the curve stretches out instead, and every slope halves") was cut from scene 4 for length; restore it if the learning review asks and time allows (about 6 s). Do not cut below 5,500 without replacing content.

## Scene list and build ids

Lesson key `m-a12d01` (route math-a12-d01). Suggested explainer folder `src/explainer/lessons/math-a12-d01` and build folder `docs/production/claude-pm/lessons/m-a12d01` (root to confirm when adding the LESSONS entry). The tangent triangle, readout pair and ratio chip should be built once as maths-kit parts (they recur in d02 to d05), not as lesson-local code.

In order (kebab-case; 16 scene headings, all `### N.`): hook, recall-gradient-height, squash, any-a, slide, stretch-k, chain-proof, worked-1, worked-2, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`: the learner reads the worded question and works during the countdown) and key-notes (`hold`: the learner copies five notes). Transitions (`pickTransition`): 1 to 2, 2 to 3, 3 to 4 camera continue (same axes); 4 to 5 and 5 to 6 board reset on the same axes (new case, soft wipe); 6 to 7 camera push from the graph into the thumbnail, then the algebra board; 7 to 8 and 8 to 9 clear change (new task); 9 to 10 camera pull back; attempts and feedback card shrink to the top; 15 to 16 fade to the notes board.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, "Pause here to answer." on screen). key-notes is the quiet notes hold (about 60 s). Review evidence paths for the LESSONS entry: `learning_review` = `checks/m-a12d01-learning-review.md`, `science_check` = `checks/m-a12d01-maths-check.md`.

## Assets

Have: no plates. All visuals are coded with the explainer kit and the brief 129 maths kit:
- `FunctionGraph` (scenes 1 to 6, 8, 9, 10, 14, 15): exact plotting of e^(sx), e^(x+1), 3e^x, 5e^(2x+6), 3e^(−2x), 2^x; clipping at the window top; animated parameter s (morph), mirror and translation; moving point; tangent from the exact derivative; tangent triangle with labelled legs.
- `SecantToTangent` (scene 2): on e^x at x = 1, Q from x = 2 to 1, local zoom inset.
- `DerivativeTracer` (scenes 2 and 3): gradient marks on the same axes as the curve (overlay mode).
- `AlignedAlgebra` extensions (scenes 7 to 9, 12, 14): nested inner slot, derivative-factor highlight, retained givens.
- Shared: `Countdown`, `QuestionCard` (needs a maths subject value; it currently accepts Chemistry or Biology), `Chip` with `cross`, `CrossedHabit`, `Callout`, `PenArrow`, scribble circle, `KeyNotes`, `Heading`, number tickers.

Need: none painted. Kit needs not yet confirmed by brief 129 (Open decisions): an animated function parameter for the morph, a mirror and translate transform that carries the tangent, a single-axes overlay mode for `DerivativeTracer`, and a tangent triangle part with leg labels.

## Codex asset brief

None. No painted plate is needed (programme decision 5; pack section 5). If the brief 129 kit lacks the four items under "Need", add them to the kit as reusable parts (not lesson-local code), with the maths checks in the build report.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" numerically (and with a CAS for the derivatives), and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the geometric claims: the sideways squash by 1/a keeps rises and multiplies runs by 1/a, so slopes are multiplied by a (author note a); the reflection for negative a; the slide keeps slopes; the vertical stretch multiplies rises by k; dy/dx = a·y for y = k e^(ax+b) and its failure with an added constant (author note b).
3. Confirm the chain rule proof rows in scene 7 are complete and correctly ordered, and that the inner expression is retained.
4. Confirm both attempt questions are original (not copied from a NESA paper or the site) and that every condition the answer needs is on the card.
5. Confirm the syllabus quotes match the route JSON `syllabusActions` exactly (linear form of the MathML), and that no site "Year 11" or "Module 4" label appears anywhere in learner copy or metadata.
6. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling in narration and screen text.
7. Confirm the narration character count and per-scene counts by script with the build parser rules.
8. Add site corrections 1 to 3 under Decisions to `../site-corrections-maths-a12.md` (owner record only; the site is read-only here).

## YouTube metadata (draft)

Title: Differentiating k e^(ax+b): Why Squashing e^x Changes the Derivative | Year 12 Maths Advanced

(Title length: 93 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/differential-calculus/lesson01.sa.html

Squash the curve y = e^x sideways and its derivative gains a factor. Slide it sideways and there is no extra derivative factor, even though the slid curve can be steeper. See why on the graph, using tangent triangles: the factor a changes how the gradient compares with the height, b only slides the curve, and k scales heights and slopes together. Then prove d/dx(e^(ax+b)) = ae^(ax+b) with the chain rule, and differentiate k e^(ax+b). Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 12, differential calculus.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Apply the rules of differentiation to find the derivative of f(x) = ke^(ax), where k and a are constants"
"Use the chain rule to prove d/dx(e^(ax+b)) = ae^(ax+b), where a and b are constants and a ≠ 0"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4d003480

Builds on Year 11: e^x is its own derivative; the chain rule. Next: Differentiating a^x.

#Year12Maths #MathsAdvanced #Calculus #HSCScience

## Open decisions

- **Brief 129 kit coverage (root, before build).** This design needs four kit capabilities that the brief 129 text implies but does not list by name: an animated function parameter (morph e^x to e^(2x)), mirror and translate transforms that carry the tangent and triangle, `DerivativeTracer` gradient marks on the same axes as the curve, and a tangent triangle with labelled legs. Recommended: root adds them to brief 129 (or a follow-up) as kit parts, since d02 to d05 reuse them. If the overlay tracer is not possible, scenes 2 and 3 fall back to `FunctionGraph` dots at (x, gradient).
- **`QuestionCard` subject (root).** `skills-shared/card.tsx` types `subject` as Chemistry or Biology. Maths needs a third value (for example "Mathematics Advanced") with the explainer paper style; one small shared change, owned by the kit builder.
- **Adding a constant (learning review to judge).** Key note 2's "gradient = a × height" is stated only for y = k e^(ax+b) (author note b). If the reviewer thinks students will apply it to e^(2x) + 5, add one sentence to scene 6 ("Adding a number on the end lifts the curve without tilting it, so it adds nothing to the derivative") and change key note 2 to "gradient = a × (height above the asymptote)". This would add about 120 characters.
- **Site link form.** The description link uses the `.sa.html` form, like chem-m8-c01. Confirm the live maths page path.
- **Letter "a" in speech (root, at the voice pilot).** The narration uses the constant a about twenty times. Google speech may read "a" as the article. Test it in the brief 124 pilot with this lesson's lines (scenes 7, 9 and 10) and apply a pronunciation override if needed; do not rewrite the constant as another letter, because the syllabus uses a.
- **Title length:** 93 characters; a shorter option is "Differentiating k e^(ax+b) | Year 12 Maths Advanced" (52 characters).

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from the Year 11 entry knowledge; check that the triangle squash in scene 3 is followable at playback speed and that scene 5's comparison resolves the hook), then the Codex maths check and error check.
- The morphs, slides and stretches in scenes 3 to 6 carry the explanation; they must be judged at playback speed in the voiced preview, not from stills. In particular, the tangent triangle must stay attached to the curve during each transform (one coordinate transform), and the readouts must never contradict the screen.
- This design is the maths strand template: d02 to d05 should reuse the readout pair, ratio chip and tangent triangle, and the order cause, then proof, then worked examples.
