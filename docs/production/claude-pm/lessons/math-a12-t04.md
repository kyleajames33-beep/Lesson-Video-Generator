# Maths A12 T04: When should a large range be represented by a logarithmic scale? Orders of magnitude, the linear-to-log axis morph, decibels, earthquake magnitude, pH and star magnitudes (design)

Status: Revision 1 (2 Nov): needs a student learning review and maths check (Codex), then a Codex error check. No route entry or pre-design pack existed; the pack work is done in this file and the draft route entry is under Decisions for root. Voicing gated by the brief 124 Google voice pilot. Build uses the explainer kit and the maths kit (`FunctionGraph` for the i06 teaser, `ReadoutPanel.rows`, `AlignedAlgebra`); see "Assets" for one new part (`LogAxisMorph`), one existing plate (pH meter) and one new small plate (sound level meter). Nothing recorded; human listening pending.

Narration 5,642 characters, 16 scenes, about 525 s, counted by script with the build parser rules (see "Narration length estimate").

Scope: fourth and last video of the Year 12 Mathematics Advanced trig graphs and modelling strand (course outline playlist order 23; production order after t03, before math-a12-i06). Templates: `math-a12-d05.md` and `math-a12-i05.md` (Revision 2) and the t01 to t03 designs (Revision 1; t03's scene 14 is this video's first frame). Maths visuals coded; two small context plates (programme decision 5). No pre-design pack exists: this design does the pack work. Site lesson read in full (2 Nov, read-only): `C:/Users/kygs/hscscience/subjects/maths-advanced/year12/further-graph-transformations-and-modelling/lesson02.sa.html`, SHA256 `8ead7b9aeca247ad96b3abba7ba7691f8b7eadc7c2f4ebd65ccd0f76202e2c09`. Sections used: the hook (the factory at 95 dB against an 85 dB limit, kept), `interpret-log-scales` card 07 (equal spacing means equal ratios; when to use a log scale), `apply-log-models` card 08 (decibel and Richter formulas, I₀ = 10⁻¹² W/m²), card 09 (star magnitudes and pH, examples kept: m = 1 against m = 6 is ×100), worked Problem 2 (library 30 dB, café 70 dB, ratio 10,000, kept), Problem 3 (magnitude 5.0, amplitude ×50, M ≈ 6.70, kept), SA 4 (stars 3 × 10⁻¹³ to 1.4 × 10⁻⁸ W/m² against heights 152 to 187 cm, kept for scene 4), MC Q3 (pH 4 against pH 7, ×1000, kept), SA 2 (40 dB against 70 dB, the idea for attempt 1).

