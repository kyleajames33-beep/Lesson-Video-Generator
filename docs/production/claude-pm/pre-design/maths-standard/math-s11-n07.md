# math-s11-n07: When is the shortest path not the best path?

Maths Standard pre-design pack (Year 11, Networks, paths and trees), 24 November 2026, written by Claude (designer of record), from route inputs 13 (`../../../programme/maths-standard-route-inputs-13.json`). Preparation for the design, not approval. The practice questions are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11, Networks, paths and trees, group "Shortest paths and spanning trees", outcome MST-11-07:

- `ci53383df4`: Describe a circumstance in which a shortest path is not necessarily the best path nor contained in any minimum spanning tree [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fabf235394). Site coverage: missing (no lesson; crosswalk "site missing: syllabus-only teaching").

**Entry knowledge:** math-s11-n06 (shortest path; the labelling method); math-s11-n05 (minimum spanning tree; the camp's lit tree); math-s11-f04a (time = distance ÷ speed); math-s11-t01 (decimal hours).

**Prior video:** math-s11-n06. **Start:** n06's final frame (the road sign post `ma11-road-sign-post-v1.png` with coded "TOLL"; a coded network A, B, C, D with A–B 10, B–D 8, A–C 12, C–D 9, B–C 3 km, a toll icon on A–B and the shortest path A–B–D glowing; the share e-bike above the hillside strip; chips "shortest = best?", "Next: when shortest isn't best", "?").

**Stop:** a shortest path minimises one weight only; circumstances where it is not best (a toll; time against distance; a flood or closure; a steep hill on a bike; safety; peak-hour traffic); the weight chosen decides the answer; a shortest path that is not in any minimum spanning tree (a triangle with a unique MST; the camp's A to C); why (the MST minimises the total for everyone, not one trip). Closes the strand. Not: new algorithms.

**Next:** math-s11-d01 (Data analysis; provisional until d01 is designed): the phone `ma12-phone-v1.png` with a coded survey screen "How many hours did you sleep last night?" and four answer buttons; grey strand chip "Networks, paths and trees: done"; chips "a clear question, a fair survey", "Next: statistical investigations", "?".

## 2. Site order, sections and worked examples

No site lesson (lesson06 ends at the shortest path; lesson05 at the MST). The video teaches from the syllabus (ruling 3). Site finding MSY-32: add a short card (two circumstances and a triangle example).

## 3. Recalculation (values for the design)

| Item | Working | Result |
| --- | --- | --- |
| Toll network shortest | A–B–D: 10 + 8 | 18 km |
| Avoiding the toll | A–C–D: 12 + 9 (A–C–B–D 23) | 21 km (3 km longer) |
| Distance against time | X: 12 ÷ 50 = 0.24 h; Y: 15 ÷ 100 = 0.15 h | 14.4 min; 9 min (Y quicker by 5.4 min) |
| Triangle | AB 3, BC 3, AC 5: MST 6 (unique); shortest A→C = 5 | AC not in any MST |
| Camp | MST B–C, D–E, A–B, C–D; A to C in the tree 40 + 30; direct A–C | 70 m in the tree; 60 m shortest |
| A1 | avoid A–B: A–C–D | 21 km (slip 18) |
| A2 | MST R–S 3, P–Q 4, Q–R 4; shortest P→R = P–R 6 (P–Q–R 8) | MST 11; 6; not in the MST |

## 4. Misconceptions and HSC-style traps

- Thinking the shortest path is always the route to take.
- Thinking the minimum spanning tree contains the shortest path between every pair.
- Using distance weights when the question is about time or cost.
- Treating "describe a circumstance" as a calculation only (a sentence with a reason is needed).

## 5. Visual needs

The toll network (n06's frame); an edge removal with a re-run of the shortest path; a weight toggle (distance and time) that swaps the winning route; a gallery of circumstances (flood, hill, night, traffic) as coded icons over plates; the triangle with its MST and the shortest edge; the camp's lit tree and a dark direct path.

## 6. Two original candidate practice questions

**Question 1.** In the network A–B 10, B–D 8, A–C 12, C–D 9, B–C 3 (km), A–B is a toll road. Find the shortest path from A to D for a driver who will not use the toll road, and its length.
Worked answer: A–C–D, 21 km (A–C–B–D is 23). Slip: "A–B–D, 18 km".

**Question 2.** A network has edges P–Q 4, Q–R 4, P–R 6, R–S 3, Q–S 8. (a) Find the minimum spanning tree and its total weight. (b) Find the shortest path from P to R. (c) Is this path contained in the minimum spanning tree?
Worked answer: (a) R–S, P–Q, Q–R: 11. (b) P–R, 6. (c) No. Slip: "(b) P–Q–R, 8".

## 7. Everyday anchors

A toll road; a town route against a motorway; a flooded road; a hilly bike route; a camp's lighting. No people.

## 8. Site corrections and decisions for Claude

- MSY-32: the point has no site lesson.
- "Describe a circumstance" answers in words with a reason; the attempts pair a calculation with a yes/no reason.
- Close the strand: grey chip "Networks, paths and trees: done"; the d01 frame is provisional.
- Pace: about 9 minutes.
