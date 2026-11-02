# Y11 Physics FA1 V18 (Physics 2025, Year 11, Focus Area 1): How do forces pass between bodies that touch or are tied together? (design)

Status: Revision 2 (3 Nov): brief 149 repairs applied (1 blocker: the pulley is frictionless with negligible rotational inertia, stated in narration, diagram and notes; 3 should-fix: "wouldn't accelerate downwards", "only unbalanced outside force along the track", unsupported prevalence claim removed; delivered plate names used). Needs a Codex error check. Independent learning review and physics check are in `checks/p-y11-v18-learning-review.md` and `checks/p-y11-v18-science-check.md`. Voicing follows the programme queue (Google AI Studio after the brief 124 pilot; physics after Year 12 Maths and Year 11 Biology). Nothing recorded; human listening pending.

Narration NARR_COUNT characters (Revision 2), 14 scenes, about NARR_SECS s, counted by script with the build parser rules (see "Narration length estimate").

Scope: eighteenth video of the Year 11 Physics (2025) Focus Area 1 route, the second of four on applying Newton's laws. Templates: `phys-y11-fa1-v05.md` and `phys-y11-fa1-v08.md` (physics format) and `math-a12-d10.md` (section list); `phys-y11-fa1-v17.md` (Revision 1, written just before this one; its scene 15 is this video's first frame; force colour and plates). Pre-design pack: `../pre-design/phys-y11/phys-y11-fa1-v18.md`. Site lesson read in full (2 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa1-fundamentals-of-mechanics/lesson17.sa.html` (orient, intentions, one acceleration for the whole system, finding the tension, apply, bodies in direct contact, short-answer practice, retrieve). Route entry: `phys-y11-fa1-v18` in `../../phys-y11-video-route.json` (route-approved by root, 1 Nov). Route stop: "Stop after the learner can answer: How can I explain and apply connected bodies?" (placeholder; root's learner question used). Next: "phys-y11-fa1-v19: How can I explain and apply friction: static vs kinetic?" (v19's root question: "Why does it take more force to start something sliding than to keep it sliding?").

Owner rules applied: as v17 (2025 syllabus only; arrows, boundaries, ropes and readouts coded; trolleys, blocks, car, trailer and sensor painted plates; no people; one reasoning stage at a time; task, equation and grouped givens; 3 s prediction; "Pause here to answer." with a 10 s countdown and the full worded question; brief feedback with one crossed mistake; original HSC-style questions; key-notes hold; Australian spelling; no em dashes; v17 recalled in one sentence).

Syllabus content point (Physics 11-12 (2025), Year 11, Focus Area 1; NESA content-system codename), quoted from the route JSON `syllabusActions`:

- `ciecc7b5bd`: "Analyse the forces acting on connected bodies in physical contact and linked by ropes using vector diagrams and Newton’s laws of motion"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

**Opening frame.** v17 (Revision 1) ends scene 15 on two set-ups on coded level surfaces: left, two touching wooden blocks with an amber push arrow and the contact pair at their shared face; right, two dynamics trolleys joined by a coded rope with an amber pull arrow on the front trolley and the tension pair at the rope ends; the memory line "Swap the names, flip the arrow." small at the top; the chip "Next: How do forces pass between bodies that touch or are tied together?". V18 opens there: the chip becomes the heading, the blocks slide out left (they return in scene 6) and the trolleys move to centre.

**Boundary:** starts from v17's handoff; bodies joined by a taut rope or pressed together share one acceleration; whole system first, a = F_external ÷ m_total, because the forces between the bodies are inside the system and cancel; then one body, with its own free-body diagram, for the tension or contact force; tension is less than the applied force because the rope drags only part of the mass; each force between bodies has a third-law partner on the other body (`ciecc7b5bd`). All surfaces smooth (friction negligible) and ropes light and taut. A light rope over a free pulley (a hanging mass pulling a trolley) is included as the rope that turns a corner (open decision 2). Not taught: friction (v19; the handoff); two hanging masses (Atwood machines); inclined planes (v21, v22); ropes at angles.

## Decisions

- **Pulley scene (added, open decision 2).** Trolley 4.0 kg on a smooth bench, hanging mass 1.0 kg, light rope over a frictionless pulley of negligible rotational inertia, g = 9.8 m s⁻²: W = 9.8 N drives the system; a = 9.8 ÷ 5.0 = 1.96 m s⁻² (about 2.0); T = 4.0 × 1.96 = 7.8 N, less than the weight, because the hanging mass must have a net force downwards to accelerate downwards. Original numbers. Equal tension along the rope needs both a light rope and a pulley that is frictionless and has negligible rotational inertia (a massive pulley would need unequal tensions to spin up).
- **Learner question kept (route).** "How do forces pass between bodies that touch or are tied together?" The answer, built in order: a taut rope or a solid contact makes the bodies move together, so they share one acceleration (2); the system boundary encloses the forces between the bodies, which cancel, so the acceleration comes from the outside force and the total mass (3); a boundary around one body shows the rope's tension as the only force along the track, so T = m × a for that body (4); the tension depends on how much mass is behind the rope (5); pressing bodies together passes a contact force by the same method, and its partner pushes back on the other body (6); a rope over a pulley passes the same tension round a corner, and a hanging weight can be the outside force (7).
- **The hook (site orient-and-predict, sharpened).** "How hard does the rope pull on the back trolley? Twenty newtons, more, or less?" A 3 s prediction. It is tempting to say 20 N (no prevalence claim is made); the answer (12 N) is the surprise and drives scenes 4 and 5.
- **The cause made visible (owner quality bar).** Same velocity: the two trolleys' teal velocity arrows grow in exact step, and a ghost "if the back one lagged" shows the rope having to stretch, which it cannot (2). The system boundary closes round both trolleys and the rope; the rope's two inside pulls draw as equal amber arrows and fade together as "inside: cancel", leaving the single outside pull (3). A force sensor spliced into the rope reads 12 N while the pull's sensor reads 20 N, so the number is measured, not only calculated (4). Swapping which trolley is pulled leaves the acceleration the same but drops the rope's sensor to 8 N, as a highlighted "mass behind the rope" bracket shrinks from 3.0 kg to 2.0 kg (5).
- **Worked example 1 (site `we-1`, unchanged numbers).** Front 2.0 kg pulled by 20 N, back 3.0 kg, light string, smooth: a = 20 ÷ 5.0 = 4.0 m s⁻²; T = 3.0 × 4.0 = 12 N; check on the front trolley 20 − 12 = 8 N = 2.0 × 4.0. Shown with trolleys on a smooth track rather than blocks on a frictionless table (the same physics; trolleys make negligible friction believable; the handoff frame from v17 shows trolleys). **Precision:** ideal teaching values (grey tag "teaching data"); results to two significant figures as on the site.
- **Swap contrast (site Q2's case as teaching).** Pull the 3.0 kg trolley instead: a = 4.0 m s⁻² unchanged; T = 2.0 × 4.0 = 8.0 N. Promoted from practice to teaching because it is the clearest evidence for "tension depends on the mass behind the rope" (the site's train-coupling statement, without a train plate).
- **Worked example 2 (bodies in contact; site card 3's method, original numbers).** An 18 N push on a 4.0 kg block, which pushes a 2.0 kg block ahead; smooth surface: a = 18 ÷ 6.0 = 3.0 m s⁻²; contact force on the front block 2.0 × 3.0 = 6.0 N forwards; its partner, 6.0 N backwards on the back block; check 18 − 6.0 = 12 N = 4.0 × 3.0. The site card gives the method only, with no numbers.
- **Light rope, stated carefully (site correction 1).** The rope's pulls on the two trolleys are equal because the rope is light (its mass is ignored), not because they form a third-law pair. The video says: each end of the rope pulls on a trolley and the trolley pulls back on the rope (a pair, v17); a light rope pulls equally hard at both ends. On screen the pairs are drawn at each rope end.
- **Ropes coded.** The rope's length between moving bodies changes from shot to shot, so it is drawn as a coded twisted line (fibre texture, light brown), not a plate that would have to be stretched. The tow bar in A1 is a short coded bar.
- **Attempts (original).** (A1) A 1200 kg car tows a 600 kg trailer on a level road; the road pushes the driven tyres forwards with 2700 N in total; ignore resistance forces: a = 1.5 m s⁻²; tow-bar force on the trailer 900 N forwards. Crossed: "T = 2700 N". It reuses v17's idea that the road's push drives the car. (A2) Two blocks in contact on a smooth floor; a 12 N push on the 1.0 kg block, which pushes a 3.0 kg block ahead: a = 3.0 m s⁻²; contact force 9.0 N (forwards on the 3.0 kg block, backwards on the 1.0 kg block). Crossed: "1.0 × 3.0 = 3.0 N" (the pushed block's mass).
- **Mistake scene:** none separate. "The tension equals the applied force" (hook prediction answered in 4; 5; feedback 1 crossed); "use one block's mass for the acceleration" (3: the boundary encloses the total mass; key note 2); "use the pushed block's mass for the contact force" (feedback 2 crossed); "internal forces belong in the system equation" (3; memory aid condition).
- **Memory aid:** "Whole system for the acceleration, one body for the force between." (see "Memory aid check").
- **Handoff (route next).** A wooden block on a rough bench strip, pulled through a force sensor by a string; the sensor reading rises while the block stays still; chip "Next: Why does it take more force to start something sliding than to keep it sliding?". This is v19's opening frame.
- **Route refinement adopted (pack).** "Start with third-law pairs and individual free-body diagrams. Stop after system acceleration and tension in ideal connected bodies. Hand contact resistance to v19." Adopted, with contact forces between touching bodies included (they are in the syllabus point and the site's card 3); for root to enter in the route.
- **Site sources used:** orient (rope pull on a two-block pair, as the hook); intentions and key terms (connected bodies, tension, light rope, system); card 1 (shared acceleration, system); card 2 and `we-1` (tension by isolating one body); card 3 (contact force method; train-coupling idea as the swap); misconceptions (both); Q2 (the swap case); Q3's idea (why tension drops out of the system equation, stated correctly). Not used: quick check (1.0 and 4.0 kg, the same structure as `we-1`); activity (car and trailer: its idea becomes A1 with original numbers and corrected wording); Q1 (same structure).
- **Site corrections (quoted from site lesson 17, read 2 Nov; for `../site-corrections-phys-y11.md`; not logged yet):**
  1. Card 1: "the internal rope tension is one of the action–reaction pair and cancels within the system"; Q3 marking point "tension acts as an equal and opposite internal third-law pair"; Q3 model answer "The rope pulls forward on the rear trolley and backward on the front trolley with equal magnitude: it is a third-law pair". The rope's pull on the rear trolley and its pull on the front trolley act on two different bodies but are not partners of each other; each partners the trolley's pull on the rope. They are equal because the rope's mass is negligible. Suggest: "Each trolley and the rope form a third-law pair. Because the rope is light, it pulls equally hard on both trolleys, so its two pulls are equal and opposite and cancel inside the system."
  2. Activity: "The driving force on the car is 4500 N; ignore friction." The driving force on a car is the road's friction force on its driven tyres (lesson 16, propulsion), so "ignore friction" removes the driving force. Suggest: "ignore air resistance and rolling resistance".
  - Checked and correct: `we-1` (4.0 m s⁻², 12 N); quick check (B, 8.0 N); activity numbers (3.0 m s⁻², 1500 N); Q1 (4.0 m s⁻², 20 N); Q2 (4.0 m s⁻², 8.0 N, with its check); card 3's train couplings.
- **Pack questions answered:** `we-1` used unchanged; candidate 1 (1.0 and 2.0 kg, 9.0 N) not used (same structure as `we-1`; A1 replaces it with a real tow); candidate 2 (one block on a rope) is scene 4's one-body step. Pack visual needs met: two bodies, rope and aligned individual free-body diagrams, then the combined system, with grouped working.
- **Cause chain taught, in order:** (1) predict the rope's pull (1); (2) a taut rope forces the same velocity, so the same acceleration; tension and light rope defined (2); (3) the system boundary hides the inside pulls; a = F ÷ m_total (3); (4) one body: T = m × a; check with the other body (4); (5) tension depends on the mass behind the rope (5); (6) contact force by the same method, and its third-law partner (6); (7) a rope over a pulley: the hanging weight drives, the tension is less than the weight (7); (8) memory aid with its conditions (8).
- **Entry knowledge (route `entryKnowledge`):** v17 (third-law pairs on different objects; free-body diagrams hold only forces on one object); v12 to v16 (free-body diagrams, net force, F_net = ma; assumed parallel designs). Stage 5 forces.
- **Learner-visible vocabulary (plain meaning at first use):** tension (the pull a rope exerts on whatever is tied to each end, scene 2); light rope (a rope whose mass is small enough to ignore, so it pulls equally hard at both ends, scene 2); system (the bodies inside one boundary, treated as one object, scene 3); contact force (the push two touching surfaces exert on each other, scene 6); pulley (a grooved wheel the rope runs over, scene 7); internal and external (said as "inside" and "from outside" the boundary, scene 3).
- **Legacy logic ported:** none.
- **New explainer motion (coded unless a plate is named):** **matched velocity arrows** (two teal arrows driven by one v(t)); **lag ghost** (a faint copy of the back trolley lagging, with the rope drawn stretching red and crossed); **system boundary** (v17's `BodyBoundary` drawn round several plates; inside forces fade together with an "inside: cancel" tag); **in-line sensors** (`phys-y11-force-sensor-v1.png` at the pull and spliced in the rope, each with a coded digital readout); **mass-behind bracket** (a navy bracket under the trolleys behind the rope, labelled with their total mass); **aligned free-body diagrams** (one per body, stacked in the right column with their arrows to one scale, 1 N = 12 px); v17's `ForcePair`; `AlignedAlgebra`; `Countdown`; `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout (constant):** heading top-left; the bodies on a coded track or floor across the left two thirds; free-body diagrams and working in the right column.
- **No human figures.**
- **Author notes (not learner copy):**
  (a) `we-1`: a = 4.0 m s⁻² for both trolleys; positions x(t) = 2.0t² m from rest (the scene runs 1.5 s of motion at real speed: 4.5 m would leave the frame, so the camera tracks; velocities reach 6.0 m s⁻¹ at 1.5 s; no velocity numbers shown).
  (b) Free-body scale 1 N = 12 px: 20 N = 240 px, 12 N = 144 px, 8 N = 96 px.
  (c) Swap: pulled trolley 3.0 kg, back 2.0 kg: a = 4.0, T = 8.0 N; check 20 − 8.0 = 12 = 3.0 × 4.0.
  (d) Contact: push 18 N on 4.0 kg (back), front 2.0 kg: a = 3.0; contact 6.0 N; back block net 12 N = 4.0 × 3.0.
  (e) A1: m_total = 1800 kg; a = 2700 ÷ 1800 = 1.5 m s⁻²; T = 600 × 1.5 = 900 N; check on the car 2700 − 900 = 1800 = 1200 × 1.5.
  (f) A2: a = 12 ÷ 4.0 = 3.0; contact = 3.0 × 3.0 = 9.0 N; pushed block net 12 − 9.0 = 3.0 = 1.0 × 3.0.
  (g) Weights and the track's normal forces balance on each body and are drawn grey and small on each free-body diagram, tagged "balance" once (scene 4), then omitted.
  (h) Pronunciations: "T equals m a"; "eighteen hundred kilograms"; "two thousand seven hundred newtons".

Main question: *A string pulls the front trolley with twenty newtons, and a rope drags the back trolley. How hard does the rope pull: twenty newtons, more, or less? And how do forces pass between bodies that touch or are tied together?*
Entry knowledge (v17 third law; v12 to v16 free-body diagrams and F_net = ma).
Stops after: shared acceleration; system first; one body for tension or contact force; tension less than the applied force; third-law partners between bodies. Smooth surfaces and light ropes only.
Handoff: v19, static and kinetic friction.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key (as v17): force arrows amber, tails on the body they act on; velocity arrows teal; acceleration arrows orange; boundaries dashed grey; the "mass behind" bracket navy; sensor readouts ink on white; rope light brown; working in ink with givens navy; current result bright, earlier items dim.

### 1. hook (how hard does the rope pull?)
> Last video ended with objects that stay together. Let's take the roped pair. A string pulls the front trolley forwards with a steady twenty newtons. A rope drags the back trolley along behind it. How hard does that rope pull on the back trolley? Twenty newtons, more than twenty, or less? **Predict**.

Visual: opens on v17's last frame (see "Opening frame"); the chip moves up as the heading "Connected bodies: forces that pass between"; the blocks slide out left; the trolleys move to centre. Tags "front" and "back" above the trolleys; a short coded string runs from the front trolley's bumper to the right edge, with the amber arrow "pull 20 N". On "rope" a scribble circle rings the rope. On "Predict" three chips "20 N", "more than 20 N", "less than 20 N" and a 3-second countdown ring.

### 2. one shared acceleration
> First, the rope is taut and doesn't stretch. If the back trolley fell behind, the rope would have to get longer, and it can't. So the two trolleys always have the same velocity, which means they have the same **acceleration**. The rope makes that happen by pulling. The pull a rope exerts on whatever is tied to each end is called tension. We'll use a light rope, one whose mass is small enough to ignore, so it pulls equally hard on both of its **ends**.

Visual: the trolleys start from rest and roll right together (author note a), two teal velocity arrows growing in exact step. On "fell behind" a faint ghost of the back trolley lags and the rope between draws stretching in red, then is crossed ("the rope can't stretch"); the ghost snaps back. On "acceleration" one orange arrow "same a" spans both trolleys. On "tension" a chip "tension T: a rope's pull on each end"; on "ends" two small amber arrows "T" appear at the rope ends, the back one pointing forwards on the back trolley, the front one pointing backwards on the front trolley, equal length; tag "light rope: equal at both ends".

### 3. the whole system
> To find that shared acceleration, draw one boundary around both trolleys and the rope, and treat them as one object, called the system. The track is smooth, so we'll ignore friction. The front trolley is two point oh kilograms, and the back one, three point oh, so the system is five point oh kilograms. The rope pulls forwards on the back trolley and backwards on the front trolley, equally **hard**. Both pulls are inside the boundary, so they cancel. Along the track, the only unbalanced force from outside is the twenty newton pull. So a equals twenty divided by five point oh, four point oh metres per second squared, for both **trolleys**.

Visual: the trolleys freeze. A dashed grey boundary closes round both trolleys and the rope; label "system". Calculation layout: task strip "Find the acceleration"; givens group (navy): "front 2.0 kg (pulled), back 3.0 kg; pull 20 N; light rope; smooth track", grey tag "teaching data"; under it "m_total = 2.0 + 3.0 = 5.0 kg". On "hard" the two rope-end arrows pulse; on "cancel" they fade together with the tag "inside: cancel". The pull arrow, crossing the boundary from outside, brightens: "outside force along the track: 20 N"; each trolley's grey weight and normal arrows (equal, vertical, tag "balance") stay visible and small. Equation row: "a = F_outside ÷ m_total"; on "trolleys" the row "a = 20 N ÷ 5.0 kg = 4.0 m s⁻²" (boxed); the orange "same a" arrow returns over both trolleys.

### 4. one body: the tension
> Now for the rope. Draw a boundary around the back trolley alone. Along the track, only one force acts on it, the rope's tension, pulling **forwards**. And it must give three point oh kilograms the shared acceleration, four point oh. So T equals m a, three point oh times four point oh, twelve **newtons**. Check it on the front trolley. It has twenty newtons forwards and the rope's twelve newtons pulling back, a net force of eight newtons. Eight divided by two point oh is four point oh. It **matches**.

Visual: the system boundary shrinks onto the back trolley; the front trolley dims. Its free-body diagram slides into the right column (scale note b): grey small weight and normal arrows tagged "balance", and on "forwards" the amber "T" arrow alone. Rows: "back trolley: T = m a"; on "newtons" "T = 3.0 kg × 4.0 m s⁻² = 12 N" (boxed). The hook's chip "less than 20 N" lights. The `phys-y11-force-sensor-v1.png` spliced into the rope shows a readout "12 N"; the pull's sensor beside the string reads "20 N". The boundary moves to the front trolley: its free-body diagram slides in under the first, aligned: amber "20 N" forwards, amber "T = 12 N" backwards (the rope's pull on it), and a thick outlined net-force arrow "8 N". Row "front: 20 − 12 = 8 N; 8 N ÷ 2.0 kg = 4.0 m s⁻²"; on "matches" a tick beside the boxed 4.0.

### 5. why the tension is less
> So the rope pulls with twelve newtons, less than twenty. Why? The twenty newton pull has to accelerate both trolleys, all five point oh kilograms. The rope only has to drag the trolley behind it, three point oh kilograms. Watch what happens if we pull the heavier trolley **instead**. The acceleration is still four point oh, but now the rope drags only two point oh kilograms, so the tension drops to eight **newtons**. A rope's tension depends on how much mass it has to drag behind it.

Visual: a navy bracket under both trolleys "the pull drags 5.0 kg"; a second navy bracket under the back trolley only "the rope drags 3.0 kg". On "instead" the trolleys swap places (the 3.0 kg trolley now in front, with the string and pull sensor on it); the "rope drags" bracket shrinks to "2.0 kg". Row "a = 20 ÷ 5.0 = 4.0 m s⁻² (unchanged)"; on "newtons" "T = 2.0 kg × 4.0 m s⁻² = 8.0 N" and the rope sensor's readout falls from 12 to "8.0 N". Chip on the last sentence: "tension = (mass behind the rope) × a".

### 6. bodies that touch
> The other way to connect bodies is by touching. Two blocks sit side by side on a smooth surface. An eighteen newton push acts on a four point oh kilogram block, and it pushes a two point oh kilogram block ahead of it. Same method. The whole system is six point oh kilograms, so a is eighteen over six point oh, three point oh metres per second squared. Now the front block alone. The only force along the surface on it is the contact force from the back block. Two point oh times three point oh, six point oh newtons **forwards**. And by the third law, the front block pushes back on the back block with six point oh newtons. So the back block's net force is only twelve **newtons**.

Visual: clear change. v17's two `phys-y11-wooden-block-v1.png` plates return on a coded smooth surface: the back block (larger, "4.0 kg") on the left with the amber "push 18 N" arrow on its left face; the front block ("2.0 kg") touching it. Task strip "Find the contact force"; givens (navy): "push 18 N on the 4.0 kg block; front block 2.0 kg; smooth surface". The system boundary closes round both: row "a = 18 N ÷ 6.0 kg = 3.0 m s⁻²". The boundary shrinks to the front block; on "forwards" the amber arrow "contact, 6.0 N" with its tail on the front block's left face; row "contact = 2.0 kg × 3.0 m s⁻² = 6.0 N". On "third law" the partner arrow "6.0 N" on the back block's right face pointing left, bracket "pair" (v17's `ForcePair`). On "newtons" the back block's aligned free-body diagram: "18 N" forwards, "6.0 N" back, outlined net "12 N"; row "18 − 6.0 = 12 N = 4.0 kg × 3.0 m s⁻²", tick.

### 7. a rope over a pulley
> A rope can also turn a corner, over a pulley, a grooved wheel. A four point oh kilogram trolley on a smooth bench is tied to a one point oh kilogram mass hanging over the edge. The pulley has no friction and almost no mass of its own, and the rope is light, so the tension is the same all along it. The hanging mass's weight, nine point eight newtons, is the outside force that drives both. The system is five point oh kilograms, so a is nine point eight over five point oh, one point nine six metres per second squared, about two point **oh**. The tension only drags the trolley, so it's four point oh times one point nine six, seven point eight **newtons**. That's less than the weight, and it has to be. If the rope pulled up with the full nine point eight newtons, the hanging mass would have no net force, and it wouldn't accelerate **downwards**.

Visual: clear change. A coded bench top (pale wood-grey band) with `phys-y11-bench-pulley-v1.png` clamped at its right edge; `phys-y11-dynamics-trolley-v1.png` ("4.0 kg") on the bench, a coded rope from its front over the pulley wheel down to `phys-y11-slotted-masses-v1.png` on its hanger ("1.0 kg") hanging below the bench edge. Givens (navy): "trolley 4.0 kg; hanging mass 1.0 kg; smooth bench; light rope; frictionless pulley of negligible rotational inertia; g = 9.8 m s⁻²", grey tag "teaching data". On "outside force" an amber arrow "W = 1.0 kg × 9.8 N kg⁻¹ = 9.8 N" down on the hanging mass. A system boundary follows the rope round the corner (bench section and hanging section), label "system, measured along the rope". Row on "oh": "a = 9.8 N ÷ 5.0 kg = 1.96 m s⁻² ≈ 2.0 m s⁻²"; the trolley rolls right and the mass descends together (orange "same a" arrows along the rope's path on each). Boundary shrinks to the trolley: amber "T" on it; on "newtons" row "T = 4.0 kg × 1.96 m s⁻² = 7.8 N". The hanging mass's free-body diagram slides in: amber "T = 7.8 N" up, "W = 9.8 N" down, outlined net "2.0 N" down. On "downwards" a ghost chip "T = 9.8 N" fades in and is crossed (caption "then the net force on the hanging mass would be zero").

### 8. memory aid
> So, whole system for the acceleration, then one body for the force between. Two conditions. The bodies must move together, with one shared acceleration. And when you draw the system, count only the forces from **outside** it, along the line of motion.

Visual: the trolleys and blocks return small, each with its system boundary then its one-body boundary flashing in turn. The handwritten line writes large: "Whole system for a. One body for the force between." Under it, smaller: "Only if they move together. Count only outside forces along the motion." On "outside" the inside arrows fade on both thumbnails. Hold about 2 seconds.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. A twelve hundred kilogram car tows a six hundred kilogram trailer along a level road. The road pushes forwards on the car's driven tyres with a total force of two thousand seven hundred newtons. Ignoring resistance forces, find the acceleration, and the force the tow bar exerts on the trailer. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "A car of mass 1200 kg tows a trailer of mass 600 kg along a level road. The road exerts a total forward force of 2700 N on the car's driven tyres. Ignore air resistance and rolling resistance. Calculate (a) the acceleration of the car and trailer and (b) the force exerted by the tow bar on the trailer. (3 marks)" Tag: "HSC-style question, written for HSCScience". Beside it `b4-car-blue-v1.png` towing `phys-y11-box-trailer-v1.png` by a short coded tow bar on a road strip, no arrows. The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 10. feedback 1 (brief)
> The system is eighteen hundred kilograms, so a is two thousand seven hundred over eighteen hundred, one point five metres per second squared. The tow bar only drags the trailer, so it pulls with six hundred times one point five, nine hundred newtons **forwards**. Giving the tow bar the full two thousand seven hundred newtons forgets that it only accelerates the **trailer**.

Visual: card shrinks to the top; "1200 kg", "600 kg", "2700 N" and "Ignore" underlined as used. A system boundary round car and trailer: row "a = 2700 N ÷ 1800 kg = 1.5 m s⁻²". Boundary shrinks to the trailer: amber "tow bar on trailer" arrow; on "forwards" row "F = 600 kg × 1.5 m s⁻² = 900 N forwards". Boxed: "(a) 1.5 m s⁻² (b) 900 N forwards". On "trailer" a chip "tow bar force = 2700 N" fades in and is crossed. Hold about 1 second.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. Two blocks touch on a smooth floor. A twelve newton push acts on a one point oh kilogram block, which pushes a three point oh kilogram block ahead of it. Find the size of the force each block exerts on the other. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Two blocks are in contact on a smooth, level floor. A horizontal push of 12 N acts on a 1.0 kg block, which pushes a 3.0 kg block ahead of it. Calculate the magnitude of the contact force between the blocks. (2 marks)" Tag as before. Beside it two wooden block plates touching (the smaller on the left), with a single amber arrow "12 N" on the left face, as given; no other arrows. The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 12. feedback 2 (brief)
> The system is four point oh kilograms, so a is twelve over four point oh, three point oh metres per second squared. The only force along the floor on the front block is the contact force, so it's three point oh times three point oh, nine point oh **newtons**. Using the pushed block's mass gives three newtons, but the contact force has to accelerate the block in **front**.

Visual: card shrinks to the top; "12 N", "1.0 kg", "3.0 kg" and "smooth" underlined. Rows: "a = 12 N ÷ 4.0 kg = 3.0 m s⁻²"; boundary on the front block, amber "contact" arrow; on "newtons" "contact = 3.0 kg × 3.0 m s⁻² = 9.0 N"; the partner arrow on the 1.0 kg block, bracket "pair". Boxed: "9.0 N". On "front" a chip "1.0 kg × 3.0 m s⁻² = 3.0 N" fades in and is crossed. Hold about 1 second.

### 13. handoff
> So forces pass between connected bodies as third-law pairs, through a rope's tension or a contact force. Every surface so far has been smooth. Real surfaces grip. Next, why does it take more force to start something sliding than to keep it **sliding**?

Visual: the memory line returns small at the top. The board clears to one `phys-y11-wooden-block-v1.png` on the rough bench strip `phys-y11-surface-rough-v1.png` (requested in v19), a coded string from its screw eye to `phys-y11-force-sensor-v1.png` at the right; the sensor's readout climbs from "0 N" towards "4 N" while the block stays still (a small grey "not moving yet" tag). On "sliding" the chip "Next: Why does it take more force to start something sliding than to keep it sliding?". This is the video's last frame (readout held at "4.0 N", block still). Hold about 2 seconds.

### 14. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Bodies joined by a taut rope, or pressed together, move with one shared acceleration.
2. Whole system first: a = F_outside ÷ m_total. The forces between the bodies are inside the system and cancel.
3. Then one body, with its own free-body diagram: the tension or contact force = (mass it must accelerate) × a.
4. Tension: the pull a rope exerts on whatever is tied to each end. A light rope (over a frictionless pulley of negligible mass too) pulls equally hard at both ends. The tension is less than the driving force when the rope drags only part of the mass.
5. Each force between two bodies has an equal and opposite third-law partner on the other body.

Memory aid (large, on the notes screen): *Whole system for a. One body for the force between.* Second line: *Only if they move together. Count only outside forces along the motion.* At the end of the hold the notes cross-fade back to scene 13's last frame.

## Teaching checks

- **Does it explain causes?** Why one acceleration: a taut rope cannot stretch, so the velocities stay equal (2). Why the total mass: the forces between the bodies are inside the system and cancel, so only the outside pull accelerates all the mass (3). Why T = m × a for the back trolley: the tension is the only force along the track on it (4). Why the tension is less than the pull: it drags only the mass behind it (5, with the swap as evidence). Why the back block feels less net force: the front block pushes back on it (6, third law). Why the tension over a pulley is less than the hanging weight: otherwise the hanging mass would have no net force and would not accelerate downwards (7).
- **Misconceptions addressed:** "the tension equals the applied force" (1, 4, 5, 7; 10 crossed; key note 4); "use one block's mass for the acceleration" (3; key note 2); "use the pushed block's mass for the contact force" (12 crossed; key note 3); "the rope's two pulls are a third-law pair" (avoided; Decisions, site correction 1).
- **One idea at a time:** shared acceleration (2), system (3), one body (4), why less (5), contact (6), pulley (7); one row per cue; aligned free-body diagrams appear one at a time.
- **Video makes it easier:** matched velocity arrows and the stretching ghost (2); inside pulls fading at the system boundary (3); the rope sensor reading 12 N beside the pull's 20 N (4); the bracket and sensor dropping to 8.0 N on the swap (5); the partner arrow appearing on the back block (6); the hanging mass's free-body diagram showing why T must be less than W (7).
- **Response opportunity:** a 3 s prediction (1); two unseen HSC-style tasks with every condition on the card, 10 seconds each with the invitation to pause, the card pictures showing only given forces. One crossed mistake each; feedback about 29 s each.
- **Avoided double teaching:** third-law pairs (v17) and F = ma (v16) are used, not re-taught; v17 recalled in one sentence.
- **Syllabus coverage:** `ciecc7b5bd`: linked by ropes (2 to 5, over a pulley in 7, A1), in physical contact (6, A2); vector diagrams (aligned free-body diagrams in 4, 6, 7, 10, 12); Newton's laws (second law in 3, 4, 6; third law in 4, 6, 12); weight as the driving force (7).
- **Out of scope by design:** friction (v19); two hanging masses (Atwood machines) and massive ropes; inclines.

## Practice questions and model answers

**Attempt 1 (scene 9; original wording, HSC style, 3 marks, not an official marking scheme).** "A car of mass 1200 kg tows a trailer of mass 600 kg along a level road. The road exerts a total forward force of 2700 N on the car's driven tyres. Ignore air resistance and rolling resistance. Calculate (a) the acceleration of the car and trailer and (b) the force exerted by the tow bar on the trailer."
Model answer: (a) a = F ÷ m_total = 2700 ÷ (1200 + 600) = 1.5 m s⁻². (b) The tow-bar force is the only horizontal force on the trailer: F = m a = 600 × 1.5 = 900 N forwards. (Check: car, 2700 − 900 = 1800 N = 1200 × 1.5.) Classic mistake (crossed): "2700 N".

**Attempt 2 (scene 11; original wording, HSC style, 2 marks).** "Two blocks are in contact on a smooth, level floor. A horizontal push of 12 N acts on a 1.0 kg block, which pushes a 3.0 kg block ahead of it. Calculate the magnitude of the contact force between the blocks."
Model answer: a = 12 ÷ (1.0 + 3.0) = 3.0 m s⁻². The contact force is the only horizontal force on the 3.0 kg block: F = 3.0 × 3.0 = 9.0 N (the 1.0 kg block feels 9.0 N backwards; check 12 − 9.0 = 3.0 N = 1.0 × 3.0). Classic mistake (crossed): "3.0 N" (the pushed block's mass).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Worked 1 (site we-1) | front 2.0 kg, back 3.0 kg, pull 20 N; total 5.0 kg; a 4.0 m s⁻²; T 12 N; front net 8 N | 1 to 5 |
| Swap (site Q2 case) | pulled 3.0 kg, back 2.0 kg; a 4.0 m s⁻²; T 8.0 N | 5 |
| Worked 2 (contact) | push 18 N on 4.0 kg; front 2.0 kg; total 6.0 kg; a 3.0 m s⁻²; contact 6.0 N; back net 12 N | 6 |
| Pulley | trolley 4.0 kg, hanging 1.0 kg, g 9.8 m s⁻²; W 9.8 N; a 1.96 ≈ 2.0 m s⁻²; T 7.8 N; hanging net 2.0 N | 7 |
| A1 | car 1200 kg, trailer 600 kg, 2700 N; total 1800 kg; a 1.5 m s⁻²; tow bar 900 N; crossed 2700 N | 9, 10 |
| A2 | push 12 N on 1.0 kg; front 3.0 kg; total 4.0 kg; a 3.0 m s⁻²; contact 9.0 N; crossed 3.0 N | 11, 12 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (2 Nov); Codex to re-check.

- 2.0 + 3.0 = 5.0; 20/5.0 = 4.0; 3.0 × 4.0 = 12; 20 − 12 = 8; 8/2.0 = 4.0.
- Swap: 2.0 × 4.0 = 8.0; 20 − 8.0 = 12 = 3.0 × 4.0.
- Contact: 18/6.0 = 3.0; 2.0 × 3.0 = 6.0; 18 − 6.0 = 12 = 4.0 × 3.0.
- Pulley: 1.0 × 9.8 = 9.8; 9.8/5.0 = 1.96; 4.0 × 1.96 = 7.84 ≈ 7.8; 9.8 − 7.84 = 1.96 = 1.0 × 1.96 (net 2.0 N to 2 s.f.).
- A1: 2700/1800 = 1.5; 600 × 1.5 = 900; 2700 − 900 = 1800 = 1200 × 1.5.
- A2: 12/4.0 = 3.0; 3.0 × 3.0 = 9.0; 12 − 9.0 = 3.0 = 1.0 × 3.0.
- Motion (author note a): x = ½ × 4.0 × t² = 2.0t²; at 1.5 s, x = 4.5 m, v = 6.0 m s⁻¹.

## Memory aid check

- **"Whole system for a. One body for the force between."** Written for this lesson (the site's "whole system, then one body" strategy, made into a two-beat line), with the second line "Only if they move together. Count only outside forces along the motion." Meaning, as said in scene 8: find the shared acceleration from the outside forces and the total mass; then isolate one body and apply F = ma to it for the tension or contact force. Assumptions checked: the bodies share one acceleration (taut, inextensible rope; rigid contact; second line); forces between the bodies are excluded from the system equation (second line); the rope is light (said in scene 2; a massive rope would need its own share, not used in this course); a pulley used with it is frictionless with negligible rotational inertia (said in scene 7). It helps a new case: any towing, train, or pushed-blocks problem reduces to these two steps (A1 and A2 both use it; the pulley in scene 7 is the same two steps round a corner).
- **Considered, not used:** "The rope only pulls what's behind it" (true for the tension and kept as scene 5's chip "tension = (mass behind the rope) × a", but it does not cover the acceleration step).

## Narration length estimate

Revision 1 count (2 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,650 characters**, 14 scenes. Characters per scene (1 to 14): 297, 447, 609, 493, 480, 675, 800, 221, 327, 368, 244, 366, 248, 75. At 13.3 characters per second the speech is about 425 s; add about 19 s of holds and settling (the rolling start and stretch ghost in 2, the boundary in 3, the sensor readouts in 4, the swap in 5, the aligned diagrams in 6, the pulley run in 7, the 2-second memory hold), 3 s for the prediction countdown, 20 s for two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 55 s more of the quiet notes hold (about 101 s of holds): **about 526 s**. Inside the 5,500 to 6,800 band and under the 570 s cap. Without the pulley scene the count was 4,928 (open decision 2). Feedback: scene 10 about 29 s, scene 12 about 29 s (including the 1 s holds). Scene 7 is the longest (about 60 s plus its run); it carries a new case, the corner and the weight as driver.

## Scene list and build ids

Lesson key `p-y11-v18` (route phys-y11-fa1-v18). Suggested explainer folder `src/explainer/lessons/phys-y11-fa1-v18` and build folder `docs/production/claude-pm/lessons/p-y11-v18` (root to confirm).

In order (kebab-case; 14 scene headings, all `### N.`): hook, shared-acceleration, whole-system, one-body-tension, why-less, contact, pulley, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`: the learner reads the worded question and works during the countdown) and key-notes (`hold`: the learner copies five notes); the hook's 3 s countdown is inside scene 1. Transitions (`pickTransition`): v17's last frame continues into scene 1 (camera continue); 1 to 5 camera continue (same trolleys; boundaries and brackets change); 5 to 6 clear change (blocks); 6 to 7 clear change (bench and pulley); 7 to 8 camera pull back to thumbnails; attempts and feedback card shrink to the top; 12 to 13 board clear; 13 to 14 fade to the notes board, and the notes cross-fade back to scene 13's last frame at the end.

Holds: hook (3 s countdown), attempt-1, attempt-2 (10 s countdowns). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/p-y11-v18-learning-review.md`, `science_check` = `checks/p-y11-v18-physics-check.md`.

## Assets

Have (inspected 2 Nov; uniform scaling only, never stretched):
- `public/assets/biology/b4-car-blue-v1.png` (1600 × 800, RGBA; empty side-view car facing right): A1 card and feedback.

Delivered earlier or in brief 149 (present in `public/assets/physics/`; manifest `assets/brief149-manifest.json`):
- `phys-y11-dynamics-trolley-v1.png`: scenes 1 to 5, 7, 8.
- `phys-y11-force-sensor-v1.png` (the hooked sensor; the v17 bumper variant is `phys-y11-force-sensor-bumper-v1.png`), `phys-y11-wooden-block-v1.png`, `phys-y11-slotted-masses-v1.png`: sensor in 4, 5, 13; blocks in 6, 8, 11 to 13; masses on the 3.0 kg trolley in 1 to 5 so it reads heavier, and on their hanger as the hanging mass in 7.
- `phys-y11-surface-rough-v1.png`: scene 13 (the handoff frame).

Delivered in brief 149 (replaces the request; no further painting needed): `phys-y11-bench-pulley-v1.png` (the square 1200 × 1200 variant; v15 uses `phys-y11-bench-pulley-v15-v1.png`) and `phys-y11-box-trailer-v1.png`. The brief below is kept for the record.

Coded: track, floor, road strip, rope (twisted line, light brown), string, tow bar, all arrows (`Arrow` with `AMBER`, teal, orange), boundaries, brackets, sensor readouts, aligned free-body diagrams, `AlignedAlgebra`, `Countdown`, `QuestionCard`, `Chip` with `cross`, `KeyNotes`, `Heading`. v05's `MotionTrack` drives positions.

Kit gaps (for the build brief):
1. **`BodyBoundary` multi-body mode** (extends v17's gap 2): one boundary round several plates and the rope between them, with "inside" forces flagged for the fade.
2. **`AlignedFBDs`**: a stack of free-body diagrams in the right column sharing one force scale (N per px) and one horizontal axis, each linked by a thin grey line to its body.
3. **`SensorReadout`**: a small digital display attached to a sensor plate, value driven by the scene's force function.

## Codex asset brief

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/phys-y11-fa1-v18.md`, route entry phys-y11-fa1-v18. Paint after the learning review, physics check and Codex error check pass and the owner gives the go-ahead. Same plate rules as the v17 brief (true alpha, clean edges, house style matched to `public/assets/biology/b4-car-blue-v1.png`, 8 per cent margin, no text, people, backdrop, glow or shadow; native aspect, never stretched).

1. `phys-y11-bench-pulley-v1.png` (1200 × 1200 px): a school bench pulley in exact side view: a small grooved wheel (pale grey plastic or brass) on an axle held in a short arm, attached to a G-clamp that grips a bench edge on the left of the image; the wheel's top and right side clear of the clamp so a rope can run over the top of the wheel and down its right side. No rope (the rope is coded), no text. Report the wheel's centre and groove radius in pixels in the provenance file so the coded rope can wrap it exactly. Essential (scene 7).
2. `phys-y11-box-trailer-v1.png` (2000 × 1000 px): a small box trailer in exact side view facing right (towed from its right end), a plain open box body in galvanised grey with a timber floor edge, two wheels on one axle (one visible), a straight A-frame drawbar ending in a coupling at the right, no load, no number plate or text. Its wheel bottom must sit level with the blue car's wheels at the same scale (about 0.7 times the car's length in the scene). Essential (A1).

Report inspection on the dark board background at about 150 px and 600 px wide. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/phys-y11-v18-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the physics claims: a taut inextensible rope gives one shared acceleration; the rope's pulls on the two trolleys are equal because the rope is light (they are not a third-law pair with each other); forces inside the system cancel; T = m × a for the body whose only horizontal force is the tension; the contact force's partner acts on the other block.
3. Confirm every scene states or shows the needed conditions (smooth surface, light rope, level) and that A1's card says to ignore air and rolling resistance (not friction).
4. Confirm free-body arrows are drawn to the stated scale (1 N = 12 px) and each arrow's tail is on the body it acts on.
5. Confirm both attempt questions are original in wording, carry every needed value, and that the card pictures show only the given forces.
6. Confirm the memory aid's conditions are on screen and spoken.
7. Confirm the syllabus quote matches the route JSON exactly and no 2017-syllabus label appears.
8. Confirm no em dash (U+2014) anywhere in this file, Australian spelling, and no people in any plate request.
9. Confirm the narration character count by script with the build parser rules.
10. Add site corrections 1 and 2 under Decisions to `../site-corrections-phys-y11.md` (owner record only).

## YouTube metadata (draft)

Title: Connected Bodies: Tension, Contact Forces and Newton's Laws | Year 11 Physics

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa1-fundamentals-of-mechanics/lesson17.sa.html

A string pulls the front trolley with 20 N and a rope drags the back one. How hard does the rope pull? Less than you might think. See why a taut rope gives both trolleys one shared acceleration, why the forces between the bodies cancel when you treat them as one system, and how a single free-body diagram finds the tension. Then use the same two steps for blocks pushed together, where the contact force has a third-law partner on the other block. Whole system for the acceleration, one body for the force between. Two exam-style questions at the end.

Year 11 Physics (2025 syllabus), Focus Area 1: Fundamentals of mechanics.
Syllabus content (NSW Physics 11-12, 2025):
"Analyse the forces acting on connected bodies in physical contact and linked by ropes using vector diagrams and Newton’s laws of motion" (ciecc7b5bd)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

Builds on: Newton's third law (previous video). Next: Static and kinetic friction.

#Year11Physics #Physics #NewtonsLaws #HSCScience

## Open decisions

- **1. Trolleys for `we-1` (root).** The site's blocks on a frictionless table become trolleys on a smooth track, with the same numbers and physics. If root prefers the site's blocks, swap the plates (no narration change except "trolley" to "block").
- **2. Pulley scene (added by this design).** Not in the site lesson, but within the syllabus wording ("linked by ropes") and common in HSC questions. Added as scene 7 because the first count (4,928 characters without it) fell short of the band with this content missing; it is not padding. Uses g = 9.8 m s⁻² (v16's W = mg, assumed). If root prefers a shorter video, drop scene 7 and its plate; the rest stands alone.
- **3. Site link form.** As v05.

## Review notes

- Revision 2 (3 Nov): independent learning review and physics check (brief 149) found 1 blocker and 3 should-fix, all applied. Blocker: scene 7 now states a frictionless pulley with almost no mass of its own (negligible rotational inertia) as well as a light rope, on the diagram givens, in the key notes and in the memory aid check; the repeated "a wheel that turns freely" was cut to fund it. Should-fix: "wouldn't accelerate downwards" replaces "wouldn't fall"; scene 3 says the only unbalanced outside force along the track (weight and normal forces stay as small grey balanced arrows) and the memory aid says outside forces along the motion; "Most students say 20 N" became "It is tempting to say 20 N". No findings rejected. The v19 handoff frame is unchanged. Original Revision 1 next steps, for the record: student learning review (trace from v17; check that the prediction surprise lands; that the system boundary makes "inside forces cancel" feel caused; that the sensor readings and the swap make "tension depends on the mass behind" concrete; that the attempt cards give nothing away), then the Codex physics check and error check.
- The boundary fades, the sensor readouts and the swap carry the explanation; judge them at playback speed in the voiced preview. Sensor values must come from the same numbers as the working.
