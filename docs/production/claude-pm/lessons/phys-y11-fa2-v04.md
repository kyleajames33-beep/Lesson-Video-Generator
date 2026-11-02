# Year 11 Physics FA2 V04 (Physics 2025, Year 11, Focus Area 2): How do squeezed and stretched regions let us measure a longitudinal wave? (design)

Status: Revision 1 (2 Nov). Needs independent student learning review (key `p-y11-fa2-v04`, `docs/production/student-learning-review.md`), a Codex physics check and a Codex error check before build. Voice: Google AI Studio after the brief 124 pilot; physics follows Year 12 Maths and Year 11 Biology in the voicing queue. Nothing recorded; human listening pending. Plates: two new plates (loudspeaker body and cone, reused in FA2 sound videos); v01's wave driver and signal generator reused.

Narration 5,882 characters, 16 scenes, about 542 s (9.0 minutes) including two 3 s prediction countdowns, two 10 s attempt countdowns and the notes hold, counted by script with the build parser rules (see "Narration length estimate").

Scope: fourth video of the Year 11 Physics (2025) Focus Area 2 route and the second describing video (v03 described transverse waves). Templates: `phys-y11-fa1-v22.md` (concept format, section list); house conventions, the FA2 colour key and the measuring method from `phys-y11-fa2-v01.md` to `phys-y11-fa2-v03.md` (Revision 1, written just before this one; v03's scene 15 frame is this video's first frame). No pre-design pack exists: the pack work is done in this file. Site lesson read in full (2 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa2-waves/lesson03.sa.html` (orient, intentions and key terms, card 1 compressions and rarefactions, card 2 wavelength, frequency and period with `we-1`, activity 1 translation table, card 3 amplitude, independent practice, retrieve). Route entry: `phys-y11-fa2-v04` in `../../phys-y11-video-route.json` (proposed). Route start: "Start with Describing Longitudinal Waves. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions." Route stop: "Stop after the learner can answer: How can I explain and apply describing longitudinal waves? Teach only the listed actions; the next video owns its separate question." Next (route, placeholder wording): "phys-y11-fa2-v05: How can I explain and apply the wave equation?" (the handoff chip uses a proposed causal form, "How are a wave's speed, frequency and wavelength linked?", open decision 1).

Owner rules applied: as v01 to v03 (2025 syllabus only; no people, hands or faces: the spring is pushed by v01's wave driver and the air by a painted loudspeaker, both moved by code; apparatus painted at native aspect; the spring, air particles, brackets, density strip, counters and timers coded; one reasoning stage at a time; 3 s in-teaching predictions; "Pause here to answer." with a 10 s countdown and the full worded question; brief feedback with one crossed mistake; original questions; key-notes hold; Australian spelling; no em dashes; v01 and v03 recalled in a sentence each).

Syllabus content point (Physics 11-12 (2025), Year 11, Focus Area 2, group "Wave properties"; local ledger ID with NESA content-system codename), quoted from the route JSON `syllabusActions`:

- P25-FA2-G1-03 `cia7399b4b`: "Describe the wavelength, frequency, period, compression, rarefaction and amplitude of longitudinal waves"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa307d399c

**Boundary:** starts from v03's handoff (the wave driver pushing a long spring along its length, a steady longitudinal wave of slate squeezed and pale stretched regions; chips "crest?", "trough?", "wavelength?"; "Next: How do squeezed and stretched regions let us measure a longitudinal wave?"); compression and rarefaction named and explained (particles displaced towards or away from each other); the regions travel while particles oscillate; wavelength between matching regions (compression to compression); frequency and period with v03's meanings, counted with compressions; amplitude as a particle's largest displacement along the line (not a region's width), with its effect on how crowded the compressions are; the crest and compression match only on a pressure (or density) picture; a loudspeaker in air (site Q2 numbers); two attempts. Not taught: v = fλ and problems (v05); displacement-time and displacement-distance graphs, including where compressions sit on a displacement graph (v06, v07; one grey tag only); how sound transfers energy and the medium requirement (v09); pitch and loudness relations (v10, v11; loudness is named once as what a bigger amplitude sounds like).

## Decisions

- **Learner question (route placeholder rewritten; recorded here).** The route's "How can I explain and apply describing longitudinal waves?" is a placeholder. Rewritten as v03's handoff chip: "How do squeezed and stretched regions let us measure a longitudinal wave?" The answer, built in order: compressions and rarefactions are where particles are squeezed together and spread apart (2); they form where neighbours are displaced towards or away from each other, and they travel while the particles only oscillate (3); one wavelength runs from a compression to the next compression (4); frequency and period count compressions, with v03's meanings (5); amplitude is a particle's largest displacement along the line, and a bigger amplitude crowds the compressions more (6, 7); a compression matches a crest only on a picture of pressure (8); a loudspeaker in air (9).
- **The hook (site hook, made a prediction).** "No crests, no troughs. So where is one wavelength in this pattern?" 3 s prediction with three options on the frozen spring: "the width of one squeezed region?", "from a squeezed region to the next stretched one?", "from a squeezed region to the next squeezed one?". Answered in 4.
- **The cause made visible (owner quality bar).** (2) The spring and a row of coded air particles side by side, each particle above a grey home tick, so crowding is seen against rest spacing. (3) Freeze-and-step: three neighbouring particles' small displacement arrows (teal) point towards each other in a compression and away from each other in a rarefaction; one marked particle (purple) is followed as a compression and then a rarefaction pass over it, while the slate region moves on. (6, 7) The driver's swing doubles from 1.0 cm to 2.0 cm each way, and the compressions visibly darken and narrow while the rarefactions empty, with the marked particle's teal bracket doubling. (8) A density strip (darker where crowded) slides under the particles, and a pressure band is drawn above it: its peaks line up with compressions; a crossed ghost of the particles bent into a sideways wave.
- **Values.** Spring demonstration (coded, not site): the driver at 2.0 Hz with a 2.0 cm swing; compressions centred at 0.50 m, 1.50 m and 2.50 m: λ = 1.00 m; T = 0.50 s (author note a). Loudspeaker (site Q2, unchanged): compressions 0.68 m apart; the cone makes 500 oscillations each second: λ = 0.68 m, f = 500 Hz, T = 1/500 s = 0.0020 s (2.0 ms). The surprise in 7 (air particles in ordinary conversation move less than a ten-thousandth of a millimetre) is checked in author note e.
- **Site `we-1` not used (site correction 1).** Its numbers (compressions 0.40 m apart, 170 passing each second, in "a sound wave travelling along a tube") give a speed of 68 m s⁻¹, far below sound in air (about 340 m s⁻¹) or any gas at room temperature. Using it would teach a wrong picture of sound once v05 is taught. The site's Q2 (0.68 m, 500 Hz: 340 m s⁻¹) is used instead as the worked example.
- **Prediction 2 (3 s, scene 6).** "Make the driver swing twice as far, at the same frequency. What happens to the squeezed regions?" They get more crowded (and the stretched regions emptier); the wavelength and frequency stay the same (7).
- **The crest and compression match (site card 1, qualified; site correction 2).** Said: "on a picture of pressure, a compression is a peak, like a crest". Not said: that a compression is a crest of the particles' displacement (on a displacement-distance graph, compressions sit where the displacement is zero; v07 owns that, one grey tag). The site's activity 1 translation table is kept with this qualifier.
- **Amplitude and energy (site card 3, with its condition).** "At the same frequency, a bigger amplitude crowds the compressions more and carries more energy; for sound, we hear it as louder." The loudness link is named only (v10 investigates it).
- **Attempts (original, HSC style).** (A1) A diagram of particles in a longitudinal wave against a metre ruler, compressions centred at 0.20 m, 1.00 m and 1.80 m; each particle moves at most 3.0 mm from its rest position. Wavelength 0.80 m; compression to the next rarefaction 0.40 m; amplitude 3.0 mm. Crossed: "λ = 0.40 m (compression to rarefaction)". (A2) A loudspeaker cone vibrates 250 times each second; each air particle moves at most 0.0010 mm from its rest position. f = 250 Hz; T = 1/250 s = 0.0040 s; A = 0.0010 mm; each particle oscillates back and forth along the line from the speaker to the listener about its rest position, while compressions, rarefactions and energy travel. Crossed: "the air travels from the speaker to the listener".
- **Mistake scene:** none separate. "A compression is particles piling up and travelling" (3, crossed; site misconception 1); "the wavelength is the width of a compression" (1, 4; site misconception 2); "compression to rarefaction is a wavelength" (4, feedback 1 crossed); "amplitude is the width of a compression" (6, 7); "a longitudinal wave is wave-shaped sideways" (8, crossed; site Q3); "the air travels to the listener" (feedback 2 crossed).
- **Memory aid:** "Squeeze to squeeze is one wavelength." (see "Memory aid check").
- **Handoff (route next; open decision 1).** The v03 cord (transverse) above the spring (longitudinal), both driven at 2.0 Hz; a glowing leading crest and a glowing leading compression each move on exactly one wavelength while their driver makes one cycle; chips "one wavelength each period", "speed?"; then "Next: How are a wave's speed, frequency and wavelength linked?". This is the frame v05 opens on.
- **Site sources used:** intro and hook (no crests to point at; freeze a sound wave: scene 1); warm-up (what plays the role of a crest: 1, 8); key terms (compression, rarefaction, wavelength, amplitude: 2, 4, 6, 7); misconceptions 1 and 2 (3, 4); card 1 and its check (2, 3, 8); card 2 (wavelength between compressions; frequency as compressions per second; T = 1/f: 4, 5); quick check (4); activity 1 (translation table: 8, key notes); the two-truths task (the period as one particle's full oscillation: 5); card 3 and its check (amplitude, crowding, energy, loudness: 6, 7); short-answer Q2 (the loudspeaker: 9); Q3 (the correspondence can mislead: 8). Not used: `we-1` (site correction 1); Q1 (definitions only; covered by the key notes).
- **Site corrections (quoted from site lesson 3, read 2 Nov; for `../site-corrections-phys-y11.md`; not logged yet):**
  1. Card 2, `we-1`: "In a sound wave travelling along a tube, successive compressions are $0.40\ \text{m}$ apart, and $170$ compressions pass a point each second." With v = fλ these give 0.40 × 170 = 68 m s⁻¹, far below the speed of sound in air (about 340 m s⁻¹ at room temperature) or in any common gas; the answer's check ("a short period (≈6 ms) is sensible for a 170 Hz sound") does not catch it. Suggest "successive compressions are 2.0 m apart, and 170 compressions pass a point each second" (340 m s⁻¹; T = 5.9 × 10⁻³ s unchanged) or "0.40 m apart, and 850 pass each second".
  2. Card 1: "These regions move along with the wave; a compression is the longitudinal equivalent of a crest, and a rarefaction the equivalent of a trough." The key statement repeats it, and the learning intentions say "compressions are the longitudinal 'crests'". The match holds on a graph of pressure or density against position, but not on a graph of particle displacement against position, where compressions and rarefactions sit at zero displacement; the unqualified statement sets up the classic error in L06's displacement-distance graphs. The site's own Q3 model answer gives the right qualifier. Suggest: "On a graph of pressure (or particle density) against position, a compression appears as a peak, like a crest, and a rarefaction as a trough."
  3. Card 3: "A larger amplitude means particles are pushed further, so compressions are denser (higher pressure) and rarefactions sparser, and the wave carries more energy." True for waves of the same frequency in the same medium (the crowding depends on displacement amplitude divided by wavelength). Suggest adding "at the same frequency".
  - Checked and correct: card 1 (crowded, high pressure; spread, low pressure; regions move, particles oscillate); the check (true); card 2's definitions; quick check (B); two truths and a lie (C is the lie); card 3's check (true); Q1 and Q2 model answers (0.68 m; 500 Hz; the particle oscillates parallel to the direction of travel about a fixed rest position); Q3 model answer.
- **Cause chain taught, in order:** (1) no crests, so where is a wavelength? (1); (2) squeezed and stretched regions, against the rest spacing (2); (3) they form where neighbours are displaced towards or away from each other, and the region moves on while each particle oscillates (3); (4) matching regions: compression to compression is one wavelength (4); (5) frequency and period count compressions; one particle's full oscillation takes one period (5); (6, 7) amplitude is a particle's largest displacement; a bigger swing crowds compressions more and carries more energy, while λ and f stay (6, 7); (8) a compression is a crest only on a pressure picture (8); (9) the loudspeaker in air (9); (10) memory aid (10).
- **Entry knowledge (route `entryKnowledge`):** Stage 5 (sound is a vibration; reading a ruler). From FA2, recalled in a line each: v01 (longitudinal: particles oscillate along the energy's direction; squeezed and stretched regions named), v03 (wavelength match to match; frequency counted at a point; period; f = 1/T; amplitude from the rest position).
- **Learner-visible vocabulary (plain meaning at first use):** compression (a region where particles are squeezed closer together than at rest, so the pressure is higher, scene 2); rarefaction (a region where particles are spread further apart than at rest, so the pressure is lower, scene 2); rest spacing (the gap between particles with no wave, scene 2); pressure (how hard the particles push on their surroundings; higher where they are crowded, scene 2); density (how crowded the particles are, scene 8); amplitude, wavelength, frequency, period (recalled from v03 with the longitudinal meanings, scenes 4 to 7).
- **Legacy logic ported:** none. Drawing parts only: `Arrow`, `Label`, `Panel` (`course-kit.tsx`).
- **New explainer motion (coded unless a plate is named):** **`LongitudinalRow`** (new, physics: N particles displaced s(x, t) = A sin(kx − ωt) along the line, each above a grey home tick; compressions shaded slate and rarefactions pale, computed from the local spacing; region labels that ride with the pattern; per-particle teal displacement arrows in freeze mode; a marked particle with its own bracket and trail; a centre marker at each compression and rarefaction; a ruler overlay; a watch-point gate with a counter and a timer; drawn as dots (air) or as v01's coded spring); **density strip** (a band under the row, darker where crowded) and **pressure band** (a smooth curve above it, its peaks at the compressions; labelled "pressure", not "displacement"); v03's **`WaveString`** for the handoff; the loudspeaker plates with the cone moved by code at the stated frequency; `AlignedAlgebra`; `Countdown` (3 s, 10 s); `QuestionCard` (subject "Physics") with a coded particle diagram and ruler; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout (constant):** heading top-left; the source (driver or loudspeaker) at the left; the spring or particle row across the middle third; the density strip and pressure band directly beneath when shown; counters, timers and working in the lower third.
- **Colour key:** v01's FA2 key; compressions slate, rarefactions pale (as v01 to v03); particle displacement arrows and the amplitude bracket teal; the wavelength bracket navy (v03); the marked particle purple; the pressure band dark grey with the label "pressure" (not teal, so it is never read as a displacement); crossed items muted red.
- **No human figures.**
- **Author notes (not learner copy):**
  (a) Spring wave (coded): driver 2.0 Hz, swing 2.0 cm each way (1.0 cm in the "smaller" ghost of scene 7), λ = 1.00 m, so the wave speed is 2.0 m s⁻¹ (not stated; v05). Compressions frozen at 0.50, 1.50, 2.50 m; rarefactions at 1.00 m and 2.00 m. On screen 3.0 m of spring with about 60 coils; displacements drawn true to the horizontal scale (no exaggeration needed: 2.0 cm swing against 5 cm coil spacing is visible). Slow motion 0.25 × with tag.
  (b) Air row (coded): 40 dots, drawn displacement exaggerated (tag "motion exaggerated"), because real air particle displacements are tiny (author note e).
  (c) Where compressions sit: for s(x, t) = A sin(kx − ωt), the density excess is proportional to −∂s/∂x, so compressions are where the displacement passes through zero with a negative slope in x (particles on either side displaced towards that point). The density strip and pressure band are computed from this, never from s itself. v07 owns the displacement-graph picture.
  (d) Crowding with amplitude (scene 7): at fixed wavelength the fractional density change is proportional to kA, so doubling A doubles the crowding; said as "more crowded", with the condition "same frequency" (on the same spring, the same frequency means the same wavelength).
  (e) The surprise (scene 7): for a sound intensity of 1 × 10⁻⁶ W m⁻² (60 dB, ordinary conversation at about 1 m) in air (ρ = 1.2 kg m⁻³, v = 343 m s⁻¹), the displacement amplitude s = √(2I ÷ (ρvω²)) is 2.2 × 10⁻⁸ m at 500 Hz and 1.1 × 10⁻⁸ m at 1000 Hz, that is about 0.00002 mm, well under a ten-thousandth of a millimetre (0.0001 mm). Said: "less than a ten-thousandth of a millimetre". The air particles' random thermal motion (about 500 m s⁻¹) is not mentioned here (v02 mentioned it once).
  (f) Loudspeaker (site Q2): 0.68 × 500 = 340 m s⁻¹ (consistent with air; not stated); T = 1 ÷ 500 = 0.0020 s.
  (g) A1: 1.00 − 0.20 = 0.80 m; 1.80 − 1.00 = 0.80 m; compression to next rarefaction λ ÷ 2 = 0.40 m; amplitude 3.0 mm (the particle moves 3.0 mm either way: the card says "at most 3.0 mm from its rest position").
  (h) A2: T = 1 ÷ 250 = 0.0040 s = 4.0 ms; A = 0.0010 mm (1.0 × 10⁻⁶ m). Plausibility: at 250 Hz this displacement gives an intensity of about 5 × 10⁻⁴ W m⁻² (about 87 dB): a loud sound, physically reasonable.
  (i) Pronunciations: "rarefaction" (RAIR-uh-FAK-shun); "five hundred hertz"; "zero point zero zero two oh seconds, two milliseconds"; "zero point zero zero one oh millimetres".

Main question: *A longitudinal wave has no crests or troughs to point at. How do squeezed and stretched regions let us measure its wavelength, frequency, period and amplitude?*
Entry knowledge (Stage 5 sound as vibration; v01 longitudinal waves; v03's measurements of a transverse wave).
Stops after: compression and rarefaction, how they form and why they travel; wavelength compression to compression; frequency and period counted with compressions; amplitude as a particle's largest displacement, and its effect on crowding; the crest match only on a pressure picture; the loudspeaker in air. No v = fλ, no graphs, no sound energy, no pitch or loudness relations.
Handoff: v05, the wave equation.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key as Decisions.

### 1. hook (where is the wavelength?)
> Last time, we measured a wave on a cord, from crest to crest. Now the driver pushes and pulls a spring along its length. There are no crests and no troughs, just squeezed and stretched regions moving along. So where is one **wavelength** in this pattern?

Visual: opens on v03's last frame (the driver pushing a long coiled spring along its length; slate squeezed and pale stretched regions moving right; chips "crest?", "trough?", "wavelength?"; the "Next" chip). The chip becomes the heading: "Measuring a longitudinal wave". The spring freezes. On "wavelength" three dashed spans appear on the frozen spring with chips: "width of one squeezed region?", "squeezed to the next stretched?", "squeezed to the next squeezed?", and a 3-second countdown ring.

### 2. compressions and rarefactions
> First, the names. A region where the particles are squeezed closer together than usual is called a **compression**. A region where they're spread further apart than usual is a **rarefaction**. In air, the particles are molecules. In a compression they're crowded, so they push harder on their surroundings, and the pressure is higher. In a rarefaction, the pressure is lower. So a sound wave is a moving pattern of higher and lower **pressure**.

Visual: the spring runs again (tag "slowed down"); under it a row of 40 coded air particles (dots) driven at the same rate (tag "air particles, motion exaggerated"), each above a grey home tick spaced evenly (label "rest spacing"). On "compression" one slate region gains the label "compression: squeezed closer than at rest", on the spring and on the dots. On "rarefaction" a pale region gains "rarefaction: spread further apart than at rest". On "pressure" small chips ride with the regions: "higher pressure" on compressions, "lower pressure" on rarefactions (gloss "pressure: how hard the particles push on their surroundings").

### 3. why the regions form and travel
> Why do these regions form? Freeze the wave, and look at each particle's displacement, how far it's moved from home. In a compression, the particles on either side have moved towards each other, so they bunch up. In a rarefaction, they've moved away from each other, so there's a gap. Now let the wave run, and follow one particle. A compression reaches it, then a rarefaction, and it moves forward, then back. The regions travel on along the spring, but the particle stays near home. A compression isn't a pile of particles moving along. It's a pattern that passes **through** them.

Visual: freeze. Small teal arrows from each dot's home tick to the dot (gloss "displacement: how far it has moved from home"); around a compression the arrows on the left point right and those on the right point left, converging (ring, label "moved towards each other"); around a rarefaction they diverge ("moved away"). The wave runs (tag "slowed down"); one dot turns purple and gets a short trail over its home tick; a slate compression slides over it (the dot moves forward), then a pale rarefaction (the dot moves back). On "travel on" a gold marker rides the compression's centre to the right while the purple dot's trail stays short. On "through" a ghost of dots bunched in a clump sliding right appears with the chip "a compression is a pile of particles moving along", and takes a scribble cross.

### 4. wavelength: compression to compression
> So where's the wavelength? Use v03's rule: measure between matching points. Here the matching points are matching regions, from the middle of one compression to the middle of the next **compression**. On the ruler, the compressions are centred at zero point five oh, one point five oh and two point five oh metres, so the wavelength is one point oh oh **metres**. Rarefaction to rarefaction gives the same length. But a compression to the next rarefaction is only half a wavelength. And it's not the width of one squeezed region, either.

Visual: freeze the spring. Centre markers drop onto each compression and rarefaction. On "compression" a navy bracket from one compression's centre to the next; the "squeezed to the next squeezed?" chip fills. On "ruler" a metre-ruler overlay; pointers at "0.50", "1.50", "2.50" m; `AlignedAlgebra` "λ = 1.50 − 0.50 = 1.00 m", on "metres" boxed "λ = 1.00 m". The navy bracket slides to rarefaction-to-rarefaction (1.00 m to 2.00 m), same length. On "half" a grey span from a compression's centre to the next rarefaction's centre, "½ λ = 0.50 m"; the "squeezed to the next stretched?" chip takes a cross. On "width" a short bracket across one slate region, crossed (caption "not a wavelength").

### 5. frequency and period
> Frequency and period mean exactly what they did for a cord. Count the compressions passing one point. The driver pushes twice a second, so two compressions pass each second, a frequency of two point oh hertz. The period is the time for one complete wave to pass, half a second. And it's also the time one particle takes for a full back and forth, forward, back and forward again to where it **started**.

Visual: the spring runs; v03's watch-point gate stands at 2.00 m with a counter and a timer; each compression's centre passing ticks the counter, 1, 2, as the timer reaches "1.00 s" (counter in real seconds under slow motion). Row "f = 2.0 Hz"; the driver's counter "2 pushes each second" joined to the gate's. Row "T = 1/f = 0.50 s". On "full back and forth" the purple coil at the gate makes one full oscillation with its own timer "0.50 s"; on "started" the timer glows beside the gate's (v03's three clocks, two shown here).

### 6. prediction: a bigger swing
> Now make the driver swing twice as far, at the same frequency. What happens to the squeezed **regions**?

Visual: the driver's rod readout changes from "swing 1.0 cm each way" to "swing 2.0 cm each way" (frozen, before the run). On "regions" chips "more crowded?", "wider apart?", "no change?" and a 3-second countdown ring.

### 7. amplitude: how far each particle moves
> They get more crowded, and the rarefactions get emptier. The amplitude of a longitudinal wave is the largest distance a particle moves from its rest position, along the line of the wave. It's not the width of a compression. Double the driver's swing, and each particle moves twice as far, so more particles crowd into each compression. The wavelength and the frequency don't change. At the same frequency, a bigger amplitude carries more energy. For sound, we hear it as louder. And here's a surprise. When you talk normally, each air particle moves less than a ten-thousandth of a millimetre, yet the energy still crosses the **room**.

Visual: the run with a 1.0 cm swing (ghost, faint) and with a 2.0 cm swing (solid) one above the other; the solid wave's compressions are darker and narrower, its rarefactions paler; the "more crowded?" chip fills. On "amplitude" the purple coil's teal bracket from its home tick to its farthest point: "A = 1.0 cm" on the ghost, "A = 2.0 cm" on the solid (gloss "amplitude A: largest distance a particle moves from its rest position, along the line"). On "not the width" a bracket across a slate region with a chip "amplitude = width of a compression", crossed. On "don't change" the navy wavelength brackets on both rows stay "1.00 m" and both gate counters read "2.0 Hz". On "louder" a small chip "bigger amplitude → louder (v10)". On "surprise" a short inset: a loudspeaker plate (`phys-y11-loudspeaker-v1.png`) with a few air dots before it, a zoom ring on one dot; readout "talking: each air particle moves < 0.0001 mm" (grey tag "about 60 dB, checked"). On "room" a hollow gold energy arrow crosses the board.

### 8. a compression is a crest only on a pressure picture
> You'll often hear that a compression is like a crest, and a rarefaction like a trough. That's true on a picture of pressure. Draw the pressure along the wave, and it peaks at every compression and dips at every **rarefaction**. But be careful. No particle in a longitudinal wave moves sideways, and the wave isn't really wave-shaped. The bumps are in the pressure, not in where the particles **are**.

Visual: the dot row frozen; a density strip slides in directly beneath (darker where crowded; gloss "density: how crowded the particles are"); above the row a dark grey pressure band draws left to right, labelled "pressure" (not "displacement"), its peaks dropping dashed lines onto the compressions' centres and its dips onto the rarefactions' (author note c). On "rarefaction" a two-column chip "transverse: crest ↔ longitudinal: compression (on a pressure picture)" and "trough ↔ rarefaction". On "careful" a ghost of the dots bent into a sideways wave shape fades in and takes a scribble cross (caption "particles never move sideways"). On "are" a small grey tag "graphs of a longitudinal wave's displacement: v07".

### 9. worked example: a loudspeaker in air
> Let's describe a real one. Task: a loudspeaker's cone moves back and forth five hundred times each second, and the compressions in the air in front of it are zero point six eight metres apart. Find the wavelength, frequency and period, and describe what one air particle does. The wavelength is compression to compression, zero point six eight **metres**. The frequency is five hundred hertz. The period is one over five hundred, zero point zero zero two oh seconds, two **milliseconds**. And each air particle oscillates back and forth along the line the sound travels, about its own rest position. It doesn't travel to your **ear**.

Visual: clear change to the calculation layout; the loudspeaker plate at the left with its cone (`phys-y11-loudspeaker-cone-v1.png`) moving back and forth (tag "slowed down"); a row of air dots before it with compressions moving right. Task strip "Describe the sound wave in front of the speaker". Givens group (navy): "cone: 500 oscillations each second; compressions 0.68 m apart" (grey tag "site practice values"). Rows, one per cue: on "metres" "λ = compression to compression = 0.68 m" with a navy bracket on two compressions; "f = 500 Hz"; on "milliseconds" "T = 1/f = 1/500 = 0.0020 s = 2.0 ms", boxed. On "ear" a purple dot's trail stays short over its home tick while a gold energy arrow continues off the right edge; row "particle: oscillates parallel to the direction of travel, about its rest position".

### 10. memory aid
> To find a longitudinal wavelength fast: squeeze to squeeze is one **wavelength**.

Visual: the frozen spring with the navy bracket between two compression centres. The handwritten line writes large: "Squeeze to squeeze is one wavelength." Under it, smaller: "middle to middle; squeeze to stretch is only half". On "wavelength" the two compression centres pulse. Hold about 2 seconds.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. The diagram shows particles in a longitudinal wave, with a metre ruler. Compressions are centred at zero point two oh, one point oh oh and one point eight oh metres, and each particle moves at most three point oh millimetres from its rest position. State the wavelength and the amplitude, and find the distance from a compression to the next rarefaction. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Physics"), worded as printed, with a coded particle diagram (a row of dots with three crowded regions over a metre ruler; pointers "0.20 m", "1.00 m", "1.80 m" at the compression centres; no brackets, no labels on the regions): "The diagram shows the particles of a medium carrying a longitudinal wave at one instant. Compressions are centred at the 0.20 m, 1.00 m and 1.80 m marks. Each particle moves at most 3.0 mm from its rest position. (a) State the wavelength and the amplitude of the wave. (b) Determine the distance from the centre of a compression to the centre of the next rarefaction. (3 marks)" Tag: "HSC-style question, written for HSCScience". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 12. feedback 1 (brief)
> Compression to compression is one point oh oh minus zero point two oh, zero point eight oh **metres**. The amplitude is the particle's largest distance from rest, three point oh millimetres. A compression to the next rarefaction is half a wavelength, zero point four oh metres. So zero point four oh isn't the wavelength. That's squeeze to **stretch**.

Visual: card shrinks to the top; "centred at" and "at most 3.0 mm" underlined. On the card's diagram a navy bracket between two compression centres: on "metres" boxed "(a) λ = 1.00 − 0.20 = 0.80 m; A = 3.0 mm"; a grey span to the next rarefaction's centre, boxed "(b) λ ÷ 2 = 0.40 m". On "stretch" a chip "λ = 0.40 m" fades in and is crossed. Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. A loudspeaker cone vibrates two hundred and fifty times each second, and each air particle in front of it moves at most zero point zero zero one oh millimetres from its rest position. State the frequency, period and amplitude, and describe the motion of one air particle as the sound passes. Pause here to answer.

Visual: `QuestionCard`, worded as printed (no diagram): "A loudspeaker cone vibrates 250 times each second. Each air particle in front of it moves at most 0.0010 mm from its rest position. (a) State the frequency, the period and the amplitude of the sound wave. (b) Describe the motion of one air particle as the sound passes. (4 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 2 (brief)
> The frequency is two hundred and fifty hertz, so the period is one over two hundred and fifty, zero point zero zero four oh seconds. The amplitude is zero point zero zero one oh **millimetres**. Each particle oscillates back and forth along the line the sound travels, two hundred and fifty times a second, about its rest position. The compressions and the energy travel to the listener. The air **doesn't**.

Visual: card shrinks to the top; "250 times each second" and "at most 0.0010 mm" underlined. Rows: "f = 250 Hz"; "T = 1/250 = 0.0040 s (4.0 ms)"; on "millimetres" boxed "(a) f = 250 Hz, T = 0.0040 s, A = 0.0010 mm"; boxed "(b) oscillates parallel to the direction of travel, about its rest position", with a small dot sketch and a teal double arrow along the line. On "doesn't" a chip "the air travels from the speaker to the listener" fades in and is crossed. Hold about 1 second.

### 15. handoff
> So for a longitudinal wave, the wavelength runs squeeze to squeeze, frequency and period count the squeezes, and amplitude is how far each particle moves. On a cord or a spring, while the source makes one full cycle, the wave moves on exactly one wavelength. So how are a wave's speed, its frequency and its wavelength **linked**?

Visual: the memory line returns small at the top. A summary strip: "λ: squeeze to squeeze", "f, T: count the squeezes", "A: how far each particle moves". On "On a cord or a spring" board change: v03's cord (`WaveString`, transverse) above the spring (`LongitudinalRow`, longitudinal), both on drivers at "2.0 Hz"; a freeze-and-step: each driver makes one full cycle while a glowing leading crest and a glowing leading compression each move right by a navy bracket labelled "one λ". Chips "one wavelength each period", "speed?". On "linked" the chip "Next: How are a wave's speed, frequency and wavelength linked?". This is the final frame of the video (series rule). Hold about 2 seconds.

### 16. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Compression: a region where particles are closer together than at rest (higher pressure). Rarefaction: a region where they are further apart (lower pressure). The regions travel; each particle oscillates about its rest position.
2. Wavelength λ: from the middle of one compression to the middle of the next (or rarefaction to rarefaction). Compression to the next rarefaction is λ ÷ 2.
3. Frequency f: compressions passing a point each second (Hz). Period T: the time for one complete wave to pass, or for one particle's full back-and-forth. f = 1/T.
4. Amplitude A: the largest distance a particle moves from its rest position, along the line of the wave. At the same frequency, a bigger A means more crowded compressions and more energy (a louder sound).
5. A compression matches a crest only on a picture of pressure (or density). No particle moves sideways.

Memory aid (large, on the notes screen): *Squeeze to squeeze is one wavelength.*

At the end the notes cross-fade back to scene 15's final frame (series rule).

## Teaching checks

- **Does it explain causes?** Why compressions form: neighbours displaced towards each other (3, shown with converging arrows). Why the pattern travels while particles stay: the pattern passes through them (3, the purple particle under the moving region). Why the pressure is higher in a compression: crowded particles push harder (2). Why compression to compression is a wavelength: they are matching regions (4). Why the frequency equals the driver's: one compression leaves per push (5). Why a bigger swing crowds compressions more: each particle moves further (7). Why the crest match is only on a pressure picture: the bumps are in pressure, not in where the particles are (8).
- **Misconceptions addressed:** a compression is a travelling pile of particles (3, crossed); the wavelength is a compression's width (4, crossed); compression to rarefaction is a wavelength (4, feedback 1 crossed); amplitude is a compression's width (7, crossed); the particles move sideways (8, crossed); the air travels to the listener (9, feedback 2 crossed).
- **One idea at a time:** the names (2), the cause (3), wavelength (4), frequency and period (5), amplitude (6, 7), the pressure picture (8), a real sound (9).
- **Video makes it easier:** the student sees displacement arrows converge in a compression (3), watches a compression pass through a marked particle (3), sees a bracket stay the same length from compressions to rarefactions (4), watches the compressions darken as the swing doubles while the wavelength bracket stays put (7), and sees pressure peaks line up with compressions (8).
- **Response opportunity:** two 3 s predictions (1, 6); two unseen HSC-style tasks, 10 seconds each, every value on the card, nothing answer-bearing (A1's diagram has pointers but no brackets or region labels). One crossed mistake each; feedback about 24 s and 28 s.
- **Avoided double teaching:** v03's meanings of wavelength, frequency, period and amplitude are recalled and applied; v01's longitudinal definition is recalled in a line.
- **Syllabus coverage:** `cia7399b4b`: wavelength (4, 9, A1), frequency (5, 9, A2), period (5, 9, A2), compression (2, 3, 8), rarefaction (2, 3, 8, A1), amplitude (7, A1, A2) of longitudinal waves.
- **Out of scope by design:** v = fλ (v05; the handoff sets it up); graphs (v06, v07); sound energy and the medium (v09); pitch and loudness investigations (v10 to v12).

## Practice questions and model answers

**Attempt 1 (scene 11; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "The diagram shows the particles of a medium carrying a longitudinal wave at one instant. Compressions are centred at the 0.20 m, 1.00 m and 1.80 m marks. Each particle moves at most 3.0 mm from its rest position. (a) State the wavelength and the amplitude of the wave. (b) Determine the distance from the centre of a compression to the centre of the next rarefaction."
Model answer: (a) Wavelength = 1.00 − 0.20 = 0.80 m (compression to next compression; 1.80 − 1.00 = 0.80 m confirms). Amplitude = 3.0 mm (the largest distance from the rest position). (b) Compression to the next rarefaction is half a wavelength: 0.80 ÷ 2 = 0.40 m. Classic mistake (crossed): "λ = 0.40 m" (compression to rarefaction).

**Attempt 2 (scene 13; original wording, HSC style, 4 marks suggested).** "A loudspeaker cone vibrates 250 times each second. Each air particle in front of it moves at most 0.0010 mm from its rest position. (a) State the frequency, the period and the amplitude of the sound wave. (b) Describe the motion of one air particle as the sound passes."
Model answer: (a) f = 250 Hz; T = 1/f = 1/250 = 0.0040 s (4.0 ms); A = 0.0010 mm (1.0 × 10⁻⁶ m). (b) Each air particle oscillates back and forth parallel to the direction the sound travels, 250 times each second, about a fixed rest position, moving closer to its neighbours as a compression passes and further from them as a rarefaction passes; the particle is not carried to the listener, only the compressions, rarefactions and energy travel. Classic mistake (crossed): "the air travels from the speaker to the listener".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Spring wave (coded) | 2.0 Hz; swing 1.0 and 2.0 cm; compressions 0.50, 1.50, 2.50 m; λ = 1.00 m; ½λ = 0.50 m; T = 0.50 s | 1 to 8, 15 |
| Surprise (author note e) | under 0.0001 mm (2.2 × 10⁻⁸ m at 60 dB, 500 Hz) | 7 |
| Loudspeaker (site Q2) | 500 Hz; λ = 0.68 m; T = 0.0020 s = 2.0 ms | 9 |
| A1 | compressions 0.20, 1.00, 1.80 m; λ 0.80 m; λ ÷ 2 = 0.40 m; A 3.0 mm; crossed 0.40 m | 11, 12 |
| A2 | 250 Hz; T 0.0040 s; A 0.0010 mm | 13, 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (2 Nov); Codex to re-check.

- 1.50 − 0.50 = 1.00; 2.50 − 1.50 = 1.00; 1.00 ÷ 2 = 0.50; 1 ÷ 2.0 = 0.50 s; spring speed (not stated) 2.0 × 1.00 = 2.0 m s⁻¹.
- Surprise: √(2 × 1 × 10⁻⁶ ÷ (1.2 × 343 × (2π × 500)²)) = 2.22 × 10⁻⁸ m; at 1000 Hz 1.11 × 10⁻⁸ m; both under 1 × 10⁻⁷ m (0.0001 mm).
- Loudspeaker: 1 ÷ 500 = 0.0020 s; 0.68 × 500 = 340 m s⁻¹ (consistency only).
- Site `we-1` check: 0.40 × 170 = 68 m s⁻¹; 1 ÷ 170 = 5.9 × 10⁻³ s.
- A1: 1.00 − 0.20 = 0.80; 1.80 − 1.00 = 0.80; 0.80 ÷ 2 = 0.40.
- A2: 1 ÷ 250 = 0.0040 s; intensity at 250 Hz with 1.0 × 10⁻⁶ m: ½ × 1.2 × 343 × (2π × 250)² × (1.0 × 10⁻⁶)² = 5.1 × 10⁻⁴ W m⁻² (87 dB; plausibility only).

## Memory aid check

- **"Squeeze to squeeze is one wavelength."** Written for this lesson. Meaning, as said in scene 10 and on screen: one wavelength runs from the middle of one compression to the middle of the next; squeeze to stretch is only half. Assumptions checked: "squeeze" means a compression's centre, not its edge (on screen: "middle to middle"); it applies to steady longitudinal waves with a repeating pattern (a single pulse has no wavelength); "stretch to stretch" works equally (said in scene 4). It is the longitudinal partner of v03's "Wavelength goes match to match", so the two aids reinforce each other. It blocks A1's trap and the site's misconception 2. Introduced after the wavelength has been measured (4).
- **Considered, not used:** "Compressions are crests" (true only on a pressure picture: site correction 2).

## Narration length estimate

Revision 1 count (2 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,882 characters**, 16 scenes. Characters per scene (1 to 16): 250, 433, 578, 529, 399, 100, 632, 392, 622, 77, 387, 344, 323, 400, 326, 75. At 13.3 characters per second the speech is about 442 s; add about 18 s of holds and settling (the freeze and arrows in 3, the ruler and brackets in 4, the gate count in 5, the doubled swing in 7, the pressure band in 8, the speaker in 9, the stepped handoff in 15, the 2-second memory hold), 6 s for two prediction countdowns, 20 s for two attempt countdowns, 2 s of feedback holds and about 54 s more of the quiet notes hold (about 100 s of holds): **about 542 s**, inside the 5,500 to 6,800 character band and under the 570 s cap.

## Scene list and build ids

Lesson key `p-y11-fa2-v04` (route phys-y11-fa2-v04; key form as v01 open decision 3). Suggested explainer folder `src/explainer/lessons/phys-y11-fa2-v04` and build folder `docs/production/claude-pm/lessons/p-y11-fa2-v04` (root to confirm).

In order (kebab-case; 16 scene headings, all `### N.`): hook, compression-rarefaction, why-regions-form, wavelength, frequency-period, amplitude-prediction, amplitude, pressure-picture, loudspeaker-example, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). The hook and amplitude-prediction carry 3 s countdowns inside explain scenes. Transitions (`pickTransition`): v03's last frame continues into scene 1 (camera continue: the same driver and spring); 1 to 2 camera continue (the air row joins below); 2 to 3 to 4 to 5 camera continue (freeze and run); 5 to 6 to 7 camera continue (the swing doubles); 7 to 8 camera continue (the dot row with the strip and band); 8 to 9 clear change to the calculation layout; 9 to 10 camera continue; attempts and feedback card shrink to the top; 14 to 15 board clear; 15 to 16 fade to the notes board, and 16 cross-fades back to 15's final frame.

Holds: hook and amplitude-prediction (3 s), attempt-1, attempt-2 (10 s after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/p-y11-fa2-v04-learning-review.md`, `science_check` = `checks/p-y11-fa2-v04-physics-check.md`.

## Assets

`public/assets/physics/` does not exist yet (checked 2 Nov). Requested earlier (uniform scaling only, never stretched):
- v01's `phys-y11-wave-driver-v1.png`, `phys-y11-wave-driver-rod-v1.png` and `phys-y11-signal-generator-v1.png`: scenes 1 to 8 and 15 (two drivers in 15).

Need (new plates, Codex):
1. `phys-y11-loudspeaker-v1.png` and `phys-y11-loudspeaker-cone-v1.png`: scenes 7 and 9; reused in FA2 v09 to v12 (sound). Essential (the source of the sound wave, moved without hands).

Coded: the spring, air particles, home ticks, displacement arrows, compression shading, centre markers, ruler, gate, counters, timers, density strip, pressure band, brackets, energy arrow, `AlignedAlgebra`, `Countdown`, `QuestionCard` with a coded particle diagram, `Chip` with `cross`, `KeyNotes`, `Heading`.

Kit gaps (for the build brief): **`LongitudinalRow`** (new, physics; reused by v05, v07 and the sound videos), with the density strip and pressure band computed from the displacement field (author note c); v03's **`WaveString`** for the handoff; the cone driven at the row's frequency.

## Codex asset brief (Year 11 Physics FA2 v04, loudspeaker)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; design `docs/production/claude-pm/lessons/phys-y11-fa2-v04.md`. Paint after the learning review, physics check and error check pass and the owner gives the go-ahead. Transparent PNG with a true alpha channel, clean edges with no coloured fringe or halo (check on black and white), ink and watercolour in the house style matched to v01's wave driver and signal generator, at least 8 per cent clear margin, no text, labels, numbers, brand names, people, hands, faces, backdrop, glow or ground shadow. Keep the native aspect; never stretch. JSON sidecar with the named pixel coordinates.

1. **`phys-y11-loudspeaker-v1.png`**: a plain school loudspeaker in a small open-backed wooden or dark grey box, seen exactly side-on and cut away (a clean vertical section) so the cone's profile, the magnet behind it and the surround are visible, the cone facing right; **without the cone** (the cone is a separate plate); a small terminal block at the back. Sidecar: the cone's mounting rim (top and bottom points); the cone's rest position line (its front face at rest); the box's base contact line.
2. **`phys-y11-loudspeaker-cone-v1.png`**: the matching cone alone in the same side section (a shallow paper cone with its central dust cap), so the code can move it a few pixels left and right. Sidecar: the cone's rim points (to align with the body's rim); the front-face centre.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the compression shading, density strip and pressure band are computed from the particle displacements as in author note c, with pressure peaks at the compressions, and that the band is labelled "pressure", never "displacement".
3. Confirm the physics claims: compressions are regions of particles closer than at rest (higher pressure) and rarefactions further apart (lower pressure); they form where neighbouring particles are displaced towards or away from each other; the regions travel while particles oscillate about their rest positions; wavelength from compression centre to the next; frequency as compressions per second; period as one wave passing or one particle oscillation; amplitude as the largest particle displacement along the line; at the same frequency a bigger amplitude crowds compressions more and carries more energy; a compression matches a crest only on a pressure (or density) picture; the surprise value (author note e).
4. Confirm the memory aid's condition ("middle to middle") is on screen.
5. Confirm both attempt questions are original in wording, carry every value, and show nothing answer-bearing.
6. Confirm the syllabus quote matches the route JSON exactly and no 2017-syllabus label appears.
7. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
8. Confirm the narration character count by script with the build parser rules.
9. Add site corrections 1 to 3 under Decisions to `../site-corrections-phys-y11.md` (owner record only).

## YouTube metadata (draft)

Title: Compressions, Rarefactions and Longitudinal Wavelength | Year 11 Physics

(Title length: 74 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa2-waves/lesson03.sa.html

A longitudinal wave has no crests or troughs, so where is its wavelength? See how compressions and rarefactions form when neighbouring particles move towards or away from each other, why the pattern travels while every particle stays near home, and how to measure the wavelength, frequency, period and amplitude of a longitudinal wave. Find out why a compression is like a crest only on a picture of pressure, and how little the air actually moves when you talk. Two exam-style questions at the end.

Year 11 Physics (2025 syllabus), Focus Area 2: Waves.
Syllabus content (NSW Physics 11-12, 2025):
"Describe the wavelength, frequency, period, compression, rarefaction and amplitude of longitudinal waves" (cia7399b4b)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa307d399c

Builds on: Describing transverse waves (previous video). Next: The wave equation.

#Year11Physics #Physics #Waves #HSCScience

## Open decisions

- **1. Handoff chip wording (v05).** The route's next question is a placeholder ("How can I explain and apply the wave equation?"). This design's chip uses a proposed causal form, "How are a wave's speed, frequency and wavelength linked?", which v03's scene 9 and this video's scene 15 set up (a wave moves one wavelength in one period). The handoff sentence and chip are a separate take and chip, so root's final wording changes only them.
- **2. Learner question and route boundaries (root to record).** Adopted "How do squeezed and stretched regions let us measure a longitudinal wave?". Proposed start: "Start with a spring's squeezed and stretched regions: where is the wavelength?" Proposed stop: "Stop after the six terms described for longitudinal waves, the pressure-picture qualifier and a loudspeaker example; hand v = fλ to v05 and displacement graphs to v07."
- **3. The surprise (scene 7).** "Less than a ten-thousandth of a millimetre" for ordinary talking is checked (author note e). If the physics check prefers no number, the sentence becomes "each air particle moves far less than the width of a hair" (also true by a large margin).
- **4. Site link form.** As FA1 v08.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v01 and v03 at Year 11 entry; check that converging and diverging arrows make "why compressions form" seen, not just said; that the purple particle under a moving compression lands "a pattern, not a pile"; that "squeeze to squeeze" is heard as middle to middle; that the doubled swing shows crowding without changing the wavelength; that scene 8's pressure qualifier is plain and does not pre-teach v07; that the cards give nothing away), then the Codex physics check and error check.
- The converging arrows and the marked particle (3), the sliding bracket (4), the doubled swing (7) and the pressure band over the compressions (8) carry the explanation; judge them at playback speed in the voiced preview. The shading, strip and band must all be computed from the same displacement field as the drawn particles.
