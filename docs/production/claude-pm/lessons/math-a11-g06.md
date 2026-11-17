# Maths A11 G06: How does translation find the centre and radius of a circle? A store's free-delivery zone, sliding w24's circle, reading the centre, radius, domain and range, completing both squares, and the equation from a graph (design)

Status: Revision 1 (17 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`) and the accepted Year 11 designs (`math-a11-e08.md`, `c10.md`, `w14.md`, `w31.md`; rulings in `../checks/root-acceptance-maths-a11-w01-w14.md`, `-w15-w31.md`, `../checks/root-rulings-maths-a11-c-e-packs.md` and `../checks/root-rulings-maths-a11-t-g-s-packs.md`). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,502 characters by script (see "Narration length estimate"), 12 scene headings, about 499 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: seventy-ninth video of Year 11 Mathematics Advanced (2024), outline order 79, Graph transformations; the last video of the strand. Pre-design pack: `../pre-design/maths-a11/math-a11-g06.md` (brief 243). Site lesson (read through the pack's quotations, read only): `graph-transformations/lesson07.sa.html` (Circles by Translation, SHA256 `3eebd7c51ee25a7eaba038edd1b50cdc7d946add794e61c104c5453e4f8cb63a`; `we-1`, `we-2` and `we-3` used with the site's numbers; no site error in this lesson). Route entry: `math-a11-g06` in `../../programme/maths-a11-route-inputs-5.json`. Visual system: maths studio kit; a painted garden-supplies wheelbarrow (new) and the reused rooftops texture; the grid, every circle and the boards coded; the final frame coded for s01.

Owner rules applied: as e08 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, an everyday anchor (shopping: a hardware store's free-delivery zone on a town map), Australian spelling, no em dashes, "zero point" decimals, conversational narration).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Graph transformations), quoted from `../../programme/syllabus/maths-advanced-2024-y11-crosswalk.json`:

- `ci84f96bc4`: "Use the principles of translations to identify the centre, radius, domain and range of graphs of circles in the form (x - a)^2 + (y - b)^2 = r^2, where a, b and r are constants"
- `cid118e6e7`: "Find the centre and radius of circles of the form x^2 + y^2 + ax + by + c = 0, where a, b and c are constants, by completing the squares"
- `ci95f9075b`: "Graph circles given their equations and find the equation of a circle from its graph"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fae9d6fbd3

**Boundary:** starts from g05's final frame exactly (the coded town grid, x −6 to 9 and y −8 to 6, 1 unit = 1 km, over the painted texture `ma11-town-rooftops-texture-v1.png`, origin pinned "town hall"; the barrow plate `ma11-garden-barrow-v1.png` as a 300 px badge beside a store pin at (3, −2); the card "free delivery within 5 km"; the dashed grey circle x² + y² = 25 with the chip "w24: x² + y² = 25, centre (0, 0)"; a faint dashed circle around the store with "?"; chips "centre at the store: what equation?", "Next: circles off the origin", "?"). Recalls w24 (x² + y² = r² from Pythagoras, the radius as the root of the right side, domain and range one radius either side; not re-derived, one recap sentence), g01 (replacing x by x − 3 slides right 3; replacing y by y + 2 slides down 2) and w15 (completing the square) in a phrase or grey chip each. Teaches: translating w24's circle gives (x − 3)² + (y + 2)² = 25, centre read from the brackets with the signs flipped, radius from the root of the right side; a point is on the circle when it satisfies the equation (`ci84f96bc4`); graphing a circle from its equation by the centre and four radius steps, with domain and range one radius either side of the centre (site `we-1`; `ci84f96bc4`, `ci95f9075b`); the expanded form by completing both squares, adding the same amounts to both sides (site `we-2`; `cid118e6e7`); the equation from a graph, the radius from the centre to a point, by Pythagoras when the point is not level (site `we-3`; `ci95f9075b`). Stops at circles. Not taught: deriving x² + y² = r² (w24); semicircles (w25); inside or outside tests (w24); an expanded equation that gives no circle (author note).

## Decisions

- **Anchor: a hardware store's free-delivery zone (painted plate, live).** A store at (3, −2) on a town map delivers garden supplies free within 5 km. The zone's edge is w24's circle of radius 5, moved so its centre sits on the store, and the move is a translation: so "where is the centre?" is answered by the slide, and "is this house inside the free zone?" by the equation. A house at (6, 2) (3 across and 4 up from the store) sits exactly on the edge, which reuses w24's Pythagoras check without re-deriving the circle. Shopping; the pack's anchor 1. Delivery vans are used by w19 and Year 12 g03 and s05, and a delivery-van plate exists (`ma12-delivery-van-v1.png`), so the object here is a wheelbarrow of garden supplies, not a van; no Year 11 or Year 12 Maths design uses a hardware store or a delivery zone (grep "delivery zone", "hardware", "wheelbarrow": only Year 12 i12 mentions a wheelbarrow, as a different object). w24's dartboard and speaker range and w25's netball court are not reused.
- **Notation.** The circle form uses the syllabus letters (x − a)² + (y − b)² = r² in one key note only; every worked example uses numbers. The general form's letters (x² + y² + ax + by + c = 0) never appear on screen; examples use numbers (pack decision). Root ruling 4 binds g01 to g05 to y = k f(a(x + b)) + c; this video's a and b are a different formula's letters (the centre), so they appear once, labelled "centre (a, b)" (open decision 1).
- **Builds on w24 without re-deriving (root ruling 6).** Scene 1 states w24's circle as a known fact in one sentence ("Every point on it is five from the origin, so x squared plus y squared equals twenty-five"); no Pythagoras derivation, no inside-or-outside test. w24's "right side = r²" and "domain one radius either side" are reused as reminders in scenes 2 and 3.
- **Simulations (standard item 3).**
  1. **Sliding circle** (`CircleFromCentre`, a `CircleTracer` mode; scenes 1, 2): w24's origin circle slides as one move to (3, −2), centre dot leading, four radius spokes unchanged; the equation's brackets fill as the slide's two parts run (teal x part, violet y part).
  2. **Centre and four steps** (scene 3): the centre plots, four radius spokes step out to the axis-parallel points, the circle draws through them, and domain and range brackets draw on the axes.
  3. **Square tiles twice** (`CompleteSquareTiles`, planned from w04 and w15; scene 4): the x group and the y group each build a square from their half-coefficients in two colours, with the added amounts appearing on both sides of a balance line.
- **Colour roles (g strand, adapted).** The centre's x-coordinate and the x bracket **teal** (a horizontal slide, as g01); the centre's y-coordinate and the y bracket **violet** (a vertical slide); the radius and r² **amber** (the circle is the unit circle enlarged by r, g03); domain bars blue and range bars teal-outlined (w09's input and output colours; outlined so they do not merge with the teal x bracket); the origin circle a dashed grey ghost; the image ink; answer green; mistake red, crossed slips only.
- **Large type, handwritten voice.** As g02. Hand tags: "slide right 3: x → x − 3", "slide down 2: y → y + 2", "signs flip", "right side = r²", "on the edge!", "one radius each way", "from the centre, not the origin", "half of −4 is −2", "add to both sides", "same circle!", "level: subtract", "not level: Pythagoras", "r² on the right".
- **Stage changes (standard item 2).** The town map and the delivery zone (1); the sliding circle and the house check (2); graphing from the equation (3); the g01 board with square tiles (4); equation from a graph (5); framed card (6); question cards (7 to 10); the coded sets frame for s01 (11); key notes (12).
- **Worked examples (g01 layout).** 2: the anchor ((x − 3)² + (y + 2)² = 25; house (6, 2) on the edge). 3: site `we-1` ((x − 2)² + (y + 1)² = 16: centre (2, −1), r = 4, domain [−2, 6], range [−5, 3]); crossed "centre (−2, 1)". 4: site `we-2` (x² + y² − 4x + 2y − 11 = 0 → the same circle); crossed "right side 11". 5: site `we-3` (centre (−1, 2) through (2, 2): r = 3, (x + 1)² + (y − 2)² = 9); crossed "= 3".
- **Memory aid.** Framed card: "Brackets: centre, signs flipped. Right side: radius squared." Key line: "Expanded? Complete both squares, adding to both sides."
- **Visual surprise.** The messy expanded equation of scene 4, once both squares are completed, lands exactly on the circle already drawn in scene 3: the two equations were one circle all along.
- **Site notes (pack section 8).** No error in lesson07. The site writes (x − h)² + (y − k)² = r²; this design uses numbers and, once, the syllabus letters (x − a)² + (y − b)² = r². The site's practice 3 and Q1 and Q2 are not used.
- **Plain meanings at first use.** Translation ("a slide: every point moves the same distance in the same direction", g01 recall); completing the square (w15 recall: "add the square of half the x coefficient to make a perfect square"); domain and range of a circle ("the x-values and y-values the circle covers", w24 recall).
- **Attempts (pack question 1; pack question 2 adapted).** A1: x² + y² − 10x + 4y + 20 = 0: (x − 5)² + (y + 2)² = 9, centre (5, −2), r = 3, domain [2, 8], range [−5, 1]; crossed "right side −20". A2 (adapted): centre (3, −1) through the origin: (x − 3)² + (y + 1)² = 10; show (6, 0) is on it; crossed "= 100". The pack's "find the other x-axis crossing" becomes "show that it also passes through (6, 0)", because scene 2 teaches checking a point and no scene solves a circle with y = 0 (a new skill that would need its own teaching).
- **Mistake scene:** none separate. The centre's signs ((x − 2) read as −2; 3 crossed); r taken as the right side (5 crossed, A2 crossed); completing the square on one side only (4 crossed, A1 crossed); domain and range from the origin (3, said and tagged).
- **Cause chain taught, in order:** (1) w24's circle is every point 5 from the origin; moving the centre is a translation (1); (2) a slide right 3 replaces x by x − 3 and a slide down 2 replaces y by y + 2 (g01), so the brackets hold the centre with the signs flipped; a slide doesn't change the radius, so the right side is still r² (2); (3) a point is on the circle exactly when it is r from the centre, which is when it satisfies the equation (2); (4) the circle reaches one radius left, right, up and down from the centre, which gives the domain and range (3); (5) an expanded equation hides the brackets; completing each square rebuilds them, and adding to one side must be matched on the other to keep the equation true (4); (6) from a graph, the radius is the distance from the centre to any point on the circle (5).
- **Entry knowledge (route):** w24 (x² + y² = r² from Pythagoras; radius as the root of the right side; domain and range of a relation; the equation from one point); w15 (completing the square); g01 (replacing x by x − a and y by y − b translates a graph); g03 (x² + y² = r² is the unit circle enlarged by factor r).
- **What Year 12 relies on.** No Year 12 design names a dependency (pack). Year 12 i07's semicircle area recalls circles only as w24 and w25 give them.
- **Handoff (to math-a11-s01, "How do we describe a collection precisely with set notation?").** Scene 11: a coded frame, no plate (s01's pack starts from "a collection described in words (the even numbers from 1 to 11) and the same collection written in braces"; s01's opening does not depend on g06, so this frame leaves s01 free to choose its anchor). Left: a small grey badge of the delivery circle with "every point exactly 5 km from the store: a collection". Centre: the words "the even numbers from 1 to 11" in the hand font (52 px). Right: an empty pair of braces "{ }" with a "?" inside (no elements written). Chips "a collection, written precisely?", "Next: sets and set notation" and "?". This is s01's proposed opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Anchor: (x − 3)² + (y + 2)² = 25; domain [−2, 8], range [−7, 3] (not spoken); (6, 2): 3² + 4² = 25 (on the edge); (8, −2) also on it.
  (b) `we-1`: centre (2, −1), r = 4; axis points (−2, −1), (6, −1), (2, 3), (2, −5); domain [−2, 6], range [−5, 3].
  (c) `we-2`: x² − 4x + y² + 2y = 11; (x − 2)² − 4 + (y + 1)² − 1 = 11, or adding 4 and 1 to both sides: (x − 2)² + (y + 1)² = 16. Expands back to x² + y² − 4x + 2y − 11 = 0.
  (d) `we-3`: r = 2 − (−1) = 3; (x + 1)² + (y − 2)² = 9, which expands to x² + y² + 2x − 4y − 4 = 0.
  (e) General form x² + y² + Dx + Ey + F = 0: centre (−D/2, −E/2), r² = (D/2)² + (E/2)² − F; a circle only if r² > 0 (x² + y² + 2x + 5 = 0 gives r² = −4, no circle). Not in learner copy (pack decision).
  (f) A1: (x − 5)² + (y + 2)² = −20 + 25 + 4 = 9; domain [2, 8], range [−5, 1]. A2: r² = (0 − 3)² + (0 + 1)² = 10; (6 − 3)² + (0 + 1)² = 10. (The circle meets the x-axis at x = 0 and x = 6.)
  (g) Pronunciations: "x minus three, all squared, plus y plus two, all squared, equals twenty-five"; "root twenty-five"; "two minus minus one"; "minus two to six" for [−2, 6] (spoken "from minus two to six").
  (h) Windows: town grid x −6 to 9, y −8 to 6, equal units, 1 km per unit; scene 3 x −4 to 8, y −7 to 5; scene 5 x −5 to 3, y −2 to 6; all equal units (a circle must look round).

Main question: *A store at (3, −2) delivers free within 5 km. What is the equation of the zone's edge? How does translation find the centre and radius of a circle?*
Entry knowledge (w24, w15, g01, g03): x² + y² = r²; completing the square; translations by replacing x and y.
Stops after: the centre, radius, domain and range of (x − a)² + (y − b)² = r² by translation; checking a point; graphing; completing both squares; the equation from a graph. No semicircles, no derivation, no "is it a circle?" test.
Handoff: math-a11-s01: "the even numbers from 1 to 11, in words: how do we write a collection down precisely?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles: the x bracket and centre x teal; the y bracket and centre y violet; the radius and r² amber; domain bars blue, range bars teal-outlined; origin circle dashed grey ghost; image ink; answer green; mistake red. Header strip "MATHEMATICS ADVANCED · GRAPH TRANSFORMATIONS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame; every circle is drawn on equal axis units.

### 1. hook: the free-delivery zone
> Here's that town map. The store is at three, minus two, and it delivers garden supplies free to any house within five kilometres. The edge of the zone is every point exactly five kilometres from the store, so it's a circle of radius five, centred on the store. You already know the circle centred at the origin. Every point on it is five from the origin, so x squared plus y squared equals twenty-five. Now we need that same circle, with its centre moved to the store. Moving a graph is something we can already do, with a translation, a slide. So how does translation find the centre and radius of a **circle**?

Visual: opens on g05's final frame exactly (the town grid over `ma11-town-rooftops-texture-v1.png`, origin "town hall"; the barrow `ma11-garden-barrow-v1.png` as a 300 px badge beside the store pin at (3, −2); the card "free delivery within 5 km"; the dashed grey circle x² + y² = 25 with the chip "w24: x² + y² = 25, centre (0, 0)"; the faint dashed circle around the store with "?"; chips "centre at the store: what equation?", "Next: circles off the origin", "?"). On the first sentence the "Next" chips fade and the map enlarges (1,250 × 860 px). On "within five kilometres" an amber radius spoke from the store to its circle reads "5 km", and the zone fills a pale green. On "x squared plus y squared" the origin circle's chip enlarges (44 px), with four amber spokes of length 5 from the origin. On "translation" a dashed teal-and-violet arrow runs from the town hall to the store, hand tag "a slide". On "circle" heading "Circles by translation", and the question chip "store at (3, −2): what equation?" moves to the top right.

### 2. slide the circle, read the brackets
> Slide the origin circle three right and two down, so its centre lands on the store. A slide right three replaces x by x minus three. A slide down two replaces y by y plus two. So the edge is x minus three, all squared, plus y plus two, all squared, equals twenty-**five**. Now read it back the other way. The brackets hold the centre with the signs flipped, so x minus three means three, and y plus two means minus two. The centre is three, minus **two**. A slide doesn't change the size, so the right side is still the radius squared, and the radius is root twenty-five, which is five. Check a house at six, two. It's three across from the store and four up. Three squared plus four squared is twenty-five, so it's exactly on the **edge**, five kilometres away.

Visual: stage change: the map stays (the texture dimmed to 40 per cent behind the grid), the equation strip at the top right (52 px). `CircleFromCentre`: the origin circle slides as one move, centre dot leading, along a teal arrow 3 right then a violet arrow 2 down, its spokes unchanged; the ghost stays at the origin. As "replaces x by x minus three" is said, the strip writes "(x − 3)²" (teal), hand tag "slide right 3: x → x − 3"; on "y plus two" "+ (y + 2)²" (violet), hand tag "slide down 2: y → y + 2"; on "five" (first) "= 25" (amber). On "Read it back" arrows run from "− 3" to "3" and from "+ 2" to "−2", hand tag "signs flip"; on "two" (second) the row "centre (3, −2)" (teal, violet) frames. On "radius squared" "25 = 5²" (amber), hand tag "right side = r²", the radius readout "r = 5". On "a house at six, two" a coded house pin drops at (6, 2) with a right-angle triangle from the store: "3 across" (teal), "4 up" (violet); row "(6 − 3)² + (2 + 2)² = 9 + 16 = 25 ✓" (44 px); on "edge" the pin pulses on the circle, hand tag "on the edge!".

### 3. graph it from the equation
> Now graph one from its equation. Take x minus two, all squared, plus y plus one, all squared, equals sixteen. The centre is two, minus one, and the radius is root sixteen, which is four. Plot the centre. Then step one radius left, right, up and down, to four points on the **circle**. Each step keeps one coordinate of the centre, and changes the other by four. Draw the circle through them. The leftmost point is at x equals minus two, and the rightmost is at six, so the domain is from minus two to **six**. The lowest point is at y equals minus five, and the highest is at three, so the range is from minus five to **three**. That's one radius either side of the centre, not of the origin. Reading the centre as minus two, one is the **slip**.

Visual: clear change: a large equal-unit plot at the left (900 × 900 px, x −4 to 8, y −7 to 5), the g01 board at the right. Task strip (44 px): "Graph (x − 2)² + (y + 1)² = 16 and state its centre, radius, domain and range." (site `we-1`). Rows (52 px): "centre (2, −1)" (teal, violet), "r = √16 = 4" (amber). The centre plots; on "circle" four amber spokes step out to (−2, −1), (6, −1), (2, 3), (2, −5), each ringing, and the circle draws through them, hand tag "one radius each way". On "six" the blue domain bar draws on the x-axis from −2 to 6 with dotted drop lines from the leftmost and rightmost points, row "domain: −2 ≤ x ≤ 6" (green frame). On "three" the teal-outlined range bar draws on the y-axis from −5 to 3, row "range: −5 ≤ y ≤ 3" (green frame). On "not of the origin" hand tag "from the centre, not the origin". On "slip" a red slip "centre (−2, 1)" writes and is crossed, a dashed grey ghost circle flashing at (−2, 1) and fading, caption "x − 2: centre x = 2".

### 4. expanded form: complete both squares
> Sometimes the equation comes expanded, like x squared plus y squared minus four x plus two y minus eleven equals zero. To find the centre, complete the square twice, the same way you found a parabola's vertex. Group the x terms and the y terms, and move the eleven across. For x squared minus four x, half of minus four is minus two, so add four, to make x minus two, all **squared**. For y squared plus two y, half of two is one, so add one, to make y plus one, all squared. Whatever you add on the left, add on the right as well. Eleven plus four plus one is **sixteen**. So it's x minus two, all squared, plus y plus one, all squared, equals sixteen. That's the circle we just drew, centre two, minus one, radius **four**. Leaving the right side at eleven is the **slip**.

Visual: clear change to the g01 board, full width. Task strip (44 px): "Find the centre and radius of x² + y² − 4x + 2y − 11 = 0." (site `we-2`). Rows (current 52 px, earlier 32 px): "(x² − 4x) + (y² + 2y) = 11" (x group teal, y group violet), grey chip "w15: complete the square". `CompleteSquareTiles` (two small tile squares under the row): on "squared" (first) the teal x tiles complete with a 4-tile corner, hand tag "half of −4 is −2", row "(x² − 4x + 4)"; the violet y tiles complete with a 1-tile corner, row "(y² + 2y + 1)". On "add on the right" a balance line under the equals sign: "+ 4" and "+ 1" appear on the left and, matching, on the right, hand tag "add to both sides". On "sixteen" "= 11 + 4 + 1 = 16" (amber 16). Row "(x − 2)² + (y + 1)² = 16". On "four" the framed answer (green) "centre (2, −1), radius 4", and scene 3's circle slides in small at the right and the new equation's circle draws exactly over it, hand tag "same circle!" (the visual surprise). On "slip" a red slip "(x − 2)² + (y + 1)² = 11" writes and is crossed, caption "added 4 and 1 on the left only".

### 5. from a graph to its equation
> Finally, go from a graph to its equation. This circle has its centre at minus one, two, and passes through two, two. The radius is the distance from the centre to that point, because every point on a circle is the same distance from its centre. They're level, so it's two minus minus one, which is **three**. Put the centre into the brackets with the signs flipped, and square the radius. That gives x plus one, all squared, plus y minus two, all squared, equals **nine**. If the point isn't level with the centre, use Pythagoras, like the house, where across squared plus up squared gives the radius squared. Writing equals three on the right is the **slip**. The right side is the radius squared.

Visual: stage change: an equal-unit plot at the left (800 × 800 px, x −5 to 3, y −2 to 6) showing a drawn circle with its centre marked (−1, 2) and the point (2, 2) marked on it (site `we-3`), as a question would give them. Task strip (44 px): "Find the equation of the circle with centre (−1, 2) through (2, 2)." Rows (52 px): an amber spoke from the centre to the point; on "three" "r = 2 − (−1) = 3", hand tag "level: subtract". Row "(x − (−1))² + (y − 2)² = 3²"; on "nine" "(x + 1)² + (y − 2)² = 9" (green frame). On "Pythagoras" a small inset repeats the house triangle from scene 2 ("3 across, 4 up: r² = 25"), hand tag "not level: Pythagoras". On "slip" a red slip "(x + 1)² + (y − 2)² = 3" writes and is crossed, caption "right side: r² = 9", hand tag "r² on the right".

### 6. memory aid
> Here's the summary. The brackets hold the centre with the signs flipped, because each one is a translation. The right side is the radius squared. If the equation is expanded, complete both squares, adding the same amounts to both sides. And for the domain and range, start at the centre, not the origin, and go one radius either side of the **centre**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the delivery circle sliding from the town hall to the store, the barrow badge beside it. Main line, hand font 56 px: "Brackets: centre, signs flipped. Right side: radius squared." On "centre" the key line, 40 px: "Expanded? Complete both squares, adding to both sides." Hold about 2 s.

### 7. attempt 1 (countdown, 10 seconds)
> Your turn. Find the centre and radius of the circle x squared plus y squared minus ten x plus four y plus twenty equals zero, and state its domain and range. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Find the centre and radius of the circle x² + y² − 10x + 4y + 20 = 0, and state its domain and range." The full question stays on screen. Picture slot: empty equal-unit axes, x −1 to 9, y −6 to 3. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 8. feedback 1 (brief)
> Complete both squares. Half of minus ten is minus five, so add twenty-five. Half of four is two, so add four. The right side becomes minus twenty, plus twenty-five, plus four, which is **nine**. So the centre is five, minus two, and the radius is three. The domain is two to eight, and the range is minus five to **one**. Leaving the right side at minus twenty is the **slip**.

Visual: the card shrinks to the top (30 px). Rows (44 px): "(x² − 10x + 25) + (y² + 4y + 4) = −20 + 25 + 4"; on "nine" "(x − 5)² + (y + 2)² = 9" (amber 9). Rows "centre (5, −2), r = 3"; the circle draws on the picture from its centre with four spokes. On "one" "domain 2 ≤ x ≤ 8, range −5 ≤ y ≤ 1" (green frame), with the bars on the axes. On "slip" a red slip "(x − 5)² + (y + 2)² = −20" writes and is crossed, caption "add 25 and 4 to both sides". Hold about 1 s.

### 9. attempt 2 (countdown, 10 seconds)
> Last one. A circle has centre three, minus one, and passes through the origin. Find its equation, and show that it also passes through six, zero. Pause here to answer.

Visual: `QuestionCard`, 40 px: "A circle has centre (3, −1) and passes through the origin. Find its equation, and show that it also passes through (6, 0)." Picture slot: empty equal-unit axes, x −1 to 7, y −5 to 3, with the centre (3, −1), the origin and the point (6, 0) marked, no circle drawn. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 10. feedback 2 (brief)
> From the centre to the origin is three across and one up, so the radius squared is nine plus one, which is **ten**. The equation is x minus three, all squared, plus y plus one, all squared, equals ten. At six, zero, that's three squared plus one squared, which is ten, so it's on the **circle**. Writing a hundred on the right, by squaring ten, is the **slip**. Ten is already the radius squared.

Visual: the card shrinks to the top. On the picture: a right-angle triangle from (3, −1) to (0, 0), "3 across" (teal), "1 up" (violet). Rows (44 px): "r² = 3² + 1²"; on "ten" (first) "= 10"; "(x − 3)² + (y + 1)² = 10" (green frame), the circle drawing through the origin. Row "(6 − 3)² + (0 + 1)² = 9 + 1 = 10 ✓"; on "circle" the point (6, 0) pulses on the circle. On "slip" a red slip "(x − 3)² + (y + 1)² = 100" writes and is crossed, caption "10 is r², not r". Hold about 1 s.

### 11. handoff
> That's the end of graph transformations. A circle is really a collection, every point that's exactly five kilometres from the store. Next, we start probability, and probability needs a precise way to describe collections of anything, like outcomes, or numbers. Here's one described in words, the even numbers from one to eleven. How do we write a collection like that down precisely, with nothing missed and nothing extra? Next, sets and set **notation**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the coded sets frame (no plate). On "A circle is really a collection" the delivery circle shrinks to a 260 px grey badge at the left with the caption "every point exactly 5 km from the store: a collection". On "the even numbers from one to eleven" the words "the even numbers from 1 to 11" write in the hand font (52 px) at the centre. On "precisely" an empty pair of braces "{ }" draws at the right with a "?" inside; no elements are written. On "notation" chips "a collection, written precisely?", "Next: sets and set notation" and "?". Hold about 2 s. This is s01's proposed opening frame; scene 12 returns to it silently after the notes.

### 12. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- (x − a)² + (y − b)² = r²: centre (a, b), radius r.
- (x − 3)² + (y + 2)² = 25: centre (3, −2), radius 5 (signs flipped).
- Domain a − r ≤ x ≤ a + r; range b − r ≤ y ≤ b + r.
- Expanded form: complete both squares, adding the same to both sides.
- From a graph: r from the centre to a point, then r² on the right.

Memory aid (framed card, right side, as in scene 6): *Brackets: centre, signs flipped. Right side: radius squared.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 11's frame exactly. This is the final frame and s01's proposed opening frame.

## Teaching checks

- **Does it explain causes?** Why the brackets hold the centre with flipped signs: they are g01's slides (2). Why the right side stays r²: a slide does not change size (2). Why a point is on the circle: it is r from the centre (2). Why the domain and range are one radius either side of the centre: the circle reaches that far each way (3). Why both sides get the added amounts: to keep the equation true (4). Why the radius is a distance to a point: every point is r from the centre (5).
- **Misconceptions addressed:** the centre's signs (3 crossed); the right side read as r (5 crossed, A2 crossed); completing on one side only (4 crossed, A1 crossed); domain and range from the origin (3).
- **Visual standard, item by item:** 1 the painted barrow and town texture from the first frame (g05's frame), returning in 2 and 6; 2 a new stage every 40 to 60 s; 3 the circle sliding as one move with its brackets filling, the four radius steps and axis bars, the square tiles; 4 fixed roles (x part teal, y part violet, radius amber); 5 large type; 6 hand tags; 7 g01 boards in 3 to 5; 8 framed card and five bullets; 9 the expanded equation's circle landing on scene 3's circle.
- **One idea at a time:** the translation (2), graphing with domain and range (3), the expanded form (4), from a graph (5).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 27 s and 29 s.
- **Avoided double teaching:** w24's equation is stated in one sentence, not derived; w15's completing the square is a grey chip; g01's slides are recalled in a phrase.
- **Syllabus coverage:** `ci84f96bc4` (1 to 3, A1; key notes 1 to 3); `cid118e6e7` (4, A1; key note 4); `ci95f9075b`, graphing (3, A1 feedback) and the equation from a graph (5, A2; key note 5).
- **Out of scope by design:** deriving the circle (w24); semicircles (w25); expanded equations that give no circle (author note e).

## Practice questions and model answers

**Attempt 1 (scene 7; pack question 1, original, HSC style, 3 marks suggested, not an official marking scheme).** "Find the centre and radius of the circle x² + y² − 10x + 4y + 20 = 0, and state its domain and range."
Model answer: (x² − 10x + 25) + (y² + 4y + 4) = −20 + 25 + 4, so (x − 5)² + (y + 2)² = 9. Centre (5, −2), radius 3, domain 2 ≤ x ≤ 8, range −5 ≤ y ≤ 1. Classic mistake (crossed): right side left at −20.

**Attempt 2 (scene 9; pack question 2 adapted, original, HSC style, 2 marks suggested).** "A circle has centre (3, −1) and passes through the origin. Find its equation, and show that it also passes through (6, 0)."
Model answer: r² = (0 − 3)² + (0 + 1)² = 10, so (x − 3)² + (y + 1)² = 10. At (6, 0): (6 − 3)² + (0 + 1)² = 10, so (6, 0) is on the circle. Classic mistake (crossed): "= 100".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Anchor | store (3, −2); 5 km; x² + y² = 25 → (x − 3)² + (y + 2)² = 25; house (6, 2): 9 + 16 = 25 | 1, 2 |
| Site `we-1` | centre (2, −1); r = 4; points (−2, −1), (6, −1), (2, 3), (2, −5); domain [−2, 6]; range [−5, 3] | 3 |
| Site `we-2` | 11 + 4 + 1 = 16; (x − 2)² + (y + 1)² = 16 | 4 |
| Site `we-3` | r = 3; (x + 1)² + (y − 2)² = 9 | 5 |
| A1 | −20 + 25 + 4 = 9; centre (5, −2); r = 3; [2, 8]; [−5, 1] | 7, 8 |
| A2 | r² = 10; (x − 3)² + (y + 1)² = 10; (6, 0): 9 + 1 = 10 | 9, 10 |
| Handoff | "the even numbers from 1 to 11" (no set written) | 11 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (17 Nov 2026, scratchpad `g-designs/verify.py`, run with `python -I`); Codex to re-check.

- (6 − 3)² + (2 + 2)² − 25 = 0; (8 − 3)² + (−2 + 2)² − 25 = 0.
- (x − 2)² + (y + 1)² − 16 − (x² + y² − 4x + 2y − 11) = 0; 2 ± 4 = −2, 6; −1 ± 4 = −5, 3.
- 2 − (−1) = 3; (x + 1)² + (y − 2)² − 9 = x² + 2x + y² − 4y − 4.
- (x − 5)² + (y + 2)² − 9 − (x² + y² − 10x + 4y + 20) = 0; −20 + 25 + 4 = 9; 5 ± 3 = 2, 8; −2 ± 3 = −5, 1.
- (0 − 3)² + (0 + 1)² = 10; (6 − 3)² + (0 + 1)² = 10.

## Memory aid check

- **"Brackets: centre, signs flipped. Right side: radius squared."** with key line **"Expanded? Complete both squares, adding to both sides."** Original. Meaning, as said in scene 6: in (x − a)² + (y − b)² = r² the centre is (a, b), read from the brackets with the opposite signs, because x − a is a slide right a (g01); the right side is r², so the radius is its square root. Assumptions checked: the equation is in centre form with both squared brackets having coefficient 1 (an expanded or scaled form must be rearranged first; the key line covers the expanded form); the right side is positive (author note e). It helps a new case: (x + 4)² + (y − 1)² = 36 has centre (−4, 1) and radius 6. Introduced after scenes 2 to 5.
- **Considered, not used:** "Opposite signs inside" alone (it misses r²).

## Narration length estimate

Counted by script (narration blockquotes, bold markers removed; scratchpad `g-designs/count.py`): 5,502 characters. At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 20 s of settling (the circle's slide, the four radius steps, the square tiles, the circles overlaying) and the 45 s notes scene: about 499 s. Characters per scene (1 to 12): 608, 750, 730, 759, 686, 348, 179, 365, 167, 384, 451, 75. Speech before the notes is about 408 s, under the 570 s cap. Feedback speech: about 27 s and 29 s.

Reserve trims if the voiced take runs long: scene 3's "That's one radius either side of the centre, not of the origin" (keep the hand tag); scene 5's Pythagoras sentence (keep the inset, silent).

## Scene list and build ids

Lesson key `m-a11g06` (route math-a11-g06). Explainer folder `src/explainer/lessons/math-a11-g06`; build inputs in `docs/production/claude-pm/lessons/math-a11-g06/` (at voicing).

In order (12 scene headings): hook-delivery-zone, slide-the-circle, graph-from-equation, complete-both-squares, equation-from-graph, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 45 s | 1 | g05's frame; the delivery zone on the town map |
| 45 to 105 s | 2 | The circle slides; brackets; the house on the edge |
| 105 to 160 s | 3 | Graphing from the equation; domain and range |
| 160 to 220 s | 4 | g01 board: completing both squares; same circle |
| 220 to 270 s | 5 | From a graph to its equation |
| 270 to 295 s | 6 | Framed memory card |
| 295 to 385 s | 7 to 10 | Question cards and countdowns, then feedback |
| 385 to 420 s | 11 | Coded sets frame for s01 |
| 420 to 465 s | 12 | Key notes, then a silent return to scene 11's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: g05's last frame continues into 1; 1 to 2 same map (the circle slides); 2 to 3 clear change to the plot and board; 3 to 4 clear change to the full board; 4 to 5 stage change; 5 to 6 camera pull back; attempts and feedback: the card shrinks to the top; 10 to 11 board clear; 11 to 12 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11-g06-learning-review.md`, `science_check` = `checks/m-a11-g06-maths-check.md`.

## Assets

Inspected before choosing (17 Nov 2026, `public/assets/maths`, read only): `ma11-town-rooftops-texture-v1.png` (viewed: painted houses, trees and garden beds on grass, top-down; reused under the grid at 40 to 100 per cent opacity); `ma12-delivery-van-v1.png` exists but belongs to other anchors (w19, Year 12 g03 and s05) and is not reused; `ma11-dartboard-v1.png` is w24's anchor and is not reused.

Need (painted, new; see the Codex asset brief): `ma11-garden-barrow-v1.png` (also needed for g05's final frame). Reused: `ma11-town-rooftops-texture-v1.png`.

Coded: the grid, store and house pins, the delivery card, every circle, spoke and triangle, the domain and range bars, the boards and square tiles, the sets frame, the countdown, the key notes.

### Studio kit use and additions

Uses: `CircleFromCentre` (new, as a mode of the planned `CircleTracer`; listed in `../checks/maths-a11-kit-needs-g-s.md`), `AxisShadow` (planned, w09), `CompleteSquareTiles` (planned, w04 and w15), `StudioPlot` with equal units, `PlateImg`, `HandTag`, the g01 `WorkingBoard` parts, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions:
1. **`CircleFromCentre`** (new, as listed): a centre dot, four radius spokes to the axis-parallel points, the circle drawn through them, domain and range brackets; a slide of the whole circle as one move, with the equation's brackets filling from the slide's two parts. Check: every drawn point satisfies the stated equation within 1 px; the window has equal units.
2. **Two-group square tiles** (small, a `CompleteSquareTiles` option): the x group and the y group side by side in two colours, each with its added corner, and a balance line that shows each added amount on both sides. Check: the right side equals the original constant plus both added squares.

## Codex asset brief (Maths A11 G06, a wheelbarrow of garden supplies; also g05's final frame)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-g06.md`, route entry math-a11-g06. Paint after the learning review and maths check pass and root gives the go-ahead, and before the g05 build (g05's final frame shows this plate). Save to `public/assets/maths/`. Transparent PNG with a true alpha channel, clean edges; ink and watercolour in the house style, matched to `maths/ma11-town-rooftops-texture-v1.png`; no text, numbers, labels, logos, brand names, people, hands, faces, glow or shadow. Never stretch.

1. `ma11-garden-barrow-v1.png` (1400 × 1000 px): a green metal wheelbarrow seen from the side at a slight three-quarter angle, loaded with two plain paper sacks of potting mix (**blank**, no print), a small potted lavender and a coiled green garden hose, standing on a short strip of concrete path that fades to transparent.

No sidecar is needed. Report inspection on the paper background (`#f6f1e7`) at 300 px and 600 px wide and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-g06-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the three syllabus quotes match the crosswalk JSON exactly.
3. Confirm x² + y² = r² is stated, not derived, and that no inside-or-outside test or semicircle is taught.
4. Confirm every circle is drawn on equal axis units, and that domain and range are always measured from the centre.
5. Confirm no general-form letters (a, b, c in x² + y² + ax + by + c = 0) appear on screen, and the centre-form letters appear only in key note 1.
6. Confirm both attempts carry every demand and neither card nor picture shows an answer (A2's picture marks the three given points only).
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, that scene 1 opens on g05's final frame and that the final frame writes no set elements.

## YouTube metadata (draft)

Title: Circles by Translation: Centre, Radius, Completing the Square | Year 11 Maths Advanced

(Title length: 86 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/graph-transformations/lesson07.sa.html

A hardware store at (3, −2) on a town map delivers free within 5 km. What's the equation of the zone's edge? Slide the circle x² + y² = 25 so its centre sits on the store, and read the centre and radius straight from the brackets. Then graph a circle from its equation with its domain and range, find the centre and radius of an expanded equation by completing both squares, and write the equation of a circle from its graph. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Graph transformations.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Use the principles of translations to identify the centre, radius, domain and range of graphs of circles in the form (x - a)^2 + (y - b)^2 = r^2, where a, b and r are constants"
"Find the centre and radius of circles of the form x^2 + y^2 + ax + by + c = 0, where a, b and c are constants, by completing the squares"
"Graph circles given their equations and find the equation of a circle from its graph"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fae9d6fbd3

Builds on: Circles centred at the origin; translations; completing the square. Next: Sets and set notation (Probability and data).

#Year11Maths #MathsAdvanced #Circles #HSCScience

## Open decisions

- **1. The letters a and b (root).** g04 and g05 use a and b in y = k f(a(x + b)) + c (a horizontal factor and slide), and the syllabus writes the circle as (x − a)² + (y − b)² = r² with (a, b) the centre. This design keeps the circle letters to one key note, labelled "centre (a, b)", and uses numbers everywhere else. If root prefers no letters at all, key note 1 becomes "(x − 3)² + (y + 2)² = 25: centre (3, −2), radius 5" and note 3 becomes "domain: one radius either side of the centre's x; range: of its y".
- **2. The s01 join (root and the s01 designer).** No s01 design exists. The final frame is coded and neutral (the pack's own start: "the even numbers from 1 to 11" in words, with empty braces), so s01 stays free to choose its anchor. If s01 opens elsewhere, only scene 11's last three sentences and its frame change.
- **3. A2 adapted (learning review).** The pack's A2 asks for the circle's other x-axis crossing, which needs solving with y = 0, a step no scene teaches. The card asks students to show that (6, 0) is on the circle instead. If the reviewer wants the original, scene 2 needs one more sentence solving the house's road (y = 0) crossing, and feedback 2 grows by about 6 s.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from w24, w15, g01 and g03; check that the slide makes "signs flipped" a consequence, not a rule to memorise; that the house on the edge reuses w24's check without re-teaching it; that the square tiles make "add to both sides" visible; that the scene 4 circle landing on scene 3's is read as "the same circle"; that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
