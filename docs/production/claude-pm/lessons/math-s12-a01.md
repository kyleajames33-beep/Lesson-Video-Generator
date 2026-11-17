# Maths S12 A01: How do two lines on a graph solve a pair of simultaneous equations? Two driving schools, two tables, the crossing as the pair that fits both, a graphing app, and parallel or identical lines (design)

Status: Revision 1 (18 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Year 11 Advanced designs (`math-a11-e08.md`, `w14.md`, `g01.md`, each at Revision 2) and root's Standard rulings (`../checks/root-rulings-maths-standard-outline.md`, rulings 1 to 12). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 6,246 characters by script (see "Narration length estimate"), 14 scene headings, about 557 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: first video of Year 12 Mathematics Standard (2024), outline playlist order 1, Algebraic relationships; the first video of the Year 12 Standard playlist, so it opens cold with no title card and no previous frame. Shared by Standard 1 and Standard 2 (root ruling 2): it must be complete for a Standard 1 student, who solves by graphs only and skips a02a and a02b. Pre-design pack: `../pre-design/maths-standard/math-s12-a01.md`. Site lesson (read through the pack's quotations, read only): `maths-standard/year12/algebraic-relationships/lesson01.sa.html` (Simultaneous Linear Equations, SHA256 `f24d31f47587a9f1f357b5c0a6ee5606c03489e8e85575ad52f89e1a117d7f4a`; card 02's key idea, card 05's graphical method and `we-1` with the site's numbers; card 02's no-solution and same-line pairs). Route entry: `math-s12-a01` in `../../programme/maths-standard-route-inputs-1.json`. Visual system: maths studio kit; one new painted plate (a driving-school car); every table, graph, app screen and board coded.

Owner rules applied: 2024 syllabus only, content points cited by codename and exact wording; painted plates for real objects and code for diagrams; no people, hands or faces (the learner driver is never drawn; the schools are price cards beside a car); one main learner question; one reasoning stage at a time; every step said in words before its symbols (Standard pace); a short "why this matters" in real life (scene 3); worked example in the g01 layout with a framed answer and a crossed slip; two attempts with "Pause here to answer." and 10 s countdowns, the full worded question on screen; brief feedback with one crossed slip; five key notes with a framed memory card; everyday anchor (cars: two driving-school quotes); Australian spelling; no em dashes; money spoken naturally; conversational narration with commas for small pauses.

Syllabus content points (Mathematics Standard 11-12 (2024), Year 12, Algebraic relationships, Simultaneous linear equations), quoted from `../../programme/maths-standard-route-inputs-1.json`:

Standard 2:
- `cibad31b48`: "Graph two linear equations and identify the point of intersection, with and without using graphing applications"
- `ci32b65c45`: "Solve a pair of simultaneous linear equations using graphical and algebraic methods" (shared: this video owns the graphical method; a02a and a02b own the algebraic methods)

Standard 1:
- `ci119862f0`: "Graph two linear equations using a table of values or a graphing application and identify the point of intersection"
- `ci8debaa08`: "Solve a pair of simultaneous linear equations by finding the point of intersection of their graphs, with and without graphing applications"
- `ci8615a466`: "Determine and interpret the point of intersection of two linear graphs in a variety of practical contexts" (shared with a03: this video gives the two-quotes reading; a03 builds equations from words)

Sources: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faf5e47f4a (Standard 2) and https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa493dfdfb (Standard 1)

**Boundary:** opens cold on the driving-school car and two price cards (no previous frame). Recalls Year 11 (y = mx + c with m the gradient and c the y-intercept; a straight line from a table; substituting to check a point) in a phrase or grey chip each. Teaches: two quotes as two linear equations; a table of values for each, with the one shared row; both lines on one set of axes from their tables, crossing at one point; the point of intersection as the only pair on both lines, so the only pair that makes both equations true (simultaneous: true at the same time); reading it as a pair and checking it in both equations; what the crossing means in context, with the cheaper side either way; site `we-1` by tables, graph and check; the same crossing in a graphing app, with the HSC fact that Standard calculators do not graph; parallel lines (no solution) and the same line twice (infinitely many). Stops at the graphical method. Not taught: substitution and elimination (a02a, a02b); writing equations from words (a03); break-even (a04a).

## Decisions

