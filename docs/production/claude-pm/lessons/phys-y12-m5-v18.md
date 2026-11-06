# Year 12 Physics M5 V18: Circular orbits. How does gravity maintain a circular orbit? (design)

Status: Revision 2 (6 Nov 2026): brief 188 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 5,727 characters (scene sum; Revision 1 stated 5,606 by the joined convention), 17 scenes, about 514 s, counted by script with the build parser rules (see "Narration length estimate").

Scope: Year 12 Physics (Physics Stage 6, 2017 syllabus), Module 5 (Advanced Mechanics), inquiry question "How does the force of gravity determine the motion of planets and satellites?". Templates as `phys-y12-m5-v17.md`. No pre-design pack exists; the pack work is done here. Site lessons read in full (6 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson11.sa.html`, SHA256 `62b7d2be3790b2adf89c177e71c4be0b7af850d8005f56cdd75c2f88c441ef3e`, and `.../module5/lesson17.sa.html`, SHA256 `01842919fdfa6884fe4144bf4197bb53f8d91c2f43873464c113dadcc13b8f8e` (both recomputed 6 Nov; both match the route). Route entry: `phys-y12-m5-v18`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Equate gravitational resultant with centripetal requirement, deriving v=sqrt(GM/r) and period relation. Stop before ellipse dynamics." Next: "phys-y12-m5-v19: What makes an orbit geostationary rather than merely near Earth?"

Owner rules applied: as v17 (2017 syllabus quoted exactly; no people, hands, faces or body outlines: Newton is named, not drawn; the space station is shown only as a coded cabin cross-section with a floating spanner, no crew; painted plates for Earth, Moon, satellite, launcher and spanner; coded arrows, orbits and strips; every number recalculated in Python with the HSC data sheet constants G = 6.67 × 10⁻¹¹ N m² kg⁻², M_E = 6.0 × 10²⁴ kg, R_E = 6.371 × 10⁶ m; real orbital data cited from NASA fact sheets; "Pause here to answer." with a 10 s countdown; brief feedback with one crossed mistake; Australian spelling; no em dashes). Recalled, not re-taught: v01 (a projectile falls 4.9 m in its first second), v11 and v15 (a force perpendicular to the velocity changes direction, not speed, and does no work; a = v²/r), v12 (centripetal force is a role played by real forces), v17 (F = GMm/r², r = R + h).

Syllabus content (Physics Stage 6 (2017), Module 5; ledger ids `P5-IQ3-02`, `P5-IQ3-04`), quoted from the route JSON `syllabusActions`:

- `P5-IQ3-02`: "investigate the orbital motion of planets and artificial satellites when applying the relationships between the following quantities:" "gravitational force", "centripetal force", "centripetal acceleration", "mass", "orbital radius", "orbital velocity", "orbital period"
- `P5-IQ3-04` (circular case only here; v20 completes it): "investigate the relationship of Kepler’s Laws of Planetary Motion to the forces acting on, and the total energy of, planets in circular and non-circular orbits using: (ACSPH101)" "v=(2πr)/(T)", "(r^(3))/(T^(2))=(GM)/(4π^(2))"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 54)

**Boundary:** starts on v17's final frame (a satellite at 400 km, its violet g arrow, a dashed tangent "v = ?"). Teaches: Newton's mountain thought experiment (an orbit is a projectile whose fall keeps missing the curving Earth); gravity as the only force and the inward resultant, perpendicular to the velocity in a circular orbit; the model conditions; v = √(GM/r) from GMm/r² = mv²/r with m cancelling; apparent weightlessness as shared free fall; a worked speed at 400 km; higher orbits are slower; v = 2πr/T and r³/T² = GM/4π²; a worked period; the same constant for every Earth satellite, checked with the Moon. Stops before geostationary orbits and their uses (v19), ellipses, equal areas and the semi-major axis (v20), orbital energy (v22) and escape (v23).

## Decisions

- **Learner question (route wording kept).** "How does gravity maintain a circular orbit?" The answer, built in order: a fast enough sideways launch makes the fall miss the curving ground (1, 2); gravity is the only force, at right angles to the motion, so it turns the velocity without changing the speed (3); setting gravity equal to the needed inward force fixes the speed at each radius (4); the mass cancels, so everything at that radius falls together (5); worked speed (6); a higher orbit is slower (7); one lap is one circumference, which fixes the period (8, 9) and makes r³/T² the same for every Earth satellite (10).
- **Hook (Newton's mountain thought experiment; site's "continuous free fall" framing).** The cannon is the course launcher plate pair (`y12p-launcher-base-v1.png`, `y12p-launcher-barrel-v1.png`, requested in v02) set level on a coded mountain peak drawn far above the atmosphere band; Newton is named, not drawn. Paths are computed ballistic paths around the Earth model (author note a). Prediction with a 3 s countdown.
- **The 4.9 m and 8 km link (new, from v01's strobe; Revision 2 wording).** A projectile falls ½ × 9.8 × 1² = 4.9 m in its first second; Earth's surface falls away from a tangent by d²/2R = 5.0 m over the first 8.0 km. So about 8 km s⁻¹ keeps the first second's fall level with the curve (√(GM/R) = 7.93 km s⁻¹). The comparison is made for the first second only; the narration then says the next second starts along a new straight line, because the fall from a fixed tangent grows as time squared (brief 188 finding). Model values with no air; tag "no air".
- **Gravity's role (site card 1 model conditions; v12 language).** "Centripetal force isn't an extra force here, it's the job gravity is doing." Model conditions on screen: circular orbit, spherical Earth, satellite mass much smaller than Earth's, no thrust, no air drag, r centre to centre.
- **Derivation (site card 1).** One line at a time; the m cancellation is shown as a strike-through on both sides, then "× r".
- **Weightlessness (site hook, misconceptions and v17 "Account 5 marks" content).** Kept because the m cancellation explains it directly and it is a classic HSC "account for" question. Shown with a coded station cabin cross-section and a floating spanner plate (`y12p-spanner-v1.png`, requested in v08); no crew. Scene 5 states "They aren't free of gravity, they're in free fall."
- **Worked speed (site worked example, re-valued).** ISS-like 400 km: site 7.67 km s⁻¹ with 5.97 × 10²⁴ kg; data sheet values give 7.69 × 10³ m s⁻¹. Narrated as "a satellite four hundred kilometres up, about where the space station orbits".
- **Period (site card 2 derivation; syllabus forms v = 2πr/T and r³/T² = GM/4π²).** The algebra is shown in three lines, narrated as one sentence ("with a little rearranging"), because the steps are mechanical once v = 2πr/T is substituted; the screen holds each line for the viewer. Worked period 5,534 s ≈ 92 min; NASA's "about 90 minutes" for the ISS is quoted as a check (author note c).
- **Same constant (site card 2 "constant for all bodies orbiting the same mass"; real data).** The Moon: r = 3.844 × 10⁸ m, T = 27.3217 days (NASA Moon Fact Sheet). r³/T² = 1.019 × 10¹³ m³ s⁻² against GM/4π² = 1.014 × 10¹³ (0.6 % apart; author note d gives the reasons). Narrated as "within one per cent".
- **Memory aid.** "Gravity is the centripetal force: set them equal, cancel m." with the picture line "Falling around, not falling down." See "Memory aid check".
- **Attempts.** A1 (site short-answer Q1's 547 km, re-valued; Revision 2: a generic "space telescope" with 547 km as a given exercise altitude, because current NASA sources do not verify 547 km as Hubble's present altitude): v = 7.61 × 10³ m s⁻¹, T = 5.71 × 10³ s ≈ 95 min. A2 (new): Y at four times X's radius: speed halves, period eight times (path four times longer at half the speed). Crossed: A1 "r = 5.47 × 10⁵ m"; A2 "period four times longer".
- **Colour key (root decisions 2 and 10; Revision 2).** Velocity teal (every velocity arrow, launch path and speed readout; previously orange); gravitational force amber; g and acceleration violet; r navy; altitude grey (mid grey at full opacity, never faint); framed answers in a dark-ink box; crossed chips and their hand tags red. Orange is reserved for kinetic energy (v22, v23) and does not appear here.
- **Type sizes (Revision 2, 1080p):** the current working line at least 44 px (scenes 4, 6, 8, 9 and the feedback rows 52 px; the framed "v = √(GM/r)" and "r³/T² = GM/4π²" 60 px); live readouts (scenes 1, 2, 5 and 7) about 52 px; supporting lines, givens and chips 30 to 36 px; hand-font tags at least 30 px; question text 36 px; nothing a student must read below 26 px. All text above the bottom 12% of the frame.
- **Anchor (Revision 2).** Scene 1 opens on v17's final frame (painted Earth and the delivered satellite plate), then builds Newton's mountain with the delivered launcher plates (`y12p-launcher-base-v1.png`, `y12p-launcher-barrel-v1.png`) and the steel ball plate. Scene 5 uses the existing painted space station (`y12p-space-station-v1.png`) and the delivered spanner; scenes 7 and 10 use the delivered Moon.
- **Simulation (Revision 2).** Two live controls. (1) Scenes 1 and 2: a launch-speed slider on Newton's mountain with live readouts "launch speed" and "lands: distance round Earth" (3 km s⁻¹: about 1,600 km; 5 km s⁻¹: about 3,300 km, a twelfth of the way round; 6.5 km s⁻¹: about 7,000 km; 7.37 km s⁻¹: never, a circle), each path computed from the model (author note a). (2) Scene 7, on the core idea: an orbit-radius slider from 6.771 × 10⁶ m to 2.708 × 10⁷ m with live r, v and g readouts (7.69, 6.33, 5.17, 4.47, 3.84 km s⁻¹; 8.73, 4.00, 1.78, 1.00, 0.546 N kg⁻¹), the teal velocity arrow and violet g arrow resizing with them. Scene 5 adds a pair of equal live acceleration readouts on the module and spanner.
- **Stage changes (Revision 2).** Scene 1 Newton's mountain; scene 2 the launch-point inset; scene 3 the orbit stage; scene 4 the algebra column; scene 5 the station and its cutaway; scene 6 full-width working; scene 7 the radius slider; scene 8 the lap stage; scene 9 full-width working; scene 10 the Moon pull-back. No set-up runs past about 60 s.
- **Handoff.** Scene 16 asks which period would keep pace with Earth's spin; a rotation arrow on Earth and a dashed outer circle "r = ?" (v19).
- **Site sources used:** lesson 11 hook (ISS weightless and period), vocabulary (circular orbit, orbital speed, period), misconceptions (fuel, heavier satellites slower, r from the surface, zero gravity, "Moon doesn't fall"), model conditions, card 1 (derivation, worked example re-valued), card 2 (period relation, constant), summary (higher orbit slower, longer period), Q1 (A1), the "Analyse 5 marks" answer (scene 3: perpendicular force, no work; the drag "grain of truth" in author note e); lesson 17 card 3 (circular derivation; assumptions). Not used here: GEO, LEO/MEO uses, GPS (v19); ellipses and semi-major axis (v20); Hohmann transfers (site optional).
- **Site notes (for root to log if accepted):**
  1. Lesson 11, worked example "Orbital period from radius": T = 2π√(1.286 × 10⁶) = 7,125 s, not 7,134 s (√1.2858 × 10⁶ = 1,133.9 s; × 2π = 7,124.7 s). "≈ 119 min" still holds.
  2. Lesson 11 "Critical requirements" says GEO satellites "must orbit at exactly 35,900 km altitude", while the same lesson lists GEO at 35,786 km and its summary gives 35,800 km (logged in v19).
  - Checked and correct: ISS 7.67 km s⁻¹ (site constants); GPS T = 12.0 h; Hubble Q1 7.59 km s⁻¹ and 5,726 s (site constants); Q2 8.0 h gives 2.03 × 10⁷ m; lesson 17's moon at 4.2 × 10⁸ m (1.52 × 10⁵ s).
- **Cause chain taught, in order:** (1) sideways speed makes the fall miss the curving surface (1, 2); (2) gravity alone acts, perpendicular to v, changing direction not speed (3); (3) GMm/r² = mv²/r gives v = √(GM/r) (4); (4) m cancels: same speed and acceleration for station and contents, so they fall together (5); (5) v at 400 km (6); (6) larger r, weaker pull, smaller v (7); (7) v = 2πr/T gives r³/T² = GM/4π² (8), T at 400 km (9); (8) the ratio depends only on M, checked with the Moon (10).
- **Entry knowledge:** v01 projectile fall, v11 a = v²/r and F = mv²/r, v12 centripetal role, v15 perpendicular force does no work, v17 F = GMm/r² and r = R + h.
- **Learner-visible vocabulary:** orbit (a closed path around a body under gravity, 2); orbital speed (1, 4); period T (time for one lap, 8); apparent weightlessness (floating because everything falls together, 5).
- **Legacy logic ported:** none. The coded `OrbitEnergy` visual (kit family `m5-orbit-energy`) is not used here; the gravity stage from v17 (kit gap 1) carries the orbits.
- **New explainer motion:** **Newton's mountain stage** (kit gap 3: ballistic paths from a launch point above a coded Earth, computed by numerical integration of GM/r², with three launch speeds plus the circular speed; Earth drawn to scale with the plate, the mountain exaggerated and tagged "not to scale"); **tangent-and-fall diagram** (a straight tangent line, the fall bracket and the curve bracket at 1 s); the gravity stage (v17) with orbit circles, a moving satellite and velocity and g arrows; `AlignedAlgebra`; `Countdown`; `QuestionCard`; `Chip` with `cross`; `KeyNotes`.
- **No human figures.** No cannon crew; no astronauts in the cabin; Newton named only.
- **Author notes (not learner copy):**
  (a) Newton's mountain paths: launch height 1,000 km above the surface (r₀ = 7.371 × 10⁶ m, tagged "not to scale"); circular speed there √(GM/r₀) = 7.37 km s⁻¹. Paths shown for 3, 5 and 6.5 km s⁻¹ (landing), then 7.37 km s⁻¹ (circle). Numerical paths, no numbers narrated.
  (b) d²/2R at d = 8,000 m: 64 × 10⁶ / 1.2742 × 10⁷ = 5.02 m. √(GM/R) = 7,925.6 m s⁻¹ (a surface-level orbit, ignoring air and terrain).
  (c) ISS: NASA "Space Station Facts and Figures" (nasa.gov) gives about 90 minutes per orbit and about 16 orbits a day; actual altitude varies around 400 to 420 km. The 400 km model gives 92.2 min; at 420 km, 92.6 min.
  (d) Moon: NASA Moon Fact Sheet (nssdc.gsfc.nasa.gov/planetary/factsheet/moonfact.html): semimajor axis 384,400 km, sidereal period 27.3217 days, eccentricity 0.0549. The 0.6 % gap comes from the rounded central mass M_E = 6.0 × 10²⁴ kg (true 5.972 × 10²⁴), the Moon's mass not being negligible (1.2 % of Earth's; the full two-body form uses M + m) and perturbations from the Sun (the Earth and Moon are not an isolated pair). Revision 2: the earlier "slightly elliptical orbit" reason is removed, because the semimajor axis already accounts for the ellipse (brief 188 optional finding). Narration says "within one per cent".
  (e) Low orbits lose energy slowly to residual air drag and need occasional reboosts (site "Analyse 5 marks"); not narrated (no drag is a stated model condition).
  (f) Pronunciations: "v equals the square root of big G M over r"; "r cubed over T squared equals big G M over four pi squared"; "seven point six nine times ten to the three".

- **Open decisions for root:**
  - **1. Newton's mountain stage (root).** Uses the course launcher plates rather than a new cannon plate. Revision 2: settled by root decision 16; both launcher plates are delivered and inspected.
  - **2. Weightlessness beat (learning review).** Scene 5 (about 30 s). If the review finds it a detour, cut the last three sentences (about 200 characters) and keep the mass-independence sentence; the narration would then fall to about 5,400 characters, so add a short sentence elsewhere (for example a second line in scene 2) to stay above 5,500.
  - **3. Moon plate (root).** Revision 2: settled; `y12p-moon-v1.png` is delivered (brief 188) and inspected.
  - **4. Formula sheet forms (physics check).** Confirm the HSC formula sheet prints v = 2πr/T and r³/T² = GM/4π² as used here (the syllabus lists them).

Main question: *A satellite 400 km up is in a field of 8.7 N kg⁻¹, yet it doesn't fall to the ground. How does gravity keep it on a circle, and what decides its speed and period?*
Entry knowledge: v01, v11, v12, v15, v17 as above.
Stops after: v = √(GM/r), v = 2πr/T, r³/T² = GM/4π² for circular orbits; free fall explains floating; the Moon check. No geostationary orbits, ellipses or energy.
Handoff: v19, what makes an orbit geostationary.

## Script and shots

Cue words in **bold** trigger the visual change. Screen symbols in italic: *v*, *r*, *T*, *G*, *M*, *m*. Paper background and handwritten headline face as the explainer house style.

### 1. hook (Newton's mountain)
> Imagine a launcher on top of a mountain so tall it pokes right out of the air. Fire a ball sideways, and it curves down and hits the ground a little way **off**. Fire it faster, and it lands further **round** the planet. Newton asked this over three hundred years ago: what happens if you keep firing it faster and faster? Have a **think**.

Visual: opens on v17's final frame exactly (see "Opening frame": the Earth plate, the satellite plate at 400 km, the navy r line, the violet g arrow, the dashed teal tangent arrow "v = ?" and the faint dashed circle). The satellite, its arrows and the dashed circle fade, leaving the painted Earth (`phys-y11-earth-v1.png`, about 520 px across). Newton's mountain stage (kit gap 3): a coded mountain grows from the top of the Earth plate far above a thin pale atmosphere band (grey tag "not to scale", 30 px, full opacity), and the painted launcher (`y12p-launcher-base-v1.png` with `y12p-launcher-barrel-v1.png` set level, delivered and inspected, scaled uniformly) sits on its peak; the steel ball plate (`phys-y11-steel-ball-v1.png`) shows at the muzzle in a small zoom circle, then becomes a coded dot at stage scale. The live launch-speed control sits at the right (see "Simulation"): a slider with readouts (52 px) teal "launch speed" and navy "lands: distance round Earth". On "off" the slider sits at 3 km s⁻¹ and the ball draws a short teal path down to the ground, readout "lands about 1,600 km round". On "round" the slider moves to 5 km s⁻¹ (readout "about 3,300 km round", a twelfth of the way round), then to 6.5 km s⁻¹ ("about 7,000 km round", a sixth of the way); each earlier path stays, thinner. Hand tags (30 px): teal "faster", navy "further round", and a navy pen ring round the three landing points. On "think" the 3 s `Countdown` runs beside "Faster and faster: then what?" with three option chips (36 px) "lands even further", "goes all the way round", "flies off".

### 2. falling around, not into
> Here's the trick. In its first second, any projectile falls about four point nine metres. And Earth's surface curves away below a straight line by about five metres over the first eight kilometres you **travel**. So a ball launched sideways at about eight kilometres per second falls five metres in that first second, and the ground drops away five metres too. By then its direction has turned a little, so the next second starts along a new straight line, and the same thing happens again. It keeps falling, and it keeps **missing**. That's an **orbit**, falling around Earth, not into it.

Visual: camera push to an inset at the launch point (a new stage, the mountain small behind it): a straight dashed tangent line runs 8 km from the ball; a grey bracket from the tangent down to Earth's curve at 8 km reads "surface drops 5.0 m"; a blue bracket from the tangent to the ball's position at 1 s reads "ball falls 4.9 m in its first second" (v01's fall). On "travel" both brackets pulse side by side (labels 36 px), tags "8 km in 1 s = 8 km s⁻¹" and grey "no air". As "the next second starts along a new straight line" is spoken, the ball's teal velocity arrow has turned a little and a second dashed tangent draws from its new position with its own pair of brackets "4.9 m" and "5.0 m", tag "each second: measured from a new straight line"; the first tangent fades. On "missing" the inset closes and the slider reaches 7.37 km s⁻¹ (the circular speed at the mountain's height): the launch draws a full teal circle round Earth back to the launcher, readout "lands: never (a circle)". On "orbit" the heading writes on: "How does gravity maintain a circular orbit?" and a chip "orbit: falling around, not into". Hand tags: grey "the ground curves away", blue "falls 4.9 m", and a navy pen ring round the two equal brackets.

### 3. gravity is the inward resultant
> Once it's moving, the only force on it is gravity, pointing to Earth's centre. In a circular orbit, that force is always at right angles to the velocity. As we saw with circular motion, a sideways force like that changes the velocity's direction but not its **speed**, and it does no work. So gravity is the inward resultant force. Centripetal force isn't an extra force here, it's the job gravity is **doing**. So a satellite doesn't need its engines running to stay up.

Visual: camera continue; the mountain fades; the satellite plate (`y12p-satellite-v1.png`, delivered and inspected, about 40 px) replaces the ball on the circle and moves round it. At its position a teal velocity arrow "v" along the tangent and an amber force arrow "F = GMm/r²" towards the centre, with a right-angle mark between them. On "speed" three snapshots around the circle hold equal teal arrows turning direction, tag "same length, new direction". On "doing" a chip "centripetal force" slides onto the amber arrow and settles as its label, "gravity plays the centripetal role"; a red crossed chip "engines needed to stay up" appears; a model box writes in the right column (30 px): "circular orbit; spherical Earth; m much smaller than M; no thrust; no air drag; r from the centre". Hand tags: teal "same speed", amber "only force: gravity", and an amber pen ring round the right-angle mark.

### 4. the orbital speed
> That gives us the orbital speed. For a circle of radius r, the inward force needed is m v squared over r. Gravity supplies big G M m over r squared. In a stable circular orbit, they're **equal**. The satellite's mass m is on both sides, so it **cancels**. Multiply both sides by r, and v squared equals big G M over r. So v equals the square root of big G M over **r**, with r measured from Earth's centre.

Visual: camera push to the right column (the orbit stage shrinks to a thumbnail at the left, its teal and amber arrows kept). `AlignedAlgebra`, one line at a time (current line 52 px, earlier lines 34 px): "needed: F = mv²/r" (v in teal), "supplied: F = GMm/r²" (amber). On "equal" "GMm/r² = mv²/r". On "cancels" both m's strike through, red hand tag "m cancels". Then "GM/r = v²" (with "× r" in grey). On "r" "v = √(GM/r)" in a dark-ink frame (60 px), tag "depends only on M and r". Hand tags: amber "gravity = the force needed", navy "r from the centre", and a navy pen ring round the r under the root.

### 5. same speed for everything: free fall
> Because m cancelled, the orbital speed doesn't depend on the satellite's mass. A space station and a spanner at the same radius need exactly the same speed, and they have the same acceleration towards **Earth**. That's why loose objects float inside a station. The station and everything in it fall together, so nothing presses on the **floor**. They aren't free of gravity, they're in free **fall**.

Visual: clear change: the painted space station (`y12p-space-station-v1.png`, 2172 × 724, inspected, scaled uniformly to about 420 px wide; no crew drawn) moves along its orbit arc around a partial Earth plate, then the camera pushes into a coded cutaway of its middle module (grey walls, a floor line) with the spanner plate (`y12p-spanner-v1.png`, delivered and inspected, about 120 px) floating inside. On "Earth" two violet arrows of equal length, one from the module and one from the spanner, both "a = g = 8.7 m s⁻²", point towards Earth's centre; live readouts (52 px) "module: a = 8.73 m s⁻²" and "spanner: a = 8.73 m s⁻²" hold equal as the module moves along its arc and the spanner keeps the same place relative to the floor. On "floor" a grey "normal force?" arrow at the floor is drawn as an outline and crossed, tag "no push from the floor". On "fall" a chip "zero gravity" fades in and is crossed in red; replacement chip "apparent weightlessness: free fall together". Hand tags: violet "same a", grey "falls with it", and a violet pen ring round the two equal arrows.

### 6. worked example: speed at 400 km
> Let's find the speed of a satellite four hundred kilometres up, about where the space station orbits. First, r from the centre: six point three seven one plus zero point four zero zero gives six point seven seven one times ten to the six **metres**. Then v is the square root of four point zero zero two times ten to the fourteen, over that radius. That's about seven point six nine times ten to the three metres per **second**, nearly seven point seven kilometres every second.

Visual: clear change to full-width working, the gravity stage small at the left (satellite at 400 km, true scale). Task strip (36 px): "Find the orbital speed at 400 km altitude." Equation strip: "v = √(GM/r)". Givens grouped in one navy box (32 px): "G = 6.67 × 10⁻¹¹ N m² kg⁻²", "M = 6.0 × 10²⁴ kg", "R = 6.371 × 10⁶ m", "h = 4.00 × 10⁵ m". On "metres" "r = R + h = 6.771 × 10⁶ m" (52 px) and the navy r line lights. Then "GM = 4.002 × 10¹⁴". On "second" "v = √(4.002 × 10¹⁴ / 6.771 × 10⁶) = √(5.911 × 10⁷)" and "= 7.69 × 10³ m s⁻¹" in a dark-ink frame (52 px); the teal arrow on the stage reads "7.69 km s⁻¹". A chip "v = GM/r = 5.91 × 10⁷ m s⁻¹" fades in and is crossed (red tag "take the square root"). Hand tags: navy "r = R + h", teal "about 7.7 km every second", and a navy pen ring round "6.771 × 10⁶ m".

### 7. higher means slower
> Notice r is on the bottom. A higher orbit has a weaker pull, so it needs less speed to **match** it. Four times the radius, and the speed **halves**. That surprises a lot of people: the satellites furthest out are the slowest ones. The Moon, way out, moves at only about one kilometre per second.

Visual: camera change to the gravity stage, Earth scaled down to fit (true scale), and the live orbit-radius control starts (see "Simulation"): a satellite rides outward on a slider from the 400 km circle to four times that radius, its circle redrawn at each step, with readouts (52 px) navy "r", teal "v = √(GM/r)" and violet "g = GM/r²" (6.771 × 10⁶ m: 7.69 km s⁻¹, 8.73 N kg⁻¹; 1.0 × 10⁷ m: 6.33, 4.00; 1.5 × 10⁷ m: 5.17, 1.78; 2.0 × 10⁷ m: 4.47, 1.00; 2.708 × 10⁷ m: 3.84 km s⁻¹, 0.546 N kg⁻¹), the teal arrow shortening and the violet arrow shrinking as it goes. On "match" the violet arrow at the outer satellite is one sixteenth as long as at 400 km, tag "g ÷ 16". On "halves" the inner circle returns beside the outer one with teal arrows "7.69 km s⁻¹" (inner) and "3.84 km s⁻¹" (outer) and a dark-ink frame "4r → v ÷ 2 (v ∝ 1/√r)" (52 px); a small inset Moon plate (`y12p-moon-v1.png`) on its far circle reads "Moon: 1.02 km s⁻¹". Hand tags: teal "higher = slower", violet "weaker pull", and a teal pen ring round "3.84 km s⁻¹".

### 8. one lap: the period
> How long does one lap take? In one period, T, the satellite travels one circumference, so v equals two pi r over **T**. Put that into the force equation, and with a little rearranging, r cubed over T squared equals big G M over four pi **squared**. That's the circular-orbit form of Kepler's third law.

Visual: camera change back to the 400 km circle (Earth plate large): one lap traces in teal with a clock readout (52 px) counting "T". On "T" the right column writes "v = 2πr / T" (the circumference "2πr" labelled on the circle in navy). Then `AlignedAlgebra` (current line 52 px): "GM/r² = v²/r = (2πr/T)²/r", "GM/r² = 4π²r/T²". On "squared" "r³/T² = GM/4π²" in a dark-ink frame (60 px), tag "circular orbits; Kepler's third law (more in v20)". Hand tags: navy "one lap = 2πr", grey "one period", and a navy pen ring round "r³".

### 9. worked example: the period at 400 km
> For our satellite, T is two pi r over v: two pi times six point seven seven one times ten to the six, over seven thousand six hundred and eighty-eight. That's about five thousand five hundred and thirty **seconds**, or ninety-two **minutes**, around sixteen laps a day. NASA quotes about ninety minutes for the space station, so the model works **well**.

Visual: clear change to full-width working, kept results at the top (34 px) "r = 6.771 × 10⁶ m" and "v = 7.688 × 10³ m s⁻¹". Task strip: "Find the period at 400 km." `AlignedAlgebra` (52 px): "T = 2πr / v = 2π × 6.771 × 10⁶ / 7.688 × 10³"; on "seconds" "= 5.53 × 10³ s"; on "minutes" "÷ 60 = 92.2 min" in a dark-ink frame (52 px), and "86,400 ÷ 5,534 ≈ 15.6 laps a day". A chip "T = 5.53 × 10³ min" fades in and is crossed (red tag "seconds, not minutes"). On "well" a grey source chip "NASA: about 90 min per orbit, about 16 orbits a day". Hand tags: grey "÷ 60", navy "kept from the speed", and a grey pen ring round "92.2 min".

### 10. one constant for every satellite
> Here's the powerful part. The right-hand side has only big G and Earth's mass, so r cubed over T squared is the same for everything orbiting Earth. Try the Moon: about three hundred and eighty-four thousand kilometres away, going round once every twenty-seven point three **days**. Its r cubed over T squared comes out within one per cent of the satellite's **value**. Two orbits that look nothing alike, one shared **constant**.

Visual: camera pull back far: Earth small, the satellite circle a sliver around it, the Moon plate (`y12p-moon-v1.png`, delivered and inspected) on a large dashed circle (true scale). A two-row table writes at the right (36 px): "satellite: r = 6.771 × 10⁶ m, T = 5.534 × 10³ s, r³/T² = 1.014 × 10¹³ m³ s⁻²" and on "days" "Moon: r = 3.844 × 10⁸ m, T = 27.32 d = 2.361 × 10⁶ s". On "value" "r³/T² = 1.019 × 10¹³ m³ s⁻²" and a bracket joins the two values, "within 1 %". On "constant" a third row "GM/4π² = 1.014 × 10¹³ m³ s⁻²" in a dark-ink frame (52 px); source chip "Moon data: NASA Moon Fact Sheet". Hand tags: navy "same Earth, same constant", grey "27.3 days", and a navy pen ring round the "within 1 %" bracket.

### 11. memory aid
> Here's the pattern to remember: gravity is the centripetal force. Write gravity equal to m v squared over r, cancel the m, and everything about a circular orbit follows, the speed, the period, and the constant ratio. And remember what an orbit is: falling around, not falling **down**.

Visual: board clears to a three-step strip (44 px): "1. GMm/r² = mv²/r", "2. cancel m → v = √(GM/r)", "3. v = 2πr/T → r³/T² = GM/4π²". The handwritten line writes large above it in a framed memory card (hand lettering, amber and navy, 52 px; the same card is reused on the notes screen): "Gravity is the centripetal force: set them equal, cancel m." On "down" a small orbit sketch with a falling-and-missing teal arrow and the card's second line "Falling around, not falling down." Hold about 2 seconds.

### 12. attempt 1 (countdown, 10 seconds)
> Your turn. A space telescope orbits five hundred and forty-seven kilometres above Earth's surface. Assuming a circular orbit, calculate its orbital speed, and its period in minutes. Use the data sheet values for Earth. Pause here to answer.

Visual: `QuestionCard` (subject "Physics") arrives with its full text in one move (question text 36 px), worded as printed: "A space telescope orbits Earth at an altitude of 547 km. Assume a circular orbit. (a) Calculate its orbital speed. (b) Calculate its orbital period in minutes. (G = 6.67 × 10⁻¹¹ N m² kg⁻², M_E = 6.0 × 10²⁴ kg, R_E = 6.371 × 10⁶ m)" The full question stays on screen with a small satellite plate beside it. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 1 (brief)
> First, r equals six point three seven one plus zero point five four seven, which is six point nine one eight times ten to the six **metres**. Then v is the square root of big G M over r, about seven point six one times ten to the three metres per second. T is two pi r over v, about five thousand seven hundred seconds, or ninety-five **minutes**. The classic slip is using five hundred and forty-seven kilometres as **r**.

Visual: card shrinks to the top; "altitude" underlines. Rows (44 px): on "metres" "r = R + h = 6.371 × 10⁶ + 0.547 × 10⁶ = 6.918 × 10⁶ m"; "v = √(4.002 × 10¹⁴ / 6.918 × 10⁶) = 7.61 × 10³ m s⁻¹" in a dark-ink frame (52 px); on "minutes" "T = 2πr / v = 5.71 × 10³ s = 95.2 min" in a dark-ink frame. On "r" a chip "r = 5.47 × 10⁵ m" fades in and is crossed (caption "that's the altitude"). Hold about 1 second.

### 14. attempt 2 (countdown, 10 seconds)
> Last one. Satellite Y orbits Earth at four times the orbital radius of satellite X. Both orbits are circular. How do Y's orbital speed and period compare with X's? Pause here to answer.

Visual: `QuestionCard` arrives with its full text in one move (question text 36 px), worded as printed: "Satellites X and Y are in circular orbits around Earth. The orbital radius of Y is four times the orbital radius of X. Compare the orbital speed and the orbital period of Y with those of X. Justify your answers." Two coded circles (radii r and 4r, no speeds shown) sit beside the card. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 15. feedback 2 (brief)
> Speed goes as one over the square root of r, so four times the radius gives half the **speed**. Now the period. Y's lap is four times longer, and it moves at half the speed, so it takes eight times as **long**. The slip to avoid is saying four times as long, just because the radius is four times **bigger**.

Visual: card shrinks to the top. Rows (44 px): on "speed" "v = √(GM/r): v_Y = v_X / √4 = v_X / 2" in a dark-ink frame (52 px); on "long" "lap 2π(4r) = 4 × lap; speed ÷ 2 → T_Y = 8 T_X" in a dark-ink frame, with a check row "r³/T² constant: T ∝ r^1.5, 4^1.5 = 8". On "bigger" a chip "T_Y = 4 T_X" fades in and is crossed. Hold about 1 second.

### 16. handoff
> So gravity holds a satellite in orbit by bending its path, and the radius fixes both its speed and its period. That means if you choose the period, you've chosen the radius. Which period would let a satellite keep pace with Earth's spin, so it hangs over one spot? That's **next**.

Visual: board clears to the gravity stage: the Earth plate with a curved grey rotation arrow at its equator "Earth turns once a day"; the 400 km satellite plate circling quickly on its small circle; a large dashed circle further out with a second satellite plate on it and a chip "T = 24 h → r = ?". On "next" a chip writes "Next: what makes an orbit geostationary rather than merely near Earth?". Hold about 2 seconds. This is the final frame.

### 17. key notes (quiet, hold about 50 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. An orbit is falling around, not into: gravity is the only force.
2. Gravity plays the centripetal role: GMm/r² = mv²/r.
3. v = √(GM/r): m cancels, higher is slower, r = R + h.
4. v = 2πr/T, so r³/T² = GM/4π² for every satellite of one body.
5. Floating in orbit is free fall together, not zero gravity.

Memory aid (framed card under the notes, hand lettering, amber and navy as in scene 11): *Gravity is the centripetal force: set them equal, cancel m.* Second line in the card: *Falling around, not falling down.* Notes in the role colours, 32 px; about 290 characters of bullet text; no paragraphs.

## Teaching checks

- **Does it explain causes?** Why the ball misses the ground: it falls 4.9 m per second while the surface curves 5 m per 8 km (2). Why the speed stays constant: gravity is perpendicular to v (3). Why v depends only on M and r: m cancels (4). Why objects float: equal accelerations, no floor push (5). Why higher is slower: weaker pull to match (7). Why the Moon shares the satellite's constant: the ratio holds only G and M (10). Why T increases eight times for four times r: a four times longer lap at half the speed (15).
- **Misconceptions addressed:** satellites need thrust to stay up (3); heavier satellites orbit more slowly (5); zero gravity in orbit (5); r from the surface (6, crossed in 13); higher orbits are faster (7); T scales like r (crossed in 15); centripetal force as an extra force (3).
- **One idea at a time:** the thought experiment (1, 2) before forces (3), the equation (4) before its consequences (5 to 7), the period (8, 9) before the constant (10).
- **Video makes it easier:** paths curving further round until one closes (1, 2); equal speed arrows turning (3); m striking through (4); the spanner staying still relative to the floor (5); the Moon circle at true scale with its ratio matching (10).
- **Response opportunity:** prediction (3 s); two unseen tasks, 10 s each; feedback about 30 s and 21 s.
- **Avoided double teaching:** v01, v11, v12, v15 and v17 results recalled in a clause each.
- **Syllabus coverage:** `P5-IQ3-02` gravitational force, centripetal force and acceleration, mass, radius, velocity, period (3 to 10); `P5-IQ3-04` v = 2πr/T and r³/T² = GM/4π² for circular orbits (8 to 10); non-circular orbits in v20.
- **Out of scope by design:** geostationary orbits and uses (v19); ellipses (v20); energy (v21 to v23).

## Practice questions and model answers

**Attempt 1 (scene 12; original wording, site data with 547 km as a given exercise altitude, 3 marks suggested).** "A space telescope orbits Earth at an altitude of 547 km. Assume a circular orbit. (a) Calculate its orbital speed. (b) Calculate its orbital period in minutes. (G = 6.67 × 10⁻¹¹ N m² kg⁻², M_E = 6.0 × 10²⁴ kg, R_E = 6.371 × 10⁶ m)"
Model answer: r = R + h = 6.918 × 10⁶ m. (a) v = √(GM/r) = √(4.002 × 10¹⁴ / 6.918 × 10⁶) = 7.61 × 10³ m s⁻¹. (b) T = 2πr/v = 5.71 × 10³ s = 95.2 min. Classic mistake (crossed): r = 5.47 × 10⁵ m.

**Attempt 2 (scene 14; original, 3 marks).** "Satellites X and Y are in circular orbits around Earth. The orbital radius of Y is four times the orbital radius of X. Compare the orbital speed and the orbital period of Y with those of X. Justify your answers."
Model answer: v = √(GM/r), so v ∝ 1/√r and v_Y = v_X/2. T = 2πr/v: Y's circumference is four times X's and its speed half, so T_Y = 8T_X (equivalently r³/T² constant gives T ∝ r^1.5 = 4^1.5 = 8). Classic mistake (crossed): T_Y = 4T_X.

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Constants | G = 6.67 × 10⁻¹¹; M_E = 6.0 × 10²⁴ kg; R_E = 6.371 × 10⁶ m; GM = 4.002 × 10¹⁴ m³ s⁻² | throughout |
| Fall and curve | ½ × 9.8 × 1² = 4.9 m; 8,000² / (2 × 6.371 × 10⁶) = 5.02 m; √(GM/R) = 7.93 km s⁻¹ ("about eight") | 2 |
| Mountain stage | launch at r₀ = 7.371 × 10⁶ m (not to scale); circular speed 7.37 km s⁻¹; landing arcs (Revision 2 readouts): 3 km s⁻¹: 14.4°, 1,595 km ("about 1,600"); 5 km s⁻¹: 30.0°, 3,336 km ("about 3,300", a twelfth); 6.5 km s⁻¹: 63.3°, 7,038 km ("about 7,000", a sixth) | 1, 2 |
| 400 km speed | r = 6.771 × 10⁶ m; GM/r = 5.911 × 10⁷; v = 7,688 m s⁻¹ ≈ 7.69 × 10³ | 6, 7, 9 |
| g at 400 km | 8.73 m s⁻² ("8.7") | 5 |
| Moon speed | 2π × 3.844 × 10⁸ / 2.3606 × 10⁶ = 1,023 m s⁻¹ ≈ 1.02 km s⁻¹; laps per day 86,400 / 5,534 = 15.6 | 7, 9 |
| Four times radius | r = 2.708 × 10⁷ m; v = 3,844 m s⁻¹ ≈ 3.84 km s⁻¹; g ÷ 16 | 7 |
| Radius slider (Revision 2) | r = 6.771 × 10⁶, 1.0 × 10⁷, 1.5 × 10⁷, 2.0 × 10⁷, 2.708 × 10⁷ m: v = 7.69, 6.33, 5.17, 4.47, 3.84 km s⁻¹; g = 8.73, 4.00, 1.78, 1.00, 0.546 N kg⁻¹ | 7 |
| Crossed slips (Revision 2) | v = GM/r = 5.91 × 10⁷ m s⁻¹ (no root); T = 5.53 × 10³ "min" (seconds read as minutes) | 6, 9 |
| Period at 400 km | 2π × 6.771 × 10⁶ / 7,688 = 5,534 s = 92.2 min | 9, 10 |
| Constant | GM/4π² = 1.0137 × 10¹³ m³ s⁻²; satellite r³/T² = 1.0137 × 10¹³ | 10 |
| Moon (NASA) | r = 3.844 × 10⁸ m; T = 27.3217 d = 2.3606 × 10⁶ s; r³/T² = 1.0193 × 10¹³ (0.55 % above) | 10 |
| A1 (547 km, given) | r = 6.918 × 10⁶ m; v = 7,606 m s⁻¹ ≈ 7.61 × 10³; T = 5,715 s = 95.2 min | 12, 13 |
| A2 | v ÷ 2; T × 8 | 14, 15 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov); Codex to re-check.

- 6.67 × 10⁻¹¹ × 6.0 × 10²⁴ = 4.002 × 10¹⁴. √(4.002 × 10¹⁴ / 6.371 × 10⁶) = 7,925.6 m s⁻¹. 8000² / (2 × 6.371 × 10⁶) = 5.0228 m.
- r = 6.771 × 10⁶ m: v = √(5.9105 × 10⁷) = 7,687.98 m s⁻¹; T = 2π × 6.771 × 10⁶ / 7,687.98 = 5,533.76 s = 92.229 min.
- 4r = 2.7084 × 10⁷ m: v = 3,843.99 m s⁻¹.
- GM/4π² = 4.002 × 10¹⁴ / 39.4784 = 1.01372 × 10¹³. Moon: (3.844 × 10⁸)³ = 5.6800 × 10²⁵; (27.3217 × 86,400)² = (2.36059 × 10⁶)² = 5.5724 × 10¹²; ratio 1.01931 × 10¹³; 1.00552 × the constant.
- A1 (space telescope at 547 km): r = 6.918 × 10⁶ m; v = 7,605.86 m s⁻¹; T = 5,714.95 s = 95.249 min.
- Mountain stage: √(4.002 × 10¹⁴ / 7.371 × 10⁶) = 7,368.5 m s⁻¹. Revision 2 landing arcs for a horizontal launch at r₀ (apoapsis; p = (r₀v)²/GM, e = 1 − p/r₀, landing where p/(1 + e cos θ) = R; arc = π − θ): 3,000 m s⁻¹: e = 0.8342, 14.35°, 1,595 km along the surface; 5,000 m s⁻¹: e = 0.5395, 30.00°, 3,336 km; 6,500 m s⁻¹: e = 0.2218, 63.30°, 7,038 km.
- Revision 2 radius slider: v = √(GM/r) and g = GM/r²: 1.0 × 10⁷ m: 6,326.1 m s⁻¹, 4.002 N kg⁻¹; 1.5 × 10⁷ m: 5,165.3, 1.779; 2.0 × 10⁷ m: 4,473.3, 1.0005; 2.7084 × 10⁷ m: 3,844.0, 0.5456. 400 km: g = 8.729. Crossed slip GM/r at 400 km = 5.9105 × 10⁷.

## Memory aid check

- **"Gravity is the centripetal force: set them equal, cancel m." and "Falling around, not falling down."** From the site's "gravity provides the centripetal force" and "continuous free fall". Meaning, as said in scene 11: write GMm/r² = mv²/r, cancel m, and v, T and the constant follow; an orbit is a fall that keeps missing. Assumptions checked: circular orbit, gravity the only force, M much larger than m (stated in scene 3's model box). For an ellipse gravity is not perpendicular to v and the first line fails (v20). It helps a new case: A1 and A2, and v19's geostationary radius. Introduced after scenes 2 to 10.
- **Considered, not used:** "Higher is slower" alone (true but not a method).

## Narration length estimate


Revision 2 count (6 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed; total = sum of scene strings, which replaces Revision 1's joined count of 5,606): **5,727 characters**, 17 scenes. Characters per scene (1 to 17): 328, 578, 463, 394, 388, 470, 288, 294, 342, 417, 281, 240, 411, 185, 296, 277, 75. At 13.3 characters per second the speech is about 431 s; add about 3 s for the prediction countdown, about 5 s for the launch-speed slider runs and the full circle in scenes 1 and 2, about 3 s for the radius slider in scene 7, about 2 s for the lap trace in scene 8, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the memory-aid hold, 2 s for the handoff hold and about 44 s more of the quiet notes hold (50 s in all; about 83 s of holds and countdowns): **about 514 s**, inside the 5,500 to 7,000 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 5's last three sentences (open decision 2); scene 7's Moon sentence; scene 9's NASA sentence (keep the chip).

## Opening frame


v17's final frame exactly (`phys-y12-m5-v17.md` "Final frame", Revision 2): paper background; the Earth plate (`phys-y11-earth-v1.png`, about 520 px across, Australia facing) at the centre-left; the satellite plate (`y12p-satellite-v1.png`, about 40 px) at 400 km above Australia (true scale); a navy line from Earth's centre to the satellite, "r = 6.771 × 10⁶ m"; a violet arrow from the satellite towards the centre, "g = 8.73 N kg⁻¹"; a dashed teal tangent arrow from the satellite, "v = ?" (Revision 2: teal, matching v17's repaired final frame and root decision 10); a faint dashed circle of radius r around Earth; heading "How does gravity vary with mass and distance from a spherical body?"; chip "Next: how does gravity maintain a circular orbit?". Scene 1 fades the satellite and its arrows and grows the mountain; the heading changes in scene 2.

## Final frame

The last explained frame (end of scene 16): paper background; the Earth plate at the centre-left with a curved grey rotation arrow at the equator, "Earth turns once a day"; the satellite plate on the small 400 km circle (moving, fast); a large dashed circle further out (drawn at about the geostationary radius, about 6.6 Earth radii, Earth scaled to fit) with a second satellite plate on it and a chip "T = 24 h → r = ?"; heading "How does gravity maintain a circular orbit?"; chip "Next: what makes an orbit geostationary rather than merely near Earth?". v19 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m5-v18` (route phys-y12-m5-v18). Suggested explainer folder `src/explainer/lessons/phys-y12-m5-v18`; build folder `docs/production/claude-pm/lessons/p-y12-m5-v18` (root to confirm).

In order (17 scene headings): hook, falling-around, gravity-role, orbital-speed, free-fall, worked-speed, higher-slower, period, worked-period, one-constant, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). `motionTools`: Newton's mountain stage (kit gap 3) with a live launch-speed slider, tangent-and-fall diagram, gravity stage (kit gap 1, v17) with a live orbit-radius slider, `AlignedAlgebra`, `NumberTicker`, `ScribbleCircle`, `PenArrow`, `Countdown`, `CameraStage`. Transitions (Revision 2): 1 to 2 camera push to the inset; 2 to 3 camera continue; 3 to 4 camera push to the column; 4 to 5 clear change to the station; 5 to 6 clear change to full-width working; 6 to 7 camera change to the radius slider; 7 to 8 camera change to the lap stage; 8 to 9 clear change to full-width working; 9 to 10 camera pull back; 10 to 11 clear change; attempts card shrink; 15 to 16 clear change; 16 to 17 fade.

