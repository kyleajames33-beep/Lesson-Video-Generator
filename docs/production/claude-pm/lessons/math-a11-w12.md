# Maths A11 W12: How do we build a linear model or inequality from a real situation? Naming variables, fixed amounts and rates, restrictions, limits as inequalities, and rounding in context (design)

Status: learning review resolved, Revision 1 unchanged (status updated 23 Nov 2026, coherence audit N-4): the independent learning review passed with 0 blockers and 0 should-fix findings (`../checks/m-a11-w12-learning-review.md`) and the Codex maths check passed (`../checks/m-a11-w12-maths-check.md`). Not voiced. Next: voicing on the Google voice and a build on the studio kit to grade A. Revision 1 (16 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`, the d01 Revision 6 pattern and the f01 and s01 models). Not voiced (no `math-a11-w12/` folder, no audio). Nothing recorded; human listening pending.

Narration 5,659 characters, 14 scene headings, about 513 s with holds (the key-notes scene fixed at 45 s), counted by script with the build parser rules (see "Narration length estimate").

Scope: twelfth video of the Year 11 Mathematics Advanced course (outline playlist order 12), after w11 (intercepts, parallel and perpendicular lines) and before w13 (simultaneous linear models and break-even). Pre-design pack: `../pre-design/maths-a11/math-a11-w12.md` (brief 243). Site lessons (read through the pack's quotations, read only): `working-with-functions/lesson18.sa.html` (Modelling with Linear Functions, SHA256 `cce25d1b6c1b41586c2bd6711af9c183378ef0230354350ff07f89682b88b690`, `we-1`, `we-3`) and `algebraic-techniques-and-inequalities/lesson03.sa.html` (Modelling with Linear Inequalities, SHA256 `2f8f0de688559310dc105e02196b32fa642288c9357a6759dbe7617ce6cdbecf`, `we-3`). Every number recalculated with SymPy. Route entry: `math-a11-w12` in `../../programme/maths-a11-route-inputs-1.json`.

Owner rules applied: 2024 syllabus only, content points cited by codename and exact wording; painted plates for real objects (a gym membership card, a kettlebell, a delivery trolley and boxes of weights, a go-kart, a garden water tank), coded graphs, readouts and algebra; no people, hands or faces; one main learner question; one reasoning stage at a time; worked examples in the g01 layout with a framed answer and a crossed slip; "Pause here to answer." then a 10 s countdown with the full worded question and a picture; brief feedback with one crossed mistake; original HSC-style questions; key notes as five short bullets with a framed memory card; everyday anchor (fitness and money, not science); Australian spelling; no em dashes; conversational narration that explains the cause before the rule.

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Working with functions, Constructing and using functions; NESA content-system codenames, official `code` field empty), quoted from `../../programme/maths-a11-route-inputs-1.json`:

- `ci4cd0c8d9`: "Construct and use linear functions to model and solve problems in real-world situations, identifying the independent and dependent variables and any restrictions on these variables, and justify conclusions in the context of the problem"
- `ci7fdca2b4`: "Use linear inequalities to model and solve problems in real-world situations, and justify conclusions in the context of the problem"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

**Boundary:** starts from w11's final frame (the gym card and kettlebell, "$60 to join, then $25 a month", empty axes and a dashed "budget?" line). Builds a linear model from words, naming the independent and dependent variables with units (w08's terms), with the fixed amount as the constant and the rate as the gradient, and states the restrictions (`ci4cd0c8d9`); shows a decreasing model valid only on part of its line (site lesson 18 `we-3`, numbers unchanged, re-contexted); turns "at most" and "at least" into inequalities, solves them and rounds in the direction the context demands (`ci7fdca2b4`), including the site's exact case (lesson 3 `we-3`, numbers unchanged, re-contexted). Stops at one model at a time. Not taught: two models together, break-even and simultaneous equations (w13); the site's Plan A against Plan B (lesson 18 `we-2`, w13); the site's taxi budget (lesson 3 `we-1`; the taxi is w08's anchor, and its rounding idea is carried here by the gym budget instead).

## Decisions

- **Anchor: a gym membership (painted plates, live).** The site's own model (lesson 18 `we-1`: a $60 joining fee plus $25 a month) is the anchor. It carries every idea: the variables with units and which is independent (2); the once-only fee as the constant and the monthly charge as the gradient, with the swap as the classic slip (2); whole months making the graph a row of dots (3); a class pass that runs out, so a model that holds only for part of its line (4); a budget as "at most", rounding down (5); a delivery trolley's weight limit, where the answer lands exactly (6); "at least" a total, rounding up (7). Fitness and money, not science; distinct from every Year 12 Maths anchor (grep: no gym) and from the w01 to w07 packs' suggestions and from w08 to w11 in this batch. The pack's phone battery and ride-share were not used: phones are heavily used in Year 12, and the taxi is w08's anchor.
- **Re-contexting with the site's numbers unchanged (decision 38 precedent).** Lesson 18 `we-3` (fish in a pond, P = 500 − 20t) becomes the gym's 500-credit class pass with 20 credits used a week; lesson 3 `we-3` (a lift's 480 kg limit, a 30 kg trolley, 15 kg boxes) becomes the gym's delivery trolley rated for 480 kg carrying 15 kg boxes of weights. Lifts belong to Year 12 i10 (root decision 28), and a pond is a science context. Numbers, working and answers are unchanged.
- **Idealising assumptions (author notes, not learner copy).** (i) The gym bills whole months only, with no cancellation fee or price rise. (ii) The class pass uses exactly 20 credits each week. (iii) The trolley's 480 kg rating includes the trolley's own 30 kg (as in the site's lift example, where the limit includes the empty trolley).
- **Simulations (standard item 3).**
  1. **The month ticker** (scenes 1, 3): a month counter steps 0 to 12; each step a blue dot drops onto the graph at (m, 60 + 25m) and the `LiveReadoutBoard` shows "months m" (amber) and "total C" (blue); the teal $60 block sits at the base of every column and a violet $25 block adds per month (a growing stacked bar beside the card).
  2. **The budget line** (scenes 5, 7): a dashed horizontal limit line slides to C = 300; dots on or under it fill solid, dots above it turn hollow grey; a readout "months affordable" counts them. In scene 7 a second line rises to C = 500 and the dots on or above it fill solid instead, readout "months needed".
  3. **The trolley load** (scene 6; `SpriteStack`): painted boxes stack onto the painted trolley in rows of five; a coded load gauge (0 to 480 kg) beside it fills 30 + 15n; at n = 30 the gauge is exactly full (green tick); a ghosted 31st box hovers with "495 kg" and is crossed.
- **Colour roles (fixed for the whole video).** Independent variable (m, t, n) **amber** (`MATH_AMBER`); dependent variable (C, P) **blue** (`MATH_BLUE`); the fixed amount (the constant) **teal** (`MATH_TEAL`); the rate (the gradient) **violet** (`MATH_GRADIENT`); limit lines dashed ink with their labels; excluded values and the out-of-range part of a line grey (`MATH_EXCLUDED`); answer **green**; mistake **red**, crossed slips only.
- **Large type (standard item 5).** Current working line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; all text above y = 950.
- **Handwritten voice (standard item 6).** `HandTag`: "fixed: paid once", "rate: every month", "you choose", "it follows", "whole months: dots", "can't happen", "valid 0 ≤ t ≤ 25", "at most: ≤", "at least: ≥", "max: round down", "min: round up", "check both", "exactly on the limit", circles, arrows and crossings. At most two live at once.
- **Stage changes (standard item 2), about every 30 to 60 s.** w11's gym frame becomes the month ticker (1); the model card building C = 60 + 25m (2); the dot graph (3); the class pass line (4); the budget line (5); the trolley load (6); the "at least" line on the same graph (7); framed memory card (8); question cards with pictures (9 to 12); the lemonade stall handoff (13); key notes (14).
- **Worked examples (g01 layout, standard item 7).** Scene 2 builds the model as a g01 board (task strip "Write a model for the total cost, with variables and restrictions", givens "joining fee $60", "$25 a month", rows naming, building and restricting); crossed slip "C = 25 + 60m" captioned "the $60 is paid once". Scene 5 (gym budget): 60 + 25m ≤ 300, m ≤ 9.6, 9 months; crossed slip "10 months" captioned "$310 is over". Scene 6 (lesson 3 `we-3`, re-contexted): 30 + 15n ≤ 480, n ≤ 30; check 31 boxes = 495 kg. Feedback scenes carry a `GivensStrip`, rows at 52 px, a green framed answer and one crossed slip.
- **Memory aid (standard item 8).** Framed `MemoryAidCard`: "Name it, limit it, solve it, say it." with the key line "A maximum rounds down. A minimum rounds up. Check both whole numbers." Key notes are five short bullets beside the card; 45 s.
- **Visual surprise (standard item 9).** The model's graph is not a line at all: as the months tick, it appears as a row of separate dots on a faint line (scene 3), because whole months are the only inputs. Second: on the same graph, the $300 budget line and the $500 goal line round 9.6 and 17.6 in opposite directions (scenes 5, 7).
- **Attempts (original; re-contexted from the pack where its context clashed).** A1 (pack question 1 with laps for kilometres, so that rounding is forced): "A go-kart track charges a $4 entry fee plus $1.60 per lap. You have $30. Write an inequality for the number of laps, n, and find the greatest number of laps you can afford." Answer 4 + 1.6n ≤ 30, n ≤ 16.25, 16 laps. Crossed: "17 laps" ($31.20). A2 (pack question 2's numbers, a garden water tank instead of a phone battery; a prepaid card was avoided because w06's anchor is a prepaid travel card): "A garden water tank holds 84 L. A drip system uses 6 L of water each hour. Write a model for the volume V left after t hours, state the restrictions on t, and find when the tank is empty." Answer V = 84 − 6t, 0 ≤ t ≤ 14 (t need not be whole), empty after 14 hours. Crossed: "t ≥ 0" alone.
- **Mistake scene:** none separate. Swapping the rate and the fixed amount (2 crossed); no units or restrictions (2, 3); using a model outside its domain (4); "at most" as < (5 tag); rounding a maximum up (5 crossed; A1 crossed); rounding a minimum down (7); a restriction with no upper end (A2 crossed).
- **Cause chain taught, in order:** (1) a quantity that grows by the same amount each step is linear, so a line can model it (1); (2) a once-only amount does not depend on the variable, so it is the constant; a per-unit amount multiplies the variable, so it is the gradient (2); (3) the situation limits the variable (no negative months, whole months), so the model has restrictions and its graph may be dots (3); (4) a model can predict impossible values, so its valid domain is part of the answer (4); (5) "at most" and "at least" include the boundary, so they become ≤ and ≥ (5, 7); (6) dividing by a positive number keeps the sign (5; w06 for negatives); (7) a maximum must not be exceeded, so a non-whole answer rounds down; a minimum must be reached, so it rounds up; checking the whole numbers either side proves it (5, 7).
- **Entry knowledge (route):** w10 (gradient and intercept meaning); w06 (solving linear inequalities); w08 (independent and dependent variables).
- **Learner-visible vocabulary (plain meaning at first use):** model (an equation that describes a real situation, 1); restriction (a limit on the values a variable can take, 3); "at most" (no more than: ≤, 5); "at least" (no less than: ≥, 7); valid (where the model still describes the real situation, 4).
- **Handoff (to w13, "Where do two linear models meet, and what does the meeting point mean?").** Scene 13: the painted lemonade stall (`ma11-lemonade-stall-v1.png`, w13's anchor) beside axes "cups sold n" and "dollars", with a teal "$200 site fee" chip, "each cup: costs $3, sells for $5", two "?" lines sketched faintly from (0, 200) and (0, 0) without equations, chip "Next: two models, one meeting point" and "?". This is w13's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) C = 60 + 25m: C(1) = 85, C(2) = 110, C(9) = 285, C(10) = 310, C(12) = 360, C(17) = 485, C(18) = 510. 60 + 25m ≤ 300 ⇔ m ≤ 9.6; 60 + 25m ≥ 500 ⇔ m ≥ 17.6.
  (b) P = 500 − 20t: P = 0 at t = 25; valid 0 ≤ t ≤ 25, 0 ≤ P ≤ 500.
  (c) 30 + 15n ≤ 480 ⇔ n ≤ 30; 30 + 15(30) = 480; 30 + 15(31) = 495.
  (d) A1: 4 + 1.6n ≤ 30 ⇔ n ≤ 16.25; 16 laps cost $29.60; 17 laps cost $31.20. A2: 84 − 6n = 0 at n = 14; 0 ≤ B ≤ 84.
  (e) Pronunciations: "sixty plus twenty-five m", "nine point six", "seventeen point six", "one point six n", "sixteen point two five". Voice-pilot item: none new.
  (f) Windows: gym graph m 0 to 20 (ticks 2), C 0 to 600 (ticks 100); class pass t 0 to 30, P −100 to 550; trolley gauge 0 to 520 kg with the 480 kg mark.

Main question: *A gym charges $60 to join and $25 a month. How do we turn sentences like this into a linear model with named variables and limits, turn a budget into an inequality, and give an answer that makes sense in the situation?*
Entry knowledge (w10; w06; w08): gradient and intercept meaning; solving linear inequalities; independent and dependent variables.
Stops after: building and using one linear model with restrictions; linear inequalities from "at most" and "at least"; rounding in context. No two-model comparisons or break-even.
Handoff: math-a11-w13: a lemonade stall's cost and revenue, where do they meet (a question only).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed; see Decisions): independent amber; dependent blue; fixed amount teal; rate violet; limit lines dashed ink; excluded grey; answer green; mistake red, crossed slips only. Type: current line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; all text above y = 950. Every stage's main visual is solid from the stage's first frame. Header strip "MATHEMATICS ADVANCED · WORKING WITH FUNCTIONS"; scene headings in the hand font, 44 px.

### 1. hook: from a sentence to a line
> Here's that gym. Sixty dollars to join, then twenty-five dollars a month. Watch the months tick by. After one month, you've paid eighty-five dollars. After two, a hundred and **ten**. The total grows by the same amount every month, so a straight line should model it. But this isn't an equation yet. It's a sentence. So how do we turn words into a linear model, and a budget into an inequality, and then say what the answer **means**?

Visual: opens on w11's final frame exactly (the painted gym card `ma11-gym-membership-card-v1.png` with its coded line "$60 to join, then $25 a month" and the painted kettlebell `ma11-kettlebell-v1.png` at the left; empty axes "months" and "total cost ($)" at the right with the dashed "budget?" line; chips "Next: build the line from the words" and "?"). On the first sentence the "Next" chip fades and the heading writes on: "How do we build a linear model from a real situation?". The axes gain their scales (m 0 to 20, C 0 to 600). On "Watch" the month ticker runs (simulation 1): the month counter steps 0, 1, 2; at 0 a teal dot at (0, 60) and a teal $60 block; at 1 a violet $25 block adds and a blue dot drops at (1, 85), readout "total $85"; on "ten" the dot at (2, 110), readout "$110". On "same amount" violet "+25" arcs draw between the dots, hand tag "same step: linear". On "means" the chip "Words → model → answer in context" moves to the top right as the scene question.

### 2. name it, then build it
> Step one, name the variables, with units. Let m be the number of months, and C the total cost in dollars. You choose how many months, so m is the independent variable. C depends on m, so it's the dependent **variable**. Writing the units now stops you mixing up dollars and months later. Step two, build the rule. The sixty dollars is paid once, whatever m is, so it's the constant, where the line starts. The twenty-five dollars is added every month, so it multiplies m. It's the gradient, the **rate**. So C equals sixty plus twenty-five **m**. Mixing these up, twenty-five plus sixty m, would charge the joining fee every **month**.

Visual: clear change to a g01 board at the left with the graph shrunk at the right (720 × 520 px, the three dots kept). Task strip, 44 px: "A gym charges a $60 joining fee plus $25 per month. Write a model for the total cost, defining the variables and any restrictions." (site lesson 18 `we-1`). Givens card: "joining fee $60" (teal), "$25 per month" (violet). Rows, 52 px: "Let m = number of months (amber)" with a hand tag "you choose"; on "variable" "C = total cost in dollars (blue)", hand tag "it follows", and small tags "independent" and "dependent" beside each. On "paid once" the "$60" in the givens card lifts and flies into a slot "C = 60 + ___", ringed teal, hand tag "fixed: paid once". On "rate" the "$25" flies into "C = 60 + 25m", violet, hand tag "rate: every month". On "m" the row "C = 60 + 25m" in a green frame; on the graph the faint line through the dots draws, the teal intercept and violet slope tagged. On "month" (last bold) a red slip "C = 25 + 60m" writes and is crossed, caption "the $60 is paid once".

### 3. restrictions, and using the model
> Step three, restrictions. Months can't be negative, so m is at least **zero**. And this gym bills by the whole month, so m is a whole number. That changes the graph. It isn't a solid line. It's a row of **dots**, one for each month, sitting on the line. Now use it. A year is twelve months, so C equals sixty plus twenty-five times twelve, which is three hundred and sixty **dollars**. That's the answer in context: a year at this gym costs three hundred and sixty dollars.

Visual: camera continue; the graph grows to 1,100 × 600 px at the right, the model chip "C = 60 + 25m" at the top left. Row, 52 px: "Restrictions:"; on "zero" "m ≥ 0", and the line's left part (m < 0) turns grey, hand tag "no negative months". On "whole number" the row adds "m a whole number". On "dots" the month ticker runs on (simulation 1) from 3 to 12: dots drop one by one while the faint line between them fades to a hairline, hand tag "whole months: dots". On "Now use it" the counter jumps to 12 and the dot (12, 360) glows. Row: "C = 60 + 25(12)"; on "dollars" "= 360" in a green frame. On the last sentence the framed answer "A year costs $360." with the card plate pulsing.

### 4. a model that stops working
> Some models only work for part of their line. The gym also sells a class pass of five hundred credits, and each weekly class uses twenty. So the credits left after t weeks are P equals five hundred minus twenty **t**. When do they run out? Set P to zero: twenty t equals five hundred, so t is twenty-five **weeks**. After that, the line keeps falling into negative credits, which can't **happen**. So the model only holds for t from zero to twenty-five, and the credits stay between zero and five hundred. Stating that limit is part of the answer.

Visual: clear change: the card plate (380 px) at the top left with a coded "credits 500" readout in its blank area; a `StudioPlot` (1,200 × 620 px, t 0 to 30, P −100 to 550). Givens chip: "500 credits (teal), 20 credits a week (violet)" (site lesson 18 `we-3`, re-contexted). On "t" the line P = 500 − 20t draws from (0, 500) downward in blue, with a week ticker counting t and the readout following (500, 480, 460 …). Row, 52 px: "P = 0: 20t = 500"; on "weeks" "t = 25", the point (25, 0) ringed green. On "happen" the ticker runs past 25 and the line continues below the axis in grey dashes, readout "−40 credits?" crossed grey, hand tag "can't happen". On "only holds" an amber bracket under the axis from 0 to 25, hand tag "valid 0 ≤ t ≤ 25", and a blue bracket up the P axis from 0 to 500, and the framed answer (green): "Credits run out after 25 weeks; use the model only for 0 ≤ t ≤ 25."

### 5. a budget is an inequality
> Now a limit. You have three hundred dollars to spend on the gym. How many months can you afford? At most three hundred means less than or equal to. So sixty plus twenty-five m is less than or equal to three **hundred**. Subtract sixty: twenty-five m is at most two hundred and forty. Divide by twenty-five, a positive number, so the sign stays the same, and m is at most nine point **six**. The algebra doesn't know that months are whole. The rounding comes from the situation, and m counts whole months. Nine months costs two hundred and eighty-five dollars. Ten months costs three hundred and ten, which is over budget. So you can afford nine months. A maximum rounds **down**.

Visual: clear change back to the gym dot graph (1,100 × 600 px) with a g01 strip at the left. Task strip: "You have $300. How many months can you afford?" Givens card: "C = 60 + 25m", "budget $300". On "At most" a chip "at most → ≤", hand tag "includes 300". On "hundred" the budget line (simulation 2) slides to C = 300 (dashed, labelled "$300"); dots on or under it fill solid blue, dots above it turn hollow grey; row, 52 px: "60 + 25m ≤ 300". Rows one at a time: "25m ≤ 240"; on "six" "m ≤ 9.6", hand tag "÷ 25 > 0: no flip". On "The algebra doesn't know" a grey tag "rounding comes from the context"; on "whole months" the dots at m = 9 and m = 10 glow: labels "$285 ✓" and "$310 ✗ over". On "down" the framed answer (green): "9 months", hand tag "max: round down", and a red slip "10 months" writes small and is crossed (caption "$310 is over").

### 6. worked example: right on the limit
> Here's one where the answer comes out whole. The gym's delivery trolley is rated for at most four hundred and eighty kilograms. The empty trolley weighs thirty, and each box of weights weighs fifteen. What's the most boxes in one load? Let n be the number of boxes. Thirty plus fifteen n is at most four hundred and eighty. So fifteen n is at most four hundred and fifty, and n is at most **thirty**. Thirty boxes reach the limit exactly, and that's allowed, because at most includes equal. No rounding is needed this time, but the check still is. Thirty-one would weigh four hundred and ninety-five kilograms, which is **over**.

Visual: clear change to the trolley (simulation 3). Left: the painted flatbed trolley `ma11-flatbed-trolley-v1.png` (about 640 px wide) with a coded load gauge beside it (0 to 520 kg, a dashed mark at 480 labelled "limit 480 kg"). Right: the g01 board. Task strip: "A trolley is rated for at most 480 kg. It weighs 30 kg, and each box weighs 15 kg. Find the most boxes in one load." (site lesson 3 `we-3`, re-contexted). Givens card: "limit 480 kg", "trolley 30 kg" (teal), "15 kg per box" (violet). On "Let n" the row "30 + 15n ≤ 480" (52 px), and painted boxes `ma11-weights-box-v1.png` start stacking on the trolley in rows of five while the gauge fills (30 + 15n). Rows: "15n ≤ 450"; on "thirty" "n ≤ 30", the 30th box lands and the gauge sits exactly on 480 with a green tick, hand tag "exactly on the limit". Framed answer (green): "30 boxes (480 kg)". On "over" a ghosted 31st box hovers above the stack, its gauge reading "495 kg", and is crossed.

### 7. at least: rounding the other way
> Rounding depends on the question. Suppose you ask how many months until you've paid at least five hundred dollars in total. Now it's sixty plus twenty-five m is greater than or equal to five **hundred**. So m is at least seventeen point **six**. Seventeen months isn't enough: that's four hundred and eighty-five dollars. So it takes eighteen months. A minimum rounds **up**. Either way, check the whole number on each side, and give the answer in the words of the question.

Visual: clear change back to the gym dot graph (same window), the scene 5 budget line still shown faint at 300 with its 9-month bracket. Task strip: "How many months until the total paid is at least $500?" On "at least" a chip "at least → ≥". On "hundred" a second dashed line rises to C = 500 (simulation 2, "$500"); dots on or above it fill solid, dots below turn hollow; row, 52 px: "60 + 25m ≥ 500". On "six" "m ≥ 17.6". On "Seventeen months" the dots at m = 17 and 18 glow: "$485 ✗ short" and "$510 ✓". On "up" the framed answer (green): "18 months", hand tag "min: round up"; beside the scene 5 answer the two tags "max: round down" and "min: round up" sit side by side. On the last sentence a hand tag "check both".

### 8. memory aid
> Here's a four-step routine for any model. Name it, limit it, solve it, say it. Name the variables with units. Limit them with the restrictions. Solve. Then say the answer in the words of the question, rounding the right **way**.

Visual: stage change to the framed `MemoryAidCard` (about 1,300 × 600 px, double ink frame, hand-font heading "Memory aid"). Left slot: the gym card (220 px) above four small icons drawn on cue: a label tag (name), a fence bracket (limit), an equals sign (solve), a speech line (say). Main line, hand font 60 px: "Name it, limit it, solve it, say it." On "way" the key line, 40 px: "A maximum rounds down. A minimum rounds up. Check both whole numbers." Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. A go-kart track charges a four dollar entry fee, plus one dollar sixty per lap. You have thirty dollars. Write an inequality for the number of laps, n, and find the greatest number of laps you can afford. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A go-kart track charges a $4 entry fee plus $1.60 per lap. You have $30. Write an inequality for the number of laps, n, and find the greatest number of laps you can afford." The full question stays on screen. Picture slot: the painted go-kart `ma11-go-kart-v1.png` (about 360 px wide). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> Four plus one point six n is at most **thirty**. Subtract four: one point six n is at most twenty-six, so n is at most sixteen point two **five**. Laps are whole, and this is a maximum, so round down: sixteen laps, costing twenty-nine dollars sixty. Seventeen is wrong. It rounds up, and seventeen laps cost thirty-one dollars twenty, which is over **budget**.

Visual: the card shrinks to the top (30 px). `GivensStrip`: "$4 entry (teal)", "$1.60 per lap (violet)", "$30" ("$4", "$1.60" and "$30" underlined in the card as used). Rows, 52 px: on "thirty" "4 + 1.6n ≤ 30"; "1.6n ≤ 26"; on "five" "n ≤ 16.25". On "round down" the framed answer (green): "16 laps ($29.60)", hand tag "max: round down". On "budget" a red slip "17 laps" writes and is crossed (hand caption "$31.20 > $30"). Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. A garden water tank holds eighty-four litres. A drip system uses six litres of water each hour. Write a model for the volume V left after t hours, state the restrictions on t, and find when the tank is empty. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A garden water tank holds 84 L. A drip system uses 6 L of water each hour. Write a model for the volume V left after t hours, state the restrictions on t, and find when the tank is empty." The full question stays on screen. Picture slot: the painted garden water tank `ma11-water-tank-v1.png` (about 300 px tall) with no level or readout shown. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 12. feedback 2 (brief)
> The volume starts at eighty-four and falls by six each hour, so V equals eighty-four minus six **t**. Set V to zero: six t equals eighty-four, so t is **fourteen**. Time can be any value here, not just whole hours, so t runs from zero to fourteen, and the tank is empty after fourteen hours. Saying only that t is at least zero is wrong. Past fourteen, the model gives a negative **volume**.

Visual: the card shrinks to the top. `GivensStrip`: "84 L (teal)", "6 L each hour (violet)" (underlined as used). On "t" the row "V = 84 − 6t" (52 px), "84" teal, "6" violet, the minus sign ringed with a hand tag "falls". On "fourteen" the row "V = 0: 6t = 84, t = 14". On "Time can be any value" the framed answer (green): "V = 84 − 6t; 0 ≤ t ≤ 14; empty after 14 hours", with a small line graph from (0, 84) to (14, 0), solid (not dots), hand tag "any time: a solid line". On "volume" a red slip "t ≥ 0" writes and is crossed (hand caption "no upper limit: V < 0 after 14"). Hold about 1 s.

### 13. handoff
> So a linear model names its variables, uses the fixed amount as the constant and the rate as the gradient, and states its limits. Next, two models at once. A lemonade stall at a weekend market pays two hundred dollars for its site. Each cup costs three dollars to make, and sells for five. One line for the cost, and one for the money coming in. Where do they **meet**?

Visual: the routine shows as a small chip at the top ("Name it, limit it, solve it, say it", 34 px), then fades on "Next". Board clears: at the left, the painted lemonade stall `ma11-lemonade-stall-v1.png` (about 640 px wide, solid; w13's anchor) with a teal chip "$200 site fee" and a chip "each cup: costs $3, sells for $5"; at the right, axes "cups sold n" (amber) and "dollars" (blue), with two faint unlabelled lines sketched from (0, 200) and (0, 0), no equations. On "meet" a "?" ring where they cross. Chip "Next: two models, one meeting point". Hold about 2 s. This is w13's opening frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Name variables with units; say which is independent.
- Fixed amount: the constant. Rate: the gradient.
- State restrictions, such as m ≥ 0, whole numbers.
- At most: ≤. At least: ≥.
- Maximum: round down. Minimum: round up. Check both.

Memory aid (framed card, right side of the notes screen, as in scene 8): *Name it, limit it, solve it, say it.* Key: *A maximum rounds down. A minimum rounds up. Check both whole numbers.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades (1 s) back to scene 13's frame exactly (the lemonade stall with its chips, the axes with two faint lines and the "?" ring, "Next: two models, one meeting point"). This is the final frame and w13's opening frame.

## Teaching checks

- **Does it explain causes?** Why linear: the same step each month (1). Why 60 is the constant and 25 the gradient: once against every month (2). Why dots: whole months (3). Why a valid domain: negative credits cannot happen (4). Why ≤ for "at most": the boundary is allowed (5, 6). Why no flip: dividing by a positive (5). Why round down for a budget and up for a goal: a maximum must not be passed, a minimum must be reached; the neighbouring whole numbers prove it (5, 7).
- **Misconceptions addressed:** rate and fixed amount swapped (2 crossed); no restrictions (3, A2 crossed); using a model outside its domain (4); < for "at most" (5 chip); rounding a maximum up (5, A1 crossed); rounding a minimum down (7).
- **Visual standard (`../maths-visual-standard.md`), item by item:** 1 the painted gym card and kettlebell from the first seconds, returning in 3, 4, 5, 7 and 8; 2 a new stage every 30 to 60 s; 3 the month ticker, the budget and goal lines filtering dots live, the trolley load with its gauge; 4 fixed colour roles; 5 large type; 6 hand tags; 7 g01 boards in 2, 5 and 6, framed answers and crossed slips; 8 framed memory card and five short bullets; 9 the line that turns into dots, and the two limit lines rounding opposite ways.
- **One idea at a time:** build (2), restrict and use (3), validity (4), ≤ and round down (5), exact case (6), ≥ and round up (7).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible, each card with a picture; 10 s each with the invitation to pause; nothing answer-bearing. One crossed mistake each; feedback about 27 s and 30 s.
- **Avoided double teaching:** solving inequalities (w06) and gradient and intercept (w10) are used, not re-taught.
- **Syllabus coverage:** `ci4cd0c8d9` (2, 3, 4; A2; key notes 1, 2, 3); `ci7fdca2b4` (5, 6, 7; A1; key notes 4, 5).
- **Out of scope by design:** two-model comparisons and break-even (w13).

## Practice questions and model answers

**Attempt 1 (scene 9; original wording, HSC style, 2 marks suggested, not an official marking scheme).** "A go-kart track charges a $4 entry fee plus $1.60 per lap. You have $30. Write an inequality for the number of laps, n, and find the greatest number of laps you can afford."
Model answer: 4 + 1.6n ≤ 30, so 1.6n ≤ 26 and n ≤ 16.25. Laps are whole and this is a maximum, so the greatest number is 16 laps (cost $29.60; 17 laps would cost $31.20). Classic mistake (crossed): "17 laps".

**Attempt 2 (scene 11; original wording, HSC style, 3 marks suggested).** "A garden water tank holds 84 L. A drip system uses 6 L of water each hour. Write a model for the volume V left after t hours, state the restrictions on t, and find when the tank is empty."
Model answer: V = 84 − 6t (V in litres, t in hours). V = 0 when t = 14, so 0 ≤ t ≤ 14 (and 0 ≤ V ≤ 84); t need not be a whole number. The tank is empty after 14 hours. Classic mistake (crossed): "t ≥ 0" (no upper limit).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Gym model (site lesson 18 `we-1`) | C = 60 + 25m; C(1) = 85, C(2) = 110, C(12) = 360 | 1, 2, 3 |
| Class pass (site lesson 18 `we-3`, re-contexted) | P = 500 − 20t; P = 0 at t = 25; valid 0 ≤ t ≤ 25 | 4 |
| Budget | 60 + 25m ≤ 300; m ≤ 9.6; C(9) = 285, C(10) = 310; 9 months | 5 |
| Trolley (site lesson 3 `we-3`, re-contexted) | 30 + 15n ≤ 480; n ≤ 30; 480 kg at 30; 495 kg at 31 | 6 |
| At least | 60 + 25m ≥ 500; m ≥ 17.6; C(17) = 485, C(18) = 510; 18 months | 7 |
| A1 | 4 + 1.6n ≤ 30; n ≤ 16.25; 16 laps $29.60; 17 laps $31.20 | 9, 10 |
| A2 | V = 84 − 6t; t = 14; 0 ≤ t ≤ 14 | 11, 12 |
| Handoff | $200 site fee; cost $3, price $5 per cup | 13 |

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy 1.14 (16 Nov 2026, scratchpad `w08w14/verify.py`); Codex to re-check.

- 60 + 25m at m = 1, 2, 9, 10, 12, 17, 18: 85, 110, 285, 310, 360, 485, 510.
- 240/25 = 9.6; 440/25 = 17.6.
- 500/20 = 25.
- 450/15 = 30; 30 + 15(30) = 480; 30 + 15(31) = 495.
- 26/1.6 = 16.25; 4 + 1.6(16) = 29.6; 4 + 1.6(17) = 31.2.
- 84/6 = 14.

## Memory aid check

- **"Name it, limit it, solve it, say it."** Original (echoing the site lesson's "name it, restrict it" step heading). Meaning, as said in scene 8: define the variables with units, state their restrictions, solve, then answer in the context's words with the right rounding. Assumptions checked: it fits every single-model task in this video and w13's models. Key line: "a maximum rounds down, a minimum rounds up" holds for whole-number answers to ≤ and ≥ limits on an increasing quantity of whole items; the "check both whole numbers" clause covers any case where the direction is unclear (for example a decreasing model). Introduced after the causes in 5 and 7.
- **Considered, not used:** "Budget down, target up" (shorter, but names only two contexts).

## Narration length estimate

Counted 16 Nov 2026 with the build parser rules (`### N.` headings; only lines starting "> " inside the scene, joined with a space, `**` removed; the total is the sum of the scene strings): **5,659 characters**, 14 scene headings. Characters per scene (1 to 14): 426, 619, 461, 535, 667, 621, 462, 224, 237, 348, 240, 379, 365, 75.

At 13.3 characters per second the speech is about 425 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, two feedbacks 1 s each, handoff 2 s) 6 s; settling for the month ticker (1, 3), the flying amounts (2), the credits ticker (4), the limit lines (5, 7) and the trolley stack (6) about 22 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 513 s (8 min 33 s)**, inside the 5,500 to 6,800 character band and about 57 s under the 570 s cap.

