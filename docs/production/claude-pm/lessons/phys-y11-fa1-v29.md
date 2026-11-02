# Year 11 Physics FA1 V29 (Physics 2025, Year 11, Focus Area 1): Why does the same change in momentum take a smaller force when it happens over a longer time? (design)

Status: Revision 2 (3 Nov): brief 153 repairs applied (opening uses v28's actual final chip; cushion and crumple claims say average force with equal-area average rectangles; ball-stop graph labelled as magnitudes; attempt 2 states that other forces' impulses are negligible). Needs a Codex error check.

Narration 6,197 characters, 15 scenes, about 566 s (9.3 minutes) including one 3 s prediction countdown inside the teaching, the hook's 3 s countdown, two 10 s attempt countdowns and the notes hold, counted by script with the build parser rules (see "Narration length estimate").

Scope: twenty-ninth video of the Year 11 Physics (2025) Focus Area 1 route and the first of three momentum videos (v29 momentum and impulse, v30 collisions, v31 the collision investigation) that close the focus area. Templates: `phys-y11-fa1-v22.md` (concept format, section list), `phys-y11-fa1-v17.md` (trolleys, force-time panels), `phys-y11-fa1-v14.md` (fan trolley on a smooth track), `math-a12-d10.md` (aligned working with result lines on cues); house conventions from the two root-decision files for v01 to v24. No pre-design pack exists: the pack work is done in this file (site lesson read, numbers recalculated with Python, misconceptions and site errors listed). Site lesson read in full (2 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa1-fundamentals-of-mechanics/lesson27.sa.html` (orient and predict, intentions and key terms, momentum: mass in motion, impulse: changing momentum with its worked example, apply it yourself, why momentum is conserved in collisions, independent practice, retrieve). Route entry: `phys-y11-fa1-v29` in `../../phys-y11-video-route.json`. Route start: "Start with Momentum and Impulse. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions." Route stop: "Stop after the learner can answer: How can I explain and apply momentum and impulse? Teach only the listed actions; the next video owns its separate question." Next (route, placeholder wording): "phys-y11-fa1-v30: How can I explain and apply collisions: conservation of momentum?" (v30's design uses "Why does the total momentum stay the same when two objects collide, even when kinetic energy is lost?").

Owner rules applied: 2025 syllabus only; no people, hands, faces or body outlines (the egg is released by a coded clip; the ball is stopped by a board and a net, not caught; the car has no occupants drawn; no crash-test dummies); objects painted at native aspect, vectors, bars and graphs coded; one reasoning stage at a time; calculations as task, equation and grouped givens with units, result lines on their spoken cues; 3 s in-teaching prediction; "Pause here to answer." with a 10 s countdown and the full worded question; brief feedback with one crossed mistake; original HSC-style questions; key-notes hold; Australian spelling; no em dashes; v28 (energy) and v16 (F_net = ma) recalled in one sentence each, never re-taught.

Syllabus content point (Physics 11-12 (2025), Year 11, Focus Area 1, group "Momentum and energy"; local ledger ID with NESA content-system codename), quoted from the route JSON `syllabusActions` in linear form:

- P25-FA1-G5-11 `ci7e7f090d`: "Solve problems involving momentum using p ⃗ = m v ⃗ and Δ p ⃗ = F ⃗ net Δ t"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

**Boundary:** starts from v28's handoff (the box at the foot of the rough ramp sliding toward the padded stop, its energy bars, the chips "how hard does it stop?" and "Next: Why does the same change in momentum take a smaller force over a longer time?"); momentum p = mv as a vector with a sign convention, units kg m s⁻¹, contrasted in one sentence with kinetic energy; Δp = F_net Δt from Newton's second law (v16) and a = Δv ÷ Δt (v06); impulse as force times time, in N s, and as the area under a force-time graph; the same impulse delivered by half the force for twice the time; a varying contact force and its average; the site's cricket-ball example; the egg and the crumple zone explained; a bounce needing a bigger impulse than a stop (vector Δp). Stops at one object and the impulse on it. Not taught: why momentum is conserved, its conditions and collisions (v30, although site lesson 27 has a card on them); elastic and inelastic collisions (v30); measured collisions (v31); impulse from a force at an angle to the motion (beyond this point; only one-dimensional cases).

## Decisions

- **Learner question written (route placeholder replaced; for root).** "Why does the same change in momentum take a smaller force when it happens over a longer time?" The answer, built in order: momentum is mass times velocity and has a direction (2); a net force acting for a time changes it, Δp = F_net Δt, from Newton's second law (3); so the area under a force-time graph is the change in momentum, and half the force for twice the time gives the same result (4); a real contact force varies, and its average is the area divided by the time (5); so for a fixed Δp, a longer stop needs a smaller average force (6, 7); a bounce needs a bigger Δp than a stop (8).
- **The hook (site warm-up, made visible).** The site's raw egg dropped from the same height onto concrete and onto a cushion. Shown, not described: two eggs released by a coded clip, the concrete one cracks (plate swap), the cushion one survives. 3 s prediction "what's different about the cushion?". Answered in scene 7 with the two force-time shapes of equal area. No egg numbers are given (no measured contact times exist; inventing them would add numbers without teaching).
- **The cause made visible before the rule (owner quality bar).** (3) The fan trolley's amber thrust arrow acts while a force-time graph fills with pale amber area and, in step, the trolley's magenta momentum bar grows: the bar's length always equals the shaded area (one function drives both). (4) Two lanes: 0.40 N for 2.0 s and 0.20 N for 4.0 s; the two shaded rectangles have different shapes and the same area, and the two momentum bars finish level. (5) A spike-shaped force curve and its equal-area rectangle, the average force. (7) The concrete and cushion curves: a tall narrow spike and a low wide hump, the same shaded area. (8) Momentum arrows before and after a bounce, with Δp drawn as the arrow from the first tip to the second (final minus initial), longer than the stopping Δp.
- **Momentum (site card 1; site check numbers).** p = mv, a vector in the direction of the velocity, kg m s⁻¹. The site's car: 1200 kg at 15 m s⁻¹, p = 1.8 × 10⁴ kg m s⁻¹ ("eighteen thousand"); heading west with east positive: −1.8 × 10⁴. Kinetic energy contrast in one sentence (site misconception 2, and the site MC distractor 135 000 = ½mv²): no direction, and doubling the speed quadruples KE but only doubles p.
- **Deriving the rule (owner: explain the cause before relying on it).** From v16: F_net = ma; from v06: a = Δv ÷ Δt. Multiply by Δt: F_net Δt = mΔv = Δp (mass constant). Written in the syllabus form "Δp = F_net Δt" first; the site's "Ft = Δp" is not shown (it hides that F is the net force and t a duration). "Impulse" glossed: the net force times the time it acts; 1 N s = 1 kg m s⁻¹ (shown as a unit row: N s = (kg m s⁻²) × s).
- **The fan trolley (new numbers; v14's fan trolley reused).** Smooth, level track so the thrust is the net force (weight and the normal force balance, drawn small and grey). Trolley plus fan 0.80 kg; thrust 0.40 N for 2.0 s: impulse 0.80 N s; from rest, v = 1.0 m s⁻¹. Lane 2: 0.20 N for 4.0 s: 0.80 N s, 1.0 m s⁻¹. The fan switches off at the end of each push (coded propeller stops) and the trolley coasts.
- **Varying force and average force (scene 5).** A curve rising to a peak and falling, its area shaded; an equal-area rectangle over the same time; "average force = impulse ÷ contact time". This is what makes the cricket-ball forces "average" forces, as the site's figure says.
- **Worked example (site `we-1`, unchanged numbers; context changed; precision stated).** 0.15 kg ball at 30 m s⁻¹ (positive direction) stopped in 0.020 s or 0.10 s. The site's "rigid hands" and "giving with the catch" become a stiff wooden board and a loose net (no hands; open decision 2). Δp = 0.15 × (0 − 30) = −4.5 kg m s⁻¹; F = −4.5 ÷ 0.020 = −225 N, given as −2.3 × 10² N (two figures, from 0.15 and 4.5; said "about two hundred and thirty newtons", as v23's "about one hundred and seventy"); F = −4.5 ÷ 0.10 = −45 N. Five times the time, a fifth of the force. The sign is said: the force on the ball points against its motion.
- **Prediction (3 s, scene 4).** "Half the force for twice as long: slower, faster, or the same?" Answered by the equal areas.
- **The bounce (vector Δp; owner: a useful surprise).** The same ball arriving at +30 m s⁻¹ and leaving at −20 m s⁻¹: Δp = 0.15 × (−20 − 30) = −7.5 kg m s⁻¹, bigger than the −4.5 of a stop. Said: the board stops the ball and then pushes it back. This prepares the syllabus's vector form without a separate rule and is tested in A2 with new numbers.
- **Attempts (original, HSC style).** (A1, force-time graph) A 0.40 kg trolley at rest on a smooth, level track; the net force rises steadily from 0 to 60 N in 0.010 s and falls steadily to 0 at 0.020 s (a triangle on the card's graph). Impulse = ½ × 0.020 × 60 = 0.60 N s; v = 0.60 ÷ 0.40 = 1.5 m s⁻¹. Crossed: "60 × 0.020 = 1.2 N s, so 3.0 m s⁻¹" (the peak force used for the whole time). (A2, bounce) A 0.060 kg tennis ball hits a wall at 25 m s⁻¹ and rebounds along the same line at 20 m s⁻¹; contact 5.0 ms. Toward the wall positive: Δp = 0.060 × (−20 − 25) = −2.7 kg m s⁻¹; F = −2.7 ÷ 0.0050 = −540 N, given as 5.4 × 10² N away from the wall. Crossed: "0.060 × (25 − 20) = 0.30 kg m s⁻¹" (the turn-around forgotten). Neither card shows arrows or a sign convention.
- **Mistake scene:** none separate. "A cushion reduces the change in momentum" (site misconception 1: 1, 7); "momentum and kinetic energy are the same" (site misconception 2: 2); "the trolley pushed harder ends up faster" (4); "use the peak force" (5, feedback 1 crossed); "subtract the speeds for a bounce" (8, feedback 2 crossed).
- **Memory aid:** "You can't change the bill, only how long you take to pay it." (the site's own memory hook for lesson 27, with its condition added; see "Memory aid check").
- **Handoff (route next).** Two dynamics trolleys on a level track, A moving right with its magenta momentum bar and teal velocity arrow toward the heavier B (a mass bar on its deck) at rest, a soft pad on the facing ends, a "total p = ?" bar above the pair, and the chip "Next: Why does the total momentum stay the same when two objects collide?". This is the frame v30 opens on.
- **Site sources used:** hook and warm-up (the egg: scenes 1, 7); key terms (momentum, impulse: 2, 3); misconceptions 1 and 2 (7, 2); card 1 and its check (the 1200 kg car: 2); card 2 and `we-1` (scene 6, and the equal-area figure: 4, 7); the quick check (twice the time, half the force: 4, 6); activity 1's idea (crash safety, as the crumple zone in 7, without its 70 kg person); Q1 (crumple zone: 7); Q2 (the same ball: its 0.40 s is not used, the worked example's two times are). Not used: card 3 and Q3 (why momentum is conserved: v30 owns `cib830a9b7` and `ci4f02a70c`); the matching task (mixes in conservation, v30); the airbag (it protects a person; the crumple zone carries the same idea with no person drawn).
- **Site corrections (quoted from site lesson 27, read 2 Nov; for `../site-corrections-phys-y11.md`; none of these are logged yet):**
  1. Card 2 worked example, answer: "$$F_1 = \frac{4.5}{0.020} = 225\ \text{N}$$" and the key statement "Catching the ball in $0.020\ \text{s}$ needs $225\ \text{N}$". The data (0.15 kg, 4.5 kg m s⁻¹) have two significant figures, so three-figure 225 N overstates the precision. Suggest "F₁ ≈ 2.3 × 10² N (about 230 N)". Precision note, not an arithmetic error.
  2. Short-answer Q2 marking line and model answer: "1 mark: $F = 11.25\ \text{N}$" and "$F = \frac{\Delta p}{t} = \frac{4.5}{0.40} = 11.25\ \text{N}$". Four figures from two-figure data. Suggest "F ≈ 11 N"; the marking line should accept 11 N.
  3. Card 2 and key terms: "impulse $= Ft = \Delta p$" and "On the NESA formula sheet: $\text{impulse} = Ft = \Delta p = mv - mu$". The 2025 syllabus writes Δp⃗ = F⃗_net Δt; "F" without "net" invites using one applied force when others act, and the formula-sheet claim needs checking against the 2025 data sheet. Suggest writing "Δp = F_net Δt (F_net the average net force during Δt)" and removing the formula-sheet attribution until confirmed.
  4. Intro: "Momentum, $p = mv$, measures how hard something is to stop". Loose: how hard something is to stop also depends on the time allowed, which is this lesson's point. Suggest "Momentum, p = mv, sets how much impulse it takes to stop something."
  5. Q2 model answer: "Doubling the time halves the force on both the ball and the hands." Correct for average force with fixed Δp; flagged only because the video avoids hands (owner rule), not as an error. No correction needed.
  - Checked and correct: card 1 (p = mv, vector, kg m s⁻¹); the MC (18 000; 135 000 is ½mv²); `we-1` arithmetic (−4.5; 225 and 45 N before rounding; ratio 5); quick check (half as large); activity 1 arithmetic (560 kg m s⁻¹; 5600 N and 1120 N); Q1 marking points; Q3 (v30's content, correct, including the brief-collision condition).
- **Pack questions answered (pack work done here):** worked-example numbers reused exactly (0.15 kg, 30 m s⁻¹, 0.020 s, 0.10 s; the 1200 kg car at 15 m s⁻¹) and recalculated with Python; site misconceptions 1 and 2 used; five site findings listed above. Visual needs met: a momentum bar tied to the shaded impulse area (3, 4), the equal-area shapes (4, 5, 7), the vector Δp on a bounce (8).
- **Cause chain taught, in order:** (1) the egg needs a cause (1); (2) momentum, with direction (2); (3) a net force acting for a time changes momentum: Δp = F_net Δt, the area under F-t (3); (4) the same area by a different shape gives the same Δp (4); (5) a varying force has an average (5); (6) numbers: a fixed Δp, five times the time, a fifth of the force (6); (7) the egg and the crumple zone (7); (8) a bounce needs more impulse (8); (9) memory aid (9).
- **Entry knowledge (route `entryKnowledge`):** Stage 5 (signed arithmetic, rearranging). From FA1, recalled in a line each: v06 (a = Δv ÷ Δt), v16 (F_net = ma), v28 (energy tells us how fast the box is going at the bottom of the ramp; energy has no direction).
- **Learner-visible vocabulary (plain meaning at first use):** momentum p (mass times velocity; it points the way the object moves, scene 2); kg m s⁻¹ (kilogram metres per second, scene 2); impulse (the net force times the time it acts, scene 3); N s (newton seconds, the same as kg m s⁻¹, scene 3); force-time graph (force up the side, time along the bottom, scene 3); average force (the steady force that would give the same impulse in the same time, scene 5); crumple zone (the front of a car built to squash, scene 7).
- **Legacy logic ported:** none. Drawing parts only: `Arrow`, `Label`, `Panel`, `DataGraph` (`src/explainer/physics/course-kit.tsx`).
- **New explainer motion (coded unless a plate is named):** **`MomentumBar`** (a magenta horizontal bar on a signed axis above an object, length ∝ p, positive right, labelled "p = … kg m s⁻¹"); **`ImpulseGraph`** (a force-time panel whose shaded area grows with a time cursor and drives the `MomentumBar` from the same function, with an optional equal-area rectangle and its height readout "average F"); **twin lanes** (two tracks, one clock); **fan on and off** (propeller spin coded on v14's fan plate; amber thrust arrow while on); **egg drop and crack** (coded clip opens; fall with the floor strip and the cushion; plate swap to the cracked egg on impact; impact replay at slow speed with a tag); **vector Δp construction** (initial and final momentum arrows tail to tail, Δp from the initial tip to the final tip); **board and net stops** (the ball decelerates over 0.020 s or 0.10 s at slowed playback; the net plate bows by a coded vertical-only warp of its strings layer, never a stretch of the plate; open decision 3); **car crumple** (cross-fade between the intact and crumpled car plates while it stops against a coded barrier); `AlignedAlgebra`; `Countdown` (3 s, 10 s); `QuestionCard` (subject "Physics") with a small coded force-time graph; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout (constant):** heading top-left; the objects (track, eggs, ball, car) across the left 60 per cent with their momentum bars above them; the force-time panel and the working in the right column.
- **No human figures.**
- **Author notes (not learner copy):**
  (a) Car: 1200 × 15 = 18 000 kg m s⁻¹ = 1.8 × 10⁴ (two figures); ½ × 1200 × 15² = 135 000 J (not shown as a number; only "doubling v doubles p, quadruples KE").
  (b) Fan trolley: m = 0.80 kg (trolley plus fan); lane 1 F = 0.40 N, a = 0.50 m s⁻², 2.0 s: Δp = 0.80 kg m s⁻¹, v = 1.0 m s⁻¹, distance 1.0 m while pushed; lane 2 F = 0.20 N, a = 0.25 m s⁻², 4.0 s: Δp = 0.80, v = 1.0 m s⁻¹, distance 2.0 m while pushed. Both played at 2 × speed (tag "sped up") so lane 2 finishes in 2 s of screen time. The bars use one scale; the graphs share axes (0 to 0.50 N, 0 to 4.0 s).
  (c) Weight and normal force on the fan trolley drawn small and grey (equal, vertical): the track is level, so they cancel and the thrust is the net force (v13's balance in one clause: "on a level track, the up and down forces balance"). Rolling resistance assumed negligible (smooth track, stated on screen "smooth: no friction").
  (d) Scene 5 curve: a smooth pulse (half-sine) of peak 360 N over 0.020 s has area (2/π) × 360 × 0.020 = 4.58 N s; drawn instead with area 4.5 N s by peak 353 N, matched to the board stop in scene 6, so scene 5's curve is the board's force-time curve; its equal-area rectangle is 225 N tall (shown as "average ≈ 2.3 × 10² N" only in scene 6). Scene 5 shows no numbers (shape only).
  (e) Worked example: Δp = 0.15 × (0 − 30) = −4.5 kg m s⁻¹; −4.5 ÷ 0.020 = −225 N → −2.3 × 10² N; −4.5 ÷ 0.10 = −45 N; ratio 5.0. Playback: the board stop takes 0.020 s, shown at 1/50 speed (1.0 s of screen time) and the net stop at 1/50 speed (5.0 s), tag "slowed down 50 times".
  (f) Bounce: 0.15 × (−20 − 30) = −7.5 kg m s⁻¹; |−7.5| ÷ |−4.5| = 1.67 (not stated).
  (g) A1: triangle area ½ × 0.020 × 60 = 0.60 N s; v = 0.60 ÷ 0.40 = 1.5 m s⁻¹; average force 30 N (not asked); crossed 60 × 0.020 = 1.2 N s → 3.0 m s⁻¹.
  (h) A2: 0.060 × (−20 − 25) = −2.7 kg m s⁻¹; −2.7 ÷ 0.0050 = −540 N → 5.4 × 10² N on the ball, away from the wall; crossed 0.060 × 5 = 0.30 kg m s⁻¹ (→ 60 N).
  (i) Egg (scene 1 and 7, no numbers on screen): for the planner, a 0.060 kg egg from 0.50 m lands at √(2 × 9.8 × 0.50) = 3.13 m s⁻¹, p = 0.188 kg m s⁻¹; a 2 ms stop would need about 94 N and a 50 ms stop about 3.8 N. Used only to keep the drawn shapes plausible (the spike about 25 times the hump's height).
  (j) Pronunciations: "p equals m v"; "delta p equals F net delta t"; "kilogram metres per second"; "newton seconds"; "minus four point five"; "zero point oh two oh seconds"; "about two hundred and thirty newtons".

Main question: *An egg dropped onto concrete smashes; dropped from the same height onto a cushion, it survives. Why does the same change in momentum take a smaller force when it happens over a longer time?*
Entry knowledge (Stage 5 signed arithmetic and rearranging; v06 a = Δv ÷ Δt; v16 F_net = ma; v28 energy).
Stops after: p = mv as a vector; Δp = F_net Δt derived; impulse in N s and as the area under a force-time graph; equal impulses from different shapes; average force; the cricket-ball example; the egg and the crumple zone; a bounce's bigger Δp. No collisions between two objects, no conservation.
Handoff: v30, why total momentum survives a collision.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key (root decisions for v01 to v24, plus one proposal): forces amber with a dark ink outline, the net force with a double shaft labelled "F_net"; velocity teal; acceleration violet; momentum magenta, bars and arrows labelled "p" (proposal for the whole momentum run, open decision 4); impulse as a pale amber shaded area under the force-time line (the force's colour, lighter); Δp a dashed magenta arrow; weight and normal force small and grey where only their balance matters; givens navy; working ink with the current row bright; crossed items muted red with a scribble cross. Units on screen in NESA style (kg m s⁻¹, N s, m s⁻¹).

### 1. hook (same egg, same drop)
> Last time, energy told us how fast the box was going at the bottom of the ramp. But how hard does it stop? Here's a cleaner case. An egg is dropped from the same height twice. On concrete, it smashes. On a cushion, it survives. Both eggs land at the same speed, and both end up at rest. So what's different about the **cushion**?

Visual: opens on v28's last frame (the rough ramp, the box at its foot sliding toward the padded stop `phys-y11-padded-stop-v1.png`, its energy bars U 0, KE 36 J, heat 22.8 J, the chips "how hard does it stop?" and "Next: Why does the same change in momentum take a smaller force over a longer time?"). The "Next" chip, kept word for word on the first frame, then transforms into the heading "Why does the same change in momentum take a smaller force over a longer time?" (short form "Momentum and impulse" in the corner tag); on "how hard does it stop?" (spoken) the box meets the pad and stops, its blue KE bar emptying, and the chip stays as the question. On "cleaner case" the ramp and bars fade. Two drop columns: left, the egg plate (`phys-y11-egg-v1.png`) held by a small coded clip above the floor strip (`phys-y11-surface-floor-v1.png`, requested as `y11p-surface-floor-v1.png`; tag "concrete"); right, a second egg above the cushion plate (`phys-y11-cushion-v1.png`) on the same floor. A coded height bracket spans both ("same height"). On "smashes" the left clip opens, the egg falls and cracks on contact (cross-fade to `phys-y11-egg-cracked-v1.png`); on "survives" the right egg falls, sinks a little into the cushion (the cushion plate's coded top-edge dip only; never stretched) and stays whole. Two teal arrows of equal length "same landing speed" ghost in above the impact points, then shrink to dots, "0". On "cushion" chips "softer?", "slower stop?", "less momentum lost?" and a 3-second countdown ring.

### 2. momentum: p equals m v
> To answer that, we need a new quantity, momentum. Momentum is mass times velocity: p equals m **v**. A twelve hundred kilogram car at fifteen metres per second has a momentum of eighteen thousand kilogram metres per second. Because velocity has a direction, so does momentum. Take east as positive, and the same car heading west has minus eighteen **thousand**. It's not the same as kinetic energy, a half m v squared. Kinetic energy has no direction, and doubling the speed makes it four times bigger, but it only doubles the **momentum**.

Visual: clear change: a coded level road line; the car plate (`phys-y11-car-side-v1.png`, facing right) drives in with a teal velocity arrow "15 m s⁻¹" and a mass chip "1200 kg". On "v" boxed "p = mv" at the right with gloss "momentum: mass × velocity; it points the way the object moves". Row "p = 1200 kg × 15 m s⁻¹ = 1.8 × 10⁴ kg m s⁻¹" and a magenta `MomentumBar` grows above the car to that length (unit gloss "kg m s⁻¹: kilogram metres per second"). A sign axis appears under the road: "+ east" to the right. The car turns around (plate mirrored, a coded flip, not a second plate) and drives left; on "thousand" its bar flips to the negative side, "p = −1.8 × 10⁴ kg m s⁻¹". On "kinetic energy" a grey row "KE = ½mv²: no direction"; the car's speed doubles (arrow doubles); the magenta bar doubles; a small blue KE bar (v26's KE colour) beside it grows four times (tag "×4"); on "momentum" the bar's "×2" tag glows.

### 3. changing momentum: delta p equals F net delta t
> So how do you change an object's momentum? You push on it, for some time. Here's a trolley with a fan on a smooth, level track, so the fan's push is the net force. Newton's second law says the net force is m a, and acceleration is change in velocity over time. Multiply both sides by the time, and net force times delta t equals m times delta v. That's the change in momentum: delta p equals F net delta **t**. Net force times time is called impulse, in newton seconds, the same unit as kilogram metres per second. The trolley and fan have a mass of zero point eight oh kilograms. The fan pushes with zero point four oh newtons for two point oh seconds. On a graph of force against time, that's a rectangle, and its area is the impulse, zero point eight oh newton **seconds**. So the trolley gains zero point eight oh kilogram metres per second, and moves off at one point oh metres per **second**.

Visual: clear change: the coded track with the dynamics trolley (`phys-y11-dynamics-trolley-v1.png`) carrying the fan unit (`phys-y11-fan-unit-v1.png`); tag "smooth, level: no friction"; small grey weight and normal arrows, equal (tag "balance"). Right column `AlignedAlgebra`, one row per sentence: "F_net = ma" (grey "v16"); "a = Δv ÷ Δt" (grey "v06"); "F_net Δt = mΔv"; on "t" boxed "Δp = F_net Δt". Gloss "impulse: the net force × the time it acts"; unit row "N s = kg m s⁻² × s = kg m s⁻¹". Givens group (navy): "m = 0.80 kg; F_net = 0.40 N; Δt = 2.0 s; starts at rest". The `ImpulseGraph` opens below (axes "F (N)" and "t (s)"). The fan starts (propeller spins; amber double-shaft arrow "F_net = 0.40 N"); a time cursor sweeps from 0 to 2.0 s while the rectangle's pale amber area fills and the trolley's magenta bar grows from zero in exact step (author note b, tag "sped up"). On "seconds" readout "area = 0.40 N × 2.0 s = 0.80 N s". On the last "second" the fan stops, the trolley coasts; rows "Δp = 0.80 kg m s⁻¹" and "v = 0.80 ÷ 0.80 = 1.0 m s⁻¹", the teal velocity arrow labelled "1.0 m s⁻¹".

### 4. prediction: half the force, twice the time
> Now a second trolley, the same mass. Its fan pushes with only half the force, zero point two oh newtons, but for twice as long, four point oh seconds. Does it end up slower, faster, or the **same**?

Visual: a second lane appears under the first (the same plates); lane 1 replays to the start. Lane 2's givens chip "0.20 N for 4.0 s". On "same" chips "slower?", "faster?", "same?" and a 3-second countdown ring.

### 5. the same impulse, a different shape
> The **same**. Half the force for twice the time gives the same area, zero point eight oh newton seconds. So it's the same change in momentum. Its momentum grows more slowly, but for longer. Real impacts aren't this steady, though. When a ball hits something, the force rises to a peak and falls away, all in a split second. The rule still works. The impulse is the area under the **curve**. Flatten that area into a rectangle over the same time, and its height is the average force. That's the force we use in delta p equals F net delta t.

Visual: on "same" both lanes run from one clock (author note b): lane 1's tall rectangle and lane 2's low, wide rectangle fill on shared axes; both magenta bars grow (lane 2's more slowly) and finish level; readouts "0.40 × 2.0 = 0.80 N s" and "0.20 × 4.0 = 0.80 N s", both trolleys "1.0 m s⁻¹". On "Real impacts" the lanes clear; the panel's time axis rescales to milliseconds; a pulse curve draws (shape only, author note d) and its area shades on "curve". On "Flatten" the shaded area slides into an equal-area rectangle over the same time, a dashed line at its top labelled "average force" (gloss "average force: the steady force that gives the same impulse in the same time").

### 6. worked example: stopping a cricket ball
> Let's use it. Task: compare the average force needed to stop a cricket ball in two ways. The givens: the ball's mass is zero point one five kilograms, and it's moving at thirty metres per second. A stiff board stops it in zero point oh two oh seconds. A loose net stops it in zero point one oh seconds. Take the ball's direction as positive. Its change in momentum is zero point one five times, zero minus thirty, which is minus four point five kilogram metres per **second**. That's the same for both. For the board, the average force is minus four point five over zero point oh two oh, about minus two hundred and thirty **newtons**. For the net, it's minus forty-five **newtons**. Five times the time, one fifth of the force. The minus sign says the force on the ball points back against its motion.

Visual: clear change to the calculation layout. Left: the cricket ball plate (`phys-y11-cricket-ball-v1.png`) flies right toward the board plate (`phys-y11-board-v1.png`, upright), with a teal arrow "30 m s⁻¹" and a magenta bar; below, a second ball toward the net plate (`phys-y11-net-v1.png`, hanging). Task strip "Compare the average force to stop the ball". Equation strip "Δp = F_net Δt, so F = Δp ÷ Δt". Givens group (navy): "m = 0.15 kg; u = +30 m s⁻¹; v = 0; Δt (board) = 0.020 s; Δt (net) = 0.10 s" (grey tag "site example values"). Sign chip "+ the ball's direction". On "second" row "Δp = 0.15 × (0 − 30) = −4.5 kg m s⁻¹", and both balls' magenta bars shrink to zero as they stop (author note e: the board stop at 1/50 speed over 1 s of screen time, the net stop over 5 s, tag "slowed down 50 times"; the net bows, open decision 3). The two force-time shapes draw on shared axes labelled "force magnitude |F| (N)", as the balls stop: a tall narrow rectangle (board) and a low wide one (net), equal shaded areas, tag "same area: impulse magnitude 4.5 N s (force and Δp both point against the motion, so both are negative with +30 m s⁻¹ positive)". On "newtons" row "F (board) = −4.5 ÷ 0.020 = −225 N ≈ −2.3 × 10² N (2 s.f.)"; on the second "newtons" row "F (net) = −4.5 ÷ 0.10 = −45 N"; both boxed. Chip "5 × the time → ⅕ of the force". On "minus sign" an amber arrow on each ball points left, against its teal arrow.

### 7. the egg, and the crumple zone
> Now the egg. Concrete and cushion take away exactly the same momentum, because the egg lands at the same speed and ends at rest. The cushion just makes the stop take longer, so the same impulse comes from a smaller average **force**. A car's crumple zone does the same job. For the same change in the car's momentum, the front squashes and the stop takes longer, so the average force on the rest of the car is **smaller**.

Visual: the scene 1 drop columns return; the two impacts replay slowly (tag "slowed down"). Each egg's magenta bar shrinks to zero: the concrete one almost instantly, the cushion one gradually; chip "same Δp" across both. The force-time panel shows the concrete spike and the cushion hump (author note i, shape only), equal shaded areas, tag "same area"; on "force" each curve's equal-area average rectangle is drawn (tall and narrow for the spike, low and wide for the hump) and the lower average-force line is ringed (author note: equal impulse over a longer time guarantees a smaller average force, not a smaller peak for every pulse shape). On "crumple zone" clear change: the car plate drives right into a coded concrete barrier block; on contact it cross-fades to `phys-y11-car-side-crumpled-v1.png` while it stops (the cross-fade spans the stop); a panel beside it: two shapes, "rigid front: short stop, big average force" (tall, narrow, grey dashed) and "crumple zone: longer stop, smaller average force" (low, wide, amber), equal-area average rectangles. Gloss "crumple zone: the front of a car built to squash". On "smaller" the second rectangle's height (the average force) is ringed.

### 8. a bounce takes more
> Here's a twist. What if the ball bounces back instead of stopping? Say it arrives at plus thirty metres per second, and leaves at minus twenty. The change in momentum is the final momentum minus the initial: zero point one five times, minus twenty minus thirty. That's minus seven point five kilogram metres per **second**. It's bigger than just stopping the ball, because the board has to stop it, and then push it back the other **way**.

Visual: the board scene returns; the ball arrives (teal "+30 m s⁻¹") and leaves to the left (teal "−20 m s⁻¹"). Right column: the sign axis; the initial magenta arrow "p₁ = +4.5" and the final magenta arrow "p₂ = −3.0" drawn tail to tail from one origin; row "Δp = p₂ − p₁ = 0.15 × (−20 − 30)". On "second" a dashed magenta Δp arrow draws from p₁'s tip to p₂'s tip, labelled "Δp = −7.5 kg m s⁻¹", boxed; below it, scene 6's "stop: Δp = −4.5" in grey, shorter. On "way" the Δp arrow splits into two dashed pieces, "−4.5 to stop" and "−3.0 to send it back".

### 9. memory aid
> Here's a way to remember it. The change in momentum is the bill. You can't change the bill, only how long you take to pay it, and paying slowly means a smaller average force. The bill is fixed once the starting and final velocities are fixed. A bounce makes it **bigger**.

Visual: the board scene and the two force shapes stay small at the left. The handwritten line writes large: "You can't change the bill, only how long you take to pay it." Under it, smaller: "bill = Δp, fixed by the start and end velocities". On "bigger" scene 8's Δp arrow pulses beside "bounce: a bigger bill". Hold about 2 seconds.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. A zero point four oh kilogram trolley sits at rest on a smooth, level track. It's struck, and the graph shows the net force on it. The force rises steadily from zero to sixty newtons in zero point oh one oh seconds, then falls steadily back to zero at zero point oh two oh seconds. Calculate the impulse on the trolley, and its speed afterwards. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Physics"), worded as printed, with a small coded force-time graph (axes "F (N)" 0 to 60, "t (s)" 0 to 0.020; a triangle with its apex at (0.010 s, 60 N); gridlines only at the labelled values; no shading): "A 0.40 kg trolley is at rest on a smooth, level track. It is struck, and the graph shows the net force on the trolley during the impact. (a) Calculate the impulse on the trolley. (b) Calculate the speed of the trolley after the impact. (3 marks)" Tag: "HSC-style question, written for HSCScience". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 11. feedback 1 (brief)
> The impulse is the area under the graph. It's a triangle, so a half times zero point oh two oh times sixty, which is zero point six oh newton **seconds**. That's the trolley's change in momentum, so its speed is zero point six oh over zero point four oh, one point five metres per **second**. Using sixty newtons for the whole time doubles the answer. The force was only that big for an **instant**.

Visual: card shrinks to the top; the graph enlarges at the right and its triangle shades pale amber. Rows: on "seconds" "impulse = area = ½ × 0.020 s × 60 N = 0.60 N s", boxed "(a)"; on "second" "Δp = 0.60 kg m s⁻¹; v = 0.60 ÷ 0.40 = 1.5 m s⁻¹", boxed "(b)". On "instant" a dashed rectangle 60 N tall over the full 0.020 s appears with the chip "60 × 0.020 = 1.2 N s → 3.0 m s⁻¹" and is crossed (caption "the peak lasts an instant"). Hold about 1 second.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. A zero point oh six oh kilogram tennis ball hits a wall at twenty-five metres per second, and rebounds along the same line at twenty metres per second. It's in contact with the wall for five point oh milliseconds. Calculate the change in the ball's momentum, and the average force of the wall on the ball. Ignore any other force during the contact. Pause here to answer.

Visual: `QuestionCard`, worded as printed (no diagram): "A 0.060 kg tennis ball hits a wall at 25 m s⁻¹ and rebounds along the same line at 20 m s⁻¹. The ball is in contact with the wall for 5.0 ms. (a) Calculate the change in momentum of the ball. (b) Calculate the average force exerted by the wall on the ball. Assume the impulses of all other forces during the contact are negligible. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 2 (brief)
> Take toward the wall as positive. Delta p is zero point oh six oh times, minus twenty minus twenty-five, which is minus two point seven kilogram metres per **second**. The average force is minus two point seven over zero point oh oh five oh, about five hundred and forty newtons, away from the **wall**. Subtracting the speeds, twenty-five minus twenty, forgets that the ball turned **around**.

Visual: card shrinks to the top; "rebounds" and "5.0 ms" underlined. Sign chip "+ toward the wall". Small magenta arrows "p₁ = +1.5" and "p₂ = −1.2" tail to tail, with the dashed Δp arrow between their tips. Rows: on "second" "Δp = 0.060 × (−20 − 25) = −2.7 kg m s⁻¹", boxed "(a)"; on "wall" "F = −2.7 ÷ 0.0050 = −540 N ≈ 5.4 × 10² N away from the wall (2 s.f.)", boxed "(b)", with the chip "other forces negligible during contact" and an amber arrow on the ball pointing away from the wall. On "around" a chip "0.060 × (25 − 20) = 0.30 kg m s⁻¹" fades in and is crossed (caption "it turned around: the signs differ"). Hold about 1 second.

### 14. handoff
> So momentum is mass times velocity, and a net force acting for a time changes it: delta p equals F net delta t. Next, two trolleys collide, and each one pushes on the other. So what happens to their total **momentum**?

Visual: the memory line returns small at the top. Clear change: the coded level track; trolley A (`phys-y11-dynamics-trolley-v1.png`, tag "A") moves right with a teal velocity arrow and its magenta `MomentumBar` toward trolley B (the same trolley plate with the trolley mass bar `phys-y11-trolley-mass-v1.png` on its deck, tag "B", so B reads as the heavier) at rest with a zero bar; a soft pad (`phys-y11-velcro-pad-v1.png`) on each facing end; a grey bar outline above the pair labelled "total p = ?". On "momentum" the chip "Next: Why does the total momentum stay the same when two objects collide?". This is the final frame of the video (series rule). Hold about 2 seconds.

### 15. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Momentum: p = mv, in kg m s⁻¹. It is a vector, pointing the way the object moves: choose a positive direction and keep the signs.
2. Impulse = F_net Δt, in N s (1 N s = 1 kg m s⁻¹). It equals the change in momentum: Δp = F_net Δt = mv − mu.
3. On a force-time graph, the impulse is the area under the line. Average force = impulse ÷ contact time.
4. For a fixed Δp, a longer stopping time means a smaller average force (cushions, nets, crumple zones).
5. A bounce needs a bigger impulse than a stop: Δp = final momentum − initial momentum, with signs.

Memory aid (large, on the notes screen): *You can't change the bill, only how long you take to pay it.* Second line: *bill = Δp, fixed by the start and end velocities.*

At the end the notes cross-fade back to scene 14's final frame (series rule).

## Teaching checks

- **Does it explain causes?** Why momentum has a sign: velocity has a direction (2). Why a force for a time changes momentum: Newton's second law with a = Δv ÷ Δt (3, shown as the bar growing with the shaded area). Why half the force for twice the time gives the same result: equal areas (5, two lanes from one clock). Why the force is called average: real forces vary (5). Why the net and the cushion protect: the same Δp over a longer time needs a smaller force (6, 7, shown as equal-area shapes). Why a bounce costs more: stopping plus sending back (8, shown with the Δp arrow split in two).
- **Misconceptions addressed:** a cushion reduces the change in momentum (1, 7); momentum and kinetic energy are the same (2); the stronger push gives the faster trolley (4, 5); use the peak force with the whole time (5, feedback 1 crossed); a bounce's Δp is the difference of the speeds (8, feedback 2 crossed).
- **One idea at a time:** momentum (2), the rule (3), equal areas (4, 5), the average force (5), numbers (6), application (7), the bounce (8); one working row per cue.
- **Video makes it easier:** the student watches the momentum bar grow exactly as the impulse area fills (3), watches two differently shaped areas finish level (5), watches a curve flatten into its average rectangle (5), watches the egg crack or survive with the two force shapes beside it (1, 7), watches the car's front crumple while it stops (7) and watches the Δp arrow reach from one momentum tip to the other (8).
- **Response opportunity:** two 3 s predictions (1, 4); two unseen HSC-style tasks, 10 seconds each, every condition on the card (smooth and level; at rest; same line; contact time), nothing answer-bearing (A1's graph is unshaded; A2 has no arrows or signs). One crossed mistake each; feedback about 30 s and 29 s.
- **Avoided double teaching:** F_net = ma (v16), a = Δv ÷ Δt (v06) and energy (v28) recalled in a line each.
- **Syllabus coverage:** `ci7e7f090d`: p⃗ = mv⃗ with direction (2, 8, A2), Δp⃗ = F⃗_net Δt (3 to 8, A1, A2).
- **Out of scope by design:** conservation of momentum and collisions between objects (v30); measured collisions (v31); two-dimensional impulse.

## Practice questions and model answers

**Attempt 1 (scene 10; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "A 0.40 kg trolley is at rest on a smooth, level track. It is struck, and the graph shows the net force on the trolley during the impact [a triangle: 0 N at 0 s, 60 N at 0.010 s, 0 N at 0.020 s]. (a) Calculate the impulse on the trolley. (b) Calculate the speed of the trolley after the impact."
Model answer: (a) Impulse = area under the F-t graph = ½ × 0.020 s × 60 N = 0.60 N s (in the direction of the force). (b) Δp = impulse = 0.60 kg m s⁻¹; starting from rest, v = Δp ÷ m = 0.60 ÷ 0.40 = 1.5 m s⁻¹ in the direction of the force. Classic mistake (crossed): "impulse = 60 × 0.020 = 1.2 N s, so v = 3.0 m s⁻¹".

**Attempt 2 (scene 12; original wording, HSC style, 3 marks suggested).** "A 0.060 kg tennis ball hits a wall at 25 m s⁻¹ and rebounds along the same line at 20 m s⁻¹. The ball is in contact with the wall for 5.0 ms. (a) Calculate the change in momentum of the ball. (b) Calculate the average force exerted by the wall on the ball. Assume the impulses of all other forces during the contact are negligible."
Model answer: (a) Taking toward the wall as positive: Δp = m(v − u) = 0.060 × (−20 − 25) = −2.7 kg m s⁻¹, that is 2.7 kg m s⁻¹ away from the wall. (b) With other forces' impulses negligible, the wall's average force equals Δp ÷ Δt = −2.7 ÷ 0.0050 = −540 N, about 5.4 × 10² N away from the wall. Classic mistake (crossed): "Δp = 0.060 × (25 − 20) = 0.30 kg m s⁻¹".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Car (site check) | 1200 kg; 15 m s⁻¹; p = 1.8 × 10⁴ kg m s⁻¹; west −1.8 × 10⁴ | 2 |
| Fan trolley, lane 1 | 0.80 kg; 0.40 N; 2.0 s; 0.80 N s; 1.0 m s⁻¹ | 3, 5 |
| Fan trolley, lane 2 | 0.20 N; 4.0 s; 0.80 N s; 1.0 m s⁻¹ | 4, 5 |
| Cricket ball (site `we-1`) | 0.15 kg; 30 m s⁻¹; Δp −4.5 kg m s⁻¹; 0.020 s → −225 N ≈ −2.3 × 10² N; 0.10 s → −45 N; ratio 5 | 6 |
| Bounce | +30 → −20 m s⁻¹; p₁ +4.5, p₂ −3.0; Δp −7.5 kg m s⁻¹ | 8 |
| A1 | 0.40 kg; peak 60 N; 0.010 s, 0.020 s; 0.60 N s; 1.5 m s⁻¹; crossed 1.2 N s, 3.0 m s⁻¹ | 10, 11 |
| A2 | 0.060 kg; 25 and 20 m s⁻¹; 5.0 ms; Δp −2.7 kg m s⁻¹; F −540 N ≈ 5.4 × 10² N; p₁ +1.5, p₂ −1.2; crossed 0.30 | 12, 13 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (2 Nov); Codex to re-check.

- 1200 × 15 = 18 000; ½ × 1200 × 15² = 135 000 (not shown).
- 0.40 × 2.0 = 0.80; 0.80 ÷ 0.80 = 1.0; 0.40 ÷ 0.80 = 0.50 m s⁻², ½ × 0.50 × 2.0² = 1.0 m; 0.20 × 4.0 = 0.80; 0.20 ÷ 0.80 = 0.25 m s⁻², ½ × 0.25 × 4.0² = 2.0 m.
- 0.15 × (0 − 30) = −4.5; −4.5 ÷ 0.020 = −225; −4.5 ÷ 0.10 = −45; 0.10 ÷ 0.020 = 5.0.
- 0.15 × 30 = 4.5; 0.15 × (−20) = −3.0; 0.15 × (−20 − 30) = −7.5.
- A1: ½ × 60 × 0.020 = 0.60; 0.60 ÷ 0.40 = 1.5; 60 × 0.020 = 1.2; 1.2 ÷ 0.40 = 3.0.
- A2: 0.060 × 25 = 1.5; 0.060 × (−20) = −1.2; 0.060 × (−45) = −2.7; −2.7 ÷ 0.0050 = −540; 0.060 × 5 = 0.30.
- Egg (planner only): √(2 × 9.8 × 0.50) = 3.130; 0.060 × 3.130 = 0.188; 0.188 ÷ 0.002 = 94; 0.188 ÷ 0.050 = 3.8.

## Memory aid check

- **"You can't change the bill, only how long you take to pay it."** The site's own memory hook for lesson 27 (`phys2025-y11-fa1-memory-hooks.json`, entry `phys2025-y11-fa1-l27`). Meaning, as said in scene 9: Δp is the bill; Δt is how long you take to pay; the force is the rate of paying, so paying slowly means a smaller force. Assumptions checked and spoken: the bill is fixed only when the starting and final velocities are fixed (true for the egg, the ball stopped by the board or the net, and a car stopping); a bounce changes the final velocity and so makes the bill bigger (said, scene 8 and 9), so the aid doesn't hide the vector case. It describes the average force; the peak force can be higher (scene 5 and feedback 1). Introduced after the rule (3), the equal areas (5), the numbers (6) and the bounce (8).
- **Considered, not used:** "Ft = Δp, so stretch the t" (true but only restates the formula).

## Narration length estimate

Revision 1 count (2 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **6,197 characters joined after the Revision 2 edits (Revision 1 was 6,110)**, 15 scenes. Characters per scene (1 to 15): 325, 528, 886, 194, 531, 790, 414, 431, 268, 378, 387, 380, 382, 214, 75. At 13.3 characters per second the speech is about 466 s; add about 18 s of holds and settling (the egg drops in 1, the fan runs in 3 and 5, the slowed board and net stops in 6, the impact replays and the crumple in 7, the 2-second memory hold), 6 s for two prediction countdowns, 20 s for two attempt countdowns, 2 s of feedback holds and about 54 s more of the quiet notes hold (about 100 s of holds): **about 566 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. One syllabus point with its rule, its graph reading, the worked example, the vector case and two applications fills it without padding. Scene 3 is the longest (886 characters: the derivation and the first numbers); if the learning review finds it dense, its last two sentences (the graph and the numbers) move to the start of scene 4, before the prediction.

## Scene list and build ids

Lesson key `p-y11-v29` (route phys-y11-fa1-v29). Suggested explainer folder `src/explainer/lessons/phys-y11-fa1-v29` and build folder `docs/production/claude-pm/lessons/p-y11-v29` (root to confirm).

In order (kebab-case; 15 scene headings, all `### N.`): hook, momentum, impulse-rule, half-force-prediction, same-area, worked-example, egg-crumple, bounce, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). The hook and half-force-prediction carry 3 s countdowns inside explain scenes. Transitions (`pickTransition`): v28's last frame continues into scene 1 (camera continue: the same ramp and stop, then a clear change to the drop columns); 1 to 2 clear change to the road; 2 to 3 clear change to the track; 3 to 4 camera continue (a second lane slides in); 4 to 5 camera continue; 5 to 6 clear change to the calculation layout; 6 to 7 split board (the drop columns return left); 7 to 8 camera continue (back to the board); 8 to 9 camera continue; attempts and feedback card shrink to the top; 13 to 14 board clear; 14 to 15 fade to the notes board, and 15 cross-fades back to 14's final frame.

Holds: hook and half-force-prediction (3 s), attempt-1, attempt-2 (10 s after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/p-y11-v29-learning-review.md`, `science_check` = `checks/p-y11-v29-physics-check.md`.

## Assets

Have or requested earlier (uniform scaling only, never stretched):
- `phys-y11-dynamics-trolley-v1.png` (requested as `y11p-dynamics-trolley-v1.png`, v09): scenes 3 to 5, 14.
- `phys-y11-fan-unit-v1.png` (as `y11p-fan-unit-v1.png`, v14): scenes 3 to 5.
- `phys-y11-trolley-mass-v1.png` (as `y11p-trolley-mass-v1.png`, v14): scene 14 (trolley B's extra mass).
- `phys-y11-surface-floor-v1.png` (as `y11p-surface-floor-v1.png`, v12: "sealed concrete or vinyl"): scenes 1, 7 (the concrete).
- v28's ramp scene with `phys-y11-padded-stop-v1.png` (as `y11p-padded-stop-v1.png`, v24) and v12's box: scene 1's opening beat only.
- **Considered, not used:** `public/assets/biology/b4-car-blue-v1.png` (a top view; scene 2 and 7 need a side view that can crumple); v24's trolley with a flag (no timing here).

Need (new plates, Codex):
1. `phys-y11-egg-v1.png`: scenes 1, 7. Essential.
2. `phys-y11-egg-cracked-v1.png`: scenes 1, 7. Essential (the hook's result).
3. `phys-y11-cushion-v1.png`: scenes 1, 7. Essential.
4. `phys-y11-cricket-ball-v1.png`: scenes 6, 8, 9. Essential.
5. `phys-y11-board-v1.png`: scenes 6, 8, 9. Essential.
6. `phys-y11-net-v1.png`: scene 6. Essential (the long stop).
7. `phys-y11-car-side-v1.png`: scenes 2, 7. Essential.
8. `phys-y11-car-side-crumpled-v1.png`: scene 7. Essential (the crumple zone working).
9. `phys-y11-velcro-pad-v1.png`: scene 14; shared with v30 and v31 (requested here once). Essential for the handoff frame.

Coded: the clip, height bracket and concrete barrier block; every arrow, bar and sign axis; the force-time panels, areas and rectangles; the time cursor; the propeller spin; the cushion dip and net bow overlays; `AlignedAlgebra`; `Countdown`; `QuestionCard` with its graph; `Chip` with `cross`; `KeyNotes`; `Heading`.

Kit gaps (for the build brief):
1. **`MomentumBar`** (new, physics; shared by v29 to v31): a signed horizontal bar above an object, magenta, length ∝ p from a supplied function, with label and sign axis; stacking mode for a total (v30).
2. **`ImpulseGraph`** (new, physics; shared by v29 and v30): a force-time panel with a time cursor, a shaded area computed from the force function, an equal-area rectangle mode and an area readout; it exports the running area so a `MomentumBar` can be driven by the same function (bar = initial p + area).
3. **`VectorDelta`** (new, physics, small): two arrows tail to tail on a signed axis and the difference arrow from the first tip to the second, with a split mode (scene 8).
4. v14's fan trolley and v17's trolley on a coded track, lesson-local acceptable for Revision 1.

## Codex asset brief (Year 11 Physics FA1 v29, momentum and impulse)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; design `docs/production/claude-pm/lessons/phys-y11-fa1-v29.md`. Paint after the learning review, physics check and error check pass and the owner gives the go-ahead. Transparent PNG with a true alpha channel, clean edges with no coloured fringe or halo (check on black and white), ink and watercolour in the house style matched to `public/assets/biology/b4-car-blue-v1.png` and the v21 ramp kit, at least 8 per cent clear margin, no text, labels, numbers, scale markings, brand names, people, hands, faces, body outlines, crash-test dummies, backdrop, bench, glow or ground shadow. Keep the native aspect; never stretch. Each plate gets a JSON sidecar with the named pixel coordinates (the code places, rotates and animates by them). Side views are exactly side-on.

1. **`phys-y11-egg-v1.png`** (800 × 1000 px): one whole raw hen's egg, pale brown, upright (narrow end up), soft highlight. Sidecar: the lowest point (contact point); the centre.
2. **`phys-y11-egg-cracked-v1.png`** (same canvas and registration as the egg): the same egg after landing on a hard floor: the lower third cracked and flattened, a small pool of yolk and white spreading at the base, a few shell fragments; the upper shell still recognisable. Sidecar: the same contact point as the whole egg, so the cross-fade does not jump.
3. **`phys-y11-cushion-v1.png`** (1600 × 700 px): a thick, soft, square foam cushion in side view, plain fabric cover (muted blue or green), rounded edges, sitting flat. Sidecar: the top surface line (where the egg lands); the base line.
4. **`phys-y11-cricket-ball-v1.png`** (800 × 800 px): a red leather cricket ball, the stitched seam visible across it, soft highlight. Sidecar: the centre; the radius in pixels.
5. **`phys-y11-board-v1.png`** (500 × 1600 px): a thick, upright wooden board (a stiff backstop), plain pale timber, standing on a small flat base, seen exactly side-on with a slight three-quarter edge so its thickness reads. Sidecar: the face line the ball strikes; the base line.
6. **`phys-y11-net-v1.png`** (900 × 1600 px): a loose hanging net of the kind used in cricket practice nets, seen side-on: a top rope or bar with the netting hanging below it in soft folds, not taut, dark green or black twine. Sidecar: the top bar line; the vertical line where the ball meets the net. Paint the netting on a separate layer file `phys-y11-net-strings-v1.png` (same canvas and registration) so the code can bow the strings without moving the bar.
7. **`phys-y11-car-side-v1.png`** (2400 × 1000 px): a small modern hatchback in exact side view, facing right, plain paint (muted blue), windows tinted dark so no interior or occupants show, wheels on one line. Sidecar: the wheel contact line; the front bumper's leading point; the cabin's front edge (the windscreen base).
8. **`phys-y11-car-side-crumpled-v1.png`** (same canvas and registration): the same car after a frontal impact: the bonnet and front bumper crumpled and shortened by about a fifth of the bonnet length, the cabin and windows undamaged, no debris, no smoke. Sidecar: the same wheel contact line; the crumpled leading point; the unchanged cabin front edge.
9. **`phys-y11-velcro-pad-v1.png`** (500 × 600 px): a small square hook-and-loop pad on a thin backing plate, side-on as fixed to the end of a trolley or glider, the textured face facing right (the code mirrors it for the facing end). Sidecar: the textured contact face line; the fixing face.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the fan trolley's bar and the shaded area come from the same function (bar length = area at every frame), that both lanes run from one clock and finish at 1.0 m s⁻¹, and that the board and net stops play at the stated slow-down.
3. Confirm the physics claims: p = mv is a vector in the direction of v; Δp = F_net Δt follows from F_net = ma and a = Δv ÷ Δt for constant mass; impulse is the area under an F-t graph; average force = impulse ÷ contact time; for a fixed Δp a longer time gives a smaller average force; a bounce has a larger |Δp| than a stop from the same speed; doubling v doubles p and quadruples KE.
4. Confirm the syllabus form "Δp = F_net Δt" is written on screen and the site's "Ft = Δp" is not.
5. Confirm the memory aid's condition is on screen and spoken.
6. Confirm both attempt questions are original in wording, carry every condition, and show nothing answer-bearing.
7. Confirm no people, hands, faces, body outlines or dummies appear in any plate request or visual.
8. Confirm the syllabus quote matches the route JSON exactly and no 2017-syllabus label appears.
9. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
10. Confirm the narration character count by script with the build parser rules.
11. Add site corrections 1 to 4 under Decisions to `../site-corrections-phys-y11.md` (owner record only).

## YouTube metadata (draft)

Title: Momentum and Impulse: Why a Longer Stop Means a Smaller Force | Year 11 Physics

(Title length: 80 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa1-fundamentals-of-mechanics/lesson27.sa.html

An egg dropped onto concrete smashes; dropped onto a cushion, it survives. Why? Learn what momentum is (p = mv, with a direction), derive Δp = F_net Δt from Newton's second law, and see why impulse is the area under a force-time graph. Compare stopping a cricket ball with a stiff board and a loose net, see how a crumple zone protects a car, and find out why a bounce needs a bigger impulse than a stop. Two exam-style questions at the end.

Year 11 Physics (2025 syllabus), Focus Area 1: Fundamentals of mechanics.
Syllabus content (NSW Physics 11-12, 2025):
"Solve problems involving momentum using p ⃗ = m v ⃗ and Δ p ⃗ = F ⃗ net Δ t" (ci7e7f090d)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

Builds on: Conservation of mechanical energy (previous video). Next: Collisions and conservation of momentum.

#Year11Physics #Physics #Momentum #HSCScience

## Open decisions

- **1. Opening frame (aligned to v28).** v28 was designed in parallel; its Revision 1 file appeared while this design was being written and its scene 15 frame was read (2 Nov): the box at the foot of the rough ramp sliding toward the padded stop, its bars, the chips "how hard does it stop?" and "Next: Why does the same change in momentum take a smaller force over a longer time?" (v28 Revision 2 aligned its final chip to this question). Scene 1 opens on it and its first two sentences answer that chip's question with a cleaner case. The first frame uses v28's actual chip word for word; no narration change.
- **2. The cricket ball without hands.** The site's `we-1` contrasts "rigid hands" with "giving with the catch". The owner rule forbids hands, so the same numbers are used with a stiff board (0.020 s) and a loose net (0.10 s). The physics is unchanged. Root to confirm.
- **3. The net's bow.** The net strings are a separate layer so the code can bow them as the ball slows; the bar plate never stretches. If the layer split is not delivered, the ball slows into a static net with a coded dashed bow line (no narration change).
- **4. Momentum colour (course-wide, for the momentum run).** No earlier root decision names a colour for momentum, and v26 to v28 use blue for kinetic energy and green for potential energy. Proposal: magenta (a pink-leaning magenta, kept clearly apart from violet acceleration and from the muted red of crossed items) for momentum bars and arrows, impulse as pale amber area (the force's colour), Δp as a dashed magenta arrow. v30 and v31 use the same key, with v26's blue KE bars.
- **5. Learner question.** The route's placeholder is replaced by "Why does the same change in momentum take a smaller force when it happens over a longer time?". Root to enter it in the route.
- **6. Site link form.** As v08.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v16, v06 and v28 at Year 11 entry; check that the derivation in scene 3 is followable at speaking pace; that the bar growing with the area makes "impulse is change in momentum" feel caused; that the equal-area lanes land before the cricket ball numbers; that the average force is understood as the area flattened; that the sign in scene 6 is explained, not just written; that the bounce in scene 8 reads as a surprise and not a new rule; that the cards give nothing away), then the Codex physics check and error check.
- The bar-and-area coupling (3, 5), the slowed stops with their equal-area shapes (6, 7) and the Δp arrow (8) carry the explanation; judge them at playback speed in the voiced preview.
- Revision 2 (3 Nov, brief 153): all four should-fixes applied; none rejected. The reserve cut was not needed (about 566 s). Open decision 1 is closed: v28's chip already names this video's question.
