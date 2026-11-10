# Maths A12 T04: When should a large range be represented by a logarithmic scale? Orders of magnitude, the linear-to-log axis morph, decibels, earthquake magnitude, pH and star magnitudes (design)

Status: Revision 3 (7 Nov 2026): redesign to maths-visual-standard.md (d01 Revision 6 pattern, everyday anchor). Needs Codex learning review and maths check before voicing.

Previously Revision 2 (3 Nov): brief 153 repairs applied (reference intensity called a conventional reference near the threshold of hearing; earthquake magnitude named a simplified local magnitude at the same distance and instrument, with the 50-fold example a seismograph trace; pH given as the dilute-solution model; "barely off zero" replaced by "near the left"; spoken "pi over two" per root decision 22). Needs a Codex error check. Voicing gated by the brief 124 Google voice pilot. Build uses the explainer kit and the maths kit (`FunctionGraph` for the i06 teaser, `ReadoutPanel.rows`, `AlignedAlgebra`); see "Assets" for one new part (`LogAxisMorph`), one existing plate (pH meter) and one new small plate (sound level meter). Nothing recorded; human listening pending.

Narration 5,974 characters (sum of the 16 scene strings), 16 scene headings, about 535 s with holds (the key-notes scene fixed at 45 s), counted by script with the build parser rules (see "Narration length estimate"). Not voiced (no `math-a12-t04/` folder and no `measured/lesson.json`), so narration is rewritten freely where the bar needs it. Revision 2 was 5,767; Revision 1 was 5,642. Nothing recorded; human listening pending.

Scope: fourth and last video of the Year 12 Mathematics Advanced trig graphs and modelling strand (course outline playlist order 23; production order after t03, before math-a12-i06). Templates: `math-a12-d05.md` and `math-a12-i05.md` (Revision 2) and the t01 to t03 designs (Revision 1; t03's scene 14 is this video's first frame). Maths visuals coded; two small context plates (programme decision 5). No pre-design pack exists: this design does the pack work. Site lesson read in full (2 Nov, read-only): `C:/Users/kygs/hscscience/subjects/maths-advanced/year12/further-graph-transformations-and-modelling/lesson02.sa.html`, SHA256 `8ead7b9aeca247ad96b3abba7ba7691f8b7eadc7c2f4ebd65ccd0f76202e2c09`. Sections used: the hook (the factory at 95 dB against an 85 dB limit, kept), `interpret-log-scales` card 07 (equal spacing means equal ratios; when to use a log scale), `apply-log-models` card 08 (decibel and Richter formulas, I₀ = 10⁻¹² W/m²), card 09 (star magnitudes and pH, examples kept: m = 1 against m = 6 is ×100), worked Problem 2 (library 30 dB, café 70 dB, ratio 10,000, kept), Problem 3 (magnitude 5.0, amplitude ×50, M ≈ 6.70, kept), SA 4 (stars 3 × 10⁻¹³ to 1.4 × 10⁻⁸ W/m² against heights 152 to 187 cm, kept for scene 4), MC Q3 (pH 4 against pH 7, ×1000, kept), SA 2 (40 dB against 70 dB, the idea for attempt 1).

