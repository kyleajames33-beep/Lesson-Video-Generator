# Maths A11 W01: How do index laws handle negative, zero and fractional powers? An index counts equal factors, the ladder down to a⁰ = 1 and a⁻ⁿ = 1/aⁿ, a^(1/n) as a root, and mixed-index simplifying (design)

Status: Revision 2 (16 Nov 2026): independent learning review resolved (see "Revision 2" below); not voiced. Revision 1 (16 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`, d01 Revision 6 and s01 Revision 4 patterns). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice (Year 11 voice, owner 3 Nov) and a build on the studio kit to grade A.

Narration 6,502 characters by script (build parser rules), 16 scene headings, about 566 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (16 Nov): learning review resolved

Review: `../checks/m-a11-w01-learning-review.md` (summary `../checks/m-a11-w01-w31-learning-review-summary.md`), with root's rulings of 16 Nov. Findings by the review's numbers:

1. Should fix, scene 4 (counts become shares): **accepted, adapted.** Added "So far we've counted in blocks. Now let's measure each piece as a share of the whole cube instead." in place of "Here's what that means on the cube." The dashed sliced block is tagged "1/3 of a block" before the share board, which is headed "share of the cube".
2. Optional, scene 2 (five laws in about 40 s): **no change**, as the reviewer advised; check the pace on the voiced preview.

Narration now 6,502 characters by script, about 566 s with holds (see "Narration length estimate"). Stage-plan times below are Revision 1 approximations; frames come from the recording's word timings. Every changed value was rechecked with SymPy (scratchpad `rev2_verify.py`); Codex's maths check remains the authority.

Scope: first video of Year 11 Mathematics Advanced (2024), course outline order 1, Working with functions focus area, Algebraic techniques group. Pre-design pack: `../pre-design/maths-a11/math-a11-w01.md`. Site lesson (read through the pack, read only): `algebraic-techniques-and-inequalities/lesson04.sa.html` (Index Laws), SHA256 `a050fa60ed543d87c921cd89e411f475c7e0c5c9bbe3606a749e82120ec103ec`; its three worked examples are kept with the site's numbers unchanged. Route entry: `math-a11-w01` in `../../programme/maths-a11-route-inputs-1.json`. Outline entry: `../../programme/maths-a11-course-outline.json`. Visual system: the maths studio kit (`src/explainer/math/studio/`); painted plates carry the anchor (prefix `ma11-`); tiles, ladders, algebra and readouts are coded.

Owner rules applied: 2024 syllabus only, the content point quoted by codename and exact wording, no site module or outcome label anywhere; painted plates for real objects, coded algebra and diagrams; no people, hands or faces; never stretch a plate; one reasoning stage at a time, with only the earlier results the step needs; worked examples in the g01 layout (task strip, equation strip, grouped givens, framed answer, crossed slip); "Pause here to answer." then a 10 s countdown with the full worded question on screen; givens underlined in the feedback as they are used; brief feedback with one crossed mistake; original HSC-style questions; key notes as five short bullets with the framed memory card; Australian spelling; no em dashes; conversational narration that gives the cause before the rule; everyday anchor not shared with any Year 12 Maths design or any other video in this batch.

Syllabus content point (Mathematics Advanced 11-12 (2024), Year 11, Working with functions, Algebraic techniques; NESA content-system codename, official `code` field empty), quoted from `../../programme/syllabus/maths-advanced-2024-y11-crosswalk.json`:

- `cib0d54c54`: "Use index laws to simplify expressions and solve problems involving positive, negative, zero or fractional indices"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

**Boundary:** starts by recalling that an index counts equal factors (Year 10 laws for whole-number indices, one scene). Teaches: why a⁰ = 1 (the ladder of division by the base, and the division law); why a⁻ⁿ = 1/aⁿ (the ladder continued, and the share of the whole); why a^(1/n) is the nth root (power of a power) and a^(m/n) = (ⁿ√a)ᵐ with the root first; simplifying algebra with mixed indices (site we-1, we-3) and evaluating without a calculator (site we-2). Stops at simplifying and evaluating. Not taught: surds and their simplification (w03); exponential equations and logarithms (e-strand, e03); −3² against (−3)² (pack trap, left for the practice video p01); scientific notation.

## Decisions

### Revision 1 (16 Nov 2026)

- **Anchor: 27 wooden toy blocks stacked into one 3 × 3 × 3 cube (painted plates, live).** Chosen over the pack's phone storage tiers (phone storage is math-a12-t04's anchor) and the quiz-show doubling (it carries 2⁰ = 1 but no negative or fractional meaning). The blocks carry every idea in the lesson without any science: 27 = 3³ blocks; a layer is 9 = 3², a row is 3 = 3¹, one block is 1 = 3⁰ (each step divides by the base 3 and drops the index by one); a layer is 9/27 = 1/3 = 3⁻¹ of the cube, a row 1/9 = 3⁻², one block 1/27 = 3⁻³ (negative indices as shares of the whole); the edge is 27^(1/3) = 3 and a face is 27^(2/3) = 9 (fractional indices as roots); and site we-2's 27^(−2/3) = 1/9 is a row's share. Real separable blocks were chosen over a twisting puzzle cube, which cannot be pulled apart into layers. The anchor returns in scene 6 (the index dial), scene 8 (we-2's 27^(−2/3)), scene 10 (memory card badge) and scene 15 (handoff, beside the chocolate block for w02).
- **Simulations (standard item 3).**
  1. `BlockLadder` (scenes 3 and 4, new part): the painted cube comes apart in steps (cube to layer to row to block, then the block sliced into thirds as a dashed coded outline), with a `LiveReadoutBoard` reading "index", "power of 3" and "blocks" (scene 3) or "share of the cube" (scene 4) at every step. One timeline drives the plates and the readout, so they cannot disagree.
  2. `IndexDial` (scene 6, new part on `ParameterSlider`): a slider for the index p of 27 stops at 1, 2/3, 1/3, 0, −1/3, −2/3, −1; the matching block pieces lift out of the cube (positive p: the count; negative p: the piece's share of the whole in violet), with readout "27^p = …". The visual surprise happens on the dial.
  3. `FactorStack` (scene 2 and scene 3, new part from the kit-needs list): rows of blue "3" tiles that join (multiply), cancel in pairs across a fraction bar (divide) and run out to an empty bar labelled 1.
- **Colour roles (fixed for the whole video).**
  - **base: blue** (`MATH_BLUE`), the repeated factor (3, a, x, y);
  - **index: amber** (`MATH_AMBER`), every index and the dial value;
  - **coefficient (the number in front): teal** (`MATH_TEAL`);
  - **share of the whole and reciprocals: violet** (`MATH_GRADIENT` token, used here as the "flip" role);
  - **answer: green** (`MATH_ANSWER`); **mistake: red** (`MATH_MISTAKE`); ink for fraction bars and plain working.
  Colour is never the only carrier: each role also has a written label in the first scene it appears ("base", "index", "share of the cube").
- **Large type (standard item 5).** Current working line and readouts 52 px; task, equation and givens strips 44 px; earlier lines 30 to 32 px and dimmed; tile labels at least 34 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; all text above y = 950. Block plates at least 320 px tall whenever they carry the idea.
- **Handwritten voice (standard item 6).** `HandTag` in role colours: "4 factors", "join: add", "cancel in pairs: subtract", "groups: multiply", "÷ 3", "index − 1", "not nothing: 1", "a share, flipped", "not −9", "root first", "bottom = root", "every factor inside", "missed two threes". At most two live at once.
- **Stage changes (standard item 2), a new visual idea at most about 60 s apart:** the cube on the table (1); factor tiles (2); the ladder down to one block (3); the ladder into shares (4); the edge and face lifted out (5); the index dial (6); three g01 boards (7 to 9); the framed memory card (10); question cards (11 to 14); the cube beside the chocolate block (15); key notes (16).
- **Worked examples (g01 layout, standard item 7).** Scene 7 is site we-1 (simplify; crossed slip "(3x²y)³ = 3x⁶y³", caption "the 3 is inside the bracket too"). Scene 8 is site we-2 (evaluate; givens grouped as three terms; crossed slip "4⁻¹ = −4", caption "a reciprocal, not a negative"). Scene 9 is site we-3 (fractional power of a product; crossed slip "8x⁶y⁻³" left as the final answer, caption "positive indices asked for"). Feedback scenes carry a `GivensStrip`, rows at 52 px, a green framed answer and one crossed slip each.
- **Memory aid (standard item 8).** Framed `MemoryAidCard`: "A minus flips it. The bottom is the root." with the key "a⁻ⁿ = 1/aⁿ, a^(m/n) = (ⁿ√a)ᵐ: roots grow at the bottom, like a tree's" and a small tree-roots doodle in the hand style beside the fraction index (coded line art, not a plate). Key notes are five short bullets beside the card; the notes scene is 45 s.
- **Visual surprise (standard item 9).** In scene 3 every tile cancels in 3²/3², and the empty fraction bar reads 1, not 0 ("not nothing: 1"). In scene 6 the dial crosses zero and the counts turn into shares of the whole: each negative power is one over its positive partner, seen on the cube.
- **Question cards (full text, nothing answer-bearing).** A1 shows the full algebraic expression as a built fraction; A2 the three-term numerical expression. No pictures are needed on algebra cards (as d01's cards), but A2's card carries a small cube badge to keep the anchor in view (no numbers on it).
- **Learner question (outline, kept):** "How do index laws handle negative, zero and fractional powers?" The answer, built in order: an index counts equal factors (2); dividing down the ladder gives a⁰ = 1 (3) and a⁻ⁿ = 1/aⁿ (4); the power-of-a-power law forces a^(1/n) to be a root (5); all of it on one dial (6); the laws on letters and numbers (7 to 9).
- **Plain meanings at first use (Year 11 entry).** Index: "the small raised number, how many equal factors". Base: "the number being multiplied". Reciprocal: "one over it". nth root: "the number that, multiplied by itself n times, gives back the original".
- **Notation.** Screen writes 3⁰, 3⁻¹, 27^(1/3) as raised indices (never "^"); roots as ∛27 and ⁴√16. Fraction indices are spoken "to the power of one third", "to the two thirds", "to the minus a half".
- **Conditions kept in learner copy.** a⁰ = 1 for a ≠ 0 (spoken in 3; key note). Fractional indices: key note 5 says "a > 0" because omitting it would teach (−4)^(1/2) as real. Scenes use only positive bases.
- **Attempts (pack questions, original).** A1: simplify (2a³b⁻²)² × 3a⁻¹b⁵ ÷ 6a⁴b with positive indices = 2a; crossed "a" (the 2 not squared). A2: evaluate 8^(2/3) − 16^(−1/2) + 7⁰ = 19/4; crossed "9" (16^(−1/2) read as −4).
- **Mistake scene:** none separate. "Multiply the indices when multiplying powers" (2, said positively by the tiles); "a⁰ = 0" (3); "a negative index makes a negative number" (4 crossed, 8 crossed, feedback 2 crossed); "the coefficient stays outside the bracket's power" (7 crossed, feedback 1 crossed); "power before root" (5, said positively).
- **Handoff (outline next: w02, "Why must we factorise before we cancel an algebraic fraction?").** Scene 15 sets the cube (its index laws now framed as "equal factors cancel") beside a painted chocolate block of 4 rows of 6 and the fraction (20 + 4)/4 with both 4s struck in red pencil and a "?" over "20 each?". This frame is w02's opening frame.
- **Site sources used:** lesson 4 sections `one-idea-behind-every-index` (an index counts factors), `multiplying-dividing-and-raising-a` (the three laws), `model` (we-1, we-2, we-3, numbers unchanged), traps (multiplying indices, coefficient left outside the bracket, negative index read as negative). The site's folded-paper hook is not used (folding paper is math-a12-f05's anchor).
- **Site corrections:** none found for lesson 4 (`../site-corrections-maths-a11.md` lists none; all three site answers recalculated and correct).
- **Entry knowledge (route `entryKnowledge`):** Stage 5 (Year 10): positive integer indices, aᵐ × aⁿ = a^(m+n) for whole-number powers, square and cube roots. No earlier video (this opens the course).
- **Draft route entry (root to adopt; matches the route input).** id `math-a11-w01`; syllabusActions `cib0d54c54`; start "Recall that an index counts repeated factors of the same base." Stop "Derive a⁰ = 1 and a⁻ⁿ = 1/aⁿ from the division law, meet a^(1/n) as a root, then simplify and evaluate with mixed indices." Next: "math-a11-w02: share a chocolate block; why only factors cancel".
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Ladder: 3³ = 27, 3² = 9, 3¹ = 3, 3⁰ = 1, 3⁻¹ = 1/3, 3⁻² = 1/9, 3⁻³ = 1/27. Shares: layer 9/27 = 1/3, row 3/27 = 1/9, block 1/27.
  (b) Dial: 27^1 = 27, 27^(2/3) = 9, 27^(1/3) = 3, 27^0 = 1, 27^(−1/3) = 1/3, 27^(−2/3) = 1/9, 27^(−1) = 1/27. 27^(−q) = 1/27^q.
  (c) Power of a power forcing the root: if (27^(1/3))³ = 27^1 = 27 and 27^(1/3) > 0, it is the real cube root, 3. For even roots the course takes the non-negative root and a > 0.
  (d) The idealised cube is 27 identical wooden blocks with no gaps; "layer" means a 3 × 3 × 1 slab, "row" a 3 × 1 × 1 bar.
  (e) Pronunciations: "three to the zero"; "three to the minus one"; "twenty-seven to the power of one third"; "twenty-seven to the two thirds"; "x to the six"; "a to the m over n"; "sixteen to the minus a half"; "nineteen over four".

Main question: *Twenty-seven blocks make a 3 × 3 × 3 cube. A layer is 3², a row is 3¹. What could 3⁰, 3⁻¹ and 27^(1/3) mean on the same cube? How do index laws handle zero, negative and fractional powers?*
Entry knowledge (Year 10): whole-number indices and their laws; square and cube roots.
Stops after: a⁰ = 1, a⁻ⁿ = 1/aⁿ, a^(m/n) = (ⁿ√a)ᵐ with reasons; simplifying and evaluating mixed-index expressions. No surds, no logarithms.
Handoff: math-a11-w02: the chocolate block, "(20 + 4)/4: cross out the 4s?" (a question only).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames come from the recording's word timings. Colour roles (fixed): base blue; index amber; coefficient teal; shares and reciprocals violet; answer green; mistake red; ink for bars and plain working. Header strip "MATHEMATICS ADVANCED · INDEX LAWS" at the top; scene headings in the hand font, 44 px. Type: current line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; hand tags at least 34 px; question cards 40 px; nothing below 26 px; all text above y = 950.

### 1. hook: twenty-seven blocks
> This video starts Year 11 Maths Advanced, with powers. Here are twenty-seven wooden blocks, stacked into one big **cube**. There are three blocks along each edge, in three directions, so twenty-seven is three times three times three, three cubed. Take the cube apart. One layer is nine blocks, three **squared**. One row is three blocks, three to the **one**. So what could three to the zero mean, or three to the minus one, or twenty-seven to the power of one third? Each one has a meaning on this cube. So how do index laws handle zero, negative and fractional **powers**?

Visual: cold open on the anchor, no title card. Frame 0: the painted cube (`ma11-block-cube-v1.png`, 460 px tall) sits left of centre on a coded strip of table with a slow camera push; heading writes on in the hand font: "Twenty-seven blocks". On "cube" three blue hand arrows run along the three edge directions, each tagged "3"; `LiveReadoutBoard` at the right, 52 px: "blocks 27", then the row "27 = 3 × 3 × 3 = 3³" writes with the 3s blue and the index amber, hand tag "base" on a 3 and "index" on the ³. On "squared" the top layer (`ma11-block-layer-v1.png`, stacked to the cube's registration) lifts up and away to the right, readout "layer: 9 = 3²". On "one" one row (`ma11-block-row-v1.png`) slides off the layer, readout "row: 3 = 3¹". On "zero" three question chips write at 52 px in a column at the right: "3⁰ = ?", "3⁻¹ = ?", "27^(1/3) = ?" (indices amber). On "powers" the pieces return into the cube and the chips stay as the scene question, hand tag "each one means something here".

### 2. an index counts equal factors
> First, what an index means. It counts how many equal factors are multiplied. Three to the four is four threes, multiplied **together**. Multiplying powers of the same base joins the factors. Three squared times three cubed is five threes, so we add the **indices**. Dividing cancels factors in pairs, top with bottom. Three to the five over three squared leaves three threes, so we **subtract**. A power of a power repeats a group. Three squared, cubed, is six threes, so we **multiply**. And a power of a bracket reaches every factor **inside**. These are your Year 10 laws. Now let's push them past whole numbers.

Visual: stage change to the `FactorStack` board (full width, tiles 90 px). The cube shrinks to a 240 px thumbnail at the top left. On "together" four blue tiles "3" sit in a row with × between them, bracket and hand tag "4 factors", label "3⁴" (4 amber). On "indices" two tiles and three tiles slide together into one row of five; the row labels "3² × 3³ = 3^(2+3) = 3⁵", hand tag "join: add". On "subtract" five tiles sit over a fraction bar, two under it; two pairs cancel with red pencil strokes, three remain: "3⁵ ÷ 3² = 3^(5−2) = 3³", hand tag "cancel in pairs: subtract". On "multiply" three groups of two tiles in brackets: "(3²)³ = 3^(2×3) = 3⁶", hand tag "groups: multiply". On "inside" a small row "(ab)ⁿ = aⁿbⁿ" writes with hand tag "every factor inside". On the last sentence the four laws collect into a 36 px strip at the top, grey chip "Year 10: whole-number indices", which stays for scenes 3 to 6.

### 3. the ladder down: three to the zero
> Let's walk down the cube. Twenty-seven blocks, then nine, then three. Each step divides by three, and the index drops by **one**. Three cubed, three squared, three to the one. One more step, and three divided by three is one. So three to the zero should be one, a single **block**. The division law agrees. Three squared over three squared is three to the zero, but nine over nine is one. Every factor cancels, and what's left isn't nothing, it's **one**. So a to the zero is one, for any base a that isn't zero.

Visual: stage change to `BlockLadder` (the plates large, 380 px). Left: the cube; the ladder runs left to right: cube, layer, row. Each step draws a hand arrow labelled "÷ 3" (blue) above and "index − 1" (amber) below; readout board at the right: "index 3 → 2 → 1", "3ⁿ 27 → 9 → 3". On "one" the three readouts glow in step. On "block" the row splits and one block (`ma11-block-single-v1.png`) steps forward on its own, readout "index 0", "3⁰ = 1". On "The division law" a `FactorStack` panel slides in at the right: "3² / 3²" as two tiles over two tiles; both pairs cancel in red pencil; the bar is empty; on "one" (last bold) the empty bar fills with a large green "1", hand tag "not nothing: 1". Row writes at 52 px: "a⁰ = 1 (a ≠ 0)" in a green frame.

### 4. keep going: negative indices
> Keep going down. One divided by three is a third, so three to the minus one is one **third**. So far we've counted in blocks. Now let's measure each piece as a share of the whole cube instead. Three squared over three cubed is three to the minus one, and nine blocks out of twenty-seven is one third. So one layer is a third of the whole **cube**. One row is three out of twenty-seven, a ninth, that's three to the minus two. And one block is one twenty-seventh, three to the minus **three**. So a to the minus n is one over a to the n. A negative index means a reciprocal, not a negative number. Three to the minus two is one ninth, not minus **nine**.

Visual: camera continue on the ladder. On "third" the single block shows a dashed coded outline split into thirds (one third tinted violet), readout "index −1", "3⁻¹ = 1/3", hand tags "÷ 3 again" and "1/3 of a block" (on the dashed sliced block, before the share board replaces it). On "cube" the ladder clears to a share board headed "share of the cube" (hand font, 44 px, violet), so the unit change is written as well as spoken: the whole cube (380 px) at the left with a violet bracket; the layer lifts out beside it; `FactorStack` row "3² / 3³": two tiles cancel, one tile left under the bar, so "1/3"; readout "share of the cube: 9/27 = 1/3 = 3⁻¹" (violet). On "three" (in "minus three") the row and then the single block each lift out in turn with readouts "3/27 = 1/9 = 3⁻²" and "1/27 = 3⁻³". On "one over a to the n" a 52 px row writes: "a⁻ⁿ = 1/aⁿ" with the minus amber and the 1/ violet, hand tag "a share, flipped". On "nine" a red slip "3⁻² = −9" writes and is crossed, red caption "not −9: one over 9".

### 5. the other way: fractional indices
> Now go the other way. How many blocks sit along one edge? We need the number that, cubed, gives **twenty-seven**. Use the power of a power law. Twenty-seven to the one third, all cubed, is twenty-seven to the one, so twenty-seven to the one third must be the cube root of twenty-seven, which is **three**. So a power of one over n means the nth root. Twenty-seven to the two thirds is that cube root, squared. Three squared is nine, the blocks on one **face**. In a to the m over n, the bottom number is the root and the top number is the power. Take the root first. It keeps the numbers **small**.

Visual: the cube returns full size, centre left. On "twenty-seven" a blue edge of three blocks glows and a chip writes "? × ? × ? = 27". On "three" rows build at the right, one per clause, 52 px current: "(27^(1/3))³ = 27^(1/3 × 3) = 27¹" (amber indices), then "so 27^(1/3) = ∛27 = 3" in a green frame; hand tag "power of a power". The glowing edge labels "3". On "face" the front face of 9 blocks tints amber and the row "27^(2/3) = (∛27)² = 3² = 9" writes, hand tag "root, then square". On "the bottom number is the root" the general row "a^(m/n) = (ⁿ√a)ᵐ" writes, with the n circled in blue (hand tag "bottom = root") and the m in amber ("top = power"). On "small" a two-step `RootLadder` (two rows of a ladder) compares "27² = 729, then ∛729 = 9" (grey, struck lightly) with "∛27 = 3, then 3² = 9" (ink), hand tag "root first".

### 6. one dial for every index
> Put all of it on one dial. Twenty-seven to the one is the whole cube. Two thirds gives a face of nine. One third gives an edge of **three**. Zero gives a single block. Now cross zero. Minus a third gives one third, a layer's share of the **cube**. Minus two thirds gives a ninth, a row's share. Minus one gives one twenty-seventh, a single block's **share**. Each negative power is one over its positive partner.

Visual: stage change to `IndexDial`. An amber `ParameterSlider` "index p" (900 px wide) with stops 1, 2/3, 1/3, 0, −1/3, −2/3, −1; the cube plate at the left, a readout at the right, 52 px: "27^p = …". The slider moves on each phrase; the matching pieces lift out of the cube: whole cube (27), front face (9), edge (3); on "three" the readout reads 3. At p = 0 a single block (1). On "cross zero" the slider's zero tick flashes. On "cube" (in "layer's share of the cube"), and for each negative p after it, the lifted piece sits beside the full cube with a violet bracket and the readout writes as a share: "1/3" (layer), "1/9" (row), on "share" "1/27" (block). On the last sentence two columns form under the slider: "27^(1/3) = 3 | 27^(−1/3) = 1/3", "27^(2/3) = 9 | 27^(−2/3) = 1/9", "27¹ = 27 | 27⁻¹ = 1/27", joined by violet arrows, hand tag "one over its partner".

### 7. worked example 1: letters and a bracket
> Let's use the laws on letters. Simplify three x squared y, all cubed, times two x y to the four, over six x cubed y squared. Start with the bracket. The cube reaches every factor inside, including the three. That gives twenty-seven x to the six y **cubed**. Times two x y to the four, multiply the numbers and add the indices, to get fifty-four x to the seven y to the **seven**. Over six x cubed y squared, divide the numbers and subtract the indices. The answer is nine x to the four y to the **five**. The classic slip is leaving the three outside the power. Three x to the six y cubed has lost two of its **threes**.

Visual: clear change to the g01 board (site we-1). Task strip, 44 px: "Simplify". Equation strip, 52 px: the built fraction "(3x²y)³ × 2xy⁴ / 6x³y²" (coefficients teal, letters blue, indices amber). Givens card, grouped, 40 px: "bracket: (3x²y)³", "times: 2xy⁴", "divide by: 6x³y²". Working, one row per cue, earlier rows shrink to 32 px and dim: on "cubed" "(3x²y)³ = 3³x⁶y³ = 27x⁶y³" (hand tag "every factor inside"); on "seven" "27x⁶y³ × 2xy⁴ = 54x⁷y⁷" (hand tag "add indices"); on "five" "54x⁷y⁷ / 6x³y² = 9x⁴y⁵" in a green answer frame (hand tag "subtract indices"). On "threes" a red slip "(3x²y)³ = 3x⁶y³" writes beside row 1 and is crossed, red caption "the 3 is inside the bracket too".

### 8. worked example 2: numbers, no calculator
> Now numbers, with no calculator. Evaluate twenty-seven to the minus two thirds, plus five to the zero, minus four to the minus one. Take the minus first. Twenty-seven to the minus two thirds is one over twenty-seven to the two thirds. Cube root, then square, gives one over nine, a row's share of the **cube**. Five to the zero is one. Four to the minus one is one **quarter**, not minus four. So we have a ninth, plus one, minus a quarter. Over thirty-six, that's four plus thirty-six minus nine, which is thirty-one over thirty-**six**.

Visual: clear change to a fresh g01 board (site we-2). Task strip: "Evaluate without a calculator". Equation strip, 52 px: "27^(−2/3) + 5⁰ − 4⁻¹" (indices amber). Givens card, grouped by term in three coloured boxes. On "cube" row 1 "27^(−2/3) = 1/27^(2/3) = 1/(∛27)² = 1/9" (violet 1/); a 200 px cube badge at the left with one row lifted, tag "a row's share". On "quarter" row 2 "5⁰ = 1, 4⁻¹ = 1/4"; a red slip "4⁻¹ = −4" writes and is crossed, red caption "a reciprocal, not a negative". On "six" row 3 "1/9 + 1 − 1/4 = 4/36 + 36/36 − 9/36" and row 4 "= 31/36" in a green answer frame. Rows 1 and 2 stay at 32 px, dimmed, because row 3 uses them.

### 9. worked example 3: a fraction outside the bracket
> One more, with a fraction outside the bracket. Simplify sixteen x to the eight y to the minus four, all to the power three quarters, with positive indices. The outside index multiplies every index inside. Sixteen to the three quarters is the fourth root of sixteen, two, cubed, which is **eight**. x to the eight times three quarters is x to the **six**. y to the minus four times three quarters is y to the minus three. A negative index sits below the fraction line, so the answer is eight x to the six, over y **cubed**.

Visual: clear change to a fresh g01 board (site we-3). Task strip: "Simplify, with positive indices". Equation strip: "(16x⁸y⁻⁴)^(3/4)" with the 3/4 amber and boxed. Givens card: "coefficient 16", "x⁸", "y⁻⁴", "outside index 3/4". On "eight" row 1 "16^(3/4) = (⁴√16)³ = 2³ = 8" with hand tag "root first"; on "six" row 2 "x^(8 × 3/4) = x⁶"; next "y^(−4 × 3/4) = y⁻³"; on "cubed" row 4 "= 8x⁶y⁻³ = 8x⁶/y³" in a green answer frame, the y⁻³ dropping below a violet fraction bar with hand tag "minus flips it". A red slip "8x⁶y⁻³" (as a final answer) writes and is crossed, caption "positive indices asked for".

### 10. memory aid
> Here's a way to remember the two new kinds of index. A minus flips it, and the bottom is the root, like the roots of a tree. So a to the minus n is one over a to the n. And in a to the m over n, the bottom number is the root, and the top number is the **power**.

Visual: stage change to the framed `MemoryAidCard` (1,300 × 600 px, double ink frame, heading "Memory aid"). Main line, hand font 60 px: "A minus flips it. The bottom is the root." Left slot: the cube badge (220 px) with one layer lifted and a violet "1/3". Right: "a^(m/n)" drawn large with a small hand-drawn tree whose roots reach down to the n (coded line art). On "power" the key line writes, 40 px: "a⁻ⁿ = 1/aⁿ    a^(m/n) = (ⁿ√a)ᵐ". Hold about 2 s.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. Simplify the expression on the card, and write your answer with positive indices. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Simplify (2a³b⁻²)² × 3a⁻¹b⁵ / 6a⁴b, writing your answer with positive indices. (Assume a and b are not zero.)" The expression is set as a built fraction at 52 px. The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing (no role colours until feedback).

### 12. feedback 1 (brief)
> Square the bracket first, including the two. That's four a to the six b to the minus **four**. Times three a to the minus one b to the five gives twelve a to the five **b**. Now divide by six a to the four b. Twelve over six is two, a to the five over a to the four is a, and the b's cancel to one. The answer is two **a**. If you got just a, you didn't square the **two**.

Visual: the card shrinks to the top (30 px); role colours switch on in the card. `GivensStrip`: "bracket squared", "times 3a⁻¹b⁵", "÷ 6a⁴b". "(2a³b⁻²)²" underlined on "four"; row, 52 px: "(2a³b⁻²)² = 4a⁶b⁻⁴". On "b" "3a⁻¹b⁵" underlined; row "4a⁶b⁻⁴ × 3a⁻¹b⁵ = 12a⁵b". On "a" "6a⁴b" underlined; row "12a⁵b / 6a⁴b = 2a" in a green answer frame. On "two" a red slip "2a⁶b⁻⁴ … = a" writes and is crossed, red caption "square the 2 as well". Hold about 1 s.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. Evaluate eight to the two thirds, minus sixteen to the minus a half, plus seven to the zero, without a calculator. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Without using a calculator, evaluate 8^(2/3) − 16^(−1/2) + 7⁰." Expression at 52 px. Small cube badge (160 px) in the picture slot, no numbers. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 14. feedback 2 (brief)
> Eight to the two thirds is the cube root of eight, two, squared, which is **four**. Sixteen to the minus a half is one over the square root of sixteen, a **quarter**. Seven to the zero is one. So four, minus a quarter, plus one, is four and three quarters, or nineteen over **four**. If you got nine, you read sixteen to the minus a half as minus **four**.

Visual: the card shrinks to the top. `GivensStrip`: three term boxes. Each term underlined as it is used. On "four" (first) row "8^(2/3) = (∛8)² = 2² = 4"; on "quarter" row "16^(−1/2) = 1/√16 = 1/4" (violet 1/); next "7⁰ = 1"; on "four" (in "over four") row "4 − 1/4 + 1 = 19/4" in a green answer frame, with "= 4¾" in grey. On "four" (last) a red slip "16^(−1/2) = −4, so 4 + 4 + 1 = 9" writes and is crossed, red caption "a minus index flips; it doesn't make a negative". Hold about 1 s.

### 15. handoff
> Index laws work because equal factors cancel, top with bottom. Next, that idea meets fractions. Share this block of chocolate, twenty-four squares, between four friends, and each gets six. Now write twenty-four as twenty plus four, and cross out the **fours**. Does each friend really get twenty squares?

Visual: the memory line shows small at the top (30 px), then fades. Two panels. Left: the cube plate (260 px) with "3⁵ / 3² = 3³", the cancelled tiles in red pencil, tag "equal factors cancel". Right: the painted chocolate block (`ma11-chocolate-block-v1.png`, 4 rows of 6, 380 px wide) with the fraction "24/4 = 6" (green tick), then below it "(20 + 4)/4"; on "fours" both 4s are struck in red pencil and "= 20 each?" writes with a large "?". Chip "Next: why must we factorise before we cancel?". Hold about 2 s. This is w02's opening frame; scene 16 returns to it silently after the notes.

### 16. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 px in the left 58 to 60 per cent, role colours kept, each one line or two short lines.
> Here are the key notes. Pause the video if you need more time to copy them.

- An index counts equal factors: 3⁴ = 3 × 3 × 3 × 3.
- aᵐ × aⁿ = a^(m+n), aᵐ ÷ aⁿ = a^(m−n), (aᵐ)ⁿ = a^(mn), (ab)ⁿ = aⁿbⁿ.
- a⁰ = 1 for a ≠ 0.
- a⁻ⁿ = 1/aⁿ: a reciprocal, not a negative.
- a^(m/n) = (ⁿ√a)ᵐ for a > 0: take the root first.

Memory aid (framed card, right side of the notes screen, as in scene 10): *A minus flips it. The bottom is the root.* Key: *a⁻ⁿ = 1/aⁿ, a^(m/n) = (ⁿ√a)ᵐ.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades (1 s) back to scene 15's frame exactly (the cube with cancelled tiles; the chocolate block with "(20 + 4)/4", struck 4s and "20 each?"; chip "Next: why must we factorise before we cancel?"). This is the final frame and w02's opening frame.

## Teaching checks

- **Does it explain causes?** Why the laws work: an index counts equal factors, so multiplying joins them, dividing cancels them in pairs and a power repeats a group (2). Why a⁰ = 1: each step down divides by the base, and 3²/3² is both 3⁰ and 9/9 (3). Why a⁻ⁿ = 1/aⁿ: the ladder continues past 1, and 3²/3³ leaves one factor below the bar (4). Why a^(1/n) is a root: the power-of-a-power law makes its nth power the original number (5). Why root first: smaller numbers (5). Why 4⁻¹ is not −4: an index counts factors, a minus index flips (8, feedback 2).
- **Misconceptions addressed:** "multiply indices when multiplying powers" (2, positive); "a⁰ = 0" (3, "not nothing: 1"); "negative index, negative number" (4, 8, feedback 2 crossed); "the coefficient escapes the power" (7, feedback 1 crossed); "leave a negative index in the final answer" (9 crossed).
- **Visual standard (`../maths-visual-standard.md`), item by item:** 1 the painted cube from frame 0, returning in 3 to 6, 8, 10, 13 and 15; 2 a new stage every 30 to 60 s (stage plan below); 3 `BlockLadder`, `IndexDial` and `FactorStack` with live readouts; 4 fixed colour roles; 5 large type; 6 hand tags; 7 three g01 boards with framed answers and crossed slips; 8 framed memory card and five short bullets; 9 the empty fraction bar reading 1, and the dial crossing zero into shares.
- **One idea at a time:** one new index kind per scene in 3 to 5; the dial (6) only gathers; one law per row in each worked example.
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each with the invitation to pause; nothing answer-bearing. One crossed mistake each; feedback about 25 s each.
- **Avoided double teaching:** the Year 10 whole-number laws are one scene with a grey "Year 10" chip; square and cube roots are recalled, not taught.
- **Syllabus coverage:** `cib0d54c54` positive (2, 7), negative (4, 7, 8, A1, A2), zero (3, 8, A2), fractional (5, 6, 8, 9, A2); "simplify expressions" (7, 9, A1); "solve problems" (8, A2, and the cube shares in 4 and 6).
- **Out of scope by design:** surds (w03); exponential equations and logarithms (e-strand); −3² against (−3)² (practice video p01).

## Practice questions and model answers

**Attempt 1 (scene 11; pack question 1, original, HSC style, 2 marks suggested, not an official marking scheme).** "Simplify (2a³b⁻²)² × 3a⁻¹b⁵ / 6a⁴b, writing your answer with positive indices. (Assume a and b are not zero.)"
Model answer: (2a³b⁻²)² = 4a⁶b⁻⁴; × 3a⁻¹b⁵ = 12a⁵b; ÷ 6a⁴b = 2a. Classic mistake (crossed): not squaring the 2, giving 2a⁶b⁻⁴ and a final answer a.

**Attempt 2 (scene 13; pack question 2, original, HSC style, 2 marks suggested).** "Without using a calculator, evaluate 8^(2/3) − 16^(−1/2) + 7⁰."
Model answer: 8^(2/3) = (∛8)² = 4; 16^(−1/2) = 1/√16 = 1/4; 7⁰ = 1; 4 − 1/4 + 1 = 19/4. Classic mistake (crossed): 16^(−1/2) = −4, giving 9.

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Cube | 27 = 3³; layer 9 = 3²; row 3 = 3¹; block 1 = 3⁰ | 1, 3 |
| Shares | layer 9/27 = 1/3 = 3⁻¹; row 3/27 = 1/9 = 3⁻²; block 1/27 = 3⁻³ | 4, 6 |
| Tiles | 3⁴; 3² × 3³ = 3⁵; 3⁵ ÷ 3² = 3³; (3²)³ = 3⁶; 3²/3² = 1; 3²/3³ = 1/3 | 2, 3, 4 |
| Fractional | 27^(1/3) = 3; 27^(2/3) = 9; 27² = 729, ∛729 = 9 | 5 |
| Dial | 27^p for p = 1, 2/3, 1/3, 0, −1/3, −2/3, −1: 27, 9, 3, 1, 1/3, 1/9, 1/27 | 6 |
| we-1 (site) | (3x²y)³ = 27x⁶y³; × 2xy⁴ = 54x⁷y⁷; ÷ 6x³y² = 9x⁴y⁵; crossed 3x⁶y³ | 7 |
| we-2 (site) | 27^(−2/3) = 1/9; 5⁰ = 1; 4⁻¹ = 1/4; 4/36 + 36/36 − 9/36 = 31/36; crossed −4 | 8 |
| we-3 (site) | 16^(3/4) = 8; x⁶; y⁻³; 8x⁶/y³ | 9 |
| A1 | 4a⁶b⁻⁴; 12a⁵b; 2a; crossed a | 11, 12 |
| A2 | 4; 1/4; 1; 19/4 = 4¾; crossed 9 | 13, 14 |
| Handoff | 24/4 = 6; (20 + 4)/4 struck to "20 each?" (20 × 4 = 80 > 24) | 15 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy (Python 3.14, 16 Nov, scratchpad `checks.py`); Codex to re-check.

- 3³ = 27, 3² = 9, 3⁰ = 1, 3⁻¹ = 1/3, 3⁻² = 1/9, 3⁻³ = 1/27; 9/27 = 1/3, 3/27 = 1/9.
- 27^(1/3) = 3, 27^(2/3) = 9, 27^(−1/3) = 1/3, 27^(−2/3) = 1/9, 27⁻¹ = 1/27; 27² = 729, ∛729 = 9.
- we-1: (3x²y)³ = 27x⁶y³; 27x⁶y³ × 2xy⁴ = 54x⁷y⁷; ÷ 6x³y² = 9x⁴y⁵ (x, y ≠ 0).
- we-2: 1/9 + 1 − 1/4 = 31/36.
- we-3: (16x⁸y⁻⁴)^(3/4) = 8x⁶/y³ (x, y > 0).
- A1: (2a³b⁻²)² × 3a⁻¹b⁵ = 12a⁵b; ÷ 6a⁴b = 2a. Slip: 2a⁶b⁻⁴ × 3a⁻¹b⁵ ÷ 6a⁴b = a.
- A2: 8^(2/3) − 16^(−1/2) + 7⁰ = 19/4. Slip: 4 − (−4) + 1 = 9.

## Memory aid check

- **"A minus flips it. The bottom is the root."** Original wording of a common classroom aid. Meaning, as said in scene 10: a⁻ⁿ = 1/aⁿ, and in a^(m/n) the denominator n is the root and the numerator m the power. Assumptions checked: "flips" means take the reciprocal of the power (stated with the formula on the card); the root reading needs a > 0 for even n in this course (key note 5); the tree image refers to the position of n (the bottom of the fraction), not to any number's size. Introduced after the causes (3 to 5) and the dial (6). It helps a new case: A2's 16^(−1/2) is one flip and one square root.
- **Considered, not used:** "Zero power, one hour" (rhymes, no reason); "power then root" (slower, and invites big numbers).

## Narration length estimate

Recounted for Revision 2 (16 Nov 2026). Counted by script with the build parser rules (`### N.` headings; only lines starting "> " inside each scene, joined with a space, `**` removed; the total is the sum of the scene strings): **6,502 characters**, 16 scene headings. Characters per scene (1 to 16): 558, 595, 500, 637, 582, 400, 604, 526, 510, 258, 114, 357, 146, 340, 300, 75.

At 13.3 characters per second the speech before the notes is about 483 s. Holds: two 10 s countdowns (20 s), the memory-card hold (2 s), two feedback holds (2 s), the handoff hold (2 s), about 12 s of settling for the ladder, the share board, the dial and the tile cancellations; the key-notes scene is 45 s (1,350 frames). Total **about 566 s**, inside the 5,500 to 6,800 character band and under the 570 s cap.

Reserve trims if the voiced take runs long: scene 2's "And a power of a bracket reaches every factor inside." (keep the row on screen, about 4 s); scene 6's last sentence (keep the two columns, about 3 s). Do not cut below 5,500 characters.

## Scene list and build ids

Lesson key `m-a11w01` (route math-a11-w01). Explainer folder `src/explainer/lessons/math-a11-w01`; build inputs in `docs/production/claude-pm/lessons/math-a11-w01/` (to be created at voicing).

In order (16 scene headings, all `### N.`): hook-blocks, index-counts, ladder-zero, negative-index, fractional-index, index-dial, worked-1, worked-2, worked-3, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (seconds from the estimate):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 43 s | 1 | The painted cube on the table; pieces lift out; three question chips |
| 43 to 90 s | 2 | FactorStack tiles: join, cancel in pairs, groups |
| 90 to 173 s | 3 to 4 | BlockLadder down to one block, then the share board (layer, row, block as shares) |
| 173 to 218 s | 5 | Edge and face lifted out; power-of-a-power rows; root-first ladder |
| 218 to 249 s | 6 | IndexDial across zero: counts turn into shares |
| 249 to 377 s | 7 to 9 | Three g01 boards (site we-1, we-2, we-3) |
| 377 to 398 s | 10 | Framed memory card |
| 398 to 492 s | 11 to 14 | Question cards and countdowns, then feedback with givens strips and crossed slips |
| 492 to 516 s | 15 | Cube beside the chocolate block: (20 + 4)/4 |
| 516 to 561 s | 16 | Key notes with the framed card, then a silent return to scene 15's frame |

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): cold open into 1; 1 to 2 clear change with the cube to a thumbnail; 2 to 3 camera continue (tiles slide aside for the ladder); 3 to 4 camera continue (same ladder); 4 to 5 board reset with the cube full size; 5 to 6 clear change to the dial; 6 to 7, 7 to 8, 8 to 9 clear change (new task); 9 to 10 clear change to the card; attempts and feedback: the card shrinks to the top; 14 to 15 board clear; 15 to 16 fade to the notes board, then a silent return to scene 15's frame.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, the ring shown full from "Pause here to answer."). key-notes is 45 s (1,350 frames in `config.ts`). Review evidence paths: `learning_review` = `checks/m-a11-w01-rev1-learning-review.md`, `science_check` = `checks/m-a11-w01-rev1-maths-check.md`.

