# Maths A11 W20: How do the factors of a cubic shape its graph? y = kx³, y = k(x − a)(x − b)(x − c), end behaviour and repeated factors (design)

Status: Revision 2 (16 Nov 2026): independent learning review resolved (see "Revision 2" below); not voiced. Revision 1 (16 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`, the d01 Revision 6 pattern and the f01 and s01 models) and the w01 to w14 root rulings (`../checks/root-acceptance-maths-a11-w01-w14.md`). Not voiced (no `math-a11-w20/` folder, no audio). Needs the Codex learning review and maths check before voicing. Nothing recorded; human listening pending.

Narration 5,815 characters, 14 scene headings, about 524 s with holds (the key-notes scene fixed at 45 s), counted by script with the build parser rules (see "Narration length estimate").

## Revision 2 (16 Nov): learning review resolved

Review: `../checks/m-a11-w20-learning-review.md` (summary `../checks/m-a11-w01-w31-learning-review-summary.md`), with root's rulings of 16 Nov. Findings by the review's numbers:

1. Should fix, scene 4 (undefined term, unfamiliar form): **accepted**, reviewer's wording; the −2x terms are circled, the three x-coefficients underlined, then "x³ term: 4x³, acts like k > 0".
2. Should fix, feedback 2 (about 32 s): **accepted**; the expanded form stays on screen in grey, not spoken, and the cue moves to the factored line ("four", second). About 28 s.

Narration now 5,815 characters by script, about 524 s with holds (see "Narration length estimate"). Stage-plan times below are Revision 1 approximations; frames come from the recording's word timings. Every changed value was rechecked with SymPy (scratchpad `rev2_verify.py`); Codex's maths check remains the authority.

Scope: twentieth video of the Year 11 Mathematics Advanced course (outline playlist order 20), after w19 (quadratic models) and before w21 (y = k/x). Pre-design pack: `../pre-design/maths-a11/math-a11-w20.md` (brief 243). Site lesson (read through the pack's quotations, read only): `working-with-functions/lesson15.sa.html` (Graphing Parabolas and Cubics, SHA256 `ecd404fe733ac55c409703f59eb475638370c1967bd8462ed514411bcadf9253`, `we-3` and card 07). Every number recalculated with SymPy. Route entry: `math-a11-w20` in `../../programme/maths-a11-route-inputs-2.json`.

Owner rules applied: 2024 syllabus only, content point cited by codename and exact wording; painted plates for the real object (a sheet of card with its corners cut, and the open tray it folds into, at three cut sizes), coded curves, sliders, sign walks and algebra; no people, hands or faces; one main learner question; one reasoning stage at a time; worked examples in the g01 layout with a framed answer and a crossed slip; "Pause here to answer." then a 10 s countdown with the full worded question and a picture; brief feedback with one crossed mistake; original HSC-style questions; key notes as five short bullets with a framed memory card; everyday anchor (a folded takeaway tray, food packaging); Australian spelling; no em dashes; conversational narration that explains the cause before the rule.

Syllabus content point (Mathematics Advanced 11-12 (2024), Year 11, Working with functions; NESA content-system codename, official `code` field empty), quoted from `../../programme/maths-a11-route-inputs-2.json`:

- `ci5c1f54ca` (Quadratic and cubic functions): "Recognise and graph cubic functions of the form f(x) = kx^3 and f(x) = k(x - a)(x - b)(x - c), where a, b, c and k are constants and k ≠ 0"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

**Boundary:** starts from w19's final frame (the cut card, the folded tray, "V = x(30 − 2x)(20 − 2x)", "Three factors: a cubic"), recalling w14 (factored form gives x-intercepts by the null factor law) and w16 (sketching from labelled features). Graphs y = x³ and y = kx³ (k > 0 and k < 0; no turning; flattening through the origin); graphs y = k(x − a)(x − b)(x − c) from its x-intercepts, its y-intercept, a sign walk between the roots, and the end behaviour from the sign of k (site `we-3`; the tray; a k < 0 worked example); a repeated factor touches instead of crossing (site card 07, y = x(x − 2)²); recognises a cubic's equation from its graph. Stops at recognising and sketching. Not taught: translated cubics y = k(x − b)³ + c and "point of inflection" (g01 and Year 12; the site's 2017 wording, S11-09, is not used); exact turning points (calculus, c16); cubic inequalities.

## Decisions

- **Anchor: an open tray folded from a 30 cm by 20 cm card (painted plates, live).** Cut a square of side x cm from each corner and fold up the sides: V = x(30 − 2x)(20 − 2x) = 4x(x − 10)(x − 15) cm³. Its zeros are 0, 10 and 15; k = 1 × (−2) × (−2) = 4 > 0; only 0 < x < 10 makes a tray, where V > 0. Three painted trays (x = 2, 5, 8 cm: 832, 1000 and 448 cm³) show the volume rising then falling. Food packaging and craft. Distinct from every Year 12 Maths anchor (d10 uses "the open box x(20 − 2x)²" only as a drill item inside its roller-coaster lesson, not as an anchor, and for calculus; root may judge it near) and from w01 to w19, and from the w24 to w31 pack suggestions. The pack's cube-shaped storage crate (kx³) was not used: w01's anchor is a 3 × 3 × 3 cube of toy blocks, and y = kx³ is taught on its own curve with a slider.
- **Idealising assumptions (author notes, not learner copy).** (i) Card thickness is ignored. (ii) The model's other branches (x < 0, 10 < x < 15, x > 15) are graphed as the cubic but greyed as "not a tray".
- **Simulations (standard item 3).**
  1. **The k slider** (scene 2, `ParameterSlider` and `StudioPlot`): a violet slider sweeps k from 3 to −3 through the excluded 0 (the curve flattens to the axis and a grey "k ≠ 0: not a cubic" tag shows, then it flips); a readout gives "k" and the end arrows (violet) swing.
  2. **The sign walk** (scenes 3, 5, new `SignWalk`, the pack's sign walk, built on w18's `SignSweep`): a blue rider walks along the x-axis; above it three bracket chips each show "+" or "−" for their own factor, flipping exactly at their own root (amber); a product chip shows the sign of y, and the curve draws behind the rider, teal above the axis and grey below. One timeline drives the rider, chips and curve.
  3. **The tray volume** (scene 4): a blue slider "cut x" moves along the practical domain; the painted tray cross-fades between its three states (x = 2, 5, 8) as the slider passes them; a teal readout shows "V = x(30 − 2x)(20 − 2x)" evaluated; a rider rides the hump of the coded curve.
  4. **The merging roots** (scene 6, `FamilyFan` from w16 in a `morph` mode): y = x(x − 2)(x − c) as c slides from 3 to 2; the two amber crossings at 2 and c slide together and merge into one touching point; the bracket chip for (x − c) merges with (x − 2) into "(x − 2)²", which stays "+" on both sides.
- **Colour roles (fixed for the whole video).** x-intercepts **amber** (as w14); the y-intercept **teal** (an output, root ruling 12); x-values and the rider **blue** (inputs); k and the end arrows **violet**; the curve teal above the axis and grey below during sign walks, ink otherwise; the tray's practical domain a grey bracket; answer green; mistake red, crossed slips only.
- **Large type (standard item 5).** Current working line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; all text above y = 950.
- **Handwritten voice (standard item 6).** `HandTag`: "highest power 3", "(−)(−)(−) = −", "flattens, no turn", "k < 0: flips", "one bracket = 0", "x = 0", "count the − brackets", "crosses", "starts low, ends high", "turns twice", "not a tray", "practical domain", "peak: calculus", "starts high, ends low", "two roots merge", "squared: never negative", "touches", "the sign of k", circles, arrows and crossings. At most two live at once.
- **Stage changes (standard item 2), about every 30 to 60 s.** w19's frame (1); y = x³ and the k slider (2); the sign walk on (x − 1)(x − 2)(x − 3) (3); the tray's graph and painted states (4); g01 board, k < 0 (5); the merging roots (6); recognising from a graph, three cards (7); framed memory card (8); question cards (9 to 12); the phone handoff (13); key notes (14).
- **Worked examples (g01 layout, standard item 7).** 3 (`we-3`): y = (x − 1)(x − 2)(x − 3): x-intercepts 1, 2, 3, y-intercept −6, bottom left to top right, two turns; crossed "y-intercept 6" captioned "(−1)(−2)(−3) = −6". 5 (original): y = −2(x + 1)(x − 2)(x − 3): x-intercepts −1, 2, 3, y-intercept −12, top left to bottom right; crossed "rises to the right" captioned "k < 0: falls to the right". 7 (original): the graph crossing at −2, touching at 1, through (0, 2) is y = (x + 2)(x − 1)²; crossed "y = −(x + 2)(x − 1)²" captioned "y-intercept: −2, not 2". Feedback scenes carry a `GivensStrip`, rows at 52 px, a green framed answer and one crossed slip.
- **Memory aid (standard item 8).** Framed `MemoryAidCard`: "Brackets cross, squares touch, k points the ends." Key line: "Each (x − a): crosses at a. A squared bracket: touches. k > 0: low left, high right. k < 0: high left, low right." Key notes are five short bullets beside the card; 45 s.
- **Visual surprise (standard item 9).** In scene 6 two crossings slide together and become a single touch as c reaches 2, while the merged bracket chip stops flipping sign. In scene 4 the painted tray grows deeper and smaller in the hand-free cross-fade while the rider climbs and then descends the hump.
- **Site numbers unchanged.** `we-3`: 1, 2, 3; −6; rises bottom left to top right; two turns. Card 07: y = x(x − 2)² crosses at 0, touches at 2; y(1) = 1, y(3) = 3, y(−1) = −9.
- **Site correction applied (S11-09, pack section 8).** The site's "y = a(x − r)³ + k ... a single point of inflection" is 2017 wording; the video teaches y = kx³ as the other syllabus form and does not say "point of inflection".
- **Attempts (pack questions, original).** A1: "Sketch y = −(x + 2)(x − 1)(x − 3), showing all intercepts and the direction the curve takes at each end." Answer x-intercepts −2, 1, 3; y-intercept −6; down from the top left, leaves at the bottom right. Crossed "x-intercepts 2, −1, −3". A2: "A cubic of the form y = k(x − a)(x − b)(x − c) has x-intercepts −1, 2 and 4 and passes through (0, 16). Find k and the equation." Answer k = 2, y = 2(x + 1)(x − 2)(x − 4) = 2x³ − 10x² + 4x + 16. Crossed "k = −2".
- **Mistake scene:** none separate. The wrong y-intercept sign (3 crossed); a k < 0 cubic rising to the right (5 crossed); crossing at a repeated root (6 tag); the wrong sign from the y-intercept (7 crossed; A2 crossed); root signs (A1 crossed); "every cubic turns twice" (2: y = x³ does not turn).
- **Cause chain taught, in order:** (1) a cubic's highest power is 3, and an odd power keeps the sign of x, so y = x³ is negative on the left and positive on the right, flattening through the origin without turning (2); (2) a negative k flips every height, so the ends swap (2); (3) a product is zero when one factor is zero, so each bracket gives a crossing (3; w14); (4) the product's sign changes each time one bracket changes sign, so the curve alternates sides between roots (3); (5) for large x every bracket is positive, so the sign of k decides the right end (3, 5); (6) a squared bracket is never negative, so the curve does not change sides there: it touches (6); (7) the y-intercept k(−a)(−b)(−c) fixes the sign of k when the roots are known (7, A2).
- **Entry knowledge (route):** w14 (x-intercepts from factored form by the null factor law); w16 (sketching from labelled features).
- **Learner-visible vocabulary (plain meaning at first use):** cubic function (highest power of x is 3, 1); end behaviour, said as "where the ends go" (which way the curve heads at the far left and far right, 2); practical domain (recalled from w19, 4); repeated factor (a bracket that appears twice, so it is squared, 6).
- **Handoff (to w21, "Why does y = k/x never meet its asymptotes?").** Scene 13: the reused phone plate `maths/ma12-phone-v1.png` with a coded screen: a progress bar, "600 MB update", "speed s MB/s", "time t = 600 ÷ s"; beside it small axes (s, t) with the points (10, 60), (20, 30), (60, 10) and a "?" near t = 0 on the right and near s = 0 at the top. Chips "Can the time reach 0?" and "Next: y = k/x". This is w21's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) V = x(30 − 2x)(20 − 2x) = 4x³ − 100x² + 600x = 4x(x − 10)(x − 15). V(2) = 2 × 26 × 16 = 832; V(5) = 5 × 20 × 10 = 1000; V(8) = 8 × 14 × 4 = 448; V(12) = 12 × 6 × (−4) = −288 (not a tray). The maximum on 0 < x < 10 is at x = (25 − 5√7)/3 ≈ 3.92, V ≈ 1056 (calculus; not taught; narration says "somewhere near four").
  (b) `we-3`: y(1.5) = 0.375, y(2.5) = −0.375, y(4) = 6; turning points at 2 ± √3/3 (author only).
  (c) Recognise options: (x + 2)(x − 1)² gives y(0) = 2; −(x + 2)(x − 1)² gives −2; (x + 2)²(x − 1) gives −4.
  (d) Pronunciations: "x cubed", "minus two, times x plus one, times x minus two, times x minus three", "cubic centimetres".
  (e) Windows: y = x³ plot x −2.5 to 2.5, y −10 to 10; `we-3` plot x −0.5 to 4.5, y −7 to 7; tray plot x −2 to 17, V −1,500 to 1,500 (labelled scales); recognise plots x −3 to 3, y −5 to 5.

Main question: *Cut squares from the corners of a card and fold it into a tray. Its volume has three factors. How do the factors of a cubic shape its graph?*
Entry knowledge (w14; w16): x-intercepts from factored form; sketching from labelled features.
Stops after: y = kx³; y = k(x − a)(x − b)(x − c) from intercepts, sign walk and end behaviour; repeated factors touch; recognising from a graph. No translations, no exact turning points.
Handoff: math-a11-w21: the phone download, t = 600 ÷ s.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed; see Decisions): x-intercepts amber; y-intercept teal; x-values and riders blue; k and end arrows violet; curve teal above and grey below during sign walks, ink otherwise; answer green; mistake red, crossed slips only. Type: current line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; all text above y = 950. Every stage's main visual is solid from the stage's first frame. Header strip "MATHEMATICS ADVANCED · WORKING WITH FUNCTIONS"; scene headings in the hand font, 44 px.

### 1. hook: three factors
> Here's a sheet of card, thirty centimetres by twenty. Cut a square of side x from each corner, fold up the sides, and you get an open tray. Small cuts give a shallow tray. Big cuts give a deep but tiny one. Its volume is x, times thirty minus two x, times twenty minus two x. Multiply that out, and the highest power is x cubed, so this is a cubic **function**. What does its graph look like, and how do the factors shape it?

Visual: opens on w19's final frame exactly (the cut card `ma11-card-sheet-cut-v1.png` with dashed fold lines and labels "30 cm", "20 cm", amber "x" on each corner square; the folded tray `ma11-card-tray-5-v1.png`; the strip "V = x(30 − 2x)(20 − 2x)"; chips "Three factors: a cubic" and "Next: how a cubic's factors shape its graph"). On the first sentence the "Next" chip fades and the heading writes on "Three factors". On "fold up the sides" the fold lines pulse and the tray grows to 600 px. On "Small cuts" the tray cross-fades to `ma11-card-tray-2-v1.png` (shallow), hand tag "shallow"; on "Big cuts" to `ma11-card-tray-8-v1.png` (deep, small), hand tag "deep, tiny"; then back to the x = 5 tray. On "Multiply that out" a grey row "= 4x³ − 100x² + 600x" writes under the strip with "x³" circled violet, hand tag "highest power 3". On "function" the chip "graph?" moves to the top right as the scene question.

### 2. y = x³ and y = kx³
> Start with the simplest cubic, y equals x cubed. Two cubed is eight, and minus two cubed is minus eight, because a negative times a negative times a negative is **negative**. So the curve comes up from the bottom left, passes through the origin, and rises to the top right. Near the origin it flattens for a moment, but it doesn't turn **around**. Now put a number k in front. A bigger k stretches it upwards. And a negative k flips every height, so the curve comes down from the top left and leaves at the bottom **right**. The sign of k decides where the ends go.

Visual: clear change. Plot (x −2.5 to 2.5, y −10 to 10; 1,000 × 680 px) at the left; a table at the right (44 px): x −2, −1, 0, 1, 2 and x³ −8, −1, 0, 1, 8 (x blue, x³ teal). On "negative" the "−8" cell glows, hand tag "(−)(−)(−) = −"; the five points land and the curve draws through them. On "around" a small magnifier ring at the origin shows the flat moment, hand tag "flattens, no turn". On "Now put a number k in front" the k slider (simulation 1) appears, strip "y = kx³" (k violet); k moves 1 → 3 (the curve steepens, readout "(1, 3)"), then down through 0 (the curve flattens onto the axis with a grey tag "k ≠ 0: not a cubic") to −1 and −2. On "right" violet end arrows show "top left" and "bottom right", hand tag "k < 0: flips". On "ends go" the arrows for k = 1 and k = −1 sit side by side.

### 3. three brackets: the sign walk
> Now three factors. Sketch y equals x minus one, times x minus two, times x minus three. Each bracket is zero at its own root, so the curve crosses the x axis at one, two and **three**. For the y intercept, put x equals zero. Minus one times minus two times minus three is minus **six**. Now walk along the axis and watch the brackets' signs. Left of one, all three are negative, so the product is negative, and the curve is below the axis. Pass one, and one bracket turns positive, so the curve crosses to **above**. Pass two, it crosses back below. Pass three, it's above for good. With k equal to one, it starts at the bottom left and finishes at the top right, turning twice between the **crossings**.

Visual: clear change to the sign walk (simulation 2). Task strip, 44 px: "Sketch y = (x − 1)(x − 2)(x − 3), showing its intercepts." (site `we-3`). Plot (x −0.5 to 4.5, y −7 to 7; 1,100 × 640 px). Above the plot three bracket chips "(x − 1)", "(x − 2)", "(x − 3)" and a product chip "y". On "three" (first) amber dots at 1, 2 and 3, hand tag "one bracket = 0". On "six" row "y(0) = (−1)(−2)(−3) = −6" (52 px), teal dot at (0, −6), hand tag "x = 0". On "walk along the axis" the blue rider starts at x = 0: the chips read "−, −, −", the product "−", and the curve draws grey below the axis, hand tag "count the − brackets". On "above" the rider passes 1: the first chip flips to "+", the product to "+", and the curve crosses up, teal, hand tag "crosses". It passes 2 (the product "−", grey) and 3 (the product "+", teal) and runs on to 4 (readout y(4) = 6). On "crossings" violet end arrows "bottom left", "top right", hand tags "starts low, ends high" and "turns twice". Framed answer (green): "x-intercepts 1, 2, 3; y-intercept −6; bottom left to top right." A red slip "y-intercept 6" writes small and is crossed (caption "(−1)(−2)(−3) = −6").

### 4. the tray's graph
> Back to the tray. Each factor is zero somewhere. x is zero at zero, thirty minus two x is zero at fifteen, and twenty minus two x is zero at **ten**. So the graph crosses at zero, ten and fifteen. This isn't quite in our form, because of the minus twos. Multiply the numbers in front of x in each bracket: one, times minus two, times minus two, which is plus four. That's the number in front of x cubed once it's all multiplied out, so it acts like k, and the curve finishes at the top **right**. But only part of the graph is a real tray. The cut has to be more than zero and less than ten, or the short side disappears. So the practical domain is between zero and **ten**, where the volume is positive. Two centimetre cuts give eight hundred and thirty-two cubic centimetres, five give a thousand, and eight give four hundred and forty-**eight**. The volume rises, peaks near four, then falls. Finding the exact peak is a job for calculus.

Visual: clear change. Left half: the painted tray (500 px) above the cut card (420 px). Right half: the tray plot (x −2 to 17, V −1,500 to 1,500; labelled scales). Strip, 44 px: "V = x(30 − 2x)(20 − 2x)". On "ten" (first) rows "x = 0", "30 − 2x = 0 ⇒ x = 15", "20 − 2x = 0 ⇒ x = 10", amber dots at 0, 10, 15. While "because of the minus twos" is spoken, the strip's "−2x" terms are circled amber beside a faint grey reminder "our form: k(x − a)(x − b)(x − c)". While the multiplication is spoken, the three x-coefficients 1, −2, −2 are underlined in turn and the row "1 × (−2) × (−2) = +4" writes, then "x³ term: 4x³, acts like k > 0" (violet). On "right" the whole cubic draws (ink) with its end arrows. On "real tray" the parts left of 0 and right of 10 grey out, hand tag "not a tray". On "ten" (second) a grey bracket "0 < x < 10" under the hump, hand tag "practical domain". On "eight" (last bold) the tray volume slider (simulation 3) moves through x = 2, 5 and 8: the painted tray cross-fades through its three states, the rider climbs and descends the hump, and the readout shows "V(2) = 832", "V(5) = 1000", "V(8) = 448" (teal). On "peaks near four" a grey "?" ring near x ≈ 4 at the top of the hump, hand tag "peak: calculus (Year 12)".

### 5. worked example: a negative k
> Now a negative k. Sketch y equals minus two, times x plus one, times x minus two, times x minus **three**. The roots are minus one, two and three. The y intercept is minus two, times one, times minus two, times minus three, which is minus **twelve**. And k is minus two, so the curve comes down from the top left, crosses three times, and leaves at the bottom **right**. Drawing it rising to the right, as if k were positive, is the classic **slip**.

Visual: clear change to the g01 board with a small sign walk at the right. Task strip, 44 px: "Sketch y = −2(x + 1)(x − 2)(x − 3), showing all intercepts." Givens card: "k = −2" (violet). On "three" rows "x-intercepts: −1, 2, 3" (amber dots); on "twelve" "y(0) = −2(1)(−2)(−3) = −12" (teal dot at (0, −12)). On "right" the sign walk draws the curve (teal above, grey below) with violet end arrows "top left", "bottom right", hand tag "starts high, ends low". Framed answer (green): "x-intercepts −1, 2, 3; y-intercept −12; top left to bottom right." On "slip" a red slip "rises to the right" writes and is crossed (caption "k < 0: falls to the right").

### 6. a repeated factor touches
> What if two roots are the same? Watch y equals x, times x minus two, times x minus c, as c slides towards two. The crossings at two and at c move together, and when c reaches two, they merge. The curve no longer crosses there. It just touches the axis and turns **back**. That's y equals x, times x minus two, squared. The reason is the square. x minus two, squared, is never negative, so it can't change sign at two, and neither can the **curve**. So a single bracket means a crossing, and a squared bracket means a **touch**.

Visual: clear change to the merging roots (simulation 4). Plot (x −1.5 to 4, y −10 to 5). Strip "y = x(x − 2)(x − c)" with "c" blue and a slider "c" from 3 to 2. As c slides, the amber crossings at 2 and c slide together; the bracket chips "(x − 2)" and "(x − c)" slide together. On "back" they merge: one amber touching point at (2, 0), the strip becomes "y = x(x − 2)²" (site card 07), hand tag "two roots merge". Points (1, 1), (3, 3) and (−1, −9) land as teal dots. On "curve" the sign walk runs: the merged chip "(x − 2)²" stays "+" on both sides of 2, hand tag "squared: never negative"; the curve stays above the axis on both sides of 2. On "touch" two labels: "crosses at 0" and "touches at 2", hand tag "touches".

### 7. recognising a cubic from its graph
> Here's how to recognise a cubic from its graph. This curve crosses at minus two, touches at one, and cuts the y axis at two. Which equation is it? Touching at one means a squared bracket, x minus one, squared. Crossing at minus two means a single bracket, x plus **two**. Then the y intercept picks the sign of k. x plus two, times x minus one, squared, at zero gives two times one, which is plus **two**. The negative version gives minus two, so it's the first **one**.

Visual: clear change. Left: a large plot (x −3 to 3, y −5 to 5) of y = (x + 2)(x − 1)², with amber marks at −2 (crossing) and 1 (touching) and a teal dot at (0, 2), unlabelled except "?". Right: three equation cards, 44 px: "A: y = (x + 2)(x − 1)²", "B: y = −(x + 2)(x − 1)²", "C: y = (x + 2)²(x − 1)". On "squared bracket" card C's "(x + 2)²" is struck in grey (it would touch at −2). On "two" (first) hand tag "crosses: single bracket". On "two" (second) rows "A: y(0) = (2)(1) = 2 ✓", "B: y(0) = −2 ✗" (teal). On "one" card A frames green, hand tag "the sign of k". A red slip "B" writes small and is crossed (caption "y-intercept: −2, not 2").

### 8. memory aid
> Here's a way to remember it. Brackets cross, squares touch, and k points the ends. Each single bracket gives a crossing, a squared bracket gives a touch, and the sign of k says whether the curve starts low or high on the **left**.

Visual: stage change to the framed `MemoryAidCard` (about 1,300 × 600 px, double ink frame, hand-font heading "Memory aid"). Left slot: two crossings merging into a touch, then the ends swinging as k changes sign (a 3 s loop). Main line, hand font 60 px: "Brackets cross, squares touch, k points the ends." On "left" the key line, 40 px: "Each (x − a): crosses at a. A squared bracket: touches. k > 0: low left, high right. k < 0: high left, low right." Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. Sketch y equals minus, x plus two, times x minus one, times x minus three, showing all intercepts and the direction the curve takes at each end. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Sketch y = −(x + 2)(x − 1)(x − 3), showing all intercepts and the direction the curve takes at each end." The full question stays on screen. Picture slot: empty axes (x −3 to 4, y −12 to 12), no dots or curve. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> The x intercepts are minus two, one and **three**. The y intercept is minus, two times minus one times minus three, which is minus **six**. k is minus one, so the curve comes down from the top left, crosses at each root, and leaves at the bottom **right**. Reading the intercepts as two, minus one and minus three is the classic slip. Each root has the opposite sign to the number in its **bracket**.

Visual: the card shrinks to the top (30 px). `GivensStrip`: "y = −(x + 2)(x − 1)(x − 3)" (brackets underlined as used). Rows, 52 px: on "three" "x-intercepts −2, 1, 3"; on "six" "y(0) = −(2)(−1)(−3) = −6"; on "right" "k = −1 < 0: top left to bottom right". The picture draws the curve through the amber and teal marks with violet end arrows. Framed answer (green): "x-intercepts −2, 1, 3; y-intercept −6; top left to bottom right." On "bracket" a red slip "x-intercepts 2, −1, −3" writes and is crossed (hand caption "opposite sign"). Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. A cubic of the form y equals k, times x minus a, times x minus b, times x minus c, has x intercepts minus one, two and four, and passes through zero, sixteen. Find k and the equation. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A cubic of the form y = k(x − a)(x − b)(x − c) has x-intercepts −1, 2 and 4 and passes through (0, 16). Find k and the equation." The full question stays on screen. Picture slot: axes (x −2 to 5, y −10 to 20) with amber marks at −1, 2, 4 and a teal ring at (0, 16), as the question states; no curve. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 12. feedback 2 (brief)
> The intercepts give y equals k, times x plus one, times x minus two, times x minus **four**. Put in zero, sixteen. Sixteen equals k, times one, times minus two, times minus four, which is eight k, so k is **two**. So y equals two, times x plus one, times x minus two, times x minus **four**. If you got k equals minus two, check the signs. Minus two times minus four is plus **eight**.

Visual: the card shrinks to the top. `GivensStrip`: "x-intercepts −1, 2, 4", "(0, 16)" (underlined as used). Rows, 52 px: on "four" "y = k(x + 1)(x − 2)(x − 4)" (k violet dashed); "16 = k(1)(−2)(−4) = 8k"; on "two" "k = 2"; on "four" (second) "y = 2(x + 1)(x − 2)(x − 4)", with the expanded form "= 2x³ − 10x² + 4x + 16" written after it in grey, 32 px, not spoken. Framed answer (green): "k = 2; y = 2(x + 1)(x − 2)(x − 4)"; the picture draws the curve through the marks. On "eight" a red slip "k = −2" writes and is crossed (hand caption "(−2)(−4) = +8"). Hold about 1 s.

### 13. handoff
> So a cubic's brackets give its crossings and touches, and k gives its ends. Next, a very different curve. A phone is downloading a six hundred megabyte update. At ten megabytes a second, it takes sixty seconds. Faster speeds take less time, but can the time ever reach zero? And what happens as the speed drops towards zero? That's the reciprocal function, y equals k over **x**.

Visual: the memory line shows small at the top (30 px), then fades on "Next". Board clears to the reused phone plate `maths/ma12-phone-v1.png` (about 520 px tall, solid) at the left with a coded screen: a progress bar, "600 MB update", "speed s = 10 MB/s", "time t = 600 ÷ s = 60 s". At the right, small axes (s "speed (MB/s)" 0 to 70, t "time (s)" 0 to 140) with blue-and-teal points (10, 60), (20, 30), (60, 10). On "reach zero" a "?" near t = 0 at the right; on "towards zero" a "?" near s = 0 at the top. On "x" chips "Can the time reach 0?" and "Next: y = k/x". Hold about 2 s. This is w21's opening frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- y = kx³: through the origin, flattens, no turn.
- y = k(x − a)(x − b)(x − c): crosses at a, b, c.
- y-intercept: k(−a)(−b)(−c).
- k > 0: low left, high right. k < 0: high left, low right.
- A squared bracket (x − a)²: touches at a.

Memory aid (framed card, right side of the notes screen, as in scene 8): *Brackets cross, squares touch, k points the ends.* Key: *Each (x − a): crosses at a. A squared bracket: touches. k > 0: low left, high right. k < 0: high left, low right.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades (1 s) back to scene 13's frame exactly (the phone with its download screen, the small axes and points, the two "?" marks and both chips). This is the final frame and w21's opening frame.

## Teaching checks

- **Does it explain causes?** Why y = x³ keeps the sign of x: three negatives multiply to a negative (2). Why k < 0 swaps the ends: it flips every height (2). Why each bracket gives a crossing: a product is zero when a factor is zero (3). Why the curve alternates sides: one bracket changes sign at each root (3). Why the right end follows k: for large x every bracket is positive (3, 5). Why a squared bracket touches: a square never changes sign (6). Why the y-intercept fixes k's sign (7, A2). Why only part of the tray's graph counts: the cut must be between 0 and 10 (4).
- **Misconceptions addressed:** root signs (A1 crossed); a k < 0 cubic rising right (5 crossed); crossing at a repeated root (6); the y-intercept as k or with the wrong sign (3 crossed; 7 crossed; A2 crossed); every cubic turns twice (2).
- **Visual standard (`../maths-visual-standard.md`), item by item:** 1 the painted card and three trays from the first frame, answered in 4; 2 a new stage every 30 to 60 s; 3 the k slider, the sign walk (bracket chips flip as the rider passes each root, the curve drawing teal or grey), the tray slider with painted cross-fades, the merging roots; 4 fixed colour roles; 5 large type; 6 hand tags; 7 g01 boards in 3, 5 and 7 with framed answers and crossed slips; 8 framed memory card and five short bullets; 9 two crossings merging into a touch.
- **One idea at a time:** kx³ (2), three brackets (3), the anchor (4), k < 0 (5), repeated roots (6), recognising (7).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; each card's picture shows only what the question states; 10 s each with the invitation to pause; nothing answer-bearing. One crossed mistake each; feedback about 30 s and 33 s.
- **Avoided double teaching:** the null factor law and factored-form intercepts (w14), labelled sketches (w16), the practical domain (w19) are used, not re-taught.
- **Syllabus coverage:** `ci5c1f54ca` kx³ (2; key note 1); k(x − a)(x − b)(x − c) graph (3, 4, 5, 6; A1; key notes 2 to 5); recognise (7; A2); k ≠ 0 (2 tag).
- **Out of scope by design:** translated cubics and inflection (g01, Year 12); exact turning points (c16); cubic inequalities.

## Practice questions and model answers

**Attempt 1 (scene 9; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "Sketch y = −(x + 2)(x − 1)(x − 3), showing all intercepts and the direction the curve takes at each end."
Model answer: x-intercepts −2, 1 and 3. y-intercept: y = −(2)(−1)(−3) = −6. k = −1 < 0, so the curve comes down from the top left, crosses at −2, 1 and 3, and leaves at the bottom right. (Sketch with the intercepts labelled.) Classic mistake (crossed): "x-intercepts 2, −1, −3".

**Attempt 2 (scene 11; original wording, HSC style, 2 marks suggested).** "A cubic of the form y = k(x − a)(x − b)(x − c) has x-intercepts −1, 2 and 4 and passes through (0, 16). Find k and the equation."
Model answer: y = k(x + 1)(x − 2)(x − 4). At (0, 16): 16 = k(1)(−2)(−4) = 8k, so k = 2. y = 2(x + 1)(x − 2)(x − 4) = 2x³ − 10x² + 4x + 16. Classic mistake (crossed): "k = −2".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Tray | V = x(30 − 2x)(20 − 2x) = 4x³ − 100x² + 600x = 4x(x − 10)(x − 15); zeros 0, 10, 15; k = 4; 0 < x < 10; V(2) = 832, V(5) = 1000, V(8) = 448; peak near 4 (≈ 3.92, ≈ 1056, author only) | 1, 4, 13 |
| y = x³ | (−2, −8), (−1, −1), (0, 0), (1, 1), (2, 8); 2x³ at 1 and 2: 2, 16 | 2 |
| Site `we-3` | (x − 1)(x − 2)(x − 3): 1, 2, 3; y(0) = −6; y(4) = 6 | 3 |
| k < 0 example | −2(x + 1)(x − 2)(x − 3): −1, 2, 3; y(0) = −12; leading −2 | 5 |
| Site card 07 | x(x − 2)²: crosses 0, touches 2; y(1) = 1, y(3) = 3, y(−1) = −9 | 6 |
| Recognise | (x + 2)(x − 1)²: y(0) = 2; −(x + 2)(x − 1)²: −2; (x + 2)²(x − 1): −4 | 7 |
| A1 | −(x + 2)(x − 1)(x − 3): −2, 1, 3; y(0) = −6 | 9, 10 |
| A2 | 8k = 16, k = 2; 2x³ − 10x² + 4x + 16 | 11, 12 |
| Handoff | t = 600/s: (10, 60), (20, 30), (60, 10) | 13 |

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy 1.14 (16 Nov 2026, scratchpad `w15w23/verify.py`, 85 checks, none failing); Codex to re-check.

- x³ at −2, −1, 0, 1, 2: −8, −1, 0, 1, 8; 2x³ at 1, 2: 2, 16.
- (x − 1)(x − 2)(x − 3) at 0: −6; at 1.5: 0.375; at 2.5: −0.375; at 4: 6.
- −2(x + 1)(x − 2)(x − 3) at 0: −12; leading coefficient −2.
- x(30 − 2x)(20 − 2x) = 4x(x − 10)(x − 15) = 4x³ − 100x² + 600x; values 832, 1000, 448, −288 at x = 2, 5, 8, 12; stationary point (25 − 5√7)/3 ≈ 3.924 with V ≈ 1056.3 (author only).
- x(x − 2)² at 1, 3, −1: 1, 3, −9.
- At x = 0: (x + 2)(x − 1)² = 2; −(x + 2)(x − 1)² = −2; (x + 2)²(x − 1) = −4.
- −(x + 2)(x − 1)(x − 3): roots −2, 1, 3; value at 0 is −6.
- k(1)(−2)(−4) = 16 gives k = 2; 2(x + 1)(x − 2)(x − 4) = 2x³ − 10x² + 4x + 16.
- 600/s at s = 10, 20, 60: 60, 30, 10.

## Memory aid check

- **"Brackets cross, squares touch, k points the ends."** Original. Meaning, as said in scene 8: in y = k(x − a)(x − b)(x − c), each single bracket gives a crossing of the x-axis at its root; a squared bracket gives a touch; the sign of k sets the ends (k > 0 low on the left and high on the right; k < 0 the reverse). Assumptions checked: real roots; k ≠ 0; "squares touch" applies to a bracket appearing exactly twice (a cubed bracket, as in kx³, crosses while flattening; said in 2); the end rule is for cubics (odd degree). It helps a new case: y = −(x + 1)²(x − 3) touches at −1, crosses at 3, and runs high left to low right. Introduced after the causes in 2, 3 and 6.
- **Considered, not used:** "Odd power, opposite ends" (true for cubics, but it hides the role of k's sign).

## Narration length estimate

Recounted for Revision 2 (16 Nov 2026). Counted 16 Nov 2026 with the build parser rules (`### N.` headings; only lines starting "> " inside the scene, joined with a space, `**` removed; the total is the sum of the scene strings): **5,815 characters**, 14 scene headings. Characters per scene (1 to 14): 421, 553, 688, 925, 434, 515, 458, 226, 177, 384, 215, 369, 375, 75.

At 13.3 characters per second the speech is about 437 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, two feedbacks 1 s each, handoff 2 s) 6 s; settling for the k slider through 0 (2), the sign walk (3), the tray slider and plate cross-fades (4), the merging roots (6) and the three cards (7), about 22 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 524 s (8 min 44 s)**, inside the 5,500 to 6,800 character band and about 46 s under the 570 s cap.

