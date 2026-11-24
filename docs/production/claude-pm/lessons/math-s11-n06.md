# Maths S11 N06: How do we find the shortest path through a network? Label outwards from the start, lock in the smallest label, update its neighbours, then trace back from the finish; least total weight, not fewest edges (design)

Status: Revision 3 (25 Nov 2026): preflight and fact repairs (see the final section, "Revision 3 (root, 25 November 2026)"). Revision 2 (24 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (24 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), `math-s11-n01.md` to `n05.md` (Revision 1, this batch), the Year 12 design that contrasts it (`math-s12-c03.md`: "Year 11: shortest path (a different question)"), the coherence audit and root's Standard rulings 1 to 99. Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,546 characters by script (see "Narration length estimate"; Revision 2), 13 scene headings, about 501 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: sixth video of the Year 11 Networks, paths and trees strand, outline playlist order 59. One video for Standard 1 and Standard 2. Viewers arrive from n05's final frame. Pre-design pack: `../pre-design/maths-standard/math-s11-n06.md`. Route entry: `math-s11-n06` in `../../programme/maths-standard-route-inputs-13.json`. Site lesson: `year11/networks-paths-and-trees/lesson06.sa.html` (setup, iteration, the worked table, tracing back, WE1 to WE3). Visual system: maths studio kit; the delivery van, share e-bike, road sign post and hillside plates (existing); networks and tables coded.

Owner rules applied: as n01 (header strip "NETWORKS, PATHS AND TREES" only; one question; one stage at a time; plain meanings; two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors; no people; Australian spelling; no em dashes).

Syllabus content point (Mathematics Standard 11-12 (2024), Year 11, Networks, paths and trees, "Shortest paths and spanning trees", common to Standard 1 and Standard 2), quoted from `../../programme/maths-standard-route-inputs-13.json`:

- `ci5aa7836f`: "Identify a shortest path on a network diagram with no more than 10 vertices"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fabf235394

**Boundary:** starts from n05's final frame exactly (the delivery van `ma12-delivery-van-v1.png`, about 480 px wide, at the left; a coded network at the right with a depot "S", stops "A", "B", "C" and a customer "T", edges tagged in minutes S-A "4", S-B "2", A-B "1", A-C "3", A-T "6", B-C "5", C-T "2"; chips "quickest way from S to T?", "Next: shortest paths" and "?"). Recalls n04 (path), n03 (route totals) and n02 (directed, weighted networks) in grey chips. Teaches: the labelling method with its reason; a table layout; tracing back; least total weight against fewest edges; arrows in directed networks; the 10-vertex limit. Not taught: the method's name; "shortest is not best" (n07).

## Revision 2: learning review resolved (24 Nov 2026)

Source review: `../checks/m-s11-n06-learning-review.md`; resolution record `../checks/m-s11-t-n-learning-review-resolution.md`.

- **N06-WHY (note): applied, reviewer's wording.** Scene 2 now says "Any other route to it would have to go through a stop that's already at least as far, and then travel further still." (replacing "... pass through a stop that's already further away"), so "further than what?" is answered. The race picture is unchanged.
- No number changed. Joins unchanged.
- Narration 5,558 characters (Revision 1: 5,526); about 502 s with holds, under the 570 s cap. Review file reference unchanged (`checks/m-s11-n06-learning-review.md` already matches).

## Decisions

- **Anchor: the van's depot and customer (n05's frame).** The eye picks S-A-T (two roads, 10 min); the method finds S-B-A-C-T (four roads, 8 min): the visual surprise.
- **The reason before the rule: split and spread.** Copies of the van spread down every road at once at the same speed; the first to reach a stop has found its quickest time. Locking in the smallest label is "the next copy to arrive", so a locked label can never improve. This explains why the method works before its steps are listed.
- **Labels, lock in, update; no "infinity".** Unlabelled vertices show "-" ("no route found yet"), not ∞. Old labels are crossed when a shorter route appears (a visible update).
- **Trace back to read the path.** From the finish, find the neighbour whose label plus the edge weight equals the finish's label; repeat (site's rule, in words).
- **Fewest edges ≠ shortest.** Said and crossed in scene 4, A1 and A2.
- **A one-way network (scene 5, site WE3).** The bus from A to E: 15 min by A-C-B-D-E, going round through C because A→C→B (5) beats the direct A→B (8).
- **Directed networks and the 10-vertex limit (scene 6).** Updates follow arrows only; exam networks have at most 10 vertices, so the table stays small; listing is fine for tiny networks.
- **Simulations (standard item 3).**
  1. **Split and spread** (scene 2): van icons leave S along every edge at a speed proportional to time, splitting at each stop; arrival stamps appear (B 2, A 3, C 6, T 8); later arrivals at a stamped stop fade.
  2. **Label table with lock-ins** (scenes 3, 5, 9, 11): a table (one column per vertex, one row per lock-in step) beside the network; labels write in as tentative (amber), get crossed when beaten, and lock (green ring) when smallest.
  3. **Trace-back chain** (scenes 4, 5, 9, 11): from the finish, arrows run back along the edges whose label sums match, lighting the path teal.
