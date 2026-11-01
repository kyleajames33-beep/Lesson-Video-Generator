# Y11 Physics FA1 V17 (Physics 2025, Year 11, Focus Area 1): If forces come in equal and opposite pairs, why does anything move? (design)

Status: Revision 1 (2 Nov). Needs student learning review (key `p-y11-v17`), physics check (Codex) and a Codex error check before build. New plates requested (see "Codex asset brief"). Voicing follows the programme queue (Google AI Studio after the brief 124 pilot; physics after Year 12 Maths and Year 11 Biology). Nothing recorded; human listening pending.

Narration 6,143 characters, 16 scenes, about 564 s (9.4 minutes), counted by script with the build parser rules (see "Narration length estimate").

Scope: seventeenth video of the Year 11 Physics (2025) Focus Area 1 route, and the first of four on applying Newton's laws (v17 third law, v18 connected bodies, v19 friction, v20 real situations). Templates: `phys-y11-fa1-v05.md` and `phys-y11-fa1-v08.md` (physics format, colour key, readouts, plate names) and `math-a12-d10.md` (section list). Pre-design pack: `../pre-design/phys-y11/phys-y11-fa1-v17.md`. Site lesson read in full (2 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa1-fundamentals-of-mechanics/lesson16.sa.html` (orient, intentions, every force comes in a pair, equal forces different accelerations, apply, propulsion, short-answer practice, retrieve). Route entry: `phys-y11-fa1-v17` in `../../phys-y11-video-route.json` (route-approved by root, 1 Nov). Route stop: "Stop after the learner can answer: How can I explain and apply newton's third law?" (placeholder wording; root's learner question is used). Next: "phys-y11-fa1-v18: How can I explain and apply connected bodies?" (v18's root question: "How do forces pass between bodies that touch or are tied together?").

