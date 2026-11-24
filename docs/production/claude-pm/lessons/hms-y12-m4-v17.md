# HMS Year 12 V17 (Training for improved performance): biomechanics for efficient movement. How does biomechanics make movement more efficient, so an athlete lasts longer and performs better? (design)

Status: Revision 1 (24 Nov 2026): first design. Needs independent learning review and science check before voicing. Nothing recorded. Voice: the Google voice. Plates: none new, eight reused (see Assets). No official figures; the projectile values come from one run of the `field-motion` sim (no air resistance) and are recalculated below.

Narration 6,212 characters (13 scene files, counted by script from lines starting "> " with bold markers removed), about 567 s including holds, two countdowns and the 45 s notes hold.

Scope: the seventeenth video of the Year 12 focus area "Training for improved performance", opening its fifth inquiry question ("How do individuals train for sustained movement and performance?"). Course brief `../hms-design-brief.md`. Route entry **hms-y12-m4-v17**. Pre-design pack `../pre-design/hms/hms-y12-m4-v17.md`. Site page `C:/Users/kygs/teaching-app-fix/subjects/health-movement-science/year12/module4/lesson17.sa.html` (read in full, 24 Nov; sha256 `7616732853e6152c2b9efd411198bcff97c0c08ef0d1ad9a8a043cbeaa44eeee`). Previous design `hms-y12-m4-v16.md`.

## Decisions

