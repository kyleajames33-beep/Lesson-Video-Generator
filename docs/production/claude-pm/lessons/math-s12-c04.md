# Maths S12 C04: How does a Gantt chart show a project schedule and its critical path? Activities down the side and time along the bottom, each bar at its EST and as long as its duration, critical bars joined end to end, dashed float windows to the latest finish, and reading a chart back (design)

Status: Revision 1 (19 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Standard designs (`math-s12-r12a.md`, `t05.md`, `i09.md` at Revision 2, and their resolution logs), c03's final frame (`math-s12-c03.md` scene 12) and root's Standard rulings (1 to 76; ruling 72, the shed returns in the final frame). Designer's decisions for c01a to f04, including every join: `../checks/root-decisions-maths-s12-c01-f04.md`. Next: student learning review, then the Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,041 characters by script (see "Narration length estimate"), 13 scene headings, about 494 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: fifth video of the Critical path analysis strand, playlist order 86. **Standard 2 only.** Pre-design pack: `../pre-design/maths-standard/math-s12-c04.md`. Site lesson (read through the pack's quotations, read only): `maths-standard/year12/critical-path-analysis/lesson04.sa.html` (SHA256 `d0e1166464da1c40cb45571fc94734b73b5ed926c330a6ab2c3706cc37d5663a`; card 1, "For each activity, draw a solid bar starting at its EST and ending at EST + duration. For non-critical activities, add a float window (dashed box) extending from the end of the bar to LST + duration (= LST(end node))."; Worked Example 2, "Activity G has a bar from day 3 to day 8 followed by a dashed window from day 8 to day 11. EST of G = 3; Duration of G = 8 − 3 = 5; Float of G = 11 − 8 = 3; Latest start of G = 3 + 3 = 6"). Route entry: `math-s12-c04` in `../../programme/maths-standard-route-inputs-7.json`. Visual system: maths studio kit; the school hall set for a formal (c03's final frame) as the anchor; networks and Gantt charts coded, HSC style.

Owner rules applied: plates for real objects, code for diagrams; no people, hands or faces; one main question; one stage at a time; words before symbols (Gantt chart, bar, float window in plain words first); g01 worked example (task strip, the chart and the givens apart); two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (a school formal, a community garden, a backyard shed); Australian spelling; no em dashes; conversational narration; text above y = 950.

Syllabus content points (Mathematics Standard 11-12 (2024), Year 12), quoted from `../../programme/maths-standard-route-inputs-7.json`:

Standard 2 (Critical path analysis):
- `cid66dcd84`: "Construct a Gantt chart to represent a project from a network diagram indicating the critical path"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa9c92c4c6

**Boundary:** starts from c03's final frame exactly (decisions file section 2): the school hall plate `ms12-school-hall-formal-v1.png` at the left; an empty timeline "weeks" 0 to 10; seven loose bars (A book the venue 2, B choose the theme 1, C sell tickets 4, D order decorations 2, E book the DJ 1, F seating plan 1, G decorate the hall 1); chips "how do we show this on a calendar?", "Next", "?". Recalls c02 (EST, LST) and c03 (critical path, float, shared float) in a phrase or grey chip. Teaches: a Gantt chart (activities down the side, time along the bottom from 0 to the minimum completion time); each bar starts at its EST and is as long as its duration; critical bars coloured, joined end to end; a non-critical bar's float as a dashed window from the end of its bar to its latest finish (LST + duration); built from the network diagram (the syllabus wording); reading a chart back (EST, duration, float, latest start, what is running at a time); shared float on two bars in a row. Stops at constructing and reading Gantt charts. Not taught: changing durations (c05).

## Decisions

- **Anchor: the school formal (c03's handoff).** A book the venue 2 (–); B choose the theme 1 (–); C sell tickets 4 (A); D order decorations 2 (B); E book the DJ 1 (A); F seating plan 1 (C); G decorate the hall 1 (D, F). Network: A 1→2, B 1→3, C 2→4, D 3→5, E 2→6, F 4→5, G 5→6 (no dummy). 8 weeks; critical A, C, F, G; floats B 4, D 4 (shared), E 5. Bars: A 0 to 2; B 0 to 1 (window to 5); C 2 to 6; D 1 to 3 (window to 7); E 2 to 3 (window to 8); F 6 to 7; G 7 to 8.
- **From the network (syllabus wording; pack decision).** Scene 2 shows the formal's network with its scans done (c02 and c03 taught them; the boxes and floats are given, not re-worked), and every bar in scenes 3 and 4 lifts off its own arrow.
- **Worked example (g01): the site's lesson04 Worked Example 2** (reading a bar: G 3 to 8, window to 11; EST 3, duration 5, float 3, latest start 6). Reading back is the pack's second skill; constructing is taught on the formal in 3 and 4.
- **Shared float (pack visual need).** B moved 3 weeks later: D's window shrinks from 4 weeks to 1 (scene 6), recalling c03's shared float on a chart.
- **Time cursor (pack visual need).** At week 2.5: C, D and E are running (3 activities).
- **Simulations (standard item 3).**
  1. **Arrows lift into bars** (scenes 3, 4; GanttChart linked to ActivityNetwork, one ProjectModel state): each arrow lifts off the network, flies to its row and lays down as a bar starting at its EST; critical bars amber; float windows unroll as dashed olive boxes.
  2. **Time cursor** (scene 6): a vertical line slides along the weeks with a live readout "running: …" listing and counting the bars it crosses.
  3. **Shared float drag** (scene 6): B's bar slides 3 weeks later; D's bar is pushed along and its dashed window shrinks, with a readout "D's float: 4 → 1".
- **Colour roles (strand, fixed).** Letters ink; durations blue; EST teal (bar starts marked with a small teal tick); LST violet; critical bars amber with the word "critical"; float windows olive, dashed, with the word "float"; answer green; mistake red, crossed slips only.
- **Large type, handwritten voice.** Row labels 36 px; week numbers 32 px; current rows 48 to 52 px. Hand tags: "from the network", "down: activities", "along: time", "start at the EST", "length = duration", "joined end to end", "dashed = float", "out to the latest finish", "no window: critical", "float = the dashes only", "latest start = EST + float", "3 at once", "shared float". At most two live at once.
- **Stage changes (standard item 2).** c03's frame (1); the formal's network with its scans (2); the critical bars (3); the float windows (4); g01 board, reading a bar (5); the time cursor and the shared-float drag (6); framed card (7); question cards (8 to 11); the shed's Gantt chart under a rain cloud (12); key notes (13).
- **Worked example (g01 layout).** Scene 5: task strip "On a Gantt chart, activity G has a bar from day 3 to day 8, followed by a dashed window to day 11. Find G's EST, duration, float and latest start."; givens card: the bar drawn on a day line 0 to 12; rows "EST = 3", "duration = 8 − 3 = 5", "float = 11 − 8 = 3", "latest start = 3 + 3 = 6"; framed answer (green); crossed slip "float = 5, the bar's length" (caption "the float is only the dashed part: 11 − 8 = 3").
- **Memory aid.** Framed card: "Bar at the EST, as long as the job. Dashes are float." Key line: "Critical bars join end to end, with no window."
- **Visual surprise.** The four amber bars snap into one unbroken chain across the chart (3); D's window shrinks while only B is dragged (6).
- **Plain meanings at first use.** Gantt chart ("a schedule drawn as bars on a timeline"); bar ("one activity, drawn from when it starts to when it finishes"); float window ("a dashed box after a bar showing how long it could slip"); latest finish ("the latest start plus the duration").
- **Attempts (original, HSC style).** A1 (pack question 1): the community garden (A 3 (–), B 2 (A), C 5 (A), D 2 (B), E 1 (C, D); network given); 9 days; bars A 0 to 3, C 3 to 8, E 8 to 9 (critical); B 3 to 5 window to 6; D 5 to 7 window to 8; crossed "B's bar from 0 to 2" (caption "B starts when A finishes, at day 3"). A2 (pack question 2): J's bar 2 to 5, window to 7; EST 2, duration 3, float 2, latest start 4; crossed "latest start: week 7" (caption "7 is the latest finish: 7 − 3 = 4").
- **Mistake scene:** none separate. A bar starting at 0 (A1 crossed); a bar at the LST (3, said); the window before the bar (4, said); a window on a critical bar (4, said); the bar's length read as float (5 crossed); the latest finish read as the latest start (A2 crossed).
- **Cause chain taught, in order:** (1) each activity can begin at its EST, so its bar starts there and lasts its duration (3); (2) critical activities follow one another with no spare time, so their bars join end to end (3); (3) a non-critical activity could finish as late as LST + duration without delaying the project, so the dashed window runs from its bar's end to that time, and its length is the float (4); (4) on a chart, a bar's start, length and window give the EST, duration and float, and EST + float gives the latest start (5); (5) activities in a row share one float, so using it on one shrinks the next (6).
- **Entry knowledge (route):** math-s12-c03 (critical path, float); math-s12-c02 (EST, LST). Recalled in a phrase or grey chip.
- **Handoff (to math-s12-c05, changing durations).** Scene 12's frame (decisions file section 2): the shed plate `ms12-backyard-shed-v1.png` at the left (about 520 px); the shed's Gantt chart at the right (about 1,250 × 520 px; days 0 to 10): A 0 to 1, C 1 to 2, D 2 to 5, E 5 to 7, G 7 to 9 amber (critical, joined); B 0 to 4 with an olive dashed window to 5; F 7 to 8 with a window to 9; a dashed finish line at 9 labelled "finish: day 9"; a coded rain cloud over the "D slab cures" bar; chips "what if it rains for a day?", "Next" and "?". No new time is shown.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Formal events: earliest 0, 2, 1, 6, 7, 8; latest 0, 2, 5, 6, 7, 8 (events 1 to 6 as numbered above). EST/LST A 0/0, B 0/4, C 2/2, D 1/5, E 2/7, F 6/6, G 7/7. Windows: B 1 to 4 + 1 = 5; D 3 to 5 + 2 = 7; E 3 to 7 + 1 = 8.
  (b) Cursor at 2.5 weeks: C (2 to 6), D (1 to 3), E (2 to 3): 3 running.
  (c) B starts at week 3: B 3 to 4; D's EST 4, D 4 to 6, latest finish 7, window 6 to 7 (1 week).
  (d) Site WE2: 3, 8 − 3 = 5, 11 − 8 = 3, 3 + 3 = 6; latest finish 11.
  (e) Community garden: A 1→2, B 2→3, C 2→4, D 3→4, E 4→5 (no dummy); EST/LST A 0/0, B 3/4, C 3/3, D 5/6, E 8/8; 9 days; B and D share 1 day.
  (f) A2: 5 − 2 = 3; 7 − 5 = 2; 2 + 2 = 4 = 7 − 3.
  (g) The shed chart (c05's opening): EST A 0, B 0, C 1, D 2, E 5, F 7, G 7; windows B 4 to 5, F 8 to 9.

Main question: *The formal's committee wants a calendar, not a network. How does a Gantt chart show the schedule and its critical path?*
Entry knowledge (c03; c02): critical path, float, EST, LST.
Stops after: building a Gantt chart from a network, critical bars, float windows, reading a chart.
Handoff: the shed's Gantt chart under a rain cloud, "what if it rains for a day?" (c05).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): durations blue; EST teal; LST violet; critical amber; float olive dashed; answer green; mistake red. Header strip "MATHEMATICS STANDARD · CRITICAL PATH ANALYSIS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: a calendar for the formal
> Here's the Year 12 formal, planned in weeks, with seven jobs to finish before the night. A network diagram tells us what waits for what, and its scans give each job's earliest and latest start. But the formal committee wants to see the plan like a calendar, week by week, so they can see what's happening when. How does a Gantt chart show a project's schedule and its critical **path**?

Visual: opens on c03's final frame exactly. On the first sentence "Next" fades and the hall plate brightens. On "what waits for what" a small network sketch flickers at the top right. On "week by week" the timeline's week numbers pulse left to right. On "what's happening when" the loose bars wobble. On "path" heading "Gantt charts" writes.

### 2. start from the network
> A Gantt chart is built from the network diagram, so start there. It's the same kind of network and scans we've already done, so there's nothing new to calculate. Booking the venue, A, takes two weeks, and choosing the theme, B, takes one, and both can start straight away. Selling tickets, C, and booking the DJ, E, follow the venue. Ordering the decorations, D, follows the theme. The seating plan, F, follows the tickets, and decorating the hall, G, needs the decorations and the seating plan. The scans give the whole formal eight weeks, with critical path A, C, F and G. B and D each have four weeks of float, and E has **five**.

Visual: stage change. The plate shrinks to a badge at the top left; the formal's network fills the left 60 per cent (about 1,100 × 560 px): "A 2" 1→2, "B 1" 1→3, "C 4" 2→4, "E 1" 2→6, "D 2" 3→5, "F 1" 4→5, "G 1" 5→6, each drawing on its spoken words (hand tag "from the network"). On "The scans" the split boxes fill at once (1 (0 | 0), 2 (2 | 2), 3 (1 | 5), 4 (6 | 6), 5 (7 | 7), 6 (8 | 8)) with a grey chip "scans: done before". On "critical path A, C, F and G" those arrows thicken amber. On "four weeks of float" olive tags "float 4" on B and D; on "five" (bold) "float 5" on E. At the right a small table (36 px): "EST / LST / float" for A to G, with grey chip "float = LST − EST".

### 3. bars at their earliest start
> Now the chart. Builders and event planners use charts like this every day. Activities go down the side, and time goes along the bottom, here from zero to eight weeks. Each activity becomes a bar. The bar starts at the activity's earliest start time, and its length is the duration. So A starts at zero and runs for two weeks. C starts at two and runs to **six**. F runs from six to seven, and G from seven to **eight**. Those four are critical, so they're coloured, and look how they join end to end with no gaps. You can read the critical path straight across the **chart**.

Visual: simulation 1. The network shrinks to the top left (about 760 × 380 px); the Gantt chart grows at the right and bottom (about 1,250 × 600 px): rows A to G down the side (36 px; hand tag "down: activities"), weeks 0 to 8 along the bottom (32 px; hand tag "along: time"). On "starts at the activity's earliest start time" a teal tick at the start of row A (hand tag "start at the EST"); on "its length is the duration" (hand tag "length = duration"). On "A starts at zero" arrow A lifts off the network and lays down as an amber bar from 0 to 2. On "six" (bold) C's arrow lifts and lays down from 2 to 6. On "seven" F from 6 to 7; on "eight" (bold) G from 7 to 8. On "join end to end" the four amber bars pulse in sequence and small amber joins appear at 2, 6 and 7 (hand tag "joined end to end"). On "chart" (bold) the label "critical" writes beside the chain.

### 4. dashed windows for float
> Now the jobs with float. B starts at zero and takes one week, so its bar ends at one. After it we draw a dashed box out to its latest finish, its latest start plus its duration, four plus one, which is **five**. That dashed box is B's float, four weeks of room. Notice the window ends at the latest finish, not the latest start. D runs from one to three, with a dashed window out to **seven**. E runs from two to three, with a window to the end, at **eight**. The critical bars get no window at all, because they have no room to move.

Visual: camera continue. On "B starts at zero" B's arrow lifts and lays down as a plain (ink outline, pale blue fill) bar from 0 to 1. On "latest finish" a violet tick at 5 on row B, label "4 + 1" (hand tag "out to the latest finish"); on "five" (bold) an olive dashed window unrolls from 1 to 5, labelled "float 4" (hand tag "dashed = float"). On "seven" (bold) D's bar 1 to 3 and its window to 7 ("float 4"). On "eight" (bold) E's bar 2 to 3 and its window to 8 ("float 5"). On "no window at all" the amber bars glow (hand tag "no window: critical"). The finished chart holds 1 s.

### 5. worked example: reading a bar
> Here's how to read a Gantt chart backwards. Sometimes you're given the chart and asked to read the numbers off it. On this chart, activity G has a bar from day three to day eight, then a dashed window to day eleven. The bar starts at three, so G's EST is **three**. Its length, eight minus three, gives a duration of **five** days. The dashed window, eleven minus eight, is the float, **three** days. And the latest start is the EST plus the float, three plus three, which is day **six**. Reading the whole bar's length as the float is the slip. The float is only the dashed **part**.

Visual: clear change to the g01 board. Task strip, 44 px: "On a Gantt chart, activity G has a bar from day 3 to day 8, followed by a dashed window to day 11. Find G's EST, duration, float and latest start." Givens card: G's bar (ink outline) 3 to 8 and an olive dashed window 8 to 11 on a day line 0 to 12 (about 1,000 px wide, 32 px numbers). Rows, 48 px: on "three" (first bold) "EST = 3" (teal; the bar's left edge ticks); on "five" "duration = 8 − 3 = 5" (blue; a brace under the bar); on "three" (second bold) "float = 11 − 8 = 3" (olive; a brace under the window); on "six" "latest start = 3 + 3 = 6" (violet; a ghost bar slides to start at 6 and end at 11; hand tag "latest start = EST + float"). Framed answer (green): "EST 3, duration 5, float 3, latest start 6". On "slip" a red slip "float = 5, the bar's length"; on "part" it is crossed (caption "the float is only the dashed part: 11 − 8 = 3"; hand tag "float = the dashes only").

### 6. what's running, and shared float
> A Gantt chart also shows what's happening at any moment. Put a line at two and a half weeks. It crosses C, D and E, so three jobs are running at once, selling tickets, ordering decorations and booking the DJ. If the committee can only handle two jobs at once, that week needs a rethink. Now watch what happens if choosing the theme starts three weeks late. The decorations have to start later too, so D's window shrinks to just one week. B and D are on the same path, so they share their four weeks of **float**.

Visual: stage change: simulations 2 and 3, back to the formal's full chart (about 1,500 × 640 px). On "Put a line" a vertical cursor slides from 0 to 2.5; the readout writes "running: C, D, E" and on "three jobs" "3" (hand tag "3 at once"). On "starts three weeks late" the cursor fades and B's bar slides from 0 to 3 (bar 3 to 4); D's bar is pushed to 4 to 6 and its window shrinks to 6 to 7, readout "D's float: 4 → 1". On "float" (bold) a bracket spans B's and D's rows (hand tag "shared float"), then B and D slide back.

### 7. memory aid
> Here's the summary. Each bar starts at its EST and is as long as its duration. Critical bars join end to end, and dashed windows show the **float**. Then you can read any chart forwards or backwards.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the formal's chart, small. Main line, hand font 56 px: "Bar at the EST, as long as the job. Dashes are float." On "float" the key line, 40 px: "Critical bars join end to end, with no window." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. A community garden project has five activities, in days. A, three days, has no predecessors. B, two days, and C, five days, both follow A. D, two days, follows B. And E, one day, follows C and D. Its network is shown. Draw a Gantt chart for the project, and show the critical path and any float. Pause here to answer.

Visual: `QuestionCard`, 40 px: "A community garden project has these activities. Its network diagram is shown. Draw a Gantt chart for the project. Show the critical path and any float." Table (36 px): "A | 3 | –", "B | 2 | A", "C | 5 | A", "D | 2 | B", "E | 1 | C, D" (heads "Activity", "Duration (days)", "Immediate predecessors"); the network beside it (A 1→2, B 2→3, C 2→4, D 3→4, E 4→5) with empty boxes; an empty chart grid (rows A to E, days 0 to 10). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> The critical path is A, C, E, nine days, so A runs from zero to three, C from three to eight, and E from eight to **nine**, with no windows. B runs from three to five, with a window to six. D runs from five to seven, with a window to **eight**, and B and D share that one day. Starting B's bar at zero is the slip. B can't start until A finishes, at day **three**.

Visual: the card shrinks to the top (30 px). The chart builds (days 0 to 9): amber "A 0 to 3", "C 3 to 8"; on "nine" (bold) "E 8 to 9", joined. B's bar 3 to 5 with an olive window to 6; on "eight" (bold) D's bar 5 to 7 with a window to 8; a bracket "shared: 1 day". Framed (green): "9 days; critical path A, C, E". On "slip" a red ghost bar for B from 0 to 2 and a red slip "B's bar from 0 to 2"; on "three" (bold) it is crossed (caption "B starts when A finishes, at day 3"). Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. On a Gantt chart, activity J has a bar from week two to week five, followed by a dashed window to week seven. State J's earliest start time and its duration, find its float, and find the latest time J can start without delaying the project. Pause here to answer.

Visual: `QuestionCard`, 40 px: "On a Gantt chart, activity J has a bar from week 2 to week 5, followed by a dashed window to week 7. (a) State the earliest start time and the duration of J. (b) What is the float of J? (c) What is the latest time J can start without delaying the project?" The bar and window drawn (weeks 0 to 8). Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> The bar starts at week two, so the EST is two, and five minus two gives a duration of three weeks. The window, seven minus five, is a float of two **weeks**. The latest start is two plus two, week **four**. Saying week seven is the slip. Seven is the latest finish, so the latest start is seven minus three, which is still **four**.

Visual: the card shrinks to the top. Rows, 44 px: "EST = 2; duration = 5 − 2 = 3" (framed green, (a)); on "weeks" "float = 7 − 5 = 2" (framed, (b)); on "four" (first bold) "latest start = 2 + 2 = 4" (framed, (c)); a ghost bar slides to 4 to 7. On "slip" a red slip "latest start: week 7"; on "four" (second bold) it is crossed (caption "7 is the latest finish: 7 − 3 = 4"). Hold about 1 s.

### 12. handoff: rain on the slab
> Back to the backyard shed, this time as a Gantt chart. It's nine days, with the critical bars joined end to end, and the kit and the door each have a day of float. But the forecast says rain while the slab is curing, and curing might take an extra day. What happens to the finish when one job takes longer, or when one gets **faster**?

Visual: board clear to the final frame (decisions file section 2). The shed plate at the left (about 520 px); the shed's Gantt chart at the right (about 1,250 × 520 px; days 0 to 10; rows labelled "A clear the site", "B kit delivery", "C pour the slab", "D slab cures", "E walls and roof", "F door and window", "G paint"): amber A 0 to 1, C 1 to 2, D 2 to 5, E 5 to 7, G 7 to 9, joined; B 0 to 4 with an olive window to 5; F 7 to 8 with a window to 9; a dashed finish line at 9, "finish: day 9". On "rain" a coded rain cloud drifts over D's bar. On "faster" chips "what if it rains for a day?" (40 px), "Next" and "?". No new time is shown. Hold about 2 s. This is c05's opening; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Gantt chart: activities down the side, time along the bottom.
- Each bar starts at its EST; its length is the duration.
- Critical bars join end to end, with no window.
- Dashed window after a bar = its float, out to the latest finish.
- Latest start = EST + float. Floats in a row are shared.

Memory aid (framed card, right side, as in scene 7): *Bar at the EST, as long as the job. Dashes are float.* Key: *Critical bars join end to end, with no window.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame: c05 opens on it.

## Teaching checks

- **Does it explain causes?** Why bars start at the EST: that's when each job can begin (3). Why critical bars join: no spare time between them (3). Why the window ends at LST + duration: that is the latest the job can finish (4). Why EST + float is the latest start (5). Why D's window shrinks when B moves: they share one float (6).
- **Misconceptions addressed:** every bar from 0 (A1); bars at the LST (3, said); windows before bars or on critical bars (4); the bar's length as float (5); the latest finish as the latest start (A2); shared float doubled (6).
- **Visual standard, item by item:** 1 the school hall plate and the shed plate; 2 a new stage every 30 to 60 s; 3 arrows lifting into bars, the time cursor, the shared-float drag; 4 fixed roles with words; 5 large type; 6 hand tags; 7 g01 board in 5; 8 framed card and five bullets; 9 the amber chain snapping together.
- **One idea at a time:** the network (2), critical bars (3), float windows (4), reading back (5), running jobs and shared float (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand and given visible; 10 s each; feedback about 26 s and 24 s.
- **Avoided double teaching:** the scans and floats are given in scene 2 (grey chips "scans: done before", "float = LST − EST").
- **Syllabus coverage:** `cid66dcd84`: "Construct a Gantt chart to represent a project" (3, 4, A1) "from a network diagram" (2, A1's network) "indicating the critical path" (3, A1).
- **Out of scope by design:** changing durations (c05); crash costs (not in the syllabus).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original, HSC style, 3 marks suggested, not an official marking scheme).** "A community garden project has these activities. Its network diagram is shown. Draw a Gantt chart for the project. Show the critical path and any float." Table: A 3 (–); B 2 (A); C 5 (A); D 2 (B); E 1 (C, D).
Model answer: minimum 9 days; critical path A, C, E. Bars: A 0 to 3; C 3 to 8; E 8 to 9 (critical, no window). B 3 to 5 with a dashed window to 6; D 5 to 7 with a dashed window to 8 (B and D share 1 day of float). Classic mistake (crossed): "B's bar from 0 to 2".

**Attempt 2 (scene 10; pack question 2, original, HSC style, 3 marks suggested).** "On a Gantt chart, activity J has a bar from week 2 to week 5, followed by a dashed window to week 7. (a) State the earliest start time and the duration of J. (b) What is the float of J? (c) What is the latest time J can start without delaying the project?"
Model answer: (a) EST week 2; duration 3 weeks. (b) Float = 7 − 5 = 2 weeks. (c) Latest start = 2 + 2 = week 4 (= 7 − 3). Classic mistake (crossed): "latest start: week 7".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Formal | 8 weeks; critical A, C, F, G; floats B 4, D 4, E 5; bars A 0–2, B 0–1 (to 5), C 2–6, D 1–3 (to 7), E 2–3 (to 8), F 6–7, G 7–8 | 2, 3, 4, 6, 7 |
| Cursor | 2.5 weeks: C, D, E; 3 running | 6 |
| Shared float | B at 3 to 4; D 4 to 6; window 6 to 7; D's float 4 → 1 | 6 |
| Site WE2 | G 3 to 8, window to 11: EST 3, duration 5, float 3, latest start 6 | 5 |
| Garden (A1) | 9 days; A 0–3, C 3–8, E 8–9; B 3–5 (to 6); D 5–7 (to 8) | 8, 9 |
| A2 | J 2 to 5, window to 7: EST 2, duration 3, float 2, latest start 4 | 10, 11 |
| Shed chart (final frame) | A 0–1, C 1–2, D 2–5, E 5–7, G 7–9; B 0–4 (to 5); F 7–8 (to 9); finish 9 | 12 |

(In this table the dashes between bar times stand for "to", as in the narration; screen text writes "to".)

## Numbers to verify (all values, repeated for Codex)

Recalculated in Python 3.14 (19 Nov 2026, scratchpad `cf/verify.py`, `python -I`); Codex to re-check.

- Formal: T = 8; EST/LST A 0/0, B 0/4, C 2/2, D 1/5, E 2/7, F 6/6, G 7/7; floats B 4, D 4, E 5; latest finishes B 5, D 7, E 8.
- B 3 weeks late: B 3 to 4, D 4 to 6, D's latest finish 7, so D's float 1; the finish stays 8.
- Community garden: T = 9; EST/LST A 0/0, B 3/4, C 3/3, D 5/6, E 8/8; floats B 1, D 1 (shared: path A-B-D-E = 8).
- Site WE2: 8 − 3 = 5; 11 − 8 = 3; 3 + 3 = 6.
- A2: 5 − 2 = 3; 7 − 5 = 2; 2 + 2 = 4; 7 − 3 = 4.
- Shed: EST A 0, B 0, C 1, D 2, E 5, F 7, G 7; latest finishes B 5, F 9.

## Memory aid check

- **"Bar at the EST, as long as the job. Dashes are float."** with key line **"Critical bars join end to end, with no window."** From the site's lesson04 card 1 ("draw a solid bar starting at its EST and ending at EST + duration ... add a float window (dashed box) extending from the end of the bar to LST + duration"). Meaning, as said in scenes 3, 4 and 7. Assumptions checked: bars drawn at the EST (the site's and the pack's convention; some charts draw at the LST, which the syllabus does not ask for; said in 3 as "earliest"); a window's length equals the float only for a single activity; shared float means two windows can't both be used in full (6). It helps a new case: a bar from 4 to 6 with dashes to 9 has EST 4, duration 2, float 3 and latest start 7.
- **Considered, not used:** "Solid is work, dashed is slack" (true, but "slack" is a second word for float).

## Narration length estimate

Counted by script (scratchpad `cf/count.py`, the method of `work/brief-resolve-standard-t1/count.py`, which reproduces e08's 5,632): **5,041 characters**, 13 scene headings. Characters per scene (1 to 13): 382, 629, 563, 522, 564, 508, 195, 328, 352, 272, 320, 331, 75.

At 13.3 characters per second the speech is about 379 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, final frame 2 s) 6 s; settling for the network (2), the lifting bars (3, 4), the board's braces and ghost bar (5), the cursor and the drag (6) and the shed's chart (12) about 50 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 494 s**, under the 570 s cap. Feedback speech: about 26 s and 24 s.

Reserve trims if the voiced take runs long: scene 2's middle sentences (about 10 s; the arrows still draw, with the plain table); scene 6's cursor sentences (about 9 s).

## Scene list and build ids

Lesson key `m-s12c04` (route math-s12-c04). Explainer folder `src/explainer/lessons/math-s12-c04`; build inputs in `docs/production/claude-pm/lessons/math-s12-c04/` (at voicing).

In order (13 scene headings): hook-formal-calendar, from-the-network, critical-bars, float-windows, worked-reading-bar, running-and-shared, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff-rain, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 30 s | 1 | c03's frame; the loose bars |
| 30 to 75 s | 2 | The formal's network and its scans |
| 75 to 120 s | 3 | Critical bars joined end to end |
| 120 to 160 s | 4 | Float windows |
| 160 to 205 s | 5 | g01 board: reading a bar |
| 205 to 240 s | 6 | The cursor; shared float |
| 240 to 255 s | 7 | Framed memory card |
| 255 to 365 s | 8 to 11 | Question cards and countdowns, then feedback |
| 365 to 390 s | 12 | The shed's chart under a rain cloud |
| 390 to 435 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: c03's last frame continues into 1; 1 to 2 stage change; 2 to 3 camera continue (the network shrinks as the chart grows); 3 to 4 camera continue; 4 to 5 clear change to the board; 5 to 6 stage change; 6 to 7 stage change; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-c04-learning-review.md`, `science_check` = `checks/m-s12-c04-maths-check.md`.

## Assets

Inspected before choosing (19 Nov 2026): the school hall is c03's brief and the shed is c02's; no plate is needed for the garden or J (chart tasks).

Need (painted): none new.

Coded: the networks, the Gantt charts, the cursor, the drag, the rain cloud, the board, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `DrawnMark`, the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`; `ProjectModel`, `ActivityNetwork` (boxes, critical highlight), `FloatTable`.

Additions (kit-needs file, critical path item 7):
1. **GanttChart** (main new part): rows down the side, a time axis, bars at EST with length = duration, critical bars amber and joined, olive dashed float windows to LST + duration; bars can lift from ActivityNetwork arrows (shared ProjectModel state); a vertical time cursor with a live "running" readout; a drag on a non-critical bar that pushes its successors and shrinks their windows (shared float). Check: the formal's chart matches "Numbers used"; dragging B to 3 gives D 4 to 6 with a window to 7.
2. **Rain cloud overlay** (small, coded; also c05).

## Codex asset brief (Maths S12 C04)

No new plate. The school hall is c03's brief and the shed is c02's. Report nothing unless the build finds either unreadable at about 520 px.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a script, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quote matches the route-inputs JSON exactly, under the Standard 2 heading only.
3. Confirm the site's lesson04 Worked Example 2 keeps its numbers; confirm the bars-at-EST convention with windows to LST + duration against recent HSC Standard 2 papers.
4. Confirm both attempts carry every demand and given, and neither card shows an answer (A1's grid empty; A2's bar only).
5. Confirm scene 1 opens on c03's final frame and scene 12 matches section 2 of the decisions file (and, once written, c05's opening).
6. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Gantt Charts and the Critical Path | Year 12 Maths Standard 2

(Title length: 61 characters by script.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/critical-path-analysis/lesson04.sa.html

A school formal has seven jobs over eight weeks, and the committee wants the plan as a calendar. Learn to construct a Gantt chart from a network diagram: activities down the side, time along the bottom, each bar starting at its earliest start time and as long as its duration. Critical bars join end to end, and dashed windows show float out to the latest finish. Read a chart back for the start, duration, float and latest start, see what is running at any moment, and see shared float on a chart. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Critical path analysis. Standard 2.
Syllabus content, Standard 2 (NSW Mathematics Standard 11-12, 2024):
"Construct a Gantt chart to represent a project from a network diagram indicating the critical path"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa9c92c4c6

Builds on: The Critical Path and Float Times. Next: Changing Activity Durations: What Happens to the Finish?

#Year12Maths #MathsStandard #CriticalPathAnalysis #HSCScience

## Open decisions

- **1. Scans given, not worked (root).** Scene 2 gives the formal's boxes and floats so the video stays on the chart; A1 asks students to scan the garden themselves before drawing. If the review finds the given scans too quick, a short worked forward scan can replace scene 6's cursor sentences.
- **2. Bars at the EST (Codex).** The site and pack convention; Codex reports if recent HSC papers use another.

## Review notes

- Revision 1. Next: student learning review (trace from c03; check that lifting arrows into bars ties the chart to the network, that the window's end (LST + duration) is clear, that reading G back is reachable, that the shared-float drag recalls c03 without re-teaching, and that A1 is doable after only scene 2's given scans), then the Codex maths check and error check, then voicing and a build to grade A.
