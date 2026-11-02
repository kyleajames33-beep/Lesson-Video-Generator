# Y11 Physics FA1 V08 (Physics 2025, Year 11, Focus Area 1): How do slopes and signed areas connect motion graphs? (design)

Status: Revision 2 (2 Nov): brief 145 repairs applied (scene 7 now says the velocity graph's signed area gives the displacement, not "tells you how far"; 5,535 characters, about 517 s). Needs a Codex error check.

Narration 5,535 characters, 14 scenes, about 517 s (8.6 minutes), counted by script with the build parser rules (see "Narration length estimate").

Scope: eighth video of the Year 11 Physics (2025) Focus Area 1 route, and the second of two motion-graph videos. Templates: `math-a12-d10.md` (calculation format, coded graphs, section structure) and `bio-y11-fa1-v05.md`; the v05 to v07 designs (Revision 1, written just before this one; v07's scene 13 is this video's first frame). Pre-design pack: `../pre-design/phys-y11/phys-y11-fa1-v08.md` (every number recalculated below). Site lesson read in full (2 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa1-fundamentals-of-mechanics/lesson08.sa.html` (orient, intentions, gradient of a displacement-time graph, gradient of a velocity-time graph, apply, area under a velocity-time graph, short-answer practice, retrieve). Route entry: `phys-y11-fa1-v08` in `../../phys-y11-video-route.json` (route-approved by root, 1 Nov). Route stop: "Stop after the learner can answer: How do slopes and signed areas connect motion graphs?" Next: "phys-y11-fa1-v09: How can constant-acceleration equations predict one-dimensional motion?"

Owner rules applied: as v05 to v07 (2025 syllabus only; graphs, shading, tangents and readouts coded; the car a painted plate; no people; one reasoning stage at a time; worked examples as task, equation and grouped givens; 3 s in-teaching prediction; "Pause here to answer." with a 10 s countdown and the full worded question with its graph on screen; brief feedback with one crossed mistake; original HSC-style questions; key-notes hold; Australian spelling; no em dashes; v05 to v07 recalled in a sentence each).

Syllabus content point (Physics 11-12 (2025), Year 11, Focus Area 1, group "Motion relationships"; NESA content-system codename), quoted from the route JSON `syllabusActions`:

- `ci79a6bb83`: "Analyse motion graphs to determine the relationships between displacement, initial velocity, final velocity, acceleration and time"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

**Boundary:** starts from v07's handoff (a velocity-time line from 4 to 20 m s⁻¹ over 8 s, "acceleration?", "how far?"); the slope of a velocity-time graph is the acceleration, a = (v − u)/t; the area under it is the displacement, with area below the axis negative, and s = ½(u + v)t for a straight line; the slope of a displacement-time graph is the velocity, with a tangent for an instant on a curve; the area under an acceleration-time graph is the change in velocity (`ci79a6bb83`). Stops at reading these relationships from graphs. Not taught: the equations s = ut + ½at², v = u + at and v² = u² + 2as as tools (v09; the handoff names "equations" only); curved velocity-time graphs and counting squares (not needed for the syllabus point; author note f); measured data with scatter (v10).

## Decisions

- **Learner question kept (route).** "How do slopes and signed areas connect motion graphs?" The answer, built in order: the slope of a velocity-time line is the change in velocity over the time, which is the acceleration (2); velocity times time is displacement, and on a velocity-time graph velocity times time is an area, so the area under the line is the displacement (3, 4); area below the axis is motion in the negative direction, so it counts as negative displacement but still adds to distance (5); the slope of a displacement-time graph is the velocity, and at an instant on a curve it is the slope of the tangent, the same shrinking interval as v05 (6); going down the stack takes slopes, going up takes areas (7, 8).
- **The hook (site hook and v07's handoff).** "One answer comes from the slope, the other from the area. Which is which?" A 3 s prediction. The site's hook says the area "turns out to be exactly the distance the car travelled"; this video says displacement, and shows in scene 5 when distance and displacement differ (site correction 1).
- **The cause made visible (owner quality bar).** Slope: a rise-and-run triangle on the line, with the rise labelled as the change in velocity (2). Area: a car drives on the road above the graph while thin strips fill under the velocity line in step with it; an odometer readout on the road and an area counter on the graph tick together to the same number (3, 4), so the student sees that the area is the distance covered, not a coincidence of formulas. Signed area: the car rolls backwards while the shading grows below the axis, then drives forward while it grows above (5). Tangent: v05's shrinking interval replayed as chords on v07's displacement curve closing in on a tangent (6).
- **Worked example 1 (site `we-1`, unchanged numbers).** u = 4 m s⁻¹, v = 20 m s⁻¹, t = 8 s, straight line: a = 16 ÷ 8 = 2.0 m s⁻²; displacement = rectangle 32 m + triangle 64 m = 96 m = ½(4 + 20) × 8. **Precision:** ideal teaching values, shown as whole numbers, with a = 2.0 m s⁻² as on the site (grey tag "teaching data").
- **Rectangle first (continuity with v07).** v07's car cruised at 12 m s⁻¹ from 6 to 10 s and its displacement rose from 36 to 84 m: 48 m = 12 × 4, a rectangle on its velocity graph. The rectangle is the simplest case where "velocity times time is area" is visible; the strips then extend it to a sloping line.
- **Signed area (pack candidate 1 as teaching).** u = −2.0 m s⁻¹, v = +6.0 m s⁻¹, t = 4.0 s, straight line: crosses zero at 1.0 s; areas −1.0 m and +9.0 m; displacement +8.0 m; distance 10 m; a = 2.0 m s⁻² (shown, not dwelt on). Promoted from an attempt to teaching because "signed areas" is in the learner question and must be shown, not tested cold.
- **Tangent (site card 1 and misconception 2; v05 and v07 continuity).** v07's car speeds up with s = t² for the first 6 s. At t = 4 s, chords from (4, 16) to 6, 5 and 4.1 s have slopes 10, 9 and 8.1 m s⁻¹, closing in on the tangent's slope, 8 m s⁻¹, which matches v07's velocity reading at 4 s (its scene 4 cursor). The chord from the origin, slope 4 m s⁻¹, is the average velocity over the first 4 s, not the velocity at 4 s (crossed). The maths kit's `SecantToTangent` draws exactly this.
- **Area under the acceleration-time graph (in the relationships; consistency check).** 2.0 m s⁻² for 8 s gives an area of 16 m s⁻¹, the rise from 4 to 20 m s⁻¹. One sentence, in scene 7.
- **Relationships stated for v09 (syllabus wording "displacement, initial velocity, final velocity, acceleration and time").** From the slope, a = (v − u)/t; from the area of a straight-line velocity graph, s = ½(u + v)t. Both are written as graph readings, not as a set of equations to memorise; v09 turns them into the syllabus equations.
- **Attempts (original).** (A1) A bus slows uniformly from 14 m s⁻¹ to 4.0 m s⁻¹ in 5.0 s: a = −2.0 m s⁻²; s = ½(14 + 4.0)(5.0) = 45 m. Crossed: "14 × 5.0 = 70 m" (one velocity times time, as if it never slowed). (A2) A trolley rolls up a ramp, stops and rolls back; velocity changes uniformly from +3.0 to −3.0 m s⁻¹ in 6.0 s: a = −1.0 m s⁻²; displacement 0; distance 9.0 m. Crossed: "displacement 9.0 m" (adding the sizes). Each card shows its plain velocity-time graph (line, labelled axes and end values only; no shading, triangle or zero-crossing mark).
- **Mistake scene:** none separate. "Area under a displacement-time graph gives distance" (7: the stack says slope going down from displacement; key note 3 says velocity-time); "slope from the origin gives the velocity on a curve" (6, crossed); "area below the axis adds to displacement" (5; feedback 2 crossed); "one velocity times time" (feedback 1 crossed); "area gives the position" (memory aid second line: areas give a change).
- **Memory aid:** "Down the stack, take the slope. Up the stack, take the area." (see "Memory aid check"); uses v07's stack order (displacement on top, velocity, acceleration at the bottom).
- **Handoff (route next).** The five symbols u, v, a, t, s as chips beside the two graph relationships, then "Next: equations that predict motion without drawing the graph." No new equation is shown.
- **Site sources used:** hook (area as distance, corrected to displacement); key terms (gradient, area, tangent, initial and final velocity); card 1 (slope of displacement-time = velocity; tangent); card 2 and `we-1` (slope of velocity-time = acceleration, a = (v − u)/t); quick check (18 to 6 m s⁻¹ over 4 s, −3.0 m s⁻²: its idea is A1's); card 3 (area = displacement; rectangle, triangle, splitting); Q2's rectangle-plus-triangle split (scene 4); misconceptions (both). Not used: activity (0 to 12 m s⁻¹ over 6 s repeats v07); Q1 (5 to 25 m s⁻¹, same structure as `we-1`); Q3 (curved displacement graph turning back; v07's A2 and this video's scene 5 cover the reversal).
- **Site corrections (quoted from site lesson 8, read 2 Nov; for `../site-corrections-phys-y11.md`; not logged yet):**
  1. Hook: "The area trapped between the line and the time axis turns out to be exactly the distance the car travelled." The area under a velocity-time graph is the displacement; it equals the distance here only because the velocity never becomes negative. Suggest: "turns out to be exactly the car's displacement (here equal to the distance, because the car never reverses)."
  2. Card 3 and its key statement: "The area under a velocity–time graph equals the displacement." Incomplete where the graph goes below the axis, the case that separates displacement from distance (lessons 4 and 5). Suggest adding: "Area below the time axis counts as negative displacement. The displacement is the signed total; the distance is the total of the area sizes."
  3. Q3 model answer: "the object is moving back toward, and then past, its starting position." The question gives only that the gradient becomes negative; whether the object passes its start is not determined. Suggest: "moving back toward its starting position (whether it passes it depends on how far the graph continues)."
  - Checked and correct: `we-1` (2.0 m s⁻²); quick check B (−3.0 m s⁻²); card 1 quick check B (6.0 m s⁻¹); activity (2.0 m s⁻², 36 m); Q1 (2.0 m s⁻², 150 m); Q2 (2.5 m s⁻², 120 m; split 40 + 80 m); Q3's other steps; orient-and-predict (5.0 m s⁻¹).
- **Pack questions answered:** `we-1` used unchanged; pack candidate 1 promoted to teaching (scene 5); pack candidate 2 (a tangent rising 8.0 m over 2.0 s) used in spirit: the scene 6 tangent rises 16 m over 2 s on v07's own curve. Pack visual needs met (signed v-t area and tangent and gradient overlays with units, matched to the current physical interval).
- **Cause chain taught, in order:** (1) a graph holds numbers: slope and area (hook); (2) rise over run on a velocity graph is change in velocity over time: acceleration (2); (3) velocity times time is displacement; on the graph it is an area, first a rectangle, then thin strips under a sloping line (3); (4) rectangle plus triangle gives the displacement; for a straight line, average velocity times time (4); (5) negative velocity gives area below the axis: negative displacement, but positive distance (5); (6) slope of displacement is velocity; on a curve the chords shrink to a tangent (6); (7) down the stack, slopes; up the stack, areas; area under acceleration is the change in velocity (7); (8) memory aid with its conditions (8).
- **Entry knowledge (route `entryKnowledge`):** Stage 5 gradient as rise over run, areas of rectangles and triangles. From v05: instantaneous values by a shrinking interval; displacement against distance (v04). From v06: a = Δv/Δt. From v07: the three linked graphs, their stack order and the car's data (s = t² for 0 to 6 s; 12 m s⁻¹ from 6 to 10 s).
- **Learner-visible vocabulary (plain meaning at first use):** slope (rise over run: how much the line goes up for each step across, scene 2); initial velocity u and final velocity v (the velocity at the start and at the end of the time you're looking at, scene 2); area under the graph (the region between the line and the time axis, scene 3); tangent (a straight line that just touches the curve at one point, going the same way as the curve there, scene 6); chord (a straight line joining two points on the curve, scene 6; shown, said as "a line between two points").
- **Legacy logic ported:** none.
- **New explainer motion (coded unless a plate is named):** **rise-run triangle** on a straight line with labelled rise and run (maths `TangentTriangle` with custom labels); **strip fill** (thin vertical strips filling under the velocity line from left to right in step with a time cursor; each strip's height read from the line; an area counter); **road above the graph** (the yellow car plate driven by the same velocity function, with an odometer readout; v05's `MotionTrack`); **signed shading** (teal above the axis, a hatched red-orange below, with separate counters "+" and "−" and a running signed total); **rectangle plus triangle split** (outline and fill, with their own counters); **chords to tangent** (maths `SecantToTangent` with cue stops at h = 2, 1, 0.1 and the tangent, plus a slope readout); **stack diagram** (v07's three panel thumbnails with "slope" arrows pointing down and "area" arrows pointing up); `AlignedAlgebra`; `Countdown` (3 s and 10 s); `QuestionCard` (subject "Physics", with a small graph); `Chip` with `cross`; scribble circles; `KeyNotes`; `Heading`.
- **Board layout (constant):** heading top-left; the road strip across the top when the car is used (scenes 3 to 5); the graph on the left (about 1,000 × 600 px); working in the right column.
- **No human figures.**
- **Author notes (not learner copy):**
  (a) `we-1`: v(t) = 4 + 2t, 0 ≤ t ≤ 8; a = 2.0; area = ∫ = 4 × 8 + ½ × 8 × 16 = 32 + 64 = 96 m. Car on the road: s(t) = 4t + t², s(8) = 96 m, so the odometer and the area counter agree at every time (strip fill and car both driven by this function). Graph window: t 0 to 10 s (ticks 2), v 0 to 24 m s⁻¹ (ticks 4).
  (b) Rectangle (scene 3): v07's car, 12 m s⁻¹ from 6 to 10 s; 12 × 4 = 48 m; s from 36 to 84 m. Shown on a reduced copy of v07's velocity panel.
  (c) Signed example (scene 5): v(t) = −2 + 2t, 0 ≤ t ≤ 4; zero at t = 1.0 s; area below = −½ × 1.0 × 2.0 = −1.0 m; above = ½ × 3.0 × 6.0 = 9.0 m; displacement +8.0 m; distance 10 m; a = 2.0 m s⁻². Car: s(t) = −2t + t², minimum −1.0 m at 1.0 s, s(4) = +8.0 m. The car rolls backwards (plate not mirrored: it faces forward and moves back, as a car rolling backwards does), stops at 1.0 s, then drives forward. Window: t 0 to 5 s (ticks 1), v −4 to 8 m s⁻¹ (ticks 2), zero line bold.
  (d) Tangent (scene 6): s = t², ds/dt = 2t; at t = 4, s = 16 m, slope 8 m s⁻¹; chords from (4, 16): to (6, 36) slope 10, to (5, 25) slope 9, to (4.1, 16.81) slope 8.1; tangent line s = 8t − 16 through (2, 0) and (6, 32); rise-run triangle on the tangent from t = 4 to 6 s: run 2 s, rise 16 m. Chord from the origin: 16/4 = 4 m s⁻¹ (the average velocity over 0 to 4 s, as v05 defined it). Window: t 0 to 6 s, s 0 to 40 m.
  (e) Area under a-t (scene 7): 2.0 × 8 = 16 m s⁻¹ = 20 − 4.
  (f) Curved velocity graphs: the area still equals the displacement (strips), but no curved velocity graph is used; the strips argument is general and is said for "when the velocity changes", which covers both.
  (g) A1: v = 14 − 2t, 0 ≤ t ≤ 5.0; a = −2.0; s = 45 m; crossed 70 m. A2: v = 3.0 − 1.0t, 0 ≤ t ≤ 6.0; zero at 3.0 s; +4.5 m and −4.5 m; displacement 0; distance 9.0 m; crossed "9.0 m displacement".
  (h) Pronunciations: "u" (the letter), "v" (the letter); "a equals v minus u, over t"; "s equals a half, times u plus v, times t"; "two point oh metres per second squared"; "plus eight point oh metres"; "minus one point oh metre"; "four point five metres".

Main question: *A car's velocity rises in a straight line from 4 to 20 m/s in 8 s. What is its acceleration, and how far does it travel? One answer is a slope, the other an area. Which is which, and why?*
Entry knowledge (Stage 5 gradients and areas; v05 shrinking interval; v06 Δv/Δt; v07 linked graphs).
Stops after: slope of velocity-time = acceleration; signed area under velocity-time = displacement, with distance as the total of the sizes; slope of displacement-time = velocity, with tangents; area under acceleration-time = change in velocity; a = (v − u)/t and s = ½(u + v)t read from a straight-line graph. No equation set.
Handoff: v09, constant-acceleration equations.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key (as v07): displacement navy; velocity teal; acceleration orange; positive area pale teal fill with a teal counter; negative area hatched red-orange with an orange counter; chords grey, the tangent amber (`MATH_ACCENT`); rise-run triangles dashed amber; the time cursor grey; working in ink with givens navy; current result bright, earlier items dim.

### 1. hook (slope or area?)
> Last video ended on this graph. A car's velocity rises in a straight line, from four to twenty metres per second, over eight seconds. Two questions. What's its acceleration? And how far does it travel? One answer comes from the slope of this line. The other comes from the area underneath it. Which is which? Predict, then we'll **see**.

Visual: opens on v07's last frame (velocity-time axes, teal line from (0, 4) to (8, 20), end points dotted, chips "acceleration?" and "how far?", the v07 memory line small at the top). The memory line and the "Next" chip fade. Heading writes on: "Slopes and areas on motion graphs". On "slope" a faint amber hint line runs along the graph line; on "area" a faint teal hint wash under it, both fading at once. On "see" chips "slope → ?", "area → ?" and a 3-second countdown ring.

### 2. the slope of a velocity graph
> The slope first. Slope is rise over run. Here the rise is the change in velocity, from the initial velocity, u, which is four, to the final velocity, v, which is twenty. That's a rise of sixteen metres per **second**. The run is the time, eight seconds. So the slope is sixteen over eight, two point oh metres per second squared. That's exactly last video's acceleration, a change in velocity divided by the time. So on a velocity-time graph, the slope **is** the acceleration. As a relationship, a equals v minus u, over **t**.

Visual: calculation layout: task strip "Find the acceleration"; givens group (navy): "straight line; u = 4 m s⁻¹ at t = 0; v = 20 m s⁻¹ at t = 8 s" (labels "u" and "v" attach to the two end points as they are named), grey tag "teaching data". A dashed amber rise-run triangle draws on the line: the vertical leg on "second" labelled "rise = v − u = 20 − 4 = 16 m s⁻¹", the horizontal leg labelled "run = t = 8 s". `AlignedAlgebra` row "slope = 16 m s⁻¹ ÷ 8 s = 2.0 m s⁻²". On "is" the chip "slope → ?" fills "slope → acceleration". On "t" the relationship writes boxed: "a = (v − u) ÷ t".

### 3. why area is displacement
> Now the area. Start simple. Last video, our car cruised at twelve metres per second for four seconds. It covered twelve times four, forty-eight metres. On its velocity-time graph, that's a rectangle, twelve high and four wide, and its area is also twelve times **four**. Velocity times time is displacement, and on this graph, velocity times time is **area**. When the velocity changes, slice the time into thin strips. Each strip is almost a rectangle, so its area is the displacement in that sliver of time. Add them all up, and you get the whole area under the **line**.

Visual: a small copy of v07's velocity panel slides in at the right with its 6 to 10 s flat section; the rectangle under it fills pale teal on "four" with labels "12 m s⁻¹" (height) and "4 s" (width) and a counter "area = 48 m", beside v07's displacement readings "36 m → 84 m: 48 m" (grey). On "area" a chip "velocity × time = displacement = area". The copy slides away. Back on the `we-1` graph, with the road strip and the yellow car at 0 m above it (author note a): on "slice" the time axis divides into eight 1 s strips, then into thin strips; on "sliver" one thin strip is magnified (its top almost flat, labelled "v × Δt"). On "Add them all up" the strips fill left to right under the line in step with a time cursor while the car drives on the road: the odometer readout and the area counter tick together, both reaching "96 m" on "line".

### 4. worked example: the area
> So the car's displacement is the area under the line. Split it into a rectangle and a triangle. The rectangle is four metres per second high and eight seconds wide, so thirty-two metres. The triangle is half of eight, times sixteen, sixty-four **metres**. Together, ninety-six metres. That's also the average of u and v, which is twelve, times eight seconds. So for a straight line, s equals a half, times u plus v, times **t**.

Visual: task strip "Find the displacement"; the filled area outlines into a rectangle (0 to 8 s, 0 to 4 m s⁻¹) and a triangle above it. Rows, one per cue: "rectangle = 4 m s⁻¹ × 8 s = 32 m"; on "metres" "triangle = ½ × 8 s × 16 m s⁻¹ = 64 m"; "s = 32 + 64 = 96 m" (boxed; the odometer readout from scene 3 glows "96 m"). On "average" a dashed teal horizontal line at 12 m s⁻¹ appears across the graph, the triangle's top corner visibly folding down to fill the gap below it, tag "average velocity 12 m s⁻¹"; row "½(4 + 20) × 8 = 12 × 8 = 96 m". On "t" the relationship writes boxed beside the first: "s = ½(u + v)t (straight line)". The chip "area → ?" fills "area → displacement".

### 5. area below the axis
> But what if the velocity is negative? Here a car is rolling backwards at two metres per second, and it speeds up forwards to six metres per second, over four seconds. For the first second, the velocity is negative, so the car moves backwards. That area is below the axis, and it counts as negative, minus one **metre**. For the next three seconds, the car moves forward, and that area counts as positive, plus nine **metres**. The displacement is the signed total, plus eight metres. But the distance travelled is one plus nine, ten **metres**. So area below the axis subtracts for displacement, and adds for distance.

Visual: clear change: new graph (author note c) with the bold zero line; teal line from (0, −2) to (4, 6), zero crossing at 1.0 s ringed; givens "u = −2.0 m s⁻¹, v = +6.0 m s⁻¹, t = 4.0 s, straight line; forwards = +". The road above: the yellow car plate at 0 m facing right. A cursor runs: during 0 to 1.0 s the car rolls back to −1.0 m while a hatched red-orange triangle fills below the axis; on "metre" its counter "−1.0 m" and the road readout "displacement −1.0 m". During 1.0 to 4.0 s the car drives forward to +8.0 m while a pale teal triangle fills above; on "metres" its counter "+9.0 m". Rows: "displacement = −1.0 + 9.0 = +8.0 m" (the road's displacement readout "+8.0 m" glows); on "metres" (last) "distance = 1.0 + 9.0 = 10 m" (the road's odometer readout "10 m" glows). Tags on the last sentence: "below the axis: − for displacement, + for distance".

### 6. the slope of a displacement graph: the tangent
> Now the displacement-time graph. Its slope is the change in displacement over the time, so it's the velocity. For a straight line, that's easy. But here's our speeding-up car from last video, and its graph **curves**. What's its velocity at four seconds? Remember how we measured an instant, by shrinking the interval? On the graph, each interval is a line between two points. From four to six seconds, its slope is ten. From four to five, nine. From four to four point one, eight point **one**. As the interval shrinks, the line becomes a tangent, touching the curve at just one point. Its slope is eight metres per second, the velocity at four seconds, which matches the velocity graph **exactly**. A line from the origin has a slope of four, but that's the average velocity over the first four seconds, not the velocity at four **seconds**.

Visual: clear change: v07's displacement panel enlarged (author note d), s = t² from 0 to 6 s in navy, point (4, 16) marked "t = 4 s". On the second sentence a straight-line ghost (v07's 6 to 10 s section, small) shows "straight: one slope everywhere". On "curves" the curve glows. Maths `SecantToTangent` with cue stops: a grey chord from (4, 16) to (6, 36) with readout "slope = 20 ÷ 2 = 10 m s⁻¹"; to (5, 25) "9 m s⁻¹"; on "one" to (4.1, 16.81) "8.1 m s⁻¹", with a zoom circle showing the two points nearly together; v05's interval table returns small in the corner ("8.0, 7.0, 6.1, 6.01" with a grey "v05") for recognition. On "tangent" the chord becomes the amber tangent touching at (4, 16); a dashed amber rise-run triangle on it, "rise 16 m, run 2 s, slope = 8 m s⁻¹". On "exactly" a small copy of v07's velocity panel appears below with its cursor at 4 s reading "v = 8 m s⁻¹"; a grey dashed link joins the two readings. On "A line from the origin" a grey chord from the origin to (4, 16) appears with "16 ÷ 4 = 4 m s⁻¹"; on "seconds" a chip "velocity at 4 s = 4 m s⁻¹" fades in and is crossed (caption "that's the average over 0 to 4 s").

### 7. how the three graphs connect
> So here's how the three graphs connect. Going down the stack, take the slope. The slope of displacement gives velocity, and the slope of velocity gives acceleration. Going up the stack, take the area. The area under velocity gives the displacement. So it's the velocity graph, not the displacement graph, whose signed area gives the displacement. And the area under acceleration gives the change in velocity. Check it on our first car. Two metres per second squared for eight seconds is an area of sixteen, exactly the rise from four to **twenty**.

Visual: v07's three-panel stack returns as thumbnails on the left (displacement on top, velocity, acceleration at the bottom), redrawn for the `we-1` car (s = 4t + t², v = 4 + 2t, a = 2.0, 0 to 8 s). On "Going down" two amber arrows point down between the panels, labelled "slope" (one per clause, with "→ velocity", "→ acceleration"). On "Going up" two teal arrows point up, labelled "area" ("→ displacement", "→ change in velocity"); on "not the displacement graph" a chip "area under displacement = distance" fades in beside the top panel and is crossed. On "Check it" the acceleration panel's rectangle (2.0 high, 8 s wide) fills orange with "area = 16 m s⁻¹", and on "twenty" the velocity panel's rise "20 − 4 = 16 m s⁻¹" glows beside it. Right column keeps the two boxed relationships "a = (v − u) ÷ t" and "s = ½(u + v)t".

### 8. memory aid
> Down the stack, take the slope. Up the stack, take the area. Two checks before you use it. An area gives you a change, not a starting value. And area below the axis counts as **negative**.

Visual: the stack thumbnails with their arrows stay. The handwritten line writes large: "Down the stack: slope. Up the stack: area." Under it, smaller: "Area gives a change. Below the axis counts as negative." On "negative" scene 5's hatched triangle returns small beside the line. Hold about 2 seconds.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. A bus slows uniformly from fourteen metres per second to four point oh metres per second in five point oh seconds. Use its velocity-time graph to find its acceleration and its displacement. Pause here to answer.

Visual: `QuestionCard`, worded as printed, with a small plain velocity-time graph (axes "velocity (m s⁻¹)" and "time (s)", a straight line from (0, 14) to (5.0, 4.0), end values labelled; no shading or triangle): "The velocity–time graph shows a bus slowing uniformly from 14 m s⁻¹ to 4.0 m s⁻¹ in 5.0 s. Use the graph to determine (a) the acceleration of the bus and (b) its displacement during the 5.0 s." The full question and graph stay on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 10. feedback 1 (brief)
> The slope is four minus fourteen, over five, which is minus two point oh metres per second **squared**. The area is a half, times fourteen plus four, times five, forty-five **metres**. Fourteen times five, seventy metres, treats the bus as if it kept going at fourteen the whole time, but it slowed **down**.

Visual: card shrinks to the top with its graph; "uniformly", "14 m s⁻¹", "4.0 m s⁻¹" and "5.0 s" underlined as used. On the card's graph a dashed amber rise-run triangle (rise −10, run 5.0); row "a = (4.0 − 14) ÷ 5.0 = −2.0 m s⁻²" on "squared". The area under the line fills pale teal; row "s = ½(14 + 4.0) × 5.0 = 45 m" on "metres". Boxed: "(a) −2.0 m s⁻² (b) 45 m". On "down" a chip "s = 14 × 5.0 = 70 m" fades in and is crossed, with a ghost rectangle at 14 m s⁻¹ over the true area (caption "the bus slowed: use the area under the line"). Hold about 1 second.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. A trolley rolls up a ramp, stops, then rolls back down. Taking up the ramp as positive, its velocity changes uniformly from plus three point oh, to minus three point oh metres per second, in six point oh seconds. Find its acceleration, its displacement, and the distance it travels. Pause here to answer.

Visual: `QuestionCard`, worded as printed, with a small plain velocity-time graph (a straight line from (0, +3.0) to (6.0, −3.0), labelled end values, the zero line drawn as an ordinary axis; no shading and no mark at the crossing): "A trolley rolls up a ramp, stops, then rolls back down. Taking up the ramp as positive, its velocity changes uniformly from +3.0 m s⁻¹ to −3.0 m s⁻¹ in 6.0 s, as shown. Determine (a) the acceleration of the trolley, (b) its displacement and (c) the distance it travels during the 6.0 s." The full question and graph stay on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 12. feedback 2 (brief)
> The slope is minus three minus three, over six, minus one point oh metres per second **squared**. The line crosses the axis at three seconds. Above it is a triangle of plus four point five metres, and below it, minus four point **five**. So the displacement is zero. The trolley ends where it started. The distance is nine point oh **metres**. Calling nine the displacement forgets that the area below **subtracts**.

Visual: card shrinks to the top with its graph; "up the ramp as positive" underlined. Row "a = (−3.0 − 3.0) ÷ 6.0 = −1.0 m s⁻²" on "squared". The crossing at 3.0 s is ringed; the upper triangle fills pale teal "+4.5 m", on "five" the lower triangle fills hatched red-orange "−4.5 m". Rows: "displacement = +4.5 − 4.5 = 0"; on "metres" "distance = 4.5 + 4.5 = 9.0 m". Boxed: "(a) −1.0 m s⁻² (b) 0 (c) 9.0 m". On "subtracts" a chip "displacement = 9.0 m" fades in and is crossed (caption "area below the axis is negative"). Hold about 1 second.

### 13. handoff
> So a slope and an area link the initial velocity, the final velocity, the acceleration, the time and the displacement. Next, we'll turn those links into equations, so we can predict a motion without drawing its graph at **all**.

Visual: the memory line returns small at the top. The two boxed relationships "a = (v − u) ÷ t" and "s = ½(u + v)t" sit centre; five chips "u", "v", "a", "t", "s" write one per spoken quantity and attach to their places in the two relationships; the `we-1` graph shrinks away behind them. On "all" a small "Next: equations of uniformly accelerated motion" chip. No new equation. Hold about 2 seconds.

### 14. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Slope of a displacement-time graph = velocity. On a curve, the velocity at an instant is the slope of the tangent there (the line from the origin gives the average velocity, not the velocity at that instant).
2. Slope of a velocity-time graph = acceleration: a = (v − u)/t, where u is the initial velocity and v the final velocity.
3. Area under a velocity-time graph = displacement. Area below the time axis counts as negative; the distance is the total of the area sizes. For a straight line, s = ½(u + v)t.
4. Area under an acceleration-time graph = change in velocity.

Memory aid (large, on the notes screen): *Down the stack: slope. Up the stack: area.* Second line: *Area gives a change. Below the axis counts as negative.*

## Teaching checks

- **Does it explain causes?** Why the slope of a velocity graph is the acceleration: the rise is the change in velocity and the run is the time, which is v06's definition (2). Why the area is the displacement: velocity times time is displacement, and on this graph velocity times time is area; thin strips extend it to a changing velocity (3, shown with the odometer matching the area counter). Why ½(u + v)t: the triangle folds onto the average velocity (4). Why area below the axis is negative: the car is moving backwards then (5, shown on the road). Why the tangent gives the velocity at an instant: it is the limit of the shrinking interval from v05 (6). Why the chord from the origin fails: it is an average over 0 to 4 s (6).
- **Misconceptions addressed:** "the area under a displacement-time graph is distance" (7, the stack; key notes 1 and 3); "the slope from the origin gives the velocity on a curve" (6, crossed; key note 1); "area below the axis adds to displacement" (5; 12 crossed; key note 3); "displacement = one velocity × time when the velocity changes" (10, crossed); "area gives the position" (8, second line).
- **One idea at a time:** slope (2), then area (3, 4), then sign (5), then the other graph's slope (6), then the whole picture (7); one row per cue.
- **Video makes it easier:** the student watches the rise-run triangle label itself as a change in velocity (2), watches strips fill under the line while the car's odometer ticks to the same number (3), sees the triangle fold onto the average-velocity line (4), watches shading grow below the axis while the car rolls backwards (5), and watches the chords close in on the tangent (6). Each motion is the evidence for the next sentence.
- **Response opportunity:** a 3 s in-teaching prediction (1); two unseen HSC-style tasks with their graphs and every condition on the card, 10 seconds each with the invitation to pause, nothing answer-bearing (no shading, no triangle, no crossing mark). One crossed mistake each; feedback about 23 s and 31 s.
- **Avoided double teaching:** Δv/Δt (v06), the shrinking interval (v05) and the three graphs (v07) are recalled with one line each and their own visuals.
- **Syllabus coverage:** `ci79a6bb83`: displacement (3 to 5, 7), initial and final velocity (2, 4), acceleration (2, 7), time (2, 4); relationships a = (v − u)/t and s = ½(u + v)t (2, 4, 13); A1, A2.
- **Out of scope by design:** the syllabus equations as tools (v09); curved velocity graphs and counting squares; measured data (v10).

## Practice questions and model answers

**Attempt 1 (scene 9; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "The velocity–time graph shows a bus slowing uniformly from 14 m s⁻¹ to 4.0 m s⁻¹ in 5.0 s. Use the graph to determine (a) the acceleration of the bus and (b) its displacement during the 5.0 s."
Model answer: (a) a = slope = (v − u) ÷ t = (4.0 − 14) ÷ 5.0 = −2.0 m s⁻². (b) s = area under the line = ½(u + v)t = ½(14 + 4.0)(5.0) = 45 m (or rectangle 4.0 × 5.0 = 20 m plus triangle ½ × 5.0 × 10 = 25 m). Classic mistake (crossed): "70 m" (14 × 5.0).

**Attempt 2 (scene 11; original wording, HSC style, 4 marks suggested).** "A trolley rolls up a ramp, stops, then rolls back down. Taking up the ramp as positive, its velocity changes uniformly from +3.0 m s⁻¹ to −3.0 m s⁻¹ in 6.0 s, as shown. Determine (a) the acceleration of the trolley, (b) its displacement and (c) the distance it travels during the 6.0 s."
Model answer: (a) a = (−3.0 − 3.0) ÷ 6.0 = −1.0 m s⁻² (down the ramp). (b) The line crosses zero at 3.0 s. Area above the axis = ½ × 3.0 × 3.0 = +4.5 m; area below = −4.5 m; displacement = 0 (it returns to its starting point). (c) Distance = 4.5 + 4.5 = 9.0 m. Classic mistake (crossed): "displacement 9.0 m".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Worked (site we-1) | u 4, v 20 m s⁻¹, t 8 s; rise 16; a 2.0 m s⁻²; rectangle 32 m; triangle 64 m; s 96 m; average 12 m s⁻¹ | 1 to 4, 7, 13 |
| Rectangle (v07 car) | 12 m s⁻¹ × 4 s = 48 m; 36 → 84 m | 3 |
| Signed (pack candidate 1) | −2.0 → +6.0 m s⁻¹ in 4.0 s; zero at 1.0 s; −1.0 m; +9.0 m; displacement +8.0 m; distance 10 m; a 2.0 m s⁻² | 5 |
| Tangent (v07 car) | s = t²; at 4 s, 16 m; chords 10, 9, 8.1 m s⁻¹; tangent 8 m s⁻¹ (rise 16 m, run 2 s); origin chord 4 m s⁻¹ | 6 |
| a-t area | 2.0 × 8 = 16 m s⁻¹ = 20 − 4 | 7 |
| A1 | 14 → 4.0 m s⁻¹ in 5.0 s; −2.0 m s⁻²; 45 m (20 + 25); crossed 70 m | 9, 10 |
| A2 | +3.0 → −3.0 m s⁻¹ in 6.0 s; −1.0 m s⁻²; zero at 3.0 s; +4.5, −4.5 m; 0; 9.0 m | 11, 12 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (2 Nov); Codex to re-check.

- (20 − 4)/8 = 2.0; 4 × 8 = 32; ½ × 8 × 16 = 64; 32 + 64 = 96; ½(4 + 20) × 8 = 96; s(t) = 4t + t² gives s(8) = 96.
- 12 × 4 = 48; 84 − 36 = 48.
- v = −2 + 2t: zero at 1.0; ½ × 1 × 2 = 1.0; ½ × 3 × 6 = 9.0; 9.0 − 1.0 = 8.0; 9.0 + 1.0 = 10; s(t) = −2t + t²: s(1) = −1, s(4) = 8.
- s = t²: (36 − 16)/2 = 10; (25 − 16)/1 = 9; (16.81 − 16)/0.1 = 8.1; (16.0801 − 16)/0.01 = 8.01 (not shown); 2 × 4 = 8; tangent s = 8t − 16 through (2, 0), (6, 32); 16/4 = 4.
- 2.0 × 8 = 16 = 20 − 4.
- A1: (4.0 − 14)/5.0 = −2.0; ½(18)(5.0) = 45; 4.0 × 5.0 = 20; ½ × 5.0 × 10 = 25; 14 × 5.0 = 70.
- A2: (−3.0 − 3.0)/6.0 = −1.0; zero at 3.0; ½ × 3.0 × 3.0 = 4.5; 4.5 + 4.5 = 9.0.

## Memory aid check

- **"Down the stack: slope. Up the stack: area."** Written for this lesson, using v07's stack order (displacement on top, then velocity, then acceleration), with the second line "Area gives a change. Below the axis counts as negative." Meaning, as said in scene 8: to go from displacement to velocity, or velocity to acceleration, take the slope (of the tangent, on a curve); to go from acceleration to velocity, or velocity to displacement, take the area under the graph over the time interval. Assumptions checked: the area gives the change in the quantity above over that interval, not its value (to get a position or a velocity you add the starting value; second line); area below the time axis is negative (second line); the stack must be drawn in this order (it is, in v07, v08 and on the notes screen). It helps a new case: given any motion graph and any requested quantity, the student asks "up or down the stack?" and picks slope or area. It directly blocks the site's first misconception (area under displacement is "up" from displacement, which has nothing above it). Introduced after all four links have been seen (2 to 7).
- **Considered, not used:** "Slope is a rate, area is a total" (true and kept in spirit, but it does not tell the student which graph to use); "SVA, slope goes down" acronyms (an extra code to decode).

## Narration length estimate

Revision 1 count (2 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,535 characters**, 14 scenes. Characters per scene (1 to 14): 333, 516, 561, 420, 606, 827, 544, 184, 222, 296, 314, 400, 224, 75. At 13.3 characters per second the speech is about 416 s; add about 20 s of holds and settling (the strip fill and odometer in 3, the triangle fold in 4, the rolling car and signed fill in 5, the chords in 6, the stack arrows in 7, the 2-second memory hold), 3 s for the prediction countdown, 20 s for two attempt countdowns, 2 s of feedback holds and about 55 s more of the quiet notes hold (about 100 s of holds): **about 517 s**, inside the 5,500 to 6,800 character band (at its foot) and under the 570 s cap. One syllabus point, four graph links and their conditions fill it without padding. Feedback: scene 10 about 23 s, scene 12 about 31 s (including the 1 s holds). Scene 6 is the longest (about 62 s): the chords must stop on each spoken slope, and the tangent must settle before "Its slope is eight". If the learning review finds it long, drop the corner table (open decision 2) and the "straight line, that's easy" sentence.

## Scene list and build ids

Lesson key `p-y11-v08` (route phys-y11-fa1-v08). Suggested explainer folder `src/explainer/lessons/phys-y11-fa1-v08` and build folder `docs/production/claude-pm/lessons/p-y11-v08` (root to confirm).

In order (kebab-case; 14 scene headings, all `### N.`): hook, velocity-slope, area-why, area-worked, signed-area, tangent, stack-links, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`: the learner reads the worded question and its graph and works during the countdown) and key-notes (`hold`: the learner copies four notes). Transitions (`pickTransition`): v07's last frame continues into scene 1 (camera continue, same graph); 1 to 2 to 3 to 4 camera continue (same graph; the rectangle copy slides in and out); 4 to 5 clear change (new graph); 5 to 6 clear change (displacement graph); 6 to 7 camera pull back to the stack; 7 to 8 camera continue; attempts and feedback card shrink to the top; 12 to 13 board clear; 13 to 14 fade to the notes board.

Holds: hook (3 s prediction countdown inside the scene), attempt-1, attempt-2 (10 s countdowns after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/p-y11-v08-learning-review.md`, `science_check` = `checks/p-y11-v08-physics-check.md`.

## Assets

Have (inspected 2 Nov; uniform scaling only, never stretched):
- `public/assets/biology/b4-car-yellow-v1.png` (side view, facing right; v05 to v07's speeding-up car): scenes 3 and 5 (road strip; in scene 5 it rolls backwards without mirroring, author note c).

No new plate. All graphs, fills, chords, tangents, triangles and counters are coded.

Coded (maths kit through `graphTransform`, and v05 and v07 parts): `FunctionGraph` / `GraphLayer` (all graphs), `TangentTriangle` with custom `runLabel` and `riseLabel` (rise-run triangles in 2, 6, 10), `SecantToTangent` with `stops` (scene 6), `JoinZoom` (the zoom circle in 6), `StackedDerivativePanels` (the stack thumbnails in 7, with `featureColumns` off), v05's `MotionTrack` (road, odometer and displacement readouts), v07's `MotionGraphStack` (if built, for the stack), `AlignedAlgebra`, `Countdown`, `QuestionCard` with a small graph, `Chip` with `cross`, `KeyNotes`, `Heading`.

Kit gaps (for the build brief):
1. **`SignedAreaFill`** (new; maths or physics): fills the region between a function and the time axis from t₀ up to a moving t (driven by a cursor or progress), split automatically at zero crossings supplied by the author, positive regions in a fill colour and negative regions hatched in a second colour, with separate "+" and "−" counters and a running signed total and total of sizes, computed from the same function (exact for straight lines; numerical for others). Optional strip mode (n vertical strips, with one magnified) for scene 3, and an outline split mode (rectangle plus triangle) for scenes 4 and 10.
2. **Stack arrows.** Down and up arrows between stacked panels with labels; plain SVG is enough if `StackedDerivativePanels` has no slot.

## Codex asset brief

None. No new plate is needed (the yellow car plate is reused).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm that the road animations agree with the graphs: s(t) = 4t + t² reaches 96 m at 8 s (scene 3); s(t) = −2t + t² reaches −1.0 m at 1.0 s and +8.0 m at 4.0 s (scene 5).
3. Confirm the physics claims: slope of velocity-time = acceleration; area under velocity-time = displacement, negative below the axis, distance = total of sizes; slope of displacement-time = velocity, the tangent at an instant on a curve; the chord from the origin is the average velocity over 0 to 4 s; area under acceleration-time = change in velocity; s = ½(u + v)t holds for a straight-line velocity graph only (as stated).
4. Confirm the memory aid's conditions are on screen and spoken (area gives a change; below the axis is negative).
5. Confirm both attempt questions are original in wording, carry their graphs and every needed condition (the positive direction in A2), and that the card graphs show no shading, triangle or crossing mark.
6. Confirm the syllabus quote matches the route JSON exactly and no 2017-syllabus label appears.
7. Confirm no em dash (U+2014) anywhere in this file (en dashes in "velocity–time" on the cards are allowed), and Australian spelling.
8. Confirm the narration character count by script with the build parser rules.
9. Add site corrections 1 to 3 under Decisions to `../site-corrections-phys-y11.md` (owner record only).

## YouTube metadata (draft)

Title: Slopes and Areas on Motion Graphs: Velocity, Acceleration, Displacement | Year 11 Physics

(Title length: 90 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa1-fundamentals-of-mechanics/lesson08.sa.html

A car's velocity rises from 4 to 20 m/s in 8 s. Its acceleration is the slope of the velocity-time graph, and the distance it travels is the area underneath. See why: the rise is a change in velocity, and velocity times time is an area, so thin strips under the line add up to the displacement while the car drives the same distance on the road. Then learn why area below the axis counts as negative displacement but still adds to distance, how a tangent gives the velocity at an instant on a curved displacement-time graph, and how all three motion graphs link: down the stack, take the slope; up the stack, take the area. Two exam-style questions at the end.

Year 11 Physics (2025 syllabus), Focus Area 1: Fundamentals of mechanics.
Syllabus content (NSW Physics 11-12, 2025):
"Analyse motion graphs to determine the relationships between displacement, initial velocity, final velocity, acceleration and time" (ci79a6bb83)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

Builds on: Motion graphs from data (previous video). Next: Equations of uniformly accelerated motion.

#Year11Physics #Physics #MotionGraphs #HSCScience

## Open decisions

- **1. How much of v09 to preview (root, with v09's designer).** This video writes a = (v − u)/t and s = ½(u + v)t as graph readings and stops. v09 may want to derive v = u + at and s = ut + ½at² from these same pictures (rearranging the slope; rectangle plus triangle). If so, v09 can open on this video's scene 13 frame with the two boxed relationships. No change here.
- **2. Scene 6 length.** The tangent scene carries v05's table as a recognition cue. If the learning review finds it busy, drop the corner table and keep the chords.
- **3. Site link form.** As v05.

## Review notes

- Revision 2 (2 Nov): brief 145 review applied. Learning review and physics check each had one should-fix: scene 7 clause replaced with "whose signed area gives the displacement" (+12 characters, about 1 s; no cut needed). Earlier plan for the review, kept for reference: Next: student learning review (trace from v05 to v07 and Stage 5 areas and gradients; check that the odometer-and-area match makes "area = displacement" feel caused, not stated; that the triangle fold explains ½(u + v)t; that the backwards-rolling car makes negative area concrete; that the chords-to-tangent link to v05 is recognised; that the stack aid reads correctly with v07's order; that the attempt cards give nothing away), then the Codex physics check and error check.
- The strip fill with the matching odometer, the signed shading with the rolling car and the closing chords carry the explanation; judge them at playback speed in the voiced preview. All fills, counters and road positions must come from the same functions.
