# Year 12 Physics M7 V10: The photoelectric effect. Why can bright low-frequency light fail to eject electrons? (design)

Status: Revision 1 (6 Nov 2026): first design. Needs independent learning review and science check before voicing.

Narration 6,277 characters, 18 scenes, about 556 s, counted by script with the build parser rules (see "Narration length estimate"). Opens on v09's final frame.

Scope: tenth video of Year 12 Physics Module 7 (The Nature of Light, Physics Stage 6, 2017 syllabus), inquiry question "What evidence supports the particle model of light and what are the implications of this evidence for the development of the quantum model of light?". Templates as `phys-y12-m6-v13.md`; `math-a12-d10.md` for the calculation layout. No pre-design pack exists; the pack work is done here (2017 wording from the ledger, site givens kept, every number recalculated in Python with HSC data-sheet constants, original attempts, asset reuse). Site lessons read in full (6 Nov, read-only, through the brief 168 text extracts, hashes checked against the live files): lesson 16, orient and predict (dim UV and bright red lamps on zinc, warm-up, intentions, vocabulary: photon, work function, threshold frequency, stopping voltage, photocurrent), "observe-what-the-wave-model-cannot-explain" (three observations, Figure 1 apparatus, Stop and Check 2.3 eV), "apply-einsteins-photon-model" (four equations, E_k,max against f graph, Stop and Check sodium, MC 3.0 eV), "derive-planck-constant-from-millikans-data", common mistakes, apply and consolidate (Activities 1 and 2 including the 1 W m⁻² delay estimate, "Analyse 7 marks", "Assess 6 marks"), practice Q1 and Q2, reflect: `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson16.sa.html`, SHA256 `ee650dbe40253bac16a45b31df6585aa1a0a361df1ea623162ea33ec6b660806`; lesson 10 (read in full for v09; section "wave-model-crisis" used here): SHA256 `3c6b866e16c1a9a0da5fd4b379c32c64cd1abbb96412642f19fdcb41efca4bc1` (both recomputed 6 Nov; match the route). Route entry: `phys-y12-m7-v10`, sections `observe-what-the-wave-model-cannot-explain`, `apply-einsteins-photon-model` (lesson 16) and `wave-model-crisis` (lesson 10). Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Use threshold frequency and immediate emission evidence to contrast wave-only energy accumulation with photon transfer. Stop before graph calculations." Next: "phys-y12-m7-v11: How do photoelectric graphs reveal Planck constant and work function?"

