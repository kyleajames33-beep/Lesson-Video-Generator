# Maths S11 N03: How do we draw a network from a table or a map and use it to solve a problem? Distance tables (half is enough when it's symmetric), maps without their curves, routes compared by total weight, and from-to tables that make directed, weighted networks (design)

Status: Revision 2 (24 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (24 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), `math-s11-n01.md` and `n02.md` (Revision 1, this batch), the Year 12 designs that recall this video (`math-s12-c01a.md`, `c02.md`, `f01.md`: a network from a table), the coherence audit and root's Standard rulings 1 to 99. Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,664 characters by script (see "Narration length estimate"; Revision 2), 13 scene headings, about 509 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: third video of the Year 11 Networks, paths and trees strand, outline playlist order 56. One video for Standard 1 and Standard 2. Viewers arrive from n02's final frame. Pre-design pack: `../pre-design/maths-standard/math-s11-n03.md`. Route entry: `math-s11-n03` in `../../programme/maths-standard-route-inputs-13.json`. Site lessons: lesson01 card 05; lesson02 (matrices, 2017 content; the "cell is a connection" idea only). Visual system: maths studio kit; the rail trail, hiking valley and delivery van plates (existing); tables, maps and networks coded.

Owner rules applied: as n01 (header strip "NETWORKS, PATHS AND TREES" only; one question; one stage at a time; plain meanings; two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors; no people; Australian spelling; no em dashes).

Syllabus content points (Mathematics Standard 11-12 (2024), Year 11, Networks, paths and trees, "Network concepts", common to Standard 1 and Standard 2), quoted from `../../programme/maths-standard-route-inputs-13.json`:

- `ci022052d4`: "Construct a network diagram to represent information from a given table or map, showing weighted and directed edges"
- `ci51fdc3e5`: "Solve problems involving network diagrams in a variety of practical contexts"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fabf235394

**Boundary:** starts from n02's final frame exactly (the rail trail `ma11-rail-trail-v1.png`, about 1,100 px wide, across the top with five coded stop markers "Trailhead", "Lake", "Mill", "Ridge", "Village"; a coded distance table below; chips "table → network?", "Next: networks from tables and maps" and "?"). Recalls n02 (directed, weighted networks; route totals), t01 (decimal hours) and f04a (time = distance ÷ speed) in grey chips. Teaches: drawing from a two-way distance table, from a map, and from a from-to table; solving by comparing route totals; a ride time; return trips in a directed network. Not taught: a systematic shortest-path method (n06); trees (n04).

## Revision 2: learning review resolved (24 Nov 2026)

Source review: `../checks/m-s11-n03-learning-review.md`; resolution record `../checks/m-s11-t-n-learning-review-resolution.md`.

- **N03-FEWEST (should fix, root's ruling 8): accepted, the reviewer's option (b).** The trail's Mill to Village edge is now 9 km (was 5), so the worked example shows the contrast its tag names. Every simple route from the Trailhead to the Village, by listing: T–L–R–V 16 km (three edges), T–M–V 18 km (two edges, the fewest stops), T–L–M–V 19 km, T–M–L–R–V 23 km. The shortest, 16 km, is unique and is not the fewest-stops route. Scene 4 now says "So the shortest ride is Trailhead, Lake, Ridge, Village, sixteen kilometres, even though the route through the Mill has fewer stops", and the tag "least total, not fewest stops" sits beside T–M–V with a chip "fewest stops: 18 km". Ride time 16 ÷ 12 = 4/3 h = 1⅓ h = 1 h 20 min (was 14 km and 1 h 10 min). Updated with it: scene 2's narration ("Mill to Village nine") and table, scene 3's map label ("9 km"), the Decisions lines, author note (a), Numbers used, Numbers to verify, the `RouteLister` check and the error-check brief. n02's handoff table (n03's opening frame) now shows 9 in the M–V cell (recorded in n02's Revision 2), so the join stays exact.
- **N03-INITIALS (should fix, root's ruling 8): accepted, matching initials.** The one-way town's places are now the Car park (C), School (S), Hall (H; was the Shops) and Pool (P), so each label is its place's first letter. Rows read "C → S → H → P = 3 + 4 + 2 = 9 min" and "P → S → H → C = 5 + 4 + 6 = 15 min"; the table cells, runner, author note (b) and narration ("the Hall") match. No time changed.
- A1, A2 and the handoff are unchanged.
- Narration 5,664 characters (Revision 1: 5,558); about 509 s with holds, under the 570 s cap. Review file reference unchanged (`checks/m-s11-n03-learning-review.md` already matches).

## Decisions

- **Anchor: the rail trail and its table (n02's frame).** A grid of numbers is how network data usually arrives; a drawing is how we think with it.
- **Two-way tables: symmetric, so half is enough.** The table is mirrored across its diagonal because a path is the same length both ways; each filled cell in the top half becomes one weighted edge; a dash means no direct path (not zero).
- **Maps: keep the numbers, drop the curves.** The trail map's winding paths straighten into the same network the table gave (visual surprise: the two drawings snap onto each other).
- **Solving on a small network: list and add.** Three routes from the Trailhead to the Village (16, 18, 19 km; Revision 2, M–V is 9 km); the fewest stops (T–M–V, two edges, 18 km) is not the shortest (T–L–R–V, three edges, 16 km); then a ride time at 12 km/h (16 ÷ 12 = 1⅓ h = 1 h 20 min, t01's decimal hours). Bigger networks wait for n06's method (named, not taught).
- **From-to tables: row is where the arrow starts.** One-way streets with driving times; the table is not symmetric; each filled cell becomes an arrow. Car park to Pool 9 min, back 15 min.
- **Year 12 wording.** "Directed, weighted network" is said and shown (scene 5), as Year 12 f01 recalls; c01a's "a network from a table" is this video.
- **Simulations (standard item 3).**
  1. **Table-to-network builder** (scenes 2, 5, feedback 1, feedback 2): a cell lights; its row and column headers light; an edge (or, in from-to mode, an arrow from the row's vertex to the column's) draws between the matching vertices with the cell's number as its weight tag; in two-way mode the mirror cell greys with a "same path" tag.
  2. **Map straightener** (scene 3): curved paths with length labels relax into straight edges; then the drawing slides onto the table-built network and the two coincide.
  3. **Route lister** (scene 4, feedback 1): each route lights in turn with a running total; a bar chart of totals ranks them.
  4. **Van runner** (scene 6, feedback 2; from n02): runs along arrows with a trip timer.
- **Colour roles (fixed n01 to n07).** Vertices blue; edges and arrows amber; weights white on amber; table cells being read teal; routes teal; answer green; mistake red.
- **Large type, handwritten voice.** Table cells 40 px; working 52 px; nothing below 26 px; all text above y = 950. Hand tags: "same both ways", "dash: no path", "half is enough", "keep the numbers, drop the curves", "least total, not fewest stops", "row = from", "check the arrows". At most two live at once.
- **Stage changes (standard item 2).** The trail and table (1); the table builder (2); the map straightener (3); the route lister and ride time (4); the one-way town table (5); the van runner (6); framed card (7); question cards (8 to 11); the camp map (12); key notes (13).
- **Worked examples (g01 order).** Scene 2: "T–L 6, T–M 9, L–M 4, L–R 7, M–V 9, R–V 3: 6 edges" (framed green). Scene 4: "T–L–R–V = 16; T–M–V = 18; T–L–M–V = 19 → 16 km" (framed green); "16 ÷ 12 = 1⅓ h = 1 h 20 min" (framed green). Scene 5: "C→S 3, S→H 4, H→C 6, H→P 2, P→S 5" (arrows; C Car park, S School, H Hall, P Pool). Scene 6: "C → S → H → P = 3 + 4 + 2 = 9 min"; "P → S → H → C = 5 + 4 + 6 = 15 min" (framed green).
- **Memory aid.** Framed card: "Name the vertices, then turn every filled cell into an edge, with its number as the weight." Key line: "Same both ways: draw lines (use half the table). Row to column only: draw arrows. A dash means no edge."
- **Plain meanings at first use.** Symmetric table ("the same number on both sides of the diagonal, because the path is the same both ways"); from-to table ("each row says where you start, each column where you finish").
- **Attempts.** A1 (pack question 1): A–B–C–D, 10 km; crossed "A–C–D (fewest stops)" (caption "least total, not fewest stops"). A2 (pack question 2): 7 min; no; crossed "L → K: 3 min" (caption "row = from").
- **Mistake scene:** none separate. Double-drawing a symmetric table (2); a dash as zero (2, said); fewest stops (4, A1); reading a cell backwards (5, A2); keeping curves (3).
- **Cause chain taught, in order:** (1) each cell gives one direct connection and its weight, so each filled cell becomes an edge (2); (2) two-way paths make the table symmetric, so half the table holds every edge once (2); (3) a map's shape isn't network information, so only stops, paths and lengths carry over (3); (4) a route's length is the sum of its weights, so compare totals, not the number of stops (4); (5) one-way travel makes a table lose its symmetry, so each cell becomes an arrow from its row to its column, and trips there and back can differ (5, 6).
- **Entry knowledge (route):** math-s11-n02, n01, t01, f04a. Recalled in grey chips.
- **Site notes.** MSY-30 (no table or map construction; no practical problem set).
- **Handoff (to math-s11-n04, paths, trees and spanning trees).** Scene 12: board clear; the hiking valley `ma12-hiking-valley-v1.png` (about 1,100 px wide) with five coded cabin dots "A" to "E" (blue) and seven amber path edges with metre tags "40", "60", "30", "50", "45", "70", "35" (as n04 scene 2); a small coded lamp icon; chips "light every cabin, least path?", "Next: paths, trees and spanning trees" and "?". n04 opens on this frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Trail (example km; Revision 2: M–V 9, was 5): T–L 6, T–M 9, L–M 4, L–R 7, M–V 9, R–V 3. Every simple route T→V: T–L–R–V 16, T–M–V 18, T–L–M–V 19, T–M–L–R–V 23. Shortest 16, unique (verified by listing). 16 ÷ 12 = 4/3 h = 1 h 20 min.
  (b) One-way town (example min; Revision 2 labels: C Car park, S School, H Hall (was the Shops), P Pool): C→S 3, S→H 4, H→C 6, H→P 2, P→S 5. C→P 9; P→C 15; S→P 6.
  (c) A1: A–B–C–D 10; A–C–D 11; A–B–D 11; A–C–B–D 8 + 2 + 6 = 16. A2: J→K→L 7; J→K→M→L 12; L→K via J = 9.

Main question: *A rail trail's distances arrive as a table. How do we draw a network from a table or a map and use it to solve a problem?*
Entry knowledge (math-s11-n02, n01, t01, f04a): directed, weighted networks; decimal hours; time = distance ÷ speed.
Stops after: two-way tables, maps, route totals, a ride time, from-to tables, return trips.
Handoff: math-s11-n04: "Next: paths, trees and spanning trees".

## Script and shots

Cue words in **bold** trigger the visual change. Colour roles (fixed): vertices blue; edges and arrows amber; weights white on amber; cells being read teal; routes teal; answer green; mistake red. Header strip "NETWORKS, PATHS AND TREES". Scene headings in the hand font, 44 px.

### 1. hook: a grid of numbers
> Here's the rail trail, and a table of distances between its stops, in kilometres. Five stops, Trailhead, Lake, Mill, Ridge and Village, and a grid of numbers. A table like this is how network information usually arrives, in a brochure, a timetable or an exam question. Every timetable and road atlas is hiding a network. But a grid of numbers is hard to think with. A network is much easier. So how do we draw a network from a table or a map, and use it to solve a **problem**?

Visual: opens on n02's final frame exactly (the rail trail with five stop markers, the distance table, chips "table → network?", "Next: networks from tables and maps", "?"). On "Five stops" the markers pulse; on "a grid of numbers" the table's cells ripple. On "hard to think with" the table blurs slightly; on "much easier" a faint network sketch flickers beside it. On "problem" heading "Networks from tables and maps" writes on (hand font, 56 px).

### 2. a distance table: half is enough
> Start with the table. The stops label the rows and the columns. Each cell says how far it is between the row's stop and the column's stop, along one direct path. A dash means there's no direct path. Read along the Trailhead row. Six kilometres to the Lake, nine to the Mill, and dashes for the Ridge and the Village. Notice that the same six appears again, in the Lake row, under Trailhead. A path is the same length both ways, so the table is symmetric, a mirror image across its diagonal. That means you only need half of it. Now draw. Vertices first, five dots. Then each filled cell in the top half becomes an edge, with its number as the weight. Trailhead to Lake six, Trailhead to Mill nine, Lake to Mill four, Lake to Ridge seven, Mill to Village nine, and Ridge to Village three. Six cells, six weighted **edges**.

Visual: stage change (simulation 1): the table enlarged at the left (cells 40 px): rows and columns "T", "L", "M", "R", "V" (with full names on hover tags), cells: T–L 6, T–M 9, L–M 4, L–R 7, M–V 9, R–V 3 and their mirrors; "–" elsewhere; the diagonal shaded. On "A dash" a dash cell pulses (hand tag "dash: no path"). On "Trailhead row" the row lights teal, cell by cell. On "the same six appears again" the L-row T-column "6" rings and a mirror line draws along the diagonal (hand tag "same both ways"); on "half of it" the bottom half greys (hand tag "half is enough"). On "Vertices first" five blue dots drop at the right. On each named cell, the builder lights the cell, its headers, and draws the matching amber edge with its weight tag. On "edges" row "6 cells → 6 weighted edges" (framed green).

### 3. a map: keep the numbers, drop the curves
> Maps work the same way. Here's the trail map itself. The paths curve around hills and creeks, with their lengths printed beside them. To make a network, each stop becomes a vertex, and each path between two stops becomes an edge, with its length as the weight. The curves disappear, because a network only keeps what's joined to what, and the numbers we write on it. The map's scale and compass directions don't come across either. Only the stops, the paths and their lengths. And look. It's exactly the same network we drew from the **table**. A table and a map are just two ways of storing the same information.

Visual: stage change (simulation 2): a coded trail map (1,300 px): the five stops as station icons, six winding grey paths with length labels "6 km", "9 km", "4 km", "7 km", "9 km", "3 km", a small creek line and hill shading. On "each stop becomes a vertex" blue dots appear on the stations. On "each path" each path in turn highlights amber; on "The curves disappear" the paths relax into straight edges keeping their labels (hand tag "keep the numbers, drop the curves"). On "table" (bold) the table-built network from scene 2 slides in and snaps onto this one exactly; a check "same network".

### 4. solving: compare the totals
> Now use it. What's the shortest ride from the Trailhead to the Village? With a network this small, list the possible routes and add the weights. Trailhead, Lake, Ridge, Village is six plus seven plus three, sixteen kilometres. Trailhead, Mill, Village is nine plus nine, eighteen. And Trailhead, Lake, Mill, Village is six plus four plus nine, nineteen. So the shortest ride is Trailhead, Lake, Ridge, Village, sixteen **kilometres**, even though the route through the Mill has fewer stops. And if you ride at twelve kilometres an hour, sixteen divided by twelve is one and a third hours, which is one hour twenty **minutes**. With bigger networks, listing every route gets out of hand, and there's a systematic method for that later in the strand.

Visual: stage change (simulation 3): the network at the left; the route lister at the right. On "Trailhead, Lake, Ridge" the route lights teal with a running total "6 + 7 + 3 = 16"; on "Trailhead, Mill" "9 + 9 = 18"; on "Trailhead, Lake, Mill" "6 + 4 + 9 = 19". A bar chart ranks the three totals; on "kilometres" (bold) the shortest bar and route turn green, row "T → L → R → V = 16 km" (framed green); on "fewer stops" the two-edge route T → M → V glows grey with a chip "fewest stops: 18 km" and the hand tag "least total, not fewest stops" sits beside it (Revision 2, N03-FEWEST: the worked example now shows the contrast). On "twelve kilometres an hour" the share e-bike `ma11-share-ebike-v1.png` (about 300 px) at the top right; grey chips "f04a: time = distance ÷ speed", "t01: decimal hours"; on "minutes" (bold) row "16 ÷ 12 = 1⅓ h = 1 h 20 min" (framed green). On "later in the strand" chip "n06: a method".

### 5. a from-to table: arrows
> Some tables have a direction built in. Here's a town with one-way streets, and a table of driving times in minutes. This time the rows mean from, and the columns mean to. From the Car park to the School is three minutes. But look in the School row, under the Car park. There's a dash, because you can't drive that street the other way. The table isn't symmetric any more, so every filled cell becomes an arrow, pointing from the row's place to the column's place. Car park to School three, School to the Hall four, the Hall to the Car park six, the Hall to the Pool two, and Pool to School five. That's a directed, weighted network, drawn straight from the **table**.

Visual: stage change (simulation 1, from-to mode): a from-to table at the left, rows labelled "from", columns "to": "Car park", "School", "Hall", "Pool" (vertex labels C, S, H, P, each the place's first letter; Revision 2, N03-INITIALS); cells C→S 3, S→H 4, H→C 6, H→P 2, P→S 5; dashes elsewhere. The delivery van `ma12-delivery-van-v1.png` (about 260 px) at the top right as the town's driver. On "rows mean from" a "from →" arrow runs down the row labels; on "columns mean to" a "to ↓" arrow along the column labels (hand tag "row = from"). On "three minutes" the P-row S-column "3" rings; on "under the Car park" the S-row P-column dash rings with a chip "no way back on this street". On "isn't symmetric" the mirror line draws and the cells fail to match. On each named cell, the builder draws an amber arrow from the row's vertex to the column's with its weight. On "table" (bold) row "directed, weighted network" (grey chip "n02: arrows with directions and weights").

### 6. arrows change the answers
> Now the arrows change the answers. Drive from the Car park to the Pool, following the arrows. Car park to School, three, School to the Hall, four, the Hall to the Pool, two. That's nine **minutes**. Now come home. There's no arrow from the Pool to the Car park, so you go Pool to School, five, School to the Hall, four, and the Hall to the Car park, six. That's fifteen minutes, for the same two places. That's the network telling you something useful. A driver who only looked at the street map might plan the trip home completely wrong. In a directed network, always check which way the arrows point before you add a **single** weight.

Visual: the network stays (continue); the van runner (n02) appears at the Car park. On "following the arrows" it runs C → S → H → P with the timer "3", "+4", "+2"; on "minutes" row "C → S → H → P = 9 min" (framed green). On "come home" it tries P → C directly and bounces (red flash "no arrow"), then runs P → S → H → C, timer "5", "+4", "+6"; on "fifteen minutes" row "P → S → H → C = 15 min" (framed green). On "single" hand tag "check the arrows".

### 7. memory aid
> So here's tables to networks in one card. Name the vertices, then turn every filled cell into an edge, with its number as the weight. If the table is the same both ways, draw lines. If it only works from row to column, draw **arrows**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: a small symmetric table beside a small from-to table, each with its network. Main line, hand font 52 px: "Name the vertices, then turn every filled cell into an edge, with its number as the weight." On "arrows" the key line, 40 px: "Same both ways: draw lines (use half the table). Row to column only: draw arrows. A dash means no edge." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. This table gives the distances, in kilometres, along direct paths between four lookouts, A, B, C and D. Draw the network. Then find the shortest route from A to D, and its length. Pause here to answer.

Visual: `QuestionCard`, 40 px: "The table gives distances (km) along direct paths between four lookouts. Draw the network, then find the shortest route from A to D and its length." Picture slot: the symmetric table (rows and columns A, B, C, D; A–B 5, A–C 8, B–C 2, B–D 6, C–D 3; A–D "–"; mirrors filled). Countdown ring shown full from "Pause here to answer.", then 10 s.

### 9. feedback 1 (brief)
> Four vertices, and five edges. A B five, A C eight, B C two, B D six, and C D three. Now the routes. A, B, D is eleven. A, C, D is eleven. And A, B, C, D is five plus two plus three, ten. So the shortest is A, B, C, D, ten **kilometres**. Choosing A, C, D because it has the fewest stops is the **slip**.

Visual: the card shrinks to the top (30 px). The builder draws the five edges from the table's top half. The route lister: "A–B–D = 11", "A–C–D = 11", "A–B–C–D = 10"; on "kilometres" row "A → B → C → D = 10 km" (framed green). On "slip" a red slip "A–C–D (fewest stops)" writes and is crossed (caption "least total, not fewest stops"). Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. This from-to table gives one-way travel times, in minutes, between four stops, J, K, L and M. What's the quickest trip from J to L? And can you travel straight from L to K? Pause here to answer.

Visual: `QuestionCard`, 40 px: "The from-to table gives one-way travel times (minutes). (a) What is the quickest trip from J to L? (b) Can you travel directly from L to K?" Picture slot: the from-to table (rows "from" J, K, L, M; columns "to"; J→K 4, K→L 3, L→J 5, K→M 6, M→L 2; dashes elsewhere). Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> From J, the only arrow goes to K, four minutes. Then K to L is three, so seven **minutes**. The other way, through M, takes twelve. From L, the only arrow goes to J, so there's no direct trip from L to K, **no**. Reading the K to L cell backwards, as three minutes from L to K, is the **slip**.

Visual: the card shrinks to the top; the builder draws the five arrows. On "minutes" the runner goes J → K → L, row "(a) J → K → L = 4 + 3 = 7 min" (framed green), and a grey "J → K → M → L = 12". On "no" L's single arrow to J glows, row "(b) No: L's only arrow goes to J" (framed green). On "slip" a red slip "L → K: 3 min" writes and is crossed (caption "row = from"). Hold about 1 s.

### 12. handoff: paths, trees and spanning trees
> So that's networks from tables and maps. Vertices first, then every number becomes a weighted edge. Here's a new kind of question. A school camp has five cabins, and seven possible paths between them. The camp wants to light some of the paths at night, so every cabin can be reached, without lighting more path than it needs. Which paths should it pick? First we need the words. Paths, trees and spanning trees are **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame (as under Decisions, "Handoff"): on "school camp" the hiking valley `ma12-hiking-valley-v1.png` (about 1,100 px wide); on "five cabins" five coded cabin dots "A" to "E" (blue); on "seven possible paths" seven amber edges draw with metre tags "40", "60", "30", "50", "45", "70", "35"; on "light some of the paths" a small coded lamp icon glows at the top right. Chip "light every cabin, least path?". On "next" chips "Next: paths, trees and spanning trees" and "?". Hold about 2 s. This is n04's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Table: rows and columns are vertices; each filled cell is an edge.
- Symmetric table: two-way edges; use one half only.
- From-to table: arrow from the row to the column.
- Map: keep stops, paths and lengths; drop the curves.
- Compare routes by total weight, not by number of stops.

Memory aid (framed card, right side, as in scene 7): *Name the vertices, then turn every filled cell into an edge, with its number as the weight.* Key: *Same both ways: draw lines (use half the table). Row to column only: draw arrows. A dash means no edge.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and n04's opening frame.

## Teaching checks

- **Does it explain causes?** Why each cell is an edge (2). Why half the table (2). Why curves vanish (3). Why compare totals (4). Why arrows from a from-to table (5). Why return trips differ (6).
- **Misconceptions addressed:** double-drawing (2); dash as zero (2); fewest stops (4, A1); a cell read backwards (5, A2); keeping curves (3).
- **Visual standard, item by item:** 1 the trail and its table in the first 20 s; 2 a new stage every 40 to 70 s; 3 the table builder lighting cells into edges, the map straightener snapping onto the table network, the route lister, the van runner; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 rows with framed answers and crossed slips; 8 framed card and five bullets; 9 two different sources snap into one network.
- **One idea at a time:** two-way tables (2), maps (3), solving (4), from-to tables (5), directions in solving (6).
- **Response opportunity:** two unseen tasks with every demand visible (each card shows its table); 10 s each; feedback about 22.3 s and 21.2 s.
- **Avoided double teaching:** n02's terms in chips; f04a's speed and t01's decimal hours in chips; n06's method named only.
- **Syllabus coverage:** `ci022052d4` (2, 3, 5, A1, A2; notes 1 to 4): tables and maps, weighted and directed. `ci51fdc3e5` (4, 6, A1, A2; note 5): practical problems (a ride, a drive, lookouts, a transit loop).
- **Out of scope by design:** 0/1 adjacency matrices; a systematic shortest-path method (n06).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original HSC style, 3 marks suggested, not an official marking scheme).** As on the card.
Model answer: edges A–B 5, A–C 8, B–C 2, B–D 6, C–D 3; A–B–C–D = 10 km (A–C–D 11; A–B–D 11). Classic mistake (crossed): "A–C–D (fewest stops)".

**Attempt 2 (scene 10; pack question 2, 2 marks suggested).** As on the card.
Model answer: (a) J → K → L = 7 min. (b) No: L's only arrow goes to J. Classic mistake (crossed): "L → K: 3 min".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Trail table | 6 edges: 6, 9, 4, 7, 9, 3 km | 2, 3 |
| Routes | 16, 18, 19 km; 16 km (fewest stops 18 km) | 4 |
| Ride | 1⅓ h = 1 h 20 min | 4 |
| One-way town | 3, 4, 6, 2, 5 min; 9 min; 15 min | 5, 6 |
| A1 | 11, 11, 10 km | 8, 9 |
| A2 | 7 min; 12 min; no | 10, 11 |
| Camp (handoff) | 40, 60, 30, 50, 45, 70, 35 m | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated (24 Nov 2026, scratchpad `s11n/verify.py`, `python -I`; 0 failures); Codex to re-check.

- 6 + 7 + 3 = 16; 9 + 9 = 18; 6 + 4 + 9 = 19; 9 + 4 + 7 + 3 = 23; 16 is the unique shortest Trailhead to Village distance (listing; Revision 2).
- 16 ÷ 12 = 4/3 h = 1⅓ h; 1/3 × 60 = 20, so 1 h 20 min.
- 3 + 4 + 2 = 9; 5 + 4 + 6 = 15.
- A1: 5 + 6 = 11; 8 + 3 = 11; 5 + 2 + 3 = 10 (shortest, search). A2: 4 + 3 = 7; 4 + 6 + 2 = 12; L's only out-edge is L → J.

## Memory aid check

- **"Name the vertices, then turn every filled cell into an edge, with its number as the weight."** with key line **"Same both ways: draw lines (use half the table). Row to column only: draw arrows. A dash means no edge."** Original. Meaning, as said in scene 7. Assumptions checked: the table gives direct connections only (2); in a from-to table the row is the start (5; an exam table should say so, and the video's tables label "from" and "to"). It helps a new case: a ferry timetable's from-to grid.
- **Considered, not used:** "read across, then down" (ambiguous about direction).

## Narration length estimate

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; `work/brief-review-s11-e/count.py`): **5,664 characters** in Revision 2 (Revision 1: 5,558), 13 scene headings. Characters per scene (1 to 13): 473, 818, 609, 740, 663, 629, 231, 212, 296, 204, 282, 420, 75. Feedback speech about 22.3 s and 21.2 s.

At 13.3 characters per second the speech is about 426 s. Holds and settling: two 10 s countdowns (20 s); short holds 6 s; settling for the builder (2, 5), the straightener (3) and the route lister (4), about 18 s; the key-notes scene adds about 39 s beyond its line. Total **about 509 s**, 61 s under the 570 s cap.

Reserve trims if the voiced take runs long: scene 4's last sentence (keep the "n06" chip); scene 3's last sentence.

## Scene list and build ids

Lesson key `m-s11n03` (route math-s11-n03). Explainer folder `src/explainer/lessons/math-s11-n03`; build inputs in `docs/production/claude-pm/lessons/math-s11-n03/` (at voicing).

In order (13 scene headings): hook-grid-of-numbers, distance-table, map-to-network, compare-routes, from-to-table, arrows-change-answers, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 32 s | 1 | The trail and its table |
| 32 to 100 s | 2 | The table builder |
| 100 to 145 s | 3 | The map straightener |
| 145 to 205 s | 4 | The route lister and ride time |
| 205 to 262 s | 5 | The from-to table |
| 262 to 300 s | 6 | The van runner |
| 300 to 317 s | 7 | Framed memory card |
| 317 to 405 s | 8 to 11 | Question cards and countdowns, then feedback |
| 405 to 438 s | 12 | The camp map |
| 438 to 483 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: n02's last frame continues into 1; 1 to 2 the table enlarges; 2 to 3 stage change; 3 to 4 stage change; 4 to 5 stage change; 5 to 6 continue; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s11-n03-learning-review.md`, `science_check` = `checks/m-s11-n03-maths-check.md`.

## Assets

Inspected before choosing (24 Nov 2026, viewed on contact sheets): `ma11-rail-trail-v1.png`; `ma11-share-ebike-v1.png` (a teal share e-bike, side view, no rider); `ma12-delivery-van-v1.png`; `ma12-hiking-valley-v1.png` (a bush valley with a winding track, a long strip).

Need: none new. Reused: the four plates above.

Coded: tables, the builder, the trail map, the straightener, the route lister and bars, the networks, the runner, cabin dots and lamp icon, the boards, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `NetworkBoard` with directed and weighted mode and the runner (n02), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row n03):
1. **`TableToNetwork`**: a distance table (two-way or from-to) linked to a `NetworkBoard`; reading a cell lights its headers and draws its edge or arrow with the weight; two-way mode greys the mirror half. Check: trail table → 6 edges; one-way table → 5 arrows; A1 → 5 edges; A2 → 5 arrows.
2. **`MapStraightener`**: curved polylines with length labels relax into straight edges and snap onto a target network. Check: the six trail paths land on the table-built edges.
3. **`RouteLister`**: lists routes between two vertices with running totals and a ranked bar chart. Check: 16, 18, 19 → 16; A1 11, 11, 10 → 10. Reused n06, n07.

## Codex asset brief

No new plate. All four plates exist and were viewed.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", including that 16 km and 10 km are the shortest distances and that 7 min is the quickest J to L time.
2. Confirm both syllabus quotes match the route-inputs JSON exactly.
3. Confirm every table and network is labelled as an example and that the from-to tables label "from" and "to".
4. Confirm both attempts carry every demand and show no answer.
5. Confirm scene 1 opens on n02's final frame exactly and scene 12 matches n04's Boundary.
6. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Drawing Networks from Tables and Maps | Year 11 Maths Standard

(Title length: 63 characters.)

Description: Related lesson notes: https://hscscience.com.au/subjects/maths-standard/year11/networks-paths-and-trees/lesson01.sa.html

Network information usually arrives as a table of distances or a map. Learn how to turn every number in a table into a weighted edge, why a two-way table only needs half its cells, how a winding trail map becomes the same network, how a from-to table gives a directed, weighted network, and how to compare routes by their total weight. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 11, Networks, paths and trees. For Standard 1 and Standard 2.
Syllabus content (NSW Mathematics Standard 11-12, 2024, Year 11):
"Construct a network diagram to represent information from a given table or map, showing weighted and directed edges"
"Solve problems involving network diagrams in a variety of practical contexts"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fabf235394

Builds on: Network Words: Degree, Directed and Weighted. Next: Paths, Trees and Spanning Trees.

#Year11Maths #MathsStandard #Networks #HSCScience

## Open decisions

- **1. Adjacency matrices.** Not taught (2017 content; the site's lesson02). If root wants one sentence linking "a table of 1s and 0s" to this method, scene 2 can take it.

## Review notes

- Revision 2 (24 Nov 2026): learning review resolved (N03-FEWEST, N03-INITIALS). Next: Codex maths check and error check, then voicing and a build to grade A.
- Revision 1. Next: student learning review (trace from n02; check that "a dash means no path" lands before drawing, that symmetry is explained by "same both ways" before halving, that the map and table snap into one network, that the fewest-stops slip is felt in scene 4 before A1, that "row = from" is stated before any arrow is drawn, and that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
