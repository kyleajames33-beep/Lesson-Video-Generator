# Year 12 Physics M5 V10: Balancing torques. How do clockwise and anticlockwise torques balance? (design)

Status: Revision 1 (6 Nov 2026): first design. Needs independent learning review and science check before voicing.

Narration 5,671 characters, 15 scenes, about 514 s, counted by script with the build parser rules (see "Narration length estimate"). Opens on v09's final frame.

Scope: tenth video of Year 12 Physics (Physics Stage 6, 2017 syllabus), Module 5 (Advanced Mechanics), second video on torque. Templates: `phys-y12-m5-v01.md` (this run's structure), `phys-y11-fa1-v01.md`, `math-a12-d10.md` (calculation layout), `bio-y11-fa1-v05.md` (plates and asset brief format). Pre-design pack: `../pre-design/phys-y12/phys-y12-m5-v10.md` (every number recalculated below). Site lesson read in full (6 Nov, read-only; the same lesson as v09): the crane hook and its revisit, define the moment and its sign, worked example 2 (seesaw), scope boundary, misconceptions, activities, wrap-up, "Analyse 6 marks", "Account 5 marks", short answers: `C:/Users/kygs/hscscience/subjects/physics/year12/module5/lesson06.sa.html`, SHA256 `d17495f1c7fc12f866524790a37850f2e52c0f292d51e2bedbe55fe2335c35f7` (recomputed 6 Nov; matches the pack and the route). Route entry: `phys-y12-m5-v10` in `../../programme/phys-y12-route-inputs.json`, section `l06-equilibrium-title`. Route start: "Start from the physical case in the learner question; recall only the earlier result needed for it." Route stop: "Use the uniform 3 m centre-pivot seesaw with 30 kg at 1.2 m and 25 kg at an unknown distance. Explain zero net torque separately from zero net force; do not infer support without beam weight. Stop before two-support beams." Next: "phys-y12-m5-v11: How can speed be constant while velocity keeps changing?"

Owner rules applied: 2017 syllabus only, quoted exactly; one main learner question; no people, hands, faces or body outlines (the site's two children are not drawn: the seesaw plate is empty and each child is shown only as an amber weight arrow from the seat with a tag such as "30 kg child"; the crane's cab is empty); real objects are painted plates (tower crane, crane load, seesaw, and the lab metre rule, stand, boss, mass hangers in feedback 1), and arrows, curved turning arrows, distance brackets, the HSC-style beam diagrams and all working are coded; plates never stretched; one reasoning stage at a time; every number recalculated in Python; g = 9.8 m s⁻²; syllabus symbols (τ = r⊥F = rF sin θ); in-teaching prediction with a 3 s countdown; "Pause here to answer." then a 10 s countdown with the full worded question on screen; brief feedback with one crossed-out mistake; original HSC-style questions (A1 is the site's short-answer Q2, reworded); optional key-notes hold; Australian spelling; no em dashes.

Syllabus content (Physics Stage 6 (2017), Module 5 Advanced Mechanics; ledger id `P5-IQ2-05`), quoted from the route JSON `syllabusActions`:

- `P5-IQ2-05`: "investigate the relationship between the rotation of mechanical systems and the applied torque" "τ=r_(⊥)F=rFsinθ"

Source: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx (page 53)

**Boundary:** starts on v09's final frame (tower crane with a load far out and a counterweight close in, two curved turning arrows). Teaches: the crane's two torques (4 t at 30 m, 20 t at 6 m: 1.18 × 10⁶ N m each way); rotational equilibrium (net torque zero, rotation unchanged: still stays still, steady turning stays steady); a sign convention (anticlockwise positive) and Στ = 0 (clockwise torques equal anticlockwise torques); choosing the pivot and why the support and a uniform beam's weight there have no torque; the seesaw worked example (site worked example 2: 1.44 m, with g cancelling and the 1.50 m check); zero net torque separately from zero net force (the support force cannot be found without the seesaw's mass; a couple has zero net force but non-zero torque); two slips; "heavy near, light far" with its conditions. Stops before two-support beams (site "Account 5 marks"; route), tilted beams, and τ = Iα (site extension).

## Decisions

- **Learner question (route wording kept).** "How do clockwise and anticlockwise torques balance?" The answer, built in order: two turning effects of opposite sense cancel when their sizes are equal (2); zero net torque means the rotation does not change (3); with signs, Στ = 0 (3); choose the pivot so unknown forces drop out (4); a smaller force balances a larger one by acting further out (5, 6); torque balance is not force balance (7).
- **Hook (site hook and revisit, unchanged numbers).** 4 t load 30 m out, 20 t counterweight 6 m behind the mast: "five times heavier, five times closer". The question "why doesn't it tip backwards?" with three option chips and a 3 s countdown. The site's own revisit calculation (1.176 × 10⁶ N m each way) is scene 2. The crane's own structure is set aside in narration ("leave aside the crane's own steel arms for now"; author note a).
- **Rotational equilibrium (site vocabulary and "Signed torque").** Defined by its effect (rotation unchanged, including steady turning), since the route's next video uses a steadily slewing crane. τ = Iα is not named (site: extension).
- **Seesaw (site worked example 2, unchanged).** No children drawn: an empty painted seesaw, with amber weight arrows from the seats and tags "30 kg child", "25 kg child". The site's five steps are followed: pivot and signs; signed sum; solve with g cancelling; feasibility (1.44 m < 1.50 m); state the result and note that ΣF = 0 is a separate condition.
- **Support force not calculated (route stop and pack: "uniform does not mean massless").** Scene 7 says the support must equal both children's weights plus the seesaw's weight, and that the seesaw's mass is not given, so the support force cannot be found from these numbers. A2 (a light beam) is where a support force is calculated, and its "light" condition is underlined.
- **Torque balance versus force balance (route; site misconception "Two equal and opposite forces can produce zero net force but a large net torque (a couple)").** Shown on the same seesaw: equal up and down pushes (amber arrows only) at the two ends give zero net force and both turn it clockwise, so it starts to turn. The term "couple" is screen-only.
- **Mistake scene (scene 8).** Equal distances for unequal weights (the left side drops: net 58.8 N m anticlockwise) and distances from the end of the beam. Kept because both are the slips this exact case invites.
- **Memory aid (scene 9): "Heavy near, light far."** With its conditions said aloud (weights at right angles to a level beam; the beam's own weight at the pivot). The site's book rule "r₁m₁ = r₂m₂ for seesaws; g cancels" is the precise form on screen. See "Memory aid check".
- **Attempts (HSC style).** A1 (site short-answer Q2, reworded; lab apparatus): uniform metre rule pivoted at 50 cm, 200 g at 20 cm; 150 g at the 90 cm mark. A2 (pack candidate 2): light beam, 20 N at 1.5 m left, 30 N at 1.0 m right: 30 N m each way; pivot force 50 N up. Crossed: A1 "40 cm" (distance from the pivot given as the position); A2 "pivot force is zero because the torques cancel".
- **Significant figures.** Site data give 1.44 m (three significant figures, as the site states). Crane torques to three significant figures (1.18 × 10⁶ N m). A1 to the nearest centimetre mark; A2 whole newtons.
- **Handoff (route next).** Scene 14 turns the crane to a top view: the jib slewing steadily, its tip tracing a circle with equal-length velocity arrows tangent at four points that keep changing direction, and "Δv?" (v11: "How can speed be constant while velocity keeps changing?"). See "Final frame".
- **Site sources used:** hook and revisit (1, 2); "Signed torque" and the rotational-equilibrium vocabulary (3); worked example 2 in full (4 to 7); its "State the result" note on ΣF_y = 0 (7); misconception "Torque is the same as force ... a couple" (7); scope boundary "complete static equilibrium requires both ΣF = 0 and Στ = 0" (7, key notes); book rule "r₁m₁ = r₂m₂ for seesaws; g cancels; heavier objects sit closer to the pivot" (9); short-answer Q2 (A1). Not used: "Account 5 marks" and its two-support plank (route stop); Activity 1's seesaw (30 kg at 1.5 m, 45 kg at 1.0 m: checked, kept as a reserve attempt); τ = Iα (extension).
- **Site notes (site lesson 6, read 6 Nov):** none new for this video's sections. Correction 4 and v09's site note 2 (terminology) are the lesson's open items. Checked and correct: worked example 2 (1.44 m, 1.50 m half-length, the ΣF_y remark), the crane revisit (1.176 × 10⁶ N m each way), short-answer Q2 (0.40 m, 90 cm mark), Activity 1 seesaw (1.0 m), the quick check (1.44 m).
- **Cause chain taught, in order:** (1) a load far out and a heavy weight close in can have equal turning effects in opposite senses (2); (2) equal and opposite torques give zero net torque, so the rotation does not change (3); (3) forces through the chosen pivot have no torque about it, so the pivot is chosen to remove unknowns (4); (4) for a level beam each weight's torque is distance times weight, with a sign for its sense (5); (5) g cancels, and the lighter weight must sit further out (6); (6) zero net torque does not fix the support force, and zero net force does not prevent turning (7).
- **Entry knowledge (route `entryKnowledge` and v09):** torque τ = rF sin θ and its unit, turning sense, line of action through the pivot gives no torque (v09); weight W = mg and Newton's first law (Year 11).
- **Learner-visible vocabulary (plain meaning at first use):** rotational equilibrium (net torque zero, so the rotation does not change, scene 3); sign convention (choosing which turning sense counts as positive, 3); uniform (its mass spread evenly, so its weight acts at its centre, 4); support force (the upward push from the pivot, 4); couple (two equal, opposite forces along different lines, screen-only, 7).
- **Legacy logic ported:** none. The coded family `m5-beam-equilibrium` (`src/explainer/physics/module5/rotation-details/`) is reconfigured from its own light-beam dataset (30 N at 2 m, 20 N at 3 m) to the site seesaw and to A2's light beam (pack: different dataset, not a substitute).
- **New explainer motion:** **torque balance scale** (new, small): two horizontal bars, blue (anticlockwise) and orange (clockwise), whose lengths are the torque magnitudes, meeting at a zero line, with a readout of the signed sum; **beam stage** (the seesaw plate on its pivot with registered seat points; weight arrows from those points; distance brackets from the pivot; a tilt playback when the net torque is not zero, illustrative); **crane stage** (the tower crane plate with the load plate at the jib tip and weight arrows; the same balance scale); **top-view slew** for the handoff (a coded top-view crane outline, jib rotating at a steady rate, tip trace and tangent velocity arrows); `AlignedAlgebra`; `Countdown` (3 s in scene 1; 10 s in scenes 10 and 12); `QuestionCard`; `Chip` with `cross`; `PenArrow`; `ScribbleCircle`; `KeyNotes`; `Heading`.
- **Board layout:** heading top-left; the crane or seesaw stage on the left; working, balance scale or diagrams on the right; ground line above the bottom 12% of the frame. Colour key from v09: weights and forces amber; anticlockwise blue; clockwise orange; distances navy brackets from the pivot; pivot dot navy; support force teal; crossed chips red.
- **No human figures.** No children, crane operator or anyone pushing; pushes in scene 7 are arrows only.
- **Author notes (not learner copy):**
  (a) Crane: the site's illustration ignores the jib, counter-jib and mast weights and the trolley position; the narration says "leave aside the crane's own steel arms". In real cranes the counterweight also balances the jib's own weight, and the load moment varies with the trolley position. Not narrated further.
  (b) Seesaw: "uniform" means the seesaw's weight acts at its centre, which is the pivot, so it has no torque about the pivot; its value is not given, so the support force (both children plus the seesaw) cannot be calculated. With the seesaw level, the weights are at right angles to it; at a tilt both moment arms scale by cos α equally, so the balance position is unchanged (not narrated).
  (c) Sign check: with the pivot at the origin, +x to the right and +y up, a downward weight at x = −1.2 m gives τ_z = (−1.2)(−W) = +1.2W (anticlockwise, positive); at x = +r it gives −rW (clockwise). Scene 7's couple: up at x = −1.5 m and down at x = +1.5 m both give negative τ_z (clockwise).
  (d) Scene 7's couple magnitude is illustrative (two 100 N pushes at the ends: 300 N m clockwise, no value narrated).
  (e) Pronunciations: "thirty g times one point two"; "one point four four metres"; "one point one eight million newton metres"; "anticlockwise".

- **Open decisions for root:**
  - **1. Crane and seesaw plates (root, Codex).** Two new plates: a tower crane (side view, empty cab) and an empty playground seesaw. The kit plan said coded-only for this lesson; the owner rule asks for plates for real objects. Fallback: HSC-style coded beam and crane line diagrams.
  - **2. Children as weight arrows only (owner rule).** The site's problem keeps the word "child" in narration and tags; nothing is drawn. Confirm.
  - **3. Couple beat (learning review).** Scene 7's equal up-and-down pushes show torque without net force (route: "explain zero net torque separately from zero net force"). If the review finds it a detour, cut its two sentences (about 150 characters).
Main question: *A crane's 20 t counterweight 6 m behind the mast holds a 4 t load 30 m out. A 25 kg child balances a 30 kg child on a seesaw. How do clockwise and anticlockwise torques balance, and what does balance tell us?*
Entry knowledge: τ = rF sin θ, unit N m, turning sense, no torque from a force through the pivot (v09); W = mg.
Stops after: crane torques, rotational equilibrium, sign convention and Στ = 0, the seesaw to 1.44 m, torque balance versus force balance, the two slips, the memory aid. No two-support beams.
Handoff: v11, how speed can be constant while velocity keeps changing.

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Screen symbols in italic: *τ*, *r*, *F*, *m*, *g*, *Στ*, *ΣF*. Paper background and handwritten headline face as the explainer house style.

### 1. hook (five times heavier)
> Here's that tower crane. Its load is four tonnes, hanging thirty metres out along the jib. On the other side, only six metres behind the mast, sits a twenty tonne concrete **counterweight**. The counterweight is five times heavier than the load. So why doesn't the crane tip over backwards? Make a **prediction**.

Visual: opens on v09's final frame (see "Opening frame"). On "four tonnes" a chip at the load "4 t = 4000 kg"; on "thirty metres out" a navy bracket from the mast axis to the hook "30 m". On "counterweight" a chip "20 t = 20 000 kg" and a bracket "6 m" from the mast axis to the counterweight's centre. On "five times heavier" the counterweight's amber weight arrow grows to five times the load's arrow. On "prediction" a 3 s `Countdown` beside three chips: "tips backwards", "balances", "tips forwards".

### 2. the two torques cancel
> Let's compare turning effects about the top of the mast, and leave aside the crane's own steel arms for now. The load's weight is four thousand kilograms times nine point eight, about thirty-nine thousand newtons. Thirty metres out, that's a torque of about one point one eight million newton metres, **clockwise**. The counterweight's weight is five times bigger, but its distance is five times smaller, so its torque is the same size, one point one eight million newton metres, **anticlockwise**. The turning effects cancel, and the crane doesn't rotate. That's how torques **balance**.

Visual: on "top of the mast" a navy pivot dot pulses at the mast top. On "thirty-nine thousand newtons" "W = 4000 × 9.8 = 39 200 N" by the load's arrow. On "clockwise" "τ = 30 × 39 200 = 1.176 × 10⁶ N m" with the orange clockwise arrow; the torque balance scale (new) appears at the right with an orange bar of that length. On "five times bigger" "W = 20 000 × 9.8 = 196 000 N"; on "five times smaller" the 6 m bracket pulses. On "anticlockwise" "τ = 6 × 196 000 = 1.176 × 10⁶ N m" with the blue arrow; a blue bar of the same length draws on the other side of the scale's zero line. On "balance" the scale reads "net torque = 0" and the "balances" option chip from scene 1 ticks; the heading writes on: "How do clockwise and anticlockwise torques balance?".

### 3. rotational equilibrium and signs
> When the turning effects cancel, the net torque is zero, and the object is in rotational equilibrium. Its rotation doesn't change. If it's still, it stays still, and if it's turning at a steady rate, it keeps turning **steadily**. To add torques, we give them signs. Take anticlockwise as positive and clockwise as negative. Then rotational equilibrium means the signed torques add to **zero**. In other words, the clockwise torques equal the anticlockwise **torques**.

Visual: on "rotational equilibrium" a chip "rotational equilibrium: net torque = 0, rotation unchanged". On "stays still" the crane holds still; on "steadily" a small inset shows the crane in top view turning at a steady rate (a clock readout and equal angle steps). On "give them signs" a sign key writes: blue curved arrow "anticlockwise: +", orange curved arrow "clockwise: −". On "zero" an equation strip "Στ = 0" (boxed). On "torques" a second line "Σ clockwise τ = Σ anticlockwise τ" and the balance scale's two bars pulse.

### 4. a seesaw: choose the pivot
> Let's use that on a seesaw. A uniform seesaw, three metres long, is pivoted at its centre. A thirty kilogram child sits one point two metres to the left of the pivot. Where must a twenty-five kilogram child sit on the right to balance **it**? First, choose the point to take torques about: the pivot. Two forces act right at that point: the support pushing up, and the seesaw's own weight, which acts at its centre because it's uniform. Both lines of action pass through the pivot, so neither makes any **torque**.

Visual: board changes (camera change) to the seesaw plate (`y12p-seesaw-v1.png`, new) level on its central pivot, empty. Task strip: "Where must the 25 kg child sit to balance it?" Givens in navy: "uniform seesaw, 3.0 m, pivot at centre", "30 kg child, 1.2 m left of pivot", "25 kg child, distance r right of pivot". On "thirty kilogram child" an amber arrow draws down from the left seat point, tag "30 kg child: W = 30g", and a navy bracket "1.2 m" from the pivot; on "twenty-five kilogram child" an amber arrow "25 kg child: W = 25g" on the right with a bracket "r = ?". On "it" the sign key from scene 3 sits small at the top right. On "support pushing up" a teal arrow up at the pivot "support"; on "own weight" an amber arrow down at the centre "seesaw's weight (uniform: acts at the centre)". On "torque" both arrows' dashed lines of action pass through the pivot dot and tags write "τ = 0 about the pivot" on each.

### 5. the signed sum
> That leaves the two children's weights. The seesaw is level, so each weight acts at right angles to it, and each torque is just distance times weight. The left child's weight turns the seesaw **anticlockwise**, so it's positive: thirty g times one point two. The right child's weight turns it clockwise, so it's negative: twenty-five g times r. For balance, thirty g times one point two, minus twenty-five g times r, equals **zero**.

Visual: the support and seesaw-weight arrows dim. On "at right angles" small right-angle marks appear where the two weight arrows meet the seesaw. On "anticlockwise" a blue curved arrow over the left side, "+ (30g)(1.2)"; on "clockwise" an orange curved arrow over the right side, "− (25g)(r)". The balance scale shows a blue bar and an orange bar of unknown length (dashed). On "zero" `AlignedAlgebra` "Στ = (30g)(1.2) − (25g)r = 0".

### 6. solve and check
> Now solve. Notice that g cancels, because both forces are weights in the same gravity. So r equals thirty times one point two, over twenty-five, which is one point four four **metres**. Check it makes sense. Each half of the seesaw is one point five metres long, so one point four four metres fits, just. The lighter child sits further out, and that's the whole trick: less force, more **distance**.

Visual: on "g cancels" the two g's in the equation strike through together; "30 × 1.2 = 25r". On "metres" "r = 36 ÷ 25 = 1.44 m"; the right weight arrow slides along the seesaw to 1.44 m and the bracket fills "1.44 m"; the dashed orange bar on the balance scale becomes solid and equals the blue bar, "net torque = 0". On "Check" a bracket along the right half "1.50 m" with a tick "1.44 m < 1.50 m". On "distance" a chip "30 kg × 1.2 m = 36 = 25 kg × 1.44 m".

### 7. torque balance is not force balance
> But balanced torques aren't the whole story. The torque equation says nothing about the support. For the seesaw not to fall, the upward support must also equal the total weight: both children, plus the seesaw itself. We weren't told the seesaw's mass, so we can't find that force from these **numbers**. And the two conditions really are separate. Push up on one end and down on the other with equal forces. The net force is zero, yet the seesaw starts to **turn**. Complete balance needs zero net force and zero net **torque**.

Visual: on "the support" the teal support arrow returns at the pivot with "?"; on "total weight" three amber arrows (both children and the seesaw) collect beside it with a chip "support = 30g + 25g + seesaw's weight". On "numbers" "seesaw's mass: not given" and the "?" stays (tag "can't calculate"). On "Push up on one end" the weights fade and two equal amber arrows appear: up at the left end, down at the right end; a chip "ΣF = 0"; on "turn" both get orange curved arrows (clockwise) and the seesaw tilts (illustrative), chip "Στ ≠ 0" and a screen-only tag "a couple". On "torque" two boxed conditions write: "ΣF = 0 (no change in motion along a line)" and "Στ = 0 (no change in rotation)", under the title "complete (static) equilibrium".

### 8. two slips
> Here's a common slip. Seat the lighter child at one point two metres as well, the same distance. Now the anticlockwise torque is bigger, by five g times one point two, about fifty-nine newton metres, so the left side goes **down**. Equal distances only balance equal weights. The other slip is measuring distances from the end of the seesaw. Torques are always measured from the **pivot**.

Visual: the seesaw returns with both weight arrows; the right arrow slides back to 1.2 m. On "five g times one point two" `AlignedAlgebra` "Στ = (30g)(1.2) − (25g)(1.2) = (5g)(1.2) = 58.8 N m"; the balance scale's blue bar exceeds the orange; on "down" the seesaw tilts left side down (illustrative) and a chip "same distance for 25 kg" is crossed. On "end of the seesaw" a navy bracket from the left end to the left seat "0.3 m" appears and is crossed; on "pivot" the correct bracket "1.2 m" from the pivot glows.

### 9. memory aid
> Here's a short way to remember it. Heavy near, light far. More precisely, mass times distance from the pivot must match on both sides. That shortcut only works when every force is a weight, at right angles to a level beam, and the beam's own weight acts at the **pivot**.

Visual: board clears to the level seesaw with the two weight arrows at 1.2 m and 1.44 m. On "Heavy near, light far" the handwritten line writes large above: "Heavy near, light far." On "mass times distance" "m₁r₁ = m₂r₂ (g cancels)". On "pivot" a navy condition tag: "weights only, at right angles to a level beam; beam's weight at the pivot". Hold about 2 seconds.

### 10. attempt 1 (countdown, 10 seconds)
> Your turn. A uniform metre rule is pivoted at its fifty centimetre mark. A two hundred gram mass hangs from the twenty centimetre mark. Where must a one hundred and fifty gram mass hang for the rule to balance horizontally? Pause here to answer.

Visual: `QuestionCard` (subject "Physics"), worded as printed: "A uniform metre rule is pivoted at its 50 cm mark. A 200 g mass hangs from the 20 cm mark. At which mark on the rule must a 150 g mass hang for the rule to balance horizontally? State the principle you use. (3 marks)" A small coded HSC-style diagram: the rule with marks every 10 cm, a pivot triangle under the 50 cm mark, a hanging mass at 20 cm labelled "200 g", and "150 g" with "?" on the right side. The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 11. feedback 1 (brief)
> The two hundred gram mass is thirty centimetres from the pivot, so its torque is zero point two zero zero g times zero point three **zero**. The rule's own weight acts at the pivot, so it adds nothing. For balance, zero point one five zero g times r must match, and r is zero point four zero metres. So the mass hangs at the ninety centimetre **mark**. The classic slip is answering forty centimetres, the distance from the pivot, when the question asked for the position on the **rule**.

Visual: card shrinks to the top; "uniform", "50 cm mark" and "At which mark" underline. On the right, the lab version builds from plates: the metre rule (`phys-y11-metre-rule-v1.png`) on a pivot pin held by the boss (`phys-y11-boss-crossbar-v1.png`) on the retort stand (`phys-y11-retort-stand-v1.png`), two mass hangers (`phys-y11-mass-hanger-v1.png`) with slotted masses. On "zero" "r₁ = 50 − 20 = 30 cm = 0.30 m; τ = 0.200g × 0.30" (anticlockwise, blue). "Principle: Σ clockwise τ = Σ anticlockwise τ". `AlignedAlgebra`: "0.200g × 0.30 = 0.150g × r; r = 0.060 ÷ 0.150 = 0.40 m"; on "mark" "position = 50 + 40 = 90 cm mark" and the 150 g hanger slides to the 90 cm mark; the rule levels. On "rule" a chip "40 cm mark" fades in and is crossed (caption "40 cm from the pivot = the 90 cm mark"). Hold about 1 second.

### 12. attempt 2 (countdown, 10 seconds)
> Last one. A light beam is pivoted at its centre. A twenty newton force acts downwards one point five metres to the left of the pivot, and a thirty newton force acts downwards one point zero metre to the right. Show that the beam is in rotational equilibrium, and find the force from the pivot. Pause here to answer.

Visual: `QuestionCard`, worded as printed: "A light beam is pivoted at its centre and is horizontal. A 20 N force acts vertically downwards 1.5 m to the left of the pivot, and a 30 N force acts vertically downwards 1.0 m to the right of the pivot. (a) Show that the beam is in rotational equilibrium. (b) Calculate the force exerted on the beam by the pivot. (3 marks)" A small coded diagram: beam, pivot triangle, the two arrows and distances as given. The full question stays on screen. Countdown ring for 10 seconds with "Pause here to answer." Nothing answer-bearing.

### 13. feedback 2 (brief)
> Anticlockwise, twenty times one point five is thirty newton metres. Clockwise, thirty times one point zero is also thirty newton **metres**. The signed sum is zero, so the beam is in rotational equilibrium. For the forces to balance too, the pivot must push up with twenty plus thirty, fifty newtons, because the beam is **light**. The slip is saying the pivot force is zero because the torques **cancel**.

Visual: card shrinks to the top; "light beam" and "pivoted at its centre" underline. `AlignedAlgebra`: "anticlockwise: 20 × 1.5 = +30 N m"; on "metres" "clockwise: 30 × 1.0 = −30 N m; Στ = 0". On "light" "ΣF = 0: N − 20 − 30 = 0, N = 50 N upwards (light beam: no beam weight)" and a teal arrow up at the pivot "50 N". On "cancel" a chip "torques cancel, so pivot force = 0" fades in and is crossed (caption "Στ = 0 and ΣF = 0 are separate conditions"). Hold about 1 second.

### 14. handoff
> So balanced torques mean the rotation doesn't change. A crane turning round on its mast at a steady rate is in that state. Look down on the tip of its jib from above. It moves at a constant speed, but its direction keeps changing, all the way round the **circle**. So is its velocity changing? And if it is, what's making it **change**?

Visual: board clears (camera change) to the crane plate on the left, which then cross-fades into a coded top view: the mast as a dot at the centre, the jib as a line rotating at a steady rate (a clock readout with equal angle steps). On "tip of its jib" a dot at the jib tip traces a circle; at four positions (top, left, bottom, right) teal velocity arrows of equal length draw tangent to the circle, with a small readout "speed: constant". On "circle" the four arrows are copied tail to tail at the side, all the same length but pointing four different ways. On "change" a small "Δv = ?" appears between two of them and a chip writes "Next: how can speed be constant while velocity keeps changing?". Hold about 2 seconds. This is the final frame (see "Final frame").

### 15. key notes (quiet, hold about 60 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Rotational equilibrium: net torque zero, so rotation does not change (still stays still; steady turning stays steady). Sign convention: anticlockwise +, clockwise −. Στ = 0, so Σ clockwise τ = Σ anticlockwise τ.
2. Take torques about a pivot: forces whose lines of action pass through it (support; a uniform beam's weight when pivoted at its centre) have zero torque about it.
3. Level beam with weights: m₁r₁ = m₂r₂ (g cancels). Seesaw: 30 kg at 1.2 m balances 25 kg at 1.44 m. Measure r from the pivot; check the answer fits on the beam.
4. Complete (static) equilibrium needs ΣF = 0 and Στ = 0. Zero net torque does not give the support force; zero net force does not stop turning (a couple).

Memory aid (large, on the notes screen): *Heavy near, light far.*

## Teaching checks

- **Does it explain causes?** Why the crane doesn't tip: equal and opposite torques (2). Why the support and a uniform seesaw's weight drop out: lines of action through the pivot (4). Why each torque is distance times weight: weights at right angles to a level beam (5). Why g cancels and the lighter child sits further out (6). Why the support force is unknown: the seesaw's mass is missing (7). Why equal distances fail: unequal torques, net 58.8 N m (8).
- **Misconceptions addressed:** a heavier weight must win (1, 2, 6); equilibrium means every torque is zero (3: they cancel, they are not zero); balanced torques mean balanced forces (7; crossed in 13); torque is the same as force (7, the couple); equal distances balance (8, crossed); distances from the end (8, crossed); position versus distance from the pivot (crossed in 11).
- **One idea at a time:** the crane result (2) before the definition (3) before the worked example (4 to 6) before force balance (7) before slips (8).
- **Video makes it easier:** the balance scale's two bars meeting at zero (2, 6, 8); lines of action through the pivot (4); the 25 kg arrow sliding out until the bars match (6); the seesaw tipping under equal distances (8); equal up and down pushes turning it with zero net force (7).
- **Response opportunity:** one prediction (3 s countdown) and two unseen HSC-style tasks with every condition visible (uniform or light, pivot position, masses or forces, distances and their reference, horizontal), 10 s each with the invitation to pause; nothing answer-bearing. One crossed mistake each; feedback about 33 s and 26 s.
- **Avoided double teaching:** τ = rF sin θ, its unit and turning sense (v09) are recalled; W = mg is used without re-teaching.
- **Syllabus coverage:** `P5-IQ2-05`: the relationship between rotation (no change when Στ = 0) and applied torques, with τ = rF for forces at right angles to a level beam. The investigation verb is reflected in A1's metre-rule apparatus.
- **Out of scope by design:** two-support beams (route stop), tilted beams and non-perpendicular forces in equilibrium, τ = Iα.

## Practice questions and model answers

**Attempt 1 (scene 10; site short-answer Q2 reworded, HSC style, 3 marks suggested, not an official marking scheme).** "A uniform metre rule is pivoted at its 50 cm mark. A 200 g mass hangs from the 20 cm mark. At which mark on the rule must a 150 g mass hang for the rule to balance horizontally? State the principle you use."
Model answer: Principle: for rotational equilibrium the sum of clockwise torques equals the sum of anticlockwise torques about the pivot (Στ = 0). The rule is uniform and pivoted at its centre, so its weight has no torque about the pivot. The 200 g mass is 50 − 20 = 30 cm = 0.30 m from the pivot. 0.200g × 0.30 = 0.150g × r, so r = 0.060 ÷ 0.150 = 0.40 m on the other side, at the 50 + 40 = 90 cm mark. Classic mistake (crossed): "the 40 cm mark".

**Attempt 2 (scene 12; original wording from the pack, HSC style, 3 marks).** "A light beam is pivoted at its centre and is horizontal. A 20 N force acts vertically downwards 1.5 m to the left of the pivot, and a 30 N force acts vertically downwards 1.0 m to the right of the pivot. (a) Show that the beam is in rotational equilibrium. (b) Calculate the force exerted on the beam by the pivot."
Model answer: (a) Taking anticlockwise as positive about the pivot: τ = +20 × 1.5 − 30 × 1.0 = 30 − 30 = 0, so Στ = 0 and the beam is in rotational equilibrium. (b) The beam is light (no weight) and is in equilibrium, so ΣF = 0: N − 20 − 30 = 0, N = 50 N upwards. Classic mistake (crossed): "the pivot force is zero because the torques cancel".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Crane (site) | load 4 t = 4000 kg at 30 m; counterweight 20 t = 20 000 kg at 6 m; g = 9.8 m s⁻² | 1, 2 |
| Crane weights | 39 200 N ("about thirty-nine thousand"); 196 000 N | 2 |
| Crane torques | 30 × 39 200 = 1.176 × 10⁶ N m; 6 × 196 000 = 1.176 × 10⁶ N m ("about one point one eight million") | 2 |
| Seesaw (site) | uniform, 3.0 m, centre pivot; 30 kg at 1.2 m left; 25 kg at r right | 4 to 8 |
| Seesaw torque | 30 × 9.8 × 1.2 = 352.8 N m each side at balance (screen only if needed) | 5, 6 |
| Seesaw answer | r = 30 × 1.2 ÷ 25 = 36 ÷ 25 = 1.44 m; half-length 1.50 m | 6 |
| Equal-distance slip | (30g − 25g)(1.2) = 5 × 9.8 × 1.2 = 58.8 N m ("about fifty-nine") | 8 |
| End-distance slip | 1.5 − 1.2 = 0.3 m (crossed bracket) | 8 |
| Couple (illustrative) | 100 N up at −1.5 m, 100 N down at +1.5 m: ΣF = 0, Στ = −300 N m (no values narrated or shown) | 7 |
| A1 | r₁ = 0.30 m; 0.200 × 0.30 = 0.060; r₂ = 0.060 ÷ 0.150 = 0.40 m; 90 cm mark; torques 0.588 N m each | 10, 11 |
| A2 | 20 × 1.5 = 30 N m; 30 × 1.0 = 30 N m; N = 50 N up | 12, 13 |

## Numbers to verify (all values, repeated for Codex)

Checked with Python (6 Nov); Codex to re-check.

- 4000 × 9.8 = 39 200; × 30 = 1 176 000. 20 000 × 9.8 = 196 000; × 6 = 1 176 000.
- 30 × 1.2 ÷ 25 = 1.44; 25 × 9.8 × 1.44 = 352.8 = 30 × 9.8 × 1.2.
- 5 × 9.8 × 1.2 = 58.8.
- A1: 0.200 × 0.30 ÷ 0.150 = 0.40; 0.200 × 9.8 × 0.30 = 0.588; 0.150 × 9.8 × 0.40 = 0.588; 50 + 40 = 90.
- A2: 20 × 1.5 = 30; 30 × 1.0 = 30; 20 + 30 = 50.
- Reserve (not used): site Activity 1 seesaw 30 × 1.5 ÷ 45 = 1.0 m; pack candidate 1: 20 × 0.60 ÷ 15 = 0.80 m.

## Memory aid check

- **"Heavy near, light far."** Meaning, as said in scene 9: on a level beam balanced about a pivot, the heavier load must be closer to the pivot and the lighter one further out, so that mass × distance from the pivot matches on both sides (m₁r₁ = m₂r₂, from Στ = 0 with g cancelling). Assumptions checked (said in scene 9): only weights act (all forces parallel and vertical); the beam is level, so each weight is at right angles to it; the beam's own weight acts at the pivot (uniform beam pivoted at its centre, or a light beam). It fails for a uniform beam pivoted off-centre (its weight then has a torque) and for forces at other angles. It helps a new case: A1 (200 g near, 150 g far) and the crane (20 t near, 4 t far). Introduced after the worked example (6).
- **Considered, not used:** "Clockwise equals anticlockwise" (the principle itself, kept as key note 1); "See-saw, same score" (vague).

## Narration length estimate

Revision 1 count (6 Nov; counted by script with the build parser rules: `### N.` headings, only lines starting "> " counted and joined with a space, bold markers removed): **5,671 characters**, 15 scenes. Characters per scene (1 to 15): 305, 576, 457, 506, 425, 391, 516, 381, 267, 245, 476, 315, 394, 328, 75. At 13.3 characters per second the speech is about 426 s; add about 3 s for the prediction countdown, about 2 s for the arrow slide in scene 6, 2 s for the tilts in scenes 7 and 8, 2 s for the memory-aid hold, 20 s for the two attempt countdowns, 2 s of feedback holds, 2 s for the handoff hold and about 55 s more of the quiet notes hold (about 88 s of holds and countdowns): **about 514 s**, inside the 5,500 to 6,800 character band and under the 570 s cap. Reserve trims if the voiced take runs long: scene 7's couple sentences (open decision 3); scene 3's "In other words" sentence; scene 14's last question.

## Opening frame

v09's final frame (designed in this wave, `phys-y12-m5-v09.md`): paper background; coded ground line; the tower crane plate at the centre with the load plate hanging far out on the jib and the counterweight on the short counter-jib; amber weight arrows from both; orange "clockwise" and blue "anticlockwise" curved arrows; a navy pivot dot at the mast top; heading "Why does a force turn an object more effectively at some angles?" and the chip "Next: how do clockwise and anticlockwise torques balance?". No masses or distances shown. Scene 1 adds the masses and brackets; the heading changes in scene 2.

## Final frame

The last explained frame (end of scene 14, before the key-notes board): paper background; a coded top view: the mast as a navy dot at the centre, the jib as a line from it to a tip dot on a thin circle (the tip's path); teal velocity arrows of equal length tangent to the circle at four positions (top, left, bottom, right), with a readout "speed: constant"; at the side, the four arrows copied tail to tail, equal lengths, four directions, with "Δv = ?" between two of them; heading unchanged ("How do clockwise and anticlockwise torques balance?"); a chip reads "Next: how can speed be constant while velocity keeps changing?". v11 opens on this frame.

## Scene list and build ids

Lesson key `p-y12-m5-v10` (route phys-y12-m5-v10). Suggested explainer folder `src/explainer/lessons/phys-y12-m5-v10` and build folder `docs/production/claude-pm/lessons/p-y12-m5-v10` (root to confirm when adding the LESSONS entry).

In order (kebab-case; 15 scene headings, all `### N.`): hook, crane-torques, equilibrium-signs, seesaw-pivot, signed-sum, solve-check, torque-not-force, two-slips, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Scene 1 is `explain` with a 3 s prediction countdown. `onScreenChange` per scene is the cue list under each "Visual". `motionTools`: crane stage, beam stage with tilt playback, torque balance scale, top-view slew, `AlignedAlgebra`, `NumberTicker`, `ScribbleCircle`, `PenArrow`, `Countdown`, `CameraStage`. Transitions (`pickTransition`): 1 to 2 to 3 camera continue (same crane); 3 to 4 camera change to the seesaw; 4 to 5 to 6 to 7 to 8 camera continue; 8 to 9 clear change; attempts and feedback card shrink to the top; 13 to 14 clear change to the crane, then cross-fade to the top view; 14 to 15 fade to the notes board.

Holds: hook (3 s countdown), memory aid (2 s), attempt-1, attempt-2 (10 s countdown, "Pause here to answer." on screen), key-notes (about 60 s). Review evidence paths: `learning_review` = `checks/p-y12-m5-v10-learning-review.md`, `science_check` = `checks/p-y12-m5-v10-physics-check.md`.

## Assets

Have (inspected 6 Nov on session contact sheets; scaled uniformly only, never stretched):
- `public/assets/physics/phys-y11-crane-load-v1.png` (1000 × 1600, RGBA; cable attachment (500, 211)): scenes 1 to 3, 14 (and v09 scene 14).
- `phys-y11-metre-rule-v1.png` (2172 × 724), `phys-y11-retort-stand-v1.png` (600 × 2400), `phys-y11-boss-crossbar-v1.png` (800 × 800), `phys-y11-mass-hanger-v1.png` (600 × 1400), `phys-y11-slotted-masses-v1.png` (1000 × 1000), all RGBA: feedback 1 (scene 11).
- **Checked, not used:** `phys-y11-scrapyard-crane-magnet-v1.png` (no counter-jib: it cannot show the balance); `phys-y11-wooden-crate-v1.png` and `phys-y11-box-v1.png` (would turn the children into crates on the seesaw; the site's problem is about children, so the weight-arrow tags keep it honest).

Need (new plates, Codex), in priority order:
1. `y12p-seesaw-v1.png`: scenes 4 to 9. Essential.
2. `y12p-tower-crane-v1.png`: scenes 1 to 3, 14 and v09 scene 14. Essential.

Coded: weight and support arrows, curved turning arrows, distance brackets, pivot dot, balance scale, sign key, the top-view crane outline and circle, velocity arrows, HSC-style beam and metre-rule diagrams on the attempt cards, calculation strips, crossed chips, attempt cards, countdowns, key notes board, ground line.

Kit gaps (for the v10 build brief):
1. **Torque balance scale.** Blue and orange bars from a central zero line, lengths from the torque magnitudes, with a signed-sum readout; driven by the same values as the stage.
2. **Beam stage.** The seesaw plate on its pivot with registered seat points (from Codex) at a set scale (metres per pixel), weight arrows at given distances that can slide, brackets from the pivot, and an illustrative tilt when Στ ≠ 0. Reuse `m5-beam-equilibrium`'s ledger logic with the site's values.
3. **Top-view slew.** A rotating line about a centre at a steady angular rate with a tip trace and tangent velocity arrows of constant length; copies of the arrows placed tail to tail.

## Codex asset brief (Year 12 Physics M5 v10: seesaw and tower crane)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/phys-y12-m5-v10.md`, route entry phys-y12-m5-v10. Paint after the learning review, physics check and Codex error check pass and the owner gives the go-ahead. Save to `public/assets/physics/`. Every plate: transparent PNG with a true alpha channel and **clean edges with no coloured fringe or halo** (check on a black and a white background), ink and watercolour in the house style, matched to `phys-y11-crane-load-v1.png` (yellow steel, bricks) in line weight, palette and finish, at least 8 per cent clear margin, no text, labels, letters, numbers, scale bars, brand names, logos, people, hands, faces, backdrop, glow or ground shadow. Never stretch to fit; keep the native aspect ratio.

1. `y12p-seesaw-v1.png` (2400 × 700 px): an empty playground seesaw seen exactly side-on and perfectly level: one long straight plank (painted timber or steel) resting at its exact centre on a short triangular or A-frame pivot stand, a simple seat and a small handle near each end, mirror-symmetric. No people or anything on the seats. Codex reports, in plate pixels: the pivot point (centre of rotation on the plank's top line), the plank's left and right ends, and the scale if the plank represents 3.0 m.
2. `y12p-tower-crane-v1.png` (2400 × 1800 px): a construction tower crane seen exactly side-on: a tall lattice mast standing on a base at the bottom, a long horizontal lattice jib to the right, a short horizontal counter-jib to the left carrying a stack of grey concrete counterweight blocks, a small operator cab at the top of the mast with empty, dark windows, a trolley and hook block at the outer end of the jib with the hook hanging a short way below (the load is a separate plate). Proportions: the horizontal distance from the mast centreline to the hook is five times the distance from the mast centreline to the centre of the counterweight stack (30 m to 6 m). Yellow steel to match `phys-y11-crane-load-v1.png`. Codex reports, in plate pixels: the mast centreline at the jib height (the pivot dot), the hook point, the counterweight stack's centre, and the ground line.

Report inspection on the paper background and the dark board background at about 400 px wide, and confirm the crane-load plate's cable attachment (500, 211) can be placed on the hook point at a sensible scale. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/phys-y12-m5-v10-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the physics of every learner-visible claim: crane torques equal and opposite (crane structure set aside, author note a); rotational equilibrium means rotation unchanged; the sign convention and Στ = 0; the support and a uniform seesaw's weight have no torque about the central pivot; the left child's weight is anticlockwise (author note c); g cancels; 1.44 m < 1.50 m; the support force cannot be found without the seesaw's mass; equal up and down end pushes give ΣF = 0 and a clockwise torque; equal distances give 58.8 N m anticlockwise; A2's 50 N needs the light-beam condition.
3. Confirm the memory aid's assumptions (see "Memory aid check").
4. Confirm every visual cue phrase quoted after "On" appears verbatim in its scene's narration, in spoken order.
5. Confirm both attempt cards carry every condition (uniform or light, pivot position, masses or forces, distances and their reference, horizontal) and show nothing answer-bearing.
6. Confirm the syllabus quote matches the route JSON exactly and is labelled 2017.
7. Confirm no person, hand, face or body outline is drawn or requested (no children, empty crane cab, pushes as arrows).
8. Confirm no em dash (U+2014) and no U+2061 anywhere in this file, and Australian spelling.
9. Confirm the narration character count and per-scene counts by script with the build parser rules.

## YouTube metadata (draft)

Title: Balancing Torques: Cranes and Seesaws | HSC Physics Module 5

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/physics/year12/module5/lesson06.sa.html

A tower crane holds a 4-tonne load 30 m out with a 20-tonne counterweight only 6 m behind the mast. Five times heavier, five times closer: the clockwise and anticlockwise torques are equal, so the crane doesn't rotate. Learn rotational equilibrium, a sign convention, how to choose the pivot, and solve the classic seesaw: where must a 25 kg child sit to balance a 30 kg child 1.2 m out? Then see why balanced torques and balanced forces are two separate conditions. Two exam-style questions at the end.

Year 12 Physics (2017 syllabus), Module 5: Advanced Mechanics.
Syllabus content (NSW Physics Stage 6, 2017):
"investigate the relationship between the rotation of mechanical systems and the applied torque: τ = r⊥F = rF sin θ"
Official syllabus: https://www.nsw.gov.au/sites/default/files/noindex/2025-03/physics-stage-6-syllabus-2017.docx

Previous: torque, and why angle matters. Next: uniform circular motion, and how speed can be constant while velocity keeps changing.

#HSCPhysics #Physics #Torque #Equilibrium #HSCScience

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from v09; check the hook question is answerable in 3 s; that the balance scale reads as "torques", not forces; that scene 7 separates the two conditions clearly; that the children-as-arrows convention reads naturally; that the attempt cards give nothing away), then the physics check and the Codex error check.
- The balance scale, the sliding weight arrow, the tilts and the top-view slew carry the explanation; judge them at playback speed in the voiced preview.
