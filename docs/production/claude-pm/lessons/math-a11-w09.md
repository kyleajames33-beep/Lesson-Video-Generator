# Maths A11 W09: Which inputs can a function accept, and which outputs can it give? Domain and range from formulas and graphs, in interval notation, as inequalities and in words (design)

Status: Revision 2 (16 Nov 2026): independent learning review resolved (see "Revision 2" below); not voiced. Revision 1 (16 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`, the d01 Revision 6 pattern and the f01 and s01 models). Not voiced (no `math-a11-w09/` folder, no audio). Needs the Codex learning review and maths check before voicing. Nothing recorded; human listening pending.

Narration 5,705 characters, 14 scene headings, about 515 s with holds (the key-notes scene fixed at 45 s), counted by script with the build parser rules (see "Narration length estimate").

## Revision 2 (16 Nov): learning review resolved

Review: `../checks/m-a11-w09-learning-review.md` (summary `../checks/m-a11-w01-w31-learning-review-summary.md`), with root's rulings of 16 Nov. Findings by the review's numbers:

1. Optional, scene 2 (range never stated in full): **accepted**: "So the range is every real number except zero as well." with a teal range chip.

Narration now 5,705 characters by script, about 515 s with holds (see "Narration length estimate"). Stage-plan times below are Revision 1 approximations; frames come from the recording's word timings. Every changed value was rechecked with SymPy (scratchpad `rev2_verify.py`); Codex's maths check remains the authority.

Scope: ninth video of the Year 11 Mathematics Advanced course (outline playlist order 9), after w08 (function notation and substitution) and before w10 (equations of straight lines). Pre-design pack: `../pre-design/maths-a11/math-a11-w09.md` (brief 243). Site lesson (read through the pack's quotations, read only): `working-with-functions/lesson03.sa.html` (Domain & Range, SHA256 `9367d5636a0259dcd79a77cc5688d658f87267b1744bc93ce61f9fa4552974e2`, worked examples `we-l03-1`, `we-l03-2`, `we-l03-3`). Every number recalculated with SymPy (see "Numbers to verify"). Route entry: `math-a11-w09` in `../../programme/maths-a11-route-inputs-1.json`.

Owner rules applied: 2024 syllabus only, content points cited by codename and exact wording, no site "Module" label; painted plates for real objects (a pizza on a board), coded graphs, number lines, interval pictures and algebra; no people, hands or faces; one main learner question; one reasoning stage at a time; worked examples in the g01 layout with a framed answer and a crossed slip; "Pause here to answer." then a 10 s countdown with the full worded question and a picture on screen; brief feedback with one crossed mistake; original HSC-style questions; key notes as five short bullets with a framed memory card; everyday anchor (food, not science); Australian spelling; no em dashes; conversational narration that explains the cause before the rule.

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Working with functions; NESA content-system codenames, official `code` field empty), quoted from `../../programme/maths-a11-route-inputs-1.json`:

- `ci7b72a364` (Introduction to functions and relations): "Define the domain of a function f as the set of real numbers on which f is defined"
- `ci0d9e1578` (Introduction to functions and relations): "Define the range of a function f as the set of values of f(x) obtained as x varies over the domain of f"
- `ms_s6_y11_recognise_domains_and_ranges_of_function` (Properties of functions, relations and graphs): "Recognise domains and ranges of functions and relations given in interval notation, as inequalities and as worded descriptions"
- `ci0c0bc407` (Properties of functions, relations and graphs): "Determine and describe the domain and range of functions and relations, using interval notation, inequalities or worded descriptions"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

**Boundary:** starts from w08's final frame (the function machine refusing d = −5 for the taxi and n = 0 for a pizza's slice angle). Defines the domain as the inputs where the rule gives a value (`ci7b72a364`) and the range as the outputs obtained over that domain (`ci0d9e1578`) on the pizza rule 360 ÷ x; the three ways to write a set: inequality, words and interval notation, with square and round brackets, infinity and union (`ms_s6_...`, `ci0c0bc407`); the two natural restrictions (a denominator cannot be 0; under a square root cannot be negative) on the site's `we-l03-1` and `we-l03-2`; domain and range read from a graph as its shadows on the axes; the range of the site's quadratic `we-l03-3` by completing the square (w04). Stops at functions. Not taught: domain and range of relations such as circles (w24, per the route); log domains (e03); restrictions that come from a context (w12; scene 2 names them in one sentence only); the vertex formula x = −b/(2a) (w15).

## Decisions

- **Anchor: a pizza cut into equal slices (painted plate, live).** A pizza cut into n equal slices gives each slice an angle of 360 ÷ n degrees. It carries both halves of the question at once: the input 0 breaks the rule (360 ÷ 0 has no value), and however many slices are cut, a slice never reaches 0 degrees, so 0 is never an output. The pizza opens the video (w08's handoff asked "n = 0?"), returns for the range idea (2) and in the memory card (8). Food, everyday, not science; distinct from every Year 12 Maths anchor (grep: no pizza) and from the w01 to w07 packs' suggested anchors. The pack's own suggestions were weighed: a phone battery (phones used by d03, i03 and t04) and splitting a bill (close to w02's suggested group-booking split) were rejected; a youth ticket's age band carries the domain but no range. See `../checks/root-decisions-maths-a11-w08-w14.md`.
- **Idealising assumptions (author notes, not learner copy).** (i) f(x) = 360/x is studied as a function of a real x; its natural domain is x ≠ 0 and its range is y ≠ 0 (negative x gives negative outputs). The narration says only "0 is not in the range", which is true. (ii) A real pizza needs n to be a positive whole number; scene 2 names this as "an extra limit from the situation" and leaves contexts to w12.
- **Simulations (standard item 3).**
  1. **The pizza cutter** (scenes 1, 2): a slider n steps 1, 2, 3, 4, 6, 8, 12 (then a fast run to 36); coded cut lines redraw over the painted pizza as equal sectors, one sector tinted; a `LiveReadoutBoard` shows "slices n" (blue) and "slice angle" (teal, 52 px); beside it a small plot of the points (n, 360/n) builds dot by dot and hugs the n axis without touching it. On n = 0 the slider's 0 notch flashes red and the readout shows "360 ÷ 0: no value".
  2. **The shadows** (scene 6; new `AxisShadow`): a lamp icon above the plot casts the graph of y = √(2x + 6) straight down: a blue shadow bar grows on the x axis from a closed dot at −3 to the right edge with an arrow; then the lamp swings to the right side and a teal shadow bar grows up the y axis from a closed dot at 0. In scene 7 the same lamp casts x² − 4x + 5: blue shadow across the whole x axis (arrows both ways), teal shadow from a closed dot at 1 upward.
  3. **The interval builder** (scenes 3, 4, 5; `IntervalPicture` extended with rays, per the kit row for w06): the number line draws the set, then the bracket symbols drop onto its ends (square on a closed dot, round on an open dot or an arrow), then the inequality and the words write beside it, all three linked by colour.
- **Colour roles (fixed for the whole video; inputs blue and outputs teal, as in w07 and w08).** Domain, inputs and x-values **blue** (`MATH_BLUE`); range, outputs and y-values **teal** (`MATH_TEAL`); excluded values and open dots **grey ink** (`MATH_EXCLUDED`, full ink, never faint); the restriction being tested (the denominator, the expression under the root) **violet** (`MATH_GRADIENT` role, labelled "restriction"); answer **green**; mistake **red**, crossed slips only. Closed dots are filled in the set's colour.
- **Large type (standard item 5).** Current working line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; interval symbols on the number line 52 px; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; all text above y = 950.
- **Handwritten voice (standard item 6).** `HandTag`: "can't divide by 0", "never 0°", "included", "not included", "∞ is never reached", "or", "≥ 0 under the root", "√0 = 0 is fine", "shadow down: domain", "shadow across: range", "a square is never negative", "flip!", "+ 2 lifts it", circles, arrows and crossings. At most two live at once.
- **Stage changes (standard item 2), about every 30 to 60 s.** w08's frame to the pizza cutter (1); the cutter with the dot plot (2); the interval builder (3); g01 board with the denominator (4); g01 board with the root (5); the shadows (6); g01 board, the quadratic with its shadow (7); framed memory card (8); question cards with pictures (9 to 12); the ramp handoff (13); key notes (14).
- **Worked examples (g01 layout, standard item 7).** Scene 4 (`we-l03-1`): domain of 5/(x − 3) is (−∞, 3) ∪ (3, ∞); crossed slip "(−∞, 3] ∪ [3, ∞)" captioned "3 is not allowed". Scene 5 (`we-l03-2`): domain of √(2x + 6) is [−3, ∞), range [0, ∞); crossed slip "(−3, ∞)" captioned "√0 = 0 is allowed". Scene 7 (`we-l03-3`): domain of x² − 4x + 5 is all real numbers, range [1, ∞) by completing the square (w04), not by the vertex formula (w15); crossed slip "range [5, ∞)" captioned "5 is f(0), not the lowest value". Feedback scenes carry a `GivensStrip`, rows at 52 px, a green framed answer and one red crossed slip.
- **Memory aid (standard item 8).** Framed `MemoryAidCard`: "No zero underneath. No negative under the root." with the key line "[ ] includes, ( ) excludes, and ∞ always gets ( )". Key notes are five short bullets beside the card; 45 s.
- **Visual surprise (standard item 9).** The pizza's slices thin out to slivers while the slice-angle dots slide down towards the n axis and never touch it (scene 2): 0 is seen to be an output the rule can never give, before the word "range" is defined. Second: the graph's shadow on the y axis for x² − 4x + 5 stops dead at 1 (scene 7).
- **Site numbers unchanged.** `we-l03-1`: x ≠ 3, (−∞, 3) ∪ (3, ∞). `we-l03-2`: x ≥ −3, [−3, ∞) (the range [0, ∞) is added). `we-l03-3`: domain all reals, range [1, ∞), lowest point (2, 1); the site's x = −b/(2a) step is replaced by completing the square, which this route teaches in w04 (the vertex formula comes in w15).
- **Attempts (pack questions, original).** A1: "Find the domain of f(x) = √(6 − 2x) in interval notation, and state its range." Answer (−∞, 3], range [0, ∞). Crossed: "[3, ∞)" (no flip when dividing by −2; w06). A2: "State the domain and range of h(x) = √(x − 1) + 2." Answer domain [1, ∞), range [2, ∞). Crossed: "range [0, ∞)".
- **Mistake scene:** none separate. "Domain and range are the same kind of thing" (2, colours); "a square bracket at infinity" (3, tag); "include the value that makes the bottom 0" (4, crossed); "exclude where the root is 0" (5, crossed); "range from f(0)" (7, crossed); "forget the flip" (A1 crossed); "forget the + 2" (A2 crossed).
- **Cause chain taught, in order:** (1) some inputs make a rule give no value, so a function has a set of allowed inputs (1, 2); (2) the outputs over that set form the range, and some values are never reached (2); (3) a set of numbers is written three ways, and the brackets record whether an end is included (3); (4) division by 0 has no value, so a denominator's zero is excluded (4); (5) a negative number has no real square root, so the expression under the root must be at least 0, and 0 itself is fine (5); (6) a graph's shadows show the domain and range at once (6); (7) a square is never negative, so (x − 2)² + 1 is never below 1 (7).
- **Entry knowledge (route):** w08 (f(x) notation and substitution); w06 (solving linear inequalities, including the flip); w04 (completing the square). Stage 5: square roots, the number line.
- **Learner-visible vocabulary (plain meaning at first use):** domain (the set of inputs where the rule gives a value, 2); range (the set of outputs you get as x runs through the domain, 2); interval notation (brackets around the ends of a stretch of numbers, 3); infinity ∞ (the numbers keep going, with no end, 3); union ∪ (joins two sets; read "or", 4); natural domain is not used as a term (the narration says "the inputs where the rule works").
- **Handoff (to w10, "How do two points, or a point and a gradient, fix a straight line?").** Scene 13: the painted entrance ramp (`ma11-entrance-ramp-v1.png`, w10's anchor) on a coded footpath axis with two coded points at its foot (2, 0) and its doorway (9, 0.5), chip "Next: two points fix a line" and "?". This is w10's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) 360/n for n = 1, 2, 3, 4, 5, 6, 8, 9, 10, 12: 360, 180, 120, 90, 72, 60, 45, 40, 36, 30; n = 36 gives 10; n = 7 gives 51.43 (not shown).
  (b) √(2x + 6): 2x + 6 ≥ 0 gives x ≥ −3; range [0, ∞).
  (c) x² − 4x + 5 = (x − 2)² + 1; minimum 1 at x = 2; f(0) = 5.
  (d) √(6 − 2x): −2x ≥ −6 gives x ≤ 3 (flip); range [0, ∞). √(x − 1) + 2: domain [1, ∞), range [2, ∞).
  (e) Pronunciations: "minus infinity to three, joined to three to infinity" (said as "minus infinity to three, union, three to infinity" after "union" is introduced), "square bracket minus three, to infinity", "the square root of two x plus six", "x minus two, all squared, plus one". Voice-pilot items: "union", "infinity".
  (f) Windows: pizza dot plot n 0 to 13, angle 0 to 400; root plot x −4 to 8, y −1 to 5; quadratic plot x −1 to 5, y −1 to 7; number lines −6 to 8 with integer ticks.

Main question: *A pizza can be cut into 1, 2, 3 or more equal slices, but not 0, and no slice is ever 0 degrees. Which inputs can a function accept, which outputs can it give, and how do we write those sets?*
Entry knowledge (w08; w06; w04): substitution, solving linear inequalities with the flip, completing the square.
Stops after: domain and range of functions from formulas and graphs, in interval notation, inequalities and words; denominators and square roots. No relations, logs, contexts or vertex formula.
Handoff: math-a11-w10: an entrance ramp with two marked points (a question only).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed; see Decisions): domain and inputs blue; range and outputs teal; excluded values grey ink; the restriction being tested violet; answer green; mistake red, crossed slips only. Type: current line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; interval symbols 52 px; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; all text above y = 950. Every stage's main visual is solid from the stage's first frame. Header strip "MATHEMATICS ADVANCED · WORKING WITH FUNCTIONS"; scene headings in the hand font, 44 px.

### 1. hook: zero slices?
> A function takes an input and gives exactly one output. But not every input works. A taxi can't travel minus five kilometres. And here's that pizza, cut into n equal slices, where each slice's angle is three hundred and sixty divided by n degrees. Cut it into **four**, and each slice is ninety degrees. Keep cutting, and the slices get thinner, but they never reach zero **degrees**. And zero slices? Three hundred and sixty divided by zero has no value at **all**. So which inputs can a function accept, and which outputs can it give?

Visual: opens on w08's final frame exactly (the machine at the centre, the taxi meter at the left reading "−$4.00?", the pizza at the right with four cut lines and "slice angle = 360 ÷ n", the card "n = 0" by the red slot, chips "Next: which inputs can a function take?" and "?"). On the first sentence the "Next" chip fades and the heading writes on: "Which inputs can a function accept, and which outputs can it give?". On "taxi" the meter's "−$4.00?" is ringed red, then the meter and the machine slide off left. Camera continue onto the pizza: the painted pizza `ma11-pizza-top-v1.png` grows to about 620 px at the left (solid), the slider n (blue, 44 px labels) appears under it and the `LiveReadoutBoard` at the right: "slices n" and "slice angle". On "four" the slider sits at 4, four coded cut lines, one sector tinted teal, readout "360 ÷ 4 = 90°". On "Keep cutting" the cutter runs (simulation 1): n = 6, 8, 12 (readouts 60°, 45°, 30°), then a fast run to 36 (10°); on "degrees" the tinted slice is a sliver and a hand tag "never 0°". On "zero slices" the slider snaps back to its 0 notch, the cut lines vanish, and on "all" the notch flashes red, readout "360 ÷ 0: no value", hand tag "can't divide by 0". On the last sentence the chip "Which inputs? Which outputs?" moves to the top right as the scene question.

### 2. domain and range
> The set of inputs a function can accept is called its domain. The domain of f is every real number at which f is defined, which means the rule gives a value. The set of outputs is the range: all the values of f of x you get, as x runs through the **domain**. As a function, the pizza rule is f of x equals three hundred and sixty over x. The only number that breaks it is zero, because you can't divide by zero. So the domain is every real number except **zero**. And the outputs? Three hundred and sixty divided by any number is never zero, so zero is not in the **range**. So the range is every real number except zero as well. Of course, a real pizza also needs a whole number of slices. That's an extra limit from the situation, and we'll handle those when we build models.

Visual: camera continue. The pizza (420 px) moves to the top left with the slider. Right two-thirds: two definition chips, 44 px: "domain: the inputs where f gives a value" (blue) and, on "domain", "range: the values of f(x) as x runs through the domain" (teal), each with a small arrow into or out of a mini machine icon. On "As a function" the rule "f(x) = 360/x" writes, 52 px, "x" blue, "f(x)" teal, the denominator "x" boxed in violet with a tag "restriction". Below, a number line −6 to 8 (blue). On "zero" (first bold) the whole line fills blue with an open grey dot at 0, hand tag "x ≠ 0". On "And the outputs" a small plot (600 × 360 px) at the lower right builds the dots (n, 360/n) for n = 1, 2, 3, 4, 6, 8, 12 in teal, the cutter replaying beside it in step; on "range" the dots slide towards the horizontal axis without touching it and the y-axis value 0 is ringed in grey with a hand tag "0 is never an output"; while the next sentence is spoken a teal chip "range: every real number except 0" writes under the domain chip. On the last two sentences a grey chip, 30 px: "real pizza: n = 1, 2, 3, … (a limit from the situation: later)".

### 3. three ways to write a set
> A domain or a range is a set of numbers, and there are three ways to write one. Take every number from minus two up to five, including minus two but not five. As an inequality, it's minus two is less than or equal to x, which is less than **five**. In interval notation, it's square bracket minus two, comma, five, round bracket. A square bracket means the end is included. A round bracket means it **isn't**. On the number line, that's a closed dot and an open **dot**. Now take every number greater than one. There's no right-hand end, so we write infinity, with a round bracket, because infinity isn't a number you can **reach**. In words, it's all real numbers greater than one.

Visual: clear change to the interval builder (simulation 3), full width. A number line −6 to 8 (ticks 28 px). The words "every number from −2 up to 5, including −2 but not 5" write at the top (44 px). The segment from −2 to 5 draws in blue with a closed dot at −2 and an open grey dot at 5. On "five" (first bold) the row "−2 ≤ x < 5" writes under the line, 52 px, with "≤" and "<" glowing at their ends. On "In interval notation" the symbols "[−2, 5)" drop onto the line, the "[" landing on the closed dot and the ")" on the open dot. On "isn't" two hand tags: "[ included" and ") not included". On "dot" both dots pulse. On "greater than one" a second line below: an open dot at 1 and a blue ray with an arrow to the right edge; "(1, ∞)" drops onto it. On "reach" the ")" next to ∞ is ringed, hand tag "∞ is never reached: always ( )". On the last sentence the words "all real numbers greater than 1" write beside "x > 1". A three-column chip row stays at the bottom: "inequality | interval | words".

### 4. worked example 1: a denominator
> Now the first restriction that comes from a formula. Find the domain of f of x equals five over x minus three. The bottom of a fraction can't be zero, so x minus three can't be zero, which means x can't be **three**. Every other real number works. On the number line, that's two rays, with an open dot at **three**. In interval notation, it's minus infinity to three, joined to three to infinity. This joining symbol, shaped like a cup, is called union, and it means **or**. So the domain is all real x except three. Using square brackets at three would let in the one value that **breaks** the rule.

Visual: clear change to the g01 board. Task strip, 44 px: "Find the domain of f(x) = 5/(x − 3). Write it in interval notation." (site `we-l03-1`). Givens card: "f(x) = 5/(x − 3)", with "x − 3" boxed violet, tag "bottom ≠ 0". Rows, 52 px: "x − 3 ≠ 0"; on "three" (first bold) "x ≠ 3" in blue. On "two rays" a number line under the rows: two blue rays with arrows outward and an open grey dot at 3 (on "three", second bold, the dot pulses). On "minus infinity to three" "(−∞, 3)" drops onto the left ray and "(3, ∞)" onto the right; on "or" the "∪" writes between them, hand tag "∪: or". The framed answer (green): "Domain: (−∞, 3) ∪ (3, ∞), all real x except 3". On "breaks" a red slip "(−∞, 3] ∪ [3, ∞)" writes and is crossed, caption "3 is not allowed".

### 5. worked example 2: a square root
> The second restriction comes from square roots. Find the domain of f of x equals the square root of two x plus six. A negative number has no real square root, so what's under the root must be zero or more. Two x plus six is greater than or equal to zero, so two x is at least minus six, and x is at least minus **three**. Minus three is allowed, because the square root of zero is zero. So the domain is square bracket minus three, to **infinity**. And the range? A square root is never negative, and as x grows, so does the root, without any limit. So the range is zero to infinity, with zero **included**.

Visual: clear change to the g01 board (new case). Task strip: "Find the domain of f(x) = √(2x + 6)." (site `we-l03-2`; the range part added). Givens card: "f(x) = √(2x + 6)", with "2x + 6" boxed violet, tag "≥ 0 under the root". Rows, 52 px, one at a time: "2x + 6 ≥ 0", then "2x ≥ −6", then on "three" "x ≥ −3" in blue (earlier rows dim to 32 px). On "Minus three is allowed" the side row "f(−3) = √0 = 0" in grey, hand tag "√0 = 0 is fine". On "infinity" a number line with a closed blue dot at −3 and a ray to the right; "[−3, ∞)" drops on; the framed answer (green): "Domain: [−3, ∞)". A red slip "(−3, ∞)" writes small at the right and is crossed (caption "√0 = 0 is allowed"). On "And the range" a second line in teal: closed dot at 0 and a ray upward (drawn vertical, beside the board); on "included" the framed answer "Range: [0, ∞)".

### 6. reading both from a graph
> A graph shows both sets at once. Shine a light straight down onto the graph, and its shadow on the x axis is the **domain**. Shine it from the side, and the shadow on the y axis is the **range**. For the root graph, the shadow below starts at minus three, with a closed dot, and runs to the right forever. The shadow at the side starts at zero, and runs **upwards**. Same answers as the algebra, read straight off the picture.

Visual: clear change to the shadows (simulation 2). A `StudioPlot` (1,200 × 680 px, x −4 to 8, y −1 to 5, solid axes) with y = √(2x + 6) drawn in ink, starting at (−3, 0) with a closed dot. A coded lamp icon above the plot. On "domain" the lamp shines down (a pale beam), and a blue shadow bar grows along the x axis from a closed dot at −3 to the right edge with an arrow; hand tag "shadow down: domain". On "range" the lamp swings to the right side, and a teal shadow bar grows up the y axis from a closed dot at 0 to the top with an arrow; hand tag "shadow across: range". On "upwards" both bars carry their labels, 44 px: "[−3, ∞)" (blue) and "[0, ∞)" (teal), with green ticks linking them to the scene 5 answers (shown small at the right).

### 7. worked example 3: the range of a quadratic
> Here's one where the range needs thought. Find the domain and range of f of x equals x squared minus four x plus five. Any real number can be squared, so the domain is all real **numbers**. For the range, complete the square, as you did when solving quadratics. It's x minus two, all squared, plus **one**. A square is never negative, so the smallest it can be is zero, when x is two. So f of x is never less than one, and the range is square bracket one to **infinity**. The side shadow agrees: it stops at the lowest point, one. Five is wrong. That's f of zero, not the lowest **value**.

Visual: clear change to the g01 board with a plot at the right (720 × 600 px, x −1 to 5, y −1 to 7, the parabola in ink, lowest point (2, 1) marked). Task strip: "Find the domain and range of f(x) = x² − 4x + 5." (site `we-l03-3`). On "numbers" the blue shadow covers the whole x axis with arrows both ways; row "Domain: all real x, (−∞, ∞)". On "complete the square" the row "x² − 4x + 5 = (x − 2)² + 1" (52 px), "(x − 2)²" boxed, hand tag "a square is never negative". On "one" (first bold) the side row "(x − 2)² ≥ 0, so f(x) ≥ 1" and the point (2, 1) glows. On "infinity" the lamp swings to the side and the teal shadow on the y axis grows upward from a closed dot at 1; framed answer (green): "Range: [1, ∞)". On "stops" the shadow's lower end pulses. On "value" a red slip "Range: [5, ∞)" writes and is crossed, caption "5 is f(0), not the lowest value", with the point (0, 5) ringed grey on the curve.

### 8. memory aid
> Two checks find the domain of most formulas you'll meet. No zero underneath. No negative under the root. Then write the answer with the right brackets: square to include an end, round to leave it out, and round for **infinity**.

Visual: stage change to the framed `MemoryAidCard` (about 1,300 × 600 px, double ink frame, hand-font heading "Memory aid"). Left slot: the pizza (240 px) with "360 ÷ 0" crossed, and a small "√(−4)" crossed. Main line, hand font 60 px: "No zero underneath. No negative under the root." On "infinity" the key line, 40 px: "[ ] includes, ( ) excludes, and ∞ always gets ( )", with a small number line showing "[−3, ∞)". Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. Find the domain of f of x equals the square root of six minus two x, in interval notation, and state its range. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Find the domain of f(x) = √(6 − 2x) in interval notation, and state its range." The full question stays on screen. Picture slot: an empty number line −2 to 6 and an empty vertical y-axis line, with no dots or brackets. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> Six minus two x must be at least zero, so minus two x is at least minus six. Dividing by minus two flips the sign, so x is less than or equal to **three**. The domain is minus infinity to three, with a square bracket at three. The root is never negative, so the range is zero to infinity, with zero **included**. Three to infinity is wrong. That forgets the **flip**.

Visual: the card shrinks to the top (30 px). `GivensStrip`: "f(x) = √(6 − 2x)" ("6 − 2x" underlined in the card as used). Rows, 52 px: "6 − 2x ≥ 0", "−2x ≥ −6"; on "three" "x ≤ 3", the "≤" ringed with a hand tag "÷ (−2): flip!". Number line: closed dot at 3, blue ray to the left; framed answer (green): "Domain: (−∞, 3]". On "included" the framed answer "Range: [0, ∞)". On "flip" a red slip "[3, ∞)" writes and is crossed (hand caption "forgot the flip"). Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. State the domain and range of h of x equals the square root of x minus one, plus two. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "State the domain and range of h(x) = √(x − 1) + 2." The full question stays on screen. Picture slot: empty axes (x −1 to 8, y −1 to 6) with no curve and no shadows. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 12. feedback 2 (brief)
> Under the root, x minus one must be at least zero, so x is at least one, and the domain is square bracket one to **infinity**. The root is at least zero, and then we add two, so h of x is at least two. The range is square bracket two to **infinity**. Zero to infinity is wrong. The plus two lifts every output by **two**.

Visual: the card shrinks to the top. `GivensStrip`: "h(x) = √(x − 1) + 2" ("x − 1" and "+ 2" underlined in the card as used). On "infinity" (first bold) the curve draws on the picture's axes from a closed dot at (1, 2), the blue shadow grows on the x axis from 1; framed answer "Domain: [1, ∞)". On "infinity" (second bold) the teal shadow grows up the y axis from a closed dot at 2; framed answer "Range: [2, ∞)". On "two" (last bold) a red slip "Range: [0, ∞)" writes and is crossed, with a hand caption "+ 2 lifts it" and a short upward arrow from 0 to 2 on the y axis. Hold about 1 s.

### 13. handoff
> So the domain is what can go in, and the range is what can come out. Next come straight lines, the simplest functions of all. Most of them take every real input. Here's one you can walk on. An entrance ramp starts on the footpath, and rises half a metre to a doorway, seven metres **along**. Two points, the bottom and the top. Do they fix the ramp's line exactly?

Visual: the two ideas show as small chips at the top ("domain: in", "range: out", 34 px), then fade on "Next come". Board clears: the painted ramp `ma11-entrance-ramp-v1.png` (about 1,500 px wide, solid) across the lower half on a coded footpath line (the x axis, "metres from the fence post", 0 to 10); on "along" two coded points glow on the ramp: its foot "(2, 0)" and its top at the doorway "(9, 0.5)", with a dashed run bracket "7 m" and rise bracket "0.5 m". Chip "Next: two points fix a line" and a "?" chip. Hold about 2 s. This is w10's opening frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Domain: the x values where f is defined.
- Range: the values of f(x) over the domain.
- Bottom of a fraction ≠ 0. Under a root ≥ 0.
- [ ] includes, ( ) excludes, ∞ always ( ).
- Graph: shadow on the x axis = domain; on the y axis = range.

Memory aid (framed card, right side of the notes screen, as in scene 8): *No zero underneath. No negative under the root.* Key: *[ ] includes, ( ) excludes, and ∞ always gets ( ).* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades (1 s) back to scene 13's frame exactly (the ramp with its two points and brackets, "Next: two points fix a line" and "?"). This is the final frame and w10's opening frame.

## Teaching checks

- **Does it explain causes?** Why 0 is not in the pizza rule's domain: division by 0 has no value (1, 2). Why 0 is not in its range: 360 divided by any number is never 0 (2). Why square and round brackets: included or not (3). Why ∞ gets a round bracket: it is never reached (3). Why x ≠ 3: the bottom would be 0 (4). Why x ≥ −3 and not x > −3: √0 = 0 exists (5). Why the shadows work: each point's x lands on the x axis and its y on the y axis (6). Why the quadratic's range starts at 1: a square is never negative (7). Why the flip in A1: dividing by a negative (w06).
- **Misconceptions addressed:** square bracket at ∞ (3); including the excluded value (4 crossed); excluding the root's zero (5 crossed); range from f(0) (7 crossed); domain and range swapped (colours, shadows); forgotten flip (A1 crossed); forgotten shift (A2 crossed).
- **Visual standard (`../maths-visual-standard.md`), item by item:** 1 the painted pizza from the first seconds, returning in 2 and 8; 2 a new stage every 30 to 60 s; 3 the pizza cutter with live readouts and a growing dot plot, the shadows, the interval builder; 4 fixed colour roles; 5 large type; 6 hand tags; 7 g01 boards in 4, 5 and 7, framed answers and crossed slips; 8 framed memory card and five short bullets; 9 the slice-angle dots that never reach the axis, and the shadow that stops at 1.
- **One idea at a time:** definitions on one example (2), notation on its own example (3), then one restriction per worked example (4, 5), then graphs (6, 7).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible, each card with a picture; 10 s each with the invitation to pause; nothing answer-bearing. One crossed mistake each; feedback about 28 s and 24 s.
- **Avoided double teaching:** substitution (w08), the inequality flip (w06) and completing the square (w04) are used, not re-taught.
- **Syllabus coverage:** `ci7b72a364` (2, 4, 5; key note 1); `ci0d9e1578` (2, 5, 7; key note 2); `ms_s6_y11_recognise_domains_and_ranges_of_function` (3, 6; key note 4); `ci0c0bc407` (4, 5, 7; A1, A2; key notes 3, 4, 5). Relations are named in two of these points; the route assigns relations' domain and range to w24 (circles), so this video covers the functions part only.
- **Out of scope by design:** relations (w24); logs (e03); contexts (w12); the vertex formula (w15).

## Practice questions and model answers

**Attempt 1 (scene 9; original wording, HSC style, 2 marks suggested, not an official marking scheme).** "Find the domain of f(x) = √(6 − 2x) in interval notation, and state its range."
Model answer: 6 − 2x ≥ 0, so −2x ≥ −6, so x ≤ 3 (dividing by −2 reverses the inequality). Domain (−∞, 3]. The square root is never negative and takes every value from 0 upward, so the range is [0, ∞). Classic mistake (crossed): "[3, ∞)".

**Attempt 2 (scene 11; original wording, HSC style, 2 marks suggested).** "State the domain and range of h(x) = √(x − 1) + 2."
Model answer: x − 1 ≥ 0, so the domain is [1, ∞). √(x − 1) ≥ 0, so h(x) ≥ 2, and the range is [2, ∞). Classic mistake (crossed): "range [0, ∞)".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Pizza rule | slice angle 360/n: 360, 180, 120, 90, 60, 45, 30 (n = 1, 2, 3, 4, 6, 8, 12); 10 (n = 36) | 1, 2 |
| Interval examples | −2 ≤ x < 5 = [−2, 5); x > 1 = (1, ∞) | 3 |
| Site `we-l03-1` | 5/(x − 3): x ≠ 3; (−∞, 3) ∪ (3, ∞) | 4 |
| Site `we-l03-2` | √(2x + 6): x ≥ −3; [−3, ∞); range [0, ∞) | 5, 6 |
| Site `we-l03-3` | x² − 4x + 5 = (x − 2)² + 1; domain all reals; range [1, ∞); f(0) = 5 (crossed) | 7 |
| A1 | √(6 − 2x): (−∞, 3]; range [0, ∞); crossed [3, ∞) | 9, 10 |
| A2 | √(x − 1) + 2: [1, ∞); range [2, ∞); crossed [0, ∞) | 11, 12 |
| Handoff | ramp foot (2, 0), doorway (9, 0.5); run 7 m, rise 0.5 m | 13 |

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy 1.14 (16 Nov 2026, scratchpad `w08w14/verify.py`, `function_range` and `solve_univariate_inequality`); Codex to re-check.

- 360/n at n = 1, 2, 3, 4, 6, 8, 12, 36: 360, 180, 120, 90, 60, 45, 30, 10.
- 2x + 6 ≥ 0 ⇔ x ≥ −3; range of √(2x + 6) on [−3, ∞) is [0, ∞).
- (x − 2)² + 1 − (x² − 4x + 5) = 0; range of x² − 4x + 5 over the reals is [1, ∞); f(2) = 1; f(0) = 5.
- 6 − 2x ≥ 0 ⇔ x ≤ 3; range [0, ∞).
- Range of √(x − 1) + 2 on [1, ∞) is [2, ∞).

## Memory aid check

- **"No zero underneath. No negative under the root."** Original. Meaning, as said in scene 8: for formulas in this course, look for a denominator (it must not be 0) and a square root (what is under it must be at least 0). Assumptions checked: these are the only two natural restrictions until logarithms (e03), and the card says "most formulas you'll meet" in speech; even roots of higher order are not in the course. "No negative" correctly allows 0. It helps a new case: 1/√(x − 2) (both checks together give x > 2; not shown). Introduced after the causes in 4 and 5.
- **Considered, not used:** "Domain: x. Range: y." (true, but no reason; kept as the shadow tags).

## Narration length estimate

Recounted for Revision 2 (16 Nov 2026). Counted 16 Nov 2026 with the build parser rules (`### N.` headings; only lines starting "> " inside the scene, joined with a space, `**` removed; the total is the sum of the scene strings): **5,705 characters**, 14 scene headings. Characters per scene (1 to 14): 524, 765, 666, 584, 595, 414, 573, 224, 144, 355, 117, 309, 360, 75.

At 13.3 characters per second the speech is about 429 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, two feedbacks 1 s each, handoff 2 s) 6 s; settling for the pizza cutter (1, 2), the interval builder (3), the worked boards (4, 5, 7) and the shadows (6) about 21 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 515 s (8 min 35 s)**, inside the 5,500 to 6,800 character band and about 55 s under the 570 s cap. The length sits near the floor by choice: the lesson is one idea with two restrictions, and padding would only slow it.

