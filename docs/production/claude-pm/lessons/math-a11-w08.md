# Maths A11 W08: What does f(x) mean, and how do we substitute into it? The value of f at x, independent and dependent variables, and substituting numbers and expressions in brackets (design)

Status: Revision 2 (16 Nov 2026): independent learning review resolved (see "Revision 2" below); not voiced. Revision 1 (16 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`, the d01 Revision 6 pattern and the f01 and s01 models). Not voiced (no `math-a11-w08/` folder, no audio). Needs the Codex learning review and maths check before voicing. Nothing recorded; human listening pending.

Narration 5,995 characters, 14 scene headings, about 535 s with holds (the key-notes scene fixed at 45 s), counted by script with the build parser rules (see "Narration length estimate").

## Revision 2 (16 Nov): learning review resolved

Review: `../checks/m-a11-w08-learning-review.md` (summary `../checks/m-a11-w01-w31-learning-review-summary.md`), with root's rulings of 16 Nov. Findings by the review's numbers:

1. Optional, scene 6 (spoken bracket): **accepted** (visual only): both machine labels stay at 52 px beside their rows from "Now compare" to the scene's end.

Narration now 5,995 characters by script, about 535 s with holds (see "Narration length estimate"). Stage-plan times below are Revision 1 approximations; frames come from the recording's word timings. Every changed value was rechecked with SymPy (scratchpad `rev2_verify.py`); Codex's maths check remains the authority.

Scope: eighth video of the Year 11 Mathematics Advanced course (outline playlist order 8), the second of the "Working with functions" strand, after w07 (what makes a relation a function) and before w09 (domain and range). Pre-design pack: `../pre-design/maths-a11/math-a11-w08.md` (brief 243). Site lessons (read through the pack's quotations, read only; the pack records the hashes): `working-with-functions/lesson01.sa.html` (SHA256 `6c801a0d45246191bbd1238086f7b388f08d5afdb0e8cb43d96c000d3de15645`, worked example `we-func-1`) and `working-with-functions/lesson02.sa.html` (SHA256 `78aa545cfc48ca43cf45911ee9fd04c07c518a489fb6c037d779c6564318e77a`, worked examples `we-l02-1` and `we-l02-2`). Every number recalculated with SymPy (see "Numbers to verify"). Route entry: `math-a11-w08` in `../../programme/maths-a11-route-inputs-1.json`. Outline entry: `math-a11-w08` in `../../programme/maths-a11-course-outline.json`.

Owner rules applied: 2024 syllabus only, content points cited by codename and exact wording, no site "Module" label anywhere; painted plates for real objects (the taxi, its meter, the street, the bowling pins), coded graphs, machines and algebra; no people, hands or faces (the taxi's windows are tinted, with no driver drawn); one main learner question; one reasoning stage at a time with only the needed earlier results kept; worked examples in the g01 layout (task strip, givens card, rows one at a time, framed answer, crossed slip); "Pause here to answer." then a 10 s countdown with the full worded question and a picture on screen; brief feedback with one crossed mistake; original HSC-style questions; key notes as five short bullets with a framed memory card; everyday anchor (travel and money, not science); Australian spelling; no em dashes; conversational narration that explains the cause before the rule.

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Working with functions, Introduction to functions and relations; NESA content-system codenames, official `code` field empty), quoted from `../../programme/maths-a11-route-inputs-1.json`:

- `ci5022c700`: "Use the notation f(x) to identify the unique value of y associated with x when working with functions, and refer to it as the value of f at x"
- `ci5a13079c`: "Refer to x in a function y = f(x) as the independent variable of the function, and refer to y as the dependent variable"
- `cifb29dab7`: "Substitute numeric and algebraic expressions into the formulas of functions"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

**Boundary:** starts from w07's final frame (a function as one output per input; see open decision 1) and recalls the one-output rule in one sentence. Teaches f(x) as the name for the one output and "the value of f at x" (`ci5022c700`); the independent and dependent variables, with the independent variable across and the dependent variable up (`ci5a13079c`); substituting numbers, negatives in brackets, a letter and a whole expression (`cifb29dab7`). The taxi fare C(d) = 5 + 1.8d (site `we-l02-2`, numbers unchanged) is the anchor; f(x) = x² − 3x + 5 (site `we-func-1`) and f(x) = 2x² − 3x + 1 (site `we-l02-1`) are the worked examples. Stops at evaluating and interpreting. Not taught: domain and range (w09; the handoff raises "which inputs can go in?" as a question only); the difference quotient (site `we-l02-3`, deferred to the calculus strand, c06); composite functions (later); graphs beyond one straight line (w10, w11).

## Decisions

- **Anchor: a taxi fare meter (painted plates, live).** The fare is a function of the distance: every distance gives exactly one fare, which is the one idea w07 ended on. The site's own example (`we-l02-2`, C(d) = 5 + 1.8d) carries every idea in the lesson: the name C and its input d (2); "C of 15" as the value of C at 15, the fare for 15 km (2); d independent because you choose it, C dependent because it follows (3); C(0) = 5 as the flag fall, the meter's reading before the taxi moves (3); C(30) ≠ 2 × C(15), so the brackets do not multiply (4, the visual surprise); and C(d + 1) against C(d) + 1, one more kilometre against a one-dollar tip (6). The taxi returns in the handoff (13). Travel and money, not science; distinct from every Year 12 Maths anchor (checked by grep of `math-a12-*.md`: no taxi, meter or fare) and from the w01 to w07 packs' suggested anchors (none is a taxi). See `../checks/root-decisions-maths-a11-w08-w14.md`.
- **Idealising assumptions (author notes, not learner copy).** (i) The meter adds $1.80 per kilometre continuously; real meters step in small increments and also charge for waiting time. The model is the site's. (ii) "Flag fall" is the Australian term for the fixed starting charge; the narration explains it ("the five dollars on the meter before the taxi has moved").
- **Simulations (standard item 3).**
  1. **The taxi drive** (scenes 1 and 3, the main simulation): the painted taxi rolls left to right along a tiling street strip; an odometer readout d (blue) climbs from 0 and the painted meter's coded display C (teal) climbs from $5.00 in step, while a point rides the line C = 5 + 1.8d on a `StudioPlot` with guide lines to both axes (`FunctionRider`). Stops are held at d = 15 (C = 32) and d = 30 (C = 59). One timeline drives the taxi, both readouts and the point, so they cannot disagree.
  2. **The function machine** (scenes 2, 5, 6, 7 and the handoff; new `FunctionMachine`): an input slot, a rule box and an output tray. The input card drops in with its blue bracket; inside the rule box every slot where x was lights blue and fills with the bracketed input; the output card slides out in teal. In scene 5 the machine runs twice, once with brackets (9) and once without (7, crossed). In scene 6 a whole expression card "d + 1" goes in.
  3. **Two short trips against one long one** (scene 4): two meters run 0 to 15 km side by side (each from $5.00 to $32.00), then one meter runs 0 to 30 km ($5.00 to $59.00); two $5 flag-fall blocks against one.
- **Colour roles (fixed for the whole video; inputs blue and outputs teal as in w07).** Input (x, d, a, g and the substituted value with its bracket) **blue** (`MATH_BLUE`); output, the value f(x) or C(d), **teal** (`MATH_TEAL`); the fixed part, the flag fall 5 and C(0), **amber** (`MATH_AMBER`); the rule itself ink; answer **green** (`MATH_ANSWER`); mistake **red** (`MATH_MISTAKE`), crossed slips only. Colour is never the only carrier: each coloured item has a written label ("input", "output", "flag fall").
- **Large type (standard item 5).** Current working line and live readouts 52 px; task strips, equation strips and givens 44 px; earlier lines 30 to 32 px and dimmed, never faint; machine cards 52 px; axis labels at least 28 px; hand tags at least 34 px; question cards 40 px; key-note bullets 38 to 40 px; nothing below 26 px; all text above y = 950.
- **Handwritten voice (standard item 6).** `HandTag`: "not f × x", "the value of C at 15", "you choose this", "it follows", "flag fall", "+ $5 twice", "brackets!", "every x", "one more km", "a $1 tip", "inside: changes the distance", "outside: changes the fare", "check", circles, arrows and crossings. At most two live at once.
- **Stage changes (standard item 2), about every 30 to 60 s.** w07's frame to the taxi drive (1); the function machine and notation (2); the graph with the riding point and the axes labels (3); two meters against one (4); g01 board with the bracket machine (5); the taxi's two machines, d + 1 inside and + 1 outside (6); g01 board, algebraic input (7); framed memory card (8); question cards with pictures (9 to 12); machine with the two refused inputs and the pizza (13); key notes (14).
- **Worked examples (g01 layout, standard item 7).** Scene 5 (site `we-func-1`, numbers unchanged): f(x) = x² − 3x + 5, f(2) = 3, f(−1) = 9; crossed slip "−1² − 3(−1) + 5 = 7" captioned "brackets!". Scene 7 (site `we-l02-1`, the f(a) part unchanged; f(a + 1) added for `cifb29dab7`'s "algebraic expressions"): f(x) = 2x² − 3x + 1, f(a) = 2a² − 3a + 1, f(a + 1) = 2a² + a, checked at a = 1 against the site's f(2) = 3. Feedback scenes carry a `GivensStrip`, rows at 52 px, a green framed answer and one red crossed slip.
- **Memory aid (standard item 8).** Framed `MemoryAidCard`: "Every x becomes (the input)." with the key line "f(x) is the value of f at x, never f × x." Key notes are five short bullets beside the card; the notes scene is 45 s (1,350 frames).
- **Visual surprise (standard item 9).** Two 15 km trips cost $64, one 30 km trip costs $59 (scene 4): the two meters each start on an amber $5 block, the long trip has only one, and the $5 gap is seen as one flag fall. So C(30) is not 2 × C(15), which is the clearest possible sign that f(x) is not "f times x".
- **Site numbers unchanged.** `we-func-1`: f(2) = 3, f(−1) = 9. `we-l02-1`: f(a) = 2a² − 3a + 1 (its f(2) = 3 is used as the check; its f(−1) = 6 is not repeated, because scene 5 already teaches a negative input). `we-l02-2`: C(15) = 32, C(30) = 59, C(0) = 5 (flag fall). `we-l02-3` (difference quotient) is deferred to c06 per the route.
- **Attempts (original).** A1 (pack question 1): "If g(x) = 3 − 2x², find g(−2) and g(a + 1)." Answers −5 and 1 − 4a − 2a². Crossed: "g(a + 1) = 4 − 2a²" (that is g(a) + 1). A2 (re-contexted from the pack's phone plan, because phones are already used heavily across the Year 12 anchors; see the decisions file): "A bowling alley charges C(g) = 6 + 9g dollars for g games. (a) Find C(3). (b) State the independent and dependent variables. (c) Explain what C(0) represents." Answers $33; g independent, C dependent; C(0) = 6, a fixed $6 charge paid even if no games are played. Crossed: "C(0) = 0".
- **Mistake scene:** none separate. "f(x) means f times x" (2 tag; 4 surprise); "the variable you calculate is the independent one" (3); "−1² = 1" (5, crossed); "f(a + 1) = f(a) + 1" (6, and A1 crossed); "C(0) is zero because nothing happened" (3, A2 crossed).
- **Cause chain taught, in order:** (1) a function gives one output per input, so the output can be named by its input (hook, 2); (2) f(x) is that name: the value of f at x (2); (3) you choose the input and the output follows, so x is independent and y dependent (3); (4) f(0) is the output before the input has grown, here the fixed charge (3); (5) the brackets are a slot, not a multiplication, so doubling the input need not double the output (4); (6) a negative input must go in whole, in brackets, or the square acts on the 1 only (5); (7) an expression input also goes in whole, so changing the input (inside) differs from changing the output (outside) (6, 7).
- **Entry knowledge (route):** w07 (a function gives each input exactly one output; its handoff names f(3) as the value of f at 3). Stage 5: substituting into a formula, order of operations with negatives, expanding (a + 1)² (Year 10; w02 revises expanding).
- **Learner-visible vocabulary (plain meaning at first use):** function notation f(x), read "f of x" (the output when the input is x, 2); the value of f at x (2); independent variable (the input you are free to choose, 3); dependent variable (the output, whose value depends on the input, 3); flag fall (the fixed starting charge on a taxi meter, 3); substitute (replace every x with the input, 5).
- **Handoff (to w09, "Which inputs can a function accept, and which outputs can it give?").** Scene 13: C(−5) = −4 (a negative fare, meaningless) and a painted pizza with the rule "slice angle = 360 ÷ n" and "n = 0?" both waiting at the machine's input slot, which flashes red; chip "Next: which inputs can a function take?" and "?". This is w09's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) C(d) = 5 + 1.8d: C(15) = 32, C(30) = 59, C(0) = 5, C(16) = 33.8, C(15) + 1 = 33, C(−5) = −4. C(d + 1) = 1.8d + 6.8; C(d) + 1 = 1.8d + 6.
  (b) Two 15 km trips 2 × 32 = 64; one 30 km trip 59; difference 5 = one flag fall.
  (c) f(x) = x² − 3x + 5: f(2) = 4 − 6 + 5 = 3; f(−1) = 1 + 3 + 5 = 9; slip −1² − 3(−1) + 5 = −1 + 3 + 5 = 7.
  (d) f(x) = 2x² − 3x + 1: f(a + 1) = 2(a² + 2a + 1) − 3a − 3 + 1 = 2a² + a. At a = 1: 3 = f(2). At a = 0: 0 = f(1).
  (e) Pronunciations: "f of x", "C of fifteen", "C of d plus one" (said as "C of, d plus one" where the comma marks the bracket), "C of d, plus one", "one point eight d", "minus one, in brackets, squared", "two a squared plus a". Voice-pilot item: the spoken difference between "C of d plus one" and "C of d, plus one" (open decision 3).
  (f) Plot window: d 0 to 32 km (ticks every 5), C 0 to 70 dollars (ticks every 10); the line drawn from d = 0 only (the domain question is w09's).

Main question: *A taxi fare depends on the distance. How do we write "the fare for 15 km" in symbols, and what happens when we put numbers, negatives, letters and whole expressions into a rule?*
Entry knowledge (w07; Stage 5 substitution and expanding): a function gives each input exactly one output.
Stops after: f(x) as the value of f at x; independent and dependent variables; substituting numbers, negatives, letters and expressions in brackets. No domain, range or difference quotient.
Handoff: math-a11-w09: two inputs the machine refuses, d = −5 for the taxi and n = 0 for a pizza's slice angle (a question only).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed; see Decisions): input blue; output teal; the fixed part (flag fall, C(0)) amber; rule ink; answer green; mistake red, crossed slips only. Type: current line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; axis labels at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; all text above y = 950. Every stage's main visual (plate, machine, plot or simulation) is solid from the stage's first frame; labels, readouts and answers arrive on their cues. Header strip "MATHEMATICS ADVANCED · WORKING WITH FUNCTIONS"; scene headings in the hand font, 44 px.

### 1. hook: the fare for any distance
> In the last video, we saw that a function gives every input exactly one output, and we started writing f of three for the one output that three gives. Let's put that notation to work on a function you've probably ridden in. A taxi fare depends on the distance you travel. The meter starts at five dollars before the taxi even moves, then adds a dollar eighty for every **kilometre**. Watch fifteen kilometres go by. The meter stops at thirty-two **dollars**. Each distance gives exactly one fare. So how do we write that rule so it names its input, and how do we put numbers, and even letters, into it?

Visual: opens on w07's final frame exactly (w07 scene 12, read 16 Nov: the painted vending machine at the left with its A1 key glowing and the chip "f(A1) = chips"; at the right a graph of y = x² with the point (3, 9) and a dashed vertical line from x = 3; chips "f(3) = 9 ?" and "Next: f(x), the value of f at x"), in w07's colours (inputs blue, outputs teal), which this video keeps. On the first sentence the "Next" chip fades, the "f(3) = 9 ?" chip loses its "?" and gains a hand tag "the one output for 3", and the whole frame shrinks to the top left (30 px labels). Clear change on "taxi fare": the painted street strip `ma11-city-road-strip-v1.png` tiles across the lower third (solid from the frame's first moment), the painted taxi `ma11-taxi-side-v1.png` (about 640 px wide) sits at its left end, and the painted meter `ma11-taxi-meter-v1.png` (about 420 px wide) sits at the top right with its coded display (`PlateReadout`, 64 px, teal) reading "$5.00". Heading writes on: "What does f(x) mean, and how do we substitute into it?". On "starts at five dollars" the display's "$5.00" is ringed in amber, hand tag "before it moves". On "kilometre" an odometer readout (`LiveReadoutBoard`, 52 px) appears beside the meter: "distance d = 0 km" (blue). On "Watch" the taxi drive runs (simulation 1, about 5 s): the strip scrolls under the taxi, d climbs 0 → 15 and the display climbs $5.00 → $32.00 in step. On "dollars" both readouts hold, d = 15 and "$32.00", with a hand tag "one distance, one fare". On the last sentence the chip "How do we name it? What can we put in?" moves to the top right as the scene question.

### 2. f(x): the value of f at x
> Mathematicians give a rule a name, often f, and write f of x for the output when the input is x. For the taxi, call the rule C, for cost, and call the distance d. Then C of d equals five plus one point eight d. The brackets don't mean multiply. C of fifteen is the value of C at fifteen, the fare for a fifteen kilometre **trip**. Here's the rule as a machine. Fifteen goes in, the rule replaces d with fifteen, and the output comes out: five plus one point eight times fifteen, which is five plus twenty-seven, thirty-**two**. So C of fifteen equals thirty-two. Because a function gives exactly one output, f of x names that one value. We often write y equals f of x, so y and f of x are the same **number**.

Visual: camera continue; the taxi and meter shrink to the left third (taxi 360 px, meter 300 px, both solid, meter still "$32.00"). Centre: the equation strip, 44 px: "f(x) = the output when the input is x", with "x" blue and "f(x)" teal. On "call the rule C" the strip's second line writes "C(d) = 5 + 1.8d" (52 px): "d" blue, "C(d)" teal, the "5" amber. A hand tag "not C × d" points at the brackets. On "trip" "C(15)" writes under it with a bracket "the value of C at 15" (hand tag) and an arrow to the meter's "$32.00". On "machine" the `FunctionMachine` (about 1,000 × 420 px, solid from its first frame: input slot left, rule box "5 + 1.8( )" centre, output tray right) fills the centre-right; the input card "15" (blue, 52 px) drops into the slot; inside the rule box the empty bracket fills with "15", glowing blue. Working row under the machine, 52 px: "C(15) = 5 + 1.8(15) = 5 + 27". On "two" the output card "32" (teal) slides into the tray and the row closes "= 32" in a green answer frame. On "y equals f of x" a chip "y = f(x)" writes at the right, with "y" and "f(x)" both teal and a hand tag "same number" on "number".

### 3. independent, dependent, and C(0)
> Notice who chooses what. You choose the distance, and the fare follows from it. So d is the independent variable, the input we're free to pick, and C is the dependent variable, because its value depends on **d**. On a graph, the independent variable goes across, and the dependent variable goes **up**. As the taxi drives, the point rides along the line. At fifteen kilometres it's at thirty-two dollars, and at thirty kilometres, fifty-**nine**. Now put in zero. C of zero is five plus one point eight times zero, which is **five**. That's the five dollars on the meter before the taxi has moved, called the flag fall. It's where the line meets the vertical **axis**.

Visual: clear change to the graph stage. Left two-thirds: a `StudioPlot` (1,100 × 640 px, solid axes from the first frame), horizontal axis "distance d (km)" 0 to 32 (blue label), vertical axis "fare C (dollars)" 0 to 70 (teal label). Right third: the taxi meter plate (300 px) and the odometer readout stacked, with the taxi plate on a short strip under the plot's horizontal axis. On the first sentence two chips write at the right: "d: you choose this" (blue, hand tag "independent") and "C: it follows" (teal). On "d" the chips gain their names in 44 px: "independent variable" and "dependent variable". On "up" the axis labels pulse in their colours, hand tags "independent: across" and "dependent: up". On "rides" the taxi drive runs again (simulation 1): the taxi moves along the strip under the axis in step with a teal point riding the line C = 5 + 1.8d from d = 0, with blue and teal guide lines to the axes and the meter display following. Hold at d = 15: point (15, 32), labels "C(15) = 32". On "nine" the drive continues to d = 30: point (30, 59), label "C(30) = 59". On "zero" the point and taxi rewind to d = 0. On "five" the row "C(0) = 5 + 1.8(0) = 5" (52 px) writes, "5" amber, and the line's starting point glows amber with a hand tag "flag fall". On "axis" an amber ring on the vertical axis at 5, tag "where the line meets the C axis: C(0)".

### 4. not multiply: two short trips against one long one
> Here's a question. Is one thirty kilometre trip the same price as two fifteen kilometre trips? Two short trips cost thirty-two plus thirty-two, sixty-four **dollars**. One long trip costs fifty-**nine**. The difference is five dollars, one extra flag **fall**. So C of thirty isn't two times C of fifteen. Function notation doesn't multiply. To find C of thirty, you put thirty into the **rule**.

Visual: clear change. Left: two small meter plates side by side (each 300 px, coded displays), labelled "trip 1: 15 km" and "trip 2: 15 km"; right: one meter plate (300 px) labelled "one trip: 30 km". Under each meter a coded cost bar (`SignedBar` stack, 1 px per 10 cents): an amber $5 block at the base and a teal block for the distance charge. On the first sentence the chip "2 × 15 km or 1 × 30 km?" writes at the top. On "dollars" (first bold) both left meters run $5.00 → $32.00 together (simulation 3) and their bars stack into one column "32 + 32 = 64" (52 px). On "nine" the right meter runs $5.00 → $59.00 and its bar grows to "59". On "fall" the two columns stand side by side; the teal parts match exactly (2 × 27 = 54 against 54) and the second amber block on the left column is ringed, hand tag "+ $5 twice". On "So C of thirty" the row "C(30) = 59 ≠ 2 × C(15) = 64" writes, 52 px, the "≠" in red. On "rule" the row "C(30) = 5 + 1.8(30) = 59" writes under it in a green frame, hand tag "put 30 into the rule".

### 5. worked example 1: numbers and negatives
> Now a rule with no story. If f of x equals x squared minus three x plus five, find f of two and f of minus one. Replace every x with two, in brackets: two squared, minus three times two, plus five. That's four minus six plus five, which is **three**. Now minus one. The brackets matter most here. Minus one, in brackets, squared, is plus **one**. Minus three times minus one is plus **three**. So f of minus one is one plus three plus five, **nine**. Without brackets, minus one squared reads as minus one, because the square acts on the one only, and you'd get **seven**. That's the classic slip.

Visual: clear change to the g01 board. Task strip, 44 px: "If f(x) = x² − 3x + 5, find f(2) and f(−1)." (site `we-func-1`). Givens card: "rule f(x) = x² − 3x + 5"; "inputs 2 and −1" (blue). A compact `FunctionMachine` (about 760 × 300 px) at the top right with its rule box "( )² − 3( ) + 5", both slots dashed. On "Replace every x with two" the card "2" drops in and both slots fill with "(2)" in blue; the working row, 52 px, "f(2) = (2)² − 3(2) + 5". On "three" (first bold) the row continues "= 4 − 6 + 5 = 3", green frame, then shrinks to 32 px above. On "Now minus one" the card "(−1)" drops in, both slots fill with "(−1)", hand tag "brackets!". On "one" the term "(−1)² = 1" lights in the row "f(−1) = (−1)² − 3(−1) + 5". On "three" (second bold) "−3(−1) = +3" lights. On "nine" the row closes "= 1 + 3 + 5 = 9" in a green frame. On "seven" the machine runs a second time with the card "−1" and no bracket; its slots show "−1²" and the row "−1² − 3(−1) + 5 = −1 + 3 + 5 = 7" writes in red and is crossed, caption "the square acts on the 1 only".

### 6. an expression goes in whole
> The input doesn't have to be a number. It can be an expression, and it still goes in whole, in brackets. Back in the taxi. What does C of, d plus one, **mean**? It's the fare for one more kilometre. Put d plus one into the rule: five plus one point eight times, d plus one, in brackets. That's six point eight plus one point eight **d**. Now compare C of d, plus one. That's the fare, then add one dollar, like a tip: six plus one point eight **d**. They're different. In C of, d plus one, the plus one goes inside, so it changes the distance. In C of d, plus one, it's added to the fare afterwards. At fifteen kilometres, one more kilometre makes it thirty-three dollars **eighty**, and the tip makes it thirty-**three**.

Visual: clear change. Two machines stacked (each about 900 × 300 px), the taxi plate (300 px) and meter at the left. Top machine labelled "C(d + 1)"; bottom labelled "C(d) + 1". On "mean" the input card "d + 1" (blue, one card with its bracket) hovers over the top machine, hand tag "one more km". On "Put d plus one into the rule" it drops in and the slot fills "(d + 1)". On "d" (first bold) the row "C(d + 1) = 5 + 1.8(d + 1) = 6.8 + 1.8d" writes beside it (52 px). On "Now compare" the card "d" drops into the bottom machine, its output "5 + 1.8d" slides out, and an amber "+ 1" chip adds on after the tray, hand tag "a $1 tip". On "d" (second bold) the row "C(d) + 1 = 6 + 1.8d" writes. On "different" a red "≠" between the rows. On "inside" a bracket over the top machine's input, hand tag "inside: changes the distance"; on "afterwards" one over the bottom machine's tray, hand tag "outside: changes the fare". On "eighty" the meter reads "$33.80" beside "C(16) = 33.80" in a green frame; on "three" a second meter chip "$33.00" beside "C(15) + 1 = 33". From "Now compare" to the end of the scene both machine labels, "C(d + 1)" and "C(d) + 1", stay at 52 px beside their rows, so the brackets on screen carry the distinction if the voice blurs "C of, d plus one" (Revision 2, learning review optional note).

### 7. worked example 2: a letter and an expression
> Let's do that with a squared term. If f of x equals two x squared minus three x plus one, find f of a, and f of, a plus one. For f of a, every x becomes a: two a squared minus three a plus **one**. For f of, a plus one, every x becomes a plus one, in brackets: two times, a plus one, all squared, minus three times, a plus one, plus **one**. Expand: two a squared plus four a plus two, minus three a minus three, plus one. Collect the terms, and it's two a squared plus **a**. Here's a quick check. Put a equals one. Then f of, a plus one, is f of two, and two a squared plus a gives two plus one, which is three. The rule gives f of two equals three as well. It **matches**.

Visual: clear change to the g01 board (new case). Task strip, 44 px: "If f(x) = 2x² − 3x + 1, find f(a) and f(a + 1)." (site `we-l02-1`, extended). Givens card: "rule f(x) = 2x² − 3x + 1"; "inputs a and a + 1" (blue). Compact machine at the top right, rule box "2( )² − 3( ) + 1". On "every x becomes a" the card "a" drops in; on "one" (first bold) the row "f(a) = 2a² − 3a + 1" (52 px) in a green frame, then shrinks to 32 px. On "every x becomes a plus one" the card "(a + 1)" drops in and both slots fill with it, glowing blue; on "one" (second bold) the row "f(a + 1) = 2(a + 1)² − 3(a + 1) + 1". On "Expand" the next row "= 2a² + 4a + 2 − 3a − 3 + 1" replaces it (the previous row dims to 32 px). On "a" the row "= 2a² + a" in a green frame, hand tag "collect". On "check" a grey side panel, 44 px: "a = 1: f(2) = 2(1)² + 1 = 3"; on "matches" the line "rule: f(2) = 8 − 6 + 1 = 3" and a green tick, hand tag "check".

### 8. memory aid
> Here's one rule that covers all of this. Every x becomes the input, in brackets. A number, a negative, a letter or a whole expression, it goes in whole, wherever x was. And f of x is the value of f at x, never f times **x**.

Visual: stage change to the framed `MemoryAidCard` (about 1,300 × 600 px, double ink frame, hand-font heading "Memory aid"). Left slot: a small machine with three input cards queued: "(−1)", "(a)", "(a + 1)" (blue), each dropping in turn into a slot drawn as "( )". Main line, hand font 60 px: "Every x becomes (the input)." On the second sentence the queued cards drop one after another. On "x" the key line, 40 px: "f(x) is the value of f at x, never f × x." with "f × x" crossed in red. Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. If g of x equals three minus two x squared, find g of minus two, and g of, a plus one. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "If g(x) = 3 − 2x², find g(−2) and g(a + 1)." The full question stays on screen. Picture slot: an empty `FunctionMachine` with the rule box "3 − 2( )²" and two blank blue input cards labelled "?" (no values). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> For g of minus two, minus two in brackets, squared, is four, so it's three minus eight, which is minus **five**. For g of, a plus one, a plus one goes in whole: three minus two times, a plus one, squared. That expands to one minus four a minus two a **squared**. Four minus two a squared is wrong. That's g of a, plus one, not g of, a plus **one**.

Visual: the card shrinks to the top (30 px). `GivensStrip`: "g(x) = 3 − 2x²", "inputs −2 and a + 1" ("−2" and "a + 1" underlined in the card as they are used). Rows, 52 px: "g(−2) = 3 − 2(−2)² = 3 − 8"; on "five" "= −5" in a green frame. Next row "g(a + 1) = 3 − 2(a + 1)²"; on "squared" "= 3 − 2a² − 4a − 2 = 1 − 4a − 2a²" in a green frame. On "one" a red slip "g(a + 1) = 4 − 2a²" writes and is crossed (hand caption "that's g(a) + 1"). Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. A bowling alley charges C of g equals six plus nine g dollars, for g games. Find C of three, state the independent and dependent variables, and explain what C of zero represents. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A bowling alley charges C(g) = 6 + 9g dollars for g games. (a) Find C(3). (b) State the independent and dependent variables. (c) Explain what C(0) represents." The full question stays on screen. Picture slot: the painted bowling pins and ball `ma11-bowling-pins-v1.png` (about 360 px wide). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 12. feedback 2 (brief)
> C of three is six plus nine times three, so thirty-three **dollars**. You choose the number of games, so g is independent, and the cost C depends on it. C of zero is six plus zero, which is six. It's a fixed six dollar charge, paid even if no games are **played**. Zero is wrong. C of zero is the value of C at zero, and the rule gives six, not **zero**.

Visual: the card shrinks to the top. `GivensStrip`: "C(g) = 6 + 9g", "g games" ("6 + 9g" and "C(0)" underlined in the card as used). Row, 52 px: "C(3) = 6 + 9(3) = 33"; on "dollars" a green frame "$33". Two chips on "independent": "g: independent (you choose it)" (blue) and "C: dependent" (teal). On "played" the row "C(0) = 6 + 9(0) = 6" with the "6" amber and a green-framed caption "a fixed $6 charge, even with no games". On "zero" a red slip "C(0) = 0" writes and is crossed (hand caption "put 0 into the rule"). Hold about 1 s.

### 13. handoff
> So f of x is the value of f at x, x is the independent variable and y the dependent one, and whatever you substitute goes in whole, in brackets. But can every input go in? Try C of minus five. The rule gives minus four dollars, a negative fare, which makes no **sense**. Now cut a pizza into n equal slices. Each slice's angle is three hundred and sixty divided by n degrees. What happens when n is **zero**? Some inputs a rule just can't take.

Visual: the three ideas show as small chips at the top ("f(x): value at x", "x independent, y dependent", "(input) in brackets", 34 px), then fade on "But can every input". Board clears to the machine at the centre (about 1,000 × 380 px). Left: the taxi meter plate (300 px). The card "−5" drops in; on "sense" the output tray shows "−4" in red and the meter's display flickers "−$4.00?" with a hand tag "a negative fare?". Right: the painted pizza `ma11-pizza-top-v1.png` (about 420 px, solid) with four coded cut lines and a chip "slice angle = 360 ÷ n" (44 px). On "zero" the card "n = 0" drops toward the slot and the slot flashes red with "360 ÷ 0 = ?". Chip "Next: which inputs can a function take?" and a "?" chip. Hold about 2 s. This is w09's opening frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line (root decision 58).
> Here are the key notes. Pause the video if you need more time to copy them.

- f(x) is the value of f at x, not f × x.
- In y = f(x): x is independent, y is dependent.
- Substitute: every x becomes (input), in brackets.
- (−1)² = 1, but −1² = −1.
- f(a + 1) is not f(a) + 1.

Memory aid (framed card, right side of the notes screen, as in scene 8): *Every x becomes (the input).* Key: *f(x) is the value of f at x, never f × x.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades (1 s) back to scene 13's frame exactly (the machine, the meter with "−$4.00?", the pizza with "n = 0" and the red slot, "Next: which inputs can a function take?" and "?"). This is the final frame and w09's opening frame.

## Teaching checks

- **Does it explain causes?** Why f(x) can name the output: a function gives exactly one output per input (1, 2). Why d is independent: you choose it, and the fare follows (3). Why C(0) = 5 means the flag fall: no distance has been travelled (3). Why C(30) ≠ 2 × C(15): the fixed $5 is paid once per trip (4). Why brackets around −1: without them the square acts on the 1 only (5). Why C(d + 1) ≠ C(d) + 1: one changes the input before the rule, the other changes the output after it (6). Why the a = 1 check works: f(a + 1) at a = 1 must equal f(2) (7).
- **Misconceptions addressed:** f(x) as f × x (2, 4, 8); confusing independent and dependent (3; A2); −1² = 1 (5 crossed); f(a + 1) = f(a) + 1 (6; A1 crossed); C(0) = 0 (A2 crossed).
- **Visual standard (`../maths-visual-standard.md`), item by item:** 1 the painted taxi, meter and street from the first seconds, returning in 3, 4, 6 and 13; 2 a new stage every 30 to 60 s (stage plan below); 3 the taxi drive with the riding point and two live readouts, the machine filling its slots, the two-trips race; 4 fixed colour roles; 5 large type; 6 hand tags; 7 g01 boards in 5 and 7, framed answers and crossed slips; 8 framed memory card and five short bullets; 9 two short trips land on $64 and one long trip on $59.
- **One idea at a time:** notation (2), variables (3), the not-multiply surprise (4), negatives (5), expressions (6, 7). Each worked row replaces the last, with only the needed earlier result kept small.
- **Response opportunity:** two unseen HSC-style tasks with every demand visible, each card with a picture; 10 s each with the invitation to pause; nothing answer-bearing. One crossed mistake each; feedback about 26 s each.
- **Avoided double teaching:** w07's one-output rule is recalled in one sentence; expanding (a + 1)² is used, not taught (Stage 5, revised in w02).
- **Syllabus coverage:** `ci5022c700` (2, 3, 4, 8; key notes 1); `ci5a13079c` (3; A2; key note 2); `cifb29dab7` (5, 6, 7; A1; key notes 3, 4, 5).
- **Out of scope by design:** domain and range (w09); the difference quotient (c06); composite functions; graphing beyond one line.

## Practice questions and model answers

**Attempt 1 (scene 9; original wording, HSC style, 2 marks suggested, not an official marking scheme).** "If g(x) = 3 − 2x², find g(−2) and g(a + 1)."
Model answer: g(−2) = 3 − 2(−2)² = 3 − 8 = −5. g(a + 1) = 3 − 2(a + 1)² = 3 − 2(a² + 2a + 1) = 1 − 4a − 2a². Classic mistake (crossed): "g(a + 1) = 4 − 2a²" (that is g(a) + 1).

**Attempt 2 (scene 11; original wording, HSC style, 3 marks suggested).** "A bowling alley charges C(g) = 6 + 9g dollars for g games. (a) Find C(3). (b) State the independent and dependent variables. (c) Explain what C(0) represents."
Model answer: (a) C(3) = 6 + 27 = 33, so $33. (b) g (the number of games) is independent; C (the cost) is dependent. (c) C(0) = 6: a fixed $6 charge that is paid even if no games are played. Classic mistake (crossed): "C(0) = 0".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Taxi rule (site `we-l02-2`) | C(d) = 5 + 1.8d | 1 to 4, 6, 13 |
| Taxi values | C(15) = 32; C(30) = 59; C(0) = 5 | 1, 2, 3, 4 |
| Two trips against one | 32 + 32 = 64; 59; difference 5; distance charges 27 + 27 = 54 = 1.8 × 30 | 4 |
| Expression inputs | C(d + 1) = 6.8 + 1.8d; C(d) + 1 = 6 + 1.8d; C(16) = 33.80; C(15) + 1 = 33 | 6 |
| Site `we-func-1` | f(x) = x² − 3x + 5: f(2) = 3; f(−1) = 9; slip 7 | 5 |
| Site `we-l02-1` | f(x) = 2x² − 3x + 1: f(a) = 2a² − 3a + 1; f(a + 1) = 2a² + a; check a = 1 gives 3 = f(2) | 7 |
| A1 | g(−2) = −5; g(a + 1) = 1 − 4a − 2a²; crossed 4 − 2a² | 9, 10 |
| A2 | C(3) = 33; C(0) = 6 | 11, 12 |
| Handoff | C(−5) = −4; slice angle 360 ÷ n; 360 ÷ 4 = 90 (four cut lines) | 13 |

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy 1.14 (16 Nov 2026, scratchpad `verify.py`); Codex to re-check.

- C(d) = 5 + 1.8d: C(15) = 32, C(30) = 59, C(0) = 5, C(16) = 33.8, C(−5) = −4.
- 2 × C(15) = 64; 64 − 59 = 5.
- Expanded: C(d + 1) = 1.8d + 6.8; C(d) + 1 = 1.8d + 6.
- x² − 3x + 5 at 2 and −1: 3 and 9; −1² − 3(−1) + 5 = 7.
- 2x² − 3x + 1: f(a + 1) expands to 2a² + a; at a = 1 gives 3; f(2) = 3; f(1) = 0 (equals 2(0)² + 0).
- 3 − 2x² at −2: −5; at a + 1: 1 − 4a − 2a²; g(a) + 1 = 4 − 2a².
- 6 + 9g at 3 and 0: 33 and 6.

## Memory aid check

- **"Every x becomes (the input)."** Original. Meaning, as said in scene 8: to evaluate f at any input, replace every occurrence of x by that input, written inside brackets. Assumptions checked: true for every formula in the course (a pure substitution rule); the brackets matter only where the input is negative or an expression, and are harmless elsewhere. It helps a new case: f(2a), f(−3), f(x + h) (the difference quotient later). Introduced after the causes in 5 and 6.
- **Considered, not used:** "f is a machine" alone (true but carries no rule about brackets); "inside changes x, outside changes y" (kept as the scene 6 hand tags, too long for the card).

## Narration length estimate

Recounted for Revision 2 (16 Nov 2026). Counted 16 Nov 2026 with the build parser rules (`### N.` headings; only lines starting "> " inside the scene, joined with a space, `**` removed; the total is the sum of the scene strings): **5,995 characters**, 14 scene headings. Characters per scene (1 to 14): 594, 697, 648, 380, 577, 702, 659, 220, 119, 336, 210, 342, 436, 75.

At 13.3 characters per second the speech is about 451 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, two feedbacks 1 s each, handoff 2 s) 6 s; settling for the taxi drive (1, 3), the two-trips race (4) and the machines (5, 6) about 19 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 535 s (8 min 55 s)**, inside the 5,500 to 6,800 character band and about 35 s under the 570 s cap.

