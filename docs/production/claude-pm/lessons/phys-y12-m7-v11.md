# Year 12 Physics M7 V11: Photoelectric graphs, Planck's constant and the work function. How do photoelectric graphs reveal Planck constant and work function? (design)

Status: Revision 2 (7 Nov 2026): brief 191 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 6,158 characters, 17 scenes, about 529 s, counted by script with the build parser rules (total = sum of scene strings; see "Narration length estimate"). Opens on v10's final frame.

Scope: eleventh video of Year 12 Physics Module 7 (The Nature of Light, Physics Stage 6, 2017 syllabus), inquiry question "What evidence supports the particle model of light and what are the implications of this evidence for the development of the quantum model of light?". Templates as `phys-y12-m6-v13.md`; `math-a12-d10.md` for the calculation layout. No pre-design pack exists; the pack work is done here (2017 wording from the ledger, the site's Millikan data kept, every number recalculated in Python with HSC data-sheet constants, original attempts, asset reuse). Site lesson read in full (6 Nov, read-only, through the brief 168 text extract `work/brief168/module7-lesson16.sa.txt`, hash checked against the live file; contents listed in `phys-y12-m7-v10.md`): `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson16.sa.html`, SHA256 `ee650dbe40253bac16a45b31df6585aa1a0a361df1ea623162ea33ec6b660806` (recomputed 6 Nov; matches the route). Route entry: `phys-y12-m7-v11`, sections `apply-einsteins-photon-model`, `derive-planck-constant-from-millikans-data`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Apply Kmax=hf-phi and eVstop, identify gradient/intercept and intensity effects. Stop before matter-wave experiments." Next: "phys-y12-m7-v12: Why must observers agree on light speed?"

Owner rules applied: 2017 syllabus quoted exactly; no people, hands, faces or body outlines; the circuit, graphs, energy bars and calculation strips are coded, HSC style; the photocell, the power pack, the two meters and the spacecraft are painted plates (one new, four reused or shared), scaled uniformly, never stretched; every number recalculated in Python with h = 6.626 × 10⁻³⁴ J s and e = 1.602 × 10⁻¹⁹ C; data-sheet symbols K_max = hf − ϕ; "Pause here to answer." with a 10 s countdown; brief feedback with one crossed-out mistake; original attempts; Millikan and Einstein named in words only; Australian spelling; no em dashes. Recalled, not re-taught: v10 (photons, work function, threshold, intensity as photon number, the electron volt), v09 (h from black-body radiation), Module 6 (work done on a charge W = qV), Year 11 and Mathematics (gradient and intercepts of y = mx + c).

Syllabus content (Physics Stage 6 (2017), Module 7; ledger id `P7-IQ3-03`), quoted from the route JSON `syllabusActions`:

- `P7-IQ3-03`: "analyse the photoelectric effect K_(max)=hf-ϕ as it occurs in metallic elements by applying the law of conservation of energy and the photon model of light, (ACSPH119)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 59)

**Boundary:** starts on v10's final frame (the split energy bar, K_max = hf − ϕ, empty K_max against f axes). Teaches: K_max = hf − ϕ from energy conservation for one photon and one electron, and why it is a maximum (surface electrons); measuring K_max with a reverse (stopping) voltage, eV_stop = K_max; the photocurrent-voltage graph (intensity sets the current, frequency sets the stopping voltage); the K_max against f line (gradient h, horizontal intercept f₀, vertical intercept −ϕ, dashed below f₀); parallel lines for different metals; the stopping-voltage graph (gradient h/e); the site's sodium data: gradient 4.13 × 10⁻¹⁵ V s, h = 6.6 × 10⁻³⁴ J s, f₀ = 5.5 × 10¹⁴ Hz, ϕ = 2.28 eV = 3.64 × 10⁻¹⁹ J; three graph traps. Stops before matter waves, de Broglie and wave-particle duality (later lesson), and before relativity (v12).

## Decisions

- **Learner question (route wording kept, "the" added in narration).** "How do photoelectric graphs reveal Planck constant and work function?" The answer, built in order: energy conservation gives K_max = hf − ϕ (2); a stopping voltage measures K_max (3, 4); the equation is a straight line in f, so the gradient is h and the intercepts give f₀ and ϕ (5, 6); real data give h and ϕ (7 to 9).
- **Hook (site worked example "Millikan's Confirmation", re-staged).** The site's five sodium data pairs appear as a table; "hidden in these ten numbers". Millikan "fully expected it to fail" (site "Assess 6 marks": "Millikan undertook the work expecting to refute Einstein"). No 3 s prediction: the opening is a data puzzle, and the attempts carry the response opportunity (author note a).
- **Energy conservation (syllabus "applying the law of conservation of energy and the photon model").** Energy bar: hf = ϕ + K_max. "Maximum" explained: electrons from the surface lose least (site "Mistake 3"); deeper electrons leave slower.
- **Stopping voltage (site vocabulary "Stopping voltage ($V_s$)").** On screen "V_stop", not the site's "V_s", to avoid a clash with Module 6's transformer V_s (author note b). Mechanism: anode made negative; the electric field points from the cathode towards the negative anode, so the force on each (negative) electron points back towards the cathode, opposite its motion; electrons climb against the electric force (Revision 2: "against the electric force", not "against the electric field"); current falls; at V_stop the fastest just fail; W = qV (Module 6) gives eV_stop = K_max. The variable supply is the reused power pack plate with coded polarity.
- **Current-voltage graph (route "intensity effects").** Two curves at one frequency (brighter: higher plateau, same cut-off) and one at a higher frequency (cut-off further left). Revision 2 (brief 191 optional): the higher-frequency trace keeps the dim plateau height only because it is drawn at an equal incident photon rate; it is tagged "same photon rate (schematic)". Equal light power at a higher frequency would give fewer photons. The plateau is called "the current levels off when every freed electron is collected" (saturation is not named).
- **The line (site Figure 2 and "apply-einsteins-photon-model").** y = mx + c mapping on screen; gradient h; f-intercept f₀; vertical intercept −ϕ; the region below f₀ dashed (no electrons). Parallel lines for a second metal (site Figure 2, "Analyse 7 marks" step 7: "same gradient for every metal").
- **Worked example (site "Millikan's Confirmation" data unchanged).** f = 6.0 to 10.0 × 10¹⁴ Hz; V = 0.20, 0.61, 1.03, 1.44, 1.85 V. Gradient from the first and last points (site method): 1.65 / (4.0 × 10¹⁴) = 4.125 × 10⁻¹⁵ V s (Revision 2: the unrounded 4.125 is carried on screen through every later row, with "≈ 4.13" beside it; narration may say the rounded value); h = (4.125 × 10⁻¹⁵)(1.602 × 10⁻¹⁹) = 6.608 × 10⁻³⁴ J s, said "6.6"; data sheet 6.626. Intercepts: vertical = 0.20 − (4.125 × 10⁻¹⁵)(6.0 × 10¹⁴) = −2.275 V (said "about minus 2.28"), so ϕ = 2.275 eV ≈ 2.28 eV and ϕ = 2.275 × 1.602 × 10⁻¹⁹ = 3.645 × 10⁻¹⁹ J ≈ 3.64 × 10⁻¹⁹ J (site's given 2.28 eV); horizontal f₀ = 6.0 × 10¹⁴ − 0.20 / (4.125 × 10⁻¹⁵) = 5.515 × 10¹⁴ Hz ≈ 5.5 × 10¹⁴ Hz. Check hf₀ = (6.608 × 10⁻³⁴)(5.515 × 10¹⁴) = 3.645 × 10⁻¹⁹ J. Least-squares fit agrees (4.13 × 10⁻¹⁵ V s; f₀ 5.52 × 10¹⁴ Hz) and is author-only. Three stages, one at a time: gradient, h, intercepts.
- **Significance (site "Assess 6 marks" step 4).** One sentence: the same h from two unrelated phenomena (v09's glowing objects and this metal) convinced physicists. Millikan's own 1916 value (6.57 × 10⁻³⁴ J s) is author-only.
- **Traps (site "Common mistakes" and Exam Strategy).** Against frequency, not wavelength; ϕ is the size of the vertical intercept; intensity never moves the line.
- **Memory aid (scene 11): "Slope is h, for every metal. The intercepts belong to the metal."** See "Memory aid check".
- **Attempts (original, HSC style).** A1 (3 marks): a K_max (J) against f line through (1.00 × 10¹⁵ Hz, 2.0 × 10⁻¹⁹ J) meeting the f axis at 7.0 × 10¹⁴ Hz: h = 6.7 × 10⁻³⁴ J s; ϕ = 4.7 × 10⁻¹⁹ J = 2.9 eV. Crossed: ϕ = 2.0 × 10⁻¹⁹ J (reading a point's K_max as ϕ). A2 (3 marks): intensity doubled at the same frequency: V_stop unchanged, maximum photocurrent doubled, gradient unchanged. Crossed: "the stopping voltage doubles".
- **Significant figures.** Site data as given; h to two figures (from two-figure data), ϕ to three figures as the site gives sodium.
- **Handoff (route next).** Scene 16 bridges by year: the photon paper and the relativity paper are both 1905. A painted spacecraft `y12p-spacecraft-v1.png` with a coded light pulse ahead; tags "c measured on board?" and "c measured from Earth?"; chip "Next: why must observers agree on light speed?". See "Final frame".
- **Colour key (root decision 1):** photon energy amber; ϕ slate; K_max orange; data points navy; best-fit line ink; dashed extension grey; metal 2 line violet.
- **Colour key (Revision 2, fixed for every scene).** As above; electrons navy; the electric field arrow E ink, the force on an electron amber (forces stay amber); V_stop and the voltage slider ink, with an orange "K_max" partner (V_stop in volts equals K_max in eV); framed answers in a dark-ink box; crossed chips and their hand tags red. Hand-font tags take the colour of the quantity they mark.
- **Type sizes (Revision 2, 1080p).** Current working line at least 44 px (scenes 7 to 9 and the feedback rows 52 px; framed answers 56 px); live readouts (scene 3 voltage and current, scene 5 frequency marker: f, hf, K_max) about 52 px; data table 36 px; axis labels and intercept labels 30 to 36 px; hand-font tags at least 30 px; question text 36 px; key notes 34 px; nothing a student must read below 26 px. All text above the bottom 12% of the frame.
- **Anchor (Revision 2).** On "Here's data like his" the painted photocell and bench lamp (`y12p-photocell-v1.png`, `y12p-bench-lamp-v1.png`, brief 191, inspected 7 Nov) arrive at the left beside the data table, so the ten numbers come from a visible apparatus in the first 30 s; the same bench carries scenes 3 and 4. The painted spacecraft and exhaust (`y12p-spacecraft-v1.png`, `y12p-spacecraft-exhaust-v1.png`, brief 191, inspected 7 Nov) carry the handoff.
- **Simulation (Revision 2).** Two live controls. Scene 3: a reverse-voltage slider on the supply with live readouts (voltmeter V and ammeter I, 52 px) while electrons slow and turn back and a point rides the current-voltage curve, which draws live into scene 4's graph. Scene 5 (core): a frequency marker dragged along the K_max line (model: h = 6.626 × 10⁻³⁴ J s, ϕ = 2.28 eV) with live readouts f, hf and K_max: 5.51 × 10¹⁴ Hz gives 2.28 and 0 eV; 6.0 gives 2.48 and 0.20; 8.0 gives 3.31 and 1.03; 10.0 gives 4.14 and 1.86 eV (Python), close to the sodium table's 0.20, 1.03 and 1.85 V, which scene 7 then shows.
- **Question cards (Revision 2).** Each card arrives with its full text and a picture in one move (A1: the K_max against f graph; A2: the photocell bench with two beams of the same colour, one twice as wide). On the answer side the card shrinks to the top, a givens strip lists the data, a graph carries the answer (A1's graph with the dashed extension; A2's current-voltage sketch), results are framed and one classic slip is crossed.
- **Site sources used:** lesson 16: "apply-einsteins-photon-model" equations (E = hf, K_max = hf − ϕ, hf₀ = ϕ, eV_s = E_k,max) (2, 3, 5); Figure 2 (two metals, parallel lines) (5, 6); worked example "Millikan's Confirmation" (data, gradient, h, f₀) (1, 7 to 9); Figure 3 (7 to 9); "Mistake 1" and "Mistake 3" (2, 4, 10); Exam Strategy graph interpretation (10); MC ("work function from the y-intercept, ϕ = −e × intercept") (9); practice Q2(a) (A2 framing); "Assess 6 marks" (Millikan's intent, independent h) (1, 8). Not used: Activity 2's Millikan gradient question (duplicates scene 8); the 1240 shortcut.
- **Site notes (quoted from site lesson 16, read 6 Nov; for root to log in `../site-corrections-phys-y12.md` if accepted):**
  1. Inconsistency (new): Figure 3's text description says the line "rises to about 1.86 V at 10 × 10¹⁴ Hz"; the data table gives 1.85 V. Correction: "1.85 V".
  2. Precision (new): "Millikan intended to disprove Einstein but instead confirmed him perfectly." Millikan's 1916 value (6.57 × 10⁻³⁴ J s) agreed with Planck's to within about 1%, as the site's own "Assess 6 marks" says. Suggest "confirmed him to within about one per cent".
  3. Notation (new): the site writes E_k,max and V_s; the HSC data sheet writes K_max = hf − ϕ, and V_s is Module 6's secondary voltage. Suggest K_max and V₀ (or V_stop) for the stopping voltage.
  4. Checked and correct: gradient 4.13 × 10⁻¹⁵ V s (4.125); h = 6.6 × 10⁻³⁴ J s; f₀ = 5.52 × 10¹⁴ Hz; MC (ϕ = −e × intercept); Q1(d) 1.04 eV and Q2(b) metal A 2.03 eV, metal B no emission (with 1240 eV nm).
- **Cause chain taught, in order:** (1) one photon gives hf to one electron; the electron spends at least ϕ escaping and keeps the rest, so K_max = hf − ϕ (2); (2) a reverse voltage makes electrons climb, so the current falls to zero when eV equals the fastest electron's kinetic energy (3); (3) brightness changes the number of electrons, not their energy, so only the current's height changes (4); (4) K_max is linear in f, so the gradient is h and the intercepts are f₀ and −ϕ (5); (5) h is universal and ϕ belongs to the metal, so metals give parallel lines (6); (6) dividing by e turns K_max into V_stop, so the gradient of V_stop against f is h/e (7, 8).
- **Entry knowledge (route `entryKnowledge`):** v10 (photons, ϕ, f₀, intensity, eV); v09 (h); Module 6 (W = qV; electric field between plates); Year 11 and Mathematics (gradient, intercepts).
- **Learner-visible vocabulary (plain meaning at first use):** maximum kinetic energy K_max (the kinetic energy of the fastest photoelectrons, 2); stopping voltage V_stop (the reverse voltage that just stops the fastest electrons, 3); gradient, intercept (Year 11, recalled, 5); best-fit line (7).
- **Legacy logic ported:** none. Coded family `m7-photoelectric`'s graph layer is reused for the K_max line (it is a model prediction, not Millikan data, as its limits say); the stopping-voltage graph uses the site's data, labelled "data: site worked example (sodium)".
- **New explainer motion:** **stopping-voltage circuit** (the photocell with a reversible coded supply, electrons that slow and turn back on a field arrow, a current meter); **I-V graph** (three traces drawn live as the voltage dial turns); **K_max line plot** (draggable frequency marker, intercept labels, dashed extension, second-metal parallel line); **data plot** (five navy points plotted from the table one by one, best-fit line, rise and run triangle); `AlignedAlgebra`; `NumberTicker`; `Countdown` (10 s in scenes 12 and 14); `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; circuit or plot at centre left; algebra on the right; the data table top right in scenes 1 and 7 to 9; everything above the bottom 12% of the frame.
- **Author notes (not learner copy):**
  (a) No prediction countdown: the hook is a data reveal; a 3 s prediction ("what is the gradient?") would be a guess.
  (b) Stopping voltage symbol: HSC papers use V₀, V_s or V_stop; "V_stop" is unambiguous after Module 6.
  (c) Contact potentials shift measured stopping voltages slightly (Millikan corrected for them); this shifts the intercept, not the gradient. Not in learner copy.
  (d) The current-voltage graph's plateau is reached with a forward voltage; at zero voltage some current flows because electrons leave with kinetic energy.
  (e) Pronunciations: "V stop"; "h over e"; "f zero"; "phi" as "fye".
  (f) Rounding (Revision 2, brief 191 should fix): every row carries 4.125 × 10⁻¹⁵ V s, 6.608 × 10⁻³⁴ J s, −2.275 V, 5.515 × 10¹⁴ Hz and 3.645 × 10⁻¹⁹ J with guard digits, then rounds the result (6.6 × 10⁻³⁴ J s, 2.28 eV, 5.5 × 10¹⁴ Hz, 3.64 × 10⁻¹⁹ J). Revision 1's "2.28 × 1.602 × 10⁻¹⁹ = 3.64" (it gives 3.65) and the check "6.6 × 10⁻³⁴ × 5.5 × 10¹⁴" (it gives 3.63) are withdrawn. The five-point least-squares fit (4.130 × 10⁻¹⁵ V s, −2.278 V) stays author-only.
- **Open decisions for root:**
  - **1. Notation "V_stop".** Closed by root decision 3 (V_stop replaces V_s).
  - **2. Handoff bridge (root, learning review).** v11 to v12 jumps from quantum to relativity. The "same year, 1905" bridge with the spacecraft is short; an alternative is a plain module-section card ("Part 4: light and special relativity").
  - **3. Plate `y12p-spacecraft-v1`.** Closed: the ship and its exhaust layer were delivered in brief 191 and inspected (7 Nov).

Main question: *How can a graph of electron energies against light frequency measure a constant of nature and a property of a metal?*
Entry knowledge: photons, work function, threshold, intensity (v10); h (v09); W = qV (Module 6); gradients and intercepts.
Stops after: K_max = hf − ϕ by energy conservation, stopping voltage, current-voltage graphs, the K_max and V_stop lines, gradient h (or h/e), intercepts f₀ and ϕ, parallel lines, the sodium data. No matter waves.
Handoff: v12, why observers must agree on light speed.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *K_max*, *h*, *f*, *ϕ*, *f₀*, *V_stop*, *e*.

### 1. hook (ten numbers)
> Last time, we ended with an energy statement. A photon's energy pays the work function, and whatever is left becomes kinetic energy. In 1916, Robert Millikan set out to test that statement carefully, and he expected it to fail. Here's data like his, for a sodium surface. Five frequencies of light, and a voltage measured for each. Hidden in these ten numbers are Planck's constant and sodium's work function. So how do photoelectric graphs reveal Planck's constant and the work **function**?

Visual: opens on v10's final frame (see "Opening frame"); the chip becomes the heading: "How do photoelectric graphs reveal Planck's constant and work function?". On "pays the work function" the slate part of the energy bar pulses; on "becomes kinetic energy" the orange part pulses. On "Robert Millikan" a text tag "Millikan, 1916" (no portrait). On "he expected it to fail" a grey tag "expected: Einstein wrong". On "Here's data like his, for a sodium surface" the energy bar shrinks to the top left and the painted bench lamp and photocell (`y12p-bench-lamp-v1.png`, `y12p-photocell-v1.png`, about 460 px tall, solid) slide in at the left with a violet beam on the cathode; a coded table writes at the right (36 px), headed "sodium (site worked example)": "f (× 10¹⁴ Hz): 6.0, 7.0, 8.0, 9.0, 10.0" and "V_stop (V): 0.20, 0.61, 1.03, 1.44, 1.85". On "Five frequencies of light" the beam steps through five colours as each table row lights; navy pen arrow from the photocell to the table. On "Hidden in these ten numbers" the table pulses; two empty boxes appear under it, "h = ?" and "ϕ = ?", with an ink hand tag "hidden in here". On "function" the empty axes from v10 stay ready at the lower right.

### 2. energy conservation
> Start with energy conservation for one photon and one electron. The photon brings h f. The electron uses at least phi to get out of the metal, and keeps the rest as kinetic energy. Electrons right at the surface use the least, so they come out fastest, with the maximum kinetic energy, K max. Energy in equals energy out, so h f equals phi plus K max, or K max equals h f minus **phi**. That's the photoelectric equation on your data sheet.

Visual: board change: a coded metal surface at the left with one amber photon striking a surface electron and another striking an electron a little deeper. On "The photon brings h f" an amber bar "hf" at the right. On "uses at least phi" a slate segment "ϕ" fills the bar's lower part. On "keeps the rest as kinetic energy" the remainder turns orange, "kinetic energy". On "Electrons right at the surface use the least" the surface electron leaves with a long orange speed arrow, orange hand tag "surface: K_max"; the deeper electron leaves with a shorter arrow, tag "deeper: loses extra energy getting out". On "Energy in equals energy out" `AlignedAlgebra` "hf = ϕ + K_max" (52 px); amber pen bracket joining the bar to the equation, hand tag "energy in = energy out". On "phi" "K_max = hf − ϕ" in a dark-ink frame (56 px), tag "data sheet; energy conservation + photon model".

### 3. measuring K max: the stopping voltage
> But how do you measure the fastest electrons' energy? You push back on them. Connect a variable supply so the anode is negative, and the electrons have to climb against the electric force to reach it. Turn the voltage up, and fewer electrons make it, so the photocurrent **falls**. At one voltage, even the fastest electrons just fail, and the current drops to zero. That's the stopping voltage. The work done stopping an electron is its charge times the voltage, so e times V stop equals K **max**.

Visual: board change (a new set-up): the painted photocell `y12p-photocell-v1.png` at the centre (about 520 px tall) with a coded circuit through the power pack plate `phys-y11-low-voltage-supply-v1.png` (coded "+" and "−" labels: anode "−") and the multimeter plate `phys-y11-digital-multimeter-v1.png` as the ammeter; a second multimeter copy as a voltmeter across the tube (coded display "V"). The bench lamp `y12p-bench-lamp-v1.png` shines a violet beam on the cathode. Under the supply a live voltage slider with readouts (52 px) "V = ... V" (voltmeter) and "I = ..." (ammeter, a falling bar, no invented values). On "You push back on them" an ink field arrow "E" between the electrodes pointing from the cathode towards the negative anode, and on one electron an amber force arrow "F on electron" pointing back towards the cathode; tag "anode negative: electrons pushed back". On "climb against the electric force" electrons slow as they cross, some turning back; amber hand tag "force opposes motion". On "Turn the voltage up" the slider moves up and the voltmeter reads up; On "falls" the ammeter bar falls and a point starts to trace the current-voltage curve on a small graph at the right. On "even the fastest electrons just fail" the last electron stops just short of the anode and returns; the ammeter reads "0"; the voltmeter reading freezes, ink pen ring round it, tag "V_stop". On "The work done stopping an electron is its charge times the voltage" chip "W = qV (Module 6)". On "max" `AlignedAlgebra` "eV_stop = K_max" (52 px) in a dark-ink frame; orange hand tag "K_max in eV = V_stop in volts".

### 4. brightness and frequency on a current-voltage graph
> This gives a neat graph of photocurrent against voltage. Make the light brighter at the same frequency, and the current is bigger, because more photons free more electrons, but the stopping voltage doesn't **change**. Raise the frequency, and the stopping voltage gets **bigger**, because each photon gives more energy. Brightness sets the height of the graph. Frequency sets where the current hits **zero**.

Visual: camera continue (scenes 3 and 4 together about 67 s): the circuit shrinks to the left and the small graph from scene 3 grows to fill the right (about 900 px wide): current up, voltage along (reverse voltage to the left of zero, forward to the right). Trace 1 (navy, "f, dim") is the curve the slider traced: a plateau at the right, falling to zero at a point labelled "−V_stop". On "brighter at the same frequency" trace 2 (navy, thicker, "f, bright") draws with a plateau twice as high; On "change" both traces meet the axis at the same "−V_stop" point, tag "same V_stop". On "bigger" trace 3 (violet, "higher f, same photon rate") draws with the dim plateau height and a cut-off further left, violet hand tag "bigger V_stop" and a small grey tag "same photon rate (schematic)". On "Brightness sets the height" a navy pen bracket on the plateaus, hand tag "intensity: number of electrons". On "zero" an orange pen bracket on the cut-offs, hand tag "frequency: K_max".

### 5. a straight line
> Now plot K max against frequency. K max equals h f minus phi has the same form as y equals m x plus c. So the graph is a straight line, and its gradient is h, Planck's **constant**. Where the line crosses the frequency axis, K max is zero, so that's the threshold frequency, f **zero**. Extend the line back to the vertical axis, and it meets it at minus **phi**. The line only exists above f zero. Below that there are no electrons, so the extension is drawn dashed.

Visual: board change (a new set-up): v10's axes return large (about 1000 px wide), "K_max (eV)" up, "f (× 10¹⁴ Hz)" along. On "y equals m x plus c" the two equations stack (52 px), with matching colours: "K_max ↔ y", "h ↔ m", "f ↔ x", "−ϕ ↔ c". On "straight line" a solid ink line draws from the f axis upward (model: h = 6.626 × 10⁻³⁴ J s, ϕ = 2.28 eV), and a live frequency marker sits on it with readouts (52 px) "f", "hf" (amber) and "K_max" (orange): the marker slides 6.0, 8.0, 10.0 × 10¹⁴ Hz ("hf = 2.48, 3.31, 4.14 eV"; "K_max = 0.20, 1.03, 1.86 eV"), the energy bar from scene 2 beside it growing its orange part. On "constant" a rise and run triangle on the line, ink hand tag "gradient = h". On "zero" the marker slides down to the crossing ("f = 5.51 × 10¹⁴ Hz", "K_max = 0") and the point marks "f₀ (K_max = 0)", slate pen ring, tag "hf₀ = ϕ". On "phi" a grey dashed extension runs down to the vertical axis and marks "−ϕ" below the origin, slate hand tag "−ϕ". On "drawn dashed" the region left of f₀ shades grey, "no emission".

### 6. a second metal
> Test a second metal with a bigger work function. Its line starts at a higher threshold frequency, and sits lower, but it's exactly **parallel**. Every metal gives the same gradient, because h is a constant of nature, not a property of the metal. The work function belongs to the metal, so the intercepts **move**.

Visual: camera continue (scenes 5 and 6 together about 57 s). On "a second metal" a violet line labelled "metal 2 (larger ϕ)" draws to the right of the first. On "parallel" the gradient triangle copies onto it, identical; violet pen arrow between the two triangles, hand tag "same gradient h". On "constant of nature" tag "h: universal". On "move" the two f-intercepts ("f₀", "f₀′") and the two vertical intercepts ("−ϕ₁", "−ϕ₂") pulse; tag "ϕ: belongs to the metal".

### 7. worked example: the gradient
> Let's use the sodium data. Millikan plotted the stopping voltage, not K max. Divide the equation by e, and V stop equals h over e times f, minus phi over e. So the gradient of this graph is h over **e**. Using the first and last points, the rise is one point eight five minus zero point two zero, which is one point six five volts. The run is four point zero times ten to the fourteen hertz. So the gradient is four point one three times ten to the minus fifteen volt **seconds**.

Visual: board change to the working layout. The data plot at the left: "V_stop (V)" up, "f (× 10¹⁴ Hz)" along; the five navy points plot one by one from the table (top right, kept), and a best-fit line draws through them, tag "data: site worked example (sodium)". Task strip: "Find h, f₀ and ϕ for sodium." Equation strip: "K_max = hf − ϕ; eV_stop = K_max". Givens grouped: the table (data); "e = 1.602 × 10⁻¹⁹ C" (data sheet). On "Divide the equation by e" `AlignedAlgebra` "V_stop = (h/e) f − ϕ/e" (52 px). On "e" tag on the line "gradient = h/e"; beside it a chip "gradient = h" fades in and is crossed in red, red hand tag "V_stop graph: h/e". On "the rise is one point eight five minus zero point two zero" a rise bracket on the plot "1.85 − 0.20 = 1.65 V". On "four point zero times ten to the fourteen hertz" a run bracket "(10.0 − 6.0) × 10¹⁴ = 4.0 × 10¹⁴ Hz". On "seconds" "gradient = 1.65 / (4.0 × 10¹⁴) = 4.125 × 10⁻¹⁵ V s (≈ 4.13 × 10⁻¹⁵)" in a dark-ink frame (56 px); ink hand tag "keep 4.125".

### 8. worked example: Planck's constant
> Planck's constant is the gradient times e. Four point one three times ten to the minus fifteen, times one point six zero two times ten to the minus nineteen, is six point six times ten to the minus thirty four joule **seconds**. The data sheet value is six point six two six. A constant first found from glowing hot objects turns up again in electrons leaving a metal. That agreement helped convince physicists that photons were **real**.

Visual: "gradient = 4.125 × 10⁻¹⁵ V s" stays framed at the top (32 px); the stage 1 brackets fade. On "Planck's constant is the gradient times e" `AlignedAlgebra` "h = gradient × e" (52 px). On "seconds" "h = (4.125 × 10⁻¹⁵)(1.602 × 10⁻¹⁹) = 6.608 × 10⁻³⁴ ≈ 6.6 × 10⁻³⁴ J s" in a dark-ink frame (56 px); the "h = ?" box from scene 1 fills. On "six point six two six" a grey chip "data sheet: 6.626 × 10⁻³⁴ J s ✓". On "glowing hot objects" camera change (a new set-up): two panels side by side, each about 700 px wide: left, the painted bar heater (`y12p-bar-heater-v1.png`) with its coded glow and v09's black-body curve, amber tag "h"; on "electrons leaving a metal" right, the painted photocell with the sodium data line, amber tag "h"; an amber hand-drawn "=" joins them. On "real" amber pen ring round the "=", hand tag "same h, two unrelated effects".

### 9. worked example: threshold and work function
> Now the intercepts. Extend the line down to zero stopping voltage. It crosses the frequency axis at about five point five times ten to the fourteen hertz, sodium's threshold **frequency**. Extend it to the vertical axis, and it meets it at about minus two point two eight volts. So phi over e is two point two eight volts, and the work function is two point two eight electron **volts**, which is three point six four times ten to the minus nineteen joules. That matches sodium's accepted **value**.

Visual: camera change back to the data plot, zoomed out to include the origin (about 1000 px wide); "h = 6.608 × 10⁻³⁴ ≈ 6.6 × 10⁻³⁴ J s" stays framed at the top (32 px). On "Extend the line down to zero stopping voltage" a grey dashed extension runs down to the f axis. On "frequency" the crossing marks "f₀ ≈ 5.5 × 10¹⁴ Hz", slate pen ring; check line (44 px) "f₀ = 6.0 × 10¹⁴ − 0.20 / (4.125 × 10⁻¹⁵) = 5.515 × 10¹⁴ ≈ 5.5 × 10¹⁴ Hz", framed. On "Extend it to the vertical axis" the dashed line continues to the vertical axis; "intercept = 0.20 − (4.125 × 10⁻¹⁵)(6.0 × 10¹⁴) = −2.275 V ≈ −2.28 V" (52 px). On "volts" `AlignedAlgebra` "−ϕ/e = −2.275 V → ϕ = 2.275 eV ≈ 2.28 eV" in a dark-ink frame (56 px); the "ϕ = ?" box fills; beside it a chip "ϕ = −2.28 eV" fades in and is crossed in red, red hand tag "ϕ is the size". On "joules" "ϕ = 2.275 × 1.602 × 10⁻¹⁹ = 3.645 × 10⁻¹⁹ ≈ 3.64 × 10⁻¹⁹ J", framed (check line "= hf₀ = (6.608 × 10⁻³⁴)(5.515 × 10¹⁴) = 3.645 × 10⁻¹⁹ J ✓"). On "value" a grey chip "sodium: ϕ = 2.28 eV (site value) ✓".

### 10. three graph traps
> Three traps. Plot against frequency, not wavelength, because only frequency gives a straight line. The work function is the size of the vertical intercept, so drop the minus **sign**. And brighter light never moves the line. It only changes the **current**.

Visual: board clears to a three-row trap card (about 1400 px wide; each row a small graph at least 300 px wide beside its text, 40 px). On "Plot against frequency, not wavelength" a small K_max against λ sketch (a falling curve, not a line) is crossed in red beside a straight K_max against f line, red hand tag "f, not λ". On "sign" the intercept "−ϕ" with a slate pen arrow "ϕ = size of intercept (positive)". On "current" the K_max line with two intensity labels "dim" and "bright" sitting on the same line; navy hand tag "intensity: current only".

### 11. a way to remember
> Here's a way to remember it. The slope is h, for every metal. The intercepts belong to the **metal**.

Visual: clear change: the two parallel lines return (about 900 px wide). On "The slope is h, for every metal" the two gradient triangles pulse together. On "metal" the intercepts pulse. A framed memory card writes above in hand lettering (52 px, ink and slate; the same card is reused on the notes screen): "Slope is h, for every metal. The intercepts belong to the metal." Hold about 2 seconds.

### 12. attempt 1 (countdown, 10 seconds)
> Your turn. The graph shows the maximum kinetic energy of photoelectrons against the frequency of the light, for one metal. The line passes through one point zero zero times ten to the fifteen hertz, at two point zero times ten to the minus nineteen joules, and meets the frequency axis at seven point zero times ten to the fourteen hertz. Use the graph to find a value for Planck's constant, and the work function of the metal, in joules and electron volts. Pause here to answer.

Visual: `QuestionCard` (subject "Physics") arrives with its full text and its graph in one move (question text 36 px), worded as printed: "The graph shows the maximum kinetic energy, K_max, of photoelectrons emitted from a metal against the frequency, f, of the incident light. (a) Use the graph to determine a value for Planck's constant. (b) Determine the work function of the metal, in joules and in electron volts. (3 marks)" A coded graph (about 560 px wide, axis labels 30 px): K_max (× 10⁻¹⁹ J) up to 3.0, f (× 10¹⁴ Hz) from 0 to 12; a straight line from (7.0, 0) through (10.0, 2.0), with those two points marked and gridlines; no extension drawn. Data chip "1 eV = 1.602 × 10⁻¹⁹ J". The full question stays on screen. Countdown ring full from "Pause here to answer." for 10 seconds. Nothing answer-bearing.

### 13. feedback 1 (brief)
> The gradient is two point zero times ten to the minus nineteen, over three point zero times ten to the fourteen, which is six point seven times ten to the minus thirty four joule seconds, a value for **h**. At the threshold, phi equals h f zero, which is four point seven times ten to the minus nineteen joules, or two point nine electron **volts**. The slip is reading a point's K max as the work function. It comes from the **intercept**.

Visual: card shrinks to the top; the two marked points and the f-intercept underline. A givens strip (36 px): "(10.0 × 10¹⁴ Hz, 2.0 × 10⁻¹⁹ J)", "f₀ = 7.0 × 10¹⁴ Hz", "1 eV = 1.602 × 10⁻¹⁹ J". The graph grows at the right (about 560 px). On "h" "(a) h = gradient = (2.0 × 10⁻¹⁹ − 0) / ((10.0 − 7.0) × 10¹⁴) = 6.67 × 10⁻³⁴ ≈ 6.7 × 10⁻³⁴ J s" (52 px), framed; rise and run brackets on the graph. On "volts" "(b) ϕ = hf₀ = (6.67 × 10⁻³⁴)(7.0 × 10¹⁴) = 4.67 × 10⁻¹⁹ ≈ 4.7 × 10⁻¹⁹ J; (4.67 × 10⁻¹⁹) / (1.602 × 10⁻¹⁹) = 2.9 eV", framed; the graph's dashed extension draws to "−4.7 × 10⁻¹⁹ J" on the vertical axis as a check, slate pen ring. On "intercept" a chip "ϕ = 2.0 × 10⁻¹⁹ J" fades in and is crossed in red (red hand tag "a point's K_max is not ϕ"). Hold about 1 second.

### 14. attempt 2 (countdown, 10 seconds)
> Last one. The same light is made twice as intense, with no change in frequency. State the effect on the stopping voltage, on the largest photocurrent, and on the gradient of the stopping voltage against frequency graph. Explain each. Pause here to answer.

Visual: `QuestionCard` arrives with its full text and picture in one move (question text 36 px), worded as printed: "In a photoelectric experiment, the intensity of the incident light is doubled while its frequency is kept constant. State and explain the effect on: (a) the stopping voltage; (b) the maximum photocurrent; (c) the gradient of a graph of stopping voltage against frequency. (3 marks)" Picture: the painted bench lamp and photocell (about 300 px tall) with two violet beams of the same colour, the second twice as wide, tags "same f" and "intensity × 2". The full question stays on screen. Countdown ring full from "Pause here to answer." for 10 seconds. Nothing answer-bearing.

### 15. feedback 2 (brief)
> The stopping voltage is unchanged, because each photon still has the same energy, so K max is the **same**. The largest photocurrent doubles, because twice as many photons free twice as many **electrons**. The gradient is unchanged, because it's h over e, a constant. The slip is saying the stopping voltage **doubles**.

Visual: card shrinks to the top; "intensity of the incident light is doubled" and "frequency is kept constant" underline. A givens strip (36 px): "same f", "intensity × 2". The current-voltage sketch (about 560 px) at the right. On "same" "(a) V_stop unchanged: hf unchanged → K_max unchanged" (44 px), framed; the cut-off point pulses with an orange pen ring. On "electrons" "(b) maximum photocurrent × 2: photons per second × 2", framed; the sketch draws the doubled plateau with the same cut-off. On "doubles" "(c) gradient = h/e, unchanged", framed, and a chip "V_stop doubles" fades in and is crossed in red (red hand tag "intensity changes number, not energy"). Hold about 1 second.

### 16. handoff
> So light arrives in photons of energy h f, and Millikan's graphs measured h. Einstein's photon paper came in 1905, and in the same year he asked a very different question about light. If a spacecraft races after a pulse of light, does the light seem to slow down? So why must observers agree on light **speed**?

Visual: board clears (camera change). On "Millikan's graphs measured h" a small parallel-line plot with "gradient = h" at the top left. On "in the same year" a tag "1905: photons, and relativity" (text only). On "If a spacecraft races after a pulse of light" the painted spacecraft `y12p-spacecraft-v1.png` (about 900 px wide) slides in from the left, with a small exhaust layer `y12p-spacecraft-exhaust-v1.png` glowing briefly; an amber coded light pulse travels ahead of it to the right; a speed tag on the ship "v = 0.8c". On "does the light seem to slow down" two tags appear by the pulse: "c measured on board?" and "c measured from Earth?". On "speed" the chip "Next: why must observers agree on light speed?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 17. key notes (quiet, hold about 45 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Energy conservation: K_max = hf − ϕ.
2. Stopping voltage: eV_stop = K_max.
3. Brighter: more current, same V_stop.
4. K_max against f: gradient h, f-intercept f₀, y-intercept −ϕ.
5. V_stop against f: gradient h/e, same for every metal.

Memory aid (framed card under the notes, hand lettering as in scene 11): *Slope is h, for every metal. The intercepts belong to the metal.* Notes in the role colours, 34 px; about 230 characters of bullet text; no paragraphs.

## Teaching checks

- **Does it explain causes?** Why K_max = hf − ϕ: energy conservation for one photon and one electron (2). Why a maximum: surface electrons lose least (2). Why the current falls with reverse voltage: the electric force on each electron opposes its motion, so it climbs against that force (3). Why brightness changes only the current (4). Why the gradient is h and the same for every metal (5, 6). Why the stopping-voltage gradient is h/e (7).
- **Misconceptions addressed:** a point's K_max is ϕ (13 crossed); brighter light raises V_stop (4, 15 crossed); plotting against wavelength (10); the intercept sign (10); h depends on the metal (6).
- **One idea at a time:** the equation (2), measuring it (3), the I-V graph (4), the line (5), two metals (6), the data in three stages (7 to 9), traps (10).
- **Video makes it easier:** electrons turning back as the reverse voltage rises (3); the I-V traces sharing a cut-off (4); the gradient triangle copied between parallel lines (6); the h from v09's curve and from this data joined by an equals sign (8).
- **Response opportunity:** two unseen HSC-style tasks with every condition visible, 10 s each; nothing answer-bearing. One crossed mistake each; feedback about 29 s and 23 s.
- **Avoided double teaching:** photons and ϕ (v10), h (v09), W = qV (Module 6) recalled in a clause.
- **Syllabus coverage:** `P7-IQ3-03`: K_max = hf − ϕ in metals (2, 5, 9, 12, 13) by conservation of energy (2) and the photon model (2, 4, 15).
- **Out of scope by design:** matter waves and de Broglie; wave-particle duality; Compton scattering; contact potentials (author note c).

## Practice questions and model answers

**Attempt 1 (scene 12; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "The graph shows the maximum kinetic energy, K_max, of photoelectrons emitted from a metal against the frequency, f, of the incident light. (a) Use the graph to determine a value for Planck's constant. (b) Determine the work function of the metal, in joules and in electron volts." (Graph: straight line from 7.0 × 10¹⁴ Hz on the f axis through 1.00 × 10¹⁵ Hz, 2.0 × 10⁻¹⁹ J.)
Model answer: (a) h = gradient = (2.0 × 10⁻¹⁹ − 0) / ((10.0 − 7.0) × 10¹⁴) = 6.67 × 10⁻³⁴ ≈ 6.7 × 10⁻³⁴ J s. (b) At f₀, K_max = 0, so ϕ = hf₀ = (6.67 × 10⁻³⁴)(7.0 × 10¹⁴) = 4.67 × 10⁻¹⁹ ≈ 4.7 × 10⁻¹⁹ J; (4.67 × 10⁻¹⁹) / (1.602 × 10⁻¹⁹) = 2.9 eV (equivalently, the extended line meets the K_max axis at −4.7 × 10⁻¹⁹ J). Classic mistake (crossed): ϕ = 2.0 × 10⁻¹⁹ J.

**Attempt 2 (scene 14; original wording, HSC style, 3 marks).** "In a photoelectric experiment, the intensity of the incident light is doubled while its frequency is kept constant. State and explain the effect on: (a) the stopping voltage; (b) the maximum photocurrent; (c) the gradient of a graph of stopping voltage against frequency."
Model answer: (a) Unchanged: each photon still has energy hf, so K_max = hf − ϕ and eV_stop = K_max are unchanged. (b) Doubles: twice as many photons per second free twice as many electrons per second. (c) Unchanged: the gradient is h/e, which depends on constants only. Classic mistake (crossed): "V_stop doubles".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Constants (HSC data sheet) | h = 6.626 × 10⁻³⁴ J s; e = 1.602 × 10⁻¹⁹ C; 1 eV = 1.602 × 10⁻¹⁹ J | 3, 7 to 9, 12, 13 |
| Site data (sodium) | f = 6.0, 7.0, 8.0, 9.0, 10.0 × 10¹⁴ Hz; V_stop = 0.20, 0.61, 1.03, 1.44, 1.85 V | 1, 7 to 9 |
| Gradient | 1.65 / (4.0 × 10¹⁴) = 4.125 × 10⁻¹⁵ V s (carried unrounded; ≈ 4.13 shown beside it); least squares 4.130 × 10⁻¹⁵ (author only) | 7, 8 |
| h | (4.125 × 10⁻¹⁵)(1.602 × 10⁻¹⁹) = 6.608 × 10⁻³⁴ J s ≈ 6.6 × 10⁻³⁴ | 8 |
| Intercepts | vertical 0.20 − (4.125 × 10⁻¹⁵)(6.0 × 10¹⁴) = −2.275 V ≈ −2.28 V; f₀ = 6.0 × 10¹⁴ − 0.20 / (4.125 × 10⁻¹⁵) = 5.515 × 10¹⁴ Hz ≈ 5.5 × 10¹⁴ | 9 |
| ϕ | 2.275 eV ≈ 2.28 eV; 2.275 × 1.602 × 10⁻¹⁹ = 3.645 × 10⁻¹⁹ J ≈ 3.64 × 10⁻¹⁹ J; check hf₀ = (6.608 × 10⁻³⁴)(5.515 × 10¹⁴) = 3.645 × 10⁻¹⁹ J (Revision 2: the rounded 2.28 × 1.602 × 10⁻¹⁹ row, which gives 3.65, is no longer shown) | 9 |
| A1 | gradient (2.0 × 10⁻¹⁹) / (3.0 × 10¹⁴) = 6.67 × 10⁻³⁴ ≈ 6.7 × 10⁻³⁴ J s; ϕ = (6.67 × 10⁻³⁴)(7.0 × 10¹⁴) = 4.67 × 10⁻¹⁹ J = 2.91 eV | 12, 13 |
| Frequency marker (Revision 2; model h = 6.626 × 10⁻³⁴ J s, ϕ = 2.28 eV) | f₀ = 5.51 × 10¹⁴ Hz; 6.0: hf 2.48 eV, K_max 0.20 eV; 8.0: 3.31, 1.03; 10.0: 4.14, 1.86 eV | 5 |
| Crossed slips (Revision 2) | "gradient = h" for the V_stop graph (7); "ϕ = −2.28 eV" (9) | 7, 9 |
| A2 | V_stop unchanged; current × 2; gradient h/e = 4.136 × 10⁻¹⁵ V s unchanged | 14, 15 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov, `numbers.py` in the session scratchpad); Codex to re-check.

- (1.85 − 0.20)/(10.0e14 − 6.0e14) = 4.125e-15; × 1.602e-19 = 6.608e-34; × 1.60e-19 = 6.60e-34.
- 0.20 − 4.125e-15 × 6.0e14 = −2.275; 6.0e14 − 0.20/4.125e-15 = 5.515e14; 2.275 × 1.602e-19 = 3.645e-19; 6.608e-34 × 5.515e14 = 3.644e-19.
- Least squares on the five points: slope 4.130e-15, intercept −2.278, f₀ 5.516e14.
- 2.0e-19/3.0e14 = 6.667e-34; × 7.0e14 = 4.667e-19; /1.602e-19 = 2.913.
- h/e = 6.626e-34/1.602e-19 = 4.136e-15.
- Revision 2 (7 Nov, Python): marker f₀ = 2.28 × 1.602e-19 / 6.626e-34 = 5.512e14 Hz; hf at 6.0e14, 8.0e14, 10.0e14 Hz = 2.482, 3.309, 4.136 eV; K_max = 0.202, 1.029, 1.856 eV. Sodium chain with guard digits: 4.125e-15 → 6.608e-34 → −2.275 V → 5.515e14 Hz → 3.6446e-19 J.

## Memory aid check

- **"Slope is h, for every metal. The intercepts belong to the metal."** Meaning, as said in scene 11: on a K_max against f graph the gradient is Planck's constant for all metals, while the f-intercept (f₀) and the vertical intercept (−ϕ) depend on the metal. Assumptions checked: the graph must be K_max (in J) against f; on a V_stop against f graph the slope is h/e (said in scene 7 and in the key notes); with K_max in eV the slope is h in eV s (4.14 × 10⁻¹⁵ eV s), still the same for every metal. It helps a new case: A1 (h from the gradient, ϕ from the intercept) and A2(c). Introduced after the explanation (5 to 9).
- **Considered, not used:** "h is the hill, phi is the floor" (cute, but "floor" suggests a positive intercept).

## Narration length estimate

Revision 2 count (7 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed; total = sum of scene strings; scene 3 changes "field" to "force", same length): **6,158 characters**, 17 scenes. Characters per scene (1 to 17): 488, 436, 491, 396, 455, 305, 472, 430, 487, 249, 97, 479, 428, 255, 308, 307, 75. At 13.3 characters per second the speech is about 463 s; add about 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 40 s more of the quiet notes hold (45 s in all; about 66 s of holds and countdowns; the scene 3 and 5 controls run under their narration): **about 529 s**, inside the 5,500 to 7,000 character band and under the 570 s cap. Revision 1: about 544 s. Reserve trims if the voiced take runs long: scene 8's two-phenomena sentence (keep the inset); scene 4's last two sentences (keep the brackets); feedback 1's electron-volt clause (keep it on screen).

## Opening frame

v10's final frame (designed in this wave, `phys-y12-m7-v10.md`): paper background; heading "Why can bright low-frequency light fail to eject electrons?"; at the left a coded zinc surface with one amber photon packet "hf" striking one navy electron; in the middle a vertical energy bar "hf (4.96 eV)" split into a slate lower part "ϕ (4.3 eV)" and an orange upper part "left over: kinetic energy"; the equation "K_max = hf − ϕ"; on the right empty axes, "K_max" up and "f" along, with a "?"; chip "Next: how do photoelectric graphs reveal Planck's constant and work function?". Scene 1 turns the chip into the heading and keeps the bar and axes.

## Final frame

The last explained frame (end of scene 16, before the key-notes board): paper background; heading "How do photoelectric graphs reveal Planck's constant and work function?"; at the top left a small coded plot of two parallel K_max against f lines labelled "gradient = h"; a text tag "1905: photons, and relativity"; at the centre left the painted spacecraft `y12p-spacecraft-v1.png` facing right, with a speed tag "v = 0.8c" (exhaust layer faded out); an amber coded light pulse ahead of it to the right, with two tags "c measured on board?" and "c measured from Earth?"; chip "Next: why must observers agree on light speed?". v12 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m7-v11` (route phys-y12-m7-v11). Suggested explainer folder `src/explainer/lessons/phys-y12-m7-v11` and build folder `docs/production/claude-pm/lessons/p-y12-m7-v11` (root to confirm).

In order (kebab-case; 17 scene headings, all `### N.`): hook, energy-conservation, stopping-voltage, iv-graph, straight-line, two-metals, worked-gradient, worked-planck, worked-intercepts, graph-traps, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: stopping-voltage circuit, I-V graph, K_max line plot, data plot, energy bars, `AlignedAlgebra`, `NumberTicker`, `PenArrow`, `Countdown`, `CameraStage`. Transitions (`pickTransition`, Revision 2): 1 to 2 clear change; 2 to 3 clear change to the circuit; 3 to 4 camera continue (about 67 s in all); 4 to 5 clear change to the line plot; 5 to 6 camera continue (about 57 s); 6 to 7 clear change to working; 7 to 8 camera continue; a camera change inside 8 to the two-panel "same h" stage; 8 to 9 camera change back to the zoomed-out data plot; no set-up runs past about 70 s; 9 to 10 clear change; 10 to 11 camera continue; attempts and feedback card shrink to the top; 15 to 16 clear change; 16 to 17 fade to the notes board.

Holds: memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 45 s). Review evidence paths: `learning_review` = `checks/p-y12-m7-v11-learning-review.md`, `science_check` = `checks/p-y12-m7-v11-physics-check.md`.

## Assets

Have (inspected 6 Nov on a session contact sheet; scaled uniformly only, never stretched):
- `public/assets/physics/phys-y11-low-voltage-supply-v1.png` (1600 × 1000, RGBA): the variable supply, polarity labels coded (3).
- `public/assets/physics/phys-y11-digital-multimeter-v1.png` (1086 × 1448, RGBA): ammeter and voltmeter (two copies), displays coded (3).
- `public/assets/physics/y12p-photocell-v1.png` (1073 × 1466) and `y12p-bench-lamp-v1.png` (1484 × 1060), both RGBA, delivered in brief 191 and inspected 7 Nov: 1, 3, 4, 8, A2 card.
- `public/assets/physics/y12p-bar-heater-v1.png` (1586 × 992; brief 191, inspected 7 Nov): the "same h" panel (8), with v09's coded glow overlay.
- `public/assets/physics/y12p-spacecraft-v1.png` and `y12p-spacecraft-exhaust-v1.png` (2048 × 768 each, same canvas; brief 191, inspected 7 Nov: long white hull, rounded nose, dish on top, two edge-on solar wings, nozzle at the left; Codex anchors nozzle opening about (306, 420)): 16; v12 to v15.
- **Checked, not used:** `phys-y11-light-meter-v1.png` (intensity is shown by beam width and the current, not a meter reading); `phys-y11-rocket-v1.png` (a missile-like rocket; the relativity scenes need a spacecraft, plate below).

Need (new plates): none (Revision 2).

Coded: circuit wiring and polarity, field arrow, electrons, I-V graph, K_max and V_stop plots, data table, gradient triangles, energy bars, light pulse, calculation strips, crossed chips, countdowns, key notes board.

Kit gaps (for the v11 build brief):
1. **Stopping-voltage circuit.** Reverse supply that slows electrons by eV; electrons with a spread of energies up to K_max (dots do not all carry K_max, per `m7-photoelectric`'s limits); ammeter reading from the number reaching the anode.
2. **Data plot.** Points plotted from a table, a best-fit line, rise and run brackets, dashed extensions to both axes with intercept labels.

## Codex asset brief

Revision 2: no open request; both plates were delivered in brief 191 and are kept here for the record.

1. **`y12p-spacecraft-v1.png`** (delivered). A painted uncrewed spacecraft, side view facing right: a long cylindrical hull (white and pale grey panels), a rounded nose, a small communications dish on top, two fixed solar panel wings seen edge-on, a single engine nozzle at the rear (left). No windows, no cockpit, no crew, no people or hands, no flags, no text, logos or numbers. Plausible near-future probe, clean and simple so coded light clocks and rulers can be overlaid on the hull's side. Transparent PNG with alpha channel, about 2400 × 900, object centred with even margins, soft shadow inside the alpha only. Style: match `phys-y11-rocket-v1.png` and `phys-y11-earth-v1.png` (painted, neutral lighting, clean edges). Must read clearly at 25% and 70% of frame width; v14 shows it at two horizontal scales (contraction is drawn by the coded overlay, never by stretching the plate: see v14's build note).
2. **`y12p-spacecraft-exhaust-v1.png`** (new). A separate transparent layer: a pale blue-white engine exhaust plume, pixel-aligned to plate 1's nozzle (same canvas size), so it can fade in and out over the ship. No flames reaching the hull. Transparent PNG with alpha channel.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text and attempts against the "Numbers used" table.
2. Confirm the physics of every learner-visible claim: K_max = hf − ϕ by energy conservation; surface electrons have K_max; the stopping-voltage mechanism and eV_stop = K_max; the I-V graph shapes (intensity changes the plateau, frequency the cut-off); gradient h, intercepts f₀ and −ϕ; parallel lines; the V_stop gradient h/e; Millikan's 1916 measurement and his expectation; "agreement helped convince physicists that photons were real".
3. Confirm the memory aid's assumptions (see "Memory aid check").
4. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
5. Confirm both attempt cards are original in wording, carry every condition (A1's graph values) and show nothing answer-bearing.
6. Confirm the syllabus quote matches the route JSON exactly and is labelled 2017.
7. Confirm no person, hand, face or body outline is drawn or requested (the spacecraft has no windows or crew).
8. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
9. Confirm the narration character count and per-scene counts by script with the build parser rules.
10. Report site notes 1 to 3 under Decisions to root.
11. Revision 2: confirm "against the electric force" (3) with the field arrow from the cathode towards the negative anode and the force arrow opposite the motion; the guard-digit chain (4.125, 6.608, −2.275, 5.515, 3.645) in scenes 7 to 9; the grouped denominators (7, 9, 13, A1 model answer); the frequency-marker readouts (5); the "same photon rate (schematic)" tag (4); the crossed slips (7, 9).

## YouTube metadata (draft)

Title: Photoelectric Graphs: Finding Planck's Constant and the Work Function | HSC Physics Module 7

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module7/lesson16.sa.html

Five frequencies, five stopping voltages, and hidden inside them are Planck's constant and a metal's work function. Derive K_max = hf − ϕ from energy conservation, see how a stopping voltage measures the fastest electrons, read current-voltage graphs, and use the gradient (h) and intercepts (f₀ and ϕ) of a photoelectric graph, with sodium data worked step by step. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 7: The Nature of Light.
Syllabus content (NSW Physics Stage 6, 2017):
"analyse the photoelectric effect Kmax = hf − ϕ as it occurs in metallic elements by applying the law of conservation of energy and the photon model of light, (ACSPH119)"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: the photoelectric effect. Next: Einstein's postulates and the speed of light.

#HSCPhysics #Physics #PhotoelectricEffect #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v10; check that the stopping-voltage mechanism lands before eV_stop = K_max is used; that the y = mx + c mapping is clear; that the three worked stages stay separate; that the handoff's jump to relativity does not confuse), then the physics check and the Codex error check.
- Electrons turning back in the tube, the shared I-V cut-off and the copied gradient triangle carry the explanation; judge them at playback speed in the voiced preview.

## Revision 2 (7 Nov 2026)

Brief 191 findings (`checks/p-y12-m7-v11-learning-review.md`, `checks/p-y12-m7-v11-science-check.md`): 0 blockers, 3 should fix, 1 optional.
- **Should fix, scene 3 force direction.** Resolved: narration now says "the electrons have to climb against the electric force to reach it" (same length). On screen the ink field arrow E points from the cathode towards the negative anode and an amber "F on electron" arrow points back towards the cathode, opposite the motion; hand tag "force opposes motion". Decisions and teaching checks updated.
- **Should fix, sodium rounding (scenes 7 to 9).** Resolved: one unrounded chain is carried on screen with guard digits: gradient 4.125 × 10⁻¹⁵ V s (≈ 4.13), h = (4.125 × 10⁻¹⁵)(1.602 × 10⁻¹⁹) = 6.608 × 10⁻³⁴ ≈ 6.6 × 10⁻³⁴ J s, intercept −2.275 V, f₀ = 5.515 × 10¹⁴ Hz, ϕ = 2.275 × 1.602 × 10⁻¹⁹ = 3.645 × 10⁻¹⁹ ≈ 3.64 × 10⁻¹⁹ J, check hf₀ = (6.608 × 10⁻³⁴)(5.515 × 10¹⁴) = 3.645 × 10⁻¹⁹ J (Python, matching Codex). The rounded narration stays. Author note (f).
- **Should fix, grouped denominators (scenes 7, 9 and 13).** Resolved: "1.65 / (4.0 × 10¹⁴)", "0.20 / (4.125 × 10⁻¹⁵)", "(2.0 × 10⁻¹⁹ − 0) / ((10.0 − 7.0) × 10¹⁴)", and the A1 model answer and Numbers tables. No speech change.
- **Optional, scene 4 plateau.** Resolved: the higher-frequency trace is labelled "higher f, same photon rate" with a grey tag "same photon rate (schematic)"; the Decisions line explains that equal light power would give fewer photons.

Visual upgrade (to `../maths-visual-standard.md` and the build gate):
- Decisions gain "Colour key (Revision 2)", "Type sizes", "Anchor", "Simulation" and "Question cards".
- Plates: the photocell and bench lamp (brief 191) now arrive in scene 1 with the data table, so the numbers come from a visible apparatus; they carry 3, 4 and the A2 card. Scene 8's "same h" panel pairs v09's painted bar heater with the photocell. The spacecraft and exhaust (brief 191) carry the handoff.
- Live controls: scene 3's reverse-voltage slider (voltmeter and ammeter readouts, electrons turning back, a point tracing the current-voltage curve that becomes scene 4's graph); scene 5's core frequency marker on the K_max line with live f, hf and K_max readouts (Python: 6.0, 8.0, 10.0 × 10¹⁴ Hz give K_max 0.20, 1.03, 1.86 eV; f₀ 5.51 × 10¹⁴ Hz).
- Stage changes: scenes 7 to 9 were one data board for about 104 s; scene 8 now cuts to the two-panel "same h" stage and scene 9 returns to a zoomed-out plot. No set-up runs past about 70 s.
- Hand tags and a pen mark in role colours in every teaching scene ("hidden in here", "surface: K_max", "energy in = energy out", "force opposes motion", "K_max in eV = V_stop in volts", "bigger V_stop", "intensity: number of electrons", "frequency: K_max", "gradient = h", "−ϕ", "same gradient h", "keep 4.125", "same h, two unrelated effects", "ϕ is the size", "f, not λ", "intensity: current only"; pen rings, brackets and arrows on the voltmeter, plateaus, cut-offs, f₀, the "=" and the answers).
- Framed answers: K_max = hf − ϕ (2), eV_stop = K_max (3), gradient (7), h (8), f₀, ϕ in eV and in J (9), both A1 rows (13), all three A2 rows (15). New crossed slips: "gradient = h" for a V_stop graph (7) and "ϕ = −2.28 eV" (9).
- Question cards arrive with full text and a picture in one move (A1 graph; A2 painted lamp and photocell with two beams); the answer side has a givens strip and a graph.
- Key notes cut from five long items (about 600 characters) to five short bullets (about 230 characters) with the framed memory card; quiet notes hold 60 s to 45 s.
- Type sizes stated; colour roles fixed.

New plate requests: none.

Joins: the opening is v10's final frame, unchanged in v10 Revision 2. The final frame (scene 16) is unchanged except that the ship is sized (about 900 px wide), so the v12 join holds.

Counts: 6,158 to 6,158 characters (scene sum; scene 3 word swap of equal length); about 544 s to about 529 s.
