# math-s12-c04: How does a Gantt chart show a project schedule and its critical path?

Maths Standard research pack (Year 12, Critical path analysis), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Critical path analysis):

- `cid66dcd84`: Construct a Gantt chart to represent a project from a network diagram indicating the critical path [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa9c92c4c6). Site coverage: covered.

These are CMS codenames, not published content-point codes.

**Course:** Standard 2 only. Playlist order 86. **Standard 1:** not in the Standard 1 course (see c01).

**Entry knowledge:** math-s12-c03: `ci3045f9aa`, `ci6087f0de` (float, the critical path). math-s12-c02: `ci1ebd8915` (EST and LST).

**Prior video:** math-s12-c03.

**Start:** c03's final frame (proposed): the school formal's activities as loose bars beside an empty timeline in weeks, "how do we show this on a calendar?".

**Stop:** A Gantt chart: activities down the side, time along the bottom from 0 to the minimum completion time; each activity a bar starting at its EST with length equal to its duration; critical activities in one colour with no spare time; a non-critical activity's float as a dashed window after its bar, out to its latest finish; reading back from a chart (start, duration, finish, float, latest start, how many activities run in a given week); shared float shown on two bars in a row (decorations after theme). Building it from the network diagram (the syllabus wording), not from a list of numbers alone. Crashing and delays are c05.

**Next:** math-s12-c05.

## 2. Site order, sections and worked examples

Read-only source: [critical-path-analysis/lesson04.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/critical-path-analysis/lesson04.sa.html), SHA256 `d0e1166464da1c40cb45571fc94734b73b5ed926c330a6ab2c3706cc37d5663a`. Sections used: `orient-and-prepare` (key terms), `draw-gantt-chart` (card 1, Worked Example 1), `read-gantt-chart` (card 2, Worked Example 2), `apply-gantt-analysis` (activity 1), `independent-practice` (Q1, Q3, Q5, SAQ 1). The page's worked examples have no ids. `crash-critical-path` is c05.

### Source lesson04, card 1 and Worked Example 1

