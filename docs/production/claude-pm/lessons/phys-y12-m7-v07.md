# Year 12 Physics M7 V07: Diffraction gratings. How does a grating let us measure wavelength? (design)

Status: Revision 1 (6 Nov 2026): first design. Needs independent learning review and science check before voicing.

Narration 6,155 characters, 16 scenes, about 547 s, counted by script with the build parser rules (see "Narration length estimate"). Opens on v06's final frame.

Scope: seventh video of Year 12 Physics Module 7 (The Nature of Light, Physics Stage 6, 2017 syllabus), inquiry question "What evidence supports the classical wave model of light and what predictions can be made using this model?". Templates as `phys-y12-m7-v01.md`; calculation layout as `math-a12-d10.md`. No pre-design pack exists; the pack work is done here. Site lesson read in full (6 Nov, read-only, through `work/brief168/module7-lesson04.sa.txt`, hash checked; section list in `phys-y12-m7-v05.md`): `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson04.sa.html`, SHA256 `c0e0238c1a22bff8c12e572f14a8b6c95599a291e82d17603642dd4e7b32fd1d` (recomputed 6 Nov; matches the route). Route entry `phys-y12-m7-v07`, sections `diffraction-gratings`, `worked-example-wavelength`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Convert line density to spacing, identify allowed orders and calculate angles; separate slit spacing from screen distance. Stop before full spectrometer resolution." Next: "phys-y12-m7-v08: Why does rotating a polariser change transmitted intensity?" Practical in the route: "Diffraction-grating wavelength investigation".

Owner rules applied: as v01 (no people, hands, faces or body outlines; Fraunhofer not needed and not named); painted plates for the laser, slide holder, bench, screen and metre rule (all reused); the grating's lines, rays, spots, spectra and calculation strips coded; every number recalculated in Python; the syllabus form d sin θ = mλ; a 3 s prediction; "Pause here to answer." with a 10 s countdown; brief feedback; original attempts; optional key notes; Australian spelling; no em dashes. Recalled, not re-taught: v06 (path difference, d sin θ = mλ derived, coherence), v03 (spectroscopes spread light), Year 11 trigonometry.

Syllabus content (Physics Stage 6 (2017), Module 7 The Nature of Light; ledger id `P7-IQ2-02`), quoted from the ledger:

- `P7-IQ2-02`: "conduct investigations to analyse quantitatively the interference of light using double slit apparatus and diffraction gratings dsinθ=mλ (ACSPH116, ACSPH117, ACSPH140)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 59). v06 covered the double slit; this video covers gratings.

**Boundary:** starts on v06's final frame (broad two-slit bands above sharp grating peaks at the same angles, "?"). Teaches: why many slits make sharp, bright lines (far-apart slits cancel just off the exact angle); the grating equation d sin θ = mλ (same condition as v06, now used at large angles without the small-angle shortcut); line density to spacing (400 lines per mm → 2.5 × 10⁻⁶ m); d is the line spacing, not the screen distance; measuring an angle from a screen (θ = tan⁻¹(x/L)); the worked example (647 nm); allowed orders (sin θ ≤ 1, m ≤ d/λ; second order 31.2°, highest order 3); white light (violet nearest the centre, overlapping orders); why gratings beat double slits for measurement; the investigation (both sides, halve the angle, repeat, quoted d). Stops before resolving power and spectrometer resolution (site extension), the single-slit envelope, polarisation (v08).

## Decisions