## Assets

Inspected before choosing (16 Nov, `public/assets`, read only): no block, cube or toy plate exists in any course (searched maths, biology, chemistry, physics). `chemistry/c9-ice-cube-v1.png` is a single ice cube, the wrong object and not stackable. The die plates (`ma12-die-*`) are s01's anchor and carry chance, not counting factors; not used.

Need (painted, new; see the Codex asset brief): `ma11-block-cube-v1`, `ma11-block-layer-v1`, `ma11-block-row-v1`, `ma11-block-single-v1`. Also shared from w02 (painted in w02's brief, needed for this video's handoff frame): `ma11-chocolate-block-v1`.

Coded (studio kit): factor tiles, the ladder arrows, the dashed thirds of a block, the dial, readouts, working boards, question cards, countdown, hand tags, the tree-roots doodle, the framed card and key notes.

### Studio kit use and additions

Uses: `MATH_ROLES` and `Role`, `Pow`, `HandTag`, `DrawnMark`, `PlateImg`, `LiveReadoutBoard`, `ParameterSlider`, `WorkingBoard` (`TaskStrip`, `EquationStrip`, `GivensCard`, `WorkingRows`, `AnswerFrame`, `MistakeCard`), `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard` with `GivensStrip`.

Additions:
1. **`FactorStack`** (kit-needs item 1): base tiles in a row with × between; modes `join`, `cancel` (pairs across a fraction bar, red pencil strokes, survivors slide together), `group` (bracketed groups), `empty` (an empty bar that fills with 1). Check: the label index always equals the surviving tile count (top minus bottom).
2. **`BlockLadder`**: places the four block plates from their sidecar stacking offsets, lifts pieces out on cues, draws "÷ 3" and "index − 1" arrows, and drives a `LiveReadoutBoard` from one step timeline; a `share` mode sets a piece beside the whole cube with a violet bracket and "piece/27" readout. Check: readout value = 3^index at every step; share = blocks in piece ÷ 27.
3. **`IndexDial`**: a `ParameterSlider` with rational stops and labels written as fractions, linked to `BlockLadder` pieces and a "27^p" readout. Check: the displayed value equals 27^p exactly (rational arithmetic, no floating display).
4. **`RootLadder`** (small, from the kit-needs FactorStack variant): two short rows comparing root-first and power-first.

