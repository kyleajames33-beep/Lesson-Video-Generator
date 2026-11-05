# Year 12 Physics M8 V04: The Hertzsprung-Russell diagram. How does the HR diagram distinguish brightness, temperature and stellar stage? (design)

Status: Revision 1 (6 Nov 2026): first design. Needs independent learning review and science check before voicing.

Narration 6,083 characters, 17 scenes, about 541 s, counted by script with the build parser rules (see "Narration length estimate"). Opens on v03's final frame.

Scope: fourth video of Year 12 Physics Module 8 (From the Universe to the Atom, Physics Stage 6, 2017 syllabus), inquiry question "What evidence is there for the origins of the elements?". Templates as `phys-y12-m8-v01.md`; `math-a12-d10.md` for the calculation layout. No pre-design pack exists; the pack work is done here (2017 wording from the ledger, site values kept, every number recalculated in Python, real stellar data cited, original attempts, asset reuse). Site lesson read in full (6 Nov, read-only, through the brief 168 text extract `work/brief168/module8-lesson08.sa.txt`, hash checked against the live file): orient and predict (scatter or cluster, the Sun, cool but luminous), decode the axes and classify the regions (Figure 1, Stefan-Boltzmann, "beyond the syllabus" note), infer mass, age and distance (extension), work the radius and cluster-age calculation (worked example Star X), apply radius and classification (HSC tip traps, Activity 1), reason about cluster age and limits (Activity 2, misconceptions, "Analyse 6 marks", "Assess 6 marks"), independent practice, retrieve and reflect (Russell 1913, Hertzsprung 1909). `C:/Users/kygs/hscscience/subjects/physics/year12/module8/lesson08.sa.html`, SHA256 `0242670d413f6cca2eb86f56717bcde11430f18815e715ed64b5b35525d34d4c` (recomputed 6 Nov; matches the route). Route entry: `phys-y12-m8-v04`, sections `decode-the-axes-and-classify-the-regions`, `work-the-radius-and-cluster-age-calculation`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Use intrinsic luminosity versus temperature with decreasing temperature axis, radius comparisons and major regions; distinguish apparent brightness from luminosity." Next: "phys-y12-m8-v05: Why do main-sequence stars release energy by combining light nuclei?"

Owner rules applied: 2017 syllabus quoted exactly; no people, hands, faces or body outlines (Hertzsprung and Russell are named in words only); the HR diagram, radius lines, orbits and calculation strips are coded graphs, never painted; stars are painted plates (four reused), each scaled uniformly, never stretched, with plate size used only as a schematic size cue and never as a plotted point; real star values cited (Sun 5772 K and 3.828 × 10²⁶ W, IAU 2015; Proxima Centauri, Rigel, Betelgeuse, Sirius B, Aldebaran in "Numbers used"); every number recalculated in Python; a 3 s prediction; "Pause here to answer." with a 10 s countdown; brief feedback with one crossed-out mistake; original attempts; Australian spelling; no em dashes. Recalled, not re-taught: v03 (spectral classes O to M, temperature from spectra, colours), m7-v09 (hotter surfaces emit more per square metre, peak shifts), Year 11 (inverse square law for light intensity; area of a sphere 4πr²).

Syllabus content (Physics Stage 6 (2017), Module 8; ledger id `P8-IQ1-06`), quoted from the route JSON `syllabusActions` and the ledger:

- `P8-IQ1-06`: "investigate the Hertzsprung-Russell diagram and how it can be used to determine the following about a star:" "characteristics and evolutionary stage", "surface temperature", "colour", "luminosity"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 62)

**Boundary:** starts on v03's final frame (two M stars with matching spectra, luminosities about 10⁶ apart, faint empty HR axes). Teaches: luminosity (total power, watts, solar luminosity 3.8 × 10²⁶ W) against apparent brightness (falls with the square of distance; the Sun, Proxima Centauri, Rigel); the axes (log luminosity; temperature increasing to the left, from the spectral classes; colour along the bottom); the main sequence (about 90% of stars; core hydrogen fusion; position set by mass; the Sun at 5800 K and 1 L☉); radius from position by area reasoning (same temperature, same power per square metre, so L ∝ R²; 100 L☉ gives 10 R☉, the classic trap); giants and supergiants (cool yet luminous, so huge; Betelgeuse beyond Mars's orbit; the two red stars, radius ratio 1000); white dwarfs (hot yet dim, so tiny; Sirius B smaller than Earth); diagonal lines of equal radius; regions as stages (main sequence, giant, remnant) with a conceptual path for a Sun-like star; a worked reading (4000 K, 100 L☉). Stops before mass-luminosity and lifetime laws, cluster turn-off ages, spectroscopic parallax and Stefan-Boltzmann calculations with T⁴ (site "beyond the syllabus" unless supplied), and before the mechanisms of post-main-sequence evolution (v06).

## Decisions

