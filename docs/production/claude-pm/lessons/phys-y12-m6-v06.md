# Year 12 Physics M6 V06: Crossed fields and the velocity selector. How can crossed fields select one particle speed? (design)

Status: Revision 1 (6 Nov 2026): first design. Needs independent learning review and science check before voicing.

Narration 5,597 characters, 16 scenes, about 507 s, counted by script with the build parser rules (see "Narration length estimate").

Scope: Year 12 Physics (Physics Stage 6, 2017 syllabus), Module 6 (Electromagnetism), inquiry question "What happens to stationary and moving charged particles when they interact with an electric or magnetic field?". Templates as `phys-y12-m6-v01.md`. No pre-design pack exists; the pack work is done here. Site lessons read in full (6 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson06.sa.html`, SHA256 `08e7d8ebf326861b37d4a0b79749decd0c147d7a4e6adc13e6db27eb40254439` (sections `compare-field-effects`, `derive-selector-balance`, `solve-crossed-fields`), and `.../module6/lesson18.sa.html` (site "Lesson 7 of 21: Mass Spectrometers"), SHA256 `53662f48fd0743ead7954723cfc80d30776e3f7cd6854a285945a1795221d4e5` (section `apply-crossed-field-selection`); both recomputed 6 Nov and matching the route. Route entry: `phys-y12-m6-v06`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Balance signed electric and magnetic forces for straight motion; compare rejected speeds. A mass analyser is an optional application, not a newly invented syllabus action." Next: "phys-y12-m6-v07: Why does a current-carrying wire feel a magnetic force?"

Owner rules applied: as v01 (2017 syllabus quoted exactly; no people, hands, faces or body outlines; plates, field grids, beams and vectors are coded in exam style; the mass spectrometer is an existing painted plate, used once; every number recalculated in Python with HSC data sheet constants; "Pause here to answer." with a 10 s countdown; brief feedback; Australian spelling; no em dashes). Recalled, not re-taught: v01 (F = qE, sign rule, E = V/d), v03 (electric force can do work), v04 (F = qvB sin θ, palm rule, reverse for negative charges), v05 (no work by the magnetic force, r = mv/(qB)).

Syllabus content (Physics Stage 6 (2017), Module 6; ledger id `P6-IQ1-04`), quoted from the route JSON `syllabusActions`:

- `P6-IQ1-04`: "compare the interaction of charged particles moving in magnetic fields to:" "the interaction of charged particles with electric fields", "other examples of uniform circular motion (ACSPH108)"

This video develops the first example (the comparison with electric fields); v05 covered the second.

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 56)

**Boundary:** starts on v05's final frame (crossed fields between plates; an electron at the entrance with dashed F_E up and F_B down, sizes "?"; a slit barrier). Teaches: the force-by-force comparison of electric and magnetic interactions (acts at rest or not; direction relative to the field; work and speed; dependence on speed); crossed-field directions for an electron (F_E up, F_B down: opposed); the balance qE = qvB, so v = E/B, with q and m cancelling, valid only when the forces oppose; the site worked example (E = 4,000 V m⁻¹, B = 0.020 T, 2.0 × 10⁵ m s⁻¹); rejected speeds (too fast: magnetic wins; too slow: electric wins); charge sign and mass do not change the selected speed; one optional application sentence (a selected-speed beam into a magnetic analyser sorts by m/q; Thomson in Module 8). Stops before any mass-spectrometer calculation, detector geometry or isotope separation (site lesson 18 owns them), and before the motor effect (v07).

## Decisions

- **Learner question (route wording kept).** "How can crossed fields select one particle speed?" The answer, built in order: the electric force does not depend on speed, the magnetic force grows with speed (2); arranged to oppose (3), they balance at just one speed, v = E/B (4); faster particles are pushed towards the magnetic side, slower ones towards the electric side, so a slit passes only E/B (6); the balance holds for any charge sign or mass (7).
- **Comparison first (syllabus action; site "Beyond the syllabus" note).** The site marks the selector and routine v = E/B calculations as an extension and the field comparison as core. The design therefore opens on the comparison (scene 2) and uses the selector as the reason the comparison matters: only the magnetic force depends on speed. Open decision 2.
- **Directions (route stop "signed electric and magnetic forces").** Electron moving right, E down (top plate +), B into the page: F_E up (against E); F_B: positive-charge palm rule gives up, so the electron's is down. The "positive first, then flip" step from v04 is shown.
- **Worked example (site card 3, exact numbers).** F_E = F_B = 6.41 × 10⁻¹⁶ N at 2.0 × 10⁵ m s⁻¹; v = E/B = 2.0 × 10⁵ m s⁻¹. Rejected speeds (site Stop & Check, extended): 4.0 × 10⁵ m s⁻¹ gives F_B = 1.28 × 10⁻¹⁵ N, net 6.41 × 10⁻¹⁶ N down; 1.0 × 10⁵ m s⁻¹ gives F_B = 3.20 × 10⁻¹⁶ N, net 3.20 × 10⁻¹⁶ N up.
- **Paths drawn as initial deflections (physics care).** For the worked example's slow electrons (2 × 10⁵ m s⁻¹ in 0.020 T) the magnetic turning radius is only about 0.06 mm, so a true-scale path would be a tiny looping drift, not a clean curve. The design therefore shows forces at entry and short schematic deflections into a slit barrier, tagged "initial deflection, not to scale" (author note a); no path is presented as a parabola or a circle. The hook's beam has no numbers, so it is schematic too.
- **Charge and mass (site HSC Tip; site lesson 18 key insight).** Both forces reverse for a proton; equal sizes still at E/B; a heavier ion at the same speed also passes. "It picks out speed, not mass or charge."
- **Optional application (route stop "A mass analyser is an optional application").** One sentence and one image: a selected beam into a magnetic field alone sorts by m/q (r = mv/(qB) with v fixed); the existing mass spectrometer plate is shown once; no numbers, no detector geometry. One sentence names Thomson's charge-to-mass measurement in Module 8 (2017 syllabus, "Thomson's charge-to-mass experiment"). The learning review may cut scene 8 (open decision 3).
- **Final frame for v07 (route next).** A straight wire across a field of crosses with conventional current to the right, drifting electrons moving left inside it, each with a small upward force arrow, and a dashed "F = ?" on the wire. Directions checked (author note c). Described exactly under "Final frame" for the parallel designer of v07.
- **Memory aid.** "v = E/B: fast follows the magnetic force, slow follows the electric force." See "Memory aid check".
- **Attempts.** A1 (original): plates 2.0 cm apart with 600 V, B = 0.050 T: E = 3.0 × 10⁴ V m⁻¹, v = 6.0 × 10⁵ m s⁻¹; crossed "V/B = 1.2 × 10⁴". A2 (original, after site short-answer Q2): positive ions at twice the selected speed, E down, B into the page: net force qE up, deflected up; crossed "goes straight because the charge cancels".
- **Colour key (v01, open decision 1 there).** Electric field lines blue; magnetic field crosses slate; F_E amber; F_B rose (both forces on one particle need two colours; labels also carry "F_E" and "F_B"); velocity teal; net force ink; particles ink-outlined with "+" or "−".
- **Site sources used:** lesson 6 hook (crossed fields; "does the answer depend on charge sign or mass?"), Think First (E only; B only; both), learning intentions, vocabulary (velocity selector, crossed fields), card 1 comparison table (scene 2), card 2 (balance, q cancels, "provided the two forces oppose"), the worked example and Stop & Check (scenes 5, 6), HSC Tip (scene 7), the preview card (scene 8, one sentence), Activity 2 (A2), short-answer Q2 (A2 method), "Account 5 marks" (scene 2: work done needs a force component along the motion); lesson 18 card 2 (selector orientation, "mass and charge cancel out"; "Beyond the syllabus" status). Not used: lesson 6's simulation; lesson 18's known-potential design, analyser radii, detector separation and isotope calculations; the hook's 1.5 × 10⁴ V m⁻¹ and 3.4 × 10⁻⁴ T beam (4.4 × 10⁷ m s⁻¹, in author note d).
- **Site notes (for root to log if accepted):**
  1. Lesson 6, "Compare 6 marks" and its full-mark answer: "the proton is about 1840 times more massive". The ratio is 1836 (data sheet: 1.673 × 10⁻²⁷ / 9.109 × 10⁻³¹ = 1836.6); lessons 2, 3 and 5 use 1836. Suggest "about 1836 times" for consistency.
  2. Lesson 6, the 5-mark "Account" answer, step 3: "by the definition of the right-hand rule" (the perpendicularity comes from the vector product F = q(v × B), which the rule only remembers). Wording note, not an error; suggest "because the magnetic force is given by q(v × B), which is perpendicular to v".
  - Checked and correct: worked example (6.40 × 10⁻¹⁶ N both, 2.0 × 10⁵ m s⁻¹); MC 3,000/0.015 = 2.0 × 10⁵ m s⁻¹; Stop & Check proton and alpha at 5.0 × 10⁴ m s⁻¹ = E/B (both pass); hook 4.4 × 10⁷ m s⁻¹; lesson 18 card 2 orientation (E up, B out of the page, positive ions moving right: qE up, q(v × B) down); short-answer Q2 (F_B = 2|q|E up, net |q|E up).
- **Cause chain taught, in order:** (1) the electric force acts whether or not the charge moves and does not depend on speed; the magnetic force needs motion across B and grows with speed (2); (2) the electric force can do work, the magnetic force cannot (2); (3) with E down and B into the page, an electron moving right has F_E up and F_B down (3); (4) equal and opposite at qE = qvB, so straight through at v = E/B (4); (5) faster: F_B grows, F_E does not, so the net force is towards F_B; slower: towards F_E (6); (6) for a proton both forces reverse and still balance at E/B; mass never appears (7); (7) a beam of one speed lets a magnetic field sort by m/q (8, optional).
- **Entry knowledge:** v01, v03, v04, v05.
- **Learner-visible vocabulary:** crossed fields (electric and magnetic fields at right angles to each other and to the velocity, 3); velocity selector (7).
- **Legacy logic ported:** none. The coded `SelectorAnalyser` visual (kit family `m6-selector-analyser`, `selectorForce()` in `module6/model.ts`; limits "common speed and charge magnitude; analyser paths schematic; source not modelled") is the starting point for scenes 3 to 8; its analyser half is used only in scene 8, without numbers, and the site's caution "do not imply every mass spectrometer contains the illustrated selector" is kept in the narration ("one way").
- **New explainer motion:** **crossed-field stage** (kit gap 6: v01's plate stage with a cross grid overlaid; a particle at the entrance carrying F_E and F_B arrows whose lengths follow qE and qvB live as the speed readout changes; a net-force arrow; a speed slider; short schematic initial deflections into a slit barrier, tagged "not to scale"; sign flip for the particle); **comparison table** (two columns, rows writing in); a straight-wire panel with drifting charges (scene 15, the v07 handoff); `AlignedAlgebra`; `NumberTicker`; `Countdown`; `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `CameraStage`.
- **No human figures.** None; no operator at the mass spectrometer.
- **Author notes (not learner copy):**
  (a) Wrong-speed motion in crossed uniform fields is a cycloid-type drift at E/B (the E × B drift), with a gyroradius m(v − E/B)/(qB). For electrons at 10⁵ m s⁻¹ in 0.020 T this is about 0.03 to 0.06 mm, so real electron selectors use high speeds and weak B (for example the site hook, r ≈ 0.74 m), and selectors are short with narrow slits. The video shows only initial forces and short schematic deflections.
  (b) Net forces at entry: v = 4.0 × 10⁵: q(vB − E) = 6.41 × 10⁻¹⁶ N towards F_B; v = 1.0 × 10⁵: 3.20 × 10⁻¹⁶ N towards F_E.
  (c) Handoff directions (x right, y up, z out of the page; B = −z): conventional current +x gives F = I L × B ∝ x × (−z) = +y (up); drifting electrons move −x, q(v × B) = −e(−x × −z) = −e(−y) = +y (up). Consistent.
  (d) Site hook: E/B = 1.5 × 10⁴ / 3.4 × 10⁻⁴ = 4.41 × 10⁷ m s⁻¹ (about 0.15c); not used.
  (e) Pronunciations: "E over B"; "F E" and "F B".

- **Open decisions for root:**
  - **1. Schematic paths (root).** Rejected particles are shown as initial deflections into a slit barrier, tagged "not to scale", because true-scale electron paths at the worked example's values would be sub-millimetre loops (author note a). Confirm; alternative: switch the moving visuals to protons (r ≈ 10 cm at 2 × 10⁵ m s⁻¹ in 0.020 T, deflections a few millimetres over a 5 cm selector) while keeping the electron worked example as a force calculation.
  - **2. Scope (root).** The site lesson flags the velocity selector as beyond the 2017 core and the comparison as core; the route makes the selector the learner question under `P6-IQ1-04`. This design keeps the selector as the vehicle for the comparison. Confirm, or retitle around the comparison ("How do electric and magnetic forces on a moving charge differ?").
  - **3. Optional application (learning review).** Scene 8 (about 30 s: mass spectrometer sentence and Thomson pointer) can be cut without breaking the chain.
  - **4. Join to v07 (root).** `phys-y12-m6-v07.md` (written in parallel) assumes a different v06 final frame: violet crosses, a stream of positive charges moving right with teal velocity arrows and upward force arrows, and a grey wire outline round the stream. This design ends on slate crosses (Module 6 colour key, v01 open decision 1), a copper-coloured wire with a conventional-current arrow "I" to the right, electrons drifting left with upward force arrows, and a dashed "F = ?" on the wire. Both agree on B into the page, force up the page, the heading and the chip. Root to choose one: either v07's scene 1 is adjusted to this frame, or scene 15 here switches to v07's positive-charge stream (narration unchanged except "every one of them feels that sideways push" still holds). The field colour (slate or violet) should be settled for the whole module at the same time.

Main question: *Fire a beam of electrons of many speeds into a region where an electric field and a magnetic field cross. Almost all of them are pushed off line, but one speed goes straight through to the slit. Which speed, why only that one, and would protons at that speed get through too?*
Entry knowledge: v01, v03, v04, v05.
Stops after: field comparison, opposed forces, v = E/B, rejected speeds, charge and mass independence, one optional application sentence. No analyser calculations.
Handoff: v07, why a current-carrying wire feels a magnetic force.

## Script and shots

Cue words in **bold** trigger the visual change. Screen symbols in italic: *E*, *B*, *v*, *q*, *F_E*, *F_B*. Paper background and handwritten headline face as the explainer house style.

### 1. hook (one speed gets through)
> Here are our crossed fields. The electric field points down, between the plates, and the magnetic field points into the page, filling the same space. Now fire in a beam of electrons with lots of different **speeds**. Most of them are pushed off line, and hit the barrier. Only one speed makes it straight through the **slit**. Which speed is it? And would protons at that speed get through **too**?

Visual: opens on v05's final frame (see "Opening frame"). On "speeds" a spread of electrons enters at mid-gap, each with a speed tag (slow to fast) and a teal v arrow of matching length. Schematic short deflections (tag "initial deflection, not to scale"): slower ones bend up, faster ones bend down, all striking the barrier around the slit. On "slit" one electron travels straight through the slit and its tag reads "v = ?". On "too" a proton "(+)" ghost waits at the entrance with "?", and the 3 s `Countdown` runs beside chips "yes", "no", "depends on its mass".

### 2. comparing the two forces
> To see why, compare the two forces. The electric force, q E, acts on a charge whether it's moving or not, and it points along the field, or against it for a negative **charge**. The magnetic force, q v B, needs the charge to be moving across the field, and it points at right angles to both the velocity and the **field**. The electric force can push along the motion, do work and change the speed. The magnetic force can't, so it only steers. And here's the difference that matters today. The electric force is the same at any speed, but the magnetic force grows with **speed**.

Visual: camera pull to a two-column comparison table beside the stage ("electric field" | "magnetic field"), rows writing in as spoken: on "charge" "acts on: any charge, moving or not | only moving across B" and "direction: along E (+), against E (−) | ⊥ to v and B"; on "field" a mini panel under each column (a resting "+" between plates with a force; a resting "+" in crosses with "F = 0"). Row "work: can change speed | none: only steers". On "speed" the last row: "size: qE, same at any v | qvB, grows with v", with two bars under the columns: the F_E bar fixed while the F_B bar grows as a speed slider moves.

### 3. setting up the crossed fields
> Now set it up. The top plate is positive, so the electric field points down. The magnetic field points into the page. An electron moves to the right. The electric force on it points against the field, so it's **up**. For the magnetic force, a positive charge moving right, in a field into the page, would be pushed up. So the electron is pushed **down**. The two forces point in opposite **directions**.

Visual: camera push to the crossed-field stage. Heading writes on: "How can crossed fields select one particle speed?". Labels "E down (top +)" and "B into page (×)". An electron at the entrance with a teal v arrow. On "up" an amber "F_E" arrow up, tag "−: against E". On "down" a ghost "+" beside it gets a rose arrow up (tag "+: palm rule"), then the electron's rose "F_B" arrow points down (tag "−: reverse"). On "directions" the two arrows pulse, tag "opposed".

### 4. the balance condition
> If the two forces are equal in size, they cancel. The net force is zero, and the electron goes straight through. So q E equals q v B. The charge cancels, and v equals E over **B**. Only that one speed is balanced. At any other speed, the bigger force wins, and the particle is pushed off line. The mass doesn't appear at all, and neither does the charge. But this only works because the fields are arranged so that the forces **oppose**.

Visual: camera continue. `AlignedAlgebra` at the right: "F_E = F_B", "qE = qvB" with both q's struck through; on "B" boxed "v = E/B". The electron's arrows become equal; a net-force chip "F_net = 0" and the electron glides straight to the slit. On "oppose" a mini panel with the fields set so both forces point the same way, a chip "same direction: never balance" fades in and is crossed.

### 5. worked example
> Put in some numbers. The electric field is four thousand volts per metre, and the magnetic field is zero point zero two oh tesla. An electron enters at two point zero times ten to the five metres per second. The electric force is q E, six point four one times ten to the minus sixteen newtons, **up**. The magnetic force is q v B, also six point four one times ten to the minus sixteen, but **down**. They cancel, so the electron goes straight. And E over B, four thousand over zero point zero two, is two times ten to the five, exactly its **speed**.

Visual: calculation layout, the crossed-field stage small at the right. Task strip: "Electron in crossed fields: find both forces, then the selected speed." Equation strip: "F_E = qE, F_B = qvB, v = E/B". Givens grouped: "E = 4.0 × 10³ V m⁻¹ (down)", "B = 0.020 T (into page)", "v = 2.0 × 10⁵ m s⁻¹ (right)", "|q| = 1.602 × 10⁻¹⁹ C". `AlignedAlgebra`: on "up" "F_E = 1.602 × 10⁻¹⁹ × 4.0 × 10³ = 6.41 × 10⁻¹⁶ N, up"; on "down" "F_B = 1.602 × 10⁻¹⁹ × 2.0 × 10⁵ × 0.020 = 6.41 × 10⁻¹⁶ N, down"; on "speed" "v = E/B = 4.0 × 10³ / 0.020 = 2.0 × 10⁵ m s⁻¹" boxed with a tick against the given speed.

### 6. the rejected speeds
> Now the electrons that miss. Double the speed, to four times ten to the five. The electric force doesn't change, but the magnetic force **doubles**. The magnetic force wins, so the fast electron is pushed **down**, and misses the slit. Halve the speed instead, and the magnetic force halves. Now the electric force wins, and the slow electron is pushed **up**. Too fast, magnetic wins. Too slow, electric **wins**. So the slit lets through only the one balanced speed.

Visual: camera change to the crossed-field stage. A speed slider at "2.0 × 10⁵" with equal arrows. On "doubles" the slider moves to "4.0 × 10⁵": the rose F_B arrow doubles ("1.28 × 10⁻¹⁵ N"), F_E stays ("6.41 × 10⁻¹⁶ N"). On "down" an ink net arrow "6.41 × 10⁻¹⁶ N down" and a short schematic deflection downwards into the barrier below the slit. On "up" the slider moves to "1.0 × 10⁵": F_B halves ("3.20 × 10⁻¹⁶ N"), net "3.20 × 10⁻¹⁶ N up", the electron deflects up into the barrier above the slit. On "wins" a two-line summary: "v > E/B: F_B wins", "v < E/B: F_E wins". Tag throughout "deflections not to scale".

### 7. charge and mass don't matter
> So would protons at that speed get through? For a proton, both forces reverse. The electric force points down, and the magnetic force points up. They still oppose, and they're still equal at E over B, so the proton goes **straight** too. A heavier ion at the same speed passes as well. That's why this is called a velocity selector. It picks out speed, not mass or **charge**.

Visual: camera continue. The proton ghost from scene 1 enters at 2.0 × 10⁵ m s⁻¹: its amber F_E points down and rose F_B up, equal; on "straight" it glides through the slit, and the hook's "yes" chip ticks. A larger "+" ion (tag "heavier ion, same speed") follows straight through. On "charge" the label "velocity selector: selects v = E/B only" writes above the stage.

### 8. what one speed is good for
> Why would you want one speed? Send that beam into a magnetic field on its own. With the speed fixed, the radius, m v over q B, depends only on the mass and the charge, so heavier ions swing wider. That's one way a mass spectrometer sorts **atoms**. And in Module eight, you'll see Thomson use crossed fields to measure the electron's charge to mass **ratio**.

Visual: camera pull. Past the slit a second region of crosses only (analyser, as in `SelectorAnalyser`): two "+" ions of the same speed bend on semicircles of different radii, tag "same v: r ∝ m/q". On "atoms" the mass spectrometer plate (`m8-mass-spectrometer-v1.png`, from Chemistry, scaled uniformly) fades in at the right, tag "one design of mass spectrometer". On "ratio" a grey chip "Module 8: Thomson's charge-to-mass experiment".

### 9. memory aid
> To remember it: v equals E over B. The electric push is the same at every speed, and the magnetic push grows with speed. So fast particles follow the magnetic force, and slow ones follow the electric **force**.

Visual: board clears to "v = E/B" large, with "fast → follows F_B" and "slow → follows F_E" under it and the two force bars from scene 2. On "force" the "slow" line pulses. Hold about 2 seconds.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. In a velocity selector, the plates are two point zero centimetres apart, with six hundred volts across them. The magnetic field is zero point zero five zero tesla. Calculate the speed of the particles that pass straight through. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "In a velocity selector, two parallel plates 2.0 cm apart have a potential difference of 600 V across them. A uniform magnetic field of 0.050 T acts at right angles to the electric field and to the particles' velocity. Calculate the speed of the charged particles that pass through undeflected. (2 marks)" Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 11. feedback 1 (brief)
> First the electric field. Six hundred volts over zero point zero two metres is three point zero times ten to the four volts per **metre**. Then v equals E over B, three times ten to the four, over zero point zero five, which is six point zero times ten to the five metres per **second**. The classic slip is dividing the voltage, not the field, by B, which gives one point two times ten to the **four**.

Visual: card shrinks to the top. Rows: on "metre" "E = V/d = 600/0.020 = 3.0 × 10⁴ V m⁻¹" boxed; on "second" "v = E/B = 3.0 × 10⁴ / 0.050 = 6.0 × 10⁵ m s⁻¹" boxed. On "four" a chip "V/B = 1.2 × 10⁴" fades in and is crossed. Hold about 1 second.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. Positive ions move to the right into a velocity selector. The electric field points down the page, and the magnetic field points into the page. One ion enters at twice the selected speed. Which way is it deflected? Justify your answer. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Positive ions move to the right into a velocity selector in which the electric field points down the page and the magnetic field points into the page. The selected speed is v_s = E/B. An ion enters at 2v_s. Predict the direction of its initial deflection. Justify your answer by comparing the forces on it. (3 marks)" A small exam-style diagram: two plates (top "+"), crosses between them, a "+" with an arrow to the right. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 2 (brief)
> On a positive ion, the electric force points down, along the field, and the magnetic force points up. At twice the selected speed, the magnetic force is twice the electric force, because it grows with speed. So there's a net force upwards, and the ion is deflected **up**. The classic slip is saying it goes straight because the charge cancels. That only works at E over **B**.

Visual: card shrinks. On the diagram: amber "F_E = qE" down, rose "F_B = q(2v_s)B = 2qE" up; on "up" "net = qE, up: deflected up" boxed. On "B" a chip "q cancels, so it goes straight" fades in and is crossed (caption "only at v = E/B"). Hold about 1 second.

### 14. back to the start
> So the selector works because the two forces depend on speed differently. The electric force doesn't care how fast a charge moves, but the magnetic force does. Balance them, and only one speed, E over B, goes **straight**, whatever the charge or the **mass**.

Visual: camera change to scene 1's beam: the spread of electrons enters again; on "straight" only the E/B electron passes the slit, its tag now "v = E/B". On "mass" the proton and the heavier ion follow it through.

### 15. next: charges inside a wire
> Moving charges in a magnetic field feel a sideways force, wherever they are. Now put the moving charges inside a wire. A current is just charges drifting along a conductor, and every one of them feels that sideways **push**. So why does a current-carrying wire feel a magnetic **force**?

Visual: clear change to a cross grid (tag "B into page"). A straight horizontal wire (coded copper-coloured bar with an outline) crosses the grid from left to right; an orange "I" arrow above it points right (tag "conventional current"). Inside the wire small "−" dots drift slowly to the left. On "push" each drifting dot gets a small amber force arrow pointing up. On "force" a large dashed amber outline arrow pointing up appears on the middle of the wire, labelled "F = ?", and a chip writes: "Next: why does a current-carrying wire feel a magnetic force?". Hold about 2 seconds. This is the final frame.

### 16. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Electric force qE: acts on moving or stationary charges, along E (+) or against E (−), same at any speed, can change speed. Magnetic force qvB sin θ: needs motion across B, ⊥ to v and B, grows with speed, does no work.
2. Crossed fields arranged so F_E and F_B oppose: straight through when qE = qvB, so v = E/B.
3. v > E/B: magnetic force wins. v < E/B: electric force wins. Deflected particles miss the slit.
4. v = E/B is independent of charge, sign and mass (both forces reverse together for a negative charge).

Memory aid (large, on the notes screen): *v = E/B.* Second line: *Fast follows F_B; slow follows F_E.*

## Teaching checks

- **Does it explain causes?** Why only one speed passes (only F_B depends on v, 2, 4); why the forces oppose (signs and directions, 3); why fast particles go one way and slow the other (6); why charge and mass do not matter (both forces reverse; q cancels; m never appears, 7).
- **Misconceptions addressed:** a magnetic field acts on stationary charges (2); only one force reverses for a negative charge (3, 7, site HSC Tip); any two crossed fields balance (4, crossed); dividing V by B (11, crossed); "the charge cancels, so every speed goes straight" (13, crossed); a selector selects mass (7).
- **One idea at a time:** comparison (2), directions (3), balance (4), example (5), rejection (6), independence (7), application (8).
- **Video makes it easier:** the fixed F_E bar against the growing F_B bar (2, 9); the live arrows as the speed slider moves (6); electrons and protons passing the same slit (7, 14).
- **Response opportunity:** prediction (3 s); two unseen tasks, 10 s each; feedback about 20 s and 28 s.
- **Avoided double teaching:** v01's F = qE, v04's palm rule and v05's r = mv/(qB) recalled in a clause each.
- **Syllabus coverage:** `P6-IQ1-04` "the interaction of charged particles with electric fields" (2, then applied through the selector, 3 to 7, A1, A2). With v05 (circular motion comparison and parabola contrast) the dot point is covered.
- **Out of scope by design:** mass spectrometer calculations, detector geometry and the known-potential design (site lesson 18); Thomson's experiment (Module 8); motion of rejected particles beyond the initial deflection (author note a).

## Practice questions and model answers

**Attempt 1 (scene 10; original, 2 marks).** "In a velocity selector, two parallel plates 2.0 cm apart have a potential difference of 600 V across them. A uniform magnetic field of 0.050 T acts at right angles to the electric field and to the particles' velocity. Calculate the speed of the charged particles that pass through undeflected."
Model answer: E = V/d = 600/0.020 = 3.0 × 10⁴ V m⁻¹. Undeflected when qE = qvB, so v = E/B = 3.0 × 10⁴ / 0.050 = 6.0 × 10⁵ m s⁻¹. Classic mistake (crossed): V/B = 1.2 × 10⁴.

**Attempt 2 (scene 12; original, after site short-answer Q2, 3 marks).** "Positive ions move to the right into a velocity selector in which the electric field points down the page and the magnetic field points into the page. The selected speed is v_s = E/B. An ion enters at 2v_s. Predict the direction of its initial deflection. Justify your answer by comparing the forces on it."
Model answer: The electric force on a positive ion is along E: qE, down. The magnetic force: v to the right, B into the page gives q(v × B) up, of size q(2v_s)B = 2qE. The net force is 2qE − qE = qE upwards, so the ion is initially deflected up (towards the side of the magnetic force). Classic mistake (crossed): "it goes straight because q cancels" (that holds only at v = E/B).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Constants | e = 1.602 × 10⁻¹⁹ C | throughout |
| Worked example | E = 4.0 × 10³ V m⁻¹; B = 0.020 T; v = 2.0 × 10⁵ m s⁻¹; F_E = 6.408 × 10⁻¹⁶ N ("six point four one"); F_B = 6.408 × 10⁻¹⁶ N; E/B = 2.0 × 10⁵ | 5 |
| Rejected | 4.0 × 10⁵: F_B = 1.2816 × 10⁻¹⁵ N, net 6.408 × 10⁻¹⁶ N down; 1.0 × 10⁵: F_B = 3.204 × 10⁻¹⁶ N, net 3.204 × 10⁻¹⁶ N up | 6 |
| A1 | E = 3.0 × 10⁴ V m⁻¹; v = 6.0 × 10⁵ m s⁻¹; slip 1.2 × 10⁴ | 10, 11 |
| A2 | F_B = 2qE; net qE up | 12, 13 |
| Author note | electron gyroradius at 1 × 10⁵ to 2 × 10⁵ m s⁻¹ in 0.020 T: 2.8 × 10⁻⁵ to 5.7 × 10⁻⁵ m; proton at 2 × 10⁵: 0.104 m; site hook E/B = 4.41 × 10⁷ m s⁻¹, electron radius there 0.74 m | Decisions |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov); Codex to re-check.

