# Maths A12 T03: How do periodic functions and transformations model a real situation? Midline, amplitude, period and starting point from measurements; the tide and the Ferris wheel, solved graphically and algebraically (design)

Status: Revision 1 (2 Nov): needs a student learning review and maths check (Codex), then a Codex error check. No route entry or pre-design pack existed; the pack work is done in this file and the draft route entry is under Decisions for root. Voicing gated by the brief 124 Google voice pilot. Build uses the brief 129 kit with its additions and t01's and t02's requested parts (`transform.yShift`, `TransformPanel`, `FeatureMarks`, `LevelLine`, `WindowMap`); see "Assets" for one new part and two painted plates (the tide board shared with t02, and a Ferris wheel in two layers). Nothing recorded; human listening pending.

Narration 5,520 characters, 15 scenes, about 520 s, counted by script with the build parser rules (see "Narration length estimate").

Scope: third video of the Year 12 Mathematics Advanced trig graphs and modelling strand (course outline playlist order 22; production order after t02). Templates: `math-a12-d05.md` and `math-a12-i05.md` (Revision 2) and the t01 and t02 designs (Revision 1; t02's scene 15 is this video's first frame). Maths visuals coded; two small painted plates carry the contexts (programme decision 5 allows real-world context plates). No pre-design pack exists: this design does the pack work. Site lesson read in full (2 Nov, read-only): `C:/Users/kygs/hscscience/subjects/maths-advanced/year12/further-graph-transformations-and-modelling/lesson02.sa.html`, SHA256 `8ead7b9aeca247ad96b3abba7ba7691f8b7eadc7c2f4ebd65ccd0f76202e2c09` (recomputed 2 Nov; matches the crosswalk). Sections used: `build-periodic-models` card 05 (the parameter rules; its Ferris wheel quick check, option A, kept exactly), `compare-model-approaches` card 06 (graph first to count, then algebra), worked Problem 1 (the tide, kept exactly: 7.5 m, 1.5 m, 12 h, h(4) = 3, h = 5.25 at t ≈ 2.52 and 9.48), SA 1 (the buoy, attempt 2, kept exactly), MC Q5 (amplitude from max and min, the idea for attempt 1). Lesson 1's Ferris wheel hook and "Revisit" (`lesson01.sa.html`, SHA256 `e5b283c0d081397e3b156bdd31d6958d0280be5dfabd856746b8830ad4e19635`) were read for consistency; lesson 2's version (radius 10, centre 12, 60 s, start at the bottom) is used because it states the starting point.

Owner rules applied: as t01 and t02. No people: the site's "rider" and "passenger" become "a cabin" in narration and screen text; the Ferris wheel plate has empty cabins. Root decisions applied: exact values in the algebra wherever they exist (cos(2π/3) = −½, π/6, 2π/3, 4π/3); decimals only where the value is genuinely not exact (cos⁻¹(¼) ≈ 1.318 rad), shown in grey with "≈" and computed in radians; precise transformation scope (the "+ π/2" inside a sine of πt/6 slides it left by 3 hours, not by π/2; site correction 1); time domains kept on every card and answer line; attempt cards give no parameter or answer; spoken "next" true in production order.

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 12, focus area "Further graph transformations and modelling"; NESA content-system codenames, official `code` field empty), quoted from `docs/production/programme/syllabus/maths-advanced-2024-y12-crosswalk.json` in linear form:

- `ci50d9af52`: "Model and solve problems involving periodic phenomena using transformations of the trigonometric functions f(x) = sin x, f(x) = cos x or f(x) = tan x, without the use of calculus"
- `ci5f2b7245`: "Model and solve practical problems involving functions and their transformations, within the scope of the Mathematics Advanced course, using graphical and algebraic techniques"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa3b2bda67

**Boundary:** starts from t02's last frame (tide axes with (0, 7.5) and (6, 1.5), the tide board with the water band at 1.5 m, chip "h(t) = ?"). Teaches: periodic phenomenon (plain meaning); midline and amplitude from the maximum and minimum; period from the context and b = 2π/period; choosing the starting curve (cos at a maximum, −cos at a minimum, sin at the midline going up; the equivalent shifted sine with its shift in time units); using the model for a value; solving a model equation graphically (count) and algebraically, with a non-exact inverse cos in radians (tide) and an exact case (Ferris wheel); interpreting answers in context. Stops at sinusoidal models from max, min, period and start, without calculus. Not taught: rates of change of models (calculus; excluded by `ci50d9af52`), tan models (the syllabus says "or"; none in the site), regression from many data points, non-trig practical models (see open decision 2 on `ci5f2b7245`).

## Decisions

- **Learner question kept (course outline).** "How do periodic functions and transformations model a real situation?" The answer, built in order: a quantity that repeats regularly is periodic; its highest and lowest values fix the midline (vertical translation) and amplitude (vertical dilation); the time for one cycle fixes b (horizontal dilation); where the cycle starts picks cos, −cos or sin (reflection or horizontal translation); then the model answers questions (a value at a time; the times a level is reached), checked against the picture of the context.
- **Draft route entry (for root; no route entry exists).**
  - `id`: math-a12-t03; `playlistOrder`: 22 (outline); production order after t02.
  - `syllabusActionIds`: `ci50d9af52` (owned, `coverage: owned-action`), `ci5f2b7245` (owned in the outline; this video covers trig models only: `coverage: partial`, see open decision 2).
  - `entryKnowledge`: t01 (amplitude, midline, period 2π/b, reflection, horizontal translation); t02 (solving in a domain, counting cycles, symmetry); Year 11 `ciccaa78be` (exact values); Year 11 inverse trig on a calculator in radians (codename to be added by root).
  - `start`: "Open on t02's tide frame: two measurements (high 7.5 m at t = 0, low 1.5 m at t = 6) and h(t) = ?"
  - `stop`: "Build sinusoidal models from max, min, period and starting point; evaluate them and solve model equations graphically and algebraically, interpreting in context, without calculus. Keep log scales for t04."
  - `next`: "math-a12-t04: when a large range needs a logarithmic scale (decibels first)."
  - `sources`: further-graph-transformations-and-modelling/lesson02.sa.html (cards 05 and 06, Problem 1, SA 1, MC Q5), SHA256 above.
