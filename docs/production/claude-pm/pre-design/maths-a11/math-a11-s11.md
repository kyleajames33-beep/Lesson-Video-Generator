# math-a11-s11: How do histograms and polygons show the mode and median?

Brief 243 research pack, 17 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci10643b1a` (Data): Graph the frequency, relative frequency, and cumulative frequency histograms and polygons of datasets, using spreadsheets or graphing applications, and identify the mode and median from the graphs, and from tables [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa829162c5). Site coverage: partial. Gap: PD07 teaches histograms with frequency density plus box plots and stem-and-leaf plots (not 2024 Year 11). Relative and cumulative frequency histograms and polygons, and reading the mode and median from them, are not taught together.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-s10: frequency, relative frequency and cumulative columns in a table or spreadsheet.

**Prior video:** math-a11-s10.

**Start:** s10's finished spinner table, turned into bars.

**Stop:** Graph frequency, relative frequency and cumulative frequency histograms and polygons of datasets with a spreadsheet or graphing application, for single values and for grouped data; identify the mode (tallest bar or modal class) and the median (the value at half the total on the cumulative graph or column) from the graphs and from tables. Box plots, quartiles and frequency density are not in this boundary.

**Next:** math-a11-p01 (optional mixed practice), then Year 12 (math-a12-d01). The Year 12 statistics strand picks up from here.

**Year 12 dependency:** Year 12 s01 builds bar graphs of distributions from relative frequencies (Years 7 to 10 graphs are its stated entry), and Year 12 s04 uses a reaction-time histogram and a cumulative function that "never decreases, from 0 to 1". Deliver: relative frequency histograms (bar heights adding to 1), the cumulative relative frequency polygon rising from 0 to 1, and the median read where it reaches one half.

**Spoken maths:** "modal class"; "the median is where the cumulative frequency reaches half the total"; decimals as "zero point five".

## 2. Site order, sections and worked examples

No site lesson teaches this point together (crosswalk: partial). Sources are lesson15's tables and lesson07's polygon and ogive cards.

Read-only source: [probability-and-data/lesson15.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/probability-and-data/lesson15.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `29ad8f2a702a9afc03cee2333de3b998523b222f8688ad89182988b8fbb8bd1c`. Lesson id maths-adv-y11-m5-l15. Data-step ids as in s10.

### Source probability-and-data/lesson15.sa.html, `we-1` and `we-3` (data reused)

The spinner: values 1, 2, 3 with frequencies 10, 18, 12 (40 spins); cumulative 10, 28, 40; cumulative relative 0.25, 0.70, 1.00. Q1's spinner: values 1, 2, 3, 4 with frequencies 12, 15, 8, 15 (50 spins); cumulative 12, 27, 35, 50.

Read-only source: [probability-and-data/lesson07.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/probability-and-data/lesson07.sa.html), SHA256 `09d70eeb94e12cc97da00442fdbbd2abc8e87d1d67b17bb5ae8f29be1e547508`. Title: Representing Data. Lesson id maths-adv-y12-m5-l07. Data-step ids: `orient`, `histograms-and-frequency-density`, `model`, `box-plots`, `apply`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source probability-and-data/lesson07.sa.html, card 04 (frequency polygon) and card 05 (ogive)

Card 04: "Frequency polygon: A line graph connecting the midpoints of each class at their frequency (or frequency density). Extend the first and last points to the axis at the midpoints of the adjacent empty classes so the polygon closes." Card 05: example table "Score 0–20, 20–40, 40–60, 60–80, 80–100; Frequency 3, 8, 15, 18, 6; Cumulative 3, 11, 26, 44, 50 ... find $\frac{50}{2} = 25$ on the vertical axis, read across to the curve, then down to get the median."

Lesson07's worked examples (five-number summaries, stem-and-leaf, frequency density) are not 2024 Year 11 content and are not used; three of its answers are wrong (S11-P03 to S11-P05).

## 3. Recalculation

- lesson15 spinner (40): mode 2 (frequency 18); the 20th and 21st results are both 2, so the median is 2.
- lesson15 Q1 spinner (50): two modes, 2 and 4 (frequency 15 each); the 25th and 26th results are both 2, so the median is 2. A useful surprise: a dataset can have two modes.
- lesson07 card 05: cumulative 3, 11, 26, 44, 50; reading 25 on a cumulative frequency polygon drawn through the upper class boundaries gives 40 + (14/15)(20) = 176/3, about 58.7. The median class is 40 to 60.
- lesson07 Q2 (a frequency density question, not used): median about 26.1. Drill 3: median class 30 to 40.
- Practice answers below.

Every example above was recalculated with SymPy (`work/brief243-gs/verify_s.py`, run with `python -I`, sympy 1.14.0). The lesson15 and card 05 values match; lesson07's box-plot answers have three errors (section 8). Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Reading the mode as the largest value, or as the largest frequency instead of the value that has it.
- Reading the median as the middle row of the table instead of the middle result.
- Plotting a cumulative polygon at class midpoints (it uses upper class boundaries) or a frequency polygon at boundaries (it uses midpoints).
- Thinking a relative frequency histogram has a different shape from the frequency histogram (same shape, different vertical scale).
- Gaps between the bars of a histogram of measured data.

These follow from the official content, not claims about how often markers see them.

## 5. Visual needs

- One dataset, four graphs, one at a time, on the same horizontal axis:
  - a frequency histogram;
  - the same bars relabelled as relative frequency (only the vertical scale changes);
  - the frequency polygon through the bar tops' midpoints;
  - a cumulative frequency histogram with its polygon rising to the total.
- Mode: the tallest bar lights (two bars for the two-mode spinner). Median: a horizontal line at half the total meets the cumulative polygon, then drops to the axis.
- A spreadsheet chart panel (the syllabus says "using spreadsheets or graphing applications"), coded and unbranded.
- Grouped data with the modal class and a median reading on the cumulative polygon.

HSC-style graphs: letters, numbers and axis labels only. All graphs coded in the shared paper style, one coordinate transform per graph. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs: `../../checks/maths-a11-kit-needs-g-s.md`.

## 6. Two original candidate practice questions

### Question 1

The numbers of items in 30 baskets at an express checkout were: 1 item (3 baskets), 2 items (9), 3 items (5), 4 items (6), 5 items (4) and 6 items (3). Draw a frequency histogram and a cumulative frequency polygon, and find the mode and the median.

**Worked answer:** Mode 2 (frequency 9). Cumulative 3, 12, 17, 23, 27, 30. The 15th and 16th baskets are both in the "3 items" group, so the median is 3. Crossed mistake: median 3.5 (the middle of the values 1 to 6).

### Question 2

The waiting times at a theme-park ride were grouped as 0–10, 10–20, 20–30, 30–40 and 40–50 minutes, with frequencies 6, 14, 20, 7 and 3. State the modal class and use a cumulative frequency polygon to estimate the median.

**Worked answer:** Modal class 20–30 minutes. Cumulative 6, 20, 40, 47, 50 at the upper boundaries 10, 20, 30, 40, 50. Half of 50 is 25, between 20 (at 20 min) and 40 (at 30 min): 20 + (5/20)(10) = 22.5 minutes. Crossed mistake: median class 30–40 (reading 25 from the frequency column).

Only the question goes on the card. Hide the answer and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- Waiting times at a theme-park ride, grouped into 10-minute classes (leisure; matches question 2).
- Daily phone screen time in a class, from a phone's weekly report: a grouped histogram and its cumulative polygon (phones).
- Items per basket at an express checkout (shopping; matches question 1).

Varied everyday contexts (money, phones, sport, travel, food, games, home, shopping, music). None repeats an anchor in the Year 12 Maths designs (Year 12 s04's sprinters' reaction times and s07's drink-bottle machine were avoided), the Year 11 w, c and e designs, the w, c and e pack suggestions, or another g or s pack (grepped, 17 November 2026). Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`, section 8. Resolve logged items before reusing site copy; the site stays read only.

- **S11-P03** (logged): lesson07 we-1 gives Q3 = (78 + 82)/2 = 80; the upper half's median is (82 + 85)/2 = 83.5.
- **S11-P04** (logged): lesson07 Q1's model answer gives Q1 = 162.5 and Q3 = 177.5; they are 161 and 176.5.
- **S11-P05** (logged): lesson07 drill 5's answer starts "Yes" and then says 5 is not an outlier.

Decisions for Claude:

- `ci10643b1a` is partial: the combined teaching (frequency, relative and cumulative histograms and polygons, mode and median from graphs and tables) is original.
- Use lesson15's data for single values and lesson07's card 05 table for grouped data. Do not use lesson07's box plots, stem-and-leaf plots or frequency density (not 2024 Year 11; already noted in section 4 of the corrections file).
- Median from a cumulative polygon is an estimate for grouped data; say "estimate".

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
