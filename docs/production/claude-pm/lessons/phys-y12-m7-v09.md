# Year 12 Physics M7 V09: Black-body radiation and the ultraviolet catastrophe. How did thermal spectra challenge classical predictions? (design)

Status: Revision 1 (6 Nov 2026): first design. Needs independent learning review and science check before voicing.

Narration 6,430 characters, 18 scenes, about 567 s, counted by script with the build parser rules (see "Narration length estimate"). Opens on an assumed v08 final frame (v08 is being designed in parallel; see "Opening frame").

Scope: ninth video of Year 12 Physics Module 7 (The Nature of Light, Physics Stage 6, 2017 syllabus), inquiry question "What evidence supports the particle model of light and what are the implications of this evidence for the development of the quantum model of light?". Templates as `phys-y12-m6-v13.md`; `math-a12-d10.md` for the calculation layout. No pre-design pack exists; the pack work is done here (2017 wording from the ledger, site givens kept, every number recalculated in Python, original attempts, asset reuse). Site lesson read in full (6 Nov, read-only, through the brief 168 text extract `work/brief168/module7-lesson10.sa.txt`, hash checked against the live file): orient and predict (Hertz prediction, warm-up, intentions, vocabulary), assemble the wave-model evidence (six-phenomena table, Huygens, thin films), measure the speed of light (Rømer, Fizeau, Foucault, defined c), meet the three phenomena waves cannot explain (photoelectric effect, black-body radiation, Compton effect, key equations, Stop and Check 2.3 eV), read the black-body curve (Wien's law, Rayleigh-Jeans divergence, Planck's E = nhf, Figure 4 at 3500, 5800 and 10 000 K, Stop and Check, MC), worked photoelectric example (350 nm, 2.50 eV), wave versus particle history, apply and consolidate (Activities 1 and 2, "Analyse 7 marks" Newton and Huygens, "Analyse 6 marks" black-body curves), independent practice (Q1 to Q5 and model answers), retrieve and reflect: `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson10.sa.html`, SHA256 `3c6b866e16c1a9a0da5fd4b379c32c64cd1abbb96412642f19fdcb41efca4bc1` (recomputed 6 Nov; matches the route). Route entry: `phys-y12-m7-v09`, sections `wave-model-crisis`, `read-black-body-curve`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Compare temperature-dependent blackbody curves and Wien peak shifts; explain Planck energy packets without claiming Wien law alone proves quantisation. Stop before photoelectric emission." Next: "phys-y12-m7-v10: Why can bright low-frequency light fail to eject electrons?"

Owner rules applied: 2017 syllabus quoted exactly; no people, hands, faces or body outlines (the "warm cup of tea" line is narration and a coded curve only); graphs, the cavity model, standing waves, energy packets and calculation strips are coded, HSC style; the bar heater, the Sun, the zinc plate and the bench lamps are painted plates (three new, two reused), scaled uniformly, never stretched; every number recalculated in Python; data-sheet symbols λ_max = b/T, E = hf, b and h from the HSC data sheet; a 3 s prediction; "Pause here to answer." with a 10 s countdown; brief feedback with one crossed-out mistake; original attempts; historical scientists named in words only and never drawn; Australian spelling; no em dashes. Recalled, not re-taught: v01 (accelerating charges radiate electromagnetic waves), v03 and v04 (continuous spectra from hot dense sources; stellar temperature from spectra), v05 to v08 (diffraction, interference, polarisation as wave evidence), Year 11 (frequency, wavelength, standing waves, c = fλ).

Syllabus content (Physics Stage 6 (2017), Module 7; ledger id `P7-IQ3-01`), quoted from the route JSON `syllabusActions`:

- `P7-IQ3-01`: "analyse the experimental evidence gathered about black body radiation, including Wien’s Law  related to Planck's contribution to a changed model of light (ACSPH137)" "λ_(max)=(b)/(T)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 59)

**Boundary:** starts on v08's assumed final frame (the wave-model evidence, chip "Next: how did thermal spectra challenge classical predictions?"). Teaches: thermal radiation from jiggling charges; the black body (absorbs everything; emission depends only on temperature; the hollow box with a small hole); reading the intensity-wavelength curve; the three-temperature comparison (peak shift, higher at every wavelength); why a heater element glows red; Wien's law with the data-sheet b, used both ways (Sun 500 nm; a 290 nm star at about 10 000 K); the classical cavity model (equal share per standing-wave pattern, more patterns at shorter wavelengths), its match at long wavelengths and divergence at short ones; the ultraviolet catastrophe; Planck's quantised oscillator energy E = nhf; why large packets freeze out short wavelengths; what Wien's law does not prove; Planck quantised the emitters, not light. Stops before photoelectric emission, photons as particles of light and the photoelectric equation (v10, v11).

## Decisions

