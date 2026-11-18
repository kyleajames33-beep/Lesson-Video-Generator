# Maths S12 F01: How do source, sink, capacity and cuts describe a flow network? Directed edges with capacities as limits, the source and the sink, inflow equals outflow in the middle, a table drawn as a network, and a cut whose capacity counts only the edges crossing forwards (design)

Status: Revision 1 (19 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Standard designs (`math-s12-r12a.md`, `t05.md`, `i09.md` at Revision 2, and their resolution logs), c06's final frame (`math-s12-c06.md` scene 12) and root's Standard rulings (1 to 76; ruling 74, site errors never taught; MS-56's cut note). Designer's decisions for c01a to f04, including every join: `../checks/root-decisions-maths-s12-c01-f04.md`. Next: student learning review, then the Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,088 characters by script (see "Narration length estimate"), 14 scene headings, about 498 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: first video of the Network flow strand, playlist order 89. **Standard 2 only** (Standard 1 has no network flow; ruling 68). Pre-design pack: `../pre-design/maths-standard/math-s12-f01.md`. Site lesson (read through the pack's quotations, read only): `maths-standard/year12/network-flow/lesson01.sa.html` (SHA256 `ff2e356c61e1ecd75877952bd054e101b212c33325ddc9283c6f178913496b5c`; card 02, "Source ($S$): outflow only, where flow enters the network. Sink ($T$): inflow only, where flow exits. Edge capacity: maximum flow an edge can carry. Cut: a set of edges whose removal disconnects $S$ from $T$."; "Cut capacity: Add the capacities of all edges in the cut (edges going FROM the $S$-side TO the $T$-side only, edges going the other way are not in the cut)."; `we-1` (capacity into C 13, out 10); `we-3`, the water pipeline "Pipe 1 S→A (20 ML/day), Pipe 2 S→B (15 ML/day), Pipe 3 A→C (12 ML/day), Pipe 4 A→B (8 ML/day), Pipe 5 B→C (10 ML/day), Pipe 6 B→T (9 ML/day), Pipe 7 C→T (18 ML/day)"). Route entry: `math-s12-f01` in `../../programme/maths-standard-route-inputs-7.json`. Visual system: maths studio kit; the stadium and station plaza (c06's final frame) as the anchor; flow networks coded over the plate, with moving dots (never drawn people).

Owner rules applied: plates for real objects, code for diagrams; no people, hands or faces (fans are dots only); one main question; one stage at a time; words before symbols (edge, directed, capacity, source, sink, inflow, outflow, cut in plain words first); g01 worked example (task strip, table and network apart); two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (a grand final crowd, a town's water, a festival campground); Australian spelling; no em dashes; conversational narration; text above y = 950.

Syllabus content points (Mathematics Standard 11-12 (2024), Year 12), quoted from `../../programme/maths-standard-route-inputs-7.json`:

Standard 2 (Network flow):
- `ci87d0361a`: "Define and use network flow terminology including source, sink, outflow, inflow and cut"
- `cie0dcd4b6`: "Convert information presented in a table to a weighted and directed network diagram"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fafe0a915b

**Boundary:** starts from c06's final frame exactly (decisions file section 2): header "MATHEMATICS STANDARD"; the stadium plate `ms12-stadium-plaza-v1.png`; labels "S plaza", "A north concourse", "B south concourse", "T stands"; arrows S→A "120", S→B "90", A→B "30", A→T "80", B→T "110" with a chip "people per minute"; slow teal dots; chips "how many people a minute can reach the stands?", grey "Critical path analysis: done", "Next", "?". Recalls Year 11 networks (math-s11-n02, n03: directed, weighted networks; a network from a table) in a grey chip. Teaches: a flow network (directed edges, one way only, each with a capacity: the most it can carry per unit of time, a limit, not the actual flow); the source (flow only leaves) and the sink (flow only arrives); inflow and outflow at a middle point (flows in and out; inflow = outflow, nothing is stored); capacity into and out of a point (sums of capacities, a different idea from the flows); a table (From, To, Capacity) drawn as a diagram; a cut (a line splitting the points into a source side and a sink side, crossed by every route from S to T); a cut's capacity (only edges crossing from the source side to the sink side); every cut is a ceiling on the flow. Stops at the terms, table to diagram and cut capacities. Not taught: the saturated edges method (f02), the minimum cut and the theorem (f03).

## Decisions

- **Anchor: the stadium on grand final day (c06's handoff).** S→A 120, S→B 90, A→B 30, A→T 80, B→T 110 people per minute. Capacity into A 120, out of A 30 + 80 = 110. Cuts: {S} 210, {S, A} 200, {S, B} 230 (A→B points back), {S, A, B} 190. The ceiling of 190 is stated as "no more than 190", not as the maximum (f02 and f03 earn that).
- **Inflow and outflow for flows; "capacity into" for capacities (pack decision; MS-56).** The site defines inflow and outflow as "Sum of capacities (or flows)"; the video uses inflow and outflow for flows only, and says "capacity into" and "capacity out of" for sums of capacities, so "inflow = outflow" stays true.
- **Worked example (g01): the site's `we-3` water pipeline** (7 rows, ML per day) for table to diagram, with the arrow-direction slip. The site's we-3 cut (27) is not worked here.
- **Cuts on the stadium, not the site's cut example (MS-56).** The site's cut example shows 14 and 12 beside "minimum cut = maximum flow" but omits the smallest cut (11); it is not used. The stadium's four cuts include the back-edge case.
- **Site `we-1` as attempt 1** (capacity into C 13, out of C 10), in the pack's question 1 form; pack question 2 (a back edge across a cut, 18) as attempt 2.
- **Simulations (standard item 3).**
  1. **FlowNetwork over the plate** (scenes 1 to 4, 6, 7; new kit part): coded edges as tubes along the painted walkways; teal dots move along each edge at a rate proportional to its current flow; a capacity label (blue) on each; at A, an in and out counter.
  2. **Pooling at the north concourse** (scene 4): dots arrive at A at up to 120 a minute but leave at only 110; ten a minute gather into a small queue patch at A's entrance, showing why inflow can't stay above outflow.
  3. **TableToNetwork** (scene 5; new kit part): each table row lights and its arrow draws from the From point to the To point with its capacity.
  4. **CutLine** (scenes 6, 7; new kit part): a freehand violet line; the source side tints pale violet; crossing edges glow violet (counted) or grey with a small back arrow and "not counted"; a live sum.
- **Colour roles (fixed for f01 to f04).** Capacity blue; flow teal (dots, flow numbers); saturated edges amber with a tick and "full" (f02 on); cut lines, counted edges and cut sums violet; back edges grey, "not counted"; the source side pale violet tint; demand dashed ink, spare olive, shortfall amber (f04); answer green; mistake red, crossed slips only.
- **Large type, handwritten voice.** Capacity labels 40 px; counters 44 px; table rows 40 px. Hand tags: "one way only", "a limit, not a count", "source: flow only leaves", "sink: flow only arrives", "in = out", "120 in, only 110 out", "From → To", "7 rows, 7 arrows", "every route crosses", "forwards only", "back: not counted", "a ceiling". At most two live at once.
- **Stage changes (standard item 2).** c06's frame (1); edges and capacity (2); source and sink (3); inflow, outflow and the queue at A (4); g01 board, the water pipeline (5); cuts on the stadium (6); every cut as a ceiling (7); framed card (8); question cards (9 to 12); the festival's empty pipes (13); key notes (14).
- **Worked example (g01 layout).** Scene 5: task strip "Draw the weighted, directed network for the town's water pipeline."; givens card: the table (From, To, Capacity (ML per day): S A 20; S B 15; A C 12; A B 8; B C 10; B T 9; C T 18); the network at the right, S left, T right, A, B, C between; a check "7 rows, 7 arrows"; framed answer (the drawn network, green outline); crossed slip "A→B drawn as B→A" (caption "From is the tail, To is the head").
- **Memory aid.** Framed card: "In = out in the middle. Cuts count forwards only." Key line: "No flow can be bigger than any cut."
- **Visual surprise.** Dots pool at the north concourse's entrance when 120 a minute meet 110 a minute of exits (4).
- **Plain meanings at first use.** Edge ("a walkway, pipe or road"); directed ("one way only"); capacity ("the most it can carry per minute, or per hour"); flow network ("a network where something moves through it"); source ("where the flow starts"); sink ("where it ends"); inflow and outflow ("the flow coming in and going out at a point"); cut ("a line that splits the points into a source side and a sink side, so every route from S to T crosses it").
- **Attempts (original wording, HSC style).** A1 (site `we-1`, pack question 1's form): S→A 12, S→B 8, A→C 6, B→C 7, A→T 5, C→T 10 (kL per hour); (a) draw, (b) source and sink, (c) capacity into and out of C, can it all pass; 13 in, 10 out, no; crossed "yes: 13 can arrive" (caption "only 10 can leave C"). A2 (pack question 2): the cut {S, A} | {B, C, T}: 7 + 6 + 5 = 18; crossed "21, adding B→A" (caption "B→A crosses backwards: not counted").
- **Mistake scene:** none separate. Capacity read as the actual flow (2, said); an arrow drawn the wrong way (5 crossed); a back edge counted in a cut (6, said; A2 crossed); more in than can go out (4; A1 crossed); an edge wholly on one side counted (6, said).
- **Cause chain taught, in order:** (1) a walkway has a width and a speed limit, so it can carry at most so many a minute: its capacity (2); (2) flow starts at the source and ends at the sink, so nothing flows into S or out of T (3); (3) nothing is stored at a middle point, so inflow = outflow; if the ways out can take less than the ways in could deliver, the extra queues (4); (4) a cut separates S from T, so every route crosses it, and only edges crossing forwards carry flow towards T (6); (5) so every unit of flow crosses every cut forwards, and no flow can be bigger than any cut (7).
- **Entry knowledge (route):** math-s11-n02, n03 (directed, weighted networks; a network from a table). Critical path analysis is not needed. Recalled in a grey chip.
- **Handoff (to math-s12-f02, the saturated edges method).** Scene 13's frame (decisions file section 2): header "MATHEMATICS STANDARD · NETWORK FLOW"; the new plate `ms12-festival-water-tank-v1.png` (briefed here; ruling 17) at the left (about 560 px); the festival's water network at the right (about 1,200 × 520 px): S "tank", A, B, C junctions, T "campground taps"; S→A "0/12", S→B "0/10", A→B "0/4", A→C "0/7", B→C "0/5", B→T "0/6", C→T "0/11" (flow teal, capacity blue), with a chip "kL per hour"; a coded tap counter at T "0 kL per hour"; chips "how much water can reach the campground each hour?", "Next" and "?". No flow is sent.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Stadium cuts: {S}: 120 + 90 = 210; {S, A}: 90 + 30 + 80 = 200; {S, B}: 120 + 110 = 230 (A→B back); {S, A, B}: 80 + 110 = 190. Maximum flow 190 (f02's A2 and f03).
  (b) Site we-3: five routes; the sink cut 9 + 18 = 27 is the smallest (not said).
  (c) Site we-1: into C 6 + 7 = 13; out of C 10; maximum flow 15 (not said).
  (d) A2: {S, A}: S→B 7 + A→C 6 + A→T 5 = 18; B→A 3 back. Every cut of that network: minimum 13 (not said).
  (e) The festival: f02 works it (17).
  (f) Units read aloud: "megalitres a day", "kilolitres an hour", "people a minute".

Main question: *On grand final day, how many fans a minute can get from the station to the stands? How do source, sink, capacity and cuts describe a flow network?*
Entry knowledge (Year 11 n02, n03): directed, weighted networks; a network from a table.
Stops after: the terms, inflow = outflow, table to diagram, cuts and their capacities, cuts as ceilings.
Handoff: the festival's water network with empty pipes, "how much water can reach the campground each hour?" (f02).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): capacity blue; flow teal; cuts violet; back edges grey; answer green; mistake red. Header strip "MATHEMATICS STANDARD · NETWORK FLOW" (from scene 1's first change). Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: grand final day
> It's grand final day. Fans pour off the trains onto the plaza, then head along the walkways to the stands. Every walkway has a limit, like a hundred and twenty people a minute on the wide one to the north concourse. A network like this, where something moves through it, is called a flow network. So how do source, sink, capacity and cuts describe a flow **network**?

Visual: opens on c06's final frame exactly. On the first sentence "Next" and the grey chip fade, and the header strip gains "· NETWORK FLOW". On "pour off the trains" the dots at the plaza thicken. On "a hundred and twenty" the S→A label "120" pulses. On "flow network" a grey chip "Year 11: directed, weighted networks". On "network" (bold) heading "Flow networks" writes.

### 2. edges and capacity
> Each walkway is an edge, and these edges are directed, because the crowd only walks one way, towards the stands. The number on each edge is its capacity, the most it can carry in a minute. The wide walkway to the north concourse can take a hundred and twenty people a minute. That's a limit, not a count. On a quiet day it might carry ten people a minute, or none at all, but it can never carry more than a hundred and **twenty**.

Visual: stage change: simulation 1. The plate dims slightly; the coded edges thicken into tubes along the walkways. On "directed" every arrowhead pulses (hand tag "one way only"). On "capacity" the five blue labels glow; on "a hundred and twenty people a minute" S→A's tube shows a gauge "capacity 120". On "a limit, not a count" (hand tag "a limit, not a count") the S→A dots slow to a trickle with a teal readout "flow: 10", then stop "flow: 0"; on "twenty" (bold) they speed up to "flow: 120" and the gauge tops out, never past it.

### 3. source and sink
> Every flow network has a start and an end. The source is where the flow begins, so flow only leaves it. Here that's the station plaza, S. The sink is where the flow ends, so flow only arrives there. Here that's the stands, T. Every other point, like the two concourses, is somewhere the flow passes **through**.

Visual: camera continue. On "source" the plaza node "S" rings and gains a tag "source" (40 px; hand tag "source: flow only leaves"), its two arrows glowing outwards. On "sink" "T" rings, tag "sink" (hand tag "sink: flow only arrives"), its two arrows glowing inwards. On "through" (bold) A and B pulse as dots pass through them.

### 4. what goes in comes out
> At a point in the middle, the flow coming in is its inflow, and the flow going out is its outflow. People don't pile up inside the north concourse forever, so whatever flows in must flow out. Inflow equals outflow. Now look at the capacities around the north concourse. Up to a hundred and twenty people a minute can arrive, but the two ways out take only thirty plus eighty, a hundred and **ten**. So at most a hundred and ten people a minute can get through it, and the extra ten a minute would just **queue**.

Visual: camera push in on A (the north concourse; about 1.4 zoom). On "inflow" a teal counter "in" at A's entrance; on "outflow" a counter "out" at its exits. On "Inflow equals outflow" both counters read the same running number (hand tag "in = out"). On "capacities around the north concourse" the labels "120", "30" and "80" glow blue; on "ten" (bold) a row writes, 44 px: "capacity into A: 120; capacity out of A: 30 + 80 = 110". Simulation 2: on "queue" (bold) the inflow is pushed to 120 a minute; the exits carry 110 and ten dots a minute gather into a growing patch at A's entrance (hand tag "120 in, only 110 out").

### 5. worked example: a table to a network
> Here's a worked example. A town's water comes through seven pipes, and the table lists each one, where it starts, where it goes, and its capacity in megalitres a day. Put the source on the left and the sink on the right, with A, B and C in between. Then draw one arrow for each row, from the From point to the To point, and write the capacity on it. S to A is twenty, and S to B is fifteen. A to C is twelve, A to B is eight, B to C is ten, B to T is nine, and C to T is **eighteen**. Last, check the count, seven rows and seven **arrows**. Drawing an arrow the wrong way round is the classic slip. The From column is always the arrow's **tail**.

Visual: clear change to the g01 board. Task strip, 44 px: "Draw the weighted, directed network for the town's water pipeline." Givens card: the table (40 px), heads "From", "To", "Capacity (ML per day)": "S | A | 20", "S | B | 15", "A | C | 12", "A | B | 8", "B | C | 10", "B | T | 9", "C | T | 18" (capacities blue). At the right (about 1,000 × 520 px), simulation 3: on "source on the left" S at the left with tag "source", T at the right with "sink", and A (top), B (bottom), C (right of centre) placed. Each row lights and its arrow draws on its spoken words (hand tag "From → To"); on "eighteen" (bold) C→T draws. On "arrows" (bold) a check row "7 rows, 7 arrows ✓" (hand tag "7 rows, 7 arrows") and the framed network (green outline). On "classic slip" a red ghost arrow B→A with red slip "A→B drawn as B→A"; on "tail" (bold) it is crossed (caption "From is the tail, To is the head").

### 6. cuts
> Now the big idea for this whole topic, a cut. A cut is a line that splits the points into two sides, with the source on one side and the sink on the other, so every route from S to T has to cross it. Its capacity adds up the edges that cross it from the source side to the sink side. Try a cut around the plaza. It crosses the walkways to both concourses, a hundred and twenty plus ninety, two hundred and **ten**. Now cut around the plaza and the south concourse. The edges crossing forwards are S to A, a hundred and twenty, and B to T, a hundred and ten. The link from A to B crosses too, but it points back towards the source side, so it doesn't count. That cut is two hundred and **thirty**.

Visual: stage change: back to the full stadium (the plate at about 1,300 px), simulation 4. On "a line that splits" a violet freehand line draws; on "source on one side" the source side tints pale violet. On "every route" a single teal dot traces S→A→T and lights where it crosses the line (hand tag "every route crosses"). On "around the plaza" the line wraps S only; S→A and S→B glow violet; sum "120 + 90"; on "ten" (bold) "= 210" (violet, 44 px; hand tag "forwards only"). On "the plaza and the south concourse" the line redraws around S and B; S→A and B→T glow violet ("120 + 110"); on "points back" A→B turns grey with a small back arrow and the tag "not counted" (hand tag "back: not counted"); on "thirty" (bold) "= 230".

### 7. every cut is a ceiling
> Why do cuts matter? Every fan going from the plaza to the stands has to cross every cut, going forwards, so the flow can never be bigger than any cut's capacity. The cut around the plaza and both concourses crosses just the two gates, eighty plus a hundred and ten, a hundred and **ninety**. So however the crowd moves, no more than a hundred and ninety people a minute can reach the stands. Whether they can really reach that many is our next **question**.

Visual: camera continue. On "has to cross every cut" three faint violet cut lines show at once (210, 230 and a new one), and a dot's route lights a crossing on each. On "the plaza and both concourses" the line wraps S, A and B; A→T and B→T glow violet ("80 + 110"); on "ninety" (bold) "= 190". On "no more than" a horizontal violet bar "ceiling: 190 per minute" appears over the stands (hand tag "a ceiling"). On "question" (bold) a grey "?" sits on the bar.

### 8. memory aid
> Here's the summary. Flow leaves the source and arrives at the sink, and in between, what goes in comes out. A cut counts only the edges crossing forwards, from the source side to the sink **side**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the stadium network small with the 190 cut. Main line, hand font 56 px: "In = out in the middle. Cuts count forwards only." On "side" (bold) the key line, 40 px: "No flow can be bigger than any cut." Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. A festival's water pipes are listed in a table, with capacities in kilolitres per hour. S to A is twelve, S to B is eight, A to C is six, B to C is seven, A to T is five, and C to T is ten. Draw the directed network, and identify the source and the sink. Then find the total capacity into C and out of C. Can all the water that could arrive at C get through? Explain. Pause here to answer.

Visual: `QuestionCard`, 40 px: "The table shows the pipes in a water network, with capacities in kilolitres per hour. (a) Draw the directed network. (b) Identify the source and the sink. (c) Find the total capacity into C and the total capacity out of C. Can all the water that could arrive at C get through? Explain." Table (36 px): "S | A | 12", "S | B | 8", "A | C | 6", "B | C | 7", "A | T | 5", "C | T | 10" (heads "From", "To", "Capacity (kL per hour)"). Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> S is the source, because flow only leaves it, and T is the sink. Into C, the pipes can bring six plus seven, which is **thirteen**. But only one pipe leaves C, with a capacity of **ten**. So no, at most ten kilolitres an hour can pass through C. Saying yes, because thirteen can arrive, is the slip. Only ten can **leave**.

Visual: the card shrinks to the top (30 px). The network draws (about 1,000 × 420 px), S left "source", T right "sink" (framed (a), (b), green). Row, 44 px: "into C: 6 + 7"; on "thirteen" (bold) "= 13"; on "ten" (bold) "out of C: 10". Framed (green, (c)): "No: at most 10 kL per hour can leave C, so at most 10 can pass through." On "slip" a red slip "yes: 13 can arrive"; on "leave" (bold) it is crossed (caption "only 10 can leave C"). Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. This water network is drawn with a cut, in kilolitres per hour. S and A are on the source side, and B, C and T are on the sink side. Find the capacity of the cut. Pause here to answer.

Visual: `QuestionCard`, 40 px: "A water network has edges S→A (9), S→B (7), A→C (6), B→A (3), B→C (4), A→T (5) and C→T (8), in kilolitres per hour. Find the capacity of the cut that has S and A on the source side and B, C and T on the sink side." The network drawn with the cut line (violet, dashed) and the two sides labelled "source side: S, A" and "sink side: B, C, T"; no tint, no glow. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 12. feedback 2 (brief)
> The edges crossing forwards are S to B, seven, A to C, six, and A to T, five, so the cut is **eighteen**. B to A crosses too, but it runs from the sink side back to the source side, so it isn't counted. Adding its three to get twenty-one is the slip. Only forward edges **count**.

Visual: the card shrinks to the top. The source side tints pale violet; S→B, A→C and A→T glow violet; row "7 + 6 + 5"; on "eighteen" (bold) framed "= 18 kL per hour" (green). On "B to A" B→A turns grey with a back arrow and "not counted". On "slip" a red slip "21, adding B→A"; on "count" (bold) it is crossed (caption "B→A crosses backwards: not counted"). Hold about 1 s.

### 13. handoff: water for the campground
> That's how a flow network is described. Now a music festival's campground, where a water tank feeds the taps through seven pipes. Each pipe has a capacity in kilolitres an hour, and right now every pipe is empty. How much water can actually reach the campground each **hour**?

Visual: board clear to the final frame (decisions file section 2). The new plate `ms12-festival-water-tank-v1.png` at the left (about 560 px); the festival network at the right (about 1,200 × 520 px): S "tank", A, B, C, T "campground taps"; on "seven pipes" the pipes draw as tubes with labels "0/12" S→A, "0/10" S→B, "0/4" A→B, "0/7" A→C, "0/5" B→C, "0/6" B→T, "0/11" C→T (flow teal, capacity blue, 36 px) and a chip "kL per hour"; on "empty" a tap counter at T "0 kL per hour" (44 px). On "hour" (bold) chips "how much water can reach the campground each hour?" (40 px), "Next" and "?". No flow is sent. Hold about 2 s. This is f02's opening; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Directed edges; capacity = the most an edge can carry (a limit).
- Source: flow only leaves. Sink: flow only arrives.
- Inflow = outflow at every point in between.
- Table to network: one arrow per row, From → To, capacity on it.
- Cut: splits S from T. Add forward edges only. Flow ≤ every cut.

Memory aid (framed card, right side, as in scene 8): *In = out in the middle. Cuts count forwards only.* Key: *No flow can be bigger than any cut.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 13's frame exactly. This is the final frame: f02 opens on it.

## Teaching checks

- **Does it explain causes?** Why capacity is a limit (2). Why nothing flows into the source or out of the sink (3). Why inflow = outflow: nothing is stored, and the extra queues (4). Why a back edge doesn't count: flow along it moves towards the source side (6). Why every cut is a ceiling: every route crosses it forwards (7).
- **Misconceptions addressed:** capacity read as flow (2); an arrow reversed (5); a back edge counted (6, A2); more in than can go out (4, A1); an edge on one side counted (6, said).
- **Visual standard, item by item:** 1 the stadium plate, the festival tank plate; 2 a new stage every 30 to 60 s; 3 moving dots with counters, the queue at A, rows drawing arrows, the cut line with live sums; 4 fixed roles with words; 5 large type; 6 hand tags; 7 g01 board in 5; 8 framed card and five bullets; 9 the dots pooling at A.
- **One idea at a time:** capacity (2), source and sink (3), in = out (4), table to network (5), cuts (6), ceilings (7).
- **Response opportunity:** two unseen HSC-style tasks with every demand and given visible; 10 s each; feedback about 23 s and 20 s.
- **Avoided double teaching:** Year 11 directed networks are a grey chip.
- **Syllabus coverage:** `ci87d0361a`: "source, sink" (3, A1 (b)), "outflow, inflow" (4, A1 (c)), "cut" (6, 7, A2); `cie0dcd4b6`: "Convert information presented in a table to a weighted and directed network diagram" (5, A1 (a)).
- **Out of scope by design:** the saturated edges method (f02); the minimum cut and the theorem (f03).

## Practice questions and model answers

**Attempt 1 (scene 9; the site's network-flow lesson01 `we-1` in the pack's question 1 form, original wording, HSC style, 4 marks suggested, not an official marking scheme).** "The table shows the pipes in a water network, with capacities in kilolitres per hour. (a) Draw the directed network. (b) Identify the source and the sink. (c) Find the total capacity into C and the total capacity out of C. Can all the water that could arrive at C get through? Explain." Table: S→A 12; S→B 8; A→C 6; B→C 7; A→T 5; C→T 10.
Model answer: (a) Six arrows from the table, S on the left, T on the right. (b) Source S (flow only leaves); sink T (flow only arrives). (c) Into C: 6 + 7 = 13; out of C: 10. No: at most 10 kL per hour can leave C, and inflow = outflow, so at most 10 can pass through C. Classic mistake (crossed): "yes: 13 can arrive".

**Attempt 2 (scene 11; pack question 2, original, HSC style, 2 marks suggested).** "A water network has edges S→A (9), S→B (7), A→C (6), B→A (3), B→C (4), A→T (5) and C→T (8), in kilolitres per hour. Find the capacity of the cut that has S and A on the source side and B, C and T on the sink side."
Model answer: forward edges S→B 7, A→C 6, A→T 5: 18 kL per hour. B→A crosses from the sink side to the source side, so it is not counted. Classic mistake (crossed): "21, adding B→A".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Stadium | S→A 120, S→B 90, A→B 30, A→T 80, B→T 110 people per minute | 1 to 4, 6, 7 |
| North concourse | capacity into 120; out 30 + 80 = 110; 10 a minute queue | 4 |
| Stadium cuts | {S} 210; {S, B} 230 (A→B back); {S, A, B} 190 | 6, 7 |
| Site we-3 | S→A 20, S→B 15, A→C 12, A→B 8, B→C 10, B→T 9, C→T 18 ML per day; 7 rows | 5 |
| A1 (site we-1) | into C 6 + 7 = 13; out of C 10 | 9, 10 |
| A2 | 7 + 6 + 5 = 18; B→A 3 not counted (21 crossed) | 11, 12 |
| Festival (final frame) | S→A 12, S→B 10, A→B 4, A→C 7, B→C 5, B→T 6, C→T 11 kL per hour; all 0 | 13 |

## Numbers to verify (all values, repeated for Codex)

Recalculated in Python 3.14 (19 Nov 2026, scratchpad `cf/verify.py`, `python -I`: every cut listed and the maximum flow found by augmenting paths); Codex to re-check.

- Stadium: cuts {S, A, B} 190, {S, A} 200, {S} 210, {S, B} 230; maximum flow 190.
- Site we-1: into C 13, out of C 10 (the smallest cut 15; not said).
- A2: cut {S, A} = 18 (smallest cut of the network 13; not said).
- Site we-3: 7 edges as listed.

## Memory aid check

- **"In = out in the middle. Cuts count forwards only."** with key line **"No flow can be bigger than any cut."** From the site's card 02 ("edges going FROM the S-side TO the T-side only") and lesson03's "Every unit of flow from S to T must cross every cut at least once" (f03's source). Meaning, as said in scenes 4, 6, 7 and 8. Assumptions checked: "in the middle" excludes S and T; "in = out" is about flows, not capacities (scene 4 shows capacities can differ, and the extra queues); a flow here never runs backwards along an edge (Standard 2 has no backward flow), so forward edges carry every unit across a cut. It helps a new case: a cut crossing edges of 9 and 4 forwards and 6 backwards has capacity 13, so no flow is more than 13.
- **Considered, not used:** "Cut the pipes, count the pipes" (invites counting back edges).

## Narration length estimate

Counted by script (scratchpad `cf/count.py`, the method of `work/brief-resolve-standard-t1/count.py`, which reproduces e08's 5,632): **5,088 characters**, 14 scene headings. Characters per scene (1 to 14): 363, 426, 307, 504, 634, 688, 449, 193, 400, 311, 194, 272, 272, 75.

At 13.3 characters per second the speech is about 383 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, final frame 2 s) 6 s; settling for the dots and gauges (2, 3), the push-in and queue (4), the rows drawing (5), the cut lines (6, 7) and the festival pipes (13) about 50 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 498 s**, under the 570 s cap. Feedback speech: about 23 s and 20 s.

Reserve trims if the voiced take runs long: scene 2's "On a quiet day" sentence (about 7 s; the trickle still shows it); scene 7's last sentence (about 4 s).

## Scene list and build ids

Lesson key `m-s12f01` (route math-s12-f01). Explainer folder `src/explainer/lessons/math-s12-f01`; build inputs in `docs/production/claude-pm/lessons/math-s12-f01/` (at voicing).

In order (14 scene headings): hook-grand-final, edges-capacity, source-sink, in-equals-out, worked-table-to-network, cuts, cuts-as-ceilings, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff-festival, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 25 s | 1 | c06's frame; the stadium |
| 25 to 60 s | 2 | Edges and capacity |
| 60 to 80 s | 3 | Source and sink |
| 80 to 125 s | 4 | In = out; the queue at A |
| 125 to 185 s | 5 | g01 board: the water pipeline |
| 185 to 240 s | 6 | Cuts and the back edge |
| 240 to 270 s | 7 | Every cut is a ceiling |
| 270 to 285 s | 8 | Framed memory card |
| 285 to 395 s | 9 to 12 | Question cards and countdowns, then feedback |
| 395 to 415 s | 13 | The festival's empty pipes |
| 415 to 460 s | 14 | Key notes, then a silent return to scene 13's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: c06's last frame continues into 1; 1 to 2 stage change; 2 to 3 camera continue; 3 to 4 camera push in; 4 to 5 clear change to the board; 5 to 6 stage change; 6 to 7 camera continue; 7 to 8 stage change; attempts and feedback: the card shrinks to the top; 12 to 13 board clear; 13 to 14 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-f01-learning-review.md`, `science_check` = `checks/m-s12-f01-maths-check.md`.

## Assets

Inspected before choosing (19 Nov 2026): the stadium is c06's brief; no existing maths plate shows a festival water tank or campground taps (the pack's search).

Need (painted): `ms12-festival-water-tank-v1.png` (f02's opening, shown in this video's final frame; ruling 17; reused in f03's attempt 2 and f04's attempt 2).

Coded: the edges, tubes, labels, dots, counters, the queue patch, the table and its arrows, cut lines and tints, the board, question cards, the countdown, the festival network, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `DrawnMark`, the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`; the shared network layout and arrow style of `ActivityNetwork` (kit-needs file: one graph layout for both kits).

Additions (kit-needs file, network flow items 1 to 3 and 5):
1. **FlowModel** (logic): edges with capacities; flows per edge; every source-to-sink cut with its forward capacity; the maximum flow by augmenting paths (checking only). Must match `cf/verify.py` on the stadium (190), the festival (17) and A2's network.
2. **FlowNetwork**: edges as tubes over a plate or plain; blue capacity labels; teal dots at a rate proportional to flow; in and out counters at a point; a queue patch where inflow exceeds what can leave.
3. **CutLine**: a freehand violet line; a pale violet source-side tint; crossing edges glowing violet (counted) or grey with a back arrow (not counted); a live sum.
4. **TableToNetwork**: From, To, Capacity rows lighting and drawing their arrows (PrecedenceTable's row style).

## Codex asset brief (Maths S12 F01, a festival water tank and taps)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-s12-f01.md`, route entry math-s12-f01. Paint after the learning review and maths check pass and root gives the go-ahead, and before the f01 build (the plate appears in f01's final frame and opens f02; ruling 17). Save to `public/assets/maths/`. Ink and watercolour in the house style, matched to `ms12-stadium-plaza-v1.png` (c06's brief) in palette; no text, labels, numbers, logos, people, hands or faces; never stretch.

1. `ms12-festival-water-tank-v1.png` (1200 × 1000 px, true alpha): a music festival campground's water supply in daylight. A large round corrugated-iron water tank on a timber stand at the left, a grey pipe running from its base along the ground and splitting into a few smaller pipes (the painted pipes are a hint only; the coded network carries the maths), ending at a row of four simple metal taps over a gravel drain on a timber frame at the right; a couple of empty tents and a bunting line in the background (no lettering). Plain, even light. Leave the top 140 px and the bottom 130 px free of anything that needs to be seen.

Report inspection at 560 px and at 280 px wide on the paper background (`#f6f1e7`), confirming the tank and the taps read as the start and end at 280 px. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ms12-f01-provenance.json`. If the f02 designer chooses another opening, only f01's final frame changes.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a script, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm both syllabus quotes match the route-inputs JSON exactly, under the Standard 2 heading only.
3. Confirm inflow and outflow are used for flows only and "capacity into/out of" for sums of capacities (MS-56); the site's cut example (14 and 12) is not used.
4. Confirm the site's we-3 and we-1 keep their numbers.
5. Confirm both attempts carry every demand and given, and neither card shows an answer (A2's cut is drawn without tint or glow).
6. Confirm scene 1 opens on c06's final frame and scene 13 matches section 2 of the decisions file (and, once written, f02's opening).
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950; confirm the crowd is dots only.

## YouTube metadata (draft)

Title: Flow Networks: Source, Sink, Capacity and Cuts | Year 12 Maths Standard 2

(Title length: 73 characters by script.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/network-flow/lesson01.sa.html

On grand final day, fans stream from the station to the stands along walkways that can each carry only so many people a minute. Learn the language of flow networks: directed edges, capacity (a limit, not a count), the source and the sink, and inflow equals outflow at every point in between. Convert a table into a weighted, directed network diagram, then meet cuts: lines that split the source from the sink, whose capacity counts only the edges crossing forwards. Every cut is a ceiling on the flow. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Network flow. Standard 2.
Syllabus content, Standard 2 (NSW Mathematics Standard 11-12, 2024):
"Define and use network flow terminology including source, sink, outflow, inflow and cut"
"Convert information presented in a table to a weighted and directed network diagram"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fafe0a915b

Builds on: Critical Path Analysis in a Spreadsheet. Next: The Saturated Edges Method for Maximum Flow.

#Year12Maths #MathsStandard #NetworkFlow #HSCScience

## Open decisions

- **1. Fourteen scene headings (root).** f01 carries two syllabus points and seven ideas; scene 7 (cuts as ceilings) is its own short stage so the 190 ceiling lands before f02. It can merge into scene 6 if the voiced take runs long.
- **2. "No more than 190" (root).** The stadium's smallest cut is said as a ceiling only; f02's A2 reaches 190 with the method and f03 names the theorem.

## Review notes

- Revision 1. Next: student learning review (trace from c06 for a student with only Year 11 networks; check that "a limit, not a count" lands with the trickle, that the queue at A makes in = out believable, that the From → To rule is enough for A1, that the back-edge rule is clear before A2, that "every cut is a ceiling" is reasoned, not asserted, and that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