Reserve trims, if the voiced takes run long, in this order: scene 4's sample volumes sentence (keep the readouts on screen); scene 2's "A bigger k stretches it upwards." (keep the slider). Do not cut below 5,500 characters.

## Scene list and build ids

Lesson key `m-a11w20` (route math-a11-w20). Explainer folder `src/explainer/lessons/math-a11-w20`; build inputs in `docs/production/claude-pm/lessons/math-a11-w20/` (to be created at voicing).

In order (kebab-case; 14 scene headings): hook-tray, x-cubed-and-k, sign-walk, tray-graph, worked-negative-k, repeated-factor, recognise, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (seconds from the estimate):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 34 s | 1 | w19's frame; the card and three painted trays |
| 34 to 81 s | 2 | y = x³ and the k slider |
| 81 to 140 s | 3 | The sign walk on (x − 1)(x − 2)(x − 3) |
| 140 to 203 s | 4 | The tray's graph and its painted states |
| 203 to 239 s | 5 | g01 board: a negative k |
| 239 to 284 s | 6 | Two roots merge into a touch |
| 284 to 322 s | 7 | Recognising a cubic: three equation cards |
| 322 to 334 s | 8 | Framed memory card |
| 334 to 440 s | 9 to 12 | Question cards with pictures and countdowns, then feedback |
| 440 to 470 s | 13 | The phone download and "y = k/x" |
| 470 s to end | 14 | Key notes with the framed card, then a silent return to scene 13's frame |

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): w19's last frame continues into scene 1 (identical frame); 1 to 2 clear change; 2 to 3 clear change; 3 to 4 clear change back to the tray; 4 to 5 clear change; 5 to 6 clear change; 6 to 7 clear change; 7 to 8 camera pull back to the card; attempts and feedback: the card shrinks to the top; 12 to 13 board clear; 13 to 14 fade to the notes board, then a silent return to scene 13's frame.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, the ring shown full from "Pause here to answer."). key-notes is 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11w20-learning-review.md`, `science_check` = `checks/m-a11w20-maths-check.md`.

## Assets

Inspected before choosing (16 Nov 2026, `public/assets/maths`, read only): `ma12-cereal-box-v1.png` (a closed box, not a folded open tray; not used); `ma12-card-texture-v1.png` (a card texture tile, not a cut sheet; not used); `ma12-phone-v1.png` (viewed: a phone with a blank dark screen, no hands; reused for the handoff). No card tray plate exists.

Need (painted, new; see the Codex asset brief): `ma11-card-sheet-cut-v1.png`, `ma11-card-tray-2-v1.png`, `ma11-card-tray-5-v1.png`, `ma11-card-tray-8-v1.png` (plates 1 and 3 also w19's handoff). Reused: `maths/ma12-phone-v1.png`.

Coded (studio kit): every curve, axis, slider, rider, bracket chip, end arrow, readout, card, working board, question card, the countdown, hand tags, the framed card and key notes; the fold lines and labels on the card; the phone's screen.

### Studio kit use and additions

Uses: `MATH_ROLES` and `Role`, `HandTag`, `PlateImg`, `LiveReadoutBoard`, `ParameterSlider`, `StudioPlot`, `FunctionSimulator`, `SignSweep` (w18), `FamilyFan` (w16), `TaskStrip`, `EquationStrip`, `GivensCard`, `WorkingRows`, `AnswerFrame`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard` with `GivensStrip`.

