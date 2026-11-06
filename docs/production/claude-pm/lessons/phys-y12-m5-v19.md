# Year 12 Physics M5 V19: Geostationary and near-Earth orbits. What makes an orbit geostationary rather than merely near Earth? (design)

Status: Revision 2 (6 Nov 2026): brief 188 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 5,630 characters (scene sum; Revision 1 stated 5,628 by the joined convention), 16 scenes, about 508 s, counted by script with the build parser rules (see "Narration length estimate").

Scope: Year 12 Physics (Physics Stage 6, 2017 syllabus), Module 5 (Advanced Mechanics), inquiry question "How does the force of gravity determine the motion of planets and satellites?". Templates as `phys-y12-m5-v17.md`. No pre-design pack exists; the pack work is done here. Site lesson read in full (6 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson11.sa.html`, SHA256 `62b7d2be3790b2adf89c177e71c4be0b7af850d8005f56cdd75c2f88c441ef3e` (recomputed 6 Nov; matches the route), with its "Compare LEO, MEO and GEO" section as the source section. Route entry: `phys-y12-m5-v19`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Compare altitude, period, equatorial plane and direction; connect each class to uses and coverage. Stop before orbit-change energetics." Next: "phys-y12-m5-v20: How do Kepler laws describe circular and elliptical orbits?"

Owner rules applied: as v17 (2017 syllabus quoted exactly; no people, hands, faces or body outlines; the house, roof dish, Earth and satellites are painted plates; the polar-view rotation diagram, orbit planes, tables and strips are coded; every number recalculated in Python with the HSC data sheet constants; real orbital data cited; "Pause here to answer." with a 10 s countdown; brief feedback; Australian spelling; no em dashes). Recalled, not re-taught: v18 (v = √(GM/r), v = 2πr/T, r³/T² = GM/4π², higher is slower; "choosing the period chooses the radius").

Syllabus content (Physics Stage 6 (2017), Module 5; ledger id `P5-IQ3-03`), quoted from the route JSON `syllabusActions`:

- `P5-IQ3-03`: "predict quantitatively the orbital properties of planets and satellites in a variety of situations, including near the Earth and geostationary orbits, and relate these to their uses (ACSPH101)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 54)

**Boundary:** starts on v18's final frame (a fast low satellite and a dashed outer circle "T = 24 h → r = ?"). Teaches: the geostationary requirement as keeping pace with the ground below (period equals Earth's rotation period; sidereal day named once); the radius, altitude and speed from r³/T² = GM/4π²; why the orbit must lie in the equator's plane (every orbit's plane passes through Earth's centre); the eastward direction and the circular shape; geosynchronous versus geostationary; uses (fixed dishes for communications and television, continuous weather imaging) and limits (signal delay, poor polar coverage); low Earth orbits (short period, close imaging, crewed station, low delay, many satellites and tracking dishes); the GPS medium orbit as a midway example. Stops before orbit changes and energy (v22), ellipses (v20).

## Decisions

- **Learner question (route wording kept).** "What makes an orbit geostationary rather than merely near Earth?" The answer, built in order: the satellite moves, but keeps pace with the ground (2); that fixes the period, and the period fixes r, h and v (3, 4); gravity pulls towards Earth's centre, so every orbit's plane passes through it, and only an equatorial orbit stays over one latitude (5); eastward and circular (6); those conditions give fixed dishes and continuous weather views, at a cost in delay and polar coverage (7); low orbits trade the opposite way (8).
- **Hook (site card 3 "appears fixed from the ground"; Australian context).** A painted house (`phys-y11-house-v1.png`) with a fixed roof dish (new `y12p-roof-dish-v1.png`) aimed at one point in a coded sky; a fast dot crosses the sky above it, labelled "space station, 400 km". Prediction with a 3 s countdown.
- **Sidereal day (site card 3 note).** Said once: "twenty-three hours fifty-six minutes, because Earth turns once relative to the stars in that time, but most questions use twenty-four hours." Calculations use 24 h = 8.64 × 10⁴ s as HSC questions and the site do; the sidereal radius (4.222 × 10⁷ m) differs by 0.2 % (author note a).
- **Worked example (site card 3 and the "Predict 6 marks" answer, re-valued).** Data sheet values give r = 4.23 × 10⁷ m, h = 3.59 × 10⁷ m (about 35,900 km), v = 3.08 × 10³ m s⁻¹; the site, with 5.97 × 10²⁴ kg, gives 4.22 × 10⁷ m and 3.07 km s⁻¹.
- **Equatorial plane (site "Critical requirements" and the 6-mark answer's conditions).** Explained causally: gravity points to Earth's centre, so every orbit's plane passes through the centre; a tilted plane carries the satellite north and south of the equator each day. Shown on the side-view Earth plate with a tilted orbit ring and a ground track. "Geosynchronous" named once for the tilted 24 h case (A2).
- **Direction and shape.** West to east; a westward 24 h orbit would pass overhead twice a day (relative angular speed doubled; author note b). Circular so the speed stays constant (the site's "east-west drift" reason).
- **Uses and limits (site card 3, regions list, Q3 model answer).** Television and communications (fixed dishes); weather imaging: Japan's Himawari-9 at 140.7° E above the equator, full-disc images every 10 minutes, used by the Bureau of Meteorology (author note c; root to verify). Limits: signal up and down about 0.24 s (site "~240 ms"); low or absent at high latitudes (beyond about 81° latitude the satellite is below the geometric horizon; author note d).
- **Near Earth (site regions list).** LEO a few hundred kilometres: period about 90 minutes in speech, crosses the sky in minutes; close imaging, a crewed station, low-delay internet constellations; needs many satellites and tracking dishes. Revision 2: the table and key note give the class range 200 to 2,000 km with about 90 to 130 min (88 min at 200 km, 127 min at 2,000 km in the model), because one class-wide "about 90 min" is wrong at the top of the range. GPS medium orbit about 20,200 km and 12 h (site; half a sidereal day) as the in-between example and the A1 case.
- **Memory aid.** "One day, one plane, one way." See "Memory aid check".
- **Attempts.** A1 (site's GPS figure, new wording): period 12.0 h, altitude 2.03 × 10⁷ m. A2 (site's odd-one-out "polar orbit and still appear stationary", rewritten): a 24 h orbit tilted at 30° to the equator; explain why it is not geostationary. Crossed: A1 "stops at r"; A2 "a 24 h period is enough".
- **Colour key (root decisions 2 and 10; Revision 2).** Velocity teal (speed arrows and readouts; previously orange); r navy; altitude grey (full opacity); Earth's rotation grey; the equator a dashed grey line (Revision 2: no longer pale teal, so teal means velocity only); orbit planes navy; framed answers in a dark-ink box; crossed chips and their hand tags red.
- **Type sizes (Revision 2, 1080p):** the current working line at least 44 px (scenes 3, 9 and the feedback rows 52 px); live readouts (scenes 1, 2, 5, 7, 9) about 52 px; the memory card 60 px; supporting lines, givens, table rows and chips 30 to 36 px; hand-font tags at least 30 px; question text 36 px; nothing a student must read below 26 px. All text above the bottom 12% of the frame.
- **Anchor (Revision 2).** Scene 1 is a painted real scene: the house plate with the delivered roof dish (`y12p-roof-dish-v1.png`) and the delivered satellite plate fixed in the northern sky. Scene 7 returns to it; the Earth and satellite plates carry scenes 4, 5, 7 to 9 and 15.
- **Simulation (Revision 2).** The polar-view sync diagram gains a live period control on the core idea (scene 2): a slider sets the satellite's period, the orbit circle resizes, and live readouts show T and the drift past the dish per day (12 h: 360° a day eastward; 20 h: 72° eastward; 24 h: 0°; 30 h: 72° westward; question model with Earth turning once in 24 h). Scene 5 adds a live sub-satellite latitude readout on the tilted ring (30° N to 30° S, then 0°); scene 7 a live signal timer; scene 9 a live lap count on the ground track.
- **Stage changes (Revision 2).** Scene 1 the rooftop; scene 2 the polar view with the slider; scene 3 full-width working; scene 4 the true-scale stage; scene 5 the side view; scene 6 the polar view again; scene 7 the rooftop and inset; scene 8 the three circles and table; scene 9 full-width working. No set-up runs past about 45 s.
- **Handoff.** Scene 15 stretches the GEO circle into a dashed ellipse with Earth at one focus (v20).
- **Site sources used:** lesson 11 vocabulary (geostationary, LEO), card 3 (radius, altitude, requirements, applications, limitations), the regions list, the "Predict 6 marks" answer steps 2 to 6 (scenes 2 to 6), GPS real-world box (scene 8, A1), MC odd-one-out on polar orbits (A2), Q3 model answer (uses, latency, polar coverage, constellations). Not used: the interactive presets (coded table instead).
- **Site notes (for root to log if accepted):**
  1. Lesson 11, "Critical requirements": "All geostationary satellites must orbit at exactly 35,900 km altitude" conflicts with the regions list ("GEO (35,786 km altitude)") and the geostationary summary ("altitude ≈ 35,800 km"). 35,786 km is the standard value (sidereal day, M = 5.972 × 10²⁴ kg); 35,900 km comes from the 24 h approximation. Suggest "about 35,800 km (35,786 km using the sidereal day)" with "exactly" removed.
  2. Lesson 11 GEO card: "Classroom calculations often use 24 h = 86,400 s, which gives essentially the same rounded orbital radius" is fine; the 6-mark answer says the difference "changes the radius by only about 0.3 per cent"; the computed difference is 0.18 % (r ∝ T^(2/3); (86,400/86,164)^(2/3) = 1.0018). Suggest "about 0.2 per cent".
  - Checked and correct: r³ = 7.53 × 10²² m³ (site constants), r = 4.22 × 10⁷ m, v = 3.07 × 10³ m s⁻¹; GPS 11 h 58 min = half a sidereal day; latency ~240 ms.
- **Cause chain taught, in order:** (1) the satellite moves but the ground moves with it (2); (2) so T = Earth's rotation period (2); (3) T fixes r through r³/T² = GM/4π², hence h and v (3, 4); (4) gravity pulls towards Earth's centre, so every orbital plane passes through the centre and a tilted orbit swings north and south; only the equatorial plane stays put (5); (5) eastward and circular to keep pace exactly (6); (6) a fixed position allows fixed dishes and continuous views; the large distance causes delay and the equatorial position limits polar coverage (7); (7) low orbits are close and fast, so they image well with low delay but pass quickly and need many satellites (8).
- **Entry knowledge:** v18's orbit relations; Year 11 waves are not needed (signal speed 3.0 × 10⁸ m s⁻¹ is given on screen).
- **Learner-visible vocabulary:** geostationary (stays above one point on the equator, 6); sidereal day (one turn relative to the stars, 2); equatorial plane (5); geosynchronous (24 h period, not necessarily equatorial, 5); low Earth orbit (8).
- **Legacy logic ported:** none.
- **New explainer motion:** **polar-view sync diagram** (kit gap 4: a coded top-down Earth disc seen from above the North Pole, rotating once per scene cycle, a ground marker, and a satellite on an orbit circle with its line to the marker staying aligned when T matches; a second satellite with a different period drifting); **tilted orbit ring** on the side-view Earth plate (projected circle with front and back halves, ground track tracing north and south); the gravity stage (v17); `AlignedAlgebra`; a comparison table that fills by row; `Countdown`; `QuestionCard`; `Chip` with `cross`; `KeyNotes`.
- **No human figures.** "Crewed station" is text only; no crew drawn.
- **Author notes (not learner copy):**
  (a) T = 86,400 s: r = (GMT²/4π²)^(1/3) = 4.2298 × 10⁷ m, h = 3.5927 × 10⁷ m, v = 3,076 m s⁻¹. T = 86,164 s (NASA Earth Fact Sheet sidereal rotation 23.9345 h): r = 4.2220 × 10⁷ m, h = 3.5849 × 10⁷ m. With the true M_E = 5.972 × 10²⁴ kg and the sidereal day the standard altitude is 35,786 km.
  (b) Relative to the ground, a westward satellite with T = 24 h turns at 2ω, so it returns overhead every 12 h.
  (c) Himawari-9: Japan Meteorological Agency geostationary satellite at 140.7° E, full-disc imagery every 10 minutes, used operationally by the Australian Bureau of Meteorology. Revision 2: verified in brief 188 against JMA and BoM primary pages (science check), so the named wording stays.
  (d) The satellite is on the geometric horizon where cos λ = R/r = 6.371/42.30 = 0.1506, λ = 81.3° (at the satellite's longitude); practical limits are lower (about 70°, site). Narration: "very low on the horizon, or can't be seen at all".
  (e) Delay: 2 × 3.59 × 10⁷ / 3.0 × 10⁸ = 0.240 s straight up and down; real paths are longer.
  (f) ISS: about 90 min per orbit (NASA); GPS: about 20,200 km, two orbits a day (gps.gov "Space Segment"; root to confirm the link, which returned 404 on 6 Nov).

- **Open decisions for root:**
  - **1. Roof dish plate (root).** Revision 2: settled; `y12p-roof-dish-v1.png` is delivered (brief 188) and inspected.
  - **2. Himawari detail (root).** Revision 2: settled; the brief 188 science check verified the Himawari and GPS facts from primary agency sources.
  - **3. Sidereal sentence (learning review).** Revision 2: settled; brief 188 asked to keep it, because it separates the real condition from the question approximation. Scene 6's checklist now matches it.

Main question: *A rooftop dish points at one fixed spot in the sky, yet every satellite must keep moving to stay in orbit. What makes a satellite hang over one spot, and how does that differ from an orbit near Earth?*
Entry knowledge: v18.
Stops after: GEO period, radius, altitude, speed, plane, direction, shape; uses and limits; LEO and GPS contrasts. No energy, no ellipses.
Handoff: v20, Kepler's laws for circular and elliptical orbits.

## Script and shots

Cue words in **bold** trigger the visual change. Paper background and handwritten headline face as the explainer house style.

### 1. hook (one fixed spot)
> Look at the dish on this roof. It's pointed at one fixed spot in the sky, and it never has to move. Here in Australia, dishes like this point north, towards the equator. Yet the space station races across the same sky in a few **minutes**. Every satellite has to keep moving to stay in orbit, so how can one seem to hang over the same spot all day? Have a **think**.

Visual: opens on v18's final frame (see "Opening frame"); camera zooms down onto Australia and cuts to a ground view looking west (north to the right): the painted house (`phys-y11-house-v1.png`, 1774 × 887, inspected) on a coded ground line under a pale coded sky, and the painted roof dish (`y12p-roof-dish-v1.png`, delivered and inspected, scaled uniformly, its base plate on the right slope of the roof) aimed up to the right; a thin dashed navy line runs from the dish to the satellite plate (`y12p-satellite-v1.png`, about 30 px) fixed in the northern sky, tag "north". On "minutes" a bright dot crosses the sky from west to east in about 3 s, tag "space station: 400 km, about 90 min per orbit"; a sky clock readout (52 px) runs "1 h, 2 h, 3 h" while the dish line and the fixed satellite stay still. Hand tags (30 px): navy "never moves", grey "races across", and a navy pen ring round the fixed satellite. On "think" the 3 s `Countdown` runs beside "How can a satellite stay over one spot?" with three option chips (36 px) "it doesn't move", "it moves with Earth", "it hovers on thrust".

### 2. keeping pace with the ground
> The satellite does move. The trick is that the ground under it moves too. Earth turns once a day, so if the satellite goes round once a day, in the same direction, it keeps pace with the spot below **it**. So the first requirement is a period equal to Earth's rotation period. That's actually twenty-three hours fifty-six minutes, because Earth turns once relative to the stars in that time, but most questions use twenty-four **hours**.

Visual: clear change to the polar-view sync diagram (kit gap 4): a coded Earth disc seen from above the North Pole (tag "view from above the North Pole"), rotating anticlockwise once per cycle; a ground marker on its rim "dish"; a satellite plate on a circle, joined to the marker by a navy line. The live period control sits at the right (see "Simulation"): a slider for the satellite's period with readouts (52 px) grey "T" and navy "drift past the dish" (12 h: 360° a day eastward; 20 h: 72° a day eastward; 30 h: 72° a day westward), the circle resizing and the navy line swinging round as the slider moves (tag "question model: Earth turns once in 24 h"). On "it" the slider settles on 24 h: the satellite and the marker turn together, the navy line never changing direction, readout "drift: 0° a day"; a second, faint satellite on a smaller circle (the 400 km one) laps ahead several times, tag "faster: drifts". Heading writes on: "What makes an orbit geostationary rather than merely near Earth?". On "hours" a chip "T = Earth's rotation period: 23 h 56 min (sidereal); questions use 24 h = 8.64 × 10⁴ s". Hand tags: navy "keeps pace", grey "same direction", and a navy pen ring round "drift: 0° a day".

### 3. the period fixes the radius
> Last time, we saw that choosing the period chooses the radius. Rearrange r cubed over T squared equals big G M over four pi squared, and r cubed equals big G M T squared over four pi **squared**. With T as twenty-four hours, which is eight point six four times ten to the four seconds, r cubed is about seven point five seven times ten to the twenty-two. Take the cube root, and r is about four point two three times ten to the seven **metres** from Earth's centre.

Visual: camera push to full-width working, the polar diagram small at the left. Task strip (36 px): "Find the radius of a geostationary orbit." Equation strip: "r³/T² = GM/4π²". Givens grouped in one navy box (32 px): "T = 24 h = 8.64 × 10⁴ s", "G = 6.67 × 10⁻¹¹ N m² kg⁻²", "M = 6.0 × 10²⁴ kg". On "squared" "r³ = GMT²/4π²" (52 px). Then "r³ = (4.002 × 10¹⁴ × (8.64 × 10⁴)²) / 39.48 = 7.57 × 10²² m³". On "metres" "r = ∛(7.57 × 10²²) = 4.23 × 10⁷ m" in a dark-ink frame (52 px), tag "from Earth's centre". A chip "T = 24 → r = 1.80 × 10⁵ m" fades in and is crossed (red tag "hours into seconds first: that's inside Earth"). Hand tags: grey "× 3600", navy "cube root last", and a navy pen ring round "8.64 × 10⁴ s".

### 4. how high and how fast
> Subtract Earth's radius, and the altitude is about three point five nine times ten to the seven metres, roughly thirty-six thousand kilometres **up**, more than five and a half Earth radii. Its speed is two pi r over T, about three point zero eight kilometres per **second**. That's much slower than the station's seven point seven, just as a higher orbit should be.

Visual: camera change to the gravity stage at true scale: Earth plate small (about 120 px) and the geostationary circle around it (about 800 px across) with a satellite plate; the 400 km circle hugging Earth. On "up" a grey bracket from the surface to the circle: "h = r − R = 4.23 × 10⁷ − 0.637 × 10⁷ = 3.59 × 10⁷ m (≈ 35,900 km)" in a dark-ink frame (52 px). On "second" "v = 2πr/T = 2π × 4.23 × 10⁷ / 8.64 × 10⁴ = 3.08 × 10³ m s⁻¹" in a dark-ink frame, with a teal arrow on the satellite; the 400 km satellite's teal arrow reads "7.69 km s⁻¹". Hand tags: grey "5.6 Earth radii up", teal "higher: slower", and a grey pen ring round the altitude bracket.

### 5. why it must be over the equator
> But the right height and period still aren't enough. Gravity pulls towards Earth's centre, so the plane of every orbit passes through Earth's centre. Tilt the orbit, and for half of each day the satellite is north of the equator, and for the other half it's **south**. From the ground, it would drift up and down the sky. That's called geosynchronous, but not geostationary. The only orbit that stays above one latitude all day is the one in the equator's **plane**.

Visual: camera change to the side-view Earth plate (Australia facing) with a dashed grey equator line drawn across it, label "equator" (30 px). A navy orbit ring (projected circle) tilted at 30° passes behind and in front of Earth; its plane shows as a faint navy disc through Earth's centre, with a navy dot at the centre and the tag "every orbit's plane passes through here". A satellite plate moves round the ring; a ground-track dot below it on Earth's surface rises north and falls south, with a live latitude readout (52 px) "below: 30° N, 0°, 30° S". On "south" the track draws a short north-south loop, tag "tilted, T = 24 h: swings north and south". The ring then swings down into the equator line and the readout settles at "0°"; on "plane" the satellite sits over the equator and the track dot stops moving; tag "equatorial plane: stays over one point". Hand tags: navy "through the centre", grey "drifts up and down the sky", and a navy pen ring round the stopped track dot.

### 6. same direction, and a circle
> Two more conditions. It must travel west to east, the same way Earth turns, or it would pass overhead twice a day instead of staying put. And the orbit must be circular, so its speed stays constant and it doesn't drift ahead of the spot below, or fall behind it. The right period, the equator's plane, Earth's direction, and a circle. Only then is it **geostationary**.

Visual: camera change back to the polar-view diagram. A satellite going the wrong way (clockwise) meets the ground marker twice in one Earth turn (two flashes), red crossed chip "westward: overhead twice a day". A slightly elliptical dashed path shows the satellite speeding up and slowing (its teal arrow lengthening and shortening), so the navy line to the marker swings back and forth, red crossed chip "not circular: drifts east and west". On "geostationary" a four-tick checklist writes in the right column (36 px): "T = one sidereal day (23 h 56 min; questions use 24 h)", "equatorial plane", "west to east", "circular", and below it in a dark-ink frame (44 px) "→ r = 4.23 × 10⁷ m, h ≈ 35,900 km, v = 3.08 km s⁻¹ (24 h question value)". Hand tags: navy "with Earth's spin", teal "steady speed", and a navy pen ring round the four ticks.

### 7. what it's good for, and the costs
> That's exactly what fixed dishes need. Television and communications satellites sit there, so a dish can be bolted in place. Weather satellites use it too. Japan's Himawari satellite sits above the equator, north of Australia, and photographs the same half of the planet every ten minutes. There are costs, though. It's so far away that a signal up and back down takes about a quarter of a **second**. And near the poles, the satellite sits very low on the horizon, or can't be seen at **all**.

Visual: clear change: the house and roof dish plates from scene 1, the line to the fixed satellite plate labelled "fixed dish: no tracking". A small inset: the Earth plate with a satellite plate above the equator north of Australia (true direction) and a pale cone covering the facing hemisphere, tag "Himawari-9: 140.7° E, full disc every 10 min". On "second" a signal pulse travels up the line and back down while a live timer readout (52 px) ticks to "0.24 s", and the row "2 × 3.59 × 10⁷ m ÷ 3.0 × 10⁸ m s⁻¹ = 0.24 s" writes in a dark-ink frame. On "all" the inset tilts to show sight lines from high latitudes grazing the horizon, tag "beyond about 80° latitude: below the horizon". Hand tags: navy "bolted in place", grey "a quarter of a second", and a grey pen ring round the polar sight line.

### 8. near Earth: the opposite trade
> Low orbits are the opposite. A satellite a few hundred kilometres up goes round in about an hour and a half, so it crosses your sky in minutes. Being close is great for detailed images of the ground, for a crewed station, and for internet with a short delay. But you need many satellites to cover the planet, and dishes that track them. In between, the navigation satellites behind GPS orbit about twenty thousand kilometres up, twice a **day**.

Visual: camera change to the gravity stage: three true-scale circles, low (400 km), GPS (20,200 km) and geostationary (35,900 km), each with a satellite plate. A comparison table fills row by row at the right (32 px) as each is named: "Low Earth orbit: 200 to 2,000 km; about 90 to 130 min; close imaging, crewed station, low delay; many satellites, tracking dishes" (the low circle lights, its satellite racing round); on "day" "GPS (medium): about 20,200 km; about 12 h; navigation" and "Geostationary: about 35,900 km; one day (24 h in questions); fixed dishes, weather; delay, weak polar coverage" complete the table. Hand tags: grey "close and fast", navy "far and fixed", and a navy pen ring round "about 12 h".

### 9. worked example: a low orbit
> Let's predict a low orbit. An Earth-imaging satellite flies seven hundred kilometres up, so r is seven point zero seven one times ten to the six **metres**. Using T equals two pi times the square root of r cubed over big G M, the period is about five thousand nine hundred seconds, roughly ninety-eight **minutes**. That's nearly fifteen laps a day. If its orbit passes over the poles, Earth turns beneath it, and each lap crosses a different strip of ground, so within days it can photograph almost the whole **planet**. It sees everywhere, but nowhere all the time.

Visual: clear change to full-width working with the gravity stage small at the left (a polar orbit ring drawn through both poles of the side-view Earth plate, a satellite plate on it). Task strip (36 px): "Predict the period of an imaging satellite 700 km up." Equation strip: "T = 2π√(r³/GM)". On "metres" "r = R + h = 6.371 × 10⁶ + 0.700 × 10⁶ = 7.071 × 10⁶ m" (52 px). On "minutes" "T = 2π√(3.535 × 10²⁰ / 4.002 × 10¹⁴) = 5.91 × 10³ s ≈ 98 min" in a dark-ink frame (52 px), and "86,400 ÷ 5,906 ≈ 14.6 laps a day". A chip "r = 7.00 × 10⁵ m → T = 184 s" fades in and is crossed (red tag "3 minutes a lap? add Earth's radius"). On "planet" the ground track draws successive north-south strips, each shifted west as Earth turns, filling in across the plate, with a live readout (52 px) "laps so far" ticking up; tag "polar orbit: covers the globe, revisits each place only now and then". Hand tags: navy "r = R + h", grey "Earth turns beneath it", and a navy pen ring round "98 min".

### 10. memory aid
> Here's a way to remember the geostationary conditions: one day, one plane, one way. One day for the period, the equator's plane, and Earth's direction of spin. Get those, plus a circle, and the height follows from Kepler's third **law**.

Visual: board clears; the handwritten line writes large in a framed memory card (hand lettering, navy and grey, 60 px; the same card is reused on the notes screen): "One day, one plane, one way." Three small icons beneath it with 36 px labels: a 24 h clock "one day", the equator line "one plane", a curved eastward arrow "one way". On "law" a small strip (44 px) "r³/T² = GM/4π² → r = 4.23 × 10⁷ m" writes under the card with a fourth label "plus a circle". Hold about 2 seconds.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. A navigation satellite moves in a circular orbit with a period of twelve point zero hours. Calculate its altitude above Earth's surface, using the data sheet values. Pause here to answer.

Visual: `QuestionCard` (subject "Physics") arrives with its full text in one move (question text 36 px), worded as printed: "A navigation satellite moves in a circular orbit around Earth with a period of 12.0 hours. Calculate its altitude above Earth's surface. (G = 6.67 × 10⁻¹¹ N m² kg⁻², M_E = 6.0 × 10²⁴ kg, R_E = 6.371 × 10⁶ m)" A small satellite plate sits beside it. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 12. feedback 1 (brief)
> Convert the period to seconds: four point three two times ten to the four. Then r cubed equals big G M T squared over four pi squared, and the cube root gives r of about two point six six times ten to the seven **metres**. Subtract Earth's radius, and the altitude is about two point zero three times ten to the seven metres. The classic slip is stopping at r, which is measured from the centre, not the **surface**.

Visual: card shrinks to the top; "altitude" underlines. Rows (44 px): "T = 12.0 × 3600 = 4.32 × 10⁴ s"; "r³ = 4.002 × 10¹⁴ × (4.32 × 10⁴)² / 4π² = 1.892 × 10²² m³"; on "metres" "r = 2.66 × 10⁷ m"; "h = r − R = 2.66 × 10⁷ − 0.637 × 10⁷ = 2.03 × 10⁷ m" in a dark-ink frame (52 px). On "surface" a chip "h = 2.66 × 10⁷ m" fades in and is crossed. Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. A satellite has a circular orbit with a period of twenty-four hours, but its orbit is tilted at thirty degrees to the equator. Explain why it is not geostationary. Pause here to answer.

Visual: `QuestionCard` arrives with its full text in one move (question text 36 px), worded as printed: "A satellite moves in a circular orbit with a period of 24 hours. Its orbital plane is inclined at 30° to Earth's equatorial plane. Explain why this satellite is not geostationary. (2 marks)" A small side-view Earth outline with a 30° tilted ring sits beside the card. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 2 (brief)
> Its period matches Earth's spin, so it comes back to the same place in the sky each day. But its orbit's plane passes through Earth's centre and is tilted, so every day it swings north of the equator, then south. A fixed dish would lose it. The slip to avoid is thinking a twenty-four hour period is **enough**. The equatorial plane is the missing condition.

Visual: card shrinks to the top; "inclined at 30°" underlines. The tilted ring from scene 5 returns small with its north-south ground track. Rows (44 px): "T = 24 h: keeps pace on average", "plane through Earth's centre, inclined: north and south each day, so not fixed in the sky" in a dark-ink frame (52 px). On "enough" a chip "24 h period → geostationary" fades in and is crossed (caption "also needs the equatorial plane"). Hold about 1 second.

### 15. handoff
> So far, every orbit we've drawn has been a perfect circle. Real orbits aren't quite. Planets, moons and comets travel on ellipses, swinging closer and then further away as they go. Next, we'll see how Kepler's laws describe both circular and elliptical **orbits**.

Visual: board clears to the gravity stage with the geostationary circle around the Earth plate. As "ellipses" is spoken the circle stretches into a dashed ellipse with Earth at one focus (not the centre), a satellite moving faster near Earth and slower far out. On "orbits" a chip writes "Next: how do Kepler's laws describe circular and elliptical orbits?". Hold about 2 seconds. This is the final frame.

### 16. key notes (quiet, hold about 50 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Geostationary: stays above one point on the equator.
2. Needs one sidereal day (24 h in questions), the equatorial plane, west to east, circular.
3. r ≈ 4.23 × 10⁷ m, h ≈ 3.59 × 10⁷ m, v ≈ 3.08 km s⁻¹.
4. Uses: fixed dishes, weather images. Limits: 0.24 s delay, weak polar view.
5. Low orbit (200 to 2,000 km, 90 to 130 min): close and fast, needs many satellites.

Memory aid (framed card under the notes, hand lettering, navy and grey as in scene 10): *One day, one plane, one way.* Notes in the role colours, 32 px; about 350 characters of bullet text; no paragraphs.

## Teaching checks

- **Does it explain causes?** Why a moving satellite stays over one spot: it keeps pace with the ground (2). Why the altitude is fixed: T fixes r (3, 4). Why it must be equatorial: every orbital plane passes through Earth's centre, so a tilt means north and south swings (5). Why eastward and circular (6). Why fixed dishes work, and why delay and polar gaps happen: fixed position, large distance, equatorial location (7). Why low orbits need many satellites: they pass quickly (8). Why a polar low orbit can image the whole globe: Earth turns beneath it (9).
- **Misconceptions addressed:** a geostationary satellite isn't moving (2); any 24 h orbit is geostationary (5, crossed in 14); it can sit over any place, including the poles (5, 7); higher orbits are faster (4); r is the altitude (crossed in 12).
- **One idea at a time:** period (2), then radius (3, 4), then plane (5), direction and shape (6), then uses (7), the contrast (8) and a low-orbit prediction (9).
- **Video makes it easier:** the polar view shows the line to the dish staying fixed (2); the tilted ring's ground track swinging (5); the wrong-way satellite meeting the dish twice (6); the signal pulse timing the delay (7); the true-scale circles (4, 8).
- **Response opportunity:** prediction (3 s); two unseen tasks, 10 s each; feedback about 28 s and 19 s.
- **Avoided double teaching:** v18's equations recalled in a clause.
- **Syllabus coverage:** `P5-IQ3-03`: predict quantitatively near-Earth (8, 9, and the 400 km values from v18) and geostationary (3, 4, A1 for a medium orbit) orbital properties and relate them to their uses (7, 8).
- **Out of scope by design:** orbit-change energetics (v22); ellipses (v20).

## Practice questions and model answers

**Attempt 1 (scene 11; original wording, 3 marks suggested).** "A navigation satellite moves in a circular orbit around Earth with a period of 12.0 hours. Calculate its altitude above Earth's surface. (G = 6.67 × 10⁻¹¹ N m² kg⁻², M_E = 6.0 × 10²⁴ kg, R_E = 6.371 × 10⁶ m)"
Model answer: T = 4.32 × 10⁴ s. r³ = GMT²/4π² = 4.002 × 10¹⁴ × (4.32 × 10⁴)² / 39.48 = 1.892 × 10²² m³; r = 2.66 × 10⁷ m. h = r − R = 2.03 × 10⁷ m. Classic mistake (crossed): giving r as the altitude.

**Attempt 2 (scene 13; original, 2 marks).** "A satellite moves in a circular orbit with a period of 24 hours. Its orbital plane is inclined at 30° to Earth's equatorial plane. Explain why this satellite is not geostationary."
Model answer: Gravity acts towards Earth's centre, so the orbital plane passes through Earth's centre; with a 30° inclination the satellite spends half of each orbit north of the equator and half south, so although its 24 h period matches Earth's rotation, it moves north and south across the sky each day and does not stay above one point. A geostationary orbit must also lie in the equatorial plane (and be prograde and circular). Classic mistake (crossed): "a 24 h period is enough".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Constants | G = 6.67 × 10⁻¹¹; M_E = 6.0 × 10²⁴ kg; R_E = 6.371 × 10⁶ m; GM = 4.002 × 10¹⁴ | 3, 4, 10, 11 |
| Periods | 24 h = 8.64 × 10⁴ s; sidereal 23.9345 h = 86,164 s (NASA) | 2, 3 |
| GEO | r³ = 7.567 × 10²² m³; r = 4.230 × 10⁷ m; h = 3.593 × 10⁷ m (≈ 35,900 km; "about thirty-six thousand"); h/R = 5.64; v = 3,076 m s⁻¹ ≈ 3.08 × 10³ | 3, 4, 6, 10 |
| Period slider (Revision 2) | drift per day = 360° × (24/T − 1): 12 h: +360° (east); 20 h: +72°; 24 h: 0°; 30 h: −72° (west) | 2 |
| LEO class (Revision 2) | 200 km: 88.2 min; 400 km: 92.2 min; 2,000 km: 126.8 min ("about 90 to 130 min") | 8, notes |
| Crossed slips (Revision 2) | T = 24 (hours left in) → r = 1.80 × 10⁵ m; r = 7.00 × 10⁵ m → T = 184 s | 3, 9 |
| Sidereal GEO | r = 4.222 × 10⁷ m; h = 3.585 × 10⁷ m (author note) | author note only |
| 400 km | v = 7.69 km s⁻¹ (v18); about 90 min (NASA), 92 min model | 1, 4, 8 |
| Delay | 2 × 3.59 × 10⁷ / 3.0 × 10⁸ = 0.240 s | 7 |
| Polar limit | arccos(6.371 / 42.30) = 81.3° | 7 (tag "about 80°") |
| GPS | about 20,200 km, about 12 h (site, gps.gov) | 8 |
| Low orbit | r = 7.071 × 10⁶ m; r³ = 3.535 × 10²⁰ m³; T = 5,906 s = 98.4 min; 14.6 laps a day | 9 |
| A1 | T = 4.32 × 10⁴ s; r³ = 1.892 × 10²² m³; r = 2.665 × 10⁷ m; h = 2.027 × 10⁷ m ≈ 2.03 × 10⁷ m | 11, 12 |
| A2 | 30° inclination; no numbers to compute | 13, 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov); Codex to re-check.

- GEO: 4.002 × 10¹⁴ × 86,400² / (4π²) = 7.5674 × 10²²; cube root 4.22975 × 10⁷ m; minus 6.371 × 10⁶ = 3.59265 × 10⁷ m; 2π × 4.22975 × 10⁷ / 86,400 = 3,075.96 m s⁻¹.
- Sidereal: T = 86,164.1 s: r = 4.22205 × 10⁷ m; h = 3.58495 × 10⁷ m; ratio of radii 1.0018.
- A1: T = 43,200 s: r³ = 1.8919 × 10²²; r = 2.66458 × 10⁷ m; h = 2.02748 × 10⁷ m.
- Delay: 2 × 3.5927 × 10⁷ / 3.0 × 10⁸ = 0.2395 s. Horizon latitude arccos(0.15062) = 81.34°.
- Low orbit: r = 7.071 × 10⁶ m; T = 2π√(3.5354 × 10²⁰ / 4.002 × 10¹⁴) = 5,905.6 s = 98.43 min; 86,400 / 5,905.6 = 14.63.
- GEO speed / 400 km speed = 3,076 / 7,688 = 0.400.
- Revision 2: T = 2π√(r³/GM) at 200 km (r = 6.571 × 10⁶ m) = 88.17 min; at 2,000 km (r = 8.371 × 10⁶ m) = 126.78 min. Slips: r = (4.002 × 10¹⁴ × 24² / 4π²)^(1/3) = 1.8007 × 10⁵ m; r = 7.00 × 10⁵ m gives T = 183.9 s. Slider drift 360 × (24/T − 1): 360°, 72°, 0°, −72° for 12, 20, 24, 30 h.

## Memory aid check

- **"One day, one plane, one way."** New. Meaning, as said in scene 10: a period of one (sidereal) day, the equatorial plane, Earth's direction of rotation; plus a circular orbit, after which the height follows from r³/T² = GM/4π². Assumptions checked: "one day" means one rotation of Earth (sidereal day; 24 h in questions); the circle condition is said aloud in scene 10 because omitting it would leave a wrong idea. It helps a new case: A2 (fails "one plane"). Introduced after scenes 2 to 6.
- **Considered, not used:** "GEO = 24 h" alone (incomplete; it is the misconception A2 targets).

## Narration length estimate


Revision 2 count (6 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed; total = sum of scene strings, which replaces Revision 1's joined count of 5,628): **5,630 characters**, 16 scenes. Characters per scene (1 to 16): 358, 429, 457, 358, 458, 365, 486, 441, 555, 233, 198, 408, 195, 354, 260, 75. At 13.3 characters per second the speech is about 423 s; add about 3 s for the prediction countdown, about 3 s for the station's pass in scene 1, about 4 s for the polar-view, slider and tilted-ring motions in scenes 2, 5 and 6, about 2 s for the ground-track fill in scene 9, about 2 s for the signal pulse in scene 7, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the memory-aid hold, 2 s for the handoff hold and about 44 s more of the quiet notes hold (50 s in all; about 84 s of holds and countdowns): **about 508 s**, inside the 5,500 to 7,000 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 9's last sentence; scene 7's Himawari sentence (keep the inset).

## Opening frame

v18's final frame (`phys-y12-m5-v18.md`): paper background; the Earth plate at the centre-left with a grey rotation arrow "Earth turns once a day"; a satellite on the small 400 km circle; a large dashed outer circle with a second satellite and the chip "T = 24 h → r = ?"; heading "How does gravity maintain a circular orbit?"; chip "Next: what makes an orbit geostationary rather than merely near Earth?". Scene 1 zooms onto Australia and cuts to the rooftop view; the heading changes in scene 2.

## Final frame

The last explained frame (end of scene 15): paper background; the Earth plate small at the centre-left; a dashed navy ellipse around it with Earth at one focus (eccentricity about 0.5 for visibility), a satellite plate on the ellipse; heading "What makes an orbit geostationary rather than merely near Earth?"; chip "Next: how do Kepler's laws describe circular and elliptical orbits?". v20 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m5-v19` (route phys-y12-m5-v19). Suggested explainer folder `src/explainer/lessons/phys-y12-m5-v19`; build folder `docs/production/claude-pm/lessons/p-y12-m5-v19` (root to confirm).

In order (16 scene headings): hook, keep-pace, period-radius, height-speed, equatorial-plane, direction-circle, uses-costs, near-earth, worked-low-orbit, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). `motionTools`: polar-view sync diagram (kit gap 4) with a live period slider, tilted orbit ring with a live latitude readout, gravity stage (kit gap 1), comparison table, `AlignedAlgebra`, `NumberTicker`, `ScribbleCircle`, `PenArrow`, `Countdown`, `CameraStage`. Transitions: 1 zoom and cut; 1 to 2 clear change; 2 to 3 camera push to full-width working; 3 to 4 camera change; 4 to 5 camera change; 5 to 6 camera change; 6 to 7 clear change; 7 to 8 camera change; 8 to 9 clear change to full-width working; 9 to 10 clear change; attempts card shrink; 14 to 15 clear change; 15 to 16 fade.

