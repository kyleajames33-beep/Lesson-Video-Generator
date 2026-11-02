# Maths A12 T01: How do shifts and scales change a trig graph? Outside the bracket acts on heights as written, inside acts on x the opposite way; amplitude, midline, period, horizontal translation and range for sin, cos and tan (design)

Status: Revision 2 (3 Nov): brief 153 repairs applied (scene 5 period rule scoped to sine and cosine with positive a and the repeated "from two pi to pi" cut; syllabus notation y = k f(a(x + b)) + c per root decision 21; spoken "pi over three" per root decision 22). Needs a Codex error check. Voicing gated by the brief 124 Google voice pilot. Build uses the brief 129 kit with the d01 addendum and the brief 131, 133, 135 and 143 additions (`FunctionGraph` and `GraphLayer` with `transform` xScale, xShift and yScale including negative yScale, `domain`, `asymptotes`, `radianTicks`; `ReadoutPanel.rows`; `AlignedAlgebra`); see "Assets" for two kit gaps and two new parts. Nothing recorded; human listening pending.

Narration 5,707 characters, 15 scenes, about 532 s, counted by script with the build parser rules (see "Narration length estimate"). Revision 1 was 5,625.

Scope: first video of the Year 12 Mathematics Advanced trig graphs and modelling strand (course outline playlist order 20; production order after math-a12-i05). Templates: `math-a12-d05.md` (Revision 2) and `math-a12-i05.md` (Revision 2): same section structure, voice, paper style and kit parts. All maths visuals are coded; no painted plates (programme decision 5). No pre-design pack exists: this design does the pack work. Site lesson read in full (2 Nov, read-only): `C:/Users/kygs/hscscience/subjects/maths-advanced/year12/further-graph-transformations-and-modelling/lesson01.sa.html`, SHA256 `e5b283c0d081397e3b156bdd31d6958d0280be5dfabd856746b8830ad4e19635` (recomputed 2 Nov; matches the crosswalk `siteLessonInventory`). Sections used: `apply-transformation-toolkit` (card 04), `determine-amplitude-period` (card 05), `determine-shifts` (card 06, its worked example kept exactly for the hook), `sketch-transformed-graphs` (card 07, five key points), worked Problem 1 (kept exactly as the worked example), SA 1 (attempt 1). Card 08, Problems 2 and 3 and SA 2 and SA 3 (solving) go to t02; the Ferris wheel hook and "Revisit" go to t03.

