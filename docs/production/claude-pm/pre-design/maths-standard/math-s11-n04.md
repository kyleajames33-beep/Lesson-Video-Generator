# math-s11-n04: What are paths, trees and spanning trees?

Maths Standard pre-design pack (Year 11, Networks, paths and trees), 24 November 2026, written by Claude (designer of record), from route inputs 13 (`../../../programme/maths-standard-route-inputs-13.json`). Preparation for the design, not approval. The practice questions are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11, Networks, paths and trees, group "Shortest paths and spanning trees", outcome MST-11-07:

- `ci0eb52b4b`: Define and use the network terminology: path, tree, spanning tree and minimum spanning tree [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fabf235394). Site coverage: covered (lesson03; lesson04).

**Entry knowledge:** math-s11-n01 to n03 (vertices, edges, weights, route totals).

**Prior video:** math-s11-n03. **Start:** n03's final frame (the hiking valley `ma12-hiking-valley-v1.png` with five coded cabin dots A to E and seven path edges in metres; a lamp icon; chips "light every cabin, least path?", "Next: paths, trees and spanning trees", "?").

**Stop:** a path (no repeated vertex) and its length; a cycle (a path back to its start); a tree (connected, no cycles; exactly one path between two vertices; n vertices, n − 1 edges as a drawing check); a spanning tree (a tree using the network's edges that reaches every vertex); near misses (not spanning; not a tree); many spanning trees (21 here); the minimum spanning tree (the smallest total weight), defined, with the method left to n05. Not: an algorithm (n05); shortest paths (n06); walks, trails, Eulerian and Hamiltonian ideas (2017 content).

**Next:** math-s11-n05: the phone tower `ma11-phone-tower-v1.png` beside a coded network of five towers A to E and seven links in km (A–B 8, A–C 3, B–C 5, B–D 7, C–D 2, C–E 6, D–E 4); chips "link every tower, least cable?", "Next: minimum spanning trees", "?".

## 2. Site order, sections and worked examples

`lesson03.sa.html` (2017 content: walk, trail, path, circuit; Eulerian and Hamiltonian) supplies only the definition of a path ("no repeated vertices"). `lesson04.sa.html` ("Trees and Spanning Trees"): tree conditions (connected, no cycles, n − 1 edges, flagged by the site as "beyond the syllabus ... a fast sanity check"); leaves; spanning trees ("start with all vertices, then add edges one at a time, skipping any edge that would create a cycle"); applications; WE1 (an 8-vertex chain is a tree); WE2 (12 vertices, 11 edges); WE3 (a spanning tree of a 4-cycle with a diagonal).

All values recalculated (scratchpad `s11n/verify.py`): no error. Site decisions: the path definition from lesson03; the tree and spanning-tree definitions from lesson04; n − 1 kept as a check, as the site says; walks, trails and circuits not used. The point names "minimum spanning tree" as a term here; lesson04 only previews it (MSY-31 notes that the term is defined only in lesson05).

## 3. Recalculation (values for the design)

| Item | Working | Result |
| --- | --- | --- |
| Path A–B–D–E | 40 + 50 + 35 | 125 m |
| Cycle B–C–D–B | 30 + 45 + 50 | 125 m |
| Spanning tree 1: A–B, B–C, C–D, D–E | 40 + 30 + 45 + 35 | 150 m (the minimum; n05) |
| Spanning tree 2: A–C, C–E, E–D, D–B | 60 + 70 + 35 + 50 | 215 m |
| Number of spanning trees | all 4-edge subsets with no cycle | 21 |
| A1 | E–D–C–A: 35 + 45 + 60; E–D–B–C–D repeats D | 140 m; not a path |
| A2 | (iii) A–C, B–C, C–E, D–E: 60 + 30 + 70 + 35 | 195 m |

## 4. Misconceptions and HSC-style traps

- Calling any route that follows edges a path, even if it repeats a vertex.
- Calling a set of edges that reaches every vertex a spanning tree even when it has a cycle.
- Calling a tree spanning when it misses a vertex.
- Thinking a network has only one spanning tree.
- Thinking the minimum spanning tree is the shortest path between two places (n07 contrasts them).

## 5. Visual needs

The camp map (n03's frame); a path tracer (a walker icon on vertices that flags a revisit in red); a cycle that pulses as a loop; a tree that grows branch by branch; spanning-tree overlays (lit edges on the full network, unlit edges faint) with a running total; a carousel of spanning trees with totals and a counter to 21; near-miss panels.

## 6. Two original candidate practice questions

**Question 1.** In the camp network, (a) is E → D → C → A a path? If so, find its length. (b) Is E → D → B → C → D a path?
Worked answer: (a) yes: 35 + 45 + 60 = 140 m. (b) No: D is visited twice. Slip: "(b) yes, every step uses an edge".

**Question 2.** Three sets of edges from the camp network are shown: (i) A–B, B–C, C–D; (ii) A–B, B–C, C–D, D–B, D–E; (iii) A–C, B–C, C–E, D–E. Which is a spanning tree? Find its total length.
Worked answer: (iii): it reaches all five cabins with no cycle; 60 + 30 + 70 + 35 = 195 m. ((i) misses E; (ii) has the cycle B–C–D.) Slip: "(ii), it reaches every cabin".

## 7. Everyday anchors

A school camp's paths and night lighting; water pipes to farm troughs; cables to houses. No people.

## 8. Site corrections and decisions for Claude

- MSY-31: "minimum spanning tree" is named in this point but defined on the site only in lesson05; the n − 1 rule is correctly flagged as a check.
- Pace: about 9 minutes.
