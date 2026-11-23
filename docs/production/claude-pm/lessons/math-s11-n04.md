# Maths S11 N04: What are paths, trees and spanning trees? A path never repeats a vertex, a cycle loops back, a tree connects everything with no cycles, a spanning tree reaches every vertex, and the minimum spanning tree has the smallest total (design)

Status: Revision 1 (24 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), `math-s11-n01.md` to `n03.md` (Revision 1, this batch), the coherence audit and root's Standard rulings 1 to 99. Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,475 characters by script (see "Narration length estimate"), 13 scene headings, about 493 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: fourth video of the Year 11 Networks, paths and trees strand, outline playlist order 57. One video for Standard 1 and Standard 2. Viewers arrive from n03's final frame. Pre-design pack: `../pre-design/maths-standard/math-s11-n04.md`. Route entry: `math-s11-n04` in `../../programme/maths-standard-route-inputs-13.json`. Site lessons: lesson03 (the path definition only); lesson04 (trees, spanning trees). Visual system: maths studio kit; the hiking valley and phone tower plates (existing); the networks coded.

Owner rules applied: as n01 (header strip "NETWORKS, PATHS AND TREES" only; one question; one stage at a time; plain meanings; two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors; no people; Australian spelling; no em dashes).

Syllabus content point (Mathematics Standard 11-12 (2024), Year 11, Networks, paths and trees, "Shortest paths and spanning trees", common to Standard 1 and Standard 2), quoted from `../../programme/maths-standard-route-inputs-13.json`:

- `ci0eb52b4b`: "Define and use the network terminology: path, tree, spanning tree and minimum spanning tree"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fabf235394

**Boundary:** starts from n03's final frame exactly (the hiking valley `ma12-hiking-valley-v1.png`, about 1,100 px wide, with five coded cabin dots "A" to "E" (blue) and seven amber path edges with metre tags "40", "60", "30", "50", "45", "70", "35"; a coded lamp icon at the top right; chips "light every cabin, least path?", "Next: paths, trees and spanning trees" and "?"). Recalls n02 (weights; route totals) in a grey chip. Teaches: path; cycle; tree; spanning tree; minimum spanning tree (defined). Not taught: a method for the minimum spanning tree (n05); shortest paths (n06).

## Decisions

- **Anchor: lighting the camp's paths (n03's frame).** Every cabin reachable in the light, with as little lit path as possible. The four words are introduced because this problem needs them.
- **Path, then cycle, each with a walker.** A walker icon steps along edges; a repeated vertex flashes red (not a path). A cycle is a path that returns to its start: wasteful for lighting, because one of its edges could be switched off and every cabin would still be reachable the other way round.
- **Tree: connected, no cycles.** It branches but never joins back; exactly one path between any two vertices. The count "5 vertices, 4 edges" is noticed and offered as a drawing check (the site flags n − 1 as beyond the syllabus).
- **Spanning tree: a tree inside the network that reaches every vertex.** Two examples (150 m and 215 m) and two near misses (misses a cabin; has a cycle). A carousel shows that this small network has 21 spanning trees (visual surprise).
- **Minimum spanning tree: defined, not found.** The smallest total; the method is n05's (Year 11 point `cicce79437`).
- **Simulations (standard item 3).**
  1. **Path walker** (scenes 2, 3, feedback 1): the walker steps vertex to vertex with a running length; visited vertices fill; a revisit flashes red with "already been here".
  2. **Tree grower and switch-off** (scenes 3, 4): lit edges glow on the faint full network; switching off one edge of a cycle keeps every cabin lit (a reachability glow spreads); a tree grows edge by edge.
  3. **Spanning-tree carousel** (scenes 5, 6): spanning trees cycle across the network with their totals stacking in a bar list; a counter climbs to 21; the shortest bar is ringed but the question "the smallest?" stays open.