Owner rules applied: new 2024 syllabus only, content points cited by codename and exact wording, no site labels anywhere; maths visuals coded, never painted; no people (the site's Ferris wheel "passenger" is not used here); one reasoning stage at a time with only the needed earlier results kept; worked example as separate task, equation and grouped givens; "Pause here to answer." then a 10 s countdown with the full worded question kept on screen; givens underlined in the feedback as they are used; brief feedback with one crossed-out mistake; optional key-notes hold; Australian spelling; no em dashes; conversational narration that explains the cause before the rule. Root decisions applied from the start (`root-decisions-maths-d05-d10.md`, `root-decisions-maths-d11-i05.md`): exact values in the algebra (π/3, π/4, π/6, 2π/3) with no decimals needed; transformations named precisely with their scope (a vertical dilation multiplies every height by k; a horizontal dilation by a factor 1/a moves every point's x-value to x/a; a translation moves every point without changing the shape); x in radians on every radian window; attempt cards give neither the answer nor its sign; domain and range stated with their conditions (tan's domain excludes its asymptotes); spoken "next" lines true in production order (root decision 4), and the first sentence true in either playlist position (brief).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 12, focus area "Further graph transformations and modelling"; NESA content-system codenames, official `code` field empty), quoted from `docs/production/programme/syllabus/maths-advanced-2024-y12-crosswalk.json` with the MathML written in linear form:

- `ciaa74eede`: "Use graphing applications to explore reflections, translations and dilations of, and confirm that the principles of transformations hold for, the trigonometric functions f(x) = sin x, f(x) = cos x and f(x) = tan x"
- `cic7027e0d`: "Apply the principles of transformations to graph transformations of the trigonometric functions f(x) = sin x, f(x) = cos x and f(x) = tan x, describe which transformations have been applied to y = f(x) and determine the domain, range, horizontal translation, vertical translation, dilation factor, period and amplitude when applicable"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa3b2bda67

**Boundary:** starts from i05's last frame (y = cos x on 0 ≤ x ≤ π/2 with eight left-endpoint rectangles and the chips "Next: add up thin rectangles" and "?"); the rectangles and chips clear silently and the window opens to the full cosine curve. Teaches, one parameter at a time on y = k f(a(x + b)) + c (the 2024 syllabus form) with a > 0: vertical dilation and reflection in the x-axis (k), vertical translation and midline (c), horizontal translation and its bracket sign (b with a = 1), horizontal dilation and period (a), writing the inside as a(x + b) before reading the translation, and tan's period, moving asymptotes, domain and range (no amplitude). Applies all four to site Problem 1 with a five-key-point sketch, and confirms the principles with a graphing-application style build. Stops at describing transformations and stating features. Not taught: solving equations (t02), modelling (t03), a < 0 beyond a grey chip, reciprocal trig graphs, calculus of transformed graphs (d05 and d06 already used slides and stretches for slopes; not repeated).

## Decisions

- **Learner question kept (course outline).** "How do shifts and scales change a trig graph?" The answer, built in order: a number outside the function acts on every height exactly as written (multiply by k, then add c); a number inside acts on every x-value the opposite way (x − π/3 slides right; 2x squashes by a half), because the new curve must reach the same inside value at a different x. Write the inside as a(x + b) first so the translation is read from x itself. tan follows the same principles with period π, moving asymptotes, range all real numbers and no amplitude.
- **Draft route entry (for root; no route entry exists).**
  - `id`: math-a12-t01; `playlistOrder`: 20 (outline); production order after i05.
  - `syllabusActionIds`: `ciaa74eede`, `cic7027e0d` (both owned by this video in the outline `contentPointOwners`; `coverage: owned-action`).
  - `entryKnowledge`: Year 11 `cid79268a8` (graphs of sin, cos and tan in radians with intercepts, asymptotes, domains, ranges, period and amplitude); Year 11 `ciccaa78be` (radians and exact values); Year 11 graph transformations of y = f(x) (translations, dilations and reflections; codename to be added by root from the Year 11 ledger, which is not in this repo); d01 (sideways stretch and slide language).
  - `start`: "Open on i05's cos x frame and change y = cos x to y = 2cos(x − π/3) + 1; ask why the minus sign moves the peak right."
  - `stop`: "Describe the transformations of sin, cos and tan in y = k f(a(x + b)) + c (a > 0) and state amplitude, period, horizontal and vertical translation, dilation factor, domain and range. Keep equation solving for t02 and modelling for t03."
  - `next`: "math-a12-t02: solve transformed trig equations in a stated domain from the graph."
  - `sources`: further-graph-transformations-and-modelling/lesson01.sa.html (cards 04 to 07, Problem 1, SA 1), SHA256 above.
- **Opening frame and the first sentence (brief; root decision 4).** The video opens on i05's final frame exactly. In the first second, silently, the rectangles fade, both chips clear and the window enlarges from 0 ≤ x ≤ π/2 to the main window while the cosine curve extends. The first sentence, "Here's the cosine curve, with x in radians.", says nothing about the previous video, so it stays true if the playlist later places t01 after d19 (then only the opening visual frame changes; see open decision 1).
- **The hook surprise (site card 06 worked example, kept exactly).** y = cos x becomes y = 2cos(x − π/3) + 1: taller, higher, and shifted right although the bracket shows a minus sign. The peak lands at (π/3, 3). Pack misconception "the bracket sign gives the direction" is raised here and resolved in scene 4.
- **One parameter per scene (motion standard; one reasoning stage).** Each parameter is a slider in a small `TransformPanel` beside the graph; the equation slot for that parameter glows amber while the curve changes and every other slot stays fixed. The grey dashed parent curve stays as the reference. The order (k, c, b, a) moves from what students already trust (outside, as written) to the surprise (inside, opposite).
- **Cause of the inside rule (scene 4).** The new curve reaches at x what the old reached at x − π/3; the old peak is where the inside is zero, so the new peak is where x − π/3 = 0, at x = π/3. The visual tags the inside value under the moving peak ("inside = 0") so the reason is seen, not memorised. Scene 5 uses the same idea for 2x: one cycle needs the inside to run 0 to 2π, which is done when x = π.
- **Factor the inside first (site card 06 "Factor out b first", example sin(2x + π) kept).** The wrong reading "slide left π" is shown as a ghost and crossed: sin 2x slid left by π lands back on sin 2x (π is its period), while the true curve sin(2(x + π/2)) = −sin 2x is upside down compared with it (author note d). The order squash-then-slide matches the kit's transform (X = xScale·x + xShift).
- **tan (syllabus names tan; site gives only its period).** Scene 7 adds original teaching: tan 2x has period π/2, asymptotes at x = π/4 + kπ/2 (moved by the squash), domain all real x except those, range all real numbers, no amplitude; a number in front is a vertical dilation factor but not an amplitude ("when applicable" in `cic7027e0d`).
- **Worked example (site Problem 1, numbers kept exactly).** y = −3cos(2x − π/2) − 1: factor to −3cos(2(x − π/4)) − 1; horizontal dilation by factor ½ (period π), translation right π/4, vertical dilation by factor 3 with reflection in the x-axis (amplitude 3), translation down 1 (midline y = −1); range −4 ≤ y ≤ 2; domain all real x. The five-key-point sketch (site card 07) is shown as one sentence and five dots: one cycle from π/4 to 5π/4 with key points every quarter period π/4, values −4, −1, 2, −1, −4. The check point (π/4, −4) confirms the reflection.
- **Graphing confirmation (`ciaa74eede`).** Scene 9 rebuilds the worked curve in a plain coded "graphing check" panel one change at a time (`TransformPanel` sliders driving the curve), and each intermediate curve lands on the predicted one (dashed target curves). The narration invites the student to repeat it with any graphing app.
- **Attempts (site SA 1 re-pointed; original tan question).** (A1) y = −2cos(3x − π/2) + 4: amplitude 2, period 2π/3, translated right π/6, range 2 ≤ y ≤ 6. The site asks for a sketch and max/min; the card asks only for the four features so the 10 s countdown is fair (the sketch is a follow-up in the description). Crossed: "right π/2" (a not factored out). (A2) y = tan(x/2) + 1: horizontal dilation by factor 2, translation up 1, period 2π, range all real numbers. Crossed: "period 4π" (the sin/cos rule 2π/b used for tan).
- **Mistake scene:** none separate. "The bracket sign gives the direction" (hook, scene 4; key note 3); "the amplitude can be negative" (scene 2; key note 2); "sin(2x + π) slides left π" (scene 6, crossed ghost; feedback 1, crossed); "tan has an amplitude", "tan's period is 2π/a" (scene 7; feedback 2, crossed).
- **Memory aid:** "Outside: on y, as written. Inside: on x, the opposite." Its reason is the scene 4 cause; its condition (factor the inside first) is stated with it (see "Memory aid check").
- **Handoff teaser.** Scene 14 shows y = 2sin(x − π/6) on 0 ≤ x ≤ 2π with the line y = 1 and a chip "solutions in 0 ≤ x ≤ 2π: ?" (site card 08 worked example, which t02 opens on). No intersection markers.
- **Site sources used:** card 04 (the four parameters; the negative-a note), card 05 (amplitude |a|, period 2π/|b| and π/|b|, max d + |a|, min d − |a|), card 06 (the worked example 2cos(x − π/3) + 1, the bracket-sign warning, "factor out b first" with sin(2x + π)), card 07 (five key points), Problem 1 (worked example, kept), SA 1 (attempt 1, re-pointed), MC Q1 (the amplitude of −3 sin 2x + 1 is 3; used in key note 2 wording).
- **Misconceptions listed (pack work):** (1) the bracket sign gives the direction of the horizontal translation; (2) amplitude = a, possibly negative; (3) reading the translation as the inside number instead of that number ÷ a (π/2 instead of π/6 for 3x − π/2); (4) period = 2π × a, or a itself; (5) tan's period is 2π/a; (6) tan has an amplitude; (7) the vertical shift changes the amplitude; (8) a horizontal dilation by factor ½ "doubles" the graph's width. All are addressed in scenes 2 to 7 and the feedback.
- **Site corrections (quoted from site lesson 1, read 2 Nov; for `../site-corrections-maths-a12.md`):**
  1. Card 04: "Order of operations: first apply the horizontal dilation and phase shift inside the function, then the vertical dilation outside, then the vertical translation." The amount of the horizontal translation depends on the order of the two inside steps (dilate then translate by −c/b, or translate by −c then dilate), and the sentence does not say which. Suggest: "Factor first: y = a·f(b(x + c/b)) + d. Dilate horizontally by a factor 1/|b|, translate horizontally by −c/b, then dilate vertically by a and translate vertically by d."
  2. Card 05: "Amplitude and period are the two most commonly tested features of a transformed trig graph." and "These two formulas are the most frequently examined." Unsupported frequency claims (as d05 site item 1). Suggest: "Amplitude and period describe the shape of the wave."
  3. Card 06: "Many students get this backwards." Unsupported frequency claim. Suggest: "This direction is easy to reverse by mistake."
  4. Card 07: "Missing labels cost marks even when the shape is correct." Unsupported marking claim. Suggest: "Label these features so the sketch shows them."
  5. Coverage note (not an error): `cic7027e0d` names tan; the site gives tan's period π/|b| but no transformed tan graph, moving asymptotes, domain or range. This video adds them (scene 7).
  - Checked and correct: card 05 example 3 sin 2x (amplitude 3, period π); card 06 example (right π/3, max 3, min −1); sin(2x + π) = sin(2(x + π/2)); card 07 example −2 sin(πx + π) (period 2, left 1); Problem 1 (amplitude 3, period π, right π/4, midline −1, max 2, min −4); SA 1 (amplitude 2, period 2π/3, right π/6, max 6, min 2, trough at π/6, peak at π/2); MC Q1 to Q5.
- **Cause chain taught, in order:** (1) the hook curve changes in three ways and the minus sign moves the peak right (1); (2) multiplying every height by k stretches vertically by k; zeros stay; k < 0 also reflects; amplitude |k| (2); (3) adding c moves every point up c; midline y = c; range c − |k| to c + |k| (3); (4) the new curve does at x what the old did at x − π/3, so everything happens π/3 later: right π/3 (4); (5) the inside 2x completes a cycle by x = π, so the period halves: 2π/a (5); (6) factor a out to read the translation from x (6); (7) tan: period π/a, asymptotes move, range all real, no amplitude (7); (8) apply and sketch (8); (9) confirm by building on a graphing app; remember outside as written, inside opposite (9).
- **Entry knowledge:** see the draft route entry. Also assumed: exact values cos 0 = 1, the shape of each parent graph, "period" and "amplitude" as Year 11 words (recalled with their plain meaning at first use).
- **Learner-visible vocabulary (plain meaning at first use):** vertical dilation (a stretch or squash up and down, scene 2); amplitude (the distance from the midline up to a peak, scene 2); reflection in the x-axis (a flip over the x-axis, scene 2); vertical translation (a slide up or down, scene 3); midline (the middle line the wave goes around, scene 3); range (the set of y-values the graph reaches, scene 3); horizontal translation (a slide left or right, scene 4); period (the length of one cycle, scene 5); horizontal dilation (a squash towards or stretch away from the y-axis, scene 5); asymptote (a vertical line the curve never meets, scene 7); dilation factor (the number every distance is multiplied by, scenes 5, 7).
- **Legacy logic ported:** none.
- **New explainer motion (coded):** **window opening** from i05's frame (camera continue); **one-parameter transforms** (`FunctionGraph` `transform` driven by `TransformPanel` sliders; kit gap 1 adds `yShift`); **feature marks** (midline, amplitude bars, period bracket, range bracket on the y-axis; new part `FeatureMarks`); **inside-value tag** riding the peak (scene 4); **wrong-slide ghost** crossed (scene 6); **asymptotes moving with the squash** (scene 7; `asymptotes` carried by the transform, kit gap 2); **five key dots** (scene 8); **graphing check** rebuild (scene 9); aligned algebra (`AlignedAlgebra`), `Chip` with `cross`, `Callout`, `PenArrow`, `Countdown`, `QuestionCard` (subject "Mathematics Advanced"), `KeyNotes`.
- **Board layout (constant):** heading top-left; main graph on the left (about 1,050 × 640 px); `TransformPanel` (equation with four slots and four short sliders) top right; chips and algebra below it in the right column. Main window x from −π to 2π (`radianTicks(-π, 2π, 2)`), y from −4.5 to 3.5 (integer ticks), for scenes 1 to 6 and 8 to 9. Scene 7 uses its own window (x from −π to π, y from −4 to 4, ticks every π/4). Scene 14 uses 0 ≤ x ≤ 2π, y from −2.5 to 2.5. Equal unit lengths are not needed.
- **No human figures, no painted plates.**
- **Author notes (not learner copy):**
  (a) Horizontal translation: if g(x) = f(x − h), then g(t + h) = f(t), so each point (t, f(t)) of y = f(x) moves to (t + h, f(t)): a translation right by h. With h = π/3: cos(x − π/3) peaks where x − π/3 = 0. For the hook, y = 2cos(x − π/3) + 1 has maximum 3 at x = π/3 (+2kπ), minimum −1 at x = 4π/3 (+2kπ), y-intercept 2.
  (b) Horizontal dilation: if g(x) = f(ax) with a > 0, each point (t, f(t)) moves to (t/a, f(t)): a dilation from the y-axis by factor 1/a. Period of sin(ax) and cos(ax) is 2π/a; of tan(ax), π/a. For a < 0 the graph is also reflected in the y-axis and the period uses |a| (grey chip in scene 5 only: cos(−x) = cos x, sin(−x) = −sin x).
  (c) Combined: y = k f(a(x + b)) + c is y = f(x) dilated horizontally by factor 1/a, translated horizontally by −b (b < 0 is a slide right), dilated vertically by factor k (reflected in the x-axis if k < 0), translated vertically by c, in that order. The kit's `transform` (X = xScale·x + xShift, Y = yScale·y, plus the requested yShift) applies the same order with xScale = 1/a, xShift = −b, yScale = k, yShift = c. Sources that write a f(bx + c) + d (as the site does) have k = a, a = b, b = c/b, c = d.
  (d) Scene 6: sin(2x + π) = sin(2(x + π/2)) = −sin 2x. The wrong reading "sin 2x slid left by π" gives sin(2(x + π)) = sin(2x + 2π) = sin 2x, which differs from −sin 2x except at its zeros. Visual: the crossed ghost coincides with sin 2x; the true curve is its reflection.
  (e) Scene 7: tan(2x) has asymptotes where 2x = π/2 + kπ, x = π/4 + kπ/2; on −π ≤ x ≤ π: ±π/4, ±3π/4. Domain: x ≠ π/4 + kπ/2; range: all real numbers; period π/2.
  (f) Worked: y = −3cos(2x − π/2) − 1 = −3 sin 2x − 1 (grey identity, not used in the teaching). Values: x = π/4: −4; π/2: −1; 3π/4: 2; π: −1; 5π/4: −4; x = 0: −1. Range −4 ≤ y ≤ 2.
  (g) A1: y = −2cos(3x − π/2) + 4 = −2cos(3(x − π/6)) + 4 = 4 − 2 sin 3x. Amplitude 2; period 2π/3; right π/6; midline 4; range 2 ≤ y ≤ 6; trough (π/6, 2), peak (π/2, 6). Crossed: right π/2 (the inside number π/2 read without dividing by a = 3). A2: y = tan(x/2) + 1: horizontal dilation by factor 2 (x/2 = ½x; factor 1/(½) = 2), translation up 1; period π ÷ ½ = 2π; asymptotes x = π + 2kπ; range all real numbers; no amplitude. Crossed: 4π = 2π ÷ ½.
  (h) Pronunciations: "sine" (not "sin"), "cos" (pilot item), "tan", "pi over three" (series form, root decision 22), "minus pi over two", "x over two" (x divided by two).

Main question: *Change y = cos x to y = 2cos(x − π/3) + 1 and the peak moves right, even though the bracket says minus. How does each number in the equation change the graph, and why?*
Entry knowledge (Year 11 `cid79268a8`, `ciccaa78be`, Year 11 graph transformations; d01): the graphs of sin, cos and tan in radians with their periods, amplitudes and asymptotes; exact values; translations, dilations and reflections of y = f(x).
Stops after: describing the transformations of sin, cos and tan in y = k f(a(x + b)) + c with a > 0; stating amplitude, period, horizontal and vertical translation, dilation factor, domain and range; a five-key-point sketch; a graphing-application check. No equation solving or modelling.
Handoff: solving transformed trig equations in a stated domain, starting from 2sin(x − π/6) = 1 on 0 ≤ x ≤ 2π (math-a12-t02).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key: the parent curve grey dashed; the current curve blue (cos family) or navy (sin family); tan curves blue with red dashed asymptotes; the parameter being changed amber in the `TransformPanel` equation; midline teal dashed; amplitude bars navy; period bracket amber; range bracket grey on the y-axis; readouts navy; givens navy; the current answer bright; earlier lines dim. Screen maths writes π fractions as built-up fractions where space allows. Every window has radian ticks.

### 1. hook (the minus sign that moves the peak right)
> Here's the cosine curve, with x in radians. Now change its equation to y equals two cos of x minus pi over three, plus **one**. The curve gets taller, it lifts up, and it slides. But look at the peak. The bracket says minus pi over three, yet the peak has moved **right**, to pi over three. Each part of the equation does one job. Let's take them one at a time, and see why each one moves the graph the way it does.

Visual: opens on i05's last frame (y = cos x on 0 ≤ x ≤ π/2, eight left-endpoint rectangles, chips "Next: add up thin rectangles" and "?"). Silently in the first second the rectangles fade, the chips clear and the window enlarges to the main window (x from −π to 2π, radian ticks; y from −4.5 to 3.5) while cos x extends across it (blue). Heading writes on: "Transforming trig graphs: shifts and scales". The `TransformPanel` appears top right showing "y = 1·cos(1·(x + 0)) + 0" (syllabus form y = k f(a(x + b)) + c). On "one" cos x leaves a grey dashed ghost and the curve animates to y = 2cos(x − π/3) + 1 (all three changes together, about 1.5 s); the panel reads "y = 2cos(x − π/3) + 1". On "right" a ring marks the new peak (π/3, 3) and a small amber arrow runs from the ghost's peak (0, 1) to it; the "− π/3" in the equation glows with a "?" tag. On "one at a time" the curve returns to the ghost (about 0.8 s); the panel resets to "y = cos x".

### 2. outside: multiply every height (vertical dilation, amplitude, reflection)
> Start outside the bracket. In y equals two cos x, every height of the cosine curve is multiplied by **two**. Peaks at one rise to two, troughs fall to minus two, and the points on the axis stay put, because two times zero is still zero. This is a vertical dilation, a stretch, by a factor of two. The amplitude, the distance from the middle line up to a peak, is now **two**. What if the factor is minus two? Every height also changes sign, so the curve flips over the x-axis. The amplitude is still two, because a distance can't be **negative**.

Visual: the "k" slider glows amber. On "two" (first) `transform.yScale` animates 1 → 2 (about 1.2 s); short navy arrows rise from the ghost's peaks and fall from its troughs; the x-intercepts at ±π/2, 3π/2 get small rings (tag "× 2: zero stays zero"). Chip: "vertical dilation, factor 2". On "two" (second) navy amplitude bars draw from the x-axis (the midline here) to the peaks at (0, 2) and (2π, 2), labelled "amplitude 2". On "flips over the x-axis" yScale animates 2 → −2 through 0 (the fold, labels hidden near 0, as i05); the peaks become troughs; chip "k < 0: reflection in the x-axis". On "negative" the amplitude bars redraw from the midline to the new peaks at (±π, 2) and keep "amplitude 2"; a chip "amplitude = |k| = 2" writes, and beside it a small chip "amplitude −2" is crossed. Grey chip, small, lower right: "reflection in the y-axis: cos(−x) = cos x, sin(−x) = −sin x". At the end yScale returns to 2.

### 3. outside: add to every height (vertical translation, midline, range)
> Now add one, outside the bracket. Every height goes up by one, so the whole curve slides up one **unit**. Its middle line, the midline, moves from the x-axis to y equals **one**. The shape doesn't change, so the amplitude is still two. The highest value is the midline plus the amplitude, three, and the lowest is the midline minus the amplitude, minus one. So the range is from minus one to **three**.

Visual: the "c" slider glows. On "unit" the curve y = 2cos x slides up 1 (kit gap 1: `transform.yShift` 0 → 1, about 1 s), small up-arrows at three points. On "one" (second) a teal dashed midline y = 1 draws across the window (label "midline y = 1"). The amplitude bars ride up with the curve and keep "2". On "three" a grey range bracket draws on the y-axis from −1 to 3; the peak and trough heights tag "1 + 2 = 3" and "1 − 2 = −1"; chip "range: −1 ≤ y ≤ 3".

### 4. inside: the bracket sign (horizontal translation)
> Now the surprising one, inside the bracket. In cos of x minus pi over three, the curve does at x what the old curve did at x minus pi over **three**. The old peak was where the inside equals zero. Now the inside is zero when x equals pi over **three**. Everything happens pi over three later, so the graph slides right by pi over **three**. That's a horizontal translation. The minus sign in the bracket means a slide to the **right**. A plus sign would mean a slide to the left.

Visual: the "b" slider glows; the curve stays y = 2cos x + 1 with ghost. On "three" (first) a small inside-value tag "inside = x − π/3" appears under the cursor, and two x-axis markers show x and x − π/3 joined by a short bracket. On "three" (second) the curve slides right by π/3 (`transform.xShift` 0 → π/3, about 1.2 s); the inside-value tag rides under the moving peak reading "inside = 0" the whole way, landing at x = π/3; the peak ring marks (π/3, 3). On "three" (third) the trough ring (4π/3, −1) and the crossings show the same short amber arrows "π/3 later". On "right" the "− π/3" in the panel glows and a chip writes "x − π/3: slide right π/3". On the last sentence a faint dotted preview of cos(x + π/3) slides left from the ghost and fades (tag "+: left"). The full hook curve y = 2cos(x − π/3) + 1 now stands; panel matches it.

### 5. inside: a number multiplying x (horizontal dilation, period)
> What about a number multiplying x? In y equals cos two x, the inside runs twice as fast as **x**. One full cycle needs the inside to go from zero to two pi, and that's finished when x reaches **pi**. So the period, the length of one cycle, halves to **pi**. The graph is squashed towards the y-axis, a horizontal dilation by a factor of one half. In general, for sine and cosine with positive a, the period is two pi divided by a. A half inside would double the period, to four **pi**.

Visual: board resets to y = cos x (blue) and its ghost on the main window; the panel reads "y = cos(ax)" with the "a" slider amber. On "x" (first) a twin readout under the x-axis: "x" and "inside 2x" ticking together (x 0 → π/2, inside 0 → π). On "pi" (first) `transform.xScale` animates 1 → ½ (about 1.2 s); an amber period bracket shrinks from [0, 2π] to [0, π] with the inside readout reaching "2π" as x reaches "π". On "pi" (second) the bracket labels "period π"; two full cycles now fit in [0, 2π] (both brackets). Chip: "horizontal dilation, factor ½". A line writes, as the speech says "for sine and cosine with positive a": "sin and cos: period = 2π ÷ a" (with the grey note "a > 0 here; in general 2π ÷ |a|"). On "pi" (last) xScale animates ½ → 2 (cos(x/2)), the bracket stretches to "period 4π" (extending past the window edge with an arrow), then returns to 1.

### 6. factor out b before reading the slide
> When there's a number multiplying x and a number added, take the number out first. Here's y equals sine of two x plus **pi**. It's tempting to say it slides left by pi. But the inside is zero when two x plus pi is zero, which is at x equals minus pi over **two**. Factor out the two, and you get sine of two, bracket x plus pi over two. So, squash by a factor of a half, then slide left by pi over **two**. Sliding left by pi would land right back on sine two x, which is **wrong**: the true curve is upside down compared with it.

Visual: board shows y = sin x (navy) and its ghost; panel "y = sin(2x + π)". On "pi" (first) the equation writes. On "two" (first) the inside-value tag at x = −π/2 reads "2x + π = 0"; a ring marks (−π/2, 0). `AlignedAlgebra` row: "sin(2x + π) = sin(2(x + π/2))". On "two" (second) two steps run one after the other: xScale 1 → ½ (sin 2x, tag "squash ½"), then xShift 0 → −π/2 (tag "left π/2"); the curve lands on sin(2(x + π/2)). On "wrong" a dashed grey ghost of "sin 2x slid left π" draws and lies exactly on sin 2x (tag "left π: back on sin 2x"); a chip "sin(2x + π): left π" is crossed. The true curve glows; a grey chip "= −sin 2x".

### 7. tan follows the same rules
> The same rules work for tan x, with two differences. Tan x repeats every pi, not two pi, so in y equals tan two x, the period is pi divided by two, pi over **two**. The asymptotes, the vertical lines the curve never meets, move with the squash, to pi over four, three pi over four, and so on, every pi over **two**. And tan has no highest or lowest value. Its range is all real numbers, so it has no **amplitude**. A number in front still stretches it vertically, by that dilation factor, but it's not called an amplitude.

Visual: clear change to the tan window (x from −π to π, ticks every π/4; y from −4 to 4). y = tan x (blue) on its three pieces with red dashed asymptotes at ±π/2 and a grey bracket "period π" on [−π/2, π/2]. On "two" (first) xScale animates 1 → ½: the pieces and the asymptotes move together (kit gap 2: `asymptotes` carried by `transform`); the bracket shrinks to "period π/2". On "two" (second) the asymptote labels write "−3π/4, −π/4, π/4, 3π/4"; chip "domain: x ≠ π/4 + kπ/2". On "amplitude" a grey range bracket runs the full y-axis with arrows at both ends ("range: all real y"); chip "amplitude: not applicable". On the last sentence yScale animates 1 → 3 briefly (y = 3 tan 2x), tag "vertical dilation, factor 3"; a small chip "amplitude 3" is crossed; yScale returns to 1.

### 8. worked example: describe and state the features
> Let's put it together. For y equals minus three cos of two x minus pi over two, minus one, describe the transformations, and state the amplitude, period, horizontal translation and **range**. Factor the inside first: two, bracket x minus pi over **four**. So, squash horizontally by a factor of a half: the period is **pi**. Slide right by pi over **four**. Stretch vertically by a factor of three and reflect in the x-axis: the amplitude is **three**. Then shift down one, so the midline is y equals minus **one**. The range runs from minus four to **two**. To sketch it, mark one cycle from pi over four to five pi over four, with a key point every quarter **period**. At pi over four, the inside is zero, cos is one, and y is minus **four**: a trough, as the reflection predicts.

Visual: clear change to a calculation layout: task strip "Describe the transformations; state the amplitude, period, horizontal translation and range"; equation strip "y = −3cos(2x − π/2) − 1" (site Problem 1); givens group (navy): "k = −3", "a = 2", "c = −1" (written on "range"), with the inside "2x − π/2" shown as printed; the factored "b = −π/4" writes at the factoring row. Main window on the left with the grey dashed parent y = cos x. `AlignedAlgebra`: on "four" (first) "y = −3cos(2(x − π/4)) − 1". Each later sentence writes one row and applies one transform on the graph: on "pi" "horizontal dilation, factor ½: period = 2π ÷ 2 = π" (xScale 1 → ½); on "four" (second) "translation right π/4" (xShift 0 → π/4); on "three" "vertical dilation, factor 3, reflection in the x-axis: amplitude 3" (yScale 1 → −3, the fold); on "one" "translation down 1: midline y = −1" (yShift 0 → −1; teal midline). On "two" "range: −4 ≤ y ≤ 2" (range bracket; "domain: all real x" grey beside it). On "period" five amber dots appear at x = π/4, π/2, 3π/4, π, 5π/4 with tags "−4, −1, 2, −1, −4" and a bracket "one cycle, quarter period π/4". On "four" (last) the dot (π/4, −4) glows; tag "inside 0, cos 0 = 1, y = −3(1) − 1 = −4".

### 9. graphing check and memory aid
> Try this on a graphing app: build the curve one change at a time, and each step lands exactly where the rules say. Here's a way to remember it. Outside the bracket changes y, and does what it **says**: times minus three, then minus one. Inside the bracket changes x, and does the **opposite**: times two squashes by a half, and, once you've factored, minus pi over four slides **right**.

Visual: the graph is framed as a plain coded "graphing check" panel (no product name). The worked curve is erased to the parent cos x; the four `TransformPanel` sliders move one after another (about 0.8 s each, during the first sentence) and the curve lands each time on a dashed target curve drawn in advance (tick on each). On "says" the memory aid writes large in the right column, line one: "Outside: on y, as written." with "× (−3)" and "− 1" tags. On "opposite" line two: "Inside: on x, the opposite." with "× 2 → squash ½". On "right" "− π/4 → right π/4", and a small grey condition under both lines: "factor the inside first". Hold about 2 seconds. A one-line grey note sits under the panel: "Some sources write a f(bx + c) + d."

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. For y equals minus two cos of three x minus pi over two, plus four, state the amplitude, the period, the horizontal translation, and the range. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "For y = −2cos(3x − π/2) + 4, state the amplitude, the period, the horizontal translation and the range." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no graph, no factored form, no panel).

