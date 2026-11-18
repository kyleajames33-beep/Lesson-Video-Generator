# math-s12-c02: How do forward and backward scans find the earliest and latest start times?

Maths Standard research pack (Year 12, Critical path analysis), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Critical path analysis):

- `ci1ebd8915`: Apply forward and backward scanning to determine the earliest starting time (EST) and latest starting time (LST) for each activity in a project [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa9c92c4c6). Site coverage: covered (at the nodes; "for each activity" needs one more step, MS-53 and decisions).

These are CMS codenames, not published content-point codes.

**Course:** Standard 2 only. Playlist order 84. **Standard 1:** not in the Standard 1 course (see c01).

**Entry knowledge:** math-s12-c01: `ci9043c6d8` (precedence table to network, dummies). math-s11-n03: `ci022052d4` (weighted directed networks).

**Prior video:** math-s12-c01.

**Start:** c01's final frame (proposed): the café network (A oven 10, B batter 15, dummy, C muffins 25, D pies 20, E display 10) with an empty box at each node, "how long until we open?".

**Stop:** Forward scan: 0 at the start node, then left to right, each node's earliest time = the largest of (earlier node's time + arrow's duration) over the arrows coming in ("wait for the slowest"); the finish node's earliest time is the shortest possible project time (café: 50 min); a dummy passes a time across unchanged. Backward scan: the finish node's latest time = its earliest time; right to left, each node's latest time = the smallest of (later node's latest time − arrow's duration) over the arrows going out ("don't hold up the most urgent job"). For each activity: EST = the earliest time at its start node; LST = the latest time at its end node minus its duration (café: A 0 and 5, B 0 and 0, C 15 and 15, D 10 and 20, E 40 and 40). Float and the critical path are c03.

**Next:** math-s12-c03.

## 2. Site order, sections and worked examples

Read-only source: [critical-path-analysis/lesson02.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/critical-path-analysis/lesson02.sa.html), SHA256 `8942c2958c33dd25018d79f76c9a8ec7d52ec4fdffbff0198f9afe4ef471d3a3`. Sections used: `orient-and-prepare` (think first, key terms), `forward-scan` (card 1, Worked Example 1), `backward-scan` (card 2, Worked Example 2), `record-node-times` (card 3, Worked Example 3), `apply-scanning` (activities 1 and 2), `independent-practice` (Q1, Q2, Q4, SAQ 1). Also [lesson05.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/critical-path-analysis/lesson05.sa.html) (SHA256 `5e734b49509d875811ac31b4927d901c9e4e29f36aa754a6a13470d2ff7b51ac`), `use-dummy-activities` Worked Example 2 (scans through a dummy). The page's worked examples have no ids.

### Source lesson02, cards 1 and 2

"If two or more paths arrive at the same node, take the maximum you must wait for all predecessors to finish." "Why minimum? If one successor needs you by day 5 and another by day 8, you must start by day 5 to avoid delay." Worked Example 1: "Path 1: node 1 –A(3)→ node 2 –B(4)→ node 3; Path 2: node 1 –C(5)→ node 3 ... EST₃ = max(7, 5) = 7" (the page draws each arrow with a long dash, shown here as an en dash). Worked Example 2: "LST₁ = min(0, 2) = 0 ... Node boxes: node 1 (0 | 0), node 2 (3 | 3), node 3 (7 | 7)."

### Source lesson02, Worked Example 3 and SAQ 1

Worked Example 3: "A | 2 | ; B | 4 | A; C | 3 | A; D | 5 | B; E | 2 | C" with forward scan "Node 5 (End): ... EST₅ = max(11, 7) = 11" and backward scan "Node 4 (before E): LST = LST₅ − dur(E) = 11 − 2 = 9 ... Node 2 ... min(2, 6) = 2". Node boxes: 1 (0, 0), 2 (2, 2), 3 (6, 6), 4 (5, 9), 5 (11, 11). SAQ 1: "A(5), B(3) after A, C(4) after A, D(2) after B and C." Answer: "A(EST 0, LST 0), B(EST 5, LST 6), C(EST 5, LST 5), D(EST 9, LST 9)." Lesson05 Worked Example 2: node boxes "Node 1(0,0), Node 2(4,4), Node 3(4,4), Node 4(9,9)".

## 3. Recalculation

