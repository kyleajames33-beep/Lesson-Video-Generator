# Maths A11 W17: How do intersections solve f(x) = k and line-parabola systems? Level lines, substitution, tangents and two parabolas (design)

Status: Revision 2 (16 Nov 2026): independent learning review resolved (see "Revision 2" below); not voiced. Revision 1 (16 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`, the d01 Revision 6 pattern and the f01 and s01 models) and the w01 to w14 root rulings (`../checks/root-acceptance-maths-a11-w01-w14.md`). Not voiced (no `math-a11-w17/` folder, no audio). Needs the Codex learning review and maths check before voicing. Nothing recorded; human listening pending.

Narration 5,526 characters, 14 scene headings, about 502 s with holds (the key-notes scene fixed at 45 s), counted by script with the build parser rules (see "Narration length estimate").

## Revision 2 (16 Nov): learning review resolved

Review: `../checks/m-a11-w17-learning-review.md` (summary `../checks/m-a11-w01-w31-learning-review-summary.md`), with root's rulings of 16 Nov. Findings by the review's numbers:

1. Should fix, feedback 2 (about 33 s): **accepted**, reviewer's wording; the crossed slip keeps the detail. About 30 s.

Narration now 5,526 characters by script, about 502 s with holds (see "Narration length estimate"). Stage-plan times below are Revision 1 approximations; frames come from the recording's word timings. Every changed value was rechecked with SymPy (scratchpad `rev2_verify.py`); Codex's maths check remains the authority.

Scope: seventeenth video of the Year 11 Mathematics Advanced course (outline playlist order 17), after w16 (sketching parabolas and finding their equations) and before w18 (quadratic inequalities). Pre-design pack: `../pre-design/maths-a11/math-a11-w17.md` (brief 243). Site lesson (read through the pack's quotations, read only): `working-with-functions/lesson16.sa.html` (Intersections and Simultaneous Equations, SHA256 `6107881f3dbf6aef67f8062e189d685675ee4f90ebfb31194b44693f810ecd2b`, `we-2`, `we-3`, card 06). Every number recalculated with SymPy. Route entry: `math-a11-w17` in `../../programme/maths-a11-route-inputs-2.json`.

Owner rules applied: 2024 syllabus only, content points cited by codename and exact wording; painted plates for the real objects (a golf bank and green, a golf ball, an overhanging branch), coded flights, lines, level lines, readouts and algebra; no people, hands or faces (no golfer is drawn or named as a person; "a second ball" is played); one main learner question; one reasoning stage at a time; worked examples in the g01 layout with a framed answer and a crossed slip; "Pause here to answer." then a 10 s countdown with the full worded question and a picture; brief feedback with one crossed mistake; original HSC-style questions; key notes as five short bullets with a framed memory card; everyday anchor (sport, golf); Australian spelling; no em dashes; conversational narration that explains the cause before the rule.

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Working with functions; NESA content-system codenames, official `code` field empty), quoted from `../../programme/maths-a11-route-inputs-2.json`:

- `cie66d7ae0` (Quadratic and cubic functions): "Recognise that solving f(x) = k for some constant k corresponds to finding the x-coordinate(s) of the intersection of the graphs y = f(x) and y = k"
- `ci6d7b74df` (Quadratic and cubic functions): "Solve problems by finding the solution to simultaneous equations involving a linear and a quadratic function, or two quadratic functions, both algebraically and graphically"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

**Boundary:** starts from w16's final frame (the golf bank, the ball at its foot, the dashed flight y = x − 0.1x², the bank line y = 0.2x, a "?" ring and "Where does it land?"), recalling w13 (two lines meet where both equations hold). Reads f(x) = k as the x-coordinates where y = f(x) meets the level line y = k (site card 06, then the ball at 2.1 m) (`cie66d7ae0`); solves a line with a parabola by substitution and reads it on the graph (the bank, then site `we-2`); counts meetings with the discriminant of the substituted quadratic, including a tangent (site `we-3`); solves two parabolas (two golf flights crossing; then an original example where the x² terms cancel) (`ci6d7b74df`). Stops at meeting points and their count. Not taught: inequalities ("where is it above?", w18); models in context beyond the anchor (w19); circles and other curves (w24 onward). The site's key term "a line meeting a curve at exactly one point" is narrowed, as the pack's minor finding asks, to "for a parabola, a non-vertical line that meets it exactly once".

## Decisions

- **Anchor: a golf chip up a straight, rising bank (painted plates, live).** With the ball's starting spot at the origin, the flight is modelled by y = x − 0.1x² (metres; highest 2.5 m at 5 m along; it would land at 10 m on flat ground) and the bank's surface by y = 0.2x. One hole carries the lesson: "Where is the ball 2.1 m up?" is f(x) = k with a level line (3 m and 7 m along; one point at 2.5 m; none above); "Where does it land on the bank?" is a line meeting a parabola (x = 0, the start, and x = 8, the landing, at (8, 1.6)); a second ball lobbed higher, y = 1.6x − 0.2x², crosses the first flight at (6, 2.4), two parabolas. Sport. Distinct from every Year 12 Maths anchor (no golf; grep of `math-a12-*.md`) and from w01 to w16. w30's pack suggested golf scores against par; the w24 to w31 designer rejected it because of this pack and chose a rail trail (`../checks/root-decisions-maths-a11-w24-w31.md`), so golf is used once.
- **Idealising assumptions (author notes, not learner copy).** (i) A chipped golf ball's flight is close to a parabola over a short distance (air resistance ignored); the narration says "modelled by". (ii) The bank is a straight slope from the ball's spot. (iii) The branch's height is an illustrative 2.1 m; its position along the hole is not stated (the question is where the ball is at that height, not whether it hits).
- **Simulations (standard item 3).**
  1. **The level line** (scene 2, new `LevelLine` on `StudioPlot`, the pack's StudioLevelLine): a teal horizontal line y = k slides up through the flight; amber dots ride the meeting points, merge at the top and vanish above it; a `LiveReadoutBoard` shows "k" (teal), "x² − 10x + 10k = 0", "Δ = 100 − 40k" (violet) and "meetings: 2, 1, 0" (amber), all computed from k. The painted branch cross-fades in at 2.1 m when the line holds there.
  2. **The landing** (scene 3, `FunctionRider` with a plate ball): the painted ball rides the coded flight from the origin and stops where the computed meeting x = 8 falls; a blue tick and a teal tick drop to the axes.
  3. **The sliding line** (scene 5, `CrossingCounter` from w14 in a new `line` mode): a line y = 2x + c slides down across y = x²; its meeting dots split, merge and vanish while "Δ = 4 + 4c" and the count update; the line holds at c = −1, touching at (1, 1).
  4. **Two flights and their gap** (scene 6): both coded flights draw; a third, faint curve shows their difference (lob minus chip), whose zeros line up with the crossings on a dashed blue drop line.
- **Colour roles (fixed for the whole video).** Meeting points **amber** (as w14's zeros; the meetings are the zeros of the difference); x-values and x-coordinates **blue** (inputs, root ruling 12); y-values, heights and the level y = k **teal** (outputs); Δ **violet**; the parabola and flights ink; lines and the bank **green-grey**; answer green; mistake red, crossed slips only.
- **Large type (standard item 5).** Current working line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; all text above y = 950.
- **Handwritten voice (standard item 6).** `HandTag`: "same height", "level line", "two", "one: the top", "none", "both true at once", "start", "landing", "one side = 0", "points need y", "simpler equation", "Δ counts meetings", "touches", "tangent", "x² cancels", "a line, not a quadratic", "change every sign", circles, arrows and crossings. At most two live at once.
- **Stage changes (standard item 2), about every 30 to 50 s.** w16's frame (1); level lines on y = x², then on the flight (2); the landing on the bank (3); g01 board, a line and a parabola (4); the sliding line and the tangent board (5); two flights and their difference (6); g01 board, the cancelling case (7); framed memory card (8); question cards (9 to 12); the hoodie handoff (13); key notes (14).
- **Worked examples (g01 layout, standard item 7).** 4 (`we-2`): y = x² and y = x + 2 meet at (2, 4) and (−1, 1); crossed "x = 2 or x = −1" captioned "points need y". 5 (`we-3`): y = 2x − 1 is a tangent to y = x² at (1, 1); crossed "Δ = 0, so no solution" captioned "Δ = 0: one repeated root". 7 (original, pack section 3): y = x² + 2x and y = x² − x + 6 meet once, at (2, 8); crossed "a second point must exist" captioned "x² cancels: a line, at most one".
- **Memory aid (standard item 8).** Framed `MemoryAidCard`: "Meet means equal." Key line: "Set them equal, make one side 0, solve for x, then find each y. Δ of that quadratic counts the meetings." Key notes are five short bullets beside the card; 45 s.
- **Visual surprise (standard item 9).** On the level line (scene 2), the two meeting dots slide together and merge into one at the top of the flight at the instant the Δ readout reaches 0, then vanish; in scene 6 the faint difference curve's zeros sit exactly under the two crossings of the flights.
- **Site numbers unchanged.** Card 06: x² = 4 at x = ±2; x² = −1 no real solutions. `we-2`: (2, 4), (−1, 1). `we-3`: Δ = 0, contact (1, 1).
- **Attempts (pack questions, original).** A1: "Find the points of intersection of y = x² − 4x + 3 and y = x − 1." Answer (1, 0) and (4, 3). Crossed "x = 1 or x = 4". A2: "Find where the parabolas y = x² − 2x − 3 and y = −x² + 4x + 5 intersect." Answer (4, 5) and (−1, 0). Crossed "2x² + 2x + 2 = 0, so they never meet".
- **Mistake scene:** none separate. Giving only x-values (4 crossed; A1 crossed); Δ = 0 read as "no solution" (5 crossed); assuming two parabolas meet twice (7 crossed); moving terms without changing signs (A2 crossed); substituting back into the harder equation (3, 4 tag "simpler equation").
- **Cause chain taught, in order:** (1) f(x) = k asks where the graph's height is k, which is where it meets the level line y = k (2); (2) a meeting point is on both graphs, so both equations hold, so the expressions for y are equal there (3); (3) setting them equal leaves one equation in x; each solution gives a point, and each point needs its y (3, 4); (4) for a line and a parabola that equation is a quadratic, so its discriminant counts the meetings, and Δ = 0 means the line touches (a tangent, for a non-vertical line and a parabola) (5); (5) two parabolas work the same way, and if their x² terms cancel the equation is linear, so they meet at most once (6, 7).
- **Entry knowledge (route):** w13 (two lines meet where both equations hold); w14 (the discriminant counts real roots and x-intercepts); w16 (sketching a parabola from features).
- **Learner-visible vocabulary (plain meaning at first use):** intersection, point of intersection (a point on both graphs, where they meet, 1); level line (a horizontal line y = k, 2); substitute (replace y in one equation by its expression from the other, 3); tangent (for a parabola, a non-vertical line that touches it at exactly one point, 5).
- **Handoff (to w18, "How does the parabola decide a quadratic inequality?").** Scene 13: the club hoodie (`ma11-club-hoodie-v1.png`) with its swing tag (`maths/ma12-swing-tag-v1.png`, coded "$p"), beside the profit curve P = (p − 20)(120 − 2p) on axes (p "price ($)", P "profit ($)"), a dashed teal level line at P = 600 and a "?" on the p axis under the part of the curve above the line (no interval drawn). Chips "For which prices is P ≥ 600?" and "Next: quadratic inequalities". This is w18's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Flight y = x − 0.1x²: vertex (5, 2.5); zeros 0 and 10. Level k: x² − 10x + 10k = 0, Δ = 100 − 40k: k = 2.1 gives Δ = 16, x = 3, 7; k = 2.5 gives Δ = 0, x = 5; k = 3 gives Δ = −20.
  (b) Bank: x − 0.1x² = 0.2x ⇔ 0.1x² − 0.8x = 0 ⇔ 0.1x(x − 8) = 0; landing (8, 1.6).
  (c) Lob y = 1.6x − 0.2x²: lob − chip = 0.6x − 0.1x² = 0.1x(6 − x), zeros 0 and 6; both heights 2.4 at x = 6. (The narration sets chip = lob and moves terms to the chip's side: 0.1x² − 0.6x = 0.)
  (d) Sliding line y = 2x + c with y = x²: x² − 2x − c = 0, Δ = 4 + 4c: c = 2 gives 12; c = −1 gives 0; c = −3 gives −8.
  (e) Pronunciations: "zero point one x squared" (course decimal choice, w10), "two point one", "one point six x minus zero point two x squared".
  (f) Windows: golf plot x −1 to 11 m, y −0.5 to 3.5 m, equal scale, matched to the plate's 120 px per metre; worked-example plots x −3 to 4, y −2 to 10 (labelled scales).

Main question: *A golf chip flies up a rising bank. Where does it land, and where is it 2.1 m up? How do intersections solve f(x) = k and line-parabola systems?*
Entry knowledge (w13; w14; w16): two lines meet where both equations hold; the discriminant counts roots; sketching a parabola.
Stops after: f(x) = k as a level line; line-parabola and parabola-parabola systems by substitution and on a graph; both coordinates; the discriminant counts meetings; a tangent. No inequalities.
Handoff: math-a11-w18: the hoodie fundraiser: "For which prices is P ≥ 600?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed; see Decisions): meeting points amber; x-values blue; y-values and levels teal; Δ violet; parabolas ink; lines and the bank green-grey; answer green; mistake red, crossed slips only. Type: current line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; all text above y = 950. Every stage's main visual is solid from the stage's first frame. Header strip "MATHEMATICS ADVANCED · WORKING WITH FUNCTIONS"; scene headings in the hand font, 44 px.

### 1. hook: where does it land?
> Here's a golf chip, played from the foot of a straight bank that rises to the green. Put the ball's starting spot at the origin. Its flight is modelled by y equals x minus zero point one x squared, in metres, and the bank is the line y equals zero point two x. Where does the ball land? At that spot the ball and the bank are in the same place, so both equations are true at **once**. So how do intersections solve equations like these?

Visual: opens on w16's final frame exactly (the golf bank `ma11-golf-bank-v1.png`, about 1,400 px wide at 120 px per metre, the ball `ma11-golf-ball-v1.png` at the foot of the bank, the dashed ink flight y = x − 0.1x², the green-grey bank line y = 0.2x, axes, the "?" ring, chips "Where does it land?" and "Next: where two graphs meet"). On the first sentence the "Next" chip fades and the heading writes on "Where graphs meet". On "the origin" the axes' origin pulses at the ball. Equation strips write at the top left, 44 px: "flight: y = x − 0.1x²" (ink) and "bank: y = 0.2x" (green-grey). On "once" both strips light together and the "?" ring pulses, hand tag "both true at once".

### 2. f(x) = k: a level line
> Start with the simplest line, a flat one. Solving x squared equals four asks where y equals x squared reaches a height of four. That's where the parabola meets the level line y equals four, at minus two and **two**. And x squared equals minus one has no real solutions, because the parabola never gets down to minus **one**. Now the ball. Where is it two point one metres up, level with an overhanging branch? Slide a level line up to two point one. It cuts the flight twice, three and seven metres **along**. Raise it, and the two points close in, until at two and a half they meet at the **top**. Any higher, and the line misses. So solving f of x equals k means finding where the graph meets the line y equals **k**.

Visual: clear change. Left half: y = x² on axes (x −3 to 3, y −2 to 6; 760 × 560 px). Right half: the golf flight on the painted bank (720 px wide). Chip, 44 px: "f(x) = k ⟷ y = f(x) meets y = k". On "four" a teal level line y = 4 on the left plot; on "two" amber dots at (−2, 4) and (2, 4) with blue ticks at x = −2 and 2, row "x² = 4 ⇒ x = ±2" (52 px). On "one" the level line drops to y = −1 below the vertex, a grey "no meeting" tag, row "x² = −1: no real solutions". On "Now the ball" the left half dims and the right half grows (simulation 1). The painted branch `ma11-gum-branch-v1.png` hangs at the top right. On "two point one" the teal level line slides up to 2.1 and holds; the branch's lower edge lines up with it. On "along" amber dots at (3, 2.1) and (7, 2.1), blue ticks "3" and "7"; readout rows: "x − 0.1x² = 2.1", "x² − 10x + 21 = 0", "(x − 3)(x − 7) = 0", hand tag "level line". On "top" the line rises to 2.5; the dots slide together and merge at (5, 2.5) as "Δ = 100 − 40k" reads 0, hand tag "one: the top". The line rises to 3: the dot vanishes, "Δ = −20", hand tag "none". On "k" the line returns to 2.1 and the chip pulses.

### 3. a line meets a parabola: the landing
> Now the sloping bank. Where the ball lands, its height and the bank's height are equal, so set the two expressions **equal**. x minus zero point one x squared equals zero point two x. Bring everything to one side, and you get zero point one x, times x minus eight, equals **zero**. So x is zero, or eight. Zero is where the ball started, on the bank. Eight is the landing. Put eight into the simpler equation, the line, and y is one point **six**. The ball lands at eight, one point six, eight metres along and one point six metres up. A meeting point needs both **coordinates**.

Visual: camera continue onto the full golf plate (about 1,400 px wide) with both graphs; rows at the right third (52 px current, 32 px earlier). On "equal" the row "x − 0.1x² = 0.2x" with the two sides in ink and green-grey, hand tag "same height". On "zero" rows "0.1x² − 0.8x = 0" and "0.1x(x − 8) = 0", hand tag "one side = 0". On "or eight" the landing rider (simulation 2): the painted ball rides the flight from the origin and stops at x = 8 on the bank; amber dots at (0, 0) and (8, 1.6), tags "start" and "landing". On "six" the row "y = 0.2(8) = 1.6", hand tag "simpler equation"; blue tick "8" and teal tick "1.6" drop to the axes. On "coordinates" framed answer (green): "lands at (8, 1.6)".

### 4. worked example 1: a line and a parabola
> Here's the method on its own. Find the points of intersection of y equals x squared and y equals x plus two. Substitute, so x squared equals x plus two, and x squared minus x minus two equals **zero**. That's x minus two, times x plus one, so x is two or minus **one**. Now find each y from the simpler equation, y equals x plus two. That gives four and one. So the points are two, four, and minus one, **one**. Stopping at x equals two or minus one only half answers a question about points. Each point needs its **y**.

Visual: clear change to the g01 board. Task strip, 44 px: "Find the points of intersection of y = x² and y = x + 2." (site `we-2`). Givens card: "y = x²" (ink), "y = x + 2" (green-grey). A plot at the right (x −3 to 4, y −1 to 7; 600 × 520 px) draws both graphs. Rows, 52 px, one at a time: "x² = x + 2"; on "zero" "x² − x − 2 = 0"; on "one" (first bold) "(x − 2)(x + 1) = 0 ⇒ x = 2 or x = −1" (blue). On "simpler equation" rows "x = 2: y = 2 + 2 = 4", "x = −1: y = −1 + 2 = 1" (teal), hand tag "simpler equation"; amber dots land at (2, 4) and (−1, 1) on the plot. On "one" (second bold) framed answer (green): "(2, 4) and (−1, 1)". On "y" a red slip "x = 2 or x = −1" writes small and is crossed (caption "points need y").

### 5. how many meetings? the tangent
> How many meetings can a line and a parabola have? After substituting, you always get a quadratic, so the discriminant counts the meetings. Positive, two. Negative, **none**. Zero, exactly one, and a line that isn't vertical and meets a parabola exactly once just touches it. It's a **tangent**. Show that y equals two x minus one is a tangent to y equals x squared. Substitute, so x squared minus two x plus one equals zero. The discriminant is four minus four, which is **zero**. That's one repeated root, x equals one, and then y is one. So the line touches the parabola at one, **one**.

Visual: clear change to the sliding line (simulation 3) at the left: y = x² and a green-grey line y = 2x + c; readout board (52 px): "x² − 2x − c = 0", "Δ = 4 + 4c" (violet), "meetings" (amber). The line starts at c = 2 (Δ 12, two amber dots), hand tag "Δ counts meetings". On "none" it slides down to c = −3: Δ = −8, no dots. It returns up to c = −1: on "tangent" the two dots merge into one at (1, 1), Δ = 0, hand tag "touches". At the right, the g01 board: task strip, 44 px, "Show that y = 2x − 1 is a tangent to y = x², and find the point of contact." (site `we-3`). Rows, 52 px: "x² = 2x − 1", "x² − 2x + 1 = 0"; on "zero" "Δ = (−2)² − 4(1)(1) = 0" (violet); "(x − 1)² = 0 ⇒ x = 1", "y = 2(1) − 1 = 1". On "one" (last bold) framed answer (green): "Δ = 0: one point, so a tangent, touching at (1, 1)". A red slip "Δ = 0, so no solution" writes small and is crossed (caption "Δ = 0: one repeated root").

### 6. two parabolas: two flights cross
> Two parabolas work the same way. A second ball is lobbed higher from the same spot, modelled by y equals one point six x minus zero point two x squared. Where do the two flights cross? Set them equal and bring everything to one side. The x squared terms don't cancel here. We get zero point one x squared minus zero point six x equals **zero**, so x is zero, the start, or **six**. Both flights are two point four metres up there. So they cross six metres along, two point four metres **up**, exactly where the two curves meet on the **graph**. You could also find it graphically, by drawing both curves carefully or using a graphing **app**, and reading off the crossing. That's quick, but only the algebra gives exact values.

Visual: clear change back to the golf plate (about 1,300 px wide) with the chip's flight (ink) and the lob's flight (ink, dashed long) drawn from the ball; a second painted ball rides the lob. Rows at the right: "x − 0.1x² = 1.6x − 0.2x²"; on "zero" "0.1x² − 0.6x = 0 ⇒ 0.1x(x − 6) = 0"; on "six" "x = 0 or x = 6" (blue), hand tag "start" at 0. On "up" rows "chip: 6 − 3.6 = 2.4", "lob: 9.6 − 7.2 = 2.4" (teal); amber dot at (6, 2.4), framed answer (green): "the flights cross at (6, 2.4)". On "graph" the faint difference curve (lob minus chip, simulation 4) draws below, its zeros at 0 and 6 joined to the crossings by dashed blue drop lines, hand tag "same x". On "app" a small graphing-app panel (`ScreenApp`, as w13) shows both flights with its intersection tool reading "(6, 2.4)", hand tag "read it off"; on "exact values" the tag "graph: quick; algebra: exact" writes beside it.

### 7. worked example 2: when the x² terms cancel
> Two parabolas don't always meet twice. Find where y equals x squared plus two x meets y equals x squared minus x plus six. Set them equal. This time the x squared terms **cancel**, and you're left with three x equals six, so x is **two**. Then y is four plus four, which is **eight**. Check it in the other equation, four minus two plus six is eight too. They meet only once, at two, eight, because the equation left over is linear, not quadratic. Hunting for a second point is the **trap**.

Visual: clear change to the g01 board. Task strip, 44 px: "Find the point(s) of intersection of y = x² + 2x and y = x² − x + 6." (original; pack section 3). A plot at the right (x −4 to 4, y −2 to 14) draws both parabolas, one slid sideways from the other. Rows, 52 px: "x² + 2x = x² − x + 6"; on "cancel" the two "x²" strike out in grey, hand tag "x² cancels"; "3x = 6"; on "two" "x = 2" (blue); on "eight" "y = 4 + 4 = 8" (teal); amber dot at (2, 8); on "Check it" the row "check: 4 − 2 + 6 = 8 ✓". Framed answer (green): "one point: (2, 8)", hand tag "a line, at most one". On "trap" a red slip "there must be a second point" writes and is crossed (caption "x² cancels: linear, at most one").

### 8. memory aid
> Here's a way to remember it. Meet means equal. Set the two expressions equal, solve for x, then put each x back in for y. And the discriminant of that quadratic counts the **meetings**.

Visual: stage change to the framed `MemoryAidCard` (about 1,300 × 600 px, double ink frame, hand-font heading "Memory aid"). Left slot: the level line sliding over a small parabola, its dots merging at the top (a 3 s loop). Main line, hand font 60 px: "Meet means equal." On "meetings" the key line, 40 px: "Set them equal, make one side 0, solve for x, then find each y. Δ of that quadratic counts the meetings." Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. Find the points of intersection of y equals x squared minus four x plus three, and y equals x minus one. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Find the points of intersection of y = x² − 4x + 3 and y = x − 1." The full question stays on screen. Picture slot: empty axes (x −1 to 5, y −2 to 5) with no graphs drawn. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> Set them equal, so x squared minus five x plus four is zero. That's x minus one, times x minus **four**, so x is one or four. Using y equals x minus one, the y values are zero and **three**. So the points are one, zero, and four, three. Writing only x equals one or four isn't finished. The question asks for **points**.

Visual: the card shrinks to the top (30 px). `GivensStrip`: "y = x² − 4x + 3", "y = x − 1" (underlined as used). Rows, 52 px: "x² − 4x + 3 = x − 1"; on "four" "x² − 5x + 4 = 0 ⇒ (x − 1)(x − 4) = 0 ⇒ x = 1 or 4"; on "three" "y = 1 − 1 = 0; y = 4 − 1 = 3". Framed answer (green): "(1, 0) and (4, 3)"; the picture draws both graphs with amber dots. On "points" a red slip "x = 1 or x = 4" writes and is crossed (hand caption "points need y"). Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. Find where the parabolas y equals x squared minus two x minus three, and y equals minus x squared plus four x plus five, intersect. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Find where the parabolas y = x² − 2x − 3 and y = −x² + 4x + 5 intersect." The full question stays on screen. Picture slot: empty axes (x −3 to 6, y −5 to 10), no graphs. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 12. feedback 2 (brief)
> Set them equal and bring everything to the left. Two x squared minus six x minus eight is zero, so x squared minus three x minus four is **zero**. That's x minus four, times x plus one, so x is four or minus **one**. In the first equation, four gives five, and minus one gives zero. So the points are four, five, and minus one, **zero**. If you decided they never meet, a sign didn't change when a term **moved**.

Visual: the card shrinks to the top. `GivensStrip`: both equations (underlined as used). Rows, 52 px: "x² − 2x − 3 = −x² + 4x + 5"; "2x² − 6x − 8 = 0"; on "zero" "x² − 3x − 4 = 0"; on "one" "(x − 4)(x + 1) = 0 ⇒ x = 4 or −1"; rows "x = 4: y = 16 − 8 − 3 = 5", "x = −1: y = 1 + 2 − 3 = 0". On "zero" (last answer cue) framed answer (green): "(4, 5) and (−1, 0)"; the picture draws both parabolas with amber dots. On "moved" a red slip "2x² + 2x + 2 = 0, so they never meet" writes and is crossed (hand caption "change every sign"). Hold about 1 s.

### 13. handoff
> So meeting points come from setting the equations equal, and the discriminant counts them. Next, the question changes from where is it equal, to where is it bigger. Here's a club's hoodie fundraiser. Its profit at each price is modelled by a parabola. For which prices is the profit at least six hundred **dollars**?

Visual: the memory line shows small at the top (30 px), then fades on "Next". Board clears to the hoodie plate `ma11-club-hoodie-v1.png` (about 640 px wide, solid) at the left with its swing tag (`maths/ma12-swing-tag-v1.png`, coded "$p"), and at the right the profit curve P = (p − 20)(120 − 2p) on axes (p "price ($)" 0 to 70, P "profit ($)" −200 to 900). On "at least six hundred" a dashed teal level line at P = 600 draws; on "dollars" a "?" sits on the p axis under the part of the curve above the line (no interval drawn). Chips "For which prices is P ≥ 600?" and "Next: quadratic inequalities". Hold about 2 s. This is w18's opening frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- f(x) = k: x-values where y = f(x) meets y = k.
- Meeting points: set the expressions equal, one side 0.
- Solve for x, then find each y. Give points.
- Line and parabola: Δ > 0 two, Δ = 0 tangent, Δ < 0 none.
- Two parabolas: if x² cancels, at most one point.

Memory aid (framed card, right side of the notes screen, as in scene 8): *Meet means equal.* Key: *Set them equal, make one side 0, solve for x, then find each y. Δ of that quadratic counts the meetings.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades (1 s) back to scene 13's frame exactly (the hoodie and tag, the profit curve, the dashed level line at 600, the "?" and both chips). This is the final frame and w18's opening frame.

## Teaching checks

- **Does it explain causes?** Why f(x) = k is a level line: the equation asks where the height is k (2). Why set the expressions equal: at a meeting point both equations hold, so both give the same y (3). Why find y as well: a point has two coordinates (3, 4). Why Δ counts meetings: substituting leaves a quadratic whose real roots are the meetings (5). Why Δ = 0 is a tangent: one repeated root, one touching point (5). Why parabolas can meet once: when the x² terms cancel, the equation is linear (7).
- **Misconceptions addressed:** x-values only (4 crossed; A1 crossed); Δ = 0 as "no solution" (5 crossed); two parabolas must meet twice (7 crossed); sign errors when moving terms (A2 crossed); the harder equation for y (3, 4 tags).
- **Visual standard (`../maths-visual-standard.md`), item by item:** 1 the painted golf bank and ball from the first frame, returning in 2, 3 and 6; 2 a new stage every 30 to 50 s; 3 the level line with live Δ and count, the landing rider, the sliding line, the difference curve; 4 fixed colour roles; 5 large type; 6 hand tags; 7 g01 boards in 4, 5 and 7 with framed answers and crossed slips; 8 framed memory card and five short bullets; 9 the meeting dots merging at the top as Δ reaches 0, and the difference curve's zeros under the crossings.
- **One idea at a time:** level lines (2), substitution on the anchor (3), the method alone (4), counting and tangents (5), two parabolas (6), the cancelling case (7).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible, each card with empty axes; 10 s each with the invitation to pause; nothing answer-bearing. One crossed mistake each; feedback about 24 s and 33 s.
- **Avoided double teaching:** simultaneous linear equations (w13), the discriminant (w05, w14) and factorising (w04) are used, not re-taught.
- **Syllabus coverage:** `cie66d7ae0` (2; key note 1); `ci6d7b74df` (3 to 7; A1, A2; key notes 2 to 5), both algebraically (rows) and graphically (every meeting shown on its graph).
- **Out of scope by design:** inequalities (w18); models in context (w19); other curves.

## Practice questions and model answers

**Attempt 1 (scene 9; original wording, HSC style, 2 marks suggested, not an official marking scheme).** "Find the points of intersection of y = x² − 4x + 3 and y = x − 1."
Model answer: x² − 4x + 3 = x − 1, so x² − 5x + 4 = 0, (x − 1)(x − 4) = 0, x = 1 or x = 4. Using y = x − 1: y = 0 or y = 3. Points (1, 0) and (4, 3). Classic mistake (crossed): "x = 1 or x = 4".

**Attempt 2 (scene 11; original wording, HSC style, 3 marks suggested).** "Find where the parabolas y = x² − 2x − 3 and y = −x² + 4x + 5 intersect."
Model answer: x² − 2x − 3 = −x² + 4x + 5, so 2x² − 6x − 8 = 0, x² − 3x − 4 = 0, (x − 4)(x + 1) = 0, x = 4 or x = −1. y = 16 − 8 − 3 = 5 and y = 1 + 2 − 3 = 0. Points (4, 5) and (−1, 0). Classic mistake (crossed): "2x² + 2x + 2 = 0, so they never meet".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Golf flight | y = x − 0.1x²; vertex (5, 2.5); zeros 0, 10 | 1, 2, 3, 6 |
| Card 06 | x² = 4: x = ±2; x² = −1: none | 2 |
| Level line | k = 2.1: x = 3, 7 (Δ = 16); k = 2.5: x = 5 (Δ = 0); k = 3: none (Δ = −20); Δ = 100 − 40k | 2 |
| Bank | 0.1x(x − 8) = 0; x = 0, 8; landing (8, 1.6) | 3 |
| Site `we-2` | x² = x + 2: (2, 4), (−1, 1) | 4 |
| Sliding line | y = 2x + c: Δ = 4 + 4c; c = 2, −1, −3 give 12, 0, −8 | 5 |
| Site `we-3` | x² − 2x + 1 = 0; Δ = 0; (1, 1) | 5 |
| Lob | y = 1.6x − 0.2x²; crosses chip at x = 0, 6; (6, 2.4) | 6 |
| Cancelling case | x² + 2x = x² − x + 6: x = 2, y = 8 | 7 |
| A1 | (1, 0), (4, 3) | 9, 10 |
| A2 | 2x² − 6x − 8 = 0: (4, 5), (−1, 0); crossed 2x² + 2x + 2 = 0 (Δ = −12) | 11, 12 |
| Handoff | hoodie P = (p − 20)(120 − 2p); level 600 | 13 |

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy 1.14 (16 Nov 2026, scratchpad `w15w23/verify.py`, 85 checks, none failing); Codex to re-check.

- x² = 4 gives ±2; x² + 1 = 0 has no real roots.
- x − 0.1x² = 2.1 gives x = 3, 7; = 2.5 gives x = 5; = 3 has no real roots; Δ of x² − 10x + 10k is 100 − 40k (16, 0, −20 at k = 2.1, 2.5, 3).
- x − 0.1x² = 0.2x gives x = 0, 8; 0.2(8) = 1.6; the flight is 0 at x = 10.
- x² = x + 2 gives x = −1, 2; points (−1, 1), (2, 4).
- x² − 2x + 1 has Δ = 0; root 1; point (1, 1). Δ of x² − 2x − c at c = 2, −1, −3: 12, 0, −8.
- x − 0.1x² = 1.6x − 0.2x² gives x = 0, 6; both 2.4 at x = 6; the lob is 0 at x = 8.
- x² + 2x = x² − x + 6 gives x = 2; y = 8.
- x² − 4x + 3 = x − 1 gives x = 1, 4; points (1, 0), (4, 3).
- x² − 2x − 3 = −x² + 4x + 5 gives x = −1, 4; points (−1, 0), (4, 5); 2x² + 2x + 2 has Δ = −12.

## Memory aid check

- **"Meet means equal."** Original. Meaning, as said in scene 8: at a point where two graphs meet, their y-values are equal, so set the two expressions for y equal, solve for x, and find each y; for a line or parabola against a parabola, the discriminant of the resulting quadratic counts the meetings. Assumptions checked: both graphs written as y = expression in x; the discriminant count applies when the resulting equation is quadratic (when x² cancels, it is linear: scene 7 and key note 5). It helps a new case: y = x² and y = 4x − 4 give x² − 4x + 4 = 0, Δ = 0, a tangent at (2, 4). Introduced after the causes in 2 to 5.
- **Considered, not used:** "Substitute, solve, sub back" (a procedure without the reason).

## Narration length estimate

Recounted for Revision 2 (16 Nov 2026). Counted 16 Nov 2026 with the build parser rules (`### N.` headings; only lines starting "> " inside the scene, joined with a space, `**` removed; the total is the sum of the scene strings): **5,526 characters**, 14 scene headings. Characters per scene (1 to 14): 432, 699, 563, 504, 573, 707, 475, 181, 137, 308, 163, 397, 312, 75.

At 13.3 characters per second the speech is about 415 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, two feedbacks 1 s each, handoff 2 s) 6 s; settling for the level line's sweep (2), the landing rider (3), the sliding line (5) and the two flights with their difference curve (6), about 22 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 502 s (8 min 22 s)**, inside the 5,500 to 6,800 character band and about 68 s under the 570 s cap.

