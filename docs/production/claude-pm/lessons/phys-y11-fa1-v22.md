# Year 11 Physics FA1 V22 (Physics 2025, Year 11, Focus Area 1): How does splitting weight along a ramp give the acceleration down it? (design)

Status: Revision 1 (2 Nov). Needs independent student learning review (key `p-y11-v22`, `docs/production/student-learning-review.md`), a Codex physics check and a Codex error check before build. Voice: Google AI Studio after the brief 124 pilot; physics follows Year 12 Maths and Year 11 Biology in the voicing queue. Nothing recorded; human listening pending. Plates: no new plate (the v21 ramp kit and the v12 box plate, used at two sizes).

Narration 5,748 characters, 15 scenes, about 532 s (8.9 minutes) including two 3 s prediction countdowns, two 10 s attempt countdowns and the notes hold, counted by script with the build parser rules (see "Narration length estimate").

Scope: twenty-second video of the Year 11 Physics (2025) Focus Area 1 route and the second of four inclined-plane videos. Templates: `phys-y11-fa1-v03.md` (components as shadows), `phys-y11-fa1-v08.md` (physics format), `math-a12-d10.md` (section list, aligned algebra with result lines on cues), `bio-y11-fa1-v05.md` (painted objects at native aspect); house conventions and force colours from `phys-y11-fa1-v12.md` and `phys-y11-fa1-v21.md` (Revision 1, written just before this one; its scene 15 frame is this video's first frame). Pre-design pack: `../pre-design/phys-y11/phys-y11-fa1-v22.md` (every number recalculated below). Site lesson read in full (2 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa1-fundamentals-of-mechanics/lesson21.sa.html` (orient, intentions and key terms, splitting weight into two components, deriving the incline acceleration with `we-1`, apply, what the formula tells us, independent practice, retrieve). Route entry: `phys-y11-fa1-v22` in `../../phys-y11-video-route.json` (route-approved by root, 1 Nov). Route start: "Start with Resolving Weight and Incline Acceleration. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions." Route stop: "Stop after the learner can answer: How can I explain and apply resolving weight and incline acceleration? Teach only the listed actions; the next video owns its separate question." Next (route, placeholder wording): "phys-y11-fa1-v23: How can I explain and apply solving inclined-plane problems?" (v23's pack and design use "How do we solve ramp problems at constant velocity and while accelerating?").

Owner rules applied: as v21 (2025 syllabus only; no people, hands or faces: the boxes are released by the code; objects painted, diagrams coded; one reasoning stage at a time; the derivation one line per cue; calculations as task, equation and grouped givens; 3 s in-teaching predictions; "Pause here to answer." with a 10 s countdown and the full worded question; brief feedback with one crossed mistake; original questions; key-notes hold; Australian spelling; no em dashes; v21, v19, v16 and v03 recalled in a sentence each).

Syllabus content points (Physics 11-12 (2025), Year 11, Focus Area 1, group "Motion on inclined planes"; local ledger IDs with NESA content-system codenames), quoted from the route JSON `syllabusActions` in linear form:

- P25-FA1-G4-03 `ci9a2bd04a`: "Resolve the weight force into perpendicular and parallel components on inclined planes using F ⊥ = mg cos θ and F ∥ = mg sin θ"
- P25-FA1-G4-04 `cib1bb3a58`: "Derive a = g sin θ - μg cos θ to describe the acceleration on an object on an inclined plane with friction using Newton’s second law parallel to the plane"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

**Boundary:** starts from v21's handoff (the dot on tilted axes with mg cos θ solid and the along-slope part dashed with "?"); resolves the weight into F∥ = mg sin θ and F⊥ = mg cos θ and rebuilds it (`ci9a2bd04a`); on a frictionless ramp, Newton's second law along the slope gives a = g sin θ with the mass cancelling; checks at 0° and 90°; with kinetic friction for an object already sliding down, f = μN = μmg cos θ and a = g sin θ − μg cos θ (`cib1bb3a58`); a negative result while sliding down means an acceleration up the slope (slowing), not a reversal or a box at rest (logged L21 correction). Stops at the formula and its reading. Not taught: constant-velocity problems and μk = tan θ (v23); combining the formula with the equations of motion (v23); objects moving up a ramp (v23); the static-friction threshold beyond one sentence (v19 taught static friction; v23 uses it); measured data (v24).

## Decisions

