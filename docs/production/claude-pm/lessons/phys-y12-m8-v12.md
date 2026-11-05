# Year 12 Physics M8 V12: Matter waves and electron diffraction. What evidence shows that particles have wave behaviour? (design)

Status: Revision 1 (6 Nov 2026): first design. Needs independent learning review and science check before voicing.

Narration 6,273 characters, 18 scenes, about 551 s, counted by script with the build parser rules (see "Narration length estimate"). Opens on v11's final frame.

Scope: twelfth video of Year 12 Physics Module 8 (From the Universe to the Atom, Physics Stage 6, 2017 syllabus), inquiry question "How is it known that classical physics cannot explain the properties of the atom?". Templates as `phys-y12-m8-v11.md`; `math-a12-d10.md` for the calculation layout. No pre-design pack exists; the pack work is done here (2017 wording from the ledger, site givens kept where used, every number recalculated in Python with HSC data-sheet constants, original attempts, asset reuse). Site lesson read in full (6 Nov, read-only, through the brief 168 text extract `work/brief168/module8-lesson13.sa.txt`): lesson 13, especially "derive-quantisation-from-matter-waves" (Davisson and Germer 1927, 54 eV electrons, nickel, peak at 50°, λ = 167 pm, spacing 215 pm; de Broglie 1924, λ = h/p = h/mv; Figure 1 standing waves on the first three orbits; 2πr = nλ gives mvr = nh/2π; Stop and check: electron at 2.2 × 10⁶ m s⁻¹; MC at 1.0 × 10⁶ m s⁻¹), "calculate-de-broglie-wavelengths" (Activity 1: electron at 2.2 × 10⁶ m s⁻¹, proton at the same speed, the ground-state check with r₁ = 5.29 × 10⁻¹¹ m, a 100 eV electron), "Analyse 7 marks" (hypothesis, Bohr's unexplained rule, the standing-wave condition, the derivation, destructive self-interference, Davisson and Germer as evidence: "diffraction cannot be produced by particles alone, and the measured wavelength agreed"), independent practice Q1 (150 eV electron, 1.0 × 10⁻¹⁰ m; the standing-wave account) and "retrieve-reflect-and-finish": `C:/Users/kygs/hscscience/subjects/physics/year12/module8/lesson13.sa.html`, SHA256 `62a68f24eea0fa549276784868ae3010e4af81615b36572f1a64795443c95bb5` (recomputed 6 Nov; matches the route). Route entry: `phys-y12-m8-v12`, sections `derive-quantisation-from-matter-waves`, `calculate-de-broglie-wavelengths`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Use electron diffraction and de Broglie wavelength h/p; label non-relativistic p=mv applicability. Stop before mathematical wavefunctions." Next: "phys-y12-m8-v13: Why do orbital probabilities replace literal electron paths?"

Owner rules applied: 2017 syllabus quoted exactly; no people, hands, faces or body outlines (scientists named in words only); the steel ball, the electron diffraction tube and the high-voltage supply are painted plates (two reused, one new), scaled uniformly, never stretched; the Davisson and Germer set-up is a coded schematic (as HSC papers draw it), and waves, crystal rows, rings, orbits and calculation strips are coded; every number recalculated in Python with h = 6.626 × 10⁻³⁴ J s, m_e = 9.109 × 10⁻³¹ kg, e = 1.602 × 10⁻¹⁹ C and c = 3.00 × 10⁸ m s⁻¹ (data sheet); the formula exactly as printed on the HSC formula sheet, λ = h/mv; calculation layout with task strip, equation strip and grouped givens, one stage at a time; "Pause here to answer." with a 10 s countdown; brief feedback with one crossed-out mistake; original attempts; Australian spelling; no em dashes. Recalled, not re-taught: v10 and v11 (Bohr's rule mvr = nh/2π, r₁ = 5.29 × 10⁻¹¹ m, de Broglie's suggestion), v07 (J. J. Thomson's electron as a particle), Module 7 v05 and v07 (diffraction is strong when the gap is about the wavelength; d sin θ = mλ), Module 7 v10 and v15 (photons; a photon has no mass but carries momentum), Module 6 (an electron accelerated through V gains qV of kinetic energy).

Syllabus content (Physics Stage 6 (2017), Module 8; ledger id `P8-IQ3-04`, marked as a practical or depth-study dot point in the ledger), quoted from the route JSON `syllabusActions`:

- `P8-IQ3-04`: "investigate de Broglie’s matter waves, and the experimental evidence that developed the following formula:"
  - "λ=(h)/(mv) (ACSPH140)" (displayed as λ = h/mv, as on the HSC formula sheet)

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 63)

**Boundary:** starts on v11's final frame (de Broglie's standing wave on an orbit, "electron = wave?", an empty "evidence?" panel). Teaches: where λ = h/p comes from (a photon's momentum p = E/c = h/λ, turned around); λ = h/mv for particles well below light speed (p = mv applicability labelled); why everyday objects show no wave behaviour (a 50 g steel ball: 6.6 × 10⁻³³ m); an electron's wavelength is atom-sized (3.31 × 10⁻¹⁰ m), so crystal rows can act as a grating; Davisson and Germer's peak at 50°; the two-stage check (54 V: speed 4.36 × 10⁶ m s⁻¹, predicted λ = 1.67 × 10⁻¹⁰ m; grating rule with d = 2.15 × 10⁻¹⁰ m: measured 1.65 × 10⁻¹⁰ m); George Thomson's rings and the school electron diffraction tube (rings shrink as the voltage rises; teacher demonstration); why diffraction is evidence (interference needs waves, plus the right number); each electron still lands as one spot; the ground-state wavelength fits the orbit once, and 2πr = nλ gives Bohr's rule. Stops before wavefunctions and probability (v13), the uncertainty principle (site extension), relativistic momentum calculations and quantum numbers.

## Decisions

- **Learner question (route wording kept).** "What evidence shows that particles have wave behaviour?" The answer, built in order: de Broglie predicted a wavelength h/p for any particle (2, 3); for everyday objects it is far too small to notice (4), but for electrons it matches the spacing of atoms (5), so crystals should diffract electrons; they do, at the predicted angle (6 to 8), and as rings through thin films that shrink as electrons speed up (9); interference patterns need waves, and the wavelength fits h/mv (10).
- **Hook (v11's handoff).** A bold claim needs a test. The electron "had always been a tiny charged ball, with a mass and a path" (v07).
- **Where λ = h/p comes from (route "derive each newly introduced equation").** One short derivation: p = E/c for a photon (stated as Module 7's result that photons carry momentum; m7-v15 named it, author note a), E = hf, f/c = 1/λ, so p = h/λ; de Broglie reversed it. This is a motivation by symmetry, not a proof; the narration says "perhaps".
- **p = mv applicability (route stop).** Spoken once: "It works when the particle is much slower than light, say under a tenth of c"; a grey chip names relativistic momentum (m7-v15) for faster particles. All speeds in this video are under 2% of c except the school tube (about 12% of c at 4 kV, where p = mv is still within 1%; author note b).
- **Size checks (site Activity 1).** The steel ball (new numbers; reused plate) and the electron at 2.2 × 10⁶ m s⁻¹ (site value). The proton comparison (site Activity 1 Q2) is left out to keep one stage at a time (open decision 2).
- **Davisson and Germer (site "derive-quantisation-from-matter-waves" and "Analyse 7 marks" step 6).** Coded schematic: electron gun, nickel crystal, movable detector, polar plot of signal against angle with the peak at 50°. The narration contrasts "Particles should scatter in all directions, fairly evenly" with the peak. Named in words only.
- **Two-stage worked check (site numbers, recalculated).** Stage 1: 54 V gives 54 eV = 8.65 × 10⁻¹⁸ J, and ½mv² gives v = 4.36 × 10⁶ m s⁻¹. Stage 2: λ = h/mv = 1.67 × 10⁻¹⁰ m; the surface rows act as a grating, d sin θ = λ with d = 2.15 × 10⁻¹⁰ m and θ = 50° gives 1.65 × 10⁻¹⁰ m; agreement about 1%. The site's "via the Bragg condition" is replaced by the grating rule students know from m7-v07 (site note 1).
- **Rings (Thomson; school tube; `P8-IQ3-04` investigate).** George Thomson (1927, thin metal films, rings) with the surprise that his father, J. J. Thomson, had shown the electron was a particle (v07). Then the school electron diffraction tube with graphite and a glowing screen: rings shrink as the accelerating voltage rises, which tests λ ∝ 1/v qualitatively. Safety: several thousand volts and an evacuated glass tube, so a teacher demonstration. Ring-radius measurements are not calculated (open decision 1).
- **Why it is evidence (site "Analyse 7 marks" step 6).** Two parts said together: the pattern (only overlapping waves cancel in some directions) and the number (the wavelength matches h/mv). One more sentence: each electron still lands as a single spot; the pattern builds from many. This prevents "electrons are waves, not particles" (A2's crossed mistake) and sets up v13.
- **Back to the orbit (site Activity 1 Q3 and "Analyse 7 marks" steps 3 to 5).** The ground-state electron's wavelength (3.31 × 10⁻¹⁰ m) equals the orbit circumference 2πr₁ (3.32 × 10⁻¹⁰ m): one wavelength fits. Then 2πr = nλ with λ = h/mv gives mvr = nh/2π (v10's boxed rule, now explained); orbits that don't fit cancel themselves.
- **Attempts (original numbers, HSC style).** A1 (3 marks): an electron accelerated through 100 V: λ = 1.23 × 10⁻¹⁰ m; could a crystal with 2 × 10⁻¹⁰ m spacing diffract it (yes, comparable). Crossed: treating 100 as joules (speed 1.48 × 10¹⁶ m s⁻¹, faster than light). A2 (3 marks): explain how electron diffraction supports de Broglie's hypothesis. Crossed: "this shows electrons are waves, not particles".
- **Handoff (route next).** Scene 17: each electron lands as one spot; where the next lands can only be given as a likelihood; the orbit picture fades to a question. See "Final frame".
- **Colour key (v10 and v11 keys; Module 7 wave key):** electrons navy dots; electron waves navy sinusoids; light and photons amber; crystal atoms grey discs in rows; diffraction peaks and bright rings teal; momentum arrows teal; the orbit dashed ink with the navy standing wave; data-sheet constants in chips.
- **Site sources used:** lesson 13: de Broglie 1924 and λ = h/p = h/mv (2, 3); Davisson and Germer 54 eV, 50°, 167 pm, 215 pm (6 to 8); Figure 1 and 2πr = nλ (11, 12); Activity 1 Q1 and Q3 (5, 11); Activity 1 Q4 (100 eV, A1); "Analyse 7 marks" steps 1 to 6 (2, 6 to 12, A2). Not used: the proton at 2.2 × 10⁶ m s⁻¹ (open decision 2); the uncertainty principle, quantum numbers and Pauli (v13 or extension); Q1's 150 eV (A1 uses 100 V instead).
- **Site notes (quoted from site lesson 13, read 6 Nov; for root to log in `../site-corrections-phys-y12.md` if accepted):**
  1. Method label ("derive-quantisation-from-matter-waves"): "observed a diffraction peak at 50°, the same angle predicted if the electrons had wavelength λ = 167 pm, matching the nickel crystal spacing of 215 pm via the Bragg condition". The 215 pm figure is the spacing of surface rows, used with the surface-grating rule d sin θ = λ (215 × sin 50° = 165 pm); the Bragg condition uses the interplanar spacing (91 pm) and a different angle (65°). Suggest "via the grating condition d sin θ = λ for the rows of surface atoms".
  2. Evidence (same section): "showed electrons produce interference patterns, definitive evidence of wave behaviour". The pattern and the agreement with h/mv together make the evidence (the site's own "Analyse 7 marks" step 6 says "Either alone is weaker than both together"). Suggest "strong evidence, because the pattern needs waves and its wavelength matched h/mv".
  3. Constants (minor): the lesson uses h = 6.63 × 10⁻³⁴ J s, m_e = 9.11 × 10⁻³¹ kg and 1 eV = 1.6 × 10⁻¹⁹ J; the data sheet gives 6.626 × 10⁻³⁴, 9.109 × 10⁻³¹ and 1.602 × 10⁻¹⁹. Answers agree to two significant figures.
  4. History (lesson 13 vocabulary and "Analyse 7 marks"): only Davisson and Germer are named. George Thomson's 1927 thin-film rings (shared Nobel Prize 1937) are the second independent confirmation and the basis of the school electron diffraction tube. Suggest adding one sentence.
  5. Checked and correct: 2.2 × 10⁶ m s⁻¹ gives 3.3 × 10⁻¹⁰ m; MC 1.0 × 10⁶ m s⁻¹ gives 7.3 × 10⁻¹⁰ m; Q1 150 eV gives 1.0 × 10⁻¹⁰ m (7.26 × 10⁶ m s⁻¹); 54 eV gives 167 pm; 2πr₁ = 3.32 × 10⁻¹⁰ m.
- **Cause chain taught, in order:** (1) light has wave and particle behaviour, and a photon's momentum is h/λ (2); (2) de Broglie proposed that any particle with momentum p has a wavelength h/p, so h/mv for slow particles (2, 3); (3) a large mass gives a wavelength far too small for any gap, so no diffraction is seen (4); (4) an electron's wavelength is about the spacing of atoms, and waves diffract strongly through gaps about their own wavelength, so crystals should diffract electrons (5); (5) the measured peak angle gives the wavelength h/mv predicts (6 to 8); (6) faster electrons have more momentum, so shorter wavelength and smaller rings (9); (7) interference needs waves, so the pattern plus the matching number is evidence, while each electron still arrives as one particle (10); (8) a whole number of wavelengths must fit an orbit, which gives Bohr's rule (11, 12).
- **Entry knowledge (route `entryKnowledge`):** v11 (de Broglie's suggestion), v10 (mvr = nh/2π, r₁), Module 7 (diffraction, d sin θ = mλ, photons and their momentum), Module 6 (kinetic energy qV), Year 11 (momentum p = mv, ½mv²).
- **Learner-visible vocabulary (plain meaning at first use):** matter wave or de Broglie wavelength (the wavelength a moving particle has, λ = h/p, 2); momentum (mass times velocity, recalled, 3); diffraction (spreading through a gap or round an edge, recalled, 5); diffraction peak (a direction where the scattered waves add up strongly, 6); electron diffraction tube (9); interference (waves adding or cancelling where they overlap, 10).
- **Legacy logic ported:** none. Coded family `m8-quantum-atom` is not used here (its limits exclude Bohr orbital dynamics); the standing-wave orbit is the kit gap from v11.
- **New explainer motion:** **momentum slider** (a wave whose wavelength shortens as a momentum arrow grows, 3); **scale ladder** (the ball's wavelength against a proton and an atom on one log scale, 4, 5); **crystal grating** (rows of atoms with electron waves scattering and adding at one angle, 5, 8); **polar detector plot** (the detector arm sweeping and the signal lobe growing at 50°, 6); **ring screen** (rings that shrink as a voltage readout rises, 9; dots that build up rings, 10, 17); **standing-wave orbit** (from v11; one wavelength on the n = 1 orbit, 11, 12); `AlignedAlgebra`; `NumberTicker`; `Countdown` (10 s in scenes 13 and 15); `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the picture (orbit, apparatus or schematic) at the left or centre; working strips at the right; everything above the bottom 12% of the frame.
- **Author notes (not learner copy):**
  (a) For a photon E = pc (from E² = (pc)² + (mc²)² with m = 0); with E = hf and c = fλ this gives p = h/λ. Module 7 v15 stated that photons carry momentum without the formula; the narration states p = E/c as that result.
  (b) Relativistic check: at 0.1c the relativistic momentum γmv exceeds mv by 0.5%; at 54 V (1.45% of c) by 0.01%. A school tube at 4 kV gives v = 3.75 × 10⁷ m s⁻¹ (12.5% of c); the de Broglie wavelength with relativistic momentum is about 0.2% shorter than with mv. "Under a tenth of c" is a safe teaching guide, not a sharp limit.
  (c) Davisson and Germer (Bell Telephone Laboratories, New York, 1927): the 54 eV peak at 50° from the incident beam; the surface-row spacing of nickel 0.215 nm; d sin θ = λ gives 0.165 nm against h/mv = 0.167 nm. Their 1925 accident (an annealed crystal) is not told.
  (d) George Paget Thomson (Aberdeen, 1927) used electrons of tens of keV through thin films; he shared the 1937 Nobel Prize with Davisson. J. J. Thomson (1897, the electron's charge-to-mass ratio, v07).
  (e) School tube: graphite (polycrystalline) gives two rings from spacings 0.213 nm and 0.123 nm; at 3 kV λ = 2.24 × 10⁻¹¹ m and at 5 kV 1.73 × 10⁻¹¹ m, so rings shrink as the voltage rises. Ring radii are not calculated (small-angle geometry with the tube's curved screen is not on the syllabus).
  (f) The ground state: λ = 3.306 × 10⁻¹⁰ m and 2πr₁ = 3.324 × 10⁻¹⁰ m differ by 0.5% because 2.2 × 10⁶ m s⁻¹ and 5.29 × 10⁻¹¹ m are rounded (the exact Bohr speed is 2.188 × 10⁶ m s⁻¹).
  (g) Pronunciations: "de Broglie" (duh BROY); "Davisson" (DAY-vi-son); "Germer" (GER-mer, hard g).
- **Open decisions for root:**
  - **1. Practical depth (coverage check).** `P8-IQ3-04` is a practical dot point in the ledger. One scene shows the school electron diffraction tube qualitatively (rings shrink as voltage rises). A separate practical video measuring ring diameters against voltage is a possible later addition; recorded as a coverage note.
  - **2. Proton comparison (learning review).** Left out (site Activity 1 Q2: the proton's wavelength is 1836 times shorter at the same speed). Add as one sentence in scene 5 if the review wants the mass dependence shown twice.
  - **3. Handoff picture (root, with v13's designer).** The final frame shows the ring screen built from single dots with a "next?" marker; v13 opens on it.

Main question: *Electrons were tiny charged balls. What would it take to show that they also behave like waves?*
Entry knowledge: de Broglie's suggestion and Bohr's rule (v10, v11); diffraction and gratings (Module 7); kinetic energy qV (Module 6); momentum (Year 11).
Stops after: λ = h/p and h/mv with p = mv applicability, size checks, Davisson and Germer with the two-stage check, rings and the school tube, why it is evidence, Bohr's rule from standing waves. No wavefunctions, probability or uncertainty.
Handoff: v13, why orbital probabilities replace literal electron paths.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *λ*, *h*, *p*, *m*, *v*, *d*, *θ*, *r*, *n*.

### 1. hook (a bold claim needs a test)
> Here's where we stopped. De Broglie suggested that an electron also behaves like a wave, and that only orbits fitting a whole number of its wavelengths would last. It's a bold idea, because an electron had always been a tiny charged ball, with a mass and a path. A claim like that needs a test. So what evidence shows that particles have wave **behaviour**?

Visual: opens on v11's final frame (see "Opening frame"); the chip becomes the heading: "What evidence shows that particles have wave behaviour?". On "De Broglie suggested" the name tag "de Broglie, 1924" pulses. On "a whole number of its wavelengths" the three-wavelength standing wave runs once round its orbit. On "a tiny charged ball" a navy dot with tags "mass", "charge" and a short straight path appears beside the orbit (v07 recalled, tag "Thomson, 1897: a particle"). On "needs a test" the empty "evidence?" panel slides to the centre. On "behaviour" the heading underlines "evidence" and "wave behaviour".

### 2. turning light's rule around
> De Broglie started with light. In Module seven, light diffracted like a wave, but in the photoelectric effect it arrived as photons. A photon has no mass, yet it still carries momentum, p equals E over c. Its energy is h f, and f over c is one over lambda, so a photon's momentum is h over **lambda**. De Broglie turned that around. If light waves carry momentum, perhaps anything with momentum has a wavelength, lambda equals h over **p**.

Visual: board change: two small chips at the top, "light: diffraction → wave (Module 7)" and "light: photoelectric effect → photon (Module 7)". On "it still carries momentum" an amber photon packet with a teal momentum arrow, tag "no mass, but momentum (Module 7)". On "p equals E over c" `AlignedAlgebra` "p = E/c". On "Its energy is h f" "= hf/c"; on "f over c is one over lambda" "= h/λ"; on "lambda" the line boxes: "photon: p = h/λ". On "turned that around" the box flips with a turning arrow. On "anything with momentum" the photon becomes a navy dot with a teal momentum arrow and a faint navy wave behind it. On "p" "λ = h/p" (boxed), tag "de Broglie wavelength".

### 3. a particle's wavelength
> For a particle, momentum is mass times velocity, so lambda equals h over m v. That's the form on your formula sheet. It works when the particle is much slower than light, say under a tenth of c. Faster than that, you'd use relativistic momentum from Module seven. The more momentum a particle has, the shorter its **wavelength**.

Visual: "λ = h/p" with "p = mv" substituting below; on "lambda equals h over m v" "λ = h/mv" (boxed) and a small chip "HSC formula sheet". On "under a tenth of c" a tag beside p = mv: "p = mv: for v below about 0.1c". On "relativistic momentum" a grey chip "faster: relativistic momentum (Module 7)". On "wavelength" the momentum slider: the teal arrow on the navy dot grows and the wave behind it squeezes to a shorter wavelength; tag "more momentum → shorter λ".

### 4. why nobody had noticed
> So why had nobody noticed? Take a fifty gram steel ball, rolling at two metres per second. Lambda is six point six two six times ten to the minus thirty four, over zero point zero five zero times two point zero. That's six point six times ten to the minus thirty three **metres**, far smaller than a proton. No gap is ever that narrow, so the ball never shows **diffraction**.

Visual: board change: the reused steel ball `phys-y11-steel-ball-v1.png` (small) on a coded floor line with a teal velocity arrow. Task strip: "Find the ball's de Broglie wavelength". Equation strip: "λ = h/mv". Givens grouped: "m = 0.050 kg, v = 2.0 m s⁻¹" (ball); "h = 6.626 × 10⁻³⁴ J s" (data sheet). On "metres" `AlignedAlgebra` "λ = 6.626 × 10⁻³⁴ / (0.050 × 2.0) = 6.6 × 10⁻³³ m" (boxed). On "far smaller than a proton" the scale ladder: a vertical log scale with marks "atom ≈ 10⁻¹⁰ m", "proton ≈ 10⁻¹⁵ m" and, far below, "ball's λ ≈ 10⁻³³ m". On "diffraction" a coded slit chip with the ball's wave passing straight through, crossed tag "no spreading: λ far too small".

### 5. an electron's wavelength
> Now take an electron moving at two point two times ten to the six metres per second. Its mass is nine point one zero nine times ten to the minus thirty one kilograms, so lambda comes out at three point three one times ten to the minus ten **metres**. That's about the spacing of atoms in a solid. Waves diffract strongly through gaps about their own wavelength. So the rows of atoms in a crystal could act like a diffraction grating for **electrons**.

Visual: the ball's working shrinks to one kept line "ball: λ = 6.6 × 10⁻³³ m". Task strip: "Find an electron's de Broglie wavelength". Givens grouped: "v = 2.2 × 10⁶ m s⁻¹" (electron); "m_e = 9.109 × 10⁻³¹ kg, h = 6.626 × 10⁻³⁴ J s" (data sheet). On "metres" "λ = 6.626 × 10⁻³⁴ / (9.109 × 10⁻³¹ × 2.2 × 10⁶) = 3.31 × 10⁻¹⁰ m" (boxed), with a `NumberTicker`. On "the spacing of atoms" the scale ladder returns with a teal mark "electron's λ" landing beside "atom ≈ 10⁻¹⁰ m". On "Waves diffract strongly" a chip "strong diffraction when gap ≈ λ (Module 7)". On "electrons" board change to a coded crystal: neat rows of grey atom discs, tag "rows of atoms: a grating made by nature".

### 6. Davisson and Germer's peak
> In nineteen twenty seven, Clinton Davisson and Lester Germer, in New York, fired a beam of electrons at a nickel crystal. If electrons were only particles, they should bounce off in all directions, fairly evenly. Instead, the detector found a strong peak at fifty degrees, with weaker signals either side. A sharp peak at one angle is exactly what a grating does with **waves**.

Visual: board change: coded schematic (side view, HSC style): an "electron gun" box at the left, a grey "nickel crystal" block at the centre, a "detector" on a curved arm that can swing round it; all inside a dashed outline "vacuum". Name tags in words only: "Davisson and Germer, 1927". On "fired a beam of electrons" navy dots stream from the gun to the crystal. On "fairly evenly" a grey dashed polar curve (a smooth half-circle), tag "particles only: even spread (prediction)". On "a strong peak at fifty degrees" the detector arm sweeps and a teal polar lobe grows with its tip at 50°, label "θ = 50°", tag "measured". On "waves" a chip "grating + waves → peaks at set angles (Module 7)".

### 7. stage 1: the electrons' speed
> Let's check the numbers. Their electrons were accelerated through fifty four volts, so each gained fifty four electron volts of kinetic energy, that's eight point six five times ten to the minus eighteen joules. Kinetic energy is half m v squared, so the speed is four point three six times ten to the six metres per **second**.

Visual: the schematic shrinks to the top left. Task strip: "Does λ = h/mv match the peak?". Equation strip: "E_k = qV = ½mv², λ = h/mv, d sin θ = mλ". Givens grouped: "V = 54 V" (gun); "θ = 50°, d = 2.15 × 10⁻¹⁰ m" (crystal rows); "m_e = 9.109 × 10⁻³¹ kg, e = 1.602 × 10⁻¹⁹ C, h = 6.626 × 10⁻³⁴ J s" (data sheet). On "fifty four electron volts" `AlignedAlgebra` "E_k = qV = 1.602 × 10⁻¹⁹ × 54 = 8.65 × 10⁻¹⁸ J". On "second" "v = √(2E_k/m) = √(2 × 8.65 × 10⁻¹⁸ / 9.109 × 10⁻³¹) = 4.36 × 10⁶ m s⁻¹" (boxed), tag "1.5% of c: p = mv is fine".

### 8. stage 2: prediction against measurement
> De Broglie's equation predicts lambda equals h over m v, which is one point six seven times ten to the minus ten **metres**. Now treat the rows of nickel atoms as a grating. They're two point one five times ten to the minus ten metres apart, and the peak was at fifty degrees. So d sine theta gives one point six five times ten to the minus ten **metres**. Prediction and measurement agree to about one per **cent**.

Visual: stage 1 shrinks to one kept line "v = 4.36 × 10⁶ m s⁻¹". On "h over m v" "λ = 6.626 × 10⁻³⁴ / (9.109 × 10⁻³¹ × 4.36 × 10⁶)"; on "metres" "= 1.67 × 10⁻¹⁰ m (predicted)" (boxed). On "treat the rows of nickel atoms as a grating" the crystal rows return in a close-up with spacing bracket "d = 2.15 × 10⁻¹⁰ m" and waves leaving at 50°. On "d sine theta" "λ = d sin θ = 2.15 × 10⁻¹⁰ × sin 50° (first order, m = 1)"; on the second "metres" "= 1.65 × 10⁻¹⁰ m (measured)" (boxed). On "cent" both boxes slide side by side with a tick, tag "agree within about 1%".

### 9. rings, and a family surprise
> That same year, George Thomson fired faster electrons through very thin metal foil, and they made rings. Here's the surprise. His father, J J Thomson, had shown the electron was a particle. A school electron diffraction tube does the same thing. Electrons pass through a thin layer of graphite and make bright **rings** on a glowing screen. It runs at thousands of volts, so it's a teacher demonstration. Turn up the voltage, and the rings get smaller. Faster electrons have more momentum, so a shorter wavelength, and they diffract less, just as h over m v **predicts**.

Visual: board change. On "George Thomson" name tag in words only "G. P. Thomson, 1927: thin foil"; a small coded foil with a navy beam passing through and a ring pattern behind it. On "His father, J J Thomson" a second tag "J. J. Thomson, 1897: electron = particle" with a two-headed arrow between the tags, label "father: particle; son: wave". On "A school electron diffraction tube" the new plate `y12p-electron-diffraction-tube-v1.png` with the reused supply `phys-y11-eht-supply-v1.png` (coded leads). On "rings" two coded teal rings appear on the tube's screen (anchored to the screen centre). On "teacher demonstration" a safety chip "thousands of volts, evacuated glass: teacher demonstration". On "Turn up the voltage" a coded voltage readout climbs "3 kV → 5 kV" and the rings shrink smoothly. On "predicts" a chip "V ↑ → v ↑ → p ↑ → λ ↓ → smaller rings".

### 10. why this counts as evidence
> Why is this convincing? Peaks and rings come from waves overlapping, adding in some directions and cancelling in others. Particles on separate paths can't cancel each other out. And the wavelength measured from the pattern matches h over m v. The pattern and the number together make strong **evidence**. But the electrons are still particles too. Each one lands as a single spot, and the rings build up from many **spots**.

Visual: board change to the evidence panel from scene 1, now filling. On "adding in some directions" two navy waves overlap crest to crest (bright, teal), then crest to trough (dark, flat), tag "interference: only waves do this". On "can't cancel each other out" two navy dots on crossing paths, tag "particles: no cancelling". On "matches h over m v" the two boxed values from scene 8 return small with the tick. On "evidence" the panel's checklist ticks: "pattern needs waves ✓", "λ = h/mv ✓". On "still particles too" the ring screen returns, empty. On "spots" single navy dots appear one at a time, at random places, slowly at first, then quickly, until the two rings are visible as dense bands of dots; tag "each electron: one spot".

### 11. back to the atom
> Now back to the atom. An electron in hydrogen's lowest orbit moves at about two point two times ten to the six metres per second. We just found its wavelength, three point three one times ten to the minus ten metres. The orbit's circumference, two pi r, is three point three two times ten to the minus ten metres. One wavelength fits **exactly**.

Visual: board change: the dashed orbit from scene 1 with a small red nucleus, labelled "n = 1, r₁ = 5.29 × 10⁻¹¹ m (Bohr)". On "two point two times ten to the six" a teal velocity arrow on the orbit, tag "v = 2.2 × 10⁶ m s⁻¹". On "three point three one" the kept line "λ = 3.31 × 10⁻¹⁰ m" from scene 5 slides in. On "two pi r" "2πr₁ = 2π × 5.29 × 10⁻¹¹ = 3.32 × 10⁻¹⁰ m". On "exactly" a navy standing wave of exactly one wavelength wraps the orbit and joins smoothly, tag "λ = 2πr₁: one wavelength fits" (rounding note in author note f).

### 12. Bohr's rule, explained
> So the rule is that a whole number of wavelengths fits round the orbit. Two pi r equals n lambda, and lambda is h over m v. Rearrange, and m v r equals n h over two **pi**. That's Bohr's rule, the one he had to assume. An orbit that doesn't fit makes the wave cancel itself on every lap, so it can't **last**.

Visual: the orbit shrinks to the left with three small orbits beside it (n = 1, 2, 3 with one, two and three wavelengths, as site Figure 1). On "Two pi r equals n lambda" `AlignedAlgebra` "2πr = nλ"; on "lambda is h over m v" "2πr = nh/mv"; on "pi" "mvr = nh/2π" (boxed). On "the one he had to assume" v10's grey "why?" chip next to the box turns into a tick, tag "assumed (Bohr 1913) → explained (de Broglie 1924)". On "doesn't fit" a fourth orbit with 2.5 wavelengths: the wave fails to join and fades out over three laps, crossed tag "doesn't fit: cancels itself". On "last" the three allowed orbits glow.

### 13. attempt 1 (countdown, 10 seconds)
> Your turn. An electron is accelerated from rest through a potential difference of one hundred volts. Calculate its de Broglie wavelength. Then decide whether a crystal with atoms two times ten to the minus ten metres apart could diffract it. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "An electron is accelerated from rest through a potential difference of 100 V. (a) Calculate the de Broglie wavelength of the electron. (b) A crystal has atoms spaced 2.0 × 10⁻¹⁰ m apart. Explain whether this crystal could produce a diffraction pattern with these electrons. (3 marks)" Data-sheet chips "m_e = 9.109 × 10⁻³¹ kg", "e = 1.602 × 10⁻¹⁹ C", "h = 6.626 × 10⁻³⁴ J s". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 1 (brief)
> The kinetic energy is one hundred electron volts, one point six zero times ten to the minus seventeen joules. So the speed is five point nine three times ten to the six metres per second, and lambda is h over m v, one point two three times ten to the minus ten **metres**. That's close to the atom spacing, so yes, it can diffract. The slip is using one hundred as joules, which gives a speed faster than **light**.

Visual: card shrinks to the top; "from rest", "100 V" and "2.0 × 10⁻¹⁰ m" underline. On "metres" "(a) E_k = qV = 1.602 × 10⁻¹⁹ × 100 = 1.60 × 10⁻¹⁷ J; v = √(2E_k/m) = 5.93 × 10⁶ m s⁻¹; λ = h/mv = 1.23 × 10⁻¹⁰ m". On "it can diffract" "(b) λ ≈ spacing (same order, 10⁻¹⁰ m): strong diffraction expected". On "light" a chip "E_k = 100 J → v = 1.48 × 10¹⁶ m s⁻¹ > c" fades in and is crossed. Hold about 1 second.

### 15. attempt 2 (countdown, 10 seconds)
> Last one. Explain how electron diffraction supports de Broglie's hypothesis. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Explain how the diffraction of electrons by crystals provides evidence for de Broglie's hypothesis. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 16. feedback 2 (brief)
> De Broglie proposed that particles have a wavelength, h over m v. Electrons fired at a crystal give peaks at set angles, an interference pattern that only waves can make. And the wavelength found from the pattern matches h over m v, so the hypothesis is **confirmed**. The slip is saying electrons are waves and not particles. Each electron still arrives as a single **spot**.

Visual: card shrinks to the top; "diffraction", "evidence" and "de Broglie's hypothesis" underline. Lines write in turn: "hypothesis: λ = h/mv"; "pattern of peaks or rings = interference → wave behaviour"; on "confirmed" "λ from pattern (d sin θ) = h/mv (Davisson and Germer: 1.65 vs 1.67 × 10⁻¹⁰ m)". On "spot" a chip "electrons are waves, not particles" fades in and is crossed (caption "both: lands as a particle, spreads as a wave"). Hold about 1 second.

### 17. handoff
> So electrons diffract, with exactly de Broglie's wavelength, and his idea explains Bohr's rule. But look again at the screen. Each electron lands as one tiny spot, and we can't say where the next one will land, only where it's likely to. If an electron spreads like a wave but arrives like a particle, what does its orbit really look like? Why do orbital probabilities replace literal electron **paths**?

Visual: board clears (camera change). On "electrons diffract" the ring screen returns, full. On "explains Bohr's rule" the boxed "mvr = nh/2π" with its tick, small at the upper left. On "one tiny spot" the dots fade and new ones start arriving one at a time. On "only where it's likely to" a faint teal shading shows the ring bands as "likely" regions; a dashed navy marker "next?" hovers, flicking between possible places. On "what does its orbit really look like" at the right the dashed n = 1 orbit from scene 11 appears, its navy standing wave fading and a soft grey haze spreading around the nucleus, tag "a path?". On "paths" the chip "Next: why do orbital probabilities replace literal electron paths?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 18. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. de Broglie (1924): any particle with momentum p has a wavelength λ = h/p. For v well below c (under about 0.1c), p = mv, so λ = h/mv (formula sheet).
2. Everyday objects: λ is far too small to diffract (50 g ball at 2.0 m s⁻¹: 6.6 × 10⁻³³ m). Electrons: λ ≈ 10⁻¹⁰ m, about atomic spacing, so crystals act as gratings.
3. Davisson and Germer (1927): 54 V electrons on nickel, peak at 50°. Predicted λ = h/mv = 1.67 × 10⁻¹⁰ m; measured d sin θ = 1.65 × 10⁻¹⁰ m. G. P. Thomson (1927): rings through thin foil.
4. Evidence = an interference pattern (needs waves) + a wavelength that matches h/mv. Faster electrons → shorter λ → smaller rings. Each electron still lands as one spot.
5. Standing waves: 2πr = nλ and λ = h/mv give mvr = nh/2π (Bohr's rule explained).

## Teaching checks

- **Does it explain causes?** Why a particle might have a wavelength (light's momentum turned around) (2); why we never see it for everyday objects (4); why crystals suit electrons (5); why a peak at one angle means waves (6, 10); why faster electrons give smaller rings (9); why only some orbits last (12).
- **Misconceptions addressed:** "electrons are waves, not particles" (10, 16 crossed); "wave behaviour should show for everything" (4); "a diffraction pattern alone proves the formula" (10: the number matters too); treating eV as J (14 crossed); "p = mv always" (3).
- **One idea at a time:** the formula (2, 3), sizes (4, 5), the experiment (6), speed (7), wavelength against measurement (8), rings and the tube (9), the argument (10), the orbit (11, 12).
- **Video makes it easier:** a wave squeezing as momentum grows (3); a log scale ladder (4, 5); the detector arm sweeping to a lobe at 50° (6); rings shrinking as the voltage climbs (9); dots building rings (10); a wave that fails to close on itself (12).
- **Response opportunity:** two unseen HSC-style tasks with every condition visible, 10 s each; nothing answer-bearing. One crossed mistake each; feedback about 27 s and 24 s.
- **Avoided double teaching:** Bohr's rule (v10), de Broglie's suggestion (v11), diffraction and the grating rule (Module 7), photons and momentum (Module 7), qV (Module 6) recalled in a clause each.
- **Syllabus coverage:** `P8-IQ3-04`: de Broglie's matter waves (1 to 5, 11, 12) and the experimental evidence that developed λ = h/mv (6 to 10), with the school tube as the investigation (9; open decision 1).
- **Out of scope by design:** wavefunctions and probability (v13); the uncertainty principle and quantum numbers (site extension); relativistic momentum calculations (Module 7); ring-radius calculations.

## Practice questions and model answers

**Attempt 1 (scene 13; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "An electron is accelerated from rest through a potential difference of 100 V. (a) Calculate the de Broglie wavelength of the electron. (b) A crystal has atoms spaced 2.0 × 10⁻¹⁰ m apart. Explain whether this crystal could produce a diffraction pattern with these electrons."
Model answer: (a) E_k = qV = 1.602 × 10⁻¹⁹ × 100 = 1.602 × 10⁻¹⁷ J. v = √(2E_k/m) = √(2 × 1.602 × 10⁻¹⁷ / 9.109 × 10⁻³¹) = 5.93 × 10⁶ m s⁻¹ (2% of c, so p = mv applies). λ = h/mv = 6.626 × 10⁻³⁴ / (9.109 × 10⁻³¹ × 5.93 × 10⁶) = 1.23 × 10⁻¹⁰ m. (b) The wavelength is of the same order as the atomic spacing, so the crystal can act as a grating and produce strong diffraction. Classic mistake (crossed): using 100 J as the kinetic energy, giving v = 1.48 × 10¹⁶ m s⁻¹, faster than light.

**Attempt 2 (scene 15; original wording, HSC style, 3 marks).** "Explain how the diffraction of electrons by crystals provides evidence for de Broglie's hypothesis."
Model answer: de Broglie proposed that a particle of momentum p has a wavelength λ = h/p = h/mv. When a beam of electrons strikes a crystal, the scattered electrons form a pattern of strong peaks at particular angles (or rings), an interference pattern that particles on separate paths cannot produce, so electrons show wave behaviour. The wavelength calculated from the pattern (for example d sin θ = λ) agrees with h/mv for the electrons' speed (Davisson and Germer: 1.65 × 10⁻¹⁰ m against 1.67 × 10⁻¹⁰ m), confirming the hypothesis quantitatively. Classic mistake (crossed): "this shows electrons are waves, not particles" (each electron still arrives as a single spot).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Constants (HSC data sheet) | h = 6.626 × 10⁻³⁴ J s; m_e = 9.109 × 10⁻³¹ kg; e = 1.602 × 10⁻¹⁹ C; c = 3.00 × 10⁸ m s⁻¹ | 4 to 16 |
| Steel ball | m = 0.050 kg, v = 2.0 m s⁻¹: λ = 6.626 × 10⁻³³ m ≈ 6.6 × 10⁻³³ m | 4 |
| Electron at 2.2 × 10⁶ m s⁻¹ | λ = 3.306 × 10⁻¹⁰ m ≈ 3.31 × 10⁻¹⁰ m | 5, 11 |
| Ground-state orbit | r₁ = 5.29 × 10⁻¹¹ m; 2πr₁ = 3.324 × 10⁻¹⁰ m ≈ 3.32 × 10⁻¹⁰ m; ratio 1.005 | 11 |
| Davisson and Germer stage 1 | 54 V: E_k = 8.651 × 10⁻¹⁸ J ≈ 8.65 × 10⁻¹⁸ J; v = 4.358 × 10⁶ m s⁻¹ ≈ 4.36 × 10⁶ m s⁻¹ (1.45% of c) | 7 |
| Davisson and Germer stage 2 | λ = h/mv = 1.668 × 10⁻¹⁰ m (with v = 4.36 × 10⁶) ≈ 1.67 × 10⁻¹⁰ m; d sin θ = 2.15 × 10⁻¹⁰ × sin 50° = 1.647 × 10⁻¹⁰ m ≈ 1.65 × 10⁻¹⁰ m; difference 1.3% ("about one per cent") | 8, 16 |
| A1 | 100 V: E_k = 1.602 × 10⁻¹⁷ J; v = 5.931 × 10⁶ m s⁻¹ ≈ 5.93 × 10⁶; λ = 1.227 × 10⁻¹⁰ m ≈ 1.23 × 10⁻¹⁰ m; wrong: √(2 × 100 / 9.109 × 10⁻³¹) = 1.48 × 10¹⁶ m s⁻¹ | 13, 14 |
| School tube (author note) | 3 kV: λ = 2.24 × 10⁻¹¹ m; 4 kV: v = 3.75 × 10⁷ m s⁻¹ (12.5% c); 5 kV: λ = 1.73 × 10⁻¹¹ m | 9 |
| Relativistic check | γ at 0.1c = 1.005 (0.5%) | 3 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov, `numbers.py` in the session scratchpad folder `m8v12-17-designer`); Codex to re-check.

- 6.626e-34 / (0.050 × 2.0) = 6.626e-33 m.
- 6.626e-34 / (9.109e-31 × 2.2e6) = 3.306e-10 m; 2π × 5.29e-11 = 3.324e-10 m.
- 54 × 1.602e-19 = 8.651e-18 J; √(2 × 8.651e-18 / 9.109e-31) = 4.358e6 m s⁻¹; 6.626e-34 / (9.109e-31 × 4.36e6) = 1.668e-10 m (unrounded speed: 1.669e-10 m).
- 2.15e-10 × sin 50° = 1.647e-10 m; 1.668/1.647 = 1.013.
- 100 × 1.602e-19 = 1.602e-17 J; √(2 × 1.602e-17 / 9.109e-31) = 5.931e6 m s⁻¹; λ = 1.227e-10 m; √(200 / 9.109e-31) = 1.482e16 m s⁻¹.
- Site checks: 6.63e-34 / (9.11e-31 × 1.0e6) = 7.28e-10 m; 150 eV with 1.6e-19 J: v = 7.26e6 m s⁻¹, λ = 1.00e-10 m.

## Narration length estimate

Revision 1 count (6 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **6,273 characters**, 18 scenes. Characters per scene (1 to 18): 353, 432, 325, 368, 443, 374, 324, 404, 563, 416, 342, 301, 263, 407, 98, 368, 400, 75. At 13.3 characters per second the speech is about 472 s; add 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 55 s more of the quiet notes hold (about 79 s of holds and countdowns): **about 551 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 9's family surprise (keep the tags); scene 3's relativistic sentence (keep the chip); scene 10's "Particles on separate paths" sentence.

## Opening frame

v11's final frame (designed in this wave, `phys-y12-m8-v11.md`): paper background; heading "How do hydrogen energy gaps predict Balmer wavelengths?"; at the upper left the boxed rule "mvr = nh/2π" with a grey chip "why?"; at the centre a dashed circular orbit around a small red nucleus with a navy standing wave wrapped round it, exactly three wavelengths, tag "n = 3: three whole wavelengths fit"; beside it a smaller crossed orbit where the wave does not join up, tag "doesn't fit: not allowed"; name tag "de Broglie, 1924" and tag "electron = wave?"; at the right an empty panel headed "evidence?"; chip "Next: what evidence shows that particles have wave behaviour?". Scene 1 turns the chip into the heading.

## Final frame

The last explained frame (end of scene 17, before the key-notes board): paper background; heading "What evidence shows that particles have wave behaviour?"; at the upper left, small, the boxed rule "mvr = nh/2π" with a tick; at the left a coded circular glowing screen (from the electron diffraction tube) showing two teal ring bands built of many navy dots, with a few new single dots arriving and a dashed navy marker "next?" hovering; a faint teal shading over the ring bands tagged "likely"; at the right a small red nucleus with the dashed n = 1 orbit fading out, its navy standing wave almost gone, and a soft grey haze around the nucleus, tag "a path?"; chip "Next: why do orbital probabilities replace literal electron paths?". v13 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m8-v12` (route phys-y12-m8-v12). Suggested explainer folder `src/explainer/lessons/phys-y12-m8-v12` and build folder `docs/production/claude-pm/lessons/p-y12-m8-v12` (root to confirm).

In order (kebab-case; 18 scene headings, all `### N.`): hook, light-turned-around, particle-wavelength, steel-ball, electron-wavelength, davisson-germer, dg-speed, dg-wavelength, rings-and-tube, why-evidence, ground-orbit, bohr-rule-explained, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: momentum slider, scale ladder, crystal grating, polar detector plot, ring screen, standing-wave orbit, `AlignedAlgebra`, `NumberTicker`, `PenArrow`, `Countdown`, `CameraStage`. Transitions (`pickTransition`): 1 to 2 clear change; 2 to 3 camera continue; 3 to 4 clear change to the ball; 4 to 5 camera continue (kept line); 5 to 6 clear change to the schematic; 6 to 7 camera continue (schematic shrinks); 7 to 8 camera continue; 8 to 9 clear change; 9 to 10 clear change to the evidence panel; 10 to 11 clear change to the orbit; 11 to 12 camera continue; attempts and feedback card shrink to the top; 16 to 17 clear change; 17 to 18 fade to the notes board.

Holds: attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 60 s). Review evidence paths: `learning_review` = `checks/p-y12-m8-v12-learning-review.md`, `science_check` = `checks/p-y12-m8-v12-physics-check.md`.

## Assets

Have (scaled uniformly only, never stretched):
- `public/assets/physics/phys-y11-steel-ball-v1.png` (800 × 800, RGBA; inspected 6 Nov: a polished steel sphere): 4.
- `public/assets/physics/phys-y11-eht-supply-v1.png` (1536 × 1024, RGBA; inspected for m6-v01): 9.
- **Checked, not used:** `y12p-crt-tube-v1.png` (m6; a cathode ray tube without a target, a different apparatus); `y12p-discharge-tube-v1.png` (v11; gas discharge, not electron diffraction).

Need (new plate):
1. `y12p-electron-diffraction-tube-v1.png`: 9 (and the screen shape reused, coded, in 10 and 17).

Coded: the standing-wave orbits, photon and electron markers, momentum arrows, waves, the scale ladder, crystal rows, the Davisson and Germer schematic and polar plot, foil, rings and dots, the voltage readout, calculation strips, crossed chips, countdowns, key notes board.

Kit gaps (for the v12 build brief):
1. **Polar detector plot.** A detector arm sweeping an arc while a polar signal curve grows, with a set peak angle (50°) and a dashed comparison curve.
2. **Ring screen.** Concentric ring bands whose radii follow a set rule from a voltage readout, and a dot-accumulation mode (dots placed one at a time with probability following the ring bands, seeded and deterministic).
3. **Standing-wave orbit** (shared with v11's kit gap 2): whole and non-whole wavelength versions, the non-whole one fading over laps.

## Codex asset brief

New plate painted in the house style of the `phys-y11-` apparatus plates (soft painted realism, neutral lighting, clean edges, no text, no labels, no glow, no radiation symbols), transparent PNG with an alpha channel (never a white or tinted background), at least 2400 px on the long side, object centred with even margins, soft shadow inside the alpha only. No people, no hands, no faces.

1. **`y12p-electron-diffraction-tube-v1.png`** (new). A school electron diffraction tube on its stand, side view: a clear evacuated glass bulb (a long neck at the left containing the small electron gun with its pins, widening to a large round bulb at the right); a tiny graphite target on a fine mesh at the neck's mouth; the inside of the round end coated as a pale green fluorescent screen, painted plain and evenly lit with no rings (rings are coded on top); the tube held in a simple grey plastic stand with terminal posts at its base. Sidecar anchors: graphite target centre; screen centre and screen radius in pixels; terminal posts.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text and attempts against the "Numbers used" table.
2. Confirm the physics of every learner-visible claim: p = E/c and p = h/λ for photons; λ = h/p and λ = h/mv; "under a tenth of c" as a guide (author note b); the ball's and electron's wavelengths; strong diffraction when the gap is about the wavelength; the Davisson and Germer values and the surface-grating rule (author note c, site note 1); rings shrinking as voltage rises; interference as wave evidence; each electron landing as one spot; 2πr = nλ giving mvr = nh/2π.
3. Confirm λ = h/mv is displayed exactly as on the HSC formula sheet.
4. Confirm the history: de Broglie 1924; Davisson and Germer 1927 in New York; G. P. Thomson 1927 with thin foils, son of J. J. Thomson; Bohr 1913.
5. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
6. Confirm both attempt cards are original in wording, carry every condition and show nothing answer-bearing.
7. Confirm the syllabus quote matches the route JSON exactly and is labelled 2017.
8. Confirm no person, hand, face or body outline is drawn or requested; scientists are named in text only.
9. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
10. Confirm the narration character count and per-scene counts by script with the build parser rules.
11. Report site notes 1 to 4 under Decisions to root.

## YouTube metadata (draft)

Title: Matter Waves: How Electron Diffraction Proved de Broglie Right | HSC Physics Module 8

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module8/lesson13.sa.html

De Broglie suggested that every particle has a wavelength, λ = h/mv. See why a rolling ball never shows it, why an electron's wavelength is the size of an atom, and how Davisson and Germer's 50° peak and Thomson's rings confirmed the formula to about one per cent. Then use matter waves to explain Bohr's rule for allowed orbits. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 8: From the Universe to the Atom.
Syllabus content (NSW Physics Stage 6, 2017):
"investigate de Broglie’s matter waves, and the experimental evidence that developed the following formula:
- λ = h/mv (ACSPH140)"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: hydrogen energy levels and the Balmer series. Next: why orbital probabilities replace literal electron paths.

#HSCPhysics #Physics #MatterWaves #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v11 and Module 7; check that the photon-momentum step in scene 2 is followable at speed; that the two-stage check in scenes 7 and 8 keeps one stage visible; that "each electron lands as one spot" lands without undermining the wave evidence; that the attempt cards give nothing away), then the physics check and the Codex error check.
- The detector lobe, shrinking rings and dot build-up carry the explanation; judge them at playback speed in the voiced preview.
