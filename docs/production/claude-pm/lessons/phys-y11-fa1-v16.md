# Year 11 Physics FA1 V16: How do we find the forces on an object that is speeding up, slowing down or turning? Analysing accelerating objects with F_net = ma (design)

Status: Revision 1 (2 Nov). Needs independent student learning review (`docs/production/student-learning-review.md`, key `p-y11-v16`), a Codex physics check and a Codex error check before build. Voice: Google AI Studio, after the brief 124 pilot. Nothing recorded; human listening pending. Plates: the wooden crate (v13 request), the yellow car (have), three new plates (see Assets).

Narration XXXX characters, 13 scenes, about YYY s, counted by script with the build parser rules (see "Narration length estimate").

Scope: sixteenth video of Year 11 Physics (2025), Focus Area 1. Templates: `phys-y11-fa1-v08.md` and `phys-y11-fa1-v05.md` (physics format and readouts), `math-a12-d10.md` (section list; calculation layout: task, equation, grouped givens, result lines on cues) and `bio-y11-fa1-v05.md` (painted objects at native aspect, no people). Previous designs: `phys-y11-fa1-v13.md` to `phys-y11-fa1-v15.md` (Revision 1, written just before this one; v15's scene 14 is this video's first frame). Route entry **phys-y11-fa1-v16** in `../../phys-y11-video-route.json` (route-approved by root 1 Nov; playlist order 16; kind concept; main learner question rewritten by root). Pre-design pack `../pre-design/phys-y11/phys-y11-fa1-v16.md`. Site lesson read in full as text (2 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa1-fundamentals-of-mechanics/lesson15.sa.html` (orient, intentions and key terms, net force drives acceleration, applying F_net = ma, apply, direction, mass and the lift effect, short-answer practice, retrieve). Lesson review key **p-y11-v16**. Course label: Year 11 Physics (2025 syllabus), Focus Area 1.

Owner rules applied: as v13 and v14 (2025 syllabus only; vectors, free-body arrows and readouts coded; crate, lift, scales and cars painted plates at native aspect; no people, hands or faces: the site's person on bathroom scales becomes a crate on scales; one reasoning stage at a time; worked examples as task, equation and grouped givens; 3 s prediction; "Pause here to answer." with a 10 s countdown and the full worded question on screen; brief feedback with one crossed mistake; original HSC-style questions; key-notes hold; Australian spelling; no em dashes; v13 to v15 and v06 recalled in a sentence each).

Syllabus content points (Physics 11-12 (2025), Year 11, Focus Area 1, group "Forces and motion"; local ledger IDs with official CMS codenames), quoted from the route JSON `syllabusActions`, with the vector notation in linear form:

- P25-FA1-G3-06 `ci014d8672`: "Analyse the forces acting on an accelerating object"
- P25-FA1-G3-07 `cidf22083b`: "Solve problems involving Newton’s second law of motion using F⃗net = ma⃗"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

**Boundary.** Entry knowledge (route): Stage 5 Science and Mathematics and phys-y11-fa1-v15 (measured data support a = F_net/m). Also used: v14 (F_net = ma; net force first; W = mg), v13 (zero net force keeps the velocity constant), v12 (free-body diagrams), v06 (acceleration is the change in velocity per unit time, and a change of direction is a change of velocity), v09 (a = (v − u)/t for uniform acceleration). Start (pack refinement adopted): velocity change and free-body diagrams. Teaches: the direction of the acceleration, and so of the net force, from how the velocity changes (speeding up, slowing down, turning); signed one-dimensional problems; vertical problems with a support force (a crate on scales in a lift, N − mg = ma); turning at steady speed needs an inward net force, with its source named; a four-step method. Stops (pack refinement adopted): after identifying the net force from the acceleration for speeding, slowing and turning. Not taught: the size of the acceleration in a turn (v²/r is not in the Year 11 2025 content used here; acceleration values in turns are given); interaction pairs (v17); connected bodies (v18); friction coefficients (route friction videos); inclined planes.

**Opening frame.** v15 (Revision 1) ends scene 14 on the wooden crate sliding right along a coded floor strip with a teal velocity arrow, small thumbnails of a lift and a car on a bend, the boxed "F_net = m a" turned to read from the motion to the force, and the chip "Next: How do we find the forces on an object that is speeding up, slowing down or turning?". V16 opens there: the chip becomes the heading, and the sliding crate is the hook.

## Decisions

- **Learner question kept (route, root wording).** "How do we find the forces on an object that is speeding up, slowing down or turning?" The answer, built in order: work out which way the velocity is changing; that is the acceleration's direction, and the net force points the same way (2, 3, 6); find its size from ma (2, 5, 6); then the free-body diagram gives the unknown force (5, 6, 7). Speeding up: net force along the velocity (2). Slowing down: net force against the velocity (3). Vertical: the support force adjusts so the net force matches the acceleration (4, 5). Turning: the net force points to the inside of the bend (6).
- **The hook (site misconception 2, made visible).** v15's sliding crate: "nothing's pushing it, but it's still moving forward. Which way is the net force on it right now?" A 3 s prediction with chips "forward", "backward", "zero". Many students choose forward; scene 3 answers "backward" from the crate's own slowing.
- **The cause made visible (owner quality bar).** Scenes 2 and 3 are one continuous run of the crate (author note a): while the push acts, the forward double-shaft net arrow is drawn and the teal velocity arrow grows with an orange acceleration arrow pointing forward; at the instant the push arrow vanishes, the net arrow flips backward, the acceleration arrow flips with it, and the velocity arrow, still pointing forward, shrinks to nothing. The student watches the net force and the velocity point opposite ways while the crate slows. Scene 4: the lift ride with a live scale readout (686, 826, 686, 546 N) as the acceleration arrow appears up, vanishes, then appears down, the normal-force arrow lengthening and shortening against a fixed weight arrow. Scene 6: velocity arrows at two instants on a bend, joined tail to tail to show the change pointing inward (v06's construction), with the friction arrow on the tyres pointing inward.
- **Worked example 1 (site `we-1`, unchanged numbers).** 4.0 kg box, push 20 N forward, friction 8.0 N backward: F_net = 12 N forward; a = 3.0 m s⁻² forward. **Precision:** site teaching values (20 N's precision unstated; answer 3.0 m s⁻² as the site). The site calls it a "box"; this video uses the v13 crate plate and says "crate" throughout.
- **Slowing (extends `we-1`; new, consistent values).** The push stops; the crate is still sliding, so kinetic friction from the floor (still 8.0 N, assumed constant while it slides) is the only horizontal force: a = −8.0 ÷ 4.0 = −2.0 m s⁻². If the push lasted 2.0 s from rest, the crate reaches 6.0 m s⁻¹ and then stops 3.0 s later (author note a; only "loses two metres per second, every second" is spoken).
- **The lift (site card 3 and short-answer Q2, without people).** The site's 70 kg person becomes a 70 kg crate on scales that read the support force in newtons; values unchanged: g = 9.8 m s⁻², a = 2.0 m s⁻² upward, N = 70(9.8 + 2.0) = 826 N against 686 N at rest. Added from the site's own formula N = m(g − a): slowing near the top with 2.0 m s⁻² downward, N = 546 N; at steady speed, N = 686 N (v13). Scales "measure the upward push on the crate, the normal force" (plain meaning).
- **Turning (route question; pack candidate 2 in spirit).** A car at steady speed on a bend: velocity direction changes, so the velocity changes; the change points to the inside (v06); so a and F_net point inward; the source is sideways friction from the road on the tyres. Value: 1200 kg (site car mass, lessons 14 and 15), acceleration 3.0 m s⁻² toward the inside (given): F_net = 3600 N inward. Condition kept: "if the car's acceleration toward the inside is three point oh", so no formula for it is implied. On ice the friction can't supply the inward force, so the car carries on straighter (first-law link, said once).
- **Method and memory aid.** Four steps on screen: (1) how is the velocity changing? (2) a and F_net point that way; (3) F_net = ma for the size; (4) the free-body diagram gives the unknown force. Memory aid: "Force follows the change, not the motion." (see "Memory aid check").
- **Colour key (as v13 to v15).** Forces ink with a Physics orange outline, labelled; net force double-shaft "F_net"; velocity teal above the object; acceleration Physics orange solid above the velocity arrow; the change-in-velocity arrow in scene 6 dashed orange (it has the acceleration's direction; v06 drew Δv in the physics orange); scale readout in a coded display window; working in ink with givens navy.
- **Attempts (original).** (A1, braking; v09 recall) 1200 kg car, east at 20 m s⁻¹, brakes uniformly to rest in 5.0 s: a = −4.0 m s⁻² (4.0 m s⁻² west); F_net = 4800 N west. Crossed: "4800 N east, because it moves east". (A2, the lift trap) 50 kg crate on scales in a lift moving down and slowing at 1.5 m s⁻²: acceleration up; N = 50(9.8 + 1.5) = 565 N. Crossed: "415 N, because the lift is moving down". Both test "direction of the acceleration, not of the motion".
- **Mistake scene:** none separate. "A moving object must have a forward net force" (hook; 3 crossed; A1 crossed); "you put the applied force into F = ma" (2: the net arrow is built from both forces); "N always equals mg" (4, 5; A2 crossed; logged site correction kept); "moving down means a smaller reading" (A2 crossed); "constant speed means no acceleration" (6).
- **Handoff (route next).** The crate on the scales in the lift: the normal force arrow up on the crate; on "push back" a matching arrow appears down on the scales (dashed, grey, unlabelled size); chip "Next: If forces come in equal and opposite pairs, why does anything move?". This is the video's last frame.
- **Site sources used:** opening (speeds up, friction wins and it slows, changes direction); hook and card 3 (the lift effect, rebuilt with a crate); warm-up and `we-1` (numbers unchanged); key terms (net force; acceleration always along the net force); card 1 (two steps: add every force, then F_net = ma; balanced against unbalanced); card 2 (sign convention); misconceptions (both); short-answer Q2 (70 kg, 2.0 m s⁻², 826 N, 686 N; used as the worked lift); Q3's idea (zero velocity is not zero acceleration) is not used (projectiles are later). Not used: the quick check (10 N, 4 N, 2.0 kg; same structure as `we-1`), activity (1200 kg car, 4200 N and 1800 N; same structure), Q1 (sled, same structure).
- **Site errors found (quoted from site lesson 15, read 2 Nov; for `../site-corrections-phys-y11.md`; not logged yet):**
  1. Card 2: "Newton's second law, from the NESA formula sheet, is: F_net = ma". This should be checked against the 2025 Physics reference sheet before it is claimed (the 2025 syllabus states the content point with vectors, F⃗net = ma⃗). Suggest: "Newton's second law (Physics 11-12 syllabus): F⃗net = ma⃗" unless the 2025 formula sheet is confirmed. (Codex to confirm; this design does not mention a formula sheet.)
  2. Card 3 (direction, mass and the lift effect) text is cut off: "When the lift accelerates downward, $N = m(g - a) In a lift accelerating upward, ..." The sentence runs into the summary box without closing, so the downward case and its comparison with mg are missing from the page. Suggest restoring: "When the lift accelerates downward, N = m(g − a), less than mg, so the scales read less than your weight."
  3. Card 3: "Stand on scales in a lift." and the hook "your bathroom scales briefly read more than your real weight". Bathroom scales are calibrated in kilograms; the reading in newtons is the normal force only for scales that read force. Suggest: "the scales (reading force in newtons) measure the normal force". Minor.
  - Checked and correct: `we-1` (12 N, 3.0 m s⁻²); quick check (3.0 m s⁻²); activity (2400 N, 2.0 m s⁻²); Q1 (18 N, 3.0 m s⁻²); Q2 (826 N; 686 N at rest); Q3 reasoning.
  - Already logged and not repeated: lesson 12's friction wording (this design says "friction from the floor acts backward" for a crate sliding forward over a stationary floor, which meets the logged condition).
- **Pack questions answered:** `we-1` used unchanged and extended to the slowing case; pack candidate 1 (2.0 kg moving east, 3.0 m s⁻² west) replaced by A1, the same idea with v09's kinematics and a car (richer, and the direction trap is the same); pack candidate 2 (3.0 kg turning, 2.0 m s⁻² north) used as the teaching case in scene 6 with the site's 1200 kg car and a stated inward acceleration. Pack refinement adopted.
- **Cause chain taught, in order:** (1) a sliding crate: which way is the net force? (hook); (2) speeding up: net force and velocity the same way (2); (3) slowing: friction alone, net force backward while the velocity is forward; the net force sets the change, not the motion (3); (4) lift: the support force changes so the net force matches the acceleration; weight unchanged (4); (5) N − mg = ma for up and down accelerations (5); (6) turning: a change of direction is acceleration toward the inside; the net force (tyre friction) points inward (6); (7) four-step method and memory aid (7).
- **Entry knowledge (route `entryKnowledge`):** v15 (the law holds within uncertainty); v14 (F_net = ma, W = mg); v13 (constant velocity, zero net force); v12 (free-body diagrams); v06 (Δv for a change of direction, used in scene 6); v09 (a = (v − u)/t, used in A1).
- **Learner-visible vocabulary (plain meaning at first use):** normal force (recalled: the upward push of a surface, here the scales' push on the crate, 4); support force (said as the normal force, 4); kinetic friction (said as "friction from the floor while it slides", 3; the term itself is not used); inward, inside of the bend (6).
- **Legacy logic ported:** none.
- **New explainer motion (coded unless a plate is named):** **crate run** (one continuous run driven by the force-driven helper from v13: push phase then slide phase, the push arrow removed at a cue, the net and acceleration arrows flipping at that frame, the velocity arrow shrinking to zero; author note a); **lift ride** (the lift car plate moves along a coded shaft through four phases with the crate on the scales inside; the scales' coded readout and the normal arrow length follow N = m(g + a); a small velocity-time strip beside the shaft draws the trip's v-t; author note b); **bend** (top view: the car-top plate follows a circular arc at constant speed; two velocity arrows captured at two instants slide to a common tail and the dashed orange change arrow appears between their tips, pointing inward; a friction arrow at the tyres points inward; author note c); free-body panel; `AlignedAlgebra`; `Countdown`; `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout (constant):** heading top-left; the scene (floor strip, shaft or bend) in the left two-thirds; the free-body panel and working in the right third. At most three bright text items.
- **No human figures.** The site's person in the lift is a crate; the push on the crate is a coded arrow.
- **Author notes (not learner copy):**
  (a) Crate run: m = 4.0 kg; push 20 N for 2.0 s from rest, friction 8.0 N: a = 3.0 m s⁻², v(2.0) = 6.0 m s⁻¹, s = 6.0 m. Push removed: a = −2.0 m s⁻², stops after 3.0 s more, s = 9.0 m more. Screen scale chosen so the whole run (15 m) fits two strip widths with a camera pan. Kinetic friction taken as constant 8.0 N while sliding.
  (b) Lift ride (up positive, g = 9.8): at rest N = 686 N; speeding up a = +2.0, N = 826 N; steady N = 686 N; slowing a = −2.0, N = 546 N; at rest again 686 N. Phase durations on screen about 2 s each (the trip's speeds not stated). The weight arrow stays 686 N throughout.
  (c) Bend: speed constant (not stated); inward acceleration 3.0 m s⁻² given; F_net = 1200 × 3.0 = 3600 N toward the centre of the bend. The Δv construction uses two instants about 30° apart; the change arrow points toward the centre (at the midpoint of the arc), which is exactly the direction of the average acceleration over that interval.
  (d) A1: a = (0 − 20) ÷ 5.0 = −4.0 m s⁻²; F_net = 1200 × 4.0 = 4800 N west. A2: a = +1.5 m s⁻² (up); N = 50 × (9.8 + 1.5) = 565 N; weight 490 N; crossed 50 × (9.8 − 1.5) = 415 N.
  (e) Pronunciations: "four point oh kilogram"; "eight point oh newtons"; "three point oh metres per second squared"; "minus two point oh"; "six hundred and eighty six newtons"; "eight hundred and twenty six newtons"; "five hundred and forty six newtons"; "N minus m g equals m a"; "three thousand six hundred newtons"; "five hundred and sixty five newtons".

Main question: *A crate slides forward with nothing pushing it. Which way is the net force on it? How do we find the forces on an object that is speeding up, slowing down or turning?*
Entry knowledge (v15 and v14: F_net = ma, W = mg; v13; v12 free-body diagrams; v06 Δv; v09 a = (v − u)/t).
Stops after: the acceleration and the net force point along the change in velocity; speeding up, slowing down and turning cases; signed horizontal problems; N − mg = ma in a lift; an inward net force for turning, with its source; a four-step method.
Handoff: v17, Newton's third law.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key as Decisions.

### 1. hook (which way is the net force?)
> Last video ended with this crate sliding along the floor. It was given a push, and now nothing's pushing it, but it's still moving forward. So which way is the net force on it right now? Forward, backward, or zero? **Predict**.

Visual: opens on v15's last frame (the sliding crate with its teal velocity arrow, the lift and bend thumbnails, the turned "F_net = m a"). The chip becomes the heading: "Forces on accelerating objects". The thumbnails shrink to a row at the top right (they return in 4 and 6). On "nothing's pushing it" a ghost push arrow fades off the crate's left side; the crate keeps sliding, slowly losing speed (author note a, slide phase, slowed to half rate so the slowing is gentle). On "Predict" chips "forward", "backward", "zero" and a 3-second countdown ring; the crate freezes mid-slide.

### 2. speeding up
> Let's rewind to the push. The crate has a mass of four point oh kilograms. A push of twenty newtons acts forward, and friction from the floor acts backward, with eight point oh newtons. Take forward as positive. The net force is twenty minus eight point oh, which is twelve newtons **forward**. So the acceleration is twelve divided by four point oh, three point oh metres per second squared, forward. The velocity and the acceleration point the same way, so the crate speeds **up**.

Visual: a rewind sweep returns the crate to rest at the left of the floor strip. Calculation layout: task strip "Find the acceleration while the push acts"; givens (navy): "m = 4.0 kg; push = 20 N forward; friction = 8.0 N backward"; grey tag "site data"; sign key "forward = +". The push arrow "20 N" draws into the crate's left side; the friction arrow "8.0 N" draws backward at the floor contact. Free-body panel: dot with both arrows. On "forward" row "F_net = 20 − 8.0 = 12 N forward" and the double-shaft "F_net 12 N" builds from the two arrows (the friction arrow's ghost slides onto the push arrow's tip and cuts it). Row "a = 12 ÷ 4.0 = 3.0 m/s² forward" (boxed). On "speeds up" the crate runs the push phase (2.0 s): teal velocity arrow grows, orange acceleration arrow above it points forward; a tag "same direction: speeding up".

### 3. slowing down
> Now the push stops. The crate is still sliding forward, so friction still acts backward, eight point oh newtons. It's the only horizontal force left, so it's the net force. The acceleration is minus eight point oh over four point oh, minus two point oh metres per second squared. The crate loses two metres per second, every second, until it **stops**. So the answer is backward. The net force points against the motion, and that's exactly why the crate slows down. A moving object doesn't need a forward net force. The net force sets how the velocity changes, not which way it **points**.

Visual: camera continue (same run, author note a). On "push stops" the push arrow vanishes; at that frame the "F_net" arrow flips to point backward ("8.0 N") and the orange acceleration arrow flips backward with it, while the teal velocity arrow still points forward. Row "F_net = −8.0 N (friction only)"; row "a = −8.0 ÷ 4.0 = −2.0 m/s²" (boxed). On "stops" the slide phase runs: the velocity arrow shrinks steadily to nothing and a readout ticks "6.0, 4.0, 2.0, 0 m/s" once per second; when the crate stops, friction, net and acceleration arrows all vanish (tag "at rest: no sliding, no friction"). On "backward" the hook chip "backward" glows. On "doesn't need a forward net force" a chip "moving forward needs a forward net force" fades in and takes a red scribble cross. On "points" the boxed tag "net force: along the change in velocity" writes.

### 4. a vertical case: the lift
> Now a vertical case. A seventy kilogram crate sits on scales in a lift, and the scales measure the upward push on the crate, the normal force. Watch the reading during one trip up. At rest, it reads six hundred and eighty six newtons, the crate's weight, m g. As the lift starts upward and speeds up, the reading **rises**. At a steady speed in the middle of the trip, it drops back to the weight. Near the top, as the lift slows, it reads less than the **weight**. The weight never changed. The normal force changed, because the net force has to point the way the crate accelerates.

Visual: clear change: a coded vertical shaft with the lift car plate (`y11p-lift-car-v1.png`, cutaway side view) at the bottom; inside, the platform scales plate (`y11p-platform-scales-v1.png`) with the crate plate on it; a coded display on the scales "686 N". Beside the shaft, the crate's free-body dot: weight "W = 686 N" down (fixed length), normal "N" up. On "rises" the lift moves up, speeding up: an orange acceleration arrow "up" appears beside the shaft, the normal arrow lengthens and the display climbs to "826 N"; a small velocity-time strip draws a rising line. On "drops back" (steady phase) the acceleration arrow vanishes, the display returns to "686 N", the normal and weight arrows show equal ticks and the v-t strip draws flat. On "weight" (slowing phase) the acceleration arrow appears pointing down, the normal arrow shortens and the display falls to "546 N", the v-t strip draws a falling line; the lift stops at the top and the display returns to "686 N". On "never changed" the weight arrow glows (unchanged length); on "normal force changed" the normal arrow glows.

### 5. worked example: the lift
> Let's calculate the first part. The lift accelerates upward at two point oh metres per second squared. Take up as positive. Two forces act on the crate, the normal force up, and the weight down. So the net force is N minus m g, and that equals m **a**. So N equals m, times g plus a. That's seventy times eleven point eight, eight hundred and twenty six **newtons**. Near the top, the acceleration is two point oh downward, so N is seventy times seven point eight, five hundred and forty six newtons. Same weight, different support **force**.

Visual: camera continue: the lift paused in its speeding-up phase. Task strip "Find the scale reading while the lift speeds up"; givens (navy): "m = 70 kg; a = 2.0 m/s² upward; g = 9.8 m/s²"; grey tag "site data"; sign key "up = +". Free-body dot: N up, W = mg down. Equation chip "F_net = m a". On "a" row "N − mg = ma". Row "N = m(g + a)"; on "newtons" row "N = 70 × (9.8 + 2.0) = 70 × 11.8 = 826 N" (boxed; the display shows "826 N"). On "Near the top" the lift jumps to its slowing phase; row "a = −2.0 m/s²: N = 70 × (9.8 − 2.0) = 546 N" (the display shows "546 N"). On "force" the three readings line up as chips: "speeding up: 826 N", "steady: 686 N", "slowing: 546 N", with "W = 686 N" fixed beneath them.

### 6. a falling crate and air resistance
> Here's a vertical case with no support. A drone drops a five point oh kilogram crate. Its weight is m g, forty nine newtons, down. As it falls faster, air resistance pushes up on it harder. At one moment, the air resistance is nineteen newtons. The net force is forty nine minus nineteen, thirty newtons down, so the acceleration is thirty over five point oh, six point oh metres per second squared, **down**. That's less than g, because air resistance cancels part of the weight. As the crate speeds up, the air resistance keeps growing, so the acceleration shrinks. When the air resistance reaches forty nine newtons, the net force is zero, and the crate falls at a constant velocity, called its terminal **velocity**.

Visual: clear change: a tall coded sky strip; the drone side-view plate (`y11p-drone-side-v1.png`, v13 request) hovers at the top and releases the crate plate (tag "5.0 kg") on "drops" (a coded release latch opens; no hands). The crate falls with a teal velocity arrow growing; its free-body dot in the right third: weight "W = mg = 49 N" down (fixed), air resistance up, growing with the speed (author note f). Task strip "Find the acceleration when air resistance is 19 N"; givens (navy): "m = 5.0 kg; g = 9.8 m/s²; air resistance 19 N up"; sign key "down = +". At "nineteen newtons" the fall freezes for one beat: rows "W = 5.0 × 9.8 = 49 N"; "F_net = 49 − 19 = 30 N down"; on "down" "a = 30 ÷ 5.0 = 6.0 m/s² down" (boxed), orange acceleration arrow down, shorter than a ghost "g = 9.8 m/s²" arrow beside it. On "less than g" the ghost and the real acceleration arrows glow together. On "keeps growing" the fall resumes: the air resistance arrow lengthens, the acceleration arrow shrinks, and a small velocity-time strip draws a curve that flattens. On "velocity" the air resistance arrow reaches the weight's length (equal ticks), "F_net = 0", the acceleration arrow vanishes, the velocity arrow stops growing and the strip runs flat; tag "terminal velocity: balanced, so constant (v13)".

### 7. turning
> An object can accelerate without changing speed. A car rounds a bend at a steady speed. Its direction changes, so its velocity changes, and the change points toward the inside of the bend. So the acceleration points inward, and so must the net force. Here, it comes from friction between the road and the tyres, pushing sideways toward the inside. If the twelve hundred kilogram car's acceleration toward the inside is three point oh metres per second squared, the net force is twelve hundred times three point oh, three thousand six hundred newtons, **inward**. On ice, friction can't supply that much, so the car carries on straighter, just as the first law **predicts**.

Visual: clear change: top view of a coded road bend (an arc); the car-top plate (`y11p-car-top-yellow-v1.png`) drives along it at constant speed, a speed readout fixed at one value (no number spoken; display "steady"). On "Its direction changes" two teal velocity arrows are captured at two instants about 30° apart (ghost copies); on "the change points" they slide to a common tail and a dashed orange change arrow appears from the first tip to the second, pointing toward the inside of the bend (v06 chip "Δv", grey). On "acceleration points inward" a solid orange acceleration arrow appears on the car pointing to the centre; on "so must the net force" a double-shaft "F_net" arrow joins it. On "friction between the road and the tyres" a coded contact patch glows at the tyres and a friction arrow points inward from it. Task row (small): "m = 1200 kg; a = 3.0 m/s² toward the inside (given)"; on "inward" row "F_net = 1200 × 3.0 = 3600 N inward" (boxed). On "On ice" the road tint turns pale blue, the friction arrow shrinks, and a ghost car drifts off along a straighter, wider path (tag "less friction: smaller inward force"); on "predicts" a v13 chip "no net force: straight line" (grey).

### 8. the method and a line to keep
> So here's the method for any accelerating object. Work out which way the velocity is changing. That's the direction of the acceleration, and the net force points the same way. Find its size from m times a. Then use the free body diagram to find the unknown force. And here's a line to keep. Force follows the change, not the **motion**.

Visual: board clears to three small thumbnails in a row (the slowing crate, the lift slowing, the bend), each with its teal velocity arrow and its orange acceleration arrow. The four steps write one per clause in the right third: "1 Which way is the velocity changing?", "2 a and F_net point that way", "3 size: F_net = m a", "4 free-body diagram → unknown force". On each step the matching part glows on the thumbnails (step 2: the acceleration arrows; step 3: the "12 N", "826 N", "3600 N" chips; step 4: the friction and normal arrows). On "motion" the handwritten line writes large: "Force follows the change, not the motion." Hold about 2 seconds.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. A twelve hundred kilogram car travelling east at twenty metres per second brakes uniformly to rest in five point oh seconds. Find the size and direction of the net force on the car. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Physics"), worded as printed: "A 1200 kg car travelling east at 20 m s⁻¹ brakes uniformly and comes to rest in 5.0 s. Determine the magnitude and direction of the net force on the car while it brakes. (3 marks)" Tag: "HSC-style question, written for HSCScience". Beside it the yellow car plate (`b4-car-yellow-v1.png`) on a short coded road with a compass "E →"; no arrows. The full question stays on screen. Countdown ring for 10 seconds after "Pause here to answer." Nothing answer-bearing.

### 10. feedback 1 (brief)
> The acceleration is nought minus twenty, over five point oh, minus four point oh metres per second squared, so four point oh to the **west**. The net force is twelve hundred times four point oh, four thousand eight hundred newtons, **west**. Saying east, because the car moves east, mixes up the motion with the change. The car is slowing, so the net force points **backward**.

Visual: card shrinks to the top; "east at 20 m s⁻¹", "to rest" and "5.0 s" underlined. Sign key "east = +". Row "a = (0 − 20) ÷ 5.0 = −4.0 m/s²" and on "west" an orange acceleration arrow pointing west above the car while its teal velocity arrow points east. Row "F_net = 1200 × 4.0 = 4800 N" and on "west" (second) boxed "4800 N west". On "backward" a chip "4800 N east: it moves east" fades in and takes a red scribble cross; the memory line flashes small. Hold about 1 second.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. A fifty kilogram crate rests on scales in a lift that's moving downward. As it nears the ground floor, the lift slows down at one point five metres per second squared. Taking g as nine point eight, find the scale reading. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A 50 kg crate rests on a set of scales that measure force, on the floor of a lift. The lift is moving downward and slowing down at 1.5 m s⁻² as it approaches the ground floor. Taking g = 9.8 m s⁻², determine the reading on the scales. (3 marks)" Tag: "HSC-style question, written for HSCScience". Beside it the lift car plate in a short coded shaft with the crate on the scales, a small "down" motion tag (the word only, no arrow). The full question stays on screen. Countdown ring for 10 seconds after "Pause here to answer."

### 12. feedback 2 (brief)
> Moving down and slowing means the acceleration points **up**. So the normal force must be bigger than the weight. Taking up as positive, N minus m g equals m a, so N is fifty, times nine point eight plus one point five. That's five hundred and sixty five **newtons**. The classic trap is subtracting because the lift moves down, which gives four hundred and fifteen. The motion's direction doesn't matter. The acceleration's **does**.

Visual: card shrinks; "moving downward and slowing down" underlined. On "up" a teal velocity arrow pointing down beside the lift and an orange acceleration arrow pointing up (tag "slowing: a opposite to v"). Free-body dot: N up, W = 490 N down; sign key "up = +". Row "N − mg = ma, a = +1.5 m/s²"; on "newtons" row "N = 50 × (9.8 + 1.5) = 565 N" (boxed). On "does" a chip "N = 50 × (9.8 − 1.5) = 415 N" fades in and takes a red scribble cross (caption "it moves down, so less"). Hold about 1 second.

### 13. handoff
> Every force today came from something pushing on something else. The scales pushed up on the crate. So does the crate push back on the scales? And if forces always come in pairs, why does anything move at **all**?

Visual: the memory line returns small at the top. The lift and crate return large and still: the normal arrow up on the crate, labelled "scales on crate". On "push back" a matching dashed grey arrow appears pointing down on the scales, unlabelled in size (tag "crate on scales?"). On "pairs" the two arrows glow together; on "all" the chip "Next: If forces come in equal and opposite pairs, why does anything move?". This is the final frame (the key notes cross-fade back to it). Hold about 2 seconds.

### 14. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. The acceleration, and so the net force, points along the change in velocity: with the velocity when speeding up, against it when slowing down, toward the inside of a bend when turning.
2. Method: choose a positive direction; draw the free-body diagram; F_net (the sum of all forces, with signs) = ma; solve for the unknown force.
3. Lift (up positive): N − mg = ma. Acceleration up (speeding up going up, or slowing going down): N > mg. Acceleration down: N < mg. Constant velocity: N = mg.
4. Turning at a steady speed is still acceleration, toward the inside of the bend; it needs an inward net force (for a car, sideways friction on the tyres).

Memory aid (large, on the notes screen): *Force follows the change, not the motion.*

## Teaching checks

- **Does it explain causes?** Why the crate speeds up: the net force points along the velocity (2). Why it slows: the only force left points against the velocity (3, shown with the arrows flipping at the moment the push stops). Why the scale reading changes: the net force must match the acceleration, so the support force adjusts while the weight stays fixed (4, live readout). Why moving down and slowing gives a bigger reading: the acceleration points up (11). Why a steady-speed turn needs a force: the direction change is a velocity change pointing inward (6, Δv construction). Why a car slides wide on ice: not enough inward friction, so it moves straighter (6).
- **Worked-example rule:** each worked case has its task strip, grouped givens with units, sign key, free-body dot and one row per cue; results kept: scene 5 lines up the three lift readings only (the earlier crate values are gone).
- **Misconceptions addressed:** "a moving object needs a forward net force" (1, 3 crossed, 9 crossed); "use the applied force" (2, net arrow built from both); "N always equals mg" (4, 5); "moving down means a smaller reading" (11 crossed); "steady speed means no acceleration" (6).
- **One idea at a time:** speeding up (2), slowing (3), vertical (4, 5), turning (6), method (7).
- **Video makes it easier:** the student watches the net and acceleration arrows flip while the velocity arrow keeps pointing forward (3), watches a scale readout change through a lift ride with a fixed weight arrow (4), and watches the velocity arrows' difference point inward on a bend (6).
- **Response opportunity:** a 3 s prediction (1, answered in 3); two unseen HSC-style tasks, every condition on the card (A1: mass, initial velocity and direction, uniform braking, time; A2: mass, scales that measure force, moving down, slowing, acceleration size, g), 10 s each with "Pause here to answer.", no arrows on either card (A2's "down" is a word naming the motion, which is part of the question). Feedback about 29 s and 33 s (open decision 3).
- **Avoided double teaching:** F_net = ma and W = mg (v14), the first law (v13), free-body diagrams (v12), Δv on a bend (v06) and a = (v − u)/t (v09) are used with one line each.
- **Syllabus coverage:** `ci014d8672`: forces on accelerating objects analysed when speeding up (2), slowing (3), accelerating vertically (4, 5) and turning (6). `cidf22083b`: problems solved with F⃗net = ma⃗ in one dimension with signs (2, 3, 5, A1, A2) and for an inward acceleration (6).
- **Out of scope by design:** the size of a turning acceleration (given, not derived); third-law pairs (v17); connected bodies (v18); friction coefficients; inclines.

## Practice questions and model answers

Each attempt ends with "Pause here to answer." and a 10 second countdown; the card and every demand stay on screen. Marks appear on the card; the narration does not read them. Every card carries "HSC-style question, written for HSCScience".

**Attempt 1 (scene 8; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "A 1200 kg car travelling east at 20 m s⁻¹ brakes uniformly and comes to rest in 5.0 s. Determine the magnitude and direction of the net force on the car while it brakes."
Model answer: Taking east as positive, a = (v − u)/t = (0 − 20) ÷ 5.0 = −4.0 m s⁻², that is 4.0 m s⁻² west (1 mark). F_net = ma = 1200 × (−4.0) = −4800 N (1 mark), so the net force is 4800 N west, opposite to the motion, because the car is slowing (1 mark). Classic mistake (crossed): "4800 N east, because the car moves east".

**Attempt 2 (scene 10; original wording, HSC style, 3 marks suggested).** "A 50 kg crate rests on a set of scales that measure force, on the floor of a lift. The lift is moving downward and slowing down at 1.5 m s⁻² as it approaches the ground floor. Taking g = 9.8 m s⁻², determine the reading on the scales."
Model answer: Moving down and slowing means the acceleration is upward, 1.5 m s⁻² (1 mark). Taking up as positive, N − mg = ma (1 mark), so N = m(g + a) = 50 × (9.8 + 1.5) = 565 N (1 mark); more than the weight, 490 N. Classic mistake (crossed): "415 N" (50 × (9.8 − 1.5), using the direction of motion instead of the acceleration).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Worked 1 (site we-1) | 4.0 kg; 20 N; 8.0 N; F_net 12 N; a 3.0 m s⁻² | 2, 7 |
| Slowing | F_net −8.0 N; a −2.0 m s⁻²; readout 6.0, 4.0, 2.0, 0 m s⁻¹ | 3 |
| Lift (site Q2) | 70 kg; g 9.8; a ±2.0 m s⁻²; N 686, 826, 686, 546 N; 11.8, 7.8 | 4, 5, 7 |
| Turning | 1200 kg; 3.0 m s⁻² inward (given); 3600 N | 6, 7 |
| A1 | 1200 kg; 20 m s⁻¹ to 0 in 5.0 s; a −4.0 m s⁻²; 4800 N west | 8, 9 |
| A2 | 50 kg; 1.5 m s⁻² up; 565 N; weight 490 N; crossed 415 N | 10, 11 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (2 Nov); Codex to re-check.

- 20 − 8.0 = 12; 12 ÷ 4.0 = 3.0; 3.0 × 2.0 = 6.0; ½ × 3.0 × 2.0² = 6.0; −8.0 ÷ 4.0 = −2.0; 6.0 ÷ 2.0 = 3.0 s; 6.0 × 3.0 − ½ × 2.0 × 3.0² = 9.0.
- 70 × 9.8 = 686; 70 × 11.8 = 826; 70 × 7.8 = 546.
- 1200 × 3.0 = 3600.
- (0 − 20) ÷ 5.0 = −4.0; 1200 × 4.0 = 4800.
- 50 × 9.8 = 490; 50 × 11.3 = 565; 50 × 8.3 = 415.

## Memory aid check

- **"Force follows the change, not the motion."** Written for this lesson. Meaning: the net force on an object points in the direction of its change in velocity (its acceleration), not necessarily the direction it is moving. Assumptions checked: "force" means the net force (step 2 on screen says "a and F_net"); "the change" means the change in velocity over a short time (v06's Δv, which has the acceleration's direction); valid for Newtonian motion in an inertial frame (author note only). It helps a new case: A1 (moving east, slowing: force west) and A2 (moving down, slowing: force up) are solved by asking which way the velocity is changing. It directly blocks the site's misconception 2. Introduced after all three cases (2 to 6).
- **Considered, not used:** "The net force points where the object is going to be" (false for slowing); a "lift up = heavier" rule (true only for upward acceleration, and it causes A2's trap).

## Narration length estimate

Revision 1 count (2 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **XXXX characters**, 13 scenes.

## Scene list and build ids

Lesson key `p-y11-v16` (route phys-y11-fa1-v16). Suggested explainer folder `src/explainer/lessons/phys-y11-fa1-v16` and build folder `docs/production/claude-pm/lessons/p-y11-v16` (root to confirm).

In order (kebab-case; 13 scene headings, all `### N.`): hook, speeding-up, slowing-down, lift-ride, worked-lift, turning, method-memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`: the learner copies four notes). Transitions (`pickTransition`): v15's last frame continues into scene 1 (camera continue: the crate keeps sliding); 1 to 2 camera continue (rewind sweep); 2 to 3 camera continue (same run); 3 to 4 clear change (lift); 4 to 5 camera continue (same lift); 5 to 6 clear change (bend); 6 to 7 camera pull back to the thumbnails; attempts and feedback card shrink to the top; 11 to 12 board clear; 12 to 13 fade to the notes board, and the notes cross-fade back to scene 12's frame at the end.

Holds: hook (3 s prediction countdown inside the scene), attempt-1, attempt-2 (10 s countdowns after the speech); key-notes quiet hold (about 60 s, standard line, reuse take); 1 s at the end of 9 and 11; 2 s at the end of 7 and 12. Review evidence paths: `learning_review` = `checks/p-y11-v16-learning-review.md`, `science_check` = `checks/p-y11-v16-physics-check.md` (root to confirm names).

## Assets

Have (inspected 2 Nov; uniform scale only, never stretched):
- `public/assets/biology/b4-car-yellow-v1.png` (1600 × 800, side view facing right): A1 card (8, 9).

Requested elsewhere (not yet painted; shared requests, no duplicate):
- `y11p-wooden-crate-v1.png` (v13): scenes 1 to 5, 7, 10 to 12. Essential.

Need (new plates, Codex), in priority order:
1. `y11p-lift-car-v1.png`: scenes 4, 5, 7, 10 to 12; also v15's handoff thumbnail. Essential.
2. `y11p-platform-scales-v1.png`: scenes 4, 5, 10 to 12. Essential.
3. `y11p-car-top-yellow-v1.png`: scenes 6, 7. Essential (the turning case); fallback: the yellow side-view car can't show a bend, so the fallback is a coded top-view outline, which the owner rules discourage; paint it.

Coded: floor strip, shaft, road bend, ice tint, all arrows (course force style; teal velocity; orange acceleration and dashed orange change arrow), contact patches, the scales' display digits, the velocity-time strip, free-body panel, readouts, `AlignedAlgebra`, `Countdown`, `QuestionCard`, `Chip` with `cross`, `KeyNotes`. Kit: v13's force arrow style and force-driven motion helper drive the crate run and the lift ride, so arrows, readouts and motion agree; a **velocity-difference helper** (capture two velocity vectors at two times, slide to a common tail, draw the difference) for scene 6, which v06 may already have built (reuse if so).

## Codex asset brief

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; design `docs/production/claude-pm/lessons/phys-y11-fa1-v16.md`. Paint after the learning review, physics check and error check pass and the owner gives the go-ahead. Every plate: transparent PNG with a true alpha channel, clean edges with no coloured fringe or halo (check on black and white), ink and watercolour in the house style matched to `public/assets/biology/b4-car-yellow-v1.png`, at least 8 per cent clear margin, no text, labels, numbers, brand names, people, hands, faces, backdrop, glow or ground shadow. Keep the native aspect; never stretch.

1. `y11p-lift-car-v1.png` (1400 × 2000 px): a lift car in cutaway side view: a plain metal box with its near wall removed so the interior floor is visible and flat, a thick cable rising from the centre of its roof (ending at the top margin), simple guide shoes on one side; the floor wide enough for the crate on platform scales (crate about one third of the car's width); no buttons, signs or people.
2. `y11p-platform-scales-v1.png` (1400 × 500 px): a low platform scale in exact side view: a flat rectangular platform on a thin base with a small blank dark display window on its front edge (no digits; the reading is coded), flat top so the crate sits on it.
3. `y11p-car-top-yellow-v1.png` (1000 × 1800 px): the yellow car of `b4-car-yellow-v1.png` seen from directly above, front at the top, same colour and finish; four wheel edges just visible; symmetric; no markings.

Report inspection at about 300 px and 600 px wide on the dark board, including a composed test (crate on the scales inside the lift car) to confirm scale and seating, and the top-view car beside the side-view car to confirm the colour match. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/p-y11-v16-provenance.json`.

## Codex error-check brief

Error-only (report errors; do not restyle or rewrite). Report to `docs/production/claude-pm/checks/` (root names the check).
1. Re-check every value under "Numbers to verify", and every value in the narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the crate run and lift ride follow author notes a and b (arrows flip at the frame the push stops; the scale display and the normal arrow follow N = m(g + a); the weight arrow never changes).
3. Physics: a and F_net along the change in velocity; kinetic friction on the sliding crate opposes its sliding over the stationary floor; N − mg = ma in a lift; moving down and slowing means an upward acceleration; turning at constant speed is an acceleration toward the inside of the bend, supplied for a car by sideways friction on the tyres; the Δv construction direction (author note c).
4. Site errors 1 to 3 under Decisions: confirm each (item 1: whether the 2025 Physics reference sheet includes F_net = ma; item 2: the truncated sentence on the live page).
5. Confirm both attempt questions are original in wording, carry every needed condition (A1 uniform braking and direction; A2 scales that measure force, moving down, slowing, g), show no force or acceleration arrows, and do not closely paraphrase a NESA Physics question (search "lift", "scales", "brakes uniformly").
6. Confirm the two content-point quotes match the route JSON and `docs/production/programme/syllabus/phys-new-y11.json` exactly (P25-FA1-G3-06 `ci014d8672`, P25-FA1-G3-07 `cidf22083b`), and no 2017-syllabus label appears.
7. Confirm no em dash (U+2014) anywhere in this file; Australian spelling; YouTube title 100 characters or fewer.
8. Confirm the narration character count and per-scene counts by script with the build parser rules.
9. Add site errors 1 to 3 under Decisions to `../site-corrections-phys-y11.md` (owner record only).

## YouTube metadata (draft)

Title: Forces on Accelerating Objects: Speeding Up, Slowing Down, Lifts and Bends | Year 11 Physics

(Title length: 92 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa1-fundamentals-of-mechanics/lesson15.sa.html

A crate slides forward with nothing pushing it. Which way is the net force? Backward. Find out why the net force follows the change in velocity, not the motion: a pushed crate speeds up, a sliding crate slows, a crate on scales in a lift reads more or less than its weight, and a car on a bend accelerates inward even at a steady speed. Learn a four-step method for any accelerating object and solve problems with F_net = ma, including the classic lift trap. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Year 11 Physics (2025 syllabus), Focus Area 1: Fundamentals of mechanics.
Syllabus content (NSW Physics 11-12, 2025):
"Analyse the forces acting on an accelerating object" (ci014d8672)
"Solve problems involving Newton’s second law of motion using F⃗net = ma⃗" (cidf22083b)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

Builds on: Investigating force, mass and acceleration (previous video). Next: Newton's third law.

#Year11Physics #Physics #NewtonsLaws #HSCScience

## Open decisions

- **1. Turning without v²/r (root).** The turning case gives the inward acceleration (3.0 m s⁻²) rather than deriving it. Root to confirm that the 2025 Year 11 content used here has no uniform circular motion point (none found in FA1's "Forces and motion" group); if a later video owns circular motion, scene 6 stays qualitative plus one multiplication, as written.
- **2. Crate wording for the site's box and person.** "Crate" replaces the site's "box" (same object, the v13 plate) and the site's person on scales (no people). No numbers change.
- **3. Feedback 2 length.** About 33 s with its hold (the trap needs both the setup and the crossed value). If the learning review wants it under 30 s, cut "So the normal force must be bigger than the weight." (about 4 s); the arrows carry it.
- **4. Force colour.** As v13 open decision 3.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v14 and v15: does the arrow flip at the moment the push stops make "backward" convincing; does the live scale readout make N ≠ mg feel caused; is the Δv construction on the bend recognised from v06 and does it justify an inward force; does the four-step method read as a summary rather than new content; do the cards give nothing away), then the Codex physics check and error check.
- The crate run (2, 3), the lift ride (4) and the bend (6) carry the explanation; judge them at playback speed. All arrows, readouts and motion come from the force-driven helper.
