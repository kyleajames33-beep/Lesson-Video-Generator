# Maths S12 C03: What is the critical path, and how do float times reveal it? Every path must finish, so the longest sets the minimum completion time; the critical path as the longest path; float = LST − EST; zero float means critical; shared float; and two critical paths (design)

Status: Revision 1 (19 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Standard designs (`math-s12-r12a.md`, `t05.md`, `i09.md` at Revision 2, and their resolution logs), c02's final frame (`math-s12-c02.md` scene 12) and root's Standard rulings (1 to 76; ruling 72, the shed; ruling 74, MS-49's corrected total, never the site's 12). Designer's decisions for c01a to f04, including every join: `../checks/root-decisions-maths-s12-c01-f04.md`. Next: student learning review, then the Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,017 characters by script (see "Narration length estimate"), 13 scene headings, about 492 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: fourth video of the Critical path analysis strand, playlist order 85. **Standard 2 only.** Pre-design pack: `../pre-design/maths-standard/math-s12-c03.md`. Site lessons (read through the pack's quotations, read only): `maths-standard/year12/critical-path-analysis/lesson03.sa.html` (SHA256 `562cf13c015378f7626b2f1b2c6ad94691464f68f1a742f9b395dd8102dd485a`; Worked Example 2, "A | 2 | 0 | 2 | 0 | Yes; B | 4 | 2 | 6 | 0 | Yes; C | 3 | 2 | 9 | 4 | No; D | 5 | 6 | 11 | 0 | Yes; E | 2 | 5 | 11 | 4 | No"; "C and E share the non-critical path, so using C's full float reduces E's available float"), `lesson01.sa.html` (SHA256 `baf5c3da12545359d8b0834b53f67c4be1a1f0daa9be7676afa44304033ea498`; card 02, "The critical path is the longest path through the network, it determines the minimum time to complete the project."; "Parallel = max, not sum.") and `lesson05.sa.html` (SHA256 `5e734b49509d875811ac31b4927d901c9e4e29f36aa754a6a13470d2ff7b51ac`; Worked Example 1, "Both paths are critical: ... (3+5+2 = 10); ... (3+4+3 = 10)"). Route entry: `math-s12-c03` in `../../programme/maths-standard-route-inputs-7.json`. Visual system: maths studio kit; the backyard shed (c02's final frame) as the anchor; networks, path bars and float tables coded, HSC style.

Owner rules applied: plates for real objects, code for diagrams; no people, hands or faces; one main question; one stage at a time; words before symbols (path, critical path, minimum completion time, float in plain words first); g01 worked example (task strip, table and network apart); two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (a backyard shed, a renovation, a school formal); Australian spelling; no em dashes; conversational narration; text above y = 950.

Syllabus content points (Mathematics Standard 11-12 (2024), Year 12), quoted from `../../programme/maths-standard-route-inputs-7.json`:

Standard 2 (Critical path analysis):
- `ci7195eacb`: "Explain the term critical path"
- `ci3045f9aa`: "Calculate float times to identify critical and non-critical activities"
- `ci6087f0de`: "Analyse ESTs and LSTs to locate the critical path(s) for the project"
- `cib45f96bd`: "Apply critical path analysis to determine the minimum completion time for a project"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa9c92c4c6

**Boundary:** starts from c02's final frame exactly (decisions file section 2): the shed plate `ms12-backyard-shed-v1.png` at the left; the shed's network (A 1 1→2, C 1 2→3, D 3 3→4, B 4 1→4, E 2 4→5, F 1 5→6, G 2 5→7, dummy 6→7) with boxes 1 (0 | 0), 2 (1 | 1), 3 (2 | 2), 4 (5 | 5), 5 (7 | 7), 6 (8 | 9), 7 (9 | 9); chips "shed: days", "which jobs can't slip?", "Next", "?". Recalls c02 (scans, EST, LST) and Year 11 shortest paths (math-s11-n06, as a contrast) in a phrase or grey chip. Teaches: a path is a chain from start to finish; every path must be finished, so the longest path sets the minimum completion time, which equals the finish's earliest time; the critical path is that longest path (its activities can't be delayed without delaying the finish); float = LST − EST (how long an activity can be delayed without delaying the finish); float 0 means critical, float more than 0 non-critical; checking by adding the critical durations; float shared along a path; two critical paths when paths tie. Stops at locating the critical path(s) and floats. Not taught: Gantt charts (c04), changing durations (c05).

## Decisions