Holds: hook (3 s), attempt-1, attempt-2 (10 s), key-notes (about 50 s). Review evidence paths: `checks/p-y12-m5-v19-learning-review.md`, `checks/p-y12-m5-v19-science-check.md`.

## Assets


Have (inspected 6 Nov with the Read tool; scaled uniformly only, never stretched):
- `public/assets/physics/phys-y11-earth-v1.png` (1254 × 1254, RGBA): scenes 4, 5, 7, 8, 9, 15.
- `public/assets/physics/phys-y11-house-v1.png` (1774 × 887, RGBA, with JSON; weatherboard house with a hipped iron roof): scenes 1, 7.
- `public/assets/physics/y12p-roof-dish-v1.png` (1254 × 1254, RGBA, with JSON; delivered in brief 188: offset dish tilted up to the right on a short pole and base plate): scenes 1, 7.
- `public/assets/physics/y12p-satellite-v1.png` (1585 × 992, RGBA; delivered in brief 188): scenes 1, 2, 4 to 9, 11, 15.

Need (new plates, Codex): none (Revision 2: the roof dish is delivered).

Coded: ground and sky, sight lines, polar-view disc and rotation, period slider and readouts, orbit circles and tilted ring, ground track, signal pulse, coverage cone, table, algebra, chips, cards, countdowns, notes board.

