# Year 11 Physics FA1 V23 (Physics 2025, Year 11, Focus Area 1): How do we solve ramp problems at constant velocity and while accelerating? (design)

Status: Revision 2 (3 Nov): brief 149 repairs applied (1 blocker: the handoff promises real equipment, illustrative data and uncertainty, not real data, matching v24's simulated data. 2 should-fix: "Only a change in velocity" includes turning; the across-slope balance carries "while it stays on the ramp" in the method; delivered plate names used). Needs a Codex error check. Independent learning review and physics check are in `checks/p-y11-v23-learning-review.md` and `checks/p-y11-v23-science-check.md`. Voice: Google AI Studio after the brief 124 pilot; physics follows Year 12 Maths and Year 11 Biology in the queue. Nothing recorded; human listening pending.

Narration 5,827 characters (Revision 2; 5,841 joined), 15 scenes, about 538 s (9.0 minutes) including two 3 s prediction countdowns, two 10 s attempt countdowns and the notes hold, counted by script with the build parser rules (see "Narration length estimate").

Scope: twenty-third video of the Year 11 Physics (2025) Focus Area 1 route and the third of four inclined-plane videos. Templates: `phys-y11-fa1-v08.md` (physics format), `math-a12-d10.md` (section list; worked examples as task, equation and grouped givens; result lines on cues), `phys-y11-fa1-v03.md` and `bio-y11-fa1-v05.md` (as v21); house conventions and force colours from `phys-y11-fa1-v12.md`, `phys-y11-fa1-v21.md` and `phys-y11-fa1-v22.md` (Revision 1, written just before this one; v22's scene 14 frame is this video's first frame). Pre-design pack: `../pre-design/phys-y11/phys-y11-fa1-v23.md` (every number recalculated below). Site lesson read in full (2 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa1-fundamentals-of-mechanics/lesson22.sa.html` (orient, intentions and key terms, constant velocity on a slope, accelerating down a rough slope with `we-1`, apply (the practical design, used by v24), reading the results (v24), independent practice, retrieve). Route entry: `phys-y11-fa1-v23` in `../../phys-y11-video-route.json` (route-approved by root, 1 Nov). Route start: "Start with Solving Inclined-Plane Problems. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions." Route stop: "Stop after the learner can answer: How can I explain and apply solving inclined-plane problems? Teach only the listed actions; the next video owns its separate question." Next (route): "phys-y11-fa1-v24: How does ramp angle change acceleration in a measured experiment?"

Owner rules applied: as v21 and v22 (2025 syllabus only; no people, hands or faces: the crate is launched by a spring launcher and hauled by a winch rope leaving the frame; objects painted, diagrams coded; one reasoning stage at a time; calculations as task, equation and grouped givens, with earlier results kept only when the step needs them; 3 s in-teaching predictions; "Pause here to answer." with a 10 s countdown and the full worded question; brief feedback with one crossed mistake; original questions; key-notes hold; Australian spelling; no em dashes; v22, v21, v19, v13 and v09 recalled in a sentence each).

Syllabus content point (Physics 11-12 (2025), Year 11, Focus Area 1, group "Motion on inclined planes"; local ledger ID with NESA content-system codename), quoted from the route JSON `syllabusActions`:

- P25-FA1-G4-05 `ci07a3247e`: "Solve problems involving objects with constant velocity and objects accelerating on inclined planes"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

**Boundary:** starts from v22's handoff (the rough plank at 30° with a sliding box, the boxed formula, chips "steady speed?" and "speed at the bottom?"); constant velocity on a slope: net force zero, so friction balances mg sin θ, and with kinetic friction μk = tan θ (starting from rest needs μs, a separate threshold: logged L21 correction); an accelerating slide in two steps, forces then motion equations (site `we-1`, with the logged L22 condition that static friction can't hold the block); a crate launched up the slope: friction flips to point down the slope, so it slows faster than it speeds up coming back; the general method across and along the slope; a constant-speed haul up a ramp (A1) and a slide from rest (A2) (`ci07a3247e`). Stops at solved ramp problems. Not taught: the measured angle dependence and its graph (v24); work and energy on a ramp (v26 onwards; the comeback speed is explained with forces only); ropes over pulleys and connected bodies on ramps (not in this point; v18 owns connected bodies on the level).

## Decisions

- **Learner question kept (route).** "How do we solve ramp problems at constant velocity and while accelerating?" The answer, built in order: a steady slide means zero net force, so friction exactly matches the slide (1, 2); for kinetic friction that gives μk = tan θ, while starting from rest uses μs (3); an accelerating slide takes two steps, forces for a, then a motion equation (4); when the crate slides up, friction points down the slope, so both forces slow it (5, 6); on the way back friction flips again and the crate returns slower than it left (7); one method for every ramp problem: across, balance; along, F = ma (8, 9).
- **The hook (site hook and warm-up).** A loaded crate slides down a ramp at a perfectly steady speed although gravity pulls it the whole way. "Is friction bigger than, smaller than, or equal to the part of the weight along the slope?" 3 s prediction; answer: equal (2). The site's pallet becomes the v12 box plate (called "crate").
- **The cause made visible (owner quality bar).** (1, 2) The crate's blue velocity arrow keeps its length while a speed readout holds at 0.80 m s⁻¹; the purple F∥ and terracotta friction arrows sit head to head, equal; the net-force panel reads zero. (4) Two stacked panels: "forces → a" and "motion → v", with an arrow handing a = 3.6 m s⁻² from one to the other. (6) As the crate slides up, the friction arrow swings round to point down the slope beside F∥, and the green acceleration arrow grows; (7) at the top the velocity arrow shrinks to nothing, then friction swings back up the slope as the crate slides down, the green arrow shorter now. A speed readout compares the launch (4.0 m s⁻¹) with the return (3.1 m s⁻¹).
- **Constant-velocity example (new, teaching; values chosen for a clean tan θ).** A 20.0 kg crate slides steadily down a 15.0° ramp: f = mg sin θ = 50.7 N; N = mg cos θ = 189 N; μk = f ÷ N = 0.268 = tan 15.0°. The site has no numeric constant-velocity example in its cards (its Q2 uses μ = 0.20 to find 11°; left for site practice).
- **μk = tan θ, with its condition (logged L21 correction).** The constant-velocity condition uses kinetic friction (a crate already sliding). The angle at which a crate at rest starts to slide is set by μs, which is usually larger (v19); one sentence and a grey chip, no calculation.
- **Worked example (site `we-1`, numbers unchanged; logged L22 condition added; precision stated).** 4.0 m ramp at 30°, μk = 0.15, released from rest; the narration states that static friction can't hold it, so it starts to slide. g = 9.80 m s⁻² (course convention, as v12, v21, v22; the site's 9.8 gives the same answers). a = 9.80(0.500 − 0.130) = 3.63 = 3.6 m s⁻²; v² = 0 + 2 × 3.627 × 4.0, v = 5.39 = 5.4 m s⁻¹ (two figures, from 4.0 m and 0.15; the unrounded a is carried, the shown 3.6 gives the same 5.4). Frictionless comparison: v = 6.3 m s⁻¹.
- **Up and back (new teaching example, same ramp; owner quality bar: friction flips when the motion reverses).** A spring launcher fires the crate up the 30° ramp at 4.0 m s⁻¹, μk = 0.15, μs = 0.40 (given). Up the slope positive while going up: a = −g(sin θ + μk cos θ) = −6.17 = −6.2 m s⁻²; distance to rest s = u² ÷ 2|a| = 1.30 = 1.3 m. At the top: tan 30° = 0.577 > μs = 0.40, so static friction can't hold it and it slides back. Coming down: a = 3.63 m s⁻² down the slope; over the same 1.30 m, v = 3.07 = 3.1 m s⁻¹. "It left at 4.0 and comes back at 3.1": friction opposed it both ways. This is the video's surprise and the strongest answer to "which way does friction point?".
- **The method (site card 2's two-step method, generalised).** (1) Free-body diagram with tilted axes; (2) across the slope: balance, so N (v21); (3) friction μN against the sliding (v19, v22); (4) along the slope: F_net = ma, or zero for constant velocity; (5) a motion equation if a speed, distance or time is asked (v09). Shown as a numbered strip, built one row per clause.
- **Sign convention (stated each time).** Positive is the direction of motion at the start of each phase (down the slope for slides down; up the slope for the launch), said aloud and shown as a "+" chip on the dot.
- **Attempts (original, HSC style).** (A1, constant velocity up the slope) A winch rope parallel to a 20.0° ramp hauls a 30.0 kg crate up at constant speed, μk = 0.25: T = mg sin θ + μk mg cos θ = 100.6 + 69.1 = 169.6 N, 1.7 × 10² N (two figures, from μ). Crossed: "T = mg sin θ − μmg cos θ = 31.5 N" (friction pointed up the slope). (A2, accelerating) A sled released at the top of a 50.0 m snow slope at 12.0°, starting to slide, μk = 0.050: a = 1.56 m s⁻², v = 12.5 m s⁻¹. Crossed: "a = g(sin θ + μ cos θ), v = 15.9 m s⁻¹" (friction added for a slide down). The pack's candidates (12 N friction at constant speed; v from u = 1.0, a = 2.0, s = 3.0) are folded into scene 2's balance and scene 4's second step respectively; the attempts carry the full ramp reasoning instead.
- **Mistake scene:** none separate. "A moving object must be accelerating" (1, 2; site misconception 1); "friction always points up the slope" (5, 6, feedback 1 crossed); "kinetic friction sets the slip angle from rest" (3, grey chip); "friction adds to the slide" (feedback 2 crossed); "the crate comes back at the speed it left" (7).
- **Memory aid:** "Across: balance. Along: F = ma." (see "Memory aid check"). It sits beside v22's "Squash gets cos, slide gets sin." on the notes screen.
- **Handoff (route next).** The method strip shrinks; a coded curve of the model's prediction "a = g sin θ (smooth trolley)" against θ from 0° to 30° draws, labelled "model prediction", with the chip "prediction ≠ measurement" and "Next: How does ramp angle change acceleration in a measured experiment?". This is the frame v24 opens on.
- **Site sources used:** hook and warm-up (scenes 1, 2); key terms (constant velocity on a slope); misconception 1 (scene 2); card 1 (constant velocity: f = mg sin θ; μ = tan θ for kinetic friction: scenes 2, 3); card 2 and `we-1` (scene 4; the two-step method: scene 8); quick check (20° smooth, 3.4 m s⁻²: its idea appears as the frictionless comparison in scene 4); odd one out (D: "speeding up because gravity acts", the hook's wrong idea). Not used here: activity 1 and card 3 (the practical and the a against sin θ graph: v24); misconception 2 (a ∝ θ: v24's hook); Q1 and Q2 (same structure as `we-1` and scene 3; left for site practice); Q3 (v24).
- **Site corrections (quoted from site lesson 22, read 2 Nov; for `../site-corrections-phys-y11.md`; the `we-1` release-from-rest row is already logged and not repeated; the practical's rows are in v24's design):**
  1. Card 1: "$$mg\sin\theta = f \quad (\text{constant velocity}) \qquad \Rightarrow \qquad \mu = \tan\theta$$". The implication holds only for kinetic friction, which the next sentence adds; written as one display it reads as true for any friction, including static friction on a crate at rest (where f ≤ μs N). Suggest: "constant velocity while sliding: $mg\sin\theta = \mu_k mg\cos\theta$, so $\mu_k = \tan\theta$".
  2. Short-answer Q1 model answer: "$v^2 = u^2 + 2as = 0 + 2 \times 3.3 \times 3.0 = 19.8$, giving $v = \sqrt{19.8} \approx 4.4$". The intermediate 3.3 is rounded before use (unrounded a = 3.25 m s⁻² gives v² = 19.5); the final 4.4 m s⁻¹ is still right. Precision note: carry the unrounded value.
  - Checked and correct: `we-1` arithmetic (3.6 m s⁻², 5.4 m s⁻¹); quick check A (3.4 m s⁻²); Q1 (3.3 m s⁻², 4.4 m s⁻¹); Q2 (2.4 m s⁻²; 11°; its "below about 11° the box would not slide at all once stopped" is right, since μs ≥ μk); odd one out (D).
- **Pack questions answered:** `we-1` used unchanged with the logged condition stated; pack candidate 1's balance (friction equals the down-slope component at constant speed) is scene 2's core; pack candidate 2's v² = u² + 2as step is scene 4's second step. Pack visual needs met: signed force sums on the ramp block, with separate constant-speed and accelerating states (1, 2 against 4, 6, 7).
- **Cause chain taught, in order:** (1) a steady slide that seems to need a cause (1); (2) constant velocity means zero net force; friction matches mg sin θ; N from the balance (2); (3) μk = tan θ; μs for starting (3); (4) accelerating: forces give a, then a motion equation gives v (4); (5) prediction: friction going up (5); (6) going up, friction and mg sin θ both point down the slope (6); (7) coming back, friction flips; returns slower (7); (8) the method (8); (9) memory aid (9).
- **Entry knowledge (route `entryKnowledge`):** Stage 5 (signed arithmetic, rearranging, tan as opposite over adjacent). From FA1, recalled in a line each: v09 (v² = u² + 2as for constant acceleration), v13 (constant velocity means zero net force), v19 (static and kinetic friction, f = μN; μs usually larger than μk), v21 (N = mg cos θ from the balance), v22 (a = g sin θ − μg cos θ for a slide down).
- **Learner-visible vocabulary (plain meaning at first use):** constant velocity (same speed, same direction: no acceleration, scene 2); μk and μs (recalled from v19: kinetic for sliding, static for at rest, scene 3); winch (a motor that winds in a rope, A1 card gloss).
- **Legacy logic ported:** none. Drawing parts only: `Arrow`, `Label`, `Dot`, `Panel` (`course-kit.tsx`).
- **New explainer motion (coded unless a plate is named):** v21's **`TiltRamp`** and **`FreeBodyDot`**; v22's **`RampMotion`** (with a phase change: up, stop, down); **friction swing** (the terracotta arrow rotates 180° about the dot's centre over 0.4 s when the sliding direction reverses); **motion arrows** (velocity blue, acceleration green, above the crate); **speed readout** with a held value; **two-panel hand-over** (forces panel to motion panel, the a value sliding between them); **method strip** (numbered rows, one per clause); the spring launcher plate with a coded spring compression (the plate's plunger slides by code); `AlignedAlgebra`; `Countdown` (3 s, 10 s); `QuestionCard` (subject "Physics"); `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout (constant, as v21):** heading top-left; the ramp in the left 60 per cent; the dot and working in the right column.
- **No human figures.** The winch in A1 is off frame; the rope leaves the frame at the top of the ramp.
- **Author notes (not learner copy):**
  (a) Hook: 15.0° ramp, the crate moving at a steady 0.80 m s⁻¹ (readout held); μk = tan 15.0° = 0.268 (so the slide is steady); the arrows at 2 px per newton: F∥ = 50.7 N = 101 px, friction 50.7 N, N = 189 N = 379 px, W = 196 N = 392 px.
  (b) Scene 2: 20.0 × 9.80 = 196 N; 196 sin 15.0° = 50.73 N; 196 cos 15.0° = 189.3 N; μk = 50.73 ÷ 189.3 = 0.268; tan 15.0° = 0.2679.
  (c) `we-1`: 9.80 × (0.5000 − 0.15 × 0.8660) = 9.80 × 0.3701 = 3.627 m s⁻²; v = √(2 × 3.627 × 4.0) = 5.387 m s⁻¹; with the rounded 3.6: √28.8 = 5.37, also 5.4. Frictionless: 9.80 × 0.5 = 4.90; √(2 × 4.90 × 4.0) = 6.26 = 6.3 m s⁻¹. Static condition: the crate would stay only if μs ≥ tan 30° = 0.577; the narration says static friction can't hold it.
  (d) Up the slope: a = −9.80 × (0.5000 + 0.1299) = −6.173 m s⁻²; s = 4.0² ÷ (2 × 6.173) = 1.296 m; time up 4.0 ÷ 6.173 = 0.648 s. At rest at the top: needs μs ≥ 0.577 to stay; given μs = 0.40, it slides. Down: a = 3.627 m s⁻²; v = √(2 × 3.627 × 1.296) = 3.066 m s⁻¹. All on the 4.0 m ramp (the crate stays on it).
  (e) A1: 30.0 × 9.80 = 294 N; 294 sin 20.0° = 100.55 N; 0.25 × 294 × cos 20.0° = 69.07 N; T = 169.6 N = 1.7 × 10² N (μ to two figures; "about 170 N" in speech); crossed 100.55 − 69.07 = 31.5 N.
  (f) A2: 9.80 sin 12.0° = 2.0375; 0.050 × 9.80 × cos 12.0° = 0.4793; a = 1.558 = 1.56 m s⁻²; v = √(2 × 1.558 × 50.0) = 12.48 = 12.5 m s⁻¹ (two figures, 12 m s⁻¹, also accepted, from μ = 0.050). Crossed: a = 2.517, v = 15.86 = 15.9 m s⁻¹. tan 12.0° = 0.213 (the sled needs μs below this to start; the card says it starts to slide).
  (g) Pronunciations: "mu k" and "mu s" (letters); "tan theta"; "v squared equals u squared plus two a s"; "minus six point one seven"; "one point seven times ten squared newtons" is not said (speech: "about one hundred and seventy newtons").

Main question: *A crate slides down a ramp at a perfectly steady speed even though gravity pulls it along the slope the whole way. How big is the friction? And how do we solve ramp problems when the motion is steady, and when it speeds up or slows down?*
Entry knowledge (Stage 5; v09 motion equations; v13 balance; v19 friction; v21 N; v22 the incline formula).
Stops after: constant velocity (f = mg sin θ; μk = tan θ; μs for starting); the two-step accelerating slide; a crate launched up and returning, with friction flipping; the method across and along the slope; a constant-speed haul and a slide from rest. No data, no energy.
Handoff: v24, measuring how the ramp angle changes the acceleration.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key (v12, v21, v22): weight purple; normal teal; friction terracotta; tension orange; components dashed then solid; net force thick ink with a double head, in its own panel; velocity arrows blue and acceleration arrows green (thin, above the crate); the "+" direction chip ink; angle arcs amber; crossed items red with a scribble cross; current row bright, earlier rows dim.

### 1. hook (a steady slide)
> Last time, we built one formula for sliding down a ramp. Today we use it to solve problems. Start with something odd. This crate slides down a ramp at a perfectly steady speed. It never speeds up, and it never slows down, even though gravity pulls it down the slope the whole way. So how big is the friction on it, compared with the part of the weight along the slope? Bigger, smaller, or **equal**?

Visual: opens on v22's last frame (the rough plank at 30° with a sliding box, the boxed formula with its small scope chip "box already sliding down; in contact; no other force along or across the slope; μ = kinetic coefficient" (it fades as the heading forms), chips "steady speed?" and "speed at the bottom?", the "Next" chip). The "Next" chip becomes the heading: "Solving ramp problems". The formula shrinks to the top right. The plank lowers to 15.0° (author note a); the box plate (called "crate") slides steadily down it with a blue velocity arrow of fixed length and a speed readout holding at "0.80 m s⁻¹"; a faint ghost trail marks equal spacings every half second. On "equal" chips "bigger?", "smaller?", "equal?" and a 3-second countdown ring.

### 2. constant velocity means zero net force
> Equal. A steady speed in a straight line is constant velocity, so there's no acceleration, and by the first law the net force is zero, along the slope as well as across it. So friction up the slope exactly matches m g sin theta down the slope. Moving doesn't need a net force. Only a change in velocity does. Here are the crate's numbers. It's twenty point oh kilograms, on a fifteen point oh degree ramp. Along the slope, friction equals m g sin theta, fifty point seven **newtons**. Across the slope, N equals m g cos theta, one hundred and eighty-nine **newtons**. So the coefficient of kinetic friction is fifty point seven over one hundred and eighty-nine, zero point two six **eight**.

Visual: on "Equal" the "equal?" chip fills. The dot at the right (sign chip "+ down the slope"): purple F∥ and terracotta friction head to head along the slope, equal length; teal N and purple F⊥ head to head across it; the net-force panel "net force = 0, so a = 0" (grey "first law, v13"). On "Only a change" a crossed chip "moving needs a net force". Calculation layout below the dot: givens group (navy) "m = 20.0 kg; θ = 15.0°; constant velocity; g = 9.80 m s⁻²". Rows, one per cue: "mg = 196 N"; on "newtons" "along: f = mg sin θ = 196 × sin 15.0° = 50.7 N"; on "newtons" (second) "across: N = mg cos θ = 196 × cos 15.0° = 189 N"; on "eight" "μk = f ÷ N = 50.7 ÷ 189 = 0.268", boxed.

### 3. a neat result: mu k equals tan theta
> Notice something. Divide m g sin theta by m g cos theta, and the m g cancels, leaving tan theta. So for a steady slide, mu k equals tan theta, and tan fifteen degrees is zero point two six eight. That's a quick way to measure kinetic friction: tilt the ramp until a nudged crate slides down at a steady speed. One warning. Starting a crate from rest takes a steeper angle, because static friction is usually bigger than kinetic friction. That threshold uses mu s, not mu **k**.

Visual: rows: "μk = mg sin θ ÷ mg cos θ" with the two "mg" striking through; "μk = tan θ (steady slide)", boxed; grey check "tan 15.0° = 0.268 ✓". On "tilt the ramp" the plank lowers to 5°, the crate at rest; it rises slowly; at 15° a small grey nudge mark taps the crate and it slides steadily (readout holds). On "warning" a grey chip "at rest: starts to slide when tan θ > μs (μs is usually larger: v19)"; on "k" the "μk" in the boxed row and the "μs" in the chip glow in different weights.

### 4. accelerating: two steps
> Now a crate that speeds up. It's released at the top of a four point oh metre ramp at thirty degrees, and static friction can't hold it, so it starts to slide. The coefficient of kinetic friction is zero point one five. How fast is it going at the bottom? This takes two steps. Step one: forces give the acceleration. a equals g sin theta minus mu g cos theta. That's nine point eight oh, times zero point five oh oh minus zero point one three oh, which is three point six metres per second **squared**. Step two: motion. It starts from rest, with constant acceleration, over four point oh metres, so use v squared equals u squared plus two a s. That gives v equals five point four metres per **second**. Without friction, it would be six point three.

Visual: clear change: the plank at 30° with the crate at the top; a dimension line "s = 4.0 m" along the plank. Task strip "Find the crate's speed at the bottom". Givens group (navy): "θ = 30°; μk = 0.15; s = 4.0 m; u = 0 (released from rest); g = 9.80 m s⁻²"; grey condition tag "static friction can't hold it: it slides" (logged correction). Two stacked panels on the right. Panel 1 "forces → a": equation strip "a = g sin θ − μk g cos θ"; rows "= 9.80 × (0.500 − 0.15 × 0.866)" and "= 9.80 × (0.500 − 0.130)"; on "squared" "a = 3.6 m s⁻² down the slope" boxed. The boxed a slides down into panel 2 "motion → v": equation strip "v² = u² + 2as"; row "v² = 0 + 2 × 3.6 × 4.0" (grey "carry the unrounded 3.63"); on "second" "v = 5.4 m s⁻¹" boxed, while the crate slides down the plank with a growing blue velocity arrow and a speed readout reaching "5.4 m s⁻¹" at the bottom. On the last sentence a grey chip "no friction: v = √(2 × 4.90 × 4.0) = 6.3 m s⁻¹".

### 5. prediction: launched up the ramp
> Now flip it. A spring launcher at the bottom fires the same crate up the ramp, at four point oh metres per second. While it slides up, which way does friction **point**?

Visual: the panels clear. The spring launcher plate (`phys-y11-spring-launcher-v1.png`) at the foot of the 30° plank, its plunger compressed (coded spring); on "fires" the plunger springs and the crate leaves it with a blue velocity arrow up the slope, then freezes just after launch. On "point" chips "up the slope?", "down the slope?" and a 3-second countdown ring.

### 6. going up: friction flips
> Down the slope. Friction always opposes the sliding, and now the sliding is up the slope. So friction and m g sin theta both point down the slope, and they add. Take up the slope as positive. a equals minus g sin theta, minus mu g cos theta, which is minus six point two metres per second **squared**. That's far bigger than the three point six coming down, because now both forces slow the crate. With v squared equals u squared plus two a s, and v equal to zero at the top, it travels one point three metres up the ramp before it **stops**.

Visual: the crate moves again, up the slope. On "Down the slope" the terracotta friction arrow on the dot swings 180° to point down the slope (friction swing) and sits beside the purple F∥, tip to tail, both down the slope; sign chip "+ up the slope". Rows: "a = −g sin θ − μk g cos θ"; on "squared" "= −9.80 × (0.500 + 0.130) = −6.2 m s⁻²", boxed; the green acceleration arrow above the crate points down the slope, long. A small grey comparison "coming down: 3.6 m s⁻²". Row "0 = 4.0² + 2 × (−6.17) × s"; on "stops" "s = 1.3 m" and the crate halts 1.3 m up the plank (dimension line), its velocity arrow shrinking to nothing in step with the speed readout.

### 7. coming back down
> Will it slide back? At thirty degrees, tan theta is zero point five eight, and this surface has a mu s of zero point four oh, which is smaller. So static friction can't hold the crate, and back it **comes**. Friction flips again, to point up the slope, and the acceleration is our three point six, down the slope. Over the same one point three metres, it reaches the bottom at only three point one metres per **second**. It left at four point oh. Friction opposed it on the way up, and again on the way **down**.

Visual: grey row "at rest: tan 30° = 0.58 > μs = 0.40, so it slides" (μs given on screen). On "comes" the crate slides back down; the friction arrow swings back to point up the slope; the green acceleration arrow points down the slope, shorter than before ("3.6 m s⁻²"); sign chip "+ down the slope". Row "v² = 2 × 3.63 × 1.3"; on "second" "v = 3.1 m s⁻¹" boxed as the crate reaches the launcher. Side-by-side speed chips "launched: 4.0 m s⁻¹" and "returns: 3.1 m s⁻¹"; on "down" both friction directions replay as small ghost arrows ("up: friction down the slope", "down: friction up the slope").

### 8. one method for every ramp problem
> So every ramp problem runs the same way. Draw the free-body diagram with tilted axes. Across the slope, while it stays on the ramp, balance the forces to find N. Friction is mu N, against the sliding. Along the slope, use Newton's second law: the net force is m a, or zero for constant velocity. Then, for a speed, distance or time, use the equations of motion.

Visual: board clears to the method strip, built one numbered row per clause, each with a tiny icon-free diagram cue (the dot with tilted axes; the perpendicular axis glowing; the friction arrow; the along axis glowing; a small v² = u² + 2as chip): "1 Free-body diagram, tilted axes"; "2 Across: balance → N (while it stays on the ramp)"; "3 Friction = μN, against the sliding"; "4 Along: F_net = ma (0 for constant velocity)"; "5 Motion equations for v, s or t". Beside rows 2 and 4, faint thumbnails of scenes 2 and 4 show where each was used.

### 9. memory aid
> Two words for each direction. Across: balance. Along: F equals m a. Across holds whenever the object stays on the surface. And along includes constant velocity, where m a is just **zero**.

Visual: the handwritten line writes large over the method strip: "Across: balance. Along: F = ma." Under it, smaller: "stays on the surface; constant velocity: ma = 0". On "zero" the scene 2 net-force panel "0" returns small. Hold about 2 seconds.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. A winch rope, parallel to a ramp inclined at twenty point oh degrees, hauls a thirty point oh kilogram crate up the ramp at constant speed. The coefficient of kinetic friction is zero point two five. Take g as nine point eight oh metres per second squared. Calculate the tension in the rope. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Physics"), worded as printed, with a small sketch (the plank plate at 20° with the box plate, a thin coded rope from the crate up along the plank leaving the card's edge; the "20.0°" arc; no arrows): "A winch rope, parallel to a ramp inclined at 20.0°, hauls a 30.0 kg crate up the ramp at constant speed. The coefficient of kinetic friction between the crate and the ramp is 0.25. Take g = 9.80 m s⁻². Calculate the tension in the rope. (4 marks)" Gloss under the card: "winch: a motor that winds in a rope". Tag: "HSC-style question, written for HSCScience". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 11. feedback 1 (brief)
> Constant speed, so along the ramp the forces balance. The crate slides up, so friction points down the ramp, alongside m g sin **theta**. Tension equals m g sin theta plus mu m g cos theta: one hundred point six plus sixty-nine point one, about one hundred and seventy **newtons**. Thirty-one newtons comes from pointing friction up the ramp. Friction opposes the sliding, so here it points **down**.

Visual: card shrinks to the top; "parallel", "up the ramp" and "constant speed" underlined. The dot: orange T up the slope; purple F∥ and terracotta f down the slope, tip to tail, matching T's length; sign chip "+ up the slope"; net panel "0". Rows: "along: T − mg sin θ − μk mg cos θ = 0"; on "theta" "mg sin θ = 294 × sin 20.0° = 100.6 N", "μk mg cos θ = 0.25 × 294 × cos 20.0° = 69.1 N"; on "newtons" "T = 169.6 N ≈ 1.7 × 10² N", boxed. On "down" a chip "T = 100.6 − 69.1 = 31.5 N" fades in and is crossed (caption "friction points against the sliding"). Hold about 1 second.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. A sled is released at the top of a snow slope fifty point oh metres long, inclined at twelve point oh degrees, and it starts to slide. The coefficient of kinetic friction is zero point oh five oh. Take g as nine point eight oh metres per second squared. Calculate the sled's acceleration, and its speed at the bottom of the slope. Pause here to answer.

Visual: `QuestionCard`, worded as printed, with a small sketch (the v12 sledge plate on a coded snow slope line at 12°, the "12.0°" arc and "50.0 m" dimension; no arrows): "A sled is released at the top of a snow slope 50.0 m long, inclined at 12.0° to the horizontal, and it starts to slide. The coefficient of kinetic friction between the sled and the snow is 0.050. Take g = 9.80 m s⁻². Calculate (a) the acceleration of the sled and (b) its speed at the bottom of the slope. (4 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 2 (brief)
> Step one: a equals g sin twelve, minus zero point oh five oh times g cos twelve, which is one point five six metres per second **squared**. Step two: v squared equals two, times one point five six, times fifty, so v is twelve point five metres per **second**. Fifteen point nine comes from adding friction. Sliding down, friction points up the slope, so it **subtracts**.

Visual: card shrinks to the top; "released", "starts to slide" and "0.050" underlined. Panel 1 rows: "a = 9.80 × sin 12.0° − 0.050 × 9.80 × cos 12.0°" and "= 2.04 − 0.48"; on "squared" "a = 1.56 m s⁻²" boxed. Panel 2: "v² = 0 + 2 × 1.56 × 50.0"; on "second" "v = 12.5 m s⁻¹" boxed (grey "12 m s⁻¹ to two figures also fine"). On "subtracts" a chip "a = g(sin θ + μ cos θ): v = 15.9 m s⁻¹" fades in and is crossed. Hold about 1 second.

### 14. handoff
> So ramp problems come down to two directions. Across, balance. Along, F equals m a. And our formula predicts how the acceleration grows as a ramp gets steeper. But a prediction isn't a measurement. Next, we'll test it in the lab, with real equipment, illustrative data and **uncertainty**.

Visual: the memory line returns small at the top; the method strip shrinks to the left. A small coded graph draws at the right: "a (m s⁻²)" against "θ (°)" from 0° to 30°, the curve a = g sin θ labelled "model prediction (smooth trolley)". On "measurement" a chip "prediction ≠ measurement". On "uncertainty" the chip "Next: How does ramp angle change acceleration in a measured experiment?". This is the final frame of the video (series rule). Hold about 2 seconds.

### 15. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Constant velocity on a slope: net force zero. Sliding down steadily, friction = mg sin θ; with kinetic friction, μk = tan θ. Starting from rest uses μs instead.
2. Accelerating: step 1, forces give a (along the slope, F_net = ma); step 2, a motion equation (such as v² = u² + 2as) gives v, s or t.
3. Friction opposes the sliding. Sliding up: friction points down the slope, so a = −(g sin θ + μg cos θ) with up positive. Sliding down: friction points up the slope.
4. Method: free-body diagram with tilted axes; across: balance (while it stays on the ramp) gives N; friction = μN; along: F_net = ma (zero at constant velocity).

Memory aid (large, on the notes screen): *Across: balance. Along: F = ma.* Second line (from v22, small): *Squash gets cos, slide gets sin.*

At the end the notes cross-fade back to scene 14's final frame (series rule).

## Teaching checks

- **Does it explain causes?** Why a steady slide needs equal forces: zero acceleration means zero net force (2). Why μk = tan θ: mg cancels from the ratio of the two parts (3). Why starting needs a steeper angle: static friction can be larger (3). Why two steps: forces set a, then a sets the motion (4). Why going up slows faster: friction joins the slide's component instead of opposing it (6). Why it returns slower: friction opposes the sliding both ways (7, shown with the arrow swinging).
- **Misconceptions addressed:** a moving object must be accelerating (1, 2, crossed chip); friction always points up a slope (5, 6, feedback 1 crossed); kinetic friction sets the start angle (3); friction is added for a slide down (feedback 2 crossed); the return speed equals the launch speed (7).
- **One idea at a time:** steady (2, 3), speeding up (4), up and back (5 to 7), the method (8, 9). In each worked example the panel shows only the current step and the result it hands on.
- **Video makes it easier:** the student watches a crate keep a steady speed with equal opposing arrows (1, 2), watches the acceleration hand over from the forces panel to the motion panel (4), and watches friction swing round each time the sliding reverses while the speed readouts compare 4.0 with 3.1 (6, 7).
- **Response opportunity:** two 3 s predictions (1, 5); two unseen HSC-style tasks, 10 seconds each, every condition on the card (parallel rope, constant speed; released, starts to slide), nothing answer-bearing. One crossed mistake each; feedback about 30 s and 28 s.
- **Avoided double teaching:** the incline formula (v22), N = mg cos θ (v21), friction types (v19), the first law (v13) and v² = u² + 2as (v09) recalled in a line each.
- **Syllabus coverage:** `ci07a3247e`: constant velocity (2, 3, A1) and accelerating objects on inclined planes (4, 6, 7, A2).
- **Out of scope by design:** measured angle dependence (v24); energy (v26 onwards); connected bodies on ramps.

## Practice questions and model answers

**Attempt 1 (scene 10; original wording, HSC style, 4 marks suggested, not an official marking scheme).** "A winch rope, parallel to a ramp inclined at 20.0°, hauls a 30.0 kg crate up the ramp at constant speed. The coefficient of kinetic friction between the crate and the ramp is 0.25. Take g = 9.80 m s⁻². Calculate the tension in the rope."
Model answer: Constant speed, so the net force along the ramp is zero. The crate slides up, so kinetic friction acts down the ramp. Across: N = mg cos θ = 294 cos 20.0° = 276 N; f = μk N = 0.25 × 276 = 69.1 N. Along (up positive): T − mg sin θ − f = 0, so T = 294 sin 20.0° + 69.1 = 100.6 + 69.1 = 169.6 N ≈ 1.7 × 10² N (2 s.f. from μ). Classic mistake (crossed): "T = 31.5 N" (friction drawn up the slope).

**Attempt 2 (scene 12; original wording, HSC style, 4 marks suggested).** "A sled is released at the top of a snow slope 50.0 m long, inclined at 12.0° to the horizontal, and it starts to slide. The coefficient of kinetic friction between the sled and the snow is 0.050. Take g = 9.80 m s⁻². Calculate (a) the acceleration of the sled and (b) its speed at the bottom of the slope."
Model answer: (a) Sliding down, friction up the slope: a = g sin θ − μk g cos θ = 9.80 sin 12.0° − 0.050 × 9.80 × cos 12.0° = 2.04 − 0.48 = 1.56 m s⁻² down the slope. (b) u = 0, s = 50.0 m: v² = 2as = 2 × 1.56 × 50.0 = 156, v = 12.5 m s⁻¹ (12 m s⁻¹ to two figures from μ also accepted). Classic mistake (crossed): friction added, a = 2.52 m s⁻², v = 15.9 m s⁻¹.

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hook | 15.0°; steady 0.80 m s⁻¹ | 1 |
| Constant velocity | 20.0 kg; 196 N; f 50.7 N; N 189 N; μk 0.268 = tan 15.0° | 2, 3 |
| Worked (site we-1) | 4.0 m; 30°; μk 0.15; 0.500, 0.130; a 3.6 (3.63); v 5.4 (5.39); frictionless 6.3 m s⁻¹ | 4 |
| Up and back | launch 4.0 m s⁻¹; a −6.2 (−6.17); s 1.3 m (1.30); tan 30° 0.58; μs 0.40; down a 3.6; return 3.1 m s⁻¹ (3.07) | 5, 6, 7 |
| A1 | 294 N; 100.6 N; 69.1 N; T 169.6 ≈ 1.7 × 10² N; crossed 31.5 N | 10, 11 |
| A2 | 2.04; 0.48; a 1.56 m s⁻²; v 12.5 m s⁻¹; crossed 15.9 m s⁻¹ | 12, 13 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (2 Nov); Codex to re-check.

- 20.0 × 9.80 = 196; 196 sin 15° = 50.729; 196 cos 15° = 189.32; 50.729 ÷ 189.32 = 0.26795; tan 15° = 0.26795.
- 0.15 cos 30° = 0.12990; 0.5 − 0.1299 = 0.37010; × 9.80 = 3.6269; √(2 × 3.6269 × 4.0) = 5.3866; √(2 × 3.6 × 4.0) = 5.3666; √(2 × 4.90 × 4.0) = 6.2610.
- −9.80 × (0.5 + 0.1299) = −6.1731; 16 ÷ 12.346 = 1.2960; 4.0 ÷ 6.1731 = 0.648 s; tan 30° = 0.5774; √(2 × 3.6269 × 1.2960) = 3.0661.
- A1: 294 sin 20° = 100.554; 0.25 × 294 × cos 20° = 69.067; sum 169.62; difference 31.49; N = 294 cos 20° = 276.27.
- A2: 9.80 sin 12° = 2.0375; 0.050 × 9.80 × cos 12° = 0.47929; a = 1.5582; √(2 × 1.5582 × 50.0) = 12.483; with +: a = 2.5168, v = 15.865; tan 12° = 0.2126.

## Memory aid check

- **"Across: balance. Along: F = ma."** Written for this lesson. Meaning, as said in scene 9: across the slope, the forces balance (this gives N); along the slope, the net force equals ma (zero for constant velocity). Assumptions checked: "across: balance" needs the object to stay on the surface without accelerating into or away from it (spoken: "whenever the object stays on the surface"; it fails for an object leaving the surface, not met in Year 11 ramp problems); "along" covers constant velocity as the case ma = 0 (spoken and on screen); it does not by itself give friction's direction, which scene 8's row 3 and the notes carry. It helps a new case: any ramp problem splits into the two directions and the student knows which law to write in each. Introduced after both kinds of problem have been solved (2 to 7) and the method (8).
- **Considered, not used:** "Balance across, Newton along" (same idea, less concrete); an acronym for the five-step method (an extra code to decode).

## Narration length estimate

Revision 2 count (3 Nov; Revision 1 was 5,815 separate, 5,829 joined; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,827 characters** (5,841 joined), 15 scenes. Characters per scene (1 to 15): 395, 679, 473, 743, 165, 534, 500, 361, 184, 324, 388, 362, 359, 285, 75. At 13.3 characters per second the speech is about 438 s; add about 18 s of holds and settling (the steady slide in 1, the nudge test in 3, the slide in 4, the launch, stop and return in 6 and 7, the 2-second memory hold), 6 s for two prediction countdowns, 20 s for two attempt countdowns, 2 s of feedback holds and about 54 s more of the quiet notes hold (about 100 s of holds): **about 538 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. One syllabus point, two problem types and the up-and-back case fill it without padding. Scene 4 is the longest (two steps); its panels keep only the current step and the handed-on a.

## Scene list and build ids

Lesson key `p-y11-v23` (route phys-y11-fa1-v23). Suggested explainer folder `src/explainer/lessons/phys-y11-fa1-v23` and build folder `docs/production/claude-pm/lessons/p-y11-v23` (root to confirm).

In order (kebab-case; 15 scene headings, all `### N.`): hook, constant-velocity, mu-tan-theta, two-steps, launch-prediction, going-up, coming-back, method, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). The hook and launch-prediction carry 3 s countdowns inside explain scenes. Transitions (`pickTransition`): v22's last frame continues into scene 1 (camera continue: the plank lowers); 1 to 2 split board (plank left, dot and rows right); 2 to 3 camera continue; 3 to 4 clear change (new example, two panels); 4 to 5 camera continue (same plank, the launcher slides in); 5 to 6 to 7 camera continue; 7 to 8 board clear to the method strip; 8 to 9 camera continue; attempts and feedback card shrink to the top; 13 to 14 board clear; 14 to 15 fade to the notes board, and 15 cross-fades back to 14's final frame.

Holds: hook and launch-prediction (3 s), attempt-1, attempt-2 (10 s after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/p-y11-v23-learning-review.md`, `science_check` = `checks/p-y11-v23-physics-check.md`.

## Assets

Have or requested earlier (uniform scaling only, never stretched):
- v21's ramp kit (plank, hinge block, stand, boss with crossbar, protractor): scenes 1 to 7, the A1 sketch.
- `phys-y11-box-v1.png` (v12): the crate, scenes 1 to 7 and the A1 sketch.
- `phys-y11-sledge-v1.png` (v12): the A2 sketch, on a coded snow slope line.

Need (new plate, Codex):
1. `phys-y11-spring-launcher-v1.png`: scenes 5 to 7. Essential (the launch has to come from something; no hands).

Coded: as v21 and v22, plus the friction swing, the held speed readout, the nudge mark in scene 3, the two-panel hand-over, the method strip, the rope in A1, the snow slope line in A2, the model-prediction curve in scene 14 (`FunctionGraph`).

Kit gaps (for the build brief): v21's `TiltRamp` and `FreeBodyDot`; v22's `RampMotion` with phases (up, stop, down) and a per-phase sign chip; **friction swing** (an arrow attribute that rotates it 180° about the dot over a set duration when the sliding direction changes sign). Lesson-local acceptable for Revision 1.

## Codex asset brief (Year 11 Physics FA1 v23, spring launcher)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; design `docs/production/claude-pm/lessons/phys-y11-fa1-v23.md`. Paint after the learning review, physics check and error check pass and the owner gives the go-ahead. Transparent PNG with a true alpha channel, clean edges with no coloured fringe or halo (check on black and white), ink and watercolour in the house style matched to `public/assets/biology/b4-car-blue-v1.png` and v21's ramp kit, at least 8 per cent clear margin, no text, labels, numbers, brand names, people, hands, faces, backdrop, floor, glow or ground shadow. Keep the native aspect; never stretch.

1. **`phys-y11-spring-launcher-v1.png`**: a compact school-lab spring launcher seen exactly side-on, as if bolted to the low end of a ramp: a small grey metal housing block with a flat base, and from its upper face a short horizontal steel plunger rod ending in a flat round pad, pointing to the right (it will be rotated by code to point up the ramp). Paint the plunger **separately on the same canvas size** as a second file `phys-y11-spring-launcher-plunger-v1.png` (rod and pad only, transparent elsewhere, aligned so it overlays the housing at full extension), so the code can slide it back into the housing; the visible spring between housing and pad is coded. Sidecar JSON: the base line; the plunger's axis line; the pad's contact face at full extension.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the animations: the hook crate holds a steady speed; scene 4's crate reaches 5.4 m s⁻¹ at 4.0 m; scene 6's crate stops at 1.3 m; scene 7's returns at 3.1 m s⁻¹; friction swings when (and only when) the sliding reverses.
3. Confirm the physics claims: constant velocity means zero net force; f = mg sin θ for a steady slide down; μk = tan θ for steady sliding only; the start-from-rest angle uses μs; `we-1` with the static condition stated; going up, friction acts down the slope and a = −(g sin θ + μk g cos θ); at rest at the top the crate slides back because tan 30° > μs; coming down, friction acts up the slope; T = mg sin θ + μk mg cos θ for a constant-speed haul up.
4. Confirm each worked example and feedback states its positive direction, and that significant figures follow the data (two figures from 4.0 m, 0.15, 0.25 and 0.050).
5. Confirm the memory aid's conditions (stays on the surface; constant velocity: ma = 0) are on screen and spoken.
6. Confirm both attempt questions are original in wording, carry every condition (parallel rope, constant speed; released and starts to slide), and show no arrows or answers.
7. Confirm the syllabus quote matches the route JSON exactly and no 2017-syllabus label appears.
8. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
9. Confirm the narration character count by script with the build parser rules.
10. Add site corrections 1 and 2 under Decisions to `../site-corrections-phys-y11.md` (owner record only).

## YouTube metadata (draft)

Title: Inclined Plane Problems: Constant Velocity and Accelerating Objects | Year 11 Physics

(Title length: 86 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa1-fundamentals-of-mechanics/lesson22.sa.html

A crate slides down a ramp at a perfectly steady speed even though gravity pulls it the whole way. What balances it? Learn how constant velocity on a slope means zero net force, why a steady slide gives μk = tan θ, and how to solve an accelerating slide in two steps: forces give the acceleration, then a motion equation gives the speed. Then launch a crate up a ramp and watch friction flip each time the sliding reverses, so it comes back slower than it left. One method for every ramp problem: across, balance; along, F = ma. Two exam-style questions at the end.

Year 11 Physics (2025 syllabus), Focus Area 1: Fundamentals of mechanics.
Syllabus content (NSW Physics 11-12, 2025):
"Solve problems involving objects with constant velocity and objects accelerating on inclined planes" (ci07a3247e)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

Builds on: Resolving weight and the acceleration down a ramp (previous video). Next: The incline investigation: how ramp angle changes acceleration.

#Year11Physics #Physics #InclinedPlanes #HSCScience

## Open decisions

- **1. Route refinement (adopted from the pack; root to record).** The pack proposes "Start with ramp force sums and kinematics. Stop after constant-speed and accelerated ramp calculations. Hand measurement against angle to v24." Adopted, with the up-and-back case added (it is still "objects accelerating on inclined planes" and carries the friction-direction idea). Root to replace the route's placeholder stop wording.
- **2. The up-and-back case's length (scenes 5 to 7, about 100 s with the prediction).** If the learning review finds the video long, scene 7 can stop at "back it comes" and keep only the speed comparison, cutting about 15 s.
- **3. Significant figures in A1.** The answer is 1.7 × 10² N to two figures (μ = 0.25); speech says "about one hundred and seventy newtons". Root to confirm that phrasing.
- **4. Site link form.** As v08.

## Review notes

- Revision 2 (3 Nov): independent learning review and physics check (brief 149) found 1 blocker and 2 should-fix, all applied. Blocker: scene 14 now says "with real equipment, illustrative data and uncertainty" (v24's table and graph are simulated); the labelled prediction graph is kept. Should-fix 2: scene 2 says "Only a change in velocity does" (includes turning; matches v06 and v16). Should-fix 3: scene 8 says "while it stays on the ramp" for the across-slope balance, and the method row and key note 4 carry it; "Then, if you need a speed, a distance or a time" was shortened to fund it. The opening description now notes v22's added scope chip. Count 5,827 separate (5,841 joined), 15 scenes, about 538 s. No findings rejected. Plate names updated to delivered `phys-y11-` files. The v24 opening is unchanged. Original Revision 1 next steps, for the record: student learning review (trace from v22, v21, v19, v13 and v09 at Year 11 entry; check that the steady slide feels like a puzzle and "zero net force" resolves it; that the two-panel hand-over makes the two steps distinct; that the friction swing is noticed and understood at playback speed; that the 4.0 against 3.1 comparison is a fair surprise without energy language; that the cards give nothing away), then the Codex physics check and error check.
- The equal opposing arrows on a moving crate (1, 2), the hand-over of a (4) and the friction swing with the speed comparison (6, 7) carry the explanation; judge them at playback speed in the voiced preview. All motion must come from the same a values as the rows.
