# Year 12 Physics M7 V02: Measuring the speed of light. How can a time-and-distance measurement reveal the speed of light? (design)

Status: Revision 2 (7 Nov 2026): brief 191 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 6,123 characters, 14 scenes, about 529 s, counted by script with the build parser rules (total = sum of scene strings; see "Narration length estimate"). Opens on v01's final frame.

Scope: second video of Year 12 Physics Module 7 (The Nature of Light, Physics Stage 6, 2017 syllabus), inquiry question "What is light?". Templates as `phys-y12-m7-v01.md`; calculation layout as `math-a12-d10.md`; plates and asset brief as `bio-y11-fa1-v05.md`. No pre-design pack exists; the pack work is done here. Site lesson read in full (6 Nov, read-only, through the brief 168 text extract `work/brief168/module7-lesson10.sa.txt`, hash checked against the live file): orient and predict (photoelectric prediction, warm-up, intentions, vocabulary), wave-model evidence (six phenomena table, Huygens, thin film), measure the speed of light (Rømer, Fizeau, Foucault, the 1983 definition, lunar laser ranging, GPS, Stop and Check, MC), the wave-model crisis, the black-body curve, the photoelectric worked example, wave versus particle history, apply and consolidate ("Analyse 7 marks", "Analyse 6 marks"), independent practice (Q4 on Rømer, Fizeau and the 1983 definition, model answers), retrieve: `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson10.sa.html`, SHA256 `3c6b866e16c1a9a0da5fd4b379c32c64cd1abbb96412642f19fdcb41efca4bc1` (recomputed 6 Nov; matches the route). Route entry `phys-y12-m7-v02`, section `measure-speed-of-light`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Compare named historical methods with a present time-of-flight approach, path length and delay; distinguish measured estimates from exact SI c." Next: "phys-y12-m7-v03: How do different sources produce different spectral patterns?" Practical in the route: "Primary or secondary investigation of light-speed measurement".

Owner rules applied: as v01 (no people, hands, faces or body outlines; Rømer, Fizeau and Foucault named in words only; no observer is drawn at any telescope or wheel; the Moon's reflectors are shown without astronauts); painted plates for real objects (Sun, Earth, Jupiter, Moon, toothed wheel, mirrors, laser, sensor, oscilloscope); orbit geometry, light paths, timers and calculation strips coded; every number recalculated in Python; a 3 s prediction; "Pause here to answer." with a 10 s countdown; brief feedback; original attempts; optional key notes; Australian spelling; no em dashes. Recalled, not re-taught: v01 (Maxwell's predicted c), Year 11 speed = distance / time and reflection.

Syllabus content (Physics Stage 6 (2017), Module 7 The Nature of Light; ledger id `P7-IQ1-03`), quoted from the ledger:

- `P7-IQ1-03`: "conduct investigations of historical and contemporary methods used to determine the speed of light and its current relationship to the measurement of time and distance (ACSPH082)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 59)

**Boundary:** starts on v01's final frame (EM wave on a distance bar, "d = ?", "t = ?", "speed = d / t"). Teaches: the problem (light's travel times are tiny, so either the distance must be huge or the timing very fine); Rømer (Io's eclipses run late as Earth recedes; the extra distance is the orbit's diameter; about 1000 s gives 3.0 × 10⁸ m s⁻¹; his own 22 minutes gives about 2.3 × 10⁸, but proved the speed finite); Fizeau's toothed wheel (gap to tooth in half a tooth spacing; 720 teeth, 8633 m, 12.6 turns per second: 3.13 × 10⁸ m s⁻¹); Foucault's rotating mirror (deflection angle; compact; about 2.98 × 10⁸); a present time-of-flight investigation (pulsed laser, sensor, oscilloscope; extra path and delay; gradient method); the 1983 definition (c exact, 299 792 458 m s⁻¹; the metre defined from c); distance from time (lunar laser ranging 2.56 s, 3.84 × 10⁸ m; GPS, 1 μs gives about 300 m). Stops before Foucault's water result and the Newton and Huygens debate (v05), spectra (v03), relativity.

## Decisions

