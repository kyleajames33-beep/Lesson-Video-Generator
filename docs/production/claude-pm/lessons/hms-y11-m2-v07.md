# HMS Year 11 V07 (The body and mind in motion): the nervous system. How does a decision become a movement, and how does the body know the movement worked? (design)

Status: Revision 1 (24 Nov 2026): first design. Needs independent learning review and science check before voicing. Nothing recorded. Voice: the Google voice. Plates: none new, eight reused (see Assets). No official figures.

Narration 5,870 characters (16 scene files, counted by script from lines starting "> " with bold markers removed), about 545 s including holds, two countdowns and the 45 s notes hold.

Scope: the seventh HMS video of the Year 11 focus area "The body and mind in motion". Course brief `../hms-design-brief.md`. Route entry **hms-y11-m2-v07**. Pre-design pack `../pre-design/hms/hms-y11-m2-v07.md`. Site page `C:/Users/kygs/teaching-app-fix/subjects/health-movement-science/year11/module2/lesson07.sa.html` (read in full, 24 Nov; sha256 `0531bc656c2d26c365ad190d3968a9dc33d2b25295b3d303801391452c1d5706`). Previous design `hms-y11-m2-v06.md`.

## Decisions

- **File name and route id.** Route entry **hms-y11-m2-v07**, playlist order 25, site lesson L07 ("The control system: how a decision becomes a movement, and how the body knows it worked"). Opening (route): "the hormone timeline from v06 is slow; a much faster control line appears: the nervous system" (v06's final frame). Start: "Start from the nervous system as a branching tree (central and peripheral, then somatic and autonomic)." Stop: "Stop when students can trace a voluntary movement from motor cortex to muscle, explain how force is graded (motor units), explain feedback from proprioceptors and the reflex loop, explain the autonomic system's role in exercise, and name what makes neural control better or worse (myelin, fatigue, training)." Next handoff: hms-y11-m2-v08, which opens on "the command and feedback loop from v07 widens to seven systems around one movement". Lesson key **hms11b07**.
- **Syllabus.** Inquiry question "How do the systems of the body influence and respond to movement?". Spine id **hms-y11-fa2-g1-d5** (p21), owned whole: "Explain the interrelationship between the nervous system and movement, including structure and function". No syllabus examples are listed.
- **One main question:** *How does a decision become a movement, and how does the body know the movement worked?* Heading: "How does a decision become a movement?" (the v06 Next chip's words).
- **Case.** The site's warm-up (stand on one leg, then close your eyes; the correction happens before you decide) is the hook (1). Its first half is answered in 6 (proprioception: vision was one input of several) and its second in 7 (the reflex arc decides in the spinal cord). Attempt 1 is written for this video from the site's flagged "most common short-answer question" (why a reflex is faster, 3 marks). Attempt 2 is WE b2 verbatim ("Explain how the nervous system detects and corrects a loss of balance while an athlete is running on uneven ground", 4 marks). WE b1 (the whole interrelationship, 6 marks) shapes the board order (structure, the outward pathway, the return loop and reflex, the autonomic link, efficiency) and its "two directions" become the decision rule and the memory card.
- **Scope.** Hook (1); structure as a branching tree (2); the neuron, myelin and the synapse (3); the motor pathway and the motor unit (4); grading force (5); proprioception (6); the reflex arc (7); the autonomic system in exercise (8); what makes control better and worse (9); memory (10); two unseen items (11a to 11d); decision rule and handoff (12); key notes (13).
- **Syllabus coverage check (root condition, 24 Nov).** Structure: central and peripheral divisions, brain regions, spinal cord, sensory and motor, somatic and autonomic, sympathetic and parasympathetic (2), the neuron and synapse (3). Function and the interrelationship with movement in both directions: command out (4, 5), information back (6, 7), the autonomic link to the other systems (8), and how movement and training change the system (9). All owned content is taught.
- **Left to the site page for length (recorded per the root condition).** The sensory cortex by name; "afferent" and "efferent"; recovery heart rate as parasympathetic reactivation (v14 and v15 measure it); reduced Golgi tendon organ inhibition as a named neural gain; nerve or receptor injury beyond the ankle example; Activity 1 (trace your own movement) and Activity 2 (the ruler drop; reaction time is measured in v15). The myelin-disease example is left; myelin's speed is taught.
- **What this video does not teach.** All seven systems together and first aid: **v08**. Fibre types: **v02** (recalled as "small slow units, large fast units"). Skill learning and the stages of learning: **v16 to v18**.
- **Site alignment.** Kept in substance: the warm-up and both answers (1, 6, 7); "the nervous system divides once, and then each part divides again", the three brain regions with their jobs, "the spinal cord is not just a cable" (2); the neuron's four parts, myelin and "That chemical step is the slow part" (3); the six-step pathway, the motor unit, all or nothing, eye against quadriceps unit sizes (4); recruitment (small slow first) and rate coding, the pencil and the barbell (5); the three proprioceptive sources and "corrections become larger and later" (6); the five-step reflex arc, "shorter distance and fewer synapses, not because the neurons themselves conduct faster", the ankle sprain and balance retraining (7); the sympathetic and parasympathetic table and "One triggers the other, so the body gets both the immediacy and the duration" (8); neural strength gains first and the factors table, with concussion's medical clearance (9); WE b2 verbatim with its marking shape (11c, 11d).
- **Site errors found (this read).** None. Checked: eye-muscle motor units under ten fibres (commonly cited about 10 or fewer) and quadriceps units over a thousand; size principle; reflex speed reasoning; sympathetic and parasympathetic effects.
- **Added beyond the site.** (a) The **command and feedback loop** as a coded model (`CommandLoop`, new in `hms-shared`): a brain node (the brain plate), a spinal cord column, a motor line out to a muscle tile and a sensory line back, with a live impulse dot whose travel time is drawn from the number of stations and synapses it passes, and a short reflex bridge inside the spinal cord. The impulse's timing on screen comes from one rule (each synapse adds the same delay; each length of axon adds a delay set by myelin), so the reflex visibly arrives first. (b) An ankle `SegmentLinkage` (v01's, re-parameterised: shank and foot as bone lines with an ankle-angle readout, no foot outline) for the hook, 6, 7 and attempt 2. (c) Attempt 1.
- **Entry knowledge.** hms-y11-m2-v06 (hormones are slower, wider and longer-lasting than nerves; adrenaline; the adrenal glands); hms-y11-m2-v02 (skeletal muscle, fibre types, agonist and antagonist); hms-y11-m2-v04 (heart rate, airways, arterioles as taps); hms-y11-m2-v01 (joints; the segment linkage). Not assumed: every nervous system term.
- **Terms.** Central and peripheral nervous system, somatic and autonomic (2); neuron, myelin, synapse (3); neuromuscular junction, motor unit (4); recruitment, rate coding (5); proprioception (6); reflex arc (7); sympathetic and parasympathetic (8). Each gloss writes beside its part.
- **Visual system.** One recurring model introduced here: the **command and feedback loop** (`CommandLoop`). The structure is a coded branching tree (`BranchTree`) that the loop grows out of. Plates: the brain section (no head, no face), the neuron, the skeletal muscle, v01's ankle linkage, v04's heart and lungs and v06's adrenal for the autonomic board. No new plates. No people, hands or faces; the "one-legged stand" is shown only as the ankle linkage and an input panel.
- **Attempt.** 11a: written for this video (3 marks). 11c: WE b2 verbatim (4 marks).
- **Memory aids.** From WE b1's "interrelationship requires two directions" and the site's reflex rule: "Every movement is a loop: command out, information back" and "Reflexes win on route, not speed". Scene 10, after 2 to 9.
- **A mistake/fix beat** is in 7 ("reflex neurons are faster", crossed), kept because the site names it the distinction most often lost in short answers. Other fixes: "fibres contract a little for small forces" crossed in 5 (the site's true-or-false item); "the athlete decides to correct it" crossed in 11d; "early strength gains are bigger muscles" crossed in 9.
- **Reuse (all inspected 24 Nov):** `b3a2-brain-v1.png` (a midline brain section: cerebrum, cerebellum, brain stem continuing as the top of the spinal cord, pituitary; no skull, no face), `y11-neuron-v1.png` (dendrites, cell body with nucleus, myelinated axon with gaps, axon terminals), `m8-skeletal-muscle-v1.png` (a muscle belly with tendons and a fascicle cross-section), v01's ankle linkage (coded), `m8-heart-v1.png`, `m8-lungs-healthy-v1.png`, `m8-kidney-adrenal-v1.png` (v06, adrenal lit), `y11-digestive-tract-v2.png` (tiny, for "gut"), `hms-thigh-quadriceps-v1.png` (v02).
- **Colour key.** Commands out in olive, information back in teal, the reflex bridge in amber; the impulse dot white with a glow; synapses as small grey gaps; sympathetic in red-orange, parasympathetic in blue-grey; green answers; red only for crossed mistakes.
- **Type sizes.** As the course brief.
- **Anchor.** The `CommandLoop` is the anchor: it grows from the tree in 4, closes in 6, gains its reflex bridge in 7, and widens into the handoff frame.
- **Simulation.** The impulse timing model: travel time = synapses × synapse delay + path length ÷ conduction speed (myelinated fast, unmyelinated slow). Shown relatively ("arrives first", "slower"), with no millisecond values except the site's "milliseconds" order of magnitude, so no figure needs checking. Recruitment in 5 is a coded motor-unit field (about 30 unit outlines of three sizes over the muscle plate) switching on small to large, with a force bar that sums them; rate coding shows one unit's twitches fusing as the impulse rate rises (a coded twitch trace from one sum-of-twitches rule).
- **Board stages.** (1) the timeline and fast line, then the ankle linkage, scene 1; (2) the tree, scene 2; (3) the neuron, scene 3; (4) the loop and the motor unit field, scenes 4 and 5; (5) the loop closed and the reflex, scenes 6 and 7; (6) the autonomic board, scene 8; (7) the better-and-worse board, scene 9; (8) memory, questions, close, handoff and notes. Longest set-up: the loop, scenes 4 to 7 (about 1,900 characters, about 2 min 25 s), kept alive by the impulse travelling every route as it is named.
- **Open decisions for root.** None (no new plates, no site corrections).

Main question: *How does a decision become a movement, and how does the body know the movement worked?*
Entry knowledge: hms-y11-m2-v06, v02, v04, v01 (as above).
Stops after: drawing the branching tree; describing the neuron and synapse; tracing the motor pathway; explaining the motor unit and force grading; explaining proprioception and the reflex arc, and why a reflex is faster; explaining the autonomic system's role in exercise and its link to adrenaline; naming what improves and impairs neural control.
Handoff: all systems in one movement (route entry hms-y11-m2-v08). **Handoff frame (hms-y11-m2-v08 opens from it):** the `CommandLoop` at the centre (brain, spinal cord, motor line out to the quadriceps tile, sensory line back, reflex bridge), widening into a ring of seven empty system slots around it, the nervous slot already filled by the loop and the other six (skeletal, muscular, respiratory, circulatory, digestive, endocrine) showing faint thumbnails of their earlier plates; a small coded netball ring at the ring's centre (a ring and post line, no player); the "Next" chip at the lower right reads "Next: how do all the systems work in one movement?"; this video's heading at the top left.

## Script and shots

16 scene files (1 to 10, 11a to 11d, 12, 13). No people, hands or faces appear at any point.

### 1. hook (one leg, eyes closed)
> Here's the slow hormone timeline, with a much faster line beneath it: nerves. Now try this. Stand on one leg, then close your eyes. Almost everyone wobbles more. Your muscles, bones and joints didn't change, so what did you take away? And when you wobble, you correct before you've decided to. So where is that decision made?

Visual: opens on v06's handoff frame (the `HormoneTimeline` with its slow amber pulse and "seconds to hours" ruler, the thin ink line "nerve signal: milliseconds" with its quick pulse, the v06 Next chip). The Next chip leaves and the heading rewrites to "How does a decision become a movement?" (60 px). On "a much faster line beneath it: nerves" the fast line pulses twice and the timeline dims. On "Stand on one leg" the board changes to v01's `SegmentLinkage` re-parameterised as an ankle (a shank line over a foot line, an ankle joint circle and an "ankle angle" readout, no foot outline), standing on a ground line; an input panel at the left with three lamps "vision", "body sense", "inner ear", all lit (30 px). On "close your eyes" the "vision" lamp goes dark. On "Almost everyone wobbles more" the linkage sways and its angle readout swings wider, a grey trace beside it widening. On "Your muscles, bones and joints didn't change" three green ticks write under the linkage, "muscles", "bones", "joints". On "what did you take away?" an amber question mark sits on the dark lamp. On "you correct before you've decided to" each sway is caught by a quick amber flash at the ankle; on "where is that decision made?" a second amber question mark (34 px). Hold one second.

### 2. two divisions, then two more
> The nervous system splits once, then splits again. The **central nervous system** is the brain and spinal cord. In the brain, the cerebrum's motor cortex starts voluntary movement, the cerebellum coordinates it, keeps balance and stores learned patterns, and the brain stem runs breathing and heart rate. The spinal cord isn't just a cable. It makes decisions too. The **peripheral nervous system** is every nerve outside them. Sensory neurons carry information in, and motor neurons carry commands out. The motor side splits again. The somatic system drives skeletal muscle, the movements you choose. The autonomic system runs the heart, airways, vessels and gut without you, with two branches: sympathetic and parasympathetic.

Visual: board change to the tree (`BranchTree`, solid from its first frame): a root node "nervous system" at the top, empty branches. On "central nervous system" the left branch writes "central: brain, spinal cord" (30 px) and reused `b3a2-brain-v1.png` lands beside it (about 520 px), gloss "central nervous system: brain and spinal cord" (34 px). On "the cerebrum's motor cortex starts voluntary movement" a coded band over the top of the cerebrum glows olive, label "motor cortex: starts voluntary movement"; on "the cerebellum coordinates it, keeps balance and stores learned patterns" the cerebellum glows, label "cerebellum: coordination, balance, learned patterns"; on "the brain stem runs breathing and heart rate" the brain stem glows, label "brain stem: breathing, heart rate". On "The spinal cord isn't just a cable" a coded column extends down from the brain stem, label "spinal cord"; on "It makes decisions too" a small amber node lights inside it (it returns in 7). On "peripheral nervous system" the right branch writes "peripheral: every nerve outside", gloss "peripheral nervous system: nerves outside the brain and cord". On "Sensory neurons carry information in" a teal sub-branch "sensory: in" with an inward arrow; on "motor neurons carry commands out" an olive sub-branch "motor: out" with an outward arrow. On "The motor side splits again" the motor branch forks. On "The somatic system drives skeletal muscle" "somatic: skeletal muscle, voluntary" with the thigh tile tiny; on "The autonomic system runs the heart, airways, vessels and gut" "autonomic: heart, airways, vessels, gut, involuntary" with four tiny icons; on "sympathetic and parasympathetic" two leaves "sympathetic", "parasympathetic". Hold one second.

### 3. the neuron, and the slow step
> All of it is built from **neurons**. Dendrites receive signals, the cell body combines them, and the axon carries the impulse away. Many axons are wrapped in **myelin**, a fatty sheath that lets the signal jump from gap to gap, many times faster. Where a neuron meets another cell, they don't touch. The signal crosses a **synapse** as a chemical, and that chemical step is the slow part of the whole route.

Visual: board change to the neuron (solid from its first frame): reused `y11-neuron-v1.png` across the centre (about 1,300 px wide), the tree tiny at the top left. On "neurons" the gloss "neuron: a nerve cell that carries an impulse" (34 px). On "Dendrites receive signals" the dendrites glow, label "dendrites: receive" (30 px); on "the cell body combines them" the cell body glows, label "cell body: combines"; on "the axon carries the impulse away" an impulse dot travels the axon, label "axon: carries it away". On "myelin" the sheath segments glow cream, gloss "myelin: fatty sheath, faster signal"; on "jump from gap to gap" the dot leaps node to node, and a ghost dot on a coded bare axon below crawls behind it, tag "no myelin: slower" (grey); on "many times faster" a small bracket shows the gap between them widening. On "they don't touch" the terminals zoom to a coded gap beside a second cell; on "synapse" chemical dots cross the gap, gloss "synapse: the gap, crossed by a chemical"; on "the slow part of the whole route" the dot visibly pauses at the gap, amber hand tag "each synapse costs time" (42 px). Hold one second.

### 4. from decision to contraction
> Now a voluntary movement, say a kick. The motor cortex sends the command. It runs down the spinal cord to a motor neuron, along its axon to the **neuromuscular junction**, where a chemical crosses to the muscle fibres, and they contract. One motor neuron and all the fibres it controls is a **motor unit**, and it's all or nothing. When it fires, every fibre in it contracts fully. Units vary hugely. One moving your eye has fewer than ten fibres. One in your quadriceps can have more than a thousand.

Visual: board change to the loop (`CommandLoop`, solid from its first frame): the brain plate small at the top left, a coded spinal cord column under it, an olive motor line running right to reused `m8-skeletal-muscle-v1.png` (about 620 px), labelled "quadriceps" with the thigh tile tiny beside it; the knee linkage tiny at the far right. Stations light one per cue as an impulse dot travels (30 px): on "The motor cortex sends the command" "1 motor cortex"; on "runs down the spinal cord" "2 spinal cord"; on "to a motor neuron" "3 motor neuron"; on "neuromuscular junction" "4 neuromuscular junction", a coded gap at the muscle with chemical dots crossing, gloss "neuromuscular junction: where nerve meets muscle" (34 px); on "where a chemical crosses to the muscle fibres" "5 chemical crosses"; on "they contract" "6 fibres contract", and the tiny knee linkage extends (the kick). On "motor unit" one motor neuron branch and its scattered fibres on the muscle plate outline olive, gloss "motor unit: one motor neuron plus all its fibres"; on "all or nothing" a chip "all or nothing"; on "every fibre in it contracts fully" every outlined fibre flashes at once. On "Units vary hugely" two coded unit icons write side by side: on "fewer than ten fibres" a tiny unit "eye muscle: under 10 fibres"; on "more than a thousand" a large unit "quadriceps: over 1,000 fibres". Hold one second.

### 5. grading force
> So how can the same muscle lift a pencil or a barbell? Fibres can't contract a little, so the nervous system grades force two ways. **Recruitment** switches on more units, the small slow ones first and the large fast ones last. **Rate coding** fires the same units faster, so the fibres can't relax between impulses, and the pull becomes stronger and smoother. Few units, slowly, for the pencil. Many, fast, for the barbell.

Visual: the loop stays; the muscle plate takes a coded motor-unit field (about 30 unit outlines of three sizes) and a force bar at its right. Two small chips at the top, "pencil" and "barbell" (30 px), on "a pencil or a barbell". On "Fibres can't contract a little" a chip "fibres contract a little" is crossed in red. On "Recruitment" the gloss "recruitment: switching on more units" (34 px); on "the small slow ones first" the small outlines light first, labelled "small, slow"; on "the large fast ones last" the large outlines light last, "large, fast", and the force bar climbs in steps with each unit. On "Rate coding" the gloss "rate coding: firing the same units faster"; on "the fibres can't relax between impulses" a coded twitch trace under the plate shows separate twitches merging as the impulse ticks speed up; on "stronger and smoother" the trace becomes one smooth, higher plateau. On "Few units, slowly, for the pencil" the field drops to a few small lit units and the force bar to a low mark beside the "pencil" chip; on "Many, fast, for the barbell" the whole field lights with fast ticks and the bar fills beside "barbell". Hold one second.

### 6. the information coming back
> A command is only half the loop. The body also needs to know what happened, and that's **proprioception**: sensing where your limbs are, and how fast they're moving, without looking. Muscle spindles sense a muscle's length and how fast it changes. Golgi tendon organs sense tension in the tendon. Joint receptors and the inner ear report joint angle and head position. So, eyes closed, you lost one input, but kept the others. They have to do all the work, so corrections come later and bigger. That's the wobble.

Visual: the loop stays; a teal sensory line draws back from the muscle to the spinal cord and up to the brain, closing the loop, tag "information back". On "proprioception" the gloss "proprioception: sensing limb position and movement without looking" (34 px). Receptor icons place on the plates one per cue (30 px): on "Muscle spindles" a coded spindle inside the muscle plate, label "spindles: length and its change"; on "Golgi tendon organs" a coded coil at the tendon, label "Golgi tendon organs: tension"; on "Joint receptors and the inner ear" the ankle linkage from the hook returns at the right with a joint receptor dot, and a coded inner-ear tile (a small spiral and canals, no head), label "joint receptors, inner ear: joint angle, head position". Each sends a teal dot back along the line. On "eyes closed, you lost one input" the hook's input panel returns with "vision" dark; on "kept the others" the other two lamps pulse. On "corrections come later and bigger" the ankle sway trace shows later, larger corrections; on "That's the wobble" the hook's first question mark turns into a green tick, tag "one input gone; the rest work harder". Hold one second.

### 7. the shortcut
> Some corrections can't wait for the brain. In a **reflex arc**, a receptor detects the change, a sensory neuron carries it to the spinal cord, where it usually passes through one connecting neuron, and a motor neuron fires the muscle. The knee jerk skips even that step. The brain is told afterwards. A reflex is faster because the route is shorter and crosses fewer synapses, not because its neurons are faster. That's where your wobble is corrected. It also explains rehab. A sprained ankle damages the receptors as well as the ligament, so balance training retrains the loop, not just the muscle.

Visual: the loop stays; the amber node in the spinal cord from scene 2 lights. On "reflex arc" the gloss "reflex arc: a response routed through the spinal cord" (34 px). The arc draws one step per cue (30 px): on "a receptor detects the change" the ankle's joint receptor flashes; on "a sensory neuron carries it to the spinal cord" a teal dot runs in; on "usually passes through one connecting neuron" an amber bridge lights inside the cord, label "connecting neuron (usually one)" (30 px); on "a motor neuron fires the muscle" an olive dot runs out and the ankle linkage corrects. On "The knee jerk skips even that step" a small inset knee linkage at the corner shows its sensory line joining the motor line directly, the bridge absent, grey tag "knee jerk: no connecting neuron". On "The brain is told afterwards" a faint teal dot continues up to the brain, arriving after the correction, tag "told afterwards". On "the route is shorter and crosses fewer synapses" two impulse dots race on the same board, one by the reflex bridge and one by the full loop through the brain, each pausing at every grey synapse gap; the reflex dot arrives first, with counts "reflex: fewer synapses" and "voluntary: more synapses, longer route"; on "not because its neurons are faster" a chip "reflex neurons are faster" writes and is crossed in red, red hand tag "shorter route, fewer synapses" (34 px). On "That's where your wobble is corrected" the hook's second question mark turns into a green tick, tag "decided in the spinal cord". On "A sprained ankle damages the receptors" the ankle's receptor dot dims and its sway readout grows; on "balance training retrains the loop" the dot relights over three small repeat ticks, green tag "train the loop, not just the muscle". Hold one second.

### 8. the autonomic link
> The autonomic system is where nerves join the systems from earlier. In exercise, the **sympathetic** branch takes over. It raises heart rate and the force of each beat, widens the airways, opens arterioles to working muscle and closes those to the gut. It also tells the adrenal glands to release adrenaline. Nerves act in milliseconds but can't hold the response, and adrenaline is slower but lasts, so together you get speed and staying power. Afterwards, the **parasympathetic** branch brings heart rate back down.

Visual: board change to the autonomic board (solid from its first frame): the tree's autonomic branch enlarged at the left, its two leaves as switches; four target tiles at the right: `m8-heart-v1.png`, `m8-lungs-healthy-v1.png`, a coded arteriole pair (muscle and gut taps from v04), `y11-digestive-tract-v2.png` tiny. On "sympathetic" the gloss "sympathetic: prepares for exertion" (34 px) and its switch flips red-orange. Lines run to each target one per cue (30 px): on "raises heart rate and the force of each beat" the heart readout climbs, "rate and force up"; on "widens the airways" the lungs' bronchiole tree widens; on "opens arterioles to working muscle and closes those to the gut" the muscle tap opens and the gut tap closes; the tract tile dims, "digestion slowed". On "release adrenaline" `m8-kidney-adrenal-v1.png` lands small with the adrenal lit and a red-orange pill leaving it. On "Nerves act in milliseconds but can't hold the response" a short sharp spike draws on a mini time axis (olive, "nerves: fast, brief"); on "adrenaline is slower but lasts" a slower, longer hump under it (red-orange, "adrenaline: slower, lasts"); on "speed and staying power" the two sum into one shape, amber hand tag "nerves start it, hormones hold it" (42 px). On "parasympathetic" its switch flips blue-grey, gloss "parasympathetic: restores at rest", and on "brings heart rate back down" the heart readout falls. Hold one second.

### 9. better and worse
> Neural control isn't fixed. In the first weeks of strength training, you get stronger before your muscles grow, because you recruit more units, fire them faster and time them better. It gets worse with fatigue, which cuts the brain's drive, so technique slips late in a session. Sleep loss slows reactions and skill learning. Alcohol slows signals and balance. Heat and dehydration raise errors. And concussion disrupts the brain directly, so it needs medical clearance and a gradual return, because a second knock before recovery is far more dangerous.

Visual: board change to the better-and-worse board (solid from its first frame): the loop small at the centre, a green "better" column at the left and an amber "worse" column at the right. On "the first weeks of strength training" a coded two-line graph writes (maths graph kit, "illustrative pattern"): "strength" rising early, "muscle size" rising later, across "weeks"; on "you get stronger before your muscles grow" the gap between them shades green, tag "neural gains first". A chip "early strength = bigger muscles" writes and is crossed in red. On "recruit more units, fire them faster and time them better" three green chips file into "better". The "worse" column fills one per cue (30 px), each card dimming a part of the loop: on "fatigue, which cuts the brain's drive" "fatigue: less drive", the brain node dims; on "technique slips late in a session" a small sway on the knee linkage; on "Sleep loss" "sleep loss: slower reactions, slower learning"; on "Alcohol" "alcohol: slower signals, balance"; on "Heat and dehydration" "heat, dehydration: more errors". On "concussion disrupts the brain directly" a larger amber-edged card "concussion"; on "medical clearance and a gradual return" a green chip "medical clearance, gradual return"; on "a second knock before recovery is far more dangerous" a red outline on the card, tag "never play on". Hold one second.

### 10. memory
> Two things to remember. Every movement is a loop: command out, information back. And reflexes win on route, not speed: a shorter path, with fewer synapses.

Visual: board change to the memory card (solid from its first frame): the loop small at the left beside a dark-ink framed card (52 px): "Every movement is a loop: command out, information back" (written with "Every movement is a loop") and "Reflexes win on route, not speed" (written with "reflexes win on route, not speed"). This card returns beside the key notes. Hold half a second.

### 11a. attempt one (reflex speed)
> Two exam questions. First. Explain why a reflex response is faster than a voluntary response. Pause here to answer.

Visual: the board clears. `QuestionScene`: the card arrives in one move with its whole text (38 px), tagged "HSC-style question, written for HSCScience". Demand: "Explain why a reflex response is faster than a voluntary response. (3 marks)" Picture: the loop with the reflex bridge unlit and no labels. **The countdown ring is shown full from "Pause here to answer." and runs for 10 seconds.** The whole card stays on screen during the countdown and after it.

### 11b. feedback, item one
> A reflex is routed through the spinal cord, not the brain. So the signal travels a shorter distance, and it crosses fewer synapses, where every crossing is a slow chemical step. The brain is only told afterwards. The classic mistake is saying reflex neurons conduct faster.

Visual: `FeedbackScene`: the card shrinks to the top; the two racing dots from scene 7 replay tiny; a green-framed three-line answer writes one per cue (30 px): on "routed through the spinal cord" "1 routed through the spinal cord, not the brain"; on "travels a shorter distance" "2 shorter distance"; on "crosses fewer synapses" "3 fewer synapses, each a slow chemical step". On "classic mistake" a chip "reflex neurons conduct faster" writes and is crossed in red, red hand tag "route, not speed" (34 px). Settle one second.

### 11c. attempt two (the site's balance question)
> Second. Explain how the nervous system detects and corrects a loss of balance while an athlete is running on uneven ground. Pause here to answer.

Visual: the board clears. The card arrives in one move with its whole text (38 px), tagged "HSC-style question, written for HSCScience". Demand: "Explain how the nervous system detects and corrects a loss of balance while an athlete is running on uneven ground. (4 marks)" Picture: the ankle linkage on a tilted coded ground line (no foot outline, no runner). **The countdown ring is shown full from "Pause here to answer." and runs for 10 seconds.** The whole card stays on screen during the countdown and after it.

### 11d. feedback, item two
> Detection: the ankle tips, so muscle spindles, joint receptors and the inner ear send signals in along sensory neurons. Correction: a reflex through the spinal cord fires the ankle muscles first, then the cerebellum fine-tunes the next steps. Name the receptors, the route and the response. The classic mistake is saying the athlete decides to correct it.

Visual: `FeedbackScene`: the ankle linkage tips on the tilted ground; a green-framed four-line answer writes one per cue (30 px): on "the ankle tips" "1 stimulus: the ankle rolls"; on "send signals in along sensory neurons" "2 receptors: spindles, joint receptors, inner ear → sensory neurons"; on "a reflex through the spinal cord fires the ankle muscles first" "3 reflex via the spinal cord: ankle muscles fire", the linkage correcting; on "the cerebellum fine-tunes the next steps" "4 cerebellum adjusts the following strides", the brain plate tiny with its cerebellum lit. On "Name the receptors, the route and the response" three amber underlines under lines 2, 3 and 3's verb. On "classic mistake" a chip "the athlete decides to correct it" writes and is crossed in red, red hand tag "reflex first, brain told after" (34 px). Settle one second.

### 12. decision rule and handoff
> So, to explain any movement, follow the command out and the information back. Now widen the loop. Around one netball shot, the skeleton, muscles, heart and lungs, digestion and hormones are all working at once. How do they work together?

Visual: two chips write on (38 px): "command out" on "follow the command out", "information back" on "the information back". On "widen the loop" the chips fade and the `CommandLoop` settles at the centre while a ring of seven empty system slots opens around it; the nervous slot fills with the loop. On "Around one netball shot" a small coded netball ring and post line appear at the ring's centre (no player). On "the skeleton, muscles, heart and lungs, digestion and hormones" the other six slots show faint thumbnails of their earlier plates in turn (knee cutaway, thigh muscles, lungs, heart cutaway, tract, adrenal). On "How do they work together?" the "Next" chip slides in: "Next: how do all the systems work in one movement?" **This is the handoff frame; hms-y11-m2-v08 opens from it.** Hold half a second.

### 13. key notes (quiet, hold about 45 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Central (brain, cord) and peripheral; somatic (voluntary) and autonomic (involuntary).
2. Motor cortex → spinal cord → motor neuron → neuromuscular junction → fibres contract.
3. Motor unit: all or nothing; force graded by recruitment and rate coding.
4. Proprioception: spindles, Golgi tendon organs, joint receptors, inner ear.
5. Reflex: via the spinal cord; faster by a shorter route and fewer synapses.

Memory card (the scene 10 card) beside the notes. Each bullet one line of at most 86 characters. Hold about 45 seconds in all.

## Practice question and feedback

Two unseen items (11a to 11d), "Pause here to answer." and a 10 s countdown each, cards on screen during and after; marks on the card; tag "HSC-style question, written for HSCScience". Item 1 is written for this video; item 2 is the site's WE b2 stem verbatim.

1. (11a, 3 marks.) Routed through the spinal cord rather than the brain (1 mark); a shorter distance (1 mark); fewer synapses, each a slow chemical step (1 mark). Classic mistake crossed: "reflex neurons conduct faster".
2. (11c, 4 marks.) The site's marking shape: the stimulus and receptors (spindles, joint receptors, vestibular apparatus) (1 mark); sensory neurons carry the information to the central nervous system (1 mark); a rapid reflex correction through the spinal cord activates the stabilising muscles (1 mark); the cerebellum refines subsequent movement (1 mark). Classic mistake crossed: a conscious decision to correct.

Feedback spoken lengths about 21 s (11b) and 26 s (11d) by script; time the exact audio.

## Numbers or facts to verify

Self-check (24 Nov). The Codex science check must confirm each before voicing.
- **Structure (2).** Brain regions and jobs as the site (cerebrum and motor cortex; cerebellum: coordination, balance, motor learning; brain stem: breathing, heart rate); spinal reflexes; sensory and motor neurons; somatic and autonomic; sympathetic and parasympathetic.
- **Neuron (3).** Dendrites, cell body, axon, myelin with saltatory conduction ("many times faster", commonly cited up to about 50 times for the same diameter); synaptic delay as the slow step.
- **Motor units (4).** Extraocular muscle units about 10 fibres or fewer; large limb muscle units over 1,000 fibres (quadriceps and gastrocnemius estimates run into the low thousands); all-or-none.
- **Force grading (5).** The size principle (small, slow units first); rate coding and fused tetanus.
- **Proprioception and reflex (6, 7).** Spindles (length and rate of change), Golgi tendon organs (tension), joint receptors, vestibular apparatus; the reflex arc usually through one interneuron, with the knee jerk (patellar stretch reflex) monosynaptic with no interneuron (fixed 24 Nov at root's request: narration now says "usually passes through one connecting neuron" and "The knee jerk skips even that step"); reflex speed by route and synapse count; proprioceptive deficit after ankle sprain and balance training.
- **Autonomic (8).** Sympathetic effects as the site; sympathetic stimulation of the adrenal medulla; parasympathetic slowing of heart rate.
- **Better and worse (9).** Early strength gains are largely neural; central fatigue; sleep loss and motor learning; alcohol; heat; concussion requiring medical clearance and a graded return; second-impact risk.
- **Numbers used.** Under 10 fibres; over 1,000 fibres. The strength and size graph is labelled "illustrative pattern".
- **Official figures.** None.
- **No em dashes** in this file (searched by script).

## Memory aid check

- **"Every movement is a loop: command out, information back."** Assumption: movements use feedback. Very fast ballistic movements (a punch, a sprint start) run largely on the command alone, with feedback correcting the next movement rather than this one; author note, not learner copy. Correct as a description of the system's two directions, which is what the syllabus's "interrelationship" asks for.
- **"Reflexes win on route, not speed."** Assumption: reflex and voluntary pathways use neurons of similar conduction speed. Correct for the comparison the site makes.

## Narration length estimate

Revision 1 count (24 Nov; by script with the build parser rules: only lines starting "> ", joined with a space, bold markers removed): **5870 characters**, 16 scene files. At 13.3 characters per second the speech is about 441 s; add 32 s of padding (2 s per scene) and 72 s of stated holds, settles, the two 10 s countdowns and the rest of the quiet notes hold: **about 545 s**.

| Scene | Characters |
| --- | --- |
| 1. hook (one leg, eyes closed) | 325 |
| 2. two divisions, then two more | 720 |
| 3. the neuron, and the slow step | 395 |
| 4. from decision to contraction | 493 |
| 5. grading force | 416 |
| 6. the information coming back | 509 |
| 7. the shortcut | 595 |
| 8. the autonomic link | 509 |
| 9. better and worse | 553 |
| 10. memory | 155 |
| 11a. attempt one (reflex speed) | 115 |
| 11b. feedback, item one | 273 |
| 11c. attempt two (the site's balance question) | 145 |
| 11d. feedback, item two | 355 |
| 12. decision rule and handoff | 237 |
| 13. key notes (quiet, hold about 45 seconds) | 75 |

Reserve cuts: (1) scene 4, the eye and quadriceps unit sizes (keep the two icons silent); (2) scene 9, the alcohol and heat sentences (keep the cards silent); (3) scene 7, the rehab sentences. Do not cut below 5,500 without replacing content.

## Assets

Have (reused, inspected 24 Nov): `b3a2-brain-v1.png`, `y11-neuron-v1.png`, `m8-skeletal-muscle-v1.png`, `m8-heart-v1.png`, `m8-lungs-healthy-v1.png`, `m8-kidney-adrenal-v1.png`, `y11-digestive-tract-v2.png`; HMS plates approved: `hms-thigh-quadriceps-v1.png` (v02), and for the handoff thumbnails `hms-knee-synovial-cutaway-v1.png` (v01) and `hms-heart-cutaway-v1.png` (v04). Coded: input panel, ankle and knee `SegmentLinkage`, `BranchTree`, `CommandLoop` with impulse timing, synapse gap, motor-unit field and force bar, twitch trace, receptor icons, inner-ear tile, autonomic switches, time-course mini graph, better-and-worse board, question cards, countdown. No people.

Need: no new plates.

Kit gaps: `BranchTree`, `CommandLoop` in `hms-shared`.

## Codex asset brief (HMS-Y11-B07)

No new plates. Codex confirms only that the reused plates above are present at their paths and unchanged.

## Codex learning review and science check brief (HMS-Y11-B07)

- **Learning review:** trace from v06, v02 and v04. Is the tree (2) readable before the names pile up? Does the impulse dot make "the synapse is the slow step" (3) carry into the reflex race (7)? Does scene 5 answer "pencil or barbell" with both mechanisms visible? Are both halves of the hook answered where the hook's question marks turn into ticks (6, 7)? Is the autonomic board (8) clearly the link back to v04 to v06? Do the attempts test the stop?
- **Science check:** every item in "Numbers or facts to verify", especially the reflex arc wording ("usually" one connecting neuron; the knee jerk has none) and the unit sizes, and the model answers' mark splits.

## Codex error-check brief (HMS-Y11-B07, after the reviews)

Error-only: every quoted cue appears word for word in its scene in spoken order; the opening matches v06's handoff frame and the closing matches hms-y11-m2-v08's route opening (the command and feedback loop widens to seven systems around one movement); commands always olive and information always teal; no head or face around the brain plate; no foot outline on the ankle linkage; no people, hands or faces; no em dash, no U+2061; no module number or course label on screen.

## YouTube metadata (draft)

- Title: "The Nervous System and Movement: Motor Units, Proprioception and Reflexes | HSC Health and Movement Science"
- Description:

"Full lesson, notes and practice questions: https://hscscience.com.au/subjects/health-movement-science/year11/module2/lesson07.sa.html

How does a decision become a movement, and how does the body know the movement worked? Why you wobble with your eyes closed, the central and peripheral nervous systems, neurons, myelin and synapses, the pathway from motor cortex to muscle, motor units and how force is graded, proprioception, why a reflex is faster than a voluntary response, the sympathetic and parasympathetic systems in exercise, and what makes neural control better or worse. Includes two exam-style questions with brief feedback. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Health and Movement Science 11-12 (2023 syllabus), Year 11: The body and mind in motion.
Syllabus content (NSW Health and Movement Science 11-12, 2023):
"Explain the interrelationship between the nervous system and movement, including structure and function"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/pdhpe/health-and-movement-science-11-12-2023

Previous: How do digestion and hormones fuel movement?
Next: How do all the systems work in one movement?

#HealthAndMovementScience #HSC #HSCScience"

## Open decisions

- None for root: no new plates and no site corrections.

## Build ids

Lesson key `hms11b07`; folder `src/explainer/lessons/hms-y11-m2-v07`; build folder `docs/production/claude-pm/lessons/hms11b07`. Imports `hms-shared` (`SegmentLinkage`, `HormoneTimeline`, `CompareLedger`; new `BranchTree`, `CommandLoop`), `src/explainer/math/graphs.tsx` for the strength and size graph.

Scene headings (16): hook, tree, neuron, pathway, grading, feedback, reflex, autonomic, better-worse, memory, attempt, feedback-one, attempt-two, feedback-two, handoff, key-notes.

Holds and transitions as v06. 4 to 7 continue on the loop; other teaching scenes are board changes.

## Review notes (author, not learner copy)

- **Teaching checks.** Causes: why myelin speeds a signal and why the synapse is slow (3); why force is graded by unit number and rate (5); why closing your eyes causes wobble (6); why a reflex is faster (7); why sprain rehab trains balance (7); why nerves and adrenaline work together (8); why beginners get stronger before bigger (9). Attention: a test students can do in their seat; two question marks that turn into ticks. Visual medium: one impulse dot whose pauses at synapses make the reflex race fair; a motor-unit field that lights small to large. Apply: the reflex explanation (11a); an unseen balance case (11c). Remember: the loop; route, not speed.
- **Term load.** Heavy by syllabus design (structure). The tree writes each term on its branch; the key notes select five lines.
- **Sensitive content.** Concussion framed with medical clearance and no return on the day.
- **Overlap.** v08 widens the loop to seven systems; v15 measures reaction time; v16 to v18 build skill learning on the cerebellum and feedback.
- **No em dashes** in this file (searched by script).
