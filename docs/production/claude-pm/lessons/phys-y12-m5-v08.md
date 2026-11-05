# Year 12 Physics M5 V08: Testing the horizontal-launch model. How can primary measurements test the horizontal-launch model? (design)

Status: Revision 1 (6 Nov 2026): first design. Needs independent learning review and science check before voicing.

Narration 6,392 characters, 17 scenes, about 568 s, counted by script with the build parser rules (see "Narration length estimate"). Opens on v07's final frame.

Scope: eighth video of Year 12 Physics (Physics Stage 6, 2017 syllabus), Module 5 (Advanced Mechanics), inquiry question "How can models that are used to explain projectile motion be used to analyse and make predictions?". Templates: `phys-y12-m5-v01.md` (this run's structure and visual system), `phys-y11-fa1-v01.md`, `math-a12-d10.md` (calculation layout), `bio-y11-fa1-v05.md` (plates and asset brief format). Pre-design pack: `../pre-design/phys-y12/phys-y12-m5-v08.md` (every number recalculated below). Site lesson read in full (6 Nov, read-only): connect and predict, aim and theory, method, results table and sample data, analysis and validation, error analysis, the time-of-flight reliability check, activities, revisit, "Assess 6 marks", "Analyse 5 marks", short-answer practice and answers: `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson05.sa.html`, SHA256 `306416b4f7988dab0e9fa8592142380128e0139ce61e7f3e487843d1c622c0d1` (recomputed 6 Nov; matches the pack and the route). Route entry: `phys-y12-m5-v08` in `../../programme/phys-y12-route-inputs.json`, sections `l05-design-title`, `l05-collect-title`, `l05-graph-title`, `l05-error-title`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Plan safe horizontal launch measurements, repeated ranges, height and range uncertainty, linearisation and comparison with the model. Separate supplied processing data from primary results. Stop before claiming a fit proves no systematic error." Next: "phys-y12-m5-v09: Why does a force turn an object more effectively at some angles?" Route practical: "Projectile primary investigation: horizontal launch, repeated range and height measurements". Viewing this video does not complete the practical or its hours (route `splitOrReorderReason`).

Owner rules applied: 2017 syllabus only, quoted exactly; one main learner question; no people, hands, faces or body outlines (no student at the bench; the ball is released by a coded release gate, a small hinged stop on the ramp, never a hand; "someone's feet" in the safety line is speech only); real apparatus are painted plates (ramp, retort stand, boss, steel ball, paper, carbon paper, spirit level, plumb bob, catch tray, light gate, metre rule), and the graph, table, marks, brackets and arrows are coded; plates never stretched; supplied processing data are labelled on screen as "sample data for processing practice" and kept separate from the illustrative repeat values and from any student's primary data; one reasoning stage at a time; every number recalculated in Python; g = 9.8 m s⁻²; HSC data sheet symbols; in-teaching prediction with a 3 s countdown; "Pause here to answer." then a 10 s countdown with the full worded question on screen; brief feedback with one crossed-out mistake; original HSC-style questions; optional key-notes hold; Australian spelling; no em dashes.

Syllabus content (Physics Stage 6 (2017), Module 5 Advanced Mechanics; ledger id `P5-IQ1-03`), quoted from the route JSON `syllabusActions`:

- `P5-IQ1-03`: "conduct a practical investigation to collect primary data in order to validate the relationships derived above."

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 53)

**Boundary:** starts on v07's final frame (ramp on a retort stand, ball leaving horizontally, "predicted" and "measured: ?" ticks). Teaches: the model's prediction R = u_x √(2h ÷ g), so R ∝ √h (four times the height, twice the range); primary data; a fair test (vary h, measure R, keep u_x fixed by the same ball and release point, exit horizontal); how to measure h and R and mark first contact; a short risk check; repeats, mean and half-range, reading uncertainty versus scatter; linearising (R against √h); the gradient's meaning and the launch speed from it (about 2.2 m s⁻¹ from the sample data); the decisive test (an independent u_x, for example a light gate); random spread versus systematic shift (the site's 6 cm and 4 cm example); a straight line through the origin does not rule out a proportional systematic error, and agreement holds only over the tested range. Stops before any claim that a fit proves no systematic error (route), and before percentage-difference thresholds, residual analysis, standard errors and confidence intervals.

## Decisions

