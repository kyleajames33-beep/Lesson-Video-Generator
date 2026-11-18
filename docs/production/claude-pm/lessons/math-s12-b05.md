# Maths S12 B05: What does Pearson's correlation coefficient measure? r between −1 and 1, sign for direction and size for strength, one guide for the words, r from a scientific calculator, two checks, and r's limits (curves, outliers, cause) (design)

Status: Revision 1 (19 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Standard designs (`math-s12-r12a.md`, `t05.md`, `a04b.md`, Revision 2 each, and the t-strand resolution logs, in particular the t01b calculator-key finding) and root's Standard rulings (`../checks/root-rulings-maths-standard-outline.md`, 1 to 69). Designer's decisions for b01 to b07: `../checks/root-decisions-maths-s12-b01-b07.md`. Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,542 characters by script (see "Narration length estimate"), 16 scene headings, about 518 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: Bivariate data analysis, playlist order 66. **Standard 2 only.** Standard 1 viewers go from b04a to b07. Pre-design pack: `../pre-design/maths-standard/math-s12-b05.md`. Site lesson (read through the pack's quotations, read only): `maths-standard/year12/bivariate-data-analysis/lesson06.sa.html` (SHA256 `8da067542fa595762ce4f38f929b9535c0374a304c24d7426a8b137fe0154146`; card 02, "Sign gives direction; magnitude gives strength"; card 05's guide table, "These are guidelines, not strict rules"; card 07, "r only measures linear relationships" and "Outliers can distort r"; card 08's eight students, "r = −0.8995554…, which you report as r = −0.90", the two checks, and "Menus differ, the three things you are hunting never do"; the Correlation Explorer's ten points, SHA256 `d88599b655b50db6d9e6d7a6bf5dfca82a4f1e376ed944532f5dd723b8c412e1`, with (2, 45) moved to (2, 95)). One guide is used (MS-60); the explorer's 0.9 "very strong" label and card 06's "HSC uses two thresholds" are not used; no r is given for a categorical variable (MS-60). Route entry: `math-s12-b05` in `../../programme/maths-standard-route-inputs-6.json`. Visual system: maths studio kit; the kiosk and calculator plates; the dial, scatter plots and calculator screens coded and unbranded.

Owner rules applied: plates for real objects, code for diagrams, data and screens; no people, hands or faces; one main question; one stage at a time; words before symbols ("how closely the points follow a straight line" before "r"); calculator steps as coded, unbranded screens (the three things to find, not one model's keys); conversational narration; one worked example on the g01 board; two attempts with "Pause here to answer." and 10 s countdowns, the full worded question on screen; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (a beach kiosk, part-time work and marks, phones and sleep, a coffee cart); Australian spelling; no em dashes; all text above y = 950.

Syllabus content point (Mathematics Standard 11-12 (2024), Year 12, Bivariate data analysis), quoted from `../../programme/maths-standard-route-inputs-6.json`:

Standard 2:
- `ci5401622a`: "Calculate and interpret Pearson’s correlation coefficient (r) for a bivariate dataset using a scientific calculator to quantify the strength of a linear association between the two variables"

Standard 1: no matching content point.

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fadb5e412c (Standard 2)

**Boundary:** starts from b04b's final frame exactly (b04b scene 14): the kiosk plate at the left; the kiosk scatter (15 to 35°C with a break mark, 0 to 140 ice creams) with the blue line and the grey strip "y = 6x − 73"; an olive semicircular dial at the right with ticks "−1", "0", "1" and no needle; chip "how strong, as one number?"; label "Next: Pearson's correlation coefficient"; chips "Next" and "?". Recalls b02 (form, direction, strength in words), b03 (correlation is not causation) and Year 11 d13 (the calculator's statistics mode for the standard deviation) in a phrase or grey chip. Teaches: r measures how closely the points follow a straight line; −1 ≤ r ≤ 1; the sign gives the direction and the size the strength; r = 1, −1 and about 0 as pictures; one guide (from 0.8 strong, 0.5 to under 0.8 moderate, under 0.5 weak) labelled "a guide"; r from a scientific calculator (two-variable statistics mode, a table of pairs, the results screen), rounded to two decimal places; two checks (between −1 and 1; the sign matches the plot); an interpretation sentence; limits (straight-line association only: a curve can give a high r, a U shape an r near 0; one outlier can move r a lot; a large r is not cause). Stops before the least-squares line (b06).

## Decisions

- **Anchor: the kiosk on the dial (ruling 65).** r = 0.9949 → 0.99, strong positive, calculated from the five entered pairs (the point says "calculate and interpret", so every r on screen is entered at least once: the kiosk and the work hours).
- **Worked example (g01): the site's eight students (card 08):** work hours 0, 3, 5, 8, 10, 12, 15, 19; marks 89, 76, 83, 82, 74, 69, 69, 50; r = −0.8995… → −0.90, strong negative. Crossed slip "weak, because it's negative" (caption "size: strength; sign: direction").
- **One guide (MS-60):** |r| from 0.8 strong; from 0.5 to under 0.8 moderate; under 0.5 weak; always tagged "a guide, not a rule". No "very strong" band; no claim about an official HSC scale.
- **Unbranded calculator (t01b's finding: no key orders).** The narration names the three things to find (a two-variable statistics mode, sometimes called linear regression; a table of pairs; a results screen with r) and says "menus differ" once. The coded screen is overlaid on the plain calculator plate `maths/ma12-calculator-v1.png` (inspected: no brand mark). No key sequence is spoken.
- **Limits, each shown:** the coffee cart's curve (b02; r = 0.92, high but curved); a U shape (invented, r = 0 exactly); the site's explorer outlier (0.99 to 0.58); cause (b03, one sentence).
- **Simulations (standard item 3).**
  1. **Morph and dial** (scene 3; ScatterBoard r readout with `TargetDial`): the kiosk's points slide live onto a rising line (needle to 1, readout "r = 1"), flip onto a falling line (needle to −1), scatter with no pattern (needle to about 0), then drift back, the needle and a live r readout following every frame.
  2. **Outlier drag** (scene 9): the explorer's ten points (r 0.99); the point at 2 hours moves up from 45 to 95 while the needle swings and the readout falls to 0.58, the guide band under the dial switching from "strong" to "moderate".
  3. **Calculator entry** (scenes 5 and 6; StudioToolPanel STAT mode): the table fills row by row (x and y columns), then the results screen appears with its r line lit.
- **Colour roles (the strand's).** Temperature and x amber; ice creams and y teal; points ink; line blue; r, the dial, the guide bands and strength olive; answer green; mistake red, crossed slips only.
- **Large type, handwritten voice.** Current rows 52 px, supporting rows 32 px, task strips 44 px, calculator screen text 40 px (rows) and 48 px (results); nothing below 26 px; all text above y = 950. Hand tags: "how close to a straight line", "−1 to 1", "sign: direction", "size: strength", "a guide, not a rule", "menus differ", "x and y on one row", "2 decimal places", "check: −1 to 1", "check: sign matches", "curve, but high r", "U shape: r ≈ 0", "one point moved it", "plot first". At most two live at once.
- **Stage changes (standard item 2).** b04b's frame (1); r's meaning (2); the morph (3); the guide strip (4); calculator: the kiosk (5); g01 board: the work hours (6); the two checks (7); curves (8); the outlier (9); framed card (10); question cards (11 to 14); b06's frame (15); key notes (16).
- **Memory aid.** Framed card: "Sign: direction. Size: strength." Key line: "r measures straight-line fit only: plot first, and r is always between −1 and 1."
- **Visual surprise.** One point dragged and the needle swings from 0.99 to 0.58 (scene 9); the U shape, clearly related, reads r = 0 (scene 8).
- **Plain meanings at first use.** Pearson's correlation coefficient, r ("one number for how closely the points follow a straight line"); linear association ("a straight-line pattern"); coefficient ("a number that measures something"); the size of r ("r ignoring its sign").
- **Attempts (original, HSC style).** A1 (pack question 1 with new invented data so its r differs from the worked example's): six students' screen time 1 to 6 h and sleep 8.6, 8.8, 7.6, 8.2, 7.4, 7.9 h: r = −0.686… → −0.69, moderate negative; crossed "−0.68" (caption "0.686 rounds to 0.69"). A2 (pack question 2): P −0.97, Q 0.62, R 0.05; r = 0.05 does not mean "not related"; crossed "r = 0.05, so no relationship" (caption "no straight-line relationship").
- **Mistake scene:** none separate. Negative read as weak (6 crossed); r outside −1 to 1 trusted (7); "r = 0 means not related" (8, A2 crossed); "high r means linear" (8); "high r means cause" (9, said); truncating instead of rounding (A1 crossed).
- **Cause chain taught, in order:** (1) r compares the points with a straight line, so it is bounded: 1 or −1 when every point is on a line, about 0 when no line fits (2, 3); (2) the sign comes from whether y tends to rise or fall as x rises, the size from how close the points are to the line (2, 3); (3) a guide turns the size into the words of b02 (4); (4) the calculator computes r from the pairs, so each pair must be on its own row (5, 6); (5) because r is bounded and signed, two quick checks catch a misread or a mistyped value (7); (6) r only measures straight-line closeness, so a curve can fool it both ways, which is why the plot comes first (8); (7) r is built from every point, so one far point pulls it a long way (9).
- **Entry knowledge (route):** math-s12-b02 (form, direction, strength in words); math-s12-b03 (correlation is not causation); math-s11-d13 (the calculator's statistics mode for σ). Recalled in a phrase or grey chip ("b02: strong, positive, linear", "Year 11: the calculator's statistics mode").
- **Handoff (to math-s12-b06, "Least-Squares Regression: Calculator and Spreadsheet").** Scene 15's frame: the calculator plate `maths/ma12-calculator-v1.png` (about 520 px tall) at the centre-left with its coded results screen (48 px, ink on the plate's green screen): "A = −63.0862069", "B = 5.603448276", "r = 0.994856525", the r line lit (full ink, olive underline) and the A and B lines dim (30 per cent); beside it at the right, the kiosk scatter small (about 760 × 480 px) with the blue line; the dial small under the scatter, needle at 0.99; chip "what are A and B?"; label "Next: the least-squares line"; chips "Next" and "?". This is b06's opening frame.
- **Invented data (ruling 69):** every dataset, study or price in this video other than the kiosk's five days and the site's own work-hours and explorer data carries a small grey "invented data" (or "example price") tag on screen, question cards and feedback included (28 px, top right of the plot or card).
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Kiosk r = 0.9948565250 → 0.99. Least squares A = −63.0862069, B = 5.603448276 (dim on screen; b06).
  (b) Work hours r = −0.8995554458 → −0.90.
  (c) Explorer start (2, 45), (3, 52), (4, 58), (5, 65), (6, 70), (7, 78), (8, 82), (9, 88), (10, 92), (12, 95): r = 0.9856640 → 0.99; with (2, 95): r = 0.5815669 → 0.58.
  (d) Coffee cart (b02): r = 0.9177 → 0.92.
  (e) U shape (invented): x 1 to 7, y 11, 6, 3, 2, 3, 6, 11 (y = (x − 4)² + 2): r = 0 exactly.
  (f) A1 (invented): x 1, 2, 3, 4, 5, 6; y 8.6, 8.8, 7.6, 8.2, 7.4, 7.9: r = −0.686436 → −0.69.
  (g) Morph targets for the build: rising line r = 1; falling line r = −1; the "no pattern" scatter r between −0.1 and 0.1.
  (h) Pronunciations: "Pearson's"; "zero point nine nine four eight"; "minus zero point nine zero"; "minus zero point six nine".

Main question: *The kiosk's relationship is "strong". How strong, as one number, and what does Pearson's correlation coefficient measure?*
Entry knowledge (b02; b03; Year 11 d13): form, direction, strength in words; correlation is not cause; the calculator's statistics mode.
Stops after: r's meaning and range, sign and size, one guide, r by calculator, two checks, an interpretation sentence, r's limits. No least-squares line.
Handoff: math-s12-b06: "what are A and B?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): x amber; y teal; points ink; line blue; r, dial and strength olive; answer green; mistake red. Header strip "MATHEMATICS STANDARD · BIVARIATE DATA ANALYSIS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: how strong, as one number?
> Here's the kiosk's line again, beside a dial that runs from minus one to one. In words, we called this relationship strong. But how strong, exactly? Is there one number that measures how closely the points follow a straight line? There is, and it's called Pearson's correlation coefficient. So what does it **measure**?

Visual: opens on b04b's final frame exactly. On the first sentence the label and the chips "Next" and "?" fade, and the dial grows to a radius of about 260 px. On "strong" a grey chip "b02: strong, positive, linear" writes under the scatter. On "how closely" the five points pulse against the line. On "measure" heading "Pearson's correlation coefficient" writes on, and the chip "how strong, as one number?" moves to the top right as the question chip.

### 2. what r measures
> Pearson's correlation coefficient is written as a small r. A coefficient is just a number that measures something, and r measures how closely the points follow a straight line, a linear association. It's always between minus one and one. Its sign gives the direction, positive or negative. Its size, ignoring the sign, gives the strength. The closer r is to one, or to minus one, the closer the points sit to a straight **line**.

Visual: camera continue. A label writes, 44 px: "r: how closely the points follow a straight line" (hand tag "how close to a straight line"). The dial's arc brightens from −1 to 1 (hand tag "−1 to 1"). On "sign" the left half of the dial tints pale (negative) and the right half pale (positive), with "−" and "+" (hand tag "sign: direction"); on "size" two olive arrows run outward from 0 to each end (hand tag "size: strength"). On "line" both ends glow.

### 3. watch r change
> Let's watch it move. Pull every point onto a rising straight line, and r is exactly **one**. Flip them onto a falling straight line, and r is exactly minus **one**. Scatter them, with no straight-line pattern at all, and r is close to **zero**. In between, the further the points spread from a line, the closer r gets to zero.

Visual: stage change: simulation 1. The kiosk scatter large (about 1,100 × 700 px) at the left, the dial at the right with a needle and a live readout "r = …" (48 px, olive). On "one" (first bold) the points slide onto a rising line; needle and readout to "r = 1". On "one" (second bold) they flip onto a falling line; "r = −1". On "zero" they scatter evenly; the needle swings to about 0 ("r = 0.03"). On "In between" the points drift back towards the kiosk's own positions in steps, the needle climbing live, and settle (needle near 0.99, readout hidden until scene 5).

### 4. one guide for the words
> To turn r into words, we'll use one guide all the way through. Ignoring the sign, from zero point eight up to one is strong. From zero point five up to zero point eight is moderate. And below zero point five is weak. It's a guide, not a rule, but it keeps your descriptions **consistent**.

Visual: camera continue. A guide strip grows under the dial, mirrored for negative values (about 1,200 px wide, 44 px labels): "weak" from −0.5 to 0.5 (pale olive), "moderate" from 0.5 to 0.8 and −0.8 to −0.5, "strong" from 0.8 to 1 and −1 to −0.8 (deeper olive); tick labels "−1", "−0.8", "−0.5", "0", "0.5", "0.8", "1" (32 px). On "consistent" the tag "a guide, not a rule" writes above the strip (hand tag).

### 5. r on a calculator: the kiosk
> Now let's calculate it. Scientific calculators have different menus, but you're always hunting for the same three things. A two variable statistics mode, sometimes called linear regression. A table, where you type each pair on its own row, x in one column and y in the next. And a results screen that shows r. For the kiosk, type in the five pairs, eighteen and forty, twenty-two and sixty, and so on. The results screen gives r as zero point nine nine four eight, and so on. That's zero point nine nine, to two decimal **places**.

Visual: stage change: simulation 3. The calculator plate `maths/ma12-calculator-v1.png` (about 640 px tall) at the left with a coded screen; at the right a three-step strip, 44 px: "1. two-variable statistics mode", "2. a table: one pair per row", "3. the results screen: r" (hand tag "menus differ"; grey chip "Year 11: the calculator's statistics mode"). On "two variable" the screen shows a menu with one line highlighted "2-variable (x, y)"; on "table" a two-column table "x | y" fills row by row: 18 | 40, 22 | 60, 25 | 75, 28 | 90, 32 | 120 (hand tag "x and y on one row"). On "results screen" the screen switches to results; "r = 0.994856525" (48 px) lights, other lines dim. On "places" the readout rounds beside the plate, framed "r ≈ 0.99" (green; hand tag "2 decimal places"), and the dial's needle settles at 0.99 inside the "strong" band.

### 6. worked example: work and marks
> Here's a worked example. Eight Year Twelve students recorded their paid work hours in a typical week, and their mark in the same exam. Find Pearson's correlation coefficient, to two decimal places, and describe the relationship. Enter the eight pairs, each on its own row. The calculator gives minus zero point eight nine nine five, and so on, so r is minus zero point nine **zero**. The size is above zero point eight, so it's strong, and the sign is negative. There's a strong, negative, linear relationship between paid work hours and exam **marks**. Students who worked more hours tended to score lower. Calling it weak because it's negative is the slip. The sign gives the direction, and the size gives the **strength**.

Visual: clear change to the g01 board. Task strip, 44 px: "Eight Year 12 students recorded their paid work hours in a typical week (x) and their mark in the same exam (y). Find Pearson's correlation coefficient, correct to 2 decimal places, and describe the relationship." Givens card, 36 px: "Work hours: 0, 3, 5, 8, 10, 12, 15, 19" (amber) and "Exam mark: 89, 76, 83, 82, 74, 69, 69, 50" (teal). The calculator screen small at the left fills its table row by row; the scatter (about 700 × 460 px; 0 to 20 hours, 40 to 100 marks with a break mark) builds beside it. Rows, 52 px: "r = −0.8995…"; on "zero" "r ≈ −0.90" (olive). The dial's needle swings to −0.90 inside "strong" (negative side). Rows: "size 0.90: strong", "sign −: negative". On "marks" framed "strong, negative, linear relationship between paid work hours and exam mark" (green). On "slip" a red slip "weak, because it's negative" writes; on "strength" it is crossed (caption "size: strength; sign: direction").

### 7. two quick checks
> Two quick checks catch mistakes. First, r can never be outside minus one to one, so if you've written down one point one two, you've misread or mistyped something. Second, the sign must match the plot. These points fall, so r must be negative. If the plot falls but your r is positive, check what you **entered**.

Visual: camera continue. Two stamps write beside the board, 44 px: "check: −1 ≤ r ≤ 1" (on "one point one two" a red "r = 1.12" bounces off the dial's end, crossed) and "check: sign matches the plot" (the falling scatter beside "−0.90", tick) (hand tags "check: −1 to 1", "check: sign matches"). On "entered" the calculator's table pulses.

### 8. what r can't see: curves
> Now the limits. r only measures how close the points are to a straight line. Remember the coffee cart's customers, rising and then levelling off? Its r is zero point nine two, which looks strong, but the pattern is clearly a curve. And a U shaped pattern can have an r of zero, even though the variables are clearly related. So always look at the scatter plot first. A high r doesn't prove the form is **linear**.

Visual: stage change. Two plots side by side (about 860 × 560 px each). Left: the coffee cart (b02; plate `maths/ma11-coffee-cart-v1.png` small, "invented data"), its curved guide, dial readout "r = 0.92" (hand tag "curve, but high r"). Right: a U-shaped scatter of seven points ("invented data") with a curved guide and a dial readout "r = 0" (hand tag "U shape: r ≈ 0"). On "linear" a caption, 40 px: "plot first: r only measures straight-line fit" (hand tag "plot first").

### 9. one point can move r a lot
> One point can also move r a long way. Here are ten students' study hours and exam scores, and r is zero point nine nine. Now move just one point, the student who studied two hours, from forty-five up to ninety-five. The needle swings down to zero point five eight, which is only moderate. One unusual point changed the whole **description**. And remember, even a large r doesn't show that one thing causes the **other**.

Visual: stage change: simulation 2. A scatter of ten points (about 1,100 × 680 px; "study hours" amber 0 to 13, "exam score" teal 40 to 100 with a break mark), the dial beside it reading "r = 0.99" in "strong". On "from forty-five" the point at (2, 45) rises live to (2, 95) with a grey trail; the needle swings and the readout falls to "r = 0.58", the guide band switching to "moderate" (hand tag "one point moved it"). On "description" the moved point rings grey. On "other" grey chip "b03: correlation isn't cause".

### 10. memory aid
> Here's the summary. The sign is the direction, the size is the strength, and r only measures straight-line **patterns**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the dial with its guide strip, needle at 0.99. Main line, hand font 56 px: "Sign: direction. Size: strength." On "patterns" the key line, 40 px: "r measures straight-line fit only: plot first, and r is always between −1 and 1." Hold about 2 s.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. Six students recorded their daily phone screen time and their sleep the following night. Here's the table. Use your calculator to find Pearson's correlation coefficient, correct to two decimal places. Then describe the strength and direction of the relationship in context. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Six students recorded their daily phone screen time and their sleep the following night." Table, 40 px: "Screen time (h): 1, 2, 3, 4, 5, 6" and "Sleep (h): 8.6, 8.8, 7.6, 8.2, 7.4, 7.9". "(a) Use your calculator to find Pearson's correlation coefficient, correct to 2 decimal places. (b) Describe the strength and direction of the relationship in context." Picture slot: the phone plate `maths/ma12-phone-v1.png` (about 240 px tall) with a blank coded clock face on its screen (no numbers). Countdown ring shown full from "Pause here to answer.", then 10 s.

### 12. feedback 1 (brief)
> The calculator gives minus zero point six eight six, and so on, so r is minus zero point six **nine**. Its size is between zero point five and zero point eight, so it's moderate, and the sign is negative. Students with more screen time tended to sleep a bit **less**. Writing minus zero point six eight is the slip. Zero point six eight six rounds up, to zero point six **nine**.

Visual: the card shrinks to the top (30 px). The calculator screen small: "r = −0.6864364…"; on "nine" (first bold) framed "(a) r ≈ −0.69" (green); the dial's needle settles in "moderate" (negative side). On "less" framed "(b) moderate, negative, linear: more screen time, a bit less sleep" (green). On "slip" a red slip "r = −0.68" writes; on "nine" (second bold) it is crossed (caption "0.686 rounds to 0.69"). Hold about 1 s.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. Match each description to one of these values of r, zero point six two, minus zero point nine seven, and zero point zero five. P, the points fall steeply and lie almost on a straight line. Q, the points rise, with noticeable scatter around a line. R, the points form a U shape. Then, a student says that because r is zero point zero five for R, the two variables aren't related. Explain why that's not correct. Pause here to answer.

Visual: `QuestionCard`, 40 px: "(a) Match each description to one of r = 0.62, r = −0.97, r = 0.05. P: the points fall steeply and lie almost on a straight line. Q: the points rise, with noticeable scatter around a line. R: the points form a U shape. (b) A student says that because r = 0.05 for R, the two variables are not related. Explain why this is not correct." No picture (drawing the plots would answer it). Countdown ring shown full from "Pause here to answer.", then 10 s.

### 14. feedback 2 (brief)
> P is minus zero point nine seven, falling and almost on a line. Q is zero point six two, rising with **scatter**. R is zero point zero five. A U shape is a clear relationship, but it isn't a straight line, so r is close to zero. Saying r is zero point zero five, so there's no relationship, is the slip. It's no straight-line **relationship**.

Visual: the card shrinks to the top. Three small plots draw (about 500 × 360 px each) with dial readouts; on "scatter" framed "(a) P: −0.97; Q: 0.62; R: 0.05" (green). R's curved guide draws through its U. Framed "(b) r measures straight-line fit; a U shape is related, just not linearly" (green). On "slip" a red slip "r = 0.05, so no relationship" writes; on "relationship" it is crossed (caption "no straight-line relationship"). Hold about 1 s.

### 15. handoff: A and B
> Back on the kiosk's results screen, r isn't alone. There are two more lines, A and B. Together, they describe a line, one that everyone gets exactly the same. So what are A and B? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame (exactly as under Decisions, "Handoff"): the calculator plate and its results screen, the r line lit; on "A and B" the dim A and B lines pulse once and stay dim; the kiosk scatter small at the right with its line, the dial below at 0.99. On "next" chip "what are A and B?", label "Next: the least-squares line" and chips "Next" and "?". Hold about 2 s. This is b06's opening frame; scene 16 returns to it silently after the notes.

### 16. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- r: how closely the points follow a straight line; −1 ≤ r ≤ 1.
- Sign = direction. Size = strength.
- Guide: size 0.8 to 1 strong; 0.5 to under 0.8 moderate; under 0.5 weak.
- Calculator: 2-variable stats mode, one pair per row, read r (2 d.p.).
- Limits: straight lines only; outliers move it; not cause.

Memory aid (framed card, right side, as in scene 10): *Sign: direction. Size: strength.* Key: *r measures straight-line fit only: plot first, and r is always between −1 and 1.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 15's frame exactly. This is the final frame and b06's opening frame.

## Teaching checks

- **Does it explain causes?** Why r is bounded: it compares the points with a perfect line (2, 3). Why the sign is direction: rising or falling (2). Why size is strength: closeness to the line, shown by the morph (3). Why one pair per row: the calculator pairs each x with its y (5). Why the checks work: r is bounded and its sign must match the plot (7). Why a curve can have a high r and a U an r of 0: r only measures straight-line fit (8). Why one point moves r: every point counts (9).
- **Misconceptions addressed:** negative read as weak (6 crossed); r outside −1 to 1 trusted (7); r = 0 as "not related" (8, A2 crossed); high r as linear (8); high r as cause (9); truncating (A1 crossed); the one-variable mode (5, said: "two variable").
- **Visual standard, item by item:** 1 the painted kiosk from the first frame, the calculator, coffee cart and phone; 2 a new stage every 25 to 60 s; 3 the morph driving the needle, the outlier drag, the table filling; 4 fixed roles (r olive); 5 large type; 6 hand tags; 7 g01 board in 6; 8 framed card and five bullets; 9 the needle swinging from one point.
- **One idea at a time:** meaning (2), pictures (3), words (4), calculating (5, 6), checks (7), limits (8, 9).
- **Response opportunity:** two unseen HSC-style tasks with every demand and given visible; 10 s each; feedback about 28 s and 25 s.
- **Avoided double teaching:** b02's words and b03's cause are grey chips; Year 11's statistics mode is a grey chip.
- **Standard 1 path:** not applicable (Standard 2 only).
- **Syllabus coverage:** `ci5401622a`: "Calculate ... using a scientific calculator" (5, 6, A1), "interpret" (4, 6, A1, A2), "to quantify the strength of a linear association" (2 to 4, 8, 9); key notes 1 to 5.
- **Out of scope by design:** the least-squares line (b06); formulas for r (beyond the point).

## Practice questions and model answers

**Attempt 1 (scene 11; pack question 1 with new invented data, original, HSC style, 2 marks suggested, not an official marking scheme).** "Six students recorded their daily phone screen time and their sleep the following night. Screen time (h): 1, 2, 3, 4, 5, 6. Sleep (h): 8.6, 8.8, 7.6, 8.2, 7.4, 7.9. (a) Use your calculator to find Pearson's correlation coefficient, correct to 2 decimal places. (b) Describe the strength and direction of the relationship in context."
Model answer: (a) r = −0.69 (−0.6864…). (b) A moderate negative linear relationship: students with more screen time tended to sleep a little less. Classic mistake (crossed): "r = −0.68".

**Attempt 2 (scene 13; pack question 2, original, HSC style, 3 marks suggested).** "(a) Match each description to one of r = 0.62, r = −0.97, r = 0.05. P: the points fall steeply and lie almost on a straight line. Q: the points rise, with noticeable scatter around a line. R: the points form a U shape. (b) A student says that because r = 0.05 for R, the two variables are not related. Explain why this is not correct."
Model answer: (a) P: −0.97; Q: 0.62; R: 0.05. (b) r only measures how well the points fit a straight line; a U shape is a clear relationship that is not linear, so r is near 0 even though the variables are related. Classic mistake (crossed): "r = 0.05, so no relationship".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Guide | 0.8, 0.5 | 4, 6, 12, 16 |
| Kiosk | r = 0.994856525 → 0.99; A and B dim | 5, 15 |
| Work hours | r = −0.8995… → −0.90 | 6, 7 |
| Coffee cart | r = 0.92 | 8 |
| U shape | r = 0 | 8 |
| Explorer | 0.99 → 0.58; (2, 45) to (2, 95) | 9 |
| A1 | r = −0.686… → −0.69 | 11, 12 |
| A2 | 0.62, −0.97, 0.05 | 13, 14 |
| Morph | r = 1, −1, about 0.03 | 3 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with Python `statistics.correlation` and exact fractions (19 Nov 2026, scratchpad `b/verify.py`, run with `python -I`); Codex to re-check.

- Kiosk r = 0.9948565250; least squares a = −3659/58 = −63.0862069, b = 325/58 = 5.603448276.
- Work hours r = −0.8995554458.
- Explorer r = 0.9856640227; with (2, 95), 0.5815669285.
- Coffee cart r = 0.9177004236.
- U shape x 1 to 7, y 11, 6, 3, 2, 3, 6, 11: r = 0.
- A1 r = −0.6864364 (from x 1 to 6, y 8.6, 8.8, 7.6, 8.2, 7.4, 7.9).

## Memory aid check

- **"Sign: direction. Size: strength."** with key line **"r measures straight-line fit only: plot first, and r is always between −1 and 1."** From the site's card 02 ("Sign gives direction; magnitude gives strength") and card 07 ("r only measures linear relationships"). Meaning, as said in scenes 2, 3, 7, 8 and 10. Assumptions checked: "size" means r ignoring its sign (scene 2, "ignoring the sign"); strength words come from one guide (scene 4), not an official scale; "straight-line fit only" covers both curve cases (scene 8). It helps a new case: r = −0.55 is moderate and negative, and the plot is checked for a curve before the words are written.
- **Considered, not used:** "Close to 1 is good" (r is not "good" or "bad", and it ignores negative values).

## Narration length estimate

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; scratchpad `b/count.py`, which reproduces e08's 5,632): **5,542 characters**, 16 scene headings. Characters per scene (1 to 16): 315, 425, 314, 285, 527, 713, 309, 409, 412, 116, 306, 367, 442, 335, 192, 75.

At 13.3 characters per second the speech is about 417 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the morph (3), the table filling (5, 6), the plots (8), the drag (9) and the drawn feedback plots (14) about 36 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 518 s**, under the 570 s cap. Feedback speech: about 28 s and 25 s.

Reserve trims if the voiced take runs long: scene 7 can shrink to "Two quick checks: r is never outside minus one to one, and its sign must match the plot." (about 8 s); scene 2's coefficient sentence (about 4 s); scene 9's last sentence (about 5 s; the grey chip stays).

## Scene list and build ids

Lesson key `m-s12b05` (route math-s12-b05). Explainer folder `src/explainer/lessons/math-s12-b05`; build inputs in `docs/production/claude-pm/lessons/math-s12-b05/` (at voicing).

In order (16 scene headings): hook-dial, what-r-measures, watch-r-change, one-guide, calculator-kiosk, worked-work-hours, two-checks, curves, outlier-drag, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff-b06, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 25 s | 1 | b04b's frame; the dial |
| 25 to 60 s | 2 | What r measures |
| 60 to 90 s | 3 | The morph |
| 90 to 110 s | 4 | The guide strip |
| 110 to 160 s | 5 | Calculator: the kiosk |
| 160 to 225 s | 6 | g01 board: work hours |
| 225 to 245 s | 7 | Two checks |
| 245 to 285 s | 8 | Curves |
| 285 to 320 s | 9 | The outlier drag |
| 320 to 335 s | 10 | Framed memory card |
| 335 to 450 s | 11 to 14 | Question cards and countdowns, then feedback |
| 450 to 470 s | 15 | b06's frame |
| 470 to 516 s | 16 | Key notes, then a silent return to scene 15's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: b04b's last frame continues into 1; 1 to 2 camera continue; 2 to 3 stage change; 3 to 4 camera continue; 4 to 5 stage change; 5 to 6 clear change to the board; 6 to 7 camera continue; 7 to 8 stage change; 8 to 9 stage change; 9 to 10 stage change; attempts and feedback: the card shrinks to the top; 14 to 15 board clear; 15 to 16 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-b05-learning-review.md`, `science_check` = `checks/m-s12-b05-maths-check.md`.

## Assets

Inspected before choosing (19 Nov 2026, opened at full size): `maths/ma12-calculator-v1.png` (a plain dark scientific calculator, 946 × 1690, a blank green screen, unlabelled keys, no brand mark; the screen area takes a coded overlay; reads at 520 to 640 px tall). `maths/ma11-coffee-cart-v1.png` and `maths/ma12-phone-v1.png` (as b02). `ms12-beach-kiosk-v1.png` (t05's brief with b01's addendum).

Coded: the dial and needle, guide strip, scatter plots, morph, drag, the calculator's menu, table and results screens, stamps, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `DrawnMark`, `StudioPlot`, `TargetDial`, `LiveReadoutBoard`, `StudioToolPanel`, ScatterBoard (b01 to b04b), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row b05): ScatterBoard **live r readout** recomputed every frame from the moving points (morph to a line, flip, scatter, drag one point), driving `TargetDial`'s needle; a **mirrored guide strip** under the dial (bands at 0.5 and 0.8 each side); **StudioToolPanel STAT mode** (unbranded): a mode menu, a two-column table filling row by row, and a results screen with A, B and r lines that can each be lit or dimmed, fitted to the calculator plate's screen area. Check: the kiosk reads 0.994856525; the explorer drag reads 0.9857 then 0.5816.

## Codex asset brief (Maths S12 B05)

No new plate. Codex measures the screen area of `maths/ma12-calculator-v1.png` (the green rectangle) in plate pixels so the coded results screen fits it with 40 to 48 px text at 520 to 640 px plate height, and reports any brand mark (none seen on 19 Nov 2026). Append the check to `status.md`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quote matches the route-inputs JSON exactly (including the curly apostrophe in "Pearson’s") and is labelled Standard 2 only.
3. Confirm one strength guide only (0.5 and 0.8), always tagged "a guide, not a rule"; no "very strong"; no claim about an HSC scale; no r for a categorical variable (MS-60).
4. Confirm the calculator is unbranded, no key sequence is spoken or shown, and both attempts carry every demand and given with no answer on the card.
5. Confirm scene 1 opens on b04b's final frame exactly, and scene 15's frame matches b06 scene 1's opening.
6. Confirm no em dash (U+2014), Australian spelling, the narration count, no digits in narration, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Pearson's Correlation Coefficient r | Year 12 Maths Standard

(Title length: 60 characters by script.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/bivariate-data-analysis/lesson06.sa.html

How strong is a relationship, as one number? Pearson's correlation coefficient, r, measures how closely the points on a scatter plot follow a straight line. Learn what r's sign and size tell you, see r move from 1 to −1 to 0 as the points change, use one simple guide for strong, moderate and weak, and find r on a scientific calculator (whatever its menus). Then check your answer, and see r's limits: curves, a single outlier, and why a large r still doesn't show cause. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Bivariate data analysis. For Standard 2.
Syllabus content, Standard 2 (NSW Mathematics Standard 11-12, 2024):
"Calculate and interpret Pearson’s correlation coefficient (r) for a bivariate dataset using a scientific calculator to quantify the strength of a linear association between the two variables"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fadb5e412c

Builds on: Line of Best Fit: Gradient, Intercept and Equation, and Correlation vs Causation. Next: Least-Squares Regression: Calculator and Spreadsheet.

#Year12Maths #MathsStandard #Correlation #HSCScience

## Open decisions

- **1. A1's data (root).** The pack's six-student data give r = −0.90, the same as the worked example; the new invented data give −0.69 (moderate), so the attempt practises a different band and a rounding decision.
- **2. Guide boundaries (root).** 0.8 and 0.5 (the site's card 05 table, simplified to three words); labelled a guide. If root prefers four bands, scenes 4 and 16 change.

## Review notes

- Revision 1. Next: student learning review (trace from b04b; check that r's meaning is said before the symbol, that the morph makes sign and size visible, that the calculator is followable without one model's keys, that the checks and limits are each shown, that both cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
