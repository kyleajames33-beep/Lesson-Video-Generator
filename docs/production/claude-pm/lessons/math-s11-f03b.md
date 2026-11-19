# Maths S11 F03B: How do we make x the subject of y = ax² + c, and which root do we keep? A framing shop's glass price peeled from the outside in, two square roots and the one a side length allows, a pizza worked backwards, and the decision said out loud (design)

Status: Revision 1 (19 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Standard designs (`math-s12-a01.md`, `a07.md`, `r10.md`, each at Revision 2) and root's Standard rulings (`../checks/root-rulings-maths-standard-outline.md`, 1 to 91; ruling 88 makes this part f03b, y = ax² + c with the negative root rejected). Opens on f03a's final frame as specified in `math-s11-f03a.md` (Decisions, "Handoff", and scene 12). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 4,665 characters by script (see "Narration length estimate"), 13 scene headings, about 438 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: fourth video of Year 11 Mathematics Standard (2024), Formulas and equations, playlist order 3 (shared with f03a, ruling 88). Year 11 is one course for Standard 1 and Standard 2. This part covers the non-linear half of `cib54d5e23`. **No site lesson rearranges y = ax² + c** (MS-81; lesson04 is linear only, lesson07 substitutes into squared formulas without rearranging), so this part teaches from the syllabus alone (root ruling 3), using f01's pizza and the pack's anchors. Pre-design pack: `../pre-design/maths-standard/math-s11-f03.md` (sections 3, 6, 7). Route entry: `math-s11-f03` in `../../programme/maths-standard-route-inputs-8.json`. Visual system: maths studio kit; one new plate (the picture frame, painted with f03a); the pizza and a round table top reused; one new plate for f04a's anchor in the final frame (a P-plate car); every formula, root fork and board coded.

Owner rules applied: as f01 (2024 syllabus; plates for real objects, code for diagrams; no people, hands or faces; one question; one stage at a time; words before symbols; plain meanings (square root, plus or minus, reject); g01 worked example; two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (a framing shop, a pizza, an outdoor table, a poster); Australian spelling; no em dashes; conversational narration). Prices are invented examples, labelled.

Syllabus content point (Mathematics Standard 11-12 (2024), Year 11, Formulas and equations, common to Standard 1 and Standard 2), quoted from `../../programme/maths-standard-route-inputs-8.json` (the formula in the official wording is MathML; its text form is y = ax^2 + c):

- `cib54d5e23`: "Change the subject of linear and non-linear formulas limited to quadratics of the form y = ax^2 + c to solve problems and make decisions about solutions in the context of the problem" (shared with f03a: this video covers y = ax² + c and the decision about which root fits the context)

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa346f5353

**Boundary:** starts from f03a's final frame exactly (the picture frame `ms11s-picture-frame-v1.png` at the left, about 700 px; the formula card "C = 0.05s² + 12" with "C" amber, "0.05" teal, "s" blue, "12" violet and labels "C: cost of the glass ($)", "s: side length (cm)"; the docket "Quote: $32" and "s = ?"; the "²" ringed; chips "How do we undo a square?", "Next" and "?"). Recalls f03a (undo the outside step first, both sides, check with numbers), f01 (the pizza, A = πr²; (−4)² = 16) and Stage 5 (square roots) in a phrase or grey chip each. Teaches: a square root undoes a square; a positive number has two square roots (±); peeling y = ax² + c from the outside in (subtract c, divide by a, square root); the rearranged form x = ±√((y − c)/a); c = 0 (A = πr²); deciding which root fits the context and saying why. Stops at y = ax² + c. Not taught: quadratics with an x term, parabolas (Year 12 a09); speed (f04a).

## Decisions

- **Anchor: a framing shop's glass price (new painted plate, live).** The pack's anchor: C = 0.05s² + 12 (cost in dollars, side in cm); a $32 quote means s = ±20, keep 20 cm. Drawn with `ms11s-picture-frame-v1.png` (briefed in f03a, painted one video early under ruling 17). A square frame makes "side length" concrete and makes the rejected root visible: a side of −20 cm cannot be drawn. The $17 and $57 quotes (10 cm, 30 cm) show the rearranged formula serving many quotes, the f03a idea carried over. Labelled "example price".
- **c = 0: f01's pizza backwards (reused plate).** A = πr² with A = 500 cm² gives r ≈ 12.6 cm (about 25 cm across). The student found a pizza's area from its radius in f01; now the radius comes from the area. `maths/ma11-pizza-top-v1.png` (viewed 19 Nov).
- **Site gap (MS-81, ruling 3).** The whole video teaches from the syllabus; the pack's anchors and questions are used, with their SymPy-checked numbers.
- **Simulations (standard item 3).**
  1. **Layer peel** (scene 3; `FormulaSlots` with `StudioCancellation`): the formula is drawn as three nested layers around s (inner "²", middle "× 0.05", outer "+ 12"); each undo removes the outer layer from both sides, with a live readout on the right running the $32 quote through (32 → 20 → 400 → ±20).
  2. **Root fork** (scenes 2, 3, 9, 11; a ± fork on `RootExtract`, kit-needs item 4): at the square-root step two branches grow, "+20" (green) and "−20" (grey); the context chip ("a side can't be negative") then crosses the negative branch, and the frame plate's coded side arrow takes the positive value.
  3. **Quote dial** (scene 4; `FunctionSimulator` or a `FormulaSlots` readout): a slider over quotes $12 to $60 resizes a coded square inside the frame plate while the readout shows s; at $17, $32 and $57 it stops briefly on 10, 20 and 30 cm.
- **Colour roles (as f01).** The wanted side or radius (the new subject) **amber**; values put in **blue**; c (added constant) **violet**; a (multiplier) **teal**; kept root and answer **green**; the rejected root **grey**, crossed; mistake **red**, crossed slips only.
- **Large type, handwritten voice.** As f01. Hand tags: "√ undoes ²", "two roots: + and −", "outside in", "minus c, ÷ a, then √", "a side can't be negative", "say why", "no c here", "half the width", "both roots fit a graph". At most two live at once.
- **Stage changes (standard item 2), about every 30 to 60 s.** The frame and quote (1); the two roots (2); g01 board with the layer peel (3); the quote dial (4); the pizza (5); the decision tree (6); framed card (7); question cards (8 to 11); the road to Canberra for f04a (12); key notes (13).
- **Worked example (g01 layout).** Scene 3: C = 0.05s² + 12, $32. Crossed slip: square root first, "s = √32 − 12 ≈ −6.34" (caption "subtract and divide before the square root").
- **Memory aid.** Framed card: "Minus c, divide by a, then square root. Write ±." Key line: "Keep the root that makes sense, and say why."
- **Visual surprise.** At the square-root step the answer splits in two, and the frame plate shows why one branch cannot exist: a coded side arrow tries to point the other way off the frame and snaps back.
- **Plain meanings at first use.** Square root ("the number that, multiplied by itself, gives the number"); plus or minus, ± ("both the positive and the negative root"); reject ("leave out, with a reason").
- **Attempts (pack questions).** A1 (pack question 1): A = πr² for r, table top 1.2 m², r ≈ 0.618 m ≈ 62 cm; crossed "r = 1.2 ÷ π ≈ 0.38" (caption "that's r², so take the square root"). A2 (pack question 2): C = 25x² + 15 for x, $55 gives x ≈ 1.26 m, with the negative root rejected; crossed "x = √55 − 15" (caption "subtract and divide before the square root").
- **Mistake scene:** none separate. Square root too early (3 crossed, A2 crossed); stopping at x² (A1 crossed); forgetting ± (2, 3 tags); keeping a negative length (3, 6).
- **Cause chain taught, in order:** (1) a square root undoes a square, but a negative squared is also positive, so there are two roots (2); (2) the square was done first when building C, so it is undone last, after subtracting c and dividing by a (3); (3) the equation accepts both roots, but the situation decides: a length cannot be negative (3, 6); (4) rearranging once with letters serves every quote (4).
- **Entry knowledge (route):** f03a (outside step first, both sides, easy-number checks); f01 (A = πr²; (−4)² = 16); Stage 5 square roots.
- **Handoff (to math-s11-f04a, "How do speed, distance and time connect, and how do we make the units match?").** Scene 12: header "MATHEMATICS STANDARD · FORMULAS AND EQUATIONS"; the country road `ma12-country-road-v1.png` across the lower half (about 1,920 px wide, native aspect); the new plate `ms11s-p-plate-car-v1.png` (about 640 px) on the road, facing right, its coded red "P" on the white square; the green road sign `ma11-road-sign-post-v1.png` (about 460 px tall) at the right with coded white text "Canberra 285 km"; a coded chip "about 285 km" (grey, 30 px) under the sign; a coded trip clock chip, 44 px, "3 h 10 min"; chips "Average speed?", "3 h 10 min = 3.10 h?" (with "3.10" in grey and a "?"), "Next" and "?". No speed shown. This is f04a's opening frame; scene 13 returns to it silently after the notes.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) 0.05s² + 12 = 32: 0.05s² = 20, s² = 400, s = ±20; check 0.05 × 400 + 12 = 32; slip √32 − 12 ≈ −6.34.
  (b) s = ±√((C − 12)/0.05): $17 → ±10, $57 → ±30.
  (c) Pizza: r = ±√(500/π) ≈ ±12.6157; about 25.2 cm across.
  (d) A1: r = √(1.2/π) ≈ 0.6180 m ≈ 62 cm; slip 1.2/π ≈ 0.382. A2: x² = 40/25 = 1.6, x ≈ ±1.2649, 1.26 m; slip √55 − 15 ≈ −7.58.
  (e) Pronunciations: "C equals zero point zero five s squared, plus twelve"; "s equals plus or minus the square root of, bracket C minus twelve, over zero point zero five"; "x equals plus or minus the square root of, bracket y minus c, over a".
  (f) The framing price is an invented example (glass priced by area plus a fixed cutting charge), labelled "example price" on the card.

Main question: *A framing shop's quote is $32. How do we make the side length the subject when it's squared, and which answer do we keep?*
Entry knowledge (f03a, f01; Stage 5): undoing on both sides; squaring negatives; square roots.
Stops after: y = ax² + c rearranged (subtract c, divide by a, ±√), c = 0, and the context decision about roots.
Handoff: math-s11-f04a: "285 km in 3 h 10 min: what's the average speed, and is 10 minutes 0.1 of an hour?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): wanted side or radius amber; values blue; c violet; a teal; kept root and answer green; rejected root grey; mistake red. Header strip "MATHEMATICS STANDARD · FORMULAS AND EQUATIONS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: a framing shop's quote
> A framing shop prices the glass for a square frame with C equals zero point zero five s squared, plus twelve, where s is the side length in centimetres, and C is the cost in dollars. Your quote is thirty-two dollars. How big is the frame? Last time, we undid adding and multiplying. Now the side length is squared. So how do we make a squared letter the subject, and which answer do we **keep**?

Visual: opens on f03a's final frame exactly (see Boundary). On "side length" a coded side arrow (amber) runs along the frame plate's bottom edge with "s"; on "thirty-two dollars" the docket pulses; a small chip "example price" under the card. On "undid adding and multiplying" a grey chip "f03a: undo the outside step first". On "keep" heading "Rearranging y = ax² + c" writes on, and the question chip "How big is the frame?" moves to the top right.

### 2. undoing a square: two roots
> First, what undoes a square? A square root. Four hundred is twenty squared, so the square root of four hundred is twenty. But minus twenty, squared, is also four hundred, because a negative times a negative is positive. So if s squared equals four hundred, s could be twenty, or minus **twenty**. We write that as plus or minus twenty. Every positive number has two square roots, one positive and one negative, and the equation can't tell them **apart**.

Visual: stage change: the frame plate shrinks to a 300 px badge at the top left with the formula card as a 30 px strip. Large rows at the centre, 52 px: "20² = 400" (20 green), then "(−20)² = 400" (−20 grey) with grey chip "f01: (−4)² = 16"; hand tag "√ undoes ²". On "twenty" (first bold) the root fork simulation: "s² = 400" splits into two branches "s = 20" (green) and "s = −20" (grey); on "plus or minus" they join under "s = ±20" (52 px), hand tag "two roots: + and −". On "apart" both branches check against "s² = 400" with a tick each.

### 3. worked example: peel from the outside in
> Now peel the formula from the outside in, like f03a. To build C from s, you square s, multiply by zero point zero five, then add twelve. So undo in reverse. Take twelve from both sides. Thirty-two minus twelve is twenty, so zero point zero five s squared equals **twenty**. Divide both sides by zero point zero five, and s squared equals four **hundred**. Now take the square root, so s equals plus or minus **twenty**. Here's the decision. Put minus twenty back in, and the formula still gives thirty-two, so the maths is happy with it. But s is a side length, and a length can't be negative, so we reject minus twenty. The frame is twenty centimetres **square**. Check it. Zero point zero five times four hundred is twenty, plus twelve, thirty-two. Taking the square root too early is the slip. The square root of thirty-two, minus twelve, gives a negative side, which makes no **sense**.

Visual: clear change to the g01 board. Task strip, 44 px: "C = 0.05s² + 12. Find the side length s for a $32 quote." Givens card, 44 px: "C = 32 ($)" (blue), "s: side (cm), find" (amber). The layer peel simulation above the rows: s inside three nested layers, "²" (inner), "× 0.05" (teal), "+ 12" (violet); a strip "s → ² → × 0.05 → + 12 → C", then reversed "C → − 12 → ÷ 0.05 → √ → s", hand tag "outside in". Rows, 52 px: "0.05s² + 12 = 32", "0.05s² = 20" (on "twenty", the "+ 12" layer peels off both sides); on "hundred" "s² = 20 ÷ 0.05 = 400" (the "× 0.05" layer peels); on "twenty" (second bold) the root fork: "s = ±√400 = ±20". On "decision" a grey check row, 30 px: "0.05(−20)² + 12 = 32 ✓" beside the −20 branch; on "a length can't be negative" the chip "a side can't be negative" lands on the −20 branch, which turns grey and is crossed; hand tag "say why". On "square" framed answer (green): "s = 20 cm (a side can't be negative)", and the frame badge's side arrow reads "20 cm". Check row, 44 px: "0.05 × 400 + 12 = 32 ✓". On "too early" a red slip "s = √32 − 12 ≈ −6.34" writes small at the right; on "sense" it is crossed (caption "subtract and divide before the square root").

### 4. rearrange once, for every quote
> Rearrange it once with letters, and you get s equals plus or minus the square root of, bracket C minus twelve, over zero point zero five. Now every quote is quick. Seventeen dollars gives a ten centimetre frame, and fifty-seven dollars gives thirty. The same three steps work for any formula shaped like y equals a x squared plus c. Subtract c, divide by a, then square **root**, with plus or **minus**.

Visual: stage change: the frame plate returns large at the left (about 640 px). Formula strip, 52 px: "s = ±√((C − 12) ÷ 0.05)" (s amber, 12 violet, 0.05 teal). The quote dial simulation: a slider "quote ($)" under the plate, 12 to 60; a coded square inside the frame grows and shrinks with it, and the readout "s = ... cm" updates; it stops on "$17 → 10 cm" and "$57 → 30 cm" (and passes "$32 → 20 cm"), each kept root green with its "−" twin grey. On "y equals a x squared plus c" a general card, 44 px: "y = ax² + c → x = ±√((y − c) ÷ a)" (a teal, c violet); on "root" hand tag "minus c, ÷ a, then √"; on "minus" the ± rings.

### 5. no c at all: the pizza, backwards
> Some of these formulas have no c at all. Remember f01's pizza, A equals pi r squared? Go backwards. What radius gives a pizza with an area of five hundred square centimetres? Divide by pi, so r squared is five hundred over pi, then square root. r is plus or minus about twelve point **six**. A radius can't be negative, so it's about twelve point six centimetres, a pizza about twenty-five centimetres **across**.

Visual: stage change: the pizza plate `ma11-pizza-top-v1.png` (about 600 px) at the left, a coded radius line "r = ?" (amber); grey chip "f01: A = πr², r = 15 gave 707 cm²". At the right, formula strip, 52 px: "A = πr²", hand tag "no c here". Rows, 52 px: "r² = A ÷ π = 500 ÷ π", "r = ±√(500 ÷ π)"; on "six" the root fork: "≈ +12.6" (green) and "≈ −12.6" (grey, crossed, chip "a radius can't be negative"). On "across" framed answer (green): "r ≈ 12.6 cm (about 25 cm across)", the radius line labelling itself "12.6 cm", hand tag "half the width".

### 6. which root do we keep?
> So which root do you keep? Ask what the letter means. A length, a time or a price can't be negative, so keep the positive root, and say why. The negative root still solves the equation, it just doesn't fit the **situation**. If the letter is only a position on a graph, both roots can count, and you'll see that with curved graphs in Year **twelve**.

Visual: clear change: a coded `DecisionTree`, 44 px: "Two roots, ±. What does the letter measure?" branching to "a length, time, mass or price → can't be negative → keep +" (green) and "a position on a graph → both can count" (blue). Thumbnails beside the first branch: the frame badge "20 cm" and the pizza badge "12.6 cm". On "situation" hand tag "say why". On "twelve" a small coded thumbnail of y = x² with two points at equal heights either side of the y-axis, grey chip "Year 12: parabolas", hand tag "both roots fit a graph".

### 7. memory aid
> Here's the idea to keep. Peel from the outside in, minus c, divide by a, then square root, and write plus or minus. Then keep the root that makes sense, and say **why**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the root fork from scene 3, small, with the frame badge. Main line, hand font 56 px: "Minus c, divide by a, then square root. Write ±." On "why" the key line, 40 px: "Keep the root that makes sense, and say why." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. The area of a circle is A equals pi r squared. A round outdoor table top has an area of one point two square metres. Make r the subject, then find the radius, correct to the nearest centimetre. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "The area of a circle is A = πr². A round outdoor table top has an area of 1.2 m². Make r the subject, then find the radius correct to the nearest centimetre." The full question stays on screen. Picture slot: the round table top `ma11-drop-leaf-table-top-v1.png` (about 360 px), no measurements. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> Divide by pi, so r squared equals A over pi. Then square root, so r equals plus or minus the square root of A over **pi**. With one point two, that's about zero point six one eight metres. A radius can't be negative, so it's about sixty-two **centimetres**. Stopping at A over pi is the slip. That's r squared, not r, so take the square **root**.

Visual: the card shrinks to the top (30 px). Rows, 44 px: "r² = A ÷ π"; on "pi" "r = ±√(A ÷ π)" (r amber); "r = √(1.2 ÷ π) ≈ 0.618 m" with the "−" root grey and crossed; on "centimetres" framed answer (green) "r ≈ 62 cm". On "root" a red slip "r = 1.2 ÷ π ≈ 0.38" writes and is crossed (caption "that's r², so take the square root"). Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. The cost, in dollars, of printing a square poster with side length x metres is C equals twenty-five x squared, plus fifteen. Make x the subject. Find the side length of a poster that costs fifty-five dollars, correct to two decimal places. Then explain why only one of the two square roots is a valid answer. Pause here to answer.

Visual: `QuestionCard`, 40 px: "The cost, in dollars, of printing a square poster with side length x metres is C = 25x² + 15. (a) Make x the subject. (b) Find the side length of a poster that costs $55, correct to two decimal places. (c) Explain why only one of the two square roots is a valid answer." Picture slot: a coded blank square poster outline with "x" on one side. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> Take fifteen, divide by twenty-five, then square root. x equals plus or minus the square root of, bracket C minus fifteen, over twenty-**five**. For fifty-five dollars, that's forty over twenty-five, one point six, so x is plus or minus one point two **six**. A side length can't be negative, so the poster is one point two six metres. Square-rooting fifty-five first is the **slip**.

Visual: the card shrinks to the top. Rows, 44 px: on "five" "(a) x = ±√((C − 15) ÷ 25)" (x amber, 15 violet, 25 teal); "x² = (55 − 15) ÷ 25 = 1.6"; on "six" the root fork "x ≈ ±1.26", the "−" branch grey and crossed with "a side can't be negative"; framed answer (green) "(b) 1.26 m (c) a length can't be negative". On "slip" a red slip "x = √55 − 15" writes and is crossed (caption "subtract and divide before the square root"). Hold about 1 s.

### 12. handoff
> So peel from the outside in, and keep the answer that fits. Next, formulas on the road. A P-plate driver drives from Sydney to Canberra, about two hundred and eighty-five kilometres, in three hours and ten minutes. What was the average speed? Careful, ten minutes isn't point one of an hour. That's **next**.

Visual: the memory line shows small at the top (30 px), then fades. Board clear to the handoff frame (see Decisions, "Handoff"): the country road strip across the lower half; the P-plate car plate drives in from the left and stops; on "Canberra" the road sign with "Canberra 285 km" and the grey chip "about 285 km"; on "three hours and ten minutes" the trip clock chip "3 h 10 min"; on "average speed" the chip "Average speed?"; on "point one of an hour" the chip "3 h 10 min = 3.10 h?" with the "?" ringed; on "next" chips "Next" and "?". Hold about 2 s. This is f04a's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- A square root undoes a square: there are two roots, + and −.
- y = ax² + c: subtract c, divide by a, then square root.
- So x = ±√((y − c) ÷ a).
- Keep the root that makes sense: a length can't be negative.
- Check by substituting back.

Memory aid (framed card, right side, as in scene 7): *Minus c, divide by a, then square root. Write ±.* Key: *Keep the root that makes sense, and say why.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and f04a's opening frame.

## Teaching checks

- **Does it explain causes?** Why two roots: a negative squared is positive (2). Why the square root comes last: the square was the first thing done to s (3). Why reject −20: a side cannot be negative, though it solves the equation (3, 6). Why rearrange with letters: every quote then takes one substitution (4). Why the square root first fails: it undoes the square while + 12 and × 0.05 are still attached (3 crossed).
- **Misconceptions addressed:** square root too early (3 crossed, A2 crossed); stopping at r² (A1 crossed); no ± (2, 3); keeping a negative length (3, 6); squaring instead of square-rooting (2, "√ undoes ²").
- **Visual standard, item by item:** 1 the frame and quote from the first frame, returning in 3 and 4; 2 a new stage every 30 to 60 s; 3 the layer peel with a live readout, the root fork, the quote dial resizing the glass; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 board in 3; 8 framed card and five bullets; 9 the answer splitting into two branches and the frame's side arrow refusing the negative one.
- **One idea at a time:** two roots (2), peeling (3), the general form (4), c = 0 (5), the decision (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 25 s and 28 s.
- **Avoided double teaching:** f03a's undoing and f01's pizza and (−4)² are recalled in grey chips.
- **Syllabus coverage:** `cib54d5e23`, non-linear part: change the subject of y = ax² + c (3 to 5, A1, A2; key notes 2, 3); solve problems (3 to 5, A1, A2); make decisions about solutions in context (3, 5, 6, A1, A2; key note 4).
- **Out of scope by design:** quadratics with an x term and parabolas (Year 12 a09); linear rearranging (f03a).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original, HSC style, 2 marks suggested, not an official marking scheme).** "The area of a circle is A = πr². A round outdoor table top has an area of 1.2 m². Make r the subject, then find the radius correct to the nearest centimetre."
Model answer: r² = A/π, so r = ±√(A/π). r = √(1.2/π) ≈ 0.618 m, about 62 cm (a radius cannot be negative). Classic mistake (crossed): "r = 1.2 ÷ π ≈ 0.38".

**Attempt 2 (scene 10; pack question 2, original, HSC style, 4 marks suggested).** "The cost, in dollars, of printing a square poster with side length x metres is C = 25x² + 15. (a) Make x the subject. (b) Find the side length of a poster that costs $55, correct to two decimal places. (c) Explain why only one of the two square roots is a valid answer."
Model answer: (a) C − 15 = 25x², x² = (C − 15)/25, x = ±√((C − 15)/25). (b) x² = 40/25 = 1.6, x ≈ 1.26 m. (c) x = −1.26 also solves the equation, but a side length cannot be negative, so only 1.26 m makes sense. Classic mistake (crossed): "x = √55 − 15".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Framing glass | 0.05s² + 12 = 32; 0.05s² = 20; s² = 400; s = ±20, keep 20 cm; check 0.05 × 400 + 12 = 32; slip √32 − 12 ≈ −6.34 | 1 to 4 |
| Other quotes | $17 → s = 10 cm; $57 → s = 30 cm | 4 |
| Pizza | r² = 500/π; r ≈ ±12.6, keep 12.6 cm; about 25 cm across | 5 |
| A1 | r = √(1.2/π) ≈ 0.618 m ≈ 62 cm; slip 1.2/π ≈ 0.38 | 8, 9 |
| A2 | x² = (55 − 15)/25 = 1.6; x ≈ ±1.26, keep 1.26 m; slip √55 − 15 | 10, 11 |
| Handoff | 285 km, 3 h 10 min (not solved here; f04a finds 90 km/h) | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (19 Nov 2026, scratchpad `s11f/verify.py`, `python -I`; 201 checks across f01 to f08, 0 failures); Codex to re-check.

- 0.05s² + 12 = 32 gives s = ±20; 20/0.05 = 400; 0.05 × 400 + 12 = 32; 0.05 × (−20)² + 12 = 32; √32 − 12 = −6.343...
- √((17 − 12)/0.05) = 10; √((57 − 12)/0.05) = 30.
- √(500/π) = 12.6157...
- √(1.2/π) = 0.61804...; 1.2/π = 0.38197...
- (55 − 15)/25 = 1.6; √1.6 = 1.26491...; √55 − 15 = −7.5838...

## Memory aid check

- **"Minus c, divide by a, then square root. Write ±."** with key line **"Keep the root that makes sense, and say why."** Original. Meaning, as said in scene 7: to make x the subject of y = ax² + c, undo the operations in reverse order (subtract c, divide by a, take the square root), give both roots, then choose by context with a reason. Assumptions checked: a ≠ 0 (always true in a quadratic of this form); (y − c)/a must not be negative for a real root (true in every case here; a negative value would mean no length fits, which the syllabus's context examples do not reach, so it is an author note only). It helps a new case: the pizza (c = 0) gives r = ±√(A/π) by the same steps with "minus c" skipped. Introduced after scenes 2 to 6.
- **Considered, not used:** "Square root last" (true, but it leaves out ± and the decision, which the syllabus names).

## Narration length estimate

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; scratchpad `s11f/count.py`, which reproduces e08's 5,632): **4,665 characters**, 13 scene headings. Characters per scene (1 to 13): 391, 446, 870, 395, 405, 342, 165, 226, 334, 340, 372, 304, 75.

At 13.3 characters per second the speech is about 351 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the root fork (2), the layer peel (3), the quote dial (4) and the decision tree (6) about 22 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 438 s (7 min 18 s)**, 132 s under the 570 s cap. At 4,665 characters it sits under the 5,000 guide, like r08, r09 and t09 (ruling 55): f03b is the narrow half of a split (ruling 88), one main question at Standard pace, with no padding. Feedback speech: about 25 s and 28 s.

Reserve trims if the voiced take runs long: scene 6's Year 12 sentence (about 9 s; the decision tree's second branch can stay silent); scene 1's "Last time, we undid adding and multiplying." (about 3 s; the grey chip carries it).

## Scene list and build ids

Lesson key `m-s11f03b` (route math-s11-f03, part b). Explainer folder `src/explainer/lessons/math-s11-f03b`; build inputs in `docs/production/claude-pm/lessons/math-s11-f03b/` (at voicing).

In order (13 scenes): hook-framing-quote, two-roots, worked-peel, rearrange-once, pizza-backwards, which-root, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 30 s | 1 | f03a's picture frame and quote |
| 30 to 65 s | 2 | Two roots |
| 65 to 145 s | 3 | g01 board: the layer peel and the root fork |
| 145 to 180 s | 4 | The quote dial |
| 180 to 215 s | 5 | The pizza backwards |
| 215 to 245 s | 6 | The decision tree |
| 245 to 260 s | 7 | Framed memory card |
| 260 to 350 s | 8 to 11 | Question cards and countdowns, then feedback |
| 350 to 375 s | 12 | The road to Canberra for f04a |
| 375 to 420 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: opens on f03a's frame; 1 to 2 stage change (the frame becomes a badge); 2 to 3 clear change to the board; 3 to 4 stage change (the frame returns large); 4 to 5 stage change to the pizza; 5 to 6 clear change; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, the ring shown full from "Pause here to answer."). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s11-f03b-learning-review.md`, `science_check` = `checks/m-s11-f03b-maths-check.md`.

## Assets

Inspected before choosing (19 Nov 2026, `public/assets/maths`, read only, each opened): `ma11-pizza-top-v1.png` (f01's pizza; reused); `ma11-drop-leaf-table-top-v1.png` (a round timber table top from above with a fold line near one side, true alpha; chosen for attempt 1's round table); `ma12-country-road-v1.png` (a two-lane country road with gum trees and fence posts, a wide strip, true alpha; chosen for the final frame); `ma11-road-sign-post-v1.png` (blank green sign; reused for "Canberra 285 km"). No car with a P plate exists (`ma12-used-hatchback-v1.png` is the a06, a07 and a13 depreciation car; `ms12-driving-school-car-v1.png` carries a learner's L-plate square and a roof sign).

Need (painted, new; see the Codex asset brief): `ms11s-p-plate-car-v1.png` (first seen in this video's final frame; f04a, f04b, f05 and f06 use it; ruling 17). From f03a: `ms11s-picture-frame-v1.png`. Reused: `ma11-pizza-top-v1.png` (5), `ma11-drop-leaf-table-top-v1.png` (8), `ma12-country-road-v1.png` and `ma11-road-sign-post-v1.png` (12).

Coded: the formulas, the layers, the root fork, the quote dial and the coded square, the decision tree and graph thumbnail, the poster outline, the board, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `FormulaSlots` (from f01), `StudioCancellation`, `RootExtract`, `DecisionTree` (trig-parts.tsx), `FunctionSimulator` (or a `FormulaSlots` slider readout), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs item 4):
1. **± fork on `RootExtract`** (small): at the square-root step two branches grow, "+" green and "−" grey; a `reject` prop lands a context chip on one branch and crosses it. Check: the kept branch carries the answer frame; the rejected branch stays readable (grey, not faded below 26 px) until it is crossed.

## Codex asset brief (Maths S11 F03B, a P-plate car for f04a to f06)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the designs are `docs/production/claude-pm/lessons/math-s11-f03b.md` (final frame) and `math-s11-f04a.md`, `f04b.md`, `f05.md`, `f06.md` (anchor). Paint after the learning reviews and maths checks pass and root gives the go-ahead, and before the f03b build. Save to `public/assets/maths/`. Transparent PNG with a true alpha channel, clean edges (check on black and white); ink and watercolour in the house style, matched to `maths/ms12-driving-school-car-v1.png` (the same side-view treatment) and `maths/ma12-country-road-v1.png` (so it sits on that road); no text, letters, numbers, logos, brand names, people, hands, faces, glow or shadow beyond a faint contact shadow. Never stretch; keep the native aspect ratio.

1. `ms11s-p-plate-car-v1.png` (about 1800 × 900 px): a small modern hatchback in side view, facing right, in a calm mid-blue (not red, not lime green, so it is not mistaken for `ma12-used-hatchback-v1.png` or the driving-school car), clean and new-looking, with a plain **white square** plate shape (with a thin red border) in the rear side window, blank (the red "P" is coded over it in the build). No roof sign. Windows softly tinted, no driver or passenger visible. Wheels straight; a faint contact shadow only, so the car can sit on the country road strip.

Report inspection on the paper background (`#f6f1e7`) at 640 px and 300 px wide (the badge size) and on top of `ma12-country-road-v1.png`, and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ms11s-f03b-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quote matches the route-inputs JSON exactly (text form y = ax^2 + c).
3. Confirm no part claims to come from a site lesson (MS-81: the site does not rearrange y = ax² + c), and that the framing price is labelled an example.
4. Confirm both attempts carry every demand and neither card nor picture shows an answer.
5. Confirm scene 1 matches f03a's final frame and scene 12's frame shows no speed.
6. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Rearranging y = ax² + c: Which Root Do You Keep? | Year 11 Maths Standard

(Title length: 73 characters.)

Description: A framing shop prices glass with C = 0.05s² + 12. Your quote is $32: how big is the frame? When the letter you want is squared, peel the formula from the outside in: subtract, divide, then take the square root. See why every positive number has two square roots, how to write ±, why a side length keeps only the positive root, how to work a pizza's area backwards to its radius, and how to say which answer fits and why. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 11, Formulas and equations. Year 11 is one course for Standard 1 and Standard 2.
Syllabus content (NSW Mathematics Standard 11-12, 2024), Year 11:
"Change the subject of linear and non-linear formulas limited to quadratics of the form y = ax^2 + c to solve problems and make decisions about solutions in the context of the problem" (y = ax^2 + c in this video; linear formulas in the previous one)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa346f5353

Builds on: Changing the Subject of a Formula. Next: Speed, Distance and Time.

#Year11Maths #MathsStandard #Formulas #HSCScience

## Open decisions

- **1. No site lesson link (root).** The description has no "Full lesson" line because no site lesson covers y = ax² + c (MS-81). If the website adds the suggested lesson04 example, root may add the link.
- **2. Scene 6's Year 12 sentence (learning review).** It says both roots can count for a position on a graph, so students do not learn "always reject the negative". Check it is clear without the graph being taught; it is the first reserve trim.
- **3. Title length (root).** 73 characters; a shorter alternative is "Rearranging y = ax² + c | Year 11 Maths Standard" (48).

## Review notes

- Student learning review: trace from f03a, f01 and Stage 5 square roots only. Check that two roots are earned before ±; that the outside-in order has its reason; that the rejection is said with its reason every time; that the quote dial and the pizza make the rearranged form feel useful; that the cards give nothing away. Then the Codex maths check and error check, then voicing and a build to grade A.