Holds: hook (3 s), attempt-1, attempt-2 (10 s), key-notes (about 50 s). Review evidence paths: `checks/p-y12-m5-v18-learning-review.md`, `checks/p-y12-m5-v18-science-check.md`.

## Assets


Have (inspected 6 Nov with the Read tool; scaled uniformly only, never stretched):
- `public/assets/physics/phys-y11-earth-v1.png` (1254 × 1254, RGBA; anchors in its JSON): scenes 1 to 3, 5 to 10, 16.
- `public/assets/physics/y12p-launcher-base-v1.png` and `y12p-launcher-barrel-v1.png` (1448 × 1086 each, RGBA, with JSONs; delivered in brief 187): scene 1, barrel set level on the base pivot.
- `public/assets/physics/phys-y11-steel-ball-v1.png` (800 × 800, RGBA): the ball at the muzzle, scene 1.
- `public/assets/physics/y12p-satellite-v1.png` (1585 × 992, RGBA; delivered in brief 188): scenes 3, 6 to 10, 12, 16 (and the opening frame).
- `public/assets/physics/y12p-space-station-v1.png` (2172 × 724, RGBA; painted for m7-v14: truss with modules and edge-on solar wings, no crew): scene 5. Inspected: a few pale flecks sit along the top edge of the truss; the build checks the edge on the paper background at 420 px and reports it (no new plate requested).
- `public/assets/physics/y12p-spanner-v1.png` (2172 × 724, RGBA; delivered in brief 187): scene 5.
- `public/assets/physics/y12p-moon-v1.png` (1254 × 1254, RGBA, with JSON centre and radius; delivered in brief 188): scenes 7 and 10.

