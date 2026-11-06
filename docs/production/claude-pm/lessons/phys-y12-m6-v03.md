# Year 12 Physics M6 V03: Work and energy in electric fields. How does a potential difference set a particle's speed? (design)

Status: Revision 2 (7 Nov 2026): brief 189 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 6,013 characters, 16 scenes, about 541 s, counted by script with the build parser rules (see "Narration length estimate").

Scope: Year 12 Physics (Physics Stage 6, 2017 syllabus), Module 6 (Electromagnetism), inquiry question "What happens to stationary and moving charged particles when they interact with an electric or magnetic field?". Templates as `phys-y12-m6-v01.md`. No pre-design pack exists; the pack work is done here. Site lesson read in full (6 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year12/module6/lesson03.sa.html`, SHA256 `c438fea372bcb38940f885c14ca0e56d7b115f8e6ea692e18a8e6257c149bbc6` (recomputed 6 Nov; matches the route). Sections used: `build-the-energy-ledger`, `map-potential-and-field`, `calculate-particle-acceleration`. Route entry: `phys-y12-m6-v03`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Use work qV and kinetic energy with signed potential-energy change; explain when qEd applies and when initial kinetic energy matters. Stop before magnetic deflection." Next: "phys-y12-m6-v04: When does a magnetic field exert force on a moving charge?"

Owner rules applied: as v01 (2017 syllabus quoted exactly; no people, hands, faces or body outlines; the cathode ray tube plate from v02 shows the electron gun; ledgers, ladders, bars and graphs are coded; every number recalculated in Python with HSC data sheet constants; "Pause here to answer." with a 10 s countdown; brief feedback; Australian spelling; no em dashes). Recalled, not re-taught: v01 (E = V/d, F = qE with sign); v02 (the deflected electron: 3.00 → 3.06 × 10⁷ m s⁻¹ over a 4.89 mm rise); Year 11 work W = Fd, kinetic energy ½mv², energy conservation, the volt as a joule per coulomb; m5-v21 to v23 (potential energy falls as kinetic energy rises).

Syllabus content (Physics Stage 6 (2017), Module 6; ledger id `P6-IQ1-01`), quoted from the route JSON `syllabusActions`:

- `P6-IQ1-01`: "investigate and quantitatively derive and analyse the interaction between charged particles and uniform electric fields, including: (ACSPH083)" "electric field between parallel charged plates E=(V)/(d)", "acceleration of charged particles by the electric field vector(F)_(net)=mvector(a), vector(F)=qvector(E)", "work done on the charge W=qV, W=qEd, K=(1)/(2)mv^(2)"

This video covers the third example; v01 covered the first two.

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 56)

**Boundary:** starts on v02's final frame (the deflected electron's path with "in: 3.00" and "out: 3.06 × 10⁷ m s⁻¹" readouts and K bars). Teaches: W = qEd for displacement along a uniform field, and W = qV because E = V/d (the gap cancels); the signed ledger ΔU = qΔV, ΔK = −ΔU (positive charges lose U moving to lower potential, negative charges moving to higher potential); the electronvolt; v = √(2qV/m) from rest; v ∝ √V (the hook); same V, same K, different speeds (electron and proton, √1837 ≈ 43); when qEd applies (displacement along the field only; sideways motion does no work; equipotentials); when initial kinetic energy matters (v02's electron closes the loop; a retarding field takes energy away and can stop a charge). Stops before magnetic deflection (v04) and before relativistic speeds (Module 7; named in one clause).

## Decisions

- **Learner question (route wording, one grammar fix).** "How does a potential difference set a particle's speed?" (route: "particle speed"). The answer, built in order: the field does work qV on the charge, whatever the gap (2); that work is the fall in potential energy and the rise in kinetic energy (3); from rest, ½mv² = qV, so v = √(2qV/m) (5); speed goes with √V and with 1/√m (6, 7); with a starting speed, add the work to the starting kinetic energy, or take it away in a retarding field (9).
- **Hook (site hook, made concrete).** The site's LHC hook ("double the accelerating voltage... twice as fast?") is kept as the question but set on a 5,000 V electron gun (the site's worked example), so the answer can be computed: ×√2. LHC speeds are relativistic, so they are not used.
- **W = qV derived (route entry "Derive each newly introduced equation").** W = Fd = qEd with d along the field; E = V/d; so W = qV. "A wider gap: weaker field, longer push; they cancel" is the site's key insight and misconception 1.
- **Signs (route stop "signed potential-energy change"; site ledger).** Two signed cases from the site: proton from +5,000 V to 0 V (ΔV = −5,000 V, ΔU = −5,000 eV) and electron from 0 V to +5,000 V (ΔV = +5,000 V, q = −e, ΔU = −5,000 eV). The rule "positive charges fall to lower potential, negative charges fall to higher potential" is said once; W_field = −qΔV is shown on screen only (author note a).
- **Relativity limit.** The 5,000 V electron reaches 0.14c; one clause names the limit and Module 7 (keeps a necessary condition without teaching it). Author note b gives the 0.1c threshold (2.56 kV).
- **When qEd applies (route stop).** Uses v02's electron: displacement along the field 4.89 mm, not the 5.0 cm path along the plates; equipotentials parallel to the plates (site card 2). W = 97.7 eV.
- **Initial kinetic energy (route stop).** v02's electron: K₀ = 2,559 eV (it entered at 3.0 × 10⁷ m s⁻¹), K = 2,656 eV, v = 3.06 × 10⁷ m s⁻¹, matching v02's component result exactly (author note c). Retarding case (original): a 100 eV electron against 60 V leaves with 40 eV; with less than 60 eV it stops and turns back.
- **Memory aid.** "Energy goes with V; speed goes with root V." See "Memory aid check".
- **Attempts.** A1 (original): electron from rest through 2.0 kV: 2,000 eV = 3.20 × 10⁻¹⁶ J, v = 2.65 × 10⁷ m s⁻¹; crossed "no square root". A2 (original, from site short-answer Q2): proton and alpha particle through the same V: alpha gains twice the K, proton faster by √2 (v_α/v_p = 0.710); crossed "same energy because same voltage".
- **Colour key (v01).** Kinetic energy orange, potential energy violet (decision 10); potential ladder lines grey with voltage labels; field lines blue; forces amber; velocity teal.
- **Magnitude and sign convention (Revision 2, brief 189).** Two forms, each named on screen where it is used. Signed: ΔV = V_f − V_i, ΔU = qΔV, W_field = −qΔV = ΔK (scene 3 ledger). Sizes: for the energy gained from rest through an accelerating voltage, K = |q|V, the size of the charge times the size of the voltage (scenes 2, 4, 5, 7, 11 to 14; scene 5 narration says "using the sizes of the charge and the voltage"). Every K in those scenes is labelled "gain ΔK" or "from rest: K". The scene 3 ledger shows change bars (ΔU and ΔK from a shared zero line), not absolute U.
- **Colour roles (Revision 2, fixed for the whole video).** Kinetic energy and ΔK orange; potential energy change ΔU violet; voltage, ΔV and the ladder labels grey-ink (full ink, not faint); field lines and "E" blue; forces amber; velocity and speed readouts teal; displacement brackets navy; framed answers in a dark-ink frame; crossed slips and slip tags red; hand-font tags in the colour of the quantity they mark.
- **Type sizes (Revision 2, 1080p).** Current working line at least 44 px (scenes 5, 9, 12 and 14 rows 52 px; framed "W = qV" and "v = √(2|q|V/m)" 60 px); live readouts (supply dial V, K in eV, v in scene 6; speed readouts in scenes 1 and 7) about 52 px; ledger labels and graph axis labels 30 to 36 px; hand-font tags at least 30 px; question text 36 px, 30 px on the answer-side strip; nothing a student must read below 26 px. All text above the bottom 12% of the frame.
- **Anchor (Revision 2).** The painted high-voltage supply (`phys-y11-eht-supply-v1.png`, from v01 and v02) is wired to the electron gun in scene 1, its display reading "5000 V"; it is the dial of the scene 6 live control. The tube itself is `y12p-crt-tube-v1.png` (held by brief 189; fallback under Assets).
- **Simulation (Revision 2).** Core live control in scene 6: the supply dial sweeps the gun voltage from 0 to 10 kV while a point rides the teal √ curve on the v against V graph and the beam's readouts update every frame: "V", orange "K (eV)", teal "v" (Python, from rest, electron: 1.0 kV 1.88 × 10⁷; 2.5 kV 2.97 × 10⁷; 5.0 kV 4.19 × 10⁷; 7.5 kV 5.14 × 10⁷; 10 kV 5.93 × 10⁷ m s⁻¹). The K bar grows in proportion to V while the speed bar grows more slowly.
- **Stage changes (Revision 2).** Scene 4 becomes its own full-width unit board (the ledger as a thumbnail), so the plate-stage run is scenes 2 and 3 only (about 80 s). Scenes 8 and 9 share v02's path stage for about 84 s, with the ledger arriving in scene 9. Other set-ups run under about 60 s.
- **Site sources used:** intro (signed ledger), hook (doubling question), Think First (doubling V; doubling d; proton versus electron), learning intentions, vocabulary (work by the field, potential energy, ΔK, electronvolt, equipotential), card 1 (W = qEd = qV; gap independence; the 5,000 V worked example and its relativistic check), card 2 (equipotentials, eV, HSC Tip, non-relativistic limit, potential gradient one line on screen, the proton comparison and √1836), Activity 1 (400 V, alpha), Activity 2 (electron gun, "no field region: Newton's first law"), misconceptions (plate separation; heavier gains more), "Analyse 6 marks" (250 V gun; the vacuum condition, scene 5 tag) and "Account 5 marks" (sideways path does no work; scene 8). Not used: the interactive; the potential gradient E_x = −dV/dx beyond a screen tag.
- **Site notes (for root to log if accepted):** none. Checked and correct (site constants): 5,000 V electron 4.19 × 10⁷ m s⁻¹ (data sheet 4.194 × 10⁷), v/c ≈ 0.14; proton 9.79 × 10⁵ m s⁻¹; √1836 ≈ 43; 0.1c at about 2.6 kV (2.56 kV); 250 V gun 9.4 × 10⁶ m s⁻¹ (9.38 × 10⁶) and "about 3 per cent of c" (3.1%); short-answer Q1 1.28 × 10⁻¹⁶ J and 1.68 × 10⁷ m s⁻¹; Q2 v_α/v_p = 0.707 (with m_α = 4m_p).
- **Cause chain taught, in order:** (1) the field's force qE acts over the displacement along it, so W = qEd (2); (2) E = V/d, so W = qV and the gap cancels (2); (3) the work done by the field equals the fall in potential energy and the rise in kinetic energy (3); (4) ΔU = qΔV with signs: both charges lose U when they move the way the field pushes them (3); (5) from rest, ½mv² = qV, so v = √(2qV/m) (5); (6) K ∝ V, so v ∝ √V (6); (7) same q and V give the same K, and v ∝ 1/√m (7); (8) only displacement along E counts; sideways motion and motion along an equipotential do no work (8); (9) final K = initial K + work, or minus it in a retarding field (9).
- **Entry knowledge:** v01, v02; Year 11 work, kinetic energy and the volt.
- **Learner-visible vocabulary:** electric potential energy (energy a charge has because of where it sits in a field, 3); electronvolt (energy one elementary charge gains through one volt, 4); equipotential (a surface where the potential is the same, so moving along it takes no work, 8).
- **Legacy logic ported:** none. The coded `EnergyPotential` visual (kit family `m6-potential-energy`, "Higher potential lowers electron potential energy", limits "no collisions; electrostatic field; bar lengths show energy changes") is the starting point for the ladder and bars.
- **New explainer motion:** **potential ladder with energy ledger** (kit gap 3: horizontal equipotential lines across the plate stage labelled in volts; a particle moving between them; a signed ledger beside it with a zero line, a violet U bar falling below zero and an orange K bar rising by the same length; a "ΔV" readout with sign; an eV counter), shared with v06; v02's **strobe trajectory mode** (scene 8); **v against V graph** (`DataGraph`: v against V for an electron from 0 to 10 kV, the √ curve, two marked points); the CRT plate's gun end with a coded beam; `AlignedAlgebra`; `NumberTicker`; `Countdown`; `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `CameraStage`.
- **No human figures.** None.
- **Author notes (not learner copy):**
  (a) Signed relations (site): ΔV = V_f − V_i; ΔU = qΔV; W_field = −qΔV; ΔK = −qΔV when only the electric force does work. Screen shows "W_field = −qΔV" once in scene 3.
  (b) ½m_e(0.1c)² / e = 2,558.7 V; the 5,000 V electron is at 0.140c. The classical result overestimates the speed slightly (relativistic v at 5 kV is 4.163 × 10⁷ m s⁻¹ with m_ec² = 511.74 keV from the stated constants, Revision 2 correction of "about 4.12 × 10⁷"; the classical 4.194 × 10⁷ is 0.73% high); not narrated.
  (c) v02 loop: W = eE y = 1.602 × 10⁻¹⁹ × 2.0 × 10⁴ × 4.8853 × 10⁻³ = 1.5652 × 10⁻¹⁷ J = 97.7 eV; K₀ = ½ × 9.109 × 10⁻³¹ × (3.0 × 10⁷)² = 4.0990 × 10⁻¹⁶ J = 2,558.7 eV; K = 4.2556 × 10⁻¹⁶ J = 2,656.4 eV; v = 3.0567 × 10⁷ m s⁻¹ (v02: √(v_x² + v_y²) = 3.0567 × 10⁷). Using 5.0 cm instead: 1.602 × 10⁻¹⁶ J = 1,000 eV (wrong).
  (d) Retarding example: 100 eV electron (5.93 × 10⁶ m s⁻¹) against 60 V leaves with 40 eV (3.75 × 10⁶ m s⁻¹); speeds screen only.
  (e) Pronunciations: "electronvolts"; "the square root of two q V over m"; "kilovolts".

- **Open decisions for root:**
  - **1. Signed form on screen (science check).** The narration uses "potential energy falls by qV" language with signs worked in two examples; W_field = −qΔV appears once on screen. Confirm this meets the route's "signed potential-energy change" without overloading.
  - **2. v02 loop (learning review).** Scene 9 recomputes v02's exit speed with energy (2,559 + 98 = 2,656 eV). Confirm it is a satisfying payoff rather than a detour; the retarding sentence could carry "initial kinetic energy matters" alone.

Main question: *An electron gun speeds electrons up with a voltage. Double the voltage: does the electron come out twice as fast? And why doesn't the size of the gap matter?*
Entry knowledge: v01, v02; Year 11 work and energy.
Stops after: W = qEd = qV, signed ΔU, eV, v = √(2qV/m), v ∝ √V and 1/√m, qEd along the field only, initial K. No magnetic deflection.
Handoff: v04, when a magnetic field exerts a force on a moving charge.

## Script and shots

Cue words in **bold** trigger the visual change. Screen symbols in italic: *W*, *q*, *V*, *E*, *d*, *K*, *U*, *v*, *m*. Paper background and handwritten headline face as the explainer house style.

### 1. hook (does double the voltage mean double the speed?)
> Last time, the electron left the plates a little faster than it went in, so the field gave it energy. An electron gun uses exactly that. Electrons start almost at rest, and a voltage speeds them up into a **beam**. Here's the puzzle. Double the voltage of the gun. Does the electron come out twice as **fast**? Make a prediction.

Visual: opens on v02's final frame (see "Opening frame"); the two K bars pulse. Camera change to the CRT plate (`y12p-crt-tube-v1.png`, from v02; held by brief 189, see Assets for the fallback), pushed in on the gun end; a coded label "0 V" at the cathode and "+5000 V" at the anode. Anchor (Revision 2): the painted supply (`phys-y11-eht-supply-v1.png`, uniform scale, about 300 px tall) sits below the tube with two coded leads to the cathode and anode, its display reading "5000 V" (52 px, grey-ink). Hand tags: orange "energy in" with a pen arrow to the exit K bar (before the camera change); teal "start ≈ rest" at the cathode. On "beam" a coded beam leaves the anode with a speed readout ticking up. On "fast" the supply display ticks to "10 000 V", a second readout "10 000 V: v = ?" appears, and the 3 s `Countdown` runs beside chips "× 2", "× 4", "× 1.41".

### 2. the work done by the field
> Start with work. The field pushes the charge with a force, q E. If the charge moves a distance d along the field, the work done on it is q E **d**. But E is V over d, so the d's cancel, and the work is just q **V**. That's a big idea. A wider gap makes the field weaker, but the push acts for longer, and the two effects cancel exactly. Only the voltage matters, not the **gap**.

Visual: clear change to the plate stage (top "+", bottom "−"), a proton released at the top plate. Heading writes on: "How does a potential difference set a particle's speed?". `AlignedAlgebra`: "W = Fd = qE d" with an amber force arrow and a navy displacement bracket "d (along E)"; on "d" "W = qEd" written at 44 px. On "V" the substitution "E = V/d" slides in and the d's strike through: "W = qV" framed (60 px), with a small grey line "sizes: |q|V" under it. On "gap" the gap doubles: field lines thin to half density, the force arrow halves, the bracket doubles; a "W" counter ends at the same value for both gaps, tag "weaker push × longer path = same work". Revision 2: amber hand tag "half the push" by the halved arrow, navy hand tag "twice as far" by the doubled bracket, with a pen ring round the two equal W counters; a chip "wider gap → more work" fades in and is crossed in red.

### 3. the energy ledger, with signs
> Where does that energy come from? From electric potential energy, the energy a charge has because of where it sits in the field. As the field does work, the potential energy falls, and the kinetic energy rises by the same amount. Take a proton moving from the positive plate, at five thousand volts, to the negative plate, at zero. Its charge is positive, and the potential drops by five thousand volts, so its potential energy **falls**. Now an electron, moving the other way, from zero volts up to five thousand. Its charge is negative, and the potential rises, so again its potential energy **falls**. Positive charges fall to lower potential, negative charges fall to higher potential, and both speed **up**.

Visual: camera continue. Potential ladder: grey equipotential lines across the gap labelled "5000 V" (top), "4000", "3000", "2000", "1000", "0 V" (bottom). Ledger at the right (Revision 2: change bars, brief 189) with a zero line headed "changes during the move", a violet "ΔU" bar and an orange "ΔK" bar, both starting at zero. On "falls" (first) the proton moves down the ladder; "ΔV = −5000 V, q = +e" writes; the ΔU bar grows below zero as the ΔK bar grows above it by the same length; "ΔU = qΔV = −5000 eV", "ΔK = +5000 eV". On "falls" (second) the bars reset to zero and an electron moves up the ladder; "ΔV = +5000 V, q = −e"; the same change bars grow; "ΔU = −5000 eV", "ΔK = +5000 eV". A grey-ink hand tag "changes, not amounts" sits on the zero line (the proton starts at U = +5000 eV and the electron at 0, so only the changes are equal). On "up" a rule writes: "+ charges: towards lower V; − charges: towards higher V" and a screen tag (30 px) "signed: W_field = −qΔV = ΔK". Hand tags: violet "U falls" on each ΔU bar, orange "K rises" on each ΔK bar, with a pen arrow from ΔU to ΔK.

### 4. the electronvolt
> There's a handy unit for this. One electronvolt is the energy one elementary charge gains through one volt, one point six oh two times ten to the minus nineteen **joules**. So an electron accelerated through five thousand volts gains five thousand electronvolts. In joules, that's eight point oh one times ten to the minus sixteen. If a question asks for **electronvolts**, there's nothing to convert.

Visual (Revision 2 stage change): clear change to a full-width unit board with the ledger as a thumbnail at the top right. On "joules" the framed chip "1 eV = e × 1 V = 1.602 × 10⁻¹⁹ J" writes at 52 px beside a coded single charge "e" crossing a one-volt step of the ladder. A large orange ΔK bar gets a counter "gain ΔK = 5000 eV" and below it "= 5000 × 1.602 × 10⁻¹⁹ = 8.01 × 10⁻¹⁶ J", framed. On "electronvolts" the eV counter highlights, tag "eV answer: no conversion". Hand tags: orange "× 1.602 × 10⁻¹⁹ to get J" with a pen arrow from eV to J; grey-ink "1 e through 1 V".

### 5. speed from rest
> Now the speed. Starting from rest, all that work becomes kinetic energy, so a half m v squared equals q V, using the sizes of the charge and the voltage, and v equals the square root of two q V over **m**. For our electron through five thousand volts, that's the square root of two, times eight point oh one times ten to the minus sixteen joules, over nine point one oh nine times ten to the minus thirty-one kilograms. About four point one nine times ten to the seven metres per **second**. That's around fourteen percent of the speed of light. Much faster than that, and this simple formula starts to fail, which is a story for Module **seven**.

Visual: calculation layout, with the gun end of the CRT plate (or the fallback outline) and the supply at the right, about 35% of the frame. Task strip: "Electron from rest through 5000 V: find its speed." Equation strip: "from rest: ½mv² = |q|V → v = √(2|q|V/m)" (on "m" the rearrangement writes; framed, 60 px). Givens grouped (navy): "|q|V = 8.01 × 10⁻¹⁶ J (scene 4)", "m_e = 9.109 × 10⁻³¹ kg". `AlignedAlgebra` (52 px): "v = √(2 × 8.01 × 10⁻¹⁶ / 9.109 × 10⁻³¹)"; on "second" "= 4.19 × 10⁷ m s⁻¹" framed. Tag "in a vacuum: only the electric force does work". On "seven" a grey-ink chip "v ≈ 0.14c: classical model starting to strain (Module 7)". Revision 2: crossed classic slip beside the framed answer: chip "V = 5 (kV left in): v = 1.33 × 10⁶ m s⁻¹" fades in and is crossed in red, red hand tag "kV → V"; teal hand tag "square root last" with a pen ring round the √.

### 6. so, does double the voltage double the speed?
> So, does doubling the voltage double the speed? Doubling the voltage doubles the kinetic energy. But kinetic energy goes with v squared, so the speed only rises by the square root of two, about one point four one **times**. Ten thousand volts gives five point nine times ten to the seven, not eight point **four**. Energy goes with V, and speed goes with the square root of **V**.

Visual (Revision 2, the core live control): camera change to the v against V graph (electron, 0 to 10 kV, √ curve in teal, filling the right 60% of the frame), with the painted supply at the left and the beam leaving a coded gun above it. From "So, does doubling" the supply dial turns from 0 towards 10 kV; a point rides the √ curve while a readout panel beside the supply updates every frame (52 px): grey-ink "V", orange "K = |q|V" in eV, teal "v" (for example 2.5 kV: 2500 eV, 2.97 × 10⁷ m s⁻¹). Beside the readouts two bars grow: an orange K bar in proportion to V and a teal v bar that grows more slowly. On "times" the dial pauses at 5,000 V (4.19 × 10⁷) and then 10,000 V (5.93 × 10⁷), the K bar exactly doubles, and a bracket "× 1.41" spans the two v readouts. On "four" a dashed straight line from the origin through the 5,000 V point reaches "8.4 × 10⁷" at 10 kV and is crossed in red, red hand tag "speed isn't ∝ V". On "V" framed "K ∝ V, v ∝ √V"; the hook's "× 1.41" chip ticks. Hand tags: orange "× 2" on the K bar, teal "× √2" on the v bar.

### 7. same voltage, different particles
> Now send a proton through the same five thousand volts. It has the same size of charge, so it gains the same energy, five thousand electronvolts. But it's about eighteen hundred times more massive, so it ends up much slower, nine point seven nine times ten to the five metres per second, about forty-three times slower than the **electron**. Forty-three is the square root of the mass ratio. Same energy, different **speeds**.

Visual: camera change to two lanes, each a short gun with "5000 V": electron lane and proton lane. Both K bars fill to the same "5000 eV". On "electron" the speed readouts settle: "4.19 × 10⁷ m s⁻¹" and "9.79 × 10⁵ m s⁻¹", the proton dot crawling; a bracket "÷ 43". On "speeds" the line "v ∝ 1/√m: √1837 ≈ 43" writes, framed. Revision 2: the lanes fill the frame (each about 400 px tall), both supplies reading "5000 V"; orange hand tag "same |q|, same K" across the two equal K bars; teal hand tag "heavier: slower" with a pen arrow to the crawling proton; a chip "heavier gains more energy" fades in and is crossed in red.

### 8. when you can use q E d
> So when can you use q E d? Only for the distance moved parallel to the field, in a uniform field. Go back to last video's electron. It travelled five centimetres along the plates, but only four point nine millimetres across them, the way the force **pushed** it. Sideways motion is at right angles to the force, so it does no work. Lines parallel to the plates are equipotentials, the same potential all along, so moving along them takes no **work**. The work is q E times four point nine millimetres, about ninety-eight electronvolts, not q E times five **centimetres**.

Visual: camera change to v02's plate stage and path (strobe trajectory mode, true scale), grey equipotential lines parallel to the plates. On "pushed" the displacement splits into a teal horizontal bracket "5.0 cm (no work)" and a navy vertical bracket "4.9 mm along the force (against E: electron)", with the upward amber force arrow beside it (Revision 2, brief 189: the electron moves up while E points down). On "work" a small charge slides along one equipotential line with a "W = 0" tag. On "centimetres" "W = |q|E × 4.89 mm = 1.57 × 10⁻¹⁷ J ≈ 98 eV" framed, with a grey-ink tag "displacement along the force: positive work"; a chip "qE × 5.0 cm = 1000 eV" fades in and is crossed in red. Hand tags: teal "⊥ force: no work" on the horizontal bracket, amber "with the push" on the vertical one, a pen arrow along the equipotential.

### 9. when the starting energy matters
> And that electron didn't start from rest. It went in with about two thousand five hundred and sixty electronvolts of kinetic energy. So it came out with that, plus the work done, about two thousand six hundred and fifty-six electronvolts, which is three point oh six times ten to the seven metres per **second**. That's exactly what the components gave us last time. If the field pushes against a charge instead, the charge loses q V. A hundred electronvolt electron, sent against sixty volts, comes out with forty, and if it has less than sixty, it stops and turns **back**.

Visual: camera continue. The ledger returns beside v02's path: an orange "K₀ = 2559 eV" bar at the entrance, a violet "W = +98 eV" segment stacking on top, "K = 2656 eV" at the exit. On "second" "v = √(2K/m) = 3.06 × 10⁷ m s⁻¹" writes beside v02's readout "out: 3.06 × 10⁷", and both tick. On "back" a plate stage (about 40% of the frame) with the field pushing against an entering electron: "100 eV in, 60 V against: 40 eV out", framed; a second electron with "50 eV in" slows, stops and returns, tag "K₀ < |q|V: turns back". Revision 2: "K = 2656 eV" and "v = 3.06 × 10⁷ m s⁻¹" framed; orange hand tag "start + work" with a pen bracket over the stacked bars; a chip "K = 98 eV (as if from rest)" fades in and is crossed in red; teal hand tag "same answer, two ways" linking the two 3.06 readouts.

### 10. memory aid
> To remember it: energy goes with V, and speed goes with root **V**. And only the potential difference matters, not the gap, and not the **path**.

Visual: board clears to a framed memory card: the handwritten line "Energy ∝ V. Speed ∝ √V." (60 px, orange "Energy", teal "Speed"), with "from rest: K = |q|V" and "v = √(2|q|V/m)" under it (44 px). On "V" the √ pulses. On "path" two paths between the same equipotentials (straight and curved) with equal "W = qV" tags, under the card line "not the gap, not the path". Hold about 2 seconds.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. Electrons are accelerated from rest through a potential difference of two point zero kilovolts. Find the kinetic energy of each electron, in electronvolts and in joules, then calculate its final speed. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "Electrons are accelerated from rest through a potential difference of 2.0 kV in an evacuated tube. (a) State the kinetic energy gained by each electron in electronvolts and in joules. (b) Calculate the final speed of the electrons. (m_e = 9.109 × 10⁻³¹ kg, e = 1.602 × 10⁻¹⁹ C)" Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 12. feedback 1 (brief)
> The kinetic energy is two thousand electronvolts, which is three point two oh times ten to the minus sixteen **joules**. Then v is the square root of two times that energy over the electron's mass, about two point six five times ten to the seven metres per **second**. The classic slip is forgetting the square root, which leaves you with a speed **squared**.

Visual: card shrinks to a full-text strip at the top (30 px). Answer side (Revision 2): a navy givens strip "from rest, |q| = e, V = 2.0 kV = 2000 V, m_e = 9.109 × 10⁻³¹ kg" and, at the right, a picture: the coded gun with the supply reading "2000 V" and the beam leaving with an orange ΔK bar. Rows (52 px): on "joules" "gain ΔK = 2000 eV = 2000 × 1.602 × 10⁻¹⁹ = 3.20 × 10⁻¹⁶ J" framed; on "second" "v = √(2 × 3.204 × 10⁻¹⁶ / 9.109 × 10⁻³¹) = 2.65 × 10⁷ m s⁻¹" framed. On "squared" a chip "v = 7.0 × 10¹⁴ m s⁻¹" fades in and is crossed in red, red hand tag "that's v²". Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. A proton and an alpha particle are each accelerated from rest through the same potential difference. The alpha particle has twice the proton's charge, and about four times its mass. Which gains more kinetic energy, and which ends up faster? Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A proton and an alpha particle are each accelerated from rest through the same potential difference. The alpha particle has charge +2e and mass 6.64 × 10⁻²⁷ kg; the proton has charge +e and mass 1.673 × 10⁻²⁷ kg. (a) Which particle gains more kinetic energy? Explain. (b) Which particle has the greater final speed? Justify your answer. (3 marks)" Picture on the card (Revision 2): two coded lanes, a small "+e" disc and a larger "+2e" disc at the start of identical guns marked "same V", no bars or speeds. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 2 (brief)
> The kinetic energy is q V, so the alpha particle, with double the charge, gains twice as much. But it's about four times as massive, so its speed is the square root of two over four, about zero point seven one times the proton's. The proton is **faster**. The classic slip is saying they gain the same energy, because the voltage is the **same**.

Visual: card shrinks to a full-text strip at the top (30 px). Answer side (Revision 2): a navy givens strip "same V; α: +2e, 6.64 × 10⁻²⁷ kg; p: +e, 1.673 × 10⁻²⁷ kg" and, at the right, the card's two lanes now with orange ΔK bars (the alpha's twice as long) and teal speed bars (the proton's longer). Rows (52 px): "K = |q|V: K_α = 2eV = 2K_p", framed; "v = √(2|q|V/m): v_α/v_p = √((2e/m_α)/(e/m_p)) = √(2 × 1.673/6.64) = 0.71"; on "faster" "proton faster (v_p ≈ 1.41 v_α)" framed. On "same" a chip "same V → same K" fades in and is crossed in red, red hand tag "K = |q|V: charge counts". Hold about 1 second.

### 15. next: a field that only steers
> So an electric field speeds a charge up, because its force can push along the motion, and the energy it gives is q V. Now aim our electron beam into a magnetic field instead. The beam **bends**, but its speed doesn't change at all. So when does a magnetic field push on a moving **charge**?

Visual: clear change. At the left a coded exam-style electron gun (a cathode block and an anode block, labels "0 V" and "+5000 V"); the beam leaves it moving right into a square region of slate crosses, tag "B into page". On "bends" the beam curves downwards along an arc inside the region; two speed readouts, "entering: 4.19 × 10⁷ m s⁻¹" and "inside: 4.19 × 10⁷ m s⁻¹", are equal, and the orange K bar beside the beam does not change. On "charge" a chip writes: "Next: when does a magnetic field exert a force on a moving charge?". Revision 2: teal hand tag "same speed" with a pen ring round the two equal readouts (it fades before the hold, so the final frame below is unchanged). Hold about 2 seconds. This is the final frame.

### 16. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. W = qEd (d parallel to E) = qV: the gap cancels.
2. Signed: ΔU = qΔV; ΔK = −ΔU.
3. 1 eV = 1.602 × 10⁻¹⁹ J.
4. From rest: ½mv² = |q|V, v = √(2|q|V/m).
5. Sideways moves: no work. K_f = K_i ± |q|V.

Memory aid (framed card under the notes, hand lettering, 44 px): *Energy goes with V.* Second line in the card: *Speed goes with root V.* Bullets 36 px in the role colours; no paragraphs. The quiet hold is about 60 s (at least 40 s).

## Teaching checks

- **Does it explain causes?** Why only V matters (weaker field, longer path, 2); where the energy comes from (potential energy, 3); why both charges speed up (each moves the way the field pushes it, 3); why √V (K ∝ v², 6); why the proton is slower (same K, more mass, 7); why the sideways distance does not count (force perpendicular, 8); why v02's electron sped up by so little (98 eV on 2,559 eV, 9).
- **Misconceptions addressed:** doubling the gap doubles the energy (2, site); doubling V doubles the speed (6, crossed line); the heavier particle gains more energy (7, A2, site); using path length in qEd (8, crossed); forgetting the square root (12, crossed); same V means same K regardless of charge (14, crossed).
- **One idea at a time:** work (2), signs (3), unit (4), speed (5), scaling (6), mass (7), qEd limits (8), initial K (9).
- **Video makes it easier:** the W counter matching for two gaps (2); U and K bars trading (3); the √ curve against the crossed straight line (6); two lanes with equal K bars and unequal speeds (7); the split displacement brackets (8); the stopped electron turning back (9).
- **Response opportunity:** prediction (3 s); two unseen tasks, 10 s each; feedback about 26 s and 25 s.
- **Avoided double teaching:** v01's E = V/d and F = qE recalled; v02's numbers reused; Year 11 work and energy in a clause.
- **Syllabus coverage:** `P6-IQ1-01` "work done on the charge W = qV, W = qEd, K = ½mv²" derived (2, 5) and applied (5 to 9, A1, A2). With v01 the whole dot point is covered.
- **Out of scope by design:** magnetic deflection (v04); relativistic energy (Module 7; one clause); the potential gradient E = −dV/dx (screen tag only, not narrated).

## Practice questions and model answers

**Attempt 1 (scene 11; original, 3 marks suggested).** "Electrons are accelerated from rest through a potential difference of 2.0 kV in an evacuated tube. (a) State the kinetic energy gained by each electron in electronvolts and in joules. (b) Calculate the final speed of the electrons. (m_e = 9.109 × 10⁻³¹ kg, e = 1.602 × 10⁻¹⁹ C)"
Model answer: (a) K = |q|V = 2.0 × 10³ eV = 2.0 × 10³ × 1.602 × 10⁻¹⁹ = 3.20 × 10⁻¹⁶ J. (b) ½mv² = K, v = √(2K/m) = √(2 × 3.204 × 10⁻¹⁶ / 9.109 × 10⁻³¹) = 2.65 × 10⁷ m s⁻¹ (about 0.09c, so the classical model is reasonable). Classic mistake (crossed): v² = 7.0 × 10¹⁴ reported as the speed.

**Attempt 2 (scene 13; original, after site short-answer Q2, 3 marks).** "A proton and an alpha particle are each accelerated from rest through the same potential difference. The alpha particle has charge +2e and mass 6.64 × 10⁻²⁷ kg; the proton has charge +e and mass 1.673 × 10⁻²⁷ kg. (a) Which particle gains more kinetic energy? Explain. (b) Which particle has the greater final speed? Justify your answer."
Model answer: (a) K = |q|V; the alpha particle's charge is twice the proton's, so it gains twice the kinetic energy. (b) v = √(2qV/m); v_α/v_p = √((2e/m_α)/(e/m_p)) = √(2 × 1.673 × 10⁻²⁷ / 6.64 × 10⁻²⁷) = 0.71, so the proton is faster (about 1.41 times). Classic mistake (crossed): equal kinetic energies because the voltage is the same.

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Constants | e = 1.602 × 10⁻¹⁹ C (and J per eV); m_e = 9.109 × 10⁻³¹ kg; m_p = 1.673 × 10⁻²⁷ kg; c = 3.00 × 10⁸ m s⁻¹ | throughout |
| 5,000 V | K = 5,000 eV = 8.01 × 10⁻¹⁶ J; electron v = 4.1937 × 10⁷ m s⁻¹ ("four point one nine"); v/c = 0.140 ("around fourteen percent") | 4, 5 |
| 10,000 V | v = 5.931 × 10⁷ ("five point nine"); ratio 1.4142; straight-line error 8.39 × 10⁷ ("eight point four") | 6 |
| Proton, 5,000 V | v = 9.786 × 10⁵ ("nine point seven nine"); ratio 42.86 ("forty-three"); √1836.6 | 7 |
| v02 loop | W = 1.565 × 10⁻¹⁷ J = 97.7 eV ("about ninety-eight"); K₀ = 2,558.7 eV ("about two thousand five hundred and sixty"); K = 2,656.4 eV ("about two thousand six hundred and fifty-six"); v = 3.0567 × 10⁷ ("three point oh six"); wrong path 1,000 eV | 8, 9 |
| Retarding | 100 eV − 60 eV = 40 eV; speeds 5.93 × 10⁶ and 3.75 × 10⁶ m s⁻¹ (screen only) | 9 |
| A1 | K = 2,000 eV = 3.204 × 10⁻¹⁶ J ("three point two oh"); v = 2.6523 × 10⁷ ("two point six five"); slip v² = 7.03 × 10¹⁴ | 11, 12 |
| A2 | v_α/v_p = 0.7099 ("zero point seven one"); inverse 1.409 | 13, 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov); Codex to re-check.