- **Learner question (route wording kept).** "How did thermal spectra challenge classical predictions?" names the evidence and the conflict. The answer, built in order: hot objects radiate a characteristic curve set by temperature (2 to 4); the peak follows Wien's law (5, 6); classical physics shared energy equally among endlessly many short-wavelength patterns and predicted infinite ultraviolet (7, 8); Planck's packets made short-wavelength emission unaffordable (9, 10); and the limits of each claim (11).
- **Hook (site lesson 10 "Before you read" reframed; route "start from the physical case").** The wave model's success (v05 to v08) is recalled in one sentence, then an everyday object breaks it: a bar heater's element glowing dull red, then orange. A hotter object glowing white is shown with the coded colour strip. 3 s prediction: "Which colour does a hotter object glow first: red or blue?" is not used (it invites guessing); instead the prediction in scene 4 asks where the hotter curve's peak goes (author note a).
- **Thermal radiation cause (scene 2).** "Accelerating charges radiate" is recalled from v01 in a clause, so thermal radiation is caused, not asserted. Room-temperature objects radiate infrared only.
- **Black body (site vocabulary and "read-black-body-curve").** Plain meaning: absorbs all radiation that falls on it; its emitted spectrum depends only on its temperature. The hollow box with a small hole is the site's model and the cavity reused in scene 7. Stars are "very nearly" black bodies (author note b).
- **Curves (site Figure 4 values).** 3500 K (peak 828 nm, infrared), 5800 K (500 nm, visible), 10 000 K (290 nm, ultraviolet), drawn from Planck's law on a compressed intensity scale as the site does; "higher at every wavelength" is stated (site Q5(b)).
- **Heater (new, owner "real context").** The element at about 1000 K peaks near 2.9 μm, far in the infrared; only the short-wavelength tail reaches the visible, red first. The temperature is tagged "about" (author note c).
- **Wien's law (data sheet λ_max = b/T, b = 2.898 × 10⁻³ m K).** Inverse proportion said in words ("double the temperature, the peak halves"). Check with the Sun: 2.898 × 10⁻³ / 5800 = 5.0 × 10⁻⁷ m. Worked example (site Q5 Star P value, re-staged): peak 290 nm, T = 2.898 × 10⁻³ / 2.90 × 10⁻⁷ = 9993 K, about 1.0 × 10⁴ K. Calculation layout: task strip, equation strip, grouped givens, one stage at a time (convert, then divide).
- **Classical model (site "Analyse 6 marks" steps 3 and 4: "more modes at shorter wavelengths, each getting the same average energy").** Standing waves in the box (Year 11 standing waves recalled in a clause), equal share per pattern, more patterns at shorter wavelengths ("halve the wavelength, about eight times as many patterns", author note d). The name Rayleigh-Jeans is shown as a small grey tag only. The equal-share principle is not named (equipartition is author-only).
- **Ultraviolet catastrophe (site vocabulary).** "Infinite total energy" stated; the "warm cup of tea" line makes the absurdity concrete without drawing anything (coded curve for about 330 K, still diverging).
- **Planck's fix (site "Analyse 6 marks" step 5; route "explain Planck energy packets").** E = hf per packet, oscillator energy E = nhf, h from the data sheet. Why it works: a packet hf is large at high frequency compared with the typical thermal energy, so those oscillators are rarely excited ("frozen out"). Thermal energy kT is not named or given a value on screen (author note e).
- **What it does not prove (route "without claiming Wien law alone proves quantisation"; site "Planck regarded quantisation as a property of the emitters and as provisional").** Two sentences in scene 11: Wien's law came from classical physics in 1893; the full shape, especially the short-wavelength fall, needed packets. Planck quantised the emitters, not light; Einstein proposed light packets in 1905 (v10).
- **Memory aid (scene 12): "Hotter means shorter and higher. Big packets are hard to afford."** See "Memory aid check".
- **Attempts (original, HSC style).** A1 (2 marks): a star peaking at 420 nm: T = 6.9 × 10³ K, hotter than the Sun. Crossed: wavelength left in nanometres (6.9 × 10⁻⁶ K). A2 (3 marks, explain): classical failure and Planck's fix. Crossed: "Planck discovered photons".
- **Significant figures.** b to four figures (data sheet); temperatures and wavelengths to two or three figures.
- **Handoff (route next).** Scene 17 shows the painted zinc plate under two bench lamps, a bright red beam and a dim ultraviolet beam, with "electrons?" tags; chip "Next: why can bright low-frequency light fail to eject electrons?". See "Final frame".
- **Colour key (new for Module 7 Part 3, proposed for root):** black-body curves by temperature (3500 K red, 5800 K amber, 10 000 K blue); classical prediction dashed grey; energy packets amber; the visible band a coded rainbow strip; infrared and ultraviolet regions shaded grey with labels. v10 and v11 continue: photons amber, electrons navy, work function slate, kinetic energy orange.
- **Site sources used:** lesson 10: vocabulary "Ultraviolet catastrophe" (8); "read-black-body-curve" text and Figure 4 (3, 4, 7, 8, 10); Wien's law tie to stellar temperature (5, 6); Stop and Check (rank A, B, C) re-staged as the scene 4 prediction; MC (500 nm versus 1000 nm) not used (the scene 4 comparison covers it); "Analyse 6 marks" (classical mechanism, precise failure, Planck's assumption, Planck versus Einstein) (7 to 11, 16); Q5 (290 nm star) (6). Not used: the Compton effect (beyond this boundary; not in the route), the photoelectric worked example (v10, v11), the speed-of-light and wave-evidence sections (v02, v05 to v08).
- **Site notes (quoted from site lesson 10, read 6 Nov; for root to log in `../site-corrections-phys-y12.md` if accepted):**
  1. Precision (new): "wave-model-evidence" table row "Spectroscopy | Discrete wavelengths from atomic transitions; $E = hf$ | Continuous energy would produce a continuous spectrum" lists a quantum explanation (E = hf, discrete atomic transitions) as evidence for the wave model. Suggest moving spectroscopy's discrete lines to the "phenomena waves cannot explain" side, or describing only the wave property used (dispersion by a grating).
  2. Precision (new): "Analyse 6 marks" step 2: "intensity rises from zero at short wavelengths to a peak and then falls away at long wavelengths" is correct, but step 4 says the classical curve "matches observation well at long wavelengths". Both correct; no change. Checked and correct: Figure 4 peaks (290, 500, 830 nm: computed 289.8, 499.7, 828.0 nm); Q5 ranking; MC (Curve 1 hotter).
  3. Historical error (new, also affects v10): "Before you read" says "in 1887, Heinrich Hertz observed that ultraviolet light striking a metal surface ejected electrons", and the reflect section says Hertz "observed that UV light discharged a negatively charged zinc plate". Hertz (1887) observed that ultraviolet light helped sparks jump a gap; the zinc-plate discharge was Hallwachs (1888); electrons were identified in 1897. Suggest "Hertz noticed that ultraviolet light made sparks jump more easily; Hallwachs showed that ultraviolet light discharges a negatively charged zinc plate; the particles were later identified as electrons."
