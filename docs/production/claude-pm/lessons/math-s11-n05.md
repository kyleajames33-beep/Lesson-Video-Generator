# Maths S11 N05: How does a minimum spanning tree connect everything for the least cost? Cheapest link first, skip any link that closes a cycle, stop when everything is joined; the cost saved, a second method with the same total, and the camp's lights confirmed (design)

Status: Revision 2 (24 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (24 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), `math-s11-n01.md` to `n04.md` (Revision 1, this batch), the coherence audit and root's Standard rulings 1 to 99. Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,458 characters by script (see "Narration length estimate"; Revision 2), 13 scene headings, about 493 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: fifth video of the Year 11 Networks, paths and trees strand, outline playlist order 58. One video for Standard 1 and Standard 2. Viewers arrive from n04's final frame. Pre-design pack: `../pre-design/maths-standard/math-s11-n05.md`. Route entry: `math-s11-n05` in `../../programme/maths-standard-route-inputs-13.json`. Site lesson: `year11/networks-paths-and-trees/lesson05.sa.html` (Kruskal's and Prim's steps, WE1 to WE3). Visual system: maths studio kit; the phone tower, hiking valley, country town and delivery van plates (existing); networks and lists coded.

Owner rules applied: as n01 (header strip "NETWORKS, PATHS AND TREES" only; one question; one stage at a time; plain meanings; two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors; no people; Australian spelling; no em dashes).

Syllabus content points (Mathematics Standard 11-12 (2024), Year 11, Networks, paths and trees, "Shortest paths and spanning trees", common to Standard 1 and Standard 2), quoted from `../../programme/maths-standard-route-inputs-13.json`:

- `cicce79437`: "Determine the minimum spanning tree of a network with weighted edges, using any method"
- `cif65754dc`: "Use minimum spanning trees to solve minimal connector problems"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fabf235394

**Boundary:** starts from n04's final frame exactly (the phone tower `ma11-phone-tower-v1.png`, about 460 px tall, at the left; five coded tower icons "A" to "E" at the right with seven amber links tagged in km: A–B "8", A–C "3", B–C "5", B–D "7", C–D "2", C–E "6", D–E "4"; chips "link every tower, least cable?", "Next: minimum spanning trees" and "?"). Recalls n04 (cycle, spanning tree, minimum spanning tree; the camp's 150 m) in grey chips. Teaches: a method for the minimum spanning tree (cheapest first, skip cycles, stop at one fewer link than vertices); minimal connector problems with a cost; a second method with the same total; the camp confirmed. Not taught: shortest paths (n06, n07).

## Revision 2: learning review resolved (24 Nov 2026)

Source review: `../checks/m-s11-n05-learning-review.md`; resolution record `../checks/m-s11-t-n-learning-review-resolution.md`.

