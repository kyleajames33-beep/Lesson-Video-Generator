# Maths S11 N02: What do vertex, edge, degree, directed and weighted mean? Degree as the edges at a vertex, the degree sum as a check, arrows for one-way edges, numbers for weights, and reading a directed, weighted network (design)

Status: Revision 1 (24 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), `math-s11-n01.md` (Revision 1, this batch), the Year 12 designs that recall this video (`math-s12-c01a.md`: "Year 11: arrows with directions and weights"; `math-s12-f01.md`: "Year 11: directed, weighted networks"), the coherence audit and root's Standard rulings 1 to 99. Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,573 characters by script (see "Narration length estimate"), 13 scene headings, about 500 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: second video of the Year 11 Networks, paths and trees strand, outline playlist order 55. One video for Standard 1 and Standard 2. Viewers arrive from n01's final frame. Pre-design pack: `../pre-design/maths-standard/math-s11-n02.md`. Route entry: `math-s11-n02` in `../../programme/maths-standard-route-inputs-13.json`. Site lessons: `year11/networks-paths-and-trees/lesson01.sa.html` (cards 06 and 07, WE1, SA 1); lesson02's degree-sum idea. Visual system: maths studio kit; the delivery van and rail trail plates (existing); the networks coded.

Owner rules applied: as n01 (header strip "NETWORKS, PATHS AND TREES" only; one question; one stage at a time; plain meanings; two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors; no people; Australian spelling; no em dashes).

Syllabus content point (Mathematics Standard 11-12 (2024), Year 11, Networks, paths and trees, "Network concepts", common to Standard 1 and Standard 2), quoted from `../../programme/maths-standard-route-inputs-13.json`:

- `cica79bb9b`: "Define and use the network terminology: vertex, edge, degree, directed networks and weighted edges"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fabf235394

**Boundary:** starts from n01's final frame exactly (the delivery van `ma12-delivery-van-v1.png`, about 520 px wide, at the left; a coded street network at the right of five stops "Depot", "Bakery", "Café", "Pharmacy", "Gym" with arrowheads on the one-way edges and minute tags; chips "one-way? how long?", "Next: degree, direction and weight" and "?"). Recalls n01 (vertex, edge; the flight network) in a grey chip. Teaches: degree; the degree sum; a loop; directed networks; weighted edges; a directed, weighted network; route totals. Not taught: tables and maps (n03); paths and trees (n04); the names in-degree and out-degree.

## Decisions

