# Year 12 Physics M7 V01: Maxwell and light. How did Maxwell connect electricity and magnetism to light? (design)

Status: Revision 1 (6 Nov 2026): first design. Needs independent learning review and science check before voicing.

Narration 6,100 characters, 14 scenes, about 543 s, counted by script with the build parser rules (see "Narration length estimate"). Opens on phys-y12-m6-v20's final frame. First video of Module 7.

Scope: first video of Year 12 Physics Module 7 (The Nature of Light, Physics Stage 6, 2017 syllabus), inquiry question "What is light?". Templates: `phys-y12-m6-v20.md` (this run's structure), `phys-y11-fa1-v01.md`, `math-a12-d10.md` (calculation layout), `bio-y11-fa1-v05.md` (plates and asset brief). No pre-design pack exists; the pack work is done here (2017 wording from the ledger, site givens unchanged, every number recalculated in Python, original attempts, asset reuse). Site lessons read in full (6 Nov, read-only, through the brief 168 text extracts `work/brief168/module7-lesson01.sa.txt` and `module7-lesson02.sa.txt`, hashes checked against the live files): lesson 1 (orient and predict, map the seven regions, link speed, frequency and wavelength, photon calculations, ionising versus non-ionising, apply and synthesise, Maxwell predicts EM waves with "Analyse 6 marks" and "Assess 5 marks", independent practice, retrieve), `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson01.sa.html`, SHA256 `28881cb201739957186a78903724b2ee23ae40adc2a4abf95f14b0ba2a940e89`; lesson 2 (orient and predict, explain EM wave production, intensity and boundaries, inverse-square investigation, intensity problems, apply and consolidate with "Describe 6 marks" and "Analyse 6 marks", independent practice, retrieve), `.../module7/lesson02.sa.html`, SHA256 `0e45d6ff94139c9f9c53183e29cdfcb1951590f6f45822baf2c5643aae7b0d63` (both recomputed 6 Nov; match the route). Route entry `phys-y12-m7-v01`, sections `maxwell-predicts-em-waves` (lesson 1) and `explain-em-wave-production` (lesson 2). Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Explain changing fields and accelerating charges producing propagating transverse electromagnetic waves, with vacuum speed. Stop before spectrum identification." Next: "phys-y12-m7-v02: How can a time-and-distance measurement reveal the speed of light?"

Owner rules applied: 2017 syllabus quoted exactly; one main learner question; no people, hands, faces or body outlines (Maxwell and Hertz are named in words only and never drawn; the spark apparatus is painted without any operator); real apparatus as painted plates (spark-gap transmitter, loop receiver, reused radio mast); fields, charges, capacitor schematic, wave geometry and calculation strips coded; every number recalculated in Python; HSC data-sheet constants; a 3 s prediction; "Pause here to answer." with a 10 s countdown; brief feedback with one crossed mistake; original attempts; optional key notes; Australian spelling; no em dashes. Recalled, not re-taught: phys-y12-m6-v20's handoff (a changing magnetic field creates a curling electric field), m6 v10 (Faraday's law), Year 11 waves (transverse waves, frequency, wavelength, v = fλ).

Syllabus content (Physics Stage 6 (2017), Module 7 The Nature of Light; ledger ids `P7-IQ1-01`, `P7-IQ1-02`), quoted from the ledger `docs/production/programme/syllabus/phys-2017-y12.json`:

- `P7-IQ1-01`: "investigate Maxwell’s contribution to the classical theory of electromagnetism, including:" "unification of electricity and magnetism", "prediction of electromagnetic waves", "prediction of velocity (ACSPH113)"
- `P7-IQ1-02`: "describe the production and propagation of electromagnetic waves and relate these processes qualitatively to the predictions made by Maxwell’s electromagnetic theory (ACSPH112, ACSPH113)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (pages 58 to 59)

**Boundary:** starts on v20's final frame (copper ring end-on, changing B, curling blue E, chip "changing E → B?"). Teaches: unification (a changing electric field also makes a magnetic field, shown with a charging capacitor; one theory for both fields); the self-sustaining wave (each changing field regenerates the other; no medium; E perpendicular to B, both perpendicular to travel; in phase; transverse); production (accelerating charges in an antenna; stationary and constant-velocity charges do not radiate; wave frequency equals oscillation frequency); the predicted speed c = 1/√(μ₀ε₀) = 3.00 × 10⁸ m s⁻¹ from electrical and magnetic constants, matching the measured speed of light, so light is an electromagnetic wave; confirmation (Hertz's spark-gap waves, v = fλ, reflection, refraction, polarisation); the family of EM waves all at c in a vacuum, c = fλ. Stops before measuring c (v02), spectra and spectral identification (v03), photons and E = hf (later in Module 7), intensity and the inverse-square law (site lesson 2 sections not in this route entry).

## Decisions

