# Year 12 Physics M5 V23: Escape velocity. What minimum launch speed allows escape without further propulsion? (design)

Status: Revision 1 (6 Nov 2026): first design. Needs independent learning review and science check before voicing.

Narration 5,585 characters, 15 scenes, about 513 s, counted by script with the build parser rules (see "Narration length estimate"). Last video of Module 5.

Scope: Year 12 Physics (Physics Stage 6, 2017 syllabus), Module 5 (Advanced Mechanics), inquiry question "How does the force of gravity determine the motion of planets and satellites?". Templates as `phys-y12-m5-v17.md`. No pre-design pack exists; the pack work is done here. Site lesson read in full (6 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson16.sa.html`, SHA256 `042db07a785136be57b3e58e165d27e71c4f98e4a992d449e1da6b100c2de8cc` (recomputed 6 Nov; matches the route). Route entry: `phys-y12-m5-v23`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Use total energy zero at infinity to derive escape speed, state no drag/no propulsion assumptions and distinguish orbit speed. Stop before relativistic escape." Next: "phys-y12-m6-v01: How does voltage between parallel plates determine a charged particle acceleration?"

Owner rules applied: as v17 (2017 syllabus quoted exactly; no people, hands, faces or body outlines; Earth, the probe (satellite plate) and a launch rocket are painted plates; paths, energy bars, curves and strips are coded; every number recalculated in Python with the HSC data sheet constants; NASA values cited as checks; "Pause here to answer." with a 10 s countdown; brief feedback; Australian spelling; no em dashes). Recalled, not re-taught: v18 (orbital speed √(GM/r)), v21 (U = −GMm/r, finite climb to infinity), v22 (E = K + U, constant without thrust; E < 0 bound).

Syllabus content (Physics Stage 6 (2017), Module 5; ledger id `P5-IQ3-05`), quoted from the route JSON `syllabusActions`:

- `P5-IQ3-05`: "derive quantitatively and apply the concepts of gravitational force and gravitational potential energy in radial gravitational fields to a variety of situations, including but not limited to:" "the concept of escape velocity v_(esc)=sqrt((2GM)/(r))", "total potential energy of a planet or satellite in its orbit U=-(GMm)/(r)", "total energy of a planet or satellite in its orbit U+K=-(GMm)/(2r)", "energy changes that occur when satellites move between orbits (ACSPH096)", "Kepler’s Laws of Planetary Motion (ACSPH101)"

This video covers the escape velocity example; v21 and v22 covered the others.

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 54)

**Boundary:** starts on v22's final frame (a probe on Earth's surface with an upward launch arrow "v = ?", the energy graph with the dashed "E = 0: escape?" band). Teaches: the case (a probe launched straight up with no air and no engine after launch: 5 km s⁻¹ rises about 4,200 km, 10 km s⁻¹ about 25,000 km, both return); the energy picture (constant E; K turns into U; the climb to infinity is finite); the threshold (arrival at infinity with zero speed, E = 0), the derivation v_esc = √(2GM/r) with m cancelling; Earth's value 11.2 km s⁻¹ (NASA 11.186); comparison with circular orbit speed (√2 times; the 400 km case); classification by total energy (bound, threshold, escape with speed to spare, v∞ = √(v² − v_esc²)); independence of mass and direction (unless the path hits the planet); the model's assumptions and why rockets do not leave the pad at 11.2 km s⁻¹; a closing link to Module 6's uniform electric field. Stops before relativistic escape, black holes and the Schwarzschild radius (site enrichment), and heliocentric escape (frames).

## Decisions

- **Learner question (route wording kept).** "What minimum launch speed allows escape without further propulsion?" The answer, built in order: a launched probe trades K for U and returns if K runs out first (1, 2); U only rises to zero, so a finite K can be enough (2); the minimum is reaching infinity with zero speed, E = 0 (3); so v_esc = √(2GM/r), 11.2 km s⁻¹ from Earth (3, 4); it is √2 times the orbital speed (5); the sign of E sorts every launch (6); mass and direction do not matter (7); only under the stated assumptions (8).
- **Hook (site hook and Think First, made concrete).** A probe launched vertically; heights computed exactly from energy conservation (author note a): 5 km s⁻¹ → 4.21 × 10⁶ m (mgh would predict 1.28 × 10⁶ m, a v21 echo shown as a grey tag only); 10 km s⁻¹ → 2.49 × 10⁷ m. The question "does it have to be infinite?" is the surprise the v21 area result answers. Prediction with a 3 s countdown.
- **Derivation (site card 1 and "Apply 6 marks").** Total energy at infinity in the minimum case is 0 + 0; conservation (only gravity does work) carries E = 0 back to launch; ½mv² − GMm/r = 0; m cancels; v = √(2GM/r). "The 2 goes inside the root" is shown and narrated as the site's HSC trap.
- **Earth's value.** Data sheet constants give 1.121 × 10⁴ m s⁻¹; NASA Earth Fact Sheet 11.186 km s⁻¹ (author note b); site 11.2.
- **Orbit versus escape (route stop "distinguish orbit speed").** √2 relation; surface values 7.93 and 11.2 km s⁻¹; at 400 km, 7.69 (v18) and 10.87 km s⁻¹, an extra 3.18 km s⁻¹ (author note c). A2 tests the factor.
- **Classification (site card 2).** By the sign of E. "Ends up in an orbit if it's launched sideways" is kept in learner copy for the below-threshold case, because "falls back" alone would contradict v18. Path shapes (ellipse, parabola, hyperbola) are not named (site's applicability caution; author note d). v∞ = √(v² − v_esc²) shown with the one-line energy reason; the site's 14 km s⁻¹ activity case gives 8.39 km s⁻¹ with data sheet values.
- **Mass and direction (site card 2, 6-mark answer).** Direction does not change the threshold because energy is a scalar, "as long as its path doesn't hit the planet" (kept in learner copy: the omission would teach a wrong idea).
- **Assumptions and rockets (site model box, "Account 5 marks").** No air, no propulsion after launch, only the central body's gravity. Rockets supply energy over the climb, much of it high up where the pull is weaker. The rocket plate (`phys-y11-rocket-v1.png`) is used only in this scene, with its flame shown as a coded green thrust arrow; the kit plan's caution ("a rocket image would imply continuing propulsion") is the point being made here, so the rocket is labelled "keeps thrusting: not the escape-velocity model".
- **Module close and handoff (route next).** Scene 14 closes Module 5 in one sentence and bridges to Module 6 through uniform fields: the near-surface gravitational field arrows (parallel, equal) morph into the field between two coded parallel plates with a charged particle; the question chip states the route's next question (with "particle's" possessive).
- **Memory aid.** "Escape is root two times orbit; the two goes inside the root." See "Memory aid check".
- **Attempts.** A1 (site Activity 1 Mars, with NASA radius 3.39 × 10⁶ m and the site's mass 6.42 × 10²³ kg): 5.03 × 10³ m s⁻¹ (NASA 5.03 km s⁻¹), plus one assumption. A2 (new): the factor by which a circular-orbit satellite's speed must rise to escape: √2 ≈ 1.41. Crossed: A1 "leaving out the 2" (3.55 km s⁻¹); A2 "doubling".
- **Colour key.** As v22; launch velocity orange; E bar navy; thrust green.
- **Site sources used:** lesson 16 intro and hook (11.2 km s⁻¹; rockets do not get one kick), Think First (estimate; does mass matter), vocabulary (escape velocity, reference at infinity, threshold, residual speed), the core model box (assumptions), misconceptions (continuous thrust; heavier rockets), card 1 (derivation, HSC trap, Earth worked example), card 2 (characteristics, energy classification, 2R example in author note), Activity 1 (Mars, 14 km s⁻¹), Activity 2 (mass cancels), the "Apply 6 marks" and "Account 5 marks" answers (scenes 3, 7, 8). Not used: the Schwarzschild enrichment; New Horizons and heliocentric frames; the Oberth effect; Jupiter's escape speed; conic labels.
- **Site notes (for root to log if accepted):**
  1. Lesson 16, short-answer SA1 model answer: the speed at infinity is computed as √(12² − 10.4²) = 5.99 km s⁻¹ using the rounded 10.4 km s⁻¹; with the unrounded 10.36 km s⁻¹ it is √(144 − 107.4) = 6.05 km s⁻¹. Premature rounding (as in the lesson 3 correction); suggest 6.05 km s⁻¹ (6.1 km s⁻¹ to 2 s.f.).
  2. Lesson 16, SA2: with M = 7.34 × 10²² kg and R = 1.74 × 10⁶ m, the Moon's escape velocity is 2.37 km s⁻¹, not 2.38 (√(5.628 × 10⁶) = 2,372 m s⁻¹). NASA's 2.38 km s⁻¹ uses 7.346 × 10²² kg and 1,738 km. Suggest 2.37 for the given data.
  - Checked and correct: Earth 1.12 × 10⁴ m s⁻¹; Jupiter 5.95 × 10⁴ m s⁻¹; 7.92 km s⁻¹ at 2R; Venus v_e 10.4 km s⁻¹; Earth to Moon mass ratio "roughly 81×" and radius "about 3.7×".
- **Cause chain taught, in order:** (1) only gravity acts, so E = K + U is constant; K falls as U rises (2); (2) U rises only to zero at infinity, so a finite K can cover the climb (2); (3) minimum escape: E = 0 at infinity, so E = 0 at launch (3); (4) ½mv² = GMm/r gives v = √(2GM/r), mass cancelling (3); (5) the escape K is twice the circular-orbit K at the same r, so the speed is √2 times (5); (6) E < 0 bound, E = 0 threshold, E > 0 escape with leftover K (6); (7) energy has no direction, so launch direction does not change the threshold (7); (8) the model assumes no air, no later thrust, one attracting body (8).
- **Entry knowledge:** v18, v21, v22.
- **Learner-visible vocabulary:** escape velocity (the minimum launch speed to escape with no further propulsion, 3); bound (4, recalled from v22); speed to spare, "speed at infinity" (6).
- **Legacy logic ported:** none. The coded `EscapeEnergy` visual (kit family `m5-escape`, "compare kinetic, potential and total specific energy at one launch radius") is the starting point for the energy bars in scenes 2, 3 and 6; its limit ("energy threshold only; no trajectory classification") is respected: trajectories in scene 6 are radial or schematic, without conic names.
- **New explainer motion:** **vertical launch stage** (kit gap 8: probe launched radially from the Earth plate at a chosen speed, motion from energy conservation in real proportion with a slow-motion factor, maximum height readout, optional mgh ghost, with K, U and E bars riding alongside); the energy bars (kit gap 7) and the well graph (kit gap 6); the gravity stage; **uniform-field morph** (parallel equal arrows near a flat ground segment morphing into the field between two coded plates); `AlignedAlgebra`; `Countdown`; `QuestionCard`; `Chip` with `cross`; `KeyNotes`.
- **No human figures.** No crew; the rocket has no people drawn.
- **Author notes (not learner copy):**
  (a) Maximum height for a vertical launch from R at speed v: 1/r_max = 1/R − v²/(2GM). 5 km s⁻¹: r_max = 1.0583 × 10⁷ m, h = 4.21 × 10⁶ m; 8 km s⁻¹: h = 6.62 × 10⁶ m (not shown); 10 km s⁻¹: r_max = 3.1227 × 10⁷ m, h = 2.49 × 10⁷ m. mgh estimate for 5 km s⁻¹: v²/2g = 1.28 × 10⁶ m.
  (b) NASA Earth Fact Sheet (nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html): escape velocity 11.186 km s⁻¹, GM 3.9860 × 10¹⁴ m³ s⁻²; the data sheet GM (4.002 × 10¹⁴) gives 11.21 km s⁻¹.
  (c) Earth's rotation adds up to 0.46 km s⁻¹ for an eastward launch at the equator, a frame detail not narrated.
  (d) Below-threshold paths: radial launches return; sideways launches above the circular speed give ellipses (v20); the conic labels are site content but not narrated (route stop; site applicability caution).
  (e) "Only Earth's gravity": escaping Earth's field is not escaping the Sun's; the site's frames caution; not narrated beyond "ignoring the Sun and Moon".
  (f) Pronunciations: "the square root of two big G M over r"; "eleven point two kilometres per second"; "root two".

- **Open decisions for root:**
  - **1. Module 6 bridge (root).** Scene 14 uses a uniform-field analogy (near-surface gravity ↔ parallel plates). Confirm it fits phys-y12-m6-v01's own opening (not yet designed); if m6-v01 opens differently, scene 14's visual can end on the plates alone.
  - **2. Rocket plate (root).** `phys-y11-rocket-v1.png` (a slim sounding-rocket style, 2400 × 800) is reused in scene 8, rotated to vertical. Confirm the rotation reads correctly (the plate is drawn horizontal); fallback: a coded rocket outline.
  - **3. Hook heights (learning review).** The two heights are exact energy results shown before the method; confirm the review is comfortable with "we'll see why" values in the hook (they are recomputed nowhere else in the lesson).

Main question: *Launch a probe straight up with no air and no engine after launch. Faster launches go higher and still fall back. Is there a speed at which it never returns, and why isn't it infinite?*
Entry knowledge: v18, v21, v22.
Stops after: v_esc = √(2GM/r) from E = 0; Earth's 11.2 km s⁻¹; √2 × orbital speed; classification by E; mass and direction independence; assumptions. No relativistic escape.
Handoff: Module 6 v01, how voltage between parallel plates determines a charged particle's acceleration.

## Script and shots

Cue words in **bold** trigger the visual change. Screen symbols in italic: *v*, *v_esc*, *r*, *G*, *M*, *m*, *E*. Paper background and handwritten headline face as the explainer house style.

### 1. hook (does it ever not come back?)
> Launch a probe straight up from Earth's surface, with no air, and no engine after launch. At five kilometres per second, it climbs about four thousand two hundred kilometres before falling back. At ten kilometres per second, it gets about twenty-five thousand kilometres up, and still falls **back**. Is there a launch speed where it never comes back at all, and does that speed have to be infinite? Have a **think**.

Visual: opens on v22's final frame (see "Opening frame"); the energy graph shrinks to the top right. Vertical launch stage (kit gap 8): the satellite plate (`y12p-satellite-v1.png`, here "probe") leaves Earth's surface straight up at "5 km s⁻¹", rises (time compressed, clock readout), stops at a height marker "h = 4.2 × 10⁶ m", falls back; a faint grey ghost marker at "mgh estimate: 1.3 × 10⁶ m" (tag "v21: constant g underestimates the climb"). On "back" a second launch at "10 km s⁻¹" rises far higher (Earth scaled down to fit), marker "h = 2.5 × 10⁷ m", and falls back. On "think" the 3 s `Countdown` runs beside "Never comes back: at what speed? Infinite?" with chips "infinite", "a finite speed", "no such speed".

### 2. trading kinetic for potential energy
> Think about its energy. With gravity the only force, its total energy, kinetic plus potential, stays the same. As it climbs, kinetic energy turns into potential energy, so it slows down. Each extra kilometre costs less than the one before, because the pull keeps weakening. If its kinetic energy runs out before it gets far enough, it stops and falls back. But remember, potential energy only rises to zero, even at infinity. So the probe needs only enough kinetic energy to cover that finite climb, not an infinite **amount**.

Visual: camera continue; the 10 km s⁻¹ launch replays with energy bars (kit gap 7) riding beside the probe: navy E bar fixed (below zero), orange K shrinking, violet U rising towards the zero line; at the top K is zero and U still below zero, so it falls. Heading writes on: "What minimum launch speed allows escape without further propulsion?". On "amount" a small inset of v21's well graph: the zero line at the rim, a bracket from the surface value up to the rim "finite climb: GMm/R".

### 3. the threshold: zero total energy
> The slowest escape is when the probe just reaches infinity, with zero speed left. Out there, its kinetic energy is zero, and its potential energy is zero, so its total energy is zero. Total energy doesn't change, so it must be zero at **launch** too. At launch, that's a half m v squared, minus big G M m over r, equals zero. It's like having exactly enough to pay for the whole climb, with nothing left over. The mass m **cancels**. So v squared equals two big G M over r, and the escape velocity is the square root of two big G M over **r**.

Visual: camera push to the right column. A two-state strip: "at infinity (just escaping): K = 0, U = 0, E = 0" with the probe drawn tiny at "∞" and its bars all at zero. On "launch" an arrow carries "E = 0" back to "at launch: E = 0". `AlignedAlgebra`: "½mv² − GMm/r = 0", "½mv² = GMm/r"; on "cancels" both m's strike through. "v² = 2GM/r". On "r" boxed "v_esc = √(2GM/r)", tag "the 2 is inside the root".

### 4. Earth's escape velocity
> From Earth's surface, with the data sheet values, that's the square root of two times four point zero zero two times ten to the fourteen, over six point three seven one times ten to the six. That gives about one point one two times ten to the four metres per second, or eleven point two kilometres per **second**. NASA quotes the same value, eleven point two. That's about forty thousand kilometres an **hour**. From the Moon, with far less mass, it's only about two point four.

Visual: calculation layout. Task strip: "Find the escape velocity from Earth's surface." Equation strip: "v_esc = √(2GM/r)". Givens grouped: "GM = 4.002 × 10¹⁴ m³ s⁻² (data sheet G and M_E)", "r = R_E = 6.371 × 10⁶ m". `AlignedAlgebra`: "v_esc = √(2 × 4.002 × 10¹⁴ / 6.371 × 10⁶) = √(1.2563 × 10⁸)"; on "second" "= 1.12 × 10⁴ m s⁻¹ = 11.2 km s⁻¹" boxed. Source chip "NASA: 11.186 km s⁻¹". On "hour" "× 3600 ≈ 40,000 km h⁻¹"; a small grey chip follows "Moon: about 2.4 km s⁻¹ (NASA 2.38)".

### 5. escape versus orbit
> Compare that with the speed of a circular orbit at the same radius, the square root of big G M over r. The only difference is the two inside the root, so escape velocity is root two, about one point four one times the orbital **speed**. A satellite four hundred kilometres up moves at seven point six nine kilometres per second. To escape from there, it needs ten point nine, an extra three point two kilometres per **second**. A common slip is putting the two outside the root.

Visual: camera change to the gravity stage. Two boxed formulas side by side: "orbit: v = √(GM/r)" and "escape: v_esc = √(2GM/r)". On "speed" a bracket "v_esc = √2 × v_orbit ≈ 1.41 × v_orbit"; at the surface radius the orange arrows read "7.93 km s⁻¹" (orbit) and "11.2 km s⁻¹" (escape). At the 400 km circle with a satellite: "orbit 7.69 km s⁻¹", "escape 10.9 km s⁻¹"; on "second" a green gap bar "extra 3.2 km s⁻¹". A chip "2√(GM/r)" fades in and is crossed.

### 6. sorting launches by total energy
> So the launch speed sorts every case by total energy. Below escape velocity, the total is negative. The probe is bound, so it falls back, or ends up in an orbit if it's launched **sideways**. Exactly at escape velocity, the total is zero, and the probe just escapes, slowing towards zero speed forever. Above it, the total is positive, and the probe escapes with speed to spare. Launch at fourteen kilometres per second, and far away it's still doing about eight point four kilometres per **second**.

Visual: camera change to a three-lane comparison, each lane with a launch from Earth and its navy E bar: lane 1 "v < v_esc: E < 0, bound" (radial launch returns; on "sideways" a second probe launched sideways settles into a dashed closed orbit); lane 2 "v = v_esc: E = 0" (the probe rises, its speed readout falling towards 0 forever); lane 3 "v > v_esc: E > 0" (the probe rises with a speed readout levelling off). On "second" lane 3's readout settles at "8.4 km s⁻¹" and a row writes: "½mv∞² = ½mv² − GMm/r → v∞ = √(v² − v_esc²) = √(14.0² − 11.21²) = 8.39 km s⁻¹".

### 7. what it doesn't depend on
> Two things escape velocity doesn't depend on. The probe's mass, because it cancelled. And the direction of launch, because energy has no direction. Aim it sideways or straight up, and the threshold is the same, as long as its path doesn't hit the planet. It depends only on the planet's mass, and the distance from its centre that you launch **from**.

Visual: camera change to the gravity stage: from one launch point, three probes of different sizes (the satellite plate at three scales) leave at the same speed in three directions (up, slanted, sideways), each with "v = 11.2 km s⁻¹" and each path running off the frame; tag "mass cancels; energy has no direction". A fourth, aimed into the ground, is drawn faint and crossed "unless the path hits the planet". On "from" the formula "v_esc = √(2GM/r)" highlights M and r.

### 8. the model's assumptions, and real rockets
> This model makes real assumptions. No air, which would slow the probe and heat it. No propulsion after launch. And only Earth's gravity, ignoring the Sun and the Moon. Real rockets never leave the pad at eleven point two kilometres per second. They keep their engines burning as they climb, so the energy is supplied gradually, much of it high up, where the pull is weaker. Escape velocity is the speed for a single kick at the **start**.

Visual: clear change. A model box writes: "no air", "no propulsion after launch", "only the planet's gravity". A coded atmosphere band glows red at a fast probe's nose (tag "air: drag and heating"). The rocket plate (`phys-y11-rocket-v1.png`, rotated to vertical, scaled uniformly) climbs slowly from the pad with a green thrust arrow at its base that stays on, a speed readout climbing gradually; tag "keeps thrusting: not the escape-velocity model". On "start" a single orange arrow at a probe on the surface with a one-off flash, "escape velocity: one kick at launch".

### 9. memory aid
> To remember it: orbit speed is root G M over r, and escape speed is root two G M over r. Escape is root two times orbit, and the two goes inside the **root**. And escaping doesn't mean leaving gravity behind. The probe is pulled back the whole way out, it just never stops.

Visual: board clears to the two formulas stacked, the "2" in the escape formula circled inside the root. The handwritten line writes above: "Escape = √2 × orbit. The 2 goes inside the root." On "root" the circled 2 pulses. Hold about 2 seconds.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. Mars has a mass of six point four two times ten to the twenty-three kilograms, and a radius of three point three nine times ten to the six metres. Calculate the escape velocity from its surface, and state one assumption you made. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "Mars has a mass of 6.42 × 10²³ kg and a radius of 3.39 × 10⁶ m. (a) Calculate the escape velocity from the surface of Mars. (b) State one assumption made in this calculation. (G = 6.67 × 10⁻¹¹ N m² kg⁻²)" Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 11. feedback 1 (brief)
> v equals the square root of two big G M over r: two times six point six seven times ten to the minus eleven, times six point four two times ten to the twenty-three, over three point three nine times ten to the six. That's about five point zero three times ten to the three metres per **second**. Assumptions include no atmosphere, and no propulsion after launch. The classic slip is leaving out the **two**.

Visual: card shrinks to the top. Rows: "v_esc = √(2GM/r) = √(2 × 6.67 × 10⁻¹¹ × 6.42 × 10²³ / 3.39 × 10⁶)"; on "second" "= √(2.526 × 10⁷) = 5.03 × 10³ m s⁻¹" boxed; "(b) e.g. no air resistance; no thrust after launch; only Mars's gravity"; source chip "NASA: 5.03 km s⁻¹". On "two" a chip "√(GM/r) = 3.55 × 10³ m s⁻¹" fades in and is crossed. Hold about 1 second.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. A satellite is in a circular orbit around a planet. Its engine fires briefly to increase its speed. By what factor must its speed increase, so that it can escape with no further propulsion? Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A satellite is in a circular orbit around a planet. Its engine fires briefly, increasing its speed. By what factor must its speed increase for the satellite to escape from the planet without further propulsion? Justify your answer. (2 marks)" Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 2 (brief)
> At the same radius, the orbital speed is root G M over r, and the escape speed is root two G M over r. So the speed must increase by a factor of root two, about one point four one, whatever the radius or the planet. The slip is answering two, by doubling the speed instead of multiplying it by root **two**.

Visual: card shrinks to the top. Rows: "v_orbit = √(GM/r)", "v_esc = √(2GM/r)", "ratio = √2 ≈ 1.41" boxed; small tag "same r: the burn is brief". On "two" a chip "× 2" fades in and is crossed (caption "doubling speed quadruples K"). Hold about 1 second.

### 14. end of Module 5, and the next field
> That completes Module five. A gravitational field around every mass sets every orbit, and every escape. Next, in Module six, we meet a different kind of field. Between two charged plates, the electric field is uniform, just like gravity close to the ground, so a charged particle accelerates steadily. So how does the voltage across the plates set that **acceleration**?

Visual: board clears to the gravity stage; the radial violet field arrows around Earth draw in. Camera push to a small patch of ground: the arrows there are parallel and equal, tag "near the surface: uniform". As "Between two charged plates" is spoken the ground patch morphs into two coded horizontal plates (top "+", bottom "−") with parallel equal field arrows between them, tag "E: uniform", and a small coded "+q" particle between them with an empty acceleration arrow "a = ?" and a label "V" across the plates. On "acceleration" a chip writes "Next (Module 6): how does voltage between parallel plates determine a charged particle's acceleration?". Hold about 2 seconds. This is the final frame.

### 15. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. With gravity the only force, E = K + U stays constant. The minimum escape reaches infinity with zero speed, so E = 0: ½mv² − GMm/r = 0.
2. v_esc = √(2GM/r) (the 2 inside the root; r from the centre). Earth's surface: 11.2 km s⁻¹. Independent of the object's mass and of launch direction (if the path misses the planet).
3. v_esc = √2 × v_orbit at the same radius. E < 0: bound; E = 0: just escapes; E > 0: escapes with speed to spare, v∞ = √(v² − v_esc²).
4. Assumptions: no air, no propulsion after launch, only the planet's gravity. Rockets keep thrusting, so they never need 11.2 km s⁻¹ at the pad.

Memory aid (large, on the notes screen): *Escape = √2 × orbit.* Second line: *The 2 goes inside the root.*

## Teaching checks

- **Does it explain causes?** Why the probe returns: K runs out before U reaches zero (2). Why the escape speed is finite: U rises only to zero (2). Why E = 0 is the threshold: arriving with zero K at zero U (3). Why mass cancels and direction does not matter (3, 7). Why √2: twice the kinetic energy of a circular orbit (5). Why rockets go slower: energy supplied over the climb (8).
- **Misconceptions addressed:** escape needs infinite speed (1, 2); continuous thrust is needed to escape (8, site); heavier objects need more (7); 2√(GM/r) (crossed in 5 and 11); doubling the orbital speed (crossed in 13); below escape speed it always falls straight back (6).
- **One idea at a time:** energy trade (2), threshold and derivation (3), value (4), comparison (5), classification (6), independence (7), assumptions (8).
- **Video makes it easier:** launches rising higher and returning (1); bars trading with E fixed (2); the probe at infinity with all bars zero (3); the three lanes (6); three probes in three directions (7); the rocket's steady thrust against one kick (8).
- **Response opportunity:** prediction (3 s); two unseen tasks, 10 s each; feedback about 28 s and 21 s.
- **Avoided double teaching:** v18's orbital speed, v21's U and v22's E recalled in a clause.
- **Syllabus coverage:** `P5-IQ3-05` "the concept of escape velocity v_esc = √(2GM/r)": derived (3) and applied (4 to 6, A1, A2). With v21 and v22 the whole dot point is covered.
- **Out of scope by design:** relativistic escape and black holes (site enrichment); heliocentric escape and reference frames; conic trajectory names.

## Practice questions and model answers

**Attempt 1 (scene 10; original wording, site and NASA data, 3 marks suggested).** "Mars has a mass of 6.42 × 10²³ kg and a radius of 3.39 × 10⁶ m. (a) Calculate the escape velocity from the surface of Mars. (b) State one assumption made in this calculation. (G = 6.67 × 10⁻¹¹ N m² kg⁻²)"
Model answer: (a) v_esc = √(2GM/r) = √(2 × 6.67 × 10⁻¹¹ × 6.42 × 10²³ / 3.39 × 10⁶) = √(2.526 × 10⁷) = 5.03 × 10³ m s⁻¹. (b) Any one: no atmosphere (no drag); no propulsion after launch; only Mars's gravity acts (Mars isolated, spherical). Classic mistake (crossed): √(GM/r) = 3.55 × 10³ m s⁻¹.

**Attempt 2 (scene 12; original, 2 marks).** "A satellite is in a circular orbit around a planet. Its engine fires briefly, increasing its speed. By what factor must its speed increase for the satellite to escape from the planet without further propulsion? Justify your answer."
Model answer: The burn is brief, so r is unchanged. Orbital speed v = √(GM/r); escape speed v_esc = √(2GM/r) at the same r (from ½mv² − GMm/r = 0). Ratio v_esc/v = √2 ≈ 1.41, independent of r and M. Classic mistake (crossed): a factor of 2.

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Constants | GM = 4.002 × 10¹⁴ m³ s⁻²; R_E = 6.371 × 10⁶ m | throughout |
| Hook heights | 5 km s⁻¹: h = 4.21 × 10⁶ m ("about four thousand two hundred kilometres"); mgh estimate 1.28 × 10⁶ m; 10 km s⁻¹: h = 2.49 × 10⁷ m ("about twenty-five thousand kilometres") | 1 |
| Climb | GMm/R per kg = 6.28 × 10⁷ J kg⁻¹ (screen only, v21) | 2 |
| Earth v_esc | √(1.2563 × 10⁸) = 11,208.6 m s⁻¹ = 1.12 × 10⁴ ("eleven point two"); NASA 11.186; × 3.6 = 40,351 km h⁻¹ ("about forty thousand") | 4, 5, 8 |
| Orbit at R | 7,925.6 m s⁻¹ ("7.93") | 5 |
| 400 km | orbit 7,688 m s⁻¹ ("7.69"); escape 10,872 m s⁻¹ ("10.9"); extra 3,184 m s⁻¹ ("3.2") | 5 |
| Moon | NASA 2.38 km s⁻¹; √(2 × 6.67 × 10⁻¹¹ × 7.346 × 10²² / 1.7381 × 10⁶) = 2,374 m s⁻¹ ("about two point four") | 4 |
| √2 | 1.41421 | 5, 9, 13 |
| 14 km s⁻¹ | v∞ = √(14,000² − 11,208.6²) = 8,388.6 m s⁻¹ ("8.4", "8.39") | 6 |
| A1 | 2 × 6.67 × 10⁻¹¹ × 6.42 × 10²³ / 3.39 × 10⁶ = 2.5263 × 10⁷; v = 5,026 m s⁻¹ ≈ 5.03 × 10³; slip √(GM/r) = 3,554 m s⁻¹ ≈ 3.55 × 10³ | 10, 11 |
| A2 | √2 ≈ 1.41 | 12, 13 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov); Codex to re-check.

- v_esc = √(2 × 4.002 × 10¹⁴ / 6.371 × 10⁶) = 11,208.56 m s⁻¹; √(4.002 × 10¹⁴ / 6.371 × 10⁶) = 7,925.65 m s⁻¹; ratio 1.414214.
- r = 6.771 × 10⁶ m: √(2GM/r) = 10,872.44 m s⁻¹; √(GM/r) = 7,687.98 m s⁻¹; difference 3,184.46 m s⁻¹.
- v∞ at 14.0 km s⁻¹: √(1.96 × 10⁸ − 1.25632 × 10⁸) = 8,388.58 m s⁻¹.
- Hook: 1/r_max = 1/6.371 × 10⁶ − v²/(2 × 4.002 × 10¹⁴): v = 5,000 → r_max = 1.05829 × 10⁷ m, h = 4.21185 × 10⁶ m; v = 10,000 → r_max = 3.12269 × 10⁷ m, h = 2.48559 × 10⁷ m. 5,000² / (2 × 9.8) = 1.27551 × 10⁶ m.
- Mars: 2 × 6.67 × 10⁻¹¹ × 6.42 × 10²³ = 8.5643 × 10¹³; / 3.39 × 10⁶ = 2.52634 × 10⁷; √ = 5,026.27 m s⁻¹. √(GM/r) = 3,554.12 m s⁻¹. (NASA Mars Fact Sheet: 0.64169 × 10²⁴ kg, 3,389.5 km mean radius, escape 5.03 km s⁻¹.)

## Memory aid check

- **"Escape = √2 × orbit. The 2 goes inside the root."** From the site's HSC trap ("v = √(GM/r) is orbital speed; v_e = √(2GM/r) is escape speed. They differ by √2. Writing 2√(GM/r) is also wrong"). Meaning, as said in scene 9: at the same radius, escape speed is √2 times the circular-orbit speed. Assumptions checked: same central body and same r; circular orbit for the comparison speed; no air or later thrust (scene 8). It helps a new case: A2 directly, and A1 (catching the missing 2). Introduced after scenes 3 to 8.
- **Considered, not used:** "Zero energy to escape" alone (true, but students already confuse U = 0 with E = 0; the derivation scene states E = 0 explicitly instead).

## Narration length estimate

Revision 1 count (6 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,585 characters**, 15 scenes. Characters per scene (1 to 15): 409, 523, 531, 470, 470, 492, 347, 434, 269, 262, 399, 221, 303, 366, 75. At 13.3 characters per second the speech is about 420 s; add about 3 s for the prediction countdown, about 5 s for the two launches in scene 1, about 2 s for the replay in scene 2, about 3 s for the three lanes in scene 6, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the memory-aid hold, 2 s for the handoff hold and about 54 s more of the quiet notes hold (about 93 s of holds and countdowns): **about 513 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 8's rocket sentences (keep the plate and tag) if the review cuts them, add a line elsewhere to stay above 5,500 characters; scene 4's Moon sentence.

## Opening frame

v22's final frame (`phys-y12-m5-v22.md`): paper background; at the right the three-curve energy graph (orange K above, violet U and navy E below) with a dashed zero band "E = 0: escape?"; at the left the Earth plate with the satellite plate on its surface, an orange launch arrow straight up "v = ?" and the dashed radial line to "∞"; heading "Why does a higher circular orbit have lower speed but greater total energy?"; chip "Next: what minimum launch speed allows escape without further propulsion?". Scene 1 shrinks the graph to the top right and launches the probe; the heading changes in scene 2.

## Final frame

The last explained frame (end of scene 14): paper background; two coded horizontal parallel plates across the centre (top "+", bottom "−") with parallel equal field arrows between them, tag "E: uniform", a voltage label "V" across the gap; a small coded "+q" particle between the plates with an empty arrow "a = ?"; at the left a small inset of Earth's surface patch with its parallel gravitational field arrows, tag "near the surface: uniform"; heading "What minimum launch speed allows escape without further propulsion?"; chip "Next (Module 6): how does voltage between parallel plates determine a charged particle's acceleration?". phys-y12-m6-v01 can open on this frame (open decision 1).

## Scene list and build ids

Lesson key `p-y12-m5-v23` (route phys-y12-m5-v23). Suggested explainer folder `src/explainer/lessons/phys-y12-m5-v23`; build folder `docs/production/claude-pm/lessons/p-y12-m5-v23` (root to confirm).

In order (15 scene headings): hook, energy-trade, threshold, earth-value, escape-vs-orbit, classify, independence, assumptions, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, module-bridge, key-notes.

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). `motionTools`: vertical launch stage (kit gap 8), energy bars (kit gap 7), well graph (kit gap 6), gravity stage (kit gap 1), uniform-field morph, `AlignedAlgebra`, `Countdown`, `CameraStage`. Transitions: 1 to 2 camera continue; 2 to 3 camera push to the column; 3 to 4 clear change to the calculation layout; 4 to 5 camera change; 5 to 6 camera change; 6 to 7 camera change; 7 to 8 clear change; 8 to 9 clear change; attempts card shrink; 13 to 14 clear change; 14 to 15 fade.

Holds: hook (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/p-y12-m5-v23-learning-review.md`, `checks/p-y12-m5-v23-physics-check.md`.

## Assets

Have (inspected 6 Nov on a session contact sheet; scaled uniformly only):
- `public/assets/physics/phys-y11-earth-v1.png`: scenes 1, 2, 5 to 8, 14.
- `public/assets/physics/phys-y11-rocket-v1.png` (2400 × 800, RGBA, horizontal slim rocket): scene 8, rotated to vertical (open decision 2).

Requested earlier in this run: `y12p-satellite-v1.png` (v17), used as the probe.

Need (new plates): none.

Coded: launch paths, height markers, energy bars, well inset, lanes, atmosphere band, thrust arrows, parallel plates, field arrows, particle, algebra, chips, cards, countdowns, notes board.

Kit gaps: 8. **Vertical launch stage** (radial launch at a chosen speed; motion from energy conservation in real proportion with a slow-motion factor; maximum-height readout; optional mgh ghost; bars riding along).

## Codex asset brief (Year 12 Physics M5 v23)

No new plates. Codex checks that `phys-y11-rocket-v1.png` rotated 90° anticlockwise reads as a rocket standing on a pad (open decision 2) and reports the nozzle point in rotated coordinates for the thrust arrow.

## Codex error-check brief

Error-only check:
1. Re-check every value under "Numbers to verify" and every value in narration, screen text, attempts and notes against "Numbers used"; confirm the NASA figures against the cited fact sheets.
2. Confirm the physics of every learner-visible claim: constant E with gravity only; minimum escape means E = 0 at infinity and hence at launch; v_esc = √(2GM/r) with m cancelling; v_esc = √2 v_orbit at the same r; classification by the sign of E with v∞ = √(v² − v_esc²); independence of mass and of direction unless the path meets the planet; the assumptions; rockets need not reach v_esc at the pad (author notes a to e).
3. Confirm the memory aid's assumptions.
4. Confirm every cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
5. Confirm both attempt cards are original, carry every given, and show nothing answer-bearing.
6. Confirm the syllabus quote matches the route JSON exactly and is labelled 2017.
7. Confirm no person, hand, face or body outline is drawn or requested.
8. Confirm no em dash (U+2014) and no U+2061, and Australian spelling.
9. Confirm the narration counts by script.
10. Report the site notes under Decisions to root.

## YouTube metadata (draft)

Title: Escape Velocity: Deriving v = √(2GM/r) | HSC Physics Module 5

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module5/lesson16.sa.html

Launch a probe straight up and it climbs, slows and falls back. Is there a speed at which it never returns, and why isn't that speed infinite? Use total energy with zero at infinity to derive escape velocity, find Earth's 11.2 km/s, compare it with orbital speed (a factor of √2), sort launches into bound and escaping, and see why real rockets never leave the pad at escape velocity. Two exam-style questions at the end. Last video of Module 5.

Year 12 Physics (2017 syllabus), Module 5: Advanced Mechanics.
Syllabus content (NSW Physics Stage 6, 2017):
"derive quantitatively and apply the concepts of gravitational force and gravitational potential energy in radial gravitational fields to a variety of situations, including but not limited to: the concept of escape velocity v_esc = √(2GM/r); ..."
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Planet data: NASA. Next: Module 6, charged particles between parallel plates.

#HSCPhysics #Physics #EscapeVelocity #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (is the E = 0 at infinity step clear for a student who confuses U = 0 with E = 0; is the Module 6 bridge helpful or a distraction), then the physics check and the Codex error check.
- Judge the launches, the three lanes and the rocket contrast at playback speed.
