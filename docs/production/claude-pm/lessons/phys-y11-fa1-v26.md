# Year 11 Physics FA1 V26 (Physics 2025, Year 11, Focus Area 1): How does a force along the motion change an object's kinetic energy? (design)

Status: Revision 1 (2 Nov). Needs independent student learning review (key `p-y11-v26`, `docs/production/student-learning-review.md`), a Codex physics check and a Codex error check before build. Voice: Google AI Studio after the brief 124 pilot; physics follows Year 12 Maths and Year 11 Biology in the voicing queue. Nothing recorded; human listening pending. Plates: no new plate (the blue car, v24's track and trolley, v21's ramp kit, v23's spring launcher, the v12 box and sledge; see Assets).

Narration 6,255 characters, 18 scenes, about 570 s (9.5 minutes) including two 3 s prediction countdowns, two 10 s attempt countdowns and the notes hold, counted by script with the build parser rules (see "Narration length estimate").

Scope: twenty-sixth video in playlist order of the Year 11 Physics (2025) Focus Area 1 route and the first of three energy videos (v26 work and kinetic energy, v27 gravitational potential and kinetic energy, v28 conservation of mechanical energy). v25 (First Nations use of inclined planes) is on cultural hold, so v24 hands off to this video (root decision 14, v13 to v24 file). Templates: `phys-y11-fa1-v22.md` and `phys-y11-fa1-v23.md` (section structure, calculation layout, house conventions), `phys-y11-fa1-v03.md` (components as shadows), `math-a12-d10.md` (aligned algebra with result lines on cues). Opening frame: `phys-y11-fa1-v24.md` scene 16 (Revision 1). Pre-design pack: none exists; the pack work (site reading, recalculation, misconceptions, site errors) is done in this file. Site lesson read in full (2 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa1-fundamentals-of-mechanics/lesson24.sa.html` (orient and predict, intentions and key terms, work: transferring energy with a force, the work-energy theorem with `we-1`, apply, conservative vs non-conservative forces, independent practice, retrieve). Route entry: `phys-y11-fa1-v26` in `../../phys-y11-video-route.json` (status "proposed"; placeholder question). Route start: "Start with Work and Kinetic Energy. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions." Route stop: "Stop after the learner can answer: How can I explain and apply work and kinetic energy? Teach only the listed actions; the next video owns its separate question." Next (route, placeholder wording): "phys-y11-fa1-v27: How can I explain and apply gravitational and kinetic energy?" (v27's design uses "How does a change in height store energy, and how does speed set kinetic energy?").

Owner rules applied: as v21 to v24 (2025 syllabus only; no people, hands or faces: the trolley is pulled by a coded cord leaving the frame, the crate is fired by v23's spring launcher, the box is moved by a winch rope leaving the frame, the cars have empty seats; objects painted at native aspect, diagrams, bars and graphs coded; one reasoning stage at a time; the derivation one line per cue; calculations as task, equation and grouped givens with units; 3 s in-teaching predictions; "Pause here to answer." with a 10 s countdown and the full worded question; brief feedback with one crossed mistake; original HSC-style questions; key-notes hold; Australian spelling; no em dashes; v03, v09, v16, v22, v23 and v24 recalled in a sentence each).

Syllabus content points (Physics 11-12 (2025), Year 11, Focus Area 1, group "Momentum and energy"; local ledger IDs with NESA content-system codenames), quoted from the route JSON `syllabusActions` in linear form:

- P25-FA1-G5-01 `ci56b6c521`: "Compare conservative forces and non-conservative forces"
- P25-FA1-G5-03 `ci2e0b478b`: "Relate the work done on an object to the change in its kinetic energy during accelerated rectilinear motion using W = F ∥ s = Fs cos θ"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

**Boundary:** starts from v24's handoff (the track at 20° with the trolley at the bottom, the dashed along-track force "mg sin θ", the grey "s" and the chip "Next: work and kinetic energy"); work as the energy a force transfers by moving an object, W = Fs along the motion, joules; no displacement, no work; an angled force: only the part along the displacement, W = F∥ s = Fs cos θ, with the sign of the work from the angle (positive, zero, negative) (`ci2e0b478b`); the work-energy theorem derived for a constant net force in a straight line (F = ma with v² = u² + 2as), naming KE = ½mv²; net work and negative work (braking); the hook answered from the v² in KE; conservative and non-conservative forces compared by the round-trip test and the path test (`ci56b6c521`). Stops at the comparison. Not taught: gravitational potential energy, ΔU = mgΔh and the "stored" account (v27; this video ends on the question of where gravity's energy was kept); KE problem practice beyond what the theorem needs (v27 owns `cief8ea610`); conservation of mechanical energy and its conditions (v28); power (not in this group); varying forces and force-displacement graphs (not in the 2025 Year 11 point).

## Decisions

- **Learner question (route placeholder rewritten; adopted by root in decision 14 of the v13 to v24 file).** "How does a force along the motion change an object's kinetic energy?" The answer, built in order: a force does work when it moves an object, W = Fs (2); only the part along the motion counts, W = F∥ s = Fs cos θ, and the angle sets the sign (3); for a constant net force, F = ma and v² = u² + 2as combine into Fs = ½mv² − ½mu², so the net work equals the change in kinetic energy (4); the theorem gives a speed (5); the same work gives the same energy to any mass, but a smaller speed to a bigger mass (6, 7); negative net work removes energy, so brakes need a distance (8); KE goes with v², so twice the speed needs four times the braking distance (9); gravity's work comes back over a round trip, friction's doesn't: conservative and non-conservative (10, 11).
- **The hook (site hook, made a race against a prediction).** The site's braking puzzle: the same car brakes from 50 km h⁻¹ and from 100 km h⁻¹ with the same braking force. "Twice the braking distance, or more than twice?" 3 s prediction; answered in scene 9 (four times: about 24 m and 96 m for the 1500 kg car with 6000 N of braking force). Said as "braking distance" with the tag "same braking force" (site error 1: the site says "stopping distance", which also includes the reaction distance).
- **The cause made visible (owner quality bar).** (2) As the trolley moves, a grey dimension line "s" grows under it and a work counter "W = F × s" ticks up in step. (3) The pull swings from 0° to 180° about the trolley; its shadow on the track (v03's projection) shrinks to nothing at 90° and flips backwards past it, with the work readout following cos θ through zero to negative. (4) **Energy bars** first appear: an amber-outlined "work done by F" bar and a blue "KE" bar rise together, joule for joule, driven by the same s(t) as the trolley. (6, 7) Two trolleys on twin tracks under the same pull: their work and KE bars finish at the same height (400 J) while the heavier one's speed readout ends lower. (8, 9) Braking: the KE bar drains in equal slabs per metre ("6000 J each metre"); at 100 km h⁻¹ the starting bar is four times as tall, so it drains over four times the distance. (10) The round trip: signed work tallies for gravity (−127 J, +127 J, total 0) and friction (−33 J, −33 J, total −66 J) fill beside v23's crate as it goes up and comes back; a warm-grey "heat" bar fills from the friction tally and a faint shimmer lies on the ramp surface. (11) Two routes to the same bench height: gravity's tally finishes equal on both; friction's tally grows with the ramp's length.
- **Derivation (syllabus link; site card 2 gives only the result).** F = ma (v16); v² = u² + 2as (v09); multiply by ½m: ½mv² = ½mu² + mas; mas = Fs; so Fs = ½mv² − ½mu² = ΔKE. Conditions on screen: "constant net force along a straight line" (the syllabus's "accelerated rectilinear motion"). The syllabus form "W = F∥ s = Fs cos θ" is boxed in scene 3 before the theorem.
- **Worked examples (site values, unchanged; precision stated).** (5) Site activity 1: 40 N along the motion, 5.0 kg trolley from rest, 10 m, frictionless: W = 400 J (4.0 × 10² J), v² = 160, v = 12.6 m s⁻¹, given as 13 m s⁻¹ to two significant figures. (8) Site `we-1`: 1500 kg car, 20 m s⁻¹, braking force 6000 N: KE = 3.0 × 10⁵ J, s = 50 m (two figures). The site's quarter-work part ("what fraction of the speed for a quarter of the work") is replaced by the twice-the-mass prediction (6, 7), which tests the same v² idea while making "work sets the energy, not the speed" visible; the quarter-work idea returns in v27's KE problems.
- **Second prediction (3 s, scene 6).** "Same force, same distance, twice the mass: more kinetic energy, less, or the same?" The same (400 J), at 8.9 m s⁻¹ instead of 12.6 m s⁻¹. This blocks "a heavier object gains less energy from the same push".
- **Conservative and non-conservative (site card 3, made into two tests).** Round trip: v23's 20.0 kg crate launched up the rough 30° ramp at 4.0 m s⁻¹, back at 3.1 m s⁻¹; gravity's work −127 J up and +127 J down (total 0); friction's work −33 J each way (total −66 J); KE 160 J at launch, 94 J on return (author note e). Path test: gravity does the same work on a straight lift and up a ramp to the same height because the smaller along-slope part, mg sin θ (v22), acts over a longer length, and L sin θ is the height; friction's work grows with the path. Definitions on screen: conservative: "work depends only on start and end points; zero over a round trip; the energy can be recovered" (gravity); non-conservative: "work depends on the path" (friction and air resistance, which take energy away as heat and sound; also a push from an engine or rope). The engine-or-rope example blocks the site's overgeneralisation that every non-conservative force dissipates (site error 3).
- **Attempts (original, HSC style).** (A1) A 12.0 kg sled pulled from rest on smooth, level ice by a 60.0 N rope at 25.0° for 15.0 m: W = 816 J, v = 11.7 m s⁻¹. Crossed: "W = Fs = 900 J" (the angle ignored). (A2) A winch moves a 5.00 kg box onto a bench 0.800 m higher by a straight lift and by a 2.00 m rough ramp (friction 12.0 N): gravity −39.2 J on both routes; friction −24.0 J on the ramp only; gravity conservative. Crossed: "gravity does −98.0 J on the ramp" (the ramp length used for gravity). Neither card shows arrows or answers.
- **Mistake scene:** none separate. "Holding or supporting something does work" (2: the shelf); "every force on a moving object does work" (3: weight and F_N on the level track); "the whole force counts at an angle" (3, feedback 1 crossed); "more mass gains less energy from the same work" (6, 7); "twice the speed, twice the braking distance" (1, 9); "friction gives energy back on the way down like gravity" (10); "gravity does more work on a longer path" (11, feedback 2 crossed).
- **Memory aid:** "With, against, across: plus, minus, zero." (the sign of a force's work; see "Memory aid check").
- **Handoff (route next).** v23's crate paused at the top of its slide on the ramp; gravity's tally "−127 J up, +127 J down: total 0"; an empty dashed bar beside the crate labelled "stored?"; chip "Next: How does a change in height store energy, and how does speed set kinetic energy?". This is the frame v27 opens on.
- **Site sources used:** hook (braking, corrected to braking distance); warm-up (holding a box still: no work, shown with a shelf, no person); key terms (work, KE, conservative, non-conservative); misconceptions 1 and 2 (scenes 2, 9); card 1 (W = Fs, W = Fs cos θ, the 90° case); card 2 and `we-1` (scenes 4, 8); quick check (2.0 kg to 6.0 m s⁻¹, 36 J: used as author note f, not voiced); activity 1 (scene 5); card 3 (scenes 10, 11); the match task (+50 J, −50 J, 0 J, 0 J: the sign scene, author note c); Q3 model answer's closed-loop test (scene 10, corrected). Not used: the odd-one-out item (pendulum and incline gravity: v28 uses the pendulum); Q1 and Q2 (car KE changes: v27's KE practice draws on Q1's numbers if needed; A1 and A2 here are original).
- **Site corrections (quoted from site lesson 24, read 2 Nov; for `../site-corrections-phys-y11.md`; none of these rows is already logged):**
  1. Hook: "A car braking from $100\ \text{km/h}$ needs four times the stopping distance of one at $50\ \text{km/h}$, not twice." Stopping distance includes the reaction distance, which only doubles. Suggest: "needs four times the braking distance, with the same braking force".
  2. Dot point lines under activity 1 and card 3 (twice): "Relate the work done on an object to the change in its kinetic energy during accelerated rectilinear motion using W = Fs = ΔKE". The 2025 syllabus point reads "... using W = F ∥ s = Fs cos θ". Suggest quoting it verbatim.
  3. Key terms, non-conservative force: "A force (e.g. friction) that dissipates energy as heat; work done depends on the path and is not recoverable." Not every non-conservative force dissipates (an engine's push or a rope's pull adds energy). Same idea in the Q3 model answer: "for a non-conservative force it is negative, because energy has left the system". Suggest: "work depends on the path, so the work over a closed loop is not zero; for kinetic friction it is negative and the energy leaves as heat."
  4. Quick check, option B: "$36\ \text{J}$ ($\tfrac{1}{2}mv^2$)". The option text gives away the method beside the correct value. Suggest removing the bracket.
  - Checked and correct: card 1 (W = Fs cos θ; zero at 90°); `we-1` (3.0 × 10⁵ J; 50 m; the quadrupling check, which is valid for braking distance at a fixed braking force); activity 1 (400 J; 12.6 m s⁻¹; a quarter of the work gives half the speed); the match task; Q1 (2.0 × 10⁵ J) and Q2 (2100 N, with its correct net-force note).
- **Cause chain taught, in order:** (1) a braking puzzle that needs a cause (1); (2) work is force times distance along the motion; no movement, no work (2); (3) only the part along the displacement counts; the angle sets the sign (3); (4) the work-energy theorem from F = ma and v² = u² + 2as (4); (5) work gives a speed (5); (6) the same work gives the same energy, not the same speed (6, 7); (7) negative net work removes energy; braking distance (8); (8) KE goes with v², so the braking distance does too (9); (9) gravity's work returns over a round trip, friction's doesn't (10); (10) the definitions and the path test (11); (11) memory aid (12).
- **Entry knowledge (route `entryKnowledge`; v25 on hold, so v24 is the previous video):** Stage 5 (energy as a quantity in joules; kinetic energy named but not calculated is assumed at most; rearranging; squares and square roots). From FA1, recalled in a line each: v03 (a vector's shadow along a direction, F cos θ), v09 (v² = u² + 2as), v16 (F_net = ma), v22 (the along-slope part of the weight, mg sin θ), v23 (the crate launched up the rough ramp returns slower), v24 (the force along the track and the distance s).
- **Learner-visible vocabulary (plain meaning at first use):** work W (the energy a force transfers to an object by pushing it along, scene 2); joule (one newton pushing through one metre, scene 2); displacement (recalled: how far and which way it moved, scene 3); kinetic energy KE (energy of motion, ½mv², scene 4); net work (the total of all the forces' works, scene 8); conservative force (its work depends only on start and end points, so a round trip gives zero and the energy can be recovered, scene 11); non-conservative force (its work depends on the path, scene 11); heat (said as "heat in the warm surfaces"; thermal energy is not named, scene 10).
- **Legacy logic ported:** none. Drawing parts only: `Arrow`, `Label`, `Dot`, `Panel` (`course-kit.tsx`).
- **New explainer motion (coded unless a plate is named):** **`EnergyBars`** (new physics part, used again in v27 and v28: vertical bars on a shared joule scale with live readouts, driven by the same clock and s(t) as the object; bar types "work done by F" (amber outline, diagonal hatch, signed: negative work hangs below the zero line), "KE" (blue), and from this video "heat" (warm grey); a slab mode that removes equal blocks per metre; v27 adds "U" (green) and v28 a dashed "total" outline); **`WorkTally`** (signed per-force tallies that add a segment for each leg of a motion, with a total); **shadow projection** (v03's projection onto the track, with the angle swept); **twin tracks** (two trolleys under the same pull from one clock); **braking lanes** (two road lanes with the same car plate, braking under the same force, stop markers and dimension lines); v22's **`RampMotion`** with phases (v23's up, stop, down, with its friction swing) and v21's **`TiltRamp`**; `AlignedAlgebra`; `Countdown` (3 s, 10 s); `QuestionCard` (subject "Physics"); `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Colour key (course decisions, applied):** forces amber with a dark ink outline (net force the same with a double shaft, "F_net"); velocity teal; acceleration violet (not needed here); displacement a grey dimension arrow "s" (as v24's handoff); energy bars: KE blue, work done by a force amber-outlined with hatching, heat warm grey (gravitational potential energy green from v27); angle arcs amber; crossed items muted red with a scribble cross. Root to confirm the energy colours as course-wide (open decision 1).
- **Board layout (constant):** heading top-left; the moving object in the left 60 per cent; energy bars or the working in the right column; the bars sit on one joule scale per scene, with the scale chip visible.
- **No human figures.**
- **Author notes (not learner copy):**
  (a) Opening: v24 scene 16 frame (track at 20°, trolley at the bottom, dashed along-track force, grey "s", conclusion box and graph at right, chip "Next: work and kinetic energy"). v24's dashed force is drawn purple in its design; at the build it is amber (root decision 1, v13 to v24 file), so both frames match.
  (b) Scene 2 pull: 40 N along the motion on the 5.0 kg trolley, smooth level track; the counter shows W = 40 × s live to 10 m (400 J). Time to 10 m from rest at a = 8.0 m s⁻²: t = 1.58 s, played at 0.5 × speed (tag "slowed down").
  (c) Scene 3 sweep (40 N over 10 m, readouts as W = 400 cos θ J): 0° 400 J; 30° 346 J; 60° 200 J; 90° 0 J; 120° −200 J; 180° −400 J. Only 0°, 90° and 180° are spoken.
  (d) Scene 6, 7: 10.0 kg trolley, same 40 N over 10 m: W = 400 J, v² = 80.0, v = 8.94 m s⁻¹ (said "eight point nine"); a = 4.0 m s⁻², t = 2.24 s (the 5.0 kg trolley 1.58 s); both played at 0.5 × speed from one clock, so the lighter one arrives first and faster, with equal bars.
  (e) Scene 10, v23's numbers: m = 20.0 kg, θ = 30.0°, μk = 0.15, launch 4.0 m s⁻¹; mg = 196 N; mg sin θ = 98.0 N; f = 0.15 × 196 × cos 30.0° = 25.5 N; distance up 1.30 m (1.296); gravity's work up −98.0 × 1.296 = −127 J, down +127 J; friction's work −25.46 × 1.296 = −33.0 J each way, −66.0 J in all; KE 160 J at launch, 94.0 J on return, v = 3.07 m s⁻¹ (v23 says 3.1). Height risen 0.648 m (not shown).
  (f) Site quick check (not voiced): ½ × 2.0 × 6.0² = 36 J.
  (g) Scene 9: 50 km h⁻¹ = 13.9 m s⁻¹, KE = 1.45 × 10⁵ J, braking distance 24.1 m; 100 km h⁻¹ = 27.8 m s⁻¹, KE = 5.79 × 10⁵ J, 96.5 m; ratio exactly 4. Shown as "about 24 m" and "about 96 m" with "1500 kg, 6000 N braking force" small; braking deceleration 4.0 m s⁻² (plausible wet-to-dry road braking; a firm stop). The reaction distance is not shown; the tag "braking distance only, same braking force" is on screen.
  (h) Scene 11 path test (illustrative, no numbers spoken): bench 0.80 m up; straight lift and a 2.0 m ramp; on the ramp the along-slope part mg sin θ with sin θ = 0.80 ÷ 2.0 = 0.40 (θ = 23.6°), so mg sin θ × 2.0 = mg × 0.80. Screen readouts for a 5.00 kg box would duplicate A2, so the scene shows symbols only ("mg × h" and "mg sin θ × L = mg × h").
  (i) A1: W = 60.0 × 15.0 × cos 25.0° = 815.7 = 816 J; v = √(2 × 815.7 ÷ 12.0) = 11.66 = 11.7 m s⁻¹; crossed 900 J (v would be 12.2). The rope's vertical part 25.4 N is less than the weight 118 N, so the sled stays on the ice (not shown).
  (j) A2: gravity −5.00 × 9.80 × 0.800 = −39.2 J on both routes (the ramp: 49.0 × sin 23.58° × 2.00 = 19.6 × 2.00 = 39.2); friction −12.0 × 2.00 = −24.0 J; crossed −49.0 × 2.00 = −98.0 J.
  (k) Pronunciations: "W equals F s cos theta"; "half m v squared"; "three point oh times ten to the five joules"; "minus one hundred and twenty-seven joules".

Main question: *Twice the speed: twice the braking distance, or more? And how does a force along the motion change an object's kinetic energy?*
Entry knowledge (Stage 5 energy and rearranging; v03 shadows; v09 v² = u² + 2as; v16 F_net = ma; v22 mg sin θ; v23 the crate's round trip; v24 force and distance along the track).
Stops after: W = F∥ s = Fs cos θ with its sign; the work-energy theorem for a constant net force in a straight line, KE = ½mv²; net and negative work; braking distance and v²; conservative and non-conservative forces by the round-trip and path tests. No potential energy, no conservation law.
Handoff: v27, how a change in height stores energy and how speed sets kinetic energy.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key: see Decisions (forces amber with ink outline; velocity teal; displacement grey "s"; KE bar blue; work bars amber-outlined and hatched; heat bar warm grey; crossed items muted red).

### 1. hook (twice the speed, twice the distance?)
> Last time, a force along the track sped the trolley up over a distance s. Today: what does force times distance actually do? First, a puzzle. A car brakes hard from fifty kilometres per hour. Then the same car, with the same braking force, brakes from a hundred. Twice the speed. Does it need twice the braking distance, or more than **twice**?

Visual: opens on v24's last frame (author note a). The "Next" chip becomes the heading: "Work and kinetic energy"; the graph and conclusion box fade. On "force times distance" the amber along-track arrow and the grey "s" glow together. On "a puzzle" clear change to a road strip (side view, coded asphalt band, two lanes stacked). Lane 1: `b4-car-blue-v1.png` with a speed chip "50 km h⁻¹" and a teal velocity arrow; on "fifty kilometres per hour" an amber braking-force arrow points backwards from the car ("braking force"), the velocity arrow shrinks, the car stops, and a grey dimension line marks "braking distance d". Lane 2: the same plate at the start line, chip "100 km h⁻¹", the same braking arrow drawn ghosted (tag "same car, same braking force"), and a "?" at the far end. On "twice" chips "2d?" and "more than 2d?" and a 3-second countdown ring.

### 2. what work means
> In physics, work is the energy a force transfers to an object by pushing it along. For a steady force along the motion, work is force times distance. W equals F **s**. One joule is one newton pushing through one **metre**. No movement, no work. A shelf pushes up on a box all day, but the box doesn't move, so the shelf does no work on **it**.

Visual: the road dims to a corner thumbnail (the "?" kept). Left: v24's track laid level (`y11p-dynamics-track-v1.png`) with the trolley (`y11p-dynamics-trolley-v1.png`), a coded cord leaving the frame to the right, an amber arrow along it "F = 40 N" (tag "steady pull, smooth track"). On "s" the trolley moves (author note b, tag "slowed down"); a grey dimension line "s" grows under it; right column counter "W = F × s" ticking "40 N × 2.5 m = 100 J" to "40 N × 10 m = 400 J"; boxed "W = Fs (force along the motion)". On "metre" a small chip "1 J = 1 N × 1 m". On "No movement" the trolley fades; `y11p-box-v1.png` sits on a coded wall shelf; an amber arrow "F_N" points up from the shelf into the box; a grey chip "s = 0" and the readout "W = F_N × 0 = 0 J"; on "it" the arrow stays bright and the readout glows (tag "a force, but no work").

### 3. only the part along the motion
> What if the force pulls at an angle? Only its shadow along the motion pushes the object along. That part is F cos theta, with theta the angle between the force and the **displacement**. So W equals F parallel times s, or F s cos theta. Swing the angle. At zero, cos theta is one: full work. At ninety degrees, cos theta is **zero**, so a force across the motion does no work. So the weight and normal force do no work on a level track. Past ninety, cos theta is negative, so the work is **negative**. Friction and brakes take energy **away**.

Visual: the trolley returns on the level track; the cord now rises at 30°; the amber arrow "F" along it; the grey "s" under the trolley. Pale light lines drop from the arrow's tip straight down to the track; the dashed amber shadow along the track (v03's projection); on "displacement" the shadow turns solid, labelled "F∥ = F cos θ", the amber θ arc between F and s. `AlignedAlgebra`: "W = F∥ s"; "= Fs cos θ", boxed with the syllabus form "W = F∥ s = Fs cos θ" (tag "θ: angle between F and s"). On "swing" the sweep (author note c): the arrow rotates about the trolley's hook from 0° to 180°; the shadow shrinks, vanishes at 90° and grows backwards; readout "W = 400 cos θ J" live with "cos θ" beside it. On "zero" the sweep pauses at 90°: readout "0 J"; the weight W = mg (amber, down) and F_N (amber, up) draw on the trolley with chips "90° to s: W = 0" on each. On "negative" the sweep continues to 180°: readout "−400 J", the arrow pointing backwards, chip "θ > 90°: negative work". On "away" the backwards arrow relabels "friction or brakes".

### 4. the work-energy theorem
> Where does that energy go? Pull a five point oh kilogram trolley along a smooth, level track with a steady forty newton net force. Newton's second law: F equals m a. The motion equation: v squared equals u squared plus two a **s**. Multiply by half m, and half m v squared equals half m u squared, plus m a s. But m a s is just F s, the **work**. So F s equals half m v squared, minus half m u squared. Half m v squared is kinetic energy, the energy of **motion**. The net work equals the change in kinetic energy: the work-energy theorem. Watch the bars grow together, joule for **joule**.

Visual: the level track and trolley at the left, the pull back along the motion ("F = 40 N", tag "net force: smooth, level track"), chip "m = 5.0 kg". Right column `AlignedAlgebra`, one row per sentence: "F = ma" (grey "v16"); on "s" "v² = u² + 2as" (grey "v09"); "× ½m: ½mv² = ½mu² + mas"; on "work" "mas" rings and becomes "Fs"; "Fs = ½mv² − ½mu²"; on "motion" "½mv²" rings: "KE = ½mv² (energy of motion, J)"; boxed "W_net = ΔKE = ½mv² − ½mu²" with the tag "constant net force, straight line". On "Watch" the algebra slides up and `EnergyBars` appear below it: "work done by F" (amber outline, hatched) and "KE" (blue) on one scale (0 to 400 J). The trolley runs from rest over 10 m (author note b, slowed); on "joule" both bars rise together with matching readouts ("100 J ... 400 J"), a teal velocity arrow lengthening above the trolley.

### 5. worked example: speed from work
> Task: find the trolley's speed after ten metres, from rest. Givens: forty newtons along the motion, ten metres, five point oh kilograms, smooth track. The work is forty times ten, four hundred **joules**, and from rest, all of it becomes kinetic energy. Half times five times v squared equals four hundred, so v squared is one hundred and **sixty**, and v is twelve point six, or thirteen metres per second to two significant **figures**.

Visual: clear change to the calculation layout; the trolley at the 10 m mark at the left with its two full bars small beside it. Task strip "Find the speed after 10 m (from rest)". Equation strip "W_net = ΔKE = ½mv² − ½mu²". Givens group (navy): "F = 40 N along s; s = 10 m"; "m = 5.0 kg; u = 0" (tag "smooth track; site activity values"). Rows, one per cue: on "joules" "W = Fs = 40 × 10 = 400 J"; "ΔKE = 400 J (from 0)"; on "sixty" "½ × 5.0 × v² = 400, v² = 160 m² s⁻²"; on "figures" "v = √160 = 12.6 ≈ 13 m s⁻¹ (2 s.f.)", boxed.

### 6. prediction: twice the mass
> Now a ten kilogram trolley, twice the mass, gets the same force over the same distance. Does it gain more kinetic energy, less, or the **same**?

Visual: the calculation layout shrinks to a strip at the top (boxed "400 J, 12.6 m s⁻¹" kept). Twin tracks at the left: the 5.0 kg trolley (top) and a 10.0 kg trolley (bottom: the same trolley plate with `y11p-trolley-mass-v1.png` stacked on it, chip "10.0 kg"), each with "F = 40 N" and a start line, a finish line at 10 m. On "same" chips "more?", "less?", "same?" and a 3-second countdown ring.

### 7. same work, same energy, less speed
> The same. Same force and distance means the same four hundred joules of work, so the same kinetic energy. But with twice the mass, half m v squared reaches four hundred at a lower **speed**: v is only eight point nine metres per **second**. Work sets the energy. Mass decides how much speed it **buys**.

Visual: the twin run plays (author note d, tag "slowed down"): both trolleys start together; the lighter one pulls ahead and crosses first. Beside each, its own pair of `EnergyBars` rises; both pairs finish level at "400 J" (a dashed level line joins them). On "speed" each trolley's teal velocity arrow and speed readout lights: "12.6 m s⁻¹" and, on "second", "8.9 m s⁻¹" (row "½ × 10.0 × v² = 400, v² = 80, v = 8.9 m s⁻¹"). On "buys" chip "same work → same ΔKE; more mass → less speed".

### 8. net work and braking
> When several forces act, it's the net work, the total of all their works, that equals the change in kinetic energy. Negative net work slows an object down. Task: a fifteen hundred kilogram car brakes from twenty metres per second with a steady six thousand newton braking force. Find the braking distance. Its kinetic energy is half m v squared, three point oh times ten to the five **joules**. The brakes push backwards as the car moves forwards, so their negative work removes all of it. Six thousand times s equals three point oh times ten to the five, so s is fifty **metres**.

Visual: clear change to the calculation layout with the road strip at the left: `b4-car-blue-v1.png` with a teal velocity arrow "20 m s⁻¹", the weight and F_N on it in amber with small "W = 0" chips (across the motion), and the amber backwards "braking force 6000 N". Task strip "Find the braking distance". Equation strip "W_net = ΔKE". Givens group: "m = 1500 kg; u = 20 m s⁻¹; v = 0"; "braking force F = 6000 N (the only horizontal force)" (tag "site worked example"). Rows: on "joules" "KE = ½ × 1500 × 20² = 3.0 × 10⁵ J"; "W_brakes = −F s (θ = 180°)"; on "metres" "−6000 × s = 0 − 3.0 × 10⁵, s = 50 m", boxed. As the last row writes, the car brakes along the strip; its blue KE bar drains in equal slabs, one per metre (tag "6000 J removed each metre"), reaching zero as the car stops at the "50 m" marker.

### 9. the puzzle answered
> Now the puzzle. Kinetic energy goes with speed squared, so twice the speed gives four times the energy. The brakes remove the same energy each metre, so they need four times the **distance**. For this car, about twenty-four metres from fifty kilometres per hour, and about ninety-six from a hundred. Four times, not **twice**.

Visual: the two braking lanes from scene 1 return, larger. Beside each car its blue KE bar at the start: lane 1 "1.4 × 10⁵ J", lane 2 four times as tall "5.8 × 10⁵ J" (chip "v × 2 → v² × 4"). On "distance" both cars brake under the same amber arrow; each bar drains in equal slabs per metre ("6000 J each metre"); lane 1 stops at "about 24 m", lane 2 rolls on and stops at "about 96 m" (author note g); dimension lines under both. On "twice" the scene 1 chip "2d?" takes a scribble cross and "4d" is ringed; tag "braking distance only, same braking force".

### 10. a round trip: what comes back
> One more idea: some forces give energy back, and some don't. Remember the crate launched up a rough ramp, which came back slower than it left? Follow the work. Going up, gravity pulls against the motion: minus one hundred and twenty-seven **joules**. Coming down, it pulls with the motion: plus one hundred and twenty-seven. Total, **zero**. Friction always opposes the sliding, so it does minus thirty-three joules up, and minus thirty-three **down**. Minus sixty-six joules, gone as heat in the warm surfaces, so the crate came back **slower**.

Visual: clear change to v23's set-up (author note e): the plank at 30° on its hinge block and stand (v21's ramp kit), `y11p-box-v1.png` as the crate, `y11p-spring-launcher-v1.png` at the foot. Chips "launched: 4.0 m s⁻¹" and (grey, waiting) "returns: 3.1 m s⁻¹". The crate fires up the slope (`RampMotion`, phases up, stop, down). Right column `WorkTally` with two rows, "gravity" and "friction". Going up: the amber weight's along-slope part (dashed, "mg sin θ") and the friction arrow both point down the slope; on "joules" the gravity row adds "−127 J". The crate stops and slides back; on "plus" the gravity row adds "+127 J"; on "zero" its total "0 J" boxes (tag "given back"). The friction row replays both legs: "−33 J" (up), and on "down" "−33 J" (down; the friction arrow swings 180°, v23's friction swing). Total "−66 J"; a warm-grey "heat" bar fills beside the tally to 66 J and a faint coded shimmer lies along the plank's surface. On "slower" a small pair of KE bars: "160 J at launch" and "94 J on return", the gap matching the heat bar.

### 11. conservative and non-conservative
> Gravity is a conservative force. Its work depends only on where the object starts and finishes, so a round trip gives zero, and the energy can be recovered. Lift a box onto a bench, or drag it up a ramp to the same height. On the ramp, m g sin theta is smaller but acts over a longer distance, so gravity's work is the same either **way**. Friction is non-conservative. Its work depends on the path, and its energy doesn't come back as motion. Air resistance is non-conservative too, and so is a push from an engine or **rope**.

Visual: two definition panels write, one per cue: "Conservative (gravity): work depends only on start and end points. Round trip: zero. Energy can be recovered." and, on "Friction", "Non-conservative (friction, air resistance): work depends on the path. Energy leaves as heat and sound." On "Lift a box" a side panel: a coded floor and a bench step (height "h"), `y11p-box-v1.png` at the floor; route 1 a dashed line straight up, route 2 a coded ramp of length "L" (author note h); the box travels each route in turn (a coded winch rope leaving the frame pulls it); a gravity tally under each route: route 1 "−mg × h", route 2 "−mg sin θ × L" with "L sin θ = h" ringed on the ramp's triangle; on "way" both tallies read "−mgh" and glow equal. A friction tally appears under route 2 only, growing as the box moves; a longer dotted zigzag route ghosts in with its friction tally growing further (tag "longer path, more friction work"). On "rope" a third chip under the non-conservative panel: "a push from an engine or rope (can add energy)".

### 12. memory aid
> For the sign of a force's work: with, against, across. Plus, minus, zero. With the motion, positive. Against it, negative. Across it, **none**.

Visual: the board clears to the level trolley with its grey "s". The handwritten line writes large: "With, against, across: plus, minus, zero." Under it, smaller: "θ between the force and the displacement: under 90°, over 90°, exactly 90°." On "with" a forward amber arrow pulses (chip "+"); on "against" a backwards arrow (chip "−"); on "none" an upward arrow (chip "0"). Hold about 2 seconds.

### 13. attempt 1 (countdown, 10 seconds)
> Your turn. A twelve point oh kilogram sled starts from rest on smooth, level ice. A rope pulls it with sixty point oh newtons of tension, at twenty-five point oh degrees above the horizontal, for fifteen point oh metres. Calculate the work done by the tension, and the sled's speed at the end. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Physics"), worded as printed, with a small sketch (`y11p-sledge-v1.png` on a coded ice line, a coded rope rising to the right with the "25.0°" arc only; no arrows, no labels on the rope): "A 12.0 kg sled starts from rest on smooth, level ice. A rope pulls the sled with a constant tension of 60.0 N at 25.0° above the horizontal, and the sled moves 15.0 m along the ice. (a) Calculate the work done on the sled by the tension. (b) Calculate the speed of the sled after it has moved 15.0 m. (3 marks)" Tag: "HSC-style question, written for HSCScience". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 1 (brief)
> Only the part along the motion counts: sixty times fifteen times cos twenty-five, eight hundred and sixteen **joules**. The weight and normal force are across the motion, so all of it becomes kinetic energy, and v is eleven point seven metres per **second**. Nine hundred joules forgets the **angle**.

Visual: card shrinks to the top; "smooth", "from rest" and "25.0°" underlined. Rows: on "joules" "W = Fs cos θ = 60.0 × 15.0 × cos 25.0° = 816 J"; chip "weight, F_N: 90° to s, W = 0"; on "second" "½ × 12.0 × v² = 816, v = 11.7 m s⁻¹", boxed. On "angle" a chip "W = Fs = 60.0 × 15.0 = 900 J" fades in and is crossed (caption "the angle forgotten"). Hold about 1 second.

### 15. attempt 2 (countdown, 10 seconds)
> Last one. A winch moves a five point oh oh kilogram box onto a bench zero point eight oh oh metres higher, by two routes: straight up, or two point oh oh metres up a rough ramp with twelve point oh newtons of kinetic friction. Calculate the work done by gravity on each route, and by friction on the ramp. Then explain which force is conservative. Pause here to answer.

Visual: `QuestionCard`, worded as printed, with an HSC-style line drawing (floor line, bench step, a vertical dashed route marked "route 1", a ramp line marked "route 2"; "0.800 m" on the bench height and "2.00 m" along the ramp; no arrows): "A winch moves a 5.00 kg box from the floor onto a bench 0.800 m higher, by two routes. Route 1 lifts the box straight up. Route 2 drags the box 2.00 m up a rough ramp, where the kinetic friction force on it is 12.0 N. Take g = 9.80 m s⁻². (a) Calculate the work done by gravity on the box for each route. (b) Calculate the work done by friction on route 2. (c) Use your answers to explain which of the two forces is conservative. (4 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 16. feedback 2 (brief)
> Gravity does minus m g h on both routes, minus thirty-nine point two **joules**, because only the height counts. Friction does minus twenty-four joules, on the ramp **only**. Gravity's work doesn't depend on the path, so it's conservative. Minus ninety-eight wrongly uses the ramp **length**.

Visual: card shrinks to the top; "0.800 m higher", "two routes" and "rough" underlined. Rows: on "joules" "(a) route 1: W_g = −mgh = −5.00 × 9.80 × 0.800 = −39.2 J"; "route 2: W_g = −mg sin θ × L = −mgh = −39.2 J" (grey "L sin θ = h"); on "only" "(b) W_f = −12.0 × 2.00 = −24.0 J"; "(c) gravity: same work on both paths: conservative; friction: path-dependent: non-conservative", boxed. On "length" a chip "W_g = −mg × 2.00 = −98.0 J" fades in and is crossed (caption "ramp length used for gravity"). Hold about 1 second.

### 17. handoff
> So work along the motion changes kinetic energy. Gravity gives back every joule it takes. But while the crate sat at the top, where was that energy kept? Next: how height stores energy, and how speed sets kinetic **energy**.

Visual: the memory line returns small at the top. The 30° ramp with the crate paused at the top of its slide (v23's set-up, launcher at the foot); gravity's tally beside it "up −127 J, down +127 J: total 0"; on "kept" an empty dashed bar beside the crate labelled "stored?". On "energy" the chip "Next: How does a change in height store energy, and how does speed set kinetic energy?". This is the final frame of the video (series rule). Hold about 2 seconds.

### 18. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Work: the energy a force transfers by moving an object. W = F∥ s = Fs cos θ, with θ the angle between the force and the displacement. Unit: joule (1 J = 1 N m). No displacement, no work.
2. θ < 90°: positive work; θ = 90°: zero; θ > 90°: negative work (friction, brakes).
3. Work-energy theorem (constant net force, straight line): W_net = ΔKE = ½mv² − ½mu², where KE = ½mv² is the energy of motion. Positive net work speeds up; negative net work slows down.
4. Conservative force (gravity): work depends only on start and end points; zero over a round trip; the energy can be recovered. Non-conservative force (friction, air resistance, an engine's push): work depends on the path; friction's energy leaves as heat.

Memory aid (large, on the notes screen): *With, against, across: plus, minus, zero.*

At the end the notes cross-fade back to scene 17's final frame (series rule).

## Teaching checks

- **Does it explain causes?** Why a shelf does no work: no displacement (2). Why only F cos θ counts: only the part along the motion pushes it along (3, the shadow). Why weight and F_N do no work on a level track: they are at 90° to the motion (3). Why work becomes KE: F = ma and v² = u² + 2as combine into Fs = ΔKE (4, with the bars rising together). Why a heavier trolley ends slower: the same work gives the same energy, and ½mv² reaches it at a lower v (7, shown with level bars and different speeds). Why braking distance goes with v²: equal energy removed per metre, and KE goes with v² (9, shown with slabs). Why the crate returns slower: friction does negative work both ways while gravity's cancels (10, shown with tallies and the heat bar). Why gravity does the same work on a ramp: a smaller force over a longer distance, L sin θ = h (11).
- **Misconceptions addressed:** holding or supporting does work (2); every force on a moving object does work (3); the whole force counts at an angle (3, feedback 1 crossed); a heavier object gains less energy from the same work (6, 7); twice the speed, twice the braking distance (1, 9); friction gives back energy on the return like gravity (10); gravity does more work along a longer path (11, feedback 2 crossed).
- **One idea at a time:** work along the motion (2), the angle (3), the theorem (4), its use (5), mass (6, 7), negative work (8), v² (9), the round trip (10), the definitions and path test (11); one derivation row per cue.
- **Video makes it easier:** the student watches the work counter tick with the distance (2), the shadow vanish at 90° and flip past it (3), two bars rise joule for joule (4), two trolleys finish with equal bars but different speeds (7), a fourfold bar drain over four times the distance (9), and gravity's tally cancel while friction's piles up as heat (10).
- **Response opportunity:** two 3 s predictions (1, 6); two unseen HSC-style tasks, 10 seconds each, every condition on the card (smooth, from rest, the angle; the routes, the friction), nothing answer-bearing. One crossed mistake each; feedback about 23 s and 22 s.
- **Avoided double teaching:** components as shadows (v03), v² = u² + 2as (v09), F = ma (v16), mg sin θ (v22) and the crate's round trip (v23) recalled in a line each.
- **Syllabus coverage:** `ci2e0b478b`: W = F∥ s = Fs cos θ (3, 12, A1), related to the change in KE during accelerated straight-line motion (4, 5, 7, 8, 9, A1); `ci56b6c521`: conservative and non-conservative forces compared by the round-trip and path tests, with examples (10, 11, A2).
- **Out of scope by design:** U and ΔU = mgΔh (v27); KE problem practice (v27); conservation of mechanical energy and its conditions (v28); power; variable forces.

## Practice questions and model answers

**Attempt 1 (scene 13; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "A 12.0 kg sled starts from rest on smooth, level ice. A rope pulls the sled with a constant tension of 60.0 N at 25.0° above the horizontal, and the sled moves 15.0 m along the ice. (a) Calculate the work done on the sled by the tension. (b) Calculate the speed of the sled after it has moved 15.0 m."
Model answer: (a) W = Fs cos θ = 60.0 × 15.0 × cos 25.0° = 816 J. (b) The weight and the normal force are perpendicular to the displacement and the ice is smooth, so W_net = 816 J = ΔKE = ½mv² − 0: v = √(2 × 816 ÷ 12.0) = 11.7 m s⁻¹. Classic mistake (crossed): "W = Fs = 900 J".

**Attempt 2 (scene 15; original wording, HSC style, 4 marks suggested).** "A winch moves a 5.00 kg box from the floor onto a bench 0.800 m higher, by two routes. Route 1 lifts the box straight up. Route 2 drags the box 2.00 m up a rough ramp, where the kinetic friction force on it is 12.0 N. Take g = 9.80 m s⁻². (a) Calculate the work done by gravity on the box for each route. (b) Calculate the work done by friction on route 2. (c) Use your answers to explain which of the two forces is conservative."
Model answer: (a) Route 1: the weight is opposite the displacement: W_g = −mgh = −5.00 × 9.80 × 0.800 = −39.2 J. Route 2: the along-slope part of the weight, mg sin θ, acts against the 2.00 m displacement, and 2.00 sin θ = 0.800 m, so W_g = −39.2 J. (b) W_f = −12.0 × 2.00 = −24.0 J. (c) Gravity does the same work on both routes between the same start and end points, so it is conservative; friction's work depends on the path (zero for the lift, −24.0 J for the ramp), so it is non-conservative. Classic mistake (crossed): "W_g = −mg × 2.00 = −98.0 J on the ramp".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hook and answer | 50 and 100 km h⁻¹; 13.9 and 27.8 m s⁻¹; 1.4 × 10⁵ and 5.8 × 10⁵ J; about 24 m and 96 m; ratio 4 | 1, 9 |
| Work along the motion | 40 N over 10 m: 400 J; 1 J = 1 N m; shelf 0 J | 2 |
| Angle sweep | 400 cos θ J: 0° 400; 30° 346; 60° 200; 90° 0; 120° −200; 180° −400 | 3 |
| Worked 1 (site activity) | W 400 J; v² 160; v 12.6 ≈ 13 m s⁻¹ | 4, 5 |
| Twice the mass | 10.0 kg; 400 J; v² 80; v 8.9 m s⁻¹ | 6, 7 |
| Worked 2 (site we-1) | 1500 kg; 20 m s⁻¹; 6000 N; 3.0 × 10⁵ J; 50 m; 6000 J per metre | 8 |
| Round trip (v23) | 20.0 kg; 30.0°; μk 0.15; 4.0 → 3.1 m s⁻¹; 1.30 m; gravity −127, +127, 0 J; friction −33, −33, −66 J; KE 160 → 94 J | 10, 17 |
| A1 | 816 J; 11.7 m s⁻¹; crossed 900 J | 13, 14 |
| A2 | −39.2 J (both routes); −24.0 J; crossed −98.0 J | 15, 16 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (2 Nov); Codex to re-check.

- 40 × 10 = 400; √(2 × 400 ÷ 5.0) = 12.649; √(2 × 400 ÷ 10.0) = 8.944; a = 8.0 and 4.0 m s⁻²; t = √(20 ÷ 8.0) = 1.581 s, √(20 ÷ 4.0) = 2.236 s.
- 400 cos θ: 30° 346.4; 60° 200.0; 120° −200.0.
- ½ × 1500 × 20² = 300 000; 300 000 ÷ 6000 = 50.0; 6000 ÷ 1500 = 4.0 m s⁻².
- 50 ÷ 3.6 = 13.889; ½ × 1500 × 13.889² = 144 676; ÷ 6000 = 24.11 m. 100 ÷ 3.6 = 27.778; ½ × 1500 × 27.778² = 578 704; ÷ 6000 = 96.45 m. Ratio 4.000.
- Round trip: 20.0 × 9.80 = 196; 196 sin 30° = 98.0; 0.15 × 196 × cos 30° = 25.461; up distance 16 ÷ (2 × 9.80 × (0.5 + 0.15 cos 30°)) = 1.2960; 98.0 × 1.2960 = 127.00; 25.461 × 1.2960 = 33.00; 160 − 66.00 = 94.00; √(2 × 94.00 ÷ 20.0) = 3.066.
- A1: 60.0 × 15.0 × cos 25° = 815.68; √(2 × 815.68 ÷ 12.0) = 11.660; √(2 × 900 ÷ 12.0) = 12.247; 60.0 sin 25° = 25.36 < 117.6.
- A2: 5.00 × 9.80 × 0.800 = 39.20; asin(0.400) = 23.58°; 49.0 × 0.400 × 2.00 = 39.20; 12.0 × 2.00 = 24.0; 49.0 × 2.00 = 98.0.

## Memory aid check

- **"With, against, across: plus, minus, zero."** Meaning, as said in scene 12: a force with a component along the motion does positive work, a force with a component against it does negative work, and a force at right angles to the motion does none. Assumptions checked: "with" and "against" refer to the angle θ between the force and the displacement (under 90°, over 90°), not to the force being exactly parallel; the second screen line states this. "Across" means exactly 90°, which W = Fs cos θ gives as zero (cos 90° = 0). It is true for constant forces over straight displacements (this video's scope). It survives the cases in the video: the pull (+), brakes and friction (−), the weight and F_N on a level track (0), gravity up the ramp (−) and down it (+). Introduced after the sweep (3), the theorem (4) and the round trip (10).
- **Considered, not used:** "Work is force times distance" (true only along the motion; it is the error A1 crosses); "KE: half m v squared, so speed counts double" ("double" is wrong: v² counts four times for twice the speed).

## Narration length estimate

Revision 1 count (2 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **6,255 characters**, 18 scenes. Characters per scene (1 to 18): 340, 331, 526, 574, 426, 140, 291, 573, 318, 530, 502, 139, 315, 289, 369, 280, 220, 75. At 13.3 characters per second the speech is about 470 s; add about 18 s of holds and settling (the slowed pulls in 2, 4 and 7, the sweep in 3, the braking drains in 8 and 9, the round trip in 10, the routes in 11, the 2-second memory hold), 6 s for two prediction countdowns, 20 s for two attempt countdowns, 2 s of feedback holds and about 54 s more of the quiet notes hold (about 100 s of holds): **about 570 s**, inside the 5,500 to 6,800 character band and at the 570 s cap. Two syllabus points, a derivation, two worked examples and a two-test comparison fill it without padding. Trims if the voiced preview runs long: the shelf sentences in scene 2 (about 115 characters) and the engine-or-rope sentence in scene 11 (about 60 characters, which would then live in the key notes only).

## Scene list and build ids

Lesson key `p-y11-v26` (route phys-y11-fa1-v26). Suggested explainer folder `src/explainer/lessons/phys-y11-fa1-v26` and build folder `docs/production/claude-pm/lessons/p-y11-v26` (root to confirm).

In order (kebab-case; 18 scene headings, all `### N.`): hook, what-work-means, angle-sweep, work-energy-theorem, worked-speed, mass-prediction, same-energy-less-speed, braking, puzzle-answered, round-trip, conservative-forces, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). The hook and mass-prediction carry 3 s countdowns inside explain scenes. Transitions (`pickTransition`): v24's last frame continues into scene 1 (camera continue: the same track and trolley), then a clear change to the road; 1 to 2 camera continue (the road shrinks to a corner); 2 to 3 camera continue (same track); 3 to 4 camera continue; 4 to 5 clear change to the calculation layout; 5 to 6 split board (twin tracks); 6 to 7 camera continue; 7 to 8 clear change to the calculation layout with the road; 8 to 9 camera continue (the lanes return); 9 to 10 clear change to the ramp; 10 to 11 split board; 11 to 12 board clear; attempts and feedback card shrink to the top; 16 to 17 board clear; 17 to 18 fade to the notes board, and 18 cross-fades back to 17's final frame.

Holds: hook and mass-prediction (3 s), attempt-1, attempt-2 (10 s after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/p-y11-v26-learning-review.md`, `science_check` = `checks/p-y11-v26-physics-check.md`.

## Assets

Have or requested earlier (uniform scaling only, never stretched; `y11p-` names are read as `phys-y11-` under root decision 4):
- `public/assets/biology/b4-car-blue-v1.png` (side view, facing right, empty seats; checked 2 Nov): scenes 1, 8, 9 (two copies in the lanes).
- v24's `y11p-dynamics-track-v1.png` and `y11p-dynamics-trolley-v1.png`: scenes 1 to 7, 12.
- v15's `y11p-trolley-mass-v1.png`: the extra mass on the 10.0 kg trolley, scenes 6, 7 (if its sidecar does not allow stacking on the dynamics trolley, use a coded mass block with the chip "10.0 kg"; open decision 3).
- `y11p-box-v1.png` (v12): the shelf box (2), the crate (10, 17) and the bench box (11).
- v21's ramp kit (`y11p-ramp-plank-v1.png`, `y11p-ramp-hinge-block-v1.png`, `y11p-retort-stand-v1.png`, `y11p-boss-crossbar-v1.png`): scenes 10, 17.
- v23's `y11p-spring-launcher-v1.png` and `y11p-spring-launcher-plunger-v1.png`: scenes 10, 17.
- `y11p-sledge-v1.png` (v12): the A1 sketch.

No new plate. Coded: the road strip and lanes, the wall shelf, the floor and bench step, the cords, ropes and winch rope, the ice line, the dimension lines, all arrows, shadows and arcs, the energy bars, slabs and tallies, the heat shimmer, the A2 line drawing.

Kit gaps (for the build brief):
1. **`EnergyBars`** (new, physics, reused in v27 and v28): bars on a shared joule scale with a visible scale chip and live readouts; driven by a clock and the object's s(t) or v(t); bar types "KE" (blue), "work done by F" (amber outline, hatched, signed below a zero line), "heat" (warm grey); a slab mode (equal blocks removed per metre); later types "U" (green, v27) and a dashed "total" outline (v28).
2. **`WorkTally`** (new, physics): per-force rows that add a signed segment for each leg of a motion and box a total.
3. v21's `TiltRamp`, v22's `RampMotion` with v23's phases and friction swing; v03's shadow projection with a live angle (brief 148's projection shadows); twin tracks and braking lanes on brief 148's `MotionTrack`. Lesson-local acceptable for Revision 1.

## Codex asset brief

None. No new plate is needed (all objects are reused; see Assets). One check for the build: confirm `y11p-trolley-mass-v1.png` can sit on `y11p-dynamics-trolley-v1.png` at a believable scale (uniform scaling only).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the animations: the energy bars and work counters are driven by the same s(t) as the moving object; the twin trolleys finish with equal 400 J bars at 12.6 and 8.9 m s⁻¹; the braking bars drain 6000 J per metre and stop at about 24 m and 96 m; the crate's tallies match author note e.
3. Confirm the physics claims: W = F∥ s = Fs cos θ with θ between force and displacement; zero work with no displacement and at 90°; negative work past 90°; the derivation of W_net = ΔKE for a constant net force in a straight line; braking distance proportional to v² at a fixed braking force (braking distance, not stopping distance); gravity's work zero over a round trip and the same on both routes (L sin θ = h); friction's work negative on each leg and path-dependent; non-conservative forces include pushes that add energy.
4. Confirm each worked example and feedback states its precision (13 m s⁻¹ to two figures; 3.0 × 10⁵ J and 50 m to two figures; A1 and A2 to three figures).
5. Confirm the memory aid's condition (θ between the force and the displacement) is on screen.
6. Confirm both attempt questions are original in wording, carry every condition (smooth, from rest, the angle; both routes, friction on route 2 only, g), and show nothing answer-bearing.
7. Confirm the syllabus quotes match the route JSON exactly and no 2017-syllabus label appears.
8. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
9. Confirm the narration character count by script with the build parser rules.
10. Add site corrections 1 to 4 under Decisions to `../site-corrections-phys-y11.md` (owner record only).

## YouTube metadata (draft)

Title: Work and Kinetic Energy: W = Fs cos θ and the Work-Energy Theorem | Year 11 Physics

(Title length: 83 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa1-fundamentals-of-mechanics/lesson24.sa.html

A car brakes from 50 km/h, then from 100 km/h with the same brakes. Twice the speed: does it need twice the braking distance? Find out what work really is, why only the part of a force along the motion counts (W = Fs cos θ), and how F = ma and v² = u² + 2as combine into the work-energy theorem, W = ΔKE. Then use it to find a trolley's speed and a car's braking distance, and see why gravity gives its energy back while friction doesn't: conservative and non-conservative forces. Two exam-style questions at the end.

Year 11 Physics (2025 syllabus), Focus Area 1: Fundamentals of mechanics.
Syllabus content (NSW Physics 11-12, 2025):
"Compare conservative forces and non-conservative forces" (ci56b6c521)
"Relate the work done on an object to the change in its kinetic energy during accelerated rectilinear motion using W = F ∥ s = Fs cos θ" (ci2e0b478b)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

Builds on: The incline investigation (previous video). Next: Gravitational potential and kinetic energy.

#Year11Physics #Physics #WorkAndEnergy #HSCScience

## Open decisions

- **1. Energy colours, course-wide (root).** Proposed: KE blue, gravitational potential energy green, work done by a force amber-outlined with hatching (it belongs to a force), heat warm grey, total a dashed ink outline. Velocity stays teal, so the KE bar is a distinct blue. v27 and v28 use the same key.
- **2. Learner questions for v27 and v28 (root to record in the route).** v27: "How does a change in height store energy, and how does speed set kinetic energy?"; v28: "When only gravity does work, why does kinetic plus potential energy stay the same?" (written in those designs).
- **3. Trolley mass plate.** If `y11p-trolley-mass-v1.png` does not suit the dynamics trolley, the build uses a coded mass block; no narration change.
- **4. The conservative comparison sits here, before potential energy.** The route gives `ci56b6c521` to v26. The round-trip and path tests need only work, so they fit; "the energy can be recovered" is left open as "where was it kept?" for v27, which names it as gravitational potential energy. If root prefers, the definitions panel (scene 11) can move to v27 with no change to scenes 1 to 10.
- **5. Route boundaries (root to record).** Start: "work along the motion and at an angle"; stop: "the work-energy theorem for a constant net force, and conservative and non-conservative forces by the round-trip and path tests"; next: v27 as above.
- **6. Site link form.** As v08.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v24 and v23 at Year 11 entry; check that the derivation keeps one row per cue and that "multiply by half m" is followed; that the twin trolleys make "same energy, less speed" feel caused; that the braking slabs make the v² answer visible, not just stated; that the round trip shows why friction does negative work both ways; that the cards give nothing away), then the Codex physics check and error check.
- The rising bars (4, 7), the braking slabs (8, 9) and the round-trip tallies (10) carry the explanation; judge them at playback speed in the voiced preview. Every bar must be driven by the same clock as its object.
