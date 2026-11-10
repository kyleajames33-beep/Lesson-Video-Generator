# Maths A12 T03: How do periodic functions and transformations model a real situation? Midline, amplitude, period and starting point from measurements; the tide and the Ferris wheel, solved graphically and algebraically (design)

Status: Revision 3 (7 Nov 2026): redesign to maths-visual-standard.md (d01 Revision 6 pattern, everyday anchor). Needs Codex learning review and maths check before voicing.

Previously Revision 2 (3 Nov): brief 153 repairs applied (tide assumptions stated before the half-cycle inference, attempt 1 states consecutive extremes of a sinusoidal pattern, opening frame includes the "Next: modelling with trig functions" chip, scene 6 says "at least" with approximate endpoints; syllabus notation k cos(at) + c per root decision 21; spoken "pi over six" style per root decision 22). Needs a Codex error check. Voicing gated by the brief 124 Google voice pilot. Build uses the brief 129 kit with its additions and t01's and t02's requested parts (`transform.yShift`, `TransformPanel`, `FeatureMarks`, `LevelLine`, `WindowMap`); see "Assets" for one new part and two painted plates (the tide board shared with t02, and a Ferris wheel in two layers). Nothing recorded; human listening pending.

Narration 5,678 characters (sum of the 15 scene strings), 15 scene headings, about 514 s with holds (the key-notes scene fixed at 45 s), counted by script with the build parser rules (see "Narration length estimate"). Not voiced (no `math-a12-t03/` folder and no `measured/lesson.json`), so narration is rewritten freely where the bar needs it. Revision 2 was 5,722; Revision 1 was 5,520. Nothing recorded; human listening pending.

Scope: third video of the Year 12 Mathematics Advanced trig graphs and modelling strand (course outline playlist order 22; production order after t02). Templates: `math-a12-d05.md` and `math-a12-i05.md` (Revision 2) and the t01 and t02 designs (Revision 1; t02's scene 15 is this video's first frame). Maths visuals coded; two small painted plates carry the contexts (programme decision 5 allows real-world context plates). No pre-design pack exists: this design does the pack work. Site lesson read in full (2 Nov, read-only): `C:/Users/kygs/hscscience/subjects/maths-advanced/year12/further-graph-transformations-and-modelling/lesson02.sa.html`, SHA256 `8ead7b9aeca247ad96b3abba7ba7691f8b7eadc7c2f4ebd65ccd0f76202e2c09` (recomputed 2 Nov; matches the crosswalk). Sections used: `build-periodic-models` card 05 (the parameter rules; its Ferris wheel quick check, option A, kept exactly), `compare-model-approaches` card 06 (graph first to count, then algebra), worked Problem 1 (the tide, kept exactly: 7.5 m, 1.5 m, 12 h, h(4) = 3, h = 5.25 at t ≈ 2.52 and 9.48), SA 1 (the buoy, attempt 2, kept exactly), MC Q5 (amplitude from max and min, the idea for attempt 1). Lesson 1's Ferris wheel hook and "Revisit" (`lesson01.sa.html`, SHA256 `e5b283c0d081397e3b156bdd31d6958d0280be5dfabd856746b8830ad4e19635`) were read for consistency; lesson 2's version (radius 10, centre 12, 60 s, start at the bottom) is used because it states the starting point.

Owner rules applied: as t01 and t02. No people: the site's "rider" and "passenger" become "a cabin" in narration and screen text; the Ferris wheel plate has empty cabins. Root decisions applied: exact values in the algebra wherever they exist (cos(2π/3) = −½, π/6, 2π/3, 4π/3); decimals only where the value is genuinely not exact (cos⁻¹(¼) ≈ 1.318 rad), shown in grey with "≈" and computed in radians; precise transformation scope (the "+ π/2" inside a sine of πt/6 slides it left by 3 hours, not by π/2; site correction 1); time domains kept on every card and answer line; attempt cards give no parameter or answer; spoken "next" true in production order.

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 12, focus area "Further graph transformations and modelling"; NESA content-system codenames, official `code` field empty), quoted from `docs/production/programme/syllabus/maths-advanced-2024-y12-crosswalk.json` in linear form:

- `ci50d9af52`: "Model and solve problems involving periodic phenomena using transformations of the trigonometric functions f(x) = sin x, f(x) = cos x or f(x) = tan x, without the use of calculus"
- `ci5f2b7245`: "Model and solve practical problems involving functions and their transformations, within the scope of the Mathematics Advanced course, using graphical and algebraic techniques"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa3b2bda67

**Boundary:** starts from t02's last frame (tide axes with (0, 7.5) and (6, 1.5), the tide board with the water band at 1.5 m, chips "h(t) = ?" and "Next: modelling with trig functions", the second clearing silently with the heading). Teaches: periodic phenomenon (plain meaning); midline and amplitude from the maximum and minimum; period from the context and a = 2π/period; choosing the starting curve (cos at a maximum, −cos at a minimum, sin at the midline going up; the equivalent shifted sine with its shift in time units); using the model for a value; solving a model equation graphically (count) and algebraically, with a non-exact inverse cos in radians (tide) and an exact case (Ferris wheel); interpreting answers in context. Stops at sinusoidal models from max, min, period and start, without calculus. Not taught: rates of change of models (calculus; excluded by `ci50d9af52`), tan models (the syllabus says "or"; none in the site), regression from many data points, non-trig practical models (see open decision 2 on `ci5f2b7245`).

## Decisions

### Revision 3 redesign (7 Nov 2026; these bullets override older bullets below where they conflict)

