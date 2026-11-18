# math-s12-b02: How do we draw a scatter plot and describe its form, direction and strength?

Maths Standard research pack (Year 12, Bivariate data analysis), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Bivariate data analysis, Scatter plots and lines of best fit):

- `ci7511e8f1`: Represent a bivariate dataset using a scatter plot [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fadb5e412c). Site coverage: covered.
- `ci8c04e655`: Describe the form of a dataset as linear or non-linear based on the association between two variables [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fadb5e412c). Site coverage: recorded as covered; no example shows a non-linear pattern (MS-62).
- `ci2b7391e9`: Describe the strength of a linear relationship between two variables as strong, moderate or weak, and its direction as positive or negative [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fadb5e412c). Site coverage: covered.

Standard 1 (Year 12, Bivariate data analysis, Scatter plots and lines of best fit):

- `ci865ac4ef`: Represent a bivariate dataset using a scatter plot [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/faf283a852).
- `ci999efce4`: Describe the form of a dataset as linear or non-linear based on the association between two variables [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/faf283a852). Same note (MS-62).
- `cic75eb64e`: Describe the strength of a linear relationship between two variables as strong, moderate or weak, and its direction as positive or negative [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/faf283a852).

These are CMS codenames, not published content-point codes. Wording identical for both courses. The syllabus writes "scatter plot" (two words); the site writes "scatterplot". Use the syllabus spelling on screen.

**Course:** Standard 1 and Standard 2. Playlist order 63.

**Entry knowledge:** math-s12-b01 (`ci91fdb0d7`, `cibbeaeac3`; S1 `cif80a9d87`, `ci2a5afecd`): pairs, independent on x, a pair as a point. math-s11-d18: `ci72ffda24` (clusters, gaps and outliers), recalled in a phrase. math-s11-l02: `ciafd3b572` (a straight line), for "close to a straight line".

**Prior video:** math-s12-b01.

**Start:** b01's final frame (proposed): the full kiosk board (18°C 40, 22°C 60, 25°C 75, 28°C 90, 32°C 120) beside empty axes "top temperature (°C)" and "ice creams sold", the first row lifting off as a point: "what shape do the five days make?".

**Stop:** Plot a bivariate dataset on labelled axes with a scale that fits the data (the axes need not start at zero); form: linear (the points lie close to a straight line) or non-linear (they follow a curve); direction: positive (higher x goes with higher y), negative, or none; strength of a linear relationship: strong, moderate or weak, judged by how closely the points hug a straight line, not by how steep that line is; a complete sentence with the variable names; an outlier named in context. Not taught: r (b05) and causation (b03).

**Next:** math-s12-b03.

## 2. Site order, sections and worked examples

Read-only sources: [bivariate-data-analysis/lesson04.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/bivariate-data-analysis/lesson04.sa.html), SHA256 `e0f45f2c42a726eb6e800d9009a241fe57167702542e7e9ea58063cfa88cb665` (sections `construct-scatterplots`, `read-scatter-patterns`, `work-scatterplot-examples` `we-1`, `apply-bivariate-foundations`); [bivariate-data-analysis/lesson05.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/bivariate-data-analysis/lesson05.sa.html), SHA256 `cc3e13287cf73ec1eefa4b9836449711f760745f75392af9133574703cf95945` (sections `orient-correlation-language`, `identify-correlation-direction`, `judge-correlation-strength`, `describe-correlation-fully`, `work-correlation-examples` `we-1` to `we-3`, `apply-correlation-language`, `answer-correlation-questions`). Both at kyleajames33-beep/Teaching-APP 5d74a627.

### Source lesson04, card 05, card 06 and `we-1`

