# Year 12 Physics M6 V04: Magnetic force on a moving charge. When does a magnetic field exert a force on a moving charge? (design)

Status: Revision 1 (6 Nov 2026): first design. Needs independent learning review and science check before voicing.

Narration 5,568 characters, 17 scenes, about 508 s, counted by script with the build parser rules (see "Narration length estimate").

Scope: Year 12 Physics (Physics Stage 6, 2017 syllabus), Module 6 (Electromagnetism), inquiry question "What happens to stationary and moving charged particles when they interact with an electric or magnetic field?". Templates as `phys-y12-m6-v01.md`. No pre-design pack exists; the pack work is done here. Site lesson read in full (6 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson04.sa.html`, SHA256 `51b78f880d43bb99c4e8c1b34f406db6b3cdd9d9901df24238974584f5e9a2d7` (recomputed 6 Nov; matches the route). Sections used: `define-magnetic-force`, `represent-field-and-direction`, `investigate-force-conditions`. Route entry: `phys-y12-m6-v04`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Explain qvB sin theta, perpendicular direction and charge sign, including zero force parallel to field. Stop before circle calculation." Next: "phys-y12-m6-v05: Why does a perpendicular magnetic field bend a path without increasing speed?"

Owner rules applied: as v01 (2017 syllabus quoted exactly; no people, hands, faces or body outlines: the right-hand palm rule is described in words and shown only as labelled coded axes; field regions, particles and vectors are coded in HSC exam style; every number recalculated in Python with HSC data sheet constants; "Pause here to answer." with a 10 s countdown; brief feedback; Australian spelling; no em dashes). Recalled, not re-taught: Year 11 magnetic fields (field lines, the tesla named), v01 (field direction and charge sign, F = qE acts on a charge at rest), v03 (the beam bent in a magnetic field at constant speed), resolving a vector into components (m5-v02).

Syllabus content (Physics Stage 6 (2017), Module 6; ledger id `P6-IQ1-03`), quoted from the route JSON `syllabusActions`:

- `P6-IQ1-03`: "analyse the interaction between charged particles and uniform magnetic fields, including: (ACSPH083)" "acceleration, perpendicular to the field, of charged particles", "the force on the charge F=qv_(⊥)B=qvBsinθ"

This video covers the force law and its direction; v05 covers the perpendicular acceleration and the circular path.

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 56)

**Boundary:** starts on v03's final frame (an electron beam from a coded gun curving downwards in a region of crosses, speed unchanged). Teaches: no force on a charge at rest or moving along the field; a force when moving across it (contrast with the electric force in one sentence); dots and crosses; F = qvB sin θ = qv⊥B (θ between v and B); the direction: perpendicular to both v and B, by the right-hand palm rule for a positive charge (thumb v, fingers B, palm F), reversed for a negative charge; the site worked example (electron, 3.0 × 10⁶ m s⁻¹, 0.050 T); the angle dependence (30°, 60°, 0°; sin θ is not proportional to θ); the force is always perpendicular to the velocity (stated, consequences left for v05). Stops before zero work, constant speed and the circle (v05).

## Decisions

- **Learner question (route wording, one word added).** "When does a magnetic field exert a force on a moving charge?" (route: "exert force"). The answer, built in order: only when the charge moves (2); only the part of its velocity across the field counts, so none along the field and most at 90° (2, 4); the size is qvB sin θ (4); the direction is perpendicular to both v and B, set by the palm rule and flipped for negative charges (5, 6).
- **Hook (site hook, made concrete).** Opens on v03's bending beam (the physical case), then the site's three-case contrast (at rest, along, across) as the prediction. The site's hook question "Which way does the force act?" becomes scene 5.
- **3D before 2D.** Scenes 1 and 2 use a coded oblique 3D view (field arrows going into the depth) so "along" and "across" are visible; scene 3 rotates the camera to face the page and the arrows become crosses. This makes the dot and cross symbols a consequence of a viewpoint, not a code to memorise.
- **Direction rule without a hand (owner rule).** The site's right-hand palm rule is named and described in words ("thumb along the velocity, fingers along the field, palm faces the force on a positive charge"); on screen only a coded axis triad with labels "thumb: v", "fingers: B", "palm: F (+ charge)" and the three arrows at right angles. Open decision 2.
- **Charge sign (route stop).** "Find it for a positive charge, then reverse it for a negative one" (site "Use a physical hand rule" box and HSC Tip).
- **Worked example (site card, exact numbers).** Electron, 3.0 × 10⁶ m s⁻¹, 0.050 T, field into the page, moving right: F = 2.40 × 10⁻¹⁴ N, down. Extended in scene 8: at 30° 1.20 × 10⁻¹⁴ N; at 60° 2.08 × 10⁻¹⁴ N; along the field 0 (site misconception "doubling the angle").
- **Zero work deferred.** The site's card 1 explains zero work here; the route places it in v05 ("explain zero work"), whose learner question it answers. Scene 10 states only that the force is always at right angles to the velocity and hands off.
- **Tesla.** Named as the unit of B, recalled from Year 11; the definition 1 T = 1 N A⁻¹ m⁻¹ is screen only.
- **Memory aid.** "Still: no force. Along the field: no force. Across the field: full force, qvB." Plus "positive first, then flip for negative". See "Memory aid check".
- **Attempts.** A1 (original): proton, 5.0 × 10⁵ m s⁻¹, 30°, 0.40 T: F = 1.60 × 10⁻¹⁴ N; crossed "cos 30°: 2.77 × 10⁻¹⁴ N". A2 (original, after site Activity 1): electron moving up the page in a field out of the page: force to the left; the same electron moving out of the page: zero; crossed "right" (no reversal).
- **Colour key (v01; open decision 1 there).** Magnetic field arrows (3D view), dots and crosses slate ink; velocity teal; magnetic force amber; v⊥ and v∥ components teal dashed; particles ink-outlined with "+" or "−".
- **Site sources used:** hook and Think First (direction for a positive charge; electron; slowing), learning intentions, vocabulary (magnetic field, right-hand rule, tesla, cross product named on screen only), misconceptions 1 to 3 (speeds up: deferred to v05; stationary charge; same direction for an electron), card 1 (F = qvB sin θ, limiting cases, the palm rule), card 2 (dots and crosses, feather and tip), the worked example, the "Analyse 6 marks" limiting cases (scene 4) and the misconception "doubling the angle" (scene 8), Activity 1 (A2), short-answer Q1 (method for A1). Card 3's aurora (scene 9, simplified: the velocity component along B is unaffected, so particles follow converging field lines into the polar atmosphere; author note d). Not used: the interactive; card 3's accelerators (v05 and later); the zero-work argument (v05); the "Compare 5 marks" (v06).
- **Site notes (for root to log if accepted):** none in the sections used. Checked and correct: worked example 2.4 × 10⁻¹⁴ N, down for the electron (cross product: q(v × B) with v = +x, B = −z gives +y for a positive charge, so −y for the electron); fill-in proton 1.6 × 10⁻¹⁴ N; short-answer Q1 5.12 × 10⁻¹⁵ N (data sheet 5.13 × 10⁻¹⁵); Activity 1 MC key "v = right, B = into page → force upward" for a positive charge.
- **Cause chain taught, in order:** (1) a magnetic field pushes only on moving charges (2); (2) only the velocity component across the field counts, so along the field there is no force (2, 4); (3) F = qvB sin θ = qv⊥B: biggest at 90°, zero at 0° (4); (4) the force is perpendicular to both v and B; palm rule for a positive charge (5); (5) a negative charge is pushed the opposite way (6); (6) the velocity component along B is untouched, so particles can follow field lines (9, the aurora); (7) the force stays at right angles to v at every instant (10).
- **Entry knowledge:** Year 11 magnetic field lines and the tesla; v01, v03; components (m5-v02).
- **Learner-visible vocabulary:** tesla (unit of magnetic field strength, 4); dot and cross (field out of and into the page, 3); v perpendicular, "v⊥" (the part of the velocity across the field, 4); right-hand palm rule (5).
- **Legacy logic ported:** none. The coded `MagneticOrbit` visual (kit family `m6-magnetic-orbit`, "Separate tangential velocity from inward force", limits "positive charge; perpendicular entry; non-relativistic; no helix") and `FieldGrid` (`course-kit.tsx`, direction "in") are the starting points; its orbit is not used here (v05).
- **New explainer motion:** **3D field box** (kit gap 4: an oblique coded box of parallel B arrows going into the depth; a particle that can sit still or move along any direction; a camera rotation to face the page that turns the arrows into a cross grid, and the reverse for dots; v resolved into v∥ and v⊥ with a live θ arc); **axis triad** (three labelled perpendicular arrows v, B, F that rotate together, with text labels for thumb, fingers and palm; no hand); `FieldGrid`; `AlignedAlgebra`; `NumberTicker`; `Countdown`; `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `CameraStage`.
- **No human figures.** No hand is drawn anywhere; the palm rule is words plus the axis triad.
- **Author notes (not learner copy):**
  (a) Vector form F = q(v × B); the palm rule (thumb v, fingers B, palm F) gives the same direction as v × B for a positive charge. Checked: v = +x, B = −z gives +y; v = +y, B = +z gives +x.
  (b) The electric force acts on a charge at rest; the full Lorentz force q(E + v × B) is not named.
  (c) A2 directions (x right, y up the page, z out of the page): electron v = +y, B = +z: q(v × B) = −(+x) = −x (left). v = +z, B = +z: zero.
  (d) Aurora (scene 9): the screen and narration claim only that the along-field velocity component feels no force, so particles can travel along field lines into the polar upper atmosphere, where collisions excite gas molecules. Gyration about the lines, magnetic mirroring and the magnetotail are not mentioned. Drawn not to scale.
  (e) Pronunciations: "q v B sine theta"; "v perpendicular"; "tesla".

- **Open decisions for root:**
  - **1. 3D opening (learning review).** Scenes 1 to 3 use an oblique 3D box before the flat dot and cross grid. Confirm the camera rotation reads clearly at playback speed; fallback: a side-on panel beside the flat grid.
  - **2. Palm rule wording (root).** The site teaches the right-hand palm rule (thumb v, fingers B, palm F). Some NSW schools teach other hand rules; the narration names this one only. Confirm, or name it as "one common rule" and keep the axis triad as the authority.
  - **3. Zero work moved to v05 (root).** Site card 1 teaches zero work in this lesson; the route assigns it to v05. Scene 10 only states that the force stays perpendicular.

Main question: *A magnetic field bends our electron beam. But put a proton in the same field sitting still, or fire it along the field, and nothing happens. Fire it across the field, and it's pushed sideways. When does a magnetic field push, how hard, and which way?*
Entry knowledge: Year 11 magnetic fields; v01, v03.
Stops after: zero force at rest or along B; F = qvB sin θ; direction perpendicular to v and B by the palm rule; sign reversal. No zero work, no circle.
Handoff: v05, why a perpendicular magnetic field bends a path without increasing speed.

## Script and shots

Cue words in **bold** trigger the visual change. Screen symbols in italic: *F*, *q*, *v*, *B*, *θ*, *v⊥*. Paper background and handwritten headline face as the explainer house style.

### 1. hook (when does it push?)
> Here's our electron beam, curving inside a magnetic field, without speeding up or slowing down. But a magnetic field doesn't always push. Put a proton in the same field, sitting **still**. Then fire it **along** the field lines. Then fire it **across** them. Which of these feel a force? Make your **prediction**.

Visual: opens on v03's final frame (see "Opening frame"). Camera rotates to an oblique 3D view of the same region (3D field box): the crosses become parallel slate arrows running into the depth, and the beam is seen moving across them. The beam fades. On "still" a proton "(+)" appears at rest in the box. On "along" a second proton ghost with a teal arrow parallel to the field arrows; on "across" a third with a teal arrow at right angles to them. On "prediction" the 3 s `Countdown` runs beside a "force?" chip under each of the three.

### 2. only moving charges, and only across the field
> Only one of them. The proton sitting still feels nothing, because a magnetic field only pushes on charges that are **moving**. Fired straight along the field lines, it feels nothing either, and carries on in a straight **line**. Fired across the field lines, it's pushed **sideways**. That's a big contrast with an electric field, which pushes on a charge even when it's sitting still.

Visual: camera continue. Heading writes on: "When does a magnetic field exert a force on a moving charge?". On "moving" the resting proton gets "F = 0" and a crossed force chip. On "line" the along-field proton travels straight through the box, "F = 0". On "sideways" the across-field proton gets an amber force arrow at right angles to both its velocity and the field arrows, and starts to curve. A small side chip "electric field: F = qE, even at rest (v01)" fades in at the end.

### 3. dots and crosses
> Magnetic fields are three dimensional, so on a flat page, we need symbols. A cross means the field points into the page, like the tail feathers of an arrow flying away from **you**. A dot means the field points out of the page, like the tip of an arrow coming **towards** you. Turn our view to face the page, and these field lines become a grid of **crosses**. Exam questions almost always draw magnetic fields this way.

Visual: camera push to a single large coded arrow seen end-on: on "you" its tail with four feather lines collapses to a cross "×: into the page"; on "towards" its tip, seen head-on, shrinks to a dot "•: out of the page". On "crosses" camera rotates the 3D field box to face the page; the field arrows become a regular grid of slate crosses (`FieldGrid`, direction "in"), tag "B into page".

### 4. how big is the force?
> How big is the force? F equals q v B sine theta. q is the charge, v is the speed, B is the magnetic field strength in teslas, and theta is the angle between the velocity and the **field**. Another way to see it: only the part of the velocity across the field counts, v perpendicular, which is v sine **theta**. At ninety degrees, sine theta is one, so the force is biggest, q v **B**. Along the field, theta is zero, sine zero is zero, and there's no force at **all**.

Visual: camera change back to the 3D field box with one proton. Equation strip: "F = qvB sin θ". On "field" a θ arc draws between the proton's teal v arrow and a field arrow. On "theta" v resolves into dashed teal "v∥ = v cos θ" along the field and "v⊥ = v sin θ" across it; v∥ greys out, tag "only v⊥ counts: F = qv⊥B". On "B" θ sweeps to 90°: the amber arrow grows to its maximum, "F = qvB". On "all" θ sweeps to 0°: the arrow shrinks to nothing, "F = 0". A small screen tag "1 T = 1 N A⁻¹ m⁻¹".

### 5. which way does it push?
> The direction is the strange part. The force is at right angles to both the velocity and the field. To find it for a positive charge, you can use the right-hand palm rule. Point your thumb along the velocity, and your fingers along the field. Your palm faces the way the force **pushes**. For a positive charge moving right, with the field into the page, the force is **up**.

Visual: camera change to the flat cross grid. An axis triad appears at the left: three perpendicular coded arrows in an oblique corner view, labelled "thumb: v" (teal), "fingers: B" (slate, into the page) and "palm: F (+ charge)" (amber); on "pushes" the triad rotates so v points right and B into the page, and the F arrow swings to point up. On "up" a proton in the grid moving right gets a teal "v" arrow and an amber "F" arrow up, with a right-angle mark between them.

### 6. negative charges go the other way
> For a negative charge, like an electron, the force is the other way. So an electron moving right, in a field into the page, is pushed **down**. Same field, same direction of motion, opposite charge, so the opposite push. That's why our electron beam curved **downwards**. Find the direction for a positive charge first, then reverse it for a negative **one**.

Visual: camera continue. On "down" an electron "(−)" beside the proton, moving right, gets an amber arrow pointing down. On "downwards" a small inset replays v03's beam curving down in the crosses. On "one" a two-step chip writes: "1. + charge: palm rule. 2. − charge: reverse."

### 7. worked example: an electron in a magnetic field
> Let's put numbers in. An electron moves to the right at three point zero times ten to the six metres per second, at right angles to a field of zero point zero five oh tesla, pointing into the page. The force is q v B, one point six oh two times ten to the minus nineteen, times three times ten to the six, times zero point zero five. That's two point four times ten to the minus fourteen **newtons**. For a positive charge it would point up, so for the electron, it points **down**.

Visual: calculation layout, with the cross grid small at the right showing the electron. Task strip: "Electron moving right, B into the page: find the force." Equation strip: "F = qvB sin θ". Givens grouped: "q = 1.602 × 10⁻¹⁹ C (magnitude)", "v = 3.0 × 10⁶ m s⁻¹", "B = 0.050 T", "θ = 90°". `AlignedAlgebra`: "F = 1.602 × 10⁻¹⁹ × 3.0 × 10⁶ × 0.050 × sin 90°"; on "newtons" "= 2.4 × 10⁻¹⁴ N" boxed. On "down" the direction row: "+ charge: up → electron: down" with the amber arrow on the small grid.

### 8. changing the angle
> Now tilt the electron's path, so it moves at thirty degrees to the field. Sine thirty is a half, so the force halves, to one point two times ten to the minus fourteen **newtons**. At sixty degrees, it's about two point oh eight. Lined up with the field, it's **zero**. The force depends on sine theta, so doubling the angle doesn't double the **force**.

Visual: camera change to the 3D field box, the electron's velocity at 30° to the field arrows with its θ arc. On "newtons" "θ = 30°: F = 2.4 × 10⁻¹⁴ × 0.5 = 1.2 × 10⁻¹⁴ N". The velocity swings to 60°: "F = 2.08 × 10⁻¹⁴ N"; on "zero" to 0°: "F = 0". On "force" a small sin θ graph (0° to 90°) with points at 30° and 60°, tag "30° → 60°: × 1.73, not × 2"; a chip "angle × 2 → force × 2" fades in and is crossed.

### 9. where you can see it: the aurora
> You can see this rule at work in the sky. Charged particles stream out from the Sun at high speed. Where they meet Earth's magnetic field head on, moving across the field lines, they're pushed sideways and steered **away**. But near the poles, the field lines dip down into the Earth. The part of a particle's velocity along the field lines feels no force at all, so particles can slide down along the lines, into the upper **atmosphere**. There they hit gas molecules and make them glow. That's the **aurora**.

Visual: clear change. The Sun plate (`phys-y11-sun-v1.png`, small, far left) and the Earth plate (`phys-y11-earth-v1.png`) with coded slate dipole field lines looping from pole to pole. Coded particle dots stream from the Sun. On "away" particles reaching the field lines over the equator curve aside (amber force arrows at right angles to their motion). On "atmosphere" near the north pole a particle's velocity splits into a dashed teal part along the field line (tag "along B: no force") and it slides down along the line to a thin coded atmosphere band. On "aurora" a soft green coded glow band forms over the polar cap, tag "aurora: gas molecules glow". Not to scale.

### 10. a force that always pushes sideways
> Here's the thing to notice. The force is always at right angles to the velocity. It never points along the motion, so it never pushes the charge forwards, or holds it **back**. It only ever pushes **sideways**. Hold on to that, because it's the key to the next video.

Visual: camera change to the flat cross grid. A proton moving right with its amber force up; as the path begins to turn (a short arc), the v and F arrows turn together, the right-angle mark staying between them at three positions. On "back" a chip "F along v?" fades in and is crossed. On "sideways" the right-angle marks pulse.

### 11. memory aid
> To remember when there's a force: still, no force. Along the field, no force. Across the field, full force, q v **B**. And for direction, find it for a positive charge, then flip it for a negative **one**.

Visual: board clears to three mini panels: a resting "+" with "F = 0", a "+" moving along field arrows with "F = 0", a "+" moving across crosses with "F = qvB". On "B" the third panel's amber arrow pulses. On "one" a "+ then flip for −" chip. Hold about 2 seconds.

### 12. attempt 1 (countdown, 10 seconds)
> Your turn. A proton moves at five point zero times ten to the five metres per second, at thirty degrees to a uniform magnetic field of zero point four zero tesla. Calculate the magnitude of the magnetic force on it. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "A proton travels at 5.0 × 10⁵ m s⁻¹ at an angle of 30° to a uniform magnetic field of strength 0.40 T. Calculate the magnitude of the magnetic force on the proton. (e = 1.602 × 10⁻¹⁹ C)" Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 1 (brief)
> F equals q v B sine theta. That's one point six oh two times ten to the minus nineteen, times five times ten to the five, times zero point four, times sine thirty, which is a half. So the force is one point six times ten to the minus fourteen **newtons**. The classic slip is using cosine instead of sine, which gives two point eight times ten to the minus **fourteen**.

Visual: card shrinks to the top. Rows: "F = qvB sin θ = 1.602 × 10⁻¹⁹ × 5.0 × 10⁵ × 0.40 × sin 30°"; on "newtons" "= 1.6 × 10⁻¹⁴ N" boxed. On "fourteen" a chip "× cos 30° = 2.8 × 10⁻¹⁴ N" fades in and is crossed. Hold about 1 second.

### 14. attempt 2 (countdown, 10 seconds)
> Last one. An electron moves up the page, through a uniform magnetic field pointing out of the page. What's the direction of the force on it? And what would the force be if the same electron moved out of the page instead? Pause here to answer.

Visual: `QuestionCard`, worded as printed: "An electron moves towards the top of the page through a uniform magnetic field directed out of the page. (a) State the direction of the magnetic force on the electron. (b) The electron's velocity is changed so that it moves out of the page. State the magnetic force on it now. Justify your answers. (3 marks)" A small exam-style diagram: a grid of dots and an electron with an arrow up the page. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 15. feedback 2 (brief)
> For a positive charge, thumb up the page and fingers out of the page give a palm facing right. The electron is negative, so the force on it points to the **left**. Moving out of the page, it travels along the field, so the force is **zero**. The classic slip is forgetting to reverse for the electron, and answering **right**.

Visual: card shrinks. The axis triad rotates to v up the page and B out of the page, F to the right ("+ charge"); on "left" the electron's amber arrow points left, boxed "(a) to the left". On "zero" a second diagram with the electron's velocity drawn as a dot (out of the page), parallel to the field dots: "(b) θ = 0: F = 0" boxed. On "right" a chip "to the right" fades in and is crossed. Hold about 1 second.

### 16. next: does the sideways push speed it up?
> So a magnetic field pushes only on a charge moving across it, with a force q v B sine theta, at right angles to the motion. As the particle turns, the force turns with it, and keeps pushing sideways. So does the particle speed up? Why does a perpendicular magnetic field bend a path without increasing **speed**?

Visual: clear change to the flat cross grid (tag "B into page"). A proton "(+)" moving right with a teal "v" arrow and an amber "F" arrow pointing up, a right-angle mark between them; a dashed grey continuation of its path curving upwards and to the left with "?" at its end; a speed readout "v = ?" beside it. On "speed" a chip writes: "Next: why does a perpendicular magnetic field bend a path without increasing speed?". Hold about 2 seconds. This is the final frame.

### 17. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. A magnetic field exerts a force only on a moving charge with a velocity component across the field. At rest or moving along B: F = 0.
2. F = qv⊥B = qvB sin θ (θ between v and B). Maximum qvB at 90°.
3. Direction: perpendicular to both v and B. Right-hand palm rule for a + charge (thumb v, fingers B, palm F); reverse for a − charge.
4. × = into the page; • = out of the page.

Memory aid (large, on the notes screen): *Still or along: no force. Across: qvB.* Second line: *Positive first, then flip for negative.*

## Teaching checks

- **Does it explain causes?** Why there is no force at rest or along the field (only the across-field part of the velocity counts, 2, 4); why sin θ (v⊥ = v sin θ, 4); why the electron's beam curved down (negative charge reverses the positive-charge direction, 6); why doubling the angle does not double the force (8).
- **Misconceptions addressed:** a stationary charge feels a magnetic force (2, site); an electron is pushed the same way as a proton (6, site; A2 crossed); doubling θ doubles F (8, crossed, site); cos for sin (12, crossed); the force acts along the motion (10, crossed).
- **One idea at a time:** when (2), symbols (3), size (4), direction (5), sign (6), example (7), angle (8), application (9), perpendicular (10).
- **Video makes it easier:** the 3D box turning into a cross grid (1 to 3); v splitting into v∥ and v⊥ with the force growing and shrinking (4); the axis triad rotating into place (5); v and F turning together (10); particles sliding along Earth's field lines to the poles (9).
- **Response opportunity:** prediction (3 s); two unseen tasks, 10 s each; feedback about 27 s and 24 s.
- **Avoided double teaching:** Year 11 field lines and the tesla named; v01's sign rule and v03's bent beam reused.
- **Syllabus coverage:** `P6-IQ1-03` "the force on the charge F = qv⊥B = qvB sin θ" (4, 7, 8, A1) with its direction (5, 6, A2). The perpendicular acceleration and circle are v05.
- **Out of scope by design:** zero work and constant speed (v05); the circle, radius and period (v05); the Lorentz force with E (v06); helical motion.

## Practice questions and model answers

**Attempt 1 (scene 12; original, 2 marks suggested).** "A proton travels at 5.0 × 10⁵ m s⁻¹ at an angle of 30° to a uniform magnetic field of strength 0.40 T. Calculate the magnitude of the magnetic force on the proton. (e = 1.602 × 10⁻¹⁹ C)"
Model answer: F = qvB sin θ = 1.602 × 10⁻¹⁹ × 5.0 × 10⁵ × 0.40 × sin 30° = 1.6 × 10⁻¹⁴ N. Classic mistake (crossed): using cos 30°, 2.8 × 10⁻¹⁴ N.

**Attempt 2 (scene 14; original, after site Activity 1, 3 marks).** "An electron moves towards the top of the page through a uniform magnetic field directed out of the page. (a) State the direction of the magnetic force on the electron. (b) The electron's velocity is changed so that it moves out of the page. State the magnetic force on it now. Justify your answers."
Model answer: (a) For a positive charge, v up the page and B out of the page give a force to the right (right-hand palm rule, or v × B); the electron is negative, so the force is to the left. (b) Its velocity is now parallel to B, so θ = 0, sin θ = 0 and F = 0. Classic mistake (crossed): "to the right" (no reversal for the negative charge).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Constants | e = 1.602 × 10⁻¹⁹ C | throughout |
| Worked example | 1.602 × 10⁻¹⁹ × 3.0 × 10⁶ × 0.050 = 2.403 × 10⁻¹⁴ N ("two point four") | 7 |
| Angles | 30°: 1.2015 × 10⁻¹⁴ N ("one point two"); 60°: 2.081 × 10⁻¹⁴ N ("two point oh eight"); 0°: 0; sin 60°/sin 30° = 1.732 | 8 |
| A1 | 1.602 × 10⁻¹⁹ × 5.0 × 10⁵ × 0.40 × 0.5 = 1.602 × 10⁻¹⁴ N ("one point six"); cos slip 2.775 × 10⁻¹⁴ N ("two point eight") | 11, 12 |
| A2 | directions only | 13, 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov); Codex to re-check.

