# Maths A12 T02: How do graphs locate every trig solution in a stated domain? Crossings with a horizontal line, the shifted u-window, counting cycles, closed endpoints and tan branches (design)

Status: Revision 3 (7 Nov 2026): redesign to maths-visual-standard.md (d01 Revision 6 pattern, everyday anchor). Needs Codex learning review and maths check before voicing.

Previously Revision 2 (3 Nov): brief 153 repairs applied (scene 5 "twice per cycle" scoped and pointed at the next scene's closed ends; scene 8 "one crossing on each complete branch"; numbers-table scene references corrected; syllabus notation u = a(x + b) per root decision 21; spoken "pi over six" style per root decision 22). Needs a Codex error check. Voicing gated by the brief 124 Google voice pilot. Build uses the brief 129 kit with the d01 addendum and the brief 131, 133, 135 and 143 additions (`FunctionGraph` with `transform`, `domain` endpoint markers, `asymptotes`, `radianTicks`; `DomainStrip` with `heading` and `markerLabels`; `ReadoutPanel.rows`; `AlignedAlgebra`) and t01's requested parts (`transform.yShift`, carried asymptotes, `TransformPanel`, `FeatureMarks`); see "Assets" for two new parts and one painted plate shared with t03. Nothing recorded; human listening pending.

Narration 6,023 characters (sum of the 16 scene strings), 16 scene headings, about 539 s with holds (the key-notes scene fixed at 45 s), counted by script with the build parser rules (see "Narration length estimate"). Not voiced (no `math-a12-t02/` folder and no `measured/lesson.json`), so narration is rewritten freely where the bar needs it. Revision 2 was 5,664; Revision 1 was 5,499. Nothing recorded; human listening pending.

Scope: second video of the Year 12 Mathematics Advanced trig graphs and modelling strand (course outline playlist order 21; production order after t01). Templates: `math-a12-d05.md` and `math-a12-i05.md` (Revision 2), and the t01 design (Revision 1, written just before this one, whose scene 14 is this video's first frame). All maths visuals are coded. No pre-design pack exists: this design does the pack work. Site lesson read in full (2 Nov, read-only): `C:/Users/kygs/hscscience/subjects/maths-advanced/year12/further-graph-transformations-and-modelling/lesson01.sa.html`, SHA256 `e5b283c0d081397e3b156bdd31d6958d0280be5dfabd856746b8830ad4e19635`. Sections used: `solve-and-consolidate` card 08 (its worked example 2sin(x − π/6) = 1 kept exactly as the main case), worked Problem 3 (2cos(x − π/4) = √2, kept exactly as the closed-endpoint case), SA 3 (attempt 1, kept exactly). Also lesson 2 card 06 (`compare-model-approaches`, SHA256 `8ead7b9aeca247ad96b3abba7ba7691f8b7eadc7c2f4ebd65ccd0f76202e2c09`): "sketch first to count, then algebra", and its touch-at-the-peak case (one solution per period) as the idea for scene 5.

Owner rules applied: as t01 (new 2024 syllabus only; codenames and exact wording; coded maths; no people; one reasoning stage at a time; task, equation and grouped givens separated; "Pause here to answer." with a 10 s countdown and the full worded question on screen; givens underlined in feedback; brief feedback with one crossed mistake; optional key notes; Australian spelling; no em dashes; causes before rules). Root decisions applied: exact values in the algebra, decimals only in grey graphing readouts beside their exact forms (scene 9); domain conditions kept on every card and every answer line (closed endpoints shown as filled dots); radians on every window; attempt cards give no solution count, window or value; spoken "next" true in production order.

Syllabus content point (Mathematics Advanced 11-12 (2024), Year 12, focus area "Further graph transformations and modelling"; NESA content-system codename, official `code` field empty), quoted from `docs/production/programme/syllabus/maths-advanced-2024-y12-crosswalk.json` in linear form:

- `ci220f8799`: "Solve equations and graphical problems involving transformations of the trigonometric functions f(x) = sin x, f(x) = cos x or f(x) = tan x, using graphing applications or otherwise, within a specified domain"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa3b2bda67

**Boundary:** starts from t01 Revision 3's last frame (a city's daylight over one year, D = 12 + 2sin(x − π/6) hours on 0 ≤ x ≤ 2π, the line D = 13, the skyline and sun, chip "13 hours of daylight: which days?"; Revision 2 opened on y = 2sin(x − π/6) and y = 1, which scene 2 now reaches by subtracting 12). Teaches: solutions as crossings inside the domain; isolating the ratio (a vertical dilation of both sides keeps the crossing x-values); the substitution u = a(x + b) with its window found by doing to the domain what is done to x; every u in the window by symmetry and periodicity; back-substitution; counting cycles and the position of the line before solving (two, one or no crossings per cycle); closed endpoints; tan's one crossing on each complete branch and its excluded asymptotes; checking with a graphing application (grey decimals). Stops at exact-value equations of transformed sin, cos and tan in a stated domain. Not taught: non-exact values with inverse trig on a calculator (t03, the tide), modelling contexts (t03), quadratic-in-sin equations or identities (not in this strand's route), general solutions over all reals.

## Decisions

### Revision 3 redesign (7 Nov 2026; these bullets override older bullets below where they conflict)