Reserve trims, if the voiced takes run long, in this order: scene 2's "Any higher, and the line misses." (keep the vanishing dot); scene 6's last clause (keep the difference curve). Do not cut below 5,500 characters.

## Scene list and build ids

Lesson key `m-a11w17` (route math-a11-w17). Explainer folder `src/explainer/lessons/math-a11-w17`; build inputs in `docs/production/claude-pm/lessons/math-a11-w17/` (to be created at voicing).

In order (kebab-case; 14 scene headings): hook-landing, level-line, landing-on-bank, worked-line-parabola, tangent, two-flights, worked-cancel, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (seconds from the estimate):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 34 s | 1 | w16's frame; the golf bank, the flight and the bank line |
| 34 to 95 s | 2 | Level lines on y = x², then on the flight with live Δ and count |
| 95 to 141 s | 3 | The landing: the ball rides to (8, 1.6) |
| 141 to 181 s | 4 | g01 board: a line and a parabola |
| 181 to 236 s | 5 | The sliding line; the tangent board |
| 236 to 279 s | 6 | Two flights cross; the difference curve |
| 279 to 314 s | 7 | g01 board: the x² terms cancel |
| 314 to 332 s | 8 | Framed memory card |
| 332 to 436 s | 9 to 12 | Question cards with pictures and countdowns, then feedback |
| 436 to 462 s | 13 | The hoodie and its profit curve with "P ≥ 600?" |
| 462 s to end | 14 | Key notes with the framed card, then a silent return to scene 13's frame |

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): w16's last frame continues into scene 1 (identical frame); 1 to 2 clear change (two panels); 2 to 3 camera continue onto the full golf plate; 3 to 4 clear change; 4 to 5 clear change; 5 to 6 clear change back to the plate; 6 to 7 clear change; 7 to 8 camera pull back to the card; attempts and feedback: the card shrinks to the top; 12 to 13 board clear; 13 to 14 fade to the notes board, then a silent return to scene 13's frame.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, the ring shown full from "Pause here to answer."). key-notes is 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11-w17-learning-review.md`, `science_check` = `checks/m-a11-w17-maths-check.md`.

## Assets

Inspected before choosing (16 Nov 2026, `public/assets/maths`, read only): `ma12-cricket-ball-v1.png` (a cricket ball, not a golf ball; not used); `ma12-cricket-grass-strip-v1.png` (flat mown grass; the bank needs a slope, so a new plate is painted); `ma12-swing-tag-v1.png` (reused in the handoff); `ma12-young-gum-tree-v1.png` (a thin staked sapling, not an overhanging branch). No golf plate exists.

Need (painted, new; see the Codex asset brief): `ma11-golf-bank-v1.png` (also w16's handoff), `ma11-golf-ball-v1.png` (also w16's handoff), `ma11-gum-branch-v1.png`. w18's `ma11-club-hoodie-v1.png` is commissioned in w18's brief and must be painted before this video's build (scene 13). Reused: `maths/ma12-swing-tag-v1.png`.

Coded (studio kit): flights, lines, level lines, axes, dots, ticks, the difference curve, readouts, working boards, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `MATH_ROLES` and `Role`, `HandTag`, `PlateImg`, `LiveReadoutBoard`, `ParameterSlider`, `StudioPlot`, `FunctionSimulator`, `FunctionRider`, `ScreenApp` (w13, its intersection tool), `TaskStrip`, `EquationStrip`, `GivensCard`, `WorkingRows`, `AnswerFrame`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard` with `GivensStrip`; `CrossingCounter` (w14) with a new `line` mode.