### 11. feedback 1 (brief)
> The amplitude is **two**. The period is two pi over **three**. Factor the inside: three, bracket x minus pi over **six**, so it slides right by pi over six. The midline is four, so the range is from two to **six**. Sliding right by pi over two forgets to factor out the **three**.

Visual: card shrinks to the top. On "two" "−2" in the card is underlined; row "amplitude = |−2| = 2" (bright). On "three" (first) "3x" underlined; row "period = 2π ÷ 3 = 2π/3". On "six" (first) "− π/2" underlined; row "y = −2cos(3(x − π/6)) + 4: right π/6" (bright). On "six" (second) "+ 4" underlined; row "range: 4 − 2 ≤ y ≤ 4 + 2, so 2 ≤ y ≤ 6" (bright, boxed); a small thumbnail of the curve with trough (π/6, 2) and peak (π/2, 6). On "three" (last) a chip "right π/2" fades in and is crossed (caption "factor out 3 first"). Hold about 1 second.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. Describe the transformations that map y equals tan x onto y equals tan of x over two, plus one. Then state the period and the range. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Describe the transformations that map y = tan x onto y = tan(x/2) + 1. State the period and the range." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no graph).

### 13. feedback 2 (brief)
> Inside, x over two does the opposite of halving: it's a horizontal dilation by a factor of **two**. Outside, plus one shifts the graph up one **unit**. Tan repeats every pi, so the period is pi divided by a half: two **pi**. The range is all real **numbers**. Four pi comes from using the sine and cos rule, two pi over a, for **tan**.