Need (new plates, Codex): none (Revision 2: the launcher, spanner, satellite and Moon are delivered).

Coded: mountain, atmosphere band, ballistic paths, tangents and brackets, slider and readouts, orbit circles, arrows, module cutaway, algebra, tables, chips, cards, countdowns, notes board.

Kit gaps: 3. **Newton's mountain stage** (numerically integrated paths from a launch point, three sub-orbital speeds and the circular speed, Earth to scale, mountain exaggerated with a "not to scale" tag, a launch-speed slider with live readouts).

## Codex asset brief (Year 12 Physics M5 v18: Moon)


Revision 2 (6 Nov 2026): item 1 (`y12p-moon-v1.png`) was delivered in brief 188 and is accepted at native size. No new plate requests. QA only: check the top edge of `y12p-space-station-v1.png` for pale flecks on the paper background at about 420 px and report; clean the edge only if the flecks show at that size.

## Codex error-check brief

Error-only check:
1. Re-check every value under "Numbers to verify" and every value in narration, screen text, attempts and notes against "Numbers used"; confirm the NASA Moon and ISS figures against the cited pages.
2. Confirm the physics of every learner-visible claim: circular-orbit gravity perpendicular to v, no work, constant speed; v = √(GM/r) with m cancelling; equal accelerations explain floating; v ∝ 1/√r; v = 2πr/T and r³/T² = GM/4π²; the Moon ratio within 1 % (author notes a to e).
3. Confirm the memory aid's assumptions.
4. Confirm every cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
5. Confirm both attempt cards are original, carry every given, and show nothing answer-bearing.
6. Confirm the syllabus quotes match the route JSON exactly and are labelled 2017.
7. Confirm no person, hand, face or body outline is drawn or requested (no crew in the cabin; Newton named only).
8. Confirm no em dash (U+2014) and no U+2061, and Australian spelling.
9. Confirm the narration counts by script.
10. Report the site notes under Decisions to root.