Additions (new kit-needs row w17):
1. **`LevelLine`** (new; reused by w18 and w21): a horizontal line y = k(t) on a `StudioPlot` or plate overlay, with meeting dots computed from `f(x) = k` (real roots only), a merge at a double root, and optional readouts (the quadratic, Δ, count). Checks: on y = x − 0.1x², k = 2.1 gives dots at 3 and 7; k = 2.5 one dot at 5; k = 3 none.
2. **`CrossingCounter` `line` mode**: the parameter is a line's intercept c against a fixed parabola; Δ and the count computed from the substituted quadratic. Check: y = 2x + c on y = x²: Δ = 4 + 4c; one dot only within 1e-9 of c = −1 (the build holds the slider there).
3. **Difference curve** (lesson folder): plots g(x) − f(x) faintly with dashed drop lines from its zeros to the crossings.

## Codex asset brief (Maths A11 W17, a golf bank, ball and branch; also w16's handoff)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-w17.md`. Paint after the learning review and maths check pass and root gives the go-ahead, and **before the w16 build** (w16's final frame uses plates 1 and 2). Save to `public/assets/maths/`. Every plate: **transparent PNG with a true alpha channel**, clean edges (check on black and white); ink and watercolour in the house style, matched to `maths/ma12-timber-deck-v1.png` and `maths/ma12-pen-wall-v1.png`; no text, logos, people, hands, faces, pets, golf bags, clubs, sky, glow or shadow beyond a faint contact shadow. Never stretch to fit; keep the native aspect ratio.