Reserve trims, if the voiced takes run long, in this order: scene 2's "We often write y equals f of x, so y and f of x are the same number." (keep the chip); scene 7's "The rule gives f of two equals three as well." (keep the panel line). Do not cut below 5,500 characters.

## Scene list and build ids

Lesson key `m-a11w08` (route math-a11-w08). Explainer folder `src/explainer/lessons/math-a11-w08`; build inputs in `docs/production/claude-pm/lessons/math-a11-w08/` (to be created at voicing). Root confirms when adding the LESSONS entry.

In order (kebab-case; 14 scene headings, all `### N.`): hook-taxi, f-of-x, variables-and-c0, not-multiply, worked-numbers, expression-input, worked-algebra, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (seconds from the estimate):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 51 s | 1 | w07's frame, then the painted taxi drive with meter and odometer |
| 51 to 103 s | 2 | Notation, then the function machine with C(15) |
| 103 to 153 s | 3 | Graph with the riding point; C(0) as the flag fall |
| 153 to 186 s | 4 | Two meters against one: $64 against $59 |
| 186 to 233 s | 5 | g01 board, the bracket machine and the crossed 7 |
| 233 to 286 s | 6 | Two taxi machines: inside against outside |
| 286 to 333 s | 7 | g01 board, f(a) and f(a + 1) with the check |
| 333 to 357 s | 8 | Framed memory card |
| 357 to 445 s | 9 to 12 | Question cards with pictures and countdowns, then feedback |
| 445 to 483 s | 13 | The machine refusing −5 and n = 0 (taxi and pizza) |
| 483 to 535 s | 14 | Key notes with the framed card, then a silent return to scene 13's frame |

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`: the learner reads and works during the countdown) and key-notes (`hold`: the learner copies the notes). Transitions (`pickTransition`): w07's last frame continues into scene 1, then a clear change to the taxi; 1 to 2 camera continue (taxi shrinks left); 2 to 3 clear change (the graph); 3 to 4 clear change; 4 to 5 clear change (new case); 5 to 6 clear change (back to the taxi); 6 to 7 clear change (new case); 7 to 8 camera pull back to the card; attempts and feedback: the card shrinks to the top; 12 to 13 board clear; 13 to 14 fade to the notes board, then a silent return to scene 13's frame.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, the ring shown full from "Pause here to answer."). key-notes is 45 s (1,350 frames in `config.ts`). Review evidence paths for the LESSONS entry: `learning_review` = `checks/m-a11-w08-learning-review.md`, `science_check` = `checks/m-a11-w08-maths-check.md`.

## Assets

Inspected before choosing (16 Nov 2026, `public/assets`, read only, by file name and the house-style reference `maths/ma12-young-gum-tree-v1.png`): no taxi, meter, pizza or bowling plate exists in any course. `biology/b4-car-yellow-v1.png` is a private yellow car already carrying d19's depreciation meaning, so it is not reused as a taxi. `maths/ma12-country-road-v1.png` is d08's country road; a city street suits a taxi and keeps the contexts apart.

Need (painted, new; see the Codex asset brief): `ma11-taxi-side-v1.png`, `ma11-taxi-meter-v1.png`, `ma11-city-road-strip-v1.png`, `ma11-bowling-pins-v1.png`, and `ma11-pizza-top-v1.png` (scene 13; w09's anchor, briefed in w09; it must be painted before this build, decision 49 precedent).

Coded (studio kit): the meter's display digits (drawn into the plate's measured blank display), the odometer readout, the plot and riding point, the function machines and cards, the cost bars, working boards, question cards, the countdown, hand tags, the framed card and key notes; the pizza's cut lines (coded lines on the plate, as the spinner sectors in s01).

### Studio kit use and additions

Uses: `MATH_ROLES` and `Role`, `HandTag`, `PlateImg`, `PlateReadout`, `LiveReadoutBoard`, `StudioPlot`, `FunctionRider` (a straight line is a valid `FunctionSimulator` function), `SignedBar`, `TaskStrip`, `EquationStrip`, `GivensCard`, `WorkingRows`, `AnswerFrame`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard` with its picture slot and `GivensStrip`.