- 1.602 × 10⁻¹⁹ × 3.0 × 10⁶ × 0.050 = 2.4030 × 10⁻¹⁴; × sin 30° = 1.2015 × 10⁻¹⁴; × sin 60° = 2.0811 × 10⁻¹⁴.
- A1: 1.602 × 10⁻¹⁹ × 5.0 × 10⁵ × 0.40 × 0.5 = 1.6020 × 10⁻¹⁴; × cos 30° instead = 2.7747 × 10⁻¹⁴.
- Directions (x right, y up, z out of page; F = q v × B): (+, v = +x, B = −z) → +y; (−, +x, −z) → −y; (−, +y, +z) → −x; (−, +z, +z) → 0.
- Site checks: short-answer Q1 2 × 1.602 × 10⁻¹⁹ × 4.0 × 10⁵ × 0.080 × 0.5 = 5.126 × 10⁻¹⁵ N; fill-in 1.602 × 10⁻¹⁴ N.

## Memory aid check

- **"Still or along: no force. Across: qvB."** From the site's learning intentions and the "Analyse 6 marks" limiting cases. Meaning, as said in scene 11: a charge at rest, or moving parallel to B, feels no magnetic force; moving at 90° it feels the maximum qvB; in between, qvB sin θ. Assumptions checked: uniform magnetic field only (no electric field); "across" means perpendicular for the full value. Helps A1 (in-between case) and A2(b).
- **"Positive first, then flip for negative."** From the site's "Use a physical hand rule" box. True because F = q(v × B) changes sign with q. Helps A2(a).

