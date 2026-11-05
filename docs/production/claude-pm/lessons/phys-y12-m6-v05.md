# Year 12 Physics M6 V05: Charged particles in circles. Why does a perpendicular magnetic field bend a path without increasing speed? (design)

Status: Revision 1 (6 Nov 2026): first design. Needs independent learning review and science check before voicing.

Narration 5,640 characters, 17 scenes, about 512 s, counted by script with the build parser rules (see "Narration length estimate").

Scope: Year 12 Physics (Physics Stage 6, 2017 syllabus), Module 6 (Electromagnetism), inquiry question "What happens to stationary and moving charged particles when they interact with an electric or magnetic field?". Templates as `phys-y12-m6-v01.md`; circular-motion language from `phys-y12-m5-v11.md` (recalled, not re-taught). No pre-design pack exists; the pack work is done here. Site lesson read in full (6 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson05.sa.html`, SHA256 `24ff45b4d5154abeb62d80f46730dc81d9d67999c3e006527203146c029f4c0f` (recomputed 6 Nov; matches the route). Sections used: `derive-orbit-equations`, `investigate-period`, `compare-particle-orbits`. The zero-work argument is taken from lesson 4's card 1 (`lesson04.sa.html`, read in full for v04, SHA256 `51b78f880d43bb99c4e8c1b34f406db6b3cdd9d9901df24238974584f5e9a2d7`). Route entry: `phys-y12-m6-v05`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Combine magnetic force and centripetal acceleration; calculate radius and period, explain zero work. Stop before combined-field instruments." Next: "phys-y12-m6-v06: How can crossed fields select one particle speed?"

Owner rules applied: as v01 (2017 syllabus quoted exactly; no people, hands, faces or body outlines; the Earth, satellite and steel ball are existing painted plates; field grids, orbits and vectors are coded; every number recalculated in Python with HSC data sheet constants; "Pause here to answer." with a 10 s countdown; brief feedback; Australian spelling; no em dashes). Recalled, not re-taught: v04 (F = qvB sin θ, direction, always perpendicular to v); m5-v11 (uniform circular motion: constant speed, inward acceleration v²/r, net inward force mv²/r, period T = 2πr/v); m5-v17 and v18 (satellite orbits, v = √(GM/r)); v02 and v03 (the electric force did work and changed the speed); Year 11 work W = Fd cos θ.

Syllabus content (Physics Stage 6 (2017), Module 6; ledger ids `P6-IQ1-03` and `P6-IQ1-04`), quoted from the route JSON `syllabusActions`:

- `P6-IQ1-03`: "analyse the interaction between charged particles and uniform magnetic fields, including: (ACSPH083)" "acceleration, perpendicular to the field, of charged particles", "the force on the charge F=qv_(⊥)B=qvBsinθ"
- `P6-IQ1-04`: "compare the interaction of charged particles moving in magnetic fields to:" "the interaction of charged particles with electric fields", "other examples of uniform circular motion (ACSPH108)"

This video covers the perpendicular acceleration and both comparisons in outline; v06 develops the comparison with electric fields.

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 56)

**Boundary:** starts on v04's final frame (a proton moving right in a cross grid with an upward force and a dashed "?" path). Teaches: zero work, because F ⊥ v at every instant, so constant kinetic energy and speed; constant speed gives a constant-size force, always perpendicular, so uniform circular motion with the magnetic force as the centripetal force; r = mv/(qB) derived and read; the site worked example (electron and proton at 4.0 × 10⁶ m s⁻¹ in 0.020 T: 1.14 mm and 2.09 m, opposite senses); T = 2πm/(qB), independent of speed; comparison with a ball on a string and a satellite (what supplies the force; what adjusts); comparison with the parabola in an electric field. Stops before combined fields (v06), cyclotron design, helices and relativistic speeds.

## Decisions

- **Learner question (route wording kept).** "Why does a perpendicular magnetic field bend a path without increasing speed?" The answer, built in order: the force is always perpendicular to the velocity, so it does no work and the speed cannot change (2); a constant-size force that stays perpendicular turns the path at a steady rate, so the path is a circle (3); the magnetic force is the centripetal force, so qvB = mv²/r and r = mv/(qB) (4); the lap time 2πm/(qB) does not depend on speed (6).
- **Hook (site hook and Think First).** Opens on v04's "?" path; two predictions: what happens to the speed (spiral in, speed up, circle) and whether an electron at the same speed curves more or less tightly. The second is answered in scenes 5 and 10.
- **Zero work first (route stop "explain zero work").** W = Fd cos 90° = 0 at every instant; ΔK = 0. Contrasted with the electric force in v02 and v03, which did work. The "speed readout stays fixed" visual runs throughout scenes 2 to 6.
- **Why a circle (site card 1).** Constant speed → constant |F| = qvB; always perpendicular → the same turning everywhere → circle; "there is no extra force and nothing at the centre" (site "Compare 5 marks": "no object at the centre").
- **Radius and period derived (route stop; route entry "Derive each newly introduced equation").** qvB = mv²/r → r = mv/(qB); T = 2πr/v → T = 2πm/(qB). The site flags period derivations as beyond the core; the route asks for the period, so it stays, in one scene (open decision 2).
- **Worked example (site card 3, exact numbers).** Electron r = 1.14 mm, proton r = 2.09 m (ratio 1837); periods 1.79 ns and 3.28 μs. Opposite senses of rotation (electron clockwise? see author note b for the sense in the drawn field).
- **Cyclotron.** Named in one clause as the use of the speed-independent period, with the necessary condition "well below the speed of light" kept in learner copy, because without it the claim is wrong.
- **Comparison with other circular motion (`P6-IQ1-04`, ACSPH108; site card 4 and "Compare 5 marks").** Three systems, one rule (real force = mv²/r): ball on a string (tension adjusts; the string fixes r), satellite (gravity; faster orbit is smaller, r = GM/v²), charge in B (force set by v; faster takes a bigger circle). Plates: steel ball (m5-v11), Earth and satellite (m5-v17).
- **Comparison with an electric field (`P6-IQ1-04`).** One scene: parabola and changing speed against circle and constant speed. v06 develops the force-by-force comparison.
- **Out of scope by design (site "oblique entry" box).** Helical motion is not narrated (author note c).
- **Memory aid.** "A magnetic force steers; it never speeds." Plus "r = mv/qB: momentum on top, charge and field underneath." See "Memory aid check".
- **Attempts.** A1 (original): proton, 3.0 × 10⁶ m s⁻¹, 0.25 T: r = 0.125 m, T = 2.62 × 10⁻⁷ s; crossed "electron mass: 6.8 × 10⁻⁵ m". A2 (original, after site Activity 2): the proton's speed doubles: r doubles, T unchanged; crossed "T halves".
- **Colour key (v01).** Velocity teal; magnetic force amber (here also the centripetal force: one arrow, labelled "F_B = qvB (centripetal)"); radius navy; slate crosses; speed readout ink.
- **Site sources used:** lesson 5 hook and Think First (shape; doubling B; doubling speed), learning intentions, vocabulary (radius of curvature, period, centripetal force, charge-to-mass ratio), card 1 (derivation, period, figure description), card 2 (period independence, cyclotron principle, HSC Tip), card 3 (worked example), card 4 (comparison table with a satellite), the Activity 2 question (A2), short-answer Q1 (method for A1), "Analyse 6 marks" (scene 4's reading of r), "Compare 5 marks" (string versus magnetic force, scene 7); lesson 4 card 1 (zero work, scene 2) and misconception 1 (accelerators). Not used: the interactive; cyclotron frequency as a separate formula (named on screen as f = 1/T only); the oblique-entry helix.
- **Site notes (for root to log if accepted):** none. Checked and correct (site constants): worked example r_e = 1.14 mm, r_p = 2.09 m, T_e = 1.79 × 10⁻⁹ s, T_p = 3.28 × 10⁻⁶ s; MC "2.0 × 10⁶ m s⁻¹ in 0.010 T: 1.1 mm"; short-answer Q1 r = 0.174 m, T = 2.19 × 10⁻⁶ s; the satellite comparison r = GM/v². The site's "Beyond the syllabus" note on period derivations is a scope call for root (open decision 2).
- **Cause chain taught, in order:** (1) F ⊥ v at every instant, so the field does no work (2); (2) no work, so K and the speed are constant (2); (3) constant speed, so |F| = qvB is constant (3); (4) a constant-size force always perpendicular to v turns the path at a steady rate: a circle, with F towards the centre (3); (5) qvB = mv²/r gives r = mv/(qB) (4); (6) same v and q: r ∝ m, and the sense of turning follows the sign of q (5); (7) a = qvB/m points to the centre, perpendicular to v and B: velocity changes, speed does not (6); (8) T = 2πr/v = 2πm/(qB): a faster particle's bigger circle takes the same time (7); (9) in each circular system a real force supplies mv²/r; what adjusts differs (8); (10) a uniform E gives a fixed-direction force and a parabola with changing speed; B gives a turning force and a circle at constant speed (9).
- **Entry knowledge:** v04; m5-v11 (centripetal force), m5-v17/v18 (orbits); v02, v03.
- **Learner-visible vocabulary:** centripetal force (the net force towards the centre needed for circular motion, recalled, 3); period (time for one lap, recalled, 6); radius of curvature (6, screen); cyclotron (named, 6).
- **Legacy logic ported:** none. The coded `MagneticOrbit` visual (`m6-magnetic-orbit`, `orbitRadius()` in `module6/model.ts`; limits "positive charge; perpendicular entry; non-relativistic; no helix") is the starting point for the orbit stage, extended to negative charges and to two scales.
- **New explainer motion:** **orbit stage** (kit gap 5: a charge moving on its exact circle in a cross or dot grid at a set speed; tangent v and inward F arrows at chosen moments with right-angle marks; a fixed speed readout and a K bar that never changes; a "work = 0" counter; lap timer; two concentric orbits at different speeds with synchronised lap timers; side-by-side panels at different scales with scale bars); **three-system comparison board** (ball on a string top view from m5-v11, satellite and Earth from m5-v17, charge in B, each with its force arrow and a "faster →" result); `AlignedAlgebra`; `NumberTicker`; `Countdown`; `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `CameraStage`.
- **No human figures.** The ball on a string is whirled round a fixed coded peg (m5-v11 top view), not by a person.
- **Author notes (not learner copy):**
  (a) Work: P = F · v = 0 at every instant, so K is constant exactly (not just on average).
  (b) Senses of rotation in the drawn field (B into the page, viewer looking at the page): a positive charge moving right is pushed up, so it circulates anticlockwise; an electron circulates clockwise. Checked with F = q(v × B).
  (c) Oblique entry: v∥ unchanged, so a helix with r = mv⊥/(qB); not narrated (site's model box).
  (d) Cyclotron: f = qB/(2πm) is constant only while v ≪ c; the relativistic loss of synchronism is not narrated beyond the condition.
  (e) Pronunciations: "m v over q B"; "two pi m over q B"; "nanoseconds", "microseconds".

- **Open decisions for root:**
  - **1. Opening join (root).** v04's final frame shows a proton with a dashed "?" path; scene 1 completes it into a circle only after the predictions.
  - **2. Period (root).** The site marks period derivations and cyclotron frequency as beyond the core; the route asks for "radius and period". Scene 7 keeps T = 2πm/(qB) (about 40 s). Confirm, or cut to radius only and add a line to scene 4.
  - **3. Comparison board (learning review).** Scene 8 compares three systems in about 30 s. Confirm the load is right for a student meeting it for the first time.

Main question: *A proton moves through a magnetic field, pushed sideways at every instant. The push never stops, so why doesn't it speed up, what path does it follow, and how big is the loop?*
Entry knowledge: v04; m5-v11; v02, v03.
Stops after: zero work and constant speed; the circle; r = mv/(qB); T = 2πm/(qB); comparisons with other circular motion and with an electric field. No combined fields.
Handoff: v06, how crossed fields can select one particle speed.

## Script and shots

Cue words in **bold** trigger the visual change. Screen symbols in italic: *F*, *q*, *v*, *B*, *m*, *r*, *T*. Paper background and handwritten headline face as the explainer house style.

### 1. hook (a push that never speeds it up)
> Here's our proton, moving to the right through a field into the page, and pushed upwards. As it turns, the force turns with it, always at right angles to the motion. So, does it speed up, spiral inwards, or go round in a **circle**? And would an electron at the same speed curve more tightly, or less? Make your **predictions**.

Visual: opens on v04's final frame (see "Opening frame"). The proton moves a short way along the dashed path; v and F turn together with the right-angle mark. On "circle" three ghost chips appear on the dashed "?": "speeds up", "spirals in", "circle". On "predictions" an electron ghost appears at the start point with "tighter or wider?", and the 3 s `Countdown` runs.

### 2. no work, so no change in speed
> Start with the speed. Work is done only by the part of a force along the direction of motion. The magnetic force is always at right angles to the velocity, so it has no part along the motion, and it does no work, at any **instant**. No work means no change in kinetic energy, so the speed stays exactly the **same**. The field changes the direction of the velocity, never its size. That's different from the electric field between plates, which pushed partly along the motion, did work, and sped the electron **up**.

Visual: camera continue (orbit stage). Heading writes on: "Why does a perpendicular magnetic field bend a path without increasing speed?". At the proton: "W = F d cos θ" with θ = 90° between the amber F and a short teal displacement step; on "instant" the row resolves "cos 90° = 0 → W = 0", and a "work done" counter beside the stage stays at 0 as the proton moves on. On "same" a fixed speed readout "v = 4.0 × 10⁶ m s⁻¹" and an orange K bar that does not change, tag "K constant → speed constant". On "up" a small inset of v02's plate path with its K bar growing, tag "electric field: does work".

### 3. why the path is a circle
> So the speed is constant, which means the force, q v B, has a constant size too. A force of constant size, always at right angles to the velocity, turns the path by the same amount every moment. That's uniform circular **motion**, which we met in Module five. The magnetic force points to the centre of the circle. It is the centripetal force. There's no extra force, and nothing at the **centre**.

Visual: camera pull. The proton completes its path: the dashed "?" becomes a solid circle; at four moments the teal v arrows (tangent) and amber F arrows (towards the centre, equal lengths) stay visible with right-angle marks. On "motion" the "circle" chip from scene 1 ticks and a recall tag "m5-v11: net inward force mv²/r" appears. On "centre" the centre is marked with a small empty cross-hair, tag "nothing here: the field supplies the force at every point".

### 4. deriving the radius
> Set the magnetic force equal to the centripetal force the circle **needs**. q v B equals m v squared over r. One v cancels, so r equals m v over q **B**. Read what it says. A faster or heavier particle swings out on a bigger circle. A stronger field, or a bigger charge, pulls it into a tighter **one**. The mass is on top because a heavier particle is harder to turn.

Visual: camera push to the right column. `AlignedAlgebra`: on "needs" "F_B = F_centripetal", then "qvB = mv²/r"; "qB = mv/r" with one v struck through; on "B" boxed "r = mv/(qB)". On "one" four small chips beside the formula: "v ↑ → r ↑", "m ↑ → r ↑", "B ↑ → r ↓", "q ↑ → r ↓", each with a mini orbit growing or shrinking.

### 5. worked example: an electron and a proton
> Try an electron and a proton, both moving at four point zero times ten to the six metres per second, in a field of zero point zero two oh tesla. For the electron, r is nine point one oh nine times ten to the minus thirty-one, times four times ten to the six, over one point six oh two times ten to the minus nineteen, times zero point zero two. That's about one point one four **millimetres**. The proton has the same size of charge, but it's about eighteen hundred times heavier, so its circle is about eighteen hundred times bigger, two point oh nine **metres**. And they turn in opposite directions, because their charges have opposite **signs**.

Visual: calculation layout. Task strip: "Electron and proton, same speed, same field: find each radius." Equation strip: "r = mv/(qB)". Givens grouped: "v = 4.0 × 10⁶ m s⁻¹", "B = 0.020 T", "|q| = 1.602 × 10⁻¹⁹ C", "m_e = 9.109 × 10⁻³¹ kg", "m_p = 1.673 × 10⁻²⁷ kg". `AlignedAlgebra`: "r_e = (9.109 × 10⁻³¹ × 4.0 × 10⁶)/(1.602 × 10⁻¹⁹ × 0.020)"; on "millimetres" "= 1.14 × 10⁻³ m" boxed. On "metres" "r_p = 2.09 m (× 1837)" boxed. On "signs" two orbit panels side by side at different scales with scale bars "1 mm" and "1 m": the proton circulating anticlockwise, the electron clockwise, each with its inward amber force.

### 6. an acceleration at right angles to the field
> The syllabus calls this an acceleration perpendicular to the field. The electron's speed isn't changing, but its velocity is, because its direction keeps turning. Its acceleration is the force over the mass, q v B over m, which is about one point four times ten to the sixteen metres per second **squared**. It points to the centre of the circle, at right angles to both the velocity and the field, so it changes the direction, and never the **speed**.

Visual: camera change to the electron's orbit panel (scale bar "1 mm"). A violet "a" arrow joins the amber F arrow, both pointing to the centre; `AlignedAlgebra` at the right: "a = F/m = qvB/m"; on "squared" "= (1.602 × 10⁻¹⁹ × 4.0 × 10⁶ × 0.020)/(9.109 × 10⁻³¹) = 1.4 × 10¹⁶ m s⁻²" boxed, with a check row "= v²/r ✓". On "speed" a small corner triad shows a ⊥ v and a ⊥ B (B into the page as a cross), tag "a ⊥ B and a ⊥ v: direction changes, speed doesn't".

### 7. the lap time doesn't depend on speed
> How long does one lap take? The period is the distance round, two pi r, over the speed. Put in r equals m v over q B, and the v cancels, so T equals two pi m over q **B**. That's surprising. A faster particle goes round a bigger circle, in exactly the same **time**. For the electron here, one lap takes one point seven nine nanoseconds. For the proton, three point two eight **microseconds**. This is what lets a cyclotron keep particles in step, as long as they stay well below the speed of light.

Visual: camera change to the orbit stage. `AlignedAlgebra` at the right: "T = 2πr/v = 2π(mv/qB)/v"; on "B" the v's strike through, boxed "T = 2πm/(qB)". On "time" two protons start together from the same point, one at v and one at 2v, on circles of radius r and 2r; their lap timers run together and both complete the lap at the same instant (tick). On "microseconds" the readouts "electron: T = 1.79 × 10⁻⁹ s", "proton: T = 3.28 × 10⁻⁶ s". A grey chip "cyclotron: needs v ≪ c" fades in at the end.

### 8. compared with other circular motion
> The syllabus asks us to compare this with other circular motion. In every case, a real force supplies m v squared over r. For a ball whirled on a string, the tension adjusts, and the string fixes the **radius**. For a satellite, gravity supplies the force, and a faster orbit is a smaller one, r equals big G M over v **squared**. For a charge in a magnetic field, the force is set by the speed, and a faster particle takes a bigger **circle**. Same rule, three different causes.

Visual: clear change to the three-system comparison board. Header row: "real force = mv²/r". Panel 1 (on "radius"): the steel ball plate (`phys-y11-steel-ball-v1.png`) on a coded string round a coded peg (top view, from m5-v11), amber "tension" arrow inwards; "faster → more tension, same r". Panel 2 (on "squared"): Earth plate (`phys-y11-earth-v1.png`) with the satellite plate (`y12p-satellite-v1.png`) on a circle, amber "gravity" arrow; "faster → smaller r (r = GM/v²)". Panel 3 (on "circle"): a "+" in a cross grid, amber "qvB"; "faster → bigger r (r = mv/qB)".

### 9. compared with an electric field
> And compare it with an electric field between plates. There, the force always pointed the same way, so the path was a parabola, and the field did work, so the speed changed. Here, the force keeps turning with the motion, so the path is a circle, and the speed never **changes**.

Visual: camera change to two panels: left, v02's plate path with fixed-direction amber force arrows at three strobe images and a growing K bar ("parabola; speed changes"); right, the circle with turning force arrows and a fixed K bar ("circle; speed constant"). On "changes" the two K bars pulse.

### 10. back to the predictions
> So, back to the predictions. The proton doesn't speed up, and it doesn't spiral in. With no work done, it goes round a circle at a steady **speed**. And the electron at the same speed curves far more tightly, on a circle about eighteen hundred times smaller, turning the other **way**.

Visual: camera change back to scene 1's frame: on "speed" the "circle" chip ticks and "speeds up" and "spirals in" are crossed, the proton circling with its fixed speed readout. On "way" the electron ghost becomes a tiny clockwise circle at the same start point, tag "tighter (× 1/1837), opposite sense"; the "tighter" prediction chip ticks.

### 11. memory aid
> To remember it: a magnetic force steers, it never **speeds**. And the radius is m v over q B, momentum on top, charge and field **underneath**.

Visual: board clears to "Magnetic force steers. It never speeds." in large handwriting; on "speeds" the fixed speed readout pulses. On "underneath" "r = mv/(qB)" with "mv" bracketed "momentum" and "qB" bracketed "charge × field". Hold about 2 seconds.

### 12. attempt 1 (countdown, 10 seconds)
> Your turn. A proton travels at three point zero times ten to the six metres per second, at right angles to a uniform magnetic field of zero point two five tesla. Calculate the radius of its path, and its period. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "A proton travels at 3.0 × 10⁶ m s⁻¹ perpendicular to a uniform magnetic field of strength 0.25 T. (a) Calculate the radius of the proton's circular path. (b) Calculate the period of its motion. (m_p = 1.673 × 10⁻²⁷ kg, e = 1.602 × 10⁻¹⁹ C)" Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 1 (brief)
> r equals m v over q B. Put in the proton's mass, its speed, its charge and the field, and r is zero point one two five metres, about twelve and a half **centimetres**. The period is two pi m over q B, two point six two times ten to the minus seven **seconds**. The classic slip is using the electron's mass, which gives a radius about eighteen hundred times too **small**.

Visual: card shrinks to the top. Rows: "r = mv/(qB) = (1.673 × 10⁻²⁷ × 3.0 × 10⁶)/(1.602 × 10⁻¹⁹ × 0.25)"; on "centimetres" "= 0.125 m" boxed; on "seconds" "T = 2πm/(qB) = 2π × 1.673 × 10⁻²⁷/(1.602 × 10⁻¹⁹ × 0.25) = 2.62 × 10⁻⁷ s" boxed. On "small" a chip "m_e: r = 6.8 × 10⁻⁵ m" fades in and is crossed. Hold about 1 second.

### 14. attempt 2 (countdown, 10 seconds)
> Last one. Now the proton's speed is doubled, in the same field. What happens to the radius of its path, and to its period? Explain. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "The proton's speed is doubled while it remains in the same magnetic field, moving perpendicular to it. Describe and explain the effect on (a) the radius of its path and (b) its period. (2 marks)" Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 15. feedback 2 (brief)
> The radius doubles, because r equals m v over q B is proportional to **v**. The period stays the same, because T equals two pi m over q B has no v in it. The proton goes twice as far round, twice as fast. The classic slip is halving the period, as if a faster particle must finish **sooner**.

Visual: card shrinks. Rows: on "v" "r = mv/(qB) ∝ v → r doubles (0.25 m)" boxed; "T = 2πm/(qB): no v → T unchanged (2.62 × 10⁻⁷ s)" boxed, with the two concentric circles and synchronised lap timers from scene 7. On "sooner" a chip "T halves" fades in and is crossed. Hold about 1 second.

### 16. next: two fields at once
> So an electric field can push a charge along its path and change its speed, while a magnetic field can only steer it. What if we use both at once, pushing in opposite directions? How can crossed fields select one particle **speed**?

Visual: clear change. Two horizontal coded plates (top "+", bottom "−") with blue field lines pointing down, and the space between them also filled with slate crosses (tag "E down, B into page"); at the left an electron "(−)" about to enter at mid-gap with a teal "v" arrow; an amber "F_E" arrow up and a rose "F_B" arrow down on it, both drawn dashed with "?" sizes; a slit drawn in a coded barrier at the far right on the centre line. On "speed" a chip writes: "Next: how can crossed fields select one particle speed?". Hold about 2 seconds. This is the final frame.

### 17. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. The magnetic force is always perpendicular to v, so it does no work: kinetic energy and speed stay constant; only the direction changes.
2. Perpendicular entry into a uniform B: constant-size force, always perpendicular, so uniform circular motion. qvB = mv²/r, so r = mv/(qB).
3. T = 2πr/v = 2πm/(qB): independent of speed (v ≪ c). Opposite charges circle in opposite senses.
4. Compare: every circular motion needs a real force = mv²/r (tension, gravity, qvB). In B, faster means a bigger circle; for a satellite, faster means a smaller orbit. A uniform E gives a parabola with changing speed.

Memory aid (large, on the notes screen): *Magnetic force steers. It never speeds.* Second line: *r = mv/qB.*

## Teaching checks

- **Does it explain causes?** Why the speed is constant (no work, 2); why a circle (constant size, always perpendicular, 3); why r = mv/(qB) (force needed equals force supplied, 4); why the proton's circle is bigger (more momentum at the same speed, 5); why the acceleration is perpendicular to B and v (6); why the period has no v (bigger circle at higher speed, 7); why the satellite differs (gravity weakens with r, 8).
- **Misconceptions addressed:** a magnetic field speeds particles up (2, site lesson 4); there is an extra centripetal force or something at the centre (3); faster particles finish a lap sooner (7, A2 crossed); using the electron's mass (13, crossed); the magnetic path is a parabola (9); constant speed means no acceleration (6).
- **One idea at a time:** speed (2), shape (3), radius (4), example (5), acceleration (6), period (7), comparisons (8, 9), hook answers (10).
- **Video makes it easier:** the work counter stuck at zero and the fixed K bar (2); the "?" path closing into a circle with turning arrows (3); two protons at v and 2v finishing together (7); the three-panel board (8); the parabola and circle side by side (9).
- **Response opportunity:** predictions (3 s); two unseen tasks, 10 s each; feedback about 27 s and 21 s.
- **Avoided double teaching:** m5-v11's centripetal force and m5-v17/v18's orbits recalled by name; v04's force law reused.
- **Syllabus coverage:** `P6-IQ1-03` "acceleration, perpendicular to the field, of charged particles" (2 to 7, A1, A2; named in 6); `P6-IQ1-04` "other examples of uniform circular motion" (8) and "the interaction of charged particles with electric fields" (9; developed in v06).
- **Out of scope by design:** combined fields (v06); helical paths; cyclotron design and relativistic loss of synchronism; mass spectrometers (v06 optional preview only).

## Practice questions and model answers

**Attempt 1 (scene 12; original, 3 marks suggested).** "A proton travels at 3.0 × 10⁶ m s⁻¹ perpendicular to a uniform magnetic field of strength 0.25 T. (a) Calculate the radius of the proton's circular path. (b) Calculate the period of its motion. (m_p = 1.673 × 10⁻²⁷ kg, e = 1.602 × 10⁻¹⁹ C)"
Model answer: (a) qvB = mv²/r, so r = mv/(qB) = (1.673 × 10⁻²⁷ × 3.0 × 10⁶)/(1.602 × 10⁻¹⁹ × 0.25) = 0.125 m. (b) T = 2πr/v = 2πm/(qB) = 2π × 1.673 × 10⁻²⁷ / (1.602 × 10⁻¹⁹ × 0.25) = 2.62 × 10⁻⁷ s. Classic mistake (crossed): the electron's mass, r = 6.8 × 10⁻⁵ m.

**Attempt 2 (scene 14; original, after site Activity 2, 2 marks).** "The proton's speed is doubled while it remains in the same magnetic field, moving perpendicular to it. Describe and explain the effect on (a) the radius of its path and (b) its period."
Model answer: (a) r = mv/(qB) ∝ v with m, q and B fixed, so the radius doubles (to 0.25 m). (b) T = 2πm/(qB) does not contain v, so the period is unchanged: the proton travels twice the circumference at twice the speed. Classic mistake (crossed): the period halves.

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Constants | e = 1.602 × 10⁻¹⁹ C; m_e = 9.109 × 10⁻³¹ kg; m_p = 1.673 × 10⁻²⁷ kg | throughout |
| Worked example | v = 4.0 × 10⁶ m s⁻¹, B = 0.020 T: r_e = 1.1372 × 10⁻³ m ("one point one four millimetres"); r_p = 2.0886 m ("two point oh nine"); ratio 1836.6 ("about eighteen hundred"; screen "× 1837") | 2, 5, 10 |
| Periods | T_e = 1.7863 × 10⁻⁹ s ("one point seven nine nanoseconds"); T_p = 3.2808 × 10⁻⁶ s ("three point two eight microseconds") | 7 |
| Acceleration | a = qvB/m = 1.40696 × 10¹⁶ m s⁻² ("about one point four") = v²/r_e | 6 |
| A1 | r = 0.12532 m ("zero point one two five"); T = 2.6247 × 10⁻⁷ s ("two point six two"); slip r = 6.82 × 10⁻⁵ m | 12, 13 |
| A2 | r = 0.2506 m; T = 2.62 × 10⁻⁷ s | 14, 15 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov); Codex to re-check.

- r_e = 9.109 × 10⁻³¹ × 4.0 × 10⁶ / (1.602 × 10⁻¹⁹ × 0.020) = 1.13720 × 10⁻³ m; r_p = 2.08864 m; ratio 1,836.65.
- T_e = 2π × 9.109 × 10⁻³¹ / (3.204 × 10⁻²¹) = 1.78632 × 10⁻⁹ s; T_p = 3.28083 × 10⁻⁶ s.
- A1: 1.673 × 10⁻²⁷ × 3.0 × 10⁶ / (1.602 × 10⁻¹⁹ × 0.25) = 0.125318 m; T = 2.62466 × 10⁻⁷ s; with m_e: 6.8232 × 10⁻⁵ m.
- Check of the centripetal identity in the worked example: qvB/m_e = 1.40696 × 10¹⁶ m s⁻² = v²/r_e.
- Site checks (site constants): r_e 1.139 mm, r_p 2.0875 m, T_e 1.789 ns, T_p 3.279 μs; short-answer Q1 (data sheet) r = 0.1741 m, T = 2.187 × 10⁻⁶ s.

## Memory aid check

- **"Magnetic force steers. It never speeds."** From lesson 4's misconception 1 ("Magnetic fields only change the direction of motion, never the speed") and lesson 5's card 1. Meaning, as said in scene 11: a magnetic force alone changes the direction of the velocity but not its size. Assumptions checked: magnetic field only (no electric field); static field (a changing B induces an electric field, not in scope). Helps A2 and the hook.
- **"r = mv/qB: momentum on top, charge and field underneath."** Direct reading of the derived result. Assumptions: perpendicular entry; uniform field; v ≪ c. Helps A1 and A2(a).

## Narration length estimate

Revision 1 count (6 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,640 characters**, 17 scenes. Characters per scene (1 to 17): 320, 504, 390, 356, 637, 444, 487, 467, 274, 277, 135, 233, 360, 153, 284, 228, 75. At 13.3 characters per second the speech is about 424 s; add 3 s for the prediction countdown, about 4 s for the orbit and lap-timer animations, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the memory-aid hold, 2 s for the handoff hold and about 54 s more of the quiet notes hold (about 88 s of holds and countdowns, including about 1 s for the scene 10 replay): **about 512 s**. Reserve trims if the voiced take runs long: scene 7's cyclotron sentence (keep the chip); scene 9 (the comparison with an electric field returns in v06).

## Opening frame

v04's final frame (`phys-y12-m6-v04.md`, "Final frame"): paper background; a square region of slate crosses (tag "B into page"); a proton "(+)" just left of centre moving right, with a teal "v" arrow and an amber "F" arrow pointing up, a right-angle mark between them; a dashed grey continuation curving upwards and to the left, ending in "?"; a readout "v = ?"; heading "When does a magnetic field exert a force on a moving charge?"; chip "Next: why does a perpendicular magnetic field bend a path without increasing speed?". Scene 1 moves the proton a short way along the dashed path; scene 2 fills the "v = ?" readout with "4.0 × 10⁶ m s⁻¹" and changes the heading.

## Final frame

The last explained frame (end of scene 16): paper background; two horizontal coded plates (top row "+", bottom row "−") with blue field lines pointing down, the gap also filled with a grid of slate crosses, tag "E down, B into page"; at the left entrance an electron "(−)" at mid-gap with a teal "v" arrow pointing right; on the electron a dashed amber "F_E" arrow pointing up and a dashed rose "F_B" arrow pointing down, each labelled with "?" for its size; at the far right a coded barrier with a slit on the centre line; heading "Why does a perpendicular magnetic field bend a path without increasing speed?"; chip "Next: how can crossed fields select one particle speed?". v06 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m6-v05` (route phys-y12-m6-v05). Suggested explainer folder `src/explainer/lessons/phys-y12-m6-v05`; build folder `docs/production/claude-pm/lessons/p-y12-m6-v05` (root to confirm).

In order (17 scene headings): hook, zero-work, why-circle, radius, worked-orbits, perpendicular-acceleration, period, compare-circular, compare-electric, predictions-answered, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`); scene 1 ends with a 3 s prediction countdown. `motionTools`: orbit stage (kit gap 5), three-system comparison board, `FieldGrid`, `AlignedAlgebra`, `NumberTicker`, `Countdown`, `CameraStage`. Transitions: v04's final frame continues into scene 1 (camera continue); 1 to 2 camera continue; 2 to 3 camera pull; 3 to 4 camera push; 4 to 5 clear change to the calculation layout; 5 to 6 camera change; 6 to 7 camera change; 7 to 8 clear change; 8 to 9 camera change; 9 to 10 camera change; 10 to 11 clear change; attempts card shrink; 15 to 16 clear change; 16 to 17 fade.

Holds: hook (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/p-y12-m6-v05-learning-review.md`, `checks/p-y12-m6-v05-physics-check.md`.

## Assets

Have (inspected 6 Nov on a session contact sheet or in earlier designs; scaled uniformly only):
- `public/assets/physics/phys-y11-steel-ball-v1.png`: scene 7 (top view on a string, as m5-v11).
- `public/assets/physics/phys-y11-earth-v1.png`: scene 7.

Requested earlier in this run: `y12p-satellite-v1.png` (m5-v17): scene 7.

Need (new plates): none.

Coded: cross grids, orbits, vectors, right-angle marks, counters, K bars, lap timers, scale bars, peg and string, plate panels, algebra, chips, cards, countdowns, notes board, the crossed-field set-up (scene 14).

Kit gaps: 5. **Orbit stage** (exact circle for given m, q, v, B on a set scale; tangent v and inward F arrows; fixed speed readout and K bar; zero work counter; lap timers; concentric orbits at v and 2v in step; sense of rotation from the sign of q; side-by-side panels at different scales). Extends `MagneticOrbit` (`m6-magnetic-orbit`).

## Codex asset brief (Year 12 Physics M6 v05)

No new plates. Codex confirms `y12p-satellite-v1.png` has been delivered for m5-v17 (if not, scene 7 uses a coded satellite dot until it is).

## Codex error-check brief

Error-only check:
1. Re-check every value under "Numbers to verify" and every value in narration, screen text, attempts and notes against "Numbers used".
2. Confirm the physics of every learner-visible claim: zero work because F ⊥ v at every instant; constant speed; uniform circular motion with the magnetic force as the centripetal force; r = mv/(qB) and its proportionalities; the senses of rotation for a proton and an electron in a field into the page (author note b); T = 2πm/(qB) independent of v (v ≪ c); the cyclotron condition; the satellite r = GM/v²; the string comparison; the parabola comparison.
3. Confirm the memory aid's assumptions.
4. Confirm every cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
5. Confirm both attempt cards are original, carry every given, and show nothing answer-bearing.
6. Confirm the syllabus quotes match the route JSON exactly and are labelled 2017.
7. Confirm no person, hand, face or body outline is drawn or requested.
8. Confirm no em dash (U+2014), no U+2061, and Australian spelling.
9. Confirm the narration counts by script.

## YouTube metadata (draft)

Title: Charged Particles in Magnetic Fields: Circles, r = mv/qB and Constant Speed | HSC Physics Module 6

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module6/lesson05.sa.html

A magnetic field pushes a moving charge sideways at every instant, yet it never speeds it up. See why the force does no work, why the path becomes a circle, derive r = mv/qB and T = 2πm/qB, compare an electron's and a proton's orbits, and compare magnetic circles with a ball on a string, a satellite, and the parabola in an electric field. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 6: Electromagnetism.
Syllabus content (NSW Physics Stage 6, 2017):
"analyse the interaction between charged particles and uniform magnetic fields, including: (ACSPH083) acceleration, perpendicular to the field, of charged particles; the force on the charge F = qv⊥B = qvB sin θ"
"compare the interaction of charged particles moving in magnetic fields to: the interaction of charged particles with electric fields; other examples of uniform circular motion (ACSPH108)"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Next: how crossed electric and magnetic fields select one particle speed.

#HSCPhysics #Physics #MagneticField #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (is the zero-work argument convincing before the circle; is the period scene worth its time), then the physics check and the Codex error check.
- Judge the turning arrows, the stuck work counter and the two protons finishing together at playback speed.
