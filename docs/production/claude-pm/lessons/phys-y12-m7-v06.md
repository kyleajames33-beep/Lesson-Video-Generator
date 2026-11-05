# Year 12 Physics M7 V06: Double-slit interference. Why do two slits produce regularly spaced bright and dark bands? (design)

Status: Revision 1 (6 Nov 2026): first design. Needs independent learning review and science check before voicing.

Narration 6,268 characters, 16 scenes, about 555 s, counted by script with the build parser rules (see "Narration length estimate"). Opens on v05's final frame.

Scope: sixth video of Year 12 Physics Module 7 (The Nature of Light, Physics Stage 6, 2017 syllabus), inquiry question "What evidence supports the classical wave model of light and what predictions can be made using this model?". Templates as `phys-y12-m7-v01.md`; calculation layout as `math-a12-d10.md`. No pre-design pack exists; the pack work is done here. Site lesson read in full (6 Nov, read-only, through `work/brief168/module7-lesson03.sa.txt`, hash checked): orient and predict (two slits prediction, warm-up, intentions, vocabulary), Young's double slit (apparatus figure, path-difference conditions, x_n = nλL/d, Δx = λL/d, Stop and Check, MC), coherence and predictions (coherence, the equations box including d sin θ = nλ, white light, small-angle HSC tip, true/false), the worked calculation (632.8 nm, 0.25 mm, 2.4 m: 6.1 mm, 24.3 mm, 396 nm, white light), apply and consolidate (Activities 1 and 2), the two misconceptions (smaller d, dark fringes), "Analyse 7 marks", "Assess 6 marks" (white light, single reading, quoted d), independent practice (Q1, Q2, model answers), retrieve: `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson03.sa.html`, SHA256 `8a4753307dca9df0579d6dbb777f6731903c7c1f70874e623534cb16390916c1` (recomputed 6 Nov; matches the route). Route entry `phys-y12-m7-v06`, sections `youngs-double-slit`, `coherence-and-predictions`, `solve-fringe-calculations`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Explain path difference and phase, derive/use d sin theta=m lambda and small-angle screen relation with conditions. Stop before many-slit resolution." Next: "phys-y12-m7-v07: How does a grating let us measure wavelength?" Practical in the route: "Double-slit interference quantitative investigation".

Owner rules applied: as v01 (no people, hands, faces or body outlines; Young named in words only); painted plates for the laser, slide holder, bench and screen (reused from v02 and v05); wavefronts, path lines, triangles, fringe patterns and calculation strips coded; every number recalculated in Python; the syllabus symbol m for the order (the site uses n; author note a); a 3 s prediction; "Pause here to answer." with a 10 s countdown; brief feedback; original attempts; optional key notes; Australian spelling; no em dashes. Recalled, not re-taught: v05 (diffraction at a slit, Huygens), Year 11 superposition and phase, trigonometry in a right triangle.

Syllabus content (Physics Stage 6 (2017), Module 7 The Nature of Light; ledger id `P7-IQ2-02`), quoted from the ledger:

- `P7-IQ2-02`: "conduct investigations to analyse quantitatively the interference of light using double slit apparatus and diffraction gratings dsinθ=mλ (ACSPH116, ACSPH117, ACSPH140)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 59). This video covers the double-slit part; v07 covers gratings.

**Boundary:** starts on v05's final frame (two slits, overlapping spreading waves, evenly spaced bands with "?"). Teaches: the particle prediction (two bright strips) against the observed bands; superposition (in phase adds, half a cycle out cancels); path difference from the two slits to a point on the screen; bright where it is a whole number of wavelengths, dark where it is a half-odd number; light from both slits reaches the dark bands; coherence (same frequency, constant phase; laser or a single slit first; two lamps fail); derivation of d sin θ = mλ for a distant screen; the screen relation x = mλL/d and Δx = λL/d for small angles, with its conditions; what changes the spacing; the site's worked example (6.1 mm; then 396 nm from 3.8 mm); the investigation (measure across several fringes). Stops before grating sharpness and many-slit patterns (v07), white-light double-slit detail (one sentence only), thin films, the single-slit envelope.

## Decisions