Reserve trims, if the voiced takes run long, in this order: scene 3's "That's the answer in context: a year at this gym costs three hundred and sixty dollars." (keep the framed answer). That is the only trim available: a second would take the count below the 5,500 floor.

## Scene list and build ids

Lesson key `m-a11w12` (route math-a11-w12). Explainer folder `src/explainer/lessons/math-a11-w12`; build inputs in `docs/production/claude-pm/lessons/math-a11-w12/` (to be created at voicing).

In order (kebab-case; 14 scene headings, all `### N.`): hook-gym, build-the-model, restrictions-and-use, valid-domain, budget-inequality, trolley-limit, at-least, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (seconds from the estimate):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 35 s | 1 | w11's gym frame; the month ticker drops the first dots |
| 35 to 84 s | 2 | g01 board: naming, the amounts flying into C = 60 + 25m |
| 84 to 122 s | 3 | The dot graph; restrictions; a year's cost |
| 122 to 165 s | 4 | The class pass line with its grey tail |
| 165 to 219 s | 5 | The $300 budget line filtering the dots |
| 219 to 269 s | 6 | The trolley stacking boxes against its gauge |
| 269 to 307 s | 7 | The $500 goal line; rounding up |
| 307 to 326 s | 8 | Framed memory card |
| 326 to 439 s | 9 to 12 | Question cards with pictures and countdowns, then feedback |
| 439 to 468 s | 13 | The lemonade stall with two faint lines |
| 468 to 513 s | 14 | Key notes with the framed card, then a silent return to scene 13's frame |

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): w11's last frame continues into scene 1 (camera continue; the axes gain scales); 1 to 2 clear change (the board opens); 2 to 3 camera continue (the graph grows); 3 to 4 clear change (new model); 4 to 5 clear change back to the gym graph; 5 to 6 clear change (the trolley); 6 to 7 clear change back to the gym graph; 7 to 8 camera pull back to the card; attempts and feedback: the card shrinks to the top; 12 to 13 board clear; 13 to 14 fade to the notes board, then a silent return to scene 13's frame.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, the ring shown full from "Pause here to answer."). key-notes is 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11-w12-learning-review.md`, `science_check` = `checks/m-a11-w12-maths-check.md`.

## Assets

Inspected before choosing (16 Nov 2026, `public/assets`, read only, by file name): `maths/ma12-concert-ticket-v1.png` and `maths/ma12-swing-tag-v1.png` (cards with other meanings); `maths/ma12-rain-gauge-v1.png` (i06's rain gauge; a different object and meaning). No gym, trolley, go-kart or garden tank plate exists.

Need (painted, new; see the Codex asset brief): `ma11-gym-membership-card-v1.png` and `ma11-kettlebell-v1.png` (also w11's handoff), `ma11-flatbed-trolley-v1.png`, `ma11-weights-box-v1.png`, `ma11-go-kart-v1.png`, `ma11-water-tank-v1.png`, and `ma11-lemonade-stall-v1.png` (scene 13; w13's anchor, briefed in w13; it must be painted before this build).

Coded (studio kit): the card's text, readouts, the graphs, dots and limit lines, the stacked cost bar, the load gauge, working boards, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `MATH_ROLES` and `Role`, `HandTag`, `PlateImg`, `PlateReadout`, `LiveReadoutBoard`, `StudioPlot`, `StudioLevelLine` (the limit lines), `SignedBar`, `SpriteStack` (boxes on the trolley), `StepCounter`, `TaskStrip`, `GivensCard`, `WorkingRows`, `AnswerFrame`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard` with `GivensStrip`.