- **Learner question (route wording kept).** "How does a grating let us measure wavelength?" The answer: thousands of slits put the bright lines at the same angles as two slits but make them sharp and bright (2); the angle of a sharp line can be measured precisely (3, 8); with d known from the line density, λ = d sin θ / m (4, 5).
- **Hook (site prediction box "how might the pattern differ").** Prediction: "Same spacing d, thousands of slits: do the bright lines move?" (chips "they move", "same places"); answer "same places, but sharp".
- **Sharpness cause (site "Analyse 6 marks").** Pairing argument: for a 1000-slit grating, a tiny turn off the exact angle makes slit 1 and slit 501 half a wavelength apart, so they cancel, and so does every such pair; with two slits the angle must change much further. Narrated plainly; intensity ∝ N² is not narrated (author note b).
- **Angle from a screen (route stop "separate slit spacing from screen distance").** Scene 5 measures the first-order spot 26.8 cm from the centre on a screen 1.00 m away: θ = tan⁻¹(0.268/1.00) = 15.0°. The narration warns that at these angles sin θ and tan θ differ (0.259 versus 0.268), so v06's small-angle shortcut does not apply.
- **Worked example (site's MC values: 400 lines per mm, first order at 15°, 647 nm).** The site's main worked example (300 lines per mm, 18.5°) gives 1060 nm infrared, which cannot be seen on a screen; the design uses the site's 400 lines per mm MC values instead, which give visible red light (site note 3). Stages: d; θ from the screen; λ; then the second-order angle and the highest order.
- **Allowed orders (route stop).** sin θ cannot exceed 1, so m ≤ d/λ = 3.86: highest order 3, seven spots in all. On a 1.00 m screen the third-order spot would be 1.23 m from the centre (often off a bench screen; one sentence).
- **White light (site Figure 2).** m = 0 white; each order violet to red outwards; second and third orders overlap (2 × 700 = 1400 > 3 × 400 = 1200).
- **Investigation (route practical; site "Assess 6 marks").** Measure to both first-order spots and halve the total angle (cancels a small tilt of the grating); repeat; use higher orders for larger angles; the quoted line density is a systematic uncertainty. Laser safety.
- **Memory aid (scene 10, new):** "Lines per metre? Flip it for d. Many lines, tiny d, big angles." See "Memory aid check".
- **Attempts (original).** A1: 300 lines per mm, 532 nm: second-order angle (18.6°) and highest order (6). A2: 500 lines per mm, screen 0.800 m, first-order spots 0.280 m either side: wavelength (661 nm). Crossed: A1 "d = 300 × 10⁻³ m" (lines per mm not inverted); A2 "d = 0.800 m" (screen distance used as d).
- **Handoff (route next).** Interference and diffraction show light is a wave, but sound does both too; neither shows which way light oscillates. A polarising filter does. Next: "Why does rotating a polariser change transmitted intensity?". See "Final frame".
- **Colour key:** as v06 (laser red; green where stated); grating lines dark grey; angles navy; screen distances orange; d rose; calculation strips as v01.
- **Site sources used:** `diffraction-gratings` (grating equation, d = 1/N, white light, gratings versus prisms, n_max), `worked-example-wavelength` (method; second-order and maximum-order steps; HSC tip on d versus L; lines per mm conversion), MC (400 lines per mm, 15°, 647 nm), `compare-diffraction-patterns` (sharp grating maxima), "Analyse 6 marks" (same angles; sharpness from distant slits cancelling), "Assess 6 marks" (precision argument; quoted d as systematic). Not used: resolving power, Fraunhofer's grating anecdote, single-slit numbers.
- **Site notes (quoted from site lesson 4, read 6 Nov; for Codex to log in `site-corrections-phys-y12.md`):**
  1. `worked-example-wavelength`, Step 2: "$\sin\theta_2 = 2(1.06 \times 10^{-6})/(3.33 \times 10^{-6}) = 0.636$, $\theta_2 = $ 39.5°". With unrounded values λ = 1.0577 × 10⁻⁶ m and d = 3.333 × 10⁻⁶ m, sin θ₂ = 0.6346 and θ₂ = 39.4°; 39.5° comes from early rounding. Step 4 repeats 39.5°. Proposed fix: carry unrounded values and give 39.4° in steps 2 and 4.
  2. `independent-practice`, SAQ 1 (b) model answer: "$\sin\theta_2 = ... = 0.623$. $\theta_2 = \sin^{-1}(0.623) \approx 38.5°$". With d = 1/(600 × 10³) exactly, sin θ₂ = 2 × 520 × 10⁻⁹ × 600 × 10³ = 0.624 and θ₂ = 38.6°. Proposed fix: "sin θ₂ = 0.624, θ₂ ≈ 38.6°".
  3. `worked-example-wavelength`: the problem says a first-order maximum "is observed at an angle of 18.5°", which gives 1060 nm (infrared). An infrared maximum is not visible on a screen, so "observed" needs an infrared detector. Not a calculation error; proposed fix: state that an infrared sensor locates the maximum, or change the angle to a visible case.
  Checked and correct: d = 1/N, the grating equation, n_max ≤ d/λ, the white-light ordering, the MC (647 nm), the "Analyse 6 marks" answer (same angles for the same d).
- **Cause chain taught, in order:** (1) the bright-line condition is the same as for two slits (2, 3); (2) with many slits, a tiny turn off that angle makes widely separated slits cancel, so the lines are sharp (2); (3) sharp lines at large angles can be measured precisely (3, 8); (4) d comes from the line density (4); (5) λ = d sin θ / m from a measured angle (5); (6) sin θ ≤ 1 limits the orders (6); (7) longer λ diffracts further, so white light spreads into spectra (7).
- **Entry knowledge (route):** v06; Year 11 trigonometry; v03's spectroscopes.
- **Learner-visible vocabulary:** diffraction grating (a slide with thousands of equally spaced lines, each acting as a slit, 1, 3); line density (lines per millimetre, 4); grating spacing d (distance from one line to the next, 4); order m (the count of bright lines out from the centre, 3, 6).
- **Legacy logic ported:** none. Kit family `m7-diffraction` (sharpening array maxima; six slits) supports scene 2; its limits (six slits illustrate an array; each pattern separately normalised) are stated on screen ("illustrative N", "each graph scaled to its own peak").
- **New explainer motion:** **slit-count slider** (intensity graph sharpening as N goes 2, 6, 20, 1000, peaks fixed in place); **pair-cancellation panel** (a row of slits with a phase dial on each; at a small angle off the peak, slit 1 and slit N/2 + 1 highlighted as a cancelling pair, then all pairs); **grating bench** (laser, slide holder with a coded ruled slide, screen with spots, angle and distance brackets); **order fan** (rays at m = 0, ±1, ±2, ±3, with an unreachable m = 4 ray dashed and crossed beyond 90°); **white-light fan** (each order spread violet to red; overlap highlighted); `AlignedAlgebra`; `Countdown`; `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the bench or fan centre-left; working strips on the right; everything above the bottom 12%.
- **Author notes (not learner copy):**
  (a) Worked example: d = 1/(400 × 10³) = 2.5 × 10⁻⁶ m; x = 0.268 m at L = 1.00 m gives θ = tan⁻¹(0.268) = 14.999° ≈ 15.0°; λ = 2.5 × 10⁻⁶ × sin 15.0° = 6.470 × 10⁻⁷ m = 647 nm; sin θ₂ = 0.5176, θ₂ = 31.2°; d/λ = 3.864, so m_max = 3 (θ₃ = 50.9°); x₂ = tan 31.17° = 0.605 m; x₃ = tan 50.94° = 1.23 m.
  (b) Pairing argument: for N slits, the first zero next to a principal maximum occurs where the total path difference across the grating changes by one wavelength, so slit k and slit k + N/2 differ by λ/2; the angular half-width scales as λ/(N d cos θ). Peak intensity ∝ N² (not narrated).
  (c) sin 15° = 0.2588, tan 15° = 0.2679 (3.5 per cent apart).
  (d) White light: 380 to 750 nm; second-order red (2 × 700 = 1400 nm) beyond third-order violet (3 × 400 = 1200 nm) in d sin θ terms.
  (e) Pronunciations: "four hundred lines per millimetre", "sine", "tan" (tangent), "inverse tan".
- **Open decisions for root:**
  - **1. Plates.** No new plates. Reused: `y12p-laser-module-v1.png` (v02), `y12p-slide-holder-v1.png` (v05), `phys-y11-optical-bench-v1.png`, `phys-y11-screen-carrier-v1.png`, `phys-y11-metre-rule-v1.png`, `y12p-pocket-spectroscope-v1.png` (v03, scene 8).
  - **2. Worked-example source** (Decisions): the site's MC values replace its infrared worked example (site note 3).
  - **3. Optional beats** the learning review may cut: scene 7's overlap sentence; scene 9's "use higher orders" clause.
Main question: *A grating keeps the bright lines where two slits put them, but makes them razor sharp. How does a grating let us measure wavelength?*
Entry knowledge: v06's path difference and d sin θ = mλ; trigonometry.
Stops after: sharpness, the grating equation, line density to d, the screen angle, the worked example, allowed orders, white light, why gratings are better, the investigation. No resolving power.
Handoff: v08, why rotating a polariser changes transmitted intensity.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings.

### 1. hook (sharper, not shifted)
> Two slits give broad, soft bands, and their centres are hard to pin down. A diffraction grating is a slide ruled with thousands of equally spaced lines, each one acting as a slit. Make your **prediction**. With the same spacing between slits, but thousands of them, do the bright lines move to new places? **No**. They stay exactly where they were, but they become thin, sharp and **bright**, with darkness in between.

Visual: opens on v06's final frame (see "Opening frame"); the chip "Next: how does a grating let us measure wavelength?" becomes the heading. On "slide ruled with thousands of equally spaced lines" the coded ruled slide in the slide holder zooms in: fine parallel lines, tag "each line acts as a slit". On "prediction" a 3 s `Countdown` beside two chips: "they move" and "same places". On "No" the second chip ticks; the dashed connectors between the two graphs pulse. On "bright" the bottom graph's dashed sketch becomes solid: tall, narrow peaks; tag "same angles, sharper and brighter".

### 2. why many slits make sharp lines
> Why so sharp? At the exact angle of a bright line, light from every slit arrives in step, so it all adds up. Now turn just a tiny bit away from that angle. With only two slits, the waves are still almost in step, so it's still fairly bright. That's why two-slit bands are broad. But picture a grating with a thousand slits. Turn just far enough that slit one and slit five hundred and one are half a wavelength **apart**. They cancel. So do slits two and five hundred and two, and every other pair like them. The whole lot cancels, so it's dark almost straight **away**. More slits, sharper **lines**.

Visual: board change to the pair-cancellation panel: a row of slits (drawn as 20 for clarity, tag "illustrative: imagine 1000"), each with a small phase dial. On "every slit arrives in step" all dials point the same way; a tall bar "adds up". On "turn just a tiny bit" the dials begin to fan out slightly. On "With only two slits" a two-slit inset: two dials nearly aligned, a tall bar; tag "two slits: still bright, broad band". On "apart" slit 1 and slit 11 (of 20; labelled "1" and "N/2 + 1") highlight with opposite dials; on "They cancel" a zero bar between them. On "every other pair" pairs highlight in sequence and cancel. On "away" the intensity bar drops to zero at a small angle; the slit-count slider beside it: N = 2, 6, 20, 1000, the peak narrowing each time at the same position (tag "each graph scaled to its own peak"). On "lines" a chip "more slits → sharper, brighter lines".

### 3. the same equation, now at large angles
> The bright lines follow exactly the same rule as two slits. Neighbouring slits must differ in path by a whole number of wavelengths. So d sine theta equals m lambda, where d is the spacing between neighbouring lines, theta is the angle from the straight-through direction, and m is the order. The difference is the angles. A grating's lines are so close together that the bright lines come out at large angles, often tens of degrees. So you work with the angle **itself**, not the small-angle shortcut from two slits.

Visual: board change to the order fan: a grating at the left, a straight-through ray "m = 0", rays at ±θ₁ "m = ±1". On "Neighbouring slits must differ in path" a close-up of two neighbouring lines with the d sin θ triangle (as v06) in rose. On "d sine theta equals m lambda" the equation strip writes "d sin θ = mλ" (boxed; tag "same as two slits"). On "spacing between neighbouring lines" a rose bracket "d" between two lines; on "angle from the straight-through direction" a navy arc "θ"; on "the order" labels "m = 0, ±1". On "tens of degrees" the m = 1 ray swings to 15°, tag "large angle". On "itself" a crossed grey chip "Δx = λL/d (small angles only)".

### 4. from lines per millimetre to d
> Gratings are labelled with a line density, like four hundred lines per millimetre. To get d, turn that around. Four hundred lines per millimetre is four hundred thousand lines per metre, so the spacing is one over four hundred thousand, which is two point five times ten to the minus six **metres**. Here's the trap. That d is the spacing between lines on the grating. It's not the distance to the **screen**.

Visual: board change: a magnified ruler strip under the grating, "1 mm" bracket with 400 tick lines (drawn as a dense band, tag "400 lines"). Working strip: on "four hundred thousand lines per metre" "N = 400 lines per mm = 4.00 × 10⁵ lines per m"; on "metres" "d = 1 / N = 1 / 4.00 × 10⁵ = 2.5 × 10⁻⁶ m" (orange). On "screen" the bench appears small below: a rose bracket "d (between lines, 2.5 μm)" at the grating and an orange bracket "L (to the screen)" along the bench; a crossed chip "d = grating-to-screen distance".

### 5. measuring a wavelength
> Here's a measurement. Red laser light passes through the four hundred line per millimetre grating, onto a screen one metre away. The first-order spot lands twenty-six point eight centimetres from the **centre**. First, find the angle. Tan theta is nought point two six eight over one, so theta is fifteen point nought **degrees**. At an angle this big, sine and tan are noticeably different, so don't swap one for the other. Now use the grating equation with m equal to one. Lambda equals d sine theta, two point five times ten to the minus six times sine fifteen degrees, which is about **six hundred and forty-seven nanometres**. Red, as **expected**.

Visual: board change to the grating bench: the optical bench plate (reused) with the laser module plate (`y12p-laser-module-v1.png`), the slide holder plate (`y12p-slide-holder-v1.png`) holding the coded grating, and the screen carrier plate (`phys-y11-screen-carrier-v1.png`) at the right; the metre rule plate (`phys-y11-metre-rule-v1.png`) along the screen. Task strip: "Find the wavelength." Givens grouped: "N = 400 lines per mm → d = 2.5 × 10⁻⁶ m", "L = 1.00 m", "x₁ = 0.268 m (first order, m = 1)". On "centre" red spots on the screen at m = 0 and ±1; orange brackets "x = 0.268 m" and "L = 1.00 m". On "degrees" stage 1: "tan θ = x / L = 0.268 / 1.00 → θ = 15.0°". On "sine and tan are noticeably different" a chip "sin 15° = 0.259, tan 15° = 0.268". On "six hundred and forty-seven nanometres" stage 2: "λ = d sin θ / m = 2.5 × 10⁻⁶ × sin 15.0° / 1 = 6.47 × 10⁻⁷ m = 647 nm" (orange). On "expected" a red swatch tag "red".

### 6. how many orders?
> Where's the second-order spot? Sine theta equals two lambda over d, nought point five one eight, so theta is thirty-one point two **degrees**. Is there a limit? Yes, because sine theta can't be bigger than one. So m can't be bigger than d over lambda, which here is three point eight six. The highest order is three, so you see seven spots in all, the centre and three on each **side**. On a one metre screen, the third-order spots are over a metre out, so they'd usually miss the screen.

Visual: the bench zooms out to the order fan. On "degrees" stage 3: "sin θ₂ = 2λ / d = 2 × 6.47 × 10⁻⁷ / 2.5 × 10⁻⁶ = 0.518 → θ₂ = 31.2°"; the m = ±2 rays draw. On "sine theta can't be bigger than one" a chip "sin θ ≤ 1". On "three point eight six" stage 4: "m ≤ d / λ = 2.5 × 10⁻⁶ / 6.47 × 10⁻⁷ = 3.86 → highest m = 3". On "side" the m = ±3 rays draw at 50.9°; a dashed m = 4 ray is crossed beyond 90°, tag "impossible"; a count chip "7 spots: m = 0, ±1, ±2, ±3". On "over a metre out" an orange bracket on the screen line "x₃ = 1.23 m: off a small screen".

### 7. white light
> Shine white light through the grating instead. The centre stays white, because every colour has m equal to zero there. But in each order, longer wavelengths come out at bigger angles, so the light spreads into a spectrum, violet nearest the centre and red furthest **out**. Further out, the spectra are wider, and the second and third orders overlap.

Visual: board change to the white-light fan: a white beam into the grating; the m = 0 ray white. On "longer wavelengths come out at bigger angles" the m = 1 order spreads into a coded spectrum, violet inner, red outer. On "out" tags "violet: least deviated", "red: most"; chip "d sin θ = mλ: bigger λ, bigger θ". On "overlap" the m = 2 and m = 3 spectra draw wider; the region where m = 2 red passes m = 3 violet is hatched; tag "overlap".

### 8. why a grating is the better ruler
> So why use a grating to measure wavelength, rather than two slits? Its lines are sharp, so you can find their centres precisely. And they're at large angles, so a small error in reading the angle is only a small fraction of it. That's why spectroscopes, like the ones that spread starlight, use **gratings**.

Visual: board change: left, the broad two-slit band at a tiny angle; right, a sharp grating line at 15°. On "find their centres precisely" a navy crosshair snaps onto the grating line's centre, while on the broad band it wanders; tags "fuzzy centre" and "sharp centre". On "small fraction" the same navy error bar is laid on both angles: nearly as wide as the two-slit angle, a small fraction of 15°; tags "tiny angle: big % error", "large angle: small % error". On "gratings" the pocket spectroscope plate (`y12p-pocket-spectroscope-v1.png`, v03) with a coded cut-away showing a grating inside.

### 9. doing the investigation
> In the investigation, measure the angle to the first-order spot on both sides of the centre, and halve the total angle. That cancels out any small tilt of the grating. Repeat the measurement, and if the spots fit on the screen, use the second order too, since bigger angles give smaller percentage errors. Remember the line density printed on the grating has its own uncertainty, which repeating can't **reveal**. And never look along the **beam**.

Visual: the grating bench returns. On "both sides of the centre" navy arcs to the left and right m = 1 spots, "θ_L" and "θ_R"; on "halve the total angle" working "θ = (θ_L + θ_R) / 2". On "tilt of the grating" the grating rotates slightly; θ_L and θ_R become unequal but their mean stays 15.0°. On "Repeat" a small results table fills three rows. On "second order" the m = 2 spots highlight. On "reveal" a chip "quoted N: systematic uncertainty". On "beam" a red chip "never look along the beam".

### 10. a way to remember
> Here's a way to remember it. Lines per metre? Flip it for d. Many lines, tiny d, big **angles**.

Visual: board clears to "N (lines per metre) → d = 1/N" with a flip arrow; then a grating with dense lines and a wide fan. On "Lines per metre? Flip it for d" the flip arrow animates; on "angles" the fan widens as the lines crowd; the handwritten line writes above: "Lines per metre? Flip it for d. Many lines, tiny d, big angles." Hold about 2 seconds.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. Green laser light, wavelength five hundred and thirty-two nanometres, passes through a grating with three hundred lines per millimetre. Calculate the angle of the second-order maximum, and the highest order that can be observed. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "Laser light of wavelength 532 nm is incident normally on a diffraction grating with 300 lines per mm. (a) Calculate the angle of the second-order maximum. (b) Determine the highest order maximum that can be observed. (3 marks)". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 12. feedback 1 (brief)
> Three hundred lines per millimetre is three times ten to the five per metre, so d is three point three three times ten to the minus six metres. Sine theta equals two lambda over d, nought point three one nine, so theta is about **eighteen point six degrees**. For the highest order, d over lambda is six point two seven, so the highest order is **six**. The classic slip is using three hundred times ten to the minus three as d, without **flipping** it.

Visual: card shrinks to the top; "300 lines per mm" and "532 nm" underline. Lines build: "d = 1 / 3.00 × 10⁵ = 3.33 × 10⁻⁶ m"; on "eighteen point six degrees" "(a) sin θ₂ = 2 × 532 × 10⁻⁹ / 3.33 × 10⁻⁶ = 0.319 → θ₂ = 18.6°"; on "six" "(b) m ≤ d / λ = 6.27 → highest order m = 6". On "flipping" a chip "d = 300 × 10⁻³ m" fades in and is crossed (caption "d = 1/N, with N per metre"). Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. Light passes through a grating with five hundred lines per millimetre, onto a screen nought point eight zero zero metres away. The two first-order spots are each nought point two eight zero metres from the centre. Calculate the wavelength. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Monochromatic light is incident normally on a diffraction grating with 500 lines per mm. On a screen 0.800 m from the grating, the two first-order maxima are each 0.280 m from the central maximum. Calculate the wavelength of the light. (3 marks)". A small coded diagram: grating, screen, central spot and two first-order spots with "0.280 m" brackets and "0.800 m" bracket. The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 2 (brief)
> First the angle. Tan theta is nought point two eight zero over nought point eight zero zero, so theta is nineteen point three **degrees**. The spacing is one over five times ten to the five, two times ten to the minus six metres. Lambda equals d sine theta, about **six hundred and sixty-one nanometres**. The slip is putting the screen distance in for d. The screen distance only finds the **angle**.

Visual: card shrinks to the top; "500 lines per mm", "0.800 m" and "0.280 m" underline. On "degrees" "θ = tan⁻¹(0.280 / 0.800) = 19.3°". On "six hundred and sixty-one nanometres" "d = 1 / 5.00 × 10⁵ = 2.00 × 10⁻⁶ m; λ = d sin θ = 2.00 × 10⁻⁶ × sin 19.3° = 6.61 × 10⁻⁷ m = 661 nm". On "angle" a chip "d = 0.800 m" fades in and is crossed (caption "L finds θ; d comes from the grating"). Hold about 1 second.

### 15. handoff
> So a grating measures wavelength because thousands of slits turn the bright bands into sharp lines, at large angles you can measure precisely. Then d sine theta equals m lambda gives the wavelength. Diffraction and interference prove that light is a wave. But sound diffracts and interferes too, and sound is a longitudinal wave. So which way does light **wiggle**? Put a polarising filter in the beam, and turn it. The brightness **changes**. Why does rotating a polariser change transmitted intensity?

Visual: board clears (camera change) to the grating bench, small: the laser beam and the first-order red spot. On "sound diffracts and interferes too" a grey chip "sound: diffracts, interferes, longitudinal". On "wiggle" a "?" over the beam with two small arrow options: a double arrow along the beam (longitudinal) and a double arrow across it (transverse). On "Put a polarising filter in the beam" a coded circular polarising filter (a grey disc in the slide holder, with a navy transmission-axis line) appears in the beam after the laser, a coded light-sensor readout beyond it "I = ?"; on "changes" a curved navy arrow round the filter shows rotation and the readout flickers between values; chip "Next: why does rotating a polariser change transmitted intensity?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 16. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. A diffraction grating has thousands of equally spaced lines; bright lines sit where neighbouring slits differ by mλ: d sin θ = mλ.
2. Many slits: widely separated slits cancel just off the exact angle, so the lines are sharp and bright (same angles as two slits with the same d).
3. d = 1/N with N in lines per metre (convert lines per mm first). d is not the screen distance L.
4. From a screen: tan θ = x/L; then λ = d sin θ / m (no small-angle shortcut at large angles).
5. sin θ ≤ 1, so m ≤ d/λ.
6. White light: m = 0 white; each order violet (inner) to red (outer); higher orders overlap.

Memory aid (large, on the notes screen): *Lines per metre? Flip it for d. Many lines, tiny d, big angles.*

## Teaching checks

- **Does it explain causes?** Why lines sharpen (2); why the angles are the same as two slits (3); why the small-angle shortcut fails (3, 5); why orders are limited (6); why white light spreads (7); why gratings measure better (8).
- **Misconceptions addressed:** more slits move the lines (1); d confused with L (4, crossed in 14); lines per mm not inverted (crossed in 12); sin and tan swapped at large angles (5); centre of white-light pattern is coloured (7).
- **One idea at a time:** sharpness (2), equation (3), d (4), measurement (5), orders (6), white light (7), precision (8), method (9).
- **Video makes it easier:** cancelling pairs on the phase dials (2); the slit-count slider narrowing peaks in place (2); the d and L brackets side by side (4); the crossed m = 4 ray (6); the error bar shrinking as a fraction of the angle (8).
- **Response opportunity:** one prediction (3 s) and two unseen tasks, 10 s each; nothing answer-bearing. One crossed mistake each; feedback about 25 s each.
- **Avoided double teaching:** v06's derivation of d sin θ recalled, not redone.
- **Syllabus coverage:** `P7-IQ2-02` quantitative interference with diffraction gratings, d sin θ = mλ (2 to 9).
- **Out of scope by design:** resolving power, spectrometer resolution, single-slit envelope, polarisation (v08).

## Practice questions and model answers

**Attempt 1 (scene 11; original wording, 3 marks).** "Laser light of wavelength 532 nm is incident normally on a diffraction grating with 300 lines per mm. (a) Calculate the angle of the second-order maximum. (b) Determine the highest order maximum that can be observed."
Model answer: d = 1/(300 × 10³) = 3.33 × 10⁻⁶ m (1 mark). (a) sin θ₂ = 2λ/d = 2 × 532 × 10⁻⁹ / 3.33 × 10⁻⁶ = 0.319, θ₂ = 18.6° (1 mark). (b) m ≤ d/λ = 3.33 × 10⁻⁶ / 532 × 10⁻⁹ = 6.27, so the highest order is 6 (1 mark). Classic mistake (crossed): d = 300 × 10⁻³ m.

**Attempt 2 (scene 13; original wording, 3 marks).** "Monochromatic light is incident normally on a diffraction grating with 500 lines per mm. On a screen 0.800 m from the grating, the two first-order maxima are each 0.280 m from the central maximum. Calculate the wavelength of the light."
Model answer: θ = tan⁻¹(0.280/0.800) = 19.3° (1 mark). d = 1/(500 × 10³) = 2.00 × 10⁻⁶ m (1 mark). λ = d sin θ / m = 2.00 × 10⁻⁶ × sin 19.3° / 1 = 6.61 × 10⁻⁷ m = 661 nm (1 mark). Classic mistake (crossed): using the screen distance as d.

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| d (worked example) | 1 / (400 × 10³) = 2.5 × 10⁻⁶ m | 4, 5, 6 |
| Screen angle | tan⁻¹(0.268 / 1.00) = 14.999° ≈ 15.0°; sin 15° = 0.2588, tan 15° = 0.2679 | 5 |
| λ | 2.5 × 10⁻⁶ × sin 15.0° = 6.470 × 10⁻⁷ m = 647 nm | 5 |
| Second order | sin θ₂ = 0.5176; θ₂ = 31.17° ≈ 31.2°; x₂ = 0.605 m | 6 |
| Highest order | d/λ = 3.864; m = 3; θ₃ = 50.94°; x₃ = 1.23 m | 6 |
| White light | 2 × 700 = 1400; 3 × 400 = 1200 (nm, in d sin θ terms) | 7 |
| A1 (original) | d = 3.333 × 10⁻⁶ m; sin θ₂ = 0.3192; θ₂ = 18.61° ≈ 18.6°; d/λ = 6.266 → 6; wrong d = 0.300 m | 11, 12 |
| A2 (original) | θ = tan⁻¹(0.350) = 19.29° ≈ 19.3°; d = 2.00 × 10⁻⁶ m; λ = 6.607 × 10⁻⁷ m ≈ 661 nm | 13, 14 |

## Numbers to verify (all values, repeated for Codex)

- 1/400e3 = 2.5e-6; atan(0.268) = 14.999°; 2.5e-6 × sin(15°) = 6.4705e-7.
- 2 × 6.4705e-7 / 2.5e-6 = 0.51764; asin = 31.174°; 3 × 6.4705e-7 / 2.5e-6 = 0.77646, asin = 50.937°; 2.5e-6 / 6.4705e-7 = 3.8637.
- tan(31.174°) = 0.6052; tan(50.937°) = 1.2318.
- 1/300e3 = 3.3333e-6; 2 × 532e-9 / 3.3333e-6 = 0.31920, asin = 18.615°; 3.3333e-6 / 532e-9 = 6.2657.
- atan(0.280/0.800) = 19.290°; 2.0e-6 × sin(19.290°) = 6.6070e-7.

## Memory aid check

- **"Lines per metre? Flip it for d. Many lines, tiny d, big angles."** Meaning: d = 1/N with N in lines per metre; a higher line density gives a smaller d and, from d sin θ = mλ, larger angles for the same λ and m. Assumptions checked: N must be per metre (convert from per mm first; scene 4); normal incidence; "big angles" holds while sin θ ≤ 1 (fewer orders fit, scene 6). It helps a new case: A1 and A2. Introduced after the explanation (3 to 6).
- **Considered, not used:** "d for distance" (dangerous: invites d = L, the very trap A2 tests).

## Narration length estimate

Revision 1 count (6 Nov; counted by script with the build parser rules): **6,155 characters**, 16 scenes. Characters per scene (1 to 16): 406, 589, 513, 401, 637, 480, 346, 304, 440, 92, 261, 441, 271, 389, 495, 75. At 13.3 characters per second the speech is about 463 s; add about 3 s for the prediction, 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 55 s more of the notes hold (about 84 s): **about 547 s**, inside the band and under the cap. Reserve trims: scene 7's overlap sentence; scene 9's second-order clause (open decision 3).

## Opening frame

v06's final frame (`phys-y12-m7-v06.md`, "Final frame"): the slide holder plate with a coded ruled slide at the left; two stacked intensity graphs on a shared angle axis: "two slits" broad bands with a red screen strip and a navy "centre?" bracket; below, a dashed sketch of sharp peaks at the same angles with dashed connectors, tag "same d: same places" and a "?"; heading "Why do two slits produce regularly spaced bright and dark bands?"; chip "Next: how does a grating let us measure wavelength?". Scene 1 turns the chip into the heading and zooms on the ruled slide.

## Final frame

The last explained frame (end of scene 15, before the key-notes board): paper background; the grating bench, small, at the centre: the laser module on the optical bench, the beam passing through a coded circular polarising filter (a grey disc mounted in the slide holder, with a navy straight line marking its transmission axis) and on to a coded light-sensor readout "I = ?"; a curved navy arrow round the filter showing rotation; above the beam a "?" with two small arrow options (along the beam, across the beam); a grey chip "sound: diffracts, interferes, longitudinal"; heading unchanged ("How does a grating let us measure wavelength?"); a chip reads "Next: why does rotating a polariser change transmitted intensity?". v08 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m7-v07` (route phys-y12-m7-v07). Suggested explainer folder `src/explainer/lessons/phys-y12-m7-v07` and build folder `docs/production/claude-pm/lessons/p-y12-m7-v07` (root to confirm).

In order (kebab-case; 16 scene headings, all `### N.`): hook, sharp-lines, grating-equation, line-density, measure-wavelength, orders, white-light, better-ruler, investigation, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 and key-notes (`hold`). Scene 1 is `explain` with a 3 s prediction countdown. `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: slit-count slider (`m7-diffraction`), pair-cancellation panel, grating bench, order fan, white-light fan, `AlignedAlgebra`, `PenArrow`, `Countdown`, `CameraStage`. Transitions: 1 to 2 clear change; 2 to 3 clear change; 3 to 4 clear change; 4 to 5 camera change (bench); 5 to 6 camera continue (zoom out to the fan); 6 to 7 clear change; 7 to 8 clear change; 8 to 9 clear change (bench); 9 to 10 clear change; attempts and feedback card shrink to the top; 14 to 15 clear change; 15 to 16 fade to the notes board.

Holds: hook (3 s countdown), memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 60 s). Review evidence paths: `learning_review` = `checks/p-y12-m7-v07-learning-review.md`, `science_check` = `checks/p-y12-m7-v07-physics-check.md`.

## Assets

Have (scaled uniformly only, never stretched):
- `y12p-laser-module-v1.png` (v02): 5, 9, 15. `y12p-slide-holder-v1.png` (v05): 1, 5, 9, 15. `phys-y11-optical-bench-v1.png`: 5, 9, 15. `phys-y11-screen-carrier-v1.png`: 5, 9. `phys-y11-metre-rule-v1.png`: 5. `y12p-pocket-spectroscope-v1.png` (v03): 8.
- Kit family `m7-diffraction` (coded): 2.

Need (new plates): none.

Coded: ruled slide, phase dials, graphs, fans, rays, spots, brackets, spectra, error bars, polarising filter and readout (final frame), working strips, chips, attempt cards and diagram, countdowns, key notes board.

## Codex asset brief

No new plates for v07. Codex confirms the reused bench plates sit at one scale (as v06) and that the coded polarising filter in the final frame fits the slide holder's window rectangle reported in v05; append to `status.md`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and the values in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the physics of every learner-visible claim: the pairing explanation of sharpness (author note b); same angles for the same d; d = 1/N; d versus L; θ from tan⁻¹(x/L); λ = d sin θ / m; sin θ ≤ 1; the white-light ordering and overlap; the precision argument; halving the two-sided angle.
3. Confirm "illustrative" and "each graph scaled to its own peak" tags on scene 2's graphs.
4. Confirm the memory aid's assumptions.
5. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
6. Confirm both attempt cards are original, carry every condition and show nothing answer-bearing.
7. Confirm the syllabus quote matches the ledger exactly and is labelled 2017.
8. Confirm no person, hand, face or body outline is drawn or requested.
9. Confirm no em dash (U+2014) and no U+2061, and Australian spelling.
10. Confirm the narration character count and per-scene counts by script with the build parser rules.
11. Log site notes 1 to 3 in `site-corrections-phys-y12.md`.

## YouTube metadata (draft)

Title: Diffraction Gratings: Measuring Wavelength with d sin θ = mλ | HSC Physics Module 7

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module7/lesson04.sa.html

A grating keeps the bright lines exactly where two slits put them but makes them razor sharp. See why thousands of slits cancel just off each bright line, how to turn lines per millimetre into d, how to find the angle from a screen, how to measure a laser's wavelength, how many orders you can see, why white light spreads into spectra, and how to do the investigation well. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 7: The Nature of Light.
Syllabus content (NSW Physics Stage 6, 2017):
"conduct investigations to analyse quantitatively the interference of light using double slit apparatus and diffraction gratings dsinθ=mλ (ACSPH116, ACSPH117, ACSPH140)"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: why two slits produce regularly spaced bright and dark bands. Next: why rotating a polariser changes transmitted intensity.

#HSCPhysics #Physics #DiffractionGrating #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v06; check that the cancelling-pair idea is followed at playback speed; that d and L stay separate; that the tan-then-sine sequence in scene 5 is clear one stage at a time; that the attempt cards give nothing away), then the physics check and the Codex error check.
- The phase dials cancelling in pairs, the slit-count slider, the d and L brackets and the crossed m = 4 ray carry the explanation; judge them at playback speed in the voiced preview.