- **Learner question (route wording kept).** "How can primary measurements test the horizontal-launch model?" names the practical's purpose. The answer, built in order: the model makes a specific, checkable prediction (2); a test needs one changed variable and a controlled launch speed (3); careful, repeatable measurement (4 to 6); a transformed graph that should be straight (7); a gradient that must match an independent speed (8); then judging disagreement (9) and the limits of agreement (10).
- **Hook (site "Key Prediction" and quick check, with the site's sample values).** "Raise the exit four times higher: how much further?" with four option chips and a 3 s countdown. The sample data give 0.32 m at 0.10 m and 0.64 m at 0.40 m, exactly twice; scene 2 explains it from the fall time.
- **Landing surface (design change, consistent with the site's heights).** The site's heights (0.10 to 0.50 m) are measured "from the floor"; a floor launch would need a ramp on a low stand. Here the retort stand and the landing paper are both on the bench top, and h is measured from the bench top. Physics unchanged. v07's final frame is drawn to match.
- **Height to the bottom of the ball (deviation from the site's method, step 4).** The site says to "measure the vertical height h from the floor to the centre of the ball at the exit point". The landing mark is made when the bottom of the ball touches the surface, so the ball's centre falls h_centre − r. The design measures to the bottom of the ball at the exit (the actual fall) and names "a height measured to the centre of the ball instead of the bottom" as one possible systematic shortfall (scene 9). See site note 1 and author note a.
- **Release (no hands).** A coded release gate (a small hinged stop at a marked point on the ramp) lifts on cue. Narration says "let go and never pushed" (site procedure step 3).
- **Data kept separate (route; pack section 3).** Three sets of numbers appear, each labelled on screen: (1) illustrative repeat values at one height, 0.53, 0.55, 0.57 m (new, chosen to match the site's 0.55 m mean at h = 0.30 m), tag "illustrative values"; (2) the site's five-point sample table, tag "sample data for processing practice, not primary data"; (3) the site's 6 cm spread and 4 cm shortfall, presented as "imagine". No value is called a measurement.
- **Gradient (site step 2 and the pack's fit note).** A free least-squares line through the sample data has gradient 1.003 m^½ and intercept 0.0023 m (consistent with zero); the line through the origin has gradient 1.007 m^½. The design shows the free line, narrates "about one point zero", and gives u_x = m √(g ÷ 2) ≈ 2.2 m s⁻¹ (2.220 from the free fit, 2.229 through the origin; both round to 2.2). The site's instruction "do not force it through the origin unless the evidence and uncertainty justify that choice" is followed.
- **The decisive test (site "Assess 6 marks" step 5 and the analysis card's step 4).** The model passes a genuine test when the gradient's u_x agrees, within uncertainty, with u_x measured independently (a light gate at the exit; existing plate). No light-gate value is invented.
- **Random versus systematic (site "Analyse 5 marks", with the precision note from `../site-corrections-phys-y12.md`).** The 6 cm spread is random (± 3 cm); the consistent 4 cm shortfall is systematic and is not removed by averaging. Following the correction file's note, narration says repeats make the mean more reliable and do not shrink the scatter of individual landings or remove a bias. Causes are listed as candidates to investigate, not one proven cause (pack: "evidence to investigate model, measurement and conditions").
- **Route stop (scene 10).** A proportional systematic error (u_x lower than assumed) still gives a straight line through the origin, so a good-looking line does not prove the absence of systematic error; and agreement supports the model only over the tested heights and speeds (site "Validation Criteria" and "Revisit").
- **Memory aid (scene 11, new): "Repeats tame the spread, not the shift."** See "Memory aid check".
- **Mistake scene.** Not a separate scene; the two classic errors are crossed in the feedback ("more trials make it accurate"; "the gradient is the speed"), and scene 10 is the route's own trap.
- **Attempts (original, HSC style; pack candidates).** A1: 0.70, 0.72, 0.74 m → 0.72 ± 0.02 m; repetition shows precision, not accuracy. A2: gradient 1.00 m^½ → u_x = 1.00 √(9.8 ÷ 2) = 2.21 m s⁻¹.
- **Handoff (route next).** Scene 16 leaves projectiles: a spanner on a stuck nut, with three equal pushes at the handle end in three directions and "?" over the nut (v09: "Why does a force turn an object more effectively at some angles?"). See "Final frame".
- **Site sources used:** hook prediction ("Doubling the launch height does not double the range. Quadrupling the height doubles the range", scenes 1, 2); aim and theoretical prediction (2); variables and procedure (3, 4); safety box (5); results table, half-spread uncertainty and the reading-uncertainty note (6); sample data and "the √h column linearises the relationship" (7); analysis step 2 and step 4, validation criteria (8, 10); error analysis lists (9); "Analyse 5 marks" (9); "Assess 6 marks" step 5 (8, 10); short-answer Q2 (7, 8). Not used: the percentage-difference formula and quick check (route stops before thresholds; checked, correct at 7.4%), the time-of-flight reliability table (a second test; checked: 0.20, 0.29, 0.35 s correct), stopwatch timing (the site itself rates it a large error), activities A1 and A2 (earlier videos' content).
- **Site notes (quoted from site lesson 5, read 6 Nov; for root to log in `../site-corrections-phys-y12.md` if accepted):**
  1. Method step 4: "Measure the vertical height h from the floor to the centre of the ball at the exit point." The fall that matters is from the bottom of the ball at the exit to the landing surface (the centre falls h − r). For a 16 mm ball at h = 0.10 m measured to the centre, the predicted range is about 4% too large (√(0.092 ÷ 0.100) = 0.959). Suggest "to the bottom of the ball" or "subtract the ball's radius".
  2. Variables list: "Dependent: Horizontal range R (measured from base of ramp to landing point)" conflicts with procedure step 5 ("from the point directly below the exit"). Suggest the procedure's wording in both places.
  3. Already logged precision note (random error "reduced by repeating trials and averaging"): applied in scene 6.
  4. Checked and correct: theoretical prediction and gradient v_x √(2/g); √h column values; quick check 7.4%; time-of-flight table (0.202, 0.286, 0.350 s); "Assess 6 marks" (gradient √(2h ÷ g) for x against u_x); "Analyse 5 marks" (± 3 cm from a 6 cm spread); short-answer model answers.
- **Cause chain taught, in order:** (1) a horizontal launch's fall time depends only on h, t = √(2h ÷ g), so four times the height gives twice the time (2); (2) constant u_x turns twice the time into twice the range (2); (3) a test needs u_x held fixed so that only h changes R (3); (4) the bottom of the ball falls h, and the mark records first contact (4); (5) identical launches scatter for random reasons, so repeats give a mean and a spread (6); (6) if R ∝ √h, then R against √h is a straight line through the origin (7); (7) the gradient equals u_x √(2 ÷ g), so it predicts a speed that can be checked another way (8); (8) a systematic cause shifts every result the same way, so averaging cannot remove it (9); (9) a proportional error keeps the line straight, so straightness alone cannot rule it out (10).
- **Entry knowledge (route `entryKnowledge` and prerequisites v01, v05, v07):** horizontal launch, t from the vertical motion and s_x = u_x t (v01); model assumptions (v01); Year 11 working scientifically (variables, mean, gradient of a straight line).
- **Learner-visible vocabulary (plain meaning at first use):** primary data (data you collect yourself by measuring, scene 3); controlled variable (kept the same so it cannot change the result, 3); random uncertainty (unpredictable scatter between repeats, 6); half-range uncertainty (half the spread of the repeats, 6); linearise (choose what to plot so the model predicts a straight line, 7); systematic error (a cause that shifts every result the same way, 9).
- **Legacy logic ported:** none. The coded families `m5-repeat-measurements` and `m5-slope-intervals` (`src/explainer/physics/module5/practical-details/`) are reparameterised: their own simulated datasets (0.798 to 0.818 m; h against x²) are not used (pack; kit comparison).
- **New explainer motion:** **ramp launch stage** (coded geometry around the plates: release gate, ball rolling down the track, horizontal exit, strobe dots to the bench, a dark mark on the carbon paper, a plumb line, h and R brackets); **landing marks** (repeat marks appearing one by one with a spread bracket and mean tick); **graph morph** (`DataGraph`: R against h with a curve, then the x axis re-labels to √h and the points slide to their new x positions and line up, then a best-fit line with gradient triangle and intercept readout); **proportional-error overlay** (a second set of points and line, each R shrunk by the same fraction, still straight through the origin); `AlignedAlgebra`; `Countdown` (3 s in scene 1; 10 s in scenes 12 and 14); `QuestionCard`; `Chip` with `cross`; `PenArrow`; `ScribbleCircle`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the bench stage on the left (about 1,100 × 700 px; author note c); graph, table or working on the right; the bench top above the bottom 12% of the frame. Colour key from v01: horizontal (R, u_x) teal, vertical (h, fall) blue, model prediction orange dashed, sample data navy dots, illustrative values grey, systematic shift red-brown (`#9a4a2a`), random spread grey band, crossed chips red.
- **No human figures.** The release gate opens itself; no student, hand or eye is drawn; "A student plots" in A2 is text only.
- **Author notes (not learner copy):**
  (a) Ball radius: for a ball of radius r, the centre falls h_bottom (the height of the ball's bottom at the exit above the bench), because at landing the centre is r above the surface and at the exit it is h_bottom + r above. So measuring to the bottom is exact in the model; measuring to the centre overstates the fall by r.
  (b) Sample data (site, unchanged): h = 0.10, 0.20, 0.30, 0.40, 0.50 m; R = 0.32, 0.45, 0.55, 0.64, 0.71 m; √h = 0.3162, 0.4472, 0.5477, 0.6325, 0.7071 m^½ (unrounded in the fit). Free least-squares fit: gradient 1.00302 m^½, intercept 0.00225 m; through the origin: 1.00700 m^½. u_x = 2.2203 and 2.2291 m s⁻¹.
  (c) Stage geometry: bench top line at y = 820 px; 1,000 px per metre on both axes for the stage (h = 0.10 m is 100 px; 0.40 m is 400 px; R = 0.64 m is 640 px), exit at x = 220 px; strobe dots every 0.05 s.
  (d) Real ramps: rolling balls also carry rotational kinetic energy, so u_x is less than √(2g × drop on the ramp); the method avoids that by never predicting u_x from the ramp height. Not narrated.
  (e) Half-range is a rough spread measure, not a standard error or confidence interval (pack). Screen tag in scene 6: "a simple spread estimate".
  (f) Pronunciations: "root h", "root metres", "R against root h", "u x"; "zero point seven two plus or minus zero point zero two".

- **Open decisions for root:**
  - **1. Height to the bottom of the ball (physics check).** The design departs from the site's "to the centre of the ball" (site note 1). Confirm, and log the site note.
  - **2. Illustrative repeat values (learning review).** 0.53, 0.55, 0.57 m at h = 0.30 m are invented to show scatter around the site's mean. They are tagged "illustrative values". Confirm the tag is enough, or replace with the pack's 0.70, 0.72, 0.74 m (then A1 needs new numbers).
  - **3. New plates (root, Codex).** The launch ramp is essential (no existing plate has a horizontal exit); carbon paper, spirit level and plumb bob are small supporting plates. Fallbacks: a coded dark rectangle for carbon paper, coded level and plumb line (weaker; owner rule prefers plates for objects).
  - **4. Practical status (root).** The video explains how to plan, measure and analyse; it does not record primary data or complete the practical. The description says so.
Main question: *If R = u_x √(2h ÷ g), raising a horizontal launch four times higher should double the range. How do we turn our own measurements into a real test of that model?*
Entry knowledge: horizontal launch (u_y = 0), t from the vertical motion, s_x = u_x t; model assumptions; variables, mean and gradient from Year 11.
Stops after: prediction, fair test, method, safety, repeats and uncertainty, linearising, gradient and the independent-speed test, random versus systematic, the limits of agreement. No percentage thresholds or statistics.
Handoff: v09, why a force turns an object more effectively at some angles.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *R*, *h*, *u*, *t*, *g*, *m* (gradient). Paper background and handwritten headline face as the explainer house style.

### 1. hook (four times higher)
> Last time ended with a ball rolling down a ramp and flying off it horizontally. Here's the experiment. The ramp's exit is ten centimetres above the bench, and the ball lands thirty-two centimetres away. Now raise the exit to forty centimetres, four times **higher**, and release the ball from the same spot. How much further will it land? The same, one and a half times, twice, or four times as far? Have a **think**.

Visual: opens on v07's final frame (see "Opening frame"). Camera continue: the stage tightens on the ramp and the paper. On "ten centimetres" a blue height bracket "h = 0.10 m" from the bench to the bottom of the ball at the exit; on "thirty-two centimetres" the ball replays its flight and a teal bracket "R = 0.32 m" runs from the plumb point to the mark. On "higher" the boss and ramp slide up the stand to "h = 0.40 m" (the bracket stretches, the ball returns to the release gate). On "think" a 3 s `Countdown` with four option chips: "same", "× 1.4", "× 2", "× 4".

### 2. what the model predicts
> The model makes a sharp prediction. The ball leaves horizontally, so its fall time comes from the drop alone: h equals a half g t squared, so t is the square root of two h over g. Four times the height gives only twice the **time**. The horizontal velocity doesn't change, so the range, u x times t, is also **twice**, sixty-four centimetres. The model says R is proportional to the square root of h. So how can our own measurements test that **prediction**?

Visual: on "fall time" the two-column ledger from v01 appears small at the right: blue column "u_y = 0, h = ½gt², t = √(2h ÷ g)"; teal column "R = u_x t". On "time" two clock readouts sit side by side, "h = 0.10 m: t = 0.143 s" and "h = 0.40 m: t = 0.286 s", with a chip "× 4 height → × 2 time". On "twice" the ball launches from 0.40 m and lands at "R = 0.64 m" beside the earlier mark at 0.32 m, a teal bracket "× 2"; the "× 2" option chip from scene 1 ticks. On "proportional" an orange equation strip writes "R = u_x √(2h ÷ g), so R ∝ √h". On "prediction" the heading writes on: "How can primary measurements test the horizontal-launch model?".

### 3. a fair test: what changes, what stays
> Data you collect yourself, by measuring, is called primary data. To make it a fair test, only one thing should change at a time. Here we change the height, h, and measure the range, R. So the launch speed has to stay the same at every height. That means the same ball, released from the same marked point on the ramp, let go and never **pushed**. And the exit has to be horizontal, checked with a spirit level, so the ball leaves with no vertical **velocity**.

Visual: on "primary data" a navy chip "primary data: collected by you, by measuring". Three variable cards write in a column at the right: on "change the height" "independent: h (changed)" (blue); "dependent: R (measured)" (teal); on "launch speed has to stay the same" "controlled: u_x, by same ball and same release point" (navy), with a short tag "controlled: kept the same so it can't change R". On the stage a small coded marker line and the release gate (a hinged stop) highlight on the ramp; on "pushed" the gate lifts and the ball rolls from rest. On "velocity" the spirit level plate (`y12p-spirit-level-v1.png`) sits on the exit section, its bubble centred, and a tag "exit horizontal: u_y = 0".

### 4. measuring h and R
> Now measure carefully. Carbon paper laid over white paper marks exactly where the ball first touches **down**. A plumb line hanging from the exit marks the point directly below it, and R is measured from there to the centre of the mark. For the height, measure from the bench to the bottom of the ball at the exit, because that's how far the ball actually falls before it **touches**. Use at least five heights, and at least three trials at each.

Visual: on "Carbon paper" the carbon paper plate (`y12p-carbon-paper-v1.png`) lies over the white sheet; on "down" the ball lands and lifts the carbon edge briefly to show a small dark dot on the white paper. On "plumb line" the plumb bob plate (`y12p-plumb-bob-v1.png`) hangs on a coded string from the exit to a small cross on the paper; the metre rule plate (`phys-y11-metre-rule-v1.png`, scaled uniformly) lays from the cross to the mark with a teal bracket "R". On "bottom of the ball" a blue bracket draws from the bench to the bottom of the ball at the exit, "h", with a grey ghost bracket to the ball's centre that is crossed small (tag "not to the centre"). On "touches" a tiny inset shows the ball at the exit and at landing, both bottoms touching the dashed fall line. A small table header writes at the right: "h (m) | R₁ | R₂ | R₃ | mean R | ± (m)" with five empty rows.

### 5. a quick risk check
> Before you start, a quick risk check. The ball bounces and rolls, so put a catch tray beyond the paper, where it can't roll off the bench and under someone's **feet**. Clamp the stand firmly so it can't tip. And if you use a spring launcher instead of a ramp, wear safety **glasses**.

Visual: on "catch tray" the tray plate (`phys-y11-sand-tray-v1.png`) slides in beyond the paper, and the ball's replay ends in it. On "feet" a short red dashed path shows a ball rolling off the bench edge, then a tick chip "catch tray". On "Clamp" the boss and the stand base glow, chip "stand clamped, base on bench". On "glasses" a chip "spring launcher: safety glasses". Three chips collect under a heading "Risk check".

### 6. repeats and uncertainty
> Here are three landing marks from one height, as illustrative values: fifty-three, fifty-five and fifty-seven **centimetres**. Identical launches don't land in exactly the same place, because tiny differences in release and spin change each flight. That scatter is random uncertainty. We report the mean, fifty-five centimetres, plus or minus half the spread, two centimetres. The rule's reading uncertainty is only half a millimetre, so here it's the scatter, not the ruler, that limits **us**. Repeating trials makes the mean more reliable, but it doesn't make any single landing less **scattered**.

Visual: camera push to the paper strip at h = 0.30 m (tag "illustrative values"). On "centimetres" three dark marks appear one by one at 0.53, 0.55 and 0.57 m along a teal scale. On "random uncertainty" a grey band spans the three marks, tag "random: unpredictable scatter". On "mean" a navy tick at 0.55 m and the row fills: "R = 0.55 ± 0.02 m", with "± = (0.57 − 0.53) ÷ 2" (tag "half-range: a simple spread estimate"). On "us" a zoomed rule inset shows 1 mm divisions and "reading: ± 0.5 mm", beside the 40 mm band, to scale. On "scattered" a fourth and fifth mark land inside the band, the mean tick barely moves, the band does not shrink (chip "more repeats: steadier mean, same scatter").

### 7. straighten the curve
> Now the full set. These are sample values, supplied to practise processing, not anyone's own results. Plot R against h, and the points **curve**. A curve is hard to judge by eye. But if R is proportional to the square root of h, then plotting R against root h should give a straight line through the **origin**. Choosing what to plot so the model predicts a straight line is called linearising. And here, the points do line **up**.

Visual: camera change to the graph layout. A table writes at the left with a navy tag "sample data for processing practice, not primary data": h 0.10 to 0.50 m, R 0.32 to 0.71 m. On "curve" `DataGraph` plots R (m) against h (m): five navy dots and a faint curve through them, bending over. On "straight line" a √h column writes into the table (0.316, 0.447, 0.548, 0.632, 0.707 m^½). On "origin" the x axis relabels "√h (m^½)" and the dots slide horizontally to their new positions; a dashed orange prediction line from the origin appears. On "linearising" a chip "linearise: plot so the model gives a straight line". On "up" the dots settle along a straight band.

### 8. the gradient is a speed in disguise
> The gradient has a meaning. From the model, R equals u x times root two over g, times root h. So the gradient is u x times root two over g. The line of best fit here has a gradient of about one point **zero**, in units of root metres, and it passes almost through the origin. Rearranging, u x equals the gradient times root g over two, about two point two metres per **second**. Now here's the real test. Measure u x another way, say with a light gate at the exit. If the two values agree within their uncertainties, the model has passed a genuine **test**.

Visual: on "From the model" an equation strip writes "R = u_x √(2 ÷ g) × √h" with "u_x √(2 ÷ g)" boxed and labelled "gradient m". On "zero" a navy best-fit line draws through the points (free fit), a gradient triangle reads "m = 1.00 m^½" and an intercept readout "intercept = 0.002 m (about 0)". On "second" `AlignedAlgebra`: "u_x = m √(g ÷ 2) = 1.003 × √4.9 = 2.22 m s⁻¹ ≈ 2.2 m s⁻¹". On "light gate" the stage returns small at the left with the light gate plate (`phys-y11-light-gate-v1.png`) straddling the exit, readout "u_x = ? (measured)". On "test" two navy bars "from gradient" and "from light gate" with uncertainty whiskers, overlapping, and a tick chip "agree within uncertainty: model supported".

### 9. spread or shift?
> But what if they don't agree? Imagine repeated landings spread over about six centimetres, while the mean lands about four centimetres short of the prediction, every time. The spread is random. It sets the uncertainty, about plus or minus three **centimetres**. The shortfall is a systematic error, because it shifts every result the same way, and averaging more trials will never remove it. Air resistance could cause it. So could an exit tilted slightly down, or a height measured to the centre of the ball instead of the bottom. Each is a lead to **investigate**.

Visual: camera change to a single paper strip (tag "imagine"). An orange dashed tick "predicted" and, 4 cm short of it, a cluster of grey marks spanning 6 cm with a navy mean tick. On "spread" the grey band spans the cluster, "6 cm spread, random". On "centimetres" "± 3 cm" writes on the band. On "shortfall" a red-brown bracket from the mean tick to the predicted tick reads "4 cm short: systematic"; on "averaging more trials" more marks land inside the band and the mean tick stays 4 cm short. On "Air resistance" three candidate chips write in turn under the strip: "air resistance (can only shorten R)", "exit tilted down", "h measured to the ball's centre"; on "investigate" each chip gets a small grey "check" box (unticked).

### 10. what a straight line can't tell you
> One more warning. A straight line through the origin doesn't prove there's no systematic error. If the ball always left a little slower than you assumed, every range would shrink by the same fraction, and the graph would still be a perfect straight line through the origin, just with a lower **gradient**. That's why the check against an independent u x matters. And even a good match only supports the model over the heights and speeds you actually **tested**.

Visual: camera change back to the graph. On "a little slower" a second set of dots (red-brown, open circles) appears, each 3% below its navy dot, and its own line draws straight through the origin (tag "every R × 0.97: still straight"). On "gradient" the two gradient readouts sit side by side, "1.00" and "0.97", and only the light-gate bar from scene 8 (now not overlapping the lower value) reveals the difference. On "tested" the graph's x axis shades outside 0.316 to 0.707 m^½ grey with a tag "tested range: h = 0.10 to 0.50 m, this ball".

### 11. memory aid
> So keep two ideas apart. Spread is random, and a shift is systematic. Repeats tame the spread, not the **shift**.

Visual: board clears to two paper strips side by side: left, marks scattered around the predicted tick (grey band, "spread"); right, a tight cluster offset from it (red-brown bracket, "shift"). On "Repeats" more marks land on both strips: the left mean settles onto the prediction; the right mean stays offset. On "shift" the handwritten line writes large above: "Repeats tame the spread, not the shift." Hold about 2 seconds.

### 12. attempt 1 (countdown, 10 seconds)
> Your turn. In a horizontal-launch investigation, three repeated ranges from one height are zero point seven zero, zero point seven two and zero point seven four metres. Calculate the mean range and its uncertainty as half the spread. Then explain whether the repeated trials show that the result is accurate. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "In a horizontal-launch investigation, three repeated measurements of range from the same launch height are 0.70 m, 0.72 m and 0.74 m. (a) Calculate the mean range and its uncertainty, taking the uncertainty as half the range of the measurements. (b) Explain whether repeating the trials shows that the mean range is accurate. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 1 (brief)
> The mean is zero point seven two metres, and half the spread is zero point seven four minus zero point seven zero, over two, which is zero point zero two. So R is zero point seven two, plus or minus zero point zero two **metres**. Repeats show the result is precise, not that it's accurate. A tilted exit or a mis-measured height would shift all three trials **together**, and the spread would never show it. The slip is saying more trials make it accurate.

Visual: card shrinks to the top; "half the range" and "accurate" underline. On "metres" `AlignedAlgebra` "mean = (0.70 + 0.72 + 0.74) ÷ 3 = 0.72 m; ± (0.74 − 0.70) ÷ 2 = ± 0.02 m; R = 0.72 ± 0.02 m". On "together" three marks on a strip slide together by the same distance (red-brown bracket), the band unchanged. On "more trials make it accurate" a chip "repeats make it accurate" fades in and is crossed (caption "repeats: precision; accuracy needs no bias"). Hold about 1 second.

### 14. attempt 2 (countdown, 10 seconds)
> Last one. A student plots range R against the square root of the drop height h, and the line of best fit has a gradient of one point zero zero root metres. Using R equals u x times the square root of two h over g, calculate the horizontal launch speed. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "In a horizontal-launch investigation, range R (m) is plotted against the square root of the drop height, √h (m^½). The gradient of the line of best fit is 1.00 m^½. The model is R = u_x √(2h ÷ g), with g = 9.8 m s⁻². Calculate the horizontal launch speed u_x. (2 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no graph).

### 15. feedback 2 (brief)
> The gradient is u x times root two over g. So u x is the gradient times root g over two, one point zero zero times root four point nine, about two point two one metres per **second**. The slip is treating the gradient itself as the speed. Its unit is root metres, so it isn't a **speed**.

Visual: card shrinks to the top; "√h" and "gradient" underline. `AlignedAlgebra`: "m = u_x √(2 ÷ g)", "u_x = m √(g ÷ 2) = 1.00 × √(9.8 ÷ 2) = 1.00 × 2.214 = 2.21 m s⁻¹" on "second". On "speed" a chip "u_x = 1.00 m s⁻¹" fades in and is crossed (caption "gradient unit: m^½"). Hold about 1 second.

### 16. handoff
> So far, every force has changed how something moves along a path. Next, forces that make things turn. Here's a spanner on a stuck nut. Push on the end of the handle with the same force, in three different directions. One turns the nut best, and one does nothing at all. **Why**?

Visual: board clears (camera change) to a new stage: the nut-and-plate plate (`y12p-nut-plate-v1.png`, new, specified in v09) at the left, the spanner plate (`y12p-spanner-v1.png`, new, specified in v09) gripping the nut with its handle pointing right, top view. On "same force" an amber force arrow "80 N" appears at the handle end, perpendicular to the handle; on "three different directions" two more amber arrows of the same length fade in at the same point (one at 30° to the handle, one pointing along the handle towards the nut), each with a small "?" curved arrow over the nut. On "Why" a chip writes "Next: why does a force turn an object more effectively at some angles?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 17. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Model (horizontal launch, no air resistance, constant g): t = √(2h ÷ g), R = u_x √(2h ÷ g), so R ∝ √h. Four times the height, twice the range.
2. Fair test: change h, measure R, control u_x (same ball, same release point, not pushed; exit horizontal). h: bench to the bottom of the ball at the exit. R: from directly below the exit (plumb line) to the centre of the first-contact mark (carbon paper). At least 5 heights, 3 trials each.
3. Report mean ± half the spread. Plot R against √h: a straight line through the origin, gradient m = u_x √(2 ÷ g), so u_x = m √(g ÷ 2). Test it against u_x measured independently (light gate).
4. Random spread: reduced in the mean by repeats. Systematic shift: not removed by repeats; find its cause. A straight line through the origin does not rule out a proportional systematic error; agreement holds only over the tested range.

Memory aid (large, on the notes screen): *Repeats tame the spread, not the shift.*

## Teaching checks

- **Does it explain causes?** Why four times the height gives twice the range: the fall time grows with √h because the drop grows with t² (2). Why u_x must be controlled: R depends on u_x as well as h (3). Why measure to the bottom of the ball: that is the distance it falls before the mark is made (4). Why repeats scatter: small random differences in release and spin (6). Why plot √h: the model then predicts a straight line, which is easy to judge and has a meaningful gradient (7, 8). Why averaging cannot fix a shortfall: a systematic cause shifts every trial the same way (9). Why a straight line is not proof: a proportional error keeps it straight (10).
- **Misconceptions addressed:** doubling height doubles range (1, 2); more trials make a result accurate (6, crossed in 13); a straight line proves the model (10); the gradient is the speed (crossed in 15); any discrepancy is "human error" (9: name causes to investigate).
- **One idea at a time:** prediction (2) before method (3 to 5); one height's repeats (6) before the full graph (7); the gradient's meaning (8) before disagreement (9) and limits (10).
- **Video makes it easier:** the ramp sliding up the stand and the range doubling (1, 2); the mark appearing under the carbon paper (4); marks building a band while the mean steadies (6); dots sliding into a straight line as the axis changes to √h (7); a 3% shifted data set that still looks perfect (10).
- **Response opportunity:** one prediction (3 s countdown) and two unseen HSC-style tasks with every condition visible (the three values and the uncertainty rule; the axes, gradient with unit, model and g), 10 s each with the invitation to pause; nothing answer-bearing. One crossed mistake each; feedback about 31 s and 21 s.
- **Avoided double teaching:** the horizontal-launch analysis (v01) is recalled in a sentence; Year 11 working-scientifically terms are defined in a phrase, not taught.
- **Syllabus coverage:** `P5-IQ1-03`: planning and analysing a practical investigation that collects primary data to validate R = u_x √(2h ÷ g). The video does not replace the practical itself.
- **Out of scope by design:** percentage-difference thresholds, standard errors, residuals, confidence intervals, the time-of-flight second test, air-resistance modelling (site Q3 extension).

## Practice questions and model answers

**Attempt 1 (scene 12; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "In a horizontal-launch investigation, three repeated measurements of range from the same launch height are 0.70 m, 0.72 m and 0.74 m. (a) Calculate the mean range and its uncertainty, taking the uncertainty as half the range of the measurements. (b) Explain whether repeating the trials shows that the mean range is accurate."
Model answer: (a) Mean = (0.70 + 0.72 + 0.74) ÷ 3 = 0.72 m; uncertainty = (0.74 − 0.70) ÷ 2 = 0.02 m; R = 0.72 ± 0.02 m. (b) No. The small spread shows the measurements are precise (repeatable). Accuracy is closeness to the true value: a systematic error, such as an exit tilted slightly downward or a mis-measured height, would shift all three results by the same amount and would not appear in the spread. Classic mistake (crossed): "more repeats make the result accurate".

**Attempt 2 (scene 14; original wording, HSC style, 2 marks).** "In a horizontal-launch investigation, range R (m) is plotted against the square root of the drop height, √h (m^½). The gradient of the line of best fit is 1.00 m^½. The model is R = u_x √(2h ÷ g), with g = 9.8 m s⁻². Calculate the horizontal launch speed u_x."
Model answer: R = u_x √(2 ÷ g) × √h, so the gradient m = u_x √(2 ÷ g). Therefore u_x = m √(g ÷ 2) = 1.00 × √4.9 = 2.21 m s⁻¹. Classic mistake (crossed): giving 1.00 m s⁻¹ (the gradient has unit m^½, not m s⁻¹).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hook (site sample) | h = 0.10 m, R = 0.32 m; h = 0.40 m, R = 0.64 m (× 2) | 1, 2 |
| Fall times | √(2 × 0.10 ÷ 9.8) = 0.1429 s; √(2 × 0.40 ÷ 9.8) = 0.2857 s (× 2) | 2 |
| Illustrative repeats (new) | 0.53, 0.55, 0.57 m at h = 0.30 m; mean 0.55 m; ± 0.02 m | 6 |
| Rule reading | 1 mm divisions, ± 0.5 mm | 6 |
| Sample data (site) | h 0.10, 0.20, 0.30, 0.40, 0.50 m; √h 0.3162, 0.4472, 0.5477, 0.6325, 0.7071 m^½; R 0.32, 0.45, 0.55, 0.64, 0.71 m | 7, 8 |
| Best fit (free) | m = 1.0030 m^½ (≈ 1.00, "about one point zero"); intercept 0.0023 m | 8 |
| Best fit (origin, not shown) | m = 1.0070 m^½; u_x = 2.2291 m s⁻¹ | author note b |
| Launch speed | u_x = 1.0030 × √4.9 = 2.2203 m s⁻¹ ≈ 2.2 | 8 |
| Site "Analyse" case | spread 6 cm (± 3 cm); shortfall 4 cm | 9 |
| Proportional error | every R × 0.97; gradient 1.0030 × 0.97 = 0.973 ≈ 0.97 | 10 |
| Ball radius (site note 1) | r = 8 mm, h = 0.10 m: √(0.092 ÷ 0.100) = 0.9592 (about 4% short) | Decisions |
| A1 | mean 0.72 m; ± 0.02 m | 12, 13 |
| A2 | u_x = 1.00 × √(9.8 ÷ 2) = 1.00 × 2.2136 = 2.21 m s⁻¹ | 14, 15 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov); Codex to re-check.

- √(2 × 0.10 ÷ 9.8) = 0.142857 s; √(2 × 0.40 ÷ 9.8) = 0.285714 s; ratio 2; √4 = 2; √2 = 1.414214.
- √h: 0.316228, 0.447214, 0.547723, 0.632456, 0.707107. R ÷ √h: 1.0119, 1.0062, 1.0042, 1.0119, 1.0041.
- Free least squares on (√h, R): gradient 1.003018, intercept 0.002255 m; through the origin: Σ(√h R) ÷ Σh = 1.007003.
- u_x = 1.003018 × √4.9 = 2.220274 m s⁻¹; 1.007003 × √4.9 = 2.229095 m s⁻¹; √4.9 = 2.213594.
- Repeats: (0.53 + 0.55 + 0.57) ÷ 3 = 0.55; (0.57 − 0.53) ÷ 2 = 0.02. A1: 0.72; 0.02.
- A2: 1.00 × 2.213594 = 2.213594 m s⁻¹ ≈ 2.21.
- Site checks: quick check |1.02 − 0.95| ÷ 0.95 = 7.37%; time-of-flight table √(2h ÷ 9.8) for 0.20, 0.40, 0.60 m: 0.2020, 0.2857, 0.3499 s.
- Stage geometry (author note c): 1,000 px per metre; R = 0.32 m → 320 px; 0.64 m → 640 px; h 0.10 → 100 px, 0.40 → 400 px.

## Memory aid check

- **"Repeats tame the spread, not the shift."** Meaning, as said in scenes 6, 9 and 11: repeating trials and averaging reduces the effect of random scatter on the mean (the mean becomes more reliable), but a systematic error shifts every trial the same way, so no amount of averaging removes it. Assumptions checked: the repeats must be independent and the random scatter unbiased for the mean to settle on the true value (correction-file precision note); "tame" is deliberately not "remove": individual trials scatter just as much (said in scene 6). It helps a new case: A1 (b) and any "evaluate reliability and accuracy" question. Introduced after both effects have been shown (6, 9).
- **Considered, not used:** "Precision is repeatable, accuracy is right" (true but abstract); "Straight is not proof" (a good line for scene 10, kept as screen text only).

## Narration length estimate

Revision 1 count (6 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **6,392 characters**, 17 scenes. Characters per scene (1 to 17): 409, 446, 452, 438, 276, 589, 419, 545, 558, 453, 109, 330, 449, 274, 280, 274, 75. At 13.3 characters per second the speech is about 481 s; add about 3 s for the prediction countdown, about 3 s for ball flights and the graph morph settling, 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 55 s more of the quiet notes hold (about 87 s of holds and countdowns): **about 568 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 5's last sentence; scene 4's last sentence (keep the table header); scene 9's "Each one is a lead" sentence.

## Opening frame

v07's final frame (designed in this wave, `phys-y12-m5-v07.md`): paper background; coded bench top; the retort stand and boss holding the launch ramp with its horizontal exit above the bench; the steel ball just beyond the exit at the start of a faint strobe path to the bench; the white sheet on the bench with a dashed orange "predicted" tick and an empty ink tick "measured: ?"; a teal bracket "R" from a grey plumb mark below the exit; heading "Why can two launch angles reach the same target?" and the chip "Next: how can primary measurements test the horizontal-launch model?". Scene 1 keeps the stage, removes the chip and ticks, and adds the h and R brackets.

## Final frame

The last explained frame (end of scene 16, before the key-notes board): paper background; top view; the nut-and-plate plate at the left, the spanner plate gripping the nut with its handle pointing right (handle end 0.25 m from the nut centre, scale 1,600 px per metre in v09, so 400 px); three amber force arrows of equal length (80 N) from the handle end: one perpendicular to the handle (pointing up the frame), one at 30° to the handle direction, one along the handle pointing towards the nut; a small "?" curved arrow over the nut; heading unchanged ("How can primary measurements test the horizontal-launch model?"); a chip below reads "Next: why does a force turn an object more effectively at some angles?". v09 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m5-v08` (route phys-y12-m5-v08). Suggested explainer folder `src/explainer/lessons/phys-y12-m5-v08` and build folder `docs/production/claude-pm/lessons/p-y12-m5-v08` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 17 scene headings, all `### N.`): hook, prediction, fair-test, measuring, risk-check, repeats, linearise, gradient-test, spread-or-shift, straight-not-proof, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Scene 1 is `explain` with a 3 s prediction countdown. `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: ramp launch stage, landing marks with spread band and mean tick, graph morph (`DataGraph`), proportional-error overlay, two-column ledger (kit gap 2), `AlignedAlgebra`, `NumberTicker`, `ScribbleCircle`, `PenArrow`, `Countdown`, `CameraStage`. Transitions (`pickTransition`): 1 to 2 to 3 to 4 to 5 camera continue (same bench); 5 to 6 camera push to the paper strip; 6 to 7 camera change to the graph; 7 to 8 camera continue; 8 to 9 camera change to a strip; 9 to 10 camera change back to the graph; 10 to 11 clear change; attempts and feedback card shrink to the top; 15 to 16 clear change to the spanner stage; 16 to 17 fade to the notes board.

Holds: hook (3 s countdown), memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 60 s). Review evidence paths: `learning_review` = `checks/p-y12-m5-v08-learning-review.md`, `science_check` = `checks/p-y12-m5-v08-physics-check.md`.

## Assets

Have (inspected 6 Nov on session contact sheets; scaled uniformly only, never stretched):
- `public/assets/physics/phys-y11-retort-stand-v1.png` (600 × 2400, RGBA) and `phys-y11-boss-crossbar-v1.png` (800 × 800, RGBA): scenes 1 to 5, 8.
- `phys-y11-steel-ball-v1.png` (800 × 800, RGBA): scenes 1 to 8.
- `phys-y11-paper-sheet-flat-v1.png` (2172 × 724, RGBA): the white sheet, scenes 1 to 6.
- `phys-y11-metre-rule-v1.png` (2172 × 724, RGBA): scene 4 (context; exact ticks coded).
- `phys-y11-sand-tray-v1.png` (1600 × 800, RGBA): the catch tray, scene 5.
- `phys-y11-light-gate-v1.png` (1000 × 1400, RGBA): scene 8.
- **Checked, not used:** `phys-y11-ramp-plank-v1.png` and `phys-y11-ramp-hinge-block-v1.png` (a straight plank cannot give a horizontal exit); `phys-y11-spring-launcher-whole-v1.png` (the site method uses a ramp; the launcher is named only in the safety line); `phys-y11-phone-tripod-v1.png` (slow-motion video is an alternative the site lists; not needed); `phys-y11-digital-timer-v1.png` (stopwatch timing not used).

Need (new plates, Codex), in priority order:
1. `y12p-launch-ramp-v1.png`: scenes 1 to 10 and v07 scene 14. Essential (no existing plate has a curved track ending in a horizontal exit).
2. `y12p-carbon-paper-v1.png`: scene 4. Useful (shows how first contact is recorded).
3. `y12p-plumb-bob-v1.png`: scene 4. Useful.
4. `y12p-spirit-level-v1.png`: scene 3. Useful.

Coded: bench top, release gate and marker, strobe dots, string of the plumb line, height and range brackets, landing marks, spread band, mean tick, table, graph, best-fit lines, gradient triangle, error overlay, ledger, clocks, calculation strips, crossed chips, attempt cards, countdowns, key notes board.

Kit gaps (for the v08 build brief):
1. **Ramp launch stage.** Plates placed at registered points (exit lip, boss clamp line, ball seat at the release gate); a coded release gate; the ball's roll along the track (a path following the track centreline, timing illustrative) and a horizontal launch from the exit at a set u_x and h, drawn from the v01 model; h bracket to the ball's bottom, plumb line, R bracket; the ramp and boss slide along the stand to set h.
2. **Landing marks.** Marks at given positions appearing in turn, a spread band, a mean tick and a readout "mean ± half-range".
3. **Graph morph.** `DataGraph` with x-axis relabel and animated x-transform (h to √h), free least-squares line with gradient triangle and intercept readout, and a scaled copy of the data set as an overlay.

## Codex asset brief (Year 12 Physics M5 v08: launch ramp, carbon paper, plumb bob, spirit level)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/phys-y12-m5-v08.md`, route entry phys-y12-m5-v08. Paint after the learning review, physics check and Codex error check pass and the owner gives the go-ahead. Save to `public/assets/physics/`. Every plate: transparent PNG with a true alpha channel and **clean edges with no coloured fringe or halo** (check on a black and a white background), ink and watercolour in the house style, matched to `phys-y11-retort-stand-v1.png`, `phys-y11-boss-crossbar-v1.png` and `phys-y11-steel-ball-v1.png` in line weight, palette and finish, at least 8 per cent clear margin, no text, labels, letters, numbers, scale bars, brand names, logos, people, hands, faces, backdrop, glow or ground shadow. Never stretch to fit; keep the native aspect ratio.

1. `y12p-launch-ramp-v1.png` (2000 × 1000 px): a school projectile launch ramp seen exactly side-on: a curved aluminium channel track that starts steep at the upper left and curves smoothly into a short, straight, horizontal exit section at the lower right, ending in a clean square lip. A short flat clamping rod or tab projects from the back of the track near its middle (where the boss will hold it). No ball, no release gate (coded), no stand (separate plate). Codex reports, in plate pixels: the exit lip point, the track centreline at the top seat for a ball of 40 px diameter at the plate's display width of 600 px, and the clamping tab centre.
2. `y12p-carbon-paper-v1.png` (2172 × 724 px, same canvas proportions as `phys-y11-paper-sheet-flat-v1.png`): a sheet of dark blue-black carbon paper lying flat, seen at the same low angle as the white sheet plate, so it overlays it exactly, with one near corner slightly lifted. No marks on it.
3. `y12p-plumb-bob-v1.png` (600 × 1000 px): a small brass plumb bob hanging point-down, seen side-on, with a short stub of string at the top only (the rest of the string is coded). Codex reports the string attachment point and the tip.
4. `y12p-spirit-level-v1.png` (1600 × 400 px): a short aluminium spirit level seen side-on, with one bubble vial in the centre, the bubble centred. Codex reports the vial centre.

Report inspection on the paper background and the dark board background at about 400 px wide, and confirm the carbon sheet overlays the white sheet. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/phys-y12-m5-v08-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the physics and method claims: t = √(2h ÷ g) and R = u_x √(2h ÷ g) for a horizontal launch; four times the height gives twice the range; the controlled variable; h to the bottom of the ball (author note a); half-range as a simple spread estimate; the gradient u_x √(2 ÷ g) with unit m^½; u_x = m √(g ÷ 2); the 6 cm spread gives ± 3 cm; averaging does not remove a systematic shift; a proportional error keeps a straight line through the origin.
3. Confirm every data set is labelled as on screen: illustrative values (scene 6), sample data for processing practice (scenes 7, 8), "imagine" (scene 9); nothing is called primary data or a measurement.
4. Confirm the memory aid's assumptions (see "Memory aid check").
5. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
6. Confirm both attempt cards are original in wording, carry every condition and show nothing answer-bearing.
7. Confirm the syllabus quote matches the route JSON exactly and is labelled 2017.
8. Confirm no person, hand, face or body outline is drawn or requested (release by a coded gate; "a student" text only).
9. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
10. Confirm the narration character count and per-scene counts by script with the build parser rules.
11. Report site notes 1 and 2 under Decisions to root.

## YouTube metadata (draft)

Title: Testing the Projectile Model with Your Own Data | HSC Physics Module 5

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module5/lesson05.sa.html

Raise a horizontal launch four times higher and the model says the ball lands only twice as far. How do you test that with your own measurements? Plan a fair test, measure height and range properly, handle repeats and uncertainty, straighten the graph by plotting range against the square root of height, and use the gradient to predict the launch speed. Then see the difference between random spread and a systematic shift, and why a perfect straight line still doesn't prove there's no systematic error. Two exam-style questions at the end. This video explains the practical; it doesn't replace doing it.

Year 12 Physics (2017 syllabus), Module 5: Advanced Mechanics.
Syllabus content (NSW Physics Stage 6, 2017):
"conduct a practical investigation to collect primary data in order to validate the relationships derived above."
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: why two launch angles can reach the same target. Next: torque, and why a force turns things more effectively at some angles.

#HSCPhysics #Physics #ProjectileMotion #PracticalInvestigation #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v01 and Year 11 working scientifically; check that the three data labels are clear; that the √h graph morph makes linearising obvious; that scene 10's proportional-error idea lands; that the attempt cards give nothing away), then the physics check and the Codex error check.
- The ramp sliding, the landing marks, the graph morph and the shifted data set carry the explanation; judge them at playback speed in the voiced preview.