Card 05: "Choose a scale that fits all data points, it does not need to start at zero if the data is in a narrow range." Card 06: "Direction: Does the pattern go up (positive) or down (negative), or is there no consistent direction? Strength: Are the points tightly grouped near a line (strong) or widely scattered (weak)? Unusual features: Are there outliers (points far from the main group) or clusters (separate subgroups)?" Example: "One student studied 10 hours but scored only 30%, an outlier in the bottom-right region." `we-1`: "Hours studied 1, 2, 3, 4, 5; Score (%) 45, 55, 62, 74, 80" ("x-axis: 0 to 6 hours. y-axis: 40% to 85%"; "positive trend. As study hours increase, exam scores tend to increase.").

### Source lesson05, cards 02 to 07

Card 02: "Full description = direction + strength + 'linear correlation' e.g. 'strong positive linear correlation'". Card 07: "Common error: Confusing direction with strength. 'Strong' and 'weak' describe how close the points are to a line, NOT how steep the line is. A steep line can still have weak correlation if the scatter is large." Examples: "There is a moderate negative linear correlation between temperature and hot coffee sales."

### Source lesson05, worked examples and activity

`we-1`: study hours, "closely grouped around a straight line" → "strong positive linear correlation". `we-2`: "(A) points slope down, tightly grouped. (B) points slope up, widely scattered. (C) random scatter. (D) points slope up, closely grouped. Which matches 'weak positive linear correlation'?" → (B). `we-3`: cigarettes and resting heart rate, "general upward trend but with noticeable scatter" → moderate positive (a health context; use `we-2` instead). Activity answers: "(1) Strong negative linear correlation. (2) Weak negative linear correlation. (3) No linear correlation. (4) Moderate positive linear correlation." Q1 (TV and grades, "cluster loosely around a downward-sloping line") → moderate negative.

### Source lesson04, activity (café)

"Temp (°C) 12, 15, 18, 22, 25, 28; Coffee sold 95, 88, 74, 60, 52, 38" ("The points go down (negative trend)").

## 3. Recalculation

- Kiosk (site lesson08 data): five points rising; r = 0.9949 (not shown here; b05 names it). Description: strong positive linear.
- Site study hours: r = 0.9958, strong positive linear.
- Café coffee: r = −0.9970, strong negative linear (the site's lesson05 card calls the same context "moderate negative" in a sentence about a different dataset; the activity data are strong).
- Non-linear set (invented, labelled): a new café's weekly customers, weeks 1 to 10: 120, 190, 240, 275, 300, 318, 330, 338, 343, 346. It rises quickly then levels off: a curve, non-linear. (r = 0.918, high even though the form is curved; kept for b05's limitation.)
- Screen time and sleep (invented, labelled, 8 students): screen time 1, 2, 2.5, 3, 4, 5, 6, 7 h; sleep 8.9, 8.2, 8.6, 7.8, 7.9, 7.1, 7.3, 6.6 h; r = −0.945, strong negative linear.
- Question 1 (invented): practice minutes 0, 15, 30, 45, 60, 75, 90; shots made 8, 9, 11, 12, 12, 14, 15; r = 0.985 (strong positive linear).

