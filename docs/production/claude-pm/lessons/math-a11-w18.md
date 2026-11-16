# Maths A11 W18: How does the parabola decide a quadratic inequality? Roots, a sketch, above or below, and interval notation (design)

Status: Revision 2 (16 Nov 2026): independent learning review resolved (see "Revision 2" below); not voiced. Revision 1 (16 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`, the d01 Revision 6 pattern and the f01 and s01 models) and the w01 to w14 root rulings (`../checks/root-acceptance-maths-a11-w01-w14.md`). Not voiced (no `math-a11-w18/` folder, no audio). Needs the Codex learning review and maths check before voicing. Nothing recorded; human listening pending.

Narration 5,556 characters, 14 scene headings, about 505 s with holds (the key-notes scene fixed at 45 s), counted by script with the build parser rules (see "Narration length estimate").

## Revision 2 (16 Nov): learning review resolved

Review: `../checks/m-a11-w18-learning-review.md` (summary `../checks/m-a11-w01-w31-learning-review-summary.md`), with root's rulings of 16 Nov. Findings by the review's numbers:

1. Should fix, feedback 2 (about 37 s): **accepted**, reviewer's replacement narration (about 30 s); the slip writes on "Joining them into one chain" and is crossed on "pieces".
2. Optional, scene 4 (about 60 s): **no change**, as advised; check the pace on the voiced preview.
- Length: the trim took the narration to 5,472 characters, under the 5,500 floor, so scene 7 gains one useful sentence on the touching case: "With greater than or equal to, two counts as well, so that one is true for every x." (5,556 characters).

Narration now 5,556 characters by script, about 505 s with holds (see "Narration length estimate"). Stage-plan times below are Revision 1 approximations; frames come from the recording's word timings. Every changed value was rechecked with SymPy (scratchpad `rev2_verify.py`); Codex's maths check remains the authority.

Scope: eighteenth video of the Year 11 Mathematics Advanced course (outline playlist order 18), after w17 (intersections) and before w19 (quadratic models and best values). Pre-design pack: `../pre-design/maths-a11/math-a11-w18.md` (brief 243). Site lesson (read through the pack's quotations, read only): `algebraic-techniques-and-inequalities/lesson11.sa.html` (Quadratic Inequalities, SHA256 `a02045bf8bc95df8ff59220b67d20606dc4ccce0f7f0b5d8952361501cb6adb4`, `we-1`, `we-2`, `we-3`). Every number recalculated with SymPy. Route entry: `math-a11-w18` in `../../programme/maths-a11-route-inputs-2.json`.

Owner rules applied: 2024 syllabus only, content point cited by codename and exact wording; painted plates for the real objects (a club hoodie and its swing tag), coded parabolas, sweeps, number lines and algebra; no people, hands or faces; one main learner question; one reasoning stage at a time; worked examples in the g01 layout with a framed answer and a crossed slip; "Pause here to answer." then a 10 s countdown with the full worded question and a picture; brief feedback with one crossed mistake; original HSC-style questions; key notes as five short bullets with a framed memory card; everyday anchor (a club fundraiser, money); Australian spelling; no em dashes; conversational narration that explains the cause before the rule.

Syllabus content point (Mathematics Advanced 11-12 (2024), Year 11, Working with functions; NESA content-system codename, official `code` field empty), quoted from `../../programme/maths-a11-route-inputs-2.json`:

- `cie9a8bd69` (Quadratic and cubic functions): "Solve quadratic inequalities"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

**Boundary:** starts from w17's final frame (the hoodie and swing tag, the profit curve P = (p − 20)(120 − 2p), a dashed level line at P = 600, a "?" on the price axis, "For which prices is P ≥ 600?"), recalling w14 (a parabola is above the x-axis exactly where y > 0). Solves quadratic inequalities by making one side zero, finding the roots, sketching, and reading where the parabola is above or below the axis: outside the roots (site `we-1`), between them (site `we-2`), with a < 0 (the hoodie, then site `we-3`, by reading the downward curve or by multiplying by −1 and flipping, shown as the curve flipping over the axis); why taking a square root loses solutions (x² > 9); a repeated root and no real roots (pack section 3 edge cases); answers in inequality and interval notation (w09). Stops at solving. Not taught: the best price and building the model (w19); cubic or rational inequalities (not in Year 11).

## Decisions

- **Anchor: a club's hoodie fundraiser (painted plate, live).** The treasurer's model gives the profit at a price of $p as P = (p − 20)(120 − 2p): each hoodie costs $20 to print, and fewer sell as the price rises. The club wants a profit of at least $600: P ≥ 600 ⇔ −2p² + 160p − 3000 ≥ 0 ⇔ p² − 80p + 1500 ≤ 0 ⇔ 30 ≤ p ≤ 50. The answer is a range of prices, not one number, which is the point of an inequality. The model is given, not derived (building price × quantity models is w19's job; the handoff asks where it comes from). Money; a school or sports club. Distinct from every Year 12 Maths anchor (i04's fundraiser donations board is 1000/t, a hyperbola of donations over time, not a priced item; grep of `math-a12-*.md` for hoodie, jumper, merch: no match) and from w01 to w17. The pack's other suggestions are taken by w24 to w31's packs (a garden sprinkler, w24; a road tunnel with a truck, w25), so they were not used.
- **Idealising assumptions (author notes, not learner copy).** (i) The demand line 120 − 2p is an illustrative model for 20 ≤ p ≤ 60; the narration says "the treasurer models". (ii) Prices are treated as continuous; the answer 30 ≤ p ≤ 50 is a range of dollar prices.
- **Simulations (standard item 3).**
  1. **The sign sweep** (scenes 2, 3 and 5, new `SignSweep` on `StudioPlot` with `NumberLineRay` and `IntervalPicture` from w06 and w09): a blue rider sweeps along the x-axis; a vertical stalk from it to the curve is teal when the curve is above the axis and grey when below; a readout shows "y = …" and "above" or "below"; under the plot a number line shades green, live, wherever the rider has found the wanted sign, with open or closed circles placed at the roots by the inequality sign. The answer is built by watching, not memorised.
  2. **The flip** (scene 4): the hoodie's downward curve P − 600 = −2p² + 160p − 3000 rotates about the p-axis into p² − 80p + 1500 scaled (shown as −½ of the curve, then the same shape upright), while the inequality sign in the strip turns from ≥ to ≤; the amber roots stay put and the shaded region on the number line stays the same.
  3. **The profit level** (scenes 1 and 4): on the hoodie's own curve, the dashed level line at 600 and the part of the curve on or above it lights teal; its ends drop to 30 and 50 on the price axis.
- **Colour roles (fixed for the whole video).** Roots **amber** (zeros, as w14); x-values and prices **blue** (inputs, root ruling 12); y-values and profit **teal** (outputs), with the curve's above-axis part teal and below-axis part grey (w13's profit roles); the inequality sign **violet** (it flips); the solution set on the number line **green** (the answer); mistake red, crossed slips only; curves ink.
- **Large type (standard item 5).** Current working line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; all text above y = 950.
- **Handwritten voice (standard item 6).** `HandTag`: "> 0: above", "< 0: below", "one side = 0", "roots", "opens up", "outside", "between", "round: not included", "square: included", "∪ joins two pieces", "÷ (−2): flip", "same roots", "the wrong half", "−4 works too", "both sides", "touches", "always above", "no number does this", circles, arrows and crossings. At most two live at once.
- **Stage changes (standard item 2), about every 30 to 60 s.** w17's frame (1); the sign sweep, outside the roots (2); between the roots (3); the hoodie's curve and the flip (4); g01 board, a < 0 (5); the x² > 9 trap (6); touching and never meeting, two small panels (7); framed memory card (8); question cards (9 to 12); the food-truck handoff (13); key notes (14).
- **Worked examples (g01 layout, standard item 7).** 2 (`we-1`): x² − x − 6 > 0: x < −2 or x > 3, (−∞, −2) ∪ (3, ∞); crossed "−2 < x < 3" captioned "> 0 means above: outside". 3 (`we-2`): x² − 4x + 3 ≤ 0: 1 ≤ x ≤ 3, [1, 3]; crossed "(1, 3)" captioned "≤ includes the roots: square brackets". 5 (`we-3`): −x² + 2x + 8 ≥ 0: −2 ≤ x ≤ 4, [−2, 4]; crossed "x ≤ −2 or x ≥ 4" captioned "÷ (−1): flip". Feedback scenes carry a `GivensStrip`, rows at 52 px, a green framed answer and one crossed slip.
- **Memory aid (standard item 8).** Framed `MemoryAidCard`: "Sketch it, then read it." Key line: "One side 0, find the roots, sketch. Upward parabola: > 0 outside the roots, < 0 between." Key notes are five short bullets beside the card; 45 s.
- **Visual surprise (standard item 9).** In scene 4 the hoodie's curve flips over the price axis as the inequality sign turns, and the shaded prices do not move: dividing by a negative and flipping changes the picture and the sign together, so the answer stays the same. In scene 6 the rider tries x = −4 and the stalk rises above 9, lighting a second green piece that "x > 3" had missed.
- **Site numbers unchanged.** `we-1`: (−∞, −2) ∪ (3, ∞). `we-2`: [1, 3]. `we-3`: [−2, 4].
- **Site decisions (pack section 8).** The repeated-root case is added (scene 7), because the site has none; "never divide by the variable" is not used as a rule (scene 6 shows square-rooting losing solutions instead).
- **Attempts (pack questions, original).** A1: "Solve 6 + x − x² > 0. Give your answer in interval notation." Answer (−2, 3). Crossed "x < −2 or x > 3". A2: "Solve 2x² ≥ 5x + 3." Answer x ≤ −½ or x ≥ 3, (−∞, −½] ∪ [3, ∞). Crossed "−½ ≥ x ≥ 3".
- **Mistake scene:** none separate. Reading the wrong region (2 crossed); round brackets for ≤ (3 crossed); forgetting the flip (5 crossed; A1 crossed); square-rooting an inequality (6); a two-piece answer written as one chain (A2 crossed); treating a touching root as a solution of a strict inequality (7).
- **Cause chain taught, in order:** (1) y > 0 means the graph is above the x-axis and y < 0 means below (w14), so a quadratic inequality asks where the parabola is above or below (2); (2) it can only change sides at a root, so the roots split the number line, and the shape says which pieces are above (2, 3); (3) strict signs leave the roots out (round brackets), non-strict signs include them (square brackets) (2, 3); (4) multiplying by a negative flips the sign, which matches flipping the parabola over the axis: same roots, above and below swapped (4, 5); (5) a square root keeps only the positive side, so it loses solutions (6); (6) if the parabola only touches or never meets the axis, it never changes sides (7).
- **Entry knowledge (route):** w06 (linear inequalities and the flip); w09 (interval notation); w14 (the discriminant and the sign of a place a parabola).
- **Learner-visible vocabulary (plain meaning at first use):** quadratic inequality (a quadratic compared with <, >, ≤ or ≥, 1); strict and non-strict (without or with "or equal to", 2, 3); union, ∪ ("or": both pieces, 2); interval notation (recalled from w09, 2).
- **Handoff (to w19, "How do quadratic models find a best value in context?").** Scene 13: the food truck (`ma11-food-truck-v1.png`) with its blank menu board showing coded "$p a tray", a tray of dumplings (`ma11-dumpling-tray-v1.png`) on its counter, and beside it a small hoodie badge with "30 ≤ p ≤ 50 ✓" and "best price?"; chips "Best price? Where does the model come from?" and "Next: quadratic models and best values". This is w19's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) P = (p − 20)(120 − 2p) = −2p² + 160p − 2400; P − 600 = −2p² + 160p − 3000 = −2(p − 30)(p − 50); P(30) = P(50) = 600; P(40) = 800 (the best price, shown only as "?" here, answered in w19's opening if root wants it).
  (b) (x − 2)² > 0 for x ≠ 2; (x − 2)² ≤ 0 only at x = 2 (author only; not voiced); x² + 4 has Δ = −16 and a = 1 > 0, so x² + 4 > 0 for all real x and x² + 4 < 0 has no solution.
  (c) Pronunciations: "union", "infinity", "open interval minus two, three", "minus a half".
  (d) Windows: hoodie plot p 0 to 70, P −200 to 900; worked plots x −4 to 5, y −8 to 8 (labelled scales); number lines from −5 to 6 at 52 px tick labels.

Main question: *A club wants at least $600 profit from hoodies. For which prices does that happen? How does the parabola decide a quadratic inequality?*
Entry knowledge (w06; w09; w14): the flip for linear inequalities; interval notation; a parabola above the axis where y > 0.
Stops after: one side zero, roots, sketch, read; outside or between; a < 0 and the flip; strict and non-strict; touching and no real roots; inequality and interval notation. No best values.
Handoff: math-a11-w19: the food truck and "best price?".

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed; see Decisions): roots amber; x-values and prices blue; y-values, profit and above-axis parts teal, below-axis parts grey; the inequality sign violet; the solution set green; mistake red, crossed slips only; curves ink. Type: current line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; all text above y = 950. Every stage's main visual is solid from the stage's first frame. Header strip "MATHEMATICS ADVANCED · WORKING WITH FUNCTIONS"; scene headings in the hand font, 44 px.

### 1. hook: at least $600
> Here's a club's hoodie fundraiser. Each hoodie costs twenty dollars to print, and the higher the price, the fewer the club sells. The treasurer models the profit at a price of p dollars as p minus twenty, times one hundred and twenty minus two p. The club wants at least six hundred dollars **profit**. Is that one price? No. A whole stretch of the curve sits on or above six hundred, so the answer is a range of **prices**. How does the parabola decide a quadratic inequality?

Visual: opens on w17's final frame exactly (the hoodie `ma11-club-hoodie-v1.png` with its swing tag `ma12-swing-tag-v1.png` showing coded "$p", the profit curve P = (p − 20)(120 − 2p) on axes, the dashed teal level line at P = 600, the "?" on the p axis, chips "For which prices is P ≥ 600?" and "Next: quadratic inequalities"). On the first sentence the "Next" chip fades and the heading writes on "Above or below?". Equation strip, 44 px: "P = (p − 20)(120 − 2p)". On "twenty dollars to print" the tag's "$p" pulses blue. On "profit" a strip "P ≥ 600" with "≥" violet. On "No" the profit level (simulation 3): the part of the curve on or above the dashed line lights teal; its two ends drop dashed blue lines to the p axis, still unlabelled ("?"). On "prices" a green bar draws along the p axis between the drops, hand tag "a range, not one number".

### 2. above the axis: outside the roots
> Start with a simpler one. Solve x squared minus x minus six greater than zero. Greater than zero means above the x axis, so we need to know where the parabola is above the axis. It can only change sides where it crosses, so find the roots first. It factors to x minus three, times x plus two, so the roots are minus two and **three**. a is positive, so it opens upwards. The middle dips below the axis, and both arms rise above it. So y is positive outside the roots, x less than minus two, or x greater than **three**. The roots give zero, which isn't greater than zero, so they're left out. In interval notation, that's two pieces joined by a union, with round **brackets**.

Visual: clear change to the sign sweep (simulation 1). Top: the plot (x −4 to 5, y −8 to 8; 1,200 × 520 px). Bottom: a number line (−5 to 6) at full width. Task strip, 44 px: "Solve x² − x − 6 > 0. Give your answer in interval notation." (site `we-1`). On "above the x axis" chip "> 0 ⟷ above", hand tag "> 0: above". On "three" (first) row "(x − 3)(x + 2) > 0" (52 px), amber dots at −2 and 3 on the axis and on the number line, hand tag "roots". On "opens upwards" the curve draws (ink). The rider sweeps from −4 to 5: the stalk is teal left of −2, grey between, teal right of 3; the number line shades green on the two outer pieces as the rider passes, open circles at −2 and 3, hand tag "outside". On "three" (second) row "x < −2 or x > 3" (52 px, green). On "left out" the open circles pulse, hand tag "round: not included". On "brackets" framed answer (green): "(−∞, −2) ∪ (3, ∞)", hand tag "∪ joins two pieces". A red slip "−2 < x < 3" writes small at the right and is crossed (caption "> 0 means above: outside").

### 3. on or below: between the roots
> Now the opposite question. Solve x squared minus four x plus three less than or equal to zero. Less than or equal to zero means on or below the axis. The roots are one and **three**, and it opens upwards, so it's below the axis between them. Less than or equal includes the roots, so x is between one and three, ends included. Check a value inside. x equals two gives four minus eight plus three, which is minus one, below zero, so it **works**. In interval notation that's one, three, with square brackets, because the ends are **in**.

Visual: camera continue; the plot and number line clear and redraw for the new task. Task strip, 44 px: "Solve x² − 4x + 3 ≤ 0. Give your answer in interval notation." (site `we-2`). Chip "≤ 0 ⟷ on or below". On "three" row "(x − 1)(x − 3) ≤ 0", amber roots at 1 and 3; the curve draws; the rider sweeps and the number line shades green only between 1 and 3, with closed circles at both ends, hand tag "between". Row "1 ≤ x ≤ 3" (52 px). On "works" the rider jumps to x = 2: the stalk reads "4 − 8 + 3 = −1 < 0" (grey, below), hand tag "test a value". On "in" framed answer (green): "[1, 3]", hand tag "square: included". A red slip "(1, 3)" writes small and is crossed (caption "≤ includes the roots: square brackets").

### 4. the hoodies: a downward parabola and the flip
> Back to the hoodies. First, make one side zero. P minus six hundred is at least zero, and expanding gives minus two p squared plus one hundred and sixty p minus three thousand, at least **zero**. a is minus two, so this parabola opens downwards. You could read it as it is. Or divide by minus two, and flip the sign, just as with a linear inequality. That gives p squared minus eighty p plus fifteen hundred, less than or equal to **zero**. Flipping the sign matches flipping the parabola over the axis. The roots stay put, and above swaps with **below**. It factors to p minus thirty, times p minus fifty, so p is from thirty to fifty. That sits inside the prices where the model makes sense, twenty to sixty dollars. So any price from thirty to fifty dollars gives at least six hundred dollars **profit**.

Visual: clear change back to the hoodie (plate 520 px at the top left) and its curve, now redrawn as P − 600 against p (p 0 to 70, y −1,200 to 400; labelled scales), with the number line under it (prices 0 to 70). Rows at the right, 52 px current: "P − 600 ≥ 0", hand tag "one side = 0"; on "zero" (first) "−2p² + 160p − 3000 ≥ 0" with "−2" and "≥" violet. On "opens downwards" the curve's middle part above the axis lights teal. On "divide by minus two" the flip (simulation 2): the curve rotates about the p axis into the upright shape (shown as p² − 80p + 1500 scaled), while the "≥" in the row turns into "≤", hand tag "÷ (−2): flip"; on "zero" (second) row "p² − 80p + 1500 ≤ 0". On "below" amber roots at 30 and 50 pulse, unmoved, hand tag "same roots"; the shaded region (between) stays where it was. Rows "(p − 30)(p − 50) ≤ 0", "30 ≤ p ≤ 50" (blue, green frame). On "model makes sense" a grey bracket marks 20 to 60 on the price axis, hand tag "inside the model's range". On "profit" the hoodie's tag cycles "$30", "$40", "$50" with readouts "P = 600", "P = 800", "P = 600" (teal), and the green bar on the price axis labels "30 ≤ p ≤ 50", framed answer (green): "Prices from $30 to $50 give at least $600 profit."

### 5. worked example: a negative leading coefficient
> Here's that flip on its own. Solve minus x squared plus two x plus eight, greater than or equal to zero. Multiply through by minus one, and flip, so x squared minus two x minus eight is less than or equal to **zero**. That's x minus four, times x plus two, roots four and minus two. An upward parabola, on or below the axis, so between the roots. Minus two is less than or equal to x, which is less than or equal to **four**. Forget to flip, and you'd answer outside the roots. That's exactly the wrong **half**.

Visual: clear change to the g01 board with a small sign sweep at the right. Task strip, 44 px: "Solve −x² + 2x + 8 ≥ 0." (site `we-3`). Givens card: "a = −1" (violet). Rows, 52 px: on "zero" "× (−1): x² − 2x − 8 ≤ 0" with the "≤" violet, hand tag "flip"; "(x − 4)(x + 2) ≤ 0"; amber roots at −2 and 4 on the plot and the number line; the rider shades between them, closed circles. On "four" framed answer (green): "−2 ≤ x ≤ 4, that is [−2, 4]". On "half" a red slip "x ≤ −2 or x ≥ 4" writes and is crossed (caption "÷ (−1): flip"), hand tag "the wrong half".

### 6. the square-root trap
> Here's a trap. Solve x squared greater than nine. It's tempting to take the square root and write x greater than **three**. But try minus four. Minus four squared is sixteen, which is bigger than nine, so minus four works **too**. Rearrange to x squared minus nine greater than zero. The roots are minus three and three, it opens upwards, so it's outside the roots. x less than minus three, or x greater than **three**. A square root keeps only the positive side, but the parabola shows **both**.

Visual: clear change. Left: the strip "x² > 9" (60 px) and a tempting row "x > 3" in grey pencil. On "three" (first) the grey row writes. On "too" the sign sweep at the right (y = x² − 9): the rider jumps to x = −4, its stalk reads "16 − 9 = 7 > 0" in teal, and a green piece lights on the number line left of −3, hand tag "−4 works too". Rows, 52 px: "x² − 9 > 0", "(x − 3)(x + 3) > 0", amber roots ±3; on "three" (second) "x < −3 or x > 3" (green frame). On "both" the grey "x > 3" is crossed in red (caption "√ loses the negative side"), hand tag "both sides".

### 7. touching, and never meeting
> Two more cases are worth seeing. What if the parabola only touches the axis? x minus two, all squared, greater than zero, is true for every x except **two**, where it's exactly zero. With greater than or equal to, two counts as well, so that one is true for every x. And what if it never meets the axis? x squared plus four has a negative discriminant and opens upwards, so it's always above. So x squared plus four greater than zero is true for all real **x**, and x squared plus four less than zero has no solution at **all**.

Visual: clear change to two side panels (each 860 × 560 px). Left: y = (x − 2)², touching the axis at a single amber dot (2, 0); strip "(x − 2)² > 0". On "two" the number line under it shades green everywhere with one open circle at 2, framed "all real x except x = 2", hand tag "touches". While the "greater than or equal to" sentence is spoken, a small grey strip "(x − 2)² ≥ 0" writes under it and the open circle at 2 fills in (closed), grey tag "≥: all real x". Right: y = x² + 4, wholly above its axis, with the w14 chip "Δ = −16 < 0, a > 0: wholly above" (violet and teal). On "x" (last but one bold) its number line shades green everywhere, framed "x² + 4 > 0: all real x", hand tag "always above". On "all" a second strip "x² + 4 < 0" with an empty number line, framed "no solution", hand tag "never below".

### 8. memory aid
> Here's a way to remember it. Sketch it, then read it. Make one side zero, find the roots, sketch the parabola, and read where it's above or below the axis. For an upward parabola, greater than zero is outside the roots, and less than zero is **between**.

Visual: stage change to the framed `MemoryAidCard` (about 1,300 × 600 px, double ink frame, hand-font heading "Memory aid"). Left slot: a tiny upward parabola with its arms teal and its dip grey, a number line under it shading outside, then between (a 3 s loop). Main line, hand font 60 px: "Sketch it, then read it." On "between" the key line, 40 px: "One side 0, find the roots, sketch. Upward parabola: > 0 outside the roots, < 0 between." Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. Solve six plus x minus x squared greater than zero. Give your answer in interval notation. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Solve 6 + x − x² > 0. Give your answer in interval notation." The full question stays on screen. Picture slot: empty axes over a blank number line (no curve, no shading). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> Multiply by minus one and flip, so x squared minus x minus six is less than **zero**. That's x minus three, times x plus two, roots three and minus two. An upward parabola is below the axis between them, so minus two is less than x, which is less than three. That's the open interval minus two, **three**. If you answered outside the roots, the sign didn't **flip**.

Visual: the card shrinks to the top (30 px). `GivensStrip`: "6 + x − x² > 0", "interval notation" (underlined as used). Rows, 52 px: on "zero" "x² − x − 6 < 0" ("<" violet); "(x − 3)(x + 2) < 0"; the picture draws the upward curve, amber roots −2 and 3, the number line shading between with open circles. On "three" framed answer (green): "−2 < x < 3, that is (−2, 3)". On "flip" a red slip "x < −2 or x > 3" writes and is crossed (hand caption "× (−1): flip the sign"). Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. Solve two x squared greater than or equal to five x plus three. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Solve 2x² ≥ 5x + 3." The full question stays on screen. Picture slot: empty axes over a blank number line. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 12. feedback 2 (brief)
> Make one side zero, so two x squared minus five x minus three is at least **zero**. That's two x plus one, times x minus three, so the roots are minus a half and **three**. It opens upwards, and we want on or above the axis, so it's outside the roots: x at most minus a half, or x at least **three**. Joining them into one chain describes no number at all. An outside answer needs two separate **pieces**.

Visual: the card shrinks to the top. `GivensStrip`: "2x² ≥ 5x + 3". Rows, 52 px: on "zero" "2x² − 5x − 3 ≥ 0", hand tag "one side = 0"; on "three" (first) "(2x + 1)(x − 3) ≥ 0", amber roots at −½ and 3; the picture draws the curve and shades the two outer pieces with closed circles. On "three" (second) framed answer (green): "x ≤ −½ or x ≥ 3, that is (−∞, −½] ∪ [3, ∞)". While "Joining them into one chain" is spoken, the red slip "−½ ≥ x ≥ 3" writes; on "pieces" it is crossed (hand caption "no number does this"). Hold about 1 s.

### 13. handoff
> So the parabola decides. Make one side zero, find the roots, sketch, and read. And the hoodies? Any price from thirty to fifty dollars works. But which single price gives the most, and where do models like this come from? Here's a food truck setting the price of a tray of dumplings. How do quadratic models find a best **value**?

Visual: the memory line shows small at the top (30 px), then fades on "And the hoodies?". A hoodie badge (300 px) with "30 ≤ p ≤ 50 ✓" and a "best price?" ring on its curve's top shrinks to the top left. Board clears to the food truck `ma11-food-truck-v1.png` (about 1,200 px wide, solid) with its blank menu board showing coded "$p a tray" and a tray of dumplings `ma11-dumpling-tray-v1.png` on the serving counter. On "value" chips "Best price? Where does the model come from?" and "Next: quadratic models and best values". Hold about 2 s. This is w19's opening frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Make one side 0. Find the roots. Sketch.
- y > 0: above the axis. y < 0: below.
- Upward: > 0 outside the roots, < 0 between.
- × or ÷ by a negative: flip the sign (or read the downward curve).
- < or >: round brackets. ≤ or ≥: square. Two pieces: ∪.

Memory aid (framed card, right side of the notes screen, as in scene 8): *Sketch it, then read it.* Key: *One side 0, find the roots, sketch. Upward parabola: > 0 outside the roots, < 0 between.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades (1 s) back to scene 13's frame exactly (the food truck with "$p a tray", the dumpling tray, the hoodie badge and both chips). This is the final frame and w19's opening frame.

## Teaching checks

- **Does it explain causes?** Why read above or below: > 0 and < 0 are the graph's height (2). Why the roots split the line: the curve can only change sides where it crosses (2). Why outside or between: the shape (a's sign) says which pieces are above (2, 3). Why round or square brackets: strict signs exclude the roots, non-strict include them (2, 3). Why the flip: multiplying by a negative reverses order, which is the curve flipping over the axis with the roots fixed (4, 5). Why square-rooting fails: it loses the negative side (6). Why touching and never-meeting cases have no sign change (7).
- **Misconceptions addressed:** the wrong region (2 crossed); round brackets for ≤ (3 crossed); the missing flip (5 crossed; A1 crossed); square-rooting (6); one chain for two pieces (A2 crossed); a touching root counted in a strict inequality (7).
- **Visual standard (`../maths-visual-standard.md`), item by item:** 1 the painted hoodie and tag from the first frame, answered in 4; 2 a new stage every 30 to 60 s; 3 the sign sweep (rider, stalk and live shading), the flip, the profit level; 4 fixed colour roles; 5 large type; 6 hand tags; 7 g01 boards in 2, 3 and 5 with framed answers and crossed slips; 8 framed memory card and five short bullets; 9 the curve flipping while the shaded prices stay put, and −4 lighting a second piece.
- **One idea at a time:** outside (2), between (3), a < 0 on the anchor (4), the flip alone (5), the trap (6), edge cases (7).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible, each card with blank axes and a number line; 10 s each with the invitation to pause; nothing answer-bearing. One crossed mistake each; feedback about 26 s and 36 s.
- **Avoided double teaching:** linear inequalities and the flip (w06), interval notation (w09), the discriminant's placement (w14) are used, not re-taught.
- **Syllabus coverage:** `cie9a8bd69` (1 to 7; A1, A2; key notes 1 to 5).
- **Out of scope by design:** the best price and building models (w19); cubic and rational inequalities.

## Practice questions and model answers

**Attempt 1 (scene 9; original wording, HSC style, 2 marks suggested, not an official marking scheme).** "Solve 6 + x − x² > 0. Give your answer in interval notation."
Model answer: multiply by −1 and reverse the sign: x² − x − 6 < 0, so (x − 3)(x + 2) < 0. The roots are −2 and 3; the upward parabola is below the axis between them. −2 < x < 3, that is (−2, 3). Classic mistake (crossed): "x < −2 or x > 3".

**Attempt 2 (scene 11; original wording, HSC style, 3 marks suggested).** "Solve 2x² ≥ 5x + 3."
Model answer: 2x² − 5x − 3 ≥ 0, so (2x + 1)(x − 3) ≥ 0. Roots −½ and 3; the upward parabola is on or above the axis outside them: x ≤ −½ or x ≥ 3, that is (−∞, −½] ∪ [3, ∞). Classic mistake (crossed): "−½ ≥ x ≥ 3".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hoodie model | P = (p − 20)(120 − 2p) = −2p² + 160p − 2400; P − 600 = −2p² + 160p − 3000; ÷(−2): p² − 80p + 1500 ≤ 0 = (p − 30)(p − 50); 30 ≤ p ≤ 50; P(30) = P(50) = 600, P(40) = 800 | 1, 4, 13 |
| Site `we-1` | x² − x − 6 = (x − 3)(x + 2) > 0: x < −2 or x > 3; (−∞, −2) ∪ (3, ∞) | 2 |
| Site `we-2` | x² − 4x + 3 = (x − 1)(x − 3) ≤ 0: [1, 3] | 3 |
| Site `we-3` | −x² + 2x + 8 ≥ 0 ⇔ x² − 2x − 8 ≤ 0 = (x − 4)(x + 2): [−2, 4] | 5 |
| Trap | x² > 9: x < −3 or x > 3; (−4)² = 16 | 6 |
| Edge cases | (x − 2)² > 0: x ≠ 2; x² + 4: Δ = −16, > 0 for all x, < 0 none | 7 |
| A1 | 6 + x − x² > 0 ⇔ x² − x − 6 < 0: (−2, 3) | 9, 10 |
| A2 | 2x² − 5x − 3 = (2x + 1)(x − 3) ≥ 0: (−∞, −½] ∪ [3, ∞) | 11, 12 |

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy 1.14 (16 Nov 2026, scratchpad `w15w23/verify.py`, 85 checks, none failing); Codex to re-check.

- (p − 20)(120 − 2p) = −2p² + 160p − 2400; (p − 20)(120 − 2p) ≥ 600 ⇔ 30 ≤ p ≤ 50; values 600, 800, 600 at p = 30, 40, 50; 120 − 2(40) = 40.
- (−2p² + 160p − 3000)/(−2) = p² − 80p + 1500 = (p − 30)(p − 50).
- x² − x − 6 > 0 ⇔ x ∈ (−∞, −2) ∪ (3, ∞).
- x² − 4x + 3 ≤ 0 ⇔ x ∈ [1, 3].
- −x² + 2x + 8 ≥ 0 ⇔ x ∈ [−2, 4].
- x² > 9 ⇔ x ∈ (−∞, −3) ∪ (3, ∞).
- (x − 2)² > 0 ⇔ x ≠ 2; x² + 4 > 0 for all real x; x² + 4 < 0 has no solution; Δ(x² + 4) = −16.
- 6 + x − x² > 0 ⇔ x ∈ (−2, 3).
- 2x² ≥ 5x + 3 ⇔ x ∈ (−∞, −½] ∪ [3, ∞); (2x + 1)(x − 3) = 2x² − 5x − 3.

## Memory aid check

- **"Sketch it, then read it."** Original. Meaning, as said in scene 8: with one side zero, find the roots, sketch the parabola, and read the x-values where it is above (> 0) or below (< 0) the axis; for an upward parabola with two roots, > 0 is outside them and < 0 between. Assumptions checked: the key line's "outside/between" is stated for an upward parabola with two distinct real roots; downward ones are read from the sketch or flipped first (4, 5); touching and no-root cases are read from the sketch too (7). It helps a new case: x² − 1 ≤ 0: roots ±1, upward, on or below between: [−1, 1]. Introduced after the causes in 2 to 5.
- **Considered, not used:** "Greater: outside; less: between" (true only for a > 0 with two roots; kept as the key line with that condition).

## Narration length estimate

Recounted for Revision 2 (16 Nov 2026). Counted 16 Nov 2026 with the build parser rules (`### N.` headings; only lines starting "> " inside the scene, joined with a space, `**` removed; the total is the sum of the scene strings): **5,556 characters**, 14 scene headings. Characters per scene (1 to 14): 469, 664, 524, 791, 500, 480, 516, 250, 123, 354, 95, 389, 326, 75.

At 13.3 characters per second the speech is about 418 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, two feedbacks 1 s each, handoff 2 s) 6 s; settling for the sign sweeps (2, 3), the flip morph (4), the trap's second piece (6) and the two edge panels (7), about 22 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 505 s (8 min 25 s)**, inside the 5,500 to 6,800 character band and about 65 s under the 570 s cap.