- **N05-TIE (should fix, root's ruling 9): accepted.** Feedback 2 now names both length-7 links and the tie: "Two links tie at seven. A B closes A, B, C, so skip it. E F brings in F, so keep it." The sorted list shows both 7s (A–B and E–F); A–B flashes its cycle A–B–C and greys (hand tag "a tie: either order"). Checked by listing all spanning trees: 21 km is unique (next 22), and taking the tied 7s in either order gives the same tree. To stay under 30 s, "because it joins the two groups" is cut and the slip line is shortened ("Keeping B D, for twenty, makes a loop and leaves F out. That's the slip."): 379 characters, about 28.5 s (Revision 1: 374, 28.1 s). The model answer and author note (e) name the tie.
- **N05-DIRECT (note): applied by cutting the clause.** Scene 4 ends "every tower can still reach every other, through the tree." In this network each skipped link ties with its tree route, so "not always by the most direct route" had no true picture here; n07 teaches that contrast with a real example. The A → C → D → E glow and its chip are replaced by the tree's links pulsing in turn.
- No other number changed. Joins unchanged.
- Narration 5,458 characters (Revision 1: 5,495); about 493 s with holds, under the 570 s cap. Review file reference unchanged (`checks/m-s11-n05-learning-review.md` already matches).

## Decisions

- **Anchor: fibre to five towers (n04's frame).** All seven links total 35 km; at an example $25,000 per km the waste is obvious.
- **One method taught as steps: Kruskal's (site WE1).** "Cheapest first; skip any link that closes a cycle; stop when it spans" (n − 1 links, n04's check). The name is said once; the steps carry the marks. Each skipped link flashes the cycle it would close, so "skip" has a visible reason.
- **Minimal connector problem, named in the point's words.** "Connect everything with the least total length": 14 km, $350,000 instead of 35 km, $875,000 (example price).
- **A second method, shown once (Prim's).** Grow from one tower by the cheapest link to a new tower: the same four links, the same 14 km. The point says "any method": one is enough.
- **Closure for n04.** The camp's 150 m spanning tree is confirmed as the minimum by the method (n04 left it as a question; the carousel's shortest bar turns green).
- **Simulations (standard item 3).**
  1. **Link-by-link builder** (scenes 2, 3, 6, feedback): a sorted list of links at the left; each link in turn lights on the network; kept links turn teal; a link that would close a cycle flashes that cycle violet and greys out; a counter "links kept: n of (vertices − 1)".
  2. **Cost counter** (scene 4): cable length and dollars roll up as links are laid; a ghost bar shows "all links: 35 km, $875,000".
  3. **Grow-from-a-vertex** (scene 5): a teal region grows from A, each step adding the cheapest edge leaving the region (candidate edges outlined, the chosen one lit).
- **Colour roles (fixed n01 to n07).** Vertices blue; candidate links amber; kept links teal; would-be cycles violet; skipped links grey; answer green; mistake red.
- **Large type, handwritten voice.** Labels 40 px; list 44 px; working 52 px; nothing below 26 px; all text above y = 950. Hand tags: "cheapest first", "new vertex: keep", "closes a loop: skip", "stop at 4 links", "minimal connector", "grow from A", "same 14 km". At most two live at once.
- **Stage changes (standard item 2).** The towers (1); the sorted list and steps (2); the run (3); the cost (4); the second method (5); the camp (6); framed card (7); question cards (8 to 11); the delivery network (12); key notes (13).
- **Worked examples (g01 order).** Scene 3: "C–D 2 ✓, A–C 3 ✓, D–E 4 ✓, B–C 5 ✓; C–E 6 ✗, B–D 7 ✗, A–B 8 ✗"; "2 + 3 + 4 + 5 = 14 km" (framed green). Scene 4: "14 × $25 000 = $350 000" (framed green); "35 × $25 000 = $875 000". Scene 5: "A–C 3, C–D 2, D–E 4, C–B 5 = 14 km". Scene 6: "30 + 35 + 40 + 45 = 150 m" (framed green).
- **Memory aid.** Framed card: "Cheapest first. Skip any link that closes a loop. Stop when everything is joined." Key line: "A minimum spanning tree on n vertices has n − 1 links. Minimal connector problem: connect everything for the least total."
- **Plain meanings at first use.** Minimal connector problem ("connect every place, using the least total length or cost").
- **Attempts.** A1 (pack question 1): 20 km; crossed "5 + 7 + 8 + 10 = 30 km" (caption "Q–S closes a loop"). A2 (pack question 2): 21 km; crossed "2 + 3 + 4 + 5 + 6 = 20 km" (caption "B–D closes a loop; F is left out").
- **Mistake scene:** none separate. Keeping a cycle link (3, A1, A2); not stopping or stopping early (2, A2); MST as shortest route (4, said; n07).
- **Cause chain taught, in order:** (1) a spanning tree has no cycles, so a link that closes a cycle is never needed (2); (2) taking the cheapest links first means every link we keep is as cheap as it can be while still joining something new (2, 3); (3) once n − 1 links join all n vertices, any more would close a cycle, so we stop (3); (4) the total of the kept links is the least length that connects everything, which answers the minimal connector problem (4); (5) growing from one vertex by its cheapest outward link also never closes a cycle, so it finds the same total (5).
- **Entry knowledge (route):** math-s11-n04, n02. Recalled in grey chips.
- **Site notes.** lesson05 recalculated: no error.
- **Handoff (to math-s11-n06, shortest paths).** Scene 12: board clear; the delivery van `ma12-delivery-van-v1.png` (about 480 px wide) at the left; at the right a coded network (1,000 px) with a depot "S", stops "A", "B", "C" and a customer "T" (blue), amber edges with minute tags: S–A "4", S–B "2", A–B "1", A–C "3", A–T "6", B–C "5", C–T "2"; chips "quickest way from S to T?", "Next: shortest paths" and "?". n06 opens on this frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Towers (example km; site WE1's network): sorted 2 (C–D), 3 (A–C), 4 (D–E), 5 (B–C), 6 (C–E), 7 (B–D), 8 (A–B). Kept 2, 3, 4, 5 = 14. C–E closes C–D–E; B–D closes B–C–D; A–B closes A–B–C (with A–C and B–C kept). All links: 35.
  (b) 14 × 25 000 = 350 000; 35 × 25 000 = 875 000 (example price, not a quote).
  (c) Prim from A: A–C 3; then cheapest out of {A, C}: C–D 2; out of {A, C, D}: D–E 4; out of {A, C, D, E}: C–B 5 (B–D 7, A–B 8 dearer). 14.
  (d) Camp: 30 (B–C), 35 (D–E), 40 (A–B), 45 (C–D) kept; 50 (B–D), 60 (A–C), 70 (C–E) skipped. 150 = n04's tree. All paths: 40 + 60 + 30 + 50 + 45 + 70 + 35 = 330.
  (e) A1: Q–R 5, R–S 7, P–R 8 kept; Q–S 10 closes Q–R–S; P–Q 12 closes. 20. A2: D–E 2, B–C 3, A–C 4, C–E 5 kept; B–D 6 closes B–C–E–D; A–B 7 (tied with E–F 7) closes A–B–C; E–F 7 kept (5 links): 21 (unique; next 22). Either order for the tied 7s gives the same tree. Slip 20 uses B–D and leaves F out.

Main question: *Five phone towers, seven possible links. How does a minimum spanning tree connect everything for the least cost?*
Entry knowledge (math-s11-n04, n02): spanning trees; cycles; weights.
Stops after: the method, minimal connector problems with cost, a second method, the camp confirmed.
Handoff: math-s11-n06: "Next: shortest paths".

## Script and shots

Cue words in **bold** trigger the visual change. Colour roles (fixed): vertices blue; candidate links amber; kept links teal; would-be cycles violet; skipped grey; answer green; mistake red. Header strip "NETWORKS, PATHS AND TREES". Scene headings in the hand font, 44 px.

### 1. hook: fibre to five towers
> Here are the five phone towers, and the seven links the company could lay fibre along, in kilometres. Every tower needs to be connected to the network, through other towers if need be. The company wants every tower joined, but no wasted cable. Laying all seven links would use thirty-five kilometres of cable, which is far more than needed. At an example cost of twenty-five thousand dollars a kilometre, every kilometre saved matters. So how does a minimum spanning tree connect everything for the least **cost**?

Visual: opens on n04's final frame exactly (the tower plate, towers A to E, seven links with km tags, chips "link every tower, least cable?", "Next: minimum spanning trees", "?"). On "Every tower needs to be connected" a faint pulse runs between towers. On "all seven links" every link glows and a meter "35 km" appears; on "twenty-five thousand dollars" a chip "example price: $25 000 per km" and a ghost "$875 000". On "cost" heading "Minimum spanning trees" writes on (hand font, 56 px), grey chip "n04: minimum spanning tree = smallest total".

### 2. the method: cheapest first, skip loops
> The method is simple. Be greedy, but careful. List the links from cheapest to dearest. Then take them one at a time. If a link joins something new, keep it. If it would close a loop, a cycle, skip it, because everything it joins is already connected. Stop when every tower is connected, which for five towers is after four links. Why does this work? Every link we keep is the cheapest way left to bring in something new. And skipping a link that closes a cycle never disconnects anything, because those towers are already joined. This is called Kruskal's method, but you don't need the name. You need the steps. Cheapest first, skip any cycle, and stop when it **spans**.

Visual: stage change (simulation 1): the network at the right (1,000 px); at the left the sorted list, 44 px: "C–D 2", "A–C 3", "D–E 4", "B–C 5", "C–E 6", "B–D 7", "A–B 8" (hand tag "cheapest first"). On "joins something new" a demo link turns teal (hand tag "new vertex: keep"); on "close a loop" a demo cycle flashes violet and its closing link greys (hand tag "closes a loop: skip"). On "after four links" counter "links kept: 0 of 4" (grey chip "n04: n vertices, n − 1 edges"). On "Why does this work" a small demo: a kept link brings a new tower into the teal group; a skipped link's two ends are already in the group. On "spans" a three-line card, 44 px: "1. Cheapest first. 2. Skip any link that closes a cycle. 3. Stop at n − 1 links."

### 3. running it on the towers
> Let's run it. In order, the links are two, three, four, five, six, seven and eight. C to D, two. Nothing's connected yet, so keep it. A to C, three. A is new, so keep it. D to E, four. E is new, keep it. B to C, five. B is new, keep it. That's four links, and all five towers are connected, so we could stop. But watch what the rest would do. C to E, six, would close the loop C, D, E, so skip it. B to D, seven, closes B, C, D. Skip. And A to B, eight, closes A, B, C. Skip. The minimum spanning tree is C D, A C, D E and B C, for a total of fourteen **kilometres**. Check with the count. Five towers, four links, no loops, and every tower joined. That's a spanning tree, and nothing cheaper can do the job.

Visual: the list and network stay (continue). Each link in turn: its list row lights and its edge glows amber; on "keep" it turns teal with a tick in the list, and the counter climbs "1 of 4", "2 of 4", "3 of 4", "4 of 4" (hand tag "stop at 4 links" on the fourth). On "C to E, six" the cycle C–D–E flashes violet and C–E greys with a cross; the same for B–D (B–C–D) and A–B (A–B–C). On "kilometres" row "2 + 3 + 4 + 5 = 14 km" (framed green), the teal tree standing alone as the other links fade.

### 4. a minimal connector problem
> That's the answer to a minimal connector problem. Connect everything, with the least total length. Fourteen kilometres instead of thirty-five. At twenty-five thousand dollars a kilometre, that's three hundred and fifty thousand **dollars**, instead of eight hundred and seventy-five thousand. And every tower can still reach every other, through the tree. Councils use the same idea for water mains, farms for irrigation pipes, and power companies for lines to new houses. Whenever a question says connect them all as cheaply as possible, it's a minimal connector problem, and a minimum spanning tree answers it.

Visual: stage change (simulation 2): the country town `ma12-country-town-v1.png` (about 700 px wide) along the bottom as the place being served; the tree above it. A chip, 44 px, "minimal connector problem: connect everything for the least total" (hand tag "minimal connector"). Cable meter rolls "0 → 14 km" as each teal link pulses; dollars roll "$0 → $350 000"; on "dollars" row "14 × $25 000 = $350 000" (framed green); a grey ghost bar "all links: 35 × $25 000 = $875 000". On "through the tree" the four teal links pulse in turn from A to E (Revision 2, note N05-DIRECT: the "most direct route" clause is cut, because every skipped link here ties with its tree route; n07 carries the true contrast). On "water mains" three small coded icons (a pipe, an irrigation sprinkler outline, a power pole outline).

### 5. another method, the same total
> There's another way to the same answer. Start at any tower, say A. Keep adding the cheapest link from the towers you already have to a tower you don't have yet. From A, the cheapest is A to C, three. Then C to D, two. Then D to E, four. Then C to B, five. Same four links, same fourteen **kilometres**. This one's called Prim's method. Kruskal's is handy when you're given a list of edges. Prim's is handy when you're looking at a diagram, because you just look outwards from what you've already built. Either method is fine, because the syllabus lets you use any method, as long as you show your steps.

Visual: stage change (simulation 3): the network reset (all amber). On "Start at any tower" A fills teal (hand tag "grow from A"); a teal region outline around A; candidate links leaving the region outline amber; the cheapest lights and joins: A–C "3", then C–D "2", D–E "4", C–B "5", the region growing each time. On "kilometres" row "A–C 3, C–D 2, D–E 4, C–B 5 = 14 km" (framed green) and hand tag "same 14 km". On "list of edges" a two-column chip "Kruskal: cheapest anywhere | Prim: cheapest from the tree".

### 6. back to the camp
> Now back to the camp. Last time, we found a spanning tree of a hundred and fifty metres, but we couldn't be sure it was the smallest. Run the method. Thirty, keep. Thirty-five, keep. Forty, keep. Forty-five joins the two groups, so keep it. Four links for five cabins, done. A hundred and fifty metres, and the method guarantees that no spanning tree is shorter. Notice that it skipped the fifty, sixty and seventy, the three longest paths. So the camp lights a hundred and fifty metres, not the three hundred and thirty metres of every path. The lights go on B C, D E, A B and C **D**.

Visual: stage change: the hiking valley `ma12-hiking-valley-v1.png` (about 1,100 px wide) dimmed, the camp network over it with metre tags; the sorted list at the left: "B–C 30", "D–E 35", "A–B 40", "C–D 45", "B–D 50", "A–C 60", "C–E 70"; grey chip "n04: 150 m, the smallest?". The builder runs: 30, 35, 40 kept; on "joins the two groups" the groups {A, B, C} and {D, E} tint differently and C–D bridges them, kept; counter "4 of 4". Row "30 + 35 + 40 + 45 = 150 m" (framed green); the n04 carousel's bar list flashes in a corner with the 150 bar turning green. On "skipped the fifty, sixty and seventy" those three list rows grey; on "three hundred and thirty" a ghost bar "all paths: 330 m". On "D" (bold) the four teal edges light up as lamps along the paths.

### 7. memory aid
> So here's the minimum spanning tree in one card. Cheapest first. Skip any link that closes a loop. Stop when everything is joined, which takes one link fewer than the number of **vertices**. And check your count at the end.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the towers' teal tree with the three skipped links grey and crossed. Main line, hand font 56 px: "Cheapest first. Skip any link that closes a loop. Stop when everything is joined." On "vertices" the key line, 40 px: "A minimum spanning tree on n vertices has n − 1 links. Minimal connector problem: connect everything for the least total." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. A water pipeline must connect four towns, P, Q, R and S. The possible pipes, in kilometres, are P Q twelve, P R eight, Q R five, Q S ten, and R S seven. Find the minimum total length of pipe. Pause here to answer.

Visual: `QuestionCard`, 40 px: "A water pipeline must connect four towns P, Q, R and S. Possible pipes (km): P–Q 12, P–R 8, Q–R 5, Q–S 10, R–S 7. Find the minimum total length of pipe." Picture slot: the network drawn with its weights. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 9. feedback 1 (brief)
> Cheapest first. Q R five, keep. R S seven, keep. P R eight, keep. That's three pipes for four towns, so stop. Q S, ten, would close Q, R, S, and P Q, twelve, would close P, Q, R. The minimum is five plus seven plus eight, twenty **kilometres**. Adding Q S as well, for thirty, closes the loop Q, R, S, and that's the **slip**.

Visual: the card shrinks to the top (30 px). The builder runs: Q–R, R–S, P–R teal; counter "3 of 3"; on "kilometres" row "5 + 7 + 8 = 20 km" (framed green). On "slip" Q–S flashes the cycle Q–R–S violet and a red slip "5 + 7 + 8 + 10 = 30 km" writes and is crossed (caption "Q–S closes a loop"). Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. Six towns, A to F, are to be linked by a gas pipeline. The possible links, in kilometres, are shown on the network. Use any method to find the minimum spanning tree and its total length. Pause here to answer.

Visual: `QuestionCard`, 40 px: "Six towns A to F are to be linked by a gas pipeline. The possible links (km) are shown. Use any method to find the minimum spanning tree and its total length." Picture slot: the network: A–B 7, A–C 4, B–C 3, B–D 6, C–D 8, C–E 5, D–E 2, D–F 9, E–F 7. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> In order. D E two, keep. B C three, keep. A C four, keep. C E five, keep. B D six closes B, C, E, D, so skip it. Two links tie at seven. A B closes A, B, C, so skip it. E F brings in F, so keep it. That's five links for six towns, and two plus three plus four plus five plus seven is twenty-one **kilometres**. Keeping B D, for twenty, makes a loop and leaves F out. That's the **slip**.

Visual: the card shrinks to the top. The builder runs on the six-town network with the sorted list (2, 3, 4, 5, 6, 7, 7, 8, 9, with both 7s shown: A–B and E–F); B–D flashes the cycle B–C–E–D violet and greys; on "tie at seven" both 7s ring in the list (hand tag "a tie: either order"); A–B flashes the cycle A–B–C violet and greys (Revision 2, N05-TIE); E–F kept; counter "5 of 5"; on "kilometres" row "2 + 3 + 4 + 5 + 7 = 21 km" (framed green). On "slip" a red slip "2 + 3 + 4 + 5 + 6 = 20 km" writes, F greys with "left out", and the slip is crossed (caption "B–D closes a loop; F is left out"). Hold about 1 s.

### 12. handoff: shortest paths
> So that's the minimum spanning tree, the cheapest way to connect everything. But a delivery driver has a different question. Not how to connect every stop, but how to get from the depot to one customer as quickly as possible. That's a shortest path, and it needs its own method. How do we find the shortest path through a network? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame (as under Decisions, "Handoff"): on "delivery driver" the delivery van `ma12-delivery-van-v1.png` (about 480 px wide) at the left; on "from the depot to one customer" the coded network draws at the right: "S" (depot) and "T" (customer) ringed, stops "A", "B", "C", edges with minute tags "4", "2", "1", "3", "6", "5", "2". Chip "quickest way from S to T?". On "next" chips "Next: shortest paths" and "?". Hold about 2 s. This is n06's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- List the edges from smallest to largest weight.
- Keep an edge if it joins something new; skip it if it closes a cycle.
- Stop at n − 1 edges for n vertices.
- Minimal connector problem: the MST's total is the least length or cost.
- Any method works (e.g. growing from one vertex); show your steps.

Memory aid (framed card, right side, as in scene 7): *Cheapest first. Skip any link that closes a loop. Stop when everything is joined.* Key: *A minimum spanning tree on n vertices has n − 1 links. Minimal connector problem: connect everything for the least total.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and n06's opening frame.

## Teaching checks

- **Does it explain causes?** Why skip cycle links (2, 3). Why cheapest first (2). Why stop at n − 1 (3). Why the total answers the minimal connector problem (4). Why the second method agrees (5).
- **Misconceptions addressed:** keeping a cycle link (3, A1, A2); not stopping or stopping early (A2); MST as a shortest route (4, said); methods disagreeing (5).
- **Visual standard, item by item:** 1 the towers in the first 20 s; 2 a new stage every 40 to 70 s; 3 the link-by-link builder flashing would-be cycles, the cost counter, the growing region; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 rows with framed answers and crossed slips; 8 framed card and five bullets; 9 skipped links lighting the very loop they would close, and n04's open question closed.
- **One idea at a time:** the steps (2), the run (3), the problem and cost (4), another method (5), the camp (6).
- **Response opportunity:** two unseen tasks with every demand visible; 10 s each; feedback about 23.9 s and 28.5 s.
- **Avoided double teaching:** n04's definitions in chips; shortest paths left to n06 and n07.
- **Syllabus coverage:** `cicce79437` (2, 3, 5, 6, A1, A2; notes 1 to 3, 5); `cif65754dc` (1, 4, 6, A1, A2; note 4).
- **Out of scope by design:** proofs that the methods are optimal; matrix forms of Prim's method.

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original HSC style, 2 marks suggested, not an official marking scheme).** As on the card.
Model answer: Q–R 5, R–S 7, P–R 8: 20 km. Classic mistake (crossed): "5 + 7 + 8 + 10 = 30 km".

**Attempt 2 (scene 10; pack question 2, 3 marks suggested).** As on the card.
Model answer: D–E 2, B–C 3, A–C 4, C–E 5, E–F 7 (B–D 6 skipped: it closes B–C–E–D; A–B 7, tied with E–F 7, skipped: it closes A–B–C): 21 km. Classic mistake (crossed): "2 + 3 + 4 + 5 + 6 = 20 km".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| All links | 35 km; $875,000 | 1, 4 |
| Towers MST | 14 km; $350,000 | 3, 4 |
| Prim's | 14 km | 5 |
| Camp | 150 m | 6 |
| A1 | 20 km; slip 30 | 8, 9 |
| A2 | 21 km; slip 20 | 10, 11 |
| Delivery (handoff) | 4, 2, 1, 3, 6, 5, 2 min | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated (24 Nov 2026, scratchpad `s11n/verify.py`, `python -I`; 0 failures); Codex to re-check.

- Towers: 2 + 3 + 4 + 5 = 14 (minimum by Kruskal and by Prim); all links 35. 14 × 25 000 = 350 000; 35 × 25 000 = 875 000.
- Camp: 30 + 35 + 40 + 45 = 150; all paths 330.
- A1: 5 + 7 + 8 = 20; slip 30. A2: 2 + 3 + 4 + 5 + 7 = 21; slip 20.

## Memory aid check

- **"Cheapest first. Skip any link that closes a loop. Stop when everything is joined."** with key line **"A minimum spanning tree on n vertices has n − 1 links. Minimal connector problem: connect everything for the least total."** From the site's Kruskal steps, in plain words. Meaning, as said in scene 7. Assumptions checked: the network is connected (every example is); ties may be taken in either order and the total is the same (not raised; no example has a tie that matters). It helps a new case: any of the HSC-style "minimum length of cable" questions.
- **Considered, not used:** separate aids for the two methods (one method is enough for the point).

## Narration length estimate

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; `work/brief-review-s11-e/count.py`): **5,458 characters** in Revision 2 (Revision 1: 5,495), 13 scene headings. Characters per scene (1 to 13): 510, 667, 704, 608, 599, 582, 219, 224, 318, 218, 379, 343, 75. Feedback speech about 23.9 s and 28.5 s.

