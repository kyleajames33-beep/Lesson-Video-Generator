# Maths A12 G02: Which integral model and representation fit an unseen problem? A function needs + C, a change needs limits, an area or distance needs splitting at the zeros, and a table needs the trapezoidal rule (design)

Status: Revision 1 (3 Nov 2026), overnight queue wave I5 follow-on (Template M). Needs root decisions, the student learning review, a Codex maths check and a Codex error check. Voicing gated by the brief 124 Google voice pilot. Build uses the explainer kit and the brief 129 maths kit with the brief 131, 133, 135 and 143 additions (`FunctionGraph`, `GraphLayer`, `AlignedAlgebra`, `ExpressionSlot`, `DerivativeFactor`, `ReadoutPanel`, `NumericDial`, `PrimitiveFamily`, `IntegralNotation`, `DerivativeCheck`, `ProgressiveSignChart`, `Chip` with `cross`, `Callout`, `PenArrow`, `QuestionCard`, `Countdown`, `KeyNotes`), the integral parts specified by i06 to i14 for the next maths kit brief (`AreaFill`, `RiemannStrips` with trapezia, `LimitSubstitution`, `AreaFlip`, `DisplacementTrack`, `ParticleTrack`, `CoefficientLedger`) and one new small part under "Codex asset brief" (`CueModelTable`). Nothing recorded; human listening pending.

Narration 5,408 characters, 14 scenes, about 515 s (8.6 minutes), counted by script with the build parser rules (see "Narration length estimate").

