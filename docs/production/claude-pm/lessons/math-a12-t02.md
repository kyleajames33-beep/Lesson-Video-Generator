# Maths A12 T02: How do graphs locate every trig solution in a stated domain? Crossings with a horizontal line, the shifted u-window, counting cycles, closed endpoints and tan branches (design)

Status: Revision 1 (2 Nov): needs a student learning review and maths check (Codex), then a Codex error check. No route entry or pre-design pack existed; the pack work is done in this file and the draft route entry is under Decisions for root. Voicing gated by the brief 124 Google voice pilot. Build uses the brief 129 kit with the d01 addendum and the brief 131, 133, 135 and 143 additions (`FunctionGraph` with `transform`, `domain` endpoint markers, `asymptotes`, `radianTicks`; `DomainStrip` with `heading` and `markerLabels`; `ReadoutPanel.rows`; `AlignedAlgebra`) and t01's requested parts (`transform.yShift`, carried asymptotes, `TransformPanel`, `FeatureMarks`); see "Assets" for two new parts and one painted plate shared with t03. Nothing recorded; human listening pending.

Narration 5,499 characters, 16 scenes, about 519 s, counted by script with the build parser rules (see "Narration length estimate").

Scope: second video of the Year 12 Mathematics Advanced trig graphs and modelling strand (course outline playlist order 21; production order after t01). Templates: `math-a12-d05.md` and `math-a12-i05.md` (Revision 2), and the t01 design (Revision 1, written just before this one, whose scene 14 is this video's first frame). All maths visuals are coded. No pre-design pack exists: this design does the pack work. Site lesson read in full (2 Nov, read-only): `C:/Users/kygs/hscscience/subjects/maths-advanced/year12/further-graph-transformations-and-modelling/lesson01.sa.html`, SHA256 `e5b283c0d081397e3b156bdd31d6958d0280be5dfabd856746b8830ad4e19635`. Sections used: `solve-and-consolidate` card 08 (its worked example 2sin(x − π/6) = 1 kept exactly as the main case), worked Problem 3 (2cos(x − π/4) = √2, kept exactly as the closed-endpoint case), SA 3 (attempt 1, kept exactly). Also lesson 2 card 06 (`compare-model-approaches`, SHA256 `8ead7b9aeca247ad96b3abba7ba7691f8b7eadc7c2f4ebd65ccd0f76202e2c09`): "sketch first to count, then algebra", and its touch-at-the-peak case (one solution per period) as the idea for scene 5.

Owner rules applied: as t01 (new 2024 syllabus only; codenames and exact wording; coded maths; no people; one reasoning stage at a time; task, equation and grouped givens separated; "Pause here to answer." with a 10 s countdown and the full worded question on screen; givens underlined in feedback; brief feedback with one crossed mistake; optional key notes; Australian spelling; no em dashes; causes before rules). Root decisions applied: exact values in the algebra, decimals only in grey graphing readouts beside their exact forms (scene 9); domain conditions kept on every card and every answer line (closed endpoints shown as filled dots); radians on every window; attempt cards give no solution count, window or value; spoken "next" true in production order.

Syllabus content point (Mathematics Advanced 11-12 (2024), Year 12, focus area "Further graph transformations and modelling"; NESA content-system codename, official `code` field empty), quoted from `docs/production/programme/syllabus/maths-advanced-2024-y12-crosswalk.json` in linear form:

- `ci220f8799`: "Solve equations and graphical problems involving transformations of the trigonometric functions f(x) = sin x, f(x) = cos x or f(x) = tan x, using graphing applications or otherwise, within a specified domain"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa3b2bda67

**Boundary:** starts from t01's last frame (y = 2sin(x − π/6) and the line y = 1 on 0 ≤ x ≤ 2π, chip "solutions in 0 ≤ x ≤ 2π: ?"). Teaches: solutions as crossings inside the domain; isolating the ratio (a vertical dilation of both sides keeps the crossing x-values); the substitution u = bx + c with its window found by doing to the domain what is done to x; every u in the window by symmetry and periodicity; back-substitution; counting cycles and the position of the line before solving (two, one or no crossings per cycle); closed endpoints; tan's one crossing per branch and its excluded asymptotes; checking with a graphing application (grey decimals). Stops at exact-value equations of transformed sin, cos and tan in a stated domain. Not taught: non-exact values with inverse trig on a calculator (t03, the tide), modelling contexts (t03), quadratic-in-sin equations or identities (not in this strand's route), general solutions over all reals.

## Decisions

- **Learner question kept (course outline).** "How do graphs locate every trig solution in a stated domain?" The answer, built in order: every solution is the x-value of a crossing of the curve and a horizontal line, inside the domain; the substitution u = bx + c turns the curve back into the plain sin, cos or tan curve on a moved and stretched window; the number of cycles in that window and the height of the line say how many crossings to expect; closed endpoints can add one; tan has one crossing per branch.
- **Draft route entry (for root; no route entry exists).**
  - `id`: math-a12-t02; `playlistOrder`: 21 (outline); production order after t01.
  - `syllabusActionIds`: `ci220f8799` (owned in the outline; `coverage: owned-action`).
  - `entryKnowledge`: t01 (transformations, period, horizontal translation, factor b out first); Year 11 `ciccaa78be` (exact values at multiples of π/6 and π/4); Year 11 solving sin x = k, cos x = k and tan x = k on [0, 2π] by symmetry (quadrant or unit-circle method; codename to be added by root from the Year 11 ledger); Year 11 `cid79268a8` (graphs and periods).
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
- **Misconceptions listed (pack work):** (1) the calculator's single angle is the whole answer; (2) solving for u on [0, 2π] whatever the inside, so solutions are lost or extra ones kept; (3) forgetting to add periods when b > 1; (4) "every period gives exactly two solutions" (fails at the max or min, and at closed endpoints); (5) back-substituting with the wrong operation (adding instead of subtracting the shift, or forgetting to divide by b); (6) using 2π as tan's period; (7) including asymptote values; (8) dropping negative solutions when the domain starts below zero.
- **Site corrections (quoted from site lesson 1, read 2 Nov; for `../site-corrections-maths-a12.md`):**
  1. Card 08: "Count solutions: Use the period, each full period of the graph can produce at most 2 solutions for sin/cos (one on the way up, one on the way down)." False for a closed interval one period long: the site's own Problem 3 has three solutions in [0, 2π]. Suggest: "In any half-open interval one period long, sin or cos meets a level at most twice. A closed interval can add a solution at an endpoint."
  2. Problem 3, justification: "over an interval of exactly one period, cos u = √2/2 is met twice in the OPEN interval". In the open interval (−π/4, 7π/4) only u = π/4 satisfies cos u = √2/2; the values −π/4 and 7π/4 are the endpoints. Suggest: "cos u = √2/2 is met twice in any half-open interval one period long, such as [−π/4, 7π/4). This closed interval also includes 7π/4, so the count here is three."
  - Checked and correct: card 08 example (π/3, π); Problem 3 (0, π/2, 2π); SA 3 (π/6, π/2, with 11π/6 rejected); lesson 2 card 06 population example (t = 6 only) and its T/F answer.
- **Cause chain taught, in order:** (1) solutions are crossings inside the domain; the calculator gives one (1); (2) dividing both sides squashes both graphs and keeps the crossings (2); (3) u = x − π/6 moves the window; plain sine gives two values; slide back (3); (4) u = 2x stretches the window to two cycles: four solutions (4); (5) a cycle rises through each height once and falls once: two, one or none (5); (6) closed ends can add one (6); (7) a graphical problem: sweep the level and count, including the endpoints (7); (8) tan: one per branch, period π, asymptotes excluded (8); (9) check on an app (9); (10) remember: do to the domain what you do to x (10).
- **Learner-visible vocabulary (plain meaning at first use):** domain (the stated set of x-values allowed, scene 1); solution (an x-value that makes the equation true, scene 1); u-window (the values the inside takes when x runs through the domain, scene 3); included endpoint (an end of the domain that counts, shown as a filled dot, scene 6); branch (one connected piece of the tan curve between asymptotes, scene 8).
- **Legacy logic ported:** none.
- **New explainer motion (coded):** **vertical squash of both sides** (`transform.yScale` on curve and line together, scene 2); **window map** (new part `WindowMap`, scenes 3, 4, 6, 8, 12, 14 thumbnails); **level line sweep** (new part `LevelLine`, scene 5, and as the line in scenes 1 to 9); **solution markers sliding back** from the u-curve to the x-curve (scenes 3, 4); **grey crossed out-of-window values** (scenes 3, 4, 12); **endpoint dots** filled for included ends; **tan asymptote exclusions** (`DomainStrip.markerLabels`, scene 8); **graphing check** (scene 9); `AlignedAlgebra`, `Chip` with `cross`, `Countdown`, `QuestionCard`, `KeyNotes`.
- **Board layout (constant):** heading top-left; main graph on the left (about 1,050 × 460 px) with the `WindowMap` strips below it (about 1,050 × 180 px, same x geometry for the x-strip); algebra rows in the right column. Main window x from 0 to 2π (radian ticks π/6 apart where labelled solutions need them, otherwise π/2), y from −2.5 to 2.5. Scene 8 uses x from 0 to π (ticks π/8), y from −3 to 3. The u-curve panel in the window map has its own axis labelled "u" with the same unit length as the x-axis when b = 1, and half that when b = 2 (so the four solutions line up under their x-values after halving).
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

Main question: *y = 2sin(x − π/6) meets y = 1 twice between 0 and 2π, but a calculator gives one angle. How do we find every solution in a stated domain, and know there are no more?*
Entry knowledge (t01; Year 11 `ciccaa78be`, `cid79268a8`, Year 11 solving trig equations on [0, 2π]): transformations and periods; exact values; symmetry of the sine, cosine and tan graphs.
Stops after: solving exact-value equations of transformed sin, cos and tan in a stated domain with the u-window; counting cycles; closed endpoints; tan branches; a graphing-application check.
Handoff: building a periodic model from tide measurements (math-a12-t03).

## Script and shots

Cue words in **bold** trigger the visual change. Colour key (as t01): the transformed curve navy (sin) or blue (cos, tan); the plain curve in the u-panel grey-blue; the level line amber dashed; solution markers amber dots with drop lines to the axis and exact labels; out-of-window values grey hollow, crossed when named; the domain bracket grey with filled dots for included endpoints; asymptotes red dashed; readouts navy; givens navy; the current answer bright; earlier lines dim.

### 1. hook (one calculator angle, two crossings)
> Here's y equals two sine of x minus pi on six, and the line y equals one. Between zero and two pi, they cross **twice**. A calculator's inverse sine gives you only one angle, so where does the second solution come from, and how do we know there isn't a **third**? The graph answers both. Every solution is a crossing, and every crossing must sit inside the stated domain.

Visual: opens on t01's last frame (y = 2sin(x − π/6), the line y = 1, the domain bracket 0 ≤ x ≤ 2π with filled end dots, chip "solutions in 0 ≤ x ≤ 2π: ?"). Heading writes on: "Solving trig equations in a domain". On "twice" two amber rings appear at the crossings (no labels yet); the chip changes to "2 crossings". On "third" a small grey calculator-style readout "sin⁻¹(½) = π/6" (inside value only) sits in the right column with a "?" beside it, and the window edges pulse. On the last sentence the domain bracket glows; the parts of the line outside [0, 2π] are faded.

### 2. isolate: squash both sides together
> First, make the equation simpler. Two sine of the bracket equals one, so dividing by two, sine of the bracket equals a **half**. Halving both sides squashes the curve and the line together, so the crossings stay at exactly the same x **values**. Now the question is: where does sine of x minus pi on six equal a half, for x from zero to two pi?

Visual: `AlignedAlgebra` row 1: "2sin(x − π/6) = 1" (givens navy: "2sin(x − π/6) = 1", "0 ≤ x ≤ 2π"). On "half" row 2: "sin(x − π/6) = ½". On "values" curve and line squash together (`transform.yScale` 1 → ½ on both, about 1 s); the two rings stay on their vertical drop lines (tag "same x"). The line now reads "y = ½".

### 3. the u-window: slide the window, solve the plain curve, slide back
> Call the inside u, so u equals x minus pi on **six**. When x runs from zero to two pi, u runs from minus pi on six to eleven pi on **six**. That's the window we search on the plain sine curve. Sine u is a half at pi on six, and, by symmetry about the peak, at five pi on **six**. The next ones, thirteen pi on six and minus seven pi on six, are outside the **window**. Now undo the substitution: x is u plus pi on six. So x is pi on three, or **pi**. That's the same slide right by pi on six that we saw for the graph.

Visual: `WindowMap` opens under the graph: top strip "x: 0 to 2π" aligned with the main x-axis. On "six" (first) row 3 "let u = x − π/6". On "six" (second) a copy of the strip drops into the u-panel and slides left by π/6 (about 1 s), its ends relabelled "−π/6" and "11π/6"; the u-panel draws the plain sin u (grey-blue) on a wider axis and shades the window. On "six" (third) amber dots at u = π/6 and 5π/6 on the line u-level ½, with a dotted mirror line at the peak u = π/2 (tag "symmetry"). On "window" grey hollow dots at 13π/6 and −7π/6 just outside the shading, each crossed. On "pi" (last) row 4 "x = u + π/6: x = π/3 or x = π" (bright, boxed); the two u-dots slide right by π/6 and up onto the main graph's rings, which now carry the labels "π/3" and "π". Small tag on the slide: "right π/6, as the graph".

### 4. more cycles, more solutions
> A number multiplying x packs more cycles into the domain. Solve two sine two x equals root three, for x from zero to two pi. Divide by two: sine two x is root three on **two**. Let u equal two x. As x runs from zero to two pi, u runs from zero to four **pi**. That's two full cycles, so expect four crossings. In the first cycle, u is pi on three and two pi on **three**. Add two pi for the second cycle: seven pi on three and eight pi on **three**. Halve them all: x is pi on six, pi on three, seven pi on six, and four pi on **three**. Stop at two, and you lose half the **answers**.

Visual: clear change, same layout: task strip "Solve for 0 ≤ x ≤ 2π"; equation strip "2sin 2x = √3"; givens "0 ≤ x ≤ 2π" (navy). Main graph: y = 2sin 2x (navy) and the line y = √3 (grey "≈ 1.73" tag beside "√3"). On "two" (first) row "sin 2x = √3/2" (both graphs squash by ½). On "pi" (first) the `WindowMap` u-strip stretches to "0 to 4π" (about 1 s; tag "× 2"); the u-panel shows two cycles of sin u, each cycle bracketed "cycle 1", "cycle 2"; chip "2 cycles: expect 4". On "three" (first) u-dots at π/3, 2π/3. On "three" (second) the two dots copy one cycle right (tag "+ 2π") to 7π/3, 8π/3. On "three" (third) all four u-dots slide up and squeeze by ½ onto the main graph crossings, labelled "π/6, π/3, 7π/6, 4π/3"; row "x = π/6, π/3, 7π/6, 4π/3" (bright, boxed). On "answers" the second-cycle pair glows; a chip "x = π/6, π/3 only" fades in and is crossed.

### 5. counting crossings: two, one or none per cycle
> Here's why counting works. In one cycle, the curve rises through every height between its lowest and highest values once, and falls through it **once**. So a line strictly between them crosses twice per cycle. Raise the line to the very top, and it only touches, once per **cycle**. Raise it higher, and there are no solutions at **all**. So before solving, count the cycles in the domain, and check where the line **sits**.

Visual: back to y = 2sin(x − π/6) on the main window. On "once" (first two) a short up-arrow and a down-arrow run along one cycle at the same height (tag "up once, down once"). The `LevelLine` (amber dashed) starts at y = 1 with the crossing counter "2"; on "cycle" it rises to y = 2 and the counter reads "1" (a single touch at x = 2π/3, labelled; tag "peak: touch"). On "all" it rises to y = 2.5, counter "0". On "sits" the line returns to y = 1, counter "2"; a chip "count first: cycles × 2, then check the level".

### 6. closed endpoints can add one
> But watch the ends of the domain. Solve two cos of x minus pi on four equals root two, from zero to two pi, with both ends **included**. Cos of the bracket is root two on two. The window for u runs from minus pi on four to seven pi on **four**. Cos u is root two on two at pi on four, but also at minus pi on four and seven pi on four, the two ends of the **window**. So x is zero, pi on two, and two **pi**. That's three solutions in one cycle, because both ends of the domain are included, and both land on the line.

Visual: clear change: equation strip "2cos(x − π/4) = √2" (site Problem 3), givens "0 ≤ x ≤ 2π" with the "≤" signs underlined on "included"; main graph y = 2cos(x − π/4) (blue) with the line y = √2 and filled end dots on the domain bracket. Rows: "cos(x − π/4) = √2/2"; on "four" (second) "u = x − π/4, −π/4 ≤ u ≤ 7π/4" and the u-strip slides left π/4. On "window" three u-dots: π/4 in the middle and −π/4, 7π/4 exactly on the two ends of the shaded window (both ends glow). On "pi" row "x = 0, π/2, 2π" (bright, boxed); the dots slide right π/4 onto the main graph, where the curve meets the line exactly at both filled end dots. Chip: "closed ends: check them".

### 7. a graphical problem: when are there exactly two solutions?
> Graphs also answer questions that algebra finds awkward. For which values of k does two sine of x minus pi on six equal k exactly twice, for x from zero to two **pi**? Slide a level line up and down. The curve starts and ends at minus **one**, rises to two, and falls to minus two. Between minus one and two, the line crosses twice. Between minus two and minus one, it crosses twice **too**. But at exactly minus one, it also hits both ends, giving three, and at two or minus two, it only **touches**. So k is between minus two and minus one, or between minus one and **two**.

Visual: clear change back to the main case: y = 2sin(x − π/6) on 0 ≤ x ≤ 2π with filled end dots; task strip "For which k does 2sin(x − π/6) = k have exactly two solutions for 0 ≤ x ≤ 2π?" (givens navy: "0 ≤ x ≤ 2π"). On "pi" the `LevelLine` appears with its crossing counter. On "one" (first) the end points (0, −1) and (2π, −1) ring; tags "start −1", "end −1"; the peak (2π/3, 2) and trough (5π/3, −2) tag. The line sweeps (about 4 s across the next three sentences): at y = 1 counter "2"; on "too" at y = −1.5 counter "2"; on "touches" it stops at y = −1 (counter "3": dots at 0, 4π/3 and 2π), then at y = 2 ("1") and y = −2 ("1"). A y-axis strip on the right of the graph colours the k-values by count: green for 2 on (−2, −1) and (−1, 2), amber for 3 at −1, grey for 1 at ±2, and none beyond. On "two" (last) the answer row writes: "−2 < k < −1 or −1 < k < 2" (bright, boxed).

### 8. tan: one crossing per branch
> Tan works the same way, with one crossing per branch. Solve tan two x equals one, for x from zero to **pi**. Let u equal two x, so u runs from zero to two **pi**. Tan repeats every pi, so tan u is one at pi on four, and again at five pi on **four**. Halve them: x is pi on eight, or five pi on **eight**. The asymptotes, at pi on four and three pi on four, are never solutions, because tan isn't defined **there**.

Visual: clear change to the tan window (x from 0 to π, ticks π/8; y from −3 to 3): y = tan 2x (blue) on its three pieces with red dashed asymptotes at π/4 and 3π/4, the line y = 1. Equation strip "tan 2x = 1", givens "0 ≤ x ≤ π". On "pi" (first) the domain bracket draws. On "pi" (second) the u-strip stretches to "0 to 2π"; the u-panel shows tan u with asymptotes at π/2, 3π/2. On "four" u-dots at π/4 and 5π/4 (tag "+ π: tan's period"). On "eight" they halve onto the main graph: "π/8", "5π/8" (row bright, boxed). On "there" `DomainStrip` under the graph with `markerLabels` open red markers "π/4" and "3π/4" (heading "tan 2x undefined").

### 9. check on a graphing app
> You can check any of these on a graphing app. Plot both sides, and read the crossings. For the first example, the app shows about one point zero four seven and three point one four two, which match pi on three and **pi**. The graph answers inequalities too. The curve is above the line between those crossings, so two sine of x minus pi on six is at least one for x from pi on three to **pi**. The app gives decimals, the algebra gives exact values, and the graph tells you how many to **expect**.

Visual: a plain coded "graphing check" panel (no product name): y = 2sin(x − π/6) and y = 1 on 0 ≤ x ≤ 2π; two intersection readouts "x ≈ 1.047" and "x ≈ 3.142" in grey; on "pi" exact labels "π/3" and "π" write beside them in ink with ticks. On "pi" (second) the part of the curve above the line between the two crossings shades light amber; row "2sin(x − π/6) ≥ 1 for π/3 ≤ x ≤ π". On "expect" the crossing counter "2" from scene 5 sits beside the panel.

### 10. memory aid: do to the domain what you do to x
> Here's the rule to remember. Do to the domain what you do to **x**. If the inside is two x, double the endpoints. If it's x minus pi on six, subtract pi on six from **both**. Then find every solution in that new window, and undo the steps to get back to **x**.

Visual: the memory aid writes large: "Do to the domain what you do to x." On "x" (first) two mini `WindowMap` examples beside it: "0 ≤ x ≤ 2π → 0 ≤ 2x ≤ 4π" (stretch) and, on "both", "0 ≤ x ≤ 2π → −π/6 ≤ x − π/6 ≤ 11π/6" (slide). On "x" (last) an arrow loops back from u to x labelled "undo: x = (u − c) ÷ b". Hold about 2 seconds.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. Solve two cos of x minus pi on three equals root three, for x from zero to two pi. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Solve 2cos(x − π/3) = √3 for 0 ≤ x ≤ 2π." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no graph, no window, no count).

### 12. feedback 1 (brief)
> Cos of the bracket is root three on **two**. The u-window runs from minus pi on three to five pi on **three**. Cos u is root three on two at pi on six, and at minus pi on **six**. Add pi on three: x is pi on six, or pi on **two**. Thirteen pi on six is outside the **domain**.

Visual: card shrinks to the top. On "two" (first) "2cos" and "√3" underlined; row "cos(x − π/3) = √3/2". On "three" "0 ≤ x ≤ 2π" underlined; row "u = x − π/3: −π/3 ≤ u ≤ 5π/3" with a thumbnail `WindowMap`. On "six" row "u = π/6 or u = −π/6" (dots in the thumbnail window; 11π/6 grey just outside). On "two" (last) row "x = π/6 or x = π/2" (bright, boxed). On "domain" a chip "x = 13π/6" fades in and is crossed (caption "outside 0 ≤ x ≤ 2π"). Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. Solve tan of x on two equals root three, for x from minus two pi to two pi. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Solve tan(x/2) = √3 for −2π ≤ x ≤ 2π." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 2 (brief)
> Let u equal x on **two**. Halve the endpoints: u runs from minus pi to **pi**. Tan u is root three at pi on **three**, and one period earlier, at minus two pi on **three**. Double them: x is two pi on three, or minus four pi on **three**. Stopping at two pi on three misses the **negative** one.

Visual: card shrinks to the top. On "two" "x/2" underlined; row "u = x/2". On "pi" (first) "−2π ≤ x ≤ 2π" underlined; row "−π ≤ u ≤ π" (thumbnail tan u on [−π, π] with asymptotes at ±π/2). On "three" (first) row "u = π/3"; on "three" (second) "u = π/3 − π = −2π/3". On "three" (third) row "x = 2π/3 or x = −4π/3" (bright, boxed). On "negative" a chip "x = 2π/3 only" fades in and is crossed (caption "the domain starts at −2π"). Hold about 1 second.

### 15. handoff
> So the graph tells you how many solutions to expect, and the shifted window finds every one. Next, these graphs meet the real world. A harbour has a high tide of seven and a half metres at time zero, and a low tide of one and a half metres six hours later. Can we write an equation that predicts the water level at any **time**?

Visual: board clears. The memory aid from scene 10 shows small at the top, then fades on "Next". Axes: t (hours) from 0 to 12 (ticks every 2), h (m) from 0 to 8. The tide-board plate (Codex asset brief, shared with t03) stands at the left with a coded translucent water band at 7.5 m. On "seven and a half" a navy dot at (0, 7.5), label "high tide 7.5 m"; on "one and a half" the water band falls (about 1.5 s) to 1.5 m and a dot at (6, 1.5), label "low tide 1.5 m". On "time" a chip "h(t) = ?". No curve. Chip: "Next: modelling with trig functions". Hold about 2 seconds.

### 16. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. The solutions of f(x) = k are the x-values where y = f(x) crosses y = k inside the stated domain.
2. Isolate the trig ratio. Let u = bx + c and do to the domain what you do to x: p ≤ x ≤ q gives bp + c ≤ u ≤ bq + c (b > 0).
3. Find every u in that window (symmetry, then add or subtract a period: 2π for sin and cos, π for tan). Then undo: x = (u − c)/b.
4. Count first: per cycle of sin or cos, a level strictly between the min and max gives 2 solutions, the max or min gives 1, beyond gives 0. Check closed endpoints. tan: one per branch, never at an asymptote.

Memory aid (large, on the notes screen): *Do to the domain what you do to x.* Second line: *Count first, then solve.*

Visual (end of the hold, silent, no added speech): the key-notes hold ends by cross-fading (1 s, shared component; series rule) back to scene 15's frame exactly (tide axes, the two data points, the tide board with the water band at 1.5 m, chip "h(t) = ?"). This is the final frame and t03's opening frame.

## Teaching checks

- **Does it explain causes?** Why there is more than one solution: the curve crosses the line more than once in the domain, and the calculator returns one inside value (1). Why dividing is safe: it squashes both graphs and keeps the crossings (2). Why the window moves: u takes different values from x, so the search happens where u actually goes (3). Why b = 2 doubles the count: the window holds two cycles (4). Why two per cycle: up once, down once (5). Why three: closed ends that land on the line (6). Why tan has one per branch and none at asymptotes (8).
- **Misconceptions addressed:** the eight listed under Decisions (scenes 1 to 8; feedback 1 and 2, crossed; key notes 2 to 4).
- **One idea at a time:** one case per scene; the window map shows only the current window; solved rows dim as the next starts; the line sweeps in scenes 5 and 7 change one thing (height).
- **Video makes it easier:** both graphs squash together (2); the domain strip slides and stretches into the u-window (3, 4); solution dots slide back onto the transformed curve (3, 4); the level line sweeps from two crossings to one to none (5) and counts the k-values for a graphical problem (7); endpoints land exactly on the line (6).
- **Response opportunity:** two unseen HSC-style tasks with the full domain on the card, 10 seconds each, nothing answer-bearing (no window, count or graph); one crossed mistake each; feedback about 20 s and 21 s.
- **Avoided double teaching:** exact values, quadrant symmetry and t01's transformations are recalled in a clause each.
- **Syllabus coverage:** `ci220f8799` (equations of transformed sin, cos and tan within a specified domain, graphically and algebraically, with a graphing-application check). Graphical problems: the k-count problem (7) and an inequality read from the graph (9); graphical problems in context continue in t03.
- **Out of scope by design:** inverse-trig decimals, contexts, general solutions, identities.

## Practice questions and model answers

**Attempt 1 (scene 11; site SA 3, wording shortened, HSC style, 3 marks suggested, not an official marking scheme).** "Solve 2cos(x − π/3) = √3 for 0 ≤ x ≤ 2π."
Model answer: cos(x − π/3) = √3/2. Let u = x − π/3; −π/3 ≤ u ≤ 5π/3. cos u = √3/2 at u = π/6 and u = −π/6 (11π/6 > 5π/3, outside). x = u + π/3: x = π/6 or x = π/2. Classic mistake (crossed): x = 13π/6 (outside the domain; comes from searching u on [0, 2π]).

**Attempt 2 (scene 13; original wording, HSC style, 2 marks suggested).** "Solve tan(x/2) = √3 for −2π ≤ x ≤ 2π."
Model answer: u = x/2, −π ≤ u ≤ π. tan u = √3 at u = π/3 and u = π/3 − π = −2π/3. x = 2u: x = 2π/3 or x = −4π/3. Classic mistake (crossed): "x = 2π/3 only".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Opening frame | t01's: y = 2sin(x − π/6), y = 1, 0 ≤ x ≤ 2π | 1 |
| Main case (site card 08) | sin(x − π/6) = ½; u ∈ [−π/6, 11π/6]; u = π/6, 5π/6; rejected 13π/6, −7π/6; x = π/3, π | 1 to 3, 8 |
| Calculator angle | sin⁻¹(½) = π/6 (inside value) | 1 |
| b = 2 case | sin 2x = √3/2 (√3 ≈ 1.73 grey); u ∈ [0, 4π]; u = π/3, 2π/3, 7π/3, 8π/3; x = π/6, π/3, 7π/6, 4π/3 | 4 |
| Level sweep | y = 1: 2; y = 2: 1 (x = 2π/3); y = 2.5: 0 | 5 |
| Graphical k problem | ends (0, −1), (2π, −1); peak (2π/3, 2); trough (5π/3, −2); counts: 2 on −2 < k < −1 and −1 < k < 2; 3 at k = −1 (x = 0, 4π/3, 2π); 1 at k = ±2 (x = 2π/3, 5π/3); answer −2 < k < −1 or −1 < k < 2 | 7 |
| Inequality | 2sin(x − π/6) ≥ 1 for π/3 ≤ x ≤ π | 9 |
| Closed ends (site Problem 3) | cos(x − π/4) = √2/2; u ∈ [−π/4, 7π/4]; u = −π/4, π/4, 7π/4; x = 0, π/2, 2π | 6 |
| tan case | tan 2x = 1 on [0, π]; u ∈ [0, 2π]; u = π/4, 5π/4; x = π/8, 5π/8; asymptotes π/4, 3π/4 | 7 |
| Graphing check | 1.047 ≈ π/3; 3.142 ≈ π | 8 |
| A1 (site SA 3) | u ∈ [−π/3, 5π/3]; u = ±π/6; x = π/6, π/2; crossed 13π/6 | 10, 11 |
| A2 | u ∈ [−π, π]; u = π/3, −2π/3; x = 2π/3, −4π/3; crossed "2π/3 only" | 12, 13 |
| Handoff (site lesson 2 Problem 1) | (0, 7.5), (6, 1.5); axes t 0 to 12 h, h 0 to 8 m | 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy `solveset` on each closed interval (2 Nov); Codex to re-check.

- 2sin(x − π/6) = 1 on [0, 2π]: {π/3, π}. 2sin(x − π/6) = 2 on [0, 2π]: {2π/3}.
- 2sin 2x = √3 on [0, 2π]: {π/6, π/3, 7π/6, 4π/3}.
- 2cos(x − π/4) = √2 on [0, 2π]: {0, π/2, 2π}; in the open u-interval (−π/4, 7π/4) only u = π/4.
- tan 2x = 1 on [0, π]: {π/8, 5π/8}; tan 2x undefined at π/4, 3π/4.
- A1: 2cos(x − π/3) = √3 on [0, 2π]: {π/6, π/2}. A2: tan(x/2) = √3 on [−2π, 2π]: {−4π/3, 2π/3}.
- 2sin(x − π/6) = k on [0, 2π]: k = −1 gives {0, 4π/3, 2π}; k = 2 gives {2π/3}; k = −2 gives {5π/3}; k = 1 and k = −1.5 give two each. 2sin(x − π/6) ≥ 1 on [0, 2π]: [π/3, π].
- π/3 = 1.047198; π = 3.141593; √3 = 1.732051.

## Memory aid check

- **"Do to the domain what you do to x."** Meaning: if the inside is u = bx + c, apply the same operations (multiply by b, add c) to both endpoints of the x-domain to get the u-window. Assumption checked: b > 0 keeps the order of the endpoints (for b < 0 the endpoints swap; not used in this strand's examples; key note 2 states b > 0). It is exact for any linear inside. It helps a new case: attempt 2 (halve the endpoints for x/2). Introduced after the method is seen three times (scenes 3, 4, 6).
- **"Count first, then solve."** The scene 5 cause (up once, down once per cycle), with its exceptions (max or min once; closed endpoints) printed in key note 4.
- **Considered, not used:** "ASTC" quadrant mnemonic (Year 11; the graph symmetry carries the same information here and works for transformed windows).

## Narration length estimate

Revision 1 count (2 Nov; by script `count_tgraphs.py`, build parser rules): **5,499 characters** (5,514 with the joining spaces), 16 scenes. Characters per scene (1 to 16): 363, 336, 498, 561, 408, 502, 556, 394, 485, 248, 115, 256, 107, 271, 324, 75. At 13.3 characters per second the speech is about 413 s; add about 20 s of settling time for the squash (2), the window slides and dot slides (3, 4, 6, 8) and the level sweeps (5, 7), 20 s for two countdowns, about 5 s of short holds (scenes 10, 12, 14, 15) and about 60 s more of the quiet notes hold (about 106 s of holds): **about 519 s**, at the 5,500 character floor (1 character under; the content is complete, so nothing is padded) and under the 570 s cap. Scenes 4 and 7 are the longest; the window stretch must finish before "That's two full cycles", and scene 7's sweep must reach each level as it is named. Reserve trims if the voiced take runs long: scene 3's last sentence (keep the tag); scene 9's last sentence (keep the counter); scene 1's last sentence (keep the glow). Trims take the count below 5,500; root decides whether a short video is preferred to the trims.

## Scene list and build ids

Lesson key `m-a12t02` (route math-a12-t02, draft). Suggested explainer folder `src/explainer/lessons/math-a12-t02` and build folder `docs/production/claude-pm/lessons/m-a12t02`.

In order (kebab-case; 16 scene headings): hook, isolate-squash, u-window, more-cycles, count-crossings, closed-endpoints, graphical-k, tan-branches, graphing-check, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`: four notes). Transitions: t01's last frame continues into scene 1 (camera continue, same window); 1 to 2 to 3 camera continue (the window map opens below); 3 to 4 clear change (new equation, same layout); 4 to 5 clear change back to the main case; 5 to 6 clear change; 6 to 7 clear change back to the main case; 7 to 8 clear change (tan window); 8 to 9 clear change (graphing panel); 9 to 10 camera pull back; attempts and feedback card shrink to the top; 14 to 15 board clear; 15 to 16 fade to the notes board; 16 cross-fades back to 15's frame.

Holds: attempt-1, attempt-2 (10 s countdown). key-notes quiet hold about 60 s. Review evidence paths: `learning_review` = `checks/m-a12t02-learning-review.md`, `science_check` = `checks/m-a12t02-maths-check.md`.

## Assets

Have (coded): `FunctionGraph` / `GraphLayer` with `transform` (yScale ½ on curve and line together; t01's yShift), `domain` with included endpoints, `asymptotes` with branch guard, `radianTicks(0, 2π, 6)` and custom ticks; `DomainStrip` with `heading` and `markerLabels` (scene 8); `ReadoutPanel.rows` (scene 9 readouts); `AlignedAlgebra`; shared `Countdown`, `QuestionCard`, `Chip` with `cross`, `Callout`, `PenArrow`, `KeyNotes`, `Heading`. Plate: the tide board (new, Codex asset brief), scene 15 only.

New parts (for the t02 build brief):
1. **`LevelLine`.** Props: `graph`, `level` (animatable y), `roots` ({x, label?, kind: 'cross' | 'touch'}[] supplied by the author for each level cue), `domain` ({from, to, includeFrom, includeTo}), `counter` (boolean). Draws an amber dashed horizontal line across the window, amber dots and drop lines at in-domain roots (grey hollow dots outside the domain), and an optional crossing counter. Validation: each supplied root satisfies |f(x) − level| < 1e−6 and lies in the declared domain unless marked outside; it does not find roots.
2. **`WindowMap`.** Props: `xDomain` ([p, q] with exact labels), `b`, `c` (animatable), `uLabels` (exact strings for the window ends), `uGraph` (the plain function spec for the u-panel, its own x-range), `uSolutions` ({u, label, inWindow}[]), `slideBack` (progress 0 to 1, moving each in-window u-dot to x = (u − c)/b on the main graph), `periodCopies` (optional {from, shift, label} to animate "+ 2π" copies). Two strips: the x-strip aligned with the main graph and a u-strip under a small u-panel; the u-strip animates from [p, q] by the map u = bx + c (scale then shift). Validation: the u-window ends equal bp + c and bq + c numerically; each in-window solution lies inside them and satisfies the plain equation.

## Codex asset brief

One painted plate, shared with t03 (decision: a context object, not a graph):
- **Tide board** (`public/assets/maths/m-a12-tide-board-v1.png`). A wooden harbour tide board (a vertical painted measuring board fixed to a pier pile), marked 0 to 8 metres with a numeral at each metre and short ticks at each half metre, seen front-on, in the explainer paper-and-watercolour style (match the existing chemistry plates such as `public/assets/chemistry/m6-ph-meter-probe-beaker-v1.png`). No water, no sky, no people, no boats, no birds, no text other than the numerals 0 to 8 and the letter "m" at the top. Transparent PNG with an alpha channel (not white). Portrait, about 600 × 1600 px; the 0 m and 8 m marks at measured pixel heights recorded in the delivery note so the build can align the coded water band (the band is drawn in code in front of the lower part of the board and must line up with the marks). Do not stretch the plate.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS on each closed interval, and the values in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the counting claim (author note d) and its exceptions as stated in scene 5 and key note 4, and that site correction 2 is right (only u = π/4 in the open interval).
3. Confirm every general rule carries its condition (b > 0 in key note 2; tan's period π; closed endpoints checked).
4. Confirm both attempt cards carry the full domain with inequality signs, and neither card or visual shows a window, count or value.
5. Confirm the syllabus quote matches the crosswalk text exactly and no site label appears in learner copy or metadata.
6. Confirm the opening frame equals t01's scene 15 frame and the final frame equals scene 15 here.
7. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling.
8. Confirm the narration character count by script.
9. Add site corrections 1 and 2 under Decisions to `../site-corrections-maths-a12.md` without duplicates.

## YouTube metadata (draft)

Title: Solving Trig Equations in a Domain Using the Graph | Year 12 Maths Advanced

(Title length: 76 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/further-graph-transformations-and-modelling/lesson01.sa.html

A calculator gives one angle, but y = 2sin(x − π/6) meets y = 1 twice between 0 and 2π. Find every solution in a stated domain: read crossings from the graph, move the domain into a u-window (do to the domain what you do to x), and slide the answers back. See why sin 2x gives four solutions in 0 to 2π, why a level line crosses twice per cycle (or touches once at the peak), how closed endpoints can give three solutions in one cycle, and how tan gives one solution per branch and never at an asymptote. Check it all on a graphing app. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 12, further graph transformations and modelling.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Solve equations and graphical problems involving transformations of the trigonometric functions f(x) = sin x, f(x) = cos x or f(x) = tan x, using graphing applications or otherwise, within a specified domain"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa3b2bda67

Builds on: Transforming trig graphs (previous video); Year 11 exact values and trig equations. Next: Modelling with trig functions.

#Year12Maths #MathsAdvanced #TrigEquations #HSCScience

## Open decisions

- **1. Year 11 trig-equation codename (root).** Entry knowledge cites Year 11 solving of sin x = k on [0, 2π] without a codename (no Year 11 ledger in this repo).
- **2. Tide board plate (root, Codex).** The plate first appears in this video's handoff. If the plate is not ready, the handoff can show the data points and the coded water band on a plain coded post; t03 needs the plate more.
- **3. "pi on six" spoken form (voice pilot; as t01 open decision 4).**
- **4. Site link form (root decision 15).**

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from t01 and Year 11 trig equations; check that the window map in scene 3 is followable at speed, that the dots sliding back read as "undo the substitution", that scene 5's sweep makes "two per cycle" a reason not a rule, that scene 6's three solutions are not read as an exception to memorise but as "check closed ends", and that the attempt cards give nothing away), then the Codex maths check and error check.
- The window slides, the dot slides and the level sweep carry the explanation; judge them at playback speed. Every dot must be placed from the same exact values as its label.
- t03 opens on scene 15's frame.
