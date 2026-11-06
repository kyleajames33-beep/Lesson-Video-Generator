# Year 12 Physics M5 V22: Orbital energy. Why does a higher circular orbit have lower speed but greater total energy? (design)

Status: Revision 2 (6 Nov 2026): brief 188 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 5,554 characters (scene sum; Revision 1 stated 5,569 by the joined convention), 16 scenes, about 504 s, counted by script with the build parser rules (see "Narration length estimate").

Scope: Year 12 Physics (Physics Stage 6, 2017 syllabus), Module 5 (Advanced Mechanics), inquiry question "How does the force of gravity determine the motion of planets and satellites?". Templates as `phys-y12-m5-v17.md`. No pre-design pack exists; the pack work is done here. Site lesson read in full (6 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson12.sa.html`, SHA256 `441719a2abd13157d21f73bb1213e999f7ee9bde8f45feada17655abc31ca73e` (recomputed 6 Nov; matches the route). Route entry: `phys-y12-m5-v22`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Combine kinetic and potential energy into E=-GMm/(2r); separate the instantaneous transfer burn from the final circular state. Stop before detailed transfer ellipses." Next: "phys-y12-m5-v23: What minimum launch speed allows escape without further propulsion?"

Owner rules applied: as v17 (2017 syllabus quoted exactly; no people, hands, faces or body outlines; Earth, the satellite and the comet are painted plates; energy bars, curves, thrust arrows and strips are coded; every number recalculated in Python with the HSC data sheet constants; "Pause here to answer." with a 10 s countdown; brief feedback; Australian spelling; no em dashes). Recalled, not re-taught: v18 (v² = GM/r, higher is slower), v20 (comet faster near the Sun; equal areas), v21 (U = −GMm/r, zero at infinity, ΔU).

Syllabus content (Physics Stage 6 (2017), Module 5; ledger id `P5-IQ3-05`), quoted from the route JSON `syllabusActions`:

- `P5-IQ3-05`: "derive quantitatively and apply the concepts of gravitational force and gravitational potential energy in radial gravitational fields to a variety of situations, including but not limited to:" "the concept of escape velocity v_(esc)=sqrt((2GM)/(r))", "total potential energy of a planet or satellite in its orbit U=-(GMm)/(r)", "total energy of a planet or satellite in its orbit U+K=-(GMm)/(2r)", "energy changes that occur when satellites move between orbits (ACSPH096)", "Kepler’s Laws of Planetary Motion (ACSPH101)"

This video covers U + K = −GMm/2r, energy changes between orbits, and the energy side of Kepler's laws (also completing the "total energy" part of `P5-IQ3-04` deferred from v20). v23 covers escape velocity.

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 54)

**Boundary:** starts on v21's final frame (two circular orbits at r and 2r with U bars and "K = ?", "total = ?"). Teaches: the case (a 500 kg satellite raised from r = 7.0 × 10⁶ m to 1.4 × 10⁷ m: faster after the first burn, slower in the final circle); K = GMm/2r from v² = GM/r; U = −GMm/r and |U| = 2K; E = K + U = −GMm/2r, negative (bound), less negative when higher; E = −K; the three curves against r; the worked energies at both radii and the accounting (engines supply ΔE, the lost kinetic energy supplies an equal amount, both raise U); the first burn versus the final circular state (coasting outwards trades K for U; a second burn circularises); constant total energy on an ellipse, with the comet speeding up as U falls (the energy side of Kepler's second law); drag making a low satellite speed up (A2). Stops before transfer-ellipse calculations (Hohmann Δv, vis-viva) and escape (v23).

## Decisions

- **Learner question (route wording kept).** "Why does a higher circular orbit have lower speed but greater total energy?" The answer, built in order: K = GMm/2r falls with r (2); U = −GMm/r rises towards zero and is twice K in size (3); so E = −GMm/2r rises towards zero, and E = −K (4); the three curves (5); the numbers and the energy accounting (6, 7); the burn is a moment, the final circle is a state (8); on an ellipse E is constant and K and U trade (9).
- **Hook (site hook, made concrete).** The site's "prograde burn ... moves more slowly" with numbers from the site's own short-answer Q2 radii (500 kg, 7.0 × 10⁶ m to 1.4 × 10⁷ m). Circular speeds 7.56 and 5.35 km s⁻¹ (data sheet constants). Revision 2 (root decision 16 default, brief 188): the transfer speeds are not shown; the screen uses "faster", "slowing as it climbs" and "slower than this circle needs" tags with a live teal speed bar, and the ideal values (8.73 and 4.37 km s⁻¹, transfer energy −9.53 × 10⁹ J) stay in author note a. Prediction "where did the energy go?" with a 3 s countdown.
- **Energy build (site cards 1 to 3).** One piece per scene: K (2), U (3), E (4). "E = −K" is said in scene 4 because it turns the question's paradox into one line ("lose speed, and the total goes up"). The site's term "Virial theorem" is not used (not in the syllabus); "binding energy" is not named.
- **Graph (site card 4).** K above zero, U below at twice the depth, E halfway between U and zero; all approach zero as r grows. From the kit's `OrbitEnergy` visual (family `m5-orbit-energy`), whose limit ("not an animated transfer manoeuvre") is respected: the burn in scene 8 is drawn on the orbit stage, not on the graph.
- **Worked example and accounting (site short-answer Q2 and the "Apply 6 marks" answer, re-valued).** At 7.0 × 10⁶ m: K = 1.43 × 10¹⁰ J, U = −2.86 × 10¹⁰ J, E = −1.43 × 10¹⁰ J; at 1.4 × 10⁷ m every value halves. ΔE = +7.15 × 10⁹ J, ΔK = −7.15 × 10⁹ J, ΔU = +1.43 × 10¹⁰ J. "Half from the engines, half from the lost kinetic energy" (site 6-mark answer, lesson 15 Analyse answer).
- **Burn versus final state (route stop; site card 5 and MC2).** Two moments kept apart on screen with separate labels: "just after burn 1: faster, more total energy, not yet circular" and "final circle: slower, more total energy". The coasting climb is likened to a ball thrown upwards (Year 11), the only analogy used. Revision 2: no transfer numbers on screen (tags only).
- **Ellipse energy (syllabus "total energy ... non-circular orbits"; v20 open decision 2).** One scene: with no thrust and no air, E is constant on an ellipse; the comet speeds up as U falls (site lesson 17 "Account 5 marks" energy half). The general E = −GMm/2a is not taught (site: Lesson 17 extension).
- **Memory aid.** "In a circle, total is minus kinetic: higher is slower, but higher costs more." See "Memory aid check".
- **Attempts.** A1 (site short-answer Q1, re-valued: 800 kg at 500 km): K = 2.33 × 10¹⁰ J, U = −4.66 × 10¹⁰ J, E = −2.33 × 10¹⁰ J. A2 (new; the classic satellite-drag paradox): drag removes energy yet the satellite speeds up. Crossed: A1 "r = 5.0 × 10⁵ m"; A2 "drag must slow it down".
- **Colour key (root decisions 2 and 10; Revision 2).** Velocity teal (speed readouts, speed bars and the handoff's launch arrow; previously orange); kinetic energy orange; potential energy violet; total energy navy (bold outline); engine thrust and energy supplied green; framed answers in a dark-ink box; crossed chips and their hand tags red; grey at full opacity.
- **Type sizes (Revision 2, 1080p):** the current working line at least 44 px (scenes 2, 4, 6 and the feedback rows 52 px; the framed "K = GMm/2r" and "E = −GMm/2r" 60 px); live readouts (scenes 1, 5, 7) about 52 px; supporting lines, givens, table rows and chips 30 to 36 px; hand-font tags at least 30 px; question text 36 px; nothing a student must read below 26 px. All text above the bottom 12% of the frame.
- **Anchor (Revision 2).** Scene 1 opens on v21's final frame with the painted Earth and two delivered satellite plates, and runs the orbit raise on them; the delivered comet with the painted Sun carries scene 9.
- **Simulation (Revision 2).** The core live control is scene 5's orbit-radius marker on the three-curve graph: as r goes r₁, 2r₁, 3r₁, 4r₁, live readouts show v (× 1, × 0.71, × 0.58, × 0.50) and K, U, E (× 1, × ½, × ⅓, × ¼ of their r₁ values), with the bars resizing (relative readouts, so scene 6's worked numbers are not given away). Scene 1 adds a live speed bar through the two burns; scene 7 a live fill gauge in the ΔU box; scenes 8 and 9 live morphing bars.
- **Stage changes (Revision 2).** Scene 1 the orbit raise; scenes 2 and 3 the algebra column with small bars; scene 4 the bars at full height (a new set-up that breaks the Revision 1 scenes 2 to 4 run of about 85 s); scene 5 the graph with the radius control; scene 6 full-width working; scene 7 the flow strip; scene 8 the orbit-change stage; scene 9 the comet. No set-up runs past about 60 s.
- **Handoff.** Scene 15 extends the E curve's zero line into a dashed band "E = 0: escape?" and launches a satellite straight up from the surface (v23). (Revision 2: scene number corrected from 14.)
- **Site sources used:** lesson 12 hook, vocabulary (GPE, orbital KE, total energy, circular relation), Key Point, card 1 (KE derivation; Hubble intro), card 2 (U, reference), card 3 (total, bound), card 4 (graphs and graph discipline), card 5 (burns, transfer, final state, both misconceptions), MC2 and MC5, short-answer Q1 (A1) and Q2 (worked example), the "Apply 6 marks" answer (scenes 2 to 7), the "Analyse 5 marks" answer (bound means E < 0; scene 4); lesson 17 "Account 5 marks" energy half (scene 9). Not used: Virial theorem name, binding energy name, the escape condition (v23).
- **Site notes (for root to log if accepted):**
  1. Lesson 12, short-answer Q3 model answer: "'More tightly bound' means the satellite is in a lower orbit (more negative E implies smaller r)". The question does not say the two satellites have the same mass; E = −GMm/2r depends on m, so a more negative E implies a smaller r only for equal masses (Activity 2 does state "same mass"). Suggest adding "same mass" to Q3.
  2. Lesson 12 card 1 places Hubble at 535 km; lesson 11 Q1 uses 547 km. Both are real at different dates; suggest one value across the module.
  - Checked and correct: K = 1.42 × 10¹⁰ J, U = −2.84 × 10¹⁰ J, E = −1.42 × 10¹⁰ J (site constants); Activity 1 (1.59 × 10¹⁰ J; ΔE = +7.95 × 10⁹ J); Q1 (2.32, −4.64, −2.32 × 10¹⁰ J); Q2 (ΔE = +7.11 × 10⁹ J).
- **Cause chain taught, in order:** (1) v² = GM/r gives K = GMm/2r, smaller when higher (2); (2) U = −GMm/r, twice K in size (3); (3) E = −GMm/2r = −K: negative (bound), and less negative when higher (4); (4) moving out, K falls by half of U's rise; the engines supply the other half (6, 7); (5) a forward burn raises speed and E at once, but the craft then climbs and slows, and a second burn circularises; only the final circle is slower (8); (6) with no thrust, E is constant, so on an ellipse K rises as U falls (9).
- **Entry knowledge:** v18, v20, v21.
- **Learner-visible vocabulary:** kinetic energy K (2); total (mechanical) energy E = K + U (4); bound (not enough energy to reach infinity, 4); burn (a short engine firing, 1, 8); circularise (a second burn that makes the new path a circle, 8).
- **Legacy logic ported:** none.
- **New explainer motion:** **energy bars** (kit gap 7: three bars per state, K orange up from a zero line, U violet down, E navy outline, computed from GMm/2r and GMm/r on one scale, morphing between states); **orbit-change stage** (gravity stage with two circles, a satellite, a short green thrust arrow at the burn, a dashed transfer path drawn schematically, speed readouts); the three-curve energy graph (from `OrbitEnergy`); `AlignedAlgebra`; a two-column energy table; `Countdown`; `QuestionCard`; `Chip` with `cross`; `KeyNotes`.
- **No human figures.**
- **Author notes (not learner copy):**
  (a) Ideal two-burn transfer between r₁ = 7.0 × 10⁶ m and r₂ = 1.4 × 10⁷ m (a = 1.05 × 10⁷ m): speed just after burn 1 = √(GM(2/r₁ − 1/a)) = 8,731 m s⁻¹ (Δv 1,170 m s⁻¹); arrival speed 4,365 m s⁻¹; after burn 2 5,347 m s⁻¹ (Δv 981 m s⁻¹); transfer energy −GMm/2a = −9.53 × 10⁹ J; coast 1.48 h. Revision 2: author data only; the screen uses "faster" and "slower" tags (root decision 16). The transfer path is drawn from these values.
  (b) E = −K for circular orbits only. On an ellipse, K and U vary while E stays −GMm/2a (not taught).
  (c) Drag (A2): dE < 0 gives dr < 0; dK = −dE > 0 and dU = 2dE; gravity does work −dU = 2|dE| while drag removes |dE|, so K rises by |dE|.
  (d) "A ball thrown upwards" recalls Year 11 energy conservation; no person throws it on screen (a coded ball rises from a launch arrow).
  (e) Pronunciations: "big G M m over two r"; "one point four three times ten to the ten".

- **Open decisions for root:**
  - **1. Hook readouts (physics check).** Revision 2: settled; root decision 16's default is taken (brief 188): "faster" and "slower" tags replace the 8.73 and 4.37 km s⁻¹ readouts and the transfer energy label.
  - **2. Ellipse scene (learning review).** Revision 2: settled; brief 188 asked to keep scene 9, because it completes the non-circular energy facet deferred from v20.

Main question: *An engine pushes a satellite forwards and it speeds up, yet once it settles into a higher circular orbit it is slower than before. Where did the energy go, and why does the higher orbit have more total energy?*
Entry knowledge: v18, v20, v21.
Stops after: K = GMm/2r, U = −GMm/r, E = −GMm/2r = −K; energy changes between circular orbits and their accounting; burn versus final state; constant E on an ellipse. No transfer-orbit calculations; no escape.
Handoff: v23, the minimum launch speed for escape without further propulsion.

## Script and shots

Cue words in **bold** trigger the visual change. Screen symbols in italic: *K*, *U*, *E*, *r*, *v*. Paper background and handwritten headline face as the explainer house style.

### 1. hook (where did the energy go?)
> A five hundred kilogram satellite is in a circular orbit, seven thousand kilometres from Earth's centre, moving at about seven point five six kilometres per second. To lift it higher, its engine pushes it forwards, and it **speeds up**. But once it settles into a circular orbit twice as far out, it's moving at only five point three five kilometres per **second**, slower than when it started. The engine added energy. So where did it go? Have a **think**.

Visual: opens on v21's final frame (see "Opening frame"); the bars fade and the inner satellite plate moves on its circle (r₁ = 7.0 × 10⁶ m) with a teal speed readout (52 px) "7.56 km s⁻¹" and a live teal speed bar. On "speeds up" a short green thrust arrow fires along the velocity for a moment and the speed bar jumps up, tag "faster"; the satellite leaves the circle on a dashed outward path, and as it climbs the bar falls, tag "slowing as it climbs"; reaching r₂ it is too slow for the new circle (tag "slower than this circle needs"), and a second short green arrow fires. On "second" it runs on the outer circle (r₂ = 1.4 × 10⁷ m), readout "5.35 km s⁻¹"; a red chip "slower than at the start". Hand tags (30 px): green "engine adds energy", teal "7.56 → 5.35", and a teal pen ring round "5.35 km s⁻¹". On "think" the 3 s `Countdown` runs beside "The engine added energy. Where did it go?" with three option chips (36 px) "into speed", "into height", "it was lost".

### 2. kinetic energy in a circular orbit
> Let's build the satellite's energy one piece at a time. First, kinetic energy. In a circular orbit, gravity supplies the centripetal force, so v squared equals big G M over r. Put that into a half m v squared, and the kinetic energy is big G M m over two **r**. It's positive, and it gets smaller as r gets **bigger**, because higher orbits are slower. Notice the satellite's mass doesn't cancel this time, so energy does depend on m.

Visual: clear change; the heading writes on: "Why does a higher circular orbit have lower speed but greater total energy?"; the orbit stage small at the left (both circles, a satellite plate on each); the right column builds with `AlignedAlgebra` (current line 52 px): "GMm/r² = mv²/r → v² = GM/r (v18)", "K = ½mv² = ½m(GM/r)". On "r" "K = GMm/2r" in an orange-edged dark-ink frame (60 px). On "bigger" the energy bars (kit gap 7) appear beside each satellite: an orange K bar rising from a zero line, the outer bar half the height of the inner; tag "higher: smaller K". Hand tags: orange "from v² = GM/r", grey "m stays in", and an orange pen ring round "2r".

### 3. potential energy
> Next, potential energy. From last time, U is minus big G M m over r, with zero at infinity. Compare the sizes: U is exactly twice as big as the kinetic energy, and it's **negative**. Higher up, U is less negative, so moving out, U rises while K falls.

Visual: camera continue. Right column: "U = −GMm/r (v21)" in violet (52 px). Violet U bars hang down from each zero line (each twice the length of that satellite's K bar). On "negative" a bracket on the inner pair reads "|U| = 2K". Hand tags: violet "twice as big", violet "below zero", and a violet pen ring round the bracket.

### 4. total energy
> Now add them. Big G M m over two r, plus minus big G M m over r, gives a total energy of minus big G M m over two **r**. It's negative, which means the satellite is bound: it doesn't have enough energy to reach infinity. And here's the key. A bigger r makes this total less negative, so a higher orbit has more total **energy**. In fact, the total is exactly minus the kinetic energy. Lose speed, and the total goes **up**.

Visual: camera push to the energy bars at full height (a new set-up; the algebra moves to a strip above them). `AlignedAlgebra` (52 px): "E = K + U = GMm/2r − GMm/r". On "r" "E = −GMm/2r" in a navy-edged dark-ink frame (60 px). A navy outlined E bar appears beside each K and U pair, hanging down half as far as U. Tag "E < 0: bound". On "energy" the outer E bar is shown half as deep as the inner, a green up arrow between them, "higher: E less negative = more total energy". On "up" a line "E = −K" writes in a dark-ink frame and the K and E bars of each satellite mirror each other across the zero line. Hand tags: navy "half of U", navy "bound", and a navy pen ring round "E = −K".

### 5. the three curves
> On a graph against r, the kinetic energy curve sits above zero, and the potential energy curve sits below, twice as deep. The total sits halfway between the potential energy and zero, a mirror image of the kinetic energy. Move outwards, and all three curves head towards **zero**. Kinetic energy falls, but potential and total energy **rise**.

Visual: clear change to the three-curve graph (from `OrbitEnergy`): axes (32 px) "energy (J)" against "orbital radius r", zero line across the middle. Orange K curve above, violet U curve below, navy E curve between U and zero. The live orbit-radius control starts (see "Simulation"): a marker rides along r from r₁ with readouts (52 px) navy "r" (r₁, 2r₁, 3r₁, 4r₁), teal "v" (× 1, × 0.71, × 0.58, × 0.50) and orange, violet and navy "K, U, E" (× 1, × ½, × ⅓, × ¼ of their values at r₁), the three bars beside the graph resizing with it. On "zero" a dot slides along each curve from r₁ out to large r, all approaching the zero line. On "rise" arrows at the r₁ to r₂ step: orange down "K falls", violet up "U rises", navy up "E rises". Hand tags: orange "mirror of E", navy "halfway to U", and a navy pen ring round the E curve.

### 6. worked example: the satellite's energies
> Let's put numbers on our satellite. Big G M m is two point zero zero one times ten to the seventeen. At seven times ten to the six metres, the kinetic energy is one point four three times ten to the ten joules, the potential energy is minus two point eight six times ten to the ten, and the total is minus one point four three times ten to the **ten**. Double the radius, and every value **halves**. So the kinetic energy falls by seven point one five times ten to the nine joules, the potential energy rises by twice that, and the total rises by seven point one five times ten to the nine **joules**. That rise is the energy the engines had to supply.

Visual: clear change to full-width working. Task strip (36 px): "Find K, U and E at r₁ = 7.0 × 10⁶ m and r₂ = 1.4 × 10⁷ m (m = 500 kg)." Givens grouped in one navy box (32 px): "GM = 4.002 × 10¹⁴ m³ s⁻²", "m = 500 kg", "r₁ = 7.0 × 10⁶ m", "r₂ = 1.4 × 10⁷ m". A two-column table (rows 44 px, current row 52 px): column r₁: "GMm = 2.001 × 10¹⁷ J m", "K = 2.001 × 10¹⁷ / 1.4 × 10⁷ = 1.43 × 10¹⁰ J", "U = −2.86 × 10¹⁰ J"; on "ten" "E = −1.43 × 10¹⁰ J". On "halves" column r₂ fills: "K = 7.15 × 10⁹ J", "U = −1.43 × 10¹⁰ J", "E = −7.15 × 10⁹ J". A change row writes: "ΔK = −7.15 × 10⁹ J", "ΔU = +1.43 × 10¹⁰ J"; on "joules" "ΔE = +7.15 × 10⁹ J" in a dark-ink frame (52 px) with a green tag "supplied by the engines". A chip "E = 1.43 × 10¹⁰ + 2.86 × 10¹⁰ = 4.29 × 10¹⁰ J" fades in and is crossed (red tag "U is negative"). Hand tags: orange "K halves", violet "U halves", and a navy pen ring round the ΔE frame.

### 7. where the energy went
> So here's where the energy went. The potential energy rose by one point four three times ten to the ten joules. Half of that came from the engines. The other half came from the kinetic energy the satellite **lost** as it climbed. So the engines paid for only half the climb, and the satellite's own speed paid for the rest. A higher orbit is slower, and it still costs **energy**.

Visual: camera change to an energy-flow strip: a violet "ΔU = +1.43 × 10¹⁰ J" box at the right (52 px) with a live fill gauge; a green arrow from "engines: 7.15 × 10⁹ J" flows into it and the gauge fills to half. On "lost" an orange arrow from "kinetic energy lost: 7.15 × 10⁹ J" flows in too and the gauge fills to the top, the two halves filling the violet box. On "energy" the hook's chips return: "into height" ticks; "into speed" crossed. Hand tags: green "half from the engines", orange "half from its own speed", and a violet pen ring round the full box.

### 8. the burn is a moment, the circle is a state
> But hold on, the engine did make it faster. That's true at the moment of the burn. But the satellite isn't on a circle any more. It coasts outwards on a stretched path, and like a ball thrown upwards, it slows as it climbs, trading kinetic energy for potential **energy**. When it reaches the higher radius, a second burn pushes it into the new circle. Only that final circular state is slower than the original **one**.

Visual: camera change back to the orbit-change stage. Two labelled moments (36 px): at the first green thrust arrow "just after burn 1: faster, more total energy, not yet circular". As it coasts along the dashed path its bars morph: orange K shrinking, violet U rising, navy E constant (tag "coasting: E constant"), and its teal speed bar falls. On "energy" an inset beside it shows a coded ball rising from a launch arrow and slowing (no thrower). At r₂ the second green arrow, "burn 2: speeds it up into the new circle". On "one" the two final labels "start: circle, 7.56 km s⁻¹" and "end: circle, 5.35 km s⁻¹" pulse side by side in dark-ink frames (44 px). Hand tags: teal "fast for a moment", navy "E stays the same", and a teal pen ring round "5.35 km s⁻¹".

### 9. the same trade on an ellipse
> The same trade happens on any elliptical orbit. With no engines and no air, the total energy stays constant. As a planet or a comet falls in towards the Sun, its potential energy drops, so its kinetic energy rises, and it speeds up. That's the energy side of Kepler's second **law**. Far from the Sun it's the reverse, and the comet crawls. Nothing is lost, the energy just changes form.

Visual: clear change to v20's teaching ellipse with the painted Sun (`phys-y11-sun-v1.png`) at a focus and the delivered comet plate (`y12p-comet-v1.png`, inspected, rotated about its nucleus) moving round it. Energy bars ride beside the comet: the navy E bar fixed; orange K growing and violet U deepening as it approaches perihelion, then the reverse; a teal speed bar rises and falls with K. On "law" a chip "Kepler's 2nd law: fast when near (v20)" with a tag "E constant (no thrust, no air)". Hand tags: orange "K up", violet "U down", and a navy pen ring round the fixed E bar.

### 10. memory aid
> Here's the shortcut for circular orbits: the total energy is minus the kinetic energy. So slower means more total energy. Higher is slower, but higher costs **more**. And between two circles, the kinetic energy you lose always equals the energy you supply.

Visual: board clears to the K and E bars for the two orbits, mirrored. The handwritten line writes above in a framed memory card (hand lettering, navy and orange, 52 px; the same card is reused on the notes screen): "In a circle, E = −K." Second line in the card on "more": "Higher is slower, but higher costs more." Hold about 2 seconds.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. An eight hundred kilogram satellite is in a circular orbit five hundred kilometres above Earth's surface. Calculate its kinetic energy, its gravitational potential energy and its total energy, using the data sheet values. Pause here to answer.

Visual: `QuestionCard` (subject "Physics") arrives with its full text in one move (question text 36 px), with a small satellite plate beside it, worded as printed: "An 800 kg satellite is in a circular orbit 500 km above Earth's surface. Calculate the satellite's (a) kinetic energy, (b) gravitational potential energy and (c) total energy. (G = 6.67 × 10⁻¹¹ N m² kg⁻², M_E = 6.0 × 10²⁴ kg, R_E = 6.371 × 10⁶ m)" Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 12. feedback 1 (brief)
> First, r equals six point eight seven one times ten to the six **metres**. Big G M m is three point two zero two times ten to the seventeen. So U is minus four point six six times ten to the ten joules, the kinetic energy is half its size, plus two point three three times ten to the ten, and the total is minus two point three three times ten to the ten **joules**. The classic slip is using five hundred kilometres as **r**.

Visual: card shrinks to the top; "above Earth's surface" underlines. Rows (44 px): on "metres" "r = 6.371 × 10⁶ + 0.500 × 10⁶ = 6.871 × 10⁶ m"; "GMm = 4.002 × 10¹⁴ × 800 = 3.202 × 10¹⁷"; "U = −GMm/r = −4.66 × 10¹⁰ J"; "K = GMm/2r = 2.33 × 10¹⁰ J"; on "joules" "E = K + U = −2.33 × 10¹⁰ J" in a dark-ink frame (52 px). On "r" a chip "r = 5.00 × 10⁵ m" fades in and is crossed. Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. A satellite in a low circular orbit slowly loses energy to air drag, and gradually spirals down through lower circular orbits. Explain why its speed increases, even though drag removes energy. Pause here to answer.

Visual: `QuestionCard` arrives with its full text in one move (question text 36 px), worded as printed: "A satellite in a low circular orbit loses energy slowly because of air drag and gradually moves to lower circular orbits. Explain why the satellite's speed increases even though drag removes energy from it. (3 marks)" Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 2 (brief)
> Drag removes energy, so the total energy becomes more negative. Total energy is minus big G M m over two r, so a more negative total means a smaller radius. And in a smaller circular orbit the speed is higher, because v squared equals big G M over r. As it drops, gravity does twice as much work on it as drag takes away. The slip is thinking drag must slow it **down**.

Visual: card shrinks to the top. The two-circle bars return, with the satellite moving from the outer to the inner circle. Rows (44 px): "E = −GMm/2r more negative → r smaller", "v = √(GM/r) larger (K = −E rises)" in a dark-ink frame (52 px), "gravity's work = −ΔU = 2 × energy lost to drag". On "down" a chip "drag slows it down" fades in and is crossed (caption "it falls inwards and speeds up"). Hold about 1 second.

### 15. handoff
> Every circular orbit has a negative total energy, so it's bound. To escape completely, a craft needs a total energy of at least zero. So what's the slowest launch speed that gets it there, with no more help from an engine? That's **next**, along with how it compares with the speed of a circular orbit.

Visual: board clears to the three-curve graph; the zero line thickens into a dashed band "E = 0: escape?". Beside it, the gravity stage: the satellite plate on Earth's surface with a teal launch arrow pointing straight up, "v = ?", and the dashed radial line to "∞" from v21. On "next" a chip writes "Next: what minimum launch speed allows escape without further propulsion?". Hold about 2 seconds. This is the final frame.

### 16. key notes (quiet, hold about 50 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Circular orbit: v² = GM/r, so K = GMm/2r.
2. U = −GMm/r, so |U| = 2K.
3. E = K + U = −GMm/2r = −K: negative, so bound.
4. Higher circle: slower, but E is greater (less negative).
5. No thrust or drag: E is constant; on an ellipse K and U trade.

Memory aid (framed card under the notes, hand lettering, navy and orange as in scene 10): *In a circle, E = −K.* Second line in the card: *Higher is slower, but higher costs more.* Notes in the role colours, 32 px; about 230 characters of bullet text; no paragraphs.

## Teaching checks

- **Does it explain causes?** Why K falls with r: v² = GM/r (2). Why E rises with r: U rises twice as fast as K falls (3, 4, 7). Why the engine's energy "vanishes": it goes, with the lost kinetic energy, into U (7). Why the burn speeds the craft up yet the final circle is slower: coasting outwards trades K for U, and the final circle's speed is set by r (8). Why a comet speeds up near the Sun: constant E, falling U (9). Why drag speeds a satellite up: lower orbit, gravity's work exceeds the loss (14).
- **Misconceptions addressed:** adding energy must make the final speed larger (1, 7, 8, site card 5); the first burn instantly places the craft in the higher circle (8, site card 5); negative energy means no energy (4); drag slows a satellite down (crossed in 14); r is the altitude (crossed in 12).
- **One idea at a time:** K (2), U (3), E (4), graph (5), numbers (6), accounting (7), the transfer moments (8), the ellipse (9).
- **Video makes it easier:** the hook's speed bar falling as the craft climbs (1, 8); bars mirroring (4); energy-flow arrows filling the U box from two sources (7); the comet's bars trading with E fixed (9).
- **Response opportunity:** prediction (3 s); two unseen tasks, 10 s each; feedback about 29 s and 29 s.
- **Avoided double teaching:** v18's v² = GM/r and v21's U recalled in a clause; v20's comet reused.
- **Syllabus coverage:** `P5-IQ3-05` "total energy ... U + K = −GMm/2r" (2 to 6) and "energy changes that occur when satellites move between orbits" (1, 6 to 8, A2); "Kepler's Laws" energy side (9). `P5-IQ3-04` total energy for circular (4) and non-circular orbits (9).
- **Out of scope by design:** transfer-orbit calculations (Hohmann, vis-viva); escape velocity (v23).

## Practice questions and model answers

**Attempt 1 (scene 11; original wording from site Q1, 3 marks suggested).** "An 800 kg satellite is in a circular orbit 500 km above Earth's surface. Calculate the satellite's (a) kinetic energy, (b) gravitational potential energy and (c) total energy. (G = 6.67 × 10⁻¹¹ N m² kg⁻², M_E = 6.0 × 10²⁴ kg, R_E = 6.371 × 10⁶ m)"
Model answer: r = 6.871 × 10⁶ m; GMm = 3.202 × 10¹⁷ J m. (a) K = GMm/2r = 2.33 × 10¹⁰ J. (b) U = −GMm/r = −4.66 × 10¹⁰ J. (c) E = K + U = −2.33 × 10¹⁰ J. Classic mistake (crossed): r = 5.00 × 10⁵ m.

**Attempt 2 (scene 13; original, 3 marks).** "A satellite in a low circular orbit loses energy slowly because of air drag and gradually moves to lower circular orbits. Explain why the satellite's speed increases even though drag removes energy from it."
Model answer: Drag removes mechanical energy, so E = −GMm/2r becomes more negative, which requires a smaller r. In a circular orbit v = √(GM/r), so the smaller radius means a higher speed (equivalently K = −E increases). As the satellite moves inwards U = −GMm/r decreases by twice the energy lost to drag; gravity's positive work exceeds the energy removed by drag, so K rises. Classic mistake (crossed): "drag slows it down".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Constants | GM = 4.002 × 10¹⁴; m = 500 kg; GMm = 2.001 × 10¹⁷ J m | 1, 6 |
| Circular speeds | r₁ = 7.0 × 10⁶ m: 7,561 m s⁻¹ ("7.56"); r₂ = 1.4 × 10⁷ m: 5,347 m s⁻¹ ("5.35") | 1, 8 |
| Transfer (author note a only; Revision 2) | after burn 1 8,731 m s⁻¹; arrival 4,365 m s⁻¹; transfer E = −9.53 × 10⁹ J (not on screen; "faster" and "slower" tags) | author note a |
| Radius control (Revision 2) | r₁, 2r₁, 3r₁, 4r₁: v × 1, × 0.707, × 0.577, × 0.500; K, U, E × 1, × ½, × ⅓, × ¼ (from K = GMm/2r, U = −GMm/r) | 5 |
| Crossed slip (Revision 2) | E = 1.43 × 10¹⁰ + 2.86 × 10¹⁰ = 4.29 × 10¹⁰ J (sign of U dropped) | 6 |
| r₁ energies | K = 1.429 × 10¹⁰ J; U = −2.859 × 10¹⁰ J; E = −1.429 × 10¹⁰ J ("1.43", "2.86") | 6 |
| r₂ energies | K = 7.146 × 10⁹ J; U = −1.429 × 10¹⁰ J; E = −7.146 × 10⁹ J ("7.15") | 6, 8 |
| Changes | ΔK = −7.15 × 10⁹ J; ΔU = +1.43 × 10¹⁰ J; ΔE = +7.15 × 10⁹ J | 6, 7 |
| A1 | r = 6.871 × 10⁶ m; GMm = 3.2016 × 10¹⁷; U = −4.660 × 10¹⁰ J; K = 2.330 × 10¹⁰ J; E = −2.330 × 10¹⁰ J | 11, 12 |
| A2 | no numbers | 13, 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov); Codex to re-check.

- GMm = 4.002 × 10¹⁴ × 500 = 2.001 × 10¹⁷. r₁: K = 1.42929 × 10¹⁰, U = −2.85857 × 10¹⁰, E = −1.42929 × 10¹⁰ J; v = √(4.002 × 10¹⁴ / 7.0 × 10⁶) = 7,561.18 m s⁻¹. r₂: K = 7.14643 × 10⁹, U = −1.42929 × 10¹⁰, E = −7.14643 × 10⁹ J; v = 5,346.56 m s⁻¹.
- Transfer (author note a only): a = 1.05 × 10⁷ m; v_p = √(4.002 × 10¹⁴ × (2/7.0 × 10⁶ − 1/1.05 × 10⁷)) = 8,730.90 m s⁻¹; v_a = 4,365.45 m s⁻¹; −GMm/2a = −9.52857 × 10⁹ J; ½ × 500 × 8,730.9² − 2.85857 × 10¹⁰ = −9.5286 × 10⁹ J (agrees).
- Revision 2 radius control: v ∝ 1/√r: 1/√2 = 0.7071, 1/√3 = 0.5774, 1/√4 = 0.5000; energies ∝ 1/r. Crossed slip: 1.42929 × 10¹⁰ + 2.85857 × 10¹⁰ = 4.28786 × 10¹⁰ J.
- A1: r = 6.871 × 10⁶ m; 3.2016 × 10¹⁷ / 6.871 × 10⁶ = 4.65958 × 10¹⁰; half 2.32979 × 10¹⁰.

## Memory aid check

- **"In a circle, E = −K. Higher is slower, but higher costs more."** From the site's circular energy relation ("E_total = −KE") and its "Apply 6 marks" reconciliation. Meaning, as said in scene 10: for a circular orbit the total energy equals minus the kinetic energy, so a slower (higher) circular orbit has more total energy and needs energy supplied. Assumptions checked: circular orbits only (stated "in a circle" and in key note 2); not valid at an instant on a transfer path or ellipse (scene 8 and 9 show E fixed while K changes). It helps a new case: A2 (drag lowers E, so K rises). Introduced after scenes 2 to 9.
- **Considered, not used:** "Virial: E = U/2 = −K" (names a theorem outside the syllabus).

## Narration length estimate


Revision 2 count (6 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed; total = sum of scene strings, which replaces Revision 1's joined count of 5,569): **5,554 characters**, 16 scenes (narration unchanged). Characters per scene (1 to 16): 445, 426, 247, 411, 335, 640, 372, 412, 383, 252, 254, 414, 224, 366, 298, 75. At 13.3 characters per second the speech is about 418 s; add about 3 s for the prediction countdown, about 5 s for the transfer run in scene 1, about 3 s for the radius control in scene 5, about 3 s for the coasting run in scene 8, about 2 s for the comet lap in scene 9, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the memory-aid hold, 2 s for the handoff hold and about 44 s more of the quiet notes hold (50 s in all; about 86 s of holds and countdowns): **about 504 s**, inside the 5,500 to 7,000 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 9's last two sentences (keep the bars); scene 14's gravity-work sentence (keep the row).

## Opening frame

v21's final frame (`phys-y12-m5-v21.md`): paper background; the Earth plate at the left; dashed circular orbits at r and 2r with a satellite plate on each; beside each, a violet U bar hanging from a zero line (outer half as deep), an orange "K = ?" bar and an outlined "total = ?" bar; heading "Why does gravitational potential energy use a zero at infinity?"; chip "Next: why does a higher circular orbit have lower speed but greater total energy?". Scene 1 fades the bars and runs the transfer; the heading changes in scene 2.

## Final frame


The last explained frame (end of scene 15): paper background; at the right the three-curve energy graph (orange K above, violet U and navy E below) with the zero line drawn as a dashed band "E = 0: escape?"; at the left the Earth plate with the satellite plate on its surface, a teal launch arrow straight up "v = ?" (Revision 2: teal for velocity, root decision 10; previously orange) and the dashed radial line to "∞"; heading "Why does a higher circular orbit have lower speed but greater total energy?"; chip "Next: what minimum launch speed allows escape without further propulsion?". v23 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m5-v22` (route phys-y12-m5-v22). Suggested explainer folder `src/explainer/lessons/phys-y12-m5-v22`; build folder `docs/production/claude-pm/lessons/p-y12-m5-v22` (root to confirm).

In order (16 scene headings): hook, kinetic, potential, total, three-curves, worked-energies, where-it-went, burn-vs-state, ellipse-energy, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). `motionTools`: energy bars (kit gap 7), orbit-change stage with a live speed bar, three-curve graph (`OrbitEnergy`) with a live radius marker, Kepler orbit stage (kit gap 5, v20), `AlignedAlgebra`, `NumberTicker`, `ScribbleCircle`, `PenArrow`, `Countdown`, `CameraStage`. Transitions (Revision 2): 1 to 2 clear change; 2 to 3 camera continue; 3 to 4 camera push to the bars at full height; 4 to 5 clear change; 5 to 6 clear change to full-width working; 6 to 7 camera change; 7 to 8 camera change; 8 to 9 clear change; 9 to 10 clear change; attempts card shrink; 14 to 15 clear change; 15 to 16 fade.