- **Learner question (route wording kept).** "How can a time-and-distance measurement reveal the speed of light?" The answer, built in order: make the distance enormous (Rømer, 2), or time a short round trip with a mechanism of known rotation (Fizeau, Foucault, 3, 4), or time it electronically (5); then the twist: since 1983 c is fixed and the same measurement now reveals distance (6, 7).
- **Hook.** The prediction asks which came first, a measurement using planets or one on the ground (chips "planets", "on the ground"); the surprise is that the astronomical method came about 170 years earlier (site).
- **Rømer (site card and Q4(c)).** The site's 3.0 × 10¹¹ m and 1000 s give 3.0 × 10⁸ m s⁻¹. The design adds Rømer's own "about 22 minutes" (also on the site) as 2.3 × 10⁸ m s⁻¹ to show a measured estimate with a large error but the right order of magnitude. Narration says the delay "showed" light's speed is finite; it does not say Rømer himself calculated c (author note a).
- **Fizeau (site card).** The site gives "8 km" and "3.13 × 10⁸". The design uses Fizeau's published values (author note b: 720 teeth, 8633 m, first eclipse at 12.6 turns per second), which reproduce 3.13 × 10⁸, so the calculation layout can show the "gap to tooth" time. The narration explains why the time is half a tooth spacing.
- **Foucault (site card).** Qualitative: the returned beam is deflected by the angle the mirror turned during the round trip. The water measurement is deferred to v05 with one forward sentence.
- **Contemporary investigation (route practical, `P7-IQ1-03` "conduct investigations ... contemporary methods").** A school time-of-flight set-up (pulsed laser, fast light sensor, oscilloscope) with an illustrative dataset, labelled so. The gradient idea (delay against extra path) is named in one sentence. This video shows the method; it does not complete the practical.
- **Measured estimates versus exact c (route stop).** Scene 6 states the 1983 definition, that c is now exact by definition, and that old values were measured estimates. Scene 7 shows the reversed use: lunar laser ranging (d = ct/2) and GPS (a 1 μs timing error gives a distance, or range, error of about 300 m; Revision 2 wording).
- **Memory aid (scene 8, new):** "Then: measure d and t, find c. Now: fix c, time it, find d." See "Memory aid check".
- **Attempts (original).** A1: an original toothed-wheel calculation (500 teeth, 7.50 km, 20.0 turns per second; 3.00 × 10⁸ m s⁻¹). A2: a lunar ranging time (2.51 s) to a distance, and why it measures distance not c. Crossed: A1 "c = d/t with the one-way distance" (1.50 × 10⁸); A2 "d = ct" without halving (7.52 × 10⁸ m).
- **Handoff (route next).** Light is not just a signal with a speed; spread into colours, it carries information about its source. Next: "How do different sources produce different spectral patterns?". See "Final frame".
- **Colour key (v01 proposal, accepted by root decision 1):** light beams and pulses pale amber; timers and delays navy; distances orange brackets; measured historical values grey chips; the exact defined c in a navy box.
- **Colour key (Revision 2, fixed for every scene).** As above; the toothed wheel's rotation rate and the gap-to-tooth time rose; worked results orange inside a dark-ink frame; crossed chips and their hand tags red. Hand-font tags take the colour of the quantity they mark. The red laser pulse in scene 5 is drawn pale amber like every other pulse (a role colour for "light pulse", tagged once "laser pulse").
- **Type sizes (Revision 2, 1080p).** Current working line at least 44 px (scenes 2, 3, 5 and 7 working and the feedback rows 52 px; framed results 60 px); live readouts (scene 2 eclipse timer; scene 3 wheel slider: turns per second, gap-to-tooth time, round-trip time; scene 5 oscilloscope Δt; scene 7 round-trip timer) about 52 px; supporting lines, givens and chips 30 to 36 px; hand-font tags at least 30 px; question text 36 px; nothing a student must read below 26 px. All text above the bottom 12% of the frame.
- **Anchor (Revision 2).** Scene 1's two prediction chips carry painted thumbnails (about 200 px): the Jupiter plate on "planets" and the toothed wheel plate on "on the ground". The delivered Jupiter, toothed wheel and laser module plates (brief 191, inspected: a banded disc with the Great Red Spot; a flat 60-tooth steel wheel on an axle; a laser body on a post in a bench carrier) carry scenes 2, 3 and 5, with the Sun, Earth, Moon, plane mirror and oscilloscope plates reused.
- **Simulation (Revision 2).** The core live control is scene 3's wheel-speed slider: the wheel spins up through 6.3 to 12.6 turns per second while live readouts show the gap-to-tooth time (110 μs, then 55 μs; Python) against the fixed round-trip time (55 μs). The returning pulse passes while the gap-to-tooth time is longer than the round trip and is blocked when the two match. Scene 2's eclipse timer and scene 5's oscilloscope delay are the other live readouts.
- **Stage changes (Revision 2).** Each method is its own set-up (orbit stage, wheel stage, mirror stage, time-of-flight bench, definition boxes, Earth and Moon). The longest single set-up is scene 2 (about 58 s).
- **Question cards (Revision 2).** Each card arrives with its full text and a picture in one move. On the answer side the card shrinks to the top, a givens strip lists the data, the picture fills in with the answer, results are framed and one classic slip is crossed.
- **Site sources used:** `measure-speed-of-light` (Rømer, Fizeau, Foucault, 1983, lunar ranging, GPS, Stop and Check data), Q4 (a) to (d) and its model answer. Not used: the six-phenomena table, the crisis, black-body and photoelectric cards, the wave-versus-particle history (v05 uses it).
- **Site notes (quoted from site lesson 10, read 6 Nov; for Codex to log in `site-corrections-phys-y12.md`):**
  1. `wave-vs-particle-history`: "Maxwell's EM theory (1865): Light is a transverse oscillation of electric and magnetic fields. No medium required, refuting the aether." Maxwell assumed an aether; the aether was undermined later (Michelson and Morley, 1887, and special relativity, 1905). Proposed fix: "Maxwell's equations describe self-sustaining fields; Maxwell himself still assumed an aether, which later experiments and relativity made unnecessary."
  2. `wave-model-evidence` table: "Spectroscopy | Discrete wavelengths from atomic transitions; $E = hf$ | Continuous energy would produce a continuous spectrum". Discrete spectral lines and E = hf are quantum evidence, not wave-model evidence; the lesson's own cross-link says "atomic spectra can't be explained by classical waves". Proposed fix: list spectroscopy as a technique that relies on wave properties (dispersion by a grating) and move "discrete lines" to the quantum side.
  3. `measure-speed-of-light`: "light through a gap between the teeth ... to a mirror 8 km away". Fizeau's path was about 8.6 km (8633 m). Proposed fix: "about 8.6 km away".
  Checked and correct: Rømer's 1000 s and 3.0 × 10¹¹ m giving 3.0 × 10⁸ m s⁻¹, Fizeau's 3.13 × 10⁸ m s⁻¹, the 1983 definition, the lunar ranging and GPS descriptions, Q4's model answer.