Additions (from `../checks/maths-a11-kit-needs.md`, row w08):
1. **`FunctionMachine`** (new, reused by w09 and later by w27): an input slot, a rule box built from text with marked slots `( )`, and an output tray. Props: `rule` (slot template), `ruleFn` (the evaluation; the output card is computed, never typed), `inputs` ({card, at, bracket: true | false}[]), `fillAt`, `outputAt`, `refuse` ({at, label}: the slot flashes the mistake colour and the tray stays empty), `postAdd` ({label, at}: a chip added after the tray, scene 6), `compact`. Role colours: input blue, output teal. Check: f(x) = x² − 3x + 5 gives 3 at 2 and 9 at (−1), and 7 when `bracket: false` substitutes "−1" as text into "( )²" (the build computes −(1²)); C(d) = 5 + 1.8d gives 32 at 15.
2. **Taxi drive rig** (lesson folder, on `FunctionRider` and `PlateReadout`): one timeline drives the strip scroll, the taxi plate, the odometer readout, the meter display and the riding point; stops listed per scene. Check: at every frame the meter equals 5 + 1.8 × odometer to the cent.

## Codex asset brief (Maths A11 W08, a taxi fare)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-w08.md`. Paint after the learning review and maths check of this design pass and root gives the go-ahead. Save to `public/assets/maths/`. Every plate: **transparent PNG with a true alpha channel** and clean edges with no coloured fringe or halo (check on a black and a white background); ink and watercolour in the house style, matched in palette, line weight and finish to `maths/ma12-cricket-scoreboard-v1.png` and `biology/b4-car-yellow-v1.png`; at least 8 per cent clear margin unless a plate is stated to be a tile; no text, letters, numbers, logos, brand names, company liveries, people, drivers, hands, faces, sky, glow or ground shadow beyond the plate's own ground patch. Never stretch to fit; keep the native aspect ratio.

