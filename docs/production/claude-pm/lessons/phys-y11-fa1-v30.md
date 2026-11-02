# Year 11 Physics FA1 V30 (Physics 2025, Year 11, Focus Area 1): Why does the total momentum stay the same when two objects collide, even when kinetic energy is lost? (design)

Status: Revision 2 (3 Nov): brief 153 repairs applied (negligible outside impulse stated before the conservation claim and on attempt 1's card; steady-force model named in scene 6; elastic example is no lasting deformation with sliding, non-spinning balls; the v1 = 5 branch struck as no change; inelastic defined as KE not conserved, scoped to these crashes). Needs a Codex error check.

Narration 6,283 characters, 15 scenes, about 570 s (9.4 minutes) including two 3 s prediction countdowns, two 10 s attempt countdowns and the notes hold, counted by script with the build parser rules (see "Narration length estimate").

Scope: thirtieth video of the Year 11 Physics (2025) Focus Area 1 route and the second of three momentum videos. Templates: `phys-y11-fa1-v22.md` (concept format, section list), `phys-y11-fa1-v17.md` (two trolleys with force sensors and mirrored force-time panels), `math-a12-d10.md` (aligned algebra, result lines on cues); house conventions from the root-decision files for v01 to v24 and from `phys-y11-fa1-v29.md` (Revision 1, written just before this one; its scene 14 frame is this video's first frame). No pre-design pack exists: the pack work is done in this file. Site lesson read in full (2 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa1-fundamentals-of-mechanics/lesson28.sa.html` (orient and predict, intentions and key terms, elastic vs inelastic collisions, solving collisions with momentum with `we-1`, apply it yourself (the practical design, used by v31), why momentum survives but energy may not, independent practice, retrieve), plus lesson 27's card 3 and Q3 (why momentum is conserved), which belong to this video's points. Route entry: `phys-y11-fa1-v30` in `../../phys-y11-video-route.json`. Route start: "Start with Collisions: Conservation of Momentum. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions." Route stop: "Stop after the learner can answer: How can I explain and apply collisions: conservation of momentum? Teach only the listed actions; the next video owns its separate question." Next (route): "phys-y11-fa1-v31: Does the measured total momentum survive a collision?".

Owner rules applied: as v29 (2025 syllabus only; no people, hands, faces or body outlines: the trolleys are launched by v23's coded spring launcher and the balls by a coded release; objects painted at native aspect, vectors, bars, graphs coded; one reasoning stage at a time; calculations as task, equation and grouped givens with units, results on cues; 3 s in-teaching predictions; "Pause here to answer." with a 10 s countdown and the full worded question; brief feedback with one crossed mistake; original HSC-style questions; key-notes hold; Australian spelling; no em dashes; v17 (third law), v26 (work) and v29 (impulse) recalled in one sentence each, never re-taught).

Syllabus content points (Physics 11-12 (2025), Year 11, Focus Area 1, group "Momentum and energy"; local ledger IDs with NESA content-system codenames), quoted from the route JSON `syllabusActions` in linear form:

- P25-FA1-G5-08 `ci4f02a70c`: "State the conditions under which momentum is conserved"
- P25-FA1-G5-09 `cib830a9b7`: "Explain why momentum is conserved during collisions"
- P25-FA1-G5-10 `ci6036e9ce`: "Classify collisions as elastic or inelastic by calculating and comparing the total kinetic energy before and after the collision"
- P25-FA1-G5-12 `ci84483399`: "Solve problems involving the conservation of momentum using ∑ m v ⃗ before = ∑ m v ⃗ after and, where appropriate, conservation of kinetic energy"
- P25-FA1-G5-13 `ci475a70b8`: "Solve problems involving the conservation of momentum in elastic collisions using ∑ 1 2 m v before 2 = ∑ 1 2 m v after 2"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

**Boundary:** starts from v29's handoff (trolley A moving toward the heavier B at rest, soft pads on the facing ends, "total p = ?"); why momentum is conserved: third-law pairs act for the same time, so the impulses are equal and opposite (`cib830a9b7`); the condition: no net external force on the system, with the brief-collision reason friction can be ignored during the contact (`ci4f02a70c`); a sticking collision solved with Σmv before = Σmv after (`ci84483399`, site `we-1`); classifying by total kinetic energy (`ci6036e9ce`); why kinetic energy can fall while momentum cannot (the two forces act for the same time but not over the same distance; v26's work); an elastic collision of equal masses solved with both conservation laws (`ci475a70b8`, site Q2 numbers). Not taught: measured collisions, uncertainty and the practical (v31); explosions and recoil (root decision 11 for v13 to v24 keeps recoil out; the site's matching task mentions an explosion, not used); collisions in two dimensions; the general elastic formulas (only the equal-mass case is solved; A2 checks a given unequal-mass result).

## Decisions

- **Learner question written (route placeholder replaced; for root).** "Why does the total momentum stay the same when two objects collide, even when kinetic energy is lost?" The answer, built in order: during the contact the two objects push on each other with equal and opposite forces for the same time, so their impulses are equal and opposite and the total cannot change (2); this needs no net external force on the system, and a quick collision makes friction's impulse negligible (3); so Σmv before = Σmv after solves a collision (4); kinetic energy can still fall, which classifies the collision (5); it falls because the paired forces act over different distances, so their works don't cancel (6); when it doesn't fall, kinetic energy conservation is a second equation (7, 8).
- **The hook (site lesson 28 hook, made visible on trolleys; owner: a contrast).** The sticking collision plays with two bars above the pair: a blue total kinetic energy bar that drops sharply, and the magenta total momentum bar from v29's "total p = ?" outline. Question: "Most of the kinetic energy has gone. Was some momentum lost too?" 3 s prediction. The bar answers it in scene 2 (it doesn't move). The site's "railway carriages ... lose nearly half their kinetic energy" is not used (site correction 1).
- **The cause made visible before the rule (owner quality bar).** (2) Slow motion of the contact: a force sensor on each trolley's pad (v17's set-up) and two mirrored force-time panels; the shaded impulse areas fill in step, "+4.0 N s on B" and "−4.0 N s on A"; at the same time A's magenta bar shrinks from 6.0 to 2.0 and B's grows from 0 to 4.0, and the stacked total bar above both stays at 6.0 kg m s⁻¹ throughout (one function drives the panels and the bars). (3) An external friction arrow, drawn tiny beside the contact pair's large arrows, with its own impulse sliver. (6) Displacement brackets during the contact: A's bracket four times B's, the blue KE bars falling by the difference, a "squash" bracket between the pads equal to the difference of the two displacements.
- **Why momentum is conserved (site lesson 27 card 3 and Q3; site lesson 28 card 3).** Third law (v17): A on B and B on A are equal and opposite at every instant. Same duration: the contact starts and ends at the same moments for both. So the impulses (v29: F_net Δt, the area) are equal and opposite, the momentum changes cancel, and the total is unchanged.
- **Conditions (`ci4f02a70c`).** "System" glossed: the objects we count. Stated on screen: "Momentum of a system is conserved when no net external force acts on it." Weight and normal force balance on a level track; friction is external but small, and during a collision lasting a fraction of a second its impulse is tiny next to the contact impulse (site Q3's model answer makes the same point). Afterwards friction does slow the trolleys: shown, and said, so "conserved" is tied to the collision, not to the whole run.
- **Worked example (site `we-1`, unchanged numbers).** 1.0 kg at 6.0 m s⁻¹ sticks to 2.0 kg at rest: Σp before = 6.0 kg m s⁻¹; (1.0 + 2.0)v = 6.0; v = 2.0 m s⁻¹ in A's original direction. KE 18 J → 6.0 J; 12 J to heat, sound and the pads' squashing; inelastic, and perfectly inelastic because they stick. Site values tagged "site example values"; 6.0 m s⁻¹ is fast for a lab trolley and is tagged "teaching values" in the hook (open decision 3).
- **Why kinetic energy can fall (site card 3's question, answered with a cause instead of "different kinds of bookkeeping").** The forces share the time but not the distance: while the pads squash, A moves faster than B and so further. With a steady contact force (the model the animation uses), A's average speed during the contact is 4.0 m s⁻¹ and B's 1.0 m s⁻¹, so A moves four times as far; the work on A (−F × 4d) is four times the work on B (+F × d), and the total change −3Fd is the 12 J that squashed the pads (F × the squash 3d). Said in plain words: "time is shared, so impulses always cancel; distance isn't, so work doesn't have to." Recall v26 in one clause: "work is force times distance".
- **Elastic case (site Q2 numbers as the worked example; the site's Q2 is a short-answer question, reused because the video needs one elastic example and the site has no other).** Two 0.20 kg steel balls on a straight groove (v10's steel ball plate, two copies; treated as an ideal elastic collision, rotation ignored, author note f). Ball 1 at 5.0 m s⁻¹, ball 2 at rest. Momentum: v₁ + v₂ = 5.0; KE: v₁² + v₂² = 25; substituting: v₁(v₁ − 5.0) = 0; v₁ = 5.0 is a no-change branch (ball 1 still approaching, not separating), so v₁ = 0, v₂ = 5.0 m s⁻¹. Prediction (3 s, scene 7): "together, bounce back, or stop?". Why two equations: two unknowns (said).
- **Attempts (original, HSC style).** (A1, signs and classification) 2.0 kg at 3.0 m s⁻¹ right meets 1.0 kg at 1.5 m s⁻¹ left; they stick. Right positive: Σp = 6.0 − 1.5 = 4.5 kg m s⁻¹; v = 4.5 ÷ 3.0 = 1.5 m s⁻¹ right; KE 10.125 J (10 J) → 3.375 J (3.4 J): inelastic. Crossed: "(6.0 + 1.5) ÷ 3.0 = 2.5 m s⁻¹" (the left-moving momentum added as positive). (A2, check a given outcome) on an air track, 1.0 kg at 4.0 m s⁻¹ hits 3.0 kg at rest; afterwards 1.0 kg at 2.0 m s⁻¹ backwards, 3.0 kg at 2.0 m s⁻¹ forwards. Σp before 4.0; after −2.0 + 6.0 = 4.0 kg m s⁻¹ (conserved); KE 8.0 J before and 2.0 + 6.0 = 8.0 J after: elastic. Crossed: "after: 2.0 + 6.0 = 8.0 kg m s⁻¹, so momentum isn't conserved" (the rebound's sign dropped). Neither card shows arrows or a sign convention.
- **Mistake scene:** none separate. "Momentum is only conserved in elastic collisions" (site misconception 1: hook, 2, 5, memory aid); "when objects stick, momentum is lost" (site misconception 2: hook, 2, 4); "friction means momentum is never conserved" (3); "if momentum is conserved, kinetic energy must be too" (5, 6); "a heavier ball hit by a lighter one must move off faster" is not raised (not needed); sign errors (A1, A2 crossed).
- **Memory aid:** "Momentum survives every collision. Kinetic energy survives only the elastic ones." (the site's own memory hook for lesson 28, with the condition added; see "Memory aid check").
- **Handoff (route next).** A painted air track with two gliders and two light gates, a flag on glider A, the boxed "Σmv before = Σmv after" with a grey "?" and the chip "measured?", then "Next: Does the measured total momentum survive a collision?". This is the frame v31 opens on.
- **Site sources used:** lesson 28 hook (energy lost, momentum kept: the hook); warm-up (sticking or stopping dead: scenes 1, 7, 8); key terms (elastic, inelastic, perfectly inelastic, conservation: 2, 5); misconceptions 1 and 2 (1, 2, 4, 5); card 1 (classification by total KE: 5); card 2 and `we-1` (4, 5); the quick check (2.0 kg at 3.0 sticks to 1.0 kg: its structure, not its numbers, informs A1); card 3 (why momentum survives but energy may not: 6, answered with the distance argument); Q1 (sticking and classifying: A1's structure, new numbers); Q2 (the elastic example: 7, 8). Lesson 27's card 3 and Q3 (the third-law reason and the condition: 2, 3). Not used: lesson 28's activity 1 and Q3 (the practical: v31); the matching task's explosion row (recoil kept out).
- **Site corrections (quoted from site lessons 28 and 27, read 2 Nov; for `../site-corrections-phys-y11.md`; not logged yet; the "WS03" label is new for lesson 28, as v24 found it in lesson 22):**
  1. Lesson 28 hook: "When two railway carriages couple and move off together, they lose nearly half their kinetic energy". The fraction depends on the masses and velocities, which are not given; for equal carriages with one at rest the loss is exactly half, and other cases differ. Suggest: "When a moving railway carriage couples to an identical stationary one, they lose half their kinetic energy, yet their total momentum is unchanged."
  2. Lesson 28 intro: "Momentum is always conserved in a collision, but kinetic energy is not." and card 1's heading "Momentum always survives; kinetic energy may not" with "Every collision keeps the same total momentum". The lesson's own point (`ci4f02a70c`) is that conservation needs no net external force. Suggest adding "when no net external force acts (true to a good approximation during a brief collision)".
  3. Lesson 28 card 3: "Momentum and kinetic energy are different kinds of bookkeeping, so one can be perfectly preserved while the other is partly spent." Not wrong, but it names no cause. Suggest adding the cause: "The paired forces act for the same time, so their impulses cancel; they need not act over the same distance, so their works need not cancel."
  4. Lesson 28 dot-point tags: activity 1 (the practical design) is tagged "Dot point: Classify collisions as elastic or inelastic by calculating and comparing the total kinetic energy before and after the collision", and card 3 (why momentum survives) is tagged "Dot point: Solve problems involving the conservation of momentum in elastic collisions using conservation of p and KE". Suggest tagging activity 1 with `ci67d91fd2` (the practical) and card 3 with `cib830a9b7` (explain why momentum is conserved).
  5. Lesson 28 "Where this sits" and activity 1 badge: "the practical (WS03)" and "Analyse Band 6 WS03". "WS03" is not a 2025 syllabus label (the same issue v24 found in lesson 22). Suggest removing it or quoting the 2025 point.
  6. Lesson 28 Q3 model answer: "friction between the trolleys and the track, together with any slight tilt in the track: both act as external forces on the system, so the system is not perfectly isolated and the measured momentum after the collision comes out slightly lower than before." Friction lowers the measured momentum after; a tilt can raise or lower it, depending on which way the track slopes. Suggest: "friction lowers the measured momentum after the collision; a tilt adds or removes momentum depending on its direction."
  7. Lesson 28 card 1: "Elastic collision: total kinetic energy is also conserved (e.g. two hard balls bouncing apart, billiard balls)." Real billiard-ball collisions are nearly, not perfectly, elastic. Suggest "nearly elastic (e.g. billiard balls)". Precision note.
  - Checked and correct: `we-1` (2.0 m s⁻¹; 18 J and 6.0 J; 12 J); the quick check (2.0 m s⁻¹); Q1 (3.0 m s⁻¹; 24 J and 18 J); Q2's algebra and answer (v₁ = 0, v₂ = 5.0 m s⁻¹); key terms; misconceptions; the matching task; lesson 27 Q3 (including the brief-collision condition).
- **Pack questions answered (pack work done here):** worked-example numbers reused exactly (site `we-1`; Q2 for the elastic case) and recalculated with Python; site misconceptions 1 and 2 used; seven site findings listed above. Visual needs met: the mirrored impulses and the constant total bar (2), the tiny external impulse (3), the displacement brackets and falling KE bars (6), the elastic hand-over (8).
- **Cause chain taught, in order:** (1) energy vanishes: does momentum? (1); (2) equal and opposite forces for the same time give equal and opposite impulses, so the total is unchanged (2); (3) the condition, and why friction can be ignored during the contact (3); (4) Σmv before = Σmv after solves a sticking collision (4); (5) total KE classifies it (5); (6) why KE can fall: same time, different distances (6); (7) an elastic prediction (7); (8) two conservation laws for two unknowns (8); (9) memory aid (9).
- **Entry knowledge (route `entryKnowledge`):** Stage 5 (signed arithmetic, substitution, solving a simple quadratic by factorising). From FA1, recalled in a line each: v17 (third-law pairs: equal, opposite, on different objects), v26 (work = force × distance along the motion; KE = ½mv²), v29 (p = mv; impulse = F_net Δt = Δp; the area under F-t).
- **Learner-visible vocabulary (plain meaning at first use):** system (the objects we're counting, scene 3); external force (a force from something outside the system, scene 3); conserved (the total stays the same, scene 2); elastic collision (total kinetic energy stays the same, scene 5); inelastic collision (total kinetic energy is not conserved; for these passive crashes it falls, scene 5); perfectly inelastic (the objects stick together, scene 5).
- **Legacy logic ported:** none. Drawing parts only: `Arrow`, `Label`, `Panel` (`course-kit.tsx`).
- **New explainer motion (coded unless a plate is named):** v29's **`MomentumBar`** (stacking mode for the total) and **`ImpulseGraph`** (two mirrored panels from one pulse function, as v17's force-sensor traces); **contact slow motion** (the two trolleys from x(t) under a steady contact force for the contact time, slowed with a tag; pads compress by a coded squash of the pad overlay, never a stretch of the plate); **`EnergyBar`** (a blue total-KE bar; split mode showing each object's share); **displacement brackets** during the contact; **external-friction sliver** (a tiny amber arrow on each wheel line and a sliver of area on a third panel); **ball hand-over** (ball 1 stops, ball 2 leaves at its speed, at slowed playback); v23's **spring launcher** (coded spring) to start trolley A; `AlignedAlgebra`; `Countdown` (3 s, 10 s); `QuestionCard` (subject "Physics"); `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout (constant, as v29):** heading top-left; the track and objects across the left 60 per cent with their bars above them; panels and working in the right column.
- **No human figures.**
- **Author notes (not learner copy):**
  (a) `we-1`: 1.0 × 6.0 = 6.0; v = 6.0 ÷ 3.0 = 2.0 m s⁻¹; KE ½ × 1.0 × 36 = 18 J; ½ × 3.0 × 4.0 = 6.0 J; lost 12 J; fraction kept 1/3 ("most of it has gone").
  (b) Contact model for scenes 2 and 6: contact time 0.010 s (screen tag "contact: about one hundredth of a second", no value spoken), steady contact force 400 N (not shown as a number); impulse 400 × 0.010 = 4.0 N s each way; A: 6.0 → 2.0 m s⁻¹ (Δp −4.0), B: 0 → 2.0 m s⁻¹ (Δp +4.0); total 6.0 throughout. Distances during contact: A 4.0 m s⁻¹ average × 0.010 = 0.040 m; B 1.0 × 0.010 = 0.010 m; ratio 4; squash 0.030 m; works −400 × 0.040 = −16 J and +400 × 0.010 = +4.0 J; total −12 J. Played at 1/200 speed (2 s of screen time), tag "slowed down 200 times".
  (c) For a contact force that varies, A still moves further than B during the contact (A is faster until they share a speed), so the total work is negative and the KE falls; the exact ratio 4 holds for the steady-force model only. Narration says "in this steady-force model, A moves four times as far as B" with the screen tag "steady push model".
  (d) External friction: rolling resistance on a lab trolley of order 0.05 N (illustrative); impulse during 0.010 s is 5 × 10⁻⁴ N s against the contact's 4.0 N s (about one part in 8000; on screen "tiny", no number). After the collision, the same friction slows the pair over seconds (shown as a slowly shrinking total bar after the contact, tag "afterwards: friction slows them").
  (e) Elastic: 0.20 × 5.0 = 1.0 kg m s⁻¹; KE ½ × 0.20 × 25 = 2.5 J; dividing by 0.20 gives v₁ + v₂ = 5.0; dividing by 0.10 gives v₁² + v₂² = 25; substituting v₂ = 5.0 − v₁: 2v₁² − 10v₁ = 0, v₁(v₁ − 5.0) = 0; roots 0 and 5.0.
  (f) Steel balls on a groove roll; their rotational energy and rolling are ignored (ideal sliding model, tag "ideal elastic collision"). The scene shows the hand-over, not a measurement.
  (g) A1: right positive; 2.0 × 3.0 = 6.0; 1.0 × (−1.5) = −1.5; Σ = 4.5; v = 1.5 m s⁻¹; KE before 9.0 + 1.125 = 10.125 J → "10 J" (2 s.f.); after ½ × 3.0 × 2.25 = 3.375 → "3.4 J"; lost 6.75 J (not asked). Crossed (6.0 + 1.5) ÷ 3.0 = 2.5.
  (h) A2: the elastic formulas give v₁ = (1.0 − 3.0) ÷ 4.0 × 4.0 = −2.0, v₂ = 2 × 1.0 ÷ 4.0 × 4.0 = 2.0 (consistent); Σp after −2.0 + 6.0 = 4.0; KE ½ × 1.0 × 16 = 8.0 J; after ½ × 1.0 × 4 + ½ × 3.0 × 4 = 2.0 + 6.0 = 8.0 J. Crossed 2.0 + 6.0 = 8.0 kg m s⁻¹.
  (i) Pronunciations: "sum of m v before equals sum of m v after"; "v one", "v two"; "v one squared plus v two squared equals twenty-five"; "eighteen joules", "six point oh joules"; "perfectly inelastic".

Main question: *A trolley hits another and they stick: most of the kinetic energy disappears. Why does the total momentum stay the same when two objects collide, even when kinetic energy is lost?*
Entry knowledge (Stage 5 signed arithmetic and factorising; v17 third-law pairs; v26 work and KE; v29 momentum and impulse).
Stops after: the third-law reason for conservation; the condition (no net external force) and why it holds during a brief collision; a sticking collision solved; classification by total KE; why KE can fall; an equal-mass elastic collision solved with both laws. No measured data, no recoil, no two-dimensional collisions.
Handoff: v31, the collision investigation.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key (as v29): forces amber with a dark ink outline; velocity teal; acceleration violet (not used); momentum magenta, bars and arrows, the total as a stacked bar with an ink outline; impulse as pale amber area; kinetic energy blue bars (v26's KE colour), the total KE bar with an ink outline; displacement brackets grey; givens navy; working ink with the current row bright; crossed items muted red with a scribble cross. Units on screen in NESA style.

### 1. hook (energy vanishes: does momentum?)
> Last time, a push acting for a time changed one object's momentum. Now two objects push on each other. Trolley A, one point oh kilograms, rolls at six point oh metres per second into trolley B, two point oh kilograms, sitting still. Their pads stick, and they move off together. Watch the kinetic energy: most of it just **disappears**. So was some momentum lost **too**?

Visual: opens on v29's last frame (A with its teal arrow and magenta bar moving toward the heavier B at rest, soft pads `phys-y11-velcro-pad-v1.png` on the facing ends, the grey "total p = ?" outline, the "Next" chip). The chip becomes the heading "Collisions and conservation of momentum". Tags appear: A "1.0 kg, 6.0 m s⁻¹", B "2.0 kg, at rest" (grey tag "teaching values"). A blue `EnergyBar` "total KE" draws above the pair beside the magenta total bar outline. The trolleys meet and stick (real time, then the scene holds); on "disappears" the blue bar drops to a third of its length (no number), a grey ghost of its old length left behind. The magenta total bar stays an outline. On "too" chips "some lost?", "all kept?", "depends?" and a 3-second countdown ring.

### 2. why the total can't change
> Let's slow the crash right down. While the pads squash, A pushes on B, and B pushes back on A. By Newton's third law, those two forces are equal in size and opposite in direction, at every instant. They last exactly as long as each other, so the two impulses are equal and opposite. On this level track, outside impulses are negligible. So whatever momentum B **gains**, A **loses**, and the total stays the same. That's conservation of momentum: the total momentum before equals the total momentum **after**.

Visual: replay at 1/200 speed (author note b, tag "slowed down 200 times"). A force sensor plate (`phys-y11-force-sensor-v1.png`, requested as `y11p-force-sensor-v1.png`, v17) small behind each pad. Two amber arrows at the contact, "A on B" on B pointing right and "B on A" on A pointing left, equal lengths, bracket "third-law pair (v17)". Right column: two mirrored `ImpulseGraph` panels from one pulse ("force on B", upper, positive; "force on A", lower, negative), one shared time cursor; their areas shade in step. On "negligible" a grey tag "outside impulse: negligible (level track, quick crash)" appears beside the pair. On "gains" B's magenta bar grows from 0 and the upper area reads "+4.0 N s"; on "loses" A's bar shrinks from 6.0 and the lower area reads "−4.0 N s". Throughout, the stacked total bar above both (A's part plus B's part) keeps its length: readout "total p = 6.0 kg m s⁻¹" fixed, the hook's "?" outline filling solid magenta. On "after" boxed "Σmv before = Σmv after" with gloss "conserved: the total stays the same"; the hook chip "all kept?" fills.

### 3. the condition
> There's a condition. Only forces between the trolleys cancel in pairs like this. The system is just the objects we're counting, here the two trolleys. A force from outside the system, like friction from the track, has no partner inside it. So momentum is conserved when there's no net external force on the system. On a level track, the weight and the normal force balance. A collision is so quick that friction's impulse during it is **tiny**. That's why conservation works for the collision, even though friction slows the trolleys **afterwards**.

Visual: a dashed system boundary draws round both trolleys (gloss "system: the objects we're counting"); the contact pair's arrows sit inside it, tag "internal: cancel in pairs". Small grey weight and normal arrows on each trolley, equal, tag "balance (level track)". A tiny amber friction arrow at each wheel line, outside-labelled "external" (gloss "external force: from outside the system"). Boxed statement writes: "Momentum of a system is conserved when no net external force acts on it." On "tiny" a third panel under the two impulse panels: friction's sliver of area against the contact's large area (author note d, tag "during the contact"). On "afterwards" the stuck pair rolls on and the total magenta bar shrinks slowly (tag "afterwards: friction slows them").

### 4. worked example: the trolleys that stick
> Now the numbers. Task: find the velocity of the trolleys after they stick. The equation: the sum of m v before equals the sum of m v after. The givens: A is one point oh kilograms at six point oh metres per second, B is two point oh kilograms at rest, and they move off together with one velocity, v. Take A's direction as positive. Before, the total momentum is one point oh times six point oh, plus zero, so six point oh kilogram metres per **second**. After, it's three point oh kilograms times v. So v is six point oh over three point oh, which is two point oh metres per second, in A's original **direction**.

Visual: clear change to the calculation layout; the before and after frames side by side at the left (A and B apart; then stuck), each with its magenta bars. Task strip "Find the velocity after they stick". Equation strip "Σmv before = Σmv after". Givens group (navy): "m_A = 1.0 kg, u_A = +6.0 m s⁻¹; m_B = 2.0 kg, u_B = 0; stuck: one velocity v" (grey tag "site example values"). Sign chip "+ A's direction". Rows: on "second" "before: 1.0 × 6.0 + 2.0 × 0 = 6.0 kg m s⁻¹"; "after: (1.0 + 2.0) v = 3.0 v"; on "direction" "v = 6.0 ÷ 3.0 = 2.0 m s⁻¹ (in A's direction)", boxed, and the after frame's teal arrow labels "2.0 m s⁻¹".

### 5. classifying by kinetic energy
> Now check the kinetic energy. Before, it's a half times one point oh times six point oh squared, eighteen **joules**. After, it's a half times three point oh times two point oh squared, six point oh **joules**. Twelve joules have gone, into heat, sound and squashing the pads. When the total kinetic energy isn't conserved, the collision is called inelastic, and in a crash like this it falls. When it stays the same, it's **elastic**. These stuck together, so it's perfectly **inelastic**.

Visual: the before and after frames stay; blue `EnergyBar`s above each. Rows: on "joules" "KE before = ½ × 1.0 × 6.0² = 18 J"; on the second "joules" "KE after = ½ × 3.0 × 2.0² = 6.0 J"; row "lost: 18 − 6.0 = 12 J → heat, sound, squashed pads", with three small grey tags. A two-row classification table builds: on "inelastic" (first) "total KE not conserved (here it falls): inelastic"; on "elastic" "total KE the same: elastic"; on the last "inelastic" a third row "stick together: perfectly inelastic", ringed, beside the after frame. The momentum check row "p: 6.0 → 6.0 kg m s⁻¹" stays in magenta beside it.

### 6. why kinetic energy can fall
> But why can kinetic energy fall when momentum can't? The two forces are equal, and they act for the same time. But they don't act over the same distance. While the pads squash, A is moving faster than B, so A travels further. In this steady-force model, A moves four times as far as B. Work is force times distance, so the negative work done on A is four times the positive work done on B. The difference went into squashing the **pads**. Time is shared, so the impulses always cancel. Distance isn't, so the work doesn't **have to**.

Visual: the slowed contact replays (author note b). Grey displacement brackets grow under each trolley while they touch: A's to four units, B's to one unit (tag "steady push model", author note c); a "squash" bracket between the pads equals the difference (three units). The amber pair of arrows rides along. Green bars per trolley: A's falls by four units of work ("W on A = −F × 4d"), B's rises by one ("W on B = +F × d"), grey "v26: work = force × distance". On "pads" the total blue bar's lost part slides into a small grey "squash: F × 3d = 12 J" block. On "have to" two chips side by side: "same time → impulses cancel → p conserved" (magenta) and "different distances → works don't cancel → KE can fall" (blue).

### 7. prediction: an elastic collision
> Now take a collision with no lasting deformation. Two steel balls, each zero point two oh kilograms, sliding along a smooth, straight groove. Ball one moves at five point oh metres per second into ball two, which is at rest. The collision is elastic. Afterwards, do they move off together, does ball one bounce back, or does it **stop**?

Visual: clear change: a coded straight groove; two steel ball plates (`phys-y11-steel-ball-v1.png`, requested as `y11p-steel-ball-v1.png`, v10), tags "1: 0.20 kg, 5.0 m s⁻¹" and "2: 0.20 kg, at rest"; tag "ideal elastic collision: sliding, not spinning (translation only), no outside impulse". Ball 1 slides toward ball 2 and freezes just before contact. On "stop" chips "together?", "1 bounces back?", "1 stops?" and a 3-second countdown ring.

### 8. two unknowns, two equations
> It **stops**. After the collision there are two unknowns, so we need two equations. Momentum gives one. An elastic collision gives the other, because the total kinetic energy before equals the total after. For momentum, divide every term by the mass: v one plus v two equals five point **oh**. For kinetic energy, the halves and the masses cancel the same way, so v one squared plus v two squared equals twenty-**five**. Swap in v two equals five minus v one, and it simplifies to v one times, v one minus five, equals **zero**. v one equals five means nothing changed: ball one still heads into ball two. So v one is zero, and v two is five point oh metres per second. Ball two carries everything **on**.

Visual: on the first "stops" the collision plays (slowed, tag "slowed down"): ball 1 stops dead at contact, ball 2 leaves at its speed; their magenta bars hand over (1's to zero, 2's to full); their blue bars hand over the same way. Right column `AlignedAlgebra`, one row per cue: "momentum: 0.20 × 5.0 = 0.20 v₁ + 0.20 v₂"; on "oh" "v₁ + v₂ = 5.0"; "KE: ½ × 0.20 × 5.0² = ½ × 0.20 v₁² + ½ × 0.20 v₂²"; on "five" "v₁² + v₂² = 25"; on "zero" "v₁² + (5.0 − v₁)² = 25 → 2v₁² − 10v₁ = 0 → v₁(v₁ − 5.0) = 0"; a grey strike on "v₁ = 5.0 (no change: still approaching, not separating)"; boxed "v₁ = 0, v₂ = 5.0 m s⁻¹". On "on" the hand-over replays once more, ball 2's teal arrow "5.0 m s⁻¹".

### 9. memory aid
> So here's the rule to remember. Momentum survives every collision. Kinetic energy survives only the elastic ones. And momentum's rule needs one condition: no net external force while the objects **collide**.

Visual: the sticking trolleys (left) and the steel balls (right) small, each with its magenta total bar (unchanged) and its blue total bar (falling for the trolleys, unchanged for the balls). The handwritten line writes large: "Momentum survives every collision. Kinetic energy survives only the elastic ones." Under it, smaller: "condition: no net external force during the collision". On "collide" the dashed system boundary pulses round each pair. Hold about 2 seconds.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. A two point oh kilogram trolley moving right at three point oh metres per second collides head-on with a one point oh kilogram trolley moving left at one point five metres per second. They stick together. Ignore friction during the collision. Calculate their velocity after the collision, and classify the collision by comparing the total kinetic energy before and after. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Physics"), worded as printed (no diagram): "A 2.0 kg trolley moving to the right at 3.0 m s⁻¹ collides head-on with a 1.0 kg trolley moving to the left at 1.5 m s⁻¹. The trolleys stick together. The track is level, and the impulse of friction during the collision is negligible. (a) Calculate the velocity of the trolleys after the collision. (b) Classify the collision as elastic or inelastic, by calculating the total kinetic energy before and after. (4 marks)" Tag: "HSC-style question, written for HSCScience". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 11. feedback 1 (brief)
> Take right as positive. The total momentum before is six point oh minus one point five, four point five kilogram metres per **second**. Divided by three point oh kilograms, that's one point five metres per second, to the **right**. Kinetic energy falls from about ten joules to three point four joules, so it's **inelastic**. Adding the momenta gives two point five. The left-moving trolley's momentum is **negative**.

Visual: card shrinks to the top; "to the left" and "stick together" underlined. Sign chip "+ right". Rows: on "second" "Σp before = 2.0 × 3.0 + 1.0 × (−1.5) = 4.5 kg m s⁻¹"; on "right" "v = 4.5 ÷ 3.0 = 1.5 m s⁻¹ to the right", boxed "(a)"; on "inelastic" "KE before = 9.0 + 1.1 = 10 J (10.1); KE after = ½ × 3.0 × 1.5² = 3.4 J: KE falls, inelastic", boxed "(b)". On "negative" a chip "(6.0 + 1.5) ÷ 3.0 = 2.5 m s⁻¹" fades in and is crossed (caption "moving left: negative momentum"). Hold about 1 second.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. On an air track, a one point oh kilogram glider moving at four point oh metres per second hits a three point oh kilogram glider at rest. Afterwards, the one kilogram glider moves backwards at two point oh metres per second, and the three kilogram glider moves forwards at two point oh metres per second. Show that momentum is conserved, and determine whether the collision is elastic. Pause here to answer.

Visual: `QuestionCard`, worded as printed (no diagram): "On an air track, a 1.0 kg glider moving at 4.0 m s⁻¹ collides with a 3.0 kg glider at rest. After the collision, the 1.0 kg glider moves backwards at 2.0 m s⁻¹ and the 3.0 kg glider moves forwards at 2.0 m s⁻¹. (a) Show that momentum is conserved in the collision. (b) Determine whether the collision is elastic. (4 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 2 (brief)
> Take forwards as positive. Before, the total momentum is four point oh kilogram metres per second. After, it's minus two point oh plus six point oh, which is also four point **oh**. Kinetic energy before is eight point oh joules. After, it's two point oh plus six point oh, eight point oh **joules**, so the collision is elastic. An after total of eight drops the minus sign of the glider that moved **backwards**.

Visual: card shrinks to the top; "backwards" underlined. Sign chip "+ forwards". Rows: "Σp before = 1.0 × 4.0 = 4.0 kg m s⁻¹"; on "oh" "Σp after = 1.0 × (−2.0) + 3.0 × 2.0 = 4.0 kg m s⁻¹: conserved", boxed "(a)"; on "joules" "KE before = ½ × 1.0 × 4.0² = 8.0 J; KE after = ½ × 1.0 × 2.0² + ½ × 3.0 × 2.0² = 2.0 + 6.0 = 8.0 J: elastic", boxed "(b)". On "backwards" a chip "after: 2.0 + 6.0 = 8.0 kg m s⁻¹, so momentum isn't conserved" fades in and is crossed (caption "backwards: negative"). Hold about 1 second.

### 14. handoff
> So the total momentum survives a collision, because the two objects give each other equal and opposite impulses, as long as no net external force acts. Kinetic energy survives only if the collision is elastic. That's the theory. Next, we test it, with real gliders on an air track, and see whether the measured total momentum really **survives**.

Visual: the memory line returns small at the top. Clear change: the air track plate (`phys-y11-air-track-v1.png`, requested in v31) on the bench line with two gliders (`phys-y11-air-glider-v1.png`; glider A with the flag `phys-y11-glider-flag-v1.png` and a hook-and-loop pad, glider B with a pad and a glider mass `phys-y11-glider-mass-v1.png`), two light gates (`phys-y11-light-gate-v1.png`, requested as `y11p-light-gate-v1.png`, v24) either side of B, the spring launcher (`phys-y11-spring-launcher-v1.png`, as `y11p-spring-launcher-v1.png`, v23) at the left end. Boxed at the right: "Σmv before = Σmv after", with a grey "?" and the chip "measured?". On "survives" the chip "Next: Does the measured total momentum survive a collision?". This is the final frame of the video (series rule). Hold about 2 seconds.

### 15. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Conservation of momentum: Σmv before = Σmv after, when no net external force acts on the system (the objects we count). During a brief collision, friction's impulse is negligible.
2. Why: by Newton's third law the objects push on each other with equal and opposite forces for the same time, so their impulses are equal and opposite and the total is unchanged.
3. Choose a positive direction; momentum to the other way is negative. Objects that stick share one velocity: m₁u₁ + m₂u₂ = (m₁ + m₂)v.
4. Classify by total KE (½mv²): the same, elastic; not conserved (in these crashes, less), inelastic; stuck together, perfectly inelastic. The lost KE becomes heat, sound and deformation.
5. Elastic collisions: use momentum and KE conservation together (two equations for two unknowns).

Memory aid (large, on the notes screen): *Momentum survives every collision. Kinetic energy survives only the elastic ones.* Second line: *condition: no net external force during the collision.*

At the end the notes cross-fade back to scene 14's final frame (series rule).

## Teaching checks

- **Does it explain causes?** Why the total momentum can't change: third-law pairs for the same time give equal and opposite impulses (2, shown as mirrored areas and a constant total bar). Why the condition matters: an external force has no partner inside the system (3). Why friction can be ignored during the collision: its impulse in so short a time is tiny (3, shown as a sliver). Why kinetic energy can fall: the paired forces act over different distances (6, shown with brackets and bars). Why the elastic case needs both laws: two unknowns (8).
- **Misconceptions addressed:** momentum is conserved only in elastic collisions (1, 2, 5, 9); sticking loses momentum (1, 2, 4); friction means momentum is never conserved (3); conserved momentum means conserved KE (5, 6); sign errors with opposite motion (A1, A2 crossed).
- **One idea at a time:** the cause (2), the condition (3), solving (4), classifying (5), why KE falls (6), the elastic case (7, 8); one working row per cue.
- **Video makes it easier:** the student watches A's bar shrink exactly as B's grows while the total bar stays still (2), watches the friction sliver beside the contact area (3), watches A's displacement bracket outgrow B's while the blue bar falls (6) and watches the steel balls hand over their momentum and energy (8).
- **Response opportunity:** two 3 s predictions (1, 7); two unseen HSC-style tasks, 10 seconds each, every condition on the card (directions, stick together, at rest, air track), nothing answer-bearing. One crossed mistake each; feedback about 31 s and 30 s.
- **Avoided double teaching:** third-law pairs (v17), work and KE (v26), impulse (v29) recalled in a line each.
- **Syllabus coverage:** `ci4f02a70c` (3, 9, key note 1); `cib830a9b7` (2, 6); `ci6036e9ce` (5, A1, A2); `ci84483399` (4, A1, A2; "where appropriate, conservation of kinetic energy" in 8); `ci475a70b8` (8, A2).
- **Out of scope by design:** measurement and the practical (v31); recoil and explosions; two-dimensional collisions; the general elastic-collision formulas.

## Practice questions and model answers

**Attempt 1 (scene 10; original wording, HSC style, 4 marks suggested, not an official marking scheme).** "A 2.0 kg trolley moving to the right at 3.0 m s⁻¹ collides head-on with a 1.0 kg trolley moving to the left at 1.5 m s⁻¹. The trolleys stick together. (a) Calculate the velocity of the trolleys after the collision. (b) Classify the collision as elastic or inelastic, by calculating the total kinetic energy before and after."
Model answer: (a) Taking right as positive: Σp before = 2.0 × 3.0 + 1.0 × (−1.5) = 4.5 kg m s⁻¹ = (2.0 + 1.0)v, so v = 1.5 m s⁻¹ to the right. (b) KE before = ½ × 2.0 × 3.0² + ½ × 1.0 × 1.5² = 9.0 + 1.125 ≈ 10 J; KE after = ½ × 3.0 × 1.5² ≈ 3.4 J. The total kinetic energy falls, so the collision is inelastic (perfectly inelastic, because they stick). Classic mistake (crossed): "v = (6.0 + 1.5) ÷ 3.0 = 2.5 m s⁻¹".

**Attempt 2 (scene 12; original wording, HSC style, 4 marks suggested).** "On an air track, a 1.0 kg glider moving at 4.0 m s⁻¹ collides with a 3.0 kg glider at rest. After the collision, the 1.0 kg glider moves backwards at 2.0 m s⁻¹ and the 3.0 kg glider moves forwards at 2.0 m s⁻¹. (a) Show that momentum is conserved in the collision. (b) Determine whether the collision is elastic."
Model answer: (a) Taking forwards as positive: Σp before = 1.0 × 4.0 + 0 = 4.0 kg m s⁻¹; Σp after = 1.0 × (−2.0) + 3.0 × 2.0 = 4.0 kg m s⁻¹, so momentum is conserved. (b) KE before = ½ × 1.0 × 4.0² = 8.0 J; KE after = ½ × 1.0 × 2.0² + ½ × 3.0 × 2.0² = 2.0 + 6.0 = 8.0 J. The total kinetic energy is unchanged, so the collision is elastic. Classic mistake (crossed): "after: 2.0 + 6.0 = 8.0 kg m s⁻¹, so momentum isn't conserved".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Sticking trolleys (site `we-1`) | 1.0 kg, 6.0 m s⁻¹; 2.0 kg at rest; Σp 6.0 kg m s⁻¹; v 2.0 m s⁻¹; KE 18 J → 6.0 J; 12 J lost | 1, 4, 5 |
| Contact model | impulses +4.0 and −4.0 N s; A 6.0 → 2.0, B 0 → 4.0 kg m s⁻¹; total 6.0; distances 4 : 1; squash 3 units | 2, 6 |
| Steel balls (site Q2) | 0.20 kg each; 5.0 m s⁻¹; v₁ + v₂ = 5.0; v₁² + v₂² = 25; v₁ = 0, v₂ = 5.0 m s⁻¹ | 7, 8 |
| A1 | 2.0 kg, +3.0; 1.0 kg, −1.5; Σp 4.5; v 1.5 m s⁻¹ right; KE 10 J (10.125) → 3.4 J (3.375); crossed 2.5 | 10, 11 |
| A2 | 1.0 kg, 4.0; 3.0 kg at rest; after −2.0 and +2.0; Σp 4.0 both; KE 8.0 J both; crossed 8.0 kg m s⁻¹ | 12, 13 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (2 Nov); Codex to re-check.

- `we-1`: 1.0 × 6.0 = 6.0; 6.0 ÷ 3.0 = 2.0; ½ × 1.0 × 6.0² = 18; ½ × 3.0 × 2.0² = 6.0; 18 − 6.0 = 12; 6.0 ÷ 18 = 1/3.
- Contact model: 400 N × 0.010 s = 4.0 N s; A 6.0 − 4.0 ÷ 1.0 = 2.0 m s⁻¹; B 4.0 ÷ 2.0 = 2.0 m s⁻¹; A average speed (6.0 + 2.0) ÷ 2 = 4.0, B (0 + 2.0) ÷ 2 = 1.0; distances 0.040 m and 0.010 m; works −16 J and +4.0 J; total −12 J; squash 0.030 m, 400 × 0.030 = 12 J.
- Elastic: 0.20 × 5.0 = 1.0; ½ × 0.20 × 25 = 2.5; v₁² + (5.0 − v₁)² = 25 → 2v₁² − 10v₁ = 0; roots 0, 5.0.
- A1: 6.0 − 1.5 = 4.5; 4.5 ÷ 3.0 = 1.5; 9.0 + 1.125 = 10.125; ½ × 3.0 × 2.25 = 3.375; (6.0 + 1.5) ÷ 3.0 = 2.5.
- A2: 1.0 × 4.0 = 4.0; −2.0 + 6.0 = 4.0; ½ × 16 = 8.0; 2.0 + 6.0 = 8.0; elastic formulas (m₁ − m₂) ÷ (m₁ + m₂) × u = −2.0, 2m₁ ÷ (m₁ + m₂) × u = 2.0.

## Memory aid check

- **"Momentum survives every collision. Kinetic energy survives only the elastic ones."** The site's own memory hook for lesson 28 (`phys2025-y11-fa1-memory-hooks.json`, entry `phys2025-y11-fa1-l28`). Meaning, as said in scene 9: the total momentum is the same before and after any collision; the total kinetic energy is the same only in an elastic collision, which is how a collision is classified. Assumptions checked and spoken: "every collision" holds only with no net external force during the collision (said and written as the second line); for a brief collision on a level, low-friction track this holds to a good approximation (scene 3). The second sentence is the definition of elastic, so it is true by definition, and its use is the classification test (compare the totals). "Survives" means the total, not each object's share (scene 2 shows the shares changing). Introduced after the cause (2), the condition (3), classification (5) and the elastic case (8).
- **Considered, not used:** "Impulses pair up, works don't" (true and the best summary of scene 6, but abstract as a memory line; it appears as scene 6's two chips instead).

## Narration length estimate

Revision 1 count (2 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **6,283 characters joined after the Revision 2 edits (Revision 1 was 6,222)**, 15 scenes. Characters per scene (1 to 15): 363, 497, 541, 606, 474, 526, 333, 685, 203, 404, 402, 416, 402, 342, 75. At 13.3 characters per second the speech is about 472 s; add about 16 s of holds and settling (the collision in 1, the slowed contact in 2 and 6, the friction afterwards in 3, the hand-over in 8, the 2-second memory hold), 6 s for two prediction countdowns, 20 s for two attempt countdowns, 2 s of feedback holds and about 54 s more of the quiet notes hold (about 98 s of holds): **about 570 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Five syllabus points fill it; the elastic algebra (8) is kept to the equal-mass case so the video stays inside the cap (open decision 2).

## Scene list and build ids

Lesson key `p-y11-v30` (route phys-y11-fa1-v30). Suggested explainer folder `src/explainer/lessons/phys-y11-fa1-v30` and build folder `docs/production/claude-pm/lessons/p-y11-v30` (root to confirm).

In order (kebab-case; 15 scene headings, all `### N.`): hook, why-conserved, condition, worked-example, classify-ke, why-ke-falls, elastic-prediction, elastic-solve, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). The hook and elastic-prediction carry 3 s countdowns inside explain scenes. Transitions (`pickTransition`): v29's last frame continues into scene 1 (camera continue: the same trolleys); 1 to 2 camera continue (slow-motion replay); 2 to 3 camera pull back to show the system boundary; 3 to 4 clear change to the calculation layout; 4 to 5 camera continue; 5 to 6 split board (slowed contact left, bars right); 6 to 7 clear change to the groove; 7 to 8 camera continue; 8 to 9 split board; attempts and feedback card shrink to the top; 13 to 14 board clear; 14 to 15 fade to the notes board, and 15 cross-fades back to 14's final frame.

Holds: hook and elastic-prediction (3 s), attempt-1, attempt-2 (10 s after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/p-y11-v30-learning-review.md`, `science_check` = `checks/p-y11-v30-physics-check.md`.

## Assets

Have or requested earlier (uniform scaling only, never stretched):
- `phys-y11-dynamics-trolley-v1.png` (as `y11p-dynamics-trolley-v1.png`, v09): scenes 1 to 6, 9.
- `phys-y11-trolley-mass-v1.png` (as `y11p-trolley-mass-v1.png`, v14): trolley B, scenes 1 to 6, 9.
- `phys-y11-velcro-pad-v1.png` (v29 request): scenes 1 to 6, 9.
- `phys-y11-force-sensor-v1.png` (as `y11p-force-sensor-v1.png`, v17): scene 2.
- `phys-y11-steel-ball-v1.png` (as `y11p-steel-ball-v1.png`, v10): scenes 7 to 9 (two copies, same scale).
- `phys-y11-spring-launcher-v1.png` and `phys-y11-spring-launcher-plunger-v1.png` (as `y11p-`, v23): scene 1 (launching A, if the build shows the start) and 14.
- Handoff only (requested in v31's asset brief): `phys-y11-air-track-v1.png`, `phys-y11-air-glider-v1.png`, `phys-y11-glider-flag-v1.png`, `phys-y11-glider-mass-v1.png`; and `phys-y11-light-gate-v1.png` (as `y11p-light-gate-v1.png`, v24).
- **Considered, not used:** v17's plunger trolleys (they push apart, a recoil, kept out); a railway carriage plate (the site's hook; trolleys carry it with no new plate).

Need (new plates): none of its own.

Coded: the track and groove; arrows, bars, brackets and boundary; the impulse panels and sliver; the pad squash overlay; `AlignedAlgebra`; `Countdown`; `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`.

Kit gaps (for the build brief): v29's `MomentumBar` (stacking mode) and `ImpulseGraph` (mirrored pair); v26's energy bars as **`EnergyBar`** (KE blue, per-object and total, plus a "lost" block that can slide out; extend v26's part rather than adding a new one); **contact model** (two bodies under a steady contact force for a set time, with displacement brackets), lesson-local acceptable for Revision 1.

## Codex asset brief

None. No new plate of its own: the hook-and-loop pad is requested in v29's brief and the air-track plates in v31's. The handoff frame (scene 14) cannot be built until v31's plates exist; until then, a build can show grey silhouettes in their place for preview only.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the contact animation in scenes 2 and 6 uses one force function for both panels and both bars, that the total bar is constant during the contact, and that the displacement brackets come from the same motion (ratio 4 : 1 under the steady-force model).
3. Confirm the physics claims: third-law forces equal and opposite for the same duration give equal and opposite impulses; momentum of a system is conserved with no net external force; friction's impulse during a brief collision is negligible; elastic means total KE unchanged and inelastic means total KE is not conserved (it falls in these passive crashes; a gain is possible only if stored energy is released, not taught); the work argument (same time, different distances); the equal-mass elastic result v₁ = 0, v₂ = u.
4. Confirm the syllabus form "Σmv before = Σmv after" is written on screen, and the elastic KE equation in scene 8 matches "Σ½mv² before = Σ½mv² after".
5. Confirm the memory aid's condition is on screen and spoken.
6. Confirm both attempt questions are original in wording, carry every condition, and show nothing answer-bearing.
7. Confirm the syllabus quotes match the route JSON exactly and no 2017-syllabus label appears.
8. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
9. Confirm the narration character count by script with the build parser rules.
10. Add site corrections 1 to 7 under Decisions to `../site-corrections-phys-y11.md` (owner record only).

## YouTube metadata (draft)

Title: Conservation of Momentum: Elastic and Inelastic Collisions | Year 11 Physics

(Title length: 77 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa1-fundamentals-of-mechanics/lesson28.sa.html

Two trolleys collide and stick, and most of their kinetic energy disappears. So why does their total momentum stay exactly the same? Slow the collision down and see Newton's third law at work: equal and opposite forces for the same time give equal and opposite impulses. Learn the condition for conservation of momentum, solve a collision with Σmv before = Σmv after, classify collisions as elastic or inelastic by comparing total kinetic energy, find out why kinetic energy can be lost when momentum can't, and solve an elastic collision with both conservation laws. Two exam-style questions at the end.

Year 11 Physics (2025 syllabus), Focus Area 1: Fundamentals of mechanics.
Syllabus content (NSW Physics 11-12, 2025):
"State the conditions under which momentum is conserved" (ci4f02a70c)
"Explain why momentum is conserved during collisions" (cib830a9b7)
"Classify collisions as elastic or inelastic by calculating and comparing the total kinetic energy before and after the collision" (ci6036e9ce)
"Solve problems involving the conservation of momentum using ∑ m v ⃗ before = ∑ m v ⃗ after and, where appropriate, conservation of kinetic energy" (ci84483399)
"Solve problems involving the conservation of momentum in elastic collisions using ∑ 1 2 m v before 2 = ∑ 1 2 m v after 2" (ci475a70b8)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

Builds on: Momentum and impulse (previous video). Next: The collision investigation.

#Year11Physics #Physics #Momentum #Collisions #HSCScience

## Open decisions

- **1. Learner question.** The route's placeholder is replaced by "Why does the total momentum stay the same when two objects collide, even when kinetic energy is lost?". Root to enter it in the route.
- **2. Five points in one video.** The route gives this video five points. They share one causal story (paired impulses conserve momentum; unpaired works let KE fall), so they are kept together, at the cost of a tight length. The elastic algebra is limited to the equal-mass case (site Q2), and A2 checks a given unequal-mass elastic result rather than solving one. If the learning review finds scene 8 rushed, the split option is: v30a (why conserved, condition, sticking collisions, classification) and v30b (elastic collisions with both laws), each short; root to decide only if needed.
- **3. Site speeds.** `we-1`'s 6.0 m s⁻¹ is fast for a lab trolley. The site's numbers are kept (owner rule: reuse the site's worked example) with the tag "teaching values". Root to confirm.
- **4. Colours.** Momentum magenta (v29's proposal, chosen because v26 to v28 use blue for kinetic energy and green for potential energy); kinetic energy bars blue, as v26. Root to confirm magenta course-wide.
- **5. Site link form.** As v08.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v17, v26 and v29 at Year 11 entry; check that the constant total bar in scene 2 makes conservation feel caused; that "system" and "external" are clear; that the friction sliver answers "but there's always friction"; that the distance argument in scene 6 lands at speaking pace and with the brackets; that the elastic algebra keeps one row per cue; that the cards give nothing away), then the Codex physics check and error check.
- The mirrored impulses with the constant total (2), the displacement brackets with the falling KE bars (6) and the steel-ball hand-over (8) carry the explanation; judge them at playback speed in the voiced preview.
- Revision 2 (3 Nov, brief 153): all five should-fixes applied; none rejected. Funded by cutting the repeated "same moment for both" sentence, "Friction is small" in scene 3 and "Ball one stops dead" in scene 8. Recount 6,283 joined, about 570 s.
