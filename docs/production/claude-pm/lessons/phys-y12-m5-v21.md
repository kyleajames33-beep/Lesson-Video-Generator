# Year 12 Physics M5 V21: Gravitational potential energy. Why does gravitational potential energy use a zero at infinity? (design)

Status: Revision 2 (6 Nov 2026): brief 188 findings resolved and visual upgrade to maths-visual-standard.md. Needs error check before plates and voicing.

Narration 5,783 characters (scene sum; Revision 1 stated 5,681 by the joined convention), 16 scenes, about 518 s, counted by script with the build parser rules (see "Narration length estimate").

Scope: Year 12 Physics (Physics Stage 6, 2017 syllabus), Module 5 (Advanced Mechanics), inquiry question "How does the force of gravity determine the motion of planets and satellites?". Templates as `phys-y12-m5-v17.md`. No pre-design pack exists; the pack work is done here. Site lessons read in full (6 Nov, read-only): `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson14.sa.html`, SHA256 `68a4b9625adadcca1a3c779b24ea2958d03bae5c6e9f451fbddad66def79167d`, and `.../module5/lesson15.sa.html`, SHA256 `0d89f9ec738bb96bd099ca0a8caa0e86cf3a02d9ba4a67485c504e0136cb005b` (both recomputed 6 Nov; both match the route). Route entry: `phys-y12-m5-v21`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Derive or explain integration as accumulated work and Ug=-GMm/r; contrast small-height mgh. Gravitational potential per mass is supporting language, not a separate mandatory objective." Next: "phys-y12-m5-v22: Why does a higher circular orbit have lower speed but greater total energy?"

Owner rules applied: as v17 (2017 syllabus quoted exactly; no people, hands, faces or body outlines; Earth and the satellite are painted plates; force and energy graphs, strips, the well picture and strips are coded; every number recalculated in Python with the HSC data sheet constants; "Pause here to answer." with a 10 s countdown; brief feedback; Australian spelling; no em dashes). Recalled, not re-taught: Year 11 work W = Fs and ΔU = mgh; v17 (F = GMm/r², g weakens with distance, r = R + h); v19 (geostationary radius 4.23 × 10⁷ m).

Syllabus content (Physics Stage 6 (2017), Module 5; ledger id `P5-IQ3-05`), quoted from the route JSON `syllabusActions`:

- `P5-IQ3-05`: "derive quantitatively and apply the concepts of gravitational force and gravitational potential energy in radial gravitational fields to a variety of situations, including but not limited to:" "the concept of escape velocity v_(esc)=sqrt((2GM)/(r))", "total potential energy of a planet or satellite in its orbit U=-(GMm)/(r)", "total energy of a planet or satellite in its orbit U+K=-(GMm)/(2r)", "energy changes that occur when satellites move between orbits (ACSPH096)", "Kepler’s Laws of Planetary Motion (ACSPH101)"

This video covers the U = −GMm/r example and the potential-energy part of energy changes between radii; v22 covers total energy and orbit changes; v23 escape velocity.

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 54)

**Boundary:** starts on v20's final frame (Halley at aphelion, a dashed line to "∞", "U = ?"). Teaches: the case (lifting 1000 kg from the surface to geostationary radius: mgh gives 3.52 × 10¹¹ J, the radial result 5.34 × 10¹⁰ J); why mgh fails (it uses the surface g for the whole climb); work against a changing force as the area under F against r, built from thin steps (integration explained as accumulated work, not computed with calculus notation); the finite total GMm/R for an endless climb (½, ⅔, 9/10 of the total at 2R, 3R, 10R); infinity as the natural zero (no interaction, the same for every pair); U = −GMm/r as the energy fallen from infinity; the U against r graph; the meaning of the negative sign; ΔU = GMm(1/r₁ − 1/r₂) and the sign of an outward move; the worked check of the hook; mgh as the small-height limit with error ≈ h/R; gravitational potential per kilogram named in one sentence. Stops before kinetic and total orbital energy (v22) and escape velocity (v23).

## Decisions