- **Anchor: a city's daylight over one year (painted plates, live).** D = 12 + 2sin(x − π/6) hours, where x runs through one year as an angle (a whole year is 2π, and x = 0 is about 24 August). An idealised east-coast Australian city has 10 hours of daylight on its shortest day (about 24 June, x = 5π/3) and 14 on its longest (about 24 December, x = 2π/3). The site's own case, 2sin(x − π/6) = 1 on 0 ≤ x ≤ 2π, is exactly "on which days is there 13 hours of daylight?" (subtract 12 from both sides), so the anchor carries the site's numbers unchanged and gives every idea of the lesson an everyday meaning: two crossings are two days a year, late October and late February (the calculator gives one); the line at 14 hours touches once, on the longest day; no day has 14 and a half hours; and on the closed domain both ends are the same date a year apart, which is why 11 hours is reached three times in scene 7. Chosen because daylight is everyday for every student, it is not a context in `checks/root-decisions-maths-redesign.md`, and "when is the daylight exactly 12 hours?" style questions are the natural "every solution in a domain" question. The site's other examples (2sin 2x = √3, Problem 3, tan 2x = 1) stay abstract, with the anchor recalled in a clause where it helps.
- **Idealising assumptions (author notes, not learner copy).** (i) The model is a pure sinusoid with a 12-hour midline; real day length is slightly asymmetric, its average is a little over 12 hours (refraction and the definition of sunrise), and the seasons are unequal in length. (ii) The amplitude of 2 hours fits a city near latitude 30 to 32° S (Sydney's is about 2.3 hours). (iii) Dates come from x/(2π) × 365 days after 24 August and are shown as "about" dates; the model's longest day (about 24 December) is two to three days after the real solstice, and its autumn equinox (about 25 March) about five days after the real one. Only "late October", "late February", "the longest day" and "the same date a year apart" are spoken.
- **Simulations (standard item 3).**
  1. **`DaySim`** (lesson-local, on the kit; scenes 1, 5, 7, 15): a date cursor runs through the year; above the painted skyline the reused sun moves along a coded dashed day-arc whose length follows D, so long summer arcs and short winter arcs are seen; a `LiveReadoutBoard` (52 px) reads "date" and "daylight D (h)"; the graph draws as the cursor runs (draw-as-you-go, t01's kit addition).
  2. **`LevelLine` sweep with a crossing counter** (scenes 5, 7): the amber level line slides up and down the graph; the counter (52 px) and the matching days on a coded month strip light as crossings appear and vanish; in scene 7 a y-axis strip records the count for each k.
  3. **`WindowMap`** (scenes 3, 4, 6, 8, feedback): the x-domain strip slides and stretches into the teal u-window over the plain curve; solution dots slide back onto the main graph, with live endpoint labels.
- **Visual surprise (standard item 9).** The calculator returns one angle while the sun's arc shows two different days with 13 hours (1); in scene 6 three solutions sit in one cycle because both closed ends land on the line; in scene 7 the counter jumps from 2 to 3 at k = −1 because both ends of the year are the same date.
- **Colour roles (t01 to t03 strand; listed under "Script and shots").** The curve ink; the level line (the right-hand side) amber; the inside u and its window teal (b's colour from t01, the horizontal translation); the x-domain strip ink with filled dots for included ends; solution dots ink and final answers green; out-of-window values grey hollow, crossed red only when offered as a slip; asymptotes dashed grey; the crossing counter amber.
- **Large type, hand tags, stage changes.** As t01: 52 px current lines and readouts, 44 px strips and givens, 30 px floor for supporting lines, 34 px hand tags, 40 px cards and key notes, nothing below 26 px. `HandTag`s: "two days, one calculator angle", "same x", "symmetry", "+ 2π", "up once, down once", "longest day: touch", "ends included", "same date, a year apart", "tan repeats every π", "undo". Stages, each change within about 25 to 85 s: the daylight stage (1, 2); the window map (3); the second worked board (4); the daylight sweep (5); closed ends (6); the k sweep (7); the tan board (8); the graphing check (9); the framed card (10); question cards with pictures (11 to 14); the tide handoff (15); key notes (16).
- **Worked examples and feedback (g01 layout).** Every worked case has a task strip, an equation strip, a givens card with the domain, rows at 52 px, a green framed answer and one red crossed slip (scene 3: the grey out-of-window values crossed; 4: "x = π/6, π/3 only"; 6: "x = π/2 and 2π only", silent, caption "u = −π/4 is in the window too"; 7: none, the counter carries it; 8: "x = π/8 only", silent, caption "tan repeats every π"). Feedback scenes carry a `GivensStrip`, a framed answer and one crossed slip.
- **Question cards (build gate).** Full question at 40 px plus a picture that gives nothing away: the kit `IntervalPicture` of each card's own domain (A1: 0 ≤ x ≤ 2π; A2: −2π ≤ x ≤ 2π), closed ends filled, with no window, count or value.
- **Memory aid (standard item 8).** Framed `MemoryAidCard`: "Do to the domain what you do to x." with keyed lines "slide: subtract from both ends" (teal), "stretch: multiply both ends" (teal) and "Count first, then solve." Key notes are five short one-line bullets beside it; the notes scene is 45 s (1,350 frames).
- **Joins.** Opens on t01 Revision 3's new final frame (the daylight question). Ends on the tide frame t03 opens on (unchanged in content; the plate is renamed `ma12-tide-board-v1` and now shows a boat ramp beside the board, briefed in t03).
- **Narration (not voiced).** Scene 1 is the daylight hook; scene 2 subtracts 12 before halving; scene 3 adds the dates' meaning; scene 4 adds "like two years of daylight"; scene 5 runs on the daylight graph (14 hours: the longest day; 14 and a half: none); scene 7 adds "the same date, a year apart"; scene 15 names the boat ramp. Scenes 6, 8 to 14 and 16 keep their Revision 2 text.

### Revision 1 and 2 decisions (kept where not overridden above)

- **Learner question kept (course outline).** "How do graphs locate every trig solution in a stated domain?" The answer, built in order: every solution is the x-value of a crossing of the curve and a horizontal line, inside the domain; the substitution u = a(x + b) turns the curve back into the plain sin, cos or tan curve on a moved and stretched window; the number of cycles in that window and the height of the line say how many crossings to expect; closed endpoints can add one; tan has one crossing on each complete branch.
- **Draft route entry (for root; no route entry exists).**
  - `id`: math-a12-t02; `playlistOrder`: 21 (outline); production order after t01.
  - `syllabusActionIds`: `ci220f8799` (owned in the outline; `coverage: owned-action`).
  - `entryKnowledge`: t01 (transformations, period, horizontal translation, write the inside as a(x + b) first); Year 11 `ciccaa78be` (exact values at multiples of π/6 and π/4); Year 11 solving sin x = k, cos x = k and tan x = k on [0, 2π] by symmetry (quadrant or unit-circle method; codename to be added by root from the Year 11 ledger); Year 11 `cid79268a8` (graphs and periods).
  - `start`: "Open on t01's frame: count the crossings of y = 2sin(x − π/6) and y = 1 on 0 ≤ x ≤ 2π."
  - `stop`: "Solve exact-value equations of transformed sin, cos and tan in a stated domain with the u-window, counting cycles and checking endpoints; check with a graphing application. Keep non-exact inverse-trig values and contexts for t03."
  - `next`: "math-a12-t03: build a periodic model from measurements (the tide) and solve it."
  - `sources`: further-graph-transformations-and-modelling/lesson01.sa.html (card 08, Problem 3, SA 3) and lesson02.sa.html (card 06 idea), SHA256 above.
- **The hook surprise (site card 08 example, kept exactly).** A calculator's inverse sine returns one angle, yet the graph shows two crossings, and scene 6 later shows a case with three in one cycle. The opening question is "how do we know we have them all?"
- **Isolate as a transformation (t01 link).** Dividing both sides by 2 is shown as a vertical squash of the curve and the line together: crossings keep their x-values. This makes the algebra step a graph fact.
- **The u-window (site card 08 method, drawn).** A `WindowMap` (new part) shows the x-domain strip [0, 2π] above a u-strip; the u-strip slides left by π/6 to [−π/6, 11π/6] while the plain sine curve is drawn over it; the two solutions mark on the u-curve, then slide right π/6 back onto the transformed curve. The neighbouring values 13π/6 and −7π/6 appear grey just outside the window and are crossed out.
- **More cycles, more solutions (original example).** 2sin 2x = √3 on [0, 2π]: the u-window [0, 4π] holds two cycles, so four solutions π/6, π/3, 7π/6, 4π/3. The site has no b ≠ 1 solving example; this is the main reason students lose solutions (misconception 2).
- **Counting crossings (lesson 2 card 06 idea, generalised).** A `LevelLine` slides from y = 0 up through y = 2 to y = 2.5 on y = 2sin(x − π/6): two crossings per cycle, then one touch at the peak (x = 2π/3), then none. The cause is said in a sentence: in one cycle the curve rises through each height once and falls through it once.
- **Closed endpoints (site Problem 3, kept exactly).** 2cos(x − π/4) = √2 on [0, 2π] gives x = 0, π/2, 2π: three solutions in one cycle, because both included ends are solutions. This corrects the site's own "at most 2 per period" wording (site correction 1) without naming the site.
- **A graphical problem (`ci220f8799` "graphical problems"; original).** Scene 7 asks for which k the equation 2sin(x − π/6) = k has exactly two solutions on [0, 2π]. The level line sweeps while a strip on the y-axis records the count for each k; the closed endpoints (both at height −1) give three solutions at k = −1, so the answer is −2 < k < −1 or −1 < k < 2 (author note j). Scene 9 adds an inequality read from the same graph: 2sin(x − π/6) ≥ 1 for π/3 ≤ x ≤ π.
- **tan (original example).** tan 2x = 1 on [0, π]: u-window [0, 2π]; tan repeats every π; u = π/4, 5π/4; x = π/8, 5π/8; the asymptotes x = π/4, 3π/4 are excluded (open red markers on the domain strip, `DomainStrip.markerLabels`).
- **Graphing application (`ci220f8799` "using graphing applications or otherwise").** Scene 9: a coded "graphing check" panel shows both sides plotted with intersection readouts 1.047 and 3.142 in grey beside π/3 and π. No product name.
- **Attempts (site SA 3 kept; original tan question).** (A1) 2cos(x − π/3) = √3 on 0 ≤ x ≤ 2π: x = π/6, π/2. Crossed: "x = 13π/6" (from searching u in [0, 2π]: u = 11π/6 gives 13π/6, outside the domain, and loses π/6). (A2) tan(x/2) = √3 on −2π ≤ x ≤ 2π: x = −4π/3, 2π/3. Crossed: "2π/3 only".
- **Mistake scene:** none separate. "The calculator angle is the only answer" (hook; scene 3); "search u on 0 to 2π regardless of the inside" (scene 3, grey crossed values; feedback 1, crossed); "two cycles still give two answers" (scene 4); "always two per period" (scenes 5, 6); "asymptotes are solutions or tan repeats every 2π" (scene 8; feedback 2).
- **Memory aid:** "Do to the domain what you do to x." (see "Memory aid check").
- **Handoff teaser.** Scene 15: axes t (hours) from 0 to 12 and h (m) from 0 to 8, data points (0, 7.5) "high tide 7.5 m" and (6, 1.5) "low tide 1.5 m", the painted tide-board plate (shared with t03; Codex asset brief) beside the axes with a coded water band at 7.5 m, and a chip "h(t) = ?". No curve.
- **Site sources used:** card 08 (method: isolate, substitute, adjust the domain, symmetry, back-substitute; its example kept), Problem 3 (closed endpoints, kept), SA 3 (attempt 1, kept), lesson 2 card 06 (sketch first to count; the touch at the peak).
- **Misconceptions listed (pack work):** (1) the calculator's single angle is the whole answer; (2) solving for u on [0, 2π] whatever the inside, so solutions are lost or extra ones kept; (3) forgetting to add periods when a > 1; (4) "every period gives exactly two solutions" (fails at the max or min, and at closed endpoints; scene 5 now says so before scene 6 shows it); (5) back-substituting with the wrong operation (adding instead of subtracting the shift, or forgetting to divide by a); (6) using 2π as tan's period; (7) including asymptote values; (8) dropping negative solutions when the domain starts below zero.
- **Site corrections (quoted from site lesson 1, read 2 Nov; for `../site-corrections-maths-a12.md`):**
  1. Card 08: "Count solutions: Use the period, each full period of the graph can produce at most 2 solutions for sin/cos (one on the way up, one on the way down)." False for a closed interval one period long: the site's own Problem 3 has three solutions in [0, 2π]. Suggest: "In any half-open interval one period long, sin or cos meets a level at most twice. A closed interval can add a solution at an endpoint."
  2. Problem 3, justification: "over an interval of exactly one period, cos u = √2/2 is met twice in the OPEN interval". In the open interval (−π/4, 7π/4) only u = π/4 satisfies cos u = √2/2; the values −π/4 and 7π/4 are the endpoints. Suggest: "cos u = √2/2 is met twice in any half-open interval one period long, such as [−π/4, 7π/4). This closed interval also includes 7π/4, so the count here is three."
  - Checked and correct: card 08 example (π/3, π); Problem 3 (0, π/2, 2π); SA 3 (π/6, π/2, with 11π/6 rejected); lesson 2 card 06 population example (t = 6 only) and its T/F answer.
- **Cause chain taught, in order:** (1) solutions are crossings inside the domain; the calculator gives one (1); (2) dividing both sides squashes both graphs and keeps the crossings (2); (3) u = x − π/6 moves the window; plain sine gives two values; slide back (3); (4) u = 2x stretches the window to two cycles: four solutions (4); (5) a cycle rises through each height once and falls once: two, one or none (5); (6) closed ends can add one (6); (7) a graphical problem: sweep the level and count, including the endpoints (7); (8) tan: one on each complete branch, period π, asymptotes excluded (8); (9) check on an app (9); (10) remember: do to the domain what you do to x (10).
- **Learner-visible vocabulary (plain meaning at first use):** domain (the stated set of x-values allowed, scene 1); solution (an x-value that makes the equation true, scene 1); u-window (the values the inside takes when x runs through the domain, scene 3); included endpoint (an end of the domain that counts, shown as a filled dot, scene 6); branch (one connected piece of the tan curve between asymptotes, scene 8).
- **Legacy logic ported:** none.
- **New explainer motion (coded):** **vertical squash of both sides** (`transform.yScale` on curve and line together, scene 2); **window map** (new part `WindowMap`, scenes 3, 4, 6, 8, 12, 14 thumbnails); **level line sweep** (new part `LevelLine`, scene 5, and as the line in scenes 1 to 9); **solution markers sliding back** from the u-curve to the x-curve (scenes 3, 4); **grey crossed out-of-window values** (scenes 3, 4, 12); **endpoint dots** filled for included ends; **tan asymptote exclusions** (`DomainStrip.markerLabels`, scene 8); **graphing check** (scene 9); `AlignedAlgebra`, `Chip` with `cross`, `Countdown`, `QuestionCard`, `KeyNotes`.
- **Board layout (constant):** heading top-left; main graph on the left (about 1,050 × 460 px) with the `WindowMap` strips below it (about 1,050 × 180 px, same x geometry for the x-strip); algebra rows in the right column. Main window x from 0 to 2π (radian ticks π/6 apart where labelled solutions need them, otherwise π/2), y from −2.5 to 2.5. Scene 8 uses x from 0 to π (ticks π/8), y from −3 to 3. The u-curve panel in the window map has its own axis labelled "u" with the same unit length as the x-axis when b = 1, and half that when a = 2 (so the four solutions line up under their x-values after halving).
- **No human figures. Painted plate:** only in the handoff (the tide board, shared with t03).
- **Author notes (not learner copy):**
  (a) Scene 2: 2 sin(x − π/6) = 1 ⇔ sin(x − π/6) = ½; the map (x, y) → (x, y/2) sends both graphs to the new pair and keeps every intersection's x.
  (b) Scene 3: u = x − π/6 ∈ [−π/6, 11π/6]; sin u = ½ ⇔ u = π/6 + 2kπ or 5π/6 + 2kπ; in the window: π/6, 5π/6 (13π/6 > 11π/6; −7π/6 < −π/6). x = π/3, π.
  (c) Scene 4: sin 2x = √3/2, u = 2x ∈ [0, 4π]; u = π/3, 2π/3, 7π/3, 8π/3; x = π/6, π/3, 7π/6, 4π/3.
  (d) Scene 5: a continuous periodic function with one maximum and one minimum per cycle attains each value strictly between them exactly twice in any half-open interval one period long, its maximum and minimum once each. 2sin(x − π/6) = 2 ⇔ x − π/6 = π/2 ⇔ x = 2π/3 in [0, 2π].
  (e) Scene 6: u = x − π/4 ∈ [−π/4, 7π/4]; cos u = √2/2 ⇔ u = ±π/4 + 2kπ; in the closed window: −π/4, π/4, 7π/4; x = 0, π/2, 2π.
  (f) Scene 8: u = 2x ∈ [0, 2π]; tan u = 1 ⇔ u = π/4 + kπ: π/4, 5π/4; x = π/8, 5π/8; tan 2x undefined at x = π/4, 3π/4.
  (g) Scene 9: π/3 ≈ 1.0472, π ≈ 3.1416 (shown to 3 d.p.: 1.047, 3.142).
  (h) A1: cos(x − π/3) = √3/2; u ∈ [−π/3, 5π/3]; u = ±π/6 (11π/6 > 5π/3); x = π/6, π/2. Crossed: 13π/6 = 11π/6 + π/3 (outside [0, 2π]). A2: u = x/2 ∈ [−π, π]; tan u = √3 ⇔ u = π/3 + kπ: −2π/3, π/3; x = −4π/3, 2π/3; asymptotes x = ±π (tan(x/2) undefined), not solutions.
  (j) Scene 7: on [0, 2π], u = x − π/6 runs from −π/6 to 11π/6; y = 2 sin u starts at −1, rises to 2 at x = 2π/3, falls to −2 at x = 5π/3, rises to −1 at x = 2π. For −1 < k < 2: one crossing on the rise and one on the fall (2). For −2 < k < −1: one on the fall and one on the final rise (2). k = −1: x = 0, 4π/3, 2π (3). k = ±2: one touch each. |k| > 2: none. Scene 9: 2 sin u ≥ 1 ⇔ π/6 ≤ u ≤ 5π/6 ⇔ π/3 ≤ x ≤ π.
  (i) Pronunciations as t01 ("pi on six", "root three on two", "u").

Main question: *A city's daylight, 12 + 2sin(x − π/6) hours, is exactly 13 hours on two days a year, so y = 2sin(x − π/6) meets y = 1 twice between 0 and 2π, but a calculator gives one angle. How do we find every solution in a stated domain, and know there are no more?*
Entry knowledge (t01; Year 11 `ciccaa78be`, `cid79268a8`, Year 11 solving trig equations on [0, 2π]): transformations and periods; exact values; symmetry of the sine, cosine and tan graphs.
Stops after: solving exact-value equations of transformed sin, cos and tan in a stated domain with the u-window; counting cycles; closed endpoints; tan branches; a graphing-application check.
Handoff: building a periodic model from tide measurements (math-a12-t03).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings.

Colour roles (Revision 3, t01 to t03 strand): the curve **ink**; the level line, the right-hand side, **amber**; the inside u and its window **teal**; the x-domain strip ink with filled dots for included ends; solution dots ink, final answers **green**; out-of-window values grey hollow; asymptotes dashed grey; the crossing counter amber; mistake **red**, crossed slips only. Type (standard item 5): current working line and live readout numbers 52 px; task strip, equation strip and givens 44 px; earlier lines 30 to 32 px and dimmed, never faint; axis numbers at least 30 px; hand tags at least 34 px; question cards 40 px; key-note bullets 36 to 40 px (root decision 58); nothing below 26 px; all text above y = 950. Every stage's main visual is solid from the stage's first frame. Header strip "MATHEMATICS ADVANCED · TRIG GRAPHS"; scene headings in the hand font, 44 px. Main window x from 0 to 2π (radian ticks π/6 apart where labelled solutions need them, otherwise π/2), y from −2.5 to 2.5; the daylight window D from 9 to 15 hours on the same x-axis, with a grey month strip under it; scene 8's window x from 0 to π (ticks π/8), y from −3 to 3. The window map's u-panel has the same unit length as the x-axis when a = 1, and half that when a = 2.

### 1. hook (one calculator angle, two days)
> Here's the city's daylight over one year, and the line at thirteen hours. Between zero and two pi, they cross **twice**, once in late October and once in late February. A calculator's inverse sine gives you only one angle, so where does the second day come from, and how do we know there isn't a **third**? The graph answers both. Every solution is a crossing, and every crossing must sit inside the stated domain, here one year.

Visual: opens on t01's last frame exactly (t01 Revision 3 scene 14: the skyline strip `ma12-city-skyline-strip-v1` with the sun `phys-y11-sun-v1` on its dashed day-arc and the readout "daylight D: 12.0 h"; the graph of D = 12 + 2sin(x − π/6) on 0 ≤ x ≤ 2π with the month strip, the amber dashed line D = 13, the ink domain bracket "one year: 0 ≤ x ≤ 2π" with filled end dots, chips "13 hours of daylight: which days?" and "Next: solving trig equations from the graph"). The "Next" chip clears silently as the heading writes on: "Every solution in a domain". On "twice" the date cursor runs from x = 0 (`DaySim`): the sun's arc lengthens and the readout climbs; at each crossing the cursor pauses, an ink ring marks the crossing, the readout reads "13.0 h", and the month strip lights "late Oct", then "late Feb" (hand tag "two days"); the chip changes to "2 crossings". On "third" a grey calculator-style readout "sin⁻¹(½) = π/6" sits in the right column with a "?" beside it (hand tag "two days, one calculator angle"), and the window edges pulse. On the last sentence the domain bracket glows; the parts of the line outside 0 ≤ x ≤ 2π fade.

### 2. isolate: slide and squash both sides together
> First, make the equation simpler. Twelve plus two sine of the bracket equals thirteen, so take twelve from both sides: two sine of the bracket equals one. Divide by two, and sine of the bracket equals a **half**. Sliding both graphs down, then squashing both, moves the curve and the line together, so the crossings stay at exactly the same x **values**. Now the question is: where does sine of x minus pi over six equal a half, for x from zero to two pi?

Visual: camera continue; the skyline and sun shrink to a live 300 px thumbnail at the top left. Task strip (44 px): "Solve for 0 ≤ x ≤ 2π"; givens card (44 px): "12 + 2sin(x − π/6) = 13", "0 ≤ x ≤ 2π" (filled-dot bracket). Rows (52 px, earlier rows 32 px): "12 + 2sin(x − π/6) = 13"; "2sin(x − π/6) = 1" (as "take twelve" is said, curve and line slide down 12 together, about 1 s; the axis relabels from D to y); on "half" "sin(x − π/6) = ½". On "values" curve and line squash together (yScale 1 → ½ on both, about 1 s); the two rings stay on their vertical drop lines (hand tag "same x"). The line now reads "y = ½" (amber).

### 3. the u-window: slide the window, solve the plain curve, slide back
> Call the inside u, so u equals x minus pi over **six**. When x runs from zero to two pi, u runs from minus pi over six to eleven pi over **six**. That's the window we search on the plain sine curve. Sine u is a half at pi over six, and, by symmetry about the peak, at five pi over **six**. The next ones, thirteen pi over six and minus seven pi over six, are outside the **window**. Now undo the substitution: x is u plus pi over six. So x is pi over three, or **pi**: a sixth of the way through the year, and halfway. That's the same slide right by pi over six that we saw for the graph.

Visual: `WindowMap` opens under the graph (about 1,050 × 200 px), solid from its first frame: the ink x-strip "x: 0 to 2π" aligned with the main x-axis and, below it, the u-panel with the plain sin u in ink on a wider axis. On "six" (first) row "let u = x − π/6" (u teal). On "six" (second) a copy of the x-strip drops into the u-panel and slides left by π/6 (about 1 s), its ends relabelled "−π/6" and "11π/6" (teal), and the window shades teal. On "six" (third) ink dots at u = π/6 and 5π/6 on the amber level ½, with a dotted mirror line at the peak u = π/2 (hand tag "symmetry"). On "window" grey hollow dots at 13π/6 and −7π/6 just outside the shading, each crossed in red. On "pi" (last) the green framed answer (52 px) "x = π/3 or x = π"; the two u-dots slide right by π/6 and up onto the main graph's rings, which now carry the labels "π/3" and "π"; the thumbnail's month strip lights "late Oct" and "late Feb" again (hand tag "one sixth of a year, and half"). Small tag on the slide: "right π/6, as the graph".

### 4. more cycles, more solutions
> A number multiplying x packs more cycles into the domain, like two years of daylight on one graph. Solve two sine two x equals root three, for x from zero to two pi. Divide by two: sine two x is root three over **two**. Let u equal two x. As x runs from zero to two pi, u runs from zero to four **pi**. That's two full cycles, so expect four crossings. In the first cycle, u is pi over three and two pi over **three**. Add two pi for the second cycle: seven pi over three and eight pi over **three**. Halve them all: x is pi over six, pi over three, seven pi over six, and four pi over **three**. Stop at two, and you lose half the **answers**.

Visual: clear change to a fresh worked board (g01 layout): task strip "Solve for 0 ≤ x ≤ 2π"; equation strip (52 px) "2sin 2x = √3" with the 2 inside teal; givens card "0 ≤ x ≤ 2π" (ink, filled dots). Main graph: y = 2sin 2x (ink) and the amber line y = √3 (grey "≈ 1.73" beside "√3"); the window map under it. On "two" (first) row "sin 2x = √3/2" (both graphs squash by ½). On "pi" (first) the u-strip stretches to "0 to 4π" (about 1 s; hand tag "× 2"); the u-panel shows two cycles of sin u, bracketed "cycle 1", "cycle 2"; chip "2 cycles: expect 4" (amber counter "4"). On "three" (first) u-dots at π/3, 2π/3. On "three" (second) the two dots copy one cycle right (hand tag "+ 2π") to 7π/3, 8π/3. On "three" (third) all four u-dots slide up and squeeze by ½ onto the main graph crossings, labelled "π/6, π/3, 7π/6, 4π/3"; the green framed answer "x = π/6, π/3, 7π/6, 4π/3". On "answers" the second-cycle pair glows; a red slip "x = π/6, π/3 only" writes and is crossed.

### 5. counting crossings: two, one or none per cycle
> Here's why counting works. In one cycle, the curve rises through every height between its lowest and highest values once, and falls through it **once**. So a line strictly between them crosses twice per cycle, unless an end of the domain lands on it, which we check next. Raise the line to fourteen hours, the longest day, and it only touches, once per **cycle**. Raise it to fourteen and a half, and no day has that much daylight at **all**. So count the cycles, and check where the line **sits**.

Visual: stage change back to the daylight stage, large: the skyline and sun at the left (about 760 px wide, solid) with their readouts, the daylight graph at the right (D from 9 to 15, month strip) and the amber `LevelLine` at D = 13 with its crossing counter (52 px) "2". On "once" (first two) a short up-arrow and a down-arrow run along the cycle at the same height (hand tag "up once, down once"). On "cycle" the line rises to D = 14: the counter reads "1", a single touch at x = 2π/3 is labelled, the month strip lights "late Dec", and the sun traces its longest arc (readout "14.0 h"; hand tag "longest day: touch"). On "all" the line rises to D = 14.5: counter "0", the sun's arc at its longest still falls short of the line (readout "14.0 h", hand tag "no day this long"). On "sits" the line returns to D = 13, counter "2"; a chip "count first: cycles × 2 (a closed end can add one: next), then check the level".

### 6. closed endpoints can add one
> But watch the ends of the domain. Solve two cos of x minus pi over four equals root two, from zero to two pi, with both ends **included**. Cos of the bracket is root two over two. The window for u runs from minus pi over four to seven pi over **four**. Cos u is root two over two at pi over four, but also at minus pi over four and seven pi over four, the two ends of the **window**. So x is zero, pi over two, and two **pi**. That's three solutions in one cycle, because both ends of the domain are included, and both land on the line.

Visual: clear change to a worked board: task strip "Solve for 0 ≤ x ≤ 2π"; equation strip "2cos(x − π/4) = √2" (site Problem 3; π/4 teal); givens card "0 ≤ x ≤ 2π" with the "≤" signs underlined on "included" (hand tag "ends included"); main graph y = 2cos(x − π/4) (ink) with the amber line y = √2 and filled end dots on the domain bracket. Rows: "cos(x − π/4) = √2/2"; on "four" (second) "u = x − π/4, −π/4 ≤ u ≤ 7π/4" and the u-strip slides left π/4 (teal window). On "window" three u-dots: π/4 in the middle and −π/4, 7π/4 exactly on the two ends of the shaded window (both ends glow). On "pi" the green framed answer "x = 0, π/2, 2π"; the dots slide right π/4 onto the main graph, where the curve meets the line exactly at both filled end dots (the visual surprise: three in one cycle). Beside it a red slip "x = π/2 and 2π only" writes and is crossed (silent; caption "u = −π/4 is in the window too"). Chip: "closed ends: check them".

### 7. a graphical problem: when are there exactly two solutions?
> Graphs also answer questions that algebra finds awkward. For which values of k does two sine of x minus pi over six equal k exactly twice, for x from zero to two **pi**? Slide a level line up and down. The curve starts and ends at minus **one**: the same date, a year apart. It rises to two, and falls to minus two. Between minus one and two, the line crosses twice. Between minus two and minus one, it crosses twice **too**. But at exactly minus one, it also hits both ends, giving three, and at two or minus two, it only **touches**. So k is between minus two and minus one, or between minus one and **two**.

Visual: clear change back to the main case: y = 2sin(x − π/6) on 0 ≤ x ≤ 2π with filled end dots and the month strip; the skyline thumbnail live at the top left; task strip "For which k does 2sin(x − π/6) = k have exactly two solutions for 0 ≤ x ≤ 2π?" (givens "0 ≤ x ≤ 2π"). On "pi" the amber `LevelLine` appears with its counter (52 px). On "one" (first) the end points (0, −1) and (2π, −1) ring; hand tag "same date, a year apart" joins them (the month strip shows "late Aug" at both ends); the peak (2π/3, 2) and trough (5π/3, −2) tag. The line sweeps (about 4 s across the next sentences): at y = 1 counter "2"; on "too" at y = −1.5 counter "2"; on "touches" it stops at y = −1 (counter jumps to "3": dots at 0, 4π/3 and 2π, the visual surprise), then at y = 2 ("1") and y = −2 ("1"). A y-axis strip at the right of the graph colours the k-values by count as the line passes: green for 2 on (−2, −1) and (−1, 2), amber for 3 at −1, grey for 1 at ±2, none beyond. On "two" (last) the green framed answer "−2 < k < −1 or −1 < k < 2".

### 8. tan: one crossing on each complete branch
> Tan works the same way, with one crossing on each complete branch. Solve tan two x equals one, for x from zero to **pi**. Let u equal two x, so u runs from zero to two **pi**. Tan repeats every pi, so tan u is one at pi over four, and again at five pi over **four**. Halve them: x is pi over eight, or five pi over **eight**. The asymptotes, at pi over four and three pi over four, are never solutions, because tan isn't defined **there**.

Visual: clear change to the tan board: the tan window (x from 0 to π, ticks π/8; y from −3 to 3): y = tan 2x (ink) on its three pieces with grey dashed asymptotes at π/4 and 3π/4, the amber line y = 1; task strip "Solve for 0 ≤ x ≤ π"; equation strip "tan 2x = 1" (2 teal); givens "0 ≤ x ≤ π". On "pi" (first) the domain bracket draws. On "pi" (second) the u-strip stretches to "0 to 2π"; the u-panel shows tan u with asymptotes at π/2, 3π/2. On "four" u-dots at π/4 and 5π/4 (hand tag "tan repeats every π"). On "eight" they halve onto the main graph: the green framed answer "x = π/8 or 5π/8"; beside it a red slip "x = π/8 only" writes and is crossed (silent; caption "u = 5π/4 too"). On "there" the domain strip under the graph shows open grey markers "π/4" and "3π/4" (heading "tan 2x undefined").

### 9. check on a graphing app
> You can check any of these on a graphing app. Plot both sides, and read the crossings. For the first example, the app shows about one point zero four seven and three point one four two, which match pi over three and **pi**. The graph answers inequalities too. The curve is above the line between those crossings, so two sine of x minus pi over six is at least one for x from pi over three to **pi**. The app gives decimals, the algebra gives exact values, and the graph tells you how many to **expect**.

Visual: clear change to a plain coded "graphing check" panel (no product name, about 1,200 × 640 px, solid): y = 2sin(x − π/6) (ink) and y = 1 (amber) on 0 ≤ x ≤ 2π; two intersection readouts (52 px) "x ≈ 1.047" and "x ≈ 3.142" in grey; on "pi" exact labels "π/3" and "π" write beside them in ink with green ticks. On "pi" (second) the part of the curve above the line between the two crossings shades light amber; the green framed row "2sin(x − π/6) ≥ 1 for π/3 ≤ x ≤ π"; the skyline thumbnail's month strip lights late October to late February (hand tag "13 hours or more"). On "expect" the amber crossing counter "2" from scene 5 sits beside the panel.

### 10. memory aid: do to the domain what you do to x
> Here's the rule to remember. Do to the domain what you do to **x**. If the inside is two x, double the endpoints. If it's x minus pi over six, subtract pi over six from **both**. Then find every solution in that new window, and undo the steps to get back to **x**.

Visual: stage change to the framed `MemoryAidCard` (about 1,300 × 600 px, double ink frame, hand-font heading "Memory aid"), with the sun icon (from the plate, about 120 px) at its left edge. On "x" (first) the main line writes large in the hand font, 60 px: "Do to the domain what you do to x." Keyed lines (40 px, teal), each with a mini window strip: "stretch: 0 ≤ x ≤ 2π → 0 ≤ 2x ≤ 4π" and, on "both", "slide: 0 ≤ x ≤ 2π → −π/6 ≤ x − π/6 ≤ 11π/6". On "x" (last) an arrow loops back from u to x labelled "undo: x = u ÷ a − b", and the condition line writes: "Count first, then solve." Hold about 2 s.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. Solve two cos of x minus pi over three equals root three, for x from zero to two pi. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Solve 2cos(x − π/3) = √3 for 0 ≤ x ≤ 2π." The full question stays on screen. Picture slot: the kit `IntervalPicture` of the domain 0 ≤ x ≤ 2π (about 420 px wide, both ends filled), with no graph, window or count. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 12. feedback 1 (brief)
> Cos of the bracket is root three over **two**. The u-window runs from minus pi over three to five pi over **three**. Cos u is root three over two at pi over six, and at minus pi over **six**. Add pi over three: x is pi over six, or pi over **two**. Thirteen pi over six is outside the **domain**.

Visual: the card shrinks to the top (30 px). `GivensStrip` (44 px): "2cos(x − π/3) = √3", "0 ≤ x ≤ 2π". On "two" (first) "2cos" and "√3" underlined; row (52 px) "cos(x − π/3) = √3/2". On "three" "0 ≤ x ≤ 2π" underlined; row "u = x − π/3: −π/3 ≤ u ≤ 5π/3" with a window map thumbnail (teal window). On "six" row "u = π/6 or u = −π/6" (dots in the window; 11π/6 grey just outside). On "two" (last) the green framed answer "x = π/6 or x = π/2". On "domain" a red slip "x = 13π/6" writes and is crossed (caption "outside 0 ≤ x ≤ 2π"). Hold about 1 s.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. Solve tan of x over two equals root three, for x from minus two pi to two pi. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Solve tan(x/2) = √3 for −2π ≤ x ≤ 2π." The full question stays on screen. Picture slot: the kit `IntervalPicture` of the domain −2π ≤ x ≤ 2π (both ends filled, the tick at 0 marked), with no graph, window or count. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 14. feedback 2 (brief)
> Let u equal x over **two**. Halve the endpoints: u runs from minus pi to **pi**. Tan u is root three at pi over **three**, and one period earlier, at minus two pi over **three**. Double them: x is two pi over three, or minus four pi over **three**. Stopping at two pi over three misses the **negative** one.

Visual: the card shrinks to the top. `GivensStrip`: "tan(x/2) = √3", "−2π ≤ x ≤ 2π". On "two" "x/2" underlined; row (52 px) "u = x/2". On "pi" (first) "−2π ≤ x ≤ 2π" underlined; row "−π ≤ u ≤ π" (thumbnail tan u on −π ≤ u ≤ π with grey asymptotes at ±π/2, teal window). On "three" (first) row "u = π/3"; on "three" (second) "u = π/3 − π = −2π/3". On "three" (third) the green framed answer "x = 2π/3 or x = −4π/3". On "negative" a red slip "x = 2π/3 only" writes and is crossed (caption "the domain starts at −2π"). Hold about 1 s.

### 15. handoff
> So the graph tells you how many solutions to expect, and the shifted window finds every one. Next, these graphs meet the real world. At a harbour boat ramp, the tide board reads seven and a half metres at high tide, at time zero, and one and a half metres at low tide, six hours later. Can we write an equation that predicts the water level at any **time**?

Visual: the memory card shows small at the top, then fades on "Next". Board clears to the tide stage (t03's anchor), solid from its first frame: the painted tide board and boat ramp `ma12-tide-board-v1` (about 300 × 800 px) at the left with a coded translucent water band at 7.5 m; axes t (hours) from 0 to 12 (ticks every 2) and h (m) from 0 to 8 at the right (about 1,000 × 560 px), and a `LiveReadoutBoard` (52 px) "time t: 0 h", "water level h: 7.5 m". On "seven and a half" an ink dot at (0, 7.5), label "high tide 7.5 m"; on "one and a half" the water band falls (about 1.5 s) to 1.5 m while the readouts tick to "6 h" and "1.5 m", and a dot at (6, 1.5) appears, label "low tide 1.5 m". On "time" a chip "h(t) = ?". No curve. Chip: "Next: modelling with trig functions". Hold about 2 s. This is t03's opening frame; scene 16 returns to it silently after the notes.

### 16. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 36 to 40 px in the left 58 to 60 per cent of the screen, each one line, colour roles kept; the framed memory card on the right, with nothing past its edge and no bullet below 34 px (root decision 58).
> Here are the key notes. Pause the video if you need more time to copy them.

- Solutions = crossings inside the domain.
- u = a(x + b): do to the domain what you do to x.
- Find every u in the window, then x = u/a − b.
- Each cycle: 2 crossings, 1 at a max or min, 0 beyond.
- Check closed ends. tan: one per branch, never an asymptote.

Memory aid (framed card, right half of the notes screen, as in scene 10): *Do to the domain what you do to x.* Second line: *Count first, then solve.* Small grey line under the card: *Some sources write a f(bx + c) + d; here the inside is a(x + b).* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades (1 s) back to scene 15's frame exactly (the tide board and ramp with the water band at 1.5 m, the axes with the two data points, chips "h(t) = ?" and "Next: modelling with trig functions"). This is the final frame and t03's opening frame.

## Teaching checks

- **Does it explain causes?** Why there is more than one solution: the curve crosses the line more than once in the domain, and the calculator returns one inside value (1). Why dividing is safe: it squashes both graphs and keeps the crossings (2). Why the window moves: u takes different values from x, so the search happens where u actually goes (3). Why a = 2 doubles the count: the window holds two cycles (4). Why two per cycle: up once, down once (5). Why three: closed ends that land on the line (6). Why tan has one on each complete branch and none at asymptotes (8).
- **Misconceptions addressed:** the eight listed under Decisions (scenes 1 to 8; feedback 1 and 2, crossed; key notes 2 to 4).
- **One idea at a time:** one case per scene; the window map shows only the current window; solved rows dim as the next starts; the line sweeps in scenes 5 and 7 change one thing (height).
- **Video makes it easier:** both graphs squash together (2); the domain strip slides and stretches into the u-window (3, 4); solution dots slide back onto the transformed curve (3, 4); the level line sweeps from two crossings to one to none (5) and counts the k-values for a graphical problem (7); endpoints land exactly on the line (6).
- **Response opportunity:** two unseen HSC-style tasks with the full domain on the card, 10 seconds each, nothing answer-bearing (no window, count or graph); one crossed mistake each; feedback about 20 s and 21 s.
- **Avoided double teaching:** exact values, quadrant symmetry and t01's transformations are recalled in a clause each.
- **Syllabus coverage:** `ci220f8799` (equations of transformed sin, cos and tan within a specified domain, graphically and algebraically, with a graphing-application check). Graphical problems: the k-count problem (7) and an inequality read from the graph (9); graphical problems in context continue in t03.
- **Out of scope by design:** inverse-trig decimals, contexts, general solutions, identities.

- **Visual standard (`../maths-visual-standard.md`, Revision 3), item by item:** 1 anchor from the first frame (the city's daylight: skyline, sun and its day-arc, live), returning in 2 (thumbnail), 3, 5, 7 and 9; 2 a new stage every 25 to 85 s (stage plan under "Scene list and build ids"); 3 three simulations with live readouts (`DaySim`, the level-line sweep with its counter, the window map); 4 fixed colour roles; 5 52 px current lines and readouts, 26 px floor; 6 hand tags in the role colours; 7 worked boards in the g01 layout with green framed answers and crossed slips; 8 framed memory card and five one-line key notes; 9 the surprises shown happening (two days for one calculator angle, three in one cycle at closed ends, the counter jumping to 3 because both ends are the same date).

## Practice questions and model answers

**Attempt 1 (scene 11; site SA 3, wording shortened, HSC style, 3 marks suggested, not an official marking scheme).** "Solve 2cos(x − π/3) = √3 for 0 ≤ x ≤ 2π."
Model answer: cos(x − π/3) = √3/2. Let u = x − π/3; −π/3 ≤ u ≤ 5π/3. cos u = √3/2 at u = π/6 and u = −π/6 (11π/6 > 5π/3, outside). x = u + π/3: x = π/6 or x = π/2. Classic mistake (crossed): x = 13π/6 (outside the domain; comes from searching u on [0, 2π]).

**Attempt 2 (scene 13; original wording, HSC style, 2 marks suggested).** "Solve tan(x/2) = √3 for −2π ≤ x ≤ 2π."
Model answer: u = x/2, −π ≤ u ≤ π. tan u = √3 at u = π/3 and u = π/3 − π = −2π/3. x = 2u: x = 2π/3 or x = −4π/3. Classic mistake (crossed): "x = 2π/3 only".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Opening frame | t01's: y = 2sin(x − π/6), y = 1, 0 ≤ x ≤ 2π | 1 |
| Main case (site card 08) | sin(x − π/6) = ½; u ∈ [−π/6, 11π/6]; u = π/6, 5π/6; rejected 13π/6, −7π/6; x = π/3, π | 1 to 3, 9 |
| Calculator angle | sin⁻¹(½) = π/6 (inside value) | 1 |
| a = 2 case | sin 2x = √3/2 (√3 ≈ 1.73 grey); u ∈ [0, 4π]; u = π/3, 2π/3, 7π/3, 8π/3; x = π/6, π/3, 7π/6, 4π/3 | 4 |
| Level sweep | y = 1: 2; y = 2: 1 (x = 2π/3); y = 2.5: 0 | 5 |
| Graphical k problem | ends (0, −1), (2π, −1); peak (2π/3, 2); trough (5π/3, −2); counts: 2 on −2 < k < −1 and −1 < k < 2; 3 at k = −1 (x = 0, 4π/3, 2π); 1 at k = ±2 (x = 2π/3, 5π/3); answer −2 < k < −1 or −1 < k < 2 | 7 |
| Inequality | 2sin(x − π/6) ≥ 1 for π/3 ≤ x ≤ π | 9 |
| Closed ends (site Problem 3) | cos(x − π/4) = √2/2; u ∈ [−π/4, 7π/4]; u = −π/4, π/4, 7π/4; x = 0, π/2, 2π | 6 |
| tan case | tan 2x = 1 on [0, π]; u ∈ [0, 2π]; u = π/4, 5π/4; x = π/8, 5π/8; asymptotes π/4, 3π/4 | 8 |
| Graphing check | 1.047 ≈ π/3; 3.142 ≈ π | 9 |
| A1 (site SA 3) | u ∈ [−π/3, 5π/3]; u = ±π/6; x = π/6, π/2; crossed 13π/6 | 11, 12 |
| A2 | u ∈ [−π, π]; u = π/3, −2π/3; x = 2π/3, −4π/3; crossed "2π/3 only" | 13, 14 |
| Handoff (site lesson 2 Problem 1) | (0, 7.5), (6, 1.5); axes t 0 to 12 h, h 0 to 8 m | 15 |

**Revision 3 additions (recalculated in Python, 7 Nov):**

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Daylight model | D = 12 + 2sin(x − π/6) hours, 0 ≤ x ≤ 2π (one year; x = 0 about 24 August; day number = x/(2π) × 365) | 1, 2, 5, 7, 9 |
| Key dates | x = π/6: 12 h (about 23 Sep); π/3: 13 h (about 24 Oct); 2π/3: 14 h, longest (about 24 Dec); π: 13 h (about 22 Feb); 7π/6: 12 h (about 25 Mar); 4π/3: 11 h (about 24 Apr); 5π/3: 10 h, shortest (about 24 Jun); 0 and 2π: 11 h (24 Aug, a year apart) | 1, 3, 5, 7 |
| Isolate | 12 + 2sin(x − π/6) = 13 ⇔ 2sin(x − π/6) = 1 ⇔ sin(x − π/6) = ½ | 2 |
| Level sweep (daylight) | D = 13: 2 days; D = 14: 1 (x = 2π/3); D = 14.5: 0 | 5 |
| Silent slips | scene 6 "x = π/2 and 2π only" (misses u = −π/4, x = 0); scene 8 "x = π/8 only" (misses u = 5π/4, x = 5π/8) | 6, 8 |

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy `solveset` on each closed interval (2 Nov); Codex to re-check.

- 2sin(x − π/6) = 1 on [0, 2π]: {π/3, π}. 2sin(x − π/6) = 2 on [0, 2π]: {2π/3}.
- 2sin 2x = √3 on [0, 2π]: {π/6, π/3, 7π/6, 4π/3}.
- 2cos(x − π/4) = √2 on [0, 2π]: {0, π/2, 2π}; in the open u-interval (−π/4, 7π/4) only u = π/4.
- tan 2x = 1 on [0, π]: {π/8, 5π/8}; tan 2x undefined at π/4, 3π/4.
- A1: 2cos(x − π/3) = √3 on [0, 2π]: {π/6, π/2}. A2: tan(x/2) = √3 on [−2π, 2π]: {−4π/3, 2π/3}.
- 2sin(x − π/6) = k on [0, 2π]: k = −1 gives {0, 4π/3, 2π}; k = 2 gives {2π/3}; k = −2 gives {5π/3}; k = 1 and k = −1.5 give two each. 2sin(x − π/6) ≥ 1 on [0, 2π]: [π/3, π].
- π/3 = 1.047198; π = 3.141593; √3 = 1.732051.

- Revision 3: 12 + 2sin(x − π/6) at x = 0, π/6, π/3, 2π/3, π, 7π/6, 4π/3, 5π/3, 2π: 11, 12, 13, 14, 13, 12, 11, 10, 11. 12 + 2sin(x − π/6) = 13 on [0, 2π]: {π/3, π}; = 14: {2π/3}; = 14.5: none. Day numbers from 24 August: 30.4, 60.8, 121.7, 182.5, 212.9, 243.3, 304.2, 365.

## Memory aid check

- **"Do to the domain what you do to x."** Meaning: if the inside is u = a(x + b), apply the same operations (add b, multiply by a) to both endpoints of the x-domain to get the u-window. Assumption checked: a > 0 keeps the order of the endpoints (for a < 0 the endpoints swap; not used in this strand's examples; key note 2 states a > 0). It is exact for any linear inside. It helps a new case: attempt 2 (halve the endpoints for x/2). Introduced after the method is seen three times (scenes 3, 4, 6).
- **"Count first, then solve."** The scene 5 cause (up once, down once per cycle), with its exceptions (max or min once; closed endpoints) printed in key note 4.
- **Considered, not used:** "ASTC" quadrant mnemonic (Year 11; the graph symmetry carries the same information here and works for transformed windows).

## Narration length estimate

**Revision 3 (7 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " inside the scene, joined with a space, bold markers removed; the total is the sum of the scene strings): 6,023 characters**, 16 scenes. Characters per scene (1 to 16): 421, 447, 568, 620, 482, 520, 590, 419, 491, 252, 117, 276, 109, 283, 353, 75.

At 13.3 characters per second the speech outside the notes scene (5,948 characters) is about 447 s. Holds and settling: two 10 s countdowns (20 s); the memory-card hold (2 s); two feedback holds (2 s); the handoff hold (2 s); settling for the year sweep (1), the slide and squash (2), the window slides and dot slides (3, 4, 6, 8), the level sweeps (5, 7) and the graphing check (9), about 20 s in all; the key-notes scene fixed at 45 s. Total **about 539 s**, under the 570 s cap with about 31 s spare. Feedback: scene 12 about 22 s and scene 14 about 23 s (including the 1 s holds).

Reserve trims if the voiced take runs long (in order): scene 3's last sentence (keep the tag; about 4 s); scene 9's last sentence (keep the counter; about 8 s); scene 1's last sentence (keep the glow; about 6 s). Do not cut below 5,500 characters without replacing content.

Earlier counts (kept for the record):

Revision 1 count (2 Nov; by script `count_tgraphs.py`, build parser rules): **5,499 characters** (5,514 with the joining spaces), 16 scenes. **Revision 2 (3 Nov): 5,664 characters** (5,679 with the joining spaces), 16 scenes; per scene: 365, 338, 518, 579, 440, 520, 558, 419, 491, 252, 117, 276, 109, 283, 324, 75. This clears the 5,500 floor. About 426 s of speech plus about 106 s of holds and settling: **about 532 s**, under the 570 s cap. The Revision 1 breakdown follows. Characters per scene (1 to 16): 363, 336, 498, 561, 408, 502, 556, 394, 485, 248, 115, 256, 107, 271, 324, 75. At 13.3 characters per second the speech is about 413 s; add about 20 s of settling time for the squash (2), the window slides and dot slides (3, 4, 6, 8) and the level sweeps (5, 7), 20 s for two countdowns, about 5 s of short holds (scenes 10, 12, 14, 15) and about 60 s more of the quiet notes hold (about 106 s of holds): **about 519 s**, at the 5,500 character floor (1 character under; the content is complete, so nothing is padded) and under the 570 s cap. Scenes 4 and 7 are the longest; the window stretch must finish before "That's two full cycles", and scene 7's sweep must reach each level as it is named. Reserve trims if the voiced take runs long: scene 3's last sentence (keep the tag); scene 9's last sentence (keep the counter); scene 1's last sentence (keep the glow). Trims take the count below 5,500; root decides whether a short video is preferred to the trims.

## Scene list and build ids

Lesson key `m-a12t02` (route math-a12-t02, draft). Suggested explainer folder `src/explainer/lessons/math-a12-t02` and build folder `docs/production/claude-pm/lessons/m-a12t02`.

In order (kebab-case; 16 scene headings): hook, isolate-squash, u-window, more-cycles, count-crossings, closed-endpoints, graphical-k, tan-branches, graphing-check, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (seconds from the per-scene estimate):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 70 s | 1, 2 | Daylight stage: skyline, sun and day-arc with the year curve (`DaySim`); slide and squash both sides |
| 70 to 115 s | 3 | Window map: the teal u-window, dots sliding back |
| 115 to 164 s | 4 | Second worked board: two cycles, four solutions |
| 164 to 203 s | 5 | Daylight sweep: the level line and counter (two, one, none) |
| 203 to 244 s | 6 | Closed ends board: three in one cycle |
| 244 to 291 s | 7 | k sweep with the counter and the y-axis count strip |
| 291 to 325 s | 8 | tan board: one per branch |
| 325 to 363 s | 9 | Graphing check panel |
| 363 to 384 s | 10 | Framed memory card |
| 384 to 465 s | 11 to 14 | Question cards with interval pictures, countdowns, framed answers and crossed slips |
| 465 to 494 s | 15 | Handoff: the tide board, ramp and two measurements |
| 494 to 539 s | 16 | Key notes with the framed card (45 s) |

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`: five bullets and the card). Transitions: t01's last frame continues into scene 1 (camera continue, same stage); 1 to 2 camera continue (the skyline becomes a thumbnail, the board opens); 2 to 3 camera continue (the window map opens below); 3 to 4 clear change (new equation); 4 to 5 clear change back to the daylight stage; 5 to 6 clear change; 6 to 7 clear change back to the main case; 7 to 8 clear change (tan board); 8 to 9 clear change (graphing panel); 9 to 10 clear change to the card; attempts and feedback card shrink to the top; 14 to 15 board clear; 15 to 16 fade to the notes board; 16 cross-fades back to 15's frame.

Holds: attempt-1, attempt-2 (10 s countdown). key-notes is the quiet notes hold, fixed at 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a12t02-learning-review.md`, `science_check` = `checks/m-a12t02-maths-check.md`.

## Assets

Inspected before choosing (7 Nov, actual appearance): `public/assets/physics/phys-y11-sun-v1.png` (a painted sun disc, warm orange and yellow, clean edge: reused as the moving sun); `phys-y11-earth-v1.png` (a globe: would make the lesson an astronomy lesson, not used); `biology/m8-sun-v1.png` and `m8-sun-protection-v1.png` (health contexts, not used); `phys-y11-house-v1.png` (one house, f09 and f10's meaning). No skyline, sunrise, calendar-free daylight or city plate exists. The wall and desk calendars (f11, f12, s02) carry other lessons' meanings and are not used; the month strip is coded.

Have (reused): `phys-y11-sun-v1.png` (scenes 1, 2, 5, 7, 9, 10).

Need (painted, new; see the Codex asset brief): `ma12-city-skyline-strip-v1.png` (also t01's final frame, so paint before t01's build). The tide board `ma12-tide-board-v1.png` in scene 15 is briefed in t03.

Coded (studio kit): the day-arc, the month strip, graphs and axes, the window map, the level line and counter, readout boards, worked boards, question cards with interval pictures, countdown, hand tags, framed card, key notes. No coded cartoon of a sun, building or calendar.

### Studio kit use and additions

Existing studio parts: `FunctionSimulator` (with t01's draw-as-you-go clip and carried asymptotes), `LiveReadoutBoard`, `HandTag`, `PlateImg`, `AnchorStage`, `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`, `IntervalPicture`, `GivensStrip`, `Role`.

Additions (studio versions of the Revision 2 parts, at studio type sizes; t03 reuses them):
1. **`LevelLine`** (as specified under the Revision 2 "New parts", now with a 52 px crossing counter, a y-axis count strip mode for scene 7 and an optional link that lights matching cells on a month strip).
2. **`WindowMap`** (as specified under the Revision 2 "New parts", in role colours: the x-strip ink, the u-window teal, out-of-window values grey hollow).
3. **`DaySim`** (lesson-local, on `PlateImg` and plain SVG): a date cursor drives the sun along a coded dashed arc above the skyline whose span is proportional to D(x), the graph pen, the month strip and the readouts from one function.

## Codex asset brief (Maths A12 T02, a city's daylight)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a12-t02.md`, route entry math-a12-t02 (draft). Paint after the learning review and maths check pass and root gives the go-ahead. **Paint this plate before t01's build** (it is in t01's final frame). Save to `public/assets/maths/`. Every plate: **transparent PNG with a true alpha channel** and clean edges with no coloured fringe or halo (check on a black and a white background); ink and watercolour in the house style, matched in palette to the reused `public/assets/physics/phys-y11-sun-v1.png`; at least 8 per cent clear margin; no text, labels, letters, numbers, signs, logos, brand names, clocks, people, hands, faces, birds, sky, clouds, sun, glow or ground shadow. Never stretch to fit; keep the native aspect ratio.

1. `ma12-city-skyline-strip-v1.png` (3200 × 900 px): a low, wide side-on skyline of an ordinary Australian coastal city, painted as a band along the bottom of the canvas: a few mid-rise office and apartment towers near the centre, lower buildings, terrace rooftops, a few street trees and a short stretch of harbour foreshore at the left, all in soft daylight colours. **The skyline's tallest point must be no higher than 45 per cent of the canvas height from the bottom, and everything above the buildings is transparent**, because code draws the sun's day-arc there. The ground line at the bottom must be straight and level across the full width (report its pixel row). No recognisable landmark (no Opera House, bridge or named tower), no lit windows spelling anything, no signage.

Report inspection on the paper background (`#f6f1e7`) at 300 px, 600 px and 820 px wide (with `phys-y11-sun-v1.png` placed by hand at 110 px above the skyline to check the scale), plus the alpha check and the ground line. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma12-t02-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS on each closed interval, and the values in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the counting claim (author note d) and its exceptions as stated in scene 5 and key note 4, and that site correction 2 is right (only u = π/4 in the open interval).
3. Confirm every general rule carries its condition (a > 0 in key note 2; tan's period π; closed endpoints checked; "twice per cycle" in scene 5 is followed by the closed-end exception).
4. Confirm both attempt cards carry the full domain with inequality signs, and neither card or visual shows a window, count or value.
5. Confirm the syllabus quote matches the crosswalk text exactly and no site label appears in learner copy or metadata.
6. Confirm the opening frame equals t01's scene 15 frame and the final frame equals scene 15 here.
7. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
8. Confirm the narration character count by script.
9. Add site corrections 1 and 2 under Decisions to `../site-corrections-maths-a12.md` without duplicates.

10. Revision 3: confirm the daylight model and its dates (Revision 3 additions; author notes under the Revision 3 decisions), that only "late October", "late February", "the longest day" and "the same date, a year apart" are spoken, that scene 2's subtract-12 step keeps the crossings, and that the site's equations and answers are unchanged. Confirm both cards' interval pictures give nothing away; that the colour roles hold (the level line amber, the u-window teal, green only on answers, red only on crossed slips); that the key notes are five one-line bullets and the notes scene is 1,350 frames; that the opening frame equals t01 Revision 3's scene 14 and the final frame equals scene 15 here (t03's opening).

## YouTube metadata (draft)

Title: Solving Trig Equations in a Domain Using the Graph | Year 12 Maths Advanced

(Title length: 76 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/further-graph-transformations-and-modelling/lesson01.sa.html

A city's daylight over a year is D = 12 + 2sin(x − π/6) hours. A calculator gives one angle, but there are two days with 13 hours of daylight, late October and late February: 2sin(x − π/6) = 1 has two solutions between 0 and 2π. Find every solution in a stated domain: read crossings from the graph, move the domain into a u-window (do to the domain what you do to x), and slide the answers back. See why sin 2x gives four solutions in 0 to 2π, why a level line crosses twice per cycle (or touches once at the peak), how closed endpoints can give three solutions in one cycle, and how tan gives one solution on each complete branch and never at an asymptote. Check it all on a graphing app. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 12, further graph transformations and modelling.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Solve equations and graphical problems involving transformations of the trigonometric functions f(x) = sin x, f(x) = cos x or f(x) = tan x, using graphing applications or otherwise, within a specified domain"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa3b2bda67

Builds on: Transforming trig graphs (previous video); Year 11 exact values and trig equations. Next: Modelling with trig functions.

#Year12Maths #MathsAdvanced #TrigEquations #HSCScience

## Open decisions

- **1. Year 11 trig-equation codename (root).** Entry knowledge cites Year 11 solving of sin x = k on [0, 2π] without a codename (no Year 11 ledger in this repo).
- **2. Tide board plate (root, Codex).** The plate first appears in this video's handoff. If the plate is not ready, the handoff can show the data points and the coded water band on a plain coded post; t03 needs the plate more.
- **3. "pi over six" spoken form (resolved).** Root decision 22 (3 Nov): series form "over" applied to every spoken fraction in Revision 2.
- **4. Site link form (root decision 15).**

- **Revision 3 (root).** (a) The anchor: a city's daylight over a year, carrying the site's main equation unchanged (D = 13 is 2sin(x − π/6) = 1 after subtracting 12). (b) One new plate (the skyline strip), which t01's final frame also needs; the sun is reused. (c) The x = 0 date (about 24 August) is shown once in grey; only month phrases are spoken. (d) The question cards' pictures are interval pictures of each card's own domain (no context fits the site's abstract attempts without changing their wording).

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from t01 and Year 11 trig equations; check that the window map in scene 3 is followable at speed, that the dots sliding back read as "undo the substitution", that scene 5's sweep makes "two per cycle" a reason not a rule, that scene 6's three solutions are not read as an exception to memorise but as "check closed ends", and that the attempt cards give nothing away), then the Codex maths check and error check.
- The window slides, the dot slides and the level sweep carry the explanation; judge them at playback speed. Every dot must be placed from the same exact values as its label.
- t03 opens on scene 15's frame.
- **Revision 2 (3 Nov), brief 153 repairs.** Maths check (1 should fix, 1 optional) and learning review (same findings): scene 5 now limits "twice per cycle" with "unless an end of the domain lands on it, which we check next" (funded by shortening the closing count-first sentence); scene 8 now says "one crossing on each complete branch" (also in the boundary, learner question, key note 4 and vocabulary); key note 4 says "half-open cycle". The optional numbers-table scene references are corrected. Root decisions 21 (u = a(x + b) in key notes, the scene 10 undo line, `WindowMap` props; grey note on the key-notes screen) and 22 ("over" for every spoken fraction) applied. Site corrections 1 and 2 are unchanged (already logged as items 62 and 68). The final frame (scene 15) is unchanged, so t03 needs only its own edits.

- **Revision 3 (7 Nov).** Not reviewed. The learning review should check that the daylight meaning helps rather than distracts in scenes 1 to 3 (two days for one calculator angle), that the subtract-12 step in scene 2 reads as one more "same to both sides" move, that scene 7's "same date, a year apart" makes the closed ends concrete, and that the interval pictures on the cards are fair. Opens on t01 Revision 3's daylight frame.

## Revision 3 (7 Nov 2026)

Redesign to `../maths-visual-standard.md` on the d01 Revision 6 pattern, with an everyday anchor (owner rule, 7 Nov).

- **Anchor:** a city's daylight across one year, D = 12 + 2sin(x − π/6) hours (a whole year is 2π). Chosen because the site's own main case, 2sin(x − π/6) = 1, is exactly "which days have 13 hours of daylight?", so every idea gets an everyday meaning with the site's numbers unchanged: two crossings are two days (late October and late February), the touch is the longest day, no day reaches 14.5 hours, and the closed ends are the same date a year apart.
- **Simulations:** (1) `DaySim`: a date cursor moves the painted sun along a day-arc over the painted skyline, with live date and daylight readouts and the year curve drawing; (2) the amber level line sliding with a live crossing counter and the matching days lighting; (3) the window map sliding and stretching into the teal u-window, solutions sliding back.
- **Colour roles:** curve ink; level line amber; inside u and its window teal; domain strip ink with filled dots; final answers green; out-of-window values grey hollow; asymptotes dashed grey; mistakes red (crossed slips only).
- **Plates:** new `ma12-city-skyline-strip-v1` (needed first, for t01's final frame); reused `phys-y11-sun-v1`; the handoff shows t03's `ma12-tide-board-v1`.
- **Narration changes:** scenes 1 (daylight hook), 2 (subtract 12 first), 3 (what the answers mean in the year), 4 (one clause), 5 (on the daylight graph), 7 (the same date a year apart) and 15 (the boat ramp). Scenes 6, 8 to 14 and 16 keep their Revision 2 text.
- **Counts:** 5,664 characters, about 532 s (Revision 2, 60 s notes hold) → **6,023 characters, about 539 s** (45 s notes scene).
- **Key notes:** four long notes → five one-line bullets with the framed card.
- **Kit additions:** studio `LevelLine` (counter, count strip, month-strip link) and `WindowMap`, and the lesson-local `DaySim`; uses t01's draw-as-you-go clip and carried asymptotes.
- **Joins:** opens on t01 Revision 3's final frame (both edited together); ends on the tide frame t03 opens on.
