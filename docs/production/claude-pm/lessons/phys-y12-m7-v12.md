# Year 12 Physics M7 V12: Inertial frames and Einstein's postulates. Why must observers agree on light speed? (design)

Status: Revision 1 (6 Nov 2026): first design. Needs independent learning review and science check before voicing.

Narration 6,218 characters, 18 scenes, about 552 s, counted by script with the build parser rules (see "Narration length estimate"). Opens on v11's final frame.

Scope: twelfth video of Year 12 Physics Module 7 (The Nature of Light, Physics Stage 6, 2017 syllabus), inquiry question "How does the behaviour of light affect concepts of time, space and matter?". Templates as `phys-y12-m6-v13.md`. No pre-design pack exists; the pack work is done here (2017 wording from the ledger, site values kept, every number recalculated in Python, original attempts, asset reuse). Site lesson read in full (6 Nov, read-only, through the brief 168 text extract `work/brief168/module7-lesson11.sa.txt`, hash checked against the live file): orient and predict (torch on a train at 100 km/h, warm-up 10 m/s on 20 m/s, intentions, vocabulary: inertial frame, special relativity, luminiferous aether, Lorentz factor, null result), "weigh-the-aether-evidence" (Galilean relativity, Maxwell's c, aether, Michelson-Morley Figure 1, two postulates, Stop and Check 0.8c laser, MC), "build-the-lorentz-factor" (γ table and graph), "solve-gamma-worked-examples" (0.98c muon and electron), "tell-inertial-from-non-inertial" (definitions, Figure 3, Stop and Check ISS, car, spacecraft; true/false), apply and consolidate (Activities 1 and 2, "Evaluate 7 marks" Michelson-Morley, "Analyse 6 marks" inertial frames), practice Q1 to Q3, reflect (Michelson and Morley's 11 m path, 0.4 expected, under 0.01 measured): `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson11.sa.html`, SHA256 `0e9d0b68b7c4e4e4ca8a1e73b7be111821dda444d25d8474e39c59a101021e54` (recomputed 6 Nov; matches the route). Lesson 10's history section (read for v09) is cited once in the site notes. Route entry: `phys-y12-m7-v12`, sections `weigh-the-aether-evidence`, `tell-inertial-from-non-inertial`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "State Einstein postulates, inertial frames and supporting evidence; distinguish null ether tests from proof of every later claim. Stop before quantitative dilation." Next: "phys-y12-m7-v13: How can two observers measure different elapsed times?"

