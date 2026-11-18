# math-s12-c01: How do we turn a precedence table into a project network, including dummy activities?

Maths Standard research pack (Year 12, Critical path analysis), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Critical path analysis):

- `ci9043c6d8`: Construct a network diagram from a precedence table or equivalent, including those involving dummy activities, limited to 10 activities [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa9c92c4c6). Site coverage: covered (one dummy drawn; a seven-activity example needs two and draws none, MS-51).

These are CMS codenames, not published content-point codes.

**Course:** Standard 2 only. Playlist order 83. **Standard 1:** the 2024 Standard 1 course has no critical path analysis; Standard 1 viewers finished at math-s12-p08 (see z01).

**Entry knowledge (outline dependency list):** math-s11-n02: `cica79bb9b` (vertex, edge, degree, directed networks, weighted edges); math-s11-n03: `ci022052d4` (a network diagram from a table or map, with weighted and directed edges). Year 11 shortest paths (math-s11-n06) are a contrast, not a prerequisite.

**Prior video:** math-s12-z06.

**Start:** z06's final frame (proposed): the bakery-café at 6 am, loaves on the shelf, a chalkboard of morning jobs ("what order, and how soon can we open?").

**Stop:** A project as activities with durations and immediate predecessors (the precedence table, "–" for none); "immediate" only (the network carries the indirect ones); the activity network as the site draws it: each activity an arrow labelled with its letter and duration, each node an event (a start or a finish), one start node and one finish node; building it row by row (activities with no predecessor leave the start; an activity leaves the node where all its predecessors have finished); two activities that share some but not all predecessors need a dummy: a dashed arrow of duration 0 that carries a dependency, not work; checking the drawing against the table (every row's predecessors arrive at its start node, nothing extra); reading a table back from a network. Not taught here: path lengths and earliest times (c02), the critical path (c03).

**Next:** math-s12-c02.

## 2. Site order, sections and worked examples

Read-only sources: [critical-path-analysis/lesson01.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/critical-path-analysis/lesson01.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `baf5c3da12545359d8b0834b53f67c4be1a1f0daa9be7676afa44304033ea498`: `orient-and-prepare` (hook, card 02), `read-precedence-table` (card 05, office fit-out), `draw-activity-network` (card 06), `study-worked-networks` (`we-l07-1`). [lesson05.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/critical-path-analysis/lesson05.sa.html), SHA256 `5e734b49509d875811ac31b4927d901c9e4e29f36aa754a6a13470d2ff7b51ac`: `use-dummy-activities` (card 2, Worked Example 2), `solve-larger-networks` (Worked Example 3's table only), `independent-practice` (SAQ 2 model answer). The older-format lesson labels its examples `we-l07-1` to `we-l07-3`; lesson05's worked examples have no ids.

### Source lesson01, hook and card 05

Hook: "Building a house: foundations (3 days), framing after foundations (5 days), roofing after framing (2 days), electrical during framing (4 days)." Card 05: "Only list immediate predecessors, the network captures indirect dependencies automatically. Multiple predecessors in one row means ALL must finish before this activity starts." Office fit-out: "A, Strip out | 2 | (none); B, Electrical | 4 | A; C, Plumbing | 3 | A; D, Fit-out | 5 | B, C". Card 06: "Activities with shared predecessors must both end before the successor can start, merge their end nodes or use a dummy arrow." `we-l07-1`: "Activities: A(4), B(3,A), C(2,A), D(5,B&C)."

### Source lesson05, dummy activities

Card 2: "When to use a dummy: Activity C depends on A and B, but activity D depends only on A." Worked Example 2: "Node 1 (Start) → A(4) → Node 2; Node 1 (Start) → B(3) → Node 3; Node 2 → dummy(0) → Node 3; Node 3 → C(5) → Node 4 (End); Node 2 → D(2) → Node 4 (End)". SAQ 2 model answer: "C ends at node X and D ends at node Y; draw the dummy (0) from X to Y ... The dummy must point from X into Y: pointing it the other way would put D upstream of F". Worked Example 3 (table: A 2; B 4; C 3 after A; D 5 after A, B; E 4 after B; F 2 after C, D; G 3 after E, F) needs two dummies, not "a dummy" (MS-51).

## 3. Recalculation

- Lesson05 Worked Example 2: one dummy, node 2 to node 3; event times for c02: 0, 4, 4, 9.
- Lesson05 Worked Example 3: the start event of D must follow A and B, while C follows A only and E follows B only, so A and B end at separate events joined to D's start by two dummies (checked by listing each activity's predecessor set: {A}, {A, B}, {B}, {C, D}, {E, F}).
- Office fit-out and `we-l07-1`: B and C both run from A's end event to D's start event; the site describes them as splitting from and merging at the same two events ("start→A→split→B and C→merge→D→end"); a dummy can separate them (see decisions).
- Café anchor (invented): A switch on oven 10 min (–); B mix muffin batter 15 (–); C bake muffins 25 (A, B); D heat pies 20 (A); E set out display 10 (C, D). One dummy from A's end to B's end. (For c02: finish 50 min, critical B, C, E.)
- Question 1: P 3 (–), Q 2 (–), R 4 (P), S 5 (P, Q), U 3 (R, S): one dummy from P's end to Q's end. (For later: finish 11 days.)

Every value above was checked in Python (`work/brief-standard-zcf/recalc.py`: predecessor sets, all paths and scans). All site networks that are drawn are correct; MS-51 is a missing dummy in a described network.

## 4. Misconceptions and HSC-style traps

- Listing indirect predecessors (writing A and B for D when B already needs A).
- Drawing activities as nodes and events as arrows (the reverse convention) inside one answer.
- Leaving several end nodes instead of one finish node.
- A dummy that points the wrong way, making an activity wait for something it does not need.
- Adding a duration to a dummy, or drawing a dummy where none is needed.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- A chalkboard precedence table whose rows light one at a time while the network grows beside it: arrows labelled "A 10", nodes as numbered circles, start on the left, finish on the right.
- A predecessor check: when an arrow is placed, its table row's predecessors glow on the arrows that arrive at its start node.
- The dummy moment: try to start C at A's end node (wrong: C would not wait for the batter), try to merge A and B (wrong: pies would wait for the batter), then the dashed 0 arrow from A's end into B's end; a "dummy = a dependency, not a job" tag.
- Reading back: cover the table, point at an arrow, ask "what must finish before this?".

Advanced reuse: none (no Advanced network kit). New kit: see `checks/maths-standard-kit-needs-z-c-f.md` (`ActivityNetwork`, `PrecedenceTable`). Plates: a café counter at dawn with a chalkboard (new `ms12-` plate, painted for z06's final frame, ruling 17); the jobs themselves stay coded labels (no people).

## 6. Two original candidate practice questions

### Question 1

A school is setting up for its open day. The precedence table shows the activities.

| Activity | Duration (days) | Immediate predecessors |
| --- | --- | --- |
| P: book the hall | 3 | – |
| Q: order signs | 2 | – |
| R: arrange displays | 4 | P |
| S: set up stalls | 5 | P, Q |
| U: final walk-through | 3 | R, S |

Draw a network diagram for the project.

**Worked answer:** Start node 1. P: 1 → 2; Q: 1 → 3; dummy (0, dashed): 2 → 3; R: 2 → 4; S: 3 → 4; U: 4 → 5 (finish). R leaves P's end node because it needs only P; S leaves node 3, which both P (through the dummy) and Q have reached.

### Question 2

A network has these arrows: A (5) from node 1 to node 2; B (3) from node 1 to node 3; C (4) from node 2 to node 4; D (2) from node 3 to node 4; dummy from node 2 to node 3; E (6) from node 4 to node 5. Write the precedence table.

**Worked answer:** A: –; B: –; C: A; D: A, B (through the dummy); E: C, D.

Only the question goes on the card (Question 2 with the drawn network). Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief (one crossed-out mistake: Question 1 "R and S both leave one node after P and Q", crossed, "then R would wait for Q"; Question 2 "D: B", crossed, "the dummy brings A's finish into node 3 too").

## 7. Everyday anchors

- **A café's morning prep:** oven, muffin batter, muffins, pies, display; the muffins need the oven and the batter, the pies need only the oven: the dummy (work; invented times).
- **Building a backyard shed:** clear the site, order the kit, pour the slab (c03 and c05 use it; home).
- **A school's open day or formal:** jobs with weeks of lead time (school events; c04 and c06 use the formal).

Varied everyday contexts, no science. Repeat check (grepped 19 November 2026): "shed" appears in Standard t01 as a roof triangle (trigonometry), a different idea; "formal" and "café" have no hits as projects. The site's house build and office fit-out keep their numbers as worked examples. Claude picks; none is required. Objects and labelled jobs, never people.

## 8. Site corrections and decisions for Claude

See section 9: MS-49 (lesson01's hero caption, 12 against arrows that give 7), MS-50 (`we-l07-2`'s crossed-out attempt and `we-l07-3`'s missing question), MS-51 (two dummies needed, none drawn), MS-58 (old module labels).

Decisions for Claude:

- **Convention:** activities on arrows, events on nodes (the site's and the common NSW convention); one start and one finish node.
- **Two activities between the same events** (the office fit-out's B and C): the site treats them as two arrows between the same two nodes; some textbooks add a dummy so each activity has its own pair of events. Codex checks recent HSC Standard 2 papers for the convention; until then teach the dummy for "some but not all predecessors" (the syllabus case) and give the parallel-arrow case one sentence only.
- **Two dummies:** keep the café's single dummy here; lesson05's seven-activity table (two dummies) can be a stretch example in c03 or c06.
- **Pace: at risk.** Reading a table, the drawing method, dummies and reading back is dense for Standard students meeting critical paths. Suggested split only if the design cannot fit under 570 s: c01a (precedence tables and drawing a network) and c01b (dummy activities). Both carry `ci9043c6d8`.
- Final frame: the café network with "how long until we open?" and an empty box at each node (c02's opening).

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