Owner rules applied: 2017 syllabus quoted exactly; no people, hands, faces or body outlines; the photocell circuit schematic, photons, electrons, energy bars and calculation strips are coded, HSC style; the zinc plate, the bench lamps, the photocell and the multimeter are painted plates (one new, three reused), scaled uniformly, never stretched; every number recalculated in Python with h = 6.626 × 10⁻³⁴ J s, c = 3.00 × 10⁸ m s⁻¹ and e = 1.602 × 10⁻¹⁹ C; data-sheet symbols E = hf, K_max = hf − ϕ; a 3 s prediction; "Pause here to answer." with a 10 s countdown; brief feedback with one crossed-out mistake; original attempts; scientists named in words only; Australian spelling; no em dashes. Recalled, not re-taught: v09 (Planck's packets E = hf), v01 (light as an electromagnetic wave carrying energy), Module 6 (work done on a charge W = qV, used once to define the electron volt), Year 11 (c = fλ, kinetic energy, intensity).

Syllabus content (Physics Stage 6 (2017), Module 7; ledger id `P7-IQ3-02`), quoted from the route JSON `syllabusActions`:

- `P7-IQ3-02`: "investigate the evidence from photoelectric effect investigations that demonstrated inconsistency with the wave model for light (ACSPH087, ACSPH123, ACSPH137)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 59)

**Boundary:** starts on v09's final frame (the zinc plate under a dim ultraviolet lamp and a bright red lamp). Teaches: the photoelectric effect and photoelectrons; the photocell (cathode, anode, ammeter, photocurrent); the work function as the minimum energy to free a surface electron; the electron volt; the wave model's three predictions (any frequency eventually; brighter gives faster electrons; dim light gives a delay); the three observations (threshold frequency, kinetic energy set by frequency and number set by intensity, no measurable delay); the wave model's delay estimate (about 70 s for zinc) against about 10⁻⁹ s; Einstein's photon model (E = hf, one photon to one electron, intensity as photon number); how it explains each observation; the zinc check with E = hc/λ (red 1.77 eV, ultraviolet 4.96 eV against 4.3 eV). Names K_max = hf − ϕ only as the handoff. Stops before stopping voltage, graphs and the gradient (v11).

## Decisions

- **Learner question (route wording kept).** "Why can bright low-frequency light fail to eject electrons?" is the causal puzzle. The answer, built in order: a surface electron needs at least the work function to escape (2); the wave model said energy accumulates, so brightness or time should win (3); experiments show a frequency threshold, frequency-set energy and no delay (4 to 6); Einstein: light's energy comes in photons of hf, one photon per electron, so a weak photon can never do it and more weak photons do not help (7, 8).
- **Hook (site lesson 16 "Before you read", re-staged from v09's final frame).** The dim ultraviolet lamp ejects electrons from zinc, the bright red lamp does not. 3 s prediction: "Which should the wave model favour: the bright lamp or the high-frequency lamp?" Answer: the bright one; it fails.
- **Apparatus (site Figure 1).** The painted photocell `y12p-photocell-v1.png` with a coded circuit (cathode, anode, ammeter shown by the reused multimeter plate, no supply yet; the variable supply and stopping voltage are v11). The kit family `m7-photoelectric` ("ideal collector with ammeter, no variable stopping-voltage circuit") supplies the coded electron and beam layer.
- **Work function (site vocabulary).** Plain meaning: the minimum energy needed to free an electron from the metal's surface; electrons are held in by the positive ions. Zinc about 4.3 eV (site Activity 2 value). The electron volt is defined once ("the energy one electron gains crossing one volt", 1.602 × 10⁻¹⁹ J), linked to Module 6's W = qV on screen only.
- **Wave model's predictions (site "Analyse 7 marks" step 2: "energy is continuous, and intensity is what carries it").** One paragraph generates all three predictions, each a chip that is later crossed.
- **Observations (site "observe-what-the-wave-model-cannot-explain", three numbered features).** Each gets a short scene: threshold (4), energy set by frequency, number by intensity (5), no delay (6).
- **Delay estimate (site Activity 2, re-staged for zinc).** 1 W m⁻², electron collecting all the energy falling on 10⁻²⁰ m² (about one atom's cross-section, 0.1 nm square), zinc's 4.3 eV: 6.89 × 10⁻¹⁹ J / 10⁻²⁰ W = 69 s ("over a minute"), against about 10⁻⁹ s observed (site "Analyse 7 marks" step 5). The assumption is shown on screen (author note a). The ratio is said as "tens of billions of times shorter" (6.9 × 10¹⁰).
- **Photon model (site "apply-einsteins-photon-model").** E = hf (v09's packet, now for light), intensity as photons per second, one photon to one electron in one interaction. "Photons don't team up on one electron" is the plain form of "no accumulation" (author note b).
- **Leftover energy (preparing v11).** Scene 9 says "any energy left over becomes the electron's kinetic energy" and shows "K_max = hf − ϕ (next video)" as a tag; no calculation of K_max beyond "about 0.7 eV to spare" in scene 11 (route "stop before graph calculations").
- **Worked check (site hook made quantitative).** E = hc/λ (from E = hf and c = fλ): red 700 nm: 2.84 × 10⁻¹⁹ J = 1.77 eV; ultraviolet 250 nm: 7.95 × 10⁻¹⁹ J = 4.96 eV; zinc 4.3 eV. Two stages (red, then ultraviolet), with the zinc value kept on screen. The 1240 eV nm shortcut (site) is not taught (author note c).
- **Memory aid (scene 12): "One photon, one electron. Frequency decides whether; brightness decides how many."** See "Memory aid check".
- **Attempts (original, HSC style).** A1 (3 marks): potassium 2.3 eV (site value), bright orange 600 nm (2.07 eV, none) and dim violet 400 nm (3.10 eV, ejects). Crossed: "the brighter lamp". A2 (2 marks, evaluate): "dim red light on zinc for long enough will eject electrons". Crossed: "eventually, yes".
- **Significant figures.** Photon energies to three figures; work functions as the site gives them (4.3, 2.3 eV).
- **Handoff (route next).** Scene 17 ends on an energy bar for one ultraviolet photon on zinc split into "ϕ" and "left over: kinetic energy", the equation "K_max = hf − ϕ" and an empty K_max against f axes with "?"; chip "Next: how do photoelectric graphs reveal Planck's constant and work function?". See "Final frame".
- **Colour key (v09 proposal):** photons amber packets labelled with f or λ; electrons navy dots; work function slate; kinetic energy orange; wave-model chips grey, crossed in red.
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
- **Open decisions for root:**
  - **1. New plate `y12p-photocell-v1` (Codex).** If not made, scene 2 uses a coded HSC phototube outline; the zinc plate and lamps carry the hook.
  - **2. The delay estimate (scene 6) (learning review).** Keep (it turns "no delay" into a quantitative contradiction) or trim to one sentence if the voiced take runs long.
  - **3. The electron volt definition in scene 2 (learning review).** Students may meet the eV only here; keep the one-sentence definition unless v08 or an earlier Module 7 design already defines it.

Main question: *If brighter light carries more energy, why can't a bright red lamp knock electrons out of zinc?*
Entry knowledge: Planck's packets E = hf (v09); light carries energy (v01); W = qV (Module 6); c = fλ (Year 11).
Stops after: the photoelectric effect, the work function, the three observations and the wave model's failed predictions, Einstein's photon model explaining each, the zinc check in electron volts. No stopping voltage or graphs.
Handoff: v11, how photoelectric graphs reveal Planck's constant and the work function.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *ϕ*, *f₀*, *E*, *h*, *f*, *λ*, *K_max*.

### 1. hook (two lamps, one winner)
> Here's the puzzle from last time. A clean zinc plate sits under two lamps. The ultraviolet lamp is dim, but electrons fly off the zinc straight away. The red lamp is far brighter, and nothing comes off, even turned right up. Which lamp should the wave model of light favour, the bright one, or the high-frequency one? Make your **prediction**. Waves say brightness should win. It doesn't. So why can bright low-frequency light fail to eject **electrons**?

Visual: opens on v09's final frame (see "Opening frame"); the chip becomes the heading: "Why can bright low-frequency light fail to eject electrons?". On "A clean zinc plate sits under two lamps" both lamps pulse once. On "electrons fly off the zinc straight away" the violet beam's navy electron dots leave the plate, tag "dim ultraviolet: electrons out". On "nothing comes off" the red beam's area of the plate pulses, tag "bright red: none". On "even turned right up" the red beam widens and brightens twice (tag "brighter"), still no dots. On "prediction" a 3 s `Countdown` beside chips "bright lamp", "high-frequency lamp". On "Waves say brightness should win" the "bright lamp" chip highlights with a grey tag "wave model". On "It doesn't" the chip is crossed. On "electrons" the heading underlines "bright low-frequency".

### 2. the photoelectric effect and the work function
> Light knocking electrons out of a metal is called the photoelectric effect. In the lab we use a photocell, an evacuated tube with a metal plate called the cathode, and a collecting wire called the anode. Light hits the cathode, electrons cross the gap, and an ammeter measures the photocurrent. Inside the metal, electrons are held in by the positive ions. The minimum energy needed to free one from the surface is called the work function, **phi**. Zinc's is about four point three electron volts, and one electron volt is one point six zero two times ten to the minus nineteen **joules**.

Visual: board change: the painted photocell `y12p-photocell-v1.png` at centre left, with a coded circuit drawn from its terminals to the reused multimeter plate `phys-y11-digital-multimeter-v1.png` (its coded display reads "photocurrent"). On "photoelectric effect" a definition chip "photoelectric effect: light ejects electrons from a metal surface". On "the cathode" a label arrow "cathode (metal)"; on "the anode" a label arrow "anode (collector)". On "electrons cross the gap" the bench lamp shines a violet coded beam onto the cathode and navy dots cross to the anode; on "photocurrent" the meter display ticks up "I". On "held in by the positive ions" a zoom inset of the metal surface: a row of "+" ions with navy electrons, and an energy step (slate) at the surface edge, tag "to escape, climb out". On "phi" the step is labelled "work function ϕ = minimum energy to free a surface electron". On "Zinc's is about four point three electron volts" tag "zinc: ϕ ≈ 4.3 eV". On "joules" a small chip "1 eV = 1.602 × 10⁻¹⁹ J (W = qV, Module 6)".

### 3. what the wave model predicts
> In the wave model, light's energy is spread smoothly across the wavefront, and brighter light delivers more energy every second. An electron should soak up energy gradually until it has enough to escape. That gives three clear **predictions**. Any frequency should work, if the light is bright enough or shines long enough. Brighter light should give the escaping electrons more kinetic **energy**. And dim light should need time to build up, so there should be a **delay**.

Visual: the zinc surface inset stays at the left. On "spread smoothly across the wavefront" a grey coded wavefront washes evenly over the surface; on "brighter light delivers more energy every second" its amplitude grows and a tag "intensity: energy per second per m²". On "soak up energy gradually" one electron's small orange energy bar fills slowly against the slate step. On "predictions" a grey panel headed "Wave model predicts" appears on the right. On "Any frequency should work" chip 1 "any frequency works if bright or long enough". On "energy" chip 2 "brighter → faster electrons". On "delay" chip 3 "dim light → a delay while energy builds up".

### 4. observation 1: a threshold frequency
> Experiments said no to all three. First, every metal has a threshold frequency, f zero. Below it, no electrons come out at all, however bright the light, and however long you **wait**. Above it, electrons come out. For zinc, the threshold is in the ultraviolet, so red light never **works**.

Visual: the photocell returns at the centre with a frequency dial (coded) on the lamp. On "threshold frequency, f zero" a horizontal frequency strip appears under the tube with a slate marker "f₀". On "Below it" the dial moves below f₀: the beam widens and brightens and a clock icon spins (tag "brighter, longer"), but no electrons leave; the meter reads "0". On "wait" chip 1 on the right is crossed. On "Above it, electrons come out" the dial passes f₀ and dots leave immediately. On "works" the strip marks "red (4.3 × 10¹⁴ Hz)" well below "zinc f₀ (≈ 1.0 × 10¹⁵ Hz, ultraviolet)".

### 5. observation 2: frequency sets the energy, brightness sets the number
> Second, the electrons' maximum kinetic energy depends on the frequency, not the brightness. Raise the frequency, and the fastest electrons come out **faster**. Make the light brighter at the same frequency, and you get more electrons each second, a bigger photocurrent, but the fastest ones are no **faster**.

Visual: two side-by-side small photocell panels. Left panel, on "Raise the frequency": the beam's label changes from "f" to "higher f" and the dots move faster, with a speed arrow on the fastest dot that lengthens; tag "K_max up". On the first "faster" chip 2 shows a red underline under "brighter". Right panel, on "Make the light brighter at the same frequency": the beam widens, many more dots leave at the same top speed, the meter reading doubles; tag "more electrons, same K_max". On the second "faster" chip 2 is crossed.

### 6. observation 3: no delay
> Third, there's no delay. Even with very dim light above the threshold, electrons appear within about a billionth of a second. The wave model predicts a long wait. Picture a dim lamp delivering one watt per square metre, and an electron collecting all the energy falling on an area the size of one atom, ten to the minus twenty square metres. Collecting zinc's four point three electron volts would take over a **minute**. The real delay is tens of billions of times **shorter**.

Visual: a timeline bar appears. On "within about a billionth of a second" a marker "observed: < 10⁻⁹ s" sits at the far left of the timeline. On "one watt per square metre" givens chip "I = 1 W m⁻²"; on "the size of one atom" a tiny square on the zinc surface highlights, tag "A ≈ 10⁻²⁰ m² (one atom)". On "ten to the minus twenty square metres" `AlignedAlgebra` "P = IA = 1 × 10⁻²⁰ W (J each second)". On "minute" "t = ϕ / P = (4.3 × 1.602 × 10⁻¹⁹) / 10⁻²⁰ ≈ 69 s" and a wave-model marker "predicted: about 69 s" lands far to the right of the timeline. On "shorter" a bracket between the two markers "≈ 7 × 10¹⁰ times"; chip 3 is crossed.

### 7. Einstein's photons
> In 1905, Einstein proposed a radical answer. Light's energy isn't spread smoothly. It arrives in packets called photons, and each photon carries energy E equals h f. That's Planck's packet, now applied to light itself. Brighter light at the same frequency just means more photons each second. And here's the key rule. One photon gives all its energy to one **electron**, in one go.

Visual: board change: the zinc surface inset, larger. On "Light's energy isn't spread smoothly" the grey smooth wavefront from scene 3 dissolves. On "packets called photons" amber packets arrive at the surface one at a time; name tag in words only "Einstein, 1905". On "E equals h f" the equation strip writes "E = hf (one photon)"; chip "v09: Planck's packet, now for light". On "more photons each second" the packet stream gets denser with the same packet size; tag "intensity = photons per second". On "electron" one packet strikes one navy electron, the packet vanishes and its amber energy bar transfers to that electron; tag "one photon → one electron, all its energy".

### 8. why there is a threshold
> Now the threshold makes sense. If a photon's energy h f is less than the work function, that photon can't free an electron. And photons don't team up on one electron, so it doesn't matter how many arrive. Below the threshold, nothing comes out, however bright the **light**. The threshold is where one photon just pays the work function, h times f zero equals **phi**. A brighter red lamp just sends more photons that are each too **weak**.

Visual: the energy well: slate step "ϕ (zinc 4.3 eV)". On "less than the work function" a short amber bar "hf (red)" rises against the step and falls short; the electron climbs part way and slides back. On "photons don't team up on one electron" two short amber bars arrive at one electron one after the other, each sliding back; a crossed chip "2 red photons → 1 electron". On "light" the red stream thickens: many short bars, each falling short. On "phi" a bar exactly level with the step, labelled "hf₀ = ϕ", the equation strip writes "hf₀ = ϕ". On "weak" tag "more photons, same weak photon" and chip 1 on the right shows a crossed state with a note "explained".

### 9. the other two observations
> The other two observations follow. A photon above the threshold frees an electron, and any energy left over becomes the electron's kinetic energy. Higher frequency means bigger photons, so the fastest electrons are **faster**. More photons means more electrons, and a bigger **current**. And there's no delay, because the energy arrives in a single packet. Nothing has to build **up**.

Visual: on "any energy left over" a tall amber bar "hf (ultraviolet)" clears the slate step; the part above the step turns orange, labelled "left over → kinetic energy"; small tag "K_max = hf − ϕ (next video)". On "faster" a taller bar gives a taller orange part and the freed electron's speed arrow lengthens; chip 2 note "explained: energy per photon". On "current" the packet stream thickens and more electrons leave with the same top speed; the meter rises; chip 2 note "intensity: number only". On "up" a single packet strikes and the electron leaves at once; the timeline marker "< 10⁻⁹ s" pulses; chip 3 note "explained: one packet, no build-up".

### 10. worked check: the red photon on zinc
> Let's check the zinc with numbers. Take red light of wavelength seven hundred nanometres. Photon energy is h f, and f is c over lambda, so E equals h c over **lambda**. Six point six two six times ten to the minus thirty four, times three point zero zero times ten to the eight, over seven hundred times ten to the minus nine, is two point eight four times ten to the minus nineteen **joules**. Divide by one point six zero two times ten to the minus nineteen, and that's one point seven seven electron **volts**.

Visual: board change to the working layout, the zinc well small at the top left with "ϕ = 4.3 eV". Task strip: "Do these photons free electrons from zinc?" Equation strip: "E = hf, c = fλ". Givens grouped: "λ_red = 700 nm = 7.00 × 10⁻⁷ m", "λ_UV = 250 nm = 2.50 × 10⁻⁷ m" (light); "h = 6.626 × 10⁻³⁴ J s, c = 3.00 × 10⁸ m s⁻¹, 1 eV = 1.602 × 10⁻¹⁹ J" (data sheet); "ϕ_zinc = 4.3 eV". On "lambda" `AlignedAlgebra` "E = hf = hc / λ". On "joules" "E_red = (6.626 × 10⁻³⁴)(3.00 × 10⁸) / 7.00 × 10⁻⁷ = 2.84 × 10⁻¹⁹ J". On "volts" "= 2.84 × 10⁻¹⁹ / 1.602 × 10⁻¹⁹ = 1.77 eV" (boxed).

### 11. worked check: the ultraviolet photon
> Zinc needs four point three, so a red photon falls well short, and no number of them will **do**. For the ultraviolet, the same working gives seven point nine five times ten to the minus nineteen joules, which is four point nine six electron **volts**. That's more than four point three, so each ultraviolet photon can free an electron, with about zero point seven electron volts to **spare**.

Visual: "E_red = 1.77 eV" stays at the top; the stage 1 lines fade. On "falls well short" the well inset shows a short amber bar "1.77 eV" against the "4.3 eV" step; on "do" a crossed chip "brighter red → electrons" (caption "1.77 eV < 4.3 eV"). On "volts" "E_UV = (6.626 × 10⁻³⁴)(3.00 × 10⁸) / 2.50 × 10⁻⁷ = 7.95 × 10⁻¹⁹ J = 4.96 eV" (boxed). On "spare" the tall bar "4.96 eV" clears the step and its top turns orange "≈ 0.7 eV left over"; tick "4.96 eV > 4.3 eV: electrons freed".

### 12. a way to remember
> Here's a way to remember it. One photon, one electron. Frequency decides whether an electron gets out. Brightness only decides how **many**.

Visual: board clears to the two lamps over the zinc plate. On "One photon, one electron" a single packet strikes a single electron. On "Frequency decides whether" the violet beam's label "f" pulses and an electron leaves. On "many" the violet beam widens and more electrons leave; the handwritten line writes large: "One photon, one electron. Frequency decides whether; brightness decides how many." Hold about 2 seconds.

### 13. attempt 1 (countdown, 10 seconds)
> Your turn. Potassium has a work function of two point three electron volts. A bright orange lamp emits light of wavelength six hundred nanometres, and a dim violet lamp emits light of wavelength four hundred nanometres. Calculate the energy of a photon from each lamp in electron volts, and state which lamp ejects electrons from potassium. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "Potassium has a work function of 2.3 eV. A bright orange lamp emits light of wavelength 600 nm. A dim violet lamp emits light of wavelength 400 nm. (a) Calculate the energy, in electron volts, of a photon from each lamp. (b) State which lamp ejects electrons from potassium. Justify your answer. (3 marks)" Data-sheet chips "h = 6.626 × 10⁻³⁴ J s", "c = 3.00 × 10⁸ m s⁻¹", "1 eV = 1.602 × 10⁻¹⁹ J". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 1 (brief)
> E equals h c over lambda. The orange photon is two point zero seven electron **volts**, below two point three, so no electrons, however bright. The violet photon is three point one zero electron volts, so the violet lamp ejects **electrons**. The slip is choosing the brighter lamp. Brightness sets the number of photons, not their **energy**.

Visual: card shrinks to the top; "2.3 eV", "bright", "dim", "600 nm" and "400 nm" underline. On "volts" "(a) E_orange = hc/λ = 3.31 × 10⁻¹⁹ J = 2.07 eV < 2.3 eV". On "electrons" "E_violet = 4.97 × 10⁻¹⁹ J = 3.10 eV > 2.3 eV → (b) the violet lamp ejects electrons". On "energy" a chip "the bright orange lamp" fades in and is crossed (caption "brightness = number of photons, not energy per photon"). Hold about 1 second.

### 15. attempt 2 (countdown, 10 seconds)
> Last one. A student claims that if dim red light shines on zinc for long enough, electrons will eventually be ejected. Evaluate this claim. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A student claims: 'If dim red light shines on a zinc plate for long enough, electrons will eventually be ejected.' Evaluate this claim. (2 marks)" Data chip "zinc: ϕ = 4.3 eV; red photon: 1.77 eV" (given in scene 11). The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 16. feedback 2 (brief)
> The claim is incorrect. Each red photon has less energy than zinc's work function, and one photon interacts with one electron, so photon energies can't add up. Waiting longer only delivers more photons that are too **weak**. The claim is exactly what the wave model predicted, and experiments ruled it **out**.

Visual: card shrinks to the top; "dim red" and "long enough" underline. On "weak" "red photon 1.77 eV < ϕ = 4.3 eV; one photon → one electron; no build-up → no emission at any time". On "out" a chip "eventually, yes" fades in and is crossed (caption "wave-model prediction, not observed"). Hold about 1 second.

### 17. handoff
> So light hands over its energy in packets, one photon to one electron, and whatever is left after paying the work function becomes kinetic energy. That's an energy statement you can write as an equation, and test with a graph. So how do photoelectric graphs reveal Planck's constant and the work **function**?

Visual: board clears (camera change). On "one photon to one electron" a single amber packet "hf" strikes a navy electron at the zinc surface. On "whatever is left after paying the work function" a vertical energy bar for "hf (4.96 eV)" splits into a slate lower part "ϕ (4.3 eV)" and an orange upper part "left over: kinetic energy"; the equation writes "K_max = hf − ϕ". On "test with a graph" an empty pair of axes draws on the right: "K_max" up, "f" along, with a "?" where a line would go. On "function" the chip "Next: how do photoelectric graphs reveal Planck's constant and work function?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 18. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Photoelectric effect: light ejects electrons from a metal. Work function ϕ: the minimum energy to free a surface electron (zinc about 4.3 eV). 1 eV = 1.602 × 10⁻¹⁹ J.
2. Observations: a threshold frequency f₀ (no emission below it at any intensity); maximum kinetic energy set by frequency; intensity sets the number of electrons (photocurrent); no delay (under 10⁻⁹ s).
3. Wave model predicted the opposite: any frequency eventually, brighter gives faster electrons, dim light gives a delay.
4. Photon model (Einstein, 1905): light arrives as photons, E = hf = hc/λ; one photon gives all its energy to one electron. hf < ϕ: no emission, however many photons. hf₀ = ϕ.
5. Zinc: red 700 nm photon 1.77 eV (no); ultraviolet 250 nm photon 4.96 eV (yes).

Memory aid (large, on the notes screen): *One photon, one electron. Frequency decides whether; brightness decides how many.*

## Teaching checks

- **Does it explain causes?** Why a minimum energy exists: electrons are held by the ions (2). Why the wave model expected brightness or time to win: energy spread smoothly and accumulating (3). Why bright red fails: each photon is too small and photons do not add on one electron (8). Why frequency sets the speed and brightness the number (9). Why there is no delay (9).
- **Misconceptions addressed:** brighter light gives faster electrons (5, 14 crossed); long exposure eventually works (16 crossed); intensity is energy per photon (7, 9); photons combine (8).
- **One idea at a time:** the effect and ϕ (2), predictions (3), each observation (4 to 6), photons (7), each explanation (8, 9), numbers (10, 11).
- **Video makes it easier:** the brighter red beam that still frees nothing (1, 4, 8); the electron sliding back down the step (8); the two timeline markers 10¹⁰ apart (6); the amber bar splitting into ϕ and kinetic energy (9, 17).
- **Response opportunity:** one prediction (3 s) and two unseen HSC-style tasks with every condition visible, 10 s each; nothing answer-bearing. One crossed mistake each; feedback about 25 s and 23 s.
- **Avoided double teaching:** Planck's packets (v09), W = qV (Module 6) and c = fλ (Year 11) recalled in a clause.
- **Syllabus coverage:** `P7-IQ3-02`: photoelectric investigations showing inconsistency with the wave model: threshold (4, 8), frequency-dependent energy and intensity-dependent number (5, 9), instantaneous emission with the quantified delay (6, 9); Einstein's resolution (7 to 9). The investigation itself (measurement with a photocell) continues in v11.
- **Out of scope by design:** stopping voltage, K_max calculations and graphs (v11); the Compton effect (not routed); wave-particle duality (later).

## Practice questions and model answers

**Attempt 1 (scene 13; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "Potassium has a work function of 2.3 eV. A bright orange lamp emits light of wavelength 600 nm. A dim violet lamp emits light of wavelength 400 nm. (a) Calculate the energy, in electron volts, of a photon from each lamp. (b) State which lamp ejects electrons from potassium. Justify your answer."
Model answer: (a) E = hc/λ. Orange: (6.626 × 10⁻³⁴)(3.00 × 10⁸)/(6.00 × 10⁻⁷) = 3.31 × 10⁻¹⁹ J = 2.07 eV. Violet: (6.626 × 10⁻³⁴)(3.00 × 10⁸)/(4.00 × 10⁻⁷) = 4.97 × 10⁻¹⁹ J = 3.10 eV. (b) Only the violet lamp: its photons (3.10 eV) exceed the work function (2.3 eV); each orange photon (2.07 eV) is below it, and since one photon interacts with one electron, the orange lamp's brightness (more photons) cannot eject electrons. Classic mistake (crossed): "the bright orange lamp".

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
| Site checks | Activity 2 (2.3 eV): 37 s; Stop and Check: 1.01 eV, 5.56 × 10¹⁴ Hz; MC 0.73 eV; hc/(2.50 eV) = 496 nm | site notes |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov, `numbers.py` in the session scratchpad); Codex to re-check.

- 6.626e-34 × 3.00e8 / 7.00e-7 = 2.840e-19 J; /1.602e-19 = 1.773 eV; 3.00e8/7.00e-7 = 4.286e14 Hz.
- 6.626e-34 × 3.00e8 / 2.50e-7 = 7.951e-19 J = 4.963 eV; 4.963 − 4.3 = 0.66 eV.
- 4.3 × 1.602e-19 = 6.889e-19 J; /6.626e-34 = 1.040e15 Hz; hc/6.889e-19 = 2.886e-7 m.
- 6.889e-19 / 1e-20 = 68.9 s; 68.9 / 1e-9 = 6.9e10.
- 600 nm: 3.313e-19 J = 2.068 eV; 400 nm: 4.970e-19 J = 3.102 eV.

## Memory aid check

- **"One photon, one electron. Frequency decides whether; brightness decides how many."** Meaning, as said in scene 12: each photon interacts with a single electron; whether that electron escapes depends on the photon's energy hf, so on frequency; intensity (photons per second) sets how many electrons escape. Assumptions checked: ordinary (not laser) intensities, so no multi-photon absorption (author note b); "how many" holds above the threshold (below it, brightness gives zero); a photon above threshold frees at most one electron, and not every photon frees one (quantum efficiency is below 1), which does not change the proportionality. It helps a new case: A1 (orange versus violet) and A2 (time does not help). Introduced after the explanation (7 to 9).
- **Considered, not used:** a coin-machine analogy (would need painted coins and adds money ideas; the energy-step bars already show the same thing).

## Narration length estimate

Revision 1 count (6 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **6,277 characters**, 18 scenes. Characters per scene (1 to 18): 447, 582, 462, 283, 301, 470, 377, 428, 373, 501, 381, 136, 362, 331, 161, 302, 305, 75. At 13.3 characters per second the speech is about 472 s; add about 3 s for the prediction countdown, 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 55 s more of the quiet notes hold (about 84 s of holds and countdowns): **about 556 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 6's area sentence (keep the 69 s on screen); scene 2's electron-volt clause (keep the chip); scene 11's "to spare" clause.

## Opening frame

v09's final frame (designed in this wave, `phys-y12-m7-v09.md`): paper background; heading "How did thermal spectra challenge classical predictions?"; at the top left a small coded oscillator energy ladder with "E = hf"; an amber wave train breaking into packets, tag "light in packets? (Einstein, 1905)"; at the centre the painted zinc plate `phys-y11-metal-plate-v1.png`, tag "clean zinc plate"; two copies of the painted bench lamp `y12p-bench-lamp-v1.png`, upper left with a thin violet coded beam (tag "ultraviolet, dim") and a few navy electron dots leaving the plate (tag "electrons out"), upper right with a broad bright red coded beam (tag "red, very bright") and no electrons (tag "electrons: none"); chip "Next: why can bright low-frequency light fail to eject electrons?". Scene 1 turns the chip into the heading; the ladder and packet train fade.

## Final frame

The last explained frame (end of scene 17, before the key-notes board): paper background; heading "Why can bright low-frequency light fail to eject electrons?"; at the left a coded zinc surface with one amber photon packet "hf" striking one navy electron; in the middle a vertical energy bar "hf (4.96 eV)" split into a slate lower part "ϕ (4.3 eV)" and an orange upper part "left over: kinetic energy"; the equation "K_max = hf − ϕ" under it; on the right empty axes, "K_max" up and "f" along, with a "?" where a line would go; chip "Next: how do photoelectric graphs reveal Planck's constant and work function?". v11 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m7-v10` (route phys-y12-m7-v10). Suggested explainer folder `src/explainer/lessons/phys-y12-m7-v10` and build folder `docs/production/claude-pm/lessons/p-y12-m7-v10` (root to confirm).

In order (kebab-case; 18 scene headings, all `### N.`): hook, effect-work-function, wave-predictions, threshold, frequency-vs-intensity, no-delay, photons, why-threshold, other-observations, worked-red, worked-uv, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Scene 1 is `explain` with a 3 s prediction countdown. `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: photocell scene (beam colour and width, electron dots, meter), photon packets, energy well and bars, wave-model chips, timeline, `AlignedAlgebra`, `NumberTicker`, `PenArrow`, `Countdown`, `CameraStage`. Transitions (`pickTransition`): 1 to 2 clear change to the photocell; 2 to 3 camera continue (surface inset); 3 to 4 to 5 to 6 camera continue (chips panel stays); 6 to 7 clear change; 7 to 8 to 9 camera continue; 9 to 10 clear change to working; 10 to 11 camera continue; 11 to 12 clear change; attempts and feedback card shrink to the top; 16 to 17 clear change; 17 to 18 fade to the notes board.

Holds: hook (3 s countdown), memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 60 s). Review evidence paths: `learning_review` = `checks/p-y12-m7-v10-learning-review.md`, `science_check` = `checks/p-y12-m7-v10-physics-check.md`.

## Assets

Have (inspected 6 Nov on a session contact sheet; scaled uniformly only, never stretched):
- `public/assets/physics/phys-y11-metal-plate-v1.png` (1536 × 1024, RGBA): "clean zinc plate" (1, 12).
- `public/assets/physics/phys-y11-digital-multimeter-v1.png` (1086 × 1448, RGBA): the ammeter, display overlaid in code (2, 4, 5, 9).
- `y12p-bench-lamp-v1.png` (requested by v09): both lamps (1, 2, 4, 5, 12).
- **Checked, not used:** `phys-y11-torch-v1.png` (a handheld torch reads as a person's tool; the bench lamp is lab equipment); `phys-y11-light-meter-v1.png` (not needed until v11's intensity control, and not used there either).

Need (new plate):
1. `y12p-photocell-v1.png`: 2, 4, 5, 9; v11 (2, 3, 4).

Coded: circuit wiring, beams, electrons, photon packets, energy well and bars, wave-model chips, timeline, frequency strip, calculation strips, crossed chips, countdowns, key notes board.

Kit gaps (for the v10 build brief):
1. **Photocell scene.** Beam colour from λ, width from intensity; electron emission gated by hf ≥ ϕ, rate from intensity, top speed from hf − ϕ (within `m7-photoelectric`'s limits).
2. **Energy well.** A slate step of height ϕ, amber photon bars that rise, fall short or clear it, with the excess coloured orange.

## Codex asset brief

1. **`y12p-photocell-v1.png`** (new). A painted school photoelectric cell (vacuum phototube): a clear evacuated glass bulb about the size of a large light bulb, containing a curved half-cylinder metal cathode (dull silver-grey) and a thin straight vertical wire anode at its centre, mounted on a black plastic base with two terminal posts at the front. Side view, slight three-quarter angle so the cathode's curved inner face is visible on the left. No light beam, no glow, no text or labels, no people or hands. Transparent PNG with alpha channel, about 1200 × 1400, object centred with even margins, soft shadow inside the alpha only. Style: match `phys-y11-filament-lamp-v2.png` (glass rendering) and `phys-y11-eht-supply-v1.png` (painted lab equipment, neutral lighting, clean edges). Used in v10 and v11 at about 30% frame height with coded circuit wires joined to the terminals.

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
