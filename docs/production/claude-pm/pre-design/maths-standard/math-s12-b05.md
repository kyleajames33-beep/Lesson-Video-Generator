# math-s12-b05: What does Pearson's correlation coefficient measure?

Maths Standard research pack (Year 12, Bivariate data analysis), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Bivariate data analysis, Scatter plots and lines of best fit):

- `ci5401622a`: Calculate and interpret Pearson’s correlation coefficient (r) for a bivariate dataset using a scientific calculator to quantify the strength of a linear association between the two variables [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fadb5e412c). Site coverage: covered; three different strength scales on the page (MS-60).

Standard 1: no matching point (the Standard 1 course has no correlation coefficient).

This is a CMS codename, not a published content-point code. The official text uses a curly apostrophe in "Pearson’s"; quote it exactly in descriptions.

**Course:** Standard 2 only. Playlist order 66. Standard 1 viewers go from b04 to b07.

**Entry knowledge:** math-s12-b02 (`ci8c04e655`, `ci2b7391e9`): form, direction and strength in words. math-s12-b03 (`ci467160a5`): correlation is not causation. math-s11-d13: `ci14ad4af7` (σ on a scientific calculator, the same STAT mode family), recalled in a phrase.

**Prior video:** math-s12-b04 (Standard 2 route).

**Start:** b04's Standard 2 panel (proposed): the kiosk scatter and its line of best fit with a dial from −1 to 1 beside it, needle hidden: "how strong, as one number?".

**Stop:** Pearson's correlation coefficient r measures how closely the points follow a straight line; it is between −1 and 1; its sign is the direction and its size the strength; r = 1 and r = −1 (every point on a line) and r near 0 (no straight-line pattern) as pictures; one strength guide used consistently (|r| from 0.8 strong, 0.5 to under 0.8 moderate, under 0.5 weak, labelled "a guide"); r from a scientific calculator: two-variable STAT mode, enter each pair on its own row, read r, round to two decimal places; two checks (r is never outside −1 to 1; its sign matches the plot); an interpretation sentence with the variable names; limits: r measures straight-line association only (a curve can give a high r or an r near 0), one outlier can move r a lot, and a large r does not show cause. Not taught: the least-squares line (b06).

**Next:** math-s12-b06.

## 2. Site order, sections and worked examples