- **Colour roles (fixed n01 to n07).** Vertices blue; network edges amber (faint when unlit); lit (chosen) edges teal; cycles pulse violet; answer green; mistake red.
- **Large type, handwritten voice.** Labels 40 px; working 52 px; nothing below 26 px; all text above y = 950. Hand tags: "no vertex twice", "loops back", "switch one off", "connected, no cycles", "5 vertices, 4 edges", "reaches every vertex", "misses E", "has a cycle", "smallest total". At most two live at once.
- **Stage changes (standard item 2).** The camp map (1); the path walker (2); the cycle and switch-off (3); the tree (4); spanning trees and near misses (5); the carousel and the minimum (6); framed card (7); question cards (8 to 11); the phone towers (12); key notes (13).
- **Worked examples (g01 order).** Scene 2: "A → B → D → E: 40 + 50 + 35 = 125 m" (framed green); crossed "A → B → C → B → D" (caption "B twice: not a path"). Scene 3: "B → C → D → B: 30 + 45 + 50 = 125 m (a cycle)". Scene 5: "A–B, B–C, C–D, D–E: 150 m" (framed green); "A–C, C–E, E–D, D–B: 215 m" (framed green). Scene 6: "21 spanning trees; the smallest total is the minimum spanning tree".
- **Memory aid.** Framed card: "A tree reaches everything and never loops back." Key line: "Path: no vertex twice. Spanning tree: a tree through every vertex. Minimum spanning tree: the smallest total weight."
- **Plain meanings at first use.** Path ("a route along edges that never visits the same vertex twice"); cycle ("a path that comes back to where it started"); tree ("a connected network with no cycles"); spanning tree ("a tree made of the network's edges that reaches every vertex"); minimum spanning tree ("the spanning tree with the smallest total weight").
- **Attempts.** A1 (pack question 1): (a) yes, 140 m; (b) no; crossed "(b) yes, every step uses an edge" (caption "D twice"). A2 (pack question 2): (iii), 195 m; crossed "(ii): it reaches every cabin" (caption "it has a cycle").
- **Mistake scene:** none separate. Revisits (2, A1); cycles in "trees" (5, A2); missing vertices (5, A2); one spanning tree only (6); MST as a shortest path (6, said; n07).
- **Cause chain taught, in order:** (1) a path can't revisit a vertex, so doubling back breaks it (2); (2) a cycle gives two ways round, so one of its edges is spare (3); (3) a connected network with no spare edges is a tree, with exactly one path between any two vertices (4); (4) a tree inside a network that reaches every vertex links everything with no spare edges: a spanning tree (5); (5) different spanning trees have different totals, so the cheapest is the minimum spanning tree (6).
- **Entry knowledge (route):** math-s11-n02, n03 (weights; tables and maps). Recalled in a grey chip.
- **Site notes.** lesson04 recalculated: no error. MSY-31 (MST defined only in lesson05).
- **Handoff (to math-s11-n05, minimum spanning trees).** Scene 12: board clear; the phone tower `ma11-phone-tower-v1.png` (about 460 px tall) at the left; at the right a coded network of five tower icons "A" to "E" (blue) with seven amber links tagged in km: A–B "8", A–C "3", B–C "5", B–D "7", C–D "2", C–E "6", D–E "4"; chips "link every tower, least cable?", "Next: minimum spanning trees" and "?". n05 opens on this frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Camp (example metres): A–B 40, A–C 60, B–C 30, B–D 50, C–D 45, C–E 70, D–E 35.
  (b) Path A–B–D–E 125; cycle B–C–D 125; spanning trees 150 (A–B, B–C, C–D, D–E; the unique minimum, by search) and 215 (A–C, C–E, D–E, B–D). 21 spanning trees in all (search over 4-edge subsets with no cycle); the three smallest totals 150, 155, 170.
  (c) A1: E–D–C–A = 35 + 45 + 60 = 140; E–D–B–C–D repeats D. A2: (iii) = 60 + 30 + 70 + 35 = 195; (i) misses E; (ii) contains B–C–D.