Owner rules applied: 2017 syllabus quoted exactly; no people, hands, faces or body outlines (observers are frames: a spacecraft and Earth, each with coded rulers and clocks; the site's train passenger and platform observer are replaced); the interferometer schematic, fringes, frames, velocity arrows and particle tracks are coded, HSC style; the spacecraft, Earth, ball, car and lift are painted plates (two new from v11, four reused), scaled uniformly, never stretched; every number recalculated in Python; a 3 s prediction; "Pause here to answer." with a 10 s countdown; brief feedback with one crossed-out mistake; original attempts; Maxwell, Michelson, Morley, Galileo and Einstein named in words only; Australian spelling; no em dashes. Recalled, not re-taught: v01 (Maxwell's prediction c = 1/√(μ₀ε₀)), v02 (measuring c), v06 (interference fringes from path difference), Year 11 (Newton's first law, relative velocity, sound needing a medium).

Syllabus content (Physics Stage 6 (2017), Module 7; ledger id `P7-IQ4-01`), quoted from the route JSON `syllabusActions`:

- `P7-IQ4-01`: "analyse and evaluate the evidence confirming or denying Einstein’s two postulates:" "the speed of light in a vacuum is an absolute constant", "all inertial frames of reference are equivalent (ACSPH131)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 60)

**Boundary:** starts on v11's final frame (the spacecraft at 0.8c, a light pulse ahead, "c measured on board?", "c measured from Earth?"). Teaches: an observer as a frame of reference (rulers and clocks); Galilean velocity addition (probe example); inertial and non-inertial frames (coasting versus thrusting spacecraft, floating ball); no internal experiment detects uniform motion; Maxwell's c with no reference to source or observer; the aether hypothesis and the expected aether wind (Earth at about 30 km s⁻¹); Michelson-Morley (method, expected 0.4 fringe, sensitivity about 0.01, null result, repeated); what the null result does and does not establish (rescues made no new testable predictions); Einstein's two postulates; why the second follows from the first plus Maxwell's laws; direct evidence that c does not depend on the source (CERN 1964 pion gamma rays); the price (observers must disagree on distances and times). Stops before the light clock's algebra, γ and any quantitative dilation (v13).

## Decisions

- **Learner question (route wording kept).** "Why must observers agree on light speed?" asks for a cause, and the video gives one: Maxwell's equations are laws of physics; the first postulate says every inertial frame has the same laws; so every inertial observer gets the same c (9). The aether alternative made a testable prediction that failed (5 to 7), and direct tests with moving sources agree (10).
- **Hook (site lesson 11 Stop and Check, "A spaceship travels past Earth at 0.8c. The captain shines a laser forward", with no captain).** The spacecraft from v11's final frame fires a laser pulse; Galilean addition gives 1.8c; 3 s prediction; measurement says c. The site's train and flashlight hook is replaced (no people; one visual system with v13 to v15).
- **Observer means frame (route "inertial frames"; site vocabulary).** Plain meaning: a set of rulers and clocks that records where and when events happen. On screen, each frame is a coded ruler and a coded clock attached to Earth or to the spacecraft, never a person (author note a).
- **Galilean addition (site warm-up, 10 m/s on 20 m/s, re-staged).** A probe launched forward at 10 km s⁻¹ from a ship at 20 km s⁻¹: 30 km s⁻¹ from Earth. Painted ship plus a small coded probe.
- **Inertial frames (site "tell-inertial-from-non-inertial", Figure 3 re-staged in space).** Coasting spacecraft (engines off): a floating steel ball stays put in the cabin (Newton's first law holds). Thrusting (exhaust layer on): the ball drifts to the back wall relative to the cabin with no force on it (first law fails in that frame). The cabin is a coded cut-away window on the hull. Turning and spinning frames are named as non-inertial (site examples: car cornering, roundabout).
- **Principle of relativity, seeded (site "Analyse 6 marks" step 3: "no experiment performed inside a closed frame can determine whether that frame is at rest or moving with constant velocity").** Experiments in deep space use collisions and a vibrating spring, not pendulums (no gravity). "There's no special frame that is truly at rest."
- **Maxwell and the aether (site "weigh-the-aether-evidence").** c from v01, said with the symbols μ₀ and ε₀; the aether as "like sound through air" (Year 11 recall); Earth's orbital speed about 30 km s⁻¹ (29.8, computed) as the expected wind (site "Evaluate 7 marks" step 2: "about 3 × 10⁴ m s⁻¹").
- **Michelson-Morley (site Figure 1, "Evaluate 7 marks" steps 3 and 4, reflect).** Coded HSC-style interferometer schematic: source, half-silvered splitter, two perpendicular arms, mirrors, detector; fringes from v06's interference in a clause. Expected shift about 0.4 fringe on rotation; detectable about 0.01; none seen at any orientation or season; repeated since. The apparatus floated on mercury is shown as a grey slab under the schematic, tag only.
- **What the null result does not show (route "distinguish null ether tests from proof of every later claim"; site "Evaluate 7 marks" steps 5 to 7).** Strong evidence against a stationary aether; cannot alone prove non-existence; rescues (aether drag, the arm shrinking along the motion) fitted but made no new testable predictions. The rescue named on screen is "the arm along the motion shrinks just enough" (Lorentz and FitzGerald, text tag); v14 will show that a related contraction appears in relativity for a different reason (author note b).
- **Postulates (site wording adapted to the syllabus).** On screen: "1. The laws of physics are the same in all inertial frames (all inertial frames are equivalent)." "2. The speed of light in a vacuum, c, is the same for all inertial observers, whatever the motion of the source or observer (an absolute constant)." The syllabus phrases are shown in brackets.
- **Why they must agree (the causal core, scene 9; site "Analyse 6 marks" and "Evaluate 7 marks" step 5).** If c depended on your motion, measuring light inside a closed cabin would reveal your speed, breaking postulate 1; Maxwell's laws give one c for everyone. The Michelson-Morley result is what the postulates predict.
- **Direct evidence for postulate 2 (route "supporting evidence"; syllabus "evidence confirming or denying"; not on the site).** CERN, 1964: gamma rays from neutral pions moving at more than 0.9997c were timed at c to within about 1 part in 10⁴ (author note c). Said as "more than ninety nine point nine per cent". One scene; tagged for the science check.
- **Evidence for postulate 1 (short).** The Michelson-Morley null result holds throughout the year as Earth's velocity changes direction; no experiment has found a preferred frame. Said in scene 9's last sentence and listed in the key notes.
- **The price (scene 11, preparing v13).** Speed is distance over time; same speed for the same pulse means disagreement on distance or time. No numbers.
- **Memory aid (scene 12): "Same laws, same light."** See "Memory aid check".
- **Attempts (original, HSC style).** A1 (3 marks): classify (a) a coasting spacecraft, (b) a car going round a roundabout at constant speed, (c) a lift slowing as it arrives at a floor. Crossed: "the car is inertial because its speed is constant". A2 (3 marks, evaluate): "The Michelson-Morley experiment proved that the aether does not exist." Crossed: "proved".
- **Handoff (route next).** Scene 17: a coded light clock (two mirrors, a pulse) on the spacecraft's hull; from the ship, a vertical path; from Earth, a longer diagonal path; tags "same c", "longer path", "time per tick?"; chip "Next: how can two observers measure different elapsed times?". See "Final frame".
- **Colour key (relativity, proposed for root; v13 to v15 follow):** Earth frame ink (ruler and clock); spacecraft frame teal (ruler and clock); light pulses amber; velocities orange arrows; the aether wind grey; crossed predictions red.
- **Site sources used:** lesson 11: predict (Galilean versus constant c) (1); warm-up (10 on 20 m/s) (2); "weigh-the-aether-evidence" text, Figure 1, postulates, Stop and Check 0.8c laser (1, 5, 6, 8); "tell-inertial-from-non-inertial" definitions, examples, Figure 3 (3, A1); true/false items (A1, 16); "Evaluate 7 marks" (prediction 3 × 10⁴ m s⁻¹, 0.4 versus 0.01 fringe, repetitions, what it counts against, rescues, judgement) (5 to 7, 15, 16); "Analyse 6 marks" (closed-frame experiments, acceleration detectable from inside) (3, 4, 9); practice Q1(c) model answer ("did not alone prove Einstein's second postulate") (7, 16); reflect (11 m, 0.4, under 0.01) (6). Not used: the Lorentz factor sections (v13), the GPS and muon material (v13).
- **Site notes (quoted from site lessons 10 and 11, read 6 Nov; for root to log in `../site-corrections-phys-y12.md` if accepted):**
  1. Historical error (lesson 10, "wave-vs-particle-history"): "Maxwell's EM theory (1865): Light is a transverse oscillation of electric and magnetic fields. No medium required, refuting the aether." Maxwell assumed an aether; it was set aside only after Michelson-Morley and Einstein (1905). Lesson 11 says this correctly ("Physicists assumed light travelled through an invisible medium called the luminiferous aether"). Correction: "Maxwell's theory treated light as electromagnetic waves (in an aether, as physicists then assumed)".
  2. Precision (lesson 11, reflect): "In June 1905, Albert Einstein ... published 'On the Electrodynamics of Moving Bodies,' using this null result to argue that the speed of light is constant". Einstein's paper does not cite Michelson-Morley by name; it refers generally to "unsuccessful attempts to discover any motion of the earth relatively to the 'light medium'". Suggest "consistent with this null result". Also "June 1905" is the submission month (published September 1905).
  3. Precision (lesson 11, reflect): "Albert Michelson and Edward Morley at Case Western Reserve University, Cleveland". In 1887 they worked at the Case School of Applied Science and Western Reserve University, separate institutions (merged in 1967). Suggest "in Cleveland, Ohio".
  4. Ambiguity (lesson 11, Stop and Check): "Classify each as inertial or non-inertial, with a reason: (a) ISS in circular orbit". No answer is given, and the classification depends on the theory used (non-inertial in the Newtonian sense because it accelerates centripetally; locally inertial in general relativity because it is in free fall). Suggest replacing (a) with "a car braking at traffic lights", or adding the Newtonian answer with a note.
  5. Checked and correct: γ values (1.005, 1.155, 2.29, 7.09, 22.4); Q2(a) γ(0.95) = 3.20; Stop and Check 0.8c laser (c in both frames).
- **Cause chain taught, in order:** (1) observers are frames with rulers and clocks; everyday velocities add (2); (2) in inertial frames the first law holds; acceleration is detectable from inside (3); (3) uniform motion is not detectable from inside, so no frame is absolutely at rest (4); (4) Maxwell's laws give one c, so physicists assumed an aether and expected a wind (5); (5) Michelson-Morley could have seen the wind and did not (6); (6) a null result counts strongly against the stationary aether but cannot prove non-existence alone (7); (7) Einstein: same laws in every inertial frame, and c the same for every inertial observer (8); (8) Maxwell's laws plus postulate 1 force postulate 2: a frame-dependent c would reveal your motion (9); (9) moving-source tests confirm it (10); (10) so distances and times must differ between frames (11).
- **Entry knowledge (route `entryKnowledge`):** v11 and earlier Module 7 (c from Maxwell (v01), measured c (v02), interference fringes (v06)); Year 11 (Newton's first law, relative velocity, sound in a medium).
- **Learner-visible vocabulary (plain meaning at first use):** frame of reference, observer (a set of rulers and clocks, 2); inertial frame (not accelerating; the first law works, 3); non-inertial frame (3); aether (a supposed medium for light, 5); interferometer (an instrument that splits and recombines light to compare two paths, 6); null result (no effect found, 6); postulate (a starting assumption a theory is built on, 8).
- **Legacy logic ported:** none. The coded family `m7-light-clock` is used only in the handoff (17), at rest and moving, without its algebra.
- **New explainer motion:** **frames** (coded ruler and clock badges attached to Earth and to the spacecraft; a frame switch that holds one body still and moves the other); **cabin cut-away** (a coded window in the hull showing the floating ball, with the exhaust layer toggling thrust); **velocity addition strip** (arrows that add, then a crossed 1.8c for light); **interferometer schematic** (beams along both arms, a rotating stage, a fringe readout with expected and detected shift markers); **evidence ledger** (two columns, "for" and "against", with items that drop in); **light clock** (handoff only); `Countdown` (3 s in scene 1; 10 s in scenes 13 and 15); `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the spacecraft and Earth across the middle; schematic at centre in scenes 6 and 7; ledger on the right; everything above the bottom 12% of the frame.
- **Author notes (not learner copy):**
  (a) "Observer" in relativity means a coordinate frame; nothing depends on a person being present. The narration says this once (2).
  (b) Lorentz-FitzGerald contraction was introduced ad hoc as a physical compression of matter by the aether wind; in special relativity, length contraction is a consequence of the postulates and is reciprocal. v14 handles the "without being crushed" contrast.
  (c) Alväger, Farley, Kjellman and Wallin, Physics Letters 12, 260 (1964): photons from π⁰ decays with the pions at about 6 GeV (v ≈ 0.99975c); measured photon speed c′ = c + kv with k = (−3 ± 13) × 10⁻⁵. "Within about one part in ten thousand" summarises it. To be confirmed by the science check.
  (d) Michelson's 1887 report: the observed displacement was "certainly less than the twentieth part" of the expected 0.4 fringe and probably less than the fortieth (under about 0.01). The site's "detection threshold near 0.01" is kept as "about a hundredth of a fringe".
  (e) Earth's surface is only approximately inertial (rotation, orbit); A1 avoids it.
  (f) Pronunciations: "mu zero", "epsilon zero"; "Michelson" as "MY-kel-son"; "aether" as "ee-ther"; "pions" as "PIE-ons".
- **Open decisions for root:**
  - **1. The CERN pion evidence (science check).** Keep with the source in author note c; if not confirmed, replace scene 10 with binary-star evidence (light from approaching and receding stars in a binary arrives together) or cut it (about 330 characters).
  - **2. Interferometer as a coded schematic (root).** HSC papers draw it schematically, and the explanation is in the paths. A painted plate of the stone slab apparatus is not requested.
  - **3. Probe example in scene 2 (learning review).** A probe from a spacecraft replaces the site's ball on a train to keep one visual system; check that it reads as everyday Galilean addition.

Main question: *If a spacecraft at 0.8c fires a laser forward, why does Earth still measure the light at c, not 1.8c?*
Entry knowledge: Maxwell's c (v01); interference fringes (v06); Newton's first law and relative velocity (Year 11).
Stops after: frames, inertial and non-inertial, Galilean addition, the aether and Michelson-Morley with its limits, Einstein's postulates, why they force a common c, moving-source evidence, the price. No γ or dilation.
Handoff: v13, how two observers can measure different elapsed times.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *c*, *v*, *μ₀*, *ε₀*.

### 1. hook (1.8c or c?)
> Here's the spacecraft from last time, moving at zero point eight c past the Earth. It fires a laser pulse straight ahead. Measured on board, the pulse moves away at c. How fast is it, measured from Earth? Common sense says add the speeds, and get one point eight c. Make your **prediction**. Every measurement ever made says c, exactly the same. So why must observers agree on light **speed**?

Visual: opens on v11's final frame (see "Opening frame"); the chip becomes the heading: "Why must observers agree on light speed?". On "past the Earth" the painted Earth plate `phys-y11-earth-v1.png` appears small at the lower left, with an ink ruler and clock badge "Earth frame". On "It fires a laser pulse straight ahead" an amber pulse leaves the ship's nose. On "Measured on board" a teal ruler and clock badge "ship frame" attaches to the ship; the tag "c measured on board?" becomes "c (on board)". On "add the speeds" two orange arrows "0.8c" and "c" join into "1.8c?". On "prediction" a 3 s `Countdown` beside chips "1.8c", "c", "0.2c". On "exactly the same" the "c" chip ticks, "1.8c" is crossed, and the "c measured from Earth?" tag becomes "c (from Earth)".

### 2. observers and adding velocities
> First, what's an observer? In physics, it just means a frame of reference, a set of rulers and clocks that records where and when things happen. Nobody has to be there. At everyday speeds, velocities simply add. If the spacecraft moves at twenty kilometres per second and launches a probe forward at ten kilometres per second, Earth measures the probe at thirty kilometres per **second**. That's Galilean relativity, and at low speeds it works extremely **well**.

Visual: on "a frame of reference" the two ruler-and-clock badges pulse, with a definition chip "frame of reference: rulers + clocks that record where and when". On "Nobody has to be there" tag "observer = frame". On "twenty kilometres per second" the ship's speed tag changes to "20 km/s" (the ship slows on screen); on "a probe forward at ten kilometres per second" a small coded probe leaves the nose with an arrow "10 km/s (relative to ship)". On "second" an Earth-frame arrow "30 km/s" appears under the probe: "20 + 10 = 30 km/s". On "well" tag "Galilean addition: fine at low speed".

### 3. inertial and non-inertial frames
> Some frames are special. An inertial frame is one that isn't accelerating, so Newton's first law works in it. A spacecraft coasting with its engines off is an inertial frame. Inside a closed cabin, a floating ball just stays where it is, whether the ship is drifting or coasting at a huge **speed**. Now fire the engines. The ship accelerates, and the ball drifts to the back wall with no force acting on it. Newton's first law seems to fail. That's a non-inertial **frame**. Turning and spinning frames are non-inertial too.

Visual: board change: the spacecraft large at the centre with a coded cut-away window showing the cabin; the painted steel ball `phys-y11-steel-ball-v1.png` floats in the middle. On "An inertial frame" a definition chip "inertial frame: not accelerating; Newton's first law holds". On "coasting with its engines off" the exhaust layer is off and the starfield streams past at a steady rate. On "speed" the ball stays exactly centred while the starfield speeds up and then holds steady; tag "ball stays put". On "fire the engines" the exhaust layer `y12p-spacecraft-exhaust-v1.png` fades in. On "the ball drifts to the back wall" the ball moves towards the rear wall of the cabin; a dashed grey arrow "no force?" with a red "?". On "frame" chip "non-inertial: accelerating (or turning, spinning)". On "Turning and spinning frames" a small coded ship icon curving on a path, tag "turning: non-inertial".

### 4. no experiment reveals uniform motion
> Here's the deep idea. Inside a closed, coasting cabin, no experiment can tell you how fast you're moving. Collide two balls, time a vibrating spring, anything you like. The results are the same as when the ship is at rest. Only motion relative to something else can be **measured**. There's no special frame that is truly at **rest**.

Visual: the exhaust layer fades out; the cut-away window enlarges. On "Collide two balls" two coded balls collide and rebound in the cabin; on "time a vibrating spring" a coded spring oscillates beside a clock badge. On "The results are the same" a split panel: left "ship at rest" and right "ship at 0.8c", the same collision and spring running identically, readouts equal. On "measured" a velocity arrow appears between the ship and Earth only, tag "relative velocity: measurable". On "rest" a crossed chip "absolute rest".

### 5. Maxwell's c and the aether
> Light caused a problem. Maxwell's equations predict that electromagnetic waves travel at c, one over the square root of mu zero epsilon zero, about three times ten to the eight metres per second. But c relative to what? The equations don't mention the source or the observer. Physicists assumed light travels through an invisible medium called the aether, like sound through air. Earth moves around the Sun at about thirty kilometres per second, so it should feel an aether **wind**.

Visual: board change. On "Maxwell's equations" a chip "v01: Maxwell" and the equation strip "c = 1/√(μ₀ε₀) ≈ 3.00 × 10⁸ m s⁻¹". On "c relative to what?" a red "?" next to "c". On "an invisible medium called the aether" a faint grey dotted field fills the background, tag "aether (assumed)"; on "like sound through air" a small tag "sound: speed relative to air (Year 11)". On "thirty kilometres per second" the Earth plate moves across the dotted field with an orange arrow "≈ 30 km s⁻¹ through the aether?". On "wind" grey streaks flow past the Earth in the opposite direction, tag "aether wind (predicted)".

### 6. Michelson and Morley look for the wind
> In 1887, Albert Michelson and Edward Morley went looking for it. They split a light beam into two arms at right angles, reflected both back, and recombined them to make interference fringes. If the aether wind slowed one arm more than the other, rotating the apparatus would shift the fringes by about zero point four of a fringe. Their apparatus could detect about a hundredth of a **fringe**. They saw no shift, at any angle, at any time of year. That's a null **result**.

Visual: board change: the coded interferometer schematic: source at the left, a half-silvered splitter at the centre, one arm to the right and one up, each ending in a mirror, the detector at the bottom; a grey slab under it labelled "stone slab floating on mercury (so it can rotate)". Names in text only: "Michelson and Morley, 1887". On "They split a light beam" amber beams run along both arms; on "recombined them" they return to the detector and a fringe strip appears beside it, tag "v06: interference fringes". On "rotating the apparatus" the schematic rotates 90°; a ghost marker on the fringe strip shows "expected shift ≈ 0.4 fringe". On "fringe" a fine tick shows "detectable ≈ 0.01 fringe". On "They saw no shift" the real fringes stay fixed while the schematic rotates again; a calendar strip ticks through "Jul", "Oct", "Jan", "Apr". On "result" a stamp "null result" lands on the fringe strip.

### 7. what the null result does and doesn't prove
> Be careful about what this proves. It's strong evidence against a still aether that Earth moves through, because that model made a clear prediction, and the experiment was sensitive enough to test it. But a null result on its own can't prove the aether doesn't exist. Physicists rescued it with extra ideas, like the arm along the motion shrinking by just the right amount. Those rescues fitted the data, but they made no new predictions you could **test**.

Visual: evidence ledger on the right, headed "Michelson-Morley null result". On "strong evidence against a still aether" a row "against a stationary aether: clear prediction, sensitive test, no shift" with a strong tick. On "can't prove the aether doesn't exist" a row "does not prove: no aether at all" with a grey caution mark. On "the arm along the motion shrinking by just the right amount" the horizontal arm of the small schematic shortens slightly, tag "rescue (Lorentz, FitzGerald): arm shrinks just enough". On "test" a chip "no new testable predictions" under the rescue row.

### 8. Einstein's two postulates
> In 1905, Einstein took a different path. He dropped the aether and built everything on two postulates, starting assumptions. First, the laws of physics are the same in all inertial frames. Second, the speed of light in a vacuum, c, is the same for all inertial observers, whatever the motion of the source or the **observer**.

Visual: board change: the aether dots fade away. Name tag "Einstein, 1905" (text only). On "two postulates, starting assumptions" a card with two numbered rows. On "the laws of physics are the same in all inertial frames" row 1 writes "1. The laws of physics are the same in all inertial frames." with a grey bracket "(syllabus: all inertial frames of reference are equivalent)". On "observer" row 2 writes "2. The speed of light in a vacuum, c, is the same for all inertial observers, whatever the motion of the source or observer." with "(syllabus: an absolute constant)".

### 9. why light speed has to be the same
> Here's why the second postulate isn't a wild guess. Maxwell's equations are laws of physics. By the first postulate, every inertial frame has the same laws, so every inertial observer calculates the same speed for light. If light's speed depended on how fast you were moving, you could measure light inside a closed cabin and find your speed. The first postulate would **fail**. So light speed has to be the same for everyone, and Michelson and Morley's null result, all year round, is exactly what the postulates **predict**.

Visual: a three-step chain writes across the middle. On "Maxwell's equations are laws of physics" box 1 "Maxwell's equations = laws of physics → c = 1/√(μ₀ε₀)". On "every inertial frame has the same laws" box 2 "postulate 1: same laws in every inertial frame" with arrows from both the Earth and ship badges. On "calculates the same speed for light" box 3 "same c for every inertial observer". On "measure light inside a closed cabin" the cut-away cabin returns small with a light pulse crossing it and a readout "c − v?" that would reveal the ship's speed. On "fail" the readout is crossed and postulate 1's row flashes red then returns. On "predict" the null-result stamp slides into the chain under box 3, tag "consistent".

### 10. a direct test with moving sources
> There's direct evidence too. In 1964, physicists at CERN made particles called pions, moving at more than ninety nine point nine per cent of the speed of light. As they decayed, they gave off gamma rays straight ahead. Adding speeds says those gamma rays should travel at almost two c. They were timed at c, to within about one part in ten **thousand**.

Visual: board change: a coded straight beam pipe with a cluster of small grey "π⁰" dots moving right at "v > 0.999c"; text tag "CERN, 1964". On "gave off gamma rays straight ahead" amber dashes leave the dots forward. On "almost two c" an orange arrow addition "0.999c + c ≈ 2c?" appears and is crossed. On "thousand" two coded timing gates along the pipe with readouts; result chip "measured speed = c (within about 1 part in 10⁴)"; the evidence ledger gains a row "postulate 2: moving-source test ✓".

### 11. the price
> Agreeing on light speed has a price. Speed is distance over time. If two observers moving relative to each other measure the same speed for the same pulse of light, then they must disagree about distances or times. That's where relativity gets **strange**.

Visual: board change: the ship and Earth with their badges, one amber pulse between them. On "Speed is distance over time" the equation "c = distance / time" writes once under each badge. On "the same speed for the same pulse of light" both "c" values highlight equal. On "disagree about distances or times" the "distance" and "time" in each equation glow with "?" tags. On "strange" the ship's clock badge and Earth's clock badge tick at visibly different rates for one second (no numbers), tag "next: time".

### 12. a way to remember
> Here's a way to remember it. Same laws, same **light**. If every inertial frame has the same laws, they all get the same speed of light.

Visual: board clears to the postulate card. On "Same laws" row 1 pulses; on "light" row 2 pulses and the handwritten line writes large: "Same laws, same light." On "they all get the same speed of light" arrows from both badges point at one "c". Hold about 2 seconds.

### 13. attempt 1 (countdown, 10 seconds)
> Your turn. Classify each as an inertial or a non-inertial frame of reference, and give a reason. A spacecraft coasting at constant velocity with its engines off. A car travelling around a roundabout at constant speed. A lift slowing down as it arrives at a floor. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "Classify each of the following as an inertial or a non-inertial frame of reference. Justify each answer. (a) A spacecraft coasting at constant velocity with its engines off. (b) A car travelling around a roundabout at constant speed. (c) A lift slowing down as it arrives at a floor. (3 marks)" Small plates beside each part: the spacecraft (exhaust off), the painted top-view car `phys-y11-car-top-v1.png` on a coded circular road, the painted lift car `phys-y11-lift-car-v1.png` in a coded shaft. The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no velocity or acceleration arrows).

### 14. feedback 1 (brief)
> The coasting spacecraft is inertial, because its velocity is constant. The car is non-inertial. Its speed is constant, but its direction keeps changing, so it **accelerates**. The lift is non-inertial, because it's slowing **down**. The slip is calling the car inertial because its speed doesn't change. Velocity includes **direction**.

Visual: card shrinks to the top; "constant velocity", "constant speed" and "slowing down" underline. On "accelerates" "(a) inertial: constant velocity" and "(b) non-inertial: direction changes → centripetal acceleration" with an orange inward arrow drawn on the car's path. On "down" "(c) non-inertial: decelerating" with an arrow on the lift. On "direction" a chip "car: inertial (constant speed)" fades in and is crossed (caption "constant speed ≠ constant velocity"). Hold about 1 second.

### 15. attempt 2 (countdown, 10 seconds)
> Last one. Evaluate this statement. The Michelson Morley experiment proved that the aether does not exist. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Evaluate the statement: 'The Michelson-Morley experiment proved that the aether does not exist.' (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 16. feedback 2 (brief)
> The statement goes too far. The experiment was sensitive enough to detect the expected aether wind, and found none, so it's strong evidence against a stationary **aether**. But a null result can't prove something doesn't exist, and rescue ideas fitted the data. The aether was dropped because Einstein's postulates explained the result without **it**. The slip is the word **proved**.

Visual: card shrinks to the top; "proved" and "does not exist" underline. On "aether" "expected ≈ 0.4 fringe, detectable ≈ 0.01, observed: none → strong evidence against a stationary aether". On "it" "cannot prove non-existence; rescues fitted but made no new predictions; relativity explains the result with no aether". On "proved" a chip "proved the aether does not exist" fades in and is crossed (caption "strong evidence, not proof"). Hold about 1 second.

### 17. handoff
> So every inertial observer measures the same c. Now put that to work. Build a clock from light, a pulse bouncing between two mirrors on the spacecraft. On board, the pulse goes straight up and down. From Earth, the ship moves sideways during each bounce, so the same pulse travels a longer, slanted path, at the same speed. So how can two observers measure different elapsed **times**?

Visual: board clears (camera change) to the spacecraft at the centre with its teal badge and the Earth at the lower left with its ink badge. On "a pulse bouncing between two mirrors" a coded light clock (two short horizontal mirrors, one above the other, on the hull's side) appears and an amber pulse bounces once. On "straight up and down" a teal vertical path traces, tag "ship: up and down". On "the ship moves sideways during each bounce" the ship moves right and the Earth-frame trace draws an ink zigzag (two diagonals), tag "Earth: slanted, longer". On "at the same speed" both traces carry a tag "c". On "times" tags "time per tick?" appear at both badges, and the chip "Next: how can two observers measure different elapsed times?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 18. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Frame of reference (observer): rulers and clocks that record where and when. Inertial frame: not accelerating, Newton's first law holds. Accelerating, turning or spinning frames are non-inertial.
2. Inside a closed inertial frame, no experiment detects uniform motion: no frame is absolutely at rest.
3. Michelson-Morley (1887): expected about 0.4 fringe shift from an aether wind; could detect about 0.01; saw none (null result). Strong evidence against a stationary aether, not proof of non-existence.
4. Einstein's postulates (1905): (1) the laws of physics are the same in all inertial frames; (2) c in a vacuum is the same for all inertial observers, whatever the motion of source or observer.
5. Why c is shared: Maxwell's laws give c; same laws in every inertial frame give the same c. Evidence: Michelson-Morley; gamma rays from fast pions travel at c (CERN, 1964).

Memory aid (large, on the notes screen): *Same laws, same light.*

## Teaching checks

- **Does it explain causes?** Why the ball drifts in a thrusting ship: the frame accelerates, not the ball (3). Why physicists expected a wind: c was assumed relative to a medium (5). Why the null result matters: a sensitive test of a definite prediction (6, 7). Why c must be shared: postulate 1 plus Maxwell's laws (9). Why distances or times must then differ: c = distance/time (11).
- **Misconceptions addressed:** velocities always add (1, 10); constant speed means inertial (14 crossed); Michelson-Morley proved there is no aether (7, 16 crossed); observers are people (2); postulate 2 is an arbitrary guess (9).
- **One idea at a time:** frames (2), inertial frames (3), relativity of uniform motion (4), aether (5), the experiment (6), its limits (7), postulates (8), why (9), evidence (10), price (11).
- **Video makes it easier:** the floating ball staying put, then drifting under thrust (3); the identical split-panel experiments (4); the rotating schematic with the expected marker and fixed fringes (6); the crossed "c − v?" readout in the closed cabin (9).
- **Response opportunity:** one prediction (3 s) and two unseen HSC-style tasks with every condition visible, 10 s each; nothing answer-bearing. One crossed mistake each; feedback about 22 s and 29 s.
- **Avoided double teaching:** Maxwell's c (v01), interference (v06), Newton's first law (Year 11) recalled in a clause.
- **Syllabus coverage:** `P7-IQ4-01`: evidence confirming postulate 2 (Michelson-Morley as consistent, CERN 1964 moving source) (6, 7, 9, 10) and postulate 1 (no internal experiment detects uniform motion; null result all year) (4, 9); evidence "denying" the aether alternative evaluated with its limits (7, 16).
- **Out of scope by design:** γ, time dilation and length contraction (v13, v14); simultaneity (not routed separately; v14 uses it in measurement); general relativity.

## Practice questions and model answers

**Attempt 1 (scene 13; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "Classify each of the following as an inertial or a non-inertial frame of reference. Justify each answer. (a) A spacecraft coasting at constant velocity with its engines off. (b) A car travelling around a roundabout at constant speed. (c) A lift slowing down as it arrives at a floor."
Model answer: (a) Inertial: its velocity is constant, so Newton's first law holds with no fictitious forces. (b) Non-inertial: although its speed is constant, its direction changes, so its velocity changes (centripetal acceleration). (c) Non-inertial: it is decelerating. Classic mistake (crossed): "(b) inertial, because the speed is constant".

**Attempt 2 (scene 15; original wording, HSC style, 3 marks).** "Evaluate the statement: 'The Michelson-Morley experiment proved that the aether does not exist.'"
Model answer: The statement overstates the result. The aether model predicted a fringe shift of about 0.4 fringe as the apparatus rotated, and the apparatus could detect about 0.01 fringe, but no shift was observed at any orientation or season; this is strong evidence against a stationary aether. A null result cannot prove non-existence: modified aether ideas (aether drag, contraction of the arm) fitted the data but made no new testable predictions. The aether was abandoned because Einstein's postulates explained the result without it. Classic mistake (crossed): "proved".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hook (site Stop and Check) | ship 0.8c; Galilean 0.8c + c = 1.8c; measured c | 1 |
| Galilean addition (site warm-up re-staged) | 20 + 10 = 30 km s⁻¹ | 2 |
| Maxwell's c | 1/√(μ₀ε₀) ≈ 3.00 × 10⁸ m s⁻¹ (data sheet c) | 5 |
| Earth's orbital speed | 2π × 1.496 × 10¹¹ m / (365.25 × 86 400 s) = 2.98 × 10⁴ m s⁻¹ ≈ 30 km s⁻¹ | 5 |
| Michelson-Morley (site) | expected ≈ 0.4 fringe; detectable ≈ 0.01 fringe; 11 m path (reflect, not shown) | 6, 7, 16, notes |
| CERN 1964 | pions v ≈ 0.99975c ("more than 99.9%"); photon speed c within ~1 part in 10⁴ | 10 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov, `numbers.py` in the session scratchpad); Codex to re-check.

- 0.8 + 1 = 1.8; 20 + 10 = 30.
- 2π × 1.496e11 / (365.25 × 86400) = 29 786 m s⁻¹.
- 1/√(4π × 10⁻⁷ × 8.854 × 10⁻¹²) = 2.998 × 10⁸ m s⁻¹.
- Alväger et al. (1964): k = (−3 ± 13) × 10⁻⁵ (science check to confirm).

## Memory aid check

- **"Same laws, same light."** Meaning, as said in scene 12: because every inertial frame has the same laws of physics (postulate 1), including Maxwell's, every inertial observer measures the same speed of light (postulate 2). Assumptions checked: inertial frames only (non-inertial frames are excluded in special relativity; scene 3); light in a vacuum (light in glass travels slower, and that speed is not invariant); "same light" means the same speed, not the same frequency or wavelength (those do change between frames, the Doppler effect). The aid is introduced after the causal argument (9). It helps a new case: the hook (1.8c is impossible) and v13's light clock.
- **Considered, not used:** "c is c is c" (catchy, but it hides the reason).

## Narration length estimate

Revision 1 count (6 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **6,218 characters**, 18 scenes. Characters per scene (1 to 18): 385, 455, 517, 326, 479, 466, 453, 322, 518, 349, 252, 132, 285, 324, 127, 372, 381, 75. At 13.3 characters per second the speech is about 468 s; add about 3 s for the prediction countdown, 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 55 s more of the quiet notes hold (about 84 s of holds and countdowns): **about 552 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 10 (CERN, open decision 1); scene 4's last sentence; scene 3's turning-frames sentence.

## Opening frame

v11's final frame (designed in this wave, `phys-y12-m7-v11.md`): paper background; heading "How do photoelectric graphs reveal Planck's constant and work function?"; at the top left a small coded plot of two parallel K_max against f lines labelled "gradient = h"; a text tag "1905: photons, and relativity"; at the centre left the painted spacecraft `y12p-spacecraft-v1.png` facing right with a speed tag "v = 0.8c"; an amber coded light pulse ahead of it with tags "c measured on board?" and "c measured from Earth?"; chip "Next: why must observers agree on light speed?". Scene 1 turns the chip into the heading and fades the small plot and the 1905 tag.

## Final frame

The last explained frame (end of scene 17, before the key-notes board): paper background; heading "Why must observers agree on light speed?"; the painted spacecraft `y12p-spacecraft-v1.png` at the centre (exhaust off) with a teal ruler-and-clock badge "ship frame"; the painted Earth `phys-y11-earth-v1.png` small at the lower left with an ink badge "Earth frame"; a coded light clock (two horizontal mirrors) on the ship's hull with an amber pulse; a teal vertical path tagged "ship: up and down"; an ink zigzag of two diagonals tagged "Earth: slanted, longer"; both paths tagged "c"; "time per tick?" at both badges; chip "Next: how can two observers measure different elapsed times?". v13 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m7-v12` (route phys-y12-m7-v12). Suggested explainer folder `src/explainer/lessons/phys-y12-m7-v12` and build folder `docs/production/claude-pm/lessons/p-y12-m7-v12` (root to confirm).

In order (kebab-case; 18 scene headings, all `### N.`): hook, frames-galilean, inertial-frames, no-absolute-rest, maxwell-aether, michelson-morley, null-result-limits, postulates, why-same-c, moving-source-test, the-price, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Scene 1 is `explain` with a 3 s prediction countdown. `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: frames and badges, cabin cut-away, velocity addition strip, interferometer schematic, evidence ledger, light clock, `PenArrow`, `Countdown`, `CameraStage`. Transitions (`pickTransition`): 1 to 2 camera continue; 2 to 3 clear change to the cabin; 3 to 4 camera continue; 4 to 5 clear change; 5 to 6 clear change to the schematic; 6 to 7 camera continue; 7 to 8 clear change; 8 to 9 camera continue; 9 to 10 clear change; 10 to 11 clear change; 11 to 12 camera continue; attempts and feedback card shrink to the top; 16 to 17 clear change; 17 to 18 fade to the notes board.

Holds: hook (3 s countdown), memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 60 s). Review evidence paths: `learning_review` = `checks/p-y12-m7-v12-learning-review.md`, `science_check` = `checks/p-y12-m7-v12-physics-check.md`.

## Assets

Have (inspected 6 Nov on a session contact sheet; scaled uniformly only, never stretched):
- `public/assets/physics/phys-y11-earth-v1.png` (1254 × 1254, RGBA): Earth (1, 2, 5, 11, 17).
- `public/assets/physics/phys-y11-steel-ball-v1.png` (800 × 800, RGBA): polished steel ball, the floating ball (3, 4).
- `public/assets/physics/phys-y11-car-top-v1.png` (1600 × 800, RGBA; blue car seen from above, no occupants visible) and `phys-y11-lift-car-v1.png` (1400 × 2000, RGBA; empty open lift car on a cable): A1 card (13).
- `y12p-spacecraft-v1.png` and `y12p-spacecraft-exhaust-v1.png` (requested by v11): 1 to 4, 11, 13, 17.
- **Checked, not used:** `phys-y11-rocket-v1.png` (missile-like; not the spacecraft); `phys-y11-galaxy-v1.png` (not needed for the starfield, which is coded dots).

Need (new plates): none beyond v11's spacecraft pair.

Coded: ruler-and-clock badges, starfield, cabin cut-away, probe, velocity arrows, aether field and wind streaks, interferometer schematic and fringe strip, evidence ledger, beam pipe and pions, timing gates, light clock, chips, countdowns, key notes board.

Kit gaps (for the v12 build brief):
1. **Frame badges.** A ruler-and-clock badge that attaches to a plate and can tick at a set rate (used through v15).
2. **Interferometer schematic.** Two-arm beams, rotation stage, fringe strip with expected and detectable markers.
3. **Cabin cut-away.** A coded window in the ship plate's hull showing a floating object that responds to thrust state.

## Codex asset brief

No new plates for v12 (the spacecraft pair is briefed in `phys-y12-m7-v11.md`). `phys-y11-steel-ball-v1.png`, `phys-y11-car-top-v1.png` and `phys-y11-lift-car-v1.png` were inspected on a session contact sheet (6 Nov): no people.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text and attempts against the "Numbers used" table.
2. Confirm the physics of every learner-visible claim: frames as rulers and clocks; Galilean addition at low speed; the inertial frame definition and the floating-ball demonstration (no gravity in the cabin); no internal experiment detects uniform motion; Maxwell's c; the aether wind at about 30 km s⁻¹; Michelson-Morley's expected 0.4 and detectable 0.01 fringe, null result all year; the rescue ideas; the postulates' wording; the argument that postulate 1 plus Maxwell's laws require a common c; the CERN 1964 result (author note c).
3. Confirm the memory aid's assumptions (see "Memory aid check").
4. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
5. Confirm both attempt cards are original in wording, carry every condition and show nothing answer-bearing.
6. Confirm the syllabus quote matches the route JSON exactly and is labelled 2017.
7. Confirm no person, hand, face or body outline is drawn or requested (observers are frames; the car and lift plates are empty).
8. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
9. Confirm the narration character count and per-scene counts by script with the build parser rules.
10. Report site notes 1 to 4 under Decisions to root.

## YouTube metadata (draft)

Title: Einstein's Postulates: Why Everyone Measures the Same Speed of Light | HSC Physics Module 7

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module7/lesson11.sa.html

A spacecraft at 0.8c fires a laser forward. Earth doesn't measure 1.8c, it measures c. See what an inertial frame is, why no experiment inside a coasting spacecraft can reveal its speed, what Michelson and Morley expected and found (and what their null result does not prove), Einstein's two postulates, and why the laws of physics being the same in every inertial frame forces everyone to agree on the speed of light. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 7: The Nature of Light.
Syllabus content (NSW Physics Stage 6, 2017):
"analyse and evaluate the evidence confirming or denying Einstein’s two postulates: the speed of light in a vacuum is an absolute constant; all inertial frames of reference are equivalent (ACSPH131)"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: photoelectric graphs. Next: time dilation.

#HSCPhysics #Physics #SpecialRelativity #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v11; check that "observer = frame" lands; that the floating-ball demonstration reads at speed; that scene 9's argument is followed by a student new to relativity; that the "does not prove" scene is clear), then the physics check (CERN 1964 source) and the Codex error check.
- The floating ball, the rotating interferometer with fixed fringes and the crossed "c − v?" cabin readout carry the explanation; judge them at playback speed in the voiced preview.
