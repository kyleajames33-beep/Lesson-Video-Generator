# Year 12 Physics M7 V14: Length contraction. Why can a moving distance be shorter without an object being crushed? (design)

Status: Revision 2 (7 Nov 2026): brief 191 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 6,423 characters, 17 scenes, about 557 s, counted by script with the build parser rules (total = sum of scene strings; see "Narration length estimate"). Opens on v13's final frame.

Scope: fourteenth video of Year 12 Physics Module 7 (The Nature of Light, Physics Stage 6, 2017 syllabus), inquiry question "How does the behaviour of light affect concepts of time, space and matter?". Templates as `phys-y12-m6-v13.md`; `math-a12-d10.md` for the calculation layout. No pre-design pack exists; the pack work is done here (2017 wording from the ledger, site values kept, every number recalculated in Python, original attempts, asset reuse). Site lesson read in full (6 Nov, read-only, through the brief 168 text extract `work/brief168/module7-lesson13.sa.txt`, hash checked against the live file): orient and predict (100 m ship at 0.8c, 80 m tunnel, warm-up, intentions, vocabulary: proper length, contracted length, length contraction, Lorentz factor, barn-ladder paradox), "measure-a-contracted-length" (timing derivation, perpendicular dimensions, Figure 1, Stop and Check 2.0 m rod, MC 5.0 m rod), "explain-the-muon-two-ways" (Earth frame and muon frame, Figure 2, Stop and Check 300 m and 180 m, MC 150 m), "resolve-the-barn-and-ladder" (worked 10 m barn, 15 m ladder at 0.8c, Figure 3), misconceptions (four traps, strategy, square ship Stop and Check), apply and consolidate (Activities 1 and 2, "Analyse 7 marks" muons in two frames at 0.998c, "Explain 6 marks" barn and ladder), practice Q1 and Q2, reflect (Rossi muons at 0.998c, 10 km, 625 m): `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson13.sa.html`, SHA256 `5430c9475f8f773e9ed668c6ea0533c38cfc689e14ff3f979a28b27c9a323937` (recomputed 6 Nov; matches the route). Route entry: `phys-y12-m7-v14`, sections `measure-a-contracted-length`, `explain-the-muon-two-ways`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Define proper length, simultaneity of endpoint measurement and L=L0/gamma; reconcile muon survival in two frames. Stop before paradoxes." Next: "phys-y12-m7-v15: Why does ever more momentum fail to push mass to light speed?"

Owner rules applied: 2017 syllabus quoted exactly; no people, hands, faces or body outlines (the site's "two Earth observers" become two marker beacons and clocks; the captain becomes the ship's own rulers); the spacecraft is a painted plate and its contraction is drawn by a coded outline and ruler overlay, never by stretching or squashing the plate (build note); rulers, markers, rings, the atmosphere column and calculation strips are coded, HSC style; Earth, the spacecraft and the space station are painted plates (one new, two reused or shared), scaled uniformly; every number recalculated in Python; data-sheet symbols l = l₀√(1 − v²/c²); a 3 s prediction; "Pause here to answer." with a 10 s countdown; brief feedback with one crossed-out mistake; original attempts; Australian spelling; no em dashes. Recalled, not re-taught: v13 (time dilation, γ, proper time, the muons at 0.995c, the 12 ly trip), v12 (postulates, frames), Year 11 (s = vt).

Syllabus content (Physics Stage 6 (2017), Module 7; ledger id `P7-IQ4-02`), quoted from the route JSON `syllabusActions`:

- `P7-IQ4-02`: "investigate the evidence, from Einstein’s thought experiments and subsequent experimental validation, for time dilation t=(t_(0))/(sqrt((1- (v^(2))/(c^(2))))) and length contraction l=l_(0)sqrt((1-(v^(2))/(c^(2)))), and analyse quantitatively situations in which these are observed, for example:" "observations of cosmic-origin muons at the Earth’s surface", "atomic clocks (Hafele–Keating experiment)", "evidence from particle accelerators", "evidence from cosmological studies"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 60)

**Boundary:** starts on v13's final frame (Earth and the star, "12 ly (Earth frame)", "7.2 ly (ship frame?)", clocks 15 and 9 years). Teaches: length contraction l = l₀√(1 − v²/c²) = l₀/γ; proper length (measured in the object's rest frame; the longest); the timing derivation from time dilation (marker past a ship); measuring a moving length needs both ends marked at the same time in your frame, and frames disagree about which distant events are simultaneous; nothing is crushed (no force; full length on board; reciprocal), yet the contraction is real in that frame; only lengths along the motion contract (two-ring argument); the 100 m ship at 0.8c (60 m, height unchanged); the speed for 80 m (0.6c); the muons in the muon's frame (1.5 km, 5.0 μs, 2.3 lifetimes, same count); never apply both effects in one frame. Stops before the barn-ladder and twin paradoxes (route "stop before paradoxes"), and before momentum (v15).

## Decisions