"For each activity, draw a solid bar starting at its EST and ending at EST + duration. For non-critical activities, add a float window (dashed box) extending from the end of the bar to LST + duration (= LST(end node))." Worked Example 1 (from lesson03's network): "A | 2 | 0 | 0 | 0 → 2 | None (critical); B | 4 | 2 | 0 | 2 → 6 | None (critical); C | 3 | 2 | 4 | 2 → 5 | 5 → 9 (4 days); D | 5 | 6 | 0 | 6 → 11 | None (critical); E | 2 | 5 | 4 | 5 → 7 | 7 → 11 (4 days)".

### Source lesson04, Worked Example 2 and activity 1

Worked Example 2: "Activity G has a bar from day 3 to day 8 followed by a dashed window from day 8 to day 11. EST of G = 3; Duration of G = 8 − 3 = 5; Float of G = 11 − 8 = 3; Latest start of G = 3 + 3 = 6". Activity 1: "P | 0 | 4 | 0; Q | 4 | 3 | 2; R | 4 | 5 | 0; S | 9 | 2 | 0 ... minimum project time = 11 days" ("What is the latest day Q can start? ... How many activities run simultaneously on day 5?"). SAQ 1: "A (bar 0→6), B (bar 6→8), C (bar 0→4 + float window 4→6), D (bar 8→10)" (critical A, B, D; 10 days; C float 2).

## 3. Recalculation

- Worked Example 1: as printed; the 0 to 11 axis. Worked Example 2: 3, 5, 3, latest start 6, latest finish 11. Activity 1 (as given): Q bar 4 to 7, window to 9, latest start 6, latest finish 9; on day 5, Q and R run (2 activities). SAQ 1: 10 days, B float 0, C float 2.
- Formal (invented, weeks): A book venue 2 (–); B choose theme 1 (–); C sell tickets 4 (A); D order decorations 2 (B); E book DJ 1 (A); F seating plan 1 (C); G decorate 1 (D, F). Minimum 8 weeks; critical A, C, F, G; float B 4, D 4 (shared), E 5. Bars: A 0 to 2; B 0 to 1 (window to 5); C 2 to 6; D 1 to 3 (window to 7); E 2 to 3 (window to 8); F 6 to 7; G 7 to 8.
- Question 1: A 3 (–), B 2 (A), C 5 (A), D 2 (B), E 1 (C, D). Minimum 9 days; critical A, C, E; B and D float 1 (shared). Bars: A 0 to 3; B 3 to 5 (window to 6); C 3 to 8; D 5 to 7 (window to 8); E 8 to 9.
- Question 2: J bar 2 to 5, window to 7: EST 2, duration 3, float 2, latest start 4.

Every value above was recalculated in Python (`work/brief-standard-zcf/recalc.py`). All site answers match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- Starting every bar at 0, or at the LST.
- Drawing the float window before the bar instead of after it.
- Giving a critical activity a window, or leaving the critical activities unmarked.
- Reading float as the length of the bar.
- Shared float: drawing B's full 4-week window and D's full window as if both could be used.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- The formal's network on the left, the Gantt chart building on the right: each arrow lifts off the network and lays down as a bar at its EST, the timeline in weeks across the bottom.
- Critical bars in red, joined end to end across the chart (the critical path reads left to right as an unbroken chain); amber dashed windows for float.
- Reading back: a vertical cursor at week 2.5 counting the bars it crosses; a bar's edges labelled start and finish.
- Shared float: drag B's bar 3 weeks later and D's window shrinks to 1 week.

Advanced reuse: none. New kit: `GanttChart` (bars, float windows, critical colour, a time cursor, linked to `ActivityNetwork` state; see kit needs). Plates: a school hall set up for a formal (new `ms12-` plate, optional; painted for c03's final frame if used).

## 6. Two original candidate practice questions

### Question 1

A community garden project has these activities (days): A 3 (–), B 2 (after A), C 5 (after A), D 2 (after B), E 1 (after C and D). Draw a Gantt chart for the project. Show the critical path and any float.

**Worked answer:** Minimum 9 days; critical path A, C, E. Bars: A 0 to 3; C 3 to 8; E 8 to 9 (critical, no window). B 3 to 5 with a dashed window to 6; D 5 to 7 with a dashed window to 8 (B and D share 1 day of float).

### Question 2

On a Gantt chart, activity J has a bar from week 2 to week 5, followed by a dashed window to week 7. (a) State the earliest start time and the duration of J. (b) What is the float of J? (c) What is the latest time J can start without delaying the project?

**Worked answer:** (a) EST week 2; duration 3 weeks. (b) Float = 7 − 5 = 2 weeks. (c) Latest start = 7 − 3 = week 4.

Only the question goes on the card (Question 2 with the drawn bar). Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief (one crossed-out mistake: Question 1 "B's bar from 0 to 2", crossed, "B starts when A finishes, at day 3"; Question 2 (c) "week 7", crossed, "that is the latest finish; latest start = 7 − 3").

## 7. Everyday anchors

- **Organising a school formal:** venue, tickets, DJ, seating, decorations over 8 weeks (school; invented).
- **The backyard shed:** the same chart for a weekend build (home; from c03).
- **A community garden:** a small project for the practice question (local community).

Varied everyday contexts, no science. Repeat check (grepped 19 November 2026): "formal" and "Gantt" have no hits in the designs. Claude picks; none is required. Objects and labelled jobs, never people.

## 8. Site corrections and decisions for Claude

No new error in the sections used. MS-58 (labels) applies to the page.

Decisions for Claude:

- **From the network:** the syllabus says "from a network diagram", so every chart is built beside its network, not from a table of finished numbers.
- **Keep crashing out** of this video (c05 owns changes in duration).
- **Pace: fits.** Drawing, critical colouring, float windows and reading back fit 6 to 7 minutes.
- Final frame: the shed's Gantt chart with a rain cloud over "slab cures", "what if it rains for a day?" (c05's opening).

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