Additions (new kit-needs row w20):
1. **`SignWalk`** (new, on `SignSweep`): props `k`, `roots` (with multiplicities), `xRange`, `riderPath(t)`; shows one chip per bracket with its live sign (a squared bracket as one chip that never flips), a product chip, and draws the curve behind the rider teal above and grey below. Checks: (x − 1)(x − 2)(x − 3) gives product signs −, +, −, + on the four intervals; x(x − 2)² gives −, +, + on (−∞, 0), (0, 2), (2, ∞).
2. **`FamilyFan` `morph` mode**: one parameter slides a root; crossings computed and merged within 1e-9 (the build holds c = 2 for the touching beat).
3. **Tray plate cross-fade by state** (lesson folder): three tray plates of identical framing cross-fade as the slider passes x = 2, 5, 8.

## Codex asset brief (Maths A11 W20, a card tray at three cut sizes; also w19's handoff)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-w20.md`. Paint after the learning review and maths check pass and root gives the go-ahead, and **before the w19 build** (w19's final frame uses plates 1 and 3). Save to `public/assets/maths/`. Every plate: **transparent PNG with a true alpha channel**, clean edges (check on black and white); ink and watercolour in the house style, matched to `maths/ma12-timber-deck-v1.png` and `maths/ma12-pen-wall-v1.png`; plain kraft-brown card; no text, logos, printing, food, people, hands, faces, scissors, glow or shadow beyond a faint contact shadow. Never stretch to fit; keep the native aspect ratio.

