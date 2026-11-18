# math-s12-c03: What is the critical path, and how do float times reveal it?

Maths Standard research pack (Year 12, Critical path analysis), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Critical path analysis):

- `ci7195eacb`: Explain the term critical path [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa9c92c4c6). Site coverage: covered.
- `ci3045f9aa`: Calculate float times to identify critical and non-critical activities. Site coverage: covered.
- `ci6087f0de`: Analyse ESTs and LSTs to locate the critical path(s) for the project. Site coverage: covered.
- `cib45f96bd`: Apply critical path analysis to determine the minimum completion time for a project. Site coverage: covered.

(All four from the same NESA page.) These are CMS codenames, not published content-point codes. Note the plural "critical path(s)": a project can have more than one.

**Course:** Standard 2 only. Playlist order 85. **Standard 1:** not in the Standard 1 course (see c01).

**Entry knowledge:** math-s12-c02: `ci1ebd8915` (forward and backward scans; EST and LST of each activity). math-s12-c01 (networks and dummies).

**Prior video:** math-s12-c02.

**Start:** c02's final frame (proposed): the backyard shed's network with its scans finished, "which jobs can't slip?".

**Stop:** The minimum completion time is the finish node's earliest time, which equals the length of the longest path (every path must be finished, so the longest one sets the time; shed: 9 days); the critical path is that longest path, a chain of activities with no spare time; float = LST − EST (the same as the end node's latest time − the start node's earliest time − duration); float 0 means critical, float > 0 means non-critical (shed: kit delivery B and door F have 1 day); a check by adding the critical durations; two critical paths when two paths tie (Question 1); float shared along a path (two non-critical activities in a row cannot each use all of it). Gantt charts are c04; changing durations is c05.

**Next:** math-s12-c04.

## 2. Site order, sections and worked examples

Read-only sources: [critical-path-analysis/lesson03.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/critical-path-analysis/lesson03.sa.html), SHA256 `562cf13c015378f7626b2f1b2c6ad94691464f68f1a742f9b395dd8102dd485a`: `orient-and-prepare` (key terms), `identify-critical-path` (Worked Example 1), `calculate-float` (Worked Example 2), `schedule-with-float` (shared float, Worked Example 3), `independent-practice` (activity 1, Q1, Q4, SAQ 1). [lesson01.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/critical-path-analysis/lesson01.sa.html), SHA256 `baf5c3da12545359d8b0834b53f67c4be1a1f0daa9be7676afa44304033ea498`: `orient-and-prepare` (card 02 "longest path = minimum time", the house hook), `identify-critical-path` (card 07), `retrieve-and-finish` revisit, `we-l07-3`. [lesson05.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/critical-path-analysis/lesson05.sa.html), SHA256 `5e734b49509d875811ac31b4927d901c9e4e29f36aa754a6a13470d2ff7b51ac`: `compare-critical-paths` (Worked Example 1, two critical paths).

### Source lesson01, card 02 and the house hook

"The critical path is the longest path through the network, it determines the minimum time to complete the project." "Parallel = max, not sum." Revisit: "The house build minimum time is 10 days: foundations(3) + framing(5) + roofing(2). Electrical runs in parallel with framing ... electrical has 3 days of float."

### Source lesson03, Worked Example 2 and activity 1

Worked Example 2 table: "A | 2 | 0 | 2 | 0 | Yes; B | 4 | 2 | 6 | 0 | Yes; C | 3 | 2 | 9 | 4 | No; D | 5 | 6 | 11 | 0 | Yes; E | 2 | 5 | 11 | 4 | No" (columns Dur, EST(start), LST(end), Float). "C and E share the non-critical path, so using C's full float reduces E's available float." Activity 1: P 5, Q 5, R 6 (P), S 3 (R), T 6 (Q); node data "After Q | 5 | 8"; "Calculate the float for activity Q ... activity T". SAQ 1: "A(3), B(5) after A, C(2) after A, D(4) after B and C" ("Float for C: ... 8 − 3 − 2 = 3 days").

### Source lesson05, Worked Example 1

"A 3; B 5 (A); C 4 (A); D 2 (B); E 3 (C)" with "Both paths are critical: Path 1: Start → A → B → D → End (3+5+2 = 10); Path 2: Start → A → C → E → End (3+4+3 = 10)".

## 3. Recalculation

