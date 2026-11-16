# Maths A11 W03: How does a conjugate clear a surd from a denominator? Surds and their simplest form, adding and multiplying surds, rationalising with root over root, and the conjugate found by search (design)

Status: Revision 2 (16 Nov 2026): independent learning review resolved (see "Revision 2" below); not voiced. Revision 1 (16 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`, d01 Revision 6 and s01 Revision 4 patterns). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,710 characters by script (build parser rules), 15 scene headings, about 506 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (16 Nov): learning review resolved

Review: `../checks/m-a11-w03-learning-review.md` (summary `../checks/m-a11-w01-w31-learning-review-summary.md`), with root's rulings of 16 Nov. Findings by the review's numbers:

1. Should fix, scene 1 (a rule without a cause): **accepted**, reviewer's wording, with a grey tag "÷ 1.414…? hard to picture" and a chip "whole number underneath".
2. Optional, scene 6 ("last video's question"): **accepted** (visual only): the dimmed scene 1 chip turns its "?" into "1" with that hand tag.

Narration now 5,710 characters by script, about 506 s with holds (see "Narration length estimate"). Stage-plan times below are Revision 1 approximations; frames come from the recording's word timings. Every changed value was rechecked with SymPy (scratchpad `rev2_verify.py`); Codex's maths check remains the authority.

Scope: third video of Year 11 Mathematics Advanced (2024), outline order 3, Working with functions, Algebraic techniques. Pre-design pack: `../pre-design/maths-a11/math-a11-w03.md`. Site lessons (read through the pack, read only): `algebraic-techniques-and-inequalities/lesson07.sa.html` (Surds), SHA256 `9309a9d4923d344bdfb48024511a32effc3aa9866318162308513c539b882e32`, and `lesson08.sa.html` (Conjugates and Rationalising Denominators), SHA256 `443178745beb83087ceaeb3a05e930e930d21298481b556c5ff11f8af218bf86`. All six site worked examples are used with the site's numbers unchanged. Route entry: `math-a11-w03`. Visual system: maths studio kit; painted plate for the field (prefix `ma11-`); algebra, the root extraction and the conjugate search coded.

Owner rules applied: as w01 and w02.

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Working with functions, Algebraic techniques; NESA codenames, official `code` field empty), quoted from `../../programme/syllabus/maths-advanced-2024-y11-crosswalk.json`:

- `ci554a24b4`: "Expand and simplify expressions involving surds"
- `ci1ca81758`: "Identify a conjugate of √a ± √b, and rationalise the denominators of expressions of the form a/(√b ± √c) and (√a ± √d)/(√b ± √c), where a, b, c and d are positive rational numbers"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

**Boundary:** starts from w02's handoff frame (difference-of-squares tiles beside the softball diamond, "18√2 m", chip "(2 + √3)(2 − √3) = ?"). Teaches: what a surd is; simplifying with the largest perfect-square factor (√(ab) = √a√b for a, b ≥ 0); adding like surds (AT07 we-1); multiplying and expanding (AT07 we-2 and we-3); rationalising a single-surd denominator (AT08 we-1 and the field's 30/√2); finding and using the conjugate (AT08 we-2); surd over a binomial surd (AT08 we-3). Stops at rationalising. Not taught: solving quadratics with surd answers (w04); surds in trigonometric exact values (t-strand); cube-root surds.

## Decisions

### Revision 1 (16 Nov 2026)

- **Anchor: a softball diamond, a square with 18-metre sides (painted plate, live).** Chosen over the pack's A4 paper (math-a12-f05's anchor is folding paper, too close), the futsal grid (no object that reads at a glance) and a TV diagonal (16:9 gives √337, not a teaching number). A diamond is a real square whose diagonal people care about (the throw from home plate to second base), so √2 arises naturally: the diagonal is 18√2 m, and the reverse question (a 30 m diagonal) gives 30/√2, a surd on the bottom. The anchor returns in scene 5 (30/√2 rationalised to 15√2 ≈ 21.2 m) and the memory card badge. Sport category; no Year 12 Maths video uses a softball or baseball field. No players are shown.
- **Simulations (standard item 3).**
  1. `DiagonalDraw` (scene 1): on the plate, a coded dashed throw line draws from home plate to second base while a readout climbs "0 → 25.455844… m" and then rewrites as "18√2 m".
  2. `RootExtract` (scene 2, kit-needs item 3): 648 under the root sign splits into "324 × 2"; 324 rewrites as 18² and steps out of the root as 18. Reused at small size in 3 and feedback 1.
  3. `ConjugateSearch` (scene 6, new part on `ParameterSlider` and `LiveReadoutBoard`): an amber slider k sweeps 1 to −2 for the multiplier "2 + k√3"; live readouts "whole part 4 + 3k" (ink) and "√3 part 2 + 2k" (blue), with a blue bar for the √3 part shrinking to nothing at k = −1, where the product reads exactly 1. The visual surprise happens on the slider.
- **Colour roles (fixed for the whole video).**
  - **the surd part (√2, √3, like surds): blue** (`MATH_BLUE`);
  - **perfect-square factors that step out: teal** (`MATH_TEAL`);
  - **the multiplier, the "1 in disguise" and the conjugate: amber** (`MATH_AMBER`);
  - **the middle terms that cancel: violet**;
  - **answer: green**; **mistake: red**; ink for whole numbers and working.
- **Large type, handwritten voice.** As w01. Hand tags: "never ends", "largest square", "steps out", "like surds only", "√5 × √5 = 5", "× 1, in disguise", "same value", "still a surd", "middle sign flipped", "middles cancel", "surds square away". The diamond plate at least 480 px when it carries the idea.
- **Stage changes (standard item 2):** the field and the throw (1); root extraction (2); g01 board (3); multiply and expand board (4); rationalising with the field (5); the conjugate search (6); g01 boards (7, 8); memory card (9); question cards (10 to 13); the rug for w04 (14); key notes (15).
- **Worked examples (g01 layout).** 3: AT07 we-1 (crossed "√104", caption "can't add under the root"). 4: AT07 we-2 and we-3 (crossed none; the scene's job is method). 5: AT08 we-1 plus the field (crossed "6√3/3 left unsimplified" as a grey tag, not a red slip). 7: AT08 we-2 (crossed "multiply by −2 − √3", caption "both signs flipped: still a surd"). 8: AT08 we-3 (no slip). Feedback scenes: givens strip, framed answer, one crossed slip each.
- **Memory aid.** Framed card: "Same terms, opposite middle sign." Key: "(a + √b)(a − √b) = a² − b: the middles cancel and the surds square away." Badge: the diamond with its diagonal.
- **Visual surprise.** On the conjugate search the √3 bar shrinks and vanishes at exactly one setting, and the whole product collapses to 1 (6, then 7's denominator).
- **Learner question (outline, kept).** Answer chain: a surd is an irrational root (2); simplify by pulling out squares (2, 3); multiply surds, and a surd times itself is rational (4); a single root on the bottom clears by multiplying by itself over itself (5); a binomial bottom needs the conjugate, because it makes a difference of two squares (6, 7, 8).
- **Why rationalise (stated once, scoped).** "Maths prefers the surd on top": the form is the convention for a simplest exact answer and makes like surds easy to see and compare. No claim that a surd denominator is wrong.
- **Plain meanings at first use.** Surd: "a root whose value is irrational, a decimal that never ends or repeats". Like surds: "the same number under the root". Rationalise the denominator: "rewrite the fraction so its bottom has no surd". Conjugate: "the same two terms with the middle sign flipped".
- **Conditions.** √(ab) = √a√b is stated for non-negative a and b in the key notes. Syllabus condition "positive rational numbers" is met by every example (2 = √4 in 4/(2 + √3)).
- **Attempts (pack questions, original).** A1: √48 − √27 + √12 = 3√3; crossed "√33". A2: (√6 + √2)/(√6 − √2) = 2 + √3; crossed "(√6 + √2)/4" (only the bottom multiplied).
- **Mistake scene:** none separate. Adding under the root (3, feedback 1 crossed); not the largest square (2, tag); flipping both signs (7 crossed); multiplying only the bottom (feedback 2 crossed); not simplifying at the end (5 tag).
- **Handoff (outline next: w04, "Which method solves a given quadratic most efficiently?").** Scene 14 shows the painted rug with "x m" and "(x + 2) m", "area 10 m²", "x = −1 + √11 ?" and the chip "Next: solving quadratics". This frame is w04's opening frame.
- **Site sources used:** lesson 7 `simplifying-a-surd-means-extracting`, `what-a-surd-is-and` (definition, √9 against √10), `model` (we-1 to we-3), traps; lesson 8 `the-conjugate-kills-the-surd`, `rationalising-a-single-surd-denominator`, `model` (we-1 to we-3). The site's "kills" wording is not used.
- **Site corrections:** none found for lessons 7 and 8.
- **Entry knowledge (route):** w01 (a^(1/2) as a square root); w02 (expanding binomials, difference of two squares); Year 9 and 10 Pythagoras.
- **Draft route entry (root to adopt).** id `math-a11-w03`; syllabusActions `ci554a24b4`, `ci1ca81758`; start "Recall that the square root of a product is the product of square roots, and difference of two squares." Stop "Simplify, add, multiply and expand surds; rationalise single-surd and binomial-surd denominators using a conjugate." Next: "math-a11-w04: a rug of area 10 m² whose width is −1 + √11".
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Field: the diamond is drawn as a square of side 18 m (a fastpitch softball base path is 60 ft, about 18.29 m; the lesson states 18 m as this field's size, not a rule). Diagonal √648 = 18√2 = 25.4558 m. Reverse: 30/√2 = 15√2 = 21.2132 m.
  (b) Conjugate search: (2 + √3)(2 + k√3) = (4 + 3k) + (2 + 2k)√3; √3 part zero only at k = −1, giving 1. Slider stops: 1, 0, −0.5, −1 (hold), −2 (overshoot shown briefly: whole −2, √3 part −2), back to −1.
  (c) (2 + √3)√3 = 3 + 2√3; (2 + √3)(−2 − √3) = −7 − 4√3.
  (d) Pronunciations: "root two"; "eighteen root two"; "root six hundred and forty-eight"; "two plus root three"; "root ten plus two, all over three".

Main question: *A softball diamond is a square with 18 m sides, so home to second is 18√2 m. Turn it round: a 30 m diagonal needs sides of 30/√2 m, a surd on the bottom. How does a conjugate clear a surd from a denominator?*
Entry knowledge (w01, w02, Pythagoras): square roots as half powers; expanding and the difference of two squares.
Stops after: simplifying, adding, multiplying and expanding surds; rationalising single and binomial surd denominators.
Handoff: math-a11-w04: the rug, x(x + 2) = 10, "x = −1 + √11 ?".

## Script and shots

Cue words in **bold** trigger the visual change. Colour roles (fixed): surd part blue; perfect squares teal; multiplier and conjugate amber; cancelling middles violet; answer green; mistake red; ink otherwise. Header strip "MATHEMATICS ADVANCED · SURDS". Scene headings in the hand font, 44 px.

### 1. hook: home to second base
> Here's that softball diamond, a square with eighteen-metre sides. How far is the throw from home plate to second base? It's the diagonal, so by Pythagoras it's the square root of eighteen squared plus eighteen squared, which is root six hundred and forty-**eight**. A calculator gives twenty-five point four five five, and the digits never stop. The exact answer is eighteen root two. Now turn it round. If a field's diagonal must be exactly thirty metres, each side is thirty over root **two**. That's a square root on the bottom of a fraction. Dividing by a never-ending decimal is hard to picture or compare, so we rewrite the fraction with a whole number underneath. So how do we clear a surd from a **denominator**?

Visual: opens on w02's handoff frame exactly (tiles at the left, diamond at the right with "18√2 m" and "18 m" sides, chip "(2 + √3)(2 − √3) = ?"). The tiles slide off; the chip moves to the top right and dims (it is answered in 6). The diamond (`ma11-softball-diamond-top-v1.png`) grows to 620 px, centre left; heading writes "Home plate to second base". `DiagonalDraw`: a coded dashed throw line draws from the home plate point to the second base point (sidecar positions); side labels "18 m" in ink; a right-angle mark at first base. Rows at the right, 52 px: "d² = 18² + 18²", on "eight" "d = √648". Readout under it climbs "25.455844…" with the dots running, hand tag "never ends"; then "= 18√2 m" writes beside it (√2 blue). On "two" a second, coded square outline of the field labels its diagonal "30 m" and its side "30/√2 m" (√2 blue, on the bottom, circled amber); while the next sentence is spoken a grey hand tag "÷ 1.414…? hard to picture" writes under it, then a target chip "whole number underneath" (green outline). On "denominator" the heading writes "How do we clear a surd from the bottom?".

### 2. what a surd is, and its simplest form
> First, what's a surd? It's a root whose value is irrational, a decimal that never ends or repeats. Root nine is three, so it's not a surd, but root two is. To simplify a surd, split the number under the root into a perfect square times what's left, because the root of a product is the product of the roots. Six hundred and forty-eight is three hundred and twenty-four times two, and three hundred and twenty-four is eighteen squared. So eighteen steps out of the root, and root six hundred and forty-eight is eighteen root **two**. Always use the largest perfect square you can find.

Visual: stage change to the `RootExtract` board. Two chips at the top, 44 px: "√9 = 3: not a surd" (ink) and "√2 = 1.41421…: a surd" (blue), hand tag "never ends". The rule "√(ab) = √a × √b" writes at 44 px. Under it, 64 px: "√648"; "648" splits into "324 × 2" (324 teal); 324 rewrites as "18²"; on "two" the teal 18 steps out in front of the root sign, leaving "18√2" in a green frame, hand tag "steps out". On the last sentence a grey side row: "√648 = √(4 × 162) = 2√162: not finished" with hand tag "largest square".

### 3. worked example 1: adding surds
> Surds add like letters. Only like surds combine, with the same number under the root. Simplify root seventy-two, plus root fifty, minus root eighteen. Root seventy-two is root thirty-six times root two, six root two. Root fifty is five root two, and root eighteen is three root **two**. Now they're all root twos, so six plus five minus three gives eight root **two**. You can't add the numbers under the roots. The answer isn't root one hundred and **four**.

Visual: clear change to the g01 board (AT07 we-1). Task strip: "Simplify". Equation strip, 52 px: "√72 + √50 − √18". Givens card: "36 × 2", "25 × 2", "9 × 2" (perfect squares teal). On "two" (first bold) three small `RootExtract` rows run in turn: "√72 = 6√2", "√50 = 5√2", "√18 = 3√2" (√2 blue), hand tag "like surds only". On "two" (second) row "6√2 + 5√2 − 3√2 = 8√2" in a green answer frame. On "four" a red slip "√(72 + 50 − 18) = √104" writes and is crossed, caption "can't add under the root".

### 4. multiplying and expanding
> Multiplying is friendlier. Multiply the numbers outside, and multiply the numbers under the roots. Two root three times five root six is ten root eighteen, which simplifies to thirty root **two**. And a surd times itself is just the number under it, so root five times root five is five. That's all you need to expand brackets. Take root five plus two, times root five minus three. Every term times every term gives five, minus three root five, plus two root five, minus **six**. Collect the whole numbers and the surds separately, and you get minus one minus root **five**.

Visual: clear change to a two-task board (AT07 we-2 and we-3). Task 1 strip: "Simplify (2√3)(5√6)". On "two" row "= 10√18 = 10 × 3√2 = 30√2" in a green frame. Chip at 44 px: "√5 × √5 = 5" with hand tag "a surd times itself". Task 1 shrinks to 32 px. Task 2 strip: "Expand and simplify (√5 + 2)(√5 − 3)". A 2 × 2 coded grid (w02's tile grid, small) fills its four cells: "5", "−3√5", "2√5", "−6"; on "six" the row "= 5 − 3√5 + 2√5 − 6". On "five" (last) the whole numbers gather (ink) and the surds gather (blue): "= −1 − √5" in a green frame.

### 5. a single root on the bottom
> Now the bottom of a fraction. Rationalising the denominator means rewriting the fraction so its bottom has no surd. The trick is to multiply by one, in disguise. For six over root three, multiply the top and the bottom by root three. The bottom becomes root three times root three, which is **three**. So it's six root three over three, which simplifies to two root **three**. The value hasn't changed, only its form. Back on the field, thirty over root two becomes thirty root two over two, which is fifteen root two, about twenty-one point two **metres**.

Visual: clear change to the g01 board (AT08 we-1). Task strip: "Rationalise the denominator of 6/√3". Equation strip: "6/√3". A large amber "× √3/√3" writes beside it with the hand tag "× 1, in disguise". On "three" the denominator row "√3 × √3 = 3". On "three" (second) "= 6√3/3 = 2√3" in a green frame, with a grey tag "6√3/3: simplify it". A small check readout, 44 px: "6/√3 = 3.4641…" and "2√3 = 3.4641…", hand tag "same value". On "metres" the diamond returns at 420 px at the right with its coded 30 m diagonal; row "30/√2 × √2/√2 = 30√2/2 = 15√2 ≈ 21.2 m" in a green frame; side labels update to "15√2 m".

### 6. finding the conjugate
> But what about four over two plus root three? Multiplying by root three doesn't work. Two plus root three, times root three, is three plus two root three, so there's still a surd on the **bottom**. We need a multiplier that wipes out the surd. Let's search for one. Multiply two plus root three by two plus k root three, and watch the root three part as k **changes**. It vanishes at just one setting, k equals minus one, the multiplier two minus root **three**. That's the conjugate, the same two terms with the middle sign flipped. Two plus root three, times two minus root three, is a difference of two squares, four minus three, which is just **one**.

Visual: stage change to `ConjugateSearch`. Top: "4/(2 + √3)". On "bottom" a red-pencil trial row "(2 + √3) × √3 = 3 + 2√3" with the 2√3 circled, hand tag "still a surd". Centre: the multiplier "2 + k√3" with k amber; an amber `ParameterSlider` "k" (800 px) below. `LiveReadoutBoard`, 52 px: "whole part: 4 + 3k" and "√3 part: 2 + 2k", with a blue horizontal bar for the √3 part. On "changes" the slider moves 1 → 0 → −0.5 (readouts 7 and 4, 4 and 2, 2.5 and 1; the bar shrinks), overshoots to −2 briefly (−2 and −2, the bar turns the other way) and returns. On "three" (in "two minus root three") it settles at −1: "√3 part 0", the bar vanishes, "whole part 1"; the multiplier reads "2 − √3" with the minus circled amber, hand tag "middle sign flipped". On "one" (last) the expansion writes as a 2 × 2 grid: "4", "−2√3", "+2√3", "−3", the two middle cells cancel in violet (w02's "middles cancel" tag), "= 4 − 3 = 1" in a green frame; the dimmed chip "(2 + √3)(2 − √3) = ?" from scene 1 glows, its "?" becomes "1", and a small hand tag "last video's question" writes beside it.

### 7. worked example 2: using the conjugate
> So, rationalise four over two plus root three. Multiply the top and the bottom by the conjugate, two minus root three. The bottom is four minus three, which is **one**. The top is four times two minus root three, which is eight minus four root **three**. Over one, the answer is just eight minus four root three. Flipping both signs doesn't work. Minus two minus root three gives minus seven minus four root three on the bottom, and the surd is still **there**.

Visual: clear change to the g01 board (AT08 we-2). Task strip: "Rationalise the denominator of 4/(2 + √3)". Equation strip: "4/(2 + √3)". Givens card: "conjugate of 2 + √3: 2 − √3" (amber). On "one" row "bottom: (2 + √3)(2 − √3) = 4 − 3 = 1". On "three" row "top: 4(2 − √3) = 8 − 4√3", then "= 8 − 4√3" in a green frame. On "there" a red slip "× (−2 − √3)/(−2 − √3): bottom = −7 − 4√3" writes and is crossed, caption "both signs flipped: still a surd".

### 8. worked example 3: surd over surd
> It works with two surds as well. Rationalise root two, over root five minus root two. The conjugate is root five plus root **two**. The bottom is a difference of two squares, five minus two, which is **three**. The top is root two times root five plus root two, which is root ten plus **two**. So the answer is root ten plus two, all over three.

Visual: clear change to the g01 board (AT08 we-3). Task strip: "Rationalise the denominator of √2/(√5 − √2)". Givens card: "conjugate: √5 + √2" (amber) on "two". On "three" row "bottom: (√5)² − (√2)² = 5 − 2 = 3" with the violet "middles cancel" tag. On "two" (last) row "top: √2(√5 + √2) = √10 + 2", then "= (√10 + 2)/3" in a green frame.

### 9. memory aid
> Here's a way to remember the conjugate. Same terms, opposite middle sign. It turns the bottom into a difference of two squares, so the middles cancel, and the surds square **away**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the diamond badge (260 px) with its diagonal "18√2". Main line, hand font 60 px: "Same terms, opposite middle sign." On "away" the key line, 40 px: "(a + √b)(a − √b) = a² − b". Hold about 2 s.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. Simplify root forty-eight, minus root twenty-seven, plus root twelve. Pause here to answer.

Visual: `QuestionCard`, 40 px: "Simplify √48 − √27 + √12." Expression at 52 px. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 11. feedback 1 (brief)
> Pull out the largest perfect squares. Root forty-eight is four root three, root twenty-seven is three root three, and root twelve is two root **three**. Now they're like surds, so four minus three plus two gives three root **three**. Adding under the roots to get root thirty-three is the slip. Only like surds **combine**.

Visual: the card shrinks to the top; `GivensStrip`: "16 × 3", "9 × 3", "4 × 3" (teal). On "three" (first) three small `RootExtract` rows: "√48 = 4√3", "√27 = 3√3", "√12 = 2√3", each term underlined in the card as it is used. On "three" (second) row "4√3 − 3√3 + 2√3 = 3√3" in a green frame. On "combine" a red slip "√(48 − 27 + 12) = √33" writes and is crossed, caption "can't add under the root". Hold about 1 s.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. Rationalise the denominator of root six plus root two, over root six minus root two. Pause here to answer.

Visual: `QuestionCard`: "Rationalise the denominator of (√6 + √2)/(√6 − √2), giving your answer in simplest form." Fraction at 52 px. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 13. feedback 2 (brief)
> Multiply the top and the bottom by the conjugate, root six plus root **two**. The bottom is six minus two, which is **four**. The top is root six plus root two, all squared. That's six, plus two root twelve, plus two, which is eight plus four root **three**. Divide both terms by four, and the answer is two plus root **three**. If you multiplied only the bottom, you changed the value of the **fraction**.

Visual: the card shrinks to the top; `GivensStrip`: "top: √6 + √2", "bottom: √6 − √2". On "two" the amber "× (√6 + √2)/(√6 + √2)". On "four" row "bottom: 6 − 2 = 4". On "three" row "top: (√6 + √2)² = 6 + 2√12 + 2 = 8 + 4√3" (√12 → 2√3 with a small teal step-out). On "three" (last) row "(8 + 4√3)/4 = 2 + √3" in a green frame, with a hand tag "÷ 4: both terms". On "fraction" a red slip "(√6 + √2)/4" writes and is crossed, caption "top and bottom, or the value changes". Hold about 1 s.

### 14. handoff
> So a conjugate turns the bottom into a difference of two squares, and the surd squares away. Surds also turn up as answers. Next, a rug that's two metres longer than it is wide covers ten square metres. Its width works out to minus one plus root eleven metres. How do we get **that**?

Visual: the memory line shows small at the top, then fades. Board clears to the painted rug (`ma11-rug-top-v1.png`, 560 px wide, top view) on a coded floor line; coded side labels "x m" and "(x + 2) m" in ink; a chip "area 10 m²" and the row, 52 px, "x(x + 2) = 10". On "that" the chip "x = −1 + √11 ?" writes with √11 blue and a large "?". Chip "Next: which method solves a quadratic?". Hold about 2 s. This is w04's opening frame; scene 15 returns to it silently after the notes.

### 15. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book". Bullets 38 px in the left 58 to 60 per cent.
> Here are the key notes. Pause the video if you need more time to copy them.

- Surd: an irrational root. √(ab) = √a√b for a, b ≥ 0.
- Simplify with the largest square: √72 = 6√2.
- Add like surds only. √a × √a = a.
- Rationalise: multiply top and bottom by the same thing.
- Conjugate of a + √b is a − √b: the product is a² − b.

Memory aid (framed card, right side, as in scene 9): *Same terms, opposite middle sign.* Key: *(a + √b)(a − √b) = a² − b.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 14's frame exactly. This is the final frame and w04's opening frame.

## Teaching checks

- **Does it explain causes?** Why √648 = 18√2: √(ab) = √a√b and 324 = 18² (2). Why only like surds add: they are like terms, the same "unit" (3). Why √5 × √5 = 5: that is what a square root means (4). Why multiplying by √3/√3 is allowed: it is 1, so the value is unchanged (5). Why √3 alone fails for 2 + √3: the product still has a surd (6). Why the conjugate works: it makes a difference of two squares, so the middle terms cancel and each surd is squared (6, 7, 8). Why multiply top and bottom: otherwise the value changes (feedback 2).
- **Misconceptions addressed:** adding under the root (3, feedback 1 crossed); not the largest square (2 tag); flipping both signs (7 crossed); multiplying only the bottom (feedback 2 crossed); unfinished simplifying (5 tag).
- **Visual standard, item by item:** 1 the painted diamond from the first frame, returning in 5, 9 and the throw line; 2 a new stage every 25 to 55 s; 3 `DiagonalDraw`, `RootExtract` and `ConjugateSearch` with live readouts; 4 fixed colour roles; 5 large type; 6 hand tags; 7 g01 boards; 8 framed card and five bullets; 9 the √3 bar vanishing at one setting and the product collapsing to 1.
- **One idea at a time:** one skill per scene; the conjugate is found (6) before it is used (7, 8).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 23 and 29 s.
- **Avoided double teaching:** the difference of two squares (w02) and Pythagoras (Year 9) are recalled in a clause each.
- **Syllabus coverage:** `ci554a24b4` (2, 3, 4, A1); `ci1ca81758` identify a conjugate (6, 9), a/(√b ± √c) (7), (√a ± √d)/(√b ± √c) (8, A2), single surd (5).
- **Out of scope by design:** quadratics with surd answers (w04); trig exact values.

## Practice questions and model answers

**Attempt 1 (scene 10; pack question 1, original, HSC style, 2 marks suggested, not an official marking scheme).** "Simplify √48 − √27 + √12."
Model answer: 4√3 − 3√3 + 2√3 = 3√3. Classic mistake (crossed): √(48 − 27 + 12) = √33.

**Attempt 2 (scene 12; pack question 2, original, HSC style, 2 marks suggested).** "Rationalise the denominator of (√6 + √2)/(√6 − √2), giving your answer in simplest form."
Model answer: × (√6 + √2)/(√6 + √2): bottom 6 − 2 = 4; top (√6 + √2)² = 8 + 2√12 = 8 + 4√3; answer 2 + √3. Classic mistake (crossed): multiplying only the bottom, (√6 + √2)/4.

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Field | side 18 m; diagonal √(18² + 18²) = √648 = 18√2 ≈ 25.455844 m | 1, 2, 9 |
| Reverse | 30/√2 = 15√2 ≈ 21.2 m | 1, 5 |
| Surd chips | √9 = 3; √2 = 1.41421… | 2 |
| AT07 we-1 | √72 = 6√2, √50 = 5√2, √18 = 3√2; 8√2; crossed √104 | 3 |
| AT07 we-2 | (2√3)(5√6) = 10√18 = 30√2 | 4 |
| AT07 we-3 | (√5 + 2)(√5 − 3) = 5 − 3√5 + 2√5 − 6 = −1 − √5 | 4 |
| AT08 we-1 | 6/√3 = 6√3/3 = 2√3 ≈ 3.4641 | 5 |
| Search | (2 + √3)(2 + k√3) = (4 + 3k) + (2 + 2k)√3; k = 1: 7, 4; k = 0: 4, 2; k = −0.5: 2.5, 1; k = −1: 1, 0; k = −2: −2, −2 | 6 |
| Trial | (2 + √3)√3 = 3 + 2√3 | 6 |
| AT08 we-2 | bottom 1; 8 − 4√3; crossed (2 + √3)(−2 − √3) = −7 − 4√3 | 7 |
| AT08 we-3 | bottom 3; top √10 + 2; (√10 + 2)/3 | 8 |
| A1 | 4√3 − 3√3 + 2√3 = 3√3; crossed √33 | 10, 11 |
| A2 | bottom 4; top 8 + 4√3; 2 + √3; crossed (√6 + √2)/4 | 12, 13 |
| Handoff | x(x + 2) = 10; x = −1 + √11 | 14 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy (16 Nov, scratchpad `checks.py` and `checks2.py`); Codex to re-check.

- √(18² + 18²) = √648 = 18√2 = 25.455844; 30/√2 = 15√2 = 21.213203.
- √72 + √50 − √18 = 8√2 (and √104 = 2√26 ≠ 8√2).
- (2√3)(5√6) = 30√2; (√5 + 2)(√5 − 3) = −1 − √5.
- 6/√3 = 2√3 = 3.4641016.
- (2 + √3)(2 + k√3) = (4 + 3k) + (2 + 2k)√3; slider values in the table; (2 + √3)(2 − √3) = 1; (2 + √3)√3 = 3 + 2√3; (2 + √3)(−2 − √3) = −7 − 4√3.
- 4/(2 + √3) = 8 − 4√3; √2/(√5 − √2) = (√10 + 2)/3.
- A1: 3√3. A2: 2 + √3.
- Handoff: x(x + 2) = 10 gives x = −1 ± √11; width −1 + √11.

## Memory aid check

- **"Same terms, opposite middle sign."** Original wording. Meaning, as said: the conjugate of a + √b is a − √b (and of √a + √b is √a − √b); multiplying gives a difference of two squares, a² − b, so the surd terms cancel. Assumptions checked: holds for a, b rational with b ≥ 0 (syllabus: positive rationals), and for the √a ± √b form ((√a)² − (√b)² = a − b). "Middle sign" means the sign between the two terms, not the sign of the first term (7's crossed slip shows changing both fails). Introduced after the search (6) shows why.
- **Considered, not used:** "Flip the sign" alone (ambiguous about which sign; 7's slip is exactly that ambiguity).

## Narration length estimate

Recounted for Revision 2 (16 Nov 2026). Counted by script with the build parser rules: **5,710 characters**, 15 scene headings. Characters per scene (1 to 15): 708, 580, 447, 562, 545, 639, 449, 333, 177, 102, 311, 116, 386, 280, 75.

At 13.3 characters per second the speech before the notes is about 424 s. Holds: two 10 s countdowns, memory-card hold 2 s, feedback holds 2 s, handoff hold 2 s, about 12 s of settling (the throw line, root extraction, the search sweep and the cancelling grid); notes 45 s. Total **about 506 s**, inside the band and under the cap.

Reserve trims if the voiced take runs long: scene 5's "The value hasn't changed, only its form." (keep the check readout); scene 4's "Multiplying is friendlier." (about 2 s).

## Scene list and build ids

Lesson key `m-a11w03` (route math-a11-w03). Explainer folder `src/explainer/lessons/math-a11-w03`; build inputs in `docs/production/claude-pm/lessons/math-a11-w03/` (at voicing).

In order (15 scene headings): hook-diamond, surd-simplest, worked-add, multiply-expand, single-root, conjugate-search, worked-conjugate, worked-surd-surd, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (seconds from the estimate):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 48 s | 1 | The painted diamond; the throw line draws and its readout never ends; the 30 m reverse field |
| 48 to 93 s | 2 | Root extraction: 648 = 324 × 2, the 18 steps out |
| 93 to 172 s | 3 to 4 | g01 boards: adding like surds; multiplying and expanding on a small grid |
| 172 to 214 s | 5 | Rationalising a single root, back on the field (15√2 m) |
| 214 to 264 s | 6 | ConjugateSearch: the √3 bar vanishes at k = −1; the product collapses to 1 |
| 264 to 325 s | 7 to 8 | g01 boards: conjugate, then surd over surd |
| 325 to 341 s | 9 | Framed memory card |
| 341 to 431 s | 10 to 13 | Question cards and countdowns, then feedback with givens strips and crossed slips |
| 431 to 454 s | 14 | The painted rug and x(x + 2) = 10 |
| 454 to 499 s | 15 | Key notes with the framed card, then a silent return to scene 14's frame |

Per-scene motion (schema 4): all `explain` except attempts and key-notes (`hold`). Transitions: w02's last frame continues into 1; 1 to 2 clear change; 2 to 3 to 4 to 5 clear change (new task); 5 to 6 stage change to the search; 6 to 7 to 8 clear change; 8 to 9 clear change to the card; attempts and feedback: the card shrinks; 13 to 14 board clear; 14 to 15 fade, then a silent return to scene 14's frame.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11w03-rev1-learning-review.md`, `science_check` = `checks/m-a11w03-rev1-maths-check.md`.

## Assets

Inspected before choosing (16 Nov, read only): no sports-field plate exists in maths. `maths/ma12-cricket-grass-strip-v1.png` (f01) is a grass strip, not a diamond. `biology/m6-field-monoculture-mixed-v1.png` is farmland. Not used.

Need (painted, new): `ma11-softball-diamond-top-v1` (also needed for w02's handoff frame). Needed from w04's brief for the handoff frame: `ma11-rug-top-v1`.

Coded: the throw line, side labels, root extraction, the search slider and bar, tile grids, working boards, cards, countdown, hand tags, key notes.

### Studio kit use and additions

Uses: `MATH_ROLES`, `Role`, `HandTag`, `DrawnMark`, `PlateImg`, `LiveReadoutBoard`, `ParameterSlider`, `WorkingBoard` parts, `AlgebraTileGrid` (from w02, small 2 × 2 mode), `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`, `GivensStrip`.

Additions:
1. **`RootExtract`** (kit-needs item 3): a radicand that splits into a perfect square times a remainder; the square's root steps out in front of the radical. Check: the step-out value squared times the remainder equals the original radicand.
2. **`ConjugateSearch`**: an amber slider for k in a + k√b with readouts for the rational and surd parts of (a + √b)(a + k√b), and a surd-part bar. Check: readouts computed from a, b, k; the zero of the surd part is at k = −1.
3. **`DiagonalDraw`**: a dashed line between two sidecar points on a plate with a readout that climbs to the true length and then rewrites in exact form. Check: the drawn length in plate pixels matches the side ratio √2 within 1 per cent (verifies the plate is square).

## Codex asset brief (Maths A11 W03, a softball diamond)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-w03.md`, route entry math-a11-w03. Paint after the learning review and maths check pass and root gives the go-ahead. Save to `public/assets/maths/`. Transparent PNG with a true alpha channel, clean edges; ink and watercolour in the house style, matched to `maths/ma12-cricket-grass-strip-v1.png`; at least 8 per cent clear margin; no text, numbers, line markings that spell anything, logos, people, players, hands, faces, equipment, backdrop, glow or shadow. Never stretch.

1. `ma11-softball-diamond-top-v1.png` (2000 × 2000 px): a softball infield seen **from directly above** (orthographic, no perspective), rotated so that home plate is at the bottom and second base at the top: a grass infield inside a **perfect square** of sandy base paths, with four white bases at the corners (home plate a small pentagon, the others square bags), a small circle of dirt at the pitcher's position, and a band of outfield grass that fades to transparent at the edges. The four base centres must form an exact square (equal sides, right angles).

Sidecar JSON (`ma11-softball-diamond-top-v1.json`): the pixel centres of home plate, first, second and third base, and the measured side lengths and diagonal in px (the diagonal must equal side × √2 within 0.5 per cent). This plate is also needed for w02's handoff frame, so paint it before the w02 build.

Report inspection on the paper background (`#f6f1e7`) at 300 px and 600 px, the alpha check and the square check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-w03-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the conjugate-search algebra (author note b) and that the √3 part is zero only at k = −1.
3. Confirm the scope of "maths prefers it on top" (a convention, not an error) and that √(ab) = √a√b carries "a, b ≥ 0" in the notes.
4. Confirm the six site examples are unchanged and both attempts carry every demand.
5. Confirm the syllabus quotes match the crosswalk exactly; no site label in learner copy or metadata.
6. Confirm the field numbers (author note a) are stated as this field's size, not as an official rule.
7. Confirm no em dash (U+2014), Australian spelling, narration counts by script, and every bold cue quoted in its scene's Visual in spoken order.
8. Confirm scene 1 opens on w02's final frame and scene 14's frame matches w04's opening frame.

## YouTube metadata (draft)

Title: Surds and Conjugates: Rationalising the Denominator | Year 11 Maths Advanced

(Title length: 77 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/algebraic-techniques-and-inequalities/lesson08.sa.html

On a softball diamond with 18 m sides, home to second base is 18√2 m. Learn what a surd is, simplify surds with the largest perfect square, add like surds, and multiply and expand surd brackets. Then rationalise denominators: a single root by multiplying by itself over itself, and a two-term bottom like 2 + √3 with its conjugate, found by searching for the multiplier that wipes the surd out. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Surds lesson: https://hscscience.com.au/subjects/maths-advanced/year11/algebraic-techniques-and-inequalities/lesson07.sa.html

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Working with functions.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Expand and simplify expressions involving surds"
"Identify a conjugate of √a ± √b, and rationalise the denominators of expressions of the form a/(√b ± √c) and (√a ± √d)/(√b ± √c), where a, b, c and d are positive rational numbers"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

Builds on: Algebraic fractions and the difference of two squares (previous video). Next: Solving quadratic equations.

#Year11Maths #MathsAdvanced #Surds #HSCScience

## Open decisions

- **1. Syllabus quote rendering (root).** The crosswalk `text` field writes the conjugate point in linear form (a/(√b ± √c)); the description uses that form. If root prefers the typeset form, the change is metadata only.
- **2. Search scene pacing (learning review).** Scene 6 is the lesson's turning point; check at playback speed that the slider sweep is slow enough to read the two readouts, and that the brief overshoot to k = −2 helps rather than distracts (it can be cut with no narration change).
- **3. Plate prefix `ma11-` (root),** as w01.

## Review notes

- Revision 2 (16 Nov 2026): the independent learning review (`../checks/m-a11-w03-learning-review.md`) is resolved; see the Revision 2 section. Next: Codex maths check and error check, then voicing and a build to grade A.
- Revision 1 has had no independent review. Next: student learning review (trace from w01 and w02 only; check that "irrational" is understood from the never-ending readout; that the search makes the conjugate feel found, not given; that "maths prefers it on top" is not read as "a surd on the bottom is wrong"), then the Codex maths check and error check, then voicing and a build to grade A.
- The throw line, the root extraction, the search slider and the cancelling grid carry the explanation; judge them at playback speed.