- **Cause chain taught, in order:** (1) jiggling charges radiate, so every warm object gives out thermal radiation (2); (2) a black body's spectrum depends only on temperature (2, 3); (3) hotter means a shorter peak and more at every wavelength (4); (4) Wien's law puts a number on the peak (5, 6); (5) classical physics gave each standing-wave pattern an equal share, and shorter wavelengths have more patterns (7); (6) so it predicted ever more short-wavelength radiation, infinite in total (8); (7) Planck: energy is exchanged in packets hf (9); (8) high-frequency packets are too big to be supplied thermally, so short wavelengths are suppressed and the curve falls (10).
- **Entry knowledge (route `entryKnowledge`):** v08 and earlier Module 7 (light as an electromagnetic wave; accelerating charges radiate (v01); continuous spectra and stellar temperature (v03, v04); wave evidence (v05 to v08)); Year 11: frequency, wavelength, standing waves, c = fλ, kelvin temperature.
- **Learner-visible vocabulary (plain meaning at first use):** thermal radiation (radiation given out because the particles are jiggling, 2); black body (absorbs all radiation, emits a spectrum set only by temperature, 2); intensity (how much radiation arrives per second per square metre, at each wavelength, 3); peak wavelength λ_max (the wavelength where the curve is highest, 5); Wien's constant b (5); ultraviolet catastrophe (8); quantum, quanta (a packet of energy, 9); Planck's constant h (9); oscillator (a vibrating charge in the walls, 9).
- **Legacy logic ported:** none. No existing coded family draws black-body curves; `m7-spectra-shift` supplies the visible-band strip style only.
- **New explainer motion:** **black-body plot** (coded Planck curves at set temperatures, peak markers that slide with a temperature slider, a draggable λ_max marker, a dashed classical curve that climbs off the top of the frame, visible band and infrared/ultraviolet shading); **cavity model** (a coded hollow box with a hole, a ray that bounces inside, standing-wave patterns that multiply as wavelength halves); **packet bars** (an amber packet hf whose height grows with frequency against a fixed grey "thermal energy" band); `AlignedAlgebra`; `NumberTicker`; `Countdown` (3 s in scene 4; 10 s in scenes 13 and 15); `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the plot across the middle; plates and the cavity model on the left; algebra on the right; everything above the bottom 12% of the frame.
- **Author notes (not learner copy):**
  (a) Scene 4's prediction asks for the direction of the peak shift; the colour of a glowing object follows from the visible part of the curve, which scene 4 then explains.
  (b) Stars: the Sun's spectrum is close to a 5800 K black body but has absorption lines (v03, v04) and limb darkening; "very nearly" is enough.
  (c) Heater: nichrome elements run at roughly 900 to 1200 K when glowing; λ_max = 2.898 × 10⁻³ / 1000 = 2.9 μm. The visible glow comes from the curve's short-wavelength tail.
  (d) Mode count: in a cubic cavity, the number of standing-wave modes with wavelength longer than λ is proportional to λ⁻³, so halving λ multiplies the count by 8. The Rayleigh-Jeans spectral intensity per unit wavelength is proportional to T/λ⁴.
  (e) Planck: mean energy per mode hf/(e^(hf/kT) − 1), which tends to kT at low f and to hf e^(−hf/kT) at high f. At 5800 K, kT = 0.50 eV; a 500 nm packet is 2.48 eV and a 100 nm packet 12.4 eV (Boltzmann factors 7 × 10⁻³ and 1.7 × 10⁻¹¹). Not on screen.
  (f) Wien's displacement law (1893) follows from classical thermodynamics and electromagnetism; Wien's 1896 distribution law fitted short wavelengths but failed at long ones. Neither is needed on screen.
  (g) Pronunciations: "lambda max"; "kelvin"; "Wien" as "veen"; "Planck" as "plank"; "h f" letter by letter.
- **Open decisions for root:**
  - **1. v08 join (root to confirm).** Scene 1 assumed v08 ends on its polariser chain with the chip "Next: how did thermal spectra challenge classical predictions?"; v08's Revision 1 final frame was written to match (see "Opening frame"). Only scene 1's first visual beat depends on it.
  - **2. The "warm cup of tea" sentence (learning review).** Keep (it makes "infinite" concrete) or cut (about 60 characters).
  - **3. New plates (Codex).** `y12p-bar-heater-v1` and `y12p-bar-heater-glow-v1` (scene 1, 4), `y12p-bench-lamp-v1` (scene 17, shared with v10). If the heater pair is not made, scene 1 uses `phys-y11-filament-lamp-v2.png` with a coded glow and the narration's "bar heater" becomes "lamp filament".
  - **4. Module 7 Part 3 colour key (root).** Proposed above; v10 to v16 follow it.

Main question: *Why did the wave model predict that a hot object should blaze with ultraviolet, and what fixed it?*
Entry knowledge: light is an electromagnetic wave made by accelerating charges (v01); continuous spectra (v03); wave evidence (v05 to v08); standing waves and c = fλ (Year 11).
Stops after: black-body curves, Wien's law both ways, the classical prediction, the ultraviolet catastrophe, Planck's packets and their limits. No photoelectric effect.
Handoff: v10, why bright low-frequency light can fail to eject electrons.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *λ_max*, *T*, *b*, *E*, *h*, *f*, *n*.

### 1. hook (the wave model meets a heater)
> So far, light has behaved like a wave every time. It diffracts, it interferes, and it can be polarised. By 1900, physicists thought the wave model was nearly finished. Then switch on a bar heater. The element glows dull red, then orange, and a much hotter object glows white. The wave model should have predicted how much of each colour comes out. It got it badly wrong. So how did these thermal spectra challenge classical **predictions**?

Visual: opens on v08's assumed final frame (see "Opening frame"). On "It diffracts, it interferes, and it can be polarised" v08's diagram shrinks to a badge "wave model" at the top left, with three small ticks beside it: "diffraction", "interference", "polarisation". On "nearly finished" the badge gains a grey tag "1900". On "switch on a bar heater" the painted cold heater plate `y12p-bar-heater-v1.png` slides in at centre left. On "glows dull red" it crossfades to `y12p-bar-heater-glow-v1.png` at low opacity (dull red); on "then orange" the glow plate's opacity rises to full (orange). On "glows white" a coded colour strip appears beside the heater, "dull red → orange → yellow → white", with a pointer moving along it and a tag "hotter". On "how much of each colour" a faint empty axes frame draws on the right (intensity up, wavelength along), no curve yet. On "badly wrong" a dashed grey line shoots up off the top of the empty axes and a red "?" appears. On "predictions" the heading writes: "How did thermal spectra challenge classical predictions?"; the v08 chip fades.

### 2. thermal radiation and the black body
> Everything warmer than absolute zero gives out electromagnetic radiation, because its charged particles are always jiggling, and accelerating charges radiate. That's thermal radiation, and at room temperature it's all infrared. The ideal case is called a black body. It absorbs all the radiation that falls on it, and what it gives out depends only on its **temperature**. A good model is a hollow box with a tiny hole. Light that gets in bounces around and almost never comes back **out**.

Visual: the heater plate moves to a small slot at the top left. On "its charged particles are always jiggling" a coded lattice of charges (navy dots on springs) jiggles; on "accelerating charges radiate" small orange wave arrows leave the lattice; chip "v01: accelerating charges radiate". On "thermal radiation" tag "thermal radiation". On "all infrared" the arrows turn grey with a label "infrared (invisible)". The Sun plate `phys-y11-sun-v1.png` waits off-frame for scene 3. On "black body" a definition card: "black body: absorbs all radiation that falls on it; the radiation it emits depends only on its temperature". On "temperature" the word "temperature" in the card underlines. On "a hollow box with a tiny hole" the coded cavity box draws (grey walls, a small opening on the left). On "out" an orange ray enters the hole, bounces six times inside, and fades; tag "almost nothing reflected: a near-perfect absorber".

### 3. reading the curve
> Here's the Sun, at about five thousand eight hundred kelvin, very nearly a black body. Intensity goes up the side, wavelength goes along the bottom. At very short wavelengths there's almost nothing. The curve climbs to a single **peak**, then falls away gradually. The Sun's peak is near five hundred nanometres, in the visible **band**. Only the height and position of this shape change with temperature.

Visual: board change: the plot fills the centre. Axes "intensity" (up, no numbers, tag "compressed scale") and "wavelength λ (nm)" (along, ticks 0, 500, 1000, 1500, 2000). On "Here's the Sun" the painted Sun plate `phys-y11-sun-v1.png` appears small at the top left of the plot beside a label "5800 K"; on "very nearly a black body" a tag with those words. On "Intensity goes up the side" the vertical axis label pulses; on "wavelength goes along the bottom" the horizontal label pulses. On "almost nothing" a pen traces the amber 5800 K curve from near zero at 100 nm. On "peak" the trace reaches the peak and a dot marks it. On "falls away gradually" the trace continues to 2000 nm, falling slowly. On "band" the coded visible strip (400 to 700 nm) appears under the axis and the peak marker drops a dashed line to "≈ 500 nm"; grey shading labelled "ultraviolet" left of 400 nm and "infrared" right of 700 nm. On "Only the height and position" the curve outline pulses once.

### 4. hotter: shorter and higher
> If the object gets hotter, where does the peak go? Make your **prediction**. A cool star at three thousand five hundred kelvin peaks in the infrared. A hot star at ten thousand kelvin peaks in the ultraviolet. As the temperature rises, the peak moves to shorter **wavelengths**, and the curve rises everywhere, so a hotter object gives out more at every **wavelength**. That explains the heater. Its element is only about a thousand kelvin, so its peak is far out in the infrared, and only the tail reaches the visible, at the **red end**.

Visual: the 5800 K curve stays. On "prediction" a 3 s `Countdown` beside chips "left (shorter)", "right (longer)", "stays". On "three thousand five hundred kelvin" the red 3500 K curve draws, lower, peak marker "≈ 830 nm" in the infrared shading. On "ten thousand kelvin" the blue 10 000 K curve draws, much taller (it runs off the compressed top with a break mark), peak marker "≈ 290 nm" in the ultraviolet shading; the "left (shorter)" chip ticks. On "wavelengths" an arrow joins the three peak dots from right to left, tag "hotter → peak shifts to shorter λ". On "wavelength" the area between the 10 000 K and 3500 K curves shades lightly and a tag reads "hotter: higher at every λ". On "That explains the heater" the heater glow plate returns small at the top left and a fourth, low, dull-red curve labelled "≈ 1000 K" draws mostly to the right of the frame, its peak off-screen with an arrow "peak ≈ 2900 nm (infrared)". On "red end" the small part of that curve above the visible band highlights, mostly over the red end, tag "only the tail is visible: red first".

### 5. Wien's law
> The peak follows a simple rule, Wien's law. Lambda max equals b over T, where T is the temperature in kelvin and b is Wien's constant, two point eight nine eight times ten to the minus three metre kelvin, on your data sheet. Double the temperature, and the peak wavelength **halves**. Check the Sun. Two point eight nine eight times ten to the minus three, over five thousand eight hundred, is five times ten to the minus seven metres, five hundred **nanometres**.

Visual: the plot shrinks to the left half. On "Wien's law" the equation strip writes "λ_max = b / T" (data-sheet form), with labels "λ_max: peak wavelength (m)", "T: temperature (K)". On "two point eight nine eight times ten to the minus three metre kelvin" a given chip "b = 2.898 × 10⁻³ m K (data sheet)". On "halves" a small tag "λ_max ∝ 1/T" and a temperature slider on the plot moves from 5000 K to 10 000 K and the peak marker slides from "580 nm" to "290 nm", tag "T × 2 → λ_max ÷ 2". On "Check the Sun" `AlignedAlgebra` "λ_max = 2.898 × 10⁻³ / 5800". On "nanometres" "= 5.0 × 10⁻⁷ m = 500 nm" (boxed), and the 5800 K peak marker pulses.

### 6. worked example: a star's temperature
> Astronomers use it the other way round. A star's spectrum peaks at two hundred and ninety nanometres. To find its temperature, rearrange for T, so T equals b over lambda max. First convert to metres, two point nine zero times ten to the minus seven **metres**. Then two point eight nine eight times ten to the minus three, over two point nine zero times ten to the minus seven, is about ten thousand **kelvin**. That's a hot, blue **white** star.

Visual: board change to the working layout, the small plot at the top left. Task strip: "Find the star's surface temperature." Equation strip: "λ_max = b / T". Givens grouped: "λ_max = 290 nm" (measured), "b = 2.898 × 10⁻³ m K" (data sheet). On "T equals b over lambda max" `AlignedAlgebra` "T = b / λ_max". On "minus seven metres" "λ_max = 290 × 10⁻⁹ m = 2.90 × 10⁻⁷ m" (stage 1). On "kelvin" stage 1 shrinks to a kept line and stage 2 writes "T = 2.898 × 10⁻³ / 2.90 × 10⁻⁷ ≈ 9.99 × 10³ K ≈ 1.0 × 10⁴ K" (boxed). On "white" a coded star dot at the top left turns blue-white and the small plot highlights the 10 000 K curve.

### 7. the classical prediction
> So what did classical physics predict? Picture the radiation inside the hot box as standing waves, each fitting a whole number of half wavelengths between the walls. Classical physics gave every possible pattern the same average share of thermal **energy**. But shorter waves fit in far more ways. Halve the wavelength, and there are about eight times as many patterns. The prediction matched the measured curve at long **wavelengths**. At short wavelengths it kept climbing, without any **limit**.

Visual: board change: the cavity box returns, larger, at the left. On "standing waves" one long standing wave draws between the walls (one half-wavelength), then a second (two half-wavelengths). Tag "Year 11: standing waves fit whole half-wavelengths". On "energy" each pattern gets an identical small amber block beside it, tag "equal share each". On "far more ways" shorter patterns appear in quick succession, filling the box, each with its own identical amber block; a counter "patterns:" ticks up. On "Halve the wavelength" the counter jumps "× 8" as the wavelength label halves (tag "in a 3D box"). On "eight times as many patterns" the amber blocks stack into a column labelled "energy at short λ" that grows. On "at long wavelengths" the plot returns at the right with the 5800 K curve and a dashed grey classical curve that follows it closely at the long-wavelength end (tag "classical: Rayleigh-Jeans"). On "limit" the dashed curve, traced from right to left, leaves the measured curve near the peak and climbs off the top of the frame; an arrow "→ ∞".

### 8. the ultraviolet catastrophe
> This failure got a dramatic name, the ultraviolet **catastrophe**. The theory said a hot object should pour out endless ultraviolet, and radiate infinite total **energy**. Even a warm cup of tea would blaze with deadly radiation. Real curves always peak and then fall. Something basic was **missing**.

Visual: on "catastrophe" a stamp-style label "ultraviolet catastrophe" lands on the ultraviolet shading. On "infinite total" the area under the dashed curve shades grey and a tag reads "total energy → ∞". On "a warm cup of tea" a second small inset plot (labelled "about 330 K") shows its measured curve, tiny and far in the infrared, and its dashed classical curve still climbing off the top in the ultraviolet; tag "classical: even 330 K diverges". On "peak and then fall" the measured 5800 K curve pulses, tag "measured: always peaks and falls". On "missing" two tags side by side on the plot: "long λ: classical works ✓" and "short λ: classical fails ✗".

### 9. Planck's packets
> In 1900, Max Planck found the fix. He proposed that the vibrating charges in the walls can only gain or lose energy in whole packets, called quanta. Each packet has energy E equals h f, where h is Planck's constant, six point six two six times ten to the minus thirty four joule seconds. So an oscillator can hold one packet, two, three, and so on. E equals n h **f**.

Visual: the plot shrinks to the right. On "the vibrating charges in the walls" the cavity wall zooms to the coded jiggling charges, tag "oscillators". On "whole packets, called quanta" an oscillator's energy is shown as a ladder of equal steps, tag "quanta: packets of energy". On "E equals h f" the equation strip writes "E = hf (one packet)". On "six point six two six times ten to the minus thirty four joule seconds" a given chip "h = 6.626 × 10⁻³⁴ J s (data sheet)". On "one packet, two, three" the oscillator's energy marker hops up the ladder one rung at a time, "n = 1, 2, 3". On "E equals n h f" the strip adds "E = nhf (n = 1, 2, 3, ...)"; the ladder's rung spacing labels "hf". Name tag in words only: "Max Planck, 1900" (text, no portrait).

### 10. why big packets fix the curve
> Thermal jiggling hands out energy in small random amounts. At low frequencies a packet is small, so the walls trade packets easily, and the classical answer is about **right**. At high frequencies one packet is huge compared with the energy jiggling can supply. Those oscillators almost never get a whole packet, so short-wavelength patterns are frozen **out**. The curve falls back towards zero, and Planck's formula matched the measurements at every **wavelength**.

Visual: packet bars: a fixed grey horizontal band across the left panel, "typical thermal energy at 5800 K". On "Thermal jiggling hands out energy in small random amounts" small grey blocks of random sizes flicker under the band. On "right" an amber packet bar for "long λ (low f)" sits well below the band, and it fills repeatedly (tag "affordable: shared as classical predicts"); on the plot the classical and measured curves overlap at long λ. On "one packet is huge" a much taller amber bar for "short λ (high f)" rises far above the band. On "out" that bar stays empty and greys over with a lock icon, tag "frozen out"; on the plot the dashed classical curve fades. On "every wavelength" the measured 5800 K curve redraws as a solid amber line labelled "Planck's formula = measurement"; the short-λ fall is highlighted. 

### 11. what Wien and Planck did not claim
> Two warnings. Wien's law alone doesn't prove that energy comes in packets. Wien found it in 1893 with classical physics. Packets were needed for the whole shape, especially the fall at short **wavelengths**. And Planck quantised the vibrating charges in the walls, not light itself. Light in packets came from Einstein in 1905, and that's where we're **heading**.

Visual: three-row card. On "Wien's law alone" row 1: "Wien's law (1893): found with classical physics; peak position only". On "wavelengths" row 1 gains "packets needed for: the whole shape, the short-λ fall" with the plot's short-λ region pulsing. On "Planck quantised" row 2: "Planck (1900): the oscillators' energy comes in packets". On "not light itself" a crossed chip "Planck: light is made of photons" appears and is crossed. On "Einstein in 1905" row 3: "Einstein (1905): light itself comes in packets (next video)". Names in text only.

### 12. a way to remember
> Here's a way to hold it together. Hotter means shorter and higher, a shorter peak and a higher curve. And for the shape, remember that big packets are hard to **afford**.

Visual: the three-temperature plot returns. On "Hotter means shorter and higher" the peak dots slide left and the curves rise as a temperature slider moves up; handwritten line "Hotter means shorter and higher." On "afford" the packet bars return beside the plot, the tall bar locked; handwritten line under it "Big packets are hard to afford." Hold about 2 seconds.

### 13. attempt 1 (countdown, 10 seconds)
> Your turn. The spectrum of a star peaks at a wavelength of four hundred and twenty nanometres. Calculate the star's surface temperature, and state whether it is hotter or cooler than the Sun, whose spectrum peaks at about five hundred nanometres. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "The spectrum of a star peaks at a wavelength of 420 nm. (a) Calculate the surface temperature of the star. (b) State whether the star is hotter or cooler than the Sun, whose spectrum peaks at about 500 nm. (2 marks)" Data-sheet chip "b = 2.898 × 10⁻³ m K". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 1 (brief)
> T equals b over lambda max. Two point eight nine eight times ten to the minus three, over four point two zero times ten to the minus seven, is six thousand nine hundred **kelvin**. Its peak is at a shorter wavelength than the Sun's, so it's **hotter**. The classic slip is leaving the wavelength in nanometres. Always convert to metres **first**.

Visual: card shrinks to the top; "420 nm" and "hotter or cooler" underline. On "kelvin" "(a) T = 2.898 × 10⁻³ / 4.20 × 10⁻⁷ = 6.9 × 10³ K". On "hotter" "(b) 420 nm < 500 nm → hotter than the Sun". On "first" a chip "T = 2.898 × 10⁻³ / 420 = 6.9 × 10⁻⁶ K" fades in and is crossed (caption "convert nm to m first"). Hold about 1 second.

### 15. attempt 2 (countdown, 10 seconds)
> Last one. Explain why the classical model of black body radiation failed at short wavelengths, and how Planck's hypothesis fixed it. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Explain why the classical model of black body radiation failed at short wavelengths, and how Planck's hypothesis resolved the problem. (3 marks)" A small unlabelled coded sketch of a measured black-body curve (no classical curve shown). The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 16. feedback 2 (brief)
> Classical physics shared energy equally among wave patterns, and there are more and more patterns at short wavelengths, so intensity rose without limit, the ultraviolet **catastrophe**. Planck said energy comes in packets, E equals h f. At high frequency, thermal energy rarely supplies a whole packet, so short-wavelength emission is suppressed, and the curve **falls**. The slip is saying that Planck discovered photons. That was **Einstein**.

Visual: card shrinks to the top; "failed at short wavelengths" and "Planck's hypothesis" underline. On "catastrophe" "classical: equal share per pattern + more patterns at short λ → intensity → ∞ (UV catastrophe)" with the dashed curve added to the sketch. On "falls" "Planck: E = hf packets; large hf at short λ not supplied thermally → emission suppressed → curve falls". On "Einstein" a chip "Planck discovered photons" fades in and is crossed (caption "Planck: emitters; Einstein: light"). Hold about 1 second.

### 17. handoff
> So hot objects showed that energy is traded in packets of h f. Einstein went further, and said light itself arrives in packets. The evidence came from metals. A dim ultraviolet lamp knocks electrons out of zinc, but a red lamp, however bright, knocks out none. So why can bright low-frequency light fail to eject **electrons**?

Visual: board clears (camera change). On "packets of h f" the oscillator ladder appears small at the top left with "E = hf". On "light itself arrives in packets" an amber wave train on the left breaks into short amber packets (tag "light in packets? (Einstein, 1905)"). On "The evidence came from metals" the painted zinc plate `phys-y11-metal-plate-v1.png` slides in at the centre, tag "clean zinc plate". On "A dim ultraviolet lamp" the bench lamp plate `y12p-bench-lamp-v1.png` appears at the upper left with a thin violet coded beam onto the plate, tag "ultraviolet, dim"; a few navy electron dots leave the zinc surface, tag "electrons out". On "a red lamp, however bright" a second copy of the bench lamp appears at the upper right with a broad bright red coded beam, tag "red, very bright"; no dots leave; tag "electrons: none". On "electrons" the chip "Next: why can bright low-frequency light fail to eject electrons?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 18. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Black body: absorbs all radiation; its emitted spectrum depends only on temperature. Curve: near zero at short λ, one peak, slow fall at long λ.
2. Hotter: peak at shorter wavelength and more intensity at every wavelength.
3. Wien's law: λ_max = b/T, b = 2.898 × 10⁻³ m K. Convert nm to m. Sun: 500 nm, 5800 K.
4. Classical theory: equal energy to every standing-wave pattern, more patterns at short λ → intensity → ∞ (ultraviolet catastrophe). It works only at long λ.
5. Planck (1900): oscillator energy in packets, E = nhf. Big high-f packets are rarely supplied, so short-λ emission is suppressed and the curve falls. Planck quantised the emitters; Einstein (1905) quantised light.

Memory aid (large, on the notes screen): *Hotter means shorter and higher. Big packets are hard to afford.*

## Teaching checks

- **Does it explain causes?** Why hot objects radiate: jiggling, accelerating charges (2). Why the heater glows red: its curve's visible tail (4). Why classical theory diverged: equal shares and ever more patterns (7). Why Planck's packets fix it: large packets cannot be supplied thermally (10). Why the peak shifts with temperature in Planck's picture: more thermal energy affords bigger packets (10).
- **Misconceptions addressed:** a hotter object only peaks elsewhere (it is higher everywhere) (4); nanometres in Wien's law (14 crossed); Wien's law proves quantisation (11); Planck discovered photons (11, 16 crossed); classical theory was wrong everywhere (it works at long λ) (8).
- **One idea at a time:** the source (2), the curve (3), temperature (4), Wien (5, 6), classical model (7), its failure (8), packets (9), why they work (10), limits (11).
- **Video makes it easier:** the peak sliding with a temperature slider (4, 5); the patterns multiplying with equal blocks (7); the dashed curve leaving the frame (7, 8); the locked high-frequency packet (10).
- **Response opportunity:** one prediction (3 s) and two unseen HSC-style tasks with every condition visible, 10 s each; nothing answer-bearing. One crossed mistake each; feedback about 25 s and 33 s.
- **Avoided double teaching:** accelerating charges radiate (v01), continuous spectra and stellar temperature (v03, v04), standing waves (Year 11) recalled in a clause.
- **Syllabus coverage:** `P7-IQ3-01`: black-body evidence (3, 4, 8), Wien's law λ_max = b/T (5, 6, 13), Planck's contribution (9 to 11, 16). Planck's contribution "to a changed model of light" is completed by v10's photon model (handoff 17).
- **Out of scope by design:** the photoelectric effect and photons (v10); the Compton effect (not routed); Stefan-Boltzmann law (not in the 2017 syllabus).

## Practice questions and model answers

**Attempt 1 (scene 13; original wording, HSC style, 2 marks suggested, not an official marking scheme).** "The spectrum of a star peaks at a wavelength of 420 nm. (a) Calculate the surface temperature of the star. (b) State whether the star is hotter or cooler than the Sun, whose spectrum peaks at about 500 nm."
Model answer: (a) T = b/λ_max = 2.898 × 10⁻³ / 4.20 × 10⁻⁷ = 6.9 × 10³ K. (b) Its peak wavelength is shorter than the Sun's, so (λ_max ∝ 1/T) it is hotter. Classical mistake (crossed): T = 2.898 × 10⁻³ / 420 = 6.9 × 10⁻⁶ K.

**Attempt 2 (scene 15; original wording, HSC style, 3 marks).** "Explain why the classical model of black body radiation failed at short wavelengths, and how Planck's hypothesis resolved the problem."
Model answer: Classical theory treated the radiation as standing waves, each pattern receiving the same average share of thermal energy; the number of patterns increases without limit as wavelength decreases, so the predicted intensity rose without limit at short wavelengths (the ultraviolet catastrophe), although real curves peak and fall. Planck proposed that the oscillators exchange energy only in packets E = hf (oscillator energy nhf). At high frequency a packet is much larger than the thermal energy typically available, so short-wavelength modes are rarely excited and the intensity falls towards zero, matching the measured curve. Classic mistake (crossed): "Planck discovered photons".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Wien's constant | b = 2.898 × 10⁻³ m K (HSC data sheet) | 5, 6, 13, 14, notes |
| Planck's constant | h = 6.626 × 10⁻³⁴ J s (HSC data sheet) | 9 |
| Site Figure 4 peaks | 3500 K: 828 nm; 5800 K: 499.7 nm ≈ 500 nm; 10 000 K: 289.8 nm ≈ 290 nm | 3, 4 |
| Slider demo | 5000 K: 580 nm; 10 000 K: 290 nm | 5 |
| Heater | about 1000 K: λ_max = 2.9 × 10⁻⁶ m (2900 nm) | 4 |
| Sun check | 2.898 × 10⁻³ / 5800 = 5.0 × 10⁻⁷ m | 5 |
| Worked example | 290 nm = 2.90 × 10⁻⁷ m; T = 9993 K ≈ 1.0 × 10⁴ K | 6 |
| Mode count | halve λ: × 8 patterns (λ⁻³) | 7 |
| A1 | 2.898 × 10⁻³ / 4.20 × 10⁻⁷ = 6900 K; slip 2.898 × 10⁻³ / 420 = 6.9 × 10⁻⁶ K | 13, 14 |
| Author check | kT at 5800 K = 0.50 eV; packets 2.48 eV (500 nm), 12.4 eV (100 nm) | author note e |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov, `numbers.py` in the session scratchpad); Codex to re-check.

- 2.898e-3/3500 = 8.28e-7; /5800 = 4.997e-7; /10000 = 2.898e-7; /5000 = 5.796e-7; /1000 = 2.898e-6.
- 2.898e-3/2.90e-7 = 9993; 2.898e-3/4.20e-7 = 6900; 2.898e-3/420 = 6.9e-6.
- 2.898e-3/5.00e-7 = 5796; 2.898e-3/1.00e-6 = 2898.
- hc/λ in eV with h = 6.626e-34, c = 3.00e8, e = 1.602e-19: 500 nm 2.48; 100 nm 12.4. kT (5800 K) = 1.381e-23 × 5800 / 1.602e-19 = 0.500 eV.

## Memory aid check

- **"Hotter means shorter and higher. Big packets are hard to afford."** Meaning, as said in scene 12: a hotter black body's peak is at a shorter wavelength (Wien) and its curve is higher at every wavelength; short-wavelength (high-frequency) packets hf are large, so thermal energy rarely supplies them. Assumptions checked: "shorter and higher" holds for ideal black bodies (Planck curves at different temperatures never cross); "afford" is an analogy for the Boltzmann suppression e^(−hf/kT) and is introduced after the mechanism (10), not instead of it. It helps a new case: A1 (shorter peak, hotter) and A2 (why the curve falls).
- **Considered, not used:** "λT is constant" (correct and compact, but students then multiply wavelengths in nm); a shop-and-coins analogy (adds people and money; the packet bars already carry it).

## Narration length estimate

Revision 1 count (6 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **6,430 characters**, 18 scenes. Characters per scene (1 to 18): 436, 482, 397, 523, 456, 434, 486, 289, 364, 455, 355, 166, 268, 334, 154, 433, 323, 75. At 13.3 characters per second the speech is about 483 s; add about 3 s for the prediction countdown, 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 55 s more of the quiet notes hold (about 84 s of holds and countdowns): **about 567 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Reserve trims if the voiced take runs long: the "warm cup of tea" sentence (8); scene 4's heater sentences (keep the heater tag on screen); scene 5's Sun check (kept on screen as a silent line).

## Opening frame

Assumed v08 final frame, written before v08 could be read: paper background; v08's coded polariser chain (an unpolarised source, a polariser and an analyser with labelled transmission axes, and an intensity readout), heading "Why does rotating a polariser change transmitted intensity?", and a chip "Next: how did thermal spectra challenge classical predictions?". Scene 1 needs only an on-screen wave-model diagram that can shrink to a badge and the chip.

Check at the end of this session (6 Nov): `phys-y12-m7-v08.md` (Revision 1) now exists and its "Final frame" was written to match this assumption: the optical-bench polariser chain (filament lamp plate "unpolarised", polariser "axis 0°", analyser "axis θ" with a navy θ arc, intensity bars "I₀", "½I₀", "½I₀ cos²θ", sensor readout "I"), the same heading and the same chip. Scene 1 shrinks that chain (lamp, discs, bars and readout together) into the "wave model" badge. Root to confirm the join.

## Final frame

The last explained frame (end of scene 17, before the key-notes board): paper background; heading "How did thermal spectra challenge classical predictions?"; at the top left a small coded oscillator energy ladder with "E = hf"; an amber wave train breaking into packets, tag "light in packets? (Einstein, 1905)"; at the centre the painted zinc plate `phys-y11-metal-plate-v1.png`, tag "clean zinc plate"; two copies of the painted bench lamp `y12p-bench-lamp-v1.png`, upper left with a thin violet coded beam (tag "ultraviolet, dim") and a few navy electron dots leaving the plate (tag "electrons out"), upper right with a broad bright red coded beam (tag "red, very bright") and no electrons (tag "electrons: none"); chip "Next: why can bright low-frequency light fail to eject electrons?". v10 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m7-v09` (route phys-y12-m7-v09). Suggested explainer folder `src/explainer/lessons/phys-y12-m7-v09` and build folder `docs/production/claude-pm/lessons/p-y12-m7-v09` (root to confirm).