Additions (kit-needs row w12):
1. **`ModelCard`** (new; reused by w13 and w19): a givens card whose highlighted amounts lift and fly into the slots of an equation template, with "fixed" and "rate" tags in the role colours. Props: `sentence` (with marked spans), `template` (with slots), `flights` ({span, slot, at, role}[]). Check: the template filled from the spans reads "C = 60 + 25m".
2. **`DotModel`** (small, lesson-agnostic): a linear model drawn as dots at whole-number inputs on a fading hairline, with a `limit` option (a `StudioLevelLine`) that fills the dots on the allowed side and hollows the rest, and a count readout. Check: limit 300 gives 0 to 9 allowed (10 dots); goal 500 gives 18 upward.
3. **Load gauge** (lesson folder): a vertical gauge from 0 to a maximum, with a limit mark, filled from a value function; linked to `SpriteStack`.

## Codex asset brief (Maths A11 W12, a gym membership; also w11's handoff)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-w12.md`. Paint after the learning review and maths check pass and root gives the go-ahead, and before the w11 build (w11's final frame uses plates 1 and 2). Save to `public/assets/maths/`. Every plate: **transparent PNG with a true alpha channel**, clean edges (check on black and white); ink and watercolour in the house style, matched to `maths/ma12-cricket-ball-v1.png` and `maths/ma12-travel-suitcase-v1.png`; at least 8 per cent clear margin; no text, numbers, logos, brand names, people, hands, faces, glow or backdrop. Never stretch to fit; keep the native aspect ratio.

