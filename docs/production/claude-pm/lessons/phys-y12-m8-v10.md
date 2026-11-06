# Year 12 Physics M8 V10: Limits of the Rutherford and Bohr models. Why couldn't Rutherford's model explain stable atoms and line spectra? (design)

Status: Revision 2 (7 Nov 2026): brief 192 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 6,037 characters, 21 scenes, about 523 s, counted by script with the build parser rules (total = sum of scene strings; see "Narration length estimate"). Opens on v09's final frame.

Scope: tenth video of Year 12 Physics Module 8 (From the Universe to the Atom, Physics Stage 6, 2017 syllabus), inquiry question "How is it known that classical physics cannot explain the properties of the atom?". Templates as `phys-y12-m7-v10.md`. No pre-design pack exists; the pack work is done here (2017 wording from the ledger, site givens kept, every number recalculated in Python with HSC data-sheet constants, original attempts, asset reuse). Site lessons read in full (6 Nov, read-only, through the brief 168 text extracts): lesson 12, orient and predict (four hydrogen lines, warm-up on Rutherford's failure, intentions, vocabulary: ground state, excited state, quantisation, Rydberg constant, ionisation energy), "state-bohrs-postulates" (the four lines, three postulates, E_n = −13.6/n² eV, r_n = n²a₀, Figure 1, Stop and check, MC), "predict-wavelengths-with-rydberg" (series, the four limitations), "avoid-the-standard-bohr-traps", "calculate-spectral-lines", "evaluate-bohrs-model" (Activity 2, "Assess 7 marks" on Bohr's limitations, "Analyse 6 marks"), independent practice (Q2(b) the ~10⁻¹⁰ s collapse), reflect: `C:/Users/kygs/hscscience/subjects/physics/year12/module8/lesson12.sa.html`, SHA256 `d94a625920457295b9d4e2cf96410ffb63f6d47d3c16247570df4b189fc82f0e`; lesson 11 (read in full for v07 to v09; "compare-thomson-and-rutherford" used here for the radiation problem and its ~10⁻¹¹ s collapse): SHA256 `6591d8a12ec01faee9ff2fb923daa8b2f23cd6652916e85be5bdc8b5c0858641` (both recomputed 6 Nov; match the route). Route entry: `phys-y12-m8-v10`, sections `state-bohrs-postulates`, `evaluate-bohrs-model` (lesson 12). Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Identify classical stability/spectral failures, introduce Bohr stationary levels and transition photons with explicit limits. Stop before quantitative Rydberg calculations." Next: "phys-y12-m8-v11: How do hydrogen energy gaps predict Balmer wavelengths?"

Owner rules applied: 2017 syllabus quoted exactly; no people, hands, faces or body outlines (scientists named in words only); the discharge tube, spectroscope and supply are reused painted plates (inspected 7 Nov), scaled uniformly, never stretched; atoms, orbits, energy ladders, photons and spectrum strips are coded, HSC style (atoms not to scale); every number recalculated in Python with h = 6.626 × 10⁻³⁴ J s, c = 3.00 × 10⁸ m s⁻¹ and e = 1.602 × 10⁻¹⁹ C; data-sheet symbols E = hf; a 3 s prediction; "Pause here to answer." with a 10 s countdown; brief feedback with one crossed-out mistake; original attempts; Australian spelling; no em dashes. Recalled, not re-taught: v09 (the completed nuclear atom, the orbiting electron as accelerating), Module 7 v01 (accelerating charges radiate electromagnetic waves), Module 7 v03 (hydrogen's four visible lines and the plain-language energy-level idea), Module 7 v09 and v10 (photons, E = hf, the electron volt), Module 5 (circular motion means a centripetal acceleration).

Syllabus content (Physics Stage 6 (2017), Module 8; ledger id `P8-IQ3-01`), quoted from the route JSON `syllabusActions`:

- `P8-IQ3-01`: "assess the limitations of the Rutherford and Bohr atomic models"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 63)

**Boundary:** starts on v09's final frame (nucleus with an orbiting electron, "accelerating", Module 7 radiation chip, "?"). Teaches: the classical prediction (an orbiting electron radiates at its orbit frequency, loses energy, sinks and speeds up, and spirals in within about 10⁻¹¹ s); failure 1, stability; failure 2, line spectra (a spiralling electron would give a continuous smear; hydrogen gives sharp lines, with four bright, prominent visible ones, identical for every atom); Bohr's postulates (stationary states with fixed energies and no radiation; transitions emit or absorb one photon whose energy equals the gap (emission hf = E_i − E_f; absorption hf = E_f − E_i) by conservation of energy; quantised angular momentum mvr = nh/2π as the selecting rule); energy levels as negative bound energies, ground state −13.6 eV, ionisation energy 13.6 eV; how the postulates fix stability and lines (bigger drop, higher f, shorter λ); Bohr's success and three limitations (one-electron atoms only; line brightness and splitting; an unexplained hybrid of classical and quantum rules); the verdict (levels survive, orbits do not). Stops before Rydberg calculations, level values beyond n = 1, and series (v11), and before matter waves (v12).

## Decisions