- Worked Examples 1 and 2: 0, 3, 7; latest 0, 3, 7; C's own LST = 7 − 5 = 2.
- Worked Example 3: earliest 0, 2, 6, 5, 11; latest 0, 2, 6, 9, 11. Activities: A 0/0, B 2/2, C 2/6, D 6/6, E 5/9.
- SAQ 1: finish 11; A 0/0, B 5/6, C 5/5, D 9/9. Think first (A 4, B 3, C 5, D 2): roofing's EST 9; framing's LST 6.
- Lesson05 Worked Example 2: 0, 4, 4, 9; activities A 0/0, B 0/1, C 4/4, D 4/7.
- Café: node times 1 (0, 0), 2 (10, 15), 3 (15, 15), 4 (40, 40), 5 (50, 50); activities A 0/5, B 0/0, C 15/15, D 10/20, E 40/40.
- Questions: A 4, B 6, C 3 (A), D 5 (A, B), E 2 (C), F 4 (D, E). Forward 0, 4, 6, 7, 11, 15; backward 0, 6, 6, 9, 11, 15; activities A 0/2, B 0/0, C 4/6, D 6/6, E 7/9, F 11/11.

Every value above was recalculated in Python (`work/brief-standard-zcf/recalc.py`, activity scans, cross-checked with the node scans by hand). All site answers match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- Taking the smaller time at a merge in the forward scan, or the larger at a split in the backward scan.
- Starting the backward scan at 0 instead of at the finish time.
- Reading the latest time at an activity's start node as its LST (it must come from the end node minus the duration when the start node has several arrows leaving).
- Skipping a dummy in a scan (it carries a time across with 0 added or subtracted).
- Scanning a node before all its incoming (or outgoing) arrows are done.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- The café network with split node boxes (earliest left, latest right); the forward scan as a coloured front sweeping left to right, a "wait for the slowest" pause at each merge where the two candidate times appear and the larger one locks in.
- The backward scan as a second front sweeping right to left from 50, "who needs me first?" at each split, the smaller time locking in.
- A per-activity table filling from the boxes: EST from the start node's left box; LST = end node's right box − duration, with D's 40 − 20 = 20 shown as the case where it differs from the start node's box (15).
- A clock strip under the network (0 to 50 min) as a callback to the café opening.

Advanced reuse: none. New kit: `ActivityNetwork` with node boxes and `ScanSweep` (see `checks/maths-standard-kit-needs-z-c-f.md`). Plates: the café counter (c01).

## 6. Two original candidate practice questions

### Question 1

A plumber's job has these activities (hours): A (4, –), B (6, –), C (3, after A), D (5, after A and B), E (2, after C), F (4, after D and E). (a) Draw the network. (b) Use a forward scan to find the earliest starting time of each activity and the shortest time to finish the job.

**Worked answer:** (a) A: 1 → 2; B: 1 → 3; dummy 2 → 3; C: 2 → 4; D: 3 → 5; E: 4 → 5; F: 5 → 6. (b) Node times 0, 4, 6, 7, 11, 15. EST: A 0, B 0, C 4, D 6, E 7, F 11. Shortest time 15 hours.

### Question 2

For the job in Question 1, use a backward scan to find the latest starting time of each activity.

**Worked answer:** Latest node times (right to left) 15, 11, 9, 6, 6, 0. LST: F 15 − 4 = 11; D 11 − 5 = 6; E 11 − 2 = 9; C 9 − 3 = 6; B 6 − 6 = 0; A: node 2's latest time is min(6 − 0, 9 − 3) = 6, so A's LST = 6 − 4 = 2.

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief (one crossed-out mistake: Question 1 "D's EST = 4", crossed, "D waits for B too: max(4, 6) = 6"; Question 2 "A's LST = 0", crossed, "A has spare time: 6 − 4 = 2").

## 7. Everyday anchors

- **The café's morning prep:** how many minutes until the doors open (work; continues c01).
- **A plumber's job:** hours for a bathroom refit in two strands (work; the practice questions).
- **Building a backyard shed:** a preview of c03's anchor in the final frame (home).

Varied everyday contexts, no science. Repeat check (grepped 19 November 2026): no repeats of these projects in the designs. The site's house build (the think first) keeps its numbers. Claude picks; none is required. Objects and labelled jobs, never people.

## 8. Site corrections and decisions for Claude

See section 9: MS-53 (node slack called activity float; roofing drawn twice in the revisit). MS-58 (labels).

Decisions for Claude:

- **"For each activity":** the syllabus asks for the EST and LST of each activity. Keep the site's split node boxes (the common HSC presentation) and add the activity row: EST = start node's earliest time; LST = end node's latest time − duration. Codex checks the presentation in recent HSC Standard 2 papers.
- **Words before symbols:** "earliest time we can reach this point" and "latest time we can reach it without delaying the finish" before the letters EST and LST.
- **Pace: watch.** Two scans and the activity row on one network fit about 8 minutes; Worked Example 3's second network is the first trim (the practice questions repeat the method).
- Final frame: the backyard shed's network with its scans finished, "which jobs can't slip?" (c03's opening).

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
