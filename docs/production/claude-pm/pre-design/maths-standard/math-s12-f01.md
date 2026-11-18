# math-s12-f01: How do source, sink, capacity and cuts describe a flow network?

Maths Standard research pack (Year 12, Network flow), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Network flow):

- `ci87d0361a`: Define and use network flow terminology including source, sink, outflow, inflow and cut [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fafe0a915b). Site coverage: covered.
- `cie0dcd4b6`: Convert information presented in a table to a weighted and directed network diagram [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fafe0a915b). Site coverage: covered.

These are CMS codenames, not published content-point codes.

**Course:** Standard 2 only. Playlist order 89. **Standard 1:** the 2024 Standard 1 course has no network flow; Standard 1 viewers finished at math-s12-p08 (see z01).

**Entry knowledge (outline dependency list):** math-s11-n02: `cica79bb9b` (directed networks and weighted edges). math-s11-n03: `ci022052d4` (a network from a table). Critical path analysis (c01 to c06) is not needed, though its arrows are a familiar look.

**Prior video:** math-s12-c06.

**Start:** c06's final frame (proposed): a stadium before the grand final, arrows from the train station plaza through two concourses to the gates, each labelled with people per minute, "how many people a minute can the gates take?".

**Stop:** A flow network: directed edges (one way only), each with a capacity (the most it can carry per unit of time) written as its weight; the source (where flow starts: only flow out) and the sink (where it ends: only flow in); inflow and outflow at a node (what goes in must come out at every node between source and sink; nothing is stored); capacity is a limit, not the actual flow; a table (From, To, Capacity) drawn as a diagram, source on the left, sink on the right, each row one arrow; a cut: a line that splits the nodes into a source side and a sink side so that every path from source to sink crosses it; the capacity of a cut adds only the edges that cross from the source side to the sink side (an edge pointing back is not counted); each cut is a ceiling on the flow. Finding the maximum flow is f02; the minimum cut is f03.

**Next:** math-s12-f02.

## 2. Site order, sections and worked examples

