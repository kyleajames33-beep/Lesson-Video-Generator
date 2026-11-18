# Maths S12 C01a: How do we turn a precedence table into a project network? Activities and durations, immediate predecessors, arrows as activities and circles as events, one start and one finish, building row by row and checking the drawing against the table (design)

Status: Revision 2 (19 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (19 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Standard designs (`math-s12-r12a.md`, `t05.md`, `i09.md` at Revision 2, and their resolution logs), z06's final frame (`math-s12-z06.md` scene 12; `../checks/root-decisions-maths-s12-z01-z06.md`, section 3) and root's Standard rulings (1 to 76; ruling 70 splits c01 into c01a, the precedence table and the network, and c01b, dummy activities; ruling 71, the dummy convention; ruling 72, the café and the shed through the strand). Designer's decisions for c01a to f04, including every join: `../checks/root-decisions-maths-s12-c01-f04.md`. Next: student learning review, then the Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,097 characters by script (see "Narration length estimate"; Revision 2), 13 scene headings, about 493 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (19 Nov 2026): learning review resolved

Review: `../checks/m-s12-c01a-learning-review.md` (summary `../checks/m-s12-c01-f04-learning-review-summary.md`), with root's rulings 1 to 81 in `../checks/root-rulings-maths-standard-outline.md` and root's resolution brief of 19 Nov. Resolution log: `../checks/m-s12-c01-f04-learning-review-resolution.md`. Findings by the review's numbers:

1. Should fix, scene 4 (what an event means): **accepted**, reviewer's wording. "Each circle is an event, the moment when every arrow arriving there has finished. So every arrow that leaves an event has to wait for every arrow that arrives there." It replaces "a moment when some activities finish and others can start" and the untrue "Arrows that meet at an event all finish at that moment, and arrows that leave it all start from it." Visual, as the reviewer described: a second grey arrow arrives at circle 2 a beat after A, and a leaving grey arrow's tail lights only when both heads have landed (hand tag "leaves only when all have arrived"). The plain meaning of "event" under Decisions now matches.
2. Optional, scene 5 (why B ends at event 4 and nowhere else): **applied**, reviewer's sentence ("B can't end any earlier, at event two or three, or C or D would have to wait for the price tags too."), with a red ghost of B's head touching event 2, then event 3, then returning to event 4. Scene 4's Year 11 sentence stays (the margin does not need it).

Open decisions closed: 1 and 2 (ruling 81: c01a teaches drawing on the market stall and ends on the café's half-drawn network). Joins unchanged: scene 1 still opens on z06's final frame exactly, and scene 12 (c01b's opening) is unchanged.

Narration 5,097 characters by script (Revision 1: 5,014), about 493 s with holds, 77 s under the 570 s cap; feedback speech about 24 s and 24 s. Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. Nothing recorded; human listening pending.

Scope: first video of the Critical path analysis strand, playlist order 83 (first half; c01a and c01b share the outline number, ruling 70). **Standard 2 only** (Standard 1 has no critical path analysis; ruling 68). Pre-design pack: `../pre-design/maths-standard/math-s12-c01.md` (the "c01a" half of its suggested split). Site lesson (read through the pack's quotations, read only): `maths-standard/year12/critical-path-analysis/lesson01.sa.html` (SHA256 `baf5c3da12545359d8b0834b53f67c4be1a1f0daa9be7676afa44304033ea498`; hook, the house build "foundations (3 days), framing after foundations (5 days), roofing after framing (2 days), electrical during framing (4 days)"; card 05, "Only list immediate predecessors, the network captures indirect dependencies automatically. Multiple predecessors in one row means ALL must finish before this activity starts."; card 06, the arrows and nodes). Route entry: `math-s12-c01` in `../../programme/maths-standard-route-inputs-7.json`. Visual system: maths studio kit; the bakery-café counter (z06's final frame) as the anchor; precedence tables and networks coded, HSC style, letters and numbers only.

Owner rules applied: plates for real objects, code for diagrams; no people, hands or faces; one main question; one stage at a time; words before symbols; plain meanings (activity, duration, immediate predecessor, precedence table, network, event); g01 worked example with a task strip, the table and the network kept apart; two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (a café opening, a market stall, a house build, a garden makeover); Australian spelling; no em dashes; conversational narration; text above y = 950.

Syllabus content points (Mathematics Standard 11-12 (2024), Year 12), quoted from `../../programme/maths-standard-route-inputs-7.json`:

Standard 2 (Critical path analysis):
- `ci9043c6d8`: "Construct a network diagram from a precedence table or equivalent, including those involving dummy activities, limited to 10 activities" (dummy activities in c01b)

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa9c92c4c6

**Boundary:** starts from z06's final frame exactly (section 3 of `../checks/root-decisions-maths-s12-z01-z06.md`): header "MATHEMATICS STANDARD"; the bakery-café counter plate `ms12-bakery-cafe-counter-v1.png` (about 1,150 px wide, left and centre); the coded chalkboard "Morning jobs" with five lines ("switch on the oven: 10 min", "mix the muffin batter: 15 min", "bake the muffins: 25 min", "heat the pies: 20 min", "set out the display: 10 min"); clock chip "6:00 am"; chips "what order, and how soon can we open?", grey "Normal distribution: done", "Next" and "?". Recalls Year 11 Standard networks (math-s11-n02, n03: directed and weighted networks) in a phrase or grey chip. Teaches: an activity is a job that takes time (its duration); an immediate predecessor is a job that must finish just before another can start; the precedence table (a dash for none; immediate predecessors only); the activity network (activities as arrows labelled with letter and duration, events as numbered circles, one start event and one finish event); building it row by row (no predecessors: leave the start; otherwise leave the event where all the immediate predecessors finish; nothing waits: end at the finish); checking the drawing against the table; reading a table back from a network. Stops at networks that need no dummy. Not taught: dummy activities (c01b), times and scans (c02).

## Decisions

- **Anchor: the bakery-café's morning jobs (z06's handoff; ruling 72).** The jobs get letters and durations: A switch on the oven 10 min (–); B mix the muffin batter 15 min (–); C bake the muffins 25 min (A, B); D heat the pies 20 min (A); E set out the display 10 min (C, D). The precedence table is built here in full. The café's network needs a dummy (C needs A and B, D needs only A), so the café is not drawn to the end in c01a: it becomes the final frame's open problem, and c01b solves it.
- **Why the method is taught on another project.** A network that needs no dummy shows the method cleanly. Worked example (original): a weekend market stall, A load the van 30 min (–), B print the price tags 20 min (–), C drive to the market 40 min (A), D set up the tables 15 min (C), E put out the stock 25 min (B, D). It has a split at the start, a long arrow (B) and a two-predecessor merge (E), and no dummy. The site's office fit-out (B and C between the same two events) needs a dummy under ruling 71, so it moves to c01b.
- **Site examples.** The site's house build (lesson01 hook, as corrected in MS-50's suggested Problem 3: foundations A 3, framing B 5 after A, roofing C 2 after B, electrical D 4 after A) is attempt 1. The site's hero diagram (MS-49, a caption of 12 that its arrows do not give) is not used anywhere in the strand (ruling 74).
- **Convention (pack decision; ruling 71).** Activities on arrows, events on numbered circles; one start event and one finish event; arrows point left to right; an arrow's length means nothing. Said once in scene 4.
- **Immediate only (site card 05).** E's row is "C, D", not "A, C, D": the network carries the oven through the muffins and the pies. Said in scene 3 with a crossed slip.
- **Simulations (standard item 3).**
  1. **PrecedenceTable from the chalkboard** (scenes 2, 3; new kit part, chalkboard skin): each chalk line gains a letter, its duration slides into a Duration column, and the Immediate predecessors column fills on its spoken cue, with a short "why" tag beside each row ("needs a hot oven and the batter").
  2. **ActivityNetwork, built row by row** (scenes 4 to 6; new kit part): each table row lights, and its arrow draws from the event it must leave to a new or existing event; a predecessor check makes the arrows arriving at a start event glow when that row is checked.
  3. **Read-back** (scene 6): the table is covered; pointing at an arrow lights the arrows arriving at its start event, and the row writes itself back.
- **Colour roles (fixed for c01a to c06).** Activity letters ink; durations blue; events ink circles with numbers; dummies grey, dashed, "0" (c01b on); earliest times teal and latest times violet (c02 on); the critical path amber, thick, with the word "critical" (c03 on); float olive dashed windows with the word "float" (c03 on); the predecessor check a soft blue glow; answer green; mistake red, crossed slips only.
- **Large type, handwritten voice.** Current rows and table cells 48 to 52 px, supporting rows 32 px, task strips 40 to 44 px, arrow labels 40 px. Hand tags: "a job that takes time", "how long", "must finish just before", "– = nothing to wait for", "immediate only", "arrow = activity", "circle = event", "leaves only when all have arrived", "length means nothing", "no predecessors: leave the start", "leave where all predecessors finish", "nothing waits: the finish", "what arrives here?", "one finish". At most two live at once.
- **Stage changes (standard item 2).** z06's frame (1); the chalkboard gains letters and times (2); the precedence table (3); the network idea on one arrow (4); g01 board, the market stall (5); the check and read-back (6); framed card (7); question cards (8 to 11); the café's half-drawn network (12); key notes (13).
- **Worked example (g01 layout).** Scene 5: task strip "Draw a network diagram for setting up a market stall."; the precedence table as the givens card (Activity, Duration (min), Immediate predecessors: A load the van 30 –; B print the price tags 20 –; C drive to the market 40 A; D set up the tables 15 C; E put out the stock 25 B, D); the network at the right, built row by row; framed answer "events 1 to 5: A 1→2, B 1→4, C 2→3, D 3→4, E 4→5"; crossed slip in scene 6 "B ends at its own event" (caption "E must wait for B: B ends where E starts").
- **Memory aid.** Framed card: "Arrows are jobs. Circles are moments." Key line: "A job leaves the circle where all its immediate predecessors finish."
- **Visual surprise.** B's arrow stretches from the start all the way to event 4, the longest arrow on the page for one of the shortest jobs, and its label stays "B 20" (scene 5): the drawing shows order, not time.
- **Plain meanings at first use.** Activity ("a job that takes time"); duration ("how long it takes"); immediate predecessor ("a job that must finish just before this one can start"); precedence table ("the list of activities, durations and immediate predecessors"); network ("the picture of the project"); event ("the moment when every arrow arriving there has finished"; Revision 2, review finding 1).
- **Attempts (original wording, HSC style).** A1 (site lesson01 hook as MS-50's Problem 3): the house build; draw the network; A 1→2, B 2→3, C 3→4, D 2→4 (finish 4); crossed "D ends at its own finish" (caption "one finish event"). A2 (original): a garden makeover network (A 1→2 4 days, B 1→3 6, C 2→3 3, D 2→4 5, E 3→4 2); write the precedence table; A –, B –, C A, D A, E B, C; crossed "E: A, B, C" (caption "A finishes before C: not immediate").
- **Mistake scene:** none separate. Listing an indirect predecessor (3 crossed; A2 crossed); an extra finish event (6 crossed; A1 crossed); reading arrow length as time (5, said).
- **Cause chain taught, in order:** (1) a job can't start until the jobs it needs have finished, so each activity has immediate predecessors (3); (2) a job that needs another only through a third is already covered by the chain, so only immediate predecessors are listed (3); (3) an event is a moment, so every arrow that leaves an event waits for every arrow that arrives there (4, 5); (4) so an activity must leave the event where all its predecessors finish, and nowhere earlier (5); (5) the drawing is right when, at every arrow's start event, exactly its predecessors arrive (6).
- **Entry knowledge (route):** math-s11-n02 (directed networks, weighted edges); math-s11-n03 (a network from a table). Recalled in a grey chip "Year 11: arrows with directions and weights". Critical path analysis is new.
- **Handoff (to math-s12-c01b, dummy activities).** Scene 12's frame (section 2 of the decisions file): the café counter plate small at the top left; the café's precedence table (chalkboard skin) at the left; at the right, events 1, 2 and 3 with A 1→2 ("A 10", top) and B 1→3 ("B 15", bottom), D leaving event 2 to a dashed empty circle ("D 20"); a grey ghost arrow "C 25" with a "?" hovering between events 2 and 3; chips "C needs A and B. D needs only A.", "how do we draw C?", "Next" and "?". c01b opens on it.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Café (c02 works it): A 10 (–), B 15 (–), C 25 (A, B), D 20 (A), E 10 (C, D). One dummy from A's end to B's end; finish 50 min; critical B, C, E.
  (b) Market stall: A 1→2, B 1→4, C 2→3, D 3→4, E 4→5. (For checking only: finish 110 min, B float 65 min; not said.)
  (c) House build: A 1→2, B 2→3, C 3→4, D 2→4; finish 10 days (not said; c02's attempt context differs).
  (d) Garden makeover: A 1→2 (4), B 1→3 (6), C 2→3 (3), D 2→4 (5), E 3→4 (2); table A –, B –, C A, D A, E B, C.
  (e) The arrows are straight, left to right; B in scene 5 is drawn as a long low arc from 1 to 4 so it does not cross C or D.
  (f) Pronunciations: "event one", "A, B and D" read as letters.

Main question: *The café has five morning jobs, and some must wait for others. How do we turn a precedence table into a project network?*
Entry knowledge (Year 11 n02, n03): directed, weighted networks.
Stops after: the table, the network convention, building row by row, checking and reading back. No dummies, no times.
Handoff: the café's half-drawn network, "C needs A and B. D needs only A. How do we draw C?" (c01b).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): letters ink; durations blue; events ink; predecessor check soft blue glow; answer green; mistake red. Header strip "MATHEMATICS STANDARD · CRITICAL PATH ANALYSIS" (from scene 1's first change). Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: the café's morning jobs
> It's six in the morning at the bakery-café, and the doors open as soon as these five jobs are done. Some jobs can run at the same time, and some have to wait for others. Before we can work out how soon the café can open, we need a clear picture of what waits for what. Builders, event organisers and kitchens plan their work this way, and it starts with a table. So how do we turn a list of jobs into a **network**?

Visual: opens on z06's final frame exactly. On the first sentence "Next" fades and the header strip gains "· CRITICAL PATH ANALYSIS"; the five chalk lines pulse in turn. On "at the same time" two soft brackets join "switch on the oven" and "mix the muffin batter" (hand tag "at the same time"). On "wait for others" a small chalk arrow links "bake the muffins" back to "mix the muffin batter". On "network" heading "From jobs to a network" writes, and the chip "what order, and how soon can we open?" moves to the top right.

### 2. activities and durations
> Each job is called an activity, a task that takes time, and its time is its duration. Let's give each activity a letter, which keeps the table and the picture short. Switching on the oven is A, ten minutes. Mixing the muffin batter is B, fifteen. Baking the muffins is C, twenty-five. Heating the pies is D, twenty, and setting out the display is E, ten **minutes**.

Visual: stage change: simulation 1. The plate shrinks to the top left (about 520 px); the chalkboard enlarges to about 1,100 × 620 px at the centre. On "activity" hand tag "a job that takes time"; on "duration" hand tag "how long". Each letter writes in front of its line on its spoken word (52 px, ink), and each time slides right into a Duration column (blue, 48 px). On "minutes" the columns get headings "Activity" and "Duration (min)" (36 px).

### 3. what must finish first
> Now, what has to finish right before each activity can start? That's called an immediate predecessor. The oven and the batter don't wait for anything, so we write a dash, which means it can start straight away. The muffins need a hot oven and the batter, so C's immediate predecessors are A and **B**. The pies only need the hot oven, so D's is just **A**. The display needs the muffins and the pies, so E's are C and **D**. This list is called a precedence table. Notice we don't write A for the display. The display does need the oven, but only through the muffins and the pies, and the network will carry that for us. So list only the jobs that finish right **before**.

Visual: camera continue to the chalkboard. A third column heading writes, "Immediate predecessors" (36 px; hand tag "must finish just before"). On "dash" "–" writes in rows A and B (hand tag "– = nothing to wait for"). On "B" (bold) row C fills "A, B" with a small tag "hot oven and batter". On "A" (bold) row D fills "A" with "hot oven only". On "D" (bold) row E fills "C, D" with "muffins and pies". On "precedence table" the board's title changes from "Morning jobs" to "Precedence table: the café" (40 px). On "don't write A" a red slip "E: A, C, D" writes beside row E; on "before" it is crossed (caption "immediate only: A is carried by C and D"; hand tag "immediate only").

### 4. arrows and circles
> A precedence table turns into a picture called a network. Each activity is an arrow, labelled with its letter and its duration. Each circle is an event, the moment when every arrow arriving there has finished. So every arrow that leaves an event has to wait for every arrow that arrives there. Every network has one start event on the left and one finish event on the right, and the arrows point forwards in time. In Year 11 you drew arrows with directions and weights, and this is the same idea. The length of an arrow doesn't matter, only where it starts and where it **ends**.

Visual: stage change. The café table shrinks to the left third (still readable, 32 px). At the right, one arrow draws between two circles numbered "1" and "2", labelled "A 10" (letter ink, 10 blue, 40 px; hand tag "arrow = activity"). On "event" the circles pulse (hand tag "circle = event"). On "every arrow arriving there" a second arrow (grey, unlabelled) arrives at circle 2 a beat after A, from a small grey circle below. On "has to wait" a grey arrow leaving circle 2 draws only as far as its tail, which stays dim until both heads have landed, then lights and the arrow draws on (hand tag "leaves only when all have arrived"); the two grey arrows and the grey circle fade on "one start event". On "one start event" circle 1 gains a small tag "start"; on "one finish event" a faint circle at the far right gains "finish". On "Year 11" grey chip "Year 11: arrows with directions and weights". On "doesn't matter" the A arrow stretches to twice its length and back, its label unchanged (hand tag "length means nothing"); on "ends" the arrowhead and its circle glow.

### 5. worked example: a market stall
> Here's the method on a different project, setting up a market stall. A, load the van, thirty minutes, with no predecessors. B, print the price tags, twenty minutes, no predecessors. C, drive to the market, forty minutes, after A. D, set up the tables, fifteen, after C. And E, put out the stock, twenty-five, after B and D. Go row by row. Activities with no predecessors leave the start, so A and B both begin at event one. C leaves the event where A **finishes**. D leaves where C finishes. E needs B and D, so B's arrow and D's arrow must end at the same event, and E leaves from **there**. B can't end any earlier, at event two or three, or C or D would have to wait for the price tags too. B's arrow looks long on the page, but it still means twenty minutes. Nothing waits for E, so it ends at the **finish**.

Visual: clear change to the g01 board. Task strip, 44 px: "Draw a network diagram for setting up a market stall." Givens card (the precedence table, 40 px rows): "A | load the van | 30 | –", "B | print the price tags | 20 | –", "C | drive to the market | 40 | A", "D | set up the tables | 15 | C", "E | put out the stock | 25 | B, D" (durations blue; column heads "Activity", "Duration (min)", "Immediate predecessors"). The network area at the right (about 1,050 × 560 px). On "Go row by row" row A lights. On "leave the start" event 1 appears (hand tag "no predecessors: leave the start"); arrow "A 30" draws from 1 to a new event 2; row B lights and arrow "B 20" begins at 1, its head waiting. On "finishes" (bold) row C lights; event 2 glows soft blue; arrow "C 40" draws from 2 to a new event 3 (hand tag "leave where all predecessors finish"). On "D leaves" arrow "D 15" draws from 3 to a new event 4. On "same event" B's arrow sweeps as a long low arc from 1 to event 4 (its label stays "B 20"), and D's head and B's head both glow at event 4. On "there" (bold) row E lights, event 4 glows soft blue, and arrow "E 25" draws from 4 to a new event 5. On "B can't end any earlier" a red ghost of B's head touches event 2 (small red "C waits for the tags?"), then event 3 ("D waits for the tags?"), then returns to event 4. On "finish" (bold) event 5 gains "finish" (hand tag "nothing waits: the finish"), and the framed answer writes (green, 36 px): "A 1→2, B 1→4, C 2→3, D 3→4, E 4→5".

### 6. check it against the table
> Now check the drawing against the table. For each arrow, look at the event where it starts and ask what arrives there. E starts where B and D arrive, which matches its row. C starts where only A arrives, which matches too, and A and B start where nothing arrives. Every row checks out, with one start and one finish. A common slip is to let B's arrow end on its own, at an extra event. Then E wouldn't wait for the price tags, and the stall could open with no prices on the **stock**.

Visual: camera continue. The table's predecessor column dims; on "look at the event where it starts" hand tag "what arrives here?". On "E starts" event 4 glows soft blue, the B and D arrows glow, and row E's "B, D" gains a green tick. On "C starts" event 2 and arrow A glow, and row C's "A" ticks. On "nothing arrives" event 1 glows and rows A and B's dashes tick. On "one start and one finish" circles 1 and 5 pulse (hand tag "one finish"). On "common slip" a red ghost: B's arrow redrawn to its own extra circle "6", with E leaving 4 without it; red slip "B ends at its own event"; on "stock" the slip is crossed and the ghost fades (caption "E must wait for B: B ends where E starts").

### 7. memory aid
> Here's the summary. Arrows are jobs, and circles are moments. A job leaves the circle where everything it needs has **finished**. Draw row by row, then check each start event against the table.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the market stall network, small. Main line, hand font 56 px: "Arrows are jobs. Circles are moments." On "finished" the key line, 40 px: "A job leaves the circle where all its immediate predecessors finish." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. A house build has four activities. A, the foundations, takes three days, with no predecessors. B, the framing, takes five days, after A. C, the roofing, takes two days, after B. And D, the electrical work, takes four days, after A. Draw a network diagram for the project. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A house build has these activities. Draw a network diagram for the project." Table (40 px): "A | foundations | 3 | –", "B | framing | 5 | A", "C | roofing | 2 | B", "D | electrical | 4 | A" (heads "Activity", "Duration (days)", "Immediate predecessors"). No picture slot (the table carries the task). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> A goes from the start, event one, to event two. Framing and electrical both need only A, so B and D both leave event **two**. Roofing follows B, from event three. Nothing waits for roofing or electrical, so C and D both end at the one finish event. Drawing D to a finish of its own is the slip. A network has just one **finish**.

Visual: the card shrinks to the top (30 px). The network builds at the centre (about 1,000 × 420 px): "A 3" 1→2; on "two" (bold) "B 5" and "D 4" both leave 2 (event 2 glows soft blue); "C 2" 3→4 after "B 5" 2→3; on "one finish event" D's head joins event 4, tagged "finish"; framed (green) "A 1→2, B 2→3, C 3→4, D 2→4". On "slip" a red ghost of D to its own circle "5" with red slip "D ends at its own finish"; on "finish" (bold) it is crossed (caption "one finish event"). Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. Here's the network for a garden makeover, with durations in days. A goes from event one to event two, B from one to three, C from two to three, D from two to four, and E from three to four. Write the precedence table. Pause here to answer.

Visual: `QuestionCard`, 40 px: "The network diagram shows a garden makeover (durations in days). Write the precedence table." The network drawn on the card (about 900 × 380 px): events 1 to 4; "A 4" 1→2, "B 6" 1→3, "C 3" 2→3, "D 5" 2→4, "E 2" 3→4. An empty table outline with heads "Activity", "Duration (days)", "Immediate predecessors" and rows A to E. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> A and B leave the start, so they have no predecessors, just dashes. C and D both leave event two, where A arrives, so each one's predecessor is A. E leaves event three, where B and C arrive, so E's predecessors are B and **C**. Writing A for E as well is the slip. A finishes before C, so it isn't an immediate **predecessor**.

Visual: the card shrinks to the top. The network at the left, the table at the right. "A | 4 | –", "B | 6 | –" write as event 1 glows; "C | 3 | A", "D | 5 | A" as event 2 and arrow A glow soft blue; on "C" (bold) "E | 2 | B, C" as event 3 and arrows B and C glow; framed table (green). On "slip" a red slip "E: A, B, C"; on "predecessor" it is crossed (caption "A finishes before C: not immediate"). Hold about 1 s.

### 12. handoff: the café's tricky job
> Back to the café. A and B leave the start, and the pies, D, can leave as soon as the oven, A, is done. But the muffins, C, need both the oven and the batter, while the pies need only the oven. If C starts where A finishes, it won't wait for the batter. If A and B finish at the same event, the pies wait for batter they don't need. So how do we draw **that**?

Visual: board clear to the final frame (section 2 of the decisions file). The café counter plate small at the top left (about 420 px); the café's precedence table (chalkboard skin, 36 px) at the left. At the right: on "A and B leave the start" event 1 with "A 10" to event 2 (top) and "B 15" to event 3 (bottom); on "the pies" "D 20" leaves event 2 to a dashed empty circle. On "both the oven and the batter" a grey ghost arrow "C 25" appears between events 2 and 3 with a "?". On "If C starts where A finishes" the ghost snaps to event 2 and a small red "waits for the batter?" flickers, then the ghost lifts back; on "If A and B finish at the same event" B's head slides towards event 2 and a small red "pies wait for batter?" flickers, then B slides back. On "that" chips "C needs A and B. D needs only A." (40 px) and "how do we draw C?" and chips "Next" and "?". Hold about 2 s. This is c01b's opening; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Activity: a job that takes time (its duration).
- Immediate predecessor: must finish just before. "–" means none.
- Network: arrows are activities (letter, duration); circles are events.
- One start event and one finish event.
- A job leaves the event where all its immediate predecessors finish.

Memory aid (framed card, right side, as in scene 7): *Arrows are jobs. Circles are moments.* Key: *A job leaves the circle where all its immediate predecessors finish.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame: c01b opens on it.

## Teaching checks

- **Does it explain causes?** Why a dash: nothing has to finish first (3). Why only immediate predecessors: the chain already carries the earlier jobs (3). Why one event can't serve two different waits: every arrow leaving an event waits for every arrow arriving there (4, 5, 12). Why B's long arrow is fine: length means nothing (4, 5). Why one finish: the project ends at one moment (6, A1).
- **Misconceptions addressed:** indirect predecessors listed (3, A2); arrow length read as time (4, 5); an activity that ends on its own (6, A1); a merge drawn without all its predecessors (5).
- **Visual standard, item by item:** 1 the café counter and chalkboard; 2 a new stage every 30 to 60 s; 3 the chalkboard becoming a table, the network growing row by row with its predecessor check, the read-back; 4 fixed roles (with words); 5 large type; 6 hand tags; 7 g01 board in 5; 8 framed card and five bullets; 9 B's long arrow keeping "B 20".
- **One idea at a time:** activities (2), predecessors (3), the picture (4), building (5), checking (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand and given visible; 10 s each; feedback about 26 s and 26 s.
- **Avoided double teaching:** Year 11 directed networks are a grey chip; times and scans wait for c02.
- **Syllabus coverage:** `ci9043c6d8`: "Construct a network diagram from a precedence table" (5, A1) "or equivalent" (the chalkboard list, 2 and 3; the read-back, 6 and A2); "including those involving dummy activities" in c01b; "limited to 10 activities" (every network here has 4 or 5).
- **Out of scope by design:** dummies (c01b); times, scans, critical paths (c02, c03).

## Practice questions and model answers

**Attempt 1 (scene 8; site lesson01 hook as MS-50's Problem 3, original wording, HSC style, 2 marks suggested, not an official marking scheme).** "A house build has these activities. Draw a network diagram for the project." Table: A foundations 3 days (–); B framing 5 (A); C roofing 2 (B); D electrical 4 (A).
Model answer: A from event 1 to event 2; B from 2 to 3; D from 2 to 4; C from 3 to 4; event 4 is the finish. Classic mistake (crossed): "D ends at its own finish".

**Attempt 2 (scene 10; original, HSC style, 2 marks suggested).** "The network diagram shows a garden makeover (durations in days). Write the precedence table." Network: A 1→2 (4), B 1→3 (6), C 2→3 (3), D 2→4 (5), E 3→4 (2).
Model answer: A 4 –; B 6 –; C 3 A; D 5 A; E 2 B, C. Classic mistake (crossed): "E: A, B, C".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Café | A 10 (–); B 15 (–); C 25 (A, B); D 20 (A); E 10 (C, D) | 1 to 3, 12 |
| Market stall | A 30 (–); B 20 (–); C 40 (A); D 15 (C); E 25 (B, D); A 1→2, B 1→4, C 2→3, D 3→4, E 4→5 | 5, 6, 7 |
| House build (A1) | A 3 (–); B 5 (A); C 2 (B); D 4 (A); A 1→2, B 2→3, C 3→4, D 2→4 | 8, 9 |
| Garden makeover (A2) | A 1→2 4; B 1→3 6; C 2→3 3; D 2→4 5; E 3→4 2; table A –, B –, C A, D A, E B, C | 10, 11 |
| Final frame | A 10 1→2; B 15 1→3; D 20 from 2; C 25 ghost | 12 |

## Numbers to verify (all values, repeated for Codex)

Every network was checked in Python 3.14 (19 Nov 2026, scratchpad `cf/verify.py`, `python -I`: predecessor sets, events, every path and both scans); Codex to re-check.

- Café predecessor sets {}, {}, {A, B}, {A}, {C, D}: C and D share A but not B, so the café needs one dummy (c01b).
- Market stall: arrows arriving at each start event match each row (E: B, D; D: C; C: A); no two activities share both start and end events; no dummy needed.
- House build: B and D both leave event 2; C (3→4) and D (2→4) share the finish only; no dummy needed.
- Garden makeover: start event of C and D is 2 (A arrives); start event of E is 3 (B and C arrive); no dummy needed.

## Memory aid check

- **"Arrows are jobs. Circles are moments."** with key line **"A job leaves the circle where all its immediate predecessors finish."** Original, from the site's card 06 convention (activities on arrows, events on nodes) and card 05 ("ALL must finish before this activity starts"). Meaning, as said in scenes 4, 5 and 7. Assumptions checked: the convention is activities on arrows (the site's and the common NSW convention; ruling 71 has Codex confirm it against recent HSC papers); "moments" are events, which take no time; the key line holds only when the arrows arriving at that circle are exactly the predecessors, which is why c01b needs dummies. It helps a new case: F after D and E means F's arrow leaves the event where D's and E's arrows both end.
- **Considered, not used:** "Nodes are activities" (the other convention; would contradict the site).

## Narration length estimate

Revision 2, counted by script (`work/brief-resolve-standard-cf/count.py`, the sum of the scene strings, which reproduces e08's 5,632): **5,097 characters** (Revision 1: 5,014), 13 scene headings. Characters per scene (1 to 13): 411, 362, 656, 575, 801, 480, 189, 304, 321, 249, 319, 355, 75. Speech about 383 s; holds and settling unchanged from Revision 1 (below); total **about 493 s**, 77 s under the 570 s cap. Feedback speech: about 24 s and 24 s. The Revision 1 paragraph below is kept for the record.

Counted by script (scratchpad `cf/count.py`, the method of `work/brief-resolve-standard-t1/count.py`, which reproduces e08's 5,632): **5,014 characters**, 13 scene headings. Characters per scene (1 to 13): 411, 362, 656, 593, 700, 480, 189, 304, 321, 249, 319, 355, 75.

At 13.3 characters per second the speech is about 377 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, final frame 2 s) 6 s; settling for the chalkboard letters and columns (2, 3), the single arrow (4), the network building (5), the check and the slip ghost (6) and the café network (12) about 45 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 487 s**, under the 570 s cap. Feedback speech: about 24 s and 24 s.

Reserve trims if the voiced take runs long: scene 4's Year 11 sentence (about 6 s; the grey chip stays); scene 6's "and A and B start where nothing arrives" (about 3 s).

## Scene list and build ids

Lesson key `m-s12c01a` (route math-s12-c01, first half). Explainer folder `src/explainer/lessons/math-s12-c01a`; build inputs in `docs/production/claude-pm/lessons/math-s12-c01a/` (at voicing).

In order (13 scene headings): hook-cafe-jobs, activities-durations, immediate-predecessors, arrows-and-circles, worked-market-stall, check-against-table, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff-cafe-snag, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 25 s | 1 | z06's frame; the café's jobs |
| 25 to 55 s | 2 | Letters and durations on the chalkboard |
| 55 to 120 s | 3 | The precedence table |
| 120 to 160 s | 4 | One arrow, two circles |
| 160 to 225 s | 5 | g01 board: the market stall network |
| 225 to 265 s | 6 | The check and the slip |
| 265 to 280 s | 7 | Framed memory card |
| 280 to 390 s | 8 to 11 | Question cards and countdowns, then feedback |
| 390 to 420 s | 12 | The café's half-drawn network |
| 420 to 465 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: z06's last frame continues into 1; 1 to 2 stage change (the chalkboard enlarges); 2 to 3 camera continue; 3 to 4 stage change; 4 to 5 clear change to the board; 5 to 6 camera continue; 6 to 7 stage change; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-c01a-learning-review.md`, `science_check` = `checks/m-s12-c01a-maths-check.md`.

## Assets

Inspected before choosing (19 Nov 2026): the bakery-café counter is briefed in z06 (read as a brief: blank chalkboard inner area about (90, 80) to (730, 520) in plate pixels). No existing maths plate shows a market stall, a house frame or a garden; the worked example and attempts are table-and-network tasks, so no plate is needed for them.

Need (painted): none new (`ms12-bakery-cafe-counter-v1.png` is z06's brief, ruling 17).

Coded: the chalkboard text and table, every network, the predecessor glow, the read-back, the board, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `DrawnMark`, the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs file, critical path items 1 to 3; first use):
1. **ProjectModel** (logic): activities with durations and immediate predecessors; builds events and dummies; must place the market stall, house build and garden makeover with no dummy, and the café with one (c01b).
2. **PrecedenceTable** with a chalkboard skin: rows light on cue; cells fill on cue; a predecessor cell can tick green.
3. **ActivityNetwork**: numbered event circles, arrows labelled "letter duration", build on cue row by row, a soft blue glow on an event and its arriving arrows, a long arc option (B in scene 5), a ghost (grey) arrow and a red ghost for slips. Check: the market stall draws with no crossing arrows at 1,050 × 560 px.

## Codex asset brief (Maths S12 C01a)

No new plate. The bakery-café counter is z06's brief (painted before the z06 build, ruling 17). Report nothing unless the build finds the chalkboard area unreadable with five 36 px rows and three columns.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every network under "Numbers to verify" and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quote matches the route-inputs JSON exactly, under the Standard 2 heading only.
3. Confirm the activities-on-arrows convention against recent HSC Standard 2 papers (ruling 71), and that no network in this video needs a dummy.
4. Confirm the house build keeps the site's numbers (3, 5, 2, 4) and MS-50's predecessors (electrical after foundations); the MS-49 hero diagram is not used.
5. Confirm both attempts carry every demand and given, and neither card shows an answer (A2's table is empty).
6. Confirm scene 1 opens on z06's final frame exactly and scene 12 matches section 2 of the decisions file (and, once written, c01b's opening).
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Precedence Tables and Network Diagrams | Year 12 Maths Standard 2

(Title length: 65 characters by script.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/critical-path-analysis/lesson01.sa.html

A café has five jobs to finish before it opens at dawn, and some jobs have to wait for others. Learn what an activity, a duration and an immediate predecessor are, build a precedence table, and turn it into a network diagram with activities as arrows and events as circles. Draw the network row by row, check it against the table, and read a table back from a network. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Critical path analysis. Standard 2.
Syllabus content, Standard 2 (NSW Mathematics Standard 11-12, 2024):
"Construct a network diagram from a precedence table or equivalent, including those involving dummy activities, limited to 10 activities" (dummy activities in the next video)
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa9c92c4c6

Builds on: Unusual Results with z-Scores. Next: Dummy Activities in Network Diagrams.

#Year12Maths #MathsStandard #CriticalPathAnalysis #HSCScience

## Open decisions

- **1. The café left unfinished (root).** Closed in Revision 2: ruling 81. Revision 1 text: c01a builds the café's table in full but draws its network only up to the snag; the method is taught on the market stall, which needs no dummy. The alternative (teach the café with a dummy here) would merge c01a and c01b again (ruling 70).
- **2. The market stall (root).** Closed in Revision 2: ruling 81. Revision 1 text: An original worked example in place of the site's office fit-out, which needs a dummy under ruling 71 (B and C between the same two events) and so moves to c01b.

## Review notes

- Revision 2 resolves the student learning review (`../checks/m-s12-c01a-learning-review.md`). Next: Codex maths check and error check, then voicing and a build to grade A.
- Revision 1. Next: student learning review (trace from z06 for a student who has only Year 11 networks; check that "immediate" lands before the table is complete, that the event idea is clear enough to explain why E needs B and D to end together, that the check is followable, that the final frame poses a real problem without frightening, and that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
