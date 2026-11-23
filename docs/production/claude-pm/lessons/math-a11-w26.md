# Maths A11 W26: How do symmetry tests tell even, odd and neither functions apart? Reflection in the y-axis, a half-turn about the origin, the tests f(−x) = f(x) and f(−x) = −f(x), and problems (design)

Status: learning review resolved, Revision 1 unchanged (status updated 23 Nov 2026, coherence audit N-4): the independent learning review passed with 0 blockers and 0 should-fix findings (`../checks/m-a11-w26-learning-review.md`) and the Codex maths check passed (`../checks/m-a11-w26-maths-check.md`). The review's one optional item (a hint on attempt 2's card) stays a voiced-preview watch. Not voiced. Next: voicing on the Google voice and a build on the studio kit to grade A. Revision 1 (16 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`, the d01 Revision 6 pattern) and the accepted w01 to w14 designs (`../checks/root-acceptance-maths-a11-w01-w14.md`). Not voiced.

Narration 5,651 characters by script (build parser rules), 14 scene headings, about 514 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: twenty-sixth video of Year 11 Mathematics Advanced (2024), outline order 26, Working with functions. Pre-design pack: `../pre-design/maths-a11/math-a11-w26.md` (brief 243). Site lesson (read through the pack's quotations, read only): `working-with-functions/lesson05.sa.html` (Odd & Even Functions, SHA256 `cb5658cadcd0155ea42f1a4adf25ed0d068bbd256e77adf7b2d2b7a448d2e943`; `we-sym-1`, `we-sym-2`, `we-sym-3` used with the site's numbers unchanged, and the drill fact "an even f with f(3) = 7 gives f(−3) = 7"). Route entry: `math-a11-w26` in `../../programme/maths-a11-route-inputs-2.json`. Visual system: maths studio kit; three painted domino plates (prefix `ma11-`); graphs, ghosts, paired points and algebra coded.

Owner rules applied: as w24 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, an everyday anchor (a game), Australian spelling, no em dashes, conversational narration).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Working with functions, Properties of functions, relations and graphs; NESA codenames, official `code` field empty), quoted from `../../programme/maths-a11-route-inputs-2.json`:

- `cib9db148d`: "Define a function to be even if its graph is unchanged under reflection in the y-axis, and odd if its graph is unchanged under rotation of 180° about the origin"
- `cif29d187f`: "Develop and use the tests that a function f(x) is odd if f(-x) = -f(x) and a function f(x) is even if f(-x) = f(x)"
- `ci05dfc018`: "Solve problems involving even and odd functions"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

**Boundary:** starts from w25's handoff frame (the upper semicircle y = √(25 − x²) with (3, 4) and (−3, 4) joined across a violet mirror line on the y axis, the three upright dominoes, "Next: mirror or half-turn?"). Teaches: even as unchanged by reflection in the y axis and odd as unchanged by a 180° rotation about the origin, on dominoes then graphs (`cib9db148d`); a half-turn as a reflection in the y axis followed by one in the x axis; the tests developed by following one point, f(−x) = f(x) and f(−x) = −f(x) (`cif29d187f`); site `we-sym-1` (even), `we-sym-2` (odd) and `we-sym-3` (neither); problems: f(−a) from f(a), completing a graph from one half both ways, and f(0) = 0 for an odd function defined at 0 (A2) (`ci05dfc018`). Stops at polynomials. Not taught: trig and absolute value examples (later in the route; pack note); piecewise symmetry (w28); composites (w27; the handoff only notices f(−x) as one rule fed into another).

## Decisions

### Revision 1 (16 Nov 2026)

- **Anchor: three upright dominoes (painted plates, live).** A domino's spots make the two symmetries physical. The 1|4 tile stood upright looks the same in a mirror held along its middle but not after a half-turn (like an even function); the 3|3 tile, whose threes run corner to corner, looks the same after a half-turn but not in the mirror (like an odd function); the 1|2 tile changes both ways (neither). Code applies the same mirror and half-turn to the plates as to the graphs, so the student sees the identical move twice. Games. No Year 12 Maths design and no w01 to w14 design uses dominoes (grep, 16 Nov); no w15 to w23 pack suggests them. The pack's playing cards were rejected (court cards carry faces; no people) and its sunglasses carry only the mirror.
- **Simulations (standard item 3).**
  1. **`SymmetryGhost`** (scenes 1, 2, 7, 13 badge; new part): an amber dashed copy of a plate or a graph lifts off, then reflects in the y axis (a violet mirror line draws) or rotates 180° about the origin (a violet half-turn arc draws), over 1.2 s, and settles; a verdict chip "lands on itself" (green tick) or "misses" (red cross) is computed by sampling the original against the moved copy (graphs) or set from the plate sidecar's pip grid (dominoes).
  2. **`PairedPoints`** (scene 3; new part on `LiveReadoutBoard`): an input a (blue) on a slider and its partner −a; the graph's points (a, f(a)) and (−a, f(−a)) mark with dashed links to the axis; a readout shows f(a) and f(−a) (teal) and the relation "equal" or "opposite", computed live; for x² the two heights stay equal, for x³ they stay opposite as a sweeps 0.5 to 2.
- **Colour roles (fixed for the whole video).** Inputs x, a, −x, −a **blue**; outputs f(x), f(−x), −f(x) **teal** (root ruling 12); the original graph ink; the moved copy **amber**, dashed; the move itself (mirror line, half-turn arc) **violet**; answer **green**; mistake **red**, crossed slips only.
- **Large type, handwritten voice.** As w24. Hand tags: "mirror", "half-turn", "lands on itself", "misses", "same height", "opposite height", "(−x)⁴ = x⁴", "(−x)³ = −x³", "test −f(x) too", "every term", "even rule", "odd rule".
- **Stage changes (standard item 2).** The dominoes (1); three graphs and their ghosts (2); paired points (3); three g01 boards (4 to 6); the half-graph completed two ways (7); the framed card (8); question cards (9 to 12); the shop handoff (13); key notes (14).
- **Worked examples (g01 layout).** 4: site `we-sym-1` (crossed "(−x)⁴ = −x⁴, so odd"). 5: site `we-sym-2` (crossed "not even, so odd"). 6: site `we-sym-3` (crossed "has x², so even"). Scene 7 is a coded problem board (even f(3) = 7, then the half-graph).
- **Memory aid.** Framed card: "Even: mirror. Odd: half-turn." Key: "Only even powers (constants count): even. Only odd powers: odd. A mix: neither." Badge: the 1|4 and 3|3 dominoes with a mirror and a half-turn arc.
- **Visual surprise.** The half-turned 3|3 domino lands spot for spot on itself while the mirrored one does not; then y = x³'s amber ghost spins half a turn and lands exactly on the curve.
- **Site wording corrected (pack section 8).** Site `we-sym-1` step 2 says "Even powers of −x are always positive"; the video says "an even power of minus x equals that power of x" ((−x)⁴ = x⁴ is an equality, not a sign claim). The site's cos x, sin x and |x| examples are not used (later in the route). No S11 item applies.
- **Plain meanings at first use.** Even function ("unchanged by a mirror in the y axis"); odd function ("unchanged by a half-turn about the origin"); half-turn ("a rotation of 180 degrees"); "neither" ("passes neither test"); f(−x) ("put minus x, in brackets, wherever x appears", recalled from w08).
- **Attempts (pack questions, original).** A1: x⁵ − 4x³ + x, odd; crossed "f(−x) = −x⁵ − 4x³ − x, so neither". A2: odd f with f(2) = −5: f(−2) = 5 and f(0) = 0; crossed "f(−2) = −5".
- **Mistake scene:** none separate. An even power of −x kept negative (4 crossed); stopping after "not even" (5 crossed); one term deciding (6 crossed); odd as a reflection in the x axis (2, positively); a lost sign in a middle term (A1 crossed); the even rule used for an odd function (A2 crossed).
- **Cause chain taught, in order:** (1) a mirror in the y axis sends (a, h) to (−a, h); a half-turn about the origin sends (a, h) to (−a, −h) (2, 3); (2) so "unchanged by the mirror" means the height at −a equals the height at a for every a, f(−x) = f(x), and "unchanged by the half-turn" means it is the opposite, f(−x) = −f(x) (3); (3) (−x) to an even power equals x to that power and to an odd power is minus it, so the powers decide (4 to 6, 8); (4) the symmetry predicts values and missing halves (7, A2).
- **Entry knowledge (route):** w08 (substituting −x into f); w07 (functions and their graphs).
- **Handoff (to w27, "What happens when one function's output becomes another's input?").** Scene 13: a pair of sneakers (`ma11-sneakers-v1.png`) with the reused price tag (`maths/ma12-swing-tag-v1.png`) reading "$120", two coded machine boxes in a row, "20% off" and "$10 off", a second row with the boxes swapped, two output tags "$?" and "$?", and chips "Next: one function's output becomes another's input" and "?". This is w27's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Domino tiles, upright, pip grid 3 × 3 per half: 1 = centre; 2 = top-left and bottom-right; 3 = top-left, centre, bottom-right (both halves of 3|3 the same way); 4 = four corners. Mirror (vertical axis through the tile's centre) maps top-left to top-right; a half-turn swaps the halves and maps top-left to bottom-right. So 1|4: mirror-invariant only; 3|3: half-turn-invariant only; 1|2: neither.
  (b) Half-turn = reflection in the y axis then in the x axis: (a, h) → (−a, h) → (−a, −h).
  (c) "Only even powers gives even": a constant is x⁰, an even power; x³ + 1 is neither (f(−x) = 1 − x³).
  (d) Half-graph problem: given points (0, 0), (2, 3), (4, 1) for x ≥ 0 joined by straight segments; even completion (−2, 3), (−4, 1); odd completion (−2, −3), (−4, −1). Odd completion needs f(0) = 0, which (0, 0) satisfies.
  (e) Pronunciations: "f of minus x"; "minus x, to the fourth"; "x to the fifth"; "a hundred and eighty degrees".
  (f) Windows: scene 2 plots −3 to 3 by −10 to 10 (x³) and −3 to 3 by −1 to 9 (x²), labelled scales; scene 7 plot −5 to 5 by −4 to 4, equal scale.

Main question: *Three dominoes: one looks the same in a mirror, one after a half-turn, one neither. Graphs do the same. How do symmetry tests tell even, odd and neither functions apart?*
Entry knowledge (w08, w07): substituting −x into f(x); functions and their graphs.
Stops after: the two definitions, the two tests with their reasons, three classifications, and three kinds of symmetry problem. No piecewise or trig examples.
Handoff: math-a11-w27: "a sale and a coupon in two orders: $? and $?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): inputs blue; outputs teal; original graph ink; moved copy amber, dashed; the move violet; answer green; mistake red, crossed slips only. Header strip "MATHEMATICS ADVANCED · WORKING WITH FUNCTIONS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: mirror or half-turn?
> Here are three dominoes, standing upright. Hold a mirror along the middle of each one. The first looks exactly the same in the mirror. But turn it upside down, a half-turn, and the four ends up on top, so it **changes**. The second is the other way round. Its threes run corner to corner, so the mirror flips their direction, but a half-turn puts every spot back where it **was**. The third changes both ways. That semicircle from last time behaves like the first domino. Graphs can be mirror-shaped, half-turn-shaped, or **neither**. So how do symmetry tests tell even, odd and neither functions apart?

Visual: opens on w25's final frame exactly (the upper semicircle with (3, 4) and (−3, 4) across the violet mirror line, the three dominoes, "Next: mirror or half-turn?"). The semicircle shrinks to a 300 px badge at the top left; the three dominoes grow to about 420 px tall in a row (1|4, 3|3, 1|2), heading "Mirror or half-turn?". On "Hold a mirror" a violet vertical mirror line draws through each tile's middle. On the first tile `SymmetryGhost` mirrors an amber copy: it lands spot for spot (green "mirror ✓"). On "changes" the copy instead half-turns about the tile's centre (violet arc): the 4 lands on top, red "half-turn ✗". On "was" the 3|3 tile: mirrored copy misses (red "mirror ✗", its diagonal flipped), half-turned copy lands (green "half-turn ✓"), hand tag "half-turn". On "The third" the 1|2 tile shows red crosses both ways. On "semicircle" the badge's own ghost mirrors and lands (green tick). On "neither" three labels drop under the tiles: "like even", "like odd", "neither" (36 px), and the chip "Even, odd or neither?" moves to the top right.

### 2. even and odd: the definitions
> Here's how mathematicians name it. A function is even if its graph is unchanged when you reflect it in the y axis. y equals x squared is even. Flip it across the y axis, and it lands exactly on **itself**. A function is odd if its graph is unchanged by a rotation of a hundred and eighty degrees about the origin, a half-turn. y equals x cubed is odd. Spin it half a turn about the origin, and it lands on **itself**. Careful, odd doesn't mean a flip in the x axis. A half-turn is a flip across the y axis, followed by a flip across the x **axis**. And most functions are neither. y equals x squared minus three x plus one misses itself **both** ways.

Visual: clear change to three plots in a row (each about 560 × 560 px) with the domino tiles as 140 px badges above them (1|4 over the first, 3|3 over the second, 1|2 over the third). Definition chips over the first two (44 px): "even: unchanged by reflection in the y-axis" (violet mirror icon) and "odd: unchanged by a 180° rotation about the origin" (violet arc icon). First plot y = x²: on "itself" (first) the amber ghost reflects in the y axis and lands (green "lands on itself"). Second plot y = x³: on "itself" (second) the ghost rotates 180° about the origin and lands (green). On "Careful" a small inset: x³ reflected in the x axis gives a dashed −x³ that misses, red cross, then on "axis" the two flips run in turn (y axis, then x axis) and land, hand tag "half-turn = two flips". Third plot y = x² − 3x + 1: on "both" its ghost mirrors (misses, red) and half-turns (misses, red), verdict "neither".

### 3. the tests: follow one point
> To test without drawing, follow one point. Take x equals two on y equals x squared. Its height is four. The mirror sends that point to minus two, and the height there is four as **well**. That's what even means for every point. f of minus x equals f of x. Now take x cubed. At two, the height is eight. The half-turn sends that point to minus two, minus eight, so the height at minus two is minus eight, the opposite. That's what odd means. f of minus x equals minus f of **x**. So, to test a function, find f of minus x. If it equals f of x, it's even. If it equals minus f of x, it's odd. If it's neither of those, the function is neither.

Visual: stage change to `PairedPoints` on two large plots side by side (each 820 × 640 px). Left: y = x²; a blue slider "a" at 2; points (2, 4) and (−2, 4) mark with teal height bars; on "well" the readout "f(2) = 4, f(−2) = 4: equal" (52 px), hand tag "same height"; the slider sweeps a from 0.5 to 2.5 and the readout stays "equal". The test strip writes under it: "even: f(−x) = f(x)" (teal f's, blue −x). Right: y = x³; at a = 2 the points (2, 8) and (−2, −8), a violet half-turn arc through the origin joins them; on "x" the readout "f(2) = 8, f(−2) = −8: opposite", hand tag "opposite height"; the sweep keeps "opposite". Strip: "odd: f(−x) = −f(x)". On "So, to test a function" a three-step chip writes across the bottom, 44 px: "1 find f(−x) · 2 compare with f(x) · 3 compare with −f(x)".

### 4. worked example 1: even
> Let's practise. Determine whether f of x equals x to the fourth minus two x squared is even, odd or neither. Find f of minus x. Replace every x with minus x, in brackets. Minus x, to the fourth, is x to the fourth, because an even power of minus x equals that power of x. And minus x, squared, is x squared. So f of minus x is x to the fourth minus two x **squared**, exactly f of x. So the function is **even**, and its graph is symmetric about the y axis. Writing minus x to the fourth as negative would make it look odd. An even power cancels the minus **sign**.

Visual: clear change to the g01 board (site `we-sym-1`). Task strip, 44 px: "Determine whether f(x) = x⁴ − 2x² is even, odd or neither." Givens card: "f(x) = x⁴ − 2x²". Three-step chip from scene 3 at the top (step 1 lit). Rows, 52 px: "f(−x) = (−x)⁴ − 2(−x)²" (each (−x) blue), hand tag "(−x)⁴ = x⁴"; on "squared" "= x⁴ − 2x²" and an equals sign links it to the givens card (step 2 lit), hand tag "= f(x)". On "even" the framed answer (green): "f(−x) = f(x): even", and a small plot at the right draws the W-shaped curve, its ghost mirroring onto it. On "sign" a red slip "(−x)⁴ = −x⁴, so f(−x) = −x⁴ − 2x²: odd" writes and is crossed, caption "even power: the minus cancels".

### 5. worked example 2: odd
> Next, f of x equals x cubed plus x. f of minus x is minus x, cubed, plus minus x. An odd power keeps the minus sign, so that's minus x cubed minus **x**. That isn't f of x, so it's not even. But don't stop there. Minus f of x is minus, x cubed plus x, which is also minus x cubed minus **x**. They match, so the function is **odd**. Check with a number. f of two is ten, and f of minus two is minus ten, the opposite. Saying it's odd just because it isn't even is the slip. Not even doesn't mean odd. Test minus f of x **too**.

Visual: clear change to the g01 board (site `we-sym-2`). Task strip: "Determine whether f(x) = x³ + x is even, odd or neither." Rows, 52 px: "f(−x) = (−x)³ + (−x)", hand tag "(−x)³ = −x³"; on "x" (first) "= −x³ − x"; step 2 lit with "≠ f(x): not even" (grey). On "But don't stop there" step 3 lights. Row "−f(x) = −(x³ + x)"; on "x" (second) "= −x³ − x", and the two rows' right sides glow together. On "odd" the framed answer (green): "f(−x) = −f(x): odd", the small plot's ghost half-turning onto the curve; on "Check with a number" the row "f(2) = 10, f(−2) = −10" (44 px). On "too" a red slip "f(−x) ≠ f(x), so odd" writes and is crossed, caption "test −f(x) too".

### 6. worked example 3: neither
> Now f of x equals x squared minus three x plus one. f of minus x is minus x, squared, minus three times minus x, plus one. That's x squared plus three x plus **one**. Compare it with f of x. The middle terms have opposite signs, so it's not even. Compare it with minus f of x, which is minus x squared plus three x minus one. The x squared terms don't match, so it's not **odd** either. It's **neither**. It mixes even and odd powers, so it can't pass either test. Calling it even because it has an x squared is the slip. Every term has to **agree**.

Visual: clear change to the g01 board (site `we-sym-3`). Task strip: "Determine whether f(x) = x² − 3x + 1 is even, odd or neither." Rows, 52 px: "f(−x) = (−x)² − 3(−x) + 1"; on "one" "= x² + 3x + 1". Step 2: "f(x) = x² − 3x + 1", the "+3x" and "−3x" ringed red, "not even". Step 3: "−f(x) = −x² + 3x − 1"; on "odd" the "x²" and "−x²" ringed red, "not odd". On "neither" the framed answer (green): "neither even nor odd", and the small plot's ghost misses both ways. On "agree" a red slip "has x², so even" writes and is crossed, caption "every term".

### 7. using the symmetry
> Symmetry also saves work. Suppose f is even, and f of three is seven. Then f of minus three is seven as well, without knowing the **rule**. Here's half of a graph, for x of zero or more. If the function is even, mirror it across the y axis to finish it. The point two, three gives minus two, **three**. If it's odd, spin it a half-turn about the origin instead. That works here, because the half starts at the origin. Two, three gives minus two, minus **three**, and four, one gives minus four, minus one. Same half, two different completions, depending on the **symmetry**.

Visual: clear change. Top strip, 44 px: "f is even and f(3) = 7. Find f(−3)." On "rule" the row "f(−3) = f(3) = 7" (green frame), hand tag "even rule". Below, a plot (−5 to 5 by −4 to 4, equal scale, 900 × 720 px) with the given half: segments (0, 0) to (2, 3) to (4, 1) in ink, points labelled. `SymmetryGhost` mirror: the amber copy reflects across the violet y axis; on "three" (first) the label "(−2, 3)" writes, then "(−4, 1)", and the copy settles as the left half (chip "if even"). The copy fades; the half-turn: on "three" (second) the amber copy rotates 180° about the origin, "(−2, −3)" and "(−4, −1)" write, chip "if odd". On "symmetry" both completions show together, the even one faint, labelled "even" and "odd".

### 8. memory aid
> Here's a way to keep them straight. Even, mirror. Odd, half-turn. And the names come from the powers. A function built only from even powers of x, like x squared and x to the fourth, is even. One built only from odd powers, like x and x cubed, is odd. A constant counts as an even power, so x cubed plus one is **neither**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the 1|4 domino with a violet mirror line and the 3|3 domino with a violet half-turn arc. Main line, hand font 60 px: "Even: mirror. Odd: half-turn." On "neither" the key line, 36 px: "Only even powers (constants count): even. Only odd powers: odd. A mix: neither." with "x³ + 1: neither" in grey. Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. Is f of x equals x to the fifth minus four x cubed plus x even, odd or neither? Show the test. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Is f(x) = x⁵ − 4x³ + x even, odd or neither? Show the test." The full question stays on screen. Picture slot: the three dominoes, small, with no labels. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> f of minus x is minus x to the fifth, plus four x cubed, minus **x**. Each odd power keeps its minus sign. That's minus, x to the fifth minus four x cubed plus x, which is minus f of x. So f is **odd**. If you got minus four x cubed in the middle, the sign slipped. Minus four times minus x cubed is plus four x **cubed**.

Visual: the card shrinks to the top (30 px). Rows, 52 px: "f(−x) = (−x)⁵ − 4(−x)³ + (−x)"; on "x" "= −x⁵ + 4x³ − x". Row "= −(x⁵ − 4x³ + x) = −f(x)". On "odd" framed answer (green): "f(−x) = −f(x): odd", the 3|3 domino badge lighting. On "cubed" a red slip "f(−x) = −x⁵ − 4x³ − x: neither" writes and is crossed, caption "−4(−x)³ = +4x³". Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. f is an odd function with f of two equals minus five. Find f of minus two. If f is defined at zero, what must f of zero be? Explain. Pause here to answer.

Visual: `QuestionCard`, 40 px: "f is an odd function with f(2) = −5. Find f(−2). If f is defined at x = 0, what must f(0) be? Explain." Picture slot: empty axes with the single point (2, −5) marked. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 12. feedback 2 (brief)
> Odd means f of minus x is minus f of x. So f of minus two is minus f of two, which is plus **five**. At zero, minus zero is zero, so f of zero equals minus f of zero. The only number equal to its own negative is zero, so f of zero is **zero**. Saying f of minus two is minus five is the slip. That's the even rule, not the **odd** one.

Visual: the card shrinks to the top. `GivensStrip`: "odd", "f(2) = −5", "defined at 0". Rows, 52 px: "f(−2) = −f(2) = −(−5)"; on "five" "= 5", and on the picture the point (−2, 5) appears as the half-turn of (2, −5) about the origin (violet arc). Rows "f(0) = −f(0)", "2f(0) = 0"; on "zero" "f(0) = 0" and the origin marks. Framed answer (green): "f(−2) = 5; f(0) = 0". On "odd" a red slip "f(−2) = −5" writes and is crossed, caption "that's the even rule". Hold about 1 s.

### 13. handoff
> Every test today fed minus x into a function. First change the sign, then apply f. That's one rule's output becoming another rule's input. It happens at the shops, too. Here's a twenty per cent off sale, and a ten dollar coupon, on a pair of sneakers. Apply them in different orders, and the price comes out **different**.

Visual: the memory line shows small at the top (30 px), then fades. A small strip at the top left: "x → −x → f(−x)" with two tiny boxes, "change sign" and "f". Board: the sneakers (`ma11-sneakers-v1.png`, about 560 px wide) with the price tag (`maths/ma12-swing-tag-v1.png`, 220 px) reading "$120" in coded text; two coded machine boxes in a row to the right, "20% off" then "$10 off", and a second row below with the boxes swapped; an output tag "$?" at the end of each row. On "different" the chips "Next: one function's output becomes another's input" and "?". Hold about 2 s. This is w27's opening frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Even: unchanged by reflection in the y-axis; f(−x) = f(x).
- Odd: unchanged by a 180° rotation about the origin; f(−x) = −f(x).
- Test: find f(−x); compare with f(x), then with −f(x).
- Most functions are neither.
- Odd and defined at 0: f(0) = 0.

Memory aid (framed card, right side, as in scene 8): *Even: mirror. Odd: half-turn.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 13's frame exactly. This is the final frame and w27's opening frame.

## Teaching checks

- **Does it explain causes?** Why the even test is f(−x) = f(x): the mirror keeps a point's height and changes the sign of its x (3). Why the odd test is f(−x) = −f(x): the half-turn changes both signs (2, 3). Why even powers pass the even test: (−x)ⁿ = xⁿ for even n (4). Why "not even" does not mean odd: the two tests are separate (5). Why a mix of powers fails both: the terms change differently (6). Why f(0) = 0 for an odd function defined at 0: it equals its own negative (A2).
- **Misconceptions addressed:** the even power of −x kept negative (4 crossed); "not even, so odd" (5 crossed); one term deciding (6 crossed); odd as a reflection in the x axis (2); "every function is even or odd" (2, 6); a middle-term sign slip (A1 crossed); the even rule for an odd function (A2 crossed).
- **Visual standard, item by item:** 1 the painted dominoes from the first frame, returning as badges in 2, 8 and A1's picture; 2 a new stage every 35 to 55 s; 3 `SymmetryGhost` on plates and graphs, `PairedPoints` with live readouts; 4 fixed colour roles; 5 large type; 6 hand tags; 7 g01 boards in 4 to 6; 8 framed card and five bullets; 9 the half-turned domino and x³'s ghost landing on themselves.
- **One idea at a time:** objects (1), definitions (2), tests (3), one classification per board (4 to 6), problems (7).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 22 s each.
- **Avoided double teaching:** substitution with brackets (w08) is recalled.
- **Syllabus coverage:** `cib9db148d` (1, 2; key notes 1, 2); `cif29d187f` (3 to 6, A1; key note 3); `ci05dfc018` (7, A2; key notes 4, 5).
- **Out of scope by design:** trig, |x| and piecewise symmetry (later in the route).

## Practice questions and model answers

**Attempt 1 (scene 9; pack question 1, original, HSC style, 2 marks suggested, not an official marking scheme).** "Is f(x) = x⁵ − 4x³ + x even, odd or neither? Show the test."
Model answer: f(−x) = (−x)⁵ − 4(−x)³ + (−x) = −x⁵ + 4x³ − x = −(x⁵ − 4x³ + x) = −f(x), so f is odd. Classic mistake (crossed): "f(−x) = −x⁵ − 4x³ − x, so neither".

**Attempt 2 (scene 11; pack question 2, original, HSC style, 2 marks suggested).** "f is an odd function with f(2) = −5. Find f(−2). If f is defined at x = 0, what must f(0) be? Explain."
Model answer: f(−2) = −f(2) = 5. Odd means f(−0) = −f(0), so f(0) = −f(0), 2f(0) = 0 and f(0) = 0. Classic mistake (crossed): "f(−2) = −5".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hook | dominoes 1|4, 3|3, 1|2 (author note a); semicircle (3, 4), (−3, 4) | 1 |
| Definitions | x² even; x³ odd; x² − 3x + 1 neither | 2 |
| Paired points | x²: f(2) = f(−2) = 4; x³: f(2) = 8, f(−2) = −8 | 3 |
| Site `we-sym-1` | f(−x) = x⁴ − 2x² = f(x): even | 4 |
| Site `we-sym-2` | f(−x) = −x³ − x = −f(x): odd | 5 |
| Site `we-sym-3` | f(−x) = x² + 3x + 1; −f(x) = −x² + 3x − 1: neither | 6 |
| Problems | even, f(3) = 7: f(−3) = 7; half-graph (0, 0), (2, 3), (4, 1): even (−2, 3), (−4, 1); odd (−2, −3), (−4, −1) | 7 |
| Memory | x³ + 1 neither | 8 |
| A1 | f(−x) = −x⁵ + 4x³ − x = −f(x): odd | 9, 10 |
| A2 | f(−2) = 5; f(0) = 0 | 11, 12 |
| Handoff | $120, 20% off, $10 off (answered in w27) | 13 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (16 Nov 2026, scratchpad `w24w31/verify.py`); Codex to re-check.

- Parity by f(−x): x⁴ − 2x² even; x³ + x odd; x² − 3x + 1 neither (f(−x) = x² + 3x + 1); x² even; x³ odd; x⁵ − 4x³ + x odd (f(−x) = −x⁵ + 4x³ − x); x³ + 1 neither.
- −f(x) for x⁴ − 2x²: −x⁴ + 2x²; for x² − 3x + 1: −x² + 3x − 1.
- 2² = (−2)² = 4; 2³ = 8, (−2)³ = −8.
- Half-graph completions as listed.

## Memory aid check

- **"Even: mirror. Odd: half-turn."** Original. Meaning, as said in scene 8: an even function's graph is unchanged by reflection in the y axis, an odd function's by a 180° rotation about the origin. The key line's powers rule holds for polynomials: only even powers (constants count as x⁰) give an even function, only odd powers an odd one, and a mix gives neither (unless coefficients vanish). Assumptions checked: the powers rule is stated for polynomials only, as used in this video; the definition line is general. It helps a new case: x⁶ − x² is even; x³ + 1 is neither. Introduced after the tests (3) and examples (4 to 6).
- **Considered, not used:** "Odd flips twice" (true but needs scene 2's reasoning to mean anything).

## Narration length estimate

Counted by script with the build parser rules: **5,651 characters**, 14 scene headings. Characters per scene (1 to 14): 591, 635, 633, 553, 511, 534, 558, 319, 127, 310, 164, 323, 318, 75.

At 13.3 characters per second the speech before the notes is about 419 s. Holds and settling: 2 countdowns of 10 s (20 s); short holds (memory card 2 s, feedback 1 s each, handoff 2 s) 6 s; about 24 s of settling (the domino ghosts, the three graph ghosts, the paired-point sweeps and the half-graph completions); the notes scene is 45 s. Total **about 514 s (8 min 34 s)**, inside the 5,500 to 6,800 band and about 56 s under the 570 s cap.

Reserve trims if the voiced take runs long: scene 7's "That works here, because the half starts at the origin." (keep the origin mark); scene 3's last sentence (keep the three-step chip).

## Scene list and build ids

Lesson key `m-a11w26` (route math-a11-w26). Explainer folder `src/explainer/lessons/math-a11-w26`; build inputs in `docs/production/claude-pm/lessons/math-a11-w26/` (at voicing).

In order (14 scene headings): hook-dominoes, even-odd-defined, follow-one-point, worked-even, worked-odd, worked-neither, using-symmetry, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (seconds from the estimate):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 49 s | 1 | w25's frame; three dominoes, mirrored and half-turned |
| 49 to 102 s | 2 | Three graphs and their ghosts |
| 102 to 154 s | 3 | Paired points on x² and x³ |
| 154 to 280 s | 4 to 6 | Three g01 boards: even, odd, neither |
| 280 to 326 s | 7 | f(−3) from f(3); a half-graph completed two ways |
| 326 to 352 s | 8 | Framed memory card |
| 352 to 443 s | 9 to 12 | Question cards and countdowns, then feedback |
| 443 to 469 s | 13 | The sneakers and two machine orders |
| 469 to 514 s | 14 | Key notes with the framed card, then a silent return to scene 13's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: w25's last frame continues into 1 (the dominoes grow); 1 to 2 clear change (three plots, domino badges); 2 to 3 stage change (paired points); 3 to 4, 4 to 5, 5 to 6, 6 to 7 clear change; 7 to 8 camera pull back to the card; attempts and feedback: the card shrinks to the top; 12 to 13 board clear; 13 to 14 fade, then a silent return to scene 13's frame.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11-w26-learning-review.md`, `science_check` = `checks/m-a11-w26-maths-check.md`.

## Assets

Inspected before choosing (16 Nov 2026, `public/assets`, read only): no domino, tile-game or playing-card plate exists (searched domino, tile, card; the card plates are biology index cards and a paper texture). Not used.

Need (painted, new; see the Codex asset brief): `ma11-domino-1-4-v1.png`, `ma11-domino-3-3-v1.png`, `ma11-domino-1-2-v1.png` (also needed for w25's final frame, so paint before the w25 build). The handoff uses w27's `ma11-sneakers-v1.png` and the reused `maths/ma12-swing-tag-v1.png`.

Coded: the mirror line and half-turn arc, ghosts, plots, paired points and readouts, the three-step chip, working boards, cards, countdown, hand tags, key notes, the machine boxes and price text in the handoff.

### Studio kit use and additions

Uses: `MATH_ROLES`, `Role`, `HandTag`, `PlateImg`, `StudioPlot`, `ParameterSlider`, `LiveReadoutBoard`, the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`, `GivensStrip`.

Additions:
1. **`SymmetryGhost`** (new; reused by w28, w30 and w31): an amber dashed copy of a graph (or a plate) that reflects in the y axis or rotates 180° about the origin (or a plate's centre), with the violet mirror line or arc, and a verdict computed by sampling (graphs: max |f(−x) − f(x)| or |f(−x) + f(x)| over the window below 1e-9) or from a plate sidecar flag. Check: x² mirrors onto itself, x³ half-turns onto itself, x² − 3x + 1 misses both.
2. **`PairedPoints`** (new): an input slider a, the points (a, f(a)) and (−a, f(−a)), and a live readout "equal", "opposite" or "neither", computed. Check: x² gives "equal" for every a; x³ gives "opposite".

## Codex asset brief (Maths A11 W26, three dominoes; also w25's final frame)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-w26.md`, route entry math-a11-w26. Paint after the learning review and maths check pass and root gives the go-ahead, and before the w25 build (w25's final frame shows these plates). Save to `public/assets/maths/`. Transparent PNG with a true alpha channel, clean edges; ink and watercolour in the house style, matched to `maths/ma12-coin-v1.png`; no text, numbers, logos, people, hands, faces, glow or cast shadow. Never stretch.

The three plates are one set, **identical in size, outline, colour and lighting**, differing only in their spots. Each is 600 × 1200 px: one ivory domino tile **standing upright, seen exactly face-on**, with rounded corners, a thin dark dividing bar across its middle and a small centre pin on the bar; black round spots on a **3 × 3 grid in each half** (grid centres at 25, 50 and 75 per cent of the half's width and height). Light it **evenly from the front**, so the tile looks the same when the code mirrors it left to right or turns it upside down (no directional shading, no highlight on one side).

1. `ma11-domino-1-4-v1.png`: top half 1 (centre spot); bottom half 4 (four corner spots).
2. `ma11-domino-3-3-v1.png`: both halves 3, **each running from top-left through centre to bottom-right** (the same direction in both halves).
3. `ma11-domino-1-2-v1.png`: top half 1 (centre); bottom half 2 (**top-left and bottom-right** of that half).

Sidecar JSON (`ma11-domino-v1.json`): for each plate, the tile's centre and the spot centres in px, and two flags computed from the spots: `mirrorSame` (true only for 1|4) and `halfTurnSame` (true only for 3|3). Report inspection on the paper background (`#f6f1e7`) at 220 px and 420 px tall, the alpha check, and each plate beside its own mirrored and half-turned copy.

Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-w26-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the three syllabus quotes match the route-inputs JSON exactly (including "180°" and "f(-x) = -f(x)"), and no site module label appears.
3. Confirm the domino claims (author note a): 1|4 mirror-same only, 3|3 half-turn-same only, 1|2 neither.
4. Confirm site `we-sym-1` to `we-sym-3` keep their answers, and the reworded "an even power of minus x equals that power of x".
5. Confirm the powers rule is stated only for polynomials and that "x³ + 1 is neither" is correct.
6. Confirm both attempts carry every demand, and neither card nor picture shows an answer.
7. Confirm no em dash (U+2014), Australian spelling, the narration counts by script, and every bold cue quoted in its scene's Visual in spoken order.
8. Confirm scene 1 opens on w25's final frame and scene 13's frame matches w27's opening frame.

## YouTube metadata (draft)

Title: Even and Odd Functions: Mirror or Half-Turn? | Year 11 Maths Advanced

(Title length: 69 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/working-with-functions/lesson05.sa.html

Three dominoes: one looks the same in a mirror, one after a half-turn, and one neither. Graphs do the same. An even function's graph is unchanged by reflection in the y-axis, and an odd function's by a 180° rotation about the origin. Follow one point to see where the tests f(−x) = f(x) and f(−x) = −f(x) come from, use them on three functions (even, odd and neither), then use symmetry to find values and finish half a graph. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Working with functions.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Define a function to be even if its graph is unchanged under reflection in the y-axis, and odd if its graph is unchanged under rotation of 180° about the origin"
"Develop and use the tests that a function f(x) is odd if f(-x) = -f(x) and a function f(x) is even if f(-x) = f(x)"
"Solve problems involving even and odd functions"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

Builds on: Function notation and substitution. Next: Composite functions.

#Year11Maths #MathsAdvanced #EvenAndOddFunctions #HSCScience

## Open decisions

- **1. Domino orientation (asset QA).** The odd-like tile depends on the threes running the same diagonal in both halves. If Codex's 3|3 fails the half-turn check, the fallback is a painted blank tile (`ma11-domino-blank-v1.png`) with the spots drawn in code on the sidecar grid, so the symmetry is exact. Root decides if the fallback is needed.
- **2. "The names come from the powers" (learning review).** It is offered as a memory aid for polynomials. The reviewer checks that students do not apply it to non-polynomials later without the tests.
- **3. Scene 7 half-graph (learning review).** One half completed two ways may be dense; if the reviewer finds it fast, drop the second odd point "(−4, −1)" from narration (keep it on screen).

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from w08; check that the domino moves read as the same moves as on the graphs; that "follow one point" makes the tests feel derived; that the odd test is never heard as "reflect in the x axis"; that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
- The ghosts carry the definitions; judge them at playback speed. Every verdict must be computed.
