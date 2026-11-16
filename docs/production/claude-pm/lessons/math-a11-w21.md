# Maths A11 W21: Why does y = k/x never meet its asymptotes? The hyperbola, two asymptotes with two reasons, the sign of k and behaviour at the ends (design)

Status: Revision 2 (16 Nov 2026): independent learning review resolved (see "Revision 2" below); not voiced. Revision 1 (16 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`, the d01 Revision 6 pattern and the f01 and s01 models) and the w01 to w14 root rulings (`../checks/root-acceptance-maths-a11-w01-w14.md`). Not voiced (no `math-a11-w21/` folder, no audio). Needs the Codex learning review and maths check before voicing. Nothing recorded; human listening pending.

Narration 5,571 characters, 14 scene headings, about 506 s with holds (the key-notes scene fixed at 45 s), counted by script with the build parser rules (see "Narration length estimate").

## Revision 2 (16 Nov): learning review resolved

Review: `../checks/m-a11-w21-learning-review.md` (summary `../checks/m-a11-w01-w31-learning-review-summary.md`), with root's rulings of 16 Nov. Findings by the review's numbers:

1. Optional, scene 1 ("asymptotes" before its definition): **accepted**: "..., the lines it creeps ever closer to?"

Narration now 5,571 characters by script, about 506 s with holds (see "Narration length estimate"). Stage-plan times below are Revision 1 approximations; frames come from the recording's word timings. Every changed value was rechecked with SymPy (scratchpad `rev2_verify.py`); Codex's maths check remains the authority.

Scope: twenty-first video of the Year 11 Mathematics Advanced course (outline playlist order 21), after w20 (cubic graphs) and before w22 (direct variation). Pre-design pack: `../pre-design/maths-a11/math-a11-w21.md` (brief 243). Site lesson (read through the pack's quotations, read only): `working-with-functions/lesson17.sa.html` (Reciprocal Functions, SHA256 `775d7599ee2da387a6d7223aa8d3d15b8ae7a5836a56608980936ff8853eedea`, card 05, `we-1`, `we-2`, `we-3`). Every number recalculated with SymPy. Route entry: `math-a11-w21` in `../../programme/maths-a11-route-inputs-2.json`.

Owner rules applied: 2024 syllabus only, content points cited by codename and exact wording; painted plate for the real object (a phone, reused from Year 12, with a coded download screen), coded hyperbolas, riders, sliders, readouts and algebra; no people, hands or faces; one main learner question; one reasoning stage at a time; worked examples in the g01 layout with a framed answer and a crossed slip; "Pause here to answer." then a 10 s countdown with the full worded question and a picture; brief feedback with one crossed mistake; original HSC-style questions; key notes as five short bullets with a framed memory card; everyday anchor (a phone download, phones and data); Australian spelling; no em dashes; conversational narration that explains the cause before the rule.

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Working with functions; NESA content-system codenames, official `code` field empty), quoted from `../../programme/maths-a11-route-inputs-2.json`:

- `cie579a8c2` (Reciprocal functions): "Graph functions of the form f(x) = k/x, where k is a constant and k ≠ 0, and identify their hyperbolic shape and their asymptotes"
- `cibf45b7e8` (Reciprocal functions): "Describe the behaviour of f(x) = k/x as x → ∞ and x → -∞"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

**Boundary:** starts from w20's final frame (the phone with "600 MB update", "time t = 600 ÷ s", points (10, 60), (20, 30), (60, 10) and two "?" marks), recalling w09 (division by zero is undefined, so x = 0 is excluded from 6/x) and w08 (substitution). Builds y = 6/x from divisions (site card 05); names its asymptotes x = 0 and y = 0 with their separate reasons; sketches both branches, names the shape a hyperbola, states domain and range (site `we-1`) (`cie579a8c2`); shows the effect of the sign of k with a slider through the excluded k = 0 (site `we-2`); describes the behaviour as x → ∞, x → −∞ and on each side of 0 (site `we-3`) (`cibf45b7e8`); returns to the download (only the s > 0 branch is meaningful). Stops at graphing and describing y = k/x. Not taught: variation models (w22, w23; the constant product s × t = 600 is named as a clue only); transformed hyperbolas such as y = k/(x − b) + c (g01); limits notation beyond the arrows.

## Decisions

- **Anchor: a phone downloading a 600 MB update (reused painted plate with a coded screen, live).** The time is t = 600/s seconds at s MB/s: 60 s at 10, 30 s at 20, 10 s at 60, 6 s at 100, 1200 s (20 minutes) at 0.5. Faster speeds cut the time but never to zero (y = 0 is an asymptote); as the speed falls towards zero the time grows without limit (x = 0 is an asymptote). Phones and data. Distinct from the Year 12 phone anchors (d03 app users growing, i03 a phone charging, t04 phone storage on a log ruler, f14 a savings app): a different object state and a different idea; i04's fundraiser donations 1000/t is the nearest Year 12 hyperbola, a different context. Distinct from w01 to w20 and from the w24 to w31 pack suggestions (w24's Bluetooth speaker range and w27's phone-game power-ups are different ideas). The pack's 24 m² vegetable patch and swimming laps were not used (the garden carries w14 to w16 already; laps are whole numbers only).
- **Idealising assumptions (author notes, not learner copy).** (i) A steady download speed; real speeds vary. (ii) "Megabytes a second" is said in full; the screen shows MB/s.
- **Simulations (standard item 3).**
  1. **The branch rider** (scenes 2, 4 and 7, new `BranchRider` on `FunctionRider`, `StudioPlot` and `LiveReadoutBoard`): a blue rider moves along the x-axis and the curve point rides above or below it; a readout shows "x", "6 ÷ x" (teal) and a growing or shrinking teal bar. Moving towards 0 the readout races upward (the plot rescales once, with a grey "× 10" tag, so the race is seen); moving far right it settles towards 0 but never shows 0. The rider is not allowed onto x = 0: it stops at a red "÷ 0" barrier.
  2. **The k slider** (scene 5, `ParameterSlider`): a violet slider sweeps k from 6 to −6; both branches redraw; at k = 0 the curve collapses onto the x-axis with a grey "k = 0: just y = 0, not a hyperbola" tag; for k < 0 the branches appear in quadrants II and IV, which shade faintly.
  3. **The download** (scenes 1 and 7): the phone's coded screen and progress bar fill at the speed set by a blue slider "speed s"; the time readout t = 600 ÷ s and a rider on the s > 0 branch move together.
- **Colour roles (fixed for the whole video).** x and the speed s **blue** (inputs, root ruling 12); y and the time t **teal** (outputs); the asymptotes **amber**, dashed; k **violet**; the quadrants a faint grey wash where the branches lie; answer green; mistake red, crossed slips only; curves ink.
- **Large type (standard item 5).** Current working line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; all text above y = 950.
- **Handwritten voice (standard item 6).** `HandTag`: "tiny divisor, huge answer", "huge divisor, tiny answer", "never 0", "can't divide by 0", "6 is never 0", "dashed first", "+ ÷ − = −", "two branches", "hyperbola", "except 0", "k = 0: no curve", "opposite sign", "reflection", "from the right", "from the left", "describe both sides", "from above", "from below", "only s > 0", "s × t = 600", circles, arrows and crossings. At most two live at once.
- **Stage changes (standard item 2), about every 30 to 50 s.** w20's frame (1); the division table and the rider on one branch (2); the two asymptotes and their reasons (3); g01 board, both branches (4); the k slider (5); g01 board, behaviour (6); the download answered (7); framed memory card (8); question cards (9 to 12); the braking handoff (13); key notes (14).
- **Worked examples (g01 layout, standard item 7).** 4 (`we-1`): y = 6/x: asymptotes x = 0 and y = 0; points (1, 6), (2, 3), (3, 2), (6, 1), (−1, −6), (−2, −3); domain x ≠ 0, range y ≠ 0; crossed "only one branch" captioned "negative x: a second branch". 5 (`we-2`): y = −4/x against 4/x: same asymptotes, quadrants II and IV, the reflection in the x-axis (and the y-axis); crossed "−4/x in quadrants I and III" captioned "k < 0: opposite sign". 6 (`we-3`): y = 3/x as x → 0⁺, 0⁻, ∞, −∞; crossed "as x → 0, y → ∞" captioned "describe both sides". Feedback scenes carry a `GivensStrip`, rows at 52 px, a green framed answer and one crossed slip.
- **Memory aid (standard item 8).** Framed `MemoryAidCard`: "x can't be 0, y can't be 0: two asymptotes, two branches." Key line: "k > 0: quadrants I and III. k < 0: II and IV. Near 0: shoots off. Far out: flattens towards 0." Key notes are five short bullets beside the card; 45 s.
- **Visual surprise (standard item 9).** On the branch rider, the readout races from 2 to 60 to 6000 as the rider creeps towards 0 (the plot has to rescale to keep up), then stops dead at the "÷ 0" barrier; going the other way the bar shrinks towards nothing but the readout never shows 0. In scene 7 the phone's progress bar fills almost instantly at high speed, yet the time readout still shows a positive number.
- **Site numbers unchanged.** Card 05: 2, 60, 6000; 0.06, 0.006. `we-1`: the six points; domain and range. `we-2`: quadrants II and IV; reflection. `we-3`: the four behaviours.
- **Site decision (pack section 8).** "An asymptote is approached, never reached" is said only for y = k/x ("for y equals k over x, the curve never actually reaches it"), not as a general definition.
- **Attempts (pack questions, original).** A1: "For y = −12/x, state the asymptotes, the quadrants the branches lie in, two points on each branch, and the domain and range." Answer x = 0, y = 0; II and IV; e.g. (1, −12), (3, −4), (−1, 12), (−3, 4); x ≠ 0, y ≠ 0. Crossed "quadrants I and III". A2: "The point (2, −3) lies on y = k/x. Find k, then find y when x = −0.01 and when x = 600. What does each value show about the graph?" Answer k = −6; y = 600 (just left of 0 the curve shoots up near the y-axis); y = −0.01 (far right it flattens just below the x-axis). Crossed "k = −1.5".
- **Mistake scene:** none separate. One branch only (4 crossed); the wrong quadrants for k < 0 (5 crossed; A1 crossed); one description for both sides of 0 (6 crossed); k found by dividing (A2 crossed); the curve drawn touching an axis (3, "dashed first" and the never-0 readout).
- **Cause chain taught, in order:** (1) dividing by smaller and smaller positive numbers gives bigger and bigger answers, and by bigger numbers smaller answers (2); (2) x = 0 is excluded because division by zero is undefined, so the curve has a vertical asymptote there (3); (3) k/x is never 0 because a fraction is 0 only when its numerator is 0, and k ≠ 0, so y = 0 is a horizontal asymptote (3); (4) a positive k over a negative x is negative, so there is a second branch (4); (5) a negative k gives y the opposite sign to x, so the branches move to quadrants II and IV, a reflection (5); (6) near 0 the two sides head to opposite infinities, and far out the curve approaches 0 from opposite sides (6); (7) in the download, only positive speeds make sense, and the product s × t stays 600 (7).
- **Entry knowledge (route):** w09 (domain and range; an excluded value where a denominator is zero); w08 (substitution into f(x)).
- **Learner-visible vocabulary (plain meaning at first use):** reciprocal function, said as "y equals k over x" (1); asymptote (a line the curve gets closer and closer to; for y = k/x it never reaches it, 3); hyperbola (the two-branch shape of y = k/x, 4); quadrant (one of the four regions the axes make, 4); "approaches", "→" (gets closer and closer to, 6); infinity, ∞ (grows without any limit, 6).
- **Handoff (to w22, "How does one pair of values fix a direct variation model y = kxⁿ?").** Scene 13: the reused hatchback `maths/ma12-used-hatchback-v1.png` on a new road strip `ma11-road-side-strip-v1.png`, a coded braking bracket "18 m at 60 km/h" from a coded "brakes on" marker, and a second dashed bracket "? m at 120 km/h"; chips "Twice the speed: twice the distance?" and "Next: direct variation, y = kxⁿ". This is w22's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) t = 600/s: s = 10, 20, 60, 100, 600, 0.5, 0.1 give t = 60, 30, 10, 6, 1, 1200, 6000.
  (b) `we-2`: −4/x = 4/(−x), so the reflection in the x-axis equals the reflection in the y-axis.
  (c) A2: y = −6/x; x = −0.01 gives 600; x = 600 gives −0.01.
  (d) Pronunciations: "zero point zero zero one" (course decimal choice, w10), "megabytes a second", "approaches zero from the right", "plus infinity", "minus infinity".
  (e) Windows: y = 6/x plot x −7 to 7, y −8 to 8 (equal scale), with the rescaled inset y 0 to 6,500 during the race; download plot s 0 to 70, t 0 to 140 (labelled scales).

Main question: *A 600 MB download takes 600 ÷ s seconds at s MB/s. Can the time ever reach zero? What happens as the speed drops towards zero? Why does y = k/x never meet its asymptotes?*
Entry knowledge (w09; w08): an excluded value where a denominator is zero; substitution.
Stops after: y = k/x for k > 0 and k < 0; its hyperbolic shape; its asymptotes with their separate reasons; domain and range; behaviour as x → ±∞ and on each side of 0. No variation models, no transformations.
Handoff: math-a11-w22: the car's braking distance at 60 and 120 km/h.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed; see Decisions): x and speed blue; y and time teal; asymptotes amber dashed; k violet; quadrants a faint grey wash; answer green; mistake red, crossed slips only; curves ink. Type: current line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; all text above y = 950. Every stage's main visual is solid from the stage's first frame. Header strip "MATHEMATICS ADVANCED · WORKING WITH FUNCTIONS"; scene headings in the hand font, 44 px.

### 1. hook: can the time reach zero?
> Here's a phone downloading a six hundred megabyte update. The time it takes, in seconds, is six hundred divided by the speed, in megabytes a second. At ten, it takes sixty seconds. At twenty, thirty. At sixty, just ten. Faster speeds always cut the time, but can the time ever reach zero? And as the speed drops towards zero, what happens to the **time**? These are questions about y equals k over x. Why does it never meet its asymptotes, the lines it creeps ever closer to?

Visual: opens on w20's final frame exactly (the phone `ma12-phone-v1.png` with its coded screen: progress bar, "600 MB update", "speed s = 10 MB/s", "time t = 600 ÷ s = 60 s"; small axes with points (10, 60), (20, 30), (60, 10); the two "?" marks; chips "Can the time reach 0?" and "Next: y = k/x"). On the first sentence the "Next" chip fades and the heading writes on "Never zero?". The download (simulation 3): on "At ten" the speed slider sits at 10 and the progress bar fills over 2 s (a time-lapse tag "× 30"); on "At twenty" the slider moves to 20, the readout "t = 30 s" and the bar fills faster; on "At sixty" "t = 10 s". The three points pulse. On "reach zero" the slider runs on towards 600 and the time readout shrinks (6, 1) but stays positive, hand tag "never 0?"; on "time" the slider runs back towards 0 and the readout climbs (60, 600, 6000) with the bar barely moving. On the last sentence the strip "y = k/x" writes (k violet) and the chip "asymptotes?" moves to the top right as the scene question.

### 2. a tiny divisor, a huge answer
> Start with y equals six over x. Divide six by smaller and smaller numbers. Six over three is two. Six over zero point one is sixty. Six over zero point zero zero one is six **thousand**. As the divisor shrinks towards zero, the answer grows without limit. Now go the other way. Six over a hundred is zero point zero six, and six over a thousand is zero point zero zero six. As x grows, the answer shrinks towards zero, but it never gets **there**. On a graph, that's a curve that climbs up beside the y axis, and flattens out along the x **axis**.

Visual: clear change. Left: a division table (44 px) with columns "x" (blue) and "6 ÷ x" (teal). Right: the branch rider (simulation 1) on y = 6/x for x > 0 (x 0 to 7, y 0 to 8). On "Six over three" row "3 → 2" and the rider at (3, 2). On "sixty" "0.1 → 60": the rider creeps left and the readout races; the plot rescales with a grey "× 10" tag and an inset showing the height. On "thousand" "0.001 → 6000", the rider stops at the red "÷ 0" barrier at the y-axis, hand tag "tiny divisor, huge answer". On "Now go the other way" the rider runs right: rows "100 → 0.06", "1000 → 0.006"; the teal bar shrinks; on "there" the readout shows "0.006", never "0", hand tag "never 0". On "axis" the full branch draws (ink), climbing beside the y-axis and flattening along the x-axis.

### 3. two asymptotes, two reasons
> Those two lines are its asymptotes. An asymptote is a line the curve gets closer and closer to. For y equals k over x, the curve never actually reaches it. There are two, and each has its own reason. The vertical one is x equals zero, because you can't divide by zero, so zero isn't in the **domain**. The horizontal one is y equals zero, because a fraction is zero only when its top is zero, and six is never zero. So y is never zero **either**. When you sketch, draw both asymptotes dashed, before the **curve**.

Visual: camera continue on the branch. On "asymptotes" both axes overlay with amber dashed lines; chip, 44 px: "asymptote: a line the curve gets closer and closer to". On "domain" the vertical dashed line labels "x = 0" and a reason card writes beside it, 44 px: "6 ÷ 0 is undefined: x ≠ 0", hand tag "can't divide by 0". On "either" the horizontal dashed line labels "y = 0" and a second reason card: "6/x = 0 needs 6 = 0: never", hand tag "6 is never 0". On "curve" the curve fades, the two dashed lines stay, and the curve redraws over them, hand tag "dashed first".

### 4. worked example 1: both branches
> So sketch y equals six over x, showing its asymptotes, and state its domain and range. Plot some points. One, six. Two, three. Three, two. Six, **one**. Now negative x. Six over minus one is minus six, and six over minus two is minus three. A positive over a negative is negative, so there's a second branch, in the third **quadrant**. Two separate branches, in the first and third quadrants. This shape is called a hyperbola. The domain is all real x except zero, and the range is all real y except **zero**. Each one leaves out the value where its asymptote sits.

Visual: clear change to the g01 board. Task strip, 44 px: "Sketch y = 6/x, showing its asymptotes, and state its domain and range." (site `we-1`). A plot at the right (x −7 to 7, y −8 to 8, equal scale; 720 × 720 px) with both amber dashed asymptotes drawn first. On "one" (first bold) the points (1, 6), (2, 3), (3, 2), (6, 1) land (blue and teal), and the first branch draws. On "Now negative x" the rider crosses to the left (jumping the "÷ 0" barrier, not passing through it); rows "6 ÷ (−1) = −6", "6 ÷ (−2) = −3", hand tag "+ ÷ − = −". On "quadrant" points (−1, −6), (−2, −3) land and the second branch draws; quadrants I and III wash faint grey, hand tags "two branches" and "hyperbola". On "zero" framed answer (green): "Asymptotes x = 0 and y = 0. Domain: all real x ≠ 0. Range: all real y ≠ 0." A red slip "one branch only" writes small and is crossed (caption "negative x: a second branch").

### 5. the sign of k
> What does the sign of k do? Slide k from positive towards zero. The branches hug the axes more and more closely. At k equals zero there's no hyperbola at all, just the line y equals zero, which is why k can't be zero. Once k is negative, the branches appear in the second and fourth **quadrants**. Compare y equals minus four over x with four over x. Same asymptotes. But now y always has the opposite sign to x. So minus four over x is four over x reflected in the x axis. And because four over minus x is the same thing, it's also the reflection in the y **axis**.

Visual: clear change to the k slider (simulation 2). Plot (x −7 to 7, y −8 to 8) with the amber dashed asymptotes. Strip "y = k/x" (k violet) and the slider at 6. k slides 6 → 1: the branches tighten towards the axes. k reaches 0: the curve collapses onto the x-axis, grey tag "k = 0: just y = 0, not a hyperbola". k goes to −4: on "quadrants" the branches appear in II and IV, which wash faint grey. At the right, the g01 board (site `we-2`): task strip, 44 px, "Describe how the graph of y = −4/x differs from y = 4/x." Rows, 52 px: "same asymptotes: x = 0, y = 0"; "4/x: quadrants I and III; −4/x: II and IV", hand tag "opposite sign"; on "x axis" the plot ghosts 4/x and flips it about the x-axis onto −4/x, hand tag "reflection"; on "axis" (last bold) the row "4/(−x) = −4/x: also the reflection in the y-axis" and the ghost flips about the y-axis onto the same curve. Framed answer (green): "Same asymptotes; branches in quadrants II and IV; the reflection of y = 4/x in either axis." A red slip "−4/x in quadrants I and III" writes small and is crossed (caption "k < 0: opposite sign").

### 6. worked example 2: behaviour at the edges
> Now describe the behaviour of y equals three over x. Two symbols help. The arrow means approaches, gets closer and closer to, and infinity means growing without any **limit**. As x approaches zero from the right, the divisor is tiny and positive, so y heads to positive **infinity**. From the left, it's tiny and negative, so y heads to negative infinity. The two sides go opposite ways, so always describe them **separately**. As x heads to infinity, y heads to zero from above. As x heads to minus infinity, y heads to zero from **below**.

Visual: clear change to the g01 board. Task strip, 44 px: "Describe the behaviour of y = 3/x as x → 0 and as x → ±∞." (site `we-3`). A plot at the right (x −7 to 7, y −8 to 8) with y = 3/x and its asymptotes; two riders. On "limit" a chip, 40 px: "→ approaches (gets closer and closer to); ∞ grows without limit". Rows, 52 px, one at a time: on "infinity" "x → 0⁺: y → +∞" (a blue rider creeps to 0 from the right, its point climbing), hand tag "from the right"; "x → 0⁻: y → −∞" (a second rider from the left, its point diving), hand tag "from the left"; on "separately" hand tag "describe both sides". Rows "x → ∞: y → 0 from above" (rider far right, point just above the axis); on "below" "x → −∞: y → 0 from below". Framed answer (green) collecting the four rows. A red slip "as x → 0, y → ∞" writes small and is crossed (caption "describe both sides").

### 7. back to the download
> Back to the download. Here k is six hundred, and only positive speeds make sense, so only the first branch counts. Faster speeds push the time towards zero, but six hundred over any speed is still more than zero. However fast the connection, the time never reaches **zero**. And as the speed drops towards zero, the time grows without limit. At half a megabyte a second, it's twelve hundred seconds, which is twenty **minutes**. So both asymptotes mean something here. The time can never be zero, and at a speed of zero, the download would never finish. Notice one more thing. Speed times time is six hundred at every point on this **curve**. That constant product is a clue we'll use later.

Visual: clear change back to the phone (520 px tall) at the left and the download plot (s 0 to 70, t 0 to 140, with an inset to 1,300) at the right, the negative branch shown ghosted grey with "only s > 0" tag. The speed slider (simulation 3) runs from 10 up to 600: the progress bar fills in a blink; the time readout shows "1 s", the rider hugs the s-axis; on "zero" hand tag "never 0" by the amber dashed y = 0. The slider runs down to 0.5: on "minutes" the readout "t = 600 ÷ 0.5 = 1200 s = 20 min" and the bar crawls, the rider high beside the t-axis. On "curve" small rectangles from the origin to three points (10, 60), (20, 30), (60, 10) light, each labelled "s × t = 600" in teal, hand tag "s × t = 600". Framed answer (green): "The time is never 0 (y = 0 is an asymptote), and it grows without limit as s → 0⁺ (x = 0 is an asymptote)."

### 8. memory aid
> Here's a way to remember it. x can't be zero, and y can't be zero. That's two asymptotes, and two branches. And the sign of k picks the quadrants. Positive, first and third. Negative, second and **fourth**.

Visual: stage change to the framed `MemoryAidCard` (about 1,300 × 600 px, double ink frame, hand-font heading "Memory aid"). Left slot: the two branches swinging from quadrants I and III to II and IV as k changes sign (a 3 s loop). Main line, hand font 56 px: "x can't be 0, y can't be 0: two asymptotes, two branches." On "fourth" the key line, 40 px: "k > 0: quadrants I and III. k < 0: II and IV. Near 0: shoots off. Far out: flattens towards 0." Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. For y equals minus twelve over x, state the asymptotes, the quadrants the branches lie in, two points on each branch, and the domain and range. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "For y = −12/x, state the asymptotes, the quadrants the branches lie in, two points on each branch, and the domain and range." The full question stays on screen. Picture slot: empty axes (x −14 to 14, y −14 to 14) with the quadrants numbered I to IV in grey; no curve, no asymptotes drawn. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> The asymptotes are x equals zero and y equals **zero**. k is minus twelve, so the branches are in the second and fourth **quadrants**. For example, one, minus twelve, and three, minus four, then minus one, twelve, and minus three, **four**. The domain is all real x except zero, and the range is all real y except zero. Putting the branches in the first and third quadrants ignores the sign of **k**.

Visual: the card shrinks to the top (30 px). `GivensStrip`: "y = −12/x" ("−12" violet). Rows, 52 px: on "zero" "asymptotes x = 0, y = 0" (amber dashed lines draw on the picture); on "quadrants" "k = −12 < 0: quadrants II and IV" (the quadrants wash grey); on "four" points "(1, −12), (3, −4); (−1, 12), (−3, 4)" land and the branches draw. Framed answer (green): "x = 0, y = 0; quadrants II and IV; domain x ≠ 0; range y ≠ 0". On "k" a red slip "quadrants I and III" writes and is crossed (hand caption "k < 0: opposite sign"). Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. The point two, minus three lies on y equals k over x. Find k. Then find y when x is minus zero point zero one, and when x is six hundred. What does each value show about the graph? Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "The point (2, −3) lies on y = k/x. Find k, then find y when x = −0.01 and when x = 600. What does each value show about the graph?" The full question stays on screen. Picture slot: axes (x −5 to 5, y −5 to 5) with a teal ring at (2, −3), as the question states; no curve. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 12. feedback 2 (brief)
> k is x times y, so two times minus three, which is minus **six**. At minus zero point zero one, y is minus six over minus zero point zero one, which is six **hundred**. Just left of zero, the curve shoots up beside the y axis. At six hundred, y is minus zero point zero one. Far to the right, it flattens just below the x **axis**. If you got k equals minus one and a half, you divided instead of **multiplying**.

Visual: the card shrinks to the top. `GivensStrip`: "(2, −3)", "x = −0.01", "x = 600" (underlined as used). Rows, 52 px: on "six" "k = xy = 2 × (−3) = −6"; on "hundred" "y = −6 ÷ (−0.01) = 600"; the picture draws y = −6/x and a rider jumps just left of 0, its point off the top with an arrow, hand tag "shoots up". On "axis" "y = −6 ÷ 600 = −0.01"; a rider far right sits just below the axis, hand tag "just below". Framed answer (green): "k = −6; y = 600 (near the y-axis, the curve shoots up); y = −0.01 (far right, it flattens just below the x-axis)." On "multiplying" a red slip "k = −3 ÷ 2 = −1.5" writes and is crossed (hand caption "k = xy"). Hold about 1 s.

### 13. handoff
> So y equals k over x has two branches and two asymptotes, each with its own reason. Next, quantities that grow together. A car at sixty kilometres an hour needs about eighteen metres of braking to stop. At twice the speed, does it need twice the distance? Next, direct variation, y equals k x to the **n**.

Visual: the memory line shows small at the top (30 px), then fades on "Next". Board clears to the reused hatchback `maths/ma12-used-hatchback-v1.png` (about 900 px wide, solid) on the new road strip `ma11-road-side-strip-v1.png`; a coded "brakes on" marker behind the car and a teal bracket "18 m at 60 km/h" ahead of it; on "twice the speed" a second, dashed bracket "? m at 120 km/h". On "n" chips "Twice the speed: twice the distance?" and "Next: direct variation, y = kxⁿ". Hold about 2 s. This is w22's opening frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- y = k/x (k ≠ 0): a hyperbola with two branches.
- Asymptotes x = 0 (can't divide by 0) and y = 0 (k/x ≠ 0).
- Domain: x ≠ 0. Range: y ≠ 0.
- k > 0: quadrants I and III. k < 0: II and IV.
- x → 0⁺: y → ±∞ (by k's sign); x → ±∞: y → 0.

Memory aid (framed card, right side of the notes screen, as in scene 8): *x can't be 0, y can't be 0: two asymptotes, two branches.* Key: *k > 0: quadrants I and III. k < 0: II and IV. Near 0: shoots off. Far out: flattens towards 0.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades (1 s) back to scene 13's frame exactly (the hatchback on the road strip, the "brakes on" marker, the "18 m at 60 km/h" bracket, the dashed "? m at 120 km/h" bracket and both chips). This is the final frame and w22's opening frame.

## Teaching checks

- **Does it explain causes?** Why the curve shoots up near 0: tiny divisors give huge answers (2). Why x = 0 is an asymptote: division by zero is undefined (3). Why y = 0 is an asymptote: a fraction is zero only if its numerator is, and k ≠ 0 (3). Why a second branch: positive over negative is negative (4). Why k < 0 moves the branches: y takes the opposite sign to x (5). Why both reflections give the same curve: 4/(−x) = −4/x (5). Why the two sides of 0 differ: the sign of the tiny divisor (6). Why only one branch for the download: speeds are positive (7).
- **Misconceptions addressed:** one branch only (4 crossed); wrong quadrants for k < 0 (5 crossed; A1 crossed); one description for both sides of 0 (6 crossed); k by division (A2 crossed); the curve touching an axis (2, 3: never 0, dashed first); one reason for both asymptotes (3, two reason cards).
- **Visual standard (`../maths-visual-standard.md`), item by item:** 1 the painted phone from the first frame, answered in 7; 2 a new stage every 30 to 50 s; 3 the branch rider (the readout racing and stopping at the barrier), the k slider through 0, the download slider tied to the phone's bar and the rider; 4 fixed colour roles; 5 large type; 6 hand tags; 7 g01 boards in 4, 5 and 6 with framed answers and crossed slips; 8 framed memory card and five short bullets; 9 the race to 6000 and the never-zero readout.
- **One idea at a time:** the numbers (2), the asymptotes (3), both branches (4), k (5), behaviour (6), the anchor (7).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; each card's picture shows only what the question states; 10 s each with the invitation to pause; nothing answer-bearing. One crossed mistake each; feedback about 30 s and 31 s.
- **Avoided double teaching:** excluded values and domain and range (w09), substitution (w08) are used, not re-taught.
- **Syllabus coverage:** `cie579a8c2` graph (2, 4, 5; A1; key notes 1, 3, 4), hyperbolic shape (4), asymptotes (3, 7; key note 2); `cibf45b7e8` behaviour as x → ±∞ (2, 6, 7; A2; key note 5).
- **Out of scope by design:** variation models (w22, w23); transformed hyperbolas (g01).

## Practice questions and model answers

**Attempt 1 (scene 9; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "For y = −12/x, state the asymptotes, the quadrants the branches lie in, two points on each branch, and the domain and range."
Model answer: asymptotes x = 0 and y = 0. k = −12 < 0, so the branches lie in quadrants II and IV; for example (1, −12) and (3, −4), and (−1, 12) and (−3, 4). Domain: all real x except 0. Range: all real y except 0. Classic mistake (crossed): "quadrants I and III".

**Attempt 2 (scene 11; original wording, HSC style, 3 marks suggested).** "The point (2, −3) lies on y = k/x. Find k, then find y when x = −0.01 and when x = 600. What does each value show about the graph?"
Model answer: k = xy = 2 × (−3) = −6, so y = −6/x. At x = −0.01, y = −6 ÷ (−0.01) = 600: just left of 0 the curve shoots up near the y-axis (the vertical asymptote). At x = 600, y = −6 ÷ 600 = −0.01: far to the right the curve flattens just below the x-axis (the horizontal asymptote). Classic mistake (crossed): "k = −1.5".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Download | t = 600/s: 60, 30, 10, 6, 1, 1200, 6000 at s = 10, 20, 60, 100, 600, 0.5, 0.1; 1200 s = 20 min | 1, 7, 13 |
| Card 05 | 6/3 = 2, 6/0.1 = 60, 6/0.001 = 6000; 6/100 = 0.06, 6/1000 = 0.006 | 2 |
| Site `we-1` | (1, 6), (2, 3), (3, 2), (6, 1), (−1, −6), (−2, −3); x ≠ 0; y ≠ 0 | 4 |
| Site `we-2` | −4/x: quadrants II and IV; −4/x = 4/(−x) | 5 |
| Site `we-3` | 3/x: 0⁺ → +∞; 0⁻ → −∞; ±∞ → 0 | 6 |
| A1 | −12/x: (1, −12), (3, −4), (−1, 12), (−3, 4); II and IV | 9, 10 |
| A2 | k = −6; y(−0.01) = 600; y(600) = −0.01; crossed −1.5 | 11, 12 |
| Handoff | 18 m at 60 km/h; ? at 120 km/h | 13 |

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy 1.14 (16 Nov 2026, scratchpad `w15w23/verify.py`, 85 checks, none failing); Codex to re-check.

- 600/s at s = 10, 20, 60, 100, 600, 0.5, 0.1: 60, 30, 10, 6, 1, 1200, 6000.
- 6/3 = 2; 6/0.1 = 60; 6/0.001 = 6000; 6/100 = 0.06; 6/1000 = 0.006.
- 6/x at 1, 2, 3, 6, −1, −2: 6, 3, 2, 1, −6, −3.
- −4/x − 4/(−x) = 0.
- 3/x: limits +∞ (0⁺), −∞ (0⁻), 0 (±∞).
- −12/x at 1, 3, −1, −3: −12, −4, 12, 4.
- 2 × (−3) = −6; −6 ÷ (−0.01) = 600; −6 ÷ 600 = −0.01; −3 ÷ 2 = −1.5.

## Memory aid check

- **"x can't be 0, y can't be 0: two asymptotes, two branches."** Original. Meaning, as said in scene 8: for y = k/x, x = 0 is excluded (division by zero), giving the vertical asymptote, and y = 0 is never reached (k ≠ 0), giving the horizontal asymptote; the curve has two branches, in quadrants I and III for k > 0 and II and IV for k < 0. Assumptions checked: k ≠ 0; the form y = k/x exactly (transformed hyperbolas have other asymptotes, g01). It helps a new case: y = 5/x has asymptotes x = 0, y = 0 and branches in I and III, with (1, 5) and (−1, −5). Introduced after the causes in 3 to 5.
- **Considered, not used:** "Asymptotes are never reached" as a general rule (false for other functions; the pack's decision).

## Narration length estimate

Recounted for Revision 2 (16 Nov 2026). Counted 16 Nov 2026 with the build parser rules (`### N.` headings; only lines starting "> " inside the scene, joined with a space, `**` removed; the total is the sum of the scene strings): **5,571 characters**, 14 scene headings. Characters per scene (1 to 14): 471, 535, 502, 553, 558, 525, 679, 202, 176, 384, 212, 397, 302, 75.

At 13.3 characters per second the speech is about 419 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, two feedbacks 1 s each, handoff 2 s) 6 s; settling for the download time-lapses (1), the branch rider's race and rescale (2), the reason cards (3), the k slider through 0 (5) and the download slider (7), about 22 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 506 s (8 min 26 s)**, inside the 5,500 to 6,800 character band and about 64 s under the 570 s cap.

