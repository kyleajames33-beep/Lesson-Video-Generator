# Maths A11 W31: How do V-shaped graphs solve absolute value equations? Graphing y = |ax + b| by folding and with an app, its vertex, symmetry, domain and range, and solving |ax + b| = k both ways (design)

Status: Revision 2 (16 Nov 2026): independent learning review resolved (see "Revision 2" below); not voiced. Revision 1 (16 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`, the d01 Revision 6 pattern) and the accepted w01 to w14 designs (`../checks/root-acceptance-maths-a11-w01-w14.md`). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,522 characters by script (build parser rules), 13 scene headings, about 506 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (16 Nov): learning review resolved

Review: `../checks/m-a11-w31-learning-review.md` (summary `../checks/m-a11-w01-w31-learning-review-summary.md`), with root's rulings of 16 Nov. Findings by the review's numbers:

1. Should fix, attempt 2 and feedback 2 (six demands): **accepted**, reviewer's card, attempt narration and feedback cuts (the cue is now "zero"); the axis, domain and range stay taught in scene 2 and w30. Model answer (2 marks), Decisions, response check, syllabus coverage and open decision 3 updated. Feedback about 22 s.
2. Should fix, scene 4 ("one from the course"): **accepted**: "Here's another one."

Narration now 5,522 characters by script, about 506 s with holds (see "Narration length estimate"). Stage-plan times below are Revision 1 approximations; frames come from the recording's word timings. Every changed value was rechecked with SymPy (scratchpad `rev2_verify.py`); Codex's maths check remains the authority.

Scope: thirty-first video of Year 11 Mathematics Advanced (2024), outline order 31, Working with functions; the last video of the strand before differentiation (c01). Pre-design pack: `../pre-design/maths-a11/math-a11-w31.md` (brief 243). Site lesson (read through the pack's quotations, read only): `working-with-functions/lesson04.sa.html` (Piecewise & Absolute Value Functions, SHA256 `29324c638f5c3da48aa689e8a3e5d4ddb47c569fd633f0f68ef22b6121e8e780`; `we-pw-2` used with the site's numbers unchanged; card 06's |2x − 4| = 6 has the same answers (5 and −1) and is not used). Route entry: `math-a11-w31` in `../../programme/maths-a11-route-inputs-2.json`; `ci81e0ec50` (y = |x|) has moved to w30 (decision in `../checks/root-decisions-maths-a11-w24-w31.md`). Visual system: maths studio kit; a painted jelly bean jar and the reused phone (prefix `ma11-`); the fold, level line, app screen and algebra coded.

Owner rules applied: as w24 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, an everyday anchor (a fete game, food), Australian spelling, no em dashes, conversational narration).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Working with functions, Absolute value functions; NESA codenames, official `code` field empty), quoted from `../../programme/maths-a11-route-inputs-2.json`:

- `ci0614b169`: "Graph y = |ax + b| with and without graphing applications, and identify its symmetry, domain and range"
- `ci9fc969f0`: "Solve absolute value equations of the form |ax + b| = k algebraically and graphically"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

**Boundary:** starts from w30's handoff frame (the jelly bean jar with "350 beans", the V y = |g − 350| with its vertex at (350, 0), the dashed level line y = 20 with "?" on each arm, two face-down guess cards, "Next: which guesses are exactly 20 off?"). Recalls y = |x| (w30). Teaches: y = |ax + b| as y = ax + b with the part below the x axis folded up, its vertex where ax + b = 0, its axis of symmetry through the vertex, domain all real x and range y ≥ 0; sketching from the vertex, the y-intercept and its mirror point, and checking with a graphing application (`ci0614b169`, original teaching: crosswalk partial); solving |ax + b| = k algebraically by two cases with a check (site `we-pw-2`) and graphically as the V meeting y = k (original teaching: crosswalk partial), including k = 0 (one solution) and k < 0 (none) (`ci9fc969f0`). Stops at equations. Not taught: absolute value inequalities ("within 20" is named in the hook but only its boundary is solved); transformations of |x| (g strand); |f(x)| for non-linear f.

## Decisions

### Revision 1 (16 Nov 2026)

- **Anchor: a jelly bean jar guessing game at a school fete (painted plate, live).** The jar holds 350 beans, and "how far off is a guess g?" is |g − 350|, so the error graph is a V with its vertex at the true count. Guesses within 20 win a lolly bag, and the boundary guesses are the solutions of |g − 350| = 20, which the V meets twice (330 and 370) and the two cases find algebraically. Food and games. No Year 12 Maths design and no w01 to w14 design uses jelly beans, a lolly jar or a fete (grep, 16 Nov); no w15 to w23 pack suggests one. The pack's passing train (travel, a third travel anchor in four videos) and flour-bag tolerance (a weaker picture) were rejected.
- **Ownership:** `ci81e0ec50` (y = |x|) is taught in w30 and recalled here (decisions file). This video keeps the two partial points and their original teaching.
- **Simulations (standard item 3).**
  1. **`FoldUp`** (scenes 2 and 3, new part on `StudioPlot`): y = ax + b draws as a dashed grey line; the part below the x axis lifts and reflects in the x axis over 1.2 s (an amber "fold" crease along the axis), landing as the violet arm; the part that was already above becomes the amber arm. The vertex and axis of symmetry mark from the computed zero of ax + b.
  2. **`LevelLine`** (scenes 1, 5, A2 feedback; new part on w14's `CrossingCounter` idea and `StudioLevelLine`): a horizontal dashed line y = k with a k slider (teal); its meeting points with the V mark as green dots with their x-values (blue) read out; a live count "solutions: 2, 1, 0", computed. It sweeps k from 12 to −3.
  3. **`ScreenApp`** (scene 3, the finance-parts graphing screen on the reused phone plate): "abs(2x + 5)" types into an input bar and the V draws on the app's own axes; tapping the vertex shows "(−2.5, 0)".
- **Colour roles (fixed for the whole video).** Inputs x and g **blue**; outputs y **teal** (root ruling 12); the **arm where ax + b ≥ 0 (kept, case "= k") amber**; the **arm where ax + b < 0 (folded, case "= −k") violet** (the w28 and w30 piece colours); the original line dashed grey; the level line y = k dashed, with its k label teal; solutions **green** dots (answers); mistake **red**, crossed slips only.
- **Large type, handwritten voice.** As w24. Hand tags: "fold up", "vertex: ax + b = 0", "axis of symmetry", "never negative", "mirror the y-intercept", "check with an app", "two cases", "± k", "check both", "one on each arm", "touches the vertex", "misses: none", "|…| ≥ 0".
- **Stage changes (standard item 2).** The jar and its V (1); the fold (2); a sketch from three facts and the app (3); g01 board, two cases (4); the level line sweep (5); g01 board, k = 0 and k < 0 (6); the framed card (7); question cards (8 to 11); the rate-of-change handoff (12); key notes (13).
- **Worked examples (g01 layout).** 4: the jar and site `we-pw-2` (crossed "x = 5 only"). 6: original, |2x + 1| = 0 and |x − 2| = −3 (crossed "x = 5 or x = −1" for the second). Scenes 2, 3 and 5 are simulation stages with rows.
- **Memory aid.** Framed card: "Fold it up, then slide the line." Key: "|ax + b| = k: k > 0, two (ax + b = ±k); k = 0, one (the vertex); k < 0, none." Badge: the jar's V with a level line.
- **Visual surprise.** The part of the line below the axis folds up into the V, and as the level line slides down, its two meeting points slide together, merge at the vertex and vanish below it.
- **Site notes (pack section 8).** Both site examples (`we-pw-2` and card 06) have answers 5 and −1; only `we-pw-2` is used, so the repeat does not look like a pattern. The graphical solution and the |ax + b| graph's features are original (crosswalk: partial). No S11 item applies.
- **Plain meanings at first use.** Vertex ("the point of the V"); axis of symmetry ("the vertical line the V is the mirror image across"); graphing application ("graphing software or a calculator app"); level line ("the horizontal line y = k").
- **Attempts (pack questions, original).** A1: |2x + 3| = 7 algebraically, checked on a graph: x = 2 or x = −5, vertex at −3/2; crossed "x = −2" (2x = −7 + 3). A2 (Revision 2, four demands): y = |4 − 2x|: vertex (2, 0); solutions of |4 − 2x| = k: none for −1, one (x = 2) for 0, two (1/2 and 7/2) for 3; crossed "vertex at x = −2".
- **Mistake scene:** none separate. One case only (4 crossed); solutions accepted for k < 0 (6 crossed); the vertex at x = −b or b (A2 crossed); a V drawn below the axis or range all reals (2, positively); a sign slip moving b across (A1 crossed).
- **Cause chain taught, in order:** (1) |ax + b| keeps each output's size and makes it non-negative, so the part of y = ax + b below the axis reflects up and the graph is a V (2); (2) the V's lowest point is where ax + b = 0, and the two arms are mirror images across the vertical line through it (2, 3); (3) |A| = k means A is k from zero, so A = k or A = −k, two cases (4); (4) graphically the solutions are where the V reaches height k, one on each arm, matching the two cases (5); (5) a level line at 0 touches only the vertex, and one below 0 misses the V, because an absolute value is never negative (5, 6).
- **Entry knowledge (route):** w30 (|x| as distance, its piecewise definition and the graph y = |x|); w28 (graphing piecewise functions); w26 (symmetry); w17 (solving f(x) = k as an intersection with y = k).
- **Handoff (to math-a11-c01, "What does an average rate of change measure on a graph?").** Scene 12: the jar's V, y = |g − 350|, with its right arm from (350, 0) to (370, 20) highlighted; a coded rise-and-run triangle under it, "run 20" (blue) and "rise 20" (teal), "rise ÷ run = 1"; the jar as a badge; chips "Next: how fast does a graph change? Average rate of change" and "?". This is c01's proposed opening frame (c01 is not yet designed; open decision 1).
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Jar: |g − 350| = 20 ⟹ g = 330 or 370. "Within 20" (|g − 350| ≤ 20, 330 ≤ g ≤ 370) is the prize rule; only its boundary is solved.
  (b) y = |3x − 6|: vertex (2, 0), y-intercept 6, axis x = 2. |3x − 6| = 9 ⟹ x = 5 or x = −1; checks 9 and |−9| = 9.
  (c) y = |2x + 5|: vertex (−5/2, 0), y-intercept 5, mirror point (−5, 5).
  (d) |2x + 1| = 0 ⟹ x = −1/2. |x − 2| = −3: no solution; the false cases give 5 and −1, which fail (|5 − 2| = 3, |−1 − 2| = 3, not −3).
  (e) A1: x = 2 or −5; vertex −3/2. A2: vertex (2, 0); k = 3: x = 1/2 or 7/2.
  (f) The cases rule |A| = k ⟺ A = ±k holds for k ≥ 0 (for k = 0 the two cases coincide).
  (g) Pronunciations: "the absolute value of three x minus six"; "abs" (the app's word, spelled on screen); "minus two and a half"; "three seventy", "three thirty".
  (h) Windows: jar plot g 300 to 400, y −5 to 50; fold plot x −2 to 6, y −8 to 12; |2x + 5| plot −7 to 3 by −1 to 9; level-line plot x −3 to 7, y −4 to 12.

Main question: *A jar holds 350 jelly beans, and guesses within 20 win. Which guesses are exactly 20 off, and how do we know there aren't more? How do V-shaped graphs solve absolute value equations?*
Entry knowledge (w30, w28, w26, w17): |x| and its graph; piecewise graphs; symmetry; solving f(x) = k with a horizontal line.
Stops after: graphing y = |ax + b| by folding and with an app, its vertex, axis of symmetry, domain and range; solving |ax + b| = k by two cases and with a level line, including k = 0 and k < 0. No inequalities, no transformations.
Handoff: math-a11-c01: "the V's arm climbs 20 over 20 guesses: how fast does a graph change?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): inputs blue; outputs teal; the kept arm amber; the folded arm violet; the original line dashed grey; the level line dashed with a teal k; solutions green; mistake red, crossed slips only. Header strip "MATHEMATICS ADVANCED · WORKING WITH FUNCTIONS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: exactly twenty off
> Here's that jar of three hundred and fifty jelly beans. How far off is a guess g? It's the absolute value of g minus three fifty. Guesses within twenty of the true count win a lolly bag, so the judges need the boundary guesses, the ones exactly twenty off. On the graph, that's where the V reaches a height of **twenty**. We already know three thirty and three seventy work. But how would we find them without guessing, and how do we know there aren't any **more**? So how do V-shaped graphs solve absolute value equations?

Visual: opens on w30's final frame exactly (the jar `ma11-jellybean-jar-v1.png` with "350 beans", the plot of y = |g − 350| with its vertex ringed, the dashed level line y = 20 with "?" on each arm, two face-down guess cards, "Next: which guesses are exactly 20 off?"). On the first sentence the "Next" chip fades; heading "Exactly twenty off?". The equation chip "how far off = |g − 350|" (52 px, g blue). A grey tag "prize: within 20". On "twenty" `LevelLine` at k = 20 settles, its two meeting points pulsing on the amber right arm and the violet left arm. On "We already know" the guess cards flip to "330" and "370" and slide under the meeting points. On "more" a red-pencil "?" over the rest of the V. The chip "Find them, and prove there are no more?" moves to the top right.

### 2. graphing y = |ax + b|: fold it up
> Start with a graph we can already draw, y equals three x minus six. It's a straight line that crosses the x axis at two. Taking the absolute value keeps every output the same size, but makes it non-negative. So the part of the line above the axis stays put, and the part below the axis flips up, like folding the page along the x **axis**. Check a point. At x equals zero, the line is at minus six, and the V is at plus six. That makes a V. Its point, the vertex, is where three x minus six equals zero, at x equals **two**. The V is the mirror image of itself across the vertical line x equals two, its axis of symmetry. Its domain is all real numbers, and its range is y of zero or more, because an absolute value is never **negative**.

Visual: clear change to a large plot (x −2 to 6, y −8 to 12; 1,200 × 760 px), the jar as a 260 px badge at the top left. The line y = 3x − 6 draws dashed grey, label "y = 3x − 6", crossing the x axis at 2. `FoldUp`: the part for x ≥ 2 turns amber, hand tag "stays"; on "axis" the part below the axis lifts and reflects up along an amber crease on the x axis, landing as the violet arm, hand tag "fold up"; on "Check a point" (0, −6) on the dashed line and (0, 6) on the V mark, joined by a dashed amber arrow. Label "y = |3x − 6|" (teal, 52 px). On "two" the vertex (2, 0) rings, row "vertex: 3x − 6 = 0, x = 2", hand tag "vertex: ax + b = 0". On "axis of symmetry" a dashed vertical line at x = 2, hand tag "axis of symmetry", and the two arms flash as mirror images. On "negative" `AxisShadow`: blue domain bar "all real x", teal range bar from a closed dot at 0 upward "y ≥ 0", hand tag "never negative".

### 3. sketching from three facts, and with an app
> You can sketch any of these from three facts. Take y equals the absolute value of two x plus five. The vertex is where two x plus five equals zero. That's x equals minus five on two, so minus two and a **half**. The y intercept is the absolute value of five, which is five. Mirror that point across the axis of symmetry, x equals minus two and a half, and you get minus five, **five**. That works because points the same distance either side of the vertex give the same height. Join them into a V. A graphing app gives the same picture. Type abs, of two x plus five, and the V appears with its vertex at minus two and a **half**. That's a good way to check a sketch.

Visual: clear change to a plot at the left (x −7 to 3, y −1 to 9; 800 × 680 px). Rows at the top right, 52 px: "2x + 5 = 0"; on "half" (first) "x = −5/2", the vertex (−2.5, 0) marks, dashed axis x = −2.5. On "The y intercept" row "x = 0: y = |5| = 5", point (0, 5) on the amber side. On "five" (mirror) a violet dashed mirror arrow across the axis lands (−5, 5), row "mirror: (−5, 5)", hand tag "mirror the y-intercept"; the V draws through the three points (amber and violet arms). On "A graphing app" the reused phone (`maths/ma12-phone-v1.png`, 520 px tall) slides in at the right with `ScreenApp`: "abs(2x + 5)" types into the bar and the V draws on its axes; on "half" (second) the app's vertex tap reads "(−2.5, 0)", hand tag "check with an app".

### 4. solving with two cases
> Now solve without the graph. If the absolute value of A is twenty, then A is twenty units from zero, so A is twenty, or A is minus twenty. Those are the two cases. For the jar, g minus three fifty is twenty, so g is three seventy. Or g minus three fifty is minus twenty, so g is three **thirty**. Exactly two answers, so there are no others. Here's another one. Solve the absolute value of three x minus six equals nine. Case one, three x minus six is nine, so three x is fifteen, and x is **five**. Case two, three x minus six is minus nine, so three x is minus three, and x is minus **one**. Check both. Three times five, minus six, is nine, and three times minus one, minus six, is minus nine, whose absolute value is nine. Stopping at x equals five is the slip. There are two **cases**.

Visual: clear change to the g01 board. Top strip, 44 px: "|A| = k (k ≥ 0) ⟹ A = k or A = −k", with a mini number line showing 20 and −20 both "20 from 0", hand tag "two cases". Jar rows (44 px, the jar badge beside them): "g − 350 = 20 ⟹ g = 370" (amber); on "thirty" "g − 350 = −20 ⟹ g = 330" (violet). Then the task strip, 44 px: "Solve |3x − 6| = 9." (site `we-pw-2`). Rows, 52 px: amber "3x − 6 = 9, 3x = 15"; on "five" "x = 5"; violet "3x − 6 = −9, 3x = −3"; on "one" "x = −1". Check rows (44 px): "|3(5) − 6| = |9| = 9 ✓", "|3(−1) − 6| = |−9| = 9 ✓", hand tag "check both". Framed answer (green): "x = 5 or x = −1". On "cases" a red slip "x = 5 only" writes and is crossed, caption "two cases: ±9".

### 5. solving graphically: the level line
> Graphically, the absolute value of three x minus six equals nine asks where the V reaches height nine. Draw the horizontal line y equals nine. It meets the V at x equals minus one and x equals five, the same two answers as the **algebra**. Each arm gives one case. Now slide the line down. As long as k is positive, there are two **solutions**. At k equals zero, the line touches only the vertex, so there's one solution, x equals **two**. And below zero, the line misses the V completely, so there are no **solutions**. An absolute value can never be negative.

Visual: stage change to `LevelLine` on y = |3x − 6| (x −3 to 7, y −4 to 12; 1,200 × 760 px), the V's amber and violet arms. The dashed line y = 9 (k label teal); on "algebra" green dots at (−1, 9) and (5, 9) with blue x-readouts "−1" and "5", and the board's two framed rows from scene 4 slide in small beside each dot, the amber row by the amber arm and the violet row by the violet arm, hand tag "one on each arm". On "Now slide the line down" the k slider moves 9 → 4 → 0.5: the dots slide together, readout "solutions: 2"; on "solutions" (first) it holds at k = 4 (x = 2/3 and 10/3 shown as "0.67", "3.33" in grey). On "two" (x equals two) k = 0: one green dot at the vertex (2, 0), "solutions: 1", hand tag "touches the vertex". On "solutions" (second) k moves to −3: the line sits below the axis, no dots, "solutions: 0", hand tag "misses: none". On the last sentence the chip "|…| ≥ 0" (44 px).

### 6. worked example: k = 0 and k < 0
> Let's practise both special cases. Solve the absolute value of two x plus one equals zero. Only zero has absolute value zero, so two x plus one is zero, and x is minus a **half**. Just one solution, at the vertex. Now solve the absolute value of x minus two equals minus three. An absolute value is never negative, so there are no **solutions**. Splitting it into cases anyway gives five and minus one, but both fail the check. The absolute value of five minus two is three, not minus **three**. So the two cases only work when k is zero or more.

Visual: clear change to the g01 board with two short tasks, one under the other. Task 1, 44 px: "Solve |2x + 1| = 0." Rows, 52 px: "2x + 1 = 0"; on "half" "x = −1/2" (green frame), and a small plot at the right with y = |2x + 1| and a green dot at its vertex. Task 2: "Solve |x − 2| = −3." On "solutions" the row "|x − 2| ≥ 0, never −3: no solutions" (green frame), the small plot showing y = |x − 2| with the level line y = −3 below the axis, hand tag "|…| ≥ 0". On "three" a red slip "x − 2 = ±3, so x = 5 or x = −1" writes and is crossed, with the check "|5 − 2| = 3 ≠ −3" beside it, caption "k < 0: none". On the last sentence the top strip from scene 4 gains "(k ≥ 0)" ringed.

### 7. memory aid
> Here's the summary. Fold it up, then slide the line. If k is positive, there are two solutions, one on each arm. If k is zero, there's one, at the vertex. If k is negative, there are **none**. It's the same counting idea as the discriminant and a parabola, but here you can see it straight away.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the jar's V with a level line sliding down through 2, 1 and 0 meeting points. Main line, hand font 60 px: "Fold it up, then slide the line." On "none" the key line, 36 px: "|ax + b| = k: k > 0, two (ax + b = ±k); k = 0, one (the vertex); k < 0, none." On "the discriminant" a small grey w14 badge (the hammock's three states) with "2, 1, 0" under it. Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. Solve the absolute value of two x plus three equals seven algebraically, and check your answers on a graph. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Solve |2x + 3| = 7 algebraically, and check your answers on a graph." The full question stays on screen. Picture slot: empty axes (x −7 to 4, y −1 to 9). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> Case one, two x plus three is seven, so two x is four, and x is **two**. Case two, two x plus three is minus seven, so two x is minus ten, and x is minus **five**. On the graph, the V's vertex is at minus one and a half, and the line y equals seven meets it at minus five and two. If you got minus two, you added the three instead of subtracting it. Two x is minus seven minus three, which is minus **ten**.

Visual: the card shrinks to the top (30 px). Rows, 52 px: amber "2x + 3 = 7, 2x = 4"; on "two" "x = 2"; violet "2x + 3 = −7, 2x = −10"; on "five" "x = −5". On "On the graph" the V y = |2x + 3| draws on the picture's axes with its vertex (−1.5, 0), the level line y = 7 and green dots at −5 and 2. Framed answer (green): "x = 2 or x = −5". On "ten" a red slip "2x = −7 + 3 = −4, x = −2" writes and is crossed, caption "2x = −7 − 3 = −10". Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. For y equals the absolute value of four minus two x, state the vertex. Then say how many solutions the absolute value of four minus two x equals k has, when k is minus one, zero and three. Pause here to answer.

Visual: `QuestionCard`, 40 px: "For y = |4 − 2x|, state the vertex. How many solutions does |4 − 2x| = k have when k = −1, k = 0 and k = 3?" Picture slot: empty axes (x −1 to 5, y −2 to 6). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 11. feedback 2 (brief)
> Four minus two x is zero at x equals two, so the vertex is two, **zero**. For k equals minus one, there are no solutions. For zero, there's one, at x equals two. For three, there are two, a half and three and a **half**. Putting the vertex at minus two is the slip. Four minus two x is zero at plus **two**.

Visual: the card shrinks to the top. Rows, 52 px: "4 − 2x = 0 ⟹ x = 2"; on "zero" "vertex (2, 0)", the V drawing on the picture with its dashed axis (not spoken). On "For k equals minus one" `LevelLine` steps on the picture: k = −1 (no dots, "0"), k = 0 (one dot at the vertex, "1"), on "half" k = 3 (dots at 0.5 and 3.5, "2"). Framed answer (green): "vertex (2, 0); k = −1: none; k = 0: one (x = 2); k = 3: two (x = 1/2, 7/2)". On "two" (last) a red slip "vertex at x = −2" writes and is crossed, caption "4 − 2x = 0 at x = 2". Hold about 1 s.

### 12. handoff
> That's the end of this run on functions. So far, we've asked where a graph is, and what values it takes. The next question is how fast it changes. Look at the jar's V again. From three fifty to three seventy, it climbs twenty, over twenty guesses. That's a rise of one, for every one across. Next, the average rate of change, and what it measures on a **graph**.

Visual: the memory line shows small at the top (30 px), then fades. Board: the jar badge (300 px) at the top left; the jar's V y = |g − 350| (g 300 to 400) fills the right two-thirds, its right arm from (350, 0) to (370, 20) highlighted amber; a coded rise-and-run triangle under it: "run 20" (blue, along the g axis) and "rise 20" (teal, up), and on "one across" the row "rise ÷ run = 20 ÷ 20 = 1" (44 px). On "graph" chips "Next: how fast does a graph change? Average rate of change" and "?". Hold about 2 s. This is c01's proposed opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- y = |ax + b|: fold up the part of y = ax + b below the x-axis.
- Vertex where ax + b = 0; the axis of symmetry passes through it.
- Domain all real x; range y ≥ 0.
- |ax + b| = k, k > 0: ax + b = k or ax + b = −k. Check both.
- k = 0: one solution (the vertex). k < 0: no solutions.

Memory aid (framed card, right side, as in scene 7): *Fold it up, then slide the line.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and c01's proposed opening frame.

## Teaching checks

- **Does it explain causes?** Why the graph is a V: |…| reflects the negative outputs up (2). Why the vertex is where ax + b = 0: that is the only output of 0, the lowest possible (2, 3). Why the arms are mirror images: equal distances either side of the zero of ax + b give equal sizes (2, 3). Why two cases: two numbers are k from zero (4). Why each arm gives one case: on one arm ax + b is positive, on the other negative (5). Why k = 0 gives one and k < 0 none: |…| is never negative (5, 6).
- **Misconceptions addressed:** one case only (4 crossed); solutions for k < 0 (6 crossed); the vertex at −b or b (A2 crossed); the V below the axis, range all reals (2); a sign slip moving b across (A1 crossed); "always check" said and shown (4, 6).
- **Visual standard, item by item:** 1 the painted jar from the first frame, returning as badges in 2, 4 and 12; 2 a new stage every 35 to 55 s; 3 `FoldUp`, `LevelLine` with a live count and readouts, the app screen; 4 fixed colour roles; 5 large type; 6 hand tags; 7 g01 boards in 4 and 6; 8 framed card and five bullets; 9 the fold, and the two meeting points sliding together, merging at the vertex and vanishing.
- **One idea at a time:** the graph (2), sketching and the app (3), algebra (4), the graph's answer (5), the special cases (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 28 s and 22 s (Revision 2: A2 cut to four demands, the vertex and three solution counts).
- **Avoided double teaching:** |x| and its V (w30), piecewise graphs (w28), symmetry (w26) and f(x) = k as an intersection (w17) are recalled.
- **Syllabus coverage:** `ci0614b169` without an application (2, 3, A2; key notes 1 to 3), with an application (3), symmetry, domain and range (2, 3; taught there and in w30, so A2 no longer asks for them); `ci9fc969f0` algebraically (4, 6, A1; key notes 4, 5), graphically (1, 5, A1 check, A2).
- **Out of scope by design:** inequalities; transformations of |x| (g strand).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original, HSC style, 2 marks suggested, not an official marking scheme).** "Solve |2x + 3| = 7 algebraically, and check your answers on a graph."
Model answer: 2x + 3 = 7 gives x = 2; 2x + 3 = −7 gives x = −5. On the graph, y = |2x + 3| has its vertex at (−3/2, 0), and the line y = 7 meets it at x = −5 and x = 2. Classic mistake (crossed): "2x = −7 + 3, x = −2".

**Attempt 2 (scene 10; pack question 2, original, HSC style, 2 marks suggested).** "For y = |4 − 2x|, state the vertex. How many solutions does |4 − 2x| = k have when k = −1, k = 0 and k = 3?"
Model answer: vertex (2, 0). k = −1: none; k = 0: one (x = 2); k = 3: two (x = 1/2 and x = 7/2). Classic mistake (crossed): "vertex at x = −2".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Jar | 350 beans; |g − 350| = 20: g = 330, 370 | 1, 4, 12 |
| Fold | y = |3x − 6|: vertex (2, 0), axis x = 2, y-intercept 6 (line at −6); domain all real x; range y ≥ 0 | 2, 5 |
| Sketch | y = |2x + 5|: vertex (−5/2, 0); y-intercept 5; mirror (−5, 5) | 3 |
| Site `we-pw-2` | |3x − 6| = 9: x = 5, x = −1; checks |9| = |−9| = 9 | 4, 5 |
| Level line | k = 9: x = −1, 5; k = 4: x = 2/3, 10/3 (grey 0.67, 3.33); k = 0: x = 2; k = −3: none | 5 |
| Special cases | |2x + 1| = 0: x = −1/2; |x − 2| = −3: none; false cases 5, −1 give 3 | 6 |
| A1 | x = 2, −5; vertex −3/2; crossed −2 | 8, 9 |
| A2 | vertex (2, 0); k = −1: 0; k = 0: x = 2; k = 3: x = 1/2, 7/2 | 10, 11 |
| Handoff | (350, 0) to (370, 20): rise 20, run 20, 1 | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (16 Nov 2026, scratchpad `w24w31/verify.py`); Codex to re-check.

- |g − 350| = 20: 330, 370.
- |3x − 6| = 9: −1, 5; |3(5) − 6| = 9, |3(−1) − 6| = 9. 3x − 6 = 0 at 2; y-intercept 6.
- |3x − 6| = 4: x = 2/3, 10/3 (level line, grey).
- |2x + 5|: zero at −5/2; y-intercept 5; mirror of (0, 5) across x = −5/2 is (−5, 5); |2(−5) + 5| = 5.
- |2x + 1| = 0: −1/2. |x − 2| = −3: no solution; |5 − 2| = |−1 − 2| = 3.
- |2x + 3| = 7: −5, 2; zero of 2x + 3 at −3/2; slip −4/2 = −2.
- |4 − 2x|: zero at 2; = −1: none; = 0: 2; = 3: 1/2, 7/2.
- Card 06 (not used): |2x − 4| = 6: −1, 5.
- Handoff: 20/20 = 1.

## Memory aid check

- **"Fold it up, then slide the line."** Original. Meaning, as said in scene 7: graph y = |ax + b| by folding the negative part of y = ax + b up; solve |ax + b| = k by sliding the horizontal line y = k: two meeting points for k > 0, one (the vertex) for k = 0, none for k < 0. Assumptions checked: a ≠ 0 (otherwise the graph is a horizontal line, not a V); the count is for |ax + b| only. It helps a new case: |5 − x| = 0 has one solution, x = 5. Introduced after scenes 2 to 6. It pairs with w14's "Δ counts the crossings" (a horizontal line meeting a curve), which the reviewer may want to name.
- **Considered, not used:** "Plus or minus k" (the algebra only; it misses k < 0).

## Narration length estimate

Recounted for Revision 2 (16 Nov 2026). Counted by script with the build parser rules: **5,522 characters**, 13 scene headings. Characters per scene (1 to 13): 515, 726, 654, 774, 545, 534, 291, 140, 395, 220, 295, 358, 75.

At 13.3 characters per second the speech before the notes is about 410 s. Holds and settling: 2 countdowns of 10 s (20 s); short holds (memory card 2 s, feedback 1 s each, handoff 2 s) 6 s; about 25 s of settling (the fold, the three-point sketch and the app typing, the level line's sweep, and the special-case plots); the notes scene is 45 s. Total **about 506 s (8 min 26 s)**, inside the 5,500 to 6,800 band and about 64 s under the 570 s cap.

Reserve trims if the voiced take runs long: scene 4's spoken check of x = −1 (keep the check rows); scene 7's link to the discriminant (keep the badge).

## Scene list and build ids

Lesson key `m-a11w31` (route math-a11-w31). Explainer folder `src/explainer/lessons/math-a11-w31`; build inputs in `docs/production/claude-pm/lessons/math-a11-w31/` (at voicing).

In order (13 scene headings): hook-jar, fold-it-up, sketch-and-app, two-cases, level-line, special-cases, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (seconds from the estimate):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 42 s | 1 | w30's frame; the jar, the V and the level line at 20 |
| 42 to 101 s | 2 | FoldUp: y = 3x − 6 becomes y = |3x − 6| |
| 101 to 155 s | 3 | A sketch from three facts; the graphing app |
| 155 to 217 s | 4 | g01 board: two cases (the jar, then site we-pw-2) |
| 217 to 264 s | 5 | LevelLine sweeping k: 2, 1, 0 solutions |
| 264 to 307 s | 6 | g01 board: k = 0 and k < 0 |
| 307 to 331 s | 7 | Framed memory card |
| 331 to 443 s | 8 to 11 | Question cards and countdowns, then feedback |
| 443 to 472 s | 12 | The V's arm with rise and run |
| 472 to 517 s | 13 | Key notes with the framed card, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: w30's last frame continues into 1; 1 to 2 clear change (the fold); 2 to 3 clear change (the sketch, then the phone); 3 to 4 clear change to the g01 board; 4 to 5 stage change to the level line; 5 to 6 clear change; 6 to 7 camera pull back to the card; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return to scene 12's frame.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11-w31-learning-review.md`, `science_check` = `checks/m-a11-w31-maths-check.md`.

## Assets

Inspected before choosing (16 Nov 2026, `public/assets`, read only): `maths/ma12-coin-jar-v1.png` and `-full-v1.png` (Year 12 coin jars, their own anchor) and `maths/ma12-starter-jar-v1.png` (sourdough) are jars with other meanings, not reused. `maths/ma12-phone-v1.png` (viewed: plain phone, blank screen) is reused for the graphing app. No jelly bean or lolly plate exists.

Need (painted, new; see the Codex asset brief): `ma11-jellybean-jar-v1.png` (also needed for w30's final frame). Reused: `maths/ma12-phone-v1.png`.

Coded: the bean card, guess cards, every graph, the fold, the level line and slider, the app screen, the rise-and-run triangle, working boards, cards, countdown, hand tags, key notes.

### Studio kit use and additions

Uses: `MATH_ROLES`, `Role`, `HandTag`, `PlateImg`, `StudioPlot`, `StudioLevelLine`, `ParameterSlider`, `LiveReadoutBoard`, `AxisShadow` (w09), `ScreenApp` (finance-parts, as w13), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`, `GivensStrip`.

Additions:
1. **`FoldUp`** (new): draws y = ax + b dashed, then reflects the part below the x axis upward over a set time with a crease along the axis, colouring the kept and folded arms by role; marks the computed vertex and axis of symmetry. Check: every plotted point after the fold equals |ax + b|.
2. **`LevelLine`** (new; generalises w14's `CrossingCounter` to any plotted function): a horizontal line y = k with a slider, computed meeting points (dots and x-readouts), and a live count. Check: on |3x − 6| the count is 2 for k > 0, 1 at k = 0 (x = 2), 0 for k < 0.

## Codex asset brief (Maths A11 W31, a jelly bean jar; also w30's final frame)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-w31.md`, route entry math-a11-w31. Paint after the learning review and maths check pass and root gives the go-ahead, and before the w30 build (w30's final frame shows this plate). Save to `public/assets/maths/`. Transparent PNG with a true alpha channel, clean edges; ink and watercolour in the house style, matched to `maths/ma12-coin-jar-full-v1.png`; no text, numbers, labels, logos, brand names, people, hands, faces, glow or shadow. Never stretch.

1. `ma11-jellybean-jar-v1.png` (1200 × 1600 px): a tall clear glass jar with a plain metal screw lid, **filled to just below the lid with mixed jelly beans** in many colours (red, orange, yellow, green, purple, white, black), seen from the front at eye level; a small blank paper tag tied round the neck with string (code writes "350 beans" on it; sidecar box); standing on a short strip of a fete trestle table's checked cloth that fades to transparent.

Sidecar JSON (`ma11-jellybean-jar-v1.json`): the tag's text box (four corners). Report inspection on the paper background (`#f6f1e7`) at 300 px and 560 px tall and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-w31-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the two syllabus quotes match the route-inputs JSON exactly, and that `ci81e0ec50` is not claimed here once root moves it to w30.
3. Confirm the cases rule is always stated with k ≥ 0, and that k = 0 and k < 0 are handled (author note f).
4. Confirm site `we-pw-2` keeps its answers; card 06 is not used.
5. Confirm the app screen shows "abs(2x + 5)" and the vertex (−2.5, 0), and no brand name.
6. Confirm no absolute value inequality is solved ("within 20" is named only).
7. Confirm both attempts carry every demand and neither card nor picture shows an answer.
8. Confirm no em dash (U+2014), Australian spelling, the narration counts by script, and every bold cue quoted in its scene's Visual in spoken order; scene 1 opens on w30's final frame.

## YouTube metadata (draft)

Title: Absolute Value Graphs and Equations: The V Method | Year 11 Maths Advanced

(Title length: 74 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/working-with-functions/lesson04.sa.html

A jar holds 350 jelly beans, and guesses within 20 win. Which guesses are exactly 20 off, and how do we know there aren't more? Graph y = |ax + b| by folding a straight line up at the x-axis, find its vertex, axis of symmetry, domain and range, and check a sketch with a graphing app. Then solve |ax + b| = k with two cases, and see the same answers where the V meets the line y = k, including why k = 0 gives one solution and a negative k gives none. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Working with functions.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Graph y = |ax + b| with and without graphing applications, and identify its symmetry, domain and range"
"Solve absolute value equations of the form |ax + b| = k algebraically and graphically"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

Builds on: Absolute value and the graph of y = |x|; piecewise functions. Next: Average rate of change (Introduction to differentiation).

#Year11Maths #MathsAdvanced #AbsoluteValue #HSCScience

## Open decisions

- **1. The c01 join (root, and c01's future designer).** c01 has no pack or design yet. Scene 12 proposes c01's opening: the jar's V with a rise of 20 over a run of 20 on its right arm. If c01's designer chooses a different anchor, only scene 12's last two sentences and its frame change; the "how fast does it change?" question stays.
- **2. "Lolly bag" (voice pilot).** Australian usage; keep.
- **3. A2 feedback length (resolved, Revision 2).** The card now asks for the vertex and three solution counts (four demands); the axis, domain and range are taught in scene 2 and w30, so they were dropped from A2. Feedback about 22 s.

## Review notes

- Revision 2 (16 Nov 2026): the independent learning review (`../checks/m-a11-w31-learning-review.md`) is resolved; see the Revision 2 section. Next: Codex maths check and error check, then voicing and a build to grade A.
- Revision 1 has had no independent review. Next: student learning review (trace from w30 and w17; check that the fold makes "never negative" visible; that the jar's two cases and the level line's two dots are seen as the same two answers; that k = 0 and k < 0 follow from the picture; that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
- The fold and the level line carry the explanation; judge them at playback speed. Every dot, readout and count must be computed.
