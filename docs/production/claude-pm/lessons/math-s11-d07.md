# Maths S11 D07: Which graph suits a dataset? Categorical data in tables and column graphs, organising and graphing data in a spreadsheet, and choosing and justifying the best graph for one dataset (design)

Status: Revision 3 (25 Nov 2026): preflight and fact repairs (see the final section, "Revision 3 (root, 25 November 2026)"). Revision 2 (24 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (24 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), `math-s11-d01.md` to `d06b.md` (Revision 1, this batch), the Year 12 designs that recall this video (`math-s12-b06.md`: "Year 11: spreadsheet charts"; `math-s12-p07.md`: "categorical data in tables"), the coherence audit and root's Standard rulings 1 to 99. Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,549 characters by script (see "Narration length estimate"; Revision 2), 13 scene headings, about 500 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: eighth video of the Year 11 Data analysis strand, outline playlist order 67. One video for Standard 1 and Standard 2. Viewers arrive from d06b's final frame. Pre-design pack: `../pre-design/maths-standard/math-s11-d07.md`. Route entry: `math-s11-d07` in `../../programme/maths-standard-route-inputs-14.json`. Site lesson: `year11/data-analysis/lesson12.sa.html` (card 06's contrast, the match activity, MC 1 and 5); spreadsheets are taught from the syllabus (MSY-39). Visual system: maths studio kit; the phone dock, bus, coffee cart, apple crate, television and cricket scoreboard plates (all existing); the tables, column graphs, spreadsheet and graph chooser coded.

Owner rules applied: as d01 (header strip "DATA ANALYSIS" only; one question; one stage at a time; plain meanings; two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors; no people, hands or faces; unbranded software; Australian spelling; no em dashes).

Syllabus content points (Mathematics Standard 11-12 (2024), Year 11, Data analysis, "Display and interpret grouped and ungrouped data", common to Standard 1 and Standard 2), quoted from `../../programme/maths-standard-route-inputs-14.json`:

- `cic1f6796f`: "Represent categorical datasets in tables and column graphs as appropriate, with and without using digital tools"
- `ci01aceb17`: "Select the type of graph best suited to represent various single datasets and justify the choice of graph"
- `cia127389f`: "Use a spreadsheet to organise and represent data using appropriate graphs"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa4de413b8

**Boundary:** starts from d06b's final frame exactly (the phone dock `ma12-phone-dock-v1.png`, about 560 px tall, at the left; at the right the frequency table "Phone charges overnight | Frequency": "bedroom | 12", "kitchen | 5", "lounge room | 2", "other | 1", "Total | 20"; a ghost histogram of these counts with touching bars, lightly crossed; chips "Which graph?", "Next: choosing a graph" and "?"). Recalls d05 (the type tree), d06a and d06b (histograms; the spreadsheet chart) and d04 (the bus counts) in grey chips. Teaches: categorical tables with percentages; a two-way table; the column graph by hand; a spreadsheet to organise (COUNTIF) and graph; choosing and justifying a graph. Not taught: reading the six named displays (d08); shape (d09); misleading graphs (d10).

## Revision 2: learning review resolved (24 Nov 2026)

Source review: `../checks/m-s11-d07-learning-review.md`; resolution record `../checks/m-s11-d-learning-review-resolution.md`.

- **D07-SORT (note): applied.** Scene 3's nominal columns first rise in the order the answers came in (kitchen 5, bedroom 12, other 1, lounge room 2), so the sort button visibly reorders them to bedroom 12, kitchen 5, lounge room 2, other 1. No narration changed.
- **D07-NEARBY (note): not applied.** It follows D05-TRAVEL, which is held for root (the "nearby" label runs through d02 to d07; see the resolution record).
- Narration 5,561 characters (Revision 1: 5,561); about 501 s with holds, under the 570 s cap. Both attempts still end "Pause here to answer."; feedback about 23.2 s and 19.3 s. No em dash. Joins unchanged.

## Decisions

- **Anchor: the phone location table (d06b's frame).** The crossed histogram is the hook's question: categories have no number line, so the bars should not touch. The first answer is the column graph, the second is "choose by type".
- **Tables first (p07's recall).** A one-way table gains a percentage column; then a two-way table crosses phone location with how students get to school, using d04's counts (bedroom: 5 bus, 7 nearby; elsewhere: 1 bus, 7 nearby). Plain meaning: two-way table ("a table that counts two categorical variables at once, one across the top and one down the side").
- **Ordinal keeps its order.** A second column graph ("How rested?": not at all 2, a little 5, somewhat 7, quite 4, very 2) refuses to be sorted largest first; nominal categories can be sorted, and often are.
- **The spreadsheet does the organising too.** Twenty raw answers in column B; =COUNTIF(B2:B21,"bedroom") counts each category; =C2/20 gives the share, formatted as a percentage; insert a column chart and give it a title and axis labels. Numerical data get a histogram (d06b's gap-to-zero chart) instead. Plain meaning: COUNTIF ("counts the cells in a range that match what you ask for"). Coded, unbranded; "menus differ".
- **Choosing a graph (the type tree becomes a graph chooser).** d05's tree, with two questions added: "Is it changing over time?" (line graph) and "Is it parts of one whole?" (sector graph or divided bar chart, read in d08). Categorical: column graph (sector graph or divided bar for parts of a whole). Numerical with few values or a small set: dot plot or stem-and-leaf plot. Numerical with many values: histogram (grouped). Over time: line graph. A justification sentence names the data type and the question: "A histogram, because screen time is continuous numerical data with many different values."
- **Plain meanings at first use.** Column graph ("a graph with one column for each category, with gaps between them"); dot plot ("one dot for each value above a number line"); line graph ("points joined in time order, to show change over time"); sector graph ("a circle split into slices that show parts of one whole"); divided bar chart ("one bar split into parts of one whole").
- **Simulations (standard item 3).**
  1. **Column graph draw** (scene 3): bars rise with gaps; a "sort" button sorts the nominal bars largest first; the same button on the ordinal graph makes the bars shuffle out of order and snap back, with a red flash.
  2. **Spreadsheet organise and chart** (scene 4): raw answers fill column B; COUNTIF formulas fill C; percentages fill D; the chart inserts and labels itself.
  3. **Graph chooser** (scenes 5, 6): dataset cards fall through the extended tree into graph bins; each bin shows a mini graph of that dataset and writes a reason.
- **Colour roles (strand, fixed).** As d01: values blue; counts, frequencies, bars and percentages olive; mean teal; median and quartiles violet; spread and fences amber; categories and labels violet; answer green; mistake red.
- **Large type, handwritten voice.** Labels 40 px; working 52 px; nothing below 26 px; all text above y = 950. Hand tags: "categories: gaps", "start at 0", "nominal: any order", "ordinal: keep the order", "COUNTIF counts", "title and labels", "type first", "over time: line", "parts of a whole", "say why". At most two live at once.
- **Stage changes (standard item 2).** The dock and the table (1); percentages and the two-way table (2); column graphs, nominal and ordinal (3); the spreadsheet (4); the graph chooser (5); justified choices for four datasets (6); framed card (7); question cards (8 to 11); the cricket scoreboard gallery (12); key notes (13).
- **Worked examples (g01 order).** Scene 2: percentages "12 ÷ 20 = 60%", "5 ÷ 20 = 25%", "2 ÷ 20 = 10%", "1 ÷ 20 = 5%" (framed green as a column); the two-way table with totals (framed green). Scene 6: four justified choices (framed green each); crossed slip "screen time: column graph, one column per student" (caption "many values: group them, histogram").
- **Memory aid.** Framed card: "Name the data type first, then choose the graph." Key line: "Categories get gaps. Numbers on a number line touch. Change over time goes along a line."
- **Attempts.** A1 (pack question 1): 36%, 16%, 28%, 20%; gaps with a reason; crossed "(b) yes, like a histogram" (caption "genres are categories"). A2 (pack question 2): line graph; histogram; crossed "(ii) a column for each apple" (caption "60 values: group them").
- **Mistake scene:** none separate. Touching category bars (1, 3, A1); sorting ordinal data (3); no title or labels (4); choosing by look (5, 6, A2).
- **Cause chain taught, in order:** (1) categories are separate labels with nothing between them, so their columns stand apart (3); (2) the order of ordinal categories carries meaning, so the graph must keep it (3); (3) a spreadsheet can count each category for you and draw from the counts, so tables and charts stay in step (4); (4) each graph is built for a kind of data and a kind of question, so the data type and the question decide the graph (5, 6).
- **Entry knowledge (route):** math-s11-d05 (the type tree), d06a, d06b (histograms; spreadsheet chart), d04 (bus counts), f08 (formulas). Recalled in grey chips.
- **Site notes.** MSY-39 (no spreadsheet graphing; "bar chart" against "column graph").
- **Handoff (to math-s11-d08, reading statistical graphs).** Scene 12: board clear; the cricket scoreboard `ma12-cricket-scoreboard-v1.png` (about 900 px wide) at the centre with a coded stem-and-leaf plot on its green board (white, 40 px): "0 | 0 4 7", "1 | 2 5 8", "2 | 1 4 4", "3 | 3 6", "4 | 1", "5 | 8", "6 | 3", "7 |", "8 | 7", key "2 | 4 = 24 runs"; around it four small coded graphs (about 300 px each): a dot plot, a line graph, a sector graph and a divided bar chart (axis-free thumbnails, no values readable); chips "What does each one tell us?", "Next: reading statistical graphs" and "?". d08 opens on this frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) 12 ÷ 20 = 0.6; 5 ÷ 20 = 0.25; 2 ÷ 20 = 0.1; 1 ÷ 20 = 0.05; total 1.
  (b) Two-way: bedroom 5 + 7 = 12; elsewhere 1 + 7 = 8; bus 5 + 1 = 6; nearby 7 + 7 = 14; 20 (d04's example split).
  (c) How rested? 2 + 5 + 7 + 4 + 2 = 20.
  (d) A1: 9 ÷ 25 = 0.36; 4 ÷ 25 = 0.16; 7 ÷ 25 = 0.28; 5 ÷ 25 = 0.20; total 100%.
  (e) Scoreboard stem-and-leaf (d08's data): 0, 4, 7, 12, 15, 18, 21, 24, 24, 33, 36, 41, 58, 63, 87 (15 innings).

Main question: *Bedroom, kitchen, lounge room, other: should these bars touch? Which graph suits a dataset, including categorical data and spreadsheet graphs?*
Entry knowledge (math-s11-d04 to d06b, f08): the bus counts; the type tree; histograms and spreadsheet charts; formulas.
Stops after: categorical tables and column graphs, by hand and in a spreadsheet; choosing and justifying a graph.
Handoff: math-s11-d08: "Next: reading statistical graphs".

## Script and shots

Cue words in **bold** trigger the visual change. Colour roles (fixed): values blue; counts, bars and percentages olive; mean teal; median and quartiles violet; spread amber; categories violet; answer green; mistake red. Header strip "DATA ANALYSIS", with the mini investigation strip ("organise and display" lit). Scene headings in the hand font, 44 px.

### 1. hook: should these bars touch?
> Here's where our twenty students charge their phones. A histogram's bars touch, because the classes meet on a number line. But there's no number line under bedroom and kitchen. Nothing sits halfway between them. So these data need a different graph, and a different kind of table. And every dataset raises the same question. Which graph suits a dataset, including categorical data and spreadsheet **graphs**?

Visual: opens on d06b's final frame exactly. On "Here's where" the "Next" chips fade. On "A histogram's bars touch" the ghost histogram's shared edges glow (grey chip "d06a: classes meet"). On "no number line under bedroom and kitchen" a number line slides under the ghost bars and the labels "bedroom", "kitchen" fall off it with a red flash; on "Nothing sits halfway" a ghost label "bedroom-and-a-half?" is crossed. On "graphs" heading "Choosing a graph" writes on (hand font, 56 px).

### 2. categorical data in tables
> Start with the table. Categorical data are counted, so a frequency table works, with one row for each category. A percentage column makes the counts easier to compare. Twelve of twenty is sixty per cent in the bedroom. Five of twenty, twenty-five per cent, in the kitchen. Then ten per cent and five per cent, adding to a hundred. Tables can also count two categorical variables at once. This is a two-way table. Down the side, where the phone charges. Across the top, how students get to school. Five bus students charge in the bedroom, and seven from nearby. One bus student charges elsewhere, and seven from nearby. The totals check everything. Twelve and eight down the side, six and fourteen across the bottom, twenty in the **corner**.

Visual: stage change: the location table enlarges (44 px) with a new column "Percentage"; rows write: "12 ÷ 20 = 60%", "5 ÷ 20 = 25%", "2 ÷ 20 = 10%", "1 ÷ 20 = 5%"; on "adding to a hundred" "Total 100%" (framed green). On "two-way table" a 2 × 2 table writes at the right with headers "bus | nearby | Total" and rows "bedroom", "elsewhere" (chip "two-way table: two categorical variables at once"); the 20 tokens (bus badges amber-outlined, grey chip "d04: bus 5 of 12, 1 of 8") drop into the cells: "5 | 7 | 12", "1 | 7 | 8"; on "corner" (bold) the totals row "6 | 14 | 20" writes and the whole table frames green.

### 3. column graphs: gaps, and keeping order
> Now graph it. A column graph has one column for each category, with gaps between them, because the categories are separate. The heights are the frequencies, and the vertical axis starts at nought, or the columns would mislead. Give it a title, and label both axes. Because phone location is nominal, the order of the columns doesn't matter. Sorting them, largest first, makes the graph easier to **read**. But not every categorical variable can be sorted. How rested do students feel? Not at all, a little, somewhat, quite, very. That's ordinal. Sort those columns by height, and the order that gave them meaning is gone. Ordinal data keep their **order**.

Visual: stage change (simulation 1): axes (about 1,100 px wide): horizontal "Where the phone charges", vertical "Number of students" from 0 to 14. On "one column for each category" olive columns rise with gaps in the order the answers came in: kitchen 5, bedroom 12, other 1, lounge room 2 (hand tag "categories: gaps"). On "starts at nought" the 0 on the axis glows (hand tag "start at 0"). On "title" a title writes "Where our sample charges phones overnight" and the axis labels pulse. On "nominal" a "sort" button presses; the columns slide into largest-first order: bedroom 12, kitchen 5, lounge room 2, other 1 (hand tag "nominal: any order"; Revision 2, D07-SORT: the sort now visibly changes the graph). On "read" (first bold) a tick. On "How rested" a second graph slides in beside: "not at all 2, a little 5, somewhat 7, quite 4, very 2" with an arrow "more rested →". On "Sort those columns" the sort button presses; the columns shuffle to "somewhat, a little, quite, not at all, very" and the arrow breaks (red flash); on "order" (bold) they snap back (hand tag "ordinal: keep the order").

### 4. a spreadsheet organises and graphs
> A spreadsheet can do the organising and the graphing. Put the twenty raw answers in one column, exactly as they came in. Then let the spreadsheet count them. COUNTIF counts the cells in a range that match what you ask for. Equals COUNTIF, B two to B twenty-one, bedroom, gives twelve. Do the same for each category. For the percentage, divide by twenty, and format the cell as a percentage. Then select the categories and counts, and insert a column chart. Add a title and axis labels, because the spreadsheet won't choose good ones for you. For numerical data, like screen time, you'd make a histogram instead, with the gaps set to zero, like last time. The spreadsheet makes the chart, but you still choose which chart is **right**.

Visual: stage change (simulation 2): an unbranded `SpreadsheetGrid` (about 1,200 px wide) with a formula bar. Column B "Phone charges" fills with 20 raw answers ("bedroom", "kitchen", "bedroom", ...). On "COUNTIF" a chip "COUNTIF: counts the cells that match" (hand tag "COUNTIF counts"); cell F2 selected, formula bar "=COUNTIF(B2:B21,"bedroom")", value 12; F3 to F5 fill "5", "2", "1". On "divide by twenty" G2 "=F2/20" shows "60%"; G3 to G5 "25%", "10%", "5%". On "insert a column chart" a chart appears with gaps and placeholder labels "Chart title", "Series 1"; on "Add a title and axis labels" they rewrite to "Where our sample charges phones overnight", "Location", "Number of students" (hand tag "title and labels"). On "a histogram instead" a small thumbnail of d06b's screen-time chart with its gap slider at 0 (grey chip "d06b: gap to zero"). On "right" (bold) hand tag "menus differ".

### 5. choosing a graph
> So how do you choose a graph for one dataset? Name the data type first. Remember the type tree? It decides most of the choice. Categorical data go in a column graph. If the categories are parts of one whole, like how a budget is split, a sector graph or a divided bar chart also works. Numerical data with a small number of values suit a dot plot, one dot per value above a number line, or a stem-and-leaf plot, which keeps every value. Numerical data with many values get grouped, into a histogram. And if the data change over time, like sales each day, a line graph joins the points in time order, so you can see the rise and **fall**. Then justify your choice by naming the type of data and what the graph lets you **see**.

Visual: stage change (simulation 3): the graph chooser: d05's type tree (grey chip "d05: the type tree") extended with two gates at the top, "Changing over time?" (yes → "line graph" bin) and, on the categorical branch, "Parts of one whole?" (yes → "sector graph or divided bar"; no → "column graph"). The numerical branch ends in "few values: dot plot or stem-and-leaf" and "many values: histogram". Each bin shows a tiny graph icon drawn in the strand colours. On "Categorical data go in a column graph" the column bin lights; on "how a budget is split" the sector bin lights with a small sector graph; on "dot plot" a dot plot draws in its bin; on "stem-and-leaf" a mini stem-and-leaf writes; on "histogram" d06a's histogram thumbnail; on "fall" (first bold) the line bin draws a small rising and falling line (hand tag "over time: line"). On "see" (bold) hand tag "say why".

### 6. four datasets, four graphs
> Let's try four. Where phones charge is categorical, so a column graph, because it compares the categories side by side. The hours of sleep of our twenty students are numerical, with only a few different values, so a dot plot, because it shows every value and where they bunch up. The screen times of thirty students are numerical with almost all different values, so a histogram, because grouping shows the shape. And a phone's battery level every hour of a day changes over time, so a line graph, because it shows the battery running down. One graph per student, for screen time, would be the **slip**. Thirty columns of one show nothing.

Visual: four cards fall through the chooser in turn and land in bins, each bin enlarging briefly to show the real graph: the location column graph (12, 5, 2, 1) with the reason "categorical: compare categories" (framed green); a sleep dot plot (the 20 values from 3 to 9.5 in half hours, blue dots stacked; grey chip "used again in d11") with "numerical, few values: every value shows" (framed green); the screen-time histogram with "numerical, many values: grouping shows the shape" (framed green); a battery line graph from 100% at 7 am falling with a recharge bump at 4 pm (the phone dock badge sits beside it) with "over time: line graph" (framed green). On "slip" a red slip "screen time: one column per student" writes and is crossed (caption "many values: group them, histogram").

### 7. memory aid
> Here's the card. Name the data type first, then choose the graph. Categories get gaps. Numbers on a number line touch. And change over time goes along a **line**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the graph chooser in miniature with its five bins. Main line, hand font 56 px: "Name the data type first, then choose the graph." On "line" the key line, 40 px: "Categories get gaps. Numbers on a number line touch. Change over time goes along a line." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. Twenty-five students named their favourite streaming genre. Comedy nine, drama four, reality seven, and documentary five. Write each as a percentage of the twenty-five students. Then, in a column graph of these data, should the columns touch? Explain. Pause here to answer.

Visual: `QuestionCard`, 40 px: "Twenty-five students named their favourite streaming genre: comedy 9, drama 4, reality 7, documentary 5. (a) Write each as a percentage of the 25 students. (b) In a column graph of these data, should the columns touch? Explain." Picture slot: the television `ms12-television-v1.png` (about 360 px wide). Countdown ring shown full from "Pause here to answer.", then 10 s.

### 9. feedback 1 (brief)
> Divide each count by twenty-five. Comedy thirty-six per cent, drama sixteen, reality twenty-eight, and documentary twenty, adding to a **hundred**. The columns shouldn't touch. Genres are categories, with nothing between them on a number line, so the columns have **gaps**. Saying yes, like a histogram, is the **slip**.

Visual: the card shrinks to the top (30 px). Rows: "9 ÷ 25 = 36%", "4 ÷ 25 = 16%", "7 ÷ 25 = 28%", "5 ÷ 25 = 20%"; on "hundred" "(a) total 100%" (framed green). A small column graph draws with gaps; on "gaps" row "(b) no: categories, so gaps" (framed green). On "slip" a red slip "(b) yes, like a histogram" writes and is crossed (caption "genres are categories"). Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. Choose the most suitable graph for each dataset, and justify your choice. One, a café's coffee sales each day for four weeks. Two, the masses of sixty apples from an orchard. Pause here to answer.

Visual: `QuestionCard`, 40 px: "Choose the most suitable graph for each dataset and justify your choice. (i) A café's coffee sales each day for four weeks. (ii) The masses of 60 apples from an orchard." Picture slot: the coffee cart `ma11-coffee-cart-v1.png` (about 300 px) and the apple crate `ma12-apple-crate-v1.png` (about 300 px). Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> Daily sales change over time, so a line graph, because it shows the rise and fall from day to **day**. Apple mass is continuous numerical, with sixty values, so group them into a histogram, because grouping shows the **shape**. A column for every apple is the **slip**.

Visual: the card shrinks to the top. Two cards fall through the mini chooser; on "day" row "(i) line graph: change over time" (framed green) with a small line; on "shape" row "(ii) histogram: continuous, many values, grouped" (framed green) with a small histogram. On "slip" a red slip "(ii) a column for each apple" writes and is crossed (caption "60 values: group them"). Hold about 1 s.

### 12. handoff: reading statistical graphs
> Choosing a graph is half the skill. The other half is reading one, because in an exam, the graph is usually already drawn. Here's a cricket scoreboard showing a batter's fifteen scores as a stem-and-leaf plot, and around it, a dot plot, a line graph, a sector graph and a divided bar chart. Each one is built to answer a different kind of question. What does each one tell us? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame (as under Decisions, "Handoff"): on "already drawn" the chooser fades; on "cricket scoreboard" the scoreboard plate rises at the centre and the stem-and-leaf writes on its board row by row with its key. On "a dot plot, a line graph, a sector graph and a divided bar chart" the four thumbnails appear around it in turn. On "What does each one tell us?" chip "What does each one tell us?". On "next" chips "Next: reading statistical graphs" and "?". Hold about 2 s. Scene 13 returns to this frame silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Categorical: frequency table, % column, two-way table.
- Column graph: gaps, axis from 0, title, labels.
- Ordinal: keep the categories in order.
- Spreadsheet: =COUNTIF(range,"category"), then chart.
- Choose by type: column, dot plot, histogram, line graph.

Memory aid (framed card, right side, as in scene 7): *Name the data type first, then choose the graph.* Key: *Categories get gaps. Numbers on a number line touch. Change over time goes along a line.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and d08's opening frame.

## Teaching checks

- **Does it explain causes?** Why gaps (1, 3); why the axis starts at 0 (3); why ordinal keeps order (3); why a spreadsheet's counts and chart stay in step (4); why type decides the graph (5, 6).
- **Misconceptions addressed:** touching category bars (1, 3, A1); sorted ordinal data (3); missing labels (4); choosing by look (5, 6, A2).
- **Visual standard, item by item:** 1 the dock, the table and labels falling off a number line in the first 20 s; 2 a new stage every 45 to 70 s; 3 the sort button on nominal and ordinal graphs, the spreadsheet COUNTIF fill and chart, the graph chooser; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 rows with framed answers and crossed slips; 8 framed card and five bullets; 9 the ordinal bars shuffling and snapping back.
- **One idea at a time:** tables (2), column graphs (3), spreadsheet (4), choosing (5), applying (6).
- **Response opportunity:** two unseen tasks with every demand visible; 10 s each; feedback about 23.2 s and 19.3 s.
- **Avoided double teaching:** d05's tree, d06a's histogram and d06b's gap-to-zero chart are grey chips; d08 reads the five previewed displays.
- **Syllabus coverage:** `cic1f6796f` (2 to 4, A1; notes 1 to 3); `ci01aceb17` (5, 6, A2; note 5, key line); `cia127389f` (4; note 4).
- **Out of scope by design:** reading sector graphs and divided bars in detail (d08); misleading axes (d10).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original HSC style, 2 marks suggested, not an official marking scheme).** As on the card.
Model answer: (a) 36%, 16%, 28%, 20%. (b) No: genres are categories with nothing between them, so the columns have gaps. Classic mistake (crossed): "(b) yes, like a histogram".

**Attempt 2 (scene 10; pack question 2, 2 marks suggested).** As on the card.
Model answer: (i) a line graph: daily sales change over time, and the line shows the rise and fall. (ii) a histogram: mass is continuous numerical with many values, so group it to show the shape. Classic mistake (crossed): "(ii) a column for each apple".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Phone location | 12, 5, 2, 1; 60%, 25%, 10%, 5% | 1 to 4, 6 |
| Two-way table | 5, 7, 12; 1, 7, 8; 6, 14, 20 | 2 |
| How rested? | 2, 5, 7, 4, 2 | 3 |
| Spreadsheet | =COUNTIF(B2:B21,"bedroom") → 12; =F2/20 → 60% | 4 |
| Sleep dot plot | the 20 sample values (d11) | 6 |
| A1 | 36%, 16%, 28%, 20% | 8, 9 |
| Stem-and-leaf (d08) | 15 scores 0 to 87 | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated (24 Nov 2026, scratchpad `s11d/verify.py`); Codex to re-check.
- 12, 5, 2, 1 of 20 = 60%, 25%, 10%, 5%.
- Two-way totals: 5 + 7 = 12; 1 + 7 = 8; 5 + 1 = 6; 7 + 7 = 14; 20.
- 2 + 5 + 7 + 4 + 2 = 20.
- A1: 9, 4, 7, 5 of 25 = 36%, 16%, 28%, 20%.
- The COUNTIF formula and "=F2/20" work as written in common spreadsheet programs.

## Memory aid check

- **"Name the data type first, then choose the graph."** with key line **"Categories get gaps. Numbers on a number line touch. Change over time goes along a line."** Original. It ties d05's tree to the choice and gives the three drawing rules. It helps a new case: monthly phone data use over a year (over time: line graph).
- **Considered, not used:** a table of every graph type (too much to hold; the chooser does the work).

## Narration length estimate

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; `work/brief-review-s11-e/count.py`): **5,561 characters** in Revision 2 (Revision 1: 5,561), 13 scene headings. Characters per scene (1 to 13): 404, 737, 648, 730, 718, 635, 158, 284, 308, 206, 257, 389, 75. Feedback speech about 23.2 s and 19.3 s.

At 13.3 characters per second the speech is about 418 s. Holds and settling: two 10 s countdowns (20 s); short holds 6 s; settling for the sorting, the spreadsheet fill and the chooser drops, about 18 s; the key-notes scene adds about 39 s beyond its line. Total **about 501 s**, 69 s under the 570 s cap (Revision 2).

Reserve trims if the voiced take runs long: scene 4's histogram sentence; scene 5's stem-and-leaf clause.

## Scene list and build ids

Lesson key `m-s11d07` (route math-s11-d07). Explainer folder `src/explainer/lessons/math-s11-d07`; build inputs in `docs/production/claude-pm/lessons/math-s11-d07/` (at voicing).

In order (13 scene headings): hook-should-bars-touch, categorical-tables, column-graphs, spreadsheet, choosing-a-graph, four-datasets, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff-reading-graphs, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 30 s | 1 | The dock, the table, labels off a number line |
| 30 to 95 s | 2 | Percentages and the two-way table |
| 95 to 155 s | 3 | Column graphs; the sort button |
| 155 to 220 s | 4 | The spreadsheet |
| 220 to 280 s | 5 | The graph chooser |
| 280 to 330 s | 6 | Four datasets |
| 330 to 345 s | 7 | Framed memory card |
| 345 to 430 s | 8 to 11 | Question cards and countdowns, then feedback |
| 430 to 460 s | 12 | The scoreboard gallery |
| 460 to 505 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: d06b's last frame continues into 1; 1 to 2 the table enlarges; 2 to 3 stage change; 3 to 4 stage change; 4 to 5 stage change; 5 to 6 the chooser stays; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s11-d07-learning-review.md`, `science_check` = `checks/m-s11-d07-maths-check.md`.

## Assets

Inspected before choosing (24 Nov 2026, viewed on contact sheets): `ma12-phone-dock-v1.png`; `ms12-television-v1.png` (a flat-screen TV with a price tag; used as a streaming anchor, the tag left blank); `ma11-coffee-cart-v1.png`; `ma12-apple-crate-v1.png` (a wooden crate of red and green apples); `ma12-cricket-scoreboard-v1.png` (a white-roofed scoreboard with a blank green board).

Need: none new. Reused: the five plates above.

Coded: the tables, two-way table, column graphs and sort button, spreadsheet grid and chart, graph chooser and bins, dot plot, battery line graph, stem-and-leaf and thumbnails, boards, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `InvestigationStrip` (mini), `TypeTree` (d05), `FrequencyTable`, `ClassHistogram`, `SpreadsheetGrid` (with d06b's chart insert), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row d07):
1. **`ColumnGraph`**: categorical columns with gaps, title and axis labels, an axis from zero, and a sort action with a locked-order mode for ordinal data (shuffle, red flash, snap back). Check: 12, 5, 2, 1; rested 2, 5, 7, 4, 2. Reused d08, d10.
2. **`TwoWayTable`**: a grid that fills from badge tokens with row and column totals. Check: 5, 7, 12; 1, 7, 8; 6, 14, 20.
3. **`SpreadsheetGrid` COUNTIF demo**: raw text answers, COUNTIF cells and a percentage column, linked to the chart. Check: 12, 5, 2, 1; 60%, 25%, 10%, 5%.
4. **`GraphChooser`**: the `TypeTree` with "over time?" and "parts of one whole?" gates and graph bins that show a mini graph of the dropped dataset with a reason line. Check: four datasets to column, dot plot, histogram, line.
5. **`DotPlot`** (first use): dots stacked above a number line from a value list. Check: the 20 sleep values (3 to 9.5). Reused d08, d11, d15, d16.

## Codex asset brief

No new plate. All five plates exist and were viewed.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify".
2. Confirm the syllabus quotes match the route-inputs JSON exactly.
3. Confirm "column graph" is the 2024 syllabus term and that gaps between columns are standard for categorical data.
4. Confirm both attempts carry every demand and show no answer.
5. Confirm scene 1 opens on d06b's final frame exactly and scene 12 matches d08's Boundary.
6. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Choosing a Graph: Column Graphs and Spreadsheet Charts | Year 11 Maths Standard

(Title length: 79 characters.)

Description: Related lesson notes: https://hscscience.com.au/subjects/maths-standard/year11/data-analysis/lesson12.sa.html

Bedroom, kitchen, lounge room: should these bars touch? Learn to show categorical data in frequency tables, percentage columns and two-way tables, draw column graphs with gaps (keeping ordinal data in order), use a spreadsheet's COUNTIF and charts to organise and graph data, and choose and justify the best graph for a dataset from its type. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 11, Data analysis. For Standard 1 and Standard 2.
Syllabus content (NSW Mathematics Standard 11-12, 2024, Year 11):
"Represent categorical datasets in tables and column graphs as appropriate, with and without using digital tools"
"Select the type of graph best suited to represent various single datasets and justify the choice of graph"
"Use a spreadsheet to organise and represent data using appropriate graphs"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa4de413b8

Builds on: Cumulative Frequency: Tables, Histograms and Polygons. Next: Reading Statistical Graphs: Dot Plots to Divided Bars.

#Year11Maths #MathsStandard #Statistics #HSCScience

## Open decisions

- **1. Title.** Shortened to 79 characters ("Choosing a Graph: Column Graphs and Spreadsheet Charts"); d06b's "Next" line uses it.

## Review notes

- Revision 1. Next: student learning review (trace from d06b; check that gaps get their reason before the rule, that the ordinal sort failure is visible, that each spreadsheet formula is spoken with its meaning, that every choice in scene 6 has a "because", and that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
- Revision 2 (24 Nov 2026): learning review resolved (D07-SORT; D07-NEARBY held with D05-TRAVEL). Next: Codex maths check and error check, then voicing and a build to grade A.

## Revision 3 (root, 25 November 2026): preflight and fact repairs

This section overrides earlier text. Sources: `../checks/m-s11-d07-maths-check.md`, `../checks/maths-standard-y11-official-facts.md` and `../checks/brief264-fact-checks-2026-11-24.md`. Repair log: `../checks/m-s11-preflight-repair-2026-11-25.md`.

- **Count (count-mismatch): fixed.** The declared 5,561 included the spaces between scenes; the sum of the 13 scene strings at Revision 2 was 5,549 (Codex's value). Narration is **5,549 characters**. Counted in Python the same way as Codex (`> ` lines inside each `### N.` scene joined with a space, `**` removed, scenes summed with no separator; Revision 2 sum matches `work/brief272/source-inventory.json`). At 13.3 characters per second the speech is about 417 s; total about 500 s with holds, under the 570 s cap. The header line is updated; earlier totals under "Narration length estimate" and in Revision 2 are superseded.
- **Official facts:** none in the fact sheets apply to this design.
- **Recurring data.** The recurring constructed data (the 20-student sleep sample, the 12/8 bedroom and elsewhere split, the screen-time values, the nearby and bus splits) are unchanged, so they stay consistent across the strand; brief 272's recurring-data check passed them. They are teaching data, not population estimates.
- **Narration changed: no.**
- No em or en dashes added. Ready for the Codex re-check; human listening still pending.