1. `ma11-golf-bank-v1.png`: a side-on golf hole cross-section, 1800 × 700 px, **painted at equal scale, 120 px per metre**. From the left: 2 m of flat mown fairway; then, starting at x = 0 m (pixel x = 240), a straight, even grassy bank rising at **exactly 1 in 5** (0.2 m up per metre along) for 10 m, to 2.0 m above the fairway; then 2.5 m of flat green on top with a flagstick and flag (flag plain, no number or text). The fairway line sits at pixel y = 600. The bank's surface must be a straight line from (0 m, 0 m) to (10 m, 2.0 m) within 2 px.
2. `ma11-golf-ball-v1.png`: a plain white golf ball with dimples, 200 × 200 px (the builder scales it uniformly to about 34 px).
3. `ma11-gum-branch-v1.png`: an overhanging eucalyptus branch with leaves, entering from the right edge and hanging horizontally, 900 × 360 px, its lowest leaves along a nearly level line (the builder aligns that line to the 2.1 m level).

Report in a sidecar `ma11-golf-bank-v1.json`, in file pixels: the fairway line y, the bank's foot and top points, and the measured surface heights at x = 0, 2, 4, 6, 8, 10 m. Report inspection on the paper background (`#f6f1e7`) at 1,400 px wide, the alpha checks, and the bank plate with the coded flight y = x − 0.1x² and line y = 0.2x overlaid (they must meet at 8 m along on the painted surface).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", the bank geometry in the asset brief, and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the two syllabus quotes match the route-inputs JSON exactly, and no site module label appears.
3. Confirm the scope of every learner-visible general claim: "solving f(x) = k means finding where the graph meets y = k" (2); "after substituting, you always get a quadratic" (5; a line and a parabola); "a line that isn't vertical and meets a parabola exactly once is a tangent" (5); "two parabolas, if x² cancels, meet at most once" (7, key note 5); the model language for the flights (1, 6).
4. Confirm the site's card 06, `we-2` and `we-3` keep their answers.
5. Confirm both attempt questions carry every demand, and that neither card or its picture shows a graph, point or answer.
6. Confirm the opening matches w16's final frame and scene 13's frame is w18's opening frame.
7. Confirm no em dash (U+2014) anywhere in this file, Australian spelling, and the narration counts by script with every bold cue quoted in its scene's Visual in spoken order.
8. Confirm the plate requests contain no people, pets, text or logos.