In order (kebab-case; 18 scene headings, all `### N.`): hook, thermal-radiation, read-curve, hotter-shorter-higher, wien-law, worked-star, classical-prediction, uv-catastrophe, planck-packets, packets-fix-curve, claims-limits, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Scene 4 is `explain` with a 3 s prediction countdown. `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: black-body plot (temperature slider, peak marker, dashed classical curve, band shading), cavity model (bouncing ray, multiplying standing waves), packet bars, `AlignedAlgebra`, `NumberTicker`, `PenArrow`, `Countdown`, `CameraStage`. Transitions (`pickTransition`): 1 to 2 camera continue; 2 to 3 clear change to the plot; 3 to 4 to 5 camera continue (same plot); 5 to 6 clear change to working; 6 to 7 clear change; 7 to 8 camera continue; 8 to 9 to 10 camera continue; 10 to 11 camera continue; 11 to 12 clear change; attempts and feedback card shrink to the top; 16 to 17 clear change; 17 to 18 fade to the notes board.

Holds: scene 4 (3 s countdown), memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 60 s). Review evidence paths: `learning_review` = `checks/p-y12-m7-v09-learning-review.md`, `science_check` = `checks/p-y12-m7-v09-physics-check.md`.

## Assets

Have (inspected 6 Nov on a session contact sheet; scaled uniformly only, never stretched):
- `public/assets/physics/phys-y11-sun-v1.png` (1254 × 1254, RGBA): painted Sun disc (2, 3).
- `public/assets/physics/phys-y11-metal-plate-v1.png` (1536 × 1024, RGBA): grey metal plate on a short post, used as "clean zinc plate" (17; v10).
- **Checked, not used:** `phys-y11-toaster-v1.png` (elements hidden inside the slots); `phys-y11-panel-heater-v1.png` (no visible glowing element); `phys-y11-filament-lamp-v2.png` (fallback for the heater, open decision 3); `phys-y11-thermal-camera-v1.png` (infrared imaging is not needed here).

Need (new plates):
1. `y12p-bar-heater-v1.png` and `y12p-bar-heater-glow-v1.png`: 1, 4, 10 (small).
2. `y12p-bench-lamp-v1.png`: 17; v10 (1, 3, 4, 9, 12).

Coded: thermal lattice, cavity box, standing waves, black-body plot, classical curve, visible strip, packet bars, oscillator ladder, coloured beams, electron dots, calculation strips, crossed chips, countdowns, key notes board.

Kit gaps (for the v09 build brief):
1. **Black-body plot.** Planck curves from T (normalised display, compressed scale with a break mark), a slider for T, peak marker and λ_max readout, a dashed Rayleigh-Jeans curve that can leave the frame, band shading.
2. **Cavity standing waves.** Patterns drawn at λ = 2L/n with equal amber blocks and a counter.
3. **Packet bars.** A grey thermal band and amber packet bars of height hf, with a lock state.

## Codex asset brief

1. **`y12p-bar-heater-v1.png`** (new). A painted portable electric bar heater (radiant heater), front three-quarter view: a single horizontal ceramic rod with an exposed coiled metal element, a polished curved reflector behind it, a protective wire guard in front, on a small metal stand; element cold (grey metal). Plain, accurate household appliance, no brand names, no text, no people or hands. Transparent PNG with alpha channel, about 1600 × 1000, object centred with even margins, soft shadow inside the alpha only. Style: match `phys-y11-panel-heater-v1.png` and `phys-y11-toaster-v1.png` (painted, neutral lighting, clean edges).
2. **`y12p-bar-heater-glow-v1.png`** (new). Exactly the same heater, same framing, canvas size and position as plate 1 (pixel-aligned so the two crossfade), but with the coiled element glowing bright orange-red and a warm orange reflection in the reflector. No flames, no glow halo outside the object's alpha edge beyond a soft 10 px bloom. Transparent PNG with alpha channel.
3. **`y12p-bench-lamp-v1.png`** (new). A painted school laboratory lamp housing for optics experiments: a small grey metal box lamp on a short stand, with a round front aperture (dark, unlit) facing right, a cable at the back. No coloured light, no beam, no text, no people or hands. Transparent PNG with alpha channel, about 1400 × 1000, object centred, facing right. Style: match `phys-y11-ray-box-v1.png` and `phys-y11-eht-supply-v1.png`. It is used twice in one frame (one copy mirrored to face left is acceptable as a build mirror; the beam colours and wavelength labels are coded).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text and attempts against the "Numbers used" table.
2. Confirm the physics of every learner-visible claim: thermal radiation from accelerating charges; the black-body definition and cavity model; "hotter: higher at every wavelength"; the heater's peak in the infrared and its red visible tail; Wien's law and b; the classical mode-counting argument and "halve the wavelength, about eight times as many patterns" (author note d); the ultraviolet catastrophe including the 330 K curve; Planck's E = nhf for oscillators and the freezing-out explanation; Wien's law found in 1893 with classical physics; Planck's quantisation of emitters, not light.
3. Confirm the memory aid's assumptions (see "Memory aid check").
4. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
5. Confirm both attempt cards are original in wording, carry every condition and show nothing answer-bearing.
6. Confirm the syllabus quote matches the route JSON exactly (including the double space) and is labelled 2017.
7. Confirm no person, hand, face or body outline is drawn or requested; scientists are named in text only.
8. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
9. Confirm the narration character count and per-scene counts by script with the build parser rules.
10. Report site notes 1 to 3 under Decisions to root.

## YouTube metadata (draft)

Title: Black-Body Radiation and the Ultraviolet Catastrophe: Wien's Law and Planck | HSC Physics Module 7

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module7/lesson10.sa.html

Why does a heater glow red, and why did classical physics predict that hot objects should blaze with ultraviolet? Read a black-body curve, see how hotter objects peak at shorter wavelengths, use Wien's law both ways, and see how Planck's energy packets fixed the ultraviolet catastrophe (and what he did not claim). Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 7: The Nature of Light.
Syllabus content (NSW Physics Stage 6, 2017):
"analyse the experimental evidence gathered about black body radiation, including Wien’s Law related to Planck's contribution to a changed model of light (ACSPH137)"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: polarisation and Malus' law. Next: the photoelectric effect.

#HSCPhysics #Physics #BlackBody #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v08; check that "equal share per pattern" and "more patterns at short wavelengths" land before the divergence is shown; that the packet bars explain the fall without kT; that the Wien and Planck limits in scene 11 are clear and short), then the physics check and the Codex error check.
- The peak sliding with temperature, the multiplying standing waves and the locked high-frequency packet carry the explanation; judge them at playback speed in the voiced preview.