- **Learner question (route wording kept).** "How does the HR diagram distinguish brightness, temperature and stellar stage?" The answer: it plots luminosity (true power, not apparent brightness) against surface temperature (2, 3); a star's position then gives temperature and colour directly (3), its size by area reasoning (5 to 8), and its stage from the region it is in (4, 9).
- **Hook (v03's handoff; site predict "What must be true about a star that is very cool (red) yet extremely luminous?").** 3 s prediction chips: "it's bigger", "it's closer", "it's younger". Answer: bigger (more glowing surface). "Closer" is the brightness trap, answered in scene 2.
- **Luminosity against apparent brightness (route stop; site HSC tip trap 2 and "Assess 6 marks").** Luminosity defined in watts and L☉; apparent brightness falls with the square of distance (Year 11 inverse square law recalled). Real cases: the Sun (brightest in our sky, ordinary luminosity); Proxima Centauri (nearest star after the Sun, 4.2 ly, too dim for the naked eye); Rigel (about 860 ly, among the brightest stars in our sky, about 10⁵ L☉).
- **Axes (site Figure 1 and trap 1).** Luminosity on a log scale (10⁻⁴ to 10⁶ L☉; "powers of ten", explained by the range); temperature increasing to the left (40 000 K to 2500 K), with the O to M letters and a colour band along the top, so position gives surface temperature and colour. Hertzsprung and Russell named in words in scene 3 (site retrieve and reflect).
- **Main sequence (site "Main sequence: ... about 90% ... mass increases from bottom-right to top-left").** Points appear from a nearby-star sample (illustrative positions; the kit's `m8-hr-diagram` limits). Core hydrogen fusion named as the shared stage; mass sets position; the Sun at 5800 K and 1 L☉ (site values).
- **Radius by area reasoning (route "radius comparisons"; site trap 3 "100× luminosity means only 10× radius").** Same temperature gives the same power per square metre (m7-v09 recalled: emission per square metre depends on temperature), so L ∝ area ∝ R² at fixed T; R ratio = √(L ratio). No σ, no T⁴ calculation (site marks Stefan-Boltzmann calculations as extension; author note a); cool surfaces are said to give "much less power per square metre" qualitatively.
- **Giants and supergiants (site regions; "Analyse 6 marks" step 5).** Cool and luminous, so huge. Betelgeuse: radius about 760 R☉ (3.5 AU), so it would reach beyond Mars's orbit (1.5 AU) (author note b). The two red stars of the hook: same temperature, 10⁶ in luminosity, so 10³ in radius.
- **White dwarfs (site regions).** Hot and dim, so tiny; Sirius B (about 25 000 K, radius 0.0084 R☉, about 5800 km) is smaller than Earth (6371 km) (author note c). "Leftover cores of stars like the Sun" in one clause; v06 explains how.
- **Lines of equal radius (site "At fixed L: R ∝ T⁻²", turned visual).** Dashed diagonals labelled 0.01, 1, 100, 1000 R☉ (computed for the coded axes with L ∝ R²T⁴; the narration states only the direction).
- **Stage (syllabus "evolutionary stage"; site "Analyse 6 marks" step 4).** Regions as stages: main sequence (core hydrogen fusion, most of a star's life, so most stars are there), giant (core hydrogen used up, swollen and cooler), white dwarf (exposed core). A conceptual arrow path for a Sun-like star only (kit `m8-hr-diagram`: "conceptual post-main-sequence track"); mechanisms in v06.
- **Worked reading (original; site worked example Star X uses T⁴ and is not reused).** Star at 4000 K and 100 L☉: (1) temperature 4000 K → class K, orange; (2) far above the main sequence at that temperature → giant; (3) a main-sequence star at 4000 K has about 0.1 L☉, so the ratio is 1000 and the radius about √1000 ≈ 32 times larger. Three stages, one at a time.
- **Memory aid (scene 11, new): "Up is power, left is hot. Top right is huge, bottom left is tiny."** See "Memory aid check".
- **Attempts (original, HSC style).** A1 (3 marks): two stars at 5000 K with 0.5 L☉ and 450 L☉: radius ratio 30; the brighter one is a giant. Crossed: 900. A2 (3 marks, evaluate): "the star that appears brightest must be highest on the HR diagram". Crossed: "brighter in the sky means more luminous".
- **Significant figures.** Two figures; luminosities to one figure where the diagram is read.
- **Handoff (route next).** The main sequence is where stars spend most of their lives, fusing hydrogen into helium; why does joining light nuclei release energy? "Next: why do main-sequence stars release energy by combining light nuclei?". See "Final frame".
- **Colour key:** HR points coloured by temperature (blue to red, matching v03's swatches); the main-sequence band pale amber; giant and white-dwarf regions outlined ink; radius lines dashed grey; apparent brightness shown as a small "as seen from Earth" glow ring, luminosity as a solid bar; crossed claims red.
- **Site sources used:** lesson 8: predict (scatter or cluster; Sun; cool but luminous) (1, 4, 6); vocabulary (main sequence, red giant, white dwarf, spectral type) (4, 6, 7); `decode-the-axes-and-classify-the-regions` (axes, reversed temperature, 90%, regions, mass increases to top-left, Sun G2V) (3, 4, 6, 7); `work-the-radius-and-cluster-age-calculation` (radius from luminosity and temperature: same-temperature form only) (5, 10, 12); HSC tip traps 1 to 3 (3, 2, 5); misconceptions (bright means close; hotter on the right) (2, 3); "Analyse 6 marks" (axes, luminosity versus brightness, temperature and colour, stage, size) (2 to 9); "Assess 6 marks" (the Sun as counter-example; equal-distance condition) (2, 14, 15). Not used: mass-luminosity and lifetime relations, turn-off ages, spectroscopic parallax (site extension), the T⁴ radius calculation (author note a).
- **Site notes (quoted from site lesson 8, read 6 Nov; for root to log in `../site-corrections-phys-y12.md` if accepted; continuing the module's numbering after v03's note 12):**
  13. Inconsistent depth labelling: the core card says "Stefan-Boltzmann radius calculations ... are extension unless an exam question supplies the relationship", but the vocabulary intentions list "L = 4πR²σT⁴ links L, R, T" under Understand, the "Stop and check" asks for a T⁴ radius estimate, and Activity 1 and the short answer require it without flagging extension. Suggest marking those items "extension" or supplying the relation in the question.
  14. Example data (retrieve and reflect): "Red supergiants can exceed 1 000 R☉" is fine; but the M-type extend task gives "M-type: ~3 500 K" with "L = 50 L☉" and asks for the main-sequence lifetime "if its mass is 0.4 M☉". A 0.4 M☉ main-sequence star has L of about 0.03 L☉, not 50 L☉; the task mixes a giant's luminosity with a dwarf's mass. Suggest separating the two parts.
  15. Checked and correct: √1000 × (5800/4000)² = 66 R☉; √100 × (5800/3500)² = 27.5 R☉; white dwarf at 20 000 K and 0.01 L☉ gives 0.0084 R☉ (Earth-sized); 10^(−2.5) ≈ 0.003; reversed temperature axis; luminosity, not apparent brightness.
- **Cause chain taught, in order:** (1) apparent brightness depends on distance, so a fair comparison uses luminosity (2); (2) temperature from the spectrum sets the horizontal position and colour (3); (3) stars fusing hydrogen in their cores share one band, ordered by mass (4); (4) at a given temperature each square metre gives the same power, so extra luminosity means extra area, R ∝ √L (5); (5) so cool, luminous stars are huge and hot, dim stars are tiny (6, 7, 8); (6) a star moves between regions as its core changes, so region gives stage (9).
- **Entry knowledge (route `entryKnowledge`):** v03 (spectral classes and temperature); m7-v09 (emission per square metre rises with temperature); Year 11 (inverse square law, graph reading, sphere area).
- **Learner-visible vocabulary (plain meaning at first use):** luminosity (total power a star gives out, 2); solar luminosity L☉ (2); apparent brightness (how bright it looks from here, 2); HR diagram (3); log scale (each step is ten times the last, said as "powers of ten", 3); main sequence (4); red giant, supergiant (6); white dwarf (7); evolutionary stage (stage of a star's life, 9).
- **Legacy logic ported:** none. Explainer family `m8-hr-diagram` (src/explainer/physics/module8: "Locate populations on temperature and luminosity axes and show a conceptual post-main-sequence track") supplies the axes, regions and conceptual path, within its limits ("illustrative positions", "no cluster turn-off dating or radius calculation"; this design adds radius lines and named real stars at their catalogue values).
- **New explainer motion:** **brightness against luminosity** (three stars at different distances with solid luminosity bars and "as seen from Earth" glow rings scaled by L/d²); **HR plot build** (axes draw, then points appear as a sample, the band shading in); **area patches** (a square-metre tile on two star surfaces at the same temperature giving equal power, then the bigger star's tile count); **radius lines** (dashed diagonals labelled in R☉); **orbit overlay** (coded orbits of Mercury to Mars with a red circle of Betelgeuse's radius); **conceptual stage path** (arrow from the main sequence up-right to the giants, then down-left to the white dwarfs); `AlignedAlgebra`; `NumberTicker`; `Countdown` (3 s in scene 1; 10 s in scenes 12 and 14); `QuestionCard`; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout:** the HR diagram occupies the right two-thirds from scene 3 onwards and stays as the anchor; star plates and calculation strips at the left; everything above the bottom 12% of the frame.
- **Author notes (not learner copy):**
  (a) L = 4πR²σT⁴ underlies the radius lines and the "much less per square metre" statement for cool stars; (3500/5800)⁴ = 0.13. The design uses only the same-temperature form R₂/R₁ = √(L₂/L₁), which needs no σ. If root wants the T⁴ form (site Star X), add it as an optional extension scene.
  (b) Betelgeuse: radius estimates range from about 640 to 1000 R☉ (764 R☉ from Joyce et al. 2020); 764 R☉ = 3.6 AU. Mars's orbit 1.52 AU, Jupiter's 5.2 AU. "Beyond the orbit of Mars" holds for the whole range. Luminosity about 10⁵ L☉ (estimates 0.75 to 1.4 × 10⁵); temperature about 3600 K.
  (c) Sirius B: T ≈ 25 000 K; R = 0.0084 R☉ = 5800 km (Earth 6371 km); L ≈ 0.025 L☉ from R and T (some sources quote 0.056 L☉). Screen shows "~0.03 L☉".
  (d) Proxima Centauri: 4.25 ly; L ≈ 0.0016 L☉; apparent magnitude 11.1 (naked-eye limit about 6). Rigel: about 860 ly (264 pc); L ≈ 1 × 10⁵ L☉ (estimates 0.6 to 1.2 × 10⁵); apparent magnitude 0.13, seventh brightest star in the night sky. Aldebaran (screen point only): 3900 K, about 440 L☉, 44 R☉. Sirius A (screen point): 9940 K, 25 L☉.
  (e) A main-sequence star at 4000 K (late K) has L ≈ 0.1 L☉ and R ≈ 0.6 R☉; the worked star (4000 K, 100 L☉) then has R ≈ 32 × 0.6 ≈ 19 R☉, a giant. Screen shows "about 32 times the radius of a main-sequence star at the same temperature" only.
  (f) Main-sequence fraction: about 90% of stars in a volume-limited sample (site); the reason (the main sequence is about 90% of a star's life) is said as "most of its life".
  (g) Pronunciations: "Hertzsprung" as "hertz-sprung"; "Betelgeuse" as "beetle-juice"; "Rigel" as "rye-jel"; "Proxima Centauri" as "proxima sen-tor-ee".
- **Open decisions for root:**
  - **1. T⁴ radius calculation (root).** Excluded as site extension (author note a). Add an optional scene, or keep the same-temperature form only.
  - **2. Real stars on the diagram (science check).** The named stars are placed at the catalogue values in author notes b to d; the remaining sample points are illustrative. Confirm, or make all points illustrative.
  - **3. Stage path wording (learning review).** Scene 9 states the Sun-like path without mechanism; v06 explains it. Check that this is not double teaching when v06 runs.
  - **4. Site notes 13 and 14** for the site log.

Main question: *Two stars with the same spectrum can differ a millionfold in power. What does a star's place on one graph tell you?*
Entry knowledge: spectral classes and temperature (v03); emission per square metre rises with temperature (m7-v09); inverse square law (Year 11).
Stops after: luminosity against brightness, the axes, regions, radius comparisons at equal temperature, regions as stages. No turn-off ages or T⁴ calculations.
Handoff: v05, why main-sequence stars release energy by combining light nuclei.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *L*, *T*, *R*, *L☉*, *R☉*.

### 1. hook (same spectrum, a million times the power)
> Last time, these two stars had matching spectra, the same class and the same temperature. Yet one gives out about a million times more power. How can two stars at the same temperature differ that much? Make your **prediction**. The bright one is bigger, with far more glowing surface. To see that, put every star on one graph. So how does the HR diagram distinguish brightness, temperature and stellar **stage**?

Visual: opens on v03's final frame (see "Opening frame"). On "matching spectra" the two identical M strips pulse. On "a million times more power" the luminosity bars "1" and "about 10⁶" pulse. On "prediction" a 3 s `Countdown` beside chips "it's bigger", "it's closer", "it's younger". On "The bright one is bigger" the "it's bigger" chip ticks; "it's closer" gets a small tag "see next". On "put every star on one graph" the faint axes behind the stars darken. On "stage" the chip becomes the heading: "How does the HR diagram distinguish brightness, temperature and stellar stage?".

### 2. power, not looks
> First, two kinds of brightness. Luminosity is the total power a star gives out, in watts. The Sun's is about three point eight times ten to the twenty-six watts, one solar luminosity. Apparent brightness is how bright a star looks from here, and it falls with the square of the **distance**. The Sun is the brightest thing in our sky only because it's close. The next nearest star, Proxima Centauri, is too dim to see without a **telescope**. Yet Rigel, about eight hundred and sixty light years away, is one of the brightest stars we **see**. The HR diagram plots luminosity, not apparent **brightness**.

Visual: board change: the brightness-against-luminosity panel. On "total power a star gives out" the Sun plate with a solid bar "luminosity L". On "one solar luminosity" chip "L☉ = 3.8 × 10²⁶ W" (site 3.83 × 10²⁶ W). On "distance" a small glow ring "as seen from Earth" shrinking as the star moves away, chip "apparent brightness ∝ L/d² (inverse square law, Year 11)". On "only because it's close" the Sun's glow ring large, its luminosity bar short. On "telescope" the small cool-red plate "Proxima Centauri: 4.2 ly, L ≈ 0.002 L☉" with a tiny glow ring. On "see" the hot-blue plate "Rigel: about 860 ly, L ≈ 10⁵ L☉" with a large glow ring despite the distance. On "brightness" chip "HR diagram: luminosity (true power)", and a crossed chip "brighter in the sky = more luminous".

### 3. the axes
> The HR diagram is named after the two astronomers who first drew it, Ejnar Hertzsprung and Henry Norris Russell. It plots luminosity up the side, against surface temperature along the bottom. Two things are unusual. Luminosity goes up in powers of ten, because stars range from a ten thousandth of the Sun to a million times it. And temperature increases to the **left**. That's because it follows the spectral classes, O on the left to M on the right. So moving left means hotter and bluer, and moving right means cooler and **redder**.

Visual: board change: the HR axes draw at the right (the `m8-hr-diagram` family). On "luminosity up the side" y-axis "luminosity (L☉)" with ticks 10⁻⁴, 10⁻², 1, 10², 10⁴, 10⁶. On "surface temperature along the bottom" x-axis "surface temperature (K)". On "powers of ten" each tick pulses in turn, tag "each step × 100". On "left" x-axis tick labels draw from 40 000 at the left through 20 000, 10 000, 5000 to 2500 at the right, with a red arrow "hotter ←" (site trap 1). On "O on the left to M on the right" the class letters O B A F G K M appear along the top. On "redder" a colour band (blue to red, v03's swatches) runs under the letters.

### 4. the main sequence
> Now plot the stars around us. They don't scatter at random. About ninety per cent fall in one diagonal band, from hot and luminous at the top left to cool and dim at the bottom right. That's the main **sequence**. These stars are all doing the same thing, fusing hydrogen into helium in their cores. Where a star sits along the band is set by its mass. The most massive are hot, blue and luminous. The least massive are cool, red and **dim**. The Sun sits in the middle, at about five thousand eight hundred kelvin and one solar **luminosity**.

Visual: on "plot the stars around us" points appear one by one, coloured by temperature (tag "illustrative sample of nearby stars"). On "don't scatter at random" the points settle; a chip "random?" is crossed. On "sequence" the band shades pale amber with the label "main sequence (~90%)". On "fusing hydrogen into helium in their cores" tag "main sequence: core hydrogen fusion". On "set by its mass" an arrow along the band "mass increases ↗" (towards the top left). On "dim" two labels: top-left "massive: hot, blue, luminous", bottom-right "low mass: cool, red, dim"; Proxima's point lights at 3000 K, 0.002 L☉. On "luminosity" (last) the Sun plate shrinks onto its point "Sun: 5800 K, 1 L☉ (G2)".

### 5. size from area
> Here's how the diagram shows size. A star's luminosity depends on its temperature and on its surface area. At the same temperature, every square metre of surface gives out the same power. So at the same temperature, more luminosity means more surface. Area goes as radius squared, so a star at the Sun's temperature with a hundred times the Sun's luminosity has a hundred times the area, and ten times the **radius**. Not a hundred times. That's a classic **trap**.

Visual: the HR diagram shrinks to the right half; at the left two discs at the Sun's colour, one Sun-sized, one larger, each with a small square tile "1 m²" and a readout "same power per m² (same T)". On "more luminosity means more surface" the large disc fills with tiles. On "Area goes as radius squared" chip "area = 4πR² ∝ R²". On "radius" `AlignedAlgebra` "L ratio = 100 → area ratio = 100 → R ratio = √100 = 10" (boxed), the larger disc growing to ten times the Sun's radius. On "trap" a chip "R ratio = 100" fades in and is crossed (caption "R ∝ √L at the same T"). On the diagram a point appears at 5800 K and 100 L☉, tag "10 R☉".

### 6. huge and cool: the giants
> Now look at the top right. These stars are cool and red, yet hugely luminous. A cool surface gives out much less power per square metre, so to be that luminous, they must be enormous. These are red giants and supergiants. Betelgeuse is so big that, in place of the Sun, it would reach beyond the orbit of **Mars**. And our two red stars? Same temperature, a million times the luminosity, so a million times the area, and a thousand times the **radius**.

Visual: the diagram returns full size. On "the top right" the region outlines "red giants" and "supergiants" draw; points appear there (Aldebaran 3900 K, 440 L☉; Betelgeuse 3600 K, about 10⁵ L☉). On "much less power per square metre" a small tile on a red disc glowing dimmer than the Sun's tile, tag "cool: less power per m²". On "Mars" an inset: coded orbits of Mercury, Venus, Earth and Mars around a small Sun dot, then a red circle of Betelgeuse's radius (about 3.5 AU) drawn over them, tag "Betelgeuse: about 760 R☉ (estimates vary)". On "our two red stars" the two cool-red plates from scene 1 return small, their points marked at 3500 K: "0.01 L☉" (main sequence) and "10⁴ L☉" (supergiant). On "radius" `AlignedAlgebra` "L ratio = 10⁶ → R ratio = √10⁶ = 1000" (boxed).

### 7. hot and dim: the white dwarfs
> Now the bottom left. These stars are hot and white, yet very dim. Each square metre gives out a lot of power, so to be that dim, they must be tiny. These are white dwarfs, about the size of Earth, the leftover cores of stars like the **Sun**. Sirius B is a white dwarf. It's far hotter than the Sun, yet fainter, and it's smaller than **Earth**.

Visual: on "the bottom left" the region outline "white dwarfs" draws with points. On "Each square metre gives out a lot of power" a bright tile on a small white disc, tag "hot: more power per m²". On "tiny" the disc shrinks to a dot. On "Sun" tag "white dwarf: leftover core (how: v06)". On "Sirius B is a white dwarf" its point lights "Sirius B: ~25 000 K, ~0.03 L☉", with Sirius A "9940 K, 25 L☉" on the main sequence. On "Earth" a size comparison: a coded Earth disc (6371 km) beside a slightly smaller white disc "Sirius B: about 5800 km".

### 8. lines of equal size
> You can draw lines of equal radius across the diagram. They run diagonally, down from the top left. Up and to the right means bigger. Down and to the left means smaller. That's how one position tells you **size**.

Visual: on "lines of equal radius" dashed grey diagonals draw across the diagram, labelled "0.01 R☉", "1 R☉", "100 R☉", "1000 R☉" (computed from L ∝ R²T⁴ for the coded axes). On "Up and to the right means bigger" a navy arrow ↗ "bigger". On "Down and to the left means smaller" an arrow ↙ "smaller". On "size" the giants, Sun and white dwarfs pulse on their nearest lines.

### 9. regions are stages
> Position also tells you a star's stage of life. On the main sequence, a star is fusing hydrogen in its core. It stays there for most of its life, which is why most stars we see are there. When the core's hydrogen runs out, the star swells and cools, and moves up and to the right, into the giants. Later, a star like the Sun sheds its outer layers, and its hot core is left behind, down at the bottom left. So the regions are stages: main sequence, giant, then **remnant**.

Visual: the radius lines fade. On "fusing hydrogen in its core" the band pulses, tag "stage 1: main sequence". On "most of its life" a small bar "time on main sequence ≈ 90% of its life". On "moves up and to the right" a conceptual arrow from the Sun's point up and right into the giants (tag "conceptual path, Sun-like star"). On "its hot core is left behind" the arrow swings left and down to the white dwarfs. On "remnant" three stage labels "main sequence", "giant", "remnant (white dwarf)".

### 10. reading a star
> Let's read one. A star has a surface temperature of four thousand kelvin, and a luminosity of a hundred solar luminosities. Four thousand kelvin puts it in class K, so it looks **orange**. At that temperature, a main-sequence star has only about a tenth of a solar luminosity, so this star sits far above the band. It's a **giant**. How much bigger? A thousand times the luminosity at the same temperature means a thousand times the area, so about thirty-two times the **radius**.

Visual: board change to the working layout beside the diagram. Task strip: "Describe the star from its position." Givens: "T = 4000 K, L = 100 L☉". On "four thousand kelvin" the point marks at (4000 K, 100 L☉). On "orange" stage 1 "T = 4000 K → class K → orange" (colour band highlight). On "a main-sequence star has only about a tenth of a solar luminosity" a vertical dashed line at 4000 K meets the band at "≈ 0.1 L☉". On "giant" stage 2 "far above the main sequence → giant". On "radius" stage 3 `AlignedAlgebra` "L ratio = 100 / 0.1 = 1000 → R ratio = √1000 ≈ 32" (boxed), tag "same T: R ∝ √L".

### 11. a way to remember
> Here's a way to remember the diagram. Up is power, left is hot. Top right is huge, bottom left is **tiny**.

Visual: on "Up is power" an arrow ↑ "L"; on "left is hot" an arrow ← "T"; on "Top right is huge" the giants pulse; on "tiny" the white dwarfs pulse and the handwritten line writes large: "Up is power, left is hot. Top right is huge, bottom left is tiny." Hold about 2 seconds.

### 12. attempt 1 (countdown, 10 seconds)
> Your turn. Star A and star B both have a surface temperature of five thousand kelvin. Star A's luminosity is zero point five solar luminosities, and star B's is four hundred and fifty. Calculate the ratio of their radii, and identify the type of star B. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "Star A and Star B both have a surface temperature of 5000 K. Star A has a luminosity of 0.5 L☉ and Star B has a luminosity of 450 L☉. (a) Calculate the ratio of the radius of Star B to the radius of Star A. (b) Identify the type of star B, with a reason. (3 marks)" The HR axes small beside the card, with no points. The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 1 (brief)
> Same temperature, so the ratio of the areas is the ratio of the luminosities, four fifty over zero point five, nine hundred. The radius ratio is the square root, **thirty**. Star B is cool and very luminous, far above the main sequence, so it's a **giant**. The slip is giving nine hundred as the radius **ratio**.

Visual: card shrinks to the top; "both ... 5000 K", "0.5 L☉" and "450 L☉" underline. On "nine hundred" "L_B / L_A = 450 / 0.5 = 900 = area ratio". On "thirty" "R_B / R_A = √900 = 30" (boxed). On "giant" both points on the small axes: A on the main sequence, B far above it, tag "B: giant (orange, class K)". On "ratio" (last) a chip "R_B / R_A = 900" fades in and is crossed (caption "R ∝ √L at the same T"). Hold about 1 second.

### 14. attempt 2 (countdown, 10 seconds)
> Last one. Star P appears much brighter in the night sky than star Q. A student says star P must be higher on the HR diagram. Evaluate the student's claim. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Star P appears much brighter in the night sky than Star Q. A student claims: 'Star P must be higher on the Hertzsprung-Russell diagram than Star Q.' Evaluate this claim. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 15. feedback 2 (brief)
> The HR diagram plots luminosity, the star's true power. Apparent brightness also depends on distance, falling with distance **squared**. So star P might just be much closer. The Sun is the brightest star in our sky, yet it sits in the middle of the main sequence. The claim only works if both stars are the same distance **away**. The slip is treating brighter in the sky as more **luminous**.

Visual: card shrinks to the top; "appears much brighter" and "higher on the Hertzsprung-Russell diagram" underline. On "squared" chip "apparent brightness ∝ L/d²". On "might just be much closer" two stars: P near with a big glow ring and a short luminosity bar, Q far with a small glow ring and a tall bar. On "The Sun is the brightest star in our sky" the Sun's point on the small axes, mid-sequence. On "away" tag "valid only at equal distances (for example, stars in one cluster)". On "luminous" a chip "brighter in the sky = more luminous" fades in and is crossed. Hold about 1 second.

### 16. handoff
> So the HR diagram turns two measurements into a star's temperature, colour, luminosity, size and stage. And it shows that most stars are on the main sequence, fusing hydrogen into helium. But why does joining light nuclei release energy at all? So why do main-sequence stars release energy by combining light **nuclei**?

Visual: board clears (camera change) to the full HR diagram with every region labelled. On "temperature, colour, luminosity, size and stage" five small tags appear around the diagram, each pointing at the feature that gives it (x-axis, colour band, y-axis, radius line, region). On "most stars are on the main sequence" the band glows; the other regions dim. On "fusing hydrogen into helium" the Sun's point opens into a small round inset of its core: four rose "¹H" discs and one "⁴He" (two rose, two grey) with a dashed arrow between them, and a "?" over the arrow, tag "energy?". On "nuclei" the chip "Next: why do main-sequence stars release energy by combining light nuclei?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 17. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Luminosity L: total power a star emits (L☉ = 3.8 × 10²⁶ W). Apparent brightness: how bright it looks, which falls with distance squared. The HR diagram plots luminosity.
2. HR axes: luminosity (log scale) against surface temperature, increasing to the left (O on the left, M on the right; blue to red).
3. Main sequence: about 90% of stars, core hydrogen fusion; mass increases towards the top left. The Sun: 5800 K, 1 L☉.
4. At the same temperature, L ∝ R², so R ratio = √(L ratio) (100 × L → 10 × R). Top right: giants and supergiants (cool, luminous, huge). Bottom left: white dwarfs (hot, dim, Earth-sized).
5. Region gives stage: main sequence → giant → white dwarf (Sun-like star).

Memory aid (large, on the notes screen): *Up is power, left is hot. Top right is huge, bottom left is tiny.*

## Teaching checks

- **Does it explain causes?** Why plot luminosity: brightness depends on distance (2). Why temperature runs left: it follows the classes (3). Why most stars are on the main sequence: it is most of a star's life (4, 9). Why giants are huge and white dwarfs tiny: power per square metre is set by temperature, so luminosity at a given temperature measures area (5 to 7).
- **Misconceptions addressed:** bright in the sky means luminous or close (2, 15 crossed); hotter on the right (3); 100 × L means 100 × R (5, 13 crossed); stars scatter randomly (4).
- **One idea at a time:** brightness (2), axes (3), main sequence (4), area rule (5), giants (6), white dwarfs (7), radius lines (8), stages (9), worked reading (10).
- **Video makes it easier:** glow rings against luminosity bars (2); the reversed axis drawing with its arrow (3); points settling into the band (4); the tiles on equal-temperature discs (5); Betelgeuse over the planets' orbits (6); Sirius B beside Earth (7); the diagonal radius lines (8); the stage arrow (9).
- **Response opportunity:** one prediction (3 s) and two unseen HSC-style tasks with every condition visible, 10 s each; nothing answer-bearing. One crossed mistake each; feedback about 24 s and 30 s.
- **Avoided double teaching:** spectral classes and temperature (v03), emission rising with temperature (m7-v09), inverse square law (Year 11) recalled in a clause.
- **Syllabus coverage:** `P8-IQ1-06`: using the HR diagram to determine luminosity (2, 3, 10), surface temperature and colour (3, 10), characteristics (radius, mass along the main sequence) (4 to 8, 10, 12, 13) and evolutionary stage (4, 9); with the brightness-luminosity distinction (2, 14, 15).
- **Out of scope by design:** mass-luminosity and lifetime laws, cluster turn-off ages, spectroscopic parallax, T⁴ calculations (site extension; open decision 1); mechanisms of post-main-sequence evolution (v06).

## Practice questions and model answers

**Attempt 1 (scene 12; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "Star A and Star B both have a surface temperature of 5000 K. Star A has a luminosity of 0.5 L☉ and Star B has a luminosity of 450 L☉. (a) Calculate the ratio of the radius of Star B to the radius of Star A. (b) Identify the type of star B, with a reason."
Model answer: (a) At the same temperature each square metre emits the same power, so L ∝ surface area ∝ R². L_B/L_A = 450/0.5 = 900, so R_B/R_A = √900 = 30. (b) Star B is a giant: at 5000 K (class K, orange) it is about 900 times more luminous than a main-sequence star of that temperature, placing it above and to the right of the main sequence, and its radius is 30 times larger. Classic mistake (crossed): R_B/R_A = 900.

**Attempt 2 (scene 14; original wording, HSC style, 3 marks).** "Star P appears much brighter in the night sky than Star Q. A student claims: 'Star P must be higher on the Hertzsprung-Russell diagram than Star Q.' Evaluate this claim."
Model answer: The vertical axis of the HR diagram is luminosity, the total power a star emits, which is intrinsic. Apparent brightness depends on luminosity and on distance (it falls with the square of the distance), so Star P may simply be much closer than Star Q. For example, the Sun is the brightest star in our sky but lies in the middle of the main sequence, while distant supergiants appear faint but sit near the top. The claim is invalid; it would only hold if both stars were at the same distance. Classic mistake (crossed): "brighter in the sky means more luminous".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Sun (IAU 2015; site) | L☉ = 3.828 × 10²⁶ W (site 3.83 × 10²⁶, screen 3.8 × 10²⁶); T = 5772 K (site and screen 5800 K) | 2, 4 |
| Proxima Centauri | 4.25 ly; L ≈ 0.0016 L☉ (screen 0.002); 3040 K | 2, 4 |
| Rigel | about 860 ly (264 pc × 3.26 = 861 ly); L ≈ 10⁵ L☉; 12 100 K | 2 |
| Axes | L 10⁻⁴ to 10⁶ L☉; T 40 000 to 2500 K | 3 |
| Same-temperature rule | 100 → √100 = 10 | 5 |
| Betelgeuse | ~3600 K; ~10⁵ L☉; ~764 R☉ = 3.55 AU (Mars 1.52 AU) | 6 |
| Two red stars | 3500 K; 0.01 and 10⁴ L☉: R = 0.27 and 272 R☉; ratio √10⁶ = 1000 | 1, 6 |
| Aldebaran (point) | 3900 K; 440 L☉ | 6 |
| Sirius A and B | A: 9940 K, 25 L☉. B: ~25 000 K; R = 0.0084 R☉ = 5844 km (R☉ = 695 700 km); L from R and T = 0.025 L☉ (screen ~0.03); Earth 6371 km | 7 |
| Cool-surface factor (author note a) | (3500/5800)⁴ = 0.13 | 6 (qualitative) |
| Worked reading | 4000 K → K; MS at 4000 K ≈ 0.1 L☉; 100/0.1 = 1000; √1000 = 31.6 ≈ 32 | 10 |
| A1 | 450/0.5 = 900; √900 = 30; slip 900 | 12, 13 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov, `numbers.py` in the session scratchpad); Codex to re-check.

- √100 = 10; √10⁶ = 1000; √(100/0.1) = 31.6; √(450/0.5) = 30.
- √0.01 × (5772/3500)² = 0.272; √10⁴ × (5772/3500)² = 272.
- 0.0084² × (25 000/5772)⁴ = 0.0248; 0.0084 × 695 700 = 5844 km.
- 764 / 215.03 = 3.55 AU.
- 264 × 3.2616 = 861 ly.
- (3500/5800)⁴ = 0.133.

## Memory aid check

- **"Up is power, left is hot. Top right is huge, bottom left is tiny."** Meaning, as said in scene 11: the vertical axis is luminosity (power), the horizontal axis increases in temperature to the left; stars at the top right (cool and luminous) are the largest, those at the bottom left (hot and dim) are the smallest, following the diagonal radius lines. Assumptions checked: "power" is luminosity, not apparent brightness (scene 2 and A2 guard this); "huge" and "tiny" follow from L ∝ R²T⁴ along the diagonals, so "top right" means relative to the radius lines, which run from top left to bottom right (scene 8); the aid says nothing about mass or age. It helps a new case: A1 (star B above the band is bigger) and any "identify the region" question. Introduced after the explanation (2 to 8).
- **Considered, not used:** the site's "temperature increases to the left" alone (one half of the aid); "OBAFGKM across the top" (v03 covered the classes).

## Narration length estimate

Revision 1 count (6 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **6,083 characters**, 17 scenes. Characters per scene (1 to 17): 404, 589, 529, 532, 457, 445, 337, 209, 469, 468, 103, 275, 302, 176, 381, 316, 75. At 13.3 characters per second the speech is about 457 s; add about 3 s for the prediction countdown, 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 55 s more of the quiet notes hold (about 84 s of holds and countdowns): **about 541 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 3's naming sentence; scene 2's Proxima sentence; scene 9's middle sentence.

## Opening frame

v03's final frame (`phys-y12-m8-v03.md`, "Final frame"): paper background; heading "How can spectra classify stars and reveal their temperature?"; two small tags "λ_max → T" and "lines → T, class"; faint empty axes behind (x "temperature (K)" from 30 000 at the left to 3000 at the right, y "luminosity" log scale, no points); two copies of `y12p-star-cool-red-v1.png`, small at the left and much larger at the right, each above an identical M-class strip with titanium oxide bands, tags "class M, about 3500 K"; luminosity bars "1" and "about 10⁶" with "?"; a crossed chip "same spectrum → same star?"; chip "Next: how does the HR diagram distinguish brightness, temperature and stellar stage?". Scene 1 keeps the stars, strips and bars, fades the two tags and the crossed chip, darkens the axes and turns the chip into the heading. Scene 3 redraws the axes at full size with the 40 000 to 2500 K range.

## Final frame

The last explained frame (end of scene 16, before the key-notes board): paper background; heading "How does the HR diagram distinguish brightness, temperature and stellar stage?"; the full coded HR diagram at the centre-right (y "luminosity (L☉)" 10⁻⁴ to 10⁶, x "surface temperature (K)" 40 000 at the left to 2500 at the right, O to M letters and a colour band along the top), with the main-sequence band glowing pale amber and the giant, supergiant and white-dwarf regions dimmed but labelled; five small tags round the diagram ("temperature", "colour", "luminosity", "size", "stage"); from the Sun's point (5800 K, 1 L☉) a small round inset of its core: four rose "¹H" discs and one "⁴He" nucleus (two rose, two grey discs) with a dashed arrow from the four to the one and a "?" over the arrow, tag "energy?"; chip "Next: why do main-sequence stars release energy by combining light nuclei?". v05 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m8-v04` (route phys-y12-m8-v04). Suggested explainer folder `src/explainer/lessons/phys-y12-m8-v04` and build folder `docs/production/claude-pm/lessons/p-y12-m8-v04` (root to confirm).

In order (kebab-case; 17 scene headings, all `### N.`): hook, luminosity-brightness, axes, main-sequence, area-rule, giants, white-dwarfs, radius-lines, stages, worked-reading, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff-v05, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Scene 1 is `explain` with a 3 s prediction countdown. `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: brightness against luminosity, HR plot build, area patches, radius lines, orbit overlay, conceptual stage path, `m8-hr-diagram`, `AlignedAlgebra`, `NumberTicker`, `PenArrow`, `Countdown`, `CameraStage`. Transitions (`pickTransition`): 1 to 2 clear change; 2 to 3 clear change to the diagram; 3 to 4 camera continue; 4 to 5 camera continue (diagram shrinks); 5 to 6 camera continue; 6 to 7 camera continue; 7 to 8 camera continue; 8 to 9 camera continue; 9 to 10 camera continue with working panel; 10 to 11 camera continue; attempts and feedback card shrink to the top; 15 to 16 clear change; 16 to 17 fade to the notes board.

Holds: hook (3 s countdown), memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 60 s). Review evidence paths: `learning_review` = `checks/p-y12-m8-v04-learning-review.md`, `science_check` = `checks/p-y12-m8-v04-physics-check.md`.

## Assets

Have or requested earlier (scaled uniformly only, never stretched; sizes on screen are schematic size cues, never plotted data):
- `public/assets/physics/phys-y11-sun-v1.png` (1254 × 1254, RGBA): 2, 4.
- `y12p-star-cool-red-v1.png`, `y12p-star-hot-blue-v1.png` (m7-v04) and `y12p-star-white-v1.png` (v03): 1, 2, 6, 7.

Need: no new plates.

Coded: the HR diagram (axes, points, band, regions, colour band, class letters, radius lines, stage arrow), glow rings and luminosity bars, square-metre tiles and discs, orbit overlay, Earth disc, core inset with nuclei, calculation strips, crossed chips, countdowns, key notes board.

Kit gaps (for the v04 build brief):
1. **HR plot build.** The `m8-hr-diagram` axes with a log luminosity axis, reversed log temperature axis, class letters and colour band; points placed from (T, L) values; region outlines; radius lines computed from L ∝ R²T⁴.
2. **Brightness against luminosity.** Glow rings scaled by L/d² beside fixed luminosity bars.
3. **Area patches.** Discs tiled with equal-power squares, scaling with radius.
4. **Orbit overlay.** Concentric planetary orbits with a star radius drawn over them to scale.

## Codex asset brief

No new plates. Before build, place the four star plates on one contact sheet at the sizes used and confirm they share a painting style and clean alpha edges; if `y12p-star-white-v1.png` (v03) is not made, use the hot-blue plate with a white tint.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text and attempts against the "Numbers used" table and the cited star data.
2. Confirm the physics of every learner-visible claim: luminosity and apparent brightness definitions and the inverse square law; the axes (log luminosity; temperature increasing to the left); about 90% on the main sequence; core hydrogen fusion; mass along the band; the same-temperature area rule and R ∝ √L; giants and white dwarfs; Betelgeuse beyond Mars's orbit (author note b); Sirius B smaller than Earth (author note c); Proxima and Rigel claims (author note d); radius lines direction; stages and the conceptual path.
3. Confirm the memory aid's assumptions (see "Memory aid check").
4. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
5. Confirm both attempt cards are original in wording, carry every condition and show nothing answer-bearing.
6. Confirm the syllabus quote matches the route JSON exactly and is labelled 2017.
7. Confirm no person, hand, face or body outline is drawn or requested.
8. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
9. Confirm the narration character count and per-scene counts by script with the build parser rules.
10. Report site notes 13 and 14 under Decisions to root.

## YouTube metadata (draft)

Title: The Hertzsprung-Russell Diagram: Luminosity, Temperature, Size and Stage | HSC Physics Module 8

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module8/lesson08.sa.html

Two stars with the same spectrum can differ a millionfold in power. Learn why the HR diagram plots luminosity, not apparent brightness; why temperature runs backwards along the bottom; what the main sequence, giants, supergiants and white dwarfs are; how to compare radii at the same temperature (100 times the luminosity means 10 times the radius); and how a star's region gives its stage of life. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 8: From the Universe to the Atom.
Syllabus content (NSW Physics Stage 6, 2017):
"investigate the Hertzsprung-Russell diagram and how it can be used to determine the following about a star: characteristics and evolutionary stage; surface temperature; colour; luminosity"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: stellar spectra and spectral classes. Next: fusion in main-sequence stars.

#HSCPhysics #Physics #HRDiagram #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v03; check that luminosity and apparent brightness are kept apart throughout; that the reversed axis is earned, not just stated; that the area rule is clear without T⁴ (open decision 1); that the stage path does not pre-empt v06 (open decision 3)), then the physics check and the Codex error check.
- The glow rings against bars, the tiles on discs, Betelgeuse over the orbits and the diagonal radius lines carry the explanation; judge them at playback speed in the voiced preview.