Holds: hook (3 s), attempt-1, attempt-2 (10 s), key-notes (about 50 s). Review evidence paths: `checks/p-y12-m5-v22-learning-review.md`, `checks/p-y12-m5-v22-science-check.md`.

## Assets


Have (inspected 6 Nov with the Read tool; scaled uniformly only, never stretched):
- `public/assets/physics/phys-y11-earth-v1.png`: scenes 1 to 4, 8, 14, 15.
- `public/assets/physics/y12p-satellite-v1.png` (1585 × 992, RGBA; delivered in brief 188): scenes 1 to 4, 8, 11, 14, 15.
- `public/assets/physics/phys-y11-sun-v1.png`: scene 9.
- `public/assets/physics/y12p-comet-v1.png` (1983 × 793, RGBA, with JSON; delivered in brief 188): scene 9, rotated about its nucleus.
- **Checked, not used:** `public/assets/physics/y12p-spacecraft-exhaust-v1.png` (a glowing plume on a dark field; off style on paper); the burns stay short coded green thrust arrows.

Need (new plates): none.

Coded: orbits and transfer path, thrust arrows, energy bars, speed bar, curves and radius marker, flow strip and gauge, algebra, table, chips, cards, countdowns, notes board.

Kit gaps: 7. **Energy bars** (K, U and E bars per state from one model and scale; morph between states; mirror K and E; relative readouts).

