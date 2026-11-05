# Year 12 Physics M7 V08: Polarisation and Malus's law. Why does rotating a polariser change transmitted intensity? (design)

Status: Revision 1 (6 Nov 2026): first design. Needs independent learning review and science check before voicing.

Narration 6,298 characters, 16 scenes, about 558 s, counted by script with the build parser rules (see "Narration length estimate"). Opens on v07's final frame.

Scope: eighth video of Year 12 Physics Module 7 (The Nature of Light, Physics Stage 6, 2017 syllabus), inquiry question "What evidence supports the classical wave model of light and what predictions can be made using this model?". Templates as `phys-y12-m7-v01.md`; calculation layout as `math-a12-d10.md`. No pre-design pack exists; the pack work is done here. Site lesson read in full (6 Nov, read-only, through `work/brief168/module7-lesson05.sa.txt`, hash checked): orient and predict (crossed sunglasses, sky light, sound; warm-up; intentions; vocabulary including Brewster's angle), unpolarised versus plane-polarised (Figure 1, I = ½I₀, Stop and Check, MC), Malus's law (key cases, ½I₀cos²θ, the three-polariser chain, Figure 2, HSC tip, MC 40 W m⁻² at 60°), the polariser-chain worked example (80 W m⁻², 0°, 30°, 60°: 40, 30, 22.5; 10 without the middle filter), natural sources and applications (extension: Brewster, scattering, birefringence, sunglasses, LCDs, 3D cinema), apply and consolidate (Activities 1 and 2, "Evaluate 7 marks" on significance, "Analyse 6 marks" on the third filter), independent practice (Q1 at 40° and 20°, Q2, model answers), retrieve (Land's sheet polariser): `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson05.sa.html`, SHA256 `60abf968c0079227fb403abe4c58a9d6f782f910568ddd3d6fc65d628a1bc104` (recomputed 6 Nov; matches the route). Route entry `phys-y12-m7-v08`, sections `unpolarised-vs-plane-polarised`, `apply-malus-law`, `solve-polariser-chain`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Explain transverse electric-field projection and Malus law, distinguishing unpolarised first-filter half intensity from cos-squared between ideal polarisers." Next: "phys-y12-m7-v09: How did thermal spectra challenge classical predictions?" Practical in the route: "Malus-law intensity investigation".

Owner rules applied: as v01 (no people, hands, faces or body outlines: no sunglasses worn, no eye at a filter; Malus named in words only); painted plates for the lamp, laser, bench, light sensor, data logger and protractor (all reused); polarising filters coded as flat grey discs with a labelled transmission axis (kit plan `m7-polarisation`; open decision 1); E-field arrows, components and graphs coded; every number recalculated in Python; the syllabus form I = I_max cos²θ; a 3 s prediction; "Pause here to answer." with a 10 s countdown; brief feedback; original attempts; optional key notes; Australian spelling; no em dashes. Recalled, not re-taught: v01 (light is a transverse EM wave; E ⟂ direction of travel), v07's handoff question, Year 11 wave energy and amplitude, vector components.

Syllabus content (Physics Stage 6 (2017), Module 7 The Nature of Light; ledger id `P7-IQ2-04`), quoted from the ledger:

- `P7-IQ2-04`: "conduct investigations quantitatively using the relationship of Malus’ Law I=I_(max)cos^(2)θ for plane polarisation of light, to evaluate the significance of polarisation in developing a model for light (ACSPH050, ACSPH076, ACSPH120)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 59). The ledger's "I=I_(max)cos^(2)θ" is the extraction of the syllabus equation I = I_max cos²θ; it appears on screen as "I = I_max cos²θ".

**Boundary:** starts on v07's final frame (a polarising filter in the laser beam, rotation arrow, "I = ?", the "which way does light wiggle?" question). Teaches: what turning one filter and two filters does (observation); polarisation (unpolarised: E in every direction across the beam; plane-polarised: one direction); only transverse waves can be polarised; what a filter does (passes the E component along its transmission axis, absorbs the rest; output polarised along the axis); unpolarised light through one ideal filter: ½I₀ at any angle; Malus's law derived from the component E cos θ and intensity ∝ amplitude²; key angles; crossed filters; the half-versus-cos² distinction; the site's three-filter chain (40, 30, 22.5 W m⁻²; 10 without the middle filter); the quantitative investigation (I against cos²θ, straight line through the origin); the significance of polarisation for the model of light. Stops before Brewster's angle, scattering, birefringence and display technology (site extension), photons, black-body radiation (v09).

## Decisions

- **Learner question (route wording kept).** "Why does rotating a polariser change transmitted intensity?" The answer: a filter passes only the part of the electric field along its axis (3); for polarised light at angle θ to the axis that part is E cos θ (4); intensity depends on amplitude squared, so I = I_max cos²θ, which changes as θ changes (4, 5).
- **Hook (v07's frame; site prediction box).** In the laser beam the brightness changes as the filter turns (lasers are often already polarised; one sentence). With lamp light, one filter halves the intensity and turning it changes nothing; a second filter turned changes it. Prediction: "Turn the second filter 45°: half the light through it, or a quarter?" (chips "half", "a quarter"); answer half.
- **E-field projection (route stop "transverse electric-field projection").** The E arrow (blue, v01 colour) is resolved into components along and across the axis; only the along component passes. The magnetic field is not drawn (polarisation direction is defined by E; one clause).
- **Half, not cos² (route stop).** Unpolarised light has no single θ; averaging cos²θ over all directions gives ½ (shown visually as a sweeping arrow and the average line, not as an integral; author note b). Narrated trap: applying cos²θ to the first filter.
- **Worked chain (site numbers unchanged).** 80 W m⁻²; filters at 0°, 30°, 60°: 40, 30, 22.5 W m⁻²; without the middle filter, 10 W m⁻². The surprise (adding a filter lets more light through) is explained by each filter resetting the polarisation direction.
- **Investigation (route practical).** Lamp, polariser, analyser on a rotating mount with a protractor scale, light sensor and data logger; readings every 15°; background subtracted; I against cos²θ is a straight line through the origin with gradient I_max (illustrative dataset, labelled so). Lasers: check whether already polarised (scene 1's point).
- **Significance (syllabus "evaluate the significance"; site "Evaluate 7 marks").** Establishes that light is transverse; excludes longitudinal waves and a simple particle stream; matches Maxwell's transverse E field; limits: does not say what oscillates (it was once taken as evidence for an aether) and does not settle the photon question. Judgement: highly significant, but narrow.
- **Memory aid (scene 10, new):** "Cos for the field, cos squared for the light. First filter on unpolarised light: half." See "Memory aid check".
- **Attempts (original).** A1: unpolarised 120 W m⁻² through two ideal polarisers at 35°: final intensity (40 W m⁻²). A2: how polarisation supports a transverse wave model and rules out a longitudinal one (3 marks). Crossed: A1 "120 cos²35° = 81 W m⁻²"; A2 "polarisation proves light is a particle stream with sides".
- **Handoff (route next).** The wave model now explains interference, diffraction and polarisation, and Maxwell's theory predicts it all; but one everyday observation, the glow of hot objects, would challenge classical predictions. Next: "How did thermal spectra challenge classical predictions?". The final frame matches the assumption recorded in `phys-y12-m7-v09.md` ("Opening frame"): v08's coded polariser chain with labelled axes and an intensity readout, the heading and the chip. See "Final frame".
- **Colour key:** E field blue (v01); transmission axes navy lines on grey discs; passed component blue solid, absorbed component blue dashed and fading; intensity bars orange; angles navy arcs.
- **Site sources used:** `unpolarised-vs-plane-polarised` (definitions, transverse-only, ½I₀, Figure 1), `apply-malus-law` (I = I₀cos²θ key cases, ½I₀cos²θ, crossed filters, the three-filter idea, HSC tip), `solve-polariser-chain` (80 W m⁻² example), "Evaluate 7 marks" (criterion, E = E_max cos θ, exclusions, limits, verdict), "Analyse 6 marks" (each filter redefines the plane), Q2 (a). Not used: Brewster's angle, scattering, birefringence, LCDs, 3D cinema, Land (site extension).
- **Site notes (quoted from site lesson 5, read 6 Nov; for Codex to log in `site-corrections-phys-y12.md`):**
  1. `orient-and-predict` vocabulary: "Malus's Law $I = I_0 \cos^2\theta$" while the syllabus and HSC formula sheet write I = I_max cos²θ, and the lesson uses I₀ both for the unpolarised intensity before the first filter and for the polarised intensity reaching the analyser (for example, "Unpolarised through polariser then analyser $I = \dfrac{1}{2}I_0 \cos^2\theta$"). Not an error in any single line, but the double use invites the classic slip of applying cos²θ to unpolarised light. Proposed fix: write Malus's law as I = I_max cos²θ with I_max the polarised intensity reaching the analyser, and keep I₀ for unpolarised light.
  2. `explain-natural-sources`: "Rotate the lenses 90°: the glare brightens dramatically, then vanishes again as you complete the rotation." Glare vanishes again after a further 90° (180° from the start), not after a complete 360° rotation in the sense the wording suggests. Proposed fix: "Rotate the lenses 90° and the glare brightens; rotate another 90° and it is blocked again."
  3. `retrieve-reflect-and-finish`: "Edwin Land's 1929 sheet polariser, aligned iodo-quinine sulphate crystals in a stretched polymer film". Land's 1929 J-sheet aligned herapathite (iodoquinine sulphate) crystals in a cellulose film by flow or field alignment; the stretched polyvinyl alcohol and iodine H-sheet dates from 1938. Proposed fix: "aligned microscopic iodoquinine sulphate crystals in a plastic film (later versions used stretched polyvinyl alcohol with iodine)". Also "Land's work confirmed that light is a transverse wave" overstates it; proposed fix: "Land's work put Malus's law into everyday technology."
  Checked and correct: ½I₀ for unpolarised light, Malus's key cases, the three-filter I₀/8 chain, the 80 W m⁻² worked example, Q1 (29.3 and 39.0 W m⁻²), the "Evaluate 7 marks" and "Analyse 6 marks" answers.
- **Cause chain taught, in order:** (1) light is transverse, so its E field points across the beam (2); (2) unpolarised light has E in all such directions; polarised light in one (2); (3) a filter passes only the E component along its axis and absorbs the rest (3); (4) for unpolarised light the average passed is half (3, 6); (5) for polarised light at θ, the passed amplitude is E cos θ (4); (6) intensity ∝ amplitude², so I = I_max cos²θ (4); (7) each filter resets the polarisation, so a middle filter can increase transmission (7); (8) polarisation shows light is transverse (9).
- **Entry knowledge (route):** v07; v01 (transverse EM waves); Year 11 intensity, amplitude and energy; vector components.
- **Learner-visible vocabulary:** polarisation (restricting a transverse wave's oscillation to one direction, 2); unpolarised and plane-polarised (2); polarising filter and transmission axis (the direction a filter lets the electric field through, 3); analyser (a second filter used to test polarised light, 4); Malus's law (4).
- **Legacy logic ported:** none. Kit family `m7-polarisation` (polariser and analyser, controlled rotation and intensity; ideal filters; unpolarised factor stated separately; no three-filter chain) supports scenes 1, 3 to 6 and the final frame; the three-filter chain (scene 7) is new motion, as the kit's limits require.
- **New explainer motion:** **filter stage** (beam along the bench through one, two or three coded filters on rotating mounts; each with a navy axis line and an angle readout; orange intensity bars between filters; a sensor readout); **E-arrow view** (end-on view of the beam: a blue E arrow; unpolarised mode spins it through all directions with random jumps; polarised mode fixes it; components along and across the axis drawn with the across part fading as it is absorbed); **cos² graph** (I against θ from 0° to 360° drawing as the analyser turns; a second graph of I against cos²θ for the investigation); **average sweep** (cos²θ for random directions averaging to ½); `AlignedAlgebra`; `DataGraph`; `Countdown`; `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the filter stage across the upper half; the E-arrow view, graph or working strips below or at the right; everything above the bottom 12%.
- **Author notes (not learner copy):**
  (a) Malus: I = I_max cos²θ with I_max the intensity of the plane-polarised light reaching the analyser and θ the angle between its polarisation direction and the analyser's transmission axis. Ideal (lossless) polarisers assumed throughout.
  (b) Average of cos²θ over a uniform distribution of directions is ½, so an ideal polariser transmits ½I₀ of unpolarised light at any orientation. Real polarisers transmit less (often 30 to 40 per cent); not narrated.
  (c) Many diode laser pointers and school lasers emit partly or fully linearly polarised light, so one filter in a laser beam can change the intensity as it turns. Scene 1 says "many lasers are already polarised".
  (d) Investigation dataset (illustrative): θ 0, 15, 30, 45, 60, 75, 90°; readings 482, 446, 362, 238, 121, 34, 3 lux after background subtraction; ideal 480 × cos²θ = 480, 448, 360, 240, 120, 32, 0.
  (e) Pronunciations: "Malus" (MAH-loos), "cos squared theta" ("cos" as "coz"), "I max".
- **Open decisions for root:**
  - **1. Filters coded or painted.** The kit plan codes polarising filters ("one reusable vector filter is sufficient"); the owner rule asks for plates for real objects. Default: coded grey discs on the painted bench mounts (`y12p-slide-holder-v1.png`), because the transmission axis must be exact. Alternative: a new `y12p-polarising-filter-mount-v1.png` with a coded axis overlay.
  - **2. Plates (reused only).** `phys-y11-filament-lamp-v1.png` (alpha check as v03), `y12p-laser-module-v1.png` (v02), `y12p-slide-holder-v1.png` (v05, three copies), `phys-y11-optical-bench-v1.png`, `phys-y11-light-sensor-head-v1.png`, `phys-y11-data-logger-v1.png`, `phys-y11-protractor-v1.png`.
  - **3. Join to v09.** This design's final frame was written to match the assumption in `phys-y12-m7-v09.md` (polariser chain with labelled axes and an intensity readout, the heading and the chip); nothing else is on it, so v09's own badge and ticks can be added cleanly.
  - **4. Optional beats** the learning review may cut: scene 9's limits sentence; scene 8's background-subtraction clause.
Main question: *Turn one polarising filter in front of another and the light fades to darkness, then comes back. Why does rotating a polariser change transmitted intensity?*
Entry knowledge: v07's handoff question; v01's transverse EM wave; intensity and amplitude; vector components.
Stops after: polarisation, the filter's action, ½I₀, Malus's law derived and used, crossed filters, the three-filter chain, the investigation, the significance for the model of light. No Brewster, scattering or applications.
Handoff: v09, how thermal spectra challenged classical predictions.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings.

### 1. hook (turn it and it fades)
> In the laser beam, turning the filter makes the light brighter and dimmer, because many lasers are already polarised. Try it with ordinary lamp light. One filter cuts the brightness to **half**, and turning it changes **nothing**. Now add a second filter, and turn that one. The light fades, and a quarter turn later, it's **gone**. Keep turning, and it comes back. Make your **prediction**. Turn the second filter just forty-five degrees. Does half the light get through it, or a quarter? **Half**. Let's see why.

Visual: opens on v07's final frame (see "Opening frame"); the chip "Next: why does rotating a polariser change transmitted intensity?" becomes the heading; the "?" with the two arrow options moves to the upper right. On "turning the filter makes the light brighter and dimmer" the coded filter turns and the readout swings; tag "laser: already polarised". On "ordinary lamp light" the laser swaps for the filament lamp plate (`phys-y11-filament-lamp-v1.png`, reused) on the bench; one coded filter in a slide holder (`y12p-slide-holder-v1.png`). On "half" an orange bar before the filter "I₀" and after it "½I₀". On "nothing" the filter turns through 90°; the bar after it stays the same; tag "any angle: ½I₀". On "second filter" a second filter in a second holder; on "gone" it turns to 90° and the bar after it drops to zero; tag "crossed". On "comes back" it continues to 180°; the bar returns. On "prediction" a 3 s `Countdown` beside two chips: "half" and "a quarter". On "Half" the first chip ticks; the second filter sits at 45° with the bar after it half the bar before it.

### 2. what polarised light is
> Light is a transverse wave. Its electric field points across the direction the light travels. In ordinary light, that direction keeps changing at random, through every direction across the beam. That's unpolarised **light**. If the electric field points in just one direction, the light is plane **polarised**. And here's the point. Only a transverse wave can be polarised. In a longitudinal wave, like sound, the vibration is along the direction of travel, so there's nothing across the beam to **restrict**. So the fact that light can be polarised tells us light is **transverse**.

Visual: board change to the E-arrow view: a beam coming out of the screen (a navy dot "travel: towards you") with a blue E arrow across it. On "keeps changing at random" the arrow jumps between random directions in the plane; on "light" tag "unpolarised: E in every direction across the beam". On "polarised" the arrow locks vertical, oscillating up and down; tag "plane-polarised: one direction". On "longitudinal wave, like sound" a side-view inset: a sound wave as compressions with grey double arrows along the travel direction; on "restrict" a grey filter disc in its path, crossed tag "nothing to select". On "transverse" the v07 "?" resolves: the arrow across the beam ticks, the one along it is crossed; chip "polarisation → light is transverse".

### 3. what a filter does
> A polarising filter has a transmission axis. It lets through the part of the electric field that lies along that axis, and absorbs the part across it. So the light coming out is polarised along the axis. With unpolarised light going in, the field points every way, and on average the filter passes exactly half the **intensity**. That's true whichever way you turn it, which is why one filter alone never changes the **brightness**.

Visual: the E-arrow view gains a grey filter disc with a navy axis line (vertical). On "lets through the part of the electric field that lies along that axis" a fixed blue E arrow at an angle splits into a solid component along the axis and a dashed component across it; on "absorbs the part across it" the dashed component fades into the disc. On "polarised along the axis" the output arrow is vertical. On "intensity" the random-direction mode: the arrow sweeps through many directions while a small average meter beside it settles at "½" (tag "average over all directions"); the filter stage shows "I₀ → ½I₀". On "brightness" the filter disc rotates; the output bar stays at ½I₀.

### 4. Malus's law
> Now send polarised light into a second filter, called an analyser, whose axis is at an angle theta to the light's polarisation. Split the electric field into two parts. The part along the analyser's axis is E cos **theta**, and that's what gets through. But intensity depends on the square of the amplitude, so the intensity drops by cos squared theta. That's Malus's law, I equals I max cos squared **theta**. I max is the intensity of the polarised light reaching the analyser. At zero degrees, everything gets through. At forty-five degrees, half. At sixty degrees, a quarter. And at ninety degrees, **nothing**.

Visual: the E-arrow view: a vertical blue E arrow (polarised input) and an analyser disc whose navy axis is at angle θ (navy arc). On "Split the electric field" the arrow resolves into components along and across the analyser axis; on "theta" the along component labels "E cos θ" and the across component fades. On "square of the amplitude" a chip "intensity ∝ amplitude²" (Year 11). On "theta" the equation strip writes "I = I_max cos²θ" (boxed; tag "syllabus form"); on "I max is the intensity" a tag on the input bar "I_max: polarised light arriving". On "At zero degrees" the analyser turns through 0°, 45°, 60°, 90° in step with the narration, a cos² graph of I against θ drawing below with dots at "1", "½", "¼"; on "nothing" the dot at 90° reaches zero.

### 5. crossed filters
> So when the two axes are at right angles, cos ninety is zero, and no light gets through. The filters are crossed. Keep turning the analyser, and the light comes back at one hundred and eighty degrees. In one full turn, you get two bright positions and two dark **ones**.

Visual: the filter stage: two filters, axes vertical and horizontal; the bar after the analyser at zero; tag "crossed: θ = 90°". On "comes back at one hundred and eighty degrees" the analyser turns to 180° and the bar returns; the cos² graph extends to 360°. On "ones" two peaks and two zeros on the graph pulse; tag "two bright, two dark per turn".

### 6. half, or cos squared?
> Here's the trap. Malus's law only works for light that's already polarised. For unpolarised light hitting the first filter, there's no single angle theta. You just halve it. So unpolarised light through two filters at angle theta gives a half, times cos squared theta, times the starting **intensity**. Don't use cos squared on the first **filter**.

Visual: board change: two-filter stage with "I₀ (unpolarised)" before the first filter. On "no single angle theta" a navy "θ = ?" tag over the first filter, then crossed. On "You just halve it" "½I₀" after the first filter. On "intensity" the strip writes "I = ½ I₀ cos²θ" with "½" under the first filter and "cos²θ" under the second. On "filter" a crossed chip "first filter: I₀ cos²θ".

### 7. a chain of three filters
> Try a chain. Unpolarised light of eighty watts per square metre meets three filters. The first is vertical, the second is turned thirty degrees, and the third is at sixty. After the first, it's halved to forty **watts per square metre**. The second is thirty degrees from the first, so forty times cos squared thirty, which is **thirty**. The third is thirty degrees from the second, so thirty times cos squared thirty, which is **twenty-two point five**. Now take the middle filter out. The third is now sixty degrees from the first, so forty times cos squared sixty is only **ten**. Adding a filter let more light through, because each filter resets the polarisation along its own axis.

Visual: board change to the working layout with the three-filter stage above it. Task strip: "Find the intensity after each filter." Givens grouped: "I₀ = 80 W m⁻² (unpolarised)", "axes: 0°, 30°, 60° from vertical". On "watts per square metre" stage 1: "I₁ = ½ × 80 = 40 W m⁻²", the first bar. On "thirty" stage 2: "I₂ = 40 cos²30° = 40 × 0.75 = 30 W m⁻²"; a navy arc "30° between filters 1 and 2". On "twenty-two point five" stage 3: "I₃ = 30 cos²30° = 22.5 W m⁻²" (orange); arc "30° between filters 2 and 3". On "take the middle filter out" the middle filter slides away; on "ten" "I₃′ = 40 cos²60° = 40 × 0.25 = 10 W m⁻²"; arc "60°". On "resets the polarisation" the middle filter returns and the E arrows after each filter rotate to its axis; chip "each filter: output polarised along its own axis".

### 8. investigating Malus's law
> To test Malus's law, put a lamp, a polariser and an analyser on a rotating mount, with a light sensor behind. Turn the analyser in fifteen degree steps and record the sensor reading, after subtracting the background light in the room. Then plot the intensity against cos squared theta. If Malus's law holds, you get a straight line through the **origin**, and its gradient is I **max**.

Visual: board change: the optical bench plate (reused) with the lamp, two slide holders with coded filters, the analyser's holder on the protractor plate (`phys-y11-protractor-v1.png`, reused) as its angle scale, the light sensor head plate (`phys-y11-light-sensor-head-v1.png`) and the data logger plate (`phys-y11-data-logger-v1.png`). On "fifteen degree steps" the analyser clicks round in 15° steps; a coded table fills: "θ: 0, 15, 30, 45, 60, 75, 90°", "reading (lux): 482, 446, 362, 238, 121, 34, 3" with a grey tag "illustrative, background subtracted". On "subtracting the background" a chip "lamp off: background reading subtracted". On "plot the intensity against cos squared theta" a `DataGraph` draws: x "cos²θ" (0 to 1), y "intensity (lux)", seven points. On "origin" a straight best-fit line through the origin. On "max" a gradient triangle "gradient = I_max ≈ 480 lux".

### 9. what polarisation says about light
> So how important was polarisation for the model of light? Very, but for one thing. It showed that light is a transverse wave, because only transverse waves can be polarised. That ruled out light as a longitudinal wave, and a simple stream of particles has no direction for a filter to pick out. It also fitted Maxwell's picture, with the electric field across the beam. But it couldn't say what was oscillating. For years, people took it as evidence for an invisible medium, the aether, which turned out to be **wrong**. So polarisation settled the shape of light's wave, not what light is **made** of.

Visual: board change: a judgement board with three rows. On "transverse wave" row 1 "establishes: light is transverse" (tick). On "ruled out light as a longitudinal wave" row 2 "rules out: longitudinal waves; a simple particle stream" (two crossed icons: grey along-arrows, grey dots). On "fitted Maxwell's picture" a small v01 EM wave icon with E across the beam (tick). On "wrong" row 3 "does not settle: what oscillates (aether, later rejected); the photon question" (grey). On "made" a verdict chip "highly significant, but narrow: the wave's geometry".

### 10. a way to remember
> Here's a way to remember it. Cos for the field, cos squared for the light. And the first filter on unpolarised light, just **half**.

Visual: board clears to the E-arrow components and the two formulas. On "Cos for the field" "E = E_max cos θ" pulses; on "cos squared for the light" "I = I_max cos²θ" pulses; on "half" "unpolarised → ½I₀" pulses; the handwritten line writes above: "Cos for the field, cos² for the light. First filter on unpolarised light: half." Hold about 2 seconds.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. Unpolarised light of intensity one hundred and twenty watts per square metre passes through two ideal polarising filters, with their transmission axes at thirty-five degrees. Calculate the intensity after the second filter. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "Unpolarised light of intensity 120 W m⁻² passes through two ideal polarising filters whose transmission axes are at 35° to each other. Calculate the intensity of the light emerging from the second filter. (2 marks)". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 12. feedback 1 (brief)
> The first filter halves the unpolarised light, to sixty watts per square metre. Then Malus's law, sixty times cos squared thirty-five degrees, gives about **forty watts per square metre**. The classic slip is skipping the half, and using one hundred and twenty times cos squared thirty-five, about **eighty-one**.

Visual: card shrinks to the top; "Unpolarised" and "35°" underline. Lines build: "I₁ = ½ × 120 = 60 W m⁻²"; on "forty watts per square metre" "I₂ = 60 cos²35° = 60 × 0.671 = 40 W m⁻²". On "eighty-one" a chip "I = 120 cos²35° = 81 W m⁻²" fades in and is crossed (caption "unpolarised: halve first"). Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. Explain how the fact that light can be polarised supports a transverse wave model of light, and why it rules out a longitudinal wave model. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Light can be plane polarised by a polarising filter. Explain how this observation supports a transverse wave model of light and rules out a longitudinal wave model. (3 marks)". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 2 (brief)
> Polarisation means restricting the oscillation to one direction across the direction of travel. A transverse wave oscillates across its direction of travel, so a filter can pass one direction and absorb the **rest**. A longitudinal wave oscillates along its direction of travel, so there's no direction across the beam to select, and it can't be **polarised**. The slip is saying polarisation shows light is made of particles. A simple particle stream has no oscillation for a filter to **select**.

Visual: card shrinks to the top; "polarised", "transverse" and "longitudinal" underline. On "rest" "transverse: oscillation ⟂ travel → a filter can select one direction → polarisation possible"; on "polarised" "longitudinal: oscillation ∥ travel → nothing across the beam to select → cannot be polarised; light can be, so light is transverse". On "select" a chip "polarisation shows light is particles" fades in and is crossed (caption "particles have no oscillation direction"). Hold about 1 second.

### 15. handoff
> So rotating a polariser changes the intensity because only the part of the electric field along its axis gets through. That part is E cos theta, and intensity goes as its square. With interference, diffraction and polarisation, light behaves as a transverse wave every time, just as Maxwell's theory predicts. By the end of the eighteen hundreds, it looked as if the theory of light was nearly complete. But one ordinary thing would not fit. The glow of hot objects. How did thermal spectra challenge classical **predictions**?

Visual: board clears (camera change) to the polariser chain, centred: the filament lamp at the left labelled "unpolarised", a polariser in a slide holder with its navy axis line labelled "polariser: axis 0°", an analyser in a second holder with its axis line labelled "analyser: axis θ", a navy arc "θ" between the two axis directions, orange intensity bars "I₀", "½I₀" and "½I₀ cos²θ" between the components, and a coded sensor readout "I" at the right. On "E cos theta" the analyser turns a little and the readout changes. On "transverse wave every time" a small grey chip "interference, diffraction, polarisation: wave" flashes beside the chain; on "nearly complete" it fades again, so the frame stays clean for v09. On "predictions" a chip "Next: how did thermal spectra challenge classical predictions?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 16. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Unpolarised light: E in every direction across the beam. Plane-polarised: E in one direction.
2. Only transverse waves can be polarised, so polarisation shows light is transverse (sound cannot be polarised).
3. A filter passes the E component along its transmission axis; the output is polarised along that axis.
4. Unpolarised light through one ideal filter: I = ½I₀ (any angle).
5. Malus's law (polarised light into an analyser at θ): I = I_max cos²θ, because E = E_max cos θ and I ∝ E². Crossed (90°): zero.
6. Chains: halve at the first filter (unpolarised), then cos² of the angle between neighbouring axes.

Memory aid (large, on the notes screen): *Cos for the field, cos² for the light. First filter on unpolarised light: half.*

## Teaching checks

- **Does it explain causes?** Why only transverse waves polarise (2); why one filter halves unpolarised light at any angle (3); why the analyser follows cos²θ (4); why crossed filters give darkness (5); why a middle filter increases transmission (7); why polarisation mattered for the model (9).
- **Misconceptions addressed:** cos²θ applied to unpolarised light (6, crossed in 12); one filter's rotation changes brightness for unpolarised light (1, 3); adding a filter can only reduce light (7); polarisation shows light is particles (crossed in 14); intensity follows cos θ (4).
- **One idea at a time:** observation (1), polarisation (2), filter (3), Malus (4), crossed (5), half versus cos² (6), chain (7), investigation (8), significance (9).
- **Video makes it easier:** the E arrow splitting into components with the absorbed part fading (3, 4); the average meter settling at ½ (3); the cos² graph drawing as the analyser turns (4, 5); E arrows re-aligning after each filter (7); the straight-line graph (8).
- **Response opportunity:** one prediction (3 s) and two unseen tasks, 10 s each; nothing answer-bearing. One crossed mistake each; feedback about 15 s and 30 s.
- **Avoided double teaching:** v01's transverse EM wave recalled; Year 11 intensity and amplitude recalled.
- **Syllabus coverage:** `P7-IQ2-04` quantitative use of Malus's law (4 to 8, A1), the investigation (8), and the significance of polarisation for a model of light (2, 9, A2).
- **Out of scope by design:** Brewster's angle, scattering, birefringence, LCDs and 3D cinema (site extension); photons; black-body radiation (v09).

## Practice questions and model answers

**Attempt 1 (scene 11; original wording, 2 marks).** "Unpolarised light of intensity 120 W m⁻² passes through two ideal polarising filters whose transmission axes are at 35° to each other. Calculate the intensity of the light emerging from the second filter."
Model answer: After the first filter, I₁ = ½ × 120 = 60 W m⁻² (1 mark). After the second, I₂ = I₁ cos²35° = 60 × 0.671 = 40 W m⁻² (1 mark). Classic mistake (crossed): 120 cos²35° = 81 W m⁻².

**Attempt 2 (scene 13; original wording, 3 marks).** "Light can be plane polarised by a polarising filter. Explain how this observation supports a transverse wave model of light and rules out a longitudinal wave model."
Model answer: Polarisation restricts a wave's oscillation to a single direction perpendicular to its direction of travel (1 mark). In a transverse wave the oscillation (for light, the electric field) is perpendicular to the direction of travel, so a filter can transmit one direction and absorb the others; light can be polarised, consistent with a transverse wave (1 mark). In a longitudinal wave the oscillation is along the direction of travel, so there is no perpendicular direction to select and it cannot be polarised; since light can be, a longitudinal model is ruled out (1 mark). Classic mistake (crossed): "polarisation shows light is particles".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Key angles | cos²0° = 1; cos²45° = 0.5; cos²60° = 0.25; cos²90° = 0 | 4, 5 |
| Chain (site) | ½ × 80 = 40; 40 × cos²30° = 40 × 0.75 = 30; 30 × 0.75 = 22.5; without middle: 40 × cos²60° = 10 (W m⁻²) | 7 |
| Investigation (illustrative) | θ 0 to 90° in 15° steps; cos²θ = 1, 0.933, 0.75, 0.5, 0.25, 0.067, 0; readings 482, 446, 362, 238, 121, 34, 3 lux; ideal 480 × cos²θ = 480, 448, 360, 240, 120, 32, 0; gradient ≈ 480 lux | 8 |
| A1 (original) | ½ × 120 = 60; cos²35° = 0.6710; 60 × 0.6710 = 40.26 ≈ 40 W m⁻²; wrong 120 × 0.6710 = 80.5 ≈ 81 W m⁻² | 11, 12 |
| Hook | 45°: half of the polarised light | 1 |

## Numbers to verify (all values, repeated for Codex)

- cos²(30°) = 0.75; cos²(60°) = 0.25; cos²(45°) = 0.5; cos²(15°) = 0.9330; cos²(75°) = 0.0670; cos²(35°) = 0.67101.
- 80/2 = 40; 40 × 0.75 = 30; 30 × 0.75 = 22.5; 40 × 0.25 = 10.
- 60 × 0.67101 = 40.26; 120 × 0.67101 = 80.52.
- 480 × [1, 0.933, 0.75, 0.5, 0.25, 0.067, 0] = 480, 447.8, 360, 240, 120, 32.2, 0.

## Memory aid check

- **"Cos for the field, cos² for the light. First filter on unpolarised light: half."** Meaning: the transmitted electric-field amplitude is E_max cos θ; the intensity (what a sensor reads, what the eye judges as brightness) is I_max cos²θ; for unpolarised light the first ideal filter passes half, regardless of angle. Assumptions checked: ideal polarisers; θ is the angle between the incoming light's polarisation and the filter's axis (neighbouring filters in a chain); "light" means intensity, not the field. It helps a new case: A1 (halve first, then cos²) and the chain (7). Introduced after the explanation (3 to 6).
- **Considered, not used:** "Crossed means lost" (true but adds nothing beyond scene 5).

## Narration length estimate

Revision 1 count (6 Nov; counted by script with the build parser rules): **6,298 characters**, 16 scenes. Characters per scene (1 to 16): 494, 567, 424, 603, 266, 341, 672, 378, 594, 128, 256, 305, 171, 486, 523, 75. At 13.3 characters per second the speech is about 474 s; add about 3 s for the prediction, 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 55 s more of the notes hold (about 84 s): **about 558 s**, inside the band and under the cap. Reserve trims: scene 9's aether sentence; scene 8's background clause (open decision 4).

## Opening frame

v07's final frame (`phys-y12-m7-v07.md`, "Final frame"): the grating bench, small: the laser module on the optical bench, the beam through a coded circular polarising filter in the slide holder (navy axis line) to a coded sensor readout "I = ?"; a curved navy rotation arrow round the filter; above the beam a "?" with two arrow options (along the beam, across it); a grey chip "sound: diffracts, interferes, longitudinal"; heading "How does a grating let us measure wavelength?"; chip "Next: why does rotating a polariser change transmitted intensity?". Scene 1 turns the chip into the heading, turns the filter in the laser beam, then swaps the laser for the lamp.

## Final frame

The last explained frame (end of scene 15, before the key-notes board), written to match the assumption in `phys-y12-m7-v09.md`: paper background; centred on the optical bench, v08's coded polariser chain: at the left the filament lamp plate labelled "unpolarised"; a polariser (grey disc in a slide holder) with a navy transmission-axis line labelled "polariser: axis 0°"; an analyser (second grey disc in a second slide holder) with its navy axis line labelled "analyser: axis θ", a navy arc "θ" between the two axis directions; orange intensity bars between the components labelled "I₀", "½I₀" and "½I₀ cos²θ"; at the right a coded sensor readout "I"; nothing else on the board (no tick list, no axes, no graph); heading unchanged ("Why does rotating a polariser change transmitted intensity?"); a chip reads "Next: how did thermal spectra challenge classical predictions?". v09 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m7-v08` (route phys-y12-m7-v08). Suggested explainer folder `src/explainer/lessons/phys-y12-m7-v08` and build folder `docs/production/claude-pm/lessons/p-y12-m7-v08` (root to confirm).

In order (kebab-case; 16 scene headings, all `### N.`): hook, polarisation, filter-action, malus-law, crossed, half-or-cos-squared, three-filter-chain, investigation, significance, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 and key-notes (`hold`). Scene 1 is `explain` with a 3 s prediction countdown. `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: filter stage (`m7-polarisation`, extended to three filters), E-arrow view, average sweep, cos² graph, `DataGraph`, `AlignedAlgebra`, `PenArrow`, `Countdown`, `CameraStage`. Transitions: 1 to 2 clear change (end-on view); 2 to 3 camera continue; 3 to 4 camera continue; 4 to 5 clear change; 5 to 6 clear change; 6 to 7 clear change; 7 to 8 clear change (bench); 8 to 9 clear change; 9 to 10 clear change; attempts and feedback card shrink to the top; 14 to 15 clear change; 15 to 16 fade to the notes board.

Holds: hook (3 s countdown), memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 60 s). Review evidence paths: `learning_review` = `checks/p-y12-m7-v08-learning-review.md`, `science_check` = `checks/p-y12-m7-v08-physics-check.md`.

## Assets

Have (scaled uniformly only, never stretched):
- `phys-y11-filament-lamp-v1.png`: 1, 8, 15 (alpha check as v03). `y12p-laser-module-v1.png` (v02): 1. `y12p-slide-holder-v1.png` (v05): 1, 3, 7, 8, 15 (up to three copies). `phys-y11-optical-bench-v1.png`: 1, 8, 15. `phys-y11-light-sensor-head-v1.png`: 8. `phys-y11-data-logger-v1.png`: 8. `phys-y11-protractor-v1.png`: 8.
- Kit family `m7-polarisation` (coded): 1, 3 to 6, 15.
- **Checked, not used:** `phys-y11-light-meter-v1.png` (a handheld-style meter; the sensor head and logger match the investigation better).

Need (new plates): none (see open decision 1 for an optional filter mount).

Coded: filters and axes, E arrows and components, beam, bars, graphs, table, judgement board, sound inset, working strips, chips, attempt cards, countdowns, key notes board.

## Codex asset brief

No new plates for v08 unless root chooses the optional `y12p-polarising-filter-mount-v1.png` (open decision 1): if chosen, a circular grey polarising filter in a rotating ring mount with a degree scale on the ring (no numerals painted; the scale is coded), on the same bench carrier as `y12p-slide-holder-v1.png`, transparent PNG with clean edges, house style, no people or hands. Otherwise Codex confirms the coded filter discs fit the slide holder's window and the reused plates share one scale on the bench; append to `status.md`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and the values in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the physics of every learner-visible claim: unpolarised and plane-polarised light; only transverse waves can be polarised; the filter passes the E component along its axis; ½I₀ for unpolarised light at any angle (author note b); Malus's law derived from E cos θ and I ∝ E²; crossed filters; the chain values; the middle filter resetting polarisation; the investigation's straight line through the origin with gradient I_max; the significance and its limits; the laser polarisation remark (author note c).
3. Confirm the investigation dataset is labelled illustrative.
4. Confirm the memory aid's assumptions.
5. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
6. Confirm both attempt cards are original, carry every condition and show nothing answer-bearing.
7. Confirm the syllabus quote matches the ledger exactly, is labelled 2017, and that the screen form is I = I_max cos²θ.
8. Confirm no person, hand, face or body outline is drawn or requested (no sunglasses worn, no eye at a filter).
9. Confirm no em dash (U+2014) and no U+2061, and Australian spelling.
10. Confirm the narration character count and per-scene counts by script with the build parser rules.
11. Confirm the final frame matches the opening assumed in `phys-y12-m7-v09.md`.
12. Log site notes 1 to 3 in `site-corrections-phys-y12.md`.

## YouTube metadata (draft)

Title: Polarisation and Malus's Law: Why Turning a Filter Dims the Light | HSC Physics Module 7

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module7/lesson05.sa.html

Turn one polarising filter in front of another and the light fades to darkness, then comes back. See what polarised light is, why only transverse waves can be polarised, what a filter does to the electric field, why the first filter halves unpolarised light, how Malus's law I = I_max cos²θ comes from E cos θ, why adding a third filter can let more light through, how to test the law, and why polarisation mattered for the model of light. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 7: The Nature of Light.
Syllabus content (NSW Physics Stage 6, 2017):
"conduct investigations quantitatively using the relationship of Malus’ Law I = I_max cos²θ for plane polarisation of light, to evaluate the significance of polarisation in developing a model for light (ACSPH050, ACSPH076, ACSPH120)"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: how a grating lets us measure wavelength. Next: how thermal spectra challenged classical predictions.

#HSCPhysics #Physics #Polarisation #MalusLaw #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v07; check that the component split and the fading absorbed part make "E cos θ" concrete at playback speed; that "intensity ∝ amplitude²" is recalled clearly enough to carry cos²; that the half-versus-cos² trap lands before A1; that the attempt cards give nothing away), then the physics check and the Codex error check.
- The E arrow splitting into components, the average meter settling at ½, the cos² graph drawing as the analyser turns, and the E arrows re-aligning after each filter in the chain carry the explanation; judge them at playback speed in the voiced preview.
