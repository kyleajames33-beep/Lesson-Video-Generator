# Maths A11 W28: How do we read and graph a function defined in pieces? Piecewise rules, conditions at a boundary, writing a rule from context, open and closed circles, domain and range, and even or odd tests (design)

Status: Revision 1 (16 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`, the d01 Revision 6 pattern) and the accepted w01 to w14 designs (`../checks/root-acceptance-maths-a11-w01-w14.md`). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,681 characters by script (build parser rules), 13 scene headings, about 515 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: twenty-eighth video of Year 11 Mathematics Advanced (2024), outline order 28, Working with functions. Pre-design pack: `../pre-design/maths-a11/math-a11-w28.md` (brief 243). Site lesson (read through the pack's quotations, read only): `working-with-functions/lesson04.sa.html` (Piecewise & Absolute Value Functions, SHA256 `29324c638f5c3da48aa689e8a3e5d4ddb47c569fd633f0f68ef22b6121e8e780`; `we-pw-1` and `we-pw-3` used with the site's numbers unchanged). Its logged copy error S11-08 (an unrelated (a + b)² box; an age-band model answer) is not taught (Decisions). Route entry: `math-a11-w28` in `../../programme/maths-a11-route-inputs-2.json`. Visual system: maths studio kit; a painted share e-bike and the reused phone (prefix `ma11-`); the brace, graphs, switches, shadows and algebra coded.

Owner rules applied: as w24 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, an everyday anchor (travel), Australian spelling, no em dashes, conversational narration).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Working with functions, Piecewise-defined functions; NESA codenames, official `code` field empty), quoted from `../../programme/maths-a11-route-inputs-2.json`:

- `ci5b30234d`: "Interpret piecewise-defined functions, where the function is defined differently in different parts of the domain"
- `ci088a8d02`: "Graph piecewise-defined functions involving functions covered in the scope of the Mathematics Advanced course, test if they are even or odd, and determine the domain and range"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

**Boundary:** starts from w27's handoff frame (the share e-bike, the phone's ride screen "Unlock $3 (includes 20 min)", "Then 50c per minute", "12 min: $?", "32 min: $?", "Next: a function defined in pieces"). Teaches: a piecewise function as rules with conditions on parts of the domain, read condition first (`ci5b30234d`); the e-bike cost C(t) evaluated at 12, 32 and the boundary 20; graphing each rule only on its own interval with open and closed circles, and domain and range piece by piece (`ci088a8d02`); site `we-pw-1` (evaluation at a boundary, a jump); site `we-pw-3` (a rule from context); testing a piecewise function for even or odd, where −x lands on the other piece (original teaching; the site does not teach it, crosswalk: partial). Stops at reading, graphing and testing. Not taught: continuity and "lifting the pen" as a definition (w29; the handoff only asks the question); |x| as a piecewise function (w30).

## Decisions

### Revision 1 (16 Nov 2026)

- **Anchor: a share e-bike's price (painted plate and reused phone, live).** $3 unlocks the bike and covers the first 20 minutes; each extra minute costs 50c. One rule for short rides and another for long ones is exactly "defined differently in different parts of the domain". The boundary at 20 minutes forces the condition question (which rule at exactly 20?), and the extra-minutes term t − 20 is the classic modelling step. The two pieces meet at (20, 3), which sets up w29's contrast with the dryer's jumps. Travel. No Year 12 Maths design and no w01 to w14 design uses a share bike or an e-bike (grep, 16 Nov; d15's skateboard mentions scooters only in passing, with a different idea); no w15 to w23 pack suggests one. The pack's electricity tiers (continuous, but abstract on screen) and pool entry by age (w13's attempt 1 uses public pools; constant pieces only) were rejected.
- **Model (author note).** C(t) = 3 for 0 < t ≤ 20; C(t) = 3 + 0.5(t − 20) for t > 20 (= 0.5t − 7). Times are treated as any positive number in the model; real apps round to whole minutes. Shown once as a grey tag "a model: any ride time t > 0".
- **Simulations (standard item 3).**
  1. **`PieceSwitch`** (scenes 2 and 3, new part): the brace C(t) with its two rows (rule and condition) beside a plot; a blue input marker slides along the t axis; the row whose condition holds lights in its colour while the other dims, and the output readout (teal) is computed from the lit rule; at t = 20 the top condition's "≤" circles.
  2. **Faint rule, then clip** (scene 3, pack visual): each rule first draws faintly over the whole window, then the part outside its interval fades away, leaving the piece with its end circles (open or closed, computed from the condition's symbol).
  3. **`AxisShadow`** (w09) piece by piece (scene 3): the domain shadow grows along the t axis under each piece; the range shadow on the C axis grows from 3 upward as the second piece climbs; a red "if every rule ran everywhere" ghost range (all reals) is crossed out.
  4. **`SymmetryGhost`** (w26) on a piecewise graph (scene 6, A2's feedback): the half-turn lands one piece on the other.
- **Colour roles (fixed for the whole video).** Inputs t, x, d **blue**; outputs C(t), f(x) **teal** (root ruling 12); the **first piece** (its rule, condition, graph and end circles) **amber**; the **second piece violet**; answer **green**; mistake **red**, crossed slips only. The moved copy in scene 6 is the w26 amber dashed ghost, drawn grey here to avoid clashing with the first piece.
- **Large type, handwritten voice.** As w24. Hand tags: "condition first", "≤ includes 20", "extra minutes: t − 20", "open: not included", "closed: included", "they meet", "jump", "each rule on its own piece", "flat fee still paid", "−x: the other piece", "both pieces".
- **Stage changes (standard item 2).** The e-bike and its ride screen (1); the brace and `PieceSwitch` (2); the graph with clipped pieces and shadows (3); two g01 boards (4, 5); the piecewise symmetry board (6); the framed card (7); question cards (8 to 11); the dryer handoff (12); key notes (13).
- **Worked examples (g01 layout).** 4: site `we-pw-1` (crossed "f(2) = 5(2) − 3 = 7"). 5: site `we-pw-3` (crossed "C(d) = 1.5(d − 2)"). 6: original, g(x) = x² for x ≥ 0 and −x² for x < 0 is odd (crossed "x² is even, so g is even").
- **Memory aid.** Framed card: "Condition first, then the rule." Key: "< or >: open circle. ≤ or ≥: closed circle." Badge: the e-bike's two-piece graph.
- **Visual surprise.** Each rule appears as a full faint line, then everything outside its own interval melts away, leaving two short pieces that meet (the e-bike) or jump (`we-pw-1`).
- **Site corrections applied (`../site-corrections-maths-a11.md`).** S11-08: the unrelated (a + b)² misconception box is not used; its replacement, "use the rule whose condition includes the boundary value", is taught in scenes 2 and 4. The age-band model answer is not used. The minor "surge pricing" term is not used.
- **Original teaching for the partial point.** Testing a piecewise function for even or odd (crosswalk: partial) is taught in scene 6 and practised in A2, with the reason "for x > 0, −x is negative, so f(−x) uses the other rule".
- **Plain meanings at first use.** Piecewise-defined function ("a function with different rules on different parts of its domain"); condition ("the part of the domain where a rule applies"); open circle ("the end value is not included"); closed circle ("the end value is included").
- **Attempts.** A1 (pack question 1, context changed from an e-bike to car hire, because the e-bike is the anchor): $60 a day including 100 km, then 25c per extra km: C(80) = 60, C(180) = 80; crossed "60 + 0.25 × 180 = $105". A2 (pack question 2): h(x) = 2 − x for x ≥ 0 and 2 + x for x < 0: domain all real x, range y ≤ 2, even; crossed "h(−x) = 2 + x, so not even".
- **Mistake scene:** none separate. The wrong rule at a boundary (4 crossed); the flat fee dropped (5 crossed); the second rate on the whole distance (A1 crossed); the union of the rules' full ranges (3, crossed ghost); joining a jump with a line (4, the open and closed circles); one piece deciding symmetry (6 crossed); the wrong piece for −x (A2 crossed).
- **Cause chain taught, in order:** (1) the price follows different rules on different intervals, so the function lists each rule with its condition (1, 2); (2) a value belongs to exactly one condition, so we find the condition before using a rule, including at a boundary (2, 4); (3) each rule only produces outputs on its own interval, so the graph and the range are built piece by piece, with circles showing whether an end is included (3, 4); (4) a context's extra amount beyond a threshold is the input minus the threshold, added to the flat fee (2, 5); (5) for x ≠ 0, x and −x lie on different pieces, so the symmetry test must use both rules (6).
- **Entry knowledge (route):** w08 (evaluating a function); w09 (domain, range, interval notation); w26 (tests for even and odd); w16 (sketching lines and parabolas).
- **Handoff (to w29, "Where does a function break, and what makes it continuous?").** Scene 12: the e-bike graph (small, top left) with its join at (20, 3) ringed and a pen badge tracing it in one stroke; the coin dryer plate (`ma11-coin-dryer-v1.png`, painted under w29's brief) at the right with its staircase cost graph beside it (steps $2, $4, $6 on 0 < t ≤ 10, 10 < t ≤ 20, 20 < t ≤ 30, open circles on the left of each step and closed on the right); chips "Next: can you draw it without lifting your pen?" and "?". This is w29's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) C(12) = 3; C(20) = 3; C(32) = 9; C(40) = 13 (slider only). Range [3, ∞); domain (0, ∞).
  (b) At t = 20 the second rule would also give 3, so the pieces meet; the joined point is included (closed) because the first condition includes 20.
  (c) we-pw-1: f(−1) = 2, f(2) = 5, f(4) = 17; the second rule at 2 gives 7 (open circle).
  (d) Courier: C(d) = 5 for d ≤ 2; 5 + 1.5(d − 2) = 2 + 1.5d for d > 2; C(4) = 8. (The site's domain for d starts at d > 0 implicitly.)
  (e) g(x) = x² (x ≥ 0), −x² (x < 0) is odd: for x > 0, g(−x) = −(−x)² = −x² = −g(x); for x < 0, g(−x) = (−x)² = x² = −(−x²) = −g(x); g(0) = 0.
  (f) A2: h is even; h(x) = 2 − |x| (not said; |x| is w30); range (−∞, 2].
  (g) Pronunciations: "C of t"; "three plus zero point five times, t minus twenty"; "zero point two five"; "a dollar fifty".
  (h) Windows: e-bike plot t 0 to 45, C 0 to 15; we-pw-1 plot x −3 to 4, y 0 to 20; scene 6 plot −3 to 3 by −9 to 9.

Main question: *An e-bike costs $3 for the first 20 minutes, then 50c a minute. One rule can't describe that price. How do we read and graph a function defined in pieces?*
Entry knowledge (w08, w09, w26, w16): evaluating a function; domain, range and interval notation; even and odd tests; sketching lines and parabolas.
Stops after: reading and evaluating a piecewise function, including at a boundary, writing one from context, graphing it with open and closed circles, its domain and range, and testing it for even or odd. No continuity definition, no |x|.
Handoff: math-a11-w29: "the e-bike's pieces meet; the dryer's steps don't: can you draw it without lifting your pen?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): inputs blue; outputs teal; first piece amber; second piece violet; answer green; mistake red, crossed slips only. Header strip "MATHEMATICS ADVANCED · WORKING WITH FUNCTIONS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: one price, two rules
> Here's that share e-bike. Three dollars unlocks it, and that covers your first twenty minutes. After twenty minutes, you pay fifty cents for every extra minute. So a twelve minute ride costs three dollars. A thirty-two minute ride costs three dollars, plus twelve extra minutes at fifty cents, which is nine **dollars**. The price follows one rule for short rides, and a different rule for long ones. So how do we read and graph a function defined in pieces?

Visual: opens on w27's final frame exactly (the e-bike `ma11-share-ebike-v1.png`, the phone `maths/ma12-phone-v1.png` with its ride screen, "Next: a function defined in pieces"). On the first sentence the "Next" chip fades and the heading writes: "One price, two rules?". The phone's "12 min: $?" fills "$3.00" (teal) with an amber tag "within 20 min". On "dollars" the "32 min: $?" row expands: "$3 + 12 × $0.50", then "= $9.00" (teal), with a violet tag "12 extra minutes". On the last sentence a two-colour bar under the bike shows "first 20 min: flat $3" (amber) and "after 20: + 50c a minute" (violet), and the chip "One function, two rules?" moves to the top right.

### 2. reading a piecewise function
> Let C of t be the cost, in dollars, of a ride of t minutes. We write it with a brace. The top line says C of t is three, if t is more than zero and at most twenty. The bottom line says C of t is three plus zero point five times, t minus twenty, if t is more than **twenty**. t minus twenty is the number of extra minutes. Each line is a rule with its own condition, a part of the domain. A function like this is called piecewise defined. To evaluate it, read the condition first, then use that rule. Twelve is at most twenty, so C of twelve is **three**. Thirty-two is more than twenty, so C of thirty-two is three plus zero point five times twelve, which is **nine**. And at exactly twenty? The top condition says at most twenty, which includes twenty, so C of twenty is three.

Visual: camera continue; the bike and phone shrink to a 300 px badge pair at the top left. The brace builds at the left, 52 px: "C(t) = { 3, 0 < t ≤ 20" (amber row) and "3 + 0.5(t − 20), t > 20" (violet row); on "twenty" both rows complete, each condition boxed in its colour. On "extra minutes" the "(t − 20)" underlines violet, hand tag "extra minutes: t − 20". Definition chip, 44 px: "piecewise: different rules on different parts of the domain". `PieceSwitch` at the right: a t axis 0 to 45 with a blue marker; on "three" the marker sits at 12, the amber row lights, readout "C(12) = 3" (teal), hand tag "condition first". On "nine" the marker slides to 32, the violet row lights, readout "C(32) = 3 + 0.5(12) = 9". On "exactly twenty" the marker moves to 20; the amber row's "≤" circles, readout "C(20) = 3", hand tag "≤ includes 20".

### 3. graphing it: domain and range
> To graph it, draw each rule only on its own part of the domain. The top rule is the flat line at three, from just after zero, up to twenty. Zero itself isn't allowed, so that end gets an open circle. Twenty is allowed, so it gets a closed **circle**. The bottom rule is a line climbing fifty cents a minute, from twenty onwards. Here it starts at three as well, so the two pieces **meet**. The domain is every ride time, t more than zero. The range is three or more, since the cost never drops below three **dollars**. If you took each rule's range over every possible t, you'd get all real numbers. That's wrong. Each rule only works on its own **piece**.

Visual: stage change to a large plot (t 0 to 45, C 0 to 15; 1,200 × 760 px) with the brace at 36 px above it. The amber rule "C = 3" draws faintly across the whole window, then the parts outside 0 < t ≤ 20 fade away; an open amber circle at (0, 3) and on "circle" a closed amber circle at (20, 3), tags "open: not included", "closed: included". The violet rule draws faintly as a full line, then clips to t > 20, starting at (20, 3); on "meet" the join pulses, hand tag "they meet". `AxisShadow`: blue domain bar from an open dot at 0 rightward with an arrow, label "domain: t > 0". On "dollars" the teal range bar grows up the C axis from a closed dot at 3 with an arrow, label "range: C ≥ 3". On "If you took each rule's range" a red ghost bar covers the whole C axis ("all reals"); on "piece" it is crossed, caption "each rule on its own piece". A grey tag "a model: any ride time t > 0".

### 4. worked example 1: which rule at a boundary?
> Let's practise. Evaluate f of minus one, f of two, and f of four, where f of x is x squared plus one if x is at most two, and five x minus three if x is greater than two. Minus one is at most two, so use the first rule. Minus one, squared, plus one is **two**. Two is at most two as well, so it's the first rule again. Two squared plus one is **five**. Four is greater than two, so use the second rule. Five times four minus three is seventeen. Using the second rule at x equals two gives seven, which is the **slip**. On the graph, the first piece ends with a closed circle at two, five, and the second starts with an open circle at two, **seven**. This graph jumps.

Visual: clear change to the g01 board (site `we-pw-1`). Task strip, 44 px: "Evaluate f(−1), f(2) and f(4)." Givens card: the brace "f(x) = { x² + 1, x ≤ 2 (amber); 5x − 3, x > 2 (violet)". Rows, 52 px, each beginning with a condition check: "−1 ≤ 2: f(−1) = (−1)² + 1"; on "two" "= 2". "2 ≤ 2: f(2) = 2² + 1"; on "five" "= 5", hand tag "2 is included". "4 > 2: f(4) = 5(4) − 3 = 17". Framed answer (green): "f(−1) = 2, f(2) = 5, f(4) = 17". On "slip" a red slip "f(2) = 5(2) − 3 = 7" writes and is crossed, caption "2 ≤ 2: first rule". On "seven" a plot at the right (x −3 to 4, y 0 to 20): the amber parabola piece ends at a closed circle (2, 5), the violet line starts at an open circle (2, 7), hand tag "jump".

### 5. worked example 2: a rule from words
> Now write a rule from words. A courier charges five dollars for deliveries up to and including two kilometres, and five dollars plus a dollar fifty for each kilometre beyond two kilometres. Write a piecewise function for the cost, C of d. Up to and including two, it's a flat **five**. Beyond two, the extra distance is d minus two, so C of d is five plus one point five times, d minus **two**. That simplifies to two plus one point five d. A four kilometre delivery costs five plus three, which is eight dollars. Leaving out the five dollars, and writing just one point five times, d minus two, is the slip. The flat fee still has to be **paid**.

Visual: clear change to the g01 board (site `we-pw-3`). Task strip, 44 px: "Write a piecewise function C(d) for the cost in dollars of a delivery of d km." The word problem sits in a givens card with "up to and including 2 km" underlined amber and "beyond 2 km" underlined violet, "$5" and "$1.50" boxed. Rows, 52 px: on "five" "C(d) = 5, d ≤ 2" (amber); on "two" "C(d) = 5 + 1.5(d − 2), d > 2" (violet), hand tag "extra km: d − 2"; "= 2 + 1.5d". Check row: "C(4) = 5 + 1.5(2) = 8". Framed answer (green): the brace "C(d) = { 5, d ≤ 2; 2 + 1.5d, d > 2 }". On "paid" a red slip "C(d) = 1.5(d − 2), d > 2" writes and is crossed, caption "flat fee still paid".

### 6. worked example 3: even or odd?
> Piecewise functions can be even or odd too, but you have to test them carefully. Take g of x equals x squared, for x of zero or more, and minus x squared, for x less than zero. Pick x equals two. g of two is four. Minus two is negative, so g of minus two uses the bottom rule, minus, minus two, squared, which is minus **four**. That's the opposite. It works for every x, because minus x always lands on the other piece. So g of minus x equals minus g of x, and g is **odd**. A half-turn about the origin maps one piece onto the **other**. Saying it's even, because x squared is even, is the slip. You have to test the whole function, both **pieces**.

Visual: clear change to the g01 board. Task strip: "Is g(x) = { x², x ≥ 0; −x², x < 0 } even, odd or neither?" Plot at the right (−3 to 3 by −9 to 9): the amber piece x² for x ≥ 0, the violet piece −x² for x < 0. Rows, 52 px: "g(2) = 2² = 4"; "−2 < 0: g(−2) = −(−2)²"; on "four" "= −4", hand tag "−x: the other piece", with (2, 4) and (−2, −4) marked and joined through the origin. Rows: "x > 0: g(−x) = −(−x)² = −x² = −g(x)"; "x < 0: g(−x) = (−x)² = x² = −g(x)". On "odd" framed answer (green): "g(−x) = −g(x): odd". On "other" the grey ghost half-turns about the origin and the amber piece lands on the violet one. On "pieces" a red slip "x² is even, so g is even" writes and is crossed, caption "both pieces".

### 7. memory aid
> Here's a short way to remember it. Condition first, then the rule. Find which piece your x belongs to, then use that rule only. On the graph, less than or greater than means an open circle, and an equals sign underneath means a closed **circle**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the e-bike's two-piece graph badge (amber flat piece, violet climbing piece, closed circle at the join). Main line, hand font 60 px: "Condition first, then the rule." On "circle" the key line, 40 px: "< or >: open circle. ≤ or ≥: closed circle." with an open and a closed circle drawn beside each symbol. Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. A car hire costs sixty dollars a day, which includes the first hundred kilometres. Each kilometre beyond that costs twenty-five cents. Write C of d, the cost of a day's hire with d kilometres driven, as a piecewise function. Then find C of eighty, and C of one hundred and eighty. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A car hire costs $60 a day, which includes the first 100 km. Each kilometre beyond that costs 25c. Write C(d), the cost of a day's hire with d km driven, as a piecewise function. Find C(80) and C(180)." The full question stays on screen. Picture slot: empty axes (d 0 to 250, C 0 to 120). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> Up to a hundred kilometres, it's sixty. Beyond that, it's sixty plus zero point two five times, d minus a **hundred**. So C of eighty is sixty, and C of one eighty is sixty plus twenty, which is eighty **dollars**. Charging twenty-five cents on all one hundred and eighty kilometres gives a hundred and five, which is the slip. Only the kilometres beyond a hundred **count**.

Visual: the card shrinks to the top (30 px). `GivensStrip`: "$60 includes 100 km", "25c per km beyond". On "hundred" the brace (52 px): "C(d) = { 60, 0 ≤ d ≤ 100 (amber); 60 + 0.25(d − 100), d > 100 (violet) }". Rows: "80 ≤ 100: C(80) = 60"; on "dollars" "180 > 100: C(180) = 60 + 0.25(80) = 80", and the two pieces draw on the picture's axes, meeting at (100, 60). Framed answer (green): "C(80) = $60, C(180) = $80". On "count" a red slip "C(180) = 60 + 0.25 × 180 = 105" writes and is crossed, caption "only the 80 km beyond 100". Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. h of x equals two minus x, for x of zero or more, and two plus x, for x less than zero. Sketch h, state its domain and range, and show whether it is even, odd or neither. Pause here to answer.

Visual: `QuestionCard`, 40 px: "h(x) = { 2 − x, x ≥ 0; 2 + x, x < 0 }. Sketch h, state its domain and range, and show whether h is even, odd or neither." Picture slot: empty axes (−4 to 4 by −3 to 3). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 11. feedback 2 (brief)
> The graph is a peak at zero, two, falling on both **sides**. The domain is all real x, and the range is y at most two. For x greater than zero, minus x is negative, so h of minus x uses the bottom rule. That's two plus minus x, which is two minus x, the same as h of x. It works for negative x too, so h is **even**. Using the top rule for h of minus x is the slip. Minus x belongs to the other **piece**.

Visual: the card shrinks to the top. On "sides" the amber piece 2 − x (x ≥ 0) and the violet piece 2 + x (x < 0) draw on the picture's axes, meeting at a closed point (0, 2). Rows, 52 px: "domain: all real x; range: y ≤ 2" with the two shadows. "x > 0: −x < 0, so h(−x) = 2 + (−x) = 2 − x = h(x)"; on "even" framed answer (green): "h(−x) = h(x): even", and a violet mirror line on the y axis with the grey ghost mirroring onto the graph. On "piece" a red slip "h(−x) = 2 − (−x) = 2 + x, so not even" writes and is crossed, caption "−x: the other piece". Hold about 1 s.

### 12. handoff
> Look at the e-bike's graph again. At twenty minutes, the two pieces meet, so you could draw it without lifting your pen. Now here's a laundromat dryer. It charges two dollars for each ten minutes, or part of ten minutes. Its graph is a staircase of flat steps. Could you draw that without lifting your **pen**?

Visual: the memory line shows small at the top (30 px), then fades. Board: the e-bike graph small at the top left (560 × 360 px) with its join ringed; a pen badge (coded, a simple pen outline, no hand) traces it in one stroke. At the right the coin dryer plate (`ma11-coin-dryer-v1.png`, about 520 px tall) with its cost graph beside it (t 0 to 30, cost 0 to 8): three flat steps $2, $4, $6, each with an open circle at its left end and a closed circle at its right end. On "pen" chips "Next: can you draw it without lifting your pen?" and "?". Hold about 2 s. This is w29's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Piecewise: different rules on different parts of the domain.
- Evaluate: check the condition first, then use that rule.
- Graph each rule only on its own interval.
- < or >: open circle. ≤ or ≥: closed circle.
- Even or odd: −x lands on the other piece, so test both.

Memory aid (framed card, right side, as in scene 7): *Condition first, then the rule.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and w29's opening frame.

## Teaching checks

- **Does it explain causes?** Why the brace has conditions: each rule applies on its own interval (2). Why we check the condition first: every input belongs to exactly one condition, even at a boundary (2, 4). Why t − 20: it counts only the extra minutes (2, 5, A1). Why open and closed circles: they show whether an end value belongs to that piece (3, 4). Why the range is not all reals: each rule only runs on its own piece (3). Why −x uses the other rule: for x ≠ 0, x and −x lie on opposite sides of 0 (6, A2).
- **Misconceptions addressed:** the wrong rule at a boundary (4 crossed); the flat fee dropped (5 crossed); the rate on the whole distance (A1 crossed); the union of full ranges (3 crossed ghost); joining a jump (4 circles); one piece deciding symmetry (6 crossed); the wrong piece for −x (A2 crossed).
- **Visual standard, item by item:** 1 the painted e-bike and phone from the first frame, returning as badges in 2 and 7; 2 a new stage every 35 to 55 s; 3 `PieceSwitch`, the faint-then-clipped rules, piecewise shadows, the half-turn ghost; 4 fixed colour roles; 5 large type; 6 hand tags; 7 g01 boards in 4 to 6; 8 framed card and five bullets; 9 the full faint lines melting to their own pieces.
- **One idea at a time:** reading (2), graphing (3), a boundary (4), writing (5), symmetry (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 28 s and 30 s (A2 is a three-part question; the voiced check confirms the time).
- **Avoided double teaching:** evaluation (w08), interval notation (w09), the f(−x) tests (w26) and line sketching (w16) are recalled.
- **Syllabus coverage:** `ci5b30234d` (1, 2, 4, 5, A1; key notes 1, 2); `ci088a8d02` graphing (3, 4, A2; key notes 3, 4), even or odd (6, A2; key note 5), domain and range (3, A2).
- **Out of scope by design:** continuity (w29); |x| (w30).

## Practice questions and model answers

**Attempt 1 (scene 8; adapted from pack question 1, original, HSC style, 3 marks suggested, not an official marking scheme).** "A car hire costs $60 a day, which includes the first 100 km. Each kilometre beyond that costs 25c. Write C(d), the cost of a day's hire with d km driven, as a piecewise function. Find C(80) and C(180)."
Model answer: C(d) = 60 for 0 ≤ d ≤ 100; C(d) = 60 + 0.25(d − 100) for d > 100. C(80) = 60. C(180) = 60 + 0.25(80) = 80. Classic mistake (crossed): "C(180) = 60 + 0.25 × 180 = 105".

**Attempt 2 (scene 10; pack question 2, original, HSC style, 3 marks suggested).** "h(x) = 2 − x for x ≥ 0 and h(x) = 2 + x for x < 0. Sketch h, state its domain and range, and show whether h is even, odd or neither."
Model answer: two lines meeting at the peak (0, 2), falling on both sides. Domain all real x; range y ≤ 2. For x > 0, −x < 0, so h(−x) = 2 + (−x) = 2 − x = h(x); for x < 0, −x > 0, so h(−x) = 2 − (−x) = 2 + x = h(x); h(0) = 2. So h is even. Classic mistake (crossed): "h(−x) = 2 − (−x) = 2 + x, so not even" (the wrong piece for −x when x > 0).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| E-bike | C(t) = 3 (0 < t ≤ 20); 3 + 0.5(t − 20) (t > 20); C(12) = 3; C(20) = 3; C(32) = 9; domain t > 0; range C ≥ 3 | 1, 2, 3, 7 |
| Site `we-pw-1` | f(−1) = 2; f(2) = 5; f(4) = 17; crossed 7; circles (2, 5) closed, (2, 7) open | 4 |
| Site `we-pw-3` | C(d) = 5 (d ≤ 2); 5 + 1.5(d − 2) = 2 + 1.5d (d > 2); C(4) = 8 | 5 |
| Example 3 | g(2) = 4; g(−2) = −4; odd | 6 |
| A1 | C(80) = 60; C(180) = 80; crossed 105 | 8, 9 |
| A2 | peak (0, 2); domain all real x; range y ≤ 2; even | 10, 11 |
| Handoff | dryer steps $2 (0 < t ≤ 10), $4 (10 < t ≤ 20), $6 (20 < t ≤ 30) | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (16 Nov 2026, scratchpad `w24w31/verify.py`); Codex to re-check.

- C(12) = 3, C(20) = 3, C(32) = 9, C(40) = 13; 3 + 0.5(t − 20) = t/2 − 7; second rule at 20 gives 3.
- we-pw-1: 2, 5, 17; second rule at 2 gives 7.
- Courier: C(1) = 5, C(2) = 5, C(4) = 8; 5 + 1.5(d − 2) = 1.5d + 2; slip 1.5(4 − 2) = 3.
- g(−x) + g(x) = 0 at x = −3, −1, 0, 2, 5; g(2) = 4, g(−2) = −4.
- Car hire: C(80) = 60, C(100) = 60, C(180) = 80; slip 60 + 0.25 × 180 = 105.
- h(−x) − h(x) = 0 at x = −3, −1, 0, 1, 4; h(0) = 2, h(3) = h(−3) = −1.
- Dryer: 2⌈t/10⌉ at t = 4, 10, 10.5, 12, 20, 25, 30: 2, 2, 4, 4, 4, 6, 6.

## Memory aid check

- **"Condition first, then the rule."** Original. Meaning, as said in scene 7: to evaluate a piecewise function, find the condition (interval) the input satisfies, then use only that rule; on a graph, a strict inequality leaves an end open and an inequality with "or equal" closes it. Assumptions checked: the conditions do not overlap (true for every function in this video, and required for a function). It helps a new case: C(100) in A1 uses the first rule because 100 ≤ 100. Introduced after scenes 2 to 4.
- **Considered, not used:** "Equals gets filled" (shorter, but does not say which rule).

## Narration length estimate

Counted by script with the build parser rules: **5,681 characters**, 13 scene headings. Characters per scene (1 to 13): 454, 770, 640, 651, 635, 635, 242, 313, 365, 202, 393, 306, 75.

At 13.3 characters per second the speech before the notes is about 422 s. Holds and settling: 2 countdowns of 10 s (20 s); short holds (memory card 2 s, feedback 1 s each, handoff 2 s) 6 s; about 22 s of settling (the input marker's moves, the faint rules clipping to their pieces, the shadows and the half-turn ghost); the notes scene is 45 s. Total **about 515 s (8 min 35 s)**, inside the 5,500 to 6,800 band and about 55 s under the 570 s cap.

Reserve trims if the voiced take runs long: scene 2's "t minus twenty is the number of extra minutes." (keep the tag); feedback 2's "It works for negative x too" (keep the second row on screen).

## Scene list and build ids

Lesson key `m-a11w28` (route math-a11-w28). Explainer folder `src/explainer/lessons/math-a11-w28`; build inputs in `docs/production/claude-pm/lessons/math-a11-w28/` (at voicing).

In order (13 scene headings): hook-ebike, reading-pieces, graphing-pieces, worked-boundary, worked-from-words, worked-symmetry, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (seconds from the estimate):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 37 s | 1 | w27's frame; the e-bike and its ride screen |
| 37 to 100 s | 2 | The brace and PieceSwitch |
| 100 to 154 s | 3 | The large plot: clipped pieces, circles, shadows |
| 154 to 307 s | 4 to 6 | Three g01 boards: a boundary, a rule from words, symmetry |
| 307 to 327 s | 7 | Framed memory card |
| 327 to 444 s | 8 to 11 | Question cards and countdowns, then feedback |
| 444 to 470 s | 12 | The e-bike's joined graph and the dryer's staircase |
| 470 to 515 s | 13 | Key notes with the framed card, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: w27's last frame continues into 1; 1 to 2 camera continue (the brace builds); 2 to 3 stage change to the large plot; 3 to 4, 4 to 5, 5 to 6 clear change; 6 to 7 camera pull back to the card; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return to scene 12's frame.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11w28-learning-review.md`, `science_check` = `checks/m-a11w28-maths-check.md`.

## Assets

Inspected before choosing (16 Nov 2026, `public/assets`, read only): `maths/ma12-phone-v1.png` (viewed: plain phone, blank dark screen) is reused for the ride screen. `chemistry/y11c-bike-frame-v1.png` and `-wheel-v1.png` are a chemistry corrosion pair (a bare frame and a wheel), not a share e-bike. No e-bike plate exists.

Need (painted, new; see the Codex asset brief): `ma11-share-ebike-v1.png` (also needed for w27's final frame). The handoff uses w29's `ma11-coin-dryer-v1.png`. Reused: `maths/ma12-phone-v1.png`.

Coded: the ride screen, the brace, plots, `PieceSwitch`, circles, shadows, ghosts, working boards, cards, countdown, hand tags, key notes, the pen badge and the dryer's staircase in the handoff.

### Studio kit use and additions

Uses: `MATH_ROLES`, `Role`, `HandTag`, `PlateImg`, `StudioPlot`, `AxisShadow` (w09), `SymmetryGhost` (w26), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`, `GivensStrip`.

Additions:
1. **`PieceSwitch`** (new; reused by w29 and w30): a brace of rows ({rule, ruleFn, condition, role}), an input marker on an axis, the active row lit by evaluating the conditions (exactly one must hold, or the part throws), and a readout computed from that row. Check: C(20) lights the first row; f(2) in `we-pw-1` lights the first row.
2. **`PiecewisePlot`** (new, on `StudioPlot`): draws each rule faint over the window, then clips it to its interval with end circles whose fill is computed from the condition symbol (≤, ≥ closed; <, > open), and marks a join as closed when either side includes it. Check: the e-bike's join at (20, 3) is closed; `we-pw-1` shows closed (2, 5) and open (2, 7).

## Codex asset brief (Maths A11 W28, a share e-bike; also w27's final frame)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-w28.md`, route entry math-a11-w28. Paint after the learning review and maths check pass and root gives the go-ahead, and before the w27 build (w27's final frame shows this plate). Save to `public/assets/maths/`. Transparent PNG with a true alpha channel, clean edges; ink and watercolour in the house style, matched to `maths/ma12-motorbike-v1.png`; no text, numbers, QR codes, logos, brand names, people, riders, hands, faces, glow or shadow. Never stretch.

1. `ma11-share-ebike-v1.png` (2000 × 1300 px): one share e-bike parked on its kickstand, seen side-on from its right: a step-through frame in a single bold colour (teal), a front basket, a battery pack on the down tube, mudguards, a small blank handlebar display and a blank smart lock on the rear wheel; **no rider, no app codes, no fleet branding**.

Report inspection on the paper background (`#f6f1e7`) at 300 px and 900 px wide and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-w28-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the two syllabus quotes match the route-inputs JSON exactly, and no site module label appears.
3. Confirm S11-08 is applied: no (a + b)² box; the boundary rule is "the rule whose condition includes the value".
4. Confirm site `we-pw-1` and `we-pw-3` keep their numbers and answers.
5. Confirm every open and closed circle matches its condition, and the e-bike's join is closed.
6. Confirm the even and odd claims in scene 6 and A2 for x > 0, x < 0 and x = 0 (author notes e and f).
7. Confirm both attempts carry every demand and neither card nor picture shows an answer.
8. Confirm no em dash (U+2014), Australian spelling, the narration counts by script, and every bold cue quoted in its scene's Visual in spoken order; scene 1 opens on w27's final frame and scene 12's frame matches w29's opening frame.

## YouTube metadata (draft)

Title: Piecewise Functions: Reading, Graphing and Symmetry | Year 11 Maths Advanced

(Title length: 76 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/working-with-functions/lesson04.sa.html

A share e-bike costs $3 for the first 20 minutes, then 50c a minute. One rule can't describe that price, so we use a function defined in pieces. Learn to read the condition before the rule (including at a boundary), write a piecewise rule from words, graph each piece on its own interval with open and closed circles, find the domain and range, and test a piecewise function for even or odd symmetry. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions. Prices are a maths model.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Working with functions.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Interpret piecewise-defined functions, where the function is defined differently in different parts of the domain"
"Graph piecewise-defined functions involving functions covered in the scope of the Mathematics Advanced course, test if they are even or odd, and determine the domain and range"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

Builds on: Function notation; domain and range; even and odd functions. Next: Continuity.

#Year11Maths #MathsAdvanced #PiecewiseFunctions #HSCScience

## Open decisions

- **1. A1 context (root).** The pack's e-bike question became car hire, because the e-bike is the anchor. Numbers chosen for whole-dollar answers.
- **2. Feedback 2 length (learning review).** A2 has three demands (sketch, domain and range, symmetry), so its feedback sits at about 30 s, the top of the guide. Both feedbacks were tightened in drafting (from about 35 s each). If the voiced take runs long, drop "It works for negative x too" and keep the second row on screen.
- **3. The pen in the handoff (w29).** The pen badge is a coded pen outline, never a hand.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from w08, w09 and w26; check that "condition first" is heard before every evaluation; that the faint-then-clipped rules make "each rule on its own piece" visible; that the symmetry reason "−x lands on the other piece" is clear at speed; that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
- `PieceSwitch` and the clipped pieces carry the explanation; judge them at playback speed. Every circle's fill must be computed from its condition.