1. `ma11-gym-membership-card-v1.png` (1600 × 1000 px): a plain plastic membership card seen straight on, slightly rounded corners, a simple two-tone design (deep teal band at the left third, the rest off-white), **with a large blank off-white area** for coded text, and a small embossed blank chip square. No words, numbers, barcodes or logos. Codex reports the blank area's rectangle in `ma11-gym-membership-card-v1.json`.
2. `ma11-kettlebell-v1.png` (1000 × 1100 px): one cast-iron kettlebell, matte charcoal, three-quarter view, no numbers or markings.
3. `ma11-flatbed-trolley-v1.png` (1800 × 1000 px): a steel flatbed platform trolley seen exactly side-on, a flat deck about knee height, four castors, a push handle at the right. Codex reports the deck's top surface line (y) and its left and right ends (x) in `ma11-flatbed-trolley-v1.json`.
4. `ma11-weights-box-v1.png` (600 × 500 px): one closed brown cardboard box, seen side-on, square-ish, plain tape, no print. Sized so that five boxes in a row fit the trolley deck (Codex reports the box width in px at the trolley's scale).
5. `ma11-go-kart-v1.png` (1600 × 900 px): an empty go-kart seen side-on, low frame, seat, steering wheel and four small wheels, plain red bodywork, **no driver**, no numbers or sponsor marks.
6. `ma11-water-tank-v1.png` (900 × 1200 px): one small round corrugated-steel garden rainwater tank in a pale green, on a low timber stand, with a brass tap near the base and a thin black drip hose running from the tap off the edge of the plate. No gauge, level marks, numbers or brand.

Report inspection on the paper background (`#f6f1e7`) at the sizes used in the design (card 520 px, kettlebell 260 px, trolley 640 px, box at trolley scale, go-kart 360 px, tank 300 px tall), the alpha checks, and a five-box row and a six-row stack placed on the trolley deck.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the two syllabus quotes match the route-inputs JSON exactly, and no site module label appears.
3. Confirm the scope of every learner-visible general claim: "the total grows by the same amount every month, so a straight line should model it" (1); "the sixty dollars ... is the constant ... the twenty-five ... is the gradient" (2); "a maximum rounds down; a minimum rounds up" (5, 7, 8, key note 5; scoped by "check the whole number on each side"); "at most includes equal" (6).
4. Confirm the two re-contexted site examples keep their numbers and answers (P = 500 − 20t, t = 25; 30 + 15n ≤ 480, n = 30, 495 at 31).
5. Confirm both attempt questions carry every demand, and that neither card or its picture shows an inequality or answer.
6. Confirm the opening matches w11's final frame and scene 13's frame is w13's opening frame.
7. Confirm no em dash (U+2014) anywhere in this file, Australian spelling, and the narration counts by script with every bold cue quoted in its scene's Visual in spoken order.
8. Confirm the plate requests contain no people, drivers, text or brands.

## YouTube metadata (draft)

Title: Linear Models and Inequalities from Real Situations | Year 11 Maths Advanced

(Title length: 77 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/working-with-functions/lesson18.sa.html

A gym charges $60 to join and $25 a month. Turn that sentence into a linear model: name the variables with units, use the fixed amount as the constant and the rate as the gradient, and state the restrictions (whole months make the graph a row of dots). See a model that only holds for part of its line, turn "at most" and "at least" into inequalities, and find out why a budget rounds down while a goal rounds up. A memory aid: name it, limit it, solve it, say it. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, working with functions.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Construct and use linear functions to model and solve problems in real-world situations, identifying the independent and dependent variables and any restrictions on these variables, and justify conclusions in the context of the problem"
"Use linear inequalities to model and solve problems in real-world situations, and justify conclusions in the context of the problem"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

Builds on: gradient and intercept; solving linear inequalities. Next: Break-even and simultaneous linear models.

#Year11Maths #MathsAdvanced #LinearModels #HSCScience

## Open decisions

- **1. Re-contexting (root).** The site's fish pond and lift become a gym class pass and a gym delivery trolley with the numbers unchanged (decision 38 precedent; lifts belong to i10). Root confirms.
- **2. Site link (root).** The description links lesson 18 (the gym and the pass); the trolley's numbers come from `algebraic-techniques-and-inequalities/lesson03.sa.html`. Both `.sa.html` (root decision 15).
- **3. "Name it, limit it" (learning review).** The site's step heading reads "name it, restrict it". "Limit" is used because it pairs with "at most" limits and reads better aloud; the reviewer checks it is not confused with Year 12 limits.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from w10, w06 and w08; check that the fee and the rate visibly fly into the right slots; that the dots read as "whole months"; that the class pass's grey tail makes validity concrete; that the two rounding directions are explained by the neighbours, not as a rule alone; that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
- The ticker, the limit lines and the trolley load carry the explanation; judge them at playback speed, not from stills. Every dot, gauge value and readout must be computed from the same model functions as the displayed equations.