- 1.602 × 10⁻¹⁹ × 4,000 = 6.408 × 10⁻¹⁶; 1.602 × 10⁻¹⁹ × 2.0 × 10⁵ × 0.020 = 6.408 × 10⁻¹⁶; 4,000/0.020 = 2.0 × 10⁵.
- 4.0 × 10⁵: F_B = 1.2816 × 10⁻¹⁵; net 6.408 × 10⁻¹⁶. 1.0 × 10⁵: F_B = 3.204 × 10⁻¹⁶; net 3.204 × 10⁻¹⁶.
- A1: 600/0.020 = 3.0 × 10⁴; / 0.050 = 6.0 × 10⁵; 600/0.050 = 1.2 × 10⁴.
- Directions (x right, y up, z out; E = −y, B = −z, v = +x): electron F_E = −e(−y) = +y; F_B = −e(x × −z) = −e(+y) = −y. Positive ion: F_E = −y; F_B = +y. Wire: I along +x gives +y; electrons along −x give +y.
- Gyroradii: 9.109 × 10⁻³¹ × 1.0 × 10⁵ / (1.602 × 10⁻¹⁹ × 0.020) = 2.84 × 10⁻⁵ m; at 2.0 × 10⁵, 5.69 × 10⁻⁵ m; proton at 2.0 × 10⁵, 0.1044 m; site hook 1.5 × 10⁴/3.4 × 10⁻⁴ = 4.412 × 10⁷, electron radius 0.738 m.

