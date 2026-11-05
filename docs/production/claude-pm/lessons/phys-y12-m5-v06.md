# Year 12 Physics M5 V06: Clearing a wall. Will a projectile clear a wall at a known horizontal position? (design)

Status: Revision 1 (6 Nov 2026): first design. Needs independent learning review and science check before voicing.

Narration 6,233 characters, 15 scenes, about 557 s, counted by script with the build parser rules (see "Narration length estimate"). Opens on the assumed final frame of v05 (see "Opening frame").

Scope: sixth video of Year 12 Physics (Physics Stage 6, 2017 syllabus), Module 5 (Advanced Mechanics), inquiry question "How can models that are used to explain projectile motion be used to analyse and make predictions?". Templates: `phys-y12-m5-v01.md` (this run's structure and visual system), `phys-y11-fa1-v01.md` (structure, voice, Decisions, Numbers used, length estimate), `math-a12-d10.md` (calculation layout). Pre-design pack: `../pre-design/phys-y12/phys-y12-m5-v06.md` (every number recalculated below). Site lesson read in full (6 Nov, read-only): frame and decode, the protocol, worked examples 1 to 3, the apply section (shot put, activities 1 to 3), short-answer practice, the "Analyse 7 marks" and "Apply 6 marks" extended answers and the review: `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson03.sa.html`, SHA256 `8bd974fedf652636912d936d6c79b00b2642878ead6e43a2e89cd5f70038006a` (recomputed 6 Nov; matches the pack and the route). Route entry: `phys-y12-m5-v06` in `../../programme/phys-y12-route-inputs.json`, section `l03-obstacle-title`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Keep the 18 m/s, 35-degree, 15 m cliff, 25 m wall position and 8 m wall height. Calculate time to wall, displacement, absolute height and clearance without premature rounding. Stop before landing range." Next: "phys-y12-m5-v07: Why can two launch angles reach the same target?"

Owner rules applied: 2017 syllabus only, quoted exactly; one main learner question; no people, hands, faces or body outlines (the site's ball "is kicked"; here it is "launched", and no kicker or launcher operator is drawn); the cliff, sea, wall, ground and platform are coded HSC-exam-style line diagrams (kit plan for lesson 3 is coded-only: the heights must be exact); the launcher is the run's launcher plate pair (`y12p-launcher-base-v1.png`, `y12p-launcher-barrel-v1.png`, requested in v02 and used in v05) with the steel ball plate at the barrel tip, and in flight the ball is the v01 coded strobe dot; no new plate is needed; plates never stretched; one reasoning stage at a time; task strip, equation strip and grouped givens with units; every number recalculated in Python; g = 9.8 m s⁻²; HSC data sheet symbols (u, v, a, s, t with x and y subscripts); in-teaching prediction with a 3 s countdown; "Pause here to answer." then a 10 s countdown with the full worded question on screen; brief feedback with one crossed-out mistake; original HSC-style questions; optional key-notes hold; Australian spelling; no em dashes; v01 to v05 ideas (two columns and one clock, resolving the launch velocity, up positive) recalled in a phrase, not re-taught.

Syllabus content (Physics Stage 6 (2017), Module 5 Advanced Mechanics; ledger ids `P5-IQ1-02`, `P5-IQ1-04`), quoted from the route JSON `syllabusActions`:

- `P5-IQ1-02`: "apply the modelling of projectile motion to quantitatively derive the relationships between the following variables:" "initial velocity", "launch angle", "maximum height", "time of flight", "final velocity", "launch height", "horizontal range of the projectile (ACSPH099)"
- `P5-IQ1-04`: "solve problems, create models and make quantitative predictions by applying the equations of motion relationships for uniformly accelerated and constant rectilinear motion"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 53)

**Boundary:** starts on the assumed v05 cliff frame with a wall added. Teaches: an obstacle matters only at the instant the projectile reaches its horizontal position; time to the wall from the horizontal column (t = s_x ÷ u_x); vertical displacement at that time from s_y = u_y t + ½a_y t², read as "rise from the launch velocity minus drop from gravity"; changing to one datum (sea level) for absolute height; clearance = height − wall height; why rounding before subtracting two close numbers gives a wrong answer (site correction 3); the horizontal-launch contrast that hits the wall; the method "where, when, how high, compare". Stops before the landing range (v05 owns quadratic landing times), minimum wall-clearing speed (site "Apply 6 marks" and Activity 3: a separate scope decision), the basketball short-answer case (a person; not used) and two launch angles (v07).

## Decisions

- **Learner question (route wording kept).** "Will a projectile clear a wall at a known horizontal position?" is answerable and concrete; the causal part (why the time must come from the horizontal motion, why one datum) is built into scenes 4 and 6 rather than the question.
- **Hook (site worked example 3 with a contrast).** The site case is kept unchanged (18 m s⁻¹ at 35° from a 15 m cliff above sea level; wall 25 m out, 8 m tall from sea level). A second launch, horizontal at the same 18 m s⁻¹, is added (new, computed) because it breaks the tempting shortcut "the wall is lower than the cliff, so it clears": it hits the wall 2.45 m below the top. Prediction with four option chips and a 3 s countdown; both flights then play in real time (scene 2) before any calculation, and scene 8 explains the second result.
- **Time from the horizontal column (site step 1 and "Apply 6 marks" step 2, "Getting the time at the wall from the horizontal motion is the bridge").** The v01 ledger and clock are reused; the clock now takes its value from the teal column and carries it to the blue one, the reverse of v01 and v05. Narrated as a contrast in scene 9.
- **Vertical displacement read physically (site step 2).** The two terms are shown as two coded vertical bars at the wall position: an upward blue bar "u_y t = 17.51 m" (where the launch velocity alone would carry the ball) and a downward violet bar "½gt² = 14.09 m" (how far gravity has pulled it back). The ball sits at their difference, 3.42 m. The ball is falling at the wall (v_y = −6.29 m s⁻¹, screen only) but still above the cliff top.
- **One datum (site step 3 and pack misconception "vertical displacement relative to the cliff is not absolute height").** Sea level is chosen as the datum; a coded datum line glows and every height label converts to "above sea level". Plain meaning of datum given at first use.
- **Rounding trap (site correction 3, `../site-corrections-phys-y12.md`).** The site's own rounded working (t = 1.70 s, 17.5 − 14.2 = 3.3 m, clearance 10.3 m) is shown and crossed, with the reason: subtracting two large, nearly equal numbers magnifies rounding. Correct values carried unrounded: t = 1.6955 s, s_y = 3.4187 m, height 18.4187 m, clearance 10.4187 m ≈ 10.4 m. The site is not named on screen.
- **Mistake scene (the rounding trap, scene 7).** Kept because it resolves a specific error the case invites (the site itself makes it). The datum slip is handled in feedback 2.
- **Memory aid (scene 9, new): "Where, when, how high, compare."** Introduced after the method has been used once. See "Memory aid check".
- **Attempts (original, HSC style).** A1 (pack candidate 1): 20.0 m s⁻¹ at 30° from a 2.0 m platform, 3.0 m wall 20.0 m away; clears by 4.01 m. A2 (new, datum only): 12.0 m launch height, 2.6 m below the launch point at the wall, 9.0 m wall; clears by 0.4 m. Crossed: A1 "compare 5.01 m with 3.0 m (forget the platform)"; A2 "negative s_y, so it hits".
- **Sign convention.** +x towards the wall, +y up, origin at the launch point, so a_y = −9.8 m s⁻² and sea level is s_y = −15 m. Narration says "up is positive" before using a negative value.
- **Significant figures.** Site data are given to two significant figures; the answer is reported to three (10.4 m) as the site and the correction file do, with internal values unrounded. A1 to three (4.01 m); A2 to one decimal place (0.4 m).
- **Handoff (route next).** Scene 14 removes the wall and the cliff, draws level ground with a target 72 m out and a launcher point, and sketches one low dashed path and one high dashed path, each with "θ = ?" (v07: "Why can two launch angles reach the same target?"). See "Final frame".
- **Site sources used:** hook sentence ("A launch speed such as 18 m/s is a vector magnitude, not either component", scene 3); "frame first" box (origin at launch, +y up, scene 3); worked example 3 in full (scenes 1 to 6), corrected; the uneven-ground procedure box (scene 9); misconception "use the range equation for all problems" (scene 8 last sentence, by implication) and "time of flight depends on horizontal velocity" (not needed here; v01). Not used: worked examples 1 and 2 (v07 uses example 1; v03 owns example 2), shot put (a person, and v05's scope), Activities 1 to 3 (activity 1 is v07's case; activity 3 and "Apply 6 marks" are minimum-speed extensions), the basketball Q1 (a person), "Analyse 7 marks" (v05's quadratic landing).
- **Site notes (quoted from site lesson 3, read 6 Nov; for root to log in `../site-corrections-phys-y12.md` if accepted):**
  1. Already logged (correction 3): worked example 3, "The ball clears the wall by approximately 10.3 m" and the 3.3 / 18.3 / 10.3 lines. Applied in this design: 3.42 m, 18.42 m, 10.4 m.
  2. Precision note, worked example 3 step 1: "t = 25/14.74 = 1.70 s" is then substituted as 1.70 in step 2; that substitution (not only the term rounding) contributes to the error. The correction should carry t = 1.6955 s.
  3. Checked and correct: worked example 1 (21.3 m s⁻¹), worked example 2 (18.7 m, 1.95 s, 3.91 s, 62.8 m), Activity 1 (29.1°, 60.9°), Activity 2 (2.83 s, 32.5 m, 21.4 m s⁻¹, 57.6°), Activity 3 (24.2 m s⁻¹), short-answer Q1 (1.31 m above the basket), Q2 (5.05 s, 77.4 m, 39.7 m s⁻¹, 67.3°), "Analyse 7 marks" (3.55 s, 52.3 m; the check's 3.54 s is a rounding of 1.05 + 2.49, acceptable as stated), "Apply 6 marks" (18.4 m s⁻¹, 34.6 m).
- **Cause chain taught, in order:** (1) an obstacle only matters at the instant the ball reaches it (2); (2) the launch velocity is a magnitude to be resolved (3); (3) the horizontal motion is uniform, so the known horizontal distance gives the time (4); (4) at that time, the launch velocity has lifted the ball u_y t and gravity has pulled it back ½gt² (5); (5) heights only compare on one datum (6); (6) subtracting close rounded numbers loses the answer (7); (7) a lower launch angle reaches the wall sooner but without the upward velocity, so it can be lower there (8).
- **Entry knowledge (route `entryKnowledge`):** Year 11 vectors, Newton's laws, trigonometry, constant acceleration and work-energy; v01 (two columns, one clock), v02 (resolving the launch velocity), v03 and v05 (up positive, s_y = u_y t + ½a_y t², a cliff launch).
- **Learner-visible vocabulary (plain meaning at first use):** clearance (how far above the top of the wall the ball passes, scene 2); datum (the one level that every height is measured from, scene 6); absolute height (height above the datum, scene 6).
- **Legacy logic ported:** none. The frozen engine is not touched. The coded family `m5-obstacle-clearance` (`src/explainer/physics/module5/projectile-details/`) already uses the 18/35/15/25/8 case with the correct 18.42 m height; it is adapted for the stage and its exact geometry reused (kit comparison).
- **New explainer motion (coded):** the v01 **strobe projectile stage** (kit gap 1) extended with a launch height above a datum, a zero-width wall at a set x with a top marker, a collision stop (the horizontal launch stops at the wall face), and a "wall instant" marker that freezes the clock when x reaches the wall; the v01 **two-column ledger with one clock** (kit gap 2) with the carry arrow able to run teal to blue; **term bars** (new, small): a blue bar up and a violet bar down at the wall position with readouts; **datum line** (new, small): a dashed line that glows and relabels heights; `AlignedAlgebra`; `Countdown` (3 s in scene 1; 10 s in scenes 10 and 12); `QuestionCard`; `Chip` with `cross`; `PenArrow`; `ScribbleCircle`; `KeyNotes`; `Heading`.
- **Board layout (as v01):** heading top-left; the stage on the left (about 1,150 × 720 px, equal x and y scales, 20 px per metre; author note b); the ledger and clock in the right column; the sea line above the bottom 12% of the frame. Colour key from v01: horizontal teal, vertical blue, resultant orange, acceleration and the gravity bar violet, givens navy, clock ink, wall and cliff ink line, datum dashed grey, crossed chips red.
- **No human figures.** No kicker, no launcher operator. A2 "a ball is launched" is text only.
- **Author notes (not learner copy):**
  (a) Model: point projectile, zero-width wall, no drag, constant g (kit family limits). A real ball of radius r clears only if its centre passes more than r above the top; at 10.4 m this changes nothing. Not narrated.
  (b) Stage geometry (20 px per metre on both axes): sea line y = 900 px; cliff top and launch point at (100, 600) px; wall at x = 600 px, top at y = 740 px (8 m), drawn from the sea line; 35° path peak at (410.7, 491.2) px (15.53 m out, 5.44 m above the cliff, t = 1.0535 s); wall instant at (600, 531.6) px (t = 1.6955 s); the path continues to the sea at x = 1012.9 px (45.65 m, t = 3.096 s) without a label (landing range out of scope). Horizontal launch: wall instant at (600, 789.0) px, t = 1.3889 s, and it stops there.
  (c) Strobe images every 0.25 s for the 35° launch (7 images to the wall), every 0.25 s for the horizontal launch (6 images to the wall).
  (d) Pronunciations: "u x", "u y", "s x", "s y", "a y" as letters; "eighteen cos thirty-five"; "one point six nine six seconds"; "datum" as "day-tum".

- **Open decisions for root:**
  - **1. Opening frame (root; v05 designed in parallel).** Scene 1 was written assuming v05 ends on its cliff case with a wall standing in the path and a "?" where the path meets it. v05's design appeared on disk before this file was finished and its final frame was read (6 Nov): 30 m cliff at 12 px per metre, launcher plates with the barrel at 30°, the 30° trajectory to 64.0 m, a wall 40 m out with a "?" where the path crosses its line, the ledger with the teal-to-blue carry arrow and the tag "this time: x known, so find t first", and the chip naming this video. The assumption holds; "Opening frame" now describes the morph from that frame. Root to confirm once v05 is final. v05's tag pre-announces this video's key step, so scene 4 treats it as a callback. If v05 changes, only scene 1's first sentence and first visual beat need editing.
  - **2. The horizontal-launch contrast (learning review).** Added to the site case (scenes 1, 2, 8; about 450 characters). If the review finds it a detour, cut scene 8's last two sentences first, then the contrast entirely (narration stays above 5,500).
  - **3. Coded scene (kit plan).** The cliff, sea and wall are coded HSC-style line drawings, as the kit plan decided for lesson 3; no plate. Confirm, or commission a painted cliff-and-sea strip later (it would have to match the exact heights).
  - **4. Site note 2** (substituting the rounded 1.70 s) for root to add to correction 3.
Main question: *A ball is launched at 18 m s⁻¹, 35° above the horizontal, from a cliff 15 m above the sea. A wall 8 m tall (from sea level) stands 25 m away horizontally. Does it clear, and by how much?*
Entry knowledge: resolving a launch velocity; up positive with a_y = −9.8 m s⁻²; s_x = u_x t and s_y = u_y t + ½a_y t²; two columns, one clock.
Stops after: time to the wall, displacement at that time, absolute height, clearance, the rounding trap, the horizontal-launch contrast and the method. No landing range.
Handoff: v07, why two launch angles can reach the same target.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *u*, *v*, *a*, *s*, *t* with subscripts *x* and *y*. Paper background and handwritten headline face as the explainer house style.

### 1. hook (does it clear?)
> Last time we found where a ball lands when it's launched from a cliff. Now there's something in the way. This ball leaves a cliff top fifteen metres above the sea, at eighteen metres per second, thirty-five degrees above the **horizontal**. Twenty-five metres out stands a wall, eight metres tall, measured from sea level. The wall is lower than the cliff, so surely it clears? And what if the ball were launched straight sideways at the same speed? Make a **prediction**.

Visual: opens on v05's final frame (see "Opening frame"): the coded cliff, sea line, launcher and the wall with "?". The stage rescales smoothly (camera continue) to this case: cliff top 15 m above the sea line, a coded height scale "15 m" down the cliff face; v05's trajectory and its brackets fade. On "horizontal" the launcher barrel rotates from 30° to 35°, the steel ball sits at its tip, and an orange launch arrow "u = 18 m s⁻¹" with its angle arc "35°" draws from the tip. On "Twenty-five metres out" the wall draws up from the sea line at 25 m, with a teal distance bracket "25 m" along the sea line and a height scale "8 m (from sea level)". On "straight sideways" a ghost of the barrel at 0° and a second, dashed orange arrow appear at the same point, horizontal, "18 m s⁻¹". On "prediction" a 3 s `Countdown` runs beside four option chips: "both clear", "only the 35° launch", "only the sideways launch", "neither". No path is drawn yet.

### 2. reveal (one moment matters)
> Here's the thirty-five degree launch. It sails **over**. Now the sideways launch, same speed. It hits the **wall**. So a wall lower than the cliff guarantees nothing. What matters is how high the ball is at one moment, the moment it reaches the wall's horizontal position. How far above the wall top it passes then is called the clearance. Finding it is our whole **question**.

Visual: on "Here's" the 35° ball flies in real time (1.7 s to the wall, then on to the sea; the clock readout counts) leaving grey strobe images every 0.25 s and a faint orange trace; on "over" it passes the wall top and a small tick chip "clears" appears above the wall. On "sideways launch" the second ball flies horizontally with its own trace; on "wall" it stops against the wall face below the top with a small impact mark and a red chip "hits". On "one moment" both traces dim; a vertical dashed guide drops from the 35° trace through the wall at x = 25 m and the ball's strobe image at that instant brightens. On "clearance" an ink bracket between the wall top and that image reads "clearance = ?". On "question" the heading writes on: "Will a projectile clear a wall at a known horizontal position?" and the clock readout slides to the right column.

### 3. set up: one origin, two components
> Let's set it up. Put the origin at the launch point, with up as positive, so a y is minus nine point eight metres per second squared. The sea is fifteen metres below the launch point, and the wall top is eight metres above the sea. Eighteen metres per second is the size of the launch velocity, not either component, so resolve it: u x is eighteen cos thirty-five, about fourteen point seven metres per second, and u y is eighteen sin thirty-five, about ten point three, **upwards**. Keep the unrounded values in your calculator. And the wall is twenty-five metres away **horizontally**.

Visual: board changes (camera push) to the calculation layout: the stage small at the left with the cliff, wall and 35° trace faint; an axis key "+x towards the wall, +y up, origin at launch" at the launch point. Task strip: "Does the ball clear the wall? By how much?" Givens in two navy boxes under the column colours, writing as they are spoken: vertical "a_y = −9.8 m s⁻²", "sea level: s_y = −15 m", "wall top: 8 m above sea level"; on "resolve it" a right triangle draws from the launch arrow, teal along the horizontal, blue up the vertical; on "upwards" horizontal box "u_x = 18 cos 35° = 14.745 m s⁻¹" and vertical box "u_y = 18 sin 35° = 10.324 m s⁻¹" (screen shows four significant figures as stored values, grey tag "unrounded in calculator"). On "horizontally" horizontal box adds "s_x = 25 m (to the wall)".

### 4. step 1: when does it reach the wall?
> Which column can tell us when the ball reaches the wall? Not the vertical one, because the height there is exactly what we don't know. But we do know the horizontal distance, and horizontally the ball keeps a constant velocity. So s x equals u x t, which gives t equals twenty-five over fourteen point seven four, about one point six nine six **seconds**. Two columns, one clock, but this time the horizontal column sets the clock, and the time carries **across**.

Visual: the two-column ledger from v01 returns in the right column, teal "horizontal (x)" and blue "vertical (y)", the clock between them reading "t = ?". On "Not the vertical one" a grey "?" sits in the blue column against "s_y at wall". On "constant velocity" the teal column lights: "a_x = 0, s_x = u_x t". Equation strip: "s_x = u_x t" (teal). `AlignedAlgebra`: "t = s_x ÷ u_x = 25 ÷ 14.745"; on "seconds" "= 1.6955 s", and the stage's ball moves along the trace to the wall position with the clock counting to 1.6955 s, then freezes there (the "wall instant" marker). On "across" the curved carry arrow sweeps from the teal column, through the clock, into the blue column (the reverse of v01's arrow), and the clock holds "t = 1.6955 s".

### 5. step 2: how high at that moment?
> Now use that time in the vertical column. s y equals u y t plus a half a y t squared. The first term is how high the launch velocity alone would carry the ball by then, ten point three two times one point six nine six, about seventeen point five **metres**. The second term is how far gravity has pulled it **back down** in the same time, four point nine t squared, about fourteen point one metres. Subtract, and the ball is three point four two metres above the launch point when it reaches the **wall**. It's already past its peak and falling, but it's still above the cliff top.

Visual: the horizontal working dims to "t = 1.6955 s" beside the clock; the blue equation strip lights: "s_y = u_y t + ½a_y t²". `AlignedAlgebra`: "s_y = 10.324 × 1.6955 + ½(−9.8)(1.6955)²". On "metres" "u_y t = 17.505 m" and on the stage a blue bar rises from the launch level at the wall position, 17.5 m tall, tag "launch velocity alone". On "back down" "½a_y t² = −14.086 m" and a violet bar drops 14.1 m from the top of the blue bar, tag "gravity's pull". On "wall" "s_y = 17.505 − 14.086 = 3.4187 m" and the ball's strobe image at the wall instant lights at the bottom of the violet bar, 3.42 m above the launch level (a small bracket "3.42 m above launch"). On "past its peak" a short blue velocity arrow points down-right at the ball, tag "v_y < 0: falling", and the peak of the trace gets a small grey tick "peak".

### 6. step 3: one datum, then compare
> Careful here. Three point four two metres is measured from the launch point, but the wall is measured from the sea. Heights only compare when they're measured from one datum, one level that every height is measured from. Take sea level. The launch point is fifteen metres up, so the ball is at fifteen plus three point four two, eighteen point four two metres above the **sea**. The wall top is at eight. So the clearance is eighteen point four two minus eight, ten point four two, about ten point four metres. Yes, it **clears**.

Visual: on "measured from the launch point" the "3.42 m above launch" bracket pulses and a grey tag "launch datum" sits on a dashed line through the launch point; on "measured from the sea" the wall's "8 m" scale pulses with "sea datum". On "one datum" the sea line becomes a glowing dashed datum line labelled "datum: sea level, 0 m", and the launch-datum line fades. `AlignedAlgebra` (new block): on "sea" "height above sea = 15 + 3.4187 = 18.4187 m" and a navy bracket from the datum to the ball reads "18.42 m". Then "clearance = 18.4187 − 8 = 10.4187 m ≈ 10.4 m" and the scene 2 bracket "clearance = ?" fills "10.4 m". On "clears" a tick chip "clears by 10.4 m" writes beside the wall.

### 7. the rounding trap
> Here's a trap worth seeing. Suppose you round the time to one point seven zero seconds, then round each term to three figures. Seventeen point five minus fourteen point two gives three point **three**. That's twelve centimetres too low, and the clearance comes out as ten point three instead of ten point four. Subtracting two big, nearly equal numbers magnifies any rounding in them. So keep the full values in your calculator, and round only the final **answer**.

Visual: the scene 5 and 6 working slides left and dims; on the right a red-edged working block writes: "t ≈ 1.70 s", "17.5 − 14.2 = 3.3 m", on "three" a `ScribbleCircle` rings "3.3 m". On "twelve centimetres" a small comparison bar shows 3.42 m and 3.3 m side by side with the 0.12 m gap bracketed; the chip "clearance 10.3 m" appears and is crossed (red strike), with "10.4 m" ticked beside it. On "nearly equal" the two bars from scene 5 (17.5 and 14.1) reappear small, and a tag "small difference of big numbers". On "answer" a navy chip "carry unrounded values, round once at the end" writes.

### 8. why the sideways launch hit the wall
> Now the sideways launch that hit the wall. Same steps. It reaches the wall after twenty-five over eighteen, one point three nine **seconds**. It started with no vertical velocity, so in that time it simply falls four point nine t squared, about nine point four five metres. That leaves it about five point five metres above the sea, around two and a half metres below the wall **top**. It gets to the wall sooner, but it has no upward velocity to lift it first. The launch angle changes both when the ball arrives and how high it **is**.

Visual: camera change back to the full stage: both traces from scene 2, the 35° trace faint. Ledger small at the right. On "Same steps" a mini working block: "u_x = 18 m s⁻¹, u_y = 0". On "seconds" "t = 25 ÷ 18 = 1.3889 s" and the clock counts to it as the sideways ball replays to the wall. On "falls" "s_y = −4.9 × 1.3889² = −9.4522 m" and a violet bar drops 9.45 m from the launch level at the wall. On "top" "height = 15 − 9.4522 = 5.548 m; 5.548 − 8 = −2.452 m" and a red bracket below the wall top reads "2.45 m below the top". On "sooner" the two wall-instant clocks sit side by side, "1.39 s" (sideways) and "1.70 s" (35°); on "is" the two term-bar pairs stand side by side at the wall: no blue bar for the sideways launch, a 17.5 m blue bar for the 35° launch, tag "u_y lifts it first".

### 9. the method: where, when, how high, compare
> So here's the method for any obstacle. Where is it? When does the ball get there? How high is the ball at that time? Then compare, on one datum. Where, when, how high, **compare**. Notice the clock runs the other way from a landing problem. There, the vertical motion gave us the time. Here, the obstacle's horizontal position gives the time, and the vertical column turns that time into a **height**.

Visual: board clears to the ledger alone with the clock. Four chips write in order beside it as they are spoken: "Where: s_x to the obstacle", "When: t = s_x ÷ u_x", "How high: s_y = u_y t + ½a_y t²", "Compare: same datum". On "compare" the handwritten line writes large above: "Where, when, how high, compare." On "landing problem" a small grey inset shows v05's case with the carry arrow blue to teal; on "height" the main carry arrow sweeps teal to blue. Hold about 2 seconds.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. A ball is launched at twenty point zero metres per second, thirty degrees above the horizontal, from a platform two point zero metres above level ground. A wall three point zero metres high stands twenty point zero metres away horizontally. Neglecting air resistance, determine whether the ball clears the wall, and by how much. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "A ball is launched at 20.0 m s⁻¹ at 30° above the horizontal from a platform 2.0 m above level ground. A wall 3.0 m high stands 20.0 m away horizontally from the launch point. Neglect air resistance and take g = 9.8 m s⁻². Determine whether the ball clears the wall and, if so, by how much. (3 marks)" A small coded HSC-style diagram beside it: platform, wall, the two distances and heights labelled as in the question, the launch arrow and angle; no path drawn. The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 11. feedback 1 (brief)
> u x is twenty cos thirty, about seventeen point three, so the ball reaches the wall after twenty over seventeen point three, one point one five **seconds**. Then s y is ten t minus four point nine t squared, about plus five point zero one metres. On the ground datum that's two plus five point zero one, about seven point zero one metres, so it clears the three metre wall by about four point zero one **metres**. The classic slip is comparing five point zero one with three and forgetting the **platform**.

Visual: card shrinks to the top; "platform 2.0 m above level ground" and "20.0 m away horizontally" underline as they are used. Ledger small: teal "t = 20.0 ÷ (20.0 cos 30°) = 20.0 ÷ 17.321 = 1.1547 s" on "seconds"; blue "s_y = 10.0(1.1547) − 4.9(1.1547)² = 11.547 − 6.533 = 5.0137 m"; then "height = 2.0 + 5.0137 = 7.0137 m; clearance = 7.0137 − 3.0 = 4.0137 m ≈ 4.01 m" on "metres". On "platform" a chip "5.01 m − 3.0 m = 2.0 m clearance" fades in and is crossed (caption "use one datum: the ground"). Hold about 1 second.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. A ball is launched from a point twelve point zero metres above the ground. When it reaches a wall, it is two point six metres below its launch point. The wall is nine point zero metres tall. Determine whether the ball clears the wall, and by how much. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A ball is launched from a point 12.0 m above level ground. When it reaches the horizontal position of a wall, its vertical displacement from the launch point is −2.6 m (up positive). The wall is 9.0 m tall. Determine whether the ball clears the wall and, if so, by how much. (2 marks)" A small coded diagram: launch point, ground line, wall; no ball position drawn. The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 2 (brief)
> Put both heights on the ground datum. The ball is at twelve minus two point six, nine point four metres above the **ground**. The wall top is at nine point zero, so the ball clears it by zero point four metres, just forty centimetres. The slip is seeing minus two point six and deciding it must hit, or comparing two point six with nine directly. Heights only compare on the same **datum**.

Visual: card shrinks to the top; "12.0 m above level ground" and "−2.6 m" underline. On the diagram a datum line glows at the ground; on "ground" a navy bracket "12.0 − 2.6 = 9.4 m" from the ground to the ball's position at the wall; the wall top "9.0 m"; a small bracket "0.4 m" between them. On "datum" a chip "s_y is negative, so it hits" fades in and is crossed (caption "negative means below launch, not below the wall"). Hold about 1 second.

### 14. handoff
> So to clear a wall, find when the ball gets there, then how high it is. Now take the wall away and put a target on level ground, seventy-two metres from a launcher firing at thirty metres per second. What angle should it aim at? It turns out there are two **answers**, and next time we'll see **why**.

Visual: board clears to the stage; the wall, cliff and sea slide away (camera continue) and a level coded ground line draws across, with the launch point at its left end and a small coded target flag 72 m away (scale changes to 12 px per metre; author note b). On "target" a teal bracket "72 m" along the ground and an orange launch arrow "u = 30 m s⁻¹" with an angle arc "θ = ?". On "answers" two dashed orange paths draw from the launch point to the flag, one low and one high (the true 25.8° and 64.2° shapes, no angle values shown), each with a small "θ = ?" at its launch. On "why" a chip writes "Next: why can two launch angles reach the same target?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 15. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. An obstacle matters only at the instant the ball reaches its horizontal position.
2. Time to the obstacle from the horizontal motion: t = s_x ÷ u_x (u_x constant).
3. Height at that time: s_y = u_y t + ½a_y t² (up positive, a_y = −9.8 m s⁻²): the rise from u_y minus the drop from gravity.
4. Convert to one datum before comparing: height above datum = launch height + s_y; clearance = that height − wall height. Carry unrounded values; round once at the end.

Memory aid (large, on the notes screen): *Where, when, how high, compare.*

## Teaching checks

- **Does it explain causes?** Why the wall is not cleared automatically by being lower than the cliff: the ball can fall below launch height before it arrives (2, 8). Why the time comes from the horizontal column: the horizontal distance is known and u_x is constant, while the height at the wall is the unknown (4). Why s_y is positive but the ball is falling: past the peak, still above launch level (5). Why one datum: two heights measured from different levels cannot be subtracted (6). Why early rounding fails: the answer is a small difference of two large numbers (7). Why the sideways launch is lower: no u_y to lift it, though it arrives sooner (8).
- **Misconceptions addressed:** a lower wall is automatically cleared (1, 2, 8); time from the vertical motion by habit (4); s_y compared directly with a wall height (6; crossed in 11); a negative s_y means "hits" (crossed in 13); rounding before subtracting (7).
- **One idea at a time:** the result is shown before the method (2); one step per scene (4, 5, 6); the trap after the correct answer (7); the method named only after it has been used twice (9).
- **Video makes it easier:** the student sees both outcomes first (2), watches the clock freeze when the ball reaches the wall (4), sees the two terms as bars at the wall (5), sees the datum line take over the heights (6), and sees the sideways ball's missing blue bar (8).
- **Response opportunity:** one prediction (3 s countdown) and two unseen HSC-style tasks with every condition visible (heights and their datums, distances, speed, angle, g, negligible air resistance), 10 s each with the invitation to pause; nothing answer-bearing. One crossed mistake each; feedback about 31 s and 24 s.
- **Avoided double teaching:** resolving the launch velocity (v02), the vertical displacement equation and up-positive signs (v03, v05) and two columns, one clock (v01) are recalled in a clause.
- **Syllabus coverage:** `P5-IQ1-02` (launch height, initial velocity and launch angle related to height at a position) and `P5-IQ1-04` (quantitative prediction with the constant-velocity and constant-acceleration equations).
- **Out of scope by design:** landing range for this case (route stop; v05's method), minimum clearing speed, two launch angles (v07).

## Practice questions and model answers

**Attempt 1 (scene 10; original wording, HSC style, 3 marks suggested, not an official marking scheme).** "A ball is launched at 20.0 m s⁻¹ at 30° above the horizontal from a platform 2.0 m above level ground. A wall 3.0 m high stands 20.0 m away horizontally from the launch point. Neglect air resistance and take g = 9.8 m s⁻². Determine whether the ball clears the wall and, if so, by how much."
Model answer: Up positive, origin at the launch point. u_x = 20.0 cos 30° = 17.32 m s⁻¹; u_y = 20.0 sin 30° = 10.0 m s⁻¹. Time to the wall: t = s_x ÷ u_x = 20.0 ÷ 17.32 = 1.155 s. Vertical displacement then: s_y = 10.0(1.155) − 4.9(1.155)² = 11.55 − 6.53 = +5.01 m. Height above the ground = 2.0 + 5.01 = 7.01 m, which is above the 3.0 m wall: it clears by 4.01 m. Classic mistake (crossed): comparing 5.01 m with 3.0 m (ignoring the platform).

**Attempt 2 (scene 12; original wording, HSC style, 2 marks).** "A ball is launched from a point 12.0 m above level ground. When it reaches the horizontal position of a wall, its vertical displacement from the launch point is −2.6 m (up positive). The wall is 9.0 m tall. Determine whether the ball clears the wall and, if so, by how much."
Model answer: On the ground datum the ball's height at the wall is 12.0 + (−2.6) = 9.4 m. The wall top is 9.0 m above the ground, so the ball clears it by 9.4 − 9.0 = 0.4 m. Classic mistake (crossed): "s_y is negative, so it hits the wall".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Site case (unchanged) | u = 18 m s⁻¹, θ = 35°, cliff 15 m above sea level, wall 25 m out, 8 m tall from sea level, g = 9.8 m s⁻² | 1 to 7 |
| Components | u_x = 14.7447 m s⁻¹ (≈ 14.7); u_y = 10.3244 m s⁻¹ (≈ 10.3) | 3 |
| Time to wall | t = 25 ÷ 14.7447 = 1.69552 s (≈ 1.696, 1.70) | 4 |
| Terms | u_y t = 17.5052 m; ½gt² = 14.0865 m | 5, 7 |
| Displacement | s_y = 3.41872 m (≈ 3.42) | 5 |
| Vertical velocity at wall | v_y = −6.2917 m s⁻¹ (screen tag only: "falling") | 5 |
| Peak | t = 1.0535 s, 5.4384 m above the cliff, 15.53 m out (stage geometry only) | 5 |
| Absolute height | 15 + 3.41872 = 18.41872 m (≈ 18.42) | 6 |
| Clearance | 10.41872 m ≈ 10.4 m | 6 |
| Rounded working (crossed) | t = 1.70 s; 17.5 − 14.2 = 3.3 m; clearance 10.3 m; error 0.1187 m (≈ 12 cm) | 7 |
| Sideways launch | t = 25 ÷ 18 = 1.38889 s; drop 9.45216 m; height 5.54784 m (≈ 5.5); 2.45216 m below the top (≈ 2.45, "two and a half") | 1, 2, 8 |
| Landing (not narrated) | t = 3.0958 s, 45.65 m from the cliff base (stage geometry only) | 2 |
| A1 | u_x = 17.3205 m s⁻¹; t = 1.15470 s; u_y t = 11.5470 m; 4.9t² = 6.5333 m; s_y = 5.01367 m; height 7.01367 m; clearance 4.01367 m ≈ 4.01 m | 10, 11 |
| A2 | 12.0 − 2.6 = 9.4 m; 9.4 − 9.0 = 0.4 m | 12, 13 |
| Handoff | 30 m s⁻¹, 72 m; paths at 25.81° and 64.19° (not labelled) | 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov); Codex to re-check.

- 18 cos 35° = 14.744737; 18 sin 35° = 10.324376; t = 25 ÷ 14.744737 = 1.695520 s.
- 10.324376 × 1.695520 = 17.505188 m; 4.9 × 1.695520² = 14.086466 m; s_y = 3.418723 m; 15 + s_y = 18.418723 m; − 8 = 10.418723 m.
- v_y = 10.324376 − 9.8 × 1.695520 = −6.291723 m s⁻¹; peak at t = 1.053508 s, height 5.438405 m above launch, x = 15.533694 m; landing t = 3.095836 s, x = 45.647281 m.
- Rounded working: 10.32 × 1.70 = 17.544 (→ 17.5); 4.9 × 1.70² = 14.161 (→ 14.2); 17.5 − 14.2 = 3.3; with exact u_y and t = 1.70 the difference is 3.3904 m.
- Sideways: 25 ÷ 18 = 1.388889 s; 4.9 × 1.388889² = 9.452160 m; 15 − 9.452160 = 5.547840 m; 5.547840 − 8 = −2.452160 m.
- A1: 20 cos 30° = 17.320508; t = 1.154701 s; 10 × t = 11.547005; 4.9t² = 6.533333; s_y = 5.013672 m; 7.013672 m; clearance 4.013672 m.
- A2: 12.0 − 2.6 = 9.4; 9.4 − 9.0 = 0.4.
- Stage geometry (author note b): 20 px per metre; wall instant y = 600 − 3.4187 × 20 = 531.6 px; sideways wall instant y = 600 + 9.4522 × 20 = 789.0 px; peak (410.7, 491.2) px; sea entry x = 100 + 45.647 × 20 = 1012.9 px.

## Memory aid check

- **"Where, when, how high, compare."** Meaning, as said in scene 9: locate the obstacle horizontally, use the constant horizontal velocity to find when the ball arrives, use the vertical equation to find its height then, and compare on one datum. Assumptions checked: the obstacle is thin (zero width) and the ball is a point (kit family limits; author note a); u_x is constant (no drag, the model from v01); the vertical equation needs constant a_y (constant g). A thick wall would need the height checked at its front and back faces (on the way down, the back face is the binding one); not taught. It helps a new case: A1 and A2 use it directly, and it reuses "two columns, one clock" with the clock set from the other column. Introduced after the method has been used (4 to 8).
- **Considered, not used:** "Cliff is not the datum" (only one step); "Time from x for walls, time from y for landings" (true but a rule to memorise, not a sequence to follow).

## Narration length estimate

Revision 1 count (6 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **6,233 characters**, 15 scenes. Characters per scene (1 to 15): 464, 365, 579, 456, 569, 522, 457, 525, 393, 361, 495, 283, 382, 293, 75. At 13.3 characters per second the speech is about 469 s; add about 3 s for the prediction countdown, about 4 s for the real-time flights in scene 2, 2 s for the scene 9 hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 55 s more of the quiet notes hold (about 88 s of holds and countdowns): **about 557 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 8's last two sentences; scene 9's "Notice ..." sentences (keep the chips); scene 7's last sentence.

## Opening frame

v05's final frame (designed in parallel; read from `phys-y12-m5-v05.md` on 6 Nov, root to confirm when v05 is final): paper background; 12 px per metre; a coded HSC-style cliff 30 m above a coded sea-level line; the launcher plates on the cliff edge with the barrel at 30° and the readout "u = 20 m s⁻¹, θ = 30°"; the 30° trajectory to its landing mark with brackets "64.0 m" and "−30 m"; a coded wall 40 m out, top 20 m above sea level, with a dashed vertical line from its top to the path and a "?"; the ledger small at the top right with the teal-to-blue carry arrow and the tag "this time: x known, so find t first"; the steel ball at the barrel tip; heading "Landing below the launch level: where does it land?"; chip "Next: will a projectile clear a wall at a known horizontal position?". Scene 1 morphs this (camera continue) into the site case: the scale changes to 20 px per metre, the cliff becomes 15 m, v05's trajectory, brackets and readout fade, the wall moves to 25 m with an 8 m height scale, the barrel turns to 35° and the readout becomes "u = 18 m s⁻¹, θ = 35°". The ledger and its tag stay (callback in scene 4). Only scene 1's first sentence and first visual beat depend on v05.

## Final frame

The last explained frame (end of scene 14, before the key-notes board): paper background; a level coded ground line across the stage (12 px per metre); the launch point at its left end with an orange launch arrow "u = 30 m s⁻¹" and an angle arc "θ = ?"; a small coded target flag 72 m away with a teal bracket "72 m" along the ground; two dashed orange paths from the launch point to the flag, one low (25.8° shape, peak 8.7 m) and one high (64.2° shape, peak 37.2 m), each with a small "θ = ?" at its launch; no angle values, no times. The two-column ledger and clock sit small at the top right. Heading top-left unchanged ("Will a projectile clear a wall at a known horizontal position?"); a chip under the paths reads "Next: why can two launch angles reach the same target?". v07 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m5-v06` (route phys-y12-m5-v06). Suggested explainer folder `src/explainer/lessons/phys-y12-m5-v06` and build folder `docs/production/claude-pm/lessons/p-y12-m5-v06` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 15 scene headings, all `### N.`): hook, reveal, set-up, time-to-wall, height-at-wall, datum-clearance, rounding-trap, sideways-contrast, method, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`: the learner reads the worded question and works during the countdown) and key-notes (`hold`: the learner copies four notes). Scene 1 is `explain` with a 3 s prediction countdown at its end. `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: strobe projectile stage with wall and collision stop (kit gap 1, extended), two-column ledger with reversible carry arrow (kit gap 2), term bars, datum line, `AlignedAlgebra`, `NumberTicker` for the clock, `ScribbleCircle`, `PenArrow`, path draw-on, `Countdown`, `CameraStage` push and pull. Transitions (`pickTransition`): 1 to 2 camera continue (same stage); 2 to 3 camera push to the calculation layout; 3 to 4 to 5 to 6 camera continue; 6 to 7 camera continue (working slides left); 7 to 8 camera change back to the full stage; 8 to 9 clear change; attempts and feedback card shrink to the top; 13 to 14 clear change to the stage; 14 to 15 fade to the notes board.

Holds: hook (3 s countdown), method (2 s), attempt-1, attempt-2 (10 s countdown after the speech, "Pause here to answer." on screen), key-notes (quiet notes hold, about 60 s). Review evidence paths for the LESSONS entry: `learning_review` = `checks/p-y12-m5-v06-learning-review.md`, `science_check` = `checks/p-y12-m5-v06-physics-check.md`.

## Assets

Have: `public/assets/physics/y12p-launcher-base-v1.png` and `y12p-launcher-barrel-v1.png` (requested in v02, used in v05; not yet painted when this design was written): scenes 1, 2 and 8 (barrel at 35° and 0°). `phys-y11-steel-ball-v1.png` (800 × 800, RGBA): at the barrel tip before launch, scene 1. In flight the ball is the v01 coded strobe dot (at 20 px per metre a ball plate would be a speck). The v01 visual system (strobe stage, ledger, colour key) is reused in code.
- **Checked, not used:** `phys-y11-spring-launcher-whole-v1.png` (horizontal plunger; cannot show a 35° launch).

Need (new plates): none.

Coded: cliff, sea line, wall, platform (the launcher and ball before launch are plates), ground, target flag, height and distance scales, strobe dots and traces, launch and velocity arrows, term bars, datum line, ledger, clock, calculation strips, crossed chips, attempt cards and diagrams, countdowns, key notes board.

Kit gaps (for the v06 build brief; extend the v01 gaps):
1. **Strobe stage, obstacle extension.** A zero-width wall at a set x with a top height on a chosen datum; a "wall instant" marker that freezes the clock at x = wall; a collision stop for a path that meets the wall face below its top; launch height above a datum line; every readout computed from the same model as the drawing (reuse `m5-obstacle-clearance` geometry).
2. **Term bars.** A blue bar (u_y t) up from launch level and a violet bar (½gt²) down from its top at a given x, with readouts.
3. **Datum line.** A dashed line that can glow and relabel every height readout on the stage to "above <datum>".

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the physics of every learner-visible claim: time to a wall from s_x = u_x t with constant u_x; s_y = u_y t + ½a_y t² with up positive; the ball is falling but above launch level at the wall; absolute height = 15 m + s_y on the sea datum; clearance 10.4 m; the rounded working gives 3.3 m and 10.3 m; the sideways launch reaches the wall 2.45 m below its top.
3. Confirm the memory aid's assumptions (see "Memory aid check").
4. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
5. Confirm both attempt cards are original in wording, carry every condition the answer needs (heights with their datums, distances, speed, angle, g, negligible air resistance) and show nothing answer-bearing.
6. Confirm the syllabus quotes match the route JSON `syllabusActions` exactly and are labelled 2017.
7. Confirm no person, hand, face or body outline is drawn or requested (the ball is "launched"; no kicker).
8. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling in narration and screen text.
9. Confirm the narration character count and per-scene counts by script with the build parser rules.
10. Report site note 2 under Decisions to root (owner record only; the site is read-only here).

## YouTube metadata (draft)

Title: Will the Projectile Clear the Wall? | HSC Physics Module 5

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module5/lesson03.sa.html

A ball leaves a 15 m cliff at 18 m/s, 35° above the horizontal. A wall 8 m tall stands 25 m away. Does it clear, and by how much? Find when the ball reaches the wall from its horizontal motion, how high it is then from its vertical motion, and compare on one datum. See why rounding early gives the wrong clearance, and why a sideways launch at the same speed hits the wall. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 5: Advanced Mechanics.
Syllabus content (NSW Physics Stage 6, 2017):
"apply the modelling of projectile motion to quantitatively derive the relationships between the following variables: initial velocity; launch angle; maximum height; time of flight; final velocity; launch height; horizontal range of the projectile (ACSPH099)"
"solve problems, create models and make quantitative predictions by applying the equations of motion relationships for uniformly accelerated and constant rectilinear motion"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: landing point when launch and landing heights differ. Next: why two launch angles can reach the same target.

#HSCPhysics #Physics #ProjectileMotion #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from the v01 to v05 entry; check that the hook's four options are answerable in 3 s; that the term bars make "rise minus drop" visible; that the datum switch is followable; that the attempt cards give nothing away), then the physics check and the Codex error check.
- The wall instant, term bars and datum line carry the explanation; judge them at playback speed in the voiced preview, not from stills. Every bar, bracket and readout must come from the same model as the drawing.