## YouTube metadata (draft)

Title: Where Graphs Meet: f(x) = k and Line-Parabola Systems | Year 11 Maths Advanced

(Title length: 80 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/working-with-functions/lesson16.sa.html

Where does a golf chip land on a rising bank? Where is the ball 2.1 m up? Solving f(x) = k means finding where the graph meets the level line y = k, and solving a line with a parabola means setting the two equations equal, because at a meeting point both are true. See why the discriminant counts the meetings, show that a line is a tangent, find where two parabolas cross, and spot when they can meet only once. A memory aid: meet means equal. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, working with functions.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Recognise that solving f(x) = k for some constant k corresponds to finding the x-coordinate(s) of the intersection of the graphs y = f(x) and y = k"
"Solve problems by finding the solution to simultaneous equations involving a linear and a quadratic function, or two quadratic functions, both algebraically and graphically"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa3d488ed2

Builds on: simultaneous linear equations; the discriminant; sketching parabolas. Next: Quadratic inequalities: how the parabola decides.

#Year11Maths #MathsAdvanced #Parabolas #HSCScience

## Open decisions

- **1. Golf (resolved).** w30's designer chose a rail trail, not golf scores, so no other Year 11 video uses golf.
- **2. Site tangent wording (root).** The pack's minor finding (lesson16's key term) is applied in the narration; root decides whether to log it in `../site-corrections-maths-a11.md`.
- **3. Scene 5 density (learning review).** The sliding line and the tangent board share one scene; if the reviewer finds it fast, split into 5 and 5a (adds about 8 s).
- **4. Site link form.** `.sa.html`, as root decision 15.

## Review notes

- Revision 2 (16 Nov 2026): the independent learning review (`../checks/m-a11-w17-learning-review.md`) is resolved; see the Revision 2 section. Next: Codex maths check and error check, then voicing and a build to grade A.
- Revision 1 has had no independent review. Next: student learning review (trace from w13 and w14; check that "both true at once" is the reason for setting equal; that the start point x = 0 is explained, not ignored; that the merge at Δ = 0 is seen; that the cancelling case is a surprise, not a rule), then the Codex maths check and error check, then voicing and a build to grade A.
- The level line, the landing and the sliding line carry the explanation; judge them at playback speed, not from stills. Every dot and readout must be computed from the same coefficients as the displayed graphs.