## Memory aid check

- **"v = E/B. Fast follows F_B; slow follows F_E."** From the site's Stop & Check summary ("Above this speed magnetic force dominates; below it electric force dominates") and lesson 18 card 2. Meaning, as said in scene 9: because only the magnetic force grows with speed, a particle faster than E/B is pushed towards the magnetic force's side and a slower one towards the electric force's side. Assumptions checked: E, B and v mutually perpendicular; fields arranged so the forces oppose; uniform fields; describes the initial deflection. Helps A2 directly.

## Narration length estimate

Revision 1 count (6 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,597 characters**, 16 scenes. Characters per scene (1 to 16): 386, 567, 391, 429, 539, 452, 368, 351, 206, 261, 391, 267, 369, 251, 279, 75. At 13.3 characters per second the speech is about 421 s; add 3 s for the prediction countdown, about 3 s for the beam runs in scenes 1 and 14, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the memory-aid hold, 2 s for the handoff hold and about 54 s more of the quiet notes hold (about 86 s of holds and countdowns): **about 507 s**. Reserve trims if the voiced take runs long: scene 8 (optional application, open decision 3); scene 14.

## Opening frame

v05's final frame (`phys-y12-m6-v05.md`, "Final frame"): paper background; two horizontal coded plates (top "+", bottom "−") with blue field lines pointing down and a grid of slate crosses in the gap, tag "E down, B into page"; at the left entrance an electron "(−)" at mid-gap with a teal "v" arrow pointing right, a dashed amber "F_E" arrow up and a dashed rose "F_B" arrow down, each with "?"; a coded barrier with a slit on the centre line at the far right; heading "Why does a perpendicular magnetic field bend a path without increasing speed?"; chip "Next: how can crossed fields select one particle speed?". Scene 1 fades the dashed arrows and fires the beam; the heading changes in scene 3.

## Final frame

The last explained frame (end of scene 15), for phys-y12-m6-v07 ("Why does a current-carrying wire feel a magnetic force?") to open on: paper background; a square region filled with a regular grid of slate crosses, tag "B into page" at its top left; a straight horizontal wire drawn as a coded copper-coloured bar with an ink outline, crossing the whole region from left to right through its centre; above the wire an orange arrow pointing right labelled "I", with the tag "conventional current"; inside the wire a row of small "−" dots (electrons) that keep drifting slowly to the left (the frame holds them in motion), each with a small amber arrow pointing up (the magnetic force on each moving electron); on the middle of the wire a large dashed amber outline arrow pointing up (perpendicular to the wire, in the plane of the page), labelled "F = ?"; no plates, no power supply, no magnet poles drawn; heading "How can crossed fields select one particle speed?"; chip at the bottom of the content area (above the bottom 12%): "Next: why does a current-carrying wire feel a magnetic force?". Directions: conventional current to the right with B into the page gives a force up the page; electrons drifting left also feel forces up the page (author note c).

## Scene list and build ids

Lesson key `p-y12-m6-v06` (route phys-y12-m6-v06). Suggested explainer folder `src/explainer/lessons/phys-y12-m6-v06`; build folder `docs/production/claude-pm/lessons/p-y12-m6-v06` (root to confirm).

In order (16 scene headings): hook, compare-forces, crossed-setup, balance, worked-selector, rejected-speeds, charge-mass, application, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, hook-answer, handoff, key-notes.

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`); scene 1 ends with a 3 s prediction countdown. `motionTools`: crossed-field stage (kit gap 6), comparison table, analyser region (from `SelectorAnalyser`), wire panel, `AlignedAlgebra`, `NumberTicker`, `Countdown`, `CameraStage`. Transitions: v05's final frame continues into scene 1 (camera continue); 1 to 2 camera pull; 2 to 3 camera push; 3 to 4 camera continue; 4 to 5 clear change to the calculation layout; 5 to 6 camera change; 6 to 7 camera continue; 7 to 8 camera pull; 8 to 9 clear change; attempts card shrink; 13 to 14 camera change; 14 to 15 clear change; 15 to 16 fade.

Holds: hook (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/p-y12-m6-v06-learning-review.md`, `checks/p-y12-m6-v06-physics-check.md`.

## Assets

Have (inspected 6 Nov on a session contact sheet; scaled uniformly only):
- `public/assets/chemistry/m8-mass-spectrometer-v1.png` (2000 × 2000, RGBA, bench instrument with ion source and display): scene 8 only.

Need (new plates): none.

Coded: plates, field lines, cross grids, particles, force bars and arrows, slit barrier, schematic deflections, analyser region, comparison table, wire and drifting charges, algebra, chips, cards, countdowns, notes board.

Kit gaps: 6. **Crossed-field stage** (v01's plate stage plus a cross grid; live F_E and F_B arrows scaled by qE and qvB from a speed slider; net-force arrow; slit barrier; short schematic initial deflections tagged "not to scale"; particle sign flip; several particles in one beam). Extends `SelectorAnalyser` (`m6-selector-analyser`). The **wire panel** (scene 15: straight wire in a cross grid, current arrow, drifting charges with force arrows) is offered to v07.

## Codex asset brief (Year 12 Physics M6 v06)

No new plates. Codex confirms `m8-mass-spectrometer-v1.png` reads as a laboratory instrument at about 300 px wide and contains no visible brand name or text.

## Codex error-check brief

Error-only check:
1. Re-check every value under "Numbers to verify" and every value in narration, screen text, attempts and notes against "Numbers used".
2. Confirm the physics of every learner-visible claim: the comparison rows (acts at rest or not; directions; work; dependence on speed); every force direction in scenes 3 to 7, 13 and 15 (author note c); v = E/B with q and m cancelling, only when the forces oppose; too fast: magnetic wins; too slow: electric wins; the analyser sentence (same v: r ∝ m/q) and "one way"; Thomson in Module 8 of the 2017 syllabus; the schematic-deflection tags (author note a).
3. Confirm the memory aid's assumptions.
4. Confirm every cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
5. Confirm both attempt cards are original, carry every given, and show nothing answer-bearing.
6. Confirm the syllabus quote matches the route JSON exactly and is labelled 2017.
7. Confirm no person, hand, face or body outline is drawn or requested.
8. Confirm no em dash (U+2014), no U+2061, and Australian spelling.
9. Confirm the narration counts by script.
10. Report the site notes under Decisions to root.

## YouTube metadata (draft)

Title: Crossed Electric and Magnetic Fields: The Velocity Selector, v = E/B | HSC Physics Module 6

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module6/lesson06.sa.html

Fire charged particles of many speeds into crossed electric and magnetic fields and only one speed goes straight through. Compare the electric and magnetic forces on a moving charge, arrange them to oppose, derive v = E/B, see which way too-fast and too-slow particles are pushed, and find out why the charge and mass don't matter. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 6: Electromagnetism.
Syllabus content (NSW Physics Stage 6, 2017):
"compare the interaction of charged particles moving in magnetic fields to: the interaction of charged particles with electric fields; other examples of uniform circular motion (ACSPH108)"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Next: why a current-carrying wire feels a magnetic force.

#HSCPhysics #Physics #VelocitySelector #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (does the comparison table carry the "why one speed" idea; are the schematic deflections honest enough), then the physics check and the Codex error check.
- Judge the live force arrows, the beam at the slit and the drifting charges in the wire at playback speed.