Reserve trims, if the voiced takes run long, in this order: scene 2's "Of course, a real pizza also needs a whole number of slices. That's an extra limit from the situation, and we'll handle those when we build models." (keep the grey chip); scene 6's "Same answers as the algebra, read straight off the picture." (keep the ticks). Do not cut below 5,500 characters.

## Scene list and build ids

Lesson key `m-a11w09` (route math-a11-w09). Explainer folder `src/explainer/lessons/math-a11-w09`; build inputs in `docs/production/claude-pm/lessons/math-a11-w09/` (to be created at voicing).

In order (kebab-case; 14 scene headings, all `### N.`): hook-pizza, domain-and-range, three-ways-to-write, worked-denominator, worked-root, graph-shadows, worked-quadratic-range, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (seconds from the estimate):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 43 s | 1 | w08's frame, then the painted pizza and the cutter running to slivers |
| 43 to 100 s | 2 | Definitions, the rule 360/x, the dot plot that never reaches 0 |
| 100 to 153 s | 3 | The interval builder: [−2, 5) and (1, ∞) |
| 153 to 199 s | 4 | g01 board: the denominator, two rays and union |
| 199 to 246 s | 5 | g01 board: the root, domain and range |
| 246 to 281 s | 6 | The lamp and the two shadows |
| 281 to 327 s | 7 | g01 board and plot: the quadratic's range |
| 327 to 346 s | 8 | Framed memory card |
| 346 to 437 s | 9 to 12 | Question cards with pictures and countdowns, then feedback |
| 437 to 466 s | 13 | The painted ramp with two points |
| 466 to 511 s | 14 | Key notes with the framed card, then a silent return to scene 13's frame |

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): w08's last frame continues into scene 1 (camera continue onto the pizza); 1 to 2 camera continue; 2 to 3 clear change; 3 to 4, 4 to 5 clear change (new cases); 5 to 6 clear change (the graph); 6 to 7 clear change (new case); 7 to 8 camera pull back to the card; attempts and feedback: the card shrinks to the top; 12 to 13 board clear; 13 to 14 fade to the notes board, then a silent return to scene 13's frame.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, the ring shown full from "Pause here to answer."). key-notes is 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11w09-learning-review.md`, `science_check` = `checks/m-a11w09-maths-check.md`.

## Assets

Inspected before choosing (16 Nov 2026, `public/assets`, read only, by file name; house-style reference `maths/ma12-young-gum-tree-v1.png` viewed): no pizza, food board or ramp plate exists in any course.

Need (painted, new; see the Codex asset brief): `ma11-pizza-top-v1.png` (also w08's handoff), and `ma11-entrance-ramp-v1.png` (scene 13; w10's anchor, briefed in w10; it must be painted before this build).

Coded (studio kit): the cut lines and tinted sector on the pizza (from its sidecar centre and radius), the slider and readouts, the dot plot, number lines, interval symbols, the plots, lamp icon and shadows, working boards, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `MATH_ROLES` and `Role`, `HandTag`, `PlateImg`, `LiveReadoutBoard`, `ParameterSlider` (with its excluded mark, root decision 7), `StudioPlot`, `IntervalPicture`, `StudioDomainStrip`, `TaskStrip`, `GivensCard`, `WorkingRows`, `AnswerFrame`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard` with `GivensStrip`.