Every value above was checked with Python `statistics` and SymPy 1.14.0 (`work/brief-standard-bp/recalc.py`). All site values match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- Judging strength by steepness: a steep line with scattered points is weak; a gentle line with tight points is strong (site card 07).
- Giving direction only ("positive correlation"), or strength only, or no variable names.
- Starting both axes at zero and squashing the points into a corner, or using uneven scales.
- Calling a curve "weak" because the points do not fit a straight line; it may be a strong non-linear relationship. Form first.
- Swapping the axes (dependent variable on x).
- Letting one outlier decide the description.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- Kiosk rows lift off the board and land as points on axes that rescale live (starting at zero first, everything crammed; then "fit the data" with a break mark).
- Three dials or tags laid on the cloud in turn: form (a straight ruler or a bent ruler fits), direction (an arrow up or down), strength (a band around the line, thin for strong, wide for weak).
- Steep against strong: two plots side by side, one steep and scattered (weak), one shallow and tight (strong); the band width, not the angle, lights.
- The café's weekly customers rising and levelling off: a straight ruler visibly misses the bend; a curved guide fits ("non-linear").
- A sentence builder: [strength] [direction] [form] relationship between [x name] and [y name], filling in for the kiosk.
- An outlier dropped into the screen-time plot and named in words.
- Final frame: the kiosk scatter plus a second column on the board, "sunscreen sold", rising too: "do ice creams make people buy sunscreen?" (b03's opening).

Advanced reuse (visual parts only): `StudioPlot` (plot-core.tsx) for axes; `fnPath` for the curved guide; `SpreadBrackets` (spread-parts.tsx) as the pattern for a strength band. Plates: `ms12-beach-kiosk-v1.png`; `ma12-phone-v1.png` for screen time (appearance not checked); `ma11-coffee-cart-v1.png` for the café (inspect; `ms12-coffee-sandwich-v1.png` belongs to a02a's simultaneous equations). Kit needs: ScatterBoard with form, direction and strength cues (the main new part).

## 6. Two original candidate practice questions

### Question 1

A basketball player records how many minutes she practises free throws each week and how many of 20 free throws she makes in that week's game.

| Practice (min) | 0 | 15 | 30 | 45 | 60 | 75 | 90 |
|---|---|---|---|---|---|---|---|
| Shots made (of 20) | 8 | 9 | 11 | 12 | 12 | 14 | 15 |

(a) Draw a scatter plot of the data. (b) Describe the relationship in terms of form, direction and strength, using the variable names.

**Worked answer:** (a) Practice minutes on the horizontal axis (0 to 90), shots made on the vertical axis (a scale such as 6 to 16 that fits the data), seven points. (b) The points lie close to a straight line that rises: there is a strong, positive, linear relationship between minutes of free-throw practice and shots made.

### Question 2

Three scatter plots are described. Plot A: points rise from left to right and sit tightly around a straight line. Plot B: points fall from left to right but are widely spread around a straight line. Plot C: points rise steeply, then level off along a smooth curve. (a) Describe the form, direction and strength of A and B. (b) Explain why Plot C should not be described as "weak".

**Worked answer:** (a) A: linear, positive, strong. B: linear, negative, weak. (b) C follows a curve closely, so its form is non-linear; "weak" describes scatter around a straight line, and C is not scattered.

Only the question (and the table for Question 1) goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1 (b): "positive correlation", crossed, "add form and strength and name both variables"; for Question 2 (a): "B is strong because it is steep", crossed, "strength is how close, not how steep").

## 7. Everyday anchors

- **The beach kiosk:** five days plotted, strong positive linear (the strand's dataset).
- **Phone screen time and sleep:** eight students, strong negative linear, one outlier (phones and health habits without a medical claim; invented, labelled).
- **A new café's weekly customers:** rising then levelling off, the non-linear case (small business; invented, labelled).

Also usable: the site's café hot coffee (negative) and Question 1's basketball practice (sport). Repeat check (grepped 19 November 2026): "screen time" appears in other subjects and in Advanced e07 only as a phrase, not as data; "free throw" has no hits; basketball appears in several maths designs (rates, parabolas), not as practice data. Claude picks; none is required. Objects, never people: the screen-time plot uses a phone plate, not a student.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`, section 10: MS-62 (no non-linear example; "Curved" treated as not a description).

Decisions for Claude:

- **Form, direction, strength in that order** on screen, because form decides whether "strength" (about a straight line) even applies. The site's "full description" omits form; the syllabus requires it.
- **Wording:** the syllabus says "relationship" and "association"; the site's "linear correlation" is also fine. Pick one phrase and keep it.
- **No numerical cut-offs here:** strength is judged by eye in this video; r and its guide scale are b05 (Standard 2 only), so Standard 1 students never need numbers for strength.
- **Pace: watch.** Plotting plus three descriptors is full. If long, drop the screen-time plot to Question 1's feedback and keep the kiosk, the café curve and the steep-against-strong pair.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
