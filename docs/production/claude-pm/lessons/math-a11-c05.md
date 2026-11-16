# Maths A11 C05: What is the derivative, and how do we write it? The gradient function f′(x), when a derivative exists, differentiation, and the notations f′(x), dy/dx, y′ and d/dx (design)

Status: Revision 1 (16 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`) and the accepted Year 11 designs (`math-a11-w05.md`, `w14.md`, `w31.md`; rulings in `../checks/root-acceptance-maths-a11-w01-w14.md`, `-w15-w31.md` and `../checks/root-rulings-maths-a11-c-e-packs.md`). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,564 characters by script (see "Narration length estimate"), 13 scene headings, about 506 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: thirty-sixth video of Year 11 Mathematics Advanced (2024), outline order 36, Introduction to differentiation. Pre-design pack: `../pre-design/maths-a11/math-a11-c05.md` (brief 243). Site lesson (read through the pack's quotations, read only): `introduction-to-differentiation/lesson03.sa.html` (key terms and notation; its worked examples belong to c06 and c08). Route entry: `math-a11-c05` in `../../programme/maths-a11-route-inputs-3.json`. Visual system: maths studio kit; the painted water slide (c04's brief) and a painted water balloon on a balcony for the handoff (prefix `ma11-`); every graph, tracer and chip coded.

Owner rules applied: as c01 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (games and leisure: a water slide), Australian spelling, no em dashes, conversational narration).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Introduction to differentiation; The derivative, and Calculations with the derivative), quoted from `../../programme/maths-a11-route-inputs-3.json`:

- `cie4815a8e`: "Define f'(x), for any function f(x) and any value x, to be the gradient of the tangent to the curve y = f(x) at the point P(x, f(x)) if the tangent exists and is not vertical"
- `cicb34a73b`: "Refer to f'(x) as the derivative of f(x) or the gradient, or derived, function of f(x)"
- `ci68ad7095`: "Define differentiation as the process of finding the derivative of a function"
- `ci0ea72300`: "Use the notation dy/dx and y' for the derivative of y when y is a function of x"
- `ci2f16a100`: "Use the notation d/dx (f(x)) and f'(x) for the derivative of a function f(x)"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678

**Boundary:** starts from c04's final frame (the water slide side-on, a dot riding its profile with a short violet tangent, "steepness here: ?"). Teaches: collecting the gradient at every x into a new function, traced on y = x² (gradients −4, −2, 0, 2, 4, 6 at −2 to 3, lying on y = 2x; a pattern, proved in c06); the name f′(x), the derivative, also the gradient function or derived function (`cicb34a73b`); the definition as the tangent's gradient at P(x, f(x)) if the tangent exists and is not vertical (`cie4815a8e`, original teaching for the condition: crosswalk partial), with a corner (|x − 2| at 2) and a vertical tangent (∛x at 0); differentiation as the process of finding it (`ci68ad7095`); the notations f′(x), dy/dx, y′ and d/dx(f(x)) (`ci0ea72300`, `ci2f16a100`), dy/dx read "d y by d x" as one symbol; f(a) as a height against f′(a) as a gradient. Stops at meaning and notation. Not taught: first principles (c06); rules (c07); the sign of f′ and increasing or decreasing (c14). The derivatives used (2x for x², 3x² for x³ in A1) are given or traced, not derived.

## Decisions

- **Anchor: a water slide, side-on (painted plate, live).** Every point of the chute has its own steepness, so "the gradient at every point" is a list you could walk down the slide reading; a sharp kink and a sheer vertical drop are the two everyday shapes where "how steep is it here?" has no answer, which are exactly the definition's two exclusions. Games and leisure. The pack's anchor 1; no Year 12 or w-strand design uses a water slide (grep 16 Nov). The share-price app (pack anchor 2) was rejected: real price charts are made of corners, which fights the definition.
- **Simulations (standard item 3).**
  1. **`PairedDerivativePanel`** (scene 2): top, y = x² with a point riding from x = −2.5 to 3 and its violet tangent; bottom, a second plot where a violet dot drops at each x with height equal to the tangent's gradient, leaving a trail that builds the line y = 2x. Live readouts "x" (blue), "height f(x)" (teal), "gradient" (violet).
  2. **Slide rider** (scenes 1, 4): a dot rides the slide plate's traced profile (sidecar points, c04's brief) with its violet tangent and a live "steepness" readout; a coded "kink" and a coded "vertical drop" inset (small coded profiles beside the plate, not on it) show the two failures.
  3. **Notation chips** (`NameSwapChips`, scene 5): four chips "f′(x)", "dy/dx", "y′", "d/dx(x²)" write on in turn, each then evaluating at x = 2 to "4" with a violet tick; the tracer's point sits at (2, 4) with its tangent.
- **Colour roles (fixed, as c01 to c04).** x blue; heights f(x) **teal**; gradients f′(x) and tangents **violet**; secants amber (scene 4 corner only); answer green; mistake red, crossed slips only. f and f′ keep teal and violet in every row, so "how high" and "how steep" never share a colour.
- **Large type, handwritten voice.** As c01. Hand tags: "one tangent, one dot", "y = 2x", "a new function", "the dash", "no single tangent", "vertical: no gradient", "one symbol", "with respect to x", "an instruction", "height", "slope", "flat = 0".
- **Stage changes (standard item 2).** The slide and its rider (1); the paired tracer (2); the definition card (3); the two failures beside the slide (4); the notation chips (5); g01 board (6); framed card (7); question cards (8 to 11); the balloon on the balcony (12); key notes (13).
- **Worked example (g01 layout).** 6: for f(x) = x² (f′(x) = 2x from scene 2), f(−3) = 9 (height) and f′(−3) = −6 (gradient); crossed "f′(−3) = 9". The pack's f′(3), f′(−2) question was not used as written so that A1 is a new function.
- **Memory aid.** Framed card: "f says how high. f′ says how steep." Second line: "No corner, no cliff: then f′ exists."
- **Visual surprise.** The violet dots dropped by the riding tangent land in a perfectly straight line, y = 2x, although the curve itself bends.
- **Site notes (pack section 8).** lesson03's "touches a curve at exactly one point" and "the two points become one" are wrong (logged); the narration says "the tangent matches the curve's steepness", never "touches once", and never "become one". The site states the definition without "exists and is not vertical"; both cases are original teaching here.
- **Plain meanings at first use.** Derivative ("the gradient function: the gradient of the tangent at each x"); differentiation ("finding the derivative"); prime ("the little dash after f"); "with respect to x" ("as x changes"); vertical tangent ("a tangent that stands straight up"); cube root (recalled: ∛8 = 2).
- **Attempts.** A1 (pack Q1's idea, new function): for f(x) = x³ with f′(x) = 3x² given, find f(2) and f′(2) and say what each tells you: (2, 8) is on the curve; the tangent there rises 12 per 1 across; crossed "f′(2) = 8". A2 (pack Q2): derivative exists? |x − 2| at 2: no (corner, −1 and 1); ∛x at 0: no (vertical tangent); x² at 0: yes, 0; crossed "x² at 0: no, flat has no gradient".
- **Mistake scene:** none separate. f′ as one number (2: "a new function"); dy/dx as a fraction to cancel (5 tag); every point has a derivative (4); f(2) against f′(2) (6 crossed; A1 crossed); flat means no gradient (A2 crossed).
- **Cause chain taught, in order:** (1) every point of a smooth curve has its own gradient (c04), so the gradients form a new function of x (1, 2); (2) for x², plotting those gradients gives the line y = 2x (2); (3) that function is f′(x), the derivative, defined as the tangent's gradient at (x, f(x)), and finding it is differentiation (3); (4) where there is no single tangent (a corner) or the tangent is vertical (a vertical line has no gradient), f′ doesn't exist there (4); (5) the same derivative has four notations (5); (6) f gives the height and f′ the gradient, so f(a) and f′(a) answer different questions (6).
- **Entry knowledge (route):** c04 (secant gradients settle on the gradient at a point; a corner gives two one-sided values); w08 (function notation f(x)); w10 (vertical lines have no gradient).
- **What d01 relies on (Year 12, checked against `math-a12-d01.md` entry knowledge):** "the gradient at a point is the slope of the tangent"; the notations dy/dx (read "d y by d x") and f′ (read "f prime"), as used in d01's narration. Both are taught here with those exact readings.
- **Handoff (to math-a11-c06, "How does first principles turn a secant into a derivative?").** Scene 12: the balcony and balloon plate (`ma11-water-balloon-balcony-v1.png`) at the left with a coded dashed arc of the balloon's path up and down; at the right the height-time plot of f(t) = 3 + 4t − 5t² with a secant from t to t + h (amber), chip "(f(t + h) − f(t))/h" and chip "f′(t) = ?"; chips "Next: from secant to derivative, exactly" and "?". This is c06's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Tracer: f′(x) = 2x; dots at −2, −1, 0, 1, 2, 3: −4, −2, 0, 2, 4, 6.
  (b) Corner: |x − 2| has one-sided gradients −1 (left) and 1 (right) at 2. Vertical tangent: y = ∛x has y′ = 1/(3x^(2/3)), unbounded as x → 0; the tangent at (0, 0) is the y axis. "Vertical drop" on a slide: a model, not a claim about a real slide's design.
  (c) Example: f(−3) = 9, f′(−3) = −6.
  (d) A1: f(2) = 8, f′(2) = 12. A2: as above.
  (e) Pronunciations: "f prime of x"; "d y by d x"; "y prime"; "d by d x of x squared"; "the cube root of x".
  (f) Windows: tracer top x −2.5 to 3, y −1 to 9; bottom x −2.5 to 3, y −6 to 7; |x − 2| x 0 to 4, y −0.5 to 2.5; ∛x x −8 to 8, y −2.5 to 2.5 (equal steps not needed; the vertical tangent is drawn on the y axis).

Main question: *Every point on a water slide has its own steepness. What is the derivative, and how do we write it?*
Entry knowledge (c04, w08, w10): gradients at a point by shrinking secants; a corner's two sides; f(x) notation; vertical lines have no gradient.
Stops after: the gradient function f′(x) and its names; the definition with "exists and is not vertical"; differentiation; f′(x), dy/dx, y′, d/dx(f(x)); f(a) against f′(a). No first principles, no rules.
Handoff: math-a11-c06: "the balloon's height is a quadratic: turn the secant into its derivative exactly".

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): x blue; heights teal; gradients and tangents violet; answer green; mistake red. Header strip "MATHEMATICS ADVANCED · INTRODUCTION TO DIFFERENTIATION". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: a steepness at every point
> Here's that water slide. It starts with a steep drop, flattens out, then dips again into the splash pool. At every point it has a steepness, a gradient you could find with shrinking secants. Going down the slide, those gradients are negative, because the height is falling. Now imagine listing the gradient at every single point along the slide. That list is a new function, built from the slide's shape. It tells you how steep the slide is, wherever you are on it. What is the derivative, and how do we write **it**?

Visual: opens on c04's final frame exactly (the slide plate `ma11-water-slide-v1.png` side-on, a dot riding its profile with a short violet tangent, "steepness here: ?", chips "Next: a gradient for every x" and "?"). On the first sentence the chips fade; the dot rides from the top to the pool with its live violet readout "steepness: …" (steep negative, near 0, negative again). On "listing" a coded strip under the plate fills with small violet numbers at eight points along the slide, hand tag "a gradient at every point". On "it" heading: "The derivative: what is it, how do we write it?" The chip moves to the top right.

### 2. building the gradient function
> Let's build one, on a simpler curve, y equals x squared. A point rides along it with its tangent, and below, we plot the tangent's gradient at each x. Each dot below is one tangent's gradient. The tracer is doing what shrinking secants did, at every point at once. At x equals minus two, the tangent slopes down, with gradient minus **four**. At zero, the bottom of the curve, the tangent is flat, so the gradient is **zero**. At one, it's two, and at two, it's **four**, the same four we found with secants. Notice the dots go from negative, through zero, to positive, as the curve goes from falling to rising. They line up on a straight line, y equals two **x**. So for x squared, the gradient at any x is two x. That's a pattern from the picture. Next time, we'll prove it with algebra.

Visual: clear change to `PairedDerivativePanel` (two stacked plots, each 1,200 × 420 px), the slide as a 240 px badge at the top left. Top: y = x² (teal heights); the point rides from x = −2.5 with its violet tangent and readouts "x", "f(x)", "gradient". Bottom: "gradient" against x. On "four" (first) the point is at −2 and a violet dot drops to (−2, −4), hand tag "one tangent, one dot". Dot at (−1, −2) as the point passes. On "zero" (0, 0), the tangent flat. Dots at (1, 2); on "four" (second) (2, 4); then (3, 6). On "x" a dashed violet line y = 2x draws through all six dots, label 52 px "gradient = 2x", hand tag "y = 2x". A grey chip on "prove it": "next video: algebra".

### 3. its name, and differentiation
> This new function has a name. It's called the derivative of f, and we write it f prime of x. The prime is the little dash after the f. You'll also hear it called the gradient function, or the derived function. They all mean the same thing, though derivative is the word you'll hear most. Think of it as a machine. Put in an x, and it gives back the gradient at that x. f prime of x is the gradient of the tangent to y equals f of x, at the point x, f of **x**. Finding the derivative is called **differentiation**. So for f of x equals x squared, f prime of x is two x, and differentiating x squared gives two x.

Visual: stage change to a definition card (1,500 px wide) over the dimmed tracer. Line 1, 52 px: "f′(x)" with the dash ringed, hand tag "the dash". Under it three name chips, 40 px: "the derivative of f", "the gradient function", "the derived function", joined by "=" signs. On "x" (bold) the definition, 44 px: "f′(x) = gradient of the tangent to y = f(x) at P(x, f(x))", the tracer's point and tangent flashing at P. On "differentiation" a chip, 44 px: "differentiation: finding f′(x)". Last row, 52 px: "f(x) = x² → f′(x) = 2x" (teal, violet).

### 4. when there's no derivative
> There's one condition in that definition. The tangent has to exist, and it can't be vertical. Two shapes break it. First, a corner, like the absolute value of x minus two, at x equals two. The gradient is minus one from the left and one from the right, just like the corner in the last video. There's no single tangent, so there's no derivative **there**. Second, a vertical tangent, like the cube root of x at zero. The curve stands straight up at the origin, and the tangent is the y axis. A vertical line has no gradient, so again, no **derivative**. On the slide, that's a sharp kink, or a sheer vertical drop. Everywhere else, the slide is smooth and slanted, so its derivative exists.

Visual: stage change: two panels side by side (each 860 × 560 px). The definition strip at the top gains "… if the tangent exists and is not vertical" (44 px), the condition ringed. Left: y = |x − 2| with `StudioOneSidedSecants` at 2: amber dashed secants "−1" from the left, "1" from the right; on "there" a red cross on a violet tangent that can't settle, hand tag "no single tangent". Right: y = ∛x; on "the tangent is the y axis" a violet line stands on the y axis; on "derivative" hand tag "vertical: no gradient" and a red cross over "gradient = ?". On "On the slide" the slide badge (400 px) appears between the panels with two coded insets beside it: a kinked chute (linked to the left panel) and a sheer vertical drop (linked to the right panel).

### 5. four ways to write it
> There are four ways to write the derivative, and you'll need all of them. In exams, you'll see all four, sometimes in the same question. Function notation first. If f of x is x squared, then f prime of x is two x. If we write y equals x squared instead, the derivative is d y by d x, which equals two **x**. Read d y by d x as one symbol, the derivative of y with respect to x. It isn't a fraction to cancel. Later, with the chain rule, you'll see why it's written that way. There's also y prime, which is short for d y by d x. And d by d x, of x squared, means "the derivative of x squared". It's an instruction, like a verb. At x equals two, every one of them gives **four**.

Visual: clear change: the tracer's top plot small at the right (600 px) with the point at (2, 4) and its tangent. `NameSwapChips`, four rows at the left, 52 px: "f(x) = x² → f′(x) = 2x"; on "x" (bold) "y = x² → dy/dx = 2x" with a violet bracket round "dy/dx", hand tags "one symbol" and "with respect to x", and a red pencil stroke over a "cancel the d's" attempt that is crossed; "y′ = 2x"; "d/dx(x²) = 2x" with hand tag "an instruction". On "four" each row gains "at x = 2: 4" and a violet tick, the four ticks landing together on the tangent's readout "gradient 4".

### 6. worked example: height or gradient?
> Now a common mix-up. For f of x equals x squared, find f of minus three and f prime of minus three. f of minus three is minus three squared, which is nine, so the point is minus three, nine. That's a **height**. f prime of x is two x, so f prime of minus three is minus six. That's a gradient. The tangent there falls six units for every one unit **across**. So the derivative lets you find the steepness anywhere on the curve with one substitution. Writing nine for f prime of minus three gives the height, not the **slope**.

Visual: clear change to the g01 board. Task strip, 44 px: "f(x) = x², so f′(x) = 2x. Find f(−3) and f′(−3)." Givens card: "x = −3" (blue). Rows, 52 px: "f(−3) = (−3)² = 9" (teal); on "height" the point (−3, 9) marks on a small plot at the right, hand tag "height". "f′(−3) = 2(−3) = −6" (violet); on "across" the tangent at (−3, 9) draws with a rise-and-run triangle "1 across, 6 down", hand tag "slope". Framed answer (green): "f(−3) = 9 (height); f′(−3) = −6 (gradient)". On "slope" a red slip "f′(−3) = 9" writes and is crossed, caption "that's the height".

### 7. memory aid
> Here's the summary. f tells you how high. f prime tells you how steep. Height and steepness are different questions. And a derivative needs a tangent, with no corner and no **cliff**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the slide with a teal height bar and a violet tangent at the rider. Main line, hand font 60 px: "f says how high. f′ says how steep." On "cliff" the second line, 40 px: "No corner, no cliff: then f′ exists." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. For f of x equals x cubed, the gradient function is f prime of x equals three x squared. Find f of two and f prime of two, and say what each tells you about the graph. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "For f(x) = x³, the gradient function is f′(x) = 3x². Find f(2) and f′(2), and say what each tells you about the graph of y = f(x)." The full question stays on screen. Picture slot: y = x³ (x −2.5 to 2.5) with no point marked. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> f of two is two cubed, which is eight, so the point two, eight is on the curve. That's a **height**. f prime of two is three times two squared, which is **twelve**. So the tangent at two, eight rises twelve units for every one unit **across**. Both come from substituting two, but into different functions. Saying f prime of two is eight is the slip. That's the height, not the **gradient**.

Visual: the card shrinks to the top (30 px). Rows, 52 px: "f(2) = 2³ = 8" (teal); on "height" the point (2, 8) marks on the picture. "f′(2) = 3(2)² = 12" (violet) on "twelve"; on "across" the tangent draws with "1 across, 12 up". Framed answer (green): "(2, 8) is on the curve; the tangent there has gradient 12". On "gradient" a red slip "f′(2) = 8" writes and is crossed, caption "that's f(2)". Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. For each graph, decide whether the derivative exists at the given point, with a reason. The absolute value of x minus two, at x equals two. The cube root of x, at x equals zero. And x squared, at x equals zero. Pause here to answer.

Visual: `QuestionCard`, 40 px: "Does the derivative exist at the given point? Give a reason. (a) y = |x − 2| at x = 2 (b) y = ∛x at x = 0 (c) y = x² at x = 0". Picture: three small blank graphs of the three functions, no tangents. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> The absolute value of x minus two has a corner at two, with gradients minus one and one, so no derivative **there**. The cube root of x has a vertical tangent at zero, and a vertical line has no gradient, so no derivative there **either**. x squared has a flat tangent at zero, so its derivative exists, and it's **zero**. Saying a flat tangent has no gradient is the slip. Flat means a gradient of **zero**.

Visual: the card shrinks to the top. On "there" (a) gains a red-cross corner and "no: corner (−1, 1)"; on "either" (b) gains a vertical violet line and "no: vertical tangent"; on "zero" (first) (c) gains a flat violet tangent and "yes: f′(0) = 0". Framed answer (green) collects the three verdicts. On "zero" (last) a red slip "(c) no: flat has no gradient" writes and is crossed, caption "flat = 0". Hold about 1 s.

### 12. handoff
> We found two x by tracing tangents and spotting a pattern. But a pattern isn't a proof. Here's a water balloon, thrown up from a balcony. Its height is a quadratic in time. To find how fast it's rising at any moment, we'll take the secant gradient, f of t plus h, minus f of t, over h, and find exactly what it approaches. Next, first **principles**.

Visual: the memory line shows small at the top (30 px), then fades. The balcony and balloon plate `ma11-water-balloon-balcony-v1.png` (700 px) at the left with a coded dashed arc of the balloon's path; at the right the height-time plot of f(t) = 3 + 4t − 5t² (t 0 to 1.4, height 0 to 4.5) with an amber secant from t to t + h, chip "(f(t + h) − f(t))/h" (amber) and chip "f′(t) = ?" (violet). On "principles" chips "Next: from secant to derivative, exactly" and "?". Hold about 2 s. This is c06's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- f′(x): the gradient of the tangent to y = f(x) at (x, f(x)).
- Also called the derivative, gradient function or derived function.
- It exists only if the tangent exists and is not vertical (no corner, no cliff).
- Notation: f′(x), dy/dx, y′, d/dx(f(x)). Differentiation: finding it.
- f(a) is a height; f′(a) is a gradient. (x² → 2x)

Memory aid (framed card, right side, as in scene 7): *f says how high. f′ says how steep.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and c06's opening frame.

## Teaching checks

- **Does it explain causes?** Why f′ is a function: each x has its own tangent and gradient (1, 2). Why a corner has no derivative: the two sides give different gradients, so no single tangent (4). Why a vertical tangent has none: a vertical line has no gradient (4, from w10). Why f(a) and f′(a) differ: one is the height, one the steepness (6).
- **Misconceptions addressed:** f′ as one number (2); dy/dx as a fraction to cancel (5); every point has a derivative (4); f(a) for f′(a) (6, A1 crossed); flat has no gradient (A2 crossed).
- **Visual standard, item by item:** 1 the painted slide with a live rider from the first frame, returning in 4 and 7; 2 a new stage every 35 to 55 s; 3 the paired tracer, the slide rider, the notation chips evaluating together; 4 fixed roles (heights teal, gradients violet); 5 large type; 6 hand tags; 7 g01 board in 6; 8 framed card and five bullets; 9 the dots landing on a straight line.
- **One idea at a time:** the function (2), the name and definition (3), the condition (4), notation (5), height against gradient (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 28 s and 29 s.
- **Avoided double teaching:** shrinking secants and the corner (c04) are recalled in one sentence each; vertical lines (w10) in one phrase.
- **Syllabus coverage:** `cie4815a8e` (3, 4, A2; key notes 1, 3); `cicb34a73b` (3; key note 2); `ci68ad7095` (3; key note 4); `ci0ea72300` (5; key note 4); `ci2f16a100` (3, 5, 6, A1; key notes 4, 5).
- **Out of scope by design:** first principles (c06); rules (c07); the sign of f′ (c14).

## Practice questions and model answers

**Attempt 1 (scene 8; original, after pack question 1, HSC style, 2 marks suggested, not an official marking scheme).** "For f(x) = x³, the gradient function is f′(x) = 3x². Find f(2) and f′(2), and say what each tells you about the graph of y = f(x)."
Model answer: f(2) = 8: the point (2, 8) is on the curve. f′(2) = 12: the tangent at (2, 8) has gradient 12 (it rises 12 for every 1 across). Classic mistake (crossed): "f′(2) = 8".

**Attempt 2 (scene 10; pack question 2, original, HSC style, 3 marks suggested).** "Does the derivative exist at the given point? Give a reason. (a) y = |x − 2| at x = 2 (b) y = ∛x at x = 0 (c) y = x² at x = 0"
Model answer: (a) No: the gradients from the left and right are −1 and 1, so there is no single tangent. (b) No: the tangent at the origin is vertical, and a vertical line has no gradient. (c) Yes: the tangent is horizontal, so f′(0) = 0. Classic mistake (crossed): "(c) no: flat has no gradient".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Tracer | x² gradients at −2, −1, 0, 1, 2, 3: −4, −2, 0, 2, 4, 6; line y = 2x | 2, 3 |
| Notation | all four at x = 2: 4 | 5 |
| Corner | \|x − 2\| at 2: −1 left, 1 right | 4, A2 |
| Vertical | ∛x at 0: tangent x = 0 | 4, A2 |
| Example | f(−3) = 9; f′(−3) = −6 | 6 |
| A1 | f(2) = 8; f′(2) = 12 | 8, 9 |
| A2 | no, no, yes (0) | 10, 11 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (16 Nov 2026, scratchpad `c01c09/verify.py`); Codex to re-check.

- d/dx(x²) = 2x: values at −2, −1, 0, 1, 2, 3 are −4, −2, 0, 2, 4, 6.
- (−3)² = 9; 2(−3) = −6.
- x³: f(2) = 8; 3(2)² = 12.
- d/dx ∛x = 1/(3x^(2/3)), unbounded as x → 0. |x − 2|: one-sided gradients −1, 1 at x = 2.
- x² at 0: gradient 0.

## Memory aid check

- **"f says how high. f′ says how steep."** Original. Meaning, as said in scene 7: f(a) is the y value (height) of the point on the curve at x = a; f′(a) is the gradient of the tangent there. Second line "No corner, no cliff" names the two cases where f′(a) does not exist (no single tangent; a vertical tangent). Assumptions checked: "cliff" means a vertical tangent, not a jump (a jump also has no derivative, but jumps are not taught here and are not claimed). It helps a new case: for f(x) = x², f(1) = 1 and f′(1) = 2 answer "where is the point?" and "how steep is it?" Introduced after scenes 2 to 6.
- **Considered, not used:** "Prime means slope" (true but loses the height contrast).

## Narration length estimate

Counted by script (narration blockquotes, bold markers removed): 5,564 characters. At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 22 s of settling (the slide rider, the tracer, the chips) and the 45 s notes scene: about 506 s. Characters per scene (1 to 13): 513, 773, 604, 682, 669, 514, 179, 200, 375, 242, 392, 346, 75. Speech before the notes is about 413 s, 64 s under the 570 s cap. Feedback speech: about 28 s and 29 s.

Reserve trims if the voiced take runs long: scene 5's chain-rule sentence; scene 1's last-but-one sentence.

## Scene list and build ids

Lesson key `m-a11c05` (route math-a11-c05). Explainer folder `src/explainer/lessons/math-a11-c05`; build inputs in `docs/production/claude-pm/lessons/math-a11-c05/` (at voicing).

In order (13 scene headings): hook-slide, build-gradient-function, name-and-definition, no-derivative, notation, height-or-gradient, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 35 s | 1 | c04's frame; the slide rider |
| 35 to 85 s | 2 | The paired tracer, y = 2x |
| 85 to 120 s | 3 | Definition card and names |
| 120 to 172 s | 4 | Corner and vertical tangent; the slide's two failures |
| 172 to 222 s | 5 | Notation chips |
| 222 to 262 s | 6 | g01 board: height or gradient |
| 262 to 278 s | 7 | Framed memory card |
| 278 to 390 s | 8 to 11 | Question cards and countdowns, then feedback |
| 390 to 418 s | 12 | The balloon and the secant |
| 418 to 463 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: c04's last frame continues into 1; 1 to 2 clear change; 2 to 3 stage change (card over the dimmed tracer); 3 to 4 stage change; 4 to 5 clear change; 5 to 6 clear change to the g01 board; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11c05-learning-review.md`, `science_check` = `checks/m-a11c05-maths-check.md`.

## Assets

Inspected before choosing (16 Nov 2026, `public/assets`, read only): no water slide, balcony or balloon plate exists.

Need (painted, new; see the Codex asset brief): `ma11-water-balloon-balcony-v1.png` (this video's handoff and c06). Reused: `ma11-water-slide-v1.png` (c04's brief, with its sidecar profile points).

Coded: every graph, tracer, dot, tangent and readout, the kink and drop insets, chips, cards, countdown, hand tags, key notes, the balloon's dashed path.

### Studio kit use and additions

Uses: `PairedDerivativePanel`, `FunctionRider`, `StudioOneSidedSecants`, `NameSwapChips`, `PlateImg`, `HandTag`, `WorkingBoard`, `TaskStrip`, `GivensCard`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions:
1. **Plate-profile rider** (small extension of `FunctionRider`): rides a dot along a plate's sidecar profile points (interpolated with a smooth spline), with a tangent from the spline's derivative and a readout in plate units. Check: the tangent is drawn from the spline's computed slope at the dot, and the profile never leaves the chute's top edge by more than 3 px.
2. **Vertical tangent display** on `StudioPlot`: a violet line on x = c with a "no gradient" tag. Check: shown only where the plotted function's numerical slope exceeds 10⁴ in size near c.

## Codex asset brief (Maths A11 C05, a water balloon on a balcony; also c06)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-c05.md`. Paint after the learning review and maths check pass and root gives the go-ahead, and before the c05 build (its final frame shows this plate). Save to `public/assets/maths/`. Transparent PNG with a true alpha channel; ink and watercolour in the house style, matched to `maths/ma11-jellybean-jar-v1.png`; no text, numbers, logos, people, hands, faces, glow or shadow. Never stretch.

1. `ma11-water-balloon-balcony-v1.png` (1400 × 1600 px): the edge of a first-floor home balcony seen side-on from the garden, a simple railing and the balcony slab about a third of the way up the image; below it a strip of lawn fading to transparent; one round water balloon (bright blue, knotted) floating in the air just above and in front of the railing; nobody on the balcony. Supply the balloon also as a separate small PNG (`ma11-water-balloon-v1.png`, 240 × 280 px) so code can move it along the computed path.

Sidecar JSON (`ma11-water-balloon-balcony-v1.json`): the pixel height of the balcony floor and of the lawn line (for the 3 m scale). Report inspection on the paper background (`#f6f1e7`) at 400 px and 700 px tall, and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-c05-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the five syllabus quotes match the route-inputs JSON exactly.
3. Confirm the definition is always stated with "if the tangent exists and is not vertical", and "touches at exactly one point" and "the two points become one" never appear.
4. Confirm "2x" is presented as a traced pattern (proved in c06), and no differentiation rule is taught.
5. Confirm dy/dx is read "d y by d x" and f′ "f prime", matching Year 12 d01.
6. Confirm both attempts carry every demand and neither card nor picture shows an answer.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its Visual in spoken order, and that scene 1 opens on c04's final frame.

## YouTube metadata (draft)

Title: The Derivative: Gradient Function and Notation | Year 11 Maths Advanced

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/introduction-to-differentiation/lesson03.sa.html

Every point on a water slide has its own steepness. Collect them all and you get a new function, the derivative. Watch the gradients of y = x² line up into y = 2x, learn the names derivative, gradient function and derived function, and see why a corner or a vertical tangent has no derivative. Then meet the notations f′(x), dy/dx, y′ and d/dx, and the difference between f(a), a height, and f′(a), a gradient. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Introduction to differentiation.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Define f'(x), for any function f(x) and any value x, to be the gradient of the tangent to the curve y = f(x) at the point P(x, f(x)) if the tangent exists and is not vertical"
"Refer to f'(x) as the derivative of f(x) or the gradient, or derived, function of f(x)"
"Define differentiation as the process of finding the derivative of a function"
"Use the notation dy/dx and y' for the derivative of y when y is a function of x"
"Use the notation d/dx (f(x)) and f'(x) for the derivative of a function f(x)"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678

Builds on: Shrinking secants and the gradient at a point. Next: Differentiation from first principles.

#Year11Maths #MathsAdvanced #Derivative #HSCScience

## Open decisions

- **1. "Cliff" in the memory aid (learning review).** It means a vertical tangent. If the reviewer finds students read it as a jump, change the second line to "No corner, no vertical tangent".
- **2. ∛x familiarity.** Students meet cube roots in index laws (w01); the graph is shown, not assumed. If the reviewer finds it unfamiliar, add a one-line grey chip "∛8 = 2, ∛(−8) = −2".

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from c04; check that "a new function" is seen in the tracer, that the two exclusions are understood as "no single tangent" and "no gradient", and that the four notations are seen as one thing), then the Codex maths check and error check, then voicing and a build to grade A.