## Codex asset brief (Maths A11 W01, a cube of 27 wooden blocks)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-w01.md`, route entry math-a11-w01. Paint after the learning review and maths check pass and root gives the go-ahead. Save to `public/assets/maths/`. Every plate: **transparent PNG with a true alpha channel** and clean edges with no coloured fringe or halo (check on a black and a white background); ink and watercolour in the house style, matched in line weight and finish to `maths/ma12-food-tin-v1.png` and `maths/ma12-stacking-chair-side-v1.png`; at least 8 per cent clear margin; no text, labels, letters, numbers, people, hands, faces, backdrop, glow or ground shadow. Never stretch to fit; keep the native aspect ratio.

All four plates use **one identical projection and scale** (a true isometric-style three-quarter view from slightly above, the same block size in every file), so that code can stack them exactly. Each block is a plain, unpainted pale timber cube with soft wood grain, gently rounded edges and thin dark seams between neighbouring blocks; no letters, pictures or colours on faces.

1. `ma11-block-cube-v1.png` (1600 × 1600 px): 27 blocks stacked into one 3 × 3 × 3 cube, every seam visible, showing the top face (9 blocks) and two side faces (9 each).
2. `ma11-block-layer-v1.png` (1600 × 1600 px canvas): one 3 × 3 × 1 layer of 9 blocks, painted so that three copies stacked at the reported offset reproduce plate 1.
3. `ma11-block-row-v1.png` (1600 × 1600 px canvas): one 3 × 1 × 1 row of 3 blocks, running along the same edge direction as the cube's left face.
4. `ma11-block-single-v1.png` (1600 × 1600 px canvas): one block.