Owner rules applied: 2025 syllabus only; force, velocity and acceleration arrows, free-body boundaries, readouts and traces coded; trolleys, block, car, truck, rocket and sensors painted plates; no people, hands, faces or body outlines (no walking or swimming examples; propulsion shown with a rocket and a car's tyres); one reasoning stage at a time; worked example as task, equation and grouped givens; 3 s in-teaching prediction; "Pause here to answer." with a 10 s countdown and the full worded question on screen; brief feedback with one crossed mistake; original HSC-style questions; key-notes hold; Australian spelling; no em dashes; v16 recalled in one sentence.

Syllabus content point (Physics 11-12 (2025), Year 11, Focus Area 1; NESA content-system codename), quoted from the route JSON `syllabusActions`:

- `ci980c80f2`: "Use examples to describe the effects of Newton’s third law of motion"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

**Opening frame (assumption, open decision 1).** v16 is being designed in parallel. Its route `nextHandoff` reads "phys-y11-fa1-v17: How can I explain and apply newton's third law?", and its pack proposes that v16 stops "after identifying net force from a for speeding, slowing and turning; leave interaction pairs to v17". This design assumes v16's last frame is: one dynamics trolley (`y11p-dynamics-trolley-v1.png`) on a coded track with its free-body diagram (amber force arrows, the net force arrow thicker with a dark outline, an orange acceleration arrow) and the chip "Next: Newton's third law". If v16's last frame differs, only scene 1's first sentence and its first visual beat change (re-count).

**Boundary:** starts from v16's handoff (one object, its forces and its net force); a force is always one half of an interaction between two objects; Newton's third law, F(A on B) = −F(B on A); the pair is the same type of force, equal in size, opposite in direction and acts on different objects, so it never cancels; balanced forces on one object are not a pair; equal pair forces give unequal accelerations because each object has its own mass; propulsion (rocket thrust, a car's tyres on the road) (`ci980c80f2`). Stops at describing the effects of the third law. Not taught: objects that stay together (contact and rope systems; v18); friction as a calculation (v19; the road's forward push is named as friction in one sentence only); momentum (later focus area).

## Decisions

- **Learner question kept (route).** "If forces come in equal and opposite pairs, why does anything move?" The answer, built in order: when A pushes B, A also moves, so B must push A (2); the two pushes are a pair: same type, equal size, opposite direction, different objects (3); each object's free-body diagram contains only the force on it, so the pair never cancels, and each object accelerates (4); balanced forces on one object are a different thing (5); the effects differ because a = F/m uses each object's own mass (6 to 8); things propel themselves by pushing something else backwards (9).
- **The hook (paradox from the main question).** v16's free-body diagram is on screen; the narration says each of those forces has an equal and opposite partner, then asks why nothing cancels. The answer is withheld until scene 4. The site's hook (a rocket in deep space) is used in scene 9, where it answers "how do things start moving?".
- **The cause made visible (owner quality bar).** Two trolleys and a spring plunger (2): the student sees trolley A roll backwards although nothing but B touches it, which is the evidence that B pushed A. Force-sensor traces on both trolleys rise and fall as mirror images through the push. Paired amber arrows are drawn on the two separate bodies, each arrow starting on the body it acts on (2, 3). In scene 4 dashed boundaries isolate each trolley and only the arrow on that trolley stays inside its boundary: the student sees the pair split onto two diagrams. In scene 6 both trolleys roll apart at speeds set by a = F/m (the light trolley visibly faster).
- **Worked example (pack candidate 2, numbers unchanged).** m_A = 2.0 kg, m_B = 5.0 kg, pair force 10 N, smooth level track: a_B = 2.0 m s⁻² right, a_A = 5.0 m s⁻² left; ratio 2.5. **Precision:** ideal teaching values, two significant figures (grey tag "teaching data").
- **Site `we-1` (rifle recoil) not used.** The site infers the force on the rifle from the gas-on-bullet force; the partner of gas on bullet is bullet on gas (already logged, brief 141). The recoil idea (equal forces, unequal accelerations) is taught with the plunger trolleys, which form a true direct pair, and a rifle is avoided for a school audience. The rocket in scene 9 carries the "expelled mass" idea.
- **Balanced is not a pair (pack misconception and site activity item 3).** A block resting on a bench: weight and normal force are equal and opposite on the same object and of different types; their partners are the block pulling the Earth up and the block pushing down on the bench. Shown with the arrows' tails on the block and the partner arrows on the Earth (a coded ground arc) and the bench.
- **Car and truck (site orient-and-predict and misconception 2).** A 3 s prediction, then equal forces; a truck of four times the car's mass gives the car four times the acceleration (no other numbers). The plates have no people (empty cabs; the car plate is the inspected empty `b4-car-blue-v1.png`).
- **Propulsion without people (owner rule).** Rocket in space (site hook and card 3) and a car's driven tyres on a road (instead of the site's walking and swimming examples). The road's forward push on the tyres is named as friction in one sentence and the ice case ("the wheels spin") is a one-line pointer to v19.
- **Attempts (original).** (A1) A 0.15 kg ball falls; the Earth pulls it down with 1.5 N; Earth's mass 6.0 × 10²⁴ kg: partner = the ball pulls the Earth up with 1.5 N (gravitational, on the Earth); a_Earth = 2.5 × 10⁻²⁵ m s⁻². Crossed: "the Earth pulls harder on the ball than the ball pulls on the Earth". (A2) Sleds on smooth ice, A 30 kg with a plunger pushing directly on B 90 kg; a_B = 0.80 m s⁻² east: F on B = 72 N east; F on A = 72 N west; a_A = 2.4 m s⁻² west. Crossed: "a_A = 0.80 m s⁻²". A1 transfers the idea to a non-contact pair; A2 needs the pair to pass the force from one body to the other.
- **Mistake scene:** none separate. "Pairs cancel" (4, the main answer); "weight and normal force are a pair" (5, crossed); "the heavier body pushes harder" (8, crossed; feedback 1 crossed); "equal forces mean equal accelerations" (6; feedback 2 crossed); "rockets push on the air" (9, crossed).
- **Memory aid:** "Swap the names, flip the arrow." with the second line "Same size, same type, different objects." (see "Memory aid check").
- **Force colour (course decision).** Force arrows amber across v17 to v20. The v01 to v11 designs give no fixed force colour: v03 drew a single force arrow ink with an orange outline and left it as its open decision 4; v11's handoff shows an orange rope-force arrow. No v12 design exists yet (checked 2 Nov). Amber was set by the brief for v13 to v20 so that the parallel v13 to v16 designer and this one agree; root to confirm and back-apply to v03 and v11 if wanted. Velocity arrows teal and acceleration arrows orange (v05, v07). The net force, where shown, is a thicker amber arrow with a dark outline (v02's resultant rule).
- **Handoff (route next).** Two blocks pressed together and pushed, and two trolleys tied by a rope and pulled, each with its contact or tension pair drawn between the bodies; chip "Next: How do forces pass between bodies that touch or are tied together?". This is v18's opening frame.
- **Route refinement adopted (pack).** "Start with one interaction between two isolated objects. Stop after identifying the equal opposite forces on different bodies and their effects. Hand connected bodies to v18." Adopted as written; for root to enter in the route.
- **Site sources used:** orient-and-predict (car and truck); intentions (pairs act on different objects, why pairs never cancel, why equal forces give different accelerations, propulsion); key terms (third law, action-reaction pair, thrust; "recoil" shown in scene 2 without the word being needed); card 1 (F(A on B) = −F(B on A); same type, equal, opposite, different objects); card 2's idea (a = F/m with each mass; its rifle numbers not used, see above); activity item 3 (book on table becomes the block on a bench); card 3 (propulsion, rocket in space); misconceptions (both); Q3's idea (ball and Earth, original numbers in A1). Not used: walking and swimming (owner rule on people); the squid (Q1) and swimmer (Q2) items.
- **Site corrections (quoted from site lesson 16, read 2 Nov; for `../site-corrections-phys-y11.md`; not logged yet):**
  1. Q1 marking point and model answer: "the squid still accelerates because the forward reaction force is the net force acting on it (a = F/m)". In water the squid also has drag (and weight and buoyancy), so the reaction force is not the net force. Suggest: "the forward reaction force is unbalanced at first (larger than the drag), so the squid accelerates forward (a = F_net/m)".
  2. Q2 model answer: "On the swimmer's diagram only the forward push from the wall appears". Weight, buoyancy and drag also act on the swimmer. Suggest: "the only horizontal force on the swimmer during the push is the forward push from the wall".
  - Checked and correct: card 1 statement; quick check (C); two truths, one lie (D); card 3 (rocket needs no air); Q3 (4.9 N partner; "roughly 10⁻²⁴ m s⁻²" is the right order: 4.9 ÷ 6 × 10²⁴ = 8.2 × 10⁻²⁵). `we-1`'s gas-on-rifle inference is already logged (brief 141) and is not repeated.
