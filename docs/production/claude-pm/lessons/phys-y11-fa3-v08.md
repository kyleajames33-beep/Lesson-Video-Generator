# Year 11 Physics FA3 V08 (Physics 2025, Year 11, Focus Area 3): Why does a charge released between two plates keep speeding up all the way across, and how fast is it going when it arrives? (design)

Status: Revision 1 (3 Nov). Needs independent student learning review (key `p-y11-fa3-v08`, `docs/production/student-learning-review.md`), a Codex physics check and a Codex error check before build. Voice: Google AI Studio after the brief 124 pilot; physics follows Year 12 Maths and Year 11 Biology in the voicing queue. Nothing recorded; human listening pending. Plates: one new (bell jar); v07's metal plate reused by name.

Narration 6,205 characters, 18 scenes, about 563 s including two 3 s prediction countdowns, two 10 s attempt countdowns and the notes hold, counted by script with the build parser rules (see "Narration length estimate").

Scope: eighth video of the Year 11 Physics (2025) Focus Area 3 route: the motion of a charged particle in the uniform field between parallel plates, along the field: constant force, constant acceleration, the relay E = V/d, F = qE, a = F/m, the speed from the equations of motion and from W = ΔKE, and a particle slowed by the field. Templates: `phys-y11-fa1-v22.md` (concept format, section list, calculations as task, equation and grouped givens) and `phys-y11-fa1-v24.md` (apparatus conventions); FA3 conventions and colour key from `phys-y11-fa3-v01.md` to `phys-y11-fa3-v07.md` (Revision 1; v07's scene 18 frame is this video's first frame). No pre-design pack exists: the pack work is done in this file. Site lesson read in full (3 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa3-electricity-and-magnetism/lesson08.sa.html` (orient and predict, intentions and key terms, misconceptions 1 and 2, card 1 constant field, constant acceleration, true or false, card 2 working a full problem with `we-1`, its figure description and the quick check, activity 1 run the relay, match the pairs, card 3 choosing the right field equation, last check, odd one out, independent practice Q1 to Q3, retrieve). Site memory hook read: `phys2025-y11-fa3-memory-hooks.json`, lesson 8 ("Between plates, a charge is a projectile. Constant sideways speed, constant push across."; not used, site correction 2). Route entry: `phys-y11-fa3-v08` in `../../phys-y11-video-route.json` (proposed; placeholder question rewritten below). Route start: "Start with Charged Particles Between Plates. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions." Route stop: "Stop after the learner can answer: How can I explain and apply charged particles between plates? Teach only the listed actions; the next video owns its separate question." Route next (placeholder wording): "phys-y11-fa3-v09: How can I explain and apply electric potential energy and work?" (this design proposes "Why does a charge's energy depend on where it sits in a field, and where does that energy go as the field moves it?" for v09's chip; see open decision 1).

**Opening frame (v07's actual handoff, Revision 1, 3 Nov).** v07's scene 18 ends with its memory line "Straight and even, plus to minus. Strength is volts per metre." small at the top; the coded edge-on plates (positive on top) with uniform teal lines, fringing faint; a red "+" at the positive plate labelled "proton, at rest"; an amber "F = qE" arrow on it pointing down, and the same arrow at three more places across the gap (chip "same force everywhere"); a dashed path to the negative plate ending in a "speed = ?" readout; chips "steady speed?" and "speeding up?"; chip "Next: Why does a charge released between two plates keep speeding up all the way across, and how fast is it going when it arrives?". This video opens on that frame.

Owner rules applied: 2025 syllabus only; no people, faces, hands or body outlines; apparatus painted (v07's metal plates under a new bell jar); charges, field lines, force and velocity arrows, the one-second step dots, the velocity-time graph, energy bars and working coded (abstract diagrams); one reasoning stage at a time; calculations as task, equation and grouped givens with units, one step per cue; 3 s in-teaching predictions; "Pause here to answer." with a 10 s countdown and the full worded question on screen; brief feedback with one crossed mistake (grey scribble, FA3 root decision 10); original questions; key-notes hold; Australian spelling; no em dashes; v05 (F = qE, sign and direction; the electron's mass about 1840 times smaller; particle weights negligible) and v07 (E = V/d) recalled in a phrase each; FA1 (F_net = ma; equations of motion; W = F∥s; the work-energy theorem W = ΔKE with KE = ½mv²) recalled in a phrase each.

Syllabus content point (Physics 11-12 (2025), Year 11, Focus Area 3, group "Electrostatics"; local ledger ID with NESA content-system codename), quoted from the syllabus JSON (its vector arrows typeset and the stacked fraction written inline, FA2 root decision 11):

- P25-FA3-G1-11 `ci8ba3687b`: "Solve problems relating to the charged particles in electric fields using F⃗ = qE⃗, E = V/d, F⃗net = ma⃗ and W = ΔKE"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907

**Boundary:** starts from v07's handoff (above); the hook (steady speed or speeding up?); in a uniform field the force is constant; with weight negligible and a vacuum, it is the net force; F_net = ma gives a constant acceleration, so the particle speeds up steadily; the relay E = V/d, F = qE, a = F/m; the site's worked example (proton acceleration); its speed at the far plate from v² = u² + 2as; a prediction (an electron instead); same force, about 1840 times the acceleration, only about 43 times the speed (the square root); the energy route W = F∥s = ΔKE giving the same speed; a particle moving against its force slows (an electron fired in through the positive plate), stopping distance from W = ΔKE; memory aid; two attempts. Stops at motion along the field line, in one dimension. Not taught: electric potential energy, why the gap does not change the final speed, W = qV and W = qEd as energy of position (v09; the handoff only sets it up); what a volt measures (v10); particles entering sideways and their curved paths (Year 12; author note f); E = kq/r² problems (v04 to v06 own them).

## Decisions

- **Learner question (route placeholder rewritten; v07's proposal adopted).** "Why does a charge released between two plates keep speeding up all the way across, and how fast is it going when it arrives?" One causal question from the site's lesson 8 hook and warm-up. Answer, built in order: hook and prediction (1); constant force, so constant acceleration (2); the relay (3); the site's example (4, 5); the speed (6); a prediction and the electron (7, 8); a second route by energy (9); a charge that slows (10, 11); memory aid (12).
- **The cause made visible (owner quality bar).** (2) The proton's motion is drawn with FA1's **one-second step** dots (here equal time steps, labelled "equal time steps"; spacing grows 1, 3, 5, 7) and a coded speed readout that climbs by the same amount each step; a small velocity-time graph beside it draws a straight rising line (FA1 `MotionGraphStack`, velocity panel only). The amber force arrow on the proton stays the same length at every step. One clause recalls the falling ball (FA1 free fall), the same constant-acceleration picture.
- **Conditions stated (AGENTS rule: keep a caveat only when its omission teaches a wrong idea).** "Gravity on the proton is far too small to matter" (v05's grey tag, recalled) and "the plates sit in a vacuum, so there's no air to bump into" are spoken once in 2, because without them the electric force is not the net force. Both appear on every attempt card ("Assume a vacuum and ignore gravity").
- **Worked example 1 (site `we-1`, numbers unchanged, extended).** 200 V, 4.0 cm, proton: E = 5.0 × 10³ V m⁻¹; F = 8.0 × 10⁻¹⁶ N; a = 4.8 × 10¹¹ m s⁻². The site stops at a; scene 6 continues to the speed at the negative plate (v = 2.0 × 10⁵ m s⁻¹) with v² = u² + 2as and s = d, because the learner question asks how fast it arrives.
- **Prediction (3 s, scene 7; site quick check B and Q3).** "Swap the proton for an electron, starting at rest at the negative plate." Chips "faster?" and "slower?". Answered in 8: much faster.
- **Surprise: 1840 times the acceleration, only about 43 times the speed (original; extends v05's acceleration race).** v² = 2as, so v goes with √a; √1836 ≈ 43. Shown with **`SpeedRootBar`**: an acceleration bar for the electron grows to about 1840 proton bars (scale break), then a speed bar grows to only about 43 proton speed bars; a grey row "v² = 2as, so v ∝ √a". Electron final speed 8.4 × 10⁶ m s⁻¹.
- **The energy route (W = ΔKE, the syllabus's fourth equation; FA1 v26 recalled).** The electric force does work W = F∥s over the gap (force along the motion, so the whole force counts); FA1's work-energy result says this equals the gain in kinetic energy; the proton starts at rest, so ½mv² = 3.2 × 10⁻¹⁷ J and v = 2.0 × 10⁵ m s⁻¹, the same as scene 6. **`EnergyBar`** (FA1 v26 colours: work hatched amber outline, kinetic energy blue) fills as the proton crosses. Where the energy came from is left as a question for v09 (handoff).
- **Worked example 2, a charge that slows (original; vector F_net = ma and W = ΔKE).** "An electron moving at 4.0 × 10⁶ m s⁻¹ passes through a small hole in the positive plate, heading straight towards the negative plate. The plates are 2.0 cm apart with 60 V across them. How far does it get?" The force on the electron points towards the positive plate, against its motion, so it slows; KE = 7.3 × 10⁻¹⁸ J; F = 4.8 × 10⁻¹⁶ N; it stops after KE ÷ F = 1.5 cm, short of the 2.0 cm gap, and is pushed back out. It shows direction mattering (the vector form) and the energy route as the quick method.
- **Attempts (original, HSC style).** (A1, the full relay to a speed; site Q1 and activity 1 type, new numbers) "An electron (m = 9.11 × 10⁻³¹ kg, q = −1.6 × 10⁻¹⁹ C) is released from rest at the negative plate of a pair of parallel plates 1.5 cm apart with a potential difference of 90 V between them. Assume a vacuum and ignore gravity. (a) Calculate the magnitude of the acceleration of the electron. (b) Calculate its speed as it reaches the positive plate. (4 marks)" Answer: a = 1.1 × 10¹⁵ m s⁻²; v = 5.6 × 10⁶ m s⁻¹. Crossed: "v = 3.2 × 10¹³ m s⁻¹". (A2, a slowing proton with W = ΔKE; mirrors worked example 2 with the opposite charge, so the direction reasoning is not copied) "A proton (m = 1.67 × 10⁻²⁷ kg, q = +1.6 × 10⁻¹⁹ C) travelling at 1.5 × 10⁵ m s⁻¹ passes through a small hole in the negative plate of a pair of parallel plates and moves directly towards the positive plate. The uniform field between the plates is 5.0 × 10³ V m⁻¹ and the plates are 4.0 cm apart. Assume a vacuum and ignore gravity. (a) Explain whether the proton speeds up or slows down. (b) Using W = ΔKE, determine whether the proton reaches the positive plate. (4 marks)" Answer: slows (force along E, towards the negative plate, against its motion); KE = 1.9 × 10⁻¹⁷ J, F = 8.0 × 10⁻¹⁶ N, stops after 2.3 cm, so it does not reach the plate. Crossed: "speeds up towards the positive plate".
- **Mistake scene:** none separate. "A charge crosses a uniform field at constant speed" (2; site misconception 1); "heavier and lighter particles gain the same speed" (8; site misconception 2); "1840 times the acceleration means 1840 times the speed" (8); "the field always speeds a charge up" (10, feedback 2 crossed); "forgetting the square root" (feedback 1 crossed).
- **Memory aid:** "V over d gives the field, times q gives the force, over m gives the acceleration." (see "Memory aid check").
- **Handoff (route next; proposal for v09's question; site lesson 9 set up, not solved).** Board change: the plates with the proton arrived at the negative plate, its blue kinetic-energy bar full ("3.2 × 10⁻¹⁷ J"); a dashed outline of an empty bar labelled "before: ?"; on "twice as far apart" a second plate pair beside the first with the same "200 V" and twice the gap (teal lines spaced the same across but the field readout "half"), a proton at its positive plate with a "speed at the far plate: ?" readout; chips "faster?", "slower?", "the same?"; then "Next: Why does a charge's energy depend on where it sits in a field, and where does that energy go as the field moves it?". This is the frame v09 opens on (open decision 1).
- **Site sources used:** intro and hook (steady acceleration, enormous speeds: 1, 6); warm-up (constant speed or speeding up?: 1, 2); intentions (Know 1 to 3: 2, 3, 6; Understand 1 and 2: 2, 8; Understand 3 and Can Do 3: not used, author note g; Can Do 1 and 2: 4 to 6, A1); key terms (uniform acceleration 2; equations of motion 3, 6; electron mass and charge 8, A1); misconceptions 1 and 2 (2, 8); card 1 (2, 3; correction 2); true or false (false: 2); card 2 and `we-1` (3 to 5); quick check (B: the prediction in 7); activity 1 (A1 structure); match the pairs (3); card 3 (author note g); odd one out (D, velocity: 2); Q1 (structure of 4 to 6); Q2 (the energy route in 9, with W = F∥s rather than W = qV; author note e); Q3 (7, 8).
- **Site corrections (quoted from site lesson 8 and its memory hook, read 3 Nov; for `../site-corrections-phys-y11.md`; none already logged for this lesson):**
  1. Dot point labels after activity 1, card 3 and each short-answer question: "Solve problems relating to charged particles in electric fields using F = qE, E = V/d, E = kq/r², W = qV". This is not the 2025 syllabus wording. Suggest the official text: "Solve problems relating to the charged particles in electric fields using F⃗ = qE⃗, E = V/d, F⃗net = ma⃗ and W = ΔKE".
  2. Card 1 ("Because the acceleration is constant, the motion is governed by the same equations of motion (SUVAT) you used for projectiles") and the lesson 8 memory hook ("the same parabola you already know from projectile motion"). Projectile motion is not in the Year 11 (2025) course, so Year 11 students have not used these equations "for projectiles"; the hook's sideways-entry parabola is also beyond this lesson's examples. Suggest: "the same equations of motion you used for objects speeding up under a constant force, such as a ball falling freely", and replace the hook with one about steady speeding up (for example "Same push every millimetre, so the same gain in speed every moment.").
  3. Intentions, Understand: "Why the motion mirrors a projectile under gravity". As correction 2. Suggest: "Why the motion mirrors an object falling under gravity".
  - Checked and correct: `we-1` (5.0 × 10³ V m⁻¹; 8.0 × 10⁻¹⁶ N; 4.8 × 10¹¹ m s⁻²); quick check (B); activity 1 (5.0 × 10³ V m⁻¹; 8.0 × 10⁻¹⁶ N; 8.8 × 10¹⁴ m s⁻²; towards the positive plate); Q1 (2.0 × 10⁴ V m⁻¹; 3.2 × 10⁻¹⁵ N; 1.9 × 10¹² m s⁻²); Q2 (4.0 × 10⁻¹⁷ J; 9.4 × 10⁶ m s⁻¹); Q3 model answer.
- **Cause chain taught, in order:** (1) steady speed or speeding up? (1); (2) uniform field, constant force; negligible weight and no air, so it is the net force; F_net = ma gives constant acceleration (2); (3) the relay finds a (3 to 5); (4) constant acceleration from rest across d gives v from v² = 2as (6); (5) same force on an electron, much smaller mass, much bigger acceleration (8); (6) v goes with √a, so only about 43 times the speed (8); (7) the force does work over the gap; W = ΔKE gives the same speed (9); (8) a force against the motion slows a charge, and its kinetic energy runs out after KE ÷ F (10, 11); (9) memory aid (12).
- **Entry knowledge (route `entryKnowledge`):** v05 (F⃗ = qE⃗ with sign and direction; electron about 1840 times lighter than a proton; weights negligible), v07 (E = V/d, the plate field, conversions to metres); FA1 (F_net = ma; the equations of motion with constant acceleration; free fall; W = F∥s; W = ΔKE and KE = ½mv²), each recalled in a phrase.
- **Learner-visible vocabulary (plain meaning at first use):** vacuum (a space with the air pumped out, 2); net force (the total force on the particle, FA1 recall, 2); equations of motion (the constant-acceleration equations from the motion videos, 3); work (energy transferred when a force moves something along, FA1 recall, 9).
- **Legacy logic ported:** none. Drawing parts only: `Arrow`, `Label`, `Panel` (`course-kit.tsx`).
- **New explainer motion (coded unless a plate is named):** v07's coded edge-on plates and `UniformField`; FA1's **one-second step** dots (here "equal time steps") and `MotionGraphStack` (velocity panel); **`RelayChain`** (new: three linked boxes "E = V/d → F = qE → a = F/m" that each pass their result to the next as a sliding chip; then a fourth box "equations of motion"); **`SpeedRootBar`** (new: acceleration and speed comparison bars with scale break); FA1 v26's **`EnergyBar`** (work hatched amber outline; kinetic energy blue); **`StopDistance`** (new: an electron's velocity arrow shrinking as it moves against its force, a dashed stop line at KE ÷ F, then a short return); `AlignedAlgebra`; `Countdown` (3 s, 10 s); `QuestionCard` (subject "Physics"); `Chip` with `cross` (grey scribble); `KeyNotes`; `Heading`.
- **Colour key:** as v01 to v07 (positive red "+", negative and electrons navy "−", signs printed; field lines teal; forces amber with a dark ink outline; accelerations violet (FA1 decision 2), used for the acceleration labels and bars; velocity a thin blue arrow labelled "v" (open decision 2: FA1's teal velocity would clash with FA3's teal field); kinetic energy blue bars and work hatched amber-outlined bars (FA1 decision 18); grey for tags; crossed items grey scribble; the bell jar clear glass (no red or navy).
- **Board layout (constant):** heading top-left; the plates (horizontal, positive on top) and the particle in the left 60 per cent; the equations, givens and working in the right column; the velocity-time and energy panels small at the lower right when used.
- **No human figures.** The bell jar and plates are shown alone.
- **Author notes (not learner copy):**
  (a) `we-1`: E = 200 ÷ 0.040 = 5.0 × 10³ V m⁻¹; F = 1.6 × 10⁻¹⁹ × 5.0 × 10³ = 8.0 × 10⁻¹⁶ N; a = 8.0 × 10⁻¹⁶ ÷ 1.67 × 10⁻²⁷ = 4.79 × 10¹¹ m s⁻².
  (b) Speed: v² = 2 × 4.79 × 10¹¹ × 0.040 = 3.83 × 10¹⁰; v = 1.96 × 10⁵ m s⁻¹, said "about two point oh times ten to the five" (196 km per second, said "about two hundred kilometres every second"). Time across t = v/a = 4.1 × 10⁻⁷ s (not used).
  (c) Electron in the same plates from the negative plate: a = 8.0 × 10⁻¹⁶ ÷ 9.11 × 10⁻³¹ = 8.78 × 10¹⁴ m s⁻² (1833 times the proton's with these rounded masses; v05's "about 1840" from 1836); v = √(2 × 8.78 × 10¹⁴ × 0.040) = 8.38 × 10⁶ m s⁻¹, 42.8 times the proton's. 8.4 × 10⁶ m s⁻¹ is about 2.8 per cent of the speed of light, so non-relativistic treatment is fine.
  (d) Weights: proton 1.6 × 10⁻²⁶ N against an electric force of 8.0 × 10⁻¹⁶ N (about 10⁻¹¹ of it).
  (e) Energy route: W = F∥s = 8.0 × 10⁻¹⁶ × 0.040 = 3.2 × 10⁻¹⁷ J = ½mv²; v = √(2 × 3.2 × 10⁻¹⁷ ÷ 1.67 × 10⁻²⁷) = 1.96 × 10⁵ m s⁻¹. This equals qV (the gap cancels), which v09 develops; v08 does not say so (the handoff asks it).
  (f) A charge entering the plates sideways follows a parabola (projectile-like); projectile motion is not in Year 11 (2025), so it is left to Year 12.
  (g) Site card 3 (choosing E = V/d or E = kq/r²) is not reused: v04 to v06 own point-charge problems, and the 2025 point lists only E = V/d with this action; the key notes say "plates: E = V/d".
  (h) Worked example 2: E = 60 ÷ 0.020 = 3.0 × 10³ V m⁻¹; F = 4.8 × 10⁻¹⁶ N; KE = ½ × 9.11 × 10⁻³¹ × (4.0 × 10⁶)² = 7.29 × 10⁻¹⁸ J; stopping distance = KE ÷ F = 0.0152 m. The electron then accelerates back and leaves through the hole at 4.0 × 10⁶ m s⁻¹ (not said).
  (i) A2: KE = ½ × 1.67 × 10⁻²⁷ × (1.5 × 10⁵)² = 1.88 × 10⁻¹⁷ J; F = 8.0 × 10⁻¹⁶ N; distance 0.0235 m.
  (j) Pronunciations: "one point six seven times ten to the minus twenty-seven kilograms"; "four point eight times ten to the eleven metres per second squared".

Main question: *A proton is let go at the positive plate of two charged plates. Why does it keep speeding up all the way across, and how fast is it going when it reaches the other plate?*
Entry knowledge (v05 F = qE and the electron's small mass; v07 E = V/d; FA1 F_net = ma, equations of motion, W = F∥s, W = ΔKE).
Stops after: constant force and constant acceleration in a uniform field; the relay; speeds from v² = u² + 2as and from W = ΔKE; a charge slowed by the field. No potential energy, no W = qV, no sideways entry.
Handoff: v09, electric potential energy.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key: as v01 to v07.

### 1. hook (steady speed, or speeding up?)
> Last time, we put a proton at the positive plate of two charged plates, and let it go. The force on it is the same everywhere in the gap. So, does it cross at a steady speed, or does it keep speeding **up**?

Visual: opens on v07's last frame (see "Opening frame"). The "Next" chip becomes the heading: "Charged particles between plates"; the memory line fades. On "the same everywhere" the four equal amber arrows pulse together. On "up" the chips "steady speed?" and "speeding up?" brighten and a 3-second countdown ring runs.

### 2. constant force, constant acceleration
> It keeps speeding up. The field is uniform, so the force on the proton is the same all the way across. Gravity on it is far too small to matter, and the plates sit in a vacuum, so there's no air to bump into. That makes the electric force the net force. And a constant net force gives a constant acceleration. So the proton gains the same amount of speed every moment, just like a ball speeding up as it **falls**.

Visual: on "It keeps speeding up" the chip "speeding up?" glows and "steady speed?" takes a grey scribble cross. Brief board change: the painted set-up: two `phys-y11-metal-plate-v1.png` (v07's plate, the lower one flipped) inside `phys-y11-bell-jar-v1.png`; on "a vacuum" a grey tag "vacuum: air pumped out" and tiny grey air dots drift out of the jar and vanish; then the camera tilts back to the coded edge-on plates. Grey tag on "Gravity": "weight: about 10⁻¹¹ of the electric force". On "the net force" chip "F_net = qE" and on "constant acceleration" "F_net = ma, so a is constant" (tag "from the forces videos"). On "every moment" the proton runs across in equal time steps: coded dots drop behind it at growing spacing (1, 3, 5, 7 units), the amber force arrow riding with it the same length at each dot, and a thin blue velocity arrow "v" lengthening by the same amount each step; a small velocity-time panel at the lower right draws a straight rising line. On "falls" a small inset of FA1's falling-ball dot trail with the same growing spacing sits beside it.

### 3. the relay
> So here's the plan for any charge between plates. It's a relay of three equations. E equals V over d gives the field. F equals q E gives the force. And a equals F over m gives the acceleration. Once you know the acceleration, the equations of motion from earlier in the course give you speed, distance and **time**.

Visual: camera continue; right column: `RelayChain`: three linked boxes write in turn: "E = V/d (field)", "F = qE (force)", "a = F/m (acceleration)", each passing a small chip to the next. On "equations of motion" a fourth box "v = u + at, v² = u² + 2as, s = ut + ½at²" (tag "constant acceleration only"). On "time" the boxes shrink to a strip at the top of the right column.

### 4. worked example: the proton's acceleration (task and givens)
> Let's run it. Task: two plates are four point oh centimetres apart, with two hundred volts across them. A proton starts at rest at the positive plate. Find its acceleration. The givens: V is two hundred volts, and d is point oh four oh metres. For the proton, q is one point six times ten to the minus nineteen coulombs, and m is one point six seven times ten to the minus twenty-seven **kilograms**.

Visual: clear change to the calculation layout; the coded plates at the left with "200 V" and "4.0 cm", the proton at the positive plate. Task strip: "Find the proton's acceleration" (grey tag "site worked example"). Equation strip: the relay strip "E = V/d → F = qE → a = F/m". Givens group, as two clusters: plates: "V = 200 V"; "d = 4.0 cm = 0.040 m"; proton: "q = 1.6 × 10⁻¹⁹ C"; "m = 1.67 × 10⁻²⁷ kg".

### 5. running the relay
> First, E is two hundred over point oh four oh: five point oh times ten to the three volts per metre. Then F is q times E: eight point oh times ten to the minus sixteen newtons. And a is F over m: four point eight times ten to the eleven metres per second squared. That's enormous, because the proton's mass is so **tiny**.

Visual: camera continue. Rows, one per cue, each lighting its relay box: "E = 200 ÷ 0.040 = 5.0 × 10³ V m⁻¹"; "F = (1.6 × 10⁻¹⁹)(5.0 × 10³) = 8.0 × 10⁻¹⁶ N" and an amber arrow on the proton, downwards; "a = 8.0 × 10⁻¹⁶ ÷ 1.67 × 10⁻²⁷ = 4.8 × 10¹¹ m s⁻²", boxed, with a violet "a" label on the proton. On "tiny" a grey tag "a car: about 3 m s⁻²".

### 6. how fast at the far plate?
> Now, how fast is it going at the negative plate? It starts from rest and speeds up steadily across the whole gap, so use v squared equals u squared plus two a s. u is zero, and s is the gap, point oh four oh metres. So v squared is two, times four point eight times ten to the eleven, times point oh four oh. Take the square root, and v is about two point oh times ten to the five metres per second. That's two hundred kilometres every **second**.

Visual: camera continue; the relay rows compress to the boxed a. Givens add: "u = 0"; "s = d = 0.040 m". Equation strip: "v² = u² + 2as". Rows: "v² = 0 + 2 × 4.8 × 10¹¹ × 0.040 = 3.8 × 10¹⁰"; on "square root" "v = √(3.8 × 10¹⁰) ≈ 2.0 × 10⁵ m s⁻¹", boxed. The proton runs across the gap and the "speed = ?" readout from v07's frame fills "2.0 × 10⁵ m s⁻¹". On "every second" a grey tag "200 km every second".

### 7. prediction: an electron instead
> Quick prediction. Swap the proton for an electron, starting at rest at the negative plate this time. Same plates, same voltage. Does it reach the other side faster or slower than the **proton**?

Visual: camera continue; the proton fades; a navy "−" labelled "electron, at rest" sits at the negative plate, with a dashed path up to the positive plate and a "speed = ?" readout. On "proton" chips "faster?" and "slower?" and a 3-second countdown ring.

### 8. the electron: much faster, but not 1840 times
> Faster, by a long way. Its charge is the same size, so it feels the same size of force, pointing towards the positive plate. But its mass is about eighteen hundred and forty times smaller, so its acceleration is about eighteen hundred and forty times bigger. Here's the surprise, though. Its final speed is only about forty-three times bigger: about eight point four times ten to the six metres per second. That's because v squared goes with the acceleration, so the speed only goes with its square **root**.

Visual: on "Faster" chip "faster?" glows and "slower?" takes a grey scribble cross. An amber arrow on the electron, upwards, the same length as the proton's was (ghost of the proton's arrow beside it, chip "same size of force"). On "eighteen hundred and forty times bigger" `SpeedRootBar`: a violet acceleration bar for the proton (one unit) and the electron's (about 1840 units, with a scale break; tag "not to scale"); row "a_e ≈ 8.8 × 10¹⁴ m s⁻²" in grey. On "only about forty-three" a blue speed bar pair: the electron's only about 43 proton-bars long; the electron runs up the gap and its readout fills "8.4 × 10⁶ m s⁻¹". On "square root" grey row "v² = 2as, so v ∝ √a; √1840 ≈ 43" and a chip "1840 times the acceleration, so 1840 times the speed" takes a grey scribble cross.

### 9. a second route: work and kinetic energy
> There's a second way to the speed, using energy. When a force pushes something along, it does work: force times distance. And the work done equals the gain in kinetic energy. Here, the electric force pushes the proton across the whole gap, so the work is eight point oh times ten to the minus sixteen newtons, times point oh four oh metres: three point two times ten to the minus seventeen joules. Set that equal to a half m v squared, and you get the same two point oh times ten to the five metres per **second**.

Visual: board change back to the proton at the positive plate. Right column: "W = F∥s" and "W = ΔKE" (tag "from the energy videos"; "F∥: force along the motion"). On "pushes the proton across" the proton crosses again with `EnergyBar` at the lower right: a hatched amber-outlined work bar and a blue kinetic-energy bar filling together. Rows: "W = 8.0 × 10⁻¹⁶ × 0.040 = 3.2 × 10⁻¹⁷ J"; on "a half m v squared" "½mv² = 3.2 × 10⁻¹⁷ J, so v = √(2 × 3.2 × 10⁻¹⁷ ÷ 1.67 × 10⁻²⁷)"; on "second" boxed "v ≈ 2.0 × 10⁵ m s⁻¹" beside scene 6's boxed answer with a tick "same answer".

### 10. worked example: a charge that slows (task and givens)
> Now one that runs the other way. Task: an electron moving at four point oh times ten to the six metres per second passes through a small hole in the positive plate, heading straight for the negative plate. The plates are two point oh centimetres apart, with sixty volts across them. How far does it get? First, think about direction. The force on the electron points back towards the positive plate, against its motion. So it slows **down**.

Visual: clear change to the calculation layout; coded plates with a small gap drawn in the top (positive) plate; a navy "−" electron enters through it with a blue velocity arrow "v" pointing down. Task strip: "How far does the electron get?". Equation strip: "W = ΔKE, with W = F∥s". Givens group, as two clusters: plates: "V = 60 V"; "d = 2.0 cm = 0.020 m"; electron: "v = 4.0 × 10⁶ m s⁻¹"; "m = 9.11 × 10⁻³¹ kg"; "q = −1.6 × 10⁻¹⁹ C". On "against its motion" an amber force arrow on the electron points up, against the blue arrow (chip "force against motion: slows"). On "slows down" the blue arrow starts to shrink.

### 11. solving it: when the kinetic energy runs out
> Its kinetic energy is a half m v squared: seven point three times ten to the minus eighteen joules. The field is sixty over point oh two oh, three point oh times ten to the three volts per metre, so the force is four point eight times ten to the minus sixteen newtons. That force takes kinetic energy away as the electron moves. So it stops when the work equals its kinetic energy, after about one point five centimetres. That's short of the gap, so it stops, and gets pushed back **out**.

Visual: camera continue. Rows, one per cue: "KE = ½ × 9.11 × 10⁻³¹ × (4.0 × 10⁶)² = 7.3 × 10⁻¹⁸ J"; "E = 60 ÷ 0.020 = 3.0 × 10³ V m⁻¹; F = (1.6 × 10⁻¹⁹)(3.0 × 10³) = 4.8 × 10⁻¹⁶ N" (size only); on "takes kinetic energy away" a blue kinetic-energy bar at the lower right drains as the electron moves down; on "the work equals its kinetic energy" "F × s = KE, so s = 7.3 × 10⁻¹⁸ ÷ 4.8 × 10⁻¹⁶ = 0.015 m", boxed "s ≈ 1.5 cm". `StopDistance`: the electron halts on a dashed line at 1.5 cm (label "1.5 cm < 2.0 cm"); on "pushed back out" it reverses and leaves through the hole.

### 12. memory aid
> To remember the relay: V over d gives the field, times q gives the force, and over m gives the **acceleration**.

Visual: the handwritten line writes large: "V over d gives the field, times q gives the force, over m gives the acceleration." Each phrase lights its relay box in turn. Hold about 2 seconds.

### 13. attempt 1 (countdown, 10 seconds)
> Your turn. An electron starts from rest at the negative plate of two parallel plates. The plates are one point five centimetres apart, with ninety volts between them. Calculate the electron's acceleration, then its speed as it reaches the positive plate. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Physics"), worded as printed (no diagram): "An electron (m = 9.11 × 10⁻³¹ kg, q = −1.6 × 10⁻¹⁹ C) is released from rest at the negative plate of a pair of parallel plates 1.5 cm apart with a potential difference of 90 V between them. Assume a vacuum and ignore gravity. (a) Calculate the magnitude of the acceleration of the electron. (b) Calculate its speed as it reaches the positive plate. (4 marks)" Tag: "HSC-style question, written for HSCScience". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 1 (brief)
> E is ninety over point oh one five: six point oh times ten to the three volts per metre. So F is nine point six times ten to the minus sixteen newtons, and a is F over m: one point one times ten to the fifteen metres per second **squared**. Then v squared is two a s, so v is about five point six times ten to the six metres per **second**. Forgetting the square root gives a speed faster than **light**.

Visual: card shrinks to the top; "1.5 cm", "from rest" and "90 V" underlined. Rows: "E = 90 ÷ 0.015 = 6.0 × 10³ V m⁻¹"; "F = (1.6 × 10⁻¹⁹)(6.0 × 10³) = 9.6 × 10⁻¹⁶ N"; on "squared" "(a) a = 9.6 × 10⁻¹⁶ ÷ 9.11 × 10⁻³¹ = 1.1 × 10¹⁵ m s⁻²", boxed; on "second" "(b) v² = 2 × 1.05 × 10¹⁵ × 0.015 = 3.2 × 10¹³; v = 5.6 × 10⁶ m s⁻¹", boxed. On "light" a chip "v = 3.2 × 10¹³ m s⁻¹" fades in and takes a grey scribble cross (grey tag "faster than light: no root taken"). Hold about 1 second.

### 15. attempt 2 (countdown, 10 seconds)
> Last one. A proton moving at one point five times ten to the five metres per second passes through a small hole in the negative plate, heading straight for the positive plate. The field between the plates is five point oh times ten to the three volts per metre, and the plates are four point oh centimetres apart. Explain whether the proton speeds up or slows down. Then use work and kinetic energy to decide whether it reaches the positive plate. Pause here to answer.

Visual: `QuestionCard`, worded as printed (no diagram): "A proton (m = 1.67 × 10⁻²⁷ kg, q = +1.6 × 10⁻¹⁹ C) travelling at 1.5 × 10⁵ m s⁻¹ passes through a small hole in the negative plate of a pair of parallel plates and moves directly towards the positive plate. The uniform field between the plates is 5.0 × 10³ V m⁻¹ and the plates are 4.0 cm apart. Assume a vacuum and ignore gravity. (a) Explain whether the proton speeds up or slows down. (b) Using W = ΔKE, determine whether the proton reaches the positive plate. (4 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 16. feedback 2 (brief)
> The force on a proton points along the field, towards the negative plate, against its motion, so it slows **down**. Its kinetic energy is one point nine times ten to the minus seventeen joules, and the force is eight point oh times ten to the minus sixteen newtons. So it stops after about two point three centimetres, short of the **gap**. Thinking it speeds up treats the field as always pushing **forwards**.

Visual: card shrinks to the top; "negative plate", "towards the positive plate" and "4.0 cm" underlined. Small coded plates: the proton with a blue velocity arrow up and an amber force arrow down; on "down" "(a) force along E, against the motion: slows", boxed. Rows: "KE = ½ × 1.67 × 10⁻²⁷ × (1.5 × 10⁵)² = 1.9 × 10⁻¹⁷ J"; "F = (1.6 × 10⁻¹⁹)(5.0 × 10³) = 8.0 × 10⁻¹⁶ N"; on "gap" "(b) s = KE ÷ F = 0.023 m = 2.3 cm < 4.0 cm: does not reach", boxed. On "forwards" a chip "speeds up towards the positive plate" fades in and takes a grey scribble cross. Hold about 1 second.

### 17. handoff
> So the field's force does work on a charge, and that work becomes kinetic energy. But where was that energy before the charge moved? And what if we kept the two hundred volts, but pulled the plates twice as far apart? Would the proton arrive faster, slower, or at the same **speed**?

Visual: board change: the memory line small at the top. The plates with the proton arrived at the negative plate, its blue kinetic-energy bar full ("3.2 × 10⁻¹⁷ J"). On "where was that energy" a dashed outline of an empty bar labelled "before: ?". On "twice as far apart" a second plate pair beside the first with the same "200 V" and twice the gap (field readout "half: 2.5 × 10³ V m⁻¹"), a proton at its positive plate with a "speed at the far plate: ?" readout. Chips write: "faster?", "slower?", "the same?". On "speed" the chip "Next: Why does a charge's energy depend on where it sits in a field, and where does that energy go as the field moves it?". This is the final frame of the video (series rule). Hold about 2 seconds.

### 18. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. In a uniform field the force F = qE is constant. Ignoring gravity, in a vacuum, it is the net force, so F_net = ma gives a constant acceleration: the charge speeds up steadily (or slows steadily if the force is against its motion).
2. The relay: E = V/d, then F = qE, then a = F/m. Then the equations of motion (v² = u² + 2as, with s = d for the full gap).
3. Energy route: the work done by the electric force, W = F∥s, equals ΔKE = ½mv² − ½mu².
4. Same charge size, same force: an electron gets about 1840 times a proton's acceleration, but only about 43 times its speed (v ∝ √a).

Memory aid (large, on the notes screen): *V over d gives the field, times q gives the force, over m gives the acceleration.*

At the end the notes cross-fade back to scene 17's final frame (series rule).

## Teaching checks

- **Does it explain causes?** Why the proton speeds up steadily: a uniform field gives a constant force, which is the net force (weight negligible, no air), and a constant net force gives a constant acceleration (2). Why the relay order: each equation needs the previous result (3). Why the speed is so high: a tiny mass (5, 6). Why the electron is faster: the same force on about 1840 times less mass (8). Why only 43 times faster: v² goes with a (8). Why the energy route works: the force does work over the gap, which becomes kinetic energy (9). Why the second electron stops: its force points against its motion and takes its kinetic energy away (10, 11).
- **Misconceptions addressed:** constant speed in a uniform field (2); light and heavy particles gain the same speed (8); speed scales like acceleration (8); the field always speeds a charge up (10, feedback 2 crossed); no square root (feedback 1 crossed).
- **One idea at a time:** the cause of the acceleration (2), the plan (3), the givens (4), each relay step (5), the speed (6), the electron (7, 8), energy (9), direction and stopping (10, 11).
- **Video makes it easier:** the student sees equal time-step dots spread out and a velocity arrow grow by equal amounts under an unchanging force arrow (2), relay boxes pass results along (3, 5), the electron's acceleration bar dwarf its speed bar's growth (8), work and kinetic-energy bars fill together (9) and an electron's velocity arrow shrink to a stop short of the far plate (11).
- **Response opportunity:** two 3 s predictions (1, 7); two unseen HSC-style tasks, 10 seconds each, every condition on the card (masses and charges; from rest; the plate it starts at and the plate it heads for; "Assume a vacuum and ignore gravity"), nothing answer-bearing. One crossed mistake each; feedback about 29 s and 30 s.
- **Avoided double teaching:** v05's F = qE, direction rule, mass ratio and negligible weights recalled in a phrase each (2, 8); v07's E = V/d used without re-teaching (3, 5); FA1's F_net = ma, equations of motion, free fall, W = F∥s and W = ΔKE recalled in a phrase each (2, 3, 6, 9).
- **Syllabus coverage:** `ci8ba3687b`: problems using F⃗ = qE⃗ (5, 8, 10, 11, A1, A2, with direction from the sign), E = V/d (5, 11, A1), F⃗net = ma⃗ (2, 5, A1; direction in 10, A2) and W = ΔKE (9, 11, A2).
- **Out of scope by design:** potential energy, the gap-independence of the final speed and W = qV (v09, set up in 17); what a volt measures (v10); sideways entry and curved paths (Year 12); point-charge field problems (v04 to v06).

## Practice questions and model answers

**Attempt 1 (scene 13; original wording, HSC style, 4 marks suggested, not an official marking scheme).** "An electron (m = 9.11 × 10⁻³¹ kg, q = −1.6 × 10⁻¹⁹ C) is released from rest at the negative plate of a pair of parallel plates 1.5 cm apart with a potential difference of 90 V between them. Assume a vacuum and ignore gravity. (a) Calculate the magnitude of the acceleration of the electron. (b) Calculate its speed as it reaches the positive plate."
Model answer: (a) E = V/d = 90 ÷ 0.015 = 6.0 × 10³ V m⁻¹. F = qE = 1.6 × 10⁻¹⁹ × 6.0 × 10³ = 9.6 × 10⁻¹⁶ N (towards the positive plate). a = F/m = 9.6 × 10⁻¹⁶ ÷ 9.11 × 10⁻³¹ = 1.1 × 10¹⁵ m s⁻². (b) The acceleration is constant across the gap: v² = u² + 2as = 0 + 2 × 1.05 × 10¹⁵ × 0.015 = 3.2 × 10¹³ m² s⁻², so v = 5.6 × 10⁶ m s⁻¹. (Or W = Fd = 9.6 × 10⁻¹⁶ × 0.015 = 1.44 × 10⁻¹⁷ J = ½mv², giving the same v.) Classic mistake (crossed): "v = 3.2 × 10¹³ m s⁻¹".

**Attempt 2 (scene 15; original wording, HSC style, 4 marks suggested).** "A proton (m = 1.67 × 10⁻²⁷ kg, q = +1.6 × 10⁻¹⁹ C) travelling at 1.5 × 10⁵ m s⁻¹ passes through a small hole in the negative plate of a pair of parallel plates and moves directly towards the positive plate. The uniform field between the plates is 5.0 × 10³ V m⁻¹ and the plates are 4.0 cm apart. Assume a vacuum and ignore gravity. (a) Explain whether the proton speeds up or slows down. (b) Using W = ΔKE, determine whether the proton reaches the positive plate."
Model answer: (a) The field points from the positive plate to the negative plate. The force on a positive charge is along the field, so it points towards the negative plate, opposite to the proton's motion; the proton slows down (uniformly). (b) Initial KE = ½mv² = ½ × 1.67 × 10⁻²⁷ × (1.5 × 10⁵)² = 1.9 × 10⁻¹⁷ J. F = qE = 1.6 × 10⁻¹⁹ × 5.0 × 10³ = 8.0 × 10⁻¹⁶ N. The work done against the proton's motion over a distance s removes kinetic energy: Fs = ΔKE, so it stops after s = 1.88 × 10⁻¹⁷ ÷ 8.0 × 10⁻¹⁶ = 0.023 m = 2.3 cm. This is less than 4.0 cm, so the proton does not reach the positive plate (it stops and is pushed back). Classic mistake (crossed): "speeds up towards the positive plate".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| `we-1` (site) | V = 200 V; d = 4.0 cm = 0.040 m; q = 1.6 × 10⁻¹⁹ C; m = 1.67 × 10⁻²⁷ kg; E = 5.0 × 10³ V m⁻¹; F = 8.0 × 10⁻¹⁶ N; a = 4.8 × 10¹¹ m s⁻² | 4, 5 |
| Proton speed at far plate | v² = 3.8 × 10¹⁰ m² s⁻²; v ≈ 2.0 × 10⁵ m s⁻¹ (about 200 km s⁻¹) | 6, 9 |
| Weight comparison (tag) | about 10⁻¹¹ of the electric force | 2 |
| Car comparison (tag) | about 3 m s⁻² | 5 |
| Electron in the same plates | a ≈ 8.8 × 10¹⁴ m s⁻² (about 1840 times); v ≈ 8.4 × 10⁶ m s⁻¹ (about 43 times) | 8 |
| Energy route | W = 3.2 × 10⁻¹⁷ J | 9, 17 |
| Worked example 2 | v = 4.0 × 10⁶ m s⁻¹; V = 60 V; d = 0.020 m; m = 9.11 × 10⁻³¹ kg; KE = 7.3 × 10⁻¹⁸ J; E = 3.0 × 10³ V m⁻¹; F = 4.8 × 10⁻¹⁶ N; s ≈ 1.5 cm | 10, 11 |
| A1 | d = 0.015 m; V = 90 V; E = 6.0 × 10³ V m⁻¹; F = 9.6 × 10⁻¹⁶ N; a = 1.1 × 10¹⁵ m s⁻²; v² = 3.2 × 10¹³; v = 5.6 × 10⁶ m s⁻¹; crossed 3.2 × 10¹³ m s⁻¹ | 13, 14 |
| A2 | v = 1.5 × 10⁵ m s⁻¹; E = 5.0 × 10³ V m⁻¹; d = 4.0 cm; KE = 1.9 × 10⁻¹⁷ J; F = 8.0 × 10⁻¹⁶ N; s = 2.3 cm | 15, 16 |
| Handoff | 200 V, twice the gap (8.0 cm): E = 2.5 × 10³ V m⁻¹ | 17 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (3 Nov); Codex to re-check.

- 200 ÷ 0.040 = 5.0 × 10³; × 1.6 × 10⁻¹⁹ = 8.0 × 10⁻¹⁶; ÷ 1.67 × 10⁻²⁷ = 4.79 × 10¹¹.
- 2 × 4.79 × 10¹¹ × 0.040 = 3.83 × 10¹⁰; √ = 1.96 × 10⁵.
- 8.0 × 10⁻¹⁶ ÷ 9.11 × 10⁻³¹ = 8.78 × 10¹⁴; √(2 × 8.78 × 10¹⁴ × 0.040) = 8.38 × 10⁶; ratio 42.8; √1836 = 42.8.
- 8.0 × 10⁻¹⁶ × 0.040 = 3.2 × 10⁻¹⁷; √(2 × 3.2 × 10⁻¹⁷ ÷ 1.67 × 10⁻²⁷) = 1.96 × 10⁵.
- 60 ÷ 0.020 = 3.0 × 10³; × 1.6 × 10⁻¹⁹ = 4.8 × 10⁻¹⁶; ½ × 9.11 × 10⁻³¹ × (4.0 × 10⁶)² = 7.29 × 10⁻¹⁸; ÷ 4.8 × 10⁻¹⁶ = 0.0152.
- 90 ÷ 0.015 = 6.0 × 10³; × 1.6 × 10⁻¹⁹ = 9.6 × 10⁻¹⁶; ÷ 9.11 × 10⁻³¹ = 1.054 × 10¹⁵; 2 × 1.054 × 10¹⁵ × 0.015 = 3.16 × 10¹³; √ = 5.62 × 10⁶.
- ½ × 1.67 × 10⁻²⁷ × (1.5 × 10⁵)² = 1.88 × 10⁻¹⁷; 1.6 × 10⁻¹⁹ × 5.0 × 10³ = 8.0 × 10⁻¹⁶; 1.88 × 10⁻¹⁷ ÷ 8.0 × 10⁻¹⁶ = 0.0235.
- Proton weight 1.67 × 10⁻²⁷ × 9.8 = 1.6 × 10⁻²⁶ N; ratio to 8.0 × 10⁻¹⁶ N = 2 × 10⁻¹¹.
- 200 ÷ 0.080 = 2.5 × 10³.

## Memory aid check

- **"V over d gives the field, times q gives the force, over m gives the acceleration."** Meaning, as said in scene 12: the order of the relay, E = V/d, F = qE, a = F/m, so a = qV/(md). Assumptions checked: E = V/d holds only for a uniform field between parallel plates (the video's context; the key notes say so); a = F/m needs the electric force to be the net force (weight negligible, vacuum, both on every card); the relay gives sizes, and the direction comes from the charge's sign (v05's rule, used in 8, 10 and A2). Introduced after the cause (2) and the worked example (5).
- **Site hook (lesson 8) not used.** "Between plates, a charge is a projectile..." relies on projectile motion, which is not in Year 11 (2025) (site correction 2), and describes sideways entry, which this video does not teach.

## Narration length estimate

Revision 1 count (3 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **6,205 characters** (6,222 joined), 18 scenes. Characters per scene (1 to 18): 203, 410, 311, 396, 318, 443, 190, 504, 510, 437, 485, 108, 276, 392, 469, 399, 279, 75. At 13.3 characters per second the speech is about 467 s; add about 10 s of holds and settling (the bell jar in 2, the time-step run in 2, the comparison bars in 8, the energy bars in 9, the stop and return in 11), the 2-second memory hold and the 2-second handoff hold, 6 s for two prediction countdowns, 20 s for two attempt countdowns, 2 s of feedback holds and about 54 s more of the quiet notes hold (about 96 s of holds): **about 563 s**, inside the owner's 5 to 10 minute target. If the voiced preview runs over 570 s, use open decision 3's cut.

## Scene list and build ids

Lesson key `p-y11-fa3-v08` (route phys-y11-fa3-v08). Suggested explainer folder `src/explainer/lessons/phys-y11-fa3-v08` and build folder `docs/production/claude-pm/lessons/p-y11-fa3-v08` (root to confirm).

In order (kebab-case; 18 scene headings, all `### N.`): hook, constant-acceleration, relay, worked-example-1-givens, relay-steps, final-speed, prediction, electron-speed, energy-route, worked-example-2-givens, stopping-distance, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). The hook and prediction carry 3 s countdowns inside explain scenes. Transitions (`pickTransition`): v07's last frame continues into scene 1 (camera continue: plates, proton and arrows carry over); 1 to 2 camera continue, with a brief board change to the bell jar and a tilt back; 2 to 3 camera continue; 3 to 4 clear change to the calculation layout; 4 to 5 camera continue; 5 to 6 camera continue; 6 to 7 camera continue; 7 to 8 camera continue; 8 to 9 board change back to the proton; 9 to 10 clear change to the calculation layout; 10 to 11 camera continue; 11 to 12 fade; attempts and feedback card shrink to the top; 16 to 17 board clear; 17 to 18 fade to the notes board, and 18 cross-fades back to 17's final frame.

Holds: hook and prediction (3 s), attempt-1, attempt-2 (10 s after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/p-y11-fa3-v08-learning-review.md`, `science_check` = `checks/p-y11-fa3-v08-physics-check.md`.

## Assets

Reused (by name): `phys-y11-metal-plate-v1.png` (v07's request; 2, used twice). Coded parts reused from v05 (`AccelRace` look for the dots), v07 (edge-on plates, `UniformField`) and FA1 (one-second step dots, `MotionGraphStack`, `EnergyBar`).

New (requested below): `phys-y11-bell-jar-v1.png` (2).

Checked first (3 Nov): `public/assets/physics/` has no vacuum, glassware or electrostatics plates; v07's plate requests are not yet delivered.

Coded: plates in section, charges, force, velocity and acceleration arrows, the time-step dots, the velocity-time panel, relay boxes, comparison bars, energy bars, the stop line, working.

Kit gaps (for the next physics kit brief): `RelayChain`, `SpeedRootBar`, `StopDistance`; lesson-local acceptable for Revision 1.

## Codex asset brief (Year 11 Physics FA3 v08, vacuum)

Same house style and rules as v01's brief (soft painted realism, gentle top-left light, no cast shadow on the background, transparent PNG with a true alpha channel, no text, no people or hands). Save to `public/assets/physics/`. Uniform scaling only.

1. `phys-y11-bell-jar-v1.png`: an empty clear glass laboratory bell jar with a rounded top knob, sitting on a flat grey metal vacuum base plate with a short side outlet pipe; front view; the glass mostly transparent (true alpha through the glass, with soft highlights and edge refraction only) so that v07's plates can be composited inside it. About 1000 px tall.

Acceptance: true transparency through the glass, no halo; no red, navy, teal or amber.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the physics claims: in a uniform field the force is constant; with weight negligible and a vacuum it is the net force, so the acceleration is constant; the relay E = V/d, F = qE, a = F/m; v² = u² + 2as with s = d from rest; same force on an electron gives about 1836 times the acceleration and about 43 times the final speed (v ∝ √a); W = F∥s = ΔKE gives the same speed; a force against the motion slows the charge, and it stops after KE ÷ F; directions of the forces on the electron and the proton in 10 and A2.
3. Confirm no electric potential energy, W = qV, W = qEd as energy of position, or definition of the volt appears (the handoff asks the questions only), and no sideways-entry path is drawn.
4. Confirm both attempt questions are original in wording, carry every condition, and give nothing away.
5. Confirm the syllabus quote matches the syllabus JSON exactly (with the vector arrows typeset and the fraction written inline) and no 2017-syllabus label appears.
6. Confirm the opening frame matches `phys-y11-fa3-v07.md` scene 18.
7. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
8. Confirm the narration character count by script with the build parser rules.
9. Add site corrections 1 to 3 under Decisions to `../site-corrections-phys-y11.md` (owner record only).

## YouTube metadata (draft)

Title: Charged Particles Between Parallel Plates | Year 11 Physics

(Title length: 58 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa3-electricity-and-magnetism/lesson08.sa.html

Let a proton go between two charged plates. Does it drift across at a steady speed, or keep speeding up? See why a uniform field gives a constant force and so a constant acceleration, then run the relay E = V/d, F = qE, a = F/m and find how fast the proton arrives. Find out why an electron gets about 1840 times the acceleration but only about 43 times the speed, check the answer with work and kinetic energy (W = ΔKE), and work out how far an electron gets when the field pushes against it. Two exam-style questions at the end.

Year 11 Physics (2025 syllabus), Focus Area 3: Electricity and magnetism.
Syllabus content (NSW Physics 11-12, 2025):
"Solve problems relating to the charged particles in electric fields using F⃗ = qE⃗, E = V/d, F⃗net = ma⃗ and W = ΔKE" (ci8ba3687b)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fabcbab907

Builds on: The field between parallel plates (previous video). Next: Electric potential energy and work.

#Year11Physics #Physics #ElectricFields #HSCScience

## Open decisions

- **1. v09's question (proposal).** The handoff chip uses "Why does a charge's energy depend on where it sits in a field, and where does that energy go as the field moves it?" for phys-y11-fa3-v09 (route placeholder "How can I explain and apply electric potential energy and work?"). v09's design (written next) adopts it.
- **2. Velocity colour in FA3.** FA1 decision 18 keeps velocity teal, but teal is the electric field in FA3 (FA2 decision 18). This design draws velocity as a thin blue arrow labelled "v" (FA2 decision 9 precedent), distinct in shape from the blue kinetic-energy bars. Root to confirm for FA3.
- **3. Worked example 2 (10, 11).** The slowing electron uses the vector form (direction against motion) and W = ΔKE as a stopping distance; it is the one HSC-style step beyond the site. The first cut if the review finds it crowded is the scene 11 field line ("The field is sixty over ...") by giving F on the givens card (about 110 characters).
- **4. Route refinement (root to record).** Question as above; start "Begin at v07's proton at the positive plate with equal force arrows; recall F = qE and E = V/d"; stop "Stop at one-dimensional motion along the field in a uniform field (relay, speed by equations of motion and by W = ΔKE, a charge slowed by the field); hand potential energy and the gap-independence of the final speed to v09".
- **5. Site link form.** As FA1 v08.

## Review notes

- Revision 1 next steps: student learning review (trace from v07 at Year 11 entry; check that the constant-acceleration cause lands from the equal-step dots; that the relay is not a formula dump; that the √a surprise is clear and not a detour; that worked example 2's direction reasoning is followed; that the attempts give nothing away), then the Codex physics check and error check.
- The equal force arrow over growing step spacing (2), the relay boxes (3, 5), the acceleration-against-speed bars (8), the matching energy bars (9) and the electron's shrinking velocity arrow (11) carry the explanation; judge them at playback speed in the voiced preview.