Read-only source: [network-flow/lesson01.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/network-flow/lesson01.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `ff2e356c61e1ecd75877952bd054e101b212c33325ddc9283c6f178913496b5c`. Sections used: `orient-network-flow` (hook, card 02, key terms), `read-flow-terminology` (card 05, quick check), `identify-network-cuts` (card 06, cut example), `convert-tables-to-diagrams` (card 07, fill the blanks), `work-network-examples` (`we-1`, `we-2`, `we-3`), `apply-network-diagrams` (SA 1 to SA 3).

### Source lesson01, card 02 and card 06

"Source ($S$): outflow only, where flow enters the network. Sink ($T$): inflow only, where flow exits. Edge capacity: maximum flow an edge can carry. Cut: a set of edges whose removal disconnects $S$ from $T$." "Cut capacity: Add the capacities of all edges in the cut (edges going FROM the $S$-side TO the $T$-side only, edges going the other way are not in the cut)." Cut example: "$S \xrightarrow{8} A \xrightarrow{5} T$ and $S \xrightarrow{6} B \xrightarrow{7} T$. Cut 1 ... 8 + 6 = 14. Cut 2 ... 5 + 7 = 12."

### Source lesson01, `we-1` to `we-3`

`we-1`: "$S \to A$ (cap 12), $S \to B$ (cap 8), $A \to C$ (cap 6), $B \to C$ (cap 7), $A \to T$ (cap 5), $C \to T$ (cap 10) ... (c) Check flow conservation at node $C$ if actual flows are: into $C$ from $A$ = 6, into $C$ from $B$ = 7, out of $C$ to $T$ = 10." ("$13 \neq 10$, conservation is violated"). `we-2`: "S→A (cap 15), S→B (cap 10), A→B (cap 4), A→T (cap 8), B→T (cap 12) ... (b) Identify the cut separating $\{S, A\}$ from $\{B, T\}$" ("10 + 4 + 8 = 22"); "(c) ... $\{S\}$ from $\{A, B, T\}$" ("15 + 10 = 25"). `we-3`: "Pipe 1 S→A (20 ML/day), Pipe 2 S→B (15 ML/day), Pipe 3 A→C (12 ML/day), Pipe 4 A→B (8 ML/day), Pipe 5 B→C (10 ML/day), Pipe 6 B→T (9 ML/day), Pipe 7 C→T (18 ML/day)" (five paths; "Cut capacity = 9 + 18 = 27 ML/day").

## 3. Recalculation

- Cut example: cuts 14 and 12 as printed; every cut: {S, A} 11 (S→B 6 + A→T 5), {S, A, B} 12, {S} 14, {S, B} 15 (MS-56: the smallest, 11, is not shown).
- `we-1`: capacity into C 13, out 10 (the given flows break conservation). `we-2`: 22 and 25 as printed (smallest cut 20). `we-3`: five paths; sink cut 27 (also the smallest). SA 1: 15; SA 2: 25 out of S, cut 17 (smallest 16, the cut into T); SA 3: 18; 17; 14 (the site's answer, the smallest).
- Stadium (invented, people per minute): S plaza, A north concourse, B south concourse, T stands. S→A 120, S→B 90, A→B 30, A→T 80, B→T 110. Capacity into A 120, out of A 110; into B 120, out of B 110. Cuts: {S} 210, {S, A} 200, {S, B} 230 (A→B points back, not counted), {S, A, B} 190.
- Question 2: S→A 9, S→B 7, A→C 6, B→A 3, B→C 4, A→T 5, C→T 8. Cut {S, A} | {B, C, T}: S→B 7 + A→C 6 + A→T 5 = 18 (B→A runs back across the cut and is not counted).

Every value above was recalculated in Python (`work/brief-standard-zcf/recalc.py`: every cut listed for each network). All site answers match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- Drawing an arrow the wrong way from a table row.
- Counting an edge that crosses the cut from the sink side back to the source side.
- Adding an edge that lies wholly on one side of the cut.
- Treating capacity as the actual flow (an edge of 8 may carry 0 to 8).
- A "cut" that misses a path (some route from source to sink does not cross it).

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- The stadium plate with coded arrows over the walkways; people as moving dots (never drawn figures) streaming along edges at rates proportional to capacity, pooling where an edge is narrower.
- A table-to-diagram build: each row of From, To, Capacity lights and its arrow draws, source left, sink right.
- Inflow and outflow counters at a node (in 120, out at most 110).
- A cut as a scissors line through the diagram, the source side tinted one colour, the sink side another; crossing edges light green (counted) or grey with a back arrow (not counted); the cut's capacity sums live.

Advanced reuse: none (no flow kit). New kit: `FlowNetwork` (edges with capacity labels, direction, flow dots, node in/out counters) and `CutLine` (two-side tint, counted and uncounted edges, live sum); see `checks/maths-standard-kit-needs-z-c-f.md`. Plates: a stadium and station plaza from above (new `ms12-` plate, painted for c06's final frame, ruling 17).

## 6. Two original candidate practice questions

### Question 1

The table shows the walkways from a station plaza (S) to a stadium's stands (T), with capacities in people per minute.

| From | To | Capacity |
| --- | --- | --- |
| S | A | 120 |
| S | B | 90 |
| A | B | 30 |
| A | T | 80 |
| B | T | 110 |

(a) Draw the directed network. (b) Identify the source and the sink. (c) What is the total capacity of the walkways out of A? Can all 120 people a minute arriving at A get through? Explain.

**Worked answer:** (a) Five arrows from the table, S on the left, T on the right. (b) Source S (flow only leaves), sink T (flow only arrives). (c) Out of A: 30 + 80 = 110 people per minute. No: at most 110 can leave A, so no more than 110 can usefully go in (inflow = outflow at A).

### Question 2

A water network has edges S→A (9), S→B (7), A→C (6), B→A (3), B→C (4), A→T (5), C→T (8) (kL per hour). Find the capacity of the cut that has S and A on the source side and B, C and T on the sink side.

**Worked answer:** Edges from {S, A} to {B, C, T}: S→B 7, A→C 6, A→T 5; total 18 kL per hour. B→A goes from the sink side to the source side, so it is not counted.

Only the question goes on the card (Question 2 with the drawn network and the cut line). Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief (one crossed-out mistake: Question 1 (c) "yes, 120 in", crossed, "only 110 can leave A"; Question 2 "21, adding B→A", crossed, "only edges from the source side to the sink side").

## 7. Everyday anchors

- **People through stadium gates:** walkways and gates with capacities in people per minute (sport, events; invented capacities, labelled).
- **Water through pipes at a festival:** a tank feeding taps at a campground (events; f02's anchor, previewed).
- **Traffic through streets:** cars per minute from a motorway exit to a shopping centre (travel; f03's anchor, previewed).

Varied everyday contexts, no science. Repeat check (grepped 19 November 2026): "stadium" and "festival" have no hits in the designs or Standard packs. The site's water pipeline (`we-3`) keeps its numbers on a coded diagram. Claude picks; none is required. Dots, objects and arrows, never drawn people.

## 8. Site corrections and decisions for Claude

See section 9: MS-56 (inflow and outflow defined as sums of capacities "or flows"; the cut example omits the smallest cut, 11).

Decisions for Claude:

- **Inflow and outflow:** use them for flows, and say "capacity in" and "capacity out" for the sums of capacities, so the words match the later "inflow = outflow" rule.
- **Cuts as ceilings:** end with "no flow can be bigger than any cut" so f02 and f03 have a target; the theorem's name waits for f03.
- **Pace: watch.** Five terms, table to diagram and cuts with a back edge fit 8 to 9 minutes; `we-1`'s conservation check is the first trim. Suggested split only if the design runs past 570 s: f01a (terms and table to diagram) and f01b (cuts).
- Final frame: the festival's water network with all its pipes at 0 and a tap counter, "how much water can reach the campground each hour?" (f02's opening).

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
