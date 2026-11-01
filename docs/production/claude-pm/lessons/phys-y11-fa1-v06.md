# Y11 Physics FA1 V06 (Physics 2025, Year 11, Focus Area 1): How do I find average velocity in two dimensions? (design)

Status: Revision 1 (2 Nov). Needs student learning review (key `p-y11-v06`), physics check (Codex) and a Codex error check, then plates (Codex asset brief) before build. Voicing follows the programme queue (Google AI Studio after the brief 124 pilot; physics after Year 12 Maths and Year 11 Biology). Nothing recorded; human listening pending.

Narration 5,520 characters, 14 scenes, about 515 s (8.6 minutes), counted by script with the build parser rules (see "Narration length estimate").

Scope: sixth video of the Year 11 Physics (2025) Focus Area 1 route. Templates: `math-a12-d10.md` (calculation format, section structure) and `bio-y11-fa1-v05.md` (plates and asset brief format); the v05 design (Revision 1, written just before this one, whose scene 14 is this video's first frame). Pre-design pack: `../pre-design/phys-y11/phys-y11-fa1-v06.md` (every number recalculated below). Site lesson read in full (2 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa1-fundamentals-of-mechanics/lesson06.sa.html` (orient, intentions, combining two perpendicular velocities, velocity from displacement and time in 2D, apply, solving for any unknown, short-answer practice, retrieve). Route entry: `phys-y11-fa1-v06` in `../../phys-y11-video-route.json` (route-approved by root, 1 Nov). Route stop: "Stop after the learner can answer: How do I find average velocity in two dimensions?" Next: "phys-y11-fa1-v07: How can motion data become linked displacement, velocity and acceleration graphs?"

Owner rules applied: as v05 (2025 syllabus only; coded abstract diagrams, painted objects; no people; one reasoning stage at a time; task, equation and grouped givens; 3 s in-teaching predictions; "Pause here to answer." with a 10 s countdown; brief feedback with one crossed mistake; original HSC-style questions; key-notes hold; Australian spelling; no em dashes; v02 to v05 recalled in a sentence each, never re-taught).

Syllabus content points (Physics 11-12 (2025), Year 11, Focus Area 1, group "Quantities of motion"; NESA content-system codenames), quoted from the route JSON `syllabusActions`, with the MathML written in linear form:

- `ciac8fac3d`: "Solve problems involving the calculation of velocity in 2 dimensions"
- `ci76393283`: "Solve problems to determine speed, velocity, distance, displacement and time"
- `ci09919606`: "Solve problems in one and 2 dimensions using a⃗ = Δv⃗/Δt"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

**Boundary:** starts from v05's handoff (the drone, 120 m east then 160 m north in 40 s, "average velocity?"); finds a 2D displacement (Pythagoras and tan for perpendicular legs) and divides by time (`ciac8fac3d`); shows dividing by time scales the displacement triangle into a velocity triangle (`ciac8fac3d`); rearranges v⃗av = Δs⃗/Δt for time with a 2D displacement and contrasts average speed (`ci76393283`); defines acceleration as a⃗ = Δv⃗/Δt in one dimension, including the sign, and in two dimensions as a change of direction at steady speed (`ci09919606`). Stops at average velocity and average acceleration from start and finish values. Not taught: relative velocity, boats in currents and planes in wind (v11 owns them; the site's card 1 and its boat questions are left there); non-perpendicular legs (components handle them; v03 taught resolving, and no question here needs it); motion graphs (v07, v08); constant-acceleration equations (v09); circular motion and centripetal acceleration (Year 12; the bend is named only as a change of direction).

## Decisions

