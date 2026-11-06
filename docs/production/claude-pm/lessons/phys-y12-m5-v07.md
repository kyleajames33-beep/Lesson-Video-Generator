# Year 12 Physics M5 V07: Two angles, one target. Why can two launch angles reach the same target? (design)

Status: Revision 2 (6 Nov 2026): brief 187 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 5,705 characters, 15 scenes, about 509 s, counted by script with the build parser rules (see "Narration length estimate"). Opens on v06's final frame.

Scope: seventh video of Year 12 Physics (Physics Stage 6, 2017 syllabus), Module 5 (Advanced Mechanics), inquiry question "How can models that are used to explain projectile motion be used to analyse and make predictions?". Templates: `phys-y12-m5-v01.md` (this run's structure and visual system), `phys-y11-fa1-v01.md`, `math-a12-d10.md` (calculation layout). Pre-design pack: `../pre-design/phys-y12/phys-y12-m5-v07.md` (every number recalculated below). Site lessons read in full (6 Nov, read-only): lesson 3 (worked example 1 is the inverse-speed precursor; Activity 1 checked) `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson03.sa.html`, SHA256 `8bd974fedf652636912d936d6c79b00b2642878ead6e43a2e89cd5f70038006a`; lesson 4 (diagnose, formula sprint, error clinic, mixed practice Q1 to Q10, timed block Q11 to Q13, activities, wrap-up, "Apply 6 marks", "Assess 5 marks", short answers and all answers) `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson04.sa.html`, SHA256 `2cc8fc5463630f41a6c4d1c882ea403046539c1666b1b4253a67e1b6eec6afcc` (both recomputed 6 Nov; match the pack and the route). Route entry: `phys-y12-m5-v07` in `../../programme/phys-y12-route-inputs.json`, sections `l03-equal-title` and `l04-timed-title`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Invert the level-ground range equation for 30 m/s and 72 m; check both angles and distinct physical flight times. Use 45 m at 38 degrees for the inverse-speed precursor. Stop before moving targets." Next: "phys-y12-m5-v08: How can primary measurements test the horizontal-launch model?"

Owner rules applied: 2017 syllabus only, quoted exactly; one main learner question; no people, hands, faces or body outlines (the site's long jumper and "a student claims" are not drawn; the launcher is a coded launch point and arrow, as the kit plan decided: "an illustrated cannon adds no explanation"); level ground, target flag, paths, sine graph and component triangles are coded; plates appear in the handoff (shared with v08) and, from Revision 2, as two painted launchers in scenes 1, 2 and 8 (see the Anchor decision); one reasoning stage at a time; task strip, equation strip and grouped givens with units; every number recalculated in Python; g = 9.8 m s⁻²; HSC data sheet symbols; in-teaching prediction with a 3 s countdown; "Pause here to answer." then a 10 s countdown with the full worded question on screen; brief feedback with one crossed-out mistake; original HSC-style questions; optional key-notes hold; Australian spelling; no em dashes; v01 to v06 ideas recalled in a phrase.

Syllabus content (Physics Stage 6 (2017), Module 5 Advanced Mechanics; ledger id `P5-IQ1-02`), quoted from the route JSON `syllabusActions`:

- `P5-IQ1-02`: "apply the modelling of projectile motion to quantitatively derive the relationships between the following variables:" "initial velocity", "launch angle", "maximum height", "time of flight", "final velocity", "launch height", "horizontal range of the projectile (ACSPH099)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 53)

**Boundary:** starts on v06's final frame (target 72 m away on level ground, launcher at 30 m s⁻¹, two dashed paths). Teaches: two paths to one target take different times (shown on one clock); the range equation recalled with its conditions and run backwards for speed (site worked example 1: 45 m at 38°, 21.3 m s⁻¹); run backwards for angle (sin 2θ = Rg ÷ u² = 0.784); the second solution from the symmetry of sine (2θ = 51.6° or 128.4°, θ = 25.8° or 64.2°); complementary angles; the physical cause (complementary launches swap u_x and u_y, range = 2u_x u_y ÷ g is their product); flight times 2.67 s and 5.51 s with R = u_x t checks; the maximum range at 45° (91.8 m) and "two, one or none". Stops before moving targets (route), the derivation of the range equation (v04 owns it), maximum height comparisons beyond the hook's peaks, and launches where heights differ (v05).

## Decisions

- **Learner question (route wording kept).** "Why can two launch angles reach the same target?" is already causal. The answer is built twice, as the route wants: mathematically (sine takes each value twice between 0° and 180°, scene 5) and physically (complementary launches swap the components, and the range depends on their product, scene 6). The physical answer is the one carried by the memory aid.
- **Hook (L04 Q13 case, unchanged numbers).** v06 ends with two dashed paths to a target 72 m away at 30 m s⁻¹, so the hook does not ask how many angles there are; it asks which arrives first if both launch at the same instant (3 s countdown). Scene 2 plays both on one clock in real time: the low path lands at 2.67 s while the high one is still rising past its peak, and lands at 5.51 s. This meets the pack's warning against implying simultaneous arrival.
- **Inverse-speed precursor (site lesson 3 worked example 1, route).** 45 m at 38° → u = √(Rg ÷ sin 2θ) = √(441 ÷ 0.9703) = 21.3 m s⁻¹. One scene, to show the equation runs backwards before solving for an angle.
- **Second angle from the sine graph (L04 Q13 answer (c) and the "Fill the gap" activity).** A coded sine curve from 0° to 180° with a horizontal line at 0.784 makes the two crossings visible; the calculator's inverse sine returns only the first (principal value). The order trap ("180° − 2θ, then halve", not "180° − θ") is in the same scene.
- **Physical cause (L04 Activity 2 and Q13 (c); pack note on distinct flight times).** The two launch triangles are drawn side by side and then overlaid: one is the other reflected in the 45° line, so u_x and u_y swap (27.01 and 13.06 m s⁻¹). Range is horizontal velocity × flight time, and flight time = 2u_y ÷ g, so R = 2u_x u_y ÷ g; swapping the factors leaves the product unchanged. The site's sin 2θ = 2 sin θ cos θ identity is not named; the product form carries the same idea in physical language.
- **Two, one or none (pack misconception "a sine value above 1 signals an unreachable target").** The 45° maximum (91.8 m) is shown on the same stage by sliding the target outwards; the two paths converge to one, then the calculator shows "Error".
- **Mistake (in scene 5, not a separate scene).** "180° − 25.8° = 154.2°" is crossed. A mistake scene was not added: the second classic error (stopping at one angle) is the crossed chip in feedback 1.
- **Memory aid (scene 9, new): "Swap the parts, keep the product."** See "Memory aid check".
- **Attempts (original, HSC style).** A1 (pack candidate 1): 14.0 m s⁻¹, 10.0 m range → 15° and 75°. A2 (pack candidate 2): minimum speed for a 20.0 m level target → 14.0 m s⁻¹ at 45°. Crossed: A1 "θ = 15° only"; A2 "aim at 90° to make sin θ biggest".
- **Significant figures.** Site data (30 m s⁻¹, 72 m) are treated as three significant figures, as the site's answers are; angles to one decimal place (25.8°, 64.2°); times to three significant figures (2.67 s, 5.51 s). A1 and A2 have exact answers (15°, 75°, 14.0 m s⁻¹).
- **Handoff (route next).** Scene 14 changes to a lab bench: a launch ramp clamped to a retort stand standing on a bench, a steel ball leaving the ramp's exit horizontally, a predicted landing mark and an empty "measured" mark on paper on the same bench top (v08: "How can primary measurements test the horizontal-launch model?"). See "Final frame".
- **Site sources used:** lesson 3 worked example 1 (scene 3) and the "To find launch speed from range on level ground, rearrange" box; lesson 4 key term "Complementary angles: two angles that add to 90°. They give the same range on level ground" (scene 5); formula card "Range (level ground only) ... Use: equal launch and landing heights, uniform g, point-particle model and negligible drag only" (scene 3); misconception "The larger the launch angle, the further the projectile goes" (scene 8); timed Q13 (scenes 1 to 7); Activity 2 concept check (scene 6); "Fill the gap" sin(2 × 30°) = sin(120°) idea (scene 5). Not used: Q11 (a long jumper, a person), Q12 (v05's case), Q7 (minimum clearing speed, out of scope), Q8 and Q10 (Band 6 extensions), lesson 3 Activity 1 (28 m s⁻¹, 68 m: checked, kept as a reserve attempt).
- **Site notes (quoted from site lesson 4, read 6 Nov; for root to log in `../site-corrections-phys-y12.md` if accepted):**
  1. Timed Q13 answer (b): "t_{64.2°} = 5.52 s". Correct: 5.51 s (2 × 30 sin 64.186° ÷ 9.8 = 5.5115 s; with the rounded 64.2°, 5.5122 s). The 2.66 s for 25.8° is a truncation of 2.666 s; 2.67 s at three significant figures.
  2. Premature rounding in the mixed and timed answers (same class of error as correction 3): Q4 "h_max = 8.13 m" should be 8.12 m (exact 8.124) and "R = 46.5 m" should be 46.4 m (exact 46.41); Q5 "52.2 m" should be 52.3 m (exact 52.33); Q7 "v = 26.0 m/s" should be 25.9 m s⁻¹ (exact 25.94); Q11 "0.704 s", "6.01 m", "0.607 m" should be 0.703 s, 6.00 m, 0.606 m; Q12 "3.92 s", "37.8 m", "28.6 m/s", "70.3°" should be 3.91 s, 37.7 m, 28.5 m s⁻¹, 70.2° (exact 3.9106 s, 37.706 m, 28.513 m s⁻¹, 70.24°).
  3. Checked and correct: Q1, Q2, Q6, Q8 (15.7 m s⁻¹, 32°), Q9 (3×, 1.73×), Q10 (26.7 m s⁻¹, 55.8°), Q13 (a) angles, error clinic fixes, "Apply 6 marks" (5.98 m s⁻¹, 57°), lesson 3 worked example 1 (21.3 m s⁻¹), lesson 3 Activity 1 (29.1°, 60.9°).
- **Cause chain taught, in order:** (1) two different flights reach one target at different times (2); (2) the level-ground range equation holds under stated conditions and can be rearranged (3, 4); (3) the inverse sine returns one angle, but sine takes each value twice between 0° and 180°, symmetric about 90° (5); (4) the two angles are complementary because their components are swapped (6); (5) range is u_x times a flight time set by u_y, so swapping keeps the product (6, 7); (6) the product is largest when u_x = u_y, at 45°, so beyond u² ÷ g there is no angle (8).
- **Entry knowledge (route `entryKnowledge`):** Year 11 vectors and trigonometry (including inverse sine); v02 (resolving the launch velocity), v03 (flight time 2u_y ÷ g on level ground), v04 (R = u² sin 2θ ÷ g, its derivation and conditions).
- **Learner-visible vocabulary (plain meaning at first use):** complementary angles (two angles that add to 90°, scene 5); principal value (the one angle the calculator's inverse sine returns, scene 4, said as "the calculator only gives one answer"; the term is screen-only).
- **Legacy logic ported:** none. The coded family `m5-target-angles` (`src/explainer/physics/module5/projectile-details/`) already plays 30 m s⁻¹ to 72 m on separate physical flights; it is reused with one shared clock and true time ratios (pack: do not imply simultaneous arrival).
- **New explainer motion (coded):** the v01 **strobe projectile stage** with two simultaneous launches on one clock (kit gap 1, already planned for the paired dropped ball); a **sine graph** with a draggable horizontal level and two crossing markers (`DataGraph` from `course-kit.tsx`); **component triangle swap** (new, small): two launch triangles that slide together and reflect in a dashed 45° line, with teal and blue sides exchanging lengths; a **target slider**: the flag moves outwards while both solution paths update from the model and meet at 45°; `AlignedAlgebra`; `Countdown` (3 s in scene 1; 10 s in scenes 10 and 12); `QuestionCard`; `Chip` with `cross`; `ScribbleCircle`; `PenArrow`; `KeyNotes`; `Heading`.
- **Board layout (as v01):** heading top-left; the stage on the left (12 px per metre on both axes; author note b); the ledger, graph or working on the right; ground line above the bottom 12% of the frame. Colour key from v01: horizontal teal, vertical blue, resultant and launch arrows orange, acceleration violet, givens navy, clock ink; the low path solid orange, the high path dashed orange; crossed chips red.
- **Colour roles (Revision 2, fixed for the whole video; the v01 key):** horizontal quantities (u_x, R, the 72 m bracket, cos sides) teal; vertical quantities (u_y, flight time from u_y, sin sides, peaks) blue; launch arrows and paths orange (low solid, high dashed); the sine curve and its level line ink with the two crossing dots orange; givens and condition tags navy; clocks ink; framed answers in a dark-ink box; crossed mistakes and their hand tags red. Hand-font teacher tags take the colour of the quantity they mark, and the same colours run through the stage, graph, triangles, ledger, readouts and key notes.
- **Type sizes (Revision 2, 1080p):** the current working line at least 44 px (scene 3, 4 and 7 rows 52 px; "sin 2θ = 0.784" 60 px); live readouts (the clock in scene 2; R, Rg ÷ u², both angles and both flight times in scene 8) about 52 px; triangle side labels 44 px; supporting lines, givens and graph axis labels 30 to 36 px; hand-font tags at least 30 px; nothing a student must read below 26 px. All text above the bottom 12% of the frame.
- **Anchor (Revision 2; root decision 4 revisited, open decision 3).** The launcher plates now exist (brief 187; inspected on `assets/brief187-qa/launcher-rotations.jpg`), so scenes 1, 2 and 8 show two identical painted launchers side by side at the launch point, seen side-on so the rear base sits exactly behind the front base and only the two barrels differ (25.8° and 64.2°; about 140 px wide each at 12 px per metre, uniform scale, never stretched). Each fires one ball, so scene 2's simultaneous launch is shown without a coded launch point; the rest of the video stays coded. If root prefers the coded point, scenes 1, 2 and 8 revert and the painted anchor is the handoff's ramp only.
- **Simulation (Revision 2).** Scene 2's one-clock launch is the first simulation. Scene 8's target slider gains a live readout panel: as the flag slides out, "R", "Rg ÷ u²", teal "θ low", blue "θ high", "t low" and "t high" update every frame and the two painted barrels tilt towards each other (72 m: 0.784, 25.8°, 64.2°, 2.67 s, 5.51 s; 80 m: 0.871, 30.3°, 59.7°, 3.09 s, 5.29 s; 85 m: 0.926, 33.9°, 56.1°, 3.41 s, 5.08 s; 91.8 m: 1.000, 45.0°, 45.0°, 4.33 s each; 100 m: 1.089, "Error").
- **Stage changes (Revision 2).** Scene 3 is a full-width calculation layout; scene 4 continues it with the stage strip; scene 5 the sine graph full width; scene 6 the triangles full width; scene 7 the two-row ledger with both flights replaying under it; scene 8 the stage with the launchers. No set-up runs past about 70 s.
- **No human figures.** No launcher operator, no athlete.
- **Author notes (not learner copy):**
  (a) Model: level ground, point projectile, no drag, constant g. With drag, the two angles are no longer complementary (both are lower, and the high path loses more range); not narrated beyond "level ground" and the model conditions.
  (b) Stage geometry (12 px per metre): launch point (60, 860) px; ground line y = 860 px; target at x = 60 + 72 × 12 = 924 px; low path peak 8.707 m (104.5 px) at 36.0 m; high path peak 37.211 m (446.5 px) at 36.0 m; maximum range 91.837 m at x = 1162 px (the stage widens to 1,180 px in scene 8 only, or the scale drops to 11 px per metre for that scene).
  (c) Real-time playback in scene 2: 5.51 s of motion (high path), with strobe images every 0.5 s. Both launch at clock zero.
  (d) "No angle has a sine bigger than one" is true for real angles; that is the sense used.
  (e) Pronunciations: "sin two theta", "R g over u squared", "u x", "u y"; "zero point seven eight four"; "fifty-one point six degrees".

- **Open decisions for root:**
  - **1. The physical explanation's form (physics check).** R = 2u_x u_y ÷ g (product of swapped components) is used instead of the identity sin 2θ = 2 sin θ cos θ. Confirm the physics check accepts it as the derivation link to v04's equation (they are the same expression).
  - **2. Site notes 1 and 2** (lesson 4 rounding errors) for root to log.
  - **3. Launcher (root). Revision 2: the alternative below is adopted (two painted launchers in scenes 1, 2 and 8; see the Anchor decision); root may revert.** v05 and v06 show the run's launcher plates (`y12p-launcher-base-v1.png`, `y12p-launcher-barrel-v1.png`) at the launch point. v07 keeps a coded launch point and arrows, as the kit plan decided, because scene 2 launches two balls at two angles at once and scene 8 sweeps the angle continuously. Root may instead show two launcher instances in scenes 1 and 2 (barrels at 25.8° and 64.2°) and the coded point elsewhere.
  - **4. Handoff plates (shared with v08).** The final frame uses the new `y12p-launch-ramp-v1.png` requested in v08's asset brief. Revision 2: delivered in brief 187 (ramp tab and exit repaired; inspected on `assets/brief187-qa/ramp-seat-overlay.jpg`); designer acceptance of the native size pending with root.
Main question: *A launcher fires at 30 m s⁻¹ at a target 72 m away on level ground. Two launch angles hit it. Why two, and what are they?*
Entry knowledge: R = u² sin 2θ ÷ g on level ground and its conditions; resolving the launch velocity; flight time 2u_y ÷ g on level ground; inverse sine.
Stops after: both angles, the sine-graph reason, the component-swap reason, both flight times, the 45° maximum and "two, one or none". No moving targets.
Handoff: v08, testing the horizontal-launch model with primary measurements.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *u*, *v*, *a*, *s*, *t*, *R*, *θ* with subscripts *x* and *y*. Paper background and handwritten headline face as the explainer house style.

### 1. hook (which lands first?)
> Last time ended with a target on level ground, seventy-two metres from a launcher that fires at thirty metres per second. Two paths reach it. One stays low, peaking at under nine metres. The other climbs to about thirty-seven metres before it comes **down**. If both are launched at the same instant, which reaches the target first? Or do they arrive **together**?

Visual: opens on v06's final frame (see "Opening frame"): level ground, launch point, flag at 72 m with its teal "72 m" bracket, the orange "u = 30 m s⁻¹" arrow and the two dashed paths with "θ = ?". As the first sentence runs, the two painted launchers (Decisions, Anchor) fade in at the launch point under the arrow, their barrels along the two dashed paths, a steel ball (`phys-y11-steel-ball-v1.png`, 24 px) at each muzzle. On "stays low" the low path brightens and a small height bracket at its peak reads "8.7 m"; on "climbs" the high path brightens with "37.2 m" at its peak. On "down" both paths sit together. Hand tags: blue "under 9 m" and "37 m" by the two peak brackets, an ink pen ring round the flag. On "together" a 3 s `Countdown` runs beside three option chips (36 px): "low first", "high first", "together".

### 2. reveal (one target, two clocks' worth)
> Let's launch them together. The low one arrives after about two point six seven **seconds**. The high one is still up there. It finally lands after about five point five one **seconds**, in exactly the same spot. Same speed, same target, two angles, two very different flights. So why are there two angles, and how do we find them **both**?

Visual: on "launch them together" both balls leave the launch point at clock zero (one clock readout counting in real time, strobe images every 0.5 s, grey). On the first "seconds" the low ball reaches the flag and a chip at the flag reads "low: 2.67 s"; the high ball is shown just past its peak at that moment (a small tag "still in the air"). On the second "seconds" the high ball lands on the same flag, chip "high: 5.51 s". On "two very different flights" both strobe trails hold, the low one tight, the high one tall. Hand tags: ink "more than twice as long" between the two chips, with a pen arrow from "2.67 s" to "5.51 s". On "both" the heading writes on: "Why can two launch angles reach the same target?" and the clock slides to the right column.

### 3. the range equation, run backwards for speed
> For level ground we already have a shortcut, the range equation. R equals u squared sin two theta over g. Remember its conditions: launch and landing at the same height, no air resistance, and constant g. It can run backwards, too. Say a projectile launched at thirty-eight degrees lands forty-five metres away on level ground. Rearrange for **u**: u is the square root of R g over sin two theta. That's the square root of four hundred and forty-one over sin seventy-six degrees, about twenty-one point three metres per **second**.

Visual: board changes (camera push) to the calculation layout; the stage shrinks to the left. Equation strip: "R = u² sin 2θ ÷ g" with a navy condition tag under it: "level ground (same launch and landing height), no air resistance, constant g". On "run backwards" a small worked block slides in: task strip "Find the launch speed", givens "R = 45 m, θ = 38°, level ground, g = 9.8 m s⁻²". On "u" `AlignedAlgebra` writes "u = √(Rg ÷ sin 2θ)" (the rearranged form boxed). On "second" "u = √(45 × 9.8 ÷ sin 76°) = √(441 ÷ 0.9703) = √454.5 = 21.3 m s⁻¹". "u = 21.3 m s⁻¹" is framed in a dark-ink box with an ink hand tag "the equation runs backwards" and a pen ring round the condition tag. The block then shrinks to a corner chip "speed from range: u = √(Rg ÷ sin 2θ)".

### 4. run it backwards for the angle
> Now our target. This time we know u and R, and we want theta. Rearranging, sin two theta equals R g over u squared. That's seventy-two times nine point eight over nine hundred, which is zero point seven eight **four**. Your calculator's inverse sine gives two theta as fifty-one point six degrees, so theta is twenty-five point eight degrees. That's the low **path**. But the calculator only gave us one answer. Where's the other?

Visual: task strip "Find the launch angles", givens "u = 30 m s⁻¹, R = 72 m, level ground, g = 9.8 m s⁻²". `AlignedAlgebra`: "sin 2θ = Rg ÷ u²"; "= 72 × 9.8 ÷ 30² = 705.6 ÷ 900"; on "four" "= 0.784". On "inverse sine" a coded calculator readout "sin⁻¹(0.784) = 51.63°" (grey tag "principal value: the one angle the calculator returns") and "2θ = 51.63°, θ = 25.81° ≈ 25.8°". On "path" the stage's low path lights solid orange with "25.8°" at its launch; the high path stays dashed with "?". "θ = 25.8°" is framed. On "only gave us one" a `ScribbleCircle` rings the calculator readout with a red hand tag "only one?".

### 5. the second angle: sine takes each value twice
> Look at the sine graph from zero to one hundred and eighty degrees. It rises to one at ninety degrees, then falls back again, symmetrically. So a height of zero point seven eight four is reached **twice**: at fifty-one point six degrees, and at one hundred and eighty minus that, one hundred and twenty-eight point four. Halve it, and theta is sixty-four point two degrees, the high **path**. Notice that twenty-five point eight plus sixty-four point two is ninety. Angles that add to ninety degrees are called **complementary**. One warning: subtract from one eighty before you halve, not after. One eighty minus twenty-five point eight would aim the launcher backwards.

Visual: the right column becomes a coded sine graph (`DataGraph`), x axis "2θ (degrees)" 0 to 180 with ticks every 30, y axis "sin 2θ" 0 to 1. On "rises to one" the curve draws from 0 to 90 with a dot at (90, 1); on "falls back" it completes to 180 and a dashed vertical line at 90 marks the symmetry. On "twice" a horizontal line at 0.784 draws across and two crossing dots light: "51.6°" and "128.4°" with equal teal brackets from each to the 90° line ("38.4° each side"). On "path" "2θ = 128.37°, θ = 64.19° ≈ 64.2°" writes, and the stage's high path lights dashed orange with "64.2°". On "complementary" a chip "25.8° + 64.2° = 90°: complementary" writes. On "before you halve" a red chip "θ = 180° − 25.8° = 154.2°" fades in and is crossed (caption "supplement 2θ, then halve"), and a tiny ghost arrow at 154° points backwards from the launch point, then fades. Hand tags: orange "twice" by the two crossing dots, ink "38.4° each side" on the brackets, and "θ = 64.2°" framed beside "θ = 25.8°".

### 6. the physics: swap the parts, keep the product
> That's the maths. Here's the physics. Resolve both launches. The low one has u x of about twenty-seven metres per second, and u y of about thirteen point one. The high one has exactly the same two numbers, **swapped**. Now think about what range is: horizontal velocity times the time in the air. The time in the air depends only on u y. So the low launch is fast across but brief, and the high launch is slow across but stays up longer. Swapping the components swaps those two effects, and their product, the range, doesn't **change**.

Visual: camera change: the graph slides away; two launch triangles draw side by side on the right. Low (25.8°): teal side "u_x = 27.01 m s⁻¹", blue side "u_y = 13.06 m s⁻¹", orange hypotenuse "30". On "Resolve both launches" the high triangle (64.2°) draws: teal "13.06", blue "27.01". On "swapped" the high triangle slides onto the low one and reflects in a dashed 45° line; the teal and blue sides visibly exchange lengths (a short swap animation with the numbers moving). On "horizontal velocity times the time" an equation strip writes "R = u_x × t_flight" and on "depends only on u y" "t_flight = 2u_y ÷ g, so R = 2u_x u_y ÷ g". On "fast across but brief" the low path's strobe images on the stage space widely and few; on "slow across but stays up longer" the high path's images space closely and many. On "change" the product "u_x u_y = 27.01 × 13.06 = 352.8 m² s⁻²" writes once under both triangles with a navy box "same for both". Hand tags: teal "fast across, brief" and blue "slow across, long" by the two triangles; an ink pen ring round the product.

### 7. two flight times, one landing point
> Let's put numbers on that. On level ground, the flight time is two u y over g. For the low path, that's two times thirteen point one over nine point eight, about two point six seven seconds, and twenty-seven times that is seventy-two **metres**. For the high path, it's two times twenty-seven over nine point eight, about five point five one seconds, and thirteen point one times that is also seventy-two **metres**. Two flights, different times, one landing point.

Visual: the two-column ledger returns in the right column, split into two rows: "low 25.8°" and "high 64.2°". Low row: blue "t = 2 × 13.064 ÷ 9.8 = 2.666 s ≈ 2.67 s", teal on the first "metres" "R = 27.006 × 2.666 = 72.0 m". High row: blue "t = 2 × 27.006 ÷ 9.8 = 5.511 s ≈ 5.51 s", teal on the second "metres" "R = 13.064 × 5.511 = 72.0 m". The clock between the columns shows the two times as two marks on one time axis (0 to 6 s). Under the ledger the two flights replay small on one clock. Both "72.0 m" results are framed, with an ink hand tag "different times, same spot". On "one landing point" both landing chips from scene 2 pulse at the flag.

### 8. two, one or none
> Is there always a second angle? Push the target further away, and the two angles move towards each other, until they meet at forty-five degrees. There, u x equals u y, and their product is as big as it can be. At thirty metres per second that range is u squared over g, about ninety-one point eight metres, and only one angle **works**. Beyond that, R g over u squared is bigger than one, and no angle has a sine bigger than one. Your calculator shows an error, and that's the physics telling you the target is out of **reach**.

Visual: camera change back to the full stage (scale per author note b). On "Push the target further away" the flag slides outwards from 72 m and the scene becomes a live control (simulation; see Decisions): both solution paths update live from the model, the low one steepening and the high one flattening, the two painted barrels tilting with them, and the readout panel updates every frame (52 px): "R", "Rg ÷ u²", "θ low", "θ high", "t low", "t high". On "meet at forty-five degrees" the paths merge into one at 45°, and the launch triangle shows equal teal and blue sides "21.2 m s⁻¹ each" (screen only). On "works" the flag rests at "91.8 m" and a chip "maximum range: R = u² ÷ g = 91.8 m (θ = 45°)". On "bigger than one" the flag nudges to 100 m, the path vanishes, and a coded calculator readout shows "sin⁻¹(1.089) = Error". On "reach" three chips line up: "R < 91.8 m: two angles", "R = 91.8 m: one angle (45°)", "R > 91.8 m: none at this speed", with a red hand tag "sine can't exceed 1" on the error readout; "91.8 m" is framed.

### 9. memory aid
> Here's a way to remember it. Complementary angles swap the components, and the range depends only on their product. Swap the parts, keep the **product**. But this only works on level ground. Launch from a cliff, and the two angles that hit a target are no longer **complementary**.

Visual: board clears to the two overlaid triangles reflected in the 45° line, with "R = 2u_x u_y ÷ g" beneath. On "product" the memory aid writes large in hand lettering inside a framed card above the triangles (teal "Swap the parts,", blue "keep the product.", 52 px), with the condition line "(level ground only)" (30 px). On "level ground" a navy condition tag "level ground, no air resistance, constant g". On "complementary" a small grey inset shows a cliff launch with two paths to one target and the tag "not complementary". Hold about 2 seconds.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. A projectile is launched at fourteen point zero metres per second over level ground. Neglecting air resistance, find both launch angles that give a horizontal range of ten point zero metres. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "A projectile is launched at 14.0 m s⁻¹ from level ground and lands at the same height. Neglect air resistance and take g = 9.8 m s⁻². Find the two launch angles that give a horizontal range of 10.0 m. (2 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing (no graph, no triangles).

### 11. feedback 1 (brief)
> sin two theta equals ten times nine point eight over fourteen squared, which is exactly zero point **five**. So two theta is thirty degrees or one hundred and fifty degrees, and theta is fifteen degrees or seventy-five **degrees**. They add to ninety, as they should. The classic slip is stopping at fifteen degrees, the only angle the calculator **gives**.

Visual: card shrinks to the top; "two launch angles" and "same height" underline. `AlignedAlgebra`: "sin 2θ = 10.0 × 9.8 ÷ 14.0² = 98 ÷ 196 = 0.500" on "five"; "2θ = 30° or 180° − 30° = 150°" and "θ = 15° or 75°" on "degrees"; a tick chip "15° + 75° = 90°". Rows 44 px; "θ = 15° or 75°" framed. On "gives" a chip "θ = 15° only" fades in and is crossed (caption "sine takes 0.5 twice"). Hold about 1 second.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. A target is twenty point zero metres away, at the same height as the launch point. Neglecting air resistance, find the minimum launch speed that can reach it, and the launch angle needed. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A target is 20.0 m away horizontally, at the same height as the launch point. Neglect air resistance and take g = 9.8 m s⁻². Calculate the minimum launch speed that can reach the target, and state the launch angle required. Justify your answer. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 2 (brief)
> The range is biggest when sin two theta is one, at forty-five **degrees**. So the minimum speed satisfies R equals u squared over g, and u is the square root of twenty times nine point eight, the square root of one hundred and ninety-six, exactly fourteen point zero metres per **second**. Any slower, and the sine would have to be bigger than one. The slip is to aim at ninety degrees because it makes sin theta biggest. Straight up has no range at all. It's sin two theta that **matters**.

Visual: card shrinks to the top; "minimum" and "same height" underline. `AlignedAlgebra`: on "degrees" "sin 2θ = 1 when 2θ = 90°, θ = 45°"; "R = u² ÷ g, so u = √(Rg) = √(20.0 × 9.8) = √196 = 14.0 m s⁻¹" on "second". Rows 44 px; "14.0 m s⁻¹ at 45°" framed. On "matters" a chip "θ = 90° makes sin θ = 1" fades in and is crossed (caption "θ = 90° gives sin 2θ = 0: no range"). Hold about 1 second.

### 14. handoff
> Every prediction so far has come from a model, with no air resistance and a constant g. But how do we know the model is any good? We test it. Next time, a ball rolls down a ramp, flies off it horizontally and lands on the bench, and we'll see how our own measurements can put the **model** to the test.

Visual: board clears (camera change) to a lab scene: a coded bench top across the stage, the launch ramp plate (`y12p-launch-ramp-v1.png`, delivered in brief 187, shared with v08) clamped by the boss (`phys-y11-boss-crossbar-v1.png`) to the retort stand (`phys-y11-retort-stand-v1.png`) standing on the bench at the left, its curved track ending in a short horizontal exit 0.40 m above the bench top; a steel ball (`phys-y11-steel-ball-v1.png`, 40 px) at the top of the track. On "rolls down a ramp" the ball rolls down the track and leaves the exit horizontally (v01's strobe dots, dimmer), landing on a white sheet (`phys-y11-paper-sheet-flat-v1.png`) lying on the bench top. On "model" a dashed orange "predicted" landing tick and a second, empty ink tick "measured: ?" appear on the sheet, with a teal bracket "R" from the point below the exit, and a chip writes "Next: how can primary measurements test the horizontal-launch model?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 15. key notes (quiet, hold about 50 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Level ground only: R = u² sin 2θ ÷ g, so sin 2θ = Rg ÷ u².
2. Two answers: 2θ and 180° − 2θ, then halve.
3. The two angles are complementary: u_x and u_y swap.
4. R = 2u_x u_y ÷ g, so the ranges match; the higher flight lasts longer.
5. R_max = u² ÷ g at 45°. Rg ÷ u² > 1: no angle works.

Memory aid (framed card under the notes, hand lettering, teal and blue as in scene 9): *Swap the parts, keep the product.* Second line in the card: *(level ground only)*. Notes in the role colours, 32 px; about 270 characters of bullet text; no paragraphs.

## Teaching checks

- **Does it explain causes?** Why two angles: sine is symmetric about 90°, so each value between 0 and 1 occurs twice for 2θ between 0° and 180° (5); physically, complementary launches have swapped components and range is their product (6). Why the high path takes longer: larger u_y (6, 7). Why 45° gives the maximum: u_x = u_y maximises the product for a fixed speed (8). Why a far target is unreachable: no angle has sin 2θ > 1 (8).
- **Misconceptions addressed:** only one angle exists (4, 5; crossed in 11); 180° − θ instead of 180° − 2θ (5, crossed); a larger angle always goes further (8, from the site's wrap-up); both paths arrive together (1, 2); aim at 90° for maximum range (crossed in 13).
- **One idea at a time:** the result before the method (2); speed before angle (3, 4); the maths reason (5) before the physical reason (6) before the numbers that confirm it (7); limits last (8).
- **Video makes it easier:** both launches on one clock show different times to one spot (2); the horizontal line crossing the sine curve twice (5); the triangles reflecting and swapping sides (6); the target sliding out until the paths merge and vanish (8).
- **Response opportunity:** one prediction (3 s countdown) and two unseen HSC-style tasks with every condition visible (speed or range, level ground or same height, g, negligible air resistance), 10 s each with the invitation to pause; nothing answer-bearing. One crossed mistake each; feedback about 25 s and 31 s.
- **Avoided double teaching:** the range equation's derivation (v04), resolving (v02) and the level-ground flight time (v03) are recalled, not re-derived.
- **Syllabus coverage:** `P5-IQ1-02`: launch angle, initial velocity, time of flight and horizontal range related quantitatively, including the inverse problems.
- **Out of scope by design:** moving targets (route stop); unequal heights (v05); drag effects (author note a).

## Practice questions and model answers

**Attempt 1 (scene 10; original wording, HSC style, 2 marks suggested, not an official marking scheme).** "A projectile is launched at 14.0 m s⁻¹ from level ground and lands at the same height. Neglect air resistance and take g = 9.8 m s⁻². Find the two launch angles that give a horizontal range of 10.0 m."
Model answer: sin 2θ = Rg ÷ u² = (10.0 × 9.8) ÷ 14.0² = 98 ÷ 196 = 0.500. So 2θ = 30° or 180° − 30° = 150°, giving θ = 15° or 75° (complementary, as expected on level ground). Classic mistake (crossed): giving 15° only.

**Attempt 2 (scene 12; original wording, HSC style, 3 marks).** "A target is 20.0 m away horizontally, at the same height as the launch point. Neglect air resistance and take g = 9.8 m s⁻². Calculate the minimum launch speed that can reach the target, and state the launch angle required. Justify your answer."
Model answer: For a fixed speed the level-ground range R = u² sin 2θ ÷ g is greatest when sin 2θ = 1, at θ = 45°, so the smallest speed that can reach 20.0 m satisfies R = u² ÷ g: u = √(Rg) = √(20.0 × 9.8) = √196 = 14.0 m s⁻¹ at 45°. Any lower speed would require sin 2θ > 1, which is impossible. Classic mistake (crossed): aiming at 90° because sin θ is largest there (it gives zero range).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hook case (L04 Q13, unchanged) | u = 30 m s⁻¹, R = 72 m, level ground, g = 9.8 m s⁻² | 1 to 8 |
| Peaks | low 8.707 m (≈ 8.7, "under nine"); high 37.211 m (≈ 37.2, "about thirty-seven") | 1 |
| Precursor (L03 WE1) | R = 45 m, θ = 38°; Rg = 441; sin 76° = 0.97030; 441 ÷ 0.97030 = 454.50; u = 21.319 m s⁻¹ ≈ 21.3 | 3 |
| sin 2θ | 72 × 9.8 ÷ 900 = 705.6 ÷ 900 = 0.784 | 4 |
| Angles | 2θ = 51.628° or 128.372°; θ = 25.814° ≈ 25.8° or 64.186° ≈ 64.2°; sum 90° | 4, 5 |
| Crossed | 180° − 25.8° = 154.2° | 5 |
| Components | low u_x = 27.006, u_y = 13.064 m s⁻¹; high u_x = 13.064, u_y = 27.006 m s⁻¹ | 6, 7 |
| Product | u_x u_y = 352.8 m² s⁻² (= Rg ÷ 2 = 72 × 9.8 ÷ 2) | 6 |
| Flight times | low 2.6660 s ≈ 2.67; high 5.5115 s ≈ 5.51 | 2, 7 |
| Range checks | 27.006 × 2.6660 = 72.0 m; 13.064 × 5.5115 = 72.0 m | 7 |
| Maximum | R = u² ÷ g = 900 ÷ 9.8 = 91.837 m ≈ 91.8 at 45°; components 21.213 m s⁻¹ each | 8 |
| Out of reach | R = 100 m: sin 2θ = 1.0889 > 1 | 8 |
| A1 | sin 2θ = 98 ÷ 196 = 0.500; 2θ = 30° or 150°; θ = 15° or 75° | 10, 11 |
| A2 | u = √(20.0 × 9.8) = √196 = 14.0 m s⁻¹ at 45° | 12, 13 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov); Codex to re-check.

- √(45 × 9.8 ÷ sin 76°) = √(441 ÷ 0.970296) = √454.5006 = 21.319020 m s⁻¹.
- 72 × 9.8 ÷ 30² = 0.784; sin⁻¹(0.784) = 51.628285°; 180° − 51.628285° = 128.371715°; halves 25.814142°, 64.185858°.
- 30 cos 25.814142° = 27.006339; 30 sin 25.814142° = 13.063599 (swapped for 64.185858°); product 352.8000.
- Flight times 2 × 13.063599 ÷ 9.8 = 2.666041 s; 2 × 27.006339 ÷ 9.8 = 5.511498 s; ranges 72.0000 m both.
- Peaks 13.063599² ÷ 19.6 = 8.707022 m; 27.006339² ÷ 19.6 = 37.211345 m.
- Maximum range 900 ÷ 9.8 = 91.836735 m; 30 cos 45° = 21.213203 m s⁻¹; 100 × 9.8 ÷ 900 = 1.088889.
- Revision 2 target-slider readouts (θ = ½ sin⁻¹(Rg ÷ u²) and 90° − θ; t = 2u sin θ ÷ g): 80 m: 0.871111, 30.3°, 59.7°, 3.09 s, 5.29 s; 85 m: 0.925556, 33.9°, 56.1°, 3.41 s, 5.08 s; 91.837 m: 1.000, 45.0°, 4.33 s each.
- A1: 10 × 9.8 ÷ 196 = 0.5; sin⁻¹ 0.5 = 30°; 15°, 75°. A2: √(20 × 9.8) = 14.000000 m s⁻¹.
- Site checks: lesson 4 Q13 high time with θ = 64.2°: 2 × 30 sin 64.2° ÷ 9.8 = 5.512156 s (site 5.52 is wrong; 5.51). Q4: 8.124037 m, 2.575241 s, 46.409309 m. Q5: 3.356695 s, 52.325689 m. Q7: 25.940842 m s⁻¹. Q11: 0.703343 s, 5.999580 m, 0.605997 m. Q12: 1.172517 s, 3.910627 s, 37.705537 m, 28.513155 m s⁻¹ at 70.2356°.

## Memory aid check

- **"Swap the parts, keep the product."** Meaning, as said in scenes 6 and 9: the two launches that reach the same level-ground target have their horizontal and vertical velocity components swapped, and the range depends only on the product u_x u_y (R = 2u_x u_y ÷ g). Assumptions checked: level ground (the flight time 2u_y ÷ g needs equal launch and landing heights); no air resistance (u_x constant); constant g; launch speed the same for both. With unequal heights the flight time is not 2u_y ÷ g and the two angles are not complementary (said in scene 9). It helps a new case: A1's 15° and 75° are a swapped pair, and it explains why 45° (equal parts) gives the largest product for a fixed speed (8, A2). Introduced after the explanation (6).
- **Considered, not used:** "Complementary angles, same range" (a fact, not a reason); "Sine has two homes" (cute, but only the maths half).

## Narration length estimate

Revision 2 count (6 Nov; by script with the build parser rules: `### N.` or `### Na.` headings, only lines starting "> " counted inside each scene and joined with a space, bold markers removed, total = sum of the scene strings): **5,705 characters**, 15 scenes; narration unchanged from Revision 1, whose stated 5,719 joined the scenes with spaces (scene sum 5,705). Characters per scene (1 to 15): 356, 328, 523, 422, 659, 528, 457, 520, 273, 223, 345, 219, 479, 298, 75. At 13.3 characters per second the speech is about 429 s; add about 3 s for the prediction countdown, about 6 s for the real-time flights in scene 2 (mostly under the speech; 3 s extra), 3 s for the target slide in scene 8, 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 45 s more of the quiet notes hold (about 50 s in all; about 80 s of holds and countdowns): **about 509 s**, inside the 5,500 to 7,000 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 3's "Remember its conditions" sentence (keep the tag); scene 5's warning sentences (keep the crossed chip); scene 13's "Straight up" sentence.

## Opening frame

v06's final frame (designed in this wave, `phys-y12-m5-v06.md`): paper background; level coded ground line (12 px per metre); launch point at the left with the orange "u = 30 m s⁻¹" arrow and "θ = ?" arc; target flag 72 m away with a teal "72 m" bracket; two dashed orange paths (25.8° and 64.2° shapes) with "θ = ?" at each launch; ledger and clock small at the top right; heading "Will a projectile clear a wall at a known horizontal position?" and the chip "Next: why can two launch angles reach the same target?". Scene 1 keeps the stage and replaces the chip with the hook's peak brackets; the heading changes in scene 2.

## Final frame

The last explained frame (end of scene 14, before the key-notes board): paper background; a coded bench top across the stage; the retort stand plate standing on the bench at the left, the boss holding the launch ramp plate so that the ramp's horizontal exit sits 0.40 m above the bench top; the steel ball (40 px) just beyond the exit, at the start of a faint dimmed strobe path curving down to the bench; a white sheet plate lying on the bench top, with a dashed orange "predicted" tick and an empty ink tick "measured: ?" on it, and a teal bracket "R" from a short grey plumb mark below the exit to the ticks; heading unchanged ("Why can two launch angles reach the same target?"); a chip above the bench reads "Next: how can primary measurements test the horizontal-launch model?". v08 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m5-v07` (route phys-y12-m5-v07). Suggested explainer folder `src/explainer/lessons/phys-y12-m5-v07` and build folder `docs/production/claude-pm/lessons/p-y12-m5-v07` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 15 scene headings, all `### N.`): hook, reveal, speed-backwards, angle-backwards, second-angle, swap-product, flight-times, two-one-none, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Scene 1 is `explain` with a 3 s prediction countdown at its end. `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: strobe projectile stage with simultaneous launches on one clock (kit gap 1), sine graph with level line (`DataGraph`), component triangle swap, target slider, two-column ledger (kit gap 2), `AlignedAlgebra`, `NumberTicker`, `ScribbleCircle`, `PenArrow`, path draw-on, `Countdown`, `CameraStage`. Transitions (`pickTransition`): 1 to 2 camera continue; 2 to 3 camera push to the calculation layout; 3 to 4 camera continue; 4 to 5 camera continue (graph replaces working); 5 to 6 camera change (triangles); 6 to 7 camera continue; 7 to 8 camera change back to the stage; 8 to 9 clear change; attempts and feedback card shrink to the top; 13 to 14 clear change to the lab bench; 14 to 15 fade to the notes board.

Holds: hook (3 s countdown), memory aid (2 s), attempt-1, attempt-2 (10 s countdown after the speech, "Pause here to answer." on screen), key-notes (about 50 s). Review evidence paths: `learning_review` = `checks/p-y12-m5-v07-learning-review.md`, `science_check` = `checks/p-y12-m5-v07-physics-check.md`.

## Assets

Have (inspected 6 Nov on a session contact sheet; scaled uniformly only, never stretched):
- `public/assets/physics/phys-y11-retort-stand-v1.png` (600 × 2400, RGBA), `phys-y11-boss-crossbar-v1.png` (800 × 800, RGBA), `phys-y11-steel-ball-v1.png` (800 × 800, RGBA), `phys-y11-paper-sheet-flat-v1.png` (2172 × 724, RGBA): scene 14 only.
- `public/assets/physics/y12p-launcher-base-v1.png` and `y12p-launcher-barrel-v1.png` (1448 × 1086 each, RGBA; delivered in brief 187, inspected 6 Nov on `assets/brief187-qa/launcher-rotations.jpg`): two instances, scenes 1, 2 and 8 (Revision 2; see the Anchor decision).
- `public/assets/physics/y12p-launch-ramp-v1.png` (1774 × 887, RGBA; delivered in brief 187, inspected 6 Nov on `assets/brief187-qa/ramp-seat-overlay.jpg`): scene 14.
- **Checked, not used:** `phys-y11-ramp-plank-v1.png` (a straight plank; it has no horizontal exit, so it cannot launch horizontally); `phys-y11-spring-launcher-whole-v1.png` (horizontal only; the hook needs angled launches, which stay coded).

Need (new plates): none (`y12p-launch-ramp-v1.png`, specified in v08's asset brief, is delivered).

Coded: ground, flag, launch point and arrows, paths, strobe dots, sine graph, triangles, calculator readouts, ledger, clock, calculation strips, crossed chips, attempt cards, countdowns, key notes board, bench top.

Kit gaps (for the v07 build brief):
1. **Strobe stage, two launches on one clock** (kit gap 1 already allows a paired ball); with live solution paths for a movable target (the target slider) computed from the model.
2. **Component triangle swap.** Two right triangles with teal and blue legs and orange hypotenuse, which slide together and reflect in a 45° line while their leg readouts exchange.
3. **Sine graph with level line.** `DataGraph` with a horizontal line at a set value and crossing markers with readouts and symmetric brackets to 90°.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the physics of every learner-visible claim: the range equation and its conditions; both angles; complementary angles swap u_x and u_y; R = 2u_x u_y ÷ g on level ground; the low path lands first (2.67 s versus 5.51 s); maximum range at 45° is u² ÷ g; Rg ÷ u² > 1 means no solution; with unequal heights the two angles are not complementary.
3. Confirm the memory aid's assumptions (see "Memory aid check").
4. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
5. Confirm both attempt cards are original in wording, carry every condition (speed or range, level ground or equal heights, g, negligible air resistance) and show nothing answer-bearing.
6. Confirm the syllabus quote matches the route JSON exactly and is labelled 2017.
7. Confirm no person, hand, face or body outline is drawn or requested.
8. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
9. Confirm the narration character count and per-scene counts by script with the build parser rules.
10. Report site notes 1 and 2 under Decisions to root.

## YouTube metadata (draft)

Title: Two Launch Angles, One Target: Why? | HSC Physics Module 5

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module5/lesson04.sa.html

A launcher fires at 30 m/s at a target 72 m away on level ground. Two different angles hit it, but one flight takes twice as long. Run the range equation backwards for speed and for angle, see why sine gives two answers, and see the physics behind it: the two launches swap their horizontal and vertical velocity components, and the range depends only on their product. Then find when there is one angle, or none. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 5: Advanced Mechanics.
Syllabus content (NSW Physics Stage 6, 2017):
"apply the modelling of projectile motion to quantitatively derive the relationships between the following variables: initial velocity; launch angle; maximum height; time of flight; final velocity; launch height; horizontal range of the projectile (ACSPH099)"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: will a projectile clear a wall? Next: testing the horizontal-launch model with your own measurements.

#HSCPhysics #Physics #ProjectileMotion #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v02 to v04; check the hook question is answerable in 3 s; that the sine-graph scene is followable for a student who has only met inverse sine on a calculator; that the triangle swap makes the product idea clear without the identity; that the attempt cards give nothing away), then the physics check and the Codex error check.
- The one-clock launch, the sine crossings, the triangle swap and the target slider carry the explanation; judge them at playback speed in the voiced preview.

## Revision 2 (6 Nov 2026)

Brief 187 findings (`checks/p-y12-m5-v07-learning-review.md`, `checks/p-y12-m5-v07-science-check.md`): 0 blocker, 0 should fix, 0 optional. The reports ask to keep the simultaneous low and high flights, the sine graph before the component swap, the maximum-range case, the same-speed and same-level conditions, both attempts and the ramp handoff as a new practical question; all are kept. The opening (v06's final frame, unchanged) and the final frame are unchanged, so the v06 and v08 joins hold.

Visual upgrade (to `../maths-visual-standard.md` and the build gate):
- Decisions gain "Colour roles", "Type sizes", "Anchor", "Simulation" and "Stage changes".
- Anchor: with the launcher plates delivered, open decision 3's alternative is adopted: two painted launchers side by side (bases aligned, barrels at 25.8° and 64.2°) in scenes 1, 2 and 8, so the first frame carries a real object and scene 2's simultaneous launch needs no coded point. Root decision 4 is revisited, not overruled: root may revert to the coded point.
- Live simulation: scene 8's target slider gains live R, Rg ÷ u², both angles and both flight times, with the painted barrels tilting towards 45° (Python values in "Numbers to verify").
- Hand tags and a pen mark in role colours in every teaching scene ("under 9 m", "37 m", "more than twice as long", "the equation runs backwards", "only one?", "twice", "38.4° each side", "fast across, brief", "slow across, long", "different times, same spot", "sine can't exceed 1").
- Framed answers: 21.3 m s⁻¹ (3), 25.8° (4), 64.2° (5), both 72.0 m checks (7), 91.8 m (8), A1 and A2 answers (11, 13).
- Scene 9 and the notes: the memory aid is a framed card with its condition line; key notes cut from four long items to five short bullets (about 270 characters); quiet notes hold 60 s to 50 s.
- Assets: launcher and ramp plates moved to "Have" (delivered in brief 187, inspected).
- Question cards already arrive with their full text; unchanged.

New plate requests: none.

Counts: 5,705 characters (narration unchanged; Revision 1 stated 5,719 by the joined convention); about 520 s to about 509 s.
