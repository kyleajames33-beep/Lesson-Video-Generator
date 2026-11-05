# Year 12 Physics M5 V16: Testing F = mv²/r. How can measurements test the circular-force relationship? (design)

Status: Revision 1 (6 Nov 2026): first design. Needs independent learning review and science check before voicing.

Narration 6,213 characters, 17 scenes, about 557 s, counted by script with the build parser rules (see "Narration length estimate"). Opens on v15's final frame.

Scope: sixteenth video of Year 12 Physics (Physics Stage 6, 2017 syllabus), Module 5 (Advanced Mechanics), sixth and last video on circular motion, inquiry question "Why do objects move in circles?". Templates: `phys-y12-m5-v01.md`, `phys-y12-m5-v08.md` (this run's practical video: measurement, repeats, uncertainty) and `phys-y12-m5-v10.md`, `phys-y11-fa1-v01.md`, `math-a12-d10.md` (calculation layout), `bio-y11-fa1-v05.md` (plates and asset brief format). No starter pack exists; the pack work is done here. Site lesson read in full (6 Nov, read-only; the same lesson as v11): card 3 "Centripetal Force" (route `derive-radial-force`), the investigation card "Investigate the force relationships and work" (three fair-test plots, gradients m/r, v²/r and mv², and its evaluation note that simulator agreement is not independent validation), "Apply, diagnose and consolidate" (Activities 1 and 2), the "Explain 6 marks" answer on the dependences, and short-answer Q2: `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson07.sa.html`, SHA256 `01b9c74b147e84c698ec636ed0c4fd27298992fa401503a2ae5ba49930a8501e` (recomputed 6 Nov; matches the route). Route entry: `phys-y12-m5-v16` in `../../programme/phys-y12-route-inputs.json`, sections `l07-force-title`, `l07-apply-title`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Identify controlled radius/mass, measured period and inferred speed; compare force with speed squared and discuss uncertainty. Do not substitute a model animation for investigation." Next: "phys-y12-m5-v17: How does gravity vary with mass and distance from a spherical body?"

Owner rules applied: 2017 syllabus only, quoted exactly; one main learner question; no people, hands, faces or body outlines (the whirling-bung practical is normally hand-held; here the tube is held in a clamp on a stand, and the narration says the tube must be moved in a small circle in practice without drawing who does it; timing, weighing and measuring are shown as instruments only; safety glasses are a plate on the bench, not on a face); real objects are painted plates (stand, boss, tube-and-clamp, rubber bung, string marker, mass hanger and slotted masses, stopwatch, top-pan balance, metre rule, safety glasses, Earth, Moon), and the string, circle, arrows, data table, graph, error bars, line and all working are coded; plates never stretched; one reasoning stage at a time; calculation layout with task strip, equation strip and grouped givens; every number recalculated in Python; g = 9.8 m s⁻²; syllabus symbols (F_c = mv²/r, v = 2πr/T); the data are labelled "illustrative values, not real measurements" on screen and in narration; in-teaching prediction with a 3 s countdown; "Pause here to answer." then a 10 s countdown with the full worded question on screen; brief feedback with one crossed-out mistake; original HSC-style questions; optional key-notes hold; Australian spelling; no em dashes.

Syllabus content (Physics Stage 6 (2017), Module 5 Advanced Mechanics; ledger id `P5-IQ2-01`, a depth study or practical action), quoted from the route JSON `syllabusActions`:

- `P5-IQ2-01`: "conduct investigations to explain and evaluate, for objects executing uniform circular motion, the relationships that exist between:" "centripetal force", "mass", "speed", "radius"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 53)

**Boundary:** starts on v15's final frame (the whirling-bung apparatus with "F = mv²/r ?"). Teaches: how the apparatus sets the inward force (hanging weight Mg = tension = inward force on the bung) and holds the radius (the marker); independent, dependent and controlled variables; measuring the period by timing 20 revolutions and averaging three repeats, then inferring v = 2πr/T; why F is plotted against v² (a straight line through the origin, gradient m/r); one row of illustrative data worked in full; the graph, its gradient and the inferred bung mass compared with a balance reading; uncertainty from timing and radius, doubled by squaring; random versus systematic errors (repeats help one, not the other), with friction at the tube and marker drift as systematic errors; safety; how the same apparatus tests the radius and mass relationships. Viewing does not complete the practical (route: "viewing does not complete required practical hours"). Stops before gravity (v17).

## Decisions

