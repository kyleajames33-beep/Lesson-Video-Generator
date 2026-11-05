# Year 12 Physics M5 V15: Work in circular motion. Does the inward force do work in uniform circular motion? (design)

Status: Revision 1 (6 Nov 2026): first design. Needs independent learning review and science check before voicing.

Narration 5,672 characters, 16 scenes, about 517 s, counted by script with the build parser rules (see "Narration length estimate"). Opens on v14's final frame.

Scope: fifteenth video of Year 12 Physics (Physics Stage 6, 2017 syllabus), Module 5 (Advanced Mechanics), fifth video on circular motion, inquiry question "Why do objects move in circles?". Templates: `phys-y12-m5-v01.md` and `phys-y12-m5-v10.md` (this run's structure), `phys-y11-fa1-v01.md`, `math-a12-d10.md` (calculation layout), `bio-y11-fa1-v05.md` (plates and asset brief format). No starter pack exists; the pack work is done here. Site lessons read in full (6 Nov, read-only): lesson 7, card 4 "Work and Energy in Uniform Circular Motion" with its key insight, the roundabout, the misconception, the wrap-up and the "Explain" step on perpendicular force (`C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson07.sa.html`, SHA256 `01b9c74b147e84c698ec636ed0c4fd27298992fa401503a2ae5ba49930a8501e`), and lesson 9, every section, including card 4 "Energy connects locations", worked example 1, the assessment boundary and the "Evaluate 5 marks" answer on a bucket in a vertical circle (`C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson09.sa.html`, SHA256 `437d0357bca1619358587f6775d5f70be1d243026aff5b9cea4c1a0fca07b74f`); both recomputed 6 Nov and matching the route. Route entry: `phys-y12-m5-v15` in `../../programme/phys-y12-route-inputs.json`, sections `l07-work-title` and `l09-energy-title`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Use force perpendicular to instantaneous displacement to explain zero work and constant kinetic energy. Contrast a vertical circle where gravity changes speed, clearly labelled as non-uniform extension." Next: "phys-y12-m5-v16: How can measurements test the circular-force relationship?"

Owner rules applied: 2017 syllabus only, quoted exactly; one main learner question; no people, hands, faces or body outlines (the site's "rider feels light" and the bucket of water are not used; the vertical circle is a steel ball on a string from a fixed pivot; the top-view car is a closed plate); real objects are painted plates (car, steel ball, wooden block, and the whirling-bung apparatus in the handoff), and arrows, the step-by-step lap, energy bars and all working are coded; plates never stretched; one reasoning stage at a time; calculation layout with task strip, equation strip and grouped givens; every number recalculated in Python; g = 9.8 m s⁻²; HSC symbols (W = Fs cos θ as in Year 11, K = ½mv², U = mgh); in-teaching prediction with a 3 s countdown; "Pause here to answer." then a 10 s countdown with the full worded question on screen; brief feedback with one crossed-out mistake; HSC-style questions (A1 new, A2 adapted from the site's lesson 9 short answer); optional key-notes hold; Australian spelling; no em dashes.

Syllabus content (Physics Stage 6 (2017), Module 5 Advanced Mechanics; ledger id `P5-IQ2-04`), quoted from the route JSON `syllabusActions`:

- `P5-IQ2-04`: "investigate the relationship between the total energy and work done on an object executing uniform circular motion"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 53)

**Boundary:** starts on v14's final frame (top view of the banked bend at the design speed, the car with its tangent velocity and a 2.50 × 10³ N inward force at right angles, "W = ?"). Teaches: work W = Fs cos θ recalled, and zero work for a force at right angles to the displacement; the inward force is at right angles to every small step of the lap, so it does zero work over the lap; the hook's "1.26 MJ a lap" is wrong because the force is never along the path; the work-energy theorem (net work equals change in kinetic energy), so kinetic energy and speed stay constant; the inward force changes only the direction of the velocity; on a level circle the total mechanical energy is constant (and a real car's engine only replaces energy lost to resistance); the contrast, labelled beyond uniform circular motion: in a vertical circle the tension still does no work but gravity does, so the speed changes (site lesson 9 worked example 1's energy step: 4.0 to 6.88 m s⁻¹). Stops before contact forces and minimum speeds in vertical loops (site lesson 9, optional extension) and before the investigation (v16).

## Decisions

