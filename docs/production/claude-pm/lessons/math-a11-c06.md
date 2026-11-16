# Maths A11 C06: How does first principles turn a secant into a derivative? f′(x) as the limit of (f(x + h) − f(x))/h, quadratics from first principles, and the derivatives of lines and constants (design)

Status: Revision 2 (17 Nov 2026): independent learning review resolved (see "Revision 2" below); not voiced. Revision 1 (16 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`) and the accepted Year 11 designs (`math-a11-w05.md`, `w14.md`, `w31.md`; rulings in `../checks/root-acceptance-maths-a11-w01-w14.md`, `-w15-w31.md` and `../checks/root-rulings-maths-a11-c-e-packs.md`). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,630 characters by script (see "Narration length estimate"), 12 scene headings, about 511 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (17 Nov): learning review resolved

Review: `../checks/m-a11-c06-learning-review.md` (summary `../checks/m-a11-c01-c18-learning-review-summary.md`), with root's rulings in `../checks/root-rulings-maths-a11-c-e-packs.md`. Resolution log: `../checks/m-a11-c01-c18-learning-review-resolution.md`. Findings by the review's numbers:

1. Should fix, scene 4 (the balloon's expansion is skipped): **accepted**, reviewer's sentence after "subtract f of t." ("Minus five, times t plus h all squared, expands to minus five t squared, minus ten t h, minus five h squared."), the board row "= 3 + 4t + 4h − 5t² − 10th − 5h² − 3 − 4t + 5t²" and the hand tag "−5(t + h)² = −5t² − 10th − 5h²" on the cue "expands to", with the minus sign ringed amber. Scene 2's reserve trim was not needed.
2. Should fix, scene 11 (the handoff chip uses h for a height): **accepted**: the chip reads "distance ≈ 3.57√x km, x = height in m" (x blue, an input), in the scene 11 Visual, the Decisions handoff and the handoff line; narration unchanged ("the square root of your height"). **Join changed:** c07 opens on this chip and now quotes it exactly.
3. Optional, open decision 1 ("rising at"): **kept as written** on the reviewer's advice; "velocity" waits for c18; open decision closed.

Narration now 5,630 characters by script (Revision 1: 5,520), about 511 s with holds (see "Narration length estimate"); within 5,500 to 6,800 and under 570 s. Every changed value was rechecked with SymPy 1.14 (scratchpad `c-rev2/verify.py`; see "Numbers to verify"); Codex's maths check remains the authority. Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. Nothing recorded; human listening pending.

Scope: thirty-seventh video of Year 11 Mathematics Advanced (2024), outline order 37, Introduction to differentiation. Pre-design pack: `../pre-design/maths-a11/math-a11-c06.md` (brief 243). Site lesson (read through the pack's quotations, read only): `introduction-to-differentiation/lesson03.sa.html` (`we-1`, x² from first principles, and `we-2`, 3x + 1, both used with their numbers). Route entry: `math-a11-c06` in `../../programme/maths-a11-route-inputs-3.json`. Visual system: maths studio kit; the painted balcony and water balloon (c05's brief) and a painted coastal lookout for the handoff (prefix `ma11-`); every graph, secant and working row coded.

Owner rules applied: as c01 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (games: a water balloon), Australian spelling, no em dashes, "zero point" decimals, conversational narration).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Introduction to differentiation, The derivative), quoted from `../../programme/maths-a11-route-inputs-3.json`:

- `ci528c1909`: "Define the derivative of the function f(x) from first principles, as the limiting value of the gradient of the secant (f(x + h) - f(x))/h as h approaches zero, when this limiting value exists, and use the notation f'(x) = lim_(h → 0) (f(x + h) - f(x))/h"
- `ci608a8811`: "Use first principles to find the derivative of quadratic functions"
- `cie02570a8`: "Find derivatives of constant and linear functions"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678

**Boundary:** starts from c05's final frame (the balcony and balloon, the height-time plot of f(t) = 3 + 4t − 5t² with an amber secant, chips "(f(t + h) − f(t))/h" and "f′(t) = ?"). Teaches: f′(x) = lim_(h → 0) (f(x + h) − f(x))/h when the limit exists, with "limit" in plain words and h ≠ 0 (`ci528c1909`); the four-step routine (swap, subtract, simplify by factoring h and cancelling, shrink h) on x² (site `we-1`, linking "2x + h" to c04's "4 + h") and on the balloon's height 3 + 4t − 5t², giving 4 − 10t and its meaning (`ci608a8811`); 3x + 1 (site `we-2`), mx + c and a constant (`cie02570a8`). Stops at quadratics, lines and constants. Not taught: cubics (the site's (x + h)³ is left to c07, pack decision); the rules (c07). The balloon's term-by-term pattern is named as "coming next time".

## Decisions

- **Anchor: a water balloon thrown up from a balcony (painted plates, live).** Its height f(t) = 3 + 4t − 5t² metres is a quadratic in time, so first principles gives its vertical velocity 4 − 10t, which answers real questions: how fast it leaves the hand (4 m/s up), when it stops rising (0.4 s, the top, where the tangent is flat) and how fast it falls at 1 s (6 m/s). The balcony's 3 m is the constant whose derivative is 0. Games; the pack's anchor 1. No Year 12 or w-strand design uses a balloon or a balcony (grep 16 Nov). The pack's parking meter (anchor 2) was not needed; the balcony gives the constant and site `we-2` the line.
- **The model.** f(t) = 3 + 4t − 5t² for 0 ≤ t ≤ 1.27 s (it lands at t = (2 + √19)/5 ≈ 1.27 s). The −5t² uses g ≈ 10 m/s² and ignores air resistance (author note a; not learner copy). "Rising at" means vertical velocity; the narration says "rising" and "falling", not "speed", where the sign matters.
- **Simulations (standard item 3).**
  1. **Balloon flight** (scenes 1, 4): the balloon sprite (`ma11-water-balloon-v1.png`) moves up and down beside the balcony plate at the computed height f(t), its horizontal drift a fixed coded offset, while a dot rides the height-time curve with its violet tangent and a live "rising at … m/s" readout (4 − 10t); at t = 0.4 the readout reads 0 and the tangent is flat.
  2. **Shrinking secant beside the board** (scenes 2, 3): a small plot where the amber secant's h shrinks in step with the working; when the board's "+ h" fades, the secant lands on the violet tangent.
  3. **`StudioCancellation`** (scenes 3, 4, 5): the factor h slashed top and bottom in red strokes on a cue, with the result beside it; `StudioLimitSubstitution` shows "h → 0" as the leftover h-terms fade.
- **Colour roles (fixed, as c01 to c05).** h **blue** (the step), terms containing h tinted blue so they visibly drop out at the last row; secant amber; f′ and tangents violet; heights teal; answer green; mistake red, crossed slips only.
- **Large type, handwritten voice.** As c01. Hand tags: "limit: what it approaches", "h ≠ 0", "swap", "subtract", "simplify", "shrink", "these cancel", "allowed: h ≠ 0", "4 + h (c04)", "top: flat", "the whole of f(x)", "tangent = the line", "never changes".
- **Stage changes (standard item 2).** The balloon and its secant (1); the definition card with the shrinking secant (2); full-width board, x² (3); the balloon's board and its flight (4); the line and the constant (5); framed card (6); question cards (7 to 10); the lookout (11); key notes (12).
- **Worked examples (g01 layout).** 3: site `we-1`, x² → 2x; crossed "(x + h)² = x² + h²". 4: the balloon, 3 + 4t − 5t² → 4 − 10t, with three values (4, 0, −6). 5: site `we-2`, 3x + 1 → 3; then mx + c → m and a constant → 0 in one line each.
- **Memory aid.** Framed card: "Four S's: swap, subtract, simplify, shrink." Key: "swap x for x + h; subtract f(x); factor out h and cancel (h ≠ 0); let h → 0".
- **Visual surprise.** At the instant the balloon hangs at the top of its flight, the readout hits exactly 0 and the riding tangent lies flat, matching 4 − 10(0.4) = 0 on the board.
- **Site notes (pack section 8).** lesson03's "the two points become one" (logged under c05) is not used: the narration says h "never equals zero". Cubics are left out (pack decision). Site examples keep their numbers.
- **Plain meanings at first use.** Limit ("the value the expression gets closer and closer to as h shrinks"); first principles ("from the definition, the secant and the limit, with no shortcuts"); quotient (avoided: "the fraction"); vertical velocity (avoided: "how fast it's rising").
- **Attempts (pack questions).** A1: 3x² − 5x → 6x − 5; crossed "3(x + h)² = 3x² + 3h²". A2: f(x) = 7 → 0 and g(x) = 4 − 2x → −2; crossed "f′(x) = 7".
- **Mistake scene:** none separate. (x + h)² = x² + h² (3 crossed; A1 crossed); cancelling h before factoring (3, tag "every term has an h"); setting h = 0 first (2, tag "h ≠ 0"); not subtracting the whole of f(x) (A2 feedback says "take away the whole of four minus two x"; tag); the derivative of a constant is the constant (A2 crossed).
- **Cause chain taught, in order:** (1) the derivative is the value the secant gradients approach as h shrinks, so it is a limit, and h is never 0 (2); (2) for x², expanding shows every term of the difference has a factor h, so dividing by h leaves 2x + h, and as h → 0 that becomes 2x, which proves c05's traced pattern and c04's "4 + h" (3); (3) the same routine on the balloon gives 4 − 10t, whose zero is the top of the flight (4); (4) for a line the difference is always m × h, so every secant gradient is m: the tangent is the line; a constant's difference is 0 (5).
- **Entry knowledge (route):** c05 (f′(x) as the tangent's gradient; notation); c04 (the secant gradient (f(c + h) − f(c))/h and its settling value); w02 (expanding brackets and factorising a common factor).
- **Handoff (to math-a11-c07, "Why does x^n differentiate to nx^(n − 1), and how do sums and multiples follow?").** Scene 11: the coastal lookout plate (`ma11-coastal-lookout-v1.png`) with a coded dashed sight line from the platform to the sea horizon, chip "distance ≈ 3.57√x km, x = height in m" and chip "how much farther per metre climbed? ?"; at the right a small table "x² → 2x ✓, x³ → ?, x⁴ → ?, √x → ?"; chips "Next: a rule for every power" and "?". This is c07's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Balloon: f(t) = 3 + 4t − 5t²; f(t + h) − f(t) = 4h − 10th − 5h²; quotient 4 − 10t − 5h; f′(t) = 4 − 10t; f′(0) = 4, f′(0.4) = 0, f′(1) = −6; top height f(0.4) = 3.8 m; lands at t = (2 + √19)/5 ≈ 1.272 s. g ≈ 10 m/s², no air resistance.
  (b) x²: (x + h)² = x² + 2xh + h²; quotient 2x + h; at x = 2: 4 + h (c04's table).
  (c) 3x + 1: difference 3h; quotient 3. mx + c: difference mh; quotient m. Constant c: difference 0.
  (d) A1: 3(x + h)² − 5(x + h) − (3x² − 5x) = 6xh + 3h² − 5h; quotient 6x + 3h − 5; f′(x) = 6x − 5. A2: 7 − 7 = 0; (4 − 2x − 2h) − (4 − 2x) = −2h; −2.
  (e) Pronunciations: "the limit as h approaches zero"; "x plus h, all squared"; "two x h"; "f of t"; "zero point four"; "four S's". The letter h is the step throughout; the balloon's height is always "f of t" or "the height", never "h".
  (f) Windows: balloon plot t 0 to 1.4 s, height 0 to 4.5 m; small secant plot x 0 to 3, y 0 to 9; line plot x −1 to 3, y −2 to 10.

Main question: *A water balloon is thrown up from a balcony. How fast is it rising at any moment, and when does it reach the top? How does first principles turn a secant into a derivative?*
Entry knowledge (c05, c04, w02): f′ as the tangent's gradient; the secant gradient over a step h; expanding and factorising.
Stops after: f′(x) = lim_(h → 0) (f(x + h) − f(x))/h; first principles for quadratics; lines and constants. No cubics, no rules.
Handoff: math-a11-c07: "how far you can see from a lookout depends on √x, with x the height: a rule for every power of x?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): h and its terms blue; secant amber; f′ and tangents violet; heights teal; answer green; mistake red. Header strip "MATHEMATICS ADVANCED · INTRODUCTION TO DIFFERENTIATION". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: when does it stop rising?
> Here's that water balloon. It's thrown up from a balcony three metres high, and its height after t seconds is three plus four t minus five t squared metres. It rises, slows, stops for an instant at the top, then falls. How fast is it rising at any moment, and when does it reach the top? The top is the moment it stops going up. Shrinking secants with numbers would need a table for every single moment. Algebra can give the exact answer for all of them at once. How does first principles turn a secant into a **derivative**?

Visual: opens on c05's final frame exactly (the balcony plate `ma11-water-balloon-balcony-v1.png`, the dashed path, the height-time plot of f(t) = 3 + 4t − 5t² with its amber secant, chips "(f(t + h) − f(t))/h" and "f′(t) = ?", "Next: from secant to derivative, exactly", "?"). On the first sentence the "Next" chips fade; equation chip 52 px "f(t) = 3 + 4t − 5t²" (teal), with "3 m" marked at the balcony. On "rises, slows, stops" the balloon sprite flies its computed path once; the height curve's top is ringed "top?". On "a table for every single moment" a grey stack of mini tables flickers and fades. On "derivative" heading: "From secant to derivative, exactly". The chip "How fast, and when is the top?" moves to the top right.

### 2. the definition: a limit
> Start with the secant gradient from shrinking secants, f of x plus h, minus f of x, all over h. As h shrinks towards zero, these gradients approach the gradient of the tangent. That limiting value, when it exists, is the derivative. We write f prime of x equals the limit, as h approaches zero, of f of x plus h, minus f of x, over **h**. Read it as: f prime of x is what the secant gradient becomes when the step is tiny. "The limit as h approaches zero" means the value the expression gets closer and closer to as h shrinks. h itself never equals zero, because that would give zero over **zero**. It's the same idea as the tables, but done with letters, so it works for every x at once. Finding a derivative this way is called differentiating from first principles.

Visual: clear change to a definition card at the left (900 px) and the small shrinking-secant plot at the right (y = x², P at x = 1). Card, 44 px: "secant gradient = (f(x + h) − f(x))/h" (amber, h blue). On "h" (bold) the definition, 52 px: "f′(x) = lim_(h → 0) (f(x + h) − f(x))/h", with "lim_(h → 0)" boxed and hand tag "limit: what it approaches"; the plot's secant shrinks onto the tangent. Row 40 px: "when this limit exists". On "zero" a grey row "h = 0: 0 ÷ 0" crossed in red, hand tag "h ≠ 0". On "first principles" a chip, 44 px: "first principles: from the definition".

### 3. worked example: x squared
> Let's do x squared, in four steps. First, swap x for x plus h. f of x plus h is x plus h, all squared, which expands to x squared plus two x h plus h **squared**. Second, subtract f of x. The x squared terms cancel, leaving two x h plus h squared. Third, simplify. Every term on top has a factor of h, so take it out, and it cancels with the h underneath. We're allowed to cancel because h isn't zero. That leaves two x plus **h**. At x equals two, that's four plus h, exactly the pattern in the secant table. That extra h is what's left of the secant. The smaller h gets, the closer the secant is to the tangent. Fourth, shrink h to zero. The h vanishes, and f prime of x is two **x**. That's the pattern we traced last time, now proved. Writing x plus h, all squared, as x squared plus h squared is the slip. It misses the two x h in the **middle**.

Visual: clear change to the full-width g01 board (`WorkingBoard`), the small secant plot at the top right (400 px). Task strip, 44 px: "Find f′(x) for f(x) = x² from first principles." Rows, current row 52 px, earlier rows 32 px and dimmed, each with a hand tag in the margin: "swap": on "squared" "f(x + h) = (x + h)² = x² + 2xh + h²" (h terms blue). "subtract": "f(x + h) − f(x) = x² + 2xh + h² − x²", the two x² slashed, tag "these cancel"; "= 2xh + h²". "simplify": "(2xh + h²)/h = h(2x + h)/h", `StudioCancellation` slashes the h's, tag "allowed: h ≠ 0"; on "h" (bold) "= 2x + h". A grey chip on "four plus h": "x = 2: 4 + h (c04's table)". "shrink": `StudioLimitSubstitution` "lim_(h → 0) (2x + h)", the blue h fades as the plot's secant lands on the tangent; on "x" "f′(x) = 2x" (green frame), grey chip "c05: traced 2x ✓". On "middle" a red slip "(x + h)² = x² + h²" writes and is crossed, caption "missing 2xh".

### 4. worked example: the balloon
> Now the balloon. The letter h is taken by the step, so we'll write the height as f of t, which is three plus four t minus five t squared. Swap t for t plus h, and subtract f of t. Minus five, times t plus h all squared, expands to minus five t squared, minus ten t h, minus five h squared. The threes cancel, and so do the four t and the minus five t squared. What's left is four h, minus ten t h, minus five h **squared**. Divide by h, to get four minus ten t minus five h. Then let h shrink to zero. The derivative is four minus ten **t**, in metres per second, because height is in metres and time in seconds. At t equals zero, the balloon rises at four metres per second. After that, gravity takes away ten metres per second, every second. That's the minus ten t. At zero point four seconds, the derivative is zero, so the balloon has stopped rising, at the top of its **flight**. Check the graph. The tangent at the top is flat. At one second, it's minus six, so it's falling at six metres per **second**.

Visual: stage change: the board at the left (1,050 px), the balloon plate and height-time plot at the right (750 px). Task strip, 44 px: "f(t) = 3 + 4t − 5t². Find f′(t) from first principles." Rows, 52 px current: "f(t + h) − f(t) = [3 + 4(t + h) − 5(t + h)²] − [3 + 4t − 5t²]"; on "expands to" the hand tag "−5(t + h)² = −5t² − 10th − 5h²" writes under the bracket (the minus sign ringed amber) and the next row "= 3 + 4t + 4h − 5t² − 10th − 5h² − 3 − 4t + 5t²"; on "The threes cancel" the matching terms slash, tag "these cancel"; on "squared" (bold) "= 4h − 10th − 5h²". "÷ h: 4 − 10t − 5h" with `StudioCancellation`. On "t" (bold) "f′(t) = 4 − 10t m/s" (green frame), tag "m ÷ s". Then the balloon flight runs with the riding tangent: at t = 0 the readout "rising at 4 m/s"; on "flight" t = 0.4: the balloon at the top, the tangent flat, readout "0 m/s", row "f′(0.4) = 4 − 4 = 0", tag "top: flat". On "second" (last) t = 1: the balloon falling, readout "−6 m/s", row "f′(1) = −6: falling at 6 m/s".

### 5. lines and constants
> Lines are even quicker. Take f of x equals three x plus one. f of x plus h, minus f of x, is three x plus three h plus one, take away the whole of three x plus one. Everything cancels except three h. Divide by h, and you get three, for every h. So the limit is **three**. The derivative of a line is its own gradient, which makes sense, because the tangent to a line is the line **itself**. The same algebra shows that m x plus c has derivative m. And a constant, like the balcony's height of three metres, never changes, so its derivative is **zero**. Its graph is flat, so every tangent has gradient zero. So lines and constants are the easy cases. Look back at the balloon. The five t squared gave ten t, the four t gave four, and the three gave nothing. That pattern is coming next time.

Visual: clear change: board at the left, a plot at the right with y = 3x + 1. Rows, 52 px: "f(x + h) − f(x) = (3x + 3h + 1) − (3x + 1)" with the bracket ringed, tag "the whole of f(x)"; "= 3h"; "3h/h = 3"; on "three" "f′(x) = 3" (green frame). On "itself" a violet tangent rides along the line and lies exactly on top of it everywhere, tag "tangent = the line". Two rows, 44 px: "f(x) = mx + c → f′(x) = m"; on "zero" "f(x) = c → f′(x) = 0" with the balcony badge and its "3 m" line, tag "never changes". On "Look back at the balloon" a strip, 40 px: "−5t² → −10t, 4t → 4, 3 → 0", each pair linked by a grey arrow, chip "next video: a pattern".

### 6. memory aid
> Here's the routine, four S's. Swap x for x plus h. Subtract f of x. Simplify, by taking out the factor of h and cancelling. Then shrink h to **zero**. Every first principles question follows these four steps.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the x² board's four rows, each labelled. Main line, hand font 60 px: "Four S's: swap, subtract, simplify, shrink." On "zero" the key line, 36 px: "f(x + h); − f(x); factor h, cancel (h ≠ 0); h → 0". Hold about 2 s.

### 7. attempt 1 (countdown, 10 seconds)
> Your turn. Find the derivative of f of x equals three x squared minus five x, from first principles. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Find the derivative of f(x) = 3x² − 5x from first principles." The full question stays on screen. Picture slot: an empty working board with the four step labels only. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 8. feedback 1 (brief)
> Swap and expand. f of x plus h is three x squared, plus six x h, plus three h squared, minus five x, minus five **h**. Subtract f of x, to leave six x h, plus three h squared, minus five h. Divide by h, to get six x plus three h minus five. As h goes to zero, f prime of x is six x minus **five**. Writing three h squared without the six x h is the slip. Expand three times x plus h, all squared, **fully**.

Visual: the card shrinks to the top (30 px). Rows, 44 px: on "h" "f(x + h) = 3x² + 6xh + 3h² − 5x − 5h"; "− f(x): 6xh + 3h² − 5h"; "÷ h: 6x + 3h − 5"; on "five" "f′(x) = 6x − 5" (green frame). On "fully" a red slip "3(x + h)² = 3x² + 3h²" writes and is crossed, caption "3(x² + 2xh + h²)". Hold about 1 s.

### 9. attempt 2 (countdown, 10 seconds)
> Last one. Use first principles to show that f of x equals seven has f prime of x equals zero, and that g of x equals four minus two x has g prime of x equals minus two. Pause here to answer.

Visual: `QuestionCard`, 40 px: "Use first principles to show that f(x) = 7 has f′(x) = 0 and that g(x) = 4 − 2x has g′(x) = −2." Picture slot: two small blank boards labelled "f" and "g". Countdown ring shown full from "Pause here to answer.", then 10 s.

### 10. feedback 2 (brief)
> For f, the top is seven minus seven, which is zero, so the limit is **zero**. For g, the top is four minus two x minus two h, take away the whole of four minus two x. That leaves minus two h, so the fraction is minus two, and the limit is minus **two**. Saying the derivative of seven is seven is the slip. A constant doesn't change, so its rate of change is **zero**.

Visual: the card shrinks to the top. Rows, 44 px: "f: (7 − 7)/h = 0"; on "zero" "f′(x) = 0" (green). "g: [(4 − 2x − 2h) − (4 − 2x)]/h = −2h/h = −2"; on "two" "g′(x) = −2" (green). On "zero" (last) a red slip "f′(x) = 7" writes and is crossed, caption "a constant never changes". Hold about 1 s.

### 11. handoff
> First principles works, but it gets long. Try x to the fourth, and you'd have to expand x plus h to the fourth. Try the square root of x, and the algebra gets harder still. Here's a lookout on a sea cliff. The higher you stand, the farther you can see, and that distance depends on the square root of your height. To find how fast the view grows, we need a shortcut for every power of x. That's **next**.

Visual: the memory line shows small at the top (30 px), then fades. The lookout plate `ma11-coastal-lookout-v1.png` (900 px) at the left with a coded dashed sight line from the platform to the horizon; chip "distance ≈ 3.57√x km, x = height in m" (x blue, an input) and chip "farther per metre climbed? ?"; at the right a small table, 40 px: "x² → 2x ✓", "x³ → ?", "x⁴ → ?", "√x → ?". On "next" chips "Next: a rule for every power" and "?". Hold about 2 s. This is c07's opening frame; scene 12 returns to it silently after the notes.

### 12. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- f′(x) = lim_(h → 0) (f(x + h) − f(x))/h, when the limit exists.
- Swap, subtract, simplify (factor h, cancel; h ≠ 0), shrink h → 0.
- x² → 2x. (x + h)² = x² + 2xh + h².
- Line: mx + c → m. Constant: c → 0.
- Balloon: f(t) = 3 + 4t − 5t², f′(t) = 4 − 10t; top when f′ = 0.

Memory aid (framed card, right side, as in scene 6): *Four S's: swap, subtract, simplify, shrink.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 11's frame exactly. This is the final frame and c07's opening frame.

## Teaching checks

- **Does it explain causes?** Why a limit: the secants approach the tangent but h can't be 0 (2). Why we can cancel h: h ≠ 0 (3). Why the h-terms vanish: they shrink with h (3, 4). Why the top is where f′ = 0: rising stops there, the tangent is flat (4). Why a line's derivative is its gradient: its tangent is itself (5). Why a constant gives 0: it never changes (5).
- **Misconceptions addressed:** (x + h)² = x² + h² (3, A1 crossed); cancelling h before factoring (3 tag); substituting h = 0 first (2); not subtracting the whole of f(x) (5, A2 tags); constant's derivative is the constant (A2 crossed).
- **Visual standard, item by item:** 1 the painted balcony and balloon from the first frame, the balloon flying live in 1 and 4; 2 a new stage every 40 to 60 s; 3 the balloon flight with a riding tangent and readout, the shrinking secant linked to the board, the cancellation; 4 fixed roles (h blue throughout); 5 large type; 6 hand tags; 7 g01 boards in 3, 4, 5; 8 framed card and five bullets; 9 the readout hitting 0 with the tangent flat at the top.
- **One idea at a time:** the definition (2), x² (3), the balloon (4), lines and constants (5).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 30 s and 27 s.
- **Avoided double teaching:** the secant gradient (c04) and f′ (c05) are recalled in one sentence; expanding (w02) is used, not taught.
- **Syllabus coverage:** `ci528c1909` (2, 3; key note 1); `ci608a8811` (3, 4, A1; key notes 2, 3, 5); `cie02570a8` (5, A2; key note 4).
- **Out of scope by design:** cubics and the general power rule (c07).

## Practice questions and model answers

**Attempt 1 (scene 7; pack question 1, original, HSC style, 3 marks suggested, not an official marking scheme).** "Find the derivative of f(x) = 3x² − 5x from first principles."
Model answer: f(x + h) = 3x² + 6xh + 3h² − 5x − 5h. f(x + h) − f(x) = 6xh + 3h² − 5h. Dividing by h (h ≠ 0): 6x + 3h − 5. As h → 0, f′(x) = 6x − 5. Classic mistake (crossed): "3(x + h)² = 3x² + 3h²".

**Attempt 2 (scene 9; pack question 2, original, HSC style, 2 marks suggested).** "Use first principles to show that f(x) = 7 has f′(x) = 0 and that g(x) = 4 − 2x has g′(x) = −2."
Model answer: f(x + h) − f(x) = 7 − 7 = 0, so the fraction is 0 for every h ≠ 0 and the limit is 0. g(x + h) − g(x) = (4 − 2x − 2h) − (4 − 2x) = −2h, so the fraction is −2 and the limit is −2. Classic mistake (crossed): "f′(x) = 7".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Balloon | f(t) = 3 + 4t − 5t²; balcony 3 m | 1, 4, 5 |
| x² | (x + h)² = x² + 2xh + h²; 2x + h; at 2: 4 + h; 2x | 3 |
| Balloon working | 4h − 10th − 5h²; 4 − 10t − 5h; 4 − 10t | 4 |
| Balloon values | f′(0) = 4; f′(0.4) = 0; f′(1) = −6 | 4 |
| Line | 3x + 1: 3h; 3; mx + c → m; c → 0 | 5 |
| A1 | 6xh + 3h² − 5h; 6x + 3h − 5; 6x − 5 | 7, 8 |
| A2 | 0; −2h; −2 | 9, 10 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (16 Nov 2026, scratchpad `c01c09/verify.py`); Codex to re-check.

- Revision 2: −5(t + h)² = −5t² − 10th − 5h²; f(t + h) − f(t) = 4h − 10th − 5h² (unchanged).
- ((x + h)² − x²)/h = 2x + h → 2x.
- 3 + 4t − 5t²: difference −5h² − 10ht + 4h; quotient 4 − 10t − 5h; limit 4 − 10t; values at 0, 2/5, 1: 4, 0, −6; f(2/5) = 19/5 = 3.8; root (2 + √19)/5 ≈ 1.2718.
- 3x + 1: quotient 3. 7: quotient 0. 4 − 2x: quotient −2.
- 3x² − 5x: difference 3h² + 6hx − 5h; quotient 3h + 6x − 5; limit 6x − 5.

## Memory aid check

- **"Four S's: swap, subtract, simplify, shrink."** Original. Meaning, as said in scene 6: swap x for x + h to get f(x + h); subtract f(x) (the whole of it); simplify by factoring out h and cancelling (allowed because h ≠ 0); shrink h to 0 in what's left. Assumptions checked: the limit exists; for polynomials every term of the difference has a factor h, so the cancellation always works here. It helps a new case: x² + 3x gives 2x + 3 + h, so 2x + 3. Introduced after scenes 3 to 5.
- **Considered, not used:** "Expand, cancel, limit" (skips the subtract step, the source of A2's slip).

## Narration length estimate

Counted by script (narration blockquotes, bold markers removed): 5,630 characters (Revision 2; Revision 1 was 5,520). At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 22 s of settling (the balloon flights, the row-by-row working) and the 45 s notes scene: about 511 s. Characters per scene (1 to 12): 521, 759, 835, 994, 779, 204, 122, 395, 190, 356, 400, 75. Speech before the notes is about 418 s, 59 s under the 570 s cap. Feedback speech: about 30 s and 27 s.

Reserve trims if the voiced take runs long: scene 2's "same idea as the tables" sentence; scene 5's last three sentences (keep the strip on screen).

## Scene list and build ids

Lesson key `m-a11c06` (route math-a11-c06). Explainer folder `src/explainer/lessons/math-a11-c06`; build inputs in `docs/production/claude-pm/lessons/math-a11-c06/` (at voicing).

In order (12 scene headings): hook-balloon, definition, x-squared, balloon-derivative, lines-constants, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 38 s | 1 | c05's frame; the balloon's flight |
| 38 to 90 s | 2 | Definition card, shrinking secant |
| 90 to 158 s | 3 | Board: x² |
| 158 to 225 s | 4 | Board and flight: the balloon |
| 225 to 282 s | 5 | Line and constant |
| 282 to 300 s | 6 | Framed memory card |
| 300 to 410 s | 7 to 10 | Question cards and countdowns, then feedback |
| 410 to 438 s | 11 | The lookout |
| 438 to 483 s | 12 | Key notes, then a silent return to scene 11's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: c05's last frame continues into 1; 1 to 2 clear change; 2 to 3 clear change to the board; 3 to 4 stage change; 4 to 5 clear change; 5 to 6 camera pull back; attempts and feedback: the card shrinks to the top; 10 to 11 board clear; 11 to 12 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11c06-learning-review.md`, `science_check` = `checks/m-a11c06-maths-check.md`.

## Assets

Inspected before choosing (16 Nov 2026, `public/assets`, read only): no balcony, balloon, cliff or lookout plate exists.

Need (painted, new; see the Codex asset brief): `ma11-coastal-lookout-v1.png` (this video's handoff and c07). Reused: `ma11-water-balloon-balcony-v1.png` and `ma11-water-balloon-v1.png` (c05's brief).

Coded: every plot, secant, tangent and readout, the working boards, cancellation strokes, the balloon's path offset, the sight line, cards, countdown, hand tags, key notes.

### Studio kit use and additions

Uses: `WorkingBoard`, `StudioCancellation`, `StudioLimitSubstitution`, `SecantPivot` (c01 addition), `FunctionRider`, `PlateImg`, `HandTag`, `TaskStrip`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions:
1. **Sprite on a computed path** (small, `PlateImg` with a frame-driven position): the balloon sprite's height is f(t) mapped through the balcony sidecar's 3 m scale. Check: at t = 0.4 the sprite is at its highest frame position and the readout shows 0; at t = 0 the sprite is at the balcony line.
2. **Tinted h terms in `WorkingBoard` rows**: any token containing h is drawn blue so it fades as one group at the "shrink" cue.

## Codex asset brief (Maths A11 C06, a coastal lookout; also c07)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-c06.md`. Paint after the learning review and maths check pass and root gives the go-ahead, and before the c06 build (its final frame shows this plate). Save to `public/assets/maths/`. Transparent PNG with a true alpha channel; ink and watercolour in the house style, matched to `maths/ma11-jellybean-jar-v1.png`; no text, numbers, signs, logos, people, hands, faces, glow or shadow. Never stretch.

1. `ma11-coastal-lookout-v1.png` (2400 × 1400 px): a timber lookout platform with a railing on top of a sandstone sea cliff at the left, seen side-on from a little way out; the open sea stretching right to a clean, level horizon line about 45 per cent of the way up the image; a calm sky above that fades to transparent at the top. The horizon must be straight and unobstructed (code draws the sight line to it).

Sidecar JSON (`ma11-coastal-lookout-v1.json`): the platform floor's pixel point at the railing and the horizon's pixel height. Report inspection on the paper background (`#f6f1e7`) at 900 px and full width, and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-c06-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the three syllabus quotes match the route-inputs JSON exactly.
3. Confirm h never equals 0 in the working (only in the crossed "0 ÷ 0" row) and the cancellation is always after factoring.
4. Confirm the letter h is only the step; the balloon's height is never called h on screen or in narration.
5. Confirm no cubic is differentiated and no rule (nx^(n − 1), sum, multiple) is stated as a rule.
6. Confirm both attempts carry every demand and neither card nor picture shows an answer.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its Visual in spoken order, and that scene 1 opens on c05's final frame.

## YouTube metadata (draft)

Title: Differentiation from First Principles: Quadratics, Lines and Constants | Year 11 Maths Advanced

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/introduction-to-differentiation/lesson03.sa.html

A water balloon is thrown up from a balcony. How fast is it rising at any moment, and when does it reach the top? Define the derivative as the limit of the secant gradient, (f(x + h) − f(x))/h, as h approaches zero, then use four steps (swap, subtract, simplify, shrink) to prove that x² differentiates to 2x, find the balloon's rate 4 − 10t, and show why a line's derivative is its gradient and a constant's is zero. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Introduction to differentiation.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Define the derivative of the function f(x) from first principles, as the limiting value of the gradient of the secant (f(x + h) - f(x))/h as h approaches zero, when this limiting value exists, and use the notation f'(x) = lim_(h → 0) (f(x + h) - f(x))/h"
"Use first principles to find the derivative of quadratic functions"
"Find derivatives of constant and linear functions"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678

Builds on: The derivative and its notation. Next: The power rule, sums and multiples.

#Year11Maths #MathsAdvanced #FirstPrinciples #HSCScience

## Open decisions

- **1. The balloon's sign language (learning review).** The narration says "rising at" and "falling at" with the sign; it never says "speed" for the signed value (velocity is c18). If the reviewer wants the word "velocity", it waits for c18. **Settled by the learning review (Revision 2):** keep "rising at" and "falling at"; "velocity" waits for c18.
- **2. Physics assumption.** g ≈ 10 and no air resistance are author notes only; the model is given, not derived.

## Review notes

- Revision 2 (17 Nov 2026): independent learning review resolved (see "Revision 2" at the top). Next: the Codex maths check and error check (brief 248), then voicing on the Google voice and a build on the studio kit to grade A, with a learning check on the exact voiced preview.
- Revision 1 has had no independent review. Next: student learning review (trace from c04 and c05; check that "limit" is understood in plain words, that the cancellation reason "h isn't zero" is heard, that the balloon's zero is linked to the top of the flight, and that "the whole of f(x)" is seen), then the Codex maths check and error check, then voicing and a build to grade A.
