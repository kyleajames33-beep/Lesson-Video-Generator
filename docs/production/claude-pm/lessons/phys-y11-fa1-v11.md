# Year 11 Physics FA1 V11: How does changing the observer change a measured velocity? Frames of reference and relative velocity, v_AB = v_A − v_B, in one and two dimensions (design)

Status: Revision 2 (2 Nov): brief 145 repairs applied (no findings from the learning review or the physics check; no wording changed; 4,990 characters, about 469 s confirmed by recount). Needs a Codex error check.

Narration 4,990 characters, 14 scenes, about 469 s (7.8 minutes) including one 3 s prediction countdown, two 10 s attempt countdowns and the notes hold, counted by script with the build parser rules (see "Narration length estimate"). **Below the 5,500 character band by design:** the content point's teaching (frames, the subtraction, perpendicular 2D cases, direction naming, order) fills about 5,000 characters without padding; root decides whether to accept it or add one of the options in open decision 5.

Scope: eleventh video of Year 11 Physics (2025), Focus Area 1. Templates: `math-a12-d10.md` (calculation layout, coded vector diagrams, result lines on cues) and `bio-y11-fa1-v05.md` (painted objects at native aspect, no people). Route entry **phys-y11-fa1-v11** in `../../phys-y11-video-route.json` (route-approved by root 1 Nov; playlist order 11; kind concept). Pre-design pack `../pre-design/phys-y11/phys-y11-fa1-v11.md`. Site lesson read in full as text (2 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa1-fundamentals-of-mechanics/lesson11.sa.html`, SHA256 `ecee09145c2180a4c0ab23ae9edc2fd3dc7a24014e3d5fec5eaade4ff7fdbc75` (recomputed 2 Nov). Sections used: hook (the slanted rain), warm-up (two vehicles side by side at the same speed look still), velocity depends on the observer (quick check: 30 m/s east relative to 20 m/s east gives 10 m/s east), relative velocity in two dimensions (worked example `we-1`, numbers unchanged), the activity's two boats (6.0 m/s north, 8.0 m/s east, used as the second worked example), same direction against opposite direction, misconceptions. Lesson review key **p-y11-v11**.

Syllabus content point (Physics 11-12 (2025), Year 11, Focus Area 1, group "Motion relationships"; local ledger ID P25-FA1-G2-06; official CMS codename), quoted from the route JSON `syllabusActions` with the vector notation in linear form:

- `ci9a988a52`: "Analyse problems of relative velocity involving motion in two dimensions using v⃗_AB = v⃗_A − v⃗_B"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

**Boundary.** Entry knowledge (route): Stage 5 Science and Mathematics (signed arithmetic, Pythagoras, right-triangle trigonometry) and phys-y11-fa1-v10 (the previous video; its handoff asks this video's question). From earlier FA1 videos, recalled and not re-taught: velocity is a vector (v01); vectors add head to tail, and subtracting a vector means adding its reverse (v02); compass directions such as "53° west of north". Start (route): "Start with Relative Velocity in Two Dimensions. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions." Stop (route): "Stop after the learner can answer: How does changing the observer change a measured velocity? Teach only the listed actions; the next video owns its separate question." Next (route): "phys-y11-fa1-v12: How can a free-body diagram determine the net force?" Not taught: non-perpendicular velocities (they need components, which v12 teaches as a syllabus action); river-crossing and heading problems that rearrange the relation to v_A = v_AB + v_B (a later practice item if root wants one); relativity.

**Opening frame.** v10 (Revision 1, written just before this design) ends scene 15 with `b4-car-blue-v1.png` and `b4-car-yellow-v1.png` side by side on a coded road strip, both moving right with velocity arrows, and the chip "Next: How does changing the observer change a measured velocity?". V11 opens there: the chip becomes the heading and the cars keep rolling.

## Decisions

- **Learner question kept (route), answered as a cause.** "How does changing the observer change a measured velocity?" The answer, built in order: every velocity is measured from a frame of reference, usually the ground (2); riding along with B means taking B's velocity away from everything, which stops B and leaves A moving at v_A − v_B (2, 3); in a line that makes same-direction speeds subtract and opposite-direction speeds add (3); in two dimensions the same subtraction is done by reversing v_B and adding it head to tail (4); Pythagoras and tan then give the size and direction for perpendicular velocities (5, 7); swapping the observer reverses the answer (8).
- **"Ride with B" is the visual cause (owner physics bar).** In scenes 2 and 7 the camera locks onto B: the coded background (road lane marks, then lake ripple marks) starts sliding at −v_B while B stops on screen, and A's on-screen motion becomes v_A − v_B. The student sees the subtraction happen before the equation is written, and the reversed v_B arrow in scene 4 is the same "extra velocity that stops B".
- **Hook surprise (site warm-up and hook).** Two cars side by side at the same speed: seen from one, the other looks parked. Then rain falling straight down streaks sideways across a moving car's window. "The rain didn't change direction. The observer did."
- **One dimension first, briefly (site quick check and "same versus opposite" card).** 30 m/s east relative to 20 m/s east gives 10 m/s east; then a 3 s prediction: turn B round (20 m/s west), and A relative to B is 30 − (−20) = 50 m/s east. Kept short (two scenes) because the content point is two-dimensional; it gives the sign habit the 2D cases need.
- **Worked example 1 (site `we-1`, numbers unchanged).** Rain 80 km/h down (A), car 80 km/h north (B); v_AB = 80 down + 80 south; |v_AB| = √(80² + 80²) = 113 km/h; 45° from the vertical, towards the south. The site's values are taken as ideal teaching values, so 113 km/h (grey readout 113.1) is reported; the log's precision note (if 80 were two figures, 1.1 × 10² km/h) is recorded in author note c, not in learner copy.
- **Moving direction against "appears to come from" (scene 6; the log's existing precision note on L11, applied, not re-logged).** The rain's velocity relative to the car points down and south (backwards); the streaks on the side window slope down and back; the rain seems to come from up ahead (north). Both describe one velocity; questions must be read for which one they ask. A2 tests it.
- **Worked example 2 (site activity's two boats, numbers unchanged).** A 6.0 m/s north, B 8.0 m/s east: v_AB = 6.0 N + 8.0 W; |v_AB| = 10 m/s (two figures); tan θ = 8.0/6.0, θ = 53° west of north. The ride-with-B camera shows the lake sliding west and boat A moving north-west. Then scene 8: v_BA = 10 m/s, 53° east of south, the reverse.
- **Direction naming.** Every 2D answer states the size and a named direction, with the reference direction first ("53° west of north": start facing north, turn 53° towards west). A small coded compass with the angle arc draws the name on screen each time.
- **Memory aid (scene 8): "Ride with B, subtract B."** True for v_AB = v_A − v_B with both velocities measured from the ground; "B" is whoever is watching. It also fixes the order. Assumptions under "Memory aid check".
- **Attempts (original).** (A1, pack candidate 1 re-oriented) drone P 12.0 m/s east, drone Q 5.00 m/s south; v_PQ = 12.0 E + 5.00 N = 13.0 m/s, 22.6° north of east. Crossed: "13.0 m/s, 22.6° south of east" (added v_Q without reversing it). (A2, new values on `we-1`'s pattern) rain 6.0 m/s down, car 8.0 m/s north: 10 m/s, 53° from the vertical, pointing down and south; streaks slope down and back. Crossed: "the streaks slope forward" (as if the rain moved with the car). Neither card shows a vector diagram.
- **Mistake scene:** none separate. "An object has one true velocity" (1, 2; key note 1); "relative velocity means adding" (3, prediction; A1 crossed); "order doesn't matter" (8; key note 5); "the velocity points where the rain seems to come from" (6; A2 crossed).
- **Site sources used:** hook; warm-up; observer card and its quick check; `we-1` (unchanged); the two boats activity (unchanged numbers, solved on screen); same against opposite card (the sign rule; its 62/60 and 60/−60 examples not used, replaced by the quick-check numbers so one pair of cars runs through scenes 2 and 3); misconceptions 1 and 2. Not used: the matching task, short-answer Q1 to Q3 (practice).
- **Site errors found (this read, 2 Nov; for `../site-corrections-phys-y11.md`; the existing L11 precision note on 113 km/h and the rain's apparent direction is not repeated):**
  1. Same against opposite card: "For opposite directions, v⃗_B is negative, so v⃗_AB = v_A − (−v_B) = v_A + v_B". The vector symbol v⃗_B is treated as a signed value in the first clause and v_B as a positive speed in the second, so the same symbol means two things. Proposed: "Take east as positive. If B moves west at speed v_B, its velocity is −v_B, so v_AB = v_A − (−v_B) = v_A + v_B." (Notation clarity, not an arithmetic error.)
  2. Short-answer Q2 model answer: "v_AB = √(25² + 25²) = √1250 = 35.4 m s⁻¹". With 25 m/s given to two figures, report 35 m/s (or state that 25 is an exact teaching value). Precision note.
- **Cause chain taught, in order:** (1) the same motion looks different to different observers (1); (2) a frame of reference; riding with B takes B's velocity away from everything (2); (3) v_AB = v_A − v_B; same direction subtracts, opposite adds (3); (4) in 2D, reverse v_B and add head to tail (4); (5) rain on a car: Pythagoras and 45° (5); (6) moving direction against apparent source (6); (7) two boats: ride with B, size and named direction (7); (8) swapping the observer reverses the answer; memory aid (8).
- **Learner-visible vocabulary (plain meaning at first use):** observer (whoever is doing the measuring, 1); frame of reference (the viewpoint velocities are measured from, 2); ground frame (velocities measured from the ground, 2); relative velocity v_AB (the velocity of A as seen from B, 2, 3); reverse of a vector (the same size, pointing the opposite way; recalled from v02, 4).
- **Legacy logic ported:** none. Drawing parts only from the 2017 kit (`Arrow`, bounded vector heads in `course-kit.tsx`).
- **No human figures.** "Seen from one car" and "seen from inside" are spoken; nothing inside a car is drawn. Boats and drones are empty objects.
- **Author notes (not learner copy):**
  (a) Galilean relative velocity: if velocities are measured in the ground frame, the velocity of A in B's frame is v_A − v_B (non-relativistic speeds). "Ride with B" adds −v_B to every velocity in the scene, including the ground's (zero), which is why the background slides at −v_B.
  (b) Order: v_BA = v_B − v_A = −v_AB (same magnitude, opposite direction). For the boats, v_AB = 10 m/s at 53.13° W of N; v_BA = 10 m/s at 53.13° E of S.
  (c) Rain: v_AB = (0 north, −80 vertical) − (80 north, 0) = (−80 north, −80 vertical), i.e. 80 south and 80 down: magnitude 113.137 km/h, 45° from the downward vertical towards the south. Treated as ideal values; if 80 were two significant figures the report would be 1.1 × 10² km/h. Apparent source: up and north. A2: 6.0 down and 8.0 north: (−8.0 north, −6.0 vertical): 10.0 m/s, tan θ = 8.0/6.0 from the vertical, θ = 53.13°, pointing down and south.
  (d) Boats: v_A = 6.0 N, v_B = 8.0 E; v_AB = 6.0 N + 8.0 W; √(36 + 64) = 10.0; θ from north = tan⁻¹(8.0/6.0) = 53.13° towards west. Reported "10 m/s" (two figures, as 6.0 and 8.0) and 53°. A1: v_P = 12.0 E, v_Q = 5.00 S; v_PQ = 12.0 E + 5.00 N; √(144 + 25) = 13.0; θ from east = tan⁻¹(5.00/12.0) = 22.62° towards north; three figures.
  (e) 1D: east positive. v_A = +30, v_B = +20: v_AB = +10 (10 m/s east). v_B = −20: v_AB = +50 (50 m/s east). Speeds are illustrative of a highway (30 m/s = 108 km/h); kept as quick-check values.
  (f) Pronunciations: "v A B" as "v, A B"; "v A minus v B"; "v P Q"; "fifty three degrees west of north"; "twenty two point six degrees north of east"; "eighty kilometres per hour".

Main question: *Two cars side by side at the same speed: seen from one, the other looks parked. Rain falling straight down streaks sideways across a moving car's window. How does changing the observer change a measured velocity?*
Entry knowledge: Stage 5 (signed arithmetic, Pythagoras, tan); v01 (velocity is a vector); v02 (head-to-tail addition; subtracting means adding the reverse).
Stops after: frames of reference; v_AB = v_A − v_B with both velocities from the ground; same and opposite directions in a line; reversing and adding in 2D; perpendicular cases with Pythagoras, tan and a named direction; moving direction against apparent source; reversing the order; two attempts.
Handoff: v12, combining several forces on one object.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Board layout (constant): heading top-left; the scene (road strip side view, or lake plan view) in the left two-thirds; the vector diagram and algebra in the right third. Colour key: v_A blue; v_B orange; the reversed v_B (−v_B) orange dashed; the relative velocity v_AB teal and thicker; the ground frame's background marks grey; compass and angle arcs ink. Vectors are drawn to one scale within each scene, with equal x and y units (angles are true). At most three bright text items.

### 1. hook (a parked car at sixty)
> Last video ended with two cars side by side. Both are doing sixty kilometres an hour along the road. But seen from one car, the other doesn't seem to move at all. It looks **parked**. And in the rain, drops falling straight down streak sideways across a moving car's **window**. The rain didn't change direction. The observer did. So how does changing the observer change a measured velocity?

Visual: opens on v10's last frame (see Scope): the blue and yellow cars side by side on the road strip, both moving right, arrows "60 km/h" each; the "Next" chip moves to the top left as the heading "Relative velocity: it depends who's watching". On "seen from one car" the camera locks onto the blue car: the grey lane marks start sliding left while both cars stop on screen; on "parked" the yellow car's arrow fades and a chip "relative to the blue car: 0" writes. On "rain" the camera returns to the ground frame and the yellow car leaves; coded rain streaks fall vertically across the frame (grey tag "ground: straight down"). On "window" the camera locks onto the blue car again: the streaks tilt, sloping down and back across its side window (coded streaks clipped to the window region). On the last sentence both views sit side by side, small: "ground view" and "car view".

### 2. frames of reference: ride with B
> Every velocity is measured by an observer, from a viewpoint called a frame of reference. Usually that's the ground. Here, car A does thirty metres per second east, and car B does twenty east, both measured from the ground. Now ride along with B. To keep B still, you take twenty metres per second east away from everything. The road slides backwards at twenty, and car A creeps forward at only ten metres per second **east**. That's the velocity of A relative to B.

Visual: road strip, east to the right (a small "E" arrow). The yellow car labelled "A" with a blue arrow "30 m/s E"; the blue car labelled "B" with an orange arrow "20 m/s E"; a grey tag "ground frame". Both roll right at their ratio of speeds. On "ride along with B" a coded camera bracket locks onto B; an orange dashed arrow "−20 m/s" appears on every object at once (A, B and a lane mark), B's two arrows cancel and B stops on screen, the lane marks slide left at the dashed arrow's length, and A's arrow shrinks to a teal "10 m/s E" as A creeps ahead. On "east" the label "v_AB = 10 m/s E" writes beside A. Tag top right: "frame of reference: the viewpoint you measure from".

### 3. v_AB = v_A − v_B in a line (a quick prediction)
> So the velocity of A relative to B is v A minus v B. The observer's velocity is the one you subtract. Thirty east minus twenty east gives ten east. Now turn B around, so it does twenty metres per second west. Seen from B, how fast does A go? **Predict.** Take east as positive, so B's velocity is minus twenty. Thirty, minus minus twenty, is fifty metres per second east. Cars passing in opposite directions flash by, because their speeds **add**.

Visual: right column: boxed "v_AB = v_A − v_B" with grey tag "both measured from the ground"; under it "30 − 20 = 10 m/s (east)". On "turn B around" B flips to face left on the strip with an orange arrow "20 m/s W". On "Predict" the 3 s countdown ring runs with a chip "seen from B: v_AB = ?" (no options). After it: "east +" tag; "v_B = −20 m/s"; row "v_AB = 30 − (−20) = +50 m/s, so 50 m/s E" (bright). The camera locks onto B again: lane marks slide right now, and A rushes left to right past it with a long teal arrow "50 m/s E". On "add" chip "opposite directions: speeds add; same direction: speeds subtract".

### 4. subtracting in two dimensions
> In two dimensions the idea is the same, but the velocities point different ways. Subtracting a vector means adding its reverse. So to find v A minus v B, flip v B around, and join it head to tail onto v **A**. The arrow from the start to the finish is the relative velocity. That flipped arrow is exactly what riding with B does. It gives everything B's velocity, **reversed**.

Visual: clear change to a plain vector board (no objects). A blue arrow v_A pointing up (north) and an orange arrow v_B pointing right (east), tails at separate points. On "Subtracting a vector" the orange arrow rotates 180° about its midpoint into an orange dashed arrow "−v_B" pointing left (west). On "A" (bold) it slides so its tail meets v_A's head. On "start to the finish" a teal arrow draws from v_A's tail to −v_B's head, labelled "v_AB = v_A + (−v_B)". On "reversed" the scene 2 thumbnail returns small, its dashed "−20 m/s" arrow pulsing beside the dashed −v_B here (same colour, same meaning).

### 5. worked example: rain on a moving car
> Here's the worked example. Rain falls straight down at eighty kilometres per hour. A car drives north at eighty kilometres per hour. Find the velocity of the rain relative to the car. The rain is A, and the car is B. Flip the car's velocity, so it's eighty south, and add it to eighty down. Down and south are at right angles, so use Pythagoras. The size is the square root of eighty squared plus eighty squared, about a hundred and thirteen kilometres per **hour**. And because the two sides are equal, the angle from the vertical is forty five **degrees**.

Visual: calculation layout. Task strip: "Find the velocity of the rain relative to the car". Givens group (navy): "A: rain, v_A = 80 km/h down"; "B: car, v_B = 80 km/h north" (ideal values tag, grey). Left: side view, north to the right (a small "N" arrow), `b4-car-blue-v1.png` facing right with an orange arrow "80 km/h N"; coded rain streaks falling straight down with a blue arrow "80 km/h down". Right: vector diagram: blue arrow down; on "Flip" the orange arrow reverses to dashed "80 km/h S" pointing left and joins head to tail at the blue arrow's head; teal arrow from start to finish. `AlignedAlgebra`: "v_AB = v_A − v_B = 80 down + 80 south"; on "Pythagoras" a right-angle mark appears in the triangle; "|v_AB| = √(80² + 80²) = √12 800"; on "hour" boxed "≈ 113 km/h" (grey readout "113.1"); on "degrees" "tan θ = 80/80 = 1, θ = 45° from the vertical" with the angle arc drawn at the top of the teal arrow, between it and the downward vertical.

### 6. which way is it?
> Now, which way is it? The rain's velocity, relative to the car, points down and toward the south, backwards from the car's motion. So on the side window, the streaks slope down and **back**. Seen from inside, the rain seems to come from up ahead, from the north. Both describe the same velocity. Just be clear which one a question asks for: the direction it's moving, or the direction it seems to come **from**.

Visual: the algebra column dims to the boxed result. The teal arrow slides onto the car's side window (scaled down), pointing down and to the left (south, backwards); on "back" the window's coded streaks align with it and a tag writes "moving: down and south (45° from vertical)". On "comes from up ahead" a dotted grey line extends the teal arrow backwards, up and to the right beyond the car's front, with a tag "seems to come from: up and north". On "from" two chips write side by side: "direction of motion: down, towards the south" (teal, bright) and "appears to come from: up, from the north" (grey). Hold about 1 second.

### 7. worked example 2: two boats
> One more, on the water. Boat A heads north at six point zero metres per second. Boat B heads east at eight point zero. What's the velocity of A relative to B? Ride with B. The lake now slides west at eight, and boat A moves north and **west** at once. In vectors, that's six point zero north, plus eight point zero west. The size is the square root of thirty six plus sixty four, which is ten metres per **second**. For the direction, the tan of the angle from north is eight over six, so it's fifty three degrees west of **north**.

Visual: clear change to a plan view, north up (compass rose small at the top right): a pale blue lake field with sparse grey ripple marks; `y11p-boat-top-red-v1.png` labelled "A" heading up with a blue arrow "6.0 m/s N"; `y11p-boat-top-white-v1.png` labelled "B" heading right with an orange arrow "8.0 m/s E"; both move at their ratio of speeds with short coded wakes. On "Ride with B" the camera locks onto B: B stops on screen, the ripple marks slide left (west) at B's speed, and A's on-screen track bends into a diagonal up-left line. On "west" the diagonal is traced in teal. Right column: vector diagram "6.0 N" up plus dashed "8.0 W" left, head to tail, teal resultant. `AlignedAlgebra`: "v_AB = 6.0 N + 8.0 W"; on "second" boxed "|v_AB| = √(6.0² + 8.0²) = 10 m/s"; "tan θ = 8.0/6.0, θ = 53°"; on "north" boxed "v_AB = 10 m/s, 53° W of N", with the compass arc drawn from north towards west on the diagram. Grey tag: "6.0, 8.0: two significant figures".

### 8. swap the observer
> Swap the observer, and the answer flips. Seen from A, boat B moves at ten metres per second, fifty three degrees east of south. Same size, exactly the opposite **way**. Here's a way to keep the order straight. Ride with B, subtract B. Whoever is watching, take their velocity away from everything **else**.

Visual: the camera locks onto A instead: A stops, the ripples slide south, B's track bends down-right; a teal arrow from B labelled "v_BA = 10 m/s, 53° E of S". On "way" the two results sit side by side, "v_AB" and "v_BA", as equal-length teal arrows pointing opposite ways, chip "v_BA = −v_AB". On "Ride with B" the handwritten memory line writes large: "Ride with B, subtract B." On "else" the scene 2 and scene 7 thumbnails return small, each with its dashed "−v_B" arrow glowing. Hold about 1 second.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. Drone P flies east at twelve point zero metres per second. Drone Q flies south at five point zero zero metres per second. Find the velocity of P relative to Q. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Physics"), worded as printed: "Two drones fly at the same height. Drone P flies due east at 12.0 m s⁻¹ and drone Q flies due south at 5.00 m s⁻¹, both relative to the ground. Calculate the velocity of P relative to Q. (3 marks)" Tag: "HSC-style question, written for HSCScience". Beside it two copies of `y11p-drone-top-v1.png` labelled P and Q with a small compass; no arrows. The full question stays on screen. Countdown ring for 10 seconds after "Pause here to answer." Nothing answer-bearing.

### 10. feedback 1 (brief)
> v P Q is v P minus v Q. Flip Q's velocity to five north, and add it to twelve east. The size is the square root of one hundred and forty four plus twenty five, thirteen point zero metres per **second**. The tan of the angle from east is five over twelve, so it's twenty two point six degrees north of **east**. Adding v Q without flipping it is the classic mistake. It lands on the south **side**.

Visual: card shrinks to the top; "relative to Q" underlined. Diagram: blue "12.0 E" right; dashed orange "5.00 N" up from its head; teal resultant. Rows: "v_PQ = v_P − v_Q = 12.0 E + 5.00 N"; on "second" boxed "|v_PQ| = √(144 + 25) = 13.0 m/s"; on "east" "tan θ = 5.00/12.0, θ = 22.6°" and boxed "13.0 m/s, 22.6° N of E" with the compass arc. On "classic mistake" a chip "13.0 m/s, 22.6° S of E" fades in with a ghost diagram (orange arrow pointing down, not flipped); on "side" it takes a red scribble cross, caption "subtract Q: flip it first". Hold about 1 second.

### 11. attempt 2 (countdown, 10 seconds)
> One more. Rain falls vertically at six point zero metres per second. A car drives north at eight point zero metres per second. Find the velocity of the rain relative to the car, and describe which way the streaks slope on the car's side window. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Rain falls vertically at 6.0 m s⁻¹ relative to the ground. A car travels due north along a level road at 8.0 m s⁻¹. (a) Calculate the velocity of the rain relative to the car. (b) Describe the direction in which the rain streaks slope on the car's side window. (4 marks)" Tag: "HSC-style question, written for HSCScience". Beside it `b4-car-blue-v1.png` small with a north arrow; no rain streaks drawn (they would show the answer). The full question stays on screen. Countdown ring for 10 seconds after "Pause here to answer."

### 12. feedback 2 (brief)
> Flip the car's velocity to eight south, and add it to six down. The size is the square root of thirty six plus sixty four, ten metres per **second**. The tan of the angle from the vertical is eight over six, so it's fifty three degrees from the vertical, pointing down and **south**. So the streaks slope down and back. The classic mistake is sloping them forward, as if the rain moved with the **car**.

Visual: card shrinks; "relative to the car" underlined. Diagram: blue "6.0 down", dashed orange "8.0 S" (left) head to tail, teal resultant. Rows: "v_rain,car = 6.0 down + 8.0 south"; on "second" boxed "|v| = √(36 + 64) = 10 m/s"; on "south" "tan θ = 8.0/6.0, θ = 53° from the vertical" and boxed "10 m/s, 53° from vertical, down and towards the south". The car's side window draws coded streaks sloping down and back ("towards the back" underlined, linked to "(b)"). On "classic mistake" a ghost window with streaks sloping down and forward fades in; on "car" it takes a red scribble cross, caption "relative to the car, the rain moves backwards". Hold about 1 second.

### 13. summary and handoff
> So velocity depends on who's watching. To find A relative to B, subtract B's velocity, by flipping it and adding. Velocity isn't the only vector that adds like this. **Next**, when several forces pull on one object at once, how do we find their combined effect?

Visual: board clears to the boxed "v_AB = v_A − v_B", the small reverse-and-add diagram from scene 4, and the memory line. On "Next" a new sledge plate `y11p-sledge-v1.png` (requested in the v12 design; native aspect) appears on a coded snow line with a coded rope rising at an angle and an orange force arrow along it, plus a short grey downward arrow; chip "Next: How can a free-body diagram determine the net force?". Hold about 2 seconds.

### 14. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. A frame of reference is the viewpoint velocities are measured from (usually the ground). The same motion has different velocities in different frames.
2. Velocity of A relative to B: v_AB = v_A − v_B, with both measured from the ground. Subtract the observer's velocity.
3. In a line: choose a positive direction. Same direction: speeds subtract. Opposite directions: speeds add.
4. In 2D: reverse v_B and add it head to tail to v_A. For perpendicular parts, Pythagoras gives the size and tan gives the angle. Name the direction (e.g. 53° W of N).
5. v_BA = −v_AB: same size, opposite direction. Rain relative to a car moving north moves down and south; it appears to come from the north.

Memory aid (large, on the notes screen): *Ride with B, subtract B.* Second line, smaller: *Flip v_B, then add.*

## Teaching checks

- **Does it explain causes?** Why the parked-looking car (equal velocities subtract to zero, 1, 2). Why subtract (riding with B gives everything −v_B, which stops B, 2, shown with the dashed arrow on every object). Why opposite directions add (B's velocity is negative, 3). Why flip and add in 2D (subtracting means adding the reverse, the same −v_B, 4). Why 45° for the rain (equal perpendicular parts, 5). Why the streaks slope back (relative to the car the rain moves south, 6). Why the boat moves north-west from B (the lake slides west under B's frame, 7). Why the order matters (the other observer subtracts the other velocity, 8).
- **Worked-example rule:** task strip, givens (object letter, value, unit, direction) and algebra are separate; one example per scene from 5 on; the size and the direction are separate result lines on separate cues; only the scene 5 boxed result carries into scene 6.
- **Response opportunities:** one 3 s prediction (3); two unseen HSC-style questions with every condition on the card (A1: both velocities with directions, both relative to the ground, "relative to Q"; A2: rain vertical, car north, both demands), 10 s each with "Pause here to answer."; neither card shows a vector diagram or streaks. One crossed mistake each; feedback about 30 s and 29 s by script.
- **Avoided double teaching:** vector addition and the reverse of a vector are recalled in one phrase (4); Pythagoras and tan are used, not taught.
- **Syllabus coverage:** `ci9a988a52`: relative velocity analysed with v_AB = v_A − v_B in one dimension (2, 3) and two dimensions (4 to 8, A1, A2).
- **Out of scope by design:** non-perpendicular velocities (components are v12's action); heading and river-crossing problems; relativistic speeds.

## Practice questions and model answers

Each attempt ends with "Pause here to answer." and a 10 second countdown; the card and every demand stay on screen. Marks appear on the card; the narration does not read them. Every card carries "HSC-style question, written for HSCScience".

**Attempt 1 (scene 9; original wording; 3 marks suggested, not an official marking scheme).** "Two drones fly at the same height. Drone P flies due east at 12.0 m s⁻¹ and drone Q flies due south at 5.00 m s⁻¹, both relative to the ground. Calculate the velocity of P relative to Q."
Model answer: v_PQ = v_P − v_Q = 12.0 m s⁻¹ E + 5.00 m s⁻¹ N (reversing v_Q) (1 mark). |v_PQ| = √(12.0² + 5.00²) = √169 = 13.0 m s⁻¹ (1 mark). θ = tan⁻¹(5.00/12.0) = 22.6°, so v_PQ = 13.0 m s⁻¹, 22.6° north of east (1 mark). Classic mistake (crossed): "13.0 m s⁻¹, 22.6° south of east" (v_Q added without reversing).

**Attempt 2 (scene 11; original wording; 4 marks suggested).** "Rain falls vertically at 6.0 m s⁻¹ relative to the ground. A car travels due north along a level road at 8.0 m s⁻¹. (a) Calculate the velocity of the rain relative to the car. (b) Describe the direction in which the rain streaks slope on the car's side window."
Model answer: (a) v_rain,car = v_rain − v_car = 6.0 m s⁻¹ down + 8.0 m s⁻¹ south (1 mark); magnitude √(6.0² + 8.0²) = 10 m s⁻¹ (1 mark); θ = tan⁻¹(8.0/6.0) = 53° from the vertical, directed downwards and towards the south (1 mark). (b) The streaks slope downwards towards the back of the car (towards the south), because relative to the car the rain moves south as well as down (1 mark). Classic mistake (crossed): "the streaks slope down towards the front". Also accepted for (a): 37° below the horizontal, towards the south.

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hook | two cars at 60 km/h, same direction; relative velocity 0 | 1 |
| 1D (site quick check) | A 30 m/s E, B 20 m/s E: v_AB = 10 m/s E; B 20 m/s W: v_AB = 30 − (−20) = 50 m/s E | 2, 3 |
| Rain (site `we-1`, ideal values) | 80 km/h down, car 80 km/h N; v_AB = 80 down + 80 S; √12 800 = 113.1 ≈ 113 km/h; 45° from vertical, towards the south; appears to come from up and north | 5, 6 |
| Boats (site activity) | A 6.0 m/s N, B 8.0 m/s E; v_AB = 6.0 N + 8.0 W; √100 = 10 m/s; tan⁻¹(8.0/6.0) = 53.13° ≈ 53° W of N; v_BA = 10 m/s, 53° E of S | 7, 8 |
| A1 | P 12.0 m/s E, Q 5.00 m/s S; v_PQ = 12.0 E + 5.00 N; √169 = 13.0 m/s; tan⁻¹(5.00/12.0) = 22.62° ≈ 22.6° N of E; crossed 22.6° S of E | 9, 10 |
| A2 | rain 6.0 m/s down, car 8.0 m/s N; 10 m/s; tan⁻¹(8.0/6.0) = 53° from vertical, down and south (37° below horizontal) | 11, 12 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (2 Nov); Codex to re-check.

- 30 − 20 = 10; 30 − (−20) = 50.
- √(80² + 80²) = 113.137; tan⁻¹(1) = 45°.
- √(6.0² + 8.0²) = 10.0; tan⁻¹(8.0/6.0) = 53.130°; tan⁻¹(6.0/8.0) = 36.870°.
- √(12.0² + 5.00²) = 13.0; tan⁻¹(5.00/12.0) = 22.620°.

## Memory aid check

- **"Ride with B, subtract B."** Written for this lesson. Meaning: v_AB is A's velocity as seen by an observer moving with B, found by subtracting B's velocity: v_AB = v_A − v_B. Assumptions checked: both velocities are measured in the same (ground) frame; speeds are far below light speed (Galilean addition, author note a); "B" is the observer named after "relative to". It fixes the order (A relative to B subtracts B) and connects to the visual (the camera rides with B). It helps a new case: for "velocity of P relative to Q" the student rides with Q and subtracts Q (A1). Introduced after both worked examples (8).
- **"Flip v_B, then add."** The 2D method: subtracting a vector is adding its reverse. True for any vectors.
- **Considered, not used:** "the observer's velocity goes last" (true but less visual).

## Narration length estimate

Revision 1 count (2 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **4,990 characters**, 14 scenes. Characters per scene (1 to 14): 384, 461, 439, 369, 550, 403, 520, 298, 192, 385, 266, 391, 257, 75. At 13.3 characters per second the speech is about 375 s; add 3 s for the scene 3 prediction countdown, 20 s for two attempt countdowns, about 16 s of holds and settling (the frame-lock moves in 1, 2, 3, 7 and 8, the flip in 4, 1 s at the end of 6, 8, 10 and 12, 2 s at the end of 13) and about 55 s more of the quiet notes hold: **about 469 s (7.8 minutes)**, under the 570 s cap and 510 characters below the 5,500 band (see open decision 5). Feedback: scene 10 about 30 s, scene 12 about 30 s (with their 1 s holds), at the top of the 15 to 30 s guide. Scene 5 (550) is the longest; check that each result line writes before it is spoken. No reserve cuts are listed (the video is short); if root asks for more, see open decision 5.

## Scene list and build ids

Lesson key `p-y11-v11` (route phys-y11-fa1-v11). Suggested explainer folder `src/explainer/lessons/phys-y11-fa1-v11` and build folder `docs/production/claude-pm/lessons/p-y11-v11` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 14 scene headings, all `### N.`): hook, ride-with-b, one-dimension, subtract-2d, worked-rain, which-way, worked-boats, swap-observer, attempt-1, feedback-1, attempt-2, feedback-2, summary-handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1 and attempt-2 (`hold`) and key-notes (`hold`); one-dimension carries a 3 s prediction countdown inside an explain scene. Transitions (`pickTransition`): v10's last frame continues into scene 1 (camera continue: the same two cars); 1 to 2 to 3 camera continue (same road); 3 to 4 clear change (vector board); 4 to 5 clear change (worked example); 5 to 6 camera push into the car window; 6 to 7 clear change (lake plan view); 7 to 8 camera continue (switch the locked object from B to A); attempts and feedback card shrink to the top; 12 to 13 board clear; 13 to 14 fade to the notes board.

Holds: one-dimension 3 s countdown after "Predict."; attempt-1, attempt-2 (10 s countdown after the speech); key-notes quiet hold (about 60 s, standard line, reuse take); 1 s at the end of 6, 8, 10 and 12; 2 s at the end of 13. Review evidence paths for the LESSONS entry: `learning_review` = `checks/p-y11-v11-learning-review.md`, `science_check` = `checks/p-y11-v11-physics-check.md` (root to confirm names).

## Assets

Have (inspected 2 Nov on a dark contact sheet in the session scratchpad; uniform scale only, never stretched):
- `public/assets/biology/b4-car-blue-v1.png` and `b4-car-yellow-v1.png` (1600 × 800, side view facing right; the blue car can be mirrored for scene 3's turned-round B, a flip, not a stretch): scenes 1 to 3, 5, 6, 11, 12.

Need (new plates, Codex):
1. `y11p-boat-top-red-v1.png` and `y11p-boat-top-white-v1.png`: scenes 7, 8. Essential (the second worked example happens on the water; plan view needed for 2D).
2. `y11p-drone-top-v1.png`: A1 card (9, 10), two copies labelled P and Q. Useful; fallback: the card without pictures (text and a compass only).
3. `y11p-sledge-v1.png`: handoff (13); also v12's main object. Shared with v12 (one request; see the v12 design's asset brief, which carries the full specification).

Coded: road strip and lane marks; camera lock (the frame follows one object; the background marks slide at −v_B); rain streaks (thin grey lines, clipped to a window region of the car plate placed by position); the lake field and ripple marks; wakes; all vectors (`Arrow` from `course-kit.tsx`: blue, orange, orange dashed, teal), right-angle marks, angle arcs and the small compass; `AlignedAlgebra`; `Chip` with `cross`; `Countdown`; `QuestionCard` (subject "Physics"); `KeyNotes`. Kit gap for the build brief: a **frame-lock camera** helper (a scene transform that subtracts a chosen object's velocity from every element, including background marks, so a frame change is exact rather than hand-animated); lesson-local is acceptable for Revision 1.

## Codex asset brief

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; design `docs/production/claude-pm/lessons/phys-y11-fa1-v11.md`. Paint after the learning review, physics check and error check pass and the owner gives the go-ahead. Transparent PNG with a true alpha channel, clean edges with no coloured fringe or halo (check on black and white), ink and watercolour in the house style matched to `public/assets/biology/b4-car-blue-v1.png`, at least 8 per cent clear margin, no text, labels, numbers, brand names, people, hands, faces, backdrop, water surface, glow or shadow. Keep the native aspect; never stretch.

1. `y11p-boat-top-red-v1.png` (1000 × 2000 px): a small open motorboat seen from directly above (plan view), bow pointing straight up the canvas, red hull, pale deck, an outboard motor at the stern; empty (no people, no gear).
2. `y11p-boat-top-white-v1.png` (1000 × 2000 px): the same boat design and scale, white hull with a blue stripe, bow pointing straight up (the build rotates it to face east).
3. `y11p-drone-top-v1.png` (1500 × 1500 px): a small four-rotor drone seen from directly above, grey body, four rotors with faint motion discs, symmetric; front marked only by a slightly different arm colour (no text).
4. `y11p-sledge-v1.png`: specified in the v12 design's asset brief (shared request).

Report inspection on the dark board background at about 300 px and 600 px wide. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/p-y11-v11-provenance.json`.

## Codex error-check brief

Error-only (report errors; do not restyle or rewrite). Report to `docs/production/claude-pm/checks/` (root names the check).
1. Re-check every value under "Numbers to verify" and every value in the narration, screen text, attempts and key notes against "Numbers used".
2. Physics: confirm v_AB = v_A − v_B for ground-frame velocities (author note a); the rain's relative velocity direction (down and south) and apparent source (up and north) in scene 6 and A2; v_BA = −v_AB in scene 8; the direction names (53° W of N; 53° E of S; 22.6° N of E).
3. Confirm the frame-lock motion in scenes 1, 2, 3, 7 and 8 is kinematically consistent: the background slides at −v_B and A's on-screen velocity equals v_A − v_B at the same scale.
4. Confirm every vector diagram uses equal x and y units so the drawn angles are true.
5. Confirm significant figures: 113 km/h stated as from ideal values; 10 m/s and 53° (two figures); 13.0 m/s and 22.6° (three figures).
6. Confirm both attempt questions are original in wording, every condition is on the card, neither card shows a diagram or streaks, and neither closely paraphrases a NESA Physics question (search "relative to the ground", "rain falls vertically", "drone").
7. Confirm the syllabus quote matches the route JSON `syllabusActions` for `ci9a988a52` and the ledger entry P25-FA1-G2-06.
8. Confirm no em dash (U+2014) anywhere in this file; Australian spelling; YouTube title 100 characters or fewer; search the narration for absolute claims and confirm each is true as scoped.
9. Confirm the narration character count and per-scene counts by script with the build parser rules.
10. Add site errors 1 and 2 under Decisions to `../site-corrections-phys-y11.md` (owner record only; the site is read-only here).

## YouTube metadata (draft)

Title: Relative Velocity in 2D: Why Rain Slants on a Moving Car | Year 11 Physics

(Title length: 74 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa1-fundamentals-of-mechanics/lesson11.sa.html

Two cars side by side at the same speed: seen from one, the other looks parked. Rain falling straight down streaks backwards across a moving car's window. Velocity depends on who's watching. Learn what a frame of reference is, why the velocity of A relative to B is v_A − v_B, and see the subtraction happen by riding along with B. Then solve two-dimensional problems by flipping v_B and adding head to tail: rain on a moving car, and two boats on a lake, with the size from Pythagoras and a named direction. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Year 11 Physics (2025 syllabus), Focus Area 1: Fundamentals of mechanics.
Syllabus content (NSW Physics 11-12, 2025):
"Analyse problems of relative velocity involving motion in two dimensions using v⃗_AB = v⃗_A − v⃗_B" (ci9a988a52)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

Builds on: Measuring g with two graphs (previous video); vectors and vector subtraction (earlier videos). Next: Free-body diagrams and net force.

#Year11Physics #RelativeVelocity #HSCScience

## Open decisions

- **1. Heading and river-crossing problems (root).** Not in this video: they rearrange the relation (v_boat,ground = v_boat,water + v_water,ground) and usually need a non-perpendicular heading. Recommended: a later practice video (or v13 onwards practice) once components are taught in v12.
- **2. Rain values (resolved by design).** `we-1`'s 80 km/h values are treated as ideal, so 113 km/h is reported; the log's precision note stays in author note c.
- **3. Vector subscript notation.** Screen writes v⃗_AB with A and B as subscripts; the narration says "v A B" and "v A minus v B". Root to confirm against the v02 design's notation when it is final.
- **4. Unit notation.** As v09 open decision 3.
- **5. Length (root).** 4,990 characters, about 469 s, is below the 5,500 band because the content point is fully taught without padding. Options if root wants the band: (a) a short third worked example in a line with the order reversed (about 300 characters: "A train moves east at 25.0 m/s and a second train west at 15.0 m/s; find each relative to the other"), useful for the sign habit; (b) one heading problem with a perpendicular current (about 450 characters), which would bring in the rearranged form v_A = v_AB + v_B and is better placed after v12. Recommended: accept as is.

## Review notes

- Revision 2 (2 Nov): brief 145 review applied. Learning review and physics check found nothing to repair; recount confirms 4,990 characters (5,003 with the 13 joining spaces) and per-scene counts 384, 461, 439, 369, 550, 403, 520, 298, 192, 385, 266, 391, 257, 75. Earlier plan for the review, kept for reference: Next: student learning review (trace from v02 and Stage 5: does riding with B make the subtraction feel inevitable; is the order rule clear after scene 8; does scene 6 separate "moving" from "comes from" without confusing; do the direction names follow from the compass arcs), then the Codex physics check and error check.
- The frame-lock camera moves carry the explanation; judge them at playback speed in the voiced preview. They must be exact (author note a): if the background speed and A's apparent speed don't match the arithmetic on screen, the visual teaches the wrong thing.