## Narration length estimate

Revision 1 count (6 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,568 characters**, 17 scenes. Characters per scene (1 to 17): 297, 373, 408, 452, 367, 347, 474, 341, 499, 259, 197, 237, 362, 242, 314, 308, 75. At 13.3 characters per second the speech is about 419 s; add 3 s for the prediction countdown, about 4 s for the 3D rotations, about 2 s for the aurora stream, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the memory-aid hold, 2 s for the handoff hold and about 54 s more of the quiet notes hold (about 89 s of holds and countdowns): **about 508 s**. Reserve trims if the voiced take runs long: scene 2's electric-field contrast sentence; scene 8's sixty-degree sentence.

## Opening frame

v03's final frame (`phys-y12-m6-v03.md`, "Final frame"): paper background; at the left a coded exam-style electron gun (cathode "0 V", anode "+5000 V"); a teal beam enters a square region of slate crosses (tag "B into page") and curves downwards along an arc; readouts "entering: 4.19 × 10⁷ m s⁻¹" and "inside: 4.19 × 10⁷ m s⁻¹" with an unchanged orange K bar; heading "How does a potential difference set a particle's speed?"; chip "Next: when does a magnetic field exert a force on a moving charge?". Scene 1 rotates the camera to the 3D view; the heading changes in scene 2.

## Final frame

The last explained frame (end of scene 16): paper background; a square region filled with a regular grid of slate crosses (tag "B into page"); a proton "(+)" just left of centre moving right, with a teal "v" arrow pointing right and an amber "F" arrow pointing up, a right-angle mark between them; a dashed grey continuation of its path curving upwards and to the left, ending in "?"; a readout "v = ?" beside the proton; heading "When does a magnetic field exert a force on a moving charge?"; chip "Next: why does a perpendicular magnetic field bend a path without increasing speed?". v05 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m6-v04` (route phys-y12-m6-v04). Suggested explainer folder `src/explainer/lessons/phys-y12-m6-v04`; build folder `docs/production/claude-pm/lessons/p-y12-m6-v04` (root to confirm).

In order (17 scene headings): hook, when-force, dots-crosses, size, direction, negative-charge, worked-electron, angle, aurora, always-sideways, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`); scene 1 ends with a 3 s prediction countdown. `motionTools`: 3D field box (kit gap 4), axis triad, `FieldGrid`, `AlignedAlgebra`, `NumberTicker`, `Countdown`, `CameraStage`. Transitions: v03's final frame continues into scene 1 (camera rotate to 3D); 1 to 2 camera continue; 2 to 3 camera push, then rotate to face the page; 3 to 4 camera change back to 3D; 4 to 5 camera change to the flat grid; 5 to 6 camera continue; 6 to 7 clear change to the calculation layout; 7 to 8 camera change; 8 to 9 clear change; 9 to 10 clear change to the flat grid; 10 to 11 clear change; attempts card shrink; 15 to 16 clear change; 16 to 17 fade.