- **Anchor: two driving-school quotes (painted plate, live).** School A: a $90 booking fee plus $55 a lesson; School B: no fee, $70 a lesson. Neither is cheaper for every number of lessons, so the student needs the crossing, not a rule of thumb. It is a decision many Year 12 students face (getting their licence), it uses money, and the crossing (6 lessons, $420) is on a grid line, so the graphical method is exact here. Cars; the pack's anchor 1, moved from its practice question into the teaching (the pack's numbers, SymPy-checked). Drawn as a plate of a driving-school car with a blank roof sign beside two coded price cards; no person. No Year 11 or Year 12 Maths design uses a driving school (pack grep, 18 Nov). Attempt 2 uses the pack's anchor 2 (removalists) with original numbers.
- **Join.** First video of the Year 12 Standard playlist: cold open, no title card, the plate and the two price cards solid from the first frame.
- **Standard 1 completeness (root rulings 2 and 9).** Every step uses tables, a graph or a graphing app; no algebraic solving method appears. The check by substitution is Year 11 substitution, not a solving method. The handoff carries a grey screen chip for Standard 1 viewers (see Handoff).
- **Graphing applications (syllabus wording).** Scene 6 is a coded, unbranded graphing-app screen (`ScreenApp`, graph mode) with an input bar and an intersection tool. One sentence says HSC Standard calculators do not graph, so exam questions give the graph or ask for one drawn from tables (site card 05).
- **Simulations (standard item 3).**
  1. **Table-to-plot flight** (scenes 2, 3, 5; new small option on `StudioCandidateTable`): each table row lights, and its point flies to the grid along one coordinate transform; the shared row lights amber in both tables at once.
  2. **Linked riders** (scene 3; `LinkedRiders` with `LiveReadoutBoard`): one vertical rider at n moves from 0 to 10 lessons across both lines; readouts "A: $…", "B: $…" and "difference" update live; the difference shrinks to $0 at n = 6, then changes sign, and the cheaper side shades.
  3. **App intersection** (scene 6; `ScreenApp`): both equations typed, both lines drawn, the intersection tool snapping to (2, 3).
