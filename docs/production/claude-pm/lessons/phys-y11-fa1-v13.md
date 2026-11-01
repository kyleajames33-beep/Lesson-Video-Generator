# Year 11 Physics FA1 V13: Why does an object keep the same velocity when the forces on it balance? Newton's first law, inertia and equilibrium for stationary and constant-velocity objects (design)

Status: Revision 1 (2 Nov). Needs independent student learning review (`docs/production/student-learning-review.md`, key `p-y11-v13`), a Codex physics check and a Codex error check before build. Voice: Google AI Studio, after the brief 124 pilot (physics follows Year 12 Maths and Year 11 Biology). Nothing recorded; human listening pending. Plates: two reused car plates; the sledge (v11 and v12 request) and the dynamics trolley (v09 request); two new plates (see Assets).

Narration 5,634 characters, 15 scenes, about 524 s (8.7 minutes) including one 3 s prediction countdown, two 10 s attempt countdowns and the notes hold, counted by script with the build parser rules (see "Narration length estimate").

Scope: thirteenth video of Year 11 Physics (2025), Focus Area 1, and the first of the Newton's laws videos. Templates: `phys-y11-fa1-v08.md` and `phys-y11-fa1-v05.md` (physics format, colour and readout system), `math-a12-d10.md` (section list; calculation layout: task, equation, grouped givens, result lines on cues) and `bio-y11-fa1-v05.md` (painted objects at native aspect, no people). Route entry **phys-y11-fa1-v13** in `../../phys-y11-video-route.json` (route-approved by root 1 Nov; playlist order 13; kind concept; main learner question rewritten by root). Pre-design pack `../pre-design/phys-y11/phys-y11-fa1-v13.md` (every number recalculated below). Site lesson read in full as text (2 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa1-fundamentals-of-mechanics/lesson13.sa.html` (orient, intentions and key terms, the law of inertia, equilibrium: two kinds of no change, apply, analysing constant-velocity motion, short-answer practice, retrieve). Lesson review key **p-y11-v13**. Course label: Year 11 Physics (2025 syllabus), Focus Area 1.

Owner rules applied: 2025 syllabus only; vectors, free-body arrows and readouts coded; cars, sledge, crate and drone are painted plates at native aspect, never stretched; no people, hands, faces or body outlines (pushes and pulls are coded arrows, ropes are coded lines); one reasoning stage at a time; worked examples as short task, equation and grouped givens with units, result lines on spoken cues; 3 s in-teaching prediction; "Pause here to answer." with a 10 s countdown and the full worded question on screen; brief feedback with one crossed mistake; original HSC-style questions; key-notes hold; Australian spelling; no em dashes; v12 recalled in one sentence, not re-taught.

Syllabus content points (Physics 11-12 (2025), Year 11, Focus Area 1, group "Forces and motion"; local ledger IDs with official CMS codenames), quoted from the route JSON `syllabusActions`:

- P25-FA1-G3-03 `cif576e4f9`: "Apply Newton’s first law of motion to stationary objects and objects moving with a constant velocity"
- P25-FA1-G3-04 `ci38b8f81e`: "Analyse the forces acting on an object moving with constant velocity"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

**Boundary.** Entry knowledge (route): Stage 5 Science and Mathematics (forces as pushes and pulls, friction, signed arithmetic, Pythagoras and right-triangle trigonometry) and phys-y11-fa1-v12 (free-body diagrams; resolving a force into components; adding components to find the net force). Start (route, pack refinement adopted): an isolated body and its net force from v12. Teaches: friction as the cause of everyday slowing; Newton's first law; inertia with mass; equilibrium as zero net force covering rest and constant velocity; why a cruising object needs a forward force (to cancel resistance, not to keep it moving); analysing constant-velocity forces horizontally and vertically, including an angled force by components; a stationary object's balanced forces. Stops (pack refinement adopted): at constant velocity when the net force is zero. Not taught: how much the velocity changes when forces don't balance (v14 owns a = F_net/m; scene 5 shows only the direction of change, qualitatively); static friction and its limit (named as "a later video" only; the route's friction videos own it); terminal velocity (site card 3 example; introduced in v16 as the end of an accelerating fall, author note e); third-law pairs (v17).

**Opening frame (assumption; v12 is designed in parallel).** v12's route `nextHandoff` reads "phys-y11-fa1-v13: How can I explain and apply newton's first law and equilibrium?" (the placeholder root has since rewritten as this video's question). This design assumes v12's last frame is an isolated-body free-body diagram whose arrows add to a zero net force, with a readout "F_net = 0" and a chip naming this video's question. V13 opens there: the diagram slides left and becomes the reference for the hook. If v12 ends on a different frame, only scene 1's first visual sentence changes (open decision 1).

## Decisions

