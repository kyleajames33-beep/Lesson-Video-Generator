# math-s12-f02: How does the saturated edges method find the most a network can carry?

Maths Standard research pack (Year 12, Network flow), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Network flow):

- `cia23e92d8`: Calculate and analyse the flow capacity of a network including the use of the saturated edges method [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fafe0a915b). Site coverage: covered (the page contradicts itself on path order, MS-54).

These are CMS codenames, not published content-point codes.

**Course:** Standard 2 only. Playlist order 90. **Standard 1:** not in the Standard 1 course (see f01).

**Entry knowledge:** math-s12-f01: `ci87d0361a`, `cie0dcd4b6` (source, sink, capacity, inflow and outflow, cuts, table to diagram).

**Prior video:** math-s12-f01.

**Start:** f01's final frame (proposed): the festival's water network (tank S, junctions A, B, C, campground taps T, kL per hour) with every pipe at 0, "how much water can reach the campground each hour?".

**Stop:** Each edge shows flow/capacity (7/7 means full: saturated); a path's bottleneck is its smallest remaining capacity; the saturated edges method: pick a path from S to T, send its bottleneck, update what is left on each edge, repeat until every path has a saturated edge; the flow is the total leaving S (= total reaching T), with inflow = outflow checked at each middle node; shared edges use what is left after earlier paths; the order trap: a poor first path can block you below the maximum (12 instead of 13), so finish by finding a cut whose capacity equals your flow (the full reason is f03). Not taught: backward ("undo") flow along an edge, which Standard 2 does not use; re-allocating by hand when the cut check fails is enough.

**Next:** math-s12-f03.

## 2. Site order, sections and worked examples

Read-only source: [network-flow/lesson02.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/network-flow/lesson02.sa.html), SHA256 `99c4b096938fd219649911bc0947f167858cbaffb3fcf9b543d1c2a333e66b22`. Sections used: `orient-flow-capacity` (hook, card 02), `read-saturated-edges` (card 05, quick check), `use-saturated-edge-method` (card 06 steps and mini-example), `solve-complete-flow` (card 07 full example and its cut check), `work-capacity-examples` (`we-1`, `we-2`, `we-3`), `consolidate-saturated-flow` (revisit), `apply-saturated-method` (SA 1 to SA 3).

### Source lesson02, card 06 and the full example

Steps: "Choose any unsaturated path. Find its bottleneck ... Assign that amount of flow to every edge on the path ... Reduce remaining capacities accordingly (residual capacity = capacity − flow). Repeat ... Confirm it is the maximum. Find a cut whose capacity equals the total flow out of $S$." Full example: "Edges: $S \to A$ (10), $S \to B$ (8), $A \to C$ (6), $A \to T$ (5), $B \to C$ (7), $C \to T$ (9)" with paths pushing 5, 7 and 2: "Maximum flow = 5 + 7 + 2 = 14" and "Check it against the cut ... $\{S,A,B,C\} \mid \{T\}$ with capacity $5 + 9 = 14$."

### Source lesson02, `we-1` to `we-3`

`we-1`: "$S \to A$ (cap 9), $S \to B$ (cap 7), $A \to T$ (cap 6), $B \to T$ (cap 8)" ("Maximum flow = 6 + 7 = 13"). `we-2`: "$S \to A$ (12), $S \to B$ (8), $A \to C$ (7), $B \to C$ (6), $C \to T$ (11)" ("Residual $C \to T$ = 11 − 7 = 4 ... Maximum flow = 7 + 4 = 11"). `we-3`: "$S \to A$ (15), $S \to B$ (10), $A \to B$ (3), $A \to T$ (8), $B \to T$ (11)" ("Maximum flow = 8 + 3 + 8 = 19"; title says six edges, MS-55). Card 02's "Order of paths doesn't change the answer" contradicts card 06 and card 07 (MS-54).

## 3. Recalculation

- Mini-example 11; hook 11; full example 14 (final flows S→A 7/10, S→B 7/8, A→C 2/6, A→T 5/5, B→C 7/7, C→T 9/9); `we-1` 13; `we-2` 11; `we-3` 19 (S→A 11/15, S→B 8/10, A→B 3/3, A→T 8/8, B→T 11/11); fill the blanks 9; SA 1 13; SA 2 10; SA 3 19. Each equals the smallest cut.
- Festival (invented, kL per hour): S→A 12, S→B 10, A→B 4, A→C 7, B→C 5, B→T 6, C→T 11. Paths S-A-C-T 7, S-B-T 6, S-B-C-T 4, then S-A-B-T 0 (S→B is full and B→T is full). Flow 17; saturated A→C, S→B, B→T, C→T; check cut {S, A, B, C} | {T}: 6 + 11 = 17.
- Order trap: S→A 8, S→B 6, A→B 5, A→T 4, B→T 9. Poor order S-A-B-T 5, S-A-T 3, S-B-T 4 = 12, then every path is blocked; good order S-A-T 4, S-B-T 6, S-A-B-T 3 = 13 = cut A→T + B→T.
- Question 1: S→A 11, S→B 9, A→C 6, A→T 4, B→C 8, C→T 12. Paths S-A-T 4, S-A-C-T 6, S-B-C-T 6: 16; cut 4 + 12 = 16. Question 2: the order trap network.