- **Colour roles (fixed n01 to n07).** Vertices blue; edges amber; tentative labels amber; locked labels green-ringed; the shortest path teal; answer green; mistake red.
- **Large type, handwritten voice.** Labels 44 px; table cells 40 px; working 52 px; nothing below 26 px; all text above y = 950. Hand tags: "fewer roads ≠ quicker", "first to arrive = quickest", "lock the smallest", "beaten: cross it", "trace back", "least total weight", "follow the arrows", "10 vertices at most". At most two live at once.
- **Stage changes (standard item 2).** The van network (1); split and spread (2); the label table (3); trace-back (4); the one-way bus network (5); method notes (6); framed card (7); question cards (8 to 11); the toll sign (12); key notes (13).
- **Worked examples (g01 order).** Scene 1: crossed-in-advance ghost "S-A-T = 10 min?". Scene 3: lock order "S 0; B 2; A 3 (2 + 1 beats 4); C 6 (3 + 3 beats 7); T 8 (6 + 2 beats 9)"; "shortest time: 8 min" (framed green). Scene 5: "A → C → B → D → E = 3 + 2 + 6 + 4 = 15 min" (framed green). Scene 4: "T 8 ← C 6 ← A 3 ← B 2 ← S 0"; "S → B → A → C → T, 8 min" (framed green); crossed "S → A → T, 10 min" (caption "fewer roads ≠ quicker").
- **Memory aid.** Framed card: "Label outwards. Lock in the smallest. Update its neighbours." Key line: "When the finish is locked, trace back: the shortest path has the least total weight, not the fewest edges."
- **Plain meanings at first use.** Shortest path ("the path between two vertices with the smallest total weight"); label ("the shortest time found so far to a vertex"); lock in ("make a label final, because nothing can reach that vertex faster").
- **Attempts.** A1 (pack question 1): P-R-Q-S, 7 min; crossed "P-R-S, 9 min" (caption "fewer roads ≠ quicker"). A2 (pack question 2): A-B-C-D-E-G, 15 min; crossed "A-C-E-G, 19 min" (caption "least total weight").
- **Mistake scene:** none separate. Fewest edges (1, 4, A1, A2); locking a non-smallest label (5, said); missing an update (3, the crossed labels); no trace-back (4); arrows backwards (5).
- **Cause chain taught, in order:** (1) the quickest way to each stop is found by the first copy to arrive, if every road is tried at once (2); (2) the stop with the smallest label is the next to be reached, so its label is final (2, 3); (3) a locked stop can give its neighbours shorter routes, so update them (3); (4) a final label came from one neighbour plus one edge, so tracing back recovers the path (4); (5) the total, not the number of roads, measures the path (4).
- **Entry knowledge (route):** math-s11-n04, n03, n02. Recalled in grey chips.
- **Site notes.** lesson06 recalculated: no error. ∞ replaced by "no route yet" for Standard students (a presentation choice, not an error).
- **Handoff (to math-s11-n07, when shortest isn't best).** Scene 12: board clear; the road sign post `ma11-road-sign-post-v1.png` (about 420 px tall) at the left with coded white text "TOLL" on its green board; at the right a coded network (900 px) with towns "A", "B", "C", "D", edges in km A-B "10", B-D "8", A-C "12", C-D "9", B-C "3", the A-B edge marked with a small toll icon and the shortest path A-B-D glowing teal; the share e-bike `ma11-share-ebike-v1.png` (about 220 px) above the hillside strip `ma12-hillside-strip-v1.png` (about 500 px) small at the bottom right; chips "shortest = best?", "Next: when shortest isn't best" and "?". n07 opens on this frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Van network (example minutes, undirected; the site's worked-table network made two-way): S-A 4, S-B 2, A-B 1, A-C 3, A-T 6, B-C 5, C-T 2. Lock order S 0, B 2, A 3, C 6, T 8. Path S-B-A-C-T (search confirms 8, unique).
  (b) A1: P-Q 5, P-R 2, R-Q 1, Q-S 4, R-S 7: P 0, R 2, Q 3, S 7; P-R-Q-S. Slip P-R-S = 9 (P-Q-S = 9 too).
  (b2) Bus (site WE3, directed): A→B 8, A→C 3, B→D 6, C→B 2, C→D 9, D→E 4: A 0, C 3, B 5, D 11, E 15.
  (c) A2: A 0, B 3, C 5 (3 + 2), D 8 (5 + 3), E 10 (8 + 2), F 14 (8 + 6), G 15 (10 + 5; via F 16). Path A-B-C-D-E-G. Slip A-C-E-G = 6 + 8 + 5 = 19.

Main question: *The van's eye picks two roads and 10 minutes. How do we find the shortest path through a network?*
Entry knowledge (math-s11-n04, n03, n02): paths; route totals; directed, weighted networks.
Stops after: the labelling method, its reason, tracing back, least weight against fewest edges, arrows, the 10-vertex limit.
Handoff: math-s11-n07: "Next: when shortest isn't best".

## Script and shots

Cue words in **bold** trigger the visual change. Colour roles (fixed): vertices blue; edges amber; tentative labels amber; locked labels green-ringed; shortest path teal; answer green; mistake red. Header strip "NETWORKS, PATHS AND TREES". Scene headings in the hand font, 44 px.

### 1. hook: the obvious route
> Here's the van's delivery network. The depot is S, the customer is T, and the numbers are minutes. Which way is quickest? Your eye goes straight to S, A, T. It's only two roads, four minutes plus six, ten minutes. But fewer roads doesn't always mean less time. There might be a route with more turns that's actually quicker. Delivery apps and map apps solve exactly this, thousands of times a second. On a small network you could list every route, but that gets out of hand fast. So how do we find the shortest path through a network, every **time**?

Visual: opens on n05's final frame exactly (the van, the network S, A, B, C, T with minute tags, chips "quickest way from S to T?", "Next: shortest paths", "?"). On "Your eye goes straight" the edges S-A and A-T glow; a ghost row "S → A → T = 4 + 6 = 10 min?" (amber, with a "?"). On "fewer roads" hand tag "fewer roads ≠ quicker?". On "list every route" a list starts scrolling ("S-A-T", "S-B-C-T", "S-A-C-T", "S-B-A-T", ...) and speeds up to a blur. On "time" heading "Shortest paths" writes on (hand font, 56 px).

### 2. the idea: first to arrive is quickest
> Here's the idea behind the method. Imagine the van could split, and send a copy down every road at once, all driving at the same speed. The first copy to reach a stop has found the quickest way there. It's like ripples spreading from a stone dropped in a pond, reaching the nearest places first. So we work outwards from the start, giving each stop a label, the shortest time found so far. Then we lock in whichever stop has the smallest label, because nothing could reach it any faster. Any other route to it would have to go through a stop that's already at least as far, and then travel further still. Then we use that stop to update its neighbours. Each lock-in is final. Keep going until the finish is locked **in**.

Visual: stage change (simulation 1): the network enlarged (1,300 px). On "split" van icons leave S along S-A and S-B, moving at a pace proportional to the weights; at each stop they split again. Arrival stamps pop: "B 2" first, then "A 3" (the copy via B arrives before the copy on S-A, which fades on arrival at "4"), "C 6", "T 8" (the later copies fade). On "first copy" hand tag "first to arrive = quickest". On "ripples" faint concentric rings spread from S across the network. On "label" a definition chip, 40 px, "label: shortest time found so far". On "lock in" chip "lock in the smallest" (hand tag "lock the smallest"). On "in" (bold) the stamps collapse into four ringed labels.

### 3. running the method
> Let's do it properly. S starts at nought, and it's locked in. From S, A is four and B is two. Write those as labels. The smallest unlocked label is B, two, so lock B in. Now update B's neighbours. A through B is two plus one, three, which beats four, so A's label drops to three. C through B is two plus five, seven. The smallest unlocked label is now A, three. Lock it in. A's neighbours. C through A is three plus three, six, which beats seven. T through A is three plus six, nine. Next smallest is C, six. Lock it. T through C is six plus two, eight, which beats nine. The only stop left is T, at eight. Lock it in. The shortest time from S to T is eight **minutes**.

Visual: stage change (simulation 2): the network at the right (900 px) with labels beside vertices; the table at the left, 40 px: columns "S", "A", "B", "C", "T"; rows "start", "lock B", "lock A", "lock C", "lock T". Unlabelled cells show "-". Each label writes as said (amber); each lock rings green in both table and network. On "drops to three" the "4" is crossed and "3" written (hand tag "beaten: cross it"); likewise "7" crossed for "6", "9" for "8". On "minutes" row "shortest time: 8 min" (framed green), the T label ringed.

### 4. tracing back the path
> But which route is it? Work backwards from the finish. T's label of eight came from C, because six plus two is eight. C's six came from A, three plus three. A's three came from B, two plus one. And B's two came straight from S. So the shortest path is S, B, A, C, **T**. You can check it by adding the weights along it, two, one, three and two, which is eight. Four roads, eight minutes, and it beats the obvious-looking S, A, T by two minutes. The shortest path isn't the one with the fewest **edges**. It's the one with the smallest total weight.

Visual: stage change (simulation 3): the network alone, labels ringed. On "T's label of eight came from C" an arrow runs T → C with "6 + 2 = 8"; C → A "3 + 3 = 6"; A → B "2 + 1 = 3"; B → S "0 + 2 = 2" (hand tag "trace back"). On "T" (bold) the path lights teal and the van icon drives S → B → A → C → T with a timer; row "S → B → A → C → T, 8 min" (framed green). On "obvious-looking" the ghost from scene 1 returns and is crossed: "S → A → T, 10 min" (caption "fewer roads ≠ quicker"). On "edges" (bold) hand tag "least total weight".

### 5. a one-way network
> The same method works when roads are one-way. Here's a small town's bus network, with one-way roads and times in minutes. The bus starts at A and needs to reach E. A is nought. Following the arrows, C gets three and B gets eight. Lock in C, three. From C, B is three plus two, five, which beats eight. And D is three plus nine, twelve. Lock in B, five. From B, D is five plus six, eleven, which beats twelve. Lock in D, eleven. From D, E is eleven plus four, fifteen. Lock it in. Now trace back. E came from D, D from B, B from C, and C from A. So the shortest path is A, C, B, D, E, fifteen **minutes**. Notice it goes through C to reach B, even though there's a road straight from A to B. The direct road takes eight minutes, and the way round takes **five**.

Visual: stage change (simulation 2, directed mode): a coded one-way network (1,000 px) with arrows: A→B 8, A→C 3, B→D 6, C→B 2, C→D 9, D→E 4 (site WE3's network); the bus `ma12-bus-side-v1.png` badge (about 260 px) at the top left; the label table at the left (columns A to E). Labels write, cross and lock as said: "C 3", "B 8 → 5", "D 12 → 11", "E 15" (hand tag "follow the arrows"). On "trace back" arrows run E → D → B → C → A; on "minutes" row "A → C → B → D → E = 3 + 2 + 6 + 4 = 15 min" (framed green). On "a road straight from A to B" the A→B edge glows with "8"; on "five" (bold) the route A → C → B glows with "3 + 2 = 5".

### 6. keeping the method tidy
> A few things keep the method tidy. Set it out as a table, with one column per vertex, so every label is written down. Only ever lock in the smallest label, never a bigger one. A label only ever goes down, never up, and once a stop is locked in, you never touch it again. In a directed network, like the bus, only follow the arrows when you update. And the networks you'll meet have at most ten vertices, so the table never gets too big. For a tiny network, listing routes is fine. For anything bigger, the labels are safer, because they can't miss a **route**.

Visual: stage change: a checklist at the left, 44 px, each line ticking as said: "one column per vertex", "lock the smallest only", "directed: follow the arrows" (hand tag "follow the arrows"), "at most 10 vertices" (hand tag "10 vertices at most"). At the right a small directed inset (three vertices with one arrow): an update that would go against the arrow is blocked with a red flash. On "route" a mini route list beside a mini label table; the list shows a skipped route in red that the table catches.

### 7. memory aid
> So here's shortest paths in one card. Label outwards from the start. Lock in the smallest label, then update its neighbours. When the finish is locked, trace back to read the **path**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the van network with the teal path and ringed labels. Main line, hand font 56 px: "Label outwards. Lock in the smallest. Update its neighbours." On "path" the key line, 40 px: "When the finish is locked, trace back: the shortest path has the least total weight, not the fewest edges." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. A cyclist rides from P to S. The times between junctions, in minutes, are P Q five, P R two, R Q one, Q S four, and R S seven. Find the shortest path from P to S, and its time. Pause here to answer.

Visual: `QuestionCard`, 40 px: "A cyclist rides from P to S. Times between junctions (minutes): P-Q 5, P-R 2, R-Q 1, Q-S 4, R-S 7. Find the shortest path from P to S and its time." Picture slot: the network drawn with weights; the share e-bike badge (about 160 px). Countdown ring shown full from "Pause here to answer.", then 10 s.

### 9. feedback 1 (brief)
> P is nought. R gets two and Q gets five. Lock R, two. Q through R is three, which beats five, and S through R is nine. Lock Q, three. S through Q is three plus four, seven, which beats nine. So the shortest path is P, R, Q, S, seven **minutes**. Taking P, R, S because it has fewer roads gives nine, and that's the **slip**.

Visual: the card shrinks to the top (30 px). A small label table runs: P 0; R 2, Q 5; lock R; Q 5 crossed → 3, S 9; lock Q; S 9 crossed → 7; lock S. Trace back lights P → R → Q → S teal; on "minutes" row "P → R → Q → S = 2 + 1 + 4 = 7 min" (framed green). On "slip" a red slip "P → R → S = 9 min" writes and is crossed (caption "fewer roads ≠ quicker"). Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. The network shows travel times, in minutes, between seven places, A to G. Use the labelling method to find the shortest path from A to G, and its length. Pause here to answer.

Visual: `QuestionCard`, 40 px: "The network shows travel times (minutes) between seven places. Use the labelling method to find the shortest path from A to G and its length." Picture slot: the network: A-B 3, A-C 6, B-C 2, B-D 7, C-D 3, C-E 8, D-E 2, D-F 6, E-G 5, F-G 2. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> The labels lock in like this. A nought, B three, C five, because B to C is two. D eight, through C. E ten, through D. F fourteen. And G fifteen, through E, which beats sixteen through F. Trace back from G, through E, D, C and B, to A. So the shortest path is A, B, C, D, E, G, fifteen **minutes**. A, C, E, G, with the fewest roads, is nineteen, and that's the **slip**.

Visual: the card shrinks to the top. Labels lock on the network one by one with their sums: "B 3", "C 5 (3 + 2)", "D 8 (5 + 3)", "E 10 (8 + 2)", "F 14 (8 + 6)", "G 15 (10 + 5; not 16)". Trace back lights A-B-C-D-E-G teal; on "minutes" row "A → B → C → D → E → G = 15 min" (framed green). On "slip" a red slip "A → C → E → G = 19 min" writes and is crossed (caption "least total weight"). Hold about 1 s.

### 12. handoff: when shortest isn't best
> So that's the shortest path. Label, lock, update, then trace back. The shortest path answers one question, the least distance or time. Real trips have other things to weigh up. So is the shortest path always the best one to take? What if it runs along a toll road, or a road that floods after rain, or straight up a steep hill on a bike? Sometimes a longer path is the better choice. When is the shortest path not the best path? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame (as under Decisions, "Handoff"): on "toll road" the road sign post `ma11-road-sign-post-v1.png` (about 420 px tall) at the left with coded white text "TOLL"; the coded network A, B, C, D at the right with the shortest path A-B-D glowing teal and a small toll icon on A-B; on "floods" a small rain icon flickers over one edge and fades; on "steep hill on a bike" the share e-bike (about 220 px) above the hillside strip (about 500 px) at the bottom right. Chip "shortest = best?". On "next" chips "Next: when shortest isn't best" and "?". Hold about 2 s. This is n07's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Shortest path: the path with the smallest total weight.
- Start at 0; label each neighbour with the time found so far.
- Lock in the smallest label; update its neighbours; repeat.
- Trace back from the finish to read the path.
- Fewest edges is not always shortest; follow arrows if directed.

Memory aid (framed card, right side, as in scene 7): *Label outwards. Lock in the smallest. Update its neighbours.* Key: *When the finish is locked, trace back: the shortest path has the least total weight, not the fewest edges.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and n07's opening frame.

## Teaching checks

- **Does it explain causes?** Why the smallest label is final: it's the next to be reached (2). Why update: a locked stop offers new routes (3). Why trace back works (4). Why weight, not edges (4).
- **Misconceptions addressed:** fewest edges (1, 4, A1, A2); a non-smallest lock (5); missed updates (3); no trace-back (4); arrows backwards (5).
- **Visual standard, item by item:** 1 the van network in the first 20 s; 2 a new stage every 40 to 70 s; 3 the split-and-spread race, the label table with crossings and locks, the trace-back chain; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 rows with framed answers and crossed slips; 8 framed card and five bullets; 9 the four-road route beating the two-road route.
- **One idea at a time:** the idea (2), the run (3), the path (4), a one-way network (5), tidy habits (6).
- **Response opportunity:** two unseen tasks with every demand visible; 10 s each; feedback about 23.8 s and 27.2 s.
- **Avoided double teaching:** n04's "path" and n03's route totals in chips; "shortest is not best" left to n07; Year 12 c03's critical path (the longest path) not mentioned.
- **Syllabus coverage:** `ci5aa7836f` (1 to 6, A1, A2; notes 1 to 5): at most 10 vertices (6; A2 has 7).
- **Out of scope by design:** the name Dijkstra; ∞ notation; networks over 10 vertices.

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original HSC style, 2 marks suggested, not an official marking scheme).** As on the card.
Model answer: P 0; R 2; Q 3 (2 + 1); S 7 (3 + 4): P-R-Q-S, 7 min. Classic mistake (crossed): "P-R-S, 9 min".

**Attempt 2 (scene 10; pack question 2, 3 marks suggested).** As on the card.
Model answer: A 0, B 3, C 5, D 8, E 10, F 14, G 15; A-B-C-D-E-G, 15 min. Classic mistake (crossed): "A-C-E-G, 19 min".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Obvious route | 10 min | 1, 4 |
| Bus (one-way) | 3, 8 → 5, 12 → 11, 15; A-C-B-D-E 15 min | 5 |
| Labels | 0, 2, 3, 6, 8; beaten 4, 7, 9 | 2, 3 |
| Path | S-B-A-C-T, 8 min | 4 |
| A1 | 0, 2, 3, 7; slip 9 | 8, 9 |
| A2 | 0, 3, 5, 8, 10, 14, 15; slip 19 | 10, 11 |
| Toll network (handoff) | 10, 8, 12, 9, 3 km | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated (24 Nov 2026, scratchpad `s11n/verify.py`, `python -I`; 0 failures); Codex to re-check.

- Van: S 0, B 2, A 3, C 6, T 8; path S-B-A-C-T; S-A-T = 10.
- Bus (directed): A 0, C 3, B 5, D 11, E 15; path A-C-B-D-E.
- A1: P 0, R 2, Q 3, S 7; P-R-S = 9.
- A2: A 0, B 3, C 5, D 8, E 10, F 14, G 15 (via F 16); A-C-E-G = 19.

## Memory aid check

- **"Label outwards. Lock in the smallest. Update its neighbours."** with key line **"When the finish is locked, trace back: the shortest path has the least total weight, not the fewest edges."** From the site's iteration and trace-back rules, in plain words. Meaning, as said in scene 7. Assumptions checked: weights are not negative (times and distances); ties may give two shortest paths (either is accepted; site WE2). It helps a new case: any delivery or road network of up to 10 vertices.
- **Considered, not used:** "Dijkstra" as a memory hook (not examinable; site's advice).

## Narration length estimate

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; `work/brief-review-s11-e/count.py`): **5,558 characters** in Revision 2 (Revision 1: 5,526), 13 scene headings. Characters per scene (1 to 13): 546, 717, 666, 540, 753, 556, 180, 209, 316, 185, 362, 441, 75. Feedback speech about 23.8 s and 27.2 s.

At 13.3 characters per second the speech is about 418 s. Holds and settling: two 10 s countdowns (20 s); short holds 6 s; settling for the spread race (2), the table (3) and the trace-back (4), about 18 s; the key-notes scene adds about 39 s beyond its line. Total **about 502 s**, 68 s under the 570 s cap.

Reserve trims if the voiced take runs long: scene 5's last two sentences.

## Scene list and build ids

Lesson key `m-s11n06` (route math-s11-n06). Explainer folder `src/explainer/lessons/math-s11-n06`; build inputs in `docs/production/claude-pm/lessons/math-s11-n06/` (at voicing).

In order (13 scene headings): hook-obvious-route, first-to-arrive, label-run, trace-back, one-way-network, tidy-method, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 35 s | 1 | The van network and the obvious route |
| 35 to 80 s | 2 | Split and spread |
| 80 to 150 s | 3 | The label table |
| 150 to 195 s | 4 | Trace-back |
| 195 to 255 s | 5 | The one-way bus network |
| 255 to 290 s | 6 | Tidy habits; a directed inset |
| 290 to 307 s | 7 | Framed memory card |
| 307 to 405 s | 8 to 11 | Question cards and countdowns, then feedback |
| 405 to 435 s | 12 | The toll sign |
| 435 to 480 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: n05's last frame continues into 1; 1 to 2 the network enlarges; 2 to 3 stage change; 3 to 4 stage change; 4 to 5 stage change; 5 to 6 stage change; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s11-n06-learning-review.md`, `science_check` = `checks/m-s11-n06-maths-check.md`.

## Assets

Inspected before choosing (24 Nov 2026, viewed on contact sheets): `ma12-delivery-van-v1.png`; `ma12-bus-side-v1.png`; `ma11-share-ebike-v1.png`; `ma11-road-sign-post-v1.png` (a blank green road sign on a post, for coded text); `ma12-hillside-strip-v1.png` (a dry hillside strip).

Need: none new. Reused: the five plates above.

Coded: networks, van icons and stamps, the label table, crossings and rings, trace-back arrows, the checklist and inset, the sign text, toll and rain icons, the boards, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `NetworkBoard` with the runner (n02), `RouteLister` (n03, scene 1 and 5 minis), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row n06):
1. **`SpreadRace`**: copies of an icon travel every edge from a source at a pace proportional to weight, splitting at vertices; first arrivals stamp their times and later copies fade. Check: B 2, A 3, C 6, T 8.
2. **`LabelTable`**: a shortest-path table linked to a `NetworkBoard`: tentative labels, crossed beaten labels, green lock rings, one row per lock; "-" for no label; directed mode follows arrows only. Check: van 0, 2, 3, 6, 8; A1 0, 2, 3, 7; A2 0, 3, 5, 8, 10, 14, 15.
3. **`TraceBack`**: from a target, arrows run to the neighbour whose label plus weight equals the target's label, recursively, lighting the path. Check: S-B-A-C-T; P-R-Q-S; A-B-C-D-E-G.