At 13.3 characters per second the speech is about 410 s. Holds and settling: two 10 s countdowns (20 s); short holds 6 s; settling for the builder (3, 6), the cost counter (4) and the growing region (5), about 18 s; the key-notes scene adds about 39 s beyond its line. Total **about 493 s**, 77 s under the 570 s cap.

Reserve trims if the voiced take runs long: scene 4's last sentence; scene 5's last sentence.

## Scene list and build ids

Lesson key `m-s11n05` (route math-s11-n05). Explainer folder `src/explainer/lessons/math-s11-n05`; build inputs in `docs/production/claude-pm/lessons/math-s11-n05/` (at voicing).

In order (13 scene headings): hook-fibre-towers, cheapest-first, run-towers, minimal-connector, second-method, camp-confirmed, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 32 s | 1 | The towers and the 35 km |
| 32 to 72 s | 2 | The sorted list and three steps |
| 72 to 132 s | 3 | The run on the towers |
| 132 to 162 s | 4 | The cost counter |
| 162 to 200 s | 5 | Growing from A |
| 200 to 240 s | 6 | The camp confirmed |
| 240 to 256 s | 7 | Framed memory card |
| 256 to 350 s | 8 to 11 | Question cards and countdowns, then feedback |
| 350 to 380 s | 12 | The delivery network |
| 380 to 425 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: n04's last frame continues into 1; 1 to 2 the list slides in; 2 to 3 continue; 3 to 4 stage change; 4 to 5 stage change; 5 to 6 stage change; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s11-n05-learning-review.md`, `science_check` = `checks/m-s11-n05-maths-check.md`.

