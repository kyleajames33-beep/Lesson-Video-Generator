# Maths A11 W06: Why does multiplying by a negative flip an inequality? Safe moves, the mirror through zero, solving linear inequalities, and graphing rays with open and closed circles (design)

Status: Revision 2 (16 Nov 2026): independent learning review resolved (see "Revision 2" below); not voiced. Revision 1 (16 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`, d01 Revision 6 and s01 Revision 4 patterns). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,606 characters by script (build parser rules), 14 scene headings, about 499 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (16 Nov): learning review resolved

Review: `../checks/m-a11-w06-learning-review.md` (summary `../checks/m-a11-w01-w31-learning-review-summary.md`), with root's rulings of 16 Nov. Findings by the review's numbers:

1. Optional, feedback 1 ("minus nothing"): **accepted**: "Five minus three times zero is five"; the test dot reads "5 − 3(0) = 5 ≤ 17 ✓".
2. Optional, scene 5 (show "2x ≥ 6"): **no change needed**; the third number-line row already writes "2x − 1 ≥ 5, so 2x ≥ 6, x ≥ 3".

Narration now 5,606 characters by script, about 499 s with holds (see "Narration length estimate"). Stage-plan times below are Revision 1 approximations; frames come from the recording's word timings. Every changed value was rechecked with SymPy (scratchpad `rev2_verify.py`); Codex's maths check remains the authority.

Scope: sixth video of Year 11 Mathematics Advanced (2024), outline order 6, Working with functions, Linear functions group. Pre-design pack: `../pre-design/maths-a11/math-a11-w06.md`. Site lessons (read through the pack, read only): `algebraic-techniques-and-inequalities/lesson01.sa.html` (Solving Linear Inequalities), SHA256 `8c481deafc9189f66207b253265150a6138d24b296aba4f7eae82ee5dfb33e7c`, and `lesson02.sa.html` (Inequalities on a Number Line and in Interval Notation), SHA256 `39e6868303a0b8de20d67adf964532740cac4250810fdc641fdf27ec9ab71b28`. Site AT01 we-2 and we-3 and AT02 we-1 to we-3 are used with the site's numbers unchanged (AT02's as short demonstrations); AT01 we-1 (3x + 5 < 17) is left to the notes as no new idea. Route entry: `math-a11-w06`. Visual system: maths studio kit; painted plates for the travel card and reader (prefix `ma11-`); number lines, the multiplier dial and algebra coded.

Owner rules applied: as w01 to w05.

Syllabus content point (Mathematics Advanced 11-12 (2024), Year 11, Working with functions, Linear functions; NESA codename, official `code` field empty), quoted from `../../programme/syllabus/maths-advanced-2024-y11-crosswalk.json`:

- `ci6e28857f`: "Solve linear inequalities and graph the solution on a number line"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

**Boundary:** starts from w05's handoff frame ("1600 − 8T ≥ 0", "−8T ≥ −1600", "÷ (−8): T ? 200"). Teaches: an inequality and its solution set as a ray; the moves that keep the order (adding, subtracting, multiplying or dividing by a positive); why multiplying or dividing by a negative reverses the order (the mirror through 0, watched on a multiplier dial); solving with the flip, checking with a test value, and the "move the term across" alternative; graphing with open and closed circles and an arrow; reading an inequality from a graph. Stops at linear inequalities on a number line. Not taught: interval notation (w09; the site's lesson 2 interval material is deferred); compound and double inequalities; quadratic inequalities (w18); absolute value inequalities (w31).

## Decisions

### Revision 1 (16 Nov 2026)

- **Anchor: a prepaid travel card with $40, $4 a trip (painted plates, live).** Chosen over the pack's phone data cap (phones are d03, i03, t04 and f14's contexts), the concert savings (no negative coefficient, so no flip) and the speed-limit sign (no negative either). A card balance is something that runs down, which is exactly where negative coefficients come from in real problems: 40 − 4t ≥ 8. It also carries the reason for the flip in plain terms: more trips means a smaller balance (2 trips leave $32, 5 trips leave $20), so the minus sign reverses the order. Travel category; generic card and reader, no network or brand. No Year 12 Maths video uses a travel card (s07's bus stop is a waiting-time context; this is a balance context).
- **Simulations (standard item 3).**
  1. `CardTaps` (scenes 1 and 4, new part): the painted card taps onto the painted reader; each tap ticks a trip counter and the reader's blank screen shows the coded balance ($40, $36, … $0) while a blue balance bar shrinks; a dashed amber line marks "$8 kept". In the hook the taps run to 10 trips ($0) against the wrong answer "t ≥ 8".
  2. `MultiplyDial` (scene 3, new part on `ParameterSlider` and `NumberLineRay`): a slider for a multiplier k sweeps 2 → 1 → 0 → −1 → −2; two points 2k and 5k move on a number line, with a live readout "2k ? 5k" showing "<", then "=" at k = 0, then ">" for every negative k. At k = −1 the points also draw as a mirror through 0 (a violet dashed fold line). The visual surprise happens here.
  3. `NumberLineRay` (scenes 5 to 7, kit-needs item 4): the ray draws from its circle with an arrow; a test-value dot drops onto the line and turns green inside or red outside the ray.
- **Colour roles (fixed for the whole video).**
  - **the solution ray and the balance: blue** (`MATH_BLUE`);
  - **the inequality sign: amber** (`MATH_AMBER`), circled whenever it flips;
  - **negative multipliers and the mirror: violet**; **positive multipliers: teal**;
  - **test values: green inside, red outside**; **answer: green**; **mistake: red**; ink otherwise.
- **Large type, handwritten voice.** As w01. Number lines at least 1,200 px wide with tick labels at 34 px. Hand tags: "nothing left?", "a set of numbers", "slide: order kept", "stretch: order kept", "mirror: order swapped", "flips at 0", "more trips, less money", "flip!", "or move 4t across", "open: not included", "closed: included", "arrow to the solutions", "whole trips: 0 to 8", "test value", "no flip: positive 4", "reason with the answer".
- **Stage changes (standard item 2):** the card and the wrong answer (1); slide and stretch on a number line (2); the multiplier dial (3); the card again, fixed (4); number-line drawing board (5); two g01 boards (6, 7); memory card (8); question cards (9 to 12); the vending machine handoff (13); key notes (14).
- **Worked examples (g01 layout).** 4: the card (crossed "t ≥ 8", caption "dividing by −4 flips the sign"). 6: AT01 we-2 (crossed "x ≥ −5", test value 0 fails). 7: AT01 we-3 (crossed "closed circle at 4", caption "4 × 3 = 12 is not > 12"). Feedback scenes: givens strip, framed answer and graph, one crossed slip each.
- **Memory aid.** Framed card: "A negative is a mirror." Key: "× or ÷ by a negative flips the number line, so flip the sign. Adding, subtracting and positives never flip it." Badge: 2 and 5 mirrored to −2 and −5.
- **Visual surprise.** On the dial the order readout flips from "<" to ">" exactly as k crosses 0, and at k = −1 the two points visibly fold through zero.
- **Context condition in learner copy.** "Trips are whole numbers here, so the card allows 0 to 8 trips" is said once (5), because the algebra's ray includes non-whole values; the ray stays the answer to the inequality itself.
- **Learner question (outline, kept).** Answer chain: an inequality's solution is a set (2); slides and positive stretches keep the order (2); a negative multiplier mirrors the line through 0, so the order swaps (3); so flip the sign, or avoid the division (4); draw the answer with the right circle and arrow (5 to 7).
- **Plain meanings at first use.** Inequality: "a statement that one side is less than, or greater than, the other". Solution set: "all the numbers that make it true". Ray: "a piece of the number line that starts at a point and runs off in one direction". Open circle and closed circle: "end value not included" and "end value included". Test value: "a number you substitute to check the side".
- **Attempts (pack questions, original).** A1: 5 − 3x ≤ 17 gives x ≥ −4 (closed circle, arrow right); crossed "x ≤ −4". A2: (2x + 1)/3 > x − 1 gives x < 4 (open circle, arrow left); crossed "x < 2" (the 3 multiplied only x).
- **Mistake scene:** none separate. No flip (1, 6 crossed, feedback 1 crossed); flipping for a positive (7, tag "no flip: positive 4"); wrong circle (7 crossed); partial multiplication (feedback 2 crossed); arrow drawn from the variable side (5, positively).
- **Handoff (outline next: w07, "What makes a relation a function?").** Scene 13 resolves w05's "T ? 200" to "T ≤ 200", then shows the card's trips-to-balance table (0 → 40, 1 → 36, 2 → 32, 3 → 28) with arrows, beside the painted vending machine and the chip "Each button, one snack?". This frame is w07's opening frame.
- **Site sources used:** lesson 1 `solving-inequalities-the-flip-rule`, `one-step-and-two-step`, `model` (we-2, we-3; we-1 recorded as no new idea), traps (no flip, flipping for a positive); lesson 2 `open-circle-closed-circle-and`, `drawing-inequalities-on-a-number`, `model` (we-1 x > 2, we-2 closed at −3 arrow left, we-3 2x − 1 ≥ 5) used as short demonstrations in 5. The site's wage problem and speed-limit revisits are not used. Interval notation from lesson 2 is deferred to w09.
- **Site corrections:** none found for lessons 1 and 2.
- **Entry knowledge (route):** Year 10 solving linear equations; the number line. w05 is the prior video (its handoff gives the opening question), but no w05 content is needed.
- **Draft route entry (root to adopt).** id `math-a11-w06`; syllabusActions `ci6e28857f`; start "Recall solving a two-step linear equation." Stop "Solve linear inequalities, explain the flip when multiplying or dividing by a negative, and graph solutions on a number line with open and closed circles." Next: "math-a11-w07: each trip count gives one balance; is every rule like that?".
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Card: balance 40 − 4t; t = 0 to 10: 40, 36, 32, 28, 24, 20, 16, 12, 8, 4, 0. 40 − 4t ≥ 8 ⟺ t ≤ 8 (whole t: 0 to 8). Move-across route: 40 − 8 ≥ 4t ⟹ 32 ≥ 4t ⟹ t ≤ 8.
  (b) Dial: points 2k and 5k; k = 2: 4 < 10; k = 1: 2 < 5; k = 0: 0 = 0; k = −1: −2 > −5; k = −2: −4 > −10. For k < 0, 2 < 5 ⟹ 2k > 5k.
  (c) w05 handoff: −8T ≥ −1600 ⟹ T ≤ 200.
  (d) Pronunciations: "minus four t is greater than or equal to minus thirty-two"; "t is less than or equal to eight"; "x is greater than four"; "two x plus one, over three".

Main question: *A travel card has $40, each trip costs $4, and you want at least $8 left. Solving 40 − 4t ≥ 8 like an equation gives t ≥ 8, but ten trips leave nothing. Why does multiplying by a negative flip an inequality?*
Entry knowledge (Year 10): solving linear equations; the number line.
Stops after: the safe moves, the flip with its reason, solving and checking, graphing with open and closed circles, reading a graph. No interval notation.
Handoff: math-a11-w07: the card's trips-to-balance table beside the vending machine, "Each button, one snack?".

## Script and shots

Cue words in **bold** trigger the visual change. Colour roles (fixed): solution ray and balance blue; inequality sign amber; negative multiplier and mirror violet; positive multiplier teal; test values green inside, red outside; answer green; mistake red; ink otherwise. Header strip "MATHEMATICS ADVANCED · LINEAR INEQUALITIES". Scene headings in the hand font, 44 px.

### 1. hook: the card that runs out
> Last time, the kayak shop needed minus eight T to be at least minus sixteen hundred, and dividing by minus eight looked routine. Let's test that on something simpler. Here's a travel card with forty dollars on it. Each trip costs four dollars, and you want to keep at least eight dollars on the card. After t trips the balance is forty minus four t, so we need forty minus four t to be greater than or equal to **eight**. Solve it like an equation. Take forty from both sides, so minus four t is at least minus thirty-two. Divide by minus four, and you get t is at least eight. But ten trips leave nothing on the **card**. That can't be right. So why does multiplying by a negative flip an inequality?

Visual: opens on w05's handoff frame exactly (jetty badge; "Δ ≥ 0", "1600 − 8T ≥ 0", "−8T ≥ −1600", "÷ (−8): T ? 200" with a red-pencil "?"). The rows shrink to a 30 px strip at the top right (answered in 13). The painted reader (`ma11-travel-card-reader-v1.png`, 520 px tall) stands at the left; the card (`ma11-travel-card-v1.png`, 300 px wide) beside it. The reader's blank screen shows "$40.00" (coded, sidecar screen rectangle). Heading writes "The card that runs out". A blue balance bar (0 to 40) at the right with a dashed amber line at 8, tag "$8 kept". On "eight" the row "40 − 4t ≥ 8" writes at 52 px (≥ amber). Rows: "−4t ≥ −32", then a grey-pencil "÷ (−4): t ≥ 8". On "card" `CardTaps` runs: the card taps the reader ten times (about 4 s); the trip counter ticks 1 to 10, the screen balance falls $36 … $0, the bar empties past the $8 line; the wrong row "t ≥ 8" gets a large red "?" and hand tag "nothing left?".

### 2. what an inequality is, and the moves that keep it
> First, what an inequality is. It says one side is less than, or greater than, the other, and its solution is usually a whole set of numbers, not just one. On a number line, that set is a ray, a piece of the line that runs off in one direction. Some moves keep the order. Add or subtract the same number, and both sides slide along the line together, so the bigger side stays **bigger**. Two is less than five, and two plus three is still less than five plus three. Multiply or divide by a positive number, and both sides stretch away from zero together, so the order **stays**.

Visual: stage change to a full-width number line (−10 to 10, 1,400 px). On "a whole set" a blue ray for "x < 4" sweeps left from an open circle at 4, hand tag "a set of numbers". The ray clears. Two dots at 2 (ink) and 5 (ink) with "2 < 5" above in amber. On "bigger" both dots slide right by 3 together to 5 and 8, readout "2 + 3 < 5 + 3" then "5 < 8", hand tag "slide: order kept"; they slide back. On "stays" a teal "× 2" stretch: the dots move to 4 and 10 together (the line's ticks stay fixed), readout "4 < 10", hand tag "stretch: order kept".

### 3. a negative is a mirror
> Now multiply by a negative. Take two and five, where two is less than five. Multiply both by minus one, and they jump to the other side of zero, mirrored, to minus two and minus **five**. Now minus two is the bigger one, because it's further right. The order has **swapped**. Watch it with any multiplier. While k is positive, two k stays below five k. At zero they're equal. And the moment k turns negative, the order flips. Dividing by a negative number is the same as multiplying by its reciprocal, which is negative too, so division flips the order as well. So when you multiply or divide both sides by a negative number, you must reverse the inequality **sign**.

Visual: camera continue. On "five" a violet dashed fold line rises at 0 and the dots at 2 and 5 swing through it like a page turning, landing at −2 and −5. On "swapped" the readout writes "−2 > −5" with the > circled amber, hand tag "mirror: order swapped". On "Watch it" stage change to `MultiplyDial`: a slider "k" (900 px; positive side teal, negative side violet) under the number line; two points labelled "2k" and "5k" and a 64 px readout "2k ? 5k". The slider moves 2 → 1 (readouts "4 < 10", "2 < 5"), to 0 ("0 = 0", hand tag "flips at 0"), to −1 ("−2 > −5", the fold line flashes) and −2 ("−4 > −10"). On "Dividing by a negative" a small row writes: "÷ (−2) = × (−½): negative too". On "sign" the rule writes at 52 px: "× or ÷ by a negative: reverse the sign", with < turning to > in amber.

### 4. the card, fixed
> Back to the travel card. More trips means less money, because each trip takes away four dollars. Two trips leave thirty-two dollars, and five trips leave twenty. More trips, smaller balance. That minus sign reverses the order. So divide minus four t, at least minus thirty-two, by minus four, and flip the sign. t is less than or equal to **eight**. Check it. Eight trips leave forty minus thirty-two, exactly eight dollars, and nine trips leave four, which is too **little**. You can also avoid dividing by a negative. Move four t across instead, so thirty-two is at least four t, and t is at most eight, the same **answer**.

Visual: clear change to the g01 board with the card and reader thumbnails (260 px) at the top left. Task strip: "How many trips keep at least $8 on the card?". Equation strip: "40 − 4t ≥ 8". Givens card: "start: $40", "each trip: −$4" (violet), "keep: at least $8". On "More trips" a small table writes beside the givens: "2 trips: $32", "5 trips: $20", with the hand tag "more trips, less money". Rows: "−4t ≥ −32"; on "eight" "÷ (−4), flip: t ≤ 8" with ≤ circled amber and the hand tag "flip!", then "t ≤ 8" in a green frame. The wrong row "t ≥ 8" from scene 1 writes small in red and is crossed, caption "dividing by −4 flips the sign". On "little" `CardTaps` replays to 8 taps (screen "$8.00", the bar exactly on the dashed line, green tick) and one more (screen "$4.00", red). On "answer" a side route writes in teal: "40 − 8 ≥ 4t", "32 ≥ 4t", "8 ≥ t", hand tag "or move 4t across", and the two answers tick together.

### 5. drawing it on a number line
> Now draw it. An open circle means the end value isn't included, for less than or greater than. A closed circle means it is included, for less than or equal to, or greater than or equal to. Then draw the arrow toward the solutions. For the card, t is less than or equal to eight, so it's a closed circle at eight, and an arrow pointing **left**. Trips are whole numbers here, so the card allows zero to eight trips. Going the other way, a closed circle at minus three, with an arrow pointing left, means x is less than or equal to minus **three**. And two x minus one, at least five, solves to x is at least three, so that's a closed circle at three, with an arrow to the **right**.

Visual: stage change to the number-line board (`NumberLineRay`, two lines, 1,300 px each). A legend writes at 40 px: "○ open: <, > (not included)" and "● closed: ≤, ≥ (included)", hand tags "open: not included", "closed: included". A short demo: "x > 2" draws an open circle at 2 and a ray right (site AT02 we-1), hand tag "arrow to the solutions". On "left" line 1: "t ≤ 8" draws a closed circle at 8 and a blue ray left; whole-number dots 0 to 8 light along it with the hand tag "whole trips: 0 to 8". On "three" line 2 shows a closed circle at −3 with a ray left (site AT02 we-2); the inequality "x ≤ −3" writes beside it in a green frame. On "right" a third short line: "2x − 1 ≥ 5, so 2x ≥ 6, x ≥ 3" with a closed circle at 3 and a ray right (site AT02 we-3).

### 6. worked example 1: dividing by a negative
> Let's practise. Solve minus two x is greater than or equal to ten. Divide both sides by minus two. We're dividing by a negative, so the sign flips, and x is less than or equal to minus **five**. Check with a test value. Try x equals minus six. Minus two times minus six is twelve, which is at least ten, so it **works**. Leaving the sign alone gives x is at least minus five. But then x equals zero should work, and minus two times zero is zero, which isn't at least ten. That's **wrong**.

Visual: clear change to the g01 board (site AT01 we-2). Task strip: "Solve". Equation strip: "−2x ≥ 10" (−2 violet). Givens: "divide by −2: negative". On "five" row "÷ (−2), flip: x ≤ −5" with ≤ circled amber, in a green frame, and a number line under it: closed circle at −5, blue ray left. On "works" a green test dot drops at −6 with "−2(−6) = 12 ≥ 10 ✓", hand tag "test value". On "wrong" a red slip "x ≥ −5" writes and is crossed; a red test dot drops at 0 with "−2(0) = 0 ≥ 10 ✗".

### 7. worked example 2: no flip, and an open circle
> Now solve four, times x minus one, is greater than twelve. Divide both sides by four. Four is positive, so there's no flip, and x minus one is greater than three. Add one, and x is greater than **four**. Four itself doesn't work, because four times three is twelve, and twelve isn't greater than twelve. So it's an open circle at four, with an arrow to the **right**. A closed circle would include four, and that's the **slip**.

Visual: clear change to the g01 board (site AT01 we-3). Task strip: "Solve and graph". Equation strip: "4(x − 1) > 12" (4 teal). Rows: "÷ 4: x − 1 > 3" with hand tag "no flip: positive 4"; on "four" "x > 4" in a green frame. On "Four itself" a test row "x = 4: 4(3) = 12, and 12 > 12 is false". On "right" a number line: open circle at 4, blue ray right; a green test dot at 5 ("4(4) = 16 > 12 ✓"). On "slip" a red slip line with a closed circle at 4 writes and is crossed, caption "4 × 3 = 12 is not > 12".

### 8. memory aid
> Here's a way to remember it. A negative is a mirror. Multiply or divide by a negative, and the number line flips, so the sign flips too. Adding, subtracting and positive numbers never flip **it**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: a small number line with 2 and 5 folding through a violet mirror at 0 to −2 and −5. Main line, hand font 60 px: "A negative is a mirror." On "it" the key line, 40 px: "× or ÷ by a negative: flip the sign. +, −, and positives: never." Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. Solve five minus three x is less than or equal to seventeen, and show the solution on a number line. Pause here to answer.

Visual: `QuestionCard`, 40 px: "Solve 5 − 3x ≤ 17 and graph the solution on a number line." An empty coded number line (−8 to 8) sits under the question. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> Subtract five, so minus three x is at most **twelve**. Divide by minus three, and flip. x is greater than or equal to minus **four**. That's a closed circle at minus four, with an arrow to the **right**. Check zero. Five minus three times zero is five, which is at most seventeen. If you wrote x is at most minus four, you forgot the **flip**.

Visual: the card shrinks; `GivensStrip`: "5 − 3x ≤ 17", "graph it". On "twelve" row "−3x ≤ 12". On "four" row "÷ (−3), flip: x ≥ −4" (≥ circled amber) in a green frame. On "right" the card's number line fills: closed circle at −4, blue ray right. On "Check zero" a green test dot at 0 with "5 − 3(0) = 5 ≤ 17 ✓". On "flip" a red slip "x ≤ −4" writes and is crossed, caption "÷ by −3 flips the sign". Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. Solve two x plus one, over three, is greater than x minus one. Pause here to answer.

Visual: `QuestionCard`: "Solve (2x + 1)/3 > x − 1." Fraction at 52 px. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 12. feedback 2 (brief)
> Multiply both sides by three. Three is positive, so there's no flip, and two x plus one is greater than three x minus **three**. Subtract three x and one, so minus x is greater than minus **four**. Multiply by minus one, and flip. x is less than **four**, so it's an open circle at four, with an arrow to the left. If you got x less than two, the three didn't multiply the whole right **side**.

Visual: the card shrinks; `GivensStrip`: "(2x + 1)/3", "> x − 1". On "three" row "× 3 (positive, no flip): 2x + 1 > 3x − 3" with "3(x − 1)" underlined. On "four" row "−x > −4". On "four" (second) row "× (−1), flip: x < 4" in a green frame, and a number line: open circle at 4, ray left. On "side" a red slip "2x + 1 > 3x − 1, so x < 2" writes and is crossed, caption "3 × (x − 1) = 3x − 3". Hold about 1 s.

### 13. handoff
> So the kayak shop's minus eight T, at least minus sixteen hundred, gives T less than or equal to two hundred, just as the dial showed. And notice something about the card. For each number of trips, there's exactly one balance. Is every rule like that? Next, a vending machine, and what makes a relation a **function**.

Visual: the memory line shows small at the top, then fades. The w05 strip from scene 1 returns: "÷ (−8), flip: T ≤ 200" with ≤ circled amber and a green tick, jetty badge (160 px). Then the board shifts: left, the card's table "trips t → balance" with rows 0 → 40, 1 → 36, 2 → 32, 3 → 28 and one arrow per row; right, the painted vending machine (`ma11-vending-machine-v1.png`, 560 px tall). On "function" the chip "Each button, one snack?" writes, and the chip "Next: what makes a relation a function?". Hold about 2 s. This is w07's opening frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book". Bullets 38 px in the left 58 to 60 per cent.
> Here are the key notes. Pause the video if you need more time to copy them.

- Adding, subtracting, × or ÷ by a positive: sign unchanged.
- × or ÷ by a negative: reverse the sign.
- Open circle for < or >; closed circle for ≤ or ≥.
- Arrow toward the solutions.
- Check with a test value inside the ray.

Memory aid (framed card, right side, as in scene 8): *A negative is a mirror.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 13's frame exactly. This is the final frame and w07's opening frame.

## Teaching checks

- **Does it explain causes?** Why the naive answer fails: ten trips leave $0 (1). Why slides and positive stretches keep the order: both sides move together (2). Why a negative reverses it: multiplying by −1 mirrors the line through 0, so the further-right point becomes the further-left one (3, the dial). Why the card needs the flip: more trips, less money (4). Why the move-across route gives the same answer: it never divides by a negative (4). Why open or closed: whether the end value makes the statement true (5, 7).
- **Misconceptions addressed:** no flip (1, 6, feedback 1 crossed); flip for a positive (7 tag, feedback 2 "no flip"); wrong circle (7 crossed); partial multiplication (feedback 2 crossed); arrow direction (5, positively).
- **Visual standard, item by item:** 1 the painted card and reader from the first frame, returning in 4 and 13; 2 a new stage every 25 to 50 s; 3 `CardTaps`, `MultiplyDial` and `NumberLineRay` with test dots; 4 fixed colour roles; 5 large type; 6 hand tags; 7 g01 boards; 8 framed card and five bullets; 9 the order readout flipping as k crosses 0, and the points folding through zero.
- **One idea at a time:** the safe moves (2) before the flip (3); solving (4) before graphing (5).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible (A1 asks for the graph and gives an empty line); 10 s each; feedback about 25 and 28 s.
- **Avoided double teaching:** solving linear equations is used, not taught.
- **Syllabus coverage:** `ci6e28857f` solve (4, 6, 7, A1, A2) and graph on a number line (5, 6, 7, A1, A2).
- **Out of scope by design:** interval notation (w09); compound inequalities; quadratic and absolute value inequalities.

## Practice questions and model answers

**Attempt 1 (scene 9; pack question 1, original, HSC style, 2 marks suggested, not an official marking scheme).** "Solve 5 − 3x ≤ 17 and graph the solution on a number line."
Model answer: −3x ≤ 12; ÷ (−3), reverse: x ≥ −4; closed circle at −4, arrow right. Classic mistake (crossed): x ≤ −4.

**Attempt 2 (scene 11; pack question 2, original, HSC style, 2 marks suggested).** "Solve (2x + 1)/3 > x − 1."
Model answer: × 3: 2x + 1 > 3x − 3; −x > −4; x < 4 (open circle at 4, arrow left). Classic mistake (crossed): 2x + 1 > 3x − 1, giving x < 2.

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Card | balance 40 − 4t; t = 0 to 10: 40, 36, 32, 28, 24, 20, 16, 12, 8, 4, 0; 2 trips $32, 5 trips $20 | 1, 4, 13 |
| Card inequality | 40 − 4t ≥ 8; −4t ≥ −32; t ≤ 8; check 8 → $8, 9 → $4; move-across 32 ≥ 4t | 1, 4, 5 |
| Moves | 2 < 5; +3: 5 < 8; × 2: 4 < 10 | 2 |
| Dial | k = 2: 4 < 10; 1: 2 < 5; 0: 0 = 0; −1: −2 > −5; −2: −4 > −10 | 3 |
| AT02 demos | x > 2 (open, right); closed at −3, left: x ≤ −3; 2x − 1 ≥ 5: x ≥ 3 (closed, right) | 5 |
| AT01 we-2 | −2x ≥ 10: x ≤ −5; test −6: 12 ≥ 10; crossed x ≥ −5, test 0: 0 ≥ 10 false | 6 |
| AT01 we-3 | 4(x − 1) > 12: x > 4; x = 4: 12 > 12 false; test 5: 16 > 12 | 7 |
| A1 | −3x ≤ 12; x ≥ −4; test 0: 5 ≤ 17; crossed x ≤ −4 | 9, 10 |
| A2 | 2x + 1 > 3x − 3; −x > −4; x < 4; crossed x < 2 | 11, 12 |
| Handoff | −8T ≥ −1600: T ≤ 200; table 0 → 40, 1 → 36, 2 → 32, 3 → 28 | 13 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy (16 Nov, scratchpad `checks.py`); Codex to re-check.

- 40 − 4t ≥ 8 ⟺ t ≤ 8; balances at t = 0 to 10 as listed.
- 2k and 5k for k = 2, 1, 0, −1, −2: (4, 10), (2, 5), (0, 0), (−2, −5), (−4, −10).
- −2x ≥ 10 ⟺ x ≤ −5; 4(x − 1) > 12 ⟺ x > 4; 3x + 5 < 17 ⟺ x < 4 (not shown); 2x − 1 ≥ 5 ⟺ x ≥ 3.
- A1: 5 − 3x ≤ 17 ⟺ x ≥ −4 (checks: x = −4 gives 17; x = 0 gives 5; x = −5 gives 20 > 17).
- A2: (2x + 1)/3 > x − 1 ⟺ x < 4 (x = 0: 1/3 > −1 true; x = 5: 11/3 > 4 false); slip 2x + 1 > 3x − 1 ⟺ x < 2.
- −8T ≥ −1600 ⟺ T ≤ 200.

## Memory aid check

- **"A negative is a mirror."** Original. Meaning, as said: multiplying the number line by a negative reflects it through 0 (and stretches it), so the order of any two numbers reverses, and the inequality sign must reverse. Assumptions checked: holds for every negative multiplier (the stretch keeps order, the reflection reverses it); division by a negative is multiplication by its reciprocal, also negative; multiplying by 0 is excluded (the dial shows it collapses both to 0, which is why it is never used to solve). Introduced after the dial (3).
- **Considered, not used:** "Negative? Flip it!" (no reason); the site's flip-rule wording (a rule without the mirror).

## Narration length estimate

Recounted for Revision 2 (16 Nov 2026). Counted by script with the build parser rules: **5,606 characters**, 14 scene headings. Characters per scene (1 to 14): 693, 569, 655, 614, 669, 477, 416, 192, 133, 327, 94, 378, 314, 75.

At 13.3 characters per second the speech before the notes is about 416 s. Holds: two 10 s countdowns, memory-card hold 2 s, feedback holds 2 s, handoff hold 2 s, about 12 s of settling (the taps, the fold, the dial sweep, the rays); notes 45 s. Total **about 499 s**, inside the band and under the cap.

Reserve trims if the voiced take runs long: scene 1's first sentence shortened to "Last time, the kayak shop needed to divide by minus eight." (about 4 s); scene 5's last sentence (the AT02 we-3 line can stay silent on screen, about 8 s).

## Scene list and build ids

Lesson key `m-a11w06` (route math-a11-w06). Explainer folder `src/explainer/lessons/math-a11-w06`; build inputs in `docs/production/claude-pm/lessons/math-a11-w06/` (at voicing).

In order (14 scene headings): hook-card, safe-moves, negative-mirror, card-fixed, number-line, worked-flip, worked-no-flip, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (seconds from the estimate):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 54 s | 1 | The painted card and reader: ten taps empty the card against t ≥ 8 |
| 54 to 99 s | 2 | Number line: a ray, then slide and stretch keeping the order |
| 99 to 150 s | 3 | The fold through zero, then MultiplyDial flipping the order at k = 0 |
| 150 to 198 s | 4 | g01 board with the card: the flip, the tap check and the move-across route |
| 198 to 250 s | 5 | Number-line board: open and closed circles, arrows, whole trips |
| 250 to 320 s | 6 to 7 | Two g01 boards with test dots (site AT01 we-2, we-3) |
| 320 to 336 s | 8 | Framed memory card |
| 336 to 428 s | 9 to 12 | Question cards and countdowns, then feedback with number lines and crossed slips |
| 428 to 453 s | 13 | T ≤ 200 resolved; the trips table beside the vending machine |
| 453 to 498 s | 14 | Key notes with the framed card, then a silent return to scene 13's frame |

Per-scene motion (schema 4): all `explain` except attempts and key-notes (`hold`). Transitions: w05's last frame continues into 1; 1 to 2 stage change to the number line; 2 to 3 camera continue, then stage change to the dial; 3 to 4 clear change with the plates; 4 to 5 stage change; 5 to 6 to 7 clear change; 7 to 8 clear change to the card; attempts and feedback: the card shrinks; 12 to 13 board clear; 13 to 14 fade, then a silent return to scene 13's frame.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11w06-rev1-learning-review.md`, `science_check` = `checks/m-a11w06-rev1-maths-check.md`.

## Assets

Inspected before choosing (16 Nov, read only): no travel card, ticket reader or gate plate exists. `maths/ma12-bus-stop-v1.png` and `ma12-bus-side-v1.png` are s07's bus anchor (waiting times); `ma12-concert-ticket-v1.png` is a paper ticket, not a stored-value card. Not used.

Need (painted, new): `ma11-travel-card-v1`, `ma11-travel-card-reader-v1`. Needed from w07's brief for the handoff frame: `ma11-vending-machine-v1`.

Coded: the screen balance text, the balance bar, number lines, rays, circles, test dots, the dial, working boards, cards, countdown, hand tags, key notes.

### Studio kit use and additions

Uses: `MATH_ROLES`, `Role`, `HandTag`, `DrawnMark`, `PlateImg`, `LiveReadoutBoard`, `ParameterSlider`, `IntervalPicture` (as the base of `NumberLineRay`), `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`, `GivensStrip`.

Additions:
1. **`NumberLineRay`** (kit-needs item 4): `IntervalPicture` extended to rays (one end an arrow), animated drawing from the circle, open or closed circle, test-value dots coloured by membership, optional whole-number dots along the ray, and a `mirror` mode that folds marked points through 0. Check: a test dot's colour is computed from the inequality, not set by hand.
2. **`MultiplyDial`**: a slider for k driving two points ak and bk on a `NumberLineRay`, with an order readout computed live. Check: the readout's sign is "<", "=" or ">" exactly as ak − bk is negative, zero or positive.
3. **`CardTaps`**: the card plate moves to the reader's tap point (sidecar), a trip counter, the reader screen balance and a balance bar from one timeline. Check: screen, counter and bar agree at every frame.

## Codex asset brief (Maths A11 W06, a travel card and reader)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-w06.md`, route entry math-a11-w06. Paint after the learning review and maths check pass and root gives the go-ahead. Save to `public/assets/maths/`. Transparent PNG with a true alpha channel, clean edges; ink and watercolour in the house style, matched to `maths/ma12-bus-stop-v1.png`; at least 8 per cent clear margin; no text, numbers, network names, logos, brand colours of any real transport system, people, hands, faces, backdrop, glow or ground shadow. Never stretch.

1. `ma11-travel-card-reader-v1.png` (1400 × 2200 px): a generic public-transport card reader on a short stainless post, front view at slight elevation, with a small **blank** dark screen above a round tap pad (a plain concentric-ring symbol, no words).
2. `ma11-travel-card-v1.png` (1400 × 900 px): one plain generic stored-value travel card, credit-card proportions, front face in a single soft teal with a simple wave stripe and a small contactless symbol; no words, numbers or logo.

Sidecar JSON: for the reader (`ma11-travel-card-reader-v1.json`), the screen's four corner points and the tap pad's centre and radius in px; for the card, its outline rectangle. Code writes the balance on the screen and moves the card to the pad (it never resizes the card plate away from the scale given in the design).

Report inspection on the paper background (`#f6f1e7`) at 300 px and 600 px and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-w06-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the dial readouts (author note b) and that the order flips exactly at k = 0.
3. Confirm the whole-number context line in 5 is scoped to the card and the ray stays the inequality's answer.
4. Confirm every circle (open or closed) and arrow direction matches its inequality.
5. Confirm the site examples used are unchanged; AT01 we-1's omission is recorded; both attempts carry every demand.
6. Confirm the syllabus quote matches the crosswalk exactly; no site label in learner copy or metadata; no interval notation appears.
7. Confirm no em dash (U+2014), Australian spelling, narration counts by script, and every bold cue quoted in its scene's Visual in spoken order.
8. Confirm scene 1 opens on w05's final frame and scene 13's frame matches w07's opening frame.

## YouTube metadata (draft)

Title: Why Dividing by a Negative Flips an Inequality | Year 11 Maths Advanced

(Title length: 72 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/algebraic-techniques-and-inequalities/lesson01.sa.html

A travel card has $40 and each trip costs $4. Solving 40 − 4t ≥ 8 like an equation says t ≥ 8, but ten trips leave nothing. See which moves keep an inequality's order, watch a negative multiplier mirror the number line through zero so the order swaps, then solve linear inequalities, check them with a test value and graph the answers with open and closed circles. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Number line lesson: https://hscscience.com.au/subjects/maths-advanced/year11/algebraic-techniques-and-inequalities/lesson02.sa.html

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Working with functions.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Solve linear inequalities and graph the solution on a number line"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

Builds on: Year 10 linear equations. Next: Relations and functions.

#Year11Maths #MathsAdvanced #Inequalities #HSCScience

## Open decisions

- **1. Opening on w05's question (root).** w06 does not depend on w05's content, but it opens on w05's unfinished inequality to keep the chain. If the playlist ever places w06 before w05, only scene 1's first sentence and the opening frame change (about 140 characters); the card hook stands alone.
- **2. Interval notation (root).** The site's lesson 2 teaches interval notation; the outline gives it to w09. Not shown here.
- **3. Plate prefix `ma11-` (root),** as w01.

## Review notes

- Revision 2 (16 Nov 2026): the independent learning review (`../checks/m-a11-w06-learning-review.md`) is resolved; see the Revision 2 section. Next: Codex maths check and error check, then voicing and a build to grade A.
- Revision 1 has had no independent review. Next: student learning review (trace from Year 10 equations only; check that the mirror at k = −1 makes the swap visible, not just stated; that "more trips, less money" is understood as the same reason; that the dial is readable at playback speed; that the whole-number line is not taken as part of the inequality's answer), then the Codex maths check and error check, then voicing and a build to grade A.
- The taps, the fold and the dial carry the explanation; judge them at playback speed.
