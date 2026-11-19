# Maths S11 L02: How do we write y = mx + c and draw the line, by hand and with technology? A taxi fare as a table, the equation from a table and from a graph, two ways to draw by hand, and a graphing app with one point checked (design)

Status: Revision 1 (19 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Year 12 Standard designs (`math-s12-a01.md`, `a07.md`, `r12a.md`, each at Revision 2) and root's Standard rulings (`../checks/root-rulings-maths-standard-outline.md`, rulings 1 to 91). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,148 characters by script (see "Narration length estimate"), 13 scene headings, about 474 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: second video of Year 11 Mathematics Standard (2024) Linear relationships, outline playlist order 10. Year 11 is one course for Standard 1 and Standard 2. Pre-design pack: `../pre-design/maths-standard/math-s11-l02.md`. Site lessons (read through the pack's quotations, read only): `maths-standard/year11/linear-relationships/lesson01.sa.html` (Coordinates, Tables and Linear Patterns, SHA256 `517b64f10c3e8e7cd36941021b77d9d5eea0880e3280bd154b07b1207cd71603`; the taxi hook, card 02's "Equal input steps + equal output changes = linear pattern", `we-1`'s fares 6, 9, 12, 15, trap 03's skipped input) and `lesson03.sa.html` (Intercepts and Linear Equations, SHA256 `c8d6872ef3873497730932a9296aa733ae5a3439e9f27e20984f9e21d5d2c8e0`; `we-3`'s table (0, 30) to (3, 66) giving 30 + 12t). Route entry: `math-s11-l02` in `../../programme/maths-standard-route-inputs-8.json`. Visual system: maths studio kit; no new plate (the taxi `ma11-taxi-side-v1.png` is reused); every table, graph, app screen and board coded.

Owner rules applied: 2024 syllabus only, content points cited by codename in this design and by exact wording in the description; painted plates for real objects and code for diagrams; no people, hands or faces (the taxi has tinted windows and no driver drawn); one main learner question; one reasoning stage at a time; every step said in words before its symbols (Standard pace); worked example in the g01 layout with a framed answer and a crossed slip; two attempts with "Pause here to answer." and 10 s countdowns, the full worded question on screen; brief feedback with one crossed slip; five key notes with a framed memory card; everyday anchor (a taxi fare, the site's hook); Australian spelling; no em dashes; money spoken naturally; conversational narration with commas for small pauses; y = mx + c throughout (ruling 91; the site's y = mx + b, MS-82, is never shown).

Syllabus content points (Mathematics Standard 11-12 (2024), Year 11, common to Standard 1 and Standard 2, Linear relationships), quoted from `../../programme/maths-standard-route-inputs-8.json`:
- `ciafd3b572`: "Determine the equation of a straight line of the form y = mx + c where m is the gradient and c is the y-intercept"
- `ci5ff71229`: "Construct a straight-line graph, with and without using graphing applications" (the "with graphing applications" half is original teaching: no site lesson uses an app, MS-81; ruling 3)

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fabe84d89c

**Boundary:** opens on l01's final frame exactly (the taxi plate with "$6 to start" and "+$3 a km", empty axes and the chip "C = ?"). Recalls l01 (gradient as rise over run; the y-intercept as the output when x = 0; reading m and c from y = mx + c) and f01 (substituting a value) in a phrase or grey chip each. Teaches: a table of values; equal steps giving equal changes as the test for a linear pattern, with equal input steps checked; c from the x = 0 row and m from the change per step of 1; writing y = mx + c and the context letters; the equation from a graph (read c, rise over run for m), checked at a third point; drawing by hand from at least three points with a ruler, or by plotting c and stepping m (including a negative step); the same line in a graphing app with one point checked by substitution; every point on the line makes the equation true, and a point off it does not. Stops there. Not taught: a model from words with interpretation (l03); predictions and limits (l04); two lines crossing (math-s12-a01).

## Decisions

