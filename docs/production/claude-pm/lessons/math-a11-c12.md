# Maths A11 C12: How do we differentiate a quotient? A quotient as a product in disguise, (v du/dx − u dv/dx)/v² and (g f′ − f g′)/g², the top's push against the bottom's pull, and when to split the fraction instead (design)

Status: Revision 2 (17 Nov 2026): independent learning review resolved (see "Revision 2" below); not voiced. Revision 1 (16 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`) and the accepted Year 11 designs (`math-a11-w05.md`, `w14.md`, `c06.md`; rulings in `../checks/root-acceptance-maths-a11-w01-w14.md`, `-w15-w31.md` and `../checks/root-rulings-maths-a11-c-e-packs.md`). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,647 characters by script (see "Narration length estimate"), 13 scene headings, about 512 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (17 Nov): learning review resolved

Review: `../checks/m-a11-c12-learning-review.md` (summary `../checks/m-a11-c01-c18-learning-review-summary.md`), with root's rulings in `../checks/root-rulings-maths-a11-c-e-packs.md`. Resolution log: `../checks/m-a11-c01-c18-learning-review-resolution.md`. Findings by the review's numbers:

1. Optional, scene 2 (where the extra v comes from): **accepted**, reviewer's wording ("The first, u prime over v, becomes v u prime over v squared, once you multiply its top and bottom by v."), with a grey side note "u′/v = (v u′)/(v × v)", hand tag "top and bottom × v".
2. Optional, scene 3 ("percentage points" never explained aloud): **accepted**, reviewer's sentence ("So forty per cent becomes about forty point six per cent after one more game."), grey chip "40% → about 40.6% after one more game".

Narration now 5,647 characters by script (Revision 1: 5,509), about 512 s with holds (see "Narration length estimate"); within 5,500 to 6,800 and under 570 s. Every changed value was rechecked with SymPy 1.14 (scratchpad `c-rev2/verify.py`; see "Numbers to verify"); Codex's maths check remains the authority. Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. Nothing recorded; human listening pending.

Scope: forty-third video of Year 11 Mathematics Advanced (2024), outline order 43, Introduction to differentiation (Calculations with the derivative). Pre-design pack: `../pre-design/maths-a11/math-a11-c12.md` (brief 243). Site lesson (read through the pack's quotations, read only): `introduction-to-differentiation/lesson06.sa.html` (`we-2`, x³/(x + 1), and short-answer Q2, (2x + 1)/(x − 3), both with their numbers; `we-3` (eˣ) not used, root ruling 1). Route entry: `math-a11-c12` in `../../programme/maths-a11-route-inputs-3.json`. Visual system: maths studio kit; the painted game controller (c11's brief) and a painted pass-the-parcel for the handoff (prefix `ma11-`); every bar, row and graph coded.

Owner rules applied: as c01 to c11 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (games: an online game's win rate), Australian spelling, no em dashes, "zero point" decimals, conversational narration).

Syllabus content point (Mathematics Advanced 11-12 (2024), Year 11, Introduction to differentiation, Calculations with the derivative), quoted from `../../programme/maths-a11-route-inputs-3.json`:

- `cifb023b4e`: "Apply the quotient rule: if y = u/v, where u and v are both differentiable functions of x, then dy/dx = (v du/dx - u dv/dx)/(v^2) or if h(x) = (f(x))/(g(x)) then h'(x) = (g(x)f'(x) - f(x)g'(x))/([g(x)]^2)"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678

**Boundary:** starts from c11's final frame (the controller plate, chips "win rate = wins ÷ games", "20 ÷ 50 = 40%", "wins: + 0.7 a game", "games: + 1 a game", "climbing how fast? ?"). Teaches: a quotient u/v is the product u × v⁻¹, so the product rule (c11) with the chain rule (c10) gives (v u′ − u v′)/v² (pack start); the rule in both forms (`cifb023b4e`); the top's push minus the bottom's pull on the win rate, 15/(50 + g)²; site `we-2` and Q2 with the top simplified and the bottom left squared; splitting the fraction when the bottom is a single term. Stops at polynomial numerators and denominators. Not taught: eˣ quotients (Year 12 d08); domain work beyond "the bottom can't be zero"; choosing among rules (c13).

## Decisions

- **Anchor: an online game's win rate (painted plate, live).** After 50 games with 20 wins (40%), you win about 7 of every 10. After g more games the rate is R(g) = (20 + 0.7g)/(50 + g): every game raises the top by 0.7 (a push up) and the bottom by 1 (a pull down). The quotient rule weighs them: push 50 × 0.7 = 35, pull 20 × 1 = 20, net 15, over 50² = 2500: R′(0) = 0.006, about 0.6 percentage points per game. In general R′(g) = 15/(50 + g)², always positive but shrinking: the rate climbs towards 70% ever more slowly, reaching 50% after 25 more games. Games; original (the pack's basketball shooting percentage was moved to a game because basketball already appears in w05 and w14 and netball in w24; the pack's bake-sale cost per cupcake splits into 40/n + 2, which needs no quotient rule). No Year 12 or a11 design uses a game controller, a win rate or gaming (grep 16 Nov: "controller", "win rate", "gaming", "video game", "console" no hits; c07 rejected "phone-game XP", a different idea).
- **The model.** Wins rise 0.7 per game on average, so the win rate is treated as a smooth function of g (author note a). "Percentage points per game" is said in full; the derivative 0.006 is a fraction per game.
- **Simulations (standard item 3).**
  1. **Win-rate tracker** (scenes 1, 3): over the controller plate, two coded tallies "wins" (teal) and "games" (blue) tick as games play at a steady pace, a `TargetDial` or bar shows R(g) as a percentage with a dashed amber line at 70%; push and pull arrows on the fraction grow with each game. In scene 3 a `LiveReadoutBoard` shows "push v u′", "pull u v′", "net ÷ v²" and the rate per game, and a small graph of R(g) draws, flattening towards 70%.
  2. **Push and pull bars** (`SignedBar`, scenes 2, 3, 5): a teal bar "v u′" up and a blue bar "u v′" down, the violet net between them; for Q2 the pull is larger and the net is negative.
- **Colour roles (the c01 to c11 roles, root ruling 7; the quotient's two terms matched to Year 12 d08).** The top u and the push v u′ **teal**; the bottom v and the pull u v′ **blue**; "v ≠ 0" **amber**; dy/dx violet; answer green; mistake red, crossed slips only.
- **Large type, handwritten voice.** As c01. Hand tags: "a product in disguise", "chain rule on v⁻¹", "over v²", "push − pull", "order matters", "expand the top only", "keep the bottom squared", "never negative", "split first", "low d high", "v ≠ 0".
- **Stage changes (standard item 2).** The controller and tracker (1); g01 board, the derivation (2); the win-rate readouts and graph (3); g01 board, site `we-2` (4); g01 board, site Q2 with the bars (5); the split shortcut (6); framed card (7); question cards (8 to 11); the parcel (12); key notes (13).
- **Worked examples (g01 layout).** 2: u × v⁻¹ → (v u′ − u v′)/v². 3: the win rate, 15/(50 + g)²; 0.006 at g = 0; 50% at g = 25. 4: site `we-2`, x³/(x + 1) → x²(2x + 3)/(x + 1)²; crossed "(x³ − 3x²(x + 1))/(x + 1)²". 5: site Q2, (2x + 1)/(x − 3) → −7/(x − 3)². 6: (x³ + 1)/x = x² + x⁻¹ → 2x − 1/x².
- **Memory aid.** Framed card: "Low d high, minus high d low, over low squared." Key line: "(v u′ − u v′)/v²; the order matters". The site's mnemonic, as Year 12 d08 uses it.
- **Visual surprise.** The win rate's numerator stays at 15 for every g: the push and the pull grow by the same 0.7 each game, so only the bottom's square grows, and the climb visibly flattens towards 70% without reaching it.
- **Site notes (pack section 8).** `we-3`, the eˣ/x drill and the eˣ match items are not used (root ruling 1). The site's card says the v² is "weighted by v² to account for the shrinking or stretching effect of division", which is not an explanation; the narration derives v² from u × v⁻¹ instead (pack decision). No logged error affects this video.
- **Plain meanings at first use.** Quotient ("one function divided by another"); numerator and denominator are said as "the top" and "the bottom"; percentage point ("one per cent of the whole, added or taken away").
- **Attempts (pack questions).** A1: (3x − 2)/(x² + 1) → (−3x² + 4x + 3)/(x² + 1)²; crossed "(3x² − 4x − 3)/(x² + 1)²" (order swapped). A2: x²/(2x − 1): gradient 4/9 at x = 2; zero at x = 0 and x = 1; crossed "2x/2 = x".
- **Mistake scene:** none separate. Swapped order (4 crossed; A1 crossed); the bottom not squared (5 tag); expanding the bottom (5 tag); quotient rule where splitting is quicker (6); dividing the derivatives (A2 crossed).
- **Cause chain taught, in order:** (1) the top rising pushes the fraction up and the bottom rising pulls it down, so their effects compete (1); (2) writing u/v as u × v⁻¹ and using the product and chain rules gives u′/v − u v′/v², which over a common bottom is (v u′ − u v′)/v² (2); (3) for the win rate the push and pull are 35 and 20, so the rate climbs at 15/2500 per game, and because the numerator stays 15 while the bottom grows, the climb slows (3); (4) the minus sign makes order matter (2, 4, A1); (5) a square bottom is never negative, so the top alone sets the sign (5); (6) a single-term bottom splits into powers (6).
- **Entry knowledge (route):** c11 (the product rule); c10 (the chain rule, including (g(x))⁻¹); c07 (rewriting 1/x as x⁻¹).
- **What Year 12 relies on.** d08's entry knowledge is `cifb023b4e` in both forms and `cie3d91a6e`; it rebuilds the rule from the product rule ("last video: (uv)′ = u′v + uv′") and uses "lo d(hi) minus hi d(lo), over lo squared". This video teaches both forms, the same derivation and the same mnemonic, so d08 is a recall with new functions.
- **Handoff (to math-a11-c13, "Which differentiation rule, or combination, does a function need?").** Scene 12: the pass-the-parcel plate (`ma11-pass-the-parcel-v1.png`); centre, 64 px, "y = (x/(x + 1))³"; chips "chain?", "product?", "quotient?" (grey, each with "?"); chips "Next: which rule first?" and "?". This is c13's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) R(g) = (20 + 0.7g)/(50 + g); R′(g) = ((50 + g)(0.7) − (20 + 0.7g))/(50 + g)² = 15/(50 + g)²; R′(0) = 15/2500 = 0.006; R(25) = 37.5/75 = 0.5; R′(25) = 15/5625 ≈ 0.00267; R → 0.7 as g → ∞. A real record is a step function; the model averages it.
  (b) u × v⁻¹: (u v⁻¹)′ = u′v⁻¹ + u(−v⁻²)v′ = (v u′ − u v′)/v².
  (c) `we-2`: (3x²(x + 1) − x³)/(x + 1)² = (2x³ + 3x²)/(x + 1)² = x²(2x + 3)/(x + 1)².
  (d) Q2: (2(x − 3) − (2x + 1))/(x − 3)² = −7/(x − 3)², x ≠ 3.
  (e) (x³ + 1)/x = x² + x⁻¹ → 2x − x⁻²; by the rule (2x³ − 1)/x², equal.
  (f) A1: (3(x² + 1) − (3x − 2)(2x))/(x² + 1)² = (−3x² + 4x + 3)/(x² + 1)². A2: (2x(2x − 1) − 2x²)/(2x − 1)² = 2x(x − 1)/(2x − 1)²; at 2: 4/9; zeros 0 and 1 (both allowed, 2x − 1 ≠ 0 there).
  (g) Pronunciations: "zero point seven g"; "zero point zero zero six"; "zero point six percentage points"; "v u prime minus u v prime, all over v squared"; "low d high, minus high d low, over low squared"; "x minus three, all squared".
  (h) Windows: R(g) graph g 0 to 150 games, rate 35% to 75%, dashed line at 70%; Q2 sign picture not needed.

Main question: *Every game raises your wins and your games played. How fast does your win rate climb? How do we differentiate a quotient?*
Entry knowledge (c11, c10, c07): the product rule; the chain rule with a power of −1; negative powers.
Stops after: (v du/dx − u dv/dx)/v² and (g f′ − f g′)/g²; simplifying the top; finding where the gradient is zero; splitting a single-term bottom. No eˣ, no rule choice.
Handoff: math-a11-c13: "(x/(x + 1))³ is wrapped in layers: which rule first?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): top u and push v u′ teal; bottom v and pull u v′ blue; v ≠ 0 amber; dy/dx violet; answer green; mistake red. Header strip "MATHEMATICS ADVANCED · INTRODUCTION TO DIFFERENTIATION". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: wins over games
> Here's that game. You've won twenty of your fifty games, so your win rate is twenty over fifty, forty per cent. Lately, you win about seven games in every ten. So after g more games, your wins are twenty plus zero point seven g, and your games are fifty plus g. Your win rate is one function divided by another. Every game pushes the top up by zero point seven. But it also pushes the bottom up by one, even when you win, and a bigger bottom pulls the fraction down. Lose a game, and only the bottom moves. Which effect wins, and by how much? How do we differentiate a **quotient**?

Visual: opens on c11's final frame exactly (the controller plate `ma11-game-controller-v1.png`, chips "win rate = wins ÷ games", "20 ÷ 50 = 40%", "wins: + 0.7 a game" teal, "games: + 1 a game" blue, "climbing how fast? ?", the small arrows "pushes up" and "pulls down", "Next: one function divided by another", "?"). On the first sentence the "Next" chips fade. On "after g more games" the equation chip writes, 52 px: "R(g) = (20 + 0.7g)/(50 + g)" (top teal, bottom blue). The tracker starts: the tallies tick game by game, the rate bar rises slowly from 40% with a dashed amber line at 70%; on "pushes the top up" a teal arrow pushes on the top; on "pulls the fraction down" a blue arrow pulls on the bottom. On "quotient" heading "One function divided by another". The question chip "How fast does it climb?" moves to the top right.

### 2. a quotient is a product in disguise
> We already have a product rule, and a quotient is a product in disguise. u over v is u times v to the minus one. Use the product rule, with the chain rule on v to the minus one. That gives u prime times v to the minus one, plus u times minus v to the minus two, times v **prime**. Put both terms over v squared. The first, u prime over v, becomes v u prime over v squared, once you multiply its top and bottom by v. And the second is minus u v prime over v squared. So d y by d x equals v d u by d x, minus u d v by d x, all over v **squared**. And v can't be zero, because we can't divide by zero. In function notation, h prime is g times f prime, minus f times g prime, all over g squared. The top's change pushes up, the bottom's change pulls down, so the two turns subtract. And because of that minus sign, the order **matters**.

Visual: clear change to the full-width g01 board, the controller as a 280 px badge at the top right. Task strip, 44 px: "Why y = u/v has dy/dx = (v u′ − u v′)/v²". Grey chips (30 px): "c11: (uv)′ = u v′ + v u′", "c10: chain rule". Rows, current 52 px, earlier 32 px and dimmed: "u/v = u × v⁻¹", hand tag "a product in disguise"; "(v⁻¹)′ = −v⁻² × v′", hand tag "chain rule on v⁻¹"; on "prime" "dy/dx = u′v⁻¹ + u(−v⁻²)v′"; "= v u′/v² − u v′/v²", hand tag "over v²", and a small grey side note on the first term "u′/v = (v u′)/(v × v)" with the extra v ringed, hand tag "top and bottom × v"; on "squared" the rule framed, 60 px: "dy/dx = (v du/dx − u dv/dx)/v²" (v du/dx teal, u dv/dx blue), amber chip "v ≠ 0". Row, 44 px: "h(x) = f(x)/g(x): h′(x) = (g(x)f′(x) − f(x)g′(x))/[g(x)]²". Beside the rule, `SignedBar`: teal bar up "push", blue bar down "pull", hand tag "push − pull". On "matters" the minus sign rings red, hand tag "order matters".

### 3. the win rate
> Back to the game. u is twenty plus zero point seven g, so u prime is zero point seven. v is fifty plus g, so v prime is one. Right now, g is zero. The top's push is v times u prime, fifty times zero point seven, which is thirty-five. The bottom's pull is u times v prime, twenty times one, which is **twenty**. Thirty-five minus twenty is fifteen, over fifty squared, which is two thousand five hundred. That's zero point zero zero six, so your win rate is climbing by about zero point six percentage points per **game**. So forty per cent becomes about forty point six per cent after one more game. In general, the derivative is fifteen over fifty plus g, all squared. The top stays at fifteen, but the bottom keeps growing. So your win rate keeps climbing towards seventy per cent, but more and more slowly. After twenty-five more games, it reaches fifty per **cent**.

Visual: stage change: `LiveReadoutBoard` at the left (52 px) and a graph of R(g) at the right (g 0 to 150, rate 35% to 75%, dashed amber line at 70%; 800 × 560 px). Givens card: "u = 20 + 0.7g, u′ = 0.7" (teal); "v = 50 + g, v′ = 1" (blue). Readouts: "push v u′ = 50 × 0.7 = 35" (teal bar); on "twenty" "pull u v′ = 20 × 1 = 20" (blue bar); "net = 15"; "÷ v² = 2500". On "game" "R′(0) = 15/2500 = 0.006: + 0.6 percentage points a game" (violet, green frame); a violet tangent at g = 0 on the graph. On "forty point six" a grey chip, 40 px: "40% → about 40.6% after one more game" (R(1) = 20.7/51). Row, 44 px: "R′(g) = ((50 + g)(0.7) − (20 + 0.7g))/(50 + g)² = 15/(50 + g)²", the "15" ringed, hand tag "push and pull grow together". The tracker runs on: the graph draws, flattening towards the 70% line, the bars both lengthening by the same amount. On "cent" a dot at g = 25 reads "50%" (green), its tangent flatter, readout "+ 0.27 points a game".

### 4. worked example: x cubed over x plus one
> Here's a quotient of polynomials. Differentiate x cubed over x plus one. u is x cubed, so u prime is three x squared. v is x plus one, so v prime is one. The rule gives x plus one times three x squared, minus x cubed times one, all over x plus one, **squared**. Expand the top only. Three x cubed plus three x squared, minus x cubed, is two x cubed plus three x squared. So d y by d x is two x cubed plus three x squared, over x plus one squared. Factorised, that's x squared times two x plus three, over x plus one, **squared**. The factors show straight away where the gradient is zero: at x equals zero, and at x equals minus three on **two**. Swapping the two terms on top flips the sign. That's the **slip**.

Visual: clear change to the full-width g01 board. Task strip, 44 px: "Differentiate y = x³/(x + 1)." Givens card: "u = x³, u′ = 3x²" (teal); "v = x + 1, v′ = 1" (blue); amber chip "x ≠ −1". Rows, 52 px: on "squared" (first) "dy/dx = ((x + 1)(3x²) − x³(1))/(x + 1)²"; hand tag "expand the top only"; "= (3x³ + 3x² − x³)/(x + 1)²"; "= (2x³ + 3x²)/(x + 1)²"; on "squared" (second) "= x²(2x + 3)/(x + 1)²" (green frame). On "The factors show" the factors x² and (2x + 3) ring; on "two" row (44 px) "dy/dx = 0: x = 0 or x = −3/2" with two flat violet tangents on a small inset graph of y = x³/(x + 1). On "slip" a red slip "(x³ − 3x²(x + 1))/(x + 1)²" writes and is crossed, caption "order swapped: sign flips".

### 5. keep the bottom squared
> Another one. Differentiate two x plus one, over x minus three. u prime is two and v prime is one. So the top is x minus three, times two, minus two x plus one, times one. That's two x minus six, minus two x minus one, which is minus **seven**. So d y by d x is minus seven over x minus three, all **squared**. x can't be three, because that makes the bottom zero. Leave the bottom as a square, and don't expand it. A square is never negative, so the top alone sets the sign. Here, the gradient is negative everywhere it **exists**. The bottom's pull always beats the top's push.

Visual: the board clears row by row. Task strip: "Differentiate y = (2x + 1)/(x − 3)." Givens: "u = 2x + 1, u′ = 2" (teal); "v = x − 3, v′ = 1" (blue); amber chip "x ≠ 3". Rows, 52 px: "top: (x − 3)(2) − (2x + 1)(1)"; "= 2x − 6 − 2x − 1"; on "seven" "= −7"; on "squared" "dy/dx = −7/(x − 3)²" (green frame), hand tag "keep the bottom squared". On "never negative" the "(x − 3)²" rings, hand tag "never negative". On "exists" `SignedBar` shows the blue pull longer than the teal push, net bar violet below zero, caption "gradient < 0 for every x ≠ 3".

### 6. when to split instead
> One shortcut. If the bottom is a single term, like x, it's often quicker to split the fraction. x cubed plus one, over x, is x squared plus one over x, which is x squared plus x to the minus one. Its derivative is two x minus one over x **squared**. The quotient rule gives the same answer, with more work. The top would be x times three x squared, minus x cubed plus one, which is two x cubed minus one, all over x squared. Split that up, and it's two x minus one over x squared again.

Visual: clear change: two columns. Left (green border), 52 px: "(x³ + 1)/x = x² + x⁻¹", hand tag "split first"; on "squared" "→ 2x − 1/x²" (green frame). Right (grey, 40 px): on "The quotient rule gives" the quotient-rule route writes, "(x · 3x² − (x³ + 1))/x² = (2x³ − 1)/x²", then "= 2x − 1/x² ✓", caption "same, more work".

### 7. memory aid
> Here's a way to remember the order. Low d high, minus high d low, over low squared. Low is the bottom, high is the top, and d means the derivative of. Low d high comes first, because it's the top's push. Unlike a product, the order **matters**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the push and pull bars and the win-rate fraction. Main line, hand font 60 px: "Low d high, minus high d low, over low squared." Under it, 44 px: "(v u′ − u v′)/v²" with v u′ teal, u v′ blue. On "matters" the key line, 40 px: "The order matters; v ≠ 0." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. Differentiate y equals three x minus two, over x squared plus one. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Differentiate y = (3x − 2)/(x² + 1)." The full question stays on screen. Picture slot: an empty board with "u =", "u′ =", "v =", "v′ =". Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> u prime is three, and v prime is two x. The top is x squared plus one, times three, minus three x minus two, times two x. That's three x squared plus three, minus six x squared plus four x, which is minus three x squared plus four x plus **three**. So the answer is that, over x squared plus one, all **squared**. Doing high d low first is the slip. Every sign **flips**.

Visual: the card shrinks to the top (30 px). Givens: "u′ = 3" (teal), "v′ = 2x" (blue). Rows, 44 px: "top: (x² + 1)(3) − (3x − 2)(2x)"; on "three" "= −3x² + 4x + 3"; on "squared" "dy/dx = (−3x² + 4x + 3)/(x² + 1)²" (green frame). On "flips" a red slip "(3x² − 4x − 3)/(x² + 1)²" writes and is crossed, caption "low d high first". Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. For y equals x squared over two x minus one, find the gradient at x equals two. Then find the values of x where the gradient is zero. Pause here to answer.

Visual: `QuestionCard`, 40 px: "For y = x²/(2x − 1), find the gradient at x = 2 and the values of x where the gradient is zero." Picture: y = x²/(2x − 1) for x −2 to 4, the dashed line x = ½, no tangents. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> The top is two x minus one, times two x, minus x squared times two. That's two x squared minus two x, which is two x times x minus **one**. So the gradient is two x times x minus one, over two x minus one, squared. At x equals two, that's four over nine. It's zero when the top is zero, at x equals zero or **one**. Dividing the derivatives, two x over two, is the **slip**.

Visual: the card shrinks to the top. Rows, 44 px: "top: (2x − 1)(2x) − x²(2)"; on "one" (first) "= 2x² − 2x = 2x(x − 1)"; "dy/dx = 2x(x − 1)/(2x − 1)²"; "x = 2: 4/9" (green frame); on "one" (second) "dy/dx = 0: x = 0 or x = 1" (green frame), two flat violet tangents on the picture. On "slip" a red slip "2x/2 = x" writes and is crossed, caption "not top′ ÷ bottom′". Hold about 1 s.

### 12. handoff
> So now there are three rules: chain, product and quotient. Real questions often mix them, so the hard part is choosing. Here's y equals x over x plus one, all cubed. There's a power, a bracket and a fraction, wrapped up in layers like a pass-the-parcel. Do you start with the fraction, or with the cube? Which rule do you use first? That's **next**.

Visual: the memory line shows small at the top (30 px), then fades. Board clear to the parcel plate `ma11-pass-the-parcel-v1.png` (900 px) at the left. On "Here's y equals" centre-right, 64 px, "y = (x/(x + 1))³". On "chain, product and quotient" three grey chips "chain?", "product?", "quotient?" line up; on "layers" the parcel's outer layer outlines. On "next" chips "Next: which rule first?" and "?". Hold about 2 s. This is c13's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Quotient rule: y = u/v gives dy/dx = (v du/dx − u dv/dx)/v², v ≠ 0.
- Function form: h′(x) = (g(x)f′(x) − f(x)g′(x))/[g(x)]².
- Order matters: v u′ first, then minus u v′.
- Simplify the top; keep the bottom squared.
- Single-term bottom: split the fraction first.

Memory aid (framed card, right side, as in scene 7): *Low d high, minus high d low, over low squared.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and c13's opening frame.

## Teaching checks

- **Does it explain causes?** Why subtract: the bottom rising pulls the fraction down (1, 2). Why v²: it comes from v⁻¹'s derivative, −v⁻², by the chain rule (2). Why order matters: the minus sign (2, 7). Why the win rate slows: the numerator stays 15 while the bottom grows (3). Why keep the bottom squared: it is never negative, so the top sets the sign (5). Why split: a single term divides into powers (6).
- **Misconceptions addressed:** order swapped (4, A1 crossed); bottom not squared or expanded (5 tags); quotient rule where splitting is quicker (6); dividing derivatives (A2 crossed).
- **Visual standard, item by item:** 1 the painted controller from the first frame with a live tracker, returning as a badge; 2 a new stage every 30 to 60 s; 3 the tracker with push and pull arrows, the readouts and flattening graph, the signed bars; 4 fixed roles (top teal, bottom blue); 5 large type; 6 hand tags; 7 g01 boards in 2, 4 and 5; 8 framed card and five bullets; 9 the numerator staying 15 while the curve flattens towards 70%.
- **One idea at a time:** the competing effects (1), the derivation (2), the anchor (3), a polynomial quotient (4), the sign from the top (5), the shortcut (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 27 s and 27 s.
- **Avoided double teaching:** the product rule (c11) and the chain rule (c10) are used in the derivation, not re-taught; negative powers (c07) recalled in a phrase.
- **Syllabus coverage:** `cifb023b4e` (2 to 5, A1, A2; key notes 1 to 4).
- **Out of scope by design:** eˣ (Year 12 d08); rule choice (c13).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original, HSC style, 2 marks suggested, not an official marking scheme).** "Differentiate y = (3x − 2)/(x² + 1)."
Model answer: u = 3x − 2, v = x² + 1, u′ = 3, v′ = 2x. dy/dx = (3(x² + 1) − (3x − 2)(2x))/(x² + 1)² = (−3x² + 4x + 3)/(x² + 1)². Classic mistake (crossed): "(3x² − 4x − 3)/(x² + 1)²".

**Attempt 2 (scene 10; pack question 2, original, HSC style, 3 marks suggested).** "For y = x²/(2x − 1), find the gradient at x = 2 and the values of x where the gradient is zero."
Model answer: dy/dx = (2x(2x − 1) − 2x²)/(2x − 1)² = 2x(x − 1)/(2x − 1)². At x = 2: 4/9. Gradient zero when x = 0 or x = 1 (both allowed, as 2x − 1 ≠ 0). Classic mistake (crossed): "2x/2 = x".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Win rate | 20/50 = 40%; R(g) = (20 + 0.7g)/(50 + g) | 1 |
| Derivation | u v⁻¹; −v⁻²v′; (v u′ − u v′)/v² | 2 |
| Win rate's rate | push 35, pull 20, net 15, 2500; 0.006 (0.6 points a game); 15/(50 + g)²; 50% at g = 25 (0.27 points a game); towards 70% | 3 |
| `we-2` | (2x³ + 3x²)/(x + 1)² = x²(2x + 3)/(x + 1)²; zero at x = 0, −3/2 | 4 |
| Q2 | −7/(x − 3)² | 5 |
| Split | x² + x⁻¹ → 2x − 1/x²; (2x³ − 1)/x² | 6 |
| A1 | (−3x² + 4x + 3)/(x² + 1)²; slip (3x² − 4x − 3)/(x² + 1)² | 8, 9 |
| A2 | 2x(x − 1)/(2x − 1)²; 4/9; x = 0, 1; slip x | 10, 11 |
| Handoff | (x/(x + 1))³ (no derivative stated) | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (16 Nov 2026, scratchpad `c10c18/verify.py`); Codex to re-check.

- Revision 2: R(1) = 20.7/51 = 69/170 ≈ 0.4059 (about 40.6%).
- R′(g) = 15/(g + 50)²; R′(0) = 3/500 = 0.006; R(25) = 1/2; R′(25) ≈ 0.00267; R′(50) = 3/2000; R(50) = 11/20; limit 7/10. Push 50 × 0.7 = 35; pull 20 × 1 = 20.
- x³/(x + 1) → x²(2x + 3)/(x + 1)²; top 2x³ + 3x²; zeros 0 and −3/2 (x ≠ −1).
- (2x + 1)/(x − 3) → −7/(x − 3)².
- (x³ + 1)/x → (2x³ − 1)/x² = 2x − 1/x².
- (3x − 2)/(x² + 1) → (−3x² + 4x + 3)/(x² + 1)².
- x²/(2x − 1) → 2x(x − 1)/(2x − 1)²; at 2: 4/9; zeros 0, 1.

## Memory aid check

- **"Low d high, minus high d low, over low squared."** The site's mnemonic, as Year 12 d08 uses it. Meaning, as said in scene 7: the bottom times the derivative of the top, minus the top times the derivative of the bottom, all over the bottom squared; it is (v u′ − u v′)/v². Assumptions checked: v ≠ 0; "d" means "the derivative of", said aloud; the order is the syllabus's v du/dx − u dv/dx. It helps a new case: x/(x + 1) → ((x + 1) − x)/(x + 1)² = 1/(x + 1)² (the site's match item, polynomial). Introduced after scenes 2 to 6.
- **Considered, not used:** "Top push minus bottom pull" alone (good meaning, but it does not fix the order of the two products or the square; kept as a hand tag).

## Narration length estimate

Counted by script (narration blockquotes, bold markers removed): 5,647 characters (Revision 2; Revision 1 was 5,509). At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 22 s of settling (the tracker, the bars, the graph) and the 45 s notes scene: about 512 s. Characters per scene (1 to 13): 578, 821, 858, 697, 566, 482, 240, 99, 359, 165, 362, 345, 75. Speech before the notes is about 419 s, under the 570 s cap. Feedback speech: about 27 s and 27 s.

Reserve trims if the voiced take runs long: scene 3's last sentence (keep the dot at 50%); scene 5's last sentence.

## Scene list and build ids

Lesson key `m-a11c12` (route math-a11-c12). Explainer folder `src/explainer/lessons/math-a11-c12`; build inputs in `docs/production/claude-pm/lessons/math-a11-c12/` (at voicing).

In order (13 scene headings): hook-win-rate, quotient-from-product, win-rate-rate, example-cubic-over-linear, keep-bottom-squared, split-shortcut, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 40 s | 1 | c11's frame; the win-rate tracker |
| 40 to 100 s | 2 | g01 board: the derivation |
| 100 to 162 s | 3 | Readouts and the flattening graph |
| 162 to 205 s | 4 | g01 board: x³/(x + 1) |
| 205 to 240 s | 5 | g01 board: (2x + 1)/(x − 3), the bars |
| 240 to 262 s | 6 | The split shortcut |
| 262 to 278 s | 7 | Framed memory card |
| 278 to 380 s | 8 to 11 | Question cards and countdowns, then feedback |
| 380 to 404 s | 12 | The parcel |
| 404 to 449 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: c11's last frame continues into 1; 1 to 2 clear change to the board; 2 to 3 stage change; 3 to 4 clear change to the board; 4 to 5 board row clear; 5 to 6 clear change; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11c12-learning-review.md`, `science_check` = `checks/m-a11c12-maths-check.md`.

## Assets

Inspected before choosing (16 Nov 2026, `public/assets/maths`, read only, file list): no parcel plate exists; the controller is c11's brief.

Need (painted, new; see the Codex asset brief): `ma11-pass-the-parcel-v1.png` (this video's handoff and c13). Reused: `ma11-game-controller-v1.png` (c11's brief).

Coded: the tallies, rate bar, push and pull arrows and bars, readouts, graph, every row, cards, countdown, hand tags, key notes.

### Studio kit use and additions

Uses: `LiveReadoutBoard`, `SignedBar`, `TargetDial` (or a coded rate bar), `StudioPlot`, `FunctionRider` (tangent), `WorkingBoard`, `TaskStrip`, `GivensCard`, `PlateImg`, `HandTag`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions:
1. **Win-rate tracker** (small): two tallies driven by game count g (wins as the running total of a fixed 7-in-10 pattern, shown rounded) and the model rate R(g) = (20 + 0.7g)/(50 + g) on a bar and graph. Check: at g = 0 the bar reads 40%; at g = 25, 50%; the graph never crosses the 70% line.

## Codex asset brief (Maths A11 C12, a pass-the-parcel; opens c13)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-c12.md`. Paint after the learning review and maths check pass and root gives the go-ahead, and before the c12 build (its final frame shows this plate). Save to `public/assets/maths/`. Transparent PNG with a true alpha channel; ink and watercolour in the house style, matched to `maths/ma11-jellybean-jar-v1.png`; no text, numbers, signs, logos, people, hands, faces, glow or shadow. Never stretch.

1. `ma11-pass-the-parcel-v1.png` (1800 × 1400 px): a pass-the-parcel bundle on a plain floor, its outer layer of amber wrapping paper torn open at the top to show a second layer of blue paper, which is itself torn a little to show a third layer of teal paper; a few loose scraps of wrapping beside it. Three distinct layers must be readable at 600 px. No ribbon text, no tape labels.

Sidecar JSON (`ma11-pass-the-parcel-v1.json`): pixel outlines (polygons) of the visible edge of each of the three layers, so code can outline them in turn. Report inspection on the paper background (`#f6f1e7`) at 900 px and full width, and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-c12-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quote matches the route-inputs JSON exactly.
3. Confirm the derivation from u × v⁻¹ is correct line by line and the rule's order matches the syllabus (v du/dx − u dv/dx).
4. Confirm "percentage points per game" is used for the win rate's derivative and 0.006 is 0.6 points.
5. Confirm no eˣ appears and every bottom is left squared.
6. Confirm both attempts carry every demand and neither card nor picture shows an answer.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its Visual in spoken order, and that scene 1 opens on c11's final frame.

## YouTube metadata (draft)

Title: The Quotient Rule: Push From the Top, Pull From the Bottom | Year 11 Maths Advanced

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/introduction-to-differentiation/lesson06.sa.html

Every game you play raises your wins and your games played. How fast does your win rate climb? Build the quotient rule from the product rule (a quotient is u × v⁻¹), see why the top's push and the bottom's pull subtract, and use dy/dx = (v du/dx − u dv/dx)/v² on x³/(x + 1) and (2x + 1)/(x − 3). Plus when to split the fraction instead. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Introduction to differentiation.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Apply the quotient rule: if y = u/v, where u and v are both differentiable functions of x, then dy/dx = (v du/dx - u dv/dx)/(v^2) or if h(x) = (f(x))/(g(x)) then h'(x) = (g(x)f'(x) - f(x)g'(x))/([g(x)]^2)"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678

Builds on: The product rule; the chain rule. Next: Choosing the right rule.

#Year11Maths #MathsAdvanced #QuotientRule #HSCScience

## Open decisions

- **1. The anchor's sport question (root).** The pack's basketball percentage was moved to an online game to avoid a third basketball and a second netball context; the maths is the same (linear over linear, like the site's Q2).
- **2. Spoken small decimals (voice pilot).** "zero point zero zero six" is said once and immediately turned into "zero point six percentage points"; if the take stumbles, drop the first and keep the second.

## Review notes

- Revision 2 (17 Nov 2026): independent learning review resolved (see "Revision 2" at the top). Next: the Codex maths check and error check (brief 248), then voicing on the Google voice and a build on the studio kit to grade A, with a learning check on the exact voiced preview.
- Revision 1 has had no independent review. Next: student learning review (trace from c11 and c10; check that the derivation is followed line by line without a skipped step, that "push minus pull" makes the minus sign feel caused, that "percentage points per game" is understood, and that the split shortcut is not read as a fourth rule), then the Codex maths check and error check, then voicing and a build to grade A.
