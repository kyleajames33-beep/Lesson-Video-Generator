# Year 12 Physics M7 V13: Time dilation. How can two observers measure different elapsed times? (design)

Status: Revision 2 (7 Nov 2026): brief 191 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 6,395 characters, 18 scenes, about 552 s, counted by script with the build parser rules (total = sum of scene strings; see "Narration length estimate"). Opens on v12's final frame.

Scope: thirteenth video of Year 12 Physics Module 7 (The Nature of Light, Physics Stage 6, 2017 syllabus), inquiry question "How does the behaviour of light affect concepts of time, space and matter?". Templates as `phys-y12-m6-v13.md`; `math-a12-d10.md` for the calculation layout. No pre-design pack exists; the pack work is done here (2017 wording from the ledger, site values kept, every number recalculated in Python, original attempts, asset reuse). Site lesson read in full (6 Nov, read-only, through the brief 168 text extract `work/brief168/module7-lesson12.sa.txt`, hash checked against the live file): orient and predict (flying atomic clock, muons, Alpha Centauri at 0.995c, warm-up, intentions, vocabulary: proper time, dilated time, Lorentz factor, light clock, twin paradox), "derive-time-dilation" (light clock, Pythagorean derivation, Figure 1, Stop and Check 0.8c 3.0 years, MC 0.6c), "weigh-the-experimental-evidence" (muons at 0.995c, Hafele-Keating, GPS, HSC tip on proper time, Stop and Check γ = 10, MC 0.99c), "solve-the-twin-journey" (12 ly at 0.8c, 30 and 18 years, Figure 2), misconceptions (three traps, strategy, pion Stop and Check, Figure 3 GPS), apply and consolidate (Activities 1 and 2, "Analyse 7 marks" light clock, "Assess 6 marks" muons at 0.998c), practice Q1 and Q2, reflect (Hafele-Keating −59 and +273 ns): `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson12.sa.html`, SHA256 `776eb40440bbcf4e0a09d181ea093ac6f7c0d05609b11c04b9e996baef16f593` (recomputed 6 Nov; matches the route). Route entry: `phys-y12-m7-v13`, sections `derive-time-dilation`, `weigh-the-experimental-evidence`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Use a light clock to derive gamma, identify proper time and calculate dilation; connect muons, atomic clocks and accelerators with their measurement frames. Stop before length." Next: "phys-y12-m7-v14: Why can a moving distance be shorter without an object being crushed?"

Owner rules applied: 2017 syllabus quoted exactly; no people, hands, faces or body outlines (the site's twin journey becomes two clocks, and the traveller is a spacecraft; Hafele and Keating are named in words only; the airliners are coded flight paths around a coded globe, no aircraft interiors); the light clock, triangle, γ graph, muon tracks and calculation strips are coded, HSC style; the spacecraft, Earth, atomic clock and Sun are painted plates (one new, three reused or shared), scaled uniformly, never stretched; every number recalculated in Python with c = 3.00 × 10⁸ m s⁻¹; data-sheet symbols t = t₀/√(1 − v²/c²); a 3 s prediction; "Pause here to answer." with a 10 s countdown; brief feedback with one crossed-out mistake; original attempts; Australian spelling; no em dashes. Recalled, not re-taught: v12 (frames, inertial frames, both postulates, the light clock's two paths), Year 11 (Pythagoras, speed = distance/time, light-year as a distance).

Syllabus content (Physics Stage 6 (2017), Module 7; ledger id `P7-IQ4-02`), quoted from the route JSON `syllabusActions`:

- `P7-IQ4-02`: "investigate the evidence, from Einstein’s thought experiments and subsequent experimental validation, for time dilation t=(t_(0))/(sqrt((1- (v^(2))/(c^(2))))) and length contraction l=l_(0)sqrt((1-(v^(2))/(c^(2)))), and analyse quantitatively situations in which these are observed, for example:" "observations of cosmic-origin muons at the Earth’s surface", "atomic clocks (Hafele–Keating experiment)", "evidence from particle accelerators", "evidence from cosmological studies"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 60)

**Boundary:** starts on v12's final frame (the light clock on the spacecraft, the vertical and slanted paths, "time per tick?"). Teaches: the muon puzzle (15 km, 2.2 μs, 660 m); the light clock at rest, t₀ = 2d/c; the moving clock's slanted path at the same c (second postulate); Pythagoras on half a tick; the algebra to t = t₀/√(1 − v²/c²) and γ; proper time (one clock present at both events) and why it is the shortest; why all clocks slow equally (first postulate) and reciprocity; γ at everyday and high speeds; the muons quantitatively (22 μs, 6.6 km, about one in ten survive over 15 km instead of about 10⁻¹⁰); Hafele-Keating (−59 and +273 ns, speed and gravity) and accelerator muons (γ ≈ 29); a 12 ly trip at 0.8c (Earth frame 15 years, ship clock 9 years). Stops before length contraction (v14), the round-trip twin paradox (not routed; author note e) and GPS detail (named in the key notes only).

## Decisions