- **Anchor: the van's town (n01's frame).** Two things a plain network can't show: one-way streets and travel times.
- **Degree first, on the familiar flight network.** Degree = edges at a vertex; the hubs have degree 4; Hobart has degree 1, so one closure cuts it off (a callback to n01's "still connected?").
- **The degree sum as a counting check (from site card 06).** Each edge drops one token at each end (simulation), so the total is twice the number of edges; an odd total means a miscount. A loop adds 2 (one sentence, one picture).
- **Directed: arrows (Year 12 recall wording).** One-way streets as arrows; a two-way street as a plain line or a double arrow; travel only along arrows; count arrows in and out separately (said in plain words; the names in-degree and out-degree are not needed by the point).
- **Weighted: numbers on edges.** Distance, time or cost; "a directed, weighted network"; the hand tag "arrows with directions and weights" (Year 12 c01a's chip) and the row "directed, weighted network" (Year 12 f01's chip) appear in scene 5.
- **Weight is not drawn length.** A long line labelled 3 beside a short line labelled 7 (scene 6).
- **Simulations (standard item 3).**
  1. **Degree badges and the token drop** (scenes 2, 3, feedback 1): each vertex wears a live degree badge; for the sum, each edge in turn drops a token at both ends; a running total and an edge counter sit side by side ("tokens 20 · edges 10").
  2. **Van runner** (scenes 4 to 6, feedback 2): a van icon moves along edges; it bounces off an arrow's head when sent the wrong way (red flash "one-way"); a trip timer adds each weight as it passes.
- **Colour roles (fixed n01 to n07).** Vertices blue; edges amber; arrowheads amber; weight tags white on amber; a highlighted route teal; degree badges teal; answer green; mistake red.
- **Large type, handwritten voice.** Labels 40 px; working 52 px; nothing below 26 px; all text above y = 950. Hand tags: "degree: lines at a dot", "hub", "two ends each", "arrows with directions and weights", "follow the arrows", "read the number, not the length". At most two live at once.
- **Stage changes (standard item 2).** The van's town (1); the flight network with badges (2); the token drop (3); the van's arrows (4); weights and the full run (5); Gym to Café (6); framed card (7); question cards (8 to 11); the rail trail and table (12); key notes (13).
- **Worked examples (g01 order).** Scene 2: "deg(Perth) = 3 ... deg(Hobart) = 1" (badges). Scene 3: "3 + 2 + 4 + 4 + 1 + 4 + 2 = 20 = 2 × 10 edges" (framed green). Scene 5: "D → B → C → P → G → D: 4 + 3 + 2 + 6 + 7 = 22 min" (framed green). Scene 6: "G → D → B → C: 7 + 4 + 3 = 14 min" (framed green).
- **Memory aid.** Framed card: "Degree: count the lines at a dot. Arrows give direction; numbers give weight." Key line: "Add all the degrees: you get 2 × the number of edges."
- **Plain meanings at first use.** Degree ("the number of edges that meet at a vertex"); directed network ("a network whose edges are arrows, showing the only way you can travel"); weight ("a number on an edge, such as a distance, time or cost"); weighted edge ("an edge with a weight").
- **Attempts.** A1 (pack question 1): A 3, B 2, C 2, D 2, E 1; sum 10 = 2 × 5; crossed "degrees add to 5" (caption "every edge has two ends"). A2 (pack question 2): 7 min; no; crossed "P → C: 2 min" (caption "against the arrow").
- **Mistake scene:** none separate. Sum = edges (3, A1); against an arrow (4, A2); length as weight (6); a loop counted once (3).
- **Cause chain taught, in order:** (1) a vertex's degree counts its edges, so it measures how many ways in and out a place has (2); (2) every edge has two ends, each adding 1 to a degree, so the degrees add to twice the edges (3); (3) a one-way link allows travel one way only, so it is drawn as an arrow and a route must follow arrows (4); (4) problems care about distance, time or cost, so each edge carries that number as its weight, and a route's total is the sum of its weights (5); (5) a weight is information, not drawing, so read the number, not the line's length (6).
- **Entry knowledge (route):** math-s11-n01. Recalled in a grey chip.
- **Site notes.** lesson01 recalculated: no error. MSY-29 (weighted edges not defined).
- **Handoff (to math-s11-n03, networks from tables and maps).** Scene 12: board clear; the rail trail `ma11-rail-trail-v1.png` (about 1,100 px wide) across the top with five coded stop markers labelled "Trailhead", "Lake", "Mill", "Ridge", "Village"; below it a coded distance table, 36 px (as n03 scene 2: rows and columns T, L, M, R, V; "6", "9", "4", "7", "5", "3" in their cells, "–" elsewhere); chips "table → network?", "Next: networks from tables and maps" and "?". n03 opens on this frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Flight degrees: Perth 3, Darwin 2, Adelaide 4, Melbourne 4, Hobart 1, Sydney 4, Brisbane 2; sum 20; 10 edges.
  (b) Van network (example minutes): D→B 4, B→C 3, C→D 5, C→P 2, P→G 6, G→D 7, B↔P 4 (two-way). Run D→B→C→P→G→D = 22. G→C: G→D→B→C = 14 (the only route; verified by search). C→P→B = 6 (quickest; C→D→B = 9). A2: P→B→C = 7; slip P→C = 2 (against C→P).
  (c) A1: A 3, B 2, C 2, D 2, E 1; 10 = 2 × 5.

Main question: *A delivery van meets one-way streets and travel times. What do vertex, edge, degree, directed and weighted mean?*
Entry knowledge (math-s11-n01): vertices and edges.
Stops after: degree, the degree sum, directed networks, weighted edges, route totals.
Handoff: math-s11-n03: "Next: networks from tables and maps".

## Script and shots

Cue words in **bold** trigger the visual change. Colour roles (fixed): vertices blue; edges and arrows amber; weights white on amber; routes teal; degree badges teal; answer green; mistake red. Header strip "NETWORKS, PATHS AND TREES". Scene headings in the hand font, 44 px.

### 1. hook: more than dots and lines
> Here's the delivery van's town. Five stops, and the streets between them. But this network has more on it than dots and lines. Some streets have arrows, because they're one-way, and every street has a number, the minutes it takes to drive. To plan a delivery run, you need all of that. So how do we describe how connected a stop is, and show directions and weights on a **network**?

Visual: opens on n01's final frame exactly (the van, the street network with arrows and minute tags, chips "one-way? how long?", "Next: degree, direction and weight", "?"). On "Five stops" the five dots pulse; on "Some streets have arrows" the arrowheads pulse amber; on "every street has a number" the minute tags pulse. On "network" heading "Degree, direction and weight" writes on (hand font, 56 px).

### 2. degree: how connected is a place?
> Start with connections. The degree of a vertex is the number of edges that meet at it. It tells you how connected that place is. Back on the flight network, count the lines at each city. Perth has three. Darwin has two. Adelaide, Melbourne and Sydney have four each. Brisbane has two, and Hobart has just **one**. So the best-connected cities, the hubs, are the ones with the highest degree. Hobart, with degree one, hangs off the end of the network. If its one route closes, Hobart is cut off **completely**. That's why degree matters. A low degree means a place has few ways in or out. In the van's town, the Café has degree three, with streets to the Bakery, the Depot and the Pharmacy. Notice that degree only counts connections. It says nothing about how far apart the places are.

Visual: stage change (simulation 1): the flight network (n01's tidy drawing, 1,200 px) with grey chip "n01: vertices and edges". On "number of edges that meet at it" Adelaide's four edges glow and a teal badge "deg 4" pins to it (hand tag "degree: lines at a dot"). On each city as said, its edges glow and its badge pins: "3", "2", "4", "4", "4", "2"; on "one" (bold) Hobart's badge "1". On "hubs" the three "4" badges enlarge (hand tag "hub"). On "cut off" Hobart's only edge fades violet and Hobart greys; on "completely" a red tag "cut off". On "the Café has degree three" a small inset of the van's town with the Café's three edges glowing, badge "deg 3". On "how far apart" two edges of very different drawn lengths both show "1 edge".

### 3. the degree sum: a built-in check
> Here's a handy check. Add up all the degrees. Three, two, four, four, one, four and two make twenty. And there are ten edges. Twenty is exactly twice ten, and that's no accident. Every edge has two ends, and each end adds one to the degree of the vertex it touches. So the sum of all the degrees is always twice the number of **edges**. So if you know the degrees, you know the number of edges. Just halve the total. And if your degrees add to an odd number, you've miscounted somewhere. One special case. An edge that loops from a vertex back to itself has both its ends at that vertex, so a loop adds two to its **degree**.

Visual: the network stays (continue). Row, 52 px: "3 + 2 + 4 + 4 + 1 + 4 + 2 = 20". On "twice ten" the token drop runs: each edge in turn flashes and drops one teal token at each end vertex; counters "tokens 0 → 20" and "edges 0 → 10" climb together (hand tag "two ends each"); on "edges" (bold) row "sum of degrees = 2 × number of edges: 20 = 2 × 10" (framed green). On "odd number" a red ghost "19?" flashes and is crossed (caption "recount"). On "loops" a small separate vertex with a loop edge appears; its two ends drop two tokens; on "degree" (bold) badge "loop: +2".

### 4. directed: arrows for one way
> Now direction. On a two-way street, the van can drive either way, so we draw a plain line. On a one-way street, the van can only go one way, so we draw the edge as an arrow. A network with arrows is called a directed network. In the van's town, the van can drive from the Bakery to the Café, but not from the Café back to the Bakery, because the arrow only points one **way**. Between the Bakery and the Pharmacy, the street is two-way, so the arrow points both ways. When you travel through a directed network, you can only follow the arrows. Social apps work like this too. You can follow an account that doesn't follow you back. And when you count connections, it helps to count the arrows coming in and the arrows going out **separately**.

Visual: stage change (simulation 2): the van's street network enlarged (1,300 px), the van badge (about 260 px) at the top left. On "plain line" a two-way edge pulses; on "as an arrow" a one-way edge's arrowhead grows. On "directed network" a chip, 44 px, "directed network: edges are arrows". On "Bakery to the Café" a van icon runs B → C along the arrow (teal trail); on "not from the Café back" the icon tries C → B, bounces off the arrowhead with a red flash "one-way"; on "way" (bold) hand tag "follow the arrows". On "Bakery and the Pharmacy" the B–P edge shows arrowheads at both ends. On "follow an account" two small account dots with a single arrow between them (no faces). On "separately" the Café's arrows split into two colours of tally: "in: 1" and "out: 2" (small, 36 px).

### 5. weighted: numbers on the edges
> Now the numbers. A number written on an edge is called a weight. It can be a distance, a time, or a cost, whatever matters in the problem. Here, the weights are minutes of driving. An edge with a weight is a weighted edge, and a network with arrows and weights is a directed, weighted **network**. Arrows with directions, and numbers for weights. The weight isn't part of the picture's shape. It's information we add because the problem needs it. Here's the van's full run, from the Depot to the Bakery, the Café, the Pharmacy and the Gym, and back to the Depot. Follow the arrows and add the weights. Four, three, two, six and seven make twenty-two **minutes**.

Visual: the network stays (continue). On "called a weight" the minute tags enlarge (white on amber) with chip "weight: distance, time or cost". On "directed, weighted network" (bold cue on "network") a row, 44 px, "directed, weighted network" and the hand tag "arrows with directions and weights". On "Here's the van's full run" the van icon runs D → B → C → P → G → D along the arrows, a trip timer adding "4", "+3", "+2", "+6", "+7"; on "minutes" row "D → B → C → P → G → D: 4 + 3 + 2 + 6 + 7 = 22 min" (framed green).

### 6. reading a directed, weighted network
> Weights also let you compare routes. The van is at the Gym and needs to get to the Café. The Gym's only arrow points to the Depot, seven minutes. From the Depot, the arrow goes to the Bakery, four more. And from the Bakery to the Café, three more. That's fourteen **minutes**, and it's the only legal way. In a directed network, a trip and the trip back can be completely different. From the Bakery to the Café is three minutes. But from the Café back to the Bakery, the van has to go round by the Pharmacy, two plus four, six minutes. Notice one thing. The weight is just a number on the edge. A line drawn long on the page can carry a small weight, and a short line a big one. Always read the number, not the length of the **line**.

Visual: the network stays. On "The Gym's only arrow" G's out-arrow glows and the van icon runs G → D, timer "7"; then D → B "+4"; then B → C "+3"; on "minutes" row "G → D → B → C: 7 + 4 + 3 = 14 min" (framed green). On "only legal way" the icon tries G → P (against P → G), bounces (red flash). On "trip and the trip back" the icon runs B → C ("3"), then C → P → B ("2 + 4 = 6"), with a chip "B → C: 3 min; C → B: 6 min". On "drawn long" a side panel: a long edge tagged "3" beside a short edge tagged "7"; on "line" hand tag "read the number, not the length".

### 7. memory aid
> So here's the network words in one card. Degree, count the lines at a dot. Arrows give the direction, and numbers give the weight. And all the degrees add up to twice the number of **edges**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: a small network with degree badges, one arrow and one weight tag. Main line, hand font 52 px: "Degree: count the lines at a dot. Arrows give direction; numbers give weight." On "edges" the key line, 40 px: "Add all the degrees: you get 2 × the number of edges." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. A network has vertices A, B, C, D and E, with edges A B, A C, A D, B C and D E. Find the degree of each vertex, and check your answers using the number of edges. Pause here to answer.

Visual: `QuestionCard`, 40 px: "A network has vertices A, B, C, D and E and edges A–B, A–C, A–D, B–C and D–E. Find the degree of each vertex, and check your answers using the number of edges." Picture slot: the network drawn without badges. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 9. feedback 1 (brief)
> A touches three edges, so its degree is three. B, C and D each have degree two, and E has degree **one**. The degrees add to ten. There are five edges, and twice five is ten, so the count **checks**. Saying the degrees should add to five, the number of edges, is the **slip**. Every edge has two ends.

Visual: the card shrinks to the top (30 px). On "one" badges pin: "A 3", "B 2", "C 2", "D 2", "E 1". On "checks" the token drop runs quickly; row "3 + 2 + 2 + 2 + 1 = 10 = 2 × 5" (framed green). On "slip" a red slip "degrees add to 5" writes and is crossed (caption "every edge has two ends"). Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. Use the van's directed, weighted network. What's the quickest legal trip from the Pharmacy to the Café? And can the van get from the Gym to the Café without passing the Depot? Pause here to answer.

Visual: `QuestionCard`, 40 px: "Use the van's directed, weighted network (times in minutes). (a) What is the quickest legal trip from the Pharmacy to the Café? (b) Can the van get from the Gym to the Café without passing the Depot?" Picture slot: the full van network with arrows and weights. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> From the Pharmacy, the two-way street to the Bakery takes four minutes, and the Bakery to the Café takes three, so seven **minutes**. That's the quickest. From the Gym, the only arrow leads to the Depot, so the van can't reach the Café without passing the Depot, **no**. Going straight from the Pharmacy to the Café, in two minutes, drives against the arrow, and that's the **slip**.

Visual: the card shrinks to the top; the network stays. On "minutes" the van icon runs P → B → C, row "(a) P → B → C: 4 + 3 = 7 min" (framed green). On "no" G's single out-arrow glows to D, row "(b) No: the Gym's only arrow goes to the Depot" (framed green). On "slip" a red slip "P → C: 2 min" writes and the icon bounces off the C → P arrowhead; it is crossed (caption "against the arrow"). Hold about 1 s.

### 12. handoff: networks from tables and maps
> So that's degree, direction and weight. But where do these networks come from? Usually from a table of distances, or a map with paths and lengths marked on it, like this rail trail and its table. Every number in the table is waiting to become a weighted edge. How do we draw a network from a table or a map, and use it to solve a problem? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame (as under Decisions, "Handoff"): on "a map with paths" the rail trail `ma11-rail-trail-v1.png` (about 1,100 px wide) across the top with five coded stop markers "Trailhead", "Lake", "Mill", "Ridge", "Village"; on "its table" the coded distance table, 36 px, below it; on "Every number" the six numbers pulse. Chip "table → network?". On "next" chips "Next: networks from tables and maps" and "?". Hold about 2 s. This is n03's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Degree: the number of edges at a vertex (a loop adds 2).
- Sum of all degrees = 2 × number of edges.
- Directed network: arrows; travel only along the arrows.
- Weight: a number on an edge (distance, time or cost).
- Route total: add the weights along the route.

Memory aid (framed card, right side, as in scene 7): *Degree: count the lines at a dot. Arrows give direction; numbers give weight.* Key: *Add all the degrees: you get 2 × the number of edges.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and n03's opening frame.

## Teaching checks

- **Does it explain causes?** Why degree measures connectedness (2). Why the sum is twice the edges (3). Why arrows (4). Why weights (5). Why read the number (6).
- **Misconceptions addressed:** sum = edges (3, A1); against arrows (4, A2); length as weight (6); a loop counted once (3).
- **Visual standard, item by item:** 1 the van's town in the first 20 s; 2 a new stage every 40 to 70 s; 3 the token drop with twin counters, the van runner that bounces off arrowheads with a trip timer; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 rows with framed answers and crossed slips; 8 framed card and five bullets; 9 tokens 20 against edges 10, and the van bouncing off a one-way arrow.
- **One idea at a time:** degree (2), the sum (3), direction (4), weight (5), reading (6).
- **Response opportunity:** two unseen tasks with every demand visible (A2 shows the full network); 10 s each; feedback about 21.7 s and 27.9 s.
- **Avoided double teaching:** n01's vertices and edges in a chip; tables and maps left to n03.
- **Syllabus coverage:** `cica79bb9b` (1 to 6, A1, A2; notes 1 to 5): vertex and edge (recalled, used), degree (2, 3, A1), directed networks (4, 6, A2), weighted edges (5, 6, A2).
- **Year 12 set-up:** "arrows with directions and weights" (hand tag, scene 5; c01a's chip) and "directed, weighted network" (row, scene 5; f01's chip).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original HSC style, 2 marks suggested, not an official marking scheme).** As on the card.
Model answer: A 3, B 2, C 2, D 2, E 1; sum 10 = 2 × 5 edges. Classic mistake (crossed): "degrees add to 5".

**Attempt 2 (scene 10; pack question 2, 2 marks suggested).** As on the card.
Model answer: (a) P → B → C, 4 + 3 = 7 min. (b) No: the Gym's only arrow leads to the Depot. Classic mistake (crossed): "P → C: 2 min".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Flight degrees | 3, 2, 4, 4, 1, 4, 2; sum 20; 10 edges | 2, 3 |
| Van run | 22 min | 5 |
| Gym to Café | 14 min | 6 |
| A1 | 3, 2, 2, 2, 1; 10 = 2 × 5 | 8, 9 |
| A2 | 7 min; no; slip 2 min | 10, 11 |
| Café back to Bakery | 2 + 4 = 6 min | 6 |

## Numbers to verify (all values, repeated for Codex)

Recalculated (24 Nov 2026, scratchpad `s11n/verify.py`, `python -I`; 0 failures); Codex to re-check.

- Flight degrees sum to 20 = 2 × 10.
- 4 + 3 + 2 + 6 + 7 = 22. 7 + 4 + 3 = 14 (the only legal Gym to Café route). C → P → B = 2 + 4 = 6 (quickest back; C → D → B = 9). P → B → C = 4 + 3 = 7 (quickest; P → G → D → B → C = 20); P → C (against the arrow) = 2.
- A1: 3 + 2 + 2 + 2 + 1 = 10 = 2 × 5.

## Memory aid check

- **"Degree: count the lines at a dot. Arrows give direction; numbers give weight."** with key line **"Add all the degrees: you get 2 × the number of edges."** Original (the sum from the site's card 06). Meaning, as said in scene 7. Assumptions checked: a loop counts 2 (3); in a directed network the degree counts arrows in and out (4). It helps a new case: a network with degrees 3, 3, 2, 2 has (3 + 3 + 2 + 2) ÷ 2 = 5 edges.
- **Considered, not used:** "in-degree, out-degree" as named terms (not in the 2024 point; the plain counts are said once).

## Narration length estimate

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; `work/brief-review-s11-e/count.py`): **5,573 characters**, 13 scene headings. Characters per scene (1 to 13): 378, 777, 617, 735, 654, 726, 187, 194, 289, 207, 371, 351, 75. Feedback speech about 21.7 s and 27.9 s.

At 13.3 characters per second the speech is about 419 s. Holds and settling: two 10 s countdowns (20 s); short holds 6 s; settling for the token drop (3) and the van runner (4 to 6), about 16 s; the key-notes scene adds about 39 s beyond its line. Total **about 500 s**, 70 s under the 570 s cap.

Reserve trims if the voiced take runs long: scene 4's social-app sentences; scene 2's last sentence.

## Scene list and build ids

Lesson key `m-s11n02` (route math-s11-n02). Explainer folder `src/explainer/lessons/math-s11-n02`; build inputs in `docs/production/claude-pm/lessons/math-s11-n02/` (at voicing).

In order (13 scene headings): hook-more-than-lines, degree, degree-sum, directed, weighted, reading-routes, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 30 s | 1 | The van's town |
| 30 to 92 s | 2 | Degree badges on the flight network |
| 92 to 140 s | 3 | The token drop |
| 140 to 205 s | 4 | Arrows and the van runner |
| 205 to 260 s | 5 | Weights and the full run |
| 260 to 300 s | 6 | Gym to Café; number not length |
| 300 to 316 s | 7 | Framed memory card |
| 316 to 400 s | 8 to 11 | Question cards and countdowns, then feedback |
| 400 to 430 s | 12 | The rail trail and its table |
| 430 to 475 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: n01's last frame continues into 1; 1 to 2 stage change; 2 to 3 continue; 3 to 4 stage change; 4 to 5 continue; 5 to 6 continue; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s11-n02-learning-review.md`, `science_check` = `checks/m-s11-n02-maths-check.md`.

## Assets

Inspected before choosing (24 Nov 2026, viewed on a contact sheet): `ma12-delivery-van-v1.png`; `ma11-rail-trail-v1.png`.

Need: none new. Reused: the two plates above.

Coded: the networks, badges, tokens and counters, the van icon and timer, account dots, the distance table, the boards, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `NetworkBoard` (n01), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row n02):
1. **`NetworkBoard` degree badges and token drop**: live degree badges per vertex; each edge drops a token at both ends with twin counters (tokens, edges). Check: flight network 20 and 10; A1 10 and 5.
2. **`NetworkBoard` directed and weighted mode with a runner**: arrowheads (one-way or both ways), weight tags, a vehicle icon that moves along edges, bounces off an arrowhead when sent against it, and a trip timer that adds weights. Check: D→B→C→P→G→D = 22; G→D→B→C = 14; C→B blocked. Reused n03, n06, n07.

