# Year 12 Physics M5 V12: Cars on flat curves. Which force supplies the inward acceleration on a flat curve? (design)

Status: Revision 1 (6 Nov 2026): first design. Needs independent learning review and science check before voicing.

Narration 5,795 characters, 16 scenes, about 523 s, counted by script with the build parser rules (see "Narration length estimate"). Opens on v11's final frame.

Scope: twelfth video of Year 12 Physics (Physics Stage 6, 2017 syllabus), Module 5 (Advanced Mechanics), second video on circular motion, inquiry question "Why do objects move in circles?". Templates: `phys-y12-m5-v01.md` and `phys-y12-m5-v10.md` (this run's structure), `phys-y11-fa1-v01.md`, `math-a12-d10.md` (calculation layout), `bio-y11-fa1-v05.md` (plates and asset brief format). No starter pack exists; the pack work is done here. Site lessons read in full (6 Nov, read-only): lesson 8, every section (hook, predict, vocabulary, misconceptions, conical pendulum, banked curves without and with friction, card 4 "Friction on Flat Curves" and worked example 4, Daytona, activities, wrap-up, "Analyse 6 marks", "Account 6 marks", short answers and the revisit): `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson08.sa.html`, SHA256 `9bcb63c78453091f25d5f5a84d39512bad41ec23ae411fd2555b7d28eb565a4a` (recomputed 6 Nov; matches the route); and lesson 7's worked example 3 and "Real World, Roundabout" (the same lesson as v11, SHA256 `01b9c74b147e84c698ec636ed0c4fd27298992fa401503a2ae5ba49930a8501e`). Route entry: `phys-y12-m5-v12` in `../../programme/phys-y12-route-inputs.json`, section `l08-flat-title`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Resolve normal and weight vertically; identify friction as the inward resultant and calculate a limiting speed. Centripetal force is a role of real forces, not an added force." Next: "phys-y12-m5-v13: How does string tension sustain a conical pendulum?"

Owner rules applied: 2017 syllabus only, quoted exactly; one main learner question; no people, hands, faces or body outlines (no driver: the top-view car is a closed plate and the new rear-view car shows empty seat backs only; the site's 10 t truck and 1 t car are plates with empty cabs); real objects are painted plates (cars in top, rear and side view, truck), and the road cross-section, roundabout, force arrows, components, paths and all working are coded; plates never stretched; one reasoning stage at a time; calculation layout with task strip, equation strip and grouped givens; every number recalculated in Python; g = 9.8 m s⁻²; syllabus symbols (F_c = mv²/r) with μ_s for the coefficient of static friction as on the site; in-teaching prediction with a 3 s countdown; "Pause here to answer." then a 10 s countdown with the full worded question on screen; brief feedback with one crossed-out mistake; HSC-style questions (A1 is the site's "Analyse 6 marks" question, condensed; A2 is new, built on the site's roundabout); optional key-notes hold; Australian spelling; no em dashes.

Syllabus content (Physics Stage 6 (2017), Module 5 Advanced Mechanics; ledger ids `P5-IQ2-02`, `P5-IQ2-03`), quoted from the route JSON `syllabusActions`:

- `P5-IQ2-02`: "analyse the forces acting on an object executing uniform circular motion in a variety of situations, for example:" "cars moving around horizontal circular bends", "a mass on a string", "objects on banked tracks (ACSPH100)"
- `P5-IQ2-03`: "solve problems, model and make quantitative predictions about objects executing uniform circular motion in a variety of situations, using the following relationships:" "a_(c)=(v^(2))/(r)", "v=(2πr)/(T)", "F_(c)=(mv^(2))/(r)", "ω=(∆θ)/(t)"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 53)

**Boundary:** starts on v11's final frame (the car on a flat roundabout, inward violet "a", dashed amber "F_net = mv²/r ?"). Teaches: the three real forces on a car on a flat bend (weight, normal force, static friction) and why air resistance is not the inward force; weight and normal force balance vertically (N = mg); why static friction points inwards (it opposes the outward slip the tyres would otherwise make relative to the curving road); friction as the whole net force, f = mv²/r; required friction versus maximum friction (site worked example 3: 6750 N); the limiting speed v_max = √(μ_s g r) with the mass cancelling (site worked example 4: 13.3 m s⁻¹); what the limit depends on; what happens above the limit (a wider path, no outward force); "centripetal force" as a job, not an extra arrow. Stops before the conical pendulum (v13) and banking (v14).

## Decisions

- **Learner question (route wording kept).** "Which force supplies the inward acceleration on a flat curve?" The answer, built in order: weight and the normal force are vertical and balance (2); air resistance acts along the path (2); friction is the only sideways force, and it points inwards because it opposes the outward slip (3); so f = mv²/r (4); static friction has a maximum, which sets a top speed (6, 7).
- **Hook (v11 handoff).** The question is posed on the roundabout with three chips: "air resistance", "friction from the road", "a centripetal force". Including the third chip lets scene 3 cross it with the reason.
- **Rear view (new plate, essential).** The forces are drawn on a rear view of the car (moving into the screen, centre of the bend to the left), the HSC convention for a car on a bend, so that the vertical pair and the sideways friction are all in the plane of the screen. Forces are drawn from the car's centre of mass as on the site (point model; author note a). A teal "into the screen" symbol (⊗) marks the velocity.
- **Why friction points inwards (site "Analyse" step 3 adds reasoning).** The site says friction is "the only candidate". The design adds the cause: without grip the car would carry straight on (v11), so relative to the curving road the tyres would slide outwards; static friction opposes that slip. A short top-view inset shows the straight path pulling away from the bend on the outside.
- **Static, not kinetic (site vocabulary and worked example 3 "static-friction force").** Said in one clause: the tyres grip, not slide.
- **Worked examples (site, unchanged numbers).** WE1 is lesson 7's worked example 3 (1200 kg, 40 m, 15 m s⁻¹: 6.75 × 10³ N), with the site's own caution "this is the required static friction, not automatically the maximum available friction" made into the bridge to the limit. WE2 is lesson 8's worked example 4 (r = 30 m, μ_s = 0.60: 13.3 m s⁻¹, about 48 km h⁻¹; see site note 1 on the site's 47.9).
- **Limit derivation (site card 4 and "Analyse" steps 4 and 5).** mv²/r = μ_s mg, mass cancels, v_max = √(μ_s g r). μ_s is defined in plain words at first use. The wet-road variation (μ_s halved to 0.30 gives 9.4 m s⁻¹) is new and illustrative; it shows the square-root dependence without a new rule.
- **Past the limit (site "Real World, Roundabout" and the lesson 7 revisit).** A top-view playback: below v_max the car follows the bend; above it the car follows a wider arc and drifts to the outside of the ring. The narration keeps "nothing throws it outwards". The wider path is illustrative (author note c).
- **Mass independence (site card 4 safety warning and misconception "a heavier car can go faster").** Shown with the truck and a side-view car (existing plates) on the same bend, both tagged with the same v_max.
- **Mistake and memory aid (scene 10).** The extra "centripetal force" arrow (site misconception 2 in lesson 7) is crossed; then "Centripetal is a job, not a force." Kept because the route's stop names it, and every remaining case in the run (v13, v14) uses the same check.
- **Attempts (HSC style).** A1 (site "Analyse 6 marks", condensed to its two demands): 1200 kg car, flat bend 45 m, μ_s = 0.65: friction; 16.9 m s⁻¹. A2 (new, from the site's roundabout: 1500 kg, 15 m, 35 km h⁻¹; μ_s = 0.40 is new): friction needed 9.45 × 10³ N exceeds the 5.88 × 10³ N available, so the car slides (v_max 7.7 m s⁻¹). Crossed: A1 "287 m s⁻¹" (no square root); A2 "35² ÷ 15" (no unit conversion).
- **Significant figures.** Data to two or three significant figures; answers to three (6.75 × 10³ N, 13.3 m s⁻¹, 16.9 m s⁻¹, 9.45 × 10³ N, 5.88 × 10³ N); km h⁻¹ values rounded from unrounded m s⁻¹.
- **Colour key (v11).** Forces amber; vertical components and the vertical pair's balance blue; the horizontal, inward direction teal; acceleration violet; velocity teal; givens navy; crossed chips red.
- **Handoff (route next).** Scene 15 builds a conical pendulum from existing lab plates (retort stand, boss, steel ball) with a slanted string, tension and weight arrows and "?" (v13: "How does string tension sustain a conical pendulum?"). See "Final frame".
- **Site sources used:** lesson 8 warm-up (flat curve: friction); card 4 in full and worked example 4 (6, 7, 8); misconception "On a flat curve, a heavier car can go faster" (8); "Analyse 6 marks" steps 2 to 6 (2 to 6) and its question (A1); the lesson 7 roundabout (A2) and worked example 3 (5); lesson 7 misconceptions 1 and 2 (9, 10). Not used: Daytona (a real venue with inconsistent site data, site note 3); banked curves and the conical pendulum (v13, v14); Activity 1 Q3 (20 m, μ_s = 0.50: 9.90 m s⁻¹, kept as a reserve attempt).
- **Site notes (site lesson 8, read 6 Nov; for root to log in `../site-corrections-phys-y12.md` if accepted):**
  1. Worked example 4: "13.3 m s⁻¹ (47.9 km/h)". √176.4 = 13.282 m s⁻¹ = 47.8 km h⁻¹; 47.9 comes from converting the rounded 13.3. Correction: "(47.8 km/h)". The same early rounding appears in worked example 2 ("√166.9" for 80 × 9.8 × tan 12° = 166.6, and "46.4 km/h" for 12.909 m s⁻¹ = 46.5 km h⁻¹), worked example 3 ("71.6 km/h" for 19.92 m s⁻¹ = 71.7 km h⁻¹) and short-answer Q2 ("46.4 km/h" for 12.86 m s⁻¹ = 46.3 km h⁻¹; "83.8 km/h" for 23.26 m s⁻¹ = 83.7 km h⁻¹). The m s⁻¹ answers are all correct.
  2. Vocabulary "Normal force ... On a banked curve: N = mg/cos θ > mg" and misconception 3 state N = mg/cos θ for any banked curve. That holds only at the design speed (no friction). With friction, N = mg cos θ + (mv²/r) sin θ (the site's own card 3), which differs. Correction: "At the design speed on a banked curve: N = mg/cos θ > mg." (Affects v14.)
  3. "Real World, Daytona" gives a turn radius of about 300 m (42.0 m s⁻¹); the revisit gives about 310 m (42.8 m s⁻¹) and says "At the start you were asked about Daytona", but the lesson hook is the general banked-bend question. Correction: one radius in both places, and the revisit should refer to the actual hook. The calculations are otherwise consistent (42.03 and 42.72 m s⁻¹; r = 1342 m for 88.9 m s⁻¹).
  4. Wrap-up misconception "Highway engineers choose angles (typically 3–8°)" is an unsourced numerical claim. Suggest a source or "small angles" (not used in this run).
- **Cause chain taught, in order:** (1) the car needs an inward net force (v11, 1); (2) weight and normal force are vertical and balance because there is no vertical acceleration (2); (3) air resistance acts along the path (2); (4) without grip the car would go straight on, so the tyres would slip outwards relative to the road; static friction opposes that slip, so it points inwards (3); (5) friction is the only horizontal force, so f = mv²/r (4); (6) static friction has a maximum μ_s N, so the speed has a maximum where the two are equal, and the mass cancels (6, 7); (7) above the limit the inward force is too small, so the path is wider than the bend (9).
- **Entry knowledge (route `entryKnowledge` and v11):** F_net = mv²/r towards the centre; a body with no net force goes straight on along the tangent; "centripetal force" names the inward net force (v11). Weight W = mg, normal force, friction opposing sliding, and the idea of a maximum static friction (Year 11; μ_s N is defined again in a sentence).
- **Learner-visible vocabulary (plain meaning at first use):** normal force (the push of a surface at right angles to it, 2); static friction (grip between surfaces that are not sliding over each other, 3); coefficient of static friction μ_s (a number describing how well two surfaces grip: the most static friction divided by the normal force, 6); limiting speed v_max (the fastest speed at which the needed friction is still available, 6).
- **Legacy logic ported:** none. The coded `m5-circular-motion` family (v11's circle stage) is reused for the roundabout; no Module 5 family covers the flat-road cross-section, so a small **road cross-section stage** is added (kit gap 1).
- **New explainer motion:** **road cross-section stage** (new: a coded flat road line with a "centre of the bend" pointer, the rear-view car plate registered on it, force arrows from the centre of mass with a common force scale, a ⊗ velocity marker); **slip inset** (top view: the bend and a straight tangent path pulling away on the outside); **beyond-the-limit playback** (circle stage: one lap at v below v_max on the ring; one at v above it along a wider arc, illustrative); `AlignedAlgebra`; `Countdown` (3 s in scene 1; 10 s in scenes 11 and 13); `QuestionCard`; `Chip` with `cross`; `PenArrow`; `ScribbleCircle`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the road cross-section or roundabout on the left; working on the right; the road line above the bottom 12% of the frame.
- **No human figures.** No driver or passengers drawn or named; "the car" is the subject of every sentence.
- **Author notes (not learner copy):**
  (a) Point model: forces drawn from the centre of mass, as on the site and in HSC answers. In reality friction and the normal forces act at the four tyre contact patches, and the turning moment they make about the centre of mass is what loads the outer tyres more. Not narrated.
  (b) Why friction is inward: for a car following the bend at constant speed with no wheel slip, the required lateral force is mv²/r inwards and only friction can supply it. The "tyres would slide outwards" explanation describes the impending slip relative to the road surface (the friction opposes the relative motion that would occur without it), matching the site's lesson 8 friction rule "It opposes the impending relative motion between tyre and road".
  (c) Beyond the limit the tyres slide sideways and kinetic friction (usually a little smaller than the maximum static friction) acts; the path's radius of curvature is mv²/f, larger than the bend. The playback shows a wider arc, not a computed trajectory.
  (d) Air resistance and rolling resistance act backwards along the path; at a steady speed the engine's forward drive force balances them. Neither is drawn in the rear view (both are along the line of sight). Scene 2 says only "pushes backwards along the path".
  (e) Wet-road value μ_s = 0.30 is illustrative (half the dry value in WE2), not a measured coefficient.
  (f) Pronunciations: "mu s" for μ_s; "v max"; "six thousand seven hundred and fifty newtons"; "thirty-five kilometres per hour".

- **Open decisions for root:**
  - **1. Rear-view car plate (root, Codex).** One new plate `y12p-car-rear-v1.png`, shared with v14. Fallback: an HSC-style coded box car (weak; the owner rule asks for plates).
  - **2. Wet-road variation (learning review).** Scene 8's μ_s = 0.30 example is new and illustrative. If the review prefers site values only, say "on a wet road μ_s is smaller, so v max is lower" and cut the number (about 70 characters).
  - **3. A2's coefficient (root).** μ_s = 0.40 on the site's roundabout is invented for the question; the site's roundabout has no coefficient. Confirm, or swap A2 for the site's Activity 1 Q3 (20 m, μ_s = 0.50: 9.90 m s⁻¹, 35.6 km h⁻¹).

Main question: *A car goes round a flat roundabout at a steady speed. Its weight pulls down and the road pushes up, so which real force pulls it towards the centre, and how fast can it go before that force runs out?*
Entry knowledge: F_net = mv²/r towards the centre, the tangent exit, centripetal force as a name (v11); weight, normal force, static friction (Year 11).
Stops after: the three forces and their balance; friction as the inward net force; f = mv²/r; required versus maximum friction; v_max = √(μ_s g r); mass independence; the wider path above the limit; "centripetal is a job". No conical pendulum, no banking.
Handoff: v13, how string tension sustains a conical pendulum.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *m*, *g*, *N*, *f*, *μ_s*, *v*, *r*, *v_max*. Paper background and handwritten headline face as the explainer house style.

### 1. hook (what pulls it in?)
> Here's that car on the flat roundabout. To go round, it needs a net force pointing towards the centre. Its weight pulls down, and the road pushes up, so neither of those can do it. So which force is pulling the car **inwards**? Is it air resistance, friction from the road, or a separate centripetal force? Make a **prediction**.

Visual: opens on v11's final frame (see "Opening frame"); the car continues round the ring at a steady rate. On "weight pulls down" the small side-view chip's two amber arrows pulse. On "inwards" the dashed amber "F_net = mv²/r ?" arrow pulses. On "Is it air resistance" three chips write beside the roundabout: "air resistance", "friction from the road", "a centripetal force". On "prediction" a 3 s `Countdown`.

### 2. the forces on the car
> Let's look at the car from behind, as it drives into the screen, with the centre of the bend on the left. Its weight acts straight down. The road pushes straight up with a normal force, the push of a surface at right angles to it. The car isn't moving up or down, so these two forces balance, and N equals m **g**. Air resistance pushes backwards along the path, against the motion, so it doesn't point inwards **either**.

Visual: camera change to the road cross-section stage: a flat coded road line, the rear-view car plate (`y12p-car-rear-v1.png`, new) on it, a teal ⊗ marker "moving into the screen", and a navy pointer at the left edge "centre of the bend". On "weight acts straight down" an amber arrow down from the centre of mass, "W = mg". On "normal force" an amber arrow up of the same length, "N". On "balance" a blue tag "vertical: no acceleration"; on "N equals m g" "N = mg" writes. On "backwards along the path" a small top-view inset shows the car with a short amber arrow pointing backwards along its path, "air resistance"; on "either" the "air resistance" chip from scene 1 is crossed (caption "along the path, not inwards").

### 3. friction does the job
> That leaves friction, the grip between the tyres and the road. Think about what the car would do without it. From the last video, with no inward force it would carry straight on along the tangent. So compared with the curving road, the tyres would start to slide **outwards**. Friction opposes that sliding, so it pushes on the tyres **inwards**, towards the centre. The tyres grip rather than slide, so this is static **friction**. So the answer is friction. There's no separate centripetal force. Friction is doing the centripetal **job**.

Visual: on "carry straight on along the tangent" the top-view inset shows the bend (grey arc) and a dashed teal straight path leaving it along the tangent. On "outwards" a red dashed arrow at the tyre, "would slip outwards (relative to the road)". On "inwards" in the rear view an amber arrow "f" draws horizontally at road level and then moves up to the centre of mass, pointing left towards "centre of the bend". On "static friction" the tag "static friction (tyres grip, not sliding)". On "the answer is friction" the "friction from the road" chip ticks. On "There's no separate centripetal force" the "a centripetal force" chip is crossed. On "job" a chip "friction does the centripetal job", and the heading writes on: "Which force supplies the inward acceleration on a flat curve?".

### 4. the force equations
> So on a flat curve there are just three real forces. Vertically, the normal force balances the weight. Horizontally, friction is the only force, so it's the whole net force towards the centre. That gives us the key equation for a flat curve. Friction equals m v squared over **r**.

Visual: on "three real forces" the three amber arrows pulse in turn (W, N, f) and a tag "3 forces". On "Vertically" a blue line "vertical: N = mg". On "Horizontally" a teal line "towards the centre: f = net force". On "r" the boxed line "f = mv²/r". The violet "a" arrow appears beside f, pointing the same way.

### 5. worked example: the friction needed
> Let's try it. A twelve hundred kilogram car rounds a flat curve of radius forty metres at fifteen metres per second. How much friction does it need? Friction equals m v squared over r, so that's twelve hundred times fifteen squared, over forty. That's six thousand seven hundred and fifty newtons, towards the **centre**. That's the friction the turn needs. It isn't the most friction the road could give, and that difference **matters**.

Visual: clear change to the calculation layout with the rear-view car small at the left. Task strip: "Find the friction needed for the car to round the curve." Givens in navy: "m = 1200 kg", "r = 40 m (flat curve)", "v = 15 m s⁻¹". Equation strip: "f = mv²/r". On "twelve hundred times fifteen squared, over forty" `AlignedAlgebra` "f = 1200 × 15² ÷ 40". On "centre" "= 6.75 × 10³ N towards the centre". On "matters" a chip "needed ≠ maximum available".

### 6. the limit
> Static friction can only grow so far. Its maximum is mu s times N, where mu s, the coefficient of static friction, is a number that describes how well the two surfaces grip. On a flat road N is m g, so the most friction available is mu s m g. The car is at its top speed when the friction it needs just equals the most that's available. So m v squared over r equals mu s m g. The mass **cancels**, and v max equals the square root of mu s g **r**.

Visual: on "Its maximum is mu s times N" a line "f ≤ f_max = μ_s N"; on "coefficient of static friction" a navy tag "μ_s: how well the surfaces grip (no unit)". On "the most friction available is mu s m g" "f_max = μ_s mg". On "just equals" two bars side by side: "needed: mv²/r" (rising as a speed slider moves up) and "available: μ_s mg" (fixed); the needed bar reaches the available bar. On "m v squared over r equals mu s m g" `AlignedAlgebra` "mv²_max/r = μ_s mg"; on "cancels" both m's strike through together; on "r" "v_max = √(μ_s g r)" boxed.

### 7. worked example: the limiting speed
> For a flat curve of radius thirty metres, with mu s equal to zero point six zero, v max is the square root of zero point six zero times nine point eight times thirty. That's the square root of one hundred and seventy-six point four, about thirteen point three metres per **second**, or about forty-eight kilometres per **hour**.

Visual: task strip: "Find the maximum speed on a flat curve without slipping." Givens: "r = 30 m", "μ_s = 0.60", "g = 9.8 m s⁻²". Equation strip: "v_max = √(μ_s g r)". On "zero point six zero times nine point eight times thirty" `AlignedAlgebra` "v_max = √(0.60 × 9.8 × 30) = √176.4"; on "second" "= 13.3 m s⁻¹"; on "hour" "× 3.6 = 47.8 km h⁻¹ (about 48 km h⁻¹)".

### 8. what sets the limit
> Look at what's in that formula, and what isn't. The mass cancelled, so a loaded truck and a small car have the same top speed on the same bend, with the same grip. A bigger radius gives a higher limit. And on a wet road mu s drops. If it halved to zero point three zero, v max would fall to about nine point four metres per **second**. Remember, the friction needed rises with the square of the speed, so the margin disappears **quickly**.

Visual: on "a loaded truck and a small car" the truck plate (`phys-y11-truck-side-v1.png`, reused) and a side-view car (`biology/b4-car-blue-v1.png`, reused) sit side by side under the formula, each tagged "v_max = 13.3 m s⁻¹" (same μ_s, same r); the m in the struck-through equation glows. On "bigger radius" r in the formula glows with "r ↑, v_max ↑". On "wet road" μ_s glows; on "nine point four metres per second" "μ_s = 0.30: v_max = √(0.30 × 9.8 × 30) = 9.4 m s⁻¹". On "quickly" a small graph: "friction needed" rising as v² against speed, crossing a flat "available" line; the crossing point is labelled "v_max".

### 9. past the limit
> So what happens if the car goes faster than v max? The road can't supply enough friction, so the net inward force is smaller than m v squared over r. The car still turns, but not as sharply as the bend. Its path is a wider curve, and it drifts towards the outside of the **roundabout**. Nothing throws it outwards. The inward force just isn't big **enough**.

Visual: camera change to the roundabout top view (circle stage). On "faster than v max" the car's speed readout ticks above "v_max"; the needed and available bars from scene 6 sit small at the top right with the needed bar overshooting. On "not as sharply" the car's path bends less than the ring; on "roundabout" its trail drifts across to the outer edge of the ring (illustrative). On "Nothing throws it outwards" a dashed outward arrow "outward force" fades in and is crossed. On "enough" the amber inward arrow on the car pulses, shorter than a dashed outline "mv²/r needed".

### 10. mistake and memory aid
> A common mistake is drawing an extra arrow labelled centripetal force, next to the friction. That counts the same force **twice**. Here's a way to remember it. Centripetal is a job, not a force. Draw the real forces first, then ask which of them does the job of pointing to the **centre**.

Visual: clear change to the rear-view car with its three forces. On "an extra arrow" a fourth amber arrow "centripetal force" draws beside f; on "twice" it is crossed (red) with the caption "f already is the centripetal force". On "Centripetal is a job, not a force" the handwritten line writes large: "Centripetal is a job, not a force." On "centre" the friction arrow is circled (`ScribbleCircle`) with the tag "does the job". Hold about 2 seconds.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. A twelve hundred kilogram car travels around a flat, unbanked bend of radius forty-five metres. The coefficient of static friction between its tyres and the road is zero point six five. Identify the force that provides the centripetal force, and calculate the greatest speed at which the car can take the bend. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "A car of mass 1200 kg travels at constant speed around a flat, unbanked bend of radius 45 m. The coefficient of static friction between the tyres and the road is 0.65. (a) Identify the force that provides the centripetal force on the car. (b) Calculate the greatest speed at which the car can take the bend without sliding. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 12. feedback 1 (brief)
> On a flat bend, static friction is the only horizontal force, so it provides the centripetal **force**. At the limit, m v squared over r equals mu s m g, and the mass cancels. So v max is the square root of zero point six five times nine point eight times forty-five, about sixteen point nine metres per **second**. The classic slip is forgetting the square root, and getting an impossible two hundred and eighty-seven metres per **second**.

Visual: card shrinks to the top; "flat, unbanked", "45 m" and "0.65" underline. On "force" "(a) static friction between the tyres and the road" with a small rear-view force sketch. On "the mass cancels" "mv²/r = μ_s mg" with the m's struck through. On "sixteen point nine metres per second" "v_max = √(0.65 × 9.8 × 45) = √286.65 = 16.9 m s⁻¹". On "two hundred and eighty-seven metres per second" a chip "v = 0.65 × 9.8 × 45 = 287 m s⁻¹" fades in and is crossed (caption "take the square root"). Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. A fifteen hundred kilogram car enters a flat roundabout of radius fifteen metres at thirty-five kilometres per hour. The road is wet, and the coefficient of static friction is zero point four zero. Determine whether the car can get round at this speed without sliding. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A car of mass 1500 kg enters a flat roundabout of radius 15 m at a constant speed of 35 km h⁻¹. The road is wet and the coefficient of static friction between the tyres and the road is 0.40. Determine, with calculations, whether the car can travel around the roundabout at this speed without sliding. (3 marks)" The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 2 (brief)
> First convert. Thirty-five kilometres per hour is about nine point seven two metres per **second**. The friction needed is m v squared over r, about nine thousand four hundred and fifty **newtons**. The most the wet road can give is zero point four zero times fifteen hundred times nine point eight, which is five thousand eight hundred and eighty newtons. That's not enough, so the car **slides**. The slip is putting thirty-five straight into the formula, without converting to metres per **second**.

Visual: card shrinks to the top; "35 km h⁻¹", "15 m" and "0.40" underline. On "nine point seven two metres per second" "v = 35 ÷ 3.6 = 9.72 m s⁻¹". On "newtons" "needed: f = 1500 × 9.72² ÷ 15 = 9.45 × 10³ N" (the conversion line dims). On "five thousand eight hundred and eighty newtons" "available: f_max = 0.40 × 1500 × 9.8 = 5.88 × 10³ N". On "slides" the needed and available bars (needed taller) and the verdict "needed > available: the car slides" (screen-only check: "v_max = √(0.40 × 9.8 × 15) = 7.7 m s⁻¹ < 9.72 m s⁻¹"). On "converting to metres per second" a chip "1500 × 35² ÷ 15" fades in and is crossed (caption "convert km h⁻¹ to m s⁻¹ first"). Hold about 1 second.

### 15. handoff
> So on a flat road, friction does the inward job. Now take the road away. Hang a small steel ball on a string from a fixed support, and set it going round in a horizontal circle. Only two forces act now, the string's pull and gravity. And the string doesn't stay horizontal. It slants, tracing out a **cone**. So how does one slanted string hold the ball up, and pull it **inwards**?

Visual: clear change (camera change) to a lab scene: a retort stand (`phys-y11-retort-stand-v1.png`, reused) with a boss and crossbar (`phys-y11-boss-crossbar-v1.png`, reused) sticking out to the right; a navy pivot dot at the crossbar's tip; a coded string from the pivot to the steel ball (`phys-y11-steel-ball-v1.png`, reused, 50 px). On "going round in a horizontal circle" the ball moves round a dashed horizontal circle drawn in perspective below the pivot, with the string sweeping. On "the string's pull and gravity" two amber arrows on the ball: "tension" along the string towards the pivot and "weight" straight down. On "cone" the swept string leaves a faint cone outline. On "inwards" the ball stops at the right-hand side of its circle, a navy dot marks the circle's centre, and a "?" appears between the tension arrow and the dashed horizontal radius; chip "Next: how does string tension sustain a conical pendulum?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 16. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Car on a flat curve: weight mg down, normal force N up, static friction f inwards (it opposes the outward slip). Vertical: N = mg. Towards the centre: f = mv²/r.
2. Friction needed is not the maximum. Maximum static friction: f_max = μ_s N = μ_s mg.
3. Limit: mv²/r = μ_s mg, so v_max = √(μ_s g r). Independent of mass; lower on wet roads (smaller μ_s); higher on wider bends.
4. Faster than v_max: friction cannot supply mv²/r, so the car follows a wider path and drifts outwards. No outward force acts.

Memory aid (large, on the notes screen): *Centripetal is a job, not a force.*

## Teaching checks

- **Does it explain causes?** Why weight and N are not the inward force: they are vertical and balance (2). Why air resistance is not: it acts along the path (2). Why friction points inwards: it opposes the outward slip the tyres would make without it (3). Why f = mv²/r: friction is the only horizontal force (4). Why there is a top speed: static friction has a maximum (6). Why mass cancels: both the needed and the available friction are proportional to m (6, 8). Why the car drifts out above the limit: the inward force is too small for the bend (9).
- **Misconceptions addressed:** centripetal force is an extra force (3, 10; crossed in 1 and 10); the car is thrown outwards (9, crossed); a heavier vehicle can go faster on a flat bend (8); needed friction equals maximum friction (5, 6; A2); forgetting the square root (crossed in 12); unconverted km h⁻¹ (crossed in 14).
- **One idea at a time:** forces (2, 3) before equations (4) before the needed-friction calculation (5) before the limit (6, 7) before what it depends on (8) and what happens beyond it (9).
- **Video makes it easier:** the rear view puts all three forces in the plane of the screen (2 to 4); the straight path pulling away from the bend shows the slip friction opposes (3); the needed bar rising to meet the available bar (6, 14); the wider path above the limit (9).
- **Response opportunity:** one prediction (3 s countdown) and two unseen HSC-style tasks with every condition visible (mass, flat or unbanked, radius, coefficient of static friction, speed with unit, constant speed, wet), 10 s each with the invitation to pause; nothing answer-bearing. One crossed mistake each; feedback about 33 s and 37 s.
- **Avoided double teaching:** F_net = mv²/r, the tangent exit and "centripetal force is a name" are recalled from v11; weight, normal force and static friction are recalled from Year 11 with a short meaning.
- **Syllabus coverage:** `P5-IQ2-02` for "cars moving around horizontal circular bends": all forces identified, resolved vertically and horizontally, and friction identified as the inward resultant. `P5-IQ2-03`: F_c = mv²/r used for required friction and for the limiting speed.
- **Out of scope by design:** the conical pendulum (v13), banked tracks (v14), work (v15), the investigation (v16), skidding dynamics and kinetic friction values, tyre load transfer (author note a).

## Practice questions and model answers

**Attempt 1 (scene 11; site "Analyse 6 marks" question, condensed, HSC style, 3 marks suggested, not an official marking scheme).** "A car of mass 1200 kg travels at constant speed around a flat, unbanked bend of radius 45 m. The coefficient of static friction between the tyres and the road is 0.65. (a) Identify the force that provides the centripetal force on the car. (b) Calculate the greatest speed at which the car can take the bend without sliding."
Model answer: (a) Static friction between the tyres and the road, directed towards the centre of the bend (the only horizontal force; weight and normal force are vertical and balance, N = mg). (b) At the maximum speed the friction needed equals the maximum available: mv²/r = μ_s mg, so v_max = √(μ_s g r) = √(0.65 × 9.8 × 45) = √286.65 = 16.9 m s⁻¹ (about 61 km h⁻¹). The mass is not needed. Classic mistake (crossed): "v = 0.65 × 9.8 × 45 = 287 m s⁻¹".

**Attempt 2 (scene 13; new, built on the site's lesson 7 roundabout, HSC style, 3 marks).** "A car of mass 1500 kg enters a flat roundabout of radius 15 m at a constant speed of 35 km h⁻¹. The road is wet and the coefficient of static friction between the tyres and the road is 0.40. Determine, with calculations, whether the car can travel around the roundabout at this speed without sliding."
Model answer: v = 35 ÷ 3.6 = 9.72 m s⁻¹. Friction needed: f = mv²/r = 1500 × 9.72² ÷ 15 = 9.45 × 10³ N. Maximum available: μ_s mg = 0.40 × 1500 × 9.8 = 5.88 × 10³ N. The friction needed is greater than the maximum available, so the car cannot go round at this speed and slides outwards. (Equivalently v_max = √(0.40 × 9.8 × 15) = 7.7 m s⁻¹ = 28 km h⁻¹ < 35 km h⁻¹.) Classic mistake (crossed): using 35 without converting km h⁻¹ to m s⁻¹.

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| WE1 (site lesson 7 worked example 3) | m = 1200 kg, r = 40 m, v = 15 m s⁻¹: f = 1200 × 225 ÷ 40 = 6750 N (6.75 × 10³ N) | 5 |
| WE2 (site lesson 8 worked example 4) | r = 30 m, μ_s = 0.60, g = 9.8: 0.60 × 9.8 × 30 = 176.4; √176.4 = 13.28 m s⁻¹ ("thirteen point three"); 47.8 km h⁻¹ ("about forty-eight") | 7, 8 |
| Wet-road variation (illustrative) | μ_s = 0.30: √(0.30 × 9.8 × 30) = √88.2 = 9.39 m s⁻¹ ("about nine point four") | 8 |
| A1 (site "Analyse 6 marks") | m = 1200 kg, r = 45 m, μ_s = 0.65: 0.65 × 9.8 × 45 = 286.65; √ = 16.93 m s⁻¹ (16.9); 60.95 km h⁻¹ (about 61); crossed 287 | 11, 12 |
| A2 (site roundabout; μ_s new) | m = 1500 kg, r = 15 m, 35 km h⁻¹ = 9.722 m s⁻¹ (9.72); needed 1500 × 9.722² ÷ 15 = 9452 N (9.45 × 10³; with 9.72, 9448); available 0.40 × 1500 × 9.8 = 5880 N; v_max = √58.8 = 7.67 m s⁻¹ (7.7) = 27.6 km h⁻¹ | 13, 14 |
| Truck and car tags | same v_max, 13.3 m s⁻¹ (WE2 bend) | 8 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov); Codex to re-check.

- WE1: 1200 × 15² ÷ 40 = 6750.
- WE2: 0.60 × 9.8 × 30 = 176.4; √176.4 = 13.2816; × 3.6 = 47.814.
- Wet: 0.30 × 9.8 × 30 = 88.2; √88.2 = 9.3915.
- A1: 0.65 × 9.8 × 45 = 286.65; √286.65 = 16.9307; × 3.6 = 60.95.
- A2: 35 ÷ 3.6 = 9.7222; 1500 × 9.7222² ÷ 15 = 9452.2; 0.40 × 1500 × 9.8 = 5880; √(0.40 × 9.8 × 15) = √58.8 = 7.668; × 3.6 = 27.6.
- Site notes: √(80 × 9.8 × tan 12°) = √166.64 = 12.909 m s⁻¹ = 46.47 km h⁻¹; WE3 19.9165 m s⁻¹ = 71.70 km h⁻¹; SA2 12.856 m s⁻¹ = 46.28 km h⁻¹ and 23.257 m s⁻¹ = 83.72 km h⁻¹; Daytona √(300 × 9.8 × tan 31°) = 42.03 and √(310 × 9.8 × tan 31°) = 42.72 m s⁻¹.
- Reserve (not used): site Activity 1 Q3: √(0.50 × 9.8 × 20) = 9.899 m s⁻¹ = 35.6 km h⁻¹.

## Memory aid check

- **"Centripetal is a job, not a force."** Meaning, as said in scene 10: on a free-body diagram draw only real forces (weight, normal force, friction, tension); "centripetal force" names whichever of them, or whichever combination, points towards the centre. Assumptions checked: true for any analysis in an inertial (ground) frame, which is the only frame used in the HSC course; in a rotating frame one adds fictitious forces, which this run does not use. It helps a new case: v13 (the tension's horizontal part does the job) and v14 (the normal force's horizontal part, plus friction off the design speed). Introduced after the friction case is solved (10).
- **Considered, not used:** "Friction points where the car wants to go" (wrong: it points inwards, opposite the outward slip); "No grip, no turn" (true but adds nothing to the formula).

## Narration length estimate

Revision 1 count (6 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,795 characters**, 16 scenes. Characters per scene (1 to 16): 321, 414, 525, 277, 430, 439, 320, 431, 350, 281, 343, 429, 300, 486, 374, 75. At 13.3 characters per second the speech is about 436 s; add about 3 s for the prediction countdown, about 3 s for the beyond-the-limit playback in scene 9, 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 55 s more of the quiet notes hold (about 87 s of holds and countdowns): **about 523 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 8's wet-road number (open decision 2); scene 9's last sentence; scene 15's "Only two forces act now" sentence.

## Opening frame

v11's final frame (designed in this wave, `phys-y12-m5-v11.md`): paper background; a coded top view of a flat roundabout: grey road ring around a pale green central island with a navy centre dot; the blue car plate (`phys-y11-car-top-v1.png`) at the 3 o'clock position, nose up the page, with a short teal velocity arrow along the tangent; a violet "a" arrow from the car towards the centre and a dashed amber "F_net = mv²/r" arrow with a large "?"; a small side-view chip at the top right with amber "weight" (down) and "normal force" (up), "vertical: no help inwards"; heading "How can speed be constant while velocity keeps changing?"; chip "Next: which force supplies the inward acceleration on a flat curve?". Scene 1 sets the car moving again; the heading changes in scene 3 (on "job") to "Which force supplies the inward acceleration on a flat curve?" and the "Next" chip clears on "inwards".

## Final frame

The last explained frame (end of scene 15, before the key-notes board): paper background; a lab scene on the left half: the retort stand plate (`phys-y11-retort-stand-v1.png`) standing on a coded bench line, a boss and crossbar (`phys-y11-boss-crossbar-v1.png`) near its top with the crossbar reaching to the right; a navy pivot dot at the crossbar's tip; a coded string from the pivot down and to the right to the steel ball (`phys-y11-steel-ball-v1.png`, 50 px), the string at 30° to a dashed vertical line through the pivot (no angle label); a dashed horizontal circle in perspective below the pivot, the ball at its right-hand edge and a navy dot at its centre directly below the pivot; a faint cone outline from the pivot to the circle; two amber arrows on the ball, "tension" along the string towards the pivot and "weight" straight down; a "?" between the tension arrow and the dashed horizontal radius from the ball to the circle's centre; heading "Which force supplies the inward acceleration on a flat curve?"; chip "Next: how does string tension sustain a conical pendulum?". v13 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m5-v12` (route phys-y12-m5-v12). Suggested explainer folder `src/explainer/lessons/phys-y12-m5-v12` and build folder `docs/production/claude-pm/lessons/p-y12-m5-v12` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 16 scene headings, all `### N.`): hook, forces-on-car, friction-job, force-equations, worked-friction-needed, the-limit, worked-limiting-speed, what-sets-limit, past-the-limit, mistake-memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Scene 1 is `explain` with a 3 s prediction countdown. `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: road cross-section stage, circle stage (from v11), slip inset, beyond-the-limit playback, needed-versus-available bars, `AlignedAlgebra`, `ScribbleCircle`, `PenArrow`, `Countdown`, `CameraStage`. Transitions (`pickTransition`): 1 to 2 camera change (roundabout to rear view); 2 to 3 to 4 camera continue; 4 to 5 clear change to the calculation layout; 5 to 6 to 7 to 8 camera continue; 8 to 9 camera change to the roundabout; 9 to 10 clear change; attempts and feedback card shrink to the top; 14 to 15 clear change; 15 to 16 fade to the notes board.

Holds: hook (3 s countdown), memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 60 s). Review evidence paths: `learning_review` = `checks/p-y12-m5-v12-learning-review.md`, `science_check` = `checks/p-y12-m5-v12-physics-check.md`.

## Assets

Have (inspected 6 Nov on a session contact sheet; scaled uniformly only, never stretched):
- `public/assets/physics/phys-y11-car-top-v1.png` (1600 × 800, RGBA): scenes 1, 3 (inset), 9.
- `public/assets/physics/phys-y11-truck-side-v1.png` (2400 × 1000, RGBA; flatbed truck, cab windows empty) and `public/assets/biology/b4-car-blue-v1.png` (1600 × 800, RGBA; side view, empty seats): scene 8.
- `public/assets/physics/phys-y11-retort-stand-v1.png` (600 × 2400), `phys-y11-boss-crossbar-v1.png` (800 × 800), `phys-y11-steel-ball-v1.png` (800 × 800), all RGBA: scene 15 (and v13).
- **Checked, not used:** `phys-y11-car-top-blue-v1.png`, `-yellow-v1.png` (one car is enough); `phys-y11-cart-side-v1.png` (a hand cart, not a road vehicle); `phys-y11-dashboard-cluster-v1.png` (v11 used it; no speed reading is needed here).

Need (new plates, Codex), in priority order:
1. `y12p-car-rear-v1.png`: scenes 2 to 5, 10, 12 (sketch) and v14. Essential (the rear view is the HSC view for forces on a bend).

Coded: roundabout ring, road cross-section line, "centre of the bend" pointer, force arrows and components, ⊗ velocity marker, slip inset paths, wider-path trail, needed-versus-available bars and the small v² graph, bench line, string, dashed circle and cone outline, calculation strips, crossed chips, attempt cards, countdowns, key notes board.

Kit gaps (for the v12 build brief; the cross-section stage is shared with v14):
1. **Road cross-section stage.** A coded road line that can be flat (here) or tilted by θ about a set point (v14), with the rear-view car plate registered so its wheels sit on the line and it tilts with the road; a centre-of-mass point (from Codex) for force arrows on one force scale; a ⊗ velocity marker; a "centre of the bend" pointer; optional dashed components.
2. **Needed-versus-available bars.** Two vertical bars driven by the same values as the working: "needed: mv²/r" (can follow a speed slider) and "available: μ_s mg".
3. **Beyond-the-limit playback.** On the circle stage, a car path with a larger radius of curvature than the ring (illustrative), leaving a trail to the outer edge.

## Codex asset brief (Year 12 Physics M5 v12: rear-view car)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/phys-y12-m5-v12.md`, route entry phys-y12-m5-v12. Paint after the learning review, physics check and Codex error check pass and the owner gives the go-ahead. Save to `public/assets/physics/`. Every plate: transparent PNG with a true alpha channel and **clean edges with no coloured fringe or halo** (check on a black and a white background), ink and watercolour in the house style, matched to `phys-y11-car-top-v1.png` and `biology/b4-car-blue-v1.png` (same blue hatchback) in line weight, palette and finish, at least 8 per cent clear margin, no text, labels, letters, numbers, number plate characters, scale bars, brand names, logos, people, hands, faces, backdrop, glow or ground shadow. Never stretch to fit; keep the native aspect ratio.

1. `y12p-car-rear-v1.png` (1600 × 1200 px): the same blue hatchback seen exactly from behind, perfectly level and symmetric, standing on its four tyres (two visible), with a plain blank number plate, red tail lights and a rear window through which only the empty seat backs and headrests show (no people, no silhouettes). The bottoms of both tyres touch one straight horizontal line. Codex reports, in plate pixels: the tyre contact points (left and right), the line between them, and a centre-of-mass point (on the vertical centreline, about 40 per cent of the car's height above the contact line), so that the plate can be rotated about the midpoint of the contact line to sit on a tilted road in v14.

Report inspection on the paper background and the dark board background at about 400 px wide, and confirm it reads as the same car as `phys-y11-car-top-v1.png`. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/phys-y12-m5-v12-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the physics of every learner-visible claim: weight and normal force balance on a level road at constant height; air resistance acts along the path; static friction points towards the centre because it opposes the outward slip relative to the road (author note b); friction is the whole inward net force on a flat curve; maximum static friction is μ_s N; v_max = √(μ_s g r) with mass cancelling; halving μ_s gives 9.4 m s⁻¹ in WE2's bend; above v_max the path is wider than the bend and no outward force acts (author note c).
3. Confirm the memory aid's assumptions (see "Memory aid check").
4. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
5. Confirm both attempt cards carry every condition (mass, flat or unbanked, radius, coefficient of static friction, constant speed, speed with unit, wet) and show nothing answer-bearing.
6. Confirm the syllabus quotes match the route JSON exactly and are labelled 2017.
7. Confirm no person, hand, face or body outline is drawn or requested (closed or empty cars; empty truck cab).
8. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
9. Confirm the narration character count and per-scene counts by script with the build parser rules.
10. Confirm the four site notes against the site lesson (values listed under "Numbers to verify").

## YouTube metadata (draft)

Title: What Force Turns a Car on a Flat Curve? Friction and Maximum Speed | HSC Physics Module 5

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module5/lesson08.sa.html

A car going round a flat roundabout needs a net force towards the centre. Its weight pulls down and the road pushes up, so what pulls it in? Find out why static friction points inwards, write the force equations for a flat curve, and calculate the friction a 1200 kg car needs at 15 m/s. Then see why friction sets a top speed, v max = √(μs g r), why the mass cancels, and what really happens when a car goes too fast. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 5: Advanced Mechanics.
Syllabus content (NSW Physics Stage 6, 2017):
"analyse the forces acting on an object executing uniform circular motion in a variety of situations, for example: cars moving around horizontal circular bends, a mass on a string, objects on banked tracks (ACSPH100)"
"solve problems, model and make quantitative predictions about objects executing uniform circular motion in a variety of situations, using the following relationships: a_c = v²/r, v = 2πr/T, F_c = mv²/r, ω = Δθ/t"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: uniform circular motion, constant speed and changing velocity. Next: the conical pendulum, and how string tension keeps it going round.

#HSCPhysics #Physics #CircularMotion #Friction #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v11; check that the "tyres would slide outwards" reasoning lands at playback speed, that the rear view is read as "driving into the screen", that the needed-versus-available bars are clear, and that the attempt cards give nothing away), then the physics check and the Codex error check.
- The slip inset, the needed-versus-available bars and the wider path above the limit carry the explanation; judge them at playback speed in the voiced preview.