1. `ma11-card-sheet-cut-v1.png`: a flat rectangular sheet of kraft card seen from directly above, **30 cm by 20 cm painted at 40 px per cm** (1200 × 800 px of card, on a 1300 × 900 px canvas), with a 5 cm square removed from each corner (each notch exactly 200 × 200 px). No fold lines (the builder draws them).
2. `ma11-card-tray-2-v1.png`, 3. `ma11-card-tray-5-v1.png`, 4. `ma11-card-tray-8-v1.png`: the same card folded into an open tray (the sides folded up and held at the corners with a small fold of tape or a tab, no text), seen in the same three-quarter view from above and in front, **one shared projection and scale** across the three plates, each on a 1200 × 900 px canvas with the tray's base centre at the same pixel point. Tray sizes (length × width × depth): plate 2: 26 × 16 × 2 cm; plate 3: 20 × 10 × 5 cm; plate 4: 14 × 4 × 8 cm. The three must cross-fade cleanly: identical lighting, card colour and base position.

Report in a sidecar `ma11-card-tray-v1.json`, in file pixels: plate 1's four notch squares, and for plates 2 to 4 the base centre and the base corners. Report inspection on the paper background (`#f6f1e7`) at 600 px wide, the alpha checks and a three-way cross-fade test strip.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", the tray sizes in the asset brief, and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the syllabus quote matches the route-inputs JSON exactly (including "k ≠ 0"), and no site module label appears.
3. Confirm the scope of every learner-visible general claim: "y = x³ flattens but doesn't turn" (2); "a negative k flips every height" (2); "each bracket gives a crossing" (3; single brackets); "a squared bracket touches" (6); "for k > 0 low left, high right" (key notes; cubics); "finding the exact peak is a job for calculus" (4). Confirm "point of inflection" and the translated form y = a(x − r)³ + k (S11-09) do not appear.
4. Confirm the site's `we-3` and card 07 keep their values.
5. Confirm both attempt questions carry every demand, and that each picture shows only what the question states.
6. Confirm the opening matches w19's final frame and scene 13's frame is w21's opening frame.
7. Confirm no em dash (U+2014) anywhere in this file, Australian spelling, and the narration counts by script with every bold cue quoted in its scene's Visual in spoken order.
8. Confirm the plate requests contain no people, hands, text or logos.