Main question: *A camp wants to light every cabin with the least path. What are paths, trees and spanning trees?*
Entry knowledge (math-s11-n02, n03): weights; route totals.
Stops after: path, cycle, tree, spanning tree, minimum spanning tree.
Handoff: math-s11-n05: "Next: minimum spanning trees".

## Script and shots

Cue words in **bold** trigger the visual change. Colour roles (fixed): vertices blue; edges amber (faint when unlit); chosen edges teal; cycles violet; answer green; mistake red. Header strip "NETWORKS, PATHS AND TREES". Scene headings in the hand font, 44 px.

### 1. hook: lighting the camp
> Here's the school camp. Five cabins, A to E, and seven paths between them, with their lengths in metres. The camp wants to light paths at night, so you can walk from any cabin to any other in the light. But lighting costs money, so it wants to light as little path as possible. Seven paths is more than the camp needs. To solve it, we need some words that describe routes and shapes inside a network. Paths, cycles, trees and spanning trees. So what are paths, trees and spanning **trees**?

Visual: opens on n03's final frame exactly (the valley, cabins A to E, seven edges with metre tags, the lamp icon, chips "light every cabin, least path?", "Next: paths, trees and spanning trees", "?"). On "light paths at night" the plate dims to dusk and the lamp icon glows; on "any cabin to any other" a soft light runs along two edges and fades. On "as little path as possible" a small meter "lit: 0 m" appears at the top right. On "Paths, cycles, trees" four small word chips line up; on "trees" (bold) heading "Paths, trees and spanning trees" writes on (hand font, 56 px).

### 2. a path: never the same vertex twice
> Start with a path. A path is a route along the edges that never visits the same vertex twice. From A, go to B, then D, then E. Every step follows an edge, and no cabin repeats, so A, B, D, E is a **path**. Its length is the sum of its weights, forty plus fifty plus thirty-five, a hundred and twenty-five metres. Now try A, B, C, B, D. Each step follows an edge, but it visits B twice, doubling back, so it's not a path. It's just a wander around the **camp**. A path never goes back to somewhere it's already been. And it has a start and an end. This one starts at A and ends at E.

Visual: stage change (simulation 1): the camp network enlarged (1,300 px) over the dimmed plate. On "never visits the same vertex twice" hand tag "no vertex twice". On "From A" the walker icon (a small lantern, no figure) steps A → B → D → E; each visited cabin fills; a running length "40", "+50", "+35"; on "path" (first bold) row "A → B → D → E" (teal); on "a hundred and twenty-five metres" "= 125 m" (framed green). On "Now try" the walker resets and steps A → B → C → B; on the second B the cabin flashes red with "already been here"; on "camp" a red slip "A → B → C → B → D" is crossed (caption "B twice: not a path"). On "starts at A and ends at E" tags "start" and "end".

### 3. a cycle: back to the start
> If a path comes back to where it started, it's called a cycle. B to C, C to D, and D back to B is a cycle. It's a loop you could walk round and round, thirty plus forty-five plus fifty, a hundred and twenty-five metres of light going in a circle. For lighting, a cycle is wasteful. If every edge of a cycle is lit, you could switch one of them off, and every cabin would still be reachable the other way round the **loop**. Any network with a cycle has a spare edge somewhere. So a cheap lighting plan should have no cycles at all.

Visual: the network stays (continue; simulation 2). On "B to C, C to D, and D back to B" the three edges light teal in turn and then pulse violet together (hand tag "loops back"); row "B → C → D → B: 30 + 45 + 50 = 125 m (a cycle)". On "switch one of them off" the D–B edge fades; on "the other way round" a reachability glow runs B → C → D (hand tag "switch one off"); on "loop" (bold) all three cabins stay lit.

### 4. a tree: connected, no cycles
> That leads to a tree. A tree is a network that's connected, so you can get from any vertex to any other, and has no cycles. It's called a tree because it branches out like one, but its branches never join back up. Here's one. A to B, B to C, C to D and D to E. Everything's connected, and there's no loop anywhere. In a tree, there's exactly one path between any two vertices, so nothing is doubled up. Delete any one edge of a tree, and it falls into two pieces. Water pipes from a dam to farm troughs are often laid as a tree, because a loop would be wasted pipe. You'll notice something else. Five vertices, and four edges. A tree always has one edge fewer than it has **vertices**, which makes a handy check on your drawing.