1. `ma11-taxi-side-v1.png` (2400 × 1000 px): a generic sedan taxi seen exactly side-on, facing right, in a plain taxi yellow, with a **blank** roof light box (no word, no number, no company name) and dark tinted windows so **no driver or passenger is visible**. Wheels round and level on the plate's lower edge. Codex reports the wheel-base line (y of the tyre bottoms) and the two wheel centres in file pixels.
2. `ma11-taxi-meter-v1.png` (1400 × 900 px): a small dashboard taximeter unit seen straight on, dark grey casing with a few plain buttons and **one large blank dark display window** (no digits or words). Codex reports the display window's rectangle [x0, y0, x1, y1] in a sidecar `ma11-taxi-meter-v1.json` (code writes the fare in it).
3. `ma11-city-road-strip-v1.png` (2400 × 300 px): a strip of city street seen side-on at a low angle: grey asphalt with a kerb and a strip of footpath behind, **tileable horizontally** (left and right edges join seamlessly; exempt from the side margins); transparent above the footpath with at least 8 per cent clear margin there. No buildings, signs, road markings with words, people or cars.
4. `ma11-bowling-pins-v1.png` (1400 × 1000 px): ten white bowling pins with two red neck stripes standing in their triangle, seen from a low front three-quarter view, with one plain dark blue bowling ball at the front left. No lane markings, logos or text.

