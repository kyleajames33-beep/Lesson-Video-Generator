# HMS Year 11 V13 (The body and mind in motion): designing a training program with FITT. How do you turn 'train harder' into a program someone could actually follow, using FITT? (design)

Status: Revision 2 (24 Nov 2026): independent learning review resolved (see "Revision 2: learning review resolved" at the end). Revision 1 (24 Nov 2026) was the first design; root rulings applied 24 Nov. Needs science check before voicing. Nothing recorded. Voice: the Google voice. Plates: one new, four reused (see Assets). No official figures.

Narration 5,809 characters (15 scene files, counted by script from lines starting "> " with bold markers removed), about 537 s including holds, two countdowns and the 45 s notes hold.

Scope: the thirteenth HMS video of the Year 11 focus area "The body and mind in motion". Course brief `../hms-design-brief.md`. Route entry **hms-y11-m2-v13**. Pre-design pack `../pre-design/hms/hms-y11-m2-v13.md`. Site page `C:/Users/kygs/teaching-app-fix/subjects/health-movement-science/year11/module2/lesson13.sa.html` (read in full, 24 Nov; sha256 `9e13cb02918a7deab0d68384ea438b03b259a6a5d4b40ba5c981609222e7a397`). Previous design `hms-y11-m2-v12.md`.

## Decisions