Holds: hook (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/p-y12-m6-v04-learning-review.md`, `checks/p-y12-m6-v04-physics-check.md`.

## Assets

Have (inspected 6 Nov; scaled uniformly only): `public/assets/physics/phys-y11-earth-v1.png` and `public/assets/physics/phys-y11-sun-v1.png`: scene 9.

Need (new plates): none.

Coded: the gun (from v03), 3D field box, field arrows, dot and cross grids, particles, vectors, θ arcs, components, axis triad, sin graph, chips, cards, countdowns, notes board.

Kit gaps: 4. **3D field box** (oblique box of parallel B arrows; particle at rest or moving in any direction; camera rotation to face the page turning arrows into crosses or dots; v resolved into v∥ and v⊥ with a live θ arc; F arrow scaled by qvB sin θ). The **axis triad** is part of this gap. Shared with v05 (scene 7 comparison) and v07 if root wishes.

## Codex asset brief (Year 12 Physics M6 v04)

No new plates.

## Codex error-check brief

Error-only check:
1. Re-check every value under "Numbers to verify" and every value in narration, screen text, attempts and notes against "Numbers used".
2. Confirm the physics of every learner-visible claim: no magnetic force on a charge at rest or moving parallel to B; F = qvB sin θ = qv⊥B with θ between v and B; maximum at 90°; the palm rule (thumb v, fingers B, palm F for a positive charge) agrees with q(v × B); reversal for negative charges; every direction in scenes 5 to 7, 14 and 15 (author note c).
3. Confirm the memory aid's assumptions.
4. Confirm every cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
5. Confirm both attempt cards are original, carry every given, and show nothing answer-bearing.
6. Confirm the syllabus quote matches the route JSON exactly and is labelled 2017.
7. Confirm no person, hand, face or body outline is drawn or requested (the palm rule must be words and the axis triad only).
8. Confirm no em dash (U+2014), no U+2061, and Australian spelling.
9. Confirm the narration counts by script.

## YouTube metadata (draft)

Title: Magnetic Force on a Moving Charge: F = qvB sin θ and Its Direction | HSC Physics Module 6

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module6/lesson04.sa.html

A magnetic field bends an electron beam, but it ignores a charge sitting still, or one moving along the field. Find out when a magnetic field pushes, use F = qvB sin θ, read dots and crosses, find the direction with the right-hand palm rule for a positive charge, and reverse it for an electron. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 6: Electromagnetism.
Syllabus content (NSW Physics Stage 6, 2017):
"analyse the interaction between charged particles and uniform magnetic fields, including: (ACSPH083) acceleration, perpendicular to the field, of charged particles; the force on the charge F = qv⊥B = qvB sin θ"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Next: why a perpendicular magnetic field bends a path without increasing speed.

#HSCPhysics #Physics #MagneticForce #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (does the 3D-to-page rotation make dots and crosses clearer; is the palm rule usable from words and the axis triad alone), then the physics check and the Codex error check.
- Judge the camera rotations and the turning v and F arrows at playback speed.
