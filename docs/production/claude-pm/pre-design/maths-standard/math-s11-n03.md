# math-s11-n03: How do we draw a network from a table or a map and use it to solve a problem?

Maths Standard pre-design pack (Year 11, Networks, paths and trees), 24 November 2026, written by Claude (designer of record), from route inputs 13 (`../../../programme/maths-standard-route-inputs-13.json`). Preparation for the design, not approval. The practice questions are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11, Networks, paths and trees, group "Network concepts", outcome MST-11-07:

- `ci022052d4`: Construct a network diagram to represent information from a given table or map, showing weighted and directed edges [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fabf235394). Site coverage: covered (lesson01; lesson02).
- `ci51fdc3e5`: Solve problems involving network diagrams in a variety of practical contexts. Site coverage: covered (lesson01; lesson02).

**Entry knowledge:** math-s11-n01 (vertices, edges; drawing from a description); math-s11-n02 (degree; directed networks; weighted edges; route totals); math-s11-t01 (decimal hours); math-s11-f04a (time = distance ÷ speed).

**Prior video:** math-s11-n02. **Start:** n02's final frame (the rail trail `ma11-rail-trail-v1.png` with five coded stop markers above a coded distance table; chips "table → network?", "Next: networks from tables and maps", "?").

**Stop:** reading a distance table (rows and columns are vertices; a cell is a direct edge's weight; a dash is no edge; symmetry for two-way edges, so use half); drawing from a map (curves dropped, lengths kept); a table and a map giving the same network; solving by listing routes on a small network; a time from a distance at a speed; a from-to table (row = from) giving a directed, weighted network; return trips that differ. Not: a systematic shortest-path method (n06); paths and trees (n04); adjacency matrices of 0s and 1s (2017 content).

**Next:** math-s11-n04: the hiking valley `ma12-hiking-valley-v1.png` with five coded cabin dots A to E and seven path edges labelled in metres; chips "light every cabin, least path?", "Next: paths, trees and spanning trees", "?".

## 2. Site order, sections and worked examples

`lesson01.sa.html` card 05 (drawing from a description; "the position of vertices doesn't matter"). `lesson02.sa.html` (2017 content: degree sequences and adjacency matrices; WE2 and WE3 build a matrix and draw a network from one). The site has no lesson that draws a weighted or directed network from a distance table or a map, and no "solve problems" set beyond degrees and matrices (MSY-30).

Site decisions: the video teaches distance tables (two-way and from-to) and maps, not 0/1 adjacency matrices; the matrix idea survives as "each cell is a connection". All examples are original and labelled "example".

## 3. Recalculation (values for the design)

| Item | Working | Result |
| --- | --- | --- |
| Trail table (km) | T–L 6, T–M 9, L–M 4, L–R 7, M–V 5, R–V 3 | 5 vertices, 6 weighted edges |
| Trailhead to Village | T–L–R–V 16; T–M–V 14; T–L–M–V 15 | 14 km via the Mill |
| Ride time at 12 km/h | 14 ÷ 12 = 1⅙ h | 1 h 10 min |
| One-way table (min) | P→S 3, S→H 4, H→P 6, H→W 2, W→S 5 | directed, weighted network |
| Car park to Pool; back | P→S→H→W = 9; W→S→H→P = 15 | 9 min; 15 min |
| A1 (km) | A–B 5, A–C 8, B–C 2, B–D 6, C–D 3 | A–B–C–D = 10 km (A–C–D 11; A–B–D 11) |
| A2 (min) | J→K 4, K→L 3, L→J 5, K→M 6, M→L 2 | J→K→L = 7 min; no direct L→K |

## 4. Misconceptions and HSC-style traps

- Drawing each distance twice from a symmetric table.
- Reading a from-to cell backwards (column to row).
- Treating a dash or blank as zero.
- Choosing the route with the fewest stops instead of the least total weight.
- Keeping the map's curves or scale.

## 5. Visual needs

The rail trail and its table (n02's frame); a table-to-network builder (a cell lights, its row and column headers light, an edge draws between those vertices with the cell's number; the mirror cell greys out); a coded trail map with curved paths and length labels that straighten into the same network; a route lister; a from-to table with row arrows; the van runner (n02) on the one-way town.

## 6. Two original candidate practice questions

**Question 1.** The table gives distances in kilometres along direct paths between four lookouts A, B, C and D (A–B 5, A–C 8, B–C 2, B–D 6, C–D 3; A–D no direct path). Draw the network, then find the shortest route from A to D and its length.
Worked answer: A–B–C–D, 5 + 2 + 3 = 10 km (A–C–D 11; A–B–D 11). Slip: "A–C–D, fewest stops".

**Question 2.** The from-to table gives one-way travel times in minutes (J→K 4, K→L 3, L→J 5, K→M 6, M→L 2). (a) What is the quickest trip from J to L? (b) Can you travel directly from L to K?
Worked answer: (a) J→K→L, 7 min (J→K→M→L is 12). (b) No: L's only arrow goes to J. Slip: "L → K: 3 min".

## 7. Everyday anchors

A rail trail and its stops; a town's one-way streets; lookouts on a bushwalk; a small transit loop. No people.

## 8. Site corrections and decisions for Claude

- MSY-30: no table-or-map construction or practical problem set.
- Keep "directed" and "weighted" as the words; row = from in a from-to table (Year 12 c01a, c02 and f01 recall a network built from a table: n03).
- Pace: about 9 minutes.