- **Anchor: the shed (c02's handoff; ruling 72).** Paths A-C-D-E-G 9, A-C-D-E-F 8 (the dummy adds 0), B-E-G 8, B-E-F 7. Minimum completion time 9 days. Floats (from c02's EST and LST): A 0, B 1, C 0, D 0, E 0, F 1, G 0. Critical path A, C, D, E, G. The hook's two cases (the slab cures a day longer: 10 days; the kit a day late: still 9) are stated as the puzzle, not worked (c05 owns changes; one line each).
- **Paths race as bars (pack visual need).** "Everything has to be finished, and the longest chain can't be squeezed": the four paths stack as bars beside the network; the tallest equals the finish box's 9.
- **Not the shortest path (Year 11 contrast).** One sentence in scene 3 with a grey chip "Year 11: shortest path (a different question)".
- **One float formula on screen (pack decision).** Float = LST − EST; the site's "LST(end) − EST(start) − duration" is not shown (same number; would add a second formula). MS-53 is avoided: float is always per activity.
- **Worked example (g01): the site's lesson03 Worked Example 2** (A 2 (–), B 4 (A), C 3 (A), D 5 (B), E 2 (C); 11 days; critical A, B, D; C and E float 4, shared). The site's ESTs and LSTs are given on the board (c02 taught the scans), so the board works float and the critical path only. Shared float shown with C sliding 3 days and E's float bar shrinking to 1 (site: "E has only 1 day remaining"; MS-52's wrong days are not used).
- **Two critical paths (site lesson05 Worked Example 1).** A 3; B 5 (A); C 4 (A); D 2 (B); E 3 (C): both paths 10. A short scene (6), then A1 (the renovation) practises it.
- **Simulations (standard item 3).**
  1. **PathStack** (scene 2; new kit part): each path lights along the network in turn while its bar grows beside it, segment by segment, labelled by its activities; the bars line up against a dashed line at the finish box's 9.
  2. **FloatTable with float bars** (scene 4; new kit part): each row fills EST (teal), LST (violet), then float = LST − EST (olive), with a small olive bar of that many days; zero rows turn their network arrows amber and thick ("critical").
  3. **Sliding along shared float** (scene 5): C's bar on a small day line slides later by up to 4 days; E's olive float bar shrinks as C moves (3 days used, 1 left).