Visual: stage change (simulation 2): the faint full network; on "Here's one" the tree grows edge by edge in teal: A–B, B–C, C–D, D–E (hand tag "connected, no cycles"). On "exactly one path" two cabins (A and E) ring and the single teal route between them glows. On "Water pipes" a small coded inset: a dam outline branching pipes to three trough icons. On "Five vertices, and four edges" counters "vertices 5", "edges 4"; on "vertices" (bold) hand tag "5 vertices, 4 edges". On "Delete any one edge" the C–D edge fades and the tree splits into two coloured groups {A, B, C} and {D, E}, then the edge returns.

### 5. a spanning tree: reaching every vertex
> Now put a tree inside a bigger network. A spanning tree is a tree that uses only the network's own edges, and reaches every one of its vertices. It spans the whole network. The tree we just drew is a spanning tree of the camp network, and its lit length is forty plus thirty plus forty-five plus thirty-five, a hundred and fifty metres. But it's not the only one. Here's another. A to C, C to E, E to D and D to B. It reaches every cabin and it has no cycle, so it's a spanning tree too, and it's two hundred and fifteen **metres**. Both reach all five cabins with four edges. Watch out for two near misses. If a set of edges misses a cabin, it isn't spanning. And if it has a cycle, it isn't a **tree**.

Visual: stage change: the full camp network faint, the plate dimmed behind. On "spanning tree" chip, 44 px, "spanning tree: a tree through every vertex" (hand tag "reaches every vertex"). On "The tree we just drew" its four edges light teal; the lit meter reads "40 + 30 + 45 + 35 = 150 m" (framed green). On "Here's another" the teal edges swap to A–C, C–E, E–D, D–B; meter "60 + 70 + 35 + 50 = 215 m"; on "metres" (bold) framed green. On "misses a cabin" a small panel: A–B, B–C, C–D lit, E greyed with a red tag "misses E". On "has a cycle" a second panel: A–B, B–C, C–D, D–B, D–E lit with B–C–D pulsing violet, red tag "has a cycle"; on "tree" (bold) both panels gain crosses.

### 6. the minimum spanning tree
> So a network can have many spanning trees, each with its own total weight. This small camp network has twenty-one of them. The one with the smallest total is called the minimum spanning tree. For the camp, it's the cheapest way to light a route to every cabin. Of our two, a hundred and fifty metres beats two hundred and fifteen. But is a hundred and fifty the smallest possible? Checking every spanning tree one by one would take far too long on a big network. That's why minimum spanning trees matter for real jobs, like cables, pipes and power lines, where every metre costs. And notice, the minimum spanning tree is about linking everything. It isn't the shortest way from one cabin to another. That's a different question, and we'll come back to it. There's a neat method that finds the minimum spanning tree directly, and that's coming **up**.

Visual: stage change (simulation 3): the carousel: spanning trees flick across the faint network (about 3 per second at first), each dropping a bar with its total into a list at the right; a counter climbs "1, 2, ... 21". On "smallest total" chip, 44 px, "minimum spanning tree: the smallest total weight" (hand tag "smallest total"). On "a hundred and fifty metres beats" the 150 bar and the 215 bar ring. On "the smallest possible" a "?" hovers over the bar list (the shortest bar is not yet confirmed on screen). On "cables, pipes and power lines" three small coded icons (a cable reel, a pipe, a power pole outline). On "isn't the shortest way" grey chip "n06, n07: shortest paths, a different question". On "up" chip "n05: a method".

### 7. memory aid
> So here's the tree words in one card. A path never visits a vertex twice. A tree reaches everything and never loops back. A spanning tree is a tree that reaches every vertex, and the minimum spanning tree has the smallest total **weight**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the camp network with one spanning tree lit teal. Main line, hand font 56 px: "A tree reaches everything and never loops back." On "weight" the key line, 40 px: "Path: no vertex twice. Spanning tree: a tree through every vertex. Minimum spanning tree: the smallest total weight." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. In the camp network, is E, D, C, A a path, and if it is, how long is it? And is E, D, B, C, D a path? Pause here to answer.