Visual: card shrinks to the top. On "two" (first) "x/2" underlined; row "horizontal dilation, factor 2" (bright); a thumbnail of tan x stretching sideways, asymptotes moving from ±π/2 to ±π. On "unit" "+ 1" underlined; row "translation up 1". On "pi" row "period = π ÷ ½ = 2π" (bright, boxed). On "numbers" row "range: all real y" (bright). On "tan" a chip "period 4π" fades in and is crossed (caption "2π ÷ a is for sin and cos"). Hold about 1 second.

### 14. handoff
> So outside changes the heights as written, and inside changes the x values the opposite way. Next, we'll use these graphs to solve equations. Here's y equals two sine of x minus pi over six, and the line y equals one, from zero to two pi. Where do they meet, and how can we be sure we've found every **solution**?

Visual: board clears. The memory aid from scene 9 shows small at the top, then fades on "Next". A window x from 0 to 2π (radian ticks, endpoints marked with filled dots on the axis), y from −2.5 to 2.5: y = 2sin(x − π/6) draws in navy (label), then the amber dashed line y = 1 draws across (label "y = 1"). A grey domain bracket "0 ≤ x ≤ 2π" under the axis. On "solution" a chip "solutions in 0 ≤ x ≤ 2π: ?" No intersection markers. Chip: "Next: solving trig equations from the graph". Hold about 2 seconds.

