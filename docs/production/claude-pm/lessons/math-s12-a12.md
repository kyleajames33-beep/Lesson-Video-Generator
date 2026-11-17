# Maths S12 A12: What is inverse variation, and why is its graph a hyperbola? A holiday house split between friends, the constant product k, a rectangle of fixed area, both branches and the sign of k, and graphing y = k/x by hand and in an app (design)

Status: Revision 1 (18 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`), the accepted Year 11 Advanced designs (`math-a11-e08.md`, `w14.md`, `g01.md`), the w-strand learning-review resolutions (`../checks/m-a11-w01-w31-learning-review-resolution.md`) and root's rulings on the Standard outline (`../checks/root-rulings-maths-standard-outline.md`, rulings 1 to 12). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,519 characters by script (see "Narration length estimate"), 13 scene headings, about 504 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: twelfth video of Year 12 Mathematics Standard (2024), outline order 12, Algebraic relationships; the first reciprocal video. **Standard 2 only.** Pre-design pack: `../pre-design/maths-standard/math-s12-a12.md`. Site lesson (read through the pack's quotations, read only): `algebraic-relationships/lesson06.sa.html` (Reciprocal Relationships and Inverse Variation, SHA256 `dc844c74fcc51b59220bcb0b550bd4239777d71896c2797e95ce151d18873622`): card 05's k = 12 table (x = 1, 2, 3, 4, 6, 12; y = 12, 6, 4, 3, 2, 1, every product 12), here as the holiday house in hundreds of dollars; card 02's "constant product test", two asymptotes and "x ≠ 0 always", and the quadrants for k > 0 and k < 0; card 05's graphing advice (avoid x = 0; include negative values; do not join the branches; dashed asymptotes; practical models use the first-quadrant branch); `we-2` (y = 30/x, its table and x = 5 when y = 6) with its exact numbers. Not used: card 06's Boyle's Law and density-and-area summary (science or unclear; root ruling 11); the workers hook (its numbers live on as the k = 12 table; a13 handles worker-style limits); the site's limitation discussion (a13). Route entry: `math-s12-a12` in `../../programme/maths-standard-route-inputs-1.json`. Visual system: maths studio kit; the new painted holiday house (from a11b's final frame), the reused travel suitcase; every table, rectangle, graph, slider and app screen coded.

Owner rules applied: as a11b (2024 syllabus; plates for real objects, code for graphs; no people (the friends are counted, never drawn); one question; one stage at a time; words before symbols; g01 worked examples; two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchor (travel and money); Australian spelling; no em dashes; "zero point" decimals; conversational narration).

Syllabus content points (Mathematics Standard 11-12 (2024), Year 12 Standard 2, Algebraic relationships, Reciprocal relationships), quoted from `../../programme/maths-standard-route-inputs-1.json`:

- `cia6ad469c`: "Recognise that inverse variation is represented by a reciprocal relationship of the form y = k/x, where k is the constant of variation"
- `cib706ce50`: "Identify the hyperbolic shape of a reciprocal graph"
- `ci8731b977`: "Graph a reciprocal relationship of the form y = k/x, with and without using graphing applications"

Standard 1: no matching point.

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faf5e47f4a

**Boundary:** starts from a11b's final frame exactly (the holiday house plate with the coded tag "$1,200 for the weekend"; the small grey Year 11 strip "y = kx, double one, the other doubles" with its line through the origin; chips "2 friends: $600 each", "4 friends: ?", "double the friends: half each?", "Next: inverse variation" and "?"). Recalls Year 11 direct variation (math-s11-l06, `cie0224c11`, `ci6f88d684`; math-s11-l07, `cifb738725`) and a05's curve that approaches an axis without meeting it in a phrase or grey chip each. Teaches: inverse variation means the product of the two quantities stays the same; that constant is k, the constant of variation, so y = k/x; test a table by multiplying each pair (dividing tests direct variation); a falling pattern is not enough; the graph of y = k/x is a hyperbola: a fixed-area rectangle shows why it approaches both axes and never meets them; x = 0 is impossible; as pure maths both branches exist, in quadrants 1 and 3 for k > 0 and 2 and 4 for k < 0, and they are never joined; practical problems use the first-quadrant branch; graphing by hand from a table (site `we-2`) and in a graphing app with a k slider; reading x for a given y from the graph. Stops at recognising and graphing y = k/x. Not taught: building a model from a story, solving practical problems, rounding and limitations (a13).

## Decisions

- **Anchor: a holiday house split between friends (new painted plate, live).** A weekend at a coastal holiday house costs $1,200, split evenly. With 1, 2, 3, 4, 6 or 12 friends each pays $1,200, $600, $400, $300, $200 or $100: in hundreds of dollars, the site's card 05 table exactly (12, 6, 4, 3, 2, 1). Doubling the friends halves each share, the opposite of Year 11's "double and double", and the product (friends × share) is always the whole bill, so k means something real. Travel and money; the pack's anchor 1. No Advanced design uses a shared holiday house (pack grep, 18 Nov). The friends appear only as a count and as coded tally marks, never as figures. $1,200 for a weekend for a small coastal house is a typical 2026 NSW figure, an example only (author note).
- **Units.** The share y is in hundreds of dollars so that y = 12/x matches the site; the givens card says "y: share (hundreds of $)" and every spoken amount is said in dollars.
- **Simulations (standard item 3).**
  1. **Constant-product rectangle** (`ConstantProductRectangle`, new; scene 4, from `ProductRectangle` plus `FunctionRider`): a rectangle from the origin to a point on y = 12/x; its corner rides the curve; readouts "width x", "height y" and "area x × y = 12" (amber, fixed); as it grows wide it flattens, as it grows narrow it stretches, and the corner's trail draws the branch.
  2. **Table lights** (scene 2): the table fills row by row with "× 2" arrows on the friends column and "÷ 2" arrows on the share column between matching rows (1 to 2, 2 to 4, 3 to 6, 6 to 12), then a product column lights "12" in every row.
  3. **k slider in the app** (scene 6; `ScreenApp` with `ParameterSlider`, `clampAwayFrom` 0): y = k/x as k sweeps 12 → 30 → 3 → (skips 0, grey flash "k = 0: not inverse variation") → −12; the branches move out, in, then swap to quadrants 2 and 4; a readout names the quadrants.
- **Colour roles (fixed for a12 and a13).** x (the number of friends; the input) **blue**; y (each share; the output) **teal**; the product k **amber**, with the rectangle's area tinted amber; asymptotes dashed grey; answer **green**; mistake **red**, crossed slips only.
- **Large type, handwritten voice.** As a11b. Hand tags: "double", "half", "× 2", "÷ 2", "always 12", "multiply to test", "k: the whole bill", "falling ≠ inverse", "wide: short", "narrow: tall", "area stays 12", "never touches", "no x = 0", "two branches", "don't join", "k > 0: quadrants 1 and 3", "k < 0: 2 and 4", "first quadrant for real things", "across, then down".
- **Stage changes (standard item 2).** a11b's frame (1); the table with arrows and products (2); the falling-line check (3); the constant-product rectangle tracing the branch (4); both branches and the sign of k (5); graphing by hand and in the app (6); framed card (7); question cards (8 to 11); the road-trip frame for a13 (12); key notes (13).
- **Worked examples (g01 layout).** 2: the house table, every product 12, so y = 12/x, k = 12. 3: a falling table (12, 10, 8 at x = 1, 2, 3; products 12, 20, 24) is not inverse variation; crossed "it falls, so it's inverse". 6: site `we-2`: y = 30/x, table 30, 15, 10, 6, 5, 3, 2, 1, x = 5 when y = 6; the app. Crossed slips: "join the branches through the origin" (5).
- **Memory aid.** Framed card: "Inverse: x × y = k, always." Key line: "Multiply to test. The hyperbola hugs both axes, but never touches."
- **Visual surprise.** The rectangle: however its corner slides, wide and flat or tall and thin, its area readout never leaves 12, and the corner has drawn a curve.
- **Site notes (pack section 8; `../site-corrections-maths-standard.md` MS-08).** Card 05's k = 12 numbers and `we-2`'s numbers unchanged. Boyle's Law and the density-and-area example are not used. MS-08 (the declared dotpoint for `cib9514f33` drops "in y = k/x") concerns a13's point; this video quotes its own points from the route inputs.
- **Plain meanings at first use.** Inverse variation ("as one quantity goes up, the other goes down so that their product stays the same"); constant of variation ("the fixed number k that the product always equals"); reciprocal ("one over a number", so y = k/x is a reciprocal relationship); hyperbola ("the two-part curve that y = k/x makes"); asymptote ("a line the curve gets closer and closer to but never reaches", a05 recall); quadrant ("one of the four quarters of the graph, numbered anticlockwise from the top right").
- **Attempts (pack questions).** A1: the table 2, 3, 4, 6, 8 and 24, 16, 12, 8, 6: every product 48, y = 48/x, y = 3 at x = 16; crossed "y/x = 12, so y = 12x". A2: y = 6/x for x = −6, −3, −2, −1, 1, 2, 3, 6: y = −1, −2, −3, −6, 6, 3, 2, 1; a two-branch hyperbola, asymptotes x = 0 and y = 0, quadrants 1 and 3; crossed "branches joined through the origin".
- **Mistake scene:** none separate. Any decreasing pattern called inverse (3 crossed); testing with ratios (A1 crossed); joining the branches (5 crossed, A2 crossed); touching an axis or substituting x = 0 (4 tags); the graph "stopping" at the screen edge (6, the app's zoom out).
- **Cause chain taught, in order:** (1) the whole bill stays $1,200 however many share it, so friends × share is always the same (1, 2); (2) a fixed product means doubling one halves the other, so y = k/x (2); (3) a falling line has changing products, so falling alone is not inverse variation (3); (4) a rectangle of fixed area must get shorter as it gets wider, so the corner's path falls ever more gently towards the x-axis and rises ever more steeply towards the y-axis, without reaching either, because the area would have to be 0 (4); (5) x = 0 is impossible because nothing times zero makes 12 (4); (6) negative x gives negative y when k > 0, a second branch in quadrant 3; a negative k flips the signs into quadrants 2 and 4 (5).
- **Entry knowledge (route):** math-s11-l06 (`cie0224c11`, direct variation y = kx is a straight line; `ci6f88d684`, k and the origin); math-s11-l07 (`cifb738725`, graphing y = kx); a05 (a curve that approaches an axis but never meets it).
- **What later videos rely on.** a13 opens on this video's final frame and builds T = 120/s from one fact, using "multiply a known pair to find k" and "k is the fixed total" from scenes 2 and 7, and the first-quadrant branch from scene 5. a13's rounding scene returns to the holiday house.
- **Handoff (to math-s12-a13, "How do we build and use a reciprocal model, and where does it fail?").** Scene 12: the country road strip `maths/ma12-country-road-v1.png` (viewed 18 Nov: a two-lane road with gum trees behind, true alpha) with the red hatchback `maths/ma12-used-hatchback-v1.png` on it; a coded distance board "same trip every time"; a small table "40 km/h: 3 h"; chips "100 km/h: how long?", "Next: building reciprocal models" and "?". This is a13's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) House: 1,200 ÷ n for n = 1, 2, 3, 4, 6, 12: 1,200, 600, 400, 300, 200, 100; in hundreds: 12, 6, 4, 3, 2, 1.
  (b) Falling line: y = 14 − 2x at x = 1, 2, 3: 12, 10, 8; products 12, 20, 24.
  (c) y = 12/x at x = −1, −2, −3, −4, −6, −12: −12, −6, −4, −3, −2, −1.
  (d) `we-2`: 30/x at 1, 2, 3, 5, 6, 10, 15, 30: 30, 15, 10, 6, 5, 3, 2, 1; 30 ÷ 6 = 5.
  (e) A1: products 48; 48 ÷ 16 = 3. A2: 6/x: −1, −2, −3, −6, 6, 3, 2, 1.
  (f) Quadrants are numbered anticlockwise from the top right (first: x > 0, y > 0).
  (g) Pronunciations: "y equals twelve over x"; "k over x"; "minus twelve over x".
  (h) Windows: house graph x 0 to 13, y 0 to 13 (equal units); both branches x −13 to 13, y −13 to 13 (equal units); `we-2` x 0 to 32, y 0 to 32; app x −10 to 10, y −10 to 10, zoom out to ±40.

Main question: *A $1,200 holiday house split between friends: double the friends and each share halves. What is inverse variation, and why is its graph a hyperbola?*
Entry knowledge (math-s11-l06, l07; a05): direct variation y = kx and its straight line; asymptotes.
Stops after: inverse variation as a constant product, y = k/x with k the constant of variation, the multiply test, the hyperbola's branches, asymptotes and quadrants by the sign of k, graphing by hand and in an app. No model-building, solving in context, rounding or limitations.
Handoff: math-s12-a13: "a car trip of a fixed distance takes 3 h at 40 km/h: how long at 100 km/h?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): x blue; y teal; k and the rectangle's area amber; asymptotes dashed grey; answer green; mistake red. Header strip "MATHEMATICS STANDARD · ALGEBRAIC RELATIONSHIPS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: double the friends
> Here's that holiday house, twelve hundred dollars for the weekend, split evenly. If one person goes, they pay all twelve hundred. Two friends pay six hundred each. Three pay four hundred, four pay three hundred, six pay two hundred, and twelve friends pay a hundred **each**. In Year 11's direct variation, doubling one quantity doubled the other, and the graph was a straight line through the origin. Here, doubling the friends halves each **share**. That's called inverse variation. So what is inverse variation, and why is its graph a **hyperbola**?

Visual: opens on a11b's final frame exactly (the holiday house plate with "$1,200 for the weekend"; the grey Year 11 strip; chips "2 friends: $600 each", "4 friends: ?", "double the friends: half each?", "Next: inverse variation" and "?"). On the first sentence the "Next" chips fade; the house shrinks to 700 px at the left. On "If one person goes" a coded share board at the right (52 px) fills row by row, each row with a tally of small blue marks for the friends: "1 → $1,200", "2 → $600", "3 → $400", "4 → $300", "6 → $200"; on "each" "12 → $100", the "4 friends: ?" chip answering "$300". On "Year 11's direct variation" the grey strip enlarges briefly, its line through the origin and the tag "double → double". On "share" a teal "÷ 2" arrow joins the $600 and $300 rows beside a blue "× 2" joining 2 and 4, hand tags "double" and "half". On "hyperbola" heading "Inverse variation", and the question chip "Double → half: what graph?" moves to the top right.

### 2. the product stays the same
> Put the shares in hundreds of dollars, so they read twelve, six, four, three, two and one. From one friend to two, the number doubles, and the share halves. From two to four, it's double and half **again**. From one to three, it triples, and the share is a third. Now multiply each pair. One times twelve is twelve. Two times six is twelve. Three times four, four times three, six times two and twelve times one, every product is **twelve**. That's the test for inverse variation. The two quantities multiply to the same number every time. That number is called the constant of variation, k. Since x times y is twelve, y equals twelve over x. In general, y equals k over **x**. And here k means something real. It's the whole bill, twelve hundred **dollars**.

Visual: clear change to the g01 board. Task strip (44 px): "Show that the share varies inversely with the number of friends, and write the equation." Givens card (44 px): "x: number of friends" (blue); "y: share (hundreds of $)" (teal); "x: 1, 2, 3, 4, 6, 12"; "y: 12, 6, 4, 3, 2, 1" (site card 05). The table (52 px) at the left (simulation 2). On "the number doubles" blue "× 2" and teal "÷ 2" arrows between rows 1 and 2; on "again" between rows 2 and 4 (and 3 and 6, 6 and 12 lighting faintly). On "triples" "× 3" and "÷ 3" between rows 1 and 3. On "multiply each pair" a third column "x × y" appears; each row's product writes in amber; on "twelve" (last in that sentence) the whole column glows "12, 12, 12, 12, 12, 12", hand tags "always 12" and "multiply to test". Rows: "x × y = 12"; "y = 12/x"; on "x" (bold) a chip "y = k/x, k = the constant of variation" (amber k), with a grey chip "Year 11: y = kx (direct)" beside it. On "dollars" the k chip gains "12 → $1,200: the whole bill", hand tag "k: the whole bill". Framed answer (green): "Every product is 12, so y = 12/x (k = 12)".

### 3. falling isn't enough
> Careful, though. Not every falling pattern is inverse variation. Here's a table where y falls, twelve, ten, eight, for x equals one, two and three. Multiply the pairs. One times twelve is twelve, two times ten is twenty, and three times eight is twenty-**four**. The products change, so this isn't inverse variation. It's a falling straight line. Calling any falling pattern inverse variation is the classic **slip**. Multiply to test it. Dividing each pair tests for direct variation instead, so dividing is the wrong **test** here.

Visual: clear change within the board. A second table (52 px): "x: 1, 2, 3" and "y: 12, 10, 8", with a small plot at the right showing the three points on a falling straight line (grey). The product column writes "12", "20", and on "four" "24", each in amber with the changes ringed, hand tag "products change". On "slip" a red slip "y falls, so it's inverse" writes and is crossed, caption "falling ≠ inverse". On "test" a two-row card (44 px): "direct: y ÷ x stays the same" and "inverse: x × y stays the same", the second boxed amber.

### 4. a rectangle that keeps its area
> Here's a way to see the shape. On the graph of y equals twelve over x, draw a rectangle from the origin out to a point on the curve. Its width is x and its height is y, so its area is x times y, and that's always twelve. Now slide the corner along the curve. Make the rectangle wide, and it has to get **short**. Make it narrow, and it has to get **tall**. The corner traces a curve that sweeps down towards the x-axis, and up towards the y-axis, but it never touches **either**. It can't touch, because then its height or width would be zero, and the area would be zero, not twelve. That's also why x can never be zero. Nothing times zero makes twelve. This curve is a branch of a hyperbola, and the two axes it gets closer and closer to are its **asymptotes**.

Visual: stage change to the constant-product rectangle (simulation 1): a large plot (1,300 × 760 px, x 0 to 13, y 0 to 13, equal units) with the house as a 260 px badge at the top left. A rectangle from (0, 0) to (3, 4), tinted amber, with readouts (52 px): "width x = 3" (blue), "height y = 4" (teal), "area x × y = 12" (amber). On "short" the corner slides to (6, 2), then (12, 1): the rectangle wide and flat, the area readout fixed at 12, hand tag "wide: short". On "tall" it slides back through (2, 6) to (1, 12) and (0.5, 24) off the top: narrow and tall, hand tag "narrow: tall". The corner leaves a teal trail, which on "either" draws the whole first-quadrant branch from x = 0.5 to 13, the ends running close to each axis, hand tag "never touches". On "That's also why x can never be zero" a grey dashed line at x = 0 with a red tag "x = 0: no rectangle, no answer", hand tag "no x = 0". On "asymptotes" both axes turn dashed grey with labels "asymptote x = 0" and "asymptote y = 0", grey chip "a05: an asymptote".

### 5. both branches, and the sign of k
> As pure maths, x can be negative too. Minus one gives minus twelve, minus two gives minus six, and so on. Those points make a second branch, in the third quadrant, at the bottom **left**. Together, the two branches make the hyperbola y equals twelve over x. They're separate pieces, so never join them through the **origin**. If k is negative, say y equals minus twelve over x, every sign flips, and the branches move to the second and fourth quadrants, top left and bottom **right**. In a practical problem, like friends and dollars, only positive values make sense, so we use just the first-quadrant **branch**.

Visual: clear change: a plot with all four quadrants (1,250 × 760 px, x −13 to 13, y −13 to 13, equal units), quadrant numbers "1" to "4" in grey; the first-quadrant branch already drawn. A small table (44 px): "x: −1, −2, −3, −4, −6, −12" and "y: −12, −6, −4, −3, −2, −1"; the points drop into the third quadrant; on "left" the second branch draws, hand tag "two branches". On "origin" a red slip, a curve joining the branches through (0, 0), writes and is crossed, caption "never join them", hand tag "don't join". On "minus twelve over x" the plot redraws for y = −12/x: both branches swing into quadrants 2 and 4, with readouts "k = 12: quadrants 1 and 3" and, on "right", "k = −12: quadrants 2 and 4", hand tags "k > 0: quadrants 1 and 3" and "k < 0: 2 and 4". On "branch" the third-quadrant and k < 0 curves fade and the first-quadrant branch of 12/x stays, with the house badge, hand tag "first quadrant for real things".

### 6. graphing it, by hand and in an app
> To graph y equals thirty over x by hand, make a table, avoiding zero. For x equals one, two, three, five, six, ten, fifteen and thirty, y is thirty, fifteen, ten, six, five, three, two and **one**. Plot them, draw a smooth curve, and dash the axes as asymptotes. To find x when y is six, read across from six to the curve, then down, to x equals **five**. Check it. Five times six is thirty. In a graphing app, type y equals k over x, and slide k. A bigger k pushes the curve further out. A negative k swaps the **quadrants**. Zoom out, and the curve keeps creeping towards the axes. It doesn't stop at the edge of the **screen**.

Visual: clear change to the g01 board. Task strip (44 px): "For y = 30/x: complete the table, sketch the graph, and find x when y = 6." (site `we-2`). The table (44 px) fills: "x: 1, 2, 3, 5, 6, 10, 15, 30" and, on "one", "y: 30, 15, 10, 6, 5, 3, 2, 1". A plot at the right (800 × 640 px, x 0 to 32, y 0 to 32) gains the points and a smooth curve, the axes dashed. A teal dashed line runs across from y = 6 to the curve and a blue dashed line down to x = 5, hand tag "across, then down"; on "five" row "x = 5" and "check: 5 × 6 = 30" (amber), framed answer (green): "x = 5 when y = 6". On "graphing app" the board slides left and the app screen (`ScreenApp`, 1,100 × 700 px, x −10 to 10) opens with the input "y = k/x" and a k slider (simulation 3): k = 12, then 30 (the branches move out), then 3 (in); a grey flash "k = 0: not inverse variation" as the slider skips 0; on "quadrants" k = −12, readout "quadrants 2 and 4". On "screen" the app zooms out to ±40: the branches keep closing in on the axes, hand tag "keeps going".

### 7. memory aid
> Here's the summary. In inverse variation, x times y always makes the same number, k. Multiply, don't divide, to test it. The graph is a hyperbola that hugs both axes, but never **touches** them.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the amber rectangle on the first-quadrant branch, readout "x × y = 12". Main line, hand font 60 px: "Inverse: x × y = k, always." On "touches" the key line, 40 px: "Multiply to test. The hyperbola hugs both axes, but never touches." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. The table shows x equals two, three, four, six and eight, with y equals twenty-four, sixteen, twelve, eight and six. Show that y varies inversely with x. Write the equation, and find y when x is sixteen. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "The table shows values of x and y. (a) Show that y varies inversely with x. (b) Write the equation. (c) Find y when x = 16." with the table "x: 2, 3, 4, 6, 8" and "y: 24, 16, 12, 8, 6" (44 px). No product column. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> Multiply each pair. Two times twenty-four, three times sixteen, four times twelve, six times eight, and eight times six. Every product is **forty-eight**. So y equals forty-eight over x, and when x is sixteen, y is forty-eight over sixteen, which is **three**. Dividing y by x, and writing y equals twelve x, is the slip. Inverse means multiply.

Visual: the card shrinks to the top (30 px). A product column writes beside the table, each "48" in amber; on "forty-eight" the column glows. Rows (44 px): "x × y = 48, so y = 48/x"; on "three" "x = 16: y = 48 ÷ 16 = 3"; framed answer (green): "y = 48/x; y = 3 when x = 16". On "the slip" a red slip "y ÷ x = 12, so y = 12x" writes and is crossed, caption "inverse: multiply". Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. Complete a table of values for y equals six over x, for x equals minus six, minus three, minus two, minus one, one, two, three and six. Sketch the graph, and write down the equations of the asymptotes, and the quadrants it lies in. Pause here to answer.

Visual: `QuestionCard`, 40 px: "Complete a table of values for y = 6/x for x = −6, −3, −2, −1, 1, 2, 3, 6. Sketch the graph. Write down the equations of the asymptotes and the quadrants the graph lies in." Picture slot: the empty table "x: −6, −3, −2, −1, 1, 2, 3, 6" with a blank y row, and empty axes x −7 to 7, y −7 to 7. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> The y values are minus one, minus two, minus three, minus six, then six, three, two and **one**. It's a hyperbola with two separate branches. The asymptotes are x equals zero and y equals **zero**, and since k is positive, it lies in the first and third **quadrants**. Joining the branches through the origin is the slip. The graph never reaches x equals zero.

Visual: the card shrinks to the top. On "one" the y row fills "−1, −2, −3, −6, 6, 3, 2, 1" and the points plot. Both branches draw. On "zero" the axes turn dashed grey, row (44 px) "asymptotes: x = 0 and y = 0". On "quadrants" row "k = 6 > 0: quadrants 1 and 3"; framed answer (green). On "the slip" a red slip, the branches joined through (0, 0), writes and is crossed, caption "never join them". Hold about 1 s.

### 12. handoff
> So inverse variation means a fixed product, and its graph is a hyperbola. Next, we build these models from real facts, and use them. Here's a car on a country road, making the same trip every time. At forty kilometres an hour, the trip takes three hours. How long does it take at a hundred kilometres an **hour**?

Visual: the memory line shows small at the top (30 px), then fades on "Next". Board clear. On "a car on a country road" the country road strip `maths/ma12-country-road-v1.png` (1,700 px) across the top half with the red hatchback `maths/ma12-used-hatchback-v1.png` (320 px) on it and a coded board "same trip every time". On "forty kilometres an hour" a small table (44 px): "40 km/h: 3 h". On "hour" chips "100 km/h: how long?", "Next: building reciprocal models" and "?". Hold about 2 s. This is a13's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Inverse variation: x × y = k, the constant of variation.
- y = k/x. Test a table by multiplying each pair.
- The graph is a hyperbola: two branches that never touch the axes.
- Asymptotes x = 0 and y = 0. Never substitute x = 0.
- k > 0: quadrants 1 and 3. k < 0: quadrants 2 and 4.

Memory aid (framed card, right side, as in scene 7): *Inverse: x × y = k, always.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and a13's opening frame.

## Teaching checks

- **Does it explain causes?** Why the product is fixed: the whole bill does not change (1, 2). Why y = k/x: x × y = k rearranged (2). Why falling is not enough: the products change (3). Why the curve approaches the axes without touching: a fixed area cannot have a zero side (4). Why no x = 0: nothing times zero makes 12 (4). Why the third quadrant: negative x gives negative y when k > 0 (5). Why k < 0 swaps quadrants: every sign flips (5).
- **Misconceptions addressed:** any falling pattern called inverse (3 crossed); ratios as the test (3 card, A1 crossed); joined branches (5 crossed, A2 crossed); touching an axis or x = 0 (4); the curve stopping at the screen edge (6).
- **Visual standard, item by item:** 1 the holiday house from the first frame (a11b's), as a badge in 4 and 5; 2 a new stage every 35 to 60 s; 3 the constant-product rectangle, the table lights, the app's k slider; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 boards in 2, 3 and 6 with framed answers and crossed slips; 8 framed card and five bullets; 9 the area readout never leaving 12 while the corner draws the curve.
- **One idea at a time:** the product (2), the test (3), the shape (4), branches and k (5), graphing (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 26 s and 27 s (speech plus hold).
- **Avoided double teaching:** Year 11's direct variation and a05's asymptote are recalled in grey chips.
- **Syllabus coverage:** `cia6ad469c` (1 to 3, A1; key notes 1, 2); `cib706ce50` (4, 5, A2; key notes 3 to 5); `ci8731b977` (5, 6, A2; key note 4).
- **Out of scope by design:** building models from facts, solving in context, rounding and limitations (a13).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original, HSC style, 3 marks suggested, not an official marking scheme).** "The table shows values of x and y. x: 2, 3, 4, 6, 8; y: 24, 16, 12, 8, 6. (a) Show that y varies inversely with x. (b) Write the equation. (c) Find y when x = 16."
Model answer: (a) 2 × 24 = 3 × 16 = 4 × 12 = 6 × 8 = 8 × 6 = 48: the product is constant. (b) y = 48/x. (c) y = 48 ÷ 16 = 3. Classic mistake (crossed): "y/x = 12, so y = 12x".

**Attempt 2 (scene 10; pack question 2, original, HSC style, 3 marks suggested).** "Complete a table of values for y = 6/x for x = −6, −3, −2, −1, 1, 2, 3, 6. Sketch the graph. Write down the equations of the asymptotes and the quadrants the graph lies in."
Model answer: y = −1, −2, −3, −6, 6, 3, 2, 1. A hyperbola with two branches; asymptotes x = 0 and y = 0; quadrants 1 and 3 (k = 6 > 0). Classic mistake (crossed): the branches joined through the origin.

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| House | $1,200; 1, 2, 3, 4, 6, 12 friends: $1,200, $600, $400, $300, $200, $100; in hundreds 12, 6, 4, 3, 2, 1; products 12 | 1, 2, 4, 7 |
| Falling table | x 1, 2, 3; y 12, 10, 8; products 12, 20, 24 | 3 |
| Rectangle | corners (3, 4), (6, 2), (12, 1), (2, 6), (1, 12), (0.5, 24); area 12 | 4 |
| Negative branch | x −1, −2, −3, −4, −6, −12: y −12, −6, −4, −3, −2, −1; y = −12/x | 5 |
| Site `we-2` | y = 30/x: 30, 15, 10, 6, 5, 3, 2, 1; x = 5 at y = 6; 5 × 6 = 30 | 6 |
| A1 | products 48; y = 48/x; y = 3 at x = 16 | 8, 9 |
| A2 | y = 6/x: −1, −2, −3, −6, 6, 3, 2, 1; quadrants 1 and 3 | 10, 11 |
| Handoff | 40 km/h: 3 h | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (18 Nov 2026, scratchpad `s12/verify.py`, run with `python -I`); Codex to re-check.

- 1,200 ÷ n for n = 1, 2, 3, 4, 6, 12: 1,200, 600, 400, 300, 200, 100. 12/x at those x: 12, 6, 4, 3, 2, 1.
- Falling table: products 12, 20, 24 for (1, 12), (2, 10), (3, 8).
- 12/x at x = −1, −2, −3, −4, −6, −12: −12, −6, −4, −3, −2, −1. 12/0.5 = 24.
- 30/x at 1, 2, 3, 5, 6, 10, 15, 30: 30, 15, 10, 6, 5, 3, 2, 1; 30 ÷ 6 = 5.
- 2 × 24, 3 × 16, 4 × 12, 6 × 8, 8 × 6 all 48; 48 ÷ 16 = 3.
- 6/x at −6, −3, −2, −1, 1, 2, 3, 6: −1, −2, −3, −6, 6, 3, 2, 1.

## Memory aid check

- **"Inverse: x × y = k, always."** with the key line "Multiply to test. The hyperbola hugs both axes, but never touches." Original. Meaning, as said in scene 7: in an inverse variation every pair of values multiplies to the same constant k, so a table is tested by multiplying, and the graph y = k/x approaches the x- and y-axes (its asymptotes) without meeting them. Assumptions checked: k ≠ 0 (scene 6's slider skips 0); x ≠ 0; "both axes" are the asymptotes only for y = k/x as taught here (no shifted hyperbolas in Standard 2). It helps a new case: x = 5, 10, 20 with y = 8, 4, 2 gives 40 each, so y = 40/x. Introduced after scenes 2 to 6.
- **Considered, not used:** "Direct divides, inverse multiplies" (true for the tests, but it sounds as if the equations divide and multiply the other way round).

## Narration length estimate

Counted by script (narration blockquotes, bold markers removed; scratchpad `s12/count.py`): 5,519 characters. At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 24 s of settling (the table lights, the rectangle's slide, the branches, the app slider and zoom) and the 45 s notes scene: about 504 s. Characters per scene (1 to 13): 540, 743, 521, 746, 597, 614, 190, 236, 337, 263, 348, 309, 75. Speech before the notes is about 409 s, under the 570 s cap. Feedback speech plus hold: about 26 s and 27 s.

Reserve trims if the voiced take runs long: scene 3's last sentence (keep the two-row card); scene 6's last two sentences (keep the zoom).

## Scene list and build ids

Lesson key `m-s12a12` (route math-s12-a12). Explainer folder `src/explainer/lessons/math-s12-a12`; build inputs in `docs/production/claude-pm/lessons/math-s12-a12/` (at voicing).

In order (13 scene headings): hook-holiday-house, constant-product, falling-not-enough, fixed-area-rectangle, branches-and-k, graphing-hand-app, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 40 s | 1 | a11b's frame; the share board |
| 40 to 100 s | 2 | g01 board: the table, arrows and products |
| 100 to 135 s | 3 | The falling-line check |
| 135 to 195 s | 4 | Constant-product rectangle tracing the branch |
| 195 to 240 s | 5 | Both branches; the sign of k |
| 240 to 295 s | 6 | Site `we-2` by hand; the app's k slider |
| 295 to 310 s | 7 | Framed memory card |
| 310 to 405 s | 8 to 11 | Question cards and countdowns, then feedback |
| 405 to 425 s | 12 | The road-trip frame for a13 |
| 425 to 470 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: a11b's last frame continues into 1; 1 to 2 clear change to the board; 2 to 3 clear change within the board; 3 to 4 stage change; 4 to 5 clear change; 5 to 6 clear change to the board, then the app; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-a12-learning-review.md`, `science_check` = `checks/m-s12-a12-maths-check.md`.

## Assets

Inspected before choosing (18 Nov 2026, `public/assets/maths`, read only, viewed on the paper background): `ma12-country-road-v1.png` (two-lane road with gum trees; final frame); `ma12-used-hatchback-v1.png` (small red hatchback; final frame); `ma12-travel-suitcase-v1.png` (a teal suitcase with a sun hat and a tag; not used, the house carries the trip). From a11b's brief: `ms12-holiday-house-v1.png` (must exist before the a11b build). No new plate.

Coded: the share board and tallies, every table and product column, the rectangle and readouts, all graphs, the app screen and slider, the distance board, the question cards, the countdown, the key notes.

### Studio kit use and additions

Uses: `StudioPlot`, `FunctionSimulator`, `FunctionRider`, `ParameterSlider` with `clampAwayFrom` (readouts.tsx), `ProductRectangle` (strand-parts.tsx), `ScreenApp`, `LiveReadoutBoard`, `PlateImg`, `HandTag`, the g01 `WorkingBoard` parts, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row a12):
1. **`ConstantProductRectangle`** (new; reused by a13): a rectangle from the origin to a point on y = k/x, its corner riding the curve, readouts for width, height and the fixed area k, and an optional trail that draws the branch. Check: the area readout reads exactly 12 at every frame (computed from the corner's coordinates, not assumed), and the trail matches 12/x within 2 px.
2. **Quadrant numbers** (small `StudioPlot` option): grey "1" to "4" placed anticlockwise from the top right.

## Codex asset brief

No new plate. The holiday house is painted under a11b's brief (`math-s12-a11b.md`); the country road and hatchback are reused.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the three syllabus quotes match the route-inputs JSON exactly.
3. Confirm site card 05 and `we-2` keep their numbers, and that no Boyle's Law, density or other science example appears.
4. Confirm the graph never touches an axis, the branches are never joined, and x = 0 is never substituted.
5. Confirm the quadrant numbering (anticlockwise from the top right) and the k < 0 case.
6. Confirm both attempts carry every demand and neither card nor picture shows a product column, a y-value or a curve.
7. Confirm scene 1 opens on a11b's final frame and scene 12 matches a13's opening frame.
8. Confirm no em dash (U+2014), Australian spelling, the narration count, and every bold cue quoted in its scene's Visual in spoken order.

## YouTube metadata (draft)

Title: Inverse Variation and the Hyperbola: y = k/x | Year 12 Maths Standard 2

(Title length: 71 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/algebraic-relationships/lesson06.sa.html

A $1,200 holiday house split between friends: double the friends and each share halves. That's inverse variation. See why the product of the two quantities always stays the same (the constant of variation, k), how to test a table by multiplying, and why the graph of y = k/x is a hyperbola that gets closer and closer to both axes without touching them. Then graph y = k/x by hand and in a graphing app, and see how the sign of k decides the quadrants. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Algebraic relationships. Standard 2.
Syllabus content (NSW Mathematics Standard 11-12, 2024):
Standard 2 (cia6ad469c): "Recognise that inverse variation is represented by a reciprocal relationship of the form y = k/x, where k is the constant of variation"
Standard 2 (cib706ce50): "Identify the hyperbolic shape of a reciprocal graph"
Standard 2 (ci8731b977): "Graph a reciprocal relationship of the form y = k/x, with and without using graphing applications"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faf5e47f4a

Builds on: Direct variation (Year 11). Next: Building and using reciprocal models.

#Year12Maths #MathsStandard #InverseVariation #HSCScience

## Open decisions

- **1. Both branches (root).** The pack notes root may prefer the first-quadrant branch only. This design shows both briefly (scene 5 and attempt 2) because `cib706ce50` asks for "the hyperbolic shape" and the site shows both and the sign of k, then keeps every practical example in the first quadrant. To go first-quadrant only, scene 5 shortens to its last sentence and attempt 2 changes to positive x.
- **2. Shares in hundreds of dollars (learning review).** y is in hundreds so the table matches the site's k = 12; every spoken amount stays in dollars. Check that the switch in scene 2 is followable.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from Year 11 direct variation and a05; check that "double and half" leads to "multiply to test" before the formula, that the rectangle makes "never touches" caused, that the quadrant words are explained before they are used, and that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
