# Maths S11 N07: When is the shortest path not the best path? Shortest means least of one weight; tolls, time, floods, hills and safety can make a longer path best; and a shortest path need not lie in any minimum spanning tree (design)

Status: Revision 2 (24 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (24 Nov 2026): first design (join edit 24 Nov 2026, after d01 was designed: the d01 frame is confirmed unchanged, every "provisional" mark on the n07 to d01 join is lifted, and the YouTube "Next" line quotes d01's title; no narration or picture changed), written to the maths visual standard (`../maths-visual-standard.md`), `math-s11-n01.md` to `n06.md` (Revision 1, this batch), the coherence audit and root's Standard rulings 1 to 99 (ruling 3: syllabus-only teaching). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,489 characters by script (see "Narration length estimate"; Revision 2), 13 scene headings, about 494 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: last video of the Year 11 Networks, paths and trees strand, outline playlist order 60. One video for Standard 1 and Standard 2. Viewers arrive from n06's final frame. Pre-design pack: `../pre-design/maths-standard/math-s11-n07.md`. Route entry: `math-s11-n07` in `../../programme/maths-standard-route-inputs-13.json`. Site lesson: none (MSY-32); taught from the syllabus. Visual system: maths studio kit; the road sign post, share e-bike, hillside strip, country road, hiking valley and phone plates (existing); networks coded.

Owner rules applied: as n01 (header strip "NETWORKS, PATHS AND TREES" only; one question; one stage at a time; plain meanings; two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors; no people; Australian spelling; no em dashes).

Syllabus content point (Mathematics Standard 11-12 (2024), Year 11, Networks, paths and trees, "Shortest paths and spanning trees", common to Standard 1 and Standard 2), quoted from `../../programme/maths-standard-route-inputs-13.json`:

- `ci53383df4`: "Describe a circumstance in which a shortest path is not necessarily the best path nor contained in any minimum spanning tree"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fabf235394

**Boundary:** starts from n06's final frame exactly (the road sign post `ma11-road-sign-post-v1.png`, about 420 px tall, at the left with coded white text "TOLL"; a coded network at the right with towns "A", "B", "C", "D", edges in km A–B "10", B–D "8", A–C "12", C–D "9", B–C "3", a small toll icon on A–B and the shortest path A–B–D glowing teal; the share e-bike `ma11-share-ebike-v1.png` above the hillside strip `ma12-hillside-strip-v1.png`, small, at the bottom right; chips "shortest = best?", "Next: when shortest isn't best" and "?"). Recalls n06 (shortest path), n05 (minimum spanning tree; the camp), f04a (time = distance ÷ speed) and t01 (decimal hours) in grey chips. Teaches: circumstances where the shortest path is not best; weights decide the answer; a shortest path in no minimum spanning tree, and why. Closes the strand. Not taught: new methods.

## Revision 2: learning review resolved (24 Nov 2026)

Source review: `../checks/m-s11-n07-learning-review.md`; resolution record `../checks/m-s11-t-n-learning-review-resolution.md`.

- **N07-A1 (blocker, root's ruling 2): resolved with the reviewer's checked replacement.** Attempt 1 repeated scene 2's toll example, so it was not unseen. It is now a fresh network with a different reason to avoid an edge: "Distances (km): P–Q 6, Q–S 5, P–R 8, R–S 6, Q–R 3. The road Q–S is flooded. Find the shortest open path from P to S and its length." Verified by listing every simple path (scratchpad `s11tn/net.py`, `python -I`): P–Q–S 11, P–R–S 14, P–Q–R–S 15, P–R–Q–S 16; with Q–S closed only P–R–S 14 and P–Q–R–S 15 remain, so P–R–S, 14 km, is the unique answer. Feedback 1: "Take the flooded road out first. Then only two routes are open. P, Q, R, S is six plus three plus six, fifteen. P, R, S is eight plus six, fourteen kilometres, the shortest open path. Giving P, Q, S, eleven kilometres, drives through the flood, and that's the slip." (265 characters, about 20 s). Crossed slip "P → Q → S = 11 km" (caption "Q–S is flooded"). The flood ties to scene 4's gallery. Updated with it: the Decisions "Attempts" line, the model answer, author note (f), Numbers used and Numbers to verify.
- A2 also uses the letters P, Q, R and S, on a different network with its own card. Each card shows its own network, so this is kept as root ruled; Codex's error check should confirm that the two cards are clearly separate.
- No other number changed. Joins unchanged (n06's toll frame in; d01's frame out).
- Narration 5,489 characters (Revision 1: 5,545); about 494 s with holds, under the 570 s cap. Review file reference unchanged (`checks/m-s11-n07-learning-review.md` already matches).

## Decisions

- **Anchor: the toll sign (n06's frame).** The labelling method picks A–B–D (18 km) because it only sees kilometres; a driver avoiding tolls picks A–C–D (21 km).
- **Weights measure one thing.** The point's "not necessarily the best path" is shown three ways: cost (the toll), time against distance (a town route against a motorway, with f04a's time = distance ÷ speed), and things the weights don't record (a flood, a hill, safety, peak hour).
- **Weight toggle (visual surprise).** Switching the same two routes from kilometres to minutes swaps the winner (X 12 km but 14.4 min; Y 15 km but 9 min).
- **"Nor contained in any minimum spanning tree": a triangle first, then the camp.** Triangle AB 3, BC 3, AC 5: the unique MST is AB + BC; the shortest A→C path is AC, in no MST. Then the camp (n05): the lit tree takes A to C the long way (70 m) while the dark direct path is 60 m. The reason: an MST minimises the total for linking everyone, not any one trip.
- **Strand close and the d01 handoff (confirmed by d01).** Grey chip "Networks, paths and trees: done"; the phone's survey screen opens Data analysis. Networks and Data analysis are parallel strands; the playlist runs d after n (61 onward). d01 confirms the frame unchanged and uses its overlapping buttons and "last night" as its hook.
- **Simulations (standard item 3).**
  1. **Edge removal and re-run** (scene 2, feedback 1): the toll edge greys; the shortest-path search (n06's label table, compact) re-runs and lights A–C–D with its total.
  2. **Weight toggle** (scene 3): two routes between two towns with tags that flip between "km" and "min"; the winning route's highlight jumps from X to Y.
  3. **Tree against trip** (scenes 5, 6, feedback 2): the MST lit teal; a traveller icon (a lantern) walks between two vertices inside the tree with a timer, while the direct non-tree edge flashes its shorter total.
- **Colour roles (fixed n01 to n07).** Vertices blue; edges amber; the shortest path teal; the best path (by another measure) green outline; MST edges teal; non-tree edges faint; answer green; mistake red.
- **Large type, handwritten voice.** Labels 40 px; working 52 px; nothing below 26 px; all text above y = 950. Hand tags: "shortest by km", "best for this driver", "weights measure one thing", "km or minutes?", "links everyone, not every trip", "a fair trade". At most two live at once.
- **Stage changes (standard item 2).** The toll network (1); removal and re-run (2); the weight toggle (3); the circumstances gallery (4); the triangle (5); the camp at night (6); framed card (7); question cards (8 to 11); the survey phone (12); key notes (13).
- **Worked examples (g01 order).** Scene 2: "shortest: A → B → D = 18 km (toll)"; "no toll: A → C → D = 21 km" (framed green). Scene 3: "X: 12 ÷ 50 = 0.24 h = 14.4 min"; "Y: 15 ÷ 100 = 0.15 h = 9 min" (framed green). Scene 5: "MST: AB + BC = 6; shortest A → C = AC = 5: not in the MST" (framed green). Scene 6: "in the tree: A → B → C = 70 m; shortest: A → C = 60 m" (framed green); on "ten metres further" chip "+10 m at night".
- **Memory aid.** Framed card: "Shortest is about one number. Best is about everything that matters." Key line: "A minimum spanning tree links everyone for the least total; it may not hold the shortest trip between two places."
- **Plain meanings at first use.** Best path ("the path that suits what matters on this trip, such as cost, time, safety or the road being open"); toll road ("a road you pay to use").
- **Attempts.** A1 (Revision 2, replacing pack question 1, which repeated scene 2): a fresh flooded-road network, P–Q 6, Q–S 5, P–R 8, R–S 6, Q–R 3, Q–S flooded: P–R–S, 14 km; crossed "P–Q–S, 11 km" (caption "Q–S is flooded"). A2 (pack question 2): MST 11; P–R 6; not in the MST; crossed "(b) P–Q–R, 8" (caption "the tree's route isn't the shortest").
- **Mistake scene:** none separate. "Shortest is always best" (1 to 4, A1); "the MST holds every shortest trip" (5, 6, A2); wrong weights (3).
- **Cause chain taught, in order:** (1) a shortest path minimises the total of one kind of weight, so it ignores anything the weights don't measure (2); (2) choosing a different weight (time, cost) can change which route is shortest (3); (3) real constraints (closures, hills, safety, traffic) are not in the weights, so the best path can be longer (4); (4) an MST chooses edges to keep the total for linking everyone as low as possible, so it can leave out a direct edge that one trip would use (5, 6).
- **Entry knowledge (route):** math-s11-n06, n05, f04a, t01. Recalled in grey chips.
- **Site notes.** MSY-32 (no site lesson).
- **Handoff (to math-s11-d01, statistical investigations; strand close; confirmed).** Scene 12: board clear; grey strand chip "Networks, paths and trees: done"; the phone `ma12-phone-v1.png` (about 640 px tall) at the centre-left with a coded survey screen: the question "How many hours did you sleep last night?" (40 px) and four answer buttons "under 7", "7 to 8", "8 to 9", "over 9"; chips "a clear question, a fair survey", "Next: statistical investigations" and "?". d01 opens on this frame exactly (confirmed 24 Nov 2026).
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Toll network (example km): A–B 10 (toll), B–D 8, A–C 12, C–D 9, B–C 3. Shortest A→D = A–B–D 18; without A–B: A–C–D 21 (A–C–B–D 23). Difference 3.
  (b) X 12 km at 50 km/h: 0.24 h = 14.4 min; Y 15 km at 100 km/h: 0.15 h = 9 min; 14.4 − 9 = 5.4.
  (c) Triangle: MST {AB, BC} = 6, unique (AC 5 is the heaviest edge of the only cycle); shortest A→C = 5 via AC.
  (d) Camp MST {B–C 30, D–E 35, A–B 40, C–D 45}, unique; A→C in the tree 40 + 30 = 70; shortest A→C = A–C 60 (not in the MST).
  (e) A2: MST {R–S 3, P–Q 4, Q–R 4} = 11 (P–R 6 closes P–Q–R; Q–S 8 closes Q–R–S); this MST is unique (verified by listing all spanning trees; Codex confirms). Shortest P→R = 6 (P–R) against P–Q–R 8.
  (f) A1 (Revision 2; example km): P–Q 6, Q–S 5, P–R 8, R–S 6, Q–R 3; Q–S flooded. Every simple P→S path: P–Q–S 11, P–R–S 14, P–Q–R–S 15, P–R–Q–S 16. Open (no Q–S): P–R–S 14 (unique shortest), P–Q–R–S 15. Slip P–Q–S 11 uses the flooded road.

Main question: *The toll road is on the shortest path. When is the shortest path not the best path?*
Entry knowledge (math-s11-n06, n05, f04a, t01): shortest paths; minimum spanning trees; time = distance ÷ speed; decimal hours.
Stops after: circumstances, weights, the MST contrast. Closes the strand.
Handoff: math-s11-d01: "Next: statistical investigations".

## Script and shots

Cue words in **bold** trigger the visual change. Colour roles (fixed): vertices blue; edges amber; shortest path teal; best path green outline; MST edges teal; answer green; mistake red. Header strip "NETWORKS, PATHS AND TREES". Scene headings in the hand font, 44 px.

### 1. hook: the toll road
> Here's the toll road from last time. From town A to town D, the shortest path runs along the toll road from A to B, then on to D, eighteen kilometres. The labelling method would pick it every time, because it only looks at the numbers on the edges. But a driver who doesn't want to pay the toll might choose a different way. So when is the shortest path not the best path, and how does it compare with a minimum spanning **tree**?

Visual: opens on n06's final frame exactly (the toll sign, the network A to D with the teal shortest path A–B–D and a toll icon on A–B, the e-bike and hillside small, chips "shortest = best?", "Next: when shortest isn't best", "?"). On "eighteen kilometres" row "A → B → D = 10 + 8 = 18 km" (teal), hand tag "shortest by km". On "only looks at the numbers" the edge tags pulse. On "doesn't want to pay" the toll icon on A–B enlarges. On "tree" heading "When shortest isn't best" writes on (hand font, 56 px).

### 2. a toll: shortest isn't cheapest
> Remember what a shortest path is. It's the path with the least total weight, and here the weights are kilometres. Every edge's weight said kilometres, so kilometres are all the method could see. But kilometres aren't the only thing that matters on a real trip. Say the toll road from A to B costs money, and the driver wants to avoid it. Take that edge away, and look again. Now the shortest path is A, C, D, twelve plus nine, twenty-one kilometres. That's only three kilometres longer, with no toll. For this driver, the longer path is the best **path**. The shortest path was right about distance, and wrong about what the driver cared about.

Visual: stage change (simulation 1): the network enlarged (1,200 px), the sign post badge (about 260 px) at the top left; grey chip "n06: shortest path = least total weight". On "Take that edge away" the A–B edge greys with a violet "toll: avoid" tag; a compact label table re-runs at the left; on "twenty-one kilometres" A–C–D lights with a green outline, row "A → C → D = 12 + 9 = 21 km" (framed green), and a grey row "A → C → B → D = 23 km". On "three kilometres longer" a chip "+3 km, no toll". On "path" (bold) hand tag "best for this driver".

### 3. time against distance
> Here's another. Two routes run between the same two towns. Route X is twelve kilometres through town, at fifty kilometres an hour. Route Y is fifteen kilometres on a motorway, at a hundred kilometres an hour. Route X is shorter. But time is distance divided by speed. Twelve divided by fifty is nought point two four of an hour, fourteen point four minutes. Fifteen divided by a hundred is nought point one five of an hour, nine **minutes**. The longer route is quicker by more than five minutes. So the weights you choose decide the answer. Weight the edges by distance, and route X wins. Weight them by time, and route Y **wins**.

Visual: stage change (simulation 2): the country road `ma12-country-road-v1.png` (about 1,000 px wide) across the bottom; above it two coded routes between two town dots: X (through a town icon) tagged "12 km, 50 km/h" and Y (a straighter motorway) tagged "15 km, 100 km/h". On "Route X is shorter" X highlights teal. On "time is distance divided by speed" grey chip "f04a: time = distance ÷ speed"; rows, 52 px: "X: 12 ÷ 50 = 0.24 h = 14.4 min" (grey chip "t01: 0.24 × 60 = 14.4"); on "minutes" "Y: 15 ÷ 100 = 0.15 h = 9 min" (framed green). On "the weights you choose" the weight toggle (hand tag "km or minutes?") flips the tags from "12 km | 15 km" to "14.4 min | 9 min"; on "wins" (last bold) the highlight jumps from X to Y (visual surprise).

### 4. other reasons a shorter path loses
> Lots of real things can make the shortest path a poor choice. A road might flood after heavy rain, or be closed for roadworks, so it isn't there at all. A bike route might be the shortest, but climb a steep hill, when a slightly longer path runs along the flat. A path might be quickest, but unsafe at night, or have no footpath. Traffic can turn a short road into a slow one at peak hour. In every case, the network's weights only measure one thing. When something else matters, the best path can be **longer**. That's why you should always ask what the weights measure, before you trust a shortest path.

Visual: stage change: a gallery of four panels, each a small network with its shortest path teal and a coded icon over it. On "flood" a rain cloud and water over one edge (the edge greys). On "steep hill" the share e-bike `ma11-share-ebike-v1.png` (about 240 px) above the hillside strip `ma12-hillside-strip-v1.png`, with a coded elevation profile under two routes: "short, steep" and "longer, flat" (green outline on the flat one). On "unsafe at night" a moon icon over an unlit edge. On "Traffic" a small queue of coded car outlines on one edge. On "longer" (bold) each panel's green-outlined path lights; hand tag "weights measure one thing".

### 5. not in any minimum spanning tree
> Now the second part of the idea. A shortest path isn't always inside a minimum spanning tree either. Here's a tiny network. A to B is three, B to C is three, and A to C is five. The minimum spanning tree takes the two threes, for six, and leaves out A to C, because it would close a loop. It's the only minimum spanning tree this network has. But the shortest path from A to C is the direct edge, five, and that edge isn't in the tree at all. If you could only use the tree, the trip from A to C would be six, through **B**. A minimum spanning tree keeps the total cost of linking everyone as low as possible. It doesn't promise the shortest trip between any two particular **places**. Real cables do the same thing. A town's fibre laid as a minimum spanning tree can send data from one tower to its neighbour the long way round.

Visual: stage change (simulation 3): a large triangle network (900 px): A–B "3", B–C "3", A–C "5". Grey chip "n05: cheapest first, skip loops". On "takes the two threes" A–B and B–C turn teal (row "MST: 3 + 3 = 6"); on "leaves out A to C" A–C flashes the loop violet and fades (faint). On "the only minimum spanning tree" a chip "unique MST". On "the direct edge, five" A–C glows with its "5" (green outline), row "shortest A → C = 5 (edge AC)". On "through B" (bold) the lantern walks A → B → C inside the tree with a timer "6"; row "MST: AB + BC = 6; shortest A → C = AC = 5: not in the MST" (framed green). On "places" (first bold) hand tag "links everyone, not every trip". On "Real cables" a small coded inset: four tower icons joined in a chain (the tree) with data dots travelling the long way between two neighbours.

### 6. the camp at night
> The camp shows the same thing. Its minimum spanning tree lights B C, D E, A B and C D, a hundred and fifty metres. Walking from cabin A to cabin C under the lights, you go A to B to C, forty plus thirty, seventy metres. But there's a dark path straight from A to C, sixty metres. The shortest path from A to C isn't in the camp's lit tree. Anyone walking from A to C at night now walks ten metres further than they would by day. The camp saved on lighting, and some walks got longer. That's a fair trade, but it is a **trade**.

Visual: stage change: the hiking valley `ma12-hiking-valley-v1.png` (about 1,100 px wide) at dusk with the camp network; the four lit edges glow as lamps (grey chip "n05: the camp's lit tree, 150 m"). On "Walking from cabin A to cabin C" the lantern walks A → B → C along lit edges, timer "40 + 30 = 70 m". On "a dark path" the unlit A–C edge flashes "60 m" (green outline). Row "in the tree: A → B → C = 70 m; shortest: A → C = 60 m" (framed green); on "ten metres further" chip "+10 m at night". On "trade" (bold) hand tag "a fair trade".

### 7. memory aid
> So here's the idea in one card. Shortest is about one number. Best is about everything that matters, like cost, time, safety, and whether the road is open. And a minimum spanning tree links everyone cheaply, but it may not hold the shortest trip between two **places**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the triangle with its teal MST and the green-outlined AC edge. Main line, hand font 56 px: "Shortest is about one number. Best is about everything that matters." On "places" the key line, 40 px: "A minimum spanning tree links everyone for the least total; it may not hold the shortest trip between two places." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. Here's a new network, with distances in kilometres. P Q six, Q S five, P R eight, R S six, and Q R three. After a storm, the road from Q to S is flooded. Find the shortest open path from P to S, and its length. Pause here to answer.

Visual: `QuestionCard`, 40 px: "Distances (km): P–Q 6, Q–S 5, P–R 8, R–S 6, Q–R 3. The road Q–S is flooded. Find the shortest open path from P to S and its length." Picture slot: a new four-vertex network (P left, S right, Q top, R bottom, Q–R a short vertical edge) with the weights and a coded flood icon (blue water marks) on Q–S; no highlighted path (Revision 2, N07-A1: unseen practice). Countdown ring shown full from "Pause here to answer.", then 10 s.

### 9. feedback 1 (brief)
> Take the flooded road out first. Then only two routes are open. P, Q, R, S is six plus three plus six, fifteen. P, R, S is eight plus six, fourteen **kilometres**, the shortest open path. Giving P, Q, S, eleven kilometres, drives through the flood, and that's the **slip**.

Visual: the card shrinks to the top (30 px). On "flooded road out" Q–S greys under its water marks; on "fifteen" a grey row "P → Q → R → S = 6 + 3 + 6 = 15 km"; on "kilometres" P–R–S lights (green outline), row "P → R → S = 8 + 6 = 14 km" (framed green). On "slip" a red slip "P → Q → S = 11 km" writes and is crossed (caption "Q–S is flooded"). Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. A network has edges P Q four, Q R four, P R six, R S three, and Q S eight. Find the minimum spanning tree and its total. Then find the shortest path from P to R. Is that path in the minimum spanning tree? Pause here to answer.

Visual: `QuestionCard`, 40 px: "A network has edges P–Q 4, Q–R 4, P–R 6, R–S 3, Q–S 8. (a) Find the minimum spanning tree and its total weight. (b) Find the shortest path from P to R. (c) Is this path contained in the minimum spanning tree?" Picture slot: the network drawn with weights. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> Cheapest first. R S three, keep. P Q four, keep. Q R four, keep. Three edges for four vertices, so the tree is P Q, Q R and R S, eleven in **total**. The shortest path from P to R is the direct edge, six, beating P, Q, R at eight. P R isn't in the tree, so **no**. Answering P, Q, R, eight, because it's the tree's route, is the **slip**.

Visual: the card shrinks to the top. The builder (n05) runs: R–S, P–Q, Q–R teal; P–R and Q–S skipped with their loops flashing; on "total" row "(a) P–Q, Q–R, R–S: 4 + 4 + 3 = 11" (framed green). P–R glows "6" (green outline) against the lantern's "P → Q → R = 8"; on "no" row "(b) P → R = 6; (c) no: P–R is not in the tree" (framed green). On "slip" a red slip "(b) P → Q → R = 8" writes and is crossed (caption "the tree's route isn't the shortest"). Hold about 1 s.

### 12. handoff: Networks, paths and trees, done
> That's Networks, paths and trees done, from dots and lines to cheapest connections and quickest routes, and knowing when to look past them. Next, a different kind of question. Not how places connect, but what people think and do. How many hours of sleep do Year 11 students get? You can't ask everyone, so you ask some of them, carefully. A good statistical investigation starts with a clear question and a fair survey. That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame (as under Decisions, "Handoff"): on "Networks, paths and trees done" a grey strand chip "Networks, paths and trees: done". On "dots and lines" a small network flashes and fades. On "what people think and do" the phone `ma12-phone-v1.png` (about 640 px tall) rises at the centre-left with a coded survey screen; on "hours of sleep" the question "How many hours did you sleep last night?" writes on the screen (40 px) with four answer buttons "under 7", "7 to 8", "8 to 9", "over 9". On "a clear question and a fair survey" chip "a clear question, a fair survey". On "next" chips "Next: statistical investigations" and "?". Hold about 2 s. This is d01's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- A shortest path minimises one kind of weight only.
- Best path: tolls, time, safety, hills, closures can change it.
- Weight by distance or by time: the answer can change.
- An MST minimises the total for linking everything.
- A shortest path between two places may not be in any MST.

Memory aid (framed card, right side, as in scene 7): *Shortest is about one number. Best is about everything that matters.* Key: *A minimum spanning tree links everyone for the least total; it may not hold the shortest trip between two places.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and d01's opening frame.

## Teaching checks

- **Does it explain causes?** Why the shortest path can lose: it minimises one weight (2). Why the weight choice matters (3). Why real constraints matter (4). Why an MST can leave out a short trip: it minimises the total for everyone (5, 6).
- **Misconceptions addressed:** shortest = best (1 to 4, A1); the MST holds every shortest trip (5, 6, A2); wrong weights (3).
- **Visual standard, item by item:** 1 the toll sign in the first 20 s; 2 a new stage every 40 to 70 s; 3 the removal and re-run, the weight toggle swapping the winner, the lantern walking inside the tree; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 rows with framed answers and crossed slips; 8 framed card and five bullets; 9 the winner swaps when kilometres become minutes.
- **One idea at a time:** a toll (2), time (3), other circumstances (4), the MST contrast (5), the camp (6).
- **Response opportunity:** two unseen tasks with every demand visible; 10 s each; feedback about 19.9 s and 24.5 s.
- **Avoided double teaching:** n06's method and n05's method recalled in chips and compact replays; f04a's speed formula in a chip.
- **Syllabus coverage:** `ci53383df4` (1 to 6, A1, A2; notes 1 to 5): "not necessarily the best path" (2 to 4, A1); "nor contained in any minimum spanning tree" (5, 6, A2).
- **Out of scope by design:** multi-criteria optimisation; new algorithms.

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original HSC style, 2 marks suggested, not an official marking scheme).** As on the card.
Model answer: remove Q–S; open routes P → R → S = 8 + 6 = 14 km and P → Q → R → S = 6 + 3 + 6 = 15 km; shortest open path P → R → S, 14 km. Classic mistake (crossed): "P → Q → S = 11 km" (uses the flooded road).

**Attempt 2 (scene 10; pack question 2, 3 marks suggested).** As on the card.
Model answer: (a) R–S 3, P–Q 4, Q–R 4: 11. (b) P → R, 6. (c) No: the edge P–R is not in the tree. Classic mistake (crossed): "(b) P → Q → R = 8".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Toll network | 18 km; 21 km; 23 km; +3 km | 1, 2 |
| A1 flooded network | P–R–S 14 km; P–Q–R–S 15 km; slip P–Q–S 11 km | 8, 9 |
| Routes X, Y | 0.24 h = 14.4 min; 0.15 h = 9 min; 5.4 min | 3 |
| Triangle | MST 6; shortest 5 | 5 |
| Camp | 150 m; 70 m in the tree; 60 m direct | 6 |
| A2 | MST 11; shortest 6; tree route 8 | 10, 11 |

## Numbers to verify (all values, repeated for Codex)

Recalculated (24 Nov 2026, scratchpad `s11n/verify.py`, `python -I`; 0 failures); Codex to re-check.

- 10 + 8 = 18 (shortest); without A–B, 12 + 9 = 21 (shortest); 12 + 3 + 8 = 23.
- A1 (Revision 2): all simple P→S paths P–Q–S 11, P–R–S 14, P–Q–R–S 15, P–R–Q–S 16; with Q–S closed only P–R–S 14 and P–Q–R–S 15 remain, so 14 km is unique (listing).
- 12 ÷ 50 = 0.24 h = 14.4 min; 15 ÷ 100 = 0.15 h = 9 min.
- Triangle MST 6 (unique); shortest A → C 5.
- Camp MST unique, 150; A → B → C = 70; A–C = 60.
- A2 MST {R–S, P–Q, Q–R} = 11 (confirm unique by listing all spanning trees); shortest P → R = 6.

## Memory aid check

- **"Shortest is about one number. Best is about everything that matters."** with key line **"A minimum spanning tree links everyone for the least total; it may not hold the shortest trip between two places."** Original. Meaning, as said in scene 7. Assumptions checked: "one number" means the weight on the edges (distance, time or cost; 3); "not in any MST" is shown with unique MSTs (5, 6, A2), so "any" holds. It helps a new case: a fibre network laid as an MST makes some towers' data travel further than a direct cable would.
- **Considered, not used:** a rule of thumb about tolls (the point asks for a described circumstance, not a rule).

## Narration length estimate

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; `work/brief-review-s11-e/count.py`): **5,489 characters** in Revision 2 (Revision 1: 5,545), 13 scene headings. Characters per scene (1 to 13): 426, 640, 624, 601, 821, 523, 265, 243, 265, 236, 326, 432, 75. Feedback speech about 19.9 s and 24.5 s.

At 13.3 characters per second the speech is about 413 s. Holds and settling: two 10 s countdowns (20 s); short holds 6 s; settling for the re-run (2), the toggle (3) and the lantern walks (5, 6), about 16 s; the key-notes scene adds about 39 s beyond its line. Total **about 494 s**, 76 s under the 570 s cap.

Reserve trims if the voiced take runs long: scene 4's traffic sentence; scene 4's last sentence.

## Scene list and build ids

Lesson key `m-s11n07` (route math-s11-n07). Explainer folder `src/explainer/lessons/math-s11-n07`; build inputs in `docs/production/claude-pm/lessons/math-s11-n07/` (at voicing).

In order (13 scene headings): hook-toll-road, toll-avoided, time-against-distance, other-circumstances, not-in-any-mst, camp-at-night, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff-strand-close, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 32 s | 1 | The toll sign and network |
| 32 to 80 s | 2 | Removal and re-run |
| 80 to 135 s | 3 | The weight toggle |
| 135 to 185 s | 4 | The circumstances gallery |
| 185 to 245 s | 5 | The triangle and its tree |
| 245 to 285 s | 6 | The camp at night |
| 285 to 302 s | 7 | Framed memory card |
| 302 to 395 s | 8 to 11 | Question cards and countdowns, then feedback |
| 395 to 430 s | 12 | Strand close; the survey phone |
| 430 to 475 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: n06's last frame continues into 1; 1 to 2 the network enlarges; 2 to 3 stage change; 3 to 4 stage change; 4 to 5 stage change; 5 to 6 stage change; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s11-n07-learning-review.md`, `science_check` = `checks/m-s11-n07-maths-check.md`.

## Assets

Inspected before choosing (24 Nov 2026, viewed on contact sheets): `ma11-road-sign-post-v1.png`; `ma11-share-ebike-v1.png`; `ma12-hillside-strip-v1.png`; `ma12-country-road-v1.png` (a two-lane country road with gum trees, a long strip); `ma12-hiking-valley-v1.png`; `ma12-phone-v1.png`.

Need: none new. Reused: the six plates above.

Coded: networks, the toll icon, the re-run table, the two routes and toggle, the gallery icons and elevation profile, the triangle, the lantern and timers, the camp lamps, the survey screen, the boards, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `NetworkBoard`, `LabelTable` (n06, compact), `MSTBuilder` (n05), the path walker (n04), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row n07):
1. **`WeightToggle`**: edge tags that flip between two weight sets (km and min) with the shortest-path highlight recomputed and animated between winners. Check: X 12 km, 14.4 min; Y 15 km, 9 min; winner X then Y.
2. **Tree-against-trip overlay**: an MST lit on a network while the walker travels between two vertices inside the tree and a non-tree edge flashes its shorter total. Check: triangle 6 against 5; camp 70 against 60; A2 8 against 6.
3. **Survey screen** for `ma12-phone-v1.png` (a question and answer buttons). Reused by d01.

## Codex asset brief

No new plate. All six plates exist and were viewed.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", including that the MSTs in scene 5, scene 6 and A2 are unique (so "not in any minimum spanning tree" holds).
2. Confirm the syllabus quote matches the route-inputs JSON exactly.
3. Confirm the speeds (50 km/h town, 100 km/h motorway) are presented as examples.
4. Confirm both attempts carry every demand and show no answer.
5. Confirm scene 1 opens on n06's final frame exactly and scene 12 matches d01's Boundary.
6. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: When the Shortest Path Isn't the Best Path | Year 11 Maths Standard

(Title length: 68 characters.)

Description: Related lesson notes: https://hscscience.com.au/subjects/maths-standard/year11/networks-paths-and-trees/lesson06.sa.html

The shortest path from A to D runs along a toll road. Learn why a shortest path only minimises one kind of weight, how tolls, travel time, floods, hills and safety can make a longer path the best one, how changing the weights from kilometres to minutes can swap the answer, and why a shortest path between two places need not be in any minimum spanning tree. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 11, Networks, paths and trees. For Standard 1 and Standard 2.
Syllabus content (NSW Mathematics Standard 11-12, 2024, Year 11):
"Describe a circumstance in which a shortest path is not necessarily the best path nor contained in any minimum spanning tree"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fabf235394

Builds on: Shortest Paths: The Quickest Route Through a Network. Next: Statistical Investigations: Asking a Clear Survey Question.

#Year11Maths #MathsStandard #Networks #HSCScience

## Open decisions

- **1. The d01 join (closed 24 Nov 2026).** d01 confirms the survey phone frame unchanged (its overlapping buttons and "last night" are d01's hook); the YouTube "Next" line quotes d01's title.
- **2. Related lesson link.** The point has no site lesson; the description links lesson06 (shortest paths) until the site adds a card (MSY-32).

## Review notes

- Revision 2 (24 Nov 2026): learning review resolved (N07-A1 blocker). Next: Codex maths check and error check, then voicing and a build to grade A.
- Revision 1. Next: student learning review (trace from n06; check that "least of one weight" is said before any circumstance, that the toggle makes "the weights decide" visible, that the triangle shows "in no MST" with a unique MST before the camp, that each attempt needs a reason as well as a number, and that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