Kit gaps: 4. **Polar-view sync diagram** (rotating top-down Earth disc with a ground marker; satellites with set periods and directions; a period slider with live T and drift readouts; the marker-to-satellite line shows whether they keep pace).

## Codex asset brief (Year 12 Physics M5 v19: roof dish)


Revision 2 (6 Nov 2026): item 1 (`y12p-roof-dish-v1.png`) was delivered in brief 188 and is accepted at native size; the build places its base plate on the house plate's roof slope at the scale used in scene 1. No new plate requests.

## Codex error-check brief

Error-only check:
1. Re-check every value under "Numbers to verify" and every value in narration, screen text, attempts and notes against "Numbers used"; check the cited Himawari, ISS and GPS facts (open decision 2).
2. Confirm the physics of every learner-visible claim: GEO period equals Earth's rotation period; r from r³/T² = GM/4π²; every orbital plane passes through Earth's centre, so a tilted 24 h orbit swings north and south; westward 24 h orbits pass overhead twice daily; delay and polar coverage (author notes a to e).
3. Confirm the memory aid's assumptions.
4. Confirm every cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
5. Confirm both attempt cards are original, carry every given, and show nothing answer-bearing.
6. Confirm the syllabus quote matches the route JSON exactly and is labelled 2017.
7. Confirm no person, hand, face or body outline is drawn or requested.
8. Confirm no em dash (U+2014) and no U+2061, and Australian spelling.
9. Confirm the narration counts by script.
10. Report the site notes under Decisions to root.

