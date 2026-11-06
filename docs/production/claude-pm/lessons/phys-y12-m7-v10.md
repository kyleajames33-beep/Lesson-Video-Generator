# Year 12 Physics M7 V10: The photoelectric effect. Why can bright low-frequency light fail to eject electrons? (design)

Status: Revision 2 (7 Nov 2026): brief 191 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 6,277 characters, 18 scenes, about 541 s, counted by script with the build parser rules (total = sum of scene strings; see "Narration length estimate"). Opens on v09's final frame.

Scope: tenth video of Year 12 Physics Module 7 (The Nature of Light, Physics Stage 6, 2017 syllabus), inquiry question "What evidence supports the particle model of light and what are the implications of this evidence for the development of the quantum model of light?". Templates as `phys-y12-m6-v13.md`; `math-a12-d10.md` for the calculation layout. No pre-design pack exists; the pack work is done here (2017 wording from the ledger, site givens kept, every number recalculated in Python with HSC data-sheet constants, original attempts, asset reuse). Site lessons read in full (6 Nov, read-only, through the brief 168 text extracts, hashes checked against the live files): lesson 16, orient and predict (dim UV and bright red lamps on zinc, warm-up, intentions, vocabulary: photon, work function, threshold frequency, stopping voltage, photocurrent), "observe-what-the-wave-model-cannot-explain" (three observations, Figure 1 apparatus, Stop and Check 2.3 eV), "apply-einsteins-photon-model" (four equations, E_k,max against f graph, Stop and Check sodium, MC 3.0 eV), "derive-planck-constant-from-millikans-data", common mistakes, apply and consolidate (Activities 1 and 2 including the 1 W m⁻² delay estimate, "Analyse 7 marks", "Assess 6 marks"), practice Q1 and Q2, reflect: `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson16.sa.html`, SHA256 `ee650dbe40253bac16a45b31df6585aa1a0a361df1ea623162ea33ec6b660806`; lesson 10 (read in full for v09; section "wave-model-crisis" used here): SHA256 `3c6b866e16c1a9a0da5fd4b379c32c64cd1abbb96412642f19fdcb41efca4bc1` (both recomputed 6 Nov; match the route). Route entry: `phys-y12-m7-v10`, sections `observe-what-the-wave-model-cannot-explain`, `apply-einsteins-photon-model` (lesson 16) and `wave-model-crisis` (lesson 10). Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Use threshold frequency and immediate emission evidence to contrast wave-only energy accumulation with photon transfer. Stop before graph calculations." Next: "phys-y12-m7-v11: How do photoelectric graphs reveal Planck constant and work function?"

