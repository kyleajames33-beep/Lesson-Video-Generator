# math-s11-l01: What do the gradient and y-intercept tell us, from a graph or an equation?

Maths Standard research pack (Year 11, Linear relationships), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Year 11 (common to Standard 1 and Standard 2), Linear relationships (Linear modelling):

- `ci94641a48`: Determine the y-intercept and gradient of a straight line given in graphical form [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fabe84d89c). Site coverage: covered.
- `cic0a28004`: Determine the y-intercept and gradient from the equation of a straight line [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fabe84d89c). Site coverage: covered.

**Course:** Year 11, common to Standard 1 and Standard 2.

**Entry knowledge:** math-s11-f08 (tables of values made by a formula). Stage 5: the Cartesian plane, plotting (x, y), reading scales; gradient and y = mx + c were met in Stage 5 but are recalled, not assumed fluent.

**Prior video:** math-s11-f08.

**Start:** f08's spreadsheet made tables. Plot one and the points line up; a straight line is described completely by two numbers.

**Stop:** The y-intercept is where the line crosses the vertical axis (the output when x = 0); the gradient is rise over run between two clear points, with its sign (up: positive; down: negative; flat: zero); steeper means a bigger rate; gradient = change in output ÷ change in input, never the reverse; gradient with units in context (dollars per week, litres per minute); reading m and c from y = mx + c, including y = 12 − 3x (m = −3, c = 12) and C = 12 + 5h. Writing the equation and drawing the line are l02; building a model from words is l03.

**Next:** math-s11-l02.

## 2. Site order, sections and worked examples

