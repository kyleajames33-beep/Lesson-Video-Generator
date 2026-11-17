# Maths A11 S11: How do histograms and polygons show the mode and median? Frequency and relative frequency histograms, the frequency polygon, cumulative histograms and polygons, and the mode and median from graphs and tables, for single values and grouped data (design)

Status: Revision 1 (17 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`) and the accepted Year 11 designs (`math-a11-e08.md`, `c10.md`, `w14.md`; rulings in `../checks/root-acceptance-maths-a11-w01-w14.md`, `-w15-w31.md`, `../checks/root-rulings-maths-a11-c-e-packs.md` and `../checks/root-rulings-maths-a11-t-g-s-packs.md`). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,377 characters by script (see "Narration length estimate"), 14 scene headings, about 490 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: ninetieth video of Year 11 Mathematics Advanced (2024), outline order 90, Probability and data (Data); the last core video of Year 11 (outline orders 91 to 93 are optional mixed practice, not yet designed). Pre-design pack: `../pre-design/maths-a11/math-a11-s11.md` (brief 243). Site sources (read through the pack's quotations, read only; crosswalk partial): `probability-and-data/lesson15.sa.html` (the spinner data 10, 18, 12) and `lesson07.sa.html` (card 04's frequency polygon closing to the axis; card 05's grouped table 3, 8, 15, 18, 6 and its median by reading across from 25, used in attempt 2). Route entry: `math-a11-s11` in `../../programme/maths-a11-route-inputs-5.json`. Visual system: maths studio kit; the reused spinner and s10's spreadsheet (s10's final frame), a painted theme-park ride queue; every histogram, polygon and table coded, HSC style (axis labels, letters and numbers only).

Owner rules applied: as s02 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (leisure: waiting times at a theme-park ride), Australian spelling, no em dashes, "zero point" decimals, conversational narration).

Syllabus content point (Mathematics Advanced 11-12 (2024), Year 11, Probability and data, Data), quoted from `../../programme/maths-a11-route-inputs-5.json`:

- `ci10643b1a`: "Graph the frequency, relative frequency, and cumulative frequency histograms and polygons of datasets, using spreadsheets or graphing applications, and identify the mode and median from the graphs, and from tables"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa829162c5

**Boundary:** starts from s10's final frame exactly (the finished spreadsheet: values 1, 2, 3; frequency 10, 18, 12; relative 0.25, 0.45, 0.30; cumulative 10, 28, 40; cumulative relative 0.25, 0.70, 1.00; three blue bars of heights 10, 18 and 12 standing on an axis "value" 0 to 4, "frequency" 0 to 20; chips "most common value?", "middle result?", "Next: histograms and polygons", "?"). Recalls s10 (the five columns, the spreadsheet) and s09 (discrete and continuous) in a phrase or grey chip each. Teaches, all in a spreadsheet's chart panel: the frequency histogram for single values and the mode as the value with the tallest bar; the relative frequency histogram (same shape, new scale, heights adding to 1); the frequency polygon through the bar tops, closed to the axis; the cumulative frequency histogram and the median as the value where the running total first reaches half the total, from the graph and from the table; grouped data (the ride waits): a histogram with touching bars, the modal class, the cumulative frequency polygon plotted at upper class boundaries, and the median estimated by reading across from half the total; the cumulative relative frequency polygon rising from 0 to 1 with the median at 0.5 (`ci10643b1a`). Stops at the mode and median. Not taught: box plots, quartiles, frequency density and stem-and-leaf plots (not in this boundary; site lesson07's box-plot answers have three errors, S11-P03 to S11-P05, and are not used); the mean from a table.

## Decisions

- **Anchor: waiting times at a theme-park ride (painted plate, live), after the spinner carried in from s10.** A queue's waiting time is a measured, continuous quantity that only makes sense grouped into classes, so the ride carries the second half of the lesson (touching bars, the modal class, upper boundaries, an estimated median); "how long will I wait?" is an everyday question whose middle answer is the median. Leisure; the pack's anchor 1, with its question 2 data as the worked example. Year 12 f04 uses a theme park's yearly visitors in a series problem, a different idea; no design uses ride waits (grep 17 Nov 2026). The opening is the spinner table, fixed by s10's handoff and the route's start boundary.
- **The final frame closes Year 11 (task requirement).** Scene 13 is the last core frame of the course. It points to the Year 12 Maths Advanced playlist and states only what Year 12 videos already do (Year 12 s01 builds probability distributions from relative frequencies; Year 12 s04 uses a cumulative curve that rises from 0 to 1; both are published, `bunny/ledger.csv`). It does not mention the optional practice videos p01 to p03, which are not designed.
- **Spreadsheets or graphing applications (syllabus).** Every graph is drawn in a coded, unbranded spreadsheet chart panel (`ScreenApp`) beside its table, with a "chart type" switch that changes histogram to polygon to cumulative. The narration says "In a spreadsheet".
- **Median from a cumulative histogram for single values; from a cumulative polygon for grouped data.** For whole-number values the cumulative histogram's steps show the median exactly (the first value whose running total reaches half); for grouped data the polygon through the upper class boundaries gives an estimate. This keeps each reading honest.
- **Simulations (standard item 3).**
  1. **Chart switch** (scenes 2 to 5): one spreadsheet chart panel switches type on cue; the bars morph into the polygon (tops become points, bars fade), then into running-total steps.
  2. **Queue clock** (scene 6): the ride's coded wait board ticks through 50 recorded waits; each wait drops as a dot into its 10-minute class, stacking into the histogram (`HeatsToHistogram`-style).
  3. **Median reader** (scenes 5, 6, 7): `QuantileReader` slides a horizontal line from 0 up to half the total, meets the cumulative graph, and drops to the axis with a live readout.
- **Colour roles (fixed for the data videos, as s10).** Frequency **blue**; relative frequency **teal**; cumulative frequency **violet**; cumulative relative frequency **amber**; the mode and median markers green when they are answers; mistake red.
- **Large type, handwritten voice.** Hand tags: "tallest bar", "the value, not the count", "same shape, new scale", "heights add to 1", "join the tops", "close to the axis", "half the total: 20", "first reaches 20", "bars touch: measured", "modal class", "plot at the upper boundary", "an estimate", "half of 1: 0.5".
- **Stage changes (standard item 2).** The table and bars (1); the frequency histogram and mode (2); the relative scale (3); the polygon (4); cumulative steps and the median (5); the ride, its histogram and modal class (6); the cumulative polygon and median estimate (7); framed card (8); question cards (9 to 12); the Year 12 frame (13); key notes (14).
- **Worked examples (g01 layout).** 2 to 5: the spinner (mode 2; median 2, from the 20th and 21st results). 6 and 7: the ride waits (pack question 2's data: 6, 14, 20, 7, 3; modal class 20 to 30 min; median ≈ 22.5 min). Crossed slips: "mode = 18" (2), "median = 20" (5), "plot at the class midpoints" (7).
- **Memory aid.** Framed card: "Mode: the value under the tallest bar. Median: go across from half the total on the cumulative graph, then down." Second line: "Grouped data: modal class, and the median is an estimate."
- **Visual surprise.** The chart switch: the same three bars become a relative histogram without changing shape, then a polygon, then a staircase that climbs to 40, all in one panel.
- **Site notes (pack section 8).** S11-P03, S11-P04 and S11-P05 (wrong quartiles and a self-contradicting drill answer in lesson07) are box-plot material and are not used (root ruling 13: if quartiles were used, the corrected values would apply; none are). Lesson07's frequency density and stem-and-leaf plots are not 2024 Year 11 content.
- **Plain meanings at first use.** Histogram ("a column graph of frequencies, with the bars side by side"); polygon ("a line joining points"); mode ("the most frequent value"); modal class ("the class with the highest frequency"); median ("the middle result when all results are in order"); upper class boundary ("the top edge of a class").
- **Attempts (pack questions).** A1: express checkout baskets, 1 to 6 items with frequencies 3, 9, 5, 6, 4, 3 (30): mode 2, median 3; crossed "median 3.5". A2: the site's card 05 table (scores 0 to 100 in classes of 20, frequencies 3, 8, 15, 18, 6; 50 quiz scores): modal class 60 to 80, median ≈ 58.7; crossed "median class 60 to 80" (the tallest bar). The pack's question 2 data became the worked example, so card 05 (the pack's grouped source) is the second attempt.
- **Mistake scene:** none separate. The mode read as the frequency (2 crossed); the median read as the count at half (5 crossed); cumulative points at midpoints (7 crossed); gaps between bars for measured data (6 tag); the relative histogram thought to change shape (3 tag); the median read as the middle of the value range (A1 crossed); the median class taken as the modal class (A2 crossed).
- **Cause chain taught, in order:** (1) bars make the most frequent value visible, and the mode is the value, not its count (2); (2) dividing every height by the same total changes only the scale (3); (3) joining the tops shows the shape as one line (4); (4) a running total climbs to the total, so the middle result sits where it first reaches half (5); (5) measured data fill an interval, so classes touch and only the modal class can be named (6); (6) a running total is complete only at the top of each class, so the polygon is plotted at upper boundaries, and the median read between them is an estimate (7); (7) dividing by the total turns the climb into 0 to 1, with the median at 0.5 (7).
- **Entry knowledge (route):** s10 (frequency, relative frequency and cumulative columns).
- **What Year 12 relies on.** Year 12 s01 builds bar graphs of distributions from relative frequencies; Year 12 s04 uses a reaction-time histogram (bars touching, classes of 0.1 s) and a cumulative function that "never decreases, from 0 to 1"; Year 12 s06 reads the median at F = 0.5. Scene 3 delivers the relative frequency histogram (heights adding to 1); scene 7 delivers the cumulative relative frequency polygon rising from 0 to 1 with the median at 0.5.
- **Handoff (end of the Year 11 core course; points to Year 12).** Scene 13: the ride's cumulative relative frequency polygon (amber, 0 to 1) with the dashed median line at 0.5 dropping to "≈ 22.5 min", beside the spinner's relative frequency histogram (teal, small); the ride plate at 240 px; chips "Year 11 Maths Advanced: complete", "Year 12: relative frequencies become probability distributions", "Year 12: the 0 to 1 curve returns", "Next: the Year 12 Maths Advanced playlist". No "?" chip (nothing is promised beyond the playlist).
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Spinner: 40 results in increasing order: positions 1 to 10 are 1, 11 to 28 are 2, 29 to 40 are 3; the 20th and 21st are both 2, so the median is 2. Cumulative relative 0.25, 0.70, 1.
  (b) Frequency polygon for single values: points (1, 10), (2, 18), (3, 12), closed at (0, 0) and (4, 0).
  (c) Waits: classes 0 to 10, ..., 40 to 50 min; frequencies 6, 14, 20, 7, 3 (50); cumulative 6, 20, 40, 47, 50 at 10, 20, 30, 40, 50, starting at (0, 0); median at 25: 20 + (25 − 20)/(40 − 20) × 10 = 22.5 min. Cumulative relative 0.12, 0.40, 0.80, 0.94, 1; 0.5 also gives 22.5. Modal class 20 to 30 (frequency 20). "Bars touch" because time is continuous; a wait of exactly 10 minutes counts in the 10 to 20 class (lower boundary included), stated nowhere in narration.
  (d) A1: 3, 9, 5, 6, 4, 3; cumulative 3, 12, 17, 23, 27, 30; the 15th and 16th are both 3. A2: cumulative 3, 11, 26, 44, 50 at 20, 40, 60, 80, 100; median at 25: 40 + (25 − 11)/(26 − 11) × 20 = 40 + 14/15 × 20 = 176/3 ≈ 58.7; median class 40 to 60; modal class 60 to 80.
  (e) Pronunciations: "modal class"; "twenty to thirty minutes"; "about twenty-two point five minutes"; "zero point five".

Main question: *How do histograms and polygons show the mode and median? What's the most common spin, and how long is the middle wait at a ride?*
Entry knowledge (s10): the five-column table and spreadsheet.
Stops after: frequency, relative frequency and cumulative histograms and polygons, with the mode and median from graphs and tables, for single values and grouped data. No box plots, quartiles or frequency density.
Handoff: the Year 12 Maths Advanced playlist (relative frequencies become probability distributions; the 0 to 1 cumulative curve returns).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): frequency blue, relative frequency teal, cumulative frequency violet, cumulative relative frequency amber, answers green, mistake red. Header strip "MATHEMATICS ADVANCED · PROBABILITY AND DATA". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: the table becomes bars
> Here's the spinner's table from last time, and its frequencies standing up as bars. One came up ten times, two came up eighteen times, and three twelve times. Two questions. What's the most common result? And if you lined up all forty results in order, what would sit in the middle? A table holds the answers, but a graph lets you see them. So how do histograms and polygons show the mode and **median**?

Visual: opens on s10's final frame exactly (the spreadsheet, 900 px, at the left; three blue bars at heights 10, 18, 12 on the axis "value" 0 to 4, "frequency" 0 to 20; chips "most common value?", "middle result?", "Next: histograms and polygons", "?"). The "Next" chip fades. The spinner badge (200 px) appears at the top left. On "most common" the tallest bar glows faintly; on "in the middle" a row of 40 small tokens lines up under the axis in increasing order (10 ones, 18 twos, 12 threes), the middle pair blinking. On "median" heading "Histograms, polygons, mode and median" writes on, and the question chips move to the top right.

### 2. the frequency histogram and the mode
> In a spreadsheet, select the value and frequency columns, and insert a column chart. That's a frequency histogram, with a bar for each value, centred on it, and its height is the frequency. The mode is the most frequent value, so it's the value under the tallest bar. Here, that's two. The mode is the value, **two**, not its frequency, eighteen. Writing the mode as eighteen is the **slip**. A dataset can even have two modes, if two bars tie for tallest.

Visual: stage change: `ScreenApp` spreadsheet with the table at the left and a chart panel at the right (1,100 × 640 px), chart type "column". The two columns highlight, then the histogram draws: bars centred on 1, 2, 3 (blue), axis labels "value" and "frequency". Tag "tallest bar" at the bar for 2. On "two" a green marker "mode = 2" drops onto the x axis under the bar, tag "the value, not the count". On "slip" a red slip "mode = 18" writes and is crossed. On the last sentence a grey ghost of a second equal bar flashes beside it, chip "two modes possible".

### 3. relative frequency
> Now switch the heights to the relative frequency column. Zero point two five, zero point four **five**, and zero point three. The bars don't change shape at all. Every height was divided by the same forty, so only the scale on the side changes. And because the relative frequencies add to one, the heights of a relative frequency histogram always add to **one**. That's the graph that turns into a probability distribution later **on**.

Visual: same panel; the source switches to column C (teal). The y axis relabels "relative frequency" 0 to 0.5 while the bars keep their screen heights and change colour to teal; labels on the bars "0.25"; on "five" "0.45", then "0.30". Tag "same shape, new scale". On "one" a stacked strip beside the chart "0.25 + 0.45 + 0.30 = 1", tag "heights add to 1". On "on" grey chip "Year 12: probability distributions".

### 4. the frequency polygon
> A polygon shows the same data as a line. Put a point at the top of each bar, in the middle, and join the points. Then close it off by joining down to the axis, at the empty values on either side, zero and **four**. That's a frequency polygon. It's handy when you want to compare two sets of data on one graph, because two lines are easier to read than two sets of **bars**.

Visual: same panel, chart type switches to "line". Chart switch: a point appears at the middle of each bar top (blue), the bars fade to ghosts, and the points join; on "four" the line extends down to (0, 0) and (4, 0), tag "close to the axis", tag "join the tops". On "bars" a second grey polygon (another 40 spins: 12, 16, 12) overlays briefly, labelled "another 40 spins", then fades.

### 5. cumulative frequency and the median
> Now the running totals. Plot the cumulative frequency column, and the bars climb like stairs, ten, twenty-eight, forty. That's a cumulative frequency histogram, and it always ends at the total. The median is the middle result. With forty results, the middle sits between the twentieth and the twenty-first. So draw a line across at half the total, **twenty**. The first bar to reach it is the bar for two, so the median is **two**. You can read it from the table too. The running total first reaches twenty at the value two. Writing the median as twenty is the **slip**. Twenty tells you where to look, not the answer.

Visual: same panel, chart type "cumulative column": the bars morph into steps 10, 28, 40 (violet), y axis "cumulative frequency" 0 to 40; tag "ends at the total". The 40 tokens from scene 1 line up under the axis, the 20th and 21st ringed. Median reader: on "twenty" a horizontal dashed line rises from 0 to 20, tag "half the total: 20"; it meets the bar for 2 first, and on "two" a green marker "median = 2" drops to the axis, tag "first reaches 20". The table's D column lights at value 2, "10 → 28 passes 20". On "slip" a red slip "median = 20" writes and is crossed, caption "20 is where to look".

### 6. grouped data: the ride
> Now something you measure, waiting times at a theme-park ride. Here are fifty waits, grouped into ten-minute classes. Six were under ten minutes, then fourteen, twenty, seven and three. Time is continuous, so the classes run straight into each other, and the bars **touch**. With grouped data, you can't name a single most common time, but you can name the class with the tallest bar, the modal class. Here, it's twenty to thirty **minutes**.

Visual: stage change: the ride queue plate (`ma11-ride-queue-v1.png`, 520 px) at the left with a coded wait board "wait: 23 min" ticking. Queue clock: 50 waits drop as dots into classes on an axis "waiting time (min)" 0 to 50 at the right, stacking into a histogram (blue) of heights 6, 14, 20, 7, 3; a table strip under the chart: classes "0-10, 10-20, 20-30, 30-40, 40-50" and frequencies. On "touch" tag "bars touch: measured"; grey chip "s09: time is continuous". On "minutes" the 20 to 30 bar glows and the green frame "modal class: 20 to 30 min", tag "modal class".

### 7. the median wait
> For the median, build the running totals, six, twenty, forty, forty-seven and fifty. Each running total is only complete at the top of its class, so plot it at the upper boundary, ten, twenty, thirty, forty and fifty minutes, starting from zero at zero. Join the points. That's a cumulative frequency polygon. Half of fifty is twenty-five. Go across from twenty-five to the polygon, then down. It lands at about twenty-two point five **minutes**. It's an estimate, because we don't know exactly where the waits sit inside each class. Plotting the points at the class middles is the **slip**. And if you divide by fifty, the polygon climbs from zero to one, and the median is where it reaches zero point **five**.

Visual: same stage; a cumulative column "6, 20, 40, 47, 50" (violet) joins the table strip. Points plot at (0, 0), (10, 6), (20, 20), (30, 40), (40, 47), (50, 50), tag "plot at the upper boundary"; the polygon joins them (violet). Median reader: a dashed line across from 25 meets the polygon between (20, 20) and (30, 40) and drops; on "minutes" the green frame "median ≈ 22.5 min", tag "an estimate"; grey row "20 + 5/20 × 10 = 22.5". On "slip" red ghost points at the class midpoints 5, 15, 25, ... appear and are crossed, caption "upper boundaries". The y axis then relabels "cumulative relative frequency" 0 to 1 (amber): the polygon keeps its shape; on "five" the dashed line moves to 0.5 and lands at the same 22.5, tag "half of 1: 0.5".

### 8. memory aid
> Here's the summary. The mode is the value under the tallest bar. For the median, go across from half the total on the cumulative graph, then down. With grouped data, you name the modal class, and the median is an **estimate**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: a small histogram with its tallest bar ringed, beside a small cumulative polygon with the across-and-down line. Main line, hand font 56 px: "Mode: the value under the tallest bar. Median: go across from half the total on the cumulative graph, then down." On "estimate" the key line, 40 px: "Grouped data: modal class, and the median is an estimate." Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. The numbers of items in thirty baskets at an express checkout were recorded. Three baskets had one item, nine had two, five had three, six had four, four had five, and three had six. Draw a frequency histogram and a cumulative frequency graph, and find the mode and the median. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "The numbers of items in 30 baskets at an express checkout were: 1 item (3 baskets), 2 items (9), 3 items (5), 4 items (6), 5 items (4) and 6 items (3). Draw a frequency histogram and a cumulative frequency graph, and find the mode and the median." The full question stays on screen. Picture slot: empty axes "items" 0 to 7 and "frequency" 0 to 10, no bars. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> The tallest bar is at two items, so the mode is **two**. The running totals are three, twelve, seventeen, twenty-three, twenty-seven and thirty. Half of thirty is fifteen, and the running total first reaches fifteen at three items. The fifteenth and sixteenth baskets both have three, so the median is **three**. Three and a half, the middle of one to six, is the slip.

Visual: the card shrinks to the top (30 px). Bars draw (blue) 3, 9, 5, 6, 4, 3; on "two" the green marker "mode = 2". A cumulative staircase (violet) 3, 12, 17, 23, 27, 30 draws beside it; the dashed line at 15 meets the bar for 3; on "three" the green marker "median = 3". On "the slip" a red slip "median = 3.5" writes and is crossed, caption "middle result, not middle value". Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. Fifty scores out of a hundred in an online quiz were grouped into classes of twenty: zero to twenty, twenty to forty, and so on. The frequencies were three, eight, fifteen, eighteen and six. State the modal class, and use a cumulative frequency polygon to estimate the median. Pause here to answer.

Visual: `QuestionCard`, 40 px: "Fifty scores out of 100 in an online quiz were grouped as 0-20, 20-40, 40-60, 60-80 and 80-100, with frequencies 3, 8, 15, 18 and 6. State the modal class and use a cumulative frequency polygon to estimate the median." Picture slot: empty axes "score" 0 to 100 and "cumulative frequency" 0 to 50. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 12. feedback 2 (brief)
> The tallest bar is sixty to eighty, so that's the modal class. The running totals are three, eleven, twenty-six, forty-four and fifty, plotted at twenty, forty, sixty, eighty and a **hundred**. Across from twenty-five, the polygon is just below sixty, at about fifty-eight point **seven**. Saying the median is in sixty to eighty is the slip. The tallest class isn't always the middle one.

Visual: the card shrinks to the top. A histogram (blue) 3, 8, 15, 18, 6 with the 60 to 80 bar ringed, the green frame "modal class: 60 to 80". On "hundred" the cumulative points (0, 0), (20, 3), (40, 11), (60, 26), (80, 44), (100, 50) plot and join (violet). The dashed line across from 25 meets the polygon and drops; on "seven" the green frame "median ≈ 58.7", grey row "40 + 14/15 × 20 ≈ 58.7". On "the slip" a red slip "median in 60 to 80" writes and is crossed, caption "median class: 40 to 60". Hold about 1 s.

### 13. the end of Year 11
> That's the last core video of Year 11 Maths Advanced. This strand started with sets, and it finishes with graphs of real data. In the Year 12 Maths Advanced playlist, bars of relative frequencies like these become probability distributions. And a cumulative curve that climbs from zero to one comes back, for things you measure. See you **there**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the closing frame: the ride's cumulative relative frequency polygon (amber, 1,000 × 560 px, 0 to 1) with the dashed median line at 0.5 dropping to "≈ 22.5 min"; the spinner's relative frequency histogram (teal, 420 px) at its left; the ride plate (240 px) at the top left. Chips write as spoken: "Year 11 Maths Advanced: complete", "Year 12: relative frequencies become probability distributions", "Year 12: the 0 to 1 curve returns". On "there" the chip "Next: the Year 12 Maths Advanced playlist". Hold about 2 s. This is the course's closing frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Mode: the value under the tallest bar (grouped data: the modal class).
- Relative frequency histogram: same shape; heights add to 1.
- Frequency polygon: join the bar tops; close to the axis.
- Cumulative polygon: plot at upper class boundaries.
- Median: across from half the total (or 0.5), then down.

Memory aid (framed card, right side, as in scene 8): *Mode: tallest bar. Median: across from half, then down.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 13's frame exactly. This is the final frame of the video and of the Year 11 core course.

## Teaching checks

- **Does it explain causes?** Why the mode is the tallest bar's value: the bar's height is how often the value occurs (2). Why the relative histogram keeps its shape: every height is divided by the same total (3). Why the median is at half the running total: half the results lie at or below it (5). Why bars touch for waits: time is continuous (6). Why upper boundaries: a running total is complete only at the top of a class (7). Why the grouped median is an estimate: positions within classes are unknown (7).
- **Misconceptions addressed:** the mode as the count (2 crossed); the median as the count at half (5 crossed); midpoints for the cumulative polygon (7 crossed); gaps for measured data (6 tag); the relative histogram changing shape (3 tag); the median as the middle of the value range (A1 crossed); the modal class taken as the median class (A2 crossed).
- **Visual standard, item by item:** 1 the spinner from the first frame (s10's frame), the ride in 6 and 7; 2 a new stage every 30 to 55 s; 3 the chart switch, the queue clock, the median reader; 4 fixed roles; 5 large type; 6 hand tags; 7 g01-style rows beside each graph; 8 framed card and five bullets; 9 one panel turning bars into a polygon and a staircase.
- **One idea at a time:** bars (2), scale (3), polygon (4), median by steps (5), grouped mode (6), grouped median (7).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 27 s and 29 s.
- **Avoided double teaching:** s10's columns are reused, not rebuilt; s09's discrete and continuous is a chip.
- **Syllabus coverage:** `ci10643b1a`: frequency histogram (2, 6), relative frequency histogram (3), frequency polygon (4), cumulative frequency histogram (5) and polygon (7), cumulative relative frequency polygon (7), mode and median from graphs (2, 5, 6, 7) and from tables (5), spreadsheets (2 to 5); A1, A2; key notes 1 to 5.
- **Out of scope by design:** box plots, quartiles, frequency density, stem-and-leaf plots, the mean from a table.

## Practice questions and model answers

**Attempt 1 (scene 9; pack question 1, original, HSC style, 3 marks suggested, not an official marking scheme).** "The numbers of items in 30 baskets at an express checkout were: 1 item (3 baskets), 2 items (9), 3 items (5), 4 items (6), 5 items (4) and 6 items (3). Draw a frequency histogram and a cumulative frequency graph, and find the mode and the median."
Model answer: mode 2 (frequency 9). Cumulative 3, 12, 17, 23, 27, 30. The 15th and 16th baskets both have 3 items, so the median is 3. Classic mistake (crossed): "median 3.5".

**Attempt 2 (scene 11; adapted from site lesson07 card 05's table, original wording, HSC style, 3 marks suggested).** "Fifty scores out of 100 in an online quiz were grouped as 0-20, 20-40, 40-60, 60-80 and 80-100, with frequencies 3, 8, 15, 18 and 6. State the modal class and use a cumulative frequency polygon to estimate the median."
Model answer: modal class 60-80. Cumulative 3, 11, 26, 44, 50 at 20, 40, 60, 80, 100. Across from 25: 40 + (14/15)(20) ≈ 58.7. Classic mistake (crossed): "median in 60-80".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Spinner | 10, 18, 12 (40); mode 2; 0.25, 0.45, 0.30 (sum 1); cumulative 10, 28, 40; half 20; median 2 (20th and 21st) | 1 to 5 |
| Polygon | (0, 0), (1, 10), (2, 18), (3, 12), (4, 0); ghost 12, 16, 12 | 4 |
| Ride waits | 6, 14, 20, 7, 3 (50); modal class 20-30; cumulative 6, 20, 40, 47, 50 at 10 to 50; median ≈ 22.5 min; relative cumulative 0.12, 0.40, 0.80, 0.94, 1 | 6, 7, 13 |
| A1 | mode 2; cumulative 3, 12, 17, 23, 27, 30; median 3 | 9, 10 |
| A2 | modal class 60-80; cumulative 3, 11, 26, 44, 50; median ≈ 58.7 | 11, 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with Python and SymPy 1.14 (17 Nov 2026, scratchpad `s-designs/verify.py`); Codex to re-check.

- Spinner sorted: 20th and 21st values are 2; 0.25 + 0.45 + 0.30 = 1.
- Waits: 6 + 14 + 20 + 7 + 3 = 50; cumulative 6, 20, 40, 47, 50; 20 + (25 − 20)/20 × 10 = 22.5; relative cumulative 0.12, 0.4, 0.8, 0.94, 1; at 0.5: 20 + (0.5 − 0.4)/0.4 × 10 = 22.5.
- Baskets: 3 + 9 + 5 + 6 + 4 + 3 = 30; cumulative 3, 12, 17, 23, 27, 30; 15th and 16th values both 3.
- Scores: 3 + 8 + 15 + 18 + 6 = 50; cumulative 3, 11, 26, 44, 50; 40 + 14/15 × 20 = 176/3 = 58.67.

## Memory aid check

- **"Mode: the value under the tallest bar. Median: go across from half the total on the cumulative graph, then down."** Original (the site's card 05 reading, with the mode added). Meaning, as said in scene 8. Assumptions checked: bars of equal class width (true for every graph here; unequal widths would need density, which is out of scope); for single values the median is the first value whose cumulative total reaches half, or the mean of two values when half the total falls exactly on a step's top (not met here; an author check for the builder: 20 is not a cumulative value in the spinner data, so the median is unambiguous); for grouped data the result is an estimate (second line). It helps a new case: A2.
- **Considered, not used:** "median = middle row" (wrong when frequencies differ; A1's crossed 3.5 is a cousin of it).

## Narration length estimate

Counted by script (narration blockquotes, bold markers removed; 17 Nov, scratchpad `s-designs/count.py`): 5,377 characters. At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 20 s of settling (the chart switches, the queue clock, the median reader) and the 45 s notes scene: about 490 s. Characters per scene (1 to 14): 400, 448, 424, 365, 606, 434, 700, 222, 310, 361, 308, 381, 343, 75. Speech before the notes is about 399 s, under the 570 s cap. Feedback speech: about 27 s and 29 s.

Reserve trims if the voiced take runs long: scene 4's last sentence (keep the grey overlay); scene 2's two-modes sentence (keep the chip).

## Scene list and build ids

Lesson key `m-a11s11` (route math-a11-s11). Explainer folder `src/explainer/lessons/math-a11-s11`; build inputs in `docs/production/claude-pm/lessons/math-a11-s11/` (at voicing).

In order (14 scene headings): hook-table-becomes-bars, frequency-histogram-mode, relative-frequency, frequency-polygon, cumulative-median, grouped-ride, median-wait, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, end-of-year-11, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 30 s | 1 | The table and its bars |
| 30 to 65 s | 2 | Spreadsheet chart: histogram and mode |
| 65 to 95 s | 3 | Relative frequency scale |
| 95 to 125 s | 4 | The polygon |
| 125 to 180 s | 5 | Cumulative steps and the median |
| 180 to 215 s | 6 | The ride, its histogram and modal class |
| 215 to 280 s | 7 | The cumulative polygon and the median wait |
| 280 to 295 s | 8 | Framed memory card |
| 295 to 390 s | 9 to 12 | Question cards and countdowns, then feedback |
| 390 to 415 s | 13 | The closing Year 11 frame |
| 415 to 460 s | 14 | Key notes, then a silent return to scene 13's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: s10's last frame continues into 1; 1 to 2 the bars move into the chart panel; 2 to 5 the same panel switching chart type; 5 to 6 stage change; 6 to 7 same chart; 7 to 8 camera pull back; attempts and feedback: the card shrinks to the top; 12 to 13 board clear; 13 to 14 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11-s11-learning-review.md`, `science_check` = `checks/m-a11-s11-maths-check.md`.

## Assets

Inspected before choosing (17 Nov 2026, file list and view): the spinner plates (see s10). No ride or queue plate exists (`ma12-coaster-car-v1.png` and `ma12-coaster-track-v1.png` are a coaster's car and track, used in Year 12; a queue maze shows the wait better).

Reused: `ma12-spinner-base-v1.png` and `ma12-spinner-pointer-v1.png` (1, badge).

Need (painted, new; see the Codex asset brief): `ma11-ride-queue-v1.png` (6, 7, 13).

Coded: the spreadsheet and chart panel, every histogram, polygon and staircase, the wait board, dots, the median reader, rows, cards, countdown, hand tags, key notes.

### Studio kit use and additions

Uses: `ScreenApp` (spreadsheet chart panel), `ClassHistogram` (single values and grouped edges; relative mode), `ProbabilityBars`, `HeatsToHistogram` (the queue clock), `QuantileReader` (with a piecewise-linear cumulative function), `histogramModel`, `FrequencyTable` (s10's addition), `PlateImg`, `HandTag`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions:
1. **`FrequencyPolygon` and `CumulativePolygon` layers for `ClassHistogram`** (kit list item 13): the polygon through bar-top midpoints, closed to the axis at the neighbouring empty values or classes; the cumulative polygon through upper class boundaries from (lower edge, 0) to the total (or 1); a median line at half. Check: points sit at the stated coordinates; the median reader's readout equals the linear interpolation within 0.1.
2. **Chart-type switch** (small): one chart panel morphing between column, line and cumulative column for the same table.

## Codex asset brief (Maths A11 S11, a theme-park ride queue)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-s11.md`. Paint after the learning review and maths check pass and root gives the go-ahead, and before the s11 build. Save to `public/assets/maths/`. Transparent PNG with a true alpha channel; ink and watercolour in the house style, matched to `maths/ma11-jellybean-jar-v1.png`; no text, numbers, signs, logos, people, hands, faces, glow or shadow. Never stretch.

1. `ma11-ride-queue-v1.png` (2200 × 1500 px): the empty queue area of a theme-park ride, seen at a three-quarter angle from slightly above: a zigzag of metal queue rails on a paved floor under a striped shade sail, leading to a colourful ride entrance arch, with a blank rectangular wait-time board on a post beside the entrance (code writes the minutes). No riders, no staff, no lettering.

Sidecar JSON (`ma11-ride-queue-v1.json`): the pixel rectangle of the wait-time board. Report inspection on the paper background (`#f6f1e7`) at 900 px and full width, and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-s11-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quote matches the route-inputs JSON exactly.
3. Confirm cumulative polygons are plotted at upper class boundaries from zero, frequency polygons through bar-top midpoints closed to the axis, grouped histograms with touching bars, and every grouped median called an estimate.
4. Confirm no box plot, quartile, frequency density or stem-and-leaf plot appears, and that no lesson07 quartile value is used (S11-P03 to S11-P05).
5. Confirm the closing frame states only that Year 12 builds probability distributions from relative frequencies and that a 0 to 1 cumulative curve returns, and names the Year 12 playlist without promising other videos.
6. Confirm both attempts carry every demand and neither card nor picture shows an answer.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its Visual in spoken order, and that scene 1 opens on s10's final frame.

## YouTube metadata (draft)

Title: Histograms, Polygons, Mode and Median | Year 11 Maths Advanced

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/probability-and-data/lesson15.sa.html

Turn a frequency table into graphs in a spreadsheet: frequency and relative frequency histograms, the frequency polygon, and cumulative frequency histograms and polygons. Read the mode from the tallest bar and the median from half the total, for single values and for grouped waiting times at a theme-park ride, from the graphs and from the table. This is the last core video of Year 11 Maths Advanced; the Year 12 playlist picks up from here. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Probability and data.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Graph the frequency, relative frequency, and cumulative frequency histograms and polygons of datasets, using spreadsheets or graphing applications, and identify the mode and median from the graphs, and from tables"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa829162c5

Builds on: Frequency tables and relative frequency. Next: the Year 12 Maths Advanced playlist.

#Year11Maths #MathsAdvanced #Histograms #HSCScience

## Open decisions

- **1. The closing frame (root).** It names the Year 12 Maths Advanced playlist and two things Year 12 does with these graphs (Year 12 s01 and s04, both published). It does not mention the optional practice videos p01 to p03, which are not designed. If root wants a card link to a specific Year 12 video, the end screen can carry it; the narration does not change.
- **2. Attempt 2's context (learning review).** The site's card 05 "scores" are given a light context ("an online quiz"); the numbers are unchanged. The pack's question 2 data became the worked example (the ride).

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from s10; check that the chart switch makes "same data, different graph" clear, that "the value, not the count" lands for both the mode and the median, that upper boundaries have a reason, and that the closing frame reads as an ending and an honest pointer to Year 12), then the Codex maths check and error check, then voicing on the Google voice and a build to grade A.
