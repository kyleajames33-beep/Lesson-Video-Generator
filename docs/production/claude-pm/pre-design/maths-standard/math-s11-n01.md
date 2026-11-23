# math-s11-n01: What is a network, and where do networks appear in real life?

Maths Standard pre-design pack (Year 11, Networks, paths and trees), 24 November 2026, written by Claude (designer of record) in the form of the a and t packs, from route inputs 13 (`../../../programme/maths-standard-route-inputs-13.json`). Preparation for the design, not approval. The practice questions are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11, Networks, paths and trees, group "Network concepts", outcome MST-11-07:

- `ci4513c403`: Describe a network as a collection of objects (vertices) interconnected by lines (edges) that can represent systems in the real world [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fabf235394). Site coverage: covered (lesson01).
- `ci2d693812`: Examine circumstances in which networks are used in a variety of real-world applications. Site coverage: covered (lesson01).

**Entry knowledge:** none beyond Stage 5; t06's flight-route map (the opening frame).

**Prior video:** math-s11-t06. **Start:** t06's final frame (a coded flight-route map of Australia: seven city dots joined by ten straight example routes; grey chip "Time and location: done"; chips "dots and lines", "Next: networks", "?"). This pack confirms that frame.

**Stop:** a network as objects (vertices) joined by connections (edges); counting vertices and edges; travelling vertex to vertex along edges; the same network in a different drawing (only connections matter; a train map as an everyday example); real systems as networks (phone towers, a rail trail, water pipes, a delivery run, a social app); the questions networks answer (still connected after a link fails; best connected; shortest route; cheapest way to link everything); drawing a network from a description. Not: the word degree, directions or weights (n02); tables and maps (n03); paths and trees (n04).

**Next:** math-s11-n02: the delivery van `ma12-delivery-van-v1.png` beside a coded street network of five stops (Depot, Bakery, Café, Pharmacy, Gym) with one-way arrows and minute labels; chips "one-way? how long?", "Next: degree, direction and weight", "?".

## 2. Site order, sections and worked examples

`year11/networks-paths-and-trees/lesson01.sa.html` ("Introduction to Networks"): hook (a road map: "which city is most connected?", answered with degree); the big idea (vertex, edge, degree, directed, loop); card 05 (drawing a network from a description: "List all vertices and draw a dot for each. Read each connection and draw the corresponding edge"; "The position of vertices on the page doesn't matter mathematically"); card 06 (degree, loops, the degree sum); card 07 (directed networks, in-degree and out-degree); WE1 to WE3; SA 1 to 3.

Site decisions: card 05's method and its "position doesn't matter" insight are the core of scenes 3 and 6; degree, directions and loops are n02's. The site's opening anchor (an electricity grid operator by name) is replaced by the flight map and unbranded examples. The second point ("circumstances ... real-world applications") has only a list of examples on the site; the video adds what networks are used to decide (connectivity after a failure; hubs; shortest routes; cheapest connections) (MSY-28). All site values recalculated (scratchpad `s11n/verify.py`): no error.

## 3. Recalculation (values for the design)

| Item | Working | Result |
| --- | --- | --- |
| Flight network | count dots and lines | 7 vertices, 10 edges |
| Hobart to Darwin | Hobart–Melbourne–Adelaide–Darwin | 3 flights |
| Route closed (Sydney–Brisbane) | Sydney–Adelaide–Darwin–Brisbane | still connected |
| Best connected | Adelaide, Melbourne, Sydney | 4 routes each |
| Rail trail (description) | A–B, A–C, B–D, C–D, C–E, D–E | 5 vertices, 6 edges |
| A1 bike park | P–Q, P–R, Q–R, Q–S, R–S | 4 vertices, 5 edges |

## 4. Misconceptions and HSC-style traps

- Thinking the drawing's shape, lengths or crossings matter.
- Counting vertices instead of edges (one edge per junction).
- Drawing an edge for every pair of places, not only the stated connections.
- Thinking two places with no edge cannot be reached (they may connect through others).

## 5. Visual needs

The flight map (t06's frame); a coded network that can morph (dots slide, edges follow, connection lists stay fixed); a coded train-map style diagram beside a wiggly real-track sketch; a gallery of real systems with plates (phone tower, rail trail, delivery van) and coded overlays (vertex dots and edges); an edge that fades for a closed route with a path highlight; a drawing board for the description.

## 6. Two original candidate practice questions

**Question 1.** A bike park has four junctions P, Q, R and S. Paths join P and Q, P and R, Q and R, Q and S, and R and S. Draw the network and state the number of vertices and edges.
Worked answer: 4 vertices, 5 edges. Slip: "4 edges".

**Question 2.** Two drawings are shown (a square A, B, C, D with diagonal AC; and a second drawing with the same letters placed differently and two edges crossing). Do they show the same network? Give a reason.
Worked answer: yes: in both, A joins B, C and D; B joins A and C; C joins A, B and D; D joins A and C. Slip: "No, the lines cross".

## 7. Everyday anchors

Flight routes; a train map; phone towers; a rail trail; water pipes; a delivery run; a social app's connections (as account dots, no people). No people.

## 8. Site corrections and decisions for Claude

- MSY-28: "circumstances" taught only as a list.
- Confirm t06's frame; the on-screen heading is "Networks" (t06's chip "Next: networks").
- Pace: about 8 to 9 minutes.