Visual: `QuestionCard`, 40 px: "In the camp network: (a) Is E → D → C → A a path? If so, find its length. (b) Is E → D → B → C → D a path?" Picture slot: the camp network with weights. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 9. feedback 1 (brief)
> E, D, C, A follows the edges and never repeats a cabin, so yes, it's a path. Its length is thirty-five plus forty-five plus sixty, a hundred and forty **metres**. E, D, B, C, D visits D twice, so it's not a **path**. Saying it is, because every step uses an edge, is the **slip**.

Visual: the card shrinks to the top (30 px). The walker runs E → D → C → A; on "metres" row "(a) yes: 35 + 45 + 60 = 140 m" (framed green). The walker runs E → D → B → C → D; D flashes red; on "path" row "(b) no: D twice" (framed green). On "slip" a red slip "(b) yes, every step uses an edge" writes and is crossed (caption "D twice"). Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. Here are three sets of edges from the camp network. Which one is a spanning tree, and what's its total length? Pause here to answer.

Visual: `QuestionCard`, 40 px: "Three sets of edges from the camp network are shown. Which one is a spanning tree? Find its total length." Picture slot: three small copies of the camp network with lit edges: (i) A–B, B–C, C–D; (ii) A–B, B–C, C–D, D–B, D–E; (iii) A–C, B–C, C–E, D–E; weights shown on all edges. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> The first one misses cabin E, so it isn't spanning. The second reaches every cabin, but B, C, D makes a cycle, so it isn't a tree. The third reaches all five cabins with four edges and no cycle, so it's the spanning **tree**. Its length is sixty plus thirty plus seventy plus thirty-five, a hundred and ninety-five **metres**. Picking the second, because it reaches every cabin, is the **slip**.

Visual: the card shrinks to the top. Panel (i) gains a red tag "misses E"; panel (ii) pulses B–C–D violet with "has a cycle"; on "tree" panel (iii) rings green. On "metres" row "(iii): 60 + 30 + 70 + 35 = 195 m" (framed green). On "slip" a red slip "(ii): it reaches every cabin" writes and is crossed (caption "it has a cycle"). Hold about 1 s.

### 12. handoff: minimum spanning trees
> So that's paths, trees and spanning trees. Now the real question. Of all the spanning trees a network has, how do we find the one with the smallest total, quickly and reliably? Here's a phone company linking five towers with fibre cable, and every kilometre costs money. Which links should it lay? How a minimum spanning tree connects everything for the least cost is **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame (as under Decisions, "Handoff"): on "phone company" the phone tower `ma11-phone-tower-v1.png` (about 460 px tall) at the left; on "five towers" five coded tower icons "A" to "E" at the right; on "fibre cable" seven amber links draw with km tags "8", "3", "5", "7", "2", "6", "4". Chip "link every tower, least cable?". On "next" chips "Next: minimum spanning trees" and "?". Hold about 2 s. This is n05's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Path: a route along edges with no vertex visited twice.
- Cycle: a path that returns to its start.
- Tree: connected with no cycles (n vertices, n − 1 edges).
- Spanning tree: a tree of the network's edges reaching every vertex.
- Minimum spanning tree: the spanning tree with the smallest total weight.

Memory aid (framed card, right side, as in scene 7): *A tree reaches everything and never loops back.* Key: *Path: no vertex twice. Spanning tree: a tree through every vertex. Minimum spanning tree: the smallest total weight.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and n05's opening frame.

## Teaching checks