### 15. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Factor first: write the inside as a(x + b), for example 3x − π/2 = 3(x − π/6). Then y = k f(a(x + b)) + c (here a > 0).
2. Outside acts on y as written: vertical dilation by factor k (k < 0 also reflects in the x-axis), amplitude |k|; vertical translation c, midline y = c; for sin and cos the range is c − |k| ≤ y ≤ c + |k|.
3. Inside acts on x the opposite way: horizontal dilation by factor 1/a; period 2π/a for sin and cos, π/a for tan; horizontal translation −b (x + b slides left b, so b = −π/6 slides right π/6).
4. tan: asymptotes move with the graph; domain excludes them; range all real y; no amplitude.

Memory aid (large, on the notes screen): *Outside: on y, as written. Inside: on x, the opposite.* Second line: *Factor the inside first.* Small grey line: *Some sources write a f(bx + c) + d.*

Visual (end of the hold, silent, no added speech): the key-notes hold ends by cross-fading (1 s, shared component; series rule, root decision 20) back to scene 14's frame exactly (y = 2sin(x − π/6), the line y = 1, the domain bracket and the chips). This is the final frame and t02's opening frame.

## Teaching checks

- **Does it explain causes?** Why the amplitude is |k|: every height is multiplied by k and a distance can't be negative (2). Why the range is c ± |k|: the midline moves to c and the amplitude is unchanged (3). Why the minus sign slides right: the new curve does at x what the old did at x − π/3, so its peak is where the inside is zero, at π/3 (4). Why the period is 2π/a: the inside must run through 2π for one cycle, which takes x only up to 2π/a (5). Why factor first: the inside is zero at x = −π/2, not −π (6). Why tan has no amplitude: its range is all real numbers (7).
- **Misconceptions addressed:** the eight listed under Decisions (scenes 2 to 7; feedback 1 and 2, crossed; key notes 2 to 4).
- **One idea at a time:** one parameter per scene with only its slider lit; scene 6 adds only "factor first"; scene 8 writes one row and one transform per spoken step.
- **Video makes it easier:** the student watches heights double while zeros stay (2), the fold through zero (2), the midline lift (3), the inside-value tag ride under the peak reading 0 as it slides right (4), the period bracket shrink as the inside readout races to 2π (5), the wrong ghost land back on sin 2x (6), asymptotes move with the squash (7), and the curve built change by change landing on targets (8, 9).
- **Response opportunity:** two unseen HSC-style tasks with every condition visible, 10 seconds each with the invitation to pause, nothing answer-bearing; neither card gives the factored form or any feature. One crossed mistake each; feedback about 20 s and 25 s.
- **Avoided double teaching:** the parent graphs, radians, exact values and Year 11 transformation language are recalled in a clause; d05's slope facts are not repeated.
- **Syllabus coverage:** `ciaa74eede` (explored and confirmed with a graphing-check build in scenes 1 to 9; reflections in the x-axis taught, reflection in the y-axis as a grey chip), `cic7027e0d` (all named features for sin, cos and tan, scenes 2 to 8, attempts). Owned by this video.
- **Out of scope by design:** equation solving, modelling, a < 0 in detail, reciprocal trig graphs, calculus.

