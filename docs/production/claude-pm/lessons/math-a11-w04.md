# Maths A11 W04: Which method solves a given quadratic most efficiently? Factorising and the null factor law, completing the square on tiles, the quadratic formula as completing the square done once, and choosing a method (design)

Status: Revision 1 (16 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`, d01 Revision 6 and s01 Revision 4 patterns). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,563 characters by script (build parser rules), 14 scene headings, about 496 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: fourth video of Year 11 Mathematics Advanced (2024), outline order 4, Working with functions, Algebraic techniques. Pre-design pack: `../pre-design/maths-a11/math-a11-w04.md`. Site lesson (read through the pack, read only): `algebraic-techniques-and-inequalities/lesson09.sa.html` (Solving Quadratic Equations), SHA256 `5b0c31212be6ff21324709e655a625ae5c60f5068bc724b50563966789a63eb5`. Site we-2 and we-3 are used with the site's numbers unchanged; site we-1 (x² − 5x + 6 = 0) is replaced in the teaching by the anchor's x² + 2x − 15 = 0, which teaches the same method and the null-factor trap (Decisions). Route entry: `math-a11-w04`. Visual system: maths studio kit; painted rug plate (prefix `ma11-`); tiles, the sizing simulation, algebra and the method chooser coded.

Owner rules applied: as w01 to w03.

Syllabus content point (Mathematics Advanced 11-12 (2024), Year 11, Working with functions, Algebraic techniques; NESA codename, official `code` field empty), quoted from `../../programme/syllabus/maths-advanced-2024-y11-crosswalk.json`:

- `cia7d436df`: "Solve quadratic equations ax^2 + bx + c = 0 by factorisation, completing the square and using the quadratic formula x = (-b ± √(b^2 - 4ac))/(2a) where a, b and c are real numbers and a ≠ 0"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

**Boundary:** starts from w03's handoff frame (the rug, x(x + 2) = 10, "x = −1 + √11 ?"). Teaches: a quadratic equation and why guessing fails (sizing simulation); factorising with zero on one side and the null factor law (rug of 15 m²); completing the square on tiles (rug of 10 m²) and without tiles (site we-2); the quadratic formula derived by completing the square on ax² + bx + c = 0; using the formula with signed coefficients (site we-3); choosing a method. Stops at solving. Not taught: the discriminant and the number of roots (w05, previewed only in the handoff); vertex form and graphs of parabolas (w14, w15); quadratic inequalities (w18); equations reducible to quadratics.

## Decisions

### Revision 1 (16 Nov 2026)

- **Anchor: a rectangular rug, 2 m longer than it is wide (painted plate, live).** Chosen over the pack's phone case (phones are d03, i03, t04 and f14's contexts), the photo border (its quadratic needs expanding a frame, which hides the square) and ticket pricing (money is w05's context in this batch). One rug gives the whole lesson: area 15 m² factorises (x = 3), area 10 m² does not (x = −1 + √11), and its own shape is the completing-the-square picture: the extra 2-by-x strip cut in half and moved round the square leaves a near-square missing a 1-by-1 corner. Home and design category; no Year 12 Maths video uses a rug or floor covering. The rug returns in scene 2 (factorising), 3 (the tiles grow out of its outline), 7 (method chooser) and the memory card badge.
- **Plate and scale.** The painted rug is one fixed object (about 1.8 times as long as wide) and is never stretched. Exact sizes are carried by a coded outline (`RectangleSizer`) drawn to scale beside or over it; the plate is labelled "rug", not with a size, except in the hook where the coded outline carries "x" and "x + 2".
- **Simulations (standard item 3).**
  1. `RectangleSizer` (scene 1, new part on `ParameterSlider` and `LiveReadoutBoard`): a blue slider for the width x sweeps 1 to 3.5; a coded outline (rug texture swatch clipped inside, never stretched) resizes to x by x + 2 to scale, with a live "area x(x + 2)" readout and two amber target lines, 15 and 10. At x = 3 the readout hits 15.00 exactly (green); for 10 it reads 9.89 at 2.3 and 10.56 at 2.4, and a small trial table logs 2.3, 2.32, 2.4 with no exact hit.
  2. `CompleteSquareTiles` (scenes 3 and 4, kit-needs item 2's mode): an x-square and a 2-by-x strip; the strip splits into two 1-by-x strips that move to the side and the bottom; a dashed 1-by-1 violet corner appears and fills; the near-square becomes (x + 1)². Scene 4 repeats it with two 3-by-x strips and a 3-by-3 corner of 9.
  3. `DecisionTree` (scene 7, existing in `trig-parts.tsx`): three doors light as each example is routed.
- **Colour roles (fixed for the whole video).**
  - **a: blue**, **b: teal**, **c: amber** (`MATH_BLUE`, `MATH_TEAL`, `MATH_AMBER`), carried with their signs from the equation into the formula;
  - **the added square (the corner): violet**; the ± sign is circled violet whenever it appears;
  - **answer: green**; **mistake: red**; ink for working and the rug's width x.
- **Large type, handwritten voice.** As w01. Hand tags: "never exact", "zero on one side", "one of them must be 0", "a width can't be negative", "missing corner", "+ 1 both sides", "keep ±", "half of 6 is 3", "same steps, letters", "signs attached", "factor of the whole top", "quickest", "neat", "always works".
- **Stage changes (standard item 2):** rug and sizing slider (1); factorising board with the rug (2); tiles (3); g01 board (4); full-width derivation (5); g01 board (6); method chooser (7); memory card (8); question cards (9 to 12); the kayak handoff (13); key notes (14).
- **Worked examples (g01 layout).** 2: the rug at 15 (crossed "x(x + 2) = 15, so x = 15 or x = 13", caption "null factor law needs 0"). 4: site we-2 (crossed "x = −3 + 2√3 only", caption "keep ±"). 6: site we-3 (crossed "(4 ± 2√6)/4 = 1 ± 2√6", caption "cancel a factor of the whole top", the w02 rule). Feedback scenes: givens strip, framed answer, one crossed slip each.
- **Memory aid.** Framed card: "Factorise if you can. Complete the square if b is even. The formula always works." Key: "Keep the ±." Badge: the rug with its moved strip and missing corner.
- **Visual surprise.** Scene 1: the slider lands exactly on 15 but slides straight past 10. Scene 3: half the strip swings round and the gap is exactly a 1-by-1 corner, so the rug becomes a square with one tile missing.
- **Method chooser wording.** "Complete the square if b is even" is stated as when it is neat (a = 1, b even), not as a rule; the formula "always works" for real roots and says when there are none (w05). The chooser is advice, not a requirement: a question that names a method must use it (A2).
- **Learner question (outline, kept).** Answer chain: factorise when it factorises (2); otherwise build a square (3, 4); the formula is that square built once with letters (5, 6); choose by asking in order (7).
- **Plain meanings at first use.** Quadratic equation: "an equation whose highest power of x is x squared". Null factor law: "if a product is zero, one of the factors is zero". Completing the square: "adding the missing corner so one side becomes a perfect square". Coefficients: "the numbers in front, read with their signs".
- **Context checks in learner copy.** "A width can't be negative" is said when a root is rejected (2, 3), because the rejected root is a correct solution of the equation, not an error.
- **Attempts (pack questions, original).** A1: 3x² + 5x − 2 = 0 gives x = 1/3 or −2; crossed "x = 1 or x = −2". A2: x² − 4x − 7 = 0 by completing the square gives x = 2 ± √11; crossed "(x − 2)² = 7, x = 2 ± √7".
- **Mistake scene:** none separate. Null factor law without zero (2 crossed); dropping ± (4 crossed); cancelling one term (6 crossed); not dividing by the leading coefficient (feedback 1 crossed); adding the square to one side only (feedback 2 crossed).
- **Handoff (outline next: w05, "What does the discriminant tell us before we solve?").** Scene 13 shows the formula with √(b² − 4ac) boxed and "44" for the rug at 10, beside the painted kayak at a hire jetty and the chip "Takings exactly $210 a day?". This frame is w05's opening frame.
- **Site sources used:** lesson 9 `three-methods-and-when-to`, `solving-by-factorisation` (null factor law), `the-quadratic-formula-and-choosing`, `model` (we-2, we-3; we-1's method kept on the rug), traps (null factor law without zero, losing ±, the sign of −b, cancelling against one term). The site's "revisit x² = 9" is not used.
- **Site corrections:** none found for lesson 9.
- **Entry knowledge (route):** w02 (factorising trinomials, including the product-sum split); w03 (simplifying surds such as √12 = 2√3 and √24 = 2√6); Year 10 null factor law (recalled in a clause).
- **Draft route entry (root to adopt).** id `math-a11-w04`; syllabusActions `cia7d436df`; start "Recall factorising a trinomial and the null factor law." Stop "Solve ax² + bx + c = 0 by factorising, completing the square and the quadratic formula, and choose a method; show the formula as completing the square done once." Next: "math-a11-w05: can the kayak hire take exactly $210 a day?".
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Rug: x(x + 2) = 15 → (x + 5)(x − 3) = 0 → x = 3 (rug 3 m × 5 m). x(x + 2) = 10 → (x + 1)² = 11 → x = −1 + √11 = 2.3166 m (length 4.3166 m). Trials: 2.3 → 9.89; 2.32 → 10.0224; 2.4 → 10.56.
  (b) Derivation (scene 5), rows: ax² + bx + c = 0; x² + (b/a)x = −c/a; (x + b/2a)² = b²/4a² − c/a; (x + b/2a)² = (b² − 4ac)/4a²; x + b/2a = ±√(b² − 4ac)/2a; x = (−b ± √(b² − 4ac))/2a. Needs a ≠ 0 and, for real roots, b² − 4ac ≥ 0 (w05). The sign of a is absorbed by ± (√(4a²) = 2|a|).
  (c) Pronunciations: "x squared plus two x minus fifteen"; "plus or minus root eleven"; "b squared minus four a c"; "two a"; "minus b".

Main question: *A rug is 2 m longer than it is wide. If it covers 15 m², the width is easy to find. If it covers 10 m², sliding the width never lands exactly. Which method solves a given quadratic most efficiently?*
Entry knowledge (w02, w03, Year 10): factorising trinomials; simplifying surds; the null factor law.
Stops after: factorising, completing the square, the formula derived and used, and choosing a method. No discriminant cases, no graphs.
Handoff: math-a11-w05: the formula with b² − 4ac boxed beside the kayak hire, "exactly $210 a day?".

## Script and shots

Cue words in **bold** trigger the visual change. Colour roles (fixed): a blue; b teal; c amber; added corner and ± violet; answer green; mistake red; ink otherwise. Header strip "MATHEMATICS ADVANCED · QUADRATIC EQUATIONS". Scene headings in the hand font, 44 px.

### 1. hook: two rugs, two problems
> Here's that rug, two metres longer than it is wide. Call the width x, so its area is x times x plus two. First, suppose it covers fifteen square metres. Slide the width and watch the **area**. At three metres, it's exactly fifteen. Now try ten square metres. At two point three, the area is just under ten, and at two point four, it's over. However closely you slide, it never lands **exactly**. Both are quadratic equations, with x squared as the highest power, but they need different tools. So which method solves a given quadratic most **efficiently**?

Visual: opens on w03's handoff frame exactly (rug plate, coded "x m" and "(x + 2) m", chip "area 10 m²", "x(x + 2) = 10", "x = −1 + √11 ?"). The "x = −1 + √11 ?" chip moves to the top right and dims (answered in 3). The rug (`ma11-rug-top-v1.png`) shifts left at 480 px; heading writes "Two rugs, two problems". On "area" `RectangleSizer` opens at the right: a blue `ParameterSlider` "width x" (700 px), a coded to-scale outline beside it, readout 52 px "area x(x + 2)", amber target line "15". The slider runs 1 → 3; the readout climbs 3.00 … 15.00 and turns green at exactly 15.00, hand tag "exact". The target changes to "10": the slider runs 2 → 2.3 (9.89) → 2.4 (10.56) → 2.32 (10.02); a trial table logs each. On "exactly" hand tag "never exact" by the table. On "efficiently" the two equations write at the top, 44 px: "x² + 2x − 15 = 0" and "x² + 2x − 10 = 0", with a hand tag "quadratic: x² is the highest power".

### 2. factorising, and the null factor law
> First, factorising. Write the equation with zero on one side, so x squared plus two x minus fifteen equals **zero**. Find two numbers that multiply to minus fifteen and add to two. They're five and minus three, so it's x plus five, times x minus three, equals zero. If two numbers multiply to zero, one of them must be zero. That's the null factor law. So x is minus five or **three**. A width can't be negative, so the rug is three metres wide. Check it, three times five is fifteen. Here's the trap. The null factor law only works with zero on one side. From x times x plus two equals fifteen, you can't say x is **fifteen**.

Visual: clear change to the g01 board. Task strip: "Solve x(x + 2) = 15 for the width". Equation strip, 52 px: "x² + 2x − 15 = 0" (2 teal, −15 amber). Givens card: "area 15 m²", "length = x + 2". The rug thumbnail (240 px) sits top left. On "zero" hand tag "zero on one side". Product-sum box: "product −15, sum 2: 5 and −3". Row "(x + 5)(x − 3) = 0", hand tag "one of them must be 0". On "three" row "x + 5 = 0 or x − 3 = 0, so x = −5 or x = 3"; −5 greys with hand tag "a width can't be negative"; "x = 3 m" in a green answer frame and the coded outline beside the thumbnail labels "3 m" and "5 m"; check row "3 × 5 = 15 ✓". On "fifteen" a red slip "x(x + 2) = 15, so x = 15 or x + 2 = 15" writes and is crossed, caption "null factor law needs 0".

### 3. the rug at ten: complete the square
> Now the rug that covers ten square metres. x squared plus two x minus ten doesn't factorise with whole numbers, so let's build a square instead. Picture x squared plus two x as tiles, an x by x square and a two by x strip. Cut the strip in half, and move one half round to the bottom. Now it's nearly a square, x plus one on each side, but it's missing a one by one **corner**. Add that corner to both sides. So x plus one, all squared, is ten plus one, which is **eleven**. Take the square root, and keep both signs. x plus one is plus or minus root eleven, so x is minus one, plus or minus root **eleven**. The width is the positive one, minus one plus root eleven, about two point three two **metres**.

Visual: stage change to `CompleteSquareTiles` (tiles 520 px across). The rug's coded outline at width x shrinks into the tiles: an ink x-square and a teal 2-by-x strip, labelled "x²" and "2x"; row at the top "x² + 2x = 10". On "Cut the strip in half" the strip splits into two teal 1-by-x strips; one swings round to the bottom. On "corner" a dashed violet 1-by-1 gap blinks at the bottom-right, hand tag "missing corner". On "eleven" the violet corner fills, the sides label "x + 1", and rows write: "x² + 2x + 1 = 10 + 1", "(x + 1)² = 11", hand tag "+ 1 both sides". On "eleven" (second) "x + 1 = ±√11" with ± circled violet (hand tag "keep ±"), then "x = −1 ± √11". On "metres" the negative root greys ("a width can't be negative"), "x = −1 + √11 ≈ 2.32 m" lands in a green frame, the dimmed hook chip from scene 1 ticks green, and the trial table's 2.32 row glows.

### 4. worked example: completing the square, no picture
> Let's do one without a picture. Solve x squared plus six x minus three equals zero, in exact form. Move the three across, so x squared plus six x equals three. Half of six is three, and three squared is nine, so add nine to both **sides**. Then x plus three, all squared, equals twelve. Take the square root of both sides, keeping plus or minus. Root twelve is two root three, so x is minus three, plus or minus two root **three**. Drop the plus or minus, and you lose half the **answers**.

Visual: clear change to the g01 board (site we-2). Task strip: "Solve, leaving your answer in exact form". Equation strip: "x² + 6x − 3 = 0". Givens card: "b = 6, so half of b = 3" (teal). A small `CompleteSquareTiles` thumbnail (260 px) shows two 3-by-x strips and the 3-by-3 violet corner of 9. Rows: "x² + 6x = 3"; on "sides" "x² + 6x + 9 = 3 + 9" with the 9s violet, hand tag "half of 6 is 3"; "(x + 3)² = 12"; on "three" (last bold before answers) "x + 3 = ±√12 = ±2√3" (a small w03 `RootExtract` step), "x = −3 ± 2√3" in a green frame. On "answers" a red slip "x = −3 + 2√3" writes and is crossed, caption "keep ±".

### 5. the formula is completing the square, done once
> Completing the square works every time, so let's do it once and for all, with letters. Start with a x squared plus b x plus c equals zero. Divide by a, and move c over a across. Half of b over a is b over two a. Add its square to both sides, and the left side becomes x plus b over two a, all **squared**. Put the right side over four a squared, and it's b squared minus four a c, over four a **squared**. Take the square root, keeping plus or minus, then subtract b over two a. That's the quadratic formula. x equals minus b, plus or minus the root of b squared minus four a c, all over two **a**. It's completing the square, already done for you.

Visual: stage change to the full-width derivation board. Task strip: "Solve ax² + bx + c = 0 (a ≠ 0)" (a blue, b teal, c amber). Rows (author note b), one per cue, current 52 px, earlier rows 32 px and dimmed; beside each a hand tag repeating the scene 4 move: "÷ a", "half of b/a is b/2a", "+ (b/2a)² both sides" (violet), "same steps, letters". On "squared" row 3 "(x + b/2a)² = b²/4a² − c/a". On "squared" (second) row 4 "(x + b/2a)² = (b² − 4ac)/4a²". On "a" (last) row 6 "x = (−b ± √(b² − 4ac))/2a" in a large green frame (60 px) with ± violet; rows 1 to 5 shrink to a 30 px column at the left; a small grey tag "c over a, a ≠ 0".

### 6. worked example: using the formula
> So let's use it. Solve two x squared minus four x minus one equals zero. Read the coefficients with their signs attached. a is two, b is minus four, and c is minus **one**. So minus b is plus four. b squared is sixteen, and minus four a c is plus eight, so under the root it's twenty-**four**. That gives four, plus or minus root twenty-four, over four. Root twenty-four is two root six, and every term on top shares a factor of two with the four, so it's two plus or minus root six, over **two**. Cancelling the four with only the first term is the factors-not-terms mistake. You can only cancel a factor of the whole **top**.

Visual: clear change to the g01 board (site we-3). Task strip: "Solve, leaving your answer in exact form". Equation strip: "2x² − 4x − 1 = 0". Givens card, on "one": "a = 2" (blue), "b = −4" (teal), "c = −1" (amber), hand tag "signs attached", each with a leader to its place. Rows: "x = (−(−4) ± √((−4)² − 4(2)(−1)))/2(2)" with the coloured values dropping into the formula's slots; on "four" (in "twenty-four") "= (4 ± √(16 + 8))/4 = (4 ± √24)/4"; "√24 = 2√6"; on "two" (last numeric) "= (4 ± 2√6)/4 = (2 ± √6)/2" in a green frame, with "÷ 2 top and bottom" tag. On "top" a red slip "(4 ± 2√6)/4 = 1 ± 2√6" writes and is crossed, caption "cancel a factor of the whole top", with the chocolate memory card from w02 as a 120 px grey badge.

### 7. choosing a method
> So which method? Ask in order. Does it factorise with whole numbers? Then factorise, it's quickest. Is a equal to one, with an even b? Then completing the square is neat. Otherwise, use the formula, which always works. The rug at fifteen **factorised**. The rug at ten had a equal to one and b equal to two, so we completed the **square**. And two x squared minus four x minus one went straight to the **formula**. Every method gives the same answers, though. Put the rug at fifteen into the formula, and you get minus two, plus or minus eight, over two. That's three or minus five, just as factorising **said**.

Visual: stage change to `DecisionTree` (1,300 × 600 px): question nodes "Factorises with whole numbers?" then "a = 1 and b even?", with three doors "factorise" (hand tag "quickest"), "complete the square" ("neat"), "formula" ("always works"). On "factorised" a chip "x² + 2x − 15 = 0" with the rug thumbnail travels down the tree to the first door, which lights green. On "square" "x² + 2x − 10 = 0" goes to the second door. On "formula" "2x² − 4x − 1 = 0" goes to the third. Then the rug-at-15 chip also drops through the formula door: a small row writes, 44 px, "x = (−2 ± √(4 + 60))/2 = (−2 ± 8)/2"; on "said" it resolves to "3 or −5" with a green tick beside the factorising door's "3 or −5", hand tag "same answers". A grey tag under the tree: "If a question names a method, use that one."

### 8. memory aid
> Here's a way to remember the choice. Factorise if you can, complete the square if b is even, and the formula always works. And whichever you use, keep the plus or **minus**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the rug badge (260 px) with its moved strip and violet corner. Main line, hand font 52 px over three short lines: "Factorise if you can. Complete the square if b is even. The formula always works." On "minus" the key line, 44 px: "Keep the ±." with ± violet. Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. Solve three x squared plus five x minus two equals zero. Pause here to answer.

Visual: `QuestionCard`, 40 px: "Solve 3x² + 5x − 2 = 0." Equation at 52 px. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> It factorises. Three times minus two is minus six, and two numbers with product minus six and sum five are six and minus **one**. So it's three x minus one, times x plus two, equals **zero**. The null factor law gives x equals one third, or x equals minus **two**. If you wrote x equals one, you forgot to divide by the **three**.

Visual: the card shrinks to the top; `GivensStrip`: "a = 3", "b = 5", "c = −2". On "one" a product-sum box "product −6, sum 5: 6 and −1" and the split row "3x² + 6x − x − 2". On "zero" row "(3x − 1)(x + 2) = 0". On "two" row "x = 1/3 or x = −2" in a green frame. On "three" a red slip "3x − 1 = 0, so x = 1" writes and is crossed, caption "divide by 3: x = 1/3". Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. Solve x squared minus four x minus seven equals zero by completing the square, giving exact answers. Pause here to answer.

Visual: `QuestionCard`: "By completing the square, solve x² − 4x − 7 = 0. Give your answers in exact form." Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 12. feedback 2 (brief)
> Move the seven across, so x squared minus four x equals **seven**. Half of minus four is minus two, and its square is four, so add four to both **sides**. Then x minus two, all squared, equals eleven, so x is two, plus or minus root **eleven**. If you got root seven, you added four to only one **side**.

Visual: the card shrinks; `GivensStrip`: "by completing the square", "exact form" (both underlined as used). On "seven" row "x² − 4x = 7". On "sides" row "x² − 4x + 4 = 7 + 4" (4s violet). On "eleven" rows "(x − 2)² = 11", "x = 2 ± √11" in a green frame with ± violet. On "side" a red slip "(x − 2)² = 7, x = 2 ± √7" writes and is crossed, caption "add 4 to both sides". Hold about 1 s.

### 13. handoff
> In the formula, everything turns on the part under the root, b squared minus four a c. For the rug at ten, it was forty-four, a positive number. What if it's zero, or negative? Next, a kayak hire shop wants to know if it can take exactly two hundred and ten dollars in a **day**. One number answers that, before you solve anything.

Visual: the memory line shows small at the top, then fades. Left: the formula (52 px) with √(b² − 4ac) boxed amber, and below it "rug at 10: b² − 4ac = 2² − 4(1)(−10) = 44" with a teal "> 0". Right: the painted kayak at a hire jetty (`ma11-kayak-jetty-v1.png`, 520 px wide) with a coded blank sign reading "$p per hire". On "day" a chip, 52 px: "Takings exactly $210 a day?" with "?". Chip "Next: what does b² − 4ac tell you?". Hold about 2 s. This is w05's opening frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book". Bullets 38 px in the left 58 to 60 per cent.
> Here are the key notes. Pause the video if you need more time to copy them.

- Null factor law: get 0 on one side, factorise, set each factor to 0.
- Complete the square: add (half of b)² to both sides.
- x = (−b ± √(b² − 4ac))/2a, with signs attached.
- Keep ±. Cancel only a factor of the whole top.
- Reject a root only when the context rules it out.

Memory aid (framed card, right side, as in scene 8): *Factorise if you can. Complete the square if b is even. The formula always works.* Key: *Keep the ±.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 13's frame exactly. This is the final frame and w05's opening frame.

## Teaching checks

- **Does it explain causes?** Why zero on one side: a product is zero only if a factor is zero; a product equal to 15 says nothing about either factor (2). Why completing the square works: half the strip moved round leaves a square missing one corner (3). Why ± : both a number and its negative square to 11 (3, 4). Why the formula is true: it is completing the square on the general equation (5). Why signs matter in the formula: b = −4 gives −b = 4 and b² = 16 (6). Why the cancel slip is wrong: the 4 is not a factor of the whole top (6). Why a method is chosen: speed, not correctness, since every method gives the same roots (7, the formula check on the rug at 15).
- **Misconceptions addressed:** null factor law without zero (2 crossed); dropping ± (4 crossed); sign errors with −b (6, positively); cancelling one term (6 crossed); forgetting the leading coefficient (feedback 1 crossed); one-sided adding (feedback 2 crossed); rejecting a negative root without a reason (2, 3, notes).
- **Visual standard, item by item:** 1 the painted rug from the first frame, returning in 2, 3, 7 and 8; 2 a new stage every 25 to 55 s; 3 `RectangleSizer`, `CompleteSquareTiles` and the routed `DecisionTree`; 4 fixed colour roles; 5 large type; 6 hand tags; 7 g01 boards; 8 framed card and five bullets; 9 the slider landing on 15 but never on 10, and the moved strip leaving one missing corner.
- **One idea at a time:** one method per scene; the derivation repeats scene 4's moves with letters, tagged step by step.
- **Response opportunity:** two unseen HSC-style tasks with every demand visible (A2 names its method); 10 s each; feedback about 23 and 21 s.
- **Avoided double teaching:** factorising trinomials (w02) and surd simplification (w03) are used, not re-taught.
- **Syllabus coverage:** `cia7d436df` by factorisation (2, 7, A1), completing the square (3, 4, A2), the formula (5, 6); "a ≠ 0" (5).
- **Out of scope by design:** the discriminant cases (w05); vertex form and graphs (w14, w15); inequalities (w18).

## Practice questions and model answers

**Attempt 1 (scene 9; pack question 1, original, HSC style, 2 marks suggested, not an official marking scheme).** "Solve 3x² + 5x − 2 = 0."
Model answer: product −6, sum 5: 6 and −1; 3x² + 6x − x − 2 = 3x(x + 2) − (x + 2) = (3x − 1)(x + 2) = 0; x = 1/3 or x = −2. Classic mistake (crossed): x = 1.

**Attempt 2 (scene 11; pack question 2, original, HSC style, 2 marks suggested).** "By completing the square, solve x² − 4x − 7 = 0. Give your answers in exact form."
Model answer: x² − 4x = 7; x² − 4x + 4 = 11; (x − 2)² = 11; x = 2 ± √11. Classic mistake (crossed): adding 4 to one side only, (x − 2)² = 7.

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Rug 15 | x² + 2x − 15 = (x + 5)(x − 3); x = 3 (−5 rejected); 3 × 5 = 15 | 1, 2, 7 |
| Rug 10 | (x + 1)² = 11; x = −1 ± √11; width −1 + √11 ≈ 2.32 m | 1, 3, 7 |
| Sizer | area at 2.3: 9.89; at 2.32: 10.02; at 2.4: 10.56; at 3: 15.00 | 1 |
| we-2 (site) | x² + 6x = 3; + 9; (x + 3)² = 12; √12 = 2√3; x = −3 ± 2√3 | 4 |
| Formula | rows in author note b | 5 |
| we-3 (site) | a = 2, b = −4, c = −1; 16 + 8 = 24; (4 ± √24)/4 = (4 ± 2√6)/4 = (2 ± √6)/2; crossed 1 ± 2√6 | 6 |
| A1 | product −6, sum 5: 6, −1; (3x − 1)(x + 2); x = 1/3, −2; crossed x = 1 | 9, 10 |
| A2 | (x − 2)² = 11; x = 2 ± √11; crossed 2 ± √7 | 11, 12 |
| Formula check | rug 15: b² − 4ac = 4 + 60 = 64; (−2 ± 8)/2 = 3 or −5 | 7 |
| Handoff | rug 10: b² − 4ac = 4 + 40 = 44; kayak "$210 a day?" | 13 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy (16 Nov, scratchpad `checks.py` and `checks2.py`); Codex to re-check.

- x(x + 2) = 15: x = 3 or −5. x(x + 2) = 10: x = −1 ± √11; −1 + √11 = 2.31662.
- Trial areas: 2.3 × 4.3 = 9.89; 2.32 × 4.32 = 10.0224; 2.4 × 4.4 = 10.56.
- x² + 6x − 3 = 0: x = −3 ± 2√3.
- 2x² − 4x − 1 = 0: x = (2 ± √6)/2 (= 1 ± √6/2; 2.2247 and −0.2247).
- General: solve(ax² + bx + c, x) = (−b ± √(b² − 4ac))/(2a).
- A1: 3x² + 5x − 2 = (3x − 1)(x + 2); x = 1/3, −2. A2: x = 2 ± √11; slip 2 ± √7.
- Rug at 15 by formula: b² − 4ac = 4 + 60 = 64; (−2 ± 8)/2 = 3 or −5.
- Rug at 10: b² − 4ac = 2² − 4(1)(−10) = 44 = (2√11)².

## Memory aid check

- **"Factorise if you can. Complete the square if b is even. The formula always works. Keep the ±."** Original. Meaning, as said: a speed guide, not a rule. Assumptions checked: "complete the square if b is even" is aimed at a = 1 (scene 7 says "a equal to one, with an even b"; the card is shown right after that sentence); "always works" holds for any a ≠ 0, and when b² − 4ac < 0 the formula shows there are no real roots (w05, not claimed here). "Keep the ±" applies to completing the square and the formula. Introduced after all three methods.
- **Considered, not used:** a song version of the formula (pop-goes-the-weasel; memorable but carries no reason, and the derivation already gives one).

## Narration length estimate

Counted by script with the build parser rules: **5,563 characters**, 14 scene headings. Characters per scene (1 to 14): 544, 615, 689, 478, 636, 611, 596, 169, 89, 314, 132, 288, 327, 75.

At 13.3 characters per second the speech before the notes is about 413 s. Holds: two 10 s countdowns, memory-card hold 2 s, feedback holds 2 s, handoff hold 2 s, about 12 s of settling (the slider sweeps, the tile moves, the tree routing); notes 45 s. Total **about 496 s**, inside the band and under the cap.

Reserve trims if the voiced take runs long: scene 5's last sentence (keep the tag "same steps, letters"); scene 1's "Both are quadratic equations, with x squared as the highest power, but they need different tools." shortened to "They need different tools." (keep the hand tag with the meaning).

## Scene list and build ids

Lesson key `m-a11w04` (route math-a11-w04). Explainer folder `src/explainer/lessons/math-a11-w04`; build inputs in `docs/production/claude-pm/lessons/math-a11-w04/` (at voicing).

In order (14 scene headings): hook-rugs, factorise-null-factor, complete-square-tiles, worked-complete-square, formula-derived, worked-formula, choosing-method, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (seconds from the estimate):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 42 s | 1 | The painted rug and RectangleSizer: lands on 15, never on 10 |
| 42 to 90 s | 2 | g01 board: factorising the rug at 15, null factor law |
| 90 to 144 s | 3 | CompleteSquareTiles: strip halved and moved, the missing corner filled |
| 144 to 182 s | 4 | g01 board: completing the square without a picture (site we-2) |
| 182 to 231 s | 5 | Full-width derivation of the formula |
| 231 to 279 s | 6 | g01 board: the formula with signed coefficients (site we-3) |
| 279 to 325 s | 7 | DecisionTree routing three equations; the formula check on the rug at 15 |
| 325 to 340 s | 8 | Framed memory card |
| 340 to 424 s | 9 to 12 | Question cards and countdowns, then feedback with givens strips and crossed slips |
| 424 to 451 s | 13 | Formula with b² − 4ac boxed beside the kayak hire jetty |
| 451 to 496 s | 14 | Key notes with the framed card, then a silent return to scene 13's frame |

Per-scene motion (schema 4): all `explain` except attempts and key-notes (`hold`). Transitions: w03's last frame continues into 1; 1 to 2 clear change; 2 to 3 stage change (the outline shrinks into the tiles); 3 to 4 clear change; 4 to 5 camera push into the derivation board; 5 to 6 clear change; 6 to 7 stage change to the tree; 7 to 8 clear change to the card; attempts and feedback: the card shrinks; 12 to 13 board clear; 13 to 14 fade, then a silent return to scene 13's frame.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11w04-rev1-learning-review.md`, `science_check` = `checks/m-a11w04-rev1-maths-check.md`.

## Assets

Inspected before choosing (16 Nov, read only): no rug, mat or floor-covering plate exists. `maths/ma12-hallway-floor-v1.png` (i14) is a hallway floor strip for the robot vacuum, i14's anchor; not used.

Need (painted, new): `ma11-rug-top-v1` (also needed for w03's handoff frame). Needed from w05's brief for the handoff frame: `ma11-kayak-jetty-v1`.

Coded: the sizing outline (with a rug-texture swatch clipped inside, sampled from the plate, never stretched), tiles, the derivation, the tree, working boards, cards, countdown, hand tags, key notes.

### Studio kit use and additions

Uses: `MATH_ROLES`, `Role`, `HandTag`, `DrawnMark`, `PlateImg`, `LiveReadoutBoard`, `ParameterSlider`, `DecisionTree`, `WorkingBoard` parts, `RootExtract` (from w03), `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`, `GivensStrip`.

Additions:
1. **`CompleteSquareTiles`** (kit-needs item 2's mode of `AlgebraTileGrid`): an x-square plus a b-by-x strip; split, move, dashed missing corner, fill; labels update to (x + b/2). Check: tile areas always equal x² + bx + (b/2)² after the fill.
2. **`RectangleSizer`**: a slider-driven to-scale rectangle with a fixed difference between sides, a live area readout, target lines and a trial log; a texture swatch clipped inside (no plate stretch). Check: displayed area = x(x + d) at every frame.

## Codex asset brief (Maths A11 W04, a rug)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-w04.md`, route entry math-a11-w04. Paint after the learning review and maths check pass and root gives the go-ahead. Save to `public/assets/maths/`. Transparent PNG with a true alpha channel, clean edges; ink and watercolour in the house style, matched to `maths/ma12-timber-deck-top-v1.png`; at least 8 per cent clear margin; no text, numbers, logos, people, pets, hands, faces, furniture, backdrop, glow or shadow. Never stretch.

1. `ma11-rug-top-v1.png` (2200 × 1300 px canvas): one flat rectangular woven rug seen **from directly above** (orthographic), long side horizontal, about 1.8 times as long as it is wide; a calm, even flat-weave texture in muted warm colours with a simple narrow plain border and short fringe on the two short ends; no busy pattern (code samples a swatch of its texture for the to-scale outline).

Sidecar JSON (`ma11-rug-top-v1.json`): the rug body's rectangle in px (excluding the fringe) and a 200 × 200 px texture-swatch rectangle from its plain centre. This plate is also needed for w03's handoff frame, so paint it before the w03 build.

Report inspection on the paper background (`#f6f1e7`) at 300 px and 600 px and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-w04-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the derivation rows (author note b) are complete and each follows from the last, with a ≠ 0 stated.
3. Confirm every rejected root is rejected for a stated context reason, and key note 5 is scoped.
4. Confirm the method-chooser wording is advice ("neat", "quickest"), with "a = 1 and b even" stated in scene 7.
5. Confirm site we-2 and we-3 are unchanged, and that replacing we-1 with the rug at 15 is recorded (Decisions); both attempts carry every demand (A2: "by completing the square", "exact form").
6. Confirm the syllabus quote matches the crosswalk exactly; no site label in learner copy or metadata.
7. Confirm no em dash (U+2014), Australian spelling, narration counts by script, and every bold cue quoted in its scene's Visual in spoken order.
8. Confirm scene 1 opens on w03's final frame and scene 13's frame matches w05's opening frame.

## YouTube metadata (draft)

Title: Solving Quadratics: Factorise, Complete the Square or Formula? | Year 11 Maths Advanced

(Title length: 87 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/algebraic-techniques-and-inequalities/lesson09.sa.html

A rug is 2 m longer than it is wide. If it covers 15 m², factorising finds the width; if it covers 10 m², sliding the width never lands exactly, so we complete the square, with tiles you can watch move. Then do the same steps with letters to see where the quadratic formula comes from, use it with signed coefficients, and learn how to choose the quickest method. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Working with functions.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Solve quadratic equations ax^2 + bx + c = 0 by factorisation, completing the square and using the quadratic formula x = (-b ± √(b^2 - 4ac))/(2a) where a, b and c are real numbers and a ≠ 0"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

Builds on: Factorising (w02) and surds (previous video). Next: The discriminant.

#Year11Maths #MathsAdvanced #Quadratics #HSCScience

## Open decisions

- **1. Site we-1 replaced (root).** The site's x² − 5x + 6 = 0 is replaced by the rug's x² + 2x − 15 = 0 (same method, same check, plus the null-factor trap from the anchor). Root to confirm; restoring we-1 as a short extra row in scene 2 would add about 300 characters (still under the cap) but repeat the method without a new idea.
- **2. Derivation pacing (learning review).** Scene 5 compresses six rows into about 45 s. Each row carries scene 4's tag, so the student sees the same moves. If the review finds it too fast for Year 11 entry, the fallback is to drop row 4's spoken sentence and let the tag carry it.
- **3. Title length (root).** 87 characters; the shorter alternative is "Solving Quadratic Equations: Which Method? | Year 11 Maths Advanced" (66).
- **4. Plate prefix `ma11-` (root),** as w01.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from w02, w03 and Year 10; check that the slider makes "guessing never lands" concrete; that the moved strip makes the missing corner obvious; that the derivation is followable as a repeat of scene 4; that the chooser reads as advice), then the Codex maths check and error check, then voicing and a build to grade A.
- The sizing slider, the tile moves and the tree routing carry the explanation; judge them at playback speed.