- **Does it explain causes?** Why a revisit breaks a path (2). Why cycles waste (3). Why a tree has exactly one path between two vertices (4). Why spanning trees link everything with nothing spare (5). Why there's a minimum (6).
- **Misconceptions addressed:** revisits (2, A1); a cycle in a "tree" (5, A2); a missed vertex (5, A2); one spanning tree only (6).
- **Visual standard, item by item:** 1 the camp in the first 20 s; 2 a new stage every 40 to 70 s; 3 the path walker flagging revisits, the switch-off reachability glow, the carousel counting 21 spanning trees; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 rows with framed answers and crossed slips; 8 framed card and five bullets; 9 twenty-one spanning trees flicking past.
- **One idea at a time:** path (2), cycle (3), tree (4), spanning tree (5), minimum spanning tree (6).
- **Response opportunity:** two unseen tasks with every demand visible; 10 s each; feedback about 20.2 s and 28.8 s.
- **Avoided double teaching:** the method left to n05; shortest paths to n06.
- **Syllabus coverage:** `ci0eb52b4b` (2 to 6, A1, A2; notes 1 to 5): path, tree, spanning tree, minimum spanning tree, defined and used.
- **Out of scope by design:** walks, trails, circuits, Eulerian and Hamiltonian ideas (2017 content); leaves.

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original HSC style, 2 marks suggested, not an official marking scheme).** As on the card.
Model answer: (a) yes: 35 + 45 + 60 = 140 m. (b) No: D is visited twice. Classic mistake (crossed): "(b) yes, every step uses an edge".

**Attempt 2 (scene 10; pack question 2, 2 marks suggested).** As on the card.
Model answer: (iii); 60 + 30 + 70 + 35 = 195 m ((i) misses E; (ii) has the cycle B–C–D). Classic mistake (crossed): "(ii): it reaches every cabin".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Path A–B–D–E | 125 m | 2 |
| Cycle B–C–D | 125 m | 3 |
| Tree counts | 5 vertices, 4 edges | 4 |
| Spanning trees | 150 m; 215 m; 21 in all | 5, 6 |
| A1 | 140 m; no | 8, 9 |
| A2 | (iii); 195 m | 10, 11 |
| Towers (handoff) | 8, 3, 5, 7, 2, 6, 4 km | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated (24 Nov 2026, scratchpad `s11n/verify.py` and an inline count, `python -I`; 0 failures); Codex to re-check.

- 40 + 50 + 35 = 125; 30 + 45 + 50 = 125; 40 + 30 + 45 + 35 = 150; 60 + 70 + 35 + 50 = 215.
- The camp network has 21 spanning trees; the smallest total is 150 (unique).
- A1: 35 + 45 + 60 = 140. A2: 60 + 30 + 70 + 35 = 195; (iii) is connected with no cycle.

## Memory aid check

- **"A tree reaches everything and never loops back."** with key line **"Path: no vertex twice. Spanning tree: a tree through every vertex. Minimum spanning tree: the smallest total weight."** Original. Meaning, as said in scene 7. Assumptions checked: "reaches everything" means connected (within the tree itself); for a spanning tree, every vertex of the network (5). It helps a new case: a set of 6 edges on 7 towns with no loop that joins all 7 is a spanning tree.
- **Considered, not used:** "n − 1 edges" as the main line (the site marks it beyond the syllabus; it stays as a check in note 3).

## Narration length estimate

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; `work/brief-review-s11-e/count.py`): **5,475 characters**, 13 scene headings. Characters per scene (1 to 13): 486, 574, 527, 724, 696, 846, 235, 134, 268, 142, 383, 373, 75. Feedback speech about 20.2 s and 28.8 s.

At 13.3 characters per second the speech is about 412 s. Holds and settling: two 10 s countdowns (20 s); short holds 6 s; settling for the walker (2), the tree (4) and the carousel (6), about 16 s; the key-notes scene adds about 39 s beyond its line. Total **about 493 s**, 77 s under the 570 s cap.

Reserve trims if the voiced take runs long: scene 4's water-pipe sentence; scene 2's last two sentences.

## Scene list and build ids

Lesson key `m-s11n04` (route math-s11-n04). Explainer folder `src/explainer/lessons/math-s11-n04`; build inputs in `docs/production/claude-pm/lessons/math-s11-n04/` (at voicing).