- **Learner question (route wording kept).** "Why do two slits produce regularly spaced bright and dark bands?" The answer: the two slits act as two in-step sources (v05 diffraction plus coherence); at each point on the screen the waves have travelled different distances, so they arrive in step or out of step (3, 4); the path difference d sin θ grows steadily across the screen, so bright and dark alternate at equal spacing Δx = λL/d (5, 6).
- **Hook (site prediction box).** The prediction asks: "At the very centre of the screen, between the slits' straight-through paths, bright or dark?" (chips "bright", "dark"); answer bright (equal paths). The particle prediction (two strips) is shown first as a crossed ghost.
- **The dark band is the decisive evidence (site "Analyse 7 marks", misconception 2).** Narrated: light from both slits reaches every dark band; light plus light gives darkness only if waves cancel.
- **Derivation (route stop "derive").** Far screen, so the two paths are almost parallel at angle θ; the extra path is the side opposite θ in the right triangle with hypotenuse d: d sin θ. Conditions stated: screen distance L much larger than d (author note b).
- **Screen relation (route stop "small-angle screen relation with conditions").** tan θ = x/L; for small angles sin θ ≈ tan θ; x_m = mλL/d; Δx = λL/d, so the bands are evenly spaced (answering "regularly spaced"). Conditions on screen: L ≫ d, small angles (x ≪ L), coherent monochromatic light. The worked example checks the angle (0.15°).
- **Worked example (site numbers unchanged).** λ = 632.8 nm, d = 0.25 mm, L = 2.4 m: Δx = 6.1 mm. Then the site's reverse case: measured Δx = 3.8 mm, λ = 396 nm. The site's 4th-fringe part (24.3 mm) is not used (one stage fewer).
- **Investigation (route practical; site "Assess 6 marks").** Measure across ten spacings and divide; measure L with a tape; use the slide's quoted d with its uncertainty (or measure it); monochromatic laser (white light gives no single spacing); laser safety.
- **Symbols.** m for order (syllabus and HSC formula sheet form d sin θ = mλ); Δx for fringe spacing (the site's symbol; some texts use Δy); L slit-to-screen distance.
- **Memory aid (scene 10, new):** "Whole waves: bright. Half waves: dark." with the spacing line "Long wavelength, long screen distance, little gap: wide bands." See "Memory aid check".
- **Attempts (original).** A1: d = 0.30 mm, L = 1.8 m, λ = 532 nm: fringe spacing (3.2 mm) and the effect of doubling d (1.6 mm). A2: point P on the second dark band from the centre with 600 nm light: path difference (1.5λ = 900 nm) and why it is dark. Crossed: A1 "doubling d doubles the spacing" (site misconception 1); A2 "no light reaches P".
- **Handoff (route next).** Keep d, add thousands of slits: the bright bands stay put but become sharp lines; that is a grating. Next: "How does a grating let us measure wavelength?". See "Final frame".
- **Colour key:** waves from slit 1 teal, from slit 2 violet; crests solid, troughs dashed; path lengths orange; path difference rose; bright bands red (laser) on dark; angles navy; calculation strips as v01.
- **Site sources used:** `youngs-double-slit` (particles would give two patches; conditions; x_n; Δx), `coherence-and-predictions` (coherence; single slit or laser; predictions; small-angle tip), `solve-fringe-calculations` (worked numbers), misconceptions (smaller d; dark fringes), "Analyse 7 marks" (dark fringe as decisive), "Assess 6 marks" (method improvements), Q1. Not used: white-light fringes beyond one sentence, the water version of Q2, the 4th-fringe part.
- **Site notes (quoted from site lesson 3, read 6 Nov; for Codex to log in `site-corrections-phys-y12.md`):**
  1. `orient-and-predict` cross-lesson links and `retrieve-reflect-and-finish`: "589 nm light through slits 0.5 mm apart with a 1 m screen gives a fringe spacing of about 1.17 mm". 589 × 10⁻⁹ × 1 / 0.5 × 10⁻³ = 1.178 × 10⁻³ m, which rounds to 1.18 mm. Proposed fix: "about 1.18 mm".
  2. `clear-the-misconceptions` odd-one-out: "The central fringe (n = 0) is always the brightest" is offered as a correct statement. It is true for identical, equally illuminated slits, but not "always" (unequal slit widths or illumination, or a missing order, can change it). Low priority. Proposed fix: "For identical, equally lit slits, the central fringe is the brightest."
  3. `youngs-double-slit` vs `coherence-and-predictions`: the lesson uses n for order and x for screen distance, while the syllabus and HSC formula sheet write d sin θ = mλ, and the "Analyse 7 marks" answer switches to m and Δy. Not an error; proposed consistency fix: use m and one screen symbol throughout.
  Checked and correct: the path-difference conditions, Δx = λL/d, the coherence account, the worked example (6.07 mm, 24.3 mm, 396 nm), Q1 and Q2 model answers, the misconception corrections.
- **Cause chain taught, in order:** (1) each slit diffracts light, so the two spread and overlap (1, recalled from v05); (2) superposition: in step adds, half a cycle out cancels (2); (3) the waves leave the slits in step (coherence) (4); (4) at each point their paths differ, so they arrive in or out of step (3); (5) the path difference is d sin θ (5); (6) on a distant screen it grows in proportion to x, so the bands are evenly spaced, Δx = λL/d (6).
- **Entry knowledge (route):** v05; Year 11 superposition, phase, wavelength; right-triangle trigonometry.
- **Learner-visible vocabulary:** interference (waves overlapping and adding or cancelling, 2); in phase (crests arriving together, 2); path difference (how much further one wave travels than the other, 3); coherent (same frequency and a steady phase relationship, 4); order m (the count of bright bands from the centre, 5); fringe spacing Δx (distance between neighbouring bright bands, 6).
- **Legacy logic ported:** none. Kit family `m7-double-slit` (secondary wavefronts to fringe intensity; loss of coherence) supports scenes 1, 3 and 4; its limit (illustrative wavefront geometry and a separate intensity strip, not a common scale) is respected and stated on screen ("not to scale").
- **New explainer motion:** **two-source stage** (teal and violet circular wavefronts from two slits, crests solid and troughs dashed, overlapping; a probe point P on the screen with its two path lines; a cycle readout at P showing the two waves adding or cancelling); **path-difference meter** (P slides along the screen; a rose bar shows the path difference in wavelengths; bands light as it passes 0, 1, 2 and darken at ½, 1½); **coherence toggle** (laser versus two separate lamps; with the lamps, the pattern flickers and washes out); **derivation triangle** (the two near-parallel rays, the perpendicular, the extra-path side d sin θ; then the big triangle with L and x); `AlignedAlgebra`; `Countdown`; `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the stage centre-left; derivation or working strips on the right; everything above the bottom 12%.
- **Author notes (not learner copy):**
  (a) Order symbol: the syllabus writes d sin θ = mλ; the site uses n. The design uses m; the narration says "m, the order".
  (b) Derivation: for a screen at distance L ≫ d the rays to P are nearly parallel, and the path difference S₂P − S₁P ≈ d sin θ. Small angles: sin θ ≈ tan θ = x/L (in radians θ), so x_m = mλL/d and Δx = λL/d. For the worked example sin θ₁ = 632.8 × 10⁻⁹ / 0.25 × 10⁻³ = 2.53 × 10⁻³, θ₁ = 0.145°.
  (c) Dark-band numbering: first dark band either side of centre: path difference ½λ; second: 1½λ (A2).
  (d) The fringe brightness envelope (single-slit) is not shown; bands are drawn of equal height near the centre, labelled schematic.
  (e) Pronunciations: "delta x", "theta", "m, the order".
- **Open decisions for root:**
  - **1. Plates.** No new plates. Reused: `y12p-laser-module-v1.png` (v02), `y12p-slide-holder-v1.png` (v05), `phys-y11-optical-bench-v1.png`, `phys-y11-screen-carrier-v1.png`, `phys-y11-filament-lamp-v1.png` (two copies in scene 4's incoherent case, subject to the alpha check in v03), `phys-y11-metre-rule-v1.png` (scene 9).
  - **2. Δx versus Δy** on screen (author note a); the design uses Δx as the site does.
  - **3. Optional beats** the learning review may cut: scene 8's reverse calculation (396 nm); scene 9's quoted-d sentence.
Main question: *Two narrow slits, one laser, and the screen shows a neat row of bright and dark bands instead of two bright strips. Why do two slits produce regularly spaced bright and dark bands?*
Entry knowledge: v05's diffraction and wavelets; superposition and phase.
Stops after: path difference and phase, coherence, d sin θ = mλ derived, x = mλL/d and Δx = λL/d with conditions, the worked example, the investigation. No many-slit sharpness.
Handoff: v07, how a grating lets us measure wavelength.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings.

### 1. hook (light plus light gives darkness)
> If light were a stream of particles, two slits would give two bright strips on the **screen**. Instead, you get a whole row of bright and dark bands, evenly **spaced**. Light from two slits, added together, makes some places dark. Make your **prediction**. Right at the centre of the screen, halfway between the two slits, is it bright or dark? It's **bright**. Let's see why.

Visual: opens on v05's final frame (see "Opening frame"); the chip "Next: why do two slits produce regularly spaced bright and dark bands?" becomes the heading. On "screen" a ghost overlay on the screen: two bright strips straight behind the slits (grey, tag "particle prediction"). On "spaced" the ghost fades and is crossed; the coded band pattern brightens; tag "observed". On "makes some places dark" one dark band highlights. On "prediction" a 3 s `Countdown` beside two chips: "bright" and "dark". On "bright" the first chip ticks and the central band pulses.

### 2. adding waves
> Remember superposition. When two waves meet, they add. If they arrive in phase, crest with crest, they build a bigger wave, and that's **bright**. If they arrive exactly half a cycle out, crest with trough, they cancel, and that's **dark**. That adding and cancelling is called interference.

Visual: board change: two small coded waves (teal and violet) on a line. On "crest with crest" they align; their sum (ink) appears with twice the amplitude; on "bright" a red bright patch beside it, tag "constructive". On "crest with trough" the violet wave shifts half a cycle; on "dark" the sum flattens to zero; a dark patch, tag "destructive". On "interference" a chip "interference: waves adding or cancelling".

### 3. it depends on the path
> Pick a point on the screen. Light reaches it from both **slits**, but along two different paths. The waves leave the slits in step, so what matters is how much further one has travelled. That's the path **difference**. At the centre, both paths are equal, so the waves arrive in step. **Bright**. Move along until one path is a whole wavelength longer. The waves are back in step, so it's bright **again**. In between, where one path is half a wavelength longer, crest meets trough, and it's **dark**. So bright bands sit where the path difference is a whole number of wavelengths, and dark bands where it's a half more than a whole number. Light from both slits does reach the dark bands. It just **cancels**.

Visual: board change to the two-source stage (tag "not to scale"): teal and violet wavefronts from the two slits overlapping; a probe point P on the screen. On "slits" two orange path lines from the slits to P. On "difference" a rose bar "path difference" between the two lengths. On "Bright" P sits at the centre: the rose bar reads "0"; P's cycle readout shows two waves in step; the central band lights. On "again" P slides up: the bar grows to "1λ"; the readout in step; the next band lights. On "dark" P slides back to "½λ": crest on trough; the band between darkens. On "a whole number of wavelengths" a chip "bright: path difference = mλ (m = 0, 1, 2, …)"; on "a half more than a whole number" a chip "dark: path difference = (m + ½)λ". On "cancels" both path lines to a dark band glow; a crossed chip "dark = no light arrives".

### 4. why the sources must keep in step
> This only works if the light from the two slits stays in step. The sources must be coherent, the same frequency, with a steady phase relationship. A laser does that. Thomas Young, who first did this experiment, made his own coherent light by sending it through one single slit first, so both slits were fed by the same wavefront. Two separate lamps won't work. Their phases jump around at random, so the bands shift billions of times a second and wash out into an even **glow**.

Visual: board change to the coherence toggle: left panel, the laser plate feeding both slits; wavefronts in step; a steady band pattern; tag "coherent". On "same frequency, with a steady phase relationship" a chip "coherent: same f, constant phase difference". On "one single slit first" a coded single slit appears before the double slit (grey, tag "Young's arrangement"), the curved front reaching both slits together. On "Two separate lamps" the right panel: two filament lamp plates (reused) each lighting one slit; the pattern flickers rapidly; on "glow" it averages to an even glow; tag "incoherent: no stable pattern".

### 5. finding the path difference
> Now let's find that path difference. The screen is far away compared with the gap between the slits, so the two paths to a point are almost parallel, at an angle theta to the straight-ahead **direction**. Draw a line across, at right angles to the paths. The extra distance is the short side of a right-angled triangle, whose long side is the slit separation, **d**. So the path difference is d sine **theta**. Bright bands appear where d sine theta equals m lambda, with m, the order, counting the bands out from the **centre**.

Visual: board change to the derivation triangle: a large close-up of the two slits (separation d) with two nearly parallel orange rays leaving at angle θ towards a distant point (off board, tag "screen far away"). On "direction" a navy dashed straight-ahead line and the angle θ marked. On "Draw a line across" a dashed perpendicular from slit 1 to ray 2. On "d" the right triangle highlights: hypotenuse "d", the short side rose "extra path"; the angle θ at the slits marked equal to the ray angle. On "theta" the short side labels "d sin θ"; the equation strip writes "path difference = d sin θ". On "centre" the boxed result "d sin θ = mλ (bright)" with tags "m = 0: centre; m = 1, 2, …: outwards"; a grey tag "syllabus form".

### 6. why the bands are evenly spaced
> To find where they land, use the screen. A band a distance x from the centre, on a screen a distance L away, has tan theta equal to x over L. For small angles, sine theta and tan theta are almost **equal**. Put that into d sine theta equals m lambda, and the m-th bright band is at x equals m lambda L over **d**. Each step in m moves the band by the same amount, lambda L over d. So the spacing between bands is constant, and that's why they're regularly **spaced**. This works when the screen is much further away than the slit separation, and the angles are **small**.

Visual: camera pulls back: the slits at the left, a coded screen at the right at distance "L", a bright band at height "x" from the centre; the big triangle drawn (L along the axis, x up the screen, θ at the slits). On "tan theta equal to x over L" the strip writes "tan θ = x / L". On "equal" a small chip "small θ: sin θ ≈ tan θ" (with a tiny table: θ = 0.15°: sin θ = 0.00253, tan θ = 0.00253). On "d" the strip writes "d (x / L) = mλ  →  x = mλL / d". On "spaced" bands at m = 1, 2, 3 light with equal brackets "Δx" between them; the strip writes "Δx = λL / d" (boxed). On "small" a conditions chip "L ≫ d; small angles (x ≪ L); coherent, single wavelength".

### 7. what changes the spacing
> So what spreads the bands out? A longer wavelength, like red instead of blue. A screen further away. And a smaller gap between the slits. That last one surprises people. Move the slits closer together, and the bands move further **apart**. Double the slit separation, and the spacing **halves**.

Visual: board change: the band pattern with Δx bracketed and "Δx = λL / d" above. On "A longer wavelength" the pattern turns from blue to red and widens; on "A screen further away" L lengthens and the pattern widens; on "smaller gap between the slits" d shrinks and the pattern widens. On "apart" a crossed chip "slits closer → bands closer". On "halves" d doubles and the spacing halves; tag "Δx ∝ 1/d".

### 8. a worked example
> Here's one. Red laser light, six hundred and thirty-two point eight nanometres, passes through two slits nought point two five millimetres apart, onto a screen two point four metres away. Delta x equals lambda L over d. That's six hundred and thirty-two point eight times ten to the minus nine, times two point four, over nought point two five times ten to the minus three, which is about **six point one millimetres**. The first band's angle is only about nought point one five degrees, so the small-angle step is fine. You can run it **backwards**. Measure a spacing of three point eight millimetres with the same slits and screen, and the wavelength is about **three hundred and ninety-six nanometres**, violet light.

Visual: board change to the working layout. Task strip: "Find the fringe spacing." Equation strip: "Δx = λL / d". Givens grouped: "λ = 632.8 nm = 632.8 × 10⁻⁹ m", "d = 0.25 mm = 0.25 × 10⁻³ m", "L = 2.4 m". On "six point one millimetres" stage 1: "Δx = (632.8 × 10⁻⁹ × 2.4) / (0.25 × 10⁻³) = 6.1 × 10⁻³ m = 6.1 mm" (orange). On "nought point one five degrees" a check chip "sin θ₁ = λ/d = 2.5 × 10⁻³ → θ₁ ≈ 0.15°: small". On "backwards" the task strip changes to "Find λ from a measured spacing"; stage 1 stays faint; a new given "Δx = 3.8 mm". On "three hundred and ninety-six nanometres" stage 2: "λ = Δx d / L = (3.8 × 10⁻³ × 0.25 × 10⁻³) / 2.4 = 3.96 × 10⁻⁷ m = 396 nm" (orange), tag "violet".

### 9. measuring it well
> To measure a wavelength in the investigation, don't measure one spacing. The bands are only millimetres apart, so a small misreading is a big fraction. Measure across ten spacings and divide by ten. Measure L with a tape, and use the slide's slit separation, remembering it has its own uncertainty. And use a laser, because white light gives every colour its own spacing, and the bands **blur**. Never look along the beam.

Visual: board change: the bench (laser, slide holder with a coded double slit, screen carrier) with the metre rule plate (`phys-y11-metre-rule-v1.png`, reused) along the screen. On "don't measure one spacing" a single Δx bracket with a large "± 0.5 mm" tag. On "ten spacings" a bracket across ten spacings, "10Δx", the "± 0.5 mm" tag now small by comparison; working "Δx = (10Δx) / 10". On "Measure L with a tape" a bracket "L" along the bench. On "slit separation" a tag "d (quoted ± …)". On "blur" a coded white-light pattern: a white centre and coloured, overlapping bands, tag "white light: no single spacing". On "Never look along the beam" a red chip.

### 10. a way to remember
> Here's a way to remember it. Whole waves, bright. Half waves, dark. And for wide bands, long wavelength, long screen distance, little **gap**.

Visual: board clears to the path-difference bar from scene 3 and the formula "Δx = λL / d". On "Whole waves, bright" the bar at 0, 1λ, 2λ lights bands; on "Half waves, dark" ½λ, 1½λ darken; on "gap" λ and L in the formula enlarge and d shrinks; the handwritten line writes above: "Whole waves: bright. Half waves: dark. Long λ, long L, little d: wide bands." Hold about 2 seconds.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. Green light of wavelength five hundred and thirty-two nanometres passes through two slits nought point three zero millimetres apart, onto a screen one point eight metres away. Calculate the fringe spacing. Then state the new spacing if the slit separation is doubled. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "Light of wavelength 532 nm passes through two narrow slits 0.30 mm apart. Interference fringes are observed on a screen 1.8 m from the slits. (a) Calculate the fringe spacing. (b) State the fringe spacing if the slit separation is doubled, with all else unchanged. (3 marks)". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 12. feedback 1 (brief)
> Delta x equals lambda L over d, five hundred and thirty-two times ten to the minus nine, times one point eight, over nought point three zero times ten to the minus three, about **three point two millimetres**. Doubling d halves the spacing, to about **one point six millimetres**. The classic slip is thinking wider-apart slits give wider-apart bands. It's the **opposite**.

Visual: card shrinks to the top; "532 nm", "0.30 mm" and "1.8 m" underline. On "three point two millimetres" "(a) Δx = (532 × 10⁻⁹ × 1.8) / (0.30 × 10⁻³) = 3.2 × 10⁻³ m = 3.2 mm". On "one point six millimetres" "(b) Δx ∝ 1/d → 1.6 mm". On "opposite" a chip "d doubled → Δx doubled (6.4 mm)" fades in and is crossed (caption "Δx = λL/d: bigger d, smaller Δx"). Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. In a double-slit experiment with six hundred nanometre light, point P on the screen is the second dark band from the centre. Find the path difference to P, and explain why P is dark. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "In a double-slit experiment using light of wavelength 600 nm, point P is at the centre of the second dark fringe from the central bright fringe. (a) Determine the path difference from the two slits to P. (b) Explain why P is dark. (3 marks)". A small coded diagram: two slits, a screen with the central bright band and P marked on the second dark band. The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 2 (brief)
> The first dark band has a path difference of half a wavelength, and the second has one and a half. One and a half times six hundred nanometres is **nine hundred nanometres**. The waves from the two slits arrive at P exactly half a cycle out of step, crest on trough, so they **cancel**. The slip is saying no light reaches P. Light from both slits arrives. It **interferes** destructively.

Visual: card shrinks to the top; "second dark fringe" underlines. On "nine hundred nanometres" "(a) dark: (m + ½)λ; second dark band: 1½λ = 1.5 × 600 nm = 900 nm (9.0 × 10⁻⁷ m)". On "cancel" "(b) waves arrive half a cycle out of phase → destructive interference". On "interferes" a chip "no light reaches P" fades in and is crossed (caption "both waves arrive and cancel"). Hold about 1 second.

### 15. handoff
> So two slits make regularly spaced bands because the path difference, d sine theta, grows steadily across the screen, taking the waves in and out of step at equal steps. But look at these bands. They're broad and soft, so their centres are hard to pin **down**. Keep the same spacing, d, and add thousands more slits. The bright bands stay in exactly the same places, but they turn into thin, sharp **lines**, with darkness in between. That's a diffraction grating. How does a grating let us measure wavelength?

Visual: board clears (camera change) to two stacked intensity graphs on the same angle axis: top, "two slits" with broad, evenly spaced bands (schematic; cos² shape); a red screen strip above it. On "hard to pin down" a navy bracket across one broad band, tag "centre?". On "thousands more slits" a coded slide in the slide holder with many closely ruled lines appears at the left; on "lines" the bottom graph draws as a dashed sketch: sharp narrow peaks at exactly the same angles as the top graph's band centres, with vertical dashed connectors between the two graphs, a "?" beside the sharp peaks; tag "same d: same places". On "diffraction grating" a chip "Next: how does a grating let us measure wavelength?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 16. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Coherent light (same f, constant phase) through two slits: each slit diffracts and the waves overlap and interfere.
2. Bright: path difference = mλ. Dark: path difference = (m + ½)λ. Light from both slits reaches the dark bands and cancels.
3. Distant screen: path difference = d sin θ, so bright bands at d sin θ = mλ.
4. Small angles (L ≫ d): x = mλL/d and fringe spacing Δx = λL/d: evenly spaced bands.
5. Longer λ, larger L or smaller d → wider spacing.
6. Measure across many spacings and divide; use a monochromatic source.

Memory aid (large, on the notes screen): *Whole waves: bright. Half waves: dark. Long λ, long L, little d: wide bands.*

## Teaching checks

- **Does it explain causes?** Why bands rather than two strips (1 to 3); why bright and dark alternate (3); why coherence is needed (4); why the path difference is d sin θ (5); why the spacing is constant (6); why d works inversely (7).
- **Misconceptions addressed:** particles would give two strips (1); dark means no light arrives (3, crossed in 14); two lamps can make fringes (4); closer slits give closer bands (7, crossed in 12); one fringe reading is enough (9).
- **One idea at a time:** superposition (2), path difference (3), coherence (4), derivation (5), screen relation (6), spacing factors (7), example (8), method (9).
- **Video makes it easier:** P sliding along the screen with the path-difference bar and in-step or out-of-step readout (3); the flickering lamp pattern washing out (4); the triangle side labelled d sin θ (5); equal Δx brackets (6); the ten-spacing bracket shrinking the error tag (9).
- **Response opportunity:** one prediction (3 s) and two unseen tasks, 10 s each; nothing answer-bearing. One crossed mistake each; feedback about 20 s and 25 s.
- **Avoided double teaching:** v05's diffraction and wavelets recalled in the opening; Year 11 superposition recalled.
- **Syllabus coverage:** `P7-IQ2-02` quantitative interference with double-slit apparatus, d sin θ = mλ (3 to 9). Gratings in v07.
- **Out of scope by design:** grating sharpness and orders beyond the handoff (v07), single-slit envelope, thin films, interference in water.

## Practice questions and model answers

**Attempt 1 (scene 11; original wording, 3 marks).** "Light of wavelength 532 nm passes through two narrow slits 0.30 mm apart. Interference fringes are observed on a screen 1.8 m from the slits. (a) Calculate the fringe spacing. (b) State the fringe spacing if the slit separation is doubled, with all else unchanged."
Model answer: (a) Δx = λL/d = (532 × 10⁻⁹ × 1.8)/(0.30 × 10⁻³) = 3.2 × 10⁻³ m = 3.2 mm (2 marks). (b) Δx ∝ 1/d, so doubling d halves the spacing: 1.6 mm (1 mark). Classic mistake (crossed): "doubling d doubles the spacing (6.4 mm)".

**Attempt 2 (scene 13; original wording, 3 marks).** "In a double-slit experiment using light of wavelength 600 nm, point P is at the centre of the second dark fringe from the central bright fringe. (a) Determine the path difference from the two slits to P. (b) Explain why P is dark."
Model answer: (a) Dark fringes occur where the path difference is (m + ½)λ; the second dark fringe has m = 1, so the path difference is 1.5λ = 1.5 × 600 nm = 900 nm = 9.0 × 10⁻⁷ m (2 marks). (b) Waves from the two slits arrive at P half a cycle out of phase (crest meets trough), so they interfere destructively and cancel (1 mark). Classic mistake (crossed): "no light reaches P".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Worked example (site) | Δx = 632.8 × 10⁻⁹ × 2.4 / 0.25 × 10⁻³ = 6.075 × 10⁻³ ≈ 6.1 mm | 8 |
| Small-angle check | sin θ₁ = 632.8 × 10⁻⁹ / 0.25 × 10⁻³ = 2.531 × 10⁻³; θ₁ = 0.145° ≈ 0.15° | 6, 8 |
| Reverse (site) | λ = 3.8 × 10⁻³ × 0.25 × 10⁻³ / 2.4 = 3.958 × 10⁻⁷ ≈ 396 nm | 8 |
| A1 (original) | Δx = 532 × 10⁻⁹ × 1.8 / 0.30 × 10⁻³ = 3.192 × 10⁻³ ≈ 3.2 mm; doubled d: 1.596 ≈ 1.6 mm; wrong 6.4 mm | 11, 12 |
| A2 (original) | 1.5 × 600 nm = 900 nm = 9.0 × 10⁻⁷ m | 13, 14 |
| Reading error | ± 0.5 mm on a 6 mm spacing (illustrative) | 9 |

## Numbers to verify (all values, repeated for Codex)

- 632.8e-9 × 2.4 / 0.25e-3 = 6.0749e-3; asin(2.5312e-3) = 0.14503°.
- 3.8e-3 × 0.25e-3 / 2.4 = 3.9583e-7.
- 532e-9 × 1.8 / 0.30e-3 = 3.192e-3; / 0.60e-3 = 1.596e-3; 2 × 3.192 = 6.384 ≈ 6.4 mm.
- 1.5 × 600 = 900.

## Memory aid check

- **"Whole waves: bright. Half waves: dark. Long λ, long L, little d: wide bands."** Meaning: a path difference of a whole number of wavelengths gives a bright band, a half-odd number gives a dark band; Δx = λL/d grows with λ and L and shrinks with d. Assumptions checked: coherent sources in phase at the slits (scene 4); the spacing line uses the small-angle relation (scene 6 conditions); "whole waves" includes zero (the centre). It helps a new case: A1 (b) and A2. Introduced after the explanation (2 to 7).
- **Considered, not used:** "Dark is where light meets light" (memorable but unclear without the cancellation step).

## Narration length estimate

Revision 1 count (6 Nov; counted by script with the build parser rules): **6,268 characters**, 16 scenes. Characters per scene (1 to 16): 360, 283, 686, 474, 513, 555, 287, 708, 418, 138, 300, 362, 214, 377, 503, 75. At 13.3 characters per second the speech is about 471 s; add about 3 s for the prediction, 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 55 s more of the notes hold (about 84 s): **about 555 s**, inside the band and under the cap. Reserve trims: scene 8's reverse calculation; scene 9's slit-separation sentence (open decision 3).

## Opening frame

v05's final frame (`phys-y12-m7-v05.md`, "Final frame"): a coded top view of straight teal wavefronts arriving at a barrier with two narrow slits; semicircular wavefronts spreading from each slit and overlapping; a coded screen at the right with evenly spaced bright and dark bands (schematic) and a "?"; heading "Why does light spread after passing an edge or narrow opening?"; chip "Next: why do two slits produce regularly spaced bright and dark bands?". Scene 1 turns the chip into the heading and adds the particle-prediction ghost.

## Final frame

The last explained frame (end of scene 15, before the key-notes board): paper background; at the left the slide holder plate with a coded slide of many closely ruled lines; at the centre and right two stacked intensity graphs on a shared horizontal angle axis: top, "two slits", broad, soft, evenly spaced bands (schematic) with a red screen strip above it and a navy bracket "centre?" across one band; bottom, a dashed sketch of sharp, narrow peaks at exactly the same angles as the top band centres, vertical dashed connectors between the two graphs, tag "same d: same places" and a "?"; heading unchanged ("Why do two slits produce regularly spaced bright and dark bands?"); a chip reads "Next: how does a grating let us measure wavelength?". v07 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m7-v06` (route phys-y12-m7-v06). Suggested explainer folder `src/explainer/lessons/phys-y12-m7-v06` and build folder `docs/production/claude-pm/lessons/p-y12-m7-v06` (root to confirm).

In order (kebab-case; 16 scene headings, all `### N.`): hook, superposition, path-difference, coherence, derive-dsin, screen-relation, spacing-factors, worked-example, measuring-well, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 and key-notes (`hold`). Scene 1 is `explain` with a 3 s prediction countdown. `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: two-source stage (`m7-double-slit`), path-difference meter, coherence toggle, derivation triangle, `AlignedAlgebra`, `PenArrow`, `Countdown`, `CameraStage`. Transitions: 1 to 2 clear change; 2 to 3 clear change; 3 to 4 clear change; 4 to 5 clear change; 5 to 6 camera continue (pull back); 6 to 7 clear change; 7 to 8 clear change; 8 to 9 clear change (bench); 9 to 10 clear change; attempts and feedback card shrink to the top; 14 to 15 clear change; 15 to 16 fade to the notes board.

Holds: hook (3 s countdown), memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 60 s). Review evidence paths: `learning_review` = `checks/p-y12-m7-v06-learning-review.md`, `science_check` = `checks/p-y12-m7-v06-physics-check.md`.

## Assets

Have (scaled uniformly only, never stretched):
- `y12p-laser-module-v1.png` (v02): 4, 9. `y12p-slide-holder-v1.png` (v05): 9, 15. `phys-y11-optical-bench-v1.png`: 9. `phys-y11-screen-carrier-v1.png`: 9. `phys-y11-filament-lamp-v1.png`: 4 (two copies). `phys-y11-metre-rule-v1.png`: 9.
- Kit family `m7-double-slit` (coded): 1, 3, 4, 15.

Need (new plates): none.

Coded: wavefronts, path lines, bars, readouts, triangles, screens and patterns, graphs, working strips, chips, attempt cards and diagram, countdowns, key notes board.

## Codex asset brief

No new plates for v06. Codex confirms the reused plates listed under "Assets" sit together on the bench at one scale (laser, slide holder and screen carrier bases on `phys-y11-optical-bench-v1.png`) and reports the scale factors used; append to `status.md`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and the values in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the physics of every learner-visible claim: superposition and phase; bright and dark conditions; light reaches dark bands; coherence and Young's single slit; the derivation of d sin θ and its far-screen condition; the small-angle screen relation and conditions; the spacing factors; the white-light statement.
3. Confirm the "not to scale" and "schematic" labels on the wavefront and pattern visuals.
4. Confirm the memory aid's assumptions.
5. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
6. Confirm both attempt cards are original, carry every condition and show nothing answer-bearing.
7. Confirm the syllabus quote matches the ledger exactly and is labelled 2017.
8. Confirm no person, hand, face or body outline is drawn or requested.
9. Confirm no em dash (U+2014) and no U+2061, and Australian spelling.
10. Confirm the narration character count and per-scene counts by script with the build parser rules.
11. Log site notes 1 and 2 in `site-corrections-phys-y12.md` (note 3 is a consistency suggestion).

## YouTube metadata (draft)

Title: Young's Double Slit: Why Two Slits Make Evenly Spaced Bands | HSC Physics Module 7

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module7/lesson03.sa.html

Light through two slits makes a whole row of bright and dark bands, and light added to light makes darkness. See how path difference decides bright or dark, why the sources must be coherent, how d sin θ = mλ comes from a simple triangle, why the bands are evenly spaced (Δx = λL/d) and how to measure a wavelength well. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 7: The Nature of Light.
Syllabus content (NSW Physics Stage 6, 2017):
"conduct investigations to analyse quantitatively the interference of light using double slit apparatus and diffraction gratings dsinθ=mλ (ACSPH116, ACSPH117, ACSPH140)"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: why light spreads after passing an edge or narrow opening. Next: how a grating lets us measure wavelength.

#HSCPhysics #Physics #Interference #DoubleSlit #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v05; check that the sliding P with its path-difference bar is followed at playback speed; that the derivation triangle is clear in two steps; that the small-angle condition is understood, not just stated; that the attempt cards give nothing away), then the physics check and the Codex error check.
- The path-difference meter, the washing-out lamp pattern, the d sin θ triangle and the equal Δx brackets carry the explanation; judge them at playback speed in the voiced preview.
