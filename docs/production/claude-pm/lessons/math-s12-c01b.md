# Maths S12 C01b: How do dummy activities fix a network? A job that needs some but not all of another's predecessors, a dashed arrow of zero time that carries a dependency, which way it points, two activities that would share both events, and reading a table back through a dummy (design)

Status: Revision 2 (19 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (19 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Standard designs (`math-s12-r12a.md`, `t05.md`, `i09.md` at Revision 2, and their resolution logs), c01a's final frame (`math-s12-c01a.md` scene 12) and root's Standard rulings (1 to 76; ruling 70, the split; ruling 71, two activities with the same start and end events are drawn with a dummy; ruling 72, the café). Designer's decisions for c01a to f04, including every join: `../checks/root-decisions-maths-s12-c01-f04.md`. Next: student learning review, then the Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,077 characters by script (see "Narration length estimate"; Revision 2), 13 scene headings, about 492 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (19 Nov 2026): learning review resolved

Review: `../checks/m-s12-c01b-learning-review.md` (summary `../checks/m-s12-c01-f04-learning-review-summary.md`), with root's rulings 1 to 81 in `../checks/root-rulings-maths-standard-outline.md` and root's resolution brief of 19 Nov. Resolution log: `../checks/m-s12-c01-f04-learning-review-resolution.md`. Findings by the review's numbers:

1. Should fix, scene 3 ("it never changes how long the project takes"): **accepted**, reviewer's wording. "It adds no time of its own, so when we work out times, it counts as zero." The "0" pulses again on "counts as zero" (hand tag "no time of its own"). This keeps c02's surprise true, where the dummy's "10 + 0" and "15 − 0" set event times.
2. Should fix, scene 5 (why two arrows can't share both events): **accepted**, reviewer's wording. "But then if you were asked about the job from event two to event four, there'd be two answers, the electrical work or the plumbing. Each pair of events has to mean just one job." It replaces "the pair of events, two and four, would name two different jobs, and a network lists each job by its events." Visual: events 2 and 4 ring with a small red "which job?", both ghost arrows flash on "two answers", and the slip is crossed on "just one job" (caption unchanged). Root's decision 3: the dummy stays, and no sentence about parallel arrows is added unless Codex's HSC check (ruling 71) requires it.

Open decisions: 1 is decided by root's decision 3 (the Codex check is still pending); 2 (two dummies) is unruled. Joins unchanged: scene 1 opens on c01a's final frame, and scene 12 (c02's opening) is unchanged.

Narration 5,077 characters by script (Revision 1: 5,009), about 492 s with holds, 78 s under the 570 s cap; feedback speech about 27 s and 21 s. Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. Nothing recorded; human listening pending.

Scope: second video of the Critical path analysis strand, playlist order 83 (second half, ruling 70). **Standard 2 only.** Pre-design pack: `../pre-design/maths-standard/math-s12-c01.md` (the "c01b" half). Site lessons (read through the pack's quotations, read only): `maths-standard/year12/critical-path-analysis/lesson05.sa.html` (SHA256 `5e734b49509d875811ac31b4927d901c9e4e29f36aa754a6a13470d2ff7b51ac`; card 2, "When to use a dummy: Activity C depends on A and B, but activity D depends only on A."; Worked Example 2, "Node 2 → dummy(0) → Node 3"; SAQ 2, "The dummy must point from X into Y: pointing it the other way would put D upstream of F") and `lesson01.sa.html` (SHA256 `baf5c3da12545359d8b0834b53f67c4be1a1f0daa9be7676afa44304033ea498`; card 05, the office fit-out "A, Strip out | 2 | (none); B, Electrical | 4 | A; C, Plumbing | 3 | A; D, Fit-out | 5 | B, C"). Route entry: `math-s12-c01` in `../../programme/maths-standard-route-inputs-7.json`. Visual system: maths studio kit; the café's half-drawn network (c01a's final frame) as the anchor; networks coded, HSC style.

Owner rules applied: plates for real objects, code for diagrams; no people, hands or faces; one main question; one stage at a time; words before symbols; plain meaning of a dummy activity before the term is used for anything else; g01 worked example (task strip, table, network apart); two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (the café, an office fit-out, a school open day); Australian spelling; no em dashes; conversational narration; text above y = 950.

Syllabus content points (Mathematics Standard 11-12 (2024), Year 12), quoted from `../../programme/maths-standard-route-inputs-7.json`:

Standard 2 (Critical path analysis):
- `ci9043c6d8`: "Construct a network diagram from a precedence table or equivalent, including those involving dummy activities, limited to 10 activities"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa9c92c4c6

**Boundary:** starts from c01a's final frame exactly (section 2 of `../checks/root-decisions-maths-s12-c01-f04.md`): the café counter plate small at the top left; the café's precedence table (chalkboard skin) at the left; events 1, 2, 3 with "A 10" (1→2) and "B 15" (1→3), "D 20" leaving 2 to a dashed empty circle, the grey ghost "C 25" with "?"; chips "C needs A and B. D needs only A.", "how do we draw C?", "Next", "?". Recalls c01a (arrows are jobs, circles are moments; a job leaves the event where all its immediate predecessors finish) in a phrase or grey chip. Teaches: why no ordinary drawing works for the café; the dummy activity (a dashed arrow of duration 0 that carries a dependency, not work); its direction (from the event where the needed job finishes into the event that must wait); the second case (two activities that would start and end at the same two events, ruling 71); when not to use one; reading a table back through a dummy. Stops at constructing networks with dummies. Not taught: times and scans (c02), two dummies at one event (the site's lesson05 Worked Example 3, MS-51; author note only).

## Decisions

- **Anchor: the café's tricky job (c01a's handoff).** A 10 (–), B 15 (–), C 25 (A, B), D 20 (A), E 10 (C, D). Final network: A 1→2, B 1→3, dummy 2→3, C 3→4, D 2→4, E 4→5. This matches the site's lesson05 Worked Example 2 pattern ("C depends on A and B, but D depends only on A"), with the café's times.
- **Two failed tries before the fix (pack visual need).** C from event 2 (C would not wait for the batter); A and B ending together (the pies would wait for batter they don't need). Each shown as a red ghost and crossed, so the dummy arrives as the answer to a felt problem.
- **Direction (site SAQ 2).** From A's end (2) into B's end (3). A dummy from 3 to 2 would make D wait for B: shown crossed in scene 4.
- **The second case (ruling 71): the site's office fit-out (lesson01 card 05), drawn with a dummy.** B (electrical) and C (plumbing) both follow A and both lead to D. Two arrows between the same two events would make the pair of events name two jobs, so C ends at its own event and a dummy joins it to D's start: A 1→2, B 2→4, C 2→3, dummy 3→4, D 4→5. The site draws the parallel arrows (pack section 3); ruling 71 sets the dummy, and Codex confirms the convention against recent HSC Standard 2 papers.
- **No extra dummies.** Scene 6: a dummy must carry a dependency the table has; two jobs with exactly the same predecessors and different ends need none.
- **Two dummies (MS-51).** The site's lesson05 Worked Example 3 (two dummies, described as one, never drawn) is not used; author note (e) records the correct drawing for c03 or c06 if wanted.
- **Simulations (standard item 3).**
  1. **Failed tries** (scene 2; ActivityNetwork ghosts): C's ghost snaps to event 2 and a red "batter not ready" flag appears on the muffins; then B's head slides into event 2 and a red "waiting for batter" flag hangs on D.
  2. **The dummy carrying a message** (scene 3): a small teal pulse runs along the dashed arrow from 2 to 3 when A's arrow finishes drawing, and event 3 lights only when both the pulse and B have arrived ("oven done" and "batter done" tags merge into "both done").
  3. **Read-back through the dummy** (scene 4, A2): pointing at an arrow lights everything arriving at its start event, including through the dashed arrow (the dummy glows soft blue too).
- **Colour roles (c01a's, fixed for the strand).** Letters ink; durations blue; events ink; dummies grey, dashed, labelled "0" or "dummy"; predecessor check soft blue glow; the message pulse teal (it previews c02's earliest times); answer green; mistake red, crossed slips only.
- **Large type, handwritten voice.** Arrow labels 40 px; table rows 40 px; current rows 48 to 52 px. Hand tags: "C would skip the batter", "pies would wait for nothing", "dummy = a dependency, not a job", "0 minutes", "no time of its own", "event 3: both done", "points into the waiting event", "same start, same end?", "own event + dummy", "only when the table needs it", "through the dummy". At most two live at once.
- **Stage changes (standard item 2).** c01a's frame (1); the failed tries (2); the dummy and the finished café network (3); direction and read-back (4); g01 board, the office fit-out (5); the two cases side by side (6); framed card (7); question cards (8 to 11); the café network with empty event boxes (12); key notes (13).
- **Worked example (g01 layout).** Scene 5: task strip "Draw a network diagram for the office fit-out."; table as the givens card (A strip out 2 –; B electrical 4 A; C plumbing 3 A; D fit-out 5 B, C; durations in days); the network built at the right; a red ghost of B and C as two arrows between the same events, crossed (caption "same start and same end: give C its own event"); framed answer "A 1→2, B 2→4, C 2→3, dummy 3→4, D 4→5".
- **Memory aid.** Framed card: "A dummy is a dependency, not a job." Key line: "Dashed, zero time, pointing into the event that must wait."
- **Visual surprise.** The teal pulse runs along the dummy (it carries a message, not muffins), and event 3 lights only when both have arrived (3).
- **Plain meanings at first use.** Dummy activity ("a dashed arrow that takes zero time; it isn't a job, it only says one event must wait for another"); dependency ("one thing has to wait for another").
- **Attempts (original, HSC style).** A1 (pack question 1): the school open day, P 3 (–), Q 2 (–), R 4 (P), S 5 (P, Q), U 3 (R, S); network P 1→2, Q 1→3, dummy 2→3, R 2→4, S 3→4, U 4→5; crossed "R and S both leave one event after P and Q" (caption "then R would wait for Q"). A2 (pack question 2): a drawn network with a dummy (A 5 1→2, B 3 1→3, dummy 2→3, C 4 2→4, D 2 3→4, E 6 4→5); table A –, B –, C A, D A, B, E C, D; crossed "D: B" (caption "the dummy brings A's finish into event 3 too").
- **Mistake scene:** none separate. The two failed tries (2, crossed); a dummy pointing the wrong way (4, crossed); two arrows between the same events (5, crossed); an unneeded dummy (6, said); the dummy ignored in a read-back (A2, crossed).
- **Cause chain taught, in order:** (1) every arrow leaving an event waits for every arrow arriving there (c01a; recalled in 1); (2) C and D need different sets of earlier jobs, so they need different start events (2); (3) a dummy lets one event wait for another without adding work or time (3); (4) so its direction is from the event that must happen first into the event that must wait (4); (5) two activities with the same pair of events can't be told apart, so one gets its own event and a dummy (5); (6) a dummy is right only when it carries a dependency the table has (6).
- **Entry knowledge (route):** math-s12-c01a (the table, the convention, row by row, checking). Recalled in a phrase or grey chip.
- **Handoff (to math-s12-c02, forward and backward scans).** Scene 12's frame (decisions file section 2): the café counter plate small at the top left with the clock chip "6:00 am"; the café's complete network at the centre (about 1,300 × 520 px): events 1 to 5, "A 10" 1→2, "B 15" 1→3, the dummy 2→3 (grey, dashed, "0"), "C 25" 3→4, "D 20" 2→4, "E 10" 4→5; each event with an empty split box (two empty halves); chips "how long until we open?", "Next" and "?". No time is filled in.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Café: one dummy 2→3; event times for c02: earliest 0, 10, 15, 40, 50; latest 0, 15, 15, 40, 50.
  (b) Office fit-out: A 1→2, B 2→4, C 2→3, dummy 3→4, D 4→5; finish 11 days (A-B-D); C float 1 (not said).
  (c) Open day: P 1→2, Q 1→3, dummy 2→3, R 2→4, S 3→4, U 4→5; finish 11 days (not said).
  (d) A2: A 1→2, B 1→3, dummy 2→3, C 2→4, D 3→4, E 4→5; finish 15 days (not said).
  (e) Site lesson05 Worked Example 3 (MS-51): A 2 (–), B 4 (–), C 3 (A), D 5 (A, B), E 4 (B), F 2 (C, D), G 3 (E, F): A ends at its own event, B ends at its own event, D starts at a third event joined to both by dummies (two dummies). Not used here.
  (f) Numbering: events are numbered so every arrow, dummies included, runs from a lower number to a higher one.

Main question: *The muffins need the oven and the batter, but the pies need only the oven. How do dummy activities fix a network?*
Entry knowledge (c01a): precedence tables, arrows and events, row by row, checking.
Stops after: the dummy, its direction, the two cases, reading back through a dummy.
Handoff: the café's complete network with empty event boxes, "how long until we open?" (c02).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): letters ink; durations blue; events ink; dummies grey dashed; check glow soft blue; message pulse teal; answer green; mistake red. Header strip "CRITICAL PATH ANALYSIS" (topic only; root ruling 23 Nov 2026: no course name on screen). Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: the job that won't fit
> Here's where we left the café, with its precedence table finished. The muffins, C, need the oven and the batter, A and B. The pies, D, need only the oven. Every arrow that leaves an event waits for everything that arrives there, so neither of our two events works for the muffins. The fix is a special arrow that does no work at all. So how does a dummy activity fix the **network**?

Visual: opens on c01a's final frame exactly. On the first sentence "Next" fades. On "need the oven and the batter" rows C and the ghost "C 25" glow. On "need only the oven" row D and arrow "D 20" glow. On "Every arrow that leaves an event" grey chip "recall: a job leaves where all its predecessors finish". On "neither of our two events" events 2 and 3 each flash a small "?". On "network" heading "Dummy activities" writes.

### 2. two drawings that fail
> Let's try the obvious drawings first, because seeing why they fail tells us what we need. Start C at event two, where the oven finishes. Now C only waits for the oven, so the muffins could go in before the batter is mixed. That's **wrong**. Instead, end A and B at the same event, and start C and D from there. Now the muffins wait for both, which is right, but the pies wait for the batter too, and they don't need it. That's wrong as **well**. We need one event that means the oven is ready, and another that means the oven and the batter are both done.

Visual: stage change: simulation 1. The table shrinks to the left (32 px); the network enlarges (about 1,250 × 520 px). On "Start C at event two" the ghost "C 25" snaps to event 2 (solid grey); on "before the batter is mixed" a red flag "batter not ready" on C (hand tag "C would skip the batter"); on "wrong" the drawing is crossed red and lifts away. On "end A and B at the same event" B's head slides into event 2 and C and D both leave it; on "pies wait for the batter" a red flag "waiting for batter" on D (hand tag "pies would wait for nothing"); on "well" crossed red, and B slides back to event 3. On "one event that means the oven is ready" event 2 gains a tag "oven ready"; on "both done" a dashed outline appears around event 3 with the tag "oven and batter done?".

### 3. the dummy
> Here's the fix. Keep A ending at event two and B ending at event three. Then draw a dashed arrow from event two to event three. This is a dummy activity. It isn't a job, and it takes zero minutes. It just carries a message, that event three can't happen until A has finished too. It adds no time of its own, so when we work out times, it counts as zero. So event three now means the oven and the batter are both done, and C leaves from **there**. D still leaves from event two, so the pies wait only for the oven. Then C and D both end at event four, E leaves from it, and the café's network is **complete**.

Visual: simulation 2. On "dashed arrow" a grey dashed arrow draws from 2 to 3, labelled "0" (36 px); on "dummy activity" label "dummy" beside it (hand tag "dummy = a dependency, not a job"). On "zero minutes" the "0" pulses (hand tag "0 minutes"). On "carries a message" a small teal pulse runs along the dashed arrow from 2 to 3. On "counts as zero" the "0" pulses again (hand tag "no time of its own"). On "both done" event 3's dashed outline turns solid (tag "event 3: both done"). On "there" (bold) arrow "C 25" draws from 3 to a new event 4. On "D still leaves from event two" arrow "D 20" draws from 2 into event 4. On "E leaves from it" arrow "E 10" draws from 4 to event 5, tagged "finish". On "complete" the table at the left ticks row by row (green ticks) and the network settles.

### 4. which way it points
> Which way the dummy points matters. A dummy always points from the event that has to happen first into the event that must wait. Here it goes from A's end into B's end, because the muffins need the oven, not the other way round. If it pointed back from three to two, the pies would wait for the batter again. To check, read the network back. D leaves event two, where only A arrives, so D needs A. C leaves event three, where B arrives directly and A arrives through the dummy, so C needs A and B. That matches the **table**.

Visual: camera continue. On "from A's end into B's end" the dummy's arrowhead glows (hand tag "points into the waiting event"). On "pointed back" a red ghost dummy from 3 to 2 draws, with a red flag on D "waits for B"; red slip "dummy from 3 to 2"; it is crossed at "again" (caption "then D would wait for B") and fades. On "read the network back" simulation 3: on "D leaves event two" event 2 and arrow A glow soft blue, and "D: A" writes beside the network; on "C leaves event three" event 3, arrow B and the dummy glow (the dummy glow continues back along A, hand tag "through the dummy"), and "C: A, B" writes. On "table" both lines tick green against the table's rows C and D.

### 5. worked example: two jobs between the same events
> There's one more time we need a dummy. Here's a small office fit-out, with durations in days. A, strip out the old fittings, two days. B, the electrical work, four days, after A. C, the plumbing, three days, after A. D, the fit-out, five days, after B and C. B and C both start when A finishes, and D needs both of them, so you might draw B and C as two arrows between the same two events. But then if you were asked about the job from event two to event four, there'd be two answers, the electrical work or the plumbing. Each pair of events has to mean just one job. So C ends at its own event, three, with a dummy from three to four. That keeps every arrow a single, named job. D leaves event four, after both B and **C**.

Visual: clear change to the g01 board. Task strip, 44 px: "Draw a network diagram for the office fit-out." Givens card (the table, 40 px): "A | strip out | 2 | –", "B | electrical | 4 | A", "C | plumbing | 3 | A", "D | fit-out | 5 | B, C" (heads "Activity", "Duration (days)", "Immediate predecessors"). The network area at the right. On "strip out" "A 2" draws 1→2. On "two arrows between the same two events" a red ghost: "B 4" and "C 3" as two curved arrows from 2 to one event 4 (hand tag "same start, same end?"); red slip "B and C both from 2 to 4"; on "the job from event two to event four" events 2 and 4 ring with a small red "which job?"; on "two answers" both ghost arrows flash; on "just one job" the slip is crossed (caption "same start and same end: give C its own event") and the ghost C lifts away. On "C ends at its own event" "C 3" draws from 2 to a new event 3, and the dummy (grey, dashed, "0") from 3 to 4 (hand tag "own event + dummy"); "B 4" stays 2→4. On "C" (bold) "D 5" draws from 4 to event 5, "finish"; framed answer (green, 36 px): "A 1→2, B 2→4, C 2→3, dummy 3→4, D 4→5".

### 6. when you need a dummy
> So you need a dummy in two situations. First, when two activities share some of their predecessors, but not all of them, like the muffins and the pies. Second, when two activities would start and end at the same pair of events, like the electrical work and the plumbing. Don't add a dummy anywhere else, because each one has to carry a dependency that's really in the table. If you're unsure, draw without one first, then check every row. Then read the table back, through every dummy, to **check**.

Visual: stage change. Two panels, each about 860 × 420 px: left, the café network small with its dummy glowing, titled "some, not all" (40 px); right, the office network small with its dummy glowing, titled "same start, same end" (40 px). On "First" the left panel lifts; on "Second" the right. On "Don't add a dummy anywhere else" a small third sketch below: two arrows that both need only A and end at different events, with a grey dashed dummy between them crossed in red (hand tag "only when the table needs it"). On "check" both panels' tables tick green.

### 7. memory aid
> Here's the summary. A dummy is a dependency, not a job. It's dashed, it takes zero time, and it points into the event that has to **wait**. Only add one when the table needs it.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the café network with its dummy and the teal pulse. Main line, hand font 56 px: "A dummy is a dependency, not a job." On "wait" the key line, 40 px: "Dashed, zero time, pointing into the event that must wait." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. A school's open day has five activities, with durations in days. P, book the hall, three days, with no predecessors. Q, order the signs, two days, no predecessors. R, arrange the displays, four days, after P. S, set up the stalls, five days, after P and Q. And U, the final walk-through, three days, after R and S. Draw a network diagram for the project. Pause here to answer.

Visual: `QuestionCard`, 40 px: "A school is setting up for its open day. The precedence table shows the activities. Draw a network diagram for the project." Table (40 px): "P | book the hall | 3 | –", "Q | order the signs | 2 | –", "R | arrange the displays | 4 | P", "S | set up the stalls | 5 | P, Q", "U | final walk-through | 3 | R, S" (heads "Activity", "Duration (days)", "Immediate predecessors"). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> P and Q leave the start, P to event two and Q to event three. R needs only P, so it leaves event two. S needs P and Q, so a dummy goes from event two into event three, and S leaves event **three**. R and S end at event four, and U goes from four to the finish. Starting R and S together after both P and Q is the slip, because then R would wait for the **signs**.

Visual: the card shrinks to the top (30 px). The network builds (about 1,100 × 440 px): "P 3" 1→2, "Q 2" 1→3, "R 4" 2→4; the dummy 2→3 (grey dashed, "0"); on "three" (bold) "S 5" 3→4; "U 3" 4→5 "finish"; framed (green) "P 1→2, Q 1→3, dummy 2→3, R 2→4, S 3→4, U 4→5". On "slip" a red slip "R and S both leave one event after P and Q"; on "signs" it is crossed (caption "then R would wait for Q"). Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. Here's a network with a dummy, with durations in days. A goes from event one to two, B from one to three, and a dummy goes from two to three. C goes from two to four, D from three to four, and E from four to five. Write the precedence table. Pause here to answer.

Visual: `QuestionCard`, 40 px: "The network diagram shows a project (durations in days). Write the precedence table." The network drawn on the card (about 900 × 380 px): "A 5" 1→2, "B 3" 1→3, dummy 2→3 (grey dashed), "C 4" 2→4, "D 2" 3→4, "E 6" 4→5. An empty table outline with heads "Activity", "Duration (days)", "Immediate predecessors" and rows A to E. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> A and B have no predecessors. C leaves event two, where A arrives, so C needs A. D leaves event three, where B arrives directly and A arrives through the dummy, so D needs A and **B**. E needs C and D. Writing just B for D is the slip. The dummy brings A's finish into event three **too**.

Visual: the card shrinks to the top. Network left, table right. "A | 5 | –", "B | 3 | –"; "C | 4 | A" as event 2 glows; on "B" (bold) "D | 2 | A, B" as event 3, arrow B and the dummy glow soft blue (the glow runs back along A); "E | 6 | C, D"; framed table (green). On "slip" a red slip "D: B"; on "too" it is crossed (caption "the dummy brings A's finish into event 3 too"). Hold about 1 s.

### 12. handoff: how long until we open?
> Now the café's network is complete, with one dummy. Each event gets a box for a time, and the doors open the moment the display is set out. We know what waits for what, so now we can ask how long each wait takes. Starting at six o'clock, how long until the café can **open**?

Visual: board clear to the final frame (decisions file section 2). The café counter plate small at the top left with the clock chip "6:00 am"; the café's complete network at the centre (about 1,300 × 520 px), every arrow as in scene 3; on "a box for a time" each event gains an empty split box (two empty halves, 36 px tall); on "set out" the "E 10" arrow and event 5 pulse; on "open" chips "how long until we open?" (40 px), "Next" and "?". No time is filled in. Hold about 2 s. This is c02's opening; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Dummy: a dashed arrow, zero time. A dependency, not a job.
- Use one when two activities share some, but not all, predecessors.
- Use one when two activities would share both start and end events.
- It points into the event that must wait.
- Check: read every row back, through the dummies.

Memory aid (framed card, right side, as in scene 7): *A dummy is a dependency, not a job.* Key: *Dashed, zero time, pointing into the event that must wait.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame: c02 opens on it.

## Teaching checks

- **Does it explain causes?** Why the café can't be drawn plainly: C and D need different sets of jobs, and an event makes every leaving arrow wait for everything arriving (1, 2). Why a dummy works: it makes one event wait for another without adding work or time (3). Why direction matters: it decides who waits (4). Why the fit-out needs one: a pair of events must name one job (5). Why not to add more: a dummy that carries no real dependency adds a false wait or clutter (6).
- **Misconceptions addressed:** forcing C to start at A's end (2); merging A and B (2); a reversed dummy (4); parallel arrows (5); unneeded dummies (6); ignoring a dummy when reading back (A2).
- **Visual standard, item by item:** 1 the café counter and its network; 2 a new stage every 30 to 60 s; 3 the failed tries as live ghosts, the teal pulse along the dummy, the read-back glow through it; 4 fixed roles with words; 5 large type; 6 hand tags; 7 g01 board in 5; 8 framed card and five bullets; 9 event 3 waiting for the pulse.
- **One idea at a time:** the problem (2), the dummy (3), its direction (4), the second case (5), when to use it (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand and given visible; 10 s each; feedback about 28 s and 22 s.
- **Avoided double teaching:** c01a's method is a grey chip and a phrase; nothing is re-taught.
- **Syllabus coverage:** `ci9043c6d8`: "including those involving dummy activities" (3 to 6, A1, A2), "or equivalent" (the drawn network read back, 4 and A2), "limited to 10 activities" (every network here has 4 to 5).
- **Out of scope by design:** two dummies at one event (author note (e)); times and scans (c02).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original, HSC style, 3 marks suggested, not an official marking scheme).** "A school is setting up for its open day. The precedence table shows the activities. Draw a network diagram for the project." Table: P book the hall 3 (–); Q order the signs 2 (–); R arrange the displays 4 (P); S set up the stalls 5 (P, Q); U final walk-through 3 (R, S).
Model answer: P from event 1 to 2; Q from 1 to 3; a dummy (dashed, 0) from 2 to 3; R from 2 to 4; S from 3 to 4; U from 4 to 5 (finish). R leaves P's end event because it needs only P; S leaves event 3, which both P (through the dummy) and Q have reached. Classic mistake (crossed): "R and S both leave one event after P and Q".

**Attempt 2 (scene 10; pack question 2, original, HSC style, 2 marks suggested).** "The network diagram shows a project (durations in days). Write the precedence table." Network: A 5 (1→2), B 3 (1→3), dummy (2→3), C 4 (2→4), D 2 (3→4), E 6 (4→5).
Model answer: A 5 –; B 3 –; C 4 A; D 2 A, B; E 6 C, D. Classic mistake (crossed): "D: B".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Café | A 10, B 15, C 25 (A, B), D 20 (A), E 10 (C, D); A 1→2, B 1→3, dummy 2→3, C 3→4, D 2→4, E 4→5 | 1 to 4, 6, 7, 12 |
| Office fit-out | A 2 (–), B 4 (A), C 3 (A), D 5 (B, C); A 1→2, B 2→4, C 2→3, dummy 3→4, D 4→5 | 5, 6 |
| Open day (A1) | P 3, Q 2, R 4 (P), S 5 (P, Q), U 3 (R, S); P 1→2, Q 1→3, dummy 2→3, R 2→4, S 3→4, U 4→5 | 8, 9 |
| A2 | A 5 1→2, B 3 1→3, dummy 2→3, C 4 2→4, D 2 3→4, E 6 4→5; A –, B –, C A, D A, B, E C, D | 10, 11 |

## Numbers to verify (all values, repeated for Codex)

Every network was checked in Python 3.14 (19 Nov 2026, scratchpad `cf/verify.py`, `python -I`: predecessor sets read back from each drawing, events and scans); Codex to re-check.

- Café: read back D {A}, C {A, B}, E {C, D}; the reversed dummy (3→2) would give D {A, B}, which is wrong.
- Office fit-out: read back B {A}, C {A}, D {B, C}; no two activities share both events.
- Open day: read back R {P}, S {P, Q}, U {R, S}.
- A2: read back C {A}, D {A, B}, E {C, D}.
- Every arrow runs from a lower event number to a higher one.

## Memory aid check

- **"A dummy is a dependency, not a job."** with key line **"Dashed, zero time, pointing into the event that must wait."** From the site's lesson05 card 2 and SAQ 2 ("The dummy must point from X into Y"), and the pack's "dummy = a dependency, not a job" tag. Meaning, as said in scenes 3, 4 and 7. Assumptions checked: activities on arrows (c01a); a dummy has duration 0 and uses no resources; "into the event that must wait" means the dummy's head is at the later event, which must not happen until the dummy's tail event has happened. It helps a new case: T after Q and R, S after Q only (the site's lesson06 question): Q and R end at separate events, and a dummy from Q's end into R's end lets T leave R's end while S leaves Q's.
- **Considered, not used:** "Dummies are fake jobs" (the word "fake" invites students to drop them).

## Narration length estimate

Revision 2, counted by script (`work/brief-resolve-standard-cf/count.py`, the sum of the scene strings, which reproduces e08's 5,632): **5,077 characters** (Revision 1: 5,009), 13 scene headings. Characters per scene (1 to 13): 379, 547, 600, 521, 720, 495, 173, 387, 355, 273, 281, 271, 75. Speech about 382 s; holds and settling unchanged from Revision 1 (below); total **about 492 s**, 78 s under the 570 s cap. Feedback speech: about 27 s and 21 s. The Revision 1 paragraph below is kept for the record.

Counted by script (scratchpad `cf/count.py`, the method of `work/brief-resolve-standard-t1/count.py`, which reproduces e08's 5,632): **5,009 characters**, 13 scene headings. Characters per scene (1 to 13): 379, 547, 592, 521, 660, 495, 173, 387, 355, 273, 281, 271, 75.

At 13.3 characters per second the speech is about 377 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, final frame 2 s) 6 s; settling for the failed tries (2), the dummy and its pulse (3), the reversed ghost and the read-back (4), the fit-out board (5), the two panels (6) and the event boxes (12) about 45 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 487 s**, under the 570 s cap. Feedback speech: about 27 s and 21 s.

Reserve trims if the voiced take runs long: scene 2's last sentence (about 8 s; the tags carry it); scene 6's third sentence (about 7 s; key note 2 keeps the rule).

## Scene list and build ids

Lesson key `m-s12c01b` (route math-s12-c01, second half). Explainer folder `src/explainer/lessons/math-s12-c01b`; build inputs in `docs/production/claude-pm/lessons/math-s12-c01b/` (at voicing).

In order (13 scene headings): hook-tricky-job, two-tries-fail, the-dummy, which-way, worked-office-fitout, when-to-use, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff-event-boxes, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 25 s | 1 | c01a's frame; the tricky job |
| 25 to 70 s | 2 | Two drawings that fail |
| 70 to 120 s | 3 | The dummy and the finished café network |
| 120 to 160 s | 4 | Direction and read-back |
| 160 to 220 s | 5 | g01 board: the office fit-out |
| 220 to 255 s | 6 | The two cases side by side |
| 255 to 270 s | 7 | Framed memory card |
| 270 to 380 s | 8 to 11 | Question cards and countdowns, then feedback |
| 380 to 400 s | 12 | The café network with event boxes |
| 400 to 445 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: c01a's last frame continues into 1; 1 to 2 stage change; 2 to 3 camera continue; 3 to 4 camera continue; 4 to 5 clear change to the board; 5 to 6 stage change; 6 to 7 stage change; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-c01b-learning-review.md`, `science_check` = `checks/m-s12-c01b-maths-check.md`.

## Assets

Inspected before choosing (19 Nov 2026): the bakery-café counter (z06's brief) is the only plate; no plate is needed for the office, the open day or A2 (table-and-network tasks).

Need (painted): none new.

Coded: every network, the ghosts and flags, the teal pulse, the read-back glow, the two panels, the board, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `DrawnMark`, the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`; c01a's `PrecedenceTable` and `ActivityNetwork`.

Additions (kit-needs file, critical path items 1 and 3):
1. **Dummies on ActivityNetwork** (grey, dashed, "0" or "dummy"), drawn by **ProjectModel** from the predecessor sets (one dummy for the café, open day and A2; one for a pair that would share both events, as in the fit-out). Check: ProjectModel places exactly one dummy for each of these four tables and none for c01a's three.
2. **Message pulse** (small): a teal dot running along a dummy; an event lights only when every arriving arrow and pulse has arrived.
3. **Read-back glow through dummies:** pointing at an arrow glows its start event, every arriving arrow, and back along any dummy to the arrows arriving at the dummy's tail.
4. **Empty split boxes** on events (for c02's opening).

## Codex asset brief (Maths S12 C01b)

No new plate. Report nothing unless the build finds the café counter plate unreadable at about 420 px.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every network under "Numbers to verify" and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quote matches the route-inputs JSON exactly, under the Standard 2 heading only.
3. Confirm the dummy convention for two activities with the same start and end events (ruling 71) against recent HSC Standard 2 papers; report the papers checked.
4. Confirm the site's office fit-out keeps its numbers (2, 4, 3, 5) and predecessors, and that the MS-51 example is not used.
5. Confirm both attempts carry every demand and given, and neither card shows an answer (A2's table is empty).
6. Confirm scene 1 opens on c01a's final frame and scene 12 matches section 2 of the decisions file (and, once written, c02's opening).
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Dummy Activities in Network Diagrams | Year 12 Maths Standard

(Title length: 61 characters by script; course suffix unified to "| Year 12 Maths Standard", 23 Nov 2026, coherence audit S5.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/critical-path-analysis/lesson05.sa.html

The café's muffins need the oven and the batter, but the pies need only the oven, and no ordinary drawing shows both. Learn what a dummy activity is (a dashed arrow that takes zero time and carries a dependency, not a job), which way it points, and the two situations that need one: activities that share some but not all predecessors, and activities that would share both start and end events. Read a precedence table back through a dummy. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Critical path analysis. Standard 2.
Syllabus content, Standard 2 (NSW Mathematics Standard 11-12, 2024):
"Construct a network diagram from a precedence table or equivalent, including those involving dummy activities, limited to 10 activities"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa9c92c4c6

Builds on: Precedence Tables and Network Diagrams. Next: Forward and Backward Scans: EST and LST.

#Year12Maths #MathsStandard #CriticalPathAnalysis #HSCScience

## Open decisions

- **1. The fit-out's dummy (ruling 71; Codex).** Decided in Revision 2 (root's decision 3): keep the dummy; add the parallel-arrows sentence only if Codex's HSC check requires it. Revision 1 text: The site draws B and C as two arrows between the same events; this video draws C to its own event with a dummy. If Codex finds recent HSC Standard 2 papers accept parallel arrows, scene 5 still stands (the dummy is never wrong), and one sentence can say so.
- **2. Two dummies (root).** The site's seven-activity example (MS-51) is left out here; it could be a stretch example in c06's sheet scene, where no network is drawn.

## Review notes

- Revision 2 resolves the student learning review (`../checks/m-s12-c01b-learning-review.md`). Next: Codex maths check and error check, then voicing and a build to grade A.
- Revision 1. Next: student learning review (trace from c01a; check that both failed tries feel like real attempts, that "carries a message" makes a zero-time arrow believable, that the direction rule is usable, that the pair-of-events reason in scene 5 is clear without the word "ambiguous", that A2's read-back through the dummy is reachable from scene 4, and that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