- **Colour roles (strand, fixed).** Letters ink; durations blue; EST teal; LST violet; float olive (with the word "float"); the critical path amber, thick (with the word "critical"); dummies grey dashed; answer green; mistake red, crossed slips only.
- **Large type, handwritten voice.** Table rows 48 px; path bars labelled 36 px; current rows 52 px. Hand tags: "start to finish", "parallel: max, not sum", "longest = minimum time", "no gap, no room", "longest, not shortest", "room to move", "float = LST − EST", "0 = critical", "check: add them", "shared, not doubled", "a tie: both critical". At most two live at once.
- **Stage changes (standard item 2).** c02's frame (1); the paths and their bars (2); the critical path lit (3); the float table (4); g01 board, the site's network (5); two critical paths (6); framed card (7); question cards (8 to 11); the formal's loose bars (12); key notes (13).
- **Worked example (g01 layout).** Scene 5: task strip "Find the float of each activity. State the critical path and the minimum completion time."; givens card: the table (Activity, Duration, Immediate predecessors, EST, LST: A 2 – 0 0; B 4 A 2 2; C 3 A 2 6; D 5 B 6 6; E 2 C 5 9; durations in days) with the network small beside it; rows "A: 0 − 0 = 0", "B: 2 − 2 = 0", "C: 6 − 2 = 4", "D: 6 − 6 = 0", "E: 9 − 5 = 4"; framed answer "critical path A, B, D; 11 days"; crossed slip "C and E have 8 days spare between them" (caption "C and E share one 4-day float").
- **Memory aid.** Framed card: "Longest path, zero float: that's critical." Key line: "Float = LST − EST, the room a job has to move."
- **Visual surprise.** The tallest path bar lands exactly on the finish box's 9 (2); E's float bar shrinks while only C moves (5).
- **Plain meanings at first use.** Path ("a chain of activities from the start to the finish"); minimum completion time ("the shortest time the whole project can take"); critical path ("the longest path; its jobs have no room to move"); float ("how long an activity can be delayed without delaying the finish"); critical and non-critical activities ("float 0" and "float more than 0").
- **Attempts (original, HSC style).** A1 (pack question 1): the renovation (A 3, B 2 (A), C 6 (A), D 4 (B), E 3 (C, D), F 2 (B)); 12 days; two critical paths A-C-E and A-B-D-E; F float 5; crossed "A, C, E only" (caption "A, B, D, E is also 12"). A2 (pack question 2): the shed's kit float and painting's zero float, explained; crossed "B can be 1 day late and so can F, so 2 days" (caption "each float belongs to its own activity").
- **Mistake scene:** none separate. Adding every duration (2, said, "parallel: max, not sum"); the shortest path (3, said); floats on one path added (5 crossed); stopping at one critical path (A1 crossed); floats from different activities added (A2 crossed).
- **Cause chain taught, in order:** (1) every job must be done, and jobs on different paths run at the same time, so the project time is the longest path, not the sum (2); (2) the longest path has no gaps, so any delay on it delays the finish: it is critical (3); (3) an activity's LST − EST is how long it can wait without delaying the finish, so its float is that difference (4); (4) a job with zero float can't move, so it lies on the critical path (4); (5) jobs in a row on the same path draw on the same spare time, so their floats are shared (5); (6) when two paths tie for longest, both are critical (6).
- **Entry knowledge (route):** math-s12-c02 (scans, EST, LST); math-s12-c01a, c01b (networks). Year 11 shortest paths (math-s11-n06) as a contrast only. Recalled in a phrase or grey chip.
- **Handoff (to math-s12-c04, Gantt charts).** Scene 12's frame (decisions file section 2): the new plate `ms12-school-hall-formal-v1.png` (briefed here; ruling 17) at the left (about 600 px); at the right an empty timeline "weeks" 0 to 10 (about 1,150 px, gridlines every week); seven loose bars stacked at the left of the timeline, each the length of its duration and labelled "A book the venue 2", "B choose the theme 1", "C sell tickets 4", "D order decorations 2", "E book the DJ 1", "F seating plan 1", "G decorate the hall 1"; chips "how do we show this on a calendar?", "Next" and "?". No bar is placed and no time is given.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Shed: paths 1 + 1 + 3 + 2 + 2 = 9; 1 + 1 + 3 + 2 + 1 + 0 = 8; 4 + 2 + 2 = 8; 4 + 2 + 1 + 0 = 7. Floats A 0, B 1 − 0 = 1, C 0, D 0, E 0, F 8 − 7 = 1, G 0. Hook cases: D = 4 gives 10; B = 5 gives 9 (c05 works both).
  (b) Site lesson03 Worked Example 2: as printed; 11 days; C float 6 − 2 = 4, E float 9 − 5 = 4; path A-C-E = 7, so 4 days are shared. If C starts 3 days late (EST 5), E's EST becomes 8 and its float 9 − 8 = 1.
  (c) Site lesson05 Worked Example 1: 3 + 5 + 2 = 10 and 3 + 4 + 3 = 10; every float 0.
  (d) Renovation: A 1→2, B 2→3, C 2→4, D 3→4, E 4→5, F 3→5 (no dummy). Paths 12, 12, 7; F EST 5, LST 10, float 5.
  (e) Formal (c04 works it): A 2 (–), B 1 (–), C 4 (A), D 2 (B), E 1 (A), F 1 (C), G 1 (D, F); 8 weeks.
  (f) MS-49: the site's hero caption "12" is never used; if lesson01's art were reused, its paths are 7 and 7.

Main question: *The shed takes nine days. Which jobs can't slip: what is the critical path, and how do float times reveal it?*
Entry knowledge (c02): forward and backward scans; EST and LST for each activity.
Stops after: the minimum completion time, the critical path(s), float, shared float.
Handoff: the formal's loose bars on an empty week timeline, "how do we show this on a calendar?" (c04).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): durations blue; EST teal; LST violet; float olive; critical amber; dummies grey dashed; answer green; mistake red. Header strip "MATHEMATICS STANDARD · CRITICAL PATH ANALYSIS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: which jobs can't slip?
> Here's the shed, with both scans done, so we know every job's earliest and latest start, and the whole build takes nine days. Some jobs have no room to move at all. If the slab takes an extra day to cure, the shed is finished a day late. But if the kit arrives a day late, nothing changes at all. Why the difference? What is the critical path, and how do float times **reveal** it?

Visual: opens on c02's final frame exactly. On the first sentence "Next" fades and event 7's box "9" pulses. On "an extra day to cure" a small coded rain cloud hovers over arrow D and a ghost "+1" leads to a ghost "10" by event 7, then both fade. On "a day late" a ghost "+1" on arrow B and event 7 stays "9" (a green tick flashes). On "Why the difference" both arrows glow briefly. On "reveal" heading "The critical path and float" writes.

### 2. every path has to finish
> A path is a chain of activities from the start to the finish. The shed has four of them. Clearing the site, pouring the slab, curing, the walls and the paint add to one plus one plus three plus two plus two, which is **nine** days. Swap the paint for the door, and the path is **eight**. The kit, the walls and the paint make **eight**, and the kit, the walls and the door make **seven**. Jobs on different paths run at the same time, so we don't add every duration together. But every path has to be finished before the shed is done, so the longest path sets the time. That's nine days, the same as the finish from our forward scan. It's called the minimum completion **time**.

