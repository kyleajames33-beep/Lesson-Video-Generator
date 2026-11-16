# Maths A11 C10: How does the chain rule handle a function inside a function? dy/dx = dy/du × du/dx with u the inside, back-substitution, f′(g(x))g′(x), a gradient at a point, and roots and reciprocals of an inner function (design)

Status: Revision 2 (17 Nov 2026): independent learning review resolved (see "Revision 2" below); not voiced. Revision 1 (16 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`) and the accepted Year 11 designs (`math-a11-w05.md`, `w14.md`, `c06.md`; rulings in `../checks/root-acceptance-maths-a11-w01-w14.md`, `-w15-w31.md` and `../checks/root-rulings-maths-a11-c-e-packs.md`, including the rulings on c01 to c09). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,915 characters by script (see "Narration length estimate"), 14 scene headings, about 532 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (17 Nov): learning review resolved

Review: `../checks/m-a11-c10-learning-review.md` (summary `../checks/m-a11-c01-c18-learning-review-summary.md`), with root's rulings in `../checks/root-rulings-maths-a11-c-e-packs.md`. Resolution log: `../checks/m-a11-c01-c18-learning-review-resolution.md`. Findings by the review's numbers:

1. Should fix, scene 2 ("each second, the area grows by"): **accepted**, reviewer's wording ("So at that moment, the area is growing at two pi, times a half, which is pi, ..."); hand tag "at t = 2 s" beside the row. (The actual growth over the next second is 5π/4 ≈ 3.9 m², an author check only.)
2. Optional, root ruling 1 on c10 to c18 (pond badge): **accepted** (a root ruling not previously carried into the design): on "function inside a function" the pond plate appears at 240 px, top left, with a still coded ring; no narration change.
3. Optional, attempt 1 (spoken fraction): **accepted**: "two over the square of three x plus one".

Feedback 1 (about 29.9 s) is unchanged; "Write the second as" → "The second is" is now a named reserve trim.

Narration now 5,915 characters by script (Revision 1: 5,906), about 532 s with holds (see "Narration length estimate"); within 5,500 to 6,800 and under 570 s. Every changed value was rechecked with SymPy 1.14 (scratchpad `c-rev2/verify.py`; see "Numbers to verify"); Codex's maths check remains the authority. Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. Nothing recorded; human listening pending.

Scope: forty-first video of Year 11 Mathematics Advanced (2024), outline order 41, Introduction to differentiation (Calculations with the derivative). Pre-design pack: `../pre-design/maths-a11/math-a11-c10.md` (brief 243). Site lesson (read through the pack's quotations, read only): `introduction-to-differentiation/lesson05.sa.html` (`we-chain-1`, (3x + 2)⁵; `we-chain-2`, (2x³ + 5)⁴; `we-chain-3`, (x² + 1)⁴ at x = 1; drill item √(x² + 1); all with their numbers). Route entry: `math-a11-c10` in `../../programme/maths-a11-route-inputs-3.json`. Visual system: maths studio kit; a painted garden pond and pebble (prefix `ma11-`), and a painted dog-walking plate for the handoff; every ring, readout and working row coded.

Owner rules applied: as c01 to c09 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (home and outdoors: a pebble's ripple in a pond), Australian spelling, no em dashes, "zero point" decimals, conversational narration).

Syllabus content point (Mathematics Advanced 11-12 (2024), Year 11, Introduction to differentiation, Calculations with the derivative), quoted from `../../programme/maths-a11-route-inputs-3.json`:

- `ci00fa8fac`: "Apply the chain rule: if y is a differentiable function of u, and u is a differentiable function of x, then dy/dx = dy/du × du/dx or if h(x) = f(g(x)) for differentiable functions f(x) and g(x) then h'(x) = f'(g(x))g'(x)"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678

**Boundary:** starts from c09's final frame exactly (coded algebra: "y = (3x + 2)⁵" with the inside tinted blue, "expand five brackets? slow" with five bracket glyphs, "power rule alone: 5(3x + 2)⁴ ?", "Next: a function inside a function", "?"). Recalls w27 (a composite: the inside's output is the outside's input) in one sentence. Teaches: the power rule alone is wrong, tested on (3x + 2)², which can be expanded; why rates along a chain multiply (the pond ripple, with units); the chain rule dy/dx = dy/du × du/dx with "call the inside part u" (the form Year 12 d01, d02, d03 and d06 quote); back-substitution (an answer in u is not finished); site `we-chain-1` and `we-chain-2`; the same rule as h′(x) = f′(g(x))g′(x) and a gradient at a point (site `we-chain-3`); a root and a reciprocal of an inner function (`ci00fa8fac`). Stops at the chain rule on powers, roots and reciprocals of polynomial insides. Not taught: products and quotients (c11, c12); choosing among rules (c13); e^(ax + b) (Year 12 d01).

## Decisions

- **Anchor: a pebble dropped into a still garden pond (painted plates, live).** The ring's radius grows 0.5 m every second and the area inside it is πr², so area depends on radius and radius on time: a function inside a function in a picture. dA/dr = 2πr (square metres per metre of radius, by the power rule) and dr/dt = ½ (metres per second), so at r = 1 m the area grows 2π × ½ = π ≈ 3.1 m² per second, and the units chain "m² per m × m per s = m² per s". Home and outdoors; the pack's anchor 1. No Year 12 or a11 design uses a pond ripple or a pebble (grep 16 Nov: "pond" hits are only "corresponding" and a biology pool plate in a reuse list; "ripple" and "pebble" no anchor). The pack's treadmill (anchor 2) was not needed. The anchor sits after the algebra hook because c09's final frame is algebra only (root ruling 6 on c01 to c09).
- **The model.** r = 0.5t metres, A = πr² = 0.25πt² m². The check "A = ¼πt², so dA/dt = ½πt = π at t = 2" is spoken once, to show the chain gives what expanding gives. Ripple physics (the ring's speed is set by the water's depth) is not discussed; the speed is given.
- **Simulations (standard item 3).**
  1. **Ripple ring** (scene 2): over the pond plate a coded ring grows at r = 0.5t from the pebble's entry point, its disc tinted pale teal; a `LiveReadoutBoard` shows "t", "r" (blue), "A = πr²" (teal) live; at t = 2 s it pauses and a thin band of width "+ a little r" lights round the ring, hand tag "area per metre of radius = 2πr", then the rate chain writes.
  2. **`StudioRateChainStrips`** (scenes 2, 3): three linked strips "t → r → A" with rates on the links, "× ½" (blue) and "× 2πr" (teal), multiplying into "dA/dt" (violet). In scene 3 the same strips relabel "x → u → y" with "× du/dx" and "× dy/du".
  3. **Inside slot** (`InnerSlot`; scenes 3 to 7): the inside of each bracket is shown in a dashed blue slot that stays whole while the outside power differentiates, then its derivative slides out of the slot to the front as a factor.
- **Colour roles (fixed; the c01 to c09 roles, root ruling 7).** The inside u and du/dx **blue** (inputs, continuing c09's frame); the outside and dy/du **teal**; dy/dx and gradients **violet**; the power rule's lone guess **amber** (as c09's frame); answer green; mistake red, crossed slips only. The same outside-teal, inside-blue pairing as Year 12 d06.
- **Large type, handwritten voice.** As c01. Hand tags: "× 3 missing", "inside changes 3 × as fast", "area per metre of radius", "m² per m × m per s", "rates multiply", "call the inside u", "outside first", "times the inside's derivative", "put u back", "keep the inside whole", "outside′ at the inside", "rewrite as a power", "½ × 2 = 1".
- **Stage changes (standard item 2).** c09's algebra frame and the expansion test (1); the pond and its ring (2); the rule card with the strips (3); g01 board, (3x + 2)⁵ (4); g01 board, (2x³ + 5)⁴ (5); function notation and a gradient on a small graph (6); g01 board, a root and a reciprocal (7); framed card (8); question cards (9 to 12); the dog-walking plate (13); key notes (14).
- **Worked examples (g01 layout).** 4: site `we-chain-1`, (3x + 2)⁵ → 15(3x + 2)⁴; crossed "5(3x + 2)⁴". 5: site `we-chain-2`, (2x³ + 5)⁴ → 24x²(2x³ + 5)³; crossed "4(6x²)³". 6: site `we-chain-3`, (x² + 1)⁴ → 8x(x² + 1)³, gradient 64 at x = 1. 7: site drill √(x² + 1) → x/√(x² + 1); and 1/(2x − 1)³ → −6/(2x − 1)⁴ (original).
- **Memory aid.** Framed card: "Outside first, inside left alone, then times the inside's derivative." Second line: "Put the inside back."
- **Visual surprise.** The expansion test: the honest derivative of (3x + 2)² and the power rule's guess sit side by side, and the only difference is a factor 3, which rings blue on the 3 inside the bracket. In scene 2 the ring's rates multiply on screen and the units cancel in pairs.
- **Site notes (pack section 8).** The odd-one-out drill (√(3x) needs no chain rule; logged by the pack) is not used. The site's claim that answers in u are "not accepted" is not used; the narration says "an answer left in u isn't finished, because the question was about x". The site's gear analogy is replaced by the pond (a real rate chain with units).
- **Plain meanings at first use.** Composite ("a function inside a function: the inside's output is the outside's input", recalled from w27); inside part u ("call the inside part u"); dy/du ("how fast y changes as u changes"); back-substitute ("put the inside back").
- **Attempts (pack questions).** A1: (1 − 4x)³ → −12(1 − 4x)², and 2/(3x + 1)² → −12/(3x + 1)³; crossed "3(1 − 4x)²". A2: the gradient of √(2x² + 1) at x = 2 is 4/3; crossed "1/6" (the inside's 4x left off).
- **Mistake scene:** none separate. The power rule alone (1, 4 crossed); differentiating the inside inside the power (5 crossed); leaving the answer in u (4 tag "put u back"); the inside's factor left off (A1, A2 crossed).
- **Cause chain taught, in order:** (1) expanding (3x + 2)² shows the true derivative is 3 times the power rule's guess, and 3 is how fast the inside changes (1); (2) when area depends on radius and radius on time, each second's growth in radius is turned into area at 2πr per metre, so the rates multiply and so do the units (2); (3) so dy/dx = dy/du × du/dx with u the inside, which reproduces the expansion (3); (4) the outside is differentiated with the inside kept whole, because the outside sees the inside as one quantity (4, 5); (5) in function notation the outside's derivative is evaluated at the inside, f′(g(x)) (6); (6) roots and reciprocals are powers of the inside, so the same rule applies (7).
- **Entry knowledge (route):** c07 (the power rule for all real n, the constant multiple rule, rewriting roots and reciprocals as powers); w27 (composite functions); c05 (the notations dy/dx and f′(x)); c09 (the frame).
- **What Year 12 relies on.** d01, d02, d03 and d06 show the grey chip "Year 11: dy/dx = dy/du × du/dx" and say "call the inside part u"; d06 says "rates along a chain multiply: dy/du times du/dx, Year 11's form". This video teaches exactly that layout (u, dy/du, du/dx, multiply, put u back) and those words. d06's memory aid ("Outside slope at the inside, times the inside slope") is the same idea in other words; this card does not use it, so d06's aid stays new.
- **Handoff (to math-a11-c11, "How do both factors contribute to the derivative of a product?").** Scene 13: the dog-walking plate (`ma11-dog-walk-kit-v1.png`) with chips "$15 a walk, + $1 a month" (teal), "8 walks a week, + 2 a month" (blue), "income: 15 × 8 = $120 a week", "rising how fast? 1 × 2 = 2 ?" (amber, "?"); chips "Next: two functions multiplied" and "?". This is c11's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Pond: r = 0.5t m; A = πr² = 0.25πt² m²; dA/dr = 2πr; dr/dt = 0.5; dA/dt = πr = 0.5πt; at t = 2 s: r = 1 m, dA/dt = π ≈ 3.14 m²/s. The ring's speed is given, not derived.
  (b) (3x + 2)² = 9x² + 12x + 4; derivative 18x + 12 = 6(3x + 2); power rule alone 2(3x + 2). (3x + 2)⁵ at x = 0: true 15 × 16 = 240, guess 5 × 16 = 80 (not used on screen).
  (c) `we-chain-1`: 15(3x + 2)⁴. `we-chain-2`: 24x²(2x³ + 5)³. `we-chain-3`: 8x(x² + 1)³; at x = 1: 8 × 1 × 8 = 64.
  (d) √(x² + 1) → x/√(x² + 1). (2x − 1)⁻³ → −6(2x − 1)⁻⁴ = −6/(2x − 1)⁴.
  (e) A1: −12(1 − 4x)²; 2(3x + 1)⁻² → −12(3x + 1)⁻³. A2: 2x/√(2x² + 1); at 2: 4/3; slip: ½(2x² + 1)^(−½) at 2 = 1/6.
  (f) Pronunciations: "three x plus two, all to the fifth"; "d y by d u"; "d u by d x"; "pi r squared"; "two pi r"; "f prime of g of x"; "to the power of a half"; "to the minus a half"; "four on three"; "one sixth"; "zero point five" is avoided (the narration says "half a metre").
  (g) Windows: pond plate at about 1,100 px with the ring's radius scaled from the plate sidecar (1 m = the sidecar's metre); y = (x² + 1)⁴ small graph x −1.2 to 1.2, y 0 to 20 (gradient at 1 shown by a violet tangent clipped to the window, with the readout "64").

Main question: *How does the chain rule handle a function inside a function? Why is (3x + 2)⁵ not just 5(3x + 2)⁴?*
Entry knowledge (c07, w27, c05): the power rule for any real power and rewriting roots and reciprocals; composite functions; dy/dx and f′.
Stops after: dy/dx = dy/du × du/dx and h′(x) = f′(g(x))g′(x); back-substitution; a gradient at a point; roots and reciprocals. No products, quotients or rule choice.
Handoff: math-a11-c11: "a dog walker's price and walks both rise: is the income's rate just the two rates multiplied?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): inside u and du/dx blue; outside and dy/du teal; dy/dx violet; the lone guess amber; answer green; mistake red. Header strip "MATHEMATICS ADVANCED · INTRODUCTION TO DIFFERENTIATION". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: is the power rule enough?
> Here's y equals three x plus two, all to the fifth. It's a function inside a function: the inside, three x plus two, feeds its output into the fifth power. We could expand five brackets, but that's slow. The power rule alone would say five times three x plus two, to the fourth. Is that right? Test the idea on a power small enough to expand. Three x plus two, all squared, is nine x squared plus twelve x plus four, so its derivative is eighteen x plus twelve, which is six times three x plus two. The power rule alone gives two times three x plus two. That's out by a factor of **three**. And three is how fast the inside changes as x changes. So how does the chain rule handle a function inside a **function**?

Visual: opens on c09's final frame exactly ("y = (3x + 2)⁵" at 72 px with "3x + 2" blue in its bracket, the left chip "expand five brackets? slow", the right chip "power rule alone: 5(3x + 2)⁴ ?" amber, "Next: a function inside a function", "?"). On the first sentence the "Next" chips fade and a grey chip writes: "w27: inside's output → outside's input". On "function inside a function" the pond thumbnail (the pond plate `ma11-garden-pond-v1.png` at 240 px, with a still coded ring on its water) appears at the top left as a badge, so the anchor shows early (root ruling 1 on c10 to c18); it stays until scene 2 enlarges it. On "Test the idea" the main line slides up (52 px) and a g01 strip opens below: "(3x + 2)² = 9x² + 12x + 4"; "d/dx: 18x + 12 = 6(3x + 2)" (violet); beside it "power rule alone: 2(3x + 2)" (amber). On "three" a hand-drawn "× 3" arrow joins the two results, hand tag "× 3 missing", and the 3 inside "3x + 2" rings blue, hand tag "inside changes 3 × as fast". On "function" heading "A function inside a function". The question chip "Why not just 5(3x + 2)⁴?" moves to the top right.

### 2. why the rates multiply: a ripple
> Here's why the rates multiply. Drop a pebble into a still pond. A ring spreads out, and its radius grows by half a metre every second. The area inside the ring is pi r squared. So the area depends on the radius, and the radius depends on time. By the power rule, d A by d r is two pi r. That's square metres of area for each extra metre of radius. And d r by d t is a half, in metres each second. After two seconds the radius is one metre. So at that moment, the area is growing at two pi, times a half, which is pi, about three point one square metres per **second**. Look at the units. Square metres per metre, times metres per second, gives square metres per second. Check it another way. The area is a quarter pi t squared, and its derivative at two seconds is also pi. The rates chain together by **multiplying**.

Visual: stage change: the pond plate `ma11-garden-pond-v1.png` (1,100 px) at the left; the pebble sprite `ma11-pebble-v1.png` drops into the centre and a coded ring spreads at r = 0.5t, its disc pale teal. `LiveReadoutBoard` at the right (52 px): "t = … s", "r = … m" (blue), "A = πr² = … m²" (teal). At t = 2 s the ring pauses at r = 1 m; a thin band round the ring lights, hand tag "area per metre of radius = 2πr". `StudioRateChainStrips` writes under the readouts: "t → r → A" with links "dr/dt = ½" (blue) and "dA/dr = 2πr" (teal); on "second" the product "dA/dt = 2π × ½ = π ≈ 3.1 m²/s" (violet, green frame), hand tag "at t = 2 s" beside it. On "Look at the units" `StudioUnitProduct` shows "m²/m × m/s = m²/s" with the two m's slashed, hand tag "m² per m × m per s". On "Check it another way" a grey row "A = ¼πt², dA/dt = ½πt = π at t = 2 ✓". On "multiplying" hand tag "rates multiply".

### 3. the chain rule
> So here's the chain rule. Call the inside part u. Then d y by d x equals d y by d u, times d u by d x. In words, differentiate the outside as if u were a single letter, then multiply by the inside's **derivative**. It looks as if the d u's cancel. They aren't really fractions, but it's a handy way to remember the order. Check it on three x plus two, all squared. Let u be three x plus two, so y is u squared. d y by d u is two u, and d u by d x is three. Multiply, to get two u times three, which is six times three x plus two. That's exactly what expanding **gave**.

Visual: clear change: the rule card at the left (900 px), the pond as a 280 px badge at the top right with "π m²/s". The strips from scene 2 relabel "x → u → y", links "du/dx" (blue) and "dy/du" (teal). Card, 52 px: "y = f(u), u = g(x)"; hand tag "call the inside u"; on "derivative" the rule, 60 px, framed: "dy/dx = dy/du × du/dx" (dy/du teal, du/dx blue, dy/dx violet), hand tags "outside first" and "times the inside's derivative". On "the d u's cancel" the two du's flash grey, grey chip "a memory trick, not a cancellation". Rows, 52 px: "u = 3x + 2, y = u²"; "dy/du = 2u, du/dx = 3"; "dy/dx = 2u × 3 = 6(3x + 2)" (violet); on "gave" a green tick links it to the scene 1 result "6(3x + 2) ✓".

### 4. worked example: three x plus two, to the fifth
> Now the one we started with, three x plus two, all to the fifth. Let u equal three x plus two, so y equals u to the fifth. Then d y by d u is five u to the fourth, and d u by d x is **three**. Multiply them, to get fifteen u to the fourth. Last step, put the inside back. The answer is fifteen times three x plus two, to the **fourth**. An answer left in u isn't finished, because the question was about x. And the power rule alone, five times three x plus two to the fourth, is the slip. It's missing the inside's **three**.

Visual: clear change to the full-width g01 board (`WorkingBoard`). Task strip, 44 px: "Differentiate y = (3x + 2)⁵." Givens card (left, 40 px): "inside: u = 3x + 2" (blue), "outside: y = u⁵" (teal). Rows, current 52 px, earlier 32 px and dimmed: "dy/du = 5u⁴" (teal); on "three" (first) "du/dx = 3" (blue), the 3 sliding out of the inside slot; "dy/dx = 5u⁴ × 3 = 15u⁴"; hand tag "put u back"; on "fourth" "dy/dx = 15(3x + 2)⁴" (green frame). On "three" (second) a red slip "5(3x + 2)⁴" writes and is crossed, caption "× 3 missing".

### 5. worked example: a cubic inside
> This time the inside is a cubic. Differentiate two x cubed plus five, all to the fourth. Let u be two x cubed plus five, so y is u to the fourth. d y by d u is four u cubed, and d u by d x is six x **squared**. Multiply, and put the inside back. d y by d x is twenty-four x squared, times two x cubed plus five, **cubed**. Notice that the inside stays whole inside the bracket. Writing four times six x squared, cubed, differentiates the inside in the wrong place. The inside's derivative goes out the front, as a **factor**.

Visual: the board clears row by row (stage continues). Task strip: "Differentiate y = (2x³ + 5)⁴." Givens card: "u = 2x³ + 5" (blue), "y = u⁴" (teal). Rows, 52 px: "dy/du = 4u³"; on "squared" "du/dx = 6x²" (blue); "dy/dx = 4u³ × 6x²"; on "cubed" "dy/dx = 24x²(2x³ + 5)³" (green frame). On "stays whole" the bracket "(2x³ + 5)" in the answer outlines in a dashed blue slot, hand tag "keep the inside whole". On "factor" a red slip "4(6x²)³" writes and is crossed, caption "inside′ goes out the front".

### 6. function notation and a gradient
> Here's the same rule in function notation. If h of x is f of g of x, then h prime of x is f prime of g of x, times g prime of x. That's the outside's derivative with the inside left in it, times the inside's **derivative**. Let's find a gradient with it. For y equals x squared plus one, all to the fourth, the outside is f of u equals u to the fourth, and the inside is g of x equals x squared plus one. So d y by d x is four times x squared plus one, cubed, times two x, which is eight x times x squared plus one, **cubed**. At x equals one, that's eight times one times two cubed, so the gradient is sixty-**four**.

Visual: clear change: rows at the left (1,050 px), a small graph at the right (y = (x² + 1)⁴, 640 × 520 px). Row, 52 px: "h(x) = f(g(x))"; on "derivative" "h′(x) = f′(g(x)) × g′(x)" framed (f′ teal, g(x) blue inside a dashed slot, g′(x) blue), hand tag "outside′ at the inside". Task strip, 44 px: "Find the gradient of y = (x² + 1)⁴ at x = 1." Rows: "f(u) = u⁴, g(x) = x² + 1"; "dy/dx = 4(x² + 1)³ × 2x"; on "cubed" "= 8x(x² + 1)³" (violet). On "four" (last) "x = 1: 8 × 1 × 2³ = 64" (green frame); the graph's point (1, 16) rings and a violet tangent draws with readout "gradient 64".

### 7. roots and reciprocals
> Roots and reciprocals work too, once you write them as powers. The square root of x squared plus one is x squared plus one, to the power of a half. So d y by d x is a half, times x squared plus one to the minus a half, times two x. The half and the two cancel, leaving x over the square root of x squared plus **one**. And one over two x minus one, all cubed, is two x minus one to the minus three. Its derivative is minus three, times two x minus one to the minus four, times two. That's minus six over two x minus one, to the **fourth**.

Visual: clear change to the g01 board. Two short tasks stacked, 44 px: "y = √(x² + 1)" and "y = 1/(2x − 1)³". Rows, 52 px, hand tag "rewrite as a power" on each first row: "y = (x² + 1)^½"; "dy/dx = ½(x² + 1)^(−½) × 2x" (½ teal, 2x blue); the ½ and 2 slash, hand tag "½ × 2 = 1"; on "one" "dy/dx = x/√(x² + 1)" (green frame). Second task: "y = (2x − 1)⁻³"; "dy/dx = −3(2x − 1)⁻⁴ × 2"; on "fourth" "= −6/(2x − 1)⁴" (green frame).

### 8. memory aid
> Here's the summary. Differentiate the outside, and leave the inside alone. Then multiply by the inside's **derivative**. And always put the inside back at the end.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the pond's rate chain "dA/dt = dA/dr × dr/dt" small, and "(3x + 2)⁵ → 5(3x + 2)⁴ × 3". Main line, hand font 56 px: "Outside first, inside left alone, then times the inside's derivative." On "derivative" the key line, 40 px: "Put the inside back." Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. Differentiate y equals one minus four x, all cubed. Then differentiate y equals two over the square of three x plus one. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Differentiate: (a) y = (1 − 4x)³ (b) y = 2/(3x + 1)²". The full question stays on screen. Picture slot: an empty working board with the labels "u =", "dy/du =", "du/dx =" only. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> The outside gives three times one minus four x, squared, and the inside's derivative is minus **four**. So the first is minus twelve times one minus four x, **squared**. Write the second as two times three x plus one, to the minus two. Its derivative is minus four times three x plus one to the minus three, times three, so minus twelve over three x plus one, **cubed**. Leaving off the minus four is the slip.

Visual: the card shrinks to the top (30 px). Rows, 44 px: "(a) u = 1 − 4x: 3(1 − 4x)² × (−4)" (−4 blue); on "four" the −4 slides out of the slot; on "squared" "dy/dx = −12(1 − 4x)²" (green frame). "(b) y = 2(3x + 1)⁻²: −4(3x + 1)⁻³ × 3"; on "cubed" "dy/dx = −12/(3x + 1)³" (green frame). On "Leaving off the minus four is the slip" a red slip "3(1 − 4x)²" writes and is crossed, caption "× (−4) missing". Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. Find the gradient of y equals the square root of two x squared plus one, at x equals two. Pause here to answer.

Visual: `QuestionCard`, 40 px: "Find the gradient of y = √(2x² + 1) at x = 2." Picture: y = √(2x² + 1) for x −3 to 3, the point at x = 2 marked, no tangent. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 12. feedback 2 (brief)
> Write it as two x squared plus one, to the power of a half. The outside gives a half, times two x squared plus one to the minus a half, and the inside's derivative is four **x**. Together, that's two x over the square root of two x squared plus one. At x equals two, that's four over the square root of nine, so four on **three**. Forgetting the four x gives one sixth. That's the **slip**.

Visual: the card shrinks to the top. Rows, 44 px: "y = (2x² + 1)^½"; on "x" "dy/dx = ½(2x² + 1)^(−½) × 4x" (4x blue); "= 2x/√(2x² + 1)"; on "three" "x = 2: 4/√9 = 4/3" (green frame), a violet tangent on the picture with "4/3". On "slip" a red slip "½(9)^(−½) = 1/6" writes and is crossed, caption "× 4x missing". Hold about 1 s.

### 13. handoff
> So, powers, sums, multiples, and now a function inside a function. Next, two functions multiplied together. A dog walker charges fifteen dollars a walk and does eight walks a week, so she earns a hundred and twenty dollars a week. Every month, her price goes up a dollar, and she adds two more walks. How fast is her weekly income rising? Is it just the two increases multiplied? That's **next**.

Visual: the memory line shows small at the top (30 px), then fades. Board clear to the dog-walking plate `ma11-dog-walk-kit-v1.png` (900 px) at the left. On "fifteen dollars" chip "$15 a walk" (teal); on "eight walks" chip "8 walks a week" (blue); chip "income: 15 × 8 = $120 a week". On "Every month" the chips gain "+ $1 a month" and "+ 2 a month". On "multiplied" chip "rising how fast? 1 × 2 = 2 ?" (amber, "?"). On "next" chips "Next: two functions multiplied" and "?". Hold about 2 s. This is c11's opening frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Chain rule: y = f(u), u = g(x): dy/dx = dy/du × du/dx.
- Function form: h(x) = f(g(x)) gives h′(x) = f′(g(x)) × g′(x).
- Steps: u = inside; dy/du; du/dx; multiply; put u back.
- Roots and reciprocals: rewrite as powers first (√u = u^½, 1/uⁿ = u⁻ⁿ).
- (3x + 2)⁵ → 15(3x + 2)⁴, not 5(3x + 2)⁴.

Memory aid (framed card, right side, as in scene 8): *Outside first, inside left alone, then times the inside's derivative.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 13's frame exactly. This is the final frame and c11's opening frame.

## Teaching checks

- **Does it explain causes?** Why the power rule alone fails: the expansion test shows a missing 3 (1). Why multiply: area per metre of radius times metres per second gives area per second (2). Why the inside stays whole: the outside sees the inside as one quantity, u (3, 5). Why put u back: the question is about x (4). Why roots and reciprocals fit: they are powers of the inside (7).
- **Misconceptions addressed:** the power rule alone (1, 4 crossed); the inside differentiated inside the power (5 crossed); an answer left in u (4 tag); the inside's factor left off (A1, A2 crossed).
- **Visual standard, item by item:** 1 the painted pond and pebble from scene 2 (the opening frame is c09's algebra, by root ruling 6), returning as a badge in 3 and on the card; 2 a new stage every 30 to 55 s; 3 the live ripple with readouts, the rate-chain strips, the inside slot; 4 fixed roles (inside blue, outside teal); 5 large type; 6 hand tags; 7 g01 boards in 4, 5 and 7; 8 framed card and five bullets; 9 the missing × 3 ringing on the inside, and the units cancelling.
- **One idea at a time:** the failed guess (1), why rates multiply (2), the rule (3), the site's two examples (4, 5), function notation and a gradient (6), roots and reciprocals (7).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 30 s and 28 s.
- **Avoided double teaching:** the power rule and rewriting as powers (c07), composites (w27) and dy/dx (c05) are recalled in a phrase or grey chip.
- **Syllabus coverage:** `ci00fa8fac` (3 to 7, A1, A2; key notes 1 to 4).
- **Out of scope by design:** products and quotients (c11, c12); choosing a rule (c13); exponentials (Year 12 d01).

## Practice questions and model answers

**Attempt 1 (scene 9; pack question 1, original, HSC style, 2 marks suggested, not an official marking scheme).** "Differentiate: (a) y = (1 − 4x)³ (b) y = 2/(3x + 1)²"
Model answer: (a) u = 1 − 4x: dy/dx = 3(1 − 4x)² × (−4) = −12(1 − 4x)². (b) y = 2(3x + 1)⁻²: dy/dx = −4(3x + 1)⁻³ × 3 = −12/(3x + 1)³. Classic mistake (crossed): "3(1 − 4x)²".

**Attempt 2 (scene 11; pack question 2, original, HSC style, 2 marks suggested).** "Find the gradient of y = √(2x² + 1) at x = 2."
Model answer: y = (2x² + 1)^½; dy/dx = ½(2x² + 1)^(−½) × 4x = 2x/√(2x² + 1). At x = 2: 4/√9 = 4/3. Classic mistake (crossed): "1/6".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Expansion test | (3x + 2)² = 9x² + 12x + 4; 18x + 12 = 6(3x + 2); guess 2(3x + 2) | 1, 3 |
| Pond | r = 0.5t; A = πr²; dA/dr = 2πr; dr/dt = ½; at t = 2, r = 1: dA/dt = π ≈ 3.1 m²/s; A = ¼πt² check | 2 |
| `we-chain-1` | 5u⁴ × 3 = 15(3x + 2)⁴; slip 5(3x + 2)⁴ | 4 |
| `we-chain-2` | 4u³ × 6x² = 24x²(2x³ + 5)³; slip 4(6x²)³ | 5 |
| `we-chain-3` | 8x(x² + 1)³; at 1: 64 | 6 |
| Root, reciprocal | x/√(x² + 1); −6/(2x − 1)⁴ | 7 |
| A1 | −12(1 − 4x)²; −12/(3x + 1)³ | 9, 10 |
| A2 | 2x/√(2x² + 1); 4/3; slip 1/6 | 11, 12 |
| Handoff | $15 a walk, 8 walks, $120 a week; + $1 and + 2 a month (no rate stated) | 13 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (16 Nov 2026, scratchpad `c10c18/verify.py`); Codex to re-check.

- Revision 2: A(3) − A(2) = 5π/4 ≈ 3.93 m² (author check for the wording change; not shown); dA/dt at t = 2 is π (unchanged).
- (3x + 2)²: expansion 9x² + 12x + 4; derivative 6(3x + 2).
- (3x + 2)⁵ → 15(3x + 2)⁴. (2x³ + 5)⁴ → 24x²(2x³ + 5)³. (x² + 1)⁴ → 8x(x² + 1)³; value at x = 1: 64.
- √(x² + 1) → x/√(x² + 1). (2x − 1)⁻³ → −6/(2x − 1)⁴.
- A = π(0.5t)² = 0.25πt²; dA/dt = 0.5πt; at t = 2: π ≈ 3.1416. dA/dr at r = 1: 2π; × ½ = π.
- (1 − 4x)³ → −12(1 − 4x)² (SymPy prints −12(4x − 1)², equal). 2/(3x + 1)² → −12/(3x + 1)³.
- √(2x² + 1) → 2x/√(2x² + 1); at x = 2: 4/3. Slip value ½ × 9^(−½) = 1/6.
- Handoff: 15 × 8 = 120.

## Memory aid check

- **"Outside first, inside left alone, then times the inside's derivative."** Original. Meaning, as said in scene 8: differentiate the outer function as if the inside were one letter u, keeping the inside unchanged inside it; multiply by du/dx; then write the answer in x. It is dy/dx = dy/du × du/dx and f′(g(x))g′(x) in words. Assumptions checked: both layers differentiable where used (√ needs its inside positive for the derivative; 1/(2x − 1)³ needs x ≠ ½); "outside" means the last operation applied (c13 makes that a test). It helps a new case: (5x − 2)⁷ → 7(5x − 2)⁶ × 5 = 35(5x − 2)⁶ (the site's short-answer item). Introduced after scenes 1 to 7.
- **Considered, not used:** "Outside slope at the inside, times the inside slope" (Year 12 d06's own aid; kept for d06 so it lands as a fresh phrasing of the same idea).

## Narration length estimate

Counted by script (narration blockquotes, bold markers removed): 5,915 characters (Revision 2; Revision 1 was 5,906). At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 22 s of settling (the ripple, the strips, the slot moves) and the 45 s notes scene: about 532 s. Characters per scene (1 to 14): 705, 810, 561, 513, 513, 606, 531, 159, 153, 398, 121, 378, 392, 75. Speech before the notes is about 439 s, under the 570 s cap. Feedback speech: about 30 s and 28 s.

Reserve trims if the voiced take runs long: feedback 1's "Write the second as" becomes "The second is" if it measures over 30 s; scene 2's "Check it another way" pair of sentences (keep the grey row); scene 3's "the d u's cancel" pair (keep the grey chip).

## Scene list and build ids

Lesson key `m-a11c10` (route math-a11-c10). Explainer folder `src/explainer/lessons/math-a11-c10`; build inputs in `docs/production/claude-pm/lessons/math-a11-c10/` (at voicing).

In order (14 scene headings): hook-power-test, ripple-chain, chain-rule, example-fifth, example-cubic-inside, function-notation, roots-reciprocals, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 48 s | 1 | c09's algebra frame; the expansion test |
| 48 to 112 s | 2 | The pond and its ring |
| 112 to 152 s | 3 | Rule card and strips |
| 152 to 186 s | 4 | g01 board: (3x + 2)⁵ |
| 186 to 220 s | 5 | g01 board: (2x³ + 5)⁴ |
| 220 to 265 s | 6 | Function notation and a gradient |
| 265 to 300 s | 7 | g01 board: a root and a reciprocal |
| 300 to 315 s | 8 | Framed memory card |
| 315 to 420 s | 9 to 12 | Question cards and countdowns, then feedback |
| 420 to 448 s | 13 | The dog-walking plate |
| 448 to 493 s | 14 | Key notes, then a silent return to scene 13's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: c09's last frame continues into 1; 1 to 2 stage change; 2 to 3 clear change; 3 to 4 clear change to the board; 4 to 5 board row clear; 5 to 6 clear change; 6 to 7 clear change to the board; 7 to 8 camera pull back; attempts and feedback: the card shrinks to the top; 12 to 13 board clear; 13 to 14 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11-c10-learning-review.md`, `science_check` = `checks/m-a11-c10-maths-check.md`.

## Assets

Inspected before choosing (16 Nov 2026, `public/assets/maths`, read only, file list): no pond, pebble or dog plate exists. `biology/y11-lowland-pool-v1.png` is a natural pool seen at an angle with plants (cited in a Year 12 reuse list); its surface is crowded with vegetation, so a new plate with a clear open centre is needed for coded rings.

Need (painted, new; see the Codex asset brief): `ma11-garden-pond-v1.png`, `ma11-pebble-v1.png` (this video, scene 2), `ma11-dog-walk-kit-v1.png` (this video's handoff and c11).

Coded: the ring, readouts, rate-chain strips, unit product, inside slots, every row, graph and tangent, cards, countdown, hand tags, key notes.

### Studio kit use and additions

Uses: `LiveReadoutBoard`, `StudioRateChainStrips`, `StudioUnitProduct`, `InnerSlot`, `WorkingBoard`, `TaskStrip`, `GivensCard`, `StudioPlot`, `FunctionRider` (tangent at a point), `PlateImg`, `HandTag`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions:
1. **Ripple ring over a plate** (small): a coded ring of radius r(t) = 0.5t m drawn in the pond plate's perspective (an ellipse from the sidecar's metre scale and tilt), with its disc tinted and a pause frame. Check: at the pause the readout says r = 1 m and the ring's horizontal radius equals the sidecar's metre.
2. **Factor slide-out on `InnerSlot`**: the inside's derivative leaves the dashed slot and lands in front of the bracket on a cue.

## Codex asset brief (Maths A11 C10, a garden pond, a pebble and a dog-walking plate; the last also opens c11)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-c10.md`. Paint after the learning review and maths check pass and root gives the go-ahead, and before the c10 build. Save to `public/assets/maths/`. Transparent PNG with a true alpha channel; ink and watercolour in the house style, matched to `maths/ma11-jellybean-jar-v1.png`; no text, numbers, signs, logos, people, hands, faces, glow or shadow. Never stretch.

1. `ma11-garden-pond-v1.png` (2400 × 1500 px): a small round garden pond seen from above at about 50 degrees, edged with flat sandstone pavers and a few low ferns at the back edge; the water dark green-blue, perfectly still and clear of leaves or lily pads across the central 60 per cent (code draws the rings there). The pond is close to circular when seen from straight above.
2. `ma11-pebble-v1.png` (500 × 380 px): one smooth, rounded grey river pebble, seen from the side, no shadow.
3. `ma11-dog-walk-kit-v1.png` (1800 × 1400 px): a friendly red kelpie sitting beside a coiled red lead and a stainless water bowl on a timber front step, seen side-on, nothing else. No collar tag text.

Sidecar JSON for the pond (`ma11-garden-pond-v1.json`): the pixel centre of the open water, the pixel lengths of 1 m across and 1 m up-and-down the water surface at that centre (the pond is about 3 m across), and the open-water ellipse. Report inspection on the paper background (`#f6f1e7`) at 900 px and full width, and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-c10-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quote matches the route-inputs JSON exactly.
3. Confirm the chain rule is shown in the dy/du × du/dx layout with "call the inside part u" and the answer always back-substituted in x.
4. Confirm no product, quotient or exponential is differentiated.
5. Confirm the pond's units chain (m² per m × m per s) and π ≈ 3.1 m²/s are correct.
6. Confirm both attempts carry every demand and neither card nor picture shows an answer.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its Visual in spoken order, and that scene 1 opens on c09's final frame.

## YouTube metadata (draft)

Title: The Chain Rule: Differentiating a Function Inside a Function | Year 11 Maths Advanced

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/introduction-to-differentiation/lesson05.sa.html

Why isn't the derivative of (3x + 2)⁵ just 5(3x + 2)⁴? Test the idea on a square you can expand, then see why rates along a chain multiply, with a pebble's ripple spreading across a pond. Learn the chain rule dy/dx = dy/du × du/dx (call the inside part u), use it on (3x + 2)⁵ and (2x³ + 5)⁴, write it as f′(g(x))g′(x), find a gradient at a point, and differentiate roots and reciprocals of a bracket. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Introduction to differentiation.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Apply the chain rule: if y is a differentiable function of u, and u is a differentiable function of x, then dy/dx = dy/du × du/dx or if h(x) = f(g(x)) for differentiable functions f(x) and g(x) then h'(x) = f'(g(x))g'(x)"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa6bc41678

Builds on: Given gradient and angle of inclination; the power rule. Next: The product rule.

#Year11Maths #MathsAdvanced #ChainRule #HSCScience

## Open decisions

- **1. The anchor's place (root).** The opening is c09's algebra frame (root ruling 6 on c01 to c09), so the painted pond arrives at about 48 s, not inside the first 20 s (standard item 1). The expansion test is the visual surprise that carries the opening. If root wants a plate earlier, the pebble can drop into a small pond badge during scene 1's last sentence.
- **2. The "cancelling du" remark (learning review).** The narration calls it a memory trick, not a cancellation. If the reviewer prefers silence on it, cut the pair of sentences (the reserve trim).
- **3. d06's memory aid.** This card uses different words from d06's "Outside slope at the inside, times the inside slope" on purpose; root may prefer the same words in both for consistency.

## Review notes

- Revision 2 (17 Nov 2026): independent learning review resolved (see "Revision 2" at the top). Next: the Codex maths check and error check (brief 248), then voicing on the Google voice and a build on the studio kit to grade A, with a learning check on the exact voiced preview.
- Revision 1 has had no independent review. Next: student learning review (trace from c07, w27 and c05; check that the expansion test convinces, that the pond's units make the multiplication feel caused, that "call the inside part u" is heard and seen, and that back-substitution is never skipped), then the Codex maths check and error check, then voicing and a build to grade A.