## YouTube metadata (draft)

Title: Geostationary vs Low Earth Orbits: Height, Period and Uses | HSC Physics Module 5

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module5/lesson11.sa.html

A rooftop dish points at one fixed spot in the sky, but every satellite has to keep moving. Find out what makes an orbit geostationary: the period, the radius and altitude it forces, why it must be over the equator, and why it must travel west to east. Then compare it with low Earth orbits and GPS, and see what each is used for. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 5: Advanced Mechanics.
Syllabus content (NSW Physics Stage 6, 2017):
"predict quantitatively the orbital properties of planets and satellites in a variety of situations, including near the Earth and geostationary orbits, and relate these to their uses (ACSPH101)"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Next: Kepler's laws for circular and elliptical orbits.

#HSCPhysics #Physics #Satellites #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (is the "every orbital plane passes through Earth's centre" cause clear from the tilted ring (Revision 2 wording); is the polar view readable), then the physics check and the Codex error check.
- Judge the polar-view and tilted-ring motion at playback speed.

## Revision 2 (6 Nov 2026)

Brief 188 findings (`checks/p-y12-m5-v19-learning-review.md`, `checks/p-y12-m5-v19-science-check.md`): 0 blocker, 4 should fix, 0 optional.
- **Should fix, S5 (a central force does not make every orbit a circle).** Resolved: scene 5 now says "the plane of every orbit passes through Earth's centre"; the visual shows the orbit's plane as a faint disc through the centre, tag "every orbit's plane passes through here". The same correction is made in feedback 2's narration ("its orbit's plane passes through Earth's centre and is tilted"), the A2 model answer, the boundary, the learner-question bullet, the cause chain, the teaching checks, the error-check brief and the review notes. Narration change: scene 5 +5 characters, scene 14 +12.
- **Should fix, S6 checklist (sidereal day label).** Resolved: the first tick reads "T = one sidereal day (23 h 56 min; questions use 24 h)", and the result line is labelled "(24 h question value)". The 24 h worked calculation and its 35,900 km result are kept as the question approximation. Key note 2 and the table use the same wording.
- **Should fix, S8 table and key note 4 (LEO period range).** Resolved: the table and key note now give "200 to 2,000 km; about 90 to 130 min" (Python: 88.2 min at 200 km, 126.8 min at 2,000 km). The spoken "about an hour and a half" stays tied to "a few hundred kilometres up". No narration change.
- **Should fix, S4 and orbit stages (root decision 10 velocity colour).** Resolved: every velocity arrow and speed readout is teal (scenes 4, 6); the equator line changes from pale teal to dashed grey so teal means velocity only.

