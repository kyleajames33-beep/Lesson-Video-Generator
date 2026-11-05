# Year 12 Physics M7 V04: Reading stellar spectra. What can stellar spectra tell us beyond chemical identity? (design)

Status: Revision 1 (6 Nov 2026): first design. Needs independent learning review and science check before voicing.

Narration 6,084 characters, 15 scenes, about 541 s, counted by script with the build parser rules (see "Narration length estimate"). Opens on v03's final frame.

Scope: fourth video of Year 12 Physics Module 7 (The Nature of Light, Physics Stage 6, 2017 syllabus), inquiry question "What is light?". Templates as `phys-y12-m7-v01.md`; calculation layout as `math-a12-d10.md`. No pre-design pack exists; the pack work is done here. Site lesson read in full (6 Nov, read-only, through `work/brief168/module7-lesson09.sa.txt`, hash checked; see `phys-y12-m7-v03.md` for the section list): `C:/Users/kygs/hscscience/subjects/physics/year12/module7/lesson09.sa.html`, SHA256 `3f660175d3288223d868598098ca915dd30e1e6b34ab652a3ab4c5d60492624b` (recomputed 6 Nov; matches the route). Route entry `phys-y12-m7-v04`, sections `read-doppler-shifts`, `infer-from-starlight`, `use-line-width-as-evidence`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Separate line position, width and intensity evidence for composition, temperature, translational velocity, rotation and density. Stop before stellar evolution." Next: "phys-y12-m7-v05: Why does light spread after passing an edge or narrow opening?" Entry knowledge asks that each newly introduced equation is derived before use: the Doppler relation is derived in scene 4.

Owner rules applied: as v01 (no people, hands, faces or body outlines; no astronomer or telescope operator drawn); stars as painted plates (the Sun plate reused; two new star plates); spectra, line profiles, the Doppler construction and calculation strips coded; line positions at NIST wavelengths (hydrogen 656.3 nm; calcium II K 393.4 nm, the site uses 393.3 nm); every number recalculated in Python; a 3 s prediction; "Pause here to answer." with a 10 s countdown; brief feedback; original attempts; optional key notes; Australian spelling; no em dashes. Recalled, not re-taught: v03 (continuous, emission and absorption spectra; energy levels; fingerprints), v01 (c = fλ), Year 11 wave period T = 1/f.

Syllabus content (Physics Stage 6 (2017), Module 7 The Nature of Light; ledger id `P7-IQ1-06`), quoted from the ledger:

- `P7-IQ1-06`: "investigate how the spectra of stars can provide information on:" "surface temperature", "rotational and translational velocity", "density", "chemical composition"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 59)

**Boundary:** starts on v03's final frame (laboratory hydrogen, star A shifted, star B broadened). Teaches: the three readable features (position, width, strength, plus the continuum's shape); composition from line positions (recalled); temperature from the continuum's colour and from which lines are strong (hydrogen strongest near 10 000 K; molecules in cool stars; ionised helium in hot stars; O B A F G K M); translational (radial) velocity from a uniform shift, with Δλ/λ = v/c derived for v much less than c; the site's calcium II example; rotation from Doppler broadening (one edge approaching, one receding); density from pressure broadening (dwarf versus giant at the same temperature); telling the two broadenings apart by line shape. Stops before Wien's law numbers (v09), Hubble's law and cosmology (Module 8), binary-star masses and exoplanets (site extension), stellar evolution.

## Decisions