In order (13 scene headings): hook-lighting-camp, path, cycle, tree, spanning-tree, minimum-spanning-tree, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 35 s | 1 | The camp at dusk |
| 35 to 90 s | 2 | The path walker |
| 90 to 125 s | 3 | The cycle and the switch-off |
| 125 to 180 s | 4 | The tree grows |
| 180 to 240 s | 5 | Spanning trees and near misses |
| 240 to 280 s | 6 | The carousel of 21 |
| 280 to 297 s | 7 | Framed memory card |
| 297 to 380 s | 8 to 11 | Question cards and countdowns, then feedback |
| 380 to 410 s | 12 | The phone towers |
| 410 to 455 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: n03's last frame continues into 1; 1 to 2 the network enlarges; 2 to 3 continue; 3 to 4 stage change; 4 to 5 stage change; 5 to 6 stage change; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s11-n04-learning-review.md`, `science_check` = `checks/m-s11-n04-maths-check.md`.

## Assets

Inspected before choosing (24 Nov 2026, viewed on contact sheets): `ma12-hiking-valley-v1.png`; `ma11-phone-tower-v1.png`.

Need: none new. Reused: the two plates above.

Coded: the camp network, cabins, lamp and meter, the walker (a lantern icon, no figure), the reachability glow, the dam and trough inset, the carousel and bars, near-miss panels, the tower network, the boards, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `NetworkBoard` (n01, n02), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row n04):
1. **`NetworkBoard` path walker**: a lantern icon stepping along a vertex list with a running total; a revisit flashes red. Check: A–B–D–E 125; A–B–C–B flagged at B; E–D–C–A 140; E–D–B–C–D flagged at D.
2. **`NetworkBoard` subgraph overlay**: lit edges teal over a faint network with a total meter; a cycle detector pulses any cycle violet; a reachability glow. Check: 150, 215, 195; B–C–D flagged.
3. **`SpanningTreeCarousel`**: enumerates spanning trees from the edge list, flicks them over the network and stacks their totals. Check: 21 trees; smallest 150. Reused in n05 (to confirm the minimum after the method).

## Codex asset brief

No new plate. Both plates exist and were viewed.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", including the count of 21 spanning trees.
2. Confirm the syllabus quote matches the route-inputs JSON exactly.
3. Confirm the definitions match the 2024 syllabus glossary for path, tree, spanning tree and minimum spanning tree (path: no repeated vertices).
4. Confirm both attempts carry every demand and show no answer.
5. Confirm scene 1 opens on n03's final frame exactly and scene 12 matches n05's Boundary.
6. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Paths, Trees and Spanning Trees | Year 11 Maths Standard

(Title length: 57 characters.)

Description: Related lesson notes: https://hscscience.com.au/subjects/maths-standard/year11/networks-paths-and-trees/lesson04.sa.html

A school camp wants to light paths so every cabin can be reached, using as little lighting as possible. Learn what a path is (no vertex twice), what a cycle is and why it wastes, what makes a network a tree, what a spanning tree is (and two near misses), and what the minimum spanning tree means. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 11, Networks, paths and trees. For Standard 1 and Standard 2.
Syllabus content (NSW Mathematics Standard 11-12, 2024, Year 11):
"Define and use the network terminology: path, tree, spanning tree and minimum spanning tree"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fabf235394

Builds on: Drawing Networks from Tables and Maps. Next: Minimum Spanning Trees: Connecting Everything for Less.

#Year11Maths #MathsStandard #SpanningTrees #HSCScience

## Open decisions

- **1. The n − 1 check.** Kept as a noticed fact and a drawing check (note 3), as the site frames it. Root may drop it from note 3 if the reviewers find it reads as a rule to state.

## Review notes

- Revision 1. Next: student learning review (trace from n03; check that the lighting problem motivates each word, that the walker makes "no vertex twice" visible, that the switch-off shows why cycles waste, that the near misses come before the attempts, that "minimum" is defined without the method, and that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