- √(2 × 1.602 × 10⁻¹⁹ × 5,000 / 9.109 × 10⁻³¹) = 4.19369 × 10⁷; / 3.00 × 10⁸ = 0.13979. At 10,000 V: 5.93077 × 10⁷. √(2 × 1.602 × 10⁻¹⁹ × 5,000 / 1.673 × 10⁻²⁷) = 9.78551 × 10⁵; ratio 42.856.
- v02 loop: 1.602 × 10⁻¹⁹ × 2.0 × 10⁴ × 4.88528 × 10⁻³ = 1.56524 × 10⁻¹⁷ J (97.706 eV); ½ × 9.109 × 10⁻³¹ × 9.0 × 10¹⁴ = 4.09905 × 10⁻¹⁶ J (2,558.71 eV); sum 4.25557 × 10⁻¹⁶ J (2,656.41 eV); √(2 × 4.25557 × 10⁻¹⁶ / 9.109 × 10⁻³¹) = 3.05674 × 10⁷.
- 0.1c threshold: ½ × 9.109 × 10⁻³¹ × (3.0 × 10⁷)² / 1.602 × 10⁻¹⁹ = 2,558.7 V.
- A1: 2,000 × 1.602 × 10⁻¹⁹ = 3.204 × 10⁻¹⁶; √(2 × 3.204 × 10⁻¹⁶ / 9.109 × 10⁻³¹) = 2.65232 × 10⁷; v² = 7.0348 × 10¹⁴.
- A2: √(2 × 1.673 × 10⁻²⁷ / 6.64 × 10⁻²⁷) = 0.70987.
- Retarding: √(2 × 100 × 1.602 × 10⁻¹⁹ / 9.109 × 10⁻³¹) = 5.93077 × 10⁶; at 40 eV 3.75095 × 10⁶.