Reserve trims, if the voiced takes run long, in this order: scene 7's last two sentences (keep the s × t = 600 rectangles); scene 5's first two sentences after the question (keep the slider). Do not cut below 5,500 characters.

## Scene list and build ids

Lesson key `m-a11w21` (route math-a11-w21). Explainer folder `src/explainer/lessons/math-a11-w21`; build inputs in `docs/production/claude-pm/lessons/math-a11-w21/` (to be created at voicing).

In order (kebab-case; 14 scene headings): hook-download, tiny-divisor, two-asymptotes, worked-both-branches, sign-of-k, worked-behaviour, download-answered, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (seconds from the estimate):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 37 s | 1 | w20's frame; the phone's download at three speeds |
| 37 to 85 s | 2 | The division table and the branch rider's race |
| 85 to 127 s | 3 | Two asymptotes, two reason cards |
| 127 to 174 s | 4 | g01 board: both branches, domain and range |
| 174 to 222 s | 5 | The k slider through 0; the reflection board |
| 222 to 257 s | 6 | g01 board: behaviour at the edges |
| 257 to 307 s | 7 | The download answered; s × t = 600 |
| 307 to 326 s | 8 | Framed memory card |
| 326 to 434 s | 9 to 12 | Question cards with pictures and countdowns, then feedback |
| 434 to 461 s | 13 | The car's braking distance |
| 461 s to end | 14 | Key notes with the framed card, then a silent return to scene 13's frame |

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): w20's last frame continues into scene 1 (identical frame); 1 to 2 clear change; 2 to 3 camera continue (the branch stays); 3 to 4 clear change; 4 to 5 clear change; 5 to 6 clear change; 6 to 7 clear change back to the phone; 7 to 8 camera pull back to the card; attempts and feedback: the card shrinks to the top; 12 to 13 board clear; 13 to 14 fade to the notes board, then a silent return to scene 13's frame.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, the ring shown full from "Pause here to answer."). key-notes is 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11-w21-learning-review.md`, `science_check` = `checks/m-a11-w21-maths-check.md`.

## Assets

Inspected before choosing (16 Nov 2026, `public/assets/maths`, read only): `ma12-phone-v1.png` (viewed: a phone face-on with a blank dark screen and a light frame, no hands; reused, with the screen content coded inside its screen rectangle); `ma12-used-hatchback-v1.png` (viewed: a red hatchback side-on, no people; reused in the handoff, as plate reuse under root ruling 6); `ma12-phone-dock-v1.png` (a dock, not needed).

Need: no new plate for this video's teaching. w22's `ma11-road-side-strip-v1.png` is commissioned in w22's brief and must be painted before this video's build (scene 13). Reused: `maths/ma12-phone-v1.png`, `maths/ma12-used-hatchback-v1.png`.

Coded (studio kit): every curve, asymptote, rider, barrier, table, slider, readout, rectangle, working board, question card, the countdown, hand tags, the framed card and key notes; the phone's screen content (progress bar and text).

### Studio kit use and additions

Uses: `MATH_ROLES` and `Role`, `HandTag`, `PlateImg`, `LiveReadoutBoard`, `ParameterSlider`, `StudioPlot`, `FunctionSimulator`, `FunctionRider`, `TaskStrip`, `EquationStrip`, `GivensCard`, `WorkingRows`, `AnswerFrame`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard` with `GivensStrip`.