- **Learner question (route wording kept).** "How did Maxwell connect electricity and magnetism to light?" The answer, in order: his equations unified the two fields, each able to create the other (2); so a self-sustaining transverse wave of fields is possible (3), launched by accelerating charges (4); the equations fixed its speed from two electrical constants, and it equalled the speed of light (5); Hertz's waves confirmed it (6).
- **Hook (v20's handoff).** v20 ends with "changing E → B?". Scene 1 answers "yes" and states the surprise (a calculated speed). The prediction asks what that speed matched (chips: "the speed of sound", "the speed of light", "no known speed").
- **Unification shown, not just named (site `maxwell-predicts-em-waves`, syllabus example 1).** The charging capacitor shows a magnetic field round a gap where no charge flows; this is the case that makes the new idea concrete. The term "displacement current" is not used (author note b).
- **Wave geometry (site lesson 2 Figure 1; kit family `m7-em-geometry`).** E vertical (blue), B into and out of the page (slate dots and crosses) or horizontal in the 3-D view, propagation right (navy); E and B in phase and both zero at the same points. Narration names "transverse", "in phase" and "no medium" because the site's "Describe 6 marks" model answer awards each separately.
- **Production (site `explain-em-wave-production`).** Accelerating charges in an antenna; the site's "Say accelerating, not simply moving" point becomes the scene's contrast (still charge, steady current, accelerating charge). The site's list of production mechanisms by region is not used (it belongs with the spectrum; see site note 2).
- **Predicted speed (syllabus example 3; site Link 2 and 3).** Calculation layout as `math-a12-d10.md`: task strip, equation strip, grouped givens with units, then three stages. The narration stresses that μ₀ and ε₀ came from coils and capacitors, which is the site's "decisive point". Maxwell's own historical figure is not quoted (author note c).
- **Hertz (site "Assess 5 marks").** Spark-gap transmitter and loop receiver; v = fλ recalled with illustrative values (tagged); reflection, refraction and polarisation named. The photoelectric hint in Hertz's apparatus is left to later Module 7 videos.
- **Family of EM waves (site `map-the-spectrum`, one sentence).** All seven regions named once as EM waves at c in a vacuum with c = fλ; no region details, uses or photon energies (route stop "before spectrum identification").
- **Memory aid (scene 8, new):** "Change E, make B. Change B, make E. Shake a charge, and it runs off at c." See "Memory aid check".
- **Attempts (original, HSC style).** A1: outline Maxwell's predictions and why they identified light as an EM wave (3 marks). A2: radio antenna at 98.5 MHz: describe production and calculate λ (3 marks). Crossed: A1 "Maxwell measured the speed of light"; A2 "λ = 3.00 × 10⁸ / 98.5 = 3.05 × 10⁶ m".
- **Handoff (route next).** Scene 13: the speed is enormous (about 10 ns across a 3 m room), so how could it be measured? Next: "How can a time-and-distance measurement reveal the speed of light?". See "Final frame".
- **Module 7 colour key (proposed for the module; root to confirm):** electric field blue and magnetic field slate grey (continuing root decision m6-1); direction of travel navy; oscillating or accelerating charges rose; calculation strips ink with results orange; measured historical values grey chips; light beams pale amber.
- **Site sources used:** lesson 1 `maxwell-predicts-em-waves` (unification, prediction, c = 1/√(ε₀μ₀), Hertz, "Analyse 6 marks" chain), lesson 1 `map-the-spectrum` (one sentence), lesson 2 `explain-em-wave-production` (accelerating charges, perpendicular fields, transverse, in phase, no medium, "Describe 6 marks"). Not used: photon energy, ionising effects, the inverse-square law, boundary behaviour, Michelson and Morley (outside the route entry).
- **Site notes (quoted from the site lessons, read 6 Nov; for Codex to log in `site-corrections-phys-y12.md`):**
  1. Lesson 1, `map-the-spectrum`: "travelling at exactly $c = 3.00 \times 10^8$ m/s". The speed is exactly 299 792 458 m/s by definition; 3.00 × 10⁸ is a rounded value. Proposed fix: "travelling at $c \approx 3.00 \times 10^8$ m/s (exactly 299 792 458 m/s)".
  2. Lesson 2, `explain-em-wave-production`: "Microwaves: Electron transitions in molecules (rotational) and special vacuum tubes (magnetrons)." Molecular rotational transitions are changes in how a molecule rotates, not electron transitions. Proposed fix: "Microwaves: changes in molecular rotation, and oscillating electrons in devices such as magnetrons."
  3. Lesson 1, `retrieve-reflect-and-finish`: "At the start you compared a representative 66 cm radio wave". The opening prediction box uses a 100 m radio wave. Proposed fix: use 100 m in both places (with E = hc/λ ≈ 2.0 × 10⁻²⁷ J for 100 m) or change the opening to 66 cm.
  Checked and correct: c = 1/√(ε₀μ₀), Hertz's role, the in-phase perpendicular fields, both "Analyse 6 marks" and "Describe 6 marks" model answers, the Q2(d) photon energies.
- **Cause chain taught, in order:** (1) a changing B makes a curling E (recalled); Maxwell: a changing E also makes B (1, 2); (2) so changing fields regenerate each other and travel as a transverse wave needing no medium (3); (3) accelerating charges start the chain (4); (4) the theory fixes the speed from μ₀ and ε₀, giving 3.00 × 10⁸ m s⁻¹ (5); (5) that equals the measured speed of light, so light is an EM wave (5); (6) Hertz produced and detected the waves and measured their speed (6); (7) all EM waves share c in a vacuum (7).
- **Entry knowledge (route):** Year 11 transverse waves, wavelength, frequency, v = fλ; electric and magnetic fields; Module 6 changing flux and the curling electric field (v20).
- **Learner-visible vocabulary (plain meaning at first use):** unification (one set of rules explaining things once treated separately, 2); electromagnetic wave (a travelling pattern of changing electric and magnetic fields that regenerate each other, 3); medium (a material that carries a wave, 3); transverse (the fields point at right angles to the direction of travel, 3); in phase (rising and falling together, 3); permeability and permittivity of free space (constants that set how strongly currents make magnetic fields and charges make electric fields, 5).
- **Legacy logic ported:** none. Kit family `m7-em-geometry` (in-phase perpendicular fields, rightward propagation; plane wave only) is the candidate support for scenes 3, 4 and 13; its limits (no emission mechanism) mean scene 4's antenna is new motion.
- **New explainer motion:** **capacitor field stage** (coded parallel-plate capacitor charging from a cell: blue E lines in the gap growing, slate B loops appearing round the gap, a dashed "no charge crosses" bracket); **field chain** (alternating blue E loops and slate B loops linking outwards, extending v20's chain); **EM wave 3-D stage** (`m7-em-geometry` extended with a camera turn between side view and perspective); **antenna stage** (radio mast plate with a coded rod overlay, rose electron dots oscillating, wave fronts leaving, a cycle counter; toggles for still, constant-velocity and accelerating charge); **spark stage** (transmitter and receiver plates, coded spark flashes, coded wave fronts across the gap); **spectrum ribbon** (coded log-scale ribbon of seven labelled regions, no values except c); `AlignedAlgebra`; `Countdown` (3 s in scene 1; 10 s in scenes 9 and 11); `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the stage centre-left; working strips or chips on the right; everything above the bottom 12% of the frame.
- **Author notes (not learner copy):**
  (a) Field geometry: wave travelling +x; E along ±y, B along ±z, E × B along +x; E and B in phase in a vacuum plane wave; amplitude ratio E/B = c (not narrated).
  (b) The capacitor case is Maxwell's displacement-current term (ε₀ dΦ_E/dt); the narration says only that the changing E field makes a magnetic field round the gap "just as a current would". Faraday and Ampère are not named, to keep the scene on Maxwell's addition.
  (c) Maxwell (1862 and 1865) used the measured ratio of electromagnetic to electrostatic units (Weber and Kohlrausch), about 3.1 × 10⁸ m s⁻¹, and compared it with Fizeau's optical value, about 3.1 × 10⁸ m s⁻¹. The design uses today's constants and says only that the result "already matched measurements of the speed of light". Science check to confirm the wording.
  (d) Constants (HSC data sheet, as recalled; science check to confirm against the official sheet): μ₀ = 4π × 10⁻⁷ N A⁻²; ε₀ = 8.854 × 10⁻¹² A² s⁴ kg⁻¹ m⁻³ (equivalently C² N⁻¹ m⁻²); c = 3.00 × 10⁸ m s⁻¹. Whether c = 1/√(μ₀ε₀) appears on the formula sheet is to be confirmed; the narration does not claim it does.
  (e) Hertz numbers are illustrative (f = 5.0 × 10⁷ Hz, λ = 6.0 m), tagged on screen; Hertz's actual oscillator frequencies and wavelengths are not quoted.
  (f) A charge in uniform circular motion is accelerating and does radiate; the narration's three cases are still, constant velocity and oscillating, which is accurate.
  (g) Pronunciations: "mu nought", "epsilon nought", "Maxwell", "Hertz" (HURTS), "c" as "see".
- **Open decisions for root:**
  - **1. Plates (two new, one reused).** New: `y12p-spark-gap-transmitter-v1.png`, `y12p-spark-loop-receiver-v1.png`. Reused: `phys-y11-radio-mast-v1.png` (antenna context, scene 4). Coded fallback for the spark apparatus: labelled schematic (weaker; the owner rule asks for plates for real apparatus).
  - **2. Module 7 colour key** (Decisions) to be confirmed as the module key for v02 to v08 and the parallel v09 designer.
  - **3. Formula-sheet status of c = 1/√(μ₀ε₀)** and the data-sheet units for ε₀ (author note d).
  - **4. Optional beats** the learning review may cut: scene 6's illustrative v = fλ numbers; scene 4's constant-velocity case.
Main question: *A changing magnetic field makes a curling electric field. If a changing electric field could make a magnetic field too, what would follow? How did Maxwell connect electricity and magnetism to light?*
Entry knowledge: v20's curling electric field; Faraday's law (m6 v10); Year 11 transverse waves and v = fλ.
Stops after: unification, the self-sustaining transverse wave, accelerating charges, the predicted speed, Hertz, the EM family at c. No measurement methods, spectra or photons.
Handoff: v02, how a time-and-distance measurement reveals the speed of light.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings.

### 1. hook (yes, it works the other way)
> Here's where we left off. A changing magnetic field creates an electric field that curls round **it**. Now flip it. Could a changing electric field create a magnetic field? In the 1860s, James Clerk Maxwell said yes, and wrote both ideas into one set of equations. Then something remarkable fell out of the maths: a wave made of electric and magnetic fields, with a speed you could **calculate**. Make your **prediction**. What do you think that speed turned out to match? It matched the speed of **light**.

Visual: opens on v20's final frame (see "Opening frame"); the chip "Next: how did Maxwell connect electricity and magnetism to light?" becomes the heading. On "curls round" the blue E arrows inside the copper ring pulse; the crossed "battery" and "wires" chips fade. On "Now flip it" the chip "changing E → B?" moves to centre. On "said yes" its "?" becomes a tick and the chip reads "changing E → B ✓"; a plain chip "one set of equations: E and B" appears beside it (no portrait or figure). On "calculate" the faint chain of linked blue and slate loops from v20 brightens and a navy arrow "speed = ?" appears beside it. On "prediction" a 3 s `Countdown` beside three chips: "the speed of sound", "the speed of light", "no known speed". On "light" the second chip ticks and the other two fade.

### 2. one theory for both fields
> Before Maxwell, electricity and magnetism were already linked. A current makes a magnetic field, and a changing magnetic field makes an electric field. Maxwell added the missing piece. Picture a capacitor charging. No charge crosses the gap between the plates, but the electric field in the gap is **growing**. Maxwell's equations say that changing electric field makes a magnetic field that curls round the gap, just as a current **would**. So each kind of field can create the other. One theory now described both. That's what unification means: one set of rules explaining things once treated **separately**.

Visual: board change (clear) to two chips at the top: "current → B" and "changing B → E" (grey, already known). On "Maxwell added the missing piece" a third chip outline appears, empty. On "capacitor charging" the capacitor field stage: a coded cell, switch and two parallel plates; orange current arrows in the wires; rose + and − dots building on the plates. On "No charge crosses the gap" a dashed navy bracket across the gap "no charge crosses". On "growing" blue E lines in the gap thicken and multiply, tag "E increasing". On "would" slate B loops curl round the gap, drawn like those round the wire; the empty chip fills: "changing E → B". On "each kind of field can create the other" the "changing B → E" and "changing E → B" chips link with a double arrow. On "separately" a bracket round all three chips: "unification: one theory for electricity and magnetism".

### 3. a wave that carries itself
> Now put the two pieces together. A changing electric field makes a changing magnetic field. That changing magnetic field makes a changing electric field, a little further **out**. And that makes another changing magnetic field, and so on. Each field keeps creating the other, so the disturbance travels by itself. Nothing has to carry it, no air, no water, no **medium** at all. That's an electromagnetic wave. The electric field and the magnetic field are at right angles to each other, and both are at right angles to the direction the wave travels. So it's a transverse **wave**. And the two fields rise and fall together, in **phase**.

Visual: board change to the field chain: one blue E loop at the left; on "makes a changing magnetic field" a slate B loop links through it; on "out" a new blue E loop links further right; on "and so on" the chain grows rightwards, each new loop appearing as the previous one changes. On "travels by itself" a navy arrow "travel" along the chain. On "medium" a crossed grey chip "air or water needed" and tag "no medium". On "electromagnetic wave" the camera turns: the chain resolves into the `m7-em-geometry` view: a blue E wave in the vertical plane and a slate B wave in the horizontal plane, travelling right (navy axis "direction of travel"). On "right angles to each other" a small right-angle mark between E and B; on "direction the wave travels" a second right-angle mark to the navy axis. On "wave" a chip "transverse: fields ⟂ travel". On "phase" a marker runs along the wave showing E and B peaking together and both zero at the same points; chip "in phase".

### 4. what starts the wave
> So what starts the wave? Accelerating charge. In a radio antenna, an alternating voltage drives electrons up and down, many millions of times a **second**. They speed up, slow down and reverse, so they're always accelerating. Their changing electric field launches the chain of changing fields, and the wave travels **outwards**. The wave's frequency is the frequency of the charges' oscillation. A charge sitting still has a steady electric field, with no wave. A charge moving at constant velocity is a steady current, with a steady magnetic field, and still no wave. Only accelerating charges radiate.

Visual: board change to the antenna stage: the radio mast plate (`phys-y11-radio-mast-v1.png`, reused) at the left, a coded vertical rod highlighted along its top mast; small rose electron dots in the rod. On "alternating voltage" a coded AC source symbol at the base. On "second" the dots oscillate up and down the rod (slowed, tag "slowed down"); a cycle counter ticks. On "always accelerating" a small velocity-time chip beside the rod: a sine curve, tag "speed and direction always changing". On "outwards" blue and slate wave fronts leave the rod and spread right, each front released once per oscillation. On "frequency of the charges' oscillation" the cycle counter and a wave-front counter tick together; tag "f (wave) = f (charges)". On "sitting still" a small inset row of three panels: a still rose charge with steady blue radial lines, tag "still: steady E, no wave". On "constant velocity" the second panel: a charge sliding at steady speed, steady slate circles, tag "constant velocity: steady fields, no wave". On "Only accelerating charges radiate" the third panel: an oscillating charge with fronts leaving; chip "accelerating charge → EM wave".

### 5. the speed falls out of the maths
> Here's the part that convinced people. Maxwell's equations fix the wave's speed in a vacuum. It's one over the square root of two constants multiplied **together**. Mu nought, the permeability of free space, sets how strongly currents make magnetic **fields**. Epsilon nought, the permittivity of free space, sets how strongly charges make electric **fields**. Both had been measured with coils and capacitors, in experiments that had nothing to do with **light**. Multiply them, take the square root, and take one over **that**. You get about **three point zero zero times ten to the eight** metres per second. That already matched measurements of the speed of light. So Maxwell concluded that light is an electromagnetic **wave**.

Visual: board change to the working layout. Task strip: "Find the speed of an electromagnetic wave in a vacuum." On "together" the equation strip writes "c = 1/√(μ₀ε₀)". Givens grouped in a box headed "data sheet": on "magnetic fields" "μ₀ = 4π × 10⁻⁷ N A⁻²" with a small coded coil icon; on "electric fields" "ε₀ = 8.854 × 10⁻¹² C² N⁻¹ m⁻²" with a small coded capacitor icon. On "light" a crossed grey chip "light" beside the two icons, tag "measured without light". On "Multiply them" stage 1: "μ₀ε₀ = 1.113 × 10⁻¹⁷ s² m⁻²". On "take the square root" stage 2: "√(μ₀ε₀) = 3.336 × 10⁻⁹ s m⁻¹". On "that" the stage 2 line stays as a faint reference. On "three point zero zero times ten to the eight" stage 3: "c = 1 / 3.336 × 10⁻⁹ = 3.00 × 10⁸ m s⁻¹" in orange. On "matched measurements" a grey chip below: "measured speed of light (optics): about 3 × 10⁸ m s⁻¹" with an equals sign between the two. On "wave" a boxed conclusion "light is an electromagnetic wave".

### 6. testing the prediction
> A prediction needs testing. About twenty years later, Heinrich Hertz made a spark jump back and forth across a gap, driving charges to oscillate very fast. Across the room, a separate loop of wire with a tiny gap sparked too, with no wires **between** them. He'd sent and received an electromagnetic wave. He measured its wavelength, and he knew its frequency, so he could use v equals f lambda. Picture a frequency of five times ten to the seven hertz, and a wavelength of six metres. Then the speed is three times ten to the eight metres per **second**. Hertz's waves also reflected, refracted and could be polarised, just like **light**.

Visual: board change to the spark stage: the spark-gap transmitter plate (`y12p-spark-gap-transmitter-v1.png`, new) at the left, the loop receiver plate (`y12p-spark-loop-receiver-v1.png`, new) at the right, a coded floor line between them, no wires joining. On "spark jump" a coded white-blue spark flickers in the transmitter gap; rose dots oscillate in its rods. On "between" coded wave fronts cross to the receiver and a small spark flickers in the loop's gap; tag "no connecting wires". On "v equals f lambda" a chip "v = fλ (Year 11)". On "Picture a frequency" a working strip: "f = 5.0 × 10⁷ Hz", "λ = 6.0 m" with a grey tag "illustrative values". On "second" "v = fλ = 5.0 × 10⁷ × 6.0 = 3.0 × 10⁸ m s⁻¹" in orange. On "light" three ticks: "reflected", "refracted", "polarised".

### 7. one family, one speed
> So light is one member of a whole family. Radio waves, microwaves, infrared, visible light, ultraviolet, X-rays and gamma rays are all electromagnetic waves. In a vacuum, they all travel at the same speed, c, about three times ten to the eight metres per second, whatever their **frequency**. What changes is the frequency and the wavelength, linked by c equals f **lambda**. Higher frequency means shorter wavelength.

Visual: board change to the spectrum ribbon: seven labelled regions on a coded log-scale ribbon, radio at the left, gamma at the right; "visible" a narrow rainbow band. On "all electromagnetic waves" a bracket over the whole ribbon "all: E and B fields, transverse". On "frequency" a navy chip "speed in a vacuum: c, for every frequency". On "lambda" "c = fλ" writes in the equation strip; a small coded wave above the ribbon shortens its wavelength as a marker slides from radio to gamma; arrows under the ribbon: "f increases →", "← λ increases".

### 8. a way to remember
> Here's a way to remember the chain. Change E, make B. Change B, make E. Shake a charge, and it runs off at **c**.

Visual: board clears to the field chain from scene 3, small; a rose charge at its left end oscillating. On "Change E, make B" a blue loop pulses then a slate loop; on "Change B, make E" the reverse; on "c" the chain runs off to the right and the handwritten line writes large above: "Change E, make B. Change B, make E. Shake a charge: off at c." Hold about 2 seconds.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. Outline how Maxwell's theory predicted that electromagnetic waves exist, and how it predicted their speed. Then explain why the predicted speed led to the conclusion that light is an electromagnetic wave. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "Outline how Maxwell's theory of electromagnetism predicted (a) the existence of electromagnetic waves and (b) their speed in a vacuum. Explain why this prediction led to the conclusion that light is an electromagnetic wave. (3 marks)". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 10. feedback 1 (brief)
> A changing electric field creates a magnetic field, and a changing magnetic field creates an electric field, so each regenerates the other, and a wave travels with no medium. The theory gave its speed as one over root mu nought epsilon nought, from constants measured in electrical experiments. That came out at about three times ten to the eight metres per **second**, equal to the measured speed of light, so light must be an electromagnetic **wave**. The classic slip is saying Maxwell measured the speed of light. He calculated it, from electricity and **magnetism**.

Visual: card shrinks to the top; "existence", "speed" and "light" underline. Answer lines build: "(a) changing E ↔ changing B regenerate each other → self-sustaining transverse wave, no medium"; on "second" "(b) c = 1/√(μ₀ε₀) = 3.00 × 10⁸ m s⁻¹ (constants from electrical and magnetic experiments)"; on "wave" "equals the measured speed of light → light is an EM wave". On "magnetism" a chip "Maxwell measured the speed of light" fades in and is crossed (caption "calculated from μ₀ and ε₀"). Hold about 1 second.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. A radio station transmits at ninety-eight point five megahertz. Describe how its antenna produces the wave, and calculate the wavelength. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A radio station transmits at a frequency of 98.5 MHz. (a) Describe how the transmitting antenna produces an electromagnetic wave. (b) Calculate the wavelength of the wave. (3 marks)". A small coded diagram: a vertical antenna rod on a base, no figures. The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 12. feedback 2 (brief)
> An alternating voltage makes electrons in the antenna oscillate at ninety-eight point five megahertz. These accelerating charges create changing electric and magnetic fields that regenerate each other and travel outwards at **c**. Lambda equals c over f, three times ten to the eight over ninety-eight point five times ten to the six, which is about **three point zero five metres**. The slip is forgetting to change megahertz into hertz, which gives an answer a million times too **big**.

Visual: card shrinks to the top; "98.5 MHz" underlines. On "c" "(a) AC drives electrons to oscillate (accelerate) → changing E and B regenerate each other → wave travels out at c, f = 98.5 MHz". On "three point zero five metres" "(b) λ = c/f = 3.00 × 10⁸ / 98.5 × 10⁶ = 3.05 m". On "big" a chip "λ = 3.00 × 10⁸ / 98.5 = 3.05 × 10⁶ m" fades in and is crossed (caption "MHz → × 10⁶ Hz"). Hold about 1 second.

### 13. handoff
> So Maxwell connected electricity and magnetism to light, because his equations predicted a self-sustaining wave of fields, and calculated its speed to be the speed of light. But three times ten to the eight metres per second is enormous. Light crosses a three metre room in about ten **nanoseconds**. So how could anyone measure a speed like that? How can a time-and-distance measurement reveal the speed of **light**?

Visual: board clears (camera change) to the EM wave (blue E, slate B, navy direction) travelling right across a long coded distance bar. On "self-sustaining wave of fields" the chain tag "E ↔ B" appears above it; on "calculated" a chip "c = 1/√(μ₀ε₀) ≈ 3.00 × 10⁸ m s⁻¹ (predicted)". On "nanoseconds" a coded room-width bracket "3 m" with a timer "≈ 10 ns". On "light" the bar's label becomes "distance d = ?", a coded timer "time t = ?" appears, a chip "speed = d / t" and a chip "Next: how can a time-and-distance measurement reveal the speed of light?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 14. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Maxwell unified electricity and magnetism: a changing magnetic field makes an electric field, and a changing electric field makes a magnetic field.
2. Each changing field regenerates the other, so an electromagnetic wave travels with no medium.
3. EM waves are transverse: E ⟂ B, both ⟂ direction of travel; E and B in phase.
4. Accelerating (oscillating) charges produce EM waves; f of the wave = f of the charges.
5. Predicted speed: c = 1/√(μ₀ε₀) = 3.00 × 10⁸ m s⁻¹, equal to the measured speed of light, so light is an EM wave. Hertz confirmed it.
6. All EM waves travel at c in a vacuum: c = fλ.

Memory aid (large, on the notes screen): *Change E, make B. Change B, make E. Shake a charge: off at c.*

## Teaching checks

- **Does it explain causes?** Why a wave is possible: each changing field makes the other (2, 3). Why no medium is needed: the fields are the disturbance (3). What starts it: acceleration, with the contrast cases (4). Why light was identified as EM: an independent prediction from electrical constants matched an optical measurement (5). Why Hertz mattered: he produced the waves and measured their speed (6).
- **Misconceptions addressed:** EM waves need a medium (3); any moving charge radiates (4); Maxwell measured c (crossed in 10); megahertz not converted (crossed in 12); different EM waves travel at different speeds in a vacuum (7).
- **One idea at a time:** unification (2), the wave (3), production (4), speed (5), confirmation (6), family (7).
- **Video makes it easier:** the capacitor gap with B loops and "no charge crosses" (2); the chain building outwards, then turning into the 3-D wave (3); the three contrast panels (4); the crossed "light" chip beside the coil and capacitor icons (5); sparks with no connecting wires (6).
- **Response opportunity:** one prediction (3 s) and two unseen HSC-style tasks with every condition visible, 10 s each; nothing answer-bearing. One crossed mistake each; feedback about 30 s and 25 s.
- **Avoided double teaching:** v20's curling E field and Faraday's law recalled in one sentence; v = fλ recalled.
- **Syllabus coverage:** `P7-IQ1-01` unification (2), prediction of EM waves (3), prediction of velocity (5); `P7-IQ1-02` production (4) and propagation (3, 7), related qualitatively to Maxwell's predictions (3 to 6).
- **Out of scope by design:** measurement of c (v02), spectra (v03), photons, the inverse-square law, boundary behaviour, the aether and relativity.

## Practice questions and model answers

**Attempt 1 (scene 9; original wording, HSC style, 3 marks).** "Outline how Maxwell's theory of electromagnetism predicted (a) the existence of electromagnetic waves and (b) their speed in a vacuum. Explain why this prediction led to the conclusion that light is an electromagnetic wave."
Model answer: (a) Maxwell's equations state that a changing electric field produces a magnetic field and a changing magnetic field produces an electric field, so oscillating fields regenerate each other and propagate as a transverse wave with no medium (1 mark). (b) The equations give the wave's speed in a vacuum as c = 1/√(μ₀ε₀), using constants measured in purely electrical and magnetic experiments; this is about 3.00 × 10⁸ m s⁻¹ (1 mark). This independently predicted speed equalled the measured speed of light, so Maxwell concluded that light is an electromagnetic wave (1 mark). Classic mistake (crossed): "Maxwell measured the speed of light".

**Attempt 2 (scene 11; original wording, 3 marks).** "A radio station transmits at a frequency of 98.5 MHz. (a) Describe how the transmitting antenna produces an electromagnetic wave. (b) Calculate the wavelength of the wave."
Model answer: (a) An alternating voltage drives electrons up and down the antenna at 98.5 MHz; these accelerating charges produce changing electric and magnetic fields, which regenerate each other and propagate outwards at c as a transverse EM wave of the same frequency (2 marks). (b) λ = c/f = 3.00 × 10⁸ / (98.5 × 10⁶) = 3.05 m (1 mark). Classic mistake (crossed): not converting MHz, giving 3.05 × 10⁶ m.

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Constants (data sheet, author note d) | μ₀ = 4π × 10⁻⁷ = 1.2566 × 10⁻⁶ N A⁻²; ε₀ = 8.854 × 10⁻¹² C² N⁻¹ m⁻² | 5, 10 |
| Predicted c | μ₀ε₀ = 1.1126 × 10⁻¹⁷; √ = 3.3356 × 10⁻⁹; c = 2.9980 × 10⁸ ≈ 3.00 × 10⁸ m s⁻¹ | 5, 10, 13 |
| Hertz (illustrative) | f = 5.0 × 10⁷ Hz, λ = 6.0 m, v = 3.0 × 10⁸ m s⁻¹ | 6 |
| Room | 3 m / 3.00 × 10⁸ m s⁻¹ = 1.0 × 10⁻⁸ s = 10 ns | 13 |
| A2 | λ = 3.00 × 10⁸ / 98.5 × 10⁶ = 3.0457 ≈ 3.05 m; wrong form 3.05 × 10⁶ m | 11, 12 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov); Codex to re-check.

- 4π × 10⁻⁷ × 8.854 × 10⁻¹² = 1.11263 × 10⁻¹⁷; √ = 3.33561 × 10⁻⁹; 1/√ = 2.99796 × 10⁸ m s⁻¹.
- 5.0 × 10⁷ × 6.0 = 3.0 × 10⁸.
- 3 / 3.00 × 10⁸ = 1.0 × 10⁻⁸ s.
- 3.00 × 10⁸ / 98.5 × 10⁶ = 3.04569 m.

## Memory aid check

- **"Change E, make B. Change B, make E. Shake a charge: off at c."** Meaning, as said in scene 8: a changing electric field produces a magnetic field and vice versa (Maxwell), so the fields sustain each other; an accelerating charge starts the chain; in a vacuum the wave travels at c. Assumptions checked: "change" means a time-varying field (steady fields do not regenerate each other); "shake" means accelerate, matching scene 4's contrast cases; "at c" is in a vacuum (scene 7 states it). It helps a new case: A1 (the existence prediction) and A2 (production). Introduced after the explanation (2 to 7).
- **Considered, not used:** "Light is electricity and magnetism holding hands" (anthropomorphic and implies contact).

## Narration length estimate

Revision 1 count (6 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **6,100 characters**, 14 scenes. Characters per scene (1 to 14): 491, 599, 623, 596, 704, 628, 410, 109, 237, 559, 169, 477, 410, 75. At 13.3 characters per second the speech is about 459 s; add about 3 s for the prediction countdown, 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 55 s more of the quiet notes hold (about 84 s of holds and countdowns): **about 543 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 4's constant-velocity sentence; scene 6's illustrative numbers (open decision 4).

## Opening frame

v20's final frame (`phys-y12-m6-v20.md`, "Final frame"): paper background; the copper tube end-on as a coded copper ring, slate dots (B out of the screen) in its middle tagged "B changing"; blue curling "E" arrows inside the ring with rose current dots following them; crossed grey chips "battery" and "wires"; chips "changing B → E (curling round)" and "changing E → B?"; a faint chain of linked blue and slate loops drifting right with a "?"; heading "How can a moving conductor be braked without contact?"; chip "Next: how did Maxwell connect electricity and magnetism to light?". Scene 1 turns the chip into the heading, fades the crossed chips and answers the "?".

## Final frame

The last explained frame (end of scene 13, before the key-notes board): paper background; an electromagnetic wave (blue E in the vertical plane, slate B in the horizontal plane, navy "direction of travel" axis) travelling right along a long coded horizontal distance bar labelled "distance d = ?"; above the wave a small tag "E ↔ B"; at the upper right a chip "c = 1/√(μ₀ε₀) ≈ 3.00 × 10⁸ m s⁻¹ (predicted)"; a small bracket "3 m" with a timer "≈ 10 ns"; a coded digital timer "time t = ?"; a chip "speed = d / t"; heading unchanged ("How did Maxwell connect electricity and magnetism to light?"); a chip reads "Next: how can a time-and-distance measurement reveal the speed of light?". v02 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m7-v01` (route phys-y12-m7-v01). Suggested explainer folder `src/explainer/lessons/phys-y12-m7-v01` and build folder `docs/production/claude-pm/lessons/p-y12-m7-v01` (root to confirm).

In order (kebab-case; 14 scene headings, all `### N.`): hook, unification, self-sustaining-wave, production, predicted-speed, hertz, em-family, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 and key-notes (`hold`). Scene 1 is `explain` with a 3 s prediction countdown. `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: capacitor field stage, field chain, EM wave 3-D stage (`m7-em-geometry`), antenna stage, spark stage, spectrum ribbon, `AlignedAlgebra`, `PenArrow`, `Countdown`, `CameraStage`. Transitions (`pickTransition`): 1 to 2 clear change; 2 to 3 clear change (chain); 3 camera continue into the 3-D wave; 3 to 4 clear change; 4 to 5 clear change; 5 to 6 camera change; 6 to 7 clear change; 7 to 8 clear change; attempts and feedback card shrink to the top; 12 to 13 clear change; 13 to 14 fade to the notes board.

Holds: hook (3 s countdown), memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 60 s). Review evidence paths: `learning_review` = `checks/p-y12-m7-v01-learning-review.md`, `science_check` = `checks/p-y12-m7-v01-physics-check.md`.

## Assets

Have (scaled uniformly only, never stretched):
- `phys-y11-radio-mast-v1.png`: 4 (antenna context; the coded rod overlay sits on its top mast).
- Kit family `m7-em-geometry` (coded): 3, 13.
- **Checked, not used:** `phys-y11-dipole-receiver-v1.png` (a lamp on a dipole rod; it is a modern school receiver, not Hertz's loop, and a lamp would imply a much stronger signal than a spark gap receives).

Need (new plates, Codex):
1. `y12p-spark-gap-transmitter-v1.png`: 6. Essential.
2. `y12p-spark-loop-receiver-v1.png`: 6. Essential.

Coded: capacitor and cell, field lines and loops, the EM wave, antenna rod overlay, electron dots, contrast panels, spark flashes, wave fronts, spectrum ribbon, working strips, chips, attempt cards and diagram, countdowns, key notes board.

Kit gaps (for the v01 build brief):
1. **Field chain.** Alternating blue and slate loops linking outwards, each appearing as the previous changes, resolving into the `m7-em-geometry` wave.
2. **Antenna stage.** Oscillating electron dots on a rod with wave fronts released once per cycle, plus the still and constant-velocity contrast panels.

## Codex asset brief (Year 12 Physics M7 v01: spark-gap apparatus)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/phys-y12-m7-v01.md`, route entry phys-y12-m7-v01. Paint after the learning review, physics check and Codex error check pass and the owner gives the go-ahead. Save to `public/assets/physics/`. Every plate: transparent PNG with a true alpha channel and **clean edges with no coloured fringe or halo** (check on a black and a white background), ink and watercolour in the house style, matched to `phys-y11-radio-mast-v1.png` and `phys-y11-signal-generator-v1.png` in line weight, palette and finish, at least 8 per cent clear margin, no text, labels, letters, numbers, scale bars, brand names, logos, people, hands, faces, backdrop, glow or ground shadow. Never stretch to fit; keep the native aspect ratio.

1. `y12p-spark-gap-transmitter-v1.png` (1800 × 1000 px): a nineteenth-century style spark-gap transmitter on a wooden bench base seen side-on: an induction coil (a wound cylinder on a stand) wired to two straight horizontal brass rods in line, each ending in a small polished brass ball, the two balls facing each other across a small gap at the centre, and a larger brass sphere or square plate at each outer end of the rods. No spark painted (the spark is coded). Codex reports, in plate pixels, the gap's centre point and the line of the two rods.
2. `y12p-spark-loop-receiver-v1.png` (1000 × 1000 px): a single circular loop of thick copper wire on a small wooden stand, the loop's ends finishing in two tiny brass balls with a very small gap between them at the top of the loop. No spark painted. Codex reports the gap's centre point and the loop's centre and radius.

Report inspection on the paper background and the dark board background at about 400 px wide; confirm that no operator, hand or figure appears. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/phys-y12-m7-v01-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the physics of every learner-visible claim: a changing E produces B (capacitor gap); mutual regeneration and no medium; E ⟂ B ⟂ travel, in phase; accelerating charges radiate, still and constant-velocity charges do not; c = 1/√(μ₀ε₀) = 3.00 × 10⁸ m s⁻¹; Hertz's experiment and its results; all EM waves at c in a vacuum.
3. Confirm the data-sheet constants and units against the official HSC Physics data sheet (author note d), and whether c = 1/√(μ₀ε₀) is on the formula sheet.
4. Confirm the Hertz values are tagged illustrative.
5. Confirm the memory aid's assumptions (see "Memory aid check").
6. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
7. Confirm both attempt cards are original in wording, carry every condition and show nothing answer-bearing.
8. Confirm the syllabus quotes match the ledger exactly and are labelled 2017.
9. Confirm no person, hand, face or body outline is drawn or requested (Maxwell and Hertz are named in words only).
10. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
11. Confirm the narration character count and per-scene counts by script with the build parser rules.
12. Log the three site notes in `site-corrections-phys-y12.md`.

## YouTube metadata (draft)

Title: How Maxwell Connected Electricity, Magnetism and Light | HSC Physics Module 7

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module7/lesson01.sa.html

A changing magnetic field makes an electric field. Maxwell showed that a changing electric field makes a magnetic field too, so the two can keep creating each other and travel through empty space. See how a charging capacitor shows the new idea, why only accelerating charges make electromagnetic waves, how Maxwell's equations predicted the waves' speed from two electrical constants, and why that speed told him light is an electromagnetic wave. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 7: The Nature of Light.
Syllabus content (NSW Physics Stage 6, 2017):
"investigate Maxwell’s contribution to the classical theory of electromagnetism, including: unification of electricity and magnetism, prediction of electromagnetic waves, prediction of velocity (ACSPH113)"
"describe the production and propagation of electromagnetic waves and relate these processes qualitatively to the predictions made by Maxwell’s electromagnetic theory (ACSPH112, ACSPH113)"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous (Module 6): how a moving conductor can be braked without contact. Next: how a time-and-distance measurement reveals the speed of light.

#HSCPhysics #Physics #Maxwell #ElectromagneticWaves #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v20; check that the capacitor case makes "a changing E makes B" believable; that the chain-to-wave camera turn is followed at speed; that the contrast panels make "accelerating" stick; that the calculation strip shows one stage at a time with the constants' origin clear; that the attempt cards give nothing away), then the physics check and the Codex error check.
- The capacitor gap, the growing field chain, the oscillating antenna charges and the crossed "light" chip beside the coil and capacitor icons carry the explanation; judge them at playback speed in the voiced preview.