- **Learner question kept (route).** "How does splitting weight along a ramp give the acceleration down it?" The answer, built in order: the along-slope part of the weight is mg sin θ, opposite the angle, and with mg cos θ it rebuilds the weight (2); on a smooth ramp that part is the whole net force, so mg sin θ = ma and the mass cancels: a = g sin θ (3); the result passes its checks at 0° and 90° (4); with kinetic friction, the perpendicular balance gives N, friction is μN against the sliding, and Newton's second law along the slope gives a = g sin θ − μg cos θ, the mass cancelling again (5, 6); the numbers (7); the sign of a (8).
- **The hook (site warm-up, made a race).** "A 2 kg box and an 8 kg box are released together on the same smooth ramp. Which reaches the bottom first?" 3 s prediction; the race (both driven by s = ½at² with a = 4.90 m s⁻²) ends in a tie (3). The heavier box is drawn larger (the box plate at two sizes, side ratio 1.59 for four times the mass at the same density; never stretched).
- **The cause made visible (owner quality bar).** (2) v21's dashed "?" becomes the second shadow, with light shining across the slope onto the along-slope axis; the two parts slide tip to tail and land on the weight's tip; a sweep from 10° to 60° shows them trading length (pack visual need: parallel and perpendicular resolved independently). (3) During the race each box carries its own along-slope arrow (9.80 N and 39.2 N, one scale) and a mass chip; a split-screen "pull ÷ mass" readout shows 4.90 for both, so "four times the pull, four times the mass" is seen, not just said. (6) Friction appears on the sliding boxes as terracotta arrows, also in a 1 : 4 ratio. (8) The box on the gentle ramp slides down with a blue velocity arrow shrinking while a green acceleration arrow points up the slope; it stops; the velocity arrow vanishes and the acceleration chip greys out ("formula no longer applies").
- **Derivation (site `we-1`; syllabus form).** Down the slope positive; N = mg cos θ from the balance across the slope (v21); kinetic friction f = μN = μmg cos θ (v19), up the slope, against the sliding; along the slope F_net = mg sin θ − μmg cos θ = ma; divide by m: a = g sin θ − μg cos θ (the syllabus form, written first), = g(sin θ − μ cos θ) (the site's factorised form, shown as a grey equivalent). Conditions on screen: "already sliding down; μ = coefficient of kinetic friction". The symbol μ is said "mu" with v19's gloss "the coefficient of kinetic friction: friction force ÷ normal force while sliding".
- **Worked example (site activity 1, unchanged numbers; precision stated).** θ = 30.0°, μk = 0.20, g = 9.80 m s⁻²: g sin θ = 4.90; μg cos θ = 1.70; a = 3.20 = 3.2 m s⁻² down the slope (two figures, limited by μ). Frictionless comparison 4.90 m s⁻²: friction removes about a third. The site's `we-1` is a derivation without numbers; it is the scene 6 derivation.
- **The negative result (logged site correction, L21 `what-the-formula-tells-us`).** 10.0° with μk = 0.30: a = 1.70 − 2.90 = −1.19 m s⁻². Said: the acceleration points up the slope while the box still slides down, so it slows; once it stops, the kinetic formula no longer applies, and whether it stays depends on static friction. The site's "friction is strong enough to hold the block still" and "a moving object does not spontaneously accelerate up the slope" are not used.
- **Second prediction (3 s, scene 5).** "Does friction let the heavier box win?" No: friction is proportional to N, which is proportional to m, so the ratio is unchanged (6). This turns the derivation's "mass cancels" into an answer the student wanted.
- **Attempts (original, HSC style).** (A1, pack candidate 1 extended) A 4.00 kg crate on a smooth 25.0° ramp: F∥ = 16.6 N, F⊥ = 35.5 N, a = 4.14 m s⁻². Crossed: "a = g cos θ = 8.88 m s⁻²" (the swap). (A2, pack candidate 2) A 2.00 kg block sliding down: down-slope weight component 8.00 N, kinetic friction 10.0 N: F_net = −2.0 N, a = −1.0 m s⁻², that is 1.0 m s⁻² up the ramp; it slows while sliding down. Crossed: "it moves back up the ramp" (the sign read as the motion). Neither card shows a diagram with arrows.
- **Mistake scene:** none separate. "Heavier blocks accelerate faster" (1, 3, 5, 6); "the driving component is mg cos θ" (2, feedback 1 crossed, memory aid); "negative a means it slides back up or must be at rest" (8, feedback 2 crossed); "friction is added to the slide" (6: it is subtracted when sliding down, shown with arrows).
- **Memory aid:** "Squash gets cos, slide gets sin." (completes v21's "Squash gets cos."; see "Memory aid check").
- **Handoff (route next).** The plank at 30° with the box, the boxed formula "a = g sin θ − μg cos θ" and two chips "steady speed?" and "speed at the bottom?", then "Next: How do we solve ramp problems at constant velocity and while accelerating?". This is the frame v23 opens on.
- **Site sources used:** hook and warm-up (2 kg and 8 kg; the mass-independence race); key terms (parallel and perpendicular components, friction on a slope, incline acceleration); misconceptions 1 and 2 (scenes 3, 2); card 1 (the two components, why the along-slope part takes sin, the components combining by Pythagoras: scene 2's rebuild); card 2 and `we-1` (scene 6); quick check (2 kg and 8 kg true or false: the race); activity 1 (scene 7); card 3 (steeper gives more, rougher gives less: scene 4's last sentence and scene 7; the negative result corrected in scene 8). Not used: the "verge of sliding" bullet (uses μ for the static threshold; v23 treats steady sliding with μk only); Q1 and Q2 (derivations, the same as scene 6); Q3 (its tan θ = μ and negative-value answers carry the logged errors).
- **Site corrections (quoted from site lesson 21, read 2 Nov; for `../site-corrections-phys-y11.md`; two related rows are already logged and are not repeated):**
  1. Card 3, `what-the-formula-tells-us`, third bullet: "On the verge of sliding: when $\sin\theta = \mu\cos\theta$ (i.e. $\tan\theta = \mu$), the acceleration is zero, this is the angle at which the block is just about to slip." The same μ-type confusion as the logged independent-practice row, in another sentence: with μ the kinetic coefficient of the formula, a = 0 means steady sliding; "about to slip" from rest needs tan θ = μs. Suggest: "When tan θ = μk, a sliding block moves at constant velocity. A block at rest starts to slip when tan θ exceeds μs."
  2. Short-answer Q3 marking line: "a negative result means gravity cannot overcome friction, so a stationary object stays at rest rather than accelerating up the slope". The marking criteria repeat the logged model-answer error. Suggest: "a negative result for a block sliding down means its acceleration is up the slope, so it slows; a block at rest must be tested against maximum static friction".
  3. Key terms, friction on a slope: "Found from $f = \mu N$ with $N = mg\cos\theta$; it opposes motion up the slope." Reads as "opposes motion that is up the slope", and μmg cos θ is kinetic friction only. Suggest: "For a block sliding down, kinetic friction $f = \mu_k N = \mu_k mg\cos\theta$ acts up the slope, against the sliding."
  - Checked and correct: card 1 (sin along, cos perpendicular; Pythagoras back to mg); `we-1` derivation and its checks (μ = 0 gives g sin θ; 90° gives g); activity 1 (3.2 and 4.9 m s⁻²); quick check (true); misconceptions; Q1 and Q2 model answers.
- **Pack questions answered:** pack candidate 1 (smooth 30°, 4.9 m s⁻²) is the race's acceleration; A1 uses its structure at 25.0° with components added. Pack candidate 2 is A2. Pack visual needs met: the ramp diagram with weight and friction resolved independently and tied to the moving block (3, 6, 8).
- **Cause chain taught, in order:** (1) a race whose result needs a cause (1); (2) the along-slope part is mg sin θ, opposite the angle; with mg cos θ it rebuilds the weight; they trade as θ grows (2); (3) smooth ramp: net force mg sin θ = ma, mass cancels: a = g sin θ (3); (4) checks at 0° and 90° (4); (5) prediction with friction (5); (6) N from the balance, kinetic friction μN against the sliding, Newton's second law along the slope, mass cancels again (6); (7) numbers: friction takes about a third off (7); (8) a negative a: slowing while sliding down (8); (9) memory aid (9).
- **Entry knowledge (route `entryKnowledge`):** Stage 5 (right-triangle trigonometry). From FA1, recalled in a line each: v03 (components; cos with the adjacent side, sin with the opposite), v16 (F_net = ma), v19 (kinetic friction f = μk N, against sliding), v21 (tilted axes; the weight's angle to the perpendicular axis is θ; N = mg cos θ from the balance across the slope).
- **Learner-visible vocabulary (plain meaning at first use):** parallel component F∥ (the part of the weight along the slope, scene 2); perpendicular component F⊥ (the part pressing into the slope, recalled, scene 2); derive (build a formula step by step from laws we already trust, scene 6); μ, mu (recalled from v19: the coefficient of kinetic friction, scene 6).
- **Legacy logic ported:** none. Drawing parts only: `Arrow`, `Label`, `Dot`, `Panel` (`course-kit.tsx`).
- **New explainer motion (coded unless a plate is named):** v21's **`TiltRamp`** and **`FreeBodyDot`** (with a second shadow on the along-slope axis); **component rebuild** (the two dashed parts slide tip to tail onto the weight's tip, v03's rebuild on tilted axes); **component sweep** (10° to 60° with readouts); **twin race** (two boxes on one plank, s = ½at² from the same clock, each with its own along-slope arrow, mass chip and a "pull ÷ mass" readout; a finish line); **friction arrows on moving boxes**; **motion arrows** (velocity blue, acceleration green, thin, drawn above the box, labelled); `AlignedAlgebra` (derivation one row per cue, with the cancelled m struck through in place); `Countdown` (3 s, 10 s); `QuestionCard` (subject "Physics"); `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout (constant, as v21):** heading top-left; the ramp scene in the left 60 per cent; the dot, its axes and the working in the right column.
- **No human figures.**
- **Author notes (not learner copy):**
  (a) Components at 30.0° for v21's box: 117.6 sin 30.0° = 58.80 N; 117.6 cos 30.0° = 101.8 N; √(58.80² + 101.8²) = 117.6 N.
  (b) Sweep stops: 10° (F∥ 0.174 mg, F⊥ 0.985 mg), 30° (0.500, 0.866), 45° (0.707, 0.707), 60° (0.866, 0.500); readouts as fractions of mg ("× mg"), so the sweep is about the trade, not the 12.0 kg box.
  (c) Race: 30.0°, smooth; 2.00 kg: F∥ = 9.80 N; 8.00 kg: F∥ = 39.2 N; a = 4.90 m s⁻² for both. The plank shown is 2.0 m long between start and finish marks (a scale chip "2.0 m"); time to the finish t = √(2 × 2.0 ÷ 4.90) = 0.904 s, played at 0.4 × speed so the tie is readable (tag "slowed down"); screen time about 2.3 s. Box plate sizes: the 8.00 kg box 1.59 times the 2.00 kg box's width and height (uniform).
  (d) Rough race (6): same plank roughened, μk = 0.20, boxes already sliding (each gets a small start speed, the same for both, tag "already sliding"); friction 0.20 × 9.80 × cos 30.0° × m: 2.00 kg 3.39 N, 8.00 kg 13.6 N; a = 3.20 m s⁻² for both. Arrow scale chip "1 cm = 5 N".
  (e) Worked example: 9.80 sin 30.0° = 4.900; 0.20 × 9.80 × cos 30.0° = 1.697; a = 3.203 = 3.2 m s⁻² (μ to two figures). Fraction removed 1.697 ÷ 4.900 = 0.346 ("about a third").
  (f) Negative case: 9.80 sin 10.0° = 1.702; 0.30 × 9.80 × cos 10.0° = 2.895; a = −1.194 = −1.19 m s⁻². Shown motion: the box starts down the slope at 2.0 m s⁻¹, stops after t = 2.0 ÷ 1.194 = 1.68 s and 2.0² ÷ (2 × 1.194) = 1.68 m (not stated; motion only). After stopping: tan 10.0° = 0.176, below a typical μs (≥ μk = 0.30), so it stays (narration says only "depends on static friction").
  (g) Checks: θ = 0, sin 0 = 0, a = 0 (smooth, flat: a box at rest stays at rest); θ = 90°, sin 90° = 1, a = g (the box falls freely beside a vertical wall, N = mg cos 90° = 0, so no friction either).
  (h) A1: 4.00 × 9.80 = 39.2 N; 39.2 sin 25.0° = 16.57 = 16.6 N; 39.2 cos 25.0° = 35.53 = 35.5 N; a = 9.80 sin 25.0° = 4.142 = 4.14 m s⁻²; crossed 9.80 cos 25.0° = 8.88.
  (i) A2: down positive; F_net = 8.00 − 10.0 = −2.0 N (to 0.1 N); a = −2.0 ÷ 2.00 = −1.0 m s⁻². Implied angle sin θ = 8.00 ÷ 19.6, θ = 24.1°; implied μk = 10.0 ÷ (19.6 cos 24.1°) = 0.559 (plausible; not shown).
  (j) Pronunciations: "m g sin theta" ("sin" as written, "sine" acceptable); "mu"; "g sin theta, minus mu g cos theta"; "four point nine oh metres per second squared"; "minus one point one nine".

Main question: *A 2 kg box and an 8 kg box are released together on the same smooth ramp. Which reaches the bottom first? And how does splitting the weight along the ramp give the acceleration down it?*
Entry knowledge (Stage 5 trigonometry; v03 components; v16 F_net = ma; v19 kinetic friction; v21 tilted axes and N = mg cos θ).
Stops after: F∥ = mg sin θ and F⊥ = mg cos θ, rebuilt into the weight; a = g sin θ on a smooth ramp, mass-independent, checked at 0° and 90°; the derivation of a = g sin θ − μg cos θ for an object sliding down; a negative result read as slowing. No constant-velocity problems, no kinematics, no motion up the slope.
Handoff: v23, solving ramp problems at constant velocity and while accelerating.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key (v12, v21): weight purple; normal teal; friction terracotta; components dashed in their force's colour until named, then solid and thinner; net force thick ink with a double head, in its own panel; velocity arrows blue and acceleration arrows green (thin, above the object, labelled, never on the dot); angle arcs amber; light and drop lines pale grey dashes; derivation rows ink with the current row bright; crossed items red with a scribble cross.

### 1. hook (which box wins?)
> Last time, we found the part of the weight that presses into a ramp. Now for the other part, the one along the slope. Here are two boxes on the same smooth ramp, so smooth there's no friction at all. One is two kilograms. The other is eight kilograms, four times as heavy. We release them together, from rest. Which one reaches the bottom first? Or is it a **tie**?

Visual: opens on v21's last frame (the dot on tilted axes, solid "mg cos θ", the dashed along-slope part with "?"; the plank and box faint at the left; the "Next" chip). The chip becomes the heading: "Splitting the weight on a ramp". The left ramp brightens at 30°; the single box is replaced by two boxes side by side at the top start mark (the smaller tagged "2.00 kg", the larger "8.00 kg"), both on a glossy coded sheen across the plank (tag "frictionless"). A finish mark at the bottom (scale chip "2.0 m"). On "tie" chips "2 kg?", "8 kg?", "tie?" and a 3-second countdown ring.

### 2. the part along the slope: m g sin theta
> Before the race, let's finish splitting the weight. The part pressing into the slope sits next to the angle, so it's m g cos theta. The part along the slope sits opposite the angle, in the same triangle. Sine is opposite over hypotenuse, so the parallel part is m g sin **theta**. Join the two parts tip to tail, and they rebuild the weight **exactly**. Now steepen the ramp, and watch them trade. The part along the slope **grows**, and the part pressing in shrinks. For last video's twelve kilogram box at thirty degrees, that's fifty-eight point eight newtons along the slope, and one hundred and two newtons pressing in.

Visual: right column: v21's dot and tilted axes with W, the solid F⊥ and the dashed "?" part. Pale light lines now shine across the slope (perpendicular to it); a drop line runs from the weight's tip to the along-slope axis; the dashed purple shadow grows down the slope from the dot. The triangle outline appears with the amber θ at the weight's tail (between the weight and the perpendicular axis, v21's arc), "adjacent" on F⊥ and "opposite" on the along-slope side; grey chip "sin θ = opposite / hypotenuse". On "theta" the shadow turns solid: "F∥ = mg sin θ (along the slope, downhill)"; the F⊥ label reads "F⊥ = mg cos θ". On "exactly" the two parts slide tip to tail and land on the weight's tip, which glows; a right-angle mark at the corner; grey row "F∥² + F⊥² = (mg)²". On "grows" the sweep (author note b): the plank and the dot's axes tilt together from 10° to 60°, the two solid parts trading length, readouts "F∥ = 0.17 → 0.87 × mg", "F⊥ = 0.98 → 0.50 × mg"; back to 30°. On the last sentence a small v21 box inset with "F∥ = 58.8 N" and "F⊥ = 102 N" (grey "12.0 kg, 30.0°").

### 3. the race: why mass cancels
> Now the race. It's a **tie**. Here's why. On a frictionless ramp, the only force along the slope is m g sin theta, so that's the net force. By Newton's second law, the net force equals mass times acceleration. So m g sin theta equals m **a**. The mass is on both sides, so it cancels, and a equals g sin **theta**. The eight kilogram box does get four times the pull down the slope, but it also has four times the mass to speed up. At thirty degrees, both speed up at four point nine oh metres per second **squared**.

Visual: on "tie" the race plays (author note c, tag "slowed down"): both boxes slide together and cross the finish mark side by side; the finish mark flashes. Replay at the top with each box carrying a purple along-slope arrow to one scale: "9.80 N" on the 2.00 kg box, "39.2 N" (four times as long) on the 8.00 kg box. Right column `AlignedAlgebra`, one row per cue: "along the slope: F_net = mg sin θ"; "F_net = ma"; on "a" "mg sin θ = ma"; on the second "theta" the two m's strike through and "a = g sin θ" boxes. Split readout under the boxes: "9.80 N ÷ 2.00 kg" and "39.2 N ÷ 8.00 kg"; on "squared" both resolve to "4.90 m s⁻²".

### 4. checking the result at the extremes
> Always check a result like this at the extremes. Make the ramp flat, theta zero, and sin theta is zero, so there's no acceleration. That's right: a box on a flat, smooth floor just stays where it is. Make it vertical, ninety degrees, and sin theta is one, so a equals g. That's free fall, straight **down**. In between, a steeper ramp gives a bigger part of the weight along the slope, and a bigger acceleration.

Visual: the plank with one box tilts to 0°: readout "sin 0° = 0, a = 0", the box sits still (tag "flat: no acceleration"). The plank rotates up to 90° (the stand's boss rises to its top; the plank stands against it like a wall): readout "sin 90° = 1, a = g = 9.80 m s⁻²"; on "down" the box drops straight down beside the vertical plank (tag "free fall"). The plank returns to 30°; on "In between" a small curve "a = g sin θ" from 0° to 90° draws beside the readout (axes "θ (°)" and "a (m s⁻²)", end values only).

### 5. prediction: does friction bring the mass back?
> Now make the ramp rough, with both boxes already sliding down. Friction depends on how hard the surfaces press together, and the heavier box presses harder. So does friction let the heavier box **win**?

Visual: the plank's sheen fades to a matt, rough texture (coded fine hatching on the top surface; tag "rough: μk = 0.20"); both boxes back at the start with a small blue velocity arrow each (tag "already sliding"). On "presses harder" the 8.00 kg box's teal normal arrow draws four times the 2.00 kg box's. On "win" chips "8 kg wins?", "tie?" and a 3-second countdown ring.

### 6. deriving the acceleration with friction
> Let's derive it, building the formula one step at a time from laws we already trust. Take down the slope as positive. Across the slope, nothing accelerates, so N equals m g cos theta, from last video. The box is sliding, so kinetic friction acts. It equals mu times N, where mu is the coefficient of kinetic friction. That's mu m g cos theta, pointing up the **slope**, against the sliding. Along the slope, the net force is the driving part minus friction: m g sin theta minus mu m g cos **theta**. Newton's second law sets that equal to m a. Every term has an m, so divide it out. a equals g sin theta, minus mu g cos **theta**. So no, the heavier box doesn't win. Its friction is four times bigger, but so is its mass, in exactly the same **ratio**.

Visual: right column: the dot for one sliding box with W, F∥, F⊥, teal N and a sign chip "+ down the slope". `AlignedAlgebra`, one row per sentence: "across: N = mg cos θ" (grey "v21"); "f = μN" (gloss "μ, mu: coefficient of kinetic friction (v19)"); on "slope" "f = μmg cos θ, up the slope" and the terracotta friction arrow draws on the dot, up the slope; "along: F_net = mg sin θ − μmg cos θ" on the second "theta", with the friction arrow and F∥ glowing head to head; "mg sin θ − μmg cos θ = ma"; the m's strike through; on the third "theta" boxed "a = g sin θ − μg cos θ", with grey "= g(sin θ − μ cos θ)" beside it and a tag "sliding down; μ = kinetic". On "ratio" the race plays on the rough plank (author note d): terracotta friction arrows "3.39 N" and "13.6 N" on the two boxes; they tie again; readout "3.20 m s⁻² for both".

### 7. worked example: a rough thirty degree ramp
> Let's use it. Task: find the acceleration of a box sliding down a thirty point oh degree ramp. The givens: theta is thirty point oh degrees, mu is zero point two oh, and g is nine point eight oh metres per second squared. g sin theta is four point nine **oh**. mu g cos theta is one point seven **oh**. So a is four point nine oh minus one point seven oh, which is three point two metres per second squared, down the **slope**, to two significant figures. Friction takes about a third off the frictionless value.

Visual: clear change to the calculation layout; the rough plank at 30° with one sliding box at the left. Task strip "Find the acceleration of the sliding box". Equation strip "a = g sin θ − μg cos θ (sliding down)". Givens group (navy): "θ = 30.0°; μk = 0.20; g = 9.80 m s⁻²" (grey tag "site activity values"). Rows, one per cue: "g sin θ = 9.80 × sin 30.0° = 4.90 m s⁻²"; "μg cos θ = 0.20 × 9.80 × cos 30.0° = 1.70 m s⁻²"; on "slope" "a = 4.90 − 1.70 = 3.2 m s⁻² down the slope (2 s.f., from μ)", boxed. On the last sentence a bar "4.90 (smooth)" with "1.70" shaded off its end in terracotta (tag "about a third").

### 8. a negative answer
> What if the answer comes out negative? Try a box sliding down a gentle ten degree ramp, with mu equal to zero point three oh. g sin theta is only one point seven oh, but the friction part is two point nine oh. So a is minus one point one nine metres per second squared. That minus sign doesn't mean the box suddenly slides back up. It means the acceleration points up the slope while the box is still moving down. So the box slows **down**, until it **stops**. Then the formula no longer applies, and whether the box stays put depends on static friction.

Visual: the plank lowers to 10° (rough); rows "g sin θ = 1.70 m s⁻²", "μg cos θ = 0.30 × 9.80 × cos 10.0° = 2.90 m s⁻²", "a = 1.70 − 2.90 = −1.19 m s⁻²" (the minus sign ringed). On "doesn't mean" a ghost box sliding back up the slope fades in and takes a scribble cross. On "acceleration points up" the box slides down the slope (author note f) with a blue velocity arrow pointing down the slope and a green acceleration arrow pointing up it; on "down" the velocity arrow shrinks in step with a speed readout falling from "2.0 m s⁻¹"; on "stops" it vanishes, the box rests, and the "a = −1.19" row greys with the chip "sliding has stopped: test static friction (v19)".

### 9. memory aid
> To keep the two parts straight: squash gets cos, slide gets sin. The squash presses the box into the ramp, m g cos theta. The slide pulls it down the ramp, m g sin theta. Both need theta to be the ramp's angle to the **horizontal**.

Visual: the dot with both solid parts stays. The handwritten line writes large: "Squash gets cos, slide gets sin." Under it, smaller: "θ = the ramp's angle to the horizontal." On "squash" the F⊥ part pulses; on "slide" F∥ pulses; on "horizontal" the plank's arc at the hinge glows. Hold about 2 seconds.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. A four point oh oh kilogram crate slides down a smooth, frictionless ramp inclined at twenty-five point oh degrees. Take g as nine point eight oh metres per second squared. Calculate the components of the crate's weight parallel and perpendicular to the ramp, and the crate's acceleration. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Physics"), worded as printed, with a small sketch (the plank plate at 25° with the box plate; the "25.0°" arc only; no arrows): "A 4.00 kg crate slides down a smooth, frictionless ramp inclined at 25.0° to the horizontal. Take g = 9.80 m s⁻². (a) Calculate the components of the crate's weight parallel and perpendicular to the ramp. (b) Calculate the acceleration of the crate. (3 marks)" Tag: "HSC-style question, written for HSCScience". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 11. feedback 1 (brief)
> Parallel, m g sin theta, is sixteen point six **newtons**. Perpendicular, m g cos theta, is thirty-five point five **newtons**. With no friction, a is g sin twenty-five, four point one four metres per second squared, down the **ramp**. Eight point eight eight uses cos for the slide. Slide gets **sin**.

Visual: card shrinks to the top; "frictionless" and "25.0°" underlined. Rows: "mg = 4.00 × 9.80 = 39.2 N"; on "newtons" "F∥ = 39.2 × sin 25.0° = 16.6 N"; on "newtons" (second) "F⊥ = 39.2 × cos 25.0° = 35.5 N"; on "ramp" "a = g sin θ = 9.80 × sin 25.0° = 4.14 m s⁻² down the ramp", boxed. On "sin" a chip "a = g cos θ = 8.88 m s⁻²" fades in and is crossed (caption "cos is the squash"). Hold about 1 second.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. A two point oh oh kilogram block slides down a rough ramp. The component of its weight down the ramp is eight point oh oh newtons, and the kinetic friction on it is ten point oh newtons. Determine the block's acceleration, and describe its motion while it is still sliding. Pause here to answer.

Visual: `QuestionCard`, worded as printed (no diagram): "A 2.00 kg block slides down a rough ramp. The component of its weight down the ramp is 8.00 N, and the kinetic friction force on the block is 10.0 N. (a) Determine the acceleration of the block. (b) Describe the block's motion while it is still sliding. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 2 (brief)
> Taking down the ramp as positive, the net force is eight minus ten, minus two point oh **newtons**. So a is minus two point oh over two point oh oh, minus one point oh metres per second **squared**. That's one point oh up the ramp, so the block slows down as it slides **down**. Saying it moves back up the ramp misreads the sign. The minus gives the direction of the acceleration, not the **motion**.

Visual: card shrinks to the top; "slides down" and "kinetic friction" underlined. A small dot: purple "8.00 N" down the slope, terracotta "10.0 N" up it, sign chip "+ down". Rows: on "newtons" "F_net = 8.00 − 10.0 = −2.0 N"; on "squared" "a = −2.0 ÷ 2.00 = −1.0 m s⁻²"; on "down" "(b) acceleration 1.0 m s⁻² up the ramp: it slows while sliding down", boxed, with a green arrow up and a blue arrow down. On "motion" a chip "it slides back up the ramp" fades in and is crossed. Hold about 1 second.

### 14. handoff
> So splitting the weight gives one formula for sliding down a ramp: a equals g sin theta, minus mu g cos theta, and the mass cancels. Next, we'll put it to work. What happens when friction exactly matches the slide, and how fast is a box going when it reaches the **bottom**?

Visual: the memory line returns small at the top. The rough plank at 30° with one sliding box at the left; the boxed formula "a = g sin θ − μg cos θ" centre right. Two chips write: "steady speed?" (the box's velocity arrow holding length) and "speed at the bottom?" (a flag at the finish mark). On "bottom" the chip "Next: How do we solve ramp problems at constant velocity and while accelerating?". This is the final frame of the video (series rule). Hold about 2 seconds.

### 15. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. On a ramp of angle θ, the weight splits into F∥ = mg sin θ (along the slope, downhill) and F⊥ = mg cos θ (into the slope). Together they rebuild mg.
2. Frictionless ramp: F_net = mg sin θ = ma, so a = g sin θ, the same for every mass. Checks: θ = 0 gives a = 0; θ = 90° gives a = g.
3. Sliding down with kinetic friction (down the slope positive): N = mg cos θ, f = μN up the slope, so ma = mg sin θ − μmg cos θ and a = g sin θ − μg cos θ.
4. A negative a for a box sliding down means the acceleration is up the slope: it slows. Once it stops, use static friction instead.

Memory aid (large, on the notes screen): *Squash gets cos, slide gets sin.* Second line: *θ = the ramp's angle to the horizontal.*

At the end the notes cross-fade back to scene 14's final frame (series rule).

## Teaching checks

- **Does it explain causes?** Why sin for the slide: the along-slope part is opposite the angle (2). Why the parts are enough: they rebuild the weight (2). Why the boxes tie: four times the pull and four times the mass (3, shown with arrows and readouts). Why the checks matter: they catch wrong formulas (4). Why friction doesn't separate them: friction scales with N, which scales with m (6, shown with arrows). Why friction is subtracted: it points against the sliding, up the slope (6). Why a negative a means slowing: the acceleration points opposite the motion (8, shown with velocity and acceleration arrows).
- **Misconceptions addressed:** heavier blocks fall faster down a slope (1, 3, 5, 6); mg cos θ drives the slide (2, 9, feedback 1 crossed); negative a means sliding back up or at rest (8, feedback 2 crossed); friction adds to the slide (6).
- **One idea at a time:** the second component (2), the smooth case (3), its checks (4), the rough case (5, 6), the numbers (7), the sign (8); one derivation row per cue.
- **Video makes it easier:** the student watches the second shadow grow and the two parts rebuild the weight (2), watches the parts trade in the sweep (2), watches two boxes tie while their arrows differ fourfold (3, 6), watches a box drop beside a vertical plank (4) and watches a box slow to rest under an up-slope acceleration (8).
- **Response opportunity:** two 3 s predictions (1, 5); two unseen HSC-style tasks, 10 seconds each, every condition on the card (smooth; already sliding; the forces given), nothing answer-bearing. One crossed mistake each; feedback about 23 s and 28 s.
- **Avoided double teaching:** components (v03), N = mg cos θ (v21), kinetic friction (v19) and F_net = ma (v16) recalled in a line each.
- **Syllabus coverage:** `ci9a2bd04a`: F⊥ = mg cos θ, F∥ = mg sin θ (2, 9, A1); `cib1bb3a58`: the derivation along the slope with friction, using Newton's second law parallel to the plane (6, 7, 8, A2).
- **Out of scope by design:** constant velocity and μk = tan θ, kinematics, motion up the slope (v23); data (v24).

## Practice questions and model answers

**Attempt 1 (scene 10; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "A 4.00 kg crate slides down a smooth, frictionless ramp inclined at 25.0° to the horizontal. Take g = 9.80 m s⁻². (a) Calculate the components of the crate's weight parallel and perpendicular to the ramp. (b) Calculate the acceleration of the crate."
Model answer: (a) mg = 39.2 N; F∥ = mg sin θ = 39.2 sin 25.0° = 16.6 N (down the ramp); F⊥ = mg cos θ = 39.2 cos 25.0° = 35.5 N (into the ramp). (b) No friction, so F_net = F∥ = ma: a = g sin θ = 9.80 sin 25.0° = 4.14 m s⁻² down the ramp. Classic mistake (crossed): "a = g cos θ = 8.88 m s⁻²".

**Attempt 2 (scene 12; original wording, HSC style, 3 marks suggested).** "A 2.00 kg block slides down a rough ramp. The component of its weight down the ramp is 8.00 N, and the kinetic friction force on the block is 10.0 N. (a) Determine the acceleration of the block. (b) Describe the block's motion while it is still sliding."
Model answer: (a) Taking down the ramp as positive: F_net = 8.00 − 10.0 = −2.0 N; a = F_net ÷ m = −2.0 ÷ 2.00 = −1.0 m s⁻², that is 1.0 m s⁻² up the ramp. (b) The acceleration is opposite the velocity, so the block slows down while still moving down the ramp (until it stops; then static friction decides whether it stays). Classic mistake (crossed): "it moves back up the ramp".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| v21 box components | 58.8 N along; 102 N (101.8) pressing in; rebuild 117.6 N | 2 |
| Sweep (fractions of mg) | 10° 0.17, 0.98; 30° 0.50, 0.87; 45° 0.71, 0.71; 60° 0.87, 0.50 | 2 |
| Smooth race (30.0°) | 9.80 N on 2.00 kg; 39.2 N on 8.00 kg; a 4.90 m s⁻² each; 2.0 m; 0.904 s | 1, 3 |
| Checks | sin 0° = 0, a = 0; sin 90° = 1, a = 9.80 m s⁻² | 4 |
| Rough race (30.0°, μk 0.20) | friction 3.39 N and 13.6 N; a 3.20 m s⁻² each | 5, 6 |
| Worked (site activity) | 4.90; 1.70; a 3.2 m s⁻²; about a third (0.346) | 7 |
| Negative case (10.0°, μk 0.30) | 1.70; 2.90; a −1.19 m s⁻²; start 2.0 m s⁻¹ | 8 |
| A1 | 39.2 N; 16.6 N; 35.5 N; 4.14 m s⁻²; crossed 8.88 | 10, 11 |
| A2 | −2.0 N; −1.0 m s⁻² (1.0 up the ramp) | 12, 13 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (2 Nov); Codex to re-check.

- 117.6 sin 30° = 58.80; 117.6 cos 30° = 101.84; √(58.80² + 101.84²) = 117.6.
- sin and cos at 10°, 30°, 45°, 60°: 0.1736, 0.9848; 0.5000, 0.8660; 0.7071, 0.7071; 0.8660, 0.5000.
- 2.00 × 9.80 × sin 30° = 9.80; 8.00 × 9.80 × sin 30° = 39.2; ÷ mass = 4.90 each; t = √(4.0 ÷ 4.90) = 0.904 s.
- 0.20 × 9.80 × cos 30° × 2.00 = 3.39; × 8.00 = 13.58; a = 4.900 − 1.697 = 3.203.
- 9.80 sin 10° = 1.7018; 0.30 × 9.80 × cos 10° = 2.8953; difference −1.1935; 2.0 ÷ 1.1935 = 1.68 s; 4.0 ÷ 2.387 = 1.68 m; tan 10° = 0.1763.
- A1: 39.2 sin 25° = 16.567; 39.2 cos 25° = 35.527; 9.80 sin 25° = 4.1417; 9.80 cos 25° = 8.8818.
- A2: 8.00 − 10.0 = −2.0; −2.0 ÷ 2.00 = −1.0; asin(8.00 ÷ 19.6) = 24.09°; 10.0 ÷ (19.6 cos 24.09°) = 0.559.

## Memory aid check

- **"Squash gets cos, slide gets sin."** Completes v21's "Squash gets cos." Meaning, as said in scene 9: the part of the weight pressing into the ramp (the squash) is mg cos θ; the part pulling it down the ramp (the slide) is mg sin θ. Assumptions checked: θ must be the ramp's angle to the horizontal (on screen and spoken); it describes the components of the weight only, not the normal force or friction in every case (v21's condition stands; friction is μN, scene 6); valid for 0° to 90°. It blocks the site's second misconception (mg cos θ as the driving component) directly, and survives the extremes check (flat: no slide, sin 0 = 0; vertical: all slide, sin 90° = 1). Introduced after both components (2), the race (3) and the derivation (6).
- **Considered, not used:** "SOH CAH TOA" (Stage 5; correct but it needs the triangle drawn and the angle located every time, which is where students go wrong on ramps).

## Narration length estimate

Revision 1 count (2 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,748 characters**, 15 scenes. Characters per scene (1 to 15): 361, 612, 501, 408, 198, 736, 500, 546, 228, 322, 287, 305, 385, 270, 75. At 13.3 characters per second the speech is about 432 s; add about 18 s of holds and settling (the sweep and rebuild in 2, the slowed race in 3, the drop beside the vertical plank in 4, the rough race in 6, the slowing box in 8, the 2-second memory hold), 6 s for two prediction countdowns, 20 s for two attempt countdowns, 2 s of feedback holds and about 54 s more of the quiet notes hold (about 100 s of holds): **about 532 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Two syllabus points, one derivation and its reading fill it without padding. Scene 6 is the longest (the derivation with the rough race at its end); if the learning review finds it dense, move the rough race to the start of scene 7.

## Scene list and build ids

Lesson key `p-y11-v22` (route phys-y11-fa1-v22). Suggested explainer folder `src/explainer/lessons/phys-y11-fa1-v22` and build folder `docs/production/claude-pm/lessons/p-y11-v22` (root to confirm).

In order (kebab-case; 15 scene headings, all `### N.`): hook, parallel-part, race-mass-cancels, extremes, friction-prediction, derivation, worked-example, negative-result, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). The hook and friction-prediction carry 3 s countdowns inside explain scenes. Transitions (`pickTransition`): v21's last frame continues into scene 1 (camera continue: the same dot and plank); 1 to 2 camera continue; 2 to 3 camera pull to the plank for the race; 3 to 4 camera continue (same plank tilting); 4 to 5 camera continue (the plank roughens); 5 to 6 split board; 6 to 7 clear change to the calculation layout; 7 to 8 camera continue (the plank lowers); 8 to 9 camera continue; attempts and feedback card shrink to the top; 13 to 14 board clear; 14 to 15 fade to the notes board, and 15 cross-fades back to 14's final frame.

Holds: hook and friction-prediction (3 s), attempt-1, attempt-2 (10 s after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/p-y11-v22-learning-review.md`, `science_check` = `checks/p-y11-v22-physics-check.md`.

## Assets

Have or requested earlier (uniform scaling only, never stretched):
- v21's ramp kit: `y11p-ramp-plank-v1.png`, `y11p-ramp-hinge-block-v1.png`, `y11p-retort-stand-v1.png`, `y11p-boss-crossbar-v1.png`, `y11p-protractor-v1.png` (all scenes with the ramp; the boss reaches the top of the rod for the 90° check in scene 4, so the stand's rod must be at least as tall as the plank's length above the hinge: noted in v21's brief by this design, see open decision 2).
- `y11p-box-v1.png` (v12): the boxes at two sizes (uniform 1 : 1.59), scenes 1 to 8, 14, and the A1 sketch.

No new plate. The frictionless sheen and the rough texture on the plank's top edge are coded overlays (a thin glossy highlight; fine hatching), not new plates.

Coded: as v21, plus the twin race clock and finish mark, the "pull ÷ mass" readouts, the velocity and acceleration arrows, the speed readout, the small a-against-θ curve in scene 4, the terracotta bar in scene 7.

Kit gaps (for the build brief): v21's `TiltRamp` and `FreeBodyDot` (both needed here; `FreeBodyDot` gains a second shadow axis and a strike-through for cancelled symbols in `AlignedAlgebra`), plus **`RampMotion`** (an object on `TiltRamp` driven by s(t) = s₀ + ut + ½at² from a shared clock, with optional playback slow-down and a stop condition when v reaches zero), lesson-local acceptable for Revision 1.

## Codex asset brief

None. No new plate is needed (v21's ramp kit and the v12 box plate are reused). One note for v21's brief: the stand's rod must reach at least the plank's full length above the hinge height so the boss can hold the plank vertical (scene 4).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the race animations use a = 4.90 m s⁻² (smooth) and 3.20 m s⁻² (rough) for both boxes from the same clock, and that the scene 8 box slows at 1.19 m s⁻² and stops.
3. Confirm the physics claims: F∥ = mg sin θ, F⊥ = mg cos θ with θ the ramp angle; on a smooth ramp a = g sin θ independent of mass; checks at 0° and 90°; f = μk N with N = mg cos θ for a block sliding down, friction up the slope; a = g sin θ − μg cos θ; a negative value for a block sliding down means an acceleration up the slope (slowing), and after stopping static friction decides.
4. Confirm the syllabus form "a = g sin θ − μg cos θ" is written first on screen, with g(sin θ − μ cos θ) as an equivalent.
5. Confirm the memory aid's condition is on screen and spoken.
6. Confirm both attempt questions are original in wording, carry every condition (smooth; already sliding; the forces), and show nothing answer-bearing.
7. Confirm the syllabus quotes match the route JSON exactly and no 2017-syllabus label appears.
8. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
9. Confirm the narration character count by script with the build parser rules.
10. Add site corrections 1 to 3 under Decisions to `../site-corrections-phys-y11.md` (owner record only).

## YouTube metadata (draft)

Title: Inclined Plane Acceleration: Deriving a = g sin θ − μg cos θ | Year 11 Physics

(Title length: 79 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa1-fundamentals-of-mechanics/lesson21.sa.html

A 2 kg box and an 8 kg box race down the same smooth ramp. Which one wins? Split the weight into its two parts, mg sin θ along the slope and mg cos θ into it, and Newton's second law along the slope shows why they tie: four times the pull, but four times the mass. Then add friction and derive a = g sin θ − μg cos θ step by step, check it at 0° and 90°, use it on a rough 30° ramp, and see what a negative answer really means for a sliding box. Two exam-style questions at the end.

Year 11 Physics (2025 syllabus), Focus Area 1: Fundamentals of mechanics.
Syllabus content (NSW Physics 11-12, 2025):
"Resolve the weight force into perpendicular and parallel components on inclined planes using F ⊥ = mg cos θ and F ∥ = mg sin θ" (ci9a2bd04a)
"Derive a = g sin θ - μg cos θ to describe the acceleration on an object on an inclined plane with friction using Newton’s second law parallel to the plane" (cib1bb3a58)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa874ba975

Builds on: The normal force on a ramp (previous video). Next: Solving ramp problems.

#Year11Physics #Physics #InclinedPlanes #HSCScience

## Open decisions

- **1. Route refinement (adopted from the pack; root to record).** The pack proposes "Start with ramp components and kinetic friction. Stop at deriving along-ramp acceleration while already sliding. Hand complete ramp problems to v23." Adopted as written. Root to replace the route's placeholder stop and next-handoff wording.
- **2. The 90° check on the plank (scene 4).** Standing the plank vertical needs a tall stand rod (or the boss leaving the rod's top). If the painted stand is too short, scene 4 shows the 90° case on the dot diagram only (tag "diagram only") and keeps the box drop beside a coded vertical line. No narration change.
- **3. Factorised form.** The syllabus writes a = g sin θ − μg cos θ; the site uses g(sin θ − μ cos θ). Both are on screen, the syllabus form first. Root to confirm.
- **4. Site link form.** As v08.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v21 and v19 at Year 11 entry; check that "opposite the angle" is seen, not just said; that the race with fourfold arrows makes "mass cancels" feel caused; that the extremes check reads as a habit, not a detour; that the derivation keeps one row per sentence; that the slowing box makes the negative sign concrete; that the cards give nothing away), then the Codex physics check and error check.
- The second shadow and rebuild (2), the twin races with their arrows (3, 6) and the slowing box with opposed arrows (8) carry the explanation; judge them at playback speed in the voiced preview. Both boxes in each race must be driven by the same function and clock.
