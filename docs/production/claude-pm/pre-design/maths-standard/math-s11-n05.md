# math-s11-n05: How does a minimum spanning tree connect everything for the least cost?

Maths Standard pre-design pack (Year 11, Networks, paths and trees), 24 November 2026, written by Claude (designer of record), from route inputs 13 (`../../../programme/maths-standard-route-inputs-13.json`). Preparation for the design, not approval. The practice questions are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11, Networks, paths and trees, group "Shortest paths and spanning trees", outcome MST-11-07:

- `cicce79437`: Determine the minimum spanning tree of a network with weighted edges, using any method [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fabf235394). Site coverage: covered (lesson05).
- `cif65754dc`: Use minimum spanning trees to solve minimal connector problems. Site coverage: covered (lesson05).

**Entry knowledge:** math-s11-n04 (cycle, tree, spanning tree, minimum spanning tree; the camp's 150 m tree; n vertices, n − 1 edges as a check); math-s11-n02 (weights).

**Prior video:** math-s11-n04. **Start:** n04's final frame (the phone tower `ma11-phone-tower-v1.png` beside five coded towers A to E with seven links in km: A–B 8, A–C 3, B–C 5, B–D 7, C–D 2, C–E 6, D–E 4; chips "link every tower, least cable?", "Next: minimum spanning trees", "?").

**Stop:** Kruskal's method taught as steps (cheapest first; skip a link that closes a cycle; stop at n − 1 links), named once; the towers (14 km) and the cost at an example $25,000 per km; a minimal connector problem in words; Prim's method named and shown once (same 14 km); the camp from n04 confirmed at 150 m. Not: shortest paths (n06); the contrast between them (n07).

**Next:** math-s11-n06: the delivery van `ma12-delivery-van-v1.png` beside a coded network of a depot S, stops A, B, C and a customer T with minutes S–A 4, S–B 2, A–B 1, A–C 3, A–T 6, B–C 5, C–T 2; chips "quickest way from S to T?", "Next: shortest paths", "?".

## 2. Site order, sections and worked examples

`lesson05.sa.html` ("Minimum Spanning Trees"): Kruskal's steps (sort; add if no cycle; stop at n − 1); Prim's steps; a comparison table; WE1 (Kruskal on A–B 8, A–C 3, B–C 5, B–D 7, C–D 2, C–E 6, D–E 4: total 14); WE2 (Prim from A on the same network: 14); WE3 (a pipeline P, Q, R, S: 20 km).

All values recalculated (scratchpad `s11n/verify.py`): no error. Site decisions: WE1's network becomes the phone towers (scenes 2 to 5); WE3 becomes attempt 1; the comparison table is reduced to one spoken line (either method; show the steps). The point's "using any method" means one method is enough; Kruskal is taught and Prim's shown once.

## 3. Recalculation (values for the design)

| Item | Working | Result |
| --- | --- | --- |
| Towers (km) | keep 2, 3, 4, 5; skip 6, 7, 8 | 14 km (all links 35 km) |
| Cost at $25,000/km (example) | 14 × 25 000; 35 × 25 000 | $350,000; $875,000 |
| Prim from A | 3, 2, 4, 5 | 14 km |
| Camp (m) | keep 30, 35, 40, 45; skip 50, 60, 70 | 150 m (n04's tree confirmed) |
| A1 pipeline (site WE3) | keep 5, 7, 8 | 20 km (slip 30) |
| A2 six towns | keep 2, 3, 4, 5, 7; skip 6, 8, 9 | 21 km (slip 20) |

## 4. Misconceptions and HSC-style traps

- Keeping a link that closes a cycle.
- Not stopping at n − 1 links (or stopping before every vertex is joined).
- Confusing the minimum spanning tree with the shortest route between two vertices (n07).
- Thinking Kruskal and Prim give different totals.

## 5. Visual needs

The towers (n04's frame); a sorted link list beside the network; a link-by-link builder (kept links turn teal; skipped links flash the cycle they would close in violet, then grey); a cost counter; Prim's growth from one vertex; the camp network from n04 with the carousel's 150 bar confirmed.

## 6. Two original candidate practice questions

**Question 1.** A water pipeline must connect four towns P, Q, R and S. Possible pipes (km): P–Q 12, P–R 8, Q–R 5, Q–S 10, R–S 7. Find the minimum total length of pipe. (site WE3)
Worked answer: keep Q–R 5, R–S 7, P–R 8 (3 links for 4 towns): 20 km. Slip: "5 + 7 + 8 + 10 = 30 km".

**Question 2.** Six towns A to F are to be linked by a gas pipeline. Possible links (km): A–B 7, A–C 4, B–C 3, B–D 6, C–D 8, C–E 5, D–E 2, D–F 9, E–F 7. Use any method to find the minimum spanning tree and its total length.
Worked answer: D–E 2, B–C 3, A–C 4, C–E 5, E–F 7 (B–D 6 skipped: cycle B–C–E–D): 21 km. Slip: "2 + 3 + 4 + 5 + 6 = 20 km".

## 7. Everyday anchors

Phone towers and fibre; a school camp's lights; a water pipeline; a gas pipeline between towns. No people.

## 8. Site corrections and decisions for Claude

- No site error. The term "minimal connector problem" is used on screen and in narration (the point's wording).
- Pace: about 9 minutes.