- **Anchor: the site's taxi fare (reused plate, live).** "A taxi fare starts at $6 and goes up $3 per kilometre" (lesson01's hook and `we-1`). Drawn with the existing `ma11-taxi-side-v1.png` (viewed 19 Nov 2026: a yellow sedan in side view, blank roof sign, tinted windows, no driver visible). A coded meter readout card beside it, not the painted meter `ma11-taxi-meter-v1.png` (viewed: it carries a baked dark surround that would sit badly on the paper ground). The fare is labelled "example fare" on screen (ruling 5: NSW metered fares differ and change; the site's round numbers keep the arithmetic visible). The pack's new anchors (karaoke, tutoring, bike repair) are not needed: the site's own hook fits and needs no plate.
- **Join.** Opens on l01's final frame exactly (`math-s11-l01.md` scene 12). Ends on l03's opening frame: the hire e-bike `ma11-share-ebike-v1.png` with the site's words "$12 before you ride a single metre" and "then $5 per hour".
- **Pace (pack flag "watch").** Two ways to write the equation (from a table, from a graph) and two ways to draw by hand, plus the app. Writing from words is left to l03, as the pack suggests.
- **Graphing applications (syllabus wording; MS-81).** Scene 6 is a coded, unbranded graphing-app screen (`ScreenApp`, graph mode), as in math-s12-a01. One sentence says the HSC exam does not allow a graphing calculator, so drawing by hand is practised and the app checks it.
- **Simulations (standard item 3).**
  1. **Table-to-plot flight** (scenes 2 and 5; the `StudioCandidateTable` option built for math-s12-a01): each table row lights and its point flies to the grid; "+3" arrows between rows match "across 1, up 3" steps on the graph.
  2. **Step the gradient** (scene 5): a dot at c, then a stepping cursor that draws "across 1" (amber, horizontal) and "up 3" (amber, vertical) twice, leaving dots; then the ruler draws the line through them. A ghost demonstration on y = −x + 4 steps "across 1, down 1".
  3. **App point check** (scene 6): the line typed in, a tap at x = 4 snapping a readout "(4, 18)", the substitution row turning green; a second tap at (4, 20) off the line, its row turning red.
- **Colour roles (fixed for l01 to l07; see the root-decisions file).** The line blue; the gradient m, the rise and run, the "+3" arrows and the steps amber; the y-intercept c violet; table inputs and points ink; check ticks and answers green; an off-line test point grey with a red cross; mistake red, crossed slips only.
- **Large type, handwritten voice.** Current line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; all text above y = 950 (the bottom 12 per cent stays clear). Hand tags: "+3 each km", "equal steps, equal changes", "x = 0 row: c", "the start first", "at least 3 points", "ruled", "across 1, up 3", "check one point", "off the line", "with x: m". At most two live at once.
- **Stage changes (standard item 2), about every 30 to 60 s.** The taxi and the meter card (1); the table (2); the equation build (3); the g01 board (4); the drawing grid (5); the app (6); the framed card (7); question cards (8 to 11); the e-bike frame for l03 (12); key notes (13).
- **Worked example (g01 layout).** Scene 4: the site's `we-3` numbers as a graph: a line through (0, 30) and (3, 66); c = 30; m = 36 ÷ 3 = 12; y = 12x + 30; checked at (2, 54). Crossed slip: "m = 66 ÷ 3 = 22" (caption "take the start away first").
- **Memory aid.** Framed card: "Plot c, step m, rule the line." Key line: "Check one point in the equation."
- **Visual surprise.** The app's off-line point: (4, 20) sits a short way above the line, and its substitution row "3(4) + 6 = 18, not 20" turns red as the point gets a red cross, while (4, 18) on the line stays green. One look shows "on the line" and "makes the equation true" are the same thing.
- **Site notes (pack section 8).** No error is taught. MS-82 (y = mx + b) is not shown. MS-81's gap (no app) is filled by scene 6. Lesson01's non-linear table (1, 4, 9, 16) is not used; trap 03's skipped input is said in scene 2.
- **Plain meanings at first use.** Table of values ("a list of inputs and the output each one gives"); linear ("its points sit on a straight line"); y-intercept and gradient (recalled from l01 with their meanings); equation ("the rule that turns x into y", in the scene 3 chip).
- **Attempts (pack questions).** A1 (pack question 1): gradient −2 and y-intercept 5; equation, table for x = 0 to 3, and the line. Crossed "y = 5x − 2" (caption "the gradient goes with x"). A2 (pack question 2): a graph through (0, −1) and (3, 5). Crossed "m = 4 ÷ 3" (caption "5 − (−1) = 6").
- **Mistake scene:** none separate. Swapped m and c (3 spoken; A1 crossed); dividing the end value by x (4 crossed); two points or freehand (5 tags); trusting an app without a check (6); the double negative (A2 crossed).
- **Cause chain taught, in order:** (1) equal steps in and equal changes out mean a constant rate, so the points line up (2); (2) the row at x = 0 is where the line meets the y-axis, so it gives c, and the change per step of 1 is the gradient (3); (3) on a graph, c is read where the line crosses the y-axis, and m is the rise over the run between two points, taking the start away first (4); (4) a ruled line through three points, or c and two gradient steps, shows the same line, and a third point exposes a slip (5); (5) every point on the line satisfies the equation, so substituting one point checks the line (6).
- **Entry knowledge (route):** math-s11-l01 (`ci94641a48`, `cic0a28004`: gradient and y-intercept from a graph or an equation); math-s11-f01 (substituting a value). Recalled in a phrase or grey chip.
- **Handoff (to math-s11-l03, "How does a linear model describe a real situation, and what do its gradient and intercept mean?").** Scene 12: see Handoff below; this is l03's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Taxi: C = 3d + 6; d = 0, 1, 2, 3, 4, 5 gives 6, 9, 12, 15, 18, 21; a skipped input (2 to 4) gives a change of 6.
  (b) Worked example: (0, 30) and (3, 66); m = 36 ÷ 3 = 12; y = 12x + 30; at x = 2, 54; the slip 66 ÷ 3 = 22.
  (c) App: 3(4) + 6 = 18; (4, 20) is off the line.
  (d) A1: y = −2x + 5; 5, 3, 1, −1. A2: c = −1, m = (5 − (−1)) ÷ 3 = 2; y = 2x − 1.
  (e) Ghost demonstration in scene 5: y = −x + 4 from (0, 4) to (1, 3) and (2, 2) (no narration number).
  (f) Pronunciations: "y equals three x plus six"; "C equals three d plus six"; "zero, thirty" for the point; "minus two x".
  (g) Windows: taxi d 0 to 5 km, C $0 to $24 (grid every 1 km and $1, labels every $3); worked example x 0 to 4, y 0 to 80 (grid every 1 and 10; the two given points marked and labelled); app x −1 to 6, y −2 to 24; A1 blank axes x −1 to 4, y −3 to 6; A2 x −1 to 4, y −2 to 6 (grid every 1, the two points on grid intersections, not labelled).

Main question: *How do we write y = mx + c and draw the line, by hand and with technology?*
Entry knowledge (l01, f01): gradient and y-intercept from a graph or an equation; substituting a value.
Stops after: y = mx + c from a table or a graph; drawing by hand two ways; drawing with an app and checking a point.
Handoff: math-s11-l03: "a bike hire in words: which number is the gradient, which the intercept, and what do they mean?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): line blue; gradient amber; intercept violet; answer green; mistake red. Header strip "MATHEMATICS STANDARD · LINEAR RELATIONSHIPS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: the taxi fare
> Here's the taxi from the end of last video. The fare starts at six dollars, and then goes up three dollars for every kilometre. Last time, we started with a line and read its two numbers, where it starts and how steep it is. This time we go the other way. We start with the numbers, then write the equation and draw the line ourselves. So how do we write y equals m x plus c, and draw the line, by hand and with **technology**?

Visual: opens on l01's final frame exactly (the taxi plate `ma11-taxi-side-v1.png`, about 1,000 px wide, at the left; chips "$6 to start" (violet) and "+$3 a km" (amber), 44 px; grey tag "example fare"; empty axes at the right with the chip "C = ?"). On the first sentence the "Next" and "?" chips fade. On "six dollars" a coded meter card (dark rounded rectangle, 52 px green digits) under the taxi reads "$6.00"; on "three dollars for every kilometre" it ticks to "$9.00" with a small "1 km" tag. On "read its two numbers" a grey chip "Year 11 l01: m = rise ÷ run, c = where it crosses the y-axis". On "go the other way" an arrow reverses on a small strip "numbers → equation → line". On "technology" the heading "Writing y = mx + c and drawing the line" writes on, and the question chip moves to the top right.

### 2. a table, and a straight pattern
> Start with a table of values, a list of inputs and the output each one gives. At zero kilometres, before the taxi moves, the fare is six dollars. Then one kilometre is nine dollars, two is twelve, and three is **fifteen**. Look at the gaps. Every time the distance goes up by one, the fare goes up by three. Equal steps in, equal changes out, and that's how you know the pattern is linear, so its points sit on a straight **line**. Plot them, and you can see it. Check that the steps really are equal, though. If a table jumped from two kilometres to four, the fare would jump by six, and the pattern would look **broken** when it isn't.

Visual: stage change: the taxi shrinks to a 260 px badge at the top left with the meter card beside it (30 px). Table (`StudioCandidateTable`, 52 px), centred: "distance d (km): 0, 1, 2, 3" over "fare C ($): 6, 9, 12, 15", cells filling as spoken; on "fifteen" the last cell fills. On "the gaps" amber "+1" arrows appear above the input row and amber "+3" arrows below the output row, hand tag "+3 each km". Chip, 44 px: "linear: its points sit on a straight line". On "line" the table-to-plot flight: each column flies to a small grid at the right (d 0 to 5, C 0 to 24), four ink points in a straight row, hand tag "equal steps, equal changes". On "two kilometres to four" a second small table writes in grey beside it ("d: 0, 1, 2, 4" over "C: 6, 9, 12, 18"), its arrows "+1, +1, +2" and "+3, +3, +6"; on "broken" the "+6" pulses red and the "+2" above it pulses amber, hand tag "check the steps first".

### 3. from the table to y = mx + c
> An equation is just the rule that turns each x into its y. Now read off the two numbers. The y-intercept, c, is the output when the input is zero, so c is six. The gradient, m, is how much the output changes for each step of one, so m is **three**. Put them into y equals m x plus c, and you get y equals three x plus **six**. In the taxi's own letters, that's C equals three d plus six, where C is the fare in dollars, and d is the distance in kilometres. Watch the order. The three goes with the x, and the six stands on its own. Swap them, and y equals six x plus three is a completely different **line**.

Visual: camera continue: the main table moves to the left (44 px). On "output when the input is zero" the d = 0 column rings violet, hand tag "x = 0 row: c", and the "6" flies to a violet chip "c = 6". On "three" (bold) one "+3" arrow lifts out amber into a chip "m = 3 (per km)". Equation strip, 52 px, centre: "y = mx + c" with m amber and c violet; on "six" the chips drop into the slots: "y = 3x + 6" (3 amber, 6 violet). Grey chip "equation: the rule that turns x into y". Below it, 44 px: "C = 3d + 6" with the key "C = fare ($), d = distance (km)". On "three goes with the x" a hand tag "with x: m" points at the 3. On "line" a small grey thumbnail at the right shows y = 3x + 6 (blue) beside y = 6x + 3 (grey, far steeper, starting at 3), hand tag "different line".

### 4. worked example: the equation from a graph
> Here's the method on its own, from a graph. A straight line passes through the points zero, thirty and three, sixty-six. Find its equation. Step one, the y-intercept. The line crosses the y-axis at thirty, so c is **thirty**. Step two, the gradient. The rise is sixty-six minus thirty, which is thirty-six, and the run is three minus zero, which is three. Thirty-six divided by three is **twelve**, so m is twelve. Step three, write it, y equals twelve x plus **thirty**. Step four, check another point. At x equals two, twelve times two plus thirty is fifty-four, and the point two, fifty-four is on the line. The slip is dividing sixty-six by three to get twenty-two. That forgets the line started at thirty, so take the start away **first**.

Visual: clear change to the g01 board. Task strip, 44 px: "A straight line passes through (0, 30) and (3, 66). Find its equation." (the site's `we-3` values). Givens card, 44 px: "point 1: (0, 30)", "point 2: (3, 66)". Formula strip, 44 px: "y = mx + c; m = rise ÷ run". Plot at the right (680 × 600 px, x 0 to 4, y 0 to 80, the two points marked and labelled; line blue). Rows, 52 px: on "thirty" (first bold) the crossing at (0, 30) rings violet, row "c = 30". On "twelve" the rise-run triangle draws amber from (0, 30) to (3, 66) with "rise 66 − 30 = 36" and "run 3 − 0 = 3", row "m = 36 ÷ 3 = 12". On "thirty" (second bold) the framed answer (green): "y = 12x + 30". On "check another point" a row "12(2) + 30 = 54 ✓" and the point (2, 54) lights green on the line. On "first" a red slip "m = 66 ÷ 3 = 22" writes small at the right and is crossed (caption "take the start away first"), while a grey dashed line y = 22x from the origin flashes and misses (0, 30).

### 5. drawing it by hand
> Now draw the taxi's line. There are two ways by hand. The first way is to plot the table. Each row becomes a point, zero, six, then one, nine, two, twelve and three, fifteen. Use at least three points, so a mistake shows up as a point that's off the line, then join them with a **ruler**. The second way is to start at c, and step the gradient. Put a dot at six on the y-axis. Go across one, and up three, then across one, and up three **again**. That gives three dots, and one ruled line. Both ways give the same line, because both use the same start and the same rate. If the gradient is negative, each step goes across one and **down**.

Visual: stage change to a large drawing grid (1,250 × 700 px, d 0 to 5 "distance (km)", C 0 to 24 "fare ($)", grid every 1 km and $1, labels every $3). Left half of the narration: the table (30 px) at the top left; its rows fly to the grid one by one as spoken; hand tag "at least 3 points". On "ruler" a coded ruler slides along the points and the blue line draws, hand tag "ruled". Grid clears the line (points fade to grey). "The second way": a violet dot at (0, 6), hand tag "start at c"; the stepping cursor draws "across 1" (amber, horizontal) and "up 3" (amber, vertical) to (1, 9); on "again" a second step to (2, 12), hand tag "across 1, up 3"; the ruler draws the same blue line exactly over the grey points (they turn ink). On "down" a small inset at the right (400 × 360 px, x 0 to 3, y 0 to 5) shows the ghost line y = −x + 4: a violet dot at (0, 4), two amber steps "across 1, down 1", the line drawn grey, hand tag "negative: step down".

### 6. with a graphing app
> You can also draw it with a graphing app. Type y equals three x plus six, and the line appears straight away. An app never draws a wobbly line, but it only draws what you type. So don't just trust it, check one point. Tap the line at x equals four, and the app shows four, **eighteen**. Substitute, three times four plus six is eighteen, so that's right. In fact, every point on the line makes the equation true, and every point off it doesn't. Try four, twenty. Three times four plus six isn't twenty, so that point is off the **line**. In the HSC exam you can't use a graphing calculator, so practise drawing by hand, and use an app to check your **work**.

Visual: stage change to the graphing-app screen (`ScreenApp`, 1,150 × 760 px, unbranded input bar, x −1 to 6, y −2 to 24). The input types "y = 3x + 6" (blue) and the line draws. Grey chip "Year 11: graphing apps". On "eighteen" the tap marker snaps to (4, 18) with the app label "(4, 18)" (amber outline). Row at the right, 52 px: "3(4) + 6 = 18 ✓" (green), hand tag "check one point". On "true" the chip "on the line ⇔ makes the equation true" (44 px). On "four, twenty" a grey point appears at (4, 20) just above the line; on "line" (bold) it gets a red cross and the row "3(4) + 6 = 18, not 20 ✗" writes red under the green one, hand tag "off the line". On "graphing calculator" the coded calculator badge (`ma12-calculator-v1.png`, 220 px) with a grey chip "HSC exam: no graphing calculator"; on "work" two chips "exam: draw by hand" and "app: check it".

### 7. memory aid
> Here's the idea to keep. It's last video's idea in reverse. Plot c, step m, then rule the line. The number on its own is where the line meets the y-axis, and the number with x is how far it climbs for each step **across**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the taxi line small, the violet dot at (0, 6) and two amber steps. Main line, hand font 56 px: "Plot c, step m, rule the line." On "across" the key line, 40 px: "Check one point in the equation." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. A line has gradient minus two, and y-intercept five. Write its equation. Complete a table of values for x equals zero, one, two and three. Then draw the line. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A line has gradient −2 and y-intercept 5. (a) Write its equation. (b) Complete a table of values for x = 0, 1, 2, 3. (c) Draw the line." The full question stays on screen. Picture slot: an empty table (x: 0, 1, 2, 3; y blank) and empty axes, x −1 to 4, y −3 to 6. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> The equation is y equals minus two x plus **five**. The table gives five, three, one and minus one, going down two each time. Plot those points, or start at five and step across one, down **two**, and rule the line. Writing y equals five x minus two is the slip. The gradient goes with the **x**.

Visual: the card shrinks to the top (30 px). On "five" the framed answer (green) "y = −2x + 5" (−2 amber, 5 violet). The table fills "5, 3, 1, −1" with amber "−2" arrows. On "two" the violet dot at (0, 5), two amber steps "across 1, down 2", the points and the ruled blue line. On "x" a red slip "y = 5x − 2" writes and is crossed (caption "the gradient goes with x"). Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. A straight line on a graph passes through the points zero, minus one and three, five. Find its equation. Pause here to answer.

Visual: `QuestionCard`, 40 px: "The graph shows a straight line through the points (0, −1) and (3, 5). Find the equation of the line." Picture slot: the line drawn (blue) on axes x −1 to 4, y −2 to 6, grid every 1, the two points as dots on grid intersections (not labelled). Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> The line crosses the y-axis at minus one, so c is minus one. The rise is five minus minus one, which is **six**, and the run is three, so m is two. The equation is y equals two x minus **one**. Getting four for the rise is the slip. Five minus minus one is five plus one, which is **six**.

Visual: the card shrinks to the top. The crossing at (0, −1) rings violet, row "c = −1" (44 px). On "six" the amber rise-run triangle from (0, −1) to (3, 5): "rise 5 − (−1) = 6", "run 3", row "m = 6 ÷ 3 = 2". On "one" framed answer (green) "y = 2x − 1". On "six" (second bold) a red slip "m = 4 ÷ 3" writes and is crossed (caption "5 − (−1) = 6"). Hold about 1 s.

### 12. handoff
> So you can now go from two numbers to an equation and a line, and back again. But in real life, the numbers usually come in words. A bike hire costs twelve dollars before you ride a single metre, then five dollars per hour. Which number is the gradient, which is the intercept, and what do they actually mean? That's **next**.

Visual: the memory line shows small at the top (30 px), then fades. Board clear to the handoff frame: the hire e-bike `ma11-share-ebike-v1.png` (about 900 px wide) at the left; on "twelve dollars" a coded swing tag beside it, 44 px: "$12 before you ride a single metre" (violet underline); on "five dollars per hour" a second line "then $5 per hour" (amber underline); grey tag "example price". At the right, a coded model card with two empty slots: "C = ▢ + ▢ h" (the first slot violet-outlined, the second amber-outlined), and the chip "which is the gradient? what does it mean?". On "next" chips "Next: linear models in real life" and "?". Hold about 2 s. This is l03's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- y = mx + c: m is the gradient, c is the y-intercept.
- From a table: c is the output at x = 0; m is the change per step of 1.
- Linear: equal steps in give equal changes out.
- Draw with at least 3 points, or plot c and step m. Use a ruler.
- Every point on the line makes the equation true.

Memory aid (framed card, right side, as in scene 7): *Plot c, step m, rule the line.* Key: *Check one point in the equation.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and l03's opening frame.

## Teaching checks

- **Does it explain causes?** Why equal changes mean a straight line: the same rate every step (2). Why the x = 0 row gives c: that is where the line meets the y-axis (3). Why subtract the start before dividing: the gradient measures change, not the total (4). Why three points: two always line up, a third catches a slip (5). Why a substituted point checks the line: points on the line make the equation true, points off it do not (6).
- **Misconceptions addressed:** swapped m and c (3, A1 crossed); dividing the end value by x (4 crossed); skipped inputs (2); two points or freehand (5 tags); trusting the app (6); the double negative (A2 crossed).
- **Visual standard, item by item:** 1 the taxi and meter from the first frame, returning as a badge in 2 and 3; 2 a new stage every 30 to 60 s; 3 the table-to-plot flight, the gradient stepper, the app's point check; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 board in 4; 8 framed card and five bullets; 9 the off-line point turning red beside the green one.
- **One idea at a time:** table and linear test (2), equation from a table (3), from a graph (4), drawing by hand (5), app (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 21 s and 21 s.
- **Avoided double teaching:** l01's rise over run and intercept are recalled in a grey chip; f01's substitution is used, not taught.
- **Syllabus coverage:** `ciafd3b572` (3, 4, A1, A2; key notes 1, 2); `ci5ff71229` (2, 5, 6, A1; key notes 3, 4, 5).
- **Out of scope by design:** models from words and interpretation (l03); predictions (l04); spreadsheets (l05); two lines crossing (math-s12-a01).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original, HSC style, 3 marks suggested, not an official marking scheme).** "A line has gradient −2 and y-intercept 5. (a) Write its equation. (b) Complete a table of values for x = 0, 1, 2, 3. (c) Draw the line."
Model answer: (a) y = −2x + 5. (b) 5, 3, 1, −1. (c) Plot (0, 5), (1, 3), (2, 1), (3, −1) and rule a line through them. Classic mistake (crossed): "y = 5x − 2".

**Attempt 2 (scene 10; pack question 2, original, HSC style, 2 marks suggested).** "The graph shows a straight line through the points (0, −1) and (3, 5). Find the equation of the line."
Model answer: c = −1; m = (5 − (−1)) ÷ (3 − 0) = 6 ÷ 3 = 2; y = 2x − 1. Classic mistake (crossed): "m = 4 ÷ 3".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Taxi | C = 3d + 6; d = 0 to 5: 6, 9, 12, 15, 18, 21; skipped input 2 to 4: change 6 | 1, 2, 3, 5 |
| Worked example | (0, 30), (3, 66); rise 36, run 3, m = 12; y = 12x + 30; 12(2) + 30 = 54; slip 66 ÷ 3 = 22 | 4 |
| App | 3(4) + 6 = 18; (4, 20) off the line | 6 |
| Ghost line | y = −x + 4: (0, 4), (1, 3), (2, 2) | 5 |
| A1 | y = −2x + 5: 5, 3, 1, −1 | 8, 9 |
| A2 | c = −1; 5 − (−1) = 6; m = 2; y = 2x − 1 | 10, 11 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (19 Nov 2026, scratchpad `l/verify.py`, run with `python -I`); Codex to re-check.

- 3d + 6 at d = 0, 1, 2, 3, 4, 5: 6, 9, 12, 15, 18, 21; 18 − 12 = 6.
- Line through (0, 30) and (3, 66): m = 12, c = 30; at x = 2, y = 54; 66 ÷ 3 = 22.
- 3(4) + 6 = 18 ≠ 20.
- −x + 4 at 0, 1, 2: 4, 3, 2.
- −2x + 5 at 0, 1, 2, 3: 5, 3, 1, −1.
- Line through (0, −1) and (3, 5): m = 2, c = −1.

## Memory aid check

- **"Plot c, step m, rule the line."** with key line **"Check one point in the equation."** Original. Meaning, as said in scene 7: c is where the line meets the y-axis, so it is the first point; m is the change in y for each 1 across, so each step is "across 1, up m"; a ruler joins them. Assumptions checked: the equation is in the form y = mx + c (A2 and the key notes keep that form); for a negative m the step goes down (scene 5 says so); a fractional m (for example 1/2) still works as "across 2, up 1", which is not needed here and is not said. It helps a new case: y = 4x − 2 starts at (0, −2), then (1, 2), (2, 6). Introduced after scenes 2 to 6.
- **Considered, not used:** "Bounce off the y-axis, then climb" (vivid, but "bounce" suggests the line changes direction).

## Narration length estimate

Revision 1, counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; scratchpad `l/count.py`, which reproduces e08's 5,632): **5,148 characters**, 13 scene headings. Characters per scene (1 to 13): 423, 625, 596, 728, 627, 646, 218, 191, 284, 136, 277, 322, 75.

At 13.3 characters per second the speech is about 387 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the table flight (2), the worked triangle (4), the drawing and stepping (5) and the app taps (6) about 22 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 474 s (7 min 54 s)**, 96 s under the 570 s cap; speech and holds before the notes about 429 s. Feedback speech: about 21 s and 21 s.

Reserve trims if the voiced take runs long (not needed at this length): scene 2's last two sentences (the skipped input; about 11 s, said again in key note 3's spirit); scene 6's "In fact, every point on the line makes the equation true, and every point off it doesn't." (the chip carries it; about 6 s).

## Scene list and build ids

Lesson key `m-s11l02` (route math-s11-l02). Explainer folder `src/explainer/lessons/math-s11-l02`; build inputs in `docs/production/claude-pm/lessons/math-s11-l02/` (at voicing).

In order (13 scene headings): hook-taxi, table-linear, table-to-equation, worked-from-graph, drawing-by-hand, graphing-app, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 35 s | 1 | The taxi and the meter card |
| 35 to 85 s | 2 | The table, the gaps, the first plot |
| 85 to 125 s | 3 | The equation built from the table |
| 125 to 185 s | 4 | g01 board: the equation from a graph |
| 185 to 235 s | 5 | Drawing by hand, two ways |
| 235 to 285 s | 6 | The graphing app and the point check |
| 285 to 302 s | 7 | Framed memory card |
| 302 to 395 s | 8 to 11 | Question cards and countdowns, then feedback |
| 395 to 422 s | 12 | The e-bike frame for l03 |
| 422 to 467 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: opens on l01's final frame; 1 to 2 stage change (the taxi becomes a badge); 2 to 3 camera continue; 3 to 4 clear change to the board; 4 to 5 stage change to the grid; 5 to 6 stage change to the app; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, the ring shown full from "Pause here to answer."). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s11-l02-learning-review.md`, `science_check` = `checks/m-s11-l02-maths-check.md`.

## Assets

Inspected before choosing (19 Nov 2026, `public/assets/maths`, read only, each opened): `ma11-taxi-side-v1.png` (a yellow sedan in side view, blank roof sign, tinted windows, no driver; used, as the anchor); `ma11-taxi-meter-v1.png` (a dark meter with a blank display and a baked dark surround; not used, a coded meter card instead); `ma11-share-ebike-v1.png` (a teal step-through e-bike with a basket and battery, no rider; used in the handoff frame as l03's hire bike); `ma12-calculator-v1.png` (a plain scientific calculator; reused as the 220 px badge, as in math-s12-a01).

Need (painted, new): none. Reused: `ma11-taxi-side-v1.png` (1 to 3), `ma11-share-ebike-v1.png` (12, 13), `ma12-calculator-v1.png` (6).

Coded: the meter card, tables, equations, every graph, the stepping cursor and ruler, the app screen, the board, question cards, the countdown, hand tags, the swing tag and model card, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `StudioPlot`, `StudioCandidateTable` (with math-s12-a01's table-to-plot flight), `LinePiece`, `LinePoint`, `LineTest`, `ScreenApp` (graph mode), `ModelCard` and `ModelSlot` (handoff), the g01 `WorkingBoard` parts (`TaskStrip`, `EquationStrip`, `GivensCard`, `WorkingRows`, `AnswerFrame`, `MistakeCard`), `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row l02: none beyond a01's flight):
1. **Gradient stepper** (small; a `StudioPlot` overlay): from a start point, draws "across 1" and "up m" (or down) segments in amber, leaving a dot at each step, then a ruler sweep draws the line. Check: on y = 3x + 6 the dots land on (1, 9) and (2, 12) within 1 px; on y = −x + 4 the steps go down.

## Codex asset brief (Maths S11 L02)

No new plate. Before the l02 build, confirm `ma11-taxi-side-v1.png` and `ma11-share-ebike-v1.png` read cleanly on the paper background (`#f6f1e7`) at 1,000 px and 260 px wide (the badge size) and at 900 px for the e-bike, with clean alpha edges (check on black and white). Report in `status.md`; no provenance file needed.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the two syllabus quotes match the route-inputs JSON and the crosswalk exactly.
3. Confirm y = mx + c throughout and no y = mx + b (MS-82).
4. Confirm the site's taxi fares (6, 9, 12, 15) and `we-3`'s (0, 30) to (3, 66) are kept.
5. Confirm both attempts carry every demand and neither card nor picture shows an answer (A2's points unlabelled).
6. Confirm scene 12's frame matches l03's opening.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Writing y = mx + c and Drawing Straight-Line Graphs | Year 11 Maths Standard

(Title length: 76 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year11/linear-relationships/lesson01.sa.html

A taxi fare starts at $6 and goes up $3 a kilometre. Turn that into a table of values, see why equal steps make a straight line, and write the equation y = mx + c from a table or from a graph. Then draw the line by hand two ways (plotting points, or starting at c and stepping the gradient) and with a graphing app, checking one point in the equation. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 11, Linear relationships. For Standard 1 and Standard 2.
Syllabus content (NSW Mathematics Standard 11-12, 2024):
"Determine the equation of a straight line of the form y = mx + c where m is the gradient and c is the y-intercept"
"Construct a straight-line graph, with and without using graphing applications"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fabe84d89c

Builds on: Gradient and y-Intercept: Reading a Straight Line. Next: Linear Models: What the Gradient and Intercept Mean.

#Year11Maths #MathsStandard #StraightLineGraphs #HSCScience

## Open decisions

- **1. The taxi's example fare (root).** The site's $6 and $3 a kilometre are kept and labelled "example fare" on screen. NSW metered fares are lower per kilometre; root may prefer real tariff figures (with a dated source, ruling 32), at the cost of awkward table values.
- **2. The "with technology" scene's length (learning review).** Scene 6 checks one point on and one off the line in about 40 s. If the reviewer finds the app scene thin, the reserve is a second typed line (y = −2x + 5, A1's line) shown and checked, at about 10 s.

## Review notes

- Revision 1. Next: student learning review (trace from l01 only; check that "equal steps in, equal changes out" is followable before the equation, that "take the start away first" makes the worked example's slip clear, that the step-the-gradient method reads at speed, that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