## YouTube metadata (draft)

Title: How Gravity Keeps a Satellite in Orbit: v = √(GM/r) and r³/T² | HSC Physics Module 5

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module5/lesson11.sa.html

Why doesn't a satellite fall down? Newton's mountain shows an orbit is a fall that keeps missing the curving Earth. Derive the orbital speed from gravity and the centripetal force, see why things float in an orbiting station, find the speed and period 400 km up, and check that the Moon shares the same r³/T² as a low satellite. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 5: Advanced Mechanics.
Syllabus content (NSW Physics Stage 6, 2017):
"investigate the orbital motion of planets and artificial satellites when applying the relationships between the following quantities: gravitational force; centripetal force; centripetal acceleration; mass; orbital radius; orbital velocity; orbital period"
"investigate the relationship of Kepler’s Laws of Planetary Motion to the forces acting on, and the total energy of, planets in circular and non-circular orbits using: v = 2πr/T; r³/T² = GM/4π² (ACSPH101)"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Moon and ISS data: NASA. Next: what makes an orbit geostationary.

#HSCPhysics #Physics #Orbits #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (is the 4.9 m and 5 m per 8 km link followable at speed; is the one-sentence algebra in scene 8 enough with the screen lines held; are the attempt cards clean), then the physics check (formula sheet forms, open decision 4) and the Codex error check.
- Judge the Newton's mountain paths and the spanner beat at playback speed.