## Codex asset brief (Year 12 Physics M5 v22)


No new plates. Revision 2: the satellite and comet plates were delivered in brief 188 and are accepted at native size.

## Codex error-check brief

Error-only check:
1. Re-check every value under "Numbers to verify" and every value in narration, screen text, attempts and notes against "Numbers used".
2. Confirm the physics of every learner-visible claim: K = GMm/2r; |U| = 2K; E = −GMm/2r = −K for circular orbits; E < 0 means bound; ΔU = 2ΔE and ΔK = −ΔE between circles; a prograde burn raises speed and E, coasting conserves E while K falls, a second burn circularises; constant E on an ellipse; drag lowers r and raises v (author notes a to c).
3. Confirm the memory aid's assumptions.
4. Confirm every cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
5. Confirm both attempt cards are original, carry every given, and show nothing answer-bearing.
6. Confirm the syllabus quote matches the route JSON exactly and is labelled 2017.
7. Confirm no person, hand, face or body outline is drawn or requested (the thrown ball in scene 8 has no thrower).
8. Confirm no em dash (U+2014) and no U+2061, and Australian spelling.
9. Confirm the narration counts by script.
10. Report the site notes under Decisions to root.

## YouTube metadata (draft)

Title: Orbital Energy: Why a Higher Orbit Is Slower but Has More Energy | HSC Physics Module 5

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module5/lesson12.sa.html

