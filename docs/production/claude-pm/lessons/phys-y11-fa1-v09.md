# Year 11 Physics FA1 V09: How can constant-acceleration equations predict one-dimensional motion? The three equations of uniformly accelerated motion, built from the v-t graph and used to predict a stopping distance nobody measured (design)

Status: Revision 1 (2 Nov). Needs independent student learning review (`docs/production/student-learning-review.md`), a Codex physics check and a Codex error check. Voice: Google AI Studio, after the brief 124 pilot; physics follows Year 12 Maths and Year 11 Biology in the voicing queue (route root decision). Nothing recorded; human listening pending. Plates: two reused car plates and one new trolley plate (see Assets).

Narration 6,282 characters, 16 scenes, about 566 s (9.4 minutes) including one 3 s prediction countdown, two 10 s attempt countdowns and the notes hold, counted by script with the build parser rules (see "Narration length estimate").

Scope: ninth video of Year 11 Physics (2025), Focus Area 1, Fundamentals of mechanics. Format and quality templates: `math-a12-d10.md` (calculation video: task, equation and grouped givens; coded graphs; aligned algebra; result lines on spoken cues) and `bio-y11-fa1-v05.md` (painted objects at native aspect, no people). Route entry **phys-y11-fa1-v09** in `../../phys-y11-video-route.json` (route-approved by root 1 Nov; playlist order 9; kind concept). Pre-design pack `../pre-design/phys-y11/phys-y11-fa1-v09.md` (every number recalculated below). Site lesson read in full as text (2 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa1-fundamentals-of-mechanics/lesson09.sa.html`, SHA256 `3c540cd6aa58bdc9a37373bf990ff4ffa164ea3d312980d884db0923d475867a` (recomputed 2 Nov). Sections used: hook (the 30 m/s car stopping in 5 s, "a distance you never measured"), the five quantities and three equations card ("each equation leaves out one quantity"), choosing and using an equation (worked example `we-1`, numbers unchanged), sign conventions and deceleration, the misconceptions card, the warm-up (a = 2 m/s² for 3 s from rest, re-based as attempt 1 with a trolley). Lesson review key **p-y11-v09**.

Syllabus content point (Physics 11-12 (2025), Year 11, Focus Area 1, Fundamentals of mechanics, group "Motion relationships"; local ledger ID P25-FA1-G2-04; official CMS codename), quoted from the route JSON `syllabusActions` with the vector notation written in linear form:

- `ci72f29382`: "Solve problems involving uniformly accelerated motion in one dimension using s⃗ = u⃗t + ½a⃗t², v⃗ = u⃗ + a⃗t and v⃗² = u⃗² + 2a⃗s⃗"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

**Boundary.** Entry knowledge (route): Stage 5 Science and Mathematics (signed arithmetic, SI units, rearrangement, graph gradients, area of a rectangle and triangle, difference of two squares) and phys-y11-fa1-v08 (on a v-t graph the gradient is the acceleration and the signed area is the displacement). Start (route): "Start with Equations of Uniformly Accelerated Motion. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions." Stop (route): "Stop after the learner can answer: How can constant-acceleration equations predict one-dimensional motion? Teach only the listed actions; the next video owns its separate question." Next (route): "phys-y11-fa1-v10: How can two graphical methods measure gravitational acceleration reliably?" Not taught: free fall as its own topic (v10 uses it); vertical throws and turning points; two-object meeting problems; reaction distance; graphs with changing acceleration beyond one "doesn't apply" inset; projectile components (Year 12).

**Opening frame (assumption; see Open decisions).** phys-y11-fa1-v08 is being designed in parallel. Its route `nextHandoff` reads "phys-y11-fa1-v09: How can constant-acceleration equations predict one-dimensional motion?", and its pack's worked example `we-1` is a straight v-t line from 4 m/s at t = 0 to 20 m/s at t = 8 s with acceleration 2.0 m/s² and signed area 96 m. V09 opens on that graph: axes v (m/s) against t (s), the blue line from (0, 4) to (8, 20), a gradient triangle tagged "a = 2.0 m/s²", the trapezium under the line shaded and tagged "s = 96 m", and a "Next" chip carrying this video's question. Scenes 1 to 5 reuse this graph as the derivation example, so the equations are checked against numbers students have just met.

## Decisions

- **Learner question kept (route), answered as a cause.** "How can constant-acceleration equations predict one-dimensional motion?" The answer, built in order: when the acceleration is constant the v-t graph is a straight line (2); its slope gives v = u + at (3); its area, a rectangle plus a triangle, gives s = ut + ½at² (4); removing the time between them gives v² = u² + 2as (5); each equation leaves out one quantity, so knowing any three of s, u, v, a and t predicts the rest (6, 8 to 10). The equations are the v08 graph rules written as algebra, which is why they only hold while the line is straight.
- **Hook surprise and prediction (site hook, kept with its numbers).** A car at 30 m/s stops in 5.0 s. Nobody measured the distance. The hook offers a reference: at a steady 30 m/s it would cover 150 m. "Is the real distance half of that, more than half, or less?" A 3 s countdown follows (in-teaching prediction). Scene 9 answers: exactly half, 75 m, because the v-t graph is a triangle and the average velocity is 15 m/s. The braking car's position marks (27, 48, 63, 72, 75 m at each second) show the gaps shrinking, so the "less than steady" part is visible before it is calculated.
- **Make the cause visible before the rule (owner physics bar).** Every equation is drawn from the graph before it is written: a growing velocity arrow on the yellow car gains 2 m/s each second while the line climbs (2, 3); the area splits into a rectangle (32 m, "if it stayed at u") and a triangle (64 m, "the extra from speeding up") (4); the trapezium's average height times width meets t = (v − u)/a, and t is struck out on screen (5). Each equation is then checked with v08's numbers (20, 96, 400).
- **Third equation derived, not just stated.** The site states v² = u² + 2as. Here the area is written as average velocity times time, ½(u + v)t (a picture of the trapezium, not a fourth equation to learn), and t = (v − u)/a is substituted; the difference of two squares (Stage 5) gives (v² − u²)/(2a). Four algebra lines, one per cue; the narration says the idea ("put that time into the area, and the time disappears"), the screen carries the lines.
- **Constant acceleration as a kept condition (site misconception 1).** One sentence and one small inset in scene 2: a curved v-t line ("acceleration changing") with a grey cross "these equations don't apply". Kept in learner copy because without it students apply the equations to any motion. Key note 1 starts "For constant acceleration only".
- **Signs (site misconception 2 and sign card).** Scene 7: right is positive; the braking car's velocity arrow points right and shrinks; its acceleration arrow points left; so a is negative. "Slowing down doesn't need different equations. It's just a negative a, when the velocity is positive." The scoped wording avoids teaching "negative a means slowing down" (site Q3's point: a negative a with a negative velocity speeds the object up; author note b; not taught further here).
- **Worked example (site `we-1`, numbers unchanged; solved with the syllabus equations).** u = 30 m/s, v = 0, t = 5.0 s, find s. The missing quantity is a, and all three syllabus equations contain a, so a is found first: 0 = 30 + 5.0a gives a = −6.0 m/s²; then s = ut + ½at² = 150 − 75 = 75 m. The site's route (the average-velocity form) returns as the reason the answer is exactly half of 150 (scene 9), shown as the triangle's area, so the student sees both the syllabus method and the graph check. Grey chip: "check: v² = 30² + 2(−6.0)(75) = 0 ✓" (site's check, kept).
- **Second demonstration: half the speed, a quarter of the distance (pack candidate 2's idea, new numbers on the worked example's car).** The same car and brakes (a = −6.0 m/s²) at 15 m/s: 0 = 15² + 2(−6.0)s gives s = 225/12 = 18.75 m, about 19 m, exactly a quarter of 75 m. This shows why v² = u² + 2as is the equation to choose when no time is given, and gives a true, memorable consequence (braking distance proportional to u² at constant braking acceleration). "Braking distance" excludes the distance covered before the brakes go on (author note c; not taught).
- **Memory aid (scene 6): "Find the missing letter, then pick the equation without it."** True for the three syllabus equations when the missing quantity is s, v or t. The worked example immediately meets the exception (a missing: every equation has a, so find a first), and the narration says so. Assumptions under "Memory aid check".
- **Units, significant figures and precision.** Site values are kept: 30 m/s and 5.0 s are treated as two significant figures, so 75 m (two figures) and −6.0 m/s². The half-speed case gives 18.75 m on a grey readout and "about 19 m" (two figures) on the answer line. Attempts use three-figure data (2.00, 3.00; 12.0, 18.0) and three-figure answers (6.00, 9.00; −4.00, 3.00). All values are ideal teaching values, not measurements (no uncertainty is implied).
- **Attempts (original).** (A1, pack candidate 1, trolley) From rest, a = 2.00 m/s² for 3.00 s: v = 6.00 m/s, s = 9.00 m. Crossed: "s = vt = 18.0 m" (treats the trolley as moving at its final velocity the whole time). (A2, car) 12.0 m/s, stops uniformly in 18.0 m: a = −4.00 m/s² from v² = u² + 2as, then t = 3.00 s from v = u + at. Crossed: "a = +4.00 m/s²" (it gives t = −3.00 s, an impossible time; braking acceleration points against the motion). Neither card names the equation to use.
- **Mistake scene:** none separate. "The equations work for any motion" (2, inset; key note 1); "deceleration needs different equations" (7, said positively); "the answer is distance = speed × time" (hook reference 150 m, then 1 crossed in feedback 1); "drop the minus sign" (7, feedback 2 crossed); "doubling speed doubles stopping distance" (10, shown false).
- **Site sources used:** hook; five quantities card ("each equation leaves out one quantity", kept as the selection rule); the choosing card's list, mark and select routine; `we-1` (unchanged numbers; site's check kept); sign card (right positive, deceleration as negative a); misconceptions 1 and 2; warm-up (re-based as A1). Not used: the motorbike activity and the matching task (site practice), short-answer Q1 (free fall, which v10 meets in the lab) and Q2 (pattern used with new numbers in A2), Q3 (sign of a when v is negative; author note b).
- **Site errors and gaps found (this read, 2 Nov; for `../site-corrections-phys-y11.md`; none logged yet):**
  1. Choosing card, `we-1` step 2: "use the equation with u, v, t and s (no a): the average-velocity form." The card above names three formula-sheet equations, and the 2025 content point lists only s = ut + ½at², v = u + at and v² = u² + 2as; none of them omits a, so the routine "pick the equation containing exactly those" fails for this example. Proposed: "None of the three equations leaves out a, so find a first: a = (v − u)/t = −6.0 m/s². Then s = ut + ½at² = 75 m. Check: the area of the v-t triangle, ½(u + v)t, gives the same 75 m." (Scope correction, not an arithmetic error.)
  2. Lesson summary: "These 'equations of motion' are on your formula sheet". Not verified for the 2025 course's examination data sheet. Proposed: "These are the equations of motion named in the syllabus" until the 2025 data sheet is confirmed.
  3. Short-answer Q1 model answer: "v = 0 + 9.8 × 2.0 = 19.6 m s⁻¹ ... s = 19.6 m". Data are two significant figures (9.8, 2.0), so the final answers should be 20 m/s and 20 m (or 19.6 kept only as an unrounded intermediate). Precision note, as the log's existing precision notes.
  4. Hook "stops in 5 s" against `we-1` "5.0 s": the same event with two precisions. Proposed: "5.0 s" in both.
- **Cause chain taught, in order:** (1) a reference distance at steady speed, and a prediction (1); (2) the five quantities; constant acceleration means equal velocity changes each second, so the v-t line is straight (2); (3) slope: start at u and gain a each second, so v = u + at (3); (4) area: rectangle ut plus triangle ½at², so s = ut + ½at² (4); (5) remove time: v² = u² + 2as (5); (6) each equation omits one quantity; the missing letter picks the equation (6); (7) a positive direction; braking acceleration opposes the velocity (7); (8) find a first when a is the missing letter (8); (9) find s; exactly half, because the graph is a triangle (9); (10) no time given: v² = u² + 2as; half the speed, a quarter of the distance (10).
- **Learner-visible vocabulary (plain meaning at first use):** displacement s (how far, and which way, the object ends up from its start, 2); initial velocity u (the velocity at the start of the time interval, 2); final velocity v (at the end, 2); acceleration a (recalled from v07 and v08: the change in velocity each second, 2); uniform or constant acceleration (the velocity changes by the same amount every second, 2); positive direction (the direction you choose to count as plus, 7); braking distance (the distance covered while the brakes are on, 9).
- **Legacy logic ported:** none. The 2017 Physics kit supplies drawing parts only (`course-kit.tsx` `Arrow`, `graphScale`, `DataGraph` axes with units); no old-kit route or coverage is claimed.
- **No human figures.** The cars and the trolley are empty objects; no driver is drawn or mentioned ("its brakes go on").
- **Author notes (not learner copy):**
  (a) Derivations: v = u + at is the definition of constant acceleration, a = (v − u)/t, rearranged. s is the area under the straight v-t line: ut + ½(v − u)t = ut + ½at². Equivalently s = ½(u + v)t; with t = (v − u)/a, s = (v + u)(v − u)/(2a) = (v² − u²)/(2a), so v² = u² + 2as (a ≠ 0).
  (b) Sign scope: "slowing down" means a is opposite in sign to v. A negative a with a negative v speeds the object up (site Q3). Scene 7 speaks only of a positive velocity; key note 4 says "a is opposite to v".
  (c) Braking distance assumes constant braking acceleration from the moment the brakes go on; real stopping distance adds the distance covered during the reaction time at constant speed, which is not modelled here. "Proportional to u²" holds for a fixed braking acceleration and v = 0.
  (d) Two-figure values: 30 m/s and 5.0 s; a = −6.0 m/s² and s = 75 m are two-figure results. The half-speed s = 18.75 m is exact for the ideal numbers; the answer line rounds to 19 m and the grey readout shows 18.75 m with "= 75 ÷ 4".
  (e) Pronunciations: "s equals u t plus a half a t squared"; "v equals u plus a t"; "v squared equals u squared plus two a s"; "metres per second squared"; "five point zero seconds"; "minus six point zero"; "two point zero zero"; "twelve point zero"; "eighteen point zero". Letters s, u, v, a, t spoken as letters.
  (f) Accelerating-car position marks (v08 graph, s = 4t + t²): 0, 5, 12, 21, 32, 45, 60, 77, 96 m at t = 0 to 8 s. Braking car (s = 30t − 3t²): 0, 27, 48, 63, 72, 75 m at t = 0 to 5 s; velocities 30, 24, 18, 12, 6, 0 m/s.

Main question: *A car at thirty metres per second stops in five seconds. Nobody measured how far it went. How can constant-acceleration equations predict that distance, and any other quantity of a one-dimensional motion?*
Entry knowledge: Stage 5 (signed arithmetic, SI units, rearranging, gradients, rectangle and triangle areas, difference of two squares); v08 (gradient of v-t is a; area under v-t is s).
Stops after: the five quantities; the constant-acceleration condition; the three equations, each derived from the v-t graph; choosing by the missing quantity; signs for braking; a two-step solve (find a first); v² = u² + 2as with no time; two practice attempts.
Handoff: v10, measuring g with two graphs.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Board layout (constant): heading top-left; the main graph on the left (about 960 × 620 px, the v08 window: t 0 to 9 s, v 0 to 24 m/s); a road strip under it (a pale bench-grey band with metre ticks) on which the car plate moves; the algebra column on the right. Colour key: velocity blue (the v-t line and velocity arrows); acceleration orange (`C.orange`, arrows and the slope triangle); displacement teal (area shading and position marks); the rectangle piece pale teal, the triangle piece deeper teal; givens navy; the current line bright, earlier lines dim; crossed chips red with a scribble cross. At most three bright text items. Screen symbols: s, u, v, a, t in italic; units m, m/s, m/s² (the house style used in v01 to v08; root to confirm against the v08 design, open decision 3).

### 1. hook (a stopping distance nobody measured)
> Last video ended on two links from this graph. Its slope gave the acceleration, two metres per second squared, and the area under it gave the displacement, ninety six metres. But you won't always have a graph. A car is doing thirty metres per second when its brakes go on, and it stops five seconds later. How far does it go while it stops? If it kept going at thirty, it would cover a hundred and fifty metres in five seconds. But it's slowing down. So is the real distance half of that, more than half, or less? **Predict.**

Visual: opens on v08's actual handoff frame (root edit, 2 Nov): the boxed "a = (v − u) ÷ t" and "s = ½(u + v)t" with the five chips u, v, a, t, s. On "this graph" the two boxes move to the top right and the `we-1` v-t line slides back in at centre with its gradient triangle "a = 2.0 m/s²" and shaded area "s = 96 m"; the "Next" chip moves to the top left and becomes the heading "Equations of motion: predicting without a graph". On "you won't always have a graph" the graph dims and slides left to half size. The road strip writes across the lower half; `b4-car-blue-v1.png` (native aspect, uniform scale, facing right) rolls in at the left with a blue velocity arrow "30 m/s". On "brakes go on" the car moves along the strip in real proportion over about 2.5 s, dropping teal position marks at each second (0, 27, 48, 63, 72, 75 m; author note f) while its velocity arrow shrinks in equal steps to zero; marks unlabelled except "start" and a "?" at the stop. On "a hundred and fifty metres" a ghost car (30 per cent opacity) runs the same 5 s at constant speed to a mark "150 m at a steady 30 m/s", twice as far as the real stop. On "Predict" three chips write under the strip: "half", "more than half", "less than half", and the 3 s countdown ring runs (thinking hold; nothing answered yet).

### 2. five quantities, one condition
> Problems like this use five quantities. s is the displacement, how far the object ends up from its start, and which way. u is the initial velocity, at the start of the time interval. v is the final velocity, at the end. a is the acceleration, and t is the time taken. There's one condition. The acceleration has to stay constant, so the velocity changes by the same amount every **second**. That's why this line is straight. If the acceleration changes, the line **curves**, and the equations in this video don't apply.

Visual: the braking car and chips clear; the v08 graph returns to full size. The yellow car `b4-car-yellow-v1.png` sits on the road strip at the left with a velocity arrow "4 m/s". A five-row letter card writes in the right column, one row per letter as spoken: "s displacement (m)", "u initial velocity (m/s)", "v final velocity (m/s)", "a acceleration (m/s²)", "t time (s)"; on "u" the line's start (0, 4) glows; on "v" its end (8, 20) glows; on "t" the time axis span 0 to 8 s brackets. On "second" the yellow car runs the 8 s motion (about 3 s on screen), its arrow growing 4, 6, 8, ..., 20 m/s at each second while a cursor climbs the line in step; small orange "+2" tags pop at each one-second step on the line (equal rises). On "curves" a small inset slides in at the right: a v-t curve that rises steeply then flattens, tagged "acceleration changing", with a grey cross "these equations don't apply". Grey tag under the letter card: "constant (uniform) acceleration only".

### 3. v = u + at: the slope
> Start with the velocity. The car begins at u, four metres per second. Each second it gains a, two metres per second. After t seconds, it has gained a times t. So v equals u plus a **t**. Check it with the graph. Four, plus two times eight, is **twenty**. That's the final velocity on the line.

Visual: the inset clears. On "begins at u" a navy tick marks (0, 4) "u = 4 m/s". On "gains a" one orange step triangle (run 1 s, rise 2 m/s) sits on the line; on "After t seconds" it stretches to the full run 0 to 8 s, its rise labelled "at = 2 × 8 = 16 m/s" stacked above the u level. On "t" (bold) the right column writes the boxed equation "v = u + at" with a grey tag "from the slope: a = (v − u)/t". On "twenty" the check line writes "4 + 2.0 × 8 = 20 m/s ✓" and the end point (8, 20) rings. Bright at the end: the equation and the check.

### 4. s = ut + ½at²: the area
> Now the displacement. That's the area under the line, so split it into two pieces. The rectangle is how far the car would go if it stayed at u the whole time, u times t. That's thirty two **metres**. The triangle on top is the extra distance from speeding up. Its height is the velocity gained, a t, so its area is a half, times t, times a t. That's a half a t **squared**, sixty four metres. Add them, and s equals u t plus a half a t squared. Thirty two plus sixty four is ninety **six**, the same area as before.

Visual: the v08 shading clears. On "split it" a dashed horizontal line at v = 4 divides the area. On "rectangle" the lower piece fills pale teal, its sides labelled "u = 4" and "t = 8"; on "metres" the tag "ut = 4 × 8 = 32 m" writes inside it, and on the road strip a ghost yellow car at a steady 4 m/s reaches 32 m. On "triangle" the upper piece fills deeper teal; its height bracket reads "at" (the stacked rise from scene 3 slides in to become it) and its base "t". On "squared" the algebra column writes "½ × t × at = ½at²" and the tag "½ × 2.0 × 8² = 64 m" inside the triangle; the road strip shows the extra 64 m as a teal extension past the ghost. On "Add them" the boxed equation "s = ut + ½at²" writes under the first one; on "six" "32 + 64 = 96 m ✓" and the real car's end mark (96 m) rings. Bright at the end: the two boxed equations (the first dims slightly) and the check.

### 5. v² = u² + 2as: taking time out
> The third equation leaves out time. The area is also the average velocity times the time, u plus v, over two, times t. And from the first equation, the time is v minus u, over a. Put that time into the area, and t **disappears**. You get v squared minus u squared, over two a. Rearrange, and v squared equals u squared plus two a s. Check it. Four squared, plus two times two times ninety six, is four **hundred**. And the square root of four hundred is twenty.

Visual: the two pieces merge back into one trapezium. On "average velocity" a dashed level line at v = 12 (the average of 4 and 20) sweeps across, and the triangle above it folds down into the gap below it (a 1 s geometric move) so the trapezium becomes a rectangle of height (u + v)/2; tag "(u + v)/2 × t = 12 × 8 = 96 m". `AlignedAlgebra` rows in the right column, one per cue: "s = ½(u + v)t"; on "the time is" "t = (v − u)/a" (grey tag "from v = u + at"); on "disappears" "s = ½(u + v) × (v − u)/a" with both t symbols struck and fading; then "s = (v² − u²)/(2a)" (grey tag "(v + u)(v − u) = v² − u²"); on "Rearrange" the boxed "v² = u² + 2as". On "hundred" "4² + 2 × 2.0 × 96 = 16 + 384 = 400" and on the last sentence "√400 = 20 m/s ✓". Grey tag beside the first row: "a picture of the area, not a new equation to learn".

### 6. choosing: the missing letter
> So three equations link the same five quantities, and each one leaves a different quantity out. v equals u plus a t has no s. s equals u t plus a half a t squared has no v. v squared equals u squared plus two a s has no t. To choose one, list what you know, and what you want. The quantity you don't have, and don't need, tells you which equation to **use**. Here's a way to remember it. Find the missing letter, then pick the equation without **it**.

Visual: board clears to a clean equation card in the centre: the three boxed equations stacked, each with a grey "no s", "no v", "no t" tag that writes as spoken, and the missing letter in each row shown as a faint outlined gap. On "use" a five-letter strip "s u v a t" writes below the card; three letters tick (navy, "know"), one rings (teal, "want"), one is struck (grey, "missing"), and the row without the struck letter lights (demonstration with v missing: the s = ut + ½at² row lights). On "it" the handwritten memory line writes large under the card: "Find the missing letter. Pick the equation without it." Hold about 1 second.

### 7. signs: which way is positive
> One more thing before we solve the braking car. Velocity, acceleration and displacement all have directions, so we pick one direction as positive. The car moves to the right, so right is positive, and u is plus thirty. The brakes make the velocity smaller, so the acceleration points to the **left**, against the motion. That makes a negative. Slowing down doesn't need different equations. It's just a negative a, when the velocity is **positive**.

Visual: the road strip returns full width with the blue car at the left; a "+" axis arrow writes along the strip pointing right ("positive"). The blue velocity arrow "u = +30 m/s" grows from the car's nose. On "smaller" the car rolls and its arrow shrinks in steps (30, 24, 18 ...); on "left" an orange acceleration arrow grows from the car's rear pointing left, tagged "a: against the motion". On "That makes a negative" a sign chip "a < 0" writes beside the arrow. On "positive" a two-row chip writes: "v positive, a negative: slowing down" (bright) and, small and grey below it, "same three equations". The car stops; arrows hold.

### 8. worked example: the braking car (find a)
> Here's the worked example. A car travelling at thirty metres per second brakes uniformly, and stops in five point zero seconds. Find its braking distance, the distance it covers while braking. So u is thirty, v is zero, because it stops, and t is five point zero. We want s. The missing letter is a, but all three equations have a in them. So find a first. v equals u plus a t gives zero equals thirty, plus five a. So a is minus six point zero metres per second **squared**. The minus sign says it points against the motion, just as we **expected**.

Visual: calculation layout. Task strip at the top: "Find the braking distance". Givens group (navy, left of the algebra): "u = +30 m/s", "v = 0 (stops)", "t = 5.0 s", "find: s", each writing as spoken; a grey tag "right = positive; uniform braking". The letter strip from scene 6 returns small: s ringed (want), u, v, t ticked, a struck; on "all three equations have a in them" each of the three mini-equations flashes its a and a grey chip writes "no equation leaves out a: find a first". `AlignedAlgebra`: "v = u + at"; "0 = 30 + a(5.0)"; on "squared" "a = −30 ÷ 5.0 = −6.0 m/s²" (bright). On "expected" the orange left-pointing arrow from scene 7 reappears beside the result. Road strip and car stay small at the bottom.

### 9. worked example: the braking car (find s, check)
> Now use s equals u t plus a half a t squared. Thirty times five point zero is a hundred and fifty. A half, times minus six point zero, times five point zero squared, is minus seventy **five**. So s is seventy five metres. That's exactly half of a hundred and fifty. Here's why. The v t graph is a triangle, so the car's average velocity is fifteen, half of **thirty**. And notice what nobody measured: the distance. The equations predicted it from the speed and the time.

Visual: the result "a = −6.0 m/s²" moves up into the givens group (navy, kept); earlier algebra lines dim and clear. `AlignedAlgebra`: "s = ut + ½at²"; "= (30)(5.0) + ½(−6.0)(5.0)²"; "= 150 − 75" (written on "five"); boxed "s = 75 m" (bright). Grey chip: "check: v² = 30² + 2(−6.0)(75) = 0 ✓". On "exactly half" the hook's three prediction chips return small and "half" lights. On "Here's why" a small v-t graph draws at the left (t 0 to 5.0 s, v 0 to 30 m/s): a straight line from (0, 30) to (5.0, 0), the triangle shaded teal; on "thirty" a dashed level line at 15 m/s sweeps across and the triangle's top corner folds into the empty corner, making a rectangle 15 × 5.0 tagged "average 15 m/s × 5.0 s = 75 m". On "nobody measured" the road strip's "?" mark becomes "75 m", and the ghost car's "150 m" mark dims beside it.

### 10. half the speed, a quarter of the distance
> Here's where the third equation earns its place. Suppose the same car, with the same brakes, was doing only fifteen metres per second. There's no time given, so use v squared equals u squared plus two a s. Zero equals fifteen squared, plus two times minus six point zero, times s. So s is two hundred and twenty five, over twelve, about nineteen **metres**. Half the speed, but only a quarter of the distance. Braking distance depends on the speed squared, which is why a small increase in speed matters so **much**.

Visual: board clears to a new case strip: "Same car, same brakes: u = +15 m/s, v = 0, a = −6.0 m/s², find s" (the a given glows navy as carried from scene 8). The letter strip: t struck (missing), so the "no t" equation lights. `AlignedAlgebra`: "v² = u² + 2as"; "0 = 15² + 2(−6.0)s"; "s = 225 ÷ 12"; on "metres" boxed "s ≈ 19 m" with grey readout "18.75 m = 75 ÷ 4". On "Half the speed" two road strips stack: the 30 m/s car's braking bar (75 m, teal) above the 15 m/s car's bar (18.75 m, teal), drawn to one scale; on "a quarter" the 75 m bar divides into four equal segments and the lower bar matches one of them. On "squared" a chip "braking distance ∝ u² (same brakes)" writes; on "much" the bars hold. Grey tag: "braking only; the distance before the brakes go on adds more".

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. A trolley starts from rest and accelerates uniformly at two point zero zero metres per second squared, for three point zero zero seconds. Find its final velocity and its displacement. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Physics"), worded as printed: "A trolley starts from rest and accelerates uniformly at 2.00 m s⁻² along a straight track for 3.00 s. Calculate (a) its final velocity and (b) its displacement in this time. (3 marks)" Tag: "HSC-style question, written for HSCScience". Beside it the new trolley plate `y11p-dynamics-trolley-v1.png` on a short coded track, at rest. The full question stays on screen. Countdown ring for 10 seconds after "Pause here to answer." Nothing answer-bearing (no equation strip, no letter strip).

### 12. feedback 1 (brief)
> From rest, u is zero. v equals u plus a t, so v is two times three, six point zero zero metres per **second**. Then s equals u t plus a half a t squared. That's zero, plus a half, times two, times nine. So s is nine point zero zero **metres**. A common mistake is s equals v t, eighteen metres. That treats the trolley as doing six metres per second the whole time, but it started from **rest**.

Visual: the card shrinks to the top; "starts from rest" underlined as "u = 0" writes in a navy givens tag. Rows: "v = u + at = 0 + (2.00)(3.00)"; on "second" boxed "v = 6.00 m/s". "s = ut + ½at² = 0 + ½(2.00)(3.00)²"; on "metres" boxed "s = 9.00 m" ("displacement" underlined). On "common mistake" a chip "s = vt = 6.00 × 3.00 = 18.0 m" fades in; on "rest" it takes a red scribble cross with the caption "v changes: it started at 0". Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> One more. A car travelling at twelve point zero metres per second along a straight road brakes uniformly, and stops in eighteen point zero metres. Calculate its acceleration, and the time it takes to stop. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A car travelling at 12.0 m s⁻¹ along a straight, level road brakes with uniform acceleration and comes to rest in a distance of 18.0 m. Calculate (a) the acceleration of the car and (b) the time taken to stop. (4 marks)" Tag: "HSC-style question, written for HSCScience". Beside it `b4-car-blue-v1.png` small, still, no arrows. The full question stays on screen. Countdown ring for 10 seconds after "Pause here to answer." Nothing answer-bearing.

### 14. feedback 2 (brief)
> Take the car's direction as positive. No time is given, so use v squared equals u squared plus two a s. Zero equals one hundred and forty four, plus thirty six a, so a is minus four point zero zero metres per second **squared**. Then v equals u plus a t gives t equals three point zero zero **seconds**. If you dropped the minus sign, your time came out negative. Braking acceleration points against the **motion**.

Visual: the card shrinks; "comes to rest" underlined as "v = 0", "12.0" as "u = +12.0 m/s", "18.0 m" as "s = +18.0 m". Rows: "v² = u² + 2as: 0 = 12.0² + 2a(18.0) = 144 + 36.0a"; on "squared" boxed "a = −4.00 m/s²" (grey tag "against the motion"). "v = u + at: 0 = 12.0 + (−4.00)t"; on "seconds" boxed "t = 3.00 s". On "dropped the minus sign" a chip "a = +4.00 m/s², so t = −3.00 s" fades in; on "motion" it takes a red scribble cross with the caption "a negative time is impossible". Hold about 1 second.

### 15. summary and handoff
> So while the acceleration is constant, three equations link s, u, v, a and t. Know three of them, and you can predict the rest. Next, these equations become a measuring tool. A falling object has a constant acceleration too, called g. **How** can two different graphs measure it, and how can we tell if the result is any good?

Visual: board clears to the three boxed equations with their "no s", "no v", "no t" tags, and the small v-t graph from scene 3 beside them with its slope and area pieces lit for one beat each. On "How" the steel ball plate `y11p-steel-ball-v1.png` (requested in the v10 design's asset brief; no coded stand-in) falls beside a vertical scale, and two small grey graph outlines appear ("s against t²", "v against t"), unlabelled values; chip "Next: How can two graphs measure g?" Hold about 2 seconds.

### 16. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. For constant acceleration only: v = u + at (no s); s = ut + ½at² (no v); v² = u² + 2as (no t). s displacement, u initial velocity, v final velocity, a acceleration, t time.
2. They come from the v-t graph: the slope gives v = u + at; the area (rectangle ut plus triangle ½at²) gives s.
3. List the knowns and the unknown with units. Pick the equation without the quantity you don't have and don't need. If a is the missing one, find a first.
4. Choose a positive direction. When an object slows down, a is opposite to v (negative when the motion is positive).
5. Same braking acceleration: braking distance ∝ u². Half the speed, a quarter of the distance.

Memory aid (large, on the notes screen): *Find the missing letter. Pick the equation without it.* Second line, smaller: *If a is missing, find a first.*

## Teaching checks

- **Does it explain causes?** Why the line is straight (constant acceleration: equal velocity changes each second, shown by the growing arrow and equal "+2" steps, 2). Why v = u + at (start at u, gain a for t seconds, 3). Why s = ut + ½at² (the area is a steady-speed rectangle plus a speeding-up triangle, 4, mirrored on the road strip). Why v² = u² + 2as (the same area with time substituted out, 5). Why the missing letter picks the equation (each equation omits one quantity, 6). Why a is negative (it points against the motion, 7). Why the braking car goes exactly half of 150 m (average velocity 15 m/s, the triangle folds into a half-height rectangle, 9). Why half the speed gives a quarter of the distance (s depends on u², 10).
- **Worked-example rule:** task strip, givens group (with units and the positive direction) and algebra are separate. One reasoning stage per scene (8: find a; 9: find s). The result a = −6.0 m/s² moves into the givens because scene 9 needs it; nothing else is carried. Each result line writes on its spoken cue.
- **Response opportunities:** one in-teaching prediction with a 3 s countdown (1, answered in 9); two unseen HSC-style questions with every condition on the card (A1: from rest, uniform acceleration, value, time; A2: initial speed, uniform braking, comes to rest, distance), 10 s each with "Pause here to answer.", nothing answer-bearing, and neither card names an equation. One crossed mistake each; feedback about 30 s and 31 s by script (scenes 12 and 14).
- **Avoided double teaching:** v08's slope and area rules are recalled in one sentence (1) and used, not re-taught; acceleration as change in velocity per second is recalled in a phrase (2).
- **Syllabus coverage:** `ci72f29382`: all three named equations derived (3 to 5), chosen (6) and used for one-dimensional problems with signs (7 to 10, A1, A2).
- **Out of scope by design:** free fall worked problems (v10 measures g); vertical throws and turning points; meeting or overtaking problems; reaction distance; changing acceleration (named, not treated).

## Practice questions and model answers

Each attempt ends with "Pause here to answer." and a 10 second countdown; the card and every demand stay on screen. Marks appear on the card; the narration does not read them. Every card carries "HSC-style question, written for HSCScience".

**Attempt 1 (scene 11; original wording; 3 marks suggested, not an official marking scheme).** "A trolley starts from rest and accelerates uniformly at 2.00 m s⁻² along a straight track for 3.00 s. Calculate (a) its final velocity and (b) its displacement in this time."
Model answer: u = 0, a = 2.00 m s⁻², t = 3.00 s. (a) v = u + at = 0 + (2.00)(3.00) = 6.00 m s⁻¹ (in the direction of the acceleration). (b) s = ut + ½at² = 0 + ½(2.00)(3.00)² = 9.00 m. Classic mistake (crossed): "s = vt = 18.0 m" (uses the final velocity for the whole time).

**Attempt 2 (scene 13; original wording; 4 marks suggested).** "A car travelling at 12.0 m s⁻¹ along a straight, level road brakes with uniform acceleration and comes to rest in a distance of 18.0 m. Calculate (a) the acceleration of the car and (b) the time taken to stop."
Model answer: take the direction of motion as positive; u = +12.0 m s⁻¹, v = 0, s = +18.0 m. (a) v² = u² + 2as: 0 = 144 + 2a(18.0), a = −144 ÷ 36.0 = −4.00 m s⁻² (4.00 m s⁻² opposite to the motion). (b) v = u + at: 0 = 12.0 + (−4.00)t, t = 3.00 s. Classic mistake (crossed): "a = +4.00 m s⁻²" (gives t = −3.00 s). Also accepted for (b): s = ½(u + v)t gives t = 2s/(u + v) = 3.00 s.

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| v08 graph (pack v08 `we-1`) | u = 4 m/s at t = 0, v = 20 m/s at t = 8 s; a = 2.0 m/s²; s = 96 m; window t 0 to 9 s, v 0 to 24 m/s | 1 to 5, 15 |
| Slope check | 4 + 2.0 × 8 = 20 m/s; at = 16 m/s | 3 |
| Area pieces | ut = 4 × 8 = 32 m; ½at² = ½ × 2.0 × 8² = 64 m; total 96 m | 4 |
| Average form | (4 + 20)/2 = 12 m/s; 12 × 8 = 96 m | 5 |
| v² check | 4² + 2 × 2.0 × 96 = 16 + 384 = 400; √400 = 20 m/s | 5 |
| Yellow car positions | 0, 5, 12, 21, 32, 45, 60, 77, 96 m at t = 0 to 8 s; velocities 4 to 20 m/s in steps of 2 | 2, 4 |
| Hook (site `we-1`) | u = 30 m/s, stops in 5.0 s; steady-speed reference 30 × 5 = 150 m | 1, 9 |
| Braking car positions | 0, 27, 48, 63, 72, 75 m; velocities 30, 24, 18, 12, 6, 0 m/s at t = 0 to 5 s | 1, 7 |
| Worked example | a = (0 − 30)/5.0 = −6.0 m/s²; s = 150 − 75 = 75 m; v² check 900 − 900 = 0; average 15 m/s × 5.0 s = 75 m | 8, 9 |
| Half speed | u = 15 m/s, a = −6.0 m/s²: s = 225/12 = 18.75 m ≈ 19 m = 75/4 | 10 |
| A1 | u = 0, a = 2.00 m/s², t = 3.00 s; v = 6.00 m/s; s = 9.00 m; crossed vt = 18.0 m | 11, 12 |
| A2 | u = 12.0 m/s, v = 0, s = 18.0 m; a = −4.00 m/s²; t = 3.00 s; crossed t = −3.00 s | 13, 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (2 Nov); Codex to re-check.

- (20 − 4)/8 = 2.0; 4 × 8 = 32; ½ × 2 × 64 = 64; 32 + 64 = 96; (4 + 20)/2 × 8 = 96; 16 + 2 × 2 × 96 = 400.
- s(t) = 4t + t² at t = 0 to 8: 0, 5, 12, 21, 32, 45, 60, 77, 96.
- (0 − 30)/5.0 = −6.0; 30 × 5.0 + ½(−6.0)(25) = 75; 30² + 2(−6.0)(75) = 0; ½(30 + 0)(5.0) = 75; s(t) = 30t − 3t² at t = 0 to 5: 0, 27, 48, 63, 72, 75.
- 15²/(2 × 6.0) = 18.75 = 75/4.
- A1: 0 + 2.00 × 3.00 = 6.00; ½ × 2.00 × 9.00 = 9.00; 6.00 × 3.00 = 18.0.
- A2: −144/36.0 = −4.00; −12.0/−4.00 = 3.00; 2 × 18.0/12.0 = 3.00.

## Memory aid check

- **"Find the missing letter. Pick the equation without it."** Written for this lesson, from the site's "each equation leaves out one quantity". Meaning: of s, u, v, a, t, a problem gives three and asks for one; the fifth is the missing letter; the syllabus equation that does not contain it links the four that matter. Assumptions checked: true when the missing letter is s (v = u + at), v (s = ut + ½at²) or t (v² = u² + 2as). When the missing letter is a (the worked example) or u, none of the three syllabus equations omits it, so a two-step solve is needed (find a first). The narration of scene 8 and the second line of the aid say this. Constant acceleration is assumed (key note 1). It helps a new case: the student writes s u v a t, ticks, rings and strikes, and the choice follows. Introduced after the three equations are derived (3 to 5).
- **Considered, not used:** "SUVAT" as a named acronym (common, but it labels the letters without telling the student which equation to choose; the five-letter strip is shown without the name).

## Narration length estimate

Revision 1 count (2 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **6,282 characters**, 16 scenes. Characters per scene (1 to 16): 507, 511, 285, 503, 453, 443, 441, 542, 463, 508, 216, 383, 227, 403, 322, 75. At 13.3 characters per second the speech is about 472 s; add 3 s for the hook prediction countdown, 20 s for two attempt countdowns, about 16 s of holds and settling (the car runs in 1, 2 and 9, the fold in 5 and 9, the bars in 10, 1 s holds in 6, 12 and 14, 2 s in 15) and about 55 s more of the quiet notes hold: **about 566 s**, inside the 5,500 to 6,800 character band and 4 s under the 570 s cap. Feedback: scene 12 about 30 s, scene 14 about 31 s (with their 1 s holds), at the top of the 15 to 30 s guide.

Reserve cuts if the voiced take runs long (no cause lost): scene 1's "But you won't always have a graph." (about 3 s; the graph sliding away carries it); scene 6's "Here's a way to remember it." (about 2 s); scene 9's last sentence (about 4 s; the "?" becoming "75 m" carries it); scene 12's "That treats the trolley as doing six metres per second the whole time," shortened to "It ignores that" (about 3 s). Do not cut the derivation sentences in scenes 3 to 5, the "find a first" sentence in 8 or the "same brakes" condition in 10. Do not cut below 5,500 characters.

## Scene list and build ids

Lesson key `p-y11-v09` (route phys-y11-fa1-v09). Suggested explainer folder `src/explainer/lessons/phys-y11-fa1-v09` and build folder `docs/production/claude-pm/lessons/p-y11-v09` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 16 scene headings, all `### N.`): hook, five-quantities, slope-equation, area-equation, remove-time, choose-equation, signs, worked-find-a, worked-find-s, half-speed, attempt-1, feedback-1, attempt-2, feedback-2, summary-handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1 and attempt-2 (`hold`: the learner reads and works during the countdown) and key-notes (`hold`: the learner copies five notes); the hook carries a 3 s prediction countdown inside an explain scene. Transitions (`pickTransition`): v08's last frame continues into scene 1 (camera continue, same axes); 1 to 2 to 3 to 4 to 5 camera continue (same graph); 5 to 6 clear change (equation card); 6 to 7 clear change to the road strip; 7 to 8 to 9 camera continue (same car); 9 to 10 clear change (new case); attempts and feedback card shrink to the top; 14 to 15 board clear; 15 to 16 fade to the notes board.

Holds: hook 3 s countdown after "Predict."; attempt-1, attempt-2 (10 s countdown after the speech, "Pause here to answer." on screen); key-notes quiet hold (about 60 s, standard line, reuse take); 1 s at the end of 6, 12 and 14; 2 s at the end of 15. Review evidence paths for the LESSONS entry: `learning_review` = `checks/p-y11-v09-learning-review.md`, `science_check` = `checks/p-y11-v09-physics-check.md` (root to confirm names).

## Assets

Have (inspected 2 Nov on a dark contact sheet in the session scratchpad; uniform scale only, never stretched):
- `public/assets/biology/b4-car-blue-v1.png` (1600 × 800, a blue hatchback in side view facing right, no people visible): the braking car (1, 7 to 9, 13). Flip is not needed (motion to the right).
- `public/assets/biology/b4-car-yellow-v1.png` (1600 × 800, the same car in yellow): the accelerating car on the v08 graph (2 to 4).

Need (new plate, Codex):
1. `y11p-dynamics-trolley-v1.png`: A1 (11), and reused by later Year 11 Physics videos (v10 handoff not needed; v12 to v16 forces and Newton's laws). Essential for A1's object; fallback: the yellow car with the card worded "A toy car" (re-count 0).

Coded (explainer kit and maths kit): the v-t graph (`FunctionGraph` linear, or physics `DataGraph` axes with units; one window), the gradient step triangle (`TangentTriangle` or plain SVG through `graphTransform`), the area pieces and the fold moves (plain SVG polygons through `graphTransform`, animated vertices), the level line at the average velocity, `AlignedAlgebra` (struck t symbols via `CancelledFactor`), the letter card and five-letter strip, the road strip with metre ticks and teal position marks, velocity and acceleration arrows (`Arrow` from `course-kit.tsx`, blue and orange, attached to the car plate's nose or rear), the ghost car (the same plate at 30 per cent opacity), the braking bars to one scale, `Chip` with `cross`, `Countdown`, `QuestionCard` (subject "Physics"), `KeyNotes`, `Heading`. No new kit part needed beyond the plain SVG pieces; the fold move (a triangle rotating 180 degrees about the midpoint of its slanted side into the gap) is lesson-local.

## Codex asset brief

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; design `docs/production/claude-pm/lessons/phys-y11-fa1-v09.md`. Paint after the learning review, physics check and error check pass and the owner gives the go-ahead. Transparent PNG with a true alpha channel, clean edges with no coloured fringe or halo (check on black and white), ink and watercolour in the house style matched to `public/assets/biology/b4-car-blue-v1.png`, at least 8 per cent clear margin, no text, labels, numbers, brand names, people, hands, faces, backdrop, glow or ground shadow. Keep the native aspect; never stretch.

1. `y11p-dynamics-trolley-v1.png` (2000 × 1000 px): one school dynamics trolley in exact side view facing right: a low rectangular metal or painted body (blue-grey), four small wheels visible as two in side view, a flat top with two small end plates or bumpers, no spring plunger extended, no masses on top. It must read clearly at 300 px wide on the dark board and sit on a coded horizontal track line (its wheel bottoms level along one line).

Report inspection on the dark board background at about 300 px and 600 px wide. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/p-y11-v09-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite). Report to `docs/production/claude-pm/checks/` (root names the check).
1. Re-check every value under "Numbers to verify" and every value in the narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the three derivations (author note a), including the fold in scenes 5 and 9 (triangle above the average level line equals the gap below it).
3. Confirm the sign wording in scene 7 and key note 4 is scoped (slowing means a opposite to v; author note b) and nowhere says "negative a means slowing down" without the velocity's sign.
4. Confirm the memory aid's scope (missing a or u needs two steps) is stated in scene 8 and on the notes screen.
5. Confirm "braking distance ∝ u²" is stated for the same braking acceleration and excludes the distance before the brakes act (scene 10 tag; author note c).
6. Confirm significant figures: 75 m and −6.0 m/s² (two figures); 19 m with 18.75 m grey; A1 and A2 answers to three figures.
7. Confirm both attempt questions are original in wording, every needed condition is on the card, neither names an equation, and neither closely paraphrases a NESA Physics question (search "trolley starts from rest", "brakes uniformly", "comes to rest in a distance").
8. Confirm the syllabus quote matches the route JSON `syllabusActions` for `ci72f29382` (linear form) and the ledger entry P25-FA1-G2-04 in `docs/production/programme/syllabus/phys-new-y11.json`.
9. Confirm no em dash (U+2014) anywhere in this file; Australian spelling; YouTube title 100 characters or fewer; search the narration for absolute claims ("always", "never", "every", "all") and confirm each is true as scoped.
10. Confirm the narration character count and per-scene counts by script with the build parser rules.
11. Add site errors 1 to 4 under Decisions to `../site-corrections-phys-y11.md` (owner record only; the site is read-only here).

## YouTube metadata (draft)

Title: Equations of Motion: Where v = u + at and s = ut + ½at² Come From | Year 11 Physics

(Title length: 84 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa1-fundamentals-of-mechanics/lesson09.sa.html

A car at 30 m/s brakes and stops in 5.0 s. Nobody measured how far it went, so how can we know it was 75 m? See where the three equations of uniformly accelerated motion come from: the slope of a velocity-time graph gives v = u + at, its area gives s = ut + ½at², and taking time out gives v² = u² + 2as. Learn how to choose the right equation from the quantity you don't have, how a sign convention handles braking, and why half the speed means a quarter of the braking distance. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Year 11 Physics (2025 syllabus), Focus Area 1: Fundamentals of mechanics.
Syllabus content (NSW Physics 11-12, 2025):
"Solve problems involving uniformly accelerated motion in one dimension using s⃗ = u⃗t + ½a⃗t², v⃗ = u⃗ + a⃗t and v⃗² = u⃗² + 2a⃗s⃗" (ci72f29382)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

Builds on: Reading relationships from motion graphs (previous video). Next: Measuring g with two graphs (practical).

#Year11Physics #Kinematics #HSCScience

## Open decisions

- **1. Opening frame from v08 (assumption; root to confirm).** v08 was designed in parallel. This design assumes v08 ends on its pack's `we-1` v-t graph (4 m/s to 20 m/s over 8 s, a = 2.0 m/s², area 96 m) with a "Next" chip, as the v08 route nextHandoff and pack describe. Scenes 1 to 5 use that graph as the derivation example. If v08's final frame uses a different graph, either (a) keep this graph and change scene 1's first sentence to "Here's a velocity-time graph like the ones in the last video." (re-count about +10), or (b) re-base scenes 1 to 5 on v08's numbers (the check lines in 3 to 5 change; the derivation does not).
- **2. Average-velocity form.** The design shows s = ½(u + v)t only as a picture of the area (scenes 5 and 9), not as a fourth equation to learn, because the 2025 content point names three equations. If root prefers the site's approach (solve `we-1` in one step with the average form), scene 8 shortens by about 120 characters and the memory aid's second line changes to "If a is missing, use the area: s = ½(u + v)t."
- **3. Unit notation.** Screen uses m/s and m/s²; question cards use m s⁻¹ and m s⁻² as HSC papers print them. Root to fix one convention for screen text across the Year 11 Physics run when v01 to v08 are final.
- **4. Trolley plate.** New plate requested; it is shared with later force videos, so root may batch it with the v10 apparatus plates (one Codex brief).
- **5. Length.** 566 s is 4 s under the cap. If the Google voice runs slower than 13.3 characters per second, apply the reserve cuts in order.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v08 and Stage 5: is the area split followable; does "put that time into the area" carry the third derivation without the student needing to do the algebra themselves; is the exception in scene 8 clear right after the memory aid; does the hook prediction land in scene 9), then the Codex physics check and error check.
- The car runs, the growing and shrinking arrows, the area split and the two folds carry the explanation; judge them at playback speed in the voiced preview, not from stills. Positions on the road strip must be computed from the same equations as the graph (author note f), so the picture never contradicts the numbers.
