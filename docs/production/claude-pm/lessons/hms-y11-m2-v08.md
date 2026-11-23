# HMS Year 11 V08 (The body and mind in motion): systems working together, and first aid. How do seven body systems work together in one movement, and what should first aid do when movement goes wrong? (design)

Status: Revision 1 (24 Nov 2026): first design. Needs independent learning review and science check before voicing. Nothing recorded. Voice: the Google voice. Plates: four new (one shared with v09), nine reused (see Assets). No official figures.

Narration 6,128 characters (16 scene files, counted by script from lines starting "> " with bold markers removed), about 565 s including holds, two countdowns and the 45 s notes hold.

Scope: the eighth HMS video of the Year 11 focus area "The body and mind in motion", closing its first group (the body's systems). Course brief `../hms-design-brief.md`. Route entry **hms-y11-m2-v08**. Pre-design pack `../pre-design/hms/hms-y11-m2-v08.md`. Site page `C:/Users/kygs/teaching-app-fix/subjects/health-movement-science/year11/module2/lesson08.sa.html` (read in full, 24 Nov; sha256 `cc9d3d8cb4cfa67e902dbe9a785349df09f8ed54ab4306a6c3458fc42e303006`). Previous design `hms-y11-m2-v07.md`.

## Decisions

- **File name and route id.** Route entry **hms-y11-m2-v08**, playlist order 26, site lesson L08 ("Seven systems, one movement, and what to do when it goes wrong"). Opening (route): "the command and feedback loop from v07 widens to seven systems around one movement" (v07's final frame). Start: "Start from one movement (a netball shot) followed system by system in the order they act." Stop: "Stop when students can follow a movement through all seven systems, identify the limiting system for different movements, analyse a movement in phases, and discuss the role and limits of first aid for inefficient movement, dehydration and undue stress on the body." Next handoff: hms-y11-m2-v09, which opens on "a 100 m track finish line with a speed trace that falls over the last 20 m". Lesson key **hms11b08**.
- **Syllabus.** Inquiry question "How do the systems of the body influence and respond to movement?". Two dotpoints owned whole: **hms-y11-fa2-g1-d6** (p21) "Demonstrate and analyse how the systems of the body work together in a variety of movements" and **hms-y11-fa2-g1-d7** (p21) "Discuss the role first aid plays in response to movement", with the syllabus examples "Inefficient movement. / Dehydration. / Undue stress on the body."
- **One main question:** *How do seven body systems work together in one movement, and what should first aid do when movement goes wrong?* Heading: "How do all the systems work in one movement?" (the v07 Next chip's words). The two dotpoints are joined because the site joins them in one lesson and the second answers what happens when the first breaks down; the split would leave first aid as a short video with no analysis. Recorded as a deliberate pairing; the video stays inside the cap.
- **Case.** The site's warm-up (a powerlifter spent after six seconds, a marathon runner lasting two hours; what did each run out of?) is the hook (1), answered in 3 by the limiting system. The netball shot (card 04) carries 2; the vertical jump (card 06) carries 4 on the segment linkage. Attempt 1 is written for this video from the site's own limiting-system example (the footballer whose passes go astray late, 3 marks). Attempt 2 is WE b2 verbatim ("Discuss the role first aid plays in response to movement", 5 marks). WE b1 (the 400 m, 6 marks) is not attempted: its energy content belongs to v09 and v10; its structure (anticipation, then timescales, then the limit) shapes scenes 2 and 3.
- **Scope.** Hook (1); one shot, seven systems, on different clocks (2); the limiting system across four movements (3); four phases of a jump (4); what first aid is for, and its limits (5); DRSABCD and TOTAPS (6); inefficient movement (7); dehydration (8); undue stress on the body (9); memory (10); two unseen items (11a to 11d); decision rule and handoff (12); key notes (13).
- **Syllabus coverage check (root condition, 24 Nov).** d6: how the systems work together (2), in a variety of movements (3), demonstrated and analysed by phase (4, with the site's own activity left as the demonstration students do themselves). d7: the role of first aid (5, 6), its limits for "discuss" (5, 9, 11d), and each named example: inefficient movement (7), dehydration (8), undue stress on the body (9). All owned content is taught.
- **Left to the site page for length (recorded per the root condition).** Duty of care as a term; heat cramps as a separate stage; tendinopathy by name; psychological stress as a route to undue load (taught in v06); the site's 400 m worked response; Activity 1 (demonstrate, film and analyse a movement: the "demonstrate" half of d6 is done by students, and the video models the analysis) and Activity 2 (four incidents, one sideline).
- **What this video does not teach.** The energy systems behind the sprint, 400 m and hike limits: **v09, v10** (named here only as "fast fuel", "by-products" and "glycogen"). Injury classification and management in depth: **hms-y12-m4-v20, v21**. FITT and load planning: **v13**.
- **Site alignment.** Kept in substance: the warm-up and its answer (1, 3); the netball shot table with its timescale column, "the digestive system contributes by having finished", "The body anticipates rather than reacts" (2); "which system's capacity is reached first?", the four movements and their limits, and the three-step justification ("The failure mode identifies the system") (3); the four phases of the vertical jump, "Name the contraction type in every phase", "Do not stop at execution" (4); the four purposes in priority order, the decision as "the part performed worst", the three limits (fracture, concussion, cause) (5); DRSABCD with "a second casualty helps nobody", TOTAPS with "Every step is a gate" (6); soft tissue injuries, RICER with 20 minutes every two hours, HARM, the referral signs (7); the dehydration sign sequence, heat exhaustion against heat stroke, "Confusion in a hot athlete is never a discipline problem" (8); overuse, exertional collapse, cardiac events, "indispensable and insufficient" (9); WE b2 verbatim with its marking shape (11c, 11d).
- **Site errors found (this read).** None. Checked: RICER timing (about 20 minutes every two hours for 48 to 72 hours) and No HARM match Sports Medicine Australia's current public guidance; DRSABCD matches the Australian Resuscitation Council sequence; heat stroke's distinguishing features (very high core temperature with altered mental state) are correct. Author note for the science check: newer sports-medicine frameworks (for example PEACE and LOVE) question routine icing; the syllabus and Australian first aid guidance still teach RICER, so the video follows them and does not add the debate.
- **Added beyond the site.** (a) The **seven-system wheel** (`SystemWheel`, new in `hms-shared`): seven slots around a movement, each with its earlier plate thumbnail and a clock hand showing when it acted (hours, minutes, seconds, milliseconds), so "different clocks" is visible. (b) The **limiting system test** (`LimitTest`): four movement rows, each with a duration and intensity readout and seven small system gauges that drain at different rates from one simple model; the first to empty lights and names the limit. (c) The jump on v01's `SegmentLinkage` squat model, with phase bands and contraction-type tags read from the joint-angle velocity (lengthening under load reads "eccentric", shortening "concentric"). (d) A coded **first aid gate track** (`GateTrack`) for TOTAPS, where the walk stops at the first closed gate. (e) Attempt 1.
- **Entry knowledge.** hms-y11-m2-v01 (joints, levers, the segment linkage); v02 (agonist, antagonist, stabiliser; eccentric and concentric); v03 (levers, safe landing); v04 and v05 (heart, lungs, delivery chain; dehydration lowers plasma volume); v06 (adrenaline, glucagon, digestion suppressed in exercise); v07 (motor units, proprioception, sympathetic activation, fatigue; concussion needs medical clearance). Not assumed: limiting system, phases of movement analysis, first aid's purposes, DRSABCD, TOTAPS, sprain, strain, contusion, RICER, HARM, heat exhaustion, heat stroke, overuse injury, exertional collapse.
- **Terms.** Limiting system (3); preparation, execution, follow-through, recovery (4); first aid (5); DRSABCD, TOTAPS (6); sprain, strain, contusion, RICER, HARM (7); heat exhaustion, heat stroke (8); overuse injury (9). Each writes on its part.
- **Visual system.** Two recurring models introduced here (as the route lists): the **seven-system wheel** and the **limiting system test**. Plates: four new object plates (a netball ring and ball, the hook's barbell and running shoes, a first aid kit, and the 100 m finish line for the handoff, shared with v09); reused earlier plates as the wheel's thumbnails; `m8-water-glass-v1.png` and `m8-thermometer-v1.png` for dehydration. No people, hands or faces: the shot, the jump and every first aid case are shown through objects, the linkage and the gate track; DRSABCD steps are text gates with small object icons from the kit plate, never a figure.
- **Attempt.** 11a: written for this video (3 marks). 11c: WE b2 verbatim (5 marks).
- **Memory aids.** The site's lines: "The failure mode identifies the system" (rewritten "How it fails names what failed") and "indispensable and insufficient" (rewritten "First aid is essential, but not enough on its own"). Scene 10, after 2 to 9. DRSABCD and TOTAPS are the syllabus-world acronyms, used as given.
- **A mistake/fix beat** is in 2 ("nerves tell muscles, which need oxygen, which the lungs supply", crossed as a chain of command: the body anticipates), and 6 ("skills test to gather more information", crossed: the site's own two-truths lie). Other fixes: "every movement uses every system, so nothing to compare" crossed in 3; "confusion is a discipline problem" crossed in 8; "first aid clears a concussion" crossed in 5; "just list the acronyms" crossed in 11d.
- **Reuse (all inspected 24 Nov unless noted):** wheel thumbnails `hms-knee-synovial-cutaway-v1.png` (v01, approved), `hms-thigh-quadriceps-v1.png` (v02), `m8-lungs-healthy-v1.png`, `hms-heart-cutaway-v1.png` (v04, approved), `y11-digestive-tract-v2.png`, `m8-kidney-adrenal-v1.png`, `b3a2-brain-v1.png`; `m8-water-glass-v1.png`, `m8-thermometer-v1.png`.
- **Colour key.** Each system keeps one tone in the wheel across this video (nervous olive, muscular red, skeletal bone, respiratory teal, circulatory crimson, endocrine plum, digestive amber-brown); a limiting gauge empties to red; eccentric tags blue-grey and concentric tags orange (as v02); first aid gates green when open and grey when closed; emergency calls in red outline; green answers; red only for crossed mistakes and emergencies.
- **Type sizes.** As the course brief.
- **Anchor.** The `SystemWheel` is the anchor for the first half (2, 3) and the `GateTrack` for the second (6 to 9); the handoff leaves the wheel for the sprint finish.
- **Simulation.** (a) `LimitTest` gauges: each system has a capacity and a drain rate per movement (illustrative, ordinal, from the site's table); the model only decides which gauge empties first for each movement, so the on-screen order follows the site's reasoning; labelled "illustrative". (b) The jump runs on v01's one-parameter squat model (knee angle about 180° to about 100° and back, then flight and landing), with phase bands from the model's velocity sign; all angles shown come from that run.
- **Board stages.** (1) the wheel and the hook plates, scene 1; (2) the wheel with clocks, scene 2; (3) the limit test, scene 3; (4) the jump, scene 4; (5) first aid's purposes and limits, scene 5; (6) the gate track, scenes 6 to 9; (7) memory, questions, close, handoff and notes. Longest set-up: the gate track, scenes 6 to 9 (about 2,100 characters, about 2 min 40 s), kept alive because each scene is a different case walked through the gates.
- **Open decisions for root.** (1) Four new plates (netball ring and ball; barbell and running shoes; first aid kit; 100 m finish line, shared with v09). (2) The joined dotpoints in one video (as the site and route already do).

Main question: *How do seven body systems work together in one movement, and what should first aid do when movement goes wrong?*
Entry knowledge: hms-y11-m2-v01 to v07 (as above).
Stops after: following a movement through seven systems on their timescales; identifying and justifying a limiting system; analysing a jump in four phases with contraction types; stating first aid's four purposes and three limits; using DRSABCD and TOTAPS; responding to inefficient movement, dehydration and undue stress on the body.
Handoff: energy systems (route entry hms-y11-m2-v09). **Handoff frame (hms-y11-m2-v09 opens from it):** the new plate `hms-track-finish-line-v1.png` (an empty lane ending at the finish line, no athletes) across the lower two-thirds; above it a coded speed trace against distance (0 to 100 m, maths graph kit, "illustrative pattern") rising to a peak near 60 m and falling over the last 20 m, the last 20 m shaded amber with a down arrow; the "Next" chip at the lower right reads "Next: why does every sprinter slow before the line?"; this video's heading at the top left.

## Script and shots

16 scene files (1 to 10, 11a to 11d, 12, 13). No people, hands or faces appear at any point.

### 1. hook (what did each run out of?)
> Here's the loop from last time, inside a ring of seven systems. Now compare two athletes. A powerlifter can lift more than almost anyone, and is spent after six seconds. A marathon runner keeps going for two hours, but can't lift anything like as much. So what did each one run out of? And if they swapped events, which system would fail first?

Visual: opens on v07's handoff frame (the `CommandLoop` inside a ring of seven slots, six faint plate thumbnails, the coded netball ring at the centre, the v07 Next chip). The Next chip leaves and the heading rewrites to "How do all the systems work in one movement?" (60 px). On "inside a ring of seven systems" each slot's name writes in its tone (30 px): nervous, muscular, skeletal, respiratory, circulatory, endocrine, digestive. On "compare two athletes" the ring shrinks to the left and the new plate `hms-barbell-and-shoes-v1.png` lands at the right (about 900 px wide; a loaded barbell on a platform on its left half, worn running shoes on a road kerb on its right half). On "spent after six seconds" a timer chip "6 s" writes on the barbell half; on "keeps going for two hours" "2 h" on the shoes half. On "what did each one run out of?" an empty amber gauge sits under each half with a question mark (34 px); on "which system would fail first?" a curved swap arrow between the halves. Hold one second.

### 2. one shot, seven clocks
> Start with one movement: a netball shot. All seven systems are involved, but on very different clocks. The digestive system supplied the glucose hours ago, and right now it's turned down, so blood can go elsewhere. Adrenaline was released minutes before, raising heart rate and releasing fuel. Breathing and heart rate had already risen before the ball arrived. Then, in milliseconds, the nervous system spots the ball and fires the commands, the muscles pull, and the skeleton's levers turn that pull into the shot. So the body anticipates. It doesn't just react. And a system can help by being turned down.

Visual: board change to the wheel (`SystemWheel`, solid from its first frame): the new plate `hms-netball-ring-ball-v1.png` at the centre (about 560 px tall; ring, post and a ball on the court, no player), the seven slots around it with their thumbnails, and a time ruler along the bottom "hours", "minutes", "seconds", "milliseconds". On "on very different clocks" each slot takes a small empty clock face. Slots light one per cue in time order, each clock hand set and a marker dropping onto the ruler (30 px): on "The digestive system supplied the glucose hours ago" the digestive slot (tract thumbnail) lights amber-brown, marker at "hours", label "fuel supplied"; on "it's turned down" its tone dims to a grey outline, tag "turned down now", and a small blood arrow leaves it towards the ring. On "Adrenaline was released minutes before" the endocrine slot (adrenal thumbnail) lights, marker at "minutes", label "adrenaline: heart rate up, fuel released". On "Breathing and heart rate had already risen" the respiratory and circulatory slots light together, markers at "seconds", label "already raised". On "in milliseconds, the nervous system" the nervous slot (brain thumbnail) lights, marker at "milliseconds", label "detects, decides, commands"; on "the muscles pull" the muscular slot; on "the skeleton's levers turn that pull into the shot" the skeletal slot, and the ball lifts on a coded arc toward the ring. On "the body anticipates" a chip "nerves → muscles need oxygen → lungs supply it" writes and is crossed in red, amber hand tag "anticipates, doesn't just react" (42 px), the four early markers glowing on the ruler. On "help by being turned down" the dim digestive slot gets a green tick. Hold one second.

### 3. which system runs out first?
> Every movement uses all seven systems, so that can't tell a lift from a marathon. The useful question is which system reaches its limit first. That's the **limiting system**. In a maximal lift, it's nervous and muscular: how many big motor units you can fire at once. In a hundred-metre sprint, it's the muscles' fast fuel, which runs low within about ten seconds. In a four-hundred, by-products build up faster than the blood can clear them. On a three-hour hike, it's glycogen, fluid and salt. To justify it, look at how the performer fails. Slowing while still moving well means fuel. Sloppy passes late in a game mean the nervous system. So the lifter and the runner trained different limiting systems.

Visual: board change to the limit test (`LimitTest`, solid from its first frame): four empty rows, each with a duration chip and seven small gauges in the wheel's tones, all full; a grey tag "illustrative". On "Every movement uses all seven systems" every gauge in every row flickers; on "can't tell a lift from a marathon" a chip "all seven, so nothing to compare" writes and is crossed in red. On "limiting system" the gloss "limiting system: the one that reaches its limit first" (34 px). Each row runs as it is spoken, its gauges draining at different rates until one empties red (30 px): on "In a maximal lift" row 1 "maximal lift, 2 to 3 s", the nervous and muscular gauges empty first, label "nervous and muscular: units fired at once"; on "In a hundred-metre sprint" row 2 "100 m, about 10 s", the muscle-fuel gauge empties, label "muscles' fast fuel"; on "In a four-hundred" row 3 "400 m, about 50 s", the muscular and circulatory gauges empty together, label "by-products faster than blood clears them"; on "On a three-hour hike" row 4 "hike, 3 h", the digestive, endocrine and circulatory gauges empty slowly, label "glycogen, fluid, salt". On "look at how the performer fails" a two-row clue card writes: "slows, still moving well → fuel" on "Slowing while still moving well means fuel"; "sloppy passes late → nervous" on "Sloppy passes late in a game". On "the lifter and the runner trained different limiting systems" the hook's two empty gauges return under rows 1 and 4, each filling with its answer, and the hook's question marks turn into green ticks. Hold one second.

### 4. four phases of a jump
> To analyse a movement, split it into phases. Take a vertical jump. In **preparation**, the hips, knees and ankles bend, and the quadriceps lengthen under tension: an eccentric contraction that loads them like a spring. In **execution**, the same muscles shorten hard, concentrically, recruiting the big fast units, and the levers drive you up. In **follow-through**, stabilisers control the body in the air, and proprioception gets ready to land. In **recovery**, the landing is absorbed eccentrically again. Name the contraction in every phase, and don't stop at execution. The landing is where the injury risk is.

Visual: board change to the jump (solid from its first frame): v01's `SegmentLinkage` (hip, knee, ankle as bone lines with joint circles and a live "knee angle" readout) standing on a ground line, the quadriceps drawn as v02's `MuscleBand` over the thigh segment with its length readout; a phase strip of four empty bands under it. The linkage runs once through the jump as the phases are spoken. On "preparation" band 1 fills "preparation" (30 px) and the linkage flexes, knee readout falling to about 100°; on "the quadriceps lengthen under tension" the band's length readout rises and a blue-grey tag "eccentric" appears, with a coiling spring icon on "loads them like a spring". On "execution" band 2 fills and the linkage extends fast, knee readout to about 180°; on "shorten hard, concentrically" an orange tag "concentric"; on "recruiting the big fast units" v07's motor-unit field tiny with its large units lighting. On "follow-through" band 3 fills; the linkage lifts off the ground line; on "stabilisers control the body in the air" a small "stabilisers" tag at the hip; on "proprioception gets ready to land" a teal dot runs back up v07's loop, tiny. On "recovery" band 4 fills; the linkage lands and flexes again, "eccentric" tag returns; a small heart readout falls. On "Name the contraction in every phase" the four bands each show their tag (eccentric, concentric, holding, eccentric). On "don't stop at execution" bands 1 and 4 outline amber; on "The landing is where the injury risk is" band 4 takes a red outline, tag "injury risk lives here" (34 px). Hold one second.

### 5. what first aid is for
> When movement goes wrong, first aid steps in. It's the immediate care given before professional help arrives, and it has four jobs, in order. Preserve life. Stop it getting worse. Help recovery start. And decide what happens next: play on, stop, see a doctor, or call an ambulance. That last job is the one most often done badly. But first aid has limits. It can't rule out a fracture, it can't clear a concussion, and it can't fix why the injury happened.

Visual: board change to first aid's purposes (solid from its first frame): the new plate `hms-first-aid-kit-v1.png` at the left (about 600 px wide; an open kit with bandages, an ice pack and a plain defibrillator case), an empty numbered four-step ladder at the right. On "first aid" the gloss "first aid: immediate care before professional help arrives" (34 px). The ladder fills one per cue (30 px): "1 preserve life" on "Preserve life"; "2 stop it getting worse" on "Stop it getting worse"; "3 help recovery start" on "Help recovery start"; "4 decide what happens next" on "decide what happens next", with four small chips on "play on, stop, see a doctor, or call an ambulance". On "the one most often done badly" step 4 takes an amber outline. On "first aid has limits" a grey wall draws under the ladder with three bricks one per cue: "can't rule out a fracture" on "It can't rule out a fracture"; "can't clear a concussion" on "it can't clear a concussion", with a chip "first aid clears concussion" crossed in red; "can't fix the cause" on "it can't fix why the injury happened". Hold one second.

### 6. two plans, and every step is a gate
> Two plans organise it. For someone who isn't responding, use **DRSABCD**: check for Danger, check for a Response, Send for help, open the Airway, check Breathing, start CPR if they aren't breathing normally, and attach a Defibrillator. Danger comes first, because a second casualty helps nobody. For a conscious, injured athlete, use **TOTAPS**: Talk, Observe, Touch, then Active movement, Passive movement, and finally a Skills test. Each step is a gate. If they can't move the joint themselves, you stop there, and they don't play.

Visual: board change to the gate track (`GateTrack`, solid from its first frame): two empty horizontal tracks, the upper labelled "unresponsive", the lower "conscious, injured" (34 px), the kit plate small at the left. On "DRSABCD" the upper track's seven letters write as gates, each expanding to its word on its cue (30 px): "Danger" on "check for Danger", "Response" on "check for a Response", "Send for help" on "Send for help", "Airway" on "open the Airway", "Breathing" on "check Breathing", "CPR" on "start CPR", "Defibrillator" on "attach a Defibrillator" (the kit's defibrillator case glows). On "Danger comes first" the "D" gate takes an amber outline, tag "a second casualty helps nobody" on "a second casualty helps nobody". On "TOTAPS" the lower track's six gates write: "Talk" on "Talk", "Observe" on "Observe", "Touch" on "Touch", "Active movement" on "Active movement", "Passive movement" on "Passive movement", "Skills test" on "a Skills test". On "Each step is a gate" a marker walks the lower track, each gate opening green as it passes; on "If they can't move the joint themselves" the "Active movement" gate closes grey and the marker stops; on "you stop there" the last two gates grey out, and a chip "skills test to learn more" writes and is crossed in red; on "they don't play" a red chip "off the field". Hold one second.

### 7. inefficient movement
> The syllabus names three situations. First, inefficient movement: poor technique, fatigue or a skipped warm-up. That usually means a soft tissue injury. A sprain is a ligament, a strain is a muscle or tendon, and a contusion is a bruise. Manage it with **RICER**: rest, ice, compression, elevation and referral, with ice for about twenty minutes every two hours. And avoid HARM: heat, alcohol, running and massage, which all increase blood flow and swelling. Deformity, a sound at the moment of injury, or not being able to bear weight means a doctor decides.

Visual: the gate track shrinks to the top; a three-column board writes below it, "situation", "likely injury", "first aid" (34 px), row 1 filling now. On "inefficient movement" the situation cell writes "inefficient movement", with three chips on "poor technique, fatigue or a skipped warm-up". On "a soft tissue injury" the injury cell; three definition chips write one per cue (30 px) with v01's knee cutaway tiny: "sprain: ligament" on "A sprain is a ligament", the knee's ligament outlined; "strain: muscle or tendon" on "a strain is a muscle or tendon", v02's hamstring tear overlay tiny; "contusion: bruise" on "a contusion is a bruise". On "RICER" the first aid cell writes the five letters, each expanding on its word: "rest", "ice", "compression", "elevation", "referral"; on "about twenty minutes every two hours" the kit's ice pack glows with a timer chip "20 min, every 2 h, first 48 to 72 h". On "avoid HARM" four crossed chips write, "heat", "alcohol", "running", "massage"; on "increase blood flow and swelling" a small swelling gauge rises behind them. On "Deformity, a sound at the moment of injury, or not being able to bear weight" three red-outlined chips; on "a doctor decides" a red tag "refer". Hold one second.

### 8. dehydration
> Second, dehydration. Sweat lowers plasma volume, so heart rate rises and the body sheds heat less well. The signs come in order: thirst and dark urine, then headache and a racing heart, then cramps and dizziness, then confusion. For mild cases, stop, find shade and sip cool fluid, and don't return to play. Heat exhaustion means lie them down, cool them and get medical help. But confusion in a hot athlete means heat stroke. That's an emergency. Call an ambulance, cool them hard, and follow DRSABCD.

Visual: row 2 of the board fills. On "dehydration" the situation cell writes "dehydration", with `m8-water-glass-v1.png` tiny, its level dropping (coded mask), and `m8-thermometer-v1.png` tiny beside it. On "Sweat lowers plasma volume" v05's delivery chain tiny with link 3's readout "stroke volume: down", and on "heart rate rises" its cost meter climbing. On "The signs come in order" a four-step escalator writes in the injury cell, one per cue (30 px): "thirst, dark urine" on "thirst and dark urine"; "headache, racing heart" on "headache and a racing heart"; "cramps, dizziness" on "cramps and dizziness"; "confusion" on "then confusion", that step outlined red. On "For mild cases" the first aid cell writes "stop, shade, sip cool fluid; no return". On "Heat exhaustion" a second line "heat exhaustion: lie down, cool, medical help". On "confusion in a hot athlete means heat stroke" a chip "confusion = discipline problem" writes and is crossed in red, and a red-outlined line writes "heat stroke: emergency"; on "Call an ambulance, cool them hard, and follow DRSABCD" the upper gate track's DRSABCD gates light red in sequence. Hold one second.

### 9. undue stress, and where first aid stops
> Third, undue stress on the body: more load than the body is ready for. Here the harm builds up. Overuse injuries, like stress fractures and shin pain, mean stop and refer. A collapse at the end of hard effort is never just tiredness: follow DRSABCD and get help. Chest pain or collapse during exercise means an ambulance, and CPR with a defibrillator if they're not breathing normally. So first aid is essential, but it treats the event, not the cause.

Visual: row 3 of the board fills. On "undue stress on the body" the situation cell writes "undue stress on the body", with a coded load bar rising past a "ready for" line on "more load than the body is ready for". On "the harm builds up" a small accumulating stack of grey blocks. On "Overuse injuries" the injury cell writes "overuse: stress fractures, shin pain", v01's leg bones thumbnail tiny with a faint line; on "stop and refer" the first aid cell writes "stop, refer". On "A collapse at the end of hard effort" a red-outlined line "exertional collapse: DRSABCD, help"; on "never just tiredness" a crossed chip "just tired". On "Chest pain or collapse during exercise" a red-outlined line "chest pain or collapse: ambulance, CPR, defibrillator", the kit's defibrillator case glowing. On "first aid is essential" the whole three-row board takes a green frame; on "it treats the event, not the cause" an amber band slides under the board, "the cause: load, fluids, preparation", amber hand tag "treats the event, not the cause" (42 px), its three chips lighting in turn. Hold one second.

### 10. memory
> Two things to remember. How a performer fails names the system that failed. And first aid is essential, but not enough on its own.

Visual: board change to the memory card (solid from its first frame): the wheel small at the left beside a dark-ink framed card (52 px): "How it fails names what failed" (written with "How a performer fails names the system that failed") and "First aid: essential, but not enough on its own" (written with "first aid is essential"). This card returns beside the key notes. Hold half a second.

### 11a. attempt one (the footballer)
> Two exam questions. First. A footballer is still running well in the last ten minutes, but their passes keep going astray. Identify the likely limiting system, and justify your choice. Pause here to answer.

Visual: the board clears. `QuestionScene`: the card arrives in one move with its whole text (38 px), tagged "HSC-style question, written for HSCScience". Demand: "A footballer is still running well in the last ten minutes of a match, but their passes keep going astray. Identify the likely limiting system and justify your choice. (3 marks)" Picture: the seven gauges from scene 3, all full, unlabelled. **The countdown ring is shown full from "Pause here to answer." and runs for 10 seconds.** The whole card stays on screen during the countdown and after it.

### 11b. feedback, item one
> It's the nervous system. The legs are still working, so fuel and oxygen aren't the limit. What's failing is accuracy, and late in a game, fatigue cuts the brain's drive and slows decisions, so technique breaks down first. The classic mistake is blaming the heart and lungs.

Visual: `FeedbackScene`: the card shrinks to the top; the nervous gauge drains to red while the others stay high; a green-framed three-line answer writes one per cue (30 px): on "It's the nervous system" "1 limiting system: nervous"; on "fuel and oxygen aren't the limit" "2 evidence: still running, so not fuel or oxygen"; on "fatigue cuts the brain's drive and slows decisions" "3 central fatigue: less drive, slower decisions, technique fails". On "classic mistake" a chip "heart and lungs" writes and is crossed in red, red hand tag "read the failure, not the effort" (34 px). Settle one second.

### 11c. attempt two (the site's discuss question)
> Second. Discuss the role first aid plays in response to movement. Pause here to answer.

Visual: the board clears. The card arrives in one move with its whole text (38 px), tagged "HSC-style question, written for HSCScience". Demand: "Discuss the role first aid plays in response to movement. (5 marks)" Picture: the kit plate small beside the empty three-row board. **The countdown ring is shown full from "Pause here to answer." and runs for 10 seconds.** The whole card stays on screen during the countdown and after it.

### 11d. feedback, item two
> Discuss needs both sides. Give the four jobs: preserve life, prevent worsening, promote recovery, and decide what happens next. Use the three situations as evidence: TOTAPS and RICER, cooling and fluids, DRSABCD for a collapse. Then the limits: it can't exclude a fracture, clear a concussion or fix the cause. End with a judgement: essential, but not enough. The classic mistake is just listing the acronyms.

Visual: `FeedbackScene`: on "Discuss needs both sides" a small balance icon; a green-framed four-line answer writes one per cue (30 px): on "Give the four jobs" "1 purposes: life, worsening, recovery, decision"; on "Use the three situations as evidence" "2 evidence: soft tissue, dehydration, collapse", the three rows of the board tiny; on "Then the limits" "3 limits: fracture, concussion, cause", the grey wall tiny; on "End with a judgement" "4 judgement: essential, but not enough". On "classic mistake" a chip "DRSABCD, TOTAPS, RICER (and stop)" writes and is crossed in red, red hand tag "discuss = role and limits, then judge" (34 px). Settle one second.

### 12. decision rule and handoff
> So, to analyse any movement, ask which system runs out first, and how you can tell. Now take the shortest race there is. Over the last twenty metres of a hundred, even the fastest sprinters slow down. Why?

Visual: two chips write on (38 px): "runs out first?" on "which system runs out first", "how can you tell?" on "how you can tell". On "the shortest race there is" the chips fade and the new plate `hms-track-finish-line-v1.png` (an empty lane ending at the finish line, no athletes) settles across the lower two-thirds. On "the last twenty metres of a hundred" a coded speed trace draws above it against distance (0 to 100 m, maths graph kit, grey tag "illustrative pattern"), rising to a peak near 60 m; on "even the fastest sprinters slow down" the trace falls over the last 20 m, which shade amber with a down arrow. On "Why?" the "Next" chip slides in: "Next: why does every sprinter slow before the line?" **This is the handoff frame; hms-y11-m2-v09 opens from it.** Hold half a second.

### 13. key notes (quiet, hold about 45 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. All seven systems act, on different clocks; the body anticipates movement.
2. Limiting system: the first to reach its limit; how it fails identifies it.
3. Phases: preparation, execution, follow-through, recovery; name each contraction.
4. First aid: preserve life, prevent worsening, promote recovery, decide what next.
5. DRSABCD if unresponsive; TOTAPS stops at the first problem; RICER, no HARM.

Memory card (the scene 10 card) beside the notes. Each bullet one line of at most 86 characters. Hold about 45 seconds in all.

## Practice question and feedback

Two unseen items (11a to 11d), "Pause here to answer." and a 10 s countdown each, cards on screen during and after; marks on the card; tag "HSC-style question, written for HSCScience". Item 1 is written for this video from the site's own example; item 2 is the site's WE b2 stem verbatim.

1. (11a, 3 marks.) Nervous system identified (1 mark); justified from the failure mode: still running, so fuel and oxygen delivery are not limiting (1 mark); mechanism: central fatigue reduces drive and slows decision making, so skill and accuracy fail first (1 mark). Classic mistake crossed: "heart and lungs".
2. (11c, 5 marks.) The site's marking shape: first aid defined with its four purposes in priority order (1 mark); inefficient movement: TOTAPS and RICER, with what to avoid (1 mark); dehydration: recognition, cooling, fluids, heat stroke as an emergency (1 mark); undue stress: overuse referral and DRSABCD for collapse (1 mark); limits and a judgement ("essential but not enough") (1 mark). Classic mistake crossed: listing the acronyms without discussing.

Feedback spoken lengths about 20 s (11b) and 31 s (11d) by script; time the exact audio.

## Numbers or facts to verify

Self-check (24 Nov). The Codex science check must confirm each before voicing.
- **Hook (1).** "Spent after six seconds" and "two hours" are the site's framing of a maximal lift effort and an elite marathon; illustrative.
- **Seven systems (2).** Digestion suppressed during exercise (sympathetic); anticipatory rise in heart rate and ventilation before movement (feedforward, central command); netball shot contributions as the site.
- **Limiting systems (3).** Maximal lift limited by neural drive and muscle force; 100 m by phosphocreatine depletion within about 10 s (the energy detail is v09's; the site's own claim that everyone slows over the last 20 m is standard race analysis); 400 m by metabolite accumulation; long hike by glycogen, fluid and electrolyte loss. Durations: 2 to 3 s, about 10 s, 45 to 60 s (shown "about 50 s"), 3 h.
- **Phases (4).** Countermovement jump: eccentric loading, concentric drive, flight, eccentric landing. Knee angles from the v01 squat model, about 100° at the bottom (illustrative).
- **First aid (5 to 9).** Purposes as the site; DRSABCD (Australian Resuscitation Council); TOTAPS sequence and the stop rule; soft tissue definitions; RICER (about 20 minutes every 2 hours for 48 to 72 hours) and No HARM (Sports Medicine Australia); referral signs; dehydration sign sequence; heat exhaustion against heat stroke (altered mental state and very high core temperature); exertional collapse; cardiac events and defibrillation. Author note: the video does not mention PEACE and LOVE (see Decisions).
- **Numbers used.** 6 s, 2 h, 2 to 3 s, about 10 s, about 50 s, 3 h, about 100°, about 180°, 20 min, 2 h, 48 to 72 h, 20 m, 60 m, 100 m.
- **Official figures.** None.
- **No em dashes** in this file (searched by script).

## Memory aid check

- **"How it fails names what failed."** Assumption: one failure mode maps to one system. Real fatigue is often mixed (a late footballer may be both centrally fatigued and glycogen-low); the site's three-step method asks for the best-matching system with evidence, which is how the video uses it. Author note, not learner copy.
- **"First aid: essential, but not enough on its own."** Assumption: first aid is defined as immediate care by a non-professional. Correct; diagnosis, treatment and return-to-play decisions sit with health professionals.

## Narration length estimate

Revision 1 count (24 Nov; by script with the build parser rules: only lines starting "> ", joined with a space, bold markers removed): **6128 characters**, 16 scene files. At 13.3 characters per second the speech is about 461 s; add 32 s of padding (2 s per scene) and 72 s of stated holds, settles, the two 10 s countdowns and the rest of the quiet notes hold: **about 565 s**.

| Scene | Characters |
| --- | --- |
| 1. hook (what did each run out of?) | 344 |
| 2. one shot, seven clocks | 608 |
| 3. which system runs out first? | 702 |
| 4. four phases of a jump | 599 |
| 5. what first aid is for | 456 |
| 6. two plans, and every step is a gate | 525 |
| 7. inefficient movement | 555 |
| 8. dehydration | 502 |
| 9. undue stress, and where first aid stops | 452 |
| 10. memory | 130 |
| 11a. attempt one (the footballer) | 206 |
| 11b. feedback, item one | 273 |
| 11c. attempt two (the site's discuss question) | 87 |
| 11d. feedback, item two | 409 |
| 12. decision rule and handoff | 205 |
| 13. key notes (quiet, hold about 45 seconds) | 75 |

Reserve cuts: (1) scene 2, the skeleton clause (keep the slot lighting silently); (2) scene 7, the HARM reason clause (keep the swelling gauge silent); (3) scene 4, the follow-through sentence. Do not cut below 5,500 without replacing content.

## Assets

Have (reused, inspected 24 Nov unless approved and not yet painted): `y11-digestive-tract-v2.png`, `m8-kidney-adrenal-v1.png`, `m8-lungs-healthy-v1.png`, `b3a2-brain-v1.png`, `m8-water-glass-v1.png`, `m8-thermometer-v1.png`; HMS plates approved: `hms-knee-synovial-cutaway-v1.png` (v01), `hms-thigh-quadriceps-v1.png` and `hms-hamstring-tear-overlay-v1.png` (v02 and m1-v02), `hms-heart-cutaway-v1.png` (v04), `m8-leg-bones-normal-v1.png`. Coded: `SystemWheel` with clocks and time ruler, `LimitTest` gauges, `SegmentLinkage` jump with `MuscleBand` and phase strip, purposes ladder and limits wall, `GateTrack`, three-row situation board, escalator, load bar, speed trace, question cards, countdown. No people.

Need (new plates):
1. `hms-netball-ring-ball-v1.png`: scene 2 (and later v10's netball court video may reuse it).
2. `hms-barbell-and-shoes-v1.png`: scene 1.
3. `hms-first-aid-kit-v1.png`: scenes 5 to 9, 11c; later Year 12 injury videos.
4. `hms-track-finish-line-v1.png`: scene 12 (handoff); reused as v09's opening and anchor.

Kit gaps: `SystemWheel`, `LimitTest`, `GateTrack` in `hms-shared`.

## Codex asset brief (HMS-Y11-B08, one movement and first aid)

Standing rules as v01's brief: house watercolour style, transparent PNG with true alpha, never stretched, no readable text, no brands or logos. Every plate: no people, hands or faces anywhere in the image.

1. `hms-netball-ring-ball-v1.png` (1400 x 2200): an outdoor netball goal post with its ring and net, seen from the court, a netball resting on the court line below it, painted court lines, late afternoon light. No people, hands or faces anywhere in the image; no logos on the ball.
2. `hms-barbell-and-shoes-v1.png` (2400 x 1300): two halves on one plate at one scale: left, a loaded barbell resting on a rubber lifting platform with chalk dust; right, a pair of worn running shoes on a road kerb with a plain drink bottle. No people, hands or faces anywhere in the image; no brand marks.
3. `hms-first-aid-kit-v1.png` (2000 x 1400): an open sports first aid kit on a bench: rolled crepe bandages, an instant ice pack, tape, gloves in a plain packet, and beside it a closed plain defibrillator case marked only with a simple heart-and-lightning pictogram. No people, hands or faces anywhere in the image; no readable text, no organisation's cross or logo.
4. `hms-track-finish-line-v1.png` (2400 x 1200): one or two empty running track lanes in low side light, ending at a white painted finish line, the track surface texture visible, the infield grass at the edge. No people, hands or faces anywhere in the image; no numbers, sponsor boards or text.

Hand-in to `status.md`; provenance `docs/production/claude-pm/assets/hms-y11-b08-provenance.json`.

## Codex learning review and science check brief (HMS-Y11-B08)

- **Learning review:** trace from v01 to v07. Does the wheel's clock ruler make "anticipates, doesn't just react" visible (2)? Does the limit test teach a method (read the failure) rather than four facts (3)? Can students run the four-phase analysis on their own movement after 4? Do 5 to 9 discuss first aid (role and limits) rather than list acronyms? Is the pairing of two dotpoints still one clear learner question? Do the attempts test the stop?
- **Science check:** every item in "Numbers or facts to verify", especially current Australian first aid sequences and the RICER and HARM wording, and the model answers' mark splits.

## Codex error-check brief (HMS-Y11-B08, after the reviews)

Error-only: every quoted cue appears word for word in its scene in spoken order; the opening matches v07's handoff frame and the closing matches hms-y11-m2-v09's route opening (a 100 m track finish line with a speed trace that falls over the last 20 m); system tones consistent; no figure in any first aid scene; no people, hands or faces; no em dash, no U+2061; no module number or course label on screen.

## YouTube metadata (draft)

- Title: "Body Systems Working Together, and the Role of First Aid | HSC Health and Movement Science"
- Description:

"Full lesson, notes and practice questions: https://hscscience.com.au/subjects/health-movement-science/year11/module2/lesson08.sa.html

How do seven body systems work together in one movement, and what should first aid do when movement goes wrong? One netball shot through all seven systems on their different clocks, the limiting system in a lift, a sprint, a 400 m and a hike, analysing a jump in four phases, and first aid's role and limits: DRSABCD, TOTAPS, RICER and the No HARM rule, dehydration and heat stroke, and undue stress on the body. Includes two exam-style questions with brief feedback. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Health and Movement Science 11-12 (2023 syllabus), Year 11: The body and mind in motion.
Syllabus content (NSW Health and Movement Science 11-12, 2023):
"Demonstrate and analyse how the systems of the body work together in a variety of movements"
"Discuss the role first aid plays in response to movement"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/pdhpe/health-and-movement-science-11-12-2023

Previous: How does a decision become a movement?
Next: Why does every sprinter slow before the line?

This video is general education, not a first aid qualification. Learn first aid from an accredited course.

#HealthAndMovementScience #HSC #HSCScience"

## Open decisions

- **Four new plates (recommended: yes).** Netball ring and ball; barbell and running shoes; first aid kit; 100 m finish line (shared with v09).
- **Two dotpoints in one video (recommended: keep).** As the site and the route pair them; the video stays inside the cap.

## Build ids

Lesson key `hms11b08`; folder `src/explainer/lessons/hms-y11-m2-v08`; build folder `docs/production/claude-pm/lessons/hms11b08`. Imports `hms-shared` (`CommandLoop`, `SegmentLinkage`, `MuscleBand`, `DeliveryChain`; new `SystemWheel`, `LimitTest`, `GateTrack`), `src/explainer/math/graphs.tsx` for the speed trace.

Scene headings (16): hook, seven-clocks, limiting, phases, first-aid-role, gates, inefficient, dehydration, undue-stress, memory, attempt, feedback-one, attempt-two, feedback-two, handoff, key-notes.

Holds and transitions as v07. 6 to 9 continue on the gate track and situation board; other teaching scenes are board changes.

## Review notes (author, not learner copy)

- **Teaching checks.** Causes: why the heart rate rises before the ball arrives (2); why one system limits each movement (3); why the landing carries the injury risk (4); why Danger comes first and why TOTAPS stops (6); why HARM increases swelling (7); why confusion means heat stroke (8); why first aid is not enough (9). Attention: the lifter and the marathoner; a gate that closes. Visual medium: clocks on a ruler, gauges that drain at different rates, a linkage jumping with live contraction tags, a marker stopped at a gate. Apply: an unseen limiting-system case (11a); a discuss answer with a judgement (11c). Remember: the failure names the system; essential but not enough.
- **Term load.** Heavy (two dotpoints). The acronyms expand letter by letter as spoken; the key notes select five lines.
- **Safety framing.** Every emergency line names an ambulance; the description adds a line pointing to accredited first aid courses.
- **Overlap.** v09 and v10 explain the energy behind each limit; hms-y12-m4-v20 and v21 own injury classification and management.
- **No em dashes** in this file (searched by script).