Reserve trims, if the voiced takes run long, in this order: scene 7's first sentence (keep both panels); scene 13's "And the hoodies? Any price from thirty to fifty dollars works." (keep the badge). Do not cut below 5,500 characters.

## Scene list and build ids

Lesson key `m-a11w18` (route math-a11-w18). Explainer folder `src/explainer/lessons/math-a11-w18`; build inputs in `docs/production/claude-pm/lessons/math-a11-w18/` (to be created at voicing).

In order (kebab-case; 14 scene headings): hook-at-least-600, outside-the-roots, between-the-roots, hoodie-flip, worked-negative-a, square-root-trap, touch-and-never, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (seconds from the estimate):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 38 s | 1 | w17's frame; the hoodie's profit level |
| 38 to 98 s | 2 | The sign sweep: outside the roots |
| 98 to 131 s | 3 | Between the roots, closed circles |
| 131 to 196 s | 4 | The hoodie's curve flips; prices $30 to $50 |
| 196 to 236 s | 5 | g01 board: a negative leading coefficient |
| 236 to 273 s | 6 | The square-root trap: −4 lights a second piece |
| 273 to 307 s | 7 | Touching and never meeting, two panels |
| 307 to 330 s | 8 | Framed memory card |
| 330 to 432 s | 9 to 12 | Question cards with pictures and countdowns, then feedback |
| 432 to 461 s | 13 | The food truck with "best price?" |
| 461 s to end | 14 | Key notes with the framed card, then a silent return to scene 13's frame |

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): w17's last frame continues into scene 1 (identical frame); 1 to 2 clear change; 2 to 3 camera continue (same stage, new task); 3 to 4 clear change back to the hoodie; 4 to 5 clear change; 5 to 6 clear change; 6 to 7 clear change (two panels); 7 to 8 camera pull back to the card; attempts and feedback: the card shrinks to the top; 12 to 13 board clear; 13 to 14 fade to the notes board, then a silent return to scene 13's frame.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, the ring shown full from "Pause here to answer."). key-notes is 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11w18-learning-review.md`, `science_check` = `checks/m-a11w18-maths-check.md`.

## Assets

Inspected before choosing (16 Nov 2026, `public/assets/maths`, read only): `ma12-swing-tag-v1.png` (a blank swing tag; reused for the price); `ma12-fundraiser-board-v1.png` (i04's donations board; a different idea, not used). No hoodie or clothing plate exists in `maths/`.

Need (painted, new; see the Codex asset brief): `ma11-club-hoodie-v1.png` (also w17's handoff). w19's `ma11-food-truck-v1.png` and `ma11-dumpling-tray-v1.png` are commissioned in w19's brief and must be painted before this video's build (scene 13). Reused: `maths/ma12-swing-tag-v1.png`.

Coded (studio kit): every curve, axis, root dot, stalk, rider, number line, circle, shading, readout, working board, question card, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `MATH_ROLES` and `Role`, `HandTag`, `PlateImg`, `LiveReadoutBoard`, `StudioPlot`, `FunctionSimulator`, `NumberLineRay` and `IntervalPicture` (w06, w09), `TaskStrip`, `EquationStrip`, `GivensCard`, `WorkingRows`, `AnswerFrame`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard` with `GivensStrip`.