An engine pushes a satellite forwards, yet in its new, higher orbit it moves more slowly than before. Where did the energy go? Build the kinetic, potential and total energy of a circular orbit, see why E = −GMm/2r rises as the orbit gets higher, track the energy through a two-burn orbit raise, and find out why air drag makes a satellite speed up. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 5: Advanced Mechanics.
Syllabus content (NSW Physics Stage 6, 2017):
"derive quantitatively and apply the concepts of gravitational force and gravitational potential energy in radial gravitational fields to a variety of situations, including but not limited to: ... total energy of a planet or satellite in its orbit U + K = −GMm/2r; energy changes that occur when satellites move between orbits (ACSPH096); Kepler’s Laws of Planetary Motion (ACSPH101)"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Next: escape velocity.

#HSCPhysics #Physics #OrbitalEnergy #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (does the energy-flow strip resolve the paradox; is scene 8's two-moment distinction clear at speed; is scene 9 one idea too many), then the physics check (open decision 1) and the Codex error check.
- Judge the hook transfer and the morphing bars at playback speed.

## Revision 2 (6 Nov 2026)

Brief 188 findings (`checks/p-y12-m5-v22-learning-review.md`, `checks/p-y12-m5-v22-science-check.md`): 0 blocker, 2 should fix, 1 optional.
- **Should fix, S1 and S8 readouts (root decision 16 transfer-speed cut).** Resolved: the 8.73 and 4.37 km s⁻¹ readouts and the "E rises to −9.53 × 10⁹ J" label are removed. Scene 1 uses a live teal speed bar with "faster", "slowing as it climbs" and "slower than this circle needs" tags; scene 8 labels burn 2 "speeds it up into the new circle"; the "not derived here" tag is no longer needed. The initial 7.56 and final 5.35 km s⁻¹ circles stay. Full values stay in author note a and the numbers tables (marked author only). No narration change.
- **Should fix, S1 and S8 (root decision 10 velocity colour).** Resolved: speed readouts and speed bars are teal (scenes 1, 8, 9) and the handoff's launch arrow is teal in scene 15 and "Final frame"; orange is kinetic energy only. v23's opening frame is repaired to match.
- **Optional, Decisions handoff bullet (scene 14 named).** Resolved: the bullet now names scene 15.

