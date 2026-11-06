# Year 12 Physics M5 V11: Uniform circular motion. How can speed be constant while velocity keeps changing? (design)

Status: Revision 2 (6 Nov 2026): brief 188 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 6,274 characters, 17 scenes, about 554 s, counted by script with the build parser rules (see "Narration length estimate"). Opens on v10's final frame.

Scope: eleventh video of Year 12 Physics (Physics Stage 6, 2017 syllabus), Module 5 (Advanced Mechanics), first video on circular motion, inquiry question "Why do objects move in circles?". Templates: `phys-y12-m5-v01.md` and `phys-y12-m5-v10.md` (this run's structure), `phys-y11-fa1-v01.md`, `math-a12-d10.md` (calculation layout), `bio-y11-fa1-v05.md` (plates and asset brief format). No starter pack exists for this video; the pack work (site givens, independent arithmetic, original questions, asset reuse) is done here. Site lesson read in full (6 Nov, read-only): hook, predict, vocabulary, misconceptions, card 1 "Describing Circular Motion" and worked example 1, card 2 "Centripetal Acceleration" and worked example 2, card 3 "Centripetal Force" and worked example 3, card 4 (work, v15 owns it), the investigation card (v16), activities, wrap-up, "Explain 6 marks", "Evaluate 5 marks", short answers and the revisit: `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson07.sa.html`, SHA256 `01b9c74b147e84c698ec636ed0c4fd27298992fa401503a2ae5ba49930a8501e` (recomputed 6 Nov; matches the route). Route entry: `phys-y12-m5-v11` in `../../programme/phys-y12-route-inputs.json`, sections `l07-describe-title`, `l07-vectors-title`, `l07-force-title`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Relate displacement of velocity vectors to inward acceleration; connect period, frequency, angular speed and v. Stop before multi-force cases." Next: "phys-y12-m5-v12: Which force supplies the inward acceleration on a flat curve?"

Owner rules applied: 2017 syllabus only, quoted exactly; one main learner question; no people, hands, faces or body outlines (the site's roundabout rider and passenger are not used; the car is a top-view plate with its roof on, so no seats or occupants show; the crane is a coded top view with no cab detail); real objects are painted plates (car, steel ball, speedometer cluster), and the circle, track ring, velocity, change-of-velocity, acceleration and force arrows, the velocity circle and all working are coded; plates never stretched; one reasoning stage at a time; the calculation uses a task strip, an equation strip and grouped givens with units; every number recalculated in Python; g = 9.8 m s⁻² where needed; syllabus symbols (a_c = v²/r, v = 2πr/T, F_c = mv²/r, ω = Δθ/t); in-teaching prediction with a 3 s countdown; "Pause here to answer." then a 10 s countdown with the full worded question on screen; brief feedback with one crossed-out mistake; original HSC-style questions (A1 is the site's Activity 1 Q3 extended; A2 is the site's short-answer Q2); optional key-notes hold; Australian spelling; no em dashes; Year 11 ideas (vectors, Newton's first and second laws) recalled in a phrase, not re-taught.

Syllabus content (Physics Stage 6 (2017), Module 5 Advanced Mechanics; ledger ids `P5-IQ2-01`, `P5-IQ2-03`), quoted from the route JSON `syllabusActions`:

- `P5-IQ2-01`: "conduct investigations to explain and evaluate, for objects executing uniform circular motion, the relationships that exist between:" "centripetal force", "mass", "speed", "radius"
- `P5-IQ2-03`: "solve problems, model and make quantitative predictions about objects executing uniform circular motion in a variety of situations, using the following relationships:" "a_(c)=(v^(2))/(r)", "v=(2πr)/(T)", "F_(c)=(mv^(2))/(r)", "ω=(∆θ)/(t)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 53)

**Boundary:** starts on v10's final frame (the crane jib slewing steadily in top view, four equal tangent velocity arrows, "Δv = ?"). Teaches: speed (scalar) versus velocity (vector); uniform circular motion defined; the change of velocity between two nearby moments points to the centre (centripetal acceleration, at right angles to v); period, frequency, the radian, angular velocity ω = Δθ/t = 2π/T; v = 2πr/T and v = ωr; a_c = v²/r = ω²r derived from the velocity circle; the site's car worked examples 1 and 2 (26.2 m s⁻¹, 0.524 rad s⁻¹, 0.0833 Hz, 13.7 m s⁻²); F_net = mv²/r by Newton's second law, with "centripetal force" as the name of the inward net force, not an extra force; the "flung outwards" misconception. Investigating the relationships (P5-IQ2-01) is v16's job; this video gives the relationships v16 tests. Stops before any case with more than one real force (route stop): the flat-curve friction case is v12, the conical pendulum v13, banking v14, work v15.

## Decisions

- **Learner question (route wording kept).** "How can speed be constant while velocity keeps changing?" The answer, built in order: velocity carries direction, so a turning velocity is a changing velocity (2); the change points to the centre (3); the motion is described by T, f and ω, giving v = 2πr/T = ωr (4 to 6); the velocity arrow's tip goes round its own circle, which gives a = v²/r (7, 8); Newton's second law then needs an inward net force mv²/r (9).
- **Hook (v10 handoff, site hook re-objected).** The site's hook is a car at constant speed on a bend; v10 handed over a slewing crane seen from above, so the question is asked of the jib tip first, then the car takes over for numbers (4 onward), as on the site. Prediction chips "No: its speed is constant" and "Yes", 3 s countdown.
- **Speedometer beat (site "constant speedometer reading").** The dashboard cluster plate (existing) sits small beside the car in scene 4 with its needle still, to make "constant speed" concrete. Needle position is illustrative; no value is read.
- **Δv construction (site card 2 and the "Explain 6 marks" step 4).** Two velocity arrows from nearby moments are copied tail to tail and Δv is drawn from the first tip to the second; the interval then shrinks (40°, 20°, 5°) and Δv swings to aim at the centre. This is the route's "relate displacement of velocity vectors to inward acceleration".
- **Deriving a = v²/r (route entry knowledge: derive each new equation).** The site states a_c = v²/r without derivation. The design uses the velocity-circle argument: with every velocity arrow drawn from one point, the tip moves round a circle of radius v once per period, so the rate of change of velocity is 2πv/T; with T = 2πr/v this gives v²/r. It needs only v = 2πr/T (just taught) and the definition of acceleration. Similar triangles were considered and rejected (two diagrams and a small-angle limit in one scene). See author note (a).
- **Worked example (site worked examples 1 and 2, unchanged numbers).** r = 50 m, T = 12 s: v = 26.2 m s⁻¹, ω = 0.524 rad s⁻¹, f = 0.0833 Hz, a_c = 13.7 m s⁻² towards the centre. Three significant figures as the site gives. The car's v is carried unrounded (26.18 m s⁻¹) into a_c; 26.2²/50 = 13.73 also rounds to 13.7.
- **v = ωr with the crane (site "outer edge of a spinning DVD").** Two points on the jib, 15 m and 30 m out, sweep the same angle in the same time; the outer arc is twice as long. Qualitative ("twice as far out, twice as fast"); no crane slewing rate is narrated (author note b).
- **Force (site card 3, route `derive-radial-force`).** F_net = ma, so F_net = mv²/r towards the centre. "Centripetal force" is a name for the job done by real forces (site misconception 2 and the "Explain 6 marks" step 5). No numerical force here: the site's worked example 3 (1200 kg car, friction) is v12's opening case, and every real case has at least two forces (route stop).
- **Mistake scene (site misconception 1 and "If the net inward force is removed").** A steel ball on a smooth table held by a string to a central peg (top view; tension is the only horizontal force, and the table's support balancing the weight is not drawn in a top view). The string is cut; the ball leaves along the tangent. Kept because "flung outwards" is the misconception this exact motion invites. Centrifugal force is named once as the idea being corrected, not taught (rotating frames are out of scope).
- **Memory aid (scene 11): "Twice as fast, four times the pull."** Said with its conditions (same mass, same radius). It sets up v12 (friction demand rises with v²) and v16 (F against v²). See "Memory aid check".
- **Attempts (HSC style).** A1 (site Activity 1 Q3, extended): rotor r = 0.30 m, 4.0 rev s⁻¹: ω = 25.1 rad s⁻¹, v = 7.5 m s⁻¹, a = 1.9 × 10² m s⁻². A2 (site short-answer Q2): car B at twice car A's speed on the same track: a and F both four times. Crossed: A1 "ω = 4.0 rad s⁻¹"; A2 "twice".
- **Colour key (v01 key, extended for circular motion).** Velocity teal (as in v10's final frame; in a top view every velocity is horizontal, which matches the course's "horizontal teal"); change of velocity Δv and acceleration violet (the course's acceleration colour); net force amber; radius and givens navy; crossed chips red. Open decision 1.
- **Handoff (route next).** Scene 16 ends on the car on a flat roundabout in top view with a violet inward acceleration arrow and a dashed amber "F_net = mv²/r" arrow labelled "which real force?" (v12: "Which force supplies the inward acceleration on a flat curve?"). See "Final frame".
- **Site sources used:** hook (car at constant speed on a bend); vocabulary (uniform circular motion, period, angular velocity, centripetal acceleration, centripetal force); misconceptions 1 to 3 (scenes 2, 9, 10); card 1 and worked example 1 (4, 5); "v = ωr ... outer edge" (6); card 2, "Predict before substituting" and worked example 2 (3, 7, 8); card 3 "Critical understanding" and "If the net inward force is removed" (9, 10); Activity 1 Q3 (A1); short-answer Q2 (A2); "Explain 6 marks" steps 2 to 6 (2, 3, 9). Not used here: worked example 3 and the roundabout (v12); card 4 and the zero-work misconception (v15); the investigation card (v16); "Evaluate 5 marks" (a passenger, and rotating frames); Activity 1 Q2 and short-answer Q1 (a whirled string, which is a conical pendulum, v13); Activity 2 (multi-force identification, v12 to v14).
- **Site notes (site lesson 7, read 6 Nov):** no errors found in the sections used. Checked and correct: worked example 1 (26.18 m s⁻¹, 0.5236 rad s⁻¹, 0.08333 Hz), worked example 2 (13.7 m s⁻² either from 26.2 or unrounded), worked example 3 (6750 N), the roundabout (9.722 m s⁻¹, 6.30 m s⁻², 9452 N, given as 9450), Activity 1 Q1 to Q3 (3.2 m s⁻², 63.2 N, 7.5 m s⁻¹), short-answer Q1 (44.4 N). Note for root (no correction needed): Activity 1 Q2 and short-answer Q1 treat a whirled string as horizontal with r = L; the tension answers are still exact, because for a conical pendulum the tension is mω²L whatever the angle (T sin θ = mω²L sin θ).
- **Cause chain taught, in order:** (1) velocity is speed with a direction, so turning changes velocity (2); (2) a changing velocity is an acceleration (2); (3) the change of velocity over a short interval points to the centre (3); (4) one lap is one period, 2π radians and one circumference, so v = 2πr/T and ω = 2π/T (4, 5); (5) points further out cover more distance in the same time, v = ωr (6); (6) the velocity arrow's tip circles once per period, so a = 2πv/T = v²/r (7); (7) Newton's second law needs an inward net force mv²/r (9); (8) without it, the object keeps its velocity along the tangent (10).
- **Entry knowledge (route `entryKnowledge` and v10):** vectors and adding them tip to tail, acceleration as rate of change of velocity, Newton's first and second laws, circumference 2πr (Year 11). From v10: a crane turning at a steady rate is in rotational equilibrium (named in scene 1 only as "turning at a steady rate").
- **Learner-visible vocabulary (plain meaning at first use):** uniform circular motion (motion in a circle at constant speed, 2); centripetal (centre-seeking, 3); period T (time for one revolution, 4); frequency f (revolutions per second, 4); radian (arc length divided by radius, 4); angular velocity ω (angle turned per unit time, 4); tangent (the straight line that just touches the circle at one point, 10); centripetal force (the name for the inward net force, 9).
- **Legacy logic ported:** none. The coded family `m5-circular-motion` (`src/explainer/physics/module5/`, `circular()` in `model.ts`: position, tangent velocity and inward acceleration from θ, r and speed) is reused and extended (kit gaps below).
- **New explainer motion:** **circle stage** (extends `m5-circular-motion`: an object moving round a coded circle at a set period, tangent velocity arrows at chosen moments, a frozen-copy tray that places arrows tail to tail, a Δv construction between two copies with an interval that can shrink, right-angle marks); **velocity circle** (new, small: velocity arrows from one point, their tips on a circle of radius v, a rotating arrow synchronised with the object, a tip-speed readout); **crane top view** (inherited from v10's final frame: mast dot, rotating jib line, two marked points at 15 m and 30 m with swept arcs); **cut-string playback** (the steel ball plate leaving along the tangent at constant velocity); `AlignedAlgebra`; `NumberTicker` (lap clock); `Countdown` (3 s in scene 1; 10 s in scenes 12 and 14); `QuestionCard`; `Chip` with `cross`; `PenArrow`; `ScribbleCircle`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the circle stage on the left (top view, equal scales, about 1,000 × 700 px); working or the velocity circle on the right; nothing below the bottom 12% of the frame. Colour key above.
- **Colour roles (Revision 2, fixed for the whole video; root decision 10):** velocity teal; change of velocity Δv and acceleration violet; net force amber; radius, period, frequency and other givens navy; angles and swept arcs navy; framed answers in a dark-ink box; crossed mistakes and their hand tags red. Hand-font teacher tags take the colour of the quantity they mark, and the same colours run through the stages, the velocity circle, the working, the readouts and the key notes.
- **Type sizes (Revision 2, 1080p):** the current working line at least 44 px (scenes 5, 7, 8 and the feedback rows 52 px; the boxed "a = v²/r" and "F_net = mv²/r" 60 px); live readouts (scene 3 interval readout, scene 8 speed slider readouts) about 52 px; supporting lines, givens and chips 30 to 36 px; hand-font tags at least 30 px; nothing a student must read below 26 px. All text above the bottom 12% of the frame.
- **Anchor (Revision 2).** Scene 1 must open on v10's final frame (a coded top view), so the painted tower crane (`y12p-tower-crane-v1.png`, side view, empty cab; the crane of v09 and v10) slides in at the left on "turning at a steady rate" as a reminder inset of the real object, with a curved navy slew arrow round its mast; the top view stays the main stage. The car plate (scenes 4 to 9, 11, 16), the speedometer cluster (4) and the steel ball (10) carry the later teaching frames.
- **Simulation (Revision 2).** Scene 8 becomes a live control: a speed slider under the car on the track sweeps v from 13.1 to 52.4 m s⁻¹ and back to 26.2 while the car's lap speeds up and the violet acceleration arrow grows; readouts update every frame: teal "v", navy "r = 50 m" (fixed), violet "a = v²/r" (v = 13.09: a = 3.43; 26.18: 13.71; 39.27: 30.84; 52.36: 54.83 m s⁻²), with a ratio tag "×2 speed, ×4 a" when the slider passes 52.4. Scene 3's shrinking interval gains a live readout: navy "Δθ = 40°, 20°, 5°" and violet "Δv off the centre line: 20°, 10°, 2.5°" (half the interval; author note c), reaching 0° in the limit.
- **Stage changes (Revision 2).** Scenes 1 and 2 the crane top view (with the crane plate inset); scene 3 a camera push to a large Δv tray beside the circle; scene 4 the car track; scene 5 a clear change to full-width working; scene 6 the crane top view; scene 7 the car with the velocity circle; scene 8 a camera change to the speed-slider stage; scene 9 a clear change to the force stage (car large, arrows); scene 10 the table top. No set-up runs past about 70 s.
- **No human figures.** No riders, drivers or passengers; the car is a closed top-view plate; nobody cuts the string (the string line breaks).
- **Author notes (not learner copy):**
  (a) Velocity-circle derivation: for uniform circular motion v(t) has constant magnitude v and rotates at ω, so its tip moves on a circle of radius v at speed ωv = 2πv/T, and |dv/dt| = ωv = v²/r. The direction of dv/dt is at right angles to v, which is towards the centre of the real circle. The narration states only "the rate at which the velocity changes is the acceleration".
  (b) Crane numbers (not narrated): a slewing rate of one turn in 100 s gives ω = 0.0628 rad s⁻¹, 1.88 m s⁻¹ at 30 m and 0.94 m s⁻¹ at 15 m. The 30 m point is v10's load radius.
  (c) Δv direction: for positions at angles θ and θ + Δθ, Δv points along the inward normal at θ + Δθ/2 (towards the centre from the midpoint of the arc); in the limit it points at the centre from the object's position. The 40°, 20° and 5° frames show this.
  (d) The radian is dimensionless; "rad" is kept on screen to mark an angular quantity (site card 1).
  (e) Cut string: a ball on a smooth table keeps its velocity after the cut (no horizontal force; weight and the table's support still balance). Air resistance and table friction are ignored.
  (f) Pronunciations: "omega"; "delta v"; "two pi r over T"; "zero point zero eight three three hertz"; "a sub c" is avoided in narration ("centripetal acceleration").

- **Open decisions for root:**
  - **1. Velocity colour for circular motion (root).** Velocity teal (continuing v10's final frame), Δv and acceleration violet, net force amber. Confirm before v12 to v16 build on it (they use it).
  - **2. Velocity-circle derivation (learning review).** Scene 7 derives a = v²/r. If the review finds it too abstract for this level, keep the result, cut the derivation sentences (about 300 characters) and state "it can be shown that".
  - **3. Hook object (root).** The crane tip is the v10 handoff; the car takes over in scene 4. If root prefers one object throughout, start on the car with the crane only in scene 6.

Main question: *The tip of a slewing crane's jib, and a car lapping a 50 m track every 12 s, both move at constant speed. How can their speed be constant while their velocity keeps changing, and how big is the acceleration?*
Entry knowledge: vectors, acceleration as rate of change of velocity, Newton's first and second laws, circumference (Year 11); the steadily turning crane (v10).
Stops after: speed versus velocity; Δv towards the centre; T, f, ω and the radian; v = 2πr/T = ωr; a_c = v²/r = ω²r; F_net = mv²/r as a role; the tangent exit. No multi-force case.
Handoff: v12, which real force supplies the inward acceleration on a flat curve.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *v*, *Δv*, *a*, *T*, *f*, *ω*, *r*, *F*, *m*. Paper background and handwritten headline face as the explainer house style.

### 1. hook (is the tip accelerating?)
> Here's that crane again, seen from above, turning at a steady rate. The tip of its jib goes round and round a circle, and its speed never changes. Each of these arrows shows the tip's velocity at one moment, and they're all the same **length**. So here's a question. Is the tip of the jib **accelerating**? Make a **prediction**.

Visual: opens on v10's final frame (see "Opening frame"); the jib keeps slewing. On "turning at a steady rate" the painted tower crane plate (`y12p-tower-crane-v1.png`, side view, uniform scale, about 420 px wide) slides in at the left with a curved navy arrow round its mast and the hand tag navy "same crane, from above"; a dashed navy line joins its jib tip to the tip dot in the top view. On "length" the four teal arrows pulse together and the readout "speed: constant" glows. On "accelerating" two chips write beside the circle: "No: its speed is constant" and "Yes". Teal hand tag "same length" beside the four arrows and an ink pen ring round the "speed: constant" readout. On "prediction" a 3 s `Countdown` (chips 36 px).

### 2. speed versus velocity
> Speed only tells you how fast something's going. Velocity tells you how fast, and which way. Look at the four arrows copied side by side. They're the same length, so the speed is the same, but they point four different ways, so the velocity is **different** each time. Acceleration is the rate of change of velocity, not of speed. So yes, the tip is accelerating, the whole way round. Moving in a circle at a constant speed like this is called uniform circular **motion**.

Visual: on "Speed only tells you" a navy chip "speed: how fast (scalar)"; on "Velocity tells you" a chip "velocity: how fast and which way (vector)". On "copied side by side" the four tail-to-tail copies from v10 enlarge; on "different" each copy gets a small direction tick and the label "v₁ ≠ v₂ ≠ v₃ ≠ v₄". On "rate of change of velocity" a line writes: "a = Δv ÷ Δt". On "the tip is accelerating" the "Yes" chip ticks and the "No" chip is crossed. On "motion" a chip "uniform circular motion: constant speed, changing direction", and the heading writes on: "How can speed be constant while velocity keeps changing?". Hand tags: teal "same length, new direction" by the copies, violet "a = change of velocity" by the a line, with a teal pen ring round the four arrow heads. The crane plate inset fades out at the end of the scene.

### 3. which way does the velocity change?
> So which way is the velocity changing? Take two moments a little apart. Copy their velocity arrows so they start from the same point. The change in velocity, delta v, is the arrow that takes you from the tip of the first to the tip of the **second**. Now bring the two moments closer and closer together. The change ends up pointing straight at the centre of the **circle**. So the acceleration points towards the centre too. It's called centripetal acceleration, which means centre-seeking, and it's always at right angles to the **velocity**.

Visual: camera push (new stage): the circle moves left and a large tray fills the right half. The jib freezes; two positions 40° apart are marked on the circle with teal arrows v₁ and v₂. On "Copy their velocity arrows" the two arrows slide to a tray at the right and join tail to tail. On "second" a violet arrow "Δv" draws from v₁'s tip to v₂'s tip, and a dashed copy of it is placed at the midpoint of the arc, pointing inwards. On "closer and closer" the pair re-forms at 20° and then 5°, the tray updating each time and the dashed Δv on the circle swinging round, while a live readout (52 px) ticks: navy "Δθ = 40°, 20°, 5°" and violet "Δv off the centre line: 20°, 10°, 2.5°". On "circle" the dashed Δv lines up with the radius and points at the centre dot. On "towards the centre too" a violet arrow "a" grows from the tip towards the centre. On "velocity" a right-angle mark appears between the teal v and the violet a, and a chip "centripetal: centre-seeking". Hand tags: violet "points in" by the dashed Δv, violet "a ⟂ v" by the right-angle mark, and a violet pen arrow from the tray's Δv to the dashed Δv on the circle.

### 4. describing the motion
> To put numbers on this, we need a few ways to describe circular motion. Here's a car going round a circular track of radius fifty metres. It takes twelve seconds to do one lap. That's the period, capital T, the time for one complete **revolution**. The frequency, f, is the number of revolutions each second, so f equals one over **T**. We can also describe how fast it turns. An angle in radians is the arc length divided by the radius, so one full lap is two pi **radians**. Angular velocity, omega, is the angle turned divided by the time taken. For one lap, that's two pi over **T**.

Visual: camera change to a top view of a coded circular track ring with the car plate (`phys-y11-car-top-v1.png`, reused) driving round it; a lap clock (`NumberTicker`) counts 0 to 12 s and resets each lap; the speedometer cluster (`phys-y11-dashboard-cluster-v1.png`, reused) sits small at the top right with its needle still. On "radius fifty metres" a navy radius line "r = 50 m". On "revolution" a chip "period T: time for one revolution (s)" and "T = 12 s". On "f equals one over T" the line "f = 1/T (Hz)". On "arc length divided by the radius" an arc along the track lights with a matching radius, "θ = arc ÷ r (rad)"; on "radians" the whole ring lights, "one lap = 2π r ÷ r = 2π rad". On "angle turned divided by the time taken" "ω = Δθ ÷ t (rad s⁻¹)"; on "that's two pi over T" it extends: "one lap: ω = 2π/T". Hand tags: navy "one lap = 12 s" by the lap clock, navy "full turn = 2π" by the lit ring, and an ink pen ring round the still speedometer needle with the tag "steady speed".

### 5. worked example: speed, omega and frequency
> Let's find the car's speed. In one period it travels one circumference, two pi r. So v equals two pi r over T, which is two pi times fifty, over twelve. That's about twenty-six point two metres per **second**. Omega is two pi over twelve, about zero point five two four radians per **second**. And the frequency is one over twelve, about zero point zero eight three three **hertz**. As a check, f times T should equal one, and it **does**.

Visual: clear change to the calculation layout with the car small at the left. Task strip: "A car laps a circular track of radius 50 m every 12 s. Find v, ω and f." Givens in navy: "r = 50 m", "T = 12 s". Equation strip: "v = 2πr/T   ω = 2π/T   f = 1/T". On "one circumference" the track ring glows and "distance per lap = 2πr". On "twenty-six point two metres per second" `AlignedAlgebra` "v = 2π(50) ÷ 12 = 26.2 m s⁻¹". On "radians per second" the first line dims and "ω = 2π ÷ 12 = 0.524 rad s⁻¹" writes. On "hertz" "f = 1 ÷ 12 = 0.0833 Hz". On "does" "fT = 0.0833 × 12 = 1.00" with a tick. The three results sit in one dark-ink framed box at 52 px: "v = 26.2 m s⁻¹, ω = 0.524 rad s⁻¹, f = 0.0833 Hz". Hand tags: navy "one lap = one circumference" by the 2πr line, navy "keep 26.18" under v (carried to scene 8). A chip "ω = 12 ÷ 2π" fades in and is crossed (red tag "upside down: 2π over T").

### 6. further out, faster
> Put those together and you get v equals omega r, because two pi over T is just omega. This explains something about the crane. Every point on the jib turns through the same angle in the same time, so every point has the same omega. But a point twice as far out goes round a circle twice as big, so it moves twice as **fast**. When omega is fixed, speed grows in proportion to the **radius**.

Visual: on "v equals omega r" the line "v = 2πr/T = (2π/T) r = ωr" writes. On "the crane" a camera change to the crane top view (inherited); two dots on the jib at 15 m and 30 m (navy brackets from the mast dot). On "same angle in the same time" both dots sweep the same 60° wedge while the clock runs, leaving arcs. On "fast" teal arrows at the two dots, the outer one twice the length; the outer arc pulses beside a "2×" tag. On "radius" a chip "same ω: v ∝ r". Hand tags: navy "same angle, same time" on the wedge, teal "2× out, 2× fast" by the outer arrow, with a navy pen ring round the two swept arcs.

### 7. how big is the acceleration?
> Now, how big is the centripetal acceleration? Here's a neat way to see it. Back to the car. Take its velocity arrows from all the way round and start them from one point. As the car goes once round the track, the tip of its velocity arrow goes once round a circle too, a circle of radius v. The acceleration is how fast the velocity changes, so it's the distance that tip travels, two pi v, divided by the **period**. And the period is two pi r over v. Substitute that in, and the two pis cancel, leaving a equals v squared over **r**. Using v equals omega r, that's also omega squared **r**.

Visual: camera change back to the car on the track. On "start them from one point" a velocity circle (new) builds at the right: teal arrows from one centre point, their tips on a dashed circle labelled "radius v". On "goes once round a circle too" the car laps once while a single teal arrow sweeps round the velocity circle in step with it, its tip leaving a violet trail. On "two pi v" the trail is labelled "2πv"; on "period" the line "a = 2πv ÷ T". On "two pi r over v" "T = 2πr ÷ v" writes below. On "the two pis cancel" `AlignedAlgebra` "a = 2πv × v ÷ (2πr)" with both 2π's struck through together; on "v squared over" "a = v²/r" boxed. On "omega squared" "= (ωr)²/r = ω²r". "a = v²/r" sits in a dark-ink frame at 60 px. Hand tags: teal "tip circles once per lap" on the velocity circle, violet "how fast the tip moves" by "2πv ÷ T", and a violet pen arrow from the trail to "a = 2πv ÷ T".

### 8. the car's acceleration
> For the car, a equals twenty-six point two squared, over fifty. That's about thirteen point seven metres per second squared, towards the **centre**. That's bigger than the acceleration of a falling object. And notice the square. At the same radius, twice the speed means four times the **acceleration**. At the same speed, twice the radius means half the **acceleration**.

Visual: camera change to the speed-slider stage: the car on the track at the left, working at the right, the velocity circle gone. Task strip: "Find the car's centripetal acceleration." Equation strip "a = v²/r". Givens: "v = 26.2 m s⁻¹ (just found)", "r = 50 m". On "over fifty" `AlignedAlgebra` "a = 26.18² ÷ 50"; on "centre" "= 13.7 m s⁻² towards the centre" in a dark-ink frame (52 px) and a violet arrow on the car pointing to the track's centre. A chip "26.2 ÷ 50 = 0.52" fades in and is crossed (red tag "square the speed"). On "falling object" a small navy chip "g = 9.8 m s⁻²" beside it, with the violet hand tag "more than g". On "notice the square" the live speed slider appears under the car (see "Simulation"): it sweeps from 13.1 to 52.4 m s⁻¹, the car laps faster, the violet arrow grows, and the readouts tick (v, r = 50 m, a = 3.43, 13.71, 30.84, 54.83 m s⁻²); on "four times the acceleration" the slider rests at 52.4 with the chip "2v: a × 4" and the hand tag violet "×2 speed, ×4 a"; then it returns to 26.2. On "half the acceleration" a chip "2r: a × ½" and a navy ghost ring of radius 100 m round the track.

### 9. the net force points inwards
> Newton's second law says the net force points the same way as the acceleration. So anything in uniform circular motion needs a net force pointing towards the centre, of size m v squared over **r**. This is called the centripetal force. But it isn't a new kind of force. It's just a name for a job that real forces do, the overall push or pull towards the centre. Tension, friction, gravity or a normal force can do that job, on their own or **together**.

Visual: clear change to the force stage: the car plate large at the centre (about 520 px long), the track arc behind it. On "net force points the same way" an amber arrow "F_net" draws on the car alongside the violet "a", both towards the centre. On "m v squared over r" the line "F_net = ma = mv²/r (towards the centre)" boxed. On "called the centripetal force" a chip "centripetal force = the inward net force". On "isn't a new kind of force" a small free-body sketch beside the car with an extra arrow labelled "centripetal force" fades in and is crossed (red), with the caption "not an extra arrow". On "together" four chips write: "tension", "friction", "gravity", "normal force". Hand tags: amber "same way as a" between the two arrows, amber "a job, not a force" by the chip, and an amber pen ring round the boxed "F_net = mv²/r" (60 px). Chip "uniform circular motion: constant speed" under the box.

### 10. the flung-outwards mistake
> A common idea is that things moving in a circle get flung outwards. Picture a steel ball on a smooth table, kept in a circle by a string tied to a peg. Now cut the **string**. With no net force, the ball keeps the velocity it had at that instant, and it moves off in a straight line along the **tangent**, the line that just touches the circle. It doesn't fly straight out from the centre. Nothing was ever pushing it outwards. The string was only ever pulling it **in**.

Visual: clear change to a top view of a smooth table (coded pale rectangle), a navy peg dot at the centre, the steel ball plate (`phys-y11-steel-ball-v1.png`, reused, 60 px) going round on a coded string with an amber tension arrow along the string towards the peg. On "string" the string line snaps (the inner part retracts to the peg). On "tangent" the ball moves off in a straight line at constant speed, its teal velocity arrow unchanged, and a dashed tangent line draws through the release point. On "fly straight out" a dashed radial path draws outwards from the centre through the release point and is crossed (red), chip "flung outwards" crossed. On "in" the earlier tension arrow reappears as a faint ghost pointing to the peg, label "the string only pulled in". Hand tags: teal "keeps going straight" on the tangent path, amber "pull in, never push out" by the ghost arrow, and a teal pen ring at the release point.

### 11. memory aid
> Here's a quick way to remember why the square matters. Twice as fast, four times the pull. That holds when the mass and the radius stay the same, because the force needed is m v squared over **r**.

Visual: board clears to the car on the track. On "Twice as fast, four times the pull" the handwritten line writes large: "Twice as fast, four times the pull." On "r" "F = mv²/r" with v² circled in a violet pen ring, and a navy condition tag "same mass, same radius". The two lines sit in a framed memory card (hand lettering, amber and teal, 52 px), which is the card reused on the notes screen. Hold about 2 seconds.

### 12. attempt 1 (countdown, 10 seconds)
> Your turn. A laboratory rotor has a radius of zero point three zero metres and completes four point zero revolutions per second. Calculate the angular velocity of the rotor, the speed of a point on its rim, and the centripetal acceleration of that point. Pause here to answer.

Visual: `QuestionCard` (subject "Physics") arrives with its full text and diagram in one move (no word-by-word build; question text 36 px), worded as printed: "A laboratory rotor of radius 0.30 m completes 4.0 revolutions per second. Calculate: (a) the angular velocity of the rotor; (b) the speed of a point on its rim; (c) the centripetal acceleration of that point. (3 marks)" A small coded HSC-style diagram: a circle with a centre dot, a radius line "0.30 m" and a curved arrow "4.0 rev s⁻¹". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 1 (brief)
> Four revolutions per second means omega is two pi times four point zero, about twenty-five point one radians per **second**. The rim speed is omega r, twenty-five point one times zero point three zero, about seven point five metres per **second**. And a is v squared over r, about one hundred and ninety metres per second **squared**. The classic slip is writing omega as four, but four is the frequency in hertz, not the angle per **second**.

Visual: card shrinks to the top; "4.0 revolutions per second" and "0.30 m" underline. Equation strip "ω = 2πf   v = ωr   a = v²/r". On "radians per second" "f = 4.0 Hz, ω = 2π × 4.0 = 25.1 rad s⁻¹". On "seven point five metres per second" "v = 25.1 × 0.30 = 7.5 m s⁻¹" (the earlier line dims). On "metres per second squared" "a = 7.54² ÷ 0.30 = 1.9 × 10² m s⁻² (towards the centre)". On "not the angle per second" a chip "ω = 4.0 rad s⁻¹" fades in and is crossed (caption "4.0 is f, in Hz"). The three results sit in a dark-ink framed box (52 px): "ω = 25.1 rad s⁻¹, v = 7.5 m s⁻¹, a = 1.9 × 10² m s⁻²". Hand tag navy "rev s⁻¹ = Hz" under the underline. Hold about 1 second.

### 14. attempt 2 (countdown, 10 seconds)
> Last one. Two identical cars travel around the same circular track at constant speeds. Car B travels at twice the speed of car A. Compare their centripetal accelerations, and the net forces on them. Pause here to answer.

Visual: `QuestionCard` arrives with its full text in one move (question text 36 px), with a small coded top-view track and two car outlines labelled "A" and "B", worded as printed: "Two identical cars travel at constant speeds around the same horizontal circular track. Car B travels at twice the speed of car A. Compare the centripetal accelerations of the two cars and the net forces acting on them. Justify your answer using equations. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 15. feedback 2 (brief)
> Same track, so the same radius. Acceleration is v squared over r, so doubling v makes it two squared, four times as **big**. The cars are identical, so they have the same mass, and the net force is four times as big **too**. The slip is saying twice, which forgets that the speed is **squared**.

Visual: card shrinks to the top; "identical", "same circular track" and "twice the speed" underline. On "four times as big" `AlignedAlgebra` "a_B = (2v)²/r = 4v²/r = 4a_A". On "too" "F_B = m a_B = 4F_A". On "squared" a chip "twice" fades in and is crossed (caption "the speed is squared"). "a_B = 4a_A, F_B = 4F_A" sits in a dark-ink framed box (52 px); hand tag violet "2² = 4" by the square. Hold about 1 second.

### 16. handoff
> So a car going round a bend at a steady speed is accelerating towards the centre, and something has to provide a net force towards the centre. Here's a car on a flat roundabout. Its weight pulls down, and the road pushes up. So which real force can pull it **inwards**?

Visual: clear change to a top view of a flat roundabout (coded grey road ring with a central island, track lines only, no signs) with the car plate going round at a steady rate. On "towards the centre" a violet "a" arrow on the car points to the island's centre. On "weight pulls down, and the road pushes up" a small side-view chip shows two amber arrows "weight" (down) and "normal force" (up) with "vertical: no help inwards". On "inwards" a dashed amber arrow beside the violet one, "F_net = mv²/r", with a large "?" and the chip "Next: which force supplies the inward acceleration on a flat curve?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 17. key notes (quiet, hold about 50 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Uniform circular motion: constant speed, changing direction, so it accelerates.
2. T = time per revolution; f = 1/T; ω = Δθ/t = 2π/T.
3. v = 2πr/T = ωr.
4. a_c = v²/r = ω²r, towards the centre.
5. F_net = mv²/r inwards: a job done by real forces, not an extra force.

Memory aid (framed card under the notes, hand lettering, amber and teal as in scene 11): *Twice as fast, four times the pull.* Second line in the card: *F = mv²/r (same m, same r)*. Notes in the role colours, 32 px; about 300 characters of bullet text; no paragraphs.

## Teaching checks

- **Does it explain causes?** Why the tip accelerates at constant speed: velocity has direction, and acceleration is change of velocity (2). Why the acceleration points inwards: Δv over a short interval points to the centre (3). Why v = 2πr/T and ω = 2π/T: one lap is one circumference, 2π radians and one period (4, 5). Why outer points move faster: same ω, bigger circle (6). Why a = v²/r: the velocity tip circles once per period (7). Why an inward net force is needed: Newton's second law (9). Why the ball leaves along the tangent: no net force, so its velocity stays as it was (10).
- **Misconceptions addressed:** constant speed means zero acceleration (1, 2); uniform circular motion is equilibrium (2, 9: there is a net force); centripetal force is an extra force on the diagram (9, crossed); objects are flung outwards (10, crossed); ω equals f (crossed in 13); doubling speed doubles acceleration (8; crossed in 15).
- **One idea at a time:** direction of change (3) before describing quantities (4 to 6) before the size of the acceleration (7, 8) before force (9).
- **Video makes it easier:** equal arrows pointing different ways (1, 2); Δv swinging to the centre as the interval shrinks (3); the lap clock and the lit arc for radians (4); two jib points sweeping the same angle (6); the velocity arrow's tip circling in step with the car (7); the cut string and the tangent exit (10).
- **Response opportunity:** one prediction (3 s countdown) and two unseen HSC-style tasks with every condition visible (radius, revolutions per second; identical cars, same track, constant speeds, twice the speed), 10 s each with the invitation to pause; nothing answer-bearing. One crossed mistake each; feedback about 30 s and 21 s.
- **Avoided double teaching:** vectors, acceleration as rate of change of velocity and Newton's laws are recalled in a phrase; v10's slewing crane is reused, not re-explained.
- **Syllabus coverage:** `P5-IQ2-03`: all four listed relationships are derived or defined (a_c = v²/r, v = 2πr/T, F_c = mv²/r, ω = Δθ/t) and used in a worked example and two attempts. `P5-IQ2-01`: the relationships between centripetal force, mass, speed and radius are explained here (F ∝ m, F ∝ v², F ∝ 1/r); the investigation itself is v16.
- **Out of scope by design:** any case with two or more real forces (v12 to v14); work and energy (v15); the investigation (v16); rotating frames and centrifugal force as a frame effect.

## Practice questions and model answers

**Attempt 1 (scene 12; site Activity 1 Q3, extended, HSC style, 3 marks suggested, not an official marking scheme).** "A laboratory rotor of radius 0.30 m completes 4.0 revolutions per second. Calculate: (a) the angular velocity of the rotor; (b) the speed of a point on its rim; (c) the centripetal acceleration of that point."
Model answer: (a) f = 4.0 Hz, so ω = 2πf = 2π × 4.0 = 25.1 rad s⁻¹ (or T = 0.25 s and ω = 2π/T). (b) v = ωr = 25.13 × 0.30 = 7.5 m s⁻¹. (c) a = v²/r = 7.54² ÷ 0.30 = 1.9 × 10² m s⁻² towards the centre (or ω²r = 25.13² × 0.30 = 189 m s⁻²). Classic mistake (crossed): "ω = 4.0 rad s⁻¹".

**Attempt 2 (scene 14; site short-answer Q2, HSC style, 3 marks).** "Two identical cars travel at constant speeds around the same horizontal circular track. Car B travels at twice the speed of car A. Compare the centripetal accelerations of the two cars and the net forces acting on them. Justify your answer using equations."
Model answer: Same track, so same r. a = v²/r, so a_B = (2v_A)²/r = 4a_A. Identical cars have equal mass, and F_net = ma = mv²/r, so F_B = 4F_A. Both are four times as large because they depend on the square of the speed. Classic mistake (crossed): "twice as large".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Car (site worked example 1) | r = 50 m, T = 12 s | 4, 5, 7, 8 |
| Speed | 2π × 50 ÷ 12 = 26.18 m s⁻¹ ("about twenty-six point two"); 94.2 km h⁻¹ (not shown) | 5, 8 |
| Angular velocity | 2π ÷ 12 = 0.5236 rad s⁻¹ ("zero point five two four") | 5 |
| Frequency | 1 ÷ 12 = 0.08333 Hz ("zero point zero eight three three"); fT = 1 | 5 |
| Centripetal acceleration (site worked example 2) | 26.18² ÷ 50 = 13.71 m s⁻²; 26.2² ÷ 50 = 13.73; both 13.7 m s⁻²; also 2πv/T = 13.71 and ω²r = 13.71 | 7, 8 |
| Crane points (illustrative, not narrated) | 15 m and 30 m; one turn in 100 s gives ω = 0.0628 rad s⁻¹, 0.94 and 1.88 m s⁻¹ | 6 |
| Δv frames | 40°, 20°, 5° between the two moments | 3 |
| A1 (site Activity 1 Q3 extended) | f = 4.0 Hz; T = 0.25 s; ω = 25.13 rad s⁻¹; v = 7.540 m s⁻¹ ("seven point five"); a = 189.5 m s⁻² (1.9 × 10²) | 12, 13 |
| A2 (site short-answer Q2) | a_B = 4a_A, F_B = 4F_A | 14, 15 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov); Codex to re-check.

- 2π × 50 ÷ 12 = 26.1799; 2π ÷ 12 = 0.523599; 1 ÷ 12 = 0.0833333; 0.0833 × 12 = 0.9996 (shown as 1.00; with unrounded f, exactly 1).
- 26.1799² ÷ 50 = 13.7078; 26.2² ÷ 50 = 13.7288; 2π × 26.1799 ÷ 12 = 13.7078; 0.523599² × 50 = 13.7078.
- A1: 2π × 4.0 = 25.1327; 25.1327 × 0.30 = 7.5398; 7.5398² ÷ 0.30 = 189.496; 25.1327² × 0.30 = 189.496.
- Crane (author note b): 2π ÷ 100 = 0.0628319; × 30 = 1.885; × 15 = 0.942.

## Memory aid check

- **"Twice as fast, four times the pull."** Meaning, as said in scene 11: the inward net force needed is mv²/r, so at the same mass and radius it grows with the square of the speed; doubling speed needs four times the force. Assumptions checked (said in scene 11): same mass and same radius; uniform circular motion. It fails if the radius changes with the speed (for example a conical pendulum's radius grows as it speeds up, v13) and it says nothing about which real force supplies the pull. It helps a new case: A2 (identical cars, same track), v12 (friction needed rises with v², so the limit is reached quickly) and v16 (F against v² is a straight line). Introduced after the derivation (7 to 9).
- **Considered, not used:** "Velocity along the edge, acceleration to the middle" (accurate but restates scene 3); "Centripetal is a job, not a force" (kept for v12, where real forces are first named).

## Narration length estimate

Revision 2 count (6 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed; total = sum of scene strings): **6,274 characters**, 17 scenes. Characters per scene (1 to 17): 317, 464, 532, 571, 423, 383, 580, 360, 446, 459, 193, 276, 427, 220, 283, 265, 75. At 13.3 characters per second the speech is about 472 s; add about 3 s for the prediction countdown, about 3 s for the shrinking-interval frames in scene 3, about 3 s for the speed slider in scene 8, about 3 s for the cut-string exit in scene 10, 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 44 s more of the quiet notes hold (50 s in all; about 82 s of holds and countdowns): **about 554 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 7's derivation sentences (open decision 2); scene 8's "falling object" sentence; scene 10's last sentence.

## Opening frame

v10's final frame (designed in this wave, `phys-y12-m5-v10.md`): paper background; a coded top view: the mast as a navy dot at the centre, the jib as a line from it to a tip dot on a thin circle (the tip's path); teal velocity arrows of equal length tangent to the circle at four positions (top, left, bottom, right), with a readout "speed: constant"; at the side, the four arrows copied tail to tail, equal lengths, four directions, with "Δv = ?" between two of them; heading "How do clockwise and anticlockwise torques balance?"; a chip "Next: how can speed be constant while velocity keeps changing?". Scene 1 sets the jib slewing again and removes the "Next" chip on "accelerating"; the heading changes in scene 2.

## Final frame

The last explained frame (end of scene 16, before the key-notes board): paper background; a coded top view of a flat roundabout: a grey road ring of uniform width around a pale green central island with a navy centre dot, no signs or markings; the blue car plate (`phys-y11-car-top-v1.png`) on the ring at the right-hand side of the circle (3 o'clock position), nose pointing up the page (anticlockwise travel), with a short teal velocity arrow ahead of it along the tangent; from the car's centre a solid violet arrow "a" towards the island's centre dot and, just beside it, a dashed amber arrow "F_net = mv²/r" with a large "?"; at the top right a small side-view chip with two amber arrows, "weight" down and "normal force" up, captioned "vertical: no help inwards"; heading "How can speed be constant while velocity keeps changing?"; a chip "Next: which force supplies the inward acceleration on a flat curve?". v12 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m5-v11` (route phys-y12-m5-v11). Suggested explainer folder `src/explainer/lessons/phys-y12-m5-v11` and build folder `docs/production/claude-pm/lessons/p-y12-m5-v11` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 17 scene headings, all `### N.`): hook, speed-velocity, delta-v, describing-motion, worked-v-omega-f, further-out-faster, size-of-a, car-acceleration, net-force-inwards, flung-outwards, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Scene 1 is `explain` with a 3 s prediction countdown. `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: circle stage (extends `m5-circular-motion`), velocity circle, crane top view with the crane plate inset, speed slider with live readouts, cut-string playback, `AlignedAlgebra`, `NumberTicker`, `ScribbleCircle`, `PenArrow`, `Countdown`, `CameraStage`. Transitions (`pickTransition`): 1 to 2 camera continue (same crane top view); 2 to 3 camera push to the Δv tray stage (Revision 2); 3 to 4 camera change to the car track; 4 to 5 clear change to the calculation layout; 5 to 6 camera change to the crane; 6 to 7 camera change to the car; 7 to 8 camera change to the speed-slider stage (Revision 2); 8 to 9 clear change to the force stage (Revision 2); 9 to 10 clear change; 10 to 11 clear change; attempts and feedback card shrink to the top; 15 to 16 clear change; 16 to 17 fade to the notes board.

Holds: hook (3 s countdown), memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 50 s). Review evidence paths: `learning_review` = `checks/p-y12-m5-v11-learning-review.md`, `science_check` = `checks/p-y12-m5-v11-physics-check.md`.

## Assets

Have (inspected 6 Nov on a session contact sheet; scaled uniformly only, never stretched):
- `public/assets/physics/phys-y11-car-top-v1.png` (1600 × 800, RGBA; top view, roof on, no occupants visible): scenes 4 to 9, 11, 16.
- `public/assets/physics/phys-y11-dashboard-cluster-v1.png` (2400 × 1000, RGBA; speedometer cluster, no numerals): scene 4 (constant speed).
- `public/assets/physics/phys-y11-steel-ball-v1.png` (800 × 800, RGBA): scene 10.
- `public/assets/physics/y12p-tower-crane-v1.png` (1448 × 1086, RGBA; empty cab; delivered in brief 187 and inspected 6 Nov with the Read tool): scene 1 inset (Revision 2), the crane of v09 and v10.
- **Checked, not used:** `phys-y11-car-top-blue-v1.png` and `-yellow-v1.png` (portrait top views; the landscape plate turns more naturally on a ring, and two cars are not needed); `biology/b4-car-blue-v1.png` (side view; a top view carries circular motion); `phys-y11-crane-load-v1.png` (the crane is in top view here, where the load hangs out of sight below the hook).

Need (new plates, Codex): none.

Coded: crane top view, circular track ring and roundabout, table top and peg dot, string, tangent and radial guide lines, velocity, Δv, acceleration and force arrows, right-angle marks, the velocity circle, lap clock, calculation strips, crossed chips, attempt cards and their HSC-style rotor diagram, countdowns, key notes board.

Kit gaps (for the v11 build brief; shared with v12 to v16):
1. **Circle stage.** Extends `m5-circular-motion` (`circular(θ, r, speed)` in `src/explainer/physics/module5/model.ts`) with a plate that moves round a coded circle at a set period and rotates to face along the tangent, tangent velocity arrows at chosen moments, a tray that copies arrows tail to tail, a Δv construction between two copies with an adjustable interval, an inward acceleration arrow, right-angle marks, a lap clock, and swept-arc highlighting for angles. Every arrow comes from the same model as the motion.
2. **Velocity circle.** Velocity arrows drawn from one point with their tips on a dashed circle of radius v (on the stage's velocity scale), a single arrow rotating in step with the object, and a violet trail on its tip.
3. **Cut-string playback.** At a cue the string line breaks and the object continues along the tangent at its last velocity.

## Codex asset brief (Year 12 Physics M5 v11)

No new plates. Codex confirms, on a session contact sheet at about 400 px wide on the paper and dark board backgrounds, that `phys-y11-car-top-v1.png` shows no occupants through its roof or windows, and records the car plate's centre point and nose direction, in plate pixels, for the circle stage. Append the hand-in to `status.md`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the physics of every learner-visible claim: a constant-speed turning motion has a changing velocity and a non-zero acceleration; Δv over a short interval points towards the centre and is at right angles to v in the limit (author note c); one lap is 2π radians; v = 2πr/T = ωr; the velocity-circle derivation of a = v²/r (author note a); a = ω²r; 13.7 m s⁻² exceeds 9.8 m s⁻²; F_net = mv²/r is the inward net force, not an extra force; a cut string leaves the ball moving along the tangent (author note e).
3. Confirm the memory aid's assumptions (see "Memory aid check").
4. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
5. Confirm both attempt cards carry every condition (radius with unit, revolutions per second; identical cars, same track, constant speeds, twice the speed) and show nothing answer-bearing.
6. Confirm the syllabus quotes match the route JSON exactly and are labelled 2017.
7. Confirm no person, hand, face or body outline is drawn or requested (closed car plate; the string breaks with no cutter).
8. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
9. Confirm the narration character count and per-scene counts by script with the build parser rules.

## YouTube metadata (draft)

Title: Uniform Circular Motion: Constant Speed, Changing Velocity | HSC Physics Module 5

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module5/lesson07.sa.html

A car laps a circular track at a steady speed, so why is it accelerating? Velocity has a direction, and in a circle that direction never stops changing. See why the change in velocity points to the centre, learn period, frequency, radians and angular velocity, find v = 2πr/T = ωr, and derive the centripetal acceleration a = v²/r from a simple picture. Then use Newton's second law to see why every circular motion needs an inward net force, F = mv²/r, and why nothing gets flung outwards. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 5: Advanced Mechanics.
Syllabus content (NSW Physics Stage 6, 2017):
"solve problems, model and make quantitative predictions about objects executing uniform circular motion in a variety of situations, using the following relationships: a_c = v²/r, v = 2πr/T, F_c = mv²/r, ω = Δθ/t"
"conduct investigations to explain and evaluate, for objects executing uniform circular motion, the relationships that exist between: centripetal force, mass, speed, radius"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: balancing torques. Next: which force supplies the inward acceleration on a flat curve?

#HSCPhysics #Physics #CircularMotion #CentripetalForce #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v10; check that the Δv construction reads at playback speed, that the velocity-circle derivation is followable (open decision 2), that "centripetal force is a job" lands before v12, and that the attempt cards give nothing away), then the physics check and the Codex error check.
- The shrinking Δv interval, the velocity arrow circling in step with the car and the tangent exit carry the explanation; judge them at playback speed in the voiced preview.

## Revision 2 (6 Nov 2026)

Brief 188 findings (`checks/p-y12-m5-v11-learning-review.md`, `checks/p-y12-m5-v11-science-check.md`): 0 blocker, 1 should fix, 0 optional.
- **Should fix, S9 (uniform-motion condition).** Resolved: "So anything moving in a circle needs a net force pointing towards the centre" now reads "So anything in uniform circular motion needs a net force pointing towards the centre" (+8 characters), and a chip "uniform circular motion: constant speed" sits under the boxed F_net. The reports' keeps (velocity-circle derivation, period/frequency/radian meanings, tangent exit) are kept, so open decision 2 is closed: keep the derivation.

Join checks: the opening is still v10's final frame (re-read 6 Nov in `phys-y12-m5-v10.md` Revision 2: top view, four equal teal arrows, "speed: constant", tail-to-tail copies with "Δv = ?", the v10 heading and the "Next" chip). The crane plate enters on a cue in scene 1, after the opening frame. The final frame (scene 16) is unchanged, so the v12 join holds.

Mechanical fix: scene 4's two cue phrases now include the bold cue word "T" ("f equals one over T", "that's two pi over T").

Visual upgrade (to `../maths-visual-standard.md` and the build gate):
- Decisions gain "Colour roles", "Type sizes", "Anchor", "Simulation" and "Stage changes".
- Plate in scene 1: the painted tower crane (`y12p-tower-crane-v1.png`) slides in as an inset on "turning at a steady rate", linking the top view to the real crane.
- Live simulation: scene 8 gains a speed slider with live v, r and a readouts (Python: v²/50 gives 3.43, 13.71, 30.84, 54.83 m s⁻² at 13.09, 26.18, 39.27, 52.36 m s⁻¹), which shows "twice the speed, four times the acceleration" happening. Scene 3's shrinking interval gains a live Δθ and "Δv off the centre line" readout (20°, 10°, 2.5°: half the interval).
- Cuts: the scene 1 to 3 crane run (about 100 s) is split by a camera push to a large Δv tray in scene 3; the scene 7 to 9 car run (about 104 s) becomes three set-ups (velocity circle; speed-slider stage; force stage).
- Hand tags and a pen mark in role colours in every teaching scene ("same crane, from above", "same length", "same length, new direction", "a = change of velocity", "points in", "a ⟂ v", "one lap = 12 s", "full turn = 2π", "steady speed", "one lap = one circumference", "keep 26.18", "same angle, same time", "2× out, 2× fast", "tip circles once per lap", "how fast the tip moves", "more than g", "×2 speed, ×4 a", "same way as a", "a job, not a force", "keeps going straight", "pull in, never push out").
- Framed answers: v, ω and f (5), a = v²/r (7), 13.7 m s⁻² (8), F_net = mv²/r (9), feedback 1 and 2 results. New crossed slips: "ω = 12 ÷ 2π" (5) and "26.2 ÷ 50 = 0.52" (8).
- Scene 11 and the notes: the memory aid is a framed card with F = mv²/r; key notes cut from four dense items (about 480 characters) to five short bullets (about 300 characters); quiet notes hold 60 s to 50 s.
- Question cards now state that they arrive with their full text in one move; attempt 2 gains a small coded top-view track with cars A and B.
- Type sizes stated; colour roles fixed (velocity teal per root decision 10).

New plate requests: none (the crane plate exists).

Counts: 6,266 to 6,274 characters (scene sum); about 561 s to about 554 s.
