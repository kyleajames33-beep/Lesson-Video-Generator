# Maths A11 W07: What makes a relation a function? Relations as arrows between two sets, exactly one output for each input, four representations of one rule, and the vertical line test (design)

Status: Revision 2 (16 Nov 2026): independent learning review resolved (see "Revision 2" below); not voiced. Revision 1 (16 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`, d01 Revision 6 and s01 Revision 4 patterns). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,516 characters by script (build parser rules), 14 scene headings, about 492 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (16 Nov): learning review resolved

Review: `../checks/m-a11-w07-learning-review.md` (summary `../checks/m-a11-w01-w31-learning-review-summary.md`), with root's rulings of 16 Nov. Findings by the review's numbers:

1. Blocker, scene 3 (water taught as an input with no output): **accepted**, reviewer's replacement narration. Water is pointed out while the arrows still run from buttons to snacks (grey tag "no arrow in: allowed"); after the reversal it gets a red tag "input, no output: not allowed" as the reverse's second failure. Author note (a), the numbers table and the teaching checks updated.
2. Should fix, attempt 1 and feedback 1 (about 32 s): **accepted** (root ruling: drop part (d)). The card, the attempt narration, the feedback sentence and mini diagram for (d), the model answer (now 3 marks), the Decisions and open decision 2 updated; feedback about 25 s.

Narration now 5,516 characters by script, about 492 s with holds (see "Narration length estimate"). Stage-plan times below are Revision 1 approximations; frames come from the recording's word timings. Every changed value was rechecked with SymPy (scratchpad `rev2_verify.py`); Codex's maths check remains the authority.

Scope: seventh video of Year 11 Mathematics Advanced (2024), outline order 7, Working with functions, Introduction to functions and relations. Pre-design pack: `../pre-design/maths-a11/math-a11-w07.md`. Site lesson (read through the pack, read only): `working-with-functions/lesson01.sa.html` (Functions & Relations), SHA256 `6c801a0d45246191bbd1238086f7b388f08d5afdb0e8cb43d96c000d3de15645`; its we-func-2 (x = y²) is used with the site's numbers unchanged; we-func-1 (evaluating f(x)) belongs to w08. The crosswalk's gap for `ci32f9832a` (no two-set arrow picture on the site) is filled with original teaching (the mapping diagram). Route entry: `math-a11-w07`. Visual system: maths studio kit; painted plates for the machine and snacks (prefix `ma11-`, plus reused plates); mapping diagrams, graphs and the sweeping line coded.

Owner rules applied: as w01 to w06.

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Working with functions, Introduction to functions and relations; NESA codenames, official `code` field empty), quoted from `../../programme/syllabus/maths-advanced-2024-y11-crosswalk.json`:

- `ci32f9832a`: "Describe a relation between two sets as an association between the elements of one set and the elements of the other set"
- `cic0b5416c`: "Define a real function f of a real variable x as a relation where each element x of a given set is associated with exactly one element y of the second set"
- `ci9288f9fe`: "Recognise that a relation is a rule which can be represented by an algebraic formula, a table of values, a set of ordered pairs (x, y) or a graph"
- `ci9bf331ec`: "Apply the vertical line test on the graph of a relation to determine whether it represents a function"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

**Boundary:** starts from w06's handoff frame (the travel card's trips-to-balance table beside the vending machine, "Each button, one snack?"). Teaches: a set and a relation as an association between two sets (arrows); a function as a relation with exactly one output for each input; many-to-one is allowed, one-to-many is not; direction matters (the reversed relation); real functions of a real variable; one rule four ways (formula, table, ordered pairs, graph) on w06's card; the vertical line test on y = x², a circle and x = y² (site we-func-2). Stops at deciding whether a relation is a function. Not taught: f(x) notation and substitution (w08; the handoff names it only); domain and range (w09); inverse functions (not in the 2024 Advanced points); one-to-one as a named term.

## Decisions

### Revision 1 (16 Nov 2026)

- **Anchor: a snack vending machine (painted plates, live).** The pack's first suggestion and the clearest everyday picture of "one input, exactly one output": press a button, get one snack, every time. It carries all three key ideas: two buttons giving the same chips (a function may repeat outputs), a faulty button giving two different snacks (not a function), and the reversed relation, snack to button (chips points to two buttons, so not a function). Chosen over the student-ID-to-birthday idea (needs people) and the phone contact (phones are used by four Year 12 designs). The snacks avoid chocolate (w02's anchor). No Year 12 Maths video uses a vending machine.
- **Simulations (standard item 3).**
  1. `VendingPress` (scenes 1 to 3, new part): a coded highlight presses a keypad label on the painted machine; the matching snack plate drops from its slot to the tray; at the same moment an arrow draws in a `MappingDiagram` beside the machine (button set to snack set). The faulty B2 is pressed twice and drops a muesli bar, then water; its second arrow draws red. A "reverse" toggle turns every arrow round, and chips' two arrows turn red.
  2. `VerticalLineSweep` (scenes 5 and 6, kit-needs item 5): an amber vertical line sweeps left to right across a coded graph with a live readout "hits: 1" (green) or "hits: 2" (red), and the hit points marked; it pauses at chosen x values.
  3. `FourWays` (scene 4, new part): the card's rule shown as formula, table, ordered pairs and graph in four linked panels; one pair at a time lights in all four together.
- **Colour roles (fixed for the whole video).**
  - **inputs (the first set, x, buttons): blue** (`MATH_BLUE`);
  - **outputs (the second set, y, snacks): teal** (`MATH_TEAL`);
  - **a second output from one input, and "not a function": red** (`MATH_MISTAKE`, also used for crossed slips);
  - **the vertical line and its hit count: amber**;
  - **"function" verdicts and answers: green**; ink for arrows that are fine, axes and working.
- **Large type, handwritten voice.** As w01. Set ovals at least 420 px tall with element labels at 40 px. Hand tags: "same snack: fine", "two snacks: no", "a set: a collection", "arrows: a relation", "one input, one output", "reverse: no longer a function", "input first", "four ways, one rule", "hits: 1", "hits: 2", "x = 2 and x = −2 both give 4", "wrong direction", "√: the non-negative root".
- **Stage changes (standard item 2):** the machine and the faulty button (1); the mapping diagram building (2); the function check and the reverse (3); four ways (4); the sweeping line on two graphs (5); g01 board with the sideways parabola (6); memory card (7); question cards (8 to 11); the f(x) handoff (12); key notes (13).
- **Worked examples (g01 layout).** Scene 6 is site we-func-2 (x = y²), with the crossed slip "a horizontal line meets it once, so it's a function", caption "inputs sit on vertical lines". Scene 6a is original: testing x² + y = 4 and x² + y² = 9 by making y the subject (a ± is the warning sign), and a table with a repeated input; it has no separate crossed slip (feedback 1 carries one). Scene 5 carries two shorter graph checks (y = x² and the circle) in the same board style. Feedback scenes: givens strip, framed answers, one crossed slip each.
- **Memory aid.** Framed card: "One button, one snack." Key: "Each input, exactly one output; outputs may repeat. A function passes the vertical line test." Badge: the machine with A1 and B1 both arrowed to chips (green) and B2's two arrows (red).
- **Visual surprise.** Reversing the arrows (3): the same machine, the same arrows, and the function stops being a function. Second: the sweeping line on y = x² never counts more than 1, even though two inputs share every positive output.
- **Learner question (outline, kept).** Answer chain: a relation is any set of arrows between two sets (2); a function allows exactly one arrow out of each input (3); direction matters (3); with numbers, one rule has four forms (4); on a graph, inputs are vertical lines, so one hit each (5, 6).
- **Plain meanings at first use.** Set: "a collection of things, its elements". Relation: "an association between the elements of one set and the elements of another, drawn as arrows". Function: "a relation where each input has exactly one output". Input and output: "the element you start with" and "the element it's associated with". Ordered pair: "(input, output), input first". Vertical line test: "if any vertical line meets the graph more than once, it isn't a function".
- **Domain left implicit.** "Each element of the first set" is said with the machine's buttons; the word "domain" waits for w09. The vertical line test is stated as "more than once", so lines that miss the graph (outside its domain) are not a failure (key note 4 says "at most once").
- **Attempts (pack questions, original).** A1: which of {(1, 2), (2, 3), (3, 2)}, {(2, 1), (2, 5), (4, 0)}, and y = x² − 1 are functions (Revision 2: part (d), the circle, dropped); answers a and c; crossed "(a) is not a function because 2 appears twice". A2: which of y = √(x + 4) and y² = x + 4 is a function, and why; crossed "they are the same graph, so both are functions".
- **Mistake scene:** none separate. "A function can't repeat outputs" (3, 5, feedback 1 crossed); "a horizontal line test" (6 crossed); "every equation in x and y is a function" (5 and 6a, the circle); "√ gives ±" (feedback 2 crossed).
- **Handoff (outline next: w08, "What does f(x) mean, and how do we substitute into it?").** Scene 12 shows the machine with the chip "f(A1) = chips" and, beside it, the graph of y = x² with the point (3, 9) and the chip "f(3) = 9 ?", and the chip "Next: f(x), the value of f at x". This is the frame w08 should open on (open decision 1: w08 is designed by another designer at the same time).
- **Site sources used:** lesson 1 `orient-and-recall`, `what-is-a-function` (one output per input, ordered pairs, input-output mapping), `worked-examples` (we-func-2), `traps-and-classify` (repeated outputs are fine; circles and sideways parabolas). The two-set association is original teaching (crosswalk gap for `ci32f9832a`).
- **Site corrections:** none logged for lesson 1 in `../site-corrections-maths-a11.md`. The syllabus-alignment gap (relation defined only as ordered pairs on the site) is noted in the crosswalk; this video teaches the two-set picture.
- **Entry knowledge (route):** Year 10 plotting points, reading graphs and tables of values; w06's card balance (used as a familiar rule, not re-taught); w01's square roots (feedback 2 uses √ as the non-negative root).
- **Draft route entry (root to adopt).** id `math-a11-w07`; syllabusActions `ci32f9832a`, `cic0b5416c`, `ci9288f9fe`, `ci9bf331ec`; start "Recall plotting ordered pairs and drawing a graph from a table." Stop "Relation as an association between two sets; function as each input paired with exactly one output; four representations; the vertical line test." Next: "math-a11-w08: name the rule f and write f(x), the value of f at x".
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Machine mapping: A1 → chips, A2 → apple, B1 → chips, B2 → muesli bar (working); faulty B2 → muesli bar and water. Reverse: chips → A1 and B1; water → nothing (an input with no output, a second failure; Revision 2).
  (b) Card rule (w06): balance = 40 − 4t; pairs (0, 40), (1, 36), (2, 32), (3, 28); graph points only (t whole).
  (c) Graphs: y = x² (x from −3 to 3; y = 4 at x = ±2); x² + y² = 9 (x = 0: y = ±3; x = 2: y = ±√5; x = ±3: y = 0, one hit); x = y² (x = 4: y = ±2; x = 0: y = 0, one hit; x < 0: no hit). The sweep on the circle reports 1 hit at x = ±3 and 2 hits strictly between; "most lines meet it twice" is the scoped spoken claim.
  (d) A2: y = √(x + 4) has one output (√ is the non-negative root); y² = x + 4 at x = 0 gives y = ±2; at x = −4 one point (0).
  (e) Pronunciations: "A one", "B two"; "x equals y squared"; "x squared plus y squared equals nine"; "y equals root x plus four"; "f of A one"; "f of three".

Main question: *Press A1 on a snack machine and you get chips, every time. A faulty button that drops a muesli bar one day and water the next is no use. What makes a relation a function?*
Entry knowledge (Year 10, w06): plotting points, tables of values, the card's balance rule.
Stops after: relations as arrows, the function condition, reversing, four representations, the vertical line test. No f(x) notation beyond the handoff chip.
Handoff: math-a11-w08: "f(A1) = chips" and "f(3) = 9 ?".

## Script and shots

Cue words in **bold** trigger the visual change. Colour roles (fixed): inputs blue; outputs teal; a second output and "not a function" red; the vertical line amber; "function" verdicts and answers green; ink otherwise. Header strip "MATHEMATICS ADVANCED · FUNCTIONS". Scene headings in the hand font, 44 px.

### 1. hook: one button, one snack
> Here's a snack machine. Press A1, and you get a packet of chips. Press it again tomorrow, and it's chips again. That's the whole point of the machine, one button, one snack, every time. Now suppose button B2 is faulty. Sometimes it drops a muesli bar, and sometimes a bottle of **water**. You'd stop trusting it. Maths has a name for rules you can trust like this. They're called functions. So what makes a relation a **function**?

Visual: opens on w06's handoff frame exactly (trips-to-balance table with arrows at the left, the vending machine at the right, chips "Each button, one snack?" and "Next: what makes a relation a function?"). The table slides to a 260 px thumbnail at the top left (it returns in 4). The machine (`ma11-vending-machine-v1.png`) grows to 760 px tall at centre left; coded keypad labels "A1, A2, B1, B2" on its blank keypad keys and matching coded labels under its four slots (sidecar positions); the four snack plates sit in the slots: chips (`maths/ma12-chip-bag-v1.png`), apple (`maths/ma12-apple-v1.png`), chips again, and a muesli bar (`ma11-muesli-bar-v1.png`). On "Press A1" `VendingPress`: the A1 key glows blue, a chips packet drops to the tray, readout "A1 → chips"; it repeats once with a small "tomorrow" tag. On "water" B2 is pressed twice: first a muesli bar drops, then a water bottle (`chemistry/m7-pet-bottle-v1.png`, 200 px), readouts "B2 → muesli bar", "B2 → water" with the second in red, hand tag "two snacks: no". On "function" the heading writes "What makes a relation a function?".

### 2. a relation: arrows between two sets
> First, a relation. Put the buttons in one set, where a set just means a collection, and the snacks in another. A relation is an association between the elements of one set and the elements of the other. We draw it as arrows, from each button to the snack it **gives**. A1 gives chips, A2 an apple, B1 chips, and B2 a muesli **bar**. Any set of arrows like this is a relation, and some relations are more useful than others.

Visual: stage change to the `MappingDiagram` beside the machine (now 480 px at the left). Two ovals, 440 px tall: "buttons" (blue labels A1, A2, B1, B2) and "snacks" (teal labels chips, apple, muesli bar, water, each with a 70 px snack icon from its plate). Hand tag "a set: a collection". On "gives" `VendingPress` presses A1 and an ink arrow draws from A1 to chips. On "bar" A2, B1 and B2 (working) press in turn, each drawing its arrow as its snack drops. Hand tag "arrows: a relation". Water sits in the snack set with no arrow yet.

### 3. a function: exactly one output for each input
> A function is a relation where each element of the first set is associated with exactly one element of the second. One input, exactly one output. Look at A1 and B1. They both give chips, and that's fine. Two buttons can share a snack, and it's still a **function**. But the faulty B2 has two arrows, one to the muesli bar and one to the water. One input with two outputs, so this relation is not a **function**. Fix B2, so it only gives the muesli bar. Now notice water. No button gives it, and that's fine, because nothing says every output must be used. Now turn the arrows round, from snacks to buttons. Chips points to A1 and to B1, two outputs for one input. And water points nowhere, an input with no output. So the reverse is not a function, even though the original **was**. Direction matters.

Visual: camera continue on the diagram. The definition writes at the top, 44 px: "Function: each input has exactly one output", hand tag "one input, one output". On "function" (first) the arrows A1 → chips and B1 → chips glow green together, hand tag "same snack: fine", and a green verdict chip "function ✓". On "function" (second) the faulty B2 is pressed again and a second arrow B2 → water draws red; the verdict chip turns red "not a function ✗", hand tag "two snacks: no". On "Fix B2" the red arrow fades back to the working machine (B2 → muesli bar only) and the verdict returns to green "function ✓". On "Now notice water", with the arrows still running from buttons to snacks, water glows in the snacks (outputs) oval with a grey tag "no arrow in: allowed" (hand tag "outputs may go unused"). On "Now turn the arrows round" the grey tag fades, the ovals swap sides and every arrow reverses; the ovals relabel "inputs: snacks" and "outputs: buttons". While "Chips points to A1 and to B1" is spoken, chips' two arrows turn red. While "water points nowhere" is spoken, water (now in the inputs oval) gets a red tag "input, no output: not allowed". On "was" the verdict "reverse: not a function ✗" writes in red, hand tag "reverse: no longer a function", with both failures (chips' two red arrows, water's red tag) still lit.

### 4. one rule, four ways
> In maths, the inputs and outputs are usually real numbers, an input x and an output y. A relation between them is a rule, and the same rule can be written four ways. Take the travel card from last time. As a formula, the balance is forty minus four t. As a table, zero trips gives forty, one gives thirty-six, and two gives **thirty-two**. As ordered pairs, with the input first, that's zero, forty, then one, thirty-six, and so **on**. And as a graph, those pairs become **points**. Four pictures of one rule, and in each one, every input has exactly one output. Whatever form a rule takes, the function test is the same.

Visual: stage change to `FourWays`: four linked panels (each about 860 × 420 px) in a 2 × 2 grid, the card thumbnail (200 px) at the top centre. Panel 1 "formula": "balance = 40 − 4t" (t blue, balance teal). Panel 2 "table": rows t 0, 1, 2, 3 and balance 40, 36, 32, 28 fill on "thirty-two". Panel 3 "ordered pairs": "(0, 40), (1, 36), (2, 32), (3, 28)" write on "on", hand tag "input first". Panel 4 "graph": axes t 0 to 4, balance 0 to 40; on "points" the four points plot. Then one pair at a time lights in all four panels together ((2, 32) in the formula as 40 − 4(2), in the table row, in the pair list and on the graph), hand tag "four ways, one rule". On the last sentence a vertical amber tick rises through each point on the graph, each meeting one point.

### 5. the vertical line test
> On a graph, there's a quick check. Every input x sits on a vertical line, so if any vertical line meets the graph more than once, that input has two outputs, and it's not a function. That's the vertical line test. Watch a line sweep across y equals x squared. It always meets the curve exactly **once**, so y equals x squared is a function. Notice x equals two and x equals minus two both give four. That's like A1 and B1 sharing chips. Repeated outputs are **fine**. Now sweep across a circle, x squared plus y squared equals nine. Most vertical lines meet it **twice**, so the circle is not a function.

Visual: stage change to `VerticalLineSweep` on a 1,100 × 760 px plot (x −4 to 4, y −4 to 10 for the parabola). The rule writes at the top: "Vertical line meets the graph more than once → not a function". On "once" y = x² draws (ink, label 44 px) and the amber line sweeps from x = −3 to 3, readout "hits: 1" (green) throughout, hand tag "hits: 1"; verdict "function ✓". The line pauses at x = 2 and x = −2 with both points at y = 4 marked teal and a teal dashed horizontal link between them; on "fine" the hand tag "x = 2 and x = −2 both give 4" with a tiny machine badge "A1, B1 → chips". The plot clears to x −4 to 4, y −4 to 4 (equal scales); on "twice" the circle x² + y² = 9 draws and the line sweeps: "hits: 2" (red) between −3 and 3, "hits: 1" at exactly ±3; it pauses at x = 0 with (0, 3) and (0, −3) marked red; verdict "not a function ✗".

### 6. worked example: x = y²
> Here's a worked example. Determine whether the graph of x equals y squared represents a function. It's a sideways parabola, opening to the right. Take the vertical line x equals **four**. On it, y squared is four, so y is two or minus two. The line meets the graph **twice**. One input, four, has two outputs, two and minus two, so x equals y squared is not a **function**. A horizontal line meets it only once, but that tests the wrong thing. Inputs sit on vertical lines, so the test is **vertical**.

Visual: clear change to the g01 board (site we-func-2) with a 760 px plot at the right. Task strip: "Determine whether the graph of x = y² represents a function". Equation strip: "x = y²". Givens: "test: vertical line". The sideways parabola draws (x 0 to 6, y −3 to 3). On "four" the amber line x = 4 rises; rows "y² = 4", "y = 2 or y = −2". On "twice" the points (4, 2) and (4, −2) mark red, readout "hits: 2". On "function" row "one input, two outputs: not a function" in a framed answer (green frame, red "not a function" verdict text). On "vertical" a red slip "a horizontal line meets it once, so it's a function" writes with a dashed horizontal line through the graph and is crossed, caption "inputs sit on vertical lines".

### 6a. worked example: testing a formula without a graph
> You can also test a formula with algebra. Make y the subject, and count how many values it gives. Is x squared plus y equals four a function? Rearranged, y equals four minus x squared, and each x gives just one value, so it's a **function**. Now try our circle, x squared plus y squared equals nine. Rearranged, y squared is nine minus x squared, so y is plus or minus the root of nine minus x squared. That plus or minus gives two outputs for most inputs, so the circle is not a **function**. A plus or minus in front of the root is the warning **sign**. And when the rule is a table or a list of pairs, look for an input that appears twice with different outputs.

Visual: clear change to a two-task board in the g01 style. Task 1 strip: "Is x² + y = 4 a function?". Rows: "y = 4 − x²", hand tag "make y the subject"; on "function" (first) a framed verdict "one y for each x: function" (green), with a 360 px thumbnail of the downward parabola and a sweeping amber line reading "hits: 1". Task 1 shrinks to 32 px. Task 2 strip: "Is x² + y² = 9 a function?". Rows: "y² = 9 − x²", "y = ±√(9 − x²)" with the ± circled red; on "function" (second) a framed verdict "two y values for most x: not a function", with the circle thumbnail from scene 5. On "sign" the hand tag "± : warning sign". On the last sentence a small table "x: 1, 2, 2 · y: 5, 3, 7" writes with the two 2s circled red, hand tag "same input, different outputs".

### 7. memory aid
> Here's a way to remember it. One button, one snack. Each input gets exactly one output, but two inputs may share an output. On a graph, any vertical line meets a function at most **once**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the machine badge (260 px) with A1 and B1 arrowed to chips in green and B2's two arrows in red. Main line, hand font 60 px: "One button, one snack." On "once" the key lines, 40 px: "Each input, exactly one output. Outputs may repeat." and "Any vertical line meets a function at most once." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. Decide which of the three relations on the card are functions, and give a reason for each. Pause here to answer.

Visual: `QuestionCard`, 40 px: "Which of the following relations are functions? Give a reason for each. (a) {(1, 2), (2, 3), (3, 2)} (b) {(2, 1), (2, 5), (4, 0)} (c) y = x² − 1". Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing (no graphs drawn).

### 9. feedback 1 (brief)
> A is a function. Each input, one, two and three, appears once. The output two is repeated, and that's **fine**. B is not, because the input two has two outputs, one and **five**. C is a function, because each x gives one value of x squared minus **one**. Saying A fails because two appears twice is the classic slip. Only repeated inputs **matter**.

Visual: the card shrinks to the top; each part is underlined as it is used. On "fine" a mini mapping diagram for (a): inputs 1, 2, 3; outputs 2, 3; 1 and 3 both arrow to 2 (green), verdict "(a) function". On "five" the mini diagram for (b): input 2 with two red arrows to 1 and 5, verdict "(b) not a function". On "one" a small graph of y = x² − 1 with a sweeping line, "hits: 1", verdict "(c) function". On "matter" a red slip "(a) not a function: 2 appears twice" writes and is crossed, caption "repeated outputs are fine". Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. One of y equals root x plus four, and y squared equals x plus four, is a function. Which is it, and why? Pause here to answer.

Visual: `QuestionCard`: "One of y = √(x + 4) and y² = x + 4 is a function. State which one, and explain why the other is not." Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing (no graphs).

### 11. feedback 2 (brief)
> y equals root x plus four is the **function**. The root sign means the non-negative root, so each x gives just one **output**. y squared equals x plus four is not. At x equals zero, y squared is four, so y is two or minus two, and the vertical line x equals zero meets it **twice**. They aren't the same graph. The root sign keeps only the top **half**.

Visual: the card shrinks; `GivensStrip`: "y = √(x + 4)", "y² = x + 4". On "function" a framed green verdict "y = √(x + 4): function". On "output" its graph draws (the upper half of the sideways parabola from (−4, 0)), with the tag "√: the non-negative root", and a sweeping line "hits: 1". On "twice" the full sideways parabola y² = x + 4 draws in ink with the line x = 0 meeting (0, 2) and (0, −2) in red, row "y² = 4, y = ±2: not a function". On "half" a red slip "same graph, so both are functions" writes and is crossed; the lower half of y² = x + 4 flashes, caption "√ keeps only the top half". Hold about 1 s.

### 12. handoff
> So a function gives each input exactly one output, and that makes it worth giving a name. Next, we'll call the machine's rule f, and write f of A1 equals chips. The letter f names the rule, and the brackets hold the input. With numbers, f of three is the value of f at three, the one output that three gives. What does that notation mean, and how do we **use** it?

Visual: the memory line shows small at the top, then fades. Left: the machine (560 px) with the A1 key glowing and a chip, 52 px, "f(A1) = chips" (A1 blue, chips teal). Right: a 700 px graph of y = x² with the point (3, 9) marked and a dashed amber vertical line from x = 3 to the point; on "use" the chip "f(3) = 9 ?" writes. Chip "Next: f(x), the value of f at x". Hold about 2 s. This is the frame w08 should open on; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book". Bullets 38 px in the left 58 to 60 per cent.
> Here are the key notes. Pause the video if you need more time to copy them.

- Relation: an association between two sets (arrows).
- Function: each input has exactly one output.
- Outputs may repeat; inputs may not have two outputs.
- Vertical line test: meets at most once, so a function.
- One rule four ways: formula, table, ordered pairs, graph.

Memory aid (framed card, right side, as in scene 7): *One button, one snack.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and the frame w08 should open on.

## Teaching checks

- **Does it explain causes?** Why a faulty button breaks the machine's usefulness: one input, two outputs (1, 3). Why sharing a snack is fine: each button still has one output (3). Why direction matters: the reversed arrows give chips two outputs and leave water, now an input, with none (3). Why an unused output is fine but an input with no output is not (3, Revision 2). Why the vertical line test works: every input is a vertical line, so two hits mean two outputs for one input (5, 6). Why a horizontal line is the wrong test: inputs are not horizontal lines (6). Why a ± warns: it gives two y values for one x (6a). Why √(x + 4) is a function: √ means the non-negative root (feedback 2).
- **Misconceptions addressed:** "functions can't repeat outputs" (3, 5, feedback 1 crossed); "horizontal line test" (6 crossed); "every x-y equation is a function" (5, 6a); "√ gives ±" (feedback 2 crossed); "a relation is only a formula" (4).
- **Visual standard, item by item:** 1 the painted machine and snacks from the first frame, returning in 2, 3, 5 (badge), 7 and 12; 2 a new stage every 30 to 60 s; 3 `VendingPress` building the mapping live, `VerticalLineSweep` with a live hit count, `FourWays` lighting one pair across four panels; 4 fixed colour roles; 5 large type; 6 hand tags; 7 g01 board with a framed answer and crossed slip; 8 framed card and five bullets; 9 the reversed arrows breaking the function, and the sweep never exceeding one hit on y = x².
- **One idea at a time:** relation (2), then function (3), then representations (4), then the graph test (5, 6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 25 s each (Revision 2: feedback 1 now covers three parts).
- **Avoided double teaching:** w06's card rule is reused as a known rule; plotting points is recalled.
- **Syllabus coverage:** `ci32f9832a` (2, 3); `cic0b5416c` (3, 4, 5, 6a); `ci9288f9fe` (4, 6a, A1 mixes pairs and formulas); `ci9bf331ec` (5, 6, A2).
- **Out of scope by design:** f(x) notation (w08); domain and range (w09); inverses.

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original, HSC style, 3 marks suggested, not an official marking scheme).** "Which of the following relations are functions? Give a reason for each. (a) {(1, 2), (2, 3), (3, 2)} (b) {(2, 1), (2, 5), (4, 0)} (c) y = x² − 1" (part (d), x² + y² = 9, dropped in Revision 2: it repeated scene 5's own example)
Model answer: (a) function: each input appears once (the repeated output 2 is allowed). (b) not a function: input 2 has outputs 1 and 5. (c) function: each x gives one value of x² − 1. Classic mistake (crossed): "(a) is not a function because 2 appears twice".

**Attempt 2 (scene 10; pack question 2, original, HSC style, 2 marks suggested).** "One of y = √(x + 4) and y² = x + 4 is a function. State which one, and explain why the other is not."
Model answer: y = √(x + 4) is a function: √ gives the non-negative root, so each x has one output. y² = x + 4 is not: at x = 0, y = 2 or y = −2, so the vertical line x = 0 meets it twice. Classic mistake (crossed): "they are the same graph, so both are functions".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Machine | A1 → chips, A2 → apple, B1 → chips, B2 → muesli bar; faulty B2 → muesli bar and water; reverse chips → A1, B1, water → nothing | 1, 2, 3, 7, 12 |
| Card rule | 40 − 4t; (0, 40), (1, 36), (2, 32), (3, 28) | 4 |
| y = x² | x = ±2 → 4; one hit everywhere | 5 |
| Circle | x² + y² = 9: x = 0 → ±3; x = ±3 → 0 (one hit); two hits for −3 < x < 3 | 5, 6a |
| we-func-2 (site) | x = y²; x = 4 → y = ±2; two hits | 6 |
| Formula test | x² + y = 4 → y = 4 − x² (function); x² + y² = 9 → y = ±√(9 − x²) (not); table x 1, 2, 2 with y 5, 3, 7 (not) | 6a |
| A1 | (a) function; (b) 2 → 1 and 5, not; (c) function | 8, 9 |
| A2 | √(x + 4) function; y² = x + 4 at x = 0: ±2, not | 10, 11 |
| Handoff | f(A1) = chips; y = x², f(3) = 9 | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy (16 Nov, scratchpad `checks2.py`); Codex to re-check.

- x = y²: at x = 0, y = 0; x = 1, y = ±1; x = 4, y = ±2.
- x² + y² = 9: at x = 0, y = ±3; x = 2, y = ±√5; x = 3, y = 0.
- y² = x + 4: at x = 0, y = ±2; x = −4, y = 0; x = 5, y = ±3.
- y = x²: 2² = (−2)² = 4; 3² = 9.
- x² + y = 4 ⟺ y = 4 − x²; x² + y² = 9 ⟺ y = ±√(9 − x²) (two values for −3 < x < 3).
- Card: 40 − 4t at t = 0, 1, 2, 3: 40, 36, 32, 28.

## Memory aid check

- **"One button, one snack."** Original. Meaning, as said: each input has exactly one output; two inputs may share an output; on a graph, any vertical line meets a function at most once. Assumptions checked: "at most once" (not "exactly once") because a vertical line outside the domain meets nothing, and that is allowed; "one snack" means one output, not one kind of output per machine. The machine is idealised (a working machine with stock). Introduced after the definition (3) and the test (5, 6).
- **Considered, not used:** "Every x has one y" (correct but forgettable); "the horizontal line test" (a different idea, one-to-one, outside this video).

## Narration length estimate

Recounted for Revision 2 (16 Nov 2026). Counted by script with the build parser rules: **5,516 characters**, 14 scene headings. Characters per scene (1 to 6, 6a, 7 to 13): 423, 415, 789, 610, 592, 486, 653, 184, 123, 333, 136, 337, 360, 75.

At 13.3 characters per second the speech before the notes is about 409 s. Holds: two 10 s countdowns, memory-card hold 2 s, feedback holds 2 s, handoff hold 2 s, about 12 s of settling (presses and drops, the reversal, the sweeps); notes 45 s. Total **about 492 s**, inside the band and under the cap.

Reserve trims if the voiced take runs long: scene 1's "Press it again tomorrow, and it's chips again." (keep the repeat press, about 3 s); scene 4's "and so on" clause (about 1 s).

## Scene list and build ids

Lesson key `m-a11w07` (route math-a11-w07). Explainer folder `src/explainer/lessons/math-a11-w07`; build inputs in `docs/production/claude-pm/lessons/math-a11-w07/` (at voicing).

In order (14 scene headings; 6a sits between 6 and 7): hook-machine, relation-arrows, function-one-output, four-ways, vertical-line-test, worked-sideways, worked-formula-test, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (seconds from the estimate):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 33 s | 1 | The painted machine: presses, drops and the faulty B2 |
| 33 to 121 s | 2 to 3 | Mapping diagram building live; the function check and the reversal |
| 121 to 169 s | 4 | FourWays: the card rule as formula, table, pairs and graph |
| 169 to 215 s | 5 | VerticalLineSweep on y = x² and the circle |
| 215 to 304 s | 6 to 6a | g01 boards: x = y² (site we-func-2), then testing a formula by algebra |
| 304 to 320 s | 7 | Framed memory card |
| 320 to 419 s | 8 to 11 | Question cards and countdowns, then feedback with mini diagrams, graphs and crossed slips |
| 419 to 448 s | 12 | f(A1) = chips beside y = x² with f(3) = 9 ? |
| 448 to 493 s | 13 | Key notes with the framed card, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempts and key-notes (`hold`). Transitions: w06's last frame continues into 1; 1 to 2 stage change (the machine moves left for the diagram); 2 to 3 camera continue; 3 to 4 stage change to four panels; 4 to 5 stage change to the sweep; 5 to 6 clear change; 6 to 6a clear change (new task); 6a to 7 clear change to the card; attempts and feedback: the card shrinks; 11 to 12 board clear; 12 to 13 fade, then a silent return to scene 12's frame.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11w07-rev1-learning-review.md`, `science_check` = `checks/m-a11w07-rev1-maths-check.md`.

## Assets

Inspected before choosing (16 Nov, read only, actual appearance):
- `maths/ma12-chip-bag-v1.png` (1086 × 1448, an open orange chip packet with a yellow diagonal band, no print): reused as the chips snack. Its open top reads as "just opened", acceptable for a dropped packet; the sidecar's mouth rectangle is not needed.
- `maths/ma12-apple-v1.png` (red and green apple with a leaf): reused as the apple.
- `chemistry/m7-pet-bottle-v1.png` (2000 × 2000, a clear empty PET bottle with a white cap): reused as "water" (a clear bottle reads as water; labelled in code).
- No vending machine or muesli bar plate exists.

Need (painted, new): `ma11-vending-machine-v1`, `ma11-muesli-bar-v1`.

Coded: keypad and slot labels, the press highlight, the drop motion, mapping ovals and arrows, the four panels, graphs, the sweeping line and hit readout, working boards, cards, countdown, hand tags, key notes.

### Studio kit use and additions

Uses: `MATH_ROLES`, `Role`, `HandTag`, `DrawnMark`, `PlateImg`, `LiveReadoutBoard`, `StudioPlot`, `FunctionGraph`, `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`, `GivensStrip`.

Additions:
1. **`MappingDiagram`** (kit-needs item 5): two labelled set ovals with element labels (and optional icons), arrows drawn on cues, per-arrow colour, a `reverse` mode that swaps ovals and arrow directions, and a computed verdict ("function" if every input has exactly one arrow out). Check: the verdict is computed from the arrows, never typed.
2. **`VerticalLineSweep`** (kit-needs item 5): a vertical line moving across a `StudioPlot` with a live hit count computed from the relation (explicit y = f(x), implicit F(x, y) = 0 or x = g(y)), hit points marked, pauses at chosen x. Check: the count equals the number of real solutions y at the line's x.
3. **`VendingPress`**: keypad highlight, snack plate drop from slot to tray (sidecar rectangles), linked to `MappingDiagram` arrows. Check: each drop draws exactly the arrow for that press.
4. **`FourWays`**: four linked panels from one data list; one index lights across all panels. Check: all panels render from the same pairs.

## Codex asset brief (Maths A11 W07, a snack vending machine)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-w07.md`, route entry math-a11-w07. Paint after the learning review and maths check pass and root gives the go-ahead. Save to `public/assets/maths/`. Transparent PNG with a true alpha channel, clean edges; ink and watercolour in the house style, matched to `maths/ma12-chip-bag-v1.png`; at least 8 per cent clear margin; no text, letters, numbers, prices, logos, brand names, people, hands, faces, backdrop, glow or ground shadow. Never stretch.

1. `ma11-vending-machine-v1.png` (1600 × 2400 px): a generic snack vending machine, front view, plain dark-grey cabinet with a large glass front showing **four empty spiral slots in two rows of two** (the snacks are separate plates placed by code), a plain keypad panel at the right with **four blank square keys** and a coin slot, and an empty pick-up tray behind a flap at the bottom. Keys and slots are blank (code labels them A1, A2, B1, B2).
2. `ma11-muesli-bar-v1.png` (1200 × 600 px): one wrapped muesli bar in a plain kraft-brown wrapper with a simple green band, crimped ends, no print, matched in scale to `ma12-chip-bag-v1.png` so that both fit a spiral slot.

Sidecar JSON (`ma11-vending-machine-v1.json`): each slot's rectangle, each key's rectangle, the tray's drop target rectangle and the drop path's top and bottom points in px. Report a fit test with the chip bag, the apple, the PET bottle and the muesli bar placed in the slots at one shared scale.

Report inspection on the paper background (`#f6f1e7`) at 300 px and 600 px and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-w07-provenance.json`. The machine is also needed for w06's handoff frame, so paint it before the w06 build.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the function definition matches `cic0b5416c` in meaning and that "at most once" is used for the vertical line test in the card and notes.
3. Confirm the sweep's hit counts (author note c), including one hit at x = ±3 on the circle, and that the spoken claim is "most vertical lines".
4. Confirm the mapping verdicts and the reverse are computed from the arrows (author note a).
5. Confirm site we-func-2 is unchanged and both attempts carry every demand ("give a reason for each"; "explain why the other is not").
6. Confirm the four syllabus quotes match the crosswalk exactly; no site label in learner copy or metadata; no f(x) teaching beyond the handoff chip.
7. Confirm no em dash (U+2014), Australian spelling, narration counts by script, and every bold cue quoted in its scene's Visual in spoken order.
8. Confirm scene 1 opens on w06's final frame and record whether w08's opening matches scene 12's frame.

## YouTube metadata (draft)

Title: What Makes a Relation a Function? Vertical Line Test | Year 11 Maths Advanced

(Title length: 79 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/working-with-functions/lesson01.sa.html

Press A1 on a snack machine and you get chips, every time. A faulty button that gives two different snacks is no use, and that is the idea of a function. See relations as arrows between two sets, why each input must have exactly one output (while outputs may repeat), why reversing the arrows can break a function, how one rule can be a formula, a table, ordered pairs or a graph, and how the vertical line test works on y = x², a circle and x = y². Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Working with functions.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Describe a relation between two sets as an association between the elements of one set and the elements of the other set"
"Define a real function f of a real variable x as a relation where each element x of a given set is associated with exactly one element y of the second set"
"Recognise that a relation is a rule which can be represented by an algebraic formula, a table of values, a set of ordered pairs (x, y) or a graph"
"Apply the vertical line test on the graph of a relation to determine whether it represents a function"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

Builds on: Year 10 graphs and tables; the travel card rule (previous video). Next: Function notation f(x).

#Year11Maths #MathsAdvanced #Functions #HSCScience

## Open decisions

- **1. w07 to w08 join (root).** w08 is being designed at the same time by another designer. This design ends on the machine with "f(A1) = chips" beside y = x² with "f(3) = 9 ?". If w08's opening differs, root picks one: either w08 opens on this frame, or this scene 12's visual changes to w08's chosen opening (narration "f of three is the value of f at three" stays true either way). w08 should not reuse a vending machine as its own anchor.
- **2. Feedback 1 length (root).** Resolved in Revision 2: part (d) dropped (root ruling), about 25 s for three parts. If it still runs over in the voiced take, cut "Each input, one, two and three, appears once." (keep the diagram).
- **3. Reused plates (root).** The chip bag (s09) and apple (s10) are reused as snacks; the anchor context (a vending machine) is new. Root to confirm this counts as plate reuse, not a shared anchor.
- **4. Plate prefix `ma11-` (root),** as w01.

## Review notes

- Revision 2 (16 Nov 2026): the independent learning review (`../checks/m-a11-w07-learning-review.md`) is resolved; see the Revision 2 section. Next: Codex maths check and error check, then voicing and a build to grade A.
- Revision 1 has had no independent review. Next: student learning review (trace from Year 10 graphs only; check that the machine makes "exactly one output" concrete; that the reversal is a surprise rather than a confusion; that the step from buttons to real numbers in 4 is clear; that the sweep makes the vertical line test's reason visible), then the Codex maths check and error check, then voicing and a build to grade A.
- The presses, the reversal and the sweeps carry the explanation; judge them at playback speed.
