# Maths A11 C13: Which differentiation rule, or combination, does a function need? Simplify first, then the last step done sets the outside rule, then work inwards layer by layer (design)

Status: Revision 2 (17 Nov 2026): independent learning review resolved (see "Revision 2" below); not voiced. Revision 1 (16 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`) and the accepted Year 11 designs (`math-a11-w05.md`, `w14.md`, `c06.md`; rulings in `../checks/root-acceptance-maths-a11-w01-w14.md`, `-w15-w31.md` and `../checks/root-rulings-maths-a11-c-e-packs.md`). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,561 characters by script (see "Narration length estimate"), 13 scene headings, about 505 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (17 Nov): learning review resolved

Review: `../checks/m-a11-c13-learning-review.md` (summary `../checks/m-a11-c01-c18-learning-review-summary.md`), with root's rulings in `../checks/root-rulings-maths-a11-c-e-packs.md`. Resolution log: `../checks/m-a11-c01-c18-learning-review-resolution.md`. Findings by the review's numbers:

1. Should fix, scenes 12 and 7 (claims about the rest of the year): **accepted**, reviewer's wording. Scene 12: "That's every rule for combining functions, and how to choose between them." Scene 7: "Later you'll meet new functions, like e to the x, and this same test still works on them."
2. Optional, key note 1 (too long for one line): **accepted**: "Simplify first: x² · x³ = x⁵; 4/(x² + 1)³ = 4(x² + 1)⁻³." The middle trap stays in scene 3.
3. Optional, feedback 1 (common-bottom step): **accepted**: unspoken row "= ((1 − 2x) − x)/√(1 − 2x)", hand tag "common bottom"; narration unchanged.

Narration now 5,561 characters by script (Revision 1: 5,554), about 505 s with holds (see "Narration length estimate"); within 5,500 to 6,800 and under 570 s. Every changed value was rechecked with SymPy 1.14 (scratchpad `c-rev2/verify.py`; see "Numbers to verify"); Codex's maths check remains the authority. Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. Nothing recorded; human listening pending.

Scope: forty-fourth video of Year 11 Mathematics Advanced (2024), outline order 44, Introduction to differentiation (Calculations with the derivative). Pre-design pack: `../pre-design/maths-a11/math-a11-c13.md` (brief 243). Site lessons (read through the pack's quotations, read only): `introduction-to-differentiation/lesson06.sa.html` (trap 01, x² · x³ = x⁵) and `lesson05.sa.html` (trap 2, x⁵ needs no chain rule). The site has no worked example on choosing a rule; the sorting set and both worked examples are original. Route entry: `math-a11-c13` in `../../programme/maths-a11-route-inputs-3.json`. Visual system: maths studio kit; the painted pass-the-parcel (c12's brief) and a painted beach for the handoff (prefix `ma11-`); the decision tree, layers and rows coded.

Owner rules applied: as c01 to c12 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (games: pass-the-parcel), Australian spelling, no em dashes, "zero point" decimals, conversational narration).

Syllabus content point (Mathematics Advanced 11-12 (2024), Year 11, Introduction to differentiation, Calculations with the derivative), quoted from `../../programme/maths-a11-route-inputs-3.json`:

- `cie3d91a6e`: "Identify and apply the product, quotient or chain rule, or a combination of the rules, as appropriate to differentiate a given function"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678

**Boundary:** starts from c12's final frame (the parcel plate, "y = (x/(x + 1))³", chips "chain?", "product?", "quotient?", "Next: which rule first?", "?"). Recalls the three rules (c10 to c12) only by name on chips. Teaches: simplify first if possible (site trap 01; c07's rewriting); the last step done when you evaluate the function is its outside layer, which sets the first rule (sum, product, quotient or chain); then work inwards, each layer getting its own rule; a plain x inside needs no chain rule (site trap 2); worked combinations, chain outside quotient (the parcel's function) and product outside chain (`cie3d91a6e`); factorising the result to find zeros. Stops at choosing and combining the three rules on polynomial, power and root functions. Not taught: new functions (Year 12); the graphical uses of f′ (c14 onwards).

## Decisions

- **Anchor: a pass-the-parcel (painted plate, live).** A function is built from x in layers, like a parcel wrapped in layers; the last layer wrapped is the first one off. "If you worked out this function for a number, what is the last thing you'd do?" names the outside layer, so the first rule, and each inner layer is unwrapped the same way. The parcel's three painted papers (amber, blue, teal) are the colour roles of the layers. Games; original (the pack's nesting dolls were rejected because they are human figures with faces; its phone folders were rejected because folders open outside-in but are built in no order, which weakens the "last step done" test). Grep 16 Nov: "pass the parcel" and "wrapping" no hits; Year 12 s05's anchor is a parcel's delivery window (a different object and idea, noted for root). The opening is c12's frame (root ruling 6's pattern).
- **Simulations (standard item 3).**
  1. **Layer peel** (scenes 1, 4, 5): the function's expression sits on the parcel; on cue its outer layer's symbols tint amber and lift off with the parcel's outer paper, revealing the blue layer, then the teal layer; each lift writes its rule chip and its derivative factor onto the board. A number evaluation runs alongside (x = 1: "½", then "⅛"), its last step glowing amber.
  2. **`DecisionTree`** (scenes 2, 3): root "Simplify first?" then "Last step?" with four leaves "+ or −: each term", "×: product", "÷: quotient", "power or root of a bracket: chain"; six function cards drop through it live into bins, and three trap cards drop into "simplify" or "plain power".
- **Colour roles (the c01 to c12 roles, root ruling 7).** The outside layer **amber**; the next layer **blue**; the innermost layer **teal**; dy/dx violet; rule chips grey with violet names; answer green; mistake red, crossed slips only. (Amber here is the outside layer; no secant is on screen.)
- **Large type, handwritten voice.** As c01. Hand tags: "last step = outside", "simplify first?", "then go inside", "first symbol ✗", "plain x: no chain", "outside: chain", "inside: quotient", "multiply the layers", "outside: product", "inside v: chain", "take out (2x − 1)²", "every layer".
- **Stage changes (standard item 2).** The parcel and the evaluation (1); the decision tree (2); sorting cards through the tree (3); g01 board with the layer peel, the parcel's function (4); g01 board, x(2x − 1)³ (5); g01 board, a number on top (6); framed card (7); question cards (8 to 11); the beach (12); key notes (13).
- **Worked examples (g01 layout).** 4: (x/(x + 1))³ → 3x²/(x + 1)⁴; crossed "3(x/(x + 1))²". 5: x(2x − 1)³ → (2x − 1)²(8x − 1), zeros ½ and ⅛. 6: 4/(x² + 1)³ = 4(x² + 1)⁻³ → −24x/(x² + 1)⁴ (the pack's "quotient rule on a constant numerator" trap). 3: the sorting set (x² + 5)⁴, x³(x − 2)², (x + 3)/(x − 1), x² · x³, (x³ + 1)/x, x⁵ (classified only; no differentiation).
- **Memory aid.** Framed card: "What's done last is unwrapped first." Key line: "Simplify, find the last step, choose its rule, then work inwards."
- **Visual surprise.** The parcel's paper layers and the expression's layers lift together, and the evaluation's last step (the cube) glows at the same moment the outer paper comes off.
- **Site notes (pack section 8).** The pack allowed folding this video into c11 and c12; root ruling 5 keeps it, and `cie3d91a6e` stays here (Year 12 d06, d07 and d08 rely on it). The site has no worked example devoted to choosing; the examples are original. The logged lesson05 items (odd-one-out with two defensible answers; the "not accepted" claim) are not used.
- **Plain meanings at first use.** Layer ("one step in building the function from x"); outside layer ("the last step you'd do with a number"); combination ("one rule inside another").
- **Attempts (pack questions).** A1: x√(1 − 2x) → (1 − 3x)/√(1 − 2x); crossed "v′ = ½(1 − 2x)^(−½)". A2: (x² − 1)³/(2x + 1) → (6x(x² − 1)²(2x + 1) − 2(x² − 1)³)/(2x + 1)², shown factorised on screen as 2(x² − 1)²(5x² + 3x + 1)/(2x + 1)²; crossed "chain rule first: 3(x² − 1)² × …".
- **Mistake scene:** none separate. Choosing from the first symbol (3 crossed, A2 crossed); quotient rule on a single-term bottom and product rule where simplifying is shorter (3 traps); quotient rule on a number over a bracket (6); chain rule on a plain x (3 trap); stopping after the outside layer (4 crossed); the chain factor missed inside a product (A1 crossed).
- **Cause chain taught, in order:** (1) a function is built from x in steps, so the last step is the outside layer (1); (2) each rule handles one kind of last step, so the last step chooses the rule (2); (3) simplifying can remove a layer entirely (3); (4) after the outside rule, each inner piece is itself a function with its own last step (4, 5); (5) the layers' derivatives multiply (chain) or combine by the outer rule, and factorising shows zeros (4, 5); (6) a number on top is a constant multiple, so rewriting leaves a power of a bracket (6).
- **Entry knowledge (route):** c10 (chain), c11 (product), c12 (quotient); c07 (rewriting in index form; expanding before differentiating).
- **What Year 12 relies on.** d06, d07 and d08 list `cie3d91a6e` in their entry knowledge (d06: "choosing the rule from the structure"; d06 scene 4 contrasts sin(eˣ) by "the same two functions in the other order"). This video teaches the structure test and layer-by-layer working those videos assume.
- **Handoff (to math-a11-c14, "How does the sign of f′(x) show increasing, decreasing and stationary?").** Scene 12: the beach plate (`ma11-beach-day-v1.png`) with a coded counter "people on the beach"; a small crowd-time graph (8 am to 6 pm) rising and falling, with chips at 10 am "growing?", at 4 pm "shrinking?" and at the top "neither?"; chips "Next: the sign of f′" and "?". This is c14's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Hook: x = 1: 1/(1 + 1) = ½; (½)³ = ⅛.
  (b) Sorting set derivatives (not on screen): (x² + 5)⁴ → 8x(x² + 5)³; x³(x − 2)² → x²(x − 2)(5x − 6); (x + 3)/(x − 1) → −4/(x − 1)²; x² · x³ = x⁵ → 5x⁴; (x³ + 1)/x → (2x³ − 1)/x².
  (c) (x/(x + 1))³: u = x/(x + 1), du/dx = 1/(x + 1)², dy/dx = 3u² × du/dx = 3x²/(x + 1)⁴.
  (d) x(2x − 1)³: (2x − 1)³ + 6x(2x − 1)² = (2x − 1)²(8x − 1); zeros ½ (double) and ⅛.
  (e0) 4/(x² + 1)³ = 4(x² + 1)⁻³ → −24x(x² + 1)⁻⁴ = −24x/(x² + 1)⁴.
  (e) A1: v = (1 − 2x)^½, v′ = −(1 − 2x)^(−½); dy/dx = √(1 − 2x) − x/√(1 − 2x) = (1 − 3x)/√(1 − 2x), x < ½. A2: as above; SymPy: 2(x − 1)²(x + 1)²(5x² + 3x + 1)/(2x + 1)².
  (f) Pronunciations: "x over x plus one, all cubed"; "x cubed, times x minus two, all squared"; "x times the square root of one minus two x"; "x squared minus one, all cubed, over two x plus one"; "an eighth".

Main question: *A function can be wrapped in layers like a parcel. Which differentiation rule, or combination, does a function need?*
Entry knowledge (c10, c11, c12, c07): the chain, product and quotient rules; rewriting powers; expanding.
Stops after: simplify first; the last step sets the outside rule; work inwards; combinations; factorised results. No new functions.
Handoff: math-a11-c14: "a beach's crowd grows, then shrinks: at a given time, is it growing, shrinking or neither?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): outside layer amber; next layer blue; innermost teal; dy/dx violet; answer green; mistake red. Header strip "MATHEMATICS ADVANCED · INTRODUCTION TO DIFFERENTIATION". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: which layer is outside?
> Here's that function, x over x plus one, all cubed. It has a fraction, a bracket and a power, so which rule comes first? Think of it as a pass-the-parcel. It was wrapped in layers, and the last layer wrapped is the first one you take off. So ask yourself: if you worked out this function for a number, what's the last thing you'd do? Try x equals one. First, one over one plus one is a half. Last, you cube it, to get an **eighth**. Cubing is the outside layer, so the chain rule comes first. The fraction inside will need the quotient rule. Which differentiation rule, or combination, does a function **need**?

Visual: opens on c12's final frame exactly (the parcel plate `ma11-pass-the-parcel-v1.png`, "y = (x/(x + 1))³" at 64 px, chips "chain?", "product?", "quotient?", "Next: which rule first?", "?"). On the first sentence the "Next" chips fade. On "pass-the-parcel" the parcel's three paper layers outline in turn (amber, blue, teal, from the sidecar). On "Try x equals one" an evaluation strip writes under the function, 44 px: "x = 1" → "1/(1 + 1) = ½" (teal box) → "(½)³ = ⅛" (amber box); on "eighth" the amber box glows and the "³" on the function tints amber, hand tag "last step = outside". On "outside layer" the chip "chain?" turns violet "chain: first" and the "(x/(x + 1))" tints blue with the chip "quotient?" turning "quotient: inside". On "need" heading "Which rule? Unwrap from the outside". The question chip "Which rule first?" moves to the top right.

### 2. the test: what's done last?
> Here's the test. First, ask whether you can simplify. Then put in a number in your head, and notice the last step. If the last step is adding or subtracting, differentiate each term on its own. If it's multiplying two functions, use the product rule. If it's dividing one function by another, use the quotient rule. And if it's a power, or a root, of a whole bracket, use the chain **rule**. A number multiplying a function just rides along, as before. Then go inside, and ask the same question about each piece, because each piece is a function too. That's the next layer of the **parcel**.

Visual: stage change: `DecisionTree` (1,400 × 760 px), the parcel as a 260 px badge at the top left. Root node, 48 px: "Simplify first?" (hand tag "simplify first?"); then "Last step?" with four leaves, 44 px, each lighting on its words: "+ or −: each term", "×: product rule", "÷: quotient rule", on "rule" "power or root of a bracket: chain rule". On "go inside" an arrow loops from each leaf back to "Last step?", hand tag "then go inside"; on "parcel" the badge's outer paper lifts to show the blue layer.

### 3. sorting six functions
> Let's sort some. x squared plus five, all to the fourth: the last step is the power, so chain rule. x cubed, times x minus two all squared: the last step is multiplying, so product rule, and the second factor needs the chain rule inside it. x plus three, over x minus one: the last step is dividing, so quotient **rule**. Now three traps. x squared times x cubed simplifies to x to the fifth, so it's just the power rule. x cubed plus one, over x, splits into x squared plus one over x, so no quotient rule is needed. And x to the fifth has only a plain x inside, so there's no chain rule at **all**. Choosing a rule from the first symbol you see is the slip. Look at the last thing **done**.

Visual: the tree stays; six function cards (44 px) drop through it one per sentence into bins: "(x² + 5)⁴" → "chain"; "x³(x − 2)²" → "product", with a small blue tag "+ chain inside"; on "rule" "(x + 3)/(x − 1)" → "quotient". On "three traps" the bins dim and the "Simplify first?" node lights: "x² · x³ = x⁵" → "simplify: power rule"; "(x³ + 1)/x = x² + x⁻¹" → "simplify: split"; on "all" "x⁵" → "plain power", hand tag "plain x: no chain". On "first symbol" a red slip card "x³(x − 2)² → power rule, since it starts with x³" writes and is crossed, caption "first symbol ✗"; on "done" the tree's "Last step?" node pulses.

### 4. worked example: chain outside, quotient inside
> Now our parcel, x over x plus one, all cubed. The outside layer is the cube, so let u be x over x plus one. Then d y by d u is three u squared. The inside layer is a quotient, so d u by d x comes from the quotient rule: x plus one times one, minus x times one, all over x plus one squared. The top simplifies to just one, so d u by d x is one over x plus one, **squared**. Multiply the layers: three times x over x plus one, squared, times one over x plus one, squared. That's three x squared over x plus one, to the **fourth**. Notice that the quotient rule was used inside the chain rule, not instead of it. Stopping after the outside layer, at three u squared, is the slip. Every layer has to be **unwrapped**.

Visual: clear change to the full-width g01 board, the parcel badge at the top right peeling in step. Task strip, 44 px: "Differentiate y = (x/(x + 1))³." Layer card (left): "outside: ( )³ → chain" (amber), "inside: x/(x + 1) → quotient" (blue). Rows, current 52 px, earlier 32 px and dimmed: "u = x/(x + 1), y = u³" (u blue); "dy/du = 3u²" (amber), hand tag "outside: chain", the badge's amber paper lifts; "du/dx = ((x + 1)(1) − x(1))/(x + 1)²" (blue), hand tag "inside: quotient", the blue paper lifts; on "squared" "du/dx = 1/(x + 1)²"; "dy/dx = 3(x/(x + 1))² × 1/(x + 1)²", hand tag "multiply the layers"; on "fourth" "dy/dx = 3x²/(x + 1)⁴" (green frame). On "unwrapped" a red slip "3(x/(x + 1))²" writes and is crossed, caption "inside not unwrapped".

### 5. worked example: product outside, chain inside
> Another. y equals x, times two x minus one, all cubed. The last step is multiplying, so the product rule comes first. u is x, with u prime one. v is two x minus one, cubed, and that layer needs the chain rule. v prime is three times two x minus one squared, times two, which is six times two x minus one, **squared**. The product rule gives two x minus one cubed, plus x times six, two x minus one squared. Take out two x minus one, squared, and you're left with two x minus one plus six x. So d y by d x is two x minus one squared, times eight x minus **one**. Notice the order: the product rule first, because multiplying is the outside, then the chain rule inside v. Factorising pays off again. The gradient is zero when x is a half, or an **eighth**.

Visual: the board clears row by row. Task strip: "Differentiate y = x(2x − 1)³." Layer card: "outside: × → product" (amber); "v = (2x − 1)³ → chain" (blue). Givens: "u = x, u′ = 1"; "v = (2x − 1)³". Rows, 52 px: "v′ = 3(2x − 1)² × 2", hand tag "inside v: chain"; on "squared" "v′ = 6(2x − 1)²" (blue); "dy/dx = (2x − 1)³ + x × 6(2x − 1)²"; hand tag "take out (2x − 1)²"; "= (2x − 1)²[(2x − 1) + 6x]"; on "one" "dy/dx = (2x − 1)²(8x − 1)" (green frame). On "eighth" row 44 px "dy/dx = 0: x = ½ or x = ⅛".

### 6. a number on top: rewrite, then the chain rule
> One more trap. Four over x squared plus one, all cubed, looks like a quotient. But the top is just a number, so rewrite it as four times x squared plus one, to the minus three. Now the last step is a power of a bracket, with a four out the front that rides along, so it's the chain rule. d y by d x is four, times minus three, times x squared plus one to the minus four, times two x. That's minus twenty-four x, over x squared plus one, to the **fourth**. The quotient rule would get there too, but with a lot more work, and more places to slip. So before you reach for the quotient rule, check whether the top is just a **number**.

Visual: clear change to the g01 board. Task strip, 44 px: "Differentiate y = 4/(x² + 1)³." A grey "÷: quotient?" chip writes and is struck through on "just a number", hand tag "number on top: rewrite". Rows, 52 px: "y = 4(x² + 1)⁻³" (the 4 grey, the power amber, the bracket blue), hand tag "4 rides along"; "dy/dx = 4 × (−3)(x² + 1)⁻⁴ × 2x"; on "fourth" "dy/dx = −24x/(x² + 1)⁴" (green frame). On "a lot more work" a dim grey column at the right shows the quotient route's first line "((x² + 1)³ · 0 − 4 · 6x(x² + 1)²)/(x² + 1)⁶", caption "same answer, more work". On "number" the decision tree's "Simplify first?" node flashes as a 260 px thumbnail.

### 7. memory aid
> Here's the summary. What's done last is unwrapped first. Simplify if you can, find the last step, choose its rule, then work inwards, one layer at a **time**. Later you'll meet new functions, like e to the x, and this same test still works on them.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the parcel with its three layers lifting, beside "(x/(x + 1))³" with the ³ amber and the fraction blue. Main line, hand font 60 px: "What's done last is unwrapped first." On "time" the key line, 40 px: "Simplify → last step → its rule → work inwards." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. Differentiate y equals x times the square root of one minus two x, and simplify. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Differentiate y = x√(1 − 2x) and simplify." The full question stays on screen. Picture slot: an empty layer card ("outside: ?", "inside: ?") and an empty board. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> The last step is multiplying, so use the product rule. v is one minus two x, to the half, and by the chain rule, v prime is minus one over the square root of one minus two **x**. So d y by d x is the square root of one minus two x, minus x over that square root. Over a common bottom, that's one minus three x, over the square root of one minus two **x**. Missing the chain rule's minus two is the **slip**.

Visual: the card shrinks to the top (30 px). Layer card: "outside: × → product"; "v: chain". Rows, 44 px: "v = (1 − 2x)^½"; on "x" (first) "v′ = ½(1 − 2x)^(−½) × (−2) = −1/√(1 − 2x)" (blue); "dy/dx = √(1 − 2x) − x/√(1 − 2x)"; an unspoken row "= ((1 − 2x) − x)/√(1 − 2x)", hand tag "common bottom"; on "x" (second) "= (1 − 3x)/√(1 − 2x)" (green frame). On "slip" a red slip "v′ = ½(1 − 2x)^(−½)" writes and is crossed, caption "× (−2) missing". Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. Differentiate y equals x squared minus one, all cubed, over two x plus one. Pause here to answer.

Visual: `QuestionCard`, 40 px: "Differentiate y = (x² − 1)³/(2x + 1)." Picture slot: empty layer card and board. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> The last step is dividing, so it's the quotient rule, with the chain rule on the top. u prime is six x times x squared minus one, **squared**, and v prime is two. So the top is two x plus one, times six x, x squared minus one squared, minus two times x squared minus one, **cubed**. That all sits over two x plus one, squared. Reaching for the chain rule first, because of the cube, is the **slip**.

Visual: the card shrinks to the top. Layer card: "outside: ÷ → quotient" (amber); "top: chain" (blue). Rows, 44 px: on "squared" "u′ = 3(x² − 1)² × 2x = 6x(x² − 1)²" (blue), "v′ = 2"; on "cubed" "top: (2x + 1) · 6x(x² − 1)² − 2(x² − 1)³"; "dy/dx = [6x(x² − 1)²(2x + 1) − 2(x² − 1)³]/(2x + 1)²" (green frame), with a grey line beneath, 32 px, not spoken: "= 2(x² − 1)²(5x² + 3x + 1)/(2x + 1)²". On "slip" a red slip "3(x² − 1)² × …: chain first" writes and is crossed, caption "last step is ÷". Hold about 1 s.

### 12. handoff
> That's every rule for combining functions, and how to choose between them. Next, we use the derivative to read a graph. Here's a beach on a summer's day. The crowd grows through the morning and shrinks by the evening. At ten o'clock, is it growing or shrinking? At four? And when is it neither? That's **next**.

Visual: the memory line shows small at the top (30 px), then fades. Board clear to the beach plate `ma11-beach-day-v1.png` (1,100 px) at the left with a coded counter "people on the beach". On "The crowd grows" a small crowd-time graph (8 am to 6 pm) draws at the right, rising then falling; on "ten o'clock" chip "10 am: growing?"; on "At four" chip "4 pm: shrinking?"; on "neither" chip at the top of the curve "neither?". On "next" chips "Next: the sign of f′" and "?". Hold about 2 s. This is c14's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Simplify first: x² · x³ = x⁵; 4/(x² + 1)³ = 4(x² + 1)⁻³.
- The last step done sets the rule: + or −, each term; ×, product; ÷, quotient.
- A power or root of a bracket: chain rule. Plain x inside: no chain.
- Then work inwards: each layer gets its own rule.
- Factorise the answer to find where it's zero.

Memory aid (framed card, right side, as in scene 7): *What's done last is unwrapped first.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and c14's opening frame.

## Teaching checks

- **Does it explain causes?** Why the last step: it is the outside layer, the one the outermost rule handles (1, 2). Why simplify first: it can remove a layer (3). Why rewrite a number on top: it is a multiple that rides along (6). Why work inwards: each inner piece is a function with its own last step (2, 4, 5). Why multiply the layers in a chain: the chain rule (4).
- **Misconceptions addressed:** the first symbol (3, A2 crossed); quotient rule on a single term and product rule where simplifying is shorter (3); quotient rule on a number over a bracket (6); chain rule on plain x (3); stopping at the outside layer (4 crossed); the inside factor missed in a product (A1 crossed).
- **Visual standard, item by item:** 1 the painted parcel from the first frame, peeling with the expression in 1, 2 and 4; 2 a new stage every 35 to 55 s; 3 the layer peel with a live evaluation, the decision tree with cards dropping through it; 4 fixed roles (layers amber, blue, teal); 5 large type; 6 hand tags; 7 g01 boards in 4, 5 and 6; 8 framed card and five bullets; 9 the parcel's paper and the expression's layer lifting together.
- **One idea at a time:** the last-step test (1, 2), sorting and traps (3), chain outside quotient (4), product outside chain (5), a number on top (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 30 s and 29 s.
- **Avoided double teaching:** each rule (c10 to c12) is used, not re-derived; rewriting (c07) recalled in a phrase.
- **Syllabus coverage:** `cie3d91a6e` (1 to 6, A1, A2; key notes 1 to 5).
- **Out of scope by design:** new functions (Year 12); graphical uses (c14 onwards).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original, HSC style, 3 marks suggested, not an official marking scheme).** "Differentiate y = x√(1 − 2x) and simplify."
Model answer: product of u = x and v = (1 − 2x)^½, with v′ = −(1 − 2x)^(−½) by the chain rule. dy/dx = √(1 − 2x) − x/√(1 − 2x) = (1 − 3x)/√(1 − 2x). Classic mistake (crossed): "v′ = ½(1 − 2x)^(−½)".

**Attempt 2 (scene 10; pack question 2, original, HSC style, 3 marks suggested).** "Differentiate y = (x² − 1)³/(2x + 1)."
Model answer: quotient, with the chain rule in the numerator: u′ = 6x(x² − 1)², v′ = 2. dy/dx = (6x(x² − 1)²(2x + 1) − 2(x² − 1)³)/(2x + 1)² = 2(x² − 1)²(5x² + 3x + 1)/(2x + 1)². Classic mistake (crossed): "chain rule first".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hook | x = 1: ½, then ⅛ | 1 |
| Sorting | (x² + 5)⁴ chain; x³(x − 2)² product (+ chain); (x + 3)/(x − 1) quotient; x² · x³ = x⁵; (x³ + 1)/x = x² + x⁻¹; x⁵ | 3 |
| Parcel's function | du/dx = 1/(x + 1)²; 3x²/(x + 1)⁴; slip 3(x/(x + 1))² | 4 |
| x(2x − 1)³ | v′ = 6(2x − 1)²; (2x − 1)²(8x − 1); zeros ½, ⅛ | 5 |
| Number on top | 4(x² + 1)⁻³; −24x/(x² + 1)⁴ | 6 |
| A1 | −1/√(1 − 2x); (1 − 3x)/√(1 − 2x) | 8, 9 |
| A2 | 6x(x² − 1)²; 2; quotient form; factorised 2(x² − 1)²(5x² + 3x + 1)/(2x + 1)² | 10, 11 |
| Handoff | beach crowd 8 am to 6 pm (no values stated) | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (16 Nov 2026, scratchpad `c10c18/verify.py`); Codex to re-check.

- Revision 2: √(1 − 2x) − x/√(1 − 2x) = ((1 − 2x) − x)/√(1 − 2x) = (1 − 3x)/√(1 − 2x).
- (x/(x + 1))³ → 3x²/(x + 1)⁴. At x = 1 the function is 1/8.
- x(2x − 1)³ → (2x − 1)²(8x − 1); zeros 1/8, 1/2.
- 4/(x² + 1)³ → −24x/(x² + 1)⁴.
- x√(1 − 2x) → (1 − 3x)/√(1 − 2x).
- (x² − 1)³/(2x + 1) → 2(x − 1)²(x + 1)²(5x² + 3x + 1)/(2x + 1)²; the unsimplified quotient form differs from it by 0.
- Sorting set: (x² + 5)⁴ → 8x(x² + 5)³; x³(x − 2)² → x²(x − 2)(5x − 6); (x + 3)/(x − 1) → −4/(x − 1)²; x⁵ → 5x⁴; (x³ + 1)/x → (2x³ − 1)/x² (author check only).

## Memory aid check

- **"What's done last is unwrapped first."** Original, tied to the parcel. Meaning, as said in scene 7: imagine evaluating the function for a number; the last operation you would do is the outside layer, and its rule is used first; then each inner piece is treated the same way. Assumptions checked: "simplify first" comes before the test (x² · x³ would otherwise look like a product); a sum's last step is + or −, handled term by term; for a constant multiple, the multiple rides along (c07), not the product rule. It helps a new case: √(x² + 1)/x: last step ÷, quotient, with the chain rule on the top. Introduced after scenes 1 to 6.
- **Considered, not used:** "Outside in" (true, but it does not say how to find the outside).

## Narration length estimate

Counted by script (narration blockquotes, bold markers removed): 5,561 characters (Revision 2; Revision 1 was 5,554). At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 22 s of settling (the peel, the cards through the tree) and the 45 s notes scene: about 505 s. Characters per scene (1 to 13): 603, 583, 680, 701, 742, 624, 244, 113, 395, 107, 387, 307, 75. Speech before the notes is about 412 s, under the 570 s cap. Feedback speech: about 30 s and 29 s.

Reserve trims if the voiced take runs long: scene 7's last sentence; scene 6's "and more places to slip"; scene 2's "because each piece is a function too".

## Scene list and build ids

Lesson key `m-a11c13` (route math-a11-c13). Explainer folder `src/explainer/lessons/math-a11-c13`; build inputs in `docs/production/claude-pm/lessons/math-a11-c13/` (at voicing).

In order (13 scene headings): hook-parcel, last-step-test, sorting, chain-over-quotient, product-over-chain, number-on-top, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 45 s | 1 | c12's frame; the parcel and the evaluation |
| 45 to 88 s | 2 | The decision tree |
| 88 to 145 s | 3 | Cards through the tree |
| 145 to 200 s | 4 | g01 board with the peel: (x/(x + 1))³ |
| 200 to 255 s | 5 | g01 board: x(2x − 1)³ |
| 255 to 296 s | 6 | g01 board: a number on top |
| 296 to 313 s | 7 | Framed memory card |
| 313 to 415 s | 8 to 11 | Question cards and countdowns, then feedback |
| 415 to 443 s | 12 | The beach |
| 443 to 488 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: c12's last frame continues into 1; 1 to 2 stage change; 2 to 3 the tree stays, cards drop; 3 to 4 clear change to the board; 4 to 5 board row clear; 5 to 6 board clear; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11c13-learning-review.md`, `science_check` = `checks/m-a11c13-maths-check.md`.

## Assets

Inspected before choosing (16 Nov 2026, `public/assets/maths`, read only, file list): no beach-day plate exists (`ma12-beach-strip-top-v1.png` is a top-down strip for Year 12's lighthouse; `ma12-beach-entry-pool-v1.png` is a pool). The parcel is c12's brief.

Need (painted, new; see the Codex asset brief): `ma11-beach-day-v1.png` (this video's handoff and c14). Reused: `ma11-pass-the-parcel-v1.png` (c12's brief, with its layer sidecar).

Coded: the layer tints and peel, the evaluation strip, the decision tree and cards, the crowd graph and counter, every row, cards, countdown, hand tags, key notes.

### Studio kit use and additions

Uses: `DecisionTree`, `WorkingBoard`, `TaskStrip`, `GivensCard`, `PlateImg`, `HandTag`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`, `StudioPlot`, `ScreenCounter` (the beach counter).

Additions:
1. **Layer peel** (new, small): an expression whose sub-spans carry layer ids; on a cue a layer's span tints and the matching plate layer (from the parcel sidecar) lifts off. Check: the order of lifts matches the narration's "outside, inside" and the expression's tints match the plate's paper colours.
2. **Cards through `DecisionTree`**: a card animates down the tree's branches to a leaf bin on a cue.

## Codex asset brief (Maths A11 C13, a beach on a summer's day; opens c14)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-c13.md`. Paint after the learning review and maths check pass and root gives the go-ahead, and before the c13 build (its final frame shows this plate). Save to `public/assets/maths/`. Transparent PNG with a true alpha channel; ink and watercolour in the house style, matched to `maths/ma11-jellybean-jar-v1.png`; no text, numbers, signs, logos, people, hands, faces, glow or shadow. Never stretch.

1. `ma11-beach-day-v1.png` (2400 × 1200 px): an Australian surf beach on a sunny summer's day seen from the dunes, wide: pale sand in the foreground with a scatter of beach umbrellas, towels, a cooler box and two surfboards stuck in the sand; gentle surf and a clean horizon; a pair of red-and-yellow patrol flags on poles (plain fabric, no text). No people anywhere; the scene must still read as a busy beach from its objects. The top 15 per cent fades to transparent sky.

Report inspection on the paper background (`#f6f1e7`) at 900 px and full width, and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-c13-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quote matches the route-inputs JSON exactly.
3. Confirm every sorted function goes to the right bin, and that "simplify first" is applied before the last-step test.
4. Confirm the outside layer named in each example is the last operation in evaluation.
5. Confirm both attempts carry every demand and neither card nor picture shows an answer.
6. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its Visual in spoken order, and that scene 1 opens on c12's final frame.

## YouTube metadata (draft)

Title: Chain, Product or Quotient? How to Choose the Right Rule | Year 11 Maths Advanced

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/introduction-to-differentiation/lesson06.sa.html

A function can be wrapped in layers, like a pass-the-parcel. Learn a quick test for choosing a differentiation rule: simplify first, then ask what the last step would be if you worked the function out for a number. That step is the outside layer and sets the first rule; then work inwards. Sort six functions, spot three traps, and differentiate (x/(x + 1))³ and x(2x − 1)³ layer by layer. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Introduction to differentiation.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Identify and apply the product, quotient or chain rule, or a combination of the rules, as appropriate to differentiate a given function"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678

Builds on: The chain, product and quotient rules. Next: Increasing, decreasing and stationary.

#Year11Maths #MathsAdvanced #DifferentiationRules #HSCScience

## Open decisions

- **1. Near word "parcel" (root).** Year 12 s05's anchor is a parcel's delivery window (a probability context); this is a party game's wrapping layers. Judged distinct.
- **2. A skills video with an anchor metaphor (root).** The parcel carries the teaching idea (layers, last on is first off) rather than a quantity. The standard allows a pure-skills video to anchor on a visual surprise; here the surprise is the paper lifting with the expression's layer.

## Review notes

- Revision 2 (17 Nov 2026): independent learning review resolved (see "Revision 2" at the top). Next: the Codex maths check and error check (brief 248), then voicing on the Google voice and a build on the studio kit to grade A, with a learning check on the exact voiced preview.
- Revision 1 has had no independent review. Next: student learning review (trace from c10 to c12 and c07; check that "the last thing you'd do with a number" is easy to apply, that the traps are seen as simplifying rather than as new rules, that each layer's rule is said before it is used, and that A2's long top is readable at 44 px), then the Codex maths check and error check, then voicing and a build to grade A.