Owner rules applied: as t01 to t03; no people (the site's "students" heights are shown as a data strip only); context plates only where they carry the context. Root decisions applied: exact powers of ten in the algebra (10⁴, 10³, 10⁻⁹) and decimals only as grey "≈" companions or where no exact form exists (log₁₀ 50 ≈ 1.699); every log scale stated with its formula and coefficient (the "+1 step = ×10" rule is never stated for decibels or star magnitudes, where it is false; site correction 1); attempt cards give no ratio or choice; spoken "next" true in production order (root decision 4).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 12, focus area "Further graph transformations and modelling"; NESA content-system codenames, official `code` field empty), quoted from `docs/production/programme/syllabus/maths-advanced-2024-y12-crosswalk.json`:

- `cib6542e48`: "Recognise that logarithmic scales are useful to represent a variable that ranges over a large set of values and explain when a logarithmic scale is suitable"
- `ci1275a9f6`: "Use logarithmic scales to model and solve problems involving decibels (dB) in acoustics, seismic scales for earthquakes, magnitudes of stars and the pH scale in chemistry"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa3b2bda67

**Boundary:** starts from t03 Revision 3's last frame (the phone and a linear "file size (bytes)" ruler from 0 to 256 GB with a text message and a photo piled on 0, a film near the left and the whole phone at the right end, chip "one ruler for all of them?"; Revision 2 opened on a linear sound-intensity axis, whose factory example now sits in scene 5). Teaches: why a linear axis fails for a variable spanning many orders of magnitude (order of magnitude, plain meaning); the log₁₀ axis (equal steps are equal factors, because log(10x) = 1 + log x); when a log scale is suitable (range of several powers of ten and comparison by factors) and when it is not (small ratio, comparison by differences); decibels (L = 10 log₁₀(I/I₀), +10 dB = ×10, +3 dB ≈ ×2) with the factory and the library/café problem; earthquake magnitude (M = log₁₀(A/A₀), +1 = ×10 amplitude) with the ×50 problem; pH (−log₁₀[H⁺], the minus sign reverses direction) with pH 4 against 7; star magnitudes (m₁ − m₂ = −2.5 log₁₀(F₁/F₂), 5 magnitudes = ×100, smaller is brighter). Stops at using these four scales to compare and to find a level or ratio. Not taught: energy of earthquakes (the 10^1.5 rule, not in the syllabus point), perceived loudness (site card 08 rightly separates it), log laws beyond log(ab) = log a + log b (Year 11), log-log graphs or linearising data.

## Decisions

### Revision 3 redesign (7 Nov 2026; these bullets override older bullets below where they conflict)

- **Anchor: a phone's storage on a linear ruler and a log ruler (painted plate, live).** A text message is about 1 kB (10³ bytes), a photo about 3 MB, a film about 4 GB and the whole phone 256 GB. On an ordinary ruler from 0 to 256 GB the text and the photo sit on the zero tick and the film near the left; on a log ruler every file has its own place. The anchor carries the lesson's idea in a form every student already uses: the storage names kilo, mega, giga and tera are themselves a log scale, each a thousand times the last, so on the log ruler they sit exactly three steps apart. Chosen over a population map because it is everyday, needs no new plate (d03's `ma12-phone-v1`), and is not a context in `checks/root-decisions-maths-redesign.md` (d03's phone counts app users; here the phone is its storage). The four syllabus scales (decibels, earthquake magnitude, pH, star magnitude) stay as the syllabus's own examples with the site's numbers; d04 owns sound levels as an anchor, so decibels are an example here, and the site's factory hook (85 dB limit, 95 dB measured) moves into scene 5. Star magnitudes stay light (one scene, no attempt).
- **Idealising assumptions (author notes, not learner copy).** (i) Decimal prefixes as storage makers use them (1 kB = 1000 bytes); computers sometimes count in powers of 1024, which changes no idea here. (ii) File sizes are typical, not exact: a message with no picture is well under a kilobyte to a few kilobytes; a phone photo 2 to 5 MB; a two-hour HD film 2 to 5 GB. Only "about" values are said.
- **Simulations (standard item 3).**
  1. **`LogAxisMorph`** (scenes 1 to 3, the main simulation; the Revision 2 part at studio sizes): the storage points slide from their linear positions to their log₁₀ positions in one continuous move while the tick labels change live from "0, 50 GB, 100 GB, ..." to "10³, 10⁴, ..., 10¹²", with a live readout under the cursor point ("size", "log₁₀ size"); the kB, MB, GB and TB ticks land three steps apart (the visual surprise).
  2. **Step-to-factor slider** (scenes 5 and 6): a teal step slider on the decibel scale; as it moves, a blue live ratio readout (52 px) shows 10^(step ÷ 10) and blue "× 10" tags hop along the intensity axis; the sound level meter plate's coded display follows.
  3. **Seismograph trace** (scene 7): the coded trace grows ×10 then ×50 against a scale bar while a magnitude readout ticks from 5.0 to 6.7.
- **Colour roles (fixed for t04).** The number in front of the log amber (k's strand role: 10, 1, −1, −2.5); a step on the scale teal; a ratio or factor blue ("× 10" tags and ratio readouts); data points and axes ink; answers green; mistakes red (crossed slips only).
- **Large type, hand tags, stage changes.** As t01. `HandTag`s: "crushed", "× 1000 each", "equal steps, equal factors", "spread out", "squeezed", "+10 dB = × 10", "× 50 is only + 1.7", "more H⁺, lower pH", "smaller is brighter". Stages, each change within about 30 to 85 s: the linear storage ruler and phone (1, 2); the morph to log (3); two data strips (4); the decibel scale with the meter and slider (5); the worked decibel board (6); the seismograph (7); the pH meter (8); the star panel (9); the framed card (10); question cards with pictures (11 to 14); i05's rectangles (15); key notes (16).
- **Worked examples and feedback (g01 layout).** Scenes 6 and 7 each have a task strip, an equation strip, a givens card, rows at 52 px, a green framed answer and one red crossed slip (6: "70 ÷ 30 ≈ 2.3 times", silent, caption "decibels aren't ordinary numbers"; 7: "50 × 5 = 250", silent, caption "magnitude is a log: 5 + log₁₀ 50"). Scene 8 frames "× 1000" and crosses "pH 4 is 3 times as acidic" silently. Feedback scenes carry a `GivensStrip`, a framed answer and one crossed slip.
- **Question cards (build gate).** Full question at 40 px plus a picture: A1 shows the reused sound level meter (`phys-y11-sound-level-meter-v1`) with a blank display; A2 shows f07's country town (`ma12-country-town-v1`) beside the reused thermometer (`biology/m8-thermometer-v1`), with no ranges, ratios or axes.
- **Memory aid (standard item 8).** Framed `MemoryAidCard`: "ratio = 10^(step ÷ number in front)" with keyed lines "dB: ÷ 10", "earthquake: ÷ 1", "pH: ÷ −1 (direction flips)", "stars: ÷ −2.5" (the numbers amber) and "A minus sign flips the direction." Key notes are five short one-line bullets beside it; the notes scene is 45 s (1,350 frames).
- **Joins.** Opens on t03 Revision 3's new final frame (both edited together). Ends on i05 Revision 3's final frame exactly (ink cos x, not Revision 2's blue), which i06 Revision 3 opens on.
- **Narration (not voiced).** Scenes 1 to 3 are rewritten around the storage ruler; scene 5 opens with what intensity is (moved from the old hook) and carries the factory comparison. Scenes 4 and 6 to 16 keep their Revision 2 text.

### Revision 1 and 2 decisions (kept where not overridden above)

- **Learner question kept (course outline).** "When should a large range be represented by a logarithmic scale?" The answer, built in order: when a variable spans many orders of magnitude, a linear axis lets the largest value set the scale and crushes the rest onto zero; placing each value at its power of ten (its log₁₀) makes equal steps mean equal factors, so every value is readable; so use a log scale when the range covers several powers of ten and comparison by factors makes sense, not when the ratio is small and differences matter. The four named scales are each "a number times log₁₀ of a ratio", and their steps convert back to factors by one rule.
- **Draft route entry (for root; no route entry exists).**
  - `id`: math-a12-t04; `playlistOrder`: 23 (outline); production order after t03; next in production order math-a12-i06.
  - `syllabusActionIds`: `cib6542e48`, `ci1275a9f6` (both owned; `coverage: owned-action`; stars are covered by one scene and the memory aid; see open decision 2).
  - `entryKnowledge`: Year 11 `ci98f43d14` and `cic84a1659` (exponential and logarithmic functions; log_a a^x = x); Year 11 log laws including log(ab) = log a + log b (codename to be added by root); index laws and scientific notation (Year 10 and Year 11); t03 (modelling a real situation).
  - `start`: "Open on t03's linear intensity axis: the factory claims 95 dB is only 10 more than the 85 dB limit."
  - `stop`: "Explain when a log scale is suitable and use the decibel, earthquake magnitude, pH and star magnitude scales to compare quantities and find levels. Stop before accumulation; hand off to i06 on i05's rectangles frame."
  - `next`: "math-a12-i06: add up thin rectangles (accumulation), opening on i05's cos x rectangles frame."
  - `sources`: further-graph-transformations-and-modelling/lesson02.sa.html (hook, cards 07 to 09, Problems 2 and 3, SA 2 idea, SA 4, MC Q3), SHA256 above.
- **The hook (site hook, kept; t03's handoff).** The factory compares the numbers 95 and 85 as if the scale were ordinary ("only 10 more, about 12% bigger"). The narration says "about twelve percent bigger" (10/85 ≈ 11.8%), not the site's "barely 10%" (site correction 4). The linear axis already shows the problem: the library sits on zero.
- **The axis morph (motion standard: show the change).** `LogAxisMorph` (new part) carries five labelled points (threshold 10⁻¹², library 10⁻⁹, conversation 10⁻⁶, factory 10^(−2.5), painful sound about 1 W/m²) from linear positions to log₁₀ positions in one continuous move; the tick labels change from 0, 0.001, ... to 10⁻¹², 10⁻¹¹, ..., 10⁰, each gap tagged "× 10". The cause is said: log(10x) = 1 + log x.
- **When suitable (site SA 4, kept; card 07 "when to use a log scale").** The star data (ratio about 4.7 × 10⁴, 4.7 orders of magnitude) spreads out on a log axis; the class heights (ratio 1.23) collapse into a strip from 2.18 to 2.27; heights are compared by difference. The rule is stated with both conditions. The site's "more than about 2 to 3 orders of magnitude" rule of thumb is a grey chip, not a law.
- **Decibels (card 08; Problem 2 kept).** L = 10 log₁₀(I/I₀) with I₀ = 10⁻¹² W/m², the conventional reference intensity near the threshold of hearing (NIOSH 98-126 gives 1 pW/m²; hearing varies). ×10 in I adds 1 to the log and 10 to L, so the factory's 10 dB is ×10 in intensity; +3 dB is ×10^0.3 ≈ 2 (correcting the site's "1 dB = ×10"; site correction 1). Problem 2: 30 dB and 70 dB give I = 10⁻⁹ and 10⁻⁵ W/m², ratio 10⁴; shortcut 10^(40/10). Task, equation and givens separated. Perceived loudness is not claimed ("intensity" throughout, as site card 08 advises).
- **Earthquakes (card 08; Problem 3 kept).** M = log₁₀(A/A₀), A the amplitude of the seismograph trace, a simplified local-magnitude comparison for the same reference, distance and instrument (USGS: the magnitude types differ and distance is corrected for); +1 is ×10 amplitude of the trace (not unconstrained ground displacement). ×50 gives M = 5 + log₁₀ 50 ≈ 6.70. The scale is named "earthquake magnitude" (the syllabus says "seismic scales"; the site's "Richter" appears once as a grey label, open decision 3). Energy is not discussed.
- **pH (card 09; MC Q3 kept; existing plate).** pH = −log₁₀[H⁺] in the dilute ideal model (IUPAC defines pH with hydrogen ion activity; the school comparison uses concentration): the minus sign reverses the direction; pH 4 against pH 7 is ×1000 in [H⁺]. The existing pH meter plate shows the reading (coded digits over its blank screen).
- **Star magnitudes (card 09, example kept).** m₁ − m₂ = −2.5 log₁₀(F₁/F₂): smaller magnitude means brighter; 5 magnitudes is ×100; m = 1 against m = 6 is ×100. One scene, coded star dots.
- **Memory aid (original, unifying).** "Ratio = 10^(step ÷ number in front)." Each scale is k log₁₀(ratio) with k = 10 (dB), 1 (earthquake), −1 (pH), −2.5 (stars); a step Δ on the scale means a ratio of 10^(Δ/k), with a negative k reversing the direction (see "Memory aid check").
- **Attempts.** (A1, original numbers on site SA 2's idea): 90 dB against 60 dB: ×10³ = 1000. Crossed: "1.5 times" (90 ÷ 60). (A2, original, the main question): populations of ten towns and cities from 1,200 to 5,300,000 against a month of daily top temperatures from 21 °C to 31 °C; which suits a log scale? Set A (ratio about 4,400, more than three orders of magnitude); Set B's ratio about 1.5 and temperatures are compared by differences. Crossed: "big numbers need a log scale" (1,000,000 to 1,500,000 spans less than a factor of 2). The data are illustrative, not real places.
- **Mistake scene:** none separate. "Log-scale numbers can be compared by subtraction or division as if ordinary" (hook; scene 5; feedback 1, crossed); "+1 on any log scale is ×10" (scene 5, said correctly for dB; memory aid); "large numbers need a log scale" (scene 4; feedback 2, crossed); "higher pH is more acidic" and "higher magnitude star is brighter" (scenes 8, 9).
- **Handoff to i06 (brief: t04 hands off to math-a12-i06).** Scene 15 ends on i05's handoff frame exactly (y = cos x on 0 ≤ x ≤ π/2 with filled endpoint markers, ticks 0, π/4, π/2, four then eight left-endpoint rectangles in light teal, chips "Next: add up thin rectangles" and "?"), and its third and fourth sentences repeat i05's handoff wording. So i06 opens on one frame whichever video precedes it (i05 in the current playlist order 28 to 29, or t04 in production order). Spoken "That's the end of the trig graphs and modelling videos" is true in both orders; "Next" is true in production order (root decision 4).
- **Site sources used:** listed under Scope.
- **Misconceptions listed (pack work):** (1) comparing dB (or pH, magnitudes) by difference or division as ordinary numbers; (2) "+1 step = ×10" on every log scale (false for dB and star magnitudes); (3) "large numbers need a log scale" (it is the ratio, not the size); (4) a higher pH is more acidic; (5) a larger star magnitude is brighter; (6) "10 dB more is 10% more"; (7) loudness and intensity treated as the same (avoided: "intensity" only); (8) log scales start at zero (the log axis has no zero; author note f).
- **Site corrections (quoted from site lesson 2, read 2 Nov; for `../site-corrections-maths-a12.md`):**
  1. Card 07: "Moving 1 unit on the dB scale = multiplying intensity by 10. Moving 3 units = multiplying by 10³ = 1000." Already recorded in the crosswalk findings (`site-decibel`): +10 dB is ×10 and +3 dB is ×10^0.3 ≈ 1.995. Not duplicated; confirm the log carries it.
  2. Card 02: "Log scale: ratio, not difference. A difference of 3 on a log scale means a ratio of 10³ = 1000, not a difference of 3." True only for scales of the form ±log₁₀ (pH, earthquake magnitude); on the decibel scale a difference of 3 is ×10^0.3 ≈ 2, and for star magnitudes ×10^1.2 ≈ 16. Suggest: "On the pH or earthquake magnitude scale, a difference of 3 means a ratio of 10³ = 1000."
  3. SA 3 (c) answer: "from microseismic tremors (10⁻⁸ m) to major quakes (10² m or more)". A seismograph amplitude of 100 m or more is not a physical reading. Suggest: "Recorded amplitudes span roughly ten orders of magnitude" without the metre values.
  4. Hook: "The factory argues it's only 10 units over, barely 10% more." Even on the factory's own linear reading, 10 more than 85 is about 11.8% more. Suggest "about 12% more" (optional).
  - Checked and correct: card 08 concert example (10^(−3.5) ≈ 3.16 × 10⁻⁴ W/m²; ratio 10^2.5 ≈ 316); M 6 against M 8 (×100); factory (×10); quick check (60 dB); card 09 stars (×100) and pH 3 against 5 (×100); Problem 2 (10⁻⁹, 10⁻⁵, 10⁴); Problem 3 (6.70; ×100 gives 7.0; ×1000 gives 8.0); SA 2 (10⁻⁸, 10⁻⁵, 1000; claim (c) answer); SA 3 (a), (b) (7.20); SA 4 (4.7 × 10⁴, 4.7 orders; 2.18 to 2.27; Sirius about −1.5); MC Q2 to Q4.
- **Cause chain taught, in order:** (1) the factory compares ordinary numbers; the linear axis crushes small values (1); (2) the range covers twelve orders of magnitude; the largest sets the scale (2); (3) log₁₀ positions: equal steps are equal factors because log(10x) = 1 + log x (3); (4) suitable when the ratio is large and factors matter; not for heights (4); (5) dB: ×10 in I is +10 dB, so the factory is ×10 (5); (6) library and café: 10⁴ (6); (7) earthquake: +1 is ×10, ×50 is +1.7 (7); (8) pH: minus sign, ×1000 for 3 steps (8); (9) stars: −2.5, 5 steps ×100 (9); (10) one rule (10).
- **Learner-visible vocabulary (plain meaning at first use):** intensity (the power of the sound arriving on each square metre, scene 1); order of magnitude (one factor of ten, scene 2); logarithmic scale (a scale where equal steps mean equal factors, scene 3); decibel (the unit of the sound level L, scene 5); I nought (a conventional reference intensity near the threshold of hearing, scene 5); amplitude of a seismograph (the size of the trace's wiggle at a fixed distance and instrument, scene 7); hydrogen ion concentration (how many moles of hydrogen ions per litre, recalled from Chemistry in a clause; pH = −log₁₀[H⁺] is the dilute-solution model, since pH is formally defined with hydrogen ion activity, scene 8); magnitude of a star (its brightness number, scene 9).
- **Legacy logic ported:** none.
- **New explainer motion:** **linear-to-log morph** (`LogAxisMorph`, scenes 1 to 3, 5, 6); **ratio steps** (×10 tags hopping along the log axis, scenes 3, 5); **two data strips** collapsing or spreading (scene 4, the same part with `data` sets); **level slider** on a dB axis (scenes 5, 6); **seismograph trace** growing ×50 (scene 7, coded trace, `FunctionGraph` with a damped sine as decoration, labelled "trace", no data claim); **pH meter reading** (existing plate, coded digits, scene 8); **star dots** sized by brightness (scene 9, coded); the i05 rectangles frame (scene 15, `FunctionGraph` and plain SVG rectangles as i05); aligned algebra, `Chip` with `cross`, `Countdown`, `QuestionCard`, `KeyNotes`.
- **Board layout (constant):** heading top-left; the main horizontal axis across the upper middle (about 1,500 px wide) for scenes 1 to 6 with point labels above it; algebra and chips below it or in the right column; plates at the left (sound level meter about 300 × 420 px in scenes 5 and 6; pH meter about 520 × 520 px in scene 8). The log axis runs from 10⁻¹³ to 10¹ W/m² (ticks at every power of ten, labels every power from 10⁻¹² to 10⁰); a parallel dB scale under it (0 to 120 dB, ticks every 10) appears in scene 5, aligned so that 0 dB sits under 10⁻¹² and 120 dB under 10⁰.
- **No human figures.**
- **Author notes (not learner copy):**
  (a) Intensities: I = I₀ × 10^(L/10), I₀ = 10⁻¹² W/m². L = 30: 10⁻⁹; 60: 10⁻⁶; 70: 10⁻⁵; 85: 10^(−3.5) = √10 × 10⁻⁴ ≈ 3.162 × 10⁻⁴; 90: 10⁻³; 95: 10^(−2.5) ≈ 3.162 × 10⁻³; 120: 1. Factory/limit: 10^(10/10) = 10. 10/85 = 11.76%. +3 dB: 10^0.3 = 1.99526.
  (b) Scene 2: 10⁻¹² W/m² is I₀ by convention of the scale (a reference near the threshold of hearing, not a universal faintest audible sound); "a painfully loud sound is about one" W/m² corresponds to 120 dB (the conventional threshold of pain is quoted as about 1 to 10 W/m²; "about one" stays inside that). Twelve orders of magnitude from 10⁻¹² to 10⁰.
  (c) Scene 4: 1.4 × 10⁻⁸ ÷ (3 × 10⁻¹³) = 4.667 × 10⁴; log₁₀ = 4.669. 187 ÷ 152 = 1.230; log₁₀ 152 = 2.182, log₁₀ 187 = 2.272.
  (d) Scene 7: M_A = 5.0, A_B = 50 A_A: M_B = log₁₀(50 × 10⁵) = 5 + log₁₀ 50 = 6.69897 ≈ 6.70; difference 1.70.
  (e) Scene 8: [H⁺] = 10^(−pH) mol/L: pH 4: 10⁻⁴; pH 7: 10⁻⁷; ratio 10³. Scene 9: m₁ − m₂ = −5 gives F₁/F₂ = 10^(5/2.5) = 100.
  (f) A log axis has no zero: 10⁻¹³ is its left end, and values approach zero only far to the left. The build labels the left end, not "0".
  (g) Memory aid: for a scale S = k log₁₀(Q/Q₀), ΔS = k log₁₀(Q₂/Q₁), so Q₂/Q₁ = 10^(ΔS/k). dB: k = 10; earthquake: k = 1; pH: S = −log₁₀[H⁺], k = −1 (a step of −3 in pH gives [H⁺] ratio 10³); stars: k = −2.5.
  (h) A1: ΔL = 30, ratio 10^(30/10) = 10³ = 1000. Crossed: 90 ÷ 60 = 1.5. A2: 5,300,000 ÷ 1,200 = 4,416.7 (log₁₀ = 3.645); 31 ÷ 21 = 1.476; 1,500,000 ÷ 1,000,000 = 1.5 (log₁₀ = 0.176).
  (i) Pronunciations: "ten to the minus twelve", "I nought" (I₀), "log base ten", "pH" (letters), "H plus" not spoken (said "hydrogen ion concentration"), "seismograph".

Main question: *On an ordinary ruler, a phone's text messages and photos are crushed onto zero. When does an ordinary axis fail, when should we use a logarithmic scale instead, and what does a step on each log scale mean?*
Entry knowledge (Year 11 `ci98f43d14`, `cic84a1659`, Year 11 log laws; index laws and scientific notation; t03): logarithms as powers of ten; log(ab) = log a + log b; reading scientific notation.
Stops after: when a log scale is suitable and when not; decibels, earthquake magnitude, pH and star magnitude used to compare and to find levels; one rule for converting steps to factors.
Handoff: adding up thin rectangles (math-a12-i06), on i05's frame.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings.

Colour roles (Revision 3): the number in front of the log **amber**; a step on the scale **teal**; a ratio or factor **blue** ("× 10" tags and ratio readouts); data points and axes **ink**; answer **green**; mistake **red**, crossed slips only; grey "≈" decimals beside exact powers. Type (standard item 5): current working line and live readout numbers 52 px; task strip, equation strip and givens 44 px; earlier lines 30 to 32 px and dimmed, never faint; axis labels and point labels at least 30 px; hand tags at least 34 px; question cards 40 px; key-note bullets 36 to 40 px (root decision 58); nothing below 26 px; all text above y = 950. Every stage's main visual (phone, ruler, meter, board, card) is solid from the stage's first frame. Header strip "MATHEMATICS ADVANCED · LOG SCALES"; scene headings in the hand font, 44 px. Powers of ten written with superscripts.

### 1. hook (one ruler for every file?)
> Here's a phone's storage on an ordinary ruler, from zero to two hundred and fifty six gigabytes. A text message is about a kilobyte, a photo about three megabytes, and a film about four gigabytes. But on this ruler, the text and the photo are squashed right onto **zero**, and the film sits near the left. Only the whole phone has room. When does an ordinary axis fail like this, and what kind of scale gives every file its own **place**?

Visual: opens on t03's last frame exactly (t03 Revision 3 scene 14: the painted phone `ma12-phone-v1` at the left with its coded storage bar "256 GB"; the long linear ruler "file size (bytes)" from 0 to 256 GB with ticks every 50 GB; points "text message ≈ 1 kB" and "photo ≈ 3 MB" piled on 0, "film ≈ 4 GB" near the left, "whole phone 256 GB" at the right end; the zoom ring; chips "one ruler for all of them?" and "Next: logarithmic scales"). The Next chip clears silently as the heading writes on: "Logarithmic scales: when and why". As each file is named, its row on the phone's coded screen glows and its point pulses on the ruler, with a `LiveReadoutBoard` (52 px) "size" and "fraction of the ruler" (text ≈ 0.0000004%, photo ≈ 0.001%, film ≈ 1.6%). On "zero" the zoom ring at 0 enlarges: the text and photo points sit on the zero tick (hand tag "crushed"). On "place" the chip "one ruler for all of them?" pulses.

### 2. orders of magnitude: the largest value sets the scale
> The trouble is the range. A kilobyte is a thousand bytes, a megabyte is a million, a gigabyte a billion, and a terabyte a million million. Each name is a thousand times the one before. One factor of ten is called an order of **magnitude**, so a text message and a full phone are more than eight orders of magnitude apart. On an ordinary axis, the biggest value sets the scale, so everything a thousand times smaller is crushed against **zero**.

Visual: camera continue. A storage ladder writes in the right column as each name is said, 44 px: "1 kB = 10³ bytes", "1 MB = 10⁶", "1 GB = 10⁹", "1 TB = 10¹²", with a blue "× 1000" tag between each pair (hand tag "× 1000 each"). On "magnitude" a small chip "order of magnitude = one factor of 10" and a teal bracket "about 8.4 orders: 10³ to 2.56 × 10¹¹" across the ladder. On "zero" the ruler extends to 2 TB (about 1 s) to add "cloud backup 2 TB"; everything else slides further left and piles on the zero tick (tag "crushed"); only the backup point stands clear.

### 3. the log axis: equal steps are equal factors
> So space the values by their powers of ten instead. Ten to the three bytes goes at three, ten to the six at six, and so on. That's taking log base ten of each **value**. Now every step along the axis means multiplying by **ten**, because log of ten times a number is one more than the log of the number. Equal steps mean equal factors, not equal differences. That's a logarithmic **scale**. Kilobyte, megabyte, gigabyte and terabyte sit three steps apart, and every file has its own **place**.

Visual: `LogAxisMorph` runs (about 2 s, eased) over the first two sentences: each point moves from its linear position to its log₁₀ position while the tick labels change live, the linear labels "0, 0.5 TB, ..." fading as the power labels "10³, 10⁴, ..., 10¹²" write in; under each tick a grey "log = 3, ..., 12"; the log end shows "10²", never "0". On "value" a grey chip "position = log₁₀(size)". On "ten" blue "× 10" tags hop along each gap (0.1 s each). A row writes (52 px): "log₁₀(10x) = 1 + log₁₀ x" (hand tag "equal steps, equal factors"). On "scale" the axis title changes to "file size (bytes, log scale)". On "place" the kB, MB, GB and TB ticks glow and teal brackets "3 steps" appear between them (the visual surprise: the storage names are a log scale); the five points glow in turn, each with its own space (hand tag "spread out").

### 4. when is a log scale suitable?
> So when should you use one? Compare two sets of data. The brightness of some stars runs from about three times ten to the minus thirteen, to one point four times ten to the minus eight: a factor of about forty seven **thousand**. On a log scale, they spread out nicely. But the heights of a class run from one fifty two to one eighty seven centimetres: a factor of only one point two **three**. On a log scale, they'd squeeze into a tiny strip, and heights are compared by differences anyway. So use a log scale when the values span several powers of ten, and when comparing by factors makes **sense**.

Visual: clear change to two data strips (site SA 4), solid from the first frame. Strip A "star brightness (W/m²)" with the reused star plate (`physics/y12p-star-white-v1.png`, about 120 px) at its left and 12 ink dots: on a linear strip they pile at the left; on "thousand" the strip morphs to log (dots spread across 10⁻¹³ to 10⁻⁷; hand tag "spread out"); chip "ratio ≈ 4.7 × 10⁴: 4.7 orders of magnitude". Strip B "class heights (cm)", 12 dots evenly readable from 152 to 187 on a linear strip (a data strip only, no people); on "three" chip "ratio ≈ 1.23"; on "strip" the strip morphs to log (log₁₀ 152 ≈ 2.18 to log₁₀ 187 ≈ 2.27) and the dots squeeze into a short segment (hand tag "squeezed"), then morph back. On "sense" the rule writes in a green frame: "Use a log scale when the values span several powers of 10 and comparing by factors makes sense." Grey chip under it: "rule of thumb: more than about 2 to 3 orders of magnitude".

### 5. decibels: ten times the intensity is ten more decibels
> Decibels are a log scale too. The sound level L is ten times log base ten of I over I nought. I is the intensity, the power of the sound arriving on each square metre, and I nought is ten to the minus twelve, a conventional reference near the threshold of **hearing**. Multiply the intensity by ten, and the log goes up by one, so the level goes up by ten **decibels**. So a factory measuring ninety five decibels, against a limit of eighty five, isn't twelve percent over. Ten decibels more means ten times the **intensity**. And a three decibel rise is a factor of ten to the point three, about **two**.

Visual: clear change to the decibel stage: the reused sound level meter (`physics/phys-y11-sound-level-meter-v1.png`, about 560 px wide, coded digits on its measured display) at the left; at the right the log intensity axis (10⁻¹² to 10⁰ W/m², ink) with a teal dB scale under it (0 dB under 10⁻¹², 120 dB under 10⁰, ticks every 10). On "hearing" the formula writes (52 px): "L = 10 log₁₀(I ÷ I₀), I₀ = 10⁻¹² W/m² (conventional reference)" with the 10 in front amber. On "decibels" the teal step slider moves by 10 dB and one blue "× 10" tag on the intensity axis lines up with it; the blue ratio readout (52 px) reads "× 10" (hand tag "+10 dB = × 10"). As the factory sentence is said, the meter's display changes from "85" to "95" and a grey chip "95 − 85 = 10; 10 ÷ 85 ≈ 12%?" writes; on "intensity" the 85 and 95 dB points light, joined by a bracket "+10 dB = × 10 intensity", and the grey "12%?" chip is crossed in red. On "two" the slider moves by 3 dB: readout "× 10^0.3 ≈ 2" (grey "≈ 1.995").

### 6. worked example: library and café
> Let's compare two places. A library is thirty decibels, and a café is seventy. How many times more intense is the café? Divide each level by ten and use it as a power: the library's intensity is ten to the three times I nought, and the café's is ten to the seven times I **nought**. Divide them, and I nought cancels: ten to the four, ten thousand times as **intense**. A quicker way: the difference is forty decibels, and forty over ten is **four**.

Visual: camera continue into the worked board (g01 layout, site Problem 2), the dB scale kept small at the top with the two levels marked and the meter thumbnail at the left. Task strip (44 px): "How many times more intense is the café than the library?"; equation strip "L = 10 log₁₀(I ÷ I₀)" (10 amber); givens card: "library 30 dB", "café 70 dB", "I₀ = 10⁻¹² W/m²". On "nought" (first) rows (52 px) "I_library = 10³ I₀ = 10⁻⁹ W/m²", "I_café = 10⁷ I₀ = 10⁻⁵ W/m²". On "intense" the green framed answer "I_café ÷ I_library = 10⁷ ÷ 10³ = 10⁴ = 10 000"; four blue "× 10" tags hop from 30 to 70 on the scale while the slider moves 40 dB and the ratio readout ticks to "× 10 000"; beside it a red slip "70 ÷ 30 ≈ 2.3 times" writes and is crossed (silent; caption "decibels aren't ordinary numbers"). On "four" a side row "(70 − 30) ÷ 10 = 4, so 10⁴" (the 40 teal).

### 7. earthquakes: one step is ten times the shaking
> Earthquake magnitude can work the same way, with no ten in front. In a simplified local magnitude, M is log base ten of A over A nought, where A is the size of the wiggle on a seismograph, measured at the same distance with the same instrument, so each step of one means ten times the **amplitude**. Earthquake A is magnitude five. Earthquake B has a seismograph trace fifty times as **tall**. Its magnitude is five plus log of fifty, about six point **seven**. Fifty times the wiggle shows up as only one point seven more on the **scale**.

Visual: clear change: a coded seismograph strip (a ruled paper band with a trace, about 1,400 × 300 px, with a vertical scale bar) at the top; formula (52 px) "M = log₁₀(A ÷ A₀)" (grey label "simplified local magnitude: same distance and instrument; Richter is one such scale"); a `LiveReadoutBoard` (52 px) "trace × ..." (blue) and "magnitude M" (ink). On "amplitude" the trace's wiggle grows ×10 as the readouts tick "× 10" and "5.0 → 6.0" (hand tag "+1 = × 10"), then returns. Givens card: "M_A = 5.0", "A_B = 50 A_A (seismograph trace amplitude)" (site Problem 3). On "tall" the trace grows ×50 against the scale bar, then is clipped with a "× 50" label because it leaves the strip; the magnitude readout ticks on. Rows: "M_B = log₁₀(50 × 10⁵)"; on "seven" the green framed answer "M_B = 5 + log₁₀ 50 ≈ 5 + 1.699 ≈ 6.70"; beside it a red slip "50 × 5 = 250" writes and is crossed (silent; caption "magnitude is a log: 5 + log₁₀ 50"). On "scale" a teal bracket on the magnitude axis from 5.0 to 6.7: "× 50 is only + 1.7".

### 8. pH: a minus sign reverses the direction
> For dilute solutions, pH is minus log base ten of the hydrogen ion concentration, so more hydrogen ions mean a lower **pH**. Each step of one is a factor of ten. A solution at pH four has ten to the minus four moles per litre, and pH seven has ten to the minus **seven**. So pH four has a thousand times the hydrogen ion concentration, even though the numbers differ by only **three**.

Visual: clear change: the reused pH meter plate (`public/assets/chemistry/m6-ph-meter-probe-beaker-v1.png`, about 520 px) at the left, its blank screen overlaid with coded digits. Formula (52 px) "pH = −log₁₀[H⁺]" with the −1 amber (grey "[H⁺]: mol/L of hydrogen ions; dilute-solution model"). A vertical pH axis 0 to 14 with a parallel [H⁺] axis 10⁰ to 10⁻¹⁴ (log). On "pH" (first) an arrow up the [H⁺] axis points down the pH axis (hand tag "more H⁺, lower pH"). On "seven" the meter reads "7.00" then "4.00"; markers at pH 7 (10⁻⁷) and pH 4 (10⁻⁴). On "three" three blue "× 10" tags hop from 10⁻⁷ to 10⁻⁴ and the green framed answer writes "10⁻⁴ ÷ 10⁻⁷ = 10³ = 1000"; a red slip "3 times as acidic" writes and is crossed (silent; caption "3 steps = × 1000").

### 9. star magnitudes: smaller is brighter
> Star magnitudes have a minus sign and a two point five. The difference in magnitudes is minus two point five times log of the brightness ratio. So brighter stars get smaller **magnitudes**, and five magnitudes is a factor of ten to the two, a **hundred**. A magnitude one star is a hundred times as bright as a magnitude six **star**.

Visual: clear change: a dark panel with two reused star plates (`physics/y12p-star-white-v1.png` at about 180 px and at about 40 px), labelled "m = 1" and "m = 6". Formula (52 px) "m₁ − m₂ = −2.5 log₁₀(F₁ ÷ F₂)" with −2.5 amber (grey "F: brightness"). On "magnitudes" a magnitude axis with smaller numbers at the bright end (arrow "brighter"; hand tag "smaller is brighter"). On "hundred" rows "1 − 6 = −5 = −2.5 log₁₀(F₁ ÷ F₂)", "log₁₀(F₁ ÷ F₂) = 2" and the green framed "F₁ ÷ F₂ = 10² = 100". On "star" the m = 1 star pulses (tag "100 × as bright").

### 10. memory aid: one rule for all four scales
> Here's one rule for all four scales. Each one is a number times log base ten of a **ratio**. To turn a step on the scale back into a factor, divide the step by that number, and raise ten to the **power**. Decibels: divide by ten. Earthquakes: divide by one. pH: divide by minus one, so the direction flips. Stars: divide by minus two point **five**.

Visual: stage change to the framed `MemoryAidCard` (about 1,300 × 620 px, double ink frame, hand-font heading "Memory aid"), with the phone icon (from the plate, about 140 px) at its left edge. On "ratio" the main line writes large in the hand font, 60 px: "ratio = 10^(step ÷ number in front)" (step teal, number amber, ratio blue). On "power" the formula glows. Keyed lines (40 px), one per spoken scale, each with a worked chip: "dB: 10 log₁₀ · +10 dB → × 10", "earthquake: 1 log₁₀ · +1 → × 10", "pH: −1 log₁₀ · −3 → × 1000 [H⁺]", and on "five" "stars: −2.5 log₁₀ · −5 → × 100 brighter"; the condition line "A minus sign flips the direction." Hold about 2 s.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. A lawnmower measures ninety decibels, and a conversation measures sixty. Using L equals ten log base ten of I over I nought, how many times more intense is the lawnmower's sound? Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A lawnmower measures 90 dB and a conversation measures 60 dB. Using L = 10 log₁₀(I ÷ I₀), how many times more intense is the lawnmower's sound than the conversation?" The full question stays on screen. Picture slot: the reused sound level meter (about 420 px wide) with a blank display. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing (no scale or tags).

### 12. feedback 1 (brief)
> The difference is thirty **decibels**. Divide by ten: **three**. So the ratio is ten to the three, a thousand times as **intense**. One and a half times compares the decibel numbers, as if the scale were **ordinary**.

Visual: the card shrinks to the top (30 px). `GivensStrip` (44 px): "90 dB", "60 dB", "L = 10 log₁₀(I ÷ I₀)". On "decibels" "90 dB" and "60 dB" underlined; row (52 px) "90 − 60 = 30 dB" (teal). On "three" "10 log₁₀" underlined; row "30 ÷ 10 = 3" (10 amber). On "intense" the green framed answer "ratio = 10³ = 1000"; three blue "× 10" tags hop on a small dB scale. On "ordinary" a red slip "90 ÷ 60 = 1.5 times" writes and is crossed. Hold about 1 s.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. Set A lists the populations of ten towns and cities, from twelve hundred to five point three million people. Set B lists daily top temperatures over a month, from twenty one to thirty one degrees. Which set suits a logarithmic scale? Justify using the ranges. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Set A: the populations of 10 towns and cities, from 1 200 to 5 300 000. Set B: the daily maximum temperatures over one month, from 21 °C to 31 °C. Which set should be graphed on a logarithmic scale? Justify your answer by referring to the range of each set." The full question stays on screen. Picture slot: f07's painted country town (`ma12-country-town-v1`, about 420 px wide) beside the reused thermometer (`biology/m8-thermometer-v1.png`, about 220 px tall), with no axes, ranges or ratios. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 14. feedback 2 (brief)
> Set A. Five point three million divided by twelve hundred is about four **thousand**, more than three powers of **ten**. Set B's largest is only about one and a half times its smallest, and temperatures are compared by **differences**. It's the ratio that matters, not the size of the numbers: a million to one and a half million spans less than a factor of **two**.

Visual: the card shrinks to the top. `GivensStrip`: "A: 1 200 to 5 300 000", "B: 21 °C to 31 °C". On "thousand" "1 200" and "5 300 000" underlined; row (52 px) "5 300 000 ÷ 1 200 ≈ 4 400" (blue; grey "≈ 4417"). On "ten" the green framed answer "≈ 10^3.6: more than 3 orders of magnitude, so Set A"; a tiny strip of Set A spreading on a log axis. On "differences" "21" and "31" underlined; row "31 ÷ 21 ≈ 1.5; compared by differences: linear". On "two" a red slip "big numbers need a log scale" writes and is crossed (caption "1 000 000 to 1 500 000: ratio 1.5"). Hold about 1 s.

### 15. handoff
> So a log scale turns equal factors into equal steps, and it suits data that spans many powers of ten. That's the end of the trig graphs and modelling videos. Next, a new question. Here's cos x, from zero to pi over two, with thin rectangles standing against it. What happens when we add them up, and make them thinner and **thinner**?

Visual: the memory card shows small at the top, then fades on "Next". Board clears to i05's scene 14 graph exactly (i05 Revision 3, author note g): y = cos x in ink on 0 ≤ x ≤ π/2 with filled endpoint markers, ticks 0, π/4, π/2. On "rectangles" four thin rectangles (width π/8, left-endpoint heights: each top left corner on the curve; since cos x falls here each reaches above it; no "under the curve" label) rise from the axis one after another in light teal; on "thinner" they split into eight (width π/16). Chips "Next: add up thin rectangles" and "?". No sum, value or area label. Hold about 2 s. Reuse i05's build code for this frame so the two are pixel-identical.

### 16. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 36 to 40 px in the left 58 to 60 per cent of the screen, each one line, colour roles kept; the framed memory card on the right, with nothing past its edge and no bullet below 34 px (root decision 58).
> Here are the key notes. Pause the video if you need more time to copy them.

- Log scale: values span many powers of 10, compared by factors.
- Equal steps = equal factors: log(10x) = 1 + log x.
- dB: L = 10 log₁₀(I ÷ I₀); +10 dB = × 10 intensity.
- Earthquake +1 = × 10; pH 1 lower = × 10 [H⁺]; stars 5 lower = × 100.
- ratio = 10^(step ÷ number in front).

Memory aid (framed card, right half of the notes screen, as in scene 10): *ratio = 10^(step ÷ number in front)*. Second line: *A minus sign flips the direction.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades (1 s) back to scene 15's frame exactly (y = cos x in ink on 0 ≤ x ≤ π/2 with the eight left-endpoint rectangles, chips "Next: add up thin rectangles" and "?"), which is also i05's final frame. This is the final frame and i06's opening frame.

## Teaching checks

- **Does it explain causes?** Why the linear axis fails: the largest value sets the scale (2). Why the log axis works: log(10x) = 1 + log x, so each ×10 is one equal step (3). Why heights don't suit it: a small ratio squeezes them, and they are compared by differences (4). Why 10 dB is ×10: the 10 in front (5). Why ×50 is only +1.7: log₁₀ 50 ≈ 1.7 (7). Why lower pH is more acidic: the minus sign (8). Why smaller magnitudes are brighter: the −2.5 (9).
- **Misconceptions addressed:** the eight listed under Decisions (scenes 1 to 9; feedback 1 and 2, crossed; key notes 1 to 4).
- **One idea at a time:** one scale per scene (5 to 9); the axis morph changes one thing (positions); scene 6 writes one row per spoken step.
- **Video makes it easier:** the points pile onto zero as the axis rescales (2), then spread as it morphs to log (3); the height strip squeezes on a log axis while the star strip spreads (4); "× 10" tags hop step by step along the axis and the dB scale (3, 5, 6, 8); the seismograph trace grows ×50 against a scale bar (7); the meter reading changes (5, 8).
- **Response opportunity:** two HSC-style tasks with every given on the card (the formula in A1; both ranges in A2), 10 seconds each, nothing answer-bearing; one crossed mistake each; feedback about 16 s and 27 s.
- **Avoided double teaching:** logs as powers of ten and log(ab) = log a + log b are recalled in a clause; pH chemistry is not taught beyond "hydrogen ion concentration".
- **Syllabus coverage:** `cib6542e48` (recognise and explain suitability: scenes 1 to 4, attempt 2); `ci1275a9f6` (decibels 5, 6, A1; earthquakes 7; pH 8; star magnitudes 9; one rule 10). Stars and earthquakes have no attempt (open decision 2).
- **Out of scope by design:** earthquake energy, perceived loudness, log-log graphs, linearising data, accumulation (handoff only).

- **Visual standard (`../maths-visual-standard.md`, Revision 3), item by item:** 1 anchor in the first frame (the phone and its storage ruler), returning on the memory card; 2 a new stage every 30 to 85 s (stage plan under "Scene list and build ids"); 3 three simulations with live readouts (the linear-to-log morph with live tick labels, the step-to-factor slider on the dB scale, the ×50 seismograph trace); 4 fixed colour roles (number in front amber, step teal, ratio blue); 5 52 px current lines and readouts, 26 px floor; 6 hand tags in the role colours; 7 worked boards in the g01 layout with green framed answers and crossed slips; 8 framed memory card and five one-line key notes; 9 the surprise shown happening (the piled files spread out, and kB, MB, GB and TB land three steps apart).

## Practice questions and model answers

**Attempt 1 (scene 11; original numbers on site SA 2's idea, HSC style, 2 marks suggested, not an official marking scheme).** "A lawnmower measures 90 dB and a conversation measures 60 dB. Using L = 10 log₁₀(I ÷ I₀), how many times more intense is the lawnmower's sound than the conversation?"
Model answer: ΔL = 90 − 60 = 30 dB; I₁ ÷ I₂ = 10^(30/10) = 10³ = 1000. Classic mistake (crossed): 90 ÷ 60 = 1.5 times.

**Attempt 2 (scene 13; original, after site SA 4, HSC style, 2 marks suggested).** "Set A: the populations of 10 towns and cities, from 1 200 to 5 300 000. Set B: the daily maximum temperatures over one month, from 21 °C to 31 °C. Which set should be graphed on a logarithmic scale? Justify your answer by referring to the range of each set."
Model answer: Set A. Its largest value is about 4 400 times its smallest (more than three orders of magnitude), so on a linear axis the small towns would be crushed near zero; a log axis spaces them. Set B's ratio is only about 1.5 and temperatures are compared by differences, so a linear scale suits it. Classic mistake (crossed): "big numbers need a log scale" (1 000 000 to 1 500 000 has ratio 1.5).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Opening frame | t03's linear axis 0 to 0.004 W/m²; 30 dB at 10⁻⁹, 85 dB ≈ 0.000316, 95 dB ≈ 0.00316 | 1 |
| Factory arithmetic | 95 − 85 = 10; 10 ÷ 85 ≈ 11.8% ("about twelve percent") | 1 |
| Range | 10⁻¹² to about 1 W/m²; 12 orders of magnitude; conversation 10⁻⁶ | 2, 3 |
| Log axis | ticks 10⁻¹² to 10⁰; factory 10^(−2.5) ≈ 0.0032 | 3 |
| Suitability (site SA 4) | stars 3 × 10⁻¹³ to 1.4 × 10⁻⁸, ratio ≈ 4.7 × 10⁴, 4.7 orders; heights 152 to 187 cm, ratio ≈ 1.23, log 2.18 to 2.27 | 4 |
| Decibels | L = 10 log₁₀(I ÷ I₀), I₀ = 10⁻¹²; +10 dB = × 10; factory × 10; +3 dB ≈ × 2 (1.995) | 5 |
| Library and café (site Problem 2) | 10⁻⁹ and 10⁻⁵ W/m²; ratio 10⁴ = 10 000; (70 − 30) ÷ 10 = 4 | 6 |
| Earthquake (site Problem 3) | M = log₁₀(A ÷ A₀); 5.0; × 50; 5 + log₁₀ 50 ≈ 6.70; + 1.7 | 7 |
| pH (site MC Q3) | 10⁻⁴ and 10⁻⁷ mol/L; ratio 1000 | 8 |
| Stars (site card 09) | m = 1 and m = 6; 10^(5/2.5) = 100 | 9 |
| Memory aid | k = 10, 1, −1, −2.5 | 10, 16 |
| A1 | 30 dB; 10³ = 1000; crossed 1.5 | 11, 12 |
| A2 | 5 300 000 ÷ 1 200 ≈ 4 400 (10^3.6); 31 ÷ 21 ≈ 1.5; crossed "big numbers"; 1.5 million ÷ 1 million = 1.5 | 13, 14 |
| Handoff (i05's frame) | cos x on [0, π/2]; 4 rectangles width π/8, then 8 width π/16; left endpoints | 15 |

**Revision 3 additions (recalculated in Python, 7 Nov):**

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Storage (decimal) | text ≈ 1 kB = 10³ B (log 3); photo ≈ 3 MB = 3 × 10⁶ (log 6.48); film ≈ 4 GB = 4 × 10⁹ (log 9.60); phone 256 GB = 2.56 × 10¹¹ (log 11.41); cloud backup 2 TB = 2 × 10¹² (log 12.30) | 1 to 3 |
| Fractions of the 256 GB ruler | text 3.9 × 10⁻⁹ (≈ 0.0000004%); photo 1.17 × 10⁻⁵ (≈ 0.001%); film 0.0156 (≈ 1.6%) | 1 |
| Orders of magnitude | 2.56 × 10¹¹ ÷ 10³ = 2.56 × 10⁸; log₁₀ = 8.41 ("more than eight") | 2 |
| Prefixes | kB, MB, GB, TB at log 3, 6, 9, 12: three steps apart (× 1000) | 2, 3 |
| Silent slips | 70 ÷ 30 ≈ 2.33 (6); 50 × 5 = 250 (7); "3 times as acidic" (8) | 6 to 8 |

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy (2 Nov); Codex to re-check.

- 10^(L/10 − 12) for L = 30, 60, 70, 85, 90, 95: 10⁻⁹, 10⁻⁶, 10⁻⁵, 3.162 × 10⁻⁴, 10⁻³, 3.162 × 10⁻³.
- Ratios: 95/85 dB → 10; 90/60 → 1000; 70/30 → 10 000; 10^0.3 = 1.99526; 10/85 = 0.1176.
- 5 + log₁₀ 50 = 6.69897; log₁₀ 50 = 1.69897.
- 10^(5/2.5) = 100; 10⁻⁴ ÷ 10⁻⁷ = 1000.
- 187/152 = 1.2303; log₁₀ 152 = 2.1818; log₁₀ 187 = 2.2718. 1.4 × 10⁻⁸ ÷ 3 × 10⁻¹³ = 46 667; log₁₀ = 4.669.
- 5 300 000 ÷ 1 200 = 4 416.7; log₁₀ = 3.645; 31/21 = 1.476; log₁₀ 1.5 = 0.176.

- Revision 3: log₁₀ of 10³, 3 × 10⁶, 4 × 10⁹, 2.56 × 10¹¹, 2 × 10¹²: 3, 6.477, 9.602, 11.408, 12.301. 4 × 10⁹ ÷ 2.56 × 10¹¹ = 0.015625; 3 × 10⁶ ÷ 2.56 × 10¹¹ = 1.17 × 10⁻⁵; 10³ ÷ 2.56 × 10¹¹ = 3.9 × 10⁻⁹. 70/30 = 2.333.

## Memory aid check

- **"ratio = 10^(step ÷ number in front)."** Meaning: each scale is S = k log₁₀(Q ÷ Q₀); a change ΔS between two readings gives Q₂ ÷ Q₁ = 10^(ΔS ÷ k) (author note g). Assumptions checked: the scale is exactly k log₁₀ of a ratio (true for the four syllabus scales as defined on the site and here); "step" is the later reading minus the earlier; the quantity Q is the one inside the log (intensity for dB, seismograph trace amplitude at a fixed distance and instrument for the simplified earthquake scale, [H⁺] for pH in the dilute model, brightness for stars); a negative k reverses the direction ("A minus sign flips the direction" is printed with it). It helps a new case: attempt 1 (30 ÷ 10 = 3), and any pH or magnitude comparison. It also exposes the site's "1 dB = × 10" slip (k = 10, so 1 dB is × 10^0.1). Introduced after all four scales.
- **Considered, not used:** "each step is × 10" (false for dB and stars); "3 dB doubles" (kept as a one-sentence consequence in scene 5, not as the aid).

## Narration length estimate

**Revision 3 (7 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " inside the scene, joined with a space, bold markers removed; the total is the sum of the scene strings): 5,974 characters**, 16 scenes. Characters per scene (1 to 16): 430, 436, 477, 590, 589, 438, 524, 373, 322, 337, 211, 201, 291, 350, 330, 75.

At 13.3 characters per second the speech outside the notes scene (5,899 characters) is about 444 s. Holds and settling: two 10 s countdowns (20 s); the memory-card hold (2 s); two feedback holds (2 s); the handoff hold (2 s); settling for the ruler extension (2), the morph (3), the strip morphs (4), the slider moves (5, 6) and the trace growth (7), about 16 s in all; the key-notes scene fixed at 45 s. Total **about 535 s**, under the 570 s cap with about 35 s spare. Feedback: scene 12 about 16 s and scene 14 about 27 s (including the 1 s holds).

Reserve trims if the voiced take runs long (in order): scene 5's last sentence (keep the "+3 dB" readout silent; about 8 s); scene 7's last sentence (keep the bracket; about 6 s); scene 2's last sentence (keep the pile-up; about 12 s). Do not cut below 5,500 characters without replacing content.

Earlier counts (kept for the record):

Revision 1 count (2 Nov; by script `count_tgraphs.py`, build parser rules): **5,642 characters** (5,657 with the joining spaces), 16 scenes. **Revision 2 (3 Nov): 5,767 characters** (5,782 with the joining spaces), 16 scenes; per scene: 456, 385, 439, 590, 445, 438, 524, 373, 322, 337, 211, 201, 291, 350, 330, 75. About 434 s of speech plus about 101 s of holds and settling: **about 535 s**, under the 570 s cap. The Revision 1 breakdown follows. Characters per scene (1 to 16): 454, 366, 439, 590, 421, 438, 429, 388, 322, 337, 211, 201, 291, 350, 330, 75. At 13.3 characters per second the speech is about 424 s; add about 16 s of settling time (the rescale in 2, the morph in 3, the strip morphs in 4, the trace growth in 7), 20 s for two countdowns, about 5 s of short holds (scenes 10, 12, 14, 15) and about 60 s more of the quiet notes hold (about 101 s of holds): **about 525 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Feedback: scene 12 about 16 s and scene 14 about 27 s (including the 1 s holds). Scene 4 is the longest; each strip morph must finish before its next sentence. Reserve trims if the voiced take runs long: scene 5's last sentence (keep the "+3 dB" bracket silent); scene 7's last sentence (keep the bracket); scene 2's last sentence (keep the pile-up). Trimming more than about 140 characters would drop below the 5,500 floor.

## Scene list and build ids

Lesson key `m-a12t04` (route math-a12-t04, draft). Suggested explainer folder `src/explainer/lessons/math-a12-t04` and build folder `docs/production/claude-pm/lessons/m-a12t04`.

In order (kebab-case; 16 scene headings): hook, orders-of-magnitude, log-axis, when-suitable, decibels, worked-db, earthquake, ph-scale, star-magnitude, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (seconds from the per-scene estimate):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 69 s | 1, 2 | Anchor: the phone and the linear storage ruler; the files pile on zero |
| 69 to 108 s | 3 | The morph to a log ruler with live tick labels; kB, MB, GB, TB three steps apart |
| 108 to 155 s | 4 | Two data strips: stars spread out, heights squeeze |
| 155 to 238 s | 5, 6 | Decibel stage: the meter, the step slider and ratio readout, then the worked board |
| 238 to 280 s | 7 | Seismograph trace growing ×50 with the magnitude readout |
| 280 to 309 s | 8 | pH meter and the two log axes |
| 309 to 334 s | 9 | Star panel |
| 334 to 362 s | 10 | Framed memory card |
| 362 to 463 s | 11 to 14 | Question cards with pictures (meter; town and thermometer), countdowns, framed answers and crossed slips |
| 463 to 490 s | 15 | Handoff: i05's cos x rectangles frame |
| 490 to 535 s | 16 | Key notes with the framed card (45 s) |

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`: five bullets and the card). Transitions: t03's last frame continues into scene 1 (camera continue, same ruler); 1 to 2 to 3 camera continue (the ruler extends, then morphs); 3 to 4 clear change (two strips); 4 to 5 clear change (the meter and the dB scale); 5 to 6 camera continue; 6 to 7, 7 to 8, 8 to 9 clear change (one scale each); 9 to 10 clear change to the card; attempts and feedback card shrink to the top; 14 to 15 board clear; 15 to 16 fade to the notes board; 16 cross-fades back to 15's frame.

Holds: attempt-1, attempt-2 (10 s countdown). key-notes is the quiet notes hold, fixed at 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a12t04-learning-review.md`, `science_check` = `checks/m-a12t04-maths-check.md`.

## Assets

Inspected before choosing (7 Nov, actual appearance): `physics/phys-y11-sound-level-meter-v1.png` (a handheld meter on a short stand with a blank rectangular display; measured display rectangle in `MATHS_SHARED_ANCHORS.soundMeterDisplay`; shared plate under root decision 4), `chemistry/m6-ph-meter-probe-beaker-v1.png` (a benchtop meter with a blank screen and a probe in a beaker), `physics/y12p-star-white-v1.png` (a painted white star disc), `biology/y11-laptop-blank-v1.png` and `physics/phys-y11-phone-tripod-v1.png` (a laptop, and a phone on a tripod: the tripod suggests filming, so d03's plain phone is used), `biology/m8-thermometer-v1.png` (A2 picture). No seismograph plate exists; the trace is a coded record on a ruled strip (a graph, so coded), and no apparatus plate is needed for it.

Have (reused): `ma12-phone-v1.png` (d03's plate; scenes 1 to 3 and the card icon; also t03's final frame), `physics/phys-y11-sound-level-meter-v1.png` (5, 6, A1), `chemistry/m6-ph-meter-probe-beaker-v1.png` (8), `physics/y12p-star-white-v1.png` (4, 9), `ma12-country-town-v1.png` (f07's plate; A2), `biology/m8-thermometer-v1.png` (A2). The Revision 2 request for a new `m-a12-sound-level-meter-v1.png` is withdrawn.

Need (painted, new): none.

Coded (studio kit): rulers and axes, the morph, step tags, the dB scale and slider, the seismograph strip, the pH and [H⁺] axes, readout boards, worked boards, question cards, countdown, hand tags, framed card, key notes, the phone's coded storage rows, and i05's rectangles frame (reuse i05's build code).

### Studio kit use and additions

Existing studio parts: `LiveReadoutBoard`, `ParameterSlider` (the step slider), `PlateImg`, `PlateReadout` (coded digits on the meter and pH displays), `HandTag`, `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`, `GivensStrip`, `Role`; d04's log ruler (`LogRuler`, decision 42) where it fits.

Additions: **`LogAxisMorph`** at studio sizes (the Revision 2 spec under "New part", with live tick-label cross-fade, a point readout and a `secondaryScale` for dB), and a **ratio readout linked to a step slider** (10^(step ÷ k), with blue "× 10" tags hopping per whole power).

## Codex asset brief (Maths A12 T04, phone storage and log scales)

No new painted plate. Every picture reuses an existing or already-briefed plate: `ma12-phone-v1.png` (d03's brief; it must be painted before t03's and t04's builds, because it is in t03's final frame and t04's opening), `physics/phys-y11-sound-level-meter-v1.png`, `chemistry/m6-ph-meter-probe-beaker-v1.png`, `physics/y12p-star-white-v1.png`, `ma12-country-town-v1.png` (f07's brief) and `biology/m8-thermometer-v1.png`. Never stretch a plate; place coded digits only on measured display rectangles. The Revision 2 sound level meter brief is withdrawn.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the narration, screen text, attempts and key notes against "Numbers used".
2. Confirm every scale statement carries its own formula and step meaning: +10 dB = × 10 (never "+1 dB = × 10"); +1 magnitude = × 10 amplitude; 1 pH lower = × 10 [H⁺]; 5 star magnitudes lower = × 100; and that the memory aid is exact for each (author note g).
3. Confirm "intensity" (not loudness) is used for decibels throughout, and that "about one" W/m² for a painful sound is within the conventional range (author note b).
4. Confirm the scene 4 rule states both conditions and the "2 to 3 orders" rule of thumb is labelled as a rule of thumb.
5. Confirm both attempt cards carry every given and neither shows a ratio, choice or scale.
6. Confirm the syllabus quotes match the crosswalk text exactly and no site label appears in learner copy or metadata.
7. Confirm the opening frame equals t03's scene 14 frame and the final frame equals i05's final frame exactly (scene 15 here), with no area or sum label.
8. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
9. Confirm the narration character count by script.
10. Add site corrections 2 to 4 under Decisions to `../site-corrections-maths-a12.md` (item 1 is already in the crosswalk findings; confirm it is in the log, without duplicates).

11. Revision 3: confirm the storage values and their logs (Revision 3 additions; decimal prefixes stated in the author note); that only "about" sizes are spoken; that the kB, MB, GB and TB ticks sit three steps apart; that the factory comparison in scene 5 uses the site's numbers (85 dB, 95 dB, about 12%, × 10); the silent slips and their captions; that both cards' pictures give nothing away; the colour roles (number in front amber, step teal, ratio blue, green only on answers, red only on crossed slips); five one-line key notes and a 1,350-frame notes scene; and that the opening frame equals t03 Revision 3's scene 14 and the final frame equals i05 Revision 3's final frame (ink cos x).

## YouTube metadata (draft)

Title: Logarithmic Scales: Decibels, Earthquakes, pH and Star Magnitudes | Year 12 Maths Advanced

(Title length: 91 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/further-graph-transformations-and-modelling/lesson02.sa.html

Put a phone's text messages, photos, films and the whole phone on one ordinary ruler, and almost everything is crushed onto zero. Place each value at its power of ten instead and every step becomes a factor of 10: a logarithmic scale (kilobytes, megabytes, gigabytes and terabytes are already one, each a thousand times the last). Learn when a log scale suits data (a range of several powers of ten, compared by factors) and when it doesn't (heights in a class). Then use decibels (a factory at 95 dB against an 85 dB limit is ten times the intensity, not 12% more), earthquake magnitude in a simplified local scale (a seismograph trace fifty times as tall is only 1.7 more), pH (in dilute solutions, pH 4 has a thousand times the hydrogen ion concentration of pH 7) and star magnitudes (five magnitudes is a factor of 100). One rule for all four: ratio = 10^(step ÷ number in front). Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 12, further graph transformations and modelling.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Recognise that logarithmic scales are useful to represent a variable that ranges over a large set of values and explain when a logarithmic scale is suitable"
"Use logarithmic scales to model and solve problems involving decibels (dB) in acoustics, seismic scales for earthquakes, magnitudes of stars and the pH scale in chemistry"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa3b2bda67

Builds on: Modelling with trig functions (previous video); Year 11 logarithms. Next: Adding up thin rectangles.

#Year12Maths #MathsAdvanced #Logarithms #HSCScience

## Open decisions

- **1. i06's opening frame (root).** This design ends on i05's handoff frame exactly so i06 opens on one frame whichever video precedes it. If i06 is designed to open elsewhere, change scene 15's graph with i05's (both handoffs must stay identical).
- **2. Practice for earthquakes and stars (root).** `ci1275a9f6` is covered in teaching for all four scales, but only decibels and the suitability judgement are attempted. A short earthquake or star question would push the narration past the length band with three attempts; the strand's exam-practice video is the suggested home.
- **3. "Richter" label (root).** The syllabus says "seismic scales for earthquakes"; the site uses "Richter" with M = log₁₀(A/A₀). This design names the scale "earthquake magnitude" and shows "Richter" once in grey. Root to confirm.
- **4. Year 11 log-law codename (root).**
- **5. Sound level meter plate (root, Codex).** If not ready, scenes 5 and 6 work without it (the coded dB scale carries the teaching); the reading change in scene 5 moves to a coded display.

- **Revision 3 (root).** (a) The anchor is a phone's storage (decimal prefixes); no new plate; d03's `ma12-phone-v1` must be painted before t03 and t04 build. (b) The site's factory hook moves into scene 5, because d04 owns sound levels as an anchor. (c) The seismograph stays coded (a record on a strip); no seismograph plate. (d) Open decision 5 (sound level meter plate) is closed: the Physics plate is reused (root decision 4). (e) The final frame now matches i05 Revision 3 (ink cos x); Revision 2 said blue.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from Year 11 logarithms and t03; check that the pile-up and morph in scenes 2 and 3 make "equal steps are equal factors" visible before the formula; that scene 4's two conditions are both understood; that scenes 5 to 9 do not feel like a formula list (each has its own visual and one example); that the memory aid is introduced as a summary of four seen cases; and that the attempt cards are fair at 10 s), then the Codex maths check and error check.
- The rescale, the morph, the hopping "× 10" tags and the strip morphs carry the explanation; judge them at playback speed.
- i06 opens on scene 15's frame, which is i05's final frame.
- **Revision 2 (3 Nov), brief 153 repairs.** Maths check (4 should fix) and learning review (same four, items 1 to 4): (1) the reference intensity is now "a conventional reference intensity, near the threshold of hearing" in scenes 2 and 5 and the vocabulary, plate and description lines; (2) scene 7 names a simplified local magnitude measured at the same distance with the same instrument, and the 50-fold example is a seismograph trace ("fifty times as tall"); (3) scene 8 says "for dilute solutions" before the formula and the key note says "(dilute solutions)"; the repeated sentence "pH is a log scale with a minus sign" is cut to fund it (the minus-sign reversal stays in the visual and the memory aid); (4) "barely off zero" is now "near the left" in speech and cue. Root decision 22 applied ("over" for every spoken fraction); decision 21 needs no change here (no transformation letters). Item 4 note: the 10/85 hook rounding stays (the maths check calls it minor). The final frame (scene 15, i05's frame) is unchanged, so i06 is unaffected.

- **Revision 3 (7 Nov).** Not reviewed. The learning review should check that the storage ruler makes "a linear axis crushes small values" obvious before any formula; that "the storage names are a log scale" lands as a surprise and not a distraction; that scene 5 reads clearly with intensity defined there; and that scenes 5 to 9 do not feel like a formula list. Opens on t03 Revision 3's phone frame; ends on i05's frame.

## Revision 3 (7 Nov 2026)

Redesign to `../maths-visual-standard.md` on the d01 Revision 6 pattern, with an everyday anchor (owner rule, 7 Nov).

- **Anchor:** a phone's storage (a text message, a photo, a film, the whole phone) on an ordinary ruler and then a log ruler. Chosen because it is everyday, the storage names kilo, mega, giga and tera are already a log scale (three steps apart), and it needs no new plate. Decibels, earthquake magnitude, pH and star magnitude stay as the syllabus's examples with the site's numbers; the site's factory hook moves into scene 5 (d04 owns sound levels as an anchor).
- **Simulations:** (1) the linear-to-log morph with live tick labels and point readouts; (2) the step-to-factor slider on the dB scale with a live ratio readout and the meter display following; (3) the seismograph trace growing ×50 with a live magnitude readout.
- **Colour roles:** the number in front amber; a step teal; a ratio or factor blue; data and axes ink; answers green; mistakes red.
- **Plates:** none new. Reused: `ma12-phone-v1` (d03), the Physics sound level meter, the Chemistry pH meter, the Physics white star, `ma12-country-town-v1` (f07) and the Biology thermometer. The Revision 2 sound level meter brief is withdrawn.
- **Narration changes:** scenes 1 to 3 rewritten around the storage ruler; scene 5 defines intensity and carries the factory comparison. Scenes 4 and 6 to 16 keep their Revision 2 text.
- **Counts:** 5,767 characters, about 535 s (Revision 2, 60 s notes hold) → **5,974 characters, about 535 s** (45 s notes scene).
- **Key notes:** four long notes → five one-line bullets with the framed card.
- **Kit additions:** `LogAxisMorph` at studio sizes, and a ratio readout linked to a step slider.
- **Joins:** opens on t03 Revision 3's new phone frame; ends on i05 Revision 3's final frame exactly (ink cos x), which i06 opens on.
