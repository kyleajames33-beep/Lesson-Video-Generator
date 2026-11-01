# Y11 Physics FA1 V07 (Physics 2025, Year 11, Focus Area 1): How can motion data become linked displacement, velocity and acceleration graphs? (design)

Status: Revision 1 (2 Nov). Needs student learning review (key `p-y11-v07`), physics check (Codex) and a Codex error check before build. No new plate. Voicing follows the programme queue (Google AI Studio after the brief 124 pilot; physics after Year 12 Maths and Year 11 Biology). Nothing recorded; human listening pending.

Narration 5,406 characters, 14 scenes, about 505 s (8.4 minutes), counted by script with the build parser rules (see "Narration length estimate").

Scope: seventh video of the Year 11 Physics (2025) Focus Area 1 route, and the first of two motion-graph videos. Templates: `math-a12-d10.md` (calculation format, coded graphs, section structure) and `bio-y11-fa1-v05.md`; the v05 and v06 designs (Revision 1, written just before this one; v06's scene 13 is this video's first frame). Pre-design pack: `../pre-design/phys-y11/phys-y11-fa1-v07.md` (every number recalculated below). Site lesson read in full (2 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa1-fundamentals-of-mechanics/lesson07.sa.html` (orient, intentions, constructing a displacement-time graph, constructing a velocity-time graph, apply, the acceleration-time graph, short-answer practice, retrieve). Route entry: `phys-y11-fa1-v07` in `../../phys-y11-video-route.json` (route-approved by root, 1 Nov). Route stop: "Stop after the learner can answer: How can motion data become linked displacement, velocity and acceleration graphs?" Next: "phys-y11-fa1-v08: How do slopes and signed areas connect motion graphs?"

Owner rules applied: as v05 and v06 (2025 syllabus only; graphs, axes, markers and arrows coded; the car is a painted plate; no people; one reasoning stage at a time; 3 s in-teaching prediction; "Pause here to answer." with a 10 s countdown and the full worded question, including its data table, on screen; brief feedback with one crossed mistake; original HSC-style questions; key-notes hold; Australian spelling; no em dashes; v05 and v06 recalled in a sentence each). The lineGraph memory rule applies: every graph is coded, never an image.

Syllabus content points (Physics 11-12 (2025), Year 11, Focus Area 1, group "Motion relationships"; NESA content-system codenames), quoted from the route JSON `syllabusActions` (the en dashes are the syllabus's own):

- `ci1753e3ea`: "Use data to construct displacement–time graphs, velocity–time graphs and acceleration–time graphs"
- `ci432e72b1`: "Use data to analyse motion graphs to describe the displacement, velocity and acceleration of an object"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

**Boundary:** starts from v06's handoff (the table t = 0, 2, 4, 6 s; v = 0, 4, 8, 12 m s⁻¹ beside empty axes); builds displacement-time, velocity-time and acceleration-time graphs from one car's data table, point by point (`ci1753e3ea`); links the three on a shared time axis; describes motion from shapes: at rest, constant velocity, speeding up, slowing down, moving in the negative direction (`ci432e72b1`). Velocities and accelerations are found only as changes over a table interval (v05's Δs/Δt and v06's Δv/Δt). Not taught: the gradient of a curve by a tangent, and the area under a velocity-time graph (v08 owns "slopes and signed areas"); the constant-acceleration equations (v09); lines of best fit for scattered measured data (v10, the practical).

## Decisions

- **Learner question kept (route).** "How can motion data become linked displacement, velocity and acceleration graphs?" The answer, built in order: plot time across and the quantity up, one reading at a time, then join (2); equal time steps with growing gaps make a steepening displacement curve, because the car covers more ground each step (1, 2); equal velocity gains in equal steps make a straight velocity line, and the acceleration between readings is the change in velocity over the time (3, 4); the three graphs share a time axis, so one moment gives three facts (4); then the shapes are read: flat, straight, curving and sloping down mean different things on each graph (5 to 7).
- **One car, one trip, one table (continuity and the pack's "one physical time cursor").** The yellow car from v05 scene 6 (x = t², speeding up at 2.0 m s⁻²) becomes the data source; its first four readings are exactly v06's handoff table and the site's `we-1` (0, 4, 8, 12 m s⁻¹ at 0, 2, 4, 6 s), with displacements 0, 4, 16, 36 m. The trip then carries on: steady 12 m s⁻¹ from 6 to 10 s, braking at −3.0 m s⁻² to rest at 14 s, parked to 18 s, then reversing to −4.0 m s⁻¹ (author note a). Every phase the syllabus point needs appears once, on the same three linked graphs, with the car on the road above them.
- **The cause made visible (owner quality bar).** The car drops a position marker on the road every 2 s. The gaps (4, 12, 20, 24, 24, 18, 6, 0 m) are the evidence for each shape: growing gaps give a steepening curve, equal gaps a straight line, shrinking gaps a levelling curve, no gap a flat line, and gaps going backwards a falling line. A vertical time cursor runs through all three graphs and the car together.
- **Construction conventions (site card 1 and Q3).** Time on the horizontal axis (the quantity we choose when to measure); the plotted quantity up the side; both axes labelled with quantity and unit; a scale chosen to fit the largest value; plot each reading as a point, then join. **Joining assumption kept in learner copy:** "assuming the car changes speed smoothly between readings". Without it, the student would think a table proves the shape between points (pack section 3). Velocity points are joined with straight segments because each 2 s step has a constant change here (the data are ideal teaching values, author note a); the acceleration-time graph is drawn as flat segments over each interval, built from the velocity column's changes.
- **Precision:** the car's data are ideal teaching values (stated on screen as a grey tag "teaching data"), shown as whole numbers; accelerations written 2.0, 0 and −3.0 m s⁻². Attempt data are given to two significant figures.
- **Prediction (in teaching, 3 s countdown).** Hook: "straight line or curve?" for the first four positions, before any point is plotted.
- **Flat lines and steepness (site misconceptions 1 and 2, shown on this car's own graphs).** Flat displacement (14 to 18 s): at rest. Flat velocity at 12 (6 to 10 s): moving steadily. Flat acceleration: a steady acceleration, which can be 2.0, 0 or −3.0. Steepest displacement (6 to 10 s) is where the car is fastest, not where its displacement is largest (at 14 to 18 s, 108 m).
- **Negative velocity (sign carried from v04 and v05).** From 18 s the car drives back toward the start: the displacement graph falls and the velocity graph goes below the axis. "Negative velocity doesn't mean slowing down. It means moving in the negative direction." During 18 to 20 s the car speeds up backwards with a = −2.0 m s⁻²: the acceleration is negative and the car speeds up, because acceleration and velocity point the same way (shown on the graphs, said in one clause; it reinforces v06's condition).
- **Attempts (original).** (A1) Construct and describe from a velocity table: a trolley at 2.0, 3.5, 5.0, 5.0, 5.0 m s⁻¹ at 0 to 4.0 s: straight rising line, a = 1.5 m s⁻², then flat, a = 0; a-t graph flat at 1.5 then on the axis. Crossed: "the trolley stops at 2.0 s" (flat velocity read as rest). (A2) Describe from a displacement table: a toy car at 0, 3.0, 6.0, 6.0, 4.0, 2.0 m at 0 to 5.0 s: +3.0 m s⁻¹, at rest, −2.0 m s⁻¹ back toward the start. Crossed: "it slows down from 3 to 5 s" (a falling displacement read as slowing). Both cards show the data table and the question only; no axes are drawn on the cards.
- **Mistake scene:** none separate. "A flat line always means at rest" (6; feedback 1 crossed; memory aid); "steeper means further" (6); "negative velocity means slowing down" (7; feedback 2 crossed); "a table proves the shape between points" (2, the joining assumption).
- **Memory aid:** "Flat means that quantity isn't changing." (see "Memory aid check").
- **Handoff (route next, v08's site example).** A velocity-time graph rising in a straight line from 4 to 20 m s⁻¹ over 8 s (site lesson 8 `we-1`), with the chips "acceleration?" and "how far?". No gradient triangle and no shading.
- **Site sources used:** hook (two shapes, one accelerating; re-based on the car's markers); card 1 (axes, plotting, the three displacement shapes); card 2 and `we-1` (velocity-time construction, the four readings, a = 2.0 m s⁻²); card 3 (the acceleration-time graph as a flat line; on the axis for constant velocity); misconceptions (both); Q2 (accelerate, then constant velocity, as a three-graph description: the same structure as A1, with new numbers); Q3 (axes, scale, labels). Not used: the activity's trolley (0, 2, 8, 18 m) and Q1 (they repeat `we-1`'s shape).
- **Site corrections (quoted from site lesson 7, read 2 Nov; for `../site-corrections-phys-y11.md`; not logged yet):**
  1. Card 2 summary and its key statement: "a straight falling line means constant deceleration" and "a falling line means deceleration". A falling velocity-time line means a negative acceleration; it means slowing down only while the velocity is positive. Below the axis a falling line means speeding up in the negative direction. Suggest: "a straight falling line means a constant negative acceleration (the object slows down while its velocity is positive)."
  2. Key terms and headings: "Displacement–time (d–t) graph A plot of position against time" while the figure axes are labelled s. "d" commonly means distance, the quantity v04 and v05 separate from displacement. Suggest "s–t graph" throughout, to match the axes and the syllabus quantity.
  - Checked and correct: `we-1` (a = 2.0 m s⁻²); the activity's trolley (0, 2, 8, 18 m and 0, 4, 8, 12 m s⁻¹ are consistent: s = 2t², v = 4t, a = 4.0 m s⁻²); Q2 (2.0 m s⁻² then zero; shapes correct); misconceptions; odd one out (C).
- **Pack questions answered:** `we-1` used unchanged as the first four readings; pack candidate 1 (2, 5, 8 m s⁻¹) not used as an attempt, because a single straight line repeats the worked graph; A1 adds a second phase. Pack candidate 2 (horizontal at −3.0 m s⁻¹) not used: its signed displacement (−12 m) is v08's area; its "horizontal need not mean rest" point is taught in scene 6. Pack visual needs met (three calibrated linked panels, one physical time cursor, table readings become plotted points before joining).
- **Cause chain taught, in order:** (1) equal time steps, growing gaps: the car covers more ground each step (hook); (2) time across, quantity up; plot readings, then join, assuming smooth change (2); (3) steeper displacement means faster (2); (4) equal velocity gains in equal steps give a straight velocity line; the change over each step is the acceleration (3); (5) constant acceleration gives a flat acceleration graph; one moment gives three facts (4); (6) equal gaps give straight; shrinking gaps give levelling; negative changes give negative acceleration (5); (7) flat means "not changing" for the quantity plotted; steeper is faster, not further (6); (8) negative velocity is direction, not slowing (7); (9) memory aid (8).
- **Entry knowledge (route `entryKnowledge`):** Stage 5 plotting, axes and gradients (steepness). From v04 and v05: displacement from a start line with a sign, average velocity as Δs/Δt over an interval, instantaneous velocity. From v06: a⃗ = Δv⃗/Δt, m s⁻², the sign condition for slowing down.
- **Learner-visible vocabulary (plain meaning at first use):** displacement-time graph, velocity-time graph, acceleration-time graph (named by what goes up the side, against time across, scene 2); scale (how many metres each grid square stands for, scene 2); data point (one reading plotted, scene 2); steeper (rises more for the same time across, scene 2).
- **Legacy logic ported:** none.
- **New explainer motion (coded unless a plate is named):** **road with markers** (the yellow car plate driving by the motion function; a coded amber marker dropped at each 2 s reading with its distance label, and gap brackets with values); **data table strip** (columns written as each reading is taken); **three linked panels** (displacement, velocity, acceleration against a shared time axis 0 to 24 s, stacked; points pop from the table into place; joins draw after the points; a vertical time cursor runs through all three and the road; a phase band tints each phase); **readout chips** at the cursor; `AlignedAlgebra` for Δv/Δt; `Countdown` (3 s and 10 s); `QuestionCard` (subject "Physics", with a data table row); `Chip` with `cross`; scribble circles; `KeyNotes`; `Heading`.
- **Board layout (constant):** heading top-left; the road strip across the top (about 220 px tall); the data table strip under it; the three panels stacked on the left two-thirds (each about 1,100 × 190 px, shared time axis labelled once at the bottom); working and chips in the right column. The panels keep their places for the whole teaching section, so the student builds one picture.
- **No human figures.** The car's windows show empty seats only.
- **Author notes (not learner copy):**
  (a) Motion function (t in s, s in m, v in m s⁻¹, a in m s⁻²): 0 to 6 s, s = t², v = 2t, a = 2; 6 to 10 s, s = 36 + 12(t − 6), v = 12, a = 0; 10 to 14 s, s = 84 + 12(t − 10) − 1.5(t − 10)², v = 12 − 3(t − 10), a = −3; 14 to 18 s, s = 108, v = 0, a = 0; 18 to 20 s, s = 108 − (t − 18)², v = −2(t − 18), a = −2; 20 to 24 s, s = 104 − 4(t − 20), v = −4, a = 0. Readings every 2 s: s = 0, 4, 16, 36, 60, 84, 102, 108, 108, 108, 104, 96, 88; v = 0, 4, 8, 12, 12, 12, 6, 0, 0, 0, −4, −4, −4. Gaps 4, 12, 20, 24, 24, 18, 6, 0, 0, −4, −8, −8. The acceleration steps at 6, 10, 14, 18 and 20 s are idealised as instant changes (stated nowhere in learner copy; the a-t graph's vertical jumps are drawn as thin dashed connectors, not as plotted values).
  (b) Road scale: 0 to 110 m across the road strip (markers labelled 0, 4, 16, 36, 60, 84, 102, 108 m; the reversing markers at 104, 96, 88 m sit under the strip in a second row to avoid overlap).
  (c) Graph windows: displacement 0 to 120 m (ticks 20); velocity −6 to 14 m s⁻¹ (ticks 4, zero line bold); acceleration −4 to 3 m s⁻² (ticks 1, zero line bold); time 0 to 24 s (ticks 2). The velocity and acceleration panels show the zero line clearly, because scene 7 depends on "below the axis".
  (d) Scene 4 cursor at t = 4 s: s = 16 m, v = 8 m s⁻¹, a = 2.0 m s⁻².
  (e) A1: 1.5/1.0 = 1.5 m s⁻² per second for 0 to 2.0 s (3.5 − 2.0 = 1.5; 5.0 − 3.5 = 1.5); 0 for 2.0 to 4.0 s. A2: 3.0/1.0 = +3.0 m s⁻¹ (0 to 2.0 s); 0 (2.0 to 3.0 s); (4.0 − 6.0)/1.0 = −2.0 m s⁻¹ and (2.0 − 4.0)/1.0 = −2.0 m s⁻¹ (3.0 to 5.0 s). A2's intervals are joined straight in the model answer, assuming steady motion within each part (the same assumption as scene 2, said in the feedback as "steady"); the sudden changes at 2.0 and 3.0 s are an idealisation.
  (f) Pronunciations: "displacement-time graph" (said in full, never "s-t" or "d-t"); "two point oh metres per second squared"; "minus three point oh"; "one point five"; "plus three point oh metres per second".

Main question: *A car speeds up, cruises, brakes, parks and reverses. Its position and velocity are recorded every two seconds. How do those numbers become three linked graphs, and what does each shape tell us?*
Entry knowledge (Stage 5 plotting; v05 Δs/Δt and instantaneous velocity; v06 Δv/Δt).
Stops after: constructing the three graphs from a table with the joining assumption; linking them on one time axis; describing rest, constant velocity, speeding up, slowing down and negative velocity from shapes. No tangents, no areas, no equations.
Handoff: v08, numbers from the graphs (slopes and signed areas).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key: displacement navy; velocity teal; acceleration orange (as v06's Δv⃗); road markers and gap brackets amber; the time cursor grey; data points filled in the graph's colour; joins drawn after the points in the same colour; phase bands pale paper tints; working in ink; current result bright, earlier items dim. Graph titles on screen: "displacement s (m)", "velocity v (m s⁻¹)", "acceleration a (m s⁻²)", against "time t (s)".

### 1. hook (same time, bigger gaps)
> Last video ended with a car's velocity, recorded every two seconds. Let's watch that car. Every two seconds, we mark where it is on the **road**. Same time between marks, but look at the gaps. Four metres, then twelve, then **twenty**. The car covers more ground in each step, because it's speeding up. So if we plot those positions against time, will they make a straight line, or a curve? Predict, then we'll build **it**.

Visual: opens on v06's last frame (table "t (s): 0, 2, 4, 6; v (m s⁻¹): 0, 4, 8, 12" beside empty velocity-time axes, chip "what shape?"). The table slides into the data strip; the empty axes slide to become the middle panel's frame, and two more empty frames draw above and below it (displacement, acceleration). Heading writes on: "Motion graphs from data". On "road" the road strip draws across the top with the yellow car plate at 0 m; the car drives (about 3 s of screen time for 6 s of motion), the clock readout ticking, and drops amber markers at 0, 4, 16 and 36 m, each labelled. On "twenty" gap brackets write "4 m", "12 m", "20 m" between the markers; the displacement row of the table fills "s (m): 0, 4, 16, 36" grey tag "teaching data". On "it" chips "straight / curve" and a 3-second countdown ring.

### 2. building the displacement-time graph
> To build a displacement-time graph, time goes across the bottom, because it's what we choose when to measure. Displacement goes up the side. Label both, with their units, and pick a scale that fits the biggest **value**. Now plot each reading. At zero seconds, zero metres. At two seconds, four. At four, sixteen. At six, thirty-**six**. Then join them with a smooth curve, assuming the car changes speed smoothly between readings. It's a curve, and it gets **steeper**. That's the growing gaps again. Steeper means more displacement each second, so the car is moving **faster**.

Visual: the top panel highlights. On the first sentence its time axis writes "time t (s)" with ticks 0 to 24; on "Displacement" the vertical axis writes "displacement s (m)"; on "value" ticks 0 to 120 write (author note c), grey tag "scale: fits 108 m, the largest reading". One point per clause: each table cell lifts and drops into place as a navy dot ((0, 0), (2, 4), (4, 16), (6, 36)); the matching road marker pulses at the same time. On "smooth curve" the join draws through the four points (grey tag "assumes smooth change between readings"). On "steeper" three short grey rise-brackets appear over each 2 s step (4, 12, 20) mirroring the road's gap brackets, which pulse together. On "faster" the curve's last segment glows.

### 3. building the velocity-time graph
> Now the velocity readings: zero, four, eight and twelve metres per second. Plot them on a velocity-time graph, the same way. These points sit on a straight **line**. That's because the velocity goes up by the same amount, four metres per second, in every two-second step. And from last video, a change in velocity, divided by the time it takes, is the acceleration. Four over two is two point oh metres per second squared, the same in every **step**.

Visual: the middle panel highlights; the velocity row of the table glows. Teal dots drop in one per value ((0, 0), (2, 4), (4, 8), (6, 12)); on "line" the straight join draws. On the next sentence small step brackets under the line "+4 in 2 s" appear three times. Right column: row "a = Δv ÷ Δt = 4 m s⁻¹ ÷ 2 s = 2.0 m s⁻²" (grey tag "v06"); on "step" the row repeats ghosted three times, once per interval.

### 4. the acceleration-time graph, and lining them up
> So the acceleration-time graph is the simplest of the three. The acceleration is two point oh the whole time, so it's a flat line at two point **oh**. Each acceleration comes from the change between two velocity readings, so it belongs to the whole two-second step between them, not to one moment. Now look at the three graphs, one above the other, with the same time axis. Pick any moment, say four seconds. The car is sixteen metres from the start, it's moving at eight metres per second, and it's speeding up at two metres per second squared. One moment, three graphs, three different **facts**.

Visual: the bottom panel highlights; three orange dots at 2.0 (one per interval's middle, labelled "0 to 2 s", "2 to 4 s", "4 to 6 s"), then on "oh" the flat orange line draws from 0 to 6 s. On "Each acceleration" each dot's interval bracket glows on the velocity panel above it (the two readings it came from), and the dot spreads into its flat segment. On "Pick any moment" the grey time cursor drops through all three panels and the road at t = 4 s (the car snaps to its 16 m position); readout chips write at the cursor, one per clause: "s = 16 m", "v = 8 m s⁻¹", "a = 2.0 m s⁻²". On "facts" the three chips glow together.

### 5. the trip carries on
> The trip carries on. From six seconds to ten, the car holds twelve metres per second. The gaps on the road stay the same, twenty-four metres each, so the displacement graph becomes a straight line. The velocity graph goes flat, and the acceleration drops to **zero**. Then the car brakes. From ten to fourteen seconds, its velocity falls from twelve to zero. Each change is minus six metres per second, over two seconds, so the acceleration is minus three point **oh**. The gaps shrink, eighteen metres, then six, so the displacement curve levels **off**. After fourteen seconds, the car is parked, a hundred and eight metres from the **start**.

Visual: the cursor leaves; the table extends one column per reading as the car drives on. On the second sentence the car drives 6 to 10 s at a steady rate dropping markers at 60 and 84 m, gap brackets "24 m", "24 m"; displacement dots (8, 60), (10, 84) and a straight navy join; velocity dots (8, 12), (10, 12) and a flat teal join; on "zero" the orange line steps down (dashed connector) and runs along the axis from 6 to 10 s. Phase band "steady velocity" tints 6 to 10 s. On "brakes" the car slows, markers at 102 and 108 m, gap brackets "18 m", "6 m"; velocity dots (12, 6), (14, 0) with a falling straight join; right column row "a = (6 − 12) ÷ 2 = −3.0 m s⁻²"; on "oh" the orange line steps to −3.0 from 10 to 14 s. On "off" the displacement dots (12, 102), (14, 108) and a levelling curve. Phase band "braking" tints 10 to 14 s. On "start" the car sits still; the table adds 16 and 18 s (s 108, v 0) and all three graphs extend flat to 18 s (displacement at 108, velocity and acceleration on the axis); phase band "parked".

### 6. reading the shapes: flat isn't always stopped
> Now let's read the shapes. A flat line means something different on each graph. From fourteen seconds, the displacement graph is flat. The position isn't changing, so the car is at **rest**. But from six to ten seconds, it's the velocity graph that's flat, at twelve. The car is still moving, at a steady **velocity**. And a flat acceleration graph means a steady acceleration, which here is two, zero, or minus **three**. One more trap. Steeper doesn't mean further. The displacement graph is steepest from six to ten seconds, where the car is fastest. Its displacement is biggest later, once it's **parked**.

Visual: on "rest" the flat displacement section (14 to 18 s) is scribble-circled, the parked car on the road beside it, tag "flat s: not moving". On "velocity" the flat velocity section (6 to 10 s) is scribble-circled and the car replays its steady drive (markers 24 m apart), tag "flat v: moving steadily". On "three" the three flat orange sections glow in turn, tag "flat a: steady acceleration". On "Steeper" the steepest displacement section glows with a tag "steepest: fastest"; on "parked" the 108 m level glows with a tag "biggest displacement" and a chip "steeper = further" fades in and is crossed.

### 7. driving back: negative velocity
> What if the car drives back toward the start? From eighteen seconds, its displacement starts to **fall**, so the displacement graph slopes down. Its velocity is now negative, so the velocity graph drops below the time **axis**. Negative velocity doesn't mean slowing down. It means moving in the negative direction, back toward the start. Here, it's actually speeding up backwards, to minus four metres per second, so its acceleration is negative **too**.

Visual: the car plate mirrors and drives back from 108 m; markers at 104, 96 and 88 m on a second row under the road, gap brackets "−4 m", "−8 m", "−8 m" (author note b); the table adds 20, 22, 24 s. On "fall" displacement dots (20, 104), (22, 96), (24, 88) with a curve then straight falling join; tag "s falling: moving back toward the start". On "axis" velocity dots (20, −4), (22, −4), (24, −4) with the join from (18, 0) falling below the bold zero line then flat at −4; the region below zero tints pale, tag "v negative: negative direction". On the third sentence a chip "negative v = slowing down" fades in and is crossed. On "too" the orange line steps to −2.0 from 18 to 20 s (then 0), with a small teal arrow and orange arrow over the car pointing the same way, tag "same direction: speeding up".

### 8. memory aid
> Here's one way to read any of these graphs. A flat line means that quantity isn't changing. Flat displacement, the car isn't moving. Flat velocity, it's moving steadily. Flat acceleration, its velocity changes at a steady rate. So before you decide what flat means, check which graph you're **reading**.

Visual: the three panels stay; one flat section per graph glows as it is named (displacement 14 to 18 s; velocity 6 to 10 s; acceleration 0 to 6 s). The handwritten line writes large in the right column: "Flat means that quantity isn't changing." Under it, smaller: "Check the vertical axis first." On "reading" the three axis titles glow. Hold about 2 seconds.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. A trolley's velocity is recorded every second, from zero to four seconds. Describe the shape of its velocity-time graph, find the acceleration in each part, and sketch the acceleration-time graph. Pause here to answer.

Visual: `QuestionCard`, worded as printed, with its table: "The velocity of a trolley was recorded every second." Table: "t (s): 0, 1.0, 2.0, 3.0, 4.0; v (m s⁻¹): 2.0, 3.5, 5.0, 5.0, 5.0". "(a) Describe the shape of the velocity–time graph for the trolley. (b) Determine the acceleration of the trolley in each part of the motion. (c) Sketch the acceleration–time graph." The full question and table stay on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no axes).

### 10. feedback 1 (brief)
> From zero to two seconds, the velocity rises by one point five every second. So the graph is a straight rising line, with an acceleration of one point five metres per second **squared**. From two to four seconds, it stays at five point oh, so the graph is flat, and the acceleration is **zero**. The flat part doesn't mean the trolley **stopped**.

Visual: card shrinks to the top with its table; "every second" and the velocity row underlined. A small velocity-time sketch draws: teal points and a rising straight join to (2.0, 5.0), then flat to 4.0 s. Rows: "a = (5.0 − 2.0) ÷ 2.0 = 1.5 m s⁻²" on "squared"; "a = 0" on "zero". A small acceleration-time sketch draws: flat at 1.5 from 0 to 2.0 s, dashed step, on the axis to 4.0 s. On "stopped" a chip "stops at 2.0 s" fades in and is crossed (caption "flat v: still moving at 5.0 m s⁻¹"). Hold about 1 second.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. A toy car's displacement from a start line is recorded every second. Describe its motion in each part, including its velocity. Pause here to answer.

Visual: `QuestionCard`, worded as printed, with its table: "The displacement of a toy car from a start line was recorded every second." Table: "t (s): 0, 1.0, 2.0, 3.0, 4.0, 5.0; s (m): 0, 3.0, 6.0, 6.0, 4.0, 2.0". "Describe the motion of the toy car during each part of its motion, including its velocity." The full question and table stay on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 12. feedback 2 (brief)
> From zero to two seconds, the displacement rises three metres every second, so the car moves away at a steady plus three point oh metres per **second**. From two to three, it's at **rest**. From three to five, it falls two metres every second, so the car moves back toward the start at minus two point oh metres per **second**. Falling doesn't mean slowing down. It means moving in the negative **direction**.

Visual: card shrinks to the top with its table; the displacement row underlined. A small displacement-time sketch draws in navy: rising straight to (2.0, 6.0), flat to 3.0 s, falling straight to (5.0, 2.0). Rows: "v = 3.0 ÷ 1.0 = +3.0 m s⁻¹ (away)" on "second"; "v = 0 (at rest)" on "rest"; "v = (2.0 − 6.0) ÷ 2.0 = −2.0 m s⁻¹ (back toward the start)" on "second" (second). On "direction" a chip "slows down from 3.0 to 5.0 s" fades in and is crossed (caption "falling s: moving in the negative direction"). Hold about 1 second.

### 13. handoff
> These graphs hold more than shapes. Here's a car whose velocity rises in a straight line, from four to twenty metres per second, over eight seconds. What's its acceleration, and how far does it travel, read straight from the **graph**?

Visual: the memory line returns small at the top. Board clears to one velocity-time graph (site lesson 8 `we-1`): axes "velocity v (m s⁻¹)" 0 to 24, "time t (s)" 0 to 10; a teal straight line from (0, 4) to (8, 20) with its end points dotted. On "graph" chips "acceleration?" and "how far?" and a small "Next: slopes and areas" chip. No triangle, no shading. Hold about 2 seconds.

### 14. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Motion graphs: time across, the quantity up; label each axis with quantity and unit; choose a scale that fits the data; plot each reading, then join, assuming the motion changes smoothly between readings.
2. Displacement-time: flat = at rest; straight sloping = constant velocity; curving and getting steeper = speeding up; sloping down = moving in the negative direction. Steeper means faster, not further.
3. Velocity-time: flat = constant velocity (still moving unless the line is on the axis); straight rising or falling = constant acceleration, a = Δv/Δt; below the axis = moving in the negative direction.
4. Acceleration-time: flat = constant acceleration; on the axis = zero acceleration (constant velocity or at rest).

Memory aid (large, on the notes screen): *Flat means that quantity isn't changing.* Second line: *Check the vertical axis first.*

## Teaching checks

- **Does it explain causes?** Why the displacement curve steepens: equal times, growing gaps, so more displacement each second (1, 2). Why the velocity graph is straight: equal velocity gains in equal times (3). Why the acceleration graph is flat: the velocity changes by the same amount each step (3, 4). Why braking levels the displacement curve and gives a negative acceleration: shrinking gaps; negative velocity changes (5). Why a flat velocity line is not rest: the plotted quantity, velocity, is steady, not zero (6). Why a falling displacement means negative velocity: the car moves back toward the start (7).
- **Misconceptions addressed:** "a flat line always means stopped" (6; 10 crossed; memory aid; key notes 2 to 4); "steeper means further" (6; key note 2); "negative velocity means slowing down" (7; 12 crossed); "the table proves the shape between readings" (2, the joining assumption; key note 1).
- **One idea at a time:** one graph per scene from 2 to 4; one phase per sentence in 5; one shape per sentence in 6; one point per spoken value.
- **Video makes it easier:** the student sees each reading leave the table and land on the graph while the matching road marker pulses (2, 3), watches the gap brackets on the road match the rise brackets on the curve (2), and watches the time cursor read three facts at one moment (4). The car moving above the graphs is the cause; the graphs are the record.
- **Response opportunity:** a 3 s in-teaching prediction (1); two unseen HSC-style tasks with their data tables visible, 10 seconds each with the invitation to pause, nothing answer-bearing. One crossed mistake each; feedback about 26 s and 31 s.
- **Avoided double teaching:** Δs/Δt (v05) and Δv/Δt (v06) are used with a one-line recall; the sign convention is used, not re-taught.
- **Syllabus coverage:** `ci1753e3ea` (constructed from data: displacement-time 2, 5, 7; velocity-time 3, 5, 7; acceleration-time 4, 5, 7; A1); `ci432e72b1` (described from graphs: 4 to 7; A1, A2).
- **Out of scope by design:** tangents, gradients of curves and areas (v08); the equations (v09); scattered measured data and lines of best fit (v10).

## Practice questions and model answers

**Attempt 1 (scene 9; original wording, HSC style, 4 marks suggested, not an official marking scheme).** "The velocity of a trolley was recorded every second. t (s): 0, 1.0, 2.0, 3.0, 4.0; v (m s⁻¹): 2.0, 3.5, 5.0, 5.0, 5.0. (a) Describe the shape of the velocity–time graph for the trolley. (b) Determine the acceleration of the trolley in each part of the motion. (c) Sketch the acceleration–time graph."
Model answer: (a) A straight line rising from 2.0 m s⁻¹ at 0 s to 5.0 m s⁻¹ at 2.0 s, then horizontal at 5.0 m s⁻¹ to 4.0 s. (b) 0 to 2.0 s: a = (5.0 − 2.0) ÷ 2.0 = 1.5 m s⁻²; 2.0 to 4.0 s: a = 0. (c) A horizontal line at 1.5 m s⁻² from 0 to 2.0 s, then along the time axis from 2.0 to 4.0 s. Classic mistake (crossed): "the trolley stops at 2.0 s".

**Attempt 2 (scene 11; original wording, HSC style, 3 marks suggested).** "The displacement of a toy car from a start line was recorded every second. t (s): 0, 1.0, 2.0, 3.0, 4.0, 5.0; s (m): 0, 3.0, 6.0, 6.0, 4.0, 2.0. Describe the motion of the toy car during each part of its motion, including its velocity."
Model answer: 0 to 2.0 s: moves away from the start line at a constant velocity of +3.0 m s⁻¹ (3.0 m each second). 2.0 to 3.0 s: at rest, 6.0 m from the start. 3.0 to 5.0 s: moves back toward the start at a constant velocity of −2.0 m s⁻¹, ending 2.0 m from the start. Classic mistake (crossed): "it slows down from 3.0 to 5.0 s".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Car readings (every 2 s, 0 to 24 s) | s 0, 4, 16, 36, 60, 84, 102, 108, 108, 108, 104, 96, 88 m; v 0, 4, 8, 12, 12, 12, 6, 0, 0, 0, −4, −4, −4 m s⁻¹ | 1 to 8 |
| Gaps | 4, 12, 20, 24, 24, 18, 6, 0, 0, −4, −8, −8 m | 1, 2, 5, 7 |
| Accelerations | 2.0 (0 to 6 s), 0 (6 to 10 s), −3.0 (10 to 14 s), 0 (14 to 18 s), −2.0 (18 to 20 s), 0 (20 to 24 s) m s⁻² | 3 to 7 |
| Cursor at 4 s | 16 m, 8 m s⁻¹, 2.0 m s⁻² | 4 |
| A1 | 2.0, 3.5, 5.0, 5.0, 5.0 m s⁻¹ at 0 to 4.0 s; 1.5 m s⁻²; 0 | 9, 10 |
| A2 | 0, 3.0, 6.0, 6.0, 4.0, 2.0 m at 0 to 5.0 s; +3.0, 0, −2.0 m s⁻¹ | 11, 12 |
| Handoff (site lesson 8 we-1) | 4 → 20 m s⁻¹ in 8 s; not computed | 13 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (2 Nov, the author note a function sampled every 2 s); Codex to re-check.

- Readings as in the table above, from author note a; continuity of s and v at 6, 10, 14, 18 and 20 s (s: 36, 84, 108, 108, 104; v: 12, 12, 0, 0, −4).
- 4/2 = 2.0; (6 − 12)/2 = −3.0; (0 − 6)/2 = −3.0; (−4 − 0)/2 = −2.0.
- A1: (3.5 − 2.0)/1.0 = 1.5; (5.0 − 3.5)/1.0 = 1.5; (5.0 − 2.0)/2.0 = 1.5.
- A2: 3.0/1.0 = 3.0; (4.0 − 6.0)/1.0 = −2.0; (2.0 − 4.0)/1.0 = −2.0.

## Memory aid check

- **"Flat means that quantity isn't changing."** Written for this lesson, with the second line "Check the vertical axis first." Meaning, as said in scene 8: a horizontal section means the plotted quantity is constant: flat displacement, constant position (at rest); flat velocity, constant velocity (moving steadily, or at rest if on the axis); flat acceleration, constant acceleration (velocity changing at a steady rate, or not changing if on the axis). Assumptions checked: true for every graph of a quantity against time; "isn't changing" refers to the quantity on the vertical axis, which the second line makes explicit; it does not say "flat means zero", so the on-axis cases are consistent (key notes 3 and 4 give them). It prevents the site's first misconception directly, and it transfers to v08 and v09 graphs. Introduced after all three flat cases have been seen (5, 6).
- **Considered, not used:** "each graph is the slope of the one above" (true, but it is v08's relationship, and stating it here would pre-empt v08's tangents); "SVA" stacking acronyms (no explanatory content).

## Narration length estimate

Revision 1 count (2 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,406 characters**, 14 scenes. Characters per scene (1 to 14): 412, 563, 442, 590, 629, 594, 443, 299, 229, 335, 158, 393, 231, 75. At 13.3 characters per second the speech is about 406 s; add about 18 s of holds and settling (the car drives and drops markers in 1, 5 and 7; points fly from the table in 2 to 5 and 7; the cursor reads in 4; the 2-second memory hold), 3 s for the prediction countdown, 20 s for two attempt countdowns, 2 s of feedback holds and about 55 s more of the quiet notes hold (about 99 s of holds): **about 505 s**. **Below the 5,500 character floor by about 94 characters, deliberately.** The two syllabus points are fully taught with one trip, one table and three graphs, and the draft reached 5,506 only with feedback of 32 to 33 s; trimming the feedback to the owner's 15 to 30 s rule took it under. Root decides: accept at 5,406, or add one sentence to scene 3 ("Notice the points are equally spaced up the page, because the velocity rises the same amount each step.") to reach about 5,510. Feedback: scene 10 about 26 s, scene 12 about 31 s (including the 1 s holds). Scenes 5 and 6 are the longest; the car must reach each phase before its sentence (the build sets the car's motion clock from the word timings, not from real time).

## Scene list and build ids

Lesson key `p-y11-v07` (route phys-y11-fa1-v07). Suggested explainer folder `src/explainer/lessons/phys-y11-fa1-v07` and build folder `docs/production/claude-pm/lessons/p-y11-v07` (root to confirm).

In order (kebab-case; 14 scene headings, all `### N.`): hook, build-displacement, build-velocity, build-acceleration, trip-continues, reading-flat, negative-velocity, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`: the learner reads the worded question and its table and works during the countdown) and key-notes (`hold`: the learner copies four notes). Transitions (`pickTransition`): v06's last frame continues into scene 1 (camera continue: the table and empty axes become the strip and the middle panel); 1 to 8 camera continue on one board (the road, table and three panels persist; each scene highlights its panel or phase); attempts and feedback card shrink to the top; 12 to 13 board clear; 13 to 14 fade to the notes board.

Holds: hook (3 s prediction countdown inside the scene), attempt-1, attempt-2 (10 s countdowns after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/p-y11-v07-learning-review.md`, `science_check` = `checks/p-y11-v07-physics-check.md`.

## Assets

Have (inspected 2 Nov; uniform scaling only, never stretched):
- `public/assets/biology/b4-car-yellow-v1.png` (side view, facing right; the same car as v05 scene 6): scenes 1 to 7, mirrored for scene 7.

No new plate. All graphs, markers, brackets and tables are coded.

Coded: road strip and markers (v05's `MotionTrack` with a marker overlay), data table strip, three linked panels, time cursor and readout chips, phase bands, rise and gap brackets, small sketch graphs in the feedback, `AlignedAlgebra`, `Countdown`, `QuestionCard` with a table row, `Chip` with `cross`, `KeyNotes`, `Heading`. Maths kit parts usable: `FunctionGraph` / `GraphLayer` (piecewise functions with `breaks` at the acceleration steps, one per panel) and `StackedDerivativePanels` (three panels on a shared x range with `featureColumns` for the cursor; its function labels set to s, v, a).

Kit gaps (for the build brief):
1. **`MotionGraphStack`** (new, physics; can wrap `StackedDerivativePanels`): three panels (s, v, a) against one time axis, driven by one piecewise motion definition (author note a) so the graphs, the table and the car's road position all come from the same function; data points that appear at cues (optionally flying from a table cell); joins that draw only after their points (smooth for s, straight for v, flat segments with dashed step connectors for a); a time cursor with readout chips; phase bands; scribble-circle anchors by time interval.
2. **`QuestionCard` table row.** The attempt cards need a two-row data table inside the card; if `QuestionCard` lacks a table slot, a small `DataTable` child.

## Codex asset brief

None. No new plate is needed (the yellow car plate is reused).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in the narration, screen text, attempts and key notes against the "Numbers used" table, including continuity of the author note a function.
2. Confirm each described shape matches the data: steepening, straight, levelling, flat, falling (displacement); rising straight, flat, falling straight, below the axis (velocity); flat at 2.0, 0, −3.0, −2.0 (acceleration).
3. Confirm the physics claims: "steeper means faster, not further"; "negative velocity means moving in the negative direction, not slowing down"; during 18 to 20 s the car speeds up with a negative acceleration; key notes 2 to 4.
4. Confirm the joining assumption is stated in scene 2 and key note 1, and that no tangent, gradient of a curve or area is used (v08's scope).
5. Confirm both attempt questions are original in wording, carry their data tables, and give no shape or answer away.
6. Confirm the two syllabus quotes match the route JSON exactly and no 2017-syllabus label appears.
7. Confirm no em dash (U+2014) anywhere in this file (the en dashes in the syllabus quotes and in "velocity–time" on the cards are allowed), and Australian spelling.
8. Confirm the narration character count by script with the build parser rules.
9. Add site corrections 1 and 2 under Decisions to `../site-corrections-phys-y11.md` (owner record only).

## YouTube metadata (draft)

Title: Motion Graphs from Data: Displacement, Velocity and Acceleration | Year 11 Physics

(Title length: 83 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa1-fundamentals-of-mechanics/lesson07.sa.html

A car speeds up, cruises, brakes, parks and drives back, and its position and velocity are recorded every two seconds. Watch the readings become three linked graphs: displacement-time, velocity-time and acceleration-time. See why growing gaps make a curve that gets steeper, why equal velocity steps make a straight line, and how to read the shapes: a flat line means something different on each graph, steeper means faster (not further), and negative velocity means moving back, not slowing down. Two exam-style questions at the end.

Year 11 Physics (2025 syllabus), Focus Area 1: Fundamentals of mechanics.
Syllabus content (NSW Physics 11-12, 2025):
"Use data to construct displacement–time graphs, velocity–time graphs and acceleration–time graphs" (ci1753e3ea)
"Use data to analyse motion graphs to describe the displacement, velocity and acceleration of an object" (ci432e72b1)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

Builds on: Velocity in two dimensions and acceleration (previous video). Next: Reading relationships from motion graphs.

#Year11Physics #Physics #MotionGraphs #HSCScience

## Open decisions

- **1. Reversing phase (learning review).** Scene 7 adds a sixth phase (driving back) to the same graphs, so the window runs to 24 s. If the learning review finds the full stack crowded, the alternative is a separate small displacement-time and velocity-time pair for the reverse only (clear change), keeping the main stack to 18 s. Recommendation: keep one stack; the negative velocity is clearest as the continuation of the same trip.
- **2. Acceleration steps.** The acceleration-time graph jumps at 6, 10, 14, 18 and 20 s (idealised instant changes). The jumps are drawn as thin dashed connectors and never described. Confirm with the physics check that this is acceptable without a learner caveat (the site draws the same idealisation in Q2).
- **3. Site link form.** As v05.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v05, v06 and Stage 5 graphing; check that the gap brackets on the road make the curve's shape feel caused, not stated; that the joining assumption reads as a condition; that the three-panel cursor is readable on a phone; that "flat means that quantity isn't changing" is clear across the three graphs; that the attempt cards give nothing away), then the Codex physics check and error check.
- The markers, gap brackets, flying data points and the time cursor carry the explanation; judge them at playback speed in the voiced preview. The road position, the table and the three graphs must come from the same motion function.