## Memory aid check

- **"Energy goes with V. Speed goes with root V."** From the site's review answer ("speed scales as √|ΔV|; doubling that magnitude increases speed by √2") and its Copy-into-your-books box. Meaning, as said in scene 10: the energy gained is qV, and because K = ½mv², the speed rises only as √V. Assumptions checked: start from rest (scene 9 covers a starting speed); only the electric force does work (vacuum); same particle when comparing; v ≪ c (scene 5). Helps the hook, A1 and A2. Introduced after scenes 2 to 9.
- **"Not the gap, and not the path."** From card 1 and the "Account 5 marks" answer. True for a conservative electrostatic field between fixed potentials.

## Narration length estimate

Revision 2 count (7 Nov; counted by script with the build parser rules: `### N.` or `### Na.` headings, only lines starting "> " inside each scene, joined with a space, bold markers removed; total = sum of the scene strings): **6,013 characters**, 16 scenes (Revision 1 stated 5,977, which included the 15 joins; its scene sum was 5,962). Characters per scene (1 to 16): 321, 367, 700, 393, 635, 368, 418, 559, 567, 137, 234, 347, 272, 338, 282, 75. At 13.3 characters per second the speech is about 452 s; add 3 s for the prediction countdown, about 3 s for the ledger and graph animations, about 3 s for the scene 6 dial sweep to settle, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the memory-aid hold, 2 s for the handoff hold and about 54 s more of the quiet notes hold (about 89 s of holds and countdowns; the notes hold is about 60 s in all): **about 541 s**, inside the band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 9's retarding sentences (keep "if the field pushes against a charge, it loses q V"); scene 5's relativity sentence (keep the screen chip).

