# math-s11-l02: How do we write y = mx + c and draw the line, by hand and with technology?

Maths Standard research pack (Year 11, Linear relationships), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11 (common to Standard 1 and Standard 2), Linear relationships (Linear modelling):

- `ciafd3b572`: Determine the equation of a straight line of the form y = mx + c where m is the gradient and c is the y-intercept [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fabe84d89c). Site coverage: covered.
- `ci5ff71229`: Construct a straight-line graph, with and without using graphing applications [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fabe84d89c). Site coverage: covered by hand; no lesson uses a graphing application (MS-81).

**Course:** Year 11, common to Standard 1 and Standard 2.

**Entry knowledge:** math-s11-l01: `ci94641a48` and `cic0a28004` (gradient and y-intercept from a graph or an equation). math-s11-f01: substituting x values to make a table.

**Prior video:** math-s11-l01.

**Start:** l01 read m and c from a line. Now go the other way: from m and c (or a graph, or a table) write the equation and draw the line.

**Stop:** Writing y = mx + c from a gradient and an intercept, from a graph (read c, count m) and from a table (c is the output at x = 0; m is the constant difference for steps of 1); checking a table is linear by equal differences for equal steps (lesson01); drawing a line by hand from a table of at least three points with a ruler, or by plotting c and stepping the gradient; drawing the same line in a graphing application and checking one point; every point on the line makes the equation true. Writing a model from words is l03; two lines crossing is math-s12-a01.

**Next:** math-s11-l03.

## 2. Site order, sections and worked examples

Read-only source 1: [linear-relationships/lesson01.sa.html](https://hscscience.com.au/subjects/maths-standard/year11/linear-relationships/lesson01.sa.html), SHA256 `517b64f10c3e8e7cd36941021b77d9d5eea0880e3280bd154b07b1207cd71603`. Coordinates, Tables and Linear Patterns. Sections: `the-key-idea-linear`, `ordered-pairs-connect-tables`, `increasing-does-not-always`, `worked-examples-3-in`, `common-errors-the-3`, `revisit-your-thinking`, `practice-set`, `review-and-complete`.

Hook: "A taxi fare starts at $\$6$ and goes up $\$3$ per kilometre." Card 02: "Equal input steps + equal output changes = linear pattern". Card 06's non-linear table: outputs 2, 5, 11, 20, changes +3, +6, +9.
`we-1`: fares 6, 9, 12, 15 for 0 to 3 km: (0, 6), (1, 9), (2, 12), (3, 15).
`we-2`: savings 20, 35, 50, 65: "+15 per week".
`we-3`: car 0, 80, 160, 240 km: 320 km at 4 h.
Trap 03: "If your inputs are 0, 1, 2, 4 (skipping 3), equal output changes would be misleading." Drill: (0, 4) to (3, 22), +6; savings at week 4, $110; 1, 4, 9, 16 not linear. Q1 and Q2: 8, 13, 18, 23 (+5); Q3 0, 90, 180, 270 km, 450 km at 5 h.

Read-only source 2: [linear-relationships/lesson03.sa.html](https://hscscience.com.au/subjects/maths-standard/year11/linear-relationships/lesson03.sa.html), SHA256 `c8d6872ef3873497730932a9296aa733ae5a3439e9f27e20984f9e21d5d2c8e0`. `we-1` "A bike hire costs $\$12$ plus $\$5$ per hour": $C = 12 + 5h$; `we-3` table (0, 30), (1, 42), (2, 54), (3, 66): $d = 30 + 12t$; drill 3 outputs 10, 16, 22, 28: $y = 10 + 6x$ (52 at x = 7). The page's y = mx + b is MS-82.

## 3. Recalculation

- Lesson01: 6, 9, 12, 15; differences 15, 15, 15; 320; 110; 6, 6, 6; 3, 5, 7 (not constant); 450.
- Lesson03: d = 30 + 12(3) = 66; y = 10 + 6(7) = 52.
- Practice: y = −2x + 5 gives 5, 3, 1, −1 for x = 0 to 3; (0, −1) and (3, 5) give m = 2, so y = 2x − 1.

All recalculated with SymPy 1.14.0 (`work/brief-standard-s11-fl/recalc.py`).

## 4. Misconceptions and HSC-style traps

- Writing y = cx + m (the numbers swapped).
- Taking c from the first table row when the table does not start at x = 0.
- Plotting only two points, or joining points freehand.
- Stepping the gradient the wrong way for a negative m.
- Reversing coordinates (12, 2) for (2, 12).
- Trusting an app's line without checking one point.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- A table whose rows fly to the grid as points, with "+3" arrows between rows matching "up 3, across 1" on the graph.
- "Plot c, then step m": a dot at (0, 5), then two steps of "across 1, down 2", then a ruler line through three points.
- An unbranded graphing-app window: the equation typed, the line appearing, one point tapped to show its coordinates, checked by substitution.
- A point off the line tested in the equation (it fails) beside a point on the line (it works).

Kit: `StudioPlot`, `StudioCandidateTable` (extras.tsx) with the table-to-plot flight requested for a01; `ScreenApp` in graph mode; `LinePoint`, `LineTest` for the on-line check; `WorkingRows`. Advanced reuse (visual parts only): math-a11-w10, w11.

## 6. Two original candidate practice questions

### Question 1

A line has gradient −2 and y-intercept 5. (a) Write its equation. (b) Complete a table of values for x = 0, 1, 2, 3. (c) Draw the line.

**Worked answer:** (a) y = −2x + 5. (b) 5, 3, 1, −1. (c) Plot (0, 5), (1, 3), (2, 1), (3, −1) and rule a line through them.

### Question 2

A straight line on a graph passes through (0, −1) and (3, 5). Find its equation.

**Worked answer:** c = −1; m = (5 − (−1)) ÷ 3 = 6 ÷ 3 = 2. y = 2x − 1.

Only the question goes on the card. "Pause here to answer." then a 10-second countdown. Feedback stays brief (Question 2: crossed "m = 4 ÷ 3", "5 minus −1 is 6"). Answers were checked with SymPy.

## 7. Everyday anchors

- A karaoke room booking: a room fee plus an hourly rate, drawn as a line (entertainment).
- A tutoring job: a travel fee plus a rate per hour of tutoring (part-time job).
- A bike repair quote: a parts cost plus labour per hour (bikes).

None repeats an anchor in the Year 11 or Year 12 Advanced designs or the Year 12 Standard packs and designs (grepped 19 November 2026: "karaoke", "tutor" and "bike repair" no hits; a plumber and a laundromat were avoided because math-s12-c02, math-a11-w12, w13 and w28 use them). Objects only, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`. New findings: MS-81 (no graphing application anywhere in the strand) and MS-82 (y = mx + b).

Decisions for Claude:

- **The graphing-app half is original teaching** (ruling 3). HSC Standard calculators do not graph, so the app is a classroom tool, as in a01.
- **Year 12 needs:** math-s12-a01's start boundary is "one line drawn from y = mx + c and a short table; every point on the line makes its equation true". End this video on that frame, or close to it.
- **Pace flag: watch.** Three ways to write the equation plus two ways to draw risks crowding; if long, keep "from a table" and "from a graph" and move "from m and c given in words" to l03.

Claude selects the exact examples and final length. Human listening and exact playback remain later gates.
