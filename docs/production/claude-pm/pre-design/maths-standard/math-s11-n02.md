# math-s11-n02: What do vertex, edge, degree, directed and weighted mean?

Maths Standard pre-design pack (Year 11, Networks, paths and trees), 24 November 2026, written by Claude (designer of record), from route inputs 13 (`../../../programme/maths-standard-route-inputs-13.json`). Preparation for the design, not approval. The practice questions are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11, Networks, paths and trees, group "Network concepts", outcome MST-11-07:

- `cica79bb9b`: Define and use the network terminology: vertex, edge, degree, directed networks and weighted edges [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fabf235394). Site coverage: covered (lesson01; lesson02 for the degree sum).

**Entry knowledge:** math-s11-n01 (vertex, edge; the flight network; drawing from a description).

**Prior video:** math-s11-n01. **Start:** n01's final frame (the delivery van `ma12-delivery-van-v1.png` beside a coded street network of Depot, Bakery, Café, Pharmacy, Gym with one-way arrows and minute tags; chips "one-way? how long?", "Next: degree, direction and weight", "?").

**Stop:** degree (edges at a vertex) and what it says (hubs; a degree-1 place cut off by one failure); the degree sum (twice the number of edges) as a counting check; a loop adds 2 (one sentence); directed networks (arrows for one-way; two-way edges; travel only along arrows; arrows in and out counted separately); weighted edges (distance, time or cost) and a directed, weighted network; route totals; weight is a number, not a drawn length. Not: drawing from tables and maps (n03); paths and trees (n04); in-degree and out-degree as named terms (not in the 2024 point).

**Next:** math-s11-n03: the rail trail `ma11-rail-trail-v1.png` above a coded distance table (Trailhead, Lake, Mill, Ridge, Village); chips "table → network?", "Next: networks from tables and maps", "?".

## 2. Site order, sections and worked examples

`lesson01.sa.html`: card 06 (degree; loops count 2; degree sum); card 07 (directed networks; in-degree and out-degree; one-way streets, following on social media, water mains); WE1 (degrees of a five-vertex network, sum 12 = 2 × 6); WE2 (in- and out-degrees); SA 1 (A–B, A–C, A–D, B–C, D–E: degrees and the sum rule). `lesson02.sa.html` (2017 content: degree sequences, adjacency matrices) is used only for the degree-sum idea.

All values recalculated (scratchpad `s11n/verify.py`): no error. Site decisions: SA 1 becomes attempt 1. Weighted edges have no card in lesson01 (they appear only in lessons 05 and 06 as data); the video defines them with the van's minutes (MSY-29). The site's social-media "follow" example of a directed edge is kept as one spoken sentence (no app branding).

## 3. Recalculation (values for the design)

| Item | Working | Result |
| --- | --- | --- |
| Flight degrees | Perth 3, Darwin 2, Adelaide 4, Melbourne 4, Hobart 1, Sydney 4, Brisbane 2 | sum 20 = 2 × 10 |
| Van run | D→B 4, B→C 3, C→P 2, P→G 6, G→D 7 | 22 min |
| Gym to Café | G→D 7, D→B 4, B→C 3 | 14 min (the only legal way) |
| A1 (site SA 1) | A 3, B 2, C 2, D 2, E 1 | sum 10 = 2 × 5 |
| A2 | P→B→C | 7 min; Gym to Café must pass the Depot |

## 4. Misconceptions and HSC-style traps

- Expecting the degree sum to equal the number of edges.
- Travelling against an arrow.
- Reading a long line as a big weight.
- Counting a loop once.

## 5. Visual needs

The van and its street network (n01's frame); the flight network with degree badges; a degree-sum counter where each edge's two ends drop a token on their vertices; arrows that block travel against them; weight tags and a route adder.

## 6. Two original candidate practice questions

**Question 1.** A network has vertices A, B, C, D and E and edges A–B, A–C, A–D, B–C and D–E. Find the degree of each vertex and check your answer using the number of edges. (site SA 1)
Worked answer: A 3, B 2, C 2, D 2, E 1; sum 10 = 2 × 5 edges. Slip: "the degrees should add to 5".

**Question 2.** Use the van's directed, weighted network. (a) What is the quickest legal trip from the Pharmacy to the Café? (b) Can the van get from the Gym to the Café without passing the Depot?
Worked answer: (a) P→B→C, 4 + 3 = 7 min. (b) No: the Gym's only arrow leads to the Depot. Slip: "P → C, 2 min" (against the arrow).

## 7. Everyday anchors

A delivery van's one-way streets; the flight network; a social app's follows (spoken only). No people.

## 8. Site corrections and decisions for Claude

- MSY-29: weighted edges are not defined in lesson01.
- Use the words "directed" and "weighted", arrows for direction and numbers on edges for weights, with the hand tag "arrows with directions and weights" and the phrase "directed, weighted network" (Year 12 c01a: "Year 11: arrows with directions and weights"; f01: "Year 11: directed, weighted networks").
- Pace: about 8 to 9 minutes.