- **Pack questions answered:** candidate 1 (A pushes B east with 5.0 N; partner) is the memory-aid scene's example in spirit (scene 10 uses the scene 2 trolleys); candidate 2 used unchanged as the worked example (6). Pack visual need met: paired carts with arrows on distinct bodies and labelled body boundaries, kept separate from each body's net force.
- **Cause chain taught, in order:** (1) every force has a partner, so why does anything move? (1); (2) A moves back although only B touches it: B pushed A; sensors show equal, opposite pushes (2); (3) third law and its four properties (3); (4) a free-body diagram holds only forces on one object, so the pair splits and each object accelerates (4); (5) balanced forces on one object are not a pair; find the real partners (5); (6) a = F/m with each mass: equal forces, unequal accelerations (6); (7) car and truck (7, 8); (8) propulsion: push something back, get pushed forward (9); (9) memory aid (10).
- **Entry knowledge (route `entryKnowledge`):** Stage 5 forces (contact and non-contact, weight). From v12 to v16 (assumed, parallel designs): a free-body diagram shows the forces on one object; the net force is their vector sum; F_net = ma; weight W = mg; normal force named. Recalled with one sentence and their visuals, not re-taught.
- **Learner-visible vocabulary (plain meaning at first use):** interaction pair (the two forces two objects exert on each other, scene 3), also called action and reaction (said once); thrust (the forward push of the exhaust gas on a rocket, scene 9); spring plunger (a spring-loaded rod on the front of a trolley that shoots out when released, scene 2); force sensor (a device that measures a push or pull and plots it against time, scene 2).
- **Legacy logic ported:** none.
- **New explainer motion (coded unless a plate is named):** **plunger release** (cross-fade between the cocked and released plunger-trolley plates at the release cue, the two trolleys then driven by x(t) from their accelerations during a short push and constant velocity after); **force-sensor traces** (two small force-time panels, one per trolley, drawn from one pulse function, A's trace negative as a mirror image, a shared time cursor); **paired arrows** (two amber arrows, each with its tail on its own body, labels "A on B" and "B on A", a thin amber link bracket joining them as "pair"); **body boundary** (dashed grey outline drawn around one body, everything outside dimming, free-body diagram slides out beside it); **ground arc and Earth pull** (a coded curved ground strip for the Earth with an amber arrow up on it); **exhaust parcels** (coded gas puffs leaving the nozzle, each with a short amber arrow backwards, the rocket's amber thrust arrow forwards); **tyre contact** (a zoom circle on the driven tyre with the road's amber arrow forwards and the tyre's amber arrow backwards on the road surface); `AlignedAlgebra`; `Countdown` (3 s and 10 s); `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout (constant):** heading top-left; the scene (track, bench, road or space) across the left two thirds at about 1,150 × 640 px; free-body diagrams, sensor traces and working in the right column.
- **No human figures.**
- **Author notes (not learner copy):**
  (a) Plunger push (scene 2, 6): ideal pulse F(t) = 10 sin(πt/0.20) N for 0 ≤ t ≤ 0.20 s (shown on the sensor panels as a smooth hump peaking at 10 N; the peak is the "10 N" of scene 6, which treats the push as 10 N for the calculation, author note b). Screen motion is slowed 5 times for the push so it can be seen; a grey tag "slowed down" shows during the push.
  (b) Scene 6 treats the push as a constant 10 N during contact (stated in the narration as "they exert ten newtons on each other"); the traces in scene 2 carry no numbers so they do not conflict. a_B = 10/5.0 = 2.0, a_A = 10/2.0 = 5.0 m s⁻². After a 0.20 s push at constant 10 N: v_B = 0.40 m s⁻¹, v_A = 1.0 m s⁻¹ (drives the rolling-apart speeds; not shown as numbers).
  (c) Block on bench (scene 5): no numbers; weight and normal force arrows equal length.
  (d) Car and truck (scene 8): truck mass = 4 × car mass (no values). Contact shown as a brief squash, then the car's speed change four times the truck's (velocity arrows teal, before and after; momentum not named).
  (e) A1: W = 0.15 × 9.8 = 1.47 N, given as 1.5 N; a_E = 1.5 ÷ 6.0 × 10²⁴ = 2.5 × 10⁻²⁵ m s⁻² (1.47 gives 2.45 × 10⁻²⁵, also 2.5 × 10⁻²⁵ to 2 s.f.).
  (f) A2: F_B = 90 × 0.80 = 72 N east; F_A = 72 N west; a_A = 72 ÷ 30 = 2.4 m s⁻² west.
  (g) Pronunciations: "F of A on B"; "two point oh kilograms"; "two point five times ten to the minus twenty-five metres per second squared"; "zero point eight zero".

Main question: *Every force comes with an equal and opposite partner. So why don't they cancel, and why does anything move at all?*
Entry knowledge (Stage 5 forces; v12 to v16 free-body diagrams, net force and F_net = ma, assumed).
Stops after: third law and its properties; why pairs never cancel; balanced forces are not a pair; equal forces, unequal accelerations; propulsion.
Handoff: v18, connected bodies.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key (forces new for v17 to v20; motion as v05 to v08): force arrows amber (`AMBER`), each drawn with its tail on the body it acts on; the net force a thicker amber arrow with a dark outline; velocity arrows teal; acceleration arrows orange; body boundaries dashed grey; sensor traces amber on white panels with a grey time cursor; working in ink with givens navy; current result bright, earlier items dim. Screen text writes units as m s⁻² and N; force labels as "F(A on B)".

### 1. hook (why doesn't everything cancel?)
> Last video, we added up the forces on one trolley to find its acceleration. Here's something strange about those forces. Every one of them has a partner, a force of the same size, pointing the opposite way. So if every force comes with an equal and opposite force, why don't they all cancel? Why does anything move at **all**? Let's find a partner, and see where it **acts**.

Visual: opens on v16's last frame (see "Opening frame"): the trolley on its track with its amber free-body arrows and net force arrow. The "Next" chip fades; heading writes on: "Newton's third law". On "partner" a faint amber ghost arrow appears opposite each of the trolley's arrows, overlapping it, so the arrows look as though they cancel; the net force arrow flickers towards zero and the trolley's acceleration arrow fades with it. On "all" a large chip "equal and opposite → cancel → no motion?" with a question mark. On "acts" the ghost arrows lift away off the trolley and fade (a promise, not the answer). The board clears to the track.

### 2. a pair you can see
> Here are two trolleys on a smooth, level track. Trolley A has a spring plunger, a spring-loaded rod, squashed and locked. Trolley B sits against it. When the plunger is **released**, it pushes B to the right, and B rolls away. But watch A. It rolls away too, to the **left**. Something must have pushed A. The only thing touching A is B. So while A pushed on B, B pushed back on A. Now put a force sensor on each trolley, where they touch. The two readings rise and fall together, the same size at every instant, in opposite **directions**.

Visual: the coded track (grey rail, tick marks every 10 cm). `y11p-plunger-trolley-cocked-v1.png` (A, facing right, plunger compressed) at the left of centre; `y11p-dynamics-trolley-v1.png` (B) touching its plunger, with labels "A" and "B" on small tags above. On "released" the plate cross-fades to `y11p-plunger-trolley-released-v1.png` (author note a; grey tag "slowed down" during the 0.20 s push); B rolls right with a teal velocity arrow growing. On "left" A rolls left with its own teal velocity arrow; the camera holds both in frame. On "Something must have pushed A" a grey question mark over A; on "The only thing touching A is B" a scribble circle rings the contact point. The trolleys reset (rewind, grey "replay" tag). On "force sensor" `y11p-force-sensor-v1.png` appears small on each bumper, and two force-time panels open in the right column ("force on B", upper; "force on A", lower; time axis "0 to 0.20 s", no values). The release replays slowed: the upper trace rises and falls as a positive hump, the lower as an identical negative hump, the shared cursor moving through both; on "directions" a grey dashed line joins the two peaks with a "same size" tag.

### 3. the third law
> This is Newton's third law. If object A exerts a force on object B, then B exerts a force on A that's equal in size and opposite in direction. These two forces are called an interaction pair, or an action and reaction. Three things are always true about a pair. The forces are the same type, here both contact pushes. They're equal in size and opposite in direction. And they act on two different **objects**, one on A, and one on **B**.

Visual: the trolleys are frozen at the moment of peak push (touching). Two amber arrows draw: "F(A on B)" with its tail on B pointing right, then "F(B on A)" with its tail on A pointing left, equal lengths, a thin amber bracket "pair" joining them. The law writes boxed in the right column: "F(A on B) = −F(B on A)". Three ticks build under it, one per clause: "same type (both contact)", "equal size, opposite direction", and on "objects" "act on different objects". On "objects" A's arrow pulses on A; on "B" B's arrow pulses on B.

### 4. why the pair never cancels
> Back to our puzzle. Forces only cancel when they act on the same object. So draw a boundary around just one object, the way you do for a free-body diagram. Each trolley's weight and the track's upward push balance, so look along the track. Inside the boundary around B, there's only one force of the pair, A's push to the **right**. Nothing balances it, so B accelerates to the right. Inside the boundary around A, there's only B's push, to the **left**, so A accelerates to the left. The two forces of a pair never appear on the same free-body diagram, so they can never cancel each **other**. That's why things move.

Visual: a dashed grey boundary draws around B; everything outside it dims. B's free-body diagram slides out into the right column: a dot with small grey equal weight and normal arrows (vertical, balanced, tagged "balance"), and on "right" the amber "F(A on B)" arrow alone along the track; an orange acceleration arrow grows beside it. The boundary moves to A: on "left" A's free-body diagram slides out below B's with "F(B on A)" alone and an orange acceleration arrow to the left. On "other" the two diagrams sit side by side with a grey vertical divider; the hook's chip "equal and opposite → cancel → no motion?" returns small and is crossed, replaced by "pair forces act on different objects: they never cancel".

### 5. balanced is not a pair
> Here's a common trap. A block rests on a bench. Gravity pulls it down with its **weight**. The bench pushes it up with a normal force, the same size. Equal and opposite, so are they a third-law pair? **No**. Both act on the same object, the block, and they're different types of force, one gravity, one a contact push. They balance because the block isn't accelerating. Their real partners are somewhere else. The partner of the weight is the block pulling the Earth **up**. The partner of the normal force is the block pushing down on the **bench**.

Visual: clear change. `y11p-wooden-block-v1.png` on a coded bench top (a pale wood-grey band); below the bench, a coded curved ground arc labelled "Earth". On "weight" an amber arrow "W (Earth on block)" down from the block; then "F_N (bench on block)" up, equal length. On "No" a chip "W and F_N: a pair?" fades in and is crossed; two grey tags: "same object" and "different types". On "up" an amber arrow "block on Earth" with its tail on the ground arc points up, and a thin bracket links it to W ("pair"). On "bench" an amber arrow "block on bench" with its tail on the bench surface points down, linked to F_N ("pair"). Right column: "Balanced: two forces on one object. Pair: one force on each of two objects."

### 6. worked example: equal forces, unequal accelerations
> The pair forces are equal. Are their effects? Trolley A has a mass of two point oh kilograms, and trolley B, five point oh kilograms. During the push, they exert ten newtons on each other. The track is smooth, so that's the only horizontal force on each. Each trolley obeys F equals m a, using the force on it, and its own mass. For B, ten divided by five point oh is two point oh metres per second squared, to the **right**. For A, ten divided by two point oh is five point oh metres per second squared, to the **left**. Same force, but the lighter trolley gets two and a half times the acceleration, so it moves away **faster**.

Visual: back to the trolleys (scene 2 set-up, reset), now with a mass stack `y11p-slotted-masses-v1.png` on B so it reads heavier; tags "A: 2.0 kg", "B: 5.0 kg". Calculation layout: task strip "Find each trolley's acceleration during the push"; givens group (navy): "m_A = 2.0 kg, m_B = 5.0 kg; pair force 10 N; smooth, level track; right = +", grey tag "teaching data". Equation row: "a = F ÷ m (for each trolley, its own force and mass)". Rows, one per cue: "a_B = 10 N ÷ 5.0 kg = 2.0 m s⁻² (right)" on "right"; "a_A = 10 N ÷ 2.0 kg = 5.0 m s⁻² (left)" on "left". On "faster" the release plays at real speed and the two trolleys roll apart (author note b), A covering 2.5 times B's distance; teal velocity arrows in the same ratio; chip "same force, different mass → different acceleration".

### 7. prediction: car and truck
> Now predict. A small car and a large truck collide head-on. During the crash, which one feels the bigger force, the car, the truck, or **neither**?

Visual: clear change. A coded road strip; `b4-car-blue-v1.png` (empty cabin) from the left facing right; `y11p-truck-side-v1.png` (empty cab) from the right facing left, both moving towards each other with teal velocity arrows, freezing just before contact. On "neither" three chips "car", "truck", "equal" and a 3-second countdown ring.

### 8. car and truck: equal forces
> It's **neither**. The car pushes on the truck, and the truck pushes on the car. That's one interaction pair, so the two forces are equal in size. Suppose the truck has four times the car's mass. Then the same force gives the car four times the acceleration. The car's motion changes far more violently, not because it's hit harder, but because it has less **mass**.

Visual: on "neither" the "equal" chip lights. The vehicles meet; at contact two equal amber arrows draw, "F(truck on car)" with its tail on the car pointing left, "F(car on truck)" with its tail on the truck pointing right, bracket "pair". Tags "m" (car) and "4m" (truck). Orange acceleration arrows: the car's four times the truck's length (author note d). The collision completes in slow motion: the car's teal velocity arrow shrinks and reverses sharply, the truck's shrinks a little. On "mass" a chip "the truck pushes harder" fades in and is crossed (caption "equal forces; the smaller mass gets the larger acceleration").

### 9. propulsion
> So how does anything get itself moving? It pushes something else backwards, and the partner force pushes it forwards. A rocket in deep space has nothing to push against. Its engine pushes exhaust gas backwards out of the nozzle, and the gas pushes the rocket **forwards**. That forward push is called thrust, and it doesn't need any air. A car does the same thing through its tyres. The driven tyres push backwards on the road, and the road pushes forwards on the **tyres**. That forward push from the road is a friction force, and it's what accelerates the car. On ice, the road can't push forwards hard enough, so the wheels just **spin**.

Visual: clear change to a dark starfield panel (coded dots). `y11p-rocket-v1.png` horizontal, nose right. Coded exhaust puffs stream left out of the nozzle, each with a short amber arrow "rocket on gas" pointing left; on "forwards" one large amber arrow "gas on rocket" on the rocket pointing right, bracket "pair", and the rocket accelerates right (orange acceleration arrow). On "doesn't need any air" a chip "rockets push on the air" fades in and is crossed. Pan down to the road strip: the blue car facing right; a zoom circle opens on the rear tyre's contact patch: an amber arrow "tyre on road" on the road surface pointing left, and on "tyres" "road on tyre" on the tyre pointing right, bracket "pair". The car accelerates right. On "friction" a tag "this push is friction (video 19)". On "spin" the road turns pale blue (ice tint), the road's arrow shrinks to a stub, the tyre's spoke marks spin, and the car barely moves.

### 10. memory aid
> To find the partner of any force, swap the names and flip the arrow. A on B becomes B on A, the same size and the same type, pointing the opposite **way**. And because the two forces act on different objects, they never **cancel**.

Visual: the plunger trolleys return small. The handwritten line writes large: "Swap the names, flip the arrow." Under it, smaller: "Same size, same type, different objects." On "way" the label "F(A on B)" animates its letters swapping to "F(B on A)" while its arrow flips onto the other trolley. On "cancel" scene 4's two free-body diagrams flash beside the line. Hold about 2 seconds.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. A zero point one five kilogram ball is dropped. The Earth's gravity pulls it down with a force of one point five newtons. Describe the third-law partner of this force, and explain why the ball is seen to accelerate but the Earth is not. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "A 0.15 kg ball is dropped. The Earth's gravitational force on the ball is 1.5 N downwards. (a) Describe the force that forms a Newton's third law pair with this force. (b) Explain why the ball is observed to accelerate but the Earth is not. (Mass of the Earth = 6.0 × 10²⁴ kg)" Tag: "HSC-style question, written for HSCScience". Beside it a small ball plate `y11p-steel-ball-v1.png` above a coded ground arc, with no arrows. The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 12. feedback 1 (brief)
> The partner is the ball pulling the Earth upwards, also with one point five newtons, a gravitational pull on the **Earth**. The forces are equal, but the Earth's acceleration is one point five divided by six point oh times ten to the twenty-four, about two point five times ten to the minus twenty-five metres per second squared, far too small to **notice**. The bigger Earth doesn't pull harder. The pull is equal, both **ways**.

Visual: card shrinks to the top; "1.5 N downwards" and "6.0 × 10²⁴ kg" underlined as used. On the card's picture: amber "Earth on ball, 1.5 N" down on the ball; on "Earth" amber "ball on Earth, 1.5 N" up with its tail on the ground arc, bracket "pair". Row on "notice": "a_Earth = 1.5 N ÷ 6.0 × 10²⁴ kg = 2.5 × 10⁻²⁵ m s⁻²". Boxed: "(a) ball pulls Earth up, 1.5 N, gravitational (b) equal forces; Earth's huge mass gives a tiny acceleration". On "ways" a chip "Earth pulls harder on the ball" fades in and is crossed. Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. Two sleds sit on smooth ice. Sled A, of mass thirty kilograms, carries a spring plunger that pushes directly on sled B, of mass ninety kilograms. During the push, sled B accelerates at zero point eight zero metres per second squared east. Find the force on sled B, the force on sled A, and the acceleration of sled A. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Two sleds rest on smooth, level ice. Sled A (mass 30 kg) carries a spring plunger that pushes directly on sled B (mass 90 kg). During the push, sled B accelerates at 0.80 m s⁻² east. Ignore friction. Calculate (a) the force on sled B, (b) the force on sled A and (c) the acceleration of sled A during the push. (3 marks)" Tag as before. Beside it two `y11p-sledge-v1.png` plates nose to tail on a coded ice line, labelled "A" and "B", with no arrows. The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 2 (brief)
> On B, F equals m a, ninety times zero point eight zero, seventy-two newtons **east**. By the third law, B pushes back on A with seventy-two newtons **west**. So A's acceleration is seventy-two divided by thirty, two point four metres per second squared **west**. Giving A the same acceleration as B forgets that the lighter sled gets the bigger **acceleration**.

Visual: card shrinks to the top; "pushes directly", "90 kg", "30 kg", "0.80 m s⁻² east" underlined as used. Rows: "F(A on B) = 90 kg × 0.80 m s⁻² = 72 N east" on "east"; on "west" "F(B on A) = 72 N west (third law)" with the two amber arrows on the sled plates; "a_A = 72 N ÷ 30 kg = 2.4 m s⁻² west" on the second "west". Boxed: "(a) 72 N east (b) 72 N west (c) 2.4 m s⁻² west". On "acceleration" a chip "a_A = 0.80 m s⁻²" fades in and is crossed. Hold about 1 second.

### 15. handoff
> So forces always come in pairs, and a pair never cancels, because its two forces act on different objects. Here, the objects pushed apart. Next, what about objects that stay together, pressed against each other or tied by a rope, and accelerate as **one**?

Visual: the memory line returns small at the top. The board clears to two small set-ups side by side on coded level surfaces: left, two `y11p-wooden-block-v1.png` plates touching, with an amber "push" arrow on the left block and, at the contact face, a short amber pair "F(1 on 2)" and "F(2 on 1)" pulsing once; right, two `y11p-dynamics-trolley-v1.png` plates joined by a coded rope, an amber "pull" arrow on the front trolley and a short amber pair at the two rope ends pulsing once. On "one" the chip "Next: How do forces pass between bodies that touch or are tied together?". This is the video's last frame. Hold about 2 seconds.

### 16. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Newton's third law: if A exerts a force on B, then B exerts a force on A that is equal in size and opposite in direction: F(A on B) = −F(B on A).
2. The two forces of a pair are the same type and act on different objects, so they never cancel. Forces cancel only when they act on the same object.
3. Balanced forces on one object (a resting block's weight and normal force) are not a third-law pair.
4. Equal pair forces can give unequal accelerations: each object obeys a = F/m with its own mass.
5. Propulsion: an object pushes something backwards (exhaust gas, the road) and the partner force pushes it forwards.

Memory aid (large, on the notes screen): *Swap the names, flip the arrow.* Second line: *Same size, same type, different objects.* At the end of the hold the notes cross-fade back to scene 15's last frame.

## Teaching checks

- **Does it explain causes?** Why there must be a partner force: trolley A moves backwards and only B touches it (2). Why pairs never cancel: a free-body diagram holds only the forces on one object, and the pair's forces are on two objects (4). Why equal forces give unequal accelerations: each object's acceleration is its own force over its own mass (6, 8). Why a rocket moves in space: it pushes gas back and the gas pushes it forward (9). Why weight and normal force balance without being a pair: both act on the block, and the block is not accelerating (5).
- **Misconceptions addressed:** "pairs cancel, so nothing moves" (1, 4; key note 2); "weight and normal force are a pair" (5, crossed; key note 3); "the bigger body pushes harder" (8, crossed; 12 crossed); "equal forces mean equal accelerations" (6; 14 crossed; key note 4); "rockets push on air" (9, crossed).
- **One idea at a time:** evidence (2), law (3), why no cancel (4), the trap (5), effects (6 to 8), propulsion (9); one row or one arrow per cue.
- **Video makes it easier:** the student watches A roll backwards with nothing but B touching it (2), sees mirror-image sensor traces (2), watches a boundary split the pair onto two diagrams (4), sees partner arrows land on the Earth and the bench (5), watches the light trolley roll away faster (6), and sees the road's arrow shrink on ice (9).
- **Response opportunity:** a 3 s in-teaching prediction (7); two unseen HSC-style tasks with every condition on the card, 10 seconds each with the invitation to pause, no arrows on the card pictures. One crossed mistake each; feedback about 31 s and 27 s.
- **Avoided double teaching:** free-body diagrams, net force and F = ma (v12 to v16) are used, not re-taught; v16 is recalled in one sentence.
- **Syllabus coverage:** `ci980c80f2`: examples and their effects: trolleys pushing apart (2 to 4, 6), block on a bench (5), car and truck (7, 8), rocket and car tyres (9), ball and Earth (A1), sleds (A2).
- **Out of scope by design:** connected bodies (v18); friction calculations (v19); momentum.

## Practice questions and model answers

**Attempt 1 (scene 11; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "A 0.15 kg ball is dropped. The Earth's gravitational force on the ball is 1.5 N downwards. (a) Describe the force that forms a Newton's third law pair with this force. (b) Explain why the ball is observed to accelerate but the Earth is not. (Mass of the Earth = 6.0 × 10²⁴ kg)"
Model answer: (a) The ball exerts a gravitational force of 1.5 N upwards on the Earth. (b) The two forces are equal in size, but a = F/m. The ball's acceleration is about 9.8 m s⁻²; the Earth's is 1.5 ÷ (6.0 × 10²⁴) = 2.5 × 10⁻²⁵ m s⁻², far too small to observe. Classic mistake (crossed): "the Earth pulls harder on the ball than the ball pulls on the Earth".

**Attempt 2 (scene 13; original wording, HSC style, 3 marks).** "Two sleds rest on smooth, level ice. Sled A (mass 30 kg) carries a spring plunger that pushes directly on sled B (mass 90 kg). During the push, sled B accelerates at 0.80 m s⁻² east. Ignore friction. Calculate (a) the force on sled B, (b) the force on sled A and (c) the acceleration of sled A during the push."
Model answer: (a) F = ma = 90 × 0.80 = 72 N east. (b) By Newton's third law, sled B pushes on sled A with 72 N west. (c) a = F/m = 72 ÷ 30 = 2.4 m s⁻² west. Classic mistake (crossed): "a_A = 0.80 m s⁻²".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Worked (pack candidate 2) | m_A 2.0 kg, m_B 5.0 kg; pair force 10 N; a_B 2.0 m s⁻² right; a_A 5.0 m s⁻² left; ratio 2.5 | 6, 10 |
| Car and truck | truck mass 4 × car mass; car acceleration 4 × truck's | 8 |
| A1 | 0.15 kg; 1.5 N; Earth 6.0 × 10²⁴ kg; a_E 2.5 × 10⁻²⁵ m s⁻² | 11, 12 |
| A2 | m_A 30 kg, m_B 90 kg; a_B 0.80 m s⁻² east; 72 N east; 72 N west; a_A 2.4 m s⁻² west | 13, 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (2 Nov); Codex to re-check.

- 10/5.0 = 2.0; 10/2.0 = 5.0; 5.0/2.0 = 2.5. After a 0.20 s push at 10 N: v_B = 2.0 × 0.20 = 0.40 m s⁻¹, v_A = 5.0 × 0.20 = 1.0 m s⁻¹; distance ratio 2.5.
- 0.15 × 9.8 = 1.47 ≈ 1.5 N; 1.5/6.0 × 10²⁴ = 2.5 × 10⁻²⁵; 1.47/6.0 × 10²⁴ = 2.45 × 10⁻²⁵.
- 90 × 0.80 = 72; 72/30 = 2.4.

## Memory aid check

- **"Swap the names, flip the arrow."** Written for this lesson, with the second line "Same size, same type, different objects." Meaning, as said in scene 10: to name a force's third-law partner, exchange the two objects in "X on Y" and reverse the direction; the partner has the same size and is the same type of force. Assumptions checked: true for every interaction under Newton's third law in this course (contact, gravitational; the course does not reach the magnetic cases where the simple form needs care); "same type" blocks the weight-and-normal trap (5); "different objects" carries the answer to the main question. It helps a new case: given any force written as "X on Y", the student can name the partner at once (A1 uses it, feedback says it aloud). Introduced after the law and its evidence (2 to 9).
- **Considered, not used:** "Action equals reaction" (the site's phrasing; it hides the different objects, which is the whole point); "every action has an equal and opposite reaction" (kept only in spirit; "action" invites a cause-and-effect order the law does not have).

## Narration length estimate

Revision 1 count (2 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **6,143 characters**, 16 scenes. Characters per scene (1 to 16): 367, 528, 429, 606, 534, 618, 143, 357, 629, 223, 269, 418, 349, 346, 252, 75. At 13.3 characters per second the speech is about 462 s; add about 20 s of holds and settling (the release and replay in 2, the boundary slides in 4, the rolling-apart in 6, the collision in 8, the rocket and ice beats in 9, the 2-second memory hold), 3 s for the prediction countdown, 20 s for two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 55 s more of the quiet notes hold (about 102 s of holds): **about 564 s**. Inside the 5,500 to 6,800 band and under the 570 s cap. One syllabus point with five examples fills it without padding. Feedback: scene 12 about 32 s, scene 14 about 27 s (including the 1 s holds). Scenes 4, 6 and 9 are the longest (about 46 to 47 s each); if the learning review finds the video long, cut the ice sentence in 9 (v19 covers it) and the "replay" beat in 2.

## Scene list and build ids

Lesson key `p-y11-v17` (route phys-y11-fa1-v17). Suggested explainer folder `src/explainer/lessons/phys-y11-fa1-v17` and build folder `docs/production/claude-pm/lessons/p-y11-v17` (root to confirm).

In order (kebab-case; 16 scene headings, all `### N.`): hook, pair-evidence, third-law, no-cancel, balanced-not-pair, unequal-accelerations, predict-collision, collision, propulsion, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except predict-collision (`hold`: the 3 s prediction), attempt-1, attempt-2 (`hold`: the learner reads the worded question and works during the countdown) and key-notes (`hold`: the learner copies five notes). Transitions (`pickTransition`): v16's last frame continues into scene 1 (camera continue); 1 to 2 board clear to the track; 2 to 3 to 4 camera continue (same trolleys); 4 to 5 clear change (bench); 5 to 6 clear change (trolleys reset); 6 to 7 clear change (road); 7 to 8 camera continue; 8 to 9 clear change (space, then pan down to the road); 9 to 10 camera continue; attempts and feedback card shrink to the top; 14 to 15 board clear; 15 to 16 fade to the notes board, and the notes cross-fade back to scene 15's last frame at the end.