- **Learner question (route wording kept).** "How can measurements test the circular-force relationship?" The answer, built in order: the apparatus lets us set F and hold r and m (2, 3); time gives T and so v (4); the relationship predicts a straight line of F against v² through the origin with gradient m/r (5); the data are checked against that prediction, including its gradient (6, 7), within their uncertainty (8), with the systematic errors that repeats cannot fix (9).
- **Apparatus (the standard school whirling-bung investigation; the site's investigation card uses a simulator).** The route says "do not substitute a model animation for investigation", so the video shows the real apparatus, a real procedure and a data table, and keeps the site's own warning that model data only check internal consistency (scene 6 labels the data illustrative). The site's three fair tests (vary v; vary m; vary r) are kept: the main test is F against v² with m and r controlled (5 to 8); the other two are described in scene 10.
- **No hands (owner rule; open decision 1).** The tube is held in a clamp on a retort stand. Scene 2 says once, "In practice, the tube has to be moved in a tiny circle to keep the bung going. Here it's drawn fixed, so we can see the forces clearly." The bung is shown going round at a steady rate. Instruments appear as plates on the bench (stopwatch, balance, metre rule, safety glasses).
- **Radius measured along the string (author note a).** r is measured from the top of the tube to the centre of the bung, along the string. With that choice, Mg = m(2π/T)²r holds whatever the string's small droop, so the narration need not claim the string is horizontal.
- **Illustrative dataset (new; labelled).** Bung 25 g (0.025 kg), r = 0.80 m, hanging masses 50, 100, 150, 200 g, mean 20-revolution times 25.8, 18.2, 14.9 and 12.9 s (each about 1 to 2 per cent longer than the ideal model). Best line through the origin: gradient 0.0323 kg m⁻¹ against the predicted 0.0313 kg m⁻¹; inferred bung mass 0.0258 kg against the balance's 0.025 kg (3 per cent more). The video says "illustrative values, set up to look like a real class experiment". Root may replace them with real class data (open decision 2).
- **Uncertainty (route "discuss uncertainty"; v08's practice).** Timing ±0.2 s (reaction time) over 12.9 to 25.8 s (0.8 to 1.6 per cent); radius ±0.01 m over 0.80 m (1.25 per cent); v = 2πr/T carries both (about 2 to 3 per cent); v² doubles it (about 4 to 6 per cent). Error bars on v² are drawn from these values. No confidence level is claimed.
- **Random versus systematic (site-corrections authoring note: "independent repeats reduce uncertainty of the mean, while individual scatter and bias require separate controls").** Scene 9 says exactly that, with two systematic errors specific to this apparatus (friction at the tube; marker drift).
- **Safety (practical).** One sentence: safety glasses, because a bung can fly off. The glasses are a plate on the bench.
- **Hook (route "compare force with speed squared").** "Four times the hanging mass, same radius: how many times faster?" Chips 4, 2 and 16 times. Answered from the prediction (5) and confirmed by the data (6: 3.90 to 7.79 m s⁻¹, exactly 2.00 times).
- **Mistake and memory aid (scene 11).** Plotting F against v gives a curve, which can be misread as failure. "Square the speed to straighten the line." See "Memory aid check".
- **Attempts (HSC style, original).** A1: r = 0.50 m, 20 g bung, 100 g hanging, 20 revolutions in 14.0 s: v = 4.49 m s⁻¹, mv²/r = 0.81 N against Mg = 0.98 N; one reason (friction at the tube; radius not held). A2: gradient 0.050 kg m⁻¹ at r = 0.40 m: bung mass 0.020 kg. Crossed: A1 "T = 14.0 s"; A2 "m = 0.050 kg".
- **Colour key (v11 to v15).** Forces amber; velocity teal; data points navy with grey error bars; prediction line orange dashed; best line navy; givens navy; crossed chips red.
- **Handoff (route next).** Scene 16 moves from the bung's string to the Moon's orbit: gravity as the inward force, and the question of how it depends on mass and distance (v17: "How does gravity vary with mass and distance from a spherical body?"). See "Final frame" (written for the v17 designer).
- **Site sources used:** card 3 ("By Newton's Second Law, the inward acceleration requires an inward radial net force", 2); the investigation card's three fair tests, gradients and evaluation note (3, 5, 6, 10); the "Explain 6 marks" dependences (5, 10); short-answer Q2's squared-speed comparison (1, 5). Not used: the simulator itself (route stop); Activities 1 and 2 (v11, v12).
- **Site notes (site lesson 7, read 6 Nov):** none new (see v11). The investigation card is a simulator; its own evaluation sentence ("agreement checks internal mathematical consistency; it is not independent experimental validation") is correct and is followed here.
- **Cause chain taught, in order:** (1) the hanging masses are still, so the tension equals Mg, and the tension is the bung's inward force (2); (2) the marker staying put holds r (2); (3) change F, measure T, hold r and m (3); (4) timing many revolutions shrinks the effect of reaction time on T; v = 2πr/T (4); (5) F = mv²/r with m and r fixed makes F proportional to v², a straight line through the origin with gradient m/r (5); (6) the data's line and gradient test the prediction (6, 7); (7) squaring doubles percentage uncertainty (8); (8) repeats reduce random error in the mean, not systematic error (9).
- **Entry knowledge (route `entryKnowledge`, v11 to v15):** F = mv²/r, v = 2πr/T and the dependences (v11); tension as the inward force on a string (v13); the bung apparatus (v15 handoff); Year 11 measurement skills: independent, dependent and controlled variables, mean, random and systematic error, percentage uncertainty, gradient of a straight-line graph (recalled in a phrase each).
- **Learner-visible vocabulary (plain meaning at first use):** independent variable (the one we change, 3); dependent variable (the one we measure, 3); controlled variables (the ones we keep the same, 3); random error (unpredictable scatter, such as reaction time, 9); systematic error (an error that pushes every reading the same way, 9); gradient (rise over run of the line, 5, recalled).
- **Legacy logic ported:** none. The coded measurement families from v08 (`m5-repeat-measurements`, `m5-slope-intervals` in `practical-details`) are adapted: a data table that fills row by row, a graph with error bars, a best line and a prediction line (kit gaps).
- **New explainer motion:** **whirling-bung stage** (plates registered: stand, boss, tube-and-clamp, string from the tube's top to the bung going round a dashed horizontal circle in perspective, string down through the tube, marker, hanger; the hanging stack can change between 50 and 200 g with the bung's speed updating from the model; a lap counter and a stopwatch readout); **data table** (fills row by row, one row worked in full); **F against v² graph** (adapted `m5-slope-intervals`: points, horizontal error bars on v², the orange dashed prediction line of gradient m/r, the navy best line through the origin, a gradient readout); **F against v ghost graph** (curve, for scene 11); **Earth and Moon** for the handoff; `AlignedAlgebra`; `NumberTicker`; `Countdown` (3 s in scene 1; 10 s in scenes 12 and 14); `QuestionCard`; `Chip` with `cross`; `PenArrow`; `ScribbleCircle`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the apparatus on the left (bench line above the bottom 12% of the frame, the hanger above it); the table, graph or working on the right. In scenes 6 to 8 the graph takes the right two-thirds.
- **No human figures.** No hands on the tube, stopwatch or masses; the safety glasses lie folded on the bench.
- **Author notes (not learner copy):**
  (a) String droop: if the string from the tube to the bung makes a small angle α below horizontal and r is measured along the string (length L), then the bung's circle has radius L cos α, T_string cos α = m ω² L cos α, so T_string = m ω² L = m(2π/T)²L. Measuring r along the string and using v = 2πr/T therefore gives exactly F = mv²/r with F = T_string = Mg (friction at the tube ignored). The vertical part T_string sin α = mg sets α. Not narrated.
  (b) In practice the tube is moved in a small circle to supply the small tangential force that replaces energy lost to air resistance. The design draws it clamped (owner rule); open decision 1.
  (c) Friction at the tube: the string rubs at the tube's top edge; the force reaching the bung can then differ from Mg (in either direction, depending on whether the hanger is drifting up or down). With the marker steady the effect is smallest. A1's model answer accepts friction or radius drift.
  (d) Dataset rows (bung m = 0.025 kg, r = 0.80 m, g = 9.8): M = 0.050, 0.100, 0.150, 0.200 kg; F = 0.49, 0.98, 1.47, 1.96 N; ideal 20T = 25.39, 17.95, 14.66, 12.69 s; illustrative 20T = 25.8, 18.2, 14.9, 12.9 s; T = 1.29, 0.910, 0.745, 0.645 s; v = 3.897, 5.524, 6.747, 7.793 m s⁻¹; v² = 15.18, 30.51, 45.52, 60.73 m² s⁻². Least-squares gradient through the origin 0.03226 kg m⁻¹; predicted m/r = 0.03125 kg m⁻¹; m = 0.03226 × 0.80 = 0.02581 kg (3.2 per cent above 0.025).
  (e) Percentage uncertainty in v² per row (2 × (0.2/t₂₀ + 0.01/0.80)): 4.1, 4.7, 5.2, 5.6 per cent. Narrated as "around five percent".
  (f) Moon: sidereal period 27.3 days ("about once a month"); orbit radius about 60 Earth radii, so the final frame is labelled "not to scale".
  (g) Pronunciations: "M g" (capital M for the hanging mass) versus "m" for the bung: on screen "M" and "m" are labelled "hanging mass" and "bung mass" every time both appear; "v squared"; "zero point zero three two kilograms per metre".

- **Open decisions for root:**
  - **1. Clamped tube (root, owner rule).** The real practical is hand-held. The design draws the tube clamped and says once that in practice it is moved in a small circle. Alternatives: a motor-driven whirling rig (a different, less common apparatus), or accept the clamp with the sentence.
  - **2. Real class data (root).** The dataset is illustrative and labelled. If real class data become available (for example from a Codex lab-data brief or a teacher's results), swap them in and recompute every value in "Numbers used".
  - **3. New plates (root, Codex).** `y12p-tube-clamp-v1.png` (essential) and `y12p-moon-v1.png` (handoff; shared with v17 if its designer wants it). Fallback for the Moon: a small grey coded disc (weaker; the owner rule asks for plates).
  - **4. A1's reason (science check).** Friction at the tube or a drifting radius both explain a calculated force below Mg (author note c). Confirm the model answer accepts either.

Main question: *A rubber bung whirls on a string that runs through a tube to hanging masses. How can timing its revolutions, while changing the hanging mass, test whether the inward force really equals mv²/r?*
Entry knowledge: F = mv²/r, v = 2πr/T (v11); tension as the inward force (v13); the apparatus (v15); variables, means, errors, gradients (Year 11).
Stops after: apparatus and variables; period from 20 revolutions; v = 2πr/T; F against v² with gradient m/r; one data row; the graph and inferred mass; uncertainty; random versus systematic; safety; testing r and m. No gravity.
Handoff: v17, how gravity varies with mass and distance from a spherical body.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *F*, *M*, *m*, *g*, *r*, *T*, *v*. Paper background and handwritten headline face as the explainer house style.

### 1. hook (four times the weight)
> Here's that bung apparatus. The bung goes round in a horizontal circle, and the weight of the hanging masses keeps the string tight. Suppose we keep the radius the same, and hang four times as much mass. How many times faster will the bung have to go? Make a **prediction**.

Visual: opens on v15's final frame (see "Opening frame"); the bung keeps going round. On "hanging masses" the hanger glows; on "four times as much mass" the stack grows from one 50 g mass to four (a "× 4" tag). On "How many times faster" three chips: "4 times", "2 times", "16 times". On "prediction" a 3 s `Countdown`; the stack returns to 50 g.

### 2. how the apparatus works
> First, how does it work? The hanging masses sit still, so the string's tension equals their weight, M g. That same tension pulls the bung towards the tube, so it supplies the bung's inward force. So F equals M g, a force we can set just by choosing the **masses**. The paper clip on the string is a marker. If it stays just below the tube, the length of string out to the bung, and so the radius, stays the **same**. In practice, the tube has to be moved in a tiny circle to keep the bung going. Here it's drawn fixed, so we can see the forces clearly.

Visual: on "sit still" the hanger's amber "Mg" arrow and an equal amber "tension" arrow up the string above it; tag "still: tension = Mg (hanging mass M)". On "pulls the bung towards the tube" an amber arrow at the bung along the string towards the tube's top, the same length, tag "inward force on the bung (bung mass m)". On "masses" the line "F = Mg". On "paper clip" the marker glows; on "same" a navy bracket along the string from the tube's top to the bung's centre, "r", and the marker shows a small dashed band "keep it here". On "In practice" a small grey tag by the tube "in practice: moved in a tiny circle".

### 3. the variables
> Let's set up the test. The independent variable, the one we change, is the force, by changing the hanging mass. The dependent variable, the one we measure, is how fast the bung goes. And the controlled variables, the ones we keep the same, are the radius and the bung's **mass**. Then F equals m v squared over r predicts how the speed should respond.

Visual: a three-row chip panel at the right. On "independent variable" "independent: F = Mg (change M)" with the hanger glowing. On "dependent variable" "dependent: speed v (from the period)" with the bung glowing. On "mass" "controlled: r (marker) and m (bung)" with the marker and the bung glowing; a top-pan balance plate (`phys-y11-top-pan-balance-v1.png`, reused) with the bung on it reads "25 g" (coded readout) and a metre rule plate (`phys-y11-metre-rule-v1.png`, reused) lies along the r bracket. On "predicts" the line "F = mv²/r".

### 4. measuring the speed
> We can't read the speed directly, so we measure a time and calculate it. Time twenty revolutions with a stopwatch, and divide by twenty to get the period. Timing twenty, not one, spreads your reaction time over many turns, so the period is much more **precise**. Repeat each run three times, and average. Then the speed is the distance round the circle divided by the period, v equals two pi r over **T**.

Visual: the stopwatch plate (`chemistry/c8-stopwatch-v1.png`, reused) beside the apparatus with a coded readout. On "Time twenty revolutions" a lap counter on the bung counts 1 to 20 (time-lapse) while the stopwatch runs to 18.2 s. On "divide by twenty" "T = t₂₀ ÷ 20". On "precise" a tag "±0.2 s ÷ 20 revolutions = ±0.01 s per period". On "Repeat each run three times" three short readings appear (18.0, 18.3, 18.3 s, illustrative) and average to "18.2 s". On "v equals two pi r over T" the line "v = 2πr/T".

### 5. what to plot
> Now the prediction. If F equals m v squared over r, with m and r fixed, then F is proportional to v squared. So plot F against v squared, not against v. The prediction is a straight line through the origin, with a gradient of m over **r**. That also answers the question from the start. Four times the force means four times v squared, so the bung goes twice as **fast**.

Visual: clear change to empty graph axes at the right: "F (N)" up, "v² (m² s⁻²)" across. On "F is proportional to v squared" the line "F = (m/r) v², so F ∝ v² (m, r fixed)". On "a straight line through the origin" an orange dashed line from the origin; on "m over r" the tag "gradient = m/r = 0.025 ÷ 0.80 = 0.031 kg m⁻¹". On "Four times the force" `AlignedAlgebra` "4F: v² × 4, v × √4 = 2"; on "fast" the "2 times" chip from scene 1 ticks and the other two are crossed.

### 6. one row of results
> Here's a set of results. These are illustrative values, set up to look like a real class experiment. The bung's mass is twenty-five grams, and the radius is eighty centimetres. With a hundred grams hanging, F is zero point one zero zero times nine point eight, which is zero point nine eight newtons. Twenty revolutions took eighteen point two seconds, so T is zero point nine one zero seconds. Then v is two pi times zero point eight zero, over zero point nine one zero, about five point five two metres per second, and v squared is about thirty point **five**.

Visual: the data table (new) at the right with a grey banner "illustrative values, not real measurements". Columns: "M (kg)", "F = Mg (N)", "t₂₀ (s, mean)", "T (s)", "v (m s⁻¹)", "v² (m² s⁻²)". Givens strip: "bung m = 0.025 kg", "r = 0.80 m". On "a hundred grams hanging" the 0.100 kg row lights; on "zero point nine eight newtons" "F = 0.100 × 9.8 = 0.98 N"; on "eighteen point two seconds" "t₂₀ = 18.2 s, T = 18.2 ÷ 20 = 0.910 s"; on "five point five two metres per second" "v = 2π(0.80) ÷ 0.910 = 5.52 m s⁻¹"; on "five" "v² = 30.5 m² s⁻²". The other three rows then fill quickly (no narration): 0.050: 0.49, 25.8, 1.29, 3.90, 15.2; 0.150: 1.47, 14.9, 0.745, 6.75, 45.5; 0.200: 1.96, 12.9, 0.645, 7.79, 60.7.

### 7. the graph
> Do that for each row, and plot the points. They lie close to a straight line through the origin, so the force really is proportional to v squared. The line's gradient is about zero point zero three two kilograms per metre. Gradient times radius should give the bung's mass, and it gives about zero point zero two six kilograms. The balance said zero point zero two five. That's only about three percent **more**.

Visual: the four points drop onto the F against v² graph one by one (navy). On "a straight line through the origin" a navy best line through the origin draws through them, beside the orange dashed prediction line. On "zero point zero three two kilograms per metre" a gradient triangle on the navy line, "gradient = 0.032 kg m⁻¹". On "Gradient times radius" `AlignedAlgebra` "m = gradient × r = 0.0323 × 0.80 = 0.026 kg"; on "more" a chip "balance: 0.025 kg; difference about 3 %". During the last sentence (no cue), the table's v values for the 0.050 kg and 0.200 kg rows, "3.90" and "7.79", are linked by a tag "four times the force: × 2.00".

### 8. how much to trust it
> How much should we trust that? Reaction time adds about a fifth of a second to each timing. Over eighteen seconds, that's about one percent in the period. The radius is uncertain by about a centimetre, which is about one percent too. But v squared squares both, so its uncertainty doubles, to around five **percent**. Each point gets an error bar, and both lines pass through them all. So the data support F equals m v squared over r, within the **uncertainty**.

Visual: on "a fifth of a second" a tag "±0.2 s in 18.2 s ≈ 1.1 %"; on "about a centimetre" "±0.01 m in 0.80 m ≈ 1.3 %"; on "percent" `AlignedAlgebra` "v = 2πr/T: about 2.4 %; v²: 2 × 2.4 ≈ 5 %". On "Each point gets an error bar" grey horizontal error bars grow on each point (4.1 to 5.6 per cent; author note e). On "uncertainty" both lines are seen to pass through every bar; tag "consistent with F = mv²/r".

### 9. repeats and systematic errors
> Repeating runs and averaging reduces the effect of random errors, like reaction time, on the mean. It can't fix a systematic error, one that pushes every reading the same way. Friction where the string rubs on the tube is one. A marker that slowly drifts is another, because then the radius isn't really eighty centimetres. You control those with the method, like a smooth tube and a steady marker, not by repeating. And wear safety glasses, because a bung can fly **off**.

Visual: on "random errors" three repeat readings scatter around their mean (tag "random: repeats help the mean"). On "systematic error" every point on the graph shifts the same way (a ghost set), tag "systematic: repeats don't help". On "rubs on the tube" a small zoom on the tube's top edge with a red mark "friction". On "slowly drifts" the marker slides a little and the r bracket shortens, "r ≠ 0.80 m". On "a smooth tube and a steady marker" two ticks. On "off" the safety glasses plate (`chemistry/m5x-safety-glasses-v1.png`, reused) appears on the bench beside the stand, tag "safety: glasses; clear space".

### 10. testing radius and mass
> The same apparatus can test the other parts of the relationship. Keep the force fixed and change the radius, and v squared should be proportional to r. Keep both fixed and use a heavier bung, and v squared should be inversely proportional to its mass. Each time, change one variable, and keep the others **fixed**.

Visual: two small panels below the graph. On "change the radius" the marker moves, the r bracket lengthens, and a mini graph "v² against r: straight line through the origin (F, m fixed)". On "heavier bung" a second bung stacks on the first, and a mini graph "v² against 1/m: straight line (F, r fixed)". On "fixed" a chip "fair test: one change at a time".

### 11. mistake and memory aid
> A common mistake is plotting F against v. That gives a curve, and it's easy to wrongly decide the formula has failed. Here's a way to remember the fix. Square the speed to straighten the **line**.

Visual: a ghost graph "F against v" with the same four points on a rising curve; on "wrongly decide the formula has failed" a chip "curved, so F = mv²/r is wrong" fades in and is crossed. On "Square the speed to straighten the line" the ghost graph morphs into the F against v² graph with its straight line, and the handwritten line writes large: "Square the speed to straighten the line." Hold about 2 seconds.

### 12. attempt 1 (countdown, 10 seconds)
> Your turn. In a whirling bung experiment, the radius is zero point five zero metres, the bung's mass is twenty grams, and a hundred grams hangs from the string. The bung makes twenty revolutions in fourteen point zero seconds. Calculate the inward force predicted by m v squared over r, compare it with the hanging weight, and suggest one reason for any difference. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "In a whirling-bung investigation, a rubber bung of mass 20 g moves in a horizontal circle of radius 0.50 m. A mass of 100 g hangs from the other end of the string. The bung completes 20 revolutions in 14.0 s. (a) Calculate the centripetal force on the bung predicted by F = mv²/r. (b) Compare your answer with the weight of the hanging mass, and suggest one reason for any difference. (4 marks)" A small coded diagram of the apparatus with "r = 0.50 m", "20 g" and "100 g". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 1 (brief)
> The period is fourteen over twenty, zero point seven zero seconds, so v is two pi times zero point five zero, over zero point seven zero, about four point four nine metres per **second**. Then m v squared over r is about zero point eight one newtons, but the hanging weight is zero point nine eight **newtons**. One reason is friction between the string and the tube, so less than the full weight reaches the **bung**. The classic slip is using fourteen seconds as the period.

Visual: card shrinks to the top; "20 revolutions in 14.0 s", "20 g" and "100 g" underline. On "second" "T = 14.0 ÷ 20 = 0.70 s; v = 2π(0.50) ÷ 0.70 = 4.49 m s⁻¹". On "newtons" "F = 0.020 × 4.49² ÷ 0.50 = 0.81 N; Mg = 0.100 × 9.8 = 0.98 N (about 18 % less)". On "bung" "(b) e.g. friction at the tube; or the radius drifted from 0.50 m". On "using fourteen seconds as the period" a chip "T = 14.0 s" fades in and is crossed (caption "T = time ÷ 20"). Hold about 1 second.

### 14. attempt 2 (countdown, 10 seconds)
> Last one. A student plots F against v squared for a bung whirled at a radius of zero point four zero metres. The graph is a straight line through the origin, with a gradient of zero point zero five zero kilograms per metre. Determine the mass of the bung. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A student investigating F = mv²/r keeps the radius at 0.40 m and plots the centripetal force F (y-axis) against v² (x-axis). The graph is a straight line through the origin with a gradient of 0.050 kg m⁻¹. Determine the mass of the bung. (2 marks)" A small coded sketch: a straight line through the origin, axes "F (N)" and "v² (m² s⁻²)", "gradient = 0.050 kg m⁻¹". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 15. feedback 2 (brief)
> F equals m v squared over r, so the gradient of F against v squared is m over **r**. So m is the gradient times r, zero point zero five zero times zero point four zero, which is zero point zero two zero kilograms, or twenty **grams**. The slip is saying the gradient is the mass itself, zero point zero five zero **kilograms**.

Visual: card shrinks to the top; "radius at 0.40 m" and "gradient of 0.050 kg m⁻¹" underline. On "m over r" "F = (m/r) v², gradient = m/r". On "grams" "m = 0.050 × 0.40 = 0.020 kg = 20 g". On "kilograms" a chip "m = 0.050 kg" fades in and is crossed (caption "gradient = m/r"). Hold about 1 second.

### 16. handoff
> So the bung moves in a circle because the string pulls it inwards, and the measurements back up F equals m v squared over r. Now think about the Moon. It goes round the Earth about once a month, with no string at all. Something must still pull it inwards, and that's gravity. So how does the pull of gravity depend on the masses involved, and on the distance from the Earth's **centre**?

Visual: clear change: the apparatus slides out to the left and shrinks away; the Earth plate (`phys-y11-earth-v1.png`, reused) appears left of centre and the Moon plate (`y12p-moon-v1.png`, new) on a dashed circular orbit around it, moving slowly anticlockwise; a small tag "not to scale". On "no string at all" the Moon's teal velocity arrow along the tangent. On "that's gravity" an amber arrow from the Moon towards the Earth's centre, "F = ?". On "masses involved" tags "M (Earth)" and "m (Moon)". On "centre" the Moon stops at the 3 o'clock position and a navy bracket draws from the Earth's centre to the Moon's centre, "r (centre to centre)"; chip "Next: how does gravity vary with mass and distance from a spherical body?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 17. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Whirling bung: the hanging masses are still, so the string tension = Mg = inward force F on the bung. A marker holds the radius r (measured from the tube's top to the bung's centre).
2. Variables: independent F (change the hanging mass M); dependent the period (time 20 revolutions, ÷ 20, repeat and average), then v = 2πr/T; controlled r and the bung mass m.
3. Plot F against v²: a straight line through the origin supports F = mv²/r; gradient = m/r (so m = gradient × r).
4. Squaring v doubles its percentage uncertainty. Repeats reduce random error in the mean; they do not remove systematic error (friction at the tube, a drifting marker). Wear safety glasses.

Memory aid (large, on the notes screen): *Square the speed to straighten the line.*

## Teaching checks

- **Does it explain causes?** Why F = Mg: the hanging masses are still (2). Why the marker matters: it holds r (2). Why time 20 revolutions: reaction time is spread over many periods (4). Why plot against v²: F = (m/r)v² is linear in v² (5). Why gradient × r gives the bung mass: gradient = m/r (7). Why v² has twice the percentage uncertainty: it is v times v (8). Why repeats don't fix friction at the tube: systematic errors shift every reading the same way (9).
- **Misconceptions addressed:** four times the force means four times the speed (1, 5); a curve on F against v means the formula failed (11, crossed); repeats fix every error (9); the 20-revolution time is the period (crossed in 13); the gradient is the mass (crossed in 15); a model animation is evidence (6: labelled data, and the site's own evaluation note).
- **One idea at a time:** apparatus (2) before variables (3) before measurement (4) before prediction (5) before data (6, 7) before uncertainty (8, 9) before extensions (10).
- **Video makes it easier:** the stack growing and the bung speeding up (1); equal tension arrows at the hanger and the bung (2); the lap counter and stopwatch (4); points dropping onto the line beside the prediction (7); error bars growing (8); the curve straightening when v is squared (11).
- **Response opportunity:** one prediction (3 s countdown) and two unseen HSC-style tasks with every condition visible (bung mass, radius, hanging mass, revolutions and time; radius, axes, through the origin, gradient with unit), 10 s each with the invitation to pause; nothing answer-bearing. One crossed mistake each; feedback about 32 s and 22 s.
- **Avoided double teaching:** F = mv²/r and v = 2πr/T (v11), tension as the inward force (v13) and Year 11 measurement terms are recalled with a short meaning, not re-taught.
- **Syllabus coverage:** `P5-IQ2-01`: an investigation of the relationships between centripetal force, speed, radius and mass is explained (procedure, variables, data processing, graph, uncertainty) and evaluated (gradient against the balance, errors). Viewing does not complete the practical.
- **Out of scope by design:** a full uncertainty budget or confidence intervals; data-logger or light-gate methods; gravity (v17).

## Practice questions and model answers

**Attempt 1 (scene 12; original, HSC style, 4 marks suggested, not an official marking scheme).** "In a whirling-bung investigation, a rubber bung of mass 20 g moves in a horizontal circle of radius 0.50 m. A mass of 100 g hangs from the other end of the string. The bung completes 20 revolutions in 14.0 s. (a) Calculate the centripetal force on the bung predicted by F = mv²/r. (b) Compare your answer with the weight of the hanging mass, and suggest one reason for any difference."
Model answer: (a) T = 14.0 ÷ 20 = 0.70 s; v = 2πr/T = 2π × 0.50 ÷ 0.70 = 4.49 m s⁻¹; F = mv²/r = 0.020 × 4.49² ÷ 0.50 = 0.81 N. (b) The hanging weight is Mg = 0.100 × 9.8 = 0.98 N; the predicted force is about 18 per cent smaller. One reason: friction between the string and the top of the tube, so the tension reaching the bung is less than Mg; or the radius was not held at 0.50 m (the marker drifted). Classic mistake (crossed): "T = 14.0 s".

**Attempt 2 (scene 14; original, HSC style, 2 marks).** "A student investigating F = mv²/r keeps the radius at 0.40 m and plots the centripetal force F (y-axis) against v² (x-axis). The graph is a straight line through the origin with a gradient of 0.050 kg m⁻¹. Determine the mass of the bung."
Model answer: F = (m/r)v², so the gradient = m/r. m = gradient × r = 0.050 × 0.40 = 0.020 kg (20 g). Classic mistake (crossed): "m = 0.050 kg".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Apparatus (illustrative) | bung m = 0.025 kg (25 g); r = 0.80 m; g = 9.8 | 3, 5 to 9 |
| Hanging masses and forces | 0.050, 0.100, 0.150, 0.200 kg; F = 0.49, 0.98, 1.47, 1.96 N | 1, 6, 7 |
| Mean 20-revolution times (illustrative) | 25.8, 18.2, 14.9, 12.9 s (ideal 25.39, 17.95, 14.66, 12.69 s) | 4, 6 |
| Repeats shown (illustrative) | 18.0, 18.3, 18.3 s; mean 18.2 s | 4 |
| Periods | 1.29, 0.910, 0.745, 0.645 s | 6 |
| Speeds | 3.897 (3.90), 5.524 (5.52), 6.747 (6.75), 7.793 (7.79) m s⁻¹; 7.793 ÷ 3.897 = 2.00 | 6, 7 |
| v² | 15.18 (15.2), 30.51 (30.5), 45.52 (45.5), 60.73 (60.7) m² s⁻² | 6, 7 |
| Prediction gradient | m/r = 0.025 ÷ 0.80 = 0.03125 kg m⁻¹ (screen 0.031) | 5, 7 |
| Best gradient through origin | 0.03226 kg m⁻¹ ("about zero point zero three two"); m = 0.03226 × 0.80 = 0.0258 kg ("zero point zero two six"); +3.2 % ("about three percent more") | 7 |
| Uncertainty | ±0.2 s ÷ 20 = ±0.01 s per period; 0.2/18.2 = 1.1 %; 0.01/0.80 = 1.25 %; v about 2.4 %; v² about 4.7 % (rows 4.1 to 5.6 %; "around five percent") | 4, 8 |
| A1 | T = 0.70 s; v = 4.488 m s⁻¹ (4.49); F = 0.020 × 4.488² ÷ 0.50 = 0.806 N (0.81); Mg = 0.98 N; 17.8 % less ("about 18 %") | 12, 13 |
| A2 | m = 0.050 × 0.40 = 0.020 kg | 14, 15 |
| Moon (not shown as numbers) | about once a month (27.3 days) | 16 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov); Codex to re-check.

- F: 0.050 × 9.8 = 0.49; 0.100 × 9.8 = 0.98; 0.150 × 9.8 = 1.47; 0.200 × 9.8 = 1.96.
- Ideal: v² = F r/m = 32F: 15.68, 31.36, 47.04, 62.72; v = 3.960, 5.600, 6.859, 7.920; 20T = 20 × 2π × 0.80/v = 25.39, 17.95, 14.66, 12.69 s.
- Illustrative: T = 1.290, 0.910, 0.745, 0.645; v = 2π × 0.80/T = 3.8966, 5.5237, 6.7470, 7.7930; v² = 15.18, 30.51, 45.52, 60.73.
- Gradient through origin: Σ(Fv²)/Σ(v⁴) = 0.032258; × 0.80 = 0.025806; (0.025806 − 0.025)/0.025 = 3.2 %.
- Uncertainty in v²: 2 × (0.2/t₂₀ + 0.01/0.80): 4.05 %, 4.70 %, 5.18 %, 5.60 %.
- Repeats: (18.0 + 18.3 + 18.3) ÷ 3 = 18.2.
- A1: 14.0 ÷ 20 = 0.70; 2π × 0.50 ÷ 0.70 = 4.48799; 0.020 × 4.48799² ÷ 0.50 = 0.80568; (0.98 − 0.80568)/0.98 = 17.8 %.
- A2: 0.050 × 0.40 = 0.020.

## Memory aid check

- **"Square the speed to straighten the line."** Meaning, as said in scene 11: when F = mv²/r holds with m and r fixed, F against v is a curve (a parabola through the origin), but F against v² is a straight line through the origin; so plot v² to test the relationship. Assumptions checked: m and r are held constant; the relationship being tested is F ∝ v². It does not mean "always square the x variable": for the radius test the straight-line plot is v² against r, and for the mass test v² against 1/m (scene 10). It helps a new case: A2 (gradient of F against v²) and any HSC graph-linearising question. Introduced after the plot is explained (5) and used (7).
- **Considered, not used:** "Linearise before you judge" (true, but abstract); "Twice as fast, four times the pull" (v11's aid, recalled implicitly in scene 5).

## Narration length estimate

Revision 1 count (6 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **6,213 characters**, 17 scenes. Characters per scene (1 to 17): 270, 544, 347, 397, 363, 558, 408, 454, 469, 310, 192, 387, 464, 277, 315, 383, 75. At 13.3 characters per second the speech is about 467 s; add about 3 s for the prediction countdown, about 3 s for the 20-revolution time-lapse in scene 4, about 3 s for the remaining table rows in scene 6, 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 55 s more of the quiet notes hold (about 90 s of holds and countdowns): **about 557 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 10 (keep its last sentence as a screen chip); scene 2's "In practice" sentences (if open decision 1 changes the apparatus); scene 7's balance comparison sentence.

## Opening frame

v15's final frame (designed in this wave, `phys-y12-m5-v15.md`): paper background; a bench line; the retort stand at the left with a boss holding the clamp-and-tube plate, the glass tube upright; a string from the tube's top out to the rubber bung at the right-hand edge of a dashed horizontal circle in perspective; the string down through the tube, a paper-clip marker just below the tube, a mass hanger with three slotted masses hanging still; an amber arrow at the bung along the string towards the tube and an amber "Mg" at the hanger; a chip "F = mv²/r ?"; heading "Does the inward force do work in uniform circular motion?"; chip "Next: how can measurements test the circular-force relationship?". Scene 1 sets the bung going round, reduces the stack to one 50 g mass and clears the "Next" chip; the heading changes in scene 3 (on "mass") to "How can measurements test the circular-force relationship?".

## Final frame

For the v17 designer: the last explained frame (end of scene 16, before the key-notes board). Paper background; no apparatus. The Earth plate (`public/assets/physics/phys-y11-earth-v1.png`, about 300 px across) centred at roughly 38 per cent of the frame width and 50 per cent of its height. A thin dashed grey circle centred on the Earth's centre with a radius of about 420 px (the Moon's orbit, not to scale). The Moon plate (`y12p-moon-v1.png`, about 70 px across) on that circle at the 3 o'clock position (directly to the right of the Earth). From the Moon: a teal velocity arrow pointing up the page along the tangent (no label); an amber arrow pointing left towards the Earth's centre, labelled "F = ?". A navy bracket along the line joining the two centres, labelled "r (centre to centre)", drawn just below that line. Tags "M (Earth)" under the Earth and "m (Moon)" under the Moon. A small grey tag "not to scale" at the bottom right, above the bottom 12% of the frame. Heading top-left: "How can measurements test the circular-force relationship?". A chip below the heading: "Next: how does gravity vary with mass and distance from a spherical body?". The Moon is stationary in this frame (it was moving slowly anticlockwise before it). v17 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m5-v16` (route phys-y12-m5-v16). Suggested explainer folder `src/explainer/lessons/phys-y12-m5-v16` and build folder `docs/production/claude-pm/lessons/p-y12-m5-v16` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 17 scene headings, all `### N.`): hook, apparatus, variables, measuring-speed, what-to-plot, one-row, the-graph, uncertainty, systematic-errors, radius-and-mass, mistake-memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Scene 1 is `explain` with a 3 s prediction countdown. `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: whirling-bung stage, data table, F against v² graph with error bars and two lines, F against v ghost graph, Earth and Moon orbit, `AlignedAlgebra`, `NumberTicker`, `ScribbleCircle`, `PenArrow`, `Countdown`, `CameraStage`. Transitions (`pickTransition`): 1 to 2 to 3 to 4 camera continue (same apparatus); 4 to 5 camera change (apparatus small, graph axes in); 5 to 6 to 7 to 8 to 9 to 10 camera continue; 10 to 11 camera continue (the ghost graph); attempts and feedback card shrink to the top; 15 to 16 clear change; 16 to 17 fade to the notes board.

Holds: hook (3 s countdown), memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 60 s). Review evidence paths: `learning_review` = `checks/p-y12-m5-v16-learning-review.md`, `science_check` = `checks/p-y12-m5-v16-physics-check.md`.

## Assets

Have (inspected 6 Nov on session contact sheets; scaled uniformly only, never stretched):
- `public/assets/physics/phys-y11-retort-stand-v1.png` (600 × 2400), `phys-y11-boss-crossbar-v1.png` (800 × 800), `phys-y11-mass-hanger-v1.png` (600 × 1400), `phys-y11-slotted-masses-v1.png` (1000 × 1000), `phys-y11-top-pan-balance-v1.png` (1400 × 900), `phys-y11-metre-rule-v1.png` (2172 × 724), `phys-y11-earth-v1.png` (1254 × 1254), all RGBA: scenes 1 to 11, 16.
- `public/assets/physics/phys-y11-paper-clip-v1.png` (1247 × 1261, RGBA; v15's Codex check on a possible faint backdrop applies): the marker.
- `public/assets/chemistry/m5x-stopper-v1.png` (2000 × 2000, RGBA; dark grey rubber stopper): the bung. `public/assets/chemistry/c8-stopwatch-v1.png` (1367 × 1800, RGBA): scene 4. `public/assets/chemistry/m5x-safety-glasses-v1.png` (2000 × 2000, RGBA): scene 9.
- **Checked, not used:** `chemistry/m6-burette-clamp-stand-v1.png` (a whole stand with a burette fixed in it; the tube needs its own clamp); `phys-y11-digital-timer-v1.png` (a light-gate timer; a stopwatch is the class method); `phys-y11-phone-tripod-v1.png` (video timing is a valid alternative but adds a second method; reserve); `biology/y11-earth-small-v1.png` (the physics Earth plate matches the run's style).

Need (new plates, Codex), in priority order:
1. `y12p-tube-clamp-v1.png`: scenes 1 to 13 and v15 scene 15. Essential.
2. `y12p-moon-v1.png`: scene 16 and the final frame (v17 may reuse it). Essential for the handoff (open decision 3).

Coded: string, dashed circles, marker band, brackets, force and velocity arrows, chips, lap counter and stopwatch readout, balance readout, data table, graph axes, points, error bars, lines, gradient triangle, mini graphs, calculation strips, crossed chips, attempt cards and their diagrams, countdowns, key notes board.

Kit gaps (for the v16 build brief):
1. **Whirling-bung stage.** The plates registered (stand, boss, tube-and-clamp from Codex's reported points, hanger and stack); a string path from the tube's top to the bung and down through the tube; the bung moving round a dashed horizontal circle in perspective at a speed from the model (v = √(Mg r/m)); the hanging stack able to change; a lap counter.
2. **Data table and graph.** Adapt `m5-repeat-measurements` and `m5-slope-intervals` (`practical-details`): a table that fills row by row; F against v² with horizontal error bars, an orange dashed prediction line (gradient m/r), a navy least-squares line through the origin and a gradient triangle; a ghost F against v curve that morphs into the v² plot.
3. **Earth and Moon orbit.** The Earth plate at the centre of a dashed circle, the Moon plate moving round it slowly, arrows and a centre-to-centre bracket (shared with v17).

## Codex asset brief (Year 12 Physics M5 v16: tube clamp and Moon)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/phys-y12-m5-v16.md`, route entry phys-y12-m5-v16. Paint after the learning review, physics check and Codex error check pass and the owner gives the go-ahead. Save to `public/assets/physics/`. Every plate: transparent PNG with a true alpha channel and **clean edges with no coloured fringe or halo** (check on a black and a white background), ink and watercolour in the house style, matched to `phys-y11-retort-stand-v1.png`, `phys-y11-boss-crossbar-v1.png` and `phys-y11-earth-v1.png` in line weight, palette and finish, at least 8 per cent clear margin, no text, labels, letters, numbers, scale bars, brand names, logos, people, hands, faces, backdrop, glow or ground shadow. Never stretch to fit; keep the native aspect ratio.

1. `y12p-tube-clamp-v1.png` (1200 × 1200 px): a laboratory clamp seen from the side, its straight rod arm horizontal and reaching to the left edge (so the existing boss plate can hold it), its two jaws (cork- or rubber-lined) on the right gripping a short, clear glass tube about 15 cm long, held exactly upright, with smooth, rounded (fire-polished) ends and nothing inside it. No string, bung or masses (these are placed in code). Codex reports, in plate pixels: the clamp rod's left end (where the boss grips it), the centre of the tube's top opening and the centre of its bottom opening.
2. `y12p-moon-v1.png` (1000 × 1000 px): the Moon as a full disc seen face-on, grey watercolour with darker maria and a few crater rims, matched to the Earth plate's style and line weight, no glow, no stars, no shadow beyond the disc. Codex reports the disc's centre and radius in plate pixels.

Report inspection on the paper background and the dark board background at about 400 px wide, confirm that the tube-and-clamp sits naturally in the boss on the retort stand, and confirm the Moon reads beside `phys-y11-earth-v1.png` at a size ratio of about 1 to 4. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/phys-y12-m5-v16-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, table, graph, attempts and key notes against the "Numbers used" table.
2. Confirm the physics of every learner-visible claim: still hanging masses give tension = Mg; that tension is the bung's inward force (friction at the tube ignored; author notes a and c); the marker holds r; timing 20 revolutions reduces the effect of reaction time on T; F against v² is a straight line through the origin with gradient m/r when m and r are fixed; the inferred mass 0.026 kg; squaring doubles percentage uncertainty; repeats reduce random error in the mean but not systematic error; v² ∝ r at fixed F and m, and v² ∝ 1/m at fixed F and r.
3. Confirm the memory aid's assumptions (see "Memory aid check").
4. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
5. Confirm both attempt cards carry every condition (bung mass, radius, hanging mass, number of revolutions and time; radius, axes, through the origin, gradient with unit) and show nothing answer-bearing.
6. Confirm the syllabus quote matches the route JSON exactly and is labelled 2017.
7. Confirm no person, hand, face or body outline is drawn or requested (clamped tube; instruments without hands; glasses on the bench).
8. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
9. Confirm the narration character count and per-scene counts by script with the build parser rules.
10. Confirm the dataset is labelled illustrative on screen and in narration.

## YouTube metadata (draft)

Title: Testing F = mv²/r: The Whirling Bung Practical | HSC Physics Module 5

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module5/lesson07.sa.html

How do we know the centripetal force really is mv²/r? Test it with a rubber bung whirling on a string through a tube, with masses hanging below. Learn how the hanging weight sets the force, how a marker holds the radius, why we time 20 revolutions, and why we plot F against v² rather than v. Work through a set of illustrative results, find the gradient and the bung's mass, and see how uncertainty, repeats and systematic errors affect the conclusion. Two exam-style questions at the end. This video explains the investigation; it does not replace doing it.

Year 12 Physics (2017 syllabus), Module 5: Advanced Mechanics.
Syllabus content (NSW Physics Stage 6, 2017):
"conduct investigations to explain and evaluate, for objects executing uniform circular motion, the relationships that exist between: centripetal force, mass, speed, radius"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: does the inward force do work in uniform circular motion? Next: how gravity varies with mass and distance from a spherical body.

#HSCPhysics #Physics #CircularMotion #Practical #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v15; check that "F = Mg" is understood before the variables, that the illustrative label is noticed, that the graph and error bars are readable on a phone, that the clamped tube does not mislead (open decision 1), and that the attempt cards give nothing away), then the physics check and the Codex error check.
- The equal tension arrows, the points dropping onto the line beside the prediction, the error bars and the curve straightening carry the explanation; judge them at playback speed in the voiced preview.