## Codex asset brief

No new plate. All five plates exist and were viewed.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" (including that each shortest path is unique).
2. Confirm the syllabus quote matches the route-inputs JSON exactly.
3. Confirm the method's name does not appear in narration or on screen.
4. Confirm both attempts carry every demand and show no answer.
5. Confirm scene 1 opens on n05's final frame exactly and scene 12 matches n07's Boundary.
6. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Shortest Paths: The Quickest Route Through a Network | Year 11 Maths Standard

(Title length: 78 characters.)

Description: Related lesson notes: https://hscscience.com.au/subjects/maths-standard/year11/networks-paths-and-trees/lesson06.sa.html

A delivery van's obvious two-road route takes 10 minutes, but a four-road route takes 8. Learn a reliable method for the shortest path: label outwards from the start, lock in the smallest label, update its neighbours, then trace back from the finish. See why it works, why the fewest roads isn't always quickest, and how to set it out on networks of up to 10 vertices. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 11, Networks, paths and trees. For Standard 1 and Standard 2.
Syllabus content (NSW Mathematics Standard 11-12, 2024, Year 11):
"Identify a shortest path on a network diagram with no more than 10 vertices"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fabf235394

Builds on: Minimum Spanning Trees: Connecting Everything for Less. Next: When the Shortest Path Isn't the Best Path.