- **Learner question (route wording kept).** "Why can a moving distance be shorter without an object being crushed?" The answer, built in order: both frames agree on the relative speed but not on elapsed time, so they must disagree on distance by the same γ (1 to 3); length is measured by marking both ends at the same time, and "at the same time" depends on the frame (4); no force acts and each frame measures its own objects at full length, reciprocally, so nothing is squashed, yet each frame's measurement is real (5).
- **Hook (v13's handoff, made into the question).** 12 ly against 7.2 ly; 12/1.67 = 7.2; 3 s prediction: "Is the space between Earth and the star squashed?" chips "squashed by a force", "measured differently in each frame". The site's 100 m ship hook becomes worked example 1 (7).
- **Equation (data sheet l = l₀√(1 − v²/c²); route "L=L0/gamma").** Both forms on screen; the data-sheet symbols (lower-case l) are used throughout, with "= l₀/γ" beside.
- **Derivation (site "measure-a-contracted-length").** Kept and simplified: a marker beacon (coded) in the station frame times the ship's nose and tail passing it, at one place, so the beacon's clock measures proper time t₀; station-frame length l = vt₀. In the ship's frame the beacon slides from nose to tail in t = γt₀, so l₀ = vγt₀. Dividing: l = l₀/γ. One stage on screen at a time.
- **Simultaneous endpoint measurement (route "simultaneity of endpoint measurement"; kit `m7-length`: "both lab endpoints measured simultaneously in the lab").** Plain statement plus a wrong-way demonstration (mark the nose, wait, mark the tail: wrong length). Relativity of simultaneity is stated in one sentence as the reason frames get different, correct answers; no barn, ladder or train-lightning example (route "stop before paradoxes").
- **Not crushed, but real (route question; site misconceptions 3 and 4).** No force, no strain, full length on board, reciprocal: "they can't both be squashed". Balanced with the site's misconception 4: "That doesn't make it fake... length depends on the frame, just as time does." The historical Lorentz-FitzGerald "compression by the aether wind" (v12 scene 7) is the contrast: that was a proposed physical squeezing; relativity's contraction is not (author note a).
- **Perpendicular lengths (site Figure 1 and misconception 3).** The two-ring argument (author note b), and the link back to v13's unchanged mirror separation d.
- **Worked examples (site predict values).** 100 m at 0.8c: 60 m; height unchanged; full length on board. Speed for 80 m: γ = 1.25, v = c√(1 − 1/γ²) = 0.6c (site "classic HSC-style calculation"). The site's "tunnel" becomes a space-station docking bay (one visual system).
- **Muons two ways (site "explain-the-muon-two-ways"; route "reconcile muon survival in two frames").** Earth frame (v13): 15 km, 22 μs. Muon frame: 15/10.0 = 1.50 km; 1.50 km / 0.995c = 5.02 μs = 2.28 lifetimes of 2.2 μs; same as Earth frame's 50.3 μs / 22.0 μs = 2.28. "Same survivors... detector counts" (site "Analyse 7 marks" step 5: "a count at a detector is frame-independent"). Revision 2 (brief 191 should fix): the Earth-frame sentence no longer says the muon "lives twenty two microseconds and makes it"; it says the mean lifetime stretches to 22 μs, so some last the whole 50 μs trip (15 km / 0.995c = 50.3 μs), consistent with v13's counter. Both columns' counter carries v13's label "ideal model: constant 0.995c, no energy loss" (brief 191 optional).
- **Who uses which effect (site "Analyse 7 marks" plan: "Applying both in the same frame is the classic error").** One scene (10). Revision 2 (brief 191 should fix): Revision 1's "Never use both in the same frame" was too broad (a frame can describe both the contraction of a moving object and the dilation of its moving clock). The rule taught is now "Keep every distance and time you combine from the same frame"; the crossed chip is the actual mistake, "1.5 km (muon frame) with 22 μs (Earth frame)".
- **Memory aid (scene 11): "Proper length is the longest. Proper time is the shortest."** See "Memory aid check".
- **Attempts (original, HSC style).** A1 (3 marks): a ship 150 m long and 20 m wide at rest passes a station at 0.90c along its length: 65 m long, 20 m wide. Crossed: 150 × 2.29 = 344 m. A2 (3 marks): muons made 10 km up at 0.998c (site reflect values), in the muon's frame: atmosphere 632 m, crossing time 2.1 μs, compare with 2.2 μs. Crossed: "the muon's lifetime is dilated to 35 μs in its own frame".
- **Significant figures.** γ to three figures; lengths to two or three figures.
- **Handoff (route next).** Scene 16: the γ graph with its asymptote; the spacecraft with its exhaust layer on and a growing momentum arrow; chip "Next: why does ever more momentum fail to push mass to light speed?". See "Final frame".
- **Colour key (root decision 1):** Earth and station frame ink; ship frame teal; proper lengths teal; contracted lengths ink; γ violet; muons slate.
- **Colour key (Revision 2, fixed for every scene).** As above; velocities orange arrows; momentum (handoff) amber; framed answers in a dark-ink box; crossed chips and their hand tags red. Hand-font tags take the colour of the quantity or frame they mark.
- **Type sizes (Revision 2, 1080p).** Current working line at least 44 px (scenes 3, 7, 8, 9 and the feedback rows 52 px; framed answers 56 px); live readouts (scene 7 speed slider: v/c, γ, l; the on-board ruler) about 52 px; ruler and bracket labels 36 to 40 px; badges 30 to 36 px; hand-font tags at least 30 px; question text 36 px; key notes 34 px; nothing a student must read below 26 px. All text above the bottom 12% of the frame.
- **Anchor (Revision 2).** v13's final frame is the anchor: the painted Earth and spacecraft with the 12 ly and 7.2 ly brackets. The painted space station `y12p-space-station-v1.png` (brief 191, inspected 7 Nov: a straight truss deck along its top, modules below, solar wings) carries scenes 3 to 5, 7, 8 and the A1 card; the ship is never scaled non-uniformly (build note).
- **Simulation (Revision 2).** The core live control is scene 7's speed slider on the passing ship: v/c steps 0, 0.5, 0.8, 0.95 and 0.99 while the ink outline over the unscaled plate shortens and live readouts update (γ = 1.00, 1.15, 1.67, 3.20, 7.09; l = 100, 86.6, 60.0, 31.2, 14.1 m); the height bracket and the teal on-board ruler (100 m) stay fixed. (0.6c and 0.9c are kept off it because scene 8 and A1 ask for them.) The frame swap (3 to 5) and the two-frame muon columns (9, 10) are the other live elements.
- **Question cards (Revision 2).** Each card arrives with its full text and a picture in one move (A1: the painted spacecraft above the station deck with "150 m" and "20 m" brackets; A2: a coded atmosphere column with a muon dot and "10 km"). On the answer side the card shrinks to the top, a givens strip lists the data, the picture carries the answer (the ink outline at 65 m with the width bracket; the contracted column in the muon frame), results are framed and one classic slip is crossed.
- **Build note (owner: never stretch plates).** The contracted ship is drawn as a coded teal outline and ruler of length l over a faded copy of the plate at its normal aspect ratio; the plate itself is never scaled non-uniformly. The kit family `m7-length` ("coordinate measurement, not a photograph or physical squeezing") is used for the outline and endpoint markers.
- **Site sources used:** lesson 13: predict (100 m at 0.8c, 80 m tunnel) (7, 8); vocabulary (proper length, contracted length) (2); "measure-a-contracted-length" derivation and Figure 1 (3, 6); "explain-the-muon-two-ways" text and Figure 2 (9, 10); misconceptions 1 to 4 and strategy (2, 5, 6, 13); "Analyse 7 marks" (invariants, which quantity each frame alters, same γ) (9, 10); Stop and Check 300 m to 180 m (screen check in scene 8); reflect Rossi values (A2). Not used: the barn and ladder worked example and "Explain 6 marks" (paradoxes, route stop), the square ship (folded into A1).
- **Site notes (quoted from site lesson 13, read 6 Nov; for root to log in `../site-corrections-phys-y12.md` if accepted):**
  1. Error (new): "measure-a-contracted-length": "Two Earth observers standing 100 m apart simultaneously record the position of the ship's nose and tail as it passes. They find the gap is only 60 m". If the observers stand 100 m apart they cannot both be at the nose and tail of a 60 m ship. Correction: "Two Earth observers simultaneously mark the positions of the ship's nose and tail; the marks are 60 m apart."
  2. Precision (new): reflect: "the atmosphere is only 10,000/16 ≈ 625 m thick, well within their classical range" (659 m). With γ = 15.8 the contracted depth is 632 m, about 0.96 of one mean range, so about 38% survive on average: "within about one mean lifetime", not "well within". The site's own "Analyse 7 marks" step 4 says this correctly ("comparable with one mean lifetime").
  3. Precision (new): reflect "the 1940 cosmic-ray muon experiment by Bruno Rossi and colleagues". The decay-rate measurements by Rossi and Hall were published in 1941. Suggest "Rossi and Hall (1941)".
  4. Wording (new): barn-ladder worked step 5 "The front door closes first (when the front reaches it)": "front door" could mean the entrance. Suggest "the far (exit) door closes first", as the site's "Explain 6 marks" says. (Not used in this video.)
  5. Checked and correct: 60 m; 0.6c; 1.5 km and 2.3 lifetimes; Stop and Check 180 m → 0.8c and 900 m → 540 m; MC 4.0 m and 0.87c; Q1(b) 2.4 m, Q1(c) 0.6c; barn 9.0 m and 6.0 m; "Analyse 7 marks" 630 m and 2.1 μs.
- **Cause chain taught, in order:** (1) both frames share the relative speed but not the elapsed time (v13), so distances differ by γ (1); (2) timing a ship past one marker gives proper time in one frame and dilated time in the other, so l = l₀/γ (3); (3) a length is two end positions marked at the same time, and frames disagree on simultaneity, so they measure different lengths (4); (4) no force acts, each frame measures its own objects at full length, and the effect is reciprocal, so nothing is squashed (5); (5) perpendicular lengths cannot change without a contradiction (6); (6) each frame explains the muon count with its own effect and the same γ (9, 10).
- **Entry knowledge (route `entryKnowledge`):** v13 (time dilation, γ, proper time, the muons, the 12 ly trip); v12 (postulates, frames, the Lorentz-FitzGerald rescue); Year 11 (s = vt).
- **Learner-visible vocabulary (plain meaning at first use):** length contraction (2); proper length l₀ (the length in the object's rest frame, 2); simultaneous (at the same time, in a given frame, 4).
- **Legacy logic ported:** none. Coded family `m7-length` is used within its limits; `m7-light-clock`'s mirror pair returns for one beat (6).
- **New explainer motion:** **contracted outline** (teal ship ruler that shortens to l with a γ slider while the faded plate keeps its aspect ratio; an ink ruler in the station frame); **marker beacon** (a coded beacon with a clock that records nose and tail passing); **end-mark demo** (two markers dropping on a track at the same time, or one then the other); **rings** (two coded rings on two ships, approaching); **atmosphere column, two frames** (v13's column beside a contracted column with the ground rushing up); `AlignedAlgebra`; `NumberTicker`; `Countdown` (3 s in scene 1; 10 s in scenes 12 and 14); `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the ship, rulers and station across the middle; algebra on the right; the muon columns at centre left in scenes 9 and 10; everything above the bottom 12% of the frame.
- **Author notes (not learner copy):**
  (a) FitzGerald (1889) and Lorentz (1892) proposed that the aether wind physically compresses matter along the motion; in special relativity, contraction is a kinematic consequence of the postulates, reciprocal, and involves no stress. A rod accelerated in a way that keeps its rest length is not stressed; Bell's spaceship problem is beyond scope.
  (b) Two-ring argument: if a ring moving perpendicular to its plane shrank in diameter, then two identical rings approaching along a common axis would each, in its own frame, be the larger, and the frames would disagree about which ring passes inside the other, an event that leaves a physical record (for example, paint marks). So perpendicular lengths are invariant.
  (c) The visual appearance of a fast object (Terrell rotation) differs from its measured length; the video speaks only of measurement. Not in learner copy.
  (d) Muon numbers: γ(0.995) = 10.01; 15 km / 10.01 = 1.498 km; 1.498 km / (0.995c) = 5.02 μs; /2.2 μs = 2.28. Survival e^(−2.28) ≈ 0.10 in both frames.
  (e) Pronunciations: "l zero" said "l zero"; "gamma".
  (f) Frame rule (Revision 2): within one inertial frame, both the contraction of moving objects and the dilation of moving clocks apply. The error is to combine a distance from one frame with a time from another, for example the muon-frame 1.5 km with the Earth-frame 22 μs lifetime (or the Earth-frame 15 km with the muon's own 2.2 μs).
- **Open decisions for root:**
  - **1. Simultaneity depth (learning review).** Scene 4 states the relativity of simultaneity in one sentence without an example (route "stop before paradoxes"). If the review finds it unexplained, add a coded two-flash example (about 250 characters) or leave simultaneity to a later paradox video.
  - **2. Plate `y12p-space-station-v1`.** Closed: delivered in brief 191 and inspected (7 Nov).
  - **3. "Real, not squashed" balance (science check).** Confirm the wording of scene 5 against the site's misconception 4 ("just as physically real as time dilation").

Main question: *If the ship's distance to the star is 7.2 light-years and Earth's is 12, is something being squashed?*
Entry knowledge: time dilation, γ, proper time, the muons (v13); postulates and frames (v12).
Stops after: l = l₀/γ, proper length, the derivation, simultaneous endpoint measurement, not crushed but real, perpendicular lengths, 60 m and 0.6c, muons in the muon frame, one effect per frame. No paradoxes.
Handoff: v15, why ever more momentum cannot push mass to light speed.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *l*, *l₀*, *t*, *t₀*, *v*, *γ*.

### 1. hook (12 light-years or 7.2?)
> Here's where we stopped. In Earth's frame, the star is twelve light years away, and the trip at zero point eight c takes fifteen years. The ship's clock reads nine years, and in the ship's frame the star rushes towards it at zero point eight c. So for the ship, the distance is only seven point two light years, shorter by exactly gamma, one point six seven. So is the space between Earth and the star being squashed? Make your **prediction**. Nothing is pushed or squashed at all. So why can a moving distance be shorter without an object being **crushed**?

Visual: opens on v13's final frame (see "Opening frame"); the chip becomes the heading: "Why can a moving distance be shorter without an object being crushed?". On "twelve light years away" the ink bracket "12 ly" pulses; on "fifteen years" the Earth clock badge pulses. On "nine years" the teal clock badge pulses. On "the star rushes towards it" Earth and the star slide left past the stationary ship. On "seven point two light years" the teal bracket loses its "?" and reads "7.2 ly (ship frame)"; on "one point six seven" a violet tag "12 / 1.67 = 7.2" joins the two brackets. On "prediction" a 3 s `Countdown` beside chips "squashed by a force", "measured differently in each frame". On "Nothing is pushed or squashed" the first chip is crossed in red and the second ticks; teal pen ring round "7.2 ly", hand tag "shorter, not squashed". On "crushed" the heading's "without an object being crushed" underlines.

### 2. length contraction and proper length
> This is length contraction. A length measured in a frame where the object is moving is shorter than its length at rest, by the factor gamma. On your data sheet, l equals l zero times the square root of one minus v squared over c squared, which is the same as l zero over **gamma**. l zero is the proper length, the length in the frame where the object is at rest. Earth and the star are at rest in Earth's frame, so twelve light years is the proper **length**. Proper length is always the longest.

Visual: camera continue (scenes 1 and 2 together about 78 s; the brackets stay as the picture): the equation strip writes "l = l₀√(1 − v²/c²)" (data sheet, 52 px) on "On your data sheet", and On "gamma" "= l₀ / γ" (violet γ). On "the proper length" a definition chip "proper length l₀: measured in the object's rest frame". On "length" the 12 ly bracket turns teal-outlined with "l₀ = 12 ly" and the 7.2 ly bracket "l = 7.2 ly". On "always the longest" chip "γ ≥ 1 → l ≤ l₀", teal hand tag "proper = longest" with a teal pen bracket on the 12 ly line.

### 3. where it comes from
> Where does it come from? Time a spacecraft as it passes a marker beacon on a space station. In the station's frame, the nose passes the beacon, then the tail passes, both at the same place, so the beacon's clock measures proper time, t zero. The station's length for the ship is v times t zero. In the ship's frame, the beacon slides along the hull, from nose to tail, taking the longer time, gamma t zero. So the ship's own length is v times gamma t zero. Divide them, and the station measures l zero over **gamma**. Length contraction comes straight out of time **dilation**.

Visual: board change (a new set-up): the painted space station `y12p-space-station-v1.png` along the bottom (about 1500 px wide) with a coded beacon (a small post with a light and an ink clock) on its deck; the spacecraft plate (about 800 px) passes above, moving right. On "the nose passes the beacon" the beacon flashes "event 1: nose"; on "then the tail passes" it flashes "event 2: tail"; on "both at the same place" both labels stack at the beacon; ink clock "t₀". On "The station's length for the ship is v times t zero" `AlignedAlgebra` "station frame: l = vt₀". On "In the ship's frame" the frame swaps: the ship holds still and the station slides left; teal clocks at the ship's nose and tail read "t = γt₀" as the beacon travels between them. On "the ship's own length is v times gamma t zero" "ship frame: l₀ = vt = vγt₀". On "gamma" "l / l₀ = 1/γ → l = l₀ / γ" in a dark-ink frame (56 px). On "dilation" violet pen arrow from "γt₀" to "l₀ / γ", violet hand tag "same γ: contraction and dilation come together".

### 4. measuring a moving length
> There's a catch in measuring anything that moves. You have to mark both ends at the same time, in your frame. Mark the nose, wait, then mark the tail, and the ship has moved, so your answer is wrong. And here's the key. Observers in different frames don't agree on which distant events happen at the same time. So they don't agree on which pair of end marks gives the length. That's why each frame gets a different, correct **answer**.

Visual: camera change (a new set-up): a close-up of the station's straight deck as a track (full width) with the ship passing just above it. On "mark both ends at the same time" two coded markers drop from the track at the nose and tail together, ink tick "same time (station frame)", and a ruler between the marks reads "l". On "Mark the nose, wait, then mark the tail" a replay: the nose marker drops, the ship moves on, the tail marker drops later; the ruler reads a wrong value with a red cross, red hand tag "not simultaneous: wrong length". On "don't agree on which distant events happen at the same time" the two simultaneous marks in the station frame are replayed in the ship frame (ship still, station sliding): the nose and tail marks now drop at different times on teal clocks, tag "simultaneous in one frame, not in the other". On "answer" two rulers side by side: "station frame: l" (ink) and "ship frame: l₀" (teal), both ticked; ink and teal pen brackets, hand tag "both correct".

### 5. nothing is crushed, yet it's real
> Now the crushing question. Nothing pushes on the ship. No force acts, and no atoms are squeezed. On board, every ruler gives the full length, l zero, as always. And it's reciprocal. The ship measures the station's rulers as shorter too. They can't both be squashed. That doesn't make it fake. In the station's frame, the ship really is shorter. Length depends on the frame, just as time does, and in no frame does anything feel **squeezed**.

Visual: camera change (a new set-up): the ship large (about 1000 px) above the station deck. On "Nothing pushes on the ship" an amber force arrow "F?" near the hull is crossed in red. On "no atoms are squeezed" a zoom window (about 360 px) on the hull shows a coded atomic lattice with unchanged spacing, teal hand tag "no strain". On "every ruler gives the full length" a teal ruler along the hull reads "l₀ = 100 m (on board)". On "it's reciprocal" the frame swaps; the station's ink ruler, seen from the ship, shortens; tag "the ship measures the station shorter". On "They can't both be squashed" both shortened rulers appear side by side with a red "?". On "the ship really is shorter" the ink outline over the ship (station frame) shortens, while the faded plate keeps its normal shape behind it; tag "measured in this frame". On "squeezed" a small grey chip recalls v12 "aether rescue: a physical squeeze (rejected)" and is crossed in red; ink hand tag "no squeeze, no force, still real".

### 6. only along the motion
> Contraction only happens along the direction of motion. Lengths at right angles don't change. Here's why. Put identical rings on two spacecraft flying straight at each other. If sideways lengths shrank, each ship would say the other's ring is smaller and passes inside its own. They can't both be right, so sideways lengths can't change. That's why the light clock's mirrors stayed d **apart**.

Visual: board change: two spacecraft, one teal-badged and one ink-badged, approaching head-on along one horizontal axis, each carrying a coded ring perpendicular to the motion. On "Lengths at right angles don't change" a tag "only along v". On "each ship would say the other's ring is smaller" two thought-bubble panels (plain boxes, no faces): left panel "teal ship's view: ink ring smaller, passes inside", right panel "ink ship's view: teal ring smaller, passes inside"; both show a paint mark landing on different rings. On "They can't both be right" a red cross over the two panels; the rings meet edge to edge, hand tag "same size: no sideways contraction". On "apart" a small inset of v13's light clock, mirrors labelled "d unchanged", ink pen ring.

### 7. worked example: a passing spacecraft
> Let's calculate. A spacecraft is one hundred metres long at rest, and passes a space station at zero point eight c. What length does the station measure? Gamma at zero point eight c is one point six seven, so l is one hundred over one point six seven, sixty **metres**. Its height, at right angles to the motion, is **unchanged**. And on board, the ship is still one hundred metres long.

Visual: board change to the working layout, the ship and station small at the top left. Task strip: "Find the ship's length measured by the station." Equation strip: "l = l₀√(1 − v²/c²) = l₀/γ". Givens grouped: "l₀ = 100 m (proper: ship's rest frame)", "v = 0.80c". On "Gamma at zero point eight c is one point six seven" "γ = 1/√(1 − 0.80²) = 1.67". On "metres" "l = 100 / 1.67 = 60 m" in a dark-ink frame (56 px); the ink outline over the ship shortens to 60% length while the plate stays unscaled behind it; beside it a chip "l = 100 × 1.67 = 167 m" fades in and is crossed in red, red hand tag "moving lengths are shorter". On "unchanged" a height bracket "height: unchanged" and the live speed slider runs (readouts 52 px): v/c 0, 0.5, 0.8, 0.95, 0.99; γ 1.00, 1.15, 1.67, 3.20, 7.09; l 100, 86.6, 60.0, 31.2, 14.1 m; the outline shortens and lengthens with it while the height bracket never moves; violet hand tag "only along v". On "still one hundred metres long" the slider returns to 0.8c and a teal ruler "on board: 100 m" holds steady.

### 8. worked example: just fitting a docking bay
> Now the other way round. How fast must the ship go for the station to measure it as eighty metres, so it just fits a docking bay of that length? Gamma must be one hundred over eighty, one point two five. Rearrange gamma, and v equals c times the square root of one minus one over gamma squared. That's the square root of one minus zero point six four, which is zero point six. So v is zero point six **c**.

Visual: "γ = 1.67, l = 60 m" stays small at the top; stage 1 fades. On "a docking bay of that length" a coded bay on the station "80 m (proper, station frame)". On "Gamma must be one hundred over eighty" "γ = l₀ / l = 100 / 80 = 1.25". On "Rearrange gamma" `AlignedAlgebra` "1 − v²/c² = 1/γ² → v = c√(1 − 1/γ²)". On "one minus zero point six four" "v = c√(1 − 1/1.25²) = c√(1 − 0.64) = c√0.36". On "c" "v = 0.60c" in a dark-ink frame (56 px); the ship's ink outline shrinks to fit the bay exactly, orange pen bracket "just fits". Screen check (no narration, 3 s; site Stop and Check): "l₀ = 300 m, l = 180 m: γ = 1.67, v = 0.80c".

### 9. the muons in their own frame
> Remember the muons. In Earth's frame, the atmosphere is fifteen kilometres deep and the muon's clock runs slow, so its mean lifetime stretches to twenty two microseconds, and some last the whole fifty microsecond trip. Now take the muon's frame. The muon is at rest and lives its normal two point two microseconds. The atmosphere rushes up at zero point nine nine five c, contracted to fifteen over ten, one point five **kilometres**. Crossing that takes about five microseconds, again about two point three average lifetimes. Same journey in lifetimes, same survivors, so both frames agree on what the detector **counts**.

Visual: board change: two columns side by side. Left "Earth frame": v13's 15 km column (about 700 px tall), muon moving down, slate muon dot with an ink clock "mean lifetime 22 μs (dilated)"; on "some last the whole fifty microsecond trip" a tag "trip: 15 km / 0.995c = 50 μs". On "Now take the muon's frame" the right column "muon frame" appears: the muon dot held still at the top with a teal clock "2.2 μs (its own)". On "The atmosphere rushes up" the right column's ground strip rises towards the muon. On "kilometres" the right column's height labels "15 km / 10.0 = 1.5 km". On "about five microseconds" "1.5 km / 0.995c = 5.0 μs = 2.3 × 2.2 μs". On "counts" the left column's "50 μs / 22 μs = 2.3 lifetimes" appears; both columns end at the same detector counter "≈ 1 in 10" (grey label "ideal model: constant 0.995c, no energy loss"), slate pen ring and hand tag "same count in both frames".

### 10. one effect per frame
> Notice who uses what. Earth's frame uses time dilation, because the muon's clock is the one moving. The muon's frame uses length contraction, because the atmosphere is the one moving. Keep every distance and time you combine from the same frame. And the factor gamma is the same in both **stories**.

Visual: the two columns stay. On "Earth's frame uses time dilation" a label over the left column "time dilated (muon's clock moves); length 15 km (proper)". On "The muon's frame uses length contraction" a label over the right "length contracted (atmosphere moves); time 2.2 μs (proper)". On "Keep every distance and time you combine from the same frame" a chip "1.5 km (muon frame) with 22 μs (Earth frame)" is crossed in red, red hand tag "mixes two frames"; ink and teal pen brackets pair "15 km with 50 μs" (Earth) and "1.5 km with 5.0 μs" (muon). On "stories" both labels gain "γ = 10.0".

### 11. a way to remember
> Here's a way to remember it. Proper length is the longest. Proper time is the **shortest**. Both belong to the frame where the thing being measured is at rest.

Visual: board clears to two rows (the painted ship above the station deck in row 1, at least 300 px; the clocks in row 2). On "Proper length is the longest" the ship's teal ruler (100 m) beside the ink outline (60 m). On "shortest" the ship clock (9 yr) beside the Earth clock (15 yr). A framed memory card writes above in hand lettering (52 px, teal and ink; the same card is reused on the notes screen): "Proper length is the longest. Proper time is the shortest." On "Both belong to the frame" a tag "proper = measured at rest". Hold about 2 seconds.

### 12. attempt 1 (countdown, 10 seconds)
> Your turn. A spacecraft is one hundred and fifty metres long and twenty metres wide, measured at rest. It passes a space station at zero point nine zero c, moving along its length. Calculate the length and the width of the spacecraft measured by the station. Pause here to answer.

Visual: `QuestionCard` (subject "Physics") arrives with its full text and picture in one move (question text 36 px), worded as printed: "A spacecraft is 150 m long and 20 m wide when measured at rest. It passes a space station at 0.90c, travelling in the direction of its length. Calculate the length and the width of the spacecraft as measured by observers on the station. Justify any difference. (3 marks)" Picture: the painted spacecraft (about 500 px) above the painted station deck, with brackets "150 m" and "20 m" and an orange arrow "0.90c". The full question stays on screen. Countdown ring full from "Pause here to answer." for 10 seconds. Nothing answer-bearing.

### 13. feedback 1 (brief)
> Gamma at zero point nine zero c is two point two nine, so the length is one hundred and fifty over two point two nine, about sixty five **metres**. The width is at right angles to the motion, so it stays twenty **metres**. The slip is multiplying by gamma, which gives a longer ship. A moving length is always **shorter**.

Visual: card shrinks to the top; "measured at rest", "0.90c" and "direction of its length" underline. A givens strip (36 px): "l₀ = 150 m", "width 20 m", "v = 0.90c". The ship picture at the right with its ink outline. On "metres" (first cue) "γ = 1/√(1 − 0.90²) = 2.29; l = 150 / 2.29 = 65 m" (52 px), framed; the outline shortens. On "metres" (second cue) "width: perpendicular to v → 20 m (unchanged)", framed; the width bracket stays. On "shorter" a chip "l = 150 × 2.29 = 344 m" fades in and is crossed in red (red hand tag "l ≤ l₀: divide by γ"). Hold about 1 second.

### 14. attempt 2 (countdown, 10 seconds)
> Last one. Muons are produced ten kilometres above sea level and travel down at zero point nine nine eight c, where gamma is fifteen point eight. Their mean lifetime at rest is two point two microseconds. In the muon's frame, calculate the thickness of the atmosphere, and the time it takes to pass, and compare it with the mean lifetime. Pause here to answer.

Visual: `QuestionCard` arrives with its full text and picture in one move (question text 36 px), worded as printed: "Muons are produced 10 km above sea level and travel towards the ground at 0.998c (γ = 15.8). Their mean lifetime at rest is 2.2 μs. In the frame of the muons: (a) calculate the thickness of the atmosphere; (b) calculate the time taken for the atmosphere to pass, and compare it with the mean lifetime. (3 marks)" Picture: a coded atmosphere column (about 400 px tall) with a slate muon dot at the top and a bracket "10 km". Data chip "c = 3.00 × 10⁸ m s⁻¹". The full question stays on screen. Countdown ring full from "Pause here to answer." for 10 seconds. Nothing answer-bearing.

### 15. feedback 2 (brief)
> In the muon's frame, the atmosphere is contracted. Ten kilometres over fifteen point eight is about six hundred and thirty **metres**. At zero point nine nine eight c, that passes in about two point one microseconds, about one mean lifetime, so many muons **survive**. The slip is dilating the muon's lifetime in its own frame. Its own clock always reads two point two **microseconds**.

Visual: card shrinks to the top; "In the frame of the muons" and "at rest" underline. A givens strip (36 px): "l₀ = 10 km (Earth frame)", "v = 0.998c", "γ = 15.8", "t₀ = 2.2 μs". At the right the column contracts in the muon frame, the muon held still with a teal clock. On "metres" "(a) l = 10 000 / 15.8 ≈ 630 m" (52 px), framed. On "survive" "(b) t = 632 / (0.998 × 3.00 × 10⁸) = 2.1 μs ≈ 1 mean lifetime (2.2 μs) → a large fraction survive", framed. On "microseconds" a chip "muon's lifetime = 15.8 × 2.2 = 35 μs (muon frame)" fades in and is crossed in red (red hand tag "its own clock: 2.2 μs"). Hold about 1 second.

### 16. handoff
> Every result so far has the same factor, gamma, and gamma grows without limit as speed approaches c. So what happens if we just keep pushing? Fire the ship's engines and leave them on. The thrust adds momentum every second, for as long as you like. So why does ever more momentum fail to push mass to light **speed**?

Visual: board clears (camera change). On "gamma grows without limit" the γ against v/c graph (v13) draws small at the right with its dashed asymptote at "c". On "Fire the ship's engines" the spacecraft plate at the left (about 900 px wide) gets its exhaust layer `y12p-spacecraft-exhaust-v1.png`. On "The thrust adds momentum every second" an amber momentum arrow "p" grows steadily from the ship's nose; a speed tag "v = ?" beside it, and a marker on the γ graph creeps towards the asymptote. On "speed" chip "Next: why does ever more momentum fail to push mass to light speed?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 17. key notes (quiet, hold about 45 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. l = l₀√(1 − v²/c²) = l₀/γ, along the motion only.
2. Proper length l₀: object's rest frame (longest).
3. Mark both ends at the same time in your frame.
4. No force, no squeeze; reciprocal, yet real.
5. Combine distance and time from one frame only.

Memory aid (framed card under the notes, hand lettering as in scene 11): *Proper length is the longest. Proper time is the shortest.* Notes in the role colours, 34 px; about 250 characters of bullet text; no paragraphs.

## Teaching checks

- **Does it explain causes?** Why distances must differ: the same relative speed with different elapsed times (1, 3). Why simultaneity matters: a length is two marks at one time (4). Why nothing is crushed: no force, full length on board, reciprocity (5). Why perpendicular lengths are unchanged: the ring contradiction (6). Why both frames count the same muons: the same journey in proper lifetimes (9).
- **Misconceptions addressed:** contraction is a physical squeeze (1, 5); it is only an illusion (5); all dimensions contract (6, 13); l = γl₀ (13 crossed); the muon's own lifetime is dilated (15 crossed); using both effects in one frame (10).
- **One idea at a time:** the result (2), its origin (3), measurement (4), not crushed (5), direction (6), two calculations (7, 8), muons (9), the rule (10).
- **Video makes it easier:** the beacon's two flashes at one place (3); the late tail mark giving a wrong length (4); the ink outline shortening over an unchanged plate (5, 7); the rising ground in the muon column (9).
- **Response opportunity:** one prediction (3 s) and two unseen HSC-style tasks with every condition visible, 10 s each; nothing answer-bearing. One crossed mistake each; feedback about 23 s and 28 s.
- **Avoided double teaching:** time dilation, γ, proper time and the muons (v13); postulates and the aether rescue (v12) recalled in a clause.
- **Syllabus coverage:** `P7-IQ4-02` (length contraction part): Einstein's thought experiment (3, 6), l = l₀√(1 − v²/c²) (2, 7, 8, 12), quantitative situations (7, 8, 12, 14), cosmic-origin muons in two frames (9, 10, 14). Atomic clocks and accelerators were covered in v13.
- **Out of scope by design:** the barn-ladder and twin paradoxes; spacetime diagrams; visual appearance (author note c); momentum (v15).

## Practice questions and model answers

**Attempt 1 (scene 12; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "A spacecraft is 150 m long and 20 m wide when measured at rest. It passes a space station at 0.90c, travelling in the direction of its length. Calculate the length and the width of the spacecraft as measured by observers on the station. Justify any difference."
Model answer: γ = 1/√(1 − 0.90²) = 2.29. Length (along the motion): l = l₀/γ = 150/2.29 = 65 m. Width (perpendicular to the motion): unchanged, 20 m, because only lengths parallel to the relative velocity contract. Classic mistake (crossed): l = 150 × 2.29 = 344 m.

**Attempt 2 (scene 14; original wording, HSC style, 3 marks).** "Muons are produced 10 km above sea level and travel towards the ground at 0.998c (γ = 15.8). Their mean lifetime at rest is 2.2 μs. In the frame of the muons: (a) calculate the thickness of the atmosphere; (b) calculate the time taken for the atmosphere to pass, and compare it with the mean lifetime."
Model answer: (a) In the muon frame the atmosphere moves, so its 10 km proper thickness contracts: l = 10 000/15.8 = 6.3 × 10² m. (b) t = l/v = 632/(0.998 × 3.00 × 10⁸) = 2.1 × 10⁻⁶ s, about one mean lifetime (2.2 μs), so a large fraction of muons reach the ground (about 38% on average). Classic mistake (crossed): dilating the muon's lifetime to 35 μs in its own frame.

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Constants | c = 3.00 × 10⁸ m s⁻¹ (data sheet) | 9, 14, 15 |
| Trip (from v13) | 12 ly; 0.8c; 15 years and 9 years; 0.8 × 9 = 7.2 ly; 12/1.667 = 7.2 ly | 1, 2 |
| Ship (site predict) | l₀ = 100 m; γ(0.80) = 1.667; l = 60 m | 5, 7 |
| Docking bay (site 80 m tunnel) | γ = 100/80 = 1.25; 1/1.25² = 0.64; √0.36 = 0.60; v = 0.60c | 8 |
| Site Stop and Check | 300/180 = 1.667 → v = 0.80c | 8 |
| Muons | γ(0.995) = 10.01; 15/10.01 = 1.50 km; 1.498 km / 0.995c = 5.02 μs; 5.02/2.2 = 2.28; Earth frame 50.3 μs / 22.0 μs = 2.28 | 9, 10 |
| A1 | γ(0.90) = 2.294; 150/2.294 = 65.4 m ≈ 65 m; width 20 m; slip 150 × 2.294 = 344 m | 12, 13 |
| Speed slider (Revision 2) | l₀ = 100 m; v/c = 0, 0.5, 0.8, 0.95, 0.99: γ = 1.00, 1.155, 1.667, 3.203, 7.089; l = 100, 86.6, 60.0, 31.2, 14.1 m | 7 |
| Crossed slip (Revision 2) | 100 × 1.67 = 167 m | 7 |
| Earth-frame trip (Revision 2) | 15 km / (0.995 × 3.00 × 10⁸) = 50.3 μs ("fifty microsecond trip") | 9 |
| A2 (site reflect values) | γ(0.998) = 15.82 (given 15.8); 10 000/15.82 = 632 m; 632/(0.998 × 3.00 × 10⁸) = 2.11 μs; 2.11/2.2 = 0.96 lifetimes; survival e^(−0.96) = 0.38; slip 15.8 × 2.2 = 35 μs | 14, 15 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov, `numbers.py` in the session scratchpad); Codex to re-check.

- 12/1.6667 = 7.2; 0.8 × 9 = 7.2.
- 100/1.6667 = 60.0; √(1 − (80/100)²) = 0.600; 300/180 = 1.667.
- 15/10.0125 = 1.498 km; 1498/(0.995 × 3.00e8) = 5.019e-6 s; /2.2e-6 = 2.281.
- Revision 2 (7 Nov, Python): slider 1/√(1 − 0.5²) = 1.1547, 100/1.1547 = 86.6; 1/√(1 − 0.95²) = 3.2026, 31.2; 1/√(1 − 0.99²) = 7.0888, 14.1. 15000/(0.995 × 3.00e8) = 5.025e-5 s.
- 1/√(1 − 0.9²) = 2.2942; 150/2.2942 = 65.38; 150 × 2.2942 = 344.1.
- 1/√(1 − 0.998²) = 15.819; 10 000/15.819 = 632.1 m; 632.1/(0.998 × 3.00e8) = 2.111e-6 s; 2.111/2.2 = 0.960; e^(−0.960) = 0.383; 15.819 × 2.2 = 34.8 μs.

## Memory aid check

- **"Proper length is the longest. Proper time is the shortest."** Meaning, as said in scene 11: the proper length (measured in the object's rest frame) is greater than the length measured in any frame where the object moves; the proper time between two events (measured by one clock present at both) is shorter than in any other inertial frame. Assumptions checked: inertial frames; "length" means the extent along the relative velocity (perpendicular lengths are equal in all frames, so "longest" is "longest or equal"); proper time needs a single clock at both events. Both halves "belong to the frame where the thing being measured is at rest" (spoken). It helps a new case: A1 (divide, do not multiply) and A2 (the muon's own clock reads 2.2 μs). Introduced after the explanation (2 to 10).
- **Considered, not used:** "Moving rulers come up short" (pairs well with v13's "moving clocks run slow", but does not help students identify l₀ in a question).

## Narration length estimate

Revision 2 count (7 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed; total = sum of scene strings): **6,423 characters**, 17 scenes. Characters per scene (1 to 17): 550, 489, 569, 431, 437, 390, 379, 402, 615, 295, 155, 280, 310, 359, 374, 313, 75. At 13.3 characters per second the speech is about 483 s; add about 3 s for the prediction countdown, 3 s for the scene 8 screen check, 2 s for the scene 7 slider, 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 40 s more of the quiet notes hold (45 s in all; about 74 s of holds and countdowns): **about 557 s**, inside the 5,500 to 7,000 character band and under the 570 s cap. Revision 1: 6,338 characters, about 564 s. Reserve trims if the voiced take runs long: scene 6 (rings; keep one sentence and the inset); scene 5's reciprocity sentences; scene 8's screen check.

## Opening frame

v13's final frame (designed in this wave, `phys-y12-m7-v13.md`): paper background; heading "How can two observers measure different elapsed times?"; the painted Earth `phys-y11-earth-v1.png` at the left and a coded star at the right, displaced slightly left with an arrow "star approaching at 0.8c" (ship frame shown); the painted spacecraft `y12p-spacecraft-v1.png` between them, held still, facing right; an ink bracket "12 ly (Earth frame)"; a teal bracket "0.8 × 9 = 7.2 ly (ship frame?)"; clock badges "Earth frame: 15 yr" (ink) and "ship's clock: 9 yr" (teal); chip "Next: why can a moving distance be shorter without an object being crushed?". Scene 1 turns the chip into the heading.

## Final frame

The last explained frame (end of scene 16, before the key-notes board): paper background; heading "Why can a moving distance be shorter without an object being crushed?"; at the left the painted spacecraft `y12p-spacecraft-v1.png` facing right with the exhaust layer `y12p-spacecraft-exhaust-v1.png` on; an amber momentum arrow "p" from its nose (long, still growing) and a speed tag "v = ?"; at the right a small coded γ against v/c graph with a dashed asymptote labelled "c" and a marker close to it; chip "Next: why does ever more momentum fail to push mass to light speed?". v15 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m7-v14` (route phys-y12-m7-v14). Suggested explainer folder `src/explainer/lessons/phys-y12-m7-v14` and build folder `docs/production/claude-pm/lessons/p-y12-m7-v14` (root to confirm).

In order (kebab-case; 17 scene headings, all `### N.`): hook, contraction-proper-length, derivation, measure-moving-length, not-crushed, perpendicular, worked-ship, worked-docking, muons-own-frame, one-effect-per-frame, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Scene 1 is `explain` with a 3 s prediction countdown. `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: contracted outline and rulers, marker beacon, end-mark demo, rings, two-frame atmosphere columns, frame swap, `AlignedAlgebra`, `NumberTicker`, `PenArrow`, `Countdown`, `CameraStage`. Transitions (`pickTransition`, Revision 2): 1 to 2 camera continue (about 78 s); 2 to 3 clear change to the station; 3 to 4 camera change (close-up deck track); 4 to 5 camera change (the ship large with the hull zoom); no set-up runs past about 80 s; 5 to 6 clear change; 6 to 7 clear change to working; 7 to 8 camera continue; 8 to 9 clear change to the columns; 9 to 10 camera continue; 10 to 11 clear change; attempts and feedback card shrink to the top; 15 to 16 clear change; 16 to 17 fade to the notes board.

Holds: hook (3 s countdown), scene 7 slider (2 s), scene 8 screen check (3 s), memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 45 s). Review evidence paths: `learning_review` = `checks/p-y12-m7-v14-learning-review.md`, `science_check` = `checks/p-y12-m7-v14-physics-check.md`.

## Assets

Have (inspected 6 Nov on session contact sheets; scaled uniformly only, never stretched):
- `public/assets/physics/phys-y11-earth-v1.png` (1254 × 1254, RGBA): Earth (1).
- `public/assets/physics/y12p-spacecraft-v1.png` and `y12p-spacecraft-exhaust-v1.png` (2048 × 768 each, same canvas; brief 191, inspected 7 Nov): 1, 3 to 8, 11, 12, 16.
- `public/assets/physics/y12p-space-station-v1.png` (2172 × 724, RGBA; delivered in brief 191, inspected 7 Nov: straight truss deck along the top, Codex deck line about y = 280 from x 442 to 1760; modules below; edge-on solar wings): 3, 4, 5, 7, 8, 11, 12, 13.
- **Checked, not used:** `phys-y11-metre-rule-v1.png` (the rulers must shorten with γ, so they are coded).

Need (new plates): none (Revision 2).

Coded: rulers and outlines, marker beacon and clocks, end markers, track, rings, lattice zoom, atmosphere columns, muons, brackets, γ graph, momentum arrow, calculation strips, crossed chips, countdowns, key notes board.

Kit gaps (for the v14 build brief):
1. **Contracted outline over an unscaled plate.** An outline and ruler whose horizontal length follows l₀/γ while the plate behind keeps its aspect ratio (opacity 40%).
2. **Frame swap.** One control that holds either the station or the ship still and moves the other, with the attached clock badges.
3. **Two-frame columns.** v13's atmosphere column plus a contracted copy whose ground rises.

## Codex asset brief

Revision 2: no open request; the space station was delivered in brief 191 and is kept here for the record.

1. **`y12p-space-station-v1.png`** (delivered). A painted uncrewed space station segment seen side-on: a long straight truss with a smooth flat docking platform along its top edge (the ship passes above it), a few cylindrical modules hanging below, two solar panel wings seen edge-on at the ends. No windows with figures, no people or hands, no text, logos or flags. Same painted style as `y12p-spacecraft-v1.png` (white and pale grey panels, neutral lighting). Transparent PNG with alpha channel, about 2800 × 900, object centred with even margins, soft shadow inside the alpha only. The flat top edge must be straight so coded markers, a beacon and a docking bay outline can sit on it.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text and attempts against the "Numbers used" table.
2. Confirm the physics of every learner-visible claim: l = l₀√(1 − v²/c²) = l₀/γ; proper length; the beacon derivation (which frame has proper time); simultaneous endpoint marking and the one-sentence relativity of simultaneity; "nothing is squeezed" and "it really is shorter in that frame" together (open decision 3); the ring argument for perpendicular lengths; 60 m and 0.60c; the muon-frame numbers and "same count in both frames"; Revision 2: "keep every distance and time you combine from the same frame" (author note f) and the scene 9 Earth-frame sentence (mean lifetime 22 μs; 50 μs trip).
3. Confirm the memory aid's assumptions (see "Memory aid check").
4. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
5. Confirm both attempt cards are original in wording, carry every condition and show nothing answer-bearing.
6. Confirm the syllabus quote matches the route JSON exactly and is labelled 2017.
7. Confirm no person, hand, face or body outline is drawn or requested (thought-bubble panels are plain boxes; observers are beacons, clocks and rulers).
8. Confirm the spacecraft plate is never scaled non-uniformly (build note) and no em dash (U+2014) or U+2061 appears; Australian spelling.
9. Confirm the narration character count and per-scene counts by script with the build parser rules.
10. Report site notes 1 to 4 under Decisions to root.
11. Revision 2: re-check the slider values and the crossed "100 × 1.67 = 167 m" slip (Numbers used); confirm the muon counter label "ideal model: constant 0.995c, no energy loss" (9).

## YouTube metadata (draft)

Title: Length Contraction: Why Moving Lengths Are Shorter (and Nothing Gets Crushed) | HSC Physics Module 7

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module7/lesson13.sa.html

A spacecraft's clock says a 12 light-year trip took 9 years at 0.8c, so for the ship the distance was only 7.2 light-years. See where length contraction comes from, why measuring a moving length depends on what "at the same time" means, why nothing is squeezed, why only lengths along the motion shrink, and how muons reach the ground in their own frame. Worked examples and two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 7: The Nature of Light.
Syllabus content (NSW Physics Stage 6, 2017):
"investigate the evidence, from Einstein’s thought experiments and subsequent experimental validation, for time dilation t = t0/√(1 − v²/c²) and length contraction l = l0√(1 − v²/c²), and analyse quantitatively situations in which these are observed, for example: observations of cosmic-origin muons at the Earth’s surface; atomic clocks (Hafele–Keating experiment); evidence from particle accelerators; evidence from cosmological studies"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: time dilation. Next: relativistic momentum and the speed limit.

#HSCPhysics #Physics #LengthContraction #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v13; check that the beacon derivation is followable in two stages; that scene 4's simultaneity sentence is enough at this point (open decision 1); that "not squeezed, but real" lands without contradiction; that the two muon columns are read as one event in two frames), then the physics check and the Codex error check.
- The beacon flashes, the late tail mark and the shortening outline over an unchanged plate carry the explanation; judge them at playback speed in the voiced preview.

## Revision 2 (7 Nov 2026)

Brief 191 findings (`checks/p-y12-m7-v14-learning-review.md`, `checks/p-y12-m7-v14-science-check.md`): 0 blockers, 2 should fix, 1 optional.
- **Should fix, scene 9 muon wording.** Resolved: "so it lives twenty two microseconds and makes it" becomes "so its mean lifetime stretches to twenty two microseconds, and some last the whole fifty microsecond trip". The Earth column shows "mean lifetime 22 μs (dilated)" and "trip: 15 km / 0.995c = 50 μs" (Python: 50.3 μs), consistent with the counter and v13.
- **Should fix, scene 10 frame rule.** Resolved: "Never use both in the same frame" becomes "Keep every distance and time you combine from the same frame"; the crossed chip is the actual error, "1.5 km (muon frame) with 22 μs (Earth frame)", and pen brackets pair 15 km with 50 μs (Earth) and 1.5 km with 5.0 μs (muon). Decisions, key note 5, author note (f) and the error-check brief follow.
- **Optional, muon counter label.** Resolved: the shared counter carries v13's "ideal model: constant 0.995c, no energy loss".

Visual upgrade (to `../maths-visual-standard.md` and the build gate):
- Decisions gain "Colour key (Revision 2)", "Type sizes", "Anchor", "Simulation" and "Question cards".
- Plates: the space station (brief 191) is inspected and carries 3 to 5, 7, 8, 11 and the A1 card; the ship plate is never scaled non-uniformly (the coded outline shows contraction).
- Live control: scene 7's speed slider over the passing ship (Python: l = 100, 86.6, 60.0, 31.2, 14.1 m at 0, 0.5, 0.8, 0.95, 0.99c) with live γ and l readouts, a fixed height bracket and a fixed on-board ruler. 0.6c and 0.9c are left off because scene 8 and A1 ask for them.
- Stage changes: scenes 3 to 5 were one continuing station board for about 108 s; scene 4 now cuts to a close-up deck track and scene 5 to the large ship with the hull zoom. No set-up runs past about 80 s.
- Hand tags and a pen mark in role colours in every teaching scene ("shorter, not squashed", "proper = longest", "same γ: contraction and dilation come together", "not simultaneous: wrong length", "both correct", "no strain", "no squeeze, no force, still real", "same size: no sideways contraction", "moving lengths are shorter", "only along v", "just fits", "same count in both frames", "mixes two frames"; pen rings, brackets and arrows on 7.2 ly, l₀, the rulers, the clock inset, the bay, the counter and the paired frame values).
- Framed answers: l = l₀/γ (3), 60 m (7), 0.60c (8), both A1 rows (13), both A2 rows (15). New crossed slip: "l = 100 × 1.67 = 167 m" (7).
- Question cards arrive with full text and a picture in one move (painted ship over the station; the atmosphere column); the answer side has a givens strip and the outline or contracted column.
- Key notes cut from five long items (about 690 characters) to five short bullets (about 250 characters) with the framed memory card; quiet notes hold 60 s to 45 s.
- Type sizes stated; colour roles fixed.

New plate requests: none.

Joins: the opening is v13's final frame (unchanged). The final frame (scene 16) is unchanged except that the ship is sized (about 900 px wide), so the v15 join holds.

Counts: 6,338 to 6,423 characters (scene sum); about 564 s to about 557 s.
