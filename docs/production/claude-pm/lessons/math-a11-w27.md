# Maths A11 W27: What happens when one function's output becomes another's input? Composite functions f(g(x)), evaluating inside out, their equations, order, and the domain of a composite (design)

Status: learning review resolved, Revision 1 plus 23 Nov 2026 text corrections (status updated 23 Nov 2026, coherence audit N-4): the independent learning review passed with 0 blockers and 0 should-fix findings (`../checks/m-a11-w27-learning-review.md`) and the Codex maths check passed (`../checks/m-a11-w27-maths-check.md`). The maths check's scene 4 colour correction (f stays violet and g amber when the chain swaps) and count correction (5,654 characters) are applied. Not voiced. Next: voicing on the Google voice and a build on the studio kit to grade A. Revision 1 (16 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`, the d01 Revision 6 pattern) and the accepted w01 to w14 designs (`../checks/root-acceptance-maths-a11-w01-w14.md`). Not voiced.

Narration 5,654 characters by script (build parser rules; recounted 23 Nov 2026, as the maths check found), 14 scene headings, about 518 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: twenty-seventh video of Year 11 Mathematics Advanced (2024), outline order 27, Working with functions. Pre-design pack: `../pre-design/maths-a11/math-a11-w27.md` (brief 243). Site lesson (read through the pack's quotations, read only): `working-with-functions/lesson06.sa.html` (Composite Functions, SHA256 `d7e4743ab43926b4b4e9d08b557f3902ace9edcce0230192788e2468d87481db`; `we-comp-1`, `we-comp-2`, `we-comp-3` used with the site's numbers unchanged). Its logged copy error S11-07 (the tax example and "order always matters") is not taught (Decisions). Route entry: `math-a11-w27` in `../../programme/maths-a11-route-inputs-2.json`. Visual system: maths studio kit; painted plates for the sneakers and coupon, the reused price tag (prefix `ma11-`); machines, conveyors, number lines and algebra coded.

Owner rules applied: as w24 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, an everyday anchor (money and shopping), Australian spelling, no em dashes, conversational narration).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Working with functions, Properties of functions, relations and graphs; NESA codenames, official `code` field empty), quoted from `../../programme/maths-a11-route-inputs-2.json`:

- `ci51d03f31`: "Use the composite function f(g(x)), where the output of g(x) becomes the input of f(x)"
- `ci82a0c261`: "Determine the equations of composite functions"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

**Boundary:** starts from w26's handoff frame (the sneakers with a "$120" price tag, two machine rows "20% off" then "$10 off" and the swapped order, two "$?" output tags, "Next: one function's output becomes another's input"). Teaches: a composite as one function applied to another's output, written f(g(x)) and read inside out (`ci51d03f31`); the sale-and-coupon composites c(s(p)) = 0.8p − 10 and s(c(p)) = 0.8p − 8 and why they differ by $2; numerical composites (site `we-comp-1`); composite equations with brackets (site `we-comp-2`, `ci82a0c261`); order usually matters, with one case where it does not (S11-07 corrected); the domain of a composite (site `we-comp-3`; A2 needs the quadratic inequality from w18). Stops at composites of two functions. Not taught: inverse functions (not Year 11 Advanced; "the second machine undoes the first" is said once, without the word inverse); decomposing a given function into a composite; piecewise rules (w28).

## Decisions

### Revision 1 (16 Nov 2026)

