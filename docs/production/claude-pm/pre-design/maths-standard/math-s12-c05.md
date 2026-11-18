# math-s12-c05: What happens to the finish time when one activity speeds up or slows down?

Maths Standard research pack (Year 12, Critical path analysis), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Critical path analysis):

- `ci96fea97a`: Examine the impact of increasing or reducing the duration of an activity on the completion time of the project or task being modelled [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa9c92c4c6). Site coverage: covered.

These are CMS codenames, not published content-point codes. The syllabus does not ask for crash costs; "crashing" is the site's word for shortening an activity and may be named once.

**Course:** Standard 2 only. Playlist order 87. **Standard 1:** not in the Standard 1 course (see c01).

**Entry knowledge:** math-s12-c03: `ci3045f9aa`, `ci6087f0de`, `cib45f96bd` (float, critical path, minimum time). math-s12-c04: `cid66dcd84` (Gantt charts, float windows).

**Prior video:** math-s12-c04.

**Start:** c04's final frame (proposed): the shed's Gantt chart with a rain cloud over "slab cures", "what if it rains for a day?".

**Stop:** Four cases, each checked on the network or Gantt chart: a critical activity takes longer, so the project takes that much longer (curing +1 day: 10 days); a non-critical activity takes longer by no more than its float, so nothing changes (door +1: still 9, but now a second critical path); by more than its float, so the project grows by the excess (kit 2 days late, float 1: 10 days); a non-critical activity is shortened, so nothing changes; a critical activity is shortened, so the project shortens, but only until another path becomes the longest (curing 3 to 1 day saves only 1 day: 8, because B-E-G is 8); with two critical paths, shortening one of them changes nothing (Question 1 (b)). Always rescan (or recheck the paths) after a change.

**Next:** math-s12-c06.

## 2. Site order, sections and worked examples

Read-only sources: [critical-path-analysis/lesson04.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/critical-path-analysis/lesson04.sa.html), SHA256 `d0e1166464da1c40cb45571fc94734b73b5ed926c330a6ab2c3706cc37d5663a`: `crash-critical-path` (card 3, Worked Example 3), `apply-gantt-analysis` (activity 2), `independent-practice` (Q2, Q4). [lesson03.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/critical-path-analysis/lesson03.sa.html), SHA256 `562cf13c015378f7626b2f1b2c6ad94691464f68f1a742f9b395dd8102dd485a`: `schedule-with-float` (Worked Example 3), `model-project` ("Now solve with it": F from 5 to 6 and 7), `independent-practice` (Q2, Q5). [lesson05.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/critical-path-analysis/lesson05.sa.html), SHA256 `5e734b49509d875811ac31b4927d901c9e4e29f36aa754a6a13470d2ff7b51ac`: `compare-critical-paths` (crashing with two critical paths, Q1, Q5). [lesson06.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/critical-path-analysis/lesson06.sa.html), SHA256 `0b95600b48eedf7c1d576de4fb431270d6e793d09d2bd9840e717ee725eec3e6`: `prepare-for-exams` (HSC-style question, delaying R by 2 weeks).

### Source lesson04, Worked Example 3 and activity 2

"Project: Critical path A(5) → B(4) → D(3) = 12 days. Non-critical: C(3) with float 4 ... Crash A by 2 days: critical path → 10 days; Crash D by 2 days: critical path → 8 days; Crash B: cannot (crash time = normal duration) ... Maximum reduction = 4 days." Activity 2: "Foundation (6 days) → Frame (5 days) → Roof (4 days) = 15 days. A parallel non-critical path has 3 days of float. Crash data: Foundation can be crashed by 2 days; Frame cannot be crashed; Roof can be crashed by 1 day."

### Source lesson03, spreadsheet and Worked Example 3; lesson06

Lesson03: "Change activity F's duration from 5 to 6 ... F has 1 day of float, so that one extra day is exactly absorbed ... Push F to 7 and the project slips to 15". Worked Example 3: "when C uses 3 of its 4 days float (starts day 5 instead of day 2), E has only 1 day remaining". Lesson06: "Effect of delaying R by 2 weeks: R has 2 weeks float ... Project not delayed, it still completes in 13 weeks. However, R now has zero float".

## 3. Recalculation