- **Learner question (route wording kept).** "How can two observers measure different elapsed times?" The answer, built in order: both measure the same light speed (v12), but the moving clock's light travels a longer path in the other frame, so each tick takes longer there (2 to 5); the proper time belongs to the clock present at both events (6); all processes slow together, so this is time itself (7); experiments confirm the size of the effect (9, 10).
- **Hook (site "Before you read" muon question, re-ordered).** Muons first, because they make the puzzle physical before the algebra. 3 s prediction: "How many reach the ground: many, a few, or almost none?". Numbers: 15 km (site), τ₀ = 2.2 μs, 0.995c × 2.2 μs = 657 m ("about six hundred and sixty").
- **Derivation (site "derive-time-dilation" and "Analyse 7 marks" steps 2 to 7, all kept).** At rest: t₀ = 2d/c. Moving: slanted path at the same c (postulate 2). Half-tick triangle (ct/2)² = d² + (vt/2)²; d unchanged "because the motion is sideways, not along the mirrors' separation" (site step 5). Substitution d = ct₀/2, collect t: t²(c² − v²) = c²t₀²; t = t₀/√(1 − v²/c²) (data-sheet form); γ defined as 1/√(1 − v²/c²). Two scenes, one stage each, previous line kept.
- **Proper time (site vocabulary and HSC tip).** "A clock present at both events; in its frame both happen at the same place"; always the shortest; "proper doesn't mean correct" (site misconception 2).
- **All clocks (site "Analyse 7 marks" step 7: "any other clock carried alongside must agree with the light clock").** Argued from postulate 1 (otherwise comparing clocks inside the cabin reveals the motion). Reciprocity in one sentence (site misconception 3); its resolution is left for paradox material (author note e).
- **γ values (site "build-the-lorentz-factor" and misconception 1).** 900 km h⁻¹: γ − 1 = 3.5 × 10⁻¹³ (site "≈ 3 × 10⁻¹³"; computed 3.47 × 10⁻¹³, said "about three times ten to the minus thirteen"); 0.6c: 1.25; 0.8c: 1.67; 0.995c: 10.0. Coded γ against v/c graph (site Figure 2 of lesson 11).
- **Muons worked (site "weigh-the-experimental-evidence", Q2(a)).** γ(0.995) = 10.01 (shown 10.0); t = 10.0 × 2.2 = 22 μs; distance 0.995 × 3.00 × 10⁸ × 22.0 × 10⁻⁶ = 6.57 km (said "about six point six"); 15 km is 2.28 dilated lifetimes, survival e^(−2.28) = 0.10 against e^(−22.8) = 1.2 × 10⁻¹⁰ classically (site "~10% survive (classically only ~10⁻¹⁰)"). Measurement frames named: proper lifetime by a clock riding with the muon; 22 μs in Earth's frame. The exponential survival law is not taught; "average lifetime" and "roughly one in ten" are said (author note b). Revision 2 (brief 191 should fix): the survival counter is labelled "ideal model: constant 0.995c, no energy loss"; it is an illustrative estimate, not measured atmospheric transmission. The real observation (detectors at sea level catch plenty) stays in the hook, as a separate statement.
- **Atomic clocks (syllabus example; site reflect values).** Hafele and Keating, October 1971: caesium clocks flown eastward and westward on commercial flights, compared with US Naval Observatory clocks; eastbound −59 ± 10 ns, westbound +273 ± 7 ns, agreeing with predictions that combine speed (special relativity) and altitude (general relativity, gravity). One on-screen tag explains the sign difference: compared in a frame centred on Earth's centre, eastbound planes move faster than ground clocks, westbound slower (author note c).
- **Accelerators (syllabus example; site "Assess 6 marks" step 6 mentions accelerator measurements).** CERN muon storage ring (1977): muons at γ ≈ 29.3 lived 29.3 times longer (64.4 μs against 2.2 μs), agreeing to about 0.1% (author note d). Said "about twenty nine".
- **Cosmological evidence (syllabus example).** Not taught here: the stretching of distant supernova light curves involves the expanding Universe (Module 8). One line in Decisions only; root to confirm whether Module 8 or v14 covers it (open decision 2).
- **Trip worked example (site "solve-the-twin-journey" 12 ly at 0.8c, one way, no twins).** One-way trip: Earth frame 12/0.8 = 15 years; ship clock (proper, present at departure and arrival) 15/(5/3) = 9 years. Two clocks only (Earth's and the ship's); Earth's frame uses its clock at Earth and a synchronised clock at the star (a coded clock at the star). The site's round trip and age difference are not used (twin paradox; author note e). The 9 years is v14's opening.
- **Memory aid (scene 12): "Moving clocks run slow. Proper time is the shortest, on the clock that's at both events."** See "Memory aid check".
- **Attempts (original, HSC style).** A1 (3 marks): charged pions at 0.95c, proper mean lifetime 26 ns: lab lifetime 83 ns, distance 24 m. Crossed: 26/3.2 = 8.1 ns. A2 (3 marks): a ship to a station 6.0 ly away at 0.6c: Earth 10 years, ship 8.0 years, ship clock proper. Crossed: "Earth's time is the proper time".
- **Significant figures.** γ to three figures (1.25, 1.67, 3.20, 10.0); site values kept (2.2 μs, 15 km).
- **Handoff (route next).** Scene 17: the 12 ly trip with "Earth: 15 yr", "ship: 9 yr"; the ship's instruments see the star approach at 0.8c for 9 years: 0.8 × 9 = 7.2 ly; a ship-frame bracket "7.2 ly?" under the Earth-frame "12 ly"; chip "Next: why can a moving distance be shorter without an object being crushed?". See "Final frame".
- **Colour key (root decision 1):** Earth frame ink; ship frame teal; light amber; proper quantities (t₀) teal; dilated quantities (t) ink; γ violet; muons slate dots.
- **Colour key (Revision 2, fixed for every scene).** As above; velocities orange arrows; event markers ink dots; framed answers in a dark-ink box; crossed chips and their hand tags red. Hand-font tags take the colour of the quantity they mark (teal for proper time, ink for dilated time, violet for γ).
- **Type sizes (Revision 2, 1080p).** Current working line at least 44 px (derivation lines and scenes 9, 11 and the feedback rows 52 px; framed answers 56 px); live readouts (scene 8 speed slider: v/c, γ, the two clock readings) about 52 px; triangle side labels 40 px; badges and graph labels 30 to 36 px; hand-font tags at least 30 px; question text 36 px; key notes 34 px; nothing a student must read below 26 px. All text above the bottom 12% of the frame.
- **Anchor (Revision 2).** The hook pairs v12's painted spacecraft and Earth with a painted detector at sea level: the cloud chamber `y12p-cloud-chamber-v1.png` (inspected 7 Nov) sits on the ground strip under the atmosphere column and shows coded muon tracks in its glass top when "Detectors at sea level catch plenty" is said; it returns in scene 9. The painted atomic clock `y12p-atomic-clock-v1.png` (brief 191, inspected 7 Nov) carries scene 10.
- **Simulation (Revision 2).** The core live control is scene 8's speed slider: v/c steps 0, 0.6, 0.8, 0.9 and 0.995 while the light-clock pair redraws (the slant lengthens), a marker rides the γ curve and live readouts update: γ = 1.00, 1.25, 1.67, 2.29, 10.0, and "1 tick on the ship = γ ticks' time on Earth" with the teal and ink clocks running in that ratio. (0.95c is kept off the slider because A1 asks for it.) The light-clock pair (2, 3), the muon column (1, 9) and the flight loops (10) are the other live elements.
- **Question cards (Revision 2).** Each card arrives with its full text and a picture in one move (A1: a coded accelerator beam pipe with pion dots; A2: the painted spacecraft, Earth and space station `y12p-space-station-v1.png` with a "6.0 ly" bracket). On the answer side the card shrinks to the top, a givens strip lists the data, the picture carries the answer (a teal clock riding with the pion; teal and ink clocks for the trip), results are framed and one classic slip is crossed.
- **Site sources used:** lesson 12: predict (muons, flying clock) (1, 10); vocabulary (proper time, dilated time, Lorentz factor, light clock) (2, 5, 6); light clock derivation and Figure 1 (2 to 5); "Analyse 7 marks" (postulate first, d unchanged, any clock must agree) (3 to 7); muon evidence and Q2(a) (1, 9); Hafele-Keating reflect values (10); HSC tip and misconceptions 1 to 3 (6 to 8, 14, 16); worked journey 12 ly at 0.8c (11, 17); Stop and Check 0.8c, 3.0 years not used (scene 11 covers the same step); MC 0.6c (1.25 s) as γ example (8). Not used: GPS (named in key notes), the twin paradox, the spacetime diagram, Alpha Centauri.
- **Site notes (quoted from site lesson 12, read 6 Nov; for root to log in `../site-corrections-phys-y12.md` if accepted):**
  1. Error (new): reflect section, "The hook question: the flying clock shows less time, it has aged less than the Earth clock by ~100 ns" (and "The effect is ~100 nanoseconds for a round-the-world trip"). The same paragraph reports that the westbound clocks gained 273 ns; whether a flown clock shows less or more time depends on direction and on the gravitational (altitude) effect. The pure speed effect at 900 km h⁻¹ for a 45 h trip relative to a ground clock is about 56 ns (and is direction-dependent in the Earth-centred frame). Correction: "It depends on the direction: eastbound clocks lost about 59 ns, westbound gained about 273 ns, as predicted when speed and gravity are both included."
  2. Inconsistency (new): Hafele-Keating is dated "1972" in "weigh-the-experimental-evidence" and misconception 1, and "1971" in the vocabulary links and reflect. The flights were in October 1971; the results were published in 1972. Suggest "1971 (published 1972)".
  3. Precision (new): "solve-the-twin-journey" step 3: "Special relativity applies in inertial frames only; general relativity handles the acceleration." Special relativity handles accelerated motion of the traveller in an inertial frame (the age difference is computed in Earth's inertial frame without general relativity); general relativity is only needed for gravity or for describing physics from the accelerating frame itself. Suggest "the traveller changes inertial frames at the turnaround, so the situation is not symmetric; Earth's inertial frame gives 30 and 18 years".
  4. Rounding (new): reflect "the 8.6 ly round trip takes 8.65 years Earth time but only 0.87 years ship time". 8.6/0.995 = 8.64 years; 8.64/10.01 = 0.86 years.
  5. Checked and correct: γ(0.995) = 10.0, 657 m, 22 μs, 6.57 km, about 10% survival, about 10⁻¹⁰ classically; Stop and Check 3.0 → 5.0 years; MC 0.6c → 1.25 s; MC 0.99c → 15.6 μs; journey 30 and 18 years; Q1 20 and 12 years; "Assess 6 marks" γ(0.998) = 15.8, 35 μs, 10 km; misconception 1 (3 × 10⁻¹³).
- **Cause chain taught, in order:** (1) the light in a moving clock travels a longer slanted path in another frame (3); (2) light's speed is the same in both frames, so each tick takes longer in that frame (3); (3) Pythagoras gives the factor γ (4, 5); (4) the clock present at both events measures the shortest time, the proper time (6); (5) all processes must slow together, or the first postulate fails (7); (6) γ is tiny at everyday speeds and huge near c (8); (7) so fast muons live γ times longer in Earth's frame and reach the ground (9).
- **Entry knowledge (route `entryKnowledge`):** v12 (frames, postulates, the light clock's two paths); Year 11 (Pythagoras, s = vt, the light-year).
- **Learner-visible vocabulary (plain meaning at first use):** muon (an unstable particle made when cosmic rays hit the upper atmosphere, 1); lifetime (average time before it decays, 1); light clock (2); event (something that happens at one place and one time, 6); proper time t₀ (6); time dilation (a moving clock is measured to run slow, 5); Lorentz factor γ (5); light-year (the distance light travels in a year, 11).
- **Legacy logic ported:** none. Coded family `m7-light-clock` ("rest-frame round trip against lab-frame diagonal, at 0.60c") supplies the clock; its speed is made adjustable for scene 8.
- **New explainer motion:** **light clock** (at rest and moving side by side, a speed slider, the half-tick triangle that lifts off the path with labelled sides); **frame clocks** (teal ship clock and ink Earth clock ticking at rates in the ratio 1 : γ); **γ graph** (γ against v/c with a moving marker and readout, asymptote at v = c); **muon track** (a vertical atmosphere column, 15 km scale, muon dots with decay flashes, survival counter); **globe flights** (coded globe with eastward and westward flight loops and nanosecond readouts); `AlignedAlgebra`; `NumberTicker`; `Countdown` (3 s in scene 1; 10 s in scenes 13 and 15); `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the clocks or the muon column at centre left; algebra on the right; everything above the bottom 12% of the frame.
- **Author notes (not learner copy):**
  (a) Light clock: the moving clock's mirrors are perpendicular to the motion, so their separation d is unchanged (the perpendicular-length argument is given in v14).
  (b) Muon survival: N/N₀ = e^(−t/τ) with τ the mean lifetime in the frame used. In Earth's frame t = 15 km / 0.995c = 50.3 μs and τ = 22.0 μs: e^(−2.28) = 0.102. Classically τ = 2.2 μs: e^(−22.8) = 1.2 × 10⁻¹⁰. Real muons are produced over a range of heights and speeds and lose energy in the air; the numbers are an ideal constant-speed model (Revision 2: labelled so on screen), not measured atmospheric transmission.
  (c) Hafele and Keating (Science 177, 1972): predicted −40 ± 23 ns eastward and +275 ± 21 ns westward; observed −59 ± 10 and +273 ± 7 ns. Kinematic and gravitational terms are computed in a non-rotating Earth-centred frame.
  (d) Bailey et al. (Nature 268, 1977): positive muons at γ = 29.33 in the CERN storage ring; dilated lifetime 64.4 μs; agreement with special relativity to about 1 part in 10³. To be confirmed by the science check.
  (e) Twin paradox: routed out of v13 ("stop before length") and v14 ("stop before paradoxes"). Reciprocity is stated once (7) without resolving it.
  (f) Pronunciations: "t zero"; "gamma"; "Hafele" as "HAH-fuh-lee"; "caesium".
- **Open decisions for root:**
  - **1. Accelerator evidence.** Kept: the brief 191 science check confirms Bailey et al. (1977), γ = 29.33, about 64.4 μs.
  - **2. Cosmological evidence (coverage).** The syllabus lists "evidence from cosmological studies". This design leaves it to Module 8 (supernova light curves stretched by (1 + z)), recorded as a coverage note; root to confirm.
  - **3. Twin paradox (route).** Not taught in v13 or v14 by the route. If root wants it, a later hard-practice video is the natural place (two clocks, no twins drawn).

Main question: *If muons only live 2.2 microseconds, how do they cross 15 km of atmosphere?*
Entry knowledge: frames and the postulates (v12); Pythagoras and s = vt (Year 11).
Stops after: the light-clock derivation, γ, proper time, all clocks slowing, reciprocity stated, γ values, muons, atomic clocks, accelerator muons, the 12 ly trip. No length contraction.
Handoff: v14, why a moving distance can be shorter without anything being crushed.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *t*, *t₀*, *d*, *v*, *c*, *γ*.

### 1. hook (the muons that shouldn't arrive)
> Nature has already run this experiment. Cosmic rays hitting the top of the atmosphere make particles called muons, about fifteen kilometres up. A muon at rest lives, on average, only two point two microseconds. Even at almost the speed of light, that's only about six hundred and sixty metres of travel. So how many should reach the ground? Make your **prediction**. Detectors at sea level catch plenty of them. So how can two observers measure different elapsed **times**?

Visual: opens on v12's final frame (see "Opening frame"); the light clock and spacecraft shrink to the top right; the chip becomes the heading: "How can two observers measure different elapsed times?". On "Cosmic rays hitting the top of the atmosphere" the painted Earth grows at the lower left and a coded vertical atmosphere column (about 800 px tall) rises from its limb at the centre left (pale blue gradient, a ground strip at the bottom labelled "sea level", a scale bar "15 km"); the painted cloud chamber `y12p-cloud-chamber-v1.png` (about 300 px tall) sits on the ground strip; grey streaks hit the column's top. On "particles called muons" slate dots appear at the top, tag "muons (unstable)". On "two point two microseconds" a chip "average lifetime at rest: 2.2 μs". On "six hundred and sixty metres" a short bracket from the top of the column "≈ 660 m (0.995c × 2.2 μs)", slate hand tag "dies way up here?". On "prediction" a 3 s `Countdown` beside chips "many", "a few", "almost none". On "Detectors at sea level catch plenty of them" many slate dots stream to the ground strip, coded tracks flash in the cloud chamber's glass top and a detector counter ticks up (52 px); "many" ticks; slate pen ring round the chamber, hand tag "observed at sea level". On "times" the heading's "different elapsed times" underlines in ink.

### 2. the light clock at rest
> Back to the light clock. Two mirrors are a distance d apart, and a pulse of light bounces between them. One tick is one round trip, up and back. On the spacecraft, where the clock is at rest, the pulse travels two d at speed c, so one tick takes t zero equals two d over **c**.

Visual: board change (a new set-up): the light clock large at the left (about 520 px tall) inside a teal frame badge "ship frame (clock at rest)", drawn on the painted ship's hull; mirrors labelled, separation bracket "d". On "One tick is one round trip" the amber pulse goes up and back, a tick counter "1". On "the pulse travels two d" the path shows "2d". On "c" `AlignedAlgebra` "t₀ = 2d / c" (teal, 52 px), teal hand tag "t₀: the clock's own time" with a teal pen ring.

### 3. the same clock, moving
> Now watch the same clock from Earth, as the ship passes at speed v. While the pulse travels up, the mirrors move sideways. So the pulse has to travel along a slanted path to hit the top mirror, and another slanted path back **down**. That's longer than two d. And by Einstein's second postulate, the pulse still travels at c. Longer path, same speed, so each tick takes longer, measured from **Earth**.

Visual: a second panel at the right in an ink badge "Earth frame": the same clock moving right at "v". On "the mirrors move sideways" the mirrors slide right while the pulse rises; On "down" the pulse traces an ink inverted V (two slanted lines). On "longer than two d" the slanted path's length is compared with the vertical "2d" by laying them side by side, ink pen bracket and hand tag "longer path". On "the pulse still travels at c" both panels' pulses carry a tag "c (postulate 2)". On "Earth" the two tick counters run: the ship panel's counter ticks faster than the Earth panel's; tag "each tick takes longer in Earth's frame". `AlignedAlgebra` "t > t₀" (ink) writes with the Earth cue.

### 4. Pythagoras on half a tick
> Let's find how much longer. Take half a tick, a time t over two. In that time, light travels c t over two along the slant, and the ship moves v t over two sideways. The height is still d, because the motion is sideways, not along the mirrors' separation. That's a right-angled triangle, so by Pythagoras, c t over two, all squared, equals d squared, plus v t over two, all **squared**.

Visual: camera change (a new set-up; scenes 2 and 3 together about 50 s): the Earth panel's first slanted line lifts off into a large coded right-angled triangle filling the left half (about 700 px tall); the derivation column on the right. On "light travels c t over two along the slant" the hypotenuse labels "ct/2" (amber). On "the ship moves v t over two sideways" the base labels "vt/2" (orange). On "The height is still d" the vertical side labels "d", ink hand tag "sideways motion: d unchanged". On "squared" `AlignedAlgebra` "(ct/2)² = d² + (vt/2)²" (52 px); amber pen arrow from the hypotenuse to its term.

### 5. the time dilation equation
> Now swap d for c t zero over two, from the clock at rest. Multiply out, and collect the t terms. You get t squared, times c squared minus v squared, equals c squared t zero **squared**. Divide, and take the square root, and t equals t zero over the square root of one minus v squared over c **squared**. That's time dilation, on your data sheet. The factor one over that square root is called gamma, the Lorentz factor, so t equals gamma t **zero**.

Visual: "(ct/2)² = d² + (vt/2)²" stays at the top. On "swap d for c t zero over two" the "d" in the triangle and the equation is replaced by "ct₀/2" (teal), linking to "t₀ = 2d/c" from scene 2. On "Multiply out" the line "c²t²/4 = c²t₀²/4 + v²t²/4". On "squared" (first cue) "t²(c² − v²) = c²t₀²". On "squared" (second cue) "t = t₀ / √(1 − v²/c²)" in a dark-ink frame (56 px; tag "data sheet"). On "the Lorentz factor" "γ = 1 / √(1 − v²/c²)" (violet), violet hand tag "gamma ≥ 1". On "zero" "t = γt₀" in a dark-ink frame; earlier lines shrink to 32 px.

### 6. proper time
> The two times have names. t zero is the proper time. It's the time between two events measured by one clock that's present at both of them, so in its frame both events happen in the same place. Here the events are the pulse leaving the bottom mirror and getting back, and only the ship's clock is at both. Gamma is never less than one, so proper time is always the **shortest**. Proper doesn't mean correct. Both frames are **right**.

Visual: the two clock panels return side by side. On "two events" two small markers appear on the Earth panel's path: "event 1: pulse leaves bottom mirror" at the left end, "event 2: pulse returns" at the right end; in the ship panel both markers sit at the same place. On "one clock that's present at both of them" the ship's teal clock pulses beside the coinciding markers; tag "proper time t₀: one clock, same place". On "only the ship's clock is at both" the Earth panel shows two ink clocks, one under each event marker, tag "Earth: two clocks, two places". On "shortest" a chip "γ ≥ 1 → t ≥ t₀", teal hand tag "shortest" with a teal pen ring round the ship's clock. On "right" a chip "proper = correct" is crossed in red, tag "both measurements are valid in their own frame".

### 7. every clock, and both ways
> This isn't a trick of light clocks. If the other clocks on the ship didn't slow by the same amount, you could compare them inside the cabin and discover your speed. That would break the first postulate. So every process on the moving ship, every clock, every vibration, every decay, runs slow by the same factor, as measured from **Earth**. And it works both ways. To the ship, Earth's clocks run **slow**.

Visual: the ship panel shows the light clock beside a coded spring oscillating and a slate muon dot (with a decay timer). On "compare them inside the cabin" the three ship processes are shown with a hypothetical mismatch (the spring ticking faster than the light clock), tag "mismatch would reveal motion" and the label "postulate 1" flashes red. On "Earth" the mismatch disappears: in the Earth panel all three slow together, violet hand tag "all slow by γ". On "slow" camera change (a new set-up): the frames swap: the ship panel holds still and the painted Earth moves left; the Earth clock now ticks slowly as seen from the ship; orange pen arrow on Earth's motion, hand tag "both ways".

### 8. how big is gamma?
> How big is gamma? At everyday speeds, it's almost exactly one. Even for a jet at nine hundred kilometres per hour, gamma is about one plus three times ten to the minus thirteen. At zero point six c, gamma is one point two five. At zero point eight c, it's one point six seven. At zero point nine nine five c, it's about ten. As v approaches c, gamma shoots up without **limit**.

Visual: board change (a new set-up): the γ against v/c graph (violet curve, about 900 px wide, vertical axis 1 to 12, horizontal 0 to 1, a dashed asymptote at v/c = 1) with a live speed slider under it and readouts (52 px) "v = ... c", "γ = ..."; at the left the light-clock pair (300 px) and the teal ship clock and ink Earth clock ticking in the ratio 1 : γ, readout "1 ship tick = γ ticks' time on Earth". On "almost exactly one" the slider sits near 0, readout "γ ≈ 1.00"; the two clocks tick together. On "nine hundred kilometres per hour" a tag "900 km h⁻¹: γ − 1 ≈ 3 × 10⁻¹³ (atomic clocks can detect this)". On "zero point six c" the slider moves and the marker rides to "0.6c: γ = 1.25"; the slant lengthens and the ink clock lags. On "zero point eight c" "0.8c: γ = 1.67". On "zero point nine nine five c" the slider passes 0.9c ("γ = 2.29") to "0.995c: γ = 10.0"; the ink clock barely moves. On "limit" the curve rises along the asymptote, violet hand tag "γ → ∞ as v → c" and a violet pen arrow up the asymptote.

### 9. worked example: the muons
> Now the muons. They travel at zero point nine nine five c, so gamma is ten point zero. Their proper lifetime, measured by a clock riding with the muon, is two point two **microseconds**. From Earth, t equals gamma t zero, ten point zero times two point two, which is twenty two **microseconds**. In that time it covers about six point six kilometres, not six hundred and sixty **metres**. So the fifteen kilometre trip takes about two point three average lifetimes, and roughly one muon in ten survives, instead of almost **none**.

Visual: board change to the working layout (a new set-up), the atmosphere column at the left (about 700 px tall) with the cloud chamber on its ground strip. Task strip: "Find the muon's lifetime and range in Earth's frame." Equation strip: "t = t₀ / √(1 − v²/c²) = γt₀". Givens grouped: "v = 0.995c" (muon), "t₀ = 2.2 μs (proper: muon's own clock)", "15 km atmosphere (Earth frame)". On "gamma is ten point zero" "γ = 1/√(1 − 0.995²) = 10.0" (52 px). On "microseconds" (first cue) a small teal clock rides on a muon dot, teal hand tag "t₀ = 2.2 μs (muon's clock)". On "microseconds" (second cue) "t = 10.0 × 2.2 μs = 22 μs (Earth frame)" in a dark-ink frame (56 px). On "metres" "range = 0.995 × 3.00 × 10⁸ × 22 × 10⁻⁶ ≈ 6.6 km", framed; a long ink bracket on the column "≈ 6.6 km" beside the short "≈ 660 m"; a chip "range = 0.995c × 2.2 μs = 660 m" is crossed in red, red hand tag "mixes the muon's time with Earth's distance". On "none" the column shows 15 km divided into "≈ 2.3 dilated lifetimes", and a survival counter "≈ 1 in 10 reach sea level (classically ≈ 1 in 10¹⁰)" with a grey label on the counter "ideal model: constant 0.995c, no energy loss".

### 10. atomic clocks and accelerators
> Two more tests. In 1971, Joseph Hafele and Richard Keating flew caesium atomic clocks around the world on airliners, eastward and then westward, and compared them with clocks left on the ground. The eastbound clocks lost about fifty nine nanoseconds, and the westbound clocks gained about two hundred and seventy three, matching predictions that include both speed and the weaker gravity at **altitude**. And at CERN, muons circling a storage ring with gamma about twenty nine lived about twenty nine times longer than muons at **rest**.

Visual: board change (a new set-up): a coded globe seen from above the North Pole (about 600 px), a ground clock badge at "US Naval Observatory"; the painted atomic clock plate `y12p-atomic-clock-v1.png` (about 380 px wide) beside it, its blank display showing a coded nanosecond readout. Names in text: "Hafele and Keating, 1971". On "eastward and then westward" two coded flight loops draw around the globe, orange eastward and violet westward (no aircraft drawn; a small dot travels each loop). On "lost about fifty nine nanoseconds" a readout on the eastward loop "−59 ± 10 ns" (44 px), orange pen ring. On "gained about two hundred and seventy three" "+273 ± 7 ns" on the westward loop, violet pen ring; hand tag "opposite signs". On "altitude" a two-part tag "speed effect (special relativity) + altitude effect (gravity: general relativity)" and a small note "eastbound moves faster than the ground, westbound slower, measured from Earth's centre". On "And at CERN" camera change (a new set-up): a coded storage ring (about 600 px) with slate muon dots circling, text tag "CERN storage ring, 1977". On "rest" two decay timers (52 px): "at rest: 2.2 μs" and "in the ring (γ ≈ 29): ≈ 64 μs", violet hand tag "29 × longer, as γ predicts".

### 11. worked example: a trip to a star
> One more example. A spacecraft travels from Earth to a star twelve light years away, at zero point eight c. Which clock measures proper time? The ship's clock, because it's present at both events, leaving Earth and arriving at the star. In Earth's frame, the trip takes twelve over zero point eight, fifteen **years**. Gamma at zero point eight c is one point six seven, so the ship's clock shows fifteen over one point six seven, nine **years**.

Visual: board change to the working layout: the Earth plate at the left, a coded star (yellow-white dot with a small label "star") at the right, a bracket "12 ly (Earth frame)" between them; the spacecraft plate moving right with "0.8c". Task strip: "Find the trip time in Earth's frame and on the ship's clock." Givens: "distance 12 ly (Earth frame)", "v = 0.8c". On "Which clock measures proper time?" the ship's teal clock and two ink clocks (one at Earth, one at the star, tag "synchronised in Earth's frame") appear. On "leaving Earth and arriving at the star" the teal clock pulses at both ends of the journey, tag "proper time: ship's clock". On "years" (first cue) "t = 12 ly / 0.8c = 15 years (Earth frame)" (52 px), framed in ink. On "years" (second cue) "γ = 1/√(1 − 0.8²) = 1.67; t₀ = t/γ = 15 / 1.67 = 9.0 years (ship's clock)" in a teal-edged dark-ink frame (56 px); beside it a chip "ship: 15 × 1.67 = 25 years" fades in and is crossed in red, red hand tag "proper time is the shortest".

### 12. a way to remember
> Here's a way to remember it. Moving clocks run slow. And the proper time is the shortest, on the clock that's at both **events**.

Visual: clear change: the two light-clock panels return (each about 500 px). On "Moving clocks run slow" the Earth-frame panel's counter lags. On "events" the teal clock beside the coinciding event markers pulses. A framed memory card writes above in hand lettering (52 px, teal and ink; the same card is reused on the notes screen): "Moving clocks run slow. Proper time is the shortest, on the clock at both events." Hold about 2 seconds.

### 13. attempt 1 (countdown, 10 seconds)
> Your turn. Charged pions have a mean lifetime of twenty six nanoseconds, measured at rest. In an accelerator, pions travel at zero point nine five c. Calculate their mean lifetime in the laboratory frame, and how far they travel in the laboratory in that time. Pause here to answer.

Visual: `QuestionCard` (subject "Physics") arrives with its full text and picture in one move (question text 36 px), worded as printed: "Charged pions have a mean lifetime of 26 ns when measured at rest. In an accelerator, a beam of pions travels at 0.95c. (a) Calculate the mean lifetime of the pions in the laboratory frame. (b) Calculate the distance the pions travel in the laboratory in this time. (3 marks)" Picture: a coded accelerator beam pipe (about 600 px) with slate pion dots moving right, tag "0.95c". Data chip "c = 3.00 × 10⁸ m s⁻¹". The full question stays on screen. Countdown ring full from "Pause here to answer." for 10 seconds. Nothing answer-bearing.

### 14. feedback 1 (brief)
> Twenty six nanoseconds is the proper time, measured at rest. Gamma at zero point nine five c is three point two zero, so the lab lifetime is twenty six times three point two zero, eighty three **nanoseconds**. So the distance, v t, is about twenty four **metres**. The slip is dividing by gamma. The moving pions' lifetime is **longer**.

Visual: card shrinks to the top; "measured at rest", "0.95c" and "laboratory frame" underline. A givens strip (36 px): "t₀ = 26 ns (proper)", "v = 0.95c", "c = 3.00 × 10⁸ m s⁻¹". The beam pipe at the right with a teal clock riding on a pion. On "nanoseconds" "(a) γ = 1/√(1 − 0.95²) = 3.20; t = γt₀ = 3.20 × 26 = 83 ns" (52 px), framed. On "metres" "(b) d = vt = 0.95 × 3.00 × 10⁸ × 83 × 10⁻⁹ ≈ 24 m", framed; an ink bracket on the pipe. On "longer" a chip "t = 26 / 3.20 = 8.1 ns" fades in and is crossed in red (red hand tag "dilated time is longer: t > t₀"). Hold about 1 second.

### 15. attempt 2 (countdown, 10 seconds)
> Last one. A spacecraft travels at zero point six c from Earth to a space station six point zero light years away, measured in Earth's frame. Calculate the trip time in Earth's frame, and on the spacecraft's clock, and state which is the proper time. Pause here to answer.

Visual: `QuestionCard` arrives with its full text and picture in one move (question text 36 px), worded as printed: "A spacecraft travels at 0.60c from Earth to a space station 6.0 light-years away, as measured in Earth's frame. (a) Calculate the time for the trip in Earth's frame. (b) Calculate the time for the trip measured by a clock on the spacecraft. (c) State which of these is the proper time. Justify your answer. (3 marks)" Picture: the painted Earth (200 px) at the left, the painted space station `y12p-space-station-v1.png` (about 420 px wide) at the right, the painted spacecraft between them with "0.60c", an ink bracket "6.0 ly". The full question stays on screen. Countdown ring full from "Pause here to answer." for 10 seconds. Nothing answer-bearing.

### 16. feedback 2 (brief)
> In Earth's frame, six point zero over zero point six is ten **years**. Gamma is one point two five, so the ship's clock shows ten over one point two five, eight point zero **years**. The ship's clock measures proper time, because it's present at both events. The slip is calling Earth's time proper, because it seems more **correct**.

Visual: card shrinks to the top; "6.0 light-years", "Earth's frame" and "a clock on the spacecraft" underline. A givens strip (36 px): "6.0 ly (Earth frame)", "v = 0.60c". The Earth, ship and station picture at the right, with an ink clock at each end and a teal clock on the ship. On "years" (first cue) "(a) t = 6.0 ly / 0.60c = 10 years" (52 px), framed. On "years" (second cue) "(b) γ = 1/√(1 − 0.60²) = 1.25; t₀ = 10 / 1.25 = 8.0 years", framed. On "correct" "(c) proper: ship's clock (present at departure and arrival)", framed; teal pen ring round the ship's clock; a chip "Earth's time is proper" fades in and is crossed in red (red hand tag "proper = one clock at both events"). Hold about 1 second.

### 17. handoff
> Back to the trip to the star. The ship's clock says nine years. But the ship's instruments watch the star approach at zero point eight c for those nine years. Zero point eight times nine is only seven point two light years. Earth says twelve. So the distance itself must be shorter for the ship. Why can a moving distance be shorter without an object being **crushed**?

Visual: board clears (camera change) to scene 11's layout: Earth at the left, the star at the right, the bracket "12 ly (Earth frame)"; the spacecraft between them with "0.8c"; clock badges "Earth frame: 15 yr" (ink) and "ship's clock: 9 yr" (teal). On "the star approach at zero point eight c" the frame swaps: the ship holds still and the Earth and star slide left, with an arrow "star approaching at 0.8c". On "seven point two light years" a teal bracket under the ink one "0.8 × 9 = 7.2 ly (ship frame?)". On "Earth says twelve" the ink bracket pulses. On "crushed" the chip "Next: why can a moving distance be shorter without an object being crushed?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 18. key notes (quiet, hold about 45 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Moving light clock: longer path, same c, slower ticks.
2. t = t₀ / √(1 − v²/c²) = γt₀ (γ ≥ 1).
3. Proper time t₀: one clock at both events.
4. All clocks slow together; it works both ways.
5. Evidence: muons, atomic clocks, accelerator muons.

Memory aid (framed card under the notes, hand lettering as in scene 12): *Moving clocks run slow. Proper time is the shortest, on the clock at both events.* Notes in the role colours, 34 px; about 250 characters of bullet text; no paragraphs.

## Teaching checks

- **Does it explain causes?** Why a moving clock ticks slowly: a longer light path at the same speed (3). Why the factor is γ: Pythagoras (4, 5). Why all clocks agree: postulate 1 (7). Why muons arrive: their lifetime in Earth's frame is γ times longer (9). Why flown clocks differ by direction: speed relative to Earth's centre plus gravity (10, tag).
- **Misconceptions addressed:** proper time is the "correct" or Earth time (6, 16 crossed); dividing by γ for the moving clock's lifetime (14 crossed); time dilation only near c (8); only light clocks are affected (7); one frame is right (6).
- **One idea at a time:** the clock at rest (2), moving (3), geometry (4), algebra (5), proper time (6), generality (7), size (8), muons (9), other evidence (10), the trip (11).
- **Video makes it easier:** the two tick counters drifting apart (3); the triangle lifting off the path (4); the coinciding event markers in the ship panel (6); the 660 m and 6.6 km brackets on the atmosphere column (9).
- **Response opportunity:** one prediction (3 s) and two unseen HSC-style tasks with every condition visible, 10 s each; nothing answer-bearing. One crossed mistake each; feedback about 24 s and 24 s.
- **Avoided double teaching:** the postulates and the light clock's two paths (v12), Pythagoras and s = vt (Year 11) recalled in a clause.
- **Syllabus coverage:** `P7-IQ4-02` (time dilation part): Einstein's thought experiment (2 to 5), t = t₀/√(1 − v²/c²) (5), quantitative situations (9, 11, 13, 15), cosmic-origin muons (1, 9), atomic clocks (Hafele-Keating) (10), particle accelerators (10). Length contraction is v14; cosmological evidence is open decision 2.
- **Out of scope by design:** length contraction (v14); the twin paradox; GPS arithmetic; general relativity beyond naming the gravity term.

## Practice questions and model answers

**Attempt 1 (scene 13; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "Charged pions have a mean lifetime of 26 ns when measured at rest. In an accelerator, a beam of pions travels at 0.95c. (a) Calculate the mean lifetime of the pions in the laboratory frame. (b) Calculate the distance the pions travel in the laboratory in this time."
Model answer: (a) The 26 ns is the proper time t₀. γ = 1/√(1 − 0.95²) = 3.20; t = γt₀ = 3.20 × 26 ns = 83 ns. (b) d = vt = 0.95 × 3.00 × 10⁸ × 8.3 × 10⁻⁸ = 24 m. Classic mistake (crossed): t = 26/3.20 = 8.1 ns.

**Attempt 2 (scene 15; original wording, HSC style, 3 marks).** "A spacecraft travels at 0.60c from Earth to a space station 6.0 light-years away, as measured in Earth's frame. (a) Calculate the time for the trip in Earth's frame. (b) Calculate the time for the trip measured by a clock on the spacecraft. (c) State which of these is the proper time. Justify your answer."
Model answer: (a) t = 6.0 ly / 0.60c = 10 years. (b) γ = 1/√(1 − 0.60²) = 1.25; t₀ = t/γ = 8.0 years. (c) The spacecraft clock's 8.0 years is the proper time: one clock is present at both events (departure and arrival), which occur at the same place in its frame. Classic mistake (crossed): "Earth's time is the proper time".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Constants | c = 3.00 × 10⁸ m s⁻¹ (data sheet) | 9, 13, 14 |
| Muons (site) | 15 km; t₀ = 2.2 μs; v = 0.995c; γ = 10.01 (10.0); 0.995c × 2.2 μs = 657 m (≈ 660 m); t = 22.0 μs; range 6.58 km (≈ 6.6 km); 15 km / 0.995c = 50.3 μs = 2.28 lifetimes; survival e^(−2.28) = 0.10; classical e^(−22.8) = 1.2 × 10⁻¹⁰ | 1, 9, notes |
| γ values | 0.6c: 1.25; 0.8c: 1.667; 0.95c: 3.203; 0.995c: 10.01; 900 km h⁻¹ (250 m s⁻¹): γ − 1 = 3.47 × 10⁻¹³ | 8, 11, 14, 16 |
| Hafele-Keating | −59 ± 10 ns east; +273 ± 7 ns west (1971) | 10, notes |
| CERN storage ring | γ ≈ 29.3; 29.3 × 2.197 μs = 64.4 μs | 10 |
| Trip | 12 ly at 0.8c: 15 years (Earth); 15/1.667 = 9.0 years (ship); 0.8 × 9 = 7.2 ly | 11, 17 |
| A1 | γ(0.95) = 3.20; 3.20 × 26 = 83 ns; 0.95 × 3.00 × 10⁸ × 83.3 × 10⁻⁹ = 23.7 m ≈ 24 m; slip 26/3.20 = 8.1 ns | 13, 14 |
| A2 | 6.0/0.60 = 10 years; γ = 1.25; 10/1.25 = 8.0 years | 15, 16 |
| Speed slider (Revision 2) | v/c = 0, 0.6, 0.8, 0.9, 0.995: γ = 1.00, 1.25, 1.67, 2.29, 10.0 | 8 |
| Crossed slips (Revision 2) | "0.995c × 2.2 μs = 660 m" as the range (9); "15 × 1.67 = 25 years" on the ship (11) | 9, 11 |
| Site checks | 45 h flight at 250 m s⁻¹: kinematic ≈ 56 ns; 8.6/0.995 = 8.64 years; 8.64/10.01 = 0.86 years | site notes |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov, `numbers.py` in the session scratchpad); Codex to re-check.

- 1/√(1 − 0.995²) = 10.0125; 0.995 × 3.00e8 × 2.2e-6 = 656.7 m; 10.0125 × 2.2e-6 = 2.2028e-5 s; 0.995 × 3.00e8 × 2.2028e-5 = 6575 m.
- 15000/(0.995 × 3.00e8) = 5.025e-5 s; /2.2028e-5 = 2.281; e^(−2.281) = 0.102; 5.025e-5/2.2e-6 = 22.84; e^(−22.84) = 1.20e-10.
- 1/√(1 − 0.6²) = 1.25; 1/√(1 − 0.8²) = 1.6667; 1/√(1 − 0.95²) = 3.2026.
- 0.5 × (250/3.00e8)² = 3.47e-13.
- 12/0.8 = 15; 15/1.6667 = 9.0; 0.8 × 9 = 7.2; 3.0 × 1.6667 = 5.0.
- 3.2026 × 26 = 83.27 ns; 0.95 × 3.00e8 × 83.27e-9 = 23.73 m; 26/3.2026 = 8.12 ns.
- 6.0/0.60 = 10; 10/1.25 = 8.0. 29.3 × 2.197 = 64.37 μs.
- Revision 2 (7 Nov, Python): 1/√(1 − 0.9²) = 2.294; 15 × 1.6667 = 25.0 (crossed slip).

## Memory aid check

- **"Moving clocks run slow. Proper time is the shortest, on the clock at both events."** Meaning, as said in scene 12: a clock moving relative to a frame is measured in that frame to tick slowly by γ; the proper time between two events, measured by a single clock present at both, is shorter than the time between them in any other inertial frame. Assumptions checked: inertial frames; "moving" is relative (reciprocity, scene 7), so "run slow" is always "as measured in a frame where it moves"; "at both events" means present at both in an inertial frame. It helps a new case: A1 (26 ns is proper, the lab time is longer) and A2 (the ship's clock is proper). Introduced after the explanation (2 to 11).
- **Considered, not used:** "t is tall, t zero is tiny" (memorable, but students then attach t₀ to the "small number" in a question rather than to the clock at both events).

## Narration length estimate

Revision 2 count (7 Nov; unchanged narration; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed; total = sum of scene strings): **6,395 characters**, 18 scenes. Characters per scene (1 to 18): 465, 273, 394, 381, 437, 426, 398, 374, 515, 529, 438, 125, 282, 325, 271, 322, 365, 75. At 13.3 characters per second the speech is about 481 s; add about 3 s for the prediction countdown, 2 s for the scene 8 slider, 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 40 s more of the quiet notes hold (45 s in all; about 71 s of holds and countdowns): **about 552 s**, inside the 5,500 to 7,000 character band and under the 570 s cap. Revision 1: about 565 s. Reserve trims if the voiced take runs long: scene 10's accelerator sentences (open decision 1); scene 7's reciprocity sentences; scene 8's jet sentence.

## Opening frame

v12's final frame (designed in this wave, `phys-y12-m7-v12.md`): paper background; heading "Why must observers agree on light speed?"; the painted spacecraft `y12p-spacecraft-v1.png` at the centre (exhaust off) with a teal ruler-and-clock badge "ship frame"; the painted Earth `phys-y11-earth-v1.png` small at the lower left with an ink badge "Earth frame"; a coded light clock (two horizontal mirrors) on the ship's hull with an amber pulse; a teal vertical path tagged "ship: up and down"; an ink zigzag of two diagonals tagged "Earth: slanted, longer"; both paths tagged "c"; "time per tick?" at both badges; chip "Next: how can two observers measure different elapsed times?". Scene 1 turns the chip into the heading and shrinks the ship and clock to the top right.

## Final frame

The last explained frame (end of scene 17, before the key-notes board): paper background; heading "How can two observers measure different elapsed times?"; the painted Earth `phys-y11-earth-v1.png` at the left and a coded star at the right, displaced slightly left (ship frame shown, so they are moving left with an arrow "star approaching at 0.8c"); the painted spacecraft `y12p-spacecraft-v1.png` between them, held still, facing right; an ink bracket "12 ly (Earth frame)" between Earth and the star; a teal bracket under it "0.8 × 9 = 7.2 ly (ship frame?)"; clock badges "Earth frame: 15 yr" (ink) and "ship's clock: 9 yr" (teal); chip "Next: why can a moving distance be shorter without an object being crushed?". v14 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m7-v13` (route phys-y12-m7-v13). Suggested explainer folder `src/explainer/lessons/phys-y12-m7-v13` and build folder `docs/production/claude-pm/lessons/p-y12-m7-v13` (root to confirm).

In order (kebab-case; 18 scene headings, all `### N.`): hook, clock-at-rest, clock-moving, pythagoras, dilation-equation, proper-time, every-clock, gamma-size, worked-muons, clocks-accelerators, worked-trip, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Scene 1 is `explain` with a 3 s prediction countdown. `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: light clock (two panels, speed slider, triangle lift-off), frame clocks, γ graph, muon column, globe flights, storage ring, `AlignedAlgebra`, `NumberTicker`, `PenArrow`, `Countdown`, `CameraStage`. Transitions (`pickTransition`, Revision 2): 1 to 2 clear change; 2 to 3 camera continue (second panel; about 50 s in all); 3 to 4 camera change (the triangle lifts off into the full derivation stage); 4 to 5 camera continue (about 62 s); a camera change inside 7 (the frame swap) and inside 10 (the storage ring); no set-up runs past about 65 s; 5 to 6 clear change; 6 to 7 camera continue; 7 to 8 clear change to the γ graph; 8 to 9 clear change to working; 9 to 10 clear change; 10 to 11 clear change to working; 11 to 12 clear change; attempts and feedback card shrink to the top; 16 to 17 clear change; 17 to 18 fade to the notes board.

Holds: hook (3 s countdown), scene 8 slider (2 s), memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 45 s). Review evidence paths: `learning_review` = `checks/p-y12-m7-v13-learning-review.md`, `science_check` = `checks/p-y12-m7-v13-physics-check.md`.

## Assets

Have (inspected 6 Nov on session contact sheets; scaled uniformly only, never stretched):
- `public/assets/physics/phys-y11-earth-v1.png` (1254 × 1254, RGBA): Earth (11, 17).
- `public/assets/physics/y12p-spacecraft-v1.png` (2048 × 768; brief 191, inspected 7 Nov): 1, 2, 3, 6, 7, 11, 15, 17.
- `public/assets/physics/y12p-atomic-clock-v1.png` (1514 × 1039, RGBA; delivered in brief 191, inspected 7 Nov: grey rack instrument with a window onto the beam tube, blank dark display, knobs and switches, handles): 10.
- `public/assets/physics/y12p-cloud-chamber-v1.png` (inspected 7 Nov: glass-topped chamber on a brass ring over a wooden stand with a glass flask; no text or people): the sea-level detector (1, 9), coded tracks over its glass top.
- `public/assets/physics/y12p-space-station-v1.png` (2172 × 724; brief 191, inspected 7 Nov: truss deck with modules and solar wings): A2 card (15, 16).
- **Checked, not used:** `phys-y11-sun-v1.png` (the destination is a generic star, coded so it does not read as the Sun); `phys-y11-digital-timer-v1.png` (frame clocks are coded badges so their tick rates can be set).

Need (new plates): none (Revision 2).

Coded: light clocks, triangle, frame clock badges, γ graph, atmosphere column, muons, globe and flight loops, storage ring, star, brackets, calculation strips, crossed chips, countdowns, key notes board.

Kit gaps (for the v13 build brief):
1. **Light clock pair.** Rest and moving panels driven by one v; counters ticking in the ratio 1 : γ; a triangle that lifts off the slanted path with live side labels.
2. **Muon column.** A scaled atmosphere with decay flashes drawn from an exponential at a chosen mean lifetime, and a survival counter.

## Codex asset brief

Revision 2: no open request; the atomic clock was delivered in brief 191 and is kept here for the record.

1. **`y12p-atomic-clock-v1.png`** (delivered). A painted portable caesium-beam atomic clock of the 1970s laboratory kind: a grey rack-mounted metal instrument box, front panel with a small numeric display (blank or showing no readable digits), a few knobs and switches, ventilation grille, carry handles. Three-quarter front view. No text, no brand names, no people or hands. Transparent PNG with alpha channel, about 1600 × 1100, object centred with even margins, soft shadow inside the alpha only. Style: match `phys-y11-signal-generator-v1.png` and `phys-y11-eht-supply-v1.png` (painted lab equipment, neutral lighting, clean edges). Used small (about 20% frame width) beside the coded globe in v13 scene 10.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text and attempts against the "Numbers used" table.
2. Confirm the physics of every learner-visible claim: the light-clock derivation (d unchanged, same c, Pythagoras, algebra); t = t₀/√(1 − v²/c²) and γ; the proper-time definition; "every process slows by the same factor" from postulate 1; reciprocity; the γ values; the muon numbers and "roughly one in ten" (author note b); Hafele-Keating values, dates and the speed-plus-gravity statement (author note c); the CERN storage-ring statement (author note d); the 12 ly trip.
3. Confirm the memory aid's assumptions (see "Memory aid check").
4. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
5. Confirm both attempt cards are original in wording, carry every condition and show nothing answer-bearing.
6. Confirm the syllabus quote matches the route JSON exactly and is labelled 2017.
7. Confirm no person, hand, face or body outline is drawn or requested (no twins, no aircraft interiors; Hafele and Keating named in text only).
8. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
9. Confirm the narration character count and per-scene counts by script with the build parser rules.
10. Report site notes 1 to 4 under Decisions to root.
11. Revision 2: confirm the scene 9 counter label "ideal model: constant 0.995c, no energy loss" and that the hook's sea-level observation is kept separate; the slider values (Numbers used); the crossed slips (9, 11).

## YouTube metadata (draft)

Title: Time Dilation: The Light Clock, Proper Time and Muons | HSC Physics Module 7

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module7/lesson12.sa.html

Muons live only 2.2 microseconds, yet they cross 15 km of atmosphere. Derive time dilation from a light clock and Pythagoras, see what proper time really means (and why it's always the shortest), and check the theory against muons, the Hafele-Keating flying atomic clocks and muons in a particle accelerator. Worked muon and spacecraft examples and two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 7: The Nature of Light.
Syllabus content (NSW Physics Stage 6, 2017):
"investigate the evidence, from Einstein’s thought experiments and subsequent experimental validation, for time dilation t = t0/√(1 − v²/c²) and length contraction l = l0√(1 − v²/c²), and analyse quantitatively situations in which these are observed, for example: observations of cosmic-origin muons at the Earth’s surface; atomic clocks (Hafele–Keating experiment); evidence from particle accelerators; evidence from cosmological studies"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: Einstein's postulates. Next: length contraction.

#HSCPhysics #Physics #TimeDilation #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v12; check that the slanted path at the same c lands before the algebra; that the two algebra stages are followable; that "present at both events" is understood with the coinciding markers; that the Hafele-Keating sign difference is not confusing at speed), then the physics check (authors notes b to d) and the Codex error check.
- The drifting tick counters, the lifted triangle and the two brackets on the atmosphere column carry the explanation; judge them at playback speed in the voiced preview.

## Revision 2 (7 Nov 2026)

Brief 191 findings (`checks/p-y12-m7-v13-learning-review.md`, `checks/p-y12-m7-v13-science-check.md`): 0 blockers, 1 should fix, 0 optional.
- **Should fix, scene 9 muon model.** Resolved: the survival counter carries the label "ideal model: constant 0.995c, no energy loss"; Decisions ("Muons worked") and author note (b) call it an illustrative constant-speed estimate, not measured atmospheric transmission; the hook's real observation ("Detectors at sea level catch plenty", with the painted cloud chamber) stays a separate statement. The key notes no longer quote "1 in 10". No speech change.

Visual upgrade (to `../maths-visual-standard.md` and the build gate):
- Decisions gain "Colour key (Revision 2)", "Type sizes", "Anchor", "Simulation" and "Question cards".
- Plates: the painted cloud chamber (existing, inspected) becomes the sea-level detector in the hook and scene 9, with the painted Earth under the atmosphere column; the atomic clock (brief 191) carries scene 10; the space station (brief 191) and spacecraft make the A2 card's picture.
- Live control: scene 8's speed slider (Python: γ = 1.00, 1.25, 1.67, 2.29, 10.0 at 0, 0.6, 0.8, 0.9, 0.995c) driving the light-clock pair, a marker on the γ curve and the teal and ink clocks ticking in the ratio 1 : γ. 0.95c is kept off it because A1 asks for it.
- Stage changes: scenes 2 to 5 were one continuing board for about 112 s; scene 4 now cuts to the full derivation stage (triangle and algebra), and scenes 7 and 10 each gain a camera change. No set-up runs past about 65 s.
- Hand tags and a pen mark in role colours in every teaching scene ("dies way up here?", "observed at sea level", "t₀: the clock's own time", "longer path", "sideways motion: d unchanged", "gamma ≥ 1", "shortest", "all slow by γ", "both ways", "γ → ∞ as v → c", "t₀ = 2.2 μs (muon's clock)", "opposite signs", "29 × longer, as γ predicts"; pen rings, brackets and arrows on the chamber, t₀, the path, the hypotenuse, the asymptote, the flight readouts and the answers).
- Framed answers: t = t₀/√(1 − v²/c²) and t = γt₀ (5), 22 μs and 6.6 km (9), 15 and 9.0 years (11), both A1 rows (14), all three A2 rows (16). New crossed slips: "0.995c × 2.2 μs = 660 m" as the range (9) and "15 × 1.67 = 25 years" on the ship (11).
- Question cards arrive with full text and a picture in one move (beam pipe; Earth, ship and station); the answer side has a givens strip and teal and ink clocks.
- Key notes cut from five long items (about 760 characters) to five short bullets (about 250 characters) with the framed memory card; quiet notes hold 60 s to 45 s.
- Type sizes stated; colour roles fixed.

New plate requests: none.

Joins: the opening is v12's final frame (unchanged). The final frame (scene 17) is unchanged, so the v14 join holds.

Counts: 6,395 to 6,395 characters (scene sum; no narration change); about 565 s to about 552 s.
