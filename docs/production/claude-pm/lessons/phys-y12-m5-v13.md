# Year 12 Physics M5 V13: The conical pendulum. How does string tension sustain a conical pendulum? (design)

Status: Revision 1 (6 Nov 2026): first design. Needs independent learning review and science check before voicing.

Narration 5,654 characters, 17 scenes, about 514 s, counted by script with the build parser rules (see "Narration length estimate"). Opens on v12's final frame.

Scope: thirteenth video of Year 12 Physics (Physics Stage 6, 2017 syllabus), Module 5 (Advanced Mechanics), third video on circular motion, inquiry question "Why do objects move in circles?". Templates: `phys-y12-m5-v01.md` and `phys-y12-m5-v10.md` (this run's structure), `phys-y11-fa1-v01.md`, `math-a12-d10.md` (calculation layout), `bio-y11-fa1-v05.md` (plates and asset brief format). No starter pack exists; the pack work is done here. Site lesson read in full (6 Nov, read-only; the same lesson as v12): card 1 "Conical Pendulum" with its free-body diagram, text description, relationships and worked example 1, the interactive, Activity 1 Q1, short-answer Q1, the "Copy into your books" box and the lesson 9 "Analyse 6 marks" answer on a mass on a string (also read in full for v15): `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson08.sa.html`, SHA256 `9bcb63c78453091f25d5f5a84d39512bad41ec23ae411fd2555b7d28eb565a4a` (recomputed 6 Nov; matches the route), and `lesson09.sa.html`, SHA256 `437d0357bca1619358587f6775d5f70be1d243026aff5b9cea4c1a0fca07b74f`. Route entry: `phys-y12-m5-v13` in `../../programme/phys-y12-route-inputs.json`, section `l08-conical-title`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Resolve one tension vector into vertical balance and inward resultant; relate string length to horizontal radius. Stop before banked friction." Next: "phys-y12-m5-v14: How does a banked road reduce reliance on friction?"

Owner rules applied: 2017 syllabus only, quoted exactly; one main learner question; no people, hands, faces or body outlines (the site's "spin it above your head" is not used: the bob hangs from a fixed lab support and is simply shown going round; the car in the handoff shows empty seat backs only); real objects are painted plates (retort stand, boss and crossbar, steel ball bob, rear-view car), and the string, circle, cone outline, force arrows, components, angle marks and all working are coded; plates never stretched; one reasoning stage at a time; calculation layout with task strip, equation strip and grouped givens; every number recalculated in Python; g = 9.8 m s⁻²; symbols as on the site (F_T for tension, T for period, θ from the vertical, L for string length) with the syllabus forms v = 2πr/T and F_c = mv²/r; in-teaching prediction with a 3 s countdown; "Pause here to answer." then a 10 s countdown with the full worded question on screen; brief feedback with one crossed-out mistake; HSC-style questions (A1 is the site's short-answer Q1, A2 the site's Activity 1 Q1); optional key-notes hold; Australian spelling; no em dashes.

Syllabus content (Physics Stage 6 (2017), Module 5 Advanced Mechanics; ledger ids `P5-IQ2-02`, `P5-IQ2-03`), quoted from the route JSON `syllabusActions`:

- `P5-IQ2-02`: "analyse the forces acting on an object executing uniform circular motion in a variety of situations, for example:" "cars moving around horizontal circular bends", "a mass on a string", "objects on banked tracks (ACSPH100)"
- `P5-IQ2-03`: "solve problems, model and make quantitative predictions about objects executing uniform circular motion in a variety of situations, using the following relationships:" "a_(c)=(v^(2))/(r)", "v=(2πr)/(T)", "F_(c)=(mv^(2))/(r)", "ω=(∆θ)/(t)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 53)

**Boundary:** starts on v12's final frame (steel ball on a string from a retort-stand crossbar, going round a horizontal circle, tension and weight arrows, "?"). Teaches: a conical pendulum and its two forces; where the centre of the circle is (level with the bob, below the support); r = L sin θ and the height h = L cos θ; resolving the one tension into F_T cos θ = mg and F_T sin θ = mv²/r; why the string can never be horizontal and why F_T > mg; tan θ = v²/(rg) with the mass and tension cancelling, and the larger angle at higher speed; the site's worked example 1 (0.20 kg, 0.50 m, 30°: r = 0.25 m, F_T = 2.26 N, v = 1.19 m s⁻¹, T = 1.32 s); T = 2π√(h/g) as a short derivation; the r = L mistake. Stops before banking and friction on a bank (v14).

## Decisions

- **Learner question (route wording kept).** "How does string tension sustain a conical pendulum?" The answer, built in order: only tension and weight act, so the tension must do two jobs (2); resolving it gives a vertical part that holds the bob up and a horizontal part that is the whole inward net force (4); the vertical job makes a horizontal string impossible and the tension bigger than the weight (5); dividing links the angle to the speed (6).
- **Hook (v12 handoff, site misconception in the lesson 9 "Analyse" answer: "The string cannot be horizontal").** "Could the string ever be horizontal if the ball went fast enough?" Chips "Yes, if it's fast enough" and "No, never". The answer comes from the forces in scene 5, not from a statement.
- **Fixed support, no hands (owner rule).** The site's hook ("Tie a ball to a string and spin it above your head") is re-objected: the bob hangs from a retort-stand crossbar and is shown already moving (the video never shows how it was started). This matches the site's own diagram ("A bob on a string of length L hangs from a fixed point").
- **Where the centre is (site text description: "moves in a horizontal circle of radius r = L sin θ").** Scene 2 says plainly that the centre is not the support, because students often draw the radius along the string. A navy dot at the circle's centre and a dashed horizontal radius make it explicit; scene 10 crosses r = L.
- **Side view with a top-view inset (kit family `m5-conical-pendulum`).** The existing family already synchronises a side view and a top view at a fixed 30° (site's angle). Side-view arrows are drawn when the bob is at the right-hand edge of its circle, where the tension and its components lie in the plane of the screen (author note a); the top view shows the circle and the inward horizontal part.
- **Worked example (site worked example 1, unchanged).** m = 0.20 kg, L = 0.50 m, θ = 30°: r = 0.25 m, F_T = 2.26 N, v = 1.19 m s⁻¹, T = 1.32 s. Split across three scenes (radius and tension, speed with a check, period). The site's order (tension, speed, period) is kept. Values carried unrounded between stages.
- **Period derivation (site's T_period = 2π√(L cos θ/g)).** Derived in one line from T = 2πr/v and v = √(rg tan θ), with r/tan θ = L cos θ = h. Said as a surprise ("depends only on h, not on the mass"). The site writes L cos θ; the design names it h, the height of the support above the circle, as a picture students can see. Kept because it explains A2 and the site lists it in its book box.
- **Faster means wider (site MC "increasing the speed of the bob will: increase the angle").** Scene 6 runs the side view at 30°, 45° and 60° (illustrative; values in author note b) with the tension arrow growing.
- **Mistake scene (scene 10).** r = L gives 1.68 m s⁻¹ instead of 1.19 m s⁻¹. Kept because it is the slip this geometry invites and it is crossed again in feedback 1.
- **Memory aid (scene 11): "One string, two jobs: the up part holds, the in part turns."** See "Memory aid check".
- **Attempts (HSC style).** A1 (site short-answer Q1): 0.50 kg, 0.80 m, 35°: r = 0.459 m, F_T = 5.98 N, v = 1.77 m s⁻¹. A2 (site Activity 1 Q1): L = 0.40 m, 25°: T = 1.21 s. Crossed: A1 "r = 0.80 m"; A2 "T = 2π√(L/g) = 1.27 s".
- **Symbols (open decision 2).** F_T for tension (the site's choice) so that T stays the period, as in the syllabus v = 2πr/T. Narration says "F T" and "the tension".
- **Colour key (v11).** Tension and weight amber; vertical component blue; horizontal (inward) component teal; acceleration violet; velocity teal (top view only); lengths and givens navy.
- **Handoff (route next).** Scene 16 swaps the string for a road: the road cross-section stage from v12 tilts, the rear-view car tilts with it, and the normal force, drawn at right angles to the road, now leans towards the centre of the bend (v14: "How does a banked road reduce reliance on friction?"). See "Final frame".
- **Site sources used:** card 1 in full (2 to 9); its free-body diagram text ("There is no separate 'centripetal force' arrow", 2); the relationships box (3, 6, 9); worked example 1 (7 to 9); MC "increasing the speed ... increase the angle" (6); short-answer Q1 (A1); Activity 1 Q1 (A2); the lesson 9 "Analyse 6 marks" answer (the string cannot be horizontal; tension exceeds weight; faster needs a larger angle and tension: 5, 6). Not used: the interactive (a site tool); banked curves (v14).
- **Site notes (site lesson 8, read 6 Nov):** no numerical errors in the conical-pendulum sections (worked example 1, Activity 1 Q1 and short-answer Q1 all check). One notation note for root: short-answer Q1's model answer uses "T" for tension ("Tension: T = mg/cos θ") while card 1 uses F_T for tension and T_period for period. Suggest F_T throughout. Site notes 1 to 4 for lesson 8 are recorded in `phys-y12-m5-v12.md`.
- **Cause chain taught, in order:** (1) only tension and weight act, so the net inward force must come from the tension (2); (2) the centre of the circle is level with the bob, so the net force is horizontal (2); (3) r = L sin θ, h = L cos θ (3); (4) no vertical acceleration, so F_T cos θ = mg; the horizontal part is unbalanced, so F_T sin θ = mv²/r (4); (5) a horizontal string has no vertical part, so it cannot hold the bob up; the tension exceeds the weight (5); (6) dividing gives tan θ = v²/(rg): faster means a bigger angle and a larger tension (6); (7) T = 2πr/v gives T = 2π√(h/g) (9).
- **Entry knowledge (route `entryKnowledge`, v11 and v12):** F_net = mv²/r towards the centre, v = 2πr/T (v11); "centripetal is a job, not a force", resolving a force into two perpendicular parts and the vertical balance (v12); sine, cosine and tangent in a right triangle (Year 11).
- **Learner-visible vocabulary (plain meaning at first use):** conical pendulum (a bob on a string going round a horizontal circle, so the string traces a cone, 1); bob (the small heavy mass on the end of a pendulum string, 7); tension (the pull of a string along its length, 2, recalled); θ (the angle between the string and the vertical, 3).
- **Legacy logic ported:** none. The coded family `m5-conical-pendulum` (`src/explainer/physics/module5/rotation-details/`; ideal string, fixed 30°, side and top projections) is reused and extended to change angle and to show the bob plate (kit gaps).
- **New explainer motion:** **conical pendulum stage** (extends `m5-conical-pendulum`: side view with the plates, string and dashed circle in perspective; a synchronised top-view inset; force arrows drawn at the right-hand extreme on one force scale; dashed components; an angle parameter that can step 30°, 45°, 60°); **road cross-section stage** (from v12) with tilt for the handoff; `AlignedAlgebra`; `Countdown` (3 s in scene 1; 10 s in scenes 12 and 14); `QuestionCard`; `Chip` with `cross`; `PenArrow`; `ScribbleCircle`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the pendulum stage on the left (stand base on a bench line above the bottom 12%); the top-view inset at the top right; working below it on the right.
- **No human figures.** No hand spins the bob; nobody holds the stand.
- **Author notes (not learner copy):**
  (a) Side-view arrows: when the bob is at the extreme left or right of its circle, the string, tension and both components lie in the plane of the screen and show their true lengths. At other positions the projected horizontal part shortens. The family draws arrows only at the right-hand extreme (its README: "projected pendulum arrows are projections of forces, not changing true magnitudes").
  (b) Angle steps for scene 6 (m = 0.20 kg, L = 0.50 m): 30°: v = 1.19 m s⁻¹, F_T = 2.26 N; 45°: v = 1.86 m s⁻¹, F_T = 2.77 N; 60°: v = 2.71 m s⁻¹, F_T = 3.92 N. Values are not narrated or shown; the arrows scale with them.
  (c) The string is ideal (light, inextensible) and air resistance is ignored, so the motion is uniform; a real bob slowly loses speed and needs a small push to keep going, which the video does not show.
  (d) Period: T = 2πr/v = 2π√(r/(g tan θ)) and r/tan θ = L sin θ cos θ/sin θ = L cos θ = h. Not dependent on m.
  (e) Pronunciations: "F T" for F_T; "sine thirty"; "cosine thirty"; "tan thirty"; "theta".

- **Open decisions for root:**
  - **1. Period surprise (learning review).** Scene 9's "T = 2π√(h/g)" derivation is about 200 characters. If the review finds it a detour, keep T = 2πr/v only and switch A2 to the site's speed-only short answer (or keep A2 with the v route in feedback).
  - **2. Tension symbol (root).** F_T for tension (site), keeping T for period. Confirm for v15 and v16, where a string's tension appears again.
  - **3. Side-view arrows at one position only (science check).** See author note (a).

Main question: *A small steel ball hangs on a string from a fixed support and goes round a horizontal circle. The string slants. How does one slanted string both hold the ball up and pull it inwards, and could the string ever be horizontal?*
Entry knowledge: F_net = mv²/r, v = 2πr/T (v11); "centripetal is a job", resolving forces, vertical balance (v12); right-triangle trigonometry (Year 11).
Stops after: two forces; the centre and r = L sin θ; F_T cos θ = mg and F_T sin θ = mv²/r; never horizontal, F_T > mg; tan θ = v²/(rg); the worked example to T = 1.32 s; T = 2π√(h/g); the r = L slip. No banked roads.
Handoff: v14, how a banked road reduces reliance on friction.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *F_T*, *m*, *g*, *θ*, *L*, *r*, *h*, *v*, *T*. Paper background and handwritten headline face as the explainer house style.

### 1. hook (could the string be horizontal?)
> Here's that steel ball, going round in a horizontal circle on a string. The string slants, tracing out a cone, so this is called a conical pendulum. Now imagine the ball going faster and faster. Could it ever go fast enough for the string to be perfectly **horizontal**? Make a **prediction**.

Visual: opens on v12's final frame (see "Opening frame"); the bob sets off round its circle again, the "?" and the "Next" chip fade. On "conical pendulum" the faint cone outline brightens and a chip "conical pendulum" writes. On "faster and faster" the bob speeds up a little and the string swings out (from 30° to about 40°, illustrative). On "horizontal" a dashed grey horizontal line draws from the pivot. On "prediction" two chips "Yes, if it's fast enough" and "No, never", and a 3 s `Countdown`. The bob returns to 30° during the countdown.

### 2. two forces, one centre
> Only two forces act on the ball. The tension pulls along the string, towards the support, and the weight pulls straight down. There's no third arrow for centripetal force, because that's a job, not a force. And notice where the centre of the circle is. It isn't the support. It's level with the ball, directly below the support. So the net force has to be horizontal, pointing at that **centre**.

Visual: the bob pauses at the right-hand edge of its circle (author note a). On "The tension pulls along the string" an amber arrow "F_T" from the bob along the string towards the pivot; on "the weight pulls straight down" an amber arrow "mg". On "no third arrow" a faint dashed third arrow "centripetal force" appears and is crossed. On "It isn't the support" a navy dashed line from the pivot to the bob is crossed (caption "not the centre"); on "level with the ball" a navy dot at the circle's centre and a dashed horizontal radius from the bob to it. On "centre" a violet arrow "a" along that radius and a chip "net force: horizontal, towards the centre". The top-view inset appears at the top right: the circle from above, the bob, and the violet arrow to the centre.

### 3. the geometry
> Let's name the parts. The string has length L, and it makes an angle theta with the vertical. The radius of the circle is the horizontal distance from the ball to the centre, so r equals L sine **theta**. And the height of the support above the circle is h, which is L cosine **theta**. Keep those straight, because r is not L, and mixing them up is the most common slip in these questions.

Visual: on "length L" a navy bracket along the string "L". On "angle theta with the vertical" a dashed vertical line from the pivot down to the circle's centre and an angle arc "θ" between it and the string. On "r equals L sine theta" the horizontal radius is bracketed "r = L sin θ". On "which is L cosine theta" the vertical dashed line is bracketed "h = L cos θ"; the right triangle (string, h, r) fills faintly. On "r is not L" the two brackets L and r flash side by side.

### 4. resolve the tension
> Now split the tension into two parts. Its vertical part is F T cosine theta, and its horizontal part, pointing at the centre, is F T sine theta. The ball doesn't move up or down, so the vertical part balances the weight. F T cosine theta equals m **g**. The horizontal part has nothing to balance it, so it's the net force, doing the centripetal job. F T sine theta equals m v squared over **r**. One string, doing two jobs at once.

Visual: on "split the tension into two parts" dashed components draw from the bob: blue up "F_T cos θ", teal horizontal towards the centre "F_T sin θ" (the tension arrow fades to a faint outline so the parts replace it, never add to it). On "balances the weight" the blue component and the weight arrow pulse together; on "F T cosine theta equals m g" the line "vertical: F_T cos θ = mg" writes. On "nothing to balance it" the teal component pulses with the violet "a"; on "F T sine theta equals m v squared over r" the line "towards the centre: F_T sin θ = mv²/r". On "two jobs at once" chips "holds it up" (blue) and "pulls it in" (teal).

### 5. why it can't be horizontal
> That answers the question. If the string were horizontal, it would have no vertical part at all, and nothing would hold the ball up against its **weight**. So the string always slants, however fast the ball goes. It also means the tension is always bigger than the weight, because only part of it is holding the ball **up**.

Visual: on "If the string were horizontal" a ghost string swings to the dashed horizontal line; its blue component shrinks to nothing; on "weight" the weight arrow pulses alone with the caption "nothing balances mg". On "always slants" the "No, never" chip from scene 1 ticks and "Yes" is crossed. On "bigger than the weight" "F_T = mg/cos θ > mg (cos θ < 1)"; on "up" the blue part is shown equal to mg beside the longer F_T.

### 6. angle and speed
> Divide the horizontal equation by the vertical one. The tension and the mass both cancel, and you get tan theta equals v squared over r **g**. So a faster ball swings out to a bigger angle. And as theta gets closer to ninety degrees, cosine theta shrinks, so the tension needed grows very **large**. That's why the string never quite reaches horizontal.

Visual: on "Divide the horizontal equation by the vertical one" `AlignedAlgebra` stacks the two equations and divides: "F_T sin θ ÷ F_T cos θ = (mv²/r) ÷ mg"; on "both cancel" F_T and m strike through together; on "tan theta equals v squared over r g" "tan θ = v²/(rg)" boxed. On "a faster ball swings out to a bigger angle" the stage steps 30° to 45° to 60° (author note b), the bob's speed readout rising, the circle widening and the cone flattening. On "large" the tension arrow grows at each step and a small "F_T = mg/cos θ" tag pulses. On "never quite reaches horizontal" the stage returns to 30°.

### 7. worked example: radius and tension
> Let's try an example. A zero point two zero kilogram bob hangs on a zero point five zero metre string, at thirty degrees to the vertical. The bob is just the small mass on the end. First the radius. r is zero point five zero times sine thirty, which is zero point two five **metres**. Now the tension, from the vertical equation. F T equals m g over cosine theta, so zero point two zero times nine point eight, over cosine thirty. That's about two point two six **newtons**, a bit more than the weight of one point nine six newtons.

Visual: clear change to the calculation layout with the pendulum stage small at the left (frozen at 30°). Task strip: "Find the radius, tension, speed and period." Givens in navy: "m = 0.20 kg", "L = 0.50 m", "θ = 30° to the vertical", "g = 9.8 m s⁻²". Equation strip: "r = L sin θ   F_T cos θ = mg". On "metres" `AlignedAlgebra` "r = 0.50 × sin 30° = 0.25 m". On "two point two six newtons" "F_T = mg/cos θ = (0.20 × 9.8) ÷ cos 30° = 1.96 ÷ 0.866 = 2.26 N". On "one point nine six newtons" a tag "mg = 1.96 N" beside it.

### 8. worked example: speed
> Next, the speed. From tan theta equals v squared over r g, v equals the square root of r g tan theta. That's the square root of zero point two five times nine point eight times tan thirty, about one point one nine metres per **second**. As a check, the horizontal part of the tension, two point two six times sine thirty, is about one point one three newtons, and m v squared over r gives the same **value**.

Visual: the radius and tension lines shrink to a "found" strip (r = 0.25 m, F_T = 2.26 N). Equation strip "v = √(rg tan θ)". On "second" "v = √(0.25 × 9.8 × tan 30°) = √1.41 = 1.19 m s⁻¹". On "two point two six times sine thirty" "F_T sin θ = 2.26 × 0.5 = 1.13 N"; on "value" "mv²/r = 0.20 × 1.19² ÷ 0.25 = 1.13 N ✓".

### 9. the period
> And the period. The ball goes once round a circle of radius zero point two five metres at one point one nine metres per second, so T equals two pi r over v, about one point three two **seconds**. Here's a surprise. If you put the speed formula into T equals two pi r over v, r over tan theta turns out to be just the height h. So T equals two pi times the square root of h over **g**. The period depends only on how far the circle sits below the support. The mass doesn't matter at **all**.

Visual: equation strip "T = 2πr/v". On "seconds" "T = 2π × 0.25 ÷ 1.19 = 1.32 s"; the side view's bob laps once against a small clock reading 1.32 s. On "Here's a surprise" `AlignedAlgebra` "T = 2πr ÷ √(rg tan θ) = 2π√(r/(g tan θ))"; on "just the height h" "r/tan θ = L sin θ × cos θ/sin θ = L cos θ = h" with the h bracket on the stage glowing; on "g" "T = 2π√(h/g)" boxed, check "2π√(0.433 ÷ 9.8) = 1.32 s". On "all" a chip "no m in it".

### 10. the radius mistake
> The classic slip is using the string length as the radius. Put r equals zero point five zero into the speed formula, and you get about one point six eight metres per second, which is far too **fast**. The ball goes round a circle of radius L sine theta, not L.

Visual: the stage with the L and r brackets. On "string length as the radius" the r bracket stretches along the string, "r = L = 0.50 m". On "fast" "v = √(0.50 × 9.8 × tan 30°) = 1.68 m s⁻¹" with a chip "r = 0.50 m" crossed. On "not L" the correct "r = L sin θ = 0.25 m" bracket glows on the horizontal radius.

### 11. memory aid
> Here's a way to hold it together. One string, two jobs. The up part holds, the in part turns. That works for a light string and a ball going round a horizontal circle at a steady **speed**. If you get stuck, ask which part of the tension holds the ball up, and which part turns it.

Visual: board clears to the pendulum at 30° with its blue and teal components. On "One string, two jobs" the handwritten line writes large: "One string, two jobs: the up part holds, the in part turns." On "speed" a navy condition tag "light string, horizontal circle, steady speed". Hold about 2 seconds.

### 12. attempt 1 (countdown, 10 seconds)
> Your turn. A zero point five zero kilogram bob on a string of length zero point eight zero metres moves in a horizontal circle, with the string at thirty-five degrees to the vertical. Calculate the radius of the circle, the tension in the string, and the speed of the bob. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "A conical pendulum has a bob of mass 0.50 kg on a light string of length 0.80 m. The bob moves at constant speed in a horizontal circle with the string at 35° to the vertical. Calculate: (a) the radius of the circle; (b) the tension in the string; (c) the speed of the bob. (3 marks)" A small coded HSC-style side-view diagram: a support line, a string with "0.80 m", the angle "35°" from a dashed vertical, a bob and a dashed horizontal circle. The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 1 (brief)
> The radius is zero point eight zero times sine thirty-five, about zero point four five nine **metres**. The tension is m g over cosine thirty-five, which is four point nine zero over zero point eight one nine, about five point nine eight **newtons**. And v is the square root of r g tan thirty-five, about one point seven seven metres per **second**. The slip is using zero point eight zero as the **radius**.

Visual: card shrinks to the top; "0.80 m", "35° to the vertical" and "horizontal circle" underline. On "metres" "r = 0.80 sin 35° = 0.459 m". On "newtons" "F_T = (0.50 × 9.8) ÷ cos 35° = 4.90 ÷ 0.819 = 5.98 N" (the radius line dims). On "second" "v = √(0.459 × 9.8 × tan 35°) = 1.77 m s⁻¹". On "radius" a chip "r = 0.80 m" fades in and is crossed (caption "r = L sin θ"). Hold about 1 second.

### 14. attempt 2 (countdown, 10 seconds)
> Last one. A conical pendulum has a string of length zero point four zero metres, at twenty-five degrees to the vertical. Calculate its period. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "The string of a conical pendulum is 0.40 m long and makes an angle of 25° with the vertical as the bob moves in a horizontal circle at constant speed. Calculate the period of the motion. (2 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 15. feedback 2 (brief)
> The circle sits L cosine theta below the support, so h is zero point four zero times cosine twenty-five, about zero point three six three **metres**. Then T equals two pi times the square root of h over g, about one point two one **seconds**. The slip is using the whole string length instead of h, which gives one point two seven **seconds**.

Visual: card shrinks to the top; "0.40 m" and "25° with the vertical" underline. On "metres" "h = 0.40 cos 25° = 0.363 m". On "one point two one seconds" "T = 2π√(0.363 ÷ 9.8) = 1.21 s" and a small grey line "(or r = 0.169 m, v = 0.879 m s⁻¹, T = 2πr/v = 1.21 s)". On "one point two seven seconds" a chip "T = 2π√(0.40 ÷ 9.8) = 1.27 s" fades in and is crossed (caption "use h, not L"). Hold about 1 second.

### 16. handoff
> So the slant of the string gives the tension a part that points inwards. A road can do the same trick. Tilt the road towards the centre of the bend, and the normal force, which is always at right angles to the road, tilts **too**. Now part of it points **inwards**. So how does a banked road cut down the friction a car needs?

Visual: clear change to the road cross-section stage from v12: the flat road line with the rear-view car (`y12p-car-rear-v1.png`, from v12) and the amber normal force straight up, the "centre of the bend" pointer on the left. On "Tilt the road" the road line rotates so its left (inner) edge is lower, to 12° (no angle shown), and the car rotates with it. On "too" the normal-force arrow rotates with the road, staying at right angles to it (a right-angle mark at its base). On "inwards" a dashed teal horizontal component of N draws towards the centre pointer with a "?" beside it; the weight arrow (amber) is down from the centre of mass; chip "Next: how does a banked road reduce reliance on friction?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 17. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Conical pendulum: only tension F_T (along the string) and weight mg act. The centre of the circle is level with the bob, below the support. r = L sin θ; height of support above circle h = L cos θ.
2. Vertical: F_T cos θ = mg. Towards the centre: F_T sin θ = mv²/r. Dividing: tan θ = v²/(rg).
3. F_T = mg/cos θ > mg, so the string can never be horizontal. Faster bob: bigger θ and bigger tension.
4. Period: T = 2πr/v = 2π√(h/g) (no mass in it).

Memory aid (large, on the notes screen): *One string, two jobs: the up part holds, the in part turns.*

## Teaching checks

- **Does it explain causes?** Why the net force is horizontal: the centre is level with the bob (2). Why F_T cos θ = mg: no vertical acceleration (4). Why F_T sin θ = mv²/r: nothing balances the horizontal part (4). Why the string can't be horizontal: no vertical part to hold the bob up (5). Why faster means a bigger angle: tan θ = v²/(rg) (6). Why the period ignores the mass: T = 2π√(h/g) (9).
- **Misconceptions addressed:** a third "centripetal" arrow (2, crossed); the centre is at the support (2, crossed); r = L (10; crossed in 13); the string can be horizontal (5); tension equals weight (5, 7); using L instead of h in the period (crossed in 15).
- **One idea at a time:** forces and centre (2) before geometry (3) before resolution (4) before consequences (5, 6) before the worked example (7 to 9).
- **Video makes it easier:** components replace the tension, never add to it (4); the ghost string swinging horizontal loses its vertical part (5); the cone flattening and the tension arrow growing as the speed rises (6); the h bracket lighting up in the period derivation (9).
- **Response opportunity:** one prediction (3 s countdown) and two unseen HSC-style tasks with every condition visible (mass, light string, length, angle to the vertical, horizontal circle, constant speed), 10 s each with the invitation to pause; nothing answer-bearing. One crossed mistake each; feedback about 30 s and 21 s.
- **Avoided double teaching:** F_net = mv²/r and v = 2πr/T (v11), "centripetal is a job" and vertical balance (v12) are recalled; trigonometry is used without re-teaching.
- **Syllabus coverage:** `P5-IQ2-02` for "a mass on a string": both forces identified and the tension resolved into the vertical balance and the inward resultant. `P5-IQ2-03`: F_c = mv²/r and v = 2πr/T used in the worked example and both attempts.
- **Out of scope by design:** banked tracks (v14); work (v15); the whirling-bung investigation (v16, a related but different apparatus); vertical circles (v15 contrast only).

## Practice questions and model answers

**Attempt 1 (scene 12; site short-answer Q1, HSC style, 3 marks suggested, not an official marking scheme).** "A conical pendulum has a bob of mass 0.50 kg on a light string of length 0.80 m. The bob moves at constant speed in a horizontal circle with the string at 35° to the vertical. Calculate: (a) the radius of the circle; (b) the tension in the string; (c) the speed of the bob."
Model answer: (a) r = L sin θ = 0.80 × sin 35° = 0.459 m. (b) Vertical: F_T cos θ = mg, so F_T = 0.50 × 9.8 ÷ cos 35° = 4.90 ÷ 0.819 = 5.98 N. (c) tan θ = v²/(rg), so v = √(rg tan θ) = √(0.459 × 9.8 × tan 35°) = √3.15 = 1.77 m s⁻¹. Classic mistake (crossed): "r = 0.80 m".

**Attempt 2 (scene 14; site Activity 1 Q1, HSC style, 2 marks).** "The string of a conical pendulum is 0.40 m long and makes an angle of 25° with the vertical as the bob moves in a horizontal circle at constant speed. Calculate the period of the motion."
Model answer: h = L cos θ = 0.40 × cos 25° = 0.363 m; T = 2π√(h/g) = 2π√(0.3625 ÷ 9.8) = 1.21 s. (Or r = 0.40 sin 25° = 0.169 m, v = √(rg tan θ) = 0.879 m s⁻¹, T = 2πr/v = 1.21 s.) Classic mistake (crossed): "T = 2π√(L/g) = 1.27 s".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Worked example (site worked example 1) | m = 0.20 kg, L = 0.50 m, θ = 30°, g = 9.8 | 7 to 10 |
| Radius, height | r = 0.50 sin 30° = 0.25 m; h = 0.50 cos 30° = 0.433 m | 7, 9 |
| Tension | mg = 1.96 N; F_T = 1.96 ÷ 0.8660 = 2.263 N (2.26) | 7 |
| Speed | rg tan θ = 0.25 × 9.8 × 0.5774 = 1.4145; v = 1.189 m s⁻¹ (1.19) | 8 |
| Check | F_T sin 30° = 1.1316 N; mv²/r = 0.20 × 1.4145 ÷ 0.25 = 1.1316 N (1.13) | 8 |
| Period | 2π × 0.25 ÷ 1.1893 = 1.3207 s; 2π√(0.4330 ÷ 9.8) = 1.3207 s (1.32) | 9 |
| r = L slip | √(0.50 × 9.8 × tan 30°) = 1.682 m s⁻¹ (1.68) | 10 |
| Angle steps (not shown) | 45°: 1.861 m s⁻¹, 2.772 N; 60°: 2.711 m s⁻¹, 3.920 N | 6 |
| A1 (site short-answer Q1) | r = 0.80 sin 35° = 0.4589 m (0.459); F_T = 4.90 ÷ 0.8192 = 5.982 N (5.98); v = √(0.4589 × 9.8 × 0.7002) = √3.149 = 1.774 m s⁻¹ (1.77) | 12, 13 |
| A2 (site Activity 1 Q1) | h = 0.40 cos 25° = 0.3625 m (0.363); T = 2π√(0.3625 ÷ 9.8) = 1.2085 s (1.21); r = 0.1690 m, v = 0.8788 m s⁻¹; crossed 2π√(0.40 ÷ 9.8) = 1.2694 s (1.27) | 14, 15 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov); Codex to re-check.

- 0.50 sin 30° = 0.25; 0.50 cos 30° = 0.43301; 0.20 × 9.8 = 1.96; 1.96 ÷ cos 30° = 2.26321.
- 0.25 × 9.8 × tan 30° = 1.41451; √ = 1.18933; 2.26321 × 0.5 = 1.13161; 0.20 × 1.41451 ÷ 0.25 = 1.13161.
- 2π × 0.25 ÷ 1.18933 = 1.32074; 2π√(0.43301 ÷ 9.8) = 1.32074.
- √(0.50 × 9.8 × tan 30°) = 1.68197.
- 45°: √(0.50 sin 45° × 9.8 × tan 45°) = 1.86140; 1.96 ÷ cos 45° = 2.77186. 60°: 2.71109; 3.92.
- A1: 0.80 sin 35° = 0.458861; 4.90 ÷ cos 35° = 5.98180; √(0.458861 × 9.8 × tan 35°) = 1.77446.
- A2: 0.40 cos 25° = 0.362523; 2π√(0.362523 ÷ 9.8) = 1.20847; 0.40 sin 25° = 0.169047; √(0.169047 × 9.8 × tan 25°) = 0.87894; 2π × 0.169047 ÷ 0.87894 = 1.20847; 2π√(0.40 ÷ 9.8) = 1.26940.

## Memory aid check

- **"One string, two jobs: the up part holds, the in part turns."** Meaning, as said in scene 11: the tension's vertical part (F_T cos θ) balances the weight, and its horizontal part (F_T sin θ) is the whole inward net force. Assumptions checked (said in scene 11): a light string (its own weight ignored), a horizontal circle (no vertical acceleration) and a steady speed (no tangential force). It fails for a vertical circle, where the radial direction rotates and the speed changes (v15's contrast), and for a string whose support moves. It helps a new case: A1 (both parts used), and in v14 the same idea with the normal force ("one push, two jobs"). Introduced after the worked example (7 to 10).
- **Considered, not used:** "Cos holds, sin turns" (true for θ from the vertical only, and invites errors when an angle to the horizontal is given); "The string can't lie flat" (one consequence only).

## Narration length estimate

Revision 1 count (6 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,654 characters**, 17 scenes. Characters per scene (1 to 17): 285, 392, 382, 424, 316, 345, 524, 400, 478, 256, 277, 294, 393, 164, 331, 318, 75. At 13.3 characters per second the speech is about 425 s; add about 3 s for the prediction countdown, about 3 s for the angle steps in scene 6, about 2 s for the lap against the clock in scene 9, 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 55 s more of the quiet notes hold (about 89 s of holds and countdowns): **about 514 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 9's derivation sentences (open decision 1); scene 7's "The bob is just the small mass on the end" sentence; scene 6's last sentence.

## Opening frame

v12's final frame (designed in this wave, `phys-y12-m5-v12.md`): paper background; the retort stand plate on a coded bench line, boss and crossbar near the top reaching right, a navy pivot dot at the crossbar's tip; a coded string at 30° to a dashed vertical line, down to the steel ball (50 px) at the right-hand edge of a dashed horizontal circle in perspective, a navy dot at the circle's centre directly below the pivot; a faint cone outline; amber "tension" (along the string) and "weight" (down) arrows on the ball; a "?" between the tension arrow and the dashed horizontal radius; heading "Which force supplies the inward acceleration on a flat curve?"; chip "Next: how does string tension sustain a conical pendulum?". Scene 1 sets the ball going round; the heading changes in scene 2 (on "centre") to "How does string tension sustain a conical pendulum?". The arrow labels change from "tension" and "weight" to "F_T" and "mg" in scene 2.

## Final frame

The last explained frame (end of scene 16, before the key-notes board): paper background; the road cross-section stage: a coded road line tilted 12° with its lower (inner) edge on the left, a navy pointer at the left edge "centre of the bend"; the rear-view car plate (`y12p-car-rear-v1.png`) sitting on the tilted road, rotated with it; a teal ⊗ marker "moving into the screen"; from the car's centre of mass an amber arrow "N" at right angles to the road (leaning left, towards the centre) with a small right-angle mark at the road, and an amber arrow "mg" straight down; a dashed teal horizontal component of N pointing left with a "?" beside it; no angle label; heading "How does string tension sustain a conical pendulum?"; chip "Next: how does a banked road reduce reliance on friction?". v14 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m5-v13` (route phys-y12-m5-v13). Suggested explainer folder `src/explainer/lessons/phys-y12-m5-v13` and build folder `docs/production/claude-pm/lessons/p-y12-m5-v13` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 17 scene headings, all `### N.`): hook, two-forces-centre, geometry, resolve-tension, never-horizontal, angle-and-speed, worked-radius-tension, worked-speed, worked-period, radius-mistake, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Scene 1 is `explain` with a 3 s prediction countdown. `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: conical pendulum stage (extends `m5-conical-pendulum`), top-view inset, road cross-section stage (v12) with tilt, `AlignedAlgebra`, `ScribbleCircle`, `PenArrow`, `Countdown`, `CameraStage`. Transitions (`pickTransition`): 1 to 2 to 3 to 4 to 5 to 6 camera continue (same pendulum); 6 to 7 clear change to the calculation layout; 7 to 8 to 9 camera continue; 9 to 10 camera change to the stage; 10 to 11 clear change; attempts and feedback card shrink to the top; 15 to 16 clear change; 16 to 17 fade to the notes board.

Holds: hook (3 s countdown), memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 60 s). Review evidence paths: `learning_review` = `checks/p-y12-m5-v13-learning-review.md`, `science_check` = `checks/p-y12-m5-v13-physics-check.md`.

## Assets

Have (inspected 6 Nov on a session contact sheet; scaled uniformly only, never stretched):
- `public/assets/physics/phys-y11-retort-stand-v1.png` (600 × 2400, RGBA), `phys-y11-boss-crossbar-v1.png` (800 × 800, RGBA), `phys-y11-steel-ball-v1.png` (800 × 800, RGBA): scenes 1 to 11 (the support and bob).
- `y12p-car-rear-v1.png` (requested in v12): scene 16.
- **Checked, not used:** `phys-y11-mass-hanger-v1.png` and `phys-y11-slotted-masses-v1.png` (a hanger reads as a hook and stack, not a pendulum bob; the steel ball is the site's "ball"); `phys-y11-protractor-v1.png` (an angle arc is clearer than a protractor plate at this size).

Need (new plates, Codex): none (the rear-view car is v12's request).

Coded: string, pivot dot, dashed circle and cone outline, vertical and horizontal guide lines, brackets (L, r, h), angle arc, force arrows and components, top-view inset, road line, calculation strips, crossed chips, attempt cards and their HSC-style diagram, countdowns, key notes board.

Kit gaps (for the v13 build brief):
1. **Conical pendulum stage.** Extends `m5-conical-pendulum` with the retort-stand, boss and ball plates registered to the pivot and bob; an angle parameter that can step (30°, 45°, 60°) with the circle, cone and arrows updating from the model (F_T = mg/cos θ, v = √(rg tan θ), one force scale); arrows only at the right-hand extreme (author note a); the synchronised top-view inset from the existing family.
2. **Road tilt.** The v12 road cross-section stage rotating its road line and car together, with N redrawn at right angles to the road.

## Codex asset brief (Year 12 Physics M5 v13)

No new plates. Codex confirms, on a session contact sheet at about 400 px wide on the paper and dark board backgrounds, that the boss and crossbar plate can sit on the retort stand rod with the crossbar reaching right, and records in plate pixels the crossbar's tip (the pivot dot) and the stand's base line. Append the hand-in to `status.md`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the physics of every learner-visible claim: only tension and weight act on an ideal conical pendulum bob; the circle's centre is level with the bob below the support; r = L sin θ and h = L cos θ; F_T cos θ = mg and F_T sin θ = mv²/r; the string cannot be horizontal and F_T > mg; tan θ = v²/(rg); a faster bob has a larger angle and tension; T = 2π√(h/g) independent of mass (author note d); the side-view arrows at the extreme (author note a).
3. Confirm the memory aid's assumptions (see "Memory aid check").
4. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
5. Confirm both attempt cards carry every condition (mass, light string, length, angle to the vertical, horizontal circle, constant speed) and show nothing answer-bearing.
6. Confirm the syllabus quotes match the route JSON exactly and are labelled 2017.
7. Confirm no person, hand, face or body outline is drawn or requested (no hand spinning the bob; empty car).
8. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
9. Confirm the narration character count and per-scene counts by script with the build parser rules.

## YouTube metadata (draft)

Title: The Conical Pendulum: How Tension Does Two Jobs | HSC Physics Module 5

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module5/lesson08.sa.html

A ball on a string going round a horizontal circle traces out a cone. Only two forces act: the tension and the weight. See how one slanted string holds the ball up and pulls it inwards at the same time, why the string can never be horizontal, and how tan θ = v²/(rg) links the angle to the speed. Then work through a full example (radius, tension, speed and period) and discover why the period depends only on how far the circle sits below the support. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 5: Advanced Mechanics.
Syllabus content (NSW Physics Stage 6, 2017):
"analyse the forces acting on an object executing uniform circular motion in a variety of situations, for example: cars moving around horizontal circular bends, a mass on a string, objects on banked tracks (ACSPH100)"
"solve problems, model and make quantitative predictions about objects executing uniform circular motion in a variety of situations, using the following relationships: a_c = v²/r, v = 2πr/T, F_c = mv²/r, ω = Δθ/t"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: which force turns a car on a flat curve. Next: banked roads, and how they reduce the friction a car needs.

#HSCPhysics #Physics #CircularMotion #ConicalPendulum #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v12; check that "the centre is not the support" lands, that the components visibly replace the tension, that the angle steps read as separate steady states, and that the attempt cards give nothing away), then the physics check and the Codex error check.
- The components replacing the tension, the ghost horizontal string and the flattening cone carry the explanation; judge them at playback speed in the voiced preview.