- Lesson04 Worked Example 3: 12 to 8 (C's path A-C becomes 6, still shorter). Activity 2: 15 to 12 if the parallel path (length 12) shares none of the crashed activities; it then ties and becomes critical (the question does not say which activities it contains; see decisions). Q4: 14 to 12.
- Lesson03 spreadsheet: F 6 gives 14 with a second critical path A-D-F-G; F 7 gives 15. Worked Example 3: E float 4 to 1.
- Lesson06 HSC-style: R 3 to 5 gives 13 (R float 2 used); lesson06 activity 1: C 8 to 6 gives 18 to 16.
- Shed (c03's network, 9 days, float B 1, F 1): curing 3 to 4 gives 10; kit 4 to 6 gives 10; walls 2 to 1 gives 8; curing 3 to 1 gives 8 (B-E-G = 8 takes over); door 1 to 2 gives 9 (two critical paths); door 1 to 3 gives 10.
- Question 1 (c03's renovation, 12 days, two critical paths, F float 5): F +3 gives 12; C −2 gives 12 (A-B-D-E is still 12); D +2 gives 14. Question 2: shed curing 3 to 1 gives 8, a saving of 1 day.

Every value above was recalculated in Python (`work/brief-standard-zcf/recalc.py`, full rescan for each change). All site answers match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- Shortening any activity to save time (only critical ones can help).
- Assuming a saving on the critical path carries through in full (another path can take over).
- With two critical paths, shortening only one.
- A delay within float "costs nothing" and nothing changes afterwards (the float is used up and the path may become critical).
- Adding the delay to the finish time for a non-critical activity without subtracting its float.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- The shed's Gantt chart and network side by side, one state driving both: a duration handle on a bar; drag it and both views rescan live (finish time, critical colours, float windows).
- A path-length stack (four bars for the four paths) that rises and falls with each change; the tallest bar is always the finish time, and the stack shows when a different path takes the lead.
- A "within float / beyond float" gauge on a non-critical bar: the window shrinks to zero, then the finish line moves.
- A short table of the four rules as a Key notes hold.

Advanced reuse: none. New kit: `GanttChart` and `ActivityNetwork` sharing one project state with a `durationHandle`, plus `PathStack` (see kit needs). Plates: the shed (c03), a rain cloud overlay (coded).

## 6. Two original candidate practice questions

### Question 1

The renovation from the last video has these activities (days): A 3 (–), B 2 (after A), C 6 (after A), D 4 (after B), E 3 (after C and D), F 2 (after B). Its minimum completion time is 12 days. Find the new minimum completion time if: (a) F takes 3 days longer; (b) C is shortened by 2 days; (c) D takes 2 days longer. Explain each.

**Worked answer:** (a) 12 days: F has 5 days of float, so 3 days are absorbed. (b) 12 days: A-B-D-E is also a critical path (12), so shortening C alone does not help. (c) 14 days: D is critical, so A-B-D-E becomes 14.

### Question 2

In the backyard shed project (minimum 9 days; critical path A, C, D, E, G; kit delivery B 4 days with float 1), the slab curing (D) is cut from 3 days to 1 day with a fast-setting mix. What is the new minimum completion time? Why is the saving not 2 days?

**Worked answer:** A-C-D-E-G becomes 7, but B-E-G is 4 + 2 + 2 = 8, so the minimum is 8 days. Only 1 day is saved because the kit delivery path becomes the critical path.

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief (one crossed-out mistake: Question 1 (b) "10 days", crossed, "the other critical path is still 12"; Question 2 "7 days", crossed, "check every path: B-E-G is 8").

## 7. Everyday anchors

- **The backyard shed:** rain on the curing slab, a late kit, an extra helper on the walls, a fast-setting mix (home; invented).
- **The café's morning prep:** the oven warms slowly one morning (A has 5 minutes of float: no change until it is more than 5 minutes late) (work; from c01).
- **The school formal:** the DJ booking (E) runs late by 3 weeks: float 5, no change (school; from c04).

Varied everyday contexts, no science. Repeat check (grepped 19 November 2026): no repeats. The site's foundation, frame and roof example keeps its numbers. Claude picks; none is required. Objects and labelled jobs, never people.

## 8. Site corrections and decisions for Claude

See section 9: MS-52 (lesson03's Worked Example 3 days), MS-58 (labels). Owner note (not logged as an error): lesson04 activity 2 does not say whether the parallel path shares Foundation; the answer depends on it.

Decisions for Claude:

- **Plain words first:** "takes longer" and "speeds up" before "crashing"; costs per day are not needed (not in the syllabus).
- **One project state for every change** so the rescan is seen, not asserted (the motion standard's "show each narrated change on screen").
- **Pace: watch.** Five cases plus the "another path takes over" surprise fit about 8 minutes; the café and formal checks are the first trims.
- Final frame: the formal's precedence table typed into a spreadsheet, the EST column empty, "can a spreadsheet do the scans for us?" (c06's opening).

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