Read-only source: [bivariate-data-analysis/lesson06.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/bivariate-data-analysis/lesson06.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `8da067542fa595762ce4f38f929b9535c0374a304c24d7426a8b137fe0154146`. Sections used: `orient-pearsons-r` (card 02), `read-r-sign-magnitude` (card 05), `interpret-r-context` (card 06), `recognise-r-limitations` (card 07 and the Correlation Explorer), `calculate-r` (card 08), `apply-pearsons-r` (`we-1` to `we-3`, activity), `answer-pearson-questions` (Q1, Q2). The explorer is `assets/diagrams/correlation-explorer-interactive.html` (SHA256 `d88599b655b50db6d9e6d7a6bf5dfca82a4f1e376ed944532f5dd723b8c412e1`).

### Source lesson06, cards 02, 05 and 07

Card 02: "$r$ is always between $-1$ and $+1$ inclusive. $r = +1$ is perfect positive; $r = -1$ is perfect negative; $r = 0$ means no linear correlation." "Sign gives direction; magnitude gives strength." Card 05 table: "$0.8$ to $1.0$ Strong; $0.5$ to $0.8$ Moderate; $0.3$ to $0.5$ Weak; $0$ to $0.3$ Very weak / no correlation", "Note: These are guidelines, not strict rules". Card 07: "$r$ only measures linear relationships. Two variables can have a perfect curved (non-linear) relationship with $r \approx 0$." "Outliers can distort $r$." "Key exam point: If a student says '$r = 0$ means the variables are not related,' this is incorrect."

### Source lesson06, card 08 (calculator)

"Eight Year 12 students recorded their paid work hours in a typical week and their mark in the same exam: Work hours ($x$) 0, 3, 5, 8, 10, 12, 15, 19; Exam mark ($y$) 89, 76, 83, 82, 74, 69, 69, 50". "The screen gives $r = -0.8995554\ldots$, which you report as $r = -0.90$". "Two checks that catch a data-entry error. First, $r$ can never leave the interval from $-1$ to $1$. ... Second, the sign of $r$ must match the direction you can already see". "Other models. Menus differ, the three things you are hunting never do: a two-variable or linear-regression mode, a place to type the pairs, and a results screen". True or false: "$r = 1.12$ ... can be trusted" (False).

### Source lesson06, explorer, worked examples and questions

Explorer start data (from the asset): (2, 45), (3, 52), (4, 58), (5, 65), (6, 70), (7, 78), (8, 82), (9, 88), (10, 92), (12, 95); prompt: "Change the exam score of the student who studies 2 hours from 45 to 95". `we-1`: $r = 0.72$, exercise hours and BMI → moderate positive. `we-2`: $r = -0.95$, "daily screen time (x) and hours of sleep (y)" → strong negative. `we-3`: match "(A) tightly grouped upward, (B) widely scattered downward, (C) random scatter" to $0.95$, $-0.45$, $0.02$. Q1: $r = -0.84$ (exercise and heart rate) → strong negative. Q2: favourite colour and reaction time (MS-60: r cannot be found for a categorical variable).

## 3. Recalculation

- Work hours and exam mark: r = −0.8995554458, reported −0.90 (strong negative on the guide). Site value matches.
- Explorer: start r = 0.9857 (strong); with (2, 95), r = 0.5816 (moderate). The site's prompt calls the start "very strong" using the explorer's own 0.9 label (MS-60).
- Kiosk: r = 0.9949, strong positive.
- Screen time and sleep (invented, 8 students, b02): r = −0.9448.
- Café weekly customers (invented, b02, a curve): r = 0.9177, high although the form is clearly non-linear.
- Question 1 (invented): r = −0.9029, so −0.90.
- Site interpretations (0.72 moderate, −0.95 strong, −0.84 strong, matching 0.95, −0.45, 0.02) agree with the guide.

Every value above was recalculated with Python `statistics.correlation` and an exact SymPy formula (`work/brief-standard-bp/recalc.py`). All site values match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- Reading −0.95 as weak because it is negative (the size gives strength; the sign gives direction).
- Choosing the one-variable STAT setting and never seeing r; misaligned columns giving an r outside −1 to 1.
- "r = 0 means not related" (it may be curved).
- "r is high, so the pattern is linear": a curve can have r = 0.92 (the café). Look at the plot first.
- "r is high, so x causes y" (b03).
- Quoting r without the variable names or a strength word.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- A dial from −1 to 1 under the kiosk scatter; the needle settles at 0.99 as the points are entered; the scatter morphs live (points pulled onto a line, needle to 1; flipped, needle to −1; scrambled, needle to 0).
- A guide strip under the dial with three bands (weak, moderate, strong), mirrored for negative values, labelled "a guide".
- A coded, unbranded calculator screen stepping through: two-variable mode, a table of pairs filling row by row, the results screen with r lit (kiosk, then the work-hours data, −0.8995... → −0.90).
- The two checks as stamps: "between −1 and 1" and "sign matches the plot".
- Outlier: the explorer's ten points, one dragged from 45 to 95; the needle swings from 0.99 to 0.58.
- Curve: the café customers' curve with r = 0.92 and a bent guide; "r measures straight-line fit only".
- Final frame: the calculator results screen for the kiosk with r lit and two more lines, A and B, still dim: "what are A and B?" (b06's opening).

Advanced reuse (visual parts only): `TargetDial` (finance-parts.tsx) as the r dial; `StudioToolPanel` (integration-parts.tsx) as the calculator; `ParameterSlider`, `LiveReadoutBoard` (readouts.tsx). Plates: `ma12-calculator-v1.png` (check for a brand mark before use; coded screen overlaid); `ms12-beach-kiosk-v1.png`. Kit needs: ScatterBoard r dial; StudioToolPanel STAT-mode option (table entry and results screen).

## 6. Two original candidate practice questions

### Question 1

Six students recorded their daily phone screen time and their sleep the following night.

| Screen time (h) | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| Sleep (h) | 8.9 | 8.1 | 8.4 | 7.2 | 7.6 | 6.8 |

(a) Use your calculator to find Pearson's correlation coefficient, correct to two decimal places. (b) Describe the strength and direction of the relationship in context.

**Worked answer:** (a) r = −0.90 (−0.9029...). (b) A strong negative linear relationship: students with more screen time tended to sleep less.

### Question 2

(a) Match each description to one of r = 0.62, r = −0.97, r = 0.05: P, points fall steeply and lie almost on a straight line; Q, points rise with noticeable scatter around a line; R, points form a U shape. (b) A student says that because r = 0.05 for R, the two variables are not related. Explain why this is not correct.

**Worked answer:** (a) P: −0.97; Q: 0.62; R: 0.05. (b) r only measures how well the points fit a straight line; a U shape is a clear relationship that is not linear, so r is near 0 even though the variables are related.

Only the question (and the table) goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1 (b): "weak, because r is negative", crossed, "size gives strength, sign gives direction"; for Question 2 (b): "r = 0.05, so no relationship", crossed, "no straight-line relationship").

## 7. Everyday anchors

- **The beach kiosk:** r = 0.99 on a dial (the strand's dataset).
- **Phone screen time and sleep:** a strong negative r (the site's own `we-2` context; Question 1's numbers invented).
- **Part-time work and exam marks:** the site's eight students, r = −0.90, with the calculator walkthrough (school and work; site data).

Also: the café's curve (r = 0.92 but curved) for the limit. Repeat check (grepped 19 November 2026): no Advanced design uses a correlation coefficient. Claude picks; none is required. Objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`, section 10: MS-60 (three strength scales; an r for a categorical variable; "HSC uses two thresholds" is unsupported).

Decisions for Claude:

- **One guide scale** on screen (0.8 and 0.5 boundaries), always labelled "a guide"; never claim an official HSC scale.
- **Unbranded calculator:** show the three things to find (two-variable mode, data table, results screen), not one model's keys; say "menus differ" once. The site names one model; the video does not.
- **Calculate then interpret:** the point says "calculate and interpret", so every r on screen comes from entered data at least once (kiosk, work hours), not only handed over.
- **Pace: fits.** About 7 to 8 minutes.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