Owner rules applied: 2017 syllabus quoted exactly; no people, hands, faces or body outlines; the photocell circuit schematic, photons, electrons, energy bars and calculation strips are coded, HSC style; the zinc plate, the bench lamps, the photocell and the multimeter are painted plates (one new, three reused), scaled uniformly, never stretched; every number recalculated in Python with h = 6.626 × 10⁻³⁴ J s, c = 3.00 × 10⁸ m s⁻¹ and e = 1.602 × 10⁻¹⁹ C; data-sheet symbols E = hf, K_max = hf − ϕ; a 3 s prediction; "Pause here to answer." with a 10 s countdown; brief feedback with one crossed-out mistake; original attempts; scientists named in words only; Australian spelling; no em dashes. Recalled, not re-taught: v09 (Planck's packets E = hf), v01 (light as an electromagnetic wave carrying energy), Module 6 (work done on a charge W = qV, used once to define the electron volt), Year 11 (c = fλ, kinetic energy, intensity).

Syllabus content (Physics Stage 6 (2017), Module 7; ledger id `P7-IQ3-02`), quoted from the route JSON `syllabusActions`:

- `P7-IQ3-02`: "investigate the evidence from photoelectric effect investigations that demonstrated inconsistency with the wave model for light (ACSPH087, ACSPH123, ACSPH137)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 59)

**Boundary:** starts on v09's final frame (the zinc plate under a dim ultraviolet lamp and a bright red lamp). Teaches: the photoelectric effect and photoelectrons; the photocell (cathode, anode, ammeter, photocurrent); the work function as the minimum energy to free a surface electron; the electron volt; the wave model's three predictions (any frequency eventually; brighter gives faster electrons; dim light gives a delay); the three observations (threshold frequency, kinetic energy set by frequency and number set by intensity, no measurable delay); the wave model's delay estimate (about 70 s for zinc) against about 10⁻⁹ s; Einstein's photon model (E = hf, one photon to one electron, intensity as photon number); how it explains each observation; the zinc check with E = hc/λ (red 1.77 eV, ultraviolet 4.96 eV against 4.3 eV). Names K_max = hf − ϕ only as the handoff. Stops before stopping voltage, graphs and the gradient (v11).

## Decisions

- **Learner question (route wording kept).** "Why can bright low-frequency light fail to eject electrons?" is the causal puzzle. The answer, built in order: a surface electron needs at least the work function to escape (2); the wave model said energy accumulates, so brightness or time should win (3); experiments show a frequency threshold, frequency-set energy and no delay (4 to 6); Einstein: light's energy comes in photons of hf, one photon per electron, so a weak photon can never do it and more weak photons do not help (7, 8).
- **Hook (site lesson 16 "Before you read", re-staged from v09's final frame).** The dim ultraviolet lamp ejects electrons from zinc, the bright red lamp does not. 3 s prediction: "Which should the wave model favour: the bright lamp or the high-frequency lamp?" Answer: the bright one; it fails.
- **Apparatus (site Figure 1).** The painted photocell `y12p-photocell-v1.png` (delivered in brief 191) with a coded circuit (cathode, anode, ammeter shown by the reused multimeter plate, no supply yet; the variable supply and stopping voltage are v11). The kit family `m7-photoelectric` ("ideal collector with ammeter, no variable stopping-voltage circuit") supplies the coded electron and beam layer. Revision 2 (brief 191 optional): a real 250 nm demonstration needs a UV-transmitting window or envelope (fused quartz); ordinary glass absorbs below about 300 nm. Scene 2 carries a small tag "quartz window: lets UV through" and author note (f) records the condition; the calculation is unaffected.
- **Work function (site vocabulary).** Plain meaning: the minimum energy needed to free an electron from the metal's surface; electrons are held in by the positive ions. Zinc about 4.3 eV (site Activity 2 value). The electron volt is defined once ("the energy one electron gains crossing one volt", 1.602 × 10⁻¹⁹ J), linked to Module 6's W = qV on screen only.
- **Wave model's predictions (site "Analyse 7 marks" step 2: "energy is continuous, and intensity is what carries it").** One paragraph generates all three predictions, each a chip that is later crossed.
- **Observations (site "observe-what-the-wave-model-cannot-explain", three numbered features).** Each gets a short scene: threshold (4), energy set by frequency, number by intensity (5), no delay (6).
- **Delay estimate (site Activity 2, re-staged for zinc).** 1 W m⁻², electron collecting all the energy falling on 10⁻²⁰ m² (about one atom's cross-section, 0.1 nm square), zinc's 4.3 eV: 6.89 × 10⁻¹⁹ J / 10⁻²⁰ W = 69 s ("over a minute"), against about 10⁻⁹ s observed (site "Analyse 7 marks" step 5). The assumption is shown on screen (author note a). The ratio is said as "tens of billions of times shorter" (6.9 × 10¹⁰).
- **Photon model (site "apply-einsteins-photon-model").** E = hf (v09's packet, now for light); at a fixed frequency, intensity is proportional to the photon rate per unit area (Revision 2: the scene 7 tag reads "same f: intensity ∝ photons per second per m²", not "intensity = photons per second"); one photon to one electron in one interaction. "Photons don't team up on one electron" is the plain form of "no accumulation" for ordinary lamp light (Revision 2: the scene 8 stage, scene 11 chip and the memory card carry the label "ordinary lamp light"; the high-intensity multiphoton exception stays in author note b).
- **Leftover energy (preparing v11).** Scene 9 says "any energy left over becomes the electron's kinetic energy" and shows "K_max = hf − ϕ (next video)" as a tag; no calculation of K_max beyond "about 0.7 eV to spare" in scene 11 (route "stop before graph calculations").
- **Worked check (site hook made quantitative).** E = hc/λ (from E = hf and c = fλ): red 700 nm: 2.84 × 10⁻¹⁹ J = 1.77 eV; ultraviolet 250 nm: 7.95 × 10⁻¹⁹ J = 4.96 eV; zinc 4.3 eV. Revision 2: every scientific-notation denominator is grouped, for example E = (6.626 × 10⁻³⁴)(3.00 × 10⁸) / (7.00 × 10⁻⁷) and (2.84 × 10⁻¹⁹) / (1.602 × 10⁻¹⁹). Two stages (red, then ultraviolet), with the zinc value kept on screen. The 1240 eV nm shortcut (site) is not taught (author note c).
- **Memory aid (scene 12): "One photon, one electron. Frequency decides whether; brightness decides how many."** See "Memory aid check".
- **Attempts (original, HSC style).** A1 (3 marks): potassium 2.3 eV (site value), bright orange 600 nm (2.07 eV, none) and dim violet 400 nm (3.10 eV, ejects). Crossed: "the brighter lamp". A2 (2 marks, evaluate): "dim red light on zinc for long enough will eject electrons". Crossed: "eventually, yes".
- **Significant figures.** Photon energies to three figures; work functions as the site gives them (4.3, 2.3 eV).
- **Handoff (route next).** Scene 17 ends on an energy bar for one ultraviolet photon on zinc split into "ϕ" and "left over: kinetic energy", the equation "K_max = hf − ϕ" and an empty K_max against f axes with "?"; chip "Next: how do photoelectric graphs reveal Planck's constant and work function?". See "Final frame".
- **Colour key (root decision 1):** photons amber packets labelled with f or λ; electrons navy dots; work function slate; kinetic energy orange; wave-model chips grey, crossed in red.
- **Colour key (Revision 2, fixed for every scene).** As above; beams coloured by wavelength (red, orange, violet; ultraviolet drawn violet with a "UV" tag); frequency f and the slider ink; time and the delay timeline grey; framed answers in a dark-ink box; crossed chips and their hand tags red. Hand-font tags take the colour of the quantity they mark (photon tags amber, ϕ tags slate, K_max tags orange, electron tags navy).
- **Type sizes (Revision 2, 1080p).** Current working line at least 44 px (scenes 6, 10, 11 and the feedback rows 52 px; framed answers 56 px); live readouts (scene 4 and 9 bench: f, photon energy hf, ϕ, K_max, photocurrent) about 52 px; energy-bar labels and timeline labels 30 to 36 px; hand-font tags at least 30 px; question text 36 px; key notes 34 px; nothing a student must read below 26 px. All text above the bottom 12% of the frame.
- **Anchor (Revision 2).** v09's final frame is the anchor: the painted zinc plate under two painted bench lamps (`phys-y11-metal-plate-v1.png`, `y12p-bench-lamp-v1.png`, delivered and inspected), with the bright red beam freeing nothing. The painted photocell (`y12p-photocell-v1.png`, brief 191, inspected 7 Nov) carries scenes 2, 4, 5 and 9.
- **Simulation (Revision 2).** The core live control is the photocell bench (scenes 4, 5 and 9): a frequency slider on the lamp and a brightness slider, with live readouts. Scenes 4 and 5 (observations, before photons) show f, the photocurrent and the fastest electron's speed arrow. Scene 9 (after photons) adds the energy readouts: photon energy hf, the slate ϕ line and K_max = hf − ϕ, stepping 700, 400, 289, 250 and 200 nm (Python: 1.77, 3.10, 4.30, 4.96, 6.20 eV; K_max 0, 0, 0, 0.66, 1.90 eV); the brightness slider changes only the photocurrent. The delay timeline (6) and the energy well (8) are the other live elements.
- **Board stages (Revision 2, high-risk redesign).** Revision 1 held one surface inset and chips panel from scene 2 to scene 6 (about 158 s) and the surface from 7 to 9 (about 89 s). Revision 2 changes stage at every scene: photocell (2), wave-model surface with the predictions panel (3), the live photocell bench (4, 5), the delay timeline (6), photons at the surface (7), the energy well (8), the live bench again with energy readouts (9), working (10, 11). The predictions panel shrinks to a strip of three chips along the top from scene 4 so each can be crossed on cue without holding the board.
- **Question cards (Revision 2).** Each card arrives with its full text and a picture in one move (A1: two painted bench lamps, orange and violet beams on the metal plate, tags "bright" and "dim"; A2: the zinc plate under a dim red beam with a clock icon). On the answer side the card shrinks to the top, a givens strip lists the data, the energy-well bars show the answer, results are framed and one classic slip is crossed.
- **Site sources used:** lesson 16: predict (UV and red lamps on zinc) (1, 17); vocabulary (photon, work function, threshold frequency, photocurrent) (2, 4, 7); Figure 1 (2); three observations (4 to 6); photon explanations (8, 9); "Analyse 7 marks" (wave-model requirement, three paired conflicts, 10⁻⁹ s, Einstein's resolution) (3 to 9, 16); Activity 2 delay estimate (6) and zinc ϕ = 4.3 eV (2, 10, 11); practice Q1(a)(b) structure (A2); lesson 10 "wave-model-crisis" (three predictions contradicted) (3 to 6). Not used: the four equations beyond E = hf (v11), Millikan's data (v11), the 1240 shortcut, stopping voltage.
- **Site notes (quoted from site lessons 16 and 10, read 6 Nov; for root to log in `../site-corrections-phys-y12.md` if accepted):**
  1. Historical error (lesson 10, logged in v09 site note 3, repeated because this video opens on the same case): "in 1887, Heinrich Hertz observed that ultraviolet light striking a metal surface ejected electrons" and "Heinrich Hertz ... observed that UV light discharged a negatively charged zinc plate". Hertz saw ultraviolet light helping sparks jump; Hallwachs (1888) found the zinc-plate discharge; electrons were identified in 1897. Lesson 16's "first observed by Hertz in 1887. Lenard's systematic experiments (1902)" is correct.
  2. Precision (lesson 16, new): reflect section "on 17 March 1905, Albert Einstein ... published 'On a Heuristic Point of View ...'". The paper is dated 17 March 1905 and was received by Annalen der Physik on 18 March; it was published in June 1905. Suggest "completed in March 1905 (published June 1905)".
  3. Rounding inconsistency (lessons 10 and 16, new): the threshold wavelength for ϕ = 2.50 eV is "497 nm" in lesson 10's worked example and "498 nm" in lesson 16 Q1(c) (from a rounded f₀). With data-sheet constants hc/ϕ = 496 nm. Suggest carrying f₀ unrounded and quoting 496 to 497 nm consistently.
  4. Checked and correct: Stop and Check (2.3 eV, 8.0 × 10¹⁴ Hz: K_max = 1.01 eV, f₀ = 5.56 × 10¹⁴ Hz); MC (3.0 eV, 9.0 × 10¹⁴ Hz: 0.73 eV); Q2(b) (300 nm: 4.13 eV; metal A 2.03 eV; metal B no emission); Activity 2 delay (2.3 eV: 37 s).
- **Cause chain taught, in order:** (1) electrons are held in the metal, so freeing one needs at least the work function (2); (2) in the wave model, energy arrives smoothly and builds up, so brightness or waiting should eventually free electrons (3); (3) observed: a threshold frequency, energy set by frequency, number set by brightness, no delay (4 to 6); (4) Einstein: light arrives as photons of energy hf, one photon to one electron (7); (5) so a photon with hf < ϕ can never free an electron, and more such photons do not add up (8); (6) higher frequency gives more energy per photon, so faster electrons; brighter light gives more photons, so more electrons; one packet means no delay (9).
- **Entry knowledge (route `entryKnowledge`):** v09 (Planck's packets, E = hf, h); v01 (light carries energy); Module 6 (W = qV); Year 11 (c = fλ, kinetic energy, intensity as power per area).
- **Learner-visible vocabulary (plain meaning at first use):** photoelectric effect (light knocking electrons out of a metal, 2); photoelectron (2); photocell, cathode, anode (2); photocurrent (the current of photoelectrons, 2); work function ϕ (2); electron volt (2); threshold frequency f₀ (the lowest frequency that frees electrons, 4); intensity (brightness: energy arriving per second per square metre, 3); photon (a packet of light energy hf, 7).
- **Legacy logic ported:** none. Coded family `m7-photoelectric` (threshold, beam and electron layer) is reused within its stated limits.
- **New explainer motion:** **photocell scene** (painted tube, coded beam whose colour and label carry λ and whose width carries intensity, navy electrons leaving the cathode, an ammeter reading via the multimeter plate's coded display); **photon packets** (amber packets with labels, arriving one at a time, each striking one electron); **energy well** (a slate step of height ϕ that an electron must climb; photon energy as an amber bar against it; leftover orange); **wave-model chips** (three predictions crossed in turn); `AlignedAlgebra`; `NumberTicker`; `Countdown` (3 s in scene 1; 10 s in scenes 13 and 15); `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the photocell or zinc plate at centre left; energy bars and chips on the right; algebra lower right; everything above the bottom 12% of the frame.
- **Author notes (not learner copy):**
  (a) Delay estimate: the classical electron is assumed to absorb all the energy incident on an area of about 10⁻²⁰ m² (an atom's cross-section). Larger collecting areas shorten the estimate, but no reasonable area brings it near 10⁻⁹ s at low intensity. Observed emission times: under 10⁻⁹ s (Lawrence and Beams, 1928, reported delays below about 3 × 10⁻⁹ s; modern limits are far shorter).
  (b) Two-photon absorption exists at very high intensities (lasers) and is outside the HSC model; "photons don't team up" is true for ordinary light sources.
  (c) hc = 1.986 × 10⁻²⁵ J m = 1240 eV nm with data-sheet values (1240.6). The video works in joules and converts once, so units stay visible.
  (d) The maximum kinetic energy belongs to electrons freed from the surface; electrons from deeper lose energy on the way out (site "Mistake 3"). Said in v11.
  (e) Pronunciations: "phi" as "fye"; "f zero" or "f nought" (use "f zero"); "electron volts".
  (f) Window (Revision 2, brief 191 optional): a photocell used with 250 nm light needs a UV-transmitting (fused quartz) window or envelope; ordinary soda-lime glass absorbs strongly below about 300 nm. The painted bulb is shown as the quartz version by tag only.
- **Open decisions for root:**
  - **1. Plate `y12p-photocell-v1`.** Closed: delivered in brief 191 and inspected (7 Nov).
  - **2. The delay estimate (scene 6).** Kept (root decision 8; the brief 191 learning review asks to keep it).
  - **3. The electron volt definition in scene 2 (learning review).** Students may meet the eV only here; keep the one-sentence definition unless v08 or an earlier Module 7 design already defines it.

Main question: *If brighter light carries more energy, why can't a bright red lamp knock electrons out of zinc?*
Entry knowledge: Planck's packets E = hf (v09); light carries energy (v01); W = qV (Module 6); c = fλ (Year 11).
Stops after: the photoelectric effect, the work function, the three observations and the wave model's failed predictions, Einstein's photon model explaining each, the zinc check in electron volts. No stopping voltage or graphs.
Handoff: v11, how photoelectric graphs reveal Planck's constant and the work function.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *ϕ*, *f₀*, *E*, *h*, *f*, *λ*, *K_max*.

### 1. hook (two lamps, one winner)
> Here's the puzzle from last time. A clean zinc plate sits under two lamps. The ultraviolet lamp is dim, but electrons fly off the zinc straight away. The red lamp is far brighter, and nothing comes off, even turned right up. Which lamp should the wave model of light favour, the bright one, or the high-frequency one? Make your **prediction**. Waves say brightness should win. It doesn't. So why can bright low-frequency light fail to eject **electrons**?

Visual: opens on v09's final frame (see "Opening frame"); the chip becomes the heading: "Why can bright low-frequency light fail to eject electrons?". On "A clean zinc plate sits under two lamps" both lamps pulse once. On "electrons fly off the zinc straight away" the violet beam's navy electron dots leave the plate, navy hand tag "dim UV: electrons out" with a navy pen ring round the dots. On "nothing comes off" the red beam's area of the plate pulses, red hand tag "bright red: none". On "even turned right up" the red beam widens and brightens twice (tag "brighter"), still no dots. On "prediction" a 3 s `Countdown` beside chips "bright lamp", "high-frequency lamp". On "Waves say brightness should win" the "bright lamp" chip highlights with a grey tag "wave model". On "It doesn't" the chip is crossed in red. On "electrons" the heading underlines "bright low-frequency".

### 2. the photoelectric effect and the work function
> Light knocking electrons out of a metal is called the photoelectric effect. In the lab we use a photocell, an evacuated tube with a metal plate called the cathode, and a collecting wire called the anode. Light hits the cathode, electrons cross the gap, and an ammeter measures the photocurrent. Inside the metal, electrons are held in by the positive ions. The minimum energy needed to free one from the surface is called the work function, **phi**. Zinc's is about four point three electron volts, and one electron volt is one point six zero two times ten to the minus nineteen **joules**.

Visual: board change (a new set-up): the painted photocell `y12p-photocell-v1.png` at centre left (about 560 px tall, solid from the first frame), with a coded circuit drawn from its terminals to the reused multimeter plate `phys-y11-digital-multimeter-v1.png` (its coded display reads "photocurrent", 52 px); the bench lamp plate at the far left; small grey tag on the bulb "quartz window: lets UV through". On "photoelectric effect" a definition chip "photoelectric effect: light ejects electrons from a metal surface". On "the cathode" a label arrow "cathode (metal)"; on "the anode" a label arrow "anode (collector)". On "electrons cross the gap" the bench lamp shines a violet coded beam onto the cathode and navy dots cross to the anode; navy pen arrow along their path; on "photocurrent" the meter display ticks up "I". On "held in by the positive ions" a zoom inset of the metal surface (about 480 px): a row of "+" ions with navy electrons, and an energy step (slate) at the surface edge, slate hand tag "to escape, climb out". On "phi" the step is labelled "work function ϕ = minimum energy to free a surface electron" with a slate pen bracket on the step height. On "Zinc's is about four point three electron volts" tag "zinc: ϕ ≈ 4.3 eV". On "joules" a small chip "1 eV = 1.602 × 10⁻¹⁹ J (W = qV, Module 6)".

### 3. what the wave model predicts
> In the wave model, light's energy is spread smoothly across the wavefront, and brighter light delivers more energy every second. An electron should soak up energy gradually until it has enough to escape. That gives three clear **predictions**. Any frequency should work, if the light is bright enough or shines long enough. Brighter light should give the escaping electrons more kinetic **energy**. And dim light should need time to build up, so there should be a **delay**.

Visual: clear change (a new set-up, greyed "wave model" tag): the zinc surface fills the left half (about 800 px), the slate step at its edge. On "spread smoothly across the wavefront" a grey coded wavefront washes evenly over the surface; on "brighter light delivers more energy every second" its amplitude grows and a tag "intensity: energy per second per m²". On "soak up energy gradually" one electron's orange energy bar (about 300 px tall at full) fills slowly against the slate step; grey hand tag "soak it up". On "predictions" a grey panel headed "Wave model predicts" appears on the right (chips 40 px). On "Any frequency should work" chip 1 "any frequency works if bright or long enough". On "energy" chip 2 "brighter → faster electrons". On "delay" chip 3 "dim light → a delay while energy builds up"; grey pen bracket round the three chips.

### 4. observation 1: a threshold frequency
> Experiments said no to all three. First, every metal has a threshold frequency, f zero. Below it, no electrons come out at all, however bright the light, and however long you **wait**. Above it, electrons come out. For zinc, the threshold is in the ultraviolet, so red light never **works**.

Visual: camera change to the live photocell bench (a new set-up, solid from the first frame): the bench lamp plate at the left aimed at the photocell plate (about 520 px tall) at the centre, the meter plate at the right with its live readout "I = ... " (52 px); under the lamp a frequency slider with a live readout "f = ... Hz" (52 px) and a brightness slider; the three prediction chips shrink to a strip along the top. On "threshold frequency, f zero" the frequency slider's track gains a slate marker "f₀". On "Below it" the slider sits at red ("f = 4.29 × 10¹⁴ Hz"): the brightness slider pushes up, the beam widens and brightens and a clock icon spins (grey hand tag "brighter, longer"), but no electrons leave; the meter reads "0". On "wait" chip 1 in the strip is crossed in red. On "Above it, electrons come out" the frequency slider passes f₀ and dots leave immediately; the meter reading jumps; slate pen ring round the f₀ marker. On "works" the track marks "red (4.3 × 10¹⁴ Hz)" well below "zinc f₀ (≈ 1.0 × 10¹⁵ Hz, ultraviolet)"; slate hand tag "zinc: UV only".

### 5. observation 2: frequency sets the energy, brightness sets the number
> Second, the electrons' maximum kinetic energy depends on the frequency, not the brightness. Raise the frequency, and the fastest electrons come out **faster**. Make the light brighter at the same frequency, and you get more electrons each second, a bigger photocurrent, but the fastest ones are no **faster**.

Visual: the live bench continues (camera continue; scenes 4 and 5 together about 44 s). On "Raise the frequency" the frequency slider moves from 250 nm to 200 nm ("f = 1.20 × 10¹⁵ Hz" to "1.50 × 10¹⁵ Hz"): the dots move faster, with an orange speed arrow on the fastest dot that lengthens; orange hand tag "K_max up". On "faster" (first) chip 2 in the strip shows a red underline under "brighter". On "Make the light brighter at the same frequency" the frequency slider holds and the brightness slider doubles: the beam widens, many more dots leave at the same top speed, the meter reading doubles; navy hand tag "more electrons, same K_max" and a navy pen ring round the meter. On "faster" (second) chip 2 is crossed in red.

### 6. observation 3: no delay
> Third, there's no delay. Even with very dim light above the threshold, electrons appear within about a billionth of a second. The wave model predicts a long wait. Picture a dim lamp delivering one watt per square metre, and an electron collecting all the energy falling on an area the size of one atom, ten to the minus twenty square metres. Collecting zinc's four point three electron volts would take over a **minute**. The real delay is tens of billions of times **shorter**.

Visual: clear change (a new set-up): the zinc surface at the left (about 420 px) with a dim violet beam, and a long logarithmic timeline bar across the right two-thirds (10⁻¹⁰ s to 10³ s, grey labels 32 px). On "within about a billionth of a second" a marker "observed: < 10⁻⁹ s" sits at the far left of the timeline. On "one watt per square metre" givens chip "I = 1 W m⁻²"; on "the size of one atom" a tiny square on the zinc surface highlights, tag "A ≈ 10⁻²⁰ m² (one atom)". On "ten to the minus twenty square metres" `AlignedAlgebra` "P = IA = 1 × 10⁻²⁰ W (J each second)". On "minute" "t = ϕ / P = (4.3 × 1.602 × 10⁻¹⁹) / (1 × 10⁻²⁰) ≈ 69 s" (52 px) in a dark-ink frame, and a grey wave-model marker "predicted: about 69 s" lands far to the right of the timeline. On "shorter" a red pen bracket between the two markers, red hand tag "≈ 7 × 10¹⁰ times"; chip 3 in the strip is crossed in red.

### 7. Einstein's photons
> In 1905, Einstein proposed a radical answer. Light's energy isn't spread smoothly. It arrives in packets called photons, and each photon carries energy E equals h f. That's Planck's packet, now applied to light itself. Brighter light at the same frequency just means more photons each second. And here's the key rule. One photon gives all its energy to one **electron**, in one go.

Visual: board change (a new set-up): the zinc surface fills the frame width (about 1400 px), electrons along its edge. On "Light's energy isn't spread smoothly" the grey smooth wavefront from scene 3 dissolves. On "packets called photons" amber packets arrive at the surface one at a time; name tag in words only "Einstein, 1905". On "E equals h f" the equation strip writes "E = hf (one photon)"; chip "v09: Planck's packet, now for light". On "more photons each second" the packet stream gets denser with the same packet size; amber hand tag "same f: intensity ∝ photons per second per m²". On "electron" one packet strikes one navy electron, the packet vanishes and its amber energy bar transfers to that electron; amber pen ring round the pair, tag "one photon → one electron, all its energy".

### 8. why there is a threshold
> Now the threshold makes sense. If a photon's energy h f is less than the work function, that photon can't free an electron. And photons don't team up on one electron, so it doesn't matter how many arrive. Below the threshold, nothing comes out, however bright the **light**. The threshold is where one photon just pays the work function, h times f zero equals **phi**. A brighter red lamp just sends more photons that are each too **weak**.

Visual: camera change to the energy well (a new set-up, about 900 px tall): slate step "ϕ (zinc 4.3 eV)"; stage tag "ordinary lamp light" at the top left. On "less than the work function" a short amber bar "hf (red)" rises against the step and falls short; the electron climbs part way and slides back. On "photons don't team up on one electron" two short amber bars arrive at one electron one after the other, each sliding back; a chip "2 red photons → 1 electron" is crossed in red, red hand tag "no teaming up (ordinary lamp light)". On "light" the red stream thickens: many short bars, each falling short. On "phi" a bar exactly level with the step, labelled "hf₀ = ϕ", with a slate pen bracket; the equation strip writes "hf₀ = ϕ" (52 px) in a dark-ink frame. On "weak" amber hand tag "more photons, same weak photon" and chip 1 in the strip gains a note "explained".

### 9. the other two observations
> The other two observations follow. A photon above the threshold frees an electron, and any energy left over becomes the electron's kinetic energy. Higher frequency means bigger photons, so the fastest electrons are **faster**. More photons means more electrons, and a bigger **current**. And there's no delay, because the energy arrives in a single packet. Nothing has to build **up**.

Visual: camera change back to the live photocell bench (scenes 4 and 5), now with the energy readouts (52 px) beside it: "hf = ... eV" (amber), "ϕ = 4.3 eV" (slate) and "K_max = hf − ϕ = ... eV" (orange), and a small live energy bar (amber hf against a slate ϕ line, the excess orange). On "A photon above the threshold frees an electron" the frequency slider steps through 700 nm ("1.77 eV", K_max "0", no dots), 400 nm ("3.10 eV", "0"), 289 nm ("4.30 eV", the bar level with ϕ) and 250 nm ("4.96 eV", "0.66 eV", dots leave). On "any energy left over" the part of the bar above the ϕ line turns orange, orange hand tag "left over → kinetic energy"; small tag "K_max = hf − ϕ (next video)". On "faster" the slider steps to 200 nm ("6.20 eV", K_max "1.90 eV"), the orange part grows and the freed electron's speed arrow lengthens; chip 2 note "explained: energy per photon". On "current" the brightness slider doubles: the packet stream thickens and more electrons leave with the same top speed; the meter rises while the K_max readout stays "1.90 eV"; navy pen ring round the unchanged readout; chip 2 note "intensity: number only". On "up" a single packet strikes and the electron leaves at once; a small timeline inset "< 10⁻⁹ s" pulses; chip 3 note "explained: one packet, no build-up".

### 10. worked check: the red photon on zinc
> Let's check the zinc with numbers. Take red light of wavelength seven hundred nanometres. Photon energy is h f, and f is c over lambda, so E equals h c over **lambda**. Six point six two six times ten to the minus thirty four, times three point zero zero times ten to the eight, over seven hundred times ten to the minus nine, is two point eight four times ten to the minus nineteen **joules**. Divide by one point six zero two times ten to the minus nineteen, and that's one point seven seven electron **volts**.

Visual: board change to the working layout (a new set-up), the zinc well (300 px) at the top left with "ϕ = 4.3 eV". Task strip: "Do these photons free electrons from zinc?" Equation strip: "E = hf, c = fλ". Givens grouped: "λ_red = 700 nm = 7.00 × 10⁻⁷ m", "λ_UV = 250 nm = 2.50 × 10⁻⁷ m" (light); "h = 6.626 × 10⁻³⁴ J s, c = 3.00 × 10⁸ m s⁻¹, 1 eV = 1.602 × 10⁻¹⁹ J" (data sheet); "ϕ_zinc = 4.3 eV". On "lambda" `AlignedAlgebra` "E = hf = hc / λ" (52 px); ink hand tag "λ in metres". On "joules" "E_red = (6.626 × 10⁻³⁴)(3.00 × 10⁸) / (7.00 × 10⁻⁷) = 2.84 × 10⁻¹⁹ J" (52 px); beside it a chip "E = hc / 700 = 2.84 × 10⁻²⁸ J" fades in and is crossed in red, red hand tag "nm → m first". On "volts" "= (2.84 × 10⁻¹⁹) / (1.602 × 10⁻¹⁹) = 1.77 eV" in a dark-ink frame (56 px); amber pen arrow from the result to the well inset.

### 11. worked check: the ultraviolet photon
> Zinc needs four point three, so a red photon falls well short, and no number of them will **do**. For the ultraviolet, the same working gives seven point nine five times ten to the minus nineteen joules, which is four point nine six electron **volts**. That's more than four point three, so each ultraviolet photon can free an electron, with about zero point seven electron volts to **spare**.

Visual: camera continue: "E_red = 1.77 eV" stays framed at the top (32 px); the stage 1 lines fade; the well inset grows to the right half (about 600 px tall). On "falls well short" the well shows a short amber bar "1.77 eV" against the "4.3 eV" step; On "do" a chip "brighter red → electrons" is crossed in red (red hand tag "1.77 eV < 4.3 eV, ordinary lamp light"). On "volts" "E_UV = (6.626 × 10⁻³⁴)(3.00 × 10⁸) / (2.50 × 10⁻⁷) = 7.95 × 10⁻¹⁹ J = 4.96 eV" (52 px) in a dark-ink frame. On "spare" the tall bar "4.96 eV" clears the step and its top turns orange, orange hand tag "≈ 0.7 eV left over"; tick "4.96 eV > 4.3 eV: electrons freed".

### 12. a way to remember
> Here's a way to remember it. One photon, one electron. Frequency decides whether an electron gets out. Brightness only decides how **many**.

Visual: board clears to the two painted lamps over the zinc plate (plates at least 300 px). On "One photon, one electron" a single packet strikes a single electron. On "Frequency decides whether" the violet beam's label "f" pulses and an electron leaves. On "many" the violet beam widens and more electrons leave. A framed memory card writes above in hand lettering (52 px, amber and navy; the same card is reused on the notes screen): "One photon, one electron. Frequency decides whether; brightness decides how many." with a small grey line under it "(ordinary lamp light)". Hold about 2 seconds.

### 13. attempt 1 (countdown, 10 seconds)
> Your turn. Potassium has a work function of two point three electron volts. A bright orange lamp emits light of wavelength six hundred nanometres, and a dim violet lamp emits light of wavelength four hundred nanometres. Calculate the energy of a photon from each lamp in electron volts, and state which lamp ejects electrons from potassium. Pause here to answer.

Visual: `QuestionCard` (subject "Physics") arrives with its full text and picture in one move (question text 36 px), worded as printed: "Potassium has a work function of 2.3 eV. A bright orange lamp emits light of wavelength 600 nm. A dim violet lamp emits light of wavelength 400 nm. (a) Calculate the energy, in electron volts, of a photon from each lamp. (b) State which lamp ejects electrons from potassium. Justify your answer. (3 marks)" Picture: two painted bench lamps (about 260 px each) aimed at the metal plate, a broad orange beam tagged "bright, 600 nm" and a thin violet beam tagged "dim, 400 nm"; no electrons drawn. Data-sheet chips "h = 6.626 × 10⁻³⁴ J s", "c = 3.00 × 10⁸ m s⁻¹", "1 eV = 1.602 × 10⁻¹⁹ J". The full question stays on screen. Countdown ring full from "Pause here to answer." for 10 seconds. Nothing answer-bearing.

### 14. feedback 1 (brief)
> E equals h c over lambda. The orange photon is two point zero seven electron **volts**, below two point three, so no electrons, however bright. The violet photon is three point one zero electron volts, so the violet lamp ejects **electrons**. The slip is choosing the brighter lamp. Brightness sets the number of photons, not their **energy**.

Visual: card shrinks to the top; "2.3 eV", "bright", "dim", "600 nm" and "400 nm" underline. A givens strip (36 px): "ϕ = 2.3 eV", "λ = 6.00 × 10⁻⁷ m (orange)", "λ = 4.00 × 10⁻⁷ m (violet)". At the right the energy well (400 px tall) with a slate step "2.3 eV". On "volts" "(a) E_orange = (6.626 × 10⁻³⁴)(3.00 × 10⁸) / (6.00 × 10⁻⁷) = 3.31 × 10⁻¹⁹ J = 2.07 eV < 2.3 eV" (44 px), framed; a short orange-labelled amber bar falls short of the step. On "electrons" "E_violet = (6.626 × 10⁻³⁴)(3.00 × 10⁸) / (4.00 × 10⁻⁷) = 4.97 × 10⁻¹⁹ J = 3.10 eV > 2.3 eV → (b) the violet lamp ejects electrons", framed; a taller bar clears the step. On "energy" a chip "the bright orange lamp" fades in and is crossed in red (red hand tag "brightness = number of photons, not energy per photon"). Hold about 1 second.

### 15. attempt 2 (countdown, 10 seconds)
> Last one. A student claims that if dim red light shines on zinc for long enough, electrons will eventually be ejected. Evaluate this claim. Pause here to answer.

Visual: `QuestionCard` arrives with its full text and picture in one move (question text 36 px), worded as printed: "A student claims: 'If dim red light shines on a zinc plate for long enough, electrons will eventually be ejected.' Evaluate this claim. (2 marks)" Picture: the painted zinc plate (about 360 px) under one painted bench lamp with a thin red beam, and a coded clock icon. Data chip "zinc: ϕ = 4.3 eV; red photon: 1.77 eV" (given in scene 11). The full question stays on screen. Countdown ring full from "Pause here to answer." for 10 seconds. Nothing answer-bearing.

### 16. feedback 2 (brief)
> The claim is incorrect. Each red photon has less energy than zinc's work function, and one photon interacts with one electron, so photon energies can't add up. Waiting longer only delivers more photons that are too **weak**. The claim is exactly what the wave model predicted, and experiments ruled it **out**.

Visual: card shrinks to the top; "dim red" and "long enough" underline. A givens strip (36 px): "ϕ = 4.3 eV", "red photon: 1.77 eV". At the right the energy well with a stream of short amber bars each sliding back, the clock icon spinning. On "weak" "red photon 1.77 eV < ϕ = 4.3 eV; one photon → one electron; no build-up → no emission at any time" (44 px), framed. On "out" a chip "eventually, yes" fades in and is crossed in red (red hand tag "wave-model prediction, not observed"). Hold about 1 second.

### 17. handoff
> So light hands over its energy in packets, one photon to one electron, and whatever is left after paying the work function becomes kinetic energy. That's an energy statement you can write as an equation, and test with a graph. So how do photoelectric graphs reveal Planck's constant and the work **function**?

Visual: board clears (camera change). On "one photon to one electron" a single amber packet "hf" strikes a navy electron at the zinc surface. On "whatever is left after paying the work function" a vertical energy bar for "hf (4.96 eV)" splits into a slate lower part "ϕ (4.3 eV)" and an orange upper part "left over: kinetic energy"; the equation writes "K_max = hf − ϕ". On "test with a graph" an empty pair of axes draws on the right: "K_max" up, "f" along, with a "?" where a line would go. On "function" the chip "Next: how do photoelectric graphs reveal Planck's constant and work function?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 18. key notes (quiet, hold about 45 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Work function ϕ: minimum energy to free a surface electron.
2. Below f₀: no electrons, however bright or long.
3. Frequency sets K_max; intensity sets the number.
4. Photon: E = hf = hc/λ; one photon → one electron.
5. Emission needs hf ≥ ϕ (1 eV = 1.602 × 10⁻¹⁹ J).

Memory aid (framed card under the notes, hand lettering as in scene 12): *One photon, one electron. Frequency decides whether; brightness decides how many.* (ordinary lamp light). Notes in the role colours, 34 px; about 260 characters of bullet text; no paragraphs.

## Teaching checks

- **Does it explain causes?** Why a minimum energy exists: electrons are held by the ions (2). Why the wave model expected brightness or time to win: energy spread smoothly and accumulating (3). Why bright red fails: each photon is too small and photons do not add on one electron (8). Why frequency sets the speed and brightness the number (9). Why there is no delay (9).
- **Misconceptions addressed:** brighter light gives faster electrons (5, 14 crossed); long exposure eventually works (16 crossed); intensity is energy per photon (7, 9); photons combine (8, labelled for ordinary lamp light); wavelength left in nanometres (10, crossed).
- **One idea at a time:** the effect and ϕ (2), predictions (3), each observation (4 to 6), photons (7), each explanation (8, 9), numbers (10, 11).
- **Video makes it easier:** the brighter red beam that still frees nothing (1, 4, 8); the electron sliding back down the step (8); the two timeline markers 10¹⁰ apart (6); the amber bar splitting into ϕ and kinetic energy (9, 17).
- **Response opportunity:** one prediction (3 s) and two unseen HSC-style tasks with every condition visible, 10 s each; nothing answer-bearing. One crossed mistake each; feedback about 25 s and 23 s.
- **Avoided double teaching:** Planck's packets (v09), W = qV (Module 6) and c = fλ (Year 11) recalled in a clause.
- **Syllabus coverage:** `P7-IQ3-02`: photoelectric investigations showing inconsistency with the wave model: threshold (4, 8), frequency-dependent energy and intensity-dependent number (5, 9), instantaneous emission with the quantified delay (6, 9); Einstein's resolution (7 to 9). The investigation itself (measurement with a photocell) continues in v11.
- **Out of scope by design:** stopping voltage, K_max calculations and graphs (v11); the Compton effect (not routed); wave-particle duality (later).

## Practice questions and model answers

**Attempt 1 (scene 13; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "Potassium has a work function of 2.3 eV. A bright orange lamp emits light of wavelength 600 nm. A dim violet lamp emits light of wavelength 400 nm. (a) Calculate the energy, in electron volts, of a photon from each lamp. (b) State which lamp ejects electrons from potassium. Justify your answer."
Model answer: (a) E = hc/λ. Orange: (6.626 × 10⁻³⁴)(3.00 × 10⁸) / (6.00 × 10⁻⁷) = 3.31 × 10⁻¹⁹ J; (3.31 × 10⁻¹⁹) / (1.602 × 10⁻¹⁹) = 2.07 eV. Violet: (6.626 × 10⁻³⁴)(3.00 × 10⁸) / (4.00 × 10⁻⁷) = 4.97 × 10⁻¹⁹ J; (4.97 × 10⁻¹⁹) / (1.602 × 10⁻¹⁹) = 3.10 eV. (b) Only the violet lamp: its photons (3.10 eV) exceed the work function (2.3 eV); each orange photon (2.07 eV) is below it, and since one photon interacts with one electron, the orange lamp's brightness (more photons) cannot eject electrons. Classic mistake (crossed): "the bright orange lamp".

**Attempt 2 (scene 15; original wording, HSC style, 2 marks).** "A student claims: 'If dim red light shines on a zinc plate for long enough, electrons will eventually be ejected.' Evaluate this claim."
Model answer: The claim is incorrect. Each red photon (about 1.77 eV) carries less energy than zinc's work function (4.3 eV), and each photon interacts with a single electron, so energy cannot accumulate from several photons; no emission occurs however long the light shines. The claim is the wave model's prediction, which experiment contradicts. Classic mistake (crossed): "eventually, yes".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Constants (HSC data sheet) | h = 6.626 × 10⁻³⁴ J s; c = 3.00 × 10⁸ m s⁻¹; 1 eV = 1.602 × 10⁻¹⁹ J | 2, 10, 11, 13 |
| Zinc (site) | ϕ = 4.3 eV = 6.89 × 10⁻¹⁹ J; f₀ = 1.04 × 10¹⁵ Hz (ultraviolet); λ₀ = 289 nm | 2, 4, 8, 11 |
| Red light | 700 nm: f = 4.29 × 10¹⁴ Hz; E = 2.84 × 10⁻¹⁹ J = 1.77 eV | 4, 10, 11, 15, 16 |
| Ultraviolet | 250 nm: f = 1.20 × 10¹⁵ Hz; E = 7.95 × 10⁻¹⁹ J = 4.96 eV; left over 0.66 eV ≈ 0.7 eV | 11, 17 |
| Delay estimate | I = 1 W m⁻², A = 10⁻²⁰ m²: P = 10⁻²⁰ W; t = 6.89 × 10⁻¹⁹ / 10⁻²⁰ = 69 s; observed < 10⁻⁹ s; ratio ≈ 7 × 10¹⁰ | 6 |
| A1 | potassium 2.3 eV; 600 nm: 3.31 × 10⁻¹⁹ J = 2.07 eV; 400 nm: 4.97 × 10⁻¹⁹ J = 3.10 eV | 13, 14 |
| Live bench (Revision 2) | 700 nm: 4.29 × 10¹⁴ Hz, 1.77 eV, K_max 0; 400 nm: 7.50 × 10¹⁴ Hz, 3.10 eV, 0; 289 nm: 1.04 × 10¹⁵ Hz, 4.30 eV, 0; 250 nm: 1.20 × 10¹⁵ Hz, 4.96 eV, 0.66 eV; 200 nm: 1.50 × 10¹⁵ Hz, 6.20 eV, 1.90 eV | 4, 5, 9 |
| Crossed slip (Revision 2) | hc/700 = 2.84 × 10⁻²⁸ J (nm not converted) | 10 |
| Site checks | Activity 2 (2.3 eV): 37 s; Stop and Check: 1.01 eV, 5.56 × 10¹⁴ Hz; MC 0.73 eV; hc/(2.50 eV) = 496 nm | site notes |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov, `numbers.py` in the session scratchpad); Codex to re-check.

- 6.626e-34 × 3.00e8 / 7.00e-7 = 2.840e-19 J; /1.602e-19 = 1.773 eV; 3.00e8/7.00e-7 = 4.286e14 Hz.
- 6.626e-34 × 3.00e8 / 2.50e-7 = 7.951e-19 J = 4.963 eV; 4.963 − 4.3 = 0.66 eV.
- 4.3 × 1.602e-19 = 6.889e-19 J; /6.626e-34 = 1.040e15 Hz; hc/6.889e-19 = 2.886e-7 m.
- 6.889e-19 / 1e-20 = 68.9 s; 68.9 / 1e-9 = 6.9e10.
- 600 nm: 3.313e-19 J = 2.068 eV; 400 nm: 4.970e-19 J = 3.102 eV.
- Revision 2 (7 Nov, Python): 200 nm: 9.939e-19 J = 6.204 eV, K_max = 6.204 − 4.3 = 1.904 eV; 3.00e8/2.00e-7 = 1.50e15 Hz; 289 nm threshold: hc/(4.3 × 1.602e-19) = 288.6 nm, 4.30 eV; slip 6.626e-34 × 3.00e8 / 700 = 2.840e-28 J.

## Memory aid check

- **"One photon, one electron. Frequency decides whether; brightness decides how many."** Meaning, as said in scene 12: each photon interacts with a single electron; whether that electron escapes depends on the photon's energy hf, so on frequency; at a fixed frequency, intensity (proportional to the photon rate per unit area) sets how many electrons escape. Revision 2: the card carries the label "(ordinary lamp light)", the single-photon condition. Assumptions checked: ordinary (not laser) intensities, so no multi-photon absorption (author note b); "how many" holds above the threshold (below it, brightness gives zero); a photon above threshold frees at most one electron, and not every photon frees one (quantum efficiency is below 1), which does not change the proportionality. It helps a new case: A1 (orange versus violet) and A2 (time does not help). Introduced after the explanation (7 to 9).
- **Considered, not used:** a coin-machine analogy (would need painted coins and adds money ideas; the energy-step bars already show the same thing).

## Narration length estimate

Revision 2 count (7 Nov; unchanged narration; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed; total = sum of scene strings): **6,277 characters**, 18 scenes. Characters per scene (1 to 18): 447, 582, 462, 283, 301, 470, 377, 428, 373, 501, 381, 136, 362, 331, 161, 302, 305, 75. At 13.3 characters per second the speech is about 472 s; add about 3 s for the prediction countdown, 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 40 s more of the quiet notes hold (45 s in all; about 69 s of holds and countdowns; the scene 9 slider runs under its narration): **about 541 s**, inside the 5,500 to 7,000 character band and under the 570 s cap. Revision 1: about 556 s. Reserve trims if the voiced take runs long: scene 6's area sentence (keep the 69 s on screen); scene 2's electron-volt clause (keep the chip); scene 11's "to spare" clause.

## Opening frame

v09's final frame (designed in this wave, `phys-y12-m7-v09.md`): paper background; heading "How did thermal spectra challenge classical predictions?"; at the top left a small coded oscillator energy ladder with "E = hf"; an amber wave train breaking into packets, tag "light in packets? (Einstein, 1905)"; at the centre the painted zinc plate `phys-y11-metal-plate-v1.png`, tag "clean zinc plate"; two copies of the painted bench lamp `y12p-bench-lamp-v1.png`, upper left with a thin violet coded beam (tag "ultraviolet, dim") and a few navy electron dots leaving the plate (tag "electrons out"), upper right with a broad bright red coded beam (tag "red, very bright") and no electrons (tag "electrons: none"); chip "Next: why can bright low-frequency light fail to eject electrons?". Scene 1 turns the chip into the heading; the ladder and packet train fade.

## Final frame

The last explained frame (end of scene 17, before the key-notes board): paper background; heading "Why can bright low-frequency light fail to eject electrons?"; at the left a coded zinc surface with one amber photon packet "hf" striking one navy electron; in the middle a vertical energy bar "hf (4.96 eV)" split into a slate lower part "ϕ (4.3 eV)" and an orange upper part "left over: kinetic energy"; the equation "K_max = hf − ϕ" under it; on the right empty axes, "K_max" up and "f" along, with a "?" where a line would go; chip "Next: how do photoelectric graphs reveal Planck's constant and work function?". v11 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m7-v10` (route phys-y12-m7-v10). Suggested explainer folder `src/explainer/lessons/phys-y12-m7-v10` and build folder `docs/production/claude-pm/lessons/p-y12-m7-v10` (root to confirm).

In order (kebab-case; 18 scene headings, all `### N.`): hook, effect-work-function, wave-predictions, threshold, frequency-vs-intensity, no-delay, photons, why-threshold, other-observations, worked-red, worked-uv, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Scene 1 is `explain` with a 3 s prediction countdown. `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: photocell scene (beam colour and width, electron dots, meter), photon packets, energy well and bars, wave-model chips, timeline, `AlignedAlgebra`, `NumberTicker`, `PenArrow`, `Countdown`, `CameraStage`. Transitions (`pickTransition`, Revision 2): 1 to 2 clear change to the photocell; 2 to 3 clear change (wave-model surface and predictions panel); 3 to 4 camera change (the live bench; the predictions shrink to a strip); 4 to 5 camera continue (same bench, about 44 s in all); 5 to 6 clear change (timeline); 6 to 7 clear change (photons at the surface); 7 to 8 camera change (energy well); 8 to 9 camera change (the live bench with energy readouts); 9 to 10 clear change to working; 10 to 11 camera continue (about 66 s in all); no set-up runs past about 70 s; 11 to 12 clear change; attempts and feedback card shrink to the top; 16 to 17 clear change; 17 to 18 fade to the notes board.

Holds: hook (3 s countdown), memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 45 s). Review evidence paths: `learning_review` = `checks/p-y12-m7-v10-learning-review.md`, `science_check` = `checks/p-y12-m7-v10-physics-check.md`.

## Assets

Have (inspected 6 Nov on a session contact sheet; scaled uniformly only, never stretched):
- `public/assets/physics/phys-y11-metal-plate-v1.png` (1536 × 1024, RGBA): "clean zinc plate" (1, 12).
- `public/assets/physics/phys-y11-digital-multimeter-v1.png` (1086 × 1448, RGBA): the ammeter, display overlaid in code (2, 4, 5, 9).
- `public/assets/physics/y12p-bench-lamp-v1.png` (1484 × 1060, RGBA; delivered in brief 191, inspected 7 Nov): both lamps (1, 2, 4, 5, 9, 12, A1 and A2 cards).
- `public/assets/physics/y12p-photocell-v1.png` (1073 × 1466, RGBA; delivered in brief 191, inspected 7 Nov: clear bulb, curved half-cylinder cathode on the left, straight wire anode, black base with two terminals; Codex anchors: terminals about (394, 1188) and (651, 1188), cathode inner face about x 300 to 470): 2, 4, 5, 9; v11.
- **Checked, not used:** `phys-y11-torch-v1.png` (a handheld torch reads as a person's tool; the bench lamp is lab equipment); `phys-y11-light-meter-v1.png` (not needed until v11's intensity control, and not used there either).

Need (new plates): none (Revision 2).

Coded: circuit wiring, beams, electrons, photon packets, energy well and bars, wave-model chips, timeline, frequency strip, calculation strips, crossed chips, countdowns, key notes board.

Kit gaps (for the v10 build brief):
1. **Photocell scene.** Beam colour from λ, width from intensity; electron emission gated by hf ≥ ϕ, rate from intensity, top speed from hf − ϕ (within `m7-photoelectric`'s limits).
2. **Energy well.** A slate step of height ϕ, amber photon bars that rise, fall short or clear it, with the excess coloured orange.

## Codex asset brief

Revision 2: no open request; the photocell was delivered in brief 191 and is kept here for the record.

1. **`y12p-photocell-v1.png`** (delivered). A painted school photoelectric cell (vacuum phototube): a clear evacuated glass bulb about the size of a large light bulb, containing a curved half-cylinder metal cathode (dull silver-grey) and a thin straight vertical wire anode at its centre, mounted on a black plastic base with two terminal posts at the front. Side view, slight three-quarter angle so the cathode's curved inner face is visible on the left. No light beam, no glow, no text or labels, no people or hands. Transparent PNG with alpha channel, about 1200 × 1400, object centred with even margins, soft shadow inside the alpha only. Style: match `phys-y11-filament-lamp-v2.png` (glass rendering) and `phys-y11-eht-supply-v1.png` (painted lab equipment, neutral lighting, clean edges). Used in v10 and v11 at about 30% frame height with coded circuit wires joined to the terminals.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text and attempts against the "Numbers used" table.
2. Confirm the physics of every learner-visible claim: the work function definition; the electron volt; the wave model's three predictions; the three observations; the delay estimate's assumptions (author note a); Einstein's photon model and "photons don't team up" (author note b); hf₀ = ϕ; zinc's threshold in the ultraviolet; "about 0.7 eV to spare".
3. Confirm the memory aid's assumptions (see "Memory aid check").
4. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
5. Confirm both attempt cards are original in wording, carry every condition and show nothing answer-bearing.
6. Confirm the syllabus quote matches the route JSON exactly and is labelled 2017.
7. Confirm no person, hand, face or body outline is drawn or requested; scientists are named in text only.
8. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
9. Confirm the narration character count and per-scene counts by script with the build parser rules.
10. Report site notes 1 to 3 under Decisions to root.
11. Revision 2: confirm the grouped denominators (6, 10, 11, 14, model answers); the "ordinary lamp light" labels (8, 11, memory card); the intensity tag "same f: intensity ∝ photons per second per m²" (7); the live bench readouts (Numbers used); the crossed "hc / 700" slip (10); the quartz-window tag and author note (f).

## YouTube metadata (draft)

Title: The Photoelectric Effect: Why Bright Red Light Can't Eject Electrons | HSC Physics Module 7

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module7/lesson16.sa.html

A dim ultraviolet lamp knocks electrons out of zinc, but a bright red lamp never does. See the three photoelectric observations the wave model could not explain (a threshold frequency, energy set by frequency, no delay), why the wave model predicted a wait of over a minute, and how Einstein's photons (E = hf, one photon to one electron) explain all three. Worked photon energies in electron volts and two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 7: The Nature of Light.
Syllabus content (NSW Physics Stage 6, 2017):
"investigate the evidence from photoelectric effect investigations that demonstrated inconsistency with the wave model for light (ACSPH087, ACSPH123, ACSPH137)"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: black-body radiation and Planck. Next: photoelectric graphs, Planck's constant and the work function.

#HSCPhysics #Physics #PhotoelectricEffect #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v09; check that the work function lands before the threshold; that "photons don't team up" is understood as one photon per electron; that the delay estimate is clear at speed; that the attempt cards give nothing away), then the physics check and the Codex error check.
- The brighter red beam that frees nothing, the electron sliding back down the step and the two timeline markers carry the explanation; judge them at playback speed in the voiced preview.

## Revision 2 (7 Nov 2026)

Brief 191 findings (`checks/p-y12-m7-v10-learning-review.md`, `checks/p-y12-m7-v10-science-check.md`): 0 blockers, 3 should fix, 1 optional.
- **Should fix, grouped denominators (scenes 10, 11 and feedback 1).** Resolved: "E_red = (6.626 × 10⁻³⁴)(3.00 × 10⁸) / (7.00 × 10⁻⁷)", "(2.84 × 10⁻¹⁹) / (1.602 × 10⁻¹⁹) = 1.77 eV", "E_UV = ... / (2.50 × 10⁻⁷)", and both feedback 1 rows and model answers now show the grouped hc/λ and J-to-eV divisions; the scene 6 delay also reads "/ (1 × 10⁻²⁰)". Values unchanged (Python: 1.773, 4.963, 2.068, 3.102 eV; 68.9 s). No speech change.
- **Should fix, single-photon scope (scene 8 and the memory card).** Resolved: the scene 8 stage carries the tag "ordinary lamp light", the crossed "2 red photons → 1 electron" tag reads "no teaming up (ordinary lamp light)", scene 11's crossed chip tag adds "ordinary lamp light", and the memory card (12 and notes) carries "(ordinary lamp light)". Author note (b) keeps the multiphoton exception; no learner detour, no speech change.
- **Should fix, intensity tag (scene 7).** Resolved: "same f: intensity ∝ photons per second per m²" replaces "intensity = photons per second"; the Decisions, vocabulary use and memory aid check say the same. Same-size packets kept. No speech change.
- **Optional, photocell window.** Resolved: Decisions "Apparatus", author note (f) and a scene 2 tag "quartz window: lets UV through" record the UV-transmitting window needed at 250 nm.

High-risk redesign (audit list; scene level):
- Revision 1 held one surface inset and a chips panel from scene 2 to scene 6 (about 158 s) and the surface from 7 to 9 (about 89 s). Revision 2 gives every scene its own stage: photocell (2); greyed wave-model surface with the predictions panel (3); the live photocell bench with frequency and brightness sliders (4, 5, about 44 s); the delay timeline beside the zinc surface (6); a full-width surface for the photon packets (7); the energy well (8); the live bench again with photon-energy, ϕ and K_max readouts (9); working (10, 11, about 66 s). The predictions panel becomes a strip of three chips along the top so each is crossed on cue. No set-up runs past about 70 s.

Visual upgrade (to `../maths-visual-standard.md` and the build gate):
- Decisions gain "Colour key (Revision 2)", "Type sizes", "Anchor", "Simulation", "Board stages" and "Question cards".
- Plates: the photocell, bench lamps and zinc plate were delivered and inspected; the anchor is v09's painted zinc-and-lamps frame; the photocell carries 2, 4, 5 and 9; the lamps return on both question cards.
- Live control: the photocell bench's frequency slider (Python: 700, 400, 289, 250, 200 nm give 1.77, 3.10, 4.30, 4.96, 6.20 eV and K_max 0, 0, 0, 0.66, 1.90 eV against ϕ = 4.3 eV) and brightness slider (photocurrent only).
- Hand tags and a pen mark in role colours in every teaching scene ("dim UV: electrons out", "bright red: none", "to escape, climb out", "soak it up", "brighter, longer", "zinc: UV only", "K_max up", "more electrons, same K_max", "≈ 7 × 10¹⁰ times", "same f: intensity ∝ photons per second per m²", "no teaming up", "more photons, same weak photon", "left over → kinetic energy", "λ in metres", "nm → m first", "≈ 0.7 eV left over"; pen rings, brackets and arrows on the dots, the step, f₀, the meter, the timeline gap, the photon-electron pair and the answers).
- Framed answers: 69 s (6), hf₀ = ϕ (8), 1.77 eV (10), 4.96 eV (11), both A1 rows (14), the A2 row (16). New crossed slip: "E = hc / 700 = 2.84 × 10⁻²⁸ J" (10).
- Question cards arrive with full text and a picture (painted lamps and plate) in one move; the answer side has a givens strip and energy-well bars.
- Key notes cut from five long items (about 720 characters) to five short bullets (about 260 characters) with the framed memory card; quiet notes hold 60 s to 45 s.
- Type sizes stated; colour roles fixed.

New plate requests: none.

Joins: the opening is v09's final frame, which v09 Revision 2 keeps unchanged. The final frame (scene 17) is unchanged, so the v11 join holds.

Counts: 6,277 to 6,277 characters (scene sum; no narration change); about 556 s to about 541 s.