Every value above was recalculated in Python (`work/brief-standard-zcf/recalc.py`: augmenting-path maximum flow, every cut, and the path-by-path saturated edges runs). All site answers match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- Adding the capacities along a path instead of taking the smallest.
- Forgetting that a shared edge has less left after the first path.
- Stopping at the first blocked state and calling it the maximum (the order trap).
- Flow out of S not equal to flow into T, or a middle node that does not balance.
- Listing every edge with spare capacity as "not saturated, so more flow is possible".

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- The festival network with each pipe drawn as a tube that fills as flow is sent; flow/capacity labels updating; a full tube turns solid with a "saturated" tick.
- Path picking: a path lights, its bottleneck edge pulses, a counter at the taps adds the amount.
- "What's left" labels on shared pipes after each path.
- The order trap as a split screen: left (poor order) jams at 12 with every path blocked; right (good order) reaches 13; then a cut line on the right shows 13 and the left has no cut at 12.
- A balance check at each middle node (in = out).

Advanced reuse: `ContainerFill` (rig.tsx) style tube fill for edges (pattern only). New kit: `FlowNetwork` with `flow/capacity` labels, saturated state and a path highlighter; `CutLine` for the finishing check (see kit needs). Plates: a festival water tank and taps (new `ms12-` plate; painted for f01's final frame).

## 6. Two original candidate practice questions

### Question 1

A network has edges S→A (11), S→B (9), A→C (6), A→T (4), B→C (8), C→T (12). Use the saturated edges method to find the flow capacity of the network. Show the flow on each edge and check your answer with a cut.

**Worked answer:** S-A-T: 4 (A→T full). S-A-C-T: 6 (A→C full). S-B-C-T: C→T has 12 − 6 = 6 left, so 6 (C→T full). Total 16. Flows: S→A 10/11, S→B 6/9, A→C 6/6, A→T 4/4, B→C 6/8, C→T 12/12. Cut {S, A, B, C} | {T}: 4 + 12 = 16, so 16 is the maximum.

### Question 2

A student finds a flow of 12 in the network S→A (8), S→B (6), A→B (5), A→T (4), B→T (9) by sending 5 along S-A-B-T, then 3 along S-A-T, then 4 along S-B-T. Every path now has a saturated edge. (a) Show that 12 is not the maximum. (b) Find the maximum flow.

**Worked answer:** (a) The cut into T (A→T 4 + B→T 9) is 13, and no cut equals 12, so check for a better allocation. (b) S-A-T 4, S-B-T 6, S-A-B-T 3: total 13, equal to the cut of 13, so 13 is the maximum.

Only the question goes on the card (with the drawn network). Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief (one crossed-out mistake: Question 1 "S-B-C-T carries 8", crossed, "C→T has only 6 left"; Question 2 "every path is blocked, so 12", crossed, "blocked is not the same as maximum: compare with a cut").

## 7. Everyday anchors

- **Water through pipes at a festival:** a tank feeding a campground's taps in kL per hour (events; invented, labelled).
- **People through stadium gates:** f01's walkways run by the method (190 people per minute) (sport; from f01).
- **Traffic through streets:** a preview of f03's network in the final frame (travel).

Varied everyday contexts, no science. Repeat check (grepped 19 November 2026): no hits for "festival" in the designs. Claude picks; none is required. Objects, dots and arrows, never drawn people.

## 8. Site corrections and decisions for Claude

See section 9: MS-54 (path order "doesn't change the answer", contradicted on the same page), MS-55 (the six-edge title).

Decisions for Claude:

- **Always end on a cut check:** the method finds a flow; a cut of the same size proves it is the most. Name the theorem in f03.
- **No backward flow:** the Standard method does not cancel flow along an edge; if the cut check fails, re-allocate the paths by hand (Question 2).
- **Pace: fits.** The method on one network, a shared edge and the order trap fit 7 to 8 minutes.
- Final frame: the traffic network (cars per minute) with three different cut lines drawn, "which cut tells us the most cars that can get through?" (f03's opening).

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
