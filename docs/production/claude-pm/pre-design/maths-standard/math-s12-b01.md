# math-s12-b01: When do we need bivariate data, and which variable is independent?

Maths Standard research pack (Year 12, Bivariate data analysis), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Bivariate data analysis, Bivariate datasets):

- `ci91fdb0d7`: Distinguish between situations involving one-variable data and bivariate data and explain when each is needed [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fadb5e412c). Site coverage: recorded as covered; in practice the site never contrasts one-variable data with bivariate data (MS-61).
- `cibbeaeac3`: Identify the independent and dependent variables within a bivariate dataset where appropriate [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fadb5e412c). Site coverage: covered.

Standard 1 (Year 12, Bivariate data analysis, Bivariate datasets):

- `cif80a9d87`: Distinguish between situations involving one-variable data and bivariate data and explain when each is needed [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/faf283a852). Same note as `ci91fdb0d7`.
- `ci2a5afecd`: Identify the independent and dependent variables within a bivariate dataset where appropriate [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/faf283a852). Covered (Standard 2 lesson).

These are CMS codenames, not published content-point codes. The wording is identical for both courses.

**Course:** Standard 1 and Standard 2. Playlist order 62 (the outline's number; rulings 46 and 58 moved only r and t). First video of the strand for both courses.

**Entry knowledge (outline dependency list):** math-s11-d05: `cic8a0b6e9` (numerical and categorical variables). Also math-s11-d06 to d16 (one-variable displays and measures: dot plot, histogram, box plot, mean, median), named in a grey chip as "the Year 11 tools for one variable", and math-s11-l01 `ci94641a48` (reading a point on a graph).

**Prior video:** math-s12-t11 (Standard 2); math-s12-t05 (Standard 1).

**Start:** t11's final frame exactly (ruling 64; `../../lessons/math-s12-t11.md` scene 12, Revision 2): the kiosk plate `ms12-beach-kiosk-v1.png` at the left; a coded chalk-style board with the column headings "top temperature (°C)" and "ice creams sold", five empty ruled rows, no title, no values; the chip "hotter day, more ice creams?"; the grey chip "Trigonometry: done"; the label "Next: bivariate data"; chips "Next" and "?"; the group scaled uniformly by 1.3 and centred. Standard 1 viewers arrive from t05's right panel (`../../lessons/math-s12-t05.md` scene 12), the same board with "Right-angled triangles: done" and "Standard 1 next: bivariate data". On the first sentence the grey chip, the label and "Next" fade, so both arrivals look the same within a second. **This pack confirms the board as b01's opening picture (ruling 59).**

**Stop:** One-variable data (one measurement per day, such as the ice creams sold, studied on its own with the Year 11 tools) against bivariate data (two measurements on each day, kept together as a pair); when each is needed (a question about one quantity's typical value or spread needs one variable; a question about whether two quantities go together needs pairs); the independent variable (the one that may explain or predict the other, on the horizontal axis) and the dependent variable (the response, on the vertical axis); "where appropriate": when neither variable obviously drives the other, choose by what is being predicted (site `we-2`); one pair as one point (x, y), read back in words with units. Not taught: plotting the whole set and describing its shape (b02).

**Next:** math-s12-b02.

## 2. Site order, sections and worked examples

Read-only source: [bivariate-data-analysis/lesson04.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/bivariate-data-analysis/lesson04.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `e0f45f2c42a726eb6e800d9009a241fe57167702542e7e9ea58063cfa88cb665`. Sections used: `orient-bivariate-data` (card 02, key terms), `construct-scatterplots` (card 05, quick check), `interpret-points-context` (card 07), `work-scatterplot-examples` (`we-1` to `we-3`), `apply-bivariate-foundations` (activity), `answer-bivariate-questions` (Q1). The page is labelled "Module 5 · L01 of 8" (MS-69).

### Source lesson04, card 02, key terms and card 05

Card 02: "Bivariate data pairs two measurements on each individual, for example (hours studied, exam score) for each student." "Independent on x: The variable you choose or that predicts the other (e.g. hours studied) goes on the horizontal axis." "Dependent on y: The variable that responds (e.g. exam score) goes on the vertical axis." "One point = one case: If a student studied 4 hours and scored 72, that student is the point (4, 72)." Key term: "Independent variable: The variable chosen as a predictor or explanatory variable, usually shown on the x-axis. The order of measurement alone does not determine its role." Card 05: "Example: A researcher measures daily temperature (°C) and ice-cream sales (units) for 30 days. Temperature is the independent variable (x-axis) because sales may depend on temperature." Tip: "Ask 'which variable could predict the other?' That one is usually the independent variable on x." Quick check: hours of sleep (x) and reaction time (y): "B, Reaction time, because it is the response that may depend on sleep."

### Source lesson04, card 07 and the worked examples

Card 07: "On a temperature vs sales plot, (28, 350) means 'on a day that reached 28°C, 350 ice-creams were sold.'" `we-2`: "Imagine a study that measures shoe size and reading speed for 30 children. If we want to predict reading speed from shoe size, which variable should go on each axis?" ("When no clear causal direction exists, choose based on what you want to predict."; "Age is a possible third variable to investigate"). `we-3`: "A scatterplot shows daily rainfall (mm) on x and umbrella sales on y. What does the point (15, 42) represent?" ("a day when 15 mm of rain fell and 42 umbrellas were sold"; "Each point = one day's data. 30 points = data from 30 different days.").

### Source lesson04, activity and Q1

Activity: "A café records daily maximum temperature (°C) and cups of hot coffee sold over 6 days: Temp (°C) 12, 15, 18, 22, 25, 28; Coffee sold 95, 88, 74, 60, 52, 38." Answers: "(1) Temperature is the chosen explanatory variable (x) ... (4) The point (22, 60) represents a day when the temperature reached 22°C and 60 cups of coffee were sold." Q1: "A physiotherapist records sessions attended (x) and pain score out of 10 (y) for 8 patients. (a) Which variable goes on the x-axis? Justify. (b) Describe what the point (6, 2) represents."

### The kiosk board's numbers

The five rows come from the site's own temperature and ice-cream data, `bivariate-data-analysis/lesson08.sa.html`, activity: "daily temperature °C (x): 18, 22, 25, 28, 32 and ice-cream sales (y): 40, 60, 75, 90, 120" (SHA256 `7707be28d68f12da65dbf15206e29b9058bb91662bd8ca6d626f53f7e51c30a1`). Using them here lets one dataset run from b01 to b07 (the mean point, the site's line y = 6x − 73 and its predictions all come from it).

## 3. Recalculation

- Kiosk rows: (18, 40), (22, 60), (25, 75), (28, 90), (32, 120); 5 days, 5 points. Mean temperature 25°C, mean ice creams 77 (used later, b04).
- One-variable view of the same board: the ice creams alone, 40 to 120, mean 77, median 75. These answer "how many does it usually sell?" but not "do hotter days sell more?".
- Site points: (4, 72), (28, 350), (15, 42), (22, 60), (6, 2) read as stated.
- Café: 6 days, temperatures 12 to 28°C, coffee 95 to 38 cups (b02 plots it).
- Question 1 and Question 2: no arithmetic beyond reading pairs.

Values checked with Python `statistics` and SymPy 1.14.0 (`work/brief-standard-bp/recalc.py`, output `recalc-output.txt`). All site values match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- Thinking "two columns of numbers" is always bivariate: two separate lists (Monday's sales at two shops on different days) are not paired.
- Putting the variable measured first, or the one in the left column, on the x-axis, instead of the one that may explain or predict the other (the site's key term: "The order of measurement alone does not determine its role").
- Saying the independent variable "causes" the dependent one. Choosing temperature as independent is a decision about prediction, not a proof of cause (b03).
- Reading a point without units or context ("x is 28, y is 350").
- Forcing a direction where none is natural (shoe size and reading speed): choose by what is being predicted, and say so.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- The kiosk board fills row by row (chalk numbers written on), each row clicking together as a pair ("one day, two measurements").
- Split: the ice-cream column slides off alone onto a dot plot (one variable: "how many usually?", mean 77) against the two columns sliding together onto empty axes (two variables: "hotter, more?").
- A sorting rack: four situation cards drop into "one variable" or "two variables, paired" bins.
- The x and y labels as two tags that swap places: the "may explain or predict" tag snaps to the horizontal axis.
- One row lifts off the board and lands as a point, with a reading tag "28°C, 90 ice creams" (and the site's (28, 350) style sentence).
- Final frame: the full board beside empty axes, the first point dropping in, "what shape do the five days make?" (b02's opening).

Advanced reuse (visual parts only): none for scatter plots (no Advanced video teaches them). `OutcomeSort` (prob-parts.tsx) as the sorting rack; `StudioPlot` (plot-core.tsx) for axes; a dot plot from `ClassHistogram` with `drop` (dist-parts.tsx) for the one-variable view. Plates: `ms12-beach-kiosk-v1.png` (briefed in t05; painted one video early by ruling 17, appearance not yet checked). Kit need: ScatterBoard (rows lifting into points; see the kit-needs file).

## 6. Two original candidate practice questions

### Question 1

For each situation, decide whether the data are one-variable or bivariate, and give a reason. (a) A school canteen records the number of sausage rolls sold each day for a term, to plan how many to order. (b) The canteen records each day's top temperature and the number of cold drinks sold, to see whether hot days sell more drinks. (c) A rideshare company records the waiting time of every booking last Saturday.

**Worked answer:** (a) One-variable: one measurement per day, and the question is about a typical amount. (b) Bivariate: two measurements on each day, kept in pairs, and the question is whether they go together. (c) One-variable: one measurement per booking.

### Question 2

A rideshare app records, for each of ten trips, the distance travelled (km) and the fare charged ($). (a) Which is the independent variable? Justify your answer. (b) One trip is plotted at (8, 21). What does this point represent?

**Worked answer:** (a) Distance, because the fare is calculated from (depends on) the distance, so distance is used to predict the fare; it goes on the horizontal axis. (b) A trip of 8 km that cost $21.

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1 (c): "bivariate: there are lots of numbers", crossed, "one measurement per booking"; for Question 2 (a): "fare, because it is in the first column", crossed, "the one that predicts goes on x").

## 7. Everyday anchors

- **The beach kiosk board:** top temperature and ice creams sold on five days (the site's own numbers; work and food; carries the whole strand, ruling 59).
- **A school canteen:** sausage rolls sold per day (one variable, for ordering) against top temperature and cold drinks (two variables) (school life; Question 1).
- **A rideshare trip:** distance and fare as a natural independent and dependent pair (travel; Question 2).

Varied everyday contexts (food and work, school, travel). Repeat check (grepped 19 November 2026 in `docs/production/claude-pm/lessons/` and the Standard packs): "kiosk" appears only in t05 and t11 as this video's opening; "canteen" and "rideshare" have no hits; Advanced a11-s02 uses an ice-cream shop's two-scoop cones for a Venn diagram (a different object and idea; the kiosk board is not reused from it). Claude picks; none is required. Objects, never people. All invented numbers are labelled; the kiosk's numbers are the site's.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`, section 10: MS-61 (no contrast between one-variable and bivariate data) and MS-69 (page numbering).

Decisions for Claude:

- **Confirm the kiosk board (ruling 59):** b01 opens on t11's frame exactly and fills the five rows with the site's lesson08 numbers. If accepted, t05's right panel and t11's final frame stand as designed.
- **One-variable against bivariate is original teaching** from the syllabus (the site is silent): use the same board both ways so the contrast is one picture.
- **"Where appropriate":** keep the site's shoe size and reading speed (`we-2`) in one sentence; age as a third variable is b03's idea and can be a grey chip.
- **Pace: fits.** Two ideas and a point reading; about 6 to 7 minutes.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