Visual upgrade (to `../maths-visual-standard.md` and the build gate):
- Decisions gain "Type sizes", "Anchor", "Simulation" and "Stage changes"; the colour key states teal velocity and the energy colours.
- Plates: the delivered satellite and comet move to "Have" (inspected). The existing exhaust plate was checked and not used (a glow on a dark field, off style). Scene 1 already opens on the painted Earth and satellites.
- Live controls: the core one is scene 5's orbit-radius marker with live v and K, U, E readouts in multiples of the r₁ values (Python: v × 0.707, 0.577, 0.500 and energies × ½, ⅓, ¼ at 2r₁, 3r₁, 4r₁), chosen so scene 6's worked numbers are not given away; scene 1 a live speed bar through both burns; scene 7 a live fill gauge.
- Stage changes: scene 4 becomes the bars at full height, which breaks the Revision 1 scenes 2 to 4 run (about 85 s); scene 6 is full-width working.
- Hand tags and a pen mark in role colours in every teaching scene ("engine adds energy", "7.56 → 5.35", "from v² = GM/r", "m stays in", "twice as big", "below zero", "half of U", "bound", "mirror of E", "halfway to U", "K halves", "U halves", "half from the engines", "half from its own speed", "fast for a moment", "E stays the same", "K up", "U down").
- Framed answers: K = GMm/2r (2), E = −GMm/2r and E = −K (4), ΔE (6), the two final circle speeds (8) and every feedback result. New crossed slip: the sign of U dropped when adding (6).
- Scene 10 and the notes: the memory aid is a framed card; key notes cut from four dense items (about 620 characters) to five short bullets (about 230 characters); quiet notes hold 60 s to 50 s.
- Question cards arrive with their full text in one move.
- Type sizes stated; grey tags at full opacity.

New plate requests: none.

Counts: 5,569 (joined) or 5,554 (scene sum) to 5,554 characters (scene sum; narration unchanged); about 512 s to about 504 s.