Visual: stage change: simulation 1. The plate shrinks to a badge; the network sits at the left (about 1,000 × 460 px); the PathStack at the right (about 700 × 460 px). On "chain of activities" hand tag "start to finish". On "nine" (bold) path A-C-D-E-G lights along the network and its bar grows segment by segment "1 + 1 + 3 + 2 + 2 = 9". On "eight" (first bold) path A-C-D-E-F (through the dummy, "+0") and its bar "8". On "eight" (second bold) B-E-G, bar "8". On "seven" B-E-F, bar "7". On "at the same time" two bars run side by side (hand tag "parallel: max, not sum"). On "the longest path sets the time" the 9 bar rises above a dashed line drawn from event 7's box "9". On "time" (bold) a label writes under the stack, 44 px: "minimum completion time = 9 days" (hand tag "longest = minimum time").

### 3. the critical path
> That longest path is called the critical path. Its jobs run end to end with no gaps, so if any one of them runs late, the whole project runs late. For the shed, it's A, C, D, E and G, clearing the site, the slab, curing, the walls and the paint. Careful, it's the longest path, not the shortest. In Year 11 you found shortest routes between places, but here every job has to be done, so it's the longest chain that sets the time, and it can't be **squeezed**.

Visual: camera continue to the network (the stack shrinks to the right). On "critical path" arrows A, C, D, E and G thicken amber, label "critical" (40 px) over them. On "no gaps" small amber joins pulse at events 2, 3, 4, 5 (hand tag "no gap, no room"). On "the whole project runs late" a ghost "+1" on C pushes event 7's box to a ghost "10", then fades. On "not the shortest" grey chip "Year 11: shortest path (a different question)" and the shortest bar (7) in the stack is crossed lightly (hand tag "longest, not shortest"). On "squeezed" the amber path pulses once.

### 4. float: room to move
> Now float. An activity's float is how long it can be delayed without delaying the finish. It's the gap between its latest and earliest start, so float equals LST minus EST. Clearing the site has zero minus zero, so no float. The kit delivery has one minus zero, so one day of **float**. So the kit can arrive a day late and the shed still finishes on time, which answers our puzzle. Pouring the slab, the curing, the walls and the paint all have zero. The door has eight minus seven, one day. Every activity with zero float is critical, and together they make exactly the critical path. As a check, add their durations, one plus one plus three plus two plus two, and you get nine **days**.

Visual: stage change: simulation 2. FloatTable at the right (about 900 × 560 px; columns "Activity", "EST", "LST", "Float"), the network at the left. On "how long it can be delayed" hand tag "room to move". On "float equals LST minus EST" a strip writes, 48 px: "float = LST − EST" (olive; hand tag "float = LST − EST"). Rows fill on their spoken cues: "A | 0 | 0 | 0"; on "float" (bold) "B | 0 | 1 | 1" with an olive bar 1 day long and arrow B tagged "float 1"; "C | 1 | 1 | 0", "D | 2 | 2 | 0", "E | 5 | 5 | 0", "G | 7 | 7 | 0"; "F | 7 | 8 | 1" with an olive bar and tag "float 1". On "zero float is critical" every 0 row rings amber and its arrow stays amber (hand tag "0 = critical"). On "days" (bold) a check row, 44 px: "1 + 1 + 3 + 2 + 2 = 9 ✓" (hand tag "check: add them").

### 5. worked example: shared float
> Here's a worked example from a different project, in days. A takes two days with no predecessors. B, four days, and C, three days, both follow A. D, five days, follows B, and E, two days, follows C. Its scans give these ESTs and LSTs. Subtracting, the floats are zero, zero, **four**, zero and **four**. So the critical path is A, B, D, and the project takes eleven days. C and E each show four days of float, but they're on the same path, one after the other, so they share it. If C uses three of those days, E has only one left. You can't spend the same four days **twice**.

Visual: clear change to the g01 board. Task strip, 44 px: "Find the float of each activity. State the critical path and the minimum completion time." Givens card (table, 40 px): "A | 2 | – | 0 | 0", "B | 4 | A | 2 | 2", "C | 3 | A | 2 | 6", "D | 5 | B | 6 | 6", "E | 2 | C | 5 | 9" (heads "Activity", "Duration (days)", "Immediate predecessors", "EST", "LST"; EST teal, LST violet), with the network small beside it (A 1→2, B 2→3, C 2→4, D 3→5, E 4→5). Working rows, 48 px: "A: 0 − 0 = 0", "B: 2 − 2 = 0", "C: 6 − 2"; on "four" (first bold) "= 4"; "D: 6 − 6 = 0"; "E: 9 − 5"; on "four" (second bold) "= 4". On "critical path is A, B, D" arrows A, B, D thicken amber; framed answer (green): "critical path A, B, D; minimum completion time 11 days". On "share it" simulation 3: a small day line 0 to 11 under the board with C's bar at 2 to 5 and E's at 5 to 7, one olive float bar of 4 after E (hand tag "shared, not doubled"); on "uses three" C's bar slides to 5 to 8, E's to 8 to 10, and the olive bar shrinks to 1. On "twice" a red slip "C and E have 8 days spare between them" writes and is crossed (caption "C and E share one 4-day float").