Holds: predict-collision (3 s countdown), attempt-1, attempt-2 (10 s countdowns after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/p-y11-v17-learning-review.md`, `science_check` = `checks/p-y11-v17-physics-check.md`.

## Assets

Have (inspected 2 Nov; uniform scaling only, never stretched):
- `public/assets/biology/b4-car-blue-v1.png` (1600 × 800, RGBA; side-view hatchback facing right, empty seats, no driver): scenes 7 to 9.
- Inspected and rejected: `public/assets/biology/m7-stock-truck-v1.png` (three-quarter view, photographic style; does not match the side-view car); `public/assets/earth.png` (glossy 3D globe, off house style; the Earth is a coded ground arc instead).

Requested by earlier designs (not yet painted; reused here):
- `y11p-dynamics-trolley-v1.png` (v09's asset brief): scenes 1 to 4, 6, 10, 15.
- `y11p-steel-ball-v1.png` (v10's asset brief): scene 11.
- `y11p-sledge-v1.png` (requested in the v12 design per v11's handoff): scenes 13, 14. If v12's sledge brief is not written, add it to this brief (side view, nose right, empty, wooden slats and runners).

Need (new plates, Codex), in priority order: see "Codex asset brief".

Coded: track, bench top, road strip, ice tint, starfield, ground arc, exhaust puffs, all arrows (course-kit `Arrow` with `AMBER`, teal and orange), boundaries, sensor panels (`Panel`, `DataGraph` style axes), zoom circle, `AlignedAlgebra`, `Countdown`, `QuestionCard`, `Chip` with `cross`, `KeyNotes`, `Heading`. v05's `MotionTrack` drives trolley, car and sled positions from their x(t).

Kit gaps (for the build brief):
1. **`ForcePair`** (new, physics): two arrows of equal length and opposite direction, each anchored to a supplied body box (tail on the body's edge or centre), with labels "F(X on Y)", an optional bracket "pair", and a `swap` animation (labels exchange letters while the arrow flips to the other body). Reused by v18 to v20.
2. **`BodyBoundary`**: dashed outline around a plate's bounding box with outside dimming and a free-body-diagram slide-out slot.
3. **`SensorTrace`**: small force-time panel drawn from a supplied function with an optional mirrored partner and shared cursor.

## Codex asset brief

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/phys-y11-fa1-v17.md`, route entry phys-y11-fa1-v17. Paint after the learning review, physics check and Codex error check pass and the owner gives the go-ahead. Every plate: transparent PNG with a true alpha channel and clean edges with no coloured fringe or halo (check on a black and a white background), ink and watercolour in the house style matched to `public/assets/biology/b4-car-blue-v1.png` (line weight, palette, paper texture), at least 8 per cent clear margin, no text, labels, letters, numbers, brand names, people, hands, faces, drivers, backdrop, glow or ground shadow. Exact side views stand with their lowest points (wheels, base, runners) level on one horizontal line. Never stretch to fit; keep the native aspect ratio.

1. `y11p-plunger-trolley-cocked-v1.png` and `y11p-plunger-trolley-released-v1.png` (both 2000 × 1000 px, identical canvas, identical trolley position so a cross-fade shows only the plunger moving): the same trolley as `y11p-dynamics-trolley-v1.png`, side view facing right, with a spring plunger at its front end: a short metal rod inside a visible coil spring, ending in a round flat pad. Cocked: rod pushed in, spring compressed, a small latch visible. Released: rod extended about one fifth of the trolley length, spring relaxed. Essential (scenes 2 to 6, 10).
2. `y11p-force-sensor-v1.png` (1000 × 800 px): a school force sensor, side view: a small rectangular grey-blue plastic body with a short flat bumper disc on one end and a short cable leaving the other, no screen and no markings. Must read at 120 px wide mounted on a trolley's end. Essential (scene 2; reused in v18 and v19).
3. `y11p-slotted-masses-v1.png` (1000 × 1000 px): a stack of four brass slotted masses on a hanger stem, side view, seated as if on a flat surface. Essential (scene 6; reused in v18).
4. `y11p-wooden-block-v1.png` (1600 × 1000 px): a plain rectangular wooden block, side view with a little of the top face, pale timber with visible grain, a small screw eye on its right end (for strings in v18 to v20), no markings. Essential (scenes 5, 15; reused in v18 to v20).
5. `y11p-truck-side-v1.png` (2400 × 1000 px): a flatbed truck in exact side view facing right (it is mirrored to face left), cab and an open flat tray (root decision: reused for v20 attempt 2 with a crate on the tray), empty cab with no driver, colours distinct from the blue car (deep red cab, pale grey box), the same scale feel as `b4-car-blue-v1.png` (about 1.8 times its length in the scene). Essential (scenes 7, 8).
6. `y11p-rocket-v1.png` (2400 × 800 px): a simple uncrewed rocket in exact side view, long axis horizontal, nose to the right, cylindrical white body with two coloured bands, three tail fins, an open engine nozzle at the left end, no flame or exhaust (the exhaust is coded), no windows with figures, no flags or text. Essential (scene 9; reused in the FA2 and later videos as needed).

Report inspection on the dark board background at about 150 px and 600 px wide. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/phys-y11-v17-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the physics claims: third-law pairs are the same type, equal in size, opposite in direction and act on different objects; weight and normal force on a resting block are not a pair, and their partners are the block on the Earth and the block on the bench; the road's forward push on a driven tyre is friction; a rocket's thrust is the gas's push on the rocket and needs no air; on ice the friction available is small.
3. Confirm each force arrow's tail is drawn on the body the force acts on, and that no free-body diagram contains both forces of a pair.
4. Confirm the scene 6 condition (smooth level track; pair force the only horizontal force) is spoken and on screen, and that A2's card states smooth ice and "pushes directly".
5. Confirm both attempt questions are original in wording, carry every needed value, and that the card pictures show no arrows.
6. Confirm the memory aid's conditions are on screen and spoken (same size, same type, different objects).
7. Confirm the syllabus quote matches the route JSON exactly and no 2017-syllabus label appears.
8. Confirm no em dash (U+2014) anywhere in this file, Australian spelling, and no people, hands or faces in any plate request.
9. Confirm the narration character count by script with the build parser rules.
10. Add site corrections 1 and 2 under Decisions to `../site-corrections-phys-y11.md` (owner record only).

## YouTube metadata (draft)

Title: Newton's Third Law: Why Equal and Opposite Forces Don't Cancel | Year 11 Physics

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa1-fundamentals-of-mechanics/lesson16.sa.html

If every force has an equal and opposite partner, why does anything move? Watch two trolleys push apart: trolley A rolls backwards although only trolley B touches it, so B must push back. Newton's third law says the two forces are equal in size, opposite in direction, the same type, and act on different objects, which is why they never cancel. See why a resting block's weight and normal force are not a pair, why a car and a truck feel equal forces in a crash, and how a rocket and a car's tyres use the third law to get moving. Two exam-style questions at the end.

Year 11 Physics (2025 syllabus), Focus Area 1: Fundamentals of mechanics.
Syllabus content (NSW Physics 11-12, 2025):
"Use examples to describe the effects of Newton’s third law of motion" (ci980c80f2)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

Builds on: Forces on accelerating objects (previous video). Next: Connected bodies.

#Year11Physics #Physics #NewtonsLaws #HSCScience

## Open decisions

- **1. Opening frame (root, with v16's designer).** This design assumes v16 ends on one trolley with its free-body diagram, net force and the chip "Next: Newton's third law". If v16's last frame differs, scene 1's first sentence and first visual beat change; nothing else depends on it.
- **2. Force colour.** Amber for force arrows from v17 (brief instruction; v03's ink-with-orange-outline was provisional). Root to confirm across v12 to v16 and the course.
- **3. Rifle recoil.** The site's `we-1` (rifle) is not used, for the logged physics reason and the school audience. If root wants a recoil example, a cannon fixed to a trolley firing a ball works with the same pair logic only if the ball and cannon push directly on each other through massless gas; this design does not recommend it.
- **4. Site link form.** As v05.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from Stage 5 forces and the v12 to v16 free-body diagrams; check that A rolling backwards makes the partner force feel caused; that the boundary split answers the main question; that the block-on-bench trap is clear without overload; that the attempt cards give nothing away), then the Codex physics check and error check.
- The plunger release, the mirrored sensor traces and the boundary split carry the explanation; judge them at playback speed in the voiced preview.