- **Colour roles (fixed for a01 to a03).** First line and its equation, table and readouts **blue** (School A; y = 2x − 1); second line **teal** (School B; y = −x + 5); the crossing and its pair **amber**; check ticks and answer **green**; parallel and same-line thumbnails grey and violet; mistake **red**, crossed slips only. The cheaper-side shading is a faint wash of the cheaper line's colour.
- **Large type, handwritten voice.** Current line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; all text above y = 950 (the bottom 12 per cent stays clear). Hand tags: "same row", "on both lines", "B catches up", "B cheaper", "A cheaper", "both true", "a pair, not one number", "at least 2 points, ruled", "same gradient: never meet", "same line: every point", "check both". At most two live at once.
- **Stage changes (standard item 2), about every 30 to 60 s.** The car and two quotes (1); two tables (2); the graph with riders (3); the "both true" card (4); g01 board (5); the app (6); two thumbnails (7); framed card (8); question cards (9 to 12); the between-the-lines frame for a02a (13); key notes (14).
- **Worked example (g01 layout).** Scene 5: site `we-1`, y = 2x − 1 and y = −x + 5, tables (0, −1), (1, 1), (2, 3) and (0, 5), (2, 3), (4, 1), crossing (2, 3), checked in both. Crossed slip: "checked in one equation only" (caption "a point can sit on one line and miss the other").
- **Memory aid.** Framed card: "Where the lines cross, both equations are true." Key line: "Read the pair (x, y). Check it in both."
- **Visual surprise.** The linked rider: the readout "difference" counts down to exactly $0 at 6 lessons and flips sign as the rider passes the crossing, and the shading swaps sides at that instant.
- **Site notes (pack section 8).** No site error in lesson01. Card 02's two special pairs (x + y = 2 with x + y = 3; x + y = 2 with 2x + 2y = 4) are used in scene 7, the first rewritten as y = 2 − x and y = 3 − x so the equal gradients show. The café hook, `we-2` and `we-3` belong to a02a and a02b. SA 3 (mobile plans per minute) is replaced by the driving schools.
- **Plain meanings at first use.** Table of values ("a list of x values and the y each one gives", recalled); point of intersection ("the place where two lines meet"); simultaneous equations ("two equations that have to be true together, at the same time"); solution ("the pair of numbers that makes both true"); parallel ("same gradient, so they never meet"); infinitely many ("every point on the line works").
- **Attempts (pack questions).** A1 (pack question 1): tables for y = x + 2 and y = 8 − 2x at x = 0 to 3; crossing (2, 4), checked. Crossed "x = 2" (caption "give the pair"). A2 (pack anchor 2, original numbers): removalist A $150 call-out plus $90 an hour, B $120 an hour; graph supplied; crossing (5, 600); three-hour move A $420, B $360, B cheaper by $60. Crossed "(5, 600)" with no meaning (caption "say what it means").
- **Mistake scene:** none separate. Checking in one equation (5 crossed); a single number for the answer (4 tag, A1 crossed); one point per line or freehand lines (5 tag "at least 2 points, ruled"); coordinates without meaning (A2 crossed).
- **Cause chain taught, in order:** (1) each quote gives a cost for every number of lessons, a straight line, so neither school is always cheaper (1, 3); (2) every point on a line makes its equation true, so a point on both lines makes both true, and lines that cross once share exactly one point (4); (3) so the crossing is the solution, a pair, which substitution confirms (4, 5); (4) the graph shows which side each school is cheaper (3); (5) equal gradients never meet, so no solution, and the same line twice shares every point (7).
- **Entry knowledge (route):** Year 11 Standard l02 (y = mx + c; a straight-line graph from a table, with and without an app); l01 (gradient and y-intercept); f01 (substituting values). Recalled in a phrase or grey chip; no Year 11 Standard video is assumed to exist yet (root ruling 1 builds Year 12 first).
- **Handoff (to math-s12-a02a, "How do we solve simultaneous equations exactly by substitution?").** Scene 13: a coded frame, no plate. Square-gridded axes x −1 to 4, y 0 to 7 (one grid line per unit); y = 2x + 1 (blue, labelled) and y = 6 − 2x (teal, labelled) crossing at (1.25, 3.5), ringed amber, with a zoom circle (2× magnified inset, upper right) on the crossing showing it between the grid lines x = 1 and x = 2, and between y = 3 and y = 4; chip "x ≈ 1.2? 1.3?" beside the inset; chips "exact answer, no drawing?", "Next: solving with algebra" and "?"; a small grey chip at the bottom left (30 px, above y = 950) "Standard 1: your next video is 'Equations from words'". No exact value is shown. This is a02a's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) A: C = 90 + 55n; B: C = 70n; n = 0, 2, 4, 6, 8, 10 give A 90, 200, 310, 420, 530, 640 and B 0, 140, 280, 420, 560, 700; crossing (6, 420); at 10 lessons A $640, B $700.
  (b) `we-1`: (2, 3); tables as the site.
  (c) Parallel: y = 2 − x and y = 3 − x (site's x + y = 2 and x + y = 3); same line: x + y = 2 and 2x + 2y = 4.
  (d) A1: 2, 3, 4, 5 and 8, 6, 4, 2; (2, 4). A2: 150 + 90h = 120h at h = 5, $600; at 3 h, A 420, B 360.
  (e) Handoff: 2x + 1 = 6 − 2x at x = 5/4, y = 7/2 (not shown; a02a's opening).
  (f) Pronunciations: "y equals two x minus one"; "y equals minus x plus five"; "C equals ninety plus fifty-five n"; "two, three" for the point.
  (g) Windows: driving schools n 0 to 10 lessons, C $0 to $750 (grid every 1 lesson and $50); `we-1` x −1 to 5, y −2 to 6, equal units; thumbnails x −1 to 4, y −1 to 4; A2 h 0 to 8 hours, C $0 to $1,000 (grid every 1 hour and $100).

Main question: *Two driving schools quote different prices. When do they cost the same, and how do two lines on a graph solve a pair of equations at once?*
Entry knowledge (Year 11 Standard l01, l02, f01): y = mx + c; a straight line from a table; substituting to check a point.
Stops after: the point of intersection read from tables, a hand-drawn graph or an app; why it solves both; its meaning in context; parallel and identical lines. No algebraic method.
Handoff: math-s12-a02a: "two lines cross between the grid lines; can we find the exact crossing without drawing?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): first line blue; second line teal; crossing amber; answer green; mistake red. Header strip "MATHEMATICS STANDARD · ALGEBRAIC RELATIONSHIPS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: two driving schools
> You've got your learner licence, and you need driving lessons. Two driving schools send you quotes. School A charges a ninety dollar booking fee, then fifty-five dollars a lesson. School B has no booking fee, but charges seventy dollars a lesson. So which one is cheaper? A has the cheaper lessons, but B has nothing to pay up front. The honest answer is, it **depends** on how many lessons you'll need. Draw both prices as lines on one graph, and where they cross tells us when the two schools cost the same. So how do two lines on a graph solve a pair of equations at **once**?

Visual: opens cold (no title card). The painted car `ms12-driving-school-car-v1.png` (about 1,100 px wide) at the left on the paper ground, solid from the first frame. Two coded quote cards at the right, 44 px: "School A: $90 booking fee + $55 a lesson" (blue frame) and "School B: no fee, $70 a lesson" (teal frame). On "cheaper lessons" the "$55" and "$70" pulse; on "nothing to pay up front" the "$90" and "no fee" pulse. On "depends" a hand tag "depends: how many lessons?" between the cards. On "lines" a faint empty set of axes slides in under the cards (no lines yet). On "once" heading "Simultaneous equations: solving with graphs" writes on, and the question chip "When do they cost the same?" moves to the top right.

### 2. two quotes, two tables
> First, turn each quote into an equation. Let n be the number of lessons, and C the total cost in dollars. School A is ninety, plus fifty-five for each lesson, so C equals ninety plus fifty-five n. School B is just seventy for each lesson, so C equals seventy **n**. Now make a table of values for each, using the same numbers of lessons, zero, two, four, and so on up to ten. For School A, zero lessons still costs ninety dollars, then two hundred, three hundred and ten, four hundred and **twenty**. For School B, it's zero, a hundred and forty, two hundred and eighty, then four hundred and twenty as well. At six lessons, both tables give four hundred and twenty dollars. That's the only row the two tables **share**.

Visual: stage change: the car shrinks to a 260 px badge at the top left, the two quote cards to 30 px strips beside it. Equation strips, 52 px: "School A: C = 90 + 55n" (blue) writes word by word as spoken ("90" over "booking fee", "55n" over "$55 a lesson"); on "n" (first bold) "School B: C = 70n" (teal). Grey chip "Year 11: y = mx + c". Two tables (`StudioCandidateTable`, 44 px), side by side: "n: 0, 2, 4, 6, 8, 10" in each, the cost rows filling cell by cell. Blue: 90, 200, 310, 420 (on "twenty"), then 530, 640 fill quietly. Teal: 0, 140, 280, 420, 560, 700 as spoken, the last two quietly. On "share" the n = 6 column rings amber in both tables at once, hand tag "same row".

### 3. two lines, one crossing
> Now plot each table on one set of axes, with lessons across, and cost up the side. Each school's points sit on a straight line, so rule a line through them. School A's line starts higher, at ninety, but climbs more slowly. School B's starts at zero, and climbs faster. So B's line catches up, and the two lines cross at one point, six, four hundred and **twenty**. That point is called the point of intersection, the place where two lines meet. To the left of the crossing, B's line is lower, so for fewer than six lessons, B is **cheaper**. To the right, A's line is lower. If you need ten lessons, A costs six hundred and forty dollars and B costs seven hundred, so A saves you sixty **dollars**.

Visual: stage change: the tables shrink to a 30 px strip under the badge; large axes (1,300 × 700 px), n 0 to 10 ("lessons"), C $0 to $750 ("cost ($)"), grid every lesson and every $50. The table-to-plot flight: each blue column flies to its point, then each teal one; on "rule a line" both lines draw through their points, labelled "A: C = 90 + 55n" (blue) and "B: C = 70n" (teal). On "starts higher" the intercepts (0, 90) and (0, 0) ring; on "climbs faster" hand tag "B catches up". On "twenty" the crossing (6, 420) rings amber, label "(6, 420)". On "point of intersection" chip "point of intersection: where two lines meet" (44 px). Then the linked rider (simulation 2) runs from n = 0 to 10 (about 4 s): `LiveReadoutBoard` at the right, 52 px, "n", "A: $", "B: $", "difference A − B: $" (90 at n = 0, falling to 0 at n = 6, then negative). On "cheaper" (first) the rider pauses at n = 4 (A $310, B $280) and the region left of n = 6 shades faint teal, hand tag "B cheaper". On "dollars" the rider rests at n = 10 (A $640, B $700), the region right of n = 6 shades faint blue, hand tag "A cheaper", and row "10 lessons: A saves $60" (44 px).

### 4. why the crossing solves both
> Here's why the crossing matters. Every point on a line makes that line's equation true. So a point on School A's line fits A's equation, and a point on B's line fits B's equation. The crossing is the only point on both lines, so it's the only pair that makes both equations true at the same **time**. That's what simultaneous equations means, two equations that have to be true together. And the solution is a pair of numbers, not one number. Here, n equals six and C equals four hundred and twenty. Check it in both. Ninety plus fifty-five times six is four hundred and **twenty**. Seventy times six is four hundred and twenty too. Both are true, so the crossing is the **solution**.

Visual: camera continue on the same graph (the shading fades). A probe dot rides School A's line; a blue tick and "fits A" appear at each stop; then on School B's line "fits B" (teal). On "time" the dot lands on the crossing and both ticks appear together, hand tag "on both lines". Chip, 44 px: "simultaneous: true at the same time". Row, 52 px: "solution: n = 6, C = 420" with "(6, 420)" amber, hand tag "a pair, not one number". Check rows, 52 px, at the right: "A: 90 + 55 × 6 = 90 + 330" and on "twenty" "= 420 ✓" (green); "B: 70 × 6 = 420 ✓" (green). On "solution" the pair frames green, hand tag "both true".

### 5. worked example: tables, graph, check
> Here's the method on its own. Solve y equals two x minus one, and y equals minus x plus five, graphically. Step one, a small table for each line. For y equals two x minus one, x equals zero, one and two give minus one, one and **three**. For y equals minus x plus five, x equals zero, two and four give five, three and **one**. Step two, **plot** at least two points for each line, and **rule** a line through them. Step three, read where they cross. They meet at two, **three**, so x equals two and y equals three. Step four, check in both equations. Two times two, minus one, is three. Minus two, plus five, is three. Both **work**. Checking in only one equation is the slip. A point can sit on one line, and miss the **other**.

Visual: clear change to the g01 board. Task strip, 44 px: "Solve y = 2x − 1 and y = −x + 5 graphically." (site `we-1`). Givens card, 44 px: "line 1: y = 2x − 1" (blue), "line 2: y = −x + 5" (teal). Plot at the right (700 × 640 px, x −1 to 5, y −2 to 6, equal units, labelled). Rows, 52 px: two small tables writing as spoken; on "three" (first) the blue table "x: 0, 1, 2 / y: −1, 1, 3"; on "one" the teal table "x: 0, 2, 4 / y: 5, 3, 1"; the (2, 3) cells ring amber in both, hand tag "same row". On "plot" the points fly to the plot; on "rule" both lines draw, hand tag "at least 2 points, ruled". On "three" (second bold) the crossing rings amber, row "x = 2, y = 3". Check rows: "2(2) − 1 = 3 ✓", "−(2) + 5 = 3 ✓"; on "work" the framed answer (green): "(2, 3): x = 2, y = 3". On "other" a red slip "checked in line 1 only" writes small at the right and is crossed (caption "a point can sit on one line and miss the other"), while a stray point (1, 1) on the blue line only flashes grey, off the teal line.

### 6. with a graphing app
> You can also use a graphing app. Type in both equations, and the app draws both lines. Tap the point where they cross, and it shows two, **three**, the same answer. An app is quick, and it can read a crossing even between grid lines. But in the HSC, Standard calculators don't draw graphs. So exam questions either give you the graph, or ask you to draw it from tables, as we just **did**. Either way, find the one point on both lines, and write it as a pair.

Visual: stage change to the graphing-app screen (`ScreenApp`, 1,150 × 760 px, unbranded input bar, x −1 to 5, y −2 to 6). Inputs type "y = 2x − 1" (blue) and "y = −x + 5" (teal); each line draws. The intersection tool's cursor slides to the crossing; on "three" the app label "(2, 3)" (amber) snaps on. Grey chip "Year 11: graphing apps". On "Standard calculators" a coded calculator badge (`ma12-calculator-v1.png`, 220 px) with a grey chip "HSC Standard: no graphing calculator". On "did" two small chips: "exam gives the graph" and "or draw it from tables". Hand tag "one point on both lines".

### 7. no crossing, or every point
> Do two lines always cross exactly once? Not quite. If two lines have the same gradient but different y-intercepts, like y equals two minus x, and y equals three minus x, they're parallel. They never meet, so there's no **solution**. No pair can make both true. And if two equations describe the same line, they share every point. Take x plus y equals two, and two x plus two y equals four. The second is just the first, doubled, so every point on the line works, and there are infinitely many **solutions**.

Visual: clear change: two thumbnails side by side (each 760 × 560 px, x −1 to 4, y −1 to 4). Left: y = 2 − x (grey) and y = 3 − x (violet) draw parallel, a gap arrow between them; gradient tags "gradient −1" on both; on "solution" (first) the crossing counter reads "0", hand tag "same gradient: never meet", label "no solution". Right: x + y = 2 draws (grey); on "doubled" the row "2x + 2y = 4 → x + y = 2" writes (each term halved), and the second line draws exactly on top (violet over grey); on "solutions" dots run all along the line, counter "every point", hand tag "same line: every point", label "infinitely many solutions".

### 8. memory aid
> Here's the idea to keep. Two lines, one crossing, one pair. The point of intersection is the only pair that fits both equations, so read it as x and y together, then check it in **both**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the driving-school graph small, the crossing ringed amber with a blue and a teal tick. Main line, hand font 56 px: "Where the lines cross, both equations are true." On "both" the key line, 40 px: "Read the pair (x, y). Check it in both." Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. Complete a table of values for x equals zero, one, two and three, for y equals x plus two, and for y equals eight minus two x. Draw both lines on the same axes. Write down the point of intersection, and check it in both equations. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Complete a table of values for x = 0, 1, 2, 3 for each of y = x + 2 and y = 8 − 2x. Draw both lines on the same axes. Write down the point of intersection and check it in both equations." The full question stays on screen. Picture slot: two empty tables (x: 0, 1, 2, 3; y blank) and empty axes, x −1 to 4, y 0 to 9. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> The first table gives two, three, four, five. The second gives eight, six, four, two. Both tables have the point two, **four**, so that's where the lines cross. Check: two plus two is four, and eight minus four is **four**. Writing only x equals two is the slip. The answer is a pair, so give y as **well**.

Visual: the card shrinks to the top (30 px). The tables fill: blue "2, 3, 4, 5", teal "8, 6, 4, 2"; on "four" (first) the (2, 4) cells ring amber, both lines draw and the crossing rings. Rows, 44 px: "2 + 2 = 4 ✓"; on "four" (second) "8 − 2(2) = 4 ✓", framed answer (green) "(2, 4)". On "well" a red slip "x = 2" writes and is crossed (caption "give the pair"). Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. Two removalists quote for moving out of a rental. Company A charges a hundred and fifty dollar call-out fee, plus ninety dollars an hour. Company B charges a hundred and twenty dollars an hour, with no call-out fee. The graph shows both costs. Write down the point of intersection, explain what it means, and say which company is cheaper for a three-hour move, and by how much. Pause here to answer.

Visual: `QuestionCard`, 40 px: "Removalist A charges a $150 call-out fee plus $90 an hour. Removalist B charges $120 an hour with no call-out fee. The graph shows the cost of each for 0 to 8 hours. (a) Write down the point of intersection. (b) Explain what it means. (c) Which company is cheaper for a 3-hour move, and by how much?" Picture slot: the two lines on axes h 0 to 8 ("hours"), C $0 to $1,000 ("cost ($)"), grid every hour and $100, labelled "A" (blue) and "B" (teal) at their right ends only; the crossing is not marked. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 12. feedback 2 (brief)
> The lines cross at five, six **hundred**. So a five-hour move costs six hundred dollars with either company. For three hours, A costs a hundred and fifty plus two hundred and seventy, which is four hundred and twenty dollars, and B costs three hundred and sixty. So B is cheaper, by sixty **dollars**. Giving only the coordinates is the slip. Say what they mean, five hours, six hundred dollars **each**.

Visual: the card shrinks to the top. On "hundred" the crossing rings amber, label "(5, 600)". Row, 44 px: "5 hours: both cost $600". A rider at h = 3: "A: 150 + 90 × 3 = $420" (blue), "B: 120 × 3 = $360" (teal); on "dollars" framed answer (green) "3 hours: B cheaper by $60". On "each" a red slip "(5, 600)" alone writes and is crossed (caption "say what it means"). Hold about 1 s.

### 13. handoff
> So a graph solves two equations at once, wherever the lines cross. But look at this pair, y equals two x plus one, and y equals six minus two x. They cross between the grid lines. Is x one point two? One point three? The graph can only give an estimate. Is there a way to find the exact answer, without drawing anything at all? That's **next**.

Visual: the memory line shows small at the top (30 px), then fades. Board clear to the coded handoff frame (no plate): square-gridded axes x −1 to 4, y 0 to 7; on "this pair" y = 2x + 1 (blue, labelled) and y = 6 − 2x (teal, labelled) draw; the crossing at (1.25, 3.5) rings amber; on "between the grid lines" a 2× zoom inset (upper right) shows the crossing between x = 1 and x = 2 and between y = 3 and y = 4; on "one point three" the chip "x ≈ 1.2? 1.3?" beside the inset. On "next" chips "exact answer, no drawing?", "Next: solving with algebra" and "?", and a small grey chip at the bottom left (30 px, above y = 950) "Standard 1: your next video is 'Equations from words'". Hold about 2 s. No exact value is shown. This is a02a's opening frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- The point of intersection is the pair (x, y) on both lines.
- It is the solution of both equations: check it in both.
- Draw each line from a table: at least two points, ruled.
- Parallel lines: no solution. Same line: infinitely many.
- In context, say what the pair means, with units.

Memory aid (framed card, right side, as in scene 8): *Where the lines cross, both equations are true.* Key: *Read the pair (x, y). Check it in both.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 13's frame exactly. This is the final frame and a02a's opening frame.

## Teaching checks

- **Does it explain causes?** Why neither school is always cheaper: a fee against a dearer rate (1, 3). Why the crossing solves both: every point on a line fits its equation, and only the crossing is on both (4). Why it is a pair: a point has two coordinates (4). Why check both: a point can lie on one line only (5). Why parallel lines give nothing: equal gradients never meet (7). Why the same line gives infinitely many: every point is shared (7).
- **Misconceptions addressed:** one number for the answer (4 tag, A1 crossed); checking one equation (5 crossed); one point or freehand lines (5 tag); coordinates without meaning (A2 crossed).
- **Visual standard, item by item:** 1 the car and quotes from the first frame, returning as a badge in 2 and 3; 2 a new stage every 30 to 60 s; 3 the table-to-plot flight, the linked rider with a live difference, the app's intersection tool; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 board in 5; 8 framed card and five bullets; 9 the difference readout hitting $0 at the crossing as the shading swaps sides.
- **One idea at a time:** quotes to tables (2), graph and meaning (3), why it solves both (4), method alone (5), app (6), special cases (7).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 22 s and 29 s.
- **Avoided double teaching:** Year 11 y = mx + c, graphs from tables and substitution are recalled in grey chips.
- **Standard 1 path:** complete without algebra; the handoff chip points Standard 1 to a03.
- **Syllabus coverage:** `cibad31b48` (3, 5, 6, A1; key notes 1, 3); `ci32b65c45` graphical part (3 to 7, A1, A2; key notes 2, 4); `ci119862f0` (2, 3, 5, 6, A1; key note 3); `ci8debaa08` (3 to 6, A1, A2; key notes 1, 2); `ci8615a466` (3, 4, A2; key note 5).
- **Out of scope by design:** substitution and elimination (a02a, a02b); equations from words (a03); break-even (a04a).

## Practice questions and model answers

**Attempt 1 (scene 9; pack question 1, original, HSC style, 3 marks suggested, not an official marking scheme).** "Complete a table of values for x = 0, 1, 2, 3 for each of y = x + 2 and y = 8 − 2x. Draw both lines on the same axes. Write down the point of intersection and check it in both equations."
Model answer: y = x + 2: 2, 3, 4, 5; y = 8 − 2x: 8, 6, 4, 2. The lines cross at (2, 4). Check: 4 = 2 + 2 ✓ and 4 = 8 − 2(2) ✓. Classic mistake (crossed): "x = 2".

**Attempt 2 (scene 11; original, HSC style, 3 marks suggested).** "Removalist A charges a $150 call-out fee plus $90 an hour. Removalist B charges $120 an hour with no call-out fee. The graph shows the cost of each for 0 to 8 hours. (a) Write down the point of intersection. (b) Explain what it means. (c) Which company is cheaper for a 3-hour move, and by how much?"
Model answer: (a) (5, 600). (b) A 5-hour move costs $600 with either company. (c) A: 150 + 90 × 3 = $420; B: 120 × 3 = $360; B is cheaper by $60. Classic mistake (crossed): "(5, 600)" with no meaning.

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Driving schools | A: C = 90 + 55n; B: C = 70n; tables at n = 0 to 10 step 2: A 90, 200, 310, 420, 530, 640; B 0, 140, 280, 420, 560, 700 | 1 to 4 |
| Crossing | (6, 420); 90 + 330 = 420; 70 × 6 = 420; at n = 4 A 310, B 280; at n = 10 A 640, B 700, A saves $60 | 3, 4 |
| Site `we-1` | y = 2x − 1: (0, −1), (1, 1), (2, 3); y = −x + 5: (0, 5), (2, 3), (4, 1); crossing (2, 3) | 5, 6 |
| Special cases | y = 2 − x and y = 3 − x (no solution); x + y = 2 and 2x + 2y = 4 (same line) | 7 |
| A1 | 2, 3, 4, 5 and 8, 6, 4, 2; (2, 4) | 9, 10 |
| A2 | 150 + 90h = 120h at h = 5, $600; 3 h: A $420, B $360, B cheaper by $60 | 11, 12 |
| Handoff | y = 2x + 1 and y = 6 − 2x cross between grid lines (exact (1.25, 3.5) not shown) | 13 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (18 Nov 2026, scratchpad `s12a/verify.py`, run with `python -I`); Codex to re-check.

- 90 + 55n = 70n at n = 6; C = 420. 90 + 55n at n = 0, 2, 4, 6, 8, 10: 90, 200, 310, 420, 530, 640; 70n: 0, 140, 280, 420, 560, 700.
- y = 2x − 1 and y = −x + 5 meet at (2, 3); 2x − 1 at 0, 1, 2: −1, 1, 3; −x + 5 at 0, 2, 4: 5, 3, 1.
- x + 2 at 0 to 3: 2, 3, 4, 5; 8 − 2x: 8, 6, 4, 2; meet at (2, 4).
- 150 + 90h = 120h at h = 5; 150 + 450 = 600; 150 + 270 = 420; 120 × 3 = 360.
- 2x + 1 = 6 − 2x at x = 5/4, y = 7/2.

## Memory aid check

- **"Where the lines cross, both equations are true."** with key line **"Read the pair (x, y). Check it in both."** Original. Meaning, as said in scene 8: the point of intersection is on both lines, so its coordinates satisfy both equations; it is one pair, checked by substituting into each. Assumptions checked: the lines cross once (scene 7 names the parallel and same-line cases, and key note 4 keeps them); "true" means the pair satisfies the equation. It helps a new case: if y = 3x and y = x + 4 cross at (2, 6), then 6 = 3(2) and 6 = 2 + 4 both hold. Introduced after scenes 3 to 7.
- **Considered, not used:** "X marks the spot" (memorable, but it suggests a single number x, the very slip A1 targets).

## Narration length estimate

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; scratchpad `s12a/count.py`, which reproduces e08's 5,632): **6,246 characters**, 14 scene headings. Characters per scene (1 to 14): 571, 708, 686, 672, 702, 451, 499, 183, 263, 295, 409, 392, 340, 75.

At 13.3 characters per second the speech is about 470 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the table flights (2, 3, 5), the linked rider (3), the app's intersection (6) and the thumbnails (7) about 22 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 557 s (9 min 17 s)**, 13 s under the 570 s cap; speech and holds before the notes about 512 s. Feedback speech: about 22 s and 29 s.

Reserve trims if the voiced take runs long (the margin is 13 s): scene 3's "To the right, A's line is lower." (the shading carries it); scene 7's "No pair can make both true." (the counter shows 0); scene 2's "using the same numbers of lessons, zero, two, four, and so on up to ten" (the tables show it).

## Scene list and build ids

Lesson key `m-s12a01` (route math-s12-a01). Explainer folder `src/explainer/lessons/math-s12-a01`; build inputs in `docs/production/claude-pm/lessons/math-s12-a01/` (at voicing).

In order (14 scene headings): hook-driving-schools, two-tables, two-lines-crossing, why-both, worked-graphical, graphing-app, special-cases, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 45 s | 1 | The car and two quotes |
| 45 to 100 s | 2 | Two equations, two tables, the shared row |
| 100 to 160 s | 3 | The graph, the crossing, the linked rider and shading |
| 160 to 215 s | 4 | Why the crossing solves both; the check |
| 215 to 270 s | 5 | g01 board: site `we-1` |
| 270 to 310 s | 6 | The graphing app |
| 310 to 350 s | 7 | Parallel and same-line thumbnails |
| 350 to 370 s | 8 | Framed memory card |
| 370 to 475 s | 9 to 12 | Question cards and countdowns, then feedback |
| 475 to 510 s | 13 | The between-the-lines frame for a02a |
| 510 to 557 s | 14 | Key notes, then a silent return to scene 13's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: cold open into 1; 1 to 2 stage change (the car becomes a badge); 2 to 3 stage change (tables to graph); 3 to 4 camera continue; 4 to 5 clear change to the board; 5 to 6 stage change to the app; 6 to 7 clear change; 7 to 8 camera pull back; attempts and feedback: the card shrinks to the top; 12 to 13 board clear; 13 to 14 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, the ring shown full from "Pause here to answer."). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-a01-learning-review.md`, `science_check` = `checks/m-s12-a01-maths-check.md`.

## Assets

Inspected before choosing (18 Nov 2026, `public/assets/maths`, read only): `ma12-used-hatchback-v1.png` (viewed: a worn red hatchback; reads as a used car for sale, not a driving school, and a06 uses it for depreciation); `ma12-calculator-v1.png` (viewed: a plain scientific calculator, reused here as a 220 px badge for "Standard calculators don't graph").

Need (painted, new; see the Codex asset brief): `ms12-driving-school-car-v1.png`. Reused: `ma12-calculator-v1.png` (scene 6 badge).

Coded: the quote cards, equations, tables, every graph and rider, the readouts, the app screen, thumbnails, the board, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `StudioPlot`, `StudioCandidateTable`, `LinkedRiders`, `LiveReadoutBoard`, `ScreenApp` (graph mode), `CrossingCounter` (thumbnail counts), the g01 `WorkingBoard` parts (`TaskStrip`, `EquationStrip`, `GivensCard`, `WorkingRows`, `AnswerFrame`, `MistakeCard`), `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row a01):
1. **Table-to-plot flight** (small; an option on `StudioCandidateTable`): each table column lights and its point flies to the plot through `StudioPlot`'s one coordinate transform; a `sharedRow` prop rings the matching cell in two tables at once. Check: the driving-school points land on the lines within 1 px; the shared ring appears only on n = 6.
2. **Cheaper-side shading** (small; a `LinkedRiders` prop): the region between two lines shades in the lower line's colour, switching sides at the crossing. Check: the switch happens at n = 6 exactly.

## Codex asset brief (Maths S12 A01, a driving-school car)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-s12-a01.md`, route entry math-s12-a01. Paint after the learning review and maths check pass and root gives the go-ahead, and before the a01 build. Save to `public/assets/maths/`. Transparent PNG with a true alpha channel, clean edges (check on black and white); ink and watercolour in the house style, matched to `maths/ma12-used-hatchback-v1.png` and `maths/ma12-calculator-v1.png`; no text, letters, numbers, logos, brand names, people, hands, faces, glow or shadow beyond a faint contact shadow. Never stretch; keep the native aspect ratio.

1. `ms12-driving-school-car-v1.png` (about 1800 × 900 px): a clean, modern small hatchback in side view, facing right, in a bright plain colour (not red, so it is not mistaken for `ma12-used-hatchback-v1.png`), with a plain rectangular roof sign mounted on top (a blank white panel with a coloured border, no lettering) and a plain square yellow plate shape on the rear window (blank, no letter). No driver or passenger visible (windows softly tinted). Leave about 10 per cent clear space above the roof sign so a coded label could sit there if needed.

Report inspection on the paper background (`#f6f1e7`) at 1,100 px and 260 px wide (the badge size) and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ms12-a01-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the five syllabus quotes match the route-inputs JSON and the crosswalk exactly, with the Standard 1 and Standard 2 labels correct.
3. Confirm no algebraic solving method (substitution, elimination, equating) is taught; checking by substitution only.
4. Confirm the site's `we-1` keeps its tables and answer (2, 3).
5. Confirm both attempts carry every demand and neither card nor picture shows an answer (A2's crossing unmarked).
6. Confirm scene 13's frame shows no exact crossing value and matches a02a's opening.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Solving Simultaneous Equations with Graphs | Year 12 Maths Standard

(Title length: 66 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/algebraic-relationships/lesson01.sa.html

Two driving schools quote different prices: one has a booking fee and cheaper lessons, the other has no fee. Which is cheaper? Draw both prices as lines and the crossing tells you. See how a table of values for each equation gives two straight lines, why the point of intersection is the one pair that makes both equations true, how to read it and check it, how a graphing app finds it, and what happens with parallel lines or the same line twice. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Algebraic relationships. For Standard 1 and Standard 2.
Syllabus content, Standard 2 (NSW Mathematics Standard 11-12, 2024):
"Graph two linear equations and identify the point of intersection, with and without using graphing applications"
"Solve a pair of simultaneous linear equations using graphical and algebraic methods" (graphical methods in this video)
Syllabus content, Standard 1:
"Graph two linear equations using a table of values or a graphing application and identify the point of intersection"
"Solve a pair of simultaneous linear equations by finding the point of intersection of their graphs, with and without graphing applications"
"Determine and interpret the point of intersection of two linear graphs in a variety of practical contexts"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faf5e47f4a (Standard 2) and https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa493dfdfb (Standard 1)

Builds on: Straight-line graphs and y = mx + c (Year 11). Next: Simultaneous equations by substitution (Standard 2); Simultaneous equations from worded problems (Standard 1).

#Year12Maths #MathsStandard #SimultaneousEquations #HSCScience

## Open decisions

- **1. Description course codes (root).** The crosswalk gives no published content-point codes (`displayedContentPointCode` is null), so the description names both courses and gives both focus-area links; the CMS codenames stay in this design only. See `../checks/root-decisions-maths-s12-a01-a06.md`, question 1.
- **2. The Standard 1 chip (root).** Scene 13's grey chip sends Standard 1 viewers to a03 by its plain title. Root may prefer a YouTube end-screen link instead of on-screen text.
- **3. "You've got your learner licence" (learning review).** The hook speaks to the viewer directly. Check it reads as an invitation, not an assumption (some students already drive or never will); the alternative opener is "Say you need driving lessons."

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from Year 11 y = mx + c and tables only; check that the shared table row makes "intersection" feel natural before the word, that "simultaneous" gets its plain meaning, that the rider's difference readout is followable at speed, that a Standard 1 student can finish every task without algebra, that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