- **Learner question (route wording repaired).** Route: "Why could Rutherford model not explain stable atoms and line spectra?" Changed to "Why couldn't Rutherford's model explain stable atoms and line spectra?" (grammar only; same causal question). The video also assesses Bohr's model, because the syllabus action names both and the route places Bohr's postulates and limits here; the learner question stays on Rutherford because Bohr's model is introduced as the answer to it.
- **Hook (site lesson 12 warm-up, re-staged from v09's final frame; Revision 2).** 3 s prediction with chips "stays as it is", "drifts away", "spirals into the nucleus". Classical physics says the third; the observation is that atoms are stable (tag "observed: atoms are stable"), not that an electron is seen orbiting forever. The contradiction is the video's engine.
- **Classical collapse (site lesson 11 "compare-thomson-and-rutherford" and lesson 12 Q2(b)).** Cause chain shown, not asserted: orbit means acceleration (Module 5, recalled), accelerating charge radiates (Module 7 v01, recalled), radiation carries energy away, the electron sinks to a smaller orbit, where it moves faster and radiates more strongly. Time: classical estimate for hydrogen t = a₀³/(4r_e²c) = 1.55 × 10⁻¹¹ s, said "about ten to the minus eleven seconds, less than a ten-billionth of a second" (site note 1 on the site's two different values).
- **Spectral failure (site lesson 12 "Before you read" and Bohr postulates card; Module 7 v03; Revision 2).** The spiralling electron's orbit frequency rises smoothly, so it would emit a continuous range; hydrogen shows sharp lines, with four bright, prominent visible lines (656, 486, 434, 410 nm, as in m7-v03) identical in every sample. Fainter Balmer lines at 397, 389 and 384 nm also lie inside 380 to 750 nm, so learner copy says "four bright" or "four prominent", never "only four"; v11 uses the same wording and boundary. The reused discharge tube and spectroscope plates restage m7-v03's observation; no new teaching of spectroscopes.
- **Bohr's postulates (site "state-bohrs-postulates").** The site's three postulates are kept in the site's order of importance for this question, with "postulate" defined ("a starting assumption, not derived"). Postulate 1 (allowed orbits, fixed energies, no radiation in them) and the energy-level picture; postulate 3 on the site (photon on transition, |E_i − E_f| = hf) taught second because it carries the spectrum explanation; postulate 2 on the site (L = mvr = nh/2π) taught third as the selecting rule. The order change is recorded here; the key notes number them as the site does (author note b).
- **Energy levels (site Figure 1 and vocabulary).** Ground state, excited state, negative energies meaning bound, zero meaning just free, E₁ = −13.6 eV and ionisation energy 13.6 eV. The other level values and E_n = −13.6/n² are left to v11 (route: stop before quantitative calculations); the ladder is drawn with the right shape (levels crowding towards zero) but labelled with n only, except E₁ and E_∞ = 0.
- **Bohr's limitations (site "predict-wavelengths-with-rydberg" list and "Assess 7 marks").** Three, in the site's increasing depth: (1) only hydrogen and one-electron ions, because electron-electron repulsion is ignored; (2) cannot explain relative line brightness or fine splitting, including splitting in a magnetic field; (3) an ad hoc hybrid (classical orbits and Coulomb force, but classical radiation switched off and angular momentum quantised by assumption). Verdict as the site's: a transitional model; levels survive, orbits do not (site "Assess 7 marks" step 5).
- **Handoff to v11 and v12.** "Why these rules?" is left open for v12 (de Broglie explains the angular momentum rule); v11 calculates wavelengths. Scene 20 sets up v11 only.
- **Memory aid (scene 15): "Rutherford: right nucleus, collapsing electrons. Bohr: stable electrons, unexplained rules."** See "Memory aid check".
- **Attempts (original, HSC style).** A1 (3 marks, explain): why classical physics makes Rutherford's atom unstable. Crossed: "its speed is constant, so it isn't accelerating". A2 (2 marks, outline): two limitations of Bohr's model. Crossed: a vague "it's wrong because electrons don't orbit" without a specific failure.
- **Colour key (Module 7 and 8 keys):** electrons navy; nucleus red; accelerating charges rose (arrows and wavelets); photons amber packets labelled with their colour; energy levels navy lines; continuous spectrum a rainbow strip; line spectrum black strip with coloured lines (as m7-v03).
- **Colour key (Revision 2, fixed for every scene).** As above. Spectrum lines and photons in true colours: 656 nm red, 486 nm cyan (blue-green), 434 nm blue-violet, 410 nm violet, the faint 397 nm line deep violet; infrared and ultraviolet drawn as grey bands with "IR" and "UV" tags, never coloured. Time and the collapse clock grey; radius r and orbit frequency readouts rose; energy E navy; framed answers in a dark-ink box; crossed chips and their hand tags red; the classical side of scene 14's seam navy, the quantum side amber. Hand-font tags take the colour of the quantity they mark.
- **Type sizes (Revision 2, 1080p).** Current working line at least 44 px (scene 8 and 10 equations and feedback rows 52 px; framed lines 56 px); live readouts (the sweep's r, orbit frequency and wavelength; the collapse clock) about 52 px; ladder labels, strip labels, cards and chips 30 to 36 px; hand-font tags at least 30 px; question text 36 px; key notes 34 px; nothing a student must read below 26 px. All text above the bottom 12% of the frame.
- **Anchor (Revision 2).** v09's final frame (the radiating orbiting electron) is the anchor, with the painted discharge tube `y12p-discharge-tube-v1.png` (1003 × 1568, RGBA, inspected 7 Nov: a capillary tube with electrodes in a grey stand) glowing in scene 1 as the observation the model must explain; the tube, the painted pocket spectroscope `y12p-pocket-spectroscope-v1.png` (1896 × 830, RGBA, inspected: a slit at the left, a tube on a stand, an eyepiece at the right) and the EHT supply carry 4 and return on the A2 card.
- **Simulation (Revision 2).** The core live control is the classical spiral sweep in scene 4: as the electron spirals in, live readouts show its orbit radius, orbit frequency and emitted wavelength, with a swatch that takes the true colour only inside 380 to 750 nm (Python, classical circular orbit about a proton: r = 8a₀ → 2.9 × 10¹⁴ Hz, 1030 nm, IR; 6a₀ → 4.5 × 10¹⁴ Hz, 670 nm, red; 5a₀ → 5.9 × 10¹⁴ Hz, 509 nm, green; 4a₀ → 8.2 × 10¹⁴ Hz, 365 nm, UV; a₀ → 6.6 × 10¹⁵ Hz, 46 nm, UV), sweeping a continuous smear across the strip against the four fixed lines. Scene 3's collapse clock and scene 10's orbit picker are the other live elements.
- **Board stages (Revision 2).** Every scene or pair has its own stage: the atom with the glowing tube (1), the spiral (2, 3, about 51 s), the live spectrum sweep with the tube and spectroscope (4, 5, about 42 s), the allowed orbits (6), the ladder (7 to 9, about 83 s), the orbit picker (10), the assessment board (11, 12, about 27 s), the line-detail zoom and the hybrid card (13 to 15, about 59 s). No set-up runs past about 85 s.
- **Question cards (Revision 2).** Each card arrives with its full text and a picture in one move (A1: a coded atom, a nucleus with one electron on a circular orbit, no arrows or wavelets; A2: the painted discharge tube with a four-line strip beside a small Bohr ladder). On the answer side the card shrinks to the top, a givens strip lists what the question gives (A1: "Rutherford: electrons orbit a nucleus; classical physics"; A2: "Bohr's model: hydrogen lines explained; two limitations"), the answer lines are framed and one classic slip is crossed.
- **Site sources used:** lesson 12: warm-up (Rutherford's failure) (1); "Before you read" and postulates card (four lines, 1913, three postulates, E₁ = −13.6 eV, ionisation, ground and excited states) (4, 6 to 10); limitations list (12 to 14); "Assess 7 marks" (success first, three limitations, what survived, verdict) (11 to 15, A2); misconception "works for all atoms" (12); Q2(b) (1 to 3, A1). Lesson 11: "compare-thomson-and-rutherford" radiation problem and misconception "Rutherford's model is complete" (2 to 5). Not used: r_n = n²a₀ and the Bohr radius (not needed for the question); the Rydberg formula, series and calculations (v11); the He⁺ extension.
- **Site notes (quoted from site lessons 11 and 12, read 6 Nov; for root to log in `../site-corrections-phys-y12.md` if accepted):**
  1. Inconsistency (lesson 11 against lesson 12): lesson 11 says the electron "should spiral into the nucleus in ~10⁻¹¹ s" (and elsewhere "in a fraction of a second"); lesson 12 Q2(b) says "spiral into the nucleus in ~10⁻¹⁰ s". The classical estimate for hydrogen is about 1.6 × 10⁻¹¹ s. Suggest "about 10⁻¹¹ s" in both.
  2. Overstatement (lesson 12 reflect section): "which Bohr's formula Eₙ = −13.6/n² eV predicted to within 0.02%". Bohr's 1913 calculation of the Rydberg constant from e, m and h agreed with experiment only to within the few-per-cent uncertainty of those constants at the time; the line pattern (the Balmer formula) is reproduced exactly by construction. Suggest "which Bohr's model reproduced, and whose constant it calculated from e, m and h in good agreement with experiment". (Science check to confirm.)
  3. Precision (lesson 12 Figure 2): "Brackett and beyond, n_f ≥ 4: far infrared". Brackett lines lie between about 1.46 and 4.05 μm (near to mid infrared). Suggest "infrared". (Also noted for v11.)
  4. Checked and correct: the three postulates; E₁ = −13.6 eV; ionisation energy 13.6 eV = 2.18 × 10⁻¹⁸ J; the four limitations; "Assess 7 marks" reasoning; the misconception about multi-electron atoms.
- **Cause chain taught, in order:** (1) an orbiting electron changes direction, so it accelerates (2); (2) an accelerating charge radiates electromagnetic waves, carrying energy away (2); (3) losing energy, it sinks to a smaller, faster orbit, radiates more strongly, and spirals in within about 10⁻¹¹ s (3); (4) its rising orbit frequency would give a continuous spectrum, not lines (4); (5) Bohr assumes stationary states that do not radiate, so the lowest one cannot collapse (6, 9); (6) a drop between levels emits one photon carrying the energy difference (a jump up absorbs one), so only certain photon energies, frequencies and wavelengths exist (8, 9); (7) the rules work for hydrogen but are assumed, not explained, and fail for more electrons and for finer detail (11 to 14).
- **Entry knowledge (route `entryKnowledge`):** v09 (the nuclear atom; the accelerating orbiting electron); Module 7 (accelerating charges radiate; four hydrogen lines; E = hf; eV); Module 5 (centripetal acceleration).
- **Learner-visible vocabulary (plain meaning at first use):** classical physics (the physics of Newton and Maxwell, before quantum ideas, 2); postulate (a starting assumption, 6); stationary state (an allowed orbit where the electron does not radiate, 6); energy level (7); ground state (the lowest level, 7); excited state (any higher level, 7); bound, ionisation energy (energy to free the electron completely, 7); transition (8); angular momentum (said as "its mass times speed times orbit radius", 10); fine structure (said as "lines that are really two or more close lines", 13).
- **Legacy logic ported:** none. Coded family `m8-quantum-atom` (hydrogen levels and a downward photon) reused within its stated limits ("rounded nonrelativistic hydrogen energies"; no Bohr orbital dynamics, so the spiral is a new motion).
- **New explainer motion:** **spiral collapse** (an electron on a shrinking orbit, speed and wavelet frequency rising, a clock reading to 1.6 × 10⁻¹¹ s); **predicted versus observed spectrum** (a smear sweeping across a strip against four fixed lines); **energy ladder** (from `m8-quantum-atom`: levels, drop arrows, photons leaving with colour by energy); **orbit picker** (allowed circles light, others grey); **limitation cards** (three, each with a small diagram); `Countdown` (3 s in scene 1; 10 s in scenes 16 and 18); `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the atom or the ladder at centre left; spectra strips and chips on the right; everything above the bottom 12% of the frame.
- **Author notes (not learner copy):**
  (a) Classical collapse time for hydrogen from the Larmor formula, starting at the Bohr radius: t = a₀³/(4 r_e² c) with a₀ = 5.29 × 10⁻¹¹ m and classical electron radius r_e = 2.818 × 10⁻¹⁵ m: 1.55 × 10⁻¹¹ s. The orbital speed rises as r falls (v ∝ r^(−1/2)) and so does the radiated power, so the spiral accelerates.
  (b) Site postulate numbering: (1) allowed orbits without radiation, (2) L = mvr = nh/2π, (3) photon on transition. The video teaches (1), (3), (2) and the key notes keep the site's numbers so students' book notes match the site.
  (c) A stationary state is also where the electron's angular momentum is a whole multiple of h/2π; de Broglie's standing-wave picture (v12) gives the reason. Not said here.
  (d) "Lines split in a magnetic field" is the Zeeman effect; "fine structure" includes relativistic and spin effects; neither name is learner copy beyond "fine structure" as the site uses it.
  (e) Pronunciations: "Niels Bohr" (neels bore); "postulate" (POS-chuh-lut); "h over two pi".
  (f) Revision 2 (brief 192 findings). Hook: the observation is stability, not a seen perpetual orbit; the chip reads "stays as it is" and the tag "observed: atoms are stable". Lines: NIST lists Balmer lines at 397.0, 388.9 and 383.5 nm inside 380 to 750 nm, so learner copy says "four bright" or "four prominent" lines. Signs: the photon energy is the size of the gap; emission hf = E_i − E_f, absorption hf = E_f − E_i. Handoff: "closely" replaces "exactly" (agreement within rounding and the model's limits; fine structure is limit 2). Bohr 1913 (part II) compared his calculated 3.1 × 10¹⁵ with the measured 3.290 × 10¹⁵ s⁻¹, a 5.8% difference (brief 192), which confirms site note 2.
  (g) Classical sweep (Revision 2). For a circular orbit about a proton, v = √(ke²/(m r)) and f = v/(2πr), so f ∝ r^(−3/2): 8a₀ gives 1030 nm, 6a₀ 670 nm, 5a₀ 509 nm, 4a₀ 365 nm and a₀ 46 nm. An electron spiralling in from a few a₀ would sweep from infrared through the visible into the ultraviolet; the scene shows that continuous sweep, not a claim that a ground-state atom emits visible light classically.
- **Open decisions for root:**
  - **1. Postulate order (learning review).** The video teaches the photon postulate before the angular momentum rule; the key notes use the site's numbering. Keep, or teach in site order.
  - **2. Scene 13's two details (learning review).** Line brightness and splitting may be cut to one if the voiced take runs long; the "Assess" answer needs only one of them.
  - **3. Site note 2.** Confirmed by brief 192 (Bohr 1913 part II: 3.1 × 10¹⁵ against 3.290 × 10¹⁵, about 6% apart; author note f).

Main question: *If an orbiting electron should spiral into the nucleus in about 10⁻¹¹ s, why are atoms stable, and why do they give sharp lines?*
Entry knowledge: the nuclear atom (v09); accelerating charges radiate, hydrogen's lines, E = hf, eV (Module 7); circular motion (Module 5).
Stops after: Rutherford's two failures, Bohr's postulates and levels, how they fix both, Bohr's three limitations and the verdict. No Rydberg calculations, no series, no matter waves.
Handoff: v11, how hydrogen energy gaps predict Balmer wavelengths.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *n*, *E*, *h*, *f*, *λ*, *E_i*, *E_f*.

### 1. hook (what should the electron do?)
> Here's Rutherford's atom, with an electron orbiting the nucleus. Its direction keeps changing, so it's always accelerating, and in Module 7 we saw that accelerating charges give out electromagnetic waves. So what should happen to this electron? Make your **prediction**. Classical physics says it spirals into the nucleus. But atoms don't collapse, and they give out sharp lines of light. So why couldn't Rutherford's model explain stable atoms and line **spectra**?

Visual: opens on v09's final frame (see "Opening frame"); first beat: v09's rose hand tag "radiates?" fades; the chip becomes the heading: "Why couldn't Rutherford's model explain stable atoms and line spectra?". On "always accelerating" the rose "a" arrow pulses, rose pen ring round it. On "accelerating charges give out electromagnetic waves" the Module 7 chip pulses and the rose wavelet spreads. On "prediction" a 3 s `Countdown` beside chips "stays as it is", "drifts away", "spirals into the nucleus". On "spirals into the nucleus" the third chip highlights with a grey tag "classical physics". On "atoms don't collapse" the first chip highlights with a navy hand tag "observed: atoms are stable". On "sharp lines of light" the painted discharge tube `y12p-discharge-tube-v1.png` (about 420 px tall) appears at the right with a coded pink glow and a small black strip of bright lines beside it, red pen ring round the red line. On "spectra" the heading underlines "stable atoms" and "line spectra".

### 2. radiating costs energy
> Let's follow the classical argument. As the electron circles, it shakes its electric field round and round, so it sends out electromagnetic waves at the frequency of its orbit. Those waves carry energy away. That energy comes from the electron, so it sinks into a smaller orbit, closer to the **nucleus**.

Visual: board change to the spiral stage: nucleus (red, "not to scale"), electron on a circle. On "classical argument" tag "classical physics: Newton and Maxwell". On "sends out electromagnetic waves" rose wavelets leave the electron once per orbit, tag "f (wave) = f (orbit)". On "carry energy away" an orange energy bar beside the atom starts to shrink. On "nucleus" the circle tightens to a smaller radius. Marks (Revision 2): rose hand tag "shaking charge → waves"; orange hand tag "energy leaks away" with an orange pen bracket on the shrinking bar.

### 3. the spiral, and failure 1
> In a smaller orbit, it moves faster and radiates more strongly, so it sinks faster still. For hydrogen, the calculation gives about ten to the minus eleven seconds before the electron hits the nucleus, less than a ten-billionth of a second. Yet a jar of hydrogen gas stays hydrogen for as long as you like. That's the first failure. Rutherford's model says atoms can't be **stable**.

Visual: on "moves faster and radiates more strongly" the electron's speed arrow lengthens and the wavelets come thicker and faster. On "sinks faster still" the path becomes an inward spiral that tightens. On "about ten to the minus eleven seconds" a clock readout ticks "t ≈ 1.6 × 10⁻¹¹ s" as the electron reaches the nucleus. On "a jar of hydrogen gas" a coded glass jar labelled "H₂ gas" sits unchanged, tag "stable for years". On "stable" a chip "failure 1: stability" (framed) and a crossed chip "Rutherford's atom lasts 10⁻¹¹ s". Marks (Revision 2): grey hand tag "faster and faster" on the spiral; grey pen ring round the clock (52 px readout).

### 4. failure 2: the light
> The second failure is the light. As the electron spirals in, its orbit frequency rises smoothly, so its waves should slide through every frequency, giving a continuous smear of colour. But glowing hydrogen gives sharp lines, with four bright visible ones, at six five six, four eight six, four three four and four one zero nanometres. Every hydrogen atom, anywhere, gives the same **lines**. Rutherford's model can't produce a line spectrum at **all**.

Visual: camera change (Revision 2: a new stage, the live spectrum sweep), solid from the first frame: a spectrum strip "380 to 750 nm" at the right with grey "IR" and "UV" bands beyond its ends; at the left the spiral small with three live readouts (52 px) "r", "orbit frequency" and "λ emitted", and a swatch. On "its orbit frequency rises smoothly" the electron spirals in from 8a₀: readouts step "1030 nm (IR)", "670 nm", "509 nm", "365 nm (UV)", "46 nm (UV)" (author note g), the swatch grey, then red, green, grey. On "a continuous smear of colour" the strip fills with a sweeping rainbow that runs on into the UV band, rose hand tag "predicted: every colour, smoothly". On "glowing hydrogen" the reused discharge tube `y12p-discharge-tube-v1.png` (about 380 px tall, coded pink glow) in its holder with the reused supply `phys-y11-eht-supply-v1.png` (about 300 px) and the reused pocket spectroscope `y12p-pocket-spectroscope-v1.png` (about 420 px wide) pointing at it. On "four bright visible ones" a second strip, black with four bright lines at 410, 434, 486, 656 nm in true colours, labels written under them, and a fainter deep-violet line near 397 nm, tag "observed: sharp lines (four bright; Module 7)". On "lines" small duplicate strips stack ("lab", "star", "another lab"), identical, ink pen bracket across them. On "all" the rainbow strip is crossed; chip "failure 2: line spectra" (framed).

### 5. what Rutherford got right
> So Rutherford got the nucleus right, but classical physics couldn't explain the electrons. The rules for electrons had to **change**.

Visual: camera continue (4 and 5 about 42 s): the two failure chips side by side beside a small Rutherford atom (about 300 px) and the glowing tube; on "got the nucleus right" the nucleus gets a tick; on "couldn't explain the electrons" the electron's orbit gets a cross. On "change" chip "new rules needed for electrons", red hand tag "new rules".

### 6. Bohr's first postulate: stationary states
> In nineteen thirteen, Niels Bohr changed the rules. A postulate is a starting assumption, and his first was bold. An electron can only be in certain allowed orbits, each with a fixed energy. While it stays in one of these stationary states, it doesn't radiate at all. Bohr didn't explain why. He simply said classical radiation doesn't happen **there**.

Visual: board change: the atom with several concentric circles. Name tag in words only "Bohr, 1913". On "A postulate is a starting assumption" chip "postulate: a starting assumption, not derived". On "certain allowed orbits" a few circles stay navy (n = 1, 2, 3, 4), the spaces between them grey and hatched, tag "only these orbits allowed". On "fixed energy" each allowed circle gets a small energy tag "E₁", "E₂", "E₃", "E₄". On "it doesn't radiate at all" the electron circles n = 1 with no wavelets, tag "stationary state: no radiation". On "there" a crossed rose wavelet chip "classical radiation: switched off (assumed)". Marks (Revision 2): navy hand tag "only these" on the allowed circles with a navy pen ring round n = 1; grey hand tag "no reason given".

### 7. energy levels
> Each allowed orbit is an energy level, numbered n equals one, two, three, and so on. The lowest, n equals one, is the ground state, and the higher ones are excited states. The energies are negative, because the electron is bound. A just-free electron has zero energy, so freeing it means adding energy. Hydrogen's ground state is minus thirteen point six electron volts, so it takes thirteen point six electron volts to ionise the **atom**.

Visual: the circles unroll into an energy ladder (kit family `m8-quantum-atom`): horizontal navy lines labelled n = 1, 2, 3, 4, 5 and a dashed line "n = ∞, E = 0" at the top, levels crowding upwards. On "the ground state" n = 1 labelled "ground state"; on "excited states" the others labelled "excited states". On "negative" an energy axis "E (eV)" with 0 at the top and negative values below. On "A just-free electron has zero energy" a navy dot above the dashed line, tag "free: E ≥ 0". On "minus thirteen point six electron volts" n = 1 labelled "E₁ = −13.6 eV"; on "atom" an arrow from n = 1 to the dashed line, framed tag "ionisation energy: +13.6 eV"; beside it a small chip "ionisation energy = −13.6 eV" crossed in red, red hand tag "energy you add: positive". Marks (Revision 2): navy hand tag "bound: below zero" with a navy pen bracket from n = 1 to the dashed line.

### 8. Bohr's photon postulate
> The next postulate links levels to light. When an electron drops from a higher level to a lower one, the atom emits one photon. By conservation of energy, the photon carries exactly the energy difference, so h f equals E initial minus E final. An electron can also jump up, by absorbing a photon with exactly the right **energy**.

Visual: the ladder. On "drops from a higher level to a lower one" the electron drops from n = 3 to n = 2 with a navy arrow; on "emits one photon" an amber packet leaves sideways. On "conservation of energy" an energy bracket spans the two levels, tag "ΔE". On "h f equals E initial minus E final" the equation strip writes "emission: hf = E_i − E_f" (framed), chip "E = hf (Module 7)"; beside it a small chip "hf = E₃ (the level's energy)" crossed in red, red hand tag "the gap, not the level". On "energy" a photon arrives from the left and the electron jumps up from n = 2 to n = 3, framed line "absorption: hf = E_f − E_i", amber hand tag "only the exact gap", amber pen bracket on the gap.

### 9. both failures fixed
> Now both failures are fixed. The ground state is the lowest level, and there's nothing lower to fall to, so the atom is **stable**. Only certain energy gaps exist, so only certain photon energies come out, and only certain wavelengths. That's a line **spectrum**. A bigger drop gives a bigger photon energy, a higher frequency, and a shorter **wavelength**.

Visual: on "nothing lower to fall to" the electron sits at n = 1 with a floor line under it, tag "no lower level"; on "stable" failure 1's chip gains a tick "fixed". On "Only certain energy gaps exist" brackets mark three gaps to n = 2. On "spectrum" three amber photons leave and become three lines on the black strip; failure 2's chip gains a tick. On "wavelength" a longer drop (n = 4 to 2) gives a blue-green photon and a line further left than the red one (n = 3 to 2), tags "bigger ΔE → higher f → shorter λ". Marks (Revision 2): ink pen ring round the floor line, ink hand tag "nothing lower"; photons and lines in true colours (red for 3 → 2, cyan for 4 → 2).

### 10. Bohr's angular momentum rule
> Bohr's other postulate chose which orbits are allowed. He set the electron's angular momentum, its mass times speed times orbit radius, equal to a whole number times h over two pi. That rule gave energy levels that matched hydrogen's lines extremely well. But again, he gave no reason for it. It worked, so he used **it**.

Visual: back to the circles; the orbit picker. On "angular momentum" the label "angular momentum L = mvr" with arrows for m, v and r on the electron. On "a whole number times h over two pi" `AlignedAlgebra` "mvr = n h / 2π, n = 1, 2, 3, ..." (framed); circles n = 1, 2, 3 light as n ticks up; a circle between n = 1 and n = 2 is crossed, tag "n = 1.5: not allowed". On "matched hydrogen's lines" a small tick linking the ladder to the four-line strip. On "it" a grey chip "why? (not explained)", grey hand tag "it just works". The orbit picker is live: an n counter (52 px) steps 1, 2, 3 as the matching circles light.

### 11. success, then limits
> So how good is Bohr's model? For hydrogen, it predicts the spectral lines with remarkable accuracy, as we'll calculate next time. But it has real **limits**.

Visual: board change to the assessment board: left column "explains" with a tick card "hydrogen's lines: accurate" and "stable atoms"; right column "limitations" empty with three card outlines. On "limits" the right column header pulses. The painted discharge tube (about 260 px) sits beside the "hydrogen's lines" tick card.

### 12. limit 1: only one electron
> First, it only works for hydrogen, and for ions with just one electron. Try it on helium, with two electrons, and the predicted lines are wrong, because the model ignores the electrons pushing on each **other**.

Visual: limitation card 1. On "ions with just one electron" a small ion "He⁺: one electron" with a tick. On "helium, with two electrons" a helium atom with two navy electrons; a predicted strip and a measured strip whose lines do not line up, tag "predicted ≠ observed". On "other" a rose double arrow between the two electrons, tag "electron-electron repulsion: ignored", rose pen ring round the arrow, rose hand tag "they push each other".

### 13. limit 2: the details of the lines
> Second, even for hydrogen, it misses details. It can't explain why some lines are much brighter than others. And a high-resolution spectroscope shows that some lines are really two or more lines very close together, which split further in a magnetic field. Bohr's model predicts none of **this**.

Visual: camera change (Revision 2: a new stage) to limitation card 2 large, with the line zoom filling the right half. On "much brighter than others" the four-line strip shows lines of different brightness, tag "relative intensities: not explained", red hand tag "why brighter?". On "two or more lines very close together" a zoom on the 656 nm line separates it into a close pair, tag "fine structure". On "in a magnetic field" slate crosses appear over the zoom and the pair splits into more lines. On "this" card 2 fills: "intensities and fine structure: not predicted", red pen ring round the split pair.

### 14. limit 3: rules without reasons
> Third, and most deeply, it mixes two kinds of physics. It keeps classical orbits and Coulomb's force, but it switches off classical radiation, and it assumes the angular momentum rule, without explaining either. It works, but it doesn't say **why**.

Visual: limitation card 3: a split diagram, left half "classical: circular orbits, Coulomb force" (navy), right half "quantum: no radiation in orbit, mvr = nh/2π" (amber), joined by a jagged seam, tag "hybrid". On "switches off classical radiation" the crossed wavelet chip from scene 6 returns. On "assumes the angular momentum rule" the boxed rule from scene 10 returns with "assumed". On "why" card 3 fills: "rules assumed, not explained", ink pen arrow along the jagged seam, ink hand tag "two kinds of physics".

### 15. a way to remember
> Here's a way to remember the two models. Rutherford got the nucleus right, but his electrons collapse. Bohr's electrons stay put, but only because his rules say so. The energy levels survived into modern physics. The neat circular orbits did **not**.

Visual: two chips write in turn: "Rutherford: right nucleus, collapsing electrons" and "Bohr: stable electrons, unexplained rules". On "The energy levels survived" the ladder gets a tick "kept"; on "not" the circles get a cross "replaced (later in Module 8)". The ladder and circles are about 500 px each, solid. The line writes large: "Rutherford: right nucleus, collapsing electrons. Bohr: stable electrons, unexplained rules." Hold about 2 seconds.

### 16. attempt 1 (countdown, 10 seconds)
> Your turn. Explain why, according to classical physics, Rutherford's model of the atom predicts that atoms should be unstable. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "Explain why, according to classical physics, Rutherford's model of the atom predicts that atoms should be unstable. (3 marks)" The card arrives with its full text and picture in one move (Decisions "Question cards"). The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 17. feedback 1 (brief)
> An orbiting electron keeps changing direction, so it's accelerating. Classical physics says an accelerating charge radiates electromagnetic waves, so the electron loses energy and spirals into the nucleus in about ten to the minus eleven seconds. Real atoms are stable, so the model **fails**. The slip is saying its speed is constant, so it isn't accelerating. A change of direction is an **acceleration**.

Visual: card shrinks to the top with its picture; givens strip "Rutherford: electrons orbit a nucleus; classical physics"; "classical physics" and "unstable" underline. Framed lines write in turn: "circular orbit → changing direction → centripetal acceleration"; "accelerating charge → radiates EM waves → loses energy"; "orbit shrinks → spirals in (≈ 10⁻¹¹ s)"; on "fails" "real atoms are stable → model fails". On "acceleration" a chip "constant speed, so no acceleration" fades in and is crossed. Hold about 1 second.

### 18. attempt 2 (countdown, 10 seconds)
> Last one. Bohr's model explained the hydrogen line spectrum. Outline two limitations of Bohr's model. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Bohr's model of the atom explained the line emission spectrum of hydrogen. Outline TWO limitations of Bohr's model. (2 marks)" The card arrives with its full text and picture in one move (Decisions "Question cards"). The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 19. feedback 2 (brief)
> Any two of these. It only works for one-electron atoms, because it ignores repulsion between electrons. It can't explain line brightness or the fine splitting of lines. And it assumes its stationary orbits and its angular momentum rule, without a reason. The slip is a vague answer like it's just wrong. Name a specific thing it can't **explain**.

Visual: card shrinks to the top with its picture; givens strip "Bohr's model: hydrogen lines explained; two limitations"; "TWO limitations" underlines. The three limitation cards return (about 360 px each, framed), each ticked as it is said. On "explain" a chip "it's wrong because electrons don't really orbit" fades in and is crossed (caption "name a specific failure"). Hold about 1 second.

### 20. handoff
> So Bohr's energy levels give hydrogen its lines. The four bright visible lines all end on level two. The red line is a drop from three to two, and the others start at four, five and six. If the levels are right, the gaps should predict those wavelengths closely. So how do hydrogen energy gaps predict Balmer **wavelengths**?

Visual: board clears (camera change). On "Bohr's energy levels" the ladder (n = 1 to 6 and ∞, E₁ = −13.6 eV and E_∞ = 0 labelled only). On "end on level two" level n = 2 highlights. On "a drop from three to two" a red arrow 3 → 2 and a red line on the strip at "656 nm (measured)". On "four, five and six" arrows 4 → 2 (cyan), 5 → 2 (blue-violet), 6 → 2 (violet), with lines "486", "434", "410 nm (measured)". On "predict those wavelengths closely" a "?" beside each arrow, tag "ΔE → λ?". On "wavelengths" chip "Next: how do hydrogen energy gaps predict Balmer wavelengths?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 21. key notes (quiet, hold about 45 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Rutherford: orbiting e⁻ radiates, spirals in (~10⁻¹¹ s).
2. It predicts a smear; hydrogen gives sharp lines.
3. Bohr: fixed levels, no radiation while in one.
4. Photon energy = gap: hf = E_i − E_f (emission).
5. Limits: one electron only; no line detail; rules assumed.

Memory aid (framed card under the notes, hand lettering as in scene 15): *Rutherford: right nucleus, collapsing electrons. Bohr: stable electrons, unexplained rules.* Notes in the role colours, 34 px; about 250 characters of bullet text; no paragraphs.

## Teaching checks

- **Does it explain causes?** Why the electron radiates (acceleration) (2); why it spirals and speeds up (3); why the spectrum would be continuous (4); why stationary states make atoms stable (9); why gaps make lines (9); why bigger drops give shorter wavelengths (9); why helium fails (repulsion ignored) (12); why the model is unsatisfying (assumed rules) (14).
- **Misconceptions addressed:** constant speed means no acceleration (17 crossed); Bohr's model works for all atoms (12); Rutherford's model is complete (5); the photon's energy is the level's energy rather than the difference (8 crossed); a negative ionisation energy (7 crossed); hydrogen has only four visible lines (4: four bright ones); a vague limitation answer (19 crossed).
- **One idea at a time:** the radiation (2), the spiral (3), the spectrum (4), each postulate (6, 8, 10), levels (7), the fix (9), each limitation (12 to 14).
- **Video makes it easier:** the shrinking spiral with the clock (3); the rainbow sweep against four fixed lines (4); circles unrolling into a ladder (7); the photon carrying the bracketed gap (8); the jagged classical-quantum seam (14).
- **Response opportunity:** one prediction (3 s) and two unseen HSC-style tasks with every condition visible, 10 s each; nothing answer-bearing. One crossed mistake each; feedback about 31 s and 27 s.
- **Avoided double teaching:** accelerating charges radiate (Module 7 v01), hydrogen's lines (Module 7 v03), E = hf and eV (Module 7), centripetal acceleration (Module 5) recalled in a clause each.
- **Syllabus coverage:** `P8-IQ3-01`: the limitations of Rutherford's model (stability, line spectra) (2 to 5) and of Bohr's model (one-electron, intensities and fine structure, unexplained hybrid) (11 to 14), with a judgement (15). Bohr's model itself (6 to 10) supports P8-IQ3-03's qualitative relation, completed quantitatively in v11.
- **Out of scope by design:** E_n = −13.6/n² values beyond n = 1, the Rydberg equation, series and limits (v11); matter waves and the reason for mvr = nh/2π (v12); orbitals (v13).

## Practice questions and model answers

**Attempt 1 (scene 16; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "Explain why, according to classical physics, Rutherford's model of the atom predicts that atoms should be unstable."
Model answer: In Rutherford's model electrons orbit the nucleus, continually changing direction, so they have a centripetal acceleration. Classical electromagnetism states that an accelerating charge emits electromagnetic radiation, which carries energy away. The electron would therefore lose energy continuously and spiral into the nucleus in a very short time (about 10⁻¹¹ s), so atoms could not be stable; observed atoms are stable, so the model fails. Classic mistake (crossed): "its speed is constant, so it isn't accelerating".

**Attempt 2 (scene 18; original wording, HSC style, 2 marks).** "Bohr's model of the atom explained the line emission spectrum of hydrogen. Outline TWO limitations of Bohr's model."
Model answer (any two): it applies only to hydrogen and one-electron ions, failing for multi-electron atoms because it ignores electron-electron repulsion; it cannot explain the relative intensities of spectral lines; it cannot explain fine structure (closely spaced components) or the splitting of lines in a magnetic field; it assumes, without justification, that electrons in allowed orbits do not radiate and that angular momentum is quantised (a hybrid of classical and quantum ideas). Classic mistake (crossed): a vague "it's wrong because electrons don't orbit" without a specific failure.

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Collapse time | a₀ = 5.29 × 10⁻¹¹ m, r_e = 2.818 × 10⁻¹⁵ m, c = 3.00 × 10⁸ m s⁻¹: t = a₀³/(4r_e²c) = 1.55 × 10⁻¹¹ s ≈ 1.6 × 10⁻¹¹ s ("about ten to the minus eleven"; "less than a ten-billionth of a second") | 3, 17 |
| Hydrogen lines (Module 7 v03, site) | 656, 486, 434, 410 nm (Rydberg with R = 1.097 × 10⁷: 656.3, 486.2, 434.1, 410.2) | 4, 20 |
| Ground state | E₁ = −13.6 eV; ionisation 13.6 eV = 2.18 × 10⁻¹⁸ J | 7, 20 |
| Visible range | 380 to 750 nm (fainter Balmer lines 397.0, 388.9, 383.5 nm also inside; NIST) | 4 |
| Classical sweep (Revision 2) | f = √(ke²/(m r)) / (2πr): 8a₀ 2.91 × 10¹⁴ Hz, 1031 nm; 6a₀ 4.48 × 10¹⁴ Hz, 670 nm; 5a₀ 5.89 × 10¹⁴ Hz, 509 nm; 4a₀ 8.23 × 10¹⁴ Hz, 365 nm; a₀ 6.58 × 10¹⁵ Hz, 45.6 nm | 4 |
| Bohr 1913 agreement (brief 192) | calculated 3.1 × 10¹⁵ s⁻¹ against measured 3.290 × 10¹⁵ s⁻¹: 5.8% | site note 2 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov, `numbers.py` in the session scratchpad); Codex to re-check.

- (5.29e-11)³ / (4 × (2.818e-15)² × 3.00e8) = 1.553e-11 s.
- 1/(1.097e7 × (1/4 − 1/9)) = 656.3 nm; (1/4 − 1/16): 486.2 nm; (1/4 − 1/25): 434.1 nm; (1/4 − 1/36): 410.2 nm.
- 13.6 × 1.602e-19 = 2.179e-18 J.
- Revision 2 (7 Nov): with k = 8.99e9, e = 1.602e-19, m = 9.109e-31, c = 3.00e8, a₀ = 5.29e-11 m: λ = c / f at 8, 6, 5, 4, 1 a₀ = 1031, 670, 509, 365, 45.6 nm.

## Memory aid check

- **"Rutherford: right nucleus, collapsing electrons. Bohr: stable electrons, unexplained rules."** Meaning, as said in scene 15: Rutherford's nucleus survives but classical physics makes his electrons spiral in; Bohr's stationary states keep electrons stable, but the stationary-state and angular-momentum rules are assumed. Assumptions checked: "collapsing" is the classical prediction, not an observation (scene 3 says so); "unexplained" means within Bohr's model (de Broglie and quantum mechanics later explain the quantisation, v12 and v13); Bohr's model is also limited to one-electron atoms, which the aid does not cover, so the notes list all limitations. It helps a new case: A1 (Rutherford half) and A2 (Bohr half). Introduced after the explanation (2 to 14). Revision 2: "stable electrons" means stable atoms in the model, not an observed orbit; the notes keep the photon rule as the size of the gap.
- **Considered, not used:** a staircase analogy for energy levels (m7-v03 already used a ladder picture; the coded ladder is enough).

## Narration length estimate

Revision 2 count (7 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed; total = sum of scene strings): **6,037 characters**, 21 scenes. Characters per scene (1 to 21): 458, 301, 379, 444, 129, 349, 436, 326, 345, 318, 153, 207, 292, 245, 246, 148, 399, 123, 343, 321, 75. At 13.3 characters per second the speech is about 454 s; add about 3 s for the prediction countdown, 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 40 s more of the quiet notes hold (45 s in all; about 69 s of holds and countdowns; the scene 4 sweep runs under its narration): **about 523 s**, inside the 5,500 to 7,000 character band and under the 570 s cap. Revision 1: 6,017 characters (scene sum; 6,037 with inter-scene spaces), about 538 s. Reserve trims if the voiced take runs long: scene 13's magnetic-field clause; scene 3's jar sentence (keep the drawing); scene 11 merged into scene 12's first line.

## Opening frame

v09's final frame (`phys-y12-m8-v09.md`, Revision 2): paper background; heading "What evidence established an uncharged massive particle in the nucleus?"; at the centre a small nucleus of red "p" and grey "n" discs (tag "not to scale"); one navy electron moving on a dashed circular orbit around it (held in motion), with a teal velocity arrow turning with it and a rose arrow "a" pointing to the centre, tag "changing direction = accelerating"; a Module 7 chip "accelerating charges radiate EM waves" with a faint rose wavelet leaving the electron and a "?", and a rose hand tag "radiates?"; chip "Next: why couldn't Rutherford's model explain stable atoms and line spectra?". Scene 1's first beat fades the hand tag and turns the chip into the heading.

## Final frame

The last explained frame (end of scene 20, before the key-notes board): paper background; heading "Why couldn't Rutherford's model explain stable atoms and line spectra?"; at the left a coded hydrogen energy ladder (navy lines n = 1 to 6, dashed "n = ∞, E = 0" at the top, "E₁ = −13.6 eV" at the bottom; other levels labelled with n only), level n = 2 highlighted; four downward arrows ending on n = 2 from n = 3 (red), 4 (cyan), 5 (blue-violet) and 6 (violet), each with a "?" (Revision 2: arrow colours match the true line colours); at the right a black spectrum strip with four lines labelled "656", "486", "434", "410 nm (measured)"; tag "ΔE → λ?"; chip "Next: how do hydrogen energy gaps predict Balmer wavelengths?". v11 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m8-v10` (route phys-y12-m8-v10). Suggested explainer folder `src/explainer/lessons/phys-y12-m8-v10` and build folder `docs/production/claude-pm/lessons/p-y12-m8-v10` (root to confirm).

In order (kebab-case; 21 scene headings, all `### N.`): hook, radiating, spiral-stability, line-failure, rutherford-verdict, stationary-states, energy-levels, photon-postulate, failures-fixed, angular-momentum, bohr-success, limit-one-electron, limit-details, limit-hybrid, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Scene 1 is `explain` with a 3 s prediction countdown. `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: spiral collapse, predicted versus observed spectrum, energy ladder (`m8-quantum-atom`), orbit picker, limitation cards, `AlignedAlgebra`, `PenArrow`, `Countdown`, `CameraStage`. Transitions (`pickTransition`, Revision 2; no set-up runs past about 85 s): 1 to 2 clear change; 2 to 3 camera continue (about 51 s); 3 to 4 camera change (the live spectrum sweep with the tube and spectroscope); 4 to 5 camera continue (about 42 s); 5 to 6 clear change; 6 to 7 morph (circles unroll into the ladder); 7 to 8 to 9 camera continue; 9 to 10 morph back to circles; 10 to 11 clear change to the assessment board; 11 to 12 camera continue (about 27 s); 12 to 13 camera change (line-detail zoom); 13 to 14 to 15 camera continue (about 59 s); attempts and feedback card shrink to the top; 19 to 20 clear change; 20 to 21 fade to the notes board.

Holds: hook (3 s countdown), memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 45 s). Review evidence paths: `learning_review` = `checks/p-y12-m8-v10-learning-review.md`, `science_check` = `checks/p-y12-m8-v10-physics-check.md`.

## Assets

Have (all inspected 7 Nov; scaled uniformly only, never stretched, never above native size):
- `public/assets/physics/y12p-discharge-tube-v1.png` (1003 × 1568, RGBA; glow coded): 1, 4, 5, 11, A2 card.
- `public/assets/physics/y12p-pocket-spectroscope-v1.png` (1896 × 830, RGBA): 4.
- `public/assets/physics/phys-y11-eht-supply-v1.png` (1536 × 1024, RGBA; inspected for m6-v01): 4.
- **Checked, not used:** `phys-y11-filament-lamp-v1.png` (a continuous source is not needed; the predicted smear is coded).

Need: no new plates.

Coded: atom, orbits, spiral, wavelets, clock, jar, spectrum strips, energy ladder, photons, brackets, orbit picker, helium atom, line zoom and splitting, limitation cards, calculation strip, crossed chips, countdowns, key notes board.

Kit gaps (for the v10 build brief):
1. **Spiral collapse.** An electron on an inward spiral with rising speed, wavelet rate and a clock readout; shown as the classical prediction (not to scale in time).
2. **Circles to ladder morph.** Allowed orbits that unroll into horizontal energy levels in the `m8-quantum-atom` ladder, and back.

## Codex asset brief

No new plates (Revision 2). `y12p-discharge-tube-v1.png` and `y12p-pocket-spectroscope-v1.png` are delivered and were inspected; the tube's glow is coded over the clear capillary.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text and attempts against the "Numbers used" table.
2. Confirm the physics of every learner-visible claim: orbit implies acceleration; radiation at the orbit frequency; the spiral speeds up; the collapse time (author note a); the continuous-spectrum prediction; the three postulates and their wording; negative bound energies, E₁ and ionisation energy; hf = E_i − E_f; the three limitations.
3. Confirm the history: Bohr 1913; site note 2.
4. Confirm the memory aid's assumptions (see "Memory aid check").
5. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
6. Confirm both attempt cards are original in wording, carry every condition and show nothing answer-bearing.
7. Confirm the syllabus quote matches the route JSON exactly and is labelled 2017.
8. Confirm no person, hand, face or body outline is drawn or requested; scientists are named in text only.
9. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
10. Confirm the narration character count and per-scene counts by script with the build parser rules.
11. Report site notes 1 to 3 under Decisions to root.
12. Revision 2: confirm the hook's observed tag is stability (1; author note f); "four bright" or "four prominent" lines everywhere, with the faint 397 nm line drawn inside the visible strip (4, 20, notes; v11 matches); the emission and absorption forms (8, notes); "closely" in the handoff (20); the classical sweep values (4; author note g); true line colours (4, 9, 20, final frame).

## YouTube metadata (draft)

Title: Why Rutherford's Atom Should Collapse, and What Bohr Changed | HSC Physics Module 8

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module8/lesson12.sa.html

Classical physics says an orbiting electron radiates and spirals into the nucleus in about 10⁻¹¹ s, and would give a continuous spectrum. Real atoms are stable and give sharp lines. See how Bohr's postulates (stationary states, photons from transitions, quantised angular momentum) fix both problems, and assess the limitations of both the Rutherford and Bohr models. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 8: From the Universe to the Atom.
Syllabus content (NSW Physics Stage 6, 2017):
"assess the limitations of the Rutherford and Bohr atomic models"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: Chadwick and the neutron. Next: how hydrogen energy gaps predict the Balmer wavelengths.

#HSCPhysics #Physics #BohrModel #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v09 and Module 7; check that the radiation chain is causal at speed; that "negative energy" is understood as bound; that the photon postulate lands before the fix; that the limitations are specific; that the attempt cards give nothing away), then the physics check and the Codex error check.
- The spiral and its clock, the rainbow sweep against four lines and the circles unrolling into a ladder carry the explanation; judge them at playback speed in the voiced preview.
- Revision 2 (7 Nov): brief 192 findings resolved and visual upgrade; see "Revision 2" below.

## Revision 2 (7 Nov 2026)

Brief 192 findings (`checks/p-y12-m8-v10-learning-review.md`, `checks/p-y12-m8-v10-science-check.md`): 0 blockers, 3 should fix, 1 optional.
- **Should fix, "keeps orbiting forever" as observed (scene 1).** Resolved: the chips are "stays as it is", "drifts away", "spirals into the nucleus", and the observed tag reads "observed: atoms are stable"; Decisions "Hook" and author note (f).
- **Should fix, "four visible lines" (4, 20, notes).** Resolved: scene 4 says "But glowing hydrogen gives sharp lines, with four bright visible ones, at ..."; scene 20 says "The four bright visible lines"; the strip draws the faint 397 nm line inside the 380 to 750 nm range; notes say "sharp lines". v11 uses the same boundary and "four prominent" wording.
- **Should fix, absorption sign (note 3).** Resolved: notes say "Photon energy = gap: hf = E_i − E_f (emission)"; scene 8 frames "emission: hf = E_i − E_f" and "absorption: hf = E_f − E_i"; the Boundary and cause chain match.
- **Optional, "exactly" in the handoff.** Resolved: "the gaps should predict those wavelengths closely" (author note f; fine structure is limit 2).

Visual upgrade (to `../maths-visual-standard.md` and the build gate):
- Decisions gain "Colour key (Revision 2)", "Type sizes", "Anchor", "Simulation", "Board stages" and "Question cards".
- Plates: the painted discharge tube now glows in scene 1 as the observation to explain; with the spectroscope and supply it carries 4 and 5, returns in 11 and on the A2 card.
- Live control: the classical spiral sweep in scene 4 with live radius, orbit-frequency and wavelength readouts and a true-colour swatch (Python: 1031, 670, 509, 365, 46 nm at 8, 6, 5, 4, 1 a₀), against the four fixed bright lines; the collapse clock (3) and the orbit picker's n counter (10).
- Hand tags and a pen mark in role colours in every teaching scene ("observed: atoms are stable", "shaking charge → waves", "energy leaks away", "faster and faster", "predicted: every colour, smoothly", "new rules", "only these", "no reason given", "energy you add: positive", "bound: below zero", "the gap, not the level", "only the exact gap", "nothing lower", "it just works", "they push each other", "why brighter?", "two kinds of physics"; pen rings, brackets and arrows on the "a" arrow, the red line, the energy bar, the clock, the strips, n = 1, the gaps, the floor line, the repulsion arrow, the split pair and the seam).
- Framed answers and lines: both failure chips (3, 4), "+13.6 eV" (7), emission and absorption forms (8), mvr = nh/2π (10), the A1 lines (17), the limitation cards (19). New crossed slips: "ionisation energy = −13.6 eV" (7) and "hf = E₃ (the level's energy)" (8).
- True spectrum colours (656 red, 486 cyan, 434 blue-violet, 410 violet, 397 deep violet; IR and UV grey bands).
- Question cards arrive with full text and a picture in one move; the answer side has a givens strip.
- Key notes cut from five long items (about 1000 characters) to five short bullets (about 250 characters) with the framed memory card; quiet notes hold 60 s to 45 s.
- Type sizes stated; colour roles fixed. Stage changes added at 3 to 4 and 12 to 13 (Revision 1 ran 2 to 5 for about 93 s and 11 to 15 for about 86 s).

New plate requests: none.

Joins: the opening is v09's Revision 2 final frame (its "radiates?" hand tag fades in scene 1). The final frame (scene 20) keeps its content; the arrow colours now match the true line colours (cyan for 486 nm), recorded in v11's opening.

Counts: 6,017 to 6,037 characters (scene sum); about 538 s to about 523 s.