## Practice questions and model answers

**Attempt 1 (scene 10; site SA 1 re-pointed, HSC style, 2 marks suggested, not an official marking scheme).** "For y = −2cos(3x − π/2) + 4, state the amplitude, the period, the horizontal translation and the range."
Model answer: y = −2cos(3(x − π/6)) + 4. Amplitude 2; period 2π/3; horizontal translation π/6 to the right; range 2 ≤ y ≤ 6. Classic mistake (crossed): "right π/2" (b = 3 not factored out).

**Attempt 2 (scene 12; original wording, HSC style, 2 marks suggested).** "Describe the transformations that map y = tan x onto y = tan(x/2) + 1. State the period and the range."
Model answer: a horizontal dilation by a factor of 2 (from the y-axis), then a vertical translation up 1. Period π ÷ ½ = 2π. Range: all real numbers. Classic mistake (crossed): period 4π (2π/b used for tan).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Opening frame | i05's: y = cos x on [0, π/2], eight rectangles width π/16 | 1 |
| Main window | x from −π to 2π (ticks π/2 apart), y from −4.5 to 3.5 | 1 to 6, 8, 9 |
| Hook (site card 06) | y = 2cos(x − π/3) + 1: peak (π/3, 3), trough (4π/3, −1), y-intercept 2 | 1, 3, 4 |
| Vertical dilation | 2cos x: peaks 2, troughs −2, zeros ±π/2, 3π/2 kept; −2cos x: peaks at ±π | 2 |
| Midline and range | midline y = 1; range −1 ≤ y ≤ 3 | 3 |
| Horizontal translation | right π/3; inside 0 at x = π/3 | 4 |
| Horizontal dilation | cos 2x: period π; cos(x/2): period 4π | 5 |
| Factor first | sin(2x + π) = sin(2(x + π/2)) = −sin 2x; inside 0 at −π/2; "left π" gives sin 2x | 6 |
| tan 2x | period π/2; asymptotes ±π/4, ±3π/4 on [−π, π]; range all real; 3 tan 2x factor 3 | 7 |
| Worked (site Problem 1) | −3cos(2(x − π/4)) − 1: period π; right π/4; amplitude 3; midline −1; range −4 ≤ y ≤ 2; key points (π/4, −4), (π/2, −1), (3π/4, 2), (π, −1), (5π/4, −4) | 8, 9 |
| A1 | amplitude 2; period 2π/3; right π/6; range 2 ≤ y ≤ 6; trough (π/6, 2), peak (π/2, 6); crossed right π/2 | 10, 11 |
| A2 | horizontal dilation factor 2; up 1; period 2π; range all real; asymptotes x = π + 2kπ; crossed 4π | 12, 13 |
| Handoff | y = 2sin(x − π/6), line y = 1, 0 ≤ x ≤ 2π; no markers | 14 |