- **File name and route id.** Route entry **hms-y12-m4-v17**, playlist order 79, site lesson Year 12 module 4 L17 ("Biomechanics for efficient movement"). Opening (route): "the PCr link from v16 hands over to how efficiently that energy is used" (hms-y12-m4-v16's final frame). Start: from efficiency (useful work for the energy spent). Stop: when students can define efficiency and name four sources of wasted energy, explain force application and absorption, explain the three release variables of a projectile with speed dominant and the optimum depending on the goal, explain drag and thrust, apply this to physical activity, sport-specific and functional movements, and explain a change as a four-link chain. Next handoff: hms-y12-m4-v18, which opens on "the efficiency readout from v17 drops as fatigue builds: recovery". Lesson key **hms12b17**.
- **Syllabus.** Inquiry question "How do individuals train for sustained movement and performance?". Dotpoint **hms-y12-fa2-g5-d1** (p33) "Explain how biomechanics can be used to develop efficient movements for sustained movement and improved performance" (syllabus examples "Physical activity. / Sport-specific movements. / Functional movements."), owned whole.
- **One main question:** *How does biomechanics make movement more efficient, so an athlete lasts longer and performs better?* (the route's question, kept). Heading: "How does biomechanics make movement more efficient?" (the hms-y12-m4-v16 Next chip's words).
- **Case.** The site's warm-up (two runners of identical fitness at the same pace for an hour; one finishes more tired; three movement explanations; the one measurement that decides) is the hook (1), answered in 6. Card 04 shapes 2; card 05 shapes 3; card 06 shapes 4; card 07 shapes 5; card 08's measures and its four-link chain shape 6, where the three syllabus examples are each run through the chain. WE b1 (explain, the stem) gives 6 its chain; WE b2 (if a projectile response) gives 4 its "the optimum depends on what is being optimised". Attempts are unseen: attempt 1 is a recreational runner who over-strides with a stiff knee (explain efficiency and injury consequences, recommend a change, 4 marks); attempt 2 is a long jumper who takes off at about 20 degrees (explain, with projectile principles, why the coach targets run-up speed rather than a steeper take-off, 3 marks).
- **Scope.** Hook (1); efficiency and four sources of waste (2); levers, applying force and absorbing it (3); projectiles: speed, angle, height (4); fluids: drag and thrust (5); the three syllabus examples, measuring, and the four-link chain (6); memory (7); two unseen items (8a to 8d); decision rule and handoff (9); key notes (10).
- **Syllabus coverage check (root condition, 24 Nov).** "How biomechanics can be used to develop efficient movements" (2 to 5); "for sustained movement" (2's fatigue spiral, 6); "and improved performance" (4, 5); the three syllabus examples, physical activity, sport-specific movements and functional movements, each run through the chain in 6 (a recreational runner's cadence, a freestyle stroke, lifting a box). Owned content is taught.
- **Left to the site page for length (recorded per the root condition).** Muscle size and output (one clause in 3); the Magnus effect (the site's "beyond the syllabus" box); air resistance on projectiles (one silent caveat tag); wearable sensors in measurement (v19 takes technology; one silent row); the odd-one-out item.
- **What this video does not teach (recall, one sentence each).** Levers, stability and force: Year 11 (**hms-y11-m2-v03**), recalled in one sentence in 3 (the route's recurring lever model, reused with Year 11's beam sim tiny). Cardiac output and maximal oxygen uptake: **v08**, recalled in 2 ("raising the ceiling"). Drafting as a tactic: **v13**, recalled in 5. Landing and injury: **v20**, **v21** (named forward in 3). Monitoring and technology: **v19**.
- **Site alignment.** Kept in substance: the warm-up (1); efficiency as "useful work produced relative to the energy it cost", raising the ceiling against lowering the cost, the four sources of waste (direction, tension, force direction, resistance), the fatigue spiral (2); bones as levers, force application (direction, range, sequencing from largest to smallest segment) and absorption (increase the time, spread the area), "absorbing the same force over a longer time reduces the peak force the tissue experiences" (3); the three release variables with speed dominant, angle's broad optimum (45 degrees only when release equals landing height; lower for the shot), height adds flight time, "the optimum depends on what is being optimised" (basketball's higher arc for accuracy) (4); drag and thrust, drag rising roughly with the square of speed, the swimming, cycling and running rows, drafting (5); the four measures and their limits, physiological cost at a fixed speed as the most direct measure of efficiency, the four-link chain "feature, mechanical consequence, energy cost, sustained performance" (6).
- **Site errors found (this read).** None. (Card 06's "optimum ... meaningfully below 45 degrees" for the shot: pure projectile physics gives a little below 45 for a 2.1 m release; real throwers release lower still because they can produce more speed at a flatter angle. The video says both, so no correction is needed.)
- **Added beyond the site.** (a) An **efficiency readout** (`EfficiencyReadout`, new in `hms-shared`, the route's handoff model, reused in v18): useful output over energy cost as a gauge beside a pace bar, with four waste leaks that each drain it; a fatigue line that lowers it further over an hour. (b) Year 11's **lever** and `SegmentLinkage` (the route's recurring lever model) for force application (a throwing chain, segments sequenced from hips to hand with speed readouts) and absorption (a landing with flexed against stiff joints and a peak-force readout). (c) The **`field-motion` projectile sim** (the route's sim): one release with live sliders for speed, angle and height and a range readout from the same run; speed +10 per cent against angle +7 degrees against height +0.2 m, so "speed dominates" is a measured picture (13 m/s, 38 degrees, 2.1 m: 19.1 m; 14.3 m/s: 22.6 m; 45 degrees: 19.1 m; 2.3 m: 19.3 m; no air resistance). (d) **Drag arrows** that grow with the square of speed on coded body-free shapes (a streamlined capsule against a broad one), over the approved pool-lane plate. (e) The **four-link chain** card for 6.
- **Entry knowledge.** hms-y12-m4-v08 (maximal oxygen uptake; cardiac output); hms-y12-m4-v13 (drafting); Year 11 HMS (recalled in one sentence): levers, stability and force. Not assumed: efficiency (as defined), force application, force absorption, peak force, projectile, angle and height of release, drag, thrust, streamlining.
- **Terms.** Efficiency (2); force application, force absorption (3); projectile (4); drag, thrust, streamlining (5). Each gloss writes beside its part.
- **Naming.** No brands, athletes or equipment makers.
- **Visual system.** One model introduced here: the **efficiency readout**. Reused: v16's PCr link (opening), Year 11's lever and `SegmentLinkage`, Year 11's beam sim (tiny), the `field-motion` sim, v08's swapped bars (tiny), v13's drafting counters (tiny). Plates: none new. Reused: painted HMS plates opened and inspected 24 Nov (contact sheet): `hms-track-finish-line-v1.png` (a red track with lane lines: the two runners, 1, and the recreational runner, 8a), `hms-knee-synovial-cutaway-v1.png` (a knee joint cut open: cartilage and synovial space: landing absorption, 3), `hms-arm-bones-v1.png` (the humerus, radius and ulna cut above the wrist: the lever, 3), `hms-lifting-crate-v1.png` (a wooden crate: the functional lift, 6); approved, not yet painted (chosen from their briefs): `hms-shot-and-spikes-v1.png` (a shot in a throwing circle; spikes on a lane: the shot put, 4), `hms-free-throw-line-v1.png` (a basketball on the free-throw line under the ring: accuracy, 4), `hms-pool-start-block-v1.png` (a starting block and lane: swimming drag, 5 and 6), `hms-triple-jump-pit-v1.png` (a runway, board and sand pit: the long jumper, 8c). No people, hands or faces: bodies are coded linkages or capsule shapes.
- **Painted HMS plates inspected (24 Nov).** `hms-track-finish-line-v1.png`, `hms-knee-synovial-cutaway-v1.png`, `hms-arm-bones-v1.png`, `hms-lifting-crate-v1.png`.
- **Attempt.** 8a: an unseen over-striding runner (4 marks). 8c: an unseen long jumper (3 marks).
- **Memory aids.** The site's "Raising the ceiling is training. Lowering the cost is biomechanics" (written "Raise the ceiling, or lower the cost") and its four links (written "Feature, mechanics, energy cost, sustained performance"). Scene 7, after 2 to 6.
- **A mistake/fix beat** is in 4 ("always release at 45 degrees", crossed). Other fixes: "more muscle is always better" crossed in 3; "land stiff and strong" crossed in 3; "drag doubles when speed doubles" crossed in 5; "a technique change is just about looking good" crossed in 6.
- **Reuse:** v16's handoff frame (opening); Year 11's lever, linkage and beam; v13's drafting.
- **Colour key.** Efficiency gauge green; waste leaks orange; fatigue line red-orange (not red); force application arrows teal, absorption arrows slate with a peak-force readout; projectile path amber with speed, angle and height sliders; drag arrows grey, thrust arrows green; chain links amber, teal, slate, green; green answers; red only for crossed mistakes.
- **Type sizes.** As the course brief.
- **Anchor.** The efficiency readout (1, 2, 6, 9).
- **Simulation.** `field-motion` (src/explainer/sims/field-motion.ts, `runMotion` with a uniform gravity field, no drag): every range shown in 4 and 8d comes from it. The landing peak-force readout is one illustrative impulse model (the same momentum change over 0.05 s against 0.15 s gives three times the peak). Drag arrows scale with speed squared.
- **Board stages.** (1) The PCr link becomes two runners' efficiency readouts, scene 1; (2) the readout and its four leaks, scene 2; (3) the lever, the throwing chain and the landing, scene 3; (4) the projectile sim, scene 4; (5) drag and thrust, scene 5; (6) three examples through the chain, and the measures, scene 6; (7) memory, questions, handoff and notes.
- **Open decisions for root.** None (no new plates, no site corrections).

Main question: *How does biomechanics make movement more efficient, so an athlete lasts longer and performs better?*
Entry knowledge: hms-y12-m4-v08, v13; Year 11 HMS (recalled).
Stops after: defining efficiency and naming four sources of waste, with the fatigue spiral; explaining force application (direction, range, sequence) and absorption (time and area against peak force); explaining speed, angle and height of release with speed dominant and the optimum set by the goal; explaining drag (roughly with speed squared) and thrust; running physical activity, sport-specific and functional examples through a four-link chain, and naming how efficiency is measured.
Handoff: recovery strategies (route entry hms-y12-m4-v18). **Handoff frame (hms-y12-m4-v18 opens from it):** the efficiency readout at the centre over a long session axis; the gauge falling as a red-orange fatigue line climbs late in the session, the four waste leaks reopening one by one; a grey tag at the end "recovery?" (38 px); the "Next" chip at the lower right reads "Next: which recovery strategies are worth including?"; this video's heading at the top left.

## Script and shots

13 scene files (1 to 7, 8a to 8d, 9, 10). No people, hands or faces appear at any point.

### 1. hook (same pace, different cost)
> So, how does biomechanics make movement more efficient? Two runners of identical fitness run side by side, at exactly the same pace, for an hour. One finishes noticeably more tired. Neither took a different route, and neither is injured. Write down three things about how they moved that could explain the difference. Then, if you could measure only one thing to find out which explanation is right, what would it be?

Visual: opens on hms-y12-m4-v16's handoff frame (the muscle plate with its gold PCr store full, ATP beads clipping on, an arrow into an empty box "how efficiently is this energy used?" beside a faint segment linkage; the Next chip). The Next chip leaves and the heading rewrites to "How does biomechanics make movement more efficient?" (60 px). The PCr store shrinks to the corner; the empty box splits into two efficiency readouts side by side, "runner A" and "runner B", over `hms-track-finish-line-v1.png`. On "identical fitness" two equal "fitness ceiling" bars (green); on "at exactly the same pace, for an hour" two equal pace bars and a 60-minute clock. On "One finishes noticeably more tired" runner B's fatigue line climbs higher by the end. On "three things about how they moved" three empty slots (30 px); on "if you could measure only one thing" a fourth slot with a grey dashed outline. Hold one second.

### 2. efficiency, and four ways to waste energy
> **Efficiency** is the useful work you produce for the energy it costs. In v-eight, endurance improved by raising the ceiling: more cardiac output, more oxygen uptake. Biomechanics does the opposite. It lowers the cost of each stride or stroke. Energy gets wasted in four ways. Moving in an unhelpful direction, like bouncing up and down too much when running, so the body is lifted and dropped every stride. Unnecessary muscle tension, like hunched shoulders or clenched hands, which burns energy without helping. Force in the wrong direction, like over-striding, where the foot lands ahead and brakes you, so you pay twice. And extra resistance, like a swimmer's hips sinking. Here's why it matters for lasting longer. An inefficient athlete tires sooner, and as they tire, technique gets worse, which raises the cost again.

Visual: board change to the efficiency readout (solid from its first frame): `EfficiencyReadout`, a green gauge "useful output ÷ energy cost" beside a pace bar. On "Efficiency" the gloss "efficiency: useful work for the energy it costs" (28 px). On "raising the ceiling" v08's swapped bars tiny with a rising ceiling bar, grey recall tag "v08"; on "lowers the cost of each stride or stroke" an energy-cost bar shrinks under a fixed pace bar, amber hand tag "raise the ceiling, or lower the cost" (30 px). Four leaks open on the gauge one per cue (24 px): on "Moving in an unhelpful direction" leak "1 direction", a runner-free bouncing dot whose vertical path is large; on "Unnecessary muscle tension" leak "2 tension", two small tension tags "shoulders", "hands"; on "Force in the wrong direction, like over-striding" leak "3 force direction", a braking arrow ahead of a hip marker on a coded linkage; on "you pay twice" a second arrow re-accelerating; on "extra resistance, like a swimmer's hips sinking" leak "4 resistance", a coded capsule tilting hips-down with a larger drag arrow. On "An inefficient athlete tires sooner" runner B's gauge drains faster; on "as they tire, technique gets worse" the leaks widen; on "raises the cost again" a small loop arrow "fatigue spiral" (26 px). The hook's slots fill (24 px): "bounce (direction)", "tension", "over-striding (braking)". Hold one second.

### 3. applying force, and absorbing it
> In Year 11 you saw that bones act as levers, rotating about joints, so segment length and muscle attachment decide how much force and speed a movement can produce. Force then flows in two directions. **Force application** is pushing against the ground, the water or an implement. Push in the direction you want to go, over a useful range, and sequence the segments from biggest to smallest, so a throw starts at the legs and hips and the hand is the last, fastest link. An arm-only throw wastes what the legs could add. **Force absorption** is receiving force, in a landing, a catch or a tackle. Spread it over more time and more tissue. Land with the ankles, knees and hips bending, and the same force arrives more slowly, so the peak is lower. A stiff-legged landing does the opposite, and peak force is what tissue fails under.

Visual: board change to the lever and linkage (solid from its first frame): `hms-arm-bones-v1.png` at the left with Year 11's lever overlay (pivot at the elbow, effort and load arrows), grey recall tag "earlier", Year 11's beam sim tiny. On "segment length and muscle attachment" the lever arm lengthens and the tip-speed readout rises. A silent chip "more muscle is always better" writes and is crossed in red. On "Force application" the gloss "force application: pushing against ground, water or an implement" (26 px). A coded throwing chain (hip, trunk, shoulder, elbow, wrist circles on Year 11's `SegmentLinkage`) runs: on "in the direction you want to go" a teal force arrow aligns with the travel line; on "over a useful range" a range arc widens; on "sequence the segments from biggest to smallest" the segments light in order hip, trunk, shoulder, elbow, wrist, each speed readout higher than the last; on "the hand is the last, fastest link" the wrist readout peaks, tag "kinetic chain" (26 px). On "An arm-only throw" the chain replays with only the elbow and wrist lit, a shorter speed peak, tag "wasted legs". On "Force absorption" the gloss "force absorption: receiving force over time and area" (26 px); the linkage drops to land, `hms-knee-synovial-cutaway-v1.png` small beside the knee. On "Land with the ankles, knees and hips bending" the ankle, knee and hip readouts flex (knee 170° to about 110°) and a peak-force trace rises gently to a low peak, readout "time 0.15 s"; on "the peak is lower" the peak labels "1 ×" (illustrative); on "A stiff-legged landing" the replay keeps the knee near 170°, the trace spikes to "3 ×" over "0.05 s"; a chip "land stiff and strong" writes and is crossed in red; on "peak force is what tissue fails under" an amber tag "injury link (later)". Hold one second.

### 4. projectiles: speed, angle and height
> Once a ball, a shot or a body leaves the ground or hand, it's a **projectile**, and three things at release decide its flight: speed, angle and height. Speed matters most by far, because more speed adds both flight time and forward velocity. In this run, a shot released at thirteen metres per second, at thirty-eight degrees, from two point one metres, goes about nineteen metres. Add ten per cent more speed, and it goes about twenty-two point six. Raise the angle to forty-five instead, and the distance barely changes. The angle has a broad best range, and forty-five degrees is only best when release and landing are at the same height. A shot released from shoulder height does best a little lower, and in practice lower still, because athletes produce more speed at a flatter angle. And the best angle depends on the goal. For a basketball free throw, a higher arc gives a bigger target, so accuracy beats distance.

Visual: board change to the projectile sim (solid from its first frame): the `field-motion` sim with three sliders (speed, angle, height) and a range readout, the approved `hms-shot-and-spikes-v1.png` small at the release point. On "projectile" the gloss "projectile: an object or body in flight" (28 px). On "speed, angle and height" the three sliders label. On "Speed matters most by far" the speed slider glows. On "released at thirteen metres per second, at thirty-eight degrees, from two point one metres" the sliders set and an amber path draws; on "goes about nineteen metres" the readout "19.1 m" (34 px). On "Add ten per cent more speed" the speed slider moves to 14.3 and a second path draws further; on "about twenty-two point six" readout "22.6 m (+19%)". On "Raise the angle to forty-five instead" speed resets, angle to 45; on "the distance barely changes" readout "19.1 m". Silently, angle resets and height moves to 2.3: readout "19.3 m". A three-bar comparison writes beside the sim: "+10% speed: +3.5 m", "+7° angle: about 0", "+0.2 m height: +0.2 m", amber hand tag "speed dominates" (30 px). On "forty-five degrees is only best when release and landing are at the same height" a level-ground path at 45° with a tag "same height"; a chip "always release at 45 degrees" writes and is crossed in red; on "A shot released from shoulder height does best a little lower" the sim's best-angle marker sits at "~42° (no drag)"; on "in practice lower still" a grey tag "real throws ~35 to 40°: more speed when flatter". On "For a basketball free throw" the approved `hms-free-throw-line-v1.png` small; a flat arc and a high arc draw to a coded ring, the high arc's ring opening wider (shaded "target"), tag "goal: accuracy". A silent caveat tag "light, spinning objects: air resistance matters". Hold one second.

### 5. fluids: drag and thrust
> Air and water are both fluids. Moving through them, an athlete meets **drag**, a force pushing back, and produces **thrust**, the force driving them forward. Progress is what's left. And drag doesn't rise in step with speed. It rises roughly with the square of speed, so going twice as fast means about four times the drag. That's why small cuts in drag matter so much at high speed. Swimmers cut drag by keeping the hips high and the body flat, gliding in a tight **streamlined** shape off each wall, and add thrust with a high-elbow catch that pushes water backwards, not down. Cyclists and runners also shelter behind others, the drafting tactic from v-thirteen.

Visual: board change to drag and thrust (solid from its first frame): the approved `hms-pool-start-block-v1.png` lane across the top, a coded capsule shape (body-free) in the water. On "drag" the gloss "drag: the force resisting motion through air or water" (26 px), a grey arrow pointing back; on "thrust" the gloss "thrust: the force driving forward" (26 px), a green arrow forward; on "Progress is what's left" a net arrow. On "roughly with the square of speed" a graph of drag against speed curves upward; on "twice as fast means about four times the drag" two markers "1×" and "2×" with drag readouts "1" and "4"; a chip "drag doubles when speed doubles" writes and is crossed in red. On "keeping the hips high and the body flat" the capsule levels and its drag arrow shrinks; on "streamlined" the gloss "streamlining: shaping the body to cut drag" (24 px), a tight capsule off a coded wall; on "a high-elbow catch that pushes water backwards, not down" a thrust arrow rotates from down to back and lengthens. On "Cyclists and runners also shelter behind others" a second coded capsule on a bike-line (no rider drawn) lowers and narrows (silent tags "low position", "close-fitting clothing"), and a capsule ahead shades a low-drag zone behind it; v13's drafting counters tiny, grey recall tag "v13". Hold one second.

### 6. three kinds of movement, one chain
> The syllabus names three kinds of movement, and the same chain explains all three. Start with the feature, then the mechanical result, then the energy cost, then sustained performance. Physical activity: a recreational runner who shortens an over-long stride lands under the hips, so braking drops, each stride costs less, and they can run longer at the same pace. A sport-specific movement: a swimmer who lifts the hips cuts drag, so the same speed costs less, and the pace holds late in the race. A functional movement: lifting a heavy box with bent knees and the load close keeps the lever arm short, so the back does less work, and repeated lifts are safer and less tiring. To check, measure the cost at a fixed speed. If the same pace costs a lower heart rate, efficiency improved. That answers the hook. Measure what the pace cost each runner.

Visual: board change to the chain (solid from its first frame): a four-link chain card across the top: on "the feature" "feature" (amber), on "the mechanical result" "mechanics" (teal), on "the energy cost" "energy cost" (slate), on "sustained performance" "sustained performance" (green); a chip "a technique change is just about looking good" writes and is crossed in red. Three rows run through the chain one per cue (24 px): on "Physical activity" row 1 "physical activity", the finish-line plate tiny; on "shortens an over-long stride" "shorter stride", on "braking drops" "less braking", on "each stride costs less" "lower cost", on "run longer at the same pace" "lasts longer". On "A sport-specific movement" row 2, the pool plate tiny; on "lifts the hips" "hips high", on "cuts drag" "less drag", on "the same speed costs less" "lower cost", on "the pace holds late in the race" "pace held". On "A functional movement" row 3, `hms-lifting-crate-v1.png` tiny with Year 11's lever overlay; on "bent knees and the load close" "load close", on "keeps the lever arm short" "short lever arm", on "the back does less work" "less work", on "repeated lifts are safer and less tiring" "safer, less tiring". On "measure the cost at a fixed speed" a measures panel writes (24 px): "heart rate at a fixed pace" (green, "most direct"), silent rows "video: angles, timing (2D only)", "force plate: peak forces (one step)", "wearables: later". On "the same pace costs a lower heart rate" two heart-rate bars at one pace, one lower. The hook's fourth slot fills (24 px): "cost at a fixed pace (HR or oxygen)". Hold one second.

### 7. memory
> Two things to remember. Raise the ceiling, or lower the cost. And explain a change in four links: feature, mechanics, energy cost, sustained performance.

Visual: board change to the memory card (solid from its first frame): the efficiency readout small at the left beside the chain card, beside a dark-ink framed card (52 px): "Raise the ceiling, or lower the cost" (written with "Raise the ceiling, or lower the cost") and "Feature, mechanics, energy cost, sustained performance" (written with "feature, mechanics, energy cost, sustained performance"). This card returns beside the key notes. Hold half a second.

### 8a. attempt one (the over-striding runner)
> Two exam questions. First. A recreational runner over-strides, landing heel-first well ahead of the hips, with the knee almost straight. Explain how this reduces efficiency and raises injury risk, and recommend a change. Pause here to answer.

Visual: the board clears. `QuestionScene`: the card arrives in one move with its whole text (38 px), tagged "HSC-style question, written for HSCScience". Stem: "A recreational runner over-strides: each foot lands heel-first well ahead of the hips, with the knee almost straight." Demand: "Explain how this technique reduces running efficiency and increases injury risk, and recommend a change. (4 marks)" Picture: a coded linkage frozen at heel strike ahead of the hip marker, the finish-line plate small. **The countdown ring is shown full from "Pause here to answer." and runs for 10 seconds.** The whole card stays on screen during the countdown and after it.

### 8b. feedback, item one
> Landing ahead of the hips puts force in the wrong direction, braking every stride, so the runner has to re-accelerate and pays twice, which raises energy cost and fatigue. A straight knee absorbs force over less time, so peak force rises. Shorten the stride, land closer under the hips, with the knee slightly bent. The classic mistake is naming only the injury, not the efficiency cost.

Visual: `FeedbackScene`: the card shrinks to the top; the linkage replays. A green-framed four-line answer writes one per cue (30 px): on "braking every stride" "1 force direction: braking each stride"; on "raises energy cost and fatigue" "2 re-accelerate: higher cost, earlier fatigue"; on "A straight knee absorbs force over less time, so peak force rises" "3 stiff knee: short absorption time, higher peak force"; on "Shorten the stride, land closer under the hips" "4 shorter stride, land under hips, knee flexed". On "classic mistake" a chip "injury only" writes and is crossed in red, red hand tag "cost and injury" (34 px). Settle one second.

### 8c. attempt two (the long jumper's angle)
> Second. A long jumper takes off at about twenty degrees, well below forty-five. Using projectile principles, explain why the coach works on run-up speed rather than a steeper take-off. Pause here to answer.

Visual: the board clears. The card arrives in one move with its whole text (38 px), tagged "HSC-style question, written for HSCScience". Stem: "A long jumper takes off at about 20 degrees to the horizontal, far below 45 degrees." Demand: "Using the principles of projectile motion, explain why the coach focuses on increasing run-up speed rather than on a steeper take-off angle. (3 marks)" Picture: the approved `hms-triple-jump-pit-v1.png` small, the sim's sliders blank. **The countdown ring is shown full from "Pause here to answer." and runs for 10 seconds.** The whole card stays on screen during the countdown and after it.

### 8d. feedback, item two
> Speed at take-off is the dominant factor in distance, far ahead of angle. A jumper can't create a steep angle without losing much of their horizontal speed at the board, so a steeper take-off would cost more distance than it adds. The angle has a broad optimum, so more speed gains more. The classic mistake is saying the jumper should aim for forty-five degrees.

Visual: `FeedbackScene`: the card shrinks to the top; the sim runs two jumps. A green-framed three-line answer writes one per cue (30 px): on "Speed at take-off is the dominant factor" "1 speed dominates distance"; on "losing much of their horizontal speed at the board" "2 steep take-off costs horizontal speed", a steeper, slower jump landing shorter; on "more speed gains more" "3 broad angle optimum: speed is the lever". On "classic mistake" a chip "aim for 45 degrees" writes and is crossed in red, red hand tag "speed first" (34 px). Settle one second.

### 9. decision rule and handoff
> So find the waste, fix how force is applied and absorbed, maximise speed at release, and cut drag. But even the most efficient technique doesn't last forever. As a long session goes on, fatigue builds, the leaks reopen, and efficiency drops. What restores it? Which recovery strategies are worth including?

Visual: board change to the efficiency readout. Four chips write on (38 px): "find the waste" on "find the waste", "apply and absorb" on "fix how force is applied and absorbed", "speed at release" on "maximise speed at release", "cut drag" on "cut drag". On "even the most efficient technique doesn't last forever" the chips leave and the readout stretches over a long session axis; on "fatigue builds" a red-orange fatigue line climbs late in the session; on "the leaks reopen" the four leaks reopen one by one; on "efficiency drops" the gauge falls; on "What restores it?" a grey tag "recovery?" (38 px) at the end. The "Next" chip slides in: "Next: which recovery strategies are worth including?" **This is the handoff frame; hms-y12-m4-v18 opens from it.** Hold half a second.

### 10. key notes (quiet, hold about 45 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Efficiency: useful work for the energy cost. Waste: direction, tension, force, drag.
2. Apply force in line, over range, big to small segments. Absorb over time: lower peak.
3. Projectile: speed dominates; best angle depends on height and the goal.
4. Drag rises with about speed squared: hips high, streamline, low position, shelter.
5. Explain: feature, mechanics, energy cost, sustained performance.

Memory card (the scene 7 card) beside the notes. Each bullet one line of at most 86 characters. Hold about 45 seconds in all.

## Practice question and feedback

Two unseen items (8a to 8d), "Pause here to answer." and a 10 s countdown each, cards on screen during and after; marks on the card; tag "HSC-style question, written for HSCScience". Neither the over-striding runner's landing analysis in 8a (the body names over-striding as a waste in one clause and works a shorter stride only as a chain row) nor the long jumper in 8c is worked in the body.

1. (8a, 4 marks.) Landing ahead of the centre of mass produces a braking force, so the runner must re-accelerate each stride (1); this raises energy cost and brings fatigue on earlier, reducing sustained performance (1); a near-straight knee absorbs force over a short time, raising peak force on tissues (injury risk) (1); recommend a shorter stride (higher cadence), landing closer under the hips with a flexed knee (1). Classic mistake crossed: injury only.
2. (8c, 3 marks.) Speed at take-off is the dominant determinant of distance (1); a steeper take-off can only be produced by sacrificing horizontal velocity at the board, which costs more distance than the angle gains (1); the angle optimum is broad, so increasing approach speed gives the largest improvement (1). Classic mistake crossed: aiming for 45 degrees.

Feedback spoken lengths about 28 s (8b) and 26 s (8d) by script; time the exact audio.

## Numbers or facts to verify

Self-check (24 Nov). The Codex science check must confirm each before voicing. No official figures.
- **Projectile runs (4).** From `field-motion` with g = 9.81 m/s², no drag: 13 m/s, 38°, 2.1 m: 19.07 m; 14.3 m/s: 22.63 m (+18.7%); 13 m/s at 45°: 19.12 m; at 2.3 m: 19.27 m; best angle for 13 m/s from 2.1 m about 42°. Recomputed. Real shot-put release angles are typically about 35 to 40°.
- **Landing (3).** Impulse: the same momentum change over three times the time gives about a third of the average force (illustrative "1 ×" and "3 ×").
- **Drag (5).** Drag force roughly proportional to speed squared (pressure drag at sporting speeds); drafting reduces drag.
- **Efficiency measure (6).** Physiological cost (heart rate or oxygen uptake) at a fixed speed as the most direct field measure of efficiency, confounded by fitness changes.
- **Functional lift (6).** A shorter horizontal distance between the load and the lower back reduces the load's moment.
- **No em dashes** in this file (searched by script).

## Memory aid check

- **"Raise the ceiling, or lower the cost."** Assumption: both are trainable; for a beginner, technique changes can at first raise cost until the new pattern is learned.
- **Four links.** Assumption: the feature really changes mechanics (measured, not assumed); the chain is an explanation structure, not proof.

## Narration length estimate

Revision 1 count (24 Nov; by script with the build parser rules: only lines starting "> ", joined with a space, bold markers removed): **6212 characters**, 13 scene files. At 13.3 characters per second the speech is about 467 s; add 26 s of padding (2 s per scene) and 74 s of stated holds, settles, the two 10 s countdowns and the rest of the quiet notes hold: **about 567 s**.

| Scene | Characters |
| --- | --- |
| 1. hook (same pace, different cost) | 417 |
| 2. efficiency, and four ways to waste energy | 821 |
| 3. applying force, and absorbing it | 822 |
| 4. projectiles: speed, angle and height | 918 |
| 5. fluids: drag and thrust | 653 |
| 6. three kinds of movement, one chain | 849 |
| 7. memory | 153 |
| 8a. attempt one (the over-striding runner) | 242 |
| 8b. feedback, item one | 387 |
| 8c. attempt two (the long jumper's angle) | 206 |
| 8d. feedback, item two | 363 |
| 9. decision rule and handoff | 306 |
| 10. key notes (quiet, hold about 45 seconds) | 75 |

Reserve cuts: (1) scene 4, the height sentence (keep the readout silent); (2) scene 5, the cyclist sentence; (3) scene 3, the bigger-muscles sentence. Do not cut below 5,500 without replacing content.

## Assets

Have: HMS painted, inspected 24 Nov: `hms-track-finish-line-v1.png`, `hms-knee-synovial-cutaway-v1.png`, `hms-arm-bones-v1.png`, `hms-lifting-crate-v1.png`; HMS approved, not yet painted (chosen from briefs): `hms-shot-and-spikes-v1.png`, `hms-free-throw-line-v1.png`, `hms-pool-start-block-v1.png`, `hms-triple-jump-pit-v1.png`. Coded: `EfficiencyReadout` with four leaks and fatigue line, pace and cost bars, bouncing dot, braking arrows, throwing chain on the linkage with speed readouts, landing linkage with peak-force trace, `field-motion` sim with sliders and range readout, comparison bars, ring arcs, drag graph, capsule shapes, drag and thrust arrows, shelter zone, four-link chain card, measures panel, question cards, countdown. Reused coded: Year 11's lever, `SegmentLinkage`, beam sim; v08's bars; v13's drafting counters; v16's PCr link. No people.

Need: nothing new.

Kit gaps: `EfficiencyReadout` in `hms-shared`.

## Codex learning review and science check brief (HMS-Y12-B17)

- **Learning review:** trace from m4-v16 as a student who did not watch our Year 11 videos. Does "raise the ceiling, or lower the cost" make efficiency distinct from fitness? Are the four leaks causal (why each costs energy)? Do the throwing chain and the landing make application and absorption visible, with peak force tied to injury? Does the sim's comparison make "speed dominates" a measured result, and is the 45-degree myth handled precisely? Is drag's square-law clear? Are the three syllabus examples run through the chain? Are both attempts unseen?
- **Science check:** every item in "Numbers or facts to verify", especially the sim values and the real-world shot-put angle range.

## Codex error-check brief (HMS-Y12-B17, after the reviews)

Error-only: every quoted cue appears word for word in its scene in spoken order; every range on screen matches the sim run; the opening matches hms-y12-m4-v16's handoff frame and the closing matches hms-y12-m4-v18's route opening (the efficiency readout drops as fatigue builds: recovery); no brands or athletes; no people, hands or faces (linkages and capsules only); no "Year 11" or "Year 12" label on screen (narration only); no em dash, no U+2061; no module number or course label on screen.

## YouTube metadata (draft)

- Title: "Biomechanics for Efficient Movement: Force, Projectiles and Drag | HSC Health and Movement Science"
- Description:

"Full lesson, notes and practice questions: https://hscscience.com.au/subjects/health-movement-science/year12/module4/lesson17.sa.html

How does biomechanics make movement more efficient, so an athlete lasts longer and performs better? Efficiency and four ways energy is wasted; applying force in sequence and absorbing it over time; projectile motion, where speed of release dominates and the best angle depends on the goal (shown with a simulation); drag and thrust in water and air; and a four-link chain that explains a technique change in physical activity, sport-specific and functional movements. Includes two exam-style questions with brief feedback. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Health and Movement Science 11-12 (2023 syllabus), Year 12: Training for improved performance.
Syllabus content (NSW Health and Movement Science 11-12, 2023):
"Explain how biomechanics can be used to develop efficient movements for sustained movement and improved performance"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/pdhpe/health-and-movement-science-11-12-2023

Previous: Which supplements actually work?
Next: Which recovery strategies are worth including?

#HealthAndMovementScience #HSC #HSCScience"

## Open decisions

- None. No new plates; no site corrections.

## Build ids

Lesson key `hms12b17`; folder `src/explainer/lessons/hms-y12-m4-v17`; build folder `docs/production/claude-pm/lessons/hms12b17`. Imports `hms-shared` (`SegmentLinkage`, lever overlay, `SupplementLedger` PCr link; new `EfficiencyReadout`); `src/explainer/sims/field-motion.ts` (`runMotion`), Year 11's beam sim (tiny).

Scene headings (13): hook, efficiency, apply-absorb, projectiles, fluids, chain, memory, attempt, feedback-one, attempt-two, feedback-two, handoff, key-notes.

Holds and transitions as hms-y12-m3-v01. Every teaching scene is a board change.

## Review notes (author, not learner copy)

- **Teaching checks.** Causes: why each kind of waste costs energy and why fatigue compounds it (2); why sequencing adds speed and why longer absorption lowers peak force (3); why speed dominates range and why the best angle depends on height and goal (4); why drag punishes speed (5); why the cost at a fixed pace measures efficiency (6). Attention: two equally fit runners, one more tired. Visual medium: a gauge with four leaks; a throwing chain whose wrist readout peaks only when the hips start it; a landing trace that spikes when the knee stays straight; a sim where ten per cent more speed adds three and a half metres and seven degrees add almost nothing; a capsule whose drag arrow shrinks as the hips rise. Apply: an unseen over-strider (8a); an unseen long jumper (8c). Remember: raise the ceiling, or lower the cost; four links.
- **Overlap.** v18 takes recovery (the readout falls); v19 takes technology, including video and wearables for biomechanics; v20 and v21 take landing-related injuries.
- **No em dashes** in this file (searched by script).