Additions (from `../checks/maths-a11-kit-needs.md`, rows w06 and w09):
1. **`AxisShadow`** (new; reused by w24 and g05): for a plotted function on a domain, a lamp icon and an animated shadow bar on the x axis (domain) and then the y axis (range), with closed or open end dots and arrows for unbounded ends. Props: `fn`, `domain` ({from, to, closedFrom, closedTo}), `rangeFrom` (computed by sampling and checked against an author value; throws on a mismatch beyond 1e-6), `castDownAt`, `castSideAt`, `labels`. Check: √(2x + 6) gives [−3, ∞) and [0, ∞); x² − 4x + 5 gives (−∞, ∞) and [1, ∞); √(x − 1) + 2 gives [1, ∞) and [2, ∞).
2. **`NumberLineRay`** (the w06 extension of `IntervalPicture`, if w06's build has not added it): rays to ±∞ with arrows, animated drawing, bracket symbols that drop onto ends, and a union of two pieces.
3. **Pizza cutter** (lesson folder): coded equal sectors over `ma11-pizza-top-v1` from its sidecar centre and radius, driven by a stepped slider, with one sector tinted and the readout 360/n computed from n.

## Codex asset brief (Maths A11 W09, a pizza; also w08's handoff)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-w09.md`. Paint after the learning review and maths check pass and root gives the go-ahead, and before the w08 build (w08's final frame uses it). Save to `public/assets/maths/`. Every plate: **transparent PNG with a true alpha channel**, clean edges with no fringe or halo (check on black and white); ink and watercolour in the house style, matched to `maths/ma12-cookie-v1.png` and `maths/ma12-cricket-ball-v1.png`; at least 8 per cent clear margin; no text, logos, brand names, people, hands, faces, cutlery held by anyone, glow or backdrop. Never stretch to fit; keep the native aspect ratio.

1. `ma11-pizza-top-v1.png` (1600 × 1600 px): one whole round pizza seen exactly from above, **uncut** (no slice lines), a plain cheese and tomato pizza with a few basil leaves spread evenly so that no topping suggests a slice line, on a round timber pizza board slightly larger than the pizza. The pizza's crust edge must be a true circle. Codex reports in a sidecar `ma11-pizza-top-v1.json` the pizza's centre and radius (to the inside of the crust) in file pixels, so that code can draw equal cut lines from the centre.

Report inspection on the paper background (`#f6f1e7`) at 240 px and 620 px, the alpha check, and a test overlay of 12 coded equal sectors registered on the centre and radius.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the four syllabus quotes match the route-inputs JSON exactly, and that no site module label appears.
3. Confirm the scope of every learner-visible general claim: "the domain of f is every real number at which f is defined" (2); "360 divided by any number is never zero" (2); "infinity always gets a round bracket" (3, 8); "a negative number has no real square root" (5); "a square is never negative" (7); "two checks find the domain of most formulas you'll meet" (8).
4. Confirm the site's three examples keep their answers, that the vertex formula is not used, and that completing the square is correct.
5. Confirm both attempt questions carry every demand, and that neither card or its picture shows a dot, bracket, curve or answer.
6. Confirm the opening matches w08's final frame and scene 13's frame is w10's opening frame (ramp points (2, 0) and (9, 0.5)).
7. Confirm no em dash (U+2014) anywhere in this file, Australian spelling, and the narration counts by script with every bold cue quoted in its scene's Visual in spoken order.
8. Confirm the plate request contains no people, hands, text or brand.

## YouTube metadata (draft)

Title: Domain and Range: Interval Notation, Fractions and Square Roots | Year 11 Maths Advanced

(Title length: 87 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/working-with-functions/lesson03.sa.html

Cut a pizza into n equal slices and each slice is 360 ÷ n degrees. Zero slices breaks the rule, and no slice is ever zero degrees. That is domain and range: the inputs a function can accept and the outputs it can give. Write sets as inequalities, in words and in interval notation (square brackets include an end, round brackets leave it out, and infinity always gets a round bracket). Find the domain of 5/(x − 3) and √(2x + 6), read domain and range from a graph's shadows on the axes, and find the range of x² − 4x + 5 by completing the square. A memory aid: no zero underneath, no negative under the root. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, working with functions.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Define the domain of a function f as the set of real numbers on which f is defined"
"Define the range of a function f as the set of values of f(x) obtained as x varies over the domain of f"
"Recognise domains and ranges of functions and relations given in interval notation, as inequalities and as worded descriptions"
"Determine and describe the domain and range of functions and relations, using interval notation, inequalities or worded descriptions"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

Builds on: function notation f(x); solving linear inequalities. Next: Equations of straight lines.

#Year11Maths #MathsAdvanced #Functions #HSCScience

## Open decisions

- **1. Relations (root).** Two of the four content points mention relations. The route gives relations' domain and range to w24 (circles); this video teaches functions only and says nothing about relations. If root wants a one-line mention, scene 3's last sentence can add "Relations have domains and ranges too; we'll meet them with circles." (+ about 75 characters).
- **2. The pizza's real domain (learning review).** Scene 2 separates the formula's domain (x ≠ 0) from the situation's limit (whole n ≥ 1) in one sentence and a grey chip. The reviewer checks that this does not leave students thinking the domain of 360/x is the whole numbers.
- **3. "Union" (voice pilot).** The spoken form "minus infinity to three, union, three to infinity" is introduced in scene 4; the pilot checks "union" sounds clear.
- **4. Site link form.** `.sa.html`, as root decision 15.

## Review notes

- Revision 2 (16 Nov 2026): the independent learning review (`../checks/m-a11-w09-learning-review.md`) is resolved; see the Revision 2 section. Next: Codex maths check and error check, then voicing and a build to grade A.
- Revision 1 has had no independent review. Next: student learning review (trace from w08 and w06; check that the pizza makes "domain" and "range" concrete before the definitions; that the bracket meanings are tied to dots; that the shadows read as projection, not as area; that completing the square is a recall, not a re-teach; that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
- The cutter, the shadows and the interval builder carry the explanation; judge them at playback speed in the voiced preview, not from stills. Every readout, dot and shadow end must come from the same functions as the displayed formulas.