- **Learner question (route wording kept).** "Does the inward force do work in uniform circular motion?" The answer, built in order: work counts only the part of a force along the displacement (2); the inward force is at right angles to every small step (3); so it does no work and the kinetic energy stays the same (3, 4); it only turns the velocity (5); so the total energy stays the same (6). The contrast (8, 9) shows what happens when a force does have a part along the path.
- **Hook (v14 handoff, new numbers from v14's car).** Force times lap length: 2.50 × 10³ N × 503 m = 1.26 MJ. The tempting multiplication is the misconception made concrete. Chips "Yes, about 1.26 MJ each lap" and "No, it does no work". The kinetic energy (1.00 × 10⁵ J) makes the absurdity visible in scene 4: adding 1.26 MJ each lap would make the car more than three times faster after one lap (author note b).
- **Step-by-step lap (site "At every instant ... perpendicular"; route "perpendicular to instantaneous displacement").** The lap is chopped into 24 short steps, each with its tiny displacement arrow (teal) and the inward force (amber) at right angles, and a "W = 0" tick at each; a running total stays at 0 J. Then the steps shrink to 72 to show the limit. This is the route's "instantaneous displacement" made visible.
- **Work recall (Year 11).** W = Fs cos θ, recalled with a coded block on a floor (the wooden block plate) pushed along, then pushed at right angles (a coded arrow only; nothing pushes it). Not re-taught beyond the cosine factor.
- **Work-energy theorem (site card 4 "W_net = ΔKE = 0").** Named with a plain meaning (net work equals the change in kinetic energy). Uses the car's K = ½ × 1200 × 12.9² = 1.00 × 10⁵ J.
- **Total energy (syllabus "relationship between the total energy and work done").** Scene 6: on a level circle U and K are both constant, so the total mechanical energy is constant and the net work is zero. A real car's engine does work only to replace energy lost to air resistance and rolling resistance, so the net work is still zero (author note c). Kept short: one sentence.
- **Mistake (site misconception "Because there is a net force, the object must be gaining energy").** Folded into scene 7 as a contrast between "changes velocity" and "changes speed". A1 crosses the arithmetic version (F × 2πr).
- **Vertical circle contrast (route; site lesson 9, "optional extension" and "Evaluate 5 marks").** Scene 8 says "beyond uniform circular motion" aloud and the screen carries the label "non-uniform circular motion (extension)". A steel ball on a string from a fixed pivot (no hand, no bucket). The tension is still perpendicular and does no work; the weight has a part along the path everywhere except the top and bottom. Scene 9 uses the site's worked example 1 energy step only (0.50 kg, 0.80 m, 4.0 m s⁻¹ at the top: gravity does 7.84 J between top and bottom, v = 6.88 m s⁻¹). The site's tensions (5.1 N, 34.5 N) are not used (out of scope for the route).
- **Memory aid (scene 10): "Across steers, along speeds."** See "Memory aid check".
- **Attempts (HSC style).** A1 (new): 0.30 kg ball on a smooth horizontal table, string, r = 0.60 m, 4.0 m s⁻¹: tension 8.0 N; work per revolution 0 J. A2 (site lesson 9 short-answer Q1's stone, 0.40 kg on 0.50 m, with a new top speed of 3.0 m s⁻¹): bottom speed 5.35 m s⁻¹; not uniform because gravity does work. Crossed: A1 "W = 8.0 × 2π × 0.60 = 30 J"; A2 "3.0 m s⁻¹, because the tension does no work".
- **Colour key (v11 to v14).** Forces amber; velocity and small displacement steps teal; acceleration violet; kinetic energy orange bar and potential energy blue bar in the energy panel; givens navy; crossed chips red.
- **Handoff (route next).** Scene 15 builds the whirling-bung apparatus (rubber bung, glass tube held in a clamp on a stand, string, paper-clip marker, hanging masses) and asks whether measurements can test F = mv²/r (v16: "How can measurements test the circular-force relationship?"). See "Final frame".
- **Site sources used:** lesson 7 card 4 in full (2 to 6), its key insight (5, 7), its misconception (7), the wrap-up "F_c redirects, does not accelerate or decelerate" (5), the final-check misconception (7); lesson 9 card 4 "Energy connects locations" and its "Choose a zero level" box (9), worked example 1's energy line (9), the "Evaluate 5 marks" answer (8: "except at the very top and bottom the weight has a component along the direction of motion"), short-answer Q1's stone (A2, with a new speed), and the assessment boundary (8: extension label). Not used: lesson 9's loop thresholds (√(gr), √(5gr)), apparent weight and roller coasters (extension, and riders are people); the lesson 7 roundabout (its 9450 N is v12's A2).
- **Site notes (site lessons 7 and 9, read 6 Nov):** no errors found in the sections used. Checked and correct: lesson 7's roundabout (6.30 m s⁻², 9452 N, given as 9450); lesson 9 worked example 1 (5.1 N, 47.36 m² s⁻², 34.5 N), worked example 2 (11.1 m s⁻¹), worked example 3 (137.2 m² s⁻², 11.7 m s⁻¹, 7350 N, 6.26 m s⁻¹), short-answer Q1 (2.98 m s⁻¹), Q2 (17.1 m s⁻¹, 14 700 N) and Q3 (1.51 × 10⁴ N, 1.10 × 10⁴ N).
- **Cause chain taught, in order:** (1) work counts only the part of a force along the displacement, W = Fs cos θ (2); (2) in uniform circular motion each small displacement is along the tangent and the inward force is along the radius, at 90° (3); (3) so the inward force does no work in any step, and none over a lap (3); (4) zero net work means no change in kinetic energy, so constant speed (4); (5) the force only turns the velocity (5); (6) on a level circle the total mechanical energy stays constant (6); (7) in a vertical circle the weight has a part along the path, so gravity does work and the speed changes; energy conservation links the speeds (8, 9).
- **Entry knowledge (route `entryKnowledge`, v11 to v14):** the acceleration in uniform circular motion is at right angles to the velocity and the velocity circle (v11); the 1200 kg car at 12.9 m s⁻¹ on the 80 m banked bend and its 2.50 × 10³ N inward force (v14); work W = Fs cos θ, kinetic energy ½mv², gravitational potential energy mgh near Earth's surface, the work-energy theorem and conservation of mechanical energy (Year 11; each recalled in a sentence).
- **Learner-visible vocabulary (plain meaning at first use):** work (the energy a force transfers by pushing something along the direction it moves, 2); work-energy theorem (the net work done on an object equals its change in kinetic energy, 4); total mechanical energy (kinetic plus gravitational potential energy, 6); non-uniform circular motion (motion in a circle with changing speed, 8).
- **Legacy logic ported:** none. The coded family `m5-vertical-loop` (`verticalLoopAt` in `src/explainer/physics/module5/model.ts`: energy-conserving ball on a taut string, speed from arc length, force arrows on one scale; g = 10, r = 2 in its default) is reused and reconfigured to g = 9.8, r = 0.80 m, m = 0.50 kg and 4.0 m s⁻¹ at the top (kit gaps).
- **New explainer motion:** **step-by-step lap** (circle stage from v11 with 24 then 72 short tangent displacement steps, an inward force at each, a right-angle mark and a "W = 0" tick, and a running total readout); **energy panel** (two bars, K orange and U blue, with a total line; for the level car both stay flat; for the vertical circle they trade while the total stays flat); **vertical circle** (reconfigured `m5-vertical-loop` with the steel ball plate, tension and weight arrows, the weight split into along-path and across-path parts at a side point); **apparatus build** (the v16 plates assembling for the handoff); `AlignedAlgebra`; `NumberTicker`; `Countdown` (3 s in scene 1; 10 s in scenes 11 and 13); `QuestionCard`; `Chip` with `cross`; `PenArrow`; `ScribbleCircle`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the stage on the left (the top-view bend, the block, or the vertical circle with its pivot well above the bottom 12% and its lowest point above it); the energy panel and working on the right.
- **No human figures.** No driver, rider or student; nothing pushes the block in scene 2 (arrows only); the bung apparatus is drawn with its tube clamped.
- **Author notes (not learner copy):**
  (a) Steps: with 24 steps each chord makes 7.5° with the tangent at its start, so a strict chord is not exactly perpendicular to the force at the start point; the stage draws each step along the tangent (instantaneous displacement) and then refines to 72 steps. The narration says "a tiny distance along the tangent".
  (b) If 1.2565 MJ were added in one lap: K = 9.9987 × 10⁴ + 1.2565 × 10⁶ = 1.3565 × 10⁶ J, v = √(2K/m) = 47.5 m s⁻¹, 3.68 times 12.9 m s⁻¹ ("more than three times faster").
  (c) A real car at a steady speed: the engine's drive force (forward static friction at the driven tyres) balances air resistance and rolling resistance; their works cancel, so the net work is zero and K is constant. Not narrated beyond one sentence.
  (d) At the design speed on the banked road both N and mg are perpendicular to the (horizontal, tangential) velocity, so neither does work. The hook's "inward force" is the net force N sin θ, but the full N also does no work.
  (e) Vertical circle: tension along the radius is always perpendicular to the velocity; weight has a tangential part mg sin φ, where φ is measured from the bottom; at the top and bottom that part is zero. Energy: ½mv_b² = ½mv_t² + mg(2r).
  (f) Pronunciations: "one point two six million joules"; "a half m v squared"; "seven point eight four joules"; "six point eight eight metres per second".

- **Open decisions for root:**
  - **1. Vertical-circle numbers (learning review).** Scene 9 calculates the bottom speed (site worked example 1's energy step). The route asks only for a contrast; if the review finds the numbers a detour, keep scene 8 and cut scene 9 to its first two sentences (about 250 characters; narration stays above 5,500) and switch A2 to its explanation part only.
  - **2. Hook arithmetic (learning review).** The "1.26 MJ a lap" figure is deliberately wrong. Confirm that showing a wrong calculation first, then crossing it, reads clearly (it is crossed on screen in scene 3).
  - **3. Clamped tube in the handoff (root; see v16 open decision 1).**

Main question: *A car goes round a banked bend at a steady 12.9 m s⁻¹ with a 2.50 × 10³ N inward force on it. Does that force do 1.26 million joules of work every lap, or none at all, and what happens to the car's energy?*
Entry knowledge: acceleration at right angles to velocity (v11); the banked-bend car (v14); W = Fs cos θ, ½mv², mgh, the work-energy theorem, conservation of mechanical energy (Year 11).
Stops after: zero work by the inward force, step by step; constant kinetic energy and speed; constant total energy on a level circle; the vertical-circle contrast with one energy calculation. No loop thresholds or contact forces.
Handoff: v16, how measurements can test F = mv²/r.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *W*, *F*, *s*, *θ*, *K*, *U*, *m*, *v*, *g*, *h*, *r*. Paper background and handwritten headline face as the explainer house style.

### 1. hook (1.26 MJ a lap?)
> Here's that car going round the banked bend at the design speed. The inward force on it is about two and a half thousand newtons, and one lap is about five hundred metres. Force times distance would be about one point two six million joules, every single lap. So does the inward force really do that much **work**? Make a **prediction**.

Visual: opens on v14's final frame (see "Opening frame"); the car sets off round the ring again. On "two and a half thousand newtons" the amber "F_net = 2.50 × 10³ N" pulses. On "one lap is about five hundred metres" the ring's outline draws once round with "2π × 80 = 503 m". On "one point two six million joules" a grey chip "2.50 × 10³ × 503 = 1.26 × 10⁶ J ?". On "work" two chips "Yes, about 1.26 MJ each lap" and "No, it does no work". On "prediction" a 3 s `Countdown`.

### 2. what work means
> Remember what work is. A force does work when it pushes something along the direction it moves. The work is the force, times the displacement, times the cosine of the angle between them. Push along the motion, and the angle is zero, so all of the force counts. Push at right angles to the motion, and the angle is ninety degrees. Cosine ninety is zero, so that force does no work at **all**.

Visual: clear change to a coded floor line with the wooden block plate (`phys-y11-wooden-block-v1.png`, reused) sliding to the right, a teal displacement arrow "s". On "times the cosine of the angle between them" the line "W = Fs cos θ" with an angle arc θ between an amber force arrow and s. On "Push along the motion" the force arrow lines up with s, "θ = 0°, cos 0° = 1, W = Fs". On "right angles to the motion" the force arrow turns to point straight down onto the moving block, a right-angle mark, "θ = 90°"; on "all" "cos 90° = 0, W = 0".

### 3. step by step round the circle
> Now chop the lap into tiny steps. In each step, the car moves a tiny distance along the tangent. But the inward force points at the centre, at right angles to that step. So in every step, the work done is **zero**. Add up zero, step after step, and the total over a whole lap is zero too. The one point two six million joules assumed the force pointed along the path. It never **does**.

Visual: camera change back to the top-view bend (step-by-step lap). On "chop the lap into tiny steps" 24 short teal tangent steps appear round the ring one after another as the car moves through them. On "at right angles to that step" an amber inward arrow and a right-angle mark appear at each step. On "zero" each step gets a small "W = 0" tick and a running total readout "total W = 0 J" stays at zero; the steps refine to 72 (author note a). On "It never does" the "1.26 × 10⁶ J ?" chip from scene 1 is crossed (caption "F is never along the path") and the "No, it does no work" chip ticks.

### 4. work and kinetic energy
> That fits with the work-energy theorem. The net work done on an object equals its change in kinetic energy. Zero work means the kinetic energy doesn't change, so the speed doesn't change. The car's kinetic energy is a half m v squared, about a hundred thousand joules, and it stays at that value lap after **lap**. If one point two six million joules really went in each lap, the car would be going more than three times faster after just one **lap**.

Visual: the energy panel (new) at the right: an orange bar "K". On "net work done on an object equals its change in kinetic energy" the line "W_net = ΔK". On "a half m v squared" `AlignedAlgebra` "K = ½ × 1200 × 12.9² = 1.00 × 10⁵ J"; on "lap after lap" the lap counter ticks and the K bar stays the same height, "ΔK = 0". On "more than three times faster" a ghost K bar shoots up to 13.6 times its height with a grey "v = 47.5 m s⁻¹ ?" tag; on "after just one lap" the ghost is crossed.

### 5. what the inward force does
> So what does the inward force do, if it doesn't change the energy? It changes the direction of the velocity, and only the direction. In the velocity circle from the first circular motion video, the velocity arrow swings round, but its length never changes. The acceleration is always at right angles to the velocity, so it turns the arrow without stretching **it**.

Visual: on "It changes the direction of the velocity" the car's teal velocity arrow swings as it goes round. On "velocity circle" a small velocity circle (from v11) at the right: one arrow rotating, its length fixed, tag "length = speed: constant". On "it" a violet acceleration arrow at the arrow's tip, at right angles to it, with the tag "turns, doesn't stretch".

### 6. total energy
> What about the total energy? On a level bend the car's height doesn't change, so its gravitational potential energy stays the same. Its kinetic energy stays the same too. So in uniform circular motion, the total mechanical energy is constant, because the net force does no work. A real car's engine does do some work, but only to replace the energy lost to air resistance and rolling resistance. The net work on the car is still **zero**.

Visual: the energy panel adds a blue bar "U = mgh" (flat) beside the orange "K" (flat) and a navy total line "E = K + U" (flat), all three steady as the car laps. On "total mechanical energy is constant" the total line pulses, "W_net = 0, so E constant". On "A real car's engine" a small pair of tags at the car: amber forward "drive" and amber backward "air and rolling resistance", equal lengths; on "zero" "W_drive + W_resistance = 0".

### 7. the energy mistake
> A common mistake is thinking that a net force must change an object's energy. A net force always changes the velocity. But it only changes the speed if part of it points along the path. In uniform circular motion, none of it **does**.

Visual: a chip "net force, so it must gain energy" fades in; on "always changes the velocity" a tag "velocity: yes"; on "only changes the speed if part of it points along the path" a tag "speed: only if F has a part along the path"; on "does" the chip is crossed (caption "UCM: F at 90° to v, so K constant").

### 8. a vertical circle: beyond uniform circular motion
> Now a contrast, and it goes beyond uniform circular motion. A ball on a string can also go round a vertical circle. The tension still points to the centre, at right angles to the motion, so it still does no work. But the weight always points straight down. Except at the very top and bottom, part of the weight points along the path. So gravity does work. The ball speeds up on the way down, and slows on the way **up**. Its speed changes, so this is non-uniform circular **motion**.

Visual: clear change to the vertical circle (reconfigured `m5-vertical-loop`): a navy pivot dot, a coded string to the steel ball plate (`phys-y11-steel-ball-v1.png`, reused) going round a dashed vertical circle; a label at the top "non-uniform circular motion (extension)". On "The tension still points to the centre" an amber tension arrow along the string with a right-angle mark against the teal velocity arrow. On "the weight always points straight down" an amber "mg" arrow down. On "part of the weight points along the path" the ball pauses at a side-low point and mg splits into dashed parts: one along the path (orange, "does work") and one along the string; at the top and bottom the along-path part shrinks to zero (two small inset freezes). On "up" the ball's teal velocity arrow lengthens on the way down and shortens on the way up, with a speed readout. On "motion" the energy panel shows K and U trading as the ball goes round, the total line flat.

### 9. using energy between two points
> We can use energy to link two points. Say a zero point five zero kilogram ball on a zero point eight zero metre string moves at four point zero metres per second at the top. On the way down to the bottom, it falls two radii, one point six metres. Gravity does m g h of work, about seven point eight four **joules**. That all becomes extra kinetic energy. So at the bottom, v squared is sixteen plus four g r, and v is about six point eight eight metres per **second**.

Visual: calculation layout beside the frozen circle. Task strip: "Find the ball's speed at the bottom (no losses)." Givens in navy: "m = 0.50 kg", "r = 0.80 m", "v_top = 4.0 m s⁻¹", "g = 9.8 m s⁻²". Equation strip: "½mv_top² + mg(2r) = ½mv_bottom²". On "two radii, one point six metres" a navy bracket "h = 2r = 1.6 m" on the circle. On "joules" "W_gravity = mgh = 0.50 × 9.8 × 1.6 = 7.84 J". On "extra kinetic energy" the U bar empties into the K bar. On "second" `AlignedAlgebra` "v_bottom² = v_top² + 4gr = 16 + 31.36 = 47.36; v_bottom = 6.88 m s⁻¹".

### 10. memory aid
> Here's a way to remember the difference. Across steers, along speeds. The part of a force across the path steers the object. Only the part along the path speeds it up or slows it **down**.

Visual: board shows two small panels: the level car (force across the path only) and the vertical circle at a side point (weight split). On "Across steers, along speeds" the handwritten line writes large: "Across steers, along speeds." On "down" the car's inward arrow gets the tag "across: steers" and the weight's along-path part "along: speeds". Hold about 2 seconds.

### 11. attempt 1 (countdown, 10 seconds)
> Your turn. A zero point three zero kilogram ball on a smooth horizontal table is tied to a string, and moves in a circle of radius zero point six zero metres at a constant four point zero metres per second. Calculate the tension in the string, and state the work done by the tension in one revolution, with a reason. Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "A ball of mass 0.30 kg on a smooth horizontal table is attached to a light string and moves in a horizontal circle of radius 0.60 m at a constant speed of 4.0 m s⁻¹. (a) Calculate the tension in the string. (b) State the work done by the tension during one revolution. Justify your answer. (3 marks)" A small coded top-view diagram: a peg dot, a string "0.60 m", the ball and a tangent arrow "4.0 m s⁻¹". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 12. feedback 1 (brief)
> The tension is the only horizontal force, so it equals m v squared over r. That's zero point three zero times sixteen, over zero point six zero, which is eight point zero **newtons**. The work it does in a revolution is zero, because at every instant it's at right angles to the ball's **motion**. The classic slip is multiplying eight newtons by the circumference, and getting about thirty **joules**.

Visual: card shrinks to the top; "smooth horizontal table", "constant speed" and "one revolution" underline. On "newtons" "F_T = mv²/r = 0.30 × 4.0² ÷ 0.60 = 8.0 N". On "motion" "W = Fs cos 90° = 0 J in every step, so 0 J per revolution (K stays ½ × 0.30 × 4.0² = 2.4 J)". On "joules" a chip "W = 8.0 × 2π × 0.60 = 30 J" fades in and is crossed (caption "F is never along the path"). Hold about 1 second.

### 13. attempt 2 (countdown, 10 seconds)
> Last one. A zero point four zero kilogram stone on a zero point five zero metre string moves in a vertical circle. At the top, its speed is three point zero metres per second. Ignoring air resistance, calculate its speed at the bottom, and explain why this isn't uniform circular motion. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A stone of mass 0.40 kg on a light string of length 0.50 m moves in a vertical circle. At the top of the circle its speed is 3.0 m s⁻¹. Air resistance is negligible. (a) Calculate the speed of the stone at the bottom of the circle. (b) Explain why the stone is not undergoing uniform circular motion. (3 marks)" A small coded diagram: a pivot, a dashed vertical circle, "0.50 m", the stone at the top with "3.0 m s⁻¹". The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 14. feedback 2 (brief)
> From the top to the bottom, the stone drops two radii, one point zero metre. So v squared at the bottom is nine, plus two times nine point eight times one point zero, which is twenty-eight point six, and v is about five point three five metres per **second**. Gravity has a part along the path, so it does work and the speed changes. That's why the motion isn't **uniform**. The slip is saying the speed stays at three point zero, because the tension does no work. Gravity still **does**.

Visual: card shrinks to the top; "vertical circle", "at the top" and "Air resistance is negligible" underline. On "second" "h = 2r = 1.0 m; v² = 3.0² + 2 × 9.8 × 1.0 = 28.6; v = 5.35 m s⁻¹". On "uniform" "(b) the weight has a component along the path (except at the top and bottom), so gravity does work and the speed changes". On "does" a chip "v = 3.0 m s⁻¹ (tension does no work)" fades in and is crossed (caption "gravity does work"). Hold about 1 second.

### 15. handoff
> So F equals m v squared over r tells us the inward force a circle needs, and that force does no work. But how do we know the formula is right? We can test it. Here's a rubber bung on a string. The string runs down through a short glass tube, to some hanging masses. The hanging weight keeps the string tight, and pulls the bung **inwards**. So can measurements of this bung test F equals m v squared over **r**?

Visual: clear change to a lab scene: a retort stand on a bench line, a clamp holding a short glass tube upright (`y12p-tube-clamp-v1.png`, new, requested in v16), a coded string from the top of the tube out to the rubber bung (`chemistry/m5x-stopper-v1.png`, reused) and down through the tube to a mass hanger with slotted masses (`phys-y11-mass-hanger-v1.png`, `phys-y11-slotted-masses-v1.png`, reused); a paper-clip marker (`phys-y11-paper-clip-v1.png`, reused, small) on the string just below the tube. On "rubber bung" the bung begins to go round a dashed horizontal circle above the tube. On "hanging masses" the hanger glows. On "inwards" an amber arrow along the string at the bung, towards the tube, and an amber "Mg" arrow down at the hanger. On "r" a chip "F = mv²/r ?" and the chip "Next: how can measurements test the circular-force relationship?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 16. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Work W = Fs cos θ. A force at right angles to the displacement does no work (cos 90° = 0).
2. Uniform circular motion: the inward net force is at right angles to the velocity at every instant, so it does zero work. W_net = ΔK = 0, so the speed is constant. The force only changes the direction of the velocity.
3. Level circle: K and U are both constant, so the total mechanical energy is constant (net work zero). Do not use W = F × 2πr.
4. Vertical circle (non-uniform): the weight has a part along the path, so gravity does work and the speed changes. Link points with ½mv_A² + mgh_A = ½mv_B² + mgh_B.

Memory aid (large, on the notes screen): *Across steers, along speeds.*

## Teaching checks

- **Does it explain causes?** Why the inward force does no work: at 90° to every small displacement (2, 3). Why the speed stays constant: zero net work, zero change in kinetic energy (4). Why the hook's 1.26 MJ is wrong: it assumes the force is along the path (3). Why total energy is constant on a level circle: K and U both constant (6). Why a vertical circle is different: the weight has a part along the path (8). How fast the ball is at the bottom: gravity's work becomes kinetic energy (9).
- **Misconceptions addressed:** force times lap length (1, 3; crossed in 12); a net force must change energy (7, crossed); a constant force magnitude means constant work (3); "the tension does no work, so the speed can't change" in a vertical circle (8; crossed in 14).
- **One idea at a time:** work recalled (2) before the lap (3) before kinetic energy (4) before direction (5) before total energy (6); the vertical circle (8, 9) only after the uniform case is complete.
- **Video makes it easier:** the lap chopped into steps, each with a right angle and "W = 0", the running total staying at 0 J (3); the ghost K bar shooting up and crossed (4); the velocity circle (5); the energy bars flat for the car and trading for the vertical circle (6, 8, 9); the weight splitting into along and across parts (8).
- **Response opportunity:** one prediction (3 s countdown) and two unseen HSC-style tasks with every condition visible (mass, smooth horizontal table, light string, radius, constant speed, one revolution; mass, length, vertical circle, speed at the top, negligible air resistance), 10 s each with the invitation to pause; nothing answer-bearing. One crossed mistake each; feedback about 28 s and 34 s.
- **Avoided double teaching:** W = Fs cos θ, kinetic and potential energy, the work-energy theorem and energy conservation are recalled from Year 11 in a sentence each; the velocity circle and the banked-bend car are recalled from v11 and v14.
- **Syllabus coverage:** `P5-IQ2-04`: the relationship between total energy and work done for uniform circular motion (zero net work, constant kinetic and total mechanical energy), investigated by the step-by-step work sum and the energy bars, with the non-uniform contrast.
- **Out of scope by design:** contact forces and minimum speeds in vertical loops (site lesson 9 extension); orbital energy (later Module 5 videos); the investigation of F = mv²/r (v16).

## Practice questions and model answers

**Attempt 1 (scene 11; new, HSC style, 3 marks suggested, not an official marking scheme).** "A ball of mass 0.30 kg on a smooth horizontal table is attached to a light string and moves in a horizontal circle of radius 0.60 m at a constant speed of 4.0 m s⁻¹. (a) Calculate the tension in the string. (b) State the work done by the tension during one revolution. Justify your answer."
Model answer: (a) The tension is the only horizontal force, so it is the inward net force: F_T = mv²/r = 0.30 × 4.0² ÷ 0.60 = 8.0 N. (b) Zero. At every instant the tension is directed towards the centre, at 90° to the ball's instantaneous displacement along the tangent, so W = Fs cos 90° = 0 for every small step and for the whole revolution. This agrees with the work-energy theorem: the speed is constant, so ΔK = 0 (K = 2.4 J throughout). Classic mistake (crossed): "W = 8.0 × 2π × 0.60 = 30 J".

**Attempt 2 (scene 13; adapted from site lesson 9 short-answer Q1 with a new top speed, HSC style, 3 marks).** "A stone of mass 0.40 kg on a light string of length 0.50 m moves in a vertical circle. At the top of the circle its speed is 3.0 m s⁻¹. Air resistance is negligible. (a) Calculate the speed of the stone at the bottom of the circle. (b) Explain why the stone is not undergoing uniform circular motion."
Model answer: (a) The stone falls 2r = 1.0 m from top to bottom. The tension does no work (it is perpendicular to the motion), so mechanical energy is conserved: ½mv_b² = ½mv_t² + mg(2r), so v_b² = 3.0² + 2 × 9.8 × 1.0 = 28.6 and v_b = 5.35 m s⁻¹. (b) Except at the top and bottom, the weight has a component along the direction of motion, so gravity does work on the stone and its speed changes (it speeds up going down and slows going up). Uniform circular motion needs a constant speed. Classic mistake (crossed): "the speed stays 3.0 m s⁻¹ because the tension does no work".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Car (from v14) | m = 1200 kg, r = 80 m, v = 12.909 m s⁻¹ ("twelve point nine"), F_net = 1200 × 12.909² ÷ 80 = 2499.7 N (2.50 × 10³) | 1, 3, 4 |
| Lap length | 2π × 80 = 502.65 m ("about five hundred", screen 503) | 1 |
| Hook product (wrong) | 2499.7 × 502.65 = 1.2565 × 10⁶ J ("one point two six million") | 1, 3, 4 |
| Kinetic energy | ½ × 1200 × 12.909² = 99 987 J (1.00 × 10⁵; "about a hundred thousand") | 4 |
| Ghost after one lap (wrong) | K = 1.3565 × 10⁶ J, v = 47.5 m s⁻¹, 3.68 × 12.9 ("more than three times"), bar 13.6 times K | 4 |
| Vertical circle (site lesson 9 worked example 1) | m = 0.50 kg, r = 0.80 m, v_top = 4.0 m s⁻¹; h = 1.6 m; W_g = 0.50 × 9.8 × 1.6 = 7.84 J; ΔK = ½ × 0.50 × (47.36 − 16) = 7.84 J; v_bottom² = 16 + 4 × 9.8 × 0.80 = 47.36; v_bottom = 6.882 m s⁻¹ (6.88) | 8, 9 |
| A1 (new) | m = 0.30 kg, r = 0.60 m, v = 4.0 m s⁻¹: F_T = 8.0 N; W = 0; K = 2.4 J; crossed 8.0 × 2π × 0.60 = 30.2 J ("about thirty") | 11, 12 |
| A2 (site stone, new speed) | m = 0.40 kg, r = 0.50 m, v_top = 3.0 m s⁻¹: h = 1.0 m; v_b² = 9 + 19.6 = 28.6; v_b = 5.348 m s⁻¹ (5.35); W_g = 3.92 J (not shown) | 13, 14 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov); Codex to re-check.

- v14 car: 1200 × 12.9091² ÷ 80 = 2499.67; 2π × 80 = 502.655; 2499.67 × 502.655 = 1 256 469 (1.26 × 10⁶).
- ½ × 1200 × 12.9091² = 99 986.6 (1.00 × 10⁵); with 1.25647 × 10⁶ added: 1.35646 × 10⁶ J; √(2 × 1.35646 × 10⁶ ÷ 1200) = 47.547 m s⁻¹; 47.547 ÷ 12.909 = 3.68; 1.35646 × 10⁶ ÷ 99 987 = 13.6.
- Vertical: 0.50 × 9.8 × 1.6 = 7.84; 4.0² + 4 × 9.8 × 0.80 = 47.36; √47.36 = 6.8819; ½ × 0.50 × (47.36 − 16) = 7.84.
- A1: 0.30 × 16 ÷ 0.60 = 8.0; ½ × 0.30 × 16 = 2.4; 8.0 × 2π × 0.60 = 30.159.
- A2: 9 + 2 × 9.8 × 1.0 = 28.6; √28.6 = 5.3479; 0.40 × 9.8 × 1.0 = 3.92.

## Memory aid check

- **"Across steers, along speeds."** Meaning, as said in scene 10: split any force on a moving object into a part across its path (at right angles to the velocity) and a part along its path; the across part changes only the direction of the velocity, and only the along part changes the speed (and does work). Assumptions checked: "across" means at right angles to the instantaneous velocity, not to the whole path; the statement is exact for the instantaneous rate of work (P = F·v). It helps a new case: A1 (tension across: no work, speed constant), A2 (weight has an along part: speed changes), and later Module 5 orbits (gravity across the path of a circular orbit). Introduced after both the uniform and the vertical-circle cases (3 to 9).
- **Considered, not used:** "Perpendicular does nothing" (wrong: it steers); "No work, no change" (incomplete: the direction changes).

## Narration length estimate

Revision 1 count (6 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,672 characters**, 16 scenes. Characters per scene (1 to 16): 329, 387, 378, 443, 361, 434, 230, 475, 460, 184, 338, 390, 309, 476, 403, 75. At 13.3 characters per second the speech is about 426 s; add about 3 s for the prediction countdown, about 4 s for the step-by-step lap in scene 3, about 3 s for one vertical lap in scene 8, 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 55 s more of the quiet notes hold (about 91 s of holds and countdowns): **about 517 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 9 (open decision 1); scene 6's engine sentence; scene 5's velocity-circle sentence.

## Opening frame

v14's final frame (designed in this wave, `phys-y12-m5-v14.md`): paper background; a coded top view of the banked bend: grey road ring shaded darker towards its inner edge, a navy centre dot; the blue top-view car stopped at the 3 o'clock position, nose up the page; a teal velocity arrow along the tangent; an amber arrow to the centre "F_net = 2.50 × 10³ N"; a right-angle mark; a lap counter; a readout "speed: 12.9 m s⁻¹ (constant)"; a chip "W = ?"; heading "How does a banked road reduce reliance on friction?"; chip "Next: does the inward force do work in uniform circular motion?". Scene 1 sets the car moving; the heading changes in scene 3 (on "zero") to "Does the inward force do work in uniform circular motion?"; the "W = ?" chip is replaced by the scene 1 chips.

## Final frame

The last explained frame (end of scene 15, before the key-notes board): paper background; a coded bench line across the lower third (above the bottom 12% of the frame); on it the retort stand plate (`phys-y11-retort-stand-v1.png`) at the left with a boss (`phys-y11-boss-crossbar-v1.png`) holding the clamp-and-tube plate (`y12p-tube-clamp-v1.png`), the glass tube upright at about mid-height of the stand; a coded string from the tube's top end running out horizontally (slightly drooping) to the rubber bung (`chemistry/m5x-stopper-v1.png`, small) at the right-hand edge of a dashed horizontal circle in perspective centred on the tube's top; the string running down through the tube, a paper-clip marker (`phys-y11-paper-clip-v1.png`, small) on it just below the tube's lower end, and below that a mass hanger with three slotted masses (`phys-y11-mass-hanger-v1.png`, `phys-y11-slotted-masses-v1.png`) hanging still; an amber arrow at the bung along the string towards the tube (no label) and an amber "Mg" arrow down at the hanger; a chip "F = mv²/r ?"; heading "Does the inward force do work in uniform circular motion?"; chip "Next: how can measurements test the circular-force relationship?". v16 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m5-v15` (route phys-y12-m5-v15). Suggested explainer folder `src/explainer/lessons/phys-y12-m5-v15` and build folder `docs/production/claude-pm/lessons/p-y12-m5-v15` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 16 scene headings, all `### N.`): hook, what-work-means, step-by-step, work-kinetic-energy, turns-velocity, total-energy, energy-mistake, vertical-contrast, energy-two-points, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Scene 1 is `explain` with a 3 s prediction countdown. `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: step-by-step lap (v11 circle stage), energy panel, velocity circle (v11), vertical circle (reconfigured `m5-vertical-loop`), apparatus build, `AlignedAlgebra`, `NumberTicker`, `ScribbleCircle`, `PenArrow`, `Countdown`, `CameraStage`. Transitions (`pickTransition`): 1 to 2 clear change to the block; 2 to 3 camera change back to the bend; 3 to 4 to 5 to 6 to 7 camera continue; 7 to 8 clear change to the vertical circle; 8 to 9 camera continue; 9 to 10 clear change; attempts and feedback card shrink to the top; 14 to 15 clear change; 15 to 16 fade to the notes board.

Holds: hook (3 s countdown), memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 60 s). Review evidence paths: `learning_review` = `checks/p-y12-m5-v15-learning-review.md`, `science_check` = `checks/p-y12-m5-v15-physics-check.md`.

## Assets

Have (inspected 6 Nov on session contact sheets; scaled uniformly only, never stretched):
- `public/assets/physics/phys-y11-car-top-v1.png` (1600 × 800, RGBA): scenes 1, 3 to 7, 10.
- `public/assets/physics/phys-y11-wooden-block-v1.png` (1600 × 1000, RGBA): scene 2.
- `public/assets/physics/phys-y11-steel-ball-v1.png` (800 × 800, RGBA): scenes 8 to 10.
- Handoff (scene 15): `phys-y11-retort-stand-v1.png` (600 × 2400), `phys-y11-boss-crossbar-v1.png` (800 × 800), `phys-y11-mass-hanger-v1.png` (600 × 1400), `phys-y11-slotted-masses-v1.png` (1000 × 1000), `phys-y11-paper-clip-v1.png` (1247 × 1261; a faint semi-transparent backdrop showed on the contact sheet: Codex to check its alpha edges), `public/assets/chemistry/m5x-stopper-v1.png` (2000 × 2000, a dark grey rubber stopper used as the bung), all RGBA; `y12p-tube-clamp-v1.png` (new, requested in v16).
- **Checked, not used:** `phys-y11-ramp-plank-v1.png` (scene 2 is a level floor); `phys-y11-dashboard-cluster-v1.png` (the speed readout is coded here).

Need (new plates, Codex): none for this video's teaching scenes; the handoff uses v16's `y12p-tube-clamp-v1.png`.

Coded: top-view ring and steps, floor line, force, velocity, displacement and acceleration arrows, right-angle marks, running total, energy bars, velocity circle, pivot and string, dashed vertical circle, weight components, height bracket, bench line, calculation strips, crossed chips, attempt cards and their diagrams, countdowns, key notes board.

Kit gaps (for the v15 build brief):
1. **Step-by-step lap.** On the v11 circle stage, n tangent displacement steps (n = 24, then 72) drawn in sequence with an inward force arrow, a right-angle mark and a "W = 0" tick at each, and a running-total readout.
2. **Energy panel.** K (orange) and U (blue) bars and a total line driven by the stage's model (level car: all flat; vertical circle: from `verticalLoopAt` reconfigured to g = 9.8, r = 0.80 m, m = 0.50 kg, v_top = 4.0 m s⁻¹).
3. **Weight split.** At a chosen point on the vertical circle, mg resolved into along-path and along-string parts on the same force scale.

## Codex asset brief (Year 12 Physics M5 v15)

No new plates for this video. Codex checks `phys-y11-paper-clip-v1.png` on the paper and dark board backgrounds at about 400 px wide for a semi-transparent backdrop or halo (a faint square showed on a contact sheet); if one is present, report it so root can request a clean `y12p-paper-clip-v1.png` with v16's plates. Append the hand-in to `status.md`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the physics of every learner-visible claim: W = Fs cos θ and zero work at 90°; the inward force is perpendicular to each instantaneous displacement, so it does no work over a lap (author note a); W_net = ΔK, so K and speed are constant; the inward force only changes the velocity's direction; on a level circle total mechanical energy is constant and a real car's engine work only replaces resistive losses (author note c); in a vertical circle the tension does no work and the weight has an along-path part except at the top and bottom (author note e); v_bottom = 6.88 m s⁻¹ from 4.0 m s⁻¹ at the top; the ghost "more than three times faster" (author note b).
3. Confirm the memory aid's assumptions (see "Memory aid check").
4. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
5. Confirm both attempt cards carry every condition (mass, smooth horizontal table, light string, radius, constant speed, one revolution; mass, length, vertical circle, speed at the top, negligible air resistance) and show nothing answer-bearing.
6. Confirm the syllabus quote matches the route JSON exactly and is labelled 2017.
7. Confirm no person, hand, face or body outline is drawn or requested (no rider, no hand on the block, a clamped tube in the handoff).
8. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
9. Confirm the narration character count and per-scene counts by script with the build parser rules.
10. Confirm the vertical-circle scenes are labelled as beyond uniform circular motion on screen and in narration.

## YouTube metadata (draft)

Title: Does the Centripetal Force Do Work? Energy in Circular Motion | HSC Physics Module 5

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module5/lesson07.sa.html

A car on a banked bend has a 2500 N force pulling it inwards, and a lap is about 500 m. So does that force do 1.26 million joules of work every lap? See why the answer is zero: the inward force is at right angles to every tiny step, so the kinetic energy, the speed and the total mechanical energy all stay constant. Then compare a ball on a string in a vertical circle, where gravity does work and the speed changes, and use energy to find its speed at the bottom. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 5: Advanced Mechanics.
Syllabus content (NSW Physics Stage 6, 2017):
"investigate the relationship between the total energy and work done on an object executing uniform circular motion"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: banked roads and the design speed. Next: testing F = mv²/r with measurements.

#HSCPhysics #Physics #CircularMotion #WorkAndEnergy #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v14; check that the deliberately wrong 1.26 MJ reads as a question, not a fact, that the step-by-step lap is followable at playback speed, that the vertical circle is heard and seen as an extension, and that the attempt cards give nothing away), then the physics check and the Codex error check.
- The step-by-step lap with its running total, the flat and trading energy bars and the weight's along-path part carry the explanation; judge them at playback speed in the voiced preview.