Additions (new kit-needs row w21):
1. **`BranchRider`** (new; reused by w23): rides y = k/x on one branch; refuses x = 0 with a barrier; shows a live readout and bar; triggers a one-time plot rescale with a tag when the height leaves the window. Checks: readouts 2, 60, 6000 at x = 3, 0.1, 0.001 for k = 6; never displays 0 for |x| ≤ 10⁶ (shows the value to two significant figures).
2. **Phone screen slot** (lesson folder): coded progress bar and text inside the reused plate's screen rectangle (sidecar measured once by the builder from `ma12-phone-v1.png`); the bar's fill rate is tied to the speed slider.

## Codex asset brief (Maths A11 W21)

No new plate for this video. Required before this video's build (commissioned elsewhere, not repeated here): `ma11-road-side-strip-v1.png` (w22's brief). The builder measures the phone plate's screen rectangle and saves it as `maths/ma12-phone-v1.json` if no sidecar exists (report it in the build, not a painting task).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the two syllabus quotes match the route-inputs JSON exactly (including "k ≠ 0" and the arrows), and no site module label appears.
3. Confirm the scope of every learner-visible general claim: "for y = k/x, the curve never actually reaches it" (3; not a general definition); "a fraction is zero only when its top is zero" (3); "k can't be zero" (5); "describe the two sides of 0 separately" (6); "only positive speeds make sense" (7); the model language for the download (steady speed).
4. Confirm the site's card 05, `we-1`, `we-2` and `we-3` keep their values.
5. Confirm both attempt questions carry every demand, and that each picture shows only what the question states.
6. Confirm the opening matches w20's final frame and scene 13's frame is w22's opening frame.
7. Confirm no em dash (U+2014) anywhere in this file, Australian spelling, and the narration counts by script with every bold cue quoted in its scene's Visual in spoken order.
8. Confirm the reused plates show no people or text.