### 6. when two paths tie
> Sometimes two paths tie for the longest, and then there are two critical paths. In this project A takes three days. Then two chains follow it, B for five days then D for two, and C for four days then E for three. Both chains make the path ten days long, so both paths are **critical**. Every activity has zero float, and a delay to any one of them delays the finish. The syllabus says critical path, or paths, for exactly this **reason**.

Visual: stage change. A network (about 1,100 × 420 px; site lesson05 Worked Example 1): "A 3" 1→2, "B 5" 2→3, "D 2" 3→5, "C 4" 2→4, "E 3" 4→5. A small PathStack beside it: "3 + 5 + 2 = 10", "3 + 4 + 3 = 10". On "critical" (bold) both paths thicken amber at once (hand tag "a tie: both critical"); a float column beside it reads "0" five times. On "reason" a chip writes the syllabus words "critical path(s)" (36 px), with the "(s)" circled.

### 7. memory aid
> Here's the summary. The longest path is the critical path, and its jobs have zero float. Float is LST minus EST, the room a job has to **move**. Find the longest path, or find the zero floats, and the two will agree.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the shed network with its amber path and the two "float 1" tags. Main line, hand font 56 px: "Longest path, zero float: that's critical." On "move" the key line, 40 px: "Float = LST − EST, the room a job has to move." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. A small renovation has six activities, with durations in days. A, three days, has no predecessors. B, two days, follows A, and C, six days, follows A. D, four days, follows B. E, three days, follows C and D. And F, two days, follows B. Find the minimum completion time, state the critical path or paths, and find the float of F. Pause here to answer.

Visual: `QuestionCard`, 40 px: "A small renovation has these activities. (a) Find the minimum completion time. (b) State the critical path or paths. (c) Find the float of F." Table (36 px): "A | 3 | –", "B | 2 | A", "C | 6 | A", "D | 4 | B", "E | 3 | C, D", "F | 2 | B" (heads "Activity", "Duration (days)", "Immediate predecessors"), with its network drawn small (A 1→2, B 2→3, C 2→4, D 3→4, E 4→5, F 3→5). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> The paths are A, C, E, which is twelve, then A, B, D, E, which is also **twelve**, and A, B, F, just seven. So the minimum completion time is twelve days, and there are two critical paths. F's EST is five, and its LST is twelve minus two, ten, so F has five days of **float**. Naming only A, C, E is the slip. A, B, D, E ties at twelve, so it's critical **too**.

Visual: the card shrinks to the top (30 px). A small PathStack: "3 + 6 + 3 = 12"; on "twelve" (bold) "3 + 2 + 4 + 3 = 12"; "3 + 2 + 2 = 7". Both 12 paths amber on the network; framed (green, (a), (b)): "12 days; critical paths A-C-E and A-B-D-E". Row "F: EST 5, LST 12 − 2 = 10"; on "float" (bold) framed "float 10 − 5 = 5 days" (green, (c)). On "slip" a red slip "A, C, E only"; on "too" it is crossed (caption "A, B, D, E is also 12"). Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. In the shed project, the kit delivery has one day of float, and painting has none. Explain what the kit's float means for planning the build, and why painting has no float. Pause here to answer.

Visual: `QuestionCard`, 40 px: "In the backyard shed project (minimum completion time 9 days; critical path A, C, D, E, G), the kit delivery (B, 4 days) has a float of 1 day. (a) Explain what this float means for planning the build. (b) Explain why painting (G) has no float." Picture slot: the shed plate (about 260 px). Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> The kit can arrive up to one day late, or take five days instead of four, and the shed is still finished in nine days. Painting is on the longest path, so any delay to it delays the whole **build**. Adding the kit's day and the door's day to say two days are spare is the slip. Each float belongs to its own activity, on its own **path**.

Visual: the card shrinks to the top. The shed network small with its amber path. Framed (green, (a)): "B can start up to 1 day late (or take up to 5 days) and the shed still takes 9 days." On "build" (bold) framed (green, (b)): "G is on the critical path (A, C, D, E, G = 9 days): any delay to G delays the finish." On "slip" a red slip "B can be 1 day late and so can F, so 2 days"; on "path" (bold) it is crossed (caption "each float belongs to its own activity"). Hold about 1 s.