## Numbers to verify (all values, repeated for Codex)

Checked in Python with SymPy (2 Nov); Codex to re-check numerically and with a CAS.

- 2cos(x − π/3) + 1: value 3 at π/3, −1 at 4π/3, 2 at 0.
- sin(2x + π) + sin 2x = 0 for all x; sin(2(x + π)) − sin 2x = 0 for all x.
- −3cos(2x − π/2) − 1 = −3 sin 2x − 1; values at 0, π/4, π/2, 3π/4, π, 5π/4: −1, −4, −1, 2, −1, −4.
- −2cos(3x − π/2) + 4 = 4 − 2 sin 3x; values 2 at π/6 and 5π/6, 6 at π/2; period 2π/3.
- tan 2x asymptotes on [−π, 2π]: −3π/4, −π/4, π/4, 3π/4, 5π/4, 7π/4 (scene 7 shows [−π, π]).
- tan(x/2) + 1: asymptotes x = π + 2kπ; period 2π.
- Periods: cos 2x π; cos(x/2) 4π; tan 2x π/2.
- Site checks: card 05 (3 sin 2x: amplitude 3, period π); card 07 (−2 sin(π(x + 1)): period 2, left 1); MC Q1 3, Q2 4, Q3 left π/4, Q4 y = −3, Q5 A.

## Memory aid check

- **"Outside: on y, as written. Inside: on x, the opposite."** Meaning: in y = k f(a(x + b)) + c, the outside numbers k and c act on the y-values exactly as the arithmetic says (multiply by k, then add c); the inside numbers act on the x-values by the inverse operations (x is multiplied by a, so the graph is dilated by 1/a; b is added to x, so the graph is translated by −b). Assumptions checked: the inside must be factored first ("Factor the inside first" is printed with it), and a > 0 in this video (for a < 0 the inverse still holds but includes a reflection in the y-axis). Its reason is scene 4's cause (the new curve does at x what the old did at the inside value). It helps a new case: tan(x/2) + 1 in attempt 2 (inside ÷ 2, so stretch by 2; outside + 1, so up 1). Introduced after all four parameters (scenes 2 to 6) and the worked example.
- **Considered, not used:** "positive b goes left" (true only after factoring, with a > 0; the aid above carries the reason); acronyms for k, a, b, c (no causal content).

## Narration length estimate