- **Learner question kept (route, root wording).** "Why does an object keep the same velocity when the forces on it balance?" The answer, built in order: everyday slowing is caused by friction, and less friction means slower loss of speed, so with no friction nothing would change the velocity (2); a net force is what changes motion, which is Newton's first law, and the tendency to keep a velocity is inertia (3); zero net force therefore means an unchanging velocity, which can be zero (parked) or not (cruising): both are equilibrium (4); a cruising car needs a driving force only to cancel resistance (5); so constant-velocity and stationary problems are solved by making each direction's forces add to zero (6 to 8).
- **The hook (site hook, made into a choice).** v12's balanced free-body diagram, then two cars: the blue car parked at the kerb and the yellow car cruising at 100 km/h. "Which could that diagram belong to?" A 3 s prediction. The expected answer "the parked car" is the site's first misconception; scene 4 answers "both".
- **The cause made visible (owner quality bar).** Scene 2: the same wooden crate is launched at the same speed across three coded surfaces (carpet, smooth bench, ice). Its friction arrow is long, shorter, then tiny, and its teal velocity arrow shrinks quickly, slowly, then barely, while a speed readout falls at three rates; a fourth lane, "no friction", has no friction arrow and the velocity arrow never shrinks. The student sees that the slowing tracks the friction, before the law is stated. Scene 5: one car, one resistance arrow, and the driving arrow grows, matches, then shrinks; the velocity arrow and a speedometer readout grow, hold, then shrink in step. The net force (double-shaft arrow) appears forward, vanishes, then appears backward. The steady speed is visibly the balanced case, not the "strong engine" case.
- **Worked example 1 (site `we-1`, unchanged numbers).** Constant 100 km/h, resistance 600 N backward: driving force 600 N forward. 100 km/h (27.8 m/s) is shown as a given and visibly unused (greyed when the working finishes), which is the point the site makes in words. **Precision:** site teaching values; "600 N" kept as written (ideal teaching data, grey tag), no significant-figure claim (site precision note).
- **Worked example 2 (v12's `we-1` sledge, extended).** v12's rope pull, 150 N at 20° above the horizontal, has components 141 N forward and 51.3 N up (v12's site answers; recalculated 140.95 N and 51.30 N). New for this video: the sledge slides at constant velocity and its weight is 400 N (a given, not computed from a mass). Friction = 141 N backward; normal force = 400 − 51.3 = 348.7, about 349 N. This is the "analyse" demand with vector analysis, and it ties the opening object to the method. The components are recalled from v12, not re-derived.
- **Stationary case (scene 8; site key term "balanced forces", activity spirit).** A crate at rest with a 50 N horizontal push (coded arrow, no pusher drawn): friction 50 N the other way. Said: friction matches the push "up to a limit you'll meet in a later video" (keeps a necessary condition without teaching static friction). The site's lamp activity (2.0 kg, g = 9.8) is not used because it needs W = mg (v14 shows why weight is mg; open decision 2).
- **Driving force named plainly.** "The driving force, the forward push the road gives the car's turning wheels." Correct physics (the external forward force is road friction on the driven wheels) in a plain subject-action sentence, and it prepares v17's propulsion. The site's phrase "the engine provides" is kept in the worked example's spoken question only as "What driving force does it need?".
- **Colour key (course decision; root to reconcile with v12).** Forces: ink-dark arrows with a Physics orange outline (`C.ink` stroke inside a `C.orange` outline), as v03 set them (the first coloured forces of the course); one style for every force, each labelled with its name and size. The net force: the same style with a double shaft and the label "F_net" (shown only when it exists; "F_net = 0" readout when it doesn't). Velocity: teal, as v05 to v08, drawn above the object, never touching it. Acceleration (v14 onwards; only the handoff here): Physics orange solid, drawn above the velocity arrow. Within a scene all force arrows share one scale (px per newton stated in author notes); horizontal and vertical pairs may use separate scales only when the narration says so (scene 6, site figure note).
- **Attempts (original).** (A1, pack candidate 1 extended) a cart at constant speed east, drag 4.0 N west and rolling friction 1.5 N west: driving force 5.5 N east; part (b) explains why it isn't bigger. Crossed: "the forward force must be bigger because the cart is moving". (A2, new, stationary in two dimensions) a hovering drone, weight 12.0 N, wind 3.0 N west: thrust 12.4 N at 76.0° above east (3.0 N east, 12.0 N up). Crossed: "12.0 N straight up" (forgets the wind; the drone would drift west). A1 tests the constant-velocity point, A2 the stationary point with v12's vector skills. Neither card shows force arrows.
- **Mistake scene:** none separate. "A moving object needs a forward net force" (hook prediction; 3; 5; A1 crossed); "equilibrium means at rest" (4; key note 3); "a stationary object has no forces on it" (8); "the speed decides the driving force" (6, greyed given); "only the vertical or only the horizontal forces matter" (A2 crossed).
- **Memory aid:** "Balanced: same velocity. Unbalanced: changing velocity." Second line: "Zero is a velocity too." (see "Memory aid check").
- **Handoff (route next).** The scene 5 car returns with the driving force larger than the resistance; the net force arrow points forward, the velocity arrow grows and an orange acceleration arrow appears above it with a "?" for its size; chip "Next: How do net force and mass together set an object's acceleration?". This is the video's last frame.
- **Site sources used:** opening paragraph and hook (cruising car with zero net force; the spacecraft idea is replaced by the frictionless lane, which shows the same thing on a bench-scale object); warm-up (puck on frictionless ice, as the ice and no-friction lanes); key terms (first law, inertia, equilibrium, balanced forces); card 1 (law; inertia grows with mass; loaded truck against a bicycle); card 2 and `we-1` (numbers unchanged; horizontal and vertical pairs); card 3 (ΣFx = 0 and ΣFy = 0; set opposing forces equal); misconceptions (both); short-answer Q3's idea (rest is the special case of constant velocity equal to zero) in the memory aid's second line. Not used: the lamp activity (needs W = mg); terminal velocity (card 3 and Q1, Q2; author note e); the matching task.
- **Site errors found (quoted from site lesson 13, read 2 Nov; for `../site-corrections-phys-y11.md`; not logged yet):**
  1. Opening paragraph: "A car cruising at a steady 100 km/h has its engine working flat out, yet both have zero net force." A car cruising at a steady speed does not need its engine at full output; the driving force only equals the resistance. Suggest: "A car cruising at a steady 100 km/h still needs its engine running, yet both have zero net force."
  2. Opening paragraph: "A spacecraft coasting between stars keeps the same speed and direction forever, with no engine running." Only true if gravitational forces on it are negligible. Suggest adding "far from any planet or star whose gravity would change its motion".
  - Checked and correct: `we-1` (600 N forward); activity lamp (2.0 × 9.8 = 19.6 N, about 20 N); Q2 (700 N; parachute reasoning); Q3 model answer; the two misconception statements.
  - Already logged and not repeated: lesson 12's friction wording and N = mg conditions (this design states friction as resisting sliding over the surface, and states the vertical balance only for a level road with no vertical acceleration).
- **Pack questions answered:** `we-1` used unchanged; pack candidate 1 used with an added resistance and a reasoning part (A1); pack candidate 2 (8.0 N east at rest) replaced by A2, which tests the stationary case in two dimensions using v12's skills; the simple one-dimensional stationary case is taught in scene 8 instead. Pack refinement (start with an isolated body and net force from v12; stop at zero net force; hand the nonzero case to v14) adopted.
- **Cause chain taught, in order:** (1) a zero net force fits a parked and a cruising car (hook); (2) slowing is caused by friction; less friction, slower loss of speed; none, no change (2); (3) a net force changes motion: Newton's first law; inertia, more with more mass (3); (4) zero net force, unchanging velocity: equilibrium at rest or cruising (4); (5) driving force bigger, speeds up; smaller, slows; equal, steady: the driving force cancels resistance (5); (6) horizontal sum zero gives the unknown; vertical sum zero gives the normal force (6); (7) an angled force: use its components in each direction (7); (8) a stationary object's forces balance too (8); (9) memory aid (9).
- **Entry knowledge (route `entryKnowledge`):** Stage 5 forces, friction, signed arithmetic, Pythagoras and inverse tangent. From v12: free-body diagrams, components (the sledge's 141 N and 51.3 N), adding components to a net force. From v06 to v09: velocity as speed with direction, so "constant velocity" means same speed and same direction (said once in 3).
- **Learner-visible vocabulary (plain meaning at first use):** friction (the force from a surface that resists an object sliding over it, 2); Newton's first law (3); constant velocity (the same speed in the same direction, 3); inertia (an object's tendency to keep its velocity, 3); equilibrium (a state of zero net force, 4); driving force (the forward push the road gives the turning wheels, 5); resistive force (air drag plus friction, the forces pushing back, 5 and 6); normal force (recalled from v12: the surface's push, at right angles to it, 6); thrust (the push the spinning rotors get from the air, A2 card and feedback).
- **Legacy logic ported:** none.
- **New explainer motion (coded unless a plate is named):** **friction lanes** (four stacked lanes, each a coded surface strip; the crate plate launched at one speed in all four, decelerating at 6.0, 2.5, 0.5 and 0 m/s² in screen units; friction arrow length per lane; teal velocity arrow length tied to the speed; a small speed readout per lane; lanes 1 to 3 stop or run off at their own times; author note a); **force balance car** (driving and resistance arrows on the yellow car, the driving arrow animated by cue, a double-shaft net arrow computed as their difference, the velocity arrow and a speedometer readout driven by the net force with a gentle response; author note b); **free-body diagram panel** (object reduced to a dot with its arrows, side by side with the plate scene; v12's style); `AlignedAlgebra`; `Countdown` (3 s and 10 s); `QuestionCard` (subject "Physics"); `Chip` with `cross`; scribble circles; `KeyNotes`; `Heading`.
- **Board layout (constant):** heading top-left; the scene (road, lanes or snow line) across the left two-thirds; the free-body diagram panel and the working in the right third. At most three bright text items.
- **No human figures.** Pushes and pulls are coded arrows with labels; ropes are coded lines; nobody drives a visible car (tinted windows on the plate are as painted).
- **Author notes (not learner copy):**
  (a) Lanes (scene 2): launch speed shown as 3.0 m/s on every lane; decelerations chosen for clear timing, not for real coefficients (carpet 6.0 m/s², stops in 0.50 s after 0.75 m; bench 2.5 m/s², 1.2 s, 1.8 m; ice 0.5 m/s², 6.0 s, 9.0 m, runs off screen still moving; no friction 0). Friction arrow lengths in proportion 6.0 : 2.5 : 0.5 : 0. No values are spoken or labelled except the speed readouts (illustrative; grey tag "illustrative").
  (b) Force balance car (scene 5): resistance arrow fixed at 600 N (the scene 6 value); driving arrow 900 N (speeds up), 600 N (steady), 300 N (slows). The speedometer moves up from 90 to 100 km/h, holds at 100, then falls toward 90; resistance is held constant for the demonstration (real drag rises with speed; not said, since it doesn't change the direction of the change). Scale 0.25 px per newton.
  (c) `we-1`: 100 km/h = 27.78 m/s (shown "27.8 m/s" under the given, greyed later). F_drive − 600 = 0, F_drive = 600 N forward. No mass is given, so the vertical pair N and W is drawn equal to each other at a separate scale (site figure note), tagged "not to the same scale".
  (d) Sledge: v12's F = 150 N at 20° above horizontal: Fx = 150 cos 20° = 140.95 ≈ 141 N; Fy = 150 sin 20° = 51.30 ≈ 51.3 N. Weight 400 N (given). Friction = 141 N backward. N = 400 − 51.3 = 348.7 ≈ 349 N (three figures, as the site's 141 and 51.3). Constant velocity stated in the task.
  (e) Terminal velocity is a constant-velocity case but needs drag that depends on speed; v16 (Revision 1) introduces it as the end of an accelerating fall. Not used here, so no "terminal velocity" term appears.
  (f) A1: 4.0 + 1.5 = 5.5 N east. A2: thrust components 3.0 N east, 12.0 N up; magnitude √(3.0² + 12.0²) = √153 = 12.37 ≈ 12.4 N; direction tan⁻¹(12.0/3.0) = 75.96° ≈ 76.0° above the horizontal, towards the east (equivalently 14.0° east of vertical).
  (g) Pronunciations: "a hundred kilometres per hour"; "six hundred newtons"; "a hundred and forty-one newtons"; "fifty-one point three newtons"; "three hundred and forty-nine newtons"; "four point oh"; "twelve point four newtons"; "seventy-six degrees".

Main question: *A free-body diagram shows forces that add to zero. Could it belong to a car cruising at 100 km/h, or only to a parked one? Why does an object keep the same velocity when the forces on it balance?*
Entry knowledge (Stage 5 forces and friction; v12 free-body diagrams and components).
Stops after: friction causes everyday slowing; Newton's first law; inertia grows with mass; equilibrium is zero net force, at rest or at constant velocity; a cruising object's forward force cancels resistance; constant-velocity and stationary objects analysed by making each direction's forces add to zero, with components for an angled force.
Handoff: v14, net force and mass set the acceleration.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key: forces ink with a Physics orange outline, labelled with name and size; net force double-shaft, "F_net"; velocity teal above the object; acceleration orange (handoff only); surfaces muted coded strips; working in ink with givens navy; current result bright, earlier items dim.

### 1. hook (parked or cruising?)
> Last video ended with forces that add to zero, so the net force is zero. Which of these could that diagram belong to? A car parked at the kerb, or a car cruising down the highway at a hundred kilometres per hour? Predict, then we'll **see**.

Visual: opens on v12's last frame (the balanced free-body diagram with "F_net = 0"). The v12 chip fades; heading writes on: "Newton's first law: when forces balance". The diagram slides to the right panel and keeps its "F_net = 0" readout. Left, on "parked" the blue car plate (`b4-car-blue-v1.png`) appears stationary at a coded kerb, velocity readout "0 km/h"; on "cruising" the yellow car plate (`b4-car-yellow-v1.png`) rolls in on a coded highway strip below it, road marks sliding past, readout "100 km/h", teal velocity arrow above it. On "see" chips "parked", "cruising", "both" under the diagram and a 3-second countdown ring. Nothing else.

### 2. why moving things slow down
> Most people pick the parked car, because surely a moving car needs a forward force. Everyday life seems to agree. Slide a crate across carpet, and it stops almost at once. On a smooth bench, it slides further. On ice, further still. What changed? Not the launch. Only the friction, the force from a surface that resists an object sliding over it. Less friction, slower loss of speed. So imagine no friction at **all**. The crate would never slow down, because nothing would be there to change its velocity.

Visual: clear change: the cars leave; four stacked lanes (author note a), labelled "carpet", "smooth bench", "ice", "no friction" (the last a clean pale strip, tag "imagined"). On "carpet" the crate plate (`y11p-wooden-crate-v1.png`, side view) launches at 3.0 m/s in lane 1 with a long friction arrow pointing back and a teal velocity arrow that shrinks to nothing as it stops; speed readout falls 3.0 to 0. On "bench" lane 2 does the same more slowly (shorter friction arrow). On "ice" lane 3: a short friction arrow, the velocity arrow barely shrinks, the crate slides off the right edge still moving. On "Not the launch" the three launch readouts "3.0 m/s" glow together. On "Only the friction" the three friction arrows glow, a bracket "friction gets smaller" joins them. On "all" lane 4 runs: no friction arrow, the velocity arrow stays the same length as the crate glides off screen and re-enters from the left (a looping strip, tag "keeps going"); its readout stays "3.0 m/s". Grey tag "illustrative" on the readouts.

### 3. the first law and inertia
> That's Newton's first law. An object stays at rest, or keeps moving at a constant velocity, unless a nonzero net force acts on it. Constant velocity means the same speed in the same direction. This tendency to keep its velocity is called inertia, and an object with more mass has more inertia. A crate full of books is much harder to start or stop than an empty one. So a force isn't what keeps something moving. A net force is what **changes** its motion.

Visual: lane 4 stays small at the top. The law writes on in the right panel, phrase by phrase on the spoken clauses, with two small icons beside "at rest" (crate still, readout 0) and "constant velocity" (lane 4 crate, readout 3.0 m/s). On "same speed in the same direction" the teal arrow on lane 4 gets two tick marks: "length same", "direction same". On "inertia" a label "inertia: keeps its velocity". On "crate full of books" two crate plates sit side by side with coded mass tags "2 kg" and "20 kg"; a coded bar labelled "inertia" grows taller beside the heavier one ("more mass, more inertia"); one beat, no motion (how much the motion changes belongs to v14). On "changes" the boxed line "net force changes motion" writes, and the word "keeps" in a ghost chip "force keeps it moving" takes a red scribble cross.

### 4. equilibrium: rest and steady motion
> So, back to the diagram. Zero net force means the velocity doesn't change. For the parked car, it stays at zero. For the cruising car, it stays at a hundred kilometres per hour. Both fit. A free-body diagram tells you whether the velocity is changing, not how fast the object is going. This is called equilibrium, a state of zero net force. Rest and constant velocity are both **equilibrium**, and the forces alone can't tell you which one you're looking at.

Visual: clear change back to the hook board: the two cars and the "F_net = 0" diagram. On "stays at zero" the parked car's readout pulses "0 km/h, 0 km/h, 0 km/h" (a ticking timer beside it); on "a hundred" the cruising car's readout holds "100 km/h" while the timer ticks; its teal arrow keeps its length. On "Both fit" the hook chip "both" glows and two thin links join the diagram to each car. On "whether the velocity is changing" a small label under the diagram writes "shows: change in velocity (none)", and on "how fast" a crossed ghost label "shows: speed" fades. On "equilibrium" a label "equilibrium: F_net = 0" writes above both cars, with two sub-chips "at rest" and "constant velocity".

### 5. why a cruising car needs a driving force
> Then why does a cruising car need its engine running at all? Watch the forces. Air resistance and friction push back on the car. The driving force is the forward push the road gives its turning wheels. If the driving force is bigger, the net force points forward, and the car speeds **up**. If it's smaller, the net force points backward, and the car slows **down**. Only when the two are equal does the speed stay steady. So the driving force isn't keeping the car moving. It's cancelling the resistance, so the net force stays at **zero**.

Visual: camera continue onto the yellow car alone, large, on the highway strip (author note b). The resistance arrow (600 N scale, label "resistance") draws backward from the car's rear on "push back"; on "turning wheels" a forward driving arrow draws from the front wheel contact, labelled "driving force", with a small coded contact mark at the tyre. On "speeds up" the driving arrow grows longer than the resistance; a double-shaft "F_net" arrow appears forward above the car; the velocity arrow lengthens and the speedometer rises from 90 toward 100 km/h. On "slows down" the driving arrow shrinks below the resistance; "F_net" flips backward; the velocity arrow shortens and the speedometer falls. On "equal" the arrows match exactly (equal-length tick marks); "F_net" fades and the readout "F_net = 0" appears; the speedometer holds at 100. On "zero" the chip "engine keeps it moving" fades in and takes a red scribble cross, caption "the driving force cancels resistance".

### 6. worked example: the cruising car
> Let's put numbers on it. A car cruises at a constant hundred kilometres per hour on a flat road. The total resistive force, air drag plus friction, is six hundred newtons backward. What driving force does it need? Constant velocity means zero net force. Taking forward as positive, the driving force minus six hundred newtons equals **zero**. So the driving force is six hundred newtons forward. Notice that the speed never entered the working. Cruise faster and the drag grows, so the car needs a bigger driving force, but the two still balance. Vertically, the road's normal force balances the weight, so the car neither sinks nor **lifts**.

Visual: calculation layout in the right third: task strip "Find the driving force"; givens group (navy): "constant velocity, 100 km/h (27.8 m/s); resistance = 600 N backward; flat road"; grey tag "teaching data". The car shrinks to a dot in the free-body panel with four arrows: resistance 600 N back, driving "?" forward, normal up, weight down (vertical pair tagged "not to the same scale", author note c). A sign key "forward = +" appears. On "zero" `AlignedAlgebra` row "F_drive − 600 N = 0" (the equation, boxed "constant velocity: F_net = 0" beside it). Next row "F_drive = 600 N forward" (boxed); the "?" on the arrow becomes "600 N" and the two horizontal arrows show equal-length ticks. On "speed never entered" the given "100 km/h (27.8 m/s)" dims to grey and is circled once. On "Cruise faster" both horizontal arrows lengthen together (ticks stay equal), tag "faster: more drag, more driving force, still balanced". On "lifts" a row "vertical: N − W = 0, so N = W" writes small; the vertical pair shows equal ticks.

### 7. worked example: a sledge at an angle
> The same rule works when a force acts at an angle. Remember the sledge, pulled by a rope with a hundred and fifty newtons, at twenty degrees above the horizontal? Suppose it now slides at a constant velocity, and its weight is four hundred newtons. Find the friction and the normal force. Last video gave the rope's components, a hundred and forty-one newtons forward and fifty-one point three newtons **up**. Horizontally, the net force is zero, so friction must be a hundred and forty-one newtons **backward**. Vertically, the normal force plus fifty-one point three must equal four hundred. So the normal force is about three hundred and forty-nine **newtons**, less than the weight, because the rope lifts the sledge a little.

Visual: clear change: the sledge plate (`y11p-sledge-v1.png`) on a coded snow line, sliding slowly at a steady pace with a constant teal velocity arrow; a coded rope rising at 20° from its front, with a 150 N force arrow along it and an amber angle arc "20°". Task strip "Find the friction and the normal force"; givens: "constant velocity; rope 150 N at 20° above horizontal; weight 400 N". On "up" the rope arrow splits into dashed components that turn solid: "141 N forward" and "51.3 N up" (chip "from v12", grey). The free-body panel: dot with the two components, weight 400 N down, normal "?" up, friction "?" back. On "backward" row "horizontal: 141 − f = 0, so f = 141 N backward" and the friction arrow fills to match the 141 N component (equal ticks). On "newtons" row "vertical: N + 51.3 − 400 = 0, so N = 348.7 ≈ 349 N" (boxed); the normal arrow fills shorter than the weight arrow, and a small gap bracket between them is labelled "51.3 N from the rope".

### 8. a stationary crate
> Stationary objects follow the same rule. A crate sits on the floor, and a horizontal push of fifty newtons acts on it, but it doesn't move. Its velocity stays at zero, so the net force must be zero. That means friction pushes back with fifty newtons too. Friction matches the push, up to a limit you'll meet in a later video. So a stationary object isn't free of forces. Its forces **balance**.

Visual: clear change: the crate plate at rest on a coded floor strip; a coded push arrow "50 N" draws into its left side (no pusher drawn, arrow only); readout "velocity 0". On "net force must be zero" readout "F_net = 0". On "fifty newtons too" a friction arrow "50 N" draws backward along the floor contact, equal ticks with the push. On "up to a limit" a small grey chip "limit: later video". On "balance" the crate shrinks into a free-body dot with four arrows (push, friction, normal, weight), pairs ticked equal; the chip "at rest = no forces" fades in and takes a red scribble cross.

### 9. memory aid
> Here's a line to keep. Balanced forces, same velocity. Unbalanced forces, changing velocity. And remember, a velocity of zero is a velocity **too**.

Visual: the parked and cruising cars return small at the left, side by side. The handwritten line writes large: "Balanced: same velocity. Unbalanced: changing velocity." On "zero" the second line writes smaller: "Zero is a velocity too." with the parked car's "0 km/h" glowing. Hold about 2 seconds.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. A cart rolls east at a constant speed on level ground. Air drag on it is four point oh newtons west, and rolling friction is one point five newtons west. Find the driving force on the cart, and explain why it isn't bigger than the resistance. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Physics"), worded as printed: "A motorised cart rolls east at constant speed on level ground. The air drag on it is 4.0 N west and the rolling friction on it is 1.5 N west. (a) Determine the driving force on the cart. (b) Explain why the driving force is not greater than the total resistive force. (3 marks)" Tag: "HSC-style question, written for HSCScience". Beside it the dynamics trolley plate (`y11p-dynamics-trolley-v1.png`, requested in v09) on a short coded track with a small compass "E →"; no arrows. The full question stays on screen. Countdown ring for 10 seconds after "Pause here to answer." Nothing answer-bearing.

### 11. feedback 1 (brief)
> Constant speed in a straight line means zero net force. So the driving force equals the total resistance, four point oh plus one point five, five point five newtons **east**. If it were bigger, the cart would speed **up**. The classic mistake is saying the forward force must win because the cart is moving. Motion needs no net force. Only a change in motion **does**.

Visual: card shrinks to the top; "constant speed" and "level ground" underlined. Free-body dot appears beside the trolley: drag 4.0 N and friction 1.5 N west, driving "?" east. Row "F_drive − 4.0 − 1.5 = 0" then on "east" boxed "F_drive = 5.5 N east"; the driving arrow fills to the combined length of the two west arrows (ticks). On "speed up" a ghost driving arrow longer than 5.5 N and a growing teal velocity arrow flash once. On "does" a chip "forward force must be bigger: it's moving" fades in and takes a red scribble cross. Hold about 1 second.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. A drone hovers at a fixed point. Its weight is twelve point oh newtons, and a steady wind pushes on it with three point oh newtons, towards the west. Find the size and direction of the thrust its rotors must provide. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A drone hovers at a fixed point in a steady wind. Its weight is 12.0 N and the wind exerts a horizontal force of 3.0 N west on it. Assume the only other force is the thrust from its rotors. Determine the magnitude and direction of the thrust. (3 marks)" Tag: "HSC-style question, written for HSCScience". Beside it the drone side-view plate (`y11p-drone-side-v1.png`) with faint coded wind streaks moving west, a small compass "E →, up ↑"; no arrows. The full question stays on screen. Countdown ring for 10 seconds after "Pause here to answer."

### 13. feedback 2 (brief)
> Hovering means the velocity stays at zero, so the net force is zero. The thrust must cancel both forces, so it has three point oh newtons east, and twelve point oh newtons up. Its size is the square root of three squared plus twelve squared, twelve point four **newtons**, at seventy-six degrees above east. A thrust of twelve newtons straight up forgets the wind, and the drone would drift **west**.

Visual: card shrinks; "hovers at a fixed point" underlined. Free-body dot: weight 12.0 N down, wind 3.0 N west. On "east" and "up" the thrust's two components draw (3.0 N east, 12.0 N up), each ticked equal to the force it cancels. Row "thrust = √(3.0² + 12.0²) = 12.4 N" on "newtons"; the components close into one thrust arrow with an amber arc, row "θ = tan⁻¹(12.0 ÷ 3.0) = 76.0° above east" (boxed "12.4 N at 76.0° above east"). On "west" a ghost "12.0 N up" arrow and chip "thrust 12.0 N straight up" fade in, the drone ghost drifts left, and the chip takes a red scribble cross. Hold about 1 second.

### 14. handoff
> So when forces balance, the velocity can't change, whether the object is parked or cruising. But what happens when they don't balance? The car speeds up. Next, we'll find out by how much, and why the mass **matters**.

Visual: the memory line returns small at the top. The scene 5 car returns large: the driving arrow larger than the resistance, the double-shaft "F_net" forward, the teal velocity arrow growing; on "speeds up" an orange acceleration arrow appears above the velocity arrow labelled "a = ?". On "matters" a chip "Next: How do net force and mass together set an object's acceleration?". This is the final frame (the key notes cross-fade back to it). Hold about 2 seconds.

### 15. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Newton's first law: an object stays at rest, or keeps a constant velocity (same speed, same direction), unless a nonzero net force acts on it.
2. Inertia: an object's tendency to keep its velocity. More mass, more inertia.
3. Equilibrium: zero net force. An object at rest and an object at constant velocity are both in equilibrium.
4. In equilibrium, the forces in each direction add to zero (resolve angled forces into components first). A cruising car's driving force equals the total resistance.

Memory aid (large, on the notes screen): *Balanced: same velocity. Unbalanced: changing velocity.* Second line: *Zero is a velocity too.*

## Teaching checks

- **Does it explain causes?** Why things slow down in everyday life: friction, shown shrinking lane by lane with the slowing (2). Why an object keeps its velocity: nothing acts to change it (2, 3). Why a parked and a cruising car can share one diagram: the diagram fixes the change in velocity, not the velocity (4). Why a cruising car needs a driving force: to cancel resistance, shown by the three-way contrast (5). Why the speed doesn't enter the working: only the balance matters (6). Why the sledge's normal force is less than its weight: the rope's upward component carries part of the load (7). Why a pushed crate can stay still: friction pushes back equally (8).
- **Worked-example rule:** each example has its task strip, grouped givens with units, the free-body diagram and one row per cue; results kept: the components in 7 are the only carried values (from v12, tagged).
- **Misconceptions addressed:** "moving needs a forward net force" (2, 3 crossed, 5 crossed, 11 crossed); "equilibrium means at rest" (4; key note 3); "a stationary object has no forces" (8 crossed); "the speed decides the force" (6); "one direction is enough" (13 crossed).
- **One idea at a time:** cause (2), law (3), equilibrium (4), why the forward force (5), then three analyses (6 to 8), each with one new feature: one dimension, an angled force, at rest.
- **Video makes it easier:** the student watches the slowing track the friction lane by lane, and the frictionless crate keep its arrow (2); watches one car speed up, hold and slow as one arrow changes (5); sees the balance ticks match before the number is written (6 to 8).
- **Response opportunity:** a 3 s prediction (1, answered in 4); two unseen HSC-style tasks, every condition on the card (A1: constant speed, level, both resistances, the two demands; A2: hovering, both forces with directions, "the only other force"), 10 s each with "Pause here to answer.", no arrows on either card. Feedback about 28 s and 30 s.
- **Avoided double teaching:** v12's free-body diagrams and components are used, not re-taught (the sledge's components are recalled from v12 with a grey tag); v06's velocity as speed with direction is one clause.
- **Syllabus coverage:** `cif576e4f9`: stationary objects (1, 4, 8, A2) and constant-velocity objects (1 to 7, A1). `ci38b8f81e`: forces on constant-velocity objects analysed in one dimension (6, A1) and with an angled force by components (7).
- **Out of scope by design:** how big the change is when forces don't balance (v14); static friction's limit; terminal velocity; third-law pairs (v17).

## Practice questions and model answers

Each attempt ends with "Pause here to answer." and a 10 second countdown; the card and every demand stay on screen. Marks appear on the card; the narration does not read them. Every card carries "HSC-style question, written for HSCScience".

**Attempt 1 (scene 10; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "A motorised cart rolls east at constant speed on level ground. The air drag on it is 4.0 N west and the rolling friction on it is 1.5 N west. (a) Determine the driving force on the cart. (b) Explain why the driving force is not greater than the total resistive force."
Model answer: (a) Constant speed in a straight line means constant velocity, so the net force is zero (Newton's first law). Taking east as positive, F_drive − 4.0 − 1.5 = 0, so F_drive = 5.5 N east (2 marks). (b) If the driving force were greater, the net force would point east and the cart's velocity would increase; a steady velocity needs the forces to balance, not a forward excess (1 mark). Classic mistake (crossed): "the forward force must be bigger because the cart is moving".

**Attempt 2 (scene 12; original wording, HSC style, 3 marks suggested).** "A drone hovers at a fixed point in a steady wind. Its weight is 12.0 N and the wind exerts a horizontal force of 3.0 N west on it. Assume the only other force is the thrust from its rotors. Determine the magnitude and direction of the thrust."
Model answer: The drone is stationary, so the net force is zero (Newton's first law). The thrust must have a horizontal component of 3.0 N east and a vertical component of 12.0 N up (1 mark). Magnitude = √(3.0² + 12.0²) = 12.4 N (1 mark). Direction: θ = tan⁻¹(12.0 ÷ 3.0) = 76.0° above the horizontal, towards the east (1 mark). Classic mistake (crossed): "12.0 N straight up" (ignores the wind; the net force would be 3.0 N west and the drone would accelerate west).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Lanes (illustrative) | launch 3.0 m/s; decelerations 6.0, 2.5, 0.5, 0 m/s² (timing only) | 2, 3 |
| Cars (hook) | 0 km/h; 100 km/h | 1, 4, 9 |
| Balance demo | resistance 600 N; driving 900, 600, 300 N; speedometer 90 to 100 km/h | 5, 14 |
| Worked 1 (site we-1) | 100 km/h = 27.8 m/s; resistance 600 N; F_drive 600 N forward; N = W | 6 |
| Worked 2 (v12 sledge) | 150 N at 20°; 141 N, 51.3 N; weight 400 N; friction 141 N; N = 348.7 ≈ 349 N | 7 |
| Stationary crate | push 50 N; friction 50 N | 8 |
| A1 | 4.0 N + 1.5 N = 5.5 N east | 10, 11 |
| A2 | 12.0 N, 3.0 N; 12.37 ≈ 12.4 N; 75.96 ≈ 76.0° above east | 12, 13 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (2 Nov); Codex to re-check.

- 100 ÷ 3.6 = 27.78 m/s.
- F_drive − 600 = 0, F_drive = 600 N.
- 150 cos 20° = 140.95; 150 sin 20° = 51.30; 400 − 51.3 = 348.7 (unrounded 348.70).
- 4.0 + 1.5 = 5.5.
- √(3.0² + 12.0²) = √153 = 12.369; tan⁻¹(12.0/3.0) = 75.96°; 90 − 75.96 = 14.04°.

## Memory aid check

- **"Balanced: same velocity. Unbalanced: changing velocity."** Written for this lesson. Meaning: zero net force means the velocity (speed and direction) stays the same; a nonzero net force means it changes. Assumptions checked: "balanced" means the forces add to zero as vectors (all directions), which scenes 6 to 8 and A2 show; "same velocity" includes direction (said in 3); valid in an inertial (non-accelerating) frame of reference, which every example here uses (author note only; v11's frames are ground frames). It helps a new case: given any object and its motion, the student decides balanced or not from whether the velocity changes, and the reverse. Second line "Zero is a velocity too" blocks "equilibrium means at rest" and "at rest means no forces" from the other side: a stationary object fits the same rule. Introduced after scenes 2 to 8 have shown it.
- **Considered, not used:** "An object in motion stays in motion" (half the law, and it invites "needs no force ever", the opposite error to the one targeted); a spacecraft image (true only far from gravity; site error 2).

## Narration length estimate

Revision 1 count (2 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,634 characters**, 15 scenes. Characters per scene (1 to 15): 237, 502, 452, 454, 529, 635, 718, 390, 144, 275, 356, 248, 392, 213, 75. At 13.3 characters per second the speech is about 424 s; add 3 s for the hook countdown, 20 s for two attempt countdowns, about 22 s of holds and settling (the lane runs in 2, the speed-up and slow-down in 5, the arrow fills in 6 to 8, the 2-second memory hold, 1 s after each feedback, 2 s at the handoff) and about 55 s more of the quiet notes hold (about 100 s of holds): **about 524 s**, inside the 5,500 to 6,800 character band (in its lower part) and under the 570 s cap. Two syllabus points with one stationary and two constant-velocity analyses fill it without padding. Feedback: scene 11 about 28 s, scene 13 about 30 s (with the 1 s holds). Scene 7 is the longest (about 54 s): it carries the vector analysis the "analyse" point needs.

Reserve cuts if the voiced take runs long (no cause lost; do not cut below 5,500 characters): scene 2's "Everyday life seems to agree." (about 2 s); scene 6's vertical sentence becoming "Vertically, the normal force balances the weight." (about 2 s); scene 14's "The car speeds up." (about 1 s). Do not cut the lanes, the three-way contrast in 5 or the components in 7.

## Scene list and build ids

Lesson key `p-y11-v13` (route phys-y11-fa1-v13). Suggested explainer folder `src/explainer/lessons/phys-y11-fa1-v13` and build folder `docs/production/claude-pm/lessons/p-y11-v13` (root to confirm).

In order (kebab-case; 15 scene headings, all `### N.`): hook, why-things-slow, first-law-inertia, equilibrium, driving-force, worked-cruising-car, worked-sledge, stationary-crate, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`: the learner reads the worded question and works during the countdown) and key-notes (`hold`: the learner copies four notes). Transitions (`pickTransition`): v12's last frame continues into scene 1 (camera continue: the diagram slides aside); 1 to 2 clear change (lanes); 2 to 3 camera continue (lane 4 stays); 3 to 4 clear change back to the hook board; 4 to 5 camera push in on the yellow car; 5 to 6 camera continue (same car, diagram grows); 6 to 7 clear change (sledge); 7 to 8 clear change (crate); 8 to 9 camera pull back; attempts and feedback card shrink to the top; 13 to 14 board clear; 14 to 15 fade to the notes board, and the notes cross-fade back to scene 14's frame at the end.

Holds: hook (3 s prediction countdown inside the scene), attempt-1, attempt-2 (10 s countdowns after the speech); key-notes quiet hold (about 60 s, standard line, reuse take); 1 s at the end of 11 and 13; 2 s at the end of 9 and 14. Review evidence paths: `learning_review` = `checks/p-y11-v13-learning-review.md`, `science_check` = `checks/p-y11-v13-physics-check.md` (root to confirm names).

## Assets

Have (inspected 2 Nov on a dark contact sheet in the session scratchpad; uniform scale only, never stretched):
- `public/assets/biology/b4-car-yellow-v1.png` (1600 × 800, side view facing right): hook, 4, 5, 6, 9, 14.
- `public/assets/biology/b4-car-blue-v1.png` (1600 × 800): hook, 3, 4, 9.
- **Inspected, not used:** `public/assets/biology/m7-stock-truck-v1.png` (three-quarter view, a livestock truck; wrong view for a side-on comparison); `public/assets/chemistry/m7-hdpe-crate-v1.png` (an open plastic crate in three-quarter view; it can't sit on a side-view surface strip); `public/assets/biology/m5x-slip-box-v1.png` (a ballot box with slips).

Requested elsewhere (not yet painted; shared requests, no duplicate):
- `y11p-sledge-v1.png` (v11 and v12 request; the v12 design carries the specification): scene 7 (and the opening frame if v12 uses it). Essential.
- `y11p-dynamics-trolley-v1.png` (v09 request): A1 card (10, 11). Useful; fallback: card without a picture.

Need (new plates, Codex), in priority order:
1. `y11p-wooden-crate-v1.png`: scenes 2 and 8; reused by v14 (the box in `we-1`) and v16 (the box and the lift crate). Essential.
2. `y11p-drone-side-v1.png`: A2 card (12, 13); reused by later force videos. Useful; fallback: the card without a picture and with the compass only.

Coded: kerb, highway strip and sliding road marks; surface lanes (carpet stipple, pale bench, pale blue ice with a gloss line, plain "no friction" strip); every force, velocity and acceleration arrow (`Arrow` from `course-kit.tsx` with the course force style); the double-shaft net arrow; equal-length tick marks; contact marks; the rope; angle arcs; speedometer and speed readouts; wind streaks; the free-body panel; `AlignedAlgebra`; `Countdown`; `QuestionCard` (subject "Physics"); `Chip` with `cross`; `KeyNotes`. Kit gaps for the build brief: (1) **course force arrow style** (ink body, Physics orange outline, label slot for name and size, optional double shaft for F_net) as a shared physics part, so v12 to v24 match; (2) **force-driven motion helper** (a scene clock that integrates a = F_net/m into velocity and position for a plate, so arrows and motion can't disagree; used in 2, 5 and 14 here and in v14 and v16).

## Codex asset brief

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; design `docs/production/claude-pm/lessons/phys-y11-fa1-v13.md`. Paint after the learning review, physics check and error check pass and the owner gives the go-ahead. Every plate: transparent PNG with a true alpha channel, clean edges with no coloured fringe or halo (check on black and white), ink and watercolour in the house style matched to `public/assets/biology/b4-car-yellow-v1.png` (line weight, palette, soft shading), at least 8 per cent clear margin, no text, labels, numbers, brand names, people, hands, faces, backdrop, glow or ground shadow. Keep the native aspect; never stretch.

1. `y11p-wooden-crate-v1.png` (1600 × 1200 px): one small closed wooden crate (about 40 cm long in reality) in exact side view, flat bottom edge horizontal so it sits on a coded surface line, plain pale timber slats with two darker horizontal battens and simple corner posts; no stencils or lettering; no rope or handles. Must read clearly at 250 px wide on the dark board.
2. `y11p-drone-side-v1.png` (2000 × 1000 px): a small four-rotor drone in exact side view, level, grey body with a small dark camera under the front, two visible rotor arms with faint motion discs above them, landing legs straight down; front to the right; no markings. Must read clearly at 300 px wide.

Report inspection at about 300 px and 600 px wide on the dark board, including the crate on a horizontal line (bottom edge level). Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/p-y11-v13-provenance.json`.

## Codex error-check brief

Error-only (report errors; do not restyle or rewrite). Report to `docs/production/claude-pm/checks/` (root names the check).
1. Re-check every value under "Numbers to verify", and every value in the narration, screen text, attempts and key notes against "Numbers used".
2. Physics: confirm Newton's first law statement; inertia increasing with mass; equilibrium as zero net force including constant velocity; that the driving force on a car is the road's forward friction on the driven wheels; that friction on a sliding object resists its sliding over the surface; that the normal force on the sledge is reduced by the rope's upward component; that a stationary crate under a horizontal push has an equal friction force (below the limit); A2's components, magnitude and direction.
3. Confirm the lanes and balance demo are tagged illustrative and their arrows agree with their motion (author notes a and b): longer friction arrow, faster slowing; driving > resistance only while the speed rises.
4. Confirm both attempt questions are original in wording, carry every needed condition (A1 constant speed and level ground; A2 "the only other force"), show no force arrows, and do not closely paraphrase a NESA Physics question (search "hovers", "constant speed", "driving force").
5. Confirm the two content-point quotes match the route JSON and `docs/production/programme/syllabus/phys-new-y11.json` exactly (P25-FA1-G3-03 `cif576e4f9`, P25-FA1-G3-04 `ci38b8f81e`), and no 2017-syllabus label appears.
6. Confirm no em dash (U+2014) anywhere in this file; Australian spelling; YouTube title 100 characters or fewer.
7. Confirm the narration character count and per-scene counts by script with the build parser rules.
8. Add site errors 1 and 2 under Decisions to `../site-corrections-phys-y11.md` (owner record only; the site is read-only here).

## YouTube metadata (draft)

Title: Newton's First Law: Why Balanced Forces Keep Velocity Constant | Year 11 Physics

(Title length: 81 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa1-fundamentals-of-mechanics/lesson13.sa.html

A free-body diagram shows forces that add to zero. Is the car parked, or cruising at 100 km/h? It could be either. See why moving things slow down in everyday life (friction, not a missing force), what Newton's first law and inertia really say, and why rest and constant velocity are both equilibrium. Then find out why a cruising car still needs a driving force (to cancel resistance, not to keep it moving), and analyse constant-velocity and stationary objects by making the forces in each direction add to zero, including a sledge pulled at an angle. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Year 11 Physics (2025 syllabus), Focus Area 1: Fundamentals of mechanics.
Syllabus content (NSW Physics 11-12, 2025):
"Apply Newton’s first law of motion to stationary objects and objects moving with a constant velocity" (cif576e4f9)
"Analyse the forces acting on an object moving with constant velocity" (ci38b8f81e)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

Builds on: Free-body diagrams and net force (previous video). Next: Newton's second law: net force, mass and acceleration.

#Year11Physics #Physics #NewtonsLaws #HSCScience

## Open decisions

- **1. Opening frame (root, with v12's designer).** Assumed: v12 ends on an isolated-body free-body diagram whose forces add to zero, with "F_net = 0" and a chip naming this video's question (v12 is being designed in parallel; its route `nextHandoff` names only the placeholder question). If v12 ends on the pulled sledge with an unbalanced diagram, scene 1's first line becomes "Last video ended with a sledge and its forces. Suppose they add to zero." (+20 characters) and the rest stands. Scene 7 assumes v12's sledge numbers (150 N at 20°, components 141 N and 51.3 N) are taught in v12; if v12 changes them, scene 7 follows v12's values.
- **2. Where W = mg first appears (root).** This design avoids W = mg (weights are given in newtons). v14 (Revision 1, next) proposes showing why weight is mg from a = F_net/m; if v12 already teaches W = mg, v13 could add the site's lamp (2.0 kg, about 20 N) as the stationary example instead of the crate.
- **3. Force colour (root, course-wide).** Ink with a Physics orange outline, as v03; v11's handoff drew an orange force arrow. Root to confirm one style for v12 to v24 (the kit gap above).
- **4. Static friction wording.** "Friction matches the push, up to a limit you'll meet in a later video." Keep, or drop the clause if the route's friction video opens with this exact case.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v12 and Stage 5 forces: does the lanes demonstration make "friction causes the slowing" feel caused before the law; is the hook's "both" answer convincing in scene 4; does the three-way car contrast replace "the engine keeps it moving"; is the sledge analysis followable using only v12's components; do the cards give nothing away), then the Codex physics check and error check.
- The lanes (2) and the balance car (5) carry the explanation; judge them at playback speed in the voiced preview. Arrows and motion must come from the same force values (kit gap 2).