## Codex asset brief

No new plate. Both plates exist and were viewed.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", including that G → D → B → C is the only legal route from the Gym to the Café.
2. Confirm the syllabus quote matches the route-inputs JSON exactly.
3. Confirm the hand tag "arrows with directions and weights" and the row "directed, weighted network" appear on screen (Year 12 c01a and f01 recall them).
4. Confirm both attempts carry every demand and show no answer.
5. Confirm scene 1 opens on n01's final frame exactly and scene 12 matches n03's Boundary.
6. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Network Words: Degree, Directed and Weighted | Year 11 Maths Standard

(Title length: 70 characters.)

Description: Related lesson notes: https://hscscience.com.au/subjects/maths-standard/year11/networks-paths-and-trees/lesson01.sa.html

A delivery van meets one-way streets and travel times. Learn what the degree of a vertex tells you, why all the degrees add to twice the number of edges, how arrows make a directed network, how weights on edges show distance, time or cost, and how to read a route through a directed, weighted network. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 11, Networks, paths and trees. For Standard 1 and Standard 2.
Syllabus content (NSW Mathematics Standard 11-12, 2024, Year 11):
"Define and use the network terminology: vertex, edge, degree, directed networks and weighted edges"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fabf235394

Builds on: Networks: Dots, Lines and Real-World Maps. Next: Drawing Networks from Tables and Maps.

#Year11Maths #MathsStandard #Networks #HSCScience

## Open decisions

- **1. Loops.** Kept to one sentence and one picture (the site teaches them; the 2024 point does not name them). Root may cut the sentence (scene 3) without any other change.

## Review notes

- Revision 1. Next: student learning review (trace from n01; check that degree is defined before the badges count, that the token drop explains "twice" before the rule, that arrows and weights each get their own stage, that "arrows with directions and weights" is on screen, and that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