Revision 1 count (2 Nov; counted by script `count_tgraphs.py` in the designer scratchpad with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,625 characters** (5,639 with the joining spaces), 15 scenes. **Revision 2 (3 Nov): 5,707 characters** (5,721 with the joining spaces), 15 scenes; per scene: 407, 534, 390, 463, 469, 514, 510, 746, 375, 176, 260, 164, 315, 309, 75 (+82 in total: "over" for "on" about +60, scene 5 scoping and cut net +23). About 429 s of speech plus about 103 s of holds and settling: **about 532 s**, under the 570 s cap. The Revision 1 breakdown follows. Characters per scene (1 to 15): 401, 534, 390, 453, 445, 508, 502, 734, 373, 174, 254, 162, 313, 307, 75. At 13.3 characters per second the speech is about 423 s; add about 18 s of settling time for the one-parameter transforms (scenes 2 to 7) and the four-step build (scene 9), 20 s for two countdowns, about 5 s of short holds (scenes 9, 11, 13, 14) and about 60 s more of the quiet notes hold (about 103 s of holds): **about 526 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Scene 8 is the longest; each row must finish its transform before the next sentence starts. Feedback: scene 11 about 20 s and scene 13 about 25 s (including the 1 s holds), inside the 15 to 30 s guide. Reserve trims if the voiced take runs long: scene 2's "Peaks at one rise to two ... still zero." (keep the rings and tag); scene 7's last sentence (keep the crossed chip); scene 9's first sentence (keep the silent build); scene 4's last sentence (keep the dotted preview). Trimming more than about 120 characters would drop below the 5,500 floor.

## Scene list and build ids

Lesson key `m-a12t01` (route math-a12-t01, draft). Suggested explainer folder `src/explainer/lessons/math-a12-t01` and build folder `docs/production/claude-pm/lessons/m-a12t01` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 15 scene headings, all `### N.`): hook, vertical-dilation, vertical-translation, horizontal-translation, horizontal-dilation, factor-first, tan-transforms, worked-1, graphing-check, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`: the learner reads the worded question and works during the countdown) and key-notes (`hold`: the learner copies four notes). Transitions (`pickTransition`): i05's last frame continues into scene 1 (camera continue, the window enlarges); 1 to 2 to 3 to 4 camera continue (same axes, same curve); 4 to 5 camera continue (curve resets to cos x); 5 to 6 camera continue (family changes to sin); 6 to 7 clear change (tan window); 7 to 8 clear change (calculation layout); 8 to 9 camera continue (same curve, panel frame added); attempts and feedback card shrink to the top; 13 to 14 board clear; 14 to 15 fade to the notes board; 15 cross-fades back to 14's frame.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, "Pause here to answer." on screen). key-notes is the quiet notes hold (about 60 s). Review evidence paths for the LESSONS entry: `learning_review` = `checks/m-a12t01-learning-review.md`, `science_check` = `checks/m-a12t01-claude-science-check.md`.

## Assets

Have: no plates. All visuals are coded with the explainer kit and the brief 129 maths kit with its d01 addendum and brief 131, 133, 135 and 143 additions:
- `FunctionGraph` / `GraphLayer` (scenes 1 to 9, 14): cos x, sin x, tan x on three pieces with `asymptotes`; `transform` xScale (½, 2), xShift (π/3, −π/2, π/4), yScale (2, −2, −3, 3, through 0 with hidden annotations, as i05); `radianTicks(-π, 2π, 2)`, `radianTicks(0, 2π, 2)`, custom ticks every π/4 on [−π, π].
- `ReadoutPanel` with `rows` (scene 5 twin readout "x" and "inside 2x"; scene 4 inside-value tag may use it).
- `AlignedAlgebra` (scenes 6, 8, 11, 13).
- Shared: `Countdown`, `QuestionCard` (subject "Mathematics Advanced"), `Chip` with `cross`, `Callout`, `PenArrow`, scribble circle, `KeyNotes`, `Heading`.

Kit gaps (for the t01 build brief):
1. **`transform.yShift` (scenes 3, 8, 9; also t02 to t03).** `AttachedTransform` has xScale, xShift and yScale only. Add yShift with Y = yScale·y + yShift, carried by tangents, markers and readouts like the others, and validated (finite). `parameterFn` can fake it, but the panel and the transform must share one source of truth.
2. **Asymptotes carried by `transform` (scene 7).** When xScale or xShift animates, each declared asymptote x = p must move to xScale·p + xShift and the `domain` pieces with it, with the branch guard (brief 143) kept on each piece throughout. Confirm with tan x → tan 2x.

New parts (small; specify for the t01 build brief, reused in t02 and t03):
1. **`TransformPanel`.** Props: `family` ("sin" | "cos" | "tan"), `k`, `a`, `b`, `c` (numbers, animatable), `labels` (optional exact strings per slot, e.g. "−π/3"), `active` (which slot glows), `sliders` (boolean). Renders the syllabus equation "y = k·f(a(x + b)) + c" with each slot showing its exact label (author-supplied; no numeric-to-π formatting), a one-line grey note "Some sources write a f(bx + c) + d", and four short labelled sliders whose knobs follow the numeric values. It does not compute the graph; the lesson passes the same values to `FunctionGraph.transform` (xScale = 1/a, xShift = −b, yScale = k, yShift = c) from one shared state object. Optional `unfactored` label override shows the inside as printed (for example "2x + π") before it is factored.
2. **`FeatureMarks`.** Props: `graph`, `midline` (y), `amplitude` ({x, top}[] bars from the midline), `period` ({from, to, label}), `range` ({min, max, label, unbounded?}), `keyPoints` ({x, y, label}[] with appear cues). Plain SVG through `graphTransform`; draws the teal dashed midline, navy amplitude bars, amber period bracket, grey y-axis range bracket (with arrowheads when unbounded) and dots. All values author-supplied; a validation check confirms each key point lies on the supplied function within tolerance.

## Codex asset brief

None. No painted plate is needed (programme decision 5).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" numerically and with a CAS, and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the transformation claims and their scope: a vertical dilation by k multiplies every height by k and keeps the zeros; amplitude is |k|; adding c translates every point up c; f(x − h) translates right h (author note a); f(ax), a > 0, dilates horizontally by factor 1/a (author note b); the combined order in author note c; sin(2x + π) = −sin 2x and "left π" gives sin 2x (author note d); tan 2x period, asymptotes, domain and range (author note e).
3. Confirm every learner-visible general rule (scene 5 period line, key notes 1 to 4, memory aid) carries its condition (a > 0 here; factor the inside first; sin and cos only for c ± |k|; tan has no amplitude; "for sine and cosine with positive a" is spoken in scene 5).
4. Confirm both attempt questions carry every demand, that neither card or visual shows the factored form or any feature, and that attempt 1's re-pointing from site SA 1 is recorded.
5. Confirm the two syllabus quotes match the crosswalk JSON text exactly (linear form) and no site label appears in learner copy or metadata.
6. Confirm the opening visual matches i05's final frame exactly, the first sentence makes no claim about the previous video, and the final frame equals scene 14's frame.
7. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling in narration and screen text.
8. Confirm the narration character count and per-scene counts by script with the build parser rules.
9. Add site corrections 1 to 4 (and coverage note 5) under Decisions to `../site-corrections-maths-a12.md` without duplicates (owner record only; the site is read-only here).

## YouTube metadata (draft)

Title: Transforming Trig Graphs: Amplitude, Period and Shifts | Year 12 Maths Advanced

(Title length: 80 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/further-graph-transformations-and-modelling/lesson01.sa.html

Change y = cos x to y = 2cos(x − π/3) + 1 and the peak moves right, even though the bracket says minus. Take the equation one number at a time: outside the bracket, numbers act on the heights exactly as written (amplitude, reflection, midline, range); inside, they act on x the opposite way (horizontal translation and period). See why you write the inside as a(x + b) before reading the shift, how tan's asymptotes move with it, and why tan has no amplitude. Then describe y = −3cos(2x − π/2) − 1 completely and sketch one cycle. Two exam-style questions at the end. Follow-up: sketch one cycle of the attempt 1 curve.

Mathematics Advanced 11-12 (2024 syllabus), Year 12, further graph transformations and modelling. The equation form used is y = k f(a(x + b)) + c; some sources write a f(bx + c) + d.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Use graphing applications to explore reflections, translations and dilations of, and confirm that the principles of transformations hold for, the trigonometric functions f(x) = sin x, f(x) = cos x and f(x) = tan x"
"Apply the principles of transformations to graph transformations of the trigonometric functions f(x) = sin x, f(x) = cos x and f(x) = tan x, describe which transformations have been applied to y = f(x) and determine the domain, range, horizontal translation, vertical translation, dilation factor, period and amplitude when applicable"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa3b2bda67

Builds on: Year 11 trigonometric graphs and graph transformations. Next: Solving trig equations from the graph.

#Year12Maths #MathsAdvanced #TrigGraphs #HSCScience

## Open decisions

- **1. Opening frame if the playlist moves t01 (root).** In production order t01 opens on i05's final frame. If the playlist places t01 after d19 (outline order 20), the narration needs no change; only the first visual second changes (open on d19's final frame, or on a neutral cosine curve, then the same window). Root decision 4 already covers the "Next" chips.
- **2. Year 11 transformation codename (root).** The entry knowledge cites Year 11 graph transformations without a codename because no Year 11 Mathematics Advanced ledger is in this repo. Root to add it to the route entry.
- **3. Letters in the general form (resolved).** Root decision 21 (3 Nov): use the 2024 syllabus form y = k f(a(x + b)) + c, with a one-line grey note that some sources (including the site) write a f(bx + c) + d. Applied in Revision 2 to the panel, labels, key notes, memory aid and the scene 5 and 13 narration ("b" became "a").
- **4. Spoken "pi over three" (resolved).** Root decision 22 (3 Nov): "pi over three" (series form) throughout; applied in Revision 2 (about +60 characters). The voice pilot still checks the pronunciation.
- **5. Site link form.** The description uses the `.sa.html` form (root decision 15).

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from the Year 11 trig graphs and transformations; check that scene 4's "does at x what the old did at x − π/3" is followable at speed with the inside-value tag; that one parameter per scene keeps the reading load low; that scene 6's crossed ghost is read as "that reading is wrong", not "that curve is wrong"; that scene 7's tan rules are clear without a worked tan example before attempt 2; and that the attempt cards give nothing away), then the Codex maths check and error check.
- The transforms, the fold, the period bracket and the asymptote motion carry the explanation; judge them at playback speed in the voiced preview, not from stills. Every readout and tag must be computed from the same state object as the curve.
- t02 opens on scene 14's frame (y = 2sin(x − π/6), the line y = 1, 0 ≤ x ≤ 2π, chip "solutions in 0 ≤ x ≤ 2π: ?").
- **Revision 2 (3 Nov), brief 153 repairs.** Maths check (1 should fix, applied): scene 5 now says "for sine and cosine with positive a" before the period rule (the cut "from two pi to pi" funds part of it; net +23 characters, within the 570 s cap). Learning review (1 should fix, same finding, applied). Root decisions 21 (notation y = k f(a(x + b)) + c with a grey "some sources write a f(bx + c) + d" note on the scene 9 and key-notes screens, the youtube description, and author notes) and 22 ("pi over three" and every "x on two" style fraction now "over") applied. The reviewer comment that learners must perform the graphing exploration themselves is handled by the scene 9 invitation and the description follow-up; no separate task added (no length to fund it). Site quotes in Decisions (site corrections 1 to 5) keep the site's own letters. The final frame is unchanged (scene 14), so t02's opening needs no edit except its own "pi over" changes.