Additions (new kit-needs row w18):
1. **`SignSweep`** (new; reused by w20's sign walk): props `f`, `sign` (one of >, ≥, <, ≤), `xRange`, `riderPath(t)`; draws the rider, a stalk coloured by the sign of f at the rider, a live readout, and shades a linked `NumberLineRay` green wherever the wanted sign holds among the swept x (computed, not keyed), with circles at the real roots open or closed by `sign`. Checks: x² − x − 6 with > shades (−∞, −2) ∪ (3, ∞) with open circles; x² − 4x + 3 with ≤ shades [1, 3] with closed circles; (x − 2)² with > shades all but 2.
2. **Flip morph** (lesson folder): a curve g rotates about the x-axis into −g (scaled for display) while a linked inequality glyph swaps (≥ ↔ ≤); the roots and the shading are computed from both and must agree.

## Codex asset brief (Maths A11 W18, a club hoodie; also w17's handoff)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-w18.md`. Paint after the learning review and maths check pass and root gives the go-ahead, and **before the w17 build** (w17's final frame uses it). Save to `public/assets/maths/`. **Transparent PNG with a true alpha channel**, clean edges (check on black and white); ink and watercolour in the house style, matched to `maths/ma12-timber-deck-v1.png` and `maths/ma12-pen-wall-v1.png`; no text, logos, crests, numbers, people, hands, faces, pets, hanger hooks with brands, glow or shadow beyond a faint contact shadow. Never stretch to fit; keep the native aspect ratio.

1. `ma11-club-hoodie-v1.png`: a plain navy club hoodie hanging flat on a simple timber hanger, front view, hood behind, a kangaroo pocket, drawstrings, 1100 × 1300 px, with a small blank loop of string at the left cuff where the builder attaches the reused swing tag `ma12-swing-tag-v1.png` (report the loop point). No print, logo or lettering on the hoodie.

Report in a sidecar `ma11-club-hoodie-v1.json`, in file pixels: the tag loop point and the hoodie's bounding box. Report inspection on the paper background (`#f6f1e7`) at 640 px wide, the alpha check, and the hoodie with the swing tag attached.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the syllabus quote matches the route-inputs JSON exactly, and no site module label appears.
3. Confirm the scope of every learner-visible general claim: "it can only change sides where it crosses" (2; a parabola, continuous); "upward: > 0 outside the roots, < 0 between" (8, key notes; two distinct real roots); "dividing by a negative flips the sign" (4, 5); "a square root keeps only the positive side" (6); the touching and no-root cases (7); the model language for the hoodie (1).
4. Confirm the site's `we-1`, `we-2` and `we-3` keep their answers and brackets.
5. Confirm both attempt questions carry every demand, and that neither card or its picture shows a curve, root or shading.
6. Confirm the opening matches w17's final frame and scene 13's frame is w19's opening frame.
7. Confirm no em dash (U+2014) anywhere in this file, Australian spelling, and the narration counts by script with every bold cue quoted in its scene's Visual in spoken order.
8. Confirm the plate request contains no people, text, logos or numbers.

## YouTube metadata (draft)

Title: Quadratic Inequalities: Let the Parabola Decide | Year 11 Maths Advanced

(Title length: 73 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/algebraic-techniques-and-inequalities/lesson11.sa.html

A club wants at least $600 profit from its hoodies. For which prices does that happen? A quadratic inequality asks where a parabola is above or below the x-axis, and the answer is usually a range. Make one side zero, find the roots, sketch, and read: outside the roots or between them. See why dividing by a negative flips the sign (the parabola flips too), why taking a square root loses answers, what happens when the parabola only touches the axis or never meets it, and how to write answers in interval notation. A memory aid: sketch it, then read it. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, working with functions.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Solve quadratic inequalities"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

Builds on: linear inequalities; interval notation; the discriminant and the sign of a. Next: Quadratic models: finding the best value.

#Year11Maths #MathsAdvanced #Inequalities #HSCScience

## Open decisions

- **1. Profit models in a row (root).** w18's hoodie and w19's food truck are both profit at a price. w18 gives its model and asks only an inequality; w19 builds its model and asks for the best value (the route's stop boundary for w19 requires a price-times-quantity model). The pack's two other anchors are taken by w24 and w25's packs. Root confirms or asks for a different w18 context.
- **2. The hoodie's best price (root).** P(40) = 800 is shown only as "best price?" in the handoff; w19 may answer it in one sentence in its hook, or leave it.
- **3. The flip picture (learning review).** The reviewer checks that "flipping the sign matches flipping the parabola" lands as a reason and that students do not think the solution moved.
- **4. Site link form.** `.sa.html`, as root decision 15.

## Review notes

- Revision 2 (16 Nov 2026): the independent learning review (`../checks/m-a11-w18-learning-review.md`) is resolved; see the Revision 2 section. Next: Codex maths check and error check, then voicing and a build to grade A.
- Revision 1 has had no independent review. Next: student learning review (trace from w06, w09 and w14; check that the sweep builds the answer rather than illustrating a rule; that round and square brackets are tied to the circles; that the x² > 9 trap is fair; that the hoodie answer is said in context), then the Codex maths check and error check, then voicing and a build to grade A.
- The sign sweep and the flip carry the explanation; judge them at playback speed, not from stills. Every shading, circle and readout must be computed from the same coefficients as the displayed curve.