Scope: second of the three optional practice-and-synthesis videos of the Year 12 Mathematics Advanced course (outline playlist order 66), after g01 (differentiation practice) and before g03 (finance and probability practice). Outline entry: `math-a12-g02`, strand "Practice and synthesis", status "optional-transfer-practice-not-new-syllabus-ownership", no syllabus actions and no site sources ("No direct source; original synthesis"). It owns no content point: it practises the integral points taught in i01 to i14 on unseen problems, and collects the item root sent to "the integral practice video g02": a definite integral with a matched inside (root decision 33; i09 open decision, ∫₀¹ 2x e^(x²) dx = e − 1, used here in its rate form). Templates: `math-a12-i05.md` and `math-a12-d10.md` (section structure, voice, attempt and feedback pattern, key notes), with g01 (written just before this one, whose scene 13 is this video's first frame) for the practice-video format. All maths visuals are coded; no painted plates (programme decision 5). No pre-design pack and no route-inputs entry, so this design does the pack work itself (numbers recalculated with SymPy, misconceptions) and writes its draft route entry in Decisions. Every question is original (the outline names no site source); the strand's earlier designs supply the conventions (i10's "find the zeros, split, flip the negatives, add"; i12's trapezoidal rule with the reference-sheet form; i14's "displacement can be zero when the distance travelled is not").

Owner rules applied: as g01 (new 2024 syllabus only; codenames and exact wording; no site module label; maths coded; no people; one reasoning stage at a time; task, equation and grouped givens separated, with units; "Pause here to answer." then a 10 s countdown with the full question on screen; givens underlined in feedback; brief feedback with one crossed-out mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; causal conversational narration). Practice-video format: the worked walkthroughs are the content (AGENTS.md practice exception); the end attempts get brief feedback. Binding root decisions: exact values in the algebra (e − 1, 8/3, ln 10), decimals only in grey readouts; attempt cards never give away answers or signs; "+ C" and derivative checks kept; the trapezoidal rule in the form i12 uses, with the reference-sheet form as the grey chip (root decision 36); the handoff scene's final frame is the video's last frame (root decision 20).

Syllabus content points practised (Mathematics Advanced 11-12 (2024), Year 12; NESA content-system codenames, official `code` field empty; quoted from `../../programme/syllabus/maths-advanced-2024-y12-crosswalk.json`, MathML in linear form). This video owns none of them; i01 to i14 own them:

- `ci6f5c83b7`: "Determine f(x), given f′(x) and an initial condition f(a) = b where a and b are constants"
- `ci6dc07a10`: "Apply ∫_a^b f(x) dx = F(b) − F(a), where F(x) is a primitive of f(x), to calculate definite integrals and solve related theoretical problems involving functions within the scope of the Mathematics Advanced course"
- `ci22db0117`: "Establish and use ∫ e^u (du/dx) dx = e^u + C, where u is a function of x, or ∫ f′(x) e^(f(x)) dx = e^(f(x)) + C"
- `ci060b93b3`: "Establish and use ∫ (u′/u) dx = ln|u| + C, where u is a function of x, or ∫ (f′(x)/f(x)) dx = ln|f(x)| + C, on a domain where f(x) ≠ 0"
- `cicfcd020a`: "Use definite integrals to solve problems involving the areas of regions bounded by the graph of the continuous function y = f(x), the x-axis and the lines x = a and x = b, in cases where f(x) ≥ 0 throughout a ≤ x ≤ b, f(x) ≤ 0 throughout a ≤ x ≤ b or where f(x) changes sign in the interval a ≤ x ≤ b, with or without the graph provided"
- `cicd64da60`: "Use the Trapezoidal rule to approximate integrals"
- `ci33a217e6`: "Use integration to solve practical problems on the rate of change of a quantity Q, where (dQ/dt) or (d²Q/dt²) is given as a function of time t, together with sufficient initial conditions"
- `ci0c66d890`: "Solve problems relating to the motion of a particle moving in a straight line, using both differentiation and integration to connect the concepts of displacement, velocity and acceleration"

Sources: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f (integral calculus) and https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa383c9104 (applications of calculus).

**Boundary:** starts from g01's last frame (the rate graph y = 2t e^(t²) on 0 ≤ t ≤ 1 with the chips "amount", "function", "area", "estimate" and "Which integral?"); teaches one decision for unseen integral questions: read what the question asks for, then choose the model (a function: indefinite integral with + C fixed by a starting value; a change over an interval: a definite integral; an area or a distance: split at the zeros and add positive pieces; data only: the trapezoidal rule); works one problem per model on three representations (a formula, a sign-changing graph, a table); recognises the matched inside in each formula before integrating. Stops at integral practice. Not taught: new rules or content points; areas against the y-axis (i11); symmetry (i12); areas between two curves (not a 2024 Advanced point; root decision 33); probability densities (s-strand; g03 touches them).

## Decisions

- **Learner question kept (outline).** "Which integral model and representation fit an unseen problem?" The answer, built in order: every integral question asks for one of four things, and the thing asked for picks the model (hook, 2); a definite integral adds rate × small time with signs, so it gives the net change (3); the general primitive has a + C, so a function needs one known value to fix it (4); an area or a distance counts every part as positive, so the signed integral must be split where the graph crosses zero (5); a table has no formula to integrate, so the trapezoidal rule estimates from the values (6).
- **The hook (one graph, four questions).** g01 ended on y = 2t e^(t²) with four demand words. Scene 1 turns them into four questions about one tank: the water added in the first second, the volume at time t, an area, and an estimate from readings. The tension: the same graph and the same integral sign give answers of different kinds (a number, a function, a positive total, an estimate). Two of the four (the amount and the function) are answered on this tank; area and estimate need a different representation, so they move to a particle's velocity graph and a table of readings.
- **The cause on the screen (owner quality bar).** Net change: `AreaFill` grows under the rate curve from 0 to 1 while a grey readout counts litres (3). Function: `PrimitiveFamily` shows e^(t²) + C sliding, then locking through (0, 5) (4). Signed against total: `AreaFill` in signed colours (above teal, below red) with `AreaFlip` turning the below piece over, while `ParticleTrack` shows the particle going left then coming back to its start (5). Table: `RiemannStrips` in trapezia mode drawing four trapezia on five plotted readings, with `CoefficientLedger` showing "ends once, insides twice" (6).
- **Practice-video format (owner rule, practice exception).** As g01: four worked problems walked through in full, each opening with a "which model?" beat (a 3 s prediction in scene 2, a short question elsewhere); two end attempts with "Pause here to answer.", a 10 s countdown and brief feedback (about 30 s) with one crossed-out mistake.
- **Worked problem 1 (original; root decision 33's matched-inside definite integral, in rate form): the change over an interval.** Water flows into a tank at r(t) = 2t e^(t²) litres per second. Find the volume added from t = 0 to t = 1. The inside t² has derivative 2t, out the front, so a primitive is e^(t²) (i09, `ci22db0117`). ∫₀¹ 2t e^(t²) dt = [e^(t²)]₀¹ = e − 1 litres (grey ≈ 1.72 L). The rate is positive throughout, so this amount is also the area under the curve (one sentence, no split needed).
- **Worked problem 2 (original): the function, with a starting value.** The tank held 5 L at t = 0. Find V(t). V(t) = ∫ 2t e^(t²) dt = e^(t²) + C; V(0) = 1 + C = 5, so C = 4 and V(t) = e^(t²) + 4. Check (derivative): V′(t) = 2t e^(t²). Check (consistency with worked problem 1): V(1) − V(0) = (e + 4) − 5 = e − 1, the same amount, because a definite integral is a difference of primitive values and C cancels.
- **Worked problem 3 (original): an area or a distance, sign-changing velocity.** A particle moves with v = t² − 2t m/s for 0 ≤ t ≤ 3. Find the distance travelled. The tempting model, ∫₀³ v dt = [t³/3 − t²]₀³ = 0, gives the displacement: the particle ends where it started. Split at the zero t = 2 (v < 0 on 0 < t < 2, v > 0 on 2 < t < 3): ∫₀² v dt = −4/3 and ∫₂³ v dt = 4/3, so the distance is 4/3 + 4/3 = 8/3 m. The crossed slip is "distance 0 m". This uses i10's key note 4 and i14's key note 4 as the method, applied to a new function (not i10's x² − 4x + 3).
- **Worked problem 4 (original): data only.** A second tank's inflow is read every 2 minutes: t = 0, 2, 4, 6, 8 min; r = 3, 5, 6, 4, 2 L/min. Estimate the water added over the 8 minutes. No formula, so no primitive; the trapezoidal rule with h = 2 and n = 4 strips: (2/2)[3 + 2(5 + 6 + 4) + 2] = 35 L (estimate). Grey chip: the reference-sheet form (b − a)/(2n){f(a) + f(b) + 2[f(x₁) + ... + f(x_{n−1})]} = (8/8)(35) = 35 (root decision 36). The answer is said and written as an estimate ("about 35 litres").
- **Attempts (original).** (A1) A tank holds 20 L at t = 0, and its volume changes at dV/dt = 6 − 2t litres per minute. Find the volume when t = 5. V = ∫(6 − 2t) dt = 6t − t² + C; V(0) = 20 gives C = 20; V(5) = 30 − 25 + 20 = 25 L. Crossed: "5 L" (∫₀⁵ (6 − 2t) dt = 5 is the change, not the volume). Tests "function or change?" with the starting value. (A2) Find the area bounded by y = 2x/(x² + 1), the x-axis and the lines x = −1 and x = 2. The top 2x is the derivative of x² + 1 (always positive), so a primitive is ln(x² + 1) (i04, `ci060b93b3`). y < 0 for x < 0, so split at 0: ∫₋₁⁰ = −ln 2 and ∫₀² = ln 5; area = ln 2 + ln 5 = ln 10 (grey ≈ 2.30). Crossed: "ln(5/2)" (the signed integral ∫₋₁² = ln 5 − ln 2). Neither card names a model, a primitive or a split.
- **Mistake scene:** none separate (optional, not needed). Each model's classic slip is shown where it arises: forgetting to fix C (4; and A1's crossed "change, not the volume"); taking the signed integral as a distance (5, crossed "0 m") or as an area (A2, crossed); integrating a table as if it had a formula (6, spoken: "there's nothing to integrate").
- **Memory aid (original).** "Function? Plus C. Change? Limits. Area? Split. Table? Trapezia." See "Memory aid check".
- **Root items not used here (recorded).** Root decision 23 sends "`ci5f2b7245` beyond trig models, and earthquake and star attempts" to "g02/g03". They do not fit this video's question (integral models), and adding a log-scale problem would break the one-question rule; g03's question (finance and probability models) does not fit them either. Proposed home: a short separate practice item for the graph-transformations strand, or the t04 site practice (open decision 2).
- **Handoff (outline next `math-a12-g03`).** Scene 13 states the decision in one sentence, then shows two question strips that differ by one phrase: "$10,000 at 6% p.a. simple interest for 10 years" and "$10,000 at 6% p.a. compounded annually for 10 years", with the chips "Which model?" and "Next: finance and probability practice". No values. g03 opens on this frame.
- **Site sources used:** none (outline "No direct source; original synthesis"). Conventions follow the strand designs i09, i10, i12 and i14.
- **Site findings:** none new (no site page read for this video). Coverage note for the owner (not an error): the site has no mixed integral practice page that asks students to choose between net change, area, a function with an initial condition and the trapezoidal rule; this video supplies one.
- **Draft route entry (no route-inputs entry exists for g02; root to adopt or adjust):** id `math-a12-g02`; main learner question as the outline; syllabus actions none owned, practised `ci6f5c83b7`, `ci6dc07a10`, `ci22db0117`, `ci060b93b3`, `cicfcd020a`, `cicd64da60`, `ci33a217e6`, `ci0c66d890`; entry knowledge i01 to i14 (primitives with + C and initial conditions; matched insides with eᵘ and u′/u; the FTC; signed area and total area; the trapezoidal rule; displacement and distance); start: "an unseen integral question that names no model"; stop: "the demand picks the model: function (+ C and a starting value), change (definite integral), area or distance (split at the zeros), data (trapezoidal rule)"; next handoff: "math-a12-g03: which financial or probability model is justified by the givens (simple against compound interest strips, 'Which model?')".
- **Cause chain taught, in order:** (1) one graph can carry four different questions, and the question asked picks the integral (hook); (2) the four demands and their models (2); (3) a definite integral adds rate × small time, so it gives the change over the interval, and a matched inside gives the primitive (3); (4) the general primitive has + C, so a function needs one known value (4); (5) C cancels in a definite integral, so the two answers agree (4); (6) parts below the axis count as negative in the integral, so an area or a distance needs a split at the zeros (5); (7) without a formula there is no primitive, so trapezia on the readings estimate the integral (6); (8) a quick sort of three unseen questions, one per model, including a formula with no primitive (7); (9) memory aid (8).
- **Entry knowledge:** from i01 to i05: primitives, + C, checking by differentiating, matched insides; i04: ∫ f′/f dx = ln|f| + C; i06 to i08: the definite integral as a limit of sums and the FTC; i09: definite integrals of matched insides; i10: signed area and total area; i12: the trapezoidal rule; i14: displacement from velocity, and distance against displacement.
- **Learner-visible vocabulary (plain meaning at first use):** net change (recall: the amount at the end minus the amount at the start, scene 3); starting value or initial condition (recall: one known value of the function, scene 4); displacement and distance (recall: where it ends up against how far it went, scene 5); estimate (scene 6).
- **Legacy logic ported:** none.
- **New explainer motion (coded):** **demand table** (`CueModelTable`, new: four cue rows that light in turn, each with its model chip); **growing amount** (`AreaFill` sweep with a litres readout); **primitive family locking** (`PrimitiveFamily` with C dial and `constantThrough`); **signed fill and flip** (`AreaFill` signed colours, `AreaFlip`, with `ParticleTrack` above the graph); **trapezia on readings** (`RiemannStrips` trapezia mode on five plotted points, `CoefficientLedger` 1, 2, 2, 2, 1); `LimitSubstitution` for the bracket evaluations; `IntegralNotation`; crossed chips, `Callout`, `PenArrow`, `Countdown`, `QuestionCard` (subject "Mathematics Advanced"), `KeyNotes`.
- **Board layout (constant):** as g01: heading top-left; task strip under it (task; equation or data; givens grouped with units); graph or table on the left; algebra in the right column with the current line bright.
- **No human figures, no painted plates.** The tank is never drawn; the rate graph carries the context (programme decision 5; a plate would add nothing to the decision being taught).
- **Author notes (not learner copy):**
  (a) W1: d/dt e^(t²) = 2t e^(t²); ∫₀¹ = e − 1 ≈ 1.71828. r(1) = 2e ≈ 5.437.
  (b) W2: V(t) = e^(t²) + 4; V(0) = 5, V(1) = e + 4 ≈ 6.718.
  (c) W3: x(t) − x(0) = t³/3 − t²; at t = 2: −4/3 (furthest left); at t = 3: 0. Distance 8/3 ≈ 2.667 m. The `ParticleTrack` shows x(0) = 0 as the start (no initial position is given or needed for distance).
  (d) W4: trapezoidal estimate 35 L; the readings are invented and no exact value exists to compare; no over- or underestimate claim is made (the shape between readings is unknown).
  (e) A1: V(t) = 20 + 6t − t²; V(5) = 25; ∫₀⁵ (6 − 2t) dt = 5. The tank never empties on [0, 5] (minimum V on [0, 5] is 20 at t = 0; maximum 29 at t = 3), so the context is valid.
  (f) A2: ∫ 2x/(x² + 1) dx = ln(x² + 1) + C (no modulus needed because x² + 1 > 0; the narration says so in one clause). ∫₋₁⁰ = −ln 2 ≈ −0.693; ∫₀² = ln 5 ≈ 1.609; area ln 10 ≈ 2.303; signed integral ln(5/2) ≈ 0.916.
  (g) Pronunciations: "two t, times e to the t squared"; "e minus one"; "e to the t squared, plus four"; "t squared minus two t"; "eight thirds"; "four thirds"; "six minus two t"; "two x over x squared plus one"; "the natural log of ten".
  (h) Windows: W1 and W2 t from −0.1 to 1.15, y from −0.5 to 6.5 (W2 y from 0 to 8 for V), ticks t 0, 0.5, 1; W3 t from −0.2 to 3.3, v from −1.5 to 3.5, ticks t 1, 2, 3; W4 t from −0.5 to 8.5, r from 0 to 7, ticks every 2; A2 feedback x from −1.3 to 2.3, y from −1.2 to 1.2, ticks −1, 1, 2.

Main question: *An integral question won't say which integral to use. How do you tell from the question and the way the information is given whether you need a function, a change, an area or an estimate?*
Entry knowledge (i01 to i14): primitives and + C; matched insides; definite integrals and the FTC; signed and total area; the trapezoidal rule; displacement and distance.
Stops after: one worked problem per model on a formula, a sign-changing graph and a table. No new rules.
Handoff: math-a12-g03: which financial or probability model is justified by the givens, on two question strips that differ by one phrase.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour key (as the i-series): the curve blue; area above the axis teal, below the axis red (signed); flipped pieces teal with a dashed outline; trapezia light amber; algebra in ink with the inner expression in an `ExpressionSlot` and its derivative in a `DerivativeFactor` (amber); the current line bright; earlier lines dim. Exact values throughout; decimals only in grey readouts.

### 1. hook (one graph, four questions)
> Here's the rate graph from the end of the last video. Water flows into a tank at two t times e to the t squared litres per second. A question could ask how much water flows in during the first **second**. It could ask for the volume at any time **t**. Another question could ask for an area, or give you only a table of readings. Every one of those needs an integral, but not the same one. So how do you tell which integral a question needs?

Visual: opens on g01's last frame (g01's key notes end with a silent return to it): y = 2t e^(t²) on 0 ≤ t ≤ 1, axes "t (s)" and "rate (L/s)", the four grey chips "amount", "function", "area", "estimate", the chips "Which integral?" and "Next: integral practice" (the "Next" chip fades). Heading writes on: "Which integral fits?". On "second" the chip "amount" grows into a question strip "How much flows in from t = 0 to t = 1?"; on "t" the chip "function" grows into "Find V(t), the volume at time t."; on the next sentence "area" and "estimate" grow into two grey strips, "an area" and "a table of readings", tagged "later in this video". On "not the same one" an integral sign appears beside each strip with a different small grey tag underneath: "a number", "a function", "a positive total", "an estimate". The scene question chip "Which integral?" moves to the top right.

### 2. what the question asks for picks the model
> The first thing to read is what the question asks for. If it asks for the function itself, use an indefinite integral, and a known value fixes the plus C. If it asks how much something changes between two times, use a definite integral. A definite integral adds up rate times a small time, so it gives the change, and parts below the axis count as negative. If it asks for an area or a distance, split where the graph crosses zero, and add the parts as positive amounts. And if it gives you only readings, there's nothing to integrate, so estimate with the trapezoidal rule. Which one does "how much flows in" need? Think for three **seconds**. It's a change between two times, so it's a definite **integral**.

Visual: the strips shrink to the left edge. A `CueModelTable` (new part) writes one row per sentence, cue in ink, model chip in amber: "the function: V(t), f(x), x(t)" → "∫ f dx + C, then use a known value"; "a change from a to b" → "∫ₐᵇ f dx = F(b) − F(a)"; "an area or a distance" → "split at the zeros, add positive parts"; "readings only" → "trapezoidal rule (estimate)". Each row's small icon draws with it: a curve with a "+ C" family, a shaded strip between two limits, a curve crossing the axis with one piece flipped, five dots joined by trapezia. On "seconds" a 3 s ring runs beside the first strip. On "integral" the second row lights and the first strip gets the chip "change: definite integral".

### 3. worked problem 1: the change over an interval
> So find the integral from zero to one of two t, times e to the t squared. Look inside first. The inside is t squared, and its derivative, two t, is out the **front**. So a primitive is e to the t squared. At one, that's e, and at zero it's one, so the water added is e minus one **litres**, about one point seven two. The rate is never negative here, so this is also the area under the **curve**.

Visual: board clears to the graph (author note h) with the task strip: task "Find the volume of water added from t = 0 to t = 1."; equation "r(t) = 2t e^(t²)"; givens "r in L/s, t in s". Right column: `IntegralNotation` "∫₀¹ 2t e^(t²) dt" with "t²" in an `ExpressionSlot` and "2t" in a `DerivativeFactor`; a small row "d/dt (t²) = 2t"; on "front" a `PenArrow` from that 2t to the 2t out the front. Row "primitive: e^(t²)" with a grey check "d/dt e^(t²) = 2t e^(t²)". `LimitSubstitution` row "[e^(t²)]₀¹ = e¹ − e⁰"; on "litres" the boxed "= e − 1 L" with a grey readout "≈ 1.72 L". During the second and third sentences an `AreaFill` sweeps under the curve from 0 to 1 with a grey running readout of litres, ending at 1.72 as the box writes. On "curve" a tag "r ≥ 0: amount = area under the curve".

### 4. worked problem 2: the function, with a starting value
> Now the second question. The tank held five litres at the start. Find the volume at time **t**. This asks for a function, so use the indefinite integral. V of t is e to the t squared, plus C. At t equals zero, that's one plus C, and it has to be five, so C is **four**. So V of t is e to the t squared, plus four. Here's a good check. V of one minus V of zero is e plus four, minus five, which is e minus one. It's the same amount as before, because the C cancels when you **subtract**.

Visual: the area and its box shrink to the top right (kept: the next step compares with it). Task strip: task "Find V(t)."; equation "dV/dt = 2t e^(t²)"; givens "V(0) = 5 L". The graph changes its y-axis to "V (L)" (author note h) and a `PrimitiveFamily` of e^(t²) + C draws as five grey members with a C dial. Rows: "V(t) = ∫ 2t e^(t²) dt = e^(t²) + C"; "V(0) = e⁰ + C = 1 + C = 5"; on "four" "C = 4", and the family slides to the one member through the point (0, 5), which glows (`constantThrough`). Boxed "V(t) = e^(t²) + 4". On the check sentences a row "V(1) − V(0) = (e + 4) − 5 = e − 1" with a tick, and a `PenArrow` to the parked "e − 1 L" box. On "subtract" a grey tag "+ C cancels in a definite integral".

### 5. worked problem 3: a distance, when the velocity changes sign
> Here's a different graph. A particle moves with velocity t squared minus two t metres per second, from t equals zero to **three**. How far does it travel? The integral from zero to three is **zero**. That's the displacement. The particle ends exactly where it started. But it did move. The velocity is negative until t equals two, so it goes back first, then comes **forward**. Split at two. The first piece is minus four thirds, and the second is four thirds. Count both as positive, and the distance is eight thirds of a **metre**. Zero is the classic wrong answer here.

Visual: board clears (new representation). Task strip: task "Find the distance travelled from t = 0 to t = 3."; equation "v = t² − 2t"; givens "v in m/s, t in s, 0 ≤ t ≤ 3". Graph (author note h): v = t² − 2t in blue, zeros at 0 and 2 marked; a `ParticleTrack` (horizontal line with a dot) above the graph, tag "position". On "three" the window settles. On "zero" (first bold) the row "∫₀³ (t² − 2t) dt = [t³/3 − t²]₀³ = 9 − 9 = 0" and the `AreaFill` draws in signed colours: red below on 0 < t < 2, teal above on 2 < t < 3, with grey tags "−" and "+"; a chip "displacement 0". On "forward" the `ParticleTrack` dot moves left to −4/3 (grey readout) as the tracer runs from 0 to 2, then right back to 0 as it runs from 2 to 3. On "Split at two" a dashed line at t = 2; rows "∫₀² (t² − 2t) dt = 8/3 − 4 = −4/3" and "∫₂³ (t² − 2t) dt = 0 − (−4/3) = 4/3". On "metre" the red piece flips above the axis (`AreaFlip`) and the boxed "distance = 4/3 + 4/3 = 8/3 m" (grey "≈ 2.67 m"). On the last sentence a chip "distance 0 m" fades in and is crossed.

### 6. worked problem 4: only a table
> Last kind. A different tank's inflow is read every two minutes: three, five, six, four and two litres per minute, from t equals zero to **eight**. Estimate the water added. There's no formula, so there's nothing to integrate. Use the trapezoidal rule. The strips are two minutes wide, so h is two. The ends count once, and the inside readings count **twice**. That's two over two, times three, plus two times fifteen, plus two, which is thirty-five. So about thirty-five litres flowed in. It's an estimate, because we don't know the rate between **readings**.

Visual: board clears. Task strip: task "Estimate the volume added over the 8 minutes."; data table (`DistributionTable`-style plain table, 2 rows): "t (min): 0, 2, 4, 6, 8" and "r (L/min): 3, 5, 6, 4, 2"; givens "h = 2, n = 4 strips". On "eight" the five readings plot as dots on the graph (author note h), with no curve drawn through them. On "nothing to integrate" a grey tag "no formula: no primitive". `RiemannStrips` in trapezia mode draws four trapezia joining the dots (light amber). On "twice" a `CoefficientLedger` row under the table: "1, 2, 2, 2, 1" aligned to the readings. Rows: "(h/2)[y₀ + 2(y₁ + y₂ + y₃) + y₄]"; "= (2/2)[3 + 2(5 + 6 + 4) + 2]"; boxed "= 35 L (estimate)". A small grey chip: "reference sheet: (b − a)/(2n){f(a) + f(b) + 2[f(x₁) + ... + f(x_{n−1})]} = (8/8)(35)". On "readings" a dashed grey wiggly curve briefly passes through the dots and fades, tag "the real rate between readings is unknown".

### 7. quick sort (three unseen questions)
> Now a quick sort. For each question, decide which kind it is, but don't work it out yet. First, a population grows at three e to the half t per hour, and it starts at ten. Find the population at time t. Think for three **seconds**. It asks for a function, so integrate with plus C, and the start fixes the C. Second, find the area between y equals sine x and the x-axis, from zero to two **pi**. The curve crosses the axis at pi, so split there. The integral alone is zero, but the area is **four**. Third, estimate the integral from zero to one of e to the minus x squared. This time there's a formula, but it has no primitive you can write down in this course, so it's the trapezoidal rule **again**.

Visual: board clears. Three question strips write in turn, one per question, each with its own 3 s ring after it is read (the ring for the second and third runs silently while the strip stays): "A population P grows at the rate dP/dt = 3e^(0.5t) per hour, with P = 10 at t = 0. Find P(t)."; "Find the area between y = sin x and the x-axis from x = 0 to x = 2π."; "Estimate ∫₀¹ e^(−x²) dx." On "seconds" the first ring runs; on the next sentence the first strip gets the chip "Function? Plus C." (the `CueModelTable` row 1 pulses at the side). On "pi" the second ring runs while a small inset draws y = sin x on [0, 2π]; on "split there" a dashed line at π, the second half fills red; on "four" two tags "∫₀²π sin x dx = 0" (grey) and "area = 2 + 2 = 4", chip "Area? Split.". On the third question a small inset draws y = e^(−x²) on [0, 1] with four trapezia; on "again" chip "No primitive? Trapezia.", grey tag "no primitive in this course". Nothing is worked beyond these chips.

### 8. memory aid
> Here's the decision as four short questions. Function? Plus C. Change? Limits. Area? Split. Table? **Trapezia**. Then look inside the integral for a matched inside before you integrate.

Visual: the four worked problems shrink to four small cards along the top (the amount fill, the locked family, the flipped piece, the trapezia), each under its cue. The handwritten line writes large, one pair at a time: "Function? Plus C. Change? Limits. Area? Split. Table? Trapezia." On "Trapezia" the four cards pulse in turn. On the last sentence a smaller second line: "Then look for a matched inside." Hold about 2 seconds.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. A tank holds twenty litres at t equals zero, and its volume changes at a rate of six minus two t litres per minute. Find the volume when t equals five. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A tank holds 20 L of water at t = 0. Its volume V litres changes at the rate dV/dt = 6 − 2t litres per minute. Find the volume when t = 5." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no table, no graph, no model chip).

### 10. feedback 1 (brief)
> It asks for the volume, so find the function. V equals six t minus t squared, plus C, and V of zero is twenty, so C is **twenty**. At t equals five, that's thirty, minus twenty-five, plus twenty, which is twenty-five **litres**. Five litres is wrong. That's the change from zero to five, not the **volume**.

Visual: card shrinks to the top. Row "V = ∫(6 − 2t) dt = 6t − t² + C" (on the first sentence; "volume" and "20 L" underlined in the card); "V(0) = 20, so C = 20" on "twenty". On "litres" boxed "V(5) = 30 − 25 + 20 = 25 L". On "volume" a chip "5 L" fades in and is crossed (caption "∫₀⁵ (6 − 2t) dt = 5 is the change"). Hold about 1 second.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. Find the area bounded by y equals two x over x squared plus one, the x-axis, and the lines x equals minus one and x equals two. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "Find the exact area of the region bounded by the curve y = 2x/(x² + 1), the x-axis and the lines x = −1 and x = 2." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." No graph (it would show the sign change).

### 12. feedback 2 (brief)
> The top is the derivative of the bottom, so a primitive is the natural log of x squared plus one. No mod signs are needed, because x squared plus one is always **positive**. The curve is below the axis for negative x, so split at zero. The left piece is minus log two, and the right piece is log **five**. Add them as positive amounts: log two plus log five is the natural log of **ten**. Log of five over two is wrong. It lets the negative piece **cancel**.

Visual: card shrinks to the top. Row "d/dx (x² + 1) = 2x, so ∫ 2x/(x² + 1) dx = ln(x² + 1) + C" (on the first sentence; "area" underlined in the card), grey tag "x² + 1 > 0". A small graph inset: y = 2x/(x² + 1) on −1 ≤ x ≤ 2, red fill on −1 < x < 0 and teal on 0 < x < 2. Rows "∫₋₁⁰ = ln 1 − ln 2 = −ln 2" and on "five" "∫₀² = ln 5 − ln 1 = ln 5". On "ten" the red piece flips (`AreaFlip`) and boxed "area = ln 2 + ln 5 = ln 10" (grey "≈ 2.30"). On "cancel" a chip "ln(5/2)" fades in and is crossed (caption "the signed integral"). Hold about 1 second.

### 13. handoff
> So for any integral question, read what it asks for first, then pick the integral. Next, the same kind of decision for money and chance. Here are two investments that differ by just one phrase. One earns simple interest, and the other is compounded **annually**. Which model does each one need?

Visual: the memory-aid line shows small at the top, then fades on "Next". Board clears to two question strips, one above the other, with the differing phrase underlined amber in each: "$10,000 is invested at 6% p.a. simple interest for 10 years." and "$10,000 is invested at 6% p.a. compounded annually for 10 years." On "annually" the chip "Which model?" and a chip "Next: finance and probability practice". No values or graphs. Hold about 2 seconds. This is g03's opening frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Asked for a function (V(t), f(x), x(t)): integrate with + C, then use the known value to find C.
2. Asked for the change from a to b: ∫ₐᵇ f(x) dx = F(b) − F(a). The C cancels.
3. Asked for an area or a distance: find the zeros, split there, make each piece positive, add. The signed integral alone gives the net change (displacement).
4. Given only readings, or a function with no primitive you can find: trapezoidal rule, ∫ₐᵇ f(x) dx ≈ (h/2)[y₀ + 2(y₁ + ... + y_{n−1}) + yₙ], h = (b − a)/n. It is an estimate.
5. Before integrating, look for a matched inside: f′(x) e^(f(x)) → e^(f(x)); f′(x)/f(x) → ln|f(x)|.

Memory aid (large, on the notes screen): *Function? Plus C. Change? Limits. Area? Split. Table? Trapezia.* Second line: *Then look for a matched inside.*

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades (1 s, shared `KeyNotes` behaviour, root decision 20) back to scene 13's frame exactly (the two investment strips with their underlined phrases, "Which model?" and "Next: finance and probability practice"). This is the final frame and g03's opening frame.

## Teaching checks

- **Does it explain causes?** Why the demand picks the model: a function has a + C to fix, a change is a difference of primitive values, an area counts every piece as positive, and a table has no primitive (2). Why e − 1 is both an amount and an area: the rate is never negative (3). Why the two tank answers agree: C cancels when subtracting (4). Why the integral gives 0 m but the particle moved: negative velocity counts as negative in the integral; the track shows it going back then forward (5). Why the trapezoidal answer is an estimate: the rate between readings is unknown (6).
- **Misconceptions addressed:** "every integral question wants ∫ₐᵇ" (hook, 2); "+ C can be left in a function answer" (4; A1); "the integral is the distance" (5, crossed); "the integral is the area" (A2, crossed); "the change is the amount" (A1, crossed); "the trapezoidal rule gives the exact value" (6); "every formula can be integrated exactly" (7, e^(−x²)); "∫₀²π sin x dx is the area" (7).
- **One idea at a time:** one model per sentence in scene 2; one question per sentence group in scene 7, each answered only with its model chip (plus the sin x area, whose split is the point); one problem per scene from 3 on; in scene 5 one piece per sentence; the parked "e − 1" box is the only earlier result kept in scene 4, because its check uses it.
- **Video makes it easier:** the student watches the amount fill (3), the family lock onto (0, 5) (4), the particle go back and return while the red piece forms (5), and trapezia join readings with no curve between them (6), and sorts three unseen questions before any working (7). Each motion is the evidence for the next sentence.
- **Response opportunity:** two unseen HSC-style tasks with every demand visible, 10 seconds each with the invitation to pause, nothing answer-bearing; card 2 has no graph (it would show the sign change). One crossed mistake each; feedback about 24 s and 34 s (scenes 10 and 12).
- **Avoided double teaching:** matched insides (i04, i05, i09), the FTC (i08), signed and total area (i10), the trapezoidal rule (i12) and distance against displacement (i14) are each used, with one recall sentence at most.
- **Syllabus coverage:** practice only (no ownership): `ci6dc07a10` (3, 5), `ci22db0117` (3, 4), `ci6f5c83b7` (4, A1), `ci33a217e6` (3, 4, 6, A1), `ci0c66d890` (5), `cicfcd020a` (A2), `ci060b93b3` (A2), `cicd64da60` (6, 7).
- **Out of scope by design:** areas against the y-axis; symmetry; areas between curves; probability densities; new rules.

## Practice questions and model answers

**Attempt 1 (scene 9; original wording, HSC style, 2 marks suggested, not an official marking scheme).** "A tank holds 20 L of water at t = 0. Its volume V litres changes at the rate dV/dt = 6 − 2t litres per minute. Find the volume when t = 5."
Model answer: V = ∫(6 − 2t) dt = 6t − t² + C. V(0) = 20 gives C = 20, so V = 6t − t² + 20. V(5) = 30 − 25 + 20 = 25 L. Classic mistake (crossed): "5 L" (the change ∫₀⁵ (6 − 2t) dt, not the volume).

**Attempt 2 (scene 11; original wording, HSC style, 3 marks suggested).** "Find the exact area of the region bounded by the curve y = 2x/(x² + 1), the x-axis and the lines x = −1 and x = 2."
Model answer: d/dx (x² + 1) = 2x, so ∫ 2x/(x² + 1) dx = ln(x² + 1) + C (x² + 1 > 0). y < 0 for −1 < x < 0 and y > 0 for 0 < x < 2, so split at 0. ∫₋₁⁰ = ln 1 − ln 2 = −ln 2; ∫₀² = ln 5 − ln 1 = ln 5. Area = ln 2 + ln 5 = ln 10 square units. Classic mistake (crossed): "ln(5/2)" (the signed integral).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Rate graph | r(t) = 2t e^(t²) L/s on [0, 1]; r(1) = 2e ≈ 5.44 | 1, 3 |
| W1 | primitive e^(t²); ∫₀¹ = e − 1 L ≈ 1.72 L | 3, 4 |
| W2 | V(t) = e^(t²) + C; V(0) = 1 + C = 5; C = 4; V(1) − V(0) = e − 1 | 4 |
| W3 | v = t² − 2t on [0, 3]; ∫₀³ = 0; zero at t = 2; ∫₀² = −4/3; ∫₂³ = 4/3; distance 8/3 m ≈ 2.67 m; furthest left −4/3 m | 5 |
| W4 | t 0, 2, 4, 6, 8 min; r 3, 5, 6, 4, 2 L/min; h = 2, n = 4; (2/2)[3 + 2(15) + 2] = 35 L; reference form (8/8)(35) = 35 | 6 |
| A1 | V = 6t − t² + 20; V(5) = 25 L; crossed 5 L | 9, 10 |
| A2 | primitive ln(x² + 1); ∫₋₁⁰ = −ln 2; ∫₀² = ln 5; area ln 10 ≈ 2.30; crossed ln(5/2) ≈ 0.92 | 11, 12 |
| Quick sort | dP/dt = 3e^(0.5t), P(0) = 10 (model only, not solved); ∫₀²π sin x dx = 0, area 2 + 2 = 4; ∫₀¹ e^(−x²) dx (no elementary primitive; not evaluated) | 7 |
| Handoff | $10,000, 6% p.a., 10 years; simple interest and compounded annually; no values shown | 13, 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with SymPy (3 Nov, isolated Python run, script `g_numbers_check.py` in the designer's scratchpad); Codex to re-check numerically and with a CAS.

- d/dt e^(t²) = 2t e^(t²); ∫₀¹ 2t e^(t²) dt = e − 1 ≈ 1.718282; 2e ≈ 5.436564.
- V(t) = e^(t²) + 4: V(0) = 5; V(1) − V(0) = e − 1.
- ∫₀³ (t² − 2t) dt = 0; ∫₀² = −4/3; ∫₂³ = 4/3; total 8/3 ≈ 2.6667; t² − 2t < 0 on (0, 2) and > 0 on (2, 3).
- Trapezoidal: (2/2)[3 + 2(5 + 6 + 4) + 2] = 35; (8 − 0)/(2 × 4) × 35 = 35.
- A1: ∫₀⁵ (6 − 2t) dt = 5; V(5) = 25; V on [0, 5] stays between 20 and 29.
- Quick sort: ∫₀^π sin x dx = 2, ∫_π^2π sin x dx = −2, so ∫₀^2π = 0 and the area is 4; e^(−x²) has no elementary primitive (its primitive involves erf, outside the course; i12 decision 36 keeps "erf" off speech).
- A2: d/dx ln(x² + 1) = 2x/(x² + 1); ∫₋₁⁰ = −ln 2 ≈ −0.693147; ∫₀² = ln 5 ≈ 1.609438; ln 10 ≈ 2.302585; ln(5/2) ≈ 0.916291.

## Memory aid check

- **"Function? Plus C. Change? Limits. Area? Split. Table? Trapezia."** with **"Then look for a matched inside."** Original. Meaning, as said in scene 8: read what the question asks for; a function needs + C and a known value; a change over an interval needs a definite integral with limits; an area or a distance needs splitting at the zeros; readings need the trapezoidal rule. Assumptions checked: "Area? Split." means split at the zeros inside the interval when the graph changes sign; when it does not change sign the split is not needed (scene 3 says "the rate is never negative here, so this is also the area"), and key note 3 says "find the zeros, split there"; "Change? Limits." covers net change, so a distance question with a sign change goes to "Area? Split." (scene 5 states that the integral is the displacement); "Table? Trapezia." also covers a formula with no primitive in this course, which scene 7 shows with e^(−x²) (scene 2's "there's nothing to integrate" is scoped to readings; key note 4 names both cases). It helps a new case: "a particle starts at x = 2 with v = cos t; find x(t)" is "Function? Plus C." Introduced after the four causes (2 to 6) and the quick sort (7).
- **Considered, not used:** "FCAT" as an acronym (letters with no meaning attached).

## Narration length estimate

Revision 1 (3 Nov; counted by script `g_practice_count.py` in the designer's scratchpad with the build parser rules: `### N.` headings, only lines starting "> " counted, bold markers removed): **5,408 characters** (5,421 with joining spaces), 14 scenes. Characters per scene (1 to 14): 433, 702, 384, 474, 556, 547, 686, 181, 184, 295, 159, 442, 290, 75. At 13.3 characters per second the speech is about 407 s; add about 16 s of settling time (the area sweep in scene 3, the family in scene 4, the particle track in scene 5, the trapezia in scene 6, the two insets in scene 7), 12 s for four in-teaching prediction rings (scenes 2 and 7), 20 s for two countdowns, 5 s of short holds (scenes 8, 10, 12, 13) and about 55 s more of the quiet notes hold (about 108 s of holds): **about 515 s**, under the 570 s cap. Length: the first draft (13 scenes) came to 4,601 characters, so two genuine additions were made rather than padding: the cause sentence in scene 2 (why a definite integral gives a change and why an area needs a split) and the quick-sort scene 7 (three unseen questions, including a formula with no primitive, which the table scene alone did not cover). The result, 5,408, sits in the 5,000 to 5,500 range that root has accepted for focused videos (decisions 24, 33, 43, 54); nothing further is added (open decision 5). Feedback: scene 10 about 24 s and scene 12 about 34 s (including the 1 s holds; open decision 3). Reserve trim if the voiced take runs long: scene 1's fourth sentence (keep the strips silent, −68).

## Scene list and build ids

Lesson key `m-a12g02` (outline math-a12-g02). Suggested explainer folder `src/explainer/lessons/math-a12-g02` and build folder `docs/production/claude-pm/lessons/m-a12g02` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 14 scene headings, all `### N.`): hook, demand-picks-model, worked-1-change, worked-2-function, worked-3-distance, worked-4-table, quick-sort, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`: the learner copies five notes). Transitions (`pickTransition`): g01's last frame continues into scene 1 (camera continue; the chips grow into strips); 1 to 2 camera continue (strips shrink left); 2 to 3 clear change to the graph; 3 to 4 camera continue (same time axis; the area box parks); 4 to 5 clear change (new representation); 5 to 6 clear change; 6 to 7 clear change; 7 to 8 camera pull back to the four cards; attempts and feedback card shrink to the top; 12 to 13 board clear; 13 to 14 fade to the notes board.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, "Pause here to answer." on screen); the 3 s prediction rings in scenes 2 and 7 (four in all). key-notes is the quiet notes hold (about 60 s). Review evidence paths for the LESSONS entry: `learning_review` = `checks/m-a12g02-learning-review.md`, `science_check` = `checks/m-a12g02-maths-check.md`.

## Assets

Have: no plates. All visuals are coded with the explainer kit, the brief 129 maths kit with its brief 131, 133, 135 and 143 additions, and the integral parts already specified for the next maths kit brief:
- `FunctionGraph` / `GraphLayer` (scenes 1, 3 to 7, 12, 13): 2t e^(t²) on [0, 1]; e^(t²) + C; t² − 2t on [0, 3]; 2x/(x² + 1) on [−1, 2]; plotted points only in scene 6.
- `AreaFill` (scenes 3, 5, 7, 12): sweep with a readout (3); signed colours (5, 7, 12). `AreaFlip` (5, 12).
- `PrimitiveFamily` with `constantThrough` (scene 4): e^(t²) + C through (0, 5).
- `ParticleTrack` (scene 5): position t³/3 − t² from 0 to −4/3 and back to 0, linked to the tracer time.
- `RiemannStrips` trapezia mode and `CoefficientLedger` (scene 6): on five data points (no function); trapezia on e^(−x²) in the scene 7 inset.
- `IntegralNotation`, `LimitSubstitution`, `AlignedAlgebra`, `ExpressionSlot`, `DerivativeFactor`, `DerivativeCheck` (scenes 3, 4, 10, 12).
- Shared: `Countdown` (and 3 s rings in scenes 2 and 7), `QuestionCard` (subject "Mathematics Advanced"), `Chip` with `cross`, `Callout`, `PenArrow`, `KeyNotes`, `Heading`; the data table in scene 6 and the question strips in scenes 7 and 13 as plain layout.

## Codex asset brief

No painted plate (programme decision 5). One new small coded part and two small extensions for the next maths kit brief:
1. **`CueModelTable` (new).** Props: `rows` (`{cue, model, icon}[]`, author-supplied React content; icons are small coded sketches built from existing parts), `revealAt` (frame per row), `highlight` ({row, at}[]), `compact` (frame at which it shrinks to a side strip). Rows write in one at a time; one highlight at a time. Used in g02 scene 2 and, in two halves, in g03 scenes 2 and 5 (shared part).
2. **`RiemannStrips` on data points (extension).** Trapezia mode with `points` ({x, y}[]) instead of a function, drawing straight tops between consecutive points; no curve is implied. Used in scene 6. If the i12 build already accepts sampled values, this is only a prop name.
3. **`ParticleTrack` linked to a tracer (extension).** The track's dot position comes from an author-supplied position function of the same time parameter as the graph tracer, so the dot and the tracer stay in step (scene 5).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" numerically (and with a CAS for the primitives and integrals), and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm each model choice: W1 is a change over an interval (and also an area because r ≥ 0 on [0, 1]); W2 is a function with an initial condition; W3's distance needs a split at t = 2; W4 is an estimate; A1 asks for a volume, not a change; A2's area needs a split at x = 0.
3. Confirm the trapezoidal working and that the reference-sheet chip matches the form used in i12 (root decision 36), and that no over- or underestimate claim is made.
4. Confirm the scope of every learner-visible general claim: the four rows in scene 2 and key notes 1 to 5; "there's nothing to integrate" is said of readings only; "no mod signs are needed" is justified by x² + 1 > 0.
5. Confirm both attempt cards carry every demand and reveal no model, primitive, split or sign, and that card 2 shows no graph.
6. Confirm the eight practised syllabus quotes match the crosswalk JSON exactly (linear form of the MathML), that the design claims no ownership, and that no site module label appears in learner copy or metadata.
7. Confirm the handoff (scene 13) shows no value, formula or graph.
8. Confirm no em dash (U+2014) anywhere in this file, and Australian spelling in narration and screen text.
9. Confirm the narration character count and per-scene counts by script with the build parser rules.

## YouTube metadata (draft)

Title: Mixed Integration Practice: Function, Change, Area or Estimate? | Year 12 Maths Advanced

(Title length: 87 characters.)

Description: Full lessons, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/integral-calculus/index.html

An integral question won't tell you which integral to use. Read what it asks for: a function needs + C and a known value, a change between two times needs a definite integral, an area or a distance needs splitting where the graph crosses zero, and a table of readings needs the trapezoidal rule. Worked problems: water flowing in at 2t e^(t²) litres per second (e − 1 litres in the first second, and the volume function), a particle whose displacement is 0 m but which travels 8/3 m, and an estimate of 35 litres from five readings. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 12, practice: integral calculus and applications of calculus.
Syllabus content practised (NSW Mathematics Advanced 11-12, 2024):
"Determine f(x), given f′(x) and an initial condition f(a) = b where a and b are constants"
"Apply ∫_a^b f(x) dx = F(b) − F(a), where F(x) is a primitive of f(x), to calculate definite integrals and solve related theoretical problems involving functions within the scope of the Mathematics Advanced course"
"Establish and use ∫ e^u (du/dx) dx = e^u + C, where u is a function of x, or ∫ f′(x) e^(f(x)) dx = e^(f(x)) + C"
"Establish and use ∫ (u′/u) dx = ln|u| + C, where u is a function of x, or ∫ (f′(x)/f(x)) dx = ln|f(x)| + C, on a domain where f(x) ≠ 0"
"Use definite integrals to solve problems involving the areas of regions bounded by the graph of the continuous function y = f(x), the x-axis and the lines x = a and x = b, in cases where f(x) ≥ 0 throughout a ≤ x ≤ b, f(x) ≤ 0 throughout a ≤ x ≤ b or where f(x) changes sign in the interval a ≤ x ≤ b, with or without the graph provided"
"Use the Trapezoidal rule to approximate integrals"
"Use integration to solve practical problems on the rate of change of a quantity Q, where (dQ/dt) or (d²Q/dt²) is given as a function of time t, together with sufficient initial conditions"
"Solve problems relating to the motion of a particle moving in a straight line, using both differentiation and integration to connect the concepts of displacement, velocity and acceleration"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa41f9f88f and https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa383c9104

Builds on: Mixed differentiation practice (previous video); the integration videos. Next: Finance and probability practice.

#Year12Maths #MathsAdvanced #Calculus #HSCScience

## Open decisions

- **1. Description link (root).** The outline lists no site source; the description links the integral calculus index page. Root to confirm the link form when the upload brief is written (`.sa.html` pages are used elsewhere, root decision 15).
- **2. Root decision 23's log-scale and non-trig model items (root).** Not used here (see Decisions): they would add a fifth, unrelated model to an integral video. Options: (a) a short fourth practice video for graph transformations and log scales (earthquake magnitude and star magnitude attempts, one exponential practical model for `ci5f2b7245`); (b) accept `ci5f2b7245` as partial with t03 and d18 and d19 as its practical models. Recommendation (a) only if the owner wants the practice series to cover every strand; otherwise (b).
- **3. Feedback 2 length (root).** About 34 s, because the matched-inside recognition and the split are both needed. Same-length fallback: drop the "No mod signs" sentence (−82 characters, about 6 s) and keep the grey tag "x² + 1 > 0" silent.
- **5. Length (root).** 5,408 characters (about 515 s) after two genuine additions; accept as for other focused videos, or name a further practice item (not padding) to add.
- **4. The tank as a painted plate (root).** Not used: the decision being taught is in the graph and the question wording, and a plate would compete with the four strips. Confirm.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from the i01 to i14 entry knowledge; check that scene 2's four rows are readable one at a time and that the student is asked to choose before each worked problem; that the two tank answers agreeing makes "C cancels" visible; that the particle track makes "displacement 0 but it moved" concrete; that the trapezia are drawn on points, not a curve; that card 2 gives no sign hint), then the Codex maths check and error check.
- The area sweep, the family locking, the particle track and the trapezia carry the explanation; judge them at playback speed in the voiced preview, not from stills.
- The opening frame is g01's scene 13 exactly (both designs written by the same designer, 3 Nov). If g01's handoff changes in review, change scene 1's first visual to match.
