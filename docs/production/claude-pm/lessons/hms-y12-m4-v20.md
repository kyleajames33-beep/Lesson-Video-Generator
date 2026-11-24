# HMS Year 12 V20 (Training for improved performance): classifying and assessing sports injuries. How are sports injuries classified, and how does TOTAPS decide whether a player can go back on? (design)

Status: Revision 2 (24 Nov 2026): independent learning review resolved (see "Revision 2: learning review resolved" at the end). Needs science check before voicing. Revision 1 (24 Nov 2026) was the first design. Nothing recorded. Voice: the Google voice. Plates: one new, eight reused (see Assets). No official figures. Sensitive-topic rule applied: no graphic injury imagery; head and neck injuries handled by "call for medical help" only; concussion kept to the general rule.

Narration 6,152 characters (14 scene files, counted by script from lines starting "> " with bold markers removed), about 568 s including holds, two countdowns and the 45 s notes hold.

Scope: the twentieth video of the Year 12 focus area "Training for improved performance", first of two on injury. Course brief `../hms-design-brief.md`. Route entry **hms-y12-m4-v20**. Pre-design pack `../pre-design/hms/hms-y12-m4-v20.md`. Site page `C:/Users/kygs/teaching-app-fix/subjects/health-movement-science/year12/module4/lesson20.sa.html` (read in full, 24 Nov; sha256 `9a09aee4e3e4fabd48f1d26ff21a06ec04f65560507ea7220c620f6fc7b71dc4`). Previous design `hms-y12-m4-v19.md`.

## Decisions