## Revision 2 (6 Nov 2026)

Brief 188 findings (`checks/p-y12-m5-v18-learning-review.md`, `checks/p-y12-m5-v18-science-check.md`): 0 blocker, 3 should fix, 1 optional.
- **Should fix, S2 (local fall against a fixed tangent).** Resolved: the 4.9 m and 5 m comparison is now made for the first second and the first eight kilometres only; the narration adds that the ball's direction has turned, so the next second starts along a new straight line. Scene 2's visual draws a second tangent with its own brackets and fades the first. The continuous orbit picture is kept. Narration +146 characters in scene 2.
- **Should fix, S12 and question card (547 km presented as Hubble's current altitude).** Resolved: attempt 1 now asks about "a space telescope" at a given altitude of 547 km, so the arithmetic is unchanged and no current-altitude claim is made. Narration, card, Decisions, practice questions and the numbers tables are updated (scene 12, minus 9 characters).
- **Optional, author note (d) (Moon comparison reasons).** Resolved: the "slightly elliptical orbit" reason is removed; the rounded central mass, the Moon's non-negligible mass and the Sun's perturbations remain. No learner change.
- **Should fix, S3 onward (root decision 10 velocity colour).** Resolved: every velocity arrow, launch path and speed readout is teal (scenes 1 to 3, 6 to 8, 11); amber forces and violet g are unchanged; the opening frame now states the dashed teal tangent arrow, matching v17's repaired final frame (root note after brief 188 part 1).

Other repair: scene 1's second launch said "about a sixth of the way around"; the model gives 30° (a twelfth) at 5 km s⁻¹ and 63° (a sixth) at 6.5 km s⁻¹, and the readouts now say so.

Visual upgrade (to `../maths-visual-standard.md` and the build gate):
- Decisions gain "Type sizes", "Anchor", "Simulation" and "Stage changes"; the colour key states teal velocity, full-opacity grey and the red crossed chips.
- Plates: the delivered launcher, satellite, spanner and Moon move to "Have" (all inspected); the existing painted space station (`y12p-space-station-v1.png`) carries scene 5 with a coded cutaway of one module (no crew). Scene 1 already opens on the painted Earth and satellite.
- Live controls: a launch-speed slider on Newton's mountain with live landing-distance readouts (Python: 1,595, 3,336 and 7,038 km for 3, 5 and 6.5 km s⁻¹; a circle at 7.37 km s⁻¹); an orbit-radius slider on the core idea with live r, v and g readouts (scene 7); equal live acceleration readouts on the module and spanner (scene 5).
- Stage changes: ten distinct set-ups in the teaching scenes; scenes 6 and 9 become full-width working; scene 8 is a separate lap stage. No set-up runs past about 60 s.
- Hand tags and a pen mark in role colours in every teaching scene ("faster", "further round", "the ground curves away", "falls 4.9 m", "same speed", "only force: gravity", "m cancels", "gravity = the force needed", "r from the centre", "same a", "falls with it", "r = R + h", "about 7.7 km every second", "higher = slower", "weaker pull", "one lap = 2πr", "one period", "÷ 60", "same Earth, same constant", "27.3 days").
- Framed answers: v = √(GM/r) (4), 7.69 × 10³ m s⁻¹ (6), v ÷ 2 (7), r³/T² = GM/4π² (8), 92.2 min (9), GM/4π² (10) and every feedback result. New crossed slips: v = GM/r without the root (6); seconds read as minutes (9).
- Scene 11 and the notes: the memory aid is a framed card; key notes cut from four dense items (about 495 characters) to five short bullets (about 290 characters); quiet notes hold 60 s to 50 s.
- Question cards arrive with their full text in one move; attempt 2 gains two unlabelled circles.
- Type sizes stated; grey tags at full opacity.

New plate requests: none (QA only: the space station plate's top edge).

Counts: 5,606 (joined) or 5,590 (scene sum) to 5,727 characters (scene sum); about 514 s to about 514 s.