## Assets

Inspected before choosing (24 Nov 2026, viewed on contact sheets): `ma11-phone-tower-v1.png`; `ma12-country-town-v1.png` (a small country main street with a water tower, a long strip); `ma12-hiking-valley-v1.png`; `ma12-delivery-van-v1.png`.

Need: none new. Reused: the four plates above.

Coded: the networks, the sorted lists, the builder, cycles, counters, the cost meter, the growing region, lamps, the boards, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `NetworkBoard` (n01 to n04), `SpanningTreeCarousel` (n04, corner replay), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row n05):
1. **`MSTBuilder`**: a sorted edge list linked to a `NetworkBoard`; steps through edges, keeping those that join two components and flashing the cycle a rejected edge would close; a "kept n of (V − 1)" counter; a Prim mode that grows a region from a start vertex by its cheapest outward edge. Check: towers 14 (both modes); camp 150; A1 20; A2 21.
2. **Cost meter**: length and money roll up as kept edges pulse, with a ghost bar for "all edges". Check: 14 km, $350,000; 35 km, $875,000.

## Codex asset brief

No new plate. All four plates exist and were viewed.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify".
2. Confirm both syllabus quotes match the route-inputs JSON exactly.
3. Confirm the $25,000 per km is labelled "example price".
4. Confirm both attempts carry every demand and show no answer.
5. Confirm scene 1 opens on n04's final frame exactly and scene 12 matches n06's Boundary.
6. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Minimum Spanning Trees: Connecting Everything for Less | Year 11 Maths Standard