Sidecar JSON for each (`ma11-block-*-v1.json`): the screen offset in px of one block step along each of the three axes (x, y, z), the pixel position of the front-bottom corner, and for plate 1 the corner points of the top face and of each visible face (code tints faces and draws edge arrows on them). Report a stacking test (three layers at the reported offset over plate 1, and three rows into one layer) with the misregistration in px; it must be under 3 px at 1600 px.

Report inspection on the paper background (`#f6f1e7`) at 300 px and 600 px, plus the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-w01-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the reasons: the ladder (÷ base, index − 1), 3²/3² = 3⁰ = 1, 3²/3³ = 3⁻¹ = 1/3, and the power-of-a-power argument for 27^(1/3); confirm the shares (9/27, 3/27, 1/27) are stated as shares of the cube.
3. Confirm the conditions: a ≠ 0 for a⁰ (spoken and in notes); a > 0 for fractional indices in key note 5.
4. Confirm the three site examples are unchanged from the pack (`we-1`, `we-2`, `we-3`) and both attempts carry every demand (including "positive indices" and "without a calculator").
5. Confirm the syllabus quote matches the crosswalk exactly and no site module or outcome label appears in learner copy or metadata.
6. Confirm no em dash (U+2014) anywhere in this file, Australian spelling, the narration counts by script, and every bold cue quoted in its scene's Visual in spoken order.
7. Confirm scene 15's frame matches w02's opening frame (`math-a11-w02.md` scene 1).
8. Confirm the plate requests contain no people, hands, text or brand.