## Opening frame

v02's final frame (`phys-y12-m6-v02.md`, "Final frame"): paper background; the plate stage (plates 5.0 cm long, 2.0 cm apart, top "+", bottom "−", blue field lines down) with the electron's curved path inside and a short straight continuation; readouts "in: 3.00 × 10⁷ m s⁻¹" and "out: 3.06 × 10⁷ m s⁻¹" with orange K bars, the exit bar slightly longer; heading "Why is a charged particle's path between plates like a projectile?"; chip "Next: how does a potential difference set a particle's speed?". Scene 1 pulses the K bars, then changes to the gun; the heading changes in scene 2.

## Final frame

The last explained frame (end of scene 15): paper background; at the left a coded exam-style electron gun (cathode block "0 V", anode block "+5000 V"); a teal beam leaves it to the right and enters a square region filled with a regular grid of slate crosses, tag "B into page"; inside the region the beam curves downwards along a circular arc; readouts "entering: 4.19 × 10⁷ m s⁻¹" and "inside: 4.19 × 10⁷ m s⁻¹" with an unchanged orange K bar beside the beam; heading "How does a potential difference set a particle's speed?"; chip "Next: when does a magnetic field exert a force on a moving charge?". v04 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m6-v03` (route phys-y12-m6-v03). Suggested explainer folder `src/explainer/lessons/phys-y12-m6-v03`; build folder `docs/production/claude-pm/lessons/p-y12-m6-v03` (root to confirm).

In order (16 scene headings): hook, work-qv, energy-ledger, electronvolt, speed-from-rest, doubling, particle-compare, qed-limits, initial-energy, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`); scene 1 ends with a 3 s prediction countdown. `motionTools`: plate stage (v01 kit gap 1), strobe trajectory mode (v02 kit gap 2), potential ladder with energy ledger (kit gap 3), v against V graph (`DataGraph`), `AlignedAlgebra`, `NumberTicker`, `Countdown`, `CameraStage`. Transitions: v02's final frame continues into scene 1, then camera change to the gun; 1 to 2 clear change; 2 to 3 camera continue; 3 to 4 camera push; 4 to 5 clear change to the calculation layout; 5 to 6 camera change; 6 to 7 camera change; 7 to 8 camera change; 8 to 9 camera continue; 9 to 10 clear change; attempts card shrink; 14 to 15 clear change; 15 to 16 fade.