Report inspection on the paper background (`#f6f1e7`) at 360 px and 640 px wide for plate 1, 300 px and 420 px for plate 2, a two-copy tiling check for plate 3 and 360 px for plate 4, plus the alpha checks and anchor points. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-w08-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the three syllabus quotes match the route-inputs JSON exactly and that no site module label appears in learner copy or metadata.
3. Confirm the scope of every learner-visible general claim: "f of x names that one value" (2, tied to a function's one output); "the brackets don't mean multiply" (2, 4); "the independent variable goes across" (3, the usual convention); "C of zero is the flag fall" (3, within the model); "−1² reads as minus one" (5).
4. Confirm the site's three worked examples keep their numbers (C(15) = 32, C(30) = 59, C(0) = 5; f(2) = 3, f(−1) = 9; f(a) = 2a² − 3a + 1), and that the added f(a + 1) = 2a² + a is right.
5. Confirm both attempt questions carry every demand, are original in wording, and that neither card or its picture shows an answer.
6. Confirm the opening matches w07's final frame (once w07's design is fixed) and that scene 13's frame is w09's opening frame exactly.
7. Confirm no em dash (U+2014) anywhere in this file, Australian spelling in narration and screen text, and the narration counts by script with every bold cue quoted in its scene's Visual in spoken order.
8. Confirm the plate requests contain no people, drivers, hands, text, numbers or brand liveries.

