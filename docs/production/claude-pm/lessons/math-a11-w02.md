# Maths A11 W02: Why must we factorise before we cancel an algebraic fraction? Factors against terms, expanding and factorising on a tile grid, special products, and simplifying, dividing and adding algebraic fractions with restrictions (design)

Status: Revision 2 (16 Nov 2026): independent learning review resolved (see "Revision 2" below); not voiced. Revision 1 (16 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`, d01 Revision 6 and s01 Revision 4 patterns). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 6,376 characters by script (build parser rules), 16 scene headings, about 557 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (16 Nov): learning review resolved

Review: `../checks/m-a11-w02-learning-review.md` (summary `../checks/m-a11-w01-w31-learning-review-summary.md`), with root's rulings of 16 Nov. Findings by the review's numbers:

1. Should fix, scene 8 (restrictions without a reason): **accepted** (root ruling: keep all six examples). Reviewer's wording used; the final cue moves to "zero". The bottoms and the divisor's top glow amber in turn before the chips "x ≠ −2, 0, 2".
2. Should fix, scene 6 ("outside numbers"): **accepted**, reviewer's wording.
3. Optional, scene 6 (start the tile grid on "Split seven x"): **declined.** The tiles snapping into one rectangle at "Watch the tiles agree" is the scene's check and its small surprise; showing them during the split would spend it early and put the rows and the grid in competition.

Narration now 6,376 characters by script, about 557 s with holds (see "Narration length estimate"). Stage-plan times below are Revision 1 approximations; frames come from the recording's word timings. Every changed value was rechecked with SymPy (scratchpad `rev2_verify.py`); Codex's maths check remains the authority.

Scope: second video of Year 11 Mathematics Advanced (2024), outline order 2, Working with functions, Algebraic techniques. Pre-design pack: `../pre-design/maths-a11/math-a11-w02.md`. Site lessons (read through the pack, read only): `algebraic-techniques-and-inequalities/lesson05.sa.html` (Expanding, Factorising and Simplifying), SHA256 `0e683fa60184d6f6798f49a29d16bae2c41f828370a8b37d693697712b75a986`, and `lesson06.sa.html` (Algebraic Fractions), SHA256 `62919ffae4062b12aa329fd254b5558518d4760c9971bf482f57b740daf1ed2d`. All six site worked examples are used with the site's numbers unchanged. Route entry: `math-a11-w02` in `../../programme/maths-a11-route-inputs-1.json`. Visual system: maths studio kit; painted plates for the chocolate (prefix `ma11-`); tiles, algebra and readouts coded.

Owner rules applied: as w01 (2024 syllabus only, exact quotes, no site labels; painted plates for real objects, coded algebra; no people, hands or faces; never stretch a plate; one reasoning stage at a time; g01 worked-example layout; "Pause here to answer." and a 10 s countdown with the full question on screen; brief feedback with one crossed mistake; original HSC-style questions; five short key notes with the framed card; Australian spelling; no em dashes; conversational narration, cause before rule; anchor unique across Year 12 Maths and this batch).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Working with functions, Algebraic techniques; NESA codenames, official `code` field empty), quoted from `../../programme/syllabus/maths-advanced-2024-y11-crosswalk.json`:

- `ci3ccce138`: "Expand, factorise and simplify algebraic expressions"
- `ci9c1a8604`: "Simplify expressions involving algebraic fractions"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

**Boundary:** starts from w01's handoff frame (the cube with cancelled tiles beside the chocolate block and "(20 + 4)/4" with struck 4s). Teaches: factors against terms (only whole factors cancel); expanding as every term times every term on a tile grid; the two special products (a − b)² and (a − b)(a + b); expanding and simplifying with a subtracted bracket (site AT05 we-1); factorising (common factor first, difference of two squares, trinomials with a leading coefficient by splitting the middle term; AT05 we-2 and we-3); simplifying an algebraic fraction with restrictions (AT06 we-1); dividing (AT06 we-2); adding with different denominators (AT06 we-3). Stops at single algebraic fractions. Not taught: completing the square (w04, w15); surds (w03); algebraic long division (not in the 2024 Advanced points); partial fractions.

## Decisions

### Revision 1 (16 Nov 2026)

- **Anchor: a block of chocolate, 4 rows of 6 squares (painted plates, live).** Chosen over the pack's backyard tiling (d07's timber deck and i11 and i12's backyard contexts are close) and the road trip (d08) and group booking (no picture that carries cancelling). A chocolate block is made to snap into whole rows, which is exactly what a factor is: a fraction cancels only by whole rows (factors), never by loose squares (terms). It carries the hook (24/4 = 6 but "(20 + 4)/4 = 20" hands out 80 squares from 24), the area model of expanding ((x + 1)(x + 3) with x = 3 is the block's 4 rows of 6) and the memory aid ("you can only snap off whole rows"). It returns in scenes 3 (the tile grid laid on the block), 7 (the same mistake in algebra), 10 (memory card) and 12 (feedback crossed slip caption).
- **Simulations (standard item 3).**
  1. `ShareSplit` (scene 1): the block's four rows slide apart to four coded share mats ("share 1" to "share 4"), six squares each; then the struck-4 version fills four ghost piles of 20 dashed squares with a red tally running "20, 40, 60, 80" against "block: 24".
  2. `AlgebraTileGrid` with an x slider (scene 3, new part from the kit-needs list): the coded grid laid exactly on the plate at x = 3 (four regions: x², 3x, x, 3), then the slider sweeps x from 1 to 5 while the grid resizes (coded tiles only; the plate fades to a thumbnail) and two live readouts, "(x + 1)(x + 3)" and "x² + 4x + 3", always show the same number.
  3. `AlgebraTileGrid` factorise mode (scene 6): two x² tiles, seven x strips and three unit tiles slide and snap into one rectangle with sides 2x + 1 and x + 3.
  4. `ValueTester` (scene 7, new part on `ParameterSlider` and `LiveReadoutBoard`): an x slider sweeps −6 to 6 with three live readouts: the original fraction, the simplified (x + 3)/(x + 4) and the tempting "3/4". Original and simplified agree at every allowed x; at x = 3 and x = −4 the original reads "undefined" in amber; "3/4" never matches. The restriction is seen, not just stated.
- **Colour roles (fixed for the whole video).**
  - **a factor (a whole bracket or number that multiplies): blue** (`MATH_BLUE`), with its row on the block;
  - **a common factor taken out first: teal** (`MATH_TEAL`);
  - **the middle term of a special product: violet** (`MATH_GRADIENT` token);
  - **restrictions (values x cannot take): amber** (`MATH_AMBER`);
  - **answer: green**; **mistake: red**; ink for terms and plain working.
  Every coloured role has a written label at first use ("factor", "term", "restriction").
- **Large type (standard item 5).** Current working line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; tile labels at least 34 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; all text above y = 950. The chocolate block plate is at least 420 px wide when it carries the idea.
- **Handwritten voice (standard item 6).** `HandTag`: "80 from 24?", "factor: a whole row", "term: a loose piece", "every term × every term", "same block", "middle term", "middles cancel", "common factor first", "product 6, sum 7", "one rectangle", "whole factor", "restriction stays", "flip first", "missing factor", "keep it factorised". At most two live at once.
- **Stage changes (standard item 2):** block sharing (1); factor and term panels on the block (2); the tile grid on the block and the x slider (3); special-product squares (4); g01 board (5); tiles snapping into a rectangle (6); the fraction board and the value tester (7); dividing and adding boards (8, 9); memory card (10); question cards (11 to 14); the difference of squares beside the softball diamond (15); key notes (16).
- **Worked examples (g01 layout, standard item 7).** Scene 5 is AT05 we-1 (crossed slip "(x − 1)² = x² − 1", caption "missing the middle term"). Scene 6 is AT05 we-2 and we-3 together (a factorising board with two short tasks; crossed slip "2x² + 7x + 3 = (2x + 3)(x + 1)", caption "expand to check: 2x² + 5x + 3"). Scene 7 is AT06 we-1 (crossed slip "(x + 3)/(x + 4) = 3/4", caption "x is a term, not a factor"). Scenes 8 and 9 are AT06 we-2 and we-3 as short boards without a separate slip (their slips are covered by the feedback scenes). Feedback scenes carry a `GivensStrip`, rows at 52 px, a green framed answer and one crossed slip each.
- **Memory aid (standard item 8).** Framed card: "Factors cancel. Terms don't." Key: "Factorise first, then cancel: you can only snap off whole rows." Badge: the block with one whole row lifting out (ticked) beside one loose square (crossed).
- **Visual surprise (standard item 9).** Scene 1: the struck-4 shortcut piles up 80 squares beside a block of 24. Scene 7: on the value tester the tempting 3/4 never once matches the real fraction, while the factorised version tracks it exactly.
- **Question cards.** A1: the full worded question with the fraction built at 52 px. A2: the full worded question with both fractions built. Nothing answer-bearing.
- **Learner question (outline, kept):** "Why must we factorise before we cancel an algebraic fraction?" Answer chain: cancelling undoes a multiplication, so only factors cancel (2); expanding and factorising are the same rectangle read two ways (3, 6); the special products show their factors on sight (4); factorise top and bottom, then cancel whole factors and keep the restrictions (7); dividing and adding use the same factor thinking (8, 9).
- **Plain meanings at first use.** Factor: "something that multiplies the whole expression". Term: "a piece that is added or subtracted". Expand: "multiply out the brackets". Factorise: "write as a product of factors". Restriction: "a value x can't take, because a denominator would be zero". Reciprocal (recalled from w01): "the fraction flipped".
- **Restrictions in learner copy.** Kept in scenes 7 and 8 and feedback 1, because leaving them out would teach that the simplified fraction equals the original everywhere.
- **Trinomial method.** The site's product-and-sum split of the middle term is used because it works for every leading coefficient; "cross method" and guess-and-check are not named.
- **Attempts (pack questions, original).** A1: simplify (x² − 4x)/(x² − 16) with restrictions: x/(x + 4), x ≠ 4, −4; crossed "cancel x²: −4x/−16 = x/4". A2: write 2/(x − 3) − 1/(x + 2) as a single fraction: (x + 7)/((x − 3)(x + 2)); crossed "(x + 1)/((x − 3)(x + 2))" (the minus not reaching −3).
- **Mistake scene:** none separate. "Cancel terms" (1, 7 crossed, feedback 1 crossed); "(a − b)² = a² − b²" (5 crossed); "subtract only the first term of a bracket" (5 tag, feedback 2 crossed); "lose the restriction after cancelling" (7); "cancel before flipping" (8 tag).
- **Handoff (outline next: w03, "How does a conjugate clear a surd from a denominator?").** Scene 15 shows the difference-of-squares tiles with their middle terms cancelling beside the painted softball diamond with its diagonal "18√2 m", and the chip "(2 + √3)(2 − √3) = ?". This frame is w03's opening frame.
- **Site sources used:** lesson 5 `expanding-and-factorising-are-inverse`, `expanding-and-the-three-special`, `model` (we-1, we-2, we-3), traps (middle term, subtracted bracket); lesson 6 `factorise-first-then-cancel-factors`, `simplifying-by-factorising`, `model` (we-1, we-2, we-3), the illegal-cancellation revisit (used as the hook idea, re-contexted to chocolate).
- **Site corrections:** none found for lessons 5 and 6 (`../site-corrections-maths-a11.md`; all six answers recalculated and correct).
- **Entry knowledge (route):** w01 (index laws, including x²/x = x); Year 10 expanding binomial products and simple factorising.
- **Draft route entry (root to adopt).** id `math-a11-w02`; syllabusActions `ci3ccce138`, `ci9c1a8604`; start "Recall expanding a binomial product and that a fraction cancels only by a common factor." Stop "Expand and factorise (common factor, difference of two squares, trinomials with a leading coefficient), then simplify, divide and add algebraic fractions with restrictions stated." Next: "math-a11-w03: (2 + √3)(2 − √3) and the softball diamond's diagonal".
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Block: (x + 1)(x + 3) at x = 3 is 4 rows × 6 columns = 24 = x² + 4x + 3 = 9 + 12 + 3. Grid regions: x rows × x columns (9), x rows × 3 columns (9 = 3x), 1 row × x columns (3 = x), 1 row × 3 columns (3).
  (b) Hook: 24/4 = 6; (20 + 4)/4 = 5 + 1 = 6; struck version 20 each, 4 × 20 = 80.
  (c) Value tester table: original (x² − 9)/(x² + x − 12) and (x + 3)/(x + 4) agree for x ≠ 3, −4; at x = 1 both 4/5; at x = 0 both 3/4 (the only x where 3/4 matches, since (x + 3)/(x + 4) = 3/4 gives x = 0). The tester's slider never stops at x = 0, and the claim "never matches" is scoped on screen to "not for any other x". See open decision 2.
  (d) Tiles for 2x² + 7x + 3: two x² tiles, seven x strips, three units; rectangle (2x + 1) by (x + 3).
  (e) Pronunciations: "x squared minus nine"; "x plus three over x plus four"; "two over x minus three".

Main question: *Twenty-four squares shared four ways is six each. Cross out the 4s in (20 + 4)/4 and it says twenty each, which is 80 squares from a block of 24. Why must we factorise before we cancel an algebraic fraction?*
Entry knowledge (w01 and Year 10): index laws; expanding binomials; simple factorising.
Stops after: factors against terms; expanding and factorising; special products; simplifying, dividing and adding algebraic fractions with restrictions.
Handoff: math-a11-w03: the difference of squares beside the softball diamond, "(2 + √3)(2 − √3) = ?".

## Script and shots

Cue words in **bold** trigger the visual change. Colour roles (fixed): factor blue; common factor teal; middle term violet; restrictions amber; answer green; mistake red; ink for terms. Header strip "MATHEMATICS ADVANCED · ALGEBRAIC FRACTIONS". Scene headings in the hand font, 44 px. Type sizes as in Decisions.

### 1. hook: sharing a block
> Here's that chocolate block, four rows of six, so twenty-four squares. Share it between four friends, and each gets one row of six. As a fraction, twenty-four over four is six. Now write twenty-four as twenty plus four, and cross out the **fours**. That says each friend gets twenty squares. Four friends at twenty each is eighty squares, from a block of **twenty-four**. Something went wrong. So why must we factorise before we cancel an algebraic **fraction**?

Visual: opens on w01's handoff frame exactly (cube with cancelled tiles at the left, chocolate block and "(20 + 4)/4" with struck 4s at the right, chip "Next: why must we factorise before we cancel?"). Camera continue: the cube slides off; the block (`ma11-chocolate-block-v1.png`, 520 px wide) moves to centre left. On "one row of six" `ShareSplit`: the four rows (`ma11-chocolate-row-v1.png`, registered to the block's rows) slide apart to four coded share mats labelled "share 1" to "share 4"; readout "24/4 = 6" with a green tick. On "fours" the rows return; the fraction "(20 + 4)/4" writes at 52 px and both 4s are struck in red pencil, "= 20 each?". On "twenty-four" four ghost piles of 20 dashed squares build beside the mats while a red tally counts "20, 40, 60, 80" against an ink label "block: 24", hand tag "80 from 24?". On "fraction" the heading writes on: "Why factorise before you cancel?".

### 2. factors and terms
> Here's what went wrong. Cancelling undoes a multiplication. In four times six over four, the four is a factor. It multiplies, so dividing by four undoes it, and six is **left**. In twenty plus four over four, the four is a term. It's added, not multiplied, so dividing by four has to divide every term. That's five plus one, which is six **again**. On the block, a factor is a whole row you can snap off. A term is a loose piece. So you can only cancel factors of the whole top and the whole bottom, and to see the factors, you factorise **first**.

Visual: two panels under the block. Left panel, 52 px: "4 × 6 / 4"; the 4s blue, boxed, labelled "factor"; on "left" both 4s cancel with a blue stroke and "= 6" in green; on the block one whole row lifts out, hand tag "factor: a whole row". Right panel: "(20 + 4)/4"; the 4 in "20 + 4" ink, labelled "term"; on "again" the row "= 20/4 + 4/4 = 5 + 1 = 6" writes, with arrows from the 4 underneath to both terms; one loose square on the block wobbles, hand tag "term: a loose piece". On "first" a 44 px strip writes across the top: "Factorise first, then cancel whole factors." and stays as the scene strip for 3 to 7.

### 3. expanding is a rectangle of pieces
> Now let's do it with algebra. Say the block has x plus one rows and x plus three columns, so here x is three. Its area is x plus one, times x plus three. To expand, multiply every term in one bracket by every term in the other. That splits the block into four **pieces**. An x by x square, that's x squared. x rows of three, three x. One row of x, that's x. And a corner of **three**. So it's x squared plus four x plus three. With x equal to three, that's nine plus twelve plus three, the same twenty-four **squares**. Change x, and both forms still agree. Factorising just reads the rectangle the other way, from the pieces back to its rows and **columns**.

Visual: camera push onto the block. The coded `AlgebraTileGrid` lays over the plate exactly (from the plate's sidecar grid): side labels "x + 1" (rows) and "x + 3" (columns) in blue. On "pieces" thin ink lines split it into four regions; each region labels in turn: "x²" (3 × 3 squares), "3x", "x", "3"; hand tag "every term × every term". On "three" the row "(x + 1)(x + 3) = x² + 3x + x + 3 = x² + 4x + 3" writes at 52 px. On "squares" "9 + 12 + 3 = 24" with a green tick and the hand tag "same block". On "Change x" the plate fades to a 220 px thumbnail and the grid becomes coded tiles; a blue `ParameterSlider` "x" sweeps 1 to 5 and back to 3 while the grid resizes and two readouts, 52 px, "(x + 1)(x + 3)" and "x² + 4x + 3", show 8, 15, 24, 35, 48 in step. On "columns" a teal arrow runs from "x² + 4x + 3" back to "(x + 1)(x + 3)", labelled "factorise".

### 4. two special products
> Two products turn up so often that they're worth knowing on sight. First, a minus b, all squared. On the grid, it has two middle pieces, so it's a squared minus two a b plus b **squared**. Second, a minus b, times a plus b. This time the two middle pieces are opposite, so they cancel, and you're left with a squared minus b squared. That's called a difference of two **squares**.

Visual: stage change to two coded tile grids side by side (each 560 px). Left: (a − b)² with the two "−ab" middle regions in violet; on "squared" the row "(a − b)² = a² − 2ab + b²" writes with the −2ab violet, hand tag "middle term". Right: (a − b)(a + b) with "+ab" and "−ab" middle regions; on "squares" they slide together and vanish with a violet stroke, row "(a − b)(a + b) = a² − b²", hand tag "middles cancel". Both rows stay as a 36 px strip at the top through scene 7.

### 5. worked example 1: expand and simplify
> Let's use them. Expand and simplify, two x minus three, times x plus five, minus x minus one, all squared. The first product is two x squared plus ten x minus three x minus fifteen, which is two x squared plus seven x minus **fifteen**. The square has a middle term. It's x squared minus two x plus **one**. Now subtract the whole bracket, so every sign inside changes. That gives x squared plus nine x minus **sixteen**. Writing x minus one, squared, as x squared minus one is the slip to **avoid**.

Visual: clear change to the g01 board (AT05 we-1). Task strip: "Expand and simplify". Equation strip, 52 px: "(2x − 3)(x + 5) − (x − 1)²". Givens card, grouped: "product: (2x − 3)(x + 5)", "minus: (x − 1)²". On "fifteen" row 1 "(2x − 3)(x + 5) = 2x² + 10x − 3x − 15 = 2x² + 7x − 15". On "one" row 2 "(x − 1)² = x² − 2x + 1" with −2x violet. On "sixteen" row 3 "2x² + 7x − 15 − (x² − 2x + 1)" with a red-pencil arrow from the minus to every term inside, hand tag "every sign changes", then "= x² + 9x − 16" in a green answer frame. On "avoid" a red slip "(x − 1)² = x² − 1" writes and is crossed, caption "missing the middle term".

### 6. factorising: common factor, squares, trinomials
> Factorising runs it backwards. Always take out a common factor first. Three x squared minus twenty-seven has a common factor of three, leaving x squared minus nine. That's x squared minus three squared, a difference of two squares, so it's three, times x minus three, times x plus **three**. Now a harder one, two x squared plus seven x plus three. Multiply the number in front of x squared by the number on its own, two times three, which is six. Find two numbers with product six and sum seven. They're six and **one**. Split seven x into six x plus x, take a common factor from each pair, and the same bracket appears twice. So it's two x plus one, times x plus **three**. Watch the tiles agree. Two squares, seven strips and three units snap into exactly one **rectangle**.

Visual: clear change to a factorising board with two short tasks (AT05 we-2 and we-3). Task 1 strip: "Factorise fully: 3x² − 27". On "three" (first) rows: "= 3(x² − 9)" (3 teal, hand tag "common factor first"), "= 3(x − 3)(x + 3)" in a green frame, with the scene 4 strip's a² − b² row glowing. Task 1 shrinks to 32 px at the top. Task 2 strip: "Factorise: 2x² + 7x + 3". On "one" a small product-sum box, 44 px: "product 2 × 3 = 6, sum 7: 6 and 1", hand tag "product 6, sum 7". Rows: "2x² + 6x + x + 3", "= 2x(x + 3) + 1(x + 3)" with both (x + 3) blue, and on "three" (second) "= (2x + 1)(x + 3)" in a green frame. A red slip "(2x + 3)(x + 1)" writes and is crossed, caption "expand to check: 2x² + 5x + 3". On "rectangle" `AlgebraTileGrid` factorise mode at the right: two x² tiles, seven x strips and three units slide in and snap into one rectangle, sides labelled "2x + 1" and "x + 3" in blue, hand tag "one rectangle".

### 7. simplifying a fraction, and its restrictions
> Now the fractions. Simplify x squared minus nine, over x squared plus x minus twelve. Factorise the top and the bottom first. The top is x minus three, times x plus three. The bottom is x minus three, times x plus **four**. Now x minus three is a whole factor of both, so it **cancels**, leaving x plus three over x plus four. And that's as far as it goes. Cancelling the x's to get three quarters is the chocolate mistake again. Try x equals one. It's four fifths, not three **quarters**. One more thing. The original fraction can't use x equals three or minus four, because its bottom would be **zero**. Those restrictions stay, even after **cancelling**.

Visual: clear change to the g01 board (AT06 we-1). Task strip: "Simplify and state any restrictions". Equation strip: "(x² − 9)/(x² + x − 12)". Givens card: "top: x² − 9", "bottom: x² + x − 12". On "four" rows: "top = (x − 3)(x + 3)", "bottom = (x − 3)(x + 4)" (product-sum tag "−3 and 4"). On "cancels" both (x − 3) are boxed blue and cancel with a blue stroke; row "= (x + 3)/(x + 4)" in a green frame, hand tag "whole factor". On "quarters" a red slip "(x + 3)/(x + 4) = 3/4" writes and is crossed, caption "x is a term, not a factor"; `ValueTester` opens at the right: an x slider at 1 with three readouts, 52 px: "original 0.8", "(x + 3)/(x + 4) 0.8", "3/4 0.75" (red). The slider sweeps −6 to 6 (skipping x = 0 by a quick step) while the first two readouts move together and the red one never moves; scoped grey tag "3/4 is wrong for every other x". On "zero" the slider stops at 3 and then −4: the original readout reads "undefined" in amber. On "cancelling" the restriction chips "x ≠ 3, x ≠ −4" write in amber beside the answer frame, hand tag "restriction stays".

### 8. dividing
> To divide by a fraction, multiply by its reciprocal, the fraction flipped. So x over x plus two, divided by x squared over x squared minus four, becomes a **times**. Flip first, then factorise. x squared minus four is x minus two, times x plus **two**. Cancel x plus two, and one x against x squared. That leaves x minus two, over x. The restrictions come from every bottom, and from the fraction we divide by, which can't be zero. So x can't be minus two, two or **zero**.

Visual: clear change to a short board (AT06 we-2). Task strip: "Simplify". Equation strip: "x/(x + 2) ÷ x²/(x² − 4)". On "times" row "= x/(x + 2) × (x² − 4)/x²" with the second fraction flipping on screen, hand tag "flip first". On "two" (in "x plus two") row "= x/(x + 2) × (x − 2)(x + 2)/x²". Then (x + 2) cancels blue, one x cancels against x² (x² shown as x · x, w01's tiles in miniature). Then row "= (x − 2)/x" in a green frame. While the restriction sentence is spoken, the two original bottoms x + 2 and x² − 4 glow amber in turn (x ≠ −2, x ≠ ±2), then the divisor's top x² glows amber (x ≠ 0) with a hand tag "divisor can't be 0". On "zero" the amber chips "x ≠ −2, 0, 2" write beside the answer frame, hand tag "dividing adds restrictions".

### 9. adding with different denominators
> Adding needs a common denominator, just like with numbers. Take three over x plus one, plus two over x minus one. The bottoms share no factor, so the common denominator is their **product**. Multiply each top by the factor it's missing, so it's three times x minus one, plus two times x plus **one**. Expand and collect the top, and you get five x minus one, over the product. Leave the bottom **factorised**, so you can still see any factor that might cancel.

Visual: clear change to a short board (AT06 we-3). Task strip: "Simplify". Equation strip: "3/(x + 1) + 2/(x − 1)". On "product" the denominator "(x + 1)(x − 1)" writes in blue. On "one" row "= [3(x − 1) + 2(x + 1)] / (x + 1)(x − 1)" with each missing factor in blue and the hand tag "missing factor". Row "= (3x − 3 + 2x + 2)/(x + 1)(x − 1)". On "factorised" row "= (5x − 1)/((x + 1)(x − 1))" in a green frame, hand tag "keep it factorised".

### 10. memory aid
> Here's a way to remember it. Factors cancel, terms don't. Think of the chocolate. You can only snap off whole rows, so factorise first to find the rows, then **cancel**.

Visual: stage change to the framed `MemoryAidCard` (1,300 × 600 px). Left slot: the block plate (300 px) with one whole row lifting out (green tick) and one loose square (red cross). Main line, hand font 60 px: "Factors cancel. Terms don't." On "cancel" the key line, 40 px: "Factorise first, then cancel: you can only snap off whole rows." Hold about 2 s.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. Simplify x squared minus four x, over x squared minus sixteen, and state any restrictions on x. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Simplify (x² − 4x)/(x² − 16), stating any restrictions on x." Fraction built at 52 px. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 12. feedback 1 (brief)
> The top has a common factor of x, so it's x times x minus **four**. The bottom is a difference of two squares, x minus four, times x plus **four**. Cancel x minus four, and you're left with x over x plus four. The restrictions come from the original bottom, so x can't be four or minus **four**. Cancelling the x squareds first is the chocolate mistake. They're terms, not **factors**.

Visual: the card shrinks to the top; `GivensStrip`: "top: x² − 4x", "bottom: x² − 16". On "four" (first) "x² − 4x" underlined; row "x(x − 4)" (x teal). On "four" (second) "x² − 16" underlined; row "(x − 4)(x + 4)". Then (x − 4) cancels blue and "x/(x + 4)" lands in a green frame. On "four" (last) amber chips "x ≠ 4, x ≠ −4". On "factors" a red slip "cancel x²: −4x/−16 = x/4" writes and is crossed, caption "x² is a term: no whole rows". Hold about 1 s.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. Write two over x minus three, minus one over x plus two, as a single fraction. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Express 2/(x − 3) − 1/(x + 2) as a single fraction in simplest form." Fractions built at 52 px. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 14. feedback 2 (brief)
> The common denominator is x minus three, times x plus **two**. The top becomes two times x plus two, minus one times x minus **three**. That second bracket is subtracted, so both its signs change, two x plus four, minus x, plus three, which is x plus **seven**. So the answer is x plus seven, over x minus three times x plus two. If you got x plus one, the minus didn't reach the **three**.

Visual: the card shrinks to the top; `GivensStrip`: "2/(x − 3)", "minus 1/(x + 2)". On "two" the common denominator writes in blue. On "three" row "[2(x + 2) − (x − 3)] / (x − 3)(x + 2)" with a red-pencil arrow from the minus to both terms of (x − 3). On "seven" row "2x + 4 − x + 3 = x + 7" and the answer "(x + 7)/((x − 3)(x + 2))" in a green frame. On "three" (last) a red slip "2x + 4 − x − 3 = x + 1" writes and is crossed, caption "the minus changes both signs". Hold about 1 s.

### 15. handoff
> So factorise first, and cancel only whole factors. Did you notice something about the difference of two squares? Its middle terms cancel. Next, that same trick clears a square root. On a softball diamond, a square with eighteen-metre sides, the throw from home to second base is eighteen root two metres. So what's two plus root three, times two minus root **three**?

Visual: the memory line shows small at the top (30 px), then fades. Left: the (a − b)(a + b) tile grid from scene 4 with its middle pieces cancelling again, tag "middles cancel". Right: the painted softball diamond (`ma11-softball-diamond-top-v1.png`, 480 px) with a coded dashed diagonal from home plate to second base labelled "18√2 m" and side labels "18 m". On "three" a chip, 52 px, writes "(2 + √3)(2 − √3) = ?". Chip "Next: how does a conjugate clear a surd?". Hold about 2 s. This is w03's opening frame; scene 16 returns to it silently after the notes.

### 16. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 px in the left 58 to 60 per cent, each one line or two short lines.
> Here are the key notes. Pause the video if you need more time to copy them.

- Expand: every term times every term.
- (a − b)² = a² − 2ab + b²;  (a − b)(a + b) = a² − b².
- Factorise: common factor first, then squares or product-sum.
- Cancel whole factors only. Keep the restrictions.
- Divide: flip, then cancel. Add: common denominator, keep it factorised.

Memory aid (framed card, right side, as in scene 10): *Factors cancel. Terms don't.* Key: *Factorise first: you can only snap off whole rows.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 15's frame exactly. This is the final frame and w03's opening frame.

## Teaching checks

- **Does it explain causes?** Why only factors cancel: cancelling undoes a multiplication; dividing a sum divides every term (2). Why expanding is every term times every term: the rectangle splits into four pieces (3). Why (a − b)² has a middle term and (a − b)(a + b) doesn't: two equal middle pieces against two opposite ones (4). Why every sign changes after a minus: the whole bracket is subtracted (5, feedback 2). Why the product-sum split works: it makes the same bracket appear twice (6). Why restrictions stay: the original fraction is undefined there (7, tester). Why flip before cancelling: division is multiplication by the reciprocal (8). Why keep the bottom factorised: you can still see factors that might cancel (9).
- **Misconceptions addressed:** cancelling terms (1, 7, feedback 1 crossed); (a − b)² = a² − b² (5 crossed); a minus reaching only one term (5, feedback 2 crossed); losing restrictions (7); a trinomial guess not checked (6 crossed).
- **Visual standard, item by item:** 1 the painted block from the first frame, returning in 2, 3, 7, 10; 2 a new stage every 25 to 60 s; 3 `ShareSplit`, the x slider on the tile grid, the snapping rectangle and `ValueTester`, each with live readouts; 4 fixed colour roles; 5 large type; 6 hand tags; 7 g01 boards with framed answers and crossed slips; 8 framed card and five short bullets; 9 the 80-square pile, and 3/4 never tracking the fraction.
- **One idea at a time:** one technique per scene; earlier rows shrink and dim; the special-product strip stays only while scenes 5 to 7 use it.
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; nothing answer-bearing; feedback about 25 to 27 s, one crossed mistake each.
- **Avoided double teaching:** w01's index law appears only as "one x against x squared" in 8.
- **Syllabus coverage:** `ci3ccce138` expand (3, 4, 5), factorise (6, 7, A1), simplify (5, 7); `ci9c1a8604` (7, 8, 9, A1, A2).
- **Out of scope by design:** completing the square (w04); surds (w03); long division.

## Practice questions and model answers

**Attempt 1 (scene 11; pack question 1, original, HSC style, 2 marks suggested, not an official marking scheme).** "Simplify (x² − 4x)/(x² − 16), stating any restrictions on x."
Model answer: x(x − 4)/((x − 4)(x + 4)) = x/(x + 4), x ≠ 4, x ≠ −4. Classic mistake (crossed): cancelling the x² terms first.

**Attempt 2 (scene 13; pack question 2, original, HSC style, 2 marks suggested).** "Express 2/(x − 3) − 1/(x + 2) as a single fraction in simplest form."
Model answer: [2(x + 2) − (x − 3)]/((x − 3)(x + 2)) = (x + 7)/((x − 3)(x + 2)). Classic mistake (crossed): 2x + 4 − x − 3 = x + 1.

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hook | 24/4 = 6; (20 + 4)/4 = 5 + 1 = 6; struck "20 each", 4 × 20 = 80 | 1, 2 |
| Block grid | (x + 1)(x + 3) = x² + 4x + 3; at x = 3: 9 + 9 + 3 + 3 = 24 (shown 9 + 12 + 3) | 3 |
| Slider | x = 1, 2, 3, 4, 5: 8, 15, 24, 35, 48 | 3 |
| AT05 we-1 | (2x − 3)(x + 5) = 2x² + 7x − 15; (x − 1)² = x² − 2x + 1; result x² + 9x − 16; crossed x² − 1 | 5 |
| AT05 we-2 | 3x² − 27 = 3(x − 3)(x + 3) | 6 |
| AT05 we-3 | product 6, sum 7: 6 and 1; (2x + 1)(x + 3); crossed (2x + 3)(x + 1) = 2x² + 5x + 3 | 6 |
| AT06 we-1 | (x − 3)(x + 3)/((x − 3)(x + 4)) = (x + 3)/(x + 4), x ≠ 3, −4; at x = 1: 4/5 against 3/4 | 7 |
| AT06 we-2 | (x − 2)/x, x ≠ −2, 0, 2 | 8 |
| AT06 we-3 | 3(x − 1) + 2(x + 1) = 5x − 1; (5x − 1)/((x + 1)(x − 1)) | 9 |
| A1 | x/(x + 4), x ≠ 4, −4 | 11, 12 |
| A2 | 2x + 4 − x + 3 = x + 7; crossed x + 1 | 13, 14 |
| Handoff | 18√2 m; (2 + √3)(2 − √3) left as "?" | 15 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy (16 Nov, scratchpad `checks.py`); Codex to re-check.

- (x + 1)(x + 3) = x² + 4x + 3; values at x = 1 to 5: 8, 15, 24, 35, 48.
- (2x − 3)(x + 5) − (x − 1)² = x² + 9x − 16; slip with x² − 1 gives x² + 7x − 14 (not shown).
- 3x² − 27 = 3(x − 3)(x + 3); 2x² + 7x + 3 = (2x + 1)(x + 3); (2x + 3)(x + 1) = 2x² + 5x + 3.
- (x² − 9)/(x² + x − 12) = (x + 3)/(x + 4) for x ≠ 3, −4; equals 3/4 only at x = 0.
- x/(x + 2) ÷ x²/(x² − 4) = (x − 2)/x, x ≠ −2, 0, 2.
- 3/(x + 1) + 2/(x − 1) = (5x − 1)/((x + 1)(x − 1)).
- A1: (x² − 4x)/(x² − 16) = x/(x + 4). A2: 2/(x − 3) − 1/(x + 2) = (x + 7)/((x − 3)(x + 2)); slip numerator x + 1.

## Memory aid check

- **"Factors cancel. Terms don't."** Original wording of a standard rule. Meaning, as said: cancelling divides top and bottom by the same factor, so it needs a factor of the whole top and the whole bottom. Assumption checked: "cancel" means dividing numerator and denominator by a common non-zero factor; the restriction for that factor being zero is kept (key note 4). The block image is accurate: a whole row is a factor of the area (rows × columns); a loose square is not. Introduced after the cause (2) and the method (7).
- **Considered, not used:** "Only cancel what multiplies" (accurate but abstract; the chocolate line carries the same meaning with a picture).

## Narration length estimate

Recounted for Revision 2 (16 Nov 2026). Counted by script with the build parser rules: **6,376 characters**, 16 scene headings. Characters per scene (1 to 16): 450, 536, 643, 372, 484, 761, 637, 461, 448, 165, 128, 369, 110, 374, 363, 75.

At 13.3 characters per second the speech before the notes is about 474 s. Holds: two 10 s countdowns, the memory-card hold (2 s), two feedback holds (2 s), the handoff hold (2 s), about 12 s of settling (sharing, the slider sweep, the snapping tiles, the tester sweep); the key-notes scene is 45 s. Total **about 557 s**, inside the band and under the 570 s cap.

Reserve trims if the voiced take runs long: scene 3's "Change x, and both forms still agree." (keep the slider sweep silent, about 3 s); scene 9's last clause "so you can still see any factor that might cancel" (keep the tag, about 3 s).

## Scene list and build ids

Lesson key `m-a11w02` (route math-a11-w02). Explainer folder `src/explainer/lessons/math-a11-w02`; build inputs in `docs/production/claude-pm/lessons/math-a11-w02/` (at voicing).

In order (16 scene headings): hook-share, factors-terms, expand-rectangle, special-products, worked-expand, factorising, fraction-restrictions, dividing, adding, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (seconds from the estimate):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 77 s | 1 to 2 | The painted block shared into rows; the 80-square pile; factor and term panels on the block |
| 77 to 127 s | 3 | Tile grid laid on the block, then the x slider with two agreeing readouts |
| 127 to 156 s | 4 | Two special-product tile grids, middles shown and cancelled |
| 156 to 249 s | 5 to 6 | g01 boards: expand and simplify; factorise, with tiles snapping into a rectangle |
| 249 to 299 s | 7 | Fraction board and the value tester (undefined at the restrictions) |
| 299 to 363 s | 8 to 9 | Short dividing and adding boards |
| 363 to 377 s | 10 | Framed memory card |
| 377 to 473 s | 11 to 14 | Question cards and countdowns, then feedback with givens strips and crossed slips |
| 473 to 502 s | 15 | Difference-of-squares tiles beside the softball diamond |
| 502 to 547 s | 16 | Key notes with the framed card, then a silent return to scene 15's frame |

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: w01's last frame continues into 1 (camera continue); 1 to 2 camera continue; 2 to 3 camera push onto the block; 3 to 4 clear change; 4 to 5, 5 to 6, 6 to 7 clear change (new task); 7 to 8 to 9 clear change; 9 to 10 clear change to the card; attempts and feedback: the card shrinks to the top; 14 to 15 board clear; 15 to 16 fade to the notes board, then a silent return to scene 15's frame.

Holds: attempt-1, attempt-2 (10 s countdown after the speech). key-notes is 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11w02-rev1-learning-review.md`, `science_check` = `checks/m-a11w02-rev1-maths-check.md`.

## Assets

Inspected before choosing (16 Nov, read only): no chocolate or confectionery plate exists in any course. `maths/ma12-choc-chip-v1.png` and `ma12-cookie-v1.png` are s06's cookie (wrong object, and s06's anchor). `ma12-card-texture-v1.png` is a plain card texture (usable for the share mats' backing if wanted; not required).

Need (painted, new; see the Codex asset brief): `ma11-chocolate-block-v1`, `ma11-chocolate-row-v1`. Needed from w03's brief for the handoff frame: `ma11-softball-diamond-top-v1`.

Coded: share mats, ghost squares, the tile grid and its regions, the tester, working boards, question cards, countdown, hand tags, the framed card, key notes.

### Studio kit use and additions

Uses: `MATH_ROLES`, `Role`, `HandTag`, `DrawnMark`, `PlateImg`, `LiveReadoutBoard`, `ParameterSlider`, `WorkingBoard` parts, `StudioCancellation`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`, `GivensStrip`.

Additions:
1. **`AlgebraTileGrid`** (kit-needs item 2): a rectangle split into labelled regions from two bracket factors (signed regions for minus terms, violet middle regions); modes `overPlate` (registered to a plate's sidecar grid), `resize` (driven by an x value), `cancelMiddles`, and `factorise` (loose tiles slide and snap into the rectangle). Check: region areas always sum to the expanded expression at the current x.
2. **`ShareSplit`**: row plates slide from the block to share mats; a ghost-pile mode with a running tally. Check: tally = mats × pile size.
3. **`ValueTester`**: an x slider with up to three live readouts computed from given functions, an "undefined" state where a denominator is zero, and skip-points. Check: readouts are computed, not typed, and the undefined state appears exactly at the excluded values.

## Codex asset brief (Maths A11 W02, a block of chocolate)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-w02.md`, route entry math-a11-w02. Paint after the learning review and maths check pass and root gives the go-ahead. Save to `public/assets/maths/`. Every plate: **transparent PNG with a true alpha channel**, clean edges (check on black and white); ink and watercolour in the house style, matched to `maths/ma12-cookie-v1.png`; at least 8 per cent clear margin; no text, labels, letters, numbers, logos, brand marks, wrapper print, people, hands, faces, backdrop, glow or ground shadow. Never stretch; keep the native aspect ratio.

1. `ma11-chocolate-block-v1.png` (2000 × 1400 px): an unwrapped block of milk chocolate seen **from directly above** (orthographic top view, no perspective), exactly **4 rows of 6 squares**, each square identical with a slightly raised plain face (no embossed letters) and clear snap grooves between squares. The block's outer edge is straight. A small piece of plain silver foil may sit under one end, with no print.
2. `ma11-chocolate-row-v1.png` (2000 × 1400 px canvas, same scale): one row of 6 squares from the same block, painted so that it registers exactly over any row of plate 1.

Sidecar JSON (`ma11-chocolate-block-v1.json`): the block's outer rectangle and every groove line in px (code lays the tile grid on the grooves); (`ma11-chocolate-row-v1.json`): its rectangle and the offset that places it over row 1, 2, 3 or 4 of plate 1. Report a registration test (row over each row of the block) with misregistration under 3 px at 2000 px.

Report inspection on the paper background (`#f6f1e7`) at 300 px and 600 px, the alpha check and the grid measurements. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-w02-provenance.json`. The block is also needed for w01's handoff frame, so paint it before the w01 build.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the block arithmetic and the grid regions (author note a) match the plate's 4 rows of 6.
3. Confirm the value-tester claim is scoped: 3/4 matches (x + 3)/(x + 4) only at x = 0, and the screen tag says "every other x"; the slider does not stop at 0.
4. Confirm every restriction (7, 8, feedback 1) is complete and comes from the original denominators (and, in 8, from the divisor, which cannot be zero).
5. Confirm the six site examples are unchanged from the pack and both attempts carry every demand.
6. Confirm the syllabus quotes match the crosswalk exactly; no site module or outcome label in learner copy or metadata.
7. Confirm no em dash (U+2014), Australian spelling, the narration counts by script and every bold cue quoted in its scene's Visual in spoken order.
8. Confirm scene 1 opens on w01's final frame and scene 15's frame matches w03's opening frame.

## YouTube metadata (draft)

Title: Factorise Before You Cancel: Algebraic Fractions | Year 11 Maths Advanced

(Title length: 74 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/algebraic-techniques-and-inequalities/lesson06.sa.html

Twenty-four squares of chocolate shared four ways is six each, but crossing out the 4s in (20 + 4)/4 hands out 80 squares. See why only factors cancel, expand and factorise on a tile grid (common factors, the difference of two squares and trinomials like 2x² + 7x + 3), then simplify, divide and add algebraic fractions and keep their restrictions. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Expanding and factorising lesson: https://hscscience.com.au/subjects/maths-advanced/year11/algebraic-techniques-and-inequalities/lesson05.sa.html

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Working with functions.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Expand, factorise and simplify algebraic expressions"
"Simplify expressions involving algebraic fractions"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

Builds on: Index laws (previous video); Year 10 expanding. Next: Surds and conjugates.

#Year11Maths #MathsAdvanced #Algebra #HSCScience

## Open decisions

- **1. Two site lessons, one video (root).** Lessons 5 and 6 are combined because the outline gives them one learner question. Six worked examples sit near the top of the band; dividing and adding are kept short (scenes 8 and 9) and carry no separate crossed slip. If the learning review finds 8 and 9 rushed, the fallback is to move dividing to the practice video p01 (saves about 330 characters) and lengthen 9.
- **2. The value tester and x = 0 (learning review).** (x + 3)/(x + 4) happens to equal 3/4 at x = 0. The tester steps over 0 and the tag says "for every other x". Confirm this does not mislead; the alternative is to show x = 0 honestly with a grey tag "a coincidence at one point".
- **3. Plate prefix `ma11-` (root),** as w01.

## Review notes

- Revision 2 (16 Nov 2026): the independent learning review (`../checks/m-a11-w02-learning-review.md`) is resolved; see the Revision 2 section. Next: Codex maths check and error check, then voicing and a build to grade A.
- Revision 1 has had no independent review. Next: student learning review (trace from w01 and Year 10 expanding only; check that the 80-square pile makes the factor-term difference stick; that the tile grid on the block is read as area, not as a counting trick; that the product-sum split is followable at playback speed; that restrictions feel necessary from the tester; that 8 and 9 are not rushed), then the Codex maths check and error check, then voicing and a build to grade A.
- The sharing, the tile grid on the plate, the snapping rectangle and the tester carry the explanation; judge them at playback speed.
