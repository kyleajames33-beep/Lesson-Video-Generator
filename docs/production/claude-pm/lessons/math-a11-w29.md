# Maths A11 W29: Where does a function break, and what makes it continuous? Continuity without lifting the pen, discontinuities as jumps, holes and asymptotes, and testing a join (design)

Status: Revision 1 (16 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`, the d01 Revision 6 pattern) and the accepted w01 to w14 designs (`../checks/root-acceptance-maths-a11-w01-w14.md`). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,613 characters by script (build parser rules), 14 scene headings, about 515 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: twenty-ninth video of Year 11 Mathematics Advanced (2024), outline order 29, Working with functions. Pre-design pack: `../pre-design/maths-a11/math-a11-w29.md` (brief 243). Site lesson (read through the pack's quotations, read only): `working-with-functions/lesson12.sa.html` (Continuity and Discontinuity, SHA256 `4d3b5298151fb7304c1daccb9e2c0c9693d54d779e7d242fd174c43f442d550f`; `we-1`, `we-2`, `we-3` used with the site's numbers unchanged, and the short-answer join "x² and ax + 1 meet at x = 3 when a = 8/3"). No logged S11 item applies. Route entry: `math-a11-w29` in `../../programme/maths-a11-route-inputs-2.json`. Visual system: maths studio kit; a painted coin dryer (prefix `ma11-`); graphs, the pen trace, the join slider and algebra coded.

Owner rules applied: as w24 (2024 syllabus, plates for real objects and code for diagrams, no people or hands (the pen is a coded outline), one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, an everyday anchor (home and money), Australian spelling, no em dashes, conversational narration).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Working with functions, Piecewise-defined functions; NESA codenames, official `code` field empty), quoted from `../../programme/maths-a11-route-inputs-2.json`:

- `ci903515d1`: "Define informally that a function is continuous at a point if the curve can be drawn through the point without lifting the pen off the paper"
- `ci1486e4cc`: "Identify points where piecewise-defined functions and other functions are not continuous"
- `ci91b5bbaa`: "Define a discontinuity of a function informally as a point where the function is not continuous"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

**Boundary:** starts from w28's handoff frame (the e-bike's joined graph with a pen badge tracing it in one stroke, the coin dryer and its staircase cost graph, "Next: can you draw it without lifting your pen?"). Teaches: continuity at a point as drawing through it without lifting the pen (`ci903515d1`); a discontinuity as a point where the function is not continuous (`ci91b5bbaa`); jumps (the dryer, site `we-2`), holes (site `we-1`) and vertical asymptotes (site `we-3`, y = 1/x from w21) in piecewise and other functions (`ci1486e4cc`); a jump is not a missing value; y = 1/x is continuous on its domain with a discontinuity at 0 (pack note, both statements together); choosing a constant to close a join. Stops at the informal definition. Not taught: limits or one-sided limit notation (the narration says "heads towards" and "arrives at"); continuity on intervals or differentiability (d15 in Year 12); the words "removable" and "infinite discontinuity" are used once each as names only.

## Decisions

### Revision 1 (16 Nov 2026)

- **Anchor: a laundromat coin dryer (painted plate, live).** The dryer charges $2 for each 10 minutes or part of 10 minutes, so its cost graph is a staircase: $2 for 0 < t ≤ 10, $4 for 10 < t ≤ 20, $6 for 20 < t ≤ 30. At 10 and 20 minutes the price jumps, and a pen tracing the graph must lift. Right after w28's e-bike, whose pieces meet, it makes "continuous" and "not continuous" a felt contrast. Home and money. No Year 12 Maths design and no w01 to w14 design uses a dryer, laundromat or washing machine (grep, 16 Nov); no w15 to w23 pack suggests one. The pack's parcel postage was rejected (Year 12's s05 anchor is a parcel), its toll gantry kept travel three videos running (w28 e-bike, w30 rail trail), and its bus route is close to Year 12's s07 bus. Year 12's d15 skateboard teaches smooth joins (differentiability), a different idea from lifting the pen.
- **Model (author note).** Cost C(t) = 2⌈t/10⌉ dollars for 0 < t ≤ 30 (a 30-minute maximum per load in this model): C(10) = 2, C(10.5) = 4, C(20) = 4, C(25) = 6. The function is defined at 10 and 20 (closed circles on the right ends of the steps).
- **Simulations (standard item 3).**
  1. **`PenTrace`** (scenes 1 to 3, 13 badge; new part): a coded pen outline (no hand) traces a graph from left to right; at each discontinuity it lifts in a small arc, a "pen lifts" counter increments, and a label drops ("jump", "hole", "asymptote"), classified by the part from the function (unequal one-sided values: jump; undefined with equal finite neighbours: hole; unbounded: asymptote). Between breaks the stroke is unbroken.
  2. **`JoinSlider`** (scene 7, new part on `ParameterSlider`): the constant a in the second piece of a piecewise function slides; the second piece redraws live, a readout "gap at x = 3" (teal) shows |3a + 1 − 9| and closes to 0 at a = 8/3 ≈ 2.67, where the pen trace runs through without a lift.
  3. **The punched hole** (scene 5): the cancelled factor strikes out in both numerator and denominator, the line y = x + 3 draws, and a small open circle punches out at (3, 6), its height computed from the simplified rule.
- **Colour roles (fixed for the whole video).** Inputs **blue**; outputs and the dryer's steps **teal** (root ruling 12); in piecewise examples the **first piece amber** and the **second violet** (as w28); the pen and its trace ink, with break labels in the hand font; the cancelled factor amber with a strike; asymptotes dashed grey; answer **green**; mistake **red**, crossed slips only.
- **Large type, handwritten voice.** As w24. Hand tags: "pen lifts", "jump", "still defined at 10", "pieces don't meet", "hole", "asymptote", "breaks hide here", "heads to 3", "gives 6", "defined isn't enough", "still not allowed", "nothing cancels", "two roots", "gap closes".
- **Stage changes (standard item 2).** The dryer and its staircase (1, 2); three small break panels (3); three g01 boards (4 to 6); the join slider (7); the framed card (8); question cards (9 to 12); the rail trail handoff (13); key notes (14).
- **Worked examples (g01 layout).** 4: site `we-2` (crossed "f(2) = 6 is defined, so continuous"). 5: site `we-1` (crossed "y = x + 3, no break"). 6: site `we-3` (crossed "asymptote at x = 2 only"). Scene 7 is a coded slider board on the site's short-answer join.
- **Memory aid.** Framed card: "Pen up means a break." Key: "Check joins and zero denominators. Pieces don't meet: jump. Factor cancels: hole. Doesn't cancel: asymptote." Badge: the pen lifting over the dryer's step.
- **Visual surprise.** The join slider's gap shrinks as a moves, and at a = 8/3 the pen runs straight through the join that a moment ago made it lift.
- **Site notes applied (pack section 8).** Examples stay with polynomials, k/x, rational functions and piecewise rules (sine, cosine and exponentials come later). y = 1/x is described as "continuous everywhere in its domain, with a discontinuity at x = 0", both statements together.
- **Plain meanings at first use.** Continuous at a point ("you can draw the curve through it without lifting your pen"); discontinuity ("a point where the function isn't continuous"); jump ("two pieces at different heights"); hole ("one missing point"); vertical asymptote ("a line the curve runs up or down beside, towards infinity", recalled from w21); "heads towards" ("the value a piece gets closer and closer to as x approaches the join").
- **Attempts (pack questions, original).** A1: (x² + x − 6)/(x² − 4): hole at (2, 5/4), asymptote x = −2; crossed "asymptotes at x = 2 and x = −2". A2: kx − 1 (x < 2), x² + 1 (x ≥ 2): k = 3; crossed "k = 5/2" (the + 1 dropped).
- **Mistake scene:** none separate. "Defined, so continuous" (4 crossed); a jump read as undefined (2, positively); a hole forgotten after cancelling (5 crossed); every zero denominator called an asymptote (A1 crossed); a missed root of the denominator (6 crossed); a dropped term at the join (A2 crossed); "1/x is not continuous" without naming the point (3, positively).
- **Cause chain taught, in order:** (1) drawing without lifting the pen means the curve passes through the point with nothing missing and no gap (2); (2) a jump happens when two pieces arrive at different heights, even if the function is defined at the join (2, 4); (3) a zero denominator makes a function undefined there, so it cannot be continuous there (5, 6); (4) if the zero factor cancels, the rest of the graph closes up to a single missing point, a hole; if it does not, the values grow without bound, an asymptote (5, 6); (5) a join is continuous when the pieces arrive at the same height, which fixes a constant (7, A2).
- **Entry knowledge (route):** w28 (piecewise graphs with open and closed circles); w21 (vertical asymptotes of y = k/x); w02 (factorising and cancelling algebraic fractions).
- **Handoff (to w30, "Why is absolute value a distance, and why does it need two cases?").** Scene 13: the rail trail plate (`ma11-rail-trail-v1.png`, painted under w30's brief) across the frame with a coded number line along the trail (−5 to 5 km, 0 at the old station), two markers at −3 ("3 km west") and 3 ("3 km east"), teal distance bars back to 0 both labelled "3 km"; chips "Next: a distance that ignores direction" and "?". This is w30's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Dryer: C(t) = 2⌈t/10⌉, 0 < t ≤ 30.
  (b) we-2: x + 1 heads to 3 as x → 2⁻; 3x gives 6 at x = 2; jump of 3.
  (c) we-1: (x² − 9)/(x − 3) = x + 3 for x ≠ 3; hole (3, 6).
  (d) we-3: 2/(x² − 4): x = ±2, no cancellation, vertical asymptotes.
  (e) Join: x² (x ≤ 3), ax + 1 (x > 3): 3a + 1 = 9, a = 8/3 ≈ 2.667.
  (f) A1: (x + 3)(x − 2)/((x − 2)(x + 2)) = (x + 3)/(x + 2), x ≠ 2; hole (2, 5/4); asymptote x = −2.
  (g) A2: 2k − 1 = 2² + 1 = 5, k = 3; slip 2k − 1 = 4 gives k = 5/2.
  (h) "Heads towards" is the informal word for the one-sided limit; no limit notation is shown.
  (i) Pronunciations: "x squared minus nine, over x minus three"; "two, over x squared minus four"; "eight thirds"; "five quarters".
  (j) Windows: dryer plot t 0 to 35, cost 0 to 8; break panels −4 to 4; worked plots −4 to 6 by −2 to 10 (we-1), −4 to 4 by −8 to 8 (we-3); join plot 0 to 5 by 0 to 16.

Main question: *A dryer charges $2 for each 10 minutes or part of 10 minutes. At 10 minutes the price jumps and the pen must lift. Where does a function break, and what makes it continuous?*
Entry knowledge (w28, w21, w02): piecewise graphs with open and closed circles; vertical asymptotes; factorising and cancelling.
Stops after: the informal definitions of continuity and a discontinuity, jumps, holes and asymptotes in piecewise and other functions, and closing a join with a constant. No limits.
Handoff: math-a11-w30: "3 km west and 3 km east: a distance that ignores direction"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): inputs blue; outputs and the dryer's steps teal; first piece amber, second violet; the pen ink; cancelled factor amber with a strike; asymptotes dashed grey; answer green; mistake red, crossed slips only. Header strip "MATHEMATICS ADVANCED · WORKING WITH FUNCTIONS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: can you draw it without lifting your pen?
> The e-bike's graph joins up at twenty minutes, so you can draw it in one stroke. Now the dryer. It charges two dollars for each ten minutes, or part of ten minutes. Up to ten minutes costs two dollars. But ten and a half minutes costs **four**. So at ten minutes, the price jumps straight from two dollars to four. To draw that graph, you'd have to lift your pen at ten, and again at **twenty**. So where does a function break, and what makes it continuous?

Visual: opens on w28's final frame exactly (the e-bike graph small at the top left with its pen badge, the dryer `ma11-coin-dryer-v1.png` and its staircase graph, "Next: can you draw it without lifting your pen?"). On the first sentence the pen re-traces the e-bike graph in one stroke (tag "no lift"), then the e-bike graph shrinks to a 260 px badge and fades the "Next" chip; the heading writes: "Where does a function break?". The dryer (about 520 px tall) at the left; its cost graph grows to about 1,000 × 640 px at the right (t 0 to 35, cost 0 to 8, teal steps). A blue time marker slides along the t axis: at 4 min the readout "$2" (teal); on "four" it passes 10 to 10.5 and the readout flips to "$4", the step at 10 pulsing. On "twenty" `PenTrace` runs along the steps: it lifts at 10 and at 20 (counter "pen lifts: 2"), hand tag "pen lifts". The chip "Where does it break?" moves to the top right.

### 2. continuous, and a discontinuity
> Here's the informal idea. A function is continuous at a point if you can draw its curve through that point without lifting your pen off the paper. If you can't, the function isn't continuous there, and that point is called a discontinuity. Trace the dryer's graph. The pen runs flat along the first step, and at ten it has to **lift**. That's a discontinuity, called a jump, because the graph jumps from one height to another. Notice the dryer is still defined at exactly ten minutes. It costs two dollars. A jump doesn't mean a missing value. It means the pieces don't **meet**. Between the jumps, the pen moves smoothly, so the function is continuous at every other time.

Visual: camera continue on the staircase graph (now 1,200 × 700 px, the dryer as a 280 px badge at the top left). Definition chips, 44 px: "continuous at a point: draw through it without lifting the pen" and "discontinuity: a point where it isn't continuous". `PenTrace` restarts: on "lift" it lifts at t = 10, label "jump" drops, hand tag "pen lifts". On "still defined at exactly ten" the closed circle at (10, 2) rings, tag "C(10) = $2: still defined"; the open circle at (10, 4) rings, tag "just after: $4". On "meet" a short red-pencil vertical bracket between the two heights, hand tag "pieces don't meet". On "every other time" the pen runs on and the flat parts glow briefly, chip "continuous everywhere else" (green outline, not an answer frame).

### 3. three ways a graph can break
> There are three common ways a graph can break. The first is a jump, like the dryer, where two pieces don't meet. The second is a hole, where a single point is missing, and the pen has to hop over **it**. The third is a vertical asymptote, like y equals one over x at zero. The curve runs off towards infinity on each side, and the pen can't follow **it**. Lines, parabolas and cubics never break. y equals one over x is continuous everywhere in its domain, but it has a discontinuity at x equals **zero**, where it isn't defined. So breaks hide in two places, at the joins of piecewise functions, and where a denominator is zero.

Visual: clear change to three panels side by side (each 560 × 520 px, −4 to 4), each with its own `PenTrace`. Panel 1 "jump": a two-piece step (the dryer's step at 10, rescaled), the pen lifts, label "jump". Panel 2: a line with a punched hole at one point; on "it" (first) the pen hops over it, label "hole". Panel 3: y = 1/x with the y axis dashed grey; on "it" (second) the pen runs up the left branch towards the top edge, lifts, comes down from the far bottom of the right branch, label "asymptote". On "Lines, parabolas and cubics never break" three tiny curves (line, parabola, cubic) traced in one stroke each, tag "no breaks". On "zero" panel 3's x = 0 rings, tags "continuous on its domain" and "discontinuity at x = 0". On the last sentence a chip writes across the bottom, 44 px: "Breaks hide at: joins · zero denominators", hand tag "breaks hide here".

### 4. worked example 1: a piecewise join
> Let's practise. Determine whether f is continuous at x equals two, where f of x is x plus one if x is less than two, and three x if x is at least two. Check where each piece arrives at the join. The first piece heads towards two plus one, which is **three**. The second piece gives three times two, which is **six**. Three isn't six, so the pieces don't meet. There's a jump at x equals two, and f isn't continuous **there**. Saying it's continuous because f of two is defined, it's six, is the slip. Defined isn't enough. The pieces have to **meet**.

Visual: clear change to the g01 board (site `we-2`). Task strip, 44 px: "Determine whether f is continuous at x = 2." Givens card: the brace "f(x) = { x + 1, x < 2 (amber); 3x, x ≥ 2 (violet) }". Plot at the right (−1 to 4 by 0 to 12). Rows, 52 px: on "three" "first piece heads to 2 + 1 = 3" with the amber line arriving at an open circle (2, 3), hand tag "heads to 3"; on "six" "second piece: 3(2) = 6" with a closed violet circle at (2, 6), hand tag "gives 6". Row "3 ≠ 6". On "there" framed answer (green): "jump at x = 2: not continuous", and the pen lifts at the join. On "meet" a red slip "f(2) = 6 is defined, so continuous" writes and is crossed, caption "defined isn't enough".

### 5. worked example 2: a hole
> Next, state where y equals x squared minus nine, over x minus three, is discontinuous. The denominator is zero at x equals three, so the function isn't defined there, and it can't be continuous **there**. Now factorise. x squared minus nine is x minus three, times x plus three. The x minus three cancels, so everywhere else, y is just x plus **three**. The graph is the line y equals x plus three, with a hole at x equals three. The hole's height comes from the simplified rule, three plus three, so the hole is at three, **six**. Drawing the full line, with no gap, is the slip. x equals three is still not **allowed**.

Visual: clear change to the g01 board (site `we-1`). Task strip: "State where y = (x² − 9)/(x − 3) is discontinuous, and the type of discontinuity." Rows, 52 px: "x − 3 = 0 at x = 3: undefined"; on "there" the blue x = 3 rings. "y = (x − 3)(x + 3)/(x − 3)" with the two (x − 3) factors boxed amber and struck through; on "three" (plus three) "= x + 3, x ≠ 3". Plot at the right (−4 to 6 by −2 to 10): the line draws; on "six" a small open circle punches out at (3, 6), the row "hole at (3, 6)", hand tag "hole", and the pen hops over it. Framed answer (green): "hole at (3, 6) (a removable discontinuity)". On "allowed" a red slip "y = x + 3, no break" with a full unbroken line writes and is crossed, caption "x = 3 still not allowed".

### 6. worked example 3: asymptotes
> Now identify and classify every discontinuity of y equals two, over x squared minus four. The denominator is zero when x squared is four, so at x equals two, and at x equals minus **two**. The top is just two, so nothing cancels. No cancelling means no hole. Close to two, the bottom is tiny, so two divided by it is huge. The curve runs off towards infinity at both, so there are vertical asymptotes at x equals two and x equals minus two. These are infinite **discontinuities**. Finding only x equals two is the slip. x squared equals four has two **roots**.

Visual: clear change to the g01 board (site `we-3`). Task strip: "Identify and classify every discontinuity of y = 2/(x² − 4)." Rows, 52 px: "x² − 4 = 0"; on "two" "x = 2 or x = −2" (blue). Row "numerator 2: nothing cancels", hand tag "nothing cancels"; on "Close to two" a grey row "x = 2.01: x² − 4 = 0.0401, y ≈ 49.9" (44 px). Plot at the right (−4 to 4 by −8 to 8): dashed grey lines at x = −2 and x = 2; the curve's three branches draw, running up and down beside them; the pen lifts twice. On "discontinuities" framed answer (green): "vertical asymptotes at x = −2 and x = 2 (infinite discontinuities)". On "roots" a red slip "asymptote at x = 2 only" writes and is crossed, caption "x² = 4: two roots".

### 7. closing a join
> Sometimes you get to choose a constant to close a jump. f of x is x squared, if x is at most three, and a x plus one, if x is greater than three. What value of a makes f continuous at three? The first piece reaches three squared, which is nine. The second piece heads to three a plus one. Slide a, and watch the gap **close**. The pieces meet when three a plus one equals nine, so three a is eight, and a is eight **thirds**. Check it. With a equals eight thirds, the second piece arrives at eight plus one, which is nine. With that value, you can draw the whole graph without lifting your **pen**.

Visual: stage change to `JoinSlider`: a plot (0 to 5 by 0 to 16, 1,100 × 720 px) with the amber piece x² up to a closed circle at (3, 9) and the violet line ax + 1 starting from an open circle above x = 3. The brace at the top, 44 px, with "a" amber-dashed (the unknown). A slider "a" (blue track) at 1.5: readout "gap at x = 3: |3a + 1 − 9| = 3.50". On "close" the slider moves from 1.5 to 3.5 and back; the violet line swings and the gap readout falls and rises. Rows, 52 px: "x²: 3² = 9", "ax + 1 → 3a + 1", "3a + 1 = 9"; on "thirds" "a = 8/3 ≈ 2.67" (green frame), and the slider settles at 8/3 with "gap 0.00", hand tag "gap closes". On "pen" `PenTrace` runs through x = 3 without lifting.

### 8. memory aid
> Here's the test in one line. Pen up means a break. Look for breaks at joins, and at zero denominators. If the pieces don't meet, it's a jump. If a factor cancels, it's a hole. If it doesn't cancel, it's an **asymptote**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the pen lifting over the dryer's step at 10. Main line, hand font 60 px: "Pen up means a break." On "asymptote" the key lines, 36 px: "Check joins and zero denominators." and "Pieces don't meet: jump. Factor cancels: hole. Doesn't cancel: asymptote." Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. Identify and classify every discontinuity of y equals x squared plus x minus six, over x squared minus four. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Identify and classify every discontinuity of y = (x² + x − 6)/(x² − 4)." The full question stays on screen. Picture slot: empty axes (−5 to 5 by −6 to 6). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> Factorise both. The top is x plus three, times x minus two. The bottom is x minus two, times x plus two. The x minus two **cancels**, so there's a hole at x equals two, at a height of five quarters. The x plus two doesn't cancel, so there's a vertical asymptote at x equals minus **two**. Calling x equals two an asymptote is the slip. That factor cancelled, so it's a **hole**.

Visual: the card shrinks to the top (30 px). Rows, 52 px: "y = (x + 3)(x − 2)/((x − 2)(x + 2))"; on "cancels" the (x − 2) factors strike through (amber), row "= (x + 3)/(x + 2), x ≠ 2", "hole at (2, 5/4)" with the hole punched on the picture. On "two" "x + 2 = 0: asymptote x = −2", a dashed grey line at x = −2 and the curve's branches. Framed answer (green): "hole at (2, 5/4); vertical asymptote x = −2". On "hole" a red slip "asymptotes at x = 2 and x = −2" writes and is crossed, caption "x − 2 cancels: a hole". Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. f of x equals k x minus one, for x less than two, and x squared plus one, for x of two or more. Find k so that f is continuous at x equals two. Pause here to answer.

Visual: `QuestionCard`, 40 px: "f(x) = { kx − 1, x < 2; x² + 1, x ≥ 2 }. Find k so that f is continuous at x = 2." Picture slot: empty axes (0 to 4 by 0 to 12). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 12. feedback 2 (brief)
> The first piece heads to two k minus one. The second piece gives two squared plus one, which is **five**. For the pieces to meet, two k minus one equals five, so two k is six, and k is **three**. If you got five halves, you used four instead of five. Don't forget the plus one in the second **piece**.

Visual: the card shrinks to the top. Rows, 52 px: "first piece → 2k − 1"; on "five" "second piece: 2² + 1 = 5". "2k − 1 = 5, 2k = 6"; on "three" "k = 3" (green frame), and on the picture the two pieces draw meeting at (2, 5), the pen running through. On "piece" a red slip "2k − 1 = 4, k = 5/2" writes and is crossed, caption "x² + 1 at 2 is 5". Hold about 1 s.

### 13. handoff
> Here's a graph with no breaks at all. Along a rail trail, the kilometre posts count from an old railway station, minus to the west, and plus to the east. Your distance from the station is never negative. Three kilometres west and three kilometres east are both three kilometres **away**. Next, a function that measures distance, whichever way you go.

Visual: the memory line shows small at the top (30 px), then fades. Board: the rail trail plate (`ma11-rail-trail-v1.png`, about 1,700 px wide) across the frame, with a coded number line along the trail (−5 to 5 km; the old station at 0). Two blue markers at −3 and 3; on "away" teal distance bars draw from each marker back to 0, both labelled "3 km", tags "3 km west" and "3 km east". Chips "Next: a distance that ignores direction" and "?". Hold about 2 s. This is w30's opening frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Continuous at a point: draw through it without lifting the pen.
- Discontinuity: a point where the function is not continuous.
- Jump: the pieces arrive at different heights.
- Zero denominator: factor cancels, hole; doesn't cancel, asymptote.
- Check the joins and the zero denominators.

Memory aid (framed card, right side, as in scene 8): *Pen up means a break.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 13's frame exactly. This is the final frame and w30's opening frame.

## Teaching checks

- **Does it explain causes?** Why the dryer's graph breaks: the price changes in steps, so at 10 the heights differ (1, 2). Why a jump is not a missing value: the function is defined at the join, but the pieces don't meet (2, 4). Why a zero denominator breaks a graph: the function is undefined there (5, 6). Why a cancelled factor leaves a hole and an uncancelled one an asymptote: after cancelling the rest is finite near the point; without cancelling the values grow without bound (5, 6, A1). Why a constant can close a join: continuity needs the two pieces to arrive at the same height (7, A2).
- **Misconceptions addressed:** "defined, so continuous" (4 crossed); a jump as undefined (2); the hole forgotten (5 crossed); every zero denominator as an asymptote (A1 crossed); a missed root (6 crossed); "1/x is not continuous" as a whole (3); a dropped term (A2 crossed).
- **Visual standard, item by item:** 1 the painted dryer from the first frame, returning as badges in 2 and 8; 2 a new stage every 35 to 55 s; 3 `PenTrace` with live lifts and labels, `JoinSlider` with a live gap, the punched hole; 4 fixed colour roles; 5 large type; 6 hand tags; 7 g01 boards in 4 to 6; 8 framed card and five bullets; 9 the pen running straight through the join once a = 8/3.
- **One idea at a time:** the anchor (1), the definitions (2), the three kinds (3), one kind per board (4 to 6), closing a join (7).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 28 s and 22 s.
- **Avoided double teaching:** piecewise graphs (w28), asymptotes (w21) and cancelling (w02) are recalled.
- **Syllabus coverage:** `ci903515d1` (2, 7; key note 1); `ci91b5bbaa` (2, 3; key note 2); `ci1486e4cc` piecewise (1, 2, 4, 7, A2; key note 3) and other functions (3, 5, 6, A1; key notes 4, 5).
- **Out of scope by design:** limits; differentiability.

## Practice questions and model answers

**Attempt 1 (scene 9; pack question 1, original, HSC style, 3 marks suggested, not an official marking scheme).** "Identify and classify every discontinuity of y = (x² + x − 6)/(x² − 4)."
Model answer: y = (x + 3)(x − 2)/((x − 2)(x + 2)). The factor x − 2 cancels, leaving (x + 3)/(x + 2) for x ≠ 2: a hole at (2, 5/4). The factor x + 2 does not cancel: a vertical asymptote (infinite discontinuity) at x = −2. Classic mistake (crossed): "asymptotes at x = 2 and x = −2".

**Attempt 2 (scene 11; pack question 2, original, HSC style, 2 marks suggested).** "f(x) = kx − 1 for x < 2 and f(x) = x² + 1 for x ≥ 2. Find k so that f is continuous at x = 2."
Model answer: the first piece heads to 2k − 1 and the second gives 2² + 1 = 5. Continuous when 2k − 1 = 5, so k = 3. Classic mistake (crossed): "2k − 1 = 4, k = 5/2".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Dryer | $2 (0 < t ≤ 10), $4 (10 < t ≤ 20), $6 (20 < t ≤ 30); C(4) = 2, C(10) = 2, C(10.5) = 4 | 1, 2, 8 |
| Site `we-2` | x + 1 heads to 3; 3x gives 6; jump at 2 | 4 |
| Site `we-1` | (x² − 9)/(x − 3) = x + 3, x ≠ 3; hole (3, 6) | 5 |
| Site `we-3` | 2/(x² − 4): asymptotes x = ±2; x = 2.01: 0.0401, y ≈ 49.9 | 6 |
| Join | x² (x ≤ 3), ax + 1 (x > 3): 3a + 1 = 9, a = 8/3 ≈ 2.67; check 3(8/3) + 1 = 9; slider start a = 1.5, gap 3.5 | 7 |
| A1 | hole (2, 5/4); asymptote x = −2 | 9, 10 |
| A2 | k = 3; crossed 5/2 | 11, 12 |
| Handoff | rail trail posts −3 and 3: both 3 km from 0 | 13 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (16 Nov 2026, scratchpad `w24w31/verify.py`); Codex to re-check.

- Dryer 2⌈t/10⌉ at 4, 10, 10.5, 12, 20, 25, 30: 2, 2, 4, 4, 4, 6, 6.
- we-2: 2 + 1 = 3; 3(2) = 6; jump 3.
- we-1: x² − 9 = (x − 3)(x + 3); hole height 6.
- we-3: x² − 4 = 0 at x = ±2; at x = 2.01, x² − 4 = 0.0401 and 2/0.0401 = 49.88.
- Join: 3a + 1 = 9 ⟹ a = 8/3 = 2.667; at a = 1.5 the gap |4.5 + 1 − 9| = 3.5.
- A1: x² + x − 6 = (x − 2)(x + 3); x² − 4 = (x − 2)(x + 2); (x + 3)/(x + 2) at 2 = 5/4.
- A2: 2k − 1 = 5 ⟹ k = 3; slip 2k − 1 = 4 ⟹ k = 5/2.

## Memory aid check

- **"Pen up means a break."** The syllabus's own image, made into a line. Meaning, as said in scene 8: if the curve cannot be drawn through a point without lifting the pen, the function is not continuous there; look at joins and zero denominators; classify by whether pieces meet and whether the zero factor cancels. Assumptions checked: the cancel rule is stated for rational functions (a factor that cancels completely leaves a hole; one that does not cancel gives an asymptote; a factor that only partly cancels, such as (x − 2)/(x − 2)², still gives an asymptote, which no question here uses: author note). It helps a new case: (x − 1)/(x² − 1) has a hole at x = 1 and an asymptote at x = −1. Introduced after scenes 2 to 7.
- **Considered, not used:** "Jump, hole, asymptote: J H A" (letters without meaning).

## Narration length estimate

Counted by script with the build parser rules: **5,613 characters**, 14 scene headings. Characters per scene (1 to 14): 449, 665, 617, 535, 605, 548, 586, 216, 141, 366, 175, 289, 346, 75.

At 13.3 characters per second the speech before the notes is about 416 s. Holds and settling: 2 countdowns of 10 s (20 s); short holds (memory card 2 s, feedback 1 s each, handoff 2 s) 6 s; about 28 s of settling (the pen traces and lifts, the three break panels, the punched hole and the join slider's sweep); the notes scene is 45 s. Total **about 515 s (8 min 35 s)**, inside the 5,500 to 6,800 band and about 55 s under the 570 s cap.

Reserve trims if the voiced take runs long: scene 3's "Lines, parabolas and cubics never break." (keep the tiny curves); scene 7's "Check it." sentence (keep the row).

## Scene list and build ids

Lesson key `m-a11w29` (route math-a11-w29). Explainer folder `src/explainer/lessons/math-a11-w29`; build inputs in `docs/production/claude-pm/lessons/math-a11-w29/` (at voicing).

In order (14 scene headings): hook-dryer, continuity-defined, three-breaks, worked-join, worked-hole, worked-asymptotes, closing-a-join, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (seconds from the estimate):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 92 s | 1 to 2 | w28's frame; the dryer's staircase and the pen lifting |
| 92 to 144 s | 3 | Three break panels: jump, hole, asymptote |
| 144 to 279 s | 4 to 6 | Three g01 boards: a join, a hole, asymptotes |
| 279 to 329 s | 7 | JoinSlider closing the gap |
| 329 to 347 s | 8 | Framed memory card |
| 347 to 442 s | 9 to 12 | Question cards and countdowns, then feedback |
| 442 to 470 s | 13 | The rail trail and two 3 km distances |
| 470 to 515 s | 14 | Key notes with the framed card, then a silent return to scene 13's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: w28's last frame continues into 1 (the staircase grows); 1 to 2 camera continue; 2 to 3 clear change (three panels); 3 to 4, 4 to 5, 5 to 6 clear change; 6 to 7 stage change to the slider; 7 to 8 camera pull back to the card; attempts and feedback: the card shrinks to the top; 12 to 13 board clear; 13 to 14 fade, then a silent return to scene 13's frame.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11w29-learning-review.md`, `science_check` = `checks/m-a11w29-maths-check.md`.

## Assets

Inspected before choosing (16 Nov 2026, `public/assets`, read only): no dryer, washing machine or laundromat plate exists (searched dryer, laund, washing). Not used.

Need (painted, new; see the Codex asset brief): `ma11-coin-dryer-v1.png` (also needed for w28's final frame). The handoff uses w30's `ma11-rail-trail-v1.png`.

Coded: the staircase and every graph, the pen outline and its trace, labels, the slider and gap readout, the punched hole, working boards, cards, countdown, hand tags, key notes, the number line and distance bars in the handoff.

### Studio kit use and additions

Uses: `MATH_ROLES`, `Role`, `HandTag`, `PlateImg`, `StudioPlot`, `PiecewisePlot` (w28), `ParameterSlider`, `LiveReadoutBoard`, the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`, `GivensStrip`.

Additions:
1. **`PenTrace`** (new; reused by w30): a coded pen outline (never a hand) that traces a plotted function left to right, lifts at each discontinuity in a small arc, counts lifts, and drops a label; the classification is computed (one-sided values differ: "jump"; undefined with finite matching neighbours: "hole"; unbounded: "asymptote"). Check: the dryer gives two jumps on (0, 30]; `we-1` one hole; `we-3` two asymptotes; the join at a = 8/3 no lift.
2. **`JoinSlider`** (new, on `ParameterSlider`): a constant in one piece of a piecewise function, with the piece redrawn live and a computed gap readout at the join. Check: gap 0 only at a = 8/3.

## Codex asset brief (Maths A11 W29, a coin dryer; also w28's final frame)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-w29.md`, route entry math-a11-w29. Paint after the learning review and maths check pass and root gives the go-ahead, and before the w28 build (w28's final frame shows this plate). Save to `public/assets/maths/`. Transparent PNG with a true alpha channel, clean edges; ink and watercolour in the house style, matched to `maths/ma12-coin-jar-v1.png`; no text, numbers, prices, logos, brand names, coins with faces, people, hands, faces, glow or shadow. Never stretch.

1. `ma11-coin-dryer-v1.png` (1400 × 1800 px): one commercial front-loading tumble dryer of the kind found in a laundromat, seen from the front at a slight angle: brushed stainless steel cabinet, a round glass door with a dark interior and a few folded towels visible, and a control panel above the door with a **blank** coin-slot plate (a slot and a small blank display, no numbers or words). Standing on a short strip of pale tiled floor that fades to transparent.

Report inspection on the paper background (`#f6f1e7`) at 280 px and 520 px tall and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-w29-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the three syllabus quotes match the route-inputs JSON exactly, and no site module label appears.
3. Confirm no limit notation appears; "heads towards" is the only limiting language.
4. Confirm the dryer's circles: closed on the right end of each step, open on the left; C(10) = 2.
5. Confirm site `we-1` to `we-3` keep their answers, and that y = 1/x is described as continuous on its domain with a discontinuity at 0.
6. Confirm both attempts carry every demand and neither card nor picture shows an answer.
7. Confirm no em dash (U+2014), Australian spelling, the narration counts by script, and every bold cue quoted in its scene's Visual in spoken order.
8. Confirm scene 1 opens on w28's final frame and scene 13's frame matches w30's opening frame.

## YouTube metadata (draft)

Title: Continuity: Where Does a Function Break? | Year 11 Maths Advanced

(Title length: 65 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/working-with-functions/lesson12.sa.html

A laundromat dryer charges $2 for each 10 minutes or part of 10 minutes, so its cost graph is a staircase, and a pen tracing it has to lift at every step. That is the informal idea of continuity: a function is continuous at a point if you can draw its curve through the point without lifting your pen. Meet the three common breaks (jumps, holes and vertical asymptotes), find them in piecewise functions and fractions, and choose a constant that closes a gap. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions. Prices are a maths model.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Working with functions.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Define informally that a function is continuous at a point if the curve can be drawn through the point without lifting the pen off the paper"
"Identify points where piecewise-defined functions and other functions are not continuous"
"Define a discontinuity of a function informally as a point where the function is not continuous"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

Builds on: Piecewise functions; hyperbolas and asymptotes; algebraic fractions. Next: Absolute value.

#Year11Maths #MathsAdvanced #Continuity #HSCScience

## Open decisions

- **1. "Heads towards" (learning review).** The narration avoids limits but needs the idea of the value a piece approaches at a join. The reviewer checks "heads towards" and "arrives at" are enough for students starting Year 11.
- **2. Type names (root).** "Removable" and "infinite discontinuity" appear once each, on screen in brackets, because the site uses them; the syllabus does not require them. Root may drop them.
- **3. The dryer's 30-minute cap (author note).** The model stops at 30 minutes so the graph has a clear end; no learner copy depends on it.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from w28, w21 and w02; check that "a jump is not a missing value" lands with the dryer's closed circle; that the hole's height from the simplified rule is clear; that the slider makes "the pieces meet" feel like the definition; that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
- The pen trace carries the definition; judge it at playback speed. Every lift and label must be computed from the function.
