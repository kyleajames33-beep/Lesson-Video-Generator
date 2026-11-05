# Maths A12 D01: Squash, slide or stretch e^x: which change alters the gradient compared with the height, and how do you differentiate k e^(ax+b)? (design)

Status: Revision 5 (6 Nov 2026): full redesign to maths-visual-standard.md after owner rejected v1. Needs independent learning review and maths check before voicing.

Earlier revisions (1 to 3, 1 Nov; coded-only v1 that was built, rendered and rejected) are in git history: `git log -p -- docs/production/claude-pm/lessons/math-a12-d01.md` (last version before this redesign is at commit 5f4ed52a).

Narration 6,528 characters by script, 17 scenes, about 562 s with holds (see "Narration length estimate"). Nothing recorded; human listening pending.

Scope: first video of the Year 12 Mathematics Advanced differential calculus strand, and the template for all 67 maths videos under `../maths-visual-standard.md`. Visual system: the explainer engine (`src/explainer`), paper style, display and hand fonts, the maths kit (`src/explainer/math/kit.tsx`) plus the new reusable parts listed under "Kit parts needed". Painted plates carry the real-world anchor (prefix `ma12-`); graphs, axes, algebra and readouts stay coded. Pre-design pack: `../pre-design/maths-a12/math-a12-d01.md`. Site lesson read (6 Nov, read-only): `C:/Users/kygs/hscscience/subjects/maths-advanced/year12/differential-calculus/lesson01.sa.html`. Its own hook is the same idea this anchor uses: "bacterial growth ... the rate of change equals the current value". Route entry: `math-a12-d01` in `../../maths-a12-video-route.json`. Route start: "Recall that e^x is its own derivative, then connect the horizontal scale in e^(ax+b) to its gradient." Route stop: "Differentiate k e^(ax+b), retaining the inner expression and multiplying by a. Stop before general bases, products and quotients." Next: math-a12-d02 (rewrite a^x with base e).

Owner rules applied: 2024 syllabus only, content points cited by codename and exact wording, no site "Year 11 / Module 4" labels; painted plates for real objects, coded graphs and algebra; no people, hands or faces; one reasoning stage at a time; worked examples in the Chemistry g01 layout; "Pause here to answer." then a 10 s countdown with the full worded question on screen; givens underlined in the feedback as they are used; brief feedback with one crossed mistake; original HSC-style questions; optional key-notes hold; Australian spelling; no em dashes; conversational narration that explains the cause before the rule; Year 11 knowledge recalled in a sentence.

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 12; NESA content-system codenames, official `code` field empty), quoted from the route JSON `syllabusActions`, with the MathML in linear form:

- `ci8306d30a`: "Apply the rules of differentiation to find the derivative of f(x) = ke^(ax), where k and a are constants"
- `ci4380403a`: "Use the chain rule to prove d/dx(e^(ax+b)) = ae^(ax+b), where a and b are constants and a ≠ 0"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4d003480

**Boundary:** starts by recalling that e^x is its own derivative (so on its graph the gradient equals the height), and stops at differentiating k e^(ax+b) and evaluating the gradient at a point. It teaches: what a sideways squash (x replaced by ax), a sideways slide (+b) and an upward stretch (k) each do to every tangent; why only a changes the gradient compared with the height; the chain rule proof of d/dx(e^(ax+b)) = ae^(ax+b); the result for k e^(ax+b); negative a gives a negative gradient while the height stays positive; the power-rule trap. Not taught: general bases a^x (d02), e^(f(x)) with a non-linear inner function (d06), products and quotients (d07, d08), increasing and decreasing intervals as a topic (d09), adding a constant on the end (author note f), differential equations.

## Decisions