### 12. handoff: a calendar for the formal
> A network shows what waits for what, but it doesn't look like a calendar, where you can see which jobs run in which week. Here's a new project, a school formal, planned in weeks. Its seven jobs are ready, as bars as long as their durations. How do we lay them out as a schedule, and show the critical path on a **calendar**?

Visual: board clear to the final frame (decisions file section 2). The new plate `ms12-school-hall-formal-v1.png` at the left (about 600 px); at the right an empty timeline "weeks" 0 to 10 (about 1,150 px, gridlines every week, 32 px numbers); on "seven jobs" seven loose bars stack at the left of the timeline, each as long as its duration and labelled (32 px) "A book the venue 2", "B choose the theme 1", "C sell tickets 4", "D order decorations 2", "E book the DJ 1", "F seating plan 1", "G decorate the hall 1" (durations blue). On "calendar" chips "how do we show this on a calendar?" (40 px), "Next" and "?". No bar is placed, and no time or critical path is shown. Hold about 2 s. This is c04's opening; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Minimum completion time = the longest path = the finish's earliest time.
- Critical path: the longest path. A delay on it delays the finish.
- Float = LST − EST: how long an activity can be delayed.
- Float 0: critical. Float more than 0: non-critical.
- Floats on one path are shared. Paths can tie: two critical paths.

Memory aid (framed card, right side, as in scene 7): *Longest path, zero float: that's critical.* Key: *Float = LST − EST, the room a job has to move.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame: c04 opens on it.

## Teaching checks