## YouTube metadata (draft)

Title: Cubic Graphs: How the Factors Shape the Curve | Year 11 Maths Advanced

(Title length: 71 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/working-with-functions/lesson15.sa.html

Cut squares from the corners of a card and fold it into a tray: its volume has three factors, so it's a cubic. Graph y = kx³ and see how the sign of k sets the ends, then sketch y = k(x − a)(x − b)(x − c) from its intercepts by walking along the axis and watching each bracket change sign. Find the tray's practical domain, see why a repeated factor touches the axis instead of crossing it, and recognise a cubic from its graph. A memory aid: brackets cross, squares touch, k points the ends. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, working with functions.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Recognise and graph cubic functions of the form f(x) = kx^3 and f(x) = k(x - a)(x - b)(x - c), where a, b, c and k are constants and k ≠ 0"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

Builds on: intercepts from factored form; sketching parabolas from features. Next: The reciprocal function y = k/x and its asymptotes.

#Year11Maths #MathsAdvanced #Cubics #HSCScience

## Open decisions

- **1. Near context (root).** Year 12 d10 lists "the open box x(20 − 2x)²" as one drill item in its global-extremes lesson; it is not an anchor and asks for calculus. Root judges whether the tray is distinct enough; the fallback is coded graphs with the pack's crate badge (weaker: w01 is a cube of blocks).
- **2. "Peak near four" (learning review).** The narration names the peak's rough place and defers the exact value to Year 12; the reviewer checks it raises interest rather than frustration.
- **3. Site correction S11-09 (root).** Already logged; the design teaches kx³ and does not use the site's translated form.
- **4. Site link form.** `.sa.html`, as root decision 15.

## Review notes

- Revision 2 (16 Nov 2026): the independent learning review (`../checks/m-a11-w20-learning-review.md`) is resolved; see the Revision 2 section. Next: Codex maths check and error check, then voicing and a build to grade A.
- Revision 1 has had no independent review. Next: student learning review (trace from w14 and w16; check that the sign walk is the reason for alternating sides; that the k slider through 0 is clear about k ≠ 0; that the merge is seen as two crossings becoming one touch; that recognition uses reasons in order: touch, cross, y-intercept), then the Codex maths check and error check, then voicing and a build to grade A.
- The sign walk, the k slider, the tray slider and the merge carry the explanation; judge them at playback speed, not from stills. Every chip, dot and readout must be computed from the same factors as the displayed curve.
