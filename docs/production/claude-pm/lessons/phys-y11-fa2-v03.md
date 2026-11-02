# Year 11 Physics FA2 V03 (Physics 2025, Year 11, Focus Area 2): How do we measure a transverse wave, and what sets each measurement? (design)

Status: Revision 1 (2 Nov). Needs independent student learning review (key `p-y11-fa2-v03`, `docs/production/student-learning-review.md`), a Codex physics check and a Codex error check before build. Voice: Google AI Studio after the brief 124 pilot; physics follows Year 12 Maths and Year 11 Biology in the voicing queue. Nothing recorded; human listening pending. Plates: no new plate (v01's wave driver and signal generator).

Narration 5,453 characters, 16 scenes, about 510 s (8.5 minutes) including two 3 s prediction countdowns, two 10 s attempt countdowns and the notes hold, counted by script with the build parser rules (see "Narration length estimate").

Scope: third video of the Year 11 Physics (2025) Focus Area 2 route and the first of two describing videos (v04 does the same for longitudinal waves). Templates: `phys-y11-fa1-v22.md` (concept format, section list); house conventions and the FA2 colour key from `phys-y11-fa2-v01.md` and `phys-y11-fa2-v02.md` (Revision 1, written just before this one; v02's scene 17 frame is this video's first frame). No pre-design pack exists: the pack work is done in this file. Site lesson read in full (2 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year11/fa2-waves/lesson02.sa.html` (orient, intentions and key terms, card 1 crests, troughs and amplitude, card 2 wavelength with `we-1`, activity 1, card 3 frequency and period, independent practice, retrieve). Route entry: `phys-y11-fa2-v03` in `../../phys-y11-video-route.json` (proposed). Route start: "Start with Describing Transverse Waves. Recall only the signed arithmetic, measurement or earlier physical quantities needed for the listed actions." Route stop: "Stop after the learner can answer: How can I explain and apply describing transverse waves? Teach only the listed actions; the next video owns its separate question." Next (route, placeholder wording): "phys-y11-fa2-v04: How can I explain and apply describing longitudinal waves?" (the handoff chip uses v04's rewritten question, "How do squeezed and stretched regions let us measure a longitudinal wave?").

Owner rules applied: 2025 syllabus only; no people, hands or faces (the cord is driven by v01's painted wave driver, moved by code); apparatus painted at native aspect; the cord, wave, brackets, rulers, counters and timers coded; one reasoning stage at a time; 3 s in-teaching predictions; "Pause here to answer." with a 10 s countdown and the full worded question; brief feedback with one crossed mistake; original questions; key-notes hold; Australian spelling; no em dashes; v01 and v02 recalled in a sentence each.

Syllabus content point (Physics 11-12 (2025), Year 11, Focus Area 2, group "Wave properties"; local ledger ID with NESA content-system codename), quoted from the route JSON `syllabusActions`:

- P25-FA2-G1-02 `ci19ed9f77`: "Describe the wavelength, frequency, period, crest, trough and amplitude of transverse waves"

Source: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa307d399c

**Boundary:** starts from v02's handoff (the wave driver making a steady transverse wave on a long cord over a grey dashed rest line; chips "how tall?", "how long?", "how often?"; "Next: How do we measure a transverse wave, and what sets each measurement?"); the rest line, crest and trough; amplitude from the rest line (not crest to trough), set by how far the driver swings; wavelength between matching points (not crest to trough), with the site's `we-1`; frequency as waves passing a fixed point each second, in hertz, set by the driver; period as the time for one wave to pass, equal to the time for one particle's full oscillation and for one driver cycle; frequency and period as reciprocals, described with one example; why a faster driver makes shorter waves on the same cord (a crest moves on one wavelength in one period). Not taught: v = fλ or any calculation combining speed (v05; the hook's equal speeds are shown, not calculated); problems using f = 1/T beyond the one described example (v05); displacement-time and displacement-distance graphs (v06, v07: the wave here is the cord's own shape, frozen or moving, not a plotted graph); longitudinal waves (v04).

## Decisions

- **Learner question (route placeholder rewritten; recorded here).** The route's "How can I explain and apply describing transverse waves?" is a placeholder. Rewritten: "How do we measure a transverse wave, and what sets each measurement?" (one question; "what sets it" makes each description causal). The answer, built in order: crest and trough above and below the rest line (2); amplitude from the rest line, set by the driver's swing (3); wavelength between matching points (5); frequency, counted at a fixed point, set by the driver (6); period, the time for one wave, the same as one particle's oscillation and one driver cycle, the reciprocal of frequency (7); amplitude and wavelength come from a frozen instant, frequency and period from one point over time (8); the wavelength set by how far a crest moves in one period, so a faster driver on the same cord gives shorter waves (9).
- **The hook (site hook, made concrete).** "The driver runs at 2.0 Hz, then 4.0 Hz, on the same cord, with the same swing. One wave looks long and rolling, the other short and choppy, yet both travel equally fast. Which measurements changed?" 3 s prediction; the answer comes in pieces (frequency in 6, period in 7, wavelength in 5 and 9; amplitude unchanged in 3) and is closed in 9. The equal speeds are shown by a marker on each wave's leading crest moving side by side; no speed value is given (v05).
- **The cause made visible (owner quality bar).** (3) The driver's rod swings through 3.0 cm each way and the cord's crests rise exactly that far: a dashed line from the rod's top to the crest. (6) A fixed "watch point" gate at the 2.00 m mark counts crests as they pass while a 1-second timer runs. (7) A purple ribbon at the watch point does one full up-and-down in exactly the time one wave passes, beside the driver's rod doing the same: three clocks agree. (8) A split board: the frozen cord (a photo) against one point watched over time (a stopwatch). (9) A freeze-and-step: the driver makes one full cycle while the first crest (glowing) moves on exactly one wavelength, drawn as a navy bracket that grows with it; then at 4.0 Hz the bracket stops at half the length.
- **Values (site examples, unchanged).** Amplitude 3.0 cm and period 0.25 s (site activity 1); wavelength from crests at 1.20 m, 1.95 m and 2.70 m: 0.75 m (`we-1`); 5 Hz gives 0.2 s (card 3); crests 0.8 m above and troughs 0.8 m below give A = 0.8 m (card 1 check, shown in scene 3). The cord's 4.0 Hz wave is chosen so that the site's 0.75 m, 0.25 s and 3.0 cm are all the same wave (author note a).
- **Prediction 2 (3 s, site quick check).** "Is the distance from a crest to the next trough one wavelength?" No: half (5).
- **Frequency and period as reciprocals (described, not drilled).** Said and shown with the cord: four waves each second, so each takes a quarter of a second; written "f = 1/T, T = 1/f" with the site's 5 Hz example. Problems using the relation are v05's point (`ci2298dbee`); A2 uses the definition of a period directly.
- **Amplitude and energy (site card 1).** One sentence with its condition: "on the same cord, at the same frequency, a bigger amplitude means the wave carries more energy". Not quantified.
- **Attempts (original, HSC style).** (A1) A snapshot of a cord against a metre ruler: crests at 0.40 m, 1.30 m and 2.20 m; crests 4.0 cm above the rest line and troughs 4.0 cm below. Amplitude 4.0 cm; wavelength 0.90 m; crest to the next trough along the cord 0.45 m. Crossed: "amplitude = 8.0 cm" (crest to trough). (A2) A ribbon on a rope takes 0.20 s to move from its highest point to its lowest point: period 0.40 s (highest to lowest is half an oscillation); frequency 2.5 Hz (2.5 oscillations each second). Crossed: "period = 0.20 s".
- **Mistake scene:** none separate. "Amplitude is crest to trough" (3, feedback 1 crossed; site misconception 1); "crest to next trough is one wavelength" (4, 5; site quick check); "high frequency means a long period" (7; site misconception 2); "highest to lowest is a full period" (feedback 2 crossed); "a bigger swing makes longer waves" (9: the swing sets only the amplitude).
- **Memory aid:** "Amplitude starts at the rest line. Wavelength goes match to match." (see "Memory aid check").
- **Handoff (route next).** The cord's wave slides away; a long spring on the same driver (turned to push along it) carries a steady longitudinal wave of squeezed and stretched regions; chips "crest?", "trough?", "wavelength?" each with a question mark; then "Next: How do squeezed and stretched regions let us measure a longitudinal wave?". This is the frame v04 opens on.
- **Site sources used:** intro and hook (choppy and rolling waves at the same speed: scene 1); warm-up (how big and how often: scene 1); key terms (crest, trough, amplitude, wavelength, frequency, period: scenes 2 to 7); misconceptions 1 and 2 (3, 7); card 1 and its check (2, 3); card 2 and `we-1` (5); quick check (4); activity 1 (3.0 cm, 0.25 s: the cord's wave in 3, 6, 7); card 3 (frequency, period, hertz, reciprocal, 5 Hz: 6, 7; its opening contrast, the wave in space against the wave in time: 8); matching task (the four definitions: key notes); Q3 (amplitude error as a factor of two: feedback 1). Not used: Q1 and Q2 (their T = 1/f and buoy items; v05 and a water-wave context, see site correction 2); the reflection's "if one has a longer wavelength it must have a lower frequency" (true for the same speed; v05 owns it, and scene 8 shows it for the same cord).
- **Site corrections (quoted from site lesson 2, read 2 Nov; for `../site-corrections-phys-y11.md`; not logged yet):**
  1. Card 2, `we-1` question: "On a string, successive crests are found at the $1.2\ \text{m}$, $1.95\ \text{m}$ and $2.70\ \text{m}$ marks." The given step writes "$1.20\ \text{m}$". Precision is inconsistent between the question and the working (two against three significant figures). Suggest "1.20 m" in the question.
  2. Short-answer Q2: "A transverse water wave has crests $2.4\ \text{m}$ apart, and a floating buoy rises and falls ..." Surface water waves are not purely transverse (the buoy moves in a small loop); the same issue as lesson 1 (logged by v01). The answers (2.4 m, 0.30 m, 0.50 Hz) are unaffected. Suggest "A water wave (treated here as transverse) ..." or a rope wave.
  3. Card 1: "how far a particle swings from its undisturbed rest position is the amplitude, and it sets how much energy the wave carries" and "Larger amplitude means the wave carries more energy." True only when the medium and frequency are the same (energy also depends on frequency and the medium). Suggest adding "for waves of the same frequency in the same medium".
  - Checked and correct: card 1 (crest, trough, amplitude from the rest line, crest to trough = 2A); the check (0.8 m); card 2 (matching points; λ = 0.75 m, checked twice); quick check (false); activity 1 (6 cm; 4 Hz); card 3 (hertz; T = 1/f; 5 Hz gives 0.2 s); last check (50 Hz); matching task; Q1 (0.25 s) and Q3 (twice the amplitude) model answers.
- **Cause chain taught, in order:** (1) two waves differ, but which measurements changed? (1); (2) crest and trough, against the rest line (2); (3) amplitude from the rest line; the driver's swing sets it (3); (4, 5) wavelength between matching points, not crest to trough (4, 5); (6) frequency counted at a fixed point; the driver sets it (6); (7) period: one wave passes, one particle oscillates, one driver cycle, all the same time; the reciprocal of frequency (7); (8) a photo gives amplitude and wavelength, a stopwatch at one point gives frequency and period (8); (9) a crest moves one wavelength in one period, so on the same cord a faster driver gives shorter waves (9); (10) memory aid (10).
- **Entry knowledge (route `entryKnowledge`):** Stage 5 (reading a ruler; reciprocals such as a quarter and four). From FA2, recalled in a line each: v01 (transverse: particles oscillate across the energy's direction about a rest position), v02 (following one marked particle).
- **Learner-visible vocabulary (plain meaning at first use):** rest line (where the cord sits with no wave, scene 2); crest (a highest point, scene 2); trough (a lowest point, scene 2); amplitude, A (the largest distance a particle moves from its rest position, scene 3); wavelength, λ, "lambda" (the length of one complete wave, between two matching points, scene 5); matching points (points at the same stage of their up-and-down motion, scene 5); frequency, f (the number of complete waves passing a point each second, scene 6); hertz, Hz (one wave per second, scene 6); period, T (the time for one complete wave to pass, scene 7); reciprocal (one over, scene 7).
- **Legacy logic ported:** none. Drawing parts only: `Arrow`, `Label`, `Panel` (`course-kit.tsx`).
- **New explainer motion (coded unless a plate is named):** **`WaveString`** (new, physics: a continuous cord y(x, t) = A sin(kx − ωt) from the driver's rod, with an absorbing far end; rest line; crest and trough labels that ride with the wave; an amplitude bracket from the rest line; a wavelength bracket between two matching points, freezable; a freeze-frame and step mode; a metre-ruler overlay; a fixed "watch point" gate with a crest counter and a timer; a ribbon at any x; two stacked copies sharing one clock for comparisons; a leading-crest marker); the driver's rod (v01 plate) moved by the same ω; **dashed level line** (from the rod's top to a crest, scene 3); **three-clock panel** (the ribbon, the gate and the rod, each with its own "0.25 s" readout, scene 7); `AlignedAlgebra` (scene 5's working); `Countdown` (3 s, 10 s); `QuestionCard` (subject "Physics") with a coded snapshot and ruler; `Chip` with `cross`; `KeyNotes`; `Heading`.
- **Board layout (constant):** heading top-left; the driver and signal generator at the left; the cord across the middle third to the right edge, its rest line grey dashed; brackets and labels on the cord; counters, timers and working in the lower third.
- **Colour key:** v01's FA2 key; amplitude bracket teal (a displacement); wavelength bracket navy; crests and troughs ink labels; the ribbon purple; the watch-point gate ink with an amber counter; the leading-crest marker gold (it rides the energy's front).
- **No human figures.**
- **Author notes (not learner copy):**
  (a) The cord's wave: speed 3.0 m s⁻¹ (not stated). At 4.0 Hz: λ = 0.75 m, T = 0.25 s; at 2.0 Hz: λ = 1.50 m, T = 0.50 s; amplitude 3.0 cm for both (the driver's swing). Crests of the 4.0 Hz wave frozen at 1.20 m, 1.95 m and 2.70 m on the ruler overlay (scene 5). Screen scale: 3.0 m of cord across the board; the 3.0 cm amplitude drawn exaggerated vertically, tag "height exaggerated" (author note b).
  (b) Vertical exaggeration: amplitude drawn at 10 × the horizontal scale so crests are visible; every frame with the cord carries the tag "height exaggerated ×10". The amplitude bracket's readout gives the true 3.0 cm.
  (c) Slow motion: the 4.0 Hz and 2.0 Hz waves play at 0.25 × (tag "slowed down"); the counter and timers run in slowed time but read real seconds (the timer reads "1.00 s" when four crests have passed).
  (d) Hook comparison: the two leading-crest markers start together at the driver and stay level as both waves advance (same speed, 3.0 m s⁻¹); not quantified.
  (e) Scene 9 step: during one driver cycle (0.25 s at 4.0 Hz) the leading crest moves 0.75 m; at 2.0 Hz (0.50 s) it moves 1.50 m. Said: "the same cord, so crests move equally fast"; v05 turns this into v = fλ.
  (f) A1: 1.30 − 0.40 = 0.90 m; 2.20 − 1.30 = 0.90 m; A = 4.0 cm; crest to next trough along the cord = λ ÷ 2 = 0.45 m; crossed 2 × 4.0 = 8.0 cm.
  (g) A2: highest to lowest = T ÷ 2 = 0.20 s, so T = 0.40 s; f = 1 ÷ 0.40 = 2.5 Hz; crossed T = 0.20 s (and f = 5.0 Hz).
  (h) Pronunciations: "lambda"; "hertz"; "zero point seven five metres"; "four point oh hertz"; "zero point two five seconds".

Main question: *On the same cord, one wave looks long and rolling and another short and choppy, yet both travel equally fast. How do we measure a transverse wave, and what sets each measurement?*
Entry knowledge (Stage 5 ruler reading and simple reciprocals; v01 transverse waves; v02 following one particle).
Stops after: crest, trough, amplitude (from the rest line; set by the swing); wavelength (match to match); frequency (count at a point; set by the driver); period (one wave, one oscillation, one cycle; reciprocal of frequency); a crest moving one wavelength in one period. No v = fλ, no problems with f = 1/T beyond one example, no graphs.
Handoff: v04, describing longitudinal waves.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key as Decisions.

### 1. hook (what changed?)
> Last time, we followed one coil to show what particles do in a wave. Now let's put numbers on a wave. This driver shakes a long cord, two times a second. Now four times a second, with the same swing. One wave looks long and rolling, the other short and choppy. Yet watch the front of each wave. They travel equally fast. So which measurements actually **changed**?

Visual: opens on v02's last frame (the driver and signal generator at the left, the cord in a steady transverse wave over the grey dashed rest line, chips "how tall?", "how long?", "how often?"; the "Next" chip). The chip becomes the heading: "Measuring a transverse wave". The signal generator's display window shows a coded "2.0 Hz" (tag "driver setting"); the cord's wave is long (author note a). On "four times" a second cord appears below on a second driver at "4.0 Hz"; same swing. On "front" gold markers on each wave's leading crest start together at the drivers and move right side by side (author note d). On "changed" chips "how tall?", "how long?", "how often?" each gain a "changed?" tick box, and a 3-second countdown ring.

### 2. rest line, crest and trough
> We'll answer it one measurement at a time, using the four times a second wave. First, the rest line. That's where the cord sits when there's no wave at all. A highest point above it is a **crest**. A lowest point below it is a **trough**. Crests and troughs ride along the cord as the wave travels, while each piece of cord just moves up and down.

Visual: the 2.0 Hz cord fades to a small inset at the upper right; the 4.0 Hz cord fills the middle third. The wave freezes. The grey dashed rest line glows, gloss "rest line: where the cord sits with no wave". On "crest" one highest point gains the label "crest"; on "trough" one lowest point gains "trough". The wave runs again (tag "slowed down"): the labels ride with their crest and trough, while a purple ribbon at 2.00 m moves straight up and down above its home mark.

### 3. amplitude: measured from the rest line
> How tall is the wave? Not crest to trough. The amplitude is the largest distance a particle moves from its rest position, so we measure from the rest line up to a crest. Here it's three point oh **centimetres**. Crest to trough is six, twice the amplitude, a classic trap. What sets it? The driver's swing. Its rod moves three centimetres each way, and the crests rise exactly that **far**. On the same cord, at the same frequency, a bigger amplitude means the wave carries more energy.

Visual: freeze. A teal bracket from the rest line up to a crest, readout "A = 3.0 cm" (tag "height exaggerated ×10"), gloss "amplitude A: the largest distance a particle moves from its rest position". On "Crest to trough" a grey bracket from crest to the next trough, "6.0 cm = 2A", and a chip "amplitude = crest to trough" crossed. On "far" the driver's rod at the top of its swing; a dashed level line runs from the rod's tip to the crest's top; readout "rod: 3.0 cm each way". Small grey chip, from the site's check: "crests 0.8 m above, troughs 0.8 m below: A = 0.8 m". On the last sentence the bracket grows on a ghost wave with a bigger swing, tag "same cord, same frequency: more energy".

### 4. prediction: crest to trough
> Now, how long is one wave? Is the distance from a crest to the very next trough one **wavelength**?

Visual: the frozen cord with a crest and the next trough ringed; a dashed horizontal span between them. On "wavelength" chips "yes?", "no?" and a 3-second countdown ring.

### 5. wavelength: match to match
> No, that's only half a wave. The wavelength, called lambda, is the length of one complete wave. Measure it between two matching points, points at the same stage of their up and down motion, like a crest and the next **crest**. Careful: two points at the same height don't match if one is moving up and the other is moving down. On a ruler, three crests sit at the one point two oh, one point nine five and two point seven oh metre marks. One point nine five minus one point two oh is zero point seven five metres. The next gap is zero point seven five too, so the wavelength is zero point seven five **metres**.

Visual: on "half" the crest-to-trough span relabels "½ λ" and the "no?" chip fills. A navy bracket from one crest to the next: "wavelength λ (lambda): one complete wave" (gloss "matching points: same stage of the up-and-down motion"); the bracket slides to trough-to-trough and then to two matching mid-points on rising slopes, staying the same length. On "Careful" two points at the same height, one on a rising slope (small up arrow) and one on a falling slope (small down arrow), are joined by a dashed span that takes a scribble cross (caption "same height, opposite motion: not matching"). On "On a ruler" a metre-ruler overlay slides under the frozen cord; the three crests drop pointers onto "1.20", "1.95" and "2.70" (grey tag "site worked example"). `AlignedAlgebra` rows: "λ = 1.95 − 1.20 = 0.75 m"; "check: 2.70 − 1.95 = 0.75 m"; on "metres" boxed "λ = 0.75 m".

### 6. frequency: how often
> How often does the wave repeat? Stand at one spot and count the crests that pass. At the two metre mark, four crests go past in one second. That's the frequency: the number of complete waves passing a point each second. It's measured in hertz, and one hertz is one wave per second. So this wave's frequency is four point oh **hertz**. What sets it? The driver. It shakes four times a second, so four waves leave it each second, and four pass every point down the **cord**.

Visual: the wave runs (tag "slowed down"); a watch-point gate (thin vertical ink frame) stands at 2.00 m with an amber counter and a timer from "0.00 s". Each crest passing ticks the counter: 1, 2, 3, 4 as the timer reaches "1.00 s". Gloss "frequency f: complete waves passing a point each second"; on "hertz" "f = 4.0 Hz" (gloss "1 Hz = one wave per second"). On "driver" the rod's cycles are counted by a second counter at the driver: "4 each second"; on "cord" both counters read 4, joined by a dashed line.

### 7. period: the time for one wave
> The period is the time for one complete wave to pass. Four waves pass each second, so each one takes a quarter of a second, zero point two five **seconds**. Watch three clocks agree. The ribbon makes one full up and down, the gate sees one whole wave pass, and the driver makes one full cycle, all in zero point two five seconds. So frequency and period are reciprocals: one is one over the other. Five waves a second means a fifth of a second each. High frequency means a short **period**.

Visual: gloss "period T: the time for one complete wave to pass"; row "4 waves each second → each takes ¼ s"; on "seconds" boxed "T = 0.25 s". On "three clocks" a three-clock panel: the purple ribbon at 2.00 m (one full up-and-down, its own timer "0.25 s"), the gate (one crest to the next crest passing, "0.25 s"), the driver's rod (one full cycle, "0.25 s"); all three timers finish together and glow. On "reciprocals" rows "f = 1/T, T = 1/f" (gloss "reciprocal: one over"); grey chip "site example: 5 Hz → T = 1/5 = 0.2 s"; small grey tag "solving problems with it: v05". On "period" the 2.0 Hz inset enlarges briefly beside: "2.0 Hz: T = 0.50 s"; a chip "high frequency, long period" fades in and is crossed.

### 8. two ways to look at a wave
> Notice that we used two different ways of looking. To find the amplitude and the wavelength, we froze the whole cord at one instant, like a photo, and measured along it. That's the wave in space. To find the frequency and the period, we watched one point as time went by, like a stopwatch. That's the wave in time. A photo can't tell you the period, and a stopwatch at one point can't tell you the **wavelength**. You need both views.

Visual: split board. Left panel "one instant (a photo)": the frozen cord with the teal amplitude bracket and the navy wavelength bracket, a small camera-shutter icon (coded). Right panel "one point over time (a stopwatch)": the cord running, the gate at 2.00 m with its counter and timer and the ribbon going up and down, readouts "f = 4.0 Hz", "T = 0.25 s". On "can't tell you the period" a "T = ?" chip on the photo panel; on "wavelength" a "λ = ?" chip on the stopwatch panel. On "both views" the two panels join under one heading: "space: A, λ / time: f, T". Grey tag "graphs of each view: v06 and v07".

### 9. what sets the wavelength
> So back to the two waves. Both had the same swing, so the same amplitude. The frequency doubled, so the period halved. And the wavelength? Here's the reason it changed. While the driver makes one full cycle, the first crest moves on by exactly one **wavelength**. Both waves are on the same cord, so their crests move equally fast. At two hertz, a crest has half a second to move on, so the wave is one point five oh metres long. At four hertz, it has only a quarter of a second, so it gets half as far: zero point seven five **metres**.

Visual: both cords back, stacked, sharing one clock (the hook's layout). Tick boxes from scene 1 fill: "how tall? A 3.0 cm: unchanged"; "how often? f 2.0 → 4.0 Hz, T 0.50 → 0.25 s: changed". On "one full cycle" a freeze-and-step on the 2.0 Hz cord (author note e): the driver's rod makes one full cycle while the leading crest (glowing gold) moves right, a navy bracket growing behind it from the driver; on "wavelength" the step ends with the bracket exactly one wavelength long, readout "one cycle → crest moves one λ". On "half a second" the readout "T = 0.50 s → λ = 1.50 m"; the same step plays on the 4.0 Hz cord, its bracket stopping halfway: on "metres" "T = 0.25 s → λ = 0.75 m". The third tick box fills: "how long? λ 1.50 → 0.75 m: changed". A chip "a bigger swing makes longer waves" fades in and is crossed (caption "the swing sets only the amplitude").

### 10. memory aid
> To keep the two lengths straight: amplitude starts at the rest line, and wavelength goes match to **match**.

Visual: the frozen 4.0 Hz cord with the teal amplitude bracket and the navy wavelength bracket. The handwritten line writes large: "Amplitude starts at the rest line. Wavelength goes match to match." On "rest line" the rest line and teal bracket pulse; on "match" the two crests at the navy bracket's ends pulse. Hold about 2 seconds.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. The diagram shows a cord at one instant, with a metre ruler. Crests are at zero point four oh, one point three oh and two point two oh metres. Each crest is four point oh centimetres above the rest line, and each trough four point oh below. State the amplitude and the wavelength, and find how far along the cord a crest is from the next trough. Pause here to answer.

Visual: board clears. `QuestionCard` (subject "Physics"), worded as printed, with a coded snapshot (the cord at one instant over a dashed rest line, a metre ruler underneath; pointers "0.40 m", "1.30 m", "2.20 m" at the crests; "4.0 cm" marked above the rest line at one crest and "4.0 cm" below it at one trough; no brackets): "The diagram shows a transverse wave on a cord at one instant. Crests are at the 0.40 m, 1.30 m and 2.20 m marks. Each crest is 4.0 cm above the rest line and each trough is 4.0 cm below it. (a) State the amplitude and the wavelength of the wave. (b) Determine the distance along the cord from a crest to the next trough. (3 marks)" Tag: "HSC-style question, written for HSCScience". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 12. feedback 1 (brief)
> The amplitude is four point oh centimetres, from the rest line. The wavelength is one point three oh minus zero point four oh, zero point nine oh **metres**. A crest to the next trough is half a wavelength, zero point four five metres. Eight centimetres is crest to trough. That's twice the **amplitude**.

Visual: card shrinks to the top; "above the rest line" and "crests at" underlined. On the card's snapshot a teal bracket "A = 4.0 cm" from the rest line; on "metres" a navy bracket "λ = 1.30 − 0.40 = 0.90 m", boxed "(a)"; row "(b) crest to next trough = λ ÷ 2 = 0.45 m", boxed. On "amplitude" a chip "A = 8.0 cm" fades in and is crossed. Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. A ribbon tied to a rope takes zero point two oh seconds to move from its highest point to its lowest point. State the period and the frequency of the wave. Pause here to answer.

Visual: `QuestionCard`, worded as printed (no diagram): "A transverse wave travels along a rope. A ribbon tied to the rope takes 0.20 s to move from its highest point to its lowest point. (a) State the period of the wave. (b) Determine the frequency of the wave. (2 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 2 (brief)
> Highest to lowest is only half an oscillation. The ribbon needs another zero point two oh seconds to get back up, so the period is zero point four oh **seconds**. That's two and a half oscillations each second, so the frequency is two point five **hertz**. A period of zero point two oh seconds counts only half the **trip**.

Visual: card shrinks to the top; "highest point to its lowest point" underlined. A small ribbon sketch: down arrow "0.20 s", up arrow "0.20 s"; on "seconds" boxed "(a) T = 0.20 + 0.20 = 0.40 s"; on "hertz" boxed "(b) f = 1 ÷ 0.40 = 2.5 Hz". On "trip" a chip "T = 0.20 s" fades in and is crossed. Hold about 1 second.

### 15. handoff
> So amplitude comes from the driver's swing, frequency and period from how fast it shakes, and wavelength from how far the wave moves in one period. Next, the same driver pushes and pulls a spring instead. There are no crests or troughs now, just squeezed and stretched regions. So where's the **wavelength**?

Visual: the memory line returns small at the top. A summary strip writes on the 4.0 Hz cord: "A ← driver's swing", "f, T ← how fast it shakes", "λ ← how far the wave moves in one period". On "spring instead" the cord slides away; the driver rotates to push along a long coiled spring (v01's coded spring), which carries a steady longitudinal wave of slate-shaded squeezed regions and pale stretched regions (tag "slowed down"). On "wavelength" chips "crest?", "trough?", "wavelength?" each with a question mark, then "Next: How do squeezed and stretched regions let us measure a longitudinal wave?". This is the final frame of the video (series rule). Hold about 2 seconds.

### 16. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Crest: a highest point; trough: a lowest point, above and below the rest line.
2. Amplitude A: the largest distance a particle moves from its rest position, measured from the rest line to a crest (crest to trough = 2A). Set by the source's swing.
3. Wavelength λ: the length of one complete wave, between two matching points (crest to next crest). Crest to next trough is λ ÷ 2.
4. Frequency f: the number of complete waves passing a point each second, in hertz (Hz). Set by the source.
5. Period T: the time for one complete wave to pass (also one full oscillation of a particle). f = 1/T and T = 1/f: high frequency, short period. In one period, the wave moves on one wavelength.

Memory aid (large, on the notes screen): *Amplitude starts at the rest line. Wavelength goes match to match.*

At the end the notes cross-fade back to scene 15's final frame (series rule).

## Teaching checks

- **Does it explain causes?** Why amplitude is from the rest line: it's the particle's largest distance from home (3). What sets amplitude: the driver's swing, shown with a level line (3). Why crest to trough isn't a wavelength: the wave hasn't repeated (5). What sets frequency: the driver's shaking rate, shown with two counters (6). Why period is the same three ways: one wave, one oscillation, one cycle (7, three clocks). Why frequency and period are reciprocals: waves per second against seconds per wave (7). Why a faster driver makes shorter waves: a crest moves one wavelength in one period, and the period is shorter (9, the stepped bracket). Why both views are needed: a photo has no time in it, and one point has no length (8).
- **Misconceptions addressed:** amplitude crest to trough (3, feedback 1 crossed); crest to trough as a wavelength (4, 5); high frequency, long period (7, crossed); highest to lowest as a full period (feedback 2 crossed); a bigger swing makes longer waves (9, crossed).
- **One idea at a time:** crest and trough (2), amplitude (3), wavelength (4, 5), frequency (6), period (7), the two views (8), the link (9).
- **Video makes it easier:** the student sees the crest rise exactly as far as the rod swings (3), sees a bracket stay the same length as it slides between different matching points (5), counts crests through a gate against a timer (6), watches three clocks finish together (7), and watches a crest move exactly one wavelength while the driver makes one cycle (9).
- **Response opportunity:** two 3 s predictions (1, 4); two unseen HSC-style tasks, 10 seconds each, every value on the card, nothing answer-bearing (A1's snapshot has pointers but no brackets). One crossed mistake each; feedback about 22 s and 21 s.
- **Avoided double teaching:** v01's transverse definition and v02's "follow one particle" are recalled in a line each.
- **Syllabus coverage:** `ci19ed9f77`: wavelength (5, 8, 9, A1), frequency (6, 7, 8, A2), period (7, 8, 9, A2), crest (2), trough (2), amplitude (3, A1) of transverse waves.
- **Out of scope by design:** v = fλ and problems with f = 1/T (v05); graphs (v06, v07); longitudinal waves (v04).

## Practice questions and model answers

**Attempt 1 (scene 10; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "The diagram shows a transverse wave on a cord at one instant. Crests are at the 0.40 m, 1.30 m and 2.20 m marks. Each crest is 4.0 cm above the rest line and each trough is 4.0 cm below it. (a) State the amplitude and the wavelength of the wave. (b) Determine the distance along the cord from a crest to the next trough."
Model answer: (a) Amplitude = 4.0 cm (rest line to crest). Wavelength = 1.30 − 0.40 = 0.90 m (crest to next crest; 2.20 − 1.30 = 0.90 m confirms). (b) A crest to the next trough is half a wavelength: 0.90 ÷ 2 = 0.45 m. Classic mistake (crossed): "amplitude = 8.0 cm" (crest to trough).

**Attempt 2 (scene 12; original wording, HSC style, 2 marks suggested).** "A transverse wave travels along a rope. A ribbon tied to the rope takes 0.20 s to move from its highest point to its lowest point. (a) State the period of the wave. (b) Determine the frequency of the wave."
Model answer: (a) Highest to lowest is half an oscillation, so T = 2 × 0.20 = 0.40 s. (b) f = 1 ÷ T = 1 ÷ 0.40 = 2.5 Hz (2.5 complete oscillations each second). Classic mistake (crossed): "T = 0.20 s" (giving f = 5.0 Hz).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hook | 2.0 Hz and 4.0 Hz; same swing | 1, 9 |
| Amplitude (site activity) | 3.0 cm; crest to trough 6.0 cm | 3, 8, 9 |
| Site check | 0.8 m above and below: A = 0.8 m | 3 |
| Wavelength (site `we-1`) | crests 1.20, 1.95, 2.70 m; λ = 0.75 m (both gaps) | 5, 8, 9 |
| Frequency | 4 crests in 1.00 s: 4.0 Hz | 6 |
| Period | 0.25 s (4.0 Hz); 0.50 s (2.0 Hz); site 5 Hz → 0.2 s | 7, 8, 9 |
| 2.0 Hz wave | λ = 1.50 m | 9 |
| A1 | crests 0.40, 1.30, 2.20 m; A 4.0 cm; λ 0.90 m; λ ÷ 2 = 0.45 m; crossed 8.0 cm | 11, 12 |
| A2 | 0.20 s half; T 0.40 s; f 2.5 Hz; crossed 0.20 s | 12, 13 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (2 Nov); Codex to re-check.

- 1.95 − 1.20 = 0.75; 2.70 − 1.95 = 0.75.
- 1 ÷ 4.0 = 0.25 s; 1 ÷ 2.0 = 0.50 s; 1 ÷ 5 = 0.2 s.
- Cord speed (not stated) 3.0 m s⁻¹: 3.0 × 0.25 = 0.75 m; 3.0 × 0.50 = 1.50 m.
- 2 × 3.0 = 6.0 cm.
- A1: 1.30 − 0.40 = 0.90; 2.20 − 1.30 = 0.90; 0.90 ÷ 2 = 0.45; 2 × 4.0 = 8.0.
- A2: 2 × 0.20 = 0.40; 1 ÷ 0.40 = 2.5.

## Memory aid check

- **"Amplitude starts at the rest line. Wavelength goes match to match."** Written for this lesson. Meaning, as said in scene 10: amplitude is measured from the rest line (not from a trough); wavelength is measured between two matching points (not from a crest to a trough). Assumptions checked: it needs the rest line to be the true rest position (the middle of the oscillation), which holds for the symmetric waves taught here; "matching" means the same stage of motion, not only the same height (two points at the same height on a rising and a falling slope are not matching: scene 5 shows the bracket between two rising mid-points); it transfers to v04 (amplitude as a particle's largest distance from its rest position; wavelength compression to compression) and to v07's displacement-distance graphs. It blocks both A1 traps. Introduced after both measurements (3, 5).
- **Considered, not used:** "Rest to crest, crest to crest" (shorter, but "crest to crest" invites measuring between non-adjacent crests).

## Narration length estimate

Revision 1 count (2 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,453 characters**, 16 scenes. Characters per scene (1 to 16): 360, 339, 478, 95, 603, 464, 482, 430, 529, 104, 378, 297, 187, 313, 304, 75. At 13.3 characters per second the speech is about 410 s; add about 16 s of holds and settling (the twin cords in 1, the level line in 3, the sliding bracket and ruler in 5, the gate count in 6, the three clocks in 7, the split views in 8, the stepped crest in 9, the 2-second memory hold), 6 s for two prediction countdowns, 20 s for two attempt countdowns, 2 s of feedback holds and about 54 s more of the quiet notes hold (about 100 s of holds): **about 510 s**, under the 570 s cap. The count is below the 5,500 band but inside 5,000 to 5,500: one describing point (six terms, each with what sets it) is fully taught, and padding would weaken it (as root accepted for FA1 v03, v07, v11, v12 and v19), so the design stops here (open decision 5).

## Scene list and build ids

Lesson key `p-y11-fa2-v03` (route phys-y11-fa2-v03; key form as v01 open decision 3). Suggested explainer folder `src/explainer/lessons/phys-y11-fa2-v03` and build folder `docs/production/claude-pm/lessons/p-y11-fa2-v03` (root to confirm).

In order (kebab-case; 16 scene headings, all `### N.`): hook, crest-trough, amplitude, wavelength-prediction, wavelength, frequency, period, two-views, what-sets-wavelength, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). The hook and wavelength-prediction carry 3 s countdowns inside explain scenes. Transitions (`pickTransition`): v02's last frame continues into scene 1 (camera continue: the same driver and cord); 1 to 2 camera continue (the 2.0 Hz cord shrinks to an inset); 2 to 3 to 4 to 5 camera continue (freeze and run on the same cord); 5 to 6 to 7 camera continue; 7 to 8 split board (photo and stopwatch); 8 to 9 split board (both cords); 9 to 10 camera continue; attempts and feedback card shrink to the top; 14 to 15 board clear; 15 to 16 fade to the notes board, and 16 cross-fades back to 15's final frame.

Holds: hook and wavelength-prediction (3 s), attempt-1, attempt-2 (10 s after the speech). key-notes is the quiet notes hold (about 60 s). Review evidence paths: `learning_review` = `checks/p-y11-fa2-v03-learning-review.md`, `science_check` = `checks/p-y11-fa2-v03-physics-check.md`.

## Assets

`public/assets/physics/` does not exist yet (checked 2 Nov). Requested earlier (uniform scaling only, never stretched):
- v01's `phys-y11-wave-driver-v1.png`, `phys-y11-wave-driver-rod-v1.png` (two copies in scenes 1 and 9) and `phys-y11-signal-generator-v1.png` (two copies): every scene with the cord, and the handoff.

No new plate. The cord, ruler, gate, counters and timers are coded.

Kit gaps (for the build brief): **`WaveString`** (new, physics; reused by v04's comparison panel, v05 and v07); the driver rod linked to the same phase (v01 plates); the three-clock panel (lesson-local); `AlignedAlgebra`.

## Codex asset brief

None. No new plate is needed (v01's wave driver, rod and signal generator are reused). One note for v01's brief: the signal generator's blank display window must be large enough for a coded "4.0 Hz" readout to sit inside it (scenes 1, 6, 9).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the cord's wave is drawn with the stated amplitude, wavelength and frequency (author note a), that the vertical exaggeration tag is present wherever the cord is drawn, and that the counters and timers read real seconds under slow motion.
3. Confirm the physics claims: amplitude from the rest position; wavelength between matching points; frequency as waves passing a point per second; period as the time for one wave, equal to one particle oscillation and one source cycle; f = 1/T; the source sets frequency and amplitude; on the same cord a crest moves one wavelength in one period, so a higher frequency gives a shorter wavelength; more amplitude, more energy for the same frequency and medium.
4. Confirm the memory aid's condition (matching means the same stage of motion) is shown in scene 5.
5. Confirm both attempt questions are original in wording, carry every value, and show nothing answer-bearing.
6. Confirm the syllabus quote matches the route JSON exactly and no 2017-syllabus label appears.
7. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
8. Confirm the narration character count by script with the build parser rules.
9. Add site corrections 1 to 3 under Decisions to `../site-corrections-phys-y11.md` (owner record only).

## YouTube metadata (draft)

Title: Wavelength, Frequency, Period and Amplitude of Transverse Waves | Year 11 Physics

(Title length: 81 characters; root may shorten to "Describing Transverse Waves: Wavelength, Frequency, Amplitude | Year 11 Physics", 79.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year11/fa2-waves/lesson02.sa.html

Two waves on the same cord: one long and rolling, one short and choppy, both travelling equally fast. What actually changed? Learn to measure a transverse wave: crests and troughs, amplitude from the rest line (not crest to trough), wavelength between matching points, frequency counted at one spot in hertz, and the period, the time for one wave. See what sets each one, and why a faster source makes shorter waves on the same cord. Two exam-style questions at the end.

Year 11 Physics (2025 syllabus), Focus Area 2: Waves.
Syllabus content (NSW Physics 11-12, 2025):
"Describe the wavelength, frequency, period, crest, trough and amplitude of transverse waves" (ci19ed9f77)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/science/physics-11-12-2025/content/year-11/fa307d399c

Builds on: The wave-modelling investigation (previous video). Next: Describing longitudinal waves.

#Year11Physics #Physics #Waves #HSCScience

## Open decisions

- **1. Learner question and route boundaries (root to record).** Adopted "How do we measure a transverse wave, and what sets each measurement?". Proposed start: "Start with two waves on one cord at different frequencies: which measurements changed?" Proposed stop: "Stop after the six terms described with what sets each, and a crest moving one wavelength in one period; hand v = fλ and f = 1/T problems to v05." Proposed next: v04's rewritten question.
- **2. f = 1/T in v03.** The site lesson teaches the reciprocal here; the syllabus places "solve problems using f = 1/T" with v05. This design describes the relation with one example and uses it once in A2(b). If root prefers v03 to stop at the definition, A2(b) becomes "how many oscillations each second?" (the same arithmetic, worded by definition).
- **3. Scene 9 and v05.** Scene 9 shows "a crest moves one wavelength in one period" without writing v = fλ, to answer the hook causally. v05 should open by turning this into the wave equation (its designer to read scene 9).
- **4. Title length.** As noted under YouTube metadata.
- **5. Length.** 5,453 characters (about 510 s) is below the 5,500 band; root to accept as complete (see the estimate). If the learning review asks for more, the natural addition is a third worked reading (the site's activity 1: amplitude 3 cm and period 0.25 s, find the crest-to-trough height and the frequency), not padding.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v01 and v02 at Year 11 entry; check that the hook's question is held across scenes 2 to 9 and visibly closed in 9; that scene 8's two views (photo and stopwatch) are clear without graphs; that "matching points" lands with the sliding bracket; that the three clocks make "one period, three ways" feel obvious; that scene 9's step is followable at speaking pace; that the vertical exaggeration tag doesn't confuse the amplitude readout; that the cards give nothing away), then the Codex physics check and error check.
- The level line from the rod (3), the sliding wavelength bracket (5), the gate counter (6), the three clocks (7), the split views (8) and the stepped crest (9) carry the explanation; judge them at playback speed in the voiced preview. Every readout must come from the same `WaveString` parameters as the drawn cord.