#Year11Maths #MathsStandard #ShortestPath #HSCScience

## Open decisions

- **1. No ∞.** Unlabelled vertices show "-" with the meaning "no route found yet". If root prefers the site's ∞, only the table cells change.

## Review notes

- Revision 2 (24 Nov 2026): learning review resolved (N06-WHY). Next: Codex maths check and error check, then voicing and a build to grade A.
- Revision 1. Next: student learning review (trace from n05; check that the split-and-spread race explains "lock the smallest" before the rule, that each beaten label is crossed visibly, that trace-back is shown before attempts, that "fewer roads ≠ quicker" is felt in the hook and resolved in scene 4, and that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.

## Revision 3 (root, 25 November 2026): preflight and fact repairs

This section overrides earlier text. Sources: `../checks/m-s11-n06-maths-check.md`, `../checks/maths-standard-y11-official-facts.md` and `../checks/brief264-fact-checks-2026-11-24.md`. Repair log: `../checks/m-s11-preflight-repair-2026-11-25.md`.

- **Count (count-mismatch): fixed.** The declared 5,558 included the spaces between scenes; the sum of the 13 scene strings at Revision 2 was 5,546 (Codex's value). Narration is **5,546 characters**. Counted in Python the same way as Codex (`> ` lines inside each `### N.` scene joined with a space, `**` removed, scenes summed with no separator; Revision 2 sum matches `work/brief271/source-inventory.json`). At 13.3 characters per second the speech is about 417 s; total about 501 s with holds, under the 570 s cap. The header line is updated; earlier totals under "Narration length estimate" and in Revision 2 are superseded.
- **Official facts:** none in the fact sheets apply to this design.
- **Narration changed: no.**
- No em or en dashes added. Ready for the Codex re-check; human listening still pending.

Revision 3 addendum (root, 25 November 2026): 162 en dashes in screen labels and author notes replaced (number ranges with "to", path and edge labels with hyphens, for example T-L-R-V). No narration change.