(Title length: 79 characters.)

Description: Related lesson notes: https://hscscience.com.au/subjects/maths-standard/year11/networks-paths-and-trees/lesson05.sa.html

A phone company must link five towers with fibre, using as little cable as possible. Learn a reliable method for the minimum spanning tree (cheapest link first, skip any link that closes a loop, stop when everything is joined), how it solves minimal connector problems and their costs, a second method that gives the same total, and why the school camp's lights need just 150 metres. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 11, Networks, paths and trees. For Standard 1 and Standard 2.
Syllabus content (NSW Mathematics Standard 11-12, 2024, Year 11):
"Determine the minimum spanning tree of a network with weighted edges, using any method"
"Use minimum spanning trees to solve minimal connector problems"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fabf235394

Builds on: Paths, Trees and Spanning Trees. Next: Shortest Paths: The Quickest Route Through a Network.

#Year11Maths #MathsStandard #MinimumSpanningTree #HSCScience

## Open decisions

- **1. Method names.** "Kruskal's method" and "Prim's method" are each said once; the steps carry the teaching. If root prefers no names (the syllabus says "any method"), remove the two naming sentences; nothing else changes.

## Review notes

- Revision 2 (24 Nov 2026): learning review resolved (N05-TIE, N05-DIRECT). Next: Codex maths check and error check, then voicing and a build to grade A.
- Revision 1. Next: student learning review (trace from n04; check that "skip a cycle" is justified before the run, that each skipped link shows its loop, that stopping at n − 1 is tied to n04's check, that the camp's 150 m closes n04's open question, and that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