- **Does it explain causes?** Why the longest path, not the sum: parallel jobs overlap, and every path must finish (2). Why the critical path can't slip: its jobs have no gaps (3). Why float is LST − EST: it is the window between the earliest and latest start (4). Why zero float marks the critical path (4). Why floats on one path are shared: the jobs follow one another (5). Why two critical paths: two chains tie (6).
- **Misconceptions addressed:** the sum of all durations (2); the shortest path (3); floats on one path added (5); one critical path when two tie (A1); floats of different activities added (A2).
- **Visual standard, item by item:** 1 the shed plate, the school hall plate; 2 a new stage every 30 to 60 s; 3 the paths racing as bars, the float table lighting arrows amber, C sliding while E's float shrinks; 4 fixed roles with words; 5 large type; 6 hand tags; 7 g01 board in 5; 8 framed card and five bullets; 9 the tallest bar landing on the finish box's 9.
- **One idea at a time:** paths (2), the critical path (3), float (4), shared float (5), ties (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand and given visible; 10 s each; feedback about 26 s and 25 s.
- **Avoided double teaching:** the scans (c02) are given, not redone; the shed's ESTs and LSTs come from c02's frame.
- **Syllabus coverage:** `ci7195eacb` "Explain the term critical path" (3, A2 (b)); `ci3045f9aa` "Calculate float times to identify critical and non-critical activities" (4, 5, A1 (c)); `ci6087f0de` "Analyse ESTs and LSTs to locate the critical path(s)" (4, 5, 6, A1 (b)); `cib45f96bd` "determine the minimum completion time" (2, 5, A1 (a)).
- **Out of scope by design:** Gantt charts (c04); changing durations (c05; the hook's two cases are a puzzle only).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original, HSC style, 4 marks suggested, not an official marking scheme).** "A small renovation has these activities. (a) Find the minimum completion time. (b) State the critical path or paths. (c) Find the float of F." Table: A 3 (–); B 2 (A); C 6 (A); D 4 (B); E 3 (C, D); F 2 (B); network drawn.
Model answer: (a) Paths: A-C-E = 3 + 6 + 3 = 12, A-B-D-E = 3 + 2 + 4 + 3 = 12, A-B-F = 3 + 2 + 2 = 7, so 12 days. (b) Two critical paths: A-C-E and A-B-D-E. (c) F: EST 5, LST 12 − 2 = 10, float 5 days. Classic mistake (crossed): "A, C, E only".

**Attempt 2 (scene 10; pack question 2, original, HSC style, 2 marks suggested).** "In the backyard shed project (minimum completion time 9 days; critical path A, C, D, E, G), the kit delivery (B, 4 days) has a float of 1 day. (a) Explain what this float means for planning the build. (b) Explain why painting (G) has no float."
Model answer: (a) The kit delivery can start up to 1 day late (or take up to 5 days) without changing the 9-day finish. (b) Painting is on the critical path, the longest path (A, C, D, E, G = 9 days), so any delay to it delays the whole project. Classic mistake (crossed): "B can be 1 day late and so can F, so 2 days".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Shed paths | 9, 8, 8, 7; minimum 9 days | 1, 2, 3 |
| Shed floats | A 0, B 1, C 0, D 0, E 0, F 1, G 0; check 1 + 1 + 3 + 2 + 2 = 9 | 4, 7, A2 |
| Hook ghosts | curing +1: 10; kit +1: 9 | 1, 3 |
| Site lesson03 WE2 | EST 0, 2, 2, 6, 5; LST 0, 2, 6, 6, 9; floats 0, 0, 4, 0, 4; 11 days; C 3 days late: E float 1 | 5 |
| Site lesson05 WE1 | 3 + 5 + 2 = 10; 3 + 4 + 3 = 10 | 6 |
| Renovation (A1) | 12, 12, 7; F EST 5, LST 10, float 5 | 8, 9 |
| Formal (final frame) | durations 2, 1, 4, 2, 1, 1, 1 weeks; timeline 0 to 10 | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated in Python 3.14 (19 Nov 2026, scratchpad `cf/verify.py`, `python -I`: all paths, scans and floats); Codex to re-check.

- Shed: paths A-C-D-E-G 9, A-C-D-E-F 8, B-E-G 8, B-E-F 7; EST/LST A 0/0, B 0/1, C 1/1, D 2/2, E 5/5, F 7/8, G 7/7; D = 4 gives 10; B = 5 gives 9.
- Site lesson03 WE2: T = 11; floats A 0, B 0, C 4, D 0, E 4; paths A-B-D 11, A-C-E 7.
- Site lesson05 WE1: T = 10; both paths 10; all floats 0.
- Renovation: T = 12; paths A-B-D-E 12, A-C-E 12, A-B-F 7; F float 5.

## Memory aid check

- **"Longest path, zero float: that's critical."** with key line **"Float = LST − EST, the room a job has to move."** From the site's lesson01 card 02 ("The critical path is the longest path through the network") and lesson03's float table. Meaning, as said in scenes 3, 4 and 7. Assumptions checked: the finish's latest time is set equal to its earliest (c02), so the critical activities have exactly zero float (with a later deadline, the critical path would have the smallest float, not zero; not in the course); "longest" means the largest total duration, not the most arrows; dummies add 0. It helps a new case: on the renovation both 12-day paths have zero float on every activity, and F, off both, has float 5.
- **Considered, not used:** "Critical = can't wait" (true, but doesn't name the test).

## Narration length estimate

Counted by script (scratchpad `cf/count.py`, the method of `work/brief-resolve-standard-t1/count.py`, which reproduces e08's 5,632): **5,017 characters**, 13 scene headings. Characters per scene (1 to 13): 377, 658, 455, 681, 564, 430, 212, 361, 350, 204, 330, 320, 75.

At 13.3 characters per second the speech is about 377 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, final frame 2 s) 6 s; settling for the path bars (2), the amber path and its ghost (3), the float table (4), the shared-float slide (5), the tie (6) and the loose bars (12) about 50 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 492 s**, under the 570 s cap. Feedback speech: about 26 s and 25 s.

Reserve trims if the voiced take runs long: scene 3's Year 11 sentence (about 8 s; the grey chip stays); scene 6's last sentence (about 5 s).

## Scene list and build ids

Lesson key `m-s12c03` (route math-s12-c03). Explainer folder `src/explainer/lessons/math-s12-c03`; build inputs in `docs/production/claude-pm/lessons/math-s12-c03/` (at voicing).

In order (13 scene headings): hook-cant-slip, every-path-finishes, critical-path, float-room-to-move, worked-shared-float, two-paths-tie, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff-formal-bars, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 25 s | 1 | c02's frame; the two ghost delays |
| 25 to 80 s | 2 | Paths racing as bars |
| 80 to 120 s | 3 | The critical path in amber |
| 120 to 175 s | 4 | The float table |
| 175 to 230 s | 5 | g01 board: the site's network, shared float |
| 230 to 260 s | 6 | Two critical paths |
| 260 to 275 s | 7 | Framed memory card |
| 275 to 385 s | 8 to 11 | Question cards and countdowns, then feedback |
| 385 to 405 s | 12 | The formal's loose bars |
| 405 to 450 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: c02's last frame continues into 1; 1 to 2 stage change; 2 to 3 camera continue; 3 to 4 stage change; 4 to 5 clear change to the board; 5 to 6 stage change; 6 to 7 stage change; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-c03-learning-review.md`, `science_check` = `checks/m-s12-c03-maths-check.md`.

## Assets

Inspected before choosing (19 Nov 2026): the shed plate is c02's brief; no existing maths plate shows a school hall or a formal (the pack's search; `ma11-` and `ma12-` sets carry no event venues).

Need (painted): `ms12-school-hall-formal-v1.png` (c04's opening, shown in this video's final frame; ruling 17). Reused: `ms12-backyard-shed-v1.png` (c02's brief).

Coded: the networks, path bars, float table and bars, the day line, the board, question cards, the countdown, hand tags, the framed card, key notes, the loose bars and the timeline.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `DrawnMark`, the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`; `ProjectModel`, `ActivityNetwork` (split boxes), `ScanSweep` results.

Additions (kit-needs file, critical path items 3, 5 and 6):
1. **Critical highlight on ActivityNetwork:** amber, thick, with a "critical" label; several paths at once.
2. **PathStack** (main new part): one bar per path, built segment by segment as the path lights; a dashed line at the finish time; "+0" segments for dummies. Check: the shed's four bars read 9, 8, 8, 7 and the 9 meets the dashed line.
3. **FloatTable** with olive float bars and per-row amber rings; feeds the network's critical highlight.
4. **Loose bars on an empty timeline** (c04's opening; GanttChart's bars in an unplaced state).

## Codex asset brief (Maths S12 C03, a school hall set for a formal)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-s12-c03.md`, route entry math-s12-c03. Paint after the learning review and maths check pass and root gives the go-ahead, and before the c03 build (the plate appears in c03's final frame and opens c04; ruling 17). Save to `public/assets/maths/`. Ink and watercolour in the house style, matched to `ms12-backyard-shed-v1.png` (c02's brief) in palette; no text, labels, numbers, logos, people, hands or faces; never stretch.

1. `ms12-school-hall-formal-v1.png` (1400 × 1000 px, true alpha or a softened rectangular edge): the inside of a school hall set up for a Year 12 formal, seen from the back of the hall at standing height, before guests arrive. Round tables with white cloths and simple centrepieces in the foreground and middle; strings of warm fairy lights across the ceiling; a low stage at the back with a DJ table (decks and speakers, switched off) and a plain balloon arch; polished timber floor; tall windows with dusk light. Nothing written anywhere (no banners with words, no signs). Leave the bottom 130 px free of anything that needs to be seen.

Report inspection at 600 px and at 300 px wide on the paper background (`#f6f1e7`), confirming the tables, lights and stage read at 300 px. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ms12-c03-provenance.json`. If the c04 designer chooses another opening, only c03's final frame changes.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a script, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the four syllabus quotes match the route-inputs JSON exactly, under the Standard 2 heading only, including "critical path(s)".
3. Confirm the site's lesson03 Worked Example 2 and lesson05 Worked Example 1 keep their numbers; MS-49's "12", MS-52's "days 2–4" and MS-53's node float are not used.
4. Confirm both attempts carry every demand and given, and neither card shows an answer (no amber, no floats).
5. Confirm scene 1 opens on c02's final frame and scene 12 matches section 2 of the decisions file (and, once written, c04's opening).
6. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: The Critical Path and Float Times | Year 12 Maths Standard 2

(Title length: 60 characters by script.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/critical-path-analysis/lesson03.sa.html

A backyard shed takes nine days to build. If the slab cures a day longer, it's a day late, but if the kit arrives a day late, nothing changes. Why? Learn why the longest path sets the minimum completion time, what the critical path is, and how to calculate float (LST − EST) to identify critical and non-critical activities. See why floats on one path are shared, and how two paths can both be critical. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Critical path analysis. Standard 2.
Syllabus content, Standard 2 (NSW Mathematics Standard 11-12, 2024):
"Explain the term critical path"
"Calculate float times to identify critical and non-critical activities"
"Analyse ESTs and LSTs to locate the critical path(s) for the project"
"Apply critical path analysis to determine the minimum completion time for a project"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa9c92c4c6

Builds on: Forward and Backward Scans: EST and LST. Next: Gantt Charts and the Critical Path.

#Year12Maths #MathsStandard #CriticalPathAnalysis #HSCScience

## Open decisions

- **1. The school formal for c04 (root).** The pack's anchor; it needs a new hall plate (briefed here). The alternative is the shed's own Gantt chart in c04 (no new plate), but c05 already builds on the shed's chart, so the formal keeps c04 fresh.
- **2. One float formula (pack decision).** The site's three-term form is not shown; Codex reports if recent HSC papers use only that form.

## Review notes

- Revision 1. Next: student learning review (trace from c02; check that "every path has to finish" makes the longest path feel inevitable, that the Year 11 contrast does not confuse, that float = LST − EST is concrete with the kit's day, that the shared-float slide is clear, that the tie in scene 6 prepares A1, and that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