Read-only source 1: [linear-relationships/lesson02.sa.html](https://hscscience.com.au/subjects/maths-standard/year11/linear-relationships/lesson02.sa.html), SHA256 `d7934d3324181f8d09e2ba1f88528443f90d479061b79e7c40f383aabbd11abb`. Gradient as Rate of Change. Sections: `the-key-idea-gradient`, `gradient-is-a-rate`, `use-output-change-over`, `worked-examples-3-in`, `common-errors-the-3`, `revisit-your-thinking`, `practice-set`, `review-and-complete`.

Hook: "A savings balance increases from $\$120$ to $\$210$ over 6 weeks." Card 02: "$m = \frac{\text{change in output}}{\text{change in input}} = \frac{y_2 - y_1}{x_2 - x_1}$"; "Positive gradient: output increases. Negative gradient: output decreases. Zero gradient: output stays constant." Card 06: "Do not calculate input change over output change."
`we-1`: (0, 120) and (6, 210): $m = 90 \div 6 = 15$ dollars per week.
`we-2`: "40 km after 0.5 h and 160 km after 2 h": $m = 120 \div 1.5 = 80$ km/h.
`we-3`: −4 L/min (draining tank), 0 °C/h, +$25/week.
Drill: 20 L to 95 L in 5 min (15 L/min); 30 km at 0.5 h to 150 km at 2.5 h (60 km/h); $500 to $380 over 4 weeks (−$30/week). Q1 15 L to 75 L in 4 min (15 L/min); Q2 (0.25, 20) to (1.75, 140) (80 km/h); Q3 −6 L/min.

Read-only source 2: [linear-relationships/lesson03.sa.html](https://hscscience.com.au/subjects/maths-standard/year11/linear-relationships/lesson03.sa.html), SHA256 `c8d6872ef3873497730932a9296aa733ae5a3439e9f27e20984f9e21d5d2c8e0`. Intercepts and Linear Equations. Card 05: "The vertical intercept is the output when the input is zero." "A line crosses the y-axis at the y-intercept". Quick check "In $C = 12 + 5h$, which value is the vertical intercept?" (12). Trap 01: "In $C = 12 + 5h$, the hourly rate is 5, not 12." The page writes $y = mx + b$ in cards 02 to 04 and $y = mx + c$ in card 05 (MS-82).

## 3. Recalculation

- Lesson02: 15, 80, 15, 60, −30, 15, 80; quick check 300 to 450 over 5 weeks, 30.
- Lesson03: C = 12 + 5h gives intercept 12, gradient 5; S = 75 + 20(6) = 195; y = 10 + 6(7) = 52; S = 120 + 25(8) = 320; y = 18 + 7(6) = 60.
- New: aquarium from (0, 20) to (12, 80): 5 L per minute. Practice: (0, 3) and (4, 11) give gradient 2; y = 12 − 3x has gradient −3 and crosses the x-axis at 4.

All recalculated with SymPy 1.14.0 (`work/brief-standard-s11-fl/recalc.py`).

## 4. Misconceptions and HSC-style traps

- Run over rise, or counting grid squares when the axes have different scales.
- In y = 12 − 3x, giving the gradient as 3 or 12.
- In C = 12 + 5h, calling 12 the gradient because it comes first.
- Reading the intercept where the line crosses the x-axis.
- A gradient with no units, or a negative gradient treated as an error.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- One line on a grid with a step triangle (rise, run) that slides along the line, showing the same gradient anywhere on it; a second line steeper, and the triangle grows taller for the same run.
- The y-intercept ringed where x = 0, with the equation's c lighting in the same colour (graph and equation as one fact).
- Axes with different scales (minutes across, litres up) so rise and run are read in units, not squares.
- y = 12 − 3x and C = 12 + 5h with m and c colour-coded wherever they sit.

Kit: `StudioPlot`; `StudioTangentTriangle` or a rise-run triangle as a straight-line case; `LinePiece`, `LineSet`; `FeatureLedger` for m and c; `RepresentationQuad` (requested in the a-strand kit list) if built. Advanced reuse (visual parts only, ruling 7): math-a11-w10 and w11 (designed, not built).

## 6. Two original candidate practice questions

### Question 1

A straight line passes through (0, 3) and (4, 11), as shown on the graph. Find the y-intercept and the gradient.

**Worked answer:** y-intercept 3 (where x = 0). Gradient = (11 − 3) ÷ (4 − 0) = 8 ÷ 4 = 2.

### Question 2

For the line y = 12 − 3x: (a) state the gradient and the y-intercept; (b) describe the line in words.

**Worked answer:** (a) m = −3, c = 12. (b) It crosses the y-axis at 12 and falls 3 units for every 1 unit across (it slopes down from left to right).

Only the question goes on the card (Question 1 shows the graph). "Pause here to answer." then a 10-second countdown. Feedback stays brief (Question 2: crossed "m = 12", "the gradient is the number with x"). Answers were checked with SymPy.

## 7. Everyday anchors

- An aquarium filling from a hose: 20 L at the start, 80 L after 12 minutes, so 5 litres a minute (home; positive gradient with units).
- A drive to the snowfields: the distance still to go falls steadily (travel; a negative gradient and its meaning).
- An ice rink: an entry fee plus a price per hour of skating, read from its cost line (entertainment; intercept as the entry fee).

None repeats an anchor in the Year 11 or Year 12 Advanced designs or the Year 12 Standard packs and designs (grepped 19 November 2026: "aquarium", "snowfield" and "ice rink" no hits; a phone battery and a fuel gauge were avoided because math-a11-c03 and math-s12-a08 use them). Objects only, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`. New finding: MS-82 (lesson03 writes y = mx + b and y = mx + c on one page; the syllabus uses c).

Decisions for Claude:

- **Notation:** y = mx + c throughout (the syllabus letters, as in a01 and b04).
- **Year 12 needs:** a01 and b04 read m and c from a graph; a08 and r12 use "steeper means faster"; r12 reads gradient as rise over run on a distance-time graph. All must be visible here.
- **Graph first, then equation**, so the two points are one idea seen twice.
- Pace: 6 to 8 minutes. Not at risk.

Claude selects the exact examples and final length. Human listening and exact playback remain later gates.