Holds: hook (3 s), attempt-1, attempt-2 (10 s), key-notes (about 60 s). Review evidence paths: `checks/p-y12-m6-v03-learning-review.md`, `checks/p-y12-m6-v03-science-check.md`.

## Assets

Have (Revision 2, inspected 7 Nov; scaled uniformly only):
- `public/assets/physics/phys-y11-eht-supply-v1.png` (1536 × 1024, bench supply with dial and blank display): scenes 1, 5, 6, 7 (the gun's supply and the live-control dial).

Requested earlier in this run: `y12p-crt-tube-v1.png` (v02): scenes 1 and 5 (gun end). **Held after brief 189** (three attempts failed native resolution and exact geometry). The brief permits the coded-outline fallback specified in `phys-y12-m6-v02.md` (Assets). Root decides whether to accept it for v02 and v03 or retry the plate; the gun end in scenes 1 and 5 uses the same anchors either way.

Need (new plates): none.

Coded: plates, ladder lines, ledger bars, counters, graph, lanes, brackets, paths, the exam-style gun and the magnetic field region (scene 15), chips, cards, countdowns, notes board.

Kit gaps: 3. **Potential ladder with energy ledger** (equipotential lines labelled in volts; particle moving between them; signed U and K bars sharing a zero line; ΔV readout with sign; eV counter). Extends `EnergyPotential` (`m6-potential-energy`). Shared with v06.

## Codex asset brief (Year 12 Physics M6 v03)

No new plates. Codex reports, from the `y12p-crt-tube-v1.png` sidecar, the cathode and anode centres so the "0 V" and "+5000 V" labels and the beam start can be placed.

## Codex error-check brief

Error-only check:
1. Re-check every value under "Numbers to verify" and every value in narration, screen text, attempts and notes against "Numbers used".
2. Confirm the physics of every learner-visible claim: W = qEd with d parallel to the field (scene 8: the electron's 4.89 mm is along the force, against E); the |q|V magnitude convention and the signed ledger (change bars); W = qV and gap independence; ΔU = qΔV with both signed examples; the electronvolt; v = √(2qV/m) from rest; v ∝ √V; same qV gives the same K and v ∝ 1/√m; no work along equipotentials or for sideways motion; K_final = K_initial ± qV; the v02 loop (author note c); the retarding example; the 0.14c remark.
3. Confirm the memory aid's assumptions.
4. Confirm every cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
5. Confirm both attempt cards are original, carry every given, and show nothing answer-bearing.
6. Confirm the syllabus quote matches the route JSON exactly and is labelled 2017.
7. Confirm no person, hand, face or body outline is drawn or requested.
8. Confirm no em dash (U+2014), no U+2061, and Australian spelling.
9. Confirm the narration counts by script.

## YouTube metadata (draft)

Title: Accelerating Charges: W = qV and Speed from Potential Difference | HSC Physics Module 6

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module6/lesson03.sa.html

Double the voltage of an electron gun: is the electron twice as fast? Derive W = qEd = qV, see why the plate gap doesn't matter, track the signed change in potential energy for protons and electrons, use the electronvolt, and find v = √(2qV/m). Compare electrons and protons through the same voltage, see when qEd applies, and add a starting kinetic energy. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 6: Electromagnetism.
Syllabus content (NSW Physics Stage 6, 2017):
"investigate and quantitatively derive and analyse the interaction between charged particles and uniform electric fields, including: (ACSPH083) electric field between parallel charged plates E = V/d; acceleration of charged particles by the electric field F_net = ma, F = qE; work done on the charge W = qV, W = qEd, K = ½mv²"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Next: when a magnetic field exerts a force on a moving charge.

#HSCPhysics #Physics #ElectricPotential #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (are the two signed examples in scene 3 clear without the full W = −qΔV algebra; does scene 9's v02 loop help), then the physics check and the Codex error check.
- Judge the bars, the √ graph and the stopped electron at playback speed.

## Revision 2 (7 Nov 2026)

Brief 189 findings (`checks/p-y12-m6-v03-learning-review.md`, `checks/p-y12-m6-v03-science-check.md`): 0 blocker, 3 should fix, 1 optional.
- **Should fix, S2 to S10 and notes (positive qV for electrons with no magnitude convention).** Resolved: Decisions add "Magnitude and sign convention": accelerating-energy results use K = |q|V (sizes), the signed relations stay ΔU = qΔV and W_field = −qΔV = ΔK. Scene 5 narration adds "using the sizes of the charge and the voltage" (+47 characters); screen forms become "from rest: ½mv² = |q|V", "v = √(2|q|V/m)", "gain ΔK", "K = |q|V" in scenes 2, 4, 5, 6, 7, 9, 10, 12 and 14, the model answers and key notes 4 and 5. Numbers unchanged.
- **Should fix, S8 (the electron's 4.9 mm is against E, not along it).** Resolved: narration now says "Only for the distance moved parallel to the field" and "four point nine millimetres across them, the way the force **pushed** it" (cue changed from "field" to "pushed"; +4 characters); the bracket reads "4.9 mm along the force (against E: electron)" beside the upward force arrow; the framed row is "W = |q|E × 4.89 mm ≈ 98 eV" with the tag "displacement along the force: positive work". 97.7 eV unchanged.
- **Should fix, S3 ledger (identical absolute U bars contradict the stated potentials).** Resolved: the ledger now shows change bars, violet ΔU and orange ΔK from a shared zero line headed "changes during the move", reset between the proton and electron cases, with the tag "changes, not amounts". Both ΔU = −5000 eV values stay.
- **Optional, author note (b) relativistic speed.** Resolved: corrected to 4.163 × 10⁷ m s⁻¹ (Python, m_ec² = 511.74 keV with the stated constants; classical 4.194 × 10⁷ is 0.73% high). Learner copy unchanged.

Visual upgrade (to `../maths-visual-standard.md` and the build gate):
- Decisions gain "Magnitude and sign convention", "Colour roles", "Type sizes", "Anchor", "Simulation" and "Stage changes".
- Scene 1 anchor: the painted supply (`phys-y11-eht-supply-v1.png`, inspected 7 Nov) is wired to the gun, display "5000 V", ticking to "10 000 V" on the prediction. The opening frame is v02's Revision 2 final frame, which is unchanged.
- Core live control (scene 6): the supply dial sweeps 0 to 10 kV with a point riding the √ curve and live V, K (eV) and v readouts plus K and v bars; speeds recalculated in Python (Decisions, "Simulation").
- Stage change: scene 4 becomes a full-width eV unit board, so the plate-stage run is scenes 2 to 3 only (about 80 s, was about 110 s with scene 4).
- Hand tags and a pen mark in role colours in every teaching scene (1 to 9 and 15): "energy in", "start ≈ rest", "half the push", "twice as far", "changes, not amounts", "U falls", "K rises", "1 e through 1 V", "kV → V", "square root last", "× 2", "× √2", "same |q|, same K", "heavier: slower", "⊥ force: no work", "with the push", "start + work", "same answer, two ways", "same speed".
- Framed answers: W = qV (2), 1 eV and 8.01 × 10⁻¹⁶ J (4), the speed equation and 4.19 × 10⁷ (5), K ∝ V, v ∝ √V (6), √1837 ≈ 43 (7), 98 eV (8), 2656 eV, 3.06 × 10⁷ and 40 eV (9), every feedback result. New crossed slips: "wider gap → more work" (2), "V = 5 (kV left in)" (5, Python 1.33 × 10⁶ m s⁻¹), "heavier gains more energy" (7), "K = 98 eV (as if from rest)" (9).
- Question cards: scene 13's card gains a picture (two lanes, "+e" and "+2e" at identical guns); feedback scenes 12 and 14 keep a full-text strip with a navy givens strip and an answer-side picture.
- Scene 10: the memory aid becomes a framed card.
- Key notes: four long items (about 470 characters) cut to five short bullets (about 210 characters) with the framed memory card; quiet hold about 60 s.
- Type sizes stated; ladder labels and grey chips at full ink. Review evidence path corrected to the science-check file.

New plate requests: none. `y12p-crt-tube-v1.png` stays requested and held (fallback for root, as v02).

Counts: 5,977 stated (joined; 5,962 scene sum) to 6,013 characters (scene sum); about 535 s to about 541 s.
