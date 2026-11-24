# Maths S11 D06B: How do a cumulative frequency table, histogram and polygon answer "how many below?" A running total, the staircase histogram, the polygon through the top-right corners, reading "less than" and "at least", and drawing both sets with a spreadsheet or app (design)

Status: Revision 3 (25 Nov 2026): preflight and fact repairs (see the final section, "Revision 3 (root, 25 November 2026)"). Revision 2 (24 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (24 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), `math-s11-d06a.md` (Revision 1, this batch), `math-s11-f08.md` and `e06.md` (spreadsheet conventions), the coherence audit and root's Standard rulings 1 to 99. Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,538 characters by script (see "Narration length estimate"; Revision 2), 13 scene headings, about 500 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: seventh video of the Year 11 Data analysis strand, the second half of outline video d06 (playlist order 66, with d06a). One video for Standard 1 and Standard 2. Viewers arrive from d06a's final frame. Pre-design pack: `../pre-design/maths-standard/math-s11-d06b.md`. Route entry: `math-s11-d06b` in `../../programme/maths-standard-route-inputs-14.json`. Site lesson: `year11/data-analysis/lesson12.sa.html` (card 05's cumulative column); the cumulative graph and digital tools are taught from the syllabus (MSY-38). Visual system: maths studio kit; the phone, starting blocks and phone dock plates (all existing); the staircase, cumulative polygon, reading guide, spreadsheet grid and app screen coded.

Owner rules applied: as d01 (header strip "DATA ANALYSIS" only; one question; one stage at a time; plain meanings; two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors; no people, hands or faces; unbranded software; Australian spelling; no em dashes).

Syllabus content point (Mathematics Standard 11-12 (2024), Year 11, Data analysis, "Display and interpret grouped and ungrouped data", common to Standard 1 and Standard 2), quoted from `../../programme/maths-standard-route-inputs-14.json` (shared with d06a; this video: the cumulative table, histogram and polygon, and digital tools):

- `cia7a007a6`: "Represent a numerical dataset as either a frequency distribution table or a cumulative frequency distribution table and graph the associated histogram with polygon, both with and without using digital tools"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa4de413b8

**Boundary:** starts from d06a's final frame exactly (the screen-time histogram with its polygon, about 1,000 px wide, at the centre-right: axis "Screen time (min)" 0 to 540, ticks every 60, frequency 0 to 10, olive bars 3, 9, 7, 5, 3, 2, 1, the darker olive polygon closed at 30 and 510; the phone `ma12-phone-v1.png`, about 420 px tall, at the left; an amber dashed line at 240 min; chips "4 hours = 240 min", "How many used less than 4 hours?", "Next: cumulative frequency" and "?"). Recalls d06a (frequency table, histogram, polygon) and f08 (spreadsheet formulas, fill down) in grey chips. Teaches: cumulative frequency; the cumulative table; the cumulative histogram and polygon; reading "less than", "at least" and "between"; a spreadsheet and a statistics app for both sets. Not taught: medians or quartiles from the polygon (d15); shape words (d09).

## Revision 2: learning review resolved (24 Nov 2026)

Source review: `../checks/m-s11-d06b-learning-review.md`; resolution record `../checks/m-s11-d-learning-review-resolution.md`.

- **D06B-EARLY (note): applied.** Scene 4 now says "Plot them at the class centres instead, and the line runs half a class too far left, so every reading comes out too high." The bold cue moves from "early" to "high"; a reading at 180 on the ghost line shows above 12 in red before the ghost line is crossed.
- Narration 5,550 characters (Revision 1: 5,528); about 501 s with holds, under the 570 s cap. Both attempts still end "Pause here to answer."; feedback about 20.9 s and 19.6 s. No em dash. Joins unchanged.

## Decisions

- **Anchor: "less than 4 hours?" (d06a's frame).** Adding the bars left of the line works once; a running total answers every "how many below?" question at once. The answer, 19, appears as the cumulative column's third row.
- **Plain meanings at first use.** Cumulative frequency ("a running total of the frequencies: how many values are below the end of each class"); cumulative frequency histogram ("each bar shows the running total, so the bars climb like stairs"); cumulative frequency polygon ("a line joining the top right corner of each step").
- **Why the top-right corner.** The running total for a class counts everything below that class's upper end, so its point belongs at the upper end, not the centre. The polygon starts at zero at 60 minutes, because nobody was below the first class. Contrast with d06a's centres is the scene's surprise: the two polygons share an axis but not their points.
- **Reading "at least" and "between".** The polygon reads "less than"; "at least 300 minutes" is the total minus "less than 300" (30 − 24 = 6); "180 to under 300" is a subtraction of two readings (24 − 12 = 12). Readings are taken at class boundaries only, where the values are exact.
- **Digital tools (two).** A spreadsheet: the frequency table typed in, cumulative formula C2 "=B2" and C3 "=C2+B3" filled down, a column chart with the gap set to zero for the histogram, a line chart for the polygon. A statistics app: paste the 30 values, set the class width to 60 and the start to 60, and it draws the histogram and, with one tick, the cumulative graph. Both coded and unbranded; no menu orders are given ("menus differ", as Year 12 b05 says).
- **Simulations (standard item 3).**
  1. **Staircase build** (scene 3): each bar of d06a's histogram slides up onto the previous one's height with a running counter; the staircase reaches 30.
  2. **Corner drop and reading guide** (scenes 4, 5): points drop onto top-right corners, the line joins from (60, 0); an amber guide rises from a chosen boundary and turns across to the frequency axis, giving a readout; a subtraction strip for "at least" and "between".
  3. **Spreadsheet fill** (scene 6): the formula bar shows the active cell's formula; fill-down animates down the column; the chart inserts and its gap slider closes to zero.
- **Colour roles (strand, fixed).** As d01: values blue; counts, frequencies, tallies, bars and running totals olive; mean teal; median and quartiles violet; spread and fences amber; answer green; mistake red. Here: the reading guide amber dashed (as d06a's 240 line).
- **Large type, handwritten voice.** Labels 40 px; working 52 px; nothing below 26 px; all text above y = 950. Hand tags: "running total", "ends at 30: check", "climbs, never falls", "top right corner", "start at zero", "less than: read it", "at least: subtract", "fill down", "gap to zero", "menus differ". At most two live at once.
- **Stage changes (standard item 2).** d06a's histogram and the 240 line (1); the cumulative table (2); the staircase (3); the cumulative polygon (4); reading it (5); spreadsheet and app (6); framed card (7); question cards (8 to 11); the phone on its dock and the location table (12); key notes (13).
- **Worked examples (g01 order).** Scene 2: the table "Screen time | f | cf" with cf 3, 12, 19, 24, 27, 29, 30 (framed green); row "less than 240 min: 19" (framed green). Scene 5: "at least 300 min: 30 − 24 = 6" (framed green); "180 to under 300: 24 − 12 = 12" (framed green); crossed slip "at least 300: 24" (caption "24 is less than 300").
- **Memory aid.** Framed card: "Cumulative: keep a running total, and plot it at the end of each class." Key line: "The polygon reads 'less than'. For 'at least', subtract from the total."
- **Attempts.** A1 (pack question 1): 4, 14, 28, 36, 40; 28; 4; crossed "(b) 14" (caption "14 is just that class"). A2 (pack question 2): 29; 26; crossed "(a) 21" (caption "21 took less than 30").
- **Mistake scene:** none separate. Points at centres (4); not starting at zero (4); "at least" read directly (5, A2); class frequency for a running total (A1).
- **Cause chain taught, in order:** (1) each class's running total counts every value below the end of that class, so one column answers every "how many below?" (2); (2) a running total can only grow, so the cumulative histogram climbs like stairs and ends at the total (3); (3) the count belongs at the upper end of each class, because that's the value everything counted is below, so the polygon joins top-right corners from zero (4); (4) the polygon gives "less than", so "at least" and "between" come from subtracting readings (5); (5) a spreadsheet repeats the same running-total formula down the column and a chart draws from the cells, so tables and graphs update together (6).
- **Entry knowledge (route):** math-s11-d06a (tables, histogram, polygon), f08 and e06 (spreadsheet formulas; fill down). Recalled in grey chips.
- **Site notes.** lesson12 card 05 recalculated: no error. MSY-38 (no cumulative graph; no digital tools).
- **Handoff (to math-s11-d07, choosing a graph).** Scene 12: board clear; the phone dock `ma12-phone-dock-v1.png` (about 560 px tall) at the left; at the right a frequency table, 44 px: "Phone charges overnight | Frequency" with "bedroom | 12", "kitchen | 5", "lounge room | 2", "other | 1", "Total | 20"; beside it a ghost histogram of these counts with touching bars, lightly crossed; chips "Which graph?", "Next: choosing a graph" and "?". d07 opens on this frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Cumulative: 3, 3 + 9 = 12, 12 + 7 = 19, 19 + 5 = 24, 24 + 3 = 27, 27 + 2 = 29, 29 + 1 = 30.
  (b) Polygon points as in pack table 3; less than 240: 19 (exact: 19 values are below 240).
  (c) 30 − 24 = 6 (values 305, 320, 345, 370, 395, 455); 24 − 12 = 12 (values 180 to 295).
  (d) A1: 4, 14, 28, 36, 40; less than 16 h: 28; at least 18 h: 40 − 36 = 4. A2: 50 − 21 = 29; 47 − 21 = 26.
  (e) Spreadsheet layout: A "Class" (60-<120 ...), B "Frequency", C "Cumulative"; C2 "=B2"; C3 "=C2+B3" filled to C8 (30).

Main question: *How many used their phone for less than 4 hours, without adding bars one by one? How do a cumulative frequency table, histogram and polygon answer "how many below?"*
Entry knowledge (math-s11-d06a, f08): frequency tables, histograms, polygons; spreadsheet formulas.
Stops after: cumulative table, histogram and polygon; reading them; a spreadsheet and an app.
Handoff: math-s11-d07: "Next: choosing a graph".

## Script and shots

Cue words in **bold** trigger the visual change. Colour roles (fixed): values blue; counts, bars and running totals olive; mean teal; median and quartiles violet; spread amber; answer green; mistake red. Header strip "DATA ANALYSIS", with the mini investigation strip ("organise and display" lit). Scene headings in the hand font, 44 px.

### 1. hook: less than four hours?
> How many of the class used their phone for less than four hours, two hundred and forty minutes? The bars to the left of the line hold three, nine and seven students, so the answer is nineteen. That works once. But less than five hours means adding four bars, and less than six means five. There's a way to keep the answers ready, a running total. So how do a cumulative frequency table, histogram and polygon answer how many are **below**?

Visual: opens on d06a's final frame exactly. On "How many of the class" the "Next" chips fade. On "three, nine and seven" the three bars left of 240 pulse in turn with olive tags "3", "9", "7"; on "nineteen" a row "3 + 9 + 7 = 19". On "less than five hours" the line jumps to 300 and four bars pulse; on "less than six" it jumps to 360 and five bars pulse (hand tag "adding again?"). On "running total" a small counter "3 → 12 → 19 ..." ticks once. On "below" heading "Cumulative frequency" writes on (hand font, 56 px) and the line returns to 240.

### 2. the cumulative frequency table
> Take the frequency table from last time, and add a column. Cumulative frequency is a running total of the frequencies. It adds up as you go down. The first class has three. Add the nine, and it's twelve. Add seven, nineteen. Then twenty-four, twenty-seven, twenty-nine, and thirty. You never add more than two numbers at a time. Each number tells you how many students are below the end of that class. Twelve students used less than a hundred and eighty minutes. Nineteen used less than two hundred and **forty**. And the last running total is thirty, the whole class, which is a handy check that you've added correctly.

Visual: stage change: the frequency table (d06a's, 44 px) at the left: "Screen time (min) | Frequency" and a new third column header "Cumulative frequency" writing on (grey chip "d06a: the frequency table"). On "adds up as you go down" an olive arrow runs down beside the column (hand tag "running total"). On "The first class has three" "3" writes in the first cf cell; on "Add the nine" a "+9" arc from the frequency column, "12"; on "Add seven" "+7", "19"; then "24", "27", "29", "30" with arcs. On "Twelve students" the 120-<180 row's "12" rings with a tag "less than 180"; on "forty" (bold) the 180-<240 row's "19" rings, row "less than 240 min: 19" (framed green). On "thirty" the last cell glows with "= total 30" (hand tag "ends at 30: check").

### 3. the cumulative frequency histogram
> We can graph the running totals too. In a cumulative frequency histogram, each bar's height is the running total, not the class's own frequency. It's the same data, just counted differently. So the first bar is three, the next twelve, then nineteen, and so on, up to thirty. Each bar stands on everything before it, so the graph climbs like a staircase. It can stay level, if a class is empty, but it can never go **down**. The height of the top step is always the total number of **values**.

Visual: stage change (simulation 1): d06a's histogram at full width; on "running total" each bar in turn slides up to sit on the previous bar's height (ghost outlines of the original bars stay faint): 3, then 9 lands on 3 to reach 12, then 7 lands to reach 19, then 24, 27, 29, 30; the vertical axis rescales from 0 to 10 to 0 to 30 as it climbs, with a running counter beside the tallest step. On "climbs like a staircase" an olive outline traces the steps (hand tag "climbs, never falls"). On "down" (first bold) a ghost step tries to drop and is crossed red. On "values" the top step rings with "30 = whole class".

### 4. the cumulative frequency polygon
> The cumulative frequency polygon joins the staircase with a line. Here's the important part. Each running total counts every value below the end of its class, so its point goes at the end of the class, the top right corner of each bar. Not the middle, like last time. Twelve goes at a hundred and eighty. Nineteen goes at two hundred and forty. And the polygon starts at zero, at sixty minutes, because nobody used less than sixty. From there it rises to thirty at four hundred and **eighty**. Read it like the table. Each point says how many students are below that time. Plot them at the class centres instead, and the line runs half a class too far left, so every reading comes out too **high**.

Visual: stage change (simulation 2): on the staircase, blue-outlined dots drop onto the top-right corner of each bar: (120, 3), (180, 12), (240, 19), (300, 24), (360, 27), (420, 29), (480, 30) (hand tag "top right corner"); on "Not the middle" a ghost dot on the second bar's top centre is crossed red (grey chip "d06a: polygon dots at centres"). On "starts at zero, at sixty minutes" a dot drops on the axis at (60, 0) (hand tag "start at zero"). On "eighty" (bold) the darker olive line joins all eight points. On "high" (Revision 2, D06B-EARLY) a ghost line through the centres slides half a class left, a reading at 180 on it shows above 12 (red), and the ghost line is crossed (caption "cumulative: plot at the end of each class").

### 5. reading the polygon
> Now the payoff. To find how many are below a value, go up from that value to the line, then across. Less than three hundred minutes? Up and across gives twenty-four. But exam questions also ask for at least, or more than. The polygon only reads less than, so subtract from the total. At least three hundred minutes is thirty minus twenty-four, six **students**. And between a hundred and eighty and three hundred? Twenty-four are below three hundred, and twelve are below a hundred and eighty, so twenty-four minus twelve, twelve **students**. Reading twenty-four as the at least answer is the classic **slip**. Read first, then decide whether to subtract.

Visual: the polygon at full width (about 1,300 px). On "go up from that value" an amber dashed guide rises from 300 on the axis to the line and turns across to the frequency axis (hand tag "less than: read it"); readout "less than 300: 24" (olive, 52 px). On "subtract from the total" the top of the axis (30) glows; on "students" (first bold) row "at least 300 min: 30 − 24 = 6" (framed green; hand tag "at least: subtract"). On "between" a second guide rises from 180 (readout "less than 180: 12"); a bracket between the two readouts; on "students" (second bold) row "180 to under 300: 24 − 12 = 12" (framed green). On "slip" a red slip "at least 300: 24" writes and is crossed (caption "24 is less than 300").

### 6. with digital tools
> Everything so far works by hand. Digital tools do the same jobs faster. In a spreadsheet, type the classes and frequencies into two columns. In the first cumulative cell, type equals B two. In the next, equals C two plus B three, the running total so far plus the next frequency. Fill it down, and the whole column appears, ending at thirty. Select the frequencies, insert a column chart, and set the gap between the bars to zero. That's the histogram. A line chart of the cumulative column gives the polygon. A statistics app can start even earlier. Paste in all thirty raw values, set the class width to sixty, and it draws the histogram for you. Menus differ between programs, but the ideas don't, so always check the classes it **chose**.

Visual: stage change (simulation 3): an unbranded `SpreadsheetGrid` (about 1,100 px wide) with a formula bar (grey chip "f08: = starts a formula; fill down"). Columns A "Class", B "Frequency", C "Cumulative"; rows 2 to 8 fill with "60-<120 | 3" ... "420-<480 | 1". On "equals B two" C2 selected, formula bar "=B2", value 3. On "equals C two plus B three" C3 selected, formula bar "=C2+B3", value 12. On "Fill it down" the fill handle drags to C8: 19, 24, 27, 29, 30 (hand tag "fill down"); C8 glows "30". On "insert a column chart" a chart appears beside the grid with gapped bars; on "set the gap" a "gap width" slider slides to 0 and the bars close up (hand tag "gap to zero"). On "line chart" the cumulative line draws over a second small chart. On "statistics app" the phone (about 460 px tall) shows a coded app screen: a paste box with 30 values, "class width: 60", "start: 60", and a histogram appearing; a toggle "cumulative" flips it to the staircase and line. On "chose" (bold) hand tag "menus differ".

### 7. memory aid
> Here's the card. Cumulative means keep a running total, and plot it at the end of each class. The polygon reads less than. For at least, subtract from the **total**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the staircase with the polygon through its top-right corners and one amber reading guide. Main line, hand font 56 px: "Cumulative: keep a running total, and plot it at the end of each class." On "total" the key line, 40 px: "The polygon reads 'less than'. For 'at least', subtract from the total." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. The battery life of forty phones, in hours, is grouped like this. Ten to under twelve, four phones. Twelve to under fourteen, ten. Fourteen to under sixteen, fourteen. Sixteen to under eighteen, eight. Eighteen to under twenty, four. Write the cumulative frequency column. How many phones lasted less than sixteen hours? And how many lasted at least eighteen hours? Pause here to answer.

Visual: `QuestionCard`, 40 px: "Battery life of 40 phones (hours): 10-<12: 4; 12-<14: 10; 14-<16: 14; 16-<18: 8; 18-<20: 4. (a) Write the cumulative frequency column. (b) How many lasted less than 16 hours? (c) How many lasted at least 18 hours?" Picture slot: the phone with a coded battery icon (about 300 px tall). Countdown ring shown full from "Pause here to answer.", then 10 s.

### 9. feedback 1 (brief)
> The running totals are four, fourteen, twenty-eight, thirty-six and forty, ending at the **total**. Less than sixteen hours is the running total at sixteen, twenty-eight. At least eighteen is forty minus thirty-six, four **phones**. Answering fourteen for less than sixteen is the **slip**.

Visual: the card shrinks to the top (30 px). A cf column fills with arcs; on "total" row "(a) 4, 14, 28, 36, 40" (framed green). On "twenty-eight" row "(b) less than 16 h: 28" (green); on "phones" row "(c) 40 − 36 = 4" (framed green). On "slip" a red slip "(b) 14" writes and is crossed (caption "14 is just that class"). Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. A cumulative frequency polygon for the five kilometre times of fifty fun-run entrants passes through these points. Twenty minutes, nought. Twenty-five, six. Thirty, twenty-one. Thirty-five, thirty-eight. Forty, forty-seven. And forty-five, fifty. How many took thirty minutes or more? And how many took from thirty to under forty minutes? Pause here to answer.

Visual: `QuestionCard`, 40 px: "A cumulative frequency polygon for the 5 km times of 50 fun-run entrants passes through (20, 0), (25, 6), (30, 21), (35, 38), (40, 47) and (45, 50), with time in minutes. (a) How many took 30 minutes or more? (b) How many took from 30 to under 40 minutes?" Picture slot: the polygon drawn from the points (no guides), with the starting blocks `ma12-starting-blocks-v1.png` (about 260 px) beside it. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> Twenty-one took less than thirty minutes, so thirty or more is fifty minus twenty-one, twenty-**nine**. Forty-seven took less than forty, so from thirty to under forty is forty-seven minus twenty-one, twenty-**six**. Answering twenty-one for thirty or more is the **slip**.

Visual: the card shrinks to the top. An amber guide rises from 30 (readout 21); on "nine" row "(a) 50 − 21 = 29" (framed green). A second guide from 40 (readout 47); on "six" row "(b) 47 − 21 = 26" (framed green). On "slip" a red slip "(a) 21" writes and is crossed (caption "21 took less than 30"). Hold about 1 s.

### 12. handoff: choosing a graph
> Histograms and polygons suit numerical data, like screen time. But some of our survey answers aren't numbers. Here's where our twenty students charge their phones overnight. Bedroom twelve, kitchen five, lounge room two, and other, one. Should that be a histogram, with touching bars? There's no number line under bedroom and kitchen. So which graph suits which kind of data? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame (as under Decisions, "Handoff"): on "some of our survey answers aren't numbers" the phone dock plate rises at the left. On "Bedroom twelve" the frequency table writes at the right, row by row, with "Total 20". On "a histogram, with touching bars" a ghost histogram of 12, 5, 2, 1 with touching bars appears beside the table; on "no number line" it is lightly crossed. On "which graph" chip "Which graph?". On "next" chips "Next: choosing a graph" and "?". Hold about 2 s. Scene 13 returns to this frame silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Cumulative frequency: running total; ends at the total.
- Cumulative histogram: bars climb like stairs.
- Cumulative polygon: top-right corners, from zero.
- "Less than": read it. "At least": total minus it.
- Spreadsheet: =C2+B3, fill down; chart gap to zero.

Memory aid (framed card, right side, as in scene 7): *Cumulative: keep a running total, and plot it at the end of each class.* Key: *The polygon reads 'less than'. For 'at least', subtract from the total.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and d07's opening frame.

## Teaching checks

- **Does it explain causes?** Why a running total answers "how many below" (2); why it climbs (3); why the top-right corner and the zero start (4); why "at least" needs subtraction (5); why fill-down works (6).
- **Misconceptions addressed:** points at centres (4); no zero start (4); "at least" read directly (5, A2); class frequency for a running total (A1).
- **Visual standard, item by item:** 1 the 240 line and the three bars in the first 20 s; 2 a new stage every 45 to 75 s; 3 the staircase build, the corner drop with reading guides, the spreadsheet fill and gap slider; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 rows with framed answers and crossed slips; 8 framed card and five bullets; 9 the bars stacking into a staircase.
- **One idea at a time:** table (2), histogram (3), polygon (4), reading (5), digital (6).
- **Response opportunity:** two unseen tasks with every demand visible; 10 s each; feedback about 20.9 s and 19.6 s.
- **Avoided double teaching:** d06a's table and graphs and f08's formulas are grey chips.
- **Syllabus coverage:** `cia7a007a6` cumulative table, histogram and polygon by hand (2 to 5, A1, A2; notes 1 to 4) and all tables and graphs with digital tools (6; note 5); with d06a, the point is covered once.
- **Out of scope by design:** medians and quartiles from the polygon (d15 recalls the polygon); percentiles.

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original HSC style, 3 marks suggested, not an official marking scheme).** As on the card.
Model answer: (a) 4, 14, 28, 36, 40. (b) 28. (c) 40 − 36 = 4. Classic mistake (crossed): "(b) 14".

**Attempt 2 (scene 10; pack question 2, 2 marks suggested).** As on the card.
Model answer: (a) 50 − 21 = 29. (b) 47 − 21 = 26. Classic mistake (crossed): "(a) 21".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Frequencies | 3, 9, 7, 5, 3, 2, 1 | 1 to 6 |
| Cumulative | 3, 12, 19, 24, 27, 29, 30 | 2 to 6 |
| Readings | < 240: 19; < 180: 12; < 300: 24; ≥ 300: 6; 180 to < 300: 12 | 1, 2, 5 |
| Polygon points | (60, 0) to (480, 30) | 4 |
| Spreadsheet | =B2; =C2+B3; C8 = 30 | 6 |
| A1 | 4, 14, 28, 36, 40; 28; 4 | 8, 9 |
| A2 | 29; 26 | 10, 11 |
| Phone location | 12, 5, 2, 1; 20 | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated (24 Nov 2026, scratchpad `s11d/verify.py`, `python -I`); Codex to re-check.
- Running totals 3, 12, 19, 24, 27, 29, 30; the raw list has exactly 19 values below 240, 12 below 180, 24 below 300.
- 30 − 24 = 6; 24 − 12 = 12.
- A1: 4, 14, 28, 36, 40; 40 − 36 = 4. A2: 50 − 21 = 29; 47 − 21 = 26.
- 12 + 5 + 2 + 1 = 20.

## Memory aid check

- **"Cumulative: keep a running total, and plot it at the end of each class."** with key line **"The polygon reads 'less than'. For 'at least', subtract from the total."** Original. It names the two rules students lose marks on (placement; "at least"). It helps a new case: "how many phones lasted 14 hours or more?" (40 − 14 = 26).
- **Considered, not used:** the word "ogive" (not used in the 2024 Standard syllabus; said nowhere, so students meet the syllabus's own words).

## Narration length estimate

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; `work/brief-review-s11-e/count.py`): **5,550 characters** in Revision 2 (Revision 1: 5,528), 13 scene headings. Characters per scene (1 to 13): 435, 616, 484, 690, 644, 738, 161, 398, 278, 370, 261, 388, 75. Feedback speech about 20.9 s and 19.6 s.

At 13.3 characters per second the speech is about 417 s. Holds and settling: two 10 s countdowns (20 s); short holds 6 s; settling for the staircase, the dots and guides, and the fill-down, about 18 s; the key-notes scene adds about 39 s beyond its line. Total **about 501 s**, 69 s under the 570 s cap (Revision 2).

Reserve trims if the voiced take runs long: scene 6's statistics-app sentences; scene 3's last sentence.

## Scene list and build ids

Lesson key `m-s11d06b` (route math-s11-d06b). Explainer folder `src/explainer/lessons/math-s11-d06b`; build inputs in `docs/production/claude-pm/lessons/math-s11-d06b/` (at voicing).

In order (13 scene headings): hook-less-than-four-hours, cumulative-table, cumulative-histogram, cumulative-polygon, reading-the-polygon, digital-tools, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff-choosing-graph, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 33 s | 1 | d06a's histogram and the 240 line |
| 33 to 80 s | 2 | The cumulative table |
| 80 to 115 s | 3 | The staircase |
| 115 to 165 s | 4 | The cumulative polygon |
| 165 to 215 s | 5 | Reading guides and subtractions |
| 215 to 280 s | 6 | Spreadsheet and app |
| 280 to 295 s | 7 | Framed memory card |
| 295 to 400 s | 8 to 11 | Question cards and countdowns, then feedback |
| 400 to 430 s | 12 | The phone dock and the location table |
| 430 to 475 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: d06a's last frame continues into 1; 1 to 2 the histogram slides right and the table enters; 2 to 3 the table fades and the bars stack; 3 to 4 the dots drop; 4 to 5 the polygon enlarges; 5 to 6 stage change; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s11-d06b-learning-review.md`, `science_check` = `checks/m-s11-d06b-maths-check.md`.

## Assets

Inspected before choosing (24 Nov 2026, viewed on contact sheets): `ma12-phone-v1.png`; `ma12-starting-blocks-v1.png` (starting blocks on a red track patch); `ma12-phone-dock-v1.png` (a phone standing in a charging dock, blank screen).

Need: none new. Reused: the three plates above.

Coded: the frequency and cumulative tables, the staircase and polygon, the reading guides and subtraction rows, the spreadsheet grid, chart and gap slider, the app screen, the battery icon, boards, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `InvestigationStrip` (mini), `FrequencyTable`, `CumulativeColumns` and `CumulativePolygon` (`a11-data-parts.tsx`; confirm the polygon can start at the first lower boundary and plot at upper boundaries), `ClassHistogram`, `SpreadsheetGrid` (ruling 90), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row d06b):
1. **Staircase morph** for `CumulativeColumns`: frequency bars slide up onto the previous running total with an axis rescale. Check: 3, 12, 19, 24, 27, 29, 30.
2. **`ReadingGuide`**: an amber dashed path up from an axis value to a polygon and across, with a readout, and a linked subtraction row. Check: 300 → 24; 180 → 12; A2 30 → 21, 40 → 47.
3. **`SpreadsheetGrid` chart insert**: a linked column chart with a gap-width slider and a line-chart mode. Check: gap 0 joins the bars.
4. **Statistics-app screen** for the phone plate: paste box, class width and start fields, a histogram that redraws, a cumulative toggle. Check: width 60, start 60 gives 3, 9, 7, 5, 3, 2, 1.

## Codex asset brief

No new plate. All three plates exist and were viewed.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify".
2. Confirm the syllabus quote matches the route-inputs JSON exactly, and that d06a and d06b together cover `cia7a007a6` once.
3. Confirm the cumulative polygon convention (upper class boundaries, starting at zero at the first lower boundary) matches NSW Standard practice.
4. Confirm the spreadsheet formulas work as written in common spreadsheet programs (=B2; =C2+B3 filled down).
5. Confirm both attempts carry every demand and show no answer; scene 1 opens on d06a's final frame exactly; scene 12 matches d07's Boundary.
6. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Cumulative Frequency: Tables, Histograms and Polygons | Year 11 Maths Standard

(Title length: 79 characters.)

Description: Related lesson notes: https://hscscience.com.au/subjects/maths-standard/year11/data-analysis/lesson12.sa.html

How many used their phone for less than four hours? Learn to build a cumulative frequency table as a running total, draw the cumulative frequency histogram and the polygon through the top-right corners, read "less than", "at least" and "between" from it, and make the tables and graphs with a spreadsheet or a statistics app. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 11, Data analysis. For Standard 1 and Standard 2.
Syllabus content (NSW Mathematics Standard 11-12, 2024, Year 11):
"Represent a numerical dataset as either a frequency distribution table or a cumulative frequency distribution table and graph the associated histogram with polygon, both with and without using digital tools"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa4de413b8

Builds on: Grouping Data: Frequency Tables and Histograms. Next: Choosing a Graph: Column Graphs and Spreadsheet Charts.

#Year11Maths #MathsStandard #Statistics #HSCScience

## Open decisions

- **1. The word "ogive".** Not used (the syllabus says "cumulative frequency ... polygon"). Root may add it as a one-line synonym if teachers' materials use it.

## Review notes

- Revision 1. Next: student learning review (trace from d06a; check that "running total" is shown before "cumulative" is used, that the corner placement has its reason before the slip, that every reading is at a class boundary, that the spreadsheet scene speaks each formula and its meaning, and that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
- Revision 2 (24 Nov 2026): learning review resolved (D06B-EARLY). Next: Codex maths check and error check, then voicing and a build to grade A.

## Revision 3 (root, 25 November 2026): preflight and fact repairs

This section overrides earlier text. Sources: `../checks/m-s11-d06b-maths-check.md`, `../checks/maths-standard-y11-official-facts.md` and `../checks/brief264-fact-checks-2026-11-24.md`. Repair log: `../checks/m-s11-preflight-repair-2026-11-25.md`.

- **Count (count-mismatch): fixed.** The declared 5,550 included the spaces between scenes; the sum of the 13 scene strings at Revision 2 was 5,538 (Codex's value). Narration is **5,538 characters**. Counted in Python the same way as Codex (`> ` lines inside each `### N.` scene joined with a space, `**` removed, scenes summed with no separator; Revision 2 sum matches `work/brief272/source-inventory.json`). At 13.3 characters per second the speech is about 416 s; total about 500 s with holds, under the 570 s cap. The header line is updated; earlier totals under "Narration length estimate" and in Revision 2 are superseded.
- **Official facts:** none in the fact sheets apply to this design.
- **Recurring data.** The recurring constructed data (the 20-student sleep sample, the 12/8 bedroom and elsewhere split, the screen-time values, the nearby and bus splits) are unchanged, so they stay consistent across the strand; brief 272's recurring-data check passed them. They are teaching data, not population estimates.
- **Narration changed: no.**
- No em or en dashes added. Ready for the Codex re-check; human listening still pending.

Revision 3 addendum (root, 25 November 2026): 10 en dashes in screen labels and author notes replaced (number ranges with "to", path and edge labels with hyphens, for example T-L-R-V). No narration change.