- **Cause chain taught, in order:** (1) speed = distance / time, but light's times are tiny (1); (2) a huge distance gives a measurable delay: Io's eclipses (2); (3) a known rotation turns a tiny time into a measurable event or angle (3, 4); (4) fast electronics time a pulse directly (5); (5) precise measurements led to fixing c exactly and defining the metre from it (6); (6) so time-of-flight now measures distance (7).
- **Entry knowledge (route):** v01 (predicted c); Year 11 speed, reflection, wave speed; graph gradients.
- **Learner-visible vocabulary:** eclipse of Io (Io passing into Jupiter's shadow, so it disappears, 2); round trip (out to a mirror and back, 3); time of flight (the time a pulse takes to travel a path, 5); defined constant (a value fixed exactly by agreement, not measured, 6).
- **Legacy logic ported:** none.
- **New explainer motion:** **orbit stage** (Sun, Earth and Jupiter plates on coded orbits; Earth moves from near to far side; an amber light path from Io to Earth lengthens; an eclipse timer drifting late); **toothed-wheel stage** (wheel plate rotating at a set rate, an amber pulse passing a gap, travelling to a mirror plate and back, blocked by a tooth at the right rate; a zoom inset of one gap and the next tooth); **rotating-mirror stage** (coded schematic with two plane-mirror plates, the returned beam offset by a small angle); **time-of-flight stage** (laser, two sensors, oscilloscope trace with two pulses and a delay readout); **ranging stage** (Earth and Moon plates, a pulse out and back, a timer); `AlignedAlgebra`; `DataGraph` (delay against extra path); `Countdown`; `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the stage centre-left; working strips on the right; everything above the bottom 12%.
- **Author notes (not learner copy):**
  (a) Rømer (1676) reported the delay; the first numerical value of c from his data is usually credited to Huygens (about 2.2 × 10⁸ m s⁻¹, 1690). The narration says "his timing showed" the speed is finite and gives only the arithmetic. The 22-minute figure is the historical estimate for crossing the orbit's diameter; today's value is about 1000 s (499 s per astronomical unit). Science check to confirm wording.
  (b) Fizeau (1849): wheel with 720 teeth, Suresnes to Montmartre about 8633 m, first eclipse at about 12.6 turns per second, c ≈ 3.13 × 10⁸ m s⁻¹ (315 000 km s⁻¹ is also quoted from his paper's rounding). Source to cite in the physics check: H. Fizeau, Comptes rendus 29 (1849) 90. Time for one gap to be replaced by the next tooth: half of one tooth period, 1/(2Nf).
  (c) Foucault's 1862 value about 298 000 km s⁻¹ (2.98 × 10⁸ m s⁻¹); the narration says "close to three times ten to the eight".
  (d) Time-of-flight dataset is illustrative: extra path 30.0 m (mirror 15.0 m away), delay 101 ns gives 2.97 × 10⁸ m s⁻¹; the ideal delay is 100.07 ns. A typical school oscilloscope resolves a few nanoseconds, about 2 to 3 per cent here.
  (e) Lunar ranging: mean Earth to Moon distance about 384 400 km, round trip about 2.56 s; d = ct/2 = 3.84 × 10⁸ m with t = 2.56 s. GPS orbit altitude about 20 200 km; travel times about 0.07 s; 1 μs × c = 299.8 m.
  (f) The 1983 definition (17th CGPM): the metre is the length of the path travelled by light in a vacuum during 1/299 792 458 of a second. The 2019 SI revision keeps c fixed.
  (g) Pronunciations: "Rømer" (RUR-mer), "Io" (EYE-oh), "Fizeau" (fee-ZOH), "Foucault" (foo-KOH), "nanoseconds".
- **Open decisions for root:**
  - **1. Plates.** Revision 2: `y12p-jupiter-v1.png`, `y12p-toothed-wheel-v1.png` and `y12p-laser-module-v1.png` were delivered in brief 191 and inspected. Reused: `phys-y11-sun-v1.png`, `phys-y11-earth-v1.png`, `y12p-moon-v1.png`, `phys-y11-plane-mirror-v1.png`, `phys-y11-oscilloscope-v1.png`. Io is a coded dot (too small to paint usefully). New request: `y12p-light-sensor-v1.png` (see "Codex asset brief"), because the existing `phys-y11-light-sensor-head-v1.png` has anchor marks painted into the artwork (a red crosshair on the sensor face, a purple dot on the cable, green and blue lines along the base) and a wooden plank under it, so it cannot be used as delivered.
  - **2. Rømer attribution wording** (author note a) and Fizeau's published values (author note b) for the physics check.
  - **3. Optional beats** the learning review may cut: scene 4 (Foucault) to one sentence; scene 5's gradient sentence.
Main question: *Light crosses a room in ten nanoseconds. How can a time-and-distance measurement reveal the speed of light?*
Entry knowledge: v01's predicted c; speed = distance / time; reflection.
Stops after: Rømer, Fizeau, Foucault, a time-of-flight investigation, the 1983 definition, lunar ranging and GPS. No water result, spectra or relativity.
Handoff: v03, how different sources produce different spectral patterns.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings.

### 1. hook (a speed too fast to time)
> Maxwell predicted a speed for light. To check a speed, you need a distance and a time, because speed equals distance over **time**. The trouble is the time. Light crosses a room in about ten nanoseconds, far too fast for any stopwatch. So you either make the distance enormous, or you find a clever way to time something tiny. Make your **prediction**. Which came first, a measurement using planets, or a measurement on the ground? It was the **planets**, by about a hundred and seventy years.

Visual: opens on v01's final frame (see "Opening frame"); the chip "Next: how can a time-and-distance measurement reveal the speed of light?" becomes the heading. On "time" the chip "speed = d / t" enlarges into the equation strip "v = d / t". On "ten nanoseconds" the "3 m" bracket and "≈ 10 ns" timer pulse; a crossed grey chip "stopwatch (about 0.1 s at best)". On "enormous" the distance bar stretches off the right edge; on "something tiny" the timer zooms. On "prediction" a 3 s `Countdown` beside two chips, each carrying a painted thumbnail (about 200 px): "planets" with the Jupiter plate (`y12p-jupiter-v1.png`) and "on the ground" with the toothed wheel plate (`y12p-toothed-wheel-v1.png`). On "planets" the first chip ticks; navy hand tag "1676 versus 1849" and a navy pen ring round the ticked chip. Navy hand tag "far too fast to time by hand" beside the crossed stopwatch chip (with "ten nanoseconds").

### 2. a moon that runs late
> In 1676, the Danish astronomer Ole Rømer was timing Jupiter's moon Io. Io slips into Jupiter's shadow every forty-two and a half hours, as regular as a **clock**. But the eclipses came later and later as Earth moved away from Jupiter, and earlier as it came **closer**. Io wasn't misbehaving. The light simply had further to travel. With Earth on the far side of its orbit, the light crosses an extra distance, the orbit's diameter, about three times ten to the eleven **metres**. Today, that delay is measured at about a thousand seconds. Distance over time gives three times ten to the eight metres per **second**. Rømer's own delay was too long, about twenty-two minutes, which gives about two point three times ten to the eight. But his timing showed that light's speed is **finite**.

Visual: board change to the orbit stage: the Sun plate (`phys-y11-sun-v1.png`, reused) at the centre, the Earth plate (`phys-y11-earth-v1.png`, reused, small) on a coded orbit, the Jupiter plate (`y12p-jupiter-v1.png`, new) far to the right with Io as a coded dot on a small orbit. On "Io slips into Jupiter's shadow" a grey shadow cone behind Jupiter; Io enters it and vanishes. On "clock" a coded eclipse timetable chip "every 42.5 h". On "later and later" Earth slides round to the far side; the timetable shows "observed: late". On "closer" Earth returns; "observed: early". On "further to travel" two amber light paths from Io to Earth, near side and far side. On "metres" an orange bracket across the orbit "extra distance = orbit diameter ≈ 3.0 × 10¹¹ m". On "about a thousand seconds" a navy timer "delay ≈ 1000 s". On "second" working (52 px): "v = d / t = (3.0 × 10¹¹) / 1000 = 3.0 × 10⁸ m s⁻¹" (orange), framed (60 px); a red crossed chip "orbit radius: (1.5 × 10¹¹) / 1000 = 1.5 × 10⁸ m s⁻¹" (caption "the extra path is the diameter"). On "twenty-two minutes" a grey chip "Rømer's delay ≈ 22 min = 1320 s → 2.3 × 10⁸ m s⁻¹". On "finite" a tick chip "light takes time to travel: speed finite". Hand-font tags: navy "late" and "early" on the timetable rows, orange "extra trip across the orbit" on the bracket; orange pen arrow along the far-side light path.

### 3. a spinning wheel
> In 1849, Hippolyte Fizeau brought the measurement down to Earth. Light passes through a gap between the teeth of a spinning wheel, travels to a mirror eight point six kilometres away, and comes back through the wheel. Spin slowly, and the light returns through the same **gap**. Spin faster, and by the time the light gets back, the gap has moved on and a tooth blocks **it**. Moving from a gap to the next tooth takes half of one tooth spacing. His wheel had seven hundred and twenty teeth, and the light was first blocked at twelve point six turns per **second**. That makes the round-trip time five point five one times ten to the minus five seconds. Twice the distance, over that time, gives **three point one three times ten to the eight** metres per second.

Visual: board change to the toothed-wheel stage: the toothed wheel plate (`y12p-toothed-wheel-v1.png`, new) at the left, the plane mirror plate (`phys-y11-plane-mirror-v1.png`, reused) at the far right on a coded hilltop line, an orange bracket "d = 8633 m (one way)". On "Light passes through a gap" an amber pulse leaves through a gap, travels right, reflects and returns. On "gap" (spinning slowly) the returning pulse passes the same gap; the wheel-speed slider (live control) sits under the wheel with live readouts (52 px) "f = 6.3 turns per second", "gap → tooth = 110 μs" (rose) and "round trip = 55 μs" (navy, fixed); rose hand tag "gap still open". On "it" the slider runs up to "f = 12.6 turns per second"; the gap-to-tooth readout falls to "55 μs", equal to the round trip; the returning pulse meets a tooth and stops; red hand tag "blocked" and a rose pen ring round the two equal readouts. On "half of one tooth spacing" a zoom inset of one gap and the next tooth, a navy arc "gap → tooth = ½ of a tooth spacing". Working strip at the right: task "Find c from Fizeau's wheel." Equation "c = 2d / t". Givens grouped: "N = 720 teeth", "f = 12.6 turns per second", "d = 8633 m". On "second" the givens box highlights. On "five point five one times ten to the minus five seconds" stage 1 (52 px): "t = 1 / (2Nf) = 1 / (2 × 720 × 12.6) = 5.51 × 10⁻⁵ s". On "three point one three times ten to the eight" stage 2 (52 px): "c = 2d / t = (2 × 8633) / (5.51 × 10⁻⁵) = 3.13 × 10⁸ m s⁻¹" (orange), framed (60 px); a red crossed chip "t = 1 / (Nf), a whole tooth period: c = 1.57 × 10⁸ m s⁻¹" (caption "gap to tooth is half a spacing"). Orange hand tag "there and back: 2d" on the bracket.

### 4. a spinning mirror
> A few years later, Léon Foucault replaced the wheel with a spinning mirror. The light bounces off the spinning mirror to a fixed mirror, and back. In that tiny round-trip time, the spinning mirror turns through a small **angle**, so the returning beam comes back slightly off its original **path**. From that angle, the spin rate and the distance, he found a speed close to three times ten to the eight metres per second. His apparatus was compact enough to put a tube of water in the beam, which matters in a later **video**.

Visual: board change to the rotating-mirror stage: a coded source at the left, a plane mirror plate (reused) on a coded spindle (the spinning mirror), a second plane mirror plate far right (fixed). On "spinning mirror to a fixed mirror" an amber beam out and back. On "angle" the spinning mirror rotates slightly between the outgoing and returning beams; a navy angle mark. On "path" the returning beam lands slightly to one side of the source; a grey tag "deflection". On "close to three times ten to the eight" a grey chip "Foucault (1862): ≈ 2.98 × 10⁸ m s⁻¹". On "video" a small grey chip "water tube: see v05". Hand-font tags: navy "turned while the light was away" on the angle mark, amber "comes back off target" on the returning beam; navy pen arc on the angle.

### 5. timing a pulse today
> Today, you can time light directly. A school version uses a laser that sends short pulses, and two fast light sensors on an oscilloscope. One sensor sees the pulse leave. The other sees it after an extra trip to a mirror fifteen metres away and **back**. That's thirty metres of extra path. The oscilloscope shows the two pulses, about a hundred nanoseconds **apart**. Say you measure a hundred and one nanoseconds. Thirty metres over a hundred and one nanoseconds is **two point nine seven times ten to the eight** metres per second. Change the extra path, measure each delay, and the gradient of the graph of path against delay is the speed of **light**.

Visual: board change to the time-of-flight stage: the laser module plate (`y12p-laser-module-v1.png`, delivered in brief 191) at the left, a light sensor plate (`y12p-light-sensor-v1.png`, new request; Revision 2) beside it, a second copy at the right, a plane mirror plate (reused) far right with an orange bracket "15.0 m"; the oscilloscope plate (`phys-y11-oscilloscope-v1.png`, reused) below with a coded trace. On "two fast light sensors" leads from both sensors to the oscilloscope. On "back" an amber pulse travels out and back; tag "extra path = 2 × 15.0 = 30.0 m". On "apart" two pulses appear on the coded trace with a navy bracket "Δt". On "a hundred and one nanoseconds" a grey tag "illustrative reading: Δt = 101 ns". On "two point nine seven times ten to the eight" working (52 px): "v = 30.0 / (101 × 10⁻⁹) = 2.97 × 10⁸ m s⁻¹" (orange), framed (60 px); a red crossed chip "30.0 / 101 = 0.297 m s⁻¹" (caption "ns → × 10⁻⁹ s"). Navy hand tag "101 ns" on the Δt bracket and a navy pen ring round the two pulses. On "light" a small `DataGraph`: x "delay (ns)", y "extra path (m)", five illustrative points on a straight line through the origin; tag "gradient = speed".

### 6. the twist: c is now exact
> Here's the twist. These measurements became so precise that, in 1983, scientists turned the relationship around. The metre is now defined as the distance light travels in a vacuum in one, two hundred and ninety-nine million, seven hundred and ninety-two thousand, four hundred and fifty-eighth of a **second**. So the speed of light in a vacuum is exactly two hundred and ninety-nine million, seven hundred and ninety-two thousand, four hundred and fifty-eight metres per second, by **definition**. Rømer's, Fizeau's and Foucault's numbers were measured estimates, with uncertainty. Today's c has no uncertainty at **all**.

Visual: board change: a navy box "1983: the metre = distance light travels in a vacuum in 1/299 792 458 s". On "second" the box completes. On "definition" a second navy box "c = 299 792 458 m s⁻¹ (exact, defined)". On "measured estimates" grey chips in a column: "Rømer data: ≈ 2.3 × 10⁸ (22 min)", "Fizeau: 3.13 × 10⁸", "Foucault: ≈ 2.98 × 10⁸", each with a small "±" tag. On "all" a chip "defined c: no uncertainty" beside the navy box; the "±" tags stay on the grey chips only. Hand-font tags: grey "measured: ±" over the column, navy "fixed by agreement" on the box; navy pen double-arrow between "c" and "the metre" (each defined from the other's use).

### 7. now time tells you distance
> So the same time-and-distance measurement now runs backwards. Fix c, measure a time, and you get a distance. Reflectors placed on the Moon send back laser pulses from Earth. A pulse returns about two point five six seconds after it **leaves**. The light went there and back, so the distance is c times the time, divided by two, about **three point eight four times ten to the eight metres**. Your phone's GPS does the same with satellite signals. A timing error of just one microsecond makes a distance error of about three hundred **metres**.

Visual: board change to the ranging stage: the Earth plate (reused) at the left, the Moon plate (`y12p-moon-v1.png`, reused from M5) at the right, a small coded reflector square on the Moon (no astronauts, no figures). On "Reflectors placed on the Moon" the reflector square highlights. On "leaves" an amber pulse travels to the Moon and back; navy timer "t = 2.56 s (round trip)". On "three point eight four times ten to the eight metres" working (52 px): "d = ct / 2 = (2.998 × 10⁸ × 2.56) / 2 = 3.84 × 10⁸ m" (orange), framed (60 px); a red crossed chip "d = ct = 7.67 × 10⁸ m" (caption "there and back: halve it"). On "GPS" a small coded satellite icon with a signal arc to a coded ground dot; chip "distance = c × travel time". On "metres" a chip "1 μs × c ≈ 300 m of distance (range) error"; navy hand tag "timing is everything" and a navy pen ring round "1 μs".

### 8. a way to remember
> Here's a way to remember the switch. Then, measure distance and time, and find c. Now, fix c, time it, and find the **distance**.

Visual: board clears to two rows. On "Then, measure distance and time" the top row: "d, t → c" with Fizeau's wheel icon (small). On "distance" the bottom row: "c (fixed), t → d" with the Moon icon; the handwritten line writes above, inside a framed memory card (dark-ink frame, 44 px hand lettering): "Then: measure d and t, find c. Now: fix c, time it, find d." Hold about 2 seconds.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. A toothed wheel with five hundred teeth sends light to a mirror seven point five kilometres away. The returning light is first blocked when the wheel turns at twenty turns per second. Calculate the speed of light. Pause here to answer.

Visual: `QuestionCard` (subject "Physics") arrives with its full text and picture in one move (question text 36 px), worded as printed: "In a toothed-wheel experiment, light passes through a gap in a wheel with 500 teeth, travels to a mirror 7.50 km away and returns. The returning light is first blocked when the wheel rotates at 20.0 revolutions per second. Calculate the speed of light from these data. (3 marks)". Picture: the toothed wheel plate thumbnail (about 220 px) with a coded beam to a distant mirror and back and a "7.50 km" bracket. The full question stays on screen. Countdown ring full from "Pause here to answer.", then 10 seconds. Nothing answer-bearing.

### 10. feedback 1 (brief)
> Gap to tooth is half a tooth spacing, so the time is one over two times five hundred times twenty, which is five times ten to the minus five **seconds**. The light travels fifteen kilometres there and back. Fifteen thousand metres over that time gives **three times ten to the eight** metres per second. The classic slip is using only the one-way distance, which gives half the right **answer**.

Visual: card shrinks to the top; "500 teeth", "7.50 km" and "first blocked" underline. A givens strip (36 px): "N = 500 teeth", rose "f = 20.0 turns per second", orange "d = 7.50 km = 7500 m (one way)". The wheel picture sits at the right (300 px); the returning pulse meets a tooth. On "seconds" "t = 1 / (2 × 500 × 20.0) = 5.00 × 10⁻⁵ s" (52 px). On "three times ten to the eight" "c = 2d / t = 15 000 / (5.00 × 10⁻⁵) = 3.00 × 10⁸ m s⁻¹" (52 px), framed. On "answer" a chip "c = 7500 / (5.00 × 10⁻⁵) = 1.50 × 10⁸ m s⁻¹" fades in and is crossed (caption "the light goes there and back: 2d"). Hold about 1 second.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. A laser pulse sent to a reflector on the Moon returns two point five one seconds later. Calculate the distance to the reflector, and explain why this is a measurement of distance, not of the speed of light. Pause here to answer.

Visual: `QuestionCard` arrives with its full text and picture in one move (question text 36 px), worded as printed: "A laser pulse is sent from an observatory to a reflector on the Moon and is detected back at the observatory 2.51 s after it was sent. (a) Calculate the distance from the observatory to the reflector. (b) Explain why this is a measurement of distance rather than a measurement of the speed of light. (3 marks)". Picture: the Earth and Moon plate thumbnails (about 180 px each) with a coded pulse path, no figures. The full question stays on screen. Countdown ring full from "Pause here to answer.", then 10 seconds. Nothing answer-bearing.

### 12. feedback 2 (brief)
> The pulse goes there and back, so the distance is c times two point five one, divided by two, about **three point seven six times ten to the eight metres**. Since 1983, the speed of light is fixed exactly, by definition, so timing the trip can only tell you the **distance**. The slip is forgetting to halve the time, which doubles the **distance**.

Visual: card shrinks to the top; "2.51 s" and "distance rather than" underline. A givens strip (36 px): navy "t = 2.51 s (round trip)", navy "c = 299 792 458 m s⁻¹ (exact)". The Earth and Moon picture sits at the right (300 px); a pulse runs out and back. On "three point seven six times ten to the eight metres" "(a) d = ct / 2 = (2.998 × 10⁸ × 2.51) / 2 = 3.76 × 10⁸ m" (52 px), framed. On "can only tell you the distance" "(b) c = 299 792 458 m s⁻¹ exactly (metre defined from c) → the measured time gives d" (44 px), framed. On "doubles the distance" a chip "d = ct = 7.52 × 10⁸ m" fades in and is crossed (caption "round trip: halve it"). Hold about 1 second.

### 13. handoff
> So a time-and-distance measurement revealed the speed of light: first with planets, then with spinning wheels and mirrors, now with electronics, until c became exact. But light isn't only a signal with a speed. Spread it out into its colours, and it carries a message about whatever made it. A hot filament, a glowing gas and sunlight each give a different pattern. How do different sources produce different spectral **patterns**?

Visual: board clears (camera change). On "first with planets" small icons in a row: orbit, wheel, oscilloscope, navy box "c exact". On "Spread it out into its colours" an amber beam enters a coded spectroscope slit and fans into a blank strip; amber hand tag "a message in the colours" and an amber pen arrow along the fan, both fading before the final hold so the final frame is unchanged. On "A hot filament, a glowing gas and sunlight" three source plates appear in a column at the left: the filament lamp (`phys-y11-filament-lamp-v1.png`, reused; true alpha confirmed in brief 191), a hydrogen discharge tube (`y12p-discharge-tube-v1.png`, delivered in brief 191), and the Sun plate (reused); each feeds a coded spectroscope slit and a blank spectrum strip with a "?". On "patterns" a chip "Next: how do different sources produce different spectral patterns?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 14. key notes (quiet, hold about 45 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Rømer: Io's eclipses ran late, so light's speed is finite.
2. Fizeau: gap to tooth t = 1/(2Nf); c = 2d/t.
3. Time of flight: speed = extra path ÷ delay.
4. Since 1983: c = 299 792 458 m s⁻¹ exactly.
5. Now time gives distance: d = ct/2 for a round trip.

Memory aid (framed card under the notes, hand lettering as in scene 8): *Then: measure d and t, find c. Now: fix c, time it, find d.* Notes in the role colours, 34 px; about 230 characters of bullet text; no paragraphs.

## Teaching checks

- **Does it explain causes?** Why the eclipses drift: extra travel distance (2). Why the wheel blocks light: the gap moves on during the round trip (3). Why the mirror deflects the beam: it turns during the round trip (4). Why c now has no uncertainty: it is defined (6). Why ranging measures distance (7).
- **Misconceptions addressed:** using one-way distance for a round trip (crossed in 10); forgetting to halve (crossed in 7 and 12); orbit radius for diameter (crossed in 2); a whole tooth period (crossed in 3); nanoseconds not converted (crossed in 5); "the speed of light is still being measured more precisely" (6); light's speed is infinite (2).
- **One idea at a time:** problem (1), astronomy (2), wheel (3), mirror (4), electronics (5), definition (6), reversed use (7).
- **Video makes it easier:** the eclipse timetable drifting as Earth moves (2); the returning pulse hitting a tooth (3); the oscilloscope's two pulses (5); grey "±" chips against the navy exact box (6).
- **Response opportunity:** one prediction (3 s) and two unseen tasks, 10 s each; nothing answer-bearing. One crossed mistake each; feedback about 20 s each.
- **Avoided double teaching:** v01's c recalled; speed = d/t recalled.
- **Syllabus coverage:** `P7-IQ1-03` historical methods (2 to 4), contemporary methods (5, 7), and the current relationship to time and distance (6, 7).
- **Out of scope by design:** Foucault's water result (v05), Michelson's later measurements, relativity, spectra.

## Practice questions and model answers

**Attempt 1 (scene 9; original wording, 3 marks).** "In a toothed-wheel experiment, light passes through a gap in a wheel with 500 teeth, travels to a mirror 7.50 km away and returns. The returning light is first blocked when the wheel rotates at 20.0 revolutions per second. Calculate the speed of light from these data."
Model answer: The light is first blocked when, during the round trip, the wheel turns from a gap to the next tooth, half of one tooth spacing: t = 1/(2Nf) = 1/(2 × 500 × 20.0) = 5.00 × 10⁻⁵ s (1 mark). The light travels 2d = 1.50 × 10⁴ m (1 mark). c = 2d/t = (1.50 × 10⁴) / (5.00 × 10⁻⁵) = 3.00 × 10⁸ m s⁻¹ (1 mark). Classic mistake (crossed): using the one-way distance (1.50 × 10⁸ m s⁻¹).

**Attempt 2 (scene 11; original wording, 3 marks).** "A laser pulse is sent from an observatory to a reflector on the Moon and is detected back at the observatory 2.51 s after it was sent. (a) Calculate the distance from the observatory to the reflector. (b) Explain why this is a measurement of distance rather than a measurement of the speed of light."
Model answer: (a) d = ct/2 = 2.998 × 10⁸ × 2.51 / 2 = 3.76 × 10⁸ m (2 marks; with c = 3.00 × 10⁸ m s⁻¹ the answer is 3.77 × 10⁸ m, also accepted). (b) Since 1983 the metre has been defined from a fixed, exact speed of light (299 792 458 m s⁻¹), so c cannot be measured to differ; a measured travel time therefore determines the distance (1 mark). Classic mistake (crossed): d = ct (7.52 × 10⁸ m).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Rømer (site) | 3.0 × 10¹¹ m / 1000 s = 3.0 × 10⁸ m s⁻¹; 22 min = 1320 s → 2.27 × 10⁸ ≈ 2.3 × 10⁸ m s⁻¹; Io period 42.5 h | 2, 6, 14 |
| Fizeau (author note b) | t = 1/(2 × 720 × 12.6) = 5.511 × 10⁻⁵ s; c = (2 × 8633) / (5.511 × 10⁻⁵) = 3.133 × 10⁸ ≈ 3.13 × 10⁸ m s⁻¹; 8633 m ≈ 8.6 km | 3, 6, 14 |
| Wheel slider (Revision 2) | 1 / (2 × 720 × 6.3) = 1.102 × 10⁻⁴ s ≈ 110 μs; at 12.6 turns per second 5.511 × 10⁻⁵ s ≈ 55 μs; round trip (2 × 8633) / (3.133 × 10⁸) = 5.511 × 10⁻⁵ s ≈ 55 μs | 3 |
| Scene slips (Revision 2) | (1.5 × 10¹¹) / 1000 = 1.5 × 10⁸ (radius, 2); (2 × 8633) / (1.102 × 10⁻⁴) = 1.566 × 10⁸ ≈ 1.57 × 10⁸ (whole tooth period, 3); 30.0 / 101 = 0.297 (ns not converted, 5); 2.998 × 10⁸ × 2.56 = 7.675 × 10⁸ ≈ 7.67 × 10⁸ m (not halved, 7) | 2, 3, 5, 7 |
| Foucault | ≈ 2.98 × 10⁸ m s⁻¹ (1862) | 4, 6 |
| Time of flight (illustrative) | 2 × 15.0 = 30.0 m; 30.0 / (101 × 10⁻⁹) = 2.970 × 10⁸ ≈ 2.97 × 10⁸ m s⁻¹; ideal delay 100.07 ns | 5 |
| Definition | c = 299 792 458 m s⁻¹ exactly; 1/299 792 458 s = 3.336 × 10⁻⁹ s | 6, 12 |
| Lunar ranging | 2.998 × 10⁸ × 2.56 / 2 = 3.837 × 10⁸ ≈ 3.84 × 10⁸ m | 7 |
| GPS | 1 × 10⁻⁶ × 2.998 × 10⁸ = 299.8 ≈ 300 m | 7 |
| A1 (original) | t = 1/(2 × 500 × 20.0) = 5.00 × 10⁻⁵ s; c = 15 000 / (5.00 × 10⁻⁵) = 3.00 × 10⁸; wrong 1.50 × 10⁸ | 9, 10 |
| A2 (original) | d = 2.998 × 10⁸ × 2.51 / 2 = 3.762 × 10⁸ ≈ 3.76 × 10⁸ m; wrong 7.52 × 10⁸ m | 11, 12 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov); Codex to re-check.

- 3.0e11 / 1000 = 3.0e8; 3.0e11 / 1320 = 2.273e8.
- 1/(2 × 720 × 12.6) = 5.5115e-5; 17266 / 5.5115e-5 = 3.1327e8.
- 30.0 / 101e-9 = 2.9703e8; 30 / 299792458 = 1.0007e-7 s.
- 299792458 × 2.56 / 2 = 3.8373e8; 2 × 384400e3 / 299792458 = 2.5644 s.
- 299792458 × 1e-6 = 299.79 m.
- Revision 2 (7 Nov, Python): 1/(2 × 720 × 6.3) = 1.10229e-4; (2 × 8633)/1.10229e-4 = 1.5664e8; 1.5e11/1000 = 1.5e8; 30.0/101 = 0.29703; 299792458 × 2.56 = 7.6747e8.
- 1/(2 × 500 × 20) = 5.0e-5; 15000 / 5.0e-5 = 3.0e8.
- 299792458 × 2.51 / 2 = 3.7624e8 (3.76 × 10⁸ m); with 3.00e8: 3.765e8, quoted 3.77 × 10⁸ m (accepted in the model answer).

## Memory aid check

- **"Then: measure d and t, find c. Now: fix c, time it, find d."** Meaning, as said in scene 8: historical methods measured a known distance and a travel time to calculate c; since 1983 c is defined, so a measured travel time gives a distance. Assumptions checked: "fix c" refers to the SI definition in a vacuum (light in air is about 0.03 per cent slower, which ranging corrects for; not narrated); "time it" includes halving for a round trip, which the feedback states. It helps a new case: A2. Introduced after the explanation (2 to 7).
- **Considered, not used:** "Light is too quick for clocks" (true but does not carry the reversal).

## Narration length estimate

Revision 2 count (7 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed; total = sum of scene strings, which replaces Revision 1's joined count of 6,134, a scene sum of 6,121): **6,123 characters**, 14 scenes. Characters per scene (1 to 14): 481, 768, 747, 514, 640, 611, 531, 125, 246, 383, 238, 337, 427, 75. At 13.3 characters per second the speech is about 460 s; add about 3 s for the prediction countdown, 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 40 s more of the quiet notes hold (45 s in all; about 69 s of holds and countdowns; the scene 3 slider runs inside its narration): **about 529 s**, inside the 5,500 to 7,000 character band and under the 570 s cap. Reserve trims: scene 4 to one sentence; scene 5's gradient sentence (open decision 3).

## Opening frame

v01's final frame (`phys-y12-m7-v01.md`, "Final frame"): an EM wave (blue E, slate B, navy direction) travelling right along a long coded distance bar "distance d = ?"; tag "E ↔ B"; chip "c = 1/√(μ₀ε₀) ≈ 3.00 × 10⁸ m s⁻¹ (predicted)"; bracket "3 m" with timer "≈ 10 ns"; timer "time t = ?"; chip "speed = d / t"; heading "How did Maxwell connect electricity and magnetism to light?"; chip "Next: how can a time-and-distance measurement reveal the speed of light?". Scene 1 turns the chip into the heading and enlarges "speed = d / t".

## Final frame

The last explained frame (end of scene 13, before the key-notes board): paper background; a small row of method icons at the top (orbit, toothed wheel, oscilloscope, navy box "c exact"); at the left a column of three source plates, top to bottom: the filament lamp, a hydrogen discharge tube, the Sun; from each an amber beam enters a coded spectroscope slit, and to the right of each slit a blank horizontal spectrum strip (380 to 750 nm outline) with a "?"; heading unchanged ("How can a time-and-distance measurement reveal the speed of light?"); a chip reads "Next: how do different sources produce different spectral patterns?". v03 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m7-v02` (route phys-y12-m7-v02). Suggested explainer folder `src/explainer/lessons/phys-y12-m7-v02` and build folder `docs/production/claude-pm/lessons/p-y12-m7-v02` (root to confirm).

In order (kebab-case; 14 scene headings, all `### N.`): hook, romer, fizeau, foucault, time-of-flight, defined-c, ranging, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 and key-notes (`hold`). Scene 1 is `explain` with a 3 s prediction countdown. `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: orbit stage, toothed-wheel stage, rotating-mirror stage, time-of-flight stage, ranging stage, `DataGraph`, `AlignedAlgebra`, `PenArrow`, `Countdown`, `CameraStage`. Transitions (`pickTransition`): 1 to 2 camera change (space); 2 to 3 clear change; 3 to 4 clear change; 4 to 5 clear change; 5 to 6 clear change; 6 to 7 camera change (Earth and Moon); 7 to 8 clear change; attempts and feedback card shrink to the top; 12 to 13 clear change; 13 to 14 fade to the notes board.

Holds: hook (3 s countdown), memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 45 s). Review evidence paths: `learning_review` = `checks/p-y12-m7-v02-learning-review.md`, `science_check` = `checks/p-y12-m7-v02-physics-check.md`.

## Assets

Have (scaled uniformly only, never stretched):
- `phys-y11-sun-v1.png`: 2, 13. `phys-y11-earth-v1.png`: 2, 7, 11. `phys-y11-plane-mirror-v1.png`: 3, 4 (two copies), 5. `phys-y11-oscilloscope-v1.png`: 5. `phys-y11-filament-lamp-v1.png`: 13 (true alpha confirmed in brief 191).
- Delivered in brief 191 (inspected): `y12p-jupiter-v1.png`: 1, 2. `y12p-toothed-wheel-v1.png`: 1, 3, 8, 9. `y12p-laser-module-v1.png`: 5. `y12p-discharge-tube-v1.png`: 13.
- **Checked, not usable as delivered:** `phys-y11-light-sensor-head-v1.png` (anchor marks painted into the artwork: red crosshair, purple dot, green and blue lines; a wooden plank under the base). Replaced by the new request below.
- `y12p-moon-v1.png` (shared with M5): 7, 11.
- **Checked, not used:** `phys-y11-galaxy-v1.png` (not needed), `phys-y11-digital-timer-v1.png` (a stopwatch-style timer would suggest hand timing; the timers are coded).

Need (new plates, Codex):
1. `y12p-light-sensor-v1.png`: 5 (two copies); shared with v08 (scene 8). Essential (Revision 2).

Coded: orbits, Io, shadow cone, light paths and pulses, timers, brackets, spindle, oscilloscope trace, graph, satellite icon, reflector square, spectroscope slit and blank strips, working strips, chips, attempt cards and diagrams, countdowns, key notes board.

## Codex asset brief (Year 12 Physics M7 v02: speed-of-light apparatus)

Revision 2: plates 1 to 3 below were delivered in brief 191 (native PNGs, anchors and QA in `assets/brief191-manifest.json`) and are kept for the record. One new request, plate 4, follows the same rules.

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/phys-y12-m7-v02.md`, route entry phys-y12-m7-v02. Paint after the learning review, physics check and Codex error check pass and the owner gives the go-ahead. Save to `public/assets/physics/`. Every plate: transparent PNG with a true alpha channel and **clean edges with no coloured fringe or halo** (check on a black and a white background), ink and watercolour in the house style, matched to `phys-y11-earth-v1.png` and `phys-y11-optical-bench-v1.png` in line weight, palette and finish, at least 8 per cent clear margin, no text, labels, letters, numbers, scale bars, brand names, logos, people, hands, faces, backdrop, glow or ground shadow. Never stretch to fit; keep the native aspect ratio.

1. `y12p-jupiter-v1.png` (1200 × 1200 px): Jupiter as a full disc, banded cream, tan and rust cloud belts with the Great Red Spot visible, matching the Earth plate's finish. No moons painted (Io is coded). Codex reports the disc centre and radius in pixels.
2. `y12p-toothed-wheel-v1.png` (1200 × 1200 px): a flat metal toothed wheel seen face-on, about 60 evenly spaced rectangular teeth and gaps of equal width round the rim (the count need not be 720; the narration's numbers are on the working strip), on a short central axle with a small pulley. Codex reports the wheel centre, the rim radius and the angular width of one tooth.
3. `y12p-laser-module-v1.png` (1400 × 700 px): a school laboratory laser module seen side-on: a rectangular metal body with a round aperture at the right end, mounted on a short post in a bench carrier like `phys-y11-screen-carrier-v1.png`'s base. No beam painted, no warning text. Codex reports the aperture centre in pixels and the carrier's base line so it can sit on `phys-y11-optical-bench-v1.png`.

4. `y12p-light-sensor-v1.png` (new, Revision 2; about 1100 × 1400 px): a school fast light sensor (a round sensor head with a dark circular window facing left, on a short post) mounted in the same bench carrier as `y12p-slide-holder-v1.png` (same carrier base, same scale), a cable leaving the back of the head and curling down out of frame at the right. No anchor marks, crosshairs, coloured dots or guide lines anywhere in the artwork, no plank or bench under it, no text or brand. Codex reports the window centre and the carrier's foot baseline so it shares the bench with the laser and slide holder (see `assets/brief191-qa/bench-fit.json`).

Report inspection on the paper background and the dark board background at about 400 px wide; confirm no figure appears. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/phys-y12-m7-v02-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the physics and history of every learner-visible claim: Io's eclipse drift and its cause; the orbit-diameter distance and 1000 s; Rømer's 22 minutes; Fizeau's values (author note b) and the half-tooth-spacing time; Foucault's method and value; the time-of-flight method; the 1983 definition; lunar ranging; the GPS microsecond figure.
3. Confirm the time-of-flight dataset is labelled illustrative.
4. Confirm the memory aid's assumptions.
5. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
6. Confirm both attempt cards are original, carry every condition and show nothing answer-bearing.
7. Confirm the syllabus quote matches the ledger exactly and is labelled 2017.
8. Confirm no person, hand, face or body outline is drawn or requested.
9. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
10. Confirm the narration character count and per-scene counts by script with the build parser rules.
11. Log the three site notes in `site-corrections-phys-y12.md`.

## YouTube metadata (draft)

Title: How Do You Measure the Speed of Light? From Io to Lasers | HSC Physics Module 7

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module7/lesson10.sa.html

Light crosses a room in ten nanoseconds. See how Rømer used Jupiter's moon Io, how Fizeau timed light with a spinning toothed wheel, how Foucault used a spinning mirror, how a school time-of-flight experiment works today, and why, since 1983, the speed of light is exact and timing light now measures distance. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 7: The Nature of Light.
Syllabus content (NSW Physics Stage 6, 2017):
"conduct investigations of historical and contemporary methods used to determine the speed of light and its current relationship to the measurement of time and distance (ACSPH082)"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: how Maxwell connected electricity and magnetism to light. Next: how different sources produce different spectral patterns.

#HSCPhysics #Physics #SpeedOfLight #HSCScience

## Review notes

- Revision 2 (7 Nov): brief 191 learning review and science check resolved (see "Revision 2"); needs the Codex error check before plates and voicing. Revision 1 note follows.
- Revision 1 has had no independent review. Next: student learning review (trace from v01; check that "gap to tooth is half a tooth spacing" is understood at speed; that the oscilloscope delay reads clearly; that the 1983 reversal lands without confusion about whether c is still "measured"; that the attempt cards give nothing away), then the physics check and the Codex error check.
- The drifting eclipse timetable, the blocked returning pulse, the oscilloscope's two pulses and the grey "±" chips beside the exact navy box carry the explanation; judge them at playback speed in the voiced preview.

## Revision 2 (7 Nov 2026)

Brief 191 findings (`checks/p-y12-m7-v02-learning-review.md`, `checks/p-y12-m7-v02-science-check.md`): 0 blockers, 3 should fix, 0 optional.
- **Should fix, scenes 3, 5 and 10 (ungrouped denominators).** Resolved: "c = 2d / t = (2 × 8633) / (5.51 × 10⁻⁵)", "v = 30.0 / (101 × 10⁻⁹)", "c = 15 000 / (5.00 × 10⁻⁵)" and the crossed "7500 / (5.00 × 10⁻⁵)"; the same grouping in the A1 model answer and "Numbers used". No speech change.
- **Should fix, scene 7 (GPS).** Resolved: the narration now says "A timing error of just one microsecond makes a distance error of about three hundred metres" (was "shifts your position"); the chip reads "1 μs × c ≈ 300 m of distance (range) error"; the Decisions bullet matches. Position also depends on satellite geometry and the receiver's clock fit, which stays an author-level point (no longer GPS explanation is added). Scene 7 narration +2 characters.
- **Should fix, scene 12 (feedback cues).** Resolved: the Visual now quotes the full phrases "can only tell you the distance" (part (b), the second "distance") and "doubles the distance" (the crossed slip, the third), so neither fires early on the first "distance". No speech change.

Visual upgrade (to `../maths-visual-standard.md` and the build gate):
- Decisions gain "Colour key (Revision 2)", "Type sizes", "Anchor", "Simulation", "Stage changes" and "Question cards".
- Plates in scene 1: the delivered Jupiter and toothed wheel plates (brief 191, inspected) sit on the two prediction chips. Jupiter, the wheel, the laser module and the discharge tube are now delivered (open decision 1 updated).
- Live control: scene 3's wheel-speed slider (6.3 to 12.6 turns per second) with live gap-to-tooth time (110 μs to 55 μs) against the fixed 55 μs round trip, so students see why the light is blocked exactly when the two match (Python).
- Hand tags and a pen mark in role colours in every teaching scene ("1676 versus 1849", "far too fast to time by hand", "late", "early", "extra trip across the orbit", "gap still open", "blocked", "there and back: 2d", "turned while the light was away", "comes back off target", "101 ns", "measured: ±", "fixed by agreement", "timing is everything", "a message in the colours"; pen rings, arcs and arrows on the ticked chip, the far-side path, the equal readouts, the mirror angle, the two pulses, the c-and-metre link and "1 μs").
- Framed answers: 3.0 × 10⁸ (2), 3.13 × 10⁸ (3), 2.97 × 10⁸ (5), 3.84 × 10⁸ m (7), and every feedback result. New crossed slips: orbit radius for diameter (2), a whole tooth period (3), nanoseconds not converted (5), d = ct not halved (7).
- Question cards arrive with full text and a picture (wheel thumbnail; Earth and Moon thumbnails); the answer side has a givens strip and the picture showing the answer.
- Scene 8 and the notes: framed memory card; key notes cut from six long items (about 640 characters) to five short bullets (about 230 characters); quiet notes hold 60 s to 45 s.
- Type sizes stated; colour roles fixed.

New plate requests: `y12p-light-sensor-v1.png` (scene 5, shared with v08), because the existing sensor-head plate has anchor marks painted into it (inspected 7 Nov). Never substitute the marked plate or a coded sensor.

Joins: the opening is v01's final frame (unchanged in v01 Revision 2). The final frame (scene 13) is unchanged apart from the plate status notes (the new handoff tag and pen arrow fade before the hold), so the v03 join holds.

Counts: 6,134 (joined; scene sum 6,121) to 6,123 characters (scene sum); about 545 s to about 529 s.