## YouTube metadata (draft)

Title: Index Laws: Zero, Negative and Fractional Powers | Year 11 Maths Advanced

(Title length: 73 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/algebraic-techniques-and-inequalities/lesson04.sa.html

Twenty-seven wooden blocks make a 3 × 3 × 3 cube: a layer is 3², a row is 3¹. So what do 3⁰, 3⁻¹ and 27^(1/3) mean? Walk down the cube to see why a⁰ = 1 and why a negative index gives a reciprocal (a share of the whole), then use the power of a power law to see why a fractional index is a root. Then simplify and evaluate expressions with mixed indices, including 27^(−2/3) + 5⁰ − 4⁻¹. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Working with functions.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Use index laws to simplify expressions and solve problems involving positive, negative, zero or fractional indices"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

Builds on: Year 10 index laws. Next: Factorising and algebraic fractions.

#Year11Maths #MathsAdvanced #IndexLaws #HSCScience

## Open decisions

- **1. Plate prefix (root).** `ma11-` is proposed for Year 11 Maths plates, mirroring `ma12-`. Root to confirm before Codex paints.
- **2. Block plates registration (root and Codex).** The ladder and dial need four plates that stack exactly. If Codex cannot hit 3 px registration, the fallback is the whole cube plate plus coded face tints for the pieces (no coded cartoon of a block); the pieces would then highlight in place rather than lift out.
- **3. −3² against (−3)² (root).** The pack lists it as a trap; it is left out to keep one question per video. Proposed home: the functions practice video p01.
- **4. Site link form.** `.sa.html`, as root decision 15 for Year 12.

## Review notes

- Revision 2 (16 Nov 2026): the independent learning review (`../checks/m-a11-w01-learning-review.md`) is resolved; see the Revision 2 section. Next: Codex maths check and error check, then voicing and a build to grade A.
- Revision 1 has had no independent review. Next: student learning review (trace from Year 10 index laws only; check that the ladder makes 3⁰ = 1 feel forced rather than defined; that "a share of the cube" makes negative indices concrete without implying they are about cubes only; that the power-of-a-power argument for 27^(1/3) is followable at playback speed; that the dial gathers without re-teaching), then the Codex maths check and error check, then voicing and a build to grade A.
- The ladder, the share board, the dial and the tile cancellations carry the explanation; judge them at playback speed in the voiced preview, not from stills. Every readout must come from the same step timeline as the plates.
