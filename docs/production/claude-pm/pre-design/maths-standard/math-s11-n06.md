# math-s11-n06: How do we find the shortest path through a network?

Maths Standard pre-design pack (Year 11, Networks, paths and trees), 24 November 2026, written by Claude (designer of record), from route inputs 13 (`../../../programme/maths-standard-route-inputs-13.json`). Preparation for the design, not approval. The practice questions are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11, Networks, paths and trees, group "Shortest paths and spanning trees", outcome MST-11-07:

- `ci5aa7836f`: Identify a shortest path on a network diagram with no more than 10 vertices [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fabf235394). Site coverage: covered (lesson06).

**Entry knowledge:** math-s11-n04 (path); math-s11-n03 (route totals; listing routes on a small network); math-s11-n02 (directed, weighted networks).

**Prior video:** math-s11-n05. **Start:** n05's final frame (the delivery van `ma12-delivery-van-v1.png` beside a coded network S, A, B, C, T with minutes S–A 4, S–B 2, A–B 1, A–C 3, A–T 6, B–C 5, C–T 2; chips "quickest way from S to T?", "Next: shortest paths", "?").

**Stop:** why listing fails on bigger networks; the labelling method (label outwards; lock in the smallest label; update its neighbours; stop when the finish is locked) with its reason (the first arrival is the quickest); a table layout; tracing back to read the path; shortest = least total weight, not fewest edges; directed networks follow arrows; at most 10 vertices. Not: the algorithm's name (Dijkstra; the site says it is not in the syllabus); "shortest is not best" (n07); critical paths (Year 12 c03, "a different question").

**Next:** math-s11-n07: the road sign post `ma11-road-sign-post-v1.png` with coded text "TOLL" beside a coded network whose shortest path runs over a toll edge; the e-bike `ma11-share-ebike-v1.png` and the hillside strip `ma12-hillside-strip-v1.png` small; chips "shortest = best?", "Next: when shortest isn't best", "?".

## 2. Site order, sections and worked examples

`lesson06.sa.html` ("Shortest Paths"): a "beyond the syllabus" note (the name Dijkstra is not examinable; the skill is); setup (source 0, others ∞); iteration (select the smallest unvisited label; update neighbours); a worked table (S, A, B, C, T: T = 8 through C); reading the path by tracing back ("label(V) + weight(V→W) = d"); WE1 (S, A, B, C: C = 9); WE2 (trace back; two equal paths S–A–C and S–B–A–C, both 9); WE3 (a delivery network: E = 15).

All values recalculated (scratchpad `s11n/verify.py`): no error. Site decisions: the site's example network (as an undirected version, so the van's roads are two-way) is the main example; "∞" is replaced by "no label yet" (Standard students; fewer symbols); the method is unnamed on screen, as the site advises. WE2's equal paths are noted for Codex (ties are allowed; any shortest path earns the mark).

## 3. Recalculation (values for the design)

| Item | Working | Result |
| --- | --- | --- |
| Obvious route | S–A–T: 4 + 6 | 10 min |
| Labels (lock order) | S 0; B 2; A 3 (2 + 1); C 6 (3 + 3); T 8 (6 + 2) | shortest 8 min |
| Path (trace back) | T ← C ← A ← B ← S | S–B–A–C–T |
| A1 | P 0; R 2; Q 3; S 7 | P–R–Q–S, 7 min (slip P–R–S 9) |
| A2 (7 vertices) | A 0; B 3; C 5; D 8; E 10; F 14; G 15 | A–B–C–D–E–G, 15 min (slip A–C–E–G 19) |

## 4. Misconceptions and HSC-style traps

- Choosing the route with the fewest edges.
- Locking in a label that isn't the smallest.
- Forgetting to update a label when a shorter route appears.
- Reading the answer without tracing back the path.
- Following an arrow backwards in a directed network.

## 5. Visual needs

The van network (n05's frame); a "split and spread" simulation (copies of the van icon spread along every road at the same speed, the first arrival at each stop marking its time); a label table with lock-in rings; neighbour updates with crossed old labels; a trace-back arrow chain; a 7-vertex network for A2.

## 6. Two original candidate practice questions

**Question 1.** A cyclist rides from P to S. Times between junctions (min): P–Q 5, P–R 2, R–Q 1, Q–S 4, R–S 7. Find the shortest path from P to S and its time.
Worked answer: P 0; R 2; Q 3; S 7: P–R–Q–S, 7 min. Slip: "P–R–S, 9 min (fewest roads)".

**Question 2.** Travel times (min) between seven places: A–B 3, A–C 6, B–C 2, B–D 7, C–D 3, C–E 8, D–E 2, D–F 6, E–G 5, F–G 2. Use the labelling method to find the shortest path from A to G and its length.
Worked answer: A 0, B 3, C 5, D 8, E 10, F 14, G 15; trace back: A–B–C–D–E–G, 15 min. Slip: "A–C–E–G, 19 min".

## 7. Everyday anchors

A delivery van and its customer; a cycling route between junctions; travel between places. No people.

## 8. Site corrections and decisions for Claude

- No site error. The method is taught without the name Dijkstra (as the site says).
- Year 12 c03 recalls "Year 11: shortest path (a different question)": this video's phrase "shortest path" and its meaning (least total weight between two vertices) set that up.
- Pace: about 9 minutes.