- **File name and route id.** Route entry **hms-y11-m2-v13**, playlist order 31, site lesson L13 ("Four letters, four decisions, and no way to hide a vague one"). Opening (route): "the work-to-rest dial from v12 splits into four labelled dials: F, I, T, T" (v12's final frame). Start: "Start from a vague program ('run four times a week, go hard') and make each FITT decision." Stop: "Stop when students can set each FITT variable with a number, set intensity by heart rate (with the 220 minus age caveat), perceived exertion or pace, explain why the variables constrain each other, build progression, and say what FITT does not cover. The principles of training belong to hms-y12-m4-v06 and v07." Next handoff: hms-y11-m2-v14, which opens on "a FITT session card from v13 starts: a heart-rate readout begins to climb". Lesson key **hms11b13**.
- **Syllabus.** Inquiry question "What factors influence movement and performance?". Spine id **hms-y11-fa2-g2-d4** (p22), owned whole: "Design an aerobic or anaerobic training program based on the FITT principle".
- **One main question:** *How do you turn 'train harder' into a program someone could actually follow, using FITT?* (the route's question, kept). Heading: "How do you turn 'train harder' into a real program?" (the v12 Next chip's words).
- **Case.** The site's warm-up (a 16-year-old's whole 5 km program: "Run four times a week. Go hard. Build up over the term.") is the hook (1), answered in 2 (the stranger test lists the missing decisions; "four times a week" is the one sentence that survives because it is the only decision a stranger could act on) and 5 ("build up" needs a plan). WE b1 (propose a six-week aerobic program for a 16-year-old netballer who fades in the fourth quarter, 6 marks) is worked in 7 as the design method (demands first, then each variable with its number and reason). WE b2 (six sessions at 90%, 5 marks) informs 4's interactions with a different example. Attempts are unseen: attempt 1 is a heart-rate zone for a new age with its limitation (3 marks); attempt 2 is the site's Activity 2 program 2 (a 400 m runner on continuous 70% running), a fully specified program that FITT cannot catch (4 marks).
- **Scope.** Hook (1); four variables, four decisions, the stranger test (2); setting intensity three ways (3); the variables constrain each other (4); progression (5); what FITT does not cover (6); a program designed and justified (7); memory (8); two unseen items (9a to 9d); decision rule and handoff (10); key notes (11).
- **Syllabus coverage check (root condition, 24 Nov).** Design (7, with 2 to 6 as the method) an aerobic or anaerobic program (2, 3, 7, 9c) based on the FITT principle (2 to 5). All owned content is taught.
- **Left to the site page for length (recorded per the root condition).** Activity 1's second athlete (the 17-year-old sprinter) and the full written program; Activity 2's programs 1, 3 and 4; the "10 per cent per week" guideline (a rule of thumb that the site's own table contradicts; site correction 22; the video says "small steps"); the stranger test as a literal class activity.
- **What this video does not teach.** The principles of training, session design, periodisation, peaking and tapering: **hms-y12-m4-v06, v07, v09, v10** (named once in 6 as "Year 12"). Immediate responses (heart rate, ventilation): **v14** (the handoff). Fitness testing to set a baseline: **v15**.
- **Site alignment.** Kept in substance: the warm-up (1); "the minimum set of decisions that must be made before a session can be carried out by someone who was not in the room", the four-variable table with aerobic and anaerobic examples, frequency against intensity as the commonest silent failure (2); the three intensity methods, 220 minus age with its error of about 10 to 12 beats per minute, the 16-year-old's 143 to 173 zone, the 1RM bands, RPE as "the correct choice" without monitors (3); the four interactions and "say which one you are lowering to pay for it" (4); one variable at a time and the recovery week, "the training with the adaptation" (5); the four things FITT does not cover (6); WE b1's design order, demands first, the aerobic program for an athlete whose efforts are anaerobic, every number with its reason (7).
- **Site errors found (this read).** One, logged as site correction 22: card 07's six-week table raises weekly volume by 33% (week 3, 75 to 100 minutes) and 40% (week 4, 100 to 140 minutes), and the next paragraph recommends "no more than about 10 per cent per week"; the two contradict each other. The video's progression uses steps of about 10% or less and does not teach the 10% figure as a rule. Checked and kept: 220 − 16 = 204; 0.70 × 204 = 142.8 and 0.85 × 204 = 173.4; error about 10 to 12 beats per minute (Tanaka and colleagues' meta-analysis gives a standard error near 10); 1RM bands; 48 h between heavy anaerobic sessions.
- **Added beyond the site.** (a) The **FITT four dials** (`FittDials`, new in `hms-shared`, the route's recurring model): four coded dials grown from v12's work-to-rest dial, each with a numeric readout and links between them (time and intensity "trade-off", frequency and intensity "recovery", type joined to all three); turning one dial up makes the linked dial's safe range shrink visibly, so "raise one, lower another" is a picture. (b) A heart-rate zone `WorkedExample` (g01 layout). (c) A six-week progression bar chart where exactly one variable moves per step and week 5 drops. (d) A session card (`SessionCard`) that turns the four dials into Monday's written session, used for the stranger test and the handoff. (e) Both attempts.
- **Entry knowledge.** hms-y11-m2-v12 (aerobic against anaerobic training, the work-to-rest ratio, methods, relative prescription, 48 h recovery); v10 (fourth-quarter fade as a recovery failure; the 85% ceiling); v09 (the 400 m is glycolytic); v05 (heart rate, maximum heart rate as a ceiling). Not assumed: FITT, frequency, intensity, time and type as program variables, maximum heart rate estimate, target zone, 1RM, RPE, progressive overload, recovery week.
- **Terms.** FITT (2); maximum heart rate, target zone, 1RM, RPE (3); progressive overload (5). Each gloss writes beside its part.
- **Visual system.** One recurring model introduced here (as the route lists): the **FITT four dials (interacting)**. Plates: one new (`hms-heart-rate-watch-v1.png`, the route's heart-rate watch face, shared with v14); reused `hms-running-shoe-calendar-v1.png` (m1-v10, approved: the route's training calendar), `ma12-stopwatch-v1.png`, `hms-netball-ring-ball-v1.png` (v08), `hms-starting-blocks-v1.png` (v03, approved, attempt 2's 400 m). No people, hands or faces: the athlete is a program card and an age chip; the watch lies on a bench with no wrist.
- **Attempt.** 9a: written for this video (3 marks). 9c: written for this video from the site's Activity 2 program 2 (4 marks).
- **Memory aids.** The site's own lines: "Raise one variable and say which other one must fall" (the course brief's example, written "Raise one at a time; a big rise costs another dial" since Revision 2) and the stranger test ("Could a stranger run Monday?"). FITT is the syllabus's acronym. Scene 8, after 2 to 7.
- **A mistake/fix beat** is in 4 ("every variable up at once", crossed). Other fixes: "go hard" crossed as an intensity in 2; "220 minus age is your real maximum" crossed in 3; "a recovery week is a wasted week" crossed in 5; "FITT complete means a good program" crossed in 6; "sprint work for a netballer who fades" crossed in 7; "it's all specified, so it's fine" crossed in 9d.
- **Reuse (inspected 24 Nov unless approved and not yet painted):** `ma12-stopwatch-v1.png` (inspected); `hms-running-shoe-calendar-v1.png` (approved m1-v10), `hms-netball-ring-ball-v1.png` (approved v08), `hms-starting-blocks-v1.png` (approved v03), all not yet painted.
- **Colour key.** The four dials olive with letter labels; frequency, intensity, time and type readouts in ink; trade-off links amber; the recovery link teal; aerobic sessions teal and anaerobic plum-orange as v12; the recovery week pale green; givens amber; green answers; red only for crossed mistakes.
- **Type sizes.** As the course brief.
- **Anchor.** The `FittDials` are the anchor: they open the video, carry 2 to 5, write the netball program in 7, and become the handoff session card.
- **Simulation.** The dial links use one rule for the visible safe ranges: sustainable time at an intensity follows the v10 and v12 thresholds (below about 85% of maximum heart rate, 20 to 60 minutes; above 85%, efforts of seconds to about 2 minutes); frequency's safe range is 4 to 6 per week for aerobic and 2 to 3 for heavy anaerobic work (48 h). No continuous physiological numbers are drawn; the dials show ranges only.
- **Board stages.** (1) the calendar and the dials, scenes 1 and 2; (2) the heart-rate strip, scene 3; (3) the linked dials, scene 4; (4) the progression chart, scene 5; (5) the outside-FITT checklist, scene 6; (6) the netball program card, scene 7; (7) memory, questions, close, handoff and notes.
- **Root rulings (24 Nov).** The new plate `hms-heart-rate-watch-v1.png` and site correction 22 are approved.

Main question: *How do you turn 'train harder' into a program someone could actually follow, using FITT?*
Entry knowledge: hms-y11-m2-v12, v10, v09, v05 (as above).
Stops after: writing each FITT variable as a number; setting intensity by percentage of maximum heart rate (with the estimate's limitation), 1RM or RPE; explaining how the variables constrain each other; building a progression one variable at a time with a recovery week; naming what FITT does not cover; designing and justifying a program from the demands.
Handoff: immediate responses to exercise (route entry hms-y11-m2-v14). **Handoff frame (hms-y11-m2-v14 opens from it):** the netball program's Monday `SessionCard` at the left ("F: 3 per week; I: 70 to 85% max HR, 143 to 173 bpm; T: 30 min, incl. 4 × 4 min at the top of the zone; T: fartlek"), a "start" marker just pressed; the new plate `hms-heart-rate-watch-v1.png` at the right, its blank face carrying a coded heart-rate readout that begins to climb from a resting value of about 70 bpm, with a small trace starting to rise beside it; the "Next" chip at the lower right reads "Next: what changes the moment you start exercising?"; this video's heading at the top left.

## Script and shots

15 scene files (1 to 8, 9a to 9d, 10, 11). No people, hands or faces appear at any point.

### 1. hook (the whole program)
> Here are four dials, one for each decision a program has to make. Now here's a real program, handed to a sixteen-year-old who wants a faster five kilometres. Run four times a week. Go hard. Build up over the term. That's the whole thing. What would they have to ask before they could do Monday's session? And one of those three sentences is genuinely useful. Which one?

Visual: opens on v12's handoff frame (the four empty dials "F", "I", "T", "T" with the session bar small beneath, the v12 Next chip). The Next chip leaves and the heading rewrites to "How do you turn 'train harder' into a real program?" (60 px). On "one for each decision" each dial's empty readout blinks once. On "here's a real program" the approved plate `hms-running-shoe-calendar-v1.png` lands at the right (about 700 px; a worn shoe below a wall calendar), and a coded note card pins to the calendar, three lines writing one per cue (38 px): "Run four times a week." on "Run four times a week", "Go hard." on "Go hard", "Build up over the term." on "Build up over the term". On "That's the whole thing" a grey tag "the whole program". On "What would they have to ask" small amber question chips begin to pile up beside the card ("how hard?", "how long?", "what kind of run?", "which days?", "how much rest?", "build up how?"), six in all. On "one of those three sentences is genuinely useful" the three lines each take a faint outline; on "Which one?" an amber question mark (34 px). Hold one second.

### 2. four decisions, and the stranger test
> **FITT** is four decisions. Frequency: how often, and so how much recovery falls between sessions. Intensity: how hard, which decides the energy system trained. Time: how long, including the work and rest inside the session. And type: which method. Here's the test for any program. Could a stranger run Monday's session from what's written? "Go hard" fails, because it isn't a number. "Build up" fails, because it isn't a plan. "Run four times a week" survives, because it's a frequency and a type a stranger could act on. Every question you'd have to ask is a decision the program didn't make.

Visual: board change to the dials (`FittDials`, solid from its first frame): four dials in a row, each with a label below. On "FITT" the gloss "FITT: frequency, intensity, time, type" (34 px). Each dial lights and writes its label and question one per cue (30 px): on "Frequency: how often" "F: how often", a small teal recovery gap drawing between two session blocks on "how much recovery falls between sessions"; on "Intensity: how hard" "I: how hard", with v09 and v10's three system tones on its arc on "which decides the energy system trained"; on "Time: how long" "T: how long", with v12's session bar tiny inside it on "the work and rest inside the session"; on "type: which method" "T: which method", with v12's method chips tiny. On "Could a stranger run Monday's session" a blank `SessionCard` writes at the right, "Monday", with four empty lines (F, I, T, T). On "fails, because it isn't a number" the hook's "Go hard." line slides onto the intensity line and is crossed in red, tag "not a number"; on "fails, because it isn't a plan" the "Build up over the term." line slides beside the card and is crossed, tag "not a plan"; on "survives, because it's a frequency and a type" that line fills the frequency and type lines ("4 per week", "running") with green ticks, and the hook's question mark turns into a green tick. On "Every question you'd have to ask" the hook's six question chips drop onto the empty dials and card lines they belong to. Hold one second.

### 3. intensity, as a number
> Intensity matters most, so it has to be a number. There are three ways. First, a percentage of **maximum heart rate**, estimated as two hundred and twenty minus age. For a sixteen-year-old, that's two hundred and four. Seventy to eighty-five per cent gives a target zone of about one hundred and forty-three to one hundred and seventy-three beats per minute. But the formula is a population average. A real sixteen-year-old's maximum can be ten or more beats either side, so treat the zone as a starting point. Second, for weights, a percentage of the heaviest load you can lift once. Third, perceived exertion, a score out of ten. It needs no equipment, so for a school squad with no monitors, it's the right choice, though beginners tend to under-rate hard efforts.

Visual: board change to the heart-rate strip (g01 `WorkedExample` layout, solid from its first frame): the intensity dial small at the top left; the new plate `hms-heart-rate-watch-v1.png` at the right (about 420 px; a sports watch with a blank face on a bench, no wrist). On "three ways" three tabs write across the top: "% max heart rate", "% 1RM", "RPE" (30 px), the first lit. On "maximum heart rate" the gloss "maximum heart rate: the highest your heart can reach" (34 px); on "two hundred and twenty minus age" the equation strip writes "max HR ≈ 220 − age" (38 px). On "For a sixteen-year-old" the task strip writes "16 years old; zone 70 to 85%"; on "that's two hundred and four" stage 1 "220 − 16 = 204 bpm". On "Seventy to eighty-five per cent" stage 2 writes "0.70 × 204 = 142.8 ≈ 143" and "0.85 × 204 = 173.4 ≈ 173"; on "about one hundred and forty-three to one hundred and seventy-three beats per minute" a framed answer "target zone: about 143 to 173 bpm", gloss "target zone: the heart rates for the intended intensity" (30 px), and the watch face shows a coded band 143 to 173. On "the formula is a population average" a chip "220 − age is your real maximum" writes and is crossed in red; on "ten or more beats either side" an amber error bar spans about 192 to 216 around 204, tag "estimate: about ±10 to 12"; on "treat the zone as a starting point" the band's edges soften. On "a percentage of the heaviest load you can lift once" the second tab lights with a coded bar "1RM: the most you can lift once" and three bands: "above 85%: 1 to 5 reps, strength", "70 to 85%: 6 to 12, strength and size", "below 70%: 15+, endurance". On "perceived exertion, a score out of ten" the third tab lights with a 1 to 10 scale, "6 to 7 moderate", "9 to 10 maximal", gloss "RPE: rating of perceived exertion" (30 px); on "for a school squad with no monitors, it's the right choice" a green tick on the RPE tab; on "beginners tend to under-rate hard efforts" a small amber caveat "novices under-rate". Hold one second.

### 4. the dials are linked
> The four letters look like a list, but they're linked. Intensity trades against time: the harder the effort, the shorter you can hold it, exactly like the energy systems. Intensity trades against frequency, through recovery. You adapt during recovery, not during the session, so hard work every day doesn't add fitness. It piles up fatigue. And type limits the rest. A plyometric session is short and intense by its nature. And time includes the rest: forty minutes with eight minutes of work is a different session from forty minutes of running. So within one session, if you raise one dial a lot, name the one you lower to pay for it. A program where every dial goes up at once isn't ambitious. It's unplanned.

Visual: board change to the linked dials (solid from its first frame): the four dials in a diamond, with link lines (amber "trade-off" between intensity and time; teal "recovery" between intensity and frequency; thin grey lines from type to all three). On "Intensity trades against time" the intensity dial turns up and the time dial's safe range visibly shrinks (green arc from "20 to 60 min" to "seconds to 2 min" past the 85% of maximum heart rate mark), with v10's share stack tiny turning plum on "exactly like the energy systems". On "Intensity trades against frequency, through recovery" the teal link glows; on "You adapt during recovery, not during the session" a coded week strip writes with session blocks and teal recovery gaps, a small upward "adaptation" step appearing in each gap, not in the blocks; on "hard work every day" the gaps close and the steps vanish; on "It piles up fatigue" a grey fatigue bar stacks up across the week. On "type limits the rest" the type dial set to "plyometric" clamps the other three dials to narrow arcs (high intensity, short time, low frequency). On "time includes the rest" two 40-minute session bars write under the time dial, one solid teal, one with eight minutes of plum work blocks in pale grey rest, tag "same clock, different session". On "name the one you lower to pay for it" a single session card's intensity dial rises while its time dial falls in step, amber hand tag "a big rise costs another dial" (42 px), grey tag "within a session" (Revision 2: scoped to one session; week-to-week progression is scene 5's rule). On "every dial goes up at once" all four dials spin up together and a chip "every variable up at once" writes and is crossed in red; on "It's unplanned" a red outline on the four. Hold one second.

### 5. build up, one step at a time
> Now "build up over the term". Once the body adapts, the same load stops being a challenge, so the program has to plan **progressive overload**. The safe rule is one variable at a time, in small steps. Change two at once, and if something goes wrong, you can't tell which change caused it. And plan a week where the load comes down. That's when the fatigue clears and the fitness you've built actually shows. A program that only ever goes up has confused the training with the adaptation.

Visual: board change to the progression chart (solid from its first frame): six week rows, each a load bar with three small readouts "F", "I", "T" (30 px). On "build up over the term" the hook's crossed "Build up" line returns small at the top left. On "progressive overload" the gloss "progressive overload: gradually raising the demand so adaptation continues" (34 px). Rows fill as the rule is spoken: on "one variable at a time, in small steps" weeks 1 to 4 write, each change highlighted in amber: "wk 1 to 2: 3 per week, 70%, 30 min", "wk 3: 3, 70%, 33 min (time only)", "wk 4: 3, 75%, 33 min (intensity only)". On "Change two at once" a ghost row shows F and T both amber with a red question mark "which caused it?". On "a week where the load comes down" "wk 5: 3, 70%, 25 min (recovery week)" writes in pale green, its bar shorter; on "That's when the fatigue clears" a grey fatigue bar beside the chart drains in week 5 and a small green adaptation step rises; "wk 6: 3, 75%, 36 min (time only)" writes, the longest bar. A chip "a recovery week is a wasted week" writes and is crossed in red on "has confused the training with the adaptation", amber hand tag "the recovery week shows the gain" (34 px). Hold one second.

### 6. what FITT doesn't check
> But a program can fill in all four letters and still be wrong. FITT doesn't check that the type suits the sport. A netballer given perfect continuous running has a complete program aimed at the wrong quality. That's called **specificity**: training the quality the event needs. It doesn't check the starting point suits the athlete. It doesn't include a warm-up, a cool-down or safe technique, and every session needs them. And it doesn't say what happens after six weeks, when fitness fades if training stops. Year 12 adds the principles that cover these.

Visual: board change to the checklist (solid from its first frame): a complete `SessionCard` at the left, all four lines filled and ticked green, tag "FITT complete" (30 px); an empty four-box checklist at the right headed "outside FITT". On "still be wrong" a chip "FITT complete means a good program" writes and is crossed in red. Boxes fill one per cue (30 px): on "FITT doesn't check that the type suits the sport" "1 type matches the sport?"; on "A netballer given perfect continuous running" the netball thumbnail beside a long teal continuous block, a red mismatch mark against v10's spiky match strip tiny; on "specificity" the gloss "specificity: training the quality the event needs" (34 px, Revision 2) writes under box 1; on "the starting point suits the athlete" "2 suits this athlete's start?", v12's capacity bars tiny; on "a warm-up, a cool-down or safe technique" "3 warm-up, cool-down, technique?"; on "every session needs them" the card gains two lines, "warm-up" at the top and "cool-down" at the bottom, in green; on "fitness fades if training stops" "4 after six weeks?", a small curve rising then falling. On "Year 12 adds the principles" a grey chip "principles of training: Year 12". Hold one second.

### 7. a program, justified
> Here's the method, on a sixteen-year-old netballer who fades in the fourth quarter. Start with the demands, not the program. Her efforts last a few seconds, but fading late is a failure to recover between them, and recovery is the aerobic system's job. So choose an aerobic program, even though her efforts are anaerobic. Frequency: three sessions a week on top of team training, with no two hard days in a row. Intensity: seventy to eighty-five per cent of maximum heart rate. Time: thirty minutes, one session with four four-minute blocks at the top of the zone. Type: fartlek, because its changes of pace are closer to the game. Every number comes with its reason.

Visual: board change to the program card (solid from its first frame): `hms-netball-ring-ball-v1.png` small at the top left, a goal chip "fade less in the fourth quarter" (30 px). On "Start with the demands" a demands strip writes first, before any dial: v10's `MatchStrip` tiny, "efforts 2 to 5 s; jogging between". On "fading late is a failure to recover between them" the strip's late PCr gauges show the v10 less-fit refill, tag "recovery fails late"; on "recovery is the aerobic system's job" the teal troughs glow. On "choose an aerobic program, even though her efforts are anaerobic" a teal "aerobic program" tag lands on the card, and a chip "more sprint work" writes and is crossed in red. The four dials fill the card one per cue, each with a number and a reason in one line (30 px): on "Frequency: three sessions a week" "F: 3 per week + 2 team sessions; no hard days back to back"; on "Intensity: seventy to eighty-five per cent" "I: 70 to 85% max HR (about 143 to 173 bpm, adjust to her)", the worked answer from 3 tiny; on "Time: thirty minutes" "T: 30 min; one session 4 × 4 min at the top, 2 min easy"; on "Type: fartlek" "T: fartlek: pace changes like the game". On "Every number comes with its reason" each line's reason half underlines amber, tag "number + reason" (42 px). Hold one second.

### 8. memory
> Two things to remember. Raise one dial at a time, and a big rise costs another dial. And could a stranger run Monday's session?

Visual: board change to the memory card (solid from its first frame): the four dials small at the left beside a dark-ink framed card (52 px): "Raise one at a time; a big rise costs another dial" (written with "Raise one dial at a time") and "Could a stranger run Monday?" (written with "could a stranger run Monday's session?"). This card returns beside the key notes. Hold half a second.

### 9a. attempt one (an eighteen-year-old's zone)
> Two exam questions. First. Calculate an aerobic training zone of seventy to eighty-five per cent of maximum heart rate for an eighteen-year-old, and state one limitation of the method. Pause here to answer.

Visual: the board clears. `QuestionScene`: the card arrives in one move with its whole text (38 px), tagged "HSC-style question, written for HSCScience". Demand: "Using 220 minus age, calculate an aerobic training zone of 70 to 85% of maximum heart rate for an 18-year-old athlete, and state one limitation of this method. (3 marks)" Picture: the watch plate small with a blank face and the empty equation strip. **The countdown ring is shown full from "Pause here to answer." and runs for 10 seconds.** The whole card stays on screen during the countdown and after it.

### 9b. feedback, item one
> Two hundred and twenty minus eighteen is two hundred and two. Seventy per cent is about one hundred and forty-one, and eighty-five per cent is about one hundred and seventy-two. The limitation: the formula is an average, so a real maximum can be ten or more beats out. The classic mistake is treating the estimate as measured.

Visual: `FeedbackScene`: the card shrinks to the top; the equation strip fills one stage per cue (30 px): on "Two hundred and twenty minus eighteen" "1 220 − 18 = 202 bpm"; on "Seventy per cent is about one hundred and forty-one" "2 0.70 × 202 = 141.4 ≈ 141; 0.85 × 202 = 171.7 ≈ 172", framed "zone: about 141 to 172 bpm" in green; on "the formula is an average" "3 limitation: population estimate, about ±10 bpm", the amber error bar. On "classic mistake" a chip "220 − age is measured" writes and is crossed in red, red hand tag "an estimate: adjust it" (34 px). Settle one second.

### 9c. attempt two (the 400 m program)
> Second. A four-hundred-metre runner's program is: four sessions a week, sixty minutes of continuous running at seventy per cent of maximum heart rate, adding ten minutes each week. Every FITT variable is written as a number. Explain why the program is still unsuitable. Pause here to answer.

Visual: the board clears. The card arrives in one move with its whole text (38 px), tagged "HSC-style question, written for HSCScience". Demand: "A 400 m runner's program reads: 'Four sessions a week, 60 minutes of continuous running at 70% of maximum heart rate. Progress by adding 10 minutes each week.' Every FITT variable is specified. Explain why this program is still unsuitable for the athlete. (4 marks)" Picture: the approved plate `hms-starting-blocks-v1.png` small beside a filled `SessionCard`, all four lines ticked. **The countdown ring is shown full from "Pause here to answer." and runs for 10 seconds.** The whole card stays on screen during the countdown and after it.

### 9d. feedback, item two
> A four hundred lasts about a minute, near all-out, so it depends on the glycolytic system. This program trains the aerobic system instead: seventy per cent of maximum heart rate, continuous, no hard efforts. That's a specificity fault, which FITT can't catch. And adding ten minutes a week builds even more of the wrong quality. The classic mistake is passing it because every box is filled.

Visual: `FeedbackScene`: the ticked card stays; v09's 400 m window tiny with its plum band; a green-framed four-line answer writes one per cue (30 px): on "it depends on the glycolytic system" "1 demand: 45 to 60 s near-maximal, glycolytic"; on "This program trains the aerobic system instead" "2 program: 70%, continuous: aerobic base"; on "That's a specificity fault, which FITT can't catch" "3 type doesn't match the event: outside FITT", the scene 6 checklist's box 1 lighting red; on "adding ten minutes a week" "4 progression adds more of the wrong quality". On "classic mistake" a chip "every box filled, so it's fine" writes and is crossed in red, red hand tag "check the type against the event" (34 px). Settle one second.

### 10. decision rule and handoff
> So, to design any program, start from the demands, then set four numbers, each with a reason. Now press start on Monday's session. Within seconds, before anything has adapted, the heart rate is already climbing. What changes the moment you start exercising?

Visual: two chips write on (38 px): "demands first" on "start from the demands", "four numbers, four reasons" on "set four numbers, each with a reason". On "press start on Monday's session" the chips fade and the netball program's Monday `SessionCard` settles at the left, a small "start" marker pressing; the watch plate settles at the right. On "Within seconds" a coded heart-rate readout appears on the watch's blank face at about 70 bpm; on "the heart rate is already climbing" it begins to climb with a small rising trace beside it. On "What changes the moment you start exercising?" the "Next" chip slides in: "Next: what changes the moment you start exercising?" **This is the handoff frame; hms-y11-m2-v14 opens from it.** Hold half a second.

### 11. key notes (quiet, hold about 45 seconds)
Heading on screen: "Key notes: what to write in your book".
> Here are the key notes. Pause the video if you need more time to copy them.

1. FITT: frequency, intensity, time, type; each a number a stranger could follow.
2. Intensity: % of max HR (220 − age, about ±10 bpm), % of 1RM, or RPE out of 10.
3. Variables trade: harder means shorter, and needs more recovery between sessions.
4. Progress one variable at a time in small steps; plan a lighter recovery week.
5. FITT misses: type matching the sport, the athlete's start, warm-up, cool-down.

Memory card (the scene 8 card) beside the notes. Each bullet one line of at most 86 characters. Hold about 45 seconds in all.

## Practice question and feedback

Two unseen items (9a to 9d), "Pause here to answer." and a 10 s countdown each, cards on screen during and after; marks on the card; tag "HSC-style question, written for HSCScience". Both are written for this video; neither repeats the 16-year-old's zone (3) or the netball program (7).

1. (9a, 3 marks.) Maximum heart rate 220 − 18 = 202 bpm (1 mark); zone 0.70 × 202 ≈ 141 to 0.85 × 202 ≈ 172 bpm (1 mark); a limitation: a population estimate with an error of about 10 to 12 bpm, so the zone needs adjusting to the individual (1 mark). Classic mistake crossed: treating the estimate as measured.
2. (9c, 4 marks.) The event's demand: about 45 to 60 s near-maximal, predominantly glycolytic (1 mark); the program's intensity and type train the aerobic system, not the glycolytic one (1 mark); the fault is specificity, which FITT does not check (1 mark); the progression adds more of the wrong stimulus (or a repair: short intervals at high intensity with prescribed recovery) (1 mark). Classic mistake crossed: "every box filled, so it's fine".

Feedback spoken lengths about 23 s (9b) and 26 s (9d) by script; time the exact audio.

## Numbers or facts to verify

Self-check (24 Nov). The Codex science check must confirm each before voicing.
- **FITT examples (2).** Aerobic 4 to 6 sessions per week, 70 to 85% max HR, 30 to 60 min; anaerobic 2 to 3 per week with 48 h between heavy sessions, above 85%.
- **Intensity (3).** Max HR ≈ 220 − age, error about 10 to 12 bpm (Tanaka, Monahan and Seals, 2001, give a standard error near 10 bpm; the video says "ten or more beats either side"); 220 − 16 = 204; 0.70 × 204 = 142.8; 0.85 × 204 = 173.4; error bar 192 to 216 (204 ± 12); 1RM bands (above 85%: 1 to 5 reps; 70 to 85%: 6 to 12; below 70%: 15+); RPE 1 to 10, 6 to 7 moderate, 9 to 10 maximal.
- **Interactions (4).** Adaptation during recovery; overtraining from accumulated load; plyometric constraints.
- **Progression (5).** One variable at a time; planned recovery (deload) week; the video's table: week 1 to 2, 3 × 30 min at 70% (90 min); week 3, 3 × 33 min (99 min, +10%); week 4, 3 × 33 min at 75% (intensity only); week 5, 3 × 25 min at 70% (75 min, recovery); week 6, 3 × 36 min at 75% (108 min, +9% on week 4). The "10% rule" itself is not taught (site correction 22).
- **Outside FITT (6).** Specificity, individuality, warm-up and cool-down, reversibility.
- **Netball program (7).** Netball efforts 2 to 5 s; fourth-quarter fade as recovery failure (v10); 3 extra sessions, 70 to 85% (143 to 173 bpm for 16), 30 min with 4 × 4 min at the top of the zone and 2 min easy, fartlek.
- **Attempts.** 220 − 18 = 202; 0.70 × 202 = 141.4; 0.85 × 202 = 171.7; 400 m 45 to 60 s glycolytic (v09).
- **Official figures.** None.
- **No em dashes** in this file (searched by script).

## Memory aid check

- **"Raise one at a time; a big rise costs another dial."** (Revision 2 wording; the old card "Raise one, name the one you lowered" contradicted scene 5's week-by-week rises.) The first half is scene 5's progression rule; the second is scene 4's within-session trade-off. Assumption: total load is near what the athlete can recover from. For a beginner well below capacity, two variables can rise together safely for a while; the rule is a planning discipline for a loaded athlete. Author note.
- **"Could a stranger run Monday?"** Assumption: the program is written for someone else to follow. True of any exam "design" answer; it tests specification, not quality, which scene 6 says.

## Narration length estimate

Revision 2 count (24 Nov; by script with the build parser rules: only lines starting "> ", joined with a space, bold markers removed): **5809 characters**, 14 scene files. At 13.3 characters per second the speech is about 437 s; add 28 s of padding (2 s per scene) and 72 s of stated holds, settles, the two 10 s countdowns and the rest of the quiet notes hold: **about 537 s**.

| Scene | Characters |
| --- | --- |
| 1. hook (the whole program) | 369 |
| 2. four decisions, and the stranger test | 590 |
| 3. intensity, as a number | 763 |
| 4. the dials are linked | 712 |
| 5. build up, one step at a time | 483 |
| 6. what FITT doesn't check | 552 |
| 7. a program, justified | 667 |
| 8. memory | 127 |
| 9a. attempt one (an eighteen-year-old's zone) | 206 |
| 9b. feedback, item one | 326 |
| 9c. attempt two (the 400 m program) | 291 |
| 9d. feedback, item two | 391 |
| 10. decision rule and handoff | 257 |
| 11. key notes (quiet, hold about 45 seconds) | 75 |

Reserve cuts: (1) scene 3, the 1RM sentence (keep the bands silent); (2) scene 6, the Year 12 sentence; (3) scene 4, the plyometric sentence. Do not cut below 5,500 without replacing content.

## Assets

Have (reused, inspected 24 Nov unless approved and not yet painted): `ma12-stopwatch-v1.png` (inspected; not needed on screen in this revision, held for the build if a timer is wanted); HMS plates approved: `hms-running-shoe-calendar-v1.png` (m1-v10), `hms-netball-ring-ball-v1.png` (v08), `hms-starting-blocks-v1.png` (v03). Coded: `FittDials` with links, `SessionCard`, heart-rate `WorkedExample`, intensity tabs, week strip with adaptation steps, progression chart, outside-FITT checklist, v10's `MatchStrip` (tiny), question cards, countdown. No people.

Need (new plate):
1. `hms-heart-rate-watch-v1.png`: scenes 3, 9a, 10; v14's opening.

Kit gaps: `FittDials`, `SessionCard` in `hms-shared`.

## Codex asset brief (HMS-Y11-B13, the heart-rate watch)

Standing rules as v01's brief: house watercolour style, transparent PNG with true alpha, never stretched, no readable text, no brands or logos. Every plate: no people, hands or faces anywhere in the image.

1. `hms-heart-rate-watch-v1.png` (1400 x 1400): a plain sports watch with a fabric strap lying on a wooden bench, its large round face blank and evenly lit (leave the face empty and flat so coded readouts can sit on it), a small optical sensor visible on the underside edge. No people, hands, wrists or faces anywhere in the image; no logos, numbers or text on the watch.

Hand-in to `status.md`; provenance `docs/production/claude-pm/assets/hms-y11-b13-provenance.json`.

## Codex learning review and science check brief (HMS-Y11-B13)

- **Learning review:** trace from v12 and v10. Does the stranger test (2) make "a number, not an adjective" concrete before the numbers arrive? Is the heart-rate strip one stage at a time, with its limitation visible? Do the linked dials (4) show trade-offs rather than state them? Does 7 model the design order (demands first) that an exam "propose" answer needs? Is the hook's "which sentence survives?" answered clearly? Are both attempts unseen?
- **Science check:** every item in "Numbers or facts to verify", especially the heart-rate estimate's error, the 1RM bands, the progression table (site correction 22), and the model answers' mark splits.

## Codex error-check brief (HMS-Y11-B13, after the reviews)

Error-only: every quoted cue appears word for word in its scene in spoken order; the opening matches v12's handoff frame and the closing matches hms-y11-m2-v14's route opening (a FITT session card starts and a heart-rate readout begins to climb); every product and percentage is correct; one variable changes per progression step; no people, hands, wrists or faces; no em dash, no U+2061; no module number or course label on screen.

## YouTube metadata (draft)

- Title: "Designing a Training Program with FITT: Frequency, Intensity, Time and Type | HSC Health and Movement Science"
- Description:

"Full lesson, notes and practice questions: https://hscscience.com.au/subjects/health-movement-science/year11/module2/lesson13.sa.html

How do you turn 'train harder' into a program someone could actually follow, using FITT? The four FITT decisions and the stranger test, setting intensity by heart rate (with the limits of 220 minus age), one-repetition maximum or perceived exertion, why the variables trade against each other, progression one step at a time with a recovery week, what FITT does not cover, and a program designed and justified for a netballer who fades in the fourth quarter. Includes two exam-style questions with brief feedback. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Health and Movement Science 11-12 (2023 syllabus), Year 11: The body and mind in motion.
Syllabus content (NSW Health and Movement Science 11-12, 2023):
"Design an aerobic or anaerobic training program based on the FITT principle"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/pdhpe/health-and-movement-science-11-12-2023

Previous: What makes a session aerobic or anaerobic?
Next: What changes the moment you start exercising?

#HealthAndMovementScience #HSC #HSCScience"

## Open decisions

- None. Resolved by root (24 Nov): the new plate `hms-heart-rate-watch-v1.png` and site correction 22 are approved.

## Build ids

Lesson key `hms11b13`; folder `src/explainer/lessons/hms-y11-m2-v13`; build folder `docs/production/claude-pm/lessons/hms11b13`. Imports `hms-shared` (`WorkRestDial`, `MatchStrip`, `ShareCurves`; new `FittDials`, `SessionCard`), the g01 `WorkedExample` layout, `src/explainer/math/graphs.tsx`.

Scene headings (15): hook, four-decisions, intensity, linked, progression, outside-fitt, program, memory, attempt, feedback-one, attempt-two, feedback-two, handoff, key-notes.

Holds and transitions as v12. Teaching scenes are board changes; the dials thread through 1, 2, 4 and 7.

## Review notes (author, not learner copy)

- **Teaching checks.** Causes: why intensity must be a number (2, 3); why the formula needs adjusting (3); why hard work every day reduces gains (4); why one variable at a time (5); why a recovery week helps (5); why a netballer who fades needs aerobic work (7). Attention: a three-sentence program everyone recognises; dials that pull on each other. Visual medium: linked dials whose safe arcs shrink; a week strip where adaptation steps sit in the gaps. Apply: a new age's zone (9a); a fully specified wrong program (9c). Remember: raise one at a time, a big rise costs another dial; the stranger test.
- **Overlap.** v14 measures the responses Monday's session produces; v15 tests to set baselines; Year 12 owns principles, session design and periodisation.
- **No em dashes** in this file (searched by script).

## Revision 2: learning review resolved (24 Nov 2026)

Review: `../checks/hms-y11-m2-v13-learning-review.md` and the module summary `../checks/hms-y11-m2-learning-review-summary.md`. Written design only; nothing voiced or built.

1. **Should fix, the memory card conflicted with scene 5's progression (root ruling 8).** Scene 4's rule is now scoped to one session: "So within one session, if you raise one dial a lot, name the one you lower to pay for it." The card now reads "Raise one at a time; a big rise costs another dial", which matches both scene 5 (one variable at a time, week to week) and scene 4 (the trade inside a session). The memory aid check is updated.
2. **Should fix, 9d marked "specificity" before it was taught (root ruling 8).** Scene 6 now names it: "That's called specificity: training the quality the event needs." A gloss writes under the checklist's first box, so 9d's mark rests on a taught term.
3. **Note, plate.** The watch plate is still unpainted; the coded readout carries scenes 3 and 10 if it is late.
4. **Root ruling 4, percentages.** 9d's "below eighty-five per cent" is now "seventy per cent of maximum heart rate" (the card's own figure), and the scene 4 time-dial arc reads "85% of maximum heart rate".
5. **Style.** Two en dashes in the decisions section (between "time" and "intensity", and between "frequency" and "intensity") became "and".

Narration changed in 4, 6, 8 and 9d. Recount: 5,809 characters, about 537 s (Revision 1 about 528 s). `cues.py`: 0 findings. The joins with v12 and v14 are unchanged.
