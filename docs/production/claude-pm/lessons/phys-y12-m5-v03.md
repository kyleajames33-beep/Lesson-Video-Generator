# Year 12 Physics M5 V03: Height, flight time and landing velocity. What determines height, flight time and landing velocity at the launch level? (design)

Status: Revision 2 (6 Nov 2026): brief 187 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 5,659 characters, 16 scenes, about 510 s, counted by script with the build parser rules (see "Narration length estimate").

Scope: third video of Year 12 Physics (Physics Stage 6, 2017 syllabus), Module 5 (Advanced Mechanics). Templates: `phys-y11-fa1-v01.md` (structure, voice, layout), `math-a12-d10.md` (calculation layout), `bio-y11-fa1-v05.md` (plates and asset brief format); visual system and colour key from `phys-y12-m5-v01.md` and `-v02.md`. Pre-design pack: `../pre-design/phys-y12/phys-y12-m5-v03.md` (every number recalculated below). Site lessons read in full (6 Nov, read-only): lesson 3 "Problem Solving: Projectiles" (frame and protocol, worked examples 1 to 3, activities, key formulas, extended answers, short answers), `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson03.sa.html`, SHA256 `8bd974fedf652636912d936d6c79b00b2642878ead6e43a2e89cd5f70038006a`; and lesson 2 "Launch Angle Analysis" (its derivation of the level-ground flight time and the "Apply 6 marks" answer), `.../module5/lesson02.sa.html`, SHA256 `c3b81856cdb5c671c54afdacf36d022201f5c8b5a241352609384e54bddbc362` (both recomputed 6 Nov; match the pack and the route). Route entry: `phys-y12-m5-v03`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Derive height and equal-level flight time; track signed vertical velocity and unchanged horizontal velocity. Use the 25 m/s at 50 degrees case. Stop before range optimisation." Next: "phys-y12-m5-v04: Why do complementary launch angles have the same level-ground range?"

Owner rules applied: as v01 and v02 (2017 syllabus quoted exactly; one main question; no people: the site's thrown ball is the launcher's ball; painted launcher and ball, everything else coded; plates never stretched; one reasoning stage at a time; task strip, equation strip, grouped givens; every number recalculated; g = 9.8 m s⁻²; data sheet symbols; 3 s prediction, 10 s attempt countdowns; brief feedback with one crossed mistake; original HSC-style questions; optional key notes; Australian spelling; no em dashes; causes before rules). Year 11 constant-acceleration equations and factorising are recalled in a phrase; v02's components and peak condition are recalled, not re-taught.

Syllabus content (Physics Stage 6 (2017), Module 5 Advanced Mechanics), quoted from the route JSON `syllabusActions`:

- `P5-IQ1-02`: "apply the modelling of projectile motion to quantitatively derive the relationships between the following variables:" "initial velocity", "launch angle", "maximum height", "time of flight", "final velocity", "launch height", "horizontal range of the projectile (ACSPH099)" (this video: maximum height, time of flight and final velocity at the launch level, each related to initial velocity and launch angle; range computed for one case)
- `P5-IQ1-04`: "solve problems, create models and make quantitative predictions by applying the equations of motion relationships for uniformly accelerated and constant rectilinear motion"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 53)

**Boundary:** opens on v02's final frame (25 m s⁻¹ at 50°, the ball at its peak, three dashed "?"). Teaches: maximum height from v_y² = u_y² + 2a_y s_y with v_y = 0 (H = u_y²/2g); equal-level flight time from s_y = 0 (two roots; t = 0 is the launch; T = 2u_y/g); why the descent takes as long as the climb; landing velocity (v_x unchanged, v_y = −u_y, so the same speed at the mirrored angle); the range of this one case as u_x T; the general forms H = u² sin²θ/2g and T = 2u sinθ/g and what doubling u does (T × 2, H × 4); the equal-level condition on the shortcuts. Uses site lesson 3 worked example 2 unchanged (18.7 m, 1.95 s, 3.91 s, 62.8 m). Stops before the range formula and any angle comparison (v04) and before unequal heights (v05).

## Decisions