## YouTube metadata (draft)

Title: Function Notation f(x): Substituting Numbers and Expressions | Year 11 Maths Advanced

(Title length: 85 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/working-with-functions/lesson02.sa.html

A taxi fare depends on the distance travelled. Write that rule as C(d) = 5 + 1.8d, read C(15) as "the value of C at 15", and see why d is the independent variable and C the dependent one. Watch the meter start at the $5 flag fall, C(0), and find out why one 30 km trip costs less than two 15 km trips, so f(x) never means f times x. Then substitute negatives and whole expressions in brackets, and see the difference between C(d + 1) and C(d) + 1. A memory aid: every x becomes (the input). Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, working with functions.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Use the notation f(x) to identify the unique value of y associated with x when working with functions, and refer to it as the value of f at x"
"Refer to x in a function y = f(x) as the independent variable of the function, and refer to y as the dependent variable"
"Substitute numeric and algebraic expressions into the formulas of functions"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

Builds on: what makes a relation a function. Next: Domain and range.

#Year11Maths #MathsAdvanced #Functions #HSCScience

## Open decisions

- **1. w07's final frame (resolved, 16 Nov).** w07 (designed in parallel) ends on its vending machine with "f(A1) = chips", a graph of y = x² with (3, 9), "f(3) = 9 ?" and "Next: f(x), the value of f at x" (w07 scene 12). Scene 1 opens on that frame and keeps w07's colours (inputs blue, outputs teal). w07's handoff already says "f of three is the value of f at three", so scene 2 defines the notation formally without repeating that sentence as new. If w07's frame changes in review, change scene 1's first visual and its first sentence's "f of three".
- **2. "In the last video" (root).** Scene 1 says "In the last video". This is true in production and playlist order (w07 then w08). If the playlist ever separates them, change it to "Earlier, we saw" (same length within 3 characters).
- **3. Spoken brackets (voice pilot).** "C of, d plus one" against "C of d, plus one" relies on the comma pause and the on-screen brackets. The voice pilot checks that the Google voice separates them clearly; if not, say "C of the bracket d plus one" (+ about 24 characters per use, 3 uses).
- **4. A2 context (root).** The pack's phone plan is replaced by a bowling alley so that phones (d03, i03, t04) are not used again as a context; the numbers are new (C(g) = 6 + 9g). If root prefers the pack's numbers, C(g) = 15 + 6g gives C(4) = 39 with the same structure.
- **5. Site link form.** `.sa.html`, as root decision 15. The description links lesson 2 (the taxi and f(a) examples); lesson 1 is the source of `we-func-1`.

## Review notes

- Revision 2 (16 Nov 2026): the independent learning review (`../checks/m-a11-w08-learning-review.md`) is resolved; see the Revision 2 section. Next: Codex maths check and error check, then voicing and a build to grade A.
- Revision 1 has had no independent review. Next: student learning review (trace from w07 and Stage 5 substitution; check that "the value of C at 15" is tied to the meter before any abstract f(x); that the two-trips surprise makes "not multiply" visible; that the bracket machine shows why (−1)² differs from −1²; that inside against outside in scene 6 is clear at speed; that the cards give nothing away), then the Codex maths check and error check, then voicing on the Google voice and a build on the studio kit to grade A.
- The taxi drive, the two-trips race and the machines carry the explanation; judge them at playback speed in the voiced preview, not from stills. Every readout, card and output must be computed from the same rule functions as the displayed formulas.