- House: 10 days; electrical float 10 − 3 − 4 = 3. Lesson03 Worked Example 2: 11 days, critical A, B, D; C and E float 4 (shared). Activity 1: 14 days, critical P, R, S; Q and T float 3 each, shared (the path through them can absorb 3 days in total). SAQ 1: 12 days, C float 3. Lesson05 Worked Example 1: 10 days, two critical paths.
- Shed (invented): A clear site 1 (–); B kit delivery 4 (–); C pour slab 1 (A); D slab cures 3 (C); E walls and roof 2 (B, D); F door and window 1 (E); G paint 2 (E). Paths: A-C-D-E-G 9, A-C-D-E-F 8, B-E-G 8, B-E-F 7. EST/LST: A 0/0, B 0/1, C 1/1, D 2/2, E 5/5, F 7/8, G 7/7. Minimum 9 days; critical A, C, D, E, G; float B 1, F 1. (F and G both end the project: F ends at its own event with a dummy to the finish, or both end at the finish node; see c01's decision.)
- Question 1: A 3, B 2 (A), C 6 (A), D 4 (B), E 3 (C, D), F 2 (B). Paths A-C-E 12, A-B-D-E 12, A-B-F 7. Minimum 12 days; two critical paths; F float 12 − 5 − 2 = 5.

Every value above was recalculated in Python (`work/brief-standard-zcf/recalc.py`: all paths, scans and floats). All site answers match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- "Critical path = shortest path" (Year 11 shortest paths are a different question).
- Adding every duration (parallel jobs overlap, so it is the longest path, not the sum).
- Node slack read as activity float (the site's own warning; MS-53).
- Stopping at one critical path when two paths tie.
- Adding the floats of two activities on the same path as if both could be used.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- The shed network with all four paths traced one at a time, their lengths stacking as bars (9, 8, 8, 7), the longest lit as the critical path.
- A float table filling row by row: LST − EST, zeros turning the arrow red (critical), positives amber with the number of spare days.
- A "push it" demonstration: drag the kit delivery 1 day later and the finish stays at 9; 2 days and the finish moves (the c05 teaser).
- Two critical paths in Question 1's feedback: both lit at once.

Advanced reuse: none. New kit: `ActivityNetwork` with `critical` highlight and `PathStack`, `FloatTable` (see kit needs). Plates: a backyard shed kit and a finished shed (new `ms12-` plates; the shed is painted for c02's final frame).

## 6. Two original candidate practice questions

### Question 1

A small renovation has these activities (days): A 3 (–), B 2 (after A), C 6 (after A), D 4 (after B), E 3 (after C and D), F 2 (after B). (a) Find the minimum completion time. (b) State the critical path or paths. (c) Find the float of F.

**Worked answer:** (a) Paths: A-C-E = 12, A-B-D-E = 12, A-B-F = 7, so 12 days. (b) Two critical paths: A-C-E and A-B-D-E. (c) F: EST 5, LST 12 − 2 = 10, float 5 days.

### Question 2

In the backyard shed project, the kit delivery (B, 4 days) has a float of 1 day. Explain what this float means for the person planning the build, and why painting (G) has no float.

**Worked answer:** The kit can arrive up to 1 day late (or take 5 days) without changing the 9-day finish. Painting is on the longest path (A, C, D, E, G = 9 days), so any delay to it delays the whole project.

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief (one crossed-out mistake: Question 1 (b) "A-C-E only", crossed, "A-B-D-E is also 12"; Question 2 "B can be 1 day late and so can F, so 2 days", crossed, "each float is its own activity's; F's is on another path").

## 7. Everyday anchors

- **Building a backyard shed:** slab, curing, kit delivery, walls, door, paint (home; invented durations, labelled).
- **The café's morning prep:** the batter and muffins set the opening time; the pies have 10 minutes spare (work; from c01 and c02).
- **A school formal:** which jobs set the date (school; c04's anchor, previewed).

Varied everyday contexts, no science. Repeat check (grepped 19 November 2026): "shed" appears in Standard t01 (a roof triangle), not as a project. The site's house build stays as the opening worked example of "longest path". Claude picks; none is required. Objects and labelled jobs, never people.

## 8. Site corrections and decisions for Claude

See section 9: MS-52 (a scheduling example puts A and B on the wrong days), MS-53 (node slack called float), MS-49 (the hero caption, if lesson01's art is reused).

Decisions for Claude:

- **One float formula on screen:** float = LST − EST for each activity, using c02's activity row; the site's "LST(end node) − EST(start node) − duration" is the same number and can be a grey alternative.
- **Why longest = minimum:** say it as "everything has to be finished, and the longest chain can't be squeezed" with the paths racing as bars.
- **Shared float:** one sentence and one picture (lesson03's C and E), not a separate scene.
- **Pace: watch.** Four points (explain, float, locate, minimum time) on one network fit about 8 minutes; the "push it" teaser is optional.
- Final frame: the school formal's activities as bars on an empty week timeline, "how do we show this on a calendar?" (c04's opening).

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