- **Anchor: a pair of sneakers with a 20% off sale and a $10 coupon (painted plates, live).** The two discounts are two functions of the price, s(p) = 0.8p and c(p) = p − 10, and a till must apply one to the other's output. Sale first: c(s(120)) = 96 − 10 = $86. Coupon first: s(c(120)) = 0.8 × 110 = $88. The $2 gap is 20 per cent of the coupon, and it is the same at every price, which the price slider shows. This is the corrected form of the site's own claim (S11-07): a percentage tax with doubling gives no order effect, but a percentage with a fixed amount does. Money and shopping. No Year 12 Maths design and no w01 to w14 design uses sneakers, a sale or a coupon (grep, 16 Nov; the reused swing tag is plate reuse, as w12, f10 and f11). The pack's GST voucher was rejected because Australian shelf prices already include GST, so "add GST at the till" would teach a false shopping fact; its travel-money fee is a close cousin of w06's travel card; its phone-game bonus is a phones context.
- **Simulations (standard item 3).**
  1. **`MachineChain`** (scenes 1 to 3, new part on w08's `FunctionMachine`): two machines on a conveyor, the inner one amber and the outer one violet. A blue price card drops into the first; its teal output card slides along the conveyor and **turns blue as it enters the second machine** (an output becoming an input); the final card comes out teal. A "swap" control exchanges the machines. All cards are computed from the rules.
  2. **The price slider** (scene 3; `ParameterSlider` and `LiveReadoutBoard`): price p sweeps $50 to $200; both chains run live, their outputs "sale first" and "coupon first" update, and a readout "difference" stays at $2.00; on a small plot the two lines 0.8p − 10 and 0.8p − 8 stay 2 apart.
  3. **The domain gate** (scene 7; `MachineChain` with a `refuse` slot and w06's `NumberLineRay`): inputs 2, 4, 5, 7 and 9 run through g(x) = x − 5 into a √ machine; outputs −3 and −1 are stopped at the √ machine's door (red flash, "can't take a negative"), 0, 2 and 4 pass; a number line shades [5, ∞) as the passes collect.
- **Colour roles (fixed for the whole video).** The input x or p **blue**; outputs **teal** (root ruling 12), with the middle value teal leaving the inner machine and blue entering the outer one; the **inner function g (and the sale s, applied first) amber**; the **outer function f (and the coupon c) violet**, in the first order shown; when the order swaps, the colours follow the role (inner amber, outer violet), and the labels move; answer **green**; mistake **red**, crossed slips only.
- **Large type, handwritten voice.** As w24. Hand tags: "output → input", "inside first", "closest to x", "brackets!", "the whole of g(x)", "+$2 every time", "undoes", "check, don't assume", "the √ needs g(x) ≥ 0", "both sides".
- **Stage changes (standard item 2).** The sneakers and two tills (1); the machine chain and notation (2); the equations and price slider (3); three g01 boards (4, 5, 7) with the short order board (6); the framed card (8); question cards (9 to 12); the e-bike handoff (13); key notes (14).
- **Worked examples (g01 layout).** 4: site `we-comp-1` (crossed "f(2) = 5 first, so f(g(2)) = 22"). 5: site `we-comp-2` (crossed "3x + 4 − 2"). 7: site `we-comp-3` (crossed "domain x ≥ 0"). Scene 6 is a short board, not a full g01 example.
- **Notation.** f(g(x)) throughout, as the syllabus writes it. A single grey tag in scene 2 says "also written (f ∘ g)(x)", because the site and many textbooks use it.
- **Memory aid.** Framed card: "Closest to x goes first." Key: "f(g(x)): g first, then f. Put all of g(x), in brackets, into f." Badge: the two machines on the conveyor.
- **Visual surprise.** On the conveyor the teal output card turns blue as it enters the next machine, so "an output becomes an input" is seen; and on the price slider the two tills' prices move together and the $2 gap never changes.
- **Site correction applied (`../site-corrections-maths-a11.md`).** S11-07: the tax-and-doubling example is not used; the anchor is the corrected kind (a percentage with a fixed amount). "Order always matters" is replaced by "usually, but not always" (scene 6), with the case f(x) = x + 2, g(x) = x − 2 described as "the second machine undoes the first" (no inverse functions, pack note).
- **Plain meanings at first use.** Composite function ("one function applied to the output of another"); inner and outer function ("the one that acts first, and the one that acts second"); domain of a composite ("the inputs that make it through both machines").
- **Attempts (pack questions, original).** A1: f(x) = x² + 1, g(x) = 3x − 2: f(g(x)) = 9x² − 12x + 5, g(f(x)) = 3x² + 1, f(g(1)) = 2; crossed "(3x − 2)² = 9x² + 4". A2: f(x) = √x, g(x) = 4 − x²: f(g(x)) = √(4 − x²), domain [−2, 2]; crossed "x ≤ 2".
- **Mistake scene:** none separate. The outer function first (4 crossed); dropped brackets (5 crossed); "order always matters" (6); only the outer domain checked (7 crossed); the middle term lost in squaring (A1 crossed); half the domain from x² ≤ 4 (A2 crossed).
- **Cause chain taught, in order:** (1) a till applies one discount to the price the other left, so one function's output is the next one's input (1, 2); (2) in f(g(x)) the function next to x acts first, so we work inside out (2, 4); (3) substituting the whole inner rule, in brackets, gives the composite's equation (3, 5); (4) a percentage applied after a fixed amount also shrinks that amount, so the order changes the result, though some pairs give the same result either way (3, 6); (5) the outer function can only accept what the inner one outputs, so the composite's domain can be smaller than the inner function's (7).
- **Entry knowledge (route):** w08 (evaluating f at an expression, with brackets; `FunctionMachine`); w09 (domain and natural domain); w18 (quadratic inequalities, for A2); w25 (the upper semicircle, recalled in feedback 2).
- **Handoff (to w28, "How do we read and graph a function defined in pieces?").** Scene 13: a share e-bike (`ma11-share-ebike-v1.png`) parked at the left; the reused phone (`maths/ma12-phone-v1.png`) at the right with a coded ride screen: "unlock $3 (includes 20 min)", "then 50c per minute", and "12 min: $?", "32 min: $?"; chips "Next: a function defined in pieces" and "?". This is w28's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) s(p) = 0.8p; c(p) = p − 10. c(s(p)) = 0.8p − 10; s(c(p)) = 0.8p − 8; s(c(p)) − c(s(p)) = 2 for all p. At p = 120: 86 and 88; at 50: 30 and 32; at 200: 150 and 152. The model assumes the coupon applies at any price over $10 (the slider starts at $50).
  (b) The store's terms decide the order in real life; the video says "one till", "another till", not which is correct.
  (c) √(4 − x²) is the upper semicircle of radius 2 (w25); its domain [−2, 2] from 4 − x² ≥ 0 (w18).
  (d) Pronunciations: "zero point eight p"; "c of s of p"; "f of g of x"; "nine x squared minus twelve x plus five".
  (e) Windows: price plot p 0 to 220, price paid 0 to 200; scene 7 number line 0 to 10.

Main question: *A sale and a coupon on $120 sneakers: one order charges $86 and the other $88. What happens when one function's output becomes another's input?*
Entry knowledge (w08, w09, w18): evaluating f at an expression with brackets; domain; quadratic inequalities.
Stops after: f(g(x)) read inside out, numerical composites, composite equations, order usually mattering, and the domain of a composite. No inverses.
Handoff: math-a11-w28: "an e-bike's price: $3 for the first 20 minutes, then 50c a minute: one rule?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): input blue; outputs teal (the middle value turns blue entering the outer machine); inner function amber; outer function violet; answer green; mistake red, crossed slips only. Header strip "MATHEMATICS ADVANCED · WORKING WITH FUNCTIONS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: same discounts, different price
> Here's a pair of sneakers at a hundred and twenty dollars. The store's running a twenty per cent off sale, and you've got a ten dollar coupon. One till takes twenty per cent off first, which gives ninety-six dollars, then uses the coupon, so you pay eighty-**six**. Another till uses the coupon first, which gives a hundred and ten, then takes twenty per cent off, so you pay eighty-**eight**. Same two discounts, but a two dollar difference. Each discount is a function of the price, and each till feeds one function's output into the other. So what happens when one function's output becomes another's input?

Visual: opens on w26's final frame exactly (the sneakers `ma11-sneakers-v1.png`, the price tag reading "$120", two machine rows, "$?" tags, "Next: one function's output becomes another's input"). On the first sentence the "Next" chip fades; heading "Same discounts, different price?". The coupon plate (`ma11-coupon-v1.png`, coded text "$10 off") slides in beside the tag. Top row runs (`MachineChain`): the blue "$120" card drops into the amber "20% off" machine, a teal "$96" card slides out along the conveyor, turns blue at the violet "$10 off" machine; on "six" the teal "$86" card lands in the row's "$?" tag. Bottom row (machines swapped, colours following the roles): "$120" into "$10 off" gives "$110", into "20% off"; on "eight" "$88". On "two dollar difference" a red-pencil bracket joins $86 and $88, "+$2". The chip "Output → input?" moves to the top right.

### 2. a composite function
> Let's name the two rules. The sale is s of p equals zero point eight p, because you pay eighty per cent of the price. The coupon is c of p equals p minus ten. The first till does the sale, then the coupon. The sale's output, ninety-six, goes straight into the coupon as its **input**. We write that as c of s of p. It's called a composite function, one function applied to the output of another. Read it from the inside out. s is closest to p, so it acts **first**. In general, f of g of x means the output of g becomes the input of f. g is the inner function, and f is the outer **one**.

Visual: camera continue; the top row's chain grows to fill the middle (machines 420 × 300 px each), the sneakers and tag shrink to a 300 px badge at the top left. Rule boxes write into the machines: "s(p) = 0.8p" (amber machine) and "c(p) = p − 10" (violet machine), 44 px. On "input" the "$96" card slides along again and visibly turns from teal to blue at the second machine's slot, hand tag "output → input". Below, the notation builds, 64 px: "c(s(p))", with "s(p)" boxed amber inside the violet "c( )"; on "first" an arrow from p to s, then s to c, labelled "1st", "2nd", hand tag "inside first". On "In general" the general strip writes, 52 px: "f(g(x)): the output of g becomes the input of f", with g amber and f violet; on "one" labels "inner g" (amber) and "outer f" (violet), and a grey tag "also written (f ∘ g)(x)".

### 3. the composite's equations
> We can find the whole rule at once. c of s of p means put s of p, zero point eight p, into the coupon. So it's zero point eight p, minus **ten**. The other till is s of c of p. Put c of p, p minus ten, into the sale, in brackets. That's zero point eight times, p minus ten, which is zero point eight p minus **eight**. Now slide the price. Whatever it is, the second till charges two dollars more, because when the coupon goes first, the sale also takes twenty per cent off the coupon. Twenty per cent of ten dollars is two **dollars**. So here, the order changes the answer.

Visual: stage change to two equation rows at the top (52 px): "c(s(p)) = c(0.8p) = 0.8p − 10" (on "ten") and "s(c(p)) = s(p − 10) = 0.8(p − 10) = 0.8p − 8" (on "eight"), the bracketed "(p − 10)" in amber with the hand tag "brackets!". Below, the price slider (900 px, blue, $50 to $200) with both machine chains running small above it and a `LiveReadoutBoard` at the right (52 px): "sale first", "coupon first", "difference". On "Now slide the price" the slider sweeps 50 → 200 → 120; the readouts update ($30 and $32, ..., $150 and $152) and "difference $2.00" never changes, hand tag "+$2 every time". A small plot beside it draws the two parallel lines 0.8p − 10 (violet) and 0.8p − 8 (amber), 2 apart. On "dollars" the row "0.8 × 10 = 8, not 10: the sale shrinks the coupon to $8" (44 px).

### 4. worked example 1: evaluating inside out
> Let's practise. If f of x equals two x plus one, and g of x equals x squared minus three, find f of g of two, and g of f of two. For f of g of two, start inside. g of two is four minus three, which is **one**. Then f of one is two plus one, which is **three**. For g of f of two, the inner one is f. f of two is **five**, and g of five is twenty-five minus three, which is twenty-**two**. Three and twenty-two, different answers, because the order changed. Working out f first, for f of g of two, is the slip. The inside function always goes **first**.

Visual: clear change to the g01 board (site `we-comp-1`). Task strip, 44 px: "If f(x) = 2x + 1 and g(x) = x² − 3, find f(g(2)) and g(f(2))." Givens card: "f(x) = 2x + 1" (violet), "g(x) = x² − 3" (amber). A compact `MachineChain` at the top right (amber g, then violet f). Rows, 52 px: "f(g(2))"; on "one" "g(2) = 2² − 3 = 1" (the blue 2 enters g, teal 1 exits and turns blue at f); on "three" "f(1) = 2(1) + 1 = 3" (green frame). The chain swaps (violet f now first, amber g second; each function keeps its colour): on "five" "f(2) = 5"; on "two" "g(5) = 25 − 3 = 22" (green frame). Framed answer (green): "f(g(2)) = 3, g(f(2)) = 22". On "first" a red slip "f(2) = 5 first, so f(g(2)) = 22" writes and is crossed, caption "inside first: g(2)".

### 5. worked example 2: the equation of a composite
> Now find the equations. f of x equals three x minus two, and g of x equals x plus four. Find f of g of x, and g of f of x. f of g of x means f of, x plus four. Put x plus four in place of x, in brackets. That's three times, x plus four, minus two, which is three x plus twelve minus two, so three x plus **ten**. g of f of x is g of, three x minus two. That's three x minus two, plus four, which is three x plus **two**. Different again. Dropping the brackets, and writing three x plus four minus two, is the slip. The whole of g of x goes **in**.

Visual: clear change to the g01 board (site `we-comp-2`). Task strip: "If f(x) = 3x − 2 and g(x) = x + 4, find f(g(x)) and g(f(x))." Givens card: "f(x) = 3x − 2" (violet), "g(x) = x + 4" (amber). Rows, 52 px: "f(g(x)) = f(x + 4)", with "(x + 4)" an amber card dropping into the x slot of "3( ) − 2"; "= 3(x + 4) − 2", hand tag "brackets!"; on "ten" "= 3x + 12 − 2 = 3x + 10" (green frame). "g(f(x)) = g(3x − 2) = (3x − 2) + 4"; on "two" "= 3x + 2" (green frame). Framed answer (green): "f(g(x)) = 3x + 10; g(f(x)) = 3x + 2". On "in" a red slip "f(g(x)) = 3x + 4 − 2 = 3x + 2" writes and is crossed, caption "the whole of g(x)".

### 6. does the order always matter?
> So does the order always matter? Usually, but not always. Take f of x equals x plus two, and g of x equals x minus two. f of g of x is x minus two, plus two, which is just x. And g of f of x is x plus two, minus two, also **x**. Here the second machine undoes the first, so both orders give the same thing. Doubling then tripling is another, six x either way. Pairs like these are unusual. Check, rather than **assume**.

Visual: clear change to a short board: two `MachineChain` rows, "−2 then +2" and "+2 then −2", a blue "7" card running through each and coming out "7" both times; rows (52 px): "f(g(x)) = (x − 2) + 2 = x", on "x" "g(f(x)) = (x + 2) − 2 = x", hand tag "undoes"; on "Doubling then tripling" a third small row "3(2x) = 2(3x) = 6x" (44 px). On "assume" a stamp-style chip "order usually matters" (violet), hand tag "check, don't assume".

### 7. worked example 3: the domain of a composite
> A composite can also limit which inputs are allowed. Find the domain of f of g of x, where f of x is the square root of x, and g of x is x minus five. The composite is the square root of x minus **five**. g accepts every x. But its output goes into a square root, and the square root needs an input of zero or more. Try x equals four. g gives minus one, and minus one has no real square root. So x minus five must be at least zero, which means x is at least **five**. The domain is five to infinity, closed at five. Inputs below five get through g, but they're stopped at the square root's **door**. Checking only that x is at least zero is the slip. It's g of x that the root needs to be zero or **more**.

Visual: clear change to the g01 board (site `we-comp-3`). Task strip: "Find the domain of f(g(x)) where f(x) = √x and g(x) = x − 5." Givens card: "f(x) = √x" (violet), "g(x) = x − 5" (amber). On "five" (first) the row "f(g(x)) = √(x − 5)" (52 px). Rows: "g: every real x" (grey), "√ needs g(x) ≥ 0", hand tag "the √ needs g(x) ≥ 0"; on "Try x equals four" a grey row "x = 4: g(4) = −1, √(−1) not real" (44 px); on "five" (second) "x − 5 ≥ 0 ⇒ x ≥ 5". Framed answer (green): "domain [5, ∞)". On "door" the domain gate runs (simulation 3): blue cards 2, 4, 5, 7, 9 enter the amber "x − 5" machine; −3 and −1 bounce at the violet √ machine's door (red flash, "can't take a negative"); 0, 2, 4 pass; a number line below shades from a closed dot at 5 to the right with an arrow. On "more" a red slip "domain: x ≥ 0" writes and is crossed, caption "g(x) ≥ 0, not x ≥ 0".

### 8. memory aid
> Here's the order in one line. Closest to x goes first. In f of g of x, g touches the x, so g acts first, and its output feeds **f**. And f of g of x isn't f times g. Nothing is multiplied. One machine feeds the **next**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the two-machine conveyor badge (amber then violet). Main line, hand font 60 px: "Closest to x goes first." On "f" the key line, 40 px: "f(g(x)): g first, then f. Put all of g(x), in brackets, into f." On "next" a small red-crossed "f(g(x)) ≠ f(x) × g(x)" writes under the key line (32 px), the conveyor badge running once. Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. Let f of x equal x squared plus one, and g of x equal three x minus two. Find f of g of x and g of f of x in expanded form, and evaluate f of g of one. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Let f(x) = x² + 1 and g(x) = 3x − 2. Find f(g(x)) and g(f(x)) in expanded form, and evaluate f(g(1))." The full question stays on screen. Picture slot: an empty two-machine conveyor with blank rule boxes. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> f of g of x is three x minus two, all squared, plus one. That's nine x squared minus twelve x plus four, plus one, so nine x squared minus twelve x plus **five**. g of f of x is three times, x squared plus one, minus two, which is three x squared plus **one**. And f of g of one is f of one, which is **two**. Squaring three x minus two as nine x squared plus four loses the middle term. It's minus twelve x **too**.

Visual: the card shrinks to the top (30 px). Rows, 52 px: "f(g(x)) = (3x − 2)² + 1"; on "five" "= 9x² − 12x + 4 + 1 = 9x² − 12x + 5". On "one" "g(f(x)) = 3(x² + 1) − 2 = 3x² + 1". On "two" "g(1) = 1, f(1) = 2" and the picture's conveyor runs a blue 1 through to a teal 2. Framed answer (green): "9x² − 12x + 5; 3x² + 1; f(g(1)) = 2". On "too" a red slip "(3x − 2)² = 9x² + 4" writes and is crossed, caption "−12x in the middle". Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. Let f of x equal the square root of x, and g of x equal four minus x squared. Find f of g of x, and state its domain. Pause here to answer.

Visual: `QuestionCard`, 40 px: "Let f(x) = √x and g(x) = 4 − x². Find f(g(x)) and state its domain." Picture slot: an empty number line from −4 to 4. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 12. feedback 2 (brief)
> f of g of x is the square root of four minus x squared. The root needs four minus x squared to be at least zero, so x squared is at most **four**. That means x is between minus two and two, so the domain is minus two to two, closed at both **ends**. Writing x is at most two misses the left side. x squared is at most four for minus two as **well**. And that graph is the upper semicircle of radius two.

Visual: the card shrinks to the top. Rows, 52 px: "f(g(x)) = √(4 − x²)"; "4 − x² ≥ 0"; on "four" "x² ≤ 4". On "ends" "−2 ≤ x ≤ 2" and the number line shades between closed dots at −2 and 2; framed answer (green): "√(4 − x²), domain [−2, 2]". On "well" a red slip "x ≤ 2" writes and is crossed, caption "both sides: −2 ≤ x ≤ 2". On "upper semicircle" a small amber semicircle of radius 2 draws above the number line (w25 callback). Hold about 1 s.

### 13. handoff
> So far, every function has used one rule for every input. Some can't. Here's a share e-bike. Three dollars unlocks it and covers your first twenty minutes. After that, it's fifty cents a minute. For short rides the price stays flat, and after twenty minutes it climbs. One rule can't describe that. It's a function defined in **pieces**.

Visual: the memory line shows small at the top (30 px), then fades. Board: the e-bike plate (`ma11-share-ebike-v1.png`, about 900 px wide) at the left; the phone plate (`maths/ma12-phone-v1.png`, 520 px tall) at the right with a coded ride screen (36 px): "Unlock $3 (includes 20 min)", "Then 50c per minute", "12 min: $?", "32 min: $?". On "pieces" chips "Next: a function defined in pieces" and "?". Hold about 2 s. This is w28's opening frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- f(g(x)): the output of g becomes the input of f.
- Work inside out: g first, then f.
- Put the whole of g(x), in brackets, into f.
- Order usually matters: f(g(x)) and g(f(x)) can differ.
- Domain of f(g(x)): x allowed in g, and g(x) allowed in f.

Memory aid (framed card, right side, as in scene 8): *Closest to x goes first.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 13's frame exactly. This is the final frame and w28's opening frame.

## Teaching checks

- **Does it explain causes?** Why the tills differ: the second discount acts on what the first left (1, 3). Why inside out: the function next to x receives x first (2, 4). Why brackets: the whole inner output is the outer function's input (5). Why the gap is always $2: a sale applied after the coupon shrinks the coupon by 20 per cent (3). Why the order sometimes does not matter: the second machine undoes the first (6). Why the domain shrinks: the outer function only accepts what its rule allows, and the inner function's output must meet that (7).
- **Misconceptions addressed:** the outer function first (4 crossed); dropped brackets (5 crossed); "order always matters" and "order never matters" (6); only checking x ≥ 0 (7 crossed); a lost middle term (A1 crossed); half a domain from x² ≤ 4 (A2 crossed); f(g(x)) as a product (2, the machine picture shows feeding, not multiplying).
- **Visual standard, item by item:** 1 the painted sneakers, tag and coupon from the first frame, returning as badges in 2, 3 and 8; 2 a new stage every 35 to 55 s; 3 `MachineChain` with the output card turning into an input, the price slider with the constant $2, the domain gate; 4 fixed colour roles; 5 large type; 6 hand tags; 7 g01 boards in 4, 5 and 7; 8 framed card and five bullets; 9 the teal card turning blue at the second machine, and the gap that never changes.
- **One idea at a time:** the anchor (1), notation (2), equations (3), numbers (4), algebra (5), order (6), domain (7).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 28 s and 27 s.
- **Avoided double teaching:** substitution with brackets (w08), domain (w09), the quadratic inequality (w18) and the semicircle (w25) are recalled.
- **Syllabus coverage:** `ci51d03f31` (1, 2, 4, 6, 7, A1, A2; key notes 1, 2, 4, 5); `ci82a0c261` (3, 5, A1, A2; key note 3).
- **Out of scope by design:** inverse functions; piecewise functions (w28).

## Practice questions and model answers

**Attempt 1 (scene 9; pack question 1, original, HSC style, 3 marks suggested, not an official marking scheme).** "Let f(x) = x² + 1 and g(x) = 3x − 2. Find f(g(x)) and g(f(x)) in expanded form, and evaluate f(g(1))."
Model answer: f(g(x)) = (3x − 2)² + 1 = 9x² − 12x + 5. g(f(x)) = 3(x² + 1) − 2 = 3x² + 1. g(1) = 1, so f(g(1)) = f(1) = 2. Classic mistake (crossed): "(3x − 2)² = 9x² + 4".

**Attempt 2 (scene 11; pack question 2, original, HSC style, 2 marks suggested).** "Let f(x) = √x and g(x) = 4 − x². Find f(g(x)) and state its domain."
Model answer: f(g(x)) = √(4 − x²). Need 4 − x² ≥ 0, so x² ≤ 4 and −2 ≤ x ≤ 2: domain [−2, 2]. Classic mistake (crossed): "x ≤ 2".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Anchor | s(p) = 0.8p, c(p) = p − 10; p = 120: 96 → 86; 110 → 88; gap 2 | 1, 2, 3 |
| Equations | c(s(p)) = 0.8p − 10; s(c(p)) = 0.8p − 8; slider: 50: 30, 32; 200: 150, 152; 0.8 × 10 = 8 | 3 |
| Site `we-comp-1` | g(2) = 1, f(1) = 3; f(2) = 5, g(5) = 22 | 4 |
| Site `we-comp-2` | f(g(x)) = 3x + 10; g(f(x)) = 3x + 2; crossed 3x + 4 − 2 | 5 |
| Order | x + 2, x − 2: both orders give x; card 7 → 7; 3(2x) = 2(3x) = 6x | 6 |
| Site `we-comp-3` | √(x − 5); x ≥ 5; [5, ∞); x = 4: g(4) = −1, not allowed; gate inputs 2, 4, 5, 7, 9 give −3, −1, 0, 2, 4 | 7 |
| A1 | 9x² − 12x + 5; 3x² + 1; f(g(1)) = 2 | 9, 10 |
| A2 | √(4 − x²); [−2, 2] | 11, 12 |
| Handoff | $3 for 20 min, then 50c a minute (answered in w28) | 13 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (16 Nov 2026, scratchpad `w24w31/verify.py`); Codex to re-check.

- c(s(p)) = 4p/5 − 10; s(c(p)) = 4p/5 − 8; difference 2. At 120: 86, 88; at 50: 30, 32; at 80: 54, 56; at 200: 150, 152.
- we-comp-1: g(2) = 1, f(g(2)) = 3; f(2) = 5, g(f(2)) = 22.
- we-comp-2: 3x + 10; 3x + 2.
- (x − 2) + 2 = x; (x + 2) − 2 = x; 3(2x) = 2(3x) = 6x.
- √(x − 5): x ≥ 5.
- A1: 9x² − 12x + 5; 3x² + 1; g(1) = 1, f(1) = 2.
- A2: 4 − x² ≥ 0 ⟺ −2 ≤ x ≤ 2.

## Memory aid check

- **"Closest to x goes first."** Original. Meaning, as said in scene 8: in f(g(x)) the function written next to x, g, acts first, and its output is f's input. Assumptions checked: holds for any nesting depth (h(f(g(x))): g, then f, then h), though only two functions are used here. It helps a new case: g(f(2)) runs f first. Introduced after scenes 2 and 4.
- **Considered, not used:** "Read it right to left" (true for the letters, but students then misread f(g(2)) as "2 first, then f").

## Narration length estimate

Counted by script with the build parser rules: **5,654 characters** (recounted 23 Nov 2026; the earlier figure 5,664 overstated scenes 2 and 3), 14 scene headings. Characters per scene (1 to 14): 602, 576, 563, 532, 535, 412, 690, 212, 184, 400, 149, 391, 333, 75.

At 13.3 characters per second the speech before the notes is about 420 s. Holds and settling: 2 countdowns of 10 s (20 s); short holds (memory card 2 s, feedback 1 s each, handoff 2 s) 6 s; about 27 s of settling (the two machine chains, the price slider's sweep, the order board and the domain gate); the notes scene is 45 s. Total **about 518 s (8 min 38 s)**, inside the 5,500 to 6,800 band and about 52 s under the 570 s cap.

Reserve trims if the voiced take runs long: scene 6's "Doubling then tripling is another, six x either way." (keep the row); scene 12's last sentence (keep the semicircle sketch).

## Scene list and build ids

Lesson key `m-a11w27` (route math-a11-w27). Explainer folder `src/explainer/lessons/math-a11-w27`; build inputs in `docs/production/claude-pm/lessons/math-a11-w27/` (at voicing).

In order (14 scene headings): hook-two-tills, composite-defined, composite-equations, worked-evaluate, worked-equations, order-matters, worked-domain, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (seconds from the estimate):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 50 s | 1 | w26's frame; the sneakers and two tills |
| 50 to 98 s | 2 | MachineChain: an output turning into an input; f(g(x)) |
| 98 to 147 s | 3 | Composite equations and the price slider |
| 147 to 231 s | 4 to 5 | Two g01 boards: numbers, then equations |
| 231 to 265 s | 6 | Order: usually, not always |
| 265 to 322 s | 7 | g01 board and the domain gate |
| 322 to 340 s | 8 | Framed memory card |
| 340 to 446 s | 9 to 12 | Question cards and countdowns, then feedback |
| 446 to 473 s | 13 | The share e-bike and its ride screen |
| 473 to 518 s | 14 | Key notes with the framed card, then a silent return to scene 13's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: w26's last frame continues into 1; 1 to 2 camera continue (the chain grows); 2 to 3 stage change (equations and slider); 3 to 4, 4 to 5, 5 to 6, 6 to 7 clear change; 7 to 8 camera pull back to the card; attempts and feedback: the card shrinks to the top; 12 to 13 board clear; 13 to 14 fade, then a silent return to scene 13's frame.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11-w27-learning-review.md`, `science_check` = `checks/m-a11-w27-maths-check.md`.

## Assets

Inspected before choosing (16 Nov 2026, `public/assets`, read only): `maths/ma12-swing-tag-v1.png` (viewed: a blank cream card tag with a string loop and four ruled lines; coded text can sit on the lines) is reused for the price; `maths/ma12-phone-v1.png` (viewed: a plain phone, blank dark screen) is reused for the handoff's ride screen. No shoe or coupon plate in `maths`; `biology/m8-walking-shoes-v1.png` is a health-unit plate with its own meaning, not reused.

Need (painted, new; see the Codex asset brief): `ma11-sneakers-v1.png` (also needed for w26's final frame) and `ma11-coupon-v1.png`. The handoff uses w28's `ma11-share-ebike-v1.png`. Reused: `maths/ma12-swing-tag-v1.png`, `maths/ma12-phone-v1.png`.

Coded: the tag's price text, the coupon's "$10 off", machines, conveyors, cards, the slider and readouts, the small plot, the gate and number lines, working boards, cards, countdown, hand tags, key notes, the ride screen.

### Studio kit use and additions

Uses: `MATH_ROLES`, `Role`, `HandTag`, `PlateImg`, `FunctionMachine` (w08), `NumberLineRay` (w06), `ParameterSlider`, `LiveReadoutBoard`, `StudioPlot`, the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`, `GivensStrip`.

Additions:
1. **`MachineChain`** (new, on `FunctionMachine`): two machines on a conveyor; an input card passes through the first, its output card slides along and changes from the output colour to the input colour at the second machine's slot; a `swap` that exchanges the machines (colours follow the inner and outer roles); a `refuse` rule on the second machine (a card bounces with a red flash and a label). Props: `inner` and `outer` ({rule, ruleFn, role}), `inputs`, `swapAt`, `refuse`. Check: every card is computed by `ruleFn`; refused cards are exactly those outside the outer function's domain.

## Codex asset brief (Maths A11 W27, sneakers and a coupon; also w26's final frame)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-w27.md`, route entry math-a11-w27. Paint after the learning review and maths check pass and root gives the go-ahead, and before the w26 build (w26's final frame shows the sneakers). Save to `public/assets/maths/`. Transparent PNG with a true alpha channel, clean edges; ink and watercolour in the house style, matched to `maths/ma12-swing-tag-v1.png`; no text, numbers, prices, logos, brand marks or stripes that read as a brand, people, feet, hands, faces, glow or shadow. Never stretch.

1. `ma11-sneakers-v1.png` (1800 × 1000 px): a pair of plain everyday sneakers, side by side, seen from the side at a slight angle; white uppers with one plain colour accent (teal) on the heel and laces, gum soles; no swoosh, stripes or logos; laces tied. A short loop of string at one shoe's lace eyelet where the code hangs the reused swing tag (sidecar point).
2. `ma11-coupon-v1.png` (1200 × 600 px): a plain paper coupon with a dashed cut-line border and one scissor-free torn edge on the right, cream paper with a soft violet band across its left third; **blank**, so code writes "$10 off" on it (sidecar text box).

Sidecar JSON: `ma11-sneakers-v1.json` (the tag's string point), `ma11-coupon-v1.json` (the text box, four corners). Report inspection on the paper background (`#f6f1e7`) at 300 px and 560 px wide and the alpha checks. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-w27-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the two syllabus quotes match the route-inputs JSON exactly, and no site module label appears.
3. Confirm S11-07 is applied: no percentage-and-doubling example, and no learner copy says "order always matters"; scene 6 does not use the word "inverse".
4. Confirm site `we-comp-1` to `we-comp-3` keep their numbers and answers.
5. Confirm the colour roles: the middle value turns from the output colour to the input colour at the second machine; inner amber and outer violet follow the roles when the order swaps.
6. Confirm both attempts carry every demand and neither card nor picture shows an answer.
7. Confirm no em dash (U+2014), Australian spelling, the narration counts by script, and every bold cue quoted in its scene's Visual in spoken order.
8. Confirm scene 1 opens on w26's final frame and scene 13's frame matches w28's opening frame.

## YouTube metadata (draft)

Title: Composite Functions: When an Output Becomes an Input | Year 11 Maths Advanced

(Title length: 77 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/working-with-functions/lesson06.sa.html

A 20% off sale and a $10 coupon on $120 sneakers: one order charges $86, the other $88. Each discount is a function, and each till feeds one function's output into the other. Learn to read f(g(x)) from the inside out, find composite functions' equations with brackets, see why the order usually matters (and when it doesn't), and find the domain of a composite like √(x − 5). Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions. Prices are a maths model, not shopping advice.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Working with functions.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Use the composite function f(g(x)), where the output of g(x) becomes the input of f(x)"
"Determine the equations of composite functions"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

Builds on: Function notation; domain and range; quadratic inequalities. Next: Piecewise functions.

#Year11Maths #MathsAdvanced #CompositeFunctions #HSCScience

## Open decisions

- **1. Rejecting the pack's GST voucher (root).** The pack and S11-07 propose "take $10 off then add 10% GST". Australian shelf prices include GST, so this design uses a 20% sale instead (same structure, true to shopping). Root may want the site correction S11-07 reworded the same way.
- **2. "Zero point eight" (voice pilot).** Matches the w10 course choice "zero point five". If root prefers "zero point eight", it is a narration-only change.
- **3. A2 needs w18 (route).** The domain of √(4 − x²) needs a quadratic inequality (w18, listed in the route's entry knowledge). If w18 moves after w27 in the playlist, A2's domain becomes "where is 4 − x² ≥ 0?" read from the parabola instead.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from w08 and w09; check that the colour change at the conveyor makes "output becomes input" visible; that "closest to x goes first" is heard before any symbol-only example; that the $2 reason (20 per cent of the coupon) is clear; that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
- The machine chain and the slider carry the explanation; judge them at playback speed. Every card and readout must be computed.