- **Learner question (route wording kept).** "Why does gravitational potential energy use a zero at infinity?" The answer, built in order: mgh fails over large heights because g weakens (1, 2); the work is the area under a falling force curve (3); that area stays finite all the way to infinity (4); so infinity, where masses no longer interact, is a reference every pair of masses shares, and falling in from there takes U below zero, U = −GMm/r (5); what the negative sign means (6); only changes matter (7, 8); mgh survives as the small-height case (9).
- **Hook (site lesson 14 "Launching to geostationary orbit" box, re-valued, plus a new mgh contrast).** 1000 kg from the surface to r = 4.23 × 10⁷ m (v19's radius). mgh with g = 9.8 and h = 3.59 × 10⁷ m gives 3.52 × 10¹¹ J; the radial result is 5.34 × 10¹⁰ J (site, with 5.97 × 10²⁴ kg and 4.22 × 10⁷ m: 5.31 × 10¹⁰ J; see site note 1). Ratio 6.6. Prediction "bigger or smaller?" with a 3 s countdown. The case stays a potential-energy question: the narration says "lift", and author note a records that a real launch also changes kinetic energy (site's own caution).
- **Integration as accumulated work (route stop).** Shown with thin rectangles under the GMm/r² curve that sharpen into the area; narrated as "integration adds up work, step by step". Revision 2 (brief 188): the graph and narration now name the outward lifting force for a slow lift (the same size as gravity's pull) and the work you supply, so the positive area is external work, not work done by gravity; scene 7's "work you supply (slowly) = ΔU" line matches it. No integral sign is narrated; the screen shows "work you supply = area under F against r" and, small, "= ∫ F dr" in grey for students who meet it in Maths Extension 1 (open decision 2).
- **The finite total (new, the "surprise").** The area from R to nR is GMm/R × (1 − 1/n): ½ at 2R, ⅔ at 3R, 9/10 at 10R. Shown as a filling bar against a dashed "total = GMm/R" line. This is the cause the route asks for: infinity can be the zero because the work to get there is finite.
- **Sign and meaning (site card 1, "Account 5 marks", misconceptions).** "The negative sign doesn't mean the satellite has less than no energy. It means you'd have to supply that much energy to pull it free, from rest, all the way to infinity." "From rest" is kept in learner copy because the site's own Account answer omits it and the orbit case (v23) differs (site note 2).
- **ΔU and signs (site card 2).** ΔU = U_final − U_initial = GMm(1/r₁ − 1/r₂). Work done by gravity and external work (W_g = −ΔU, W_ext = +ΔU for a slow move) are kept to one screen line in scene 7, not narrated as a separate ledger (author note b), to hold one main question.
- **Worked example.** The hook's numbers, computed as U₁, U₂ and ΔU (scene 8).
- **mgh as the limit (site card 4, Assess answer).** ΔU = GMm h / R(R + h) ≈ GMm h/R² = mgh for h ≪ R. Error fraction h/R: 0.16 % at 10 km, 6.3 % at 400 km. The site's "twice the ratio" coaching sentence is wrong (site note 3).
- **Potential (route: supporting language only).** One sentence: "Divide U by the small mass and you get the energy per kilogram, called gravitational potential." Surface value −6.28 × 10⁷ J kg⁻¹ on screen only.
- **Memory aid (analogy).** "Earth sits at the bottom of a well; infinity is ground level. Zero at the top, negative below; climbing out is an increase." See "Memory aid check".
- **Attempts.** A1 (site MC "500 kg from 7 × 10⁶ m to 9 × 10⁶ m", turned into a calculation): ΔU = +6.35 × 10⁹ J. A2 (new, signs): U from −6.0 × 10¹⁰ J to −4.0 × 10¹⁰ J: further away, ΔU = +2.0 × 10¹⁰ J, negative because the zero is at infinity. Crossed: A1 "subtracting the wrong way (negative answer)"; A2 "−4 is smaller than −6, so it moved in".
- **Colour key (root decisions 2 and 10; Revision 2).** Gravitational potential energy violet; g violet; forces (the lifting force and gravity's pull) amber; the work area pale amber; r navy; the surface g and mgh grey (full opacity); energy supplied and increases green; kinetic energy orange (handoff only); framed answers in a dark-ink box; crossed chips and their hand tags red. No velocity arrow appears in this video.
- **Type sizes (Revision 2, 1080p):** the current working line at least 44 px (scenes 7, 8, 9 and the feedback rows 52 px; the framed "U = −GMm/r" 60 px); live readouts (scenes 2, 3, 4, 5, 9) about 52 px; supporting lines, axis labels, givens and chips 30 to 36 px; hand-font tags at least 30 px; question text 36 px; nothing a student must read below 26 px. All text above the bottom 12% of the frame.
- **Anchor (Revision 2).** Scene 1 opens on the painted Earth with the delivered satellite plate sitting on its surface and a radial line to geostationary height; the satellite plate rides the line in scene 2 and returns in scenes 3, 5 and 15.
- **Simulation (Revision 2).** The core live control is scene 4's end-radius drag on the work area: live r_end, work so far and fraction of GMm/R (2R: 3.14 × 10¹⁰ J, ½; 3R: 4.19 × 10¹⁰ J, ⅔; 10R: 5.65 × 10¹⁰ J, 9/10; never past 6.28 × 10¹⁰ J). Scene 2 adds a live g readout as the satellite rides up (9.8 constant, then 9.86, 8.73, 2.46, 0.224 N kg⁻¹); scene 3 live strip counts and areas (5, 20, 80 strips: 9.92, 6.28, 5.56 × 10¹⁰ J, closing on 5.34 × 10¹⁰ J); scene 5 live r and U as the marker falls in; scene 9 a height slider with the h/R error.
- **Stage changes (Revision 2).** Scene 1 and 2 the radial climb; scene 3 the area builder; scene 4 the pull-back with the end-radius drag; scenes 5 and 6 the well graph; scene 7 full-width algebra with the graph as a thumbnail (this breaks the Revision 1 well-graph run of about 95 s); scenes 8 and 9 full-width working. No set-up runs past about 65 s.
- **Handoff.** Scene 15: a satellite on a circular orbit gets an orange kinetic energy bar beside its violet U bar, and a "total = ?" bar (v22). (Revision 2: scene number corrected from 16.)
- **Site sources used:** lesson 14 hook (outward move increases U though negative), vocabulary (zero-at-infinity, separation energy, near-surface approximation), misconceptions ("must be positive to escape", "negative means lost energy", "mgh works for any height"), card 1 (derivation of U from the force, the reference choice, "why zero at infinity"), card 2 (ΔU formula, signs), card 3 (U against r graph and area meaning), card 4 (mgh from the exact formula, worked example 3), the GEO box (hook), the "Apply 6 marks" and "Account 5 marks" answers (scenes 2, 5, 6), short-answer Q3 (error growth); lesson 15 card 1 (potential as energy per kilogram, surface value) and the "Assess 5 marks" answer (scene 9, corrected). Not used: lesson 15's gradient, equipotential and GPS-relativity material (enrichment there); the W_g and W_ext ledger as a narrated topic (author note b).
- **Site notes (for root to log in `../site-corrections-phys-y12.md` if accepted):**
  1. Lesson 14, "Real world, Launching to Geostationary Orbit": with the page's own values, ΔU = 6.67 × 10⁻¹¹ × 5.97 × 10²⁴ × 1000 × (1/6.37 × 10⁶ − 1/4.22 × 10⁷) = 5.31 × 10¹⁰ J, not 5.29 × 10¹⁰ J ("53 GJ" stands).
  2. Lesson 14, "Account 5 marks" step 4 and full answer: "an object with U = −2 × 10¹⁰ J needs 2 × 10¹⁰ J supplied to escape" holds only for an object at rest; the page's own vocabulary ("Orbit escape is a total-energy problem treated in Lesson 16") says an orbiting object needs less. Suggest adding "starting from rest".
  3. Lesson 15, "Assess 5 marks" step 3 coaching note: "The factor of two comes from the inverse square. ... the error is roughly twice the ratio of the height to the Earth's radius." The step itself shows the ratio mgh/ΔU = 1 + h/R, so the error is h/R (10 km: 0.16 %; 400 km: 6.3 %; 2000 km: 31 %, as the page's own figures confirm). Remove the "factor of two" and "roughly twice" wording.
  4. Lesson 15, card 1 hook gives V at the surface as −6.26 × 10⁷ J kg⁻¹, while worked example 1 on the same page gives −6.25 × 10⁷ J kg⁻¹ (3.98 × 10¹⁴ / 6.37 × 10⁶ = 6.25 × 10⁷). Suggest one value.
  - Checked and correct: worked example 1 (−4.97 × 10¹⁰ J), worked example 2 (1.71 × 10¹⁰ J), worked example 3 (981.3 J, 0.14 %), Apply answer (2.24 × 10¹⁰ J; mgh 2.94 × 10¹⁰ J; 5.68 m s⁻²), Q1 (−8.82 × 10¹⁰, −8.10 × 10¹⁰ J), Q3 (15.5 %, 564 %).
- **Cause chain taught, in order:** (1) mgh assumes constant g; g falls with r, so mgh overcounts (1, 2); (2) work under a changing force is the area under F against r, built from thin steps (3); (3) the area to infinity is finite, GMm/R from the surface (4); (4) infinity, where masses do not interact, is a zero shared by every pair (5); (5) falling in from infinity, gravity does work GMm/r, so U = −GMm/r (5); (6) negative U is the energy needed to separate from rest (6); (7) ΔU = GMm(1/r₁ − 1/r₂), positive outwards (7, 8); (8) for h ≪ R, ΔU ≈ mgh with error h/R (9).
- **Entry knowledge:** Year 11 work and mgh; v17; v19's radius.
- **Learner-visible vocabulary:** gravitational potential energy U (energy stored by two masses because of their separation, 5); reference (where U is set to zero, 5); integration (adding up thin steps, 3); gravity well (6, memory aid); gravitational potential (energy per kilogram, 7, supporting only).
- **Legacy logic ported:** none. The coded `GravitationalPotential` visual (kit family `m5-gravitational-potential`) is the starting point for the U against r graph; its limit ("does not yet draw ... work integrals") is the gap this video's area build fills.
- **New explainer motion:** **work-area builder** (kit gap 6: F = GMm/r² curve from R outwards, thin rectangles that refine in count, a running area readout, an area-fraction bar against the GMm/R total, markers at 2R, 3R, 10R); **energy well graph** (U = −GMm/r from R outwards with the zero line at the top, a satellite marker that slides along the curve, a ΔU bracket between two radii); `AlignedAlgebra`; `Countdown`; `QuestionCard`; `Chip` with `cross`; `KeyNotes`.
- **No human figures.** The "lift" is drawn as a satellite rising along a dashed radial line; no crane operator or person.
- **Author notes (not learner copy):**
  (a) The hook asks only for the increase in potential energy; a real launch also gives the satellite orbital kinetic energy and loses energy to the atmosphere and gravity losses (site's own caution). Not narrated; screen tag "potential energy only".
  (b) Signs: W_g = −ΔU; for a slow (quasistatic) move W_ext = +ΔU (site card 2). Revision 2: scene 3 now names the outward lifting force and "the work you supply", and scene 7's screen line "work you supply (slowly) = ΔU" agrees with it; gravity's own work is not narrated as a separate ledger.
  (c) Area fractions: ∫_R^{nR} GMm/r² dr = GMm/R (1 − 1/n).
  (d) mgh limit: ΔU = GMm h/(R(R + h)); with g = GM/R², mgh/ΔU = 1 + h/R exactly. With g = 9.8 instead of 9.86 the 400 km error is 5.6 %; narration says "about six per cent".
  (e) g at r = 4.23 × 10⁷ m: 4.002 × 10¹⁴ / 1.789 × 10¹⁵ = 0.224 N kg⁻¹, 2.27 % of 9.86 ("less than a fortieth").
  (f) Pronunciations: "U equals minus big G M m over r"; "one over r one minus one over r two"; "four point zero zero two times ten to the seventeen".

- **Open decisions for root:**
  - **1. The well analogy (learning review).** A coded well cross-section beside the U graph (scene 6, memory aid). Revision 2: settled by brief 188 ("keep the well beside its labelled energy graph"); the graph stays on screen beside the well in scene 6 and a grey tag says "an energy picture, not a hole".
  - **2. Integral notation (root).** The small grey "= ∫ F dr" on screen in scene 3 is optional; remove it if the review thinks it distracts students without Extension 1.
  - **3. Hook value (physics check).** The hook mixes mgh with g = 9.8 (the student's usual tool) and the radial result from data sheet constants; both are labelled.

Main question: *Lifting 1000 kg from Earth's surface to geostationary height: mgh says 3.5 × 10¹¹ J, the true change is about 5.3 × 10¹⁰ J. Why does mgh fail, and why does the exact formula put zero potential energy at infinity?*
Entry knowledge: Year 11 work and mgh; v17; v19.
Stops after: U = −GMm/r from accumulated work; zero at infinity; meaning of the sign; ΔU between radii; mgh as the small-height limit. No kinetic or total orbital energy.
Handoff: v22, why a higher circular orbit has lower speed but greater total energy.

## Script and shots

Cue words in **bold** trigger the visual change. Screen symbols in italic: *U*, *r*, *G*, *M*, *m*, *h*, *g*. Paper background and handwritten headline face as the explainer house style.

### 1. hook (bigger or smaller?)
> Here's a job: lift a one thousand kilogram satellite from Earth's surface all the way up to geostationary height, about thirty-six thousand kilometres. Using m g h, that takes about three point five times ten to the eleven joules of extra potential **energy**. Will the true answer be bigger, or smaller? Have a **think**.

Visual: opens on v20's final frame (see "Opening frame"); the Sun and comet slide away left; the dashed line to "∞" stays and swings round to run up from the painted Earth (`phys-y11-earth-v1.png`) at the bottom left. The satellite plate (`y12p-satellite-v1.png`, delivered and inspected) sits on Earth's surface; a dashed navy radial line rises to a mark at r = 4.23 × 10⁷ m ("geostationary radius") and continues to "∞". On "energy" a grey strip (44 px) writes "mgh = 1000 × 9.8 × 3.59 × 10⁷ = 3.52 × 10¹¹ J", tag "potential energy only". Hand tags (30 px): grey "g = 9.8 all the way?", navy "36,000 km up", and a grey pen ring round "3.52 × 10¹¹ J". On "think" the 3 s `Countdown` runs beside "True answer: bigger or smaller than mgh?" with two option chips (36 px) "bigger" and "smaller".

### 2. why mgh fails
> The true answer is about five point three times ten to the ten joules. So m g h overestimates it by more than six **times**. The reason is hidden in the formula. m g h assumes gravity's pull stays the same all the way up. But gravity weakens with distance. At geostationary height, g is less than a fortieth of its surface value. Using the surface value for the whole climb counts far too much **work**. It's like paying full price for every metre of a climb that keeps getting easier.

Visual: camera continue. On "times" a navy strip "true ΔU = 5.34 × 10¹⁰ J" (44 px) writes under the grey mgh strip, with a bracket "mgh ≈ 6.6 × too big", and the "smaller" chip ticks. Heading writes on: "Why does gravitational potential energy use a zero at infinity?". As "assumes" is spoken, violet g arrows appear along the radial line, all equal ("9.8 N kg⁻¹ all the way"), while the satellite plate rides up the line with a live g readout (52 px) stuck at 9.8; then on "work" the arrows redraw shrinking with height (computed from GM/r²) and the satellite rides up again with the live readout falling (9.86 at the surface, 8.73 at 400 km, 2.46 at 2R, 0.224 N kg⁻¹ at the top), tag "g falls to 2 % of its surface value". Hand tags: violet "gets weaker", grey "full price every metre", and a violet pen ring round "0.224".

### 3. adding up work: the area under the graph
> So how do we add up work when the force keeps changing? To lift the satellite slowly, you have to push it outwards with a force as big as gravity's pull. Work is force times distance, but only while the force stays constant. So split the climb into lots of thin steps. In each step, the lifting force barely changes, so the work you supply is that force times the step. Add up all the steps, and you get the area under the graph of force against **distance**. That's what integration does. It adds up work, step by **step**.

Visual: clear change to the work-area builder (kit gap 6): the vertical axis (32 px) "lifting force for a slow lift, F (N): outward, the same size as gravity's pull" against "distance from Earth's centre, r"; the amber curve F = GMm/r² from r = R (9.86 × 10³ N for 1000 kg) falling towards the axis. Beside the axes, as "push it outwards" is spoken, the satellite plate shows a solid amber arrow outward "lifting force" and a dashed amber arrow inward "gravity", equal in length. Five wide rectangles under the curve between R and the geostationary mark, each labelled "F × Δr" and each using the force at its start, split into 20, then 80 thin strips that hug the curve, with live readouts (52 px) "strips: 5, 20, 80" and "area: 9.92, 6.28, 5.56 × 10¹⁰ J" closing in. On "distance" the strips merge into one smooth pale amber area, "work you supply = area under F against r". On "step" a small grey line "(this adding-up is integration: W = ∫ F dr)". Readout "area R to 4.23 × 10⁷ m = 5.34 × 10¹⁰ J" in a dark-ink frame (52 px). Hand tags: amber "push = pull (slow lift)", amber "force × step", and an amber pen ring round one thin strip.

### 4. the surprise: an endless climb, a finite total
> Now the surprise. Keep climbing forever. Further out, the steps add less and less, because the force falls with r squared. From the surface out to two Earth radii, the area is half of a fixed **total**. Out to three radii, it's two thirds. Out to ten radii, nine tenths. The area gets closer and closer to a finite amount, big G M m over the radius you start **from**. So even an endless climb, right out of Earth's pull, takes a finite amount of work.

Visual: camera pull back along the r axis to 10R and beyond (the axis compresses). The live end-radius control starts (see "Simulation"): the right edge of the area drags outwards with readouts (52 px) navy "r_end", amber "work so far" and "fraction of GMm/R", while an area-fraction bar at the right fills; on "total" "2R: ½ (3.14 × 10¹⁰ J)", then "3R: ⅔ (4.19 × 10¹⁰ J)", "10R: 9/10 (5.65 × 10¹⁰ J)", each with a marker on the r axis, against a dashed line "total = GMm/R". On "from" the dashed line labels "GMm/R = 6.28 × 10¹⁰ J (1000 kg from the surface)" in a dark-ink frame (52 px), and the bar creeps towards it without passing it; the r axis runs off to "∞". Hand tags: navy "keeps going", amber "never passes the line", and an amber pen ring round the dashed total line.

### 5. zero at infinity, negative everywhere else
> That's why we put the zero of gravitational potential energy at infinity. Out there, two masses no longer pull on each other, and that's true for every pair of masses in the universe. Now run the climb backwards. As an object falls in from infinity, gravity does work on it, so its potential energy drops below zero. At distance r, it has dropped by big G M m over r. So U equals minus big G M m over **r**.

Visual: clear change to the energy well graph (kit gap 6): a horizontal zero line at the top labelled "U = 0 at infinity (no interaction)" (36 px), the r axis along it running to "∞" at the right. A satellite marker starts at the far right on the zero line. As "falls in" is spoken it slides left along a curve that drops below the zero line, a violet bar beneath it growing downward, with live readouts (52 px) navy "r" and violet "U" (10R: −6.28 × 10⁹ J; geostationary radius: −9.46 × 10⁹ J; 2R: −3.14 × 10¹⁰ J; R: −6.28 × 10¹⁰ J) and the tag "drop = GMm/r". On "r" the curve completes from R outwards and the equation strip writes "U = −GMm/r" in a violet dark-ink frame (60 px); a tag "r from Earth's centre; outside Earth". Hand tags: grey "no pull out here", violet "drops below zero", and a violet pen ring round the minus sign.

### 6. what the negative sign means
> On the graph, U is always negative, and it rises towards zero as r grows. It's steep near Earth, where gravity is strong, and almost flat far away. The negative sign doesn't mean the satellite has less than no energy. It means you'd have to supply that much energy to pull it free, from **rest**, all the way to infinity. Its size tells you how deep in Earth's gravity well it **sits**.

Visual: camera continue. Tangent nubs show the curve steep near R and flat far out, tags "strong pull: steep", "weak pull: flat". A red crossed chip "negative = less than no energy" fades in. On "rest" a navy bracket from the satellite marker (at the surface) up to the zero line, "energy needed to separate from rest = GMm/R = 6.28 × 10¹⁰ J" (44 px). On "sits" a coded well cross-section draws beside the graph (the graph stays, so the well reads as an energy picture), its rim at the zero line and its shape following the curve, the Earth plate small at the bottom; tags "gravity well" and grey "an energy picture, not a hole". Hand tags: violet "steep near Earth", navy "from rest", and a navy pen ring round the bracket.

### 7. only changes matter
> What actually matters is the change in potential energy. Moving from r one out to r two, the change is the final value minus the starting value, which is big G M m times one over r one minus one over r two. Moving outwards, U becomes less negative, so it **increases**, even though both values are below zero. Divide U by the small mass, and you get the energy per kilogram, called gravitational **potential**.

Visual: camera push to full-width algebra (a new set-up): the well graph shrinks to a thumbnail at the left with two markers at r₁ and r₂ (r₂ further out) and violet dots on the curve at U₁ and U₂. `AlignedAlgebra` (current line 52 px): "ΔU = U₂ − U₁", "= (−GMm/r₂) − (−GMm/r₁)", "= GMm (1/r₁ − 1/r₂)" in a dark-ink frame. On "increases" a green up-bracket on the thumbnail from U₁ to U₂, "outwards: ΔU > 0", and one grey line "work you supply (slowly) = ΔU". On "potential" a small grey chip (30 px) "V = U/m = −GM/r (J kg⁻¹); at the surface −6.28 × 10⁷ J kg⁻¹". Hand tags: violet "less negative = up", red "minus a minus", and a violet pen ring round "1/r₁ − 1/r₂".

### 8. worked example: back to the satellite
> Let's check our satellite. At Earth's surface, U is minus four point zero zero two times ten to the seventeen, over six point three seven one times ten to the six, which is minus six point two eight times ten to the ten joules. At geostationary radius, U is minus nine point four six times ten to the nine **joules**. The change is final minus initial, so plus five point three four times ten to the ten **joules**, exactly the true answer from the start.

Visual: clear change to full-width working (the Earth plate with the satellite's two positions small at the left). Task strip (36 px): "Find ΔU for 1000 kg, surface to geostationary radius." Equation strip: "U = −GMm/r; ΔU = U₂ − U₁". Givens grouped in one navy box (32 px): "GM = 4.002 × 10¹⁴ m³ s⁻²", "m = 1000 kg", "r₁ = 6.371 × 10⁶ m", "r₂ = 4.23 × 10⁷ m". `AlignedAlgebra` (52 px): "U₁ = −4.002 × 10¹⁷ / 6.371 × 10⁶ = −6.28 × 10¹⁰ J". On "joules" "U₂ = −4.002 × 10¹⁷ / 4.23 × 10⁷ = −9.46 × 10⁹ J". On the second "joules" "ΔU = −9.46 × 10⁹ − (−6.28 × 10¹⁰) = +5.34 × 10¹⁰ J" in a dark-ink frame (52 px), and the scene 2 strip ticks. A chip "r₂ = 3.59 × 10⁷ m (the altitude) → U₂ = −1.11 × 10¹⁰ J" fades in and is crossed (red tag "r from the centre"). Hand tags: violet "less negative", navy "final minus initial", and a violet pen ring round "+5.34 × 10¹⁰ J".

### 9. where mgh still works
> So is m g h wrong? No, it's a very good shortcut near the ground. For a small height h, the exact change becomes big G M m h over R squared, and big G M over R squared is just g. So for small heights, the change is m g h. Its error is roughly h over R. Ten kilometres up, that's under a **fifth** of a per cent. Four hundred kilometres up, it's about **six** per cent. It always overestimates, because it uses the strongest pull for the whole climb. For satellites, use the exact formula.

Visual: camera continue to a new working panel (the scene 8 result shrinks to one line at the top). `AlignedAlgebra` (52 px): "ΔU = GMm (1/R − 1/(R + h)) = GMm h / R(R + h)", "h ≪ R: R + h ≈ R", "ΔU ≈ m (GM/R²) h = mgh" in a dark-ink frame. A live height control (a slider for h with readouts (52 px) grey "h" and "mgh too big by about h/R") writes a small table as it moves: on "fifth" "10 km: h/R = 0.16 %"; on "six" "400 km: h/R = 6.3 %"; then "36,000 km: mgh 6.6 × too big" (from the hook). Tag "error ≈ h/R". Hand tags: grey "near the ground: fine", violet "satellites: exact formula", and a grey pen ring round "h/R".

### 10. memory aid
> Here's a picture to keep: Earth sits at the bottom of a well, and infinity is ground level at the top. Zero at the top, negative everywhere below. Climbing out makes U less negative, and that's an **increase**.

Visual: board clears to the well cross-section with the U curve as its wall and the zero line as the rim. The handwritten line writes above in a framed memory card (hand lettering, violet and navy, 52 px; the same card is reused on the notes screen): "Zero at infinity. Negative below. Climbing out is an increase." On "increase" a satellite marker climbs the wall with a green up arrow. Hold about 2 seconds.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. A five hundred kilogram satellite moves from an orbit of radius seven point zero times ten to the six metres to one of radius nine point zero times ten to the six metres. Calculate the change in its gravitational potential energy, using the data sheet values. Pause here to answer.

Visual: `QuestionCard` (subject "Physics") arrives with its full text in one move (question text 36 px), with a small Earth outline and two dashed circles (no radii written) beside it, worded as printed: "A 500 kg satellite moves from a circular orbit of radius 7.0 × 10⁶ m to a circular orbit of radius 9.0 × 10⁶ m around Earth. Calculate the change in its gravitational potential energy. (G = 6.67 × 10⁻¹¹ N m² kg⁻², M_E = 6.0 × 10²⁴ kg)" Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 12. feedback 1 (brief)
> Use big G M m times one over r one minus one over r two. Big G M m is two point zero zero one times ten to the seventeen, and the bracket is about three point one seven times ten to the minus eight. So the change is about plus six point three five times ten to the nine **joules**, an increase, because it moved outwards. The classic slip is subtracting the wrong way, and getting a negative **answer**.

Visual: card shrinks to the top; "change" underlines. Rows (44 px): "GMm = 6.67 × 10⁻¹¹ × 6.0 × 10²⁴ × 500 = 2.001 × 10¹⁷", "1/r₁ − 1/r₂ = 1.4286 × 10⁻⁷ − 1.1111 × 10⁻⁷ = 3.175 × 10⁻⁸ m⁻¹"; on "joules" "ΔU = +6.35 × 10⁹ J" in a dark-ink frame (52 px). On "answer" a chip "ΔU = −6.35 × 10⁹ J" fades in and is crossed (caption "outwards: U increases"). Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. A space probe's gravitational potential energy changes from minus six point zero times ten to the ten joules, to minus four point zero times ten to the ten joules. Did it move closer to the planet, or further away? Calculate the change, and explain why both values are negative. Pause here to answer.

Visual: `QuestionCard` arrives with its full text in one move (question text 36 px), worded as printed: "The gravitational potential energy of a space probe changes from −6.0 × 10¹⁰ J to −4.0 × 10¹⁰ J. (a) Did the probe move closer to the planet or further from it? (b) Calculate the change in gravitational potential energy. (c) Explain why both values are negative." Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 2 (brief)
> The change is final minus initial: minus four, minus minus six, so plus two point zero times ten to the ten **joules**. U went up, towards zero, so the probe moved further away. Both values are negative because the zero is at infinity, and the probe is closer than that. The slip is reading minus four as smaller than minus six, and saying it moved **in**.

Visual: card shrinks to the top. Rows (44 px): on "joules" "ΔU = (−4.0 × 10¹⁰) − (−6.0 × 10¹⁰) = +2.0 × 10¹⁰ J" in a dark-ink frame (52 px); "(a) U increased (towards 0): further away"; "(c) U = 0 at infinity; any finite r gives U < 0". A mini well graph shows the marker moving up the wall. On "in" a chip "−4 < −6, so it moved closer" fades in and is crossed. Hold about 1 second.

### 15. handoff
> A satellite in orbit doesn't just have potential energy. It's moving too, so it has kinetic energy. In a higher orbit its potential energy is greater, but we know it moves more slowly. So what happens to its total energy? That's next: why a higher orbit has lower speed, but greater total **energy**.

Visual: board clears to the gravity stage: Earth plate, two circular orbits (r and 2r) with a satellite plate on each. Beside each satellite two bars: violet "U" pointing down from a zero line (the outer one half as deep) and an orange "K" bar pointing up with "?"; a third outlined bar "total = ?". On "energy" a chip writes "Next: why does a higher circular orbit have lower speed but greater total energy?". Hold about 2 seconds. This is the final frame.

### 16. key notes (quiet, hold about 50 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Gravity weakens, so work outwards = area under F against r.
2. That area from r out to infinity is finite: GMm/r.
3. U = 0 at infinity, so U = −GMm/r (r from the centre).
4. ΔU = GMm(1/r₁ − 1/r₂): moving outwards, U increases.
5. Near the surface ΔU ≈ mgh, with an error of about h/R.

Memory aid (framed card under the notes, hand lettering, violet and navy as in scene 10): *Zero at infinity. Negative below. Climbing out is an increase.* Notes in the role colours, 32 px; about 270 characters of bullet text; no paragraphs.

## Teaching checks

- **Does it explain causes?** Why mgh overestimates: it uses the strongest g for the whole climb (2, 9). Why the work is an area: force times step, added up (3). Why infinity can be the zero: the total work to get there is finite (4) and no interaction remains there for any pair (5). Why U is negative: falling in from zero, gravity does work, so U drops (5). Why an outward move increases U: less negative (7, 8).
- **Misconceptions addressed:** mgh works at any height (2, 9); negative U means less than no energy (6); a change between two negatives must be negative (7, crossed in 12); "−4 is less than −6" (crossed in 14); U must be positive to escape (6, "from rest", ahead of v23).
- **One idea at a time:** the failure (1, 2), the tool (3), the surprise (4), the definition (5), its meaning (6), changes (7, 8), the old formula's place (9).
- **Video makes it easier:** equal g arrows redrawn shrinking (2); strips sharpening into the area (3); the area bar creeping towards a fixed line (4); the marker falling from the zero line (5); the well (6, 10).
- **Response opportunity:** prediction (3 s); two unseen tasks, 10 s each; feedback about 30 s and 26 s.
- **Avoided double teaching:** Year 11 work and mgh, v17's field, v19's radius recalled in a clause.
- **Syllabus coverage:** `P5-IQ3-05` "derive quantitatively and apply ... gravitational potential energy in radial gravitational fields": U = −GMm/r derived as accumulated work (3 to 5) and applied (8, A1, A2); energy changes between radii (7, 8). Total energy, orbit changes and escape velocity in v22 and v23.
- **Out of scope by design:** kinetic and total orbital energy (v22); escape velocity (v23); potential gradients and equipotentials (site enrichment).

## Practice questions and model answers

**Attempt 1 (scene 11; original wording from a site MC case, 2 marks suggested).** "A 500 kg satellite moves from a circular orbit of radius 7.0 × 10⁶ m to a circular orbit of radius 9.0 × 10⁶ m around Earth. Calculate the change in its gravitational potential energy. (G = 6.67 × 10⁻¹¹ N m² kg⁻², M_E = 6.0 × 10²⁴ kg)"
Model answer: ΔU = GMm(1/r₁ − 1/r₂) = 2.001 × 10¹⁷ × (1/7.0 × 10⁶ − 1/9.0 × 10⁶) = 2.001 × 10¹⁷ × 3.175 × 10⁻⁸ = +6.35 × 10⁹ J (an increase). Classic mistake (crossed): −6.35 × 10⁹ J.

**Attempt 2 (scene 13; original, 3 marks).** "The gravitational potential energy of a space probe changes from −6.0 × 10¹⁰ J to −4.0 × 10¹⁰ J. (a) Did the probe move closer to the planet or further from it? (b) Calculate the change in gravitational potential energy. (c) Explain why both values are negative."
Model answer: (b) ΔU = U_f − U_i = −4.0 × 10¹⁰ − (−6.0 × 10¹⁰) = +2.0 × 10¹⁰ J. (a) U increased towards zero; since U = −GMm/r becomes less negative as r increases, the probe moved further away. (c) U is defined as zero at infinite separation; gravity is attractive, so at any finite separation the system has less energy than at infinity, giving U < 0. Classic mistake (crossed): "−4 is smaller than −6, so it moved closer".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Constants | G = 6.67 × 10⁻¹¹; M_E = 6.0 × 10²⁴ kg; R_E = 6.371 × 10⁶ m; GM = 4.002 × 10¹⁴; GMm (1000 kg) = 4.002 × 10¹⁷ | throughout |
| Hook | r₂ = 4.230 × 10⁷ m; h = 3.593 × 10⁷ m; mgh = 1000 × 9.8 × 3.593 × 10⁷ = 3.521 × 10¹¹ J ("three point five") | 1 |
| True ΔU | 6.2816 × 10¹⁰ − 9.461 × 10⁹ = 5.336 × 10¹⁰ J ("five point three", "five point three four"); ratio 6.60 | 2, 8, 9 |
| g at the top | 0.224 N kg⁻¹ = 2.27 % of 9.86 ("less than a fortieth") | 2 |
| Surface force (1000 kg) | 9.86 × 10³ N | 3 |
| Area fractions | 2R: 0.5 (3.14 × 10¹⁰ J); 3R: 0.667 (4.19 × 10¹⁰ J); 10R: 0.9 (5.65 × 10¹⁰ J); total GMm/R = 6.28 × 10¹⁰ J | 4, 6 |
| Strip sums (Revision 2) | uniform strips from R to 4.23 × 10⁷ m, force at each strip's start: 5: 9.92 × 10¹⁰ J; 20: 6.28 × 10¹⁰ J; 80: 5.56 × 10¹⁰ J; exact 5.34 × 10¹⁰ J | 3 |
| U readouts (Revision 2) | 10R: −6.28 × 10⁹ J; geostationary radius: −9.46 × 10⁹ J; 2R: −3.14 × 10¹⁰ J; R: −6.28 × 10¹⁰ J | 5 |
| g readouts (Revision 2) | 9.86 (surface), 8.73 (400 km), 2.46 (2R), 0.224 N kg⁻¹ (top) | 2 |
| Crossed slip (Revision 2) | altitude 3.59 × 10⁷ m used as r₂: U₂ = −4.002 × 10¹⁷ / 3.593 × 10⁷ = −1.11 × 10¹⁰ J | 8 |
| Potential | V = −GM/R = −6.28 × 10⁷ J kg⁻¹ (screen only) | 7 |
| U values | U(R) = −6.28 × 10¹⁰ J; U(4.23 × 10⁷ m) = −9.46 × 10⁹ J | 8 |
| mgh error | 10 km: 0.157 %; 400 km: 6.28 % (h/R) | 9 |
| A1 | GMm = 2.001 × 10¹⁷; bracket 3.175 × 10⁻⁸; ΔU = 6.352 × 10⁹ J ≈ 6.35 × 10⁹ | 11, 12 |
| A2 | ΔU = +2.0 × 10¹⁰ J | 13, 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov); Codex to re-check.

- GEO r = 4.22975 × 10⁷ m (v19). GMm/R = 4.002 × 10¹⁷ / 6.371 × 10⁶ = 6.28159 × 10¹⁰ J; GMm/r₂ = 9.4615 × 10⁹ J; ΔU = 5.33543 × 10¹⁰ J. mgh = 1000 × 9.8 × 3.59265 × 10⁷ = 3.52080 × 10¹¹ J; ratio 6.599.
- g(r₂) = 4.002 × 10¹⁴ / (4.22975 × 10⁷)² = 0.22369 N kg⁻¹; / 9.8597 = 0.02269.
- 400 km: exact ΔU = 3.7109 × 10⁹ J (1000 kg); with g = GM/R² mgh = 3.9439 × 10⁹ J (6.28 % high); with g = 9.8, 3.92 × 10⁹ J (5.64 % high). 10 km: h/R = 0.15696 %.
- A1: 1/7.0 × 10⁶ − 1/9.0 × 10⁶ = 3.17460 × 10⁻⁸; × 2.001 × 10¹⁷ = 6.35238 × 10⁹ J.
- Revision 2: work from R to nR = (GMm/R)(1 − 1/n): 2R 3.14079 × 10¹⁰, 3R 4.18773 × 10¹⁰, 10R 5.65343 × 10¹⁰ J. Left-endpoint strip sums (uniform in r, R to 4.22975 × 10⁷ m): 5 strips 9.9195 × 10¹⁰, 20 strips 6.2826 × 10¹⁰, 80 strips 5.5570 × 10¹⁰ J (exact 5.33543 × 10¹⁰). U at 10R = −6.28159 × 10⁹ J; at 2R = −3.14079 × 10¹⁰ J. Crossed slip: 4.002 × 10¹⁷ / 3.59265 × 10⁷ = 1.11394 × 10¹⁰ J.

## Memory aid check

- **"Zero at infinity. Negative below. Climbing out is an increase." (the gravity well)** From the site's "depth of the well" (lesson 14 Account answer) and lesson 15's "energy landscape". Meaning, as said in scene 10: U = 0 far away, U < 0 at every finite r, and moving outwards raises U towards zero. Assumptions checked: the well's wall follows U = −GMm/r only outside the planet (scene 5 tag "outside Earth"); the well is an energy picture, not a physical hole (open decision 1). It helps a new case: A2 (which way did the probe move?) and v22's orbit energies. Introduced after scenes 5 to 9.
- **Considered, not used:** "Negative means bound" (true for total energy, which is v22's idea; it would pre-empt v22 and confuse U with E).

## Narration length estimate


Revision 2 count (6 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed; total = sum of scene strings, which replaces Revision 1's joined count of 5,681): **5,783 characters**, 16 scenes. Characters per scene (1 to 16): 314, 477, 516, 444, 403, 378, 402, 447, 480, 206, 292, 395, 310, 348, 296, 75. At 13.3 characters per second the speech is about 435 s; add about 3 s for the prediction countdown, about 3 s for the strip refinement in scene 3, about 3 s for the end-radius drag in scene 4, about 2 s for the satellite's two rides in scene 2, about 2 s for the height slider in scene 9, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the memory-aid hold, 2 s for the handoff hold and about 44 s more of the quiet notes hold (50 s in all; about 83 s of holds and countdowns): **about 518 s**, inside the 5,500 to 7,000 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 2's last sentence (the analogy); scene 7's potential sentence (keep the chip).

## Opening frame

v20's final frame (`phys-y12-m5-v20.md`): paper background; the Sun plate at the left focus of Halley's long, thin ellipse; the comet plate at aphelion; a dashed line from the comet off the right edge to "∞" with the chip "U = ?"; an empty energy bar "gravitational energy?"; heading "How do Kepler's laws describe circular and elliptical orbits?"; chip "Next: why does gravitational potential energy use a zero at infinity?". Scene 1 slides the Sun and comet away and swings the dashed line to rise from Earth; the heading changes in scene 2.

## Final frame

The last explained frame (end of scene 15): paper background; the Earth plate at the left; two dashed circular orbits at r and 2r with a satellite plate on each; beside each satellite a violet "U" bar hanging down from a zero line (the outer bar half the depth of the inner), an orange "K = ?" bar and an outlined "total = ?" bar; heading "Why does gravitational potential energy use a zero at infinity?"; chip "Next: why does a higher circular orbit have lower speed but greater total energy?". v22 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m5-v21` (route phys-y12-m5-v21). Suggested explainer folder `src/explainer/lessons/phys-y12-m5-v21`; build folder `docs/production/claude-pm/lessons/p-y12-m5-v21` (root to confirm).

In order (16 scene headings): hook, mgh-fails, work-area, finite-total, zero-at-infinity, negative-meaning, changes, worked-geo, mgh-limit, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). `motionTools`: work-area builder with live strip counts and a live end-radius drag, energy well graph with live r and U (kit gap 6), gravity stage (kit gap 1), `AlignedAlgebra`, `NumberTicker`, `ScribbleCircle`, `PenArrow`, `Countdown`, `CameraStage`. Transitions (Revision 2): 1 continue from v20 with the line swing; 1 to 2 camera continue; 2 to 3 clear change; 3 to 4 camera pull back; 4 to 5 clear change; 5 to 6 camera continue; 6 to 7 camera push to full-width algebra; 7 to 8 clear change to full-width working; 8 to 9 camera continue to a new panel; 9 to 10 clear change; attempts card shrink; 14 to 15 clear change; 15 to 16 fade.

Holds: hook (3 s), attempt-1, attempt-2 (10 s), key-notes (about 50 s). Review evidence paths: `checks/p-y12-m5-v21-learning-review.md`, `checks/p-y12-m5-v21-science-check.md`.

## Assets


Have (inspected 6 Nov with the Read tool; scaled uniformly only, never stretched):
- `public/assets/physics/phys-y11-earth-v1.png`: scenes 1, 2, 6, 8, 10, 15.
- `public/assets/physics/y12p-satellite-v1.png` (1585 × 992, RGBA; delivered in brief 188): scenes 1, 2, 3, 5, 8, 15.

Need (new plates): none.

Coded: radial line, g arrows, force arrows, force curve and strips, area bar, sliders and readouts, energy well graph and cross-section, brackets, algebra, tables, chips, cards, countdowns, notes board.

Kit gaps: 6. **Work-area builder and energy well graph** (F = GMm/r² curve with refining strips and a running area, a live end-radius drag with an area-fraction bar against GMm/R; U = −GMm/r with the zero line at the top, a sliding marker with live r and U, ΔU brackets and a matching well cross-section).

## Codex asset brief (Year 12 Physics M5 v21)


No new plates. Revision 2: `y12p-satellite-v1.png` was delivered in brief 188; the build checks it reads at the 40 px size used here.

## Codex error-check brief

Error-only check:
1. Re-check every value under "Numbers to verify" and every value in narration, screen text, attempts and notes against "Numbers used".
2. Confirm the physics of every learner-visible claim: mgh assumes constant g; work under a varying force is the area under F against r; the area from r to infinity is GMm/r; U = −GMm/r with U = 0 at infinity; |U| is the energy to separate from rest; ΔU = GMm(1/r₁ − 1/r₂) > 0 outwards; ΔU ≈ mgh for h ≪ R with error h/R (author notes a to e).
3. Confirm the memory aid's assumptions.
4. Confirm every cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
5. Confirm both attempt cards are original, carry every given, and show nothing answer-bearing.
6. Confirm the syllabus quote matches the route JSON exactly and is labelled 2017.
7. Confirm no person, hand, face or body outline is drawn or requested.
8. Confirm no em dash (U+2014) and no U+2061, and Australian spelling.
9. Confirm the narration counts by script.
10. Report the site notes under Decisions to root.

## YouTube metadata (draft)

Title: Gravitational Potential Energy: Why U = −GMm/r Is Zero at Infinity | HSC Physics Module 5

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module5/lesson14.sa.html

Lift a 1000 kg satellite to geostationary height and mgh overestimates the energy more than six times. See why: gravity weakens as you climb, so the work is the area under a falling force curve, and that area stays finite all the way to infinity. That is why gravitational potential energy is zero at infinity and U = −GMm/r is negative everywhere else. Then calculate energy changes between orbits and see when mgh still works. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 5: Advanced Mechanics.
Syllabus content (NSW Physics Stage 6, 2017):
"derive quantitatively and apply the concepts of gravitational force and gravitational potential energy in radial gravitational fields to a variety of situations, including but not limited to: ... total potential energy of a planet or satellite in its orbit U = −GMm/r; ... energy changes that occur when satellites move between orbits (ACSPH096)"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Next: why a higher orbit has lower speed but greater total energy.

#HSCPhysics #Physics #GravitationalPotentialEnergy #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (is the area-to-infinity surprise clear without calculus; does the well picture help or mislead), then the physics check and the Codex error check.
- Judge the strip refinement and the area bar at playback speed.

## Revision 2 (6 Nov 2026)

Brief 188 findings (`checks/p-y12-m5-v21-learning-review.md`, `checks/p-y12-m5-v21-science-check.md`): 0 blocker, 1 should fix, 1 optional.
- **Should fix, S3 graph and work-area label (lifting work against work by gravity).** Resolved: the graph's force axis is now "lifting force for a slow lift, F (N): outward, the same size as gravity's pull"; the satellite shows equal outward (lifting) and inward (gravity) amber arrows; the area is labelled "work you supply = area under F against r". The narration adds one sentence ("To lift the satellite slowly, you have to push it outwards with a force as big as gravity's pull.") and says "the lifting force barely changes, so the work you supply is that force times the step". Scene 7's "work you supply (slowly) = ΔU" line already matched. Scene 3 narration +117 characters.
- **Optional, Decisions handoff bullet (scene 16 named).** Resolved: the bullet now names scene 15.

Visual upgrade (to `../maths-visual-standard.md` and the build gate):
- Decisions gain "Type sizes", "Anchor", "Simulation" and "Stage changes"; the colour key lists the role colours and full-opacity grey.
- Plates: the delivered satellite moves to "Have" (inspected); scene 1 already opens on the painted Earth with the satellite on its surface, and the satellite now rides the radial line in scene 2.
- Live controls: the core one is scene 4's end-radius drag with live work and fraction readouts (Python: 3.14, 4.19 and 5.65 × 10¹⁰ J at 2R, 3R and 10R against 6.28 × 10¹⁰ J); scene 3 live strip sums (9.92, 6.28, 5.56 × 10¹⁰ J for 5, 20 and 80 strips, closing on 5.34 × 10¹⁰ J); scene 2 a live g readout; scene 5 live r and U; scene 9 a height slider with the h/R error.
- Stage changes: scene 7 becomes full-width algebra with the well graph as a thumbnail, which breaks the scenes 5 to 7 well-graph run (about 95 s in Revision 1); scene 9 moves to a new working panel.
- Hand tags and a pen mark in role colours in every teaching scene ("g = 9.8 all the way?", "36,000 km up", "gets weaker", "full price every metre", "push = pull (slow lift)", "force × step", "keeps going", "never passes the line", "no pull out here", "drops below zero", "steep near Earth", "from rest", "less negative = up", "minus a minus", "less negative", "final minus initial", "near the ground: fine", "satellites: exact formula").
- Framed answers: the area (3), GMm/R (4), U = −GMm/r (5), ΔU = GMm(1/r₁ − 1/r₂) (7), +5.34 × 10¹⁰ J (8), ΔU ≈ mgh (9) and every feedback result. New crossed slip: the altitude used as r₂ (8).
- Scene 6: the well stays beside its labelled graph with a grey tag "an energy picture, not a hole" (the review's keep note; open decision 1 settled).
- Scene 10 and the notes: the memory aid is a framed card; key notes cut from four dense items (about 510 characters) to five short bullets (about 270 characters); quiet notes hold 60 s to 50 s.
- Question cards arrive with their full text in one move.
- Type sizes stated; grey tags at full opacity.

New plate requests: none.

Counts: 5,681 (joined) or 5,666 (scene sum) to 5,783 characters (scene sum); about 518 s to about 518 s.