- **Anchor: the tide board at a harbour boat ramp (painted plate, live).** The site's tide (Problem 1: high 7.5 m at t = 0, low 1.5 m six hours later, 12-hour period) stays the worked example and becomes the anchor: a painted tide board on a timber pile at the foot of a concrete boat ramp, with a coded water band that rises and falls on the board in step with a time cursor on the graph. Everything the model does is checked against the board: the midline and amplitude are marked on it, h(4) = 3 m is read off it, and the boat-ramp question (when is the level at least 5.25 m?) is answered by watching the band. A boat ramp makes the 5.25 m threshold a real decision (when can a boat use the ramp?). Tides are a natural everyday periodic quantity and the site's own context; the tide board is not a context in `checks/root-decisions-maths-redesign.md` (i11 is a pool beach entry, d11 a lighthouse beach). The 6 m tidal range is large but real on parts of the north-west coast; the harbour is unnamed and idealised (author note e).
- **The Ferris wheel is a brief callback, not a new anchor.** d05 owns the Ferris wheel (root decision 1), so scenes 7 and 8 reuse d05's four plates (rim, stand, plain and marked gondolas) on the kit's `RotatingPlate` (cabins stay upright), and scene 7 opens with "Remember the Ferris wheel seat?". The site's numbers are unchanged (radius 10 m, centre 12 m, 60 s, start at the bottom, 17 m at 20 s and 40 s). The Revision 2 request for new two-layer Ferris plates is withdrawn.
- **Simulations (standard item 3).**
  1. **`TideSim`** (lesson-local, on the kit; scenes 1 to 6): one time cursor drives the water band on the painted board, a dot on the graph, the graph pen (draw-as-you-go, t01's kit addition) and a `LiveReadoutBoard` (52 px): "time t (h)", "water level h (m)", "rising / falling". In scene 1 the band loops before any formula; in scenes 5 and 6 the cursor visits t = 4, 2.52 and 9.48 and the band sits at the answer on the board.
  2. **`TransformPanel` slots** (scenes 1 to 4, t01's studio part): k, a and c fill one at a time with the feature readouts; the panel's curve lands on the data.
  3. **Ferris `RotatingPlate` projector** (scenes 7 and 8): d05's wheel turns while the marked cabin's height is carried by a dashed projector line to the graph, drawing the curve, with live "angle", "height" readouts.
- **Visual surprise (standard item 9).** In scene 4 the dashed sine model 3sin(πt/6 + π/2) + 4.5 slides left by 3 hours and lands exactly on the cos model: two different-looking equations, one curve. In scene 6 the band on the board sits at 5.25 m twice, once as the tide falls and once as it rises.
- **Colour roles (t01 to t03 strand).** k amber (amplitude bars), a blue (period bracket and a = 2π ÷ period), c violet (dashed midline), b teal (the time shift in the sine form); the model curve ink; data points ink; the water band a pale sea tint (not a role colour); the level line (a target height, the right-hand side) amber dashed, shown only after the amplitude bars have cleared; final answers green; mistakes red, crossed slips only.
- **Large type, hand tags, stage changes.** As t01. `HandTag`s: "same pattern again", "middle", "half the gap", "half a cycle", "starts at a peak: cos", "left 3 h: same curve", "falling", "two times", "symmetry about low tide", "turning → wave", "starts at the bottom: −cos", "up, then down". Stages, each change within about 30 to 85 s: the tide board and graph (1 to 4, with the panel filling and the sine ghost); the worked h(4) board (5); the solve board with the cursor visiting both times (6); the Ferris callback (7, 8); the framed memory card (9); question cards with pictures (10 to 13); the phone-storage handoff (14); key notes (15).
- **Worked examples and feedback (g01 layout).** Scenes 5, 6 and 8 each have a task strip, a givens card with units, rows at 52 px, a green framed answer and one red crossed slip (5: "3cos 4 + 4.5 ≈ 2.54", silent, caption "the inside is πt/6, not t"; 6: "t ≈ 2.52 only", silent, caption "one cycle, level inside: two times"; 8: "t = 20 s only", silent, caption "twice per turn: up and down"). Feedback scenes carry a `GivensStrip`, a framed answer and one crossed slip.
- **Question cards (build gate).** Full question at 40 px plus a picture: A1 (daylight in a coastal town) shows t02's skyline strip and sun small (no graph, no values); A2 (the site's buoy) shows t01's yellow marker buoy (`ma12-marker-buoy-v1`) on a coded water line (no graph).
- **Memory aid (standard item 8).** Framed `MemoryAidCard`: "Middle, half, period, start." with keyed lines "middle: c = (max + min) ÷ 2" (violet), "half: |k| = (max − min) ÷ 2" (amber), "period: a = 2π ÷ period" (blue) and "start: cos, −cos or sin" with the three small curve icons. Key notes are five short one-line bullets beside it; the notes scene is 45 s (1,350 frames).
- **Handoff (changed; t04 is redesigned with it).** t04's new anchor is a phone's storage on a linear ruler against a log ruler. Scene 14 now ends on that frame (the phone and a linear "file size" ruler from 0 to 256 GB with a text message, a photo, a film and the whole phone), and t04 scene 1 opens on it. d04 owns sound levels as an anchor, so the factory and decibels move inside t04 as a syllabus example.
- **Narration (not voiced).** Scene 1 names the boat ramp's tide board; scene 7 opens as a callback to d05's Ferris wheel seat and is shortened; scene 14 is the new phone-storage handoff. Scenes 2 to 6, 8 to 13 and 15 keep their Revision 2 text.

### Revision 1 and 2 decisions (kept where not overridden above)

- **Learner question kept (course outline).** "How do periodic functions and transformations model a real situation?" The answer, built in order: a quantity that repeats regularly is periodic; its highest and lowest values fix the midline (vertical translation) and amplitude (vertical dilation); the time for one cycle fixes a (horizontal dilation, in the syllabus form y = k f(a(x + b)) + c); where the cycle starts picks cos, −cos or sin (reflection or horizontal translation); then the model answers questions (a value at a time; the times a level is reached), checked against the picture of the context.
- **Draft route entry (for root; no route entry exists).**
  - `id`: math-a12-t03; `playlistOrder`: 22 (outline); production order after t02.
  - `syllabusActionIds`: `ci50d9af52` (owned, `coverage: owned-action`), `ci5f2b7245` (owned in the outline; this video covers trig models only: `coverage: partial`, see open decision 2).
  - `entryKnowledge`: t01 (amplitude, midline, period 2π/a, reflection, horizontal translation); t02 (solving in a domain, counting cycles, symmetry); Year 11 `ciccaa78be` (exact values); Year 11 inverse trig on a calculator in radians (codename to be added by root).
  - `start`: "Open on t02's tide frame: two measurements (high 7.5 m at t = 0, low 1.5 m at t = 6) and h(t) = ?"
  - `stop`: "Build sinusoidal models from max, min, period and starting point; evaluate them and solve model equations graphically and algebraically, interpreting in context, without calculus. Keep log scales for t04."
  - `next`: "math-a12-t04: when a large range needs a logarithmic scale (decibels first)."
  - `sources`: further-graph-transformations-and-modelling/lesson02.sa.html (cards 05 and 06, Problem 1, SA 1, MC Q5), SHA256 above.
- **The hook (t02's handoff, the site's tide).** Two measurements and the claim that the pattern repeats; the tide board's coded water band rises and falls in a loop while a dot traces the height against time on the axes, so "periodic" is seen before it is named.
- **Midline and amplitude first (site card 02 "Amplitude and midline first").** Scene 2 draws the midline halfway between the two measured levels on both the graph and the tide board, then the amplitude bars. The cause is said: the water swings as far above its middle level as below it.
- **Period and b (t01 link, read backwards).** High to low is half a cycle, so the period is 12 h; the inside at must grow by 2π in one period, so a = 2π/12 = π/6. The inference needs two stated assumptions, now spoken: the pattern is a smooth cos-shaped wave, and the high and low are consecutive extremes. A `TransformPanel` (t01) shows the slots filling one at a time.
- **Starting curve (site card 05 "If the maximum occurs at t = 0, use cosine").** cos starts at its peak, matching high tide at t = 0, so no translation is needed. The equivalent sine, 3sin(πt/6 + π/2) + 4.5, is mentioned with its shift in time: + π/2 inside sin(πt/6 + π/2) = sin(π/6 (t + 3)) slides left 3 hours (site correction 1).
- **Using the model (Problem 1(b), kept).** h(4) = 3cos(2π/3) + 4.5 = 3 m, exact; the board and graph agree; the water is below the midline and still falling.
- **Solving (Problem 1(c), kept; card 06 "count first").** One cycle in 0 ≤ t ≤ 12 and the level 5.25 lies between 1.5 and 7.5, so two times are expected; cos(πt/6) = ¼ is not an exact value, so inverse cos in radians gives 1.318 and t ≈ 2.52 h; symmetry gives 2π − 1.318 and t ≈ 9.48 h. The interpretation: the level is at least 5.25 m for 0 ≤ t ≤ about 2.52 and about 9.48 ≤ t ≤ 12 (read from the graph; endpoints shown with "≈"; "at least" matches the ≥ and includes the threshold). The board shows the water at 5.25 m at both times.
- **Ferris wheel (site card 05 quick check, option A, kept; start at the bottom).** h = 12 − 10cos(πt/30): midline 12, amplitude 10, period 60 s, starts at a minimum so the cos curve is reflected (k = −10). The painted wheel rotates (frame layer fixed) while a coded dot on one empty cabin projects its height onto the graph, showing why circular motion gives a sinusoidal height. Check at t = 30: 22 m, the top.
- **An exact solve in context (original question on the site's wheel).** When is the cabin 17 m up in the first turn? cos(πt/30) = −½, πt/30 = 2π/3 or 4π/3, t = 20 s or 40 s: once going up, once coming down, shown on the wheel.
- **Attempts.** (A1, original, daylight; the site's MC Q5 idea): longest day 14.5 h, shortest 9.5 h six months later, t months after the longest day, D = k cos(at) + c: k = 2.5, a = π/6, c = 12; D(2) = 13.25 h. The card and the speech state that the longest and shortest days are consecutive extremes of a sinusoidal pattern. Crossed: "k = 5" (the whole gap). The town is unnamed and the values are illustrative (no claim about a real place). (A2, site SA 1(c), kept exactly): h(t) = 1.5sin(πt/8) + 3; first two times t > 0 with h = 3.75: t = 4/3 s and 20/3 s. Crossed: "t = π/6" (the inside angle, not the time).
- **Mistake scene:** none separate. "Amplitude = max − min" (scene 2; feedback 1, crossed); "a = period" (scene 3; key note 2); "the + π/2 slides by π/2" (scene 4, said correctly in time units); "calculator in degrees" (scene 6, "in radians"); "only one time" (scene 6, count first); "the inside angle is the answer" (feedback 2, crossed).
- **Memory aid:** "Middle, half, period, start." (see "Memory aid check").
- **Handoff teaser.** Scene 15: the tide graph shrinks to show its axis needs only 0 to 8 m; then a linear axis "sound intensity (W/m²)" from 0 to 0.004 with three points: "quiet library 30 dB" at 10⁻⁹ (on top of 0), "85 dB limit" at 0.000316, "95 dB factory" at 0.00316, and a chip "95 dB: only 10 more than 85?" (t04's hook, site lesson 2 hook).
- **Site sources used:** card 05 (parameter rules; quick-check option A), card 06 (sketch first, count, then algebra), Problem 1 (tide, all three parts, kept), SA 1 (buoy, attempt 2), MC Q5 (amplitude idea), lesson 1 Ferris hook (read; not used because it omits the starting point; site correction 3).
- **Misconceptions listed (pack work):** (1) amplitude = max − min; (2) a = period (or a = 2π × period); (3) a time shift read as the inside number instead of that number ÷ a, or in the wrong units; (4) using sin by default even when the data start at a max or min; (5) calculator in degrees; (6) one solution only; (7) reporting the inside angle as the time; (8) models are exact forever (not said; author note e).
- **Site corrections (quoted from site lessons 1 and 2, read 2 Nov; for `../site-corrections-maths-a12.md`):**
  1. Lesson 2 card 02: "Periodic model: f(t) = a sin(bt + c) + d, amplitude a, angular frequency b = 2π/T, phase shift c, vertical shift d." and key terms "Phase shift (c) Horizontal translation of the trig function." The amplitude is |a| and the horizontal translation is −c/b (lesson 1 card 06 says so), in the units of t. Suggest: "amplitude |a|, b = 2π/T, horizontal translation −c/b, vertical shift d."
  2. Lesson 2 key terms: "Amplitude (a) Half the distance between the maximum and minimum values: a = (max − min)/2. Always positive in context." In a model such as h = 12 − 10cos(πt/30) (the site's own quick check, option A) the coefficient a is negative. Suggest: "Amplitude |a| = (max − min)/2. The coefficient a can be negative when the graph is reflected."
  3. Lesson 1 hook: "A Ferris wheel with radius 15 m has its centre 20 m above the ground. It completes one full rotation every 40 seconds. Which function models the height of a passenger above the ground?" The model depends on where the passenger starts, which the hook does not state; "Revisit" assumes the bottom. Also "Revisit": "the −π/2 shifts the curve right so it starts at a trough": the shift is 10 seconds to the right (15sin(π/20 (t − 10)) + 20), not π/2. Suggest adding "starting at the lowest point at t = 0" to the hook and "shifts the curve 10 s to the right" in Revisit.
  - Checked and correct: card 05 tide (h = 3cos(πt/6) + 5, and its sine form); card 05 quick check (A, with the reasons for B to D); card 06 population example (t = 6 only); Problem 1 (4.5, 3, π/6, h(4) = 3, t ≈ 2.52 and 9.48); SA 1 (period 16 s, amplitude 1.5 m, max 4.5, min 1.5, t = 4/3, 20/3); MC Q5 (7 °C); lesson 1 Revisit formula (15sin(πt/20 − π/2) + 20 gives 5 m at t = 0).
- **Cause chain taught, in order:** (1) the quantity repeats: periodic (1); (2) equal swings above and below fix the midline; half the gap is the amplitude (2); (3) half a cycle in 6 h gives period 12 h; the inside grows by 2π per period, so a = π/6 (3); (4) high at t = 0 matches cos's peak; the check at t = 6 (4); (5) evaluate at t = 4 (5); (6) count, then inverse cos in radians and symmetry; interpret (6); (7) a turning wheel makes a wave; a bottom start means −cos (7); (8) an exact solve, twice per turn (8); (9) remember: middle, half, period, start (9).
- **Learner-visible vocabulary (plain meaning at first use):** periodic (repeating the same pattern at regular intervals, scene 1); model (an equation that describes a real situation, scene 1); midline, amplitude, period (recalled from t01 with their meaning in context, scenes 2, 3); inverse cos (the calculator key that gives an angle with a given cos, scene 6); radians (recalled: set the calculator to radians, scene 6).
- **Legacy logic ported:** none.
- **New explainer motion:** **water band driven by the model** (coded band over the painted tide board, its height = h(t) at the shared time cursor; scenes 1 to 6); **time cursor linking board and graph** (a dot on the graph and the band move together); **midline and amplitude on both board and graph** (`FeatureMarks`); **slots filling** (`TransformPanel`, scenes 3 to 4); **level line** with two times (`LevelLine`, scenes 6, 8); **rotating wheel with projected cabin height** (new part `RotationProjector` over the two-layer plate, scene 7 and 8); aligned algebra, `Chip` with `cross`, `Countdown`, `QuestionCard`, `KeyNotes`.
- **Board layout (constant):** heading top-left; context plate on the left third (tide board about 200 × 540 px; wheel about 520 × 560 px), graph in the middle (about 800 × 480 px), algebra in the right column. Tide window t from 0 to 12 h (ticks every 2) by h from 0 to 8 m; Ferris window t from 0 to 60 s (ticks every 10) by h from 0 to 24 m. The water band and the cabin dot are placed by the same h(t) function as the graph.
- **No human figures.** Plates: tide board (new, shared with t02) and Ferris wheel (new, two layers). No people, no riders, no boats drawn (the boat in scene 6 is spoken only; a small coded hull outline is optional at root's choice, open decision 3).
- **Author notes (not learner copy):**
  (a) Tide: c = (7.5 + 1.5)/2 = 4.5; k = (7.5 − 1.5)/2 = 3; T = 12; a = 2π/12 = π/6; h(t) = 3cos(πt/6) + 4.5. h(0) = 7.5, h(6) = 1.5, h(12) = 7.5, h(4) = 3cos(2π/3) + 4.5 = 3. Sine form: 3sin(πt/6 + π/2) + 4.5 = 3sin(π/6 (t + 3)) + 4.5, identical (left 3 h).
  (b) h = 5.25 on [0, 12]: cos(πt/6) = ¼; cos⁻¹(¼) = 1.318116 rad; t = 6(1.318116)/π = 2.517416 ≈ 2.52 h; 2π − 1.318116 = 4.965069; t = 9.482584 ≈ 9.48 h. h ≥ 5.25 for 0 ≤ t ≤ 2.52 and 9.48 ≤ t ≤ 12 (approximately). (2.52 h ≈ 2 h 31 min; 9.48 h ≈ 9 h 29 min; not shown.)
  (c) Ferris: h(t) = 12 − 10cos(πt/30): h(0) = 2, h(15) = 12, h(30) = 22, h(45) = 12, h(60) = 2. h = 17: cos(πt/30) = −½; πt/30 = 2π/3, 4π/3 in [0, 2π]; t = 20, 40 s.
  (d) Rotation: a point on a circle of radius 10 centred at height 12, starting at the bottom and turning at 2π/60 rad/s, has height 12 − 10cos(πt/30). The build places the cabin dot at angle πt/30 from the bottom and projects its height horizontally onto the graph at the same t.
  (e) Real tides are not exactly 12-hour sinusoids (the semidiurnal period is about 12.4 h and heights vary); the model uses the site's idealised data. Not said in learner copy (its omission does not teach a wrong method); in the description as "an idealised harbour".
  (f) A1: c = (14.5 + 9.5)/2 = 12; k = (14.5 − 9.5)/2 = 2.5; period 12 months, a = π/6; D(t) = 2.5cos(πt/6) + 12; D(2) = 2.5(½) + 12 = 13.25 h; D(6) = 9.5. Crossed: k = 5.
  (g) A2: 1.5sin(πt/8) + 3 = 3.75 ⇔ sin(πt/8) = ½ ⇔ πt/8 = π/6 or 5π/6 (first two positive) ⇔ t = 4/3 or 20/3 s. Crossed: π/6.
  (h) Pronunciations: "seven point five", "pi t over six" (pi times t, over six), "inverse cos", "one point three one eight", "four thirds", "twenty thirds".

Main question: *High tide is 7.5 m at time zero and low tide is 1.5 m six hours later. How can a transformed cos curve predict the water level at any time, and when it reaches a given height?*
Entry knowledge (t01, t02; Year 11 `ciccaa78be`, Year 11 inverse trig in radians): transformations and periods; solving in a domain by counting and symmetry; exact values; using a calculator in radians.
Stops after: building sinusoidal models from max, min, period and start; evaluating; solving graphically and algebraically, exact and non-exact; interpreting in context; two contexts (tide, Ferris wheel). No calculus, tan models or regression.
Handoff (Revision 3): quantities spanning many powers of ten, starting from a phone's storage on one ordinary ruler (a text message, a photo, a film and the whole phone) (math-a12-t04).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings.

Colour roles (Revision 3, t01 to t03 strand): k **amber** (amplitude bars), a **blue** (period bracket, a = 2π ÷ period), c **violet** (dashed midline), b **teal** (the time shift in the sine form); the model curve **ink**; data points ink; the water band a pale sea tint (not a role colour); the level line amber dashed, only after the amplitude bars have cleared; final answers **green**; mistake **red**, crossed slips only; grey "≈" decimals beside exact or calculator values. Type (standard item 5): current working line and live readout numbers 52 px; task strip, equation strip and givens 44 px; earlier lines 30 to 32 px and dimmed, never faint; axis numbers at least 30 px; hand tags at least 34 px; question cards 40 px; key-note bullets 36 to 40 px (root decision 58); nothing below 26 px; all text above y = 950. Every stage's main visual (board, graph, wheel, card) is solid from the stage's first frame. Header strip "MATHEMATICS ADVANCED · TRIG MODELS"; scene headings in the hand font, 44 px. Tide window t from 0 to 12 h (ticks every 2) by h from 0 to 8 m; Ferris window t from 0 to 60 s (ticks every 10) by h from 0 to 24 m.

### 1. hook (two readings and a repeating pattern)
> Here are two readings from the tide board at a harbour boat ramp: high tide, seven and a half metres, at time zero, and low tide, one and a half metres, six hours later. The water keeps rising and falling in the same pattern, about twice a day. A quantity that repeats like that is called periodic, and a transformed cos curve can describe **it**. Let's build that curve one feature at a time.

Visual: opens on t02's last frame exactly (t02 Revision 3 scene 15: the painted tide board and ramp `ma12-tide-board-v1` with the water band at 1.5 m; axes t 0 to 12 h and h 0 to 8 m; dots (0, 7.5) "high tide 7.5 m" and (6, 1.5) "low tide 1.5 m"; the readouts "time t: 6 h", "water level h: 1.5 m"; chips "h(t) = ?" and "Next: modelling with trig functions"). The Next chip clears silently as the heading writes on: "Modelling a tide". On "same pattern" (`TideSim`) the cursor runs on from t = 6 to 12 and back round: the water band rises from 1.5 m to 7.5 m and falls again on the board (about 3 s, a full loop) while a faint grey pen traces the height against time as a dotted trail (no formula yet) and the readouts tick ("rising", then "falling"); hand tag "same pattern again". On "it" the chip changes to "periodic: h(t) = k cos(at) + c?" and the `TransformPanel` appears top right with empty slots "k" (amber), "a" (blue), "c" (violet) (grey note "Some sources write a cos(bt) + d").

### 2. midline and amplitude from high and low
> Start with the middle. The water swings as far above its middle level as below it, so the midline is halfway between high and low: seven point five plus one point five, over two, is four point **five**. The amplitude is the distance from the midline up to high tide: seven point five minus one point five, over two, is **three**. So the curve runs from four point five minus three, up to four point five plus three.

Visual: camera continue (board left, graph centre, panel and rows right). Givens card (44 px): "high 7.5 m at t = 0", "low 1.5 m at t = 6". On "five" a violet dashed midline h = 4.5 draws across the graph and across the tide board at the 4.5 m mark (both labelled "midline 4.5", hand tag "middle"); row (52 px) "c = (7.5 + 1.5) ÷ 2 = 4.5" (violet); the "c" slot fills. On "three" amber amplitude bars from the midline up to 7.5 and down to 1.5, on the graph and on the board, each labelled "3" (hand tag "half the gap"); row "k = (7.5 − 1.5) ÷ 2 = 3" (amber); the "k" slot fills; readouts "amplitude 3", "midline 4.5". On the last sentence the bars glow: "4.5 − 3 = 1.5", "4.5 + 3 = 7.5".

### 3. the period, and b
> Now the period. We assume the tide follows a smooth cos-shaped wave, and that these are consecutive tides, so high to low is only half a cycle, and a full cycle, high back to high, takes twelve **hours**. For one cycle, the inside, a times t, has to grow by two pi. So a is two pi divided by twelve, which is pi over **six**. That's the period rule, read backwards: a equals two pi over the period.

Visual: camera continue. As the sentence starts a small grey chip writes "smooth wave, consecutive tides". On "hours" a blue bracket spans t = 0 to 6 labelled "half a cycle" (hand tag), then doubles to t = 0 to 12 labelled "period 12 h"; a hollow ink dot appears at (12, 7.5) labelled "high again", and the board's band runs once more from low back to high. On "six" a twin readout under the t-axis, "t" and "inside at", ticks from 0 to 12 and from 0 to 2π together; row "a = 2π ÷ 12 = π/6" (blue); the "a" slot fills; readout "period 12 h". A grey chip: "period = 2π ÷ a, so a = 2π ÷ period".

### 4. choose the curve: cos starts at its peak
> Which curve should we use? At time zero the water is at its highest, and the cos curve starts at its **peak**. So no slide is needed: h equals three cos of pi t over six, plus four point **five**. Check the other measurement. At t equals six, the inside is pi, cos pi is minus one, and h is minus three plus four point five: one point five, low **tide**. A sine model works too, with plus pi over two inside, which slides it left by three hours, but cos is simpler here.

Visual: camera continue. On "peak" a small grey thumbnail of y = cos x with its peak at 0 ringed sits beside the panel (hand tag "starts at a peak: cos"). On "five" the model curve h = 3cos(πt/6) + 4.5 draws in ink through (0, 7.5) to (12, 7.5) (about 1.5 s) while the cursor runs and the band follows it on the board; the panel reads "h(t) = 3cos(πt/6) + 4.5" in a green frame. On "tide" the dot (6, 1.5) rings with the row "t = 6: inside π, cos π = −1, h = −3 + 4.5 = 1.5" and a green tick; the band sits at 1.5 m. On the last sentence a teal dashed sine curve 3sin(πt/6) + 4.5 appears, slides left by 3 h and lands exactly on the model (the visual surprise; hand tag "left 3 h: same curve"; grey tag "sin(πt/6 + π/2) = sin(π/6 (t + 3))"), then fades.

### 5. use the model: the level after four hours
> Now use the model. What's the water level four hours after high tide? The inside is four pi over six, which is two pi over **three**. Cos of two pi over three is exactly minus a half, so h is minus one point five plus four point five: three **metres**. On the graph, the water is below the midline and still **falling**, as it should be, two hours before low tide.

Visual: worked board (g01 layout) with the board and graph kept at the left: task strip (44 px) "Find h(4)"; givens card "h(t) = 3cos(πt/6) + 4.5", "t in hours, h in metres". The cursor moves to t = 4: the water band falls to 3 m in step on the board; readouts "4 h", "3.0 m", "falling". On "three" (first) row (52 px) "h(4) = 3cos(4π/6) + 4.5 = 3cos(2π/3) + 4.5", and beside it a red slip "3cos 4 + 4.5 ≈ 2.54" writes and is crossed (silent; caption "the inside is πt/6, not t"). On "metres" the green framed answer "h(4) = 3(−½) + 4.5 = 3 m"; the dot (4, 3) rings and the band sits at 3 m on the board. On "falling" a short down-arrow along the curve at t = 4 (hand tag "falling"); a bracket "2 h to low tide" from t = 4 to 6.

### 6. solve: when is the level 5.25 m?
> Harder question: when is the water level five point two five metres, in the first twelve hours? There's one cycle, and the level is between low and high, so expect two **times**. Three cos of pi t over six, plus four point five, equals five point two five, so cos of pi t over six is a **quarter**. A quarter isn't an exact value, so use inverse cos on a calculator, in radians: pi t over six is about one point three one **eight**, and t is about two point five two hours. By symmetry, the other angle is two pi minus that, so t is about nine point four **eight**. So a boat that needs the level at least five and a quarter metres can come in for about the first two and a half hours, and again from about nine and a half **hours**.

Visual: camera continue on the worked board: task strip "When is h = 5.25 m, for 0 ≤ t ≤ 12?" (givens "h = 5.25 m", "0 ≤ t ≤ 12"); the amplitude bars clear. On "times" the amber dashed `LevelLine` at h = 5.25 crosses the curve and a matching amber line marks 5.25 m on the board; counter (52 px) "1 cycle, level inside: expect 2" (hand tag "two times"). On "quarter" rows "3cos(πt/6) + 4.5 = 5.25", "cos(πt/6) = 0.25". On "eight" (first) a grey calculator-style chip "cos⁻¹(0.25) ≈ 1.318 (radians)"; row "πt/6 ≈ 1.318, t ≈ 6 × 1.318 ÷ π ≈ 2.52 h"; the cursor runs to t ≈ 2.52 and the band sits exactly on the 5.25 m line (falling). On "eight" (second) row "πt/6 ≈ 2π − 1.318 ≈ 4.965, t ≈ 9.48 h"; a dotted mirror line at t = 6 (hand tag "symmetry about low tide"); the cursor runs on to t ≈ 9.48 and the band meets the line again (rising). The green framed answer "t ≈ 2.52 h or t ≈ 9.48 h"; beside it a red slip "t ≈ 2.52 only" writes and is crossed (silent; caption "one cycle, level inside: two times"). On "hours" (last) the curve above the level shades light amber on [0, 2.52] and [9.48, 12] (tag "level at least 5.25 m: endpoints approximate"), and the board's band glows when it is above the line.

### 7. a second situation: a turning wheel makes a wave
> Remember the Ferris wheel seat? Here's one with numbers: radius ten metres, its centre twelve metres above the ground, turning once every sixty seconds. Follow one cabin, starting at the **bottom**. As the wheel turns, its height traces a **wave**. Midline twelve, amplitude ten, and period sixty, so a is two pi over sixty, pi over thirty. It starts at the lowest point, so we need the cos curve turned upside down: h equals twelve minus ten cos of pi t over **thirty**. Check: at thirty seconds, h is twenty two, the **top**.

Visual: clear change to the Ferris stage, solid from its first frame: d05's wheel (`ma12-ferris-wheel-stand-v1` with `ma12-ferris-wheel-rim-v1` on the kit's `RotatingPlate`, plain `ma12-ferris-gondola-v1` cabins upright at the rim pivots and the marked `ma12-ferris-gondola-marked-v1` at the bottom) at the left (about 560 px across) with a coded ground line, a coded radius line "radius 10 m" and a height bar "centre 12 m"; the Ferris window (t 0 to 60 s, h 0 to 24 m) at the right; a `LiveReadoutBoard` (52 px) "time t (s)", "cabin height h (m)". On "bottom" the marked cabin gets an amber ring at height 2 m. On "wave" the wheel turns once (about 4 s, constant speed) while a dashed horizontal projector line carries the cabin's height to the graph, which draws the curve in ink (hand tag "turning → wave"). The panel fills on the next sentence: violet midline 12, amber amplitude 10, blue "a = 2π ÷ 60 = π/30". On "thirty" a grey thumbnail of y = −cos x (starting at its lowest point) beside the panel (hand tag "starts at the bottom: −cos"); the panel reads "h(t) = 12 − 10cos(πt/30)" in a green frame; grey chip "k = −10: reflected cos; amplitude 10". On "top" the wheel turns to halfway (the marked cabin at the top) and the point (30, 22) rings with "cos π = −1: h = 12 + 10 = 22".

### 8. an exact solve: when is the cabin 17 m up?
> When is the cabin seventeen metres up, in the first turn? Twelve minus ten cos equals seventeen, so cos of pi t over thirty is minus a **half**. That's an exact value. Cos is minus a half at two pi over three and four pi over **three**, so t is twenty seconds, or forty **seconds**. On the wheel, those are the two moments the cabin passes seventeen metres, once on the way up, and once on the way **down**.

Visual: camera continue; task strip "When is h = 17 m, for 0 ≤ t ≤ 60?" (givens "h = 17 m", "0 ≤ t ≤ 60"); the amber dashed `LevelLine` at h = 17 on the graph and a matching line across the wheel at 17 m (counter "expect 2"). On "half" rows "12 − 10cos(πt/30) = 17", "cos(πt/30) = −½". On "three" row "πt/30 = 2π/3 or 4π/3". On "seconds" the green framed answer "t = 20 s or t = 40 s"; crossings labelled "20" and "40"; beside it a red slip "t = 20 s only" writes and is crossed (silent; caption "twice per turn: up and down"). On "down" the wheel rotates to t = 20 (the marked cabin on the 17 m line, up-arrow) and on to t = 40 (on the line again, down-arrow); hand tag "up, then down".

### 9. memory aid: middle, half, period, start
> Here's a checklist for any periodic model. Middle, half, period, **start**. The midline is the middle of the max and the min. The amplitude is half the gap between them. a is two pi over the period. And the start picks the curve: cos if it starts at a max, minus cos if it starts at a min, and sine if it starts in the middle, going **up**.

Visual: stage change to the framed `MemoryAidCard` (about 1,300 × 620 px, double ink frame, hand-font heading "Memory aid"), with the tide board icon (from the plate, about 160 px tall) at its left edge. On "start" the main line writes large in the hand font, 60 px: "Middle, half, period, start." Then keyed lines (40 px), one per spoken clause: "middle: c = (max + min) ÷ 2" (violet), "half: |k| = (max − min) ÷ 2" (amber), "period: a = 2π ÷ period" (blue), and on "up" "start: max → cos, min → −cos, middle rising → sin" with three tiny coded curve icons, each with a dot at its start. Hold about 2 s.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. In a coastal town, the longest day has fourteen and a half hours of daylight, and the shortest day, six months later, has nine and a half. Assume a sinusoidal pattern, with these as consecutive extremes. Let t be the number of months after the longest day, and model the daylight hours as D equals k cos a t, plus c. Find k, a and c, then find D when t equals two. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "In a coastal town, the longest day has 14.5 hours of daylight. The shortest day, 6 months later, has 9.5 hours. Let t be the number of months after the longest day, and model the daylight hours as D = k cos(at) + c. Assume a sinusoidal pattern whose longest and shortest days are consecutive extremes. (i) Find k, a and c. (ii) Find D when t = 2." The full question stays on screen. Picture slot: t02's skyline strip with the sun (about 380 px wide; no graph, no values). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 11. feedback 1 (brief)
> The midline c is the middle of fourteen and a half and nine and a half: **twelve**. The amplitude k is half the gap: two point **five**. Six months is half a cycle, so the period is twelve months and a is pi over **six**. At t equals two, cos of pi over three is a half, so D is twelve plus one point two five: thirteen point two five **hours**. An amplitude of five uses the whole gap, not **half**.

Visual: the card shrinks to the top (30 px). `GivensStrip` (44 px): "max 14.5 h", "min 9.5 h", "6 months apart". On "twelve" "14.5" and "9.5" underlined; row (52 px) "c = (14.5 + 9.5) ÷ 2 = 12" (violet). On "five" row "k = (14.5 − 9.5) ÷ 2 = 2.5" (amber). On "six" "6 months later" underlined; row "6 months = half a cycle, so period 12 months, a = 2π ÷ 12 = π/6" (blue). On "hours" "t = 2" underlined; the green framed answer "k = 2.5, a = π/6, c = 12; D(2) = 2.5cos(π/3) + 12 = 13.25 hours"; a thumbnail of the curve with (2, 13.25) marked. On "half" a red slip "k = 5" writes and is crossed (caption "half the gap"). Hold about 1 s.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. A buoy's height, in metres, is h equals one point five sine of pi t over eight, plus three, where t is in seconds. Find the first two times after t equals zero when h is three point seven five. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "The height of a buoy is h(t) = 1.5 sin(πt/8) + 3 metres, where t is the time in seconds. Find the first two times t > 0 at which h = 3.75 m." The full question stays on screen. Picture slot: t01's yellow marker buoy (`ma12-marker-buoy-v1`, about 300 px tall) on a short coded water line (no graph). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 13. feedback 2 (brief)
> One point five sine of pi t over eight is point seven **five**, so sine of pi t over eight is a **half**. Sine is a half at pi over six and five pi over **six**. Multiply by eight over pi: t is four thirds of a second, and twenty thirds of a **second**. Pi over six is the angle inside, not the **time**.

Visual: the card shrinks to the top. `GivensStrip`: "h = 1.5 sin(πt/8) + 3", "h = 3.75 m", "t > 0". On "five" "3.75" and "+ 3" underlined; row (52 px) "1.5 sin(πt/8) = 0.75". On "half" row "sin(πt/8) = ½". On "six" row "πt/8 = π/6 or 5π/6" (thumbnail: sine curve with the amber level ½ and two dots). On "second" the green framed answer "t = 8/6 = 4/3 s or t = 40/6 = 20/3 s" (grey "≈ 1.33, ≈ 6.67"); the buoy picture bobs to the level twice. On "time" a red slip "t = π/6" writes and is crossed (caption "that's πt/8, not t"). Hold about 1 s.

### 14. handoff
> So a periodic model needs a midline, an amplitude, a period and a starting point. The water level only ranges from one and a half to seven and a half metres, so an ordinary axis shows it well. Next, quantities that range over many powers of ten. Here's a phone's storage: a text message, a photo, a film and the whole phone, on one ordinary ruler. Can you even see the **text**?

Visual: the memory card shows small at the top, then fades on "Next". The tide graph shows small first, its h-axis 0 to 8 bracketed "fits easily". Board clears to the storage stage (t04's anchor), solid from its first frame: the painted phone `ma12-phone-v1.png` (d03's plate, about 520 px tall) at the left, its screen showing a coded storage bar "256 GB" (ink) with a few coded file rows; at the right a long linear ruler (about 1,200 px) "file size (bytes)" from 0 to 256 GB with ticks every 50 GB (labels "0", "50 GB", ... "250 GB"). On "text message" a point labelled "text message ≈ 1 kB" drops onto 0; on "a photo" "photo ≈ 3 MB" drops onto 0 on top of it; on "a film" "film ≈ 4 GB" lands near the left (about 1.6% of the way across); on "whole phone" "whole phone 256 GB" sits at the right end. On "text" a zoom ring at 0 shows the text and photo points piled on the zero tick (hand tag "can't tell them apart") and a chip "one ruler for all of them?". Chip: "Next: logarithmic scales". Hold about 2 s. This is t04's opening frame; scene 15 returns to it silently after the notes.

### 15. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 36 to 40 px in the left 58 to 60 per cent of the screen, each one line, colour roles kept; the framed memory card on the right, with nothing past its edge and no bullet below 34 px (root decision 58).
> Here are the key notes. Pause the video if you need more time to copy them.

- Midline c = (max + min) ÷ 2.
- Amplitude |k| = (max − min) ÷ 2.
- a = 2π ÷ period.
- Start: max → cos, min → −cos, middle rising → sin.
- Solve: count first; inverse trig in radians; t = angle ÷ a.

Memory aid (framed card, right half of the notes screen, as in scene 9): *Middle, half, period, start.* Small grey line under the card: *Assumes a smooth sinusoid with consecutive extremes. Some sources write a cos(bt) + d.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades (1 s) back to scene 14's frame exactly (the phone, the linear storage ruler with its four points, the zoom ring and the chips). This is the final frame and t04's opening frame.

## Teaching checks

- **Does it explain causes?** Why the midline is the average: equal swings above and below (2). Why the amplitude is half the gap: the gap is two amplitudes (2). Why a = 2π/12: the inside must grow by 2π per cycle (3). Why cos: it starts at its peak, as the tide does (4); why −cos for the wheel: a bottom start (7). Why two times: one cycle and the level inside the range (6, 8). Why a wheel gives a wave: the projected height of a turning point (7).
- **Misconceptions addressed:** the eight listed under Decisions (scenes 2 to 8; feedback 1 and 2, crossed; key notes 1 to 3).
- **One idea at a time:** one parameter per spoken step (2 to 4, panel slots); one question per scene (5, 6, 8); rows dim as the next starts.
- **Video makes it easier:** the water band on the painted board moves with the time cursor on the graph (1 to 6); midline and amplitude appear on the board and the graph together (2); the turning wheel projects its cabin's height onto the graph (7); the cabin passes 17 m twice (8).
- **Response opportunity:** two HSC-style tasks with every condition on the card (A1 states the cos form and the meaning of t; A2 the full model and t > 0), 10 seconds each, nothing answer-bearing; one crossed mistake each; feedback about 27 s and 22 s.
- **Avoided double teaching:** t01's transformations and t02's counting and symmetry are used, not re-taught (one clause each).
- **Syllabus coverage:** `ci50d9af52` (two periodic phenomena modelled with transformations of cos; solved without calculus); `ci5f2b7245` (practical problems with transformed functions, graphical and algebraic, here for trig models; partial, open decision 2).
- **Out of scope by design:** calculus of models, tan models, regression, non-trig practical models.

- **Visual standard (`../maths-visual-standard.md`, Revision 3), item by item:** 1 anchor from the first frame (the tide board at the boat ramp, live), present in every tide scene (1 to 6) and as the memory card's icon; 2 a new stage every 30 to 85 s (stage plan under "Scene list and build ids"); 3 three simulations with live readouts (`TideSim`, the filling panel, the Ferris projector); 4 fixed colour roles; 5 52 px current lines and readouts, 26 px floor; 6 hand tags in the role colours; 7 worked boards in the g01 layout with green framed answers and crossed slips; 8 framed memory card and five one-line key notes; 9 the surprise shown happening (the sine model sliding onto the cos model; the band meeting the 5.25 m line twice).

## Practice questions and model answers

**Attempt 1 (scene 10; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "In a coastal town, the longest day has 14.5 hours of daylight. The shortest day, 6 months later, has 9.5 hours. Let t be the number of months after the longest day, and model the daylight hours as D = k cos(at) + c. Assume a sinusoidal pattern whose longest and shortest days are consecutive extremes. (i) Find k, a and c. (ii) Find D when t = 2."
Model answer: (i) c = (14.5 + 9.5)/2 = 12; k = (14.5 − 9.5)/2 = 2.5; 6 months is half a cycle, so the period is 12 months and a = 2π/12 = π/6. (ii) D(2) = 2.5cos(π/3) + 12 = 13.25 hours. Classic mistake (crossed): k = 5 (the whole gap).

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

**Revision 3 additions (recalculated in Python, 7 Nov):**

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Silent slip (5) | 3cos 4 + 4.5 ≈ 2.539 (radians, inside t instead of πt/6) | 5 |
| Cursor stops (6) | t ≈ 2.517 h (falling) and t ≈ 9.483 h (rising); h = 5.25 at both | 6 |
| Handoff storage (decimal prefixes) | text message ≈ 1 kB = 10³ B; photo ≈ 3 MB = 3 × 10⁶ B; film ≈ 4 GB = 4 × 10⁹ B (≈ 1.56% of 256 GB); whole phone 256 GB = 2.56 × 10¹¹ B; ruler 0 to 256 GB, ticks every 50 GB | 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy (2 Nov); Codex to re-check.

- 3cos(πt/6) + 9/2 at t = 0, 4, 6, 12: 15/2, 3, 3/2, 15/2. 3sin(πt/6 + π/2) + 9/2 − h(t) = 0 identically.
- 3cos(πt/6) + 9/2 = 21/4 on [0, 12]: t = 2.5174163, 9.4825837; cos⁻¹(1/4) = 1.3181161; 2π − cos⁻¹(1/4) = 4.9650692.
- 12 − 10cos(πt/30) at t = 0, 15, 30, 45, 60: 2, 12, 22, 12, 2. = 17 on [0, 60]: t = 20, 40.
- 2.5cos(πt/6) + 12 at t = 0, 2, 6: 14.5, 13.25, 9.5.
- 1.5sin(πt/8) + 3 = 3.75 on [0, 16]: t = 4/3, 20/3; period 16; max 4.5, min 1.5.
- Intensities: 10^(L/10 − 12) for L = 30, 85, 95: 10⁻⁹, 3.162×10⁻⁴, 3.162×10⁻³.

- Revision 3: 3cos(4) + 4.5 = 2.5390 (slip); 4/256 = 0.015625; 3 × 10⁶ / 2.56 × 10¹¹ = 1.17 × 10⁻⁵; 10³ / 2.56 × 10¹¹ = 3.9 × 10⁻⁹ (both on the zero tick at ruler scale).

## Memory aid check

- **"Middle, half, period, start."** Meaning: midline = middle of max and min; amplitude = half the gap; a = 2π ÷ period; the starting state picks cos, −cos or sin. Assumptions checked: the quantity is sinusoidal with a known max, min and period (stated in scene 1's "same pattern" and in every card); "start" assumes t = 0 is at a max, a min, or the midline going up; other starts need a horizontal translation (key note 2), which this video names but does not drill (a sine with a time shift in scene 4). It helps a new case: attempt 1 (daylight). Introduced after both contexts.
- **Considered, not used:** the site's "Amplitude and midline first" (kept as the order, not as a slogan).

## Narration length estimate

**Revision 3 (7 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " inside the scene, joined with a space, bold markers removed; the total is the sum of the scene strings): 5,678 characters**, 15 scenes. Characters per scene (1 to 15): 389, 407, 390, 458, 352, 713, 511, 391, 332, 397, 380, 225, 284, 374, 75.

At 13.3 characters per second the speech outside the notes scene (5,603 characters) is about 421 s. Holds and settling: two 10 s countdowns (20 s); the memory-card hold (2 s); two feedback holds (2 s); the handoff hold (2 s); settling for the tide loop (1), the half-cycle run (3), the curve draw and the sine slide (4), the cursor moves (5, 6), the wheel turn (7) and the two stops (8), about 20 s in all; the key-notes scene fixed at 45 s. Total **about 514 s**, under the 570 s cap with about 56 s spare. Feedback: scene 11 about 30 s and scene 13 about 22 s (including the 1 s holds).

Reserve trims if the voiced take runs long (in order): scene 4's last sentence (keep the sliding ghost silent; about 9 s); scene 6's last sentence (keep the shading; about 12 s); scene 1's last sentence (about 3 s). Do not cut below 5,500 characters without replacing content.

Earlier counts (kept for the record):

Revision 1 count (2 Nov; by script `count_tgraphs.py`, build parser rules): **5,520 characters** (5,534 with the joining spaces), 15 scenes. **Revision 2 (3 Nov): 5,722 characters** (5,736 with the joining spaces), 15 scenes; per scene: 365, 407, 390, 458, 352, 713, 580, 391, 332, 397, 380, 225, 284, 373, 75. About 430 s of speech plus about 105 s of holds and settling: **about 535 s**, under the 570 s cap. Characters per scene (1 to 15): 392, 407, 303, 454, 346, 705, 574, 385, 332, 332, 345, 223, 274, 373, 75. At 13.3 characters per second the speech is about 415 s; add about 20 s of settling time (the tide loop in 1, the curve draw in 4, the cursor moves in 5 and 6, the wheel turn in 7 and the two stops in 8), 20 s for two countdowns, about 5 s of short holds (scenes 9, 11, 13, 14) and about 60 s more of the quiet notes hold (about 105 s of holds): **about 520 s**, inside the 5,500 to 6,800 character band (just above the floor; the content is complete and nothing is padded) and under the 570 s cap. Scene 6 is the longest; the calculator chip must appear before "and t is about". Reserve trims if the voiced take runs long: scene 4's last sentence (keep the sliding ghost silent); scene 6's last sentence (keep the shading); scene 1's last sentence. Any trim takes the count below 5,500; root decides whether a slightly short video is preferred.

## Scene list and build ids

Lesson key `m-a12t03` (route math-a12-t03, draft). Suggested explainer folder `src/explainer/lessons/math-a12-t03` and build folder `docs/production/claude-pm/lessons/m-a12t03`.

In order (kebab-case; 15 scene headings): hook, midline-amplitude, period-b, choose-cos, evaluate, solve-tide, ferris-model, ferris-solve, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (seconds from the per-scene estimate):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 132 s | 1 to 4 | Tide board and graph (`TideSim`): the band loops, the panel fills, the curve draws, the sine model slides onto it |
| 132 to 218 s | 5, 6 | Worked board beside the board and graph: h(4), then the 5.25 m solve with the cursor visiting both times |
| 218 to 293 s | 7, 8 | Ferris callback: d05's wheel turns and projects a wave; the 17 m solve |
| 293 to 319 s | 9 | Framed memory card |
| 319 to 438 s | 10 to 13 | Question cards with pictures (skyline and sun; buoy), countdowns, framed answers and crossed slips |
| 438 to 469 s | 14 | Handoff: the phone and the linear storage ruler |
| 469 to 514 s | 15 | Key notes with the framed card (45 s) |

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`: five bullets and the card). Transitions: t02's last frame continues into scene 1 (camera continue, same board and axes); 1 to 4 camera continue (panel fills, curve draws, sine ghost slides); 4 to 5 clear change to the worked board (board and graph kept left); 5 to 6 camera continue; 6 to 7 clear change (wheel); 7 to 8 camera continue; 8 to 9 clear change to the card; attempts and feedback card shrink to the top; 13 to 14 board clear; 14 to 15 fade to the notes board; 15 cross-fades back to 14's frame.

Holds: attempt-1, attempt-2 (10 s countdown). key-notes is the quiet notes hold, fixed at 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a12t03-learning-review.md`, `science_check` = `checks/m-a12t03-maths-check.md`.

## Assets

Inspected before choosing (7 Nov, actual appearance): `public/assets/physics/phys-y11-boat-top-v1.png` (a motor boat from above: does not show a level, not used); `biology/m7-village-water-tank-v1.png` (a corrugated rainwater tank: wrong context); no tide board, ramp or harbour plate exists in `public/assets/` (the only harbour image, `hscscience/chem-y11-m3/l7/l7HookHarbourBridge.png`, is an unrelated chemistry hook). d05's Ferris plates (briefed, root decision 8) are reused so that the wheel stays d05's meaning.

Have (reused): d05's `ma12-ferris-wheel-rim-v1.png`, `ma12-ferris-wheel-stand-v1.png`, `ma12-ferris-gondola-v1.png`, `ma12-ferris-gondola-marked-v1.png` (scenes 7, 8; painted for d05); t02's `ma12-city-skyline-strip-v1.png` with `phys-y11-sun-v1.png` (A1 picture); t01's `ma12-marker-buoy-v1.png` (A2 picture); d03's `ma12-phone-v1.png` (scene 14 and the final frame).

Need (painted, new; see the Codex asset brief): `ma12-tide-board-v1.png` (also t02's final frame, so paint before t02's build).

Coded (studio kit): the water band and its 5.25 m line, graphs and axes, the transform panel, feature marks, the projector line and ground line, readout boards, worked boards, question cards, countdown, hand tags, framed card, key notes, the phone's storage bar and the linear ruler.

### Studio kit use and additions

Existing studio parts: `FunctionSimulator` (with t01's draw-as-you-go clip), `RotatingPlate` (cabins upright), `ContainerFill`-style level fill against a plate (decision 32's "level fill against a plate", here a band on the board), `PlateReadout`, `LiveReadoutBoard`, `HandTag`, `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`, `GivensStrip`, `Role`; t01's studio `TransformPanel` (slots k, a, c with "h(t)" in place of "y") and `FeatureMarks`; t02's studio `LevelLine`.

Additions: **`TideSim`** (lesson-local): one time cursor drives the band on the board (from the plate's measured 0 m and 8 m marks), the graph dot and pen, and the readouts; **a projector mode for `RotatingPlate`** (a dashed horizontal line from a marked sprite to the graph point (t, h(t)), with the validation that the sprite's height above the coded ground line equals h(t) within 1 px at 101 sample times). The Revision 2 `RotationProjector` request is replaced by this mode.

## Codex asset brief (Maths A12 T03, a tide board at a boat ramp)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a12-t03.md`, route entry math-a12-t03 (draft). Paint after the learning review and maths check pass and root gives the go-ahead. **Paint this plate before t02's build** (it is in t02's final frame). Save to `public/assets/maths/` (this replaces the Revision 2 name `m-a12-tide-board-v1.png`). Every plate: **transparent PNG with a true alpha channel** and clean edges with no coloured fringe or halo (check on a black and a white background); ink and watercolour in the house style, matched in palette to t01's surf-beach strip; at least 8 per cent clear margin; no text, letters, logos, brand names, people, hands, faces, birds, boats, sky, water, glow or ground shadow. Never stretch to fit; keep the native aspect ratio.

1. `ma12-tide-board-v1.png` (1200 × 2400 px): a harbour tide board, front-on: a tall white-painted measuring board with black metre markings, **numerals 0 to 8 at each metre and short ticks at each half metre (the numerals are the only characters allowed)**, bolted to a weathered timber pier pile that runs from the bottom edge to above the 8 m mark, with a few barnacles and a green weed line low on the pile. At the bottom left, the lower end of a concrete boat ramp slopes down towards the pile (a plain grey ramp edge with faint grooves), so the board reads as standing at the foot of a ramp. **No water**: the water band is drawn in code in front of the lower part of the board. The metre marks must be straight, level and evenly spaced: **report the pixel rows of the 0 m and 8 m marks** and of each whole metre (code aligns the band to them; ±2 px).

d05's four Ferris plates are reused unchanged. If d05's stand places the axle more or less than 1.2 rim radii above its base, report it: code then draws the coded ground line 1.2 radii below the hub and never stretches the plate (root note under "Open decisions").

Report inspection on the paper background (`#f6f1e7`) at 300 px and 800 px tall, with a translucent test band placed by hand at the 1.5 m and 7.5 m marks, plus the alpha check and the mark rows. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma12-t03-provenance.json`.

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

10. Revision 3: confirm the tide board's band is driven by the same h(t) as the graph at every cue (1 to 6); the silent slips (3cos 4 + 4.5 ≈ 2.54; "t ≈ 2.52 only"; "t = 20 s only") and their captions; that the Ferris scenes use d05's plates with the site's numbers unchanged and no rider; that A1's and A2's pictures (skyline and sun; the buoy) give nothing away; the storage values in scene 14 (decimal prefixes); the colour roles (k amber, a blue, c violet, b teal; the level line amber only after the amplitude bars clear; green only on answers; red only on crossed slips); five one-line key notes and a 1,350-frame notes scene; and that the opening frame equals t02 Revision 3's scene 15 and the final frame equals scene 14 here (t04's opening).

## YouTube metadata (draft)

Title: Modelling Tides and Ferris Wheels with Trig Functions | Year 12 Maths Advanced

(Title length: 79 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/further-graph-transformations-and-modelling/lesson02.sa.html

The tide board at a harbour boat ramp reads 7.5 m at high tide (time zero) and 1.5 m at low tide six hours later. From just those readings, build a trig model of an idealised harbour: the midline is the middle, the amplitude is half the gap, a comes from the period, and the starting point picks cos, minus cos or sine. Use it to find the level after 4 hours, and the two times the level is 5.25 m (with inverse cos in radians). Then watch the Ferris wheel from the sine and cosine videos trace a wave, model a cabin's height, and find when it is 17 m up. Memory aid: middle, half, period, start. Two exam-style questions at the end.

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
- **5. "pi t over six" spoken form (resolved).** Root decision 22 (3 Nov): series form "over" for every spoken fraction; applied in Revision 2. The voice pilot still checks it.

- **Revision 3 (root).** (a) The anchor is the site's tide, on a painted tide board at a harbour boat ramp (one new plate, renamed `ma12-tide-board-v1`, needed first for t02's final frame). (b) The Ferris wheel reuses d05's four plates as a callback; the Revision 2 two-layer Ferris plates and open decision 1's coded fallback are withdrawn. If d05's stand height does not match 1.2 rim radii, root accepts a coded ground line at 1.2 radii (the plate is never stretched). (c) Open decision 3 (boat outline) is closed: the band and the 5.25 m line on the board carry the boat-ramp question; no boat is drawn. (d) The handoff now poses t04's phone-storage question; the factory and decibels move inside t04.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from t01 and t02; check that the board and graph moving together make "model" concrete; that scene 3's "inside grows by 2π" is followable; that scene 6's calculator step is clear without slowing (radians said aloud); that the wheel projection reads as the reason for a wave; that the attempt cards are fair at 10 s, especially A1's two parts), then the Codex maths check and error check.
- The water band, the cursor, the wheel and the projector carry the explanation; judge them at playback speed. The band and the cabin ring must be driven by the same h(t) as the graph.
- t04 opens on scene 14's frame.
- **Revision 2 (3 Nov), brief 153 repairs.** Maths check (3 should fix) and learning review (same three): (1) the tide inference now states in scene 3 that the tide follows a smooth cos-shaped wave and that the high and low are consecutive (the scene 1 phrase "from just these two facts" is cut to fund part of it); attempt 1 now says the longest and shortest days are consecutive extremes of a sinusoidal pattern (speech, card, model answer), and feedback 1 says six months is half a cycle; (2) the opening frame now includes t02's "Next: modelling with trig functions" chip, cleared silently with the heading; (3) scene 6 now says "at least" with approximate endpoints shown with "≈" (the ≥ shading tag and the key interpretation agree). Root decisions 21 (k cos(at) + c, slots k, a, c, grey note "Some sources write a cos(bt) + d", attempt parts relabelled (i) and (ii) so they do not clash with the letter a) and 22 ("over" for every spoken fraction) applied. Partial coverage of `ci5f2b7245` and the non-trig attempt stay with the practice video (root decision 23). The final frame (scene 14) is unchanged, so t04 needs only its own edits.

- **Revision 3 (7 Nov).** Not reviewed. The learning review should check that the board and graph moving together make "model" concrete; that the sine model landing on the cos model reads as "same curve, different equation"; that the Ferris callback is quick and clear for a student who saw d05; and that the phone-storage handoff sets up t04 without needing decibels. t04 opens on scene 14's new frame.

## Revision 3 (7 Nov 2026)

Redesign to `../maths-visual-standard.md` on the d01 Revision 6 pattern, with an everyday anchor (owner rule, 7 Nov).

- **Anchor:** the tide board at a harbour boat ramp, carrying the site's tide (7.5 m and 1.5 m, 12-hour period) with a coded water band that moves with the graph's time cursor. Chosen because tides are an everyday periodic quantity, the tide is the site's own worked example, and a boat ramp makes the 5.25 m level a real decision. The Ferris wheel stays as a brief callback to d05 on d05's plates.
- **Simulations:** (1) `TideSim`: one cursor drives the band on the board, the graph pen and live time, level and rising/falling readouts; (2) the transform panel filling slot by slot with feature readouts; (3) the Ferris wheel turning on `RotatingPlate` with a projector line drawing the cabin's height.
- **Colour roles:** k amber, a blue, c violet, b teal; model curve ink; water band a pale sea tint; level line amber (after the amplitude bars clear); answers green; mistakes red.
- **Plates:** new `ma12-tide-board-v1` (board, pile and ramp foot); reused d05's four Ferris plates, t02's skyline strip and sun (A1), t01's buoy (A2) and d03's phone (handoff). The Revision 2 Ferris two-layer plates are withdrawn.
- **Narration changes:** scene 1 names the boat ramp's tide board; scene 7 opens as a d05 callback and is shorter; scene 14 is the new phone-storage handoff. All other scenes keep their Revision 2 text.
- **Counts:** 5,722 characters, about 535 s (Revision 2, 60 s notes hold) → **5,678 characters, about 514 s** (45 s notes scene).
- **Key notes:** four long notes → five one-line bullets with the framed card (the modelling assumptions stay in the card's grey line).
- **Kit additions:** the lesson-local `TideSim` and a projector mode for `RotatingPlate`; uses t01's `TransformPanel`, `FeatureMarks` and draw-as-you-go clip and t02's `LevelLine`.
- **Joins:** opens on t02 Revision 3's final frame (unchanged in content, the plate renamed); ends on the new phone-storage frame that t04 Revision 3 opens on.