- **Learner question kept (route), with a second half named in the hook of scene 5.** "How do I find average velocity in two dimensions?" The answer, built in order: velocity uses displacement, and with perpendicular legs the displacement is the hypotenuse of a right triangle, shorter than the path (hook, 2); dividing it by the time divides every side, so the velocity has the displacement's direction (3); the same relationship rearranges to find a time or a displacement (4). The route also gives this video `ci09919606` (acceleration), so scenes 5 to 7 apply the same idea, "find the change, then divide by the time", to velocity itself. See open decision 1 (split or keep).
- **Coverage gap found: the site lesson does not teach a⃗ = Δv⃗/Δt.** The route's site crosswalk lists `ci09919606` as "covered" by lesson 6, but lesson 6 has no acceleration content at all (checked 2 Nov: its cards are perpendicular velocities, 2D average velocity and rearranging). Scenes 5 to 7 are therefore written from the syllabus point, with original examples. Reported for root (open decision 2); not a site text error.
- **The hook surprise (pack misconception 1 and the site's orient-and-predict, re-based on v05's drone).** "It flew 280 m in 40 s. Is its average velocity 7.0 m/s?" A 3 s prediction, then no: the displacement is 200 m, so 5.0 m/s. The 7.0 m/s survives as the average speed, which ties back to v05.
- **The cause made visible.** Scene 2: the two legs draw as the drone flies; the dashed start-to-finish arrow becomes the hypotenuse; an amber corner tag "the arrow cuts the corner". Scene 3: the displacement triangle (120, 160, 200 m) shrinks by 1/40 into a velocity triangle (3.0, 4.0, 5.0 m s⁻¹) with the same angle arc carried across, so the student sees why the direction does not change. Scene 7: the two velocity arrows are drawn and the change of velocity is built tip to tip, so the student sees an arrow appear where the speeds alone would say "nothing changed".
- **Worked example 1 (site `we-1`, unchanged numbers).** 120 m east, 160 m north, 40 s: Δs = 200 m at 53° north of east; v_av = 5.0 m s⁻¹ at 53° north of east; average speed 7.0 m s⁻¹. **Precision:** values treated as two significant figures (grey tag), so 5.0 m s⁻¹ and 53°.
- **Rearranging (site card 3, new numbers in 2D).** "A drone's drop-off point is 90 m east and 120 m north of it; it flies straight there at a steady 2.5 m s⁻¹. How long?" Δs = 150 m; Δt = 150 ÷ 2.5 = 60 s. "Straight there at a steady speed" makes the speed equal the size of the average velocity (author note b). Covers `ci76393283` with time as the unknown; Δs⃗ = v⃗av Δt is written beside it.
- **Acceleration in one dimension (original).** A car speeds up from 10 to 25 m s⁻¹ in 5.0 s: a = 3.0 m s⁻², "the velocity grows by 3 m s⁻¹ every second". It brakes from 25 to 10 m s⁻¹ in 3.0 s: a = −5.0 m s⁻². Condition kept in learner copy: "The car is moving in the positive direction, so a negative acceleration slows it down." Without it, students learn "negative means slowing", which fails for motion in the negative direction (key note 3 carries the general statement). These numbers differ from v07's and v08's site examples (2.0 m s⁻² both).
- **Acceleration in two dimensions (original, a v05 callback).** v05 ended its lap with "a steady speed doesn't always mean a steady velocity". Here the same car takes a quarter of a bend at a steady 25 m s⁻¹ in 10 s, from heading east to heading north (author note c). Prediction (3 s): did it accelerate? Yes: Δv⃗ = v⃗f − v⃗i = 25 north + 25 west, 35 m s⁻¹ at 45° north of west (2 significant figures; 35.36), so a = 3.5 m s⁻² at 45° north of west, toward the inside of the bend. Subtracting a vector by adding its reverse is recalled from v02 and v04 in one phrase.
- **Attempts (original).** (A1) A boat: 1.2 km west, then 0.50 km south, in 0.25 h. Δs = 1.3 km; v_av = 5.2 km h⁻¹ at 23° south of west. Crossed: "6.8 km h⁻¹" (path distance over time, the average speed). (A2) A puck's velocity changes from 3.0 m s⁻¹ east to 4.0 m s⁻¹ north in 0.20 s: Δv = 5.0 m s⁻¹ at 53° north of west; a = 25 m s⁻² at 53° north of west. Crossed: "(4.0 − 3.0) ÷ 0.20 = 5.0 m s⁻²" (subtracting sizes, not arrows). Neither card draws the vectors or names the method.
- **Mistake scene:** none separate. "Add the perpendicular legs" (hook, 2; feedback 1 crossed); "the direction follows the bigger leg" (2: the angle is computed, 53°, between the two); "constant speed means no acceleration" (6, 7); "subtract the speeds" (7 crossed in narration; feedback 2 crossed); "negative acceleration always means slowing" (5, with its condition; key note 3).
- **Memory aid:** "Find the change first, then divide by the time." (see "Memory aid check").
- **Handoff (route next, v07's site example).** "So far every average came from a start and a finish." A car's velocity recorded every 2 s (0, 4, 8, 12 m s⁻¹ at 0, 2, 4, 6 s, site lesson 7 `we-1`) appears as a table beside empty velocity-time axes: "what shape?". Nothing is plotted.
- **Site sources used:** orient-and-predict (more or less than 7? re-based on the drone); `we-1` (worked example 1, unchanged); card 2 summary (find the resultant displacement first); card 3 (rearranging); Q3's "in 1D the displacement is a single signed length" (scene 4's one-line contrast is not used; the 1D case is v05). Not used: hook (plane in wind), card 1 (perpendicular velocities in a moving medium), swimmer and kayak activities, Q1 and Q2 (all relative-velocity situations, v11).
- **Site corrections:** none new in lesson 6 (all values checked: `we-1`; quick check B, 10 m s⁻¹; kayak 2.5 m s⁻¹ at 37° east of north; last check B, 200 m; Q1 13 m s⁻¹ at 67° east of north; Q2 2.5 m s⁻¹ at 53° east of north; Q3 200 m, 5.0 m s⁻¹ at 37° east of north, which equals `we-1`'s 53° north of east). The lesson 6 precision note is already logged (brief 137). The missing acceleration content is a route crosswalk issue (open decision 2).
- **Pack questions answered:** `we-1` used unchanged; pack candidate 1 (90.0 m east, 120 m north, 30.0 s) not used as an attempt, because it is the worked example scaled; its 90/120 legs are reused in scene 4 for a time problem instead; pack candidate 2 (square trip, zero velocity) not used (v05's lap made the point). Pack visual needs met (two-leg drone route with a persistent displacement triangle and a separate time readout; the average vector is never drawn on each leg).
- **Cause chain taught, in order:** (1) velocity uses displacement, not path (hook); (2) perpendicular legs make a right triangle; the displacement is its hypotenuse, shorter than the path; its angle comes from tan (2); (3) dividing by time divides every side, so the velocity points along the displacement (3); (4) the relationship rearranges for time or displacement (4); (5) acceleration is the change in velocity divided by time, with a sign in one dimension (5); (6) velocity includes direction, so turning at steady speed is a change in velocity (6); (7) the change is final minus initial, drawn tip to tip, then divided by time (7); (8) memory aid (8).
- **Entry knowledge (route `entryKnowledge`):** Stage 5 Pythagoras and right-triangle trigonometry (tan); signed arithmetic. From v01: acceleration is a vector quantity (named). From v02 and v04: vector addition head to tail; subtracting a vector means adding its reverse. From v03: components (named only in scene 3). From v05: v⃗av = Δs⃗/Δt, average speed, the drone question, the steady-speed lap.
- **Learner-visible vocabulary (plain meaning at first use):** right-angled triangle, hypotenuse ("the long side", said as "the long side of a right-angled triangle", scene 2); north of east (an angle measured from east, turning toward north, scene 2); acceleration (how fast the velocity changes: change in velocity divided by time, scene 5); metres per second squared (the velocity changes by that many metres per second every second, scene 5); initial and final velocity (the velocity at the start and at the end, scene 5).
- **Legacy logic ported:** none.
- **New explainer motion (coded unless a plate is named):** **plan view** (a pale grid with a compass "N, E", the top-down drone plate flying the legs, an amber path trace, a dashed navy displacement arrow, clock and odometer readouts from v05's readout strip); **vector triangle** (legs, hypotenuse, right-angle mark, angle arc with value; a uniform scale tween from the displacement triangle to the velocity triangle, angle arc carried); **velocity arrows** (teal; tail-to-tail and tip-to-tip construction for Δv⃗, the reversed arrow drawn as a dashed teal copy flipping 180° into place); **1D velocity arrows** on a road with the side-view car plate (length proportional to speed, a velocity readout and a clock); **lap bend** (the v05 stadium track zoomed to the right-hand bend, the top-down car plate, teal velocity arrows at the start and end of the quarter bend); `AlignedAlgebra`; `Countdown` (3 s and 10 s); `QuestionCard` (subject "Physics"); `Chip` with `cross`; scribble circles; `KeyNotes`; `Heading`.
- **Board layout (constant):** heading top-left; plan view or diagram on the left (about 1,000 × 680 px); working in the right column; the readout strip from v05 at the far right of the stage during the drone scenes.
- **No human figures.**
- **Author notes (not learner copy):**
  (a) Worked example 1: √(120² + 160²) = 200; tan⁻¹(160/120) = 53.13°; 200 ÷ 40 = 5.0; components 120/40 = 3.0, 160/40 = 4.0; path 280 m, 280 ÷ 40 = 7.0. Each leg is flown in a straight line; the leg times are not given and not needed (the drone's speed on each leg is not shown; only the total time).
  (b) Rearranging: √(90² + 120²) = 150; 150 ÷ 2.5 = 60 s. Flying straight at a steady 2.5 m s⁻¹, the average velocity has size 2.5 m s⁻¹ and the path equals the displacement.
  (c) Bend: v05 stadium track, semicircular end of length 500 m (radius 159.15 m). A quarter turn (east to north) is a quarter circle, 250 m, at 25 m s⁻¹: 10 s. v⃗i = (25, 0), v⃗f = (0, 25); Δv⃗ = (−25, 25), |Δv| = 35.355 m s⁻¹, direction 45° north of west; a_av = 3.5355 m s⁻² (3.5 to 2 significant figures). The direction points toward the inside of the bend (the average of the inward directions over the quarter turn). Instantaneous centripetal acceleration (v²/r = 3.93 m s⁻²) is Year 12 and not mentioned.
  (d) 1D: (25 − 10)/5.0 = 3.0; (10 − 25)/3.0 = −5.0. Positive direction: the car's direction of travel (to the right on screen).
  (e) A1: √(1.2² + 0.50²) = 1.3 km; 1.3/0.25 = 5.2 km h⁻¹; tan⁻¹(0.50/1.2) = 22.62° → 23° south of west; path 1.7 km, 1.7/0.25 = 6.8 km h⁻¹.
  (f) A2: Δv⃗ = (0, 4.0) − (3.0, 0) = (−3.0, 4.0), |Δv| = 5.0, tan⁻¹(4.0/3.0) = 53.13° north of west; a = 5.0/0.20 = 25 m s⁻²; crossed (4.0 − 3.0)/0.20 = 5.0.
  (g) Angles are measured from the first-named direction toward the second: "53° north of east" means from east, turned 53° toward north.
  (h) Pronunciations: "v av"; "delta s", "delta t", "delta v"; "five point oh"; "three point oh metres per second squared"; "minus five point oh"; "one point two kilometres"; "zero point five oh kilometres"; "zero point two five hours"; "point two oh seconds"; "fifty-three degrees north of east".

Main question: *A drone flies 120 m east, then 160 m north, in 40 s. That's 280 m of flying. Is its average velocity 7 m/s, and if not, what is it?*
Entry knowledge (Stage 5 Pythagoras and tan; v02 and v04 vector addition and subtraction; v05 v⃗av = Δs⃗/Δt).
Stops after: 2D average velocity (magnitude and direction) from perpendicular legs; rearranging for time; average acceleration in 1D with a sign and in 2D for a change of direction. No relative velocity, no graphs, no constant-acceleration equations.
Handoff: v07, motion data turned into linked graphs.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key (as v05): path trace amber; displacement arrows navy; velocity arrows teal; the change-of-velocity arrow red-orange (`MATH_ACCENT` family is amber, so Δv⃗ uses the physics `C.orange`); the clock grey; working in ink with givens navy; current result bright, earlier lines dim. Angles are written "53° N of E" on screen and spoken in full.

### 1. hook (280 metres in 40 seconds)
> Last video ended with this drone. It flies a hundred and twenty metres east, then a hundred and sixty metres north, and the whole trip takes forty seconds. That's two hundred and eighty metres of flying. So is its average velocity two hundred and eighty over forty, seven metres per second? Predict, yes or **no**.

Visual: opens on v05's last frame (plan view with compass "N, E"; amber path 120 m east then 160 m north labelled "120 m", "160 m"; clock chip "40 s"; dashed navy start-to-finish arrow; chip "average velocity?"; the v05 memory line small at the top). The memory line and the "Next" chip fade. Heading writes on: "Velocity in two dimensions". On the first sentence the top-down drone plate flies the two legs (about 3 s), the amber trace redrawing behind it, the odometer readout "distance 0 to 280 m", the clock "0 to 40 s". On the third sentence a chip "280 m ÷ 40 s = 7.0 m s⁻¹?". On "no" chips "yes / no" and a 3-second countdown ring.

### 2. displacement first: the triangle
> The answer's no. Velocity needs the displacement, the straight arrow from start to finish, not the distance flown. Here the two legs meet at a right angle, so the arrow is the long side of a right-angled **triangle**. Pythagoras gives its length. It's the square root of a hundred and twenty squared plus a hundred and sixty squared, which is two hundred **metres**. That's shorter than the path, because the arrow cuts the **corner**. For the direction, measure the angle from east. Tan of the angle is the opposite side over the adjacent side, a hundred and sixty over a hundred and twenty. So the angle is fifty-three degrees, north of **east**.

Visual: the "7.0?" chip is crossed lightly and parked at the top right. On "triangle" the dashed arrow becomes solid navy and a right-angle mark draws at the corner; the legs are tagged "120 m" (east) and "160 m" (north). Right column: givens group (navy) "120 m east; 160 m north; Δt = 40 s", grey tag "data to 2 significant figures"; on "metres" `AlignedAlgebra` row "Δs = √(120² + 160²) = √40 000 = 200 m". On "corner" an amber tag at the corner "path 280 m; arrow 200 m". On the tan sentence an angle arc draws at the start between east and the arrow, the 160 m leg glows "opposite", the 120 m leg glows "adjacent"; row "tan θ = 160 ÷ 120, θ = 53°"; on "east" the arrow's label writes "200 m, 53° N of E" (grey gloss "measured from east, turning toward north").

### 3. divide by the time
> Now divide by the time. Two hundred metres over forty seconds is five point oh metres per second, at fifty-three degrees north of **east**. Watch what dividing does. Every side of the triangle gets divided by forty. The east side becomes three metres per second, the north side becomes four, and the long side becomes five. The triangle gets smaller, but its shape doesn't **change**. That's why the average velocity points the same way as the displacement. And the seven metres per second? That's the drone's average **speed**: distance over time.

Visual: row "v⃗av = Δs⃗ ÷ Δt = 200 m ÷ 40 s = 5.0 m s⁻¹, 53° N of E"; boxed answer on "east". On "Watch" a copy of the triangle lifts off the plan view and shrinks uniformly (about 2 s) while its labels count down together: "120 m → 3.0 m s⁻¹", "160 m → 4.0 m s⁻¹", "200 m → 5.0 m s⁻¹", each side ticking as its clause is spoken; the sides recolour from navy to teal. On "change" the angle arc, carried with the triangle, glows "53°" on both triangles at once. On "speed" the parked chip returns un-crossed and relabelled: "280 m ÷ 40 s = 7.0 m s⁻¹ = average speed".

### 4. rearranging: how long?
> Sometimes the velocity is known, and the time or the displacement is missing. Rearrange the same relationship. Delta s equals v av times delta t, and delta t equals delta s over v **av**. Here's one. A drone's drop-off point is ninety metres east and a hundred and twenty metres north of it. It flies straight there at a steady two point five metres per second. How long does it **take**? First the displacement: the square root of ninety squared plus a hundred and twenty squared, a hundred and fifty **metres**. Flying straight at a steady speed, its average velocity is two point five. So delta t is a hundred and fifty over two point five, sixty **seconds**.

Visual: board clears (clear change, new task). Right column: "v⃗av = Δs⃗/Δt" with two rearranged forms writing beside it on "av": "Δs⃗ = v⃗av Δt", "Δt = Δs ÷ vav". Task strip "How long does the flight take?"; givens group (navy): "drop-off 90 m east and 120 m north; straight line; steady 2.5 m s⁻¹" (on "take"). Plan view: start dot, drop-off dot, dashed legs 90 m and 120 m (grey, not flown), the drone flying the straight line between them. On "metres" row "Δs = √(90² + 120²) = 150 m" (the straight line labelled "150 m"). On the next sentence a grey tag "straight, steady: vav = 2.5 m s⁻¹". On "seconds" row "Δt = 150 m ÷ 2.5 m s⁻¹ = 60 s"; boxed; the clock readout runs to "60 s" as the drone lands.

### 5. acceleration: velocity changing in one dimension
> The same idea, a change divided by time, also tells us how fast a velocity changes. That's called acceleration. a equals delta v over delta t, the change in velocity, divided by the time it **takes**. A car speeds up from ten metres per second to twenty-five, in five point oh seconds. Its velocity changes by fifteen metres per second, so a is fifteen over five, three point oh metres per second **squared**. That unit means the velocity grows by three metres per second, every **second**. Now it brakes, from twenty-five back to ten, in three point oh seconds. Delta v is final minus initial: ten minus twenty-five, minus fifteen. So a is minus five point oh metres per second squared. The car is moving in the positive direction, so a negative acceleration slows it **down**.

Visual: clear change: a road with the side-view blue car plate, "+" arrow to the right, a teal velocity arrow above the car (length proportional to speed) and readouts "v" and "t". Right column: "a⃗ = Δv⃗/Δt" written large on "takes", grey glosses "Δv⃗: change in velocity (final − initial)", "Δt: time taken". On the third sentence the car speeds up over 5 s of clock (about 3 s of screen time), the arrow growing from 10 to 25; row "a = (25 − 10) ÷ 5.0 = 15 ÷ 5.0 = 3.0 m s⁻²" on "squared". On "every second" a strip of five ticks under the clock, each adding a small "+3" block to the arrow length. On "brakes" the car slows over 3 s, the arrow shrinking; row "a = (10 − 25) ÷ 3.0 = −15 ÷ 3.0 = −5.0 m s⁻²". On "down" a short orange acceleration arrow appears pointing left (opposite to the teal velocity arrow), tag "a opposite to v: slowing".

### 6. a steady speed round a bend (a quick prediction)
> Now remember the race car from last video, holding twenty-five metres per second round the track. On this bend, it turns from heading east to heading north, and that takes ten seconds. Its speedometer never moves. So, did it accelerate? Predict, yes or **no**.

Visual: camera move to the v05 stadium track, zoomed to the right-hand bend (author note c). The top-down car plate rounds the quarter bend at a steady rate; the speedometer readout fixed "25 m s⁻¹"; the clock "0 to 10 s". Teal arrows stay where the quarter starts (pointing east) and ends (pointing north), both labelled "25 m s⁻¹". On "no" chips "yes / no" and a 3-second countdown ring.

### 7. the change in velocity, tip to tip
> Yes, it accelerated. Acceleration is a change in velocity, and velocity includes direction. So find the change first: final velocity minus initial velocity. Subtracting a vector means adding its reverse. So draw twenty-five north, then add twenty-five pointing **west**. The change in velocity is the arrow that joins them, the square root of twenty-five squared plus twenty-five squared, about thirty-five metres per second, pointing north-**west**. Divide by ten seconds. The average acceleration is about three point five metres per second squared, at forty-five degrees north of west, toward the inside of the **bend**. Subtracting the speeds would give zero, and that's **wrong**.

Visual: the two teal arrows lift off the track into the right column. Row "Δv⃗ = v⃗f − v⃗i = v⃗f + (−v⃗i)". The north arrow ("v⃗f, 25 m s⁻¹ N") is placed; a dashed copy of the east arrow flips 180° and attaches head to tail on "west" ("−v⃗i, 25 m s⁻¹ W"). The orange Δv⃗ arrow draws from the start of v⃗f to the end of −v⃗i; right-angle mark; row "|Δv| = √(25² + 25²) ≈ 35 m s⁻¹, 45° N of W" on "north-west" (grey "35.36"). On "Divide" row "a⃗av = Δv⃗ ÷ Δt ≈ 35 ÷ 10 ≈ 3.5 m s⁻², 45° N of W"; boxed. On "bend" a small copy of the orange arrow appears at the middle of the bend on the track, pointing inward. On "wrong" a chip "25 − 25 = 0" fades in and is crossed (caption "subtract arrows, not sizes").

### 8. memory aid
> One rule covers all of this. Find the change first, then divide by the time. For average velocity, the change is the displacement arrow. For acceleration, it's final velocity minus initial velocity, drawn as an arrow. In two dimensions, the change comes from the triangle, never from adding or subtracting the sizes.

Visual: two small panels side by side: the drone's displacement triangle (navy hypotenuse glowing) and the bend's Δv⃗ triangle (orange arrow glowing), each with "÷ Δt" under it. The handwritten line writes large: "Find the change first, then divide by the time." Under it, smaller: "change = final − initial, as an arrow". Hold about 2 seconds.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. A boat travels one point two kilometres west, then zero point five oh kilometres south, taking zero point two five hours in total. Calculate its average velocity. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A boat travels 1.2 km west and then 0.50 km south, taking 0.25 h for the whole trip. Calculate the average velocity of the boat." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no map, no triangle).

### 10. feedback 1 (brief)
> The legs are at right angles, so the displacement is the square root of one point two squared plus point five oh squared, one point three **kilometres**. Divide by point two five hours: five point two kilometres per **hour**. For the direction, tan of the angle is point five oh over one point two, so twenty-three degrees south of **west**. Six point eight is the average speed, not the **velocity**.

Visual: card shrinks to the top; "1.2 km west", "0.50 km south", "0.25 h" and "average velocity" underlined as used. A small coded triangle draws (west leg, south leg, hypotenuse, angle arc at the start from west). Rows: on "kilometres" "Δs = √(1.2² + 0.50²) = 1.3 km"; on "hour" "vav = 1.3 km ÷ 0.25 h = 5.2 km h⁻¹"; on "west" "tan θ = 0.50 ÷ 1.2, θ = 23° S of W". Boxed: "5.2 km h⁻¹, 23° S of W". On "velocity" a chip "(1.2 + 0.50) ÷ 0.25 = 6.8 km h⁻¹" fades in and is crossed (caption "that's the average speed"). Hold about 1 second.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. Over point two oh seconds, a puck's velocity changes from three point oh metres per second east, to four point oh metres per second north. Calculate its average acceleration. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "In 0.20 s, the velocity of a puck changes from 3.0 m s⁻¹ east to 4.0 m s⁻¹ north. Calculate the average acceleration of the puck." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 12. feedback 2 (brief)
> Change first. Four north minus three east is four north plus three **west**. That's five point oh metres per second, at fifty-three degrees north of west. Divide by point two oh seconds: twenty-five metres per second squared, at fifty-three degrees north of **west**. Four minus three, over point two, gives five, but that subtracts sizes, not **arrows**.

Visual: card shrinks to the top; "3.0 m s⁻¹ east", "4.0 m s⁻¹ north", "0.20 s" underlined. Arrows: teal "4.0 N", dashed teal "3.0 W" flipped from east on "west", orange Δv⃗ joining them with an angle arc from west; row "Δv⃗ = √(4.0² + 3.0²) = 5.0 m s⁻¹, tan θ = 4.0 ÷ 3.0, θ = 53° N of W"; on "west" (second) row "a⃗av = 5.0 ÷ 0.20 = 25 m s⁻², 53° N of W", boxed. On "arrows" a chip "(4.0 − 3.0) ÷ 0.20 = 5.0 m s⁻²" fades in and is crossed (caption "subtract arrows, not sizes"). Hold about 1 second.

### 13. handoff
> So far, every average came from just a start and a finish. Next, we'll record a car's velocity every two seconds, and turn those numbers into graphs. What shape will they **make**?

Visual: the memory line returns small at the top. A small data table writes: "t (s): 0, 2, 4, 6"; "v (m s⁻¹): 0, 4, 8, 12" (site lesson 7 `we-1`), beside empty labelled axes "velocity (m s⁻¹)" against "time (s)". On "make" a chip "what shape?" and a small "Next: motion graphs" chip. No point is plotted. Hold about 2 seconds.

### 14. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. 2D average velocity: find the displacement first. For perpendicular legs, Δs = √(x² + y²) and tan θ = opposite ÷ adjacent. Then v⃗av = Δs⃗/Δt, in the direction of the displacement.
2. Rearranged: Δs⃗ = v⃗av Δt, Δt = Δs ÷ vav. Average speed uses the distance (the path) instead of the displacement.
3. Acceleration a⃗ = Δv⃗/Δt, in m s⁻². Δv⃗ = final velocity − initial velocity. In one dimension the sign gives the direction of the acceleration; it slows the object when it points opposite to the velocity.
4. In two dimensions, Δv⃗ = v⃗f + (−v⃗i), drawn as arrows. Turning at a steady speed is still an acceleration.

Memory aid (large, on the notes screen): *Find the change first, then divide by the time.* Second line: *change = final − initial, as an arrow.*

## Teaching checks

- **Does it explain causes?** Why 7.0 m s⁻¹ is not the average velocity: velocity uses displacement, and the displacement cuts the corner (1, 2). Why Pythagoras applies: the legs are perpendicular (2). Why the velocity has the displacement's direction: dividing by the time scales every side by the same factor (3, shown). Why a negative acceleration slows this car: it points opposite to the velocity (5). Why a steady speed round a bend is an acceleration: velocity includes direction, and the direction changed (6, 7). Why subtracting speeds fails: it ignores the direction (7, 12).
- **Misconceptions addressed:** "add the perpendicular legs" (1, 2; 10 crossed); "the direction follows the bigger leg" (2, 53° computed); "no change in speed means no acceleration" (6, 7; key note 4); "subtract the sizes" (7, 12 crossed); "negative acceleration always means slowing down" (5 with its condition; key note 3).
- **One idea at a time:** displacement (2), then division (3), then rearranging (4); acceleration in one dimension (5) before two (6, 7); one row per cue.
- **Video makes it easier:** the student watches the arrow cut the corner (2), the displacement triangle shrink into the velocity triangle with its angle unchanged (3), the velocity arrow grow and shrink with an opposite acceleration arrow (5), and the change-of-velocity arrow appear when the reversed initial arrow is attached (7). Each motion is the evidence for the next sentence.
- **Response opportunity:** two 3 s in-teaching predictions (1, 6); two unseen HSC-style tasks with every condition visible, 10 seconds each with the invitation to pause, nothing answer-bearing. One crossed mistake each; feedback about 30 s and 27 s.
- **Avoided double teaching:** Pythagoras and tan are used with a one-line reason each; vector subtraction is recalled in one phrase; v05's lap and drone are recalled, not re-taught.
- **Syllabus coverage:** `ciac8fac3d` (2, 3, 10); `ci76393283` (speed 3, velocity 3, distance 1 and 3, displacement 2 and 4, time 4); `ci09919606` (1D, 5; 2D, 7, 12).
- **Out of scope by design:** relative velocity (v11); non-perpendicular legs; graphs (v07, v08); constant-acceleration equations (v09); centripetal acceleration (Year 12).

## Practice questions and model answers

**Attempt 1 (scene 9; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "A boat travels 1.2 km west and then 0.50 km south, taking 0.25 h for the whole trip. Calculate the average velocity of the boat."
Model answer: the legs are perpendicular, so Δs = √(1.2² + 0.50²) = 1.3 km. v_av = 1.3 ÷ 0.25 = 5.2 km h⁻¹. tan θ = 0.50 ÷ 1.2, θ = 23°. Average velocity 5.2 km h⁻¹ at 23° south of west. Classic mistake (crossed): "6.8 km h⁻¹" (the average speed).

**Attempt 2 (scene 11; original wording, HSC style, 3 marks suggested).** "In 0.20 s, the velocity of a puck changes from 3.0 m s⁻¹ east to 4.0 m s⁻¹ north. Calculate the average acceleration of the puck."
Model answer: Δv⃗ = v⃗f − v⃗i = 4.0 m s⁻¹ north + 3.0 m s⁻¹ west; |Δv| = √(4.0² + 3.0²) = 5.0 m s⁻¹; tan θ = 4.0 ÷ 3.0, θ = 53° north of west. a⃗ = Δv⃗ ÷ Δt = 5.0 ÷ 0.20 = 25 m s⁻² at 53° north of west. Classic mistake (crossed): "5.0 m s⁻²" from (4.0 − 3.0) ÷ 0.20.

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Worked 1 (site we-1) | 120 m E, 160 m N, 40 s; Δs 200 m; 53° N of E; 5.0 m s⁻¹; components 3.0, 4.0; path 280 m; 7.0 m s⁻¹ | 1 to 3, 8 |
| Rearranging | 90 m E, 120 m N; 150 m; 2.5 m s⁻¹; 60 s | 4 |
| 1D acceleration | 10 → 25 m s⁻¹ in 5.0 s: 3.0 m s⁻²; 25 → 10 in 3.0 s: −15, −5.0 m s⁻² | 5 |
| Bend | 25 m s⁻¹ E → 25 m s⁻¹ N in 10 s; quarter circle 250 m; Δv 35.36 ≈ 35 m s⁻¹, 45° N of W; a 3.5 m s⁻² | 6, 7, 8 |
| A1 | 1.2 km W, 0.50 km S, 0.25 h; 1.3 km; 5.2 km h⁻¹; 23° S of W; crossed 6.8 | 9, 10 |
| A2 | 3.0 E → 4.0 N in 0.20 s; Δv 5.0, 53° N of W; 25 m s⁻²; crossed 5.0 | 11, 12 |
| Handoff (site lesson 7 we-1) | t 0, 2, 4, 6 s; v 0, 4, 8, 12 m s⁻¹; not plotted | 13 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (2 Nov); Codex to re-check.

- √(120² + 160²) = 200; tan⁻¹(4/3) = 53.130°; 200/40 = 5.0; 120/40 = 3.0; 160/40 = 4.0; 280/40 = 7.0.
- √(90² + 120²) = 150; 150/2.5 = 60.
- (25 − 10)/5.0 = 3.0; (10 − 25)/3.0 = −5.0.
- 500/π = 159.155; quarter circle π × 159.155/2 = 250.0; 250/25 = 10; √(25² + 25²) = 35.355; 35.355/10 = 3.5355; 25²/159.155 = 3.927 (not used).
- √(1.2² + 0.5²) = 1.3; 1.3/0.25 = 5.2; tan⁻¹(0.5/1.2) = 22.62°; 1.7/0.25 = 6.8.
- √(3² + 4²) = 5.0; tan⁻¹(4/3) = 53.13°; 5.0/0.20 = 25; (4.0 − 3.0)/0.20 = 5.0.

## Memory aid check

- **"Find the change first, then divide by the time."** Written for this lesson. Meaning, as said in scene 8: for average velocity the change is the displacement (start to finish); for average acceleration it is the final velocity minus the initial velocity; in two dimensions each change is found as an arrow (from the triangle), then its size is divided by the time and its direction kept. Assumptions checked: v⃗av = Δs⃗/Δt and a⃗av = Δv⃗/Δt are both vector changes divided by a scalar time, so the direction of the result is the direction of the change (true for any vector divided by a positive time); "the triangle" applies here because every pair of vectors in this video is perpendicular, and the narration says "in two dimensions, the change comes from the triangle" only after both triangle cases have been shown (for non-perpendicular vectors the change is still found head to tail, by components; not taught here). It prevents the two classic errors shown in the video: dividing the path length (average speed) and subtracting speeds. Introduced after both uses (3, 7).
- **Considered, not used:** "SOH CAH TOA" (Stage 5; already known, and the video needs only tan); "Δ = final − initial" alone (true, but omits the divide-by-time step that unifies the lesson; kept as the second line).

## Narration length estimate

Revision 1 count (2 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,520 characters**, 14 scenes. Characters per scene (1 to 14): 310, 632, 536, 646, 762, 256, 669, 316, 195, 385, 206, 343, 176, 75. At 13.3 characters per second the speech is about 415 s; add about 15 s of holds and settling (the drone flight in 1, the triangle shrink in 3, the car in 5, the bend in 6, the arrow flip in 7, the 2-second memory hold), 6 s for two prediction countdowns, 20 s for two attempt countdowns, 2 s of feedback holds and about 55 s more of the quiet notes hold (about 100 s of holds): **about 515 s**, inside the 5,500 to 6,800 character band (near its foot) and under the 570 s cap. The content is three syllabus points with no padding; the low count reflects one example per idea, which root may prefer to keep. Feedback: scene 10 about 30 s, scene 12 about 27 s (including the 1 s holds). Scene 5 is the longest (two cases); the car must reach 25 m s⁻¹ before "squared" and stop shrinking on "down". Reserve trims, if a voiced take runs long: scene 3's last two sentences (keep the chip); scene 5's "That unit means..." sentence (keep the tick strip).

## Scene list and build ids

Lesson key `p-y11-v06` (route phys-y11-fa1-v06). Suggested explainer folder `src/explainer/lessons/phys-y11-fa1-v06` and build folder `docs/production/claude-pm/lessons/p-y11-v06` (root to confirm).

In order (kebab-case; 14 scene headings, all `### N.`): hook, displacement-triangle, divide-time, rearrange, acceleration-1d, bend-predict, delta-v, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`: the learner reads the worded question and works during the countdown) and key-notes (`hold`: the learner copies four notes). Transitions (`pickTransition`): v05's last frame continues into scene 1 (camera continue, same plan view); 1 to 2 to 3 camera continue (same triangle); 3 to 4 clear change (new task); 4 to 5 clear change (road); 5 to 6 camera move to the track bend; 6 to 7 camera continue (arrows lift into the column); 7 to 8 camera pull back to the two panels; attempts and feedback card shrink to the top; 12 to 13 board clear; 13 to 14 fade to the notes board.

Holds: hook and bend-predict (3 s prediction countdowns inside the scenes), attempt-1, attempt-2 (10 s countdowns after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/p-y11-v06-learning-review.md`, `science_check` = `checks/p-y11-v06-physics-check.md`.

## Assets

Have (inspected 2 Nov; uniform scaling only):
- `public/assets/biology/b4-car-blue-v1.png` (side view; scene 5).
- From v05's brief (not yet painted): `phys-y11-car-top-v1.png` (scenes 6, 7).

Need (new plate, Codex):
1. `phys-y11-drone-top-v1.png`: scenes 1 to 4 (and v05 scene 14 if painted in time). Essential (the hook and both drone examples).

Fallback: if the drone plate is late, the plan view keeps the amber trace and a coded position dot only for a pilot; a coded drone icon is not acceptable for release (owner rule).

Coded: plan grid and compass, path trace, displacement and velocity arrows (`Arrow` from `src/explainer/physics/course-kit.tsx`), right-angle marks, angle arcs with values, the triangle scale tween, the reversed-arrow flip, the orange Δv⃗ arrow, road and readouts (v05's readout strip and `MotionTrack`), the track bend (v05's stadium plan), tick strip, `AlignedAlgebra`, `Countdown`, `QuestionCard`, `Chip` with `cross`, `KeyNotes`, `Heading`, handoff table and empty axes (`FunctionGraph` axes with no function drawn, or `DataGraph` with an empty point list).

Kit gap (for the build brief):
1. **`VectorTriangle`** (new, physics): two perpendicular legs (or a vector and a reversed vector placed head to tail) with optional right-angle mark, resultant arrow, angle arc measured from a named leg with a computed value, side labels, and a `scale` prop that tweens all sides uniformly about a chosen vertex while labels change from one quantity to another (scene 3: metres to metres per second). A `flip` prop animates a dashed copy of a vector rotating 180° into its head-to-tail place (scenes 7, 12). Angles computed from the components, never typed.

## Codex asset brief (phys-y11-fa1-v06: drone)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/phys-y11-fa1-v06.md`. Paint after the learning review, physics check and Codex error check pass and the owner gives the go-ahead. Every plate: transparent PNG with a true alpha channel and clean edges with no coloured fringe or halo (check on black and white), ink and watercolour in the house style matched to `public/assets/biology/b4-car-blue-v1.png`, at least 8 per cent clear margin, no text, labels, numbers, logos, people, hands, faces, backdrop, glow or ground shadow. Never stretch; keep the native aspect ratio.

1. `phys-y11-drone-top-v1.png` (1200 × 1200 px): a small four-rotor delivery drone seen **directly from above** (plan view): a compact central body (white or light grey with one muted blue accent), four arms in an X, four rotors drawn as faint translucent discs (motion blur, not separate blades), a small parcel box visible under the body only as a slightly darker square outline. The front must be identifiable (a single small dark camera dome or a coloured front arm pair) because the plate is rotated to face along each leg. It must read clearly at about 110 px wide on the dark board.

Report inspection on the dark board background at about 110 px and 500 px wide. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/phys-y11-v06-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm every direction: 53° north of east (worked 1), 45° north of west (bend), 23° south of west (A1), 53° north of west (A2), each measured as author note g describes.
3. Confirm the physics claims: dividing a vector by a positive time keeps its direction; "flying straight at a steady speed, its average velocity is 2.5 m s⁻¹"; the bend's average acceleration points toward the inside of the bend; a negative acceleration slows the car because the car moves in the positive direction (scene 5), and key note 3's general statement.
4. Confirm significant figures (2 throughout; 35 m s⁻¹ and 3.5 m s⁻² from 35.36 and 3.536; 23° from 22.6°).
5. Confirm both attempt questions are original in wording, carry every needed condition, and give no method or answer away.
6. Confirm the three syllabus quotes match the route JSON exactly (linear form) and no 2017-syllabus label appears.
7. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
8. Confirm the narration character count by script with the build parser rules.
9. Report open decision 2 (lesson 6 does not teach a⃗ = Δv⃗/Δt although the crosswalk says "covered") to root; no site edit.

## YouTube metadata (draft)

Title: Velocity in Two Dimensions (and Acceleration as a Change in Velocity) | Year 11 Physics

(Title length: 86 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa1-fundamentals-of-mechanics/lesson06.sa.html

A drone flies 120 m east, then 160 m north, in 40 s. That's 280 m of flying, so is its average velocity 7 m/s? No. Find the displacement first with Pythagoras and tan, then divide by the time: 5.0 m/s at 53° north of east. See why dividing by time keeps the direction, rearrange the relationship to find a flight time, then use the same idea for acceleration: the change in velocity divided by time, in one dimension with a sign and in two dimensions, where a car rounding a bend at a steady speed is still accelerating. Two exam-style questions at the end.

Year 11 Physics (2025 syllabus), Focus Area 1: Fundamentals of mechanics.
Syllabus content (NSW Physics 11-12, 2025):
"Solve problems involving the calculation of velocity in 2 dimensions" (ciac8fac3d)
"Solve problems to determine speed, velocity, distance, displacement and time" (ci76393283)
"Solve problems in one and 2 dimensions using a⃗ = Δv⃗/Δt" (ci09919606)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

Builds on: Speed and velocity, instantaneous and average (previous video). Next: Motion graphs.

#Year11Physics #Physics #Vectors #HSCScience

## Open decisions

- **1. Acceleration in this video (root).** The route gives v06 three points, including a⃗ = Δv⃗/Δt in one and two dimensions, while its learner question names only velocity. This design keeps all three by framing acceleration as the same operation ("find the change, then divide by the time"), and the narration fits the band. If the learning review finds the second half rushed, the alternative is a short separate video "What is acceleration?" (scenes 5 to 7 plus A2), with v06 ending at scene 4; v07's entry knowledge would then cite that video. Recommendation: keep, because v07 needs acceleration as entry knowledge and the bend callback depends on v05 being fresh.
- **2. Site crosswalk (root).** The route's `siteCrosswalk` marks `ci09919606` "covered" by lesson 6, but lesson 6 contains no acceleration content. The site has no lesson that teaches a⃗ = Δv⃗/Δt before lesson 7's graphs. Recommend correcting the crosswalk to "partial" or "gap" and, for the site, an acceleration card in lesson 6 (owner record).
- **3. Δv⃗ colour.** The change-of-velocity arrow uses the physics orange (`C.orange`) to separate it from the teal velocities and the amber path. Confirm against v07 and v08, which also use acceleration.
- **4. Site link form.** As v05.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v05 and Stage 5 trigonometry; check that the arrow cutting the corner makes "displacement, not path" clear before Pythagoras; that the shrinking triangle explains why the direction is kept; that the 1D sign condition reads as a condition; that the reversed-arrow flip in scene 7 is followable for a student who met vector subtraction in v02 and v04; that the pace through scenes 5 to 7 is not rushed; that the attempt cards give nothing away), then the Codex physics check and error check.
- The triangle shrink, the velocity arrows and the reversed-arrow flip carry the explanation; judge them at playback speed in the voiced preview. Every angle and length must come from the same components as the drawn arrows.
