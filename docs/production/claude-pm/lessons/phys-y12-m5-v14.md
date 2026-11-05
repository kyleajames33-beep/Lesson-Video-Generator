# Year 12 Physics M5 V14: Banked roads. How does a banked road reduce reliance on friction? (design)

Status: Revision 1 (6 Nov 2026): first design. Needs independent learning review and science check before voicing.

Narration 5,582 characters, 17 scenes, about 506 s, counted by script with the build parser rules (see "Narration length estimate"). Opens on v13's final frame.

Scope: fourteenth video of Year 12 Physics (Physics Stage 6, 2017 syllabus), Module 5 (Advanced Mechanics), fourth video on circular motion, inquiry question "Why do objects move in circles?". Templates: `phys-y12-m5-v01.md` and `phys-y12-m5-v10.md` (this run's structure), `phys-y11-fa1-v01.md`, `math-a12-d10.md` (calculation layout), `bio-y11-fa1-v05.md` (plates and asset brief format). No starter pack exists; the pack work is done here. Site lesson read in full (6 Nov, read-only; the same lesson as v12 and v13): hook, misconceptions 1 to 3, card 2 "Banked Curves (No Friction)" with its free-body diagram, text description and worked example 2, card 3 "Banked Curves (With Friction)" with its speed-regime table, diagram, maximum-speed derivation and worked example 3, Daytona, the MC questions, Activity 1 Q2, Activity 2, the wrap-up misconception on steep banking, "Account 6 marks" and short-answer Q2 and Q3: `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson08.sa.html`, SHA256 `9bcb63c78453091f25d5f5a84d39512bad41ec23ae411fd2555b7d28eb565a4a` (recomputed 6 Nov; matches the route). Route entry: `phys-y12-m5-v14` in `../../programme/phys-y12-route-inputs.json`, sections `l08-design-title`, `l08-friction-title`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Derive the design speed without friction, then compare the direction of friction above and below it. Distinguish separate steady states from accelerating between speeds." Next: "phys-y12-m5-v15: Does the inward force do work in uniform circular motion?"

Owner rules applied: 2017 syllabus only, quoted exactly; one main learner question; no people, hands, faces or body outlines (the site's "driver" in its MC and the "lorries" are cars and trucks only; the rear-view car shows empty seat backs; the site's motorcyclist "lean" warm-up is not used); real objects are painted plates (rear-view car, top-view car), and the banked road cross-section, force arrows, components, angle marks and all working are coded; plates never stretched; one reasoning stage at a time; calculation layout with task strip, equation strip and grouped givens; every number recalculated in Python; g = 9.8 m s⁻²; site and syllabus symbols (N, θ, v_design, μ_s, F_c = mv²/r); in-teaching prediction with a 3 s countdown; "Pause here to answer." then a 10 s countdown with the full worded question on screen; brief feedback with one crossed-out mistake; HSC-style questions (A1 is the site's Activity 1 Q2, A2 the site's MC on a 90 km h⁻¹ design, made a short answer); optional key-notes hold; Australian spelling; no em dashes.

Syllabus content (Physics Stage 6 (2017), Module 5 Advanced Mechanics; ledger ids `P5-IQ2-02`, `P5-IQ2-03`), quoted from the route JSON `syllabusActions`:

- `P5-IQ2-02`: "analyse the forces acting on an object executing uniform circular motion in a variety of situations, for example:" "cars moving around horizontal circular bends", "a mass on a string", "objects on banked tracks (ACSPH100)"
- `P5-IQ2-03`: "solve problems, model and make quantitative predictions about objects executing uniform circular motion in a variety of situations, using the following relationships:" "a_(c)=(v^(2))/(r)", "v=(2πr)/(T)", "F_(c)=(mv^(2))/(r)", "ω=(∆θ)/(t)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 53)

**Boundary:** starts on v13's final frame (the tilted road, the rear-view car, N at right angles to the road with a dashed inward component and "?"). Teaches: why a tilted normal force has an inward part; why forces on a bend are resolved horizontally and vertically (the acceleration is horizontal); N cos θ = mg and N sin θ = mv²/r with no friction; tan θ = v²/(rg) and the design speed v_design = √(rg tan θ), independent of mass; site worked example 2 (80 m, 12°: 12.9 m s⁻¹); how much friction banking saves at that speed compared with a flat road (2.50 × 10³ N for the v12 car); friction up the slope below the design speed and down the slope above it, reasoned from the slip it opposes; that each speed is a separate steady state; the ramp mistake N = mg cos θ versus N = mg/cos θ on a banked bend at the design speed. Stops before the maximum speed with friction (site worked example 3; open decision 1), loops and vertical circles, and work (v15).

## Decisions

- **Learner question (route wording kept).** "How does a banked road reduce reliance on friction?" The answer, built in order: tilting the road tilts the normal force, giving it an inward part (2); with no friction, that part alone can supply mv²/r at one speed, the design speed (3 to 5); at that speed a flat road would need 2.50 × 10³ N of friction and the bank needs none (6); away from it, friction makes up the difference, in a direction set by the slip it opposes, and the amount is small near the design speed (7 to 9).
- **Hook (site hook and Key Insight "icy banked curves can still be navigated safely at the correct speed").** "On ice, could a car still get round?" Chips "No, it would slide off" and "Yes, at one particular speed". Answered in scene 5.
- **Resolve horizontally, not along the slope (new emphasis; site "Exam Tip" and "Account" step 4).** Students arrive from Year 11 inclined planes, where forces are resolved along and across the slope and N = mg cos θ. Scene 3 states the reason for the different choice (the acceleration is horizontal, towards the centre of a horizontal circle); scene 10 shows the consequence (N = mg/cos θ, larger than mg). This is the misconception the site's own misconception 3 targets.
- **Same pattern as the conical pendulum (site card 2 "mathematically identical to the conical pendulum equation").** Said in one sentence (3, 4), with the v13 pendulum ghosted beside the road for two seconds.
- **Worked example (site worked example 2, unchanged).** r = 80 m, θ = 12°: v_design = √(80 × 9.8 × tan 12°) = √166.6 = 12.9 m s⁻¹, 46.5 km h⁻¹ (narrated "forty-six"; site note: the site's "√166.9" and "46.4 km/h" come from rounding, recorded in v12's site note 1).
- **How much friction banking saves (new comparison, built from v12).** The same 1200 kg car (v12's worked example) at 12.9 m s⁻¹ on a flat 80 m bend needs f = mv²/r = 2.50 × 10³ N; on the 12° bank at that speed it needs none. Only already-taught equations are used. This is the most direct numerical answer to the learner question.
- **Friction off the design speed (site card 3 table and diagram; route "compare the direction of friction above and below it").** Reasoned as in v12: friction opposes the slip that would happen without it. Slower: the bank's inward push alone is more than the turn needs, so the car would slip down the bank, and friction acts up the slope. Faster: the push is not enough, the car would slip up the bank, and friction acts down the slope, its horizontal part adding inwards. Arrow lengths come from the two force equations (author note b); no friction values are narrated.
- **Separate steady states (route stop; kit family `m5-banked-friction`: "Distinct valid constant-speed states, not a car accelerating between them").** Scene 9 shows three side-by-side panels, each labelled with its own steady speed, and says "three separate trips". Speeding up on the bend needs a forward friction part as well (author note c); not taught.
- **Maximum speed with friction not taught (route stop; open decision 1).** The site's card 3 derives v_max = √(rg(tan θ + μ_s)/(1 − μ_s tan θ)) and says it must be derived in exams. The route ends at the direction of friction, and adding the derivation would take about 90 s more. Worked example 3 (100 m, 8°, μ_s = 0.25: 19.9 m s⁻¹) is checked and held in reserve.
- **Mistake scene (scene 10).** The ramp result N = mg cos θ used on a banked bend. Kept because Year 11 inclined-plane habits make it the slip this case invites, and the site's misconception 3 is about N.
- **Memory aid (scene 11): "Friction fights the slip."** From the site's rule "It opposes the impending relative motion between tyre and road" and its warning "Do not memorise friction as 'always inward' or 'always up'". See "Memory aid check".
- **Attempts (HSC style).** A1 (site Activity 1 Q2): 150 m, 5°: 11.3 m s⁻¹ = 40.8 km h⁻¹. A2 (site MC, made a short answer): designed for 90 km h⁻¹, car at a steady 60 km h⁻¹: friction up the slope. Crossed: A1 the calculator in radians (tan 5 rad = −3.38); A2 "no friction is needed on a banked road".
- **Colour key (v11 to v13).** Forces amber; vertical components blue; horizontal (inward) components teal; friction amber with its own label "f"; acceleration violet; givens navy; slip directions red dashed; crossed chips red.
- **Handoff (route next).** Scene 16 switches to a top view of the banked bend at the design speed with the inward net force and the velocity at right angles, and asks whether the inward force does work (v15). See "Final frame".
- **Site sources used:** hook; misconceptions 1 to 3 (5, 9, 10); vocabulary "banked curve", "banking angle", "design speed" (2, 4); card 2 in full and worked example 2 (2 to 5); card 2 Key Insight (icy banked curves, 1, 5); card 3 table, diagram, "Do not memorise" warning (7, 8, 11); MC "designed for 90 km/h" (A2); Activity 1 Q2 (A1); "Account 6 marks" steps 2 to 6 (2 to 4); wrap-up misconception on steep banking (9, as "most traffic needs only a little grip"). Not used: Daytona (site note 3 in v12; a real venue); card 3's maximum-speed derivation and worked example 3 (open decision 1); short-answer Q2 (design and maximum speeds, its second part needs the derivation); short-answer Q3 (the banking-angle judgement, reserve).
- **Site notes (site lesson 8, read 6 Nov):** recorded in `phys-y12-m5-v12.md` (notes 1 to 4: km h⁻¹ rounding in worked examples 2 to 4 and short-answer Q2; N = mg/cos θ stated for any banked curve; Daytona's two radii; the unsourced "3–8°"). Note 2 bears directly on this video: the design keeps N = mg/cos θ to the design speed only.
- **Cause chain taught, in order:** (1) N is at right angles to the road, so tilting the road by θ tilts N by θ from the vertical (2); (2) N then has an inward horizontal part (2); (3) the acceleration is horizontal, so resolve horizontally and vertically (3); (4) N cos θ = mg and N sin θ = mv²/r, so tan θ = v²/(rg) at one speed (3, 4); (5) at that speed no friction is needed, whereas a flat road needs the whole mv²/r from friction (5, 6); (6) slower or faster, the bank's push is too much or too little, the car would slip down or up, and static friction opposes that slip (7, 8); (7) near the design speed only a little friction is needed (9).
- **Entry knowledge (route `entryKnowledge`, v12 and v13):** f = mv²/r on a flat bend, static friction opposes the slip, N = mg on the flat (v12); resolving one slanted force into a vertical part balancing mg and a horizontal part equal to mv²/r, tan θ = v²/(rg) (v13); inclined planes and N = mg cos θ for a block at rest on a ramp (Year 11, recalled in scene 10).
- **Learner-visible vocabulary (plain meaning at first use):** banked (a road tilted towards the centre of the bend, 1); bank angle θ (the road's tilt from horizontal, 1); design speed (the one speed at which a banked bend needs no friction, 4).
- **Legacy logic ported:** none. The coded families `m5-banked-track` (frictionless, N against weight) and `m5-banked-friction` (`rotation-details`; 30° bank, g = 10, μ_s = 0.50, three steady states with friction up, none and down) are reused and reconfigured to the site's 12°, 80 m, g = 9.8 case (kit gaps below). The road cross-section stage and rear-view car come from v12.
- **New explainer motion:** **banked cross-section** (v12's road stage at 12°: N at right angles to the road, dashed vertical and horizontal components, a θ arc between N and the vertical and an equal θ arc between the road and the horizontal); **three-state panels** (reconfigured `m5-banked-friction`: three cross-sections side by side at 8, 12.9 and 18 m s⁻¹ with friction arrows from the model and red dashed "would slip" arrows); **pendulum ghost** (v13's stage, faded, beside the road); **top-view bend** (circle stage from v11) for the handoff; `AlignedAlgebra`; `Countdown` (3 s in scene 1; 10 s in scenes 12 and 14); `QuestionCard`; `Chip` with `cross`; `PenArrow`; `ScribbleCircle`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the banked cross-section on the left (road low point well above the bottom 12% of the frame); working on the right; the three-state panels across the full width in scenes 7 to 9.
- **No human figures.** No driver, rider or engineer drawn or named.
- **Author notes (not learner copy):**
  (a) Geometry: rotating the road by θ rotates its normal by θ, so N makes θ with the vertical. The two θ arcs (road to horizontal, N to vertical) are shown together in scene 2.
  (b) Friction values for the panels (m = 1200 kg, r = 80 m, θ = 12°; f positive down the slope; from N sin θ + f cos θ = mv²/r and N cos θ − f sin θ = mg): 8 m s⁻¹: N = 1.17 × 10⁴ N, f = −1.51 × 10³ N (up the slope, f/N = 0.13); 12.9 m s⁻¹: f = 0; 18 m s⁻¹: N = 1.25 × 10⁴ N, f = +2.31 × 10³ N (down the slope, f/N = 0.18). A flat road at 18 m s⁻¹ would need μ_s ≥ 0.41. Not narrated; arrow lengths only.
  (c) A car speeding up or slowing down on the bend also needs a component of friction along its direction of travel; the panels are steady states only (route stop).
  (d) Without friction below the design speed, N sin θ = mg tan θ (if N cos θ = mg) is more than mv²/r, so the car cannot follow the horizontal circle and would move down the bank. The narration says "the bank would push it inwards more than it needs".
  (e) Flat comparison: 1200 × 12.909² ÷ 80 = 2.50 × 10³ N, μ_s ≥ 0.213 (equal to tan 12°, not narrated).
  (f) Pronunciations: "N cosine theta", "N sine theta", "tan twelve", "v design".

- **Open decisions for root:**
  - **1. Maximum speed with friction (root).** The site's card 3 derivation and worked example 3 (19.9 m s⁻¹) are not in this video (route stop and length). Options: a short follow-up video "What is the fastest safe speed on a banked bend?", a worked-example slot in the Module 5 revision video, or accept the omission. The site's exam tip says the derivation is examinable.
  - **2. Friction-saving comparison (learning review).** Scene 6 uses v12's 1200 kg car on this bend; the mass is borrowed, not from the site's worked example 2. Confirm.
  - **3. Ramp contrast (learning review).** Scene 10 relies on Year 11 inclined planes. If the review finds it confusing for students who skipped that topic, keep only "N = mg/cos θ, more than the weight" and cut the ramp sentence (about 110 characters).

Main question: *A highway bend of radius 80 m is banked at 12°. On ice, can a car still get round it, and how does the bank cut the friction a car needs at other speeds?*
Entry knowledge: f = mv²/r on a flat bend and friction opposing slip (v12); resolving a slanted force, tan θ = v²/(rg) (v13); N = mg cos θ on a ramp (Year 11).
Stops after: the tilted normal force; horizontal and vertical resolution; v_design = √(rg tan θ); the 12.9 m s⁻¹ example; the friction saved; friction up below and down above the design speed; separate steady states; N = mg/cos θ versus mg cos θ. No maximum-speed-with-friction derivation.
Handoff: v15, whether the inward force does work in uniform circular motion.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *N*, *m*, *g*, *θ*, *f*, *v*, *r*, *v_design*. Paper background and handwritten headline face as the explainer house style.

### 1. hook (round the bend on ice?)
> Here's a road banked at twelve degrees, sloping down towards the centre of the bend. Now imagine it's covered in ice, so there's almost no friction at all. On a flat road, we saw that would be hopeless. Could a car still get round this bend without sliding off? Make a **prediction**.

Visual: opens on v13's final frame (see "Opening frame"). On "twelve degrees" an angle arc "12°" between the road and a dashed horizontal line. On "covered in ice" a pale blue glaze washes along the road line and a chip "no friction". On "without sliding off" two chips "No, it would slide off" and "Yes, at one particular speed". On "prediction" a 3 s `Countdown`.

### 2. the tilted normal force
> On a flat road, the normal force points straight up, so it can't help with the turn. But the normal force is always at right angles to the road. Tilt the road by an angle theta, and the normal force tilts by the same angle from the **vertical**. Now it has two parts. Its vertical part, N cosine theta, holds the car up. Its horizontal part, N sine theta, points towards the centre of the **bend**. That inward part is something a flat road just can't give.

Visual: on "On a flat road" a ghost of the flat road and an upright N appears briefly behind the tilted one. On "always at right angles to the road" the right-angle mark at N's base pulses. On "vertical" a dashed vertical line from the centre of mass and an arc "θ" between it and N, matching the "θ" arc at the road (author note a). On "N cosine theta" a dashed blue component up, "N cos θ"; on "N sine theta" a dashed teal component towards the centre pointer, "N sin θ"; on "bend" the "?" from v13's frame is replaced by "inward part". On "a flat road just can't give" the ghost flat road flashes and fades.

### 3. which way to resolve
> Here's an important choice. The car goes round a horizontal circle, so its acceleration is horizontal, towards the centre. So we split the forces horizontally and vertically, not along the slope. On ice, only two forces act, the weight and the normal force. Vertically there's no acceleration, so N cosine theta equals m **g**. Horizontally, N sine theta is the whole net force, so N sine theta equals m v squared over **r**. It's the same pattern as the conical pendulum, with the road's push in place of the string's pull.

Visual: on "its acceleration is horizontal" a violet arrow "a" from the car towards the centre pointer, horizontal. On "not along the slope" a dashed grey pair of axes along and across the slope appears and is crossed; a pair of horizontal and vertical axes ticks. On "only two forces act" the weight (amber, down) and N (amber) pulse. On "N cosine theta equals m g" the line "vertical: N cos θ = mg". On "N sine theta equals m v squared over r" "towards the centre: N sin θ = mv²/r". On "the conical pendulum" v13's pendulum appears faded beside the road for about 2 seconds, its tension and components matching N's.

### 4. the design speed
> Divide one equation by the other, and N and m both cancel. Tan theta equals v squared over r g, exactly as for the pendulum. So there's one speed where the bank does the whole job by itself. It's called the design speed, and v equals the square root of r g tan **theta**. At that speed, no friction is needed at **all**. The mass cancelled too, so it's the same design speed for a truck or a small car.

Visual: `AlignedAlgebra` divides the two lines: "N sin θ ÷ N cos θ = (mv²/r) ÷ mg"; on "N and m both cancel" N and m strike through together; "tan θ = v²/(rg)". On "v equals the square root of r g tan theta" "v_design = √(rg tan θ)" boxed, with the tag "design speed: no friction needed". On "all" a chip "f = 0". On "the same design speed for a truck" a small tag "no m: any vehicle".

### 5. worked example: the design speed
> Let's find it for a highway curve of radius eighty metres, banked at twelve degrees. v equals the square root of eighty times nine point eight times tan twelve. That's the square root of about one hundred and sixty-six point six, so about twelve point nine metres per **second**, or forty-six kilometres per **hour**. So yes, even on ice, a car can get round this bend, but only at about that **speed**.

Visual: clear change to the calculation layout with the banked cross-section small at the left. Task strip: "Find the design speed of the curve." Givens in navy: "r = 80 m", "θ = 12°", "g = 9.8 m s⁻²". Equation strip "v_design = √(rg tan θ)". On "eighty times nine point eight times tan twelve" `AlignedAlgebra` "v = √(80 × 9.8 × tan 12°) = √166.6"; on "second" "= 12.9 m s⁻¹"; on "hour" "× 3.6 = 46.5 km h⁻¹". On "speed" the "Yes, at one particular speed" chip from scene 1 ticks and "No" is crossed.

### 6. how much friction it saves
> Now compare a flat road. Take the same twelve hundred kilogram car from earlier, at twelve point nine metres per second, on an eighty metre bend. On the flat, friction would have to supply all of m v squared over r, about two thousand five hundred **newtons**. On the bank, at the design speed, friction supplies **nothing**. That's how banking cuts the reliance on friction.

Visual: two cross-sections side by side: left "flat, 80 m", right "banked 12°, 80 m", both with the rear-view car and "v = 12.9 m s⁻¹". On "friction would have to supply all of m v squared over r" the left car gets an amber friction arrow inwards and `AlignedAlgebra` below it "f = 1200 × 12.9² ÷ 80"; on "newtons" "= 2.50 × 10³ N". On "nothing" the right car shows N and its teal inward part only, tag "f = 0: N sin θ does the job". The heading writes on: "How does a banked road reduce reliance on friction?".

### 7. slower than the design speed
> But real cars don't all drive at the design speed. Suppose a car goes slower. It needs less inward force for the turn. Without friction, the bank would push it inwards more than it needs, so it would slide down the slope, towards the inside of the **bend**. Static friction opposes that slip, so it acts up the **slope**.

Visual: clear change to the three-state panels (reconfigured `m5-banked-friction`), the left panel lit: "slower: 8 m s⁻¹" (illustrative), the middle "design: 12.9 m s⁻¹" and the right "faster: 18 m s⁻¹" dimmed. On "needs less inward force" a dashed outline "mv²/r needed" shorter than the teal "N sin θ" part. On "bend" a red dashed arrow down the slope from the car, "would slip down (inwards)". On "slope" an amber arrow "f" along the road surface, up the slope, drawn from the centre of mass, and the red dashed arrow fades.

### 8. faster than the design speed
> Now a car going faster than the design speed. It needs more inward force than the bank alone gives, so without friction it would slide up the slope, towards the outside. This time friction acts down the **slope**. Its horizontal part points inwards, adding to the normal force's inward part, and together they get the car **round**.

Visual: the right panel lights ("faster: 18 m s⁻¹"). On "more inward force than the bank alone gives" the dashed "mv²/r needed" outline is longer than the teal part. On "slide up the slope" a red dashed arrow up the slope, "would slip up (outwards)". On "slope" an amber arrow "f" down the slope; on "Its horizontal part points inwards" a dashed teal component of f towards the centre; on "round" the two teal parts (from N and f) join end to end and match the "mv²/r needed" outline.

### 9. separate steady trips
> These are three separate trips round the bend, each at its own steady speed. They're not one car speeding up. And close to the design speed, the friction needed is small, which is the whole point of banking. The angle is chosen so that most traffic needs only a little **grip**. Too steep, and slow traffic would tend to slide down. Too gentle, and fast traffic would lean on friction again.

Visual: all three panels lit, each tagged "steady speed" with its own value; the middle one "f = 0". On "not one car speeding up" a faint arrow linking the panels left to right is crossed (caption "three separate steady states"). On "close to the design speed" a small graph below: friction needed (along the slope) against speed, crossing zero at 12.9 m s⁻¹ (up the slope below, down the slope above), with a faint dashed line for a flat road rising as v² far above it. On "grip" the region near 12.9 m s⁻¹ glows with the tag "little friction needed".

### 10. the ramp mistake
> A common slip comes from Year 11 ramp questions. For a block resting on a ramp, N equals m g cosine theta, which is less than its weight. On a banked bend at the design speed, it's the other way round. From N cosine theta equals m g, N equals m g over cosine theta, which is more than the **weight**. The difference is the car's horizontal acceleration. The road has to hold the car up and push it inwards at the same **time**.

Visual: clear change: on the left, a small coded ramp with the wooden block plate (`phys-y11-wooden-block-v1.png`, reused) at rest, "N = mg cos θ (< mg)", forces resolved along and across the slope; on the right, the banked car, "N = mg/cos θ (> mg)". On "weight" the left chip "use N = mg cos θ on the bend" is crossed for the bend (caption "not for a banked bend"). On "horizontal acceleration" the violet "a" on the car pulses (the block has none). On "time" the blue and teal parts of the car's N pulse together, tags "holds it up" and "pushes it in".

### 11. memory aid
> So which way does friction act? Here's a rule that always works. Friction fights the slip. Ask which way the car would slide without friction, and friction points the other **way**. Too slow, it would slip down, so friction acts up. Too fast, it would slip up, so friction acts **down**.

Visual: board clears to the left and right panels with their red dashed slip arrows. On "Friction fights the slip" the handwritten line writes large: "Friction fights the slip." On "way" each red slip arrow flips into its amber friction arrow. On "down" two small tags "too slow: f up the slope", "too fast: f down the slope". Hold about 2 seconds.

### 12. attempt 1 (countdown, 10 seconds)
> Your turn. A highway curve of radius one hundred and fifty metres is banked at five degrees. Calculate its design speed, in kilometres per hour. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "A highway curve of radius 150 m is banked at 5° to the horizontal. Calculate the design speed of the curve (the speed at which no friction is needed), in km h⁻¹. (2 marks)" A small coded HSC-style cross-section: a road line at 5° with "5°" and the centre of the bend marked. The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 1 (brief)
> At the design speed, tan theta equals v squared over r g, so v is the square root of one hundred and fifty times nine point eight times tan five. That's about eleven point three metres per **second**. Times three point six, that's about forty point eight kilometres per **hour**. A classic slip is having the calculator in radians. Tan of five radians is negative, and you can't take its square **root**.

Visual: card shrinks to the top; "150 m", "5°" and "km h⁻¹" underline. Equation strip "v_design = √(rg tan θ)". On "second" "v = √(150 × 9.8 × tan 5°) = √128.6 = 11.3 m s⁻¹". On "hour" "11.3 × 3.6 = 40.8 km h⁻¹". On "root" a chip "tan 5 (radians) = −3.38" fades in and is crossed (caption "calculator in degrees"). Hold about 1 second.

### 14. attempt 2 (countdown, 10 seconds)
> Last one. A banked curve is designed for ninety kilometres per hour. A car takes the curve at a steady sixty kilometres per hour. State which way friction acts on the car, and explain why. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A banked curve has a design speed of 90 km h⁻¹. A car travels around the curve at a constant 60 km h⁻¹. State the direction of the friction force on the car's tyres, and explain why friction acts in this direction. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 15. feedback 2 (brief)
> Sixty is slower than the design speed, so the car needs less inward force than the bank gives. Without friction it would slide down the bank, towards the **inside**. Friction opposes that slip, so it acts up the **slope**. The slip is saying no friction is needed because the road is banked. That's only true at exactly ninety kilometres per **hour**.

Visual: card shrinks to the top; "design speed of 90 km h⁻¹" and "constant 60 km h⁻¹" underline. The left panel ("slower") returns small. On "inside" its red dashed slip arrow down the slope. On "slope" the amber friction arrow up the slope, and the answer line "friction acts up the slope (outwards)". On "hour" a chip "no friction: the road is banked" fades in and is crossed (caption "f = 0 only at 90 km h⁻¹"). Hold about 1 second.

### 16. handoff
> So at the design speed, the normal force does the inward job all the way round. For that car, it's about two and a half thousand newtons, pushing inwards lap after lap. Yet the car's speed never changes. So does that inward force do any work on the car? And if it doesn't, why **not**?

Visual: clear change to a top view of the banked bend (circle stage from v11; the ring shaded darker towards its inner edge to suggest the slope) with the top-view car plate going round at a steady rate, a lap counter ticking. On "all the way round" a teal velocity arrow along the tangent and an amber arrow "F_net = 2.50 × 10³ N" towards the centre ride with the car. On "lap after lap" the lap counter ticks over. On "speed never changes" a readout "speed: 12.9 m s⁻¹ (constant)". On "not" the car pauses at the 3 o'clock position, a right-angle mark appears between the velocity and the inward force, and a chip "W = ?"; chip "Next: does the inward force do work in uniform circular motion?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 17. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Banked road: N is at right angles to the road, so it makes angle θ with the vertical. Resolve horizontally and vertically (the acceleration is horizontal, towards the centre).
2. No friction (design speed): N cos θ = mg; N sin θ = mv²/r; tan θ = v²/(rg); v_design = √(rg tan θ), independent of mass. Here N = mg/cos θ > mg.
3. Slower than design: the car would slip down the bank, so friction acts up the slope. Faster: it would slip up, so friction acts down the slope (its horizontal part adds inwards). Each speed is a separate steady state.
4. Banking reduces the friction needed: none at the design speed, little near it (a flat road needs f = mv²/r).

Memory aid (large, on the notes screen): *Friction fights the slip.*

## Teaching checks

- **Does it explain causes?** Why N has an inward part: it is at right angles to a tilted road (2). Why resolve horizontally: the acceleration is horizontal (3). Why there is one design speed: N sin θ is fixed by the weight and θ, and matches mv²/r at one speed (3, 4). Why banking saves friction: the inward part of N replaces friction (6). Why friction flips direction: it opposes a slip that is down the slope when too slow and up when too fast (7, 8). Why N exceeds mg: N must hold the car up and push it in (10).
- **Misconceptions addressed:** friction always helps or always acts inwards (7, 8, 11; crossed in 15); N = mg on a bank, or N = mg cos θ (10, crossed); banking only matters for racing (9); one car speeding up between the three states (9, crossed); the calculator in radians (crossed in 13).
- **One idea at a time:** tilted N (2) before the resolution choice (3) before the design speed (4, 5) before the friction saving (6) before off-design friction (7 to 9).
- **Video makes it easier:** the matching θ arcs (2); the crossed slope axes (3); the faded pendulum beside the road (3); flat and banked cars side by side at the same speed (6); red slip arrows flipping into friction arrows (7, 8, 11); the friction-against-speed graph crossing zero (9).
- **Response opportunity:** one prediction (3 s countdown) and two unseen HSC-style tasks with every condition visible (radius, bank angle, unit required; design speed, actual steady speed), 10 s each with the invitation to pause; nothing answer-bearing. One crossed mistake each; feedback about 31 s and 24 s.
- **Avoided double teaching:** f = mv²/r and friction opposing slip (v12), the tension resolution and tan θ = v²/(rg) (v13) and N = mg cos θ on a ramp (Year 11) are recalled, not re-taught.
- **Syllabus coverage:** `P5-IQ2-02` for "objects on banked tracks (ACSPH100)": forces identified and resolved without friction, then friction's direction analysed above and below the design speed. `P5-IQ2-03`: F_c = mv²/r used for the design speed and the friction comparison.
- **Out of scope by design:** maximum and minimum speeds with friction (open decision 1); accelerating on a bend (author note c); vertical loops (v15 contrast); work (v15).

## Practice questions and model answers

**Attempt 1 (scene 12; site Activity 1 Q2, HSC style, 2 marks suggested, not an official marking scheme).** "A highway curve of radius 150 m is banked at 5° to the horizontal. Calculate the design speed of the curve (the speed at which no friction is needed), in km h⁻¹."
Model answer: At the design speed only weight and the normal force act: N cos θ = mg and N sin θ = mv²/r, so tan θ = v²/(rg) and v = √(rg tan θ) = √(150 × 9.8 × tan 5°) = √128.6 = 11.3 m s⁻¹ = 11.34 × 3.6 = 40.8 km h⁻¹. Classic mistake (crossed): calculator in radians (tan 5 rad = −3.38).

**Attempt 2 (scene 14; site MC, made a short answer, HSC style, 3 marks).** "A banked curve has a design speed of 90 km h⁻¹. A car travels around the curve at a constant 60 km h⁻¹. State the direction of the friction force on the car's tyres, and explain why friction acts in this direction."
Model answer: Friction acts up the slope (outwards, away from the centre). At 60 km h⁻¹ the car needs less inward net force (mv²/r) than the normal force's horizontal part would give without friction, so without friction the car would slide down the bank towards the inner edge. Static friction opposes this impending slip, so it acts up the slope; it is zero only at the design speed of 90 km h⁻¹. Classic mistake (crossed): "no friction is needed because the road is banked".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Worked example (site worked example 2) | r = 80 m, θ = 12°, g = 9.8: tan 12° = 0.2126; rg tan θ = 166.64; v_design = 12.909 m s⁻¹ ("twelve point nine"); 46.47 km h⁻¹ (screen 46.5, narrated "forty-six") | 1, 5, 6, 16 |
| Friction saving (v12's 1200 kg car) | f_flat = 1200 × 12.909² ÷ 80 = 2499.7 N (2.50 × 10³; "about two thousand five hundred"); banked: 0 | 6, 16 |
| N at design speed (not narrated) | mg = 11 760 N; N = mg/cos 12° = 12 023 N | 10 (symbolic only) |
| Panels (illustrative, author note b) | 8 m s⁻¹: f = 1.51 × 10³ N up the slope; 18 m s⁻¹: f = 2.31 × 10³ N down the slope (arrow lengths only) | 7 to 9 |
| A1 (site Activity 1 Q2) | 150 × 9.8 × tan 5° = 128.61; v = 11.34 m s⁻¹ (11.3); 40.83 km h⁻¹ (40.8); tan 5 rad = −3.381 | 12, 13 |
| A2 (site MC) | 90 km h⁻¹ = 25.0 m s⁻¹; 60 km h⁻¹ = 16.7 m s⁻¹ (not shown) | 14, 15 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov); Codex to re-check.

- tan 12° = 0.212557; 80 × 9.8 × 0.212557 = 166.644; √ = 12.9091; × 3.6 = 46.473.
- 1200 × 12.9091² ÷ 80 = 2499.67; 1200 × 9.8 = 11 760; 11 760 ÷ cos 12° = 12 022.7; 12 022.7 × sin 12° = 2499.67.
- Panels (f positive down the slope): N = mg cos θ + (mv²/r) sin θ, f = (mv²/r) cos θ − mg sin θ: v = 8: N = 11 702.6, f = −1506.0; v = 18: N = 12 513.5, f = +2308.8.
- A1: tan 5° = 0.0874887; 150 × 9.8 × 0.0874887 = 128.608; √ = 11.3406; × 3.6 = 40.826. tan(5 rad) = −3.38052.
- Reserve (not used): site worked example 3: √(100 × 9.8 × (tan 8° + 0.25) ÷ (1 − 0.25 tan 8°)) = 19.9165 m s⁻¹ = 71.70 km h⁻¹.

## Memory aid check

- **"Friction fights the slip."** Meaning, as said in scene 11: static friction acts opposite to the direction in which the surfaces would slide over each other if there were no friction; so first ask which way the car would slip. Assumptions checked: static friction (no actual sliding) and the "would slip" direction found from the frictionless forces (too slow: the bank's inward push is too big, the car slips down; too fast: too small, it slips up). It is the site's own rule ("It opposes the impending relative motion between tyre and road"). It also explains v12's flat road (the tyres would slip outwards, so friction acts inwards). It fails if misread as "friction opposes the motion" (the car's motion is into the screen; the slip is sideways). It helps a new case: A2. Introduced after both directions are reasoned (7, 8).
- **Considered, not used:** "Slow goes low" (only half the rule and silent on friction's direction); "Too fast, friction down; too slow, friction up" (a list to memorise, which the site warns against; it appears only as tags under the aid).

## Narration length estimate

Revision 1 count (6 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,582 characters**, 17 scenes. Characters per scene (1 to 17): 280, 449, 516, 394, 391, 367, 313, 324, 387, 419, 279, 166, 392, 210, 339, 281, 75. At 13.3 characters per second the speech is about 420 s; add about 3 s for the prediction countdown, about 2 s for the pendulum ghost in scene 3, 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 55 s more of the quiet notes hold (about 86 s of holds and countdowns): **about 506 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 10's ramp sentence (open decision 3); scene 9's last sentence; scene 3's pendulum sentence.

## Opening frame

v13's final frame (designed in this wave, `phys-y12-m5-v13.md`): paper background; the road cross-section stage with the road line tilted 12°, lower (inner) edge on the left, a navy pointer "centre of the bend" at the left edge; the rear-view car (`y12p-car-rear-v1.png`) on the road, rotated with it; a teal ⊗ "moving into the screen"; an amber "N" at right angles to the road with a right-angle mark, and an amber "mg" down; a dashed teal horizontal component of N with "?"; no angle label; heading "How does string tension sustain a conical pendulum?"; chip "Next: how does a banked road reduce reliance on friction?". Scene 1 adds the "12°" arc and clears the "Next" chip; the heading changes in scene 6 (on "nothing").

## Final frame

The last explained frame (end of scene 16, before the key-notes board): paper background; a coded top view of the banked bend: a grey road ring, shaded slightly darker towards its inner edge, around a pale central area with a navy centre dot; the blue top-view car (`phys-y11-car-top-v1.png`) stopped on the ring at the 3 o'clock position, nose pointing up the page; a teal velocity arrow from the car along the tangent (up the page); an amber arrow from the car to the centre dot labelled "F_net = 2.50 × 10³ N"; a right-angle mark where the two arrows meet; a lap counter at the top right; a readout "speed: 12.9 m s⁻¹ (constant)"; a chip "W = ?" beside the right-angle mark; heading "How does a banked road reduce reliance on friction?"; chip "Next: does the inward force do work in uniform circular motion?". v15 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m5-v14` (route phys-y12-m5-v14). Suggested explainer folder `src/explainer/lessons/phys-y12-m5-v14` and build folder `docs/production/claude-pm/lessons/p-y12-m5-v14` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 17 scene headings, all `### N.`): hook, tilted-normal, resolve-horizontally, design-speed, worked-design-speed, friction-saved, slower, faster, steady-trips, ramp-mistake, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Scene 1 is `explain` with a 3 s prediction countdown. `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: banked cross-section (v12 road stage), three-state panels (reconfigured `m5-banked-friction`), pendulum ghost (v13), top-view bend (v11 circle stage), friction-against-speed graph, `AlignedAlgebra`, `ScribbleCircle`, `PenArrow`, `Countdown`, `CameraStage`. Transitions (`pickTransition`): 1 to 2 to 3 to 4 camera continue; 4 to 5 clear change to the calculation layout; 5 to 6 camera change to the side-by-side sections; 6 to 7 clear change to the panels; 7 to 8 to 9 camera continue; 9 to 10 clear change; 10 to 11 clear change; attempts and feedback card shrink to the top; 15 to 16 clear change; 16 to 17 fade to the notes board.

Holds: hook (3 s countdown), memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 60 s). Review evidence paths: `learning_review` = `checks/p-y12-m5-v14-learning-review.md`, `science_check` = `checks/p-y12-m5-v14-physics-check.md`.

## Assets

Have (inspected 6 Nov on a session contact sheet; scaled uniformly only, never stretched):
- `y12p-car-rear-v1.png` (requested in v12): scenes 1 to 11, 15.
- `public/assets/physics/phys-y11-car-top-v1.png` (1600 × 800, RGBA): scene 16.
- `public/assets/physics/phys-y11-wooden-block-v1.png` (1600 × 1000, RGBA): scene 10's ramp.
- v13's pendulum plates (`phys-y11-retort-stand-v1.png`, `phys-y11-boss-crossbar-v1.png`, `phys-y11-steel-ball-v1.png`): scene 3's faded ghost.
- **Checked, not used:** `phys-y11-ramp-plank-v1.png` and `phys-y11-ramp-hinge-block-v1.png` (a lab ramp at a fixed angle; the coded ramp keeps θ exact beside the bend); `phys-y11-truck-side-v1.png` (v12 already made the mass point).

Need (new plates, Codex): none (the rear-view car is v12's request).

Coded: banked road line and glaze, angle arcs, centre pointer, force arrows, components, slip arrows, panels, friction-against-speed graph, ramp outline, top-view ring, lap counter, calculation strips, crossed chips, attempt cards and their HSC-style cross-section, countdowns, key notes board.

Kit gaps (for the v14 build brief):
1. **Banked cross-section.** v12's road stage at a set θ with N redrawn at right angles to the road, components, and paired θ arcs.
2. **Three-state panels.** Reconfigure `m5-banked-friction` from its 30°, g = 10, μ_s = 0.50 dataset to θ = 12°, r = 80 m, g = 9.8, m = 1200 kg and speeds 8, 12.9 and 18 m s⁻¹ (author note b); friction arrows along the road from the model; red dashed slip arrows that can flip into friction arrows.
3. **Friction-against-speed graph.** f (positive down the slope) against v from the same model, crossing zero at v_design, with an optional flat-road curve f = mv²/r.

## Codex asset brief (Year 12 Physics M5 v14)

No new plates. Codex confirms, on a session contact sheet at about 400 px wide on the paper and dark board backgrounds, that `y12p-car-rear-v1.png` (when delivered for v12) rotates cleanly to 12° about the midpoint of its contact line without its tyres leaving the road line, and that `phys-y11-wooden-block-v1.png` reads as a block at the ramp size. Append the hand-in to `status.md`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the physics of every learner-visible claim: N on a road tilted by θ makes θ with the vertical (author note a); the acceleration is horizontal, so resolve horizontally and vertically; N cos θ = mg and N sin θ = mv²/r without friction; v_design = √(rg tan θ), independent of mass; 2.50 × 10³ N of friction on a flat 80 m bend at 12.9 m s⁻¹ for 1200 kg; friction up the slope below and down the slope above the design speed (author notes b and d); separate steady states (author note c); N = mg/cos θ > mg at the design speed and N = mg cos θ for a block resting on a ramp.
3. Confirm the memory aid's assumptions (see "Memory aid check").
4. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
5. Confirm both attempt cards carry every condition (radius, bank angle to the horizontal, unit required; design speed, constant actual speed) and show nothing answer-bearing.
6. Confirm the syllabus quotes match the route JSON exactly and are labelled 2017.
7. Confirm no person, hand, face or body outline is drawn or requested (empty cars).
8. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
9. Confirm the narration character count and per-scene counts by script with the build parser rules.

## YouTube metadata (draft)

Title: Banked Roads: Design Speed and the Direction of Friction | HSC Physics Module 5

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module5/lesson08.sa.html

Could a car get round an icy bend with no friction at all? On a banked road it can, at one speed. See how tilting the road tilts the normal force so that part of it points inwards, why we resolve forces horizontally (not along the slope), and how tan θ = v²/(rg) gives the design speed. Work out the design speed of an 80 m bend banked at 12°, compare the friction a flat road would need, and learn which way friction acts when a car is slower or faster than the design speed. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 5: Advanced Mechanics.
Syllabus content (NSW Physics Stage 6, 2017):
"analyse the forces acting on an object executing uniform circular motion in a variety of situations, for example: cars moving around horizontal circular bends, a mass on a string, objects on banked tracks (ACSPH100)"
"solve problems, model and make quantitative predictions about objects executing uniform circular motion in a variety of situations, using the following relationships: a_c = v²/r, v = 2πr/T, F_c = mv²/r, ω = Δθ/t"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: the conical pendulum. Next: does the inward force do work in uniform circular motion?

#HSCPhysics #Physics #CircularMotion #BankedCurves #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v13; check that "resolve horizontally" is understood before the equations, that the slip-then-friction reasoning is clear at playback speed, that the panels read as separate steady trips, and that the attempt cards give nothing away), then the physics check and the Codex error check.
- The matching θ arcs, the slip arrows flipping into friction arrows and the friction graph crossing zero carry the explanation; judge them at playback speed in the voiced preview.
