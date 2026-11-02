# Year 11 Physics FA2 V07 (Physics 2025, Year 11, Focus Area 2): How does a snapshot of every particle at one instant show a wave's wavelength? (design)

Status: Revision 1 (2 Nov). Needs independent student learning review (key `p-y11-fa2-v07`, `docs/production/student-learning-review.md`), a Codex physics check and a Codex error check before build. Voice: Google AI Studio after the brief 124 pilot; physics follows Year 12 Maths and Year 11 Biology in the voicing queue. Nothing recorded; human listening pending. Plates: no new plate (v01's wave driver, rod and signal generator; v04's loudspeaker body and cone for the handoff).

Narration 5,822 characters, 15 scenes, about 538 s (9.0 minutes) including two 3 s prediction countdowns, two 10 s attempt countdowns and the notes hold, counted by script with the build parser rules (see "Narration length estimate").

Scope: seventh video of the Year 11 Physics (2025) Focus Area 2 route and the second wave-graph video (v06 owned displacement-time graphs). v08 (First Nations waves and water depth) is on cultural hold, so this video hands off directly to v09. Templates: `phys-y11-fa1-v22.md` (concept format, section list); house conventions, the FA2 colour key, the cord and the spring from `phys-y11-fa2-v03.md` to `phys-y11-fa2-v06.md` (Revision 1; v06's scene 14 frame is this video's first frame). No pre-design pack exists: the pack work is done in this file. Site lesson read in full (2 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa2-waves/lesson06.sa.html` (orient with the flash-photo warm-up, intentions and key terms, card 1 a snapshot of the whole wave, card 2 two graphs, one wave speed with `we-1`, activity 1, card 3 longitudinal waves on a distance graph, independent practice, retrieve). Route entry: `phys-y11-fa2-v07` in `../../phys-y11-video-route.json` (proposed). Route start: "Start with Displacement–Distance Wave Graphs. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions." Route stop: "Stop after the learner can answer: How can I explain and apply displacement–distance wave graphs? Teach only the listed actions; the next video owns its separate question." Next (route): "phys-y11-fa2-v08: How can I explain and apply first nations waves and water depth?" (cultural hold; the handoff goes to v09 with a proposed causal form of its question, open decision 1).

Owner rules applied: as v01 to v06 (2025 syllabus only; no people, hands or faces: the cord and spring are moved by v01's wave driver and the air by v04's loudspeaker, both moved by code; apparatus painted at native aspect; the cord, spring, particles, arrows, snapshot graphs, ghost snapshots, pressure band and working coded; one reasoning stage at a time; 3 s in-teaching predictions; "Pause here to answer." with a 10 s countdown and the full worded question; brief feedback with one crossed mistake; original questions; key-notes hold; Australian spelling; no em dashes; v04, v05 and v06 recalled in a sentence each).

Syllabus content point (Physics 11-12 (2025), Year 11, Focus Area 2, group "Wave properties"; local ledger ID with NESA content-system codename), quoted from the route JSON `syllabusActions`:

- P25-FA2-G1-06 `ci6a03179f`: "Analyse displacement–distance graphs for longitudinal and transverse waves"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa307d399c

**Boundary:** starts from v06's handoff (the 2.0 Hz cord frozen at one instant, every point's displacement dropped as a dot onto a position axis and joined into a curve; chips "wavelength?", "compressions?"; "Next: How does a snapshot of every particle at one instant show a wave's wavelength?"); how a displacement-distance graph (a snapshot) is built; why one snapshot cannot give a speed; reading the wavelength between matching points and the amplitude from the zero line; which way a point is moving, from a snapshot shifted a moment later, given the direction of travel; combining a snapshot and a time graph to find the speed (site `we-1`); telling the two graphs apart by the horizontal axis; a longitudinal snapshot with forward positive; compressions and rarefactions at the zero crossings where neighbours' displacements converge or diverge, not at the graph's crests (site correction 1); two attempts. Not taught: water waves and depth (v08, cultural hold); the medium requirement and sound's energy transfer (v09; the handoff asks it); phase difference; superposition (FA2 group 3).

## Decisions

- **Learner question (route placeholder rewritten; recorded here).** The route's "How can I explain and apply displacement–distance wave graphs?" is a placeholder. Rewritten as v06's handoff chip: "How does a snapshot of every particle at one instant show a wave's wavelength?" The answer, built in order: the snapshot plots every particle's displacement against its position at one instant, so its horizontal repeat is a length, the wavelength, and it holds no time (2, 3); a snapshot drawn a moment later shows which way each point moves (4, 5); with a time graph's period it gives the speed (6); for a longitudinal wave the same reading gives the wavelength, and the zero crossings, not the crests, show the compressions (7, 8).
- **The hook (site hook and warm-up, made a prediction).** "So can this one snapshot tell you how fast the wave is travelling?" 3 s prediction, yes or no, on v06's frozen frame. Answered in 2 (no: a snapshot holds no time) and completed in 6 (two graphs give the speed).
- **The cause made visible (owner quality bar).** (2) Each point of the frozen cord drops a dot straight down onto the position axis at its own position; a clock beside the snapshot is frozen at one reading, and a speed readout beside it stays "?". (5) A ghost of the snapshot slides a short distance in the travel direction; P's dot rides up to the ghost's height (arrow up) while Q's rides down; the crest point's dot does not move. (7) Each coil of the frozen spring keeps its teal displacement arrow; the arrows rotate up about the coils' home ticks (forward becomes up) and their tips trace the snapshot curve, so the graph is visibly built from along-the-spring displacements. (8) The arrow pairs at each zero crossing are ringed: converging at the falling crossings (slate compression shading appears in the spring above), diverging at the rising crossings; a crossed ghost chip "crests are compressions"; v04's pressure band slides in above with its peaks a quarter of a wavelength from the displacement crests.
- **Values.** The v03 cord frozen at v06's handoff instant: crests at 0.50 m and 2.00 m, troughs at 1.25 m and 2.75 m, λ = 1.50 m, A = 3.0 cm; travels to the right. P at 2.20 m (just ahead of the crest at 2.00 m, moving up); Q at 1.80 m (just behind it, moving down). Site `we-1` (unchanged numbers; set on a rope, site correction 2): λ = 0.60 m, T = 0.40 s, v = 1.5 m s⁻¹. v04's spring (unchanged): λ = 1.00 m; compressions at 0.50, 1.50 and 2.50 m; displacement crests at 0.25, 1.25 and 2.25 m (author note c).
- **Direction of motion from a snapshot (analysis beyond the site's cards; open decision 3).** Taught as one method only: "draw the snapshot again a moment later, shifted a little in the direction the wave travels", then compare the point's heights. No "upstream" rule or hand rule is introduced (one method, applicable to any shape). The crest point is "stopped for an instant", linked to v06's flat peak.
- **Prediction 2 (3 s, scene 4).** "This wave travels to the right. Point P sits just ahead of a crest. Is P moving up, or down?" Up (5).
- **Compressions on a displacement snapshot (site card 3, corrected; site correction 1).** Said: "In a compression, the coils behind it have moved forward, and the coils ahead of it have moved back. On the graph, that's where the curve crosses zero, going from positive to negative." With forward positive and the wave travelling in the positive direction, compressions sit at falling zero crossings and rarefactions at rising ones (author note c). Not said: that the graph's crests mark compressions (the site's card 3 key line and hook sentence say this; its own paragraph says the zero crossings). This settles v04's grey tag ("graphs of a longitudinal wave's displacement: v07").
- **Pressure link (one sentence, scene 8).** "A pressure picture, like the one from two videos ago, peaks at the compressions, a quarter of a wavelength along from these crests." Ties v04's pressure band to this graph without a new graph type.
- **Attempts (original, HSC style).** (A1) A rope snapshot: successive crests at 0.40 m and 1.30 m, largest displacement 6.0 cm; a time graph gives T = 0.30 s: λ = 0.90 m, A = 6.0 cm, v = 3.0 m s⁻¹. Crossed: "v = 0.90 × 0.30 = 0.27 m s⁻¹" (multiplied by the period). (A2) A sound snapshot in a tube, forward positive; zero at 0, 0.20, 0.40, 0.60, 0.80 m; positive between 0 and 0.20 m: λ = 0.40 m; compressions at 0.20 m and 0.60 m (falling zero crossings: particles behind displaced forward, ahead displaced back). Crossed: "compressions at the peaks, 0.10 m and 0.50 m".
- **Mistake scene:** none separate. "The gap between peaks on a snapshot is the period" (2, 3; site misconception 1); "one snapshot gives the speed" (1, 2; site misconception 2); "crest to trough is a wavelength" (3, crossed); "every point on a snapshot is moving the same way" (4, 5); "the two graphs are the same" (6; site Q3); "the snapshot's crests are compressions" (7, 8 crossed; feedback 2 crossed; site correction 1); "v = λ × T" (feedback 1 crossed).
- **Memory aid:** "Distance axis, distance answer." (v06's partner) and "Squeezes sit at zero, where the arrows meet." (see "Memory aid check").
- **Handoff (v09; v08 on cultural hold; open decision 1).** v04's loudspeaker plate pushing a coded row of air particles, compressions moving right, a hollow gold energy arrow crossing the board; the air row fades to a few dots and then to none while the cone keeps moving; chips "no particles?", "no sound?"; then "Next: Why can't sound travel without particles to pass its energy along?". This is the frame v09 opens on.
- **Site sources used:** intro and hook (two still pictures reveal a speed: 1, 6); warm-up (flash photo: peak gap and speed: 1, 2); key terms (displacement-distance graph, snapshot, wavelength, wave speed: 2, 3, 6); misconceptions 1 and 2 (2, 3); card 1 and its check (snapshot; λ between matching points; amplitude; no period: 2, 3); card 2 and `we-1` (6); quick check (false: 2); activity 1 (the two-column table: key notes; λ 0.80 m and T 0.20 s: not used, A1 has the same structure); odd one out (the period: 2); card 3 (forward positive; zero crossings with converging particles: 7, 8, corrected); Q1 (structure of 6); Q2 (crests with "no crest between them": A1's wording); Q3 (6). Not used: card 3's key line and hook sentence (site correction 1).
- **Site corrections (quoted from site lesson 6, read 2 Nov; for `../site-corrections-phys-y11.md`; not logged yet):**
  1. Card 3, lead sentence and key line: "This card answers it → as the same smooth curve, where peaks mark compressions." and "A longitudinal wave can be plotted on a displacement–distance graph by recording each particle's forward or backward shift from rest, and the result is the same smooth curve, its peaks line up with the compressions." On a graph of particle displacement against position, compressions sit at zero crossings (where particles on either side are displaced towards each other), a quarter of a wavelength from the peaks; the card's own paragraph says so ("the points where the graph crosses zero with particles converging from both sides correspond to the compressions"). The lead and key line contradict it and teach the classic error. Suggest: "the result is the same smooth curve; its zero crossings, where neighbouring particles are displaced towards each other, mark the compressions (and, where they are displaced apart, the rarefactions)." Related to L03's logged-in-design correction 2 (v04).
  2. Card 2, `we-1` check: "Check: a slow water-wave speed of about $1.5\ \text{m s}^{-1}$ is reasonable." The example says only "a wave"; as a water surface wave, a wavelength of 0.60 m cannot travel at 1.5 m s⁻¹ (at most √(gλ ÷ 2π) = 0.97 m s⁻¹, in deep water). Suggest: "Check: about 1.5 m s⁻¹ is a reasonable speed for a wave on a rope." Same physics as L04 activity 1 (v05 site correction 1).
  - Checked and correct: card 1 and its check (A); card 2 (v = fλ = λ/T); `we-1` (1.5 m s⁻¹); quick check (false); activity 1 (4.0 m s⁻¹; 5.0 Hz); odd one out (C); card 3's paragraph (forward positive; zero crossings with converging particles as compressions); its check (true); fill-the-gaps; Q1 (4.0 m s⁻¹); Q2 (2.5 m; 5.0 m s⁻¹); Q3 model answer.
- **Cause chain taught, in order:** (1) can one snapshot give the speed? (1); (2) every particle's displacement against position at one instant; no time, so no speed (2); (3) the repeat on a distance axis is the wavelength; the height is the amplitude (3); (4, 5) a snapshot a moment later shows each point's motion, given the travel direction (4, 5); (6) snapshot λ with time-graph T gives v; tell the graphs apart by the axis (6); (7) a longitudinal snapshot: forward displacement plotted up; λ peak to peak (7); (8) compressions at falling zero crossings, rarefactions at rising ones; crests are not compressions (8); (9) memory aids (9).
- **Entry knowledge (route `entryKnowledge`):** Stage 5 (reading a graph's axes). From FA2, recalled in a line each: v04 (compressions, rarefactions, the pressure picture), v05 (v = fλ = λ/T), v06 (displacement-time graph: T, A, the flat peak, "time axis, time answer").
- **Learner-visible vocabulary (plain meaning at first use):** snapshot (every particle at one instant, scene 2); displacement-distance graph (each particle's displacement plotted against its position at one instant, scene 2); position (where along the wave a particle rests, scene 2); zero crossing (where the graph crosses the zero line, scene 8); displacement, wavelength, amplitude, compression, rarefaction (recalled, scenes 2 to 8).
- **Legacy logic ported:** none. Drawing parts only: `Arrow`, `Label`, `Panel` (`course-kit.tsx`).
- **New explainer motion (coded unless a plate is named):** **`SnapshotGraph`** (new, physics; grown from v06's handoff dots: each source point drops a dot onto a position axis; the curve joins them; matching-point brackets (navy, "λ"); amplitude bracket (teal); point markers P and Q; a ghost snapshot shifted by a set distance in the travel direction with per-point rise and fall arrows; zero-crossing rings; a longitudinal mode in which `LongitudinalRow`'s displacement arrows rotate up about the home ticks and their tips trace the curve); v03's **`WaveString`** (frozen); v04's **`LongitudinalRow`** (spring and air modes, with the pressure band); v06's **`TimeTrace`** (static, scene 6); the loudspeaker plates with the cone moved by code; `AlignedAlgebra`; `Countdown` (3 s, 10 s); `QuestionCard` (subject "Physics") with coded snapshot graphs; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout (constant):** heading top-left; the driver and the frozen cord or spring across the upper third, aligned in position with the graph below it (the same horizontal scale, so each particle sits directly above its dot); the snapshot graph across the lower two thirds; readouts and working at the right.
- **Colour key:** v01's FA2 key (particle displacement teal; travel direction amber outline; energy hollow gold); compressions slate and rarefactions pale (v04); wavelength brackets navy; amplitude bracket teal; the snapshot curve ink, its ghost dashed grey; P and Q markers purple; the rise and fall arrows on P and Q in the particle velocity colour (v06 open decision 3); the pressure band dark grey labelled "pressure" (v04); crossed items muted red.
- **No human figures.**
- **Author notes (not learner copy):**
  (a) Frozen cord: y(x) = 3.0 cos(2π(x − 0.50) ÷ 1.50) cm at the frozen instant; crests at 0.50 and 2.00 m; troughs at 1.25 and 2.75 m. The wave travels in +x. Drawn "height exaggerated ×10" (v03); the snapshot graph uses its own vertical scale in cm and the same horizontal scale as the cord above it.
  (b) Ghost (scene 5): the snapshot redrawn shifted 0.10 m in +x (one fifteenth of a wavelength; the time is not stated). P at 2.20 m: y = +2.01 cm now, +2.74 cm on the ghost (it takes the height the point at 2.10 m has now), so P rises. Q at 1.80 m: +2.01 cm now, +0.93 cm on the ghost, so Q falls. The crest point at 2.00 m: 3.00 cm now, 2.74 cm on the ghost; it is at its turning point, so it gets the chip "momentarily at rest" rather than an arrow.
  (c) Spring snapshot: s(x) = −A sin(2π(x − 0.50) ÷ 1.00), forward (+x, the travel direction) positive, A = 2.0 cm. Zero crossings at 0.50, 1.00, 1.50, 2.00, 2.50 m. At 0.50, 1.50, 2.50 m the curve falls through zero (positive behind, negative ahead): compressions (matching v04's). At 1.00 and 2.00 m it rises through zero: rarefactions. Crests (s = +A) at 0.25, 1.25, 2.25 m; troughs at 0.75, 1.75, 2.75 m. The density excess is proportional to −ds/dx, maximal at the falling crossings (v04 author note c). The pressure band is computed from −ds/dx and peaks at 0.50, 1.50, 2.50 m, a quarter wavelength (0.25 m) from the displacement crests.
  (d) The falling-crossing rule depends on the convention: positive = the direction of travel (as the site and this video). With the opposite convention the compressions are at the rising crossings. The rule in learner copy is tied to the arrows ("where the arrows meet"), which works under either convention; the "positive to negative" wording is said with "forward as positive" on screen.
  (e) `we-1`: 0.60 ÷ 0.40 = 1.5 m s⁻¹ (rope).
  (f) A1: λ = 1.30 − 0.40 = 0.90 m; v = 0.90 ÷ 0.30 = 3.0 m s⁻¹; f = 3.3 Hz (not asked); crossed 0.90 × 0.30 = 0.27 m s⁻¹.
  (g) A2: s(x) = A sin(2πx ÷ 0.40) with A = 0.0010 mm on the card's axis; positive 0 to 0.20 m; falling crossings at 0.20 and 0.60 m (compressions); rising crossings at 0, 0.40, 0.80 m (rarefactions); peaks at 0.10 and 0.50 m. In air (about 340 m s⁻¹) this is about 850 Hz (not stated). Plausibility: 1.0 × 10⁻⁶ m at 850 Hz is about 98 dB (loud; plausible for a demonstration tube).
  (h) Pronunciations: "displacement-distance graph"; "zero point four oh metres"; "one point three oh metres"; "zero point zero zero one oh millimetres" (not said; on the card only).

Main question: *Freeze a whole wave at one instant and plot every particle. How does that snapshot show the wavelength, and where are the compressions on it?*
Entry knowledge (Stage 5 graph reading; v04 compressions and the pressure picture; v05 v = fλ; v06 displacement-time graphs).
Stops after: building a snapshot; λ and A read; no speed from one snapshot; direction of a point's motion from a shifted snapshot; speed from a snapshot and a time graph; telling the graphs apart; the longitudinal snapshot with compressions at the zero crossings where displacements converge. No water waves, no medium or energy transfer, no phase, no superposition.
Handoff: v09, mechanical waves and sound energy (v08 on cultural hold).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key as Decisions.

### 1. hook (can one snapshot give the speed?)
> Last time, a graph of one point over time gave us the period, but not the wavelength. Now we've frozen the whole cord at one instant, and plotted every point's displacement against its position along the cord. It's a snapshot of the wave. So can this one snapshot tell you how fast the wave is **travelling**?

Visual: opens on v06's last frame (the frozen 2.0 Hz cord with its dots dropped onto the position axis and joined into a curve; chips "wavelength?", "compressions?"; the "Next" chip). The chip becomes the heading: "Displacement-distance graphs". A small clock beside the graph shows one frozen reading; a readout "speed = ?". On "travelling" chips "yes?", "no?" and a 3-second countdown ring.

### 2. every particle at one instant
> Here's how the snapshot is built. At one instant, each point on the cord has its own displacement, up or down from rest. We plot each one above its position along the cord. So the horizontal axis is **distance**, in metres. For a transverse wave, the graph looks just like the cord, because each point's displacement really is sideways to the cord. And the speed? A snapshot has no time in it, so it can't show how fast anything is moving. One snapshot on its own can't give the **speed**.

Visual: the curve clears and rebuilds: each point of the frozen cord drops a dot straight down to its position on the axis (left to right, quickly), the curve joining them. Axis labels: "position along the cord x (m)" (horizontal) and "displacement y (cm)", "+ up", the grey dashed zero line "rest". On "distance" the horizontal label glows "metres" (gloss "snapshot: every particle at one instant"). On "sideways" a pair of thin teal arrows on two cord points and on their dots match. On "no time" the frozen clock pulses; on "speed" the "no?" chip fills and the readout stays "speed = ?".

### 3. reading the wavelength and amplitude
> What it does give is the wavelength. Here, the crests are at zero point five oh metres and two point oh oh metres. So the wavelength is one point five oh **metres**, the same as we measured on the cord. As before, any matching pair works, and a crest to the next trough is only half a wavelength. The amplitude is the height of a crest above the zero line, three point oh **centimetres**. So the snapshot gives lambda and A. The time graph gave T and **A**.

Visual: pointers "0.50 m" and "2.00 m" at the two crests; on "metres" a navy bracket "λ = 2.00 − 0.50 = 1.50 m", boxed; a dashed link up to the cord, where v03's navy bracket shows the same length. On "matching pair" the bracket slides to trough-to-trough (1.25 m to 2.75 m), the same length. On "half" a grey span crest to trough "λ ÷ 2 = 0.75 m"; a chip "crest to trough = λ" fades in and is crossed. On "centimetres" a teal bracket from the zero line to a crest, "A = 3.0 cm". On the last sentence a small v06 time-graph thumbnail slides in at the right with "T, A"; the snapshot gets "λ, A".

### 4. prediction: which way is P moving?
> A snapshot can tell us something about motion, though, if we know which way the wave travels. This wave travels to the right. Point P sits just ahead of a crest. Is P moving up, or **down**?

Visual: an amber outline arrow "wave travels →" above the cord and the graph. A purple marker P at 2.20 m on the graph (on the front slope just right of the crest at 2.00 m) with a matching marker on the cord. On "down" chips "up?", "down?" and a 3-second countdown ring.

### 5. a moment later
> Here's a reliable way to tell. Draw the snapshot again a moment later, shifted a little in the direction the wave travels. Now P is higher. So P is moving **up**. The crest just behind it is on its way to P. A point just behind a crest has that crest moving away from it, so it's moving down. And a point right at a crest is stopped for an instant, just like a peak on the time **graph**.

Visual: a dashed grey ghost of the curve slides 0.10 m to the right (tag "a moment later"; author note b). On "higher" P's marker rides up from the curve to the ghost; an up arrow on P (and on the cord's P); the "up?" chip fills. On "on its way" the crest at 2.00 m and its ghost glow with a short amber arrow between them. On "just behind" a second marker Q at 1.80 m rides down to the ghost, a down arrow on Q. On "graph" a marker at the crest gets a chip "momentarily at rest" and the v06 thumbnail's peak pulses.

### 6. two graphs, one speed
> To find the speed, combine the two graphs. Task: a snapshot of a wave on a rope shows successive crests zero point six oh metres apart. A displacement-time graph for one point on the same rope shows a full cycle taking zero point four oh seconds. Find the wave's speed. The wavelength comes from the snapshot, zero point six oh metres. The period comes from the time graph, zero point four oh seconds. So v is lambda over T, zero point six oh over zero point four oh, one point five metres per **second**. The two graphs can look almost identical. Read the horizontal axis to tell which is **which**.

Visual: clear change to the calculation layout; two small coded graphs side by side, alike in shape: left "displacement against position x (m)" with crests 0.60 m apart; right "displacement against time t (s)" with peaks 0.40 s apart. Task strip "Find the speed of the wave". Equation strip "v = fλ = λ/T". Givens group (navy): "snapshot: λ = 0.60 m; time graph: T = 0.40 s" (grey tag "site example, on a rope"), each with a navy or purple bracket on its graph. On "second" row "v = 0.60 ÷ 0.40 = 1.5 m s⁻¹", boxed. On "which" the two horizontal axis labels ring in turn, "metres" and "seconds".

### 7. a longitudinal snapshot
> Now a longitudinal wave. Freeze the spring at one instant. Each coil is displaced forward or backward along the spring. To make a snapshot, plot each coil's displacement, with forward as positive, above the place where it would rest. The result is the same smooth curve. Its crests are one point oh oh metre apart, which is the wavelength, the same as compression to **compression**. But careful. The graph's crests aren't the compressions. The graph shows how far each coil has moved, not how crowded the coils **are**.

Visual: board change: v04's spring on its driver, frozen (slate compressions, pale rarefactions), each coil over its grey home tick with a teal displacement arrow along the spring; an amber "wave travels →" arrow. On "plot" the arrows rotate up about their home ticks (forward becomes up; axis label "displacement s (cm), forward +"; horizontal "rest position x (m)", aligned with the spring above), and the arrow tips trace the snapshot curve (author note c). On "compression" a navy bracket between two graph crests "λ = 1.00 m", and a matching navy bracket on the spring from compression centre to compression centre, the same length. On "careful" dashed lines drop from the graph's crests to the spring: they land between a compression and a rarefaction, not on a compression; on "are" a ghost chip "crests are compressions" fades in.

### 8. where the compressions sit
> So where are the compressions? Look at the arrows. In a compression, the coils behind it have moved forward, and the coils ahead of it have moved back. They've moved towards each other. On the graph, that's where the curve crosses zero, going from positive to **negative**. At the next zero crossing, going from negative to positive, the coils have moved apart, so that's a **rarefaction**. So compressions sit a quarter of a wavelength from the graph's crests. A pressure picture, like the one from two videos ago, peaks at the compressions, not at these **crests**.

Visual: the arrows (back along the spring for a moment) around the compression at 0.50 m are ringed: left arrows point forward, right arrows point back, converging (caption "moved towards each other"); on the graph the same coils' dots sit just above the zero line on the left and just below on the right; on "negative" a slate ring on the falling zero crossing at 0.50 m with a dashed line up to the spring's compression; the same rings appear at 1.50 m and 2.50 m. On "rarefaction" diverging arrows ringed at 1.00 m; a pale ring on the rising crossing, dashed line up to the rarefaction; also at 2.00 m. The "crests are compressions" chip is crossed. On "quarter" a small grey bracket "¼ λ = 0.25 m" from a crest (0.25 m) to the next compression (0.50 m). On "pressure picture" v04's dark grey pressure band slides in above the graph, labelled "pressure", its peaks on the compression rings; on "crests" the displacement crests pulse beside, offset.

### 9. memory aid
> Two lines to keep. Distance axis, distance answer: on a snapshot, the repeat is the wavelength. And for a longitudinal snapshot, squeezes sit at zero, where the arrows **meet**.

Visual: the snapshot with its navy λ bracket and the compression rings. The handwritten lines write large: "Distance axis, distance answer." and "Squeezes sit at zero, where the arrows meet." Under them, smaller: "snapshot repeat = λ; compressions at the zero crossings where displacements point towards each other". On "meet" the converging arrow pair at 1.50 m pulses with its ring. Hold about 2 seconds.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. A snapshot of a transverse wave on a rope shows successive crests at zero point four oh metres and one point three oh metres along the rope, and a largest displacement of six point oh centimetres. A displacement-time graph for one point on the rope shows a period of zero point three oh seconds. State the wavelength and the amplitude, and calculate the speed of the wave. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Physics"), worded as printed, with a coded displacement-distance graph (position 0 to 2.0 m, gridlines every 0.10 m; displacement −6.0 to +6.0 cm; the curve only, no brackets or labels on features): "The graph is a snapshot of a transverse wave on a rope. It shows successive crests at x = 0.40 m and x = 1.30 m, with no crest between them, and a largest displacement of 6.0 cm. A displacement-time graph for one point on the rope shows a period of 0.30 s. (a) State the wavelength and the amplitude of the wave. (b) Calculate the speed of the wave. (3 marks)" Tag: "HSC-style question, written for HSCScience". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 11. feedback 1 (brief)
> The wavelength is one point three oh minus zero point four oh, zero point nine oh **metres**. The amplitude is six point oh centimetres. Then v is lambda over T, zero point nine oh over zero point three oh, three point oh metres per **second**. Zero point two seven comes from multiplying by the period. Divide by T, or multiply by **f**.

Visual: card shrinks to the top; "0.40 m", "1.30 m", "6.0 cm" and "0.30 s" underlined. On the card's graph a navy bracket between the crests: on "metres" boxed "(a) λ = 1.30 − 0.40 = 0.90 m; A = 6.0 cm"; on "second" boxed "(b) v = λ/T = 0.90 ÷ 0.30 = 3.0 m s⁻¹". On "f" a chip "v = 0.90 × 0.30 = 0.27 m s⁻¹" fades in and is crossed. Hold about 1 second.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. The graph is a snapshot of a sound wave in a tube. It shows each air particle's displacement against its rest position, with displacement in the direction of travel as positive. The displacement is zero at zero, zero point two oh, zero point four oh, zero point six oh and zero point eight oh metres, and positive between zero and zero point two oh metres. State the wavelength. Then state where the compressions are between zero and zero point eight oh metres, and give a reason. Pause here to answer.

Visual: `QuestionCard`, worded as printed, with a coded displacement-distance graph (rest position 0 to 0.80 m, gridlines every 0.05 m; displacement axis "−0.0010 to +0.0010 mm, + in the direction of travel"; an arrow "sound travels →"; the curve only, no rings or labels): "The graph is a snapshot of a sound wave travelling along a tube. It shows the displacement of each air particle against its rest position; displacement in the direction of travel is positive. The displacement is zero at 0, 0.20, 0.40, 0.60 and 0.80 m, and positive between 0 and 0.20 m. (a) State the wavelength of the sound. (b) State the positions of the compressions between 0 and 0.80 m, and justify your answer. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 2 (brief)
> One full cycle runs from zero to zero point four oh metres, so the wavelength is zero point four oh **metres**. The compressions are where the graph crosses zero going from positive to negative, at zero point two oh and zero point six oh metres. There, the particles behind have moved forward and the ones ahead have moved back, so they **crowd** together. The peaks at zero point one oh and zero point five oh metres aren't compressions. They're just the particles that moved **furthest**.

Visual: card shrinks to the top; "positive between 0 and 0.20 m" and "direction of travel is positive" underlined. On "metres" a navy bracket 0 to 0.40 m, boxed "(a) λ = 0.40 m". Small teal arrows on the card's graph either side of 0.20 m and 0.60 m point towards each other; slate rings on those falling crossings; on "crowd" boxed "(b) compressions at 0.20 m and 0.60 m: particles behind are displaced forward and those ahead backward, so they crowd together". On "furthest" a chip "compressions at the peaks, 0.10 m and 0.50 m" fades in and is crossed. Hold about 1 second.

### 14. handoff
> So a snapshot shows every particle at one instant. It gives the wavelength and the amplitude, and for a longitudinal wave, its zero crossings show where the compressions and rarefactions are. Every wave we've graphed has needed particles to move. In air, a loudspeaker pushes the particles, and they pass the energy along. So what happens to a sound if there are no particles at **all**?

Visual: the memory lines return small at the top. A summary strip: "snapshot repeat: λ", "height: A", "shift it to see motion", "λ + T → v", "squeezes at zero, arrows meeting". On "loudspeaker" board change: v04's loudspeaker plate (`phys-y11-loudspeaker-v1.png` with `phys-y11-loudspeaker-cone-v1.png`, cone moved by code) pushing a coded air row (`LongitudinalRow`, dots, tag "motion exaggerated"), compressions moving right; a hollow gold energy arrow crosses the board. On "no particles" the dots thin out until none are left; the cone keeps moving; the energy arrow stops at the cone. On "all" chips "no particles?", "no sound?", then "Next: Why can't sound travel without particles to pass its energy along?". This is the final frame of the video (series rule). Hold about 2 seconds.

### 15. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. A displacement-distance graph (snapshot) shows every particle's displacement against its position at one instant.
2. Wavelength λ: the distance between matching points (crest to next crest). Crest to trough is λ ÷ 2. Amplitude A: crest height above the zero line. A snapshot gives no period, so no speed on its own.
3. To see which way a point moves: redraw the snapshot shifted a little in the direction of travel, and compare.
4. Speed from two graphs: λ from the snapshot, T from the time graph, v = λ/T. Tell them apart by the horizontal axis.
5. Longitudinal snapshot (forward +): compressions where the curve crosses zero from + to − (displacements point towards each other); rarefactions where it crosses from − to +. Crests are not compressions.

Memory aids (large, on the notes screen): *Distance axis, distance answer. Squeezes sit at zero, where the arrows meet.*

At the end the notes cross-fade back to scene 14's final frame (series rule).

## Teaching checks

- **Does it explain causes?** Why a snapshot's repeat is a wavelength: its horizontal axis is position, and one repeat is one cycle in space (2, 3). Why one snapshot gives no speed: it holds no time (2, the frozen clock). Why P moves up: the crest behind it is moving towards it (5, the shifted ghost). Why two graphs give the speed: one supplies λ, the other T (6). Why compressions sit at the falling zero crossings: the particles either side are displaced towards each other (8, the converging arrows). Why the crests are not compressions: the graph shows how far each particle moved, not how crowded they are (7).
- **Misconceptions addressed:** the snapshot's gap is a period (3); one snapshot gives the speed (1, 2); crest to trough is a wavelength (3, crossed); all points move the same way (5); the two graphs are interchangeable (6); crests are compressions (7, 8 crossed; feedback 2 crossed); v = λ × T (feedback 1 crossed).
- **One idea at a time:** building the snapshot (2), λ and A (3), motion from a shifted snapshot (4, 5), two graphs to a speed (6), the longitudinal snapshot (7), where the compressions are (8).
- **Video makes it easier:** the student sees each particle drop its own dot (2), watches P ride up to the ghost while Q rides down (5), sees the arrows swing up and trace the curve (7), and sees converging arrows land on a zero crossing while dashed lines from the crests miss the compressions (7, 8).
- **Response opportunity:** two 3 s predictions (1, 4); two unseen HSC-style tasks, 10 seconds each, every value on the card, nothing answer-bearing (card graphs carry no brackets, rings or feature labels). One crossed mistake each; feedback about 20 s and 30 s.
- **Avoided double teaching:** v04's compressions and pressure picture, v05's v = fλ and v06's time graph (its flat peak and its memory aid) are recalled and used, not re-taught.
- **Syllabus coverage:** `ci6a03179f`: analyse displacement-distance graphs for transverse waves (2 to 6, A1) and longitudinal waves (7, 8, A2): wavelength, amplitude, the limit of one snapshot, the motion of a point, combining with a time graph, and compression and rarefaction positions.
- **Out of scope by design:** water waves and depth (v08, cultural hold); the medium and energy transfer (v09); phase; superposition (FA2 group 3).

## Practice questions and model answers

**Attempt 1 (scene 10; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "The graph is a snapshot of a transverse wave on a rope. It shows successive crests at x = 0.40 m and x = 1.30 m, with no crest between them, and a largest displacement of 6.0 cm. A displacement-time graph for one point on the rope shows a period of 0.30 s. (a) State the wavelength and the amplitude of the wave. (b) Calculate the speed of the wave."
Model answer: (a) λ = 1.30 − 0.40 = 0.90 m (successive crests on a distance axis); A = 6.0 cm (crest height above the zero line). (b) v = λ/T = 0.90 ÷ 0.30 = 3.0 m s⁻¹ (equivalently f = 1/0.30 = 3.3 Hz and v = fλ). Classic mistake (crossed): "v = 0.90 × 0.30 = 0.27 m s⁻¹" (multiplied by the period instead of dividing).

**Attempt 2 (scene 12; original wording, HSC style, 3 marks suggested).** "The graph is a snapshot of a sound wave travelling along a tube. It shows the displacement of each air particle against its rest position; displacement in the direction of travel is positive. The displacement is zero at 0, 0.20, 0.40, 0.60 and 0.80 m, and positive between 0 and 0.20 m. (a) State the wavelength of the sound. (b) State the positions of the compressions between 0 and 0.80 m, and justify your answer."
Model answer: (a) One full cycle runs from 0 to 0.40 m, so λ = 0.40 m. (b) Compressions at 0.20 m and 0.60 m. At these points the displacement changes from positive to negative: particles just behind are displaced forward (in the direction of travel) and particles just ahead are displaced backward, so they are displaced towards each other and crowd together. (At 0, 0.40 and 0.80 m they are displaced apart: rarefactions.) Classic mistake (crossed): "compressions at the peaks, 0.10 m and 0.50 m" (the peaks are where particles are displaced furthest, not where they crowd).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Frozen cord (v03, v06) | crests 0.50 and 2.00 m; troughs 1.25 and 2.75 m; λ 1.50 m; λ ÷ 2 0.75 m; A 3.0 cm | 1 to 5 |
| P and Q | P 2.20 m (up); Q 1.80 m (down); ghost shift 0.10 m | 4, 5 |
| Site `we-1` (rope) | λ 0.60 m; T 0.40 s; v 1.5 m s⁻¹ | 6 |
| Spring snapshot (v04) | λ 1.00 m; compressions 0.50, 1.50, 2.50 m; rarefactions 1.00, 2.00 m; crests 0.25, 1.25, 2.25 m; ¼ λ 0.25 m; A 2.0 cm | 7 to 9 |
| A1 | crests 0.40 and 1.30 m; A 6.0 cm; T 0.30 s; λ 0.90 m; v 3.0 m s⁻¹; crossed 0.27 m s⁻¹ | 10, 11 |
| A2 | zeros 0 to 0.80 m every 0.20 m; λ 0.40 m; compressions 0.20, 0.60 m; peaks 0.10, 0.50 m (crossed); axis ±0.0010 mm | 12, 13 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (2 Nov); Codex to re-check.

- 2.00 − 0.50 = 1.50; 2.75 − 1.25 = 1.50; 1.50 ÷ 2 = 0.75.
- Author note b: y(x) = 3.0 cos(2π(x − 0.50) ÷ 1.50). Now: y(2.20) = 3.0 cos(2π × 1.70 ÷ 1.50) = 3.0 cos(7.121) = +2.01 cm; ghost (shift 0.10 m) y_ghost(2.20) = y(2.10) = 3.0 cos(2π × 1.60 ÷ 1.50) = +2.74 cm: P rises (2.01 → 2.74). y(1.80) = 3.0 cos(2π × 1.30 ÷ 1.50) = +2.01 cm; ghost y(1.70) = 3.0 cos(2π × 1.20 ÷ 1.50) = +0.93 cm: Q falls. Crest point: y(2.00) = 3.00; ghost y(1.90) = 3.0 cos(2π × 1.40 ÷ 1.50) = 2.74 (the "momentarily at rest" chip replaces an arrow there). (The narration states only "higher" and "down".)
- `we-1`: 0.60 ÷ 0.40 = 1.5.
- Spring: s(x) = −2.0 sin(2π(x − 0.50)); s(0.25) = +2.0; s(0.75) = −2.0; zeros at 0.50, 1.00, 1.50; s just below 0.50 positive, just above negative (compression); 0.50 − 0.25 = 0.25 = λ ÷ 4.
- A1: 1.30 − 0.40 = 0.90; 0.90 ÷ 0.30 = 3.0; 1 ÷ 0.30 = 3.33; 0.90 × 0.30 = 0.27.
- A2: λ = 0.40; s = A sin(2πx ÷ 0.40): positive on (0, 0.20), negative on (0.20, 0.40); falling crossings 0.20, 0.60; peaks 0.10, 0.50; 340 ÷ 0.40 = 850 Hz (not stated); intensity ½ × 1.2 × 343 × (2π × 850)² × (1.0 × 10⁻⁶)² = 5.9 × 10⁻³ W m⁻² (98 dB; plausibility only).
- Site checks: 1.2 ÷ 0.30 = 4.0; 3.5 − 1.0 = 2.5; 2.5 ÷ 0.50 = 5.0; 0.80 ÷ 0.20 = 4.0; 1 ÷ 0.20 = 5.0; √(9.8 × 0.60 ÷ 2π) = 0.967 m s⁻¹.

## Memory aid check

- **"Distance axis, distance answer."** Written for this series as the partner of v06's "Time axis, time answer." Meaning, as said in scene 9 and on screen: on a graph with position along the bottom, the repeat is a length, the wavelength. Assumptions checked: the axis must be read first; "the repeat" is matching points one cycle apart; the height gives the amplitude on both graph types. It blocks the site's misconception 1 and the hook's trap.
- **"Squeezes sit at zero, where the arrows meet."** Written for this lesson. Meaning: on a longitudinal displacement snapshot, compressions are at the zero crossings where the displacements of particles on either side point towards each other. Assumptions checked: "zero" means a zero crossing of the displacement curve, not the origin (on screen: "at the zero crossings"); "where the arrows meet" picks the right half of the crossings under any sign convention (author note d), so the aid does not depend on remembering "positive to negative"; it applies to a displacement graph, not a pressure graph (on a pressure graph compressions are the peaks: said in 8). It echoes v04's "Squeeze to squeeze is one wavelength." It blocks A2's trap and site correction 1. Introduced after the compressions have been found (8).
- **Considered, not used:** "Compressions are crests" (true only on a pressure picture; site correction 1, v04 site correction 2).

## Narration length estimate

Revision 1 count (2 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,822 characters**, 15 scenes. Characters per scene (1 to 15): 305, 481, 445, 186, 380, 592, 512, 555, 173, 405, 326, 512, 478, 383, 75. At 13.3 characters per second the speech is about 438 s; add about 18 s of holds and settling (the dot drop in 2, the brackets in 3, the ghost shift in 5, the paired graphs in 6, the rotating arrows in 7, the rings and pressure band in 8, the thinning air in 14, the 2-second memory hold), 6 s for two prediction countdowns, 20 s for two attempt countdowns, 2 s of feedback holds and about 54 s more of the quiet notes hold (about 100 s of holds): **about 538 s**, inside the 5,500 to 6,800 character band and under the 570 s cap.

## Scene list and build ids

Lesson key `p-y11-fa2-v07` (root decision 2). Suggested explainer folder `src/explainer/lessons/phys-y11-fa2-v07` and build folder `docs/production/claude-pm/lessons/p-y11-fa2-v07` (root to confirm).

In order (kebab-case; 15 scene headings, all `### N.`): hook, building-snapshot, wavelength-amplitude, motion-prediction, moment-later, two-graphs-speed, longitudinal-snapshot, compressions-on-graph, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). The hook and motion-prediction carry 3 s countdowns inside explain scenes. Transitions (`pickTransition`): v06's last frame continues into scene 1 (camera continue: the same frozen cord and dots); 1 to 2 to 3 to 4 to 5 camera continue; 5 to 6 clear change to the calculation layout; 6 to 7 clear change (the spring); 7 to 8 to 9 camera continue; attempts and feedback card shrink to the top; 13 to 14 board clear; 14 to 15 fade to the notes board, and 15 cross-fades back to 14's final frame.

Holds: hook and motion-prediction (3 s), attempt-1, attempt-2 (10 s after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/p-y11-fa2-v07-learning-review.md`, `science_check` = `checks/p-y11-fa2-v07-physics-check.md`.

## Assets

`public/assets/physics/` does not exist yet (checked 2 Nov). Requested earlier (uniform scaling only, never stretched):
- v01's `phys-y11-wave-driver-v1.png`, `phys-y11-wave-driver-rod-v1.png` and `phys-y11-signal-generator-v1.png`: scenes 1 to 5 (cord) and 7 to 9 (spring).
- v04's `phys-y11-loudspeaker-v1.png` and `phys-y11-loudspeaker-cone-v1.png`: scene 14 (the handoff frame, reused by v09).

Need: no new plate.

Coded: the cord, spring, coils, home ticks, displacement arrows, dots, snapshot curves, ghost snapshot, P and Q markers and arrows, zero-crossing rings, the pressure band, the air row, the energy arrow, the card graphs, `AlignedAlgebra`, `Countdown`, `QuestionCard`, `Chip` with `cross`, `KeyNotes`, `Heading`.

Kit gaps (for the build brief): **`SnapshotGraph`** (new, physics; transverse and longitudinal modes, ghost shift with per-point rise and fall arrows, zero-crossing rings computed from the sign change, the arrow-rotation build from `LongitudinalRow`, aligned horizontal scale with the source above); v06's `TimeTrace` (static); v04's pressure band reused on a graph.

## Codex asset brief

No new plates for this video. Reuse only v01's wave driver, rod and signal generator, and v04's loudspeaker body and cone.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the snapshot curves are computed from the drawn particles' displacements (author notes a, c), with the cord or spring above on the same horizontal scale; the ghost is the same curve shifted 0.10 m in the travel direction; P rises and Q falls (author note b).
3. Confirm the physics claims: a displacement-distance graph shows every particle's displacement against position at one instant; its repeat is λ, crest to trough λ ÷ 2; it holds no time, so no speed on its own; a shifted snapshot shows which way each point moves, given the travel direction; λ from a snapshot and T from a time graph give v = λ/T; for a longitudinal snapshot with forward positive, compressions are at falling zero crossings (displacements towards each other) and rarefactions at rising ones, a quarter wavelength from the crests; the pressure band peaks at the compressions.
4. Confirm the memory aids' conditions ("at the zero crossings where displacements point towards each other") are on screen.
5. Confirm both attempt questions are original in wording, carry every value (including the sign convention and travel direction on A2's card), and show nothing answer-bearing.
6. Confirm the syllabus quote matches the route JSON exactly and no 2017-syllabus label appears.
7. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
8. Confirm the narration character count by script with the build parser rules.
9. Add site corrections 1 and 2 under Decisions to `../site-corrections-phys-y11.md` (owner record only).

## YouTube metadata (draft)

Title: Displacement-Distance Graphs: Wavelength and Where Compressions Sit | Year 11 Physics

(Title length: 85 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa2-waves/lesson06.sa.html

Freeze a whole wave at one instant and plot every particle: that snapshot is a displacement-distance graph. See how to read its wavelength and amplitude, why one snapshot can't give a speed, how a snapshot drawn a moment later shows which way each point is moving, and how a snapshot and a time graph together give the wave's speed. Then find where the compressions really sit on a longitudinal wave's snapshot (not at the crests). Two exam-style questions at the end.

Year 11 Physics (2025 syllabus), Focus Area 2: Waves.
Syllabus content (NSW Physics 11-12, 2025):
"Analyse displacement–distance graphs for longitudinal and transverse waves" (ci6a03179f)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa307d399c

Builds on: Displacement-time wave graphs (previous video). Next: Mechanical waves and sound energy.

#Year11Physics #Physics #Waves #HSCScience

## Open decisions

- **1. Handoff to v09 (v08 on cultural hold).** As root decision 14 of the v13 to v24 file did for FA1 v24, this video hands off to v09, with a proposed causal form of its placeholder question: "Why can't sound travel without particles to pass its energy along?" (v09's design adopts it). If v08 is released, only the separate handoff take and chip change (v08's water-depth question replaces it), and the v09 opening is re-aligned.
- **2. Learner question and route boundaries (root to record).** Adopted "How does a snapshot of every particle at one instant show a wave's wavelength?" (v06's chip). Proposed start: "Start with every particle's displacement plotted against position at one instant." Proposed stop: "Stop after λ and A, the limit of one snapshot, a point's motion from a shifted snapshot, speed from two graphs, and compressions at the converging zero crossings; hand the medium and energy transfer to v09."
- **3. Direction-of-motion scope.** Scenes 4 and 5 go beyond the site's cards; "analyse" and common HSC items support them. If the learning review finds the video crowded, 4 and 5 merge into one 300-character scene with P only (no Q).
- **4. Snapshot term.** The site and this video use "snapshot" alongside "displacement-distance graph"; HSC papers also write "displacement-position graph". The key notes keep the syllabus name first.
- **5. Site link form.** As FA1 v08.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v04 to v06 at Year 11 entry; check that the dot drop makes "every particle at one instant" seen; that the ghost shift is read as "a moment later", not as a second wave; that the rotating arrows make a longitudinal snapshot believable; that "squeezes sit at zero, where the arrows meet" is heard with the zero crossing meaning; that the cards give nothing away), then the Codex physics check and error check.
- The dot drop (2), the ghost shift with P and Q (5), the arrow rotation (7) and the converging arrows on the zero crossings (8) carry the explanation; judge them at playback speed in the voiced preview.
