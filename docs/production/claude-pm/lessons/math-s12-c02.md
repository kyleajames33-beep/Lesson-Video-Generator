# Maths S12 C02: How do forward and backward scans find the earliest and latest start times? Earliest times left to right (wait for the slowest), the finish as the shortest project time, latest times right to left (don't hold anyone up), and each activity's EST and LST (design)

Status: Revision 2 (19 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (19 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Standard designs (`math-s12-r12a.md`, `t05.md`, `i09.md` at Revision 2, and their resolution logs), c01b's final frame (`math-s12-c01b.md` scene 12) and root's Standard rulings (1 to 76; ruling 72, the café and the shed; ruling 74, site errors never taught). Designer's decisions for c01a to f04, including every join: `../checks/root-decisions-maths-s12-c01-f04.md`. Next: student learning review, then the Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,030 characters by script (see "Narration length estimate"; Revision 2), 13 scene headings, about 493 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (19 Nov 2026): learning review resolved

Review: `../checks/m-s12-c02-learning-review.md` (summary `../checks/m-s12-c01-f04-learning-review-summary.md`), with root's rulings 1 to 81 in `../checks/root-rulings-maths-standard-outline.md` and root's resolution brief of 19 Nov. Resolution log: `../checks/m-s12-c01-f04-learning-review-resolution.md`. Findings by the review's numbers:

1. Should fix, scene 12 (the handoff primes MS-53): **accepted**, reviewer's wording with the bold cue kept. "Some events have the same earliest and latest times, and some don't. Which jobs have room to move, and which can't **slip** at all without making the whole build late?" "That difference tells us" and the repeat "So which jobs can't slip?" are cut, so no difference between an event's two times is offered as float (ruling 74). The soft rings stay on the boxes, and arrows B and F now ring softly on "room to move" (no number or tag), so attention moves to the activities. Those two rings fade on "slip", so the final frame is unchanged.
2. Optional, scene 6 (the pies' window): **applied**, reviewer's reason in the sentence's own subject ("because their EST is ten and their LST is twenty"), with a chip "D: EST 10, LST 20" sliding from scene 5's table to the bracket's ends. No reserve trim was needed.

Open decisions: 1 is closed (ruling 81: the shed keeps its dummy); 2 (no second worked network) is unruled and the review did not object. Joins unchanged: scene 1 opens on c01b's final frame, and scene 12's final frame (c03's opening) is unchanged.

Narration 5,030 characters by script (Revision 1: 5,031), about 493 s with holds, 77 s under the 570 s cap; feedback speech about 26 s and 26 s. Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. Nothing recorded; human listening pending.

Scope: third video of the Critical path analysis strand, playlist order 84. **Standard 2 only.** Pre-design pack: `../pre-design/maths-standard/math-s12-c02.md`. Site lesson (read through the pack's quotations, read only): `maths-standard/year12/critical-path-analysis/lesson02.sa.html` (SHA256 `8942c2958c33dd25018d79f76c9a8ec7d52ec4fdffbff0198f9afe4ef471d3a3`; card 1, "If two or more paths arrive at the same node, take the maximum you must wait for all predecessors to finish."; card 2, "Why minimum? If one successor needs you by day 5 and another by day 8, you must start by day 5 to avoid delay."; the split node boxes). Also `lesson05.sa.html` Worked Example 2 (scans through a dummy: "Node 1(0,0), Node 2(4,4), Node 3(4,4), Node 4(9,9)"). Route entry: `math-s12-c02` in `../../programme/maths-standard-route-inputs-7.json`. Visual system: maths studio kit; the café's network (c01b's final frame) as the anchor; a café clock strip; networks coded, HSC style.

Owner rules applied: plates for real objects, code for diagrams; no people, hands or faces; one main question; one stage at a time; words before symbols ("the earliest time we can reach this event" before "earliest start time, EST"); g01 worked example (task strip, network and the activity table apart); two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (the café, a plumber's job, a backyard shed); Australian spelling; no em dashes; conversational narration; text above y = 950.

Syllabus content points (Mathematics Standard 11-12 (2024), Year 12), quoted from `../../programme/maths-standard-route-inputs-7.json`:

Standard 2 (Critical path analysis):
- `ci1ebd8915`: "Apply forward and backward scanning to determine the earliest starting time (EST) and latest starting time (LST) for each activity in a project"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa9c92c4c6

**Boundary:** starts from c01b's final frame exactly (decisions file section 2): the café counter plate small at the top left with the clock chip "6:00 am"; the café's complete network (A 10 1→2, B 15 1→3, dummy 2→3, C 25 3→4, D 20 2→4, E 10 4→5) with an empty split box at each event; chips "how long until we open?", "Next", "?". Recalls c01a and c01b (the network and the dummy) in a phrase or grey chip. Teaches: the forward scan (0 at the start; left to right; at an event with several arrows in, the largest of "earlier time + duration": wait for the slowest); a dummy passes a time across unchanged; the finish's earliest time is the shortest time for the project (café: 50 min, open at 6:50 am); the backward scan (the finish's latest time equals its earliest time; right to left; at an event with several arrows out, the smallest of "later latest time − duration": don't hold anyone up); for each activity, EST = the earliest time at its start event, LST = the latest time at its end event minus its duration (café: A 0 and 5, B 0 and 0, C 15 and 15, D 10 and 20, E 40 and 40). Stops at EST and LST for each activity. Not taught: float, the critical path and the minimum completion time as a named idea (c03).

## Decisions

- **Anchor: the café (c01b's handoff).** Event times: earliest 0, 10, 15, 40, 50; latest 0, 15, 15, 40, 50. The café opens at 6:50 am. D (the pies) is the case where the LST does not equal its start event's latest time (40 − 20 = 20, not 15), the reason the syllabus says "for each activity" (pack decision; MS-53).
- **Words first.** "The earliest time we can reach this event" and "the latest time we can reach it without delaying the finish" come before "earliest start time (EST)" and "latest starting time (LST)". The syllabus's own words are shown once on screen in scene 5.
- **Split event boxes (site presentation).** Earliest time in the left half (teal), latest in the right half (violet). Codex checks the presentation against recent HSC Standard 2 papers (pack decision).
- **No second worked network.** The site's lesson02 Worked Example 3 (A 2, B 4, C 3, D 5, E 2; finish 11) is the pack's first trim; c03 uses that network for float, so the student meets it there. The attempts give the second practice.
- **MS-53 not taught.** A node's "latest minus earliest" is never called an activity's float; c03 defines float per activity.
- **Simulations (standard item 3).**
  1. **ScanSweep, forward** (scenes 2, 3; new kit part): a teal front moves left to right across the café network; at each event the candidate times float in on their arrows ("0 + 15", "10 + 0"), the larger locks into the left half of the box and the smaller fades; a clock strip under the network (6:00 to 6:50) moves its marker to each locked time.
  2. **ScanSweep, backward** (scene 4): a violet front from the right; at an event with two arrows out, the candidates float back ("40 − 20", "15 − 0"), the smaller locks into the right half.
  3. **Activity table from the boxes** (scene 5; `FloatTable`'s first two columns only): each row's EST lifts from its start event's left half, and its LST from its end event's right half with the duration subtracted on the arrow.
- **Colour roles (strand, fixed).** Letters ink; durations blue; earliest times teal (left box halves, the forward front, EST); latest times violet (right halves, the backward front, LST); dummies grey dashed; answer green; mistake red, crossed slips only.
- **Large type, handwritten voice.** Box numbers 44 px; candidate sums 40 px; table rows 48 px. Hand tags: "earliest we can get here", "wait for the slowest", "+0 through the dummy", "shortest time: 50 min", "latest without delaying the finish", "don't hold anyone up", "start from the finish, not 0", "EST: start event", "LST: end event − duration", "the 15 is the dummy's". At most two live at once.
- **Stage changes (standard item 2).** c01b's frame (1); the forward front to event 3 (2); the rest of the forward scan and the clock (3); the backward front (4); g01 board, the activity table (5); the two checks on the clock strip (6); framed card (7); question cards (8 to 11); the shed's scanned network (12); key notes (13).
- **Worked example (g01 layout).** Scene 5: task strip "Find the EST and LST of each activity in the café project."; givens card: the café network with both halves of every box filled, and "EST = earliest time at the start event", "LST = latest time at the end event − duration"; working rows "A: 0; 15 − 10 = 5", "B: 0; 15 − 15 = 0", "C: 15; 40 − 25 = 15", "D: 10; 40 − 20 = 20", "E: 40; 50 − 10 = 40"; framed table (green); crossed slip "D's LST = 15" (caption "15 is event 2's latest time, set by the dummy: D's LST = 40 − 20 = 20").
- **Memory aid.** Framed card: "Forwards: take the largest. Backwards: take the smallest." Key line: "EST = start event's earliest. LST = end event's latest − duration."
- **Visual surprise.** At event 3 the dummy's candidate (10 + 0) floats in and is beaten by B's 15 (2); at event 2, on the way back, the dummy's 15 beats the pies' 20 (4): a zero-time arrow decides a time.
- **Plain meanings at first use.** Forward scan ("working left to right to find the earliest time we can reach each event"); backward scan ("working right to left to find the latest time we can reach each event without delaying the finish"); earliest start time ("the earliest an activity can begin"); latest start time ("the latest it can begin without making the project late").
- **Attempts (original, HSC style; pack questions 1 and 2).** A1: the plumber's job (network given; hours): forward scan; event times 0, 4, 6, 7, 11, 15; EST A 0, B 0, C 4, D 6, E 7, F 11; 15 hours; crossed "D's EST = 4" (caption "D waits for B too: the larger, 6"). A2: the same job's backward scan (finish 15 h given): latest event times 0, 6, 6, 9, 11, 15; LST F 11, D 6, E 9, C 6, B 0, A 2; crossed "A's LST = 0" (caption "event 2's latest is 6, so A's LST = 6 − 4 = 2").
- **Mistake scene:** none separate. Smaller at a merge (A1 crossed; said in 2); the backward scan from 0 (6, said); a start box's latest time taken as the LST (5 crossed); a dummy skipped (2, 4, shown).
- **Cause chain taught, in order:** (1) an activity can't start until all the arrows into its start event have finished, so an event's earliest time is the largest arrival time (2, 3); (2) the finish's earliest time is when the last job can be done, so it is the shortest time for the whole project (3); (3) to avoid delaying the finish, every event must happen in time for the most urgent job leaving it, so its latest time is the smallest (4); (4) an activity's latest start is the latest its end event can happen, minus its duration (5).
- **Entry knowledge (route):** math-s12-c01b (networks with dummies); math-s12-c01a; math-s11-n03 (weighted directed networks). Recalled in a phrase or grey chip.
- **Handoff (to math-s12-c03, the critical path and float).** Scene 12's frame (decisions file section 2): the new plate `ms12-backyard-shed-v1.png` (briefed here; ruling 17) at the left (about 620 px); the shed's network at the right (about 1,150 × 520 px): "A 1" clear the site 1→2; "C 1" pour the slab 2→3; "D 3" slab cures 3→4; "B 4" kit delivery 1→4; "E 2" walls and roof 4→5; "F 1" door and window 5→6; "G 2" paint 5→7; dummy 6→7 (grey, dashed); split boxes 1 (0 | 0), 2 (1 | 1), 3 (2 | 2), 4 (5 | 5), 5 (7 | 7), 6 (8 | 9), 7 (9 | 9); a chip "shed: days"; chips "which jobs can't slip?", "Next" and "?". No float or critical path is shown.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Café: forward 0; 0 + 10 = 10; max(0 + 15, 10 + 0) = 15; max(15 + 25, 10 + 20) = 40; 40 + 10 = 50. Backward 50; 50 − 10 = 40; 40 − 25 = 15; min(40 − 20, 15 − 0) = 15; min(15 − 10, 15 − 15) = 0. EST/LST A 0/5, B 0/0, C 15/15, D 10/20, E 40/40.
  (b) Plumber: A 4 1→2, B 6 1→3, dummy 2→3, C 3 2→4, D 5 3→5, E 2 4→5, F 4 5→6. Earliest 0, 4, 6, 7, 11, 15; latest 0, 6, 6, 9, 11, 15. EST/LST A 0/2, B 0/0, C 4/6, D 6/6, E 7/9, F 11/11.
  (c) Shed: A 1 (–), B 4 (–), C 1 (A), D 3 (C), E 2 (B, D), F 1 (E), G 2 (E). F and G would share both events, so F ends at event 6 with a dummy to 7 (c01b's second case, ruling 71). EST/LST A 0/0, B 0/1, C 1/1, D 2/2, E 5/5, F 7/8, G 7/7 (c03 works it).
  (d) Clock: 6:00 + 10, 15, 40, 50 min = 6:10, 6:15, 6:40, 6:50 am.
  (e) Pronunciations: "E S T" and "L S T" spelt as letters.

Main question: *The café's network is ready. How do forward and backward scans find each activity's earliest and latest start times, and how soon can the café open?*
Entry knowledge (c01a, c01b): networks with dummies.
Stops after: both scans, the finish time, EST and LST for each activity. No float or critical path.
Handoff: the shed's scanned network, "which jobs can't slip?" (c03).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): letters ink; durations blue; earliest teal; latest violet; dummies grey dashed; answer green; mistake red. Header strip "MATHEMATICS STANDARD · CRITICAL PATH ANALYSIS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: how soon can we open?
> The café's network is ready, with its one dummy, and it's six o'clock. If every job starts the moment it can, when is the display finished, and how late could each job start without keeping the doors shut? Each event's box has room for two times, an earliest one and a latest one. Earliest means the soonest we can get there. Latest means as late as we can leave it without opening late. We'll fill them by scanning the network, first forwards and then backwards. So how do forward and backward scans find the earliest and latest start **times**?

Visual: opens on c01b's final frame exactly. On the first sentence "Next" fades. On "starts the moment it can" a clock strip draws under the network: "6:00" at the left, ticks every 5 minutes to "7:00" (32 px). On "two times" each box's left half tints pale teal and the right half pale violet, with small headings "earliest" and "latest" on event 1's box (30 px). On "forwards" a teal arrow sweeps under the network left to right; on "backwards" a violet arrow sweeps back. On "times" heading "Forward and backward scans" writes.

### 2. forward: wait for the slowest
> The forward scan works left to right, and it finds the earliest time we can reach each event. Event one is the start, at zero minutes. Event two is where the oven finishes, so zero plus ten gives **ten**. Event three has two arrows coming in. B arrives at zero plus fifteen, which is fifteen. The dummy brings A's ten across, plus zero, which is still ten. The muffins can't go in until both have arrived, so we take the larger time, fifteen. At any event, wait for the **slowest**.

Visual: stage change: simulation 1. The network enlarges (about 1,400 × 560 px; the plate fades to a small badge). The teal front starts at event 1 (hand tag "earliest we can get here"); "0" locks into event 1's left half. On "zero plus ten" "0 + 10" floats along arrow A; on "ten" (bold) "10" locks into event 2's left half; the clock marker moves to 6:10. On "B arrives" "0 + 15" floats along B to event 3; on "plus zero" "10 + 0" floats along the dummy (hand tag "+0 through the dummy"). On "the larger time" "15" locks in and "10" fades. On "slowest" event 3 pulses (hand tag "wait for the slowest"); the clock marker moves to 6:15.

### 3. forward: to the finish
> Keep going. Event four has two arrows in. The muffins give fifteen plus twenty-five, which is forty. The pies give ten plus twenty, which is thirty. The display needs both, so event four's earliest time is **forty**. The display takes ten more minutes, so the finish is at **fifty**. That's the shortest time the whole morning can take, because every job has had to wait for the slowest job before it. Starting at six, the café can open at ten to seven, and no **sooner**.

Visual: camera continue. On "fifteen plus twenty-five" "15 + 25" floats along C; on "ten plus twenty" "10 + 20" along D. On "forty" (bold) "40" locks into event 4's left half, "30" fades; the clock marker moves to 6:40. On "fifty" (bold) "40 + 10" along E and "50" locks into event 5's left half; the clock marker moves to 6:50 (hand tag "shortest time: 50 min"). On "sooner" the café badge shows a coded sign "open 6:50 am" (36 px) and the earliest halves all glow teal together.

### 4. backward: don't hold anyone up
> Now scan backwards, right to left, to find the latest time we can reach each event without delaying the finish. At each event we're really asking, who needs you first? The finish keeps its fifty. Event four is fifty minus the display's ten, so **forty**. Event three is forty minus twenty-five, **fifteen**. Event two has two arrows going out. The pies need it by forty minus twenty, which is twenty. The dummy needs it by fifteen minus zero, which is fifteen. We take the smaller, fifteen, so nobody who starts from event two is held **up**. Event one gives fifteen minus ten for the oven, five, and fifteen minus fifteen for the batter, zero. The smaller is **zero**.

Visual: simulation 2. The violet front starts at event 5 (hand tag "latest without delaying the finish"); "50" locks into event 5's right half. On "forty" (bold) "50 − 10" floats back along E and "40" locks in. On "fifteen" (bold) "40 − 25" back along C and "15" locks into event 3. On "two arrows going out" event 2 pulses; "40 − 20" floats back along D, "15 − 0" back along the dummy. On "up" (bold) "15" locks into event 2's right half and "20" fades (hand tag "don't hold anyone up"). On "fifteen minus ten" "15 − 10" back along A, "15 − 15" back along B; on "zero" (bold) "0" locks into event 1's right half and "5" fades. Every box now reads: 1 (0 | 0), 2 (10 | 15), 3 (15 | 15), 4 (40 | 40), 5 (50 | 50).

### 5. worked example: each activity's EST and LST
> The syllabus wants these times for each activity, so let's turn the boxes into a table. An activity's earliest start time, its EST, is the earliest time at the event where it starts. Its latest start time, its LST, is the latest time at the event where it ends, minus its duration. The oven's EST is zero, and fifteen minus ten gives an LST of five. The batter's are zero and zero, and the muffins' are fifteen and fifteen. Now the pies. Their EST is ten. Their LST is forty minus twenty, which is **twenty**. That isn't the fifteen in the pies' start box, because that fifteen was set by the dummy, not by the pies. Finally, the display's are forty and **forty**.

Visual: clear change to the g01 board. Task strip, 44 px: "Find the EST and LST of each activity in the café project." Givens card (left, about 820 × 420 px): the café network with every box filled (teal and violet halves). Two definition strips, 40 px: "EST = earliest time at the activity's start event" (teal) and "LST = latest time at its end event − duration" (violet), each writing on its spoken words (hand tags "EST: start event", "LST: end event − duration"). Working rows at the right, 48 px: "A: EST 0, LST 15 − 10 = 5"; "B: 0, 15 − 15 = 0"; "C: 15, 40 − 25 = 15"; "D: EST 10" (event 2's left half lifts teal); on "twenty" (bold) "LST 40 − 20 = 20" (event 4's right half lifts violet, the 20 on arrow D subtracts). On "isn't the fifteen" a red slip "D's LST = 15" writes beside row D; on "dummy" (first, in "set by the dummy") it is crossed (caption "15 is event 2's latest time, set by the dummy: D's LST = 40 − 20 = 20"; hand tag "the 15 is the dummy's"). On "forty" (second bold) "E: 40, 50 − 10 = 40", and the framed table writes (green, 40 px): "A 0, 5 | B 0, 0 | C 15, 15 | D 10, 20 | E 40, 40" (EST teal, LST violet).

### 6. two checks
> Two quick checks keep a scan honest. The backward scan always starts from the finish time, never from zero. And when you get back to the start, its latest time should come out as zero. If it doesn't, an arrow was missed somewhere. On the café's clock, that means the pies can start any time from ten past six to twenty past six, because their EST is ten and their LST is twenty, and the doors still open at ten to **seven**.

Visual: stage change. The café network small at the top (about 1,000 × 380 px) with the clock strip enlarged below it (about 1,500 px). On "never from zero" a red ghost "0" in event 5's right half, crossed at once (hand tag "start from the finish, not 0"). On "come out as zero" event 1's right half "0" rings green. On "the pies can start" a violet-and-teal bracket on the clock strip for D's start from 6:10 to 6:20, with D's arrow glowing. On "their EST is ten" a small chip "D: EST 10, LST 20" (teal 10, violet 20) slides from scene 5's table to the bracket's ends. On "seven" the "open 6:50 am" sign on the café badge pulses.

### 7. memory aid
> Here's the summary. Forwards, take the largest. Backwards, take the **smallest**. Then an activity's EST comes from its start event, and its LST is its end event's latest time, minus its duration.

Visual: stage change to the framed `MemoryAidCard`. Left slot: event 3's box with "15" winning forwards and event 2's box with "15" winning backwards. Main line, hand font 56 px: "Forwards: take the largest. Backwards: take the smallest." On "smallest" the key line, 40 px: "EST = start event's earliest. LST = end event's latest − duration." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. A plumber's bathroom job is shown in the network, with durations in hours. A takes four hours and B takes six, both from the start. C, three hours, follows A. D, five hours, follows A and B, so there's a dummy. E, two hours, follows C, and F, four hours, follows D and E. Use a forward scan to find the earliest starting time of each activity, and the shortest time to finish the job. Pause here to answer.

Visual: `QuestionCard`, 40 px: "The network shows a plumber's bathroom job (durations in hours). Use a forward scan to find the earliest starting time (EST) of each activity and the shortest time to finish the job." The network on the card (about 1,000 × 400 px): "A 4" 1→2, "B 6" 1→3, dummy 2→3, "C 3" 2→4, "D 5" 3→5, "E 2" 4→5, "F 4" 5→6, with empty split boxes. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> Event two is four. Event three takes the larger of six and four, so **six**. Event four is four plus three, seven. Event five takes the larger of six plus five and seven plus two, so **eleven**, and the finish is fifteen hours. So the ESTs are A zero, B zero, C four, D six, E seven and F eleven. Giving D an EST of four is the slip. D waits for B **too**.

Visual: the card shrinks to the top (30 px). The network at the centre; a teal front: "4" into event 2; on "six" (bold) "max(6, 4 + 0) = 6" and "6" into event 3; "7" into event 4; on "eleven" (bold) "max(6 + 5, 7 + 2) = 11" and "11" into event 5; "15" into event 6. Framed (green): "EST: A 0, B 0, C 4, D 6, E 7, F 11. Shortest time 15 h." On "slip" a red slip "D's EST = 4"; on "too" it is crossed (caption "D waits for B too: the larger, 6"). Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. It's the same plumber's job, and the shortest time to finish is fifteen hours. Use a backward scan to find the latest starting time of each activity. Pause here to answer.

Visual: `QuestionCard`, 40 px: "The network shows the same plumber's job (durations in hours). The shortest time to finish the job is 15 hours. Use a backward scan to find the latest starting time (LST) of each activity." The same network with empty boxes, the finish box's right half reading "15". Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> Start the finish at fifteen. F's LST is fifteen minus four, **eleven**. D's is eleven minus five, six, and E's is eleven minus two, nine. C's is nine minus three, six, and B's is six minus six, zero. Event two is needed by six, both by the dummy and by C, so A's LST is six minus four, **two**. Saying A's LST is zero is the slip. A has room to **spare**.

Visual: the card shrinks to the top. A violet front from event 6: "15"; on "eleven" (bold) "15 − 4" and event 5 "11", row "F: 11"; "D: 11 − 5 = 6", "E: 11 − 2 = 9" (event 4 "9"); "C: 9 − 3 = 6", "B: 6 − 6 = 0" (event 3 "6"); event 2 "min(6 − 0, 9 − 3) = 6"; on "two" (bold) "A: 6 − 4 = 2". Framed (green): "LST: A 2, B 0, C 6, D 6, E 9, F 11." On "slip" a red slip "A's LST = 0"; on "spare" it is crossed (caption "event 2's latest is 6, so A's LST = 6 − 4 = 2"). Hold about 1 s.

### 12. handoff: which jobs can't slip?
> Here's a new project, a backyard shed, with durations in days and both scans already done. Look at the boxes. Some events have the same earliest and latest times, and some don't. Which jobs have room to move, and which can't **slip** at all without making the whole build late?

Visual: board clear to the final frame (decisions file section 2). The shed plate `ms12-backyard-shed-v1.png` at the left (about 620 px); the shed's network at the right (about 1,150 × 520 px): "A 1" clear the site 1→2, "C 1" pour the slab 2→3, "D 3" slab cures 3→4, "B 4" kit delivery 1→4, "E 2" walls and roof 4→5, "F 1" door and window 5→6, "G 2" paint 5→7, dummy 6→7; on "both scans already done" the boxes fill (teal and violet): 1 (0 | 0), 2 (1 | 1), 3 (2 | 2), 4 (5 | 5), 5 (7 | 7), 6 (8 | 9), 7 (9 | 9). On "same earliest and latest" the matching boxes ring softly; on "some don't" event 6's box rings. On "room to move" arrows B (kit delivery) and F (door and window) ring softly too, so attention moves to the jobs (no number or tag on them; they fade on "slip"). On "slip" (bold) chips "which jobs can't slip?" (40 px), "Next" and "?", and a small chip "shed: days". No float or critical path is shown. Hold about 2 s. This is c03's opening; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Forward scan: start at 0; at a merge, take the largest.
- The finish's earliest time is the shortest project time.
- Backward scan: start at the finish time; at a split, take the smallest.
- EST = the earliest time at the activity's start event.
- LST = the latest time at its end event − its duration.

Memory aid (framed card, right side, as in scene 7): *Forwards: take the largest. Backwards: take the smallest.* Key: *EST = start event's earliest. LST = end event's latest − duration.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame: c03 opens on it.

## Teaching checks

- **Does it explain causes?** Why the largest forwards: a job can't start until everything arriving has finished (2, 3). Why the finish is the shortest time: the last job has waited for the slowest chain (3). Why the smallest backwards: the most urgent job leaving an event sets its deadline (4). Why D's LST is 20, not 15: the 15 is set by the dummy's deadline, not the pies' (5). Why start backwards at the finish: the latest finish allowed is the earliest finish found (6).
- **Misconceptions addressed:** the smaller at a merge (A1); the backward scan from 0 (6); the start event's latest time used as the LST (5); a dummy skipped (2, 4); an activity given no room when it has some (A2).
- **Visual standard, item by item:** 1 the café badge and the shed plate; 2 a new stage every 30 to 60 s; 3 the teal and violet fronts with floating candidates, the clock strip; 4 fixed roles with words; 5 large type; 6 hand tags; 7 g01 board in 5; 8 framed card and five bullets; 9 the dummy deciding a time.
- **One idea at a time:** forward to a merge (2), to the finish (3), backward (4), per activity (5), checks (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand and given visible (A2 states the finish time); 10 s each; feedback about 26 s and 26 s.
- **Avoided double teaching:** c01a and c01b are recalled in a phrase; no network is re-drawn from a table.
- **Syllabus coverage:** `ci1ebd8915`: "Apply forward and backward scanning" (2 to 4, A1, A2) "to determine the earliest starting time (EST) and latest starting time (LST) for each activity in a project" (5, A1, A2); key notes 1 to 5.
- **Out of scope by design:** float, the critical path and "minimum completion time" as a named idea (c03; scene 3 says "the shortest time the whole morning can take").

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1 (b), network given, original, HSC style, 3 marks suggested, not an official marking scheme).** "The network shows a plumber's bathroom job (durations in hours). Use a forward scan to find the earliest starting time (EST) of each activity and the shortest time to finish the job." Network: A 4 (1→2), B 6 (1→3), dummy (2→3), C 3 (2→4), D 5 (3→5), E 2 (4→5), F 4 (5→6).
Model answer: event times 0, 4, 6, 7, 11, 15 (event 3: max(6, 4 + 0) = 6; event 5: max(6 + 5, 7 + 2) = 11). EST: A 0, B 0, C 4, D 6, E 7, F 11. Shortest time 15 hours. Classic mistake (crossed): "D's EST = 4".

**Attempt 2 (scene 10; pack question 2, original, HSC style, 3 marks suggested).** "The network shows the same plumber's job (durations in hours). The shortest time to finish the job is 15 hours. Use a backward scan to find the latest starting time (LST) of each activity."
Model answer: latest event times (right to left) 15, 11, 9, 6, 6, 0. LST: F 15 − 4 = 11; D 11 − 5 = 6; E 11 − 2 = 9; C 9 − 3 = 6; B 6 − 6 = 0; event 2's latest time is min(6 − 0, 9 − 3) = 6, so A's LST = 6 − 4 = 2. Classic mistake (crossed): "A's LST = 0".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Café forward | 0; 10; max(15, 10) = 15; max(40, 30) = 40; 50 | 2, 3, 6 |
| Café backward | 50; 40; 15; min(20, 15) = 15; min(5, 0) = 0 | 4, 6 |
| Café activities | A 0/5, B 0/0, C 15/15, D 10/20, E 40/40 | 5 |
| Clock | 6:10, 6:15, 6:40, 6:50 am; pies start 6:10 to 6:20 | 2, 3, 6 |
| Plumber (A1, A2) | events 0, 4, 6, 7, 11, 15 and 0, 6, 6, 9, 11, 15; EST A 0, B 0, C 4, D 6, E 7, F 11; LST A 2, B 0, C 6, D 6, E 9, F 11 | 8 to 11 |
| Shed (final frame) | boxes 1 (0, 0), 2 (1, 1), 3 (2, 2), 4 (5, 5), 5 (7, 7), 6 (8, 9), 7 (9, 9) | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated in Python 3.14 (19 Nov 2026, scratchpad `cf/verify.py`, `python -I`: activity scans and event scans, both directions); Codex to re-check.

- Café events: earliest {1: 0, 2: 10, 3: 15, 4: 40, 5: 50}; latest {1: 0, 2: 15, 3: 15, 4: 40, 5: 50}. Activities EST/LST: A 0/5, B 0/0, C 15/15, D 10/20, E 40/40.
- Plumber events: earliest {1: 0, 2: 4, 3: 6, 4: 7, 5: 11, 6: 15}; latest {1: 0, 2: 6, 3: 6, 4: 9, 5: 11, 6: 15}. EST/LST: A 0/2, B 0/0, C 4/6, D 6/6, E 7/9, F 11/11.
- Shed events: earliest {1: 0, 2: 1, 3: 2, 4: 5, 5: 7, 6: 8, 7: 9}; latest {1: 0, 2: 1, 3: 2, 4: 5, 5: 7, 6: 9, 7: 9}.
- Revision 2 (`work/brief-resolve-standard-cf/verify.py`, `python -I`, 46 checks, 0 failures): the pies' EST 10 and LST 20 (6:10 to 6:20 am) and float 10, against event 2's gap of 5: the handoff no longer invites that gap to be read as float.

## Memory aid check

- **"Forwards: take the largest. Backwards: take the smallest."** with key line **"EST = start event's earliest. LST = end event's latest − duration."** From the site's card 1 ("take the maximum") and card 2 ("Why minimum?"), and the pack's activity rule. Meaning, as said in scenes 2 to 5 and 7. Assumptions checked: "largest" applies only where several arrows arrive (a single arrow just adds); "smallest" only where several leave; the backward scan starts at the finish's earliest time; the key line's LST rule is needed because a start event's latest time can be set by another arrow (D in the café). It helps a new case: an event with arrivals at 6 + 5 and 7 + 2 has earliest time 11; an event needed by 6 − 0 and 9 − 3 has latest time 6.
- **Considered, not used:** "Max forwards, min backwards" (shorter, but students mix up which "time" each applies to; the card says "take").

## Narration length estimate

Revision 2, counted by script (`work/brief-resolve-standard-cf/count.py`, the sum of the scene strings, which reproduces e08's 5,632): **5,030 characters** (Revision 1: 5,031), 13 scene headings. Characters per scene (1 to 13): 542, 474, 460, 653, 656, 420, 192, 417, 344, 181, 343, 273, 75. Speech about 378 s; holds and settling unchanged from Revision 1 (below); total **about 493 s**, 77 s under the 570 s cap. Feedback speech: about 26 s and 26 s. The Revision 1 paragraph below is kept for the record.

Counted by script (scratchpad `cf/count.py`, the method of `work/brief-resolve-standard-t1/count.py`, which reproduces e08's 5,632): **5,031 characters**, 13 scene headings. Characters per scene (1 to 13): 542, 474, 460, 653, 656, 370, 192, 417, 344, 181, 343, 324, 75.

At 13.3 characters per second the speech is about 378 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, final frame 2 s) 6 s; settling for the floating candidates and the clock (2 to 4), the board's lifting halves (5), the clock bracket (6) and the shed's boxes (12) about 50 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 493 s**, under the 570 s cap. Feedback speech: about 26 s and 26 s.

Reserve trims if the voiced take runs long: scene 6's clock sentence (about 9 s; the bracket can stay silent); scene 1's third sentence (about 6 s).

## Scene list and build ids

Lesson key `m-s12c02` (route math-s12-c02). Explainer folder `src/explainer/lessons/math-s12-c02`; build inputs in `docs/production/claude-pm/lessons/math-s12-c02/` (at voicing).

In order (13 scene headings): hook-how-soon, forward-slowest, forward-finish, backward-scan, worked-est-lst, two-checks, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff-shed, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 35 s | 1 | c01b's frame; the clock strip |
| 35 to 80 s | 2 | Forward front to event 3 |
| 80 to 120 s | 3 | Forward to the finish; 6:50 am |
| 120 to 175 s | 4 | Backward front |
| 175 to 235 s | 5 | g01 board: EST and LST for each activity |
| 235 to 265 s | 6 | Two checks on the clock |
| 265 to 280 s | 7 | Framed memory card |
| 280 to 390 s | 8 to 11 | Question cards and countdowns, then feedback |
| 390 to 415 s | 12 | The shed's scanned network |
| 415 to 460 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: c01b's last frame continues into 1; 1 to 2 stage change (the network enlarges); 2 to 3 camera continue; 3 to 4 camera continue (the front turns); 4 to 5 clear change to the board; 5 to 6 stage change; 6 to 7 stage change; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-c02-learning-review.md`, `science_check` = `checks/m-s12-c02-maths-check.md`.

## Assets

Inspected before choosing (19 Nov 2026): no existing maths plate shows a shed, a slab or a flat-pack kit (the pack's search; `ms12-` plates to date are the loaf, the rack and the café counter, as briefs). The café counter is z06's brief.

Need (painted): `ms12-backyard-shed-v1.png` (c03's opening, shown in this video's final frame; ruling 17; reused in c03 to c05).

Coded: the networks, boxes, fronts, candidates, clock strip, table, board, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `DrawnMark`, the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`; c01a and c01b's `ActivityNetwork` (with dummies and empty split boxes) and `ProjectModel`.

Additions (kit-needs file, critical path items 1, 3, 4 and 6):
1. **Split event boxes that fill** (teal left, violet right) from ProjectModel's event times.
2. **ScanSweep** (main new part): a forward (teal) or backward (violet) front; at each event the candidates float along their arrows as "time ± duration", the larger (forwards) or smaller (backwards) locks in and the other fades; dummies carry "+0" and "−0". Check: the café's event 3 shows "0 + 15" and "10 + 0" and locks 15; event 2 shows "40 − 20" and "15 − 0" and locks 15.
3. **Clock strip** (small): a time axis in minutes from a start clock time, with a marker and brackets.
4. **Activity rows from boxes** (`FloatTable`'s EST and LST columns): EST lifts from the start event's left half, LST from the end event's right half minus the arrow's duration.

## Codex asset brief (Maths S12 C02, a backyard shed build)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-s12-c02.md`, route entry math-s12-c02. Paint after the learning review and maths check pass and root gives the go-ahead, and before the c02 build (the plate appears in c02's final frame and opens c03; ruling 17). Save to `public/assets/maths/`. Ink and watercolour in the house style, matched to `ms12-bakery-cafe-counter-v1.png` (z06's brief) in palette; no text, labels, numbers, logos, people, hands or faces; never stretch.

1. `ms12-backyard-shed-v1.png` (1400 × 1000 px, true alpha): a suburban backyard corner seen from a three-quarter view at standing height. A freshly poured rectangular concrete slab inside timber formwork boards (smooth, grey, clearly wet-looking at one end) on the left half; on the right a flat-pack steel garden shed kit stacked on a timber pallet (long flat cardboard boxes and a few loose corrugated wall panels in a muted green, a small box of fittings), with the shed's roll-up or hinged door panel leaning against the stack; a wheelbarrow and a bag of concrete mix near the slab; a timber paling fence and a little lawn behind. Nothing is assembled. Plain, even daylight. Leave the top 150 px and the bottom 130 px free of anything that needs to be seen (chips and the frame's text sit there).

Report inspection at 620 px and at 360 px wide on the paper background (`#f6f1e7`), confirming the slab and the kit read as separate objects at 360 px. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ms12-c02-provenance.json`. If the c03 designer chooses another opening, only c02's final frame changes.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a script, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quote matches the route-inputs JSON exactly, under the Standard 2 heading only.
3. Confirm the split-box presentation and the activity LST rule (end event's latest time − duration) against recent HSC Standard 2 papers; confirm no node difference is called float (MS-53).
4. Confirm both attempts carry every demand and given (A2 states 15 hours), and neither card shows an answer (all boxes empty except the finish's 15 in A2).
5. Confirm scene 1 opens on c01b's final frame and scene 12 matches section 2 of the decisions file (and, once written, c03's opening).
6. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Forward and Backward Scans: EST and LST | Year 12 Maths Standard 2

(Title length: 66 characters by script.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/critical-path-analysis/lesson02.sa.html

The café's network is drawn. How soon can it open, and how late can each job start? Learn the forward scan (start at 0, and at a merge wait for the slowest by taking the largest time), find the shortest time for the whole project, then the backward scan (start at the finish time, and at a split take the smallest). Turn the event boxes into each activity's earliest starting time (EST) and latest starting time (LST), and see why the LST comes from the end event. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Critical path analysis. Standard 2.
Syllabus content, Standard 2 (NSW Mathematics Standard 11-12, 2024):
"Apply forward and backward scanning to determine the earliest starting time (EST) and latest starting time (LST) for each activity in a project"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa9c92c4c6

Builds on: Dummy Activities in Network Diagrams. Next: The Critical Path and Float Times.

#Year12Maths #MathsStandard #CriticalPathAnalysis #HSCScience

## Open decisions

- **1. The shed as c03's anchor (root; ruling 72).** Closed in Revision 2: ruling 81 (the shed keeps its dummy). Revision 1 text: The shed needs a dummy for F and G (they would share both events); the final frame draws it. If root prefers no dummy in the shed, F can be dropped (the paths and floats in c03 then change).
- **2. No second worked network (pack's first trim).** The site's Worked Example 3 appears in c03 instead.

## Review notes

- Revision 2 resolves the student learning review (`../checks/m-s12-c02-learning-review.md`). Next: Codex maths check and error check, then voicing and a build to grade A.
- Revision 1. Next: student learning review (trace from c01b; check that "earliest time we can reach this event" lands before EST, that the dummy's "+0" and "−0" are clear, that "don't hold anyone up" explains the smallest, that D's 20 against 15 is followable, that A2 is reachable without a worked backward example on a second network, and that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