## YouTube metadata (draft)

Title: y = k/x: the Hyperbola and Its Asymptotes | Year 11 Maths Advanced

(Title length: 70 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/working-with-functions/lesson17.sa.html

A phone downloads a 600 MB update in 600 ÷ s seconds. Faster speeds cut the time, but can it ever reach zero? Build y = k/x from simple divisions, see why it has two asymptotes, each with its own reason (you can't divide by zero, and k/x is never zero), sketch both branches of the hyperbola, and state its domain and range. Slide k from positive to negative to see the branches move quadrants, then describe what happens as x heads to infinity, to minus infinity, and towards zero from each side. A memory aid: x can't be 0, y can't be 0. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, working with functions.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Graph functions of the form f(x) = k/x, where k is a constant and k ≠ 0, and identify their hyperbolic shape and their asymptotes"
"Describe the behaviour of f(x) = k/x as x → ∞ and x → -∞"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

Builds on: domain and range; function notation. Next: Direct variation: how one pair of values fixes y = kxⁿ.

#Year11Maths #MathsAdvanced #Hyperbola #HSCScience

## Open decisions

- **1. Phones again (root).** Year 12 uses phones four times (d03, i03, t04, f14) with different ideas; a download time is a fifth phone context with a new idea. Fallback: the pack's swimming laps (n = 1500/L) with a painted pool lane, weaker because only whole lengths make sense.
- **2. The plot rescale (learning review).** The race to 6000 needs one rescale; the reviewer checks it reads as "the numbers outgrow the screen", not as a different curve.
- **3. The constant product clue (root).** Scene 7 names s × t = 600 as a clue for w23 (inverse variation). w22 is direct variation in between; keep or cut the clue.
- **4. Site link form.** `.sa.html`, as root decision 15.

## Review notes

- Revision 2 (16 Nov 2026): the independent learning review (`../checks/m-a11-w21-learning-review.md`) is resolved; see the Revision 2 section. Next: Codex maths check and error check, then voicing and a build to grade A.
- Revision 1 has had no independent review. Next: student learning review (trace from w09; check that the two asymptotes get two reasons, not one; that "approaches" and "∞" are given plain meanings; that the k slider at 0 explains k ≠ 0; that the download answer is said in words), then the Codex maths check and error check, then voicing and a build to grade A.
- The branch rider and the download slider carry the explanation; judge them at playback speed, not from stills. Every readout and point must be computed from the same k as the displayed curve.