- **Anchor: bacteria growing in flasks of broth (painted plates).** Chosen over a colony on an agar plate because the science is cleaner. A visible colony on agar is not exponential for long: once it is a few hundred cells across, food runs short at its centre and its edge creeps outward at a roughly steady speed. A well-mixed broth culture in its growth (log) phase is the textbook exponential: each cell grows and splits on its own schedule, so the number of new cells per hour is proportional to the number of cells. That is exactly "the rate equals the current value", the site's own hook. The flask plate gives the real object; a painted microscope field of the same broth, with painted rod cells that visibly split, gives the motion. The anchor carries the meaning of every constant:
  - first strain, y = e^x (y in millions of cells, x in hours from when we start the clock): growth rate = count, so gradient = height;
  - **a**, a faster strain, y = e^(2x): every million cells add two million an hour, so gradient = 2 × height. a is the growth per cell (gradient ÷ height);
  - **b**, the same strain seeded an hour earlier, y = e^(x+1): the curve slides left, more cells now, same growth per cell;
  - **k**, three identical flasks counted together, y = 3e^x: every count and every rate tripled, same growth per cell.
  The anchor returns when the maths answers its question (scene 6 answers the hook with the two flasks' live tickers; scene 7 lines up three flasks; scene 11 is the memory aid in flask terms; scene 16 sets up d02 with a strain that doubles every hour).
- **Idealising assumptions of the anchor (author notes, not learner copy except "while food lasts"):** (i) growth (log) phase only, with plenty of food and space, constant temperature and no cell deaths; a real culture later slows and stops (stationary phase). Scene 1 keeps "while the food lasts" in learner copy, because without it the model teaches unlimited growth. (ii) Cells are discrete, but with millions of cells dividing at random times the count is smooth and grows continuously; the model y = e^x treats it as continuous. (iii) The first strain's doubling time is ln 2 hours, about 41.6 minutes (so its growth per cell is exactly 1 per hour); the fast strain doubles in about 20.8 minutes, which is close to E. coli in rich broth at 37 °C. Doubling times are not spoken. (iv) The microscope field shows a small sample drop of the broth; the number of cells in view is proportional to the count, not equal to it (the field holds 8 cells at 1 million, 24 at 3 million). (v) "Bacteria dying off in disinfectant" (scene 5) follows first-order killing (Chick's law) only approximately; it is a one-clause picture of negative a, not a claim about any product. (vi) x is negative before the clock starts; the early flask was seeded before x = 0.
- **Learner question (improved).** "Squash, slide or stretch e^x: which change alters the gradient compared with the height, and how do you differentiate k e^(ax+b)?" In anchor terms: faster strain, earlier start, more flasks: which one changes the growth per cell?
- **The hook surprise, made visual (standard item 9).** At the start of the clock the early flask (e^(x+1)) has about 2.72 million cells and gains about 2.72 million an hour; the fast strain (e^(2x)) has 1 million and gains 2 million an hour. So the early flask is gaining faster, yet only the fast strain's derivative gains a factor. Scene 6 shows it happen: two live rate tickers race and the early flask's wins, then the "per cell" readouts (1 and 2) are circled. The factor a sets the growth per cell, not how fast a flask is gaining at one moment.
- **Simulations (standard item 3).** (1) `GrowthField` (scenes 1, 5, 6): painted rod cells split in a microscope field while the count ticker and the growth-rate ticker climb together and the "per cell" readout stays fixed; in scene 5 the cells fade away for negative a. (2) `CurveSimulator` with `ParameterSlider` (scenes 3 to 7): a point rides the curve with its tangent and tangent triangle while the large readout board (height, gradient, gradient ÷ height) updates live; a slider for a sweeps 1, 2, 3, ½ and a mirror toggle takes it to −2; a slider for b slides the curve; a slider for k stretches it. The readout "gradient ÷ height" always reads a: that number is the lesson.
- **Colour roles (fixed for the whole video, and the strand default).** Used in equation strips, givens cards, working, graph labels, sliders, readouts and the on-screen echoes of the narration:
  - **k: amber** (kit `AMBER`), the multiple out the front, "how many flasks";
  - **a: blue** (kit `BLUE`), the coefficient of x and its derivative factor, "growth per cell";
  - **b: teal** (new token `MATH_TEAL`, about #1f8a8f), the constant in the power, "start time";
  - **answer: green** (new token `MATH_ANSWER`, about #2e7d4f), framed answers and correct ticks;
  - **mistake: red** (new token `MATH_MISTAKE`, about #b8322a), crossed mistakes only;
  - supporting roles: height and count ink (`INK`); gradient, growth rate and tangent violet (new token `MATH_GRADIENT`, about #6b4fa0); the inner expression ax + b sits in a dashed grey slot with its a blue and its b teal; e^x reference curve ink, later a dashed grey ghost.
  Colour is never the only carrier: every coloured value also has a written label.
- **Large type (standard item 5).** At 1080p: the current working line and the readout numbers 52 px; the equation strip and givens 44 px; supporting and earlier lines at least 30 px (older stages shrink to 30 px and dim, never vanish while needed); graph axis numbers and leg labels at least 28 px; handwritten tags at least 34 px; nothing a student must read below 26 px. Graphs are large: 1100 × 760 px when they are the stage. All text sits above the bottom 12 per cent of the frame (y < 950 at 1080p).
- **Handwritten voice (standard item 6).** `HandTag` in the accent colours for short teacher tags: "same", "× 2", "halves", "rate = count", "per cell", "slopes unchanged", "rides along", "x in the power, not the base", circles, arrows and crossings. At most two tags live at once.
- **Stage changes (standard item 2), a new stage at most about 85 s apart and a new visual idea inside each stage within about 50 s:** anchor (flask and field), large graph simulation, slider simulation, anchor comparison, flask row with stretch, full-width proof board, two worked-example boards, framed memory-aid card, question cards, anchor handoff, key notes. See the stage plan in "Scene list and build ids".
- **Cause before rule.** The rule is proved in scene 8 after scenes 3 to 7 have shown on the graph what each constant does to every tangent. Kept from v1, because the learning review passed it.
- **Squash shown with a tangent triangle (kept).** On e^x at x = 1 the triangle runs 1 and rises e. Squashed sideways by 2, it runs ½ and still rises e, so its slope doubles; the same squash applies at every point. a = 3 runs ⅓; a = ½ runs 2 (now spoken, restored in scene 5); a = −2 also mirrors in the y-axis.
- **Slide shown as rigid motion (kept).** Tangents move with their points; the gradient still equals the height. e^(x+1) = e × e^x is author note c.
- **Stretch k (kept).** 3e^x triples every rise with the run unchanged; gradient still equals height. Year 11 constant multiple rule `cif6a6cb7d`, recalled.
- **Chain rule recalled, not taught (`ci00fa8fac`).** The proof keeps u = ax + b in its slot from the first row to the last ("retaining the inner expression").
- **Notation follows the syllabus.** k is the multiple out the front; a is the coefficient of x in the power; b the constant in the power. The site's "constant comes down in front" is not used (it echoes the power rule).
- **Worked examples (kept, g01 layout).** Example 1 is the site's `we-1` (y = e^(3x)); the graph check moves to the scene 5 slider (a = 3), so example 1 is now algebra only and ends on the crossed power-rule trap. Example 2 is original: f(x) = 5e^(2x+6), f′(−3) = 10, with a small graph check (height 5, gradient 10).
- **Attempts (kept, original, all conditions visible).** A1: f(x) = 4e^(2x − 1), f′(½) = 8; crossed 4. A2: y = 3e^(−2x), gradient at 0 is −6, decreasing because e^(−2x) > 0; crossed "decreasing because y < 0".
- **Mistake scene:** none separate. "Bring the power down" (scene 9, crossed red); "forget the inner factor" (feedback 1, crossed); "a negative power makes the curve negative" (scene 5 said positively; feedback 2, crossed); "a slide changes the derivative" and "the flask gaining faster has the bigger factor" (scene 6, the visual surprise).
- **Memory aid (framed card, standard item 8).** "Copy the exponential, then multiply by k and a." with the flask key: "a: growth per cell. b: start time. k: how many flasks." Replaces v1's playback-speed analogy, because the flasks now carry the same meaning and the student has watched them. See "Memory aid check".
- **Handoff.** A strain that doubles every hour has count 2^x; "2^x = e^(? × x)" with the ? in the blue a-role slot. ln 2 is not named.
- **Site sources used:** hook (bacterial growth, rate equals current value); orient section (the two moves, with syllabus letters); derive section (self-derivative recall; the tangent-marking interactive becomes the riding point and readouts); `we-1` (all numbers); traps (Trap 01 missing factor; the power-rule distractor); drill item 2 (3e^(−2x), matches A2). Product, quotient, e^(x²) and differential-equation material are later videos.
- **Site corrections (unchanged from Revision 1; for `../site-corrections-maths-a12.md`, owner record only):**
  1. Trap 03: "Leaving $2xe^x + x^2 e^x$ unfactorised costs a mark. HSC markers expect $xe^x(x + 2)$." No published marking guideline supports this in general. Correct: "Factorise fully when the question asks for a simplified or factorised form, or when you need to solve dy/dx = 0."
  2. Derive section: "Newton's law of cooling, all solved by differentiating $e^{kx}$". The cooling solution is T = T_env + Ce^(−kt). Correct: "...Newton's law of cooling, where the temperature difference from the surroundings follows Ce^(−kt)."
  3. Orient and derive: "the constant $k$ comes down in front" uses k for the syllabus's a and echoes the power rule. Suggest d/dx(e^(ax)) = ae^(ax), "multiplies the exponential".
- **Entry knowledge (route `entryKnowledge`):** `ciac4383bd` (e^x is its own derivative); `ci00fa8fac` (the chain rule); `cif6a6cb7d` (derivative of a multiple of a function); `ci98f43d14` (graphs of exponentials). Also Year 11: the gradient at a point is the slope of the tangent. No biology is assumed: "cells split in two" and "growth rate" are explained in scene 1 in plain words.
- **Learner-visible vocabulary (plain meaning at first use):** growth rate (new cells per hour); gradient (slope of the tangent); height (the y value); tangent triangle (a run along and the rise the tangent makes over it); growth per cell (gradient divided by height); inside part (the power ax + b, called u in the proof); squash, slide, stretch (shown as said).
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Squash: y = e^(ax) is y = e^x scaled horizontally by 1/a; (x₀, e^(x₀)) maps to (x₀/a, e^(x₀)); runs scale by 1/a, rises unchanged, slopes by a. For a < 0 this includes the reflection in the y-axis. a = 0 is excluded in `ci4380403a`; the formula still gives 0 for the constant e^b. The slider never passes through 0 on screen (the sign change is the mirror toggle).
  (b) "Gradient = a × height" and "gradient ÷ height = a" hold for y = k e^(ax+b) only (dy/dx = a·y). They fail with an added constant: e^(2x) + 5 has dy/dx = 2e^(2x), not 2y. Key note 2 is stated "for y = k e^(ax+b)".
  (c) e^(x+1) = e·e^x: a horizontal slide of an exponential is also a vertical stretch by e. Not in narration.
  (d) A1: f′(x) = 8e^(2x−1); 2(½) − 1 = 0; f′(½) = 8; crossed 4. A2: y′ = −6e^(−2x); y′(0) = −6; e^(−2x) > 0 so y′ < 0 for all real x; y > 0 for all x.
  (e) Biology wording: "each cell grows, then splits in two" (binary fission) is correct for rod bacteria such as E. coli; "seeded" means a small amount of culture added to fresh broth. No species is named on screen.
  (f) Adding a constant is d06's sum-rule case; it would break "gradient ÷ height = a". Open decision kept from v1.
  (g) Pronunciations: "e to the two x"; "f prime"; "d y by d u"; "a half"; the constant a said as the letter name ("ay") everywhere, never the article. Narration avoids "a a" collisions ("Let's put a dial on the constant a"). Test in the voice pilot.

Main question: *Squash, slide or stretch e^x: which change alters the gradient compared with the height, and how do you differentiate k e^(ax+b)?*
Entry knowledge (Year 11, `ciac4383bd`, `ci00fa8fac`, `cif6a6cb7d`, `ci98f43d14`): e^x is its own derivative; the chain rule; the constant multiple rule; graphs of exponentials; gradient as the slope of the tangent.
Stops after: explaining with the flasks and the graph why the factor a appears and why b adds nothing; proving d/dx(e^(ax+b)) = ae^(ax+b); differentiating k e^(ax+b) and finding a gradient at a point; using the sign of a to decide whether the curve rises or falls. No general bases, products or quotients.
Handoff: 2^x written as e to some multiple of x (route math-a12-d02).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames come from the recording's word timings. Colour roles as listed in Decisions: k amber, a blue, b teal, answer green, mistake red, gradient violet, height ink. Screen maths uses raised powers (e²ˣ, e^(ax+b) set as a superscript), never "exp". Header strip "MATHEMATICS ADVANCED · EXPONENTIAL DERIVATIVES" at the top as in the Module 5 videos; scene headings in the hand font, 44 px.

### 1. hook: a flask where the rate equals the count
> This flask of warm broth holds about a million bacteria. Each cell grows, then splits in **two**, and the new cells do the same. So twice the cells means twice the splitting, and the growth rate is proportional to the count. For this strain, counting in millions of cells and hours, and while the food lasts, the growth rate equals the **count**. A million cells gain a million an hour, and three million gain three million.

Visual: cold open on the anchor, no title card. Frame 0: the painted flask (`ma12-broth-flask-v1.png`, about 520 px tall) sits left of centre on paper with a slow camera push; heading writes on in the hand font: "A flask where the rate equals the count". A dashed leader from the flask's broth opens a circular microscope field at the right (`ma12-microscope-field-v1.png`, about 560 px across) with 8 painted rod cells (`ma12-rod-cell-v1.png`) drifting; small hand tag at the leader "a drop, magnified". Under the field, `LiveReadoutBoard` in large type: "cells: 1.00 million" (ink) and "growth rate: 1.00 million per hour" (violet). On "two" one cell swaps to the dividing sprite (`ma12-rod-cell-dividing-v1.png`), pinches and becomes two cells; then cells across the field split at staggered times (`GrowthField` driven by y = e^x, x from 0 to 1.10 hours, compressed to the narration). The flask crossfades towards `ma12-broth-flask-cloudy-v1.png` as the count climbs. On "twice the splitting" a hand tag "× 2 cells → × 2 splits" writes beside the field. Both tickers climb together from 1.00 to 3.00 (the field reaches 24 cells). On "count" the two tickers are circled together in violet and ink with a hand tag "rate = count". On "three million gain three million" both tickers pause at 3.00 with a small "same" tag. A small grey tag under the flask, "while the food lasts", writes with that phrase.

### 2. the question: three changes
> Now some changes. The second flask holds a **faster** strain, also starting the clock with a million cells. That's y equals e to the two x. The third flask holds our first strain, seeded an hour **earlier**, so it starts with about two point seven million. That's y equals e to the x plus one. When the clock starts, which flask is gaining cells faster? Make a **guess**. Here's the twist. Differentiate each count, and only the fast strain gets a new factor in its derivative. By the end you'll know why, and how to differentiate k e to the a x plus **b**.

Visual: the field shrinks into a thumbnail beside flask 1; camera pulls back to a row. On "faster" flask 2 (same plate) slides in with a blue label "fast strain" and the equation strip under it, "y = e^(2x)", the 2 in blue; its mini field shows cells splitting visibly faster. On "earlier" flask 3 slides in with a teal label "seeded 1 hour earlier", a hand tag "already 2.72 million", and "y = e^(x+1)" with the +1 in teal. On "guess" two hollow question rings sit over flasks 2 and 3 with the hand tag "gaining faster now?" and a dim question chip at the right edge, 34 px: "Which flask gains faster at x = 0?". On "twist" the derivative stub "d/dx" appears under each strip; only under flask 2 a blue "× 2 ?" tag flickers. On "b" the strips fade to a single target strip, 52 px, centred above the row: "y = k e^(ax+b)", with k amber, a blue, b teal. The colour key stays as a small legend at the top right for the rest of the video (k amber "how many flasks", a blue "growth per cell", b teal "start time").

### 3. the graph: gradient equals height
> Let's graph the first flask. Time x goes along, in hours, and the count y goes up, in millions. The curve is y equals e to the **x**. From Year 11, the gradient at a point is the slope of the tangent, and e to the x is its own derivative. So on this graph, the gradient always equals the height. At height one, the slope is **one**. At about two point seven, the slope is about two point **seven**. Gradient divided by height is always one, and that's our measuring **stick**.

Visual: stage change to the large graph. Flask 1 with its live field shrinks to a 260 px thumbnail at the top left (cells still splitting). `CurveSimulator`: axes 1100 × 760 px, x from −2 to 2 labelled "x: hours", y from 0 to 8 labelled "y: cells (millions)". On "x" y = eˣ draws left to right in ink, label 44 px "y = eˣ". A grey chip "Year 11: gradient = slope of the tangent; d/dx(eˣ) = eˣ" writes at the top. The `LiveReadoutBoard` moves to the right panel, 52 px numbers: "height y" (ink), "gradient" (violet), "gradient ÷ height" (blue, because this number will become a). Then a point rides from x = −1.5 with its violet tangent and the tickers running. On "one" the point settles at x = 0: 1.00, 1.00, 1.00. On "seven" it settles at x = 1: 2.72, 2.72, 1.00, with a violet hand tag "same" between height and gradient. On "stick" the thumbnail's two tickers flash in step with the graph's, and the "gradient ÷ height = 1.00" row is boxed in blue with the hand tag "per cell".

### 4. the fast strain: the squash doubles every slope
> Now the fast strain, e to the two x. Here x is doubled before the exponential acts, so the curve reaches every height in half the time. Think of it as the first curve squashed sideways. This tangent triangle runs across one hour and rises about two point seven. Squash the curve, and the triangle squashes with it. The rise stays the same, but the run **halves**. Same rise in half the run, so the slope doubles, and the whole curve squashes evenly, so that's true at every point. At height one, the slope is now **two**. So the derivative of e to the two x is two e to the two **x**. Every million cells add two million an **hour**.

Visual: same large graph (camera continue). On the ink curve at x = 1 the dashed tangent triangle draws (`TangentTriangle`): run leg labelled "run 1", rise leg "rise 2.72", 32 px. Equation strip at the top: "y = e^(2x)" with the 2 in blue; hand tag "x is doubled first". On "squashed sideways" e^x leaves a dashed grey ghost and the curve morphs to blue y = e²ˣ (parameter a from 1 to 2 over about 1.5 s); the point slides from x = 1 to x = 0.5 at the same height and the run leg shrinks with the curve. On "halves" the run label changes to "run ½" with a hand circle and "halves", and the rise label keeps "rise 2.72" with a hand tag "same". The gradient ticker climbs 2.72 to 5.44 while the height ticker stays 2.72; "gradient ÷ height" ticks 1.00 to 2.00. On "two" the point rides to x = 0: 1.00, 2.00, 2.00. On "x" the result writes at the right, 52 px: "d/dx(e^(2x)) = 2e^(2x)" with both 2s blue and a blue arrow from the ratio row to the front 2, hand tag "× 2". On "hour" the flask 2 thumbnail replaces flask 1 at the top left with its tickers reading "1.00 million" and "2.00 million per hour"; the triangle dims.

### 5. a dial for a: any growth per cell
> Let's put a dial on the constant a. Turn it up to three, and every run shrinks to a third, so the gradient becomes three times the height. Turn it down to a half, and every slope **halves**. Now flip the sign, to minus **two**. The curve mirrors over the y axis and falls, like bacteria dying in disinfectant. Every uphill tangent becomes a downhill one, just as steep. The height stays positive, because e to any power is positive. Only the slope turns **negative**. Whatever a is, gradient divided by height reads **a**.

Visual: stage change to the slider simulation. The graph slides left to 900 px wide; a horizontal blue `ParameterSlider` 700 px wide appears under the scene heading, labelled "a", ticks at ½, 1, 2, 3, value badge 52 px in blue; beside it a mirror toggle "× (−1)". The curve y = e^(ax) and the point at the matched height (x = 1/a, height 2.72) follow the slider; the tangent triangle rescales live; the readout board reads live. On "three" the slider runs to 3: run "⅓", readouts 2.72, 8.15, 3.00; a short result line writes under the board, 36 px: "d/dx(e^(3x)) = 3e^(3x)" (3s blue). On "halves" the slider runs back past 1 to ½: the curve widens, run "2", readouts 2.72, 1.36, 0.50, hand tag "halves". The slider returns to 2 (readouts 2.72, 5.44, 2.00). On "two" (in "minus two") the mirror toggle flips: the curve mirrors about the y-axis into y = e^(−2x) (about 1 s), the point lands at x = −0.5, the triangle mirrors with it (run "½" to the left, rise 2.72); the slider badge reads "−2". At the same moment the field thumbnail shows cells fading out one by one, with a small grey tag "disinfectant: count falls". Gradient ticker swings 5.44 to −5.44; ratio −2.00. On "positive" the height ticker glows (2.72) and a hand tag under the curve writes "always above the x-axis: y > 0". On "negative" the minus sign of the gradient ticker is circled in violet. On "a" the "gradient ÷ height" row and the slider badge are joined by a blue hand arrow, tag "= a, every time". The slider never passes through 0 on screen.

### 6. the early flask: the slide changes nothing
> Now the early flask. Starting an hour earlier just slides the curve one hour **left**. Sliding doesn't tilt anything. Each tangent moves with its point and keeps its slope, so the derivative of e to the x plus one is just e to the x plus **one**. Back to your guess. When the clock starts, the early flask has about two point seven million cells, gaining about two point seven million an hour. The fast strain has one million, gaining two million an **hour**. So the early flask gains faster, but only because it has more cells. Per cell, the fast strain grows twice as fast. That's what a measures, the gradient compared with the **height**.

Visual: the slider and mirror toggle clear; the board resets on the same axes to y = eˣ with the triangle at x = 0 (run 1, rise 1), readouts 1.00, 1.00, 1.00. A teal `ParameterSlider` "b" appears at 0. On "left" the slider runs to 1 and the whole curve translates one unit left with the triangle attached (rigid, legs unchanged), becoming teal-labelled y = e^(x+1); the ink original stays as a ghost; readouts at x = −1 read 1.00, 1.00, 1.00; hand tag "slopes unchanged". On "one" the result writes, 52 px: "d/dx(e^(x+1)) = e^(x+1)" with the +1 teal and a hand tag "no new factor". On "Back to your guess" stage change: the anchor returns. Flasks 2 and 3 stand side by side, each with its live field and its own `LiveReadoutBoard` (52 px): fast strain "cells 1.00 million", "growth rate 2.00 million per hour", "per cell 2.00" (blue); early flask "cells 2.72 million", "growth rate 2.72 million per hour", "per cell 1.00" (blue). The cells tickers settle first; then on "hour" the two growth-rate tickers race up from 0 and the early flask's passes the fast strain's and stops higher; a green tick on the early flask answers "gaining faster now?". On "more cells" its cell count is circled in ink. On "Per cell" the two per-cell readouts (2.00 and 1.00) are circled in blue, hand tag "growth per cell = a". On "height" a full-width hand line writes under the flasks, 44 px: "a sets gradient ÷ height".

### 7. three flasks: the stretch scales everything
> Last change: three identical flasks, counted together. That's y equals three e to the x. Every count and every growth rate is three times bigger. On the graph, the curve **stretches** upward. The run stays the same, but the rise triples, so every slope triples. That's the Year 11 constant multiple rule: the three comes along for the **ride**. But each cell grows at the same pace, so gradient divided by height is still **one**. Only a changes that.

Visual: stage change to a split stage. At the top, a row of three flask plates (the same plate three times, never stretched) with an amber bracket "y = 3eˣ" (3 amber); one combined ticker pair under the bracket: "cells 3.00 million", "growth rate 3.00 million per hour". Below, the graph returns at 900 px with y = eˣ and the triangle at x = 0 (run 1, rise 1) and an amber `ParameterSlider` "k" at 1. On "stretches" the slider runs to 3 and every point's height triples over about 1.5 s into amber-labelled y = 3eˣ; the point rises from (0, 1) to (0, 3); the rise leg grows 1 to 3 while the run leg stays 1 (hand tag "same run"). Readouts tick to 3.00, 3.00, 1.00. On "ride" a grey chip writes "Year 11: d/dx(k·f) = k·f′" and the result "d/dx(3eˣ) = 3eˣ" writes (3s amber) with hand tag "rides along". On "one" the per-cell readout 1.00 is circled in blue. On "Only a changes that" a three-row summary strip builds at the top right, 36 px, each row in its role colour: "a (growth per cell): slopes × a", "b (start time): no new factor", "k (how many flasks): heights and slopes × k".

### 8. the chain rule proof
> Now let's prove it, with the Year 11 chain rule. Take y equals e to the a x plus b. Call the inside part u, so u equals a x plus **b**. Then y equals e to the u, and since that's its own derivative, d y by d u is e to the **u**. The inside part's derivative, d u by d x, is just **a**, because b is a constant. The chain rule multiplies them, e to the u, times a. Put the inside part back, and you get a e to the a x plus **b**. The b stays in the power but adds no factor, just like the early flask. And with k out the front, k just rides **along**.

Visual: stage change to the full-width working board (`WorkingBoard`). Task strip at the top, 44 px: "Prove: d/dx(e^(ax+b)) = ae^(ax+b)" (a blue, b teal). Grey chip "Year 11: dy/dx = dy/du × du/dx". The summary strip from scene 7 shrinks to a dim 30 px line at the top right. Rows, one per cue, equals signs aligned, current row 52 px, earlier rows shrink to 32 px and dim:
1. On "Take": "y = e^(ax+b)", the power in the dashed grey inner slot (a blue, b teal).
2. On "b": "let u = ax + b" (the slot's contents drop down into this row; the slot stays outlined).
3. On "u": "y = eᵘ, so dy/du = eᵘ".
4. On "a": "du/dx = a" (the a blue and boxed; in row 2 the "+ b" dims with hand tag "constant → 0").
5. "dy/dx = dy/du × du/dx = eᵘ × a".
6. On "b" (second): "= ae^(ax+b)" in a green answer frame; the inner slot reappears in the power with hand tag "inside part kept"; the blue a carries its box from row 4; a green tick draws.
On "just like the early flask" a small teal thumbnail of the slid curve flashes beside the teal b. On "along" a second green frame writes under the proof, 52 px: "d/dx(k e^(ax+b)) = k·a·e^(ax+b)" (k amber, a blue, b teal), with the hand tag "rides along" by the k; rows 1 to 5 dim.

### 9. worked example 1: e to the three x
> Let's use it. Differentiate y equals e to the three x. The inside part is three x, and its derivative is **three**. So keep e to the three x exactly as it is, and multiply by three. The derivative is three e to the three **x**. One trap. Don't bring the power down like you would for x cubed. That rule needs x in the base, and here x is in the power, so the exponential stays **whole**.

Visual: clear change to the worked-example board in the g01 layout (site `we-1`). Task strip, 44 px: "Differentiate". Equation strip: "y = e^(3x)" (3 blue). Givens card at the left (white card, 40 px): "inside part u = 3x", "a = 3" (blue). Working, current line 52 px: on "three" "du/dx = 3" (blue box); on "x" "dy/dx = e^(3x) × 3 = 3e^(3x)" in a green answer frame, the e^(3x) drawn as the same glyph lifted from the equation strip, hand tag "copied unchanged". On "trap" a red mistake card writes beside it: "dy/dx = 3x · e^(3x − 1)" and is crossed in red, with the red hand caption "x in the power, not the base" and a small grey comparison tag "x³ → 3x²: x in the base". On "whole" the e^(3x) in the answer is circled in green.

### 10. worked example 2: all three constants
> Now all three constants. Find f prime of minus three, where f of x equals five e to the two x plus six. So k is five, a is two and b is **six**. Copy the exponential, then multiply by k and a. Five times two is ten, so f prime of x is ten e to the two x plus **six**. Now substitute minus three. Two times minus three, plus six, is zero, and e to the zero is **one**. So f prime of minus three is **ten**. Check the graph. It's five high there, with a slope of ten, twice the height, as a equals two **predicts**.

Visual: clear change to a fresh g01 board. Task strip: "Find f′(−3)". Equation strip, 52 px: "f(x) = 5e^(2x+6)" with 5 amber, 2 blue, 6 teal. Givens card at the left, each line written on its spoken word ("k is five", "a is two", "six"): "k = 5" (amber), "a = 2" (blue), "b = 6" (teal), each with a thin coloured leader to its place in the equation. Working, one row at a time, current row 52 px: on "multiply by k and a" the k and a givens glow and row 1 writes "f′(x) = 5 × 2 × e^(2x+6)" (5 amber, 2 blue); on "six" (second) row 2 "= 10e^(2x+6)" (inner slot kept; row 1 shrinks and dims). On "minus three" row 3 "f′(−3) = 10e^(2(−3)+6)" with the −3 underlined; on "one" a hand bracket under the power writes "2(−3) + 6 = 0" and row 4 "= 10e⁰ = 10 × 1"; on "ten" row 5 "= 10" in a green answer frame. Rows 3 and 4 dim; row 2 and the answer stay. On "Check the graph" a 640 px `FunctionGraph` at the right (x from −4.5 to −2, y from 0 to 12, curve clipped at the top) draws y = 5e^(2x+6) with the point (−3, 5), violet tangent and triangle (run ½, rise 5); compact readouts 44 px: height 5.00, gradient 10.00. On "predicts" "gradient ÷ height = 2.00" writes in blue and the "a = 2" given glows, hand tag "a, as always".

### 11. memory aid
> Here's a way to hold onto it. Think of the flasks. a is the growth per cell, so it sets the gradient compared with the height. b is the start time, so it doesn't change the slopes. k is how many flasks, so it scales heights and slopes together. In short, copy the exponential, then multiply by k and by **a**.

Visual: stage change to the framed memory-aid card (`MemoryAidCard`, 1300 × 560 px, double ink frame, hand-font heading "Memory aid"). Three small flask icons from the plates line up along the left edge as the lines write: the fast strain beside "a: growth per cell → sets gradient ÷ height" (blue), the early flask beside "b: start time → no change to the slopes" (teal), the three-flask row beside "k: how many flasks → heights and slopes × k" (amber). On "a" the main line writes large in the hand font, 60 px: "Copy the exponential, then multiply by k and a." and below it, 40 px: "d/dx(k e^(ax+b)) = k·a·e^(ax+b)". Hold about 2 s (reading hold).

### 12. attempt 1 (countdown, 10 seconds)
> Your turn. Differentiate f of x equals four e to the two x minus one, then find f prime of a half. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Consider the function f(x) = 4e^(2x − 1). (a) Find f′(x). (b) Hence find the exact value of f′(½)." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." in the hand font. Nothing answer-bearing (no colour roles on the constants, no graph).

### 13. feedback 1 (brief)
> The inside part is two x minus one, with derivative **two**. So f prime of x is four times two, e to the two x minus one, which is eight e to the two x minus **one**. At a half, the power is zero, and e to the zero is one, so f prime of a half is **eight**. If you got four, you dropped the factor of two from the **inside**.

Visual: the card shrinks to the top (30 px). On "two" "2x − 1" in the card is underlined and the colour roles switch on in the card (4 amber, 2 blue, −1 teal); a row writes, 52 px: "u = 2x − 1, du/dx = 2" (2 blue boxed). On "one" "f′(x) = 4 × 2 × e^(2x−1) = 8e^(2x−1)" (green frame; "4e" underlined in the card). On "eight" "½" is underlined; row "2(½) − 1 = 0, so f′(½) = 8e⁰ = 8" in a green frame. On "inside" a red mistake card "f′(x) = 4e^(2x−1), so f′(½) = 4" writes and is crossed in red, red hand caption "multiply by the inside derivative, 2". Hold about 1 s.

### 14. attempt 2 (countdown, 10 seconds)
> Last one. A curve has equation y equals three e to the minus two x. Find its gradient at x equals zero, and explain why the curve is decreasing for every x. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A curve has equation y = 3e^(−2x). (a) Find the gradient of the curve at x = 0. (b) Explain why the curve is decreasing for all real values of x." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 15. feedback 2 (brief)
> The derivative is three times minus two, e to the minus two x, which is minus six e to the minus two **x**. At zero, that's minus **six**. E to any power is positive, so e to the minus two x is always positive. Times minus six, the gradient is negative for every x, so the curve is always **decreasing**. It isn't because the curve dips below zero. It never **does**.

Visual: the card shrinks to the top. On "x" "−2x" in the card is underlined (−2 blue, 3 amber); row, 52 px: "dy/dx = 3 × (−2) × e^(−2x) = −6e^(−2x)" (green frame). On "six" "x = 0" underlined; row "at x = 0: −6e⁰ = −6" (green frame). On "positive" a chip writes "e^(−2x) > 0 for every x" and beside it "(−6) × (positive) < 0"; "for all real values of x" is underlined in the card. On "decreasing" a 600 px graph draws y = 3e^(−2x) falling and staying above the x-axis, a point riding it with its violet downhill tangent. On "does" a red mistake card "decreasing because y < 0" writes and is crossed, red hand caption "y > 0; the minus comes from a = −2". Hold about 1 s.

### 16. handoff
> **Next**, a strain that doubles exactly every hour has a count of two to the x. Is two to the x secretly e to some number times **x**? Find that number, and you can differentiate it the same way.

Visual: stage change back to the anchor. The memory line from scene 11 sits small at the top (30 px). On "Next" a fresh flask plate slides in with the label "doubles every hour" and its field showing cells splitting in step; a 760 px graph beside it draws y = 2ˣ in ink beside the dashed ghost of eˣ (same window), with readouts at x = 1: "cells 2.00 million". On "x" a 52 px chip writes "2ˣ = e^(? × x)" with the ? in a blue a-role slot and the hand tag "growth per cell?". Final frame (held about 2 s): flask, graph and chip, plus a small chip "Next: exponentials with other bases". This is the frame d02 must open on (Open decisions).

### 17. key notes (quiet, hold about 40 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 34 px, colour roles kept.
> Here are the key notes. Pause the video if you need more time to copy them.

- d/dx(e^(ax+b)) = ae^(ax+b) and d/dx(k e^(ax+b)) = k·a·e^(ax+b).
- For y = k e^(ax+b): gradient = a × height. a sets the gradient compared with the height; b slides the curve (no new factor); k scales heights and slopes together.
- Proof: u = ax + b, du/dx = a, so dy/dx = eᵘ × a = ae^(ax+b).
- Negative a: gradient negative, but y stays positive (e to any power is positive).
- Trap: not 3x·e^(3x − 1). The power rule needs x in the base.

Memory aid (framed card, right half of the notes screen, as in scene 11): *Copy the exponential, then multiply by k and a.* Flask key: *a: growth per cell. b: start time. k: how many flasks.*

## Teaching checks

- **Does it explain causes?** Why the flask's rate equals its count: each cell splits on its own schedule, so twice the cells gives twice the splits (1). Why e^(2x) gains a factor 2: the sideways squash halves every run and keeps every rise (4). Why any a gives gradient = a × height, including halves and negatives: the slider shows runs scaling by 1/a and the mirror turning uphill to downhill (5). Why b adds nothing: a slide moves each tangent without tilting it (6); in the proof b is a constant (8). Why the early flask gains faster yet has no factor: it has more cells, not more growth per cell (6). Why k multiplies the derivative: every rise grows by k with the run unchanged (7). Why the chain rule gives a: du/dx = a (8).
- **Misconceptions addressed:** "a slide changes the derivative" and "the curve gaining faster has the bigger factor" (6, shown by the racing tickers); "bring the power down" (9, crossed red); "forget the inner factor" (13, crossed); "a negative power makes the curve negative" (5; 15, crossed); "k changes the gradient-to-height ratio" (7, said positively).
- **Visual standard (`../maths-visual-standard.md`), item by item:** 1 anchor in the first second (painted flask and field), returning in 6, 7, 11 and 16; 2 stage changes every 16 to 85 s, with a new visual idea inside each (stage plan below); 3 two simulations with live readouts (`GrowthField`, `CurveSimulator` with sliders); 4 fixed colour roles listed in Decisions; 5 large type (52 px current line, 30 px minimum supporting, 26 px floor); 6 hand tags in accent colours; 7 worked examples with task strip, coloured givens card, colour-carried working, green framed answer, red crossed mistake; 8 framed memory-aid card and five short key-note bullets; 9 the surprise shown happening (the early flask's rate ticker overtakes in scene 6).
- **One idea at a time:** one change per scene (fast strain, dial for a, early start, three flasks); at most one readout board live except the scene 6 comparison, where the pair is the point; older working shrinks and dims; established results kept as a short strip.
- **Response opportunity:** two unseen HSC-style tasks with every condition visible, 10 s each with the invitation to pause, nothing answer-bearing. Feedback about 24 s and 27 s, one crossed mistake each.
- **Avoided double teaching:** e^x as its own derivative, the tangent meaning of gradient, the chain rule and the constant multiple rule are one sentence each with a grey "Year 11" chip. No biology beyond "cells grow, then split in two".
- **Syllabus coverage:** `ci8306d30a` (scenes 7 to 10, attempts) and `ci4380403a` (scene 8, with a ≠ 0 implicit; author note a).
- **Out of scope by design:** a^x, e^(f(x)) with non-linear f, products, quotients, adding a constant, stationary points, differential equations, logistic growth.

## Practice questions and model answers

**Attempt 1 (scene 12; original, HSC style, 2 marks suggested, not an official marking scheme).** "Consider the function f(x) = 4e^(2x − 1). (a) Find f′(x). (b) Hence find the exact value of f′(½)."
Model answer: (a) u = 2x − 1, du/dx = 2, so f′(x) = 4 × 2e^(2x−1) = 8e^(2x−1). (b) 2(½) − 1 = 0, so f′(½) = 8e⁰ = 8. Classic mistake (crossed): f′(x) = 4e^(2x−1), giving 4.

**Attempt 2 (scene 14; original, HSC style, 3 marks suggested).** "A curve has equation y = 3e^(−2x). (a) Find the gradient of the curve at x = 0. (b) Explain why the curve is decreasing for all real values of x."
Model answer: (a) dy/dx = 3 × (−2)e^(−2x) = −6e^(−2x); at x = 0, dy/dx = −6. (b) e^(−2x) > 0 for every real x, so dy/dx = −6e^(−2x) < 0 for every real x, so the curve is decreasing everywhere. Classic mistake (crossed): "decreasing because y < 0" (in fact y > 0 for all x).

## Numbers used (author note: every value; recalculated with Python, 6 Nov)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Anchor units | y in millions of cells, x in hours from when the clock starts | 1 to 7, 16 |
| First strain | y = eˣ; growth per cell 1 per hour; doubling time ln 2 h = 41.59 min (author note only) | 1, 3 |
| Scene 1 sim | x from 0 to ln 3 = 1.0986 h; count and rate 1.00 to 3.00; field 8 to 24 cells | 1 |
| Fast strain | y = e^(2x); at x = 0: 1.00 million, rate 2.00, per cell 2.00; doubling 20.79 min (author note only) | 2, 4, 6 |
| Early flask | y = e^(x+1); at x = 0: 2.72 million, rate 2.72, per cell 1.00; at x = −1: 1.00, 1.00 | 2, 6 |
| Three flasks | y = 3eˣ; at x = 0: 3.00, 3.00, per cell 1.00; triangle run 1, rise 3 | 7 |
| e | 2.71828 (shown 2.72; said "about two point seven") | 2 to 6 |
| Main window | x from −2 to 2, y from 0 to 8 | 3 to 7, 16 |
| eˣ | x = 0: 1, 1; x = 1: 2.72, 2.72; triangle at x = 1 run 1, rise 2.72 | 3, 4 |
| e^(2x) | x = 0.5: 2.72, 5.44; x = 0: 1, 2; triangle run ½, rise 2.72 | 4, 5 |
| e^(3x) | x = ⅓: 2.72, 8.15, ratio 3.00; triangle run ⅓ | 5 |
| e^(x/2) | x = 2: 2.72, 1.36, ratio 0.50; triangle run 2 | 5 |
| e^(−2x) | x = −0.5: 2.72, −5.44, ratio −2.00; triangle run ½ to the left | 5 |
| Example 1 (site we-1) | y = e^(3x), dy/dx = 3e^(3x) | 9 |
| Example 2 | f(x) = 5e^(2x+6), f′(x) = 10e^(2x+6), f′(−3) = 10; f(−3) = 5; window x −4.5 to −2, y 0 to 12 (curve reaches 12 at x = −2.562) | 10 |
| Crossed (9) | 3x·e^(3x−1) | 9 |
| A1 | f′(x) = 8e^(2x−1), f′(½) = 8; crossed 4 | 12, 13 |
| A2 | dy/dx = −6e^(−2x), gradient at 0 = −6; crossed "y < 0" | 14, 15 |
| Handoff | y = 2ˣ; at x = 1: 2.00 million; growth per cell ln 2 = 0.693 (not shown) | 16 |

## Numbers to verify (all values, repeated for Codex)

Computed with Python on 6 Nov; Codex to re-check numerically and with a CAS.

- e = 2.718282; 2e = 5.436564; 3e = 8.154845; e/2 = 1.359141; e³ = 20.0855 (e^(x+1) at x = 2, clipped).
- d/dx e^(ax) = a e^(ax). At x = 1/a: height e, gradient a·e for a = 1, 2, 3, ½; for a = −2 at x = −½: height e, gradient −2e.
- Tangent of e^x at x = 1: y = e·x, through (1, e) and (2, 2e). Tangent of e^(2x) at x = ½: y = 2e(x − ½) + e, through (1, 2e) = (1, 5.4366).
- e^(x+1) at 0: 2.718, gradient 2.718; e^(2x) at 0: 1, gradient 2. 2.718 > 2, so the early flask gains faster at x = 0.
- 3e^x at 0: height 3, gradient 3; tangent y = 3x + 3.
- Anchor: per-cell growth rate r with doubling time T: r = ln 2 / T. r = 1 per hour gives T = 0.6931 h = 41.59 min; r = 2 per hour gives 20.79 min. Scene 1 run to count 3: x = ln 3 = 1.0986 h.
- Example 1: d/dx e^(3x) = 3e^(3x). Example 2: f′(x) = 10e^(2x+6); 2(−3) + 6 = 0; f′(−3) = 10; f(−3) = 5; tangent y = 10(x + 3) + 5; y = 12 at x = (ln 2.4 − 6)/2 = −2.5623.
- A1: f′(x) = 8e^(2x−1); f′(½) = 8. A2: dy/dx = −6e^(−2x); at 0: −6.
- dy/dx = a·y for y = k e^(ax+b) (author note b); e^(x+1) = e·e^x (note c).
- Handoff: 2^x = e^(x ln 2), ln 2 = 0.6931 (not shown or spoken).

## Memory aid check

- **"Copy the exponential, then multiply by k and a."** Restates d/dx(k e^(ax+b)) = k·a·e^(ax+b). Assumption: the power is linear in x (ax + b). For e^(x²) the inside derivative is 2x (d06); the aid is phrased with "a", defined here as the coefficient of x in a linear power, so it claims no more. Introduced after the cause (3 to 7) and the proof (8).
- **Flask key: "a: growth per cell. b: start time. k: how many flasks."** Checked: for y = k e^(ax+b), (dy/dx)/y = a, the growth rate per unit of count, independent of k and b; b shifts the time origin (e^(a(x + b/a))), so it is a start-time change of b/a hours, which equals b when a = 1 as in the early flask. The card says "start time" for b as the idea, not a number of hours; the key notes do not convert b to hours. k multiplies count and rate together (k identical flasks counted together). Negative a means the count shrinks (per-cell rate negative), as in the disinfectant picture. Limits: fails if a constant is added to the whole function (author note b; a constant would be cells that never grow); describes the growth phase only.
- **Considered, not used:** v1's playback-speed analogy (same meaning, but the flasks are now on screen and watched; two analogies would compete); "the derivative of e to the anything is e to the anything times the derivative of the anything" (skips the cause; belongs to d06); the site's "comes down in front" (echoes the power rule).

## Narration length estimate

Counted by script on 6 Nov with the build parser rules (`### N.` headings; only lines starting "> " counted, joined with a space, `**` removed): **6,528 characters**, 17 scenes. Characters per scene (1 to 17): 416, 541, 460, 617, 506, 626, 439, 530, 375, 493, 305, 120, 309, 178, 351, 187, 75.

At 13.3 characters per second the speech is about 491 s. Holds: two 10 s countdowns (20 s), the memory-aid reading hold (2 s), two feedback holds (2 s), the handoff final-frame hold (2 s), morph, slider and stage-change settling (about 10 s), and about 35 s more of the quiet key-notes hold: **about 562 s (9 min 22 s)**, inside the 5,500 to 6,800 character band and under the 570 s cap. The margin is small (about 8 s), so the voiced take must be timed before export.

Approximate seconds per scene (speech plus holds and settling): 1 hook 32; 2 question 42; 3 graph 36; 4 squash 48; 5 dial 40; 6 slide and comparison 49; 7 three flasks 35; 8 proof 40; 9 worked 1 28; 10 worked 2 37; 11 memory aid 25; 12 attempt 1 19; 13 feedback 1 24; 14 attempt 2 23; 15 feedback 2 27; 16 handoff 16; 17 key notes 41.

Reserve trims if the voiced take runs long: scene 10's graph-check sentences (keep the ratio chip; about 7 s); scene 5's disinfectant clause (keep the fading field; about 2 s); scene 4's "Think of it as the first curve squashed sideways" (the morph shows it; about 3 s). Do not cut below 5,500 without replacing content.

## Scene list and build ids

Lesson key `m-a12d01` (route math-a12-d01). Explainer folder `src/explainer/lessons/math-a12-d01`; build folder `docs/production/claude-pm/lessons/m-a12d01` (root to confirm the LESSONS entry). Everything reusable is built as a maths-kit part (see "Kit parts needed"), not lesson-local code.

In order (17 scene headings, all `### N.`): hook-flask, three-flasks, graph-gradient-height, fast-strain-squash, dial-a, early-flask-slide, three-flasks-stretch, chain-proof, worked-1, worked-2, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (seconds from the per-scene estimate):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 74 s | 1, 2 | Anchor: painted flask with live microscope field, then a row of flasks |
| 74 to 158 s | 3, 4 | Large graph simulation: riding point and readouts (3), then the squashing tangent triangle (4) |
| 158 to 198 s | 5 | Slider simulation for a, mirror toggle, fading field |
| 198 to 247 s | 6 | Slide on the graph, then the anchor comparison with racing tickers |
| 247 to 282 s | 7 | Split stage: three flask plates over the stretching graph |
| 282 to 322 s | 8 | Full-width proof board |
| 322 to 387 s | 9, 10 | Worked-example boards (g01 layout), the second with a small graph check |
| 387 to 412 s | 11 | Framed memory-aid card |
| 412 to 505 s | 12 to 15 | Question cards with countdowns, then feedback working and a falling-curve graph |
| 505 to 521 s | 16 | Anchor handoff: doubling flask and 2ˣ graph |
| 521 to 562 s | 17 | Key notes with the framed card |

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`: the learner reads the worded question and works during the countdown) and key-notes (`hold`: the learner copies five bullets and the card). Memory-aid ends on a 2 s reading hold inside an explain scene. Transitions (`pickTransition`): 1 to 2 camera pull back (whole flask row); 2 to 3 camera push from flask 1 into its graph (the field becomes the thumbnail); 3 to 4 camera continue (same axes); 4 to 5 camera continue with the graph sliding left for the slider; 5 to 6 soft board reset on the same axes, then a clear change back to the anchor at "Back to your guess"; 6 to 7 clear change to the split stage; 7 to 8 camera push from the summary strip into the proof board; 8 to 9 and 9 to 10 clear change (new task); 10 to 11 clear change to the card; attempts and feedback: card shrinks to the top; 15 to 16 clear change to the anchor; 16 to 17 fade to the notes board.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, "Pause here to answer." on screen). key-notes is the quiet notes hold (about 40 s in all; students can pause for longer). Review evidence paths: `learning_review` = `checks/m-a12d01-learning-review.md`, `science_check` = `checks/m-a12d01-maths-check.md` (the maths check also covers the anchor biology, author notes e and the idealising assumptions).

## Assets

Inspected before choosing (6 Nov, actual appearance): `public/assets/biology/m6-agar-dish-top-v1.png` (empty top-down agar dish), `m6-antibiotic-colonies-before-v1.png` (top-down lawn of uniform colonies), `m7-petri-colonies-v1.png` (three-quarter dish of mixed bacterial and mould colonies). None shows a broth culture or dividing cells, and the colony plates would anchor the wrong model (colonies on agar are not exponential for long). Not used. `y11-cheek-cells-field-v1.png` is the style match for the microscope field.

Need (painted, new; see the Codex asset brief):
- `ma12-broth-flask-v1.png` and `ma12-broth-flask-cloudy-v1.png` (crossfade pair, identical geometry).
- `ma12-microscope-field-v1.png` (empty field of broth).
- `ma12-rod-cell-v1.png` and `ma12-rod-cell-dividing-v1.png` (sprites for `GrowthField`).

Coded (kit): graphs and axes, tangent triangles, sliders, readout boards, working boards, question cards, countdown, hand tags, framed card, key notes. No coded cartoon of a flask, cell or microscope.

## Kit parts needed

All reusable maths-kit parts in `src/explainer/math/` (exported from `kit.tsx`), not lesson-local code. d02 to d67 reuse them.

1. **`MATH_ROLES` colour-role tokens** (`roles.ts`): `k` amber, `a` blue, `b` teal, `answer` green, `mistake` red, `gradient` violet, `height` ink, `inner` dashed grey, with a `Role` span (`<Role r="a">2</Role>`) so the same symbol takes the same colour in strips, cards, working, graph labels and sliders; contrast at least 4.5:1 on paper.
2. **`ParameterSlider`**: horizontal labelled slider (role colour, ticks at chosen values, 52 px value badge) driven by a frame-keyed value timeline; optional `mirror` toggle that animates a sign flip as a reflection rather than sweeping through an excluded value.
3. **`CurveSimulator`**: one timeline drives `FunctionGraph` (parameterFn for a, b, k), a riding point, the violet tangent, `TangentTriangle` (legs carried by the same transform) and a `LiveReadoutBoard`, so curve, triangle and readouts can never disagree; keyframes `{frame, a, b, k, x}`.
4. **`LiveReadoutBoard`**: large readout rows (52 px numbers, 30 px labels) with number tickers, role colours, optional unit text ("million per hour"), circle and box marks on any row; replaces the 30 px `HeightSlopeReadout` for stage use.
5. **`GrowthField`**: circular painted microscope field with painted cell sprites; visible count follows a supplied function (sprites = round(scale × y)), deterministic seeded placement and drift, division as a crossfade to the dividing sprite and a split into two, fade-out for a falling count; never draws a coded organism.
6. **`AnchorStage`**: places one or more plates (`Plate`, native aspect, never stretched) with labels, leaders, a slow camera push and a thumbnail mode that keeps a live field running in a corner.
7. **`WorkingBoard`** (g01 layout): `TaskStrip`, `EquationStrip`, `GivensCard` (role-coloured lines with optional leaders to the equation), staged rows (current 52 px, earlier rows shrink to 30 to 32 px and dim), `AnswerFrame` (green), `MistakeCard` (red, crossed), inner-expression slot and derivative-factor box from `algebra.tsx`.
8. **`HandTag`**: hand-font annotation (34 px or larger) in a role colour, anchored to graph coordinates or screen coordinates, with optional arrow, circle, underline or cross that draws on at a cue; at most two live (lint warning above two).
9. **`MemoryAidCard`**: framed card (double ink rule, hand-font heading) with a large main line and up to three keyed lines with small icon slots; reused small on the key-notes screen.
10. **`KeyNotes` bullets variant**: short bullets (34 px, role colours allowed) in the left half and the `MemoryAidCard` in the right half; no paragraphs.
11. **`QuestionCard` maths styling**: already in `math/lesson-parts.tsx`; needs 40 px question text, shrink-to-top at 30 px, and a `rolesOn` switch that colours constants only after the hold (feedback).

## Codex asset brief (Maths A12 D01, bacteria in broth)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a12-d01.md`, route entry math-a12-d01. Paint after the learning review and maths check pass and root gives the go-ahead. Save to `public/assets/maths/` (create the folder). Every plate: **transparent PNG with a true alpha channel** and clean edges with no coloured fringe or halo (check on a black and a white background); ink and watercolour in the house style of the Module 5 Biology plates (match `public/assets/biology/b6a-bacterium-v1.png` for the cells and `y11-cheek-cells-field-v1.png` for the field); at least 8 per cent clear margin; no text, labels, letters, numbers, scale bars, brand names, people, hands, faces, backdrop, glow or ground shadow. Never stretch to fit; keep the native aspect ratio.

1. `ma12-broth-flask-v1.png` (1400 × 2000 px): one glass conical (Erlenmeyer) flask, about 250 mL, front view at slight elevation, closed with a plain cotton-wool or foam bung, holding pale golden, slightly hazy nutrient broth to about one third of its height. No bench, stand, shaker or hands. Glass shown with light edge highlights only.
2. `ma12-broth-flask-cloudy-v1.png` (1400 × 2000 px): generated from plate 1 with **identical flask, bung, framing and liquid level**; only the broth changes, to an evenly milky, dense cloudiness (a dense bacterial culture). Plates 1 and 2 must cross-fade with no movement of any edge.
3. `ma12-microscope-field-v1.png` (2000 × 2000 px): a single circular light-microscope field of view filling the canvas, thin dark rim, transparent outside the circle, interior a pale, even, slightly warm background like a drop of broth at high power, with no cells, debris or bubbles (the cells are separate sprites).
4. `ma12-rod-cell-v1.png` (800 × 400 px): one rod-shaped bacterium (bacillus, the shape of E. coli), horizontal, about three times as long as wide, rounded ends, soft translucent body in a muted warm tone that reads clearly on plate 3; no flagella, pili or internal labels.
5. `ma12-rod-cell-dividing-v1.png` (1000 × 400 px): the same cell, same tone and width, elongated to about twice its length and visibly pinched inward at the middle (a dividing cell just before it separates into two). Centre line of the pinch at the exact horizontal centre of the canvas, so code can split it into two copies of plate 4.

Report inspection on the paper background (`#f6f1e7`) at 300 px and 600 px wide, plus the alpha check; confirm plates 1 and 2 differ only in the broth. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma12-d01-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" numerically and with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the geometric claims: the squash by 1/a keeps rises and scales runs by 1/a, so slopes scale by a (note a); the reflection for negative a; the slide keeps slopes; the stretch multiplies rises by k; dy/dx = a·y for y = k e^(ax+b) and its failure with an added constant (note b).
3. Confirm the anchor biology: binary fission of rod bacteria; growth rate proportional to count in the log phase of a well-mixed broth culture; the stated doubling times (author note only) are plausible; "while the food lasts" is sufficient learner copy; the disinfectant clause is acceptable as a picture of exponential decline (note v of the assumptions).
4. Confirm the chain rule proof rows in scene 8 are complete, correctly ordered, and retain the inner expression.
5. Confirm both attempts are original and that every condition the answer needs is on the card.
6. Confirm the syllabus quotes match the route JSON `syllabusActions` exactly, and that no site "Year 11" or "Module 4" label appears in learner copy or metadata ("Year 11" chips refer to the Year 11 course, not the site's module label).
7. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
8. Confirm the narration character count and per-scene counts by script, and that every bold cue word is quoted in its scene's Visual in spoken order.

## YouTube metadata (draft)

Title: Differentiating k e^(ax+b): Squash, Slide or Stretch e^x | Year 12 Maths Advanced (82 characters)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/differential-calculus/lesson01.sa.html

A flask of bacteria where the growth rate equals the count is the curve y = e^x: its gradient always equals its height. A faster strain, a flask started earlier and three flasks together are the three changes in k e^(ax+b). Watch which one changes the gradient compared with the height, see why the flask gaining fastest is not the one with the new factor, then prove d/dx(e^(ax+b)) = ae^(ax+b) with the chain rule and differentiate k e^(ax+b). Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 12, differential calculus.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Apply the rules of differentiation to find the derivative of f(x) = ke^(ax), where k and a are constants"
"Use the chain rule to prove d/dx(e^(ax+b)) = ae^(ax+b), where a and b are constants and a ≠ 0"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4d003480

Builds on Year 11: e^x is its own derivative; the chain rule. Next: Differentiating a^x.

#Year12Maths #MathsAdvanced #Calculus #HSCScience

## Open decisions

- **d02 opening must be reconciled (root, before d02 is voiced).** `math-a12-d02.md` scene 1 currently opens on d01 v1's final frame (eˣ and 2ˣ on the same axes, "Differentiating aˣ: where does ln a come from?"). d01 now ends on the doubling flask, the 2ˣ graph beside the ghost of eˣ and the chip "2ˣ = e^(? × x)" with a blue slot. d02 should open on that frame and keep the flask anchor (a strain that doubles every hour, growth per cell ln 2). d02 is not edited here.
- **Letter clash for d02 (root).** d02's base letter a (aˣ) collides with d01's colour role a (coefficient of x, blue). Recommend d02 keeps blue for the coefficient that appears after rewriting (aˣ = e^(x ln a), so ln a takes the blue a-role) and shows the base in ink. d01's final chip says "exponentials with other bases" to avoid the clash.
- **Kit build (root).** The eleven kit parts above are new or extended. Recommend one Codex kit brief before the d01 build, with a silent kit pilot (slider sweep, growth field, working board) judged at playback speed by Claude first, since all 67 maths videos will use them.
- **Anchor plates (root).** Five plates; the brief allows reuse in d02 (doubling flask) and later growth and decay lessons (Year 12 exponential growth and decay). Confirm `public/assets/maths/` as the folder.
- **Adding a constant (learning review to judge, kept from v1).** If the reviewer thinks students will apply "gradient = a × height" to e^(2x) + 5, add one sentence to scene 7 ("Adding a number on the end lifts the curve without tilting it, so it adds nothing to the derivative") and qualify key note 2. About 120 characters.
- **Letter "a" in speech (voice pilot, kept).** Test scenes 5, 8, 10 and 11 on the Google voice; use a per-word pronunciation override if "a" is read as the article.
- **Site link form.** `.sa.html` form, as chem-m8-c01. Confirm the live maths page path.

## Review notes

- Revision 5 has had no independent review. Next: student learning review (`../../student-learning-review.md`) from the stated entry knowledge (check that the flask idea is understood without biology background, that scene 6's racing tickers resolve the hook, and that scene 5's slider is followable at playback speed), then the Codex maths check (including the anchor biology) and the error check. Then the kit brief, plates, build and the silent or voiced pilot for owner viewing; no other maths build or render runs until the owner accepts this pilot (`../maths-visual-standard.md`, Process).
- Motion must be judged at playback speed: the triangle stays attached to the curve during every transform, the readouts never contradict the screen, the field's cell count follows the ticker, and the rate tickers in scene 6 visibly race.

## Revision 5 (6 Nov 2026)

What changed and why: the owner rejected the rendered v1 as boring, with no images, assets or simulations, far below the Module 5 Biology and Chemistry videos (`../maths-visual-standard.md`). This revision rebuilds the design to that standard while keeping v1's scope, route boundaries, worked-example numbers, both practice questions, the chain rule proof, the d02 handoff and its teaching logic (gradient equals height, the squash doubles slopes, the slide changes nothing, the stretch scales both).

- Added a real anchor from the first frame: painted flasks of broth with a live microscope field of splitting cells. The rate-equals-count idea is e^x being its own derivative, and the three changes are a faster strain (a), an earlier start (b) and three flasks (k). The anchor answers the hook in scene 6 and returns in 7, 11 and 16.
- Hook surprise made visual: the early flask's rate ticker overtakes the fast strain's, then the per-cell readouts show the factor a.
- Two simulations with live readouts: the growth field, and the curve simulator with sliders for a, b and k (a = ½ restored; a mirror toggle for negative a).
- Fixed colour roles, 52 px current lines, hand tags, g01-style worked boards with coloured givens, green framed answers and red crossed mistakes, a framed memory-aid card and five short key-note bullets.
- A new stage every 16 to 85 s, each with its own visual idea, instead of one graph for most of the video.
- Memory aid now in flask terms (growth per cell, start time, how many flasks), replacing the playback-speed analogy. SecantToTangent and the gradient-mark overlay are dropped; the riding point and readouts carry the recall.
- Eleven reusable kit parts specified; five `ma12-` plates briefed. Narration 6,528 characters, about 562 s.