Author-only repairs: the practice-question scene numbers (attempt 1 is scene 11, attempt 2 scene 13) and the memory-aid check's scene number for the circle condition (scene 10) are corrected; open decisions 1 to 3 are marked settled (roof dish delivered; Himawari and GPS verified; sidereal sentence kept).

Visual upgrade (to `../maths-visual-standard.md` and the build gate):
- Decisions gain "Type sizes", "Anchor", "Simulation" and "Stage changes"; the colour key states teal velocity, full-opacity grey and red crossed chips.
- Plates: the delivered roof dish and satellite move to "Have" (inspected); the house plate was inspected for the roof slope. Scene 1 is a painted real scene, and the satellite plate replaces the coded satellite icon in the sky.
- Live controls: a period slider on the polar view (the core idea) with live T and drift-per-day readouts (360°, 72°, 0°, 72° west for 12, 20, 24, 30 h); a live latitude readout on the tilted ring; a live signal timer; a live lap count on the ground track.
- Stage changes: nine distinct set-ups in the teaching scenes; scenes 3 and 9 are full-width working. No set-up runs past about 45 s.
- Hand tags and a pen mark in role colours in every teaching scene ("never moves", "races across", "keeps pace", "same direction", "× 3600", "cube root last", "5.6 Earth radii up", "higher: slower", "through the centre", "drifts up and down the sky", "with Earth's spin", "steady speed", "bolted in place", "a quarter of a second", "close and fast", "far and fixed", "r = R + h", "Earth turns beneath it").
- Framed answers: r (3), h and v (4), the checklist result (6), the delay (7), T (9) and every feedback result. New crossed slips: hours left in the period (3); altitude used as r (9).
- Scene 10 and the notes: the memory aid is a framed card; key notes cut from four dense items (about 590 characters) to five short bullets (about 350 characters); quiet notes hold 60 s to 50 s.
- Question cards arrive with their full text in one move; attempt 2 gains a small tilted-ring sketch.
- Type sizes stated; grey tags at full opacity.

New plate requests: none.

Counts: 5,628 (joined) or 5,613 (scene sum) to 5,630 characters (scene sum); about 515 s to about 508 s.