- **File name and route id.** Route entry **hms-y12-m4-v20**, playlist order 82, site lesson Year 12 module 4 L20 ("Sports injuries: classification and assessment"). Opening (route): "the load chart from v19 spikes: an injury" (hms-y12-m4-v19's final frame). Start: from three injuries in one match. Stop: when students can classify an injury on three axes (cause, tissue, onset) and say what each axis tells you, name and distinguish common injuries (sprain against strain), run TOTAPS in order with its stop rules, say what TOTAPS is not, and link classification to prevention. Next handoff: hms-y12-m4-v21, which opens on "the TOTAPS gate from v20 stops at step 1: the player comes off". Lesson key **hms12b20**.
- **Syllabus.** Inquiry question "How do individuals train for sustained movement and performance?". Dotpoint **hms-y12-fa2-g5-d4** (p33) "Explain the management and prevention of sporting injuries", sub-points **s1** "classification of sports injuries, including direct and indirect, soft and hard tissue or overuse" and **s2** "assessment of injuries, including the Talk, Observe, Touch, Active movement, Passive movement, Skill (TOTAPS) test", owned here (s3 to s5 are v21's). The dotpoint's "prevention" is opened here through classification (6) and completed in v21.
- **One main question:** *How are sports injuries classified, and how does TOTAPS decide whether a player can go back on?* (the route's question, kept). Heading: "How are injuries classified, and can the player go back on?" (the hms-y12-m4-v19 Next chip's words).
- **Case.** The site's warm-up (three players down in one match: a tackled shoulder; a knee that gives way turning with nobody near; three weeks of shin pain, now unable to run; the first action for each; what the difference is and whether it changes what you do) is the hook (1), answered in 2. Card 04's three axes and three-player table shape 2; card 05 shapes 3; card 06 shapes 4; card 07 shapes 5; card 04's "the classification is a hypothesis about the cause, and the cause is what you can change" shapes 6, joined to v19's load spike. Attempts are unseen: attempt 1 is two unseen injuries (a fast bowler's gradually worsening lower-back pain after a jump in bowling workload; a hockey player struck on the shin by a ball: classify on three axes and give one prevention each, 4 marks); attempt 2 is an unseen TOTAPS run on a rolled ankle (decide whether the player returns, 3 marks).
- **Scope.** Hook (1); three axes of classification, and the hook classified (2); the injuries and the confusions (3); TOTAPS, step by step (4); what TOTAPS is not, and the judgement it can't make (5); classification points to prevention (6); memory (7); two unseen items (8a to 8d); decision rule and handoff (9); key notes (10).
- **Syllabus coverage check (root condition, 24 Nov).** s1: direct and indirect, soft and hard tissue, overuse (2, 3, 8a); s2: each TOTAPS step with what it tests and when it stops (4, 8c); "management and prevention" opened (5's refer-or-stop decisions, 6's prevention by classification), completed in v21. Owned content is taught.
- **Left to the site page for length (recorded per the root condition).** The contusion row (one silent chip); the odd-one-out and matching items; Activity 2; the "two to six weeks" load history is spoken as "a few weeks earlier".
- **What this video does not teach (recall, one sentence each).** First aid's role and limits (DRSABCD, calling for help): Year 11 (**hms-y11-m2-v08**), recalled in one sentence in 5. The load chart and its spike: **v19**, reused in 1 and 6. Force absorption and landing: **v17**, recalled in 6. Duty of care: **v01**, **v09**, recalled in 5. Warm-up and load progression: **v06**, **v07**, recalled in 6. Management, rehabilitation and return to play: **v21**.
- **Site alignment.** Kept in substance: the warm-up (1); the three axes (cause: direct and indirect; tissue: soft and hard; onset: acute and overuse) and what each tells you, "the same injury is classified on all three axes at once", the three players classified, "the classification is a hypothesis about the cause, and the cause is what you can change" (2, 6); the injury table (sprain, strain, contusion, fracture, dislocation, overuse), "Sprain is ligament; strain is muscle or tendon", "direct and indirect describe the cause, not the severity", never relocate a dislocation, the overuse load history (3); TOTAPS's six steps with what each tests and its stop rule, "the order is deliberately escalating", the skill test progressive, stopping early as a correct outcome (4); TOTAPS is not a diagnosis and not for head, neck or spinal injury or an unconscious athlete; the three judgement situations (mild pain throughout; the athlete insists; any suspicion of concussion: no return that day and medical clearance) (5).
- **Site errors found (this read).** None.
- **Added beyond the site.** (a) A **three-axis classifier** (`InjuryAxes`, in the lesson folder): three sliders (cause, tissue, onset), each with a "tells you" tag (prevention target, urgency, where the cause lies); each injury token sets all three at once. (b) The **TOTAPS gate** (`TotapsGate`, new in `hms-shared`, the route's model, reused in v21): six gates in order, each with "tests" and "stop if" tags; a token passes or stops, and stopping routes it off the field; the Skill gate unfolds into a progressive ladder (stand, walk, jog, run, change direction, the skill). (c) A **red-flag bypass**: a separate lane above the gate for head, neck or spinal signs, unconsciousness or suspected concussion, going straight to "call medical help" and "no return today". (d) A **sprain and strain pair** on painted anatomy: the new ankle-ligament plate with a coded overstretch on the lateral ligament, and the registered hamstring tear overlay on the painted thigh. (e) v19's **load chart** (the route's opening) with the spike tagged "overuse risk" and a few-weeks lag to the shin token.
- **Entry knowledge.** hms-y12-m4-v19 (the load chart); hms-y12-m4-v17 (force absorption); hms-y12-m4-v09 (duty of care; emergency planning); Year 11 HMS (recalled in one sentence): first aid's role and limits. Not assumed: direct and indirect injury, soft and hard tissue, acute and overuse, sprain, strain, contusion, fracture, dislocation, TOTAPS.
- **Terms.** Direct, indirect, soft tissue, hard tissue, acute, overuse (2); sprain, strain, fracture, dislocation (3); TOTAPS (4); concussion (5). Each gloss writes beside its part.
- **Naming.** No real players, clubs, competitions or concussion tools by name.
- **Visual system.** Model introduced here: the **TOTAPS gate**. Reused: v19's load chart (opening and 6), v17's landing linkage (tiny in 6), Year 11's first aid gate track (tiny in 5). Plates: one new, `hms-ankle-ligaments-v1.png` (the bones and ligaments of the ankle from the outer side, cut above the ankle with no foot skin or toes visible beyond the bones, the lateral ligaments clearly painted: the sprain, 3, 8c and v21). Reused: painted HMS plates opened and inspected 24 Nov (contact sheet): `hms-thigh-hamstrings-v1.png` (the hamstrings of a thigh, no skin) with the registered `hms-hamstring-tear-overlay-v1.png` (a small red tear mark positioned by `hms-hamstrings-registration-v1.json`: the strain, 3), `hms-knee-synovial-cutaway-v1.png` (a knee joint cut open: the knee that gives way, 1 and 2), `hms-shoulder-hip-sockets-v1.png` (a shoulder socket and a hip socket with their bones: the dislocation, 3), `hms-empty-training-field-v1.png` (a grass field at dusk: the match, 1 and 4), `hms-first-aid-kit-v1.png` (an open first aid kit and a defibrillator case on a bench: calling for help, 5); Biology, opened and inspected 24 Nov: `m8-leg-bones-normal-v1.png` (femur, tibia and fibula in front view: the shin, 1 and 2; a fracture shown as a coded crack annotation on the tibia, not a painted break). No people, hands or faces: players are tokens; anatomy is regional only.
- **Painted HMS plates inspected (24 Nov).** `hms-thigh-hamstrings-v1.png`, `hms-hamstring-tear-overlay-v1.png`, `hms-knee-synovial-cutaway-v1.png`, `hms-shoulder-hip-sockets-v1.png`, `hms-empty-training-field-v1.png`, `hms-first-aid-kit-v1.png`.
- **Attempt.** 8a: two unseen injuries (4 marks). 8c: an unseen TOTAPS run (3 marks).
- **Memory aids.** The site's "Sprain is ligament; strain is muscle or tendon" and its TOTAPS points (written "TOTAPS escalates, and stopping early is a correct result"). Scene 7, after 2 to 6.
- **A mistake/fix beat** is in 3 ("a sprain is a muscle injury", crossed). Other fixes: "indirect means less serious" crossed in 3; "pop the shoulder back in" crossed in 3; "TOTAPS tells you what's torn" crossed in 5; "they feel fine, let them play" crossed in 5; "treat the shin and send them back" crossed in 6.
- **Reuse:** v19's handoff frame (opening); v19's load chart; v17's landing; Year 11's first aid.
- **Colour key.** Axes: cause slate, tissue teal, onset amber; TOTAPS gates green when passed, red-orange when stopped (not red); red-flag lane orange; sprain overlay amber on the ligament; strain tear as painted; green answers; red only for crossed mistakes.
- **Type sizes.** As the course brief.
- **Anchor.** The TOTAPS gate (4, 5, 8d, 9) and the three-axis classifier (2, 6, 8b).
- **Simulation.** None physiological. The classifier and gate are logic; the load chart is v19's illustrative series.
- **Board stages.** (1) The load spike becomes three tokens on the field, scene 1; (2) the three-axis classifier, scene 2; (3) the injury plates and confusions, scene 3; (4) the TOTAPS gate, scene 4; (5) the red-flag lane and three judgement cases, scene 5; (6) classification to prevention, scene 6; (7) memory, questions, handoff and notes.
- **Open decisions for root.** (1) Approve one new plate, `hms-ankle-ligaments-v1.png` (regional anatomy only, no foot skin or toes; reused in v21). (2) Confirm the coded crack annotation on the Biology tibia plate for "fracture" (recommended: accept; it is an annotation on an approved anatomical plate, not a coded object icon).

Main question: *How are sports injuries classified, and how does TOTAPS decide whether a player can go back on?*
Entry knowledge: hms-y12-m4-v09, v17, v19; Year 11 HMS (recalled).
Stops after: classifying any injury on cause, tissue and onset and saying what each tells you; distinguishing sprain, strain, fracture, dislocation and overuse injury; running TOTAPS in its escalating order with stop rules; stating that TOTAPS is not a diagnosis and not for head, neck, spinal or concussion cases; linking classification to prevention.
Handoff: management, rehabilitation and return to play (route entry hms-y12-m4-v21). **Handoff frame (hms-y12-m4-v21 opens from it):** the TOTAPS gate at the centre; a token stopped at the first gate, "Talk", which glows red-orange with the tag "stop: the player comes off" (38 px); a dashed path leads from the gate off the field to an empty sideline bench marked "now what?"; the "Next" chip at the lower right reads "Next: how does an injured player get back to playing safely?"; this video's heading at the top left.

## Script and shots

14 scene files (1, 2a, 2b, 3 to 7, 8a to 8d, 9, 10). No people, hands or faces appear at any point.

### 1. hook (three players down)
> So, how are injuries classified, and can the player go back on? Three players go down in the same match. One is tackled and holds their shoulder. One turns sharply with nobody near them, and their knee gives way. One has had a sore shin for three weeks and now can't run on it. Write down your very first action for each. Then decide what the real difference between the three injuries is, and whether it changes what you do.

Visual: opens on hms-y12-m4-v19's handoff frame (the load chart with one week spiking to about twice the trend, a red-orange "injury" marker at the peak, a grey "what kind? can they go back on?" tag; the Next chip). The Next chip leaves and the heading rewrites to "How are injuries classified, and can the player go back on?" (60 px). The chart shrinks to the top-left corner; `hms-empty-training-field-v1.png` widens across the board. Three tokens drop one per cue (26 px): on "tackled and holds their shoulder" token 1 with a contact flash from a second counter, tag "shoulder", `hms-shoulder-hip-sockets-v1.png` tiny (shoulder half); on "with nobody near them, and their knee gives way" token 2 alone, a change-of-direction arrow, tag "knee", `hms-knee-synovial-cutaway-v1.png` tiny; on "a sore shin for three weeks" token 3 with a three-week strip, tag "shin", `m8-leg-bones-normal-v1.png` tiny. On "your very first action for each" three empty slots (30 px); on "whether it changes what you do" a fourth slot with a grey dashed outline. Hold three seconds, quiet, with the slots lit (Revision 2: 2 s added so students can write).

### 2a. three ways to classify
> Injuries are classified three ways, and every injury gets all three at once. Cause: a **direct** injury comes from an outside force, like a collision or a blow. An **indirect** injury comes from forces inside the body, like a hamstring tearing while sprinting. Cause tells you what might prevent it. Tissue: **soft tissue** is muscle, tendon, ligament and skin. **Hard tissue** is bone, including fractures and dislocations. Tissue tells you how urgent it is. And onset: an **acute** injury happens at one moment. An **overuse** injury builds up from repeated loading without enough recovery. Onset tells you where the real cause lies. Some books list overuse as a third cause instead. Either way, say it built up over time.

Visual: board change to the classifier (solid from its first frame): `InjuryAxes`, three sliders stacked: "cause" (slate), "tissue" (teal), "onset" (amber), each with an empty "tells you" tag at the right. On "direct" the cause slider's left end labels, gloss "direct: an outside force" (26 px), a collision arrow; on "indirect" the right end, gloss "indirect: forces inside the body" (26 px), the painted thigh tiny; on "Cause tells you what might prevent it" the tag fills "prevention target". On "soft tissue" the tissue slider's left end, gloss "soft tissue: muscle, tendon, ligament, skin" (24 px); on "Hard tissue" the right end, gloss "hard tissue: bone, fractures, dislocations" (24 px); on "Tissue tells you how urgent it is" tag "urgency". On "acute" the onset slider's left end, gloss "acute: at one moment" (24 px); on "overuse" the right end, gloss "overuse: builds from repeated loading" (24 px); on "Onset tells you where the real cause lies" tag "where the cause lies"; on "Some books list overuse as a third cause" a small grey chip "also taught: direct, indirect, overuse" (22 px) beside the cause slider; on "built up over time" the overuse end of the onset slider pulses. Settle one second on the three sliders and their "tells you" tags.

### 2b. the hook, classified on all three
> Now the hook. The tackled shoulder is direct, possibly hard tissue, and acute, so stop and refer. The knee is indirect, likely a ligament, and acute. And the shin is indirect and overuse, so the problem is in the training, not just the leg.

Visual: The three sliders stay, their glosses grey, the "tells you" tags bright. On "Now the hook" the three tokens line up; on "The tackled shoulder is direct, possibly hard tissue, and acute" token 1 sets all three sliders at once (direct, hard?, acute), a verdict chip "stop and refer"; on "The knee is indirect, likely a ligament, and acute" token 2 sets (indirect, soft, acute); on "the shin is indirect and overuse" token 3 sets (indirect, either, overuse), a verdict chip "a training problem". The hook's slots fill (24 px): "shoulder: stop, no movement test", "knee: assess, likely off", "shin: off, and change the load", "yes: the class sets the action". Hold one second.

### 3. the injuries, and two confusions
> Precise names matter. A **sprain** is a ligament injury, a joint forced past its normal range, like rolling an ankle. A **strain** is a muscle or tendon injury, from an overloaded or poorly controlled contraction or stretch, often at speed or when tired. Sprain is ligament, strain is muscle or tendon. One letter apart, and marks are lost every year. A **fracture** is a broken bone. It may be obvious, or not, so persistent pain over a bone needs checking. A **dislocation** forces a bone out of its joint, often at the shoulder or a finger, with visible deformity. Never try to put it back. And remember, direct and indirect describe the cause, not how serious it is. A non-contact knee injury can be far worse than a knock.

Visual: board change to the injury plates (solid from its first frame): four slots. On "sprain" the new `hms-ankle-ligaments-v1.png` fills slot 1, gloss "sprain: ligament injury" (28 px); on "a joint forced past its normal range" a coded overstretch arrow on the lateral ligament, the ligament tinting amber. On "strain" `hms-thigh-hamstrings-v1.png` fills slot 2 with the registered `hms-hamstring-tear-overlay-v1.png` appearing, gloss "strain: muscle or tendon injury" (28 px); on "often at speed or when tired" two small tags. On "Sprain is ligament, strain is muscle or tendon" amber hand tag (34 px) linking the two plates; a chip "a sprain is a muscle injury" writes and is crossed in red. On "fracture" `m8-leg-bones-normal-v1.png` fills slot 3 with a coded crack annotation on the tibia, gloss "fracture: a broken bone" (26 px); on "persistent pain over a bone needs checking" tag "check, don't reassure". On "dislocation" `hms-shoulder-hip-sockets-v1.png` fills slot 4 (shoulder half), the painted humeral head greyed (full-ink grey) with a small tag "normal position", and on "forces a bone out of its joint" a coded outline of the head slides down and forward out of the socket, gloss "dislocation: a bone forced out of its joint" (26 px); on "Never try to put it back" a chip "pop the shoulder back in" writes and is crossed in red. A silent fifth chip "contusion: a bruise from a direct blow". On "direct and indirect describe the cause, not how serious it is" a chip "indirect means less serious" writes and is crossed in red; on "A non-contact knee injury can be far worse than a knock" the knee plate tiny with a large severity bar beside a small bruise bar. Hold one second.

### 4. TOTAPS, step by step
> **TOTAPS** is an on-field check for deciding whether an injured player can go back on. Its order is the point: each step asks a bit more than the last, so a serious injury is found before it's made worse. Talk: ask what happened, where it hurts, what they felt or heard. That gives the mechanism, and shows if they're alert. Observe: look at the area and compare it with the other side, for swelling or deformity. Touch: press gently, starting away from the pain and moving toward it, feeling for tenderness, heat, or pain right over a bone. Active movement: the player moves the joint themselves. Passive movement: you move it gently for them, through its range. And Skill: progressively harder movements, stand, walk, jog, run, change direction, then the actual skill. At any step, if it fails, stop. They don't go back on. Stopping early is a correct result, not a failed test.

Visual: board change to the TOTAPS gate (solid from its first frame): `TotapsGate`, six gates in a row across the training field plate, each with a "tests" tag above and a "stop if" tag below, a token waiting at the left. On "TOTAPS" the gloss "TOTAPS: talk, observe, touch, active, passive, skill" (28 px), the six letters lighting in turn. On "each step asks a bit more than the last" a rising staircase line under the gates, tag "escalates". Gates label one per cue (24 px): on "Talk" "T talk", tests "mechanism, alert?", stop "head or neck, confused"; on "Observe" "O observe", tests "swelling, deformity", stop "deformity"; on "Touch" "T touch", tests "tenderness, heat", stop "pain over bone"; on "Active movement" "A active", tests "can they move it?", stop "can't, or severe pain"; on "Passive movement" "P passive", tests "range without muscle", stop "range blocked, severe pain"; on "Skill" "S skill", the gate unfolding into a six-rung ladder writing one per cue: on "stand" "stand", on "walk" "walk", on "jog" "jog", on "run" "run", on "change direction" "change direction", on "the actual skill" "the skill". On "if it fails, stop" the token passes three gates green, then stops at "active" red-orange and a dashed path leads off the field. On "Stopping early is a correct result" amber hand tag "stopping early is correct" (34 px). Hold one second.

### 5. what TOTAPS isn't, and the calls it can't make
> Two things TOTAPS is not. It's not a diagnosis. It doesn't tell you which structure is damaged. Only qualified assessment can. And it's not for a suspected head, neck or spinal injury, or an unconscious player. Then you use the first aid steps from Year 11, don't move them, and call for medical help. Some calls are still judgement. A player gets through every step with mild pain throughout and wants to keep going. At school or club level, with no medical staff to recheck them, they don't return. A player insists they're fine and the game matters. Duty of care doesn't bend to what the player wants. And any suspected **concussion**, a brain injury from a knock: no return that day, and medical clearance before playing again. When in doubt, sit them out.

Visual: board change to the red-flag lane (solid from its first frame): the TOTAPS gate small across the middle; an orange lane above it, "red flags", bypassing every gate straight to a "call medical help" box with `hms-first-aid-kit-v1.png` tiny. On "It's not a diagnosis" a chip "TOTAPS tells you what's torn" writes and is crossed in red; on "Only qualified assessment can" a grey "medical assessment" box at the end of the gate. On "a suspected head, neck or spinal injury, or an unconscious player" three orange chips enter the red-flag lane; on "the first aid steps from Year 11" Year 11's first aid gate track tiny, grey recall tag "earlier"; on "don't move them" a "do not move" tag. Three judgement cards write one per cue (26 px): on "mild pain throughout" card "mild pain all through", verdict on "they don't return" "school or club: no return"; on "A player insists they're fine" card "player insists", a chip "they feel fine, let them play" writes and is crossed in red, verdict on "Duty of care doesn't bend" "duty of care holds", grey recall tag "earlier"; on "concussion" the gloss "concussion: a brain injury from a knock" (26 px), card "suspected concussion" enters the red-flag lane, verdicts write on "no return that day" "no return today" and on "medical clearance before playing again" "medical clearance first". On "When in doubt, sit them out" amber hand tag (34 px). Hold one second.

### 6. classification points to prevention
> Classification isn't just labelling. It's a guess about the cause, and the cause is what you can change. Indirect ones by conditioning, warm-ups, and landing and change-of-direction technique, which spreads force over more time, as you saw earlier. And overuse injuries almost always have a history: a sudden jump in load a few weeks earlier, a new surface or new shoes, or a fast return from a break. Like the spike on the load chart from last time. So treating the sore shin and sending the player back, without changing the load, just brings the injury back.

Visual: board change to prevention (solid from its first frame): the classifier small at the left, three prevention columns at the right. On "a guess about the cause" amber tag "classification = hypothesis about cause" (28 px). Column 1 (slate, "direct") fills silently (24 px): "protective gear", "contact rules", "collision technique". On "Indirect ones" column 2 (teal): on "conditioning" "conditioning", on "warm-ups" "warm-up", grey tag "earlier", on "landing and change-of-direction technique" "landing, cutting technique", the landing linkage from earlier tiny with its lower peak, grey tag "earlier". On "overuse injuries almost always have a history" column 3 (amber): on "a sudden jump in load a few weeks earlier" "load spike", v19's load chart tiny with its spike and a lag arrow pointing a few weeks later to the shin token; on "a new surface or new shoes" "surface, shoes"; on "a fast return from a break" "fast return", grey tag "earlier". On "treating the sore shin and sending the player back" a chip "treat the shin and send them back" writes and is crossed in red; on "just brings the injury back" a loop arrow from the shin token back to the spike. Hold one second.

### 7. memory
> Two things to remember. Sprain is ligament, strain is muscle or tendon. And TOTAPS escalates, and stopping early is a correct result.

Visual: board change to the memory card (solid from its first frame): the ankle and thigh plates small at the left beside the TOTAPS gate, beside a dark-ink framed card (52 px): "Sprain is ligament; strain is muscle or tendon" (written with "Sprain is ligament, strain is muscle or tendon") and "TOTAPS escalates; stopping early is a correct result" (written with "TOTAPS escalates, and stopping early is a correct result"). This card returns beside the key notes. Hold half a second.

### 8a. attempt one (classify two injuries)
> Two exam questions. First. A fast bowler develops lower-back pain that has worsened gradually over five weeks, after a big jump in the number of overs bowled. A hockey player is struck on the shin by the ball, with immediate swelling and bruising. Classify each injury on all three axes, and give one prevention strategy for each. Pause here to answer.

Visual: the board clears. `QuestionScene`: the card arrives in one move with its whole text (38 px), tagged "HSC-style question, written for HSCScience". Stem: "Injury A: a fast bowler's lower-back pain has worsened gradually over five weeks, following a large increase in the number of overs bowled. Injury B: a hockey player is struck on the shin by the ball, with immediate swelling and bruising." Demand: "Classify EACH injury as direct or indirect, soft or hard tissue, and acute or overuse, and recommend one prevention strategy for each. (4 marks)" Picture: two empty three-slider classifiers. **The countdown ring is shown full from "Pause here to answer." and runs for 10 seconds.** The whole card stays on screen during the countdown and after it.

### 8b. feedback, item one
> The bowler's injury is indirect, overuse, and could be soft or hard tissue, since persistent back pain needs checking for a stress injury. Prevent it by managing bowling workload, increasing gradually. The hockey injury is direct, soft tissue, acute: a contusion. Prevent it with shin guards. The classic mistake is classifying on one axis only.

Visual: `FeedbackScene`: the card shrinks to the top; the two classifiers set. A green-framed four-line answer writes one per cue (30 px): on "The bowler's injury is indirect, overuse" "1 A: indirect, overuse; tissue: check (possible stress injury)"; on "managing bowling workload, increasing gradually" "2 prevent: workload limits, gradual increase", v19's chart tiny; on "The hockey injury is direct, soft tissue, acute" "3 B: direct, soft, acute (contusion)"; on "Prevent it with shin guards" "4 prevent: shin guards (protective equipment)". On "classic mistake" a chip "one axis only" writes and is crossed in red, red hand tag "all three axes" (34 px). Settle one second.

### 8c. attempt two (the rolled ankle)
> Second. A soccer player rolls an ankle. They talk clearly and describe the ankle rolling outward. You see swelling on the outer side, with no deformity. It's tender to touch, but not over the bone. They can move it actively with some pain, and passively through full range. They walk, but limp badly when they try to jog. Using TOTAPS, should they return? Pause here to answer.

Visual: the board clears. The card arrives in one move with its whole text (38 px), tagged "HSC-style question, written for HSCScience". Stem: "A soccer player rolls their ankle outward. Talk: alert, describes the mechanism. Observe: swelling on the outer ankle, no deformity. Touch: tender over the outer ankle, not over bone. Active: moves it with some pain. Passive: full range. Skill: walks, but limps badly on attempting to jog." Demand: "Using TOTAPS, decide whether the player should return to the game, justifying your decision with reference to the steps, and identify the likely injury. (3 marks)" Picture: the TOTAPS gate empty, the ankle plate small. **The countdown ring is shown full from "Pause here to answer." and runs for 10 seconds.** The whole card stays on screen during the countdown and after it.

### 8d. feedback, item two
> They pass talk, observe, touch, and the movement tests, but fail the skill step at jogging. So they don't return. Stopping there is the correct result. The likely injury is a sprain of the outer ankle ligaments. The classic mistake is sending them back because they passed most of the steps.

Visual: `FeedbackScene`: the card shrinks to the top; the token runs the gate. A green-framed three-line answer writes one per cue (30 px): on "They pass talk, observe, touch, and the movement tests" "1 T, O, T, A, P passed (with pain)"; on "fail the skill step at jogging" "2 S fails at jog: no return", the token stopping red-orange at the jog rung; on "a sprain of the outer ankle ligaments" "3 likely lateral ankle sprain (ligament)", the ankle plate's ligament amber. On "classic mistake" a chip "passed most steps, so back on" writes and is crossed in red, red hand tag "one fail is enough" (34 px). Settle one second.

### 9. decision rule and handoff
> So classify on cause, tissue and onset, name the injury precisely, and run TOTAPS in order, stopping the moment a step fails. Now take a player whose check stops at the very first step. They come off. What happens between the sideline and their next game? How does an injured player get back to playing safely?

Visual: board change to the TOTAPS gate. Three chips write on (38 px): "three axes" on "classify on cause, tissue and onset", "precise name" on "name the injury precisely", "TOTAPS in order" on "run TOTAPS in order". On "a player whose check stops at the very first step" the chips leave and a token stops at the "Talk" gate, which glows red-orange with the tag "stop: the player comes off" (38 px); on "They come off" a dashed path leads off the field to an empty sideline bench; on "between the sideline and their next game" a grey tag on the bench "now what?". The "Next" chip slides in: "Next: how does an injured player get back to playing safely?" **This is the handoff frame; hms-y12-m4-v21 opens from it.** Hold half a second.

### 10. key notes (quiet, hold about 45 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. Classify on all three: direct/indirect, soft/hard tissue, acute/overuse.
2. Cause points to prevention; tissue to urgency; onset to where the cause lies.
3. Sprain: ligament. Strain: muscle or tendon. Never relocate a dislocation.
4. TOTAPS: talk, observe, touch, active, passive, skill; stop at any failed step.
5. Not a diagnosis. Head, neck, spine, concussion: medical help, no return today.

Memory card (the scene 7 card) beside the notes. Each bullet one line of at most 86 characters. Hold about 45 seconds in all.

## Practice question and feedback

Two unseen items (8a to 8d), "Pause here to answer." and a 10 s countdown each, cards on screen during and after; marks on the card; tag "HSC-style question, written for HSCScience". Neither the bowler and hockey player in 8a nor the ankle case in 8c is worked in the body (the body works the hook's shoulder, knee and shin).

1. (8a, 4 marks.) A: indirect, overuse (Revision 2: "overuse" given as the cause, without "indirect", also earns the mark, because some texts teach direct, indirect and overuse as three causes); tissue uncertain (possible bone stress injury, needs assessment) (1); prevention: workload management with gradual increases (1). B: direct, soft tissue, acute (contusion) (1); prevention: protective equipment (shin guards) (1). Classic mistake crossed: classifying on one axis only.
2. (8c, 3 marks.) Talk, observe, touch, active and passive steps passed with pain (1); skill fails at jogging, so the player does not return; stopping is the correct result (1); likely lateral ankle ligament sprain (1). Classic mistake crossed: returning because most steps were passed.

Feedback spoken lengths about 25 s (8b) and 20 s (8d) by script; time the exact audio.

## Numbers or facts to verify

Self-check (24 Nov). The Codex science check must confirm each before voicing. No figures on screen.
- **Overuse as cause or onset (2; Revision 2, science-check flag kept, root ruling 9).** The syllabus lists "direct and indirect, soft and hard tissue or overuse"; the video uses three axes and says once, "Some books list overuse as a third cause instead. Either way, say it built up over time." The science check should confirm the marking accepts both readings.
- **Classification (2, 3).** Direct and indirect by cause; soft and hard tissue; acute and overuse; sprain (ligament), strain (muscle or tendon), contusion, fracture, dislocation; never attempt to relocate a dislocation.
- **TOTAPS (4).** The six steps, what each tests, and the stop rules as the site sets them; the skill step progressive.
- **Red flags (5).** Head, neck or spinal injury, unconsciousness: do not move; call for medical help. Suspected concussion: no return to play on the day; medical clearance before return (general guidance; no named protocol). Science-check flag (kept, root ruling 9): confirm the concussion wording against current Australian guidance.
- **Overuse (6).** Load spikes, surface or footwear changes and fast returns as common histories; the site's "two to six weeks earlier" spoken as "a few weeks".
- **8a.** Fast bowlers' lumbar bone stress injuries are associated with high bowling workloads (general).
- **No em dashes** in this file (searched by script).

## Memory aid check

- **"Sprain is ligament; strain is muscle or tendon."** Assumption: standard terminology; some injuries involve both (a severe ankle injury can include tendon damage), which assessment, not TOTAPS, decides.
- **"TOTAPS escalates; stopping early is a correct result."** Assumption: no red flags are present; red flags bypass TOTAPS entirely (scene 5).

## Narration length estimate

Revision 2 count (24 Nov; by script with the build parser rules: only lines starting "> ", joined with a space, bold markers removed): **6152 characters**, 14 scene files. At 13.3 characters per second the speech is about 463 s; add 28 s of padding (2 s per scene) and 77 s of stated holds, settles, the two 10 s countdowns and the rest of the quiet notes hold: **about 568 s**.

| Scene | Characters |
| --- | --- |
| 1. hook (three players down) | 425 |
| 2a. three ways to classify | 700 |
| 2b. the hook, classified on all three | 240 |
| 3. the injuries, and two confusions | 711 |
| 4. TOTAPS, step by step | 876 |
| 5. what TOTAPS isn't, and the calls it can't make | 756 |
| 6. classification points to prevention | 561 |
| 7. memory | 133 |
| 8a. attempt one (classify two injuries) | 352 |
| 8b. feedback, item one | 345 |
| 8c. attempt two (the rolled ankle) | 377 |
| 8d. feedback, item two | 291 |
| 9. decision rule and handoff | 310 |
| 10. key notes (quiet, hold about 45 seconds) | 75 |

Reserve cuts: (1) scene 3, the fracture sentence (keep the plate silent); (2) scene 6, the direct-prevention sentence; (3) scene 5, the "player insists" case. Do not cut below 5,500 without replacing content.

## Assets

Have: HMS painted, inspected 24 Nov: `hms-thigh-hamstrings-v1.png`, `hms-hamstring-tear-overlay-v1.png` (with `hms-hamstrings-registration-v1.json`), `hms-knee-synovial-cutaway-v1.png`, `hms-shoulder-hip-sockets-v1.png`, `hms-empty-training-field-v1.png`, `hms-first-aid-kit-v1.png`; Biology, inspected 24 Nov: `m8-leg-bones-normal-v1.png`. Coded: tokens and contact flash, `InjuryAxes` with three sliders and "tells you" tags, verdict chips, overstretch arrow, crack annotation, displaced-ball outline, severity bars, `TotapsGate` with tests and stop tags and the skill ladder, red-flag lane, judgement cards, prevention columns, lag arrow, sideline bench (handoff), question cards, countdown. Reused coded: v19's `LoadChart`; v17's landing linkage; Year 11's first aid gate track. No people.

Need (new plate): `hms-ankle-ligaments-v1.png`.

Kit gaps: `TotapsGate` in `hms-shared` (v21 reuses it); `InjuryAxes` in the lesson folder.

## Codex asset brief (HMS-Y12-B20, ankle ligaments)

Standing rules as v01's brief: house watercolour style, transparent PNG with true alpha, never stretched, no readable text, no brands or logos. Every plate: no people, hands or faces anywhere in the image.

1. `hms-ankle-ligaments-v1.png` (1600 x 1800): an anatomical regional plate of the ankle seen from the outer (lateral) side: the lower ends of the tibia and fibula cut cleanly above the ankle, the talus and calcaneus, and the lateral ligaments (anterior talofibular, calcaneofibular, posterior talofibular) clearly painted as distinct bands, in the house watercolour style matching `hms-knee-synovial-cutaway-v1.png`. Bones and ligaments only: no skin, no toes beyond the bones, no foot outline, no hands or faces; no labels or text.

Hand-in to `status.md`; provenance `docs/production/claude-pm/assets/hms-y12-b20-provenance.json`.

## Codex learning review and science check brief (HMS-Y12-B20)

- **Learning review:** trace from m4-v19 as a student who did not watch our Year 11 videos. Does the classifier show that every injury takes all three axes at once, and that each axis tells you something different? Is sprain against strain made unforgettable on the two plates? Does the TOTAPS gate make the escalating order and the stop rules visible, with the skill ladder? Is the red-flag lane clear without alarm? Does classification lead to prevention, with the overuse lag tied to v19's spike? Are both attempts unseen?
- **Science check:** every item in "Numbers or facts to verify", especially the concussion rule's wording and the TOTAPS stop criteria.

## Codex error-check brief (HMS-Y12-B20, after the reviews)

Error-only: every quoted cue appears word for word in its scene in spoken order; the opening matches hms-y12-m4-v19's handoff frame and the closing matches hms-y12-m4-v21's route opening (the TOTAPS gate stops at step 1: the player comes off); no real players, clubs or named concussion tools; no people, hands or faces (regional anatomy only, no foot skin); no "Year 11" or "Year 12" label on screen (narration only); no em dash, no U+2061; no module number or course label on screen.

## YouTube metadata (draft)

- Title: "Sports Injuries: Classification and the TOTAPS Assessment | HSC Health and Movement Science"
- Description:

"Full lesson, notes and practice questions: https://hscscience.com.au/subjects/health-movement-science/year12/module4/lesson20.sa.html

How are sports injuries classified, and how does TOTAPS decide whether a player can go back on? Classifying injuries as direct or indirect, soft or hard tissue, and acute or overuse, and what each tells you; sprains, strains, fractures, dislocations and overuse injuries; the TOTAPS assessment step by step, with its stop rules; what TOTAPS is not, and why suspected concussion means no return that day; and how classification points to prevention. Includes two exam-style questions with brief feedback. All questions are written for HSCScience in the HSC style; they are not official NESA questions. This video is general education; in any injury, seek qualified help.

Health and Movement Science 11-12 (2023 syllabus), Year 12: Training for improved performance.
Syllabus content (NSW Health and Movement Science 11-12, 2023):
"Explain the management and prevention of sporting injuries"
"classification of sports injuries, including direct and indirect, soft and hard tissue or overuse"
"assessment of injuries, including the Talk, Observe, Touch, Active movement, Passive movement, Skill (TOTAPS) test"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/pdhpe/health-and-movement-science-11-12-2023

Previous: How does technology improve training, and how can we tell?
Next: How does an injured player get back to playing safely?

#HealthAndMovementScience #HSC #HSCScience"

## Open decisions

- **One new plate (recommended: approve).** `hms-ankle-ligaments-v1.png`; regional bones and ligaments only.
- **Fracture annotation (recommended: accept).** A coded crack on the Biology tibia plate rather than a new painted fracture plate.

## Build ids

Lesson key `hms12b20`; folder `src/explainer/lessons/hms-y12-m4-v20`; build folder `docs/production/claude-pm/lessons/hms12b20`. Imports `hms-shared` (`LoadChart`, `SegmentLinkage`, Year 11's first aid gate track; new `TotapsGate`); `InjuryAxes` in the lesson folder.

Scene headings (13): hook, classify, injuries, totaps, limits-judgement, prevention, memory, attempt, feedback-one, attempt-two, feedback-two, handoff, key-notes.

Holds and transitions as hms-y12-m3-v01. Every teaching scene is a board change.

## Review notes (author, not learner copy)

- **Teaching checks.** Causes: why each classification axis tells you something different (2); why the sprain and strain distinction changes management (3); why TOTAPS escalates and why a failed step ends it (4); why TOTAPS cannot diagnose or handle red flags, and why duty of care overrides the player's wish (5); why an overuse injury returns unless the load changes (6). Attention: three players down in one match. Visual medium: three sliders set by one token at once; two plates one letter apart; six gates with a staircase under them and a ladder inside the last; a red-flag lane that bypasses everything; a lag arrow from v19's spike to a sore shin. Apply: two unseen injuries (8a); an unseen ankle run through the gate (8c). Remember: sprain is ligament; TOTAPS escalates.
- **Overlap.** v21 takes management, rehabilitation and return to play (the gate reused, the ankle plate reused); v22 closes the course with drugs in sport.
- **No em dashes** in this file (searched by script).

## Revision 2: learning review resolved (24 Nov 2026)

Review: `../checks/hms-y12-m4-v20-learning-review.md` and the module summary `../checks/hms-y12-m4-learning-review-summary.md`. Written design only; nothing voiced or built.

1. **Should fix, scene 2 carried six terms and three classifications.** Split at "Now the hook" into 2a (the three axes, ending on a one-second settle on the sliders and their "tells you" tags) and 2b (the three tokens set the sliders and the hook's slots fill).
2. **Should fix, internal video numbers (root ruling 4).** "as in v-seventeen" is now "as you saw earlier"; "that spike on v-nineteen's load chart" is now "the spike on the load chart from last time". The grey tags "v09", "v07, v09", "v17" and "v07" read "earlier".
3. **Note, the dislocation overlay.** The painted humeral head is greyed and tagged "normal position", and a coded outline of the head slides down and forward out of the socket on "forces a bone out of its joint".
4. **Note, overuse as cause or onset (science-check flag kept, root ruling 9).** Scene 2a now says "Some books list overuse as a third cause instead. Either way, say it built up over time.", with a small grey chip "also taught: direct, indirect, overuse". 8a's marking accepts "overuse" given as the cause. The concussion wording and this marking stay flagged in the facts section.
5. **Note, hook hold.** The hook holds three seconds, quiet, with the slots lit.

Length: the split adds one scene file and a settle, and the hook hold adds 2 s (holds now 77 s). Scene 6's direct-prevention sentence is now silent (Revision 1 reserve cut 2); its column still writes, and 8a's shin-guard answer is no longer spoken in the body. Narration changed in 2a and 6. Recount: 6,152 characters, about 568 s (Revision 1: 6,160, about 563 s). The handoff frame is unchanged.