- **The hook (t02's handoff, the site's tide).** Two measurements and the claim that the pattern repeats; the tide board's coded water band rises and falls in a loop while a dot traces the height against time on the axes, so "periodic" is seen before it is named.
- **Midline and amplitude first (site card 02 "Amplitude and midline first").** Scene 2 draws the midline halfway between the two measured levels on both the graph and the tide board, then the amplitude bars. The cause is said: the water swings as far above its middle level as below it.
- **Period and b (t01 link, read backwards).** High to low is half a cycle, so the period is 12 h; the inside bt must grow by 2π in one period, so b = 2π/12 = π/6. A `TransformPanel` (t01) shows the slots filling one at a time.
- **Starting curve (site card 05 "If the maximum occurs at t = 0, use cosine").** cos starts at its peak, matching high tide at t = 0, so no translation is needed. The equivalent sine, 3sin(πt/6 + π/2) + 4.5, is mentioned with its shift in time: + π/2 inside sin(πt/6 + π/2) = sin(π/6 (t + 3)) slides left 3 hours (site correction 1).
- **Using the model (Problem 1(b), kept).** h(4) = 3cos(2π/3) + 4.5 = 3 m, exact; the board and graph agree; the water is below the midline and still falling.
- **Solving (Problem 1(c), kept; card 06 "count first").** One cycle in 0 ≤ t ≤ 12 and the level 5.25 lies between 1.5 and 7.5, so two times are expected; cos(πt/6) = ¼ is not an exact value, so inverse cos in radians gives 1.318 and t ≈ 2.52 h; symmetry gives 2π − 1.318 and t ≈ 9.48 h. The interpretation: the level is at least 5.25 m for 0 ≤ t ≤ 2.52 and 9.48 ≤ t ≤ 12 (read from the graph). The board shows the water at 5.25 m at both times.
- **Ferris wheel (site card 05 quick check, option A, kept; start at the bottom).** h = 12 − 10cos(πt/30): midline 12, amplitude 10, period 60 s, starts at a minimum so the cos curve is reflected (a = −10). The painted wheel rotates (frame layer fixed) while a coded dot on one empty cabin projects its height onto the graph, showing why circular motion gives a sinusoidal height. Check at t = 30: 22 m, the top.
- **An exact solve in context (original question on the site's wheel).** When is the cabin 17 m up in the first turn? cos(πt/30) = −½, πt/30 = 2π/3 or 4π/3, t = 20 s or 40 s: once going up, once coming down, shown on the wheel.
- **Attempts.** (A1, original, daylight; the site's MC Q5 idea): longest day 14.5 h, shortest 9.5 h six months later, t months after the longest day, D = a cos(bt) + d: a = 2.5, b = π/6, d = 12; D(2) = 13.25 h. Crossed: "a = 5" (the whole gap). The town is unnamed and the values are illustrative (no claim about a real place). (A2, site SA 1(c), kept exactly): h(t) = 1.5sin(πt/8) + 3; first two times t > 0 with h = 3.75: t = 4/3 s and 20/3 s. Crossed: "t = π/6" (the inside angle, not the time).
- **Mistake scene:** none separate. "Amplitude = max − min" (scene 2; feedback 1, crossed); "b = period" (scene 3; key note 2); "the + π/2 slides by π/2" (scene 4, said correctly in time units); "calculator in degrees" (scene 6, "in radians"); "only one time" (scene 6, count first); "the inside angle is the answer" (feedback 2, crossed).
- **Memory aid:** "Middle, half, period, start." (see "Memory aid check").
- **Handoff teaser.** Scene 15: the tide graph shrinks to show its axis needs only 0 to 8 m; then a linear axis "sound intensity (W/m²)" from 0 to 0.004 with three points: "quiet library 30 dB" at 10⁻⁹ (on top of 0), "85 dB limit" at 0.000316, "95 dB factory" at 0.00316, and a chip "95 dB: only 10 more than 85?" (t04's hook, site lesson 2 hook).
- **Site sources used:** card 05 (parameter rules; quick-check option A), card 06 (sketch first, count, then algebra), Problem 1 (tide, all three parts, kept), SA 1 (buoy, attempt 2), MC Q5 (amplitude idea), lesson 1 Ferris hook (read; not used because it omits the starting point; site correction 3).
- **Misconceptions listed (pack work):** (1) amplitude = max − min; (2) b = period (or b = 2π × period); (3) phase shift read as c instead of −c/b, or in the wrong units; (4) using sin by default even when the data start at a max or min; (5) calculator in degrees; (6) one solution only; (7) reporting the inside angle as the time; (8) models are exact forever (not said; author note e).
- **Site corrections (quoted from site lessons 1 and 2, read 2 Nov; for `../site-corrections-maths-a12.md`):**
  1. Lesson 2 card 02: "Periodic model: f(t) = a sin(bt + c) + d, amplitude a, angular frequency b = 2π/T, phase shift c, vertical shift d." and key terms "Phase shift (c) Horizontal translation of the trig function." The amplitude is |a| and the horizontal translation is −c/b (lesson 1 card 06 says so), in the units of t. Suggest: "amplitude |a|, b = 2π/T, horizontal translation −c/b, vertical shift d."
  2. Lesson 2 key terms: "Amplitude (a) Half the distance between the maximum and minimum values: a = (max − min)/2. Always positive in context." In a model such as h = 12 − 10cos(πt/30) (the site's own quick check, option A) the coefficient a is negative. Suggest: "Amplitude |a| = (max − min)/2. The coefficient a can be negative when the graph is reflected."
  3. Lesson 1 hook: "A Ferris wheel with radius 15 m has its centre 20 m above the ground. It completes one full rotation every 40 seconds. Which function models the height of a passenger above the ground?" The model depends on where the passenger starts, which the hook does not state; "Revisit" assumes the bottom. Also "Revisit": "the −π/2 shifts the curve right so it starts at a trough": the shift is 10 seconds to the right (15sin(π/20 (t − 10)) + 20), not π/2. Suggest adding "starting at the lowest point at t = 0" to the hook and "shifts the curve 10 s to the right" in Revisit.
  - Checked and correct: card 05 tide (h = 3cos(πt/6) + 5, and its sine form); card 05 quick check (A, with the reasons for B to D); card 06 population example (t = 6 only); Problem 1 (4.5, 3, π/6, h(4) = 3, t ≈ 2.52 and 9.48); SA 1 (period 16 s, amplitude 1.5 m, max 4.5, min 1.5, t = 4/3, 20/3); MC Q5 (7 °C); lesson 1 Revisit formula (15sin(πt/20 − π/2) + 20 gives 5 m at t = 0).
- **Cause chain taught, in order:** (1) the quantity repeats: periodic (1); (2) equal swings above and below fix the midline; half the gap is the amplitude (2); (3) half a cycle in 6 h gives period 12 h; the inside grows by 2π per period, so b = π/6 (3); (4) high at t = 0 matches cos's peak; the check at t = 6 (4); (5) evaluate at t = 4 (5); (6) count, then inverse cos in radians and symmetry; interpret (6); (7) a turning wheel makes a wave; a bottom start means −cos (7); (8) an exact solve, twice per turn (8); (9) remember: middle, half, period, start (9).
- **Learner-visible vocabulary (plain meaning at first use):** periodic (repeating the same pattern at regular intervals, scene 1); model (an equation that describes a real situation, scene 1); midline, amplitude, period (recalled from t01 with their meaning in context, scenes 2, 3); inverse cos (the calculator key that gives an angle with a given cos, scene 6); radians (recalled: set the calculator to radians, scene 6).
- **Legacy logic ported:** none.
- **New explainer motion:** **water band driven by the model** (coded band over the painted tide board, its height = h(t) at the shared time cursor; scenes 1 to 6); **time cursor linking board and graph** (a dot on the graph and the band move together); **midline and amplitude on both board and graph** (`FeatureMarks`); **slots filling** (`TransformPanel`, scenes 3 to 4); **level line** with two times (`LevelLine`, scenes 6, 8); **rotating wheel with projected cabin height** (new part `RotationProjector` over the two-layer plate, scene 7 and 8); aligned algebra, `Chip` with `cross`, `Countdown`, `QuestionCard`, `KeyNotes`.
- **Board layout (constant):** heading top-left; context plate on the left third (tide board about 200 × 540 px; wheel about 520 × 560 px), graph in the middle (about 800 × 480 px), algebra in the right column. Tide window t from 0 to 12 h (ticks every 2) by h from 0 to 8 m; Ferris window t from 0 to 60 s (ticks every 10) by h from 0 to 24 m. The water band and the cabin dot are placed by the same h(t) function as the graph.
- **No human figures.** Plates: tide board (new, shared with t02) and Ferris wheel (new, two layers). No people, no riders, no boats drawn (the boat in scene 6 is spoken only; a small coded hull outline is optional at root's choice, open decision 3).
- **Author notes (not learner copy):**
  (a) Tide: d = (7.5 + 1.5)/2 = 4.5; a = (7.5 − 1.5)/2 = 3; T = 12; b = 2π/12 = π/6; h(t) = 3cos(πt/6) + 4.5. h(0) = 7.5, h(6) = 1.5, h(12) = 7.5, h(4) = 3cos(2π/3) + 4.5 = 3. Sine form: 3sin(πt/6 + π/2) + 4.5 = 3sin(π/6 (t + 3)) + 4.5, identical (left 3 h).
  (b) h = 5.25 on [0, 12]: cos(πt/6) = ¼; cos⁻¹(¼) = 1.318116 rad; t = 6(1.318116)/π = 2.517416 ≈ 2.52 h; 2π − 1.318116 = 4.965069; t = 9.482584 ≈ 9.48 h. h ≥ 5.25 for 0 ≤ t ≤ 2.52 and 9.48 ≤ t ≤ 12 (approximately). (2.52 h ≈ 2 h 31 min; 9.48 h ≈ 9 h 29 min; not shown.)
  (c) Ferris: h(t) = 12 − 10cos(πt/30): h(0) = 2, h(15) = 12, h(30) = 22, h(45) = 12, h(60) = 2. h = 17: cos(πt/30) = −½; πt/30 = 2π/3, 4π/3 in [0, 2π]; t = 20, 40 s.
  (d) Rotation: a point on a circle of radius 10 centred at height 12, starting at the bottom and turning at 2π/60 rad/s, has height 12 − 10cos(πt/30). The build places the cabin dot at angle πt/30 from the bottom and projects its height horizontally onto the graph at the same t.
  (e) Real tides are not exactly 12-hour sinusoids (the semidiurnal period is about 12.4 h and heights vary); the model uses the site's idealised data. Not said in learner copy (its omission does not teach a wrong method); in the description as "an idealised harbour".
  (f) A1: d = (14.5 + 9.5)/2 = 12; a = (14.5 − 9.5)/2 = 2.5; period 12 months, b = π/6; D(t) = 2.5cos(πt/6) + 12; D(2) = 2.5(½) + 12 = 13.25 h; D(6) = 9.5. Crossed: a = 5.
  (g) A2: 1.5sin(πt/8) + 3 = 3.75 ⇔ sin(πt/8) = ½ ⇔ πt/8 = π/6 or 5π/6 (first two positive) ⇔ t = 4/3 or 20/3 s. Crossed: π/6.
  (h) Pronunciations: "seven point five", "pi t on six" (pi times t, over six), "inverse cos", "one point three one eight", "four thirds", "twenty thirds".

Main question: *High tide is 7.5 m at time zero and low tide is 1.5 m six hours later. How can a transformed cos curve predict the water level at any time, and when it reaches a given height?*
Entry knowledge (t01, t02; Year 11 `ciccaa78be`, Year 11 inverse trig in radians): transformations and periods; solving in a domain by counting and symmetry; exact values; using a calculator in radians.
Stops after: building sinusoidal models from max, min, period and start; evaluating; solving graphically and algebraically, exact and non-exact; interpreting in context; two contexts (tide, Ferris wheel). No calculus, tan models or regression.
Handoff: quantities spanning many powers of ten and logarithmic scales, starting from 85 dB and 95 dB (math-a12-t04).

## Script and shots

Cue words in **bold** trigger the visual change. Colour key (as t01 and t02): the model curve blue; data points navy; midline teal dashed; amplitude bars navy; period bracket amber; the water band translucent blue; level lines amber dashed; time readouts navy; givens navy; grey "≈" decimals beside exact or calculator values; the current answer bright; earlier lines dim.

### 1. hook (two measurements and a repeating pattern)
> Here are two measurements from a harbour: high tide, seven and a half metres, at time zero, and low tide, one and a half metres, six hours later. The water keeps rising and falling in the same pattern, about twice a day. A quantity that repeats like that is called periodic, and a transformed cos curve can describe **it**. Let's build that curve from just these two facts, one feature at a time.

Visual: opens on t02's last frame (tide axes t 0 to 12 h, h 0 to 8 m; dots (0, 7.5) and (6, 1.5); the tide board with the water band at 1.5 m; chip "h(t) = ?"). Heading writes on: "Modelling with trig functions". On "same pattern" the water band rises from 1.5 m back to 7.5 m and falls again (about 3 s, eased, a full loop), while a faint grey dot on the axes traces height against time from t = 6 to t = 12 and back across the window as a dotted trail (no formula yet). On "it" the chip changes to "periodic: h(t) = a cos(bt) + d?" and the `TransformPanel` appears top right with empty slots "a", "b", "d".

### 2. midline and amplitude from high and low
> Start with the middle. The water swings as far above its middle level as below it, so the midline is halfway between high and low: seven point five plus one point five, over two, is four point **five**. The amplitude is the distance from the midline up to high tide: seven point five minus one point five, over two, is **three**. So the curve runs from four point five minus three, up to four point five plus three.

Visual: givens group (navy): "high 7.5 m at t = 0", "low 1.5 m at t = 6". On "five" a teal dashed midline h = 4.5 draws across the graph and across the tide board at 4.5 m (both labelled "midline 4.5"); row "d = (7.5 + 1.5) ÷ 2 = 4.5"; the "d" slot fills. On "three" navy amplitude bars from the midline up to 7.5 (graph and board) and down to 1.5, each labelled "3"; row "a = (7.5 − 1.5) ÷ 2 = 3"; the "a" slot fills. On the last sentence the bars glow: "4.5 − 3 = 1.5", "4.5 + 3 = 7.5".

### 3. the period, and b
> Now the period. High tide to low tide is only half a cycle, so a full cycle, high back to high, takes twelve **hours**. For one cycle, the inside, b times t, has to grow by two pi. So b is two pi divided by twelve, which is pi on **six**. That's the period rule, read backwards: b equals two pi over the period.

Visual: on "hours" an amber bracket spans t = 0 to 6 labelled "half a cycle", then doubles to t = 0 to 12 labelled "period 12 h"; a hollow navy dot appears at (12, 7.5) labelled "high again". On "six" a twin readout under the t-axis "t" and "inside bt" ticks from 0 to 12 and 0 to 2π together; row "b = 2π ÷ 12 = π/6"; the "b" slot fills. A grey chip: "period = 2π ÷ b, so b = 2π ÷ period".

### 4. choose the curve: cos starts at its peak
> Which curve should we use? At time zero the water is at its highest, and the cos curve starts at its **peak**. So no slide is needed: h equals three cos of pi t on six, plus four point **five**. Check the other measurement. At t equals six, the inside is pi, cos pi is minus one, and h is minus three plus four point five: one point five, low **tide**. A sine model works too, with plus pi on two inside, which slides it left by three hours, but cos is simpler here.

Visual: on "peak" a small grey thumbnail of y = cos x with its peak at 0 ringed sits beside the panel. On "five" the model curve h = 3cos(πt/6) + 4.5 draws through (0, 7.5) to (12, 7.5) (blue, about 1.5 s); the panel reads "h(t) = 3cos(πt/6) + 4.5" (boxed). On "tide" the dot (6, 1.5) rings with the readout "t = 6: inside π, cos π = −1, h = −3 + 4.5 = 1.5" and a tick. On the last sentence a grey dashed sine curve 3sin(πt/6) + 4.5 slides left by 3 h onto the model (tag "sin(πt/6 + π/2) = sin(π/6 (t + 3)): left 3 h"), then fades.

### 5. use the model: the level after four hours
> Now use the model. What's the water level four hours after high tide? The inside is four pi on six, which is two pi on **three**. Cos of two pi on three is exactly minus a half, so h is minus one point five plus four point five: three **metres**. On the graph, the water is below the midline and still **falling**, as it should be, two hours before low tide.

Visual: task strip "Find h(4)". The time cursor moves to t = 4: the board's water band falls to 3 m in step. On "three" (first) row "h(4) = 3cos(4π/6) + 4.5 = 3cos(2π/3) + 4.5"; on "metres" row "= 3(−½) + 4.5 = 3 m" (bright, boxed); the dot (4, 3) rings and the band sits at 3 on the board. On "falling" a short down-arrow along the curve at t = 4 (tag "falling"); bracket "2 h to low tide" from t = 4 to 6.

### 6. solve: when is the level 5.25 m?
> Harder question: when is the water level five point two five metres, in the first twelve hours? There's one cycle, and the level is between low and high, so expect two **times**. Three cos of pi t on six, plus four point five, equals five point two five, so cos of pi t on six is a **quarter**. A quarter isn't an exact value, so use inverse cos on a calculator, in radians: pi t on six is about one point three one **eight**, and t is about two point five two hours. By symmetry, the other angle is two pi minus that, so t is about nine point four **eight**. So a boat that needs the level above five and a quarter metres can come in for about the first two and a half hours, and again after about nine and a half **hours**.

Visual: task strip "When is h = 5.25 m, for 0 ≤ t ≤ 12?" (givens navy "h = 5.25", "0 ≤ t ≤ 12"). On "times" the `LevelLine` at h = 5.25 crosses the curve; counter "1 cycle, level inside: expect 2". On "quarter" rows "3cos(πt/6) + 4.5 = 5.25", "cos(πt/6) = 0.25". On "eight" (first) a grey calculator-style chip "cos⁻¹(0.25) ≈ 1.318 (radians)"; row "πt/6 ≈ 1.318, t ≈ 6 × 1.318 ÷ π ≈ 2.52 h" (bright); the first crossing gets its drop line and label "2.52". On "eight" (second) row "πt/6 ≈ 2π − 1.318 ≈ 4.965, t ≈ 9.48 h" (bright, boxed with the first); a dotted mirror line at t = 6 (tag "symmetry about low tide"); the second crossing labelled "9.48". The board's band sits at 5.25 m as the cursor visits each time. On "hours" (last) the curve above the level shades light amber on [0, 2.52] and [9.48, 12] (tag "level ≥ 5.25 m").

### 7. a second situation: a turning wheel makes a wave
> Here's a second situation: a Ferris wheel with radius ten metres, its centre twelve metres above the ground, turning once every sixty seconds. Follow one cabin, starting at the **bottom**. As the wheel turns, the cabin's height rises and falls, tracing a **wave**. Midline twelve, amplitude ten, and period sixty, so b is two pi on sixty, pi on thirty. But this time it starts at the lowest point, so we need the cos curve turned upside down: h equals twelve minus ten cos of pi t on **thirty**. Check: halfway round, at thirty seconds, cos pi is minus one, so h is twenty two, the **top**.

Visual: clear change. The Ferris wheel plate (frame layer fixed, wheel layer rotating) on the left with labels "radius 10 m", "centre 12 m" (a coded radius line and a height bar from the ground); the Ferris window (t 0 to 60 s, h 0 to 24 m) in the middle. On "bottom" one empty cabin gets an amber ring (coded marker), at height 2 m. On "wave" `RotationProjector` turns the wheel once (about 4 s, constant speed) while a dashed horizontal projector line carries the cabin's height to the graph, drawing the curve; tag "turning → wave". Panel slots fill on the next sentence: midline 12 (teal), amplitude 10, "b = 2π ÷ 60 = π/30". On "thirty" a grey thumbnail of y = −cos x (starting at its lowest point) beside the panel; panel "h(t) = 12 − 10cos(πt/30)" (boxed); grey chip "a = −10: reflected cos; amplitude 10". On "top" the wheel turns to half way (cabin at the top), the graph point (30, 22) rings with "cos π = −1: h = 12 + 10 = 22".

### 8. an exact solve: when is the cabin 17 m up?
> When is the cabin seventeen metres up, in the first turn? Twelve minus ten cos equals seventeen, so cos of pi t on thirty is minus a **half**. That's an exact value. Cos is minus a half at two pi on three and four pi on **three**, so t is twenty seconds, or forty **seconds**. On the wheel, those are the two moments the cabin passes seventeen metres, once on the way up, and once on the way **down**.

Visual: task strip "When is h = 17 m, for 0 ≤ t ≤ 60?"; `LevelLine` at h = 17 (counter "expect 2"). On "half" rows "12 − 10cos(πt/30) = 17", "cos(πt/30) = −½". On "three" row "πt/30 = 2π/3 or 4π/3"; on "seconds" row "t = 20 s or t = 40 s" (bright, boxed); crossings labelled "20" and "40". On "down" the wheel rotates to t = 20 (cabin at 17 m, up-arrow) then to t = 40 (cabin at 17 m, down-arrow); a horizontal line at 17 m on the plate passes through both positions.

### 9. memory aid: middle, half, period, start
> Here's a checklist for any periodic model. Middle, half, period, **start**. The midline is the middle of the max and the min. The amplitude is half the gap between them. b is two pi over the period. And the start picks the curve: cos if it starts at a max, minus cos if it starts at a min, and sine if it starts in the middle, going **up**.

Visual: the checklist writes large: "Middle, half, period, start." On "start" four rows appear one per spoken clause: "midline d = (max + min) ÷ 2", "amplitude = (max − min) ÷ 2", "b = 2π ÷ period", and on "up" three tiny curve icons (coded): "max at start: cos", "min at start: −cos", "middle, rising: sin", each with a dot at its start. Hold about 2 seconds.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. In a coastal town, the longest day has fourteen and a half hours of daylight, and the shortest day, six months later, has nine and a half. Let t be the number of months after the longest day, and model the daylight hours as D equals a cos b t, plus d. Find a, b and d, then find D when t equals two. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "In a coastal town, the longest day has 14.5 hours of daylight. The shortest day, 6 months later, has 9.5 hours. Let t be the number of months after the longest day, and model the daylight hours as D = a cos(bt) + d. (a) Find a, b and d. (b) Find D when t = 2." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no graph).

### 11. feedback 1 (brief)
> The midline d is the middle of fourteen and a half and nine and a half: **twelve**. The amplitude a is half the gap: two point **five**. The period is twelve months, so b is pi on **six**. At t equals two, cos of pi on three is a half, so D is twelve plus one point two five: thirteen point two five **hours**. An amplitude of five uses the whole gap, not **half**.

Visual: card shrinks to the top. On "twelve" "14.5" and "9.5" underlined; row "d = (14.5 + 9.5) ÷ 2 = 12". On "five" row "a = (14.5 − 9.5) ÷ 2 = 2.5". On "six" "6 months later" underlined; row "period 12 months, b = 2π ÷ 12 = π/6". On "hours" "t = 2" underlined; row "D(2) = 2.5cos(π/3) + 12 = 1.25 + 12 = 13.25 hours" (bright, boxed); a thumbnail of the curve with (2, 13.25) marked. On "half" a chip "a = 5" fades in and is crossed (caption "half the gap"). Hold about 1 second.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. A buoy's height, in metres, is h equals one point five sine of pi t on eight, plus three, where t is in seconds. Find the first two times after t equals zero when h is three point seven five. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "The height of a buoy is h(t) = 1.5 sin(πt/8) + 3 metres, where t is the time in seconds. Find the first two times t > 0 at which h = 3.75 m." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 2 (brief)
> One point five sine of pi t on eight is point seven **five**, so sine of pi t on eight is a **half**. Sine is a half at pi on six and five pi on **six**. Multiply by eight over pi: t is four thirds of a second, and twenty thirds of a **second**. Pi on six is the angle inside, not the **time**.

Visual: card shrinks to the top. On "five" "3.75" and "+ 3" underlined; row "1.5 sin(πt/8) = 0.75". On "half" row "sin(πt/8) = ½". On "six" row "πt/8 = π/6 or 5π/6" (thumbnail: sine curve with level ½ and two dots). On "second" row "t = 8/6 = 4/3 s or t = 40/6 = 20/3 s" (bright, boxed; grey "≈ 1.33, ≈ 6.67"). On "time" a chip "t = π/6" fades in and is crossed (caption "that's πt/8, not t"). Hold about 1 second.

### 14. handoff
> So a periodic model needs a midline, an amplitude, a period and a starting point. The water level only ranges from one and a half to seven and a half metres, so an ordinary axis shows it well. Next, quantities that range over many powers of ten. Here's a factory at ninety five decibels, and a safety limit of eighty five. Is ten decibels over the limit a small **difference**?

Visual: board clears to the tide graph, small, with its h-axis 0 to 8 bracketed "fits easily". On "Next" it fades and a long linear axis draws: "sound intensity (W/m²)" from 0 to 0.004 (ticks every 0.001). Three points drop onto it: "quiet library 30 dB" at 10⁻⁹ (sits on 0), "85 dB limit" at 0.000316 (grey "≈ 0.0003"), "95 dB factory" at 0.00316 (grey "≈ 0.0032"). On "difference" a chip "95 dB: only 10 more than 85?" Chip: "Next: logarithmic scales". Hold about 2 seconds.

### 15. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Periodic model: h(t) = a cos(bt) + d (or a sine form). Midline d = (max + min)/2; amplitude |a| = (max − min)/2; b = 2π ÷ period.
2. Start: a max at t = 0 gives cos; a min gives −cos (a < 0); the midline going up gives sin. A shift inside, such as sin(b(t + h)), is h time units.
3. To solve h(t) = k: count the cycles in the time domain first; isolate the ratio; use exact values or inverse trig in radians; use symmetry and the period for the others; then t = angle ÷ b.
4. Interpret the answer in the context (units, and which times make sense).

Memory aid (large, on the notes screen): *Middle, half, period, start.*

Visual (end of the hold, silent, no added speech): the key-notes hold ends by cross-fading (1 s, shared component; series rule) back to scene 14's frame exactly (the linear intensity axis with three points and the chip). This is the final frame and t04's opening frame.

## Teaching checks

- **Does it explain causes?** Why the midline is the average: equal swings above and below (2). Why the amplitude is half the gap: the gap is two amplitudes (2). Why b = 2π/12: the inside must grow by 2π per cycle (3). Why cos: it starts at its peak, as the tide does (4); why −cos for the wheel: a bottom start (7). Why two times: one cycle and the level inside the range (6, 8). Why a wheel gives a wave: the projected height of a turning point (7).
- **Misconceptions addressed:** the eight listed under Decisions (scenes 2 to 8; feedback 1 and 2, crossed; key notes 1 to 3).
- **One idea at a time:** one parameter per spoken step (2 to 4, panel slots); one question per scene (5, 6, 8); rows dim as the next starts.
- **Video makes it easier:** the water band on the painted board moves with the time cursor on the graph (1 to 6); midline and amplitude appear on the board and the graph together (2); the turning wheel projects its cabin's height onto the graph (7); the cabin passes 17 m twice (8).
- **Response opportunity:** two HSC-style tasks with every condition on the card (A1 states the cos form and the meaning of t; A2 the full model and t > 0), 10 seconds each, nothing answer-bearing; one crossed mistake each; feedback about 27 s and 22 s.
- **Avoided double teaching:** t01's transformations and t02's counting and symmetry are used, not re-taught (one clause each).
- **Syllabus coverage:** `ci50d9af52` (two periodic phenomena modelled with transformations of cos; solved without calculus); `ci5f2b7245` (practical problems with transformed functions, graphical and algebraic, here for trig models; partial, open decision 2).
- **Out of scope by design:** calculus of models, tan models, regression, non-trig practical models.

## Practice questions and model answers

**Attempt 1 (scene 10; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "In a coastal town, the longest day has 14.5 hours of daylight. The shortest day, 6 months later, has 9.5 hours. Let t be the number of months after the longest day, and model the daylight hours as D = a cos(bt) + d. (a) Find a, b and d. (b) Find D when t = 2."
Model answer: (a) d = (14.5 + 9.5)/2 = 12; a = (14.5 − 9.5)/2 = 2.5; period 12 months, so b = 2π/12 = π/6. (b) D(2) = 2.5cos(π/3) + 12 = 13.25 hours. Classic mistake (crossed): a = 5 (the whole gap).

**Attempt 2 (scene 12; site SA 1(c), kept, HSC style, 2 marks).** "The height of a buoy is h(t) = 1.5 sin(πt/8) + 3 metres, where t is the time in seconds. Find the first two times t > 0 at which h = 3.75 m."
Model answer: sin(πt/8) = ½, so πt/8 = π/6 or 5π/6; t = 4/3 s or t = 20/3 s. Classic mistake (crossed): t = π/6 (the inside angle).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Opening frame | t02's: (0, 7.5), (6, 1.5); band at 1.5 m | 1 |
| Tide window | t 0 to 12 h, h 0 to 8 m | 1 to 6 |
| Midline, amplitude | d = 4.5; a = 3 | 2 |
| Period, b | 12 h; b = π/6 | 3 |
| Model (site Problem 1) | h = 3cos(πt/6) + 4.5; h(6) = 1.5; h(12) = 7.5; sine form left 3 h | 4 |
| h(4) | 3cos(2π/3) + 4.5 = 3 m | 5 |
| h = 5.25 | cos(πt/6) = 0.25; cos⁻¹(0.25) ≈ 1.318; 2π − 1.318 ≈ 4.965; t ≈ 2.52, 9.48 h | 6 |
| Ferris (site card 05, A) | radius 10, centre 12, 60 s; h = 12 − 10cos(πt/30); h(0) = 2, h(30) = 22 | 7 |
| Ferris h = 17 | cos = −½; πt/30 = 2π/3, 4π/3; t = 20, 40 s | 8 |
| A1 | d = 12; a = 2.5; b = π/6; D(2) = 13.25 h; crossed a = 5 | 10, 11 |
| A2 (site SA 1) | sin(πt/8) = ½; t = 4/3, 20/3 s (≈ 1.33, 6.67); crossed π/6 | 12, 13 |
| Handoff | 30 dB: 10⁻⁹; 85 dB: √10 × 10⁻⁴ ≈ 0.000316; 95 dB: √10 × 10⁻³ ≈ 0.00316 W/m²; axis 0 to 0.004 | 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy (2 Nov); Codex to re-check.

- 3cos(πt/6) + 9/2 at t = 0, 4, 6, 12: 15/2, 3, 3/2, 15/2. 3sin(πt/6 + π/2) + 9/2 − h(t) = 0 identically.
- 3cos(πt/6) + 9/2 = 21/4 on [0, 12]: t = 2.5174163, 9.4825837; cos⁻¹(1/4) = 1.3181161; 2π − cos⁻¹(1/4) = 4.9650692.
- 12 − 10cos(πt/30) at t = 0, 15, 30, 45, 60: 2, 12, 22, 12, 2. = 17 on [0, 60]: t = 20, 40.
- 2.5cos(πt/6) + 12 at t = 0, 2, 6: 14.5, 13.25, 9.5.
- 1.5sin(πt/8) + 3 = 3.75 on [0, 16]: t = 4/3, 20/3; period 16; max 4.5, min 1.5.
- Intensities: 10^(L/10 − 12) for L = 30, 85, 95: 10⁻⁹, 3.162×10⁻⁴, 3.162×10⁻³.

## Memory aid check

- **"Middle, half, period, start."** Meaning: midline = middle of max and min; amplitude = half the gap; b = 2π ÷ period; the starting state picks cos, −cos or sin. Assumptions checked: the quantity is sinusoidal with a known max, min and period (stated in scene 1's "same pattern" and in every card); "start" assumes t = 0 is at a max, a min, or the midline going up; other starts need a horizontal translation (key note 2), which this video names but does not drill (a sine with a time shift in scene 4). It helps a new case: attempt 1 (daylight). Introduced after both contexts.
- **Considered, not used:** the site's "Amplitude and midline first" (kept as the order, not as a slogan).

## Narration length estimate

Revision 1 count (2 Nov; by script `count_tgraphs.py`, build parser rules): **5,520 characters** (5,534 with the joining spaces), 15 scenes. Characters per scene (1 to 15): 392, 407, 303, 454, 346, 705, 574, 385, 332, 332, 345, 223, 274, 373, 75. At 13.3 characters per second the speech is about 415 s; add about 20 s of settling time (the tide loop in 1, the curve draw in 4, the cursor moves in 5 and 6, the wheel turn in 7 and the two stops in 8), 20 s for two countdowns, about 5 s of short holds (scenes 9, 11, 13, 14) and about 60 s more of the quiet notes hold (about 105 s of holds): **about 520 s**, inside the 5,500 to 6,800 character band (just above the floor; the content is complete and nothing is padded) and under the 570 s cap. Scene 6 is the longest; the calculator chip must appear before "and t is about". Reserve trims if the voiced take runs long: scene 4's last sentence (keep the sliding ghost silent); scene 6's last sentence (keep the shading); scene 1's last sentence. Any trim takes the count below 5,500; root decides whether a slightly short video is preferred.

## Scene list and build ids

Lesson key `m-a12t03` (route math-a12-t03, draft). Suggested explainer folder `src/explainer/lessons/math-a12-t03` and build folder `docs/production/claude-pm/lessons/m-a12t03`.

In order (kebab-case; 15 scene headings): hook, midline-amplitude, period-b, choose-cos, evaluate, solve-tide, ferris-model, ferris-solve, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`: four notes). Transitions: t02's last frame continues into scene 1 (camera continue, same axes and board); 1 to 6 camera continue (same tide board and axes, new task strips in 5 and 6); 6 to 7 clear change (wheel); 7 to 8 camera continue; 8 to 9 camera pull back; attempts and feedback card shrink to the top; 13 to 14 board clear; 14 to 15 fade to the notes board; 15 cross-fades back to 14's frame.

Holds: attempt-1, attempt-2 (10 s countdown). key-notes quiet hold about 60 s. Review evidence paths: `learning_review` = `checks/m-a12t03-learning-review.md`, `science_check` = `checks/m-a12t03-maths-check.md`.

## Assets

Have (coded): `FunctionGraph` with custom ticks (hours, seconds); `ReadoutPanel.rows` (twin readout "t" and "inside bt", calculator chip); `AlignedAlgebra`; t01's `TransformPanel` (slots a, b, d; "h(t)" label instead of "y"; `factored` mode not needed) and `FeatureMarks` (midline, amplitude bars, period bracket); t02's `LevelLine` (levels 5.25 and 17 with author roots); shared `Countdown`, `QuestionCard`, `Chip` with `cross`, `Callout`, `PenArrow`, `KeyNotes`, `Heading`. Existing plates checked (2 Nov, `public/assets/`): no tide, harbour, Ferris wheel or daylight plates exist (the only harbour image, `hscscience/chem-y11-m3/l7/l7HookHarbourBridge.png`, is a chemistry hook unrelated to tides).

New part (for the t03 build brief):
1. **`RotationProjector`.** Props: `centre` (plate-pixel position of the hub), `radiusPx`, `startAngle` (bottom = −π/2 in screen terms), `omega` (radians per time unit), `t` (shared time cursor), `graph` (the Ferris window), `heightFn` (author-supplied h(t)), `plateLayers` ({frame, wheel} image paths), `marker` (cabin ring style). Rotates the wheel layer about the hub by omega·t, keeps the frame fixed, draws the amber cabin ring at the rotated cabin position, and a dashed horizontal projector from the ring to the graph point (t, h(t)). Validation: the ring's height above the plate's ground line, scaled to metres, equals heightFn(t) within 1 px at 101 sample times (catches a plate/scale mismatch).
2. **Water band (lesson-local, plain SVG).** A translucent rectangle in front of the tide board's lower part whose top is at the board's pixel height for h(t) (linear map from the plate's measured 0 m and 8 m marks). No new kit part.

## Codex asset brief

Two painted plates (the tide board is specified once, in t02's brief; repeated here so either brief can carry it). Both in the explainer paper-and-watercolour style of `public/assets/chemistry/m6-ph-meter-probe-beaker-v1.png`, transparent PNG with an alpha channel (never white), no people, no text except as stated, never stretched.
1. **Tide board** (`public/assets/maths/m-a12-tide-board-v1.png`): as t02's brief (wooden harbour tide board on a pier pile, marked 0 to 8 m with metre numerals and half-metre ticks, no water, portrait about 600 × 1600 px, measured pixel heights of the 0 m and 8 m marks recorded in the delivery note).
2. **Ferris wheel, two layers** (`public/assets/maths/m-a12-ferris-frame-v1.png` and `m-a12-ferris-wheel-v1.png`): a simple Ferris wheel with 12 empty, closed cabins (no riders, no faces, no figures, no signage). The frame layer holds the A-frame support legs, the hub axle housing and a short ground line; the wheel layer holds the rim, spokes and the 12 cabins hanging from the rim, centred exactly on the hub so it can rotate about its centre. Square canvases of the same size (about 1400 × 1400 px), the hub at the same pixel position in both (recorded in the delivery note), the ground line in the frame layer at a recorded pixel height. Cabins drawn hanging straight down at this rotation; the build accepts that they rotate with the wheel (cabins tilt) unless Codex supplies the cabins as a third layer (preferred: `m-a12-ferris-cabin-v1.png`, one cabin, so the build can keep each cabin upright at its rim point; then the wheel layer has no cabins). Proportions consistent with radius 10 m and hub 12 m above the ground (hub height above the ground line = 1.2 × rim radius).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and the narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the sine-form claim (left 3 hours, author note a), the Ferris rotation claim (author note d) and the interpretation in scene 6 (level ≥ 5.25 m on [0, 2.52] and [9.48, 12]).
3. Confirm decimals appear only where no exact value exists (cos⁻¹(¼)) or as grey "≈" companions, and that every inverse-trig value is in radians.
4. Confirm both attempt cards carry every condition (A1: the cos form, the meaning of t, both extremes and the six months; A2: the model, units, t > 0) and no answer-bearing visual.
5. Confirm the syllabus quotes match the crosswalk text exactly and no site label appears in learner copy or metadata; no person is drawn or named as a rider.
6. Confirm the opening frame equals t02's scene 15 frame and the final frame equals scene 14 here.
7. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
8. Confirm the narration character count by script.
9. Add site corrections 1 to 3 under Decisions to `../site-corrections-maths-a12.md` without duplicates.

## YouTube metadata (draft)

Title: Modelling Tides and Ferris Wheels with Trig Functions | Year 12 Maths Advanced

(Title length: 79 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/further-graph-transformations-and-modelling/lesson02.sa.html

High tide is 7.5 m at time zero and low tide is 1.5 m six hours later. From just those facts, build a trig model of an idealised harbour: the midline is the middle, the amplitude is half the gap, b comes from the period, and the starting point picks cos, minus cos or sine. Use it to find the level after 4 hours, and the two times the level is 5.25 m (with inverse cos in radians). Then watch a turning Ferris wheel trace a wave, model a cabin's height, and find when it is 17 m up. Memory aid: middle, half, period, start. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 12, further graph transformations and modelling.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Model and solve problems involving periodic phenomena using transformations of the trigonometric functions f(x) = sin x, f(x) = cos x or f(x) = tan x, without the use of calculus"
"Model and solve practical problems involving functions and their transformations, within the scope of the Mathematics Advanced course, using graphical and algebraic techniques"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa3b2bda67

Builds on: Solving trig equations in a domain (previous video); Transforming trig graphs. Next: Logarithmic scales.

#Year12Maths #MathsAdvanced #Modelling #HSCScience

## Open decisions

- **1. Painted plates (root, Codex).** Two new plates (tide board, Ferris wheel in two or three layers). If the wheel plate cannot rotate cleanly, the fallback is a coded wheel (circle, spokes, cabin dots) in the paper style; the rotation and projection carry the teaching either way.
- **2. `ci5f2b7245` coverage (root).** The point covers practical problems with any functions and their transformations in the course. The outline owns it here; this video covers trig models only. Other practical models (exponential growth in d19, optimisation in d18, the log scales in t04) partly serve it. Root to record `coverage: partial` and decide whether the exam-practice video adds a non-trig practical model.
- **3. Boat outline (root).** Scene 6 mentions a boat in speech only. A small coded hull outline at the board could make the interpretation concrete; it is not needed.
- **4. Year 11 inverse-trig codename (root).**
- **5. "pi t on six" spoken form (voice pilot).**

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from t01 and t02; check that the board and graph moving together make "model" concrete; that scene 3's "inside grows by 2π" is followable; that scene 6's calculator step is clear without slowing (radians said aloud); that the wheel projection reads as the reason for a wave; that the attempt cards are fair at 10 s, especially A1's two parts), then the Codex maths check and error check.
- The water band, the cursor, the wheel and the projector carry the explanation; judge them at playback speed. The band and the cabin ring must be driven by the same h(t) as the graph.
- t04 opens on scene 14's frame.