- **Learner question (route wording kept).** "What determines height, flight time and landing velocity at the launch level?" The answer: the vertical component u_y alone sets the height (through u_y²) and the time (through u_y), because gravity brings u_y to zero and back; the horizontal component is untouched, so the landing velocity is the launch velocity reflected; all of this needs landing at the launch level.
- **Opening frame (v02 handoff).** v02's final frame (see v02 "Final frame"): launcher at 50° on level ground, the rising half drawn, the ball at the peak with only its teal arrow "16.1 m s⁻¹", the falling half dashed, brackets "?" (height), "t = ?" (time) and a dashed landing arrow "v = ?", ledger with u_x = 16.1 and u_y = 19.2 m s⁻¹. Scene 1 speaks over it; the three "?" become the scene order (height 2, 3; time 4, 5; landing 6).
- **Prediction (new): landing speed faster, slower or the same?** A natural split of intuitions ("gravity speeds it up", "it slows down in the air"); the answer in scene 6 (same speed, mirrored direction) follows from the components, not from a rule.
- **Height (site worked example 2(a) and the "Apply 6 marks" step 4).** The equation without t is chosen because the time isn't needed (a choice explained, not announced). H is the height above the launch point (site key formula wording).
- **Flight time (site lesson 2 derivation and "Apply 6 marks" step 3; pack trap "the root t = 0 is launch, not landing").** s_y = 0 is factorised on screen; both roots are kept visible and t = 0 is labelled "launch". The doubling is explained causally (gravity removes and restores u_y at the same rate), not just asserted as symmetry.
- **Landing velocity (route "track signed vertical velocity and unchanged horizontal velocity").** v_y is tracked with its sign through the flight on a small v_y against t line beside the stage (kit: `VelocityTimeGraph`, reconfigured to 25 m s⁻¹ at 50°, g = 9.8; pack section 5): it falls in a straight line from +19.15 through zero at 1.95 s to −19.15 at 3.91 s, while the teal v_x line stays flat at 16.07.
- **Range of this case (site worked example 2(d)).** R = u_x T = 62.8 m, shown as the clock carrying T to the teal column. No general range formula and no angle comparison (route stop; v04).
- **Relationships and the site correction (pack section 3; `../site-corrections-phys-y12.md` records 1 and 2).** Site lesson 2's "Apply 6 marks" answer says "All three grow with the square of the launch speed". The design teaches the corrected relationship: at a fixed angle, T is proportional to u (doubling u doubles T) and H to u² (doubling u gives four times H). Shown with the 25 → 50 m s⁻¹ case (T 3.91 → 7.82 s; H 18.7 → 74.9 m, screen only). The site's text is not quoted to learners.
- **Conditions (pack section 4; site "Symmetrical flight" vocabulary).** T = 2t_up and "landing speed = launch speed" are flagged as equal-level results, with one sentence that a cliff breaks them (v05 owns that case).
- **Memory aid (new; see "Memory aid check"): "On level ground, the way down mirrors the way up."** Introduced after the height, time and landing results it summarises, with its condition in the same sentence.
- **Attempts (pack candidates, original wording).** A1: 14.0 m s⁻¹ at 45°: H = 5.00 m, T = 2.02 s (crossed: using 14.0 for u_y, giving 10.0 m and 2.86 s). A2: 19.6 m s⁻¹ at 30°: t_up = 1.00 s, T = 2.00 s, landing 19.6 m s⁻¹ at 30° below the horizontal (components 17.0 and −9.80 m s⁻¹) (crossed: landing at 30° above the horizontal).
- **Sign convention and significant figures.** +y up, origin at launch, a_y = −9.8 m s⁻². Worked example values carried unrounded (u_y = 19.1511, t_up = 1.95420, T = 3.90839) and stated to three significant figures, matching the site (18.7 m, 1.95 s, 3.91 s, 62.8 m).
- **Handoff (route next).** Scene 15 launches the same speed at 40°: a lower, shorter flight that lands at the same 62.8 m mark (R = 62.81 m at both angles). See "Final frame".
- **Site sources used:** lesson 3 worked example 2 (scenes 3, 5, 6, 7); lesson 3 key formulas (h_max, t_up); lesson 3 vocabulary "Symmetrical flight" (scene 9); lesson 3 misconception "At the top of the path, the velocity is zero" (recalled from v02 in scene 2); lesson 2 derivation of t_flight from s_y = 0 (scene 4); lesson 2 "Apply 6 marks" steps 3 and 4 (scenes 2, 4) and step 6 (corrected, scene 8). Not used: lesson 3 worked example 1 (launch speed from range, needs the range formula: v04 or later); worked example 3 (wall: v06); the shot put (a person); Activity 2 (balcony: v05 territory).
- **Site notes:** the lesson 2 errors are already logged (site corrections 1 and 2) and are corrected here, not repeated. Checked and correct in lesson 3: worked example 2 (19.15² = 366.7; 366.7/19.6 = 18.7 m; 19.15/9.8 = 1.95 s; 2 × 1.954 = 3.91 s; 16.07 × 3.91 = 62.8 m, and 62.81 m at full precision); key formulas.
- **Pack questions answered:** both candidates used as attempts (unchanged numbers); the pack's visual need (vertical velocity decreasing through zero with the horizontal component visible, the graph point coupled to the moving projectile, configured to 25 m s⁻¹ at 50°) is the stage with the v_y and v_x lines (scenes 4 to 6).
- **Cause chain taught, in order:** (1) at the top v_y = 0, and the time isn't needed, so the equation without t gives H = u_y²/2g (2, 3); (2) back at the launch level s_y = 0; factorising gives t = 0 (launch) or T = 2u_y/g (4); (3) gravity removes and restores u_y at the same rate, so the descent equals the climb (5); (4) v_x is unchanged and v_y returns to −u_y, so the landing speed equals the launch speed and the angle is mirrored (6); (5) the clock carries T to the horizontal column for the range (7); (6) T ∝ u, H ∝ u² at a fixed angle (8); (7) all of this needs equal levels (9).
- **Entry knowledge (route):** Year 11 vectors, Newton's laws, trigonometry, constant acceleration and work-energy; v01 (columns and clock), v02 (components, the peak condition v_y = 0, t_up = u_y/g).
- **Learner-visible vocabulary (plain meaning at first use):** maximum height H (the highest point's height above the launch point, scene 2); time of flight T (the whole time in the air, 4); root (an answer to an equation, 4); final or landing velocity (the velocity just before landing, 6); symmetrical flight (a flight that lands at its launch level, 9).
- **Legacy logic ported:** none.
- **New explainer motion (coded, plus plates):** v01's strobe stage and ledger (kit gaps 1, 2), configured to 25 m s⁻¹ at 50° (15 px per metre on both axes; velocity arrows 8 px per m s⁻¹); a coupled velocity graph (`VelocityTimeGraph` from `src/explainer/physics/projectile/components.tsx`, reconfigured: blue v_y line and teal v_x line against t, a dot that moves with the stage ball's clock); mirror line through the peak (dashed vertical) and a reflection of the rising half onto the falling half; `AlignedAlgebra` with a factorising step; `Countdown` (3 s in scene 1; 10 s in 11 and 13); `QuestionCard`, `Chip` with `cross`, `PenArrow`, `ScribbleCircle`, `HandText`, `KeyNotes`, `Heading`.
- **Board layout and colour key:** as v01 and v02. The velocity graph sits under the ledger in the right column (about 560 × 300 px).
- **Colour roles (Revision 2, fixed for the whole video; the v01 key):** horizontal quantities (u_x, v_x, the teal v_x line, the range bracket) teal; vertical quantities (u_y, v_y, H, the blue v_y line, t_up) blue; launch and landing velocity, the trajectory and the speed slider orange; g and a_y violet; givens navy; clock ink; the 40° partner path dashed blue-grey; framed answers in a dark-ink box; crossed mistakes and their hand tags red. Hand-font teacher tags take the colour of the quantity they mark, and the same colours run through the stage, ledger, graph, working, readouts and key notes.
- **Type sizes (Revision 2, 1080p):** the current working line at least 44 px (scene 3, 4 and 5 rows 52 px; the boxed "H = u_y² ÷ 2g" and "T = 2u_y ÷ g" 60 px); live readouts (clock, v_y, v_x in scene 5; u, T, H in scene 8) about 52 px; supporting lines, givens and graph axis labels 30 to 36 px; hand-font tags at least 30 px; nothing a student must read below 26 px. All text above the bottom 12% of the frame.
- **Anchor (Revision 2).** The painted launcher (`y12p-launcher-base-v1.png`, `y12p-launcher-barrel-v1.png`, delivered in brief 187 and inspected on `assets/brief187-qa/launcher-rotations.jpg`) and the steel ball are on screen from the first frame (v02's final frame) and in every stage scene (1, 5 to 10, 15).
- **Simulation (Revision 2).** Two live simulations: the coupled flight in scene 5 (the ball flies while the graph dot moves and live readouts "t", blue "v_y" and teal "v_x" tick, v_y passing through zero at the peak and reaching −19.15 at landing), and a launch-speed slider in scene 8: at a fixed 50°, an orange "u" slider runs from 25 to 50 m s⁻¹ while the path grows and readouts "T" and "H" update with ratio chips "× 2" and "× 4" (30: 4.69 s, 26.9 m; 35: 5.47 s, 36.7 m; 40: 6.25 s, 47.9 m; 50: 7.82 s, 74.9 m).
- **Stage changes (Revision 2).** The Revision 1 run from scene 1 to 7 stayed on one stage-plus-ledger board for about 200 s. Revision 2 stages it: scene 1 stage (v02's frame); scene 2 ledger large beside the stage; scene 3 full-width calculation layout with the stage as a thumbnail; scene 4 full-width factorising with the launch-level stage strip under it; scene 5 stage plus coupled graph; scene 6 camera push to the landing point (the landing triangle large); scene 7 camera pull back to the whole flight for the range. No set-up runs past about 45 s.
- **No human figures.**
- **Author notes (not learner copy):**
  (a) H is measured above the launch point (the barrel tip), taken as level with the landing ground (v02 author note a).
  (b) The relationships in scene 8 hold at a fixed launch angle and for equal launch and landing levels. "Four times as high" follows from H ∝ u²; the 50 m s⁻¹ figures (T = 7.82 s, H = 74.9 m) are screen only.
  (c) The landing angle equals the launch angle only for equal levels and zero air resistance.
  (d) The "factor of t" step: u_y t − 4.9t² = t(u_y − 4.9t) = 0. Students may meet it as a quadratic; both readings give the same roots.
  (e) Pronunciations: "u y squared over two g"; "two u sin theta over g"; "sixty-two point eight metres".

- **Open decisions for root:**
  - **1. Site correction wording (root).** Scene 8 teaches T ∝ u and H ∝ u² and crosses "T ∝ u²" without naming the site. Confirm the site fix (records 1 and 2) is scheduled, so the site and the video agree.
  - **2. Scene 8 area picture (learning review).** The v_y against t triangle "four times as big" links H to the area under the graph (Year 11 idea). If the review finds it too much for one sentence, keep only the two readouts.
  - **3. Site link.** The description links lesson 3 (the worked example's page); lesson 2 holds the derivations. Root to choose one link or both.

Main question: *A ball is launched at 25 m s⁻¹, 50° above the horizontal, and lands back at its launch level. How high does it go, how long is it in the air, how fast is it moving when it lands, and what decides each?*
Entry knowledge: Year 11 constant-acceleration equations; v01 and v02 (columns and clock; components; v_y = 0 at the top).
Stops after: H = u_y²/2g, T = 2u_y/g, landing velocity mirrored, R = u_x T for this case, T ∝ u and H ∝ u² at a fixed angle, the equal-level condition.
Handoff: v04, why complementary angles give the same level-ground range.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings.

### 1. hook (faster, slower or the same?)
> Here's the ball from last time, launched at twenty-five metres per second, fifty degrees above the horizontal, from level ground. Its components are about sixteen point one across and nineteen point two up, and we followed it to the top. Now let's finish the flight. How high does it get, and how long is it in the **air**? But first, a prediction. When it lands back at the level it started from, is it moving faster than at launch, slower, or at the same **speed**? Have a **think**.

Visual: opens on v02's final frame (see Decisions). The heading changes to "What sets the height, the flight time and the landing velocity?". On "air" the height bracket "?" and the time bracket "t = ?" pulse in turn. On "speed" the dashed landing arrow "v = ?" pulses, and three chips write beside it: "faster", "slower", "same speed". Hand tags: blue "how high?" by the height bracket, ink "how long?" by the time bracket, orange "how fast?" by the landing arrow (30 px); chips 36 px. On "think" the 3 s `Countdown` ring runs.

### 2. the height: the equation without time
> Start with the height. At the top, the vertical velocity is zero, and we don't need to know when that happens. So choose the equation without time in it, v squared equals u squared plus two a s, written for the vertical **column**. Put in v y equals zero and a y equals minus g, and it rearranges to the height above the launch point: H equals u y squared over two **g**. Only the vertical component appears. Moving sideways doesn't help the ball climb at all.

Visual: the ledger grows into the right column; the stage stays left with the ball at the peak. On "column" the blue column writes "v_y² = u_y² + 2a_y s_y" with a grey tag "no t in it". `AlignedAlgebra` in the blue column: "0 = u_y² + 2(−g)H", "2gH = u_y²", and on "g" the boxed "H = u_y² ÷ 2g" with a tag "height above the launch point". The stage's height bracket solidifies from the ground to the peak, labelled "H". On "Moving sideways" the teal arrow at the peak gets a teal hand tag "u_x: not in H" and an ink pen ring circles "no t in it"; a blue hand tag "only u_y" sits by the boxed H.

### 3. worked example (a): the maximum height
> For our ball, u y is twenty-five sin fifty, about nineteen point one five metres per **second**. Squared, that's about three hundred and sixty-seven. Divide by two times nine point eight, which is nineteen point six, and the maximum height is about eighteen point seven **metres** above the launch point.

Visual: clear change to a full-width calculation layout (site lesson 3 worked example 2); the stage shrinks to a thumbnail at the left with the height bracket lit. Rows 52 px. Task strip: "Find the maximum height". Equation strip: "H = u_y² ÷ 2g". Givens (navy, blue column): "u = 25 m s⁻¹, θ = 50°", "u_y = 25 sin 50°", "a_y = −9.8 m s⁻²", "v_y = 0 at the top". On "second" "u_y = 19.15 m s⁻¹". `AlignedAlgebra`: "H = 19.15² ÷ (2 × 9.8) = 366.7 ÷ 19.6"; on "metres" "= 18.7 m", framed in a dark-ink box with a blue hand tag "above the launch point"; the stage bracket reads "18.7 m". An ink pen ring circles "2 × 9.8" ("2g").

### 4. the flight time: two answers
> Now the flight time. The ball lands when it's back at its launch level, so its vertical displacement is **zero**. Write s equals u t plus a half a t squared for the vertical column, and set it to zero: u y t minus four point nine t squared equals zero. Take out a factor of t, and there are two **answers**. t equals zero is the moment of launch, when the ball was also at that level, so that's not the one we want. The other is t equals two u y over **g**.

Visual: full-width factorising stage (new set-up): the height working shrinks to "H = 18.7 m" at the top; a strip of the stage runs under the working, showing the launch level line and both ends of the path. On "zero" the stage gets a dashed horizontal line along the launch level with a tag "s_y = 0: back at the launch level", and the launch and landing points ring. Blue column `AlignedAlgebra`: "s_y = u_y t + ½a_y t²", "0 = u_y t − 4.9t²"; on "answers" "0 = t(u_y − 4.9t)" with two branches: "t = 0" and "u_y − 4.9t = 0". On "moment of launch" the "t = 0" branch gets the tag "launch" and points at the launch ring; it greys. On "g" the second branch becomes boxed "T = 2u_y ÷ g" (blue) and points at the landing ring. Hand tags: ink "launch" crossed lightly on the t = 0 branch with a red hand tag "not this one", blue "landing" on the T branch; rows 52 px.

### 5. why twice the time to the top
> That's exactly twice the time to the top. Why? Gravity takes u y away at nine point eight metres per second, every second, until it's all gone. Then it gives it back at the same rate on the way down, so the fall takes just as long as the **climb**. For our ball, the time to the top is nineteen point one five over nine point eight, about one point nine five seconds, so the whole flight takes about three point nine one **seconds**.

Visual: the velocity graph (coupled `VelocityTimeGraph`) draws under the ledger: axes "t (s)" 0 to 4, "v (m s⁻¹)" −20 to +20; the stage ball replays the full flight in slow motion and the graph's dot moves with its clock. The blue v_y line falls straight from +19.15 to 0 at the peak, and the teal v_x line runs flat at 16.07. On "climb" the blue line continues to −19.15, and two equal brackets under the time axis "1.95 s" and "1.95 s" light, the first under the rising part, the second under the falling part; a dashed vertical mirror line through the peak on the stage. A readout panel beside the stage updates every frame as the ball flies (52 px): ink "t", blue "v_y" and teal "v_x" (for example "t = 1.00 s, v_y = +9.35, v_x = 16.07"; "t = 1.95 s, v_y = 0"; "t = 3.91 s, v_y = −19.15"), and an ink scribble ring flashes on "v_y = 0" as the ball passes the peak. On "seconds" rows "t_up = 19.15 ÷ 9.8 = 1.95 s", "T = 2 × 1.954 = 3.91 s" and the clock reads "3.91 s"; "T = 3.91 s" framed; blue hand tags "takes it away" on the falling half of the blue line above zero and "gives it back" below zero; teal hand tag "flat: never changes" on the v_x line.

### 6. the landing velocity
> So, the landing. The horizontal component hasn't changed: still sixteen point one metres per second. The vertical component is back to nineteen point one five, but now it points **down**. Those are the same two sizes as at launch, so the landing speed is twenty-five metres per second again, the same as the launch speed. Only the direction has changed: fifty degrees below the horizontal, instead of fifty degrees **above**.

Visual: camera push to the landing point (new set-up): the landing triangle fills the right half at 12 px per m s⁻¹ so its labels read at 44 px; the stage ball sits at the landing point. Teal arrow "16.1 m s⁻¹" at the ball; on "down" a blue arrow "19.15 m s⁻¹ down" draws below it (the graph's end point at −19.15 rings), and the orange resultant completes the triangle; row "v_y = 19.15 − 9.8 × 3.908 = −19.15 m s⁻¹". On "launch speed" row "speed = √(16.07² + 19.15²) = 25.0 m s⁻¹", and the scene 1 chip "same speed" ticks (the other two chips cross). On "above" the launch triangle at the barrel copies across and flips about the horizontal onto the landing triangle: angle arcs "50° above" and "50° below". The result "25.0 m s⁻¹ at 50° below the horizontal" is framed; orange hand tag "same size, flipped" with a pen arrow from the launch triangle to the landing one.

### 7. the range from the clock
> And the clock links the columns again. The ball is in the air for about three point nine one seconds, moving sideways at sixteen point zero seven metres per second the whole time, so it lands about sixty-two point eight metres **away**.

Visual: the clock "T = 3.908 s" carries along its link into the teal column (curved carry arrow from v01). Teal row "s_x = u_x T = 16.07 × 3.908"; Camera pull back to the whole flight. On "away" "= 62.8 m", framed, and a teal bracket along the ground from the launcher to the landing point reads "62.8 m", with a teal hand tag "u_x × T" and an ink pen ring on the clock.

### 8. what controls what
> These results tell us what controls what. Write u y as u sin theta, and the height becomes u squared sin squared theta over two g, while the flight time is two u sin theta over **g**. So launch at the same angle, twice as fast. The flight time just doubles, because it depends on u. But the height goes up four times, because it depends on u **squared**. A faster ball climbs faster, and it also keeps climbing for longer, so the two effects multiply. It's tempting to think everything grows with the square of the speed, but the flight time doesn't.

Visual: board change to two boxed forms in the blue column: "H = u² sin²θ ÷ 2g" and "T = 2u sin θ ÷ g", each with "u_y = u sin θ" substituted visibly (the u_y in the earlier boxes slides out and "u sin θ" slides in). On "g" both boxes settle. Beside them, the painted launcher at 50° on a stage rescaled to 5 px per metre (so the 50 m s⁻¹ path fits without a scale break) becomes a live control (simulation): on "twice as fast" an orange "u" slider runs from 25 to 50 m s⁻¹ while the path grows and a readout panel updates every frame (52 px): orange "u", ink "T", blue "H" (25: 3.91 s, 18.7 m; 30: 4.69 s, 26.9 m; 35: 5.47 s, 36.7 m; 40: 6.25 s, 47.9 m; 50: 7.82 s, 74.9 m). On "doubles" a time readout "3.91 s → 7.82 s (× 2)" freezes and is framed, with an ink hand tag "T ∝ u"; on "squared" a height readout "18.7 m → 74.9 m (× 4)" freezes and is framed, with a blue hand tag "H ∝ u²". On "two effects multiply" a small graph of v_y against t for both speeds shows the faster line starting twice as high and reaching zero twice as late, its triangle (area = height) shaded four times as big. On the last sentence a chip "T ∝ u², H ∝ u²" fades in and the "T ∝ u²" half is crossed, corrected to "T ∝ u", with a red hand tag "not everything squares".

### 9. the condition
> One warning. Twice the time to the top, and landing at the launch speed, both depend on landing at the same level you launched from. Launch from a cliff and land lower, and the fall lasts longer than the climb, so neither shortcut **works**. We'll deal with that case soon.

Visual: the 25 m s⁻¹, 50° stage returns with the two shortcuts as chips: "T = 2 × t_up" and "landing speed = launch speed", both tagged "same level only". On "cliff" the ground under the landing point drops away into a coded HSC-style cliff outline (launcher now on the cliff top), the falling half extends below the launch level, and the second "1.95 s" bracket stretches longer, labelled "longer than 1.95 s". On "works" both chips get a red "only if" stamp, and a red hand tag "longer fall" sits by the stretched bracket with a pen arrow. The cliff fades back to level ground.

### 10. memory aid: the mirror
> Here's how to remember all of this. On level ground, the way down mirrors the way up. The fall takes as long as the climb, the ball passes each height at the same speed going up and coming down, and it lands at the launch speed, at the launch angle below the horizontal. Just remember, the mirror only works when the ball comes back to the level it **started** from.

Visual: the stage path with the dashed mirror line through the peak; the rising half reflects onto the falling half (a short fold animation). Two matching strobe pairs at equal heights light up with equal-length orange arrows (one up-right, one down-right). On "started" the launch level line glows. The memory aid writes large in hand lettering inside a framed card above the stage (blue "The way down", orange "mirrors the way up.", 52 px), with the condition line "(level ground only)" (30 px). Hold about 2 seconds.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. A projectile is launched at fourteen point zero metres per second, at forty-five degrees above the horizontal, and lands at the same level it was launched from. Calculate its maximum height and its total time of flight. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "A projectile is launched at 14.0 m s⁻¹ at 45° above the horizontal and lands at the same level from which it was launched. Air resistance is negligible; take g = 9.8 m s⁻². Calculate (a) the maximum height reached above the launch point and (b) the total time of flight." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 12. feedback 1 (brief)
> First, u y is fourteen sin forty-five, about nine point nine metres per second. The height is u y squared over two g, ninety-eight over nineteen point six, which is five point zero zero **metres**. The flight time is two u y over g, about two point zero two **seconds**. Using fourteen instead of u y is the slip to **avoid**. It gives ten metres and two point eight six seconds.

Visual: card shrinks to the top; "same level" and "45° above the horizontal" underline. Blue rows: "u_y = 14.0 sin 45° = 9.90 m s⁻¹"; on "metres" "H = 9.90² ÷ 19.6 = 98.0 ÷ 19.6 = 5.00 m"; on "seconds" "T = 2 × 9.90 ÷ 9.8 = 2.02 s". Rows 44 px; "5.00 m" and "2.02 s" framed. On "avoid" a chip "u_y = 14.0: H = 10.0 m, T = 2.86 s" fades in and is crossed (caption "use u sin θ, not u"). Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. A projectile is launched at nineteen point six metres per second, at thirty degrees above the horizontal, and returns to its launch level. Calculate the time to reach its highest point and its total time of flight, and describe its velocity just before it lands. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A projectile is launched at 19.6 m s⁻¹ at 30° above the horizontal and returns to its launch level. Air resistance is negligible; take g = 9.8 m s⁻². (a) Calculate the time taken to reach the highest point. (b) Calculate the total time of flight. (c) Describe the velocity of the projectile just before it lands." The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 2 (brief)
> u y is nineteen point six sin thirty, which is nine point eight, so the time to the top is one point zero zero **second**, and the whole flight takes two point zero zero **seconds**. The flight mirrors itself, so it lands at nineteen point six metres per second, thirty degrees below the **horizontal**, with the horizontal component unchanged and the vertical one reversed. Giving thirty degrees above is the slip to **avoid**.

Visual: card shrinks to the top; "returns to its launch level" underlines. Rows: "u_y = 19.6 sin 30° = 9.80 m s⁻¹"; on "second" "(a) t_up = 9.80 ÷ 9.8 = 1.00 s"; on "seconds" "(b) T = 2 × 1.00 = 2.00 s". A small mirrored path draws with a landing triangle: teal "17.0 m s⁻¹", blue "9.80 m s⁻¹ down"; on "horizontal" row "(c) 19.6 m s⁻¹ at 30° below the horizontal". Rows 44 px; "1.00 s", "2.00 s" and "19.6 m s⁻¹ at 30° below the horizontal" framed. On "avoid" a chip "30° above the horizontal" fades in and is crossed (caption "v_y has reversed"). Hold about 1 second.

### 15. handoff
> So at equal levels, the vertical component sets the height and the flight time, and the horizontal component turns that time into a range: sixty-two point eight metres for our ball. Now launch it at forty degrees instead, at the same speed. It doesn't go as high, and it comes down sooner, yet it lands in exactly the same **spot**. Why? That's next.

Visual: board clears to the stage: the launcher at 50° with the full 25 m s⁻¹, 50° trajectory in solid orange, the teal range bracket "62.8 m". On "forty degrees" the barrel rotates down to 40° and a second trajectory (dashed blue-grey) draws in slow motion: lower peak, shorter flight (its clock stops at "3.28 s" against the first's "3.91 s"). On "spot" it lands exactly on the 50° path's landing mark; the mark rings with a `ScribbleCircle` and a large "?" appears beside it, with the chip "Next: why do 40° and 50° land together?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 16. key notes (quiet, hold about 50 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Top: v_y = 0, so H = u_y² ÷ 2g (above the launch point).
2. Same level: s_y = 0 gives t = 0 (launch) or T = 2u_y ÷ g.
3. Same level: lands at the launch speed, same angle below.
4. Range for any flight: R = u_x T.
5. Fixed angle: T ∝ u, H ∝ u² (double u: T × 2, H × 4).

Memory aid (framed card under the notes, hand lettering, blue and orange as in scene 10): *The way down mirrors the way up.* Second line in the card: *(level ground only)*. Notes in the role colours, 32 px; about 250 characters of bullet text; no paragraphs.

## Teaching checks

- **Does it explain causes?** Why only u_y sets the height: horizontal motion can't raise the ball (2). Why the equation without t: the time to the top isn't needed (2). Why two roots and which one: the ball is at the launch level at launch and at landing (4). Why T = 2t_up: gravity removes and restores u_y at one rate (5). Why the landing speed equals the launch speed: v_x is unchanged and v_y has the same size reversed (6). Why H quadruples while T only doubles: a faster ball rises faster and for longer (8). Why the shortcuts need equal levels: a lower landing extends the fall (9).
- **Misconceptions addressed:** the horizontal motion helps the climb (2); t = 0 is the landing (4); the fall is faster than the climb (5); the landing speed differs from the launch speed on level ground (1, 6); everything grows with u² (8, crossed); the shortcuts work from a cliff (9); using u for u_y (12, crossed); the landing angle above the horizontal (14, crossed).
- **One idea at a time:** height (2, 3), then time (4, 5), then landing (6), then range (7); relationships (8) only after all three results exist.
- **Video makes it easier:** the student watches the v_y line pass through zero at the peak and reach −19.15 at landing while the v_x line stays flat (5, 6), sees the launch triangle flip onto the landing triangle (6), sees the cliff stretch the fall (9), and watches the 40° flight land on the same mark (15).
- **Response opportunity:** one 3 s prediction (1) and two unseen HSC-style tasks with every condition visible ("same level", angle "above the horizontal", g, negligible air resistance), 10 s each; nothing answer-bearing. Feedback about 28 s and 32 s.
- **Avoided double teaching:** components and the peak condition recalled from v02 in a clause (1, 2); the constant-acceleration equations used, not re-derived.
- **Syllabus coverage:** `P5-IQ1-02` maximum height, time of flight and final velocity derived and related to initial velocity and launch angle (2 to 6, 8); range computed for one case (7); `P5-IQ1-04` the equations of motion applied to the vertical (uniformly accelerated) and horizontal (constant) motions to make predictions (3, 5, 7).
- **Out of scope by design:** the range formula, 45° and complementary angles (v04); unequal launch and landing heights (v05).

## Practice questions and model answers

**Attempt 1 (scene 11; original wording, HSC style, 3 marks).** "A projectile is launched at 14.0 m s⁻¹ at 45° above the horizontal and lands at the same level from which it was launched. Air resistance is negligible; take g = 9.8 m s⁻². Calculate (a) the maximum height reached above the launch point and (b) the total time of flight."
Model answer: u_y = 14.0 sin 45° = 9.90 m s⁻¹. (a) At the top v_y = 0: 0 = u_y² − 2gH, H = 9.90²/19.6 = 98.0/19.6 = 5.00 m. (b) s_y = 0 at landing: T = 2u_y/g = 2(9.90)/9.8 = 2.02 s. Classic mistake (crossed): using 14.0 m s⁻¹ as u_y (H = 10.0 m, T = 2.86 s).

**Attempt 2 (scene 13; original wording, HSC style, 4 marks).** "A projectile is launched at 19.6 m s⁻¹ at 30° above the horizontal and returns to its launch level. Air resistance is negligible; take g = 9.8 m s⁻². (a) Calculate the time taken to reach the highest point. (b) Calculate the total time of flight. (c) Describe the velocity of the projectile just before it lands."
Model answer: u_y = 19.6 sin 30° = 9.80 m s⁻¹; u_x = 19.6 cos 30° = 17.0 m s⁻¹. (a) t_up = u_y/g = 1.00 s. (b) Equal levels: T = 2t_up = 2.00 s. (c) v_x = 17.0 m s⁻¹ (unchanged); v_y = 9.80 − 9.8(2.00) = −9.80 m s⁻¹; speed √(17.0² + 9.80²) = 19.6 m s⁻¹ at tan⁻¹(9.80/17.0) = 30° below the horizontal. Classic mistake (crossed): "30° above the horizontal".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Case (site lesson 3 worked example 2) | 25 m s⁻¹ at 50°: u_x = 16.07 ≈ 16.1 m s⁻¹; u_y = 19.15 ≈ 19.2 m s⁻¹ | 1 to 7, 9, 10, 15 |
| Height | 19.15² = 366.7; 2 × 9.8 = 19.6; H = 18.71 ≈ 18.7 m | 3, 8 |
| Times | t_up = 19.15/9.8 = 1.954 ≈ 1.95 s; T = 3.908 ≈ 3.91 s | 5, 7, 9 |
| Landing | v_y = −19.15 m s⁻¹; v_x = 16.07 m s⁻¹; speed 25.0 m s⁻¹ at 50° below the horizontal | 6 |
| Range | 16.07 × 3.908 = 62.81 ≈ 62.8 m | 7, 15 |
| Doubling | 50 m s⁻¹ at 50°: T = 7.82 s (× 2); H = 74.9 m (× 4) (screen only) | 8 |
| 40° launch | 25 m s⁻¹ at 40°: T = 3.28 s; R = 62.81 m (screen only) | 15 |
| A1 | 14.0 at 45°: u_y = 9.90 m s⁻¹; u_y² = 98.0; H = 5.00 m; T = 2.02 s; crossed 10.0 m and 2.86 s | 11, 12 |
| A2 | 19.6 at 30°: u_y = 9.80, u_x = 16.97 ≈ 17.0 m s⁻¹; t_up = 1.00 s; T = 2.00 s; landing 19.6 m s⁻¹ at 30° below | 13, 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov); Codex to re-check.

- 25 cos 50° = 16.069690; 25 sin 50° = 19.151111; 19.151111² = 366.7650; H = 366.7650/19.6 = 18.712503 m.
- t_up = 19.151111/9.8 = 1.954195 s; T = 3.908390 s; v_y(T) = 19.151111 − 9.8 × 3.908390 = −19.151111 m s⁻¹; √(16.069690² + 19.151111²) = 25.000 m s⁻¹.
- R = 16.069690 × 3.908390 = 62.806617 m (site: 16.07 × 3.91 = 62.83, "62.8 m").
- 50 m s⁻¹ at 50°: T = 7.816780 s; H = 74.850011 m (ratio 4.000).
- 25 m s⁻¹ at 40°: T = 2 × 16.069690/9.8 = 3.279529 s; R = 625 sin 80°/9.8 = 62.806617 m.
- A1: 14.0 sin 45° = 9.899495; 9.899495² = 98.000; H = 5.000 m; T = 2.020305 s; with 14.0: 196/19.6 = 10.0 m, 28/9.8 = 2.857 s.
- A2: 19.6 sin 30° = 9.8; 19.6 cos 30° = 16.974098; t_up = 1.000 s; T = 2.000 s; √(16.974² + 9.8²) = 19.600; tan⁻¹(9.8/16.974) = 30.000°.
- Stage scale: 15 px per metre on both axes (62.8 m → 942 px; 18.7 m → 281 px); velocity arrows 8 px per m s⁻¹ (25 → 200 px).

## Memory aid check

- **"Level ground: the way down mirrors the way up."** Written for this lesson from the site's "Symmetrical flight" vocabulary. Meaning, as said in scene 10: at equal launch and landing levels, the fall takes as long as the climb, the ball passes each height at the same speed in both directions, and it lands at the launch speed at the launch angle below the horizontal. Assumptions checked: true for constant g and zero air resistance (v_y is linear in t, so the motion is symmetric about t_up; with drag the descent is slower and longer). The condition "level ground" is part of the aid itself, and scene 9 shows it failing from a cliff. It helps a new case: A2(c) (landing velocity without calculation), and v04's flight times.
- **Considered, not used:** "What goes up must come down" (true but says nothing about time or speed); "Half time at the top" (only the time).

## Narration length estimate

Revision 2 count (6 Nov; by script with the build parser rules: `### N.` or `### Na.` headings, only lines starting "> " counted inside each scene and joined with a space, bold markers removed, total = sum of the scene strings): **5,659 characters**, 16 scenes; narration unchanged from Revision 1, whose stated 5,674 joined the scenes with spaces (scene sum 5,659). Characters per scene (1 to 16): 473, 452, 296, 445, 425, 417, 232, 542, 269, 362, 252, 367, 294, 412, 346, 75. At 13.3 characters per second the speech is about 425 s; add 3 s for the prediction countdown, about 6 s of settling for the slow-motion flight and graph in scene 5 and the 40° flight in scene 15, about 2 s for the triangle flip in scene 6 and the cliff in scene 9, about 2 s for the scene 8 speed slider, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the memory-aid hold, 2 s for the handoff hold and about 45 s more of the quiet notes hold (about 50 s in all; about 84 s of holds and countdowns): **about 510 s**, inside the 5,500 to 7,000 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 8's last sentence (keep the crossed chip); scene 10's second sentence; scene 7 entirely (the range reappears in scene 15).

## Final frame

The last explained frame (end of scene 15, before the key-notes board): paper background; the coded level ground line; the launcher plate (`y12p-launcher-base-v1.png`, `y12p-launcher-barrel-v1.png`) at the left with its barrel at 40° above the horizontal; two complete trajectories for 25 m s⁻¹ on equal 15 px per metre scales: the 50° path in solid orange (peak 18.7 m, labelled "50°") and the 40° path dashed in blue-grey (peak 13.2 m, labelled "40°", no height value shown), both starting at the barrel tip and ending at the same landing mark 62.8 m away. A teal bracket along the ground reads "62.8 m". Two small clock readouts beside the paths: "50°: 3.91 s" and "40°: 3.28 s". The shared landing mark is ringed with a `ScribbleCircle` and a large "?" sits beside it. The ledger small at the top right (teal and blue columns, clock). Heading top-left: "What sets the height, the flight time and the landing velocity?"; chip "Next: why do 40° and 50° land together?". The steel ball rests at the landing mark. v04 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m5-v03` (route phys-y12-m5-v03). Suggested explainer folder `src/explainer/lessons/phys-y12-m5-v03` and build folder `docs/production/claude-pm/lessons/p-y12-m5-v03` (root to confirm).

In order (16 scene headings): hook, height-equation, worked-height, flight-time-roots, twice-the-climb, landing-velocity, range-from-clock, what-controls-what, condition, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`); scene 1 ends with a 3 s prediction countdown. `motionTools`: strobe stage and ledger (v01 kit gaps 1, 2), coupled `VelocityTimeGraph`, mirror fold, triangle flip, `AlignedAlgebra` with factor branches, `NumberTicker`, `ScribbleCircle`, `PenArrow`, path draw-on, `Countdown`. Transitions: v02's final frame continues into scene 1 (camera continue); 1 to 2 camera continue (the ledger grows); 2 to 3 clear change to the full-width calculation layout (Revision 2); 3 to 4 camera continue into the factorising stage; 4 to 5 camera pull back to stage plus graph; 5 to 6 camera push to the landing point; 6 to 7 camera pull back to the whole flight; 7 to 8 clear change; 8 to 9 clear change back to the stage; 9 to 10 camera continue; attempts and feedback card shrink to the top; 14 to 15 clear change; 15 to 16 fade to the notes board.

Holds: hook (3 s countdown), attempt-1, attempt-2 (10 s countdown after the speech), key-notes (about 50 s). Review evidence paths: `learning_review` = `checks/p-y12-m5-v03-learning-review.md`, `science_check` = `checks/p-y12-m5-v03-physics-check.md`.

## Assets

Have (uniform scaling only, never stretched):
- `public/assets/physics/phys-y11-steel-ball-v1.png`: the ball, scenes 1 to 10, 15.
- `public/assets/physics/y12p-launcher-base-v1.png` and `y12p-launcher-barrel-v1.png` (requested in v02; delivered in brief 187 and inspected 6 Nov on `assets/brief187-qa/launcher-rotations.jpg`; designer acceptance of the native size pending with root): scenes 1, 5 to 10 (scene 8 as the speed-slider launch point), 15.

Need (new plates): none.

Coded: ground line, cliff outline (scene 9, HSC exam style), strobe images, arrows, triangles, mirror line, brackets, velocity graph, ledger, clock, calculation strips, crossed chips, attempt cards, countdowns, key notes board.

Kit gaps: none new (v01 kit gaps 1 and 2; v02's launch triangle; `VelocityTimeGraph` reconfigured to g = 9.8 with both components and an external clock).

## Codex asset brief

No new plates. Uses the v02 launcher plate (see v02 "Codex asset brief").

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the physics of every learner-visible claim: H = u_y²/2g above the launch point; s_y = 0 gives t = 0 (launch) and T = 2u_y/g; T = 2t_up only for equal levels; landing v_x = u_x, v_y = −u_y, landing speed = launch speed and mirrored angle for equal levels; R = u_x T; at fixed θ, T ∝ u and H ∝ u² (site correction records 1 and 2 applied); a lower landing level lengthens the fall.
3. Confirm the memory aid's assumptions and that its condition is stated (see "Memory aid check").
4. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
5. Confirm both attempt cards are original in wording, carry every condition ("same level"/"returns to its launch level", angle "above the horizontal", g, negligible air resistance) and show nothing answer-bearing.
6. Confirm the syllabus quotes match the route JSON exactly and are labelled 2017.
7. Confirm no person, hand, face or body outline is drawn or requested.
8. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
9. Confirm the narration character count and per-scene counts by script with the build parser rules.

## YouTube metadata (draft)

Title: Projectile Maximum Height, Time of Flight and Landing Velocity | HSC Physics Module 5

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module5/lesson03.sa.html

A ball is launched at 25 m/s, 50° above the horizontal, and lands back at its launch level. How high does it go, how long is it in the air, and is it faster, slower or the same speed when it lands? Derive H = u²sin²θ/2g and T = 2u sinθ/g from the vertical motion, see why the fall takes exactly as long as the climb, and why doubling the launch speed doubles the flight time but quadruples the height. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 5: Advanced Mechanics.
Syllabus content (NSW Physics Stage 6, 2017):
"apply the modelling of projectile motion to quantitatively derive the relationships between the following variables: initial velocity; launch angle; maximum height; time of flight; final velocity; launch height; horizontal range of the projectile (ACSPH099)"
"solve problems, create models and make quantitative predictions by applying the equations of motion relationships for uniformly accelerated and constant rectilinear motion"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: launch angle and components. Next: why complementary angles give the same range.

#HSCPhysics #Physics #ProjectileMotion #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (check that the choice of the equation without t is understood; that the factorising step is followable for students who think of it as a quadratic; that the prediction is resolved clearly in scene 6), then the physics check and the Codex error check.
- The coupled velocity graph, the triangle flip and the stretched cliff fall carry the explanation; judge them at playback speed.

## Revision 2 (6 Nov 2026)

Brief 187 findings (`checks/p-y12-m5-v03-learning-review.md`, `checks/p-y12-m5-v03-science-check.md`): 0 blocker, 0 should fix, 0 optional. The reports ask to keep the equation chosen for its missing time, the factorised time roots, the mirror explanation, the corrected T ∝ u and H ∝ u² contrast, the equal-level warning and the complementary-angle overlay that motivates v04; all are kept. The opening (v02's final frame) and the final frame are unchanged, so the v02 and v04 joins hold.

Visual upgrade (to `../maths-visual-standard.md` and the build gate):
- Decisions gain "Colour roles", "Type sizes", "Anchor", "Simulation" and "Stage changes".
- Cuts: the scene 1 to 7 stage-plus-ledger run (about 200 s) becomes seven set-ups (stage; ledger; full-width calculation; full-width factorising; stage plus graph; landing close-up; whole flight).
- Live simulations: scene 5 gains live t, v_y and v_x readouts on the coupled flight; scene 8 gains a launch-speed slider on the painted launcher (25 to 50 m s⁻¹ at 50°) with live T and H readouts (Python: T = 2u sin 50° ÷ 9.8 and H = (u sin 50°)² ÷ 19.6 give 3.908, 4.690, 5.472, 6.253, 7.817 s and 18.71, 26.95, 36.68, 47.90, 74.85 m at 25, 30, 35, 40, 50 m s⁻¹). The 5 px per metre scale removes the old scale break.
- Hand tags and a pen mark in role colours in every teaching scene ("how high?", "only u_y", "above the launch point", "not this one", "takes it away", "gives it back", "same size, flipped", "u_x × T", "T ∝ u", "H ∝ u²", "not everything squares", "longer fall").
- Framed answers: 18.7 m (3), 3.91 s (5), the landing velocity (6), 62.8 m (7), the × 2 and × 4 readouts (8), A1 and A2 answers (12, 14).
- Scene 10 and the notes: the memory aid is a framed card with its condition line; key notes cut from four long items to five short bullets (about 250 characters); quiet notes hold 60 s to 50 s.
- Question cards already arrive with their full text; unchanged.

New plate requests: none (the launcher is delivered).

Counts: 5,659 characters (narration unchanged; Revision 1 stated 5,674 by the joined convention); about 519 s to about 510 s.