- **Learner question (route wording kept).** "What can stellar spectra tell us beyond chemical identity?" The answer: temperature (3), translational velocity (4, 5), rotation (6) and density (7), each read from a different feature (8).
- **Hook.** From v03's two stars. Prediction: "A star moving away from us: do its lines shift to longer or shorter wavelengths?" (chips "longer", "shorter"); answer "longer: a redshift".
- **Three features (route stop "separate line position, width and intensity").** A persistent three-column board ("where: position", "how wide: width", "how strong: strength and colour") fills as each property is taught, then becomes scene 8's summary and the memory aid.
- **Temperature (site `infer-from-starlight` and "Analyse 7 marks").** Two methods, as the site's model answer: the continuum's colour (qualitative; λmax = b/T is v09's and is not stated here) and line strengths (ionisation and excitation state). The site's caution "weak hydrogen lines mean little hydrogen" is narrated as a trap.
- **Doppler derivation (route entry knowledge "derive each newly introduced equation").** Scene 4 derives Δλ = vT and T = λ/c, so Δλ/λ = v/c, with "v much less than c" stated on screen and in narration. Positive Δλ: receding (redshift). Only the line-of-sight component is measured (one sentence).
- **Worked example (site's Ca II example, numbers unchanged).** 393.3 nm observed at 394.2 nm: Δλ = 0.9 nm; v = 6.9 × 10⁵ m s⁻¹ receding. The site writes "6.87 × 10⁵ m/s ≈ 687 km/s" from a one-significant-figure Δλ; the design shows 6.9 × 10⁵ m s⁻¹ (author note b). The narration notes every line shifts by the same fraction.
- **Rotation (syllabus "rotational velocity"; not taught on the site; site note 1).** Doppler broadening from opposite edges: one edge blueshifted, the other redshifted, so each line spreads; faster spin gives broader lines. Number: an equatorial speed of 100 km s⁻¹ spreads 656.3 nm by about ±0.22 nm (illustrative). Only the part of the spin along the line of sight shows (one clause).
- **Density (site `use-line-width-as-evidence`).** Pressure broadening: dwarf (dense, frequent collisions, broad lines) versus giant (thin, narrow lines) at the same temperature; the site's cause chain used.
- **Separating two broadenings (route stop).** Line shape: rotation gives a rounded, dish-shaped dip with no long wings, the same fractional width for every line; collisions give a narrow core with long faint wings. Narrated in two sentences (author note d).
- **Memory aid (scene 9, new):** "Where, how wide, how strong. Where: what and how fast. Width: spin or squeeze. Strength and colour: how hot." See "Memory aid check".
- **Attempts (original).** A1: Hα 656.3 nm observed at 655.6 nm: radial velocity and direction (3.2 × 10⁵ m s⁻¹, towards). A2: two stars with the same temperature and composition, star B's lines broader: two possible causes and what each reveals. Crossed: A1 "v = c × λ_obs / λ₀" (the site's named common error); A2 "star B is hotter".
- **Handoff (route next).** Every clue was read after a spectroscope spread the light; the light first squeezes through a narrow slit and spreads out. Next: "Why does light spread after passing an edge or narrow opening?". See "Final frame".
- **Colour key:** spectra on the 380 to 750 nm axis as v03; rest positions grey dashed; shifts and Δλ rose; velocities navy arrows; line profiles (intensity against wavelength) ink; approaching edge blue tint, receding edge red tint.
- **Site sources used:** `read-doppler-shifts` (sign convention, Δλ/λ₀ = v/c, Figure 2), `solve-a-doppler-worked-example` (Ca II steps 1 and 2; binary and exoplanet parts not used), `infer-from-starlight` (composition, temperature classes), `use-line-width-as-evidence` (pressure broadening, Figure 3b, giant and dwarf), "Analyse 7 marks" (temperature's two methods; "the whole pattern shifts together"), Q5. Not used: Hubble's law, exoplanets, binary masses, galactic rotation, Payne.
- **Site notes (quoted from site lesson 9, read 6 Nov; for Codex to log in `site-corrections-phys-y12.md`):**
  1. Coverage gap, not an error: the lesson's line-width card opens "the spectra of stars reveal density, not just composition, temperature and velocity", but the lesson never explains how a star's rotation is read from its spectrum (rotational broadening); "Galactic rotation" is the only rotation mentioned. The syllabus names "rotational and translational velocity". Proposed addition: a short paragraph on rotational (Doppler) broadening: opposite edges of a spinning star are blueshifted and redshifted, broadening every line in proportion to its wavelength.
  2. `solve-a-doppler-worked-example`, Step 2: "$v = ... \times \dfrac{0.9}{393.3} = 6.87\times10^5$ m/s ≈ 687 km/s". Δλ = 0.9 nm has one significant figure, so the result should be about 7 × 10⁵ m s⁻¹ (or the data given to more figures, for example 394.20 nm). Proposed fix: give the observed wavelength as 394.20 nm and keep 687 km/s, or round to 7 × 10⁵ m s⁻¹.
  3. `infer-from-starlight`: "Hubble's Law ... This was the first direct evidence that the universe is expanding." The same lesson's Doppler card says the relation "became major evidence for cosmic expansion; it was not the only evidence", and Hubble did not interpret it as expansion in 1929. Proposed fix: "This became key early evidence that the universe is expanding."
  Checked and correct: the sign convention, the H-alpha figure, pressure broadening, the giant and dwarf contrast, Q5's model answer, the "Analyse 7 marks" model answer.
- **Cause chain taught, in order:** (1) line positions identify elements (2); (2) hotter surfaces give bluer continua and change which atoms or ions absorb, so line strengths set temperature (3); (3) a moving source stretches or squeezes each wave by vT, so Δλ/λ = v/c (4); (4) a uniform shift gives radial velocity (5); (5) opposite edges of a spinning star shift opposite ways, broadening lines (6); (6) frequent collisions in a dense atmosphere disturb energy levels, broadening lines (7); (7) shape separates the two broadenings (8).
- **Entry knowledge (route):** v03; Year 11 wave frequency, period, wavelength; c = fλ.
- **Learner-visible vocabulary:** redshift and blueshift (lines moved to longer or shorter wavelengths, 1, 4); radial velocity (speed directly towards or away from us, 4); spectral class (a star's type, set by which lines are strong, O hottest to M coolest, 3); pressure broadening (lines widened by collisions in a dense gas, 7); line profile (a graph of brightness across one line, 6).
- **Legacy logic ported:** none. Kit family `m7-spectra-shift` (shifting all lines by one factor) supports scenes 1, 4 and 5; its limits (no pressure broadening; z not claimed as v/c at high speed) are respected, and broadening is new motion.
- **New explainer motion:** **feature board** (three columns filling as properties are taught); **class strip** (seven small strips O to M with hydrogen, helium and molecular features at schematic strengths, a temperature arrow); **Doppler construction** (a coded source emitting crests while moving right; crest spacing ahead and behind; vT bracket); **spinning star** (a star plate rotating, blue-tinted approaching edge, red-tinted receding edge, three sub-profiles summing into one broad profile); **profile pair** (a narrow giant profile and a broad dwarf profile on the same axis; a rotation profile and a pressure profile side by side); `AlignedAlgebra`; `Countdown`; `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the stage centre-left; the feature board or working strips on the right; everything above the bottom 12%.
- **Author notes (not learner copy):**
  (a) Derivation: a source moving away at speed v emits crests one period T apart; between crests it moves vT, so the received wavelength is λ + vT; with T = λ/c, Δλ/λ = v/c. Valid for v ≪ c (the relativistic form differs at large v). For a moving observer the first-order result is the same.
  (b) Ca II: the site's rest wavelength 393.3 nm (NIST air 393.366 nm, Ca II K). 0.9 / 393.3 × 3.00 × 10⁸ = 6.865 × 10⁵ m s⁻¹. Shown as 6.9 × 10⁵ m s⁻¹ (690 km s⁻¹); real stellar radial velocities are usually below about 100 km s⁻¹, but the site's values are kept as givens.
  (c) Rotation: Δλ = (v sin i / c) λ = (1.00 × 10⁵ / 3.00 × 10⁸) × 656.3 = 0.219 nm each side. Illustrative; many hot stars rotate at 100 to 300 km s⁻¹; the Sun about 2 km s⁻¹ (0.004 nm).
  (d) Rotational profiles are roughly elliptical (no extended wings); collisional (Lorentzian or Voigt) profiles have extended wings; rotational width scales with λ for all lines, while pressure broadening varies strongly between lines (hydrogen lines are especially sensitive). The narration gives only the shape contrast.
  (e) Hydrogen Balmer lines peak in strength near 9000 to 10 000 K (A stars); O stars show ionised helium; M stars show titanium oxide bands. Class temperatures are approximate: O above about 30 000 K, M below about 3500 K; the site's "O, ~50,000 K" and "M, ~3,000 K" are used only as "hottest" and "coolest".
  (f) Pronunciations: "H-alpha" (aitch alpha), "Doppler", "delta lambda".
- **Open decisions for root:**
  - **1. Plates.** New: `y12p-star-cool-red-v1.png`, `y12p-star-hot-blue-v1.png`. Reused: `phys-y11-sun-v1.png` (the yellow star; the giant and dwarf comparison uses it at two uniform scales with a tag "same temperature"; the giant is drawn as a large faint disc outline beside it if root prefers not to enlarge a plate a hundredfold).
  - **2. Rotation scene** (not on the site; syllabus requires it): root to confirm the shape contrast in scene 8 is at the right depth.
  - **3. Optional beats** the learning review may cut: scene 3's line-strength sentence about molecules; scene 8's shape contrast (keep the summary).
Main question: *Two stars both show hydrogen, but one star's lines have slid along and the other's are broader. What can stellar spectra tell us beyond chemical identity?*
Entry knowledge: v03's spectra and fingerprints; wave period; c = fλ.
Stops after: temperature, radial velocity with Δλ/λ = v/c, rotation, density, separating the clues. No Wien numbers, Hubble or stellar evolution.
Handoff: v05, why light spreads after passing an edge or narrow opening.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings.

### 1. hook (same element, different stars)
> Both of these stars show hydrogen. But in star A, every line has slid **along**, and in star B, the lines are **broader**. A star's spectrum tells you far more than what it's made of. From this one strip of light, astronomers work out how hot a star is, how fast it's moving towards or away from us, how fast it spins, and how dense its atmosphere is. Make your **prediction**. If a star is moving away from us, do its lines shift to longer wavelengths, or shorter? **Longer**. That's called a redshift.

Visual: opens on v03's final frame (see "Opening frame"); the chip "Next: what can stellar spectra tell us beyond chemical identity?" becomes the heading. On "along" star A's dashed connectors pulse. On "broader" star B's lines pulse. On "how hot" a three-column feature board slides in at the right, headed "where (position)", "how wide (width)", "how strong (strength and colour)"; four grey chips wait below it: "temperature", "velocity", "spin", "density". On "prediction" a 3 s `Countdown` beside two chips: "longer" and "shorter". On "Longer" the first chip ticks; a rose arrow on star A points towards 750 nm, tag "redshift: moving away".

### 2. three things to read
> There are three things to read in a stellar spectrum. Where the lines sit, how wide they are, and how strong they are, along with the colour of the continuous **background**. You already know one use of position. Which wavelengths are dark tells you which elements are in the star's atmosphere. That's chemical **composition**.

Visual: board change: one star's absorption strip (hydrogen, sodium and calcium lines at NIST positions, schematic strengths) across the centre. On "Where the lines sit" a rose bracket under one line's position; on "how wide they are" a bracket across one line's width; on "how strong they are" a depth marker on one line; on "background" a bracket over the continuous fill. On "composition" the reference strips from v03 slide beneath and tick; the feature board's "where" column gains "composition (which wavelengths)".

### 3. how hot is it?
> Temperature shows up two ways. First, the colour of the continuous spectrum. A cooler star gives out more red light, a hotter star more blue, so cool stars look red and hot stars look blue-**white**. Second, which lines are strong. In a cool star, molecules survive in the atmosphere and add dark bands. In a very hot star, atoms lose electrons, and ionised helium shows up. Hydrogen's lines are strongest at around ten thousand kelvin, and weaker in stars much hotter or cooler. So weak hydrogen lines don't mean a star has little hydrogen. Astronomers sort stars into classes, O, B, A, F, G, K and M, from hottest to **coolest**.

Visual: board change: three star plates in a row: `y12p-star-cool-red-v1.png` (new), `phys-y11-sun-v1.png` (reused) and `y12p-star-hot-blue-v1.png` (new), each with a small continuum-brightness curve above (schematic, no scale). On "colour of the continuous spectrum" the curves draw: the red star's rising to the right, the hot star's highest at the left. On "white" tags "cooler: redder", "hotter: bluer" (tag "exact peak law: v09"). On "molecules survive" a strip for the cool star with broad dark bands, tag "molecular bands". On "ionised helium" a strip for the hot star with a helium line, tag "ionised helium". On "ten thousand kelvin" a small graph: hydrogen line strength against temperature, a hump peaking near 10 000 K (schematic). On "little hydrogen" a crossed chip "weak hydrogen lines = little hydrogen". On "coolest" the class strip: seven small strips labelled O to M under a navy arrow "hotter ← → cooler"; the feature board's "how strong" column gains "temperature (continuum colour, which lines are strong)".

### 4. why motion shifts the lines
> Now motion. Picture a star moving away from us, giving out a wave. It sends out one crest, and before the next crest leaves, one period later, the star has moved a distance v times **T**. So every wavelength reaching us is stretched by v T. That's the shift, delta lambda. And the period is the wavelength divided by c. Put those together, and delta lambda over lambda equals v over **c**. Moving away stretches the waves, a redshift. Moving towards us squeezes them, a **blueshift**. This works when v is much less than c, and it only measures motion straight towards or away from us.

Visual: board change to the Doppler construction: a coded star dot at the left moving right (away from a coded observer marker at the far left), emitting blue-grey crests. On "sends out one crest" crest 1 leaves; on "before the next crest leaves" a navy clock tick "one period T"; the star has moved; a rose bracket between its old and new positions "vT"; crest 2 leaves. On "T" the crests behind the star (towards the observer) are spaced λ + vT; tag "stretched". Working strip: on "stretched by v T" "Δλ = vT". On "the period is the wavelength divided by c" "T = λ / c". On "c" "Δλ = v λ / c  →  Δλ / λ = v / c" (boxed). On "a redshift" the crests behind lengthen, tinted red; on "blueshift" the star reverses direction and the crests towards the observer shorten, tinted blue. A navy tag "v ≪ c; radial (line-of-sight) motion only".

### 5. reading a speed
> Here's one. A calcium line has a rest wavelength of three hundred and ninety-three point three nanometres. In a star's spectrum it's at three hundred and ninety-four point two. The shift is plus nought point nine **nanometres**, longer, so the star is moving away. The speed is c times nought point nine over three hundred and ninety-three point three, about **six point nine times ten to the five** metres per second. And here's the check. Every line in that star shifts by the same fraction, so a shifted pattern means motion, not a different **element**.

Visual: board change to the working layout. Task strip: "Find the star's radial velocity." Equation strip: "Δλ / λ₀ = v / c". Givens grouped: "λ₀ = 393.3 nm (calcium, at rest)", "λ_obs = 394.2 nm", "c = 3.00 × 10⁸ m s⁻¹". A strip shows the rest line (grey dashed) and the observed line (rose) a little to its right. On "nanometres" stage 1: "Δλ = 394.2 − 393.3 = +0.9 nm → longer: receding". On "six point nine times ten to the five" stage 2: "v = c Δλ / λ₀ = 3.00 × 10⁸ × 0.9 / 393.3 = 6.9 × 10⁵ m s⁻¹ (away)" in orange. On "element" the star's full strip shows all lines shifted with connectors leaning the same way; the feature board's "where" column gains "radial velocity (uniform shift)".

### 6. a spinning star
> What about spin? Picture a star rotating, seen from the side. One edge is coming towards us, so its light is **blueshifted**. The other edge is moving away, so its light is **redshifted**. The middle isn't moving towards or away from us at all. We see all of that light at once, so each line gets smeared out across a range of wavelengths. The faster the star spins, the broader its lines. If a star's equator moves at a hundred kilometres per second, hydrogen's six hundred and fifty-six nanometre line spreads by about nought point two two nanometres each **way**.

Visual: board change to the spinning star: the Sun plate (reused) rotating slowly, navy rotation arrows; the left edge tinted blue with a navy arrow "towards us", the right edge tinted red "away". On "blueshifted" a small blue-shifted line profile appears under the left edge; on "redshifted" a red-shifted one under the right edge; on "The middle" an unshifted one under the centre. On "smeared out" the three profiles slide together and sum into one broad, rounded profile (ink), tag "rotational broadening". On "The faster the star spins" a slider: spin up → the profile widens. On "way" working: "Δλ = (v / c) λ = (1.00 × 10⁵ / 3.00 × 10⁸) × 656.3 = 0.22 nm each side" with a grey tag "illustrative"; the feature board's "how wide" column gains "rotation (Doppler spread)".

### 7. dense or thin?
> Width can mean something else too. In a dense atmosphere, atoms collide very often. Each collision briefly disturbs an atom's energy levels, so different atoms absorb slightly different wavelengths, and the line **broadens**. That's called pressure broadening. A dwarf star is compact, with a dense atmosphere, so its lines are broad. A giant star of the same temperature has a thin, spread-out atmosphere, with few collisions, so its lines are narrow and **sharp**. So line width separates a giant from a dwarf, even when their colour is **identical**.

Visual: board change: two gas insets side by side: "dense" (crowded dots colliding, small flashes) and "thin" (spread-out dots). On "disturbs an atom's energy levels" the dense inset's energy ladder wobbles slightly. On "broadens" a broad profile grows under the dense inset, tag "pressure broadening". On "dwarf star" the Sun plate small at the left, tag "dwarf: dense atmosphere"; its strip shows broad hydrogen lines. On "sharp" a large faint disc outline at the right (giant, tag "giant: thin atmosphere", same colour), its strip with narrow lines at the same positions. On "identical" a navy tag "same temperature, same lines, different widths"; the feature board's "how wide" column gains "density (pressure broadening)".

### 8. telling the clues apart
> So spin and density both widen lines. How do astronomers tell them apart? By the shape. Spin gives a rounded, dish-shaped dip with no long tails. Collisions give a narrow core with long, faint wings stretching out on each **side**. Put it together. Position tells you composition and motion. Width tells you spin or density. Strength and colour tell you **temperature**.

Visual: board change to the profile pair: left, a rotation profile (rounded dish, steep edges, tag "spin"); right, a pressure profile (narrow core, long wings, tag "collisions"). On "side" the wings highlight. On "Put it together" the feature board slides to the centre, full size: "where: composition, radial velocity", "how wide: rotation, density", "how strong: temperature"; on "temperature" all three columns pulse in turn.

### 9. a way to remember
> Here's a way to remember it. Where, how wide, how strong. Where tells you what, and how fast. Width tells you spin, or squeeze. Strength and colour tell you how **hot**.

Visual: board clears to the three column headings, large. On "Where tells you what, and how fast" the first column pulses; on "Width tells you spin, or squeeze" the second; on "hot" the third; the handwritten line writes above: "Where: what and how fast. Width: spin or squeeze. Strength and colour: how hot." Hold about 2 seconds.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. Hydrogen's H-alpha line has a rest wavelength of six hundred and fifty-six point three nanometres. In a star's spectrum it's observed at six hundred and fifty-five point six. Calculate the star's radial velocity, and state whether it's moving towards or away from us. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "The H-alpha line of hydrogen has a rest wavelength of 656.3 nm. In the spectrum of a star it is observed at 655.6 nm. Calculate the star's radial velocity and state whether the star is approaching or receding. (3 marks)". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 11. feedback 1 (brief)
> Delta lambda is six fifty-five point six minus six fifty-six point three, minus nought point seven nanometres. Shorter, so it's a blueshift, and the star is coming **towards** us. The speed is c times nought point seven over six fifty-six point three, about **three point two times ten to the five** metres per second. The classic slip is putting the observed wavelength over the rest wavelength, instead of the **shift**.

Visual: card shrinks to the top; "656.3 nm" and "655.6 nm" underline. On "towards" "Δλ = 655.6 − 656.3 = −0.7 nm → shorter: blueshift, approaching". On "three point two times ten to the five" "v = c |Δλ| / λ₀ = 3.00 × 10⁸ × 0.7 / 656.3 = 3.2 × 10⁵ m s⁻¹ towards us". On "shift" a chip "v = c × 655.6 / 656.3 ≈ 3.0 × 10⁸ m s⁻¹" fades in and is crossed (caption "use the shift Δλ, not λ_obs"). Hold about 1 second.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. Two stars have the same surface temperature and the same set of absorption lines. Star B's lines are much broader than star A's. Give two possible causes of the broader lines, and state what each would tell you about star B. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Two stars, A and B, have the same surface temperature and show the same absorption lines at the same wavelengths. The lines in star B's spectrum are much broader than those in star A's. Identify TWO possible causes of the broader lines and state what each reveals about star B. (3 marks)". A small coded diagram: two absorption strips, A narrow lines, B broad lines. The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 2 (brief)
> One cause is rotation. If star B spins faster, one edge is blueshifted and the other redshifted, so its lines spread out. That tells you it's rotating **faster**. The other cause is density. A denser atmosphere means more collisions, which broaden the lines, so star B is likely a dwarf, and star A a **giant**. The slip is saying star B is hotter. They have the same temperature, and the same **lines**.

Visual: card shrinks to the top; "same surface temperature" and "much broader" underline. On "faster" "cause 1: faster rotation → opposite Doppler shifts from its edges → broad lines: star B spins faster". On "giant" "cause 2: denser atmosphere → more collisions → pressure broadening: star B likely a dwarf (A a giant)". On "lines" a chip "star B is hotter" fades in and is crossed (caption "same temperature: given"). Hold about 1 second.

### 14. handoff
> So a stellar spectrum tells us a star's temperature, its motion, its spin and its density, as well as what it's made of, by reading where the lines are, how wide, and how strong. Every one of those clues was read after a spectroscope spread the light out. And the first thing that light does, inside the spectroscope, is squeeze through a very narrow slit. Look what happens on the other side. It **spreads**. Why does light spread after passing an edge or narrow opening?

Visual: board clears (camera change). On "temperature, its motion, its spin and its density" the four grey chips from scene 1 tick in turn beside the feature board (small, upper left). On "squeeze through a very narrow slit" a coded close-up of a spectroscope's entrance slit: two dark jaws with a narrow gap, straight pale amber wavefronts arriving from the left. On "spreads" beyond the slit the wavefronts curve and fan out into the region behind the jaws (faint), with a "?" in the region beside the straight-through path; a chip "Next: why does light spread after passing an edge or narrow opening?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 15. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Line positions → composition (which elements).
2. Temperature: continuum colour (hotter is bluer) and which lines are strong (classes O, B, A, F, G, K, M, hottest to coolest). Hydrogen lines strongest near 10 000 K.
3. Translational (radial) velocity: uniform shift of all lines; Δλ/λ = v/c (v ≪ c). Longer: redshift, receding. Shorter: blueshift, approaching.
4. Rotation: opposite edges shift opposite ways → broadened lines; faster spin, broader.
5. Density: collisions in a dense atmosphere → pressure broadening; broad lines: dwarf; narrow lines: giant (same temperature).
6. Line shape separates spin (rounded dip) from collisions (long wings).

Memory aid (large, on the notes screen): *Where: what and how fast. Width: spin or squeeze. Strength and colour: how hot.*

## Teaching checks

- **Does it explain causes?** Why temperature changes colour and line strengths (3); why motion shifts lines, derived (4); why a uniform shift means motion (5); why spin broadens (6); why density broadens (7).
- **Misconceptions addressed:** weak hydrogen lines mean little hydrogen (3); a shifted pattern means a different element (5); ratio of observed to rest wavelength used for v/c (crossed in 11); broader lines mean hotter (crossed in 13).
- **One idea at a time:** features (2), temperature (3), Doppler (4, 5), rotation (6), density (7), separating (8).
- **Video makes it easier:** the vT bracket between crests (4); the three edge profiles summing into one broad profile (6); dense and thin insets with their profiles (7); the feature board filling column by column (2 to 8).
- **Response opportunity:** one prediction (3 s) and two unseen tasks, 10 s each; nothing answer-bearing. One crossed mistake each; feedback about 25 s each.
- **Avoided double teaching:** v03's spectra and energy levels recalled; Wien's law left to v09.
- **Syllabus coverage:** `P7-IQ1-06` surface temperature (3), rotational velocity (6), translational velocity (4, 5), density (7), chemical composition (2).
- **Out of scope by design:** Wien numbers (v09), Hubble's law (Module 8), binary masses, exoplanets, stellar evolution.

## Practice questions and model answers

**Attempt 1 (scene 10; original wording, 3 marks).** "The H-alpha line of hydrogen has a rest wavelength of 656.3 nm. In the spectrum of a star it is observed at 655.6 nm. Calculate the star's radial velocity and state whether the star is approaching or receding."
Model answer: Δλ = 655.6 − 656.3 = −0.7 nm (1 mark). v = c Δλ/λ₀ = 3.00 × 10⁸ × (−0.7)/656.3 = −3.2 × 10⁵ m s⁻¹ (1 mark). The negative shift (blueshift) means the star is approaching at about 3.2 × 10⁵ m s⁻¹ (1 mark). Classic mistake (crossed): v = c × λ_obs/λ₀.

**Attempt 2 (scene 12; original wording, 3 marks).** "Two stars, A and B, have the same surface temperature and show the same absorption lines at the same wavelengths. The lines in star B's spectrum are much broader than those in star A's. Identify TWO possible causes of the broader lines and state what each reveals about star B."
Model answer: Faster rotation: light from the approaching edge is blueshifted and from the receding edge redshifted, so each line is spread over a range of wavelengths; star B rotates faster (or more of its rotation is along our line of sight) (1.5 marks). Higher atmospheric density: more frequent collisions perturb the atoms' energy levels, causing pressure broadening; star B is likely a compact dwarf and star A a giant (1.5 marks). Line shapes (rounded dish versus long wings) can separate the two. Classic mistake (crossed): "star B is hotter".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Ca II (site) | 394.2 − 393.3 = 0.9 nm; v = 3.00 × 10⁸ × 0.9 / 393.3 = 6.865 × 10⁵ ≈ 6.9 × 10⁵ m s⁻¹ | 5 |
| Rotation (illustrative) | (1.00 × 10⁵ / 3.00 × 10⁸) × 656.3 = 0.2188 ≈ 0.22 nm | 6 |
| Hydrogen strongest | near 10 000 K (approximate) | 3, 15 |
| A1 (original) | Δλ = −0.7 nm; v = 3.00 × 10⁸ × 0.7 / 656.3 = 3.200 × 10⁵ ≈ 3.2 × 10⁵ m s⁻¹ towards; wrong form 3.00 × 10⁸ × 655.6 / 656.3 = 2.997 × 10⁸ ≈ 3.0 × 10⁸ | 10, 11 |
| Line positions | H-alpha 656.3 nm; Ca II 393.3 nm (site; NIST 393.37) | 2, 5, 6, 10 |

## Numbers to verify (all values, repeated for Codex)

- 0.9 / 393.3 × 3.00e8 = 6.8650e5.
- 1.00e5 / 3.00e8 × 656.3 = 0.21877.
- 0.7 / 656.3 × 3.00e8 = 3.1998e5; 655.6 / 656.3 × 3.00e8 = 2.9968e8.

## Memory aid check

- **"Where: what and how fast. Width: spin or squeeze. Strength and colour: how hot."** Meaning: line positions give composition and (if shifted together) radial velocity; line widths give rotation or density ("squeeze" = dense, compressed atmosphere); line strengths and the continuum's colour give temperature. Assumptions checked: line strengths also depend on abundance, but the classes are set mainly by temperature (scene 3's trap); "how fast" is the radial component only (scene 4); width has other causes (for example thermal Doppler broadening) not taught here, and the aid names the two the syllabus asks for. It helps a new case: A2 (width: spin or squeeze). Introduced after the explanation (2 to 8).
- **Considered, not used:** a sentence mnemonic for O B A F G K M (not needed for the syllabus action, and common versions are unsuitable).

## Narration length estimate

Revision 1 count (6 Nov; counted by script with the build parser rules): **6,084 characters**, 15 scenes. Characters per scene (1 to 15): 487, 319, 623, 573, 545, 554, 541, 362, 165, 300, 410, 256, 392, 468, 75. At 13.3 characters per second the speech is about 457 s; add about 3 s for the prediction, 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 55 s more of the notes hold (about 84 s): **about 541 s**, inside the band and under the cap. Reserve trims: scene 3's molecules sentence; scene 8's shape contrast (open decision 3).

## Opening frame

v03's final frame (`phys-y12-m7-v03.md`, "Final frame"): three strips on a 380 to 750 nm axis: "laboratory hydrogen" reference (410.2, 434.0, 486.1, 656.3 nm); "star A" with the four dark lines shifted to longer wavelength by the same fraction (tag "exaggerated"), connectors leaning right, chip "shifted?"; "star B" with broadened lines at the rest positions, chip "broader?"; tick chip "composition: hydrogen"; heading "How do different sources produce different spectral patterns?"; chip "Next: what can stellar spectra tell us beyond chemical identity?". Scene 1 turns the chip into the heading and brings in the feature board.

## Final frame

The last explained frame (end of scene 14, before the key-notes board): paper background; at the upper left, a small feature board with four ticked chips "temperature", "velocity", "spin", "density"; at the centre a coded close-up of a spectroscope's entrance slit: two dark jaws (vertical bars) with a narrow gap, straight pale amber wavefronts arriving from the left, and beyond the gap faint curved wavefronts fanning out into the region behind the jaws, with a "?" in that shadow region; heading unchanged ("What can stellar spectra tell us beyond chemical identity?"); a chip reads "Next: why does light spread after passing an edge or narrow opening?". v05 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m7-v04` (route phys-y12-m7-v04). Suggested explainer folder `src/explainer/lessons/phys-y12-m7-v04` and build folder `docs/production/claude-pm/lessons/p-y12-m7-v04` (root to confirm).

In order (kebab-case; 15 scene headings, all `### N.`): hook, three-features, temperature, doppler, radial-velocity, rotation, density, separating-clues, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 and key-notes (`hold`). Scene 1 is `explain` with a 3 s prediction countdown. `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: feature board, class strip, Doppler construction, spinning star, profile pair, spectrum strip (`m7-spectra-shift`), `AlignedAlgebra`, `PenArrow`, `Countdown`, `CameraStage`. Transitions: 1 to 2 clear change; 2 to 3 clear change; 3 to 4 clear change; 4 to 5 clear change; 5 to 6 camera change (star); 6 to 7 clear change; 7 to 8 clear change; 8 to 9 clear change; attempts and feedback card shrink to the top; 13 to 14 clear change; 14 to 15 fade to the notes board.

Holds: hook (3 s countdown), memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 60 s). Review evidence paths: `learning_review` = `checks/p-y12-m7-v04-learning-review.md`, `science_check` = `checks/p-y12-m7-v04-physics-check.md`.

## Assets

Have (scaled uniformly only, never stretched):
- `phys-y11-sun-v1.png`: 3, 6, 7.
- Kit family `m7-spectra-shift` (coded): 1, 2, 5, 14.
- **Checked, not used:** `phys-y11-galaxy-v1.png` (galaxies are Module 8's Hubble context).

Need (new plates, Codex):
1. `y12p-star-cool-red-v1.png`: 3. Essential.
2. `y12p-star-hot-blue-v1.png`: 3. Essential.

Coded: strips and lines, feature board, class strip, line-strength graph, Doppler construction, crests, profiles, gas insets, giant outline, slit close-up, working strips, chips, attempt cards and diagram, countdowns, key notes board.

## Codex asset brief (Year 12 Physics M7 v04: stars)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/phys-y12-m7-v04.md`, route entry phys-y12-m7-v04. Paint after the reviews pass and the owner gives the go-ahead. Save to `public/assets/physics/`. Every plate: transparent PNG with a true alpha channel and **clean edges with no coloured fringe or halo**, ink and watercolour in the house style, matched exactly to `phys-y11-sun-v1.png` in size on canvas, line weight, granulation and finish, at least 8 per cent clear margin, no text, labels, people, hands, faces, backdrop, outer glow beyond the disc or ground shadow. Never stretch.

1. `y12p-star-cool-red-v1.png` (same canvas as the Sun plate): a cool star as a full disc in deep orange-red with darker mottling and slight limb darkening, the same disc diameter as the Sun plate.
2. `y12p-star-hot-blue-v1.png` (same canvas): a hot star as a full disc in blue-white with fine granulation and slight limb darkening, the same disc diameter.

Report inspection on the paper and dark board backgrounds at about 400 px wide, side by side with the Sun plate; confirm matching disc size and finish. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/phys-y12-m7-v04-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and the values in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the physics of every learner-visible claim: temperature from continuum colour and line strengths; hydrogen lines strongest near 10 000 K; class order; the Doppler derivation and its condition; sign convention; rotational broadening; pressure broadening and the giant and dwarf contrast; the profile-shape contrast (author note d).
3. Confirm the rotation number is tagged illustrative.
4. Confirm the memory aid's assumptions.
5. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
6. Confirm both attempt cards are original, carry every condition and show nothing answer-bearing.
7. Confirm the syllabus quote matches the ledger exactly and is labelled 2017.
8. Confirm no person, hand, face or body outline is drawn or requested.
9. Confirm no em dash (U+2014) and no U+2061, and Australian spelling.
10. Confirm the narration character count and per-scene counts by script with the build parser rules.
11. Log site notes 1 to 3 in `site-corrections-phys-y12.md` (note 1 as a coverage gap).

## YouTube metadata (draft)

Title: What Starlight Reveals: Temperature, Motion, Spin and Density | HSC Physics Module 7

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module7/lesson09.sa.html

A star's spectrum tells you far more than what it is made of. See how line strengths and colour reveal a star's temperature, why motion shifts every line (with the Doppler formula derived), how a spinning star's lines broaden, how a dense atmosphere broadens them in a different way, and how astronomers tell the clues apart. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 7: The Nature of Light.
Syllabus content (NSW Physics Stage 6, 2017):
"investigate how the spectra of stars can provide information on: surface temperature, rotational and translational velocity, density, chemical composition"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: how different sources produce different spectral patterns. Next: why light spreads after passing an edge or narrow opening.

#HSCPhysics #Physics #Spectroscopy #Astronomy #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v03; check that the vT construction is followed at speed; that rotation and density broadening stay distinct; that the feature board helps rather than crowds; that the attempt cards give nothing away), then the physics check (rotation depth, profile shapes, class temperatures) and the Codex error check.
- The Doppler crests with the vT bracket, the three edge profiles merging, and the dense and thin insets carry the explanation; judge them at playback speed in the voiced preview.