Owner rules applied: as t01 to t03; no people (the site's "students" heights are shown as a data strip only); context plates only where they carry the context. Root decisions applied: exact powers of ten in the algebra (10⁴, 10³, 10⁻⁹) and decimals only as grey "≈" companions or where no exact form exists (log₁₀ 50 ≈ 1.699); every log scale stated with its formula and coefficient (the "+1 step = ×10" rule is never stated for decibels or star magnitudes, where it is false; site correction 1); attempt cards give no ratio or choice; spoken "next" true in production order (root decision 4).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 12, focus area "Further graph transformations and modelling"; NESA content-system codenames, official `code` field empty), quoted from `docs/production/programme/syllabus/maths-advanced-2024-y12-crosswalk.json`:

- `cib6542e48`: "Recognise that logarithmic scales are useful to represent a variable that ranges over a large set of values and explain when a logarithmic scale is suitable"
- `ci1275a9f6`: "Use logarithmic scales to model and solve problems involving decibels (dB) in acoustics, seismic scales for earthquakes, magnitudes of stars and the pH scale in chemistry"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa3b2bda67

**Boundary:** starts from t03's last frame (a linear "sound intensity (W/m²)" axis from 0 to 0.004 with "quiet library 30 dB" on 0, "85 dB limit" and "95 dB factory", chip "95 dB: only 10 more than 85?"). Teaches: why a linear axis fails for a variable spanning many orders of magnitude (order of magnitude, plain meaning); the log₁₀ axis (equal steps are equal factors, because log(10x) = 1 + log x); when a log scale is suitable (range of several powers of ten and comparison by factors) and when it is not (small ratio, comparison by differences); decibels (L = 10 log₁₀(I/I₀), +10 dB = ×10, +3 dB ≈ ×2) with the factory and the library/café problem; earthquake magnitude (M = log₁₀(A/A₀), +1 = ×10 amplitude) with the ×50 problem; pH (−log₁₀[H⁺], the minus sign reverses direction) with pH 4 against 7; star magnitudes (m₁ − m₂ = −2.5 log₁₀(F₁/F₂), 5 magnitudes = ×100, smaller is brighter). Stops at using these four scales to compare and to find a level or ratio. Not taught: energy of earthquakes (the 10^1.5 rule, not in the syllabus point), perceived loudness (site card 08 rightly separates it), log laws beyond log(ab) = log a + log b (Year 11), log-log graphs or linearising data.

## Decisions

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
- **Decibels (card 08; Problem 2 kept).** L = 10 log₁₀(I/I₀) with I₀ = 10⁻¹² W/m². ×10 in I adds 1 to the log and 10 to L, so the factory's 10 dB is ×10 in intensity; +3 dB is ×10^0.3 ≈ 2 (correcting the site's "1 dB = ×10"; site correction 1). Problem 2: 30 dB and 70 dB give I = 10⁻⁹ and 10⁻⁵ W/m², ratio 10⁴; shortcut 10^(40/10). Task, equation and givens separated. Perceived loudness is not claimed ("intensity" throughout, as site card 08 advises).
- **Earthquakes (card 08; Problem 3 kept).** M = log₁₀(A/A₀), A the amplitude of the seismograph trace; +1 is ×10 amplitude. ×50 gives M = 5 + log₁₀ 50 ≈ 6.70. The scale is named "earthquake magnitude" (the syllabus says "seismic scales"; the site's "Richter" appears once as a grey label, open decision 3). Energy is not discussed.
- **pH (card 09; MC Q3 kept; existing plate).** pH = −log₁₀[H⁺]: the minus sign reverses the direction; pH 4 against pH 7 is ×1000 in [H⁺]. The existing pH meter plate shows the reading (coded digits over its blank screen).
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
- **Learner-visible vocabulary (plain meaning at first use):** intensity (the power of the sound arriving on each square metre, scene 1); order of magnitude (one factor of ten, scene 2); logarithmic scale (a scale where equal steps mean equal factors, scene 3); decibel (the unit of the sound level L, scene 5); I nought (the faintest sound we can hear, scene 5); amplitude of a seismograph (the size of the trace's wiggle, scene 7); hydrogen ion concentration (how many moles of hydrogen ions per litre, recalled from Chemistry in a clause, scene 8); magnitude of a star (its brightness number, scene 9).
- **Legacy logic ported:** none.
- **New explainer motion:** **linear-to-log morph** (`LogAxisMorph`, scenes 1 to 3, 5, 6); **ratio steps** (×10 tags hopping along the log axis, scenes 3, 5); **two data strips** collapsing or spreading (scene 4, the same part with `data` sets); **level slider** on a dB axis (scenes 5, 6); **seismograph trace** growing ×50 (scene 7, coded trace, `FunctionGraph` with a damped sine as decoration, labelled "trace", no data claim); **pH meter reading** (existing plate, coded digits, scene 8); **star dots** sized by brightness (scene 9, coded); the i05 rectangles frame (scene 15, `FunctionGraph` and plain SVG rectangles as i05); aligned algebra, `Chip` with `cross`, `Countdown`, `QuestionCard`, `KeyNotes`.
- **Board layout (constant):** heading top-left; the main horizontal axis across the upper middle (about 1,500 px wide) for scenes 1 to 6 with point labels above it; algebra and chips below it or in the right column; plates at the left (sound level meter about 300 × 420 px in scenes 5 and 6; pH meter about 520 × 520 px in scene 8). The log axis runs from 10⁻¹³ to 10¹ W/m² (ticks at every power of ten, labels every power from 10⁻¹² to 10⁰); a parallel dB scale under it (0 to 120 dB, ticks every 10) appears in scene 5, aligned so that 0 dB sits under 10⁻¹² and 120 dB under 10⁰.
- **No human figures.**
- **Author notes (not learner copy):**
  (a) Intensities: I = I₀ × 10^(L/10), I₀ = 10⁻¹² W/m². L = 30: 10⁻⁹; 60: 10⁻⁶; 70: 10⁻⁵; 85: 10^(−3.5) = √10 × 10⁻⁴ ≈ 3.162 × 10⁻⁴; 90: 10⁻³; 95: 10^(−2.5) ≈ 3.162 × 10⁻³; 120: 1. Factory/limit: 10^(10/10) = 10. 10/85 = 11.76%. +3 dB: 10^0.3 = 1.99526.
  (b) Scene 2: threshold 10⁻¹² W/m² is I₀ by definition of the scale; "a painfully loud sound is about one" W/m² corresponds to 120 dB (the conventional threshold of pain is quoted as about 1 to 10 W/m²; "about one" stays inside that). Twelve orders of magnitude from 10⁻¹² to 10⁰.
  (c) Scene 4: 1.4 × 10⁻⁸ ÷ (3 × 10⁻¹³) = 4.667 × 10⁴; log₁₀ = 4.669. 187 ÷ 152 = 1.230; log₁₀ 152 = 2.182, log₁₀ 187 = 2.272.
  (d) Scene 7: M_A = 5.0, A_B = 50 A_A: M_B = log₁₀(50 × 10⁵) = 5 + log₁₀ 50 = 6.69897 ≈ 6.70; difference 1.70.
  (e) Scene 8: [H⁺] = 10^(−pH) mol/L: pH 4: 10⁻⁴; pH 7: 10⁻⁷; ratio 10³. Scene 9: m₁ − m₂ = −5 gives F₁/F₂ = 10^(5/2.5) = 100.
  (f) A log axis has no zero: 10⁻¹³ is its left end, and values approach zero only far to the left. The build labels the left end, not "0".
  (g) Memory aid: for a scale S = k log₁₀(Q/Q₀), ΔS = k log₁₀(Q₂/Q₁), so Q₂/Q₁ = 10^(ΔS/k). dB: k = 10; earthquake: k = 1; pH: S = −log₁₀[H⁺], k = −1 (a step of −3 in pH gives [H⁺] ratio 10³); stars: k = −2.5.
  (h) A1: ΔL = 30, ratio 10^(30/10) = 10³ = 1000. Crossed: 90 ÷ 60 = 1.5. A2: 5,300,000 ÷ 1,200 = 4,416.7 (log₁₀ = 3.645); 31 ÷ 21 = 1.476; 1,500,000 ÷ 1,000,000 = 1.5 (log₁₀ = 0.176).
  (i) Pronunciations: "ten to the minus twelve", "I nought" (I₀), "log base ten", "pH" (letters), "H plus" not spoken (said "hydrogen ion concentration"), "seismograph".

Main question: *A factory at 95 dB says it is only 10 more than the 85 dB limit. When does an ordinary axis fail, when should we use a logarithmic scale instead, and what does a step on each log scale mean?*
Entry knowledge (Year 11 `ci98f43d14`, `cic84a1659`, Year 11 log laws; index laws and scientific notation; t03): logarithms as powers of ten; log(ab) = log a + log b; reading scientific notation.
Stops after: when a log scale is suitable and when not; decibels, earthquake magnitude, pH and star magnitude used to compare and to find levels; one rule for converting steps to factors.
Handoff: adding up thin rectangles (math-a12-i06), on i05's frame.

## Script and shots

Cue words in **bold** trigger the visual change. Colour key: data points navy with labels; the linear axis grey; the log axis ink with "× 10" step tags amber; the dB scale teal under it; ratios bright amber; givens navy; grey "≈" decimals beside exact powers; the current answer bright; earlier lines dim. Powers of ten written with superscripts (10⁻¹²).

### 1. hook (only ten more?)
> Here's the factory's argument. The safety limit is eighty five decibels, and the factory measures ninety five, so it's only ten more, about twelve percent **bigger**. But look at this ordinary axis of sound intensity, the power of the sound arriving on each square metre. The quiet library is squashed right onto **zero**, and the eighty five decibel point is barely off it. When does an ordinary axis fail like this, and what does ten more decibels really **mean**?

Visual: opens on t03's last frame (linear axis "sound intensity (W/m²)" 0 to 0.004; points "quiet library 30 dB" on 0, "85 dB limit" at ≈ 0.0003, "95 dB factory" at ≈ 0.0032; chip "95 dB: only 10 more than 85?"). Heading writes on: "Logarithmic scales: when and why". On "bigger" a grey chip writes the factory's arithmetic "95 − 85 = 10; 10 ÷ 85 ≈ 12%" with a "?" tag. On "zero" a zoom ring at 0 shows the library point on top of the zero tick; the 85 dB point glows "barely off zero". On "mean" the chip "?" pulses.

### 2. orders of magnitude: the largest value sets the scale
> The trouble is the range. The faintest sound we can hear has an intensity of ten to the minus twelve watts per square metre, and a painfully loud sound is about **one**. That's twelve factors of ten. Each factor of ten is called an order of **magnitude**. On an ordinary axis, the biggest value sets the scale, so everything a thousand times smaller is crushed against **zero**.

Visual: the axis rescales to 0 to 1.2 W/m² (about 1 s) to fit "painful sound ≈ 1" (new point at 1); the library, 85 dB and 95 dB points slide onto 0 and pile up; a new point "faintest audible 10⁻¹²" joins the pile. On "magnitude" a small ladder of twelve "× 10" steps writes in the right column from 10⁻¹² to 10⁰ (chip "order of magnitude = one factor of 10"). On "zero" all points but the painful one pulse together on the zero tick (tag "crushed").

### 3. the log axis: equal steps are equal factors
> So space the values by their powers of ten instead. Ten to the minus twelve goes at minus twelve, ten to the minus nine at minus nine, and so on. That's taking log base ten of each **value**. Now every step along the axis means multiplying by **ten**, because log of ten times a number is one more than the log of the number. Equal steps mean equal factors, not equal differences. That's a logarithmic **scale**, and now every sound has its own **place**.

Visual: `LogAxisMorph` runs (about 2 s, eased) on the first two sentences: each point moves from its linear position to its log₁₀ position; the tick labels cross-fade from "0, 0.2, ..., 1.2" to "10⁻¹², 10⁻¹¹, ..., 10⁰"; under each tick a grey "log = −12, ..., 0". On "value" a grey chip "position = log₁₀(I)". On "ten" amber "× 10" tags hop along each gap (0.1 s each). A row writes: "log₁₀(10x) = 1 + log₁₀ x". On "scale" the axis title changes to "sound intensity (W/m², log scale)". On "place" the five points glow in turn: 10⁻¹² (faintest), 10⁻⁹ (library), 10⁻⁶ (conversation, new), 10^(−2.5) (factory, between 10⁻³ and 10⁻²; grey "≈ 0.0032"), 10⁰ (painful).

### 4. when is a log scale suitable?
> So when should you use one? Compare two sets of data. The brightness of some stars runs from about three times ten to the minus thirteen, to one point four times ten to the minus eight: a factor of about forty seven **thousand**. On a log scale, they spread out nicely. But the heights of a class run from one fifty two to one eighty seven centimetres: a factor of only one point two **three**. On a log scale, they'd squeeze into a tiny strip, and heights are compared by differences anyway. So use a log scale when the values span several powers of ten, and when comparing by factors makes **sense**.

Visual: two data strips replace the sound axis (site SA 4). Strip A "star brightness (W/m²)", 12 navy dots: on a linear strip they pile at the left; on "thousand" the strip morphs to log (dots spread across 10⁻¹³ to 10⁻⁷); chip "ratio ≈ 4.7 × 10⁴: 4.7 orders of magnitude". Strip B "heights (cm)", 12 dots evenly readable from 152 to 187 on a linear strip; on "three" chip "ratio ≈ 1.23"; on "strip" the strip morphs to log (log₁₀ 152 ≈ 2.18 to log₁₀ 187 ≈ 2.27) and the dots squeeze into a short segment (tag "squeezed"), then morph back. On "sense" the rule writes in the right column: "Use a log scale when the values span several powers of 10 and comparing by factors makes sense." Grey chip under it: "rule of thumb: more than about 2 to 3 orders of magnitude".

### 5. decibels: ten times the intensity is ten more decibels
> Decibels are a log scale. The level L is ten times log base ten of I over I nought, where I nought is ten to the minus twelve, the faintest sound we can **hear**. Multiply the intensity by ten, and the log goes up by one, so the level goes up by ten **decibels**. So the factory isn't twelve percent more. Ten decibels more means ten times the **intensity**. And a three decibel rise is a factor of ten to the point three, about **two**.

Visual: the sound log axis returns with the sound level meter plate at the left (coded digits over its blank display). On "hear" the formula writes: "L = 10 log₁₀(I ÷ I₀), I₀ = 10⁻¹² W/m²"; a teal dB scale draws under the log axis (0 dB under 10⁻¹², 120 dB under 10⁰, ticks every 10). On "decibels" one "× 10" tag on the intensity axis lines up with a "+10 dB" tag on the dB scale. On "intensity" the 85 and 95 dB points light, joined by a bracket "+10 dB = × 10"; the meter display changes from "85" to "95"; the grey "12%?" chip from scene 1 is crossed. On "two" a small bracket "+3 dB" with "× 10^0.3 ≈ 2" (grey "≈ 1.995").

### 6. worked example: library and café
> Let's compare two places. A library is thirty decibels, and a café is seventy. How many times more intense is the café? Divide each level by ten and use it as a power: the library's intensity is ten to the three times I nought, and the café's is ten to the seven times I **nought**. Divide them, and I nought cancels: ten to the four, ten thousand times as **intense**. A quicker way: the difference is forty decibels, and forty over ten is **four**.

Visual: calculation layout: task strip "How many times more intense is the café than the library?"; equation strip "L = 10 log₁₀(I ÷ I₀)"; givens group (navy): "library 30 dB", "café 70 dB", "I₀ = 10⁻¹² W/m²" (site Problem 2). The dB scale stays small at the top with the two levels marked. On "nought" (first) rows "I_library = 10³ I₀ = 10⁻⁹ W/m²", "I_café = 10⁷ I₀ = 10⁻⁵ W/m²". On "intense" row "I_café ÷ I_library = 10⁷ ÷ 10³ = 10⁴ = 10 000" (bright, boxed); four "× 10" tags hop from 30 to 70 on the scale. On "four" a side row "(70 − 30) ÷ 10 = 4, so 10⁴".

### 7. earthquakes: one step is ten times the shaking
> Earthquakes work the same way, with no ten in front. The magnitude M is log base ten of A over A nought, where A is the size of the wiggle on a seismograph, so each step of one means ten times the **amplitude**. Earthquake A is magnitude five. Earthquake B shakes the ground fifty times as **far**. Its magnitude is five plus log of fifty, about six point **seven**. Fifty times the motion shows up as only one point seven more on the **scale**.

Visual: clear change: a coded seismograph strip (a ruled paper band with a trace) at the top; formula "M = log₁₀(A ÷ A₀)" (grey label "the Richter scale is one such scale"). On "amplitude" the trace's wiggle grows ×10 as a magnitude axis marker steps from 5 to 6 (tag "+1 = × 10"). Givens (navy): "M_A = 5.0", "A_B = 50 A_A" (site Problem 3). On "far" the trace grows ×50 (vertical scale bar shown so the growth is honest, then the trace is clipped with a "× 50" label because it leaves the strip). Rows: "M_B = log₁₀(50 × 10⁵)", on "seven" "= 5 + log₁₀ 50 ≈ 5 + 1.699 ≈ 6.70" (bright, boxed). On "scale" a bracket on the magnitude axis from 5.0 to 6.7: "× 50 is + 1.7".

### 8. pH: a minus sign reverses the direction
> pH is a log scale with a minus sign. pH is minus log base ten of the hydrogen ion concentration, so more hydrogen ions mean a lower **pH**. Each step of one is a factor of ten. A solution at pH four has ten to the minus four moles per litre, and pH seven has ten to the minus **seven**. So pH four has a thousand times the hydrogen ion concentration, even though the numbers differ by only **three**.

Visual: clear change: the existing pH meter plate (`public/assets/chemistry/m6-ph-meter-probe-beaker-v1.png`) at the left, its blank screen overlaid with coded digits. Formula "pH = −log₁₀[H⁺]" (grey "[H⁺]: mol/L of hydrogen ions"). A vertical pH axis 0 to 14 with a parallel [H⁺] axis 10⁰ to 10⁻¹⁴ (log). On "pH" (first) an arrow up the [H⁺] axis points down the pH axis (tag "more H⁺, lower pH"). On "seven" the meter reads "7.00" then "4.00"; markers at pH 7 (10⁻⁷) and pH 4 (10⁻⁴). On "three" three "× 10" tags hop from 10⁻⁷ to 10⁻⁴; row "10⁻⁴ ÷ 10⁻⁷ = 10³ = 1000" (bright, boxed).

### 9. star magnitudes: smaller is brighter
> Star magnitudes have a minus sign and a two point five. The difference in magnitudes is minus two point five times log of the brightness ratio. So brighter stars get smaller **magnitudes**, and five magnitudes is a factor of ten to the two, a **hundred**. A magnitude one star is a hundred times as bright as a magnitude six **star**.

Visual: clear change: a dark coded panel with two star dots (sized by brightness), labelled "m = 1" and "m = 6". Formula "m₁ − m₂ = −2.5 log₁₀(F₁ ÷ F₂)" (grey "F: brightness"). On "magnitudes" a magnitude axis with smaller numbers at the bright end (arrow "brighter"). On "hundred" rows "1 − 6 = −5 = −2.5 log₁₀(F₁ ÷ F₂)", "log₁₀(F₁ ÷ F₂) = 2, F₁ ÷ F₂ = 10² = 100". On "star" the m = 1 dot pulses (tag "100 × as bright").

### 10. memory aid: one rule for all four scales
> Here's one rule for all four scales. Each one is a number times log base ten of a **ratio**. To turn a step on the scale back into a factor, divide the step by that number, and raise ten to the **power**. Decibels: divide by ten. Earthquakes: divide by one. pH: divide by minus one, so the direction flips. Stars: divide by minus two point **five**.

Visual: the rule writes large: "ratio = 10^(step ÷ number in front)". On "ratio" a four-row table: "dB: 10 log₁₀", "earthquake: 1 log₁₀", "pH: −1 log₁₀", "stars: −2.5 log₁₀" (the number in front amber). On "power" the formula glows. On each spoken scale a worked chip writes in its row: "+10 dB → 10^(10÷10) = × 10", "+1 → 10^(1÷1) = × 10", "−3 pH → 10^(−3÷−1) = × 1000 in [H⁺]", on "five" "−5 mag → 10^(−5÷−2.5) = × 100 brighter". Hold about 2 seconds.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. A lawnmower measures ninety decibels, and a conversation measures sixty. Using L equals ten log base ten of I over I nought, how many times more intense is the lawnmower's sound? Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A lawnmower measures 90 dB and a conversation measures 60 dB. Using L = 10 log₁₀(I ÷ I₀), how many times more intense is the lawnmower's sound than the conversation?" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no scale or tags).

### 12. feedback 1 (brief)
> The difference is thirty **decibels**. Divide by ten: **three**. So the ratio is ten to the three, a thousand times as **intense**. One and a half times compares the decibel numbers, as if the scale were **ordinary**.

Visual: card shrinks to the top. On "decibels" "90 dB" and "60 dB" underlined; row "90 − 60 = 30 dB". On "three" "10 log₁₀" underlined; row "30 ÷ 10 = 3". On "intense" row "ratio = 10³ = 1000" (bright, boxed); three "× 10" tags hop on a small dB scale. On "ordinary" a chip "90 ÷ 60 = 1.5 times" fades in and is crossed. Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. Set A lists the populations of ten towns and cities, from twelve hundred to five point three million people. Set B lists daily top temperatures over a month, from twenty one to thirty one degrees. Which set suits a logarithmic scale? Justify using the ranges. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Set A: the populations of 10 towns and cities, from 1 200 to 5 300 000. Set B: the daily maximum temperatures over one month, from 21 °C to 31 °C. Which set should be graphed on a logarithmic scale? Justify your answer by referring to the range of each set." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 2 (brief)
> Set A. Five point three million divided by twelve hundred is about four **thousand**, more than three powers of **ten**. Set B's largest is only about one and a half times its smallest, and temperatures are compared by **differences**. It's the ratio that matters, not the size of the numbers: a million to one and a half million spans less than a factor of **two**.

Visual: card shrinks to the top. On "thousand" "1 200" and "5 300 000" underlined; row "5 300 000 ÷ 1 200 ≈ 4 400" (grey "≈ 4417"). On "ten" row "≈ 10^3.6: more than 3 orders of magnitude, so Set A" (bright, boxed); a tiny strip of Set A spreading on a log axis. On "differences" "21" and "31" underlined; row "31 ÷ 21 ≈ 1.5; compared by differences: linear". On "two" a chip "big numbers need a log scale" fades in and is crossed (caption "1 000 000 to 1 500 000: ratio 1.5"). Hold about 1 second.

### 15. handoff
> So a log scale turns equal factors into equal steps, and it suits data that spans many powers of ten. That's the end of the trig graphs and modelling videos. Next, a new question. Here's cos x, from zero to pi over two, with thin rectangles standing against it. What happens when we add them up, and make them thinner and **thinner**?

Visual: the rule from scene 10 shows small at the top, then fades on "Next". Board clears to i05's scene 14 graph exactly (i05 author note g): y = cos x in blue on 0 ≤ x ≤ π/2 with filled endpoint markers, ticks 0, π/4, π/2. On "rectangles" four thin rectangles (width π/8, left-endpoint heights: each top left corner on the curve; since cos x falls here each reaches above it; no "under the curve" label) rise from the axis one after another in light teal; on "thinner" they split into eight (width π/16). Chips "Next: add up thin rectangles" and "?". No sum, value or area label. Hold about 2 seconds.

### 16. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Use a log scale when the values span several orders of magnitude (factors of 10) and comparing by factors makes sense. Keep a linear scale when the ratio is small and differences matter.
2. On a log₁₀ scale, equal steps are equal factors: log₁₀(10x) = 1 + log₁₀ x.
3. dB: L = 10 log₁₀(I ÷ I₀), I₀ = 10⁻¹² W/m²; +10 dB = × 10 intensity. Earthquake: M = log₁₀(A ÷ A₀); +1 = × 10 amplitude. pH = −log₁₀[H⁺]; 1 lower = × 10 [H⁺]. Stars: m₁ − m₂ = −2.5 log₁₀(F₁ ÷ F₂); 5 lower = × 100 brightness.
4. To compare two readings: ratio = 10^(step ÷ number in front).

Memory aid (large, on the notes screen): *ratio = 10^(step ÷ number in front)*. Second line: *A minus sign flips the direction.*

Visual (end of the hold, silent, no added speech): the key-notes hold ends by cross-fading (1 s, shared component; series rule) back to scene 15's frame exactly (y = cos x on 0 ≤ x ≤ π/2 with the eight left-endpoint rectangles, chips "Next: add up thin rectangles" and "?"), which is also i05's final frame. This is the final frame and i06's opening frame.

## Teaching checks

- **Does it explain causes?** Why the linear axis fails: the largest value sets the scale (2). Why the log axis works: log(10x) = 1 + log x, so each ×10 is one equal step (3). Why heights don't suit it: a small ratio squeezes them, and they are compared by differences (4). Why 10 dB is ×10: the 10 in front (5). Why ×50 is only +1.7: log₁₀ 50 ≈ 1.7 (7). Why lower pH is more acidic: the minus sign (8). Why smaller magnitudes are brighter: the −2.5 (9).
- **Misconceptions addressed:** the eight listed under Decisions (scenes 1 to 9; feedback 1 and 2, crossed; key notes 1 to 4).
- **One idea at a time:** one scale per scene (5 to 9); the axis morph changes one thing (positions); scene 6 writes one row per spoken step.
- **Video makes it easier:** the points pile onto zero as the axis rescales (2), then spread as it morphs to log (3); the height strip squeezes on a log axis while the star strip spreads (4); "× 10" tags hop step by step along the axis and the dB scale (3, 5, 6, 8); the seismograph trace grows ×50 against a scale bar (7); the meter reading changes (5, 8).
- **Response opportunity:** two HSC-style tasks with every given on the card (the formula in A1; both ranges in A2), 10 seconds each, nothing answer-bearing; one crossed mistake each; feedback about 16 s and 27 s.
- **Avoided double teaching:** logs as powers of ten and log(ab) = log a + log b are recalled in a clause; pH chemistry is not taught beyond "hydrogen ion concentration".
- **Syllabus coverage:** `cib6542e48` (recognise and explain suitability: scenes 1 to 4, attempt 2); `ci1275a9f6` (decibels 5, 6, A1; earthquakes 7; pH 8; star magnitudes 9; one rule 10). Stars and earthquakes have no attempt (open decision 2).
- **Out of scope by design:** earthquake energy, perceived loudness, log-log graphs, linearising data, accumulation (handoff only).

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

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy (2 Nov); Codex to re-check.

- 10^(L/10 − 12) for L = 30, 60, 70, 85, 90, 95: 10⁻⁹, 10⁻⁶, 10⁻⁵, 3.162 × 10⁻⁴, 10⁻³, 3.162 × 10⁻³.
- Ratios: 95/85 dB → 10; 90/60 → 1000; 70/30 → 10 000; 10^0.3 = 1.99526; 10/85 = 0.1176.
- 5 + log₁₀ 50 = 6.69897; log₁₀ 50 = 1.69897.
- 10^(5/2.5) = 100; 10⁻⁴ ÷ 10⁻⁷ = 1000.
- 187/152 = 1.2303; log₁₀ 152 = 2.1818; log₁₀ 187 = 2.2718. 1.4 × 10⁻⁸ ÷ 3 × 10⁻¹³ = 46 667; log₁₀ = 4.669.
- 5 300 000 ÷ 1 200 = 4 416.7; log₁₀ = 3.645; 31/21 = 1.476; log₁₀ 1.5 = 0.176.

## Memory aid check

- **"ratio = 10^(step ÷ number in front)."** Meaning: each scale is S = k log₁₀(Q ÷ Q₀); a change ΔS between two readings gives Q₂ ÷ Q₁ = 10^(ΔS ÷ k) (author note g). Assumptions checked: the scale is exactly k log₁₀ of a ratio (true for the four syllabus scales as defined on the site and here); "step" is the later reading minus the earlier; the quantity Q is the one inside the log (intensity for dB, trace amplitude for earthquakes, [H⁺] for pH, brightness for stars); a negative k reverses the direction ("A minus sign flips the direction" is printed with it). It helps a new case: attempt 1 (30 ÷ 10 = 3), and any pH or magnitude comparison. It also exposes the site's "1 dB = × 10" slip (k = 10, so 1 dB is × 10^0.1). Introduced after all four scales.
- **Considered, not used:** "each step is × 10" (false for dB and stars); "3 dB doubles" (kept as a one-sentence consequence in scene 5, not as the aid).

## Narration length estimate

Revision 1 count (2 Nov; by script `count_tgraphs.py`, build parser rules): **5,642 characters** (5,657 with the joining spaces), 16 scenes. Characters per scene (1 to 16): 454, 366, 439, 590, 421, 438, 429, 388, 322, 337, 211, 201, 291, 350, 330, 75. At 13.3 characters per second the speech is about 424 s; add about 16 s of settling time (the rescale in 2, the morph in 3, the strip morphs in 4, the trace growth in 7), 20 s for two countdowns, about 5 s of short holds (scenes 10, 12, 14, 15) and about 60 s more of the quiet notes hold (about 101 s of holds): **about 525 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Feedback: scene 12 about 16 s and scene 14 about 27 s (including the 1 s holds). Scene 4 is the longest; each strip morph must finish before its next sentence. Reserve trims if the voiced take runs long: scene 5's last sentence (keep the "+3 dB" bracket silent); scene 7's last sentence (keep the bracket); scene 2's last sentence (keep the pile-up). Trimming more than about 140 characters would drop below the 5,500 floor.

## Scene list and build ids

Lesson key `m-a12t04` (route math-a12-t04, draft). Suggested explainer folder `src/explainer/lessons/math-a12-t04` and build folder `docs/production/claude-pm/lessons/m-a12t04`.

In order (kebab-case; 16 scene headings): hook, orders-of-magnitude, log-axis, when-suitable, decibels, worked-db, earthquake, ph-scale, star-magnitude, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`: four notes). Transitions: t03's last frame continues into scene 1 (camera continue, same axis); 1 to 2 to 3 camera continue (the axis rescales, then morphs); 3 to 4 clear change (two strips); 4 to 5 clear change (the sound axis returns with the dB scale); 5 to 6 camera continue (calculation layout below the scale); 6 to 7, 7 to 8, 8 to 9 clear change (one scale each); 9 to 10 camera pull back to the table; attempts and feedback card shrink to the top; 14 to 15 board clear; 15 to 16 fade to the notes board; 16 cross-fades back to 15's frame.

Holds: attempt-1, attempt-2 (10 s countdown). key-notes quiet hold about 60 s. Review evidence paths: `learning_review` = `checks/m-a12t04-learning-review.md`, `science_check` = `checks/m-a12t04-maths-check.md`.

## Assets

Have: the pH meter plate `public/assets/chemistry/m6-ph-meter-probe-beaker-v1.png` (inspected 2 Nov: a benchtop meter with a blank green-grey screen and a probe in a clear beaker; transparent background; the coded "7.00" and "4.00" digits sit on its screen; do not stretch). Coded: `FunctionGraph` (scene 15 cos x and the decorative seismograph trace), `ReadoutPanel.rows`, `AlignedAlgebra`, shared `Countdown`, `QuestionCard`, `Chip` with `cross`, `Callout`, `PenArrow`, `KeyNotes`, `Heading`; i05's handoff rectangles as plain SVG (reuse i05's build code for the frame so the two are pixel-identical). Checked (2 Nov, `public/assets/`): no sound level meter, seismograph or star plates exist.

New part (for the t04 build brief):
1. **`LogAxisMorph`.** Props: `points` ({value, label, colour?}[] with positive values), `linearRange` ([min, max]), `logRange` ([10^p, 10^q]), `progress` (0 = linear, 1 = log; animatable), `orientation` ('horizontal' | 'vertical'), `stepTags` ({at, label}[] with cues, e.g. "× 10" between powers), `secondaryScale` (optional aligned scale, e.g. dB with value → position map L = 10 log₁₀(I/10⁻¹²)), `strips` (optional several labelled data sets for scene 4, each with its own range). Each point moves from its linear position to its log₁₀ position (interpolate the screen position, not the value); tick labels cross-fade at progress 0.5 (linear labels out, power labels in); the log end shows its least power, never "0" (author note f). Validation: every value is positive and finite; at progress 1 each point's position equals the log map of its value within 0.5 px; the secondary scale's ticks align with the primary map within 0.5 px.

## Codex asset brief

One small painted plate (a context object, not a graph):
- **Sound level meter** (`public/assets/maths/m-a12-sound-level-meter-v1.png`): a handheld sound level meter (a slim grey body with a rounded foam-covered microphone at the top and a rectangular display), front view, the display blank (light green-grey, no digits, no logo, no brand name, no text), in the explainer paper-and-watercolour style of `public/assets/chemistry/m6-ph-meter-probe-beaker-v1.png`. No hand or person holding it. Transparent PNG with an alpha channel (not white). Portrait, about 700 × 1200 px; record the display rectangle's pixel corners in the delivery note so the build can place coded digits on it. Do not stretch.

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

## YouTube metadata (draft)

Title: Logarithmic Scales: Decibels, Earthquakes, pH and Star Magnitudes | Year 12 Maths Advanced

(Title length: 91 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/further-graph-transformations-and-modelling/lesson02.sa.html

A factory at 95 dB says it's only 10 more than the 85 dB limit. On an ordinary axis, sound intensities from the faintest sound we can hear to a painful one crush almost everything onto zero. Place each value at its power of ten instead and every step becomes a factor of 10: a logarithmic scale. Learn when a log scale suits data (a range of several powers of ten, compared by factors) and when it doesn't (heights in a class). Then use decibels (10 dB more is ten times the intensity), earthquake magnitude (fifty times the shaking is only 1.7 more), pH (pH 4 has a thousand times the hydrogen ion concentration of pH 7) and star magnitudes (five magnitudes is a factor of 100). One rule for all four: ratio = 10^(step ÷ number in front). Two exam-style questions at the end.

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

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from Year 11 logarithms and t03; check that the pile-up and morph in scenes 2 and 3 make "equal steps are equal factors" visible before the formula; that scene 4's two conditions are both understood; that scenes 5 to 9 do not feel like a formula list (each has its own visual and one example); that the memory aid is introduced as a summary of four seen cases; and that the attempt cards are fair at 10 s), then the Codex maths check and error check.
- The rescale, the morph, the hopping "× 10" tags and the strip morphs carry the explanation; judge them at playback speed.
- i06 opens on scene 15's frame, which is i05's final frame.
