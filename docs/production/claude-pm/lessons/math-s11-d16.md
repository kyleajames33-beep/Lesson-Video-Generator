# Maths S11 D16: How do we draw and read a box plot, including from a histogram or dot plot? Five numbers, one box, two whiskers; a quarter of the data in each section; conclusions and inferences; and box plots from dot plots, histograms and apps (design)

Status: Revision 1 (24 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), `math-s11-d01.md` to `d15.md` (Revision 1, this batch), the coherence audit and root's Standard rulings 1 to 99. Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,538 characters by script (see "Narration length estimate"), 13 scene headings, about 499 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: seventeenth video of the Year 11 Data analysis strand, outline playlist order 76. One video for Standard 1 and Standard 2. Viewers arrive from d15's final frame. Pre-design pack: `../pre-design/maths-standard/math-s11-d16.md`. Route entry: `math-s11-d16` in `../../programme/maths-standard-route-inputs-14.json`. Site lesson: `year11/data-analysis/lesson13.sa.html` (card 08; MC 3); dot plot and histogram sources and digital tools are taught from the syllabus (MSY-46). Visual system: maths studio kit; the alarm clock, bedroom, cricket ball, phone and phone dock plates (all existing); the box plots, dot plots, histogram and app screen coded.

Owner rules applied: as d01 (header strip "DATA ANALYSIS" only; one question; one stage at a time; plain meanings; two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors; no people, hands or faces; unbranded software; Australian spelling; no em dashes).

Syllabus content points (Mathematics Standard 11-12 (2024), Year 11, Data analysis, "Five-number summary and box plots", common to Standard 1 and Standard 2), quoted from `../../programme/maths-standard-route-inputs-14.json`:

- `ci4c0893da`: "Represent numerical datasets using a box plot to display a five-number summary, with and without using digital tools"
- `ci2d7c794d`: "Determine quartiles from datasets displayed in histograms and dot plots, and represent these datasets as a box plot"
- `cic5161f3b`: "Interpret box plots to draw conclusions and make inferences about a dataset"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa4de413b8

**Boundary:** starts from d15's final frame exactly (the alarm clock `ma11-alarm-clock-v1.png` small at the top left; the five-number card (52 px) "3 | 6.5 | 7.5 | 8 | 9.5" with labels "min, Q1, median, Q3, max" above an empty number line "Hours of sleep" from 2 to 10, about 1,300 px wide, with five dashed ticks at 3, 6.5, 7.5, 8 and 9.5 (Q1, median, Q3 violet; min and max blue); chips "Five numbers, one picture?", "Next: box plots" and "?"). Recalls d15 (quartiles; five-number summary), d08 (dot plots), d06a (histograms), d11 (running totals find positions), d09 (skew) and d01 (the guideline) in grey chips. Teaches: drawing a box plot; reading it; conclusions and inferences; box plots from a dot plot and from a single-value histogram; box plots from an app. Not taught: outliers drawn separately (d18); parallel box plots (d17).

## Decisions

- **Anchor: the five ticks become a box (d15's frame).** The box grows from Q1 to Q3, the median line drops in, and the whiskers reach out to the minimum and maximum. The sleep dataset's box plot is then read for conclusions about the 8 to 10 hour guideline (d01), closing the investigation's "conclude" step for one group.
- **A quarter in each section, whatever its length (visual surprise).** The 20 dots slide down into the four sections: five in the long left whisker's stretch (3 to 6.5) and five in the short box half (7.5 to 8). Length shows spread, not how many.
- **Whiskers to the minimum and maximum here.** The point asks for "a box plot to display a five-number summary". The version with outliers drawn as separate points (site lesson13) is taught in d18, after outliers are defined; a grey chip "outliers: later" marks the 3 h night.
- **Reading and inference.** Conclusions about the sample: about a quarter slept 6.5 h or less; the middle half slept between 6.5 and 8 h; at least half slept 7.5 h or more; more than half slept under the 8-hour guideline (13 of 20). Shape: the left whisker (3.5 h) is much longer than the right (1.5 h) and the median sits nearer Q3: negatively skewed (d09's tail rule on a box plot). An inference reaches beyond the sample, with caution: "This suggests many Year 11 students at our school sleep less than the guideline, though it is one sample on one night." Plain meanings: conclusion ("a statement about the data you have"); inference ("a careful statement about the wider population, based on the sample").
- **Quartiles from graphs (`ci2d7c794d`).** A dot plot: count dots to the positions (wickets: 16 matches; Q1 between the 4th and 5th dots, 1; median 2; Q3 3). A histogram where each bar is a single value (screens: bars 3, 7, 6, 4): a running total finds which bar holds each position (Q1 1, median 1.5, Q3 2). For grouped histograms (classes), the quartiles can only be estimated, said in one sentence.
- **Digital tools.** A statistics app or spreadsheet chart draws a box plot from a list: paste the values, choose "box plot". Two settings to check: its quartile rule (d15's caution) and whether it shows outliers as separate points (d18). Coded and unbranded.
- **Plain meanings at first use.** Box plot ("a picture of the five-number summary: a box from Q1 to Q3 with a line at the median, and whiskers out to the smallest and largest values"); whisker ("the line from the box to the minimum or maximum").
- **Simulations (standard item 3).**
  1. **Box build and quarter slide** (scenes 2, 3): the box and whiskers grow from the ticks; the dots slide into the four sections with a counter "5 | 5 | 5 | 5".
  2. **Dot-count cursor** (scene 4): a cursor counts dots left to right, stopping at each quartile position, then the box plot draws beneath the dot plot.
  3. **Histogram positions** (scene 5): a running-total column beside the bars; markers find the 5th and 6th, 10th and 11th, 15th and 16th values; the box plot draws beneath.
- **Colour roles (strand, fixed).** As d01: values blue; counts and bars olive; mean teal; median and quartiles (box lines, median line) violet; spread (IQR span, whiskers' lengths) amber; answer green; mistake red.
- **Large type, handwritten voice.** Labels 40 px; working 52 px; nothing below 26 px; all text above y = 950. Hand tags: "box: Q1 to Q3", "line: median", "whiskers: min and max", "a quarter in each", "length = spread, not count", "long whisker = tail", "about a quarter", "suggests, carefully", "count the dots", "running total finds it", "check the settings". At most two live at once.
- **Stage changes (standard item 2).** The ticks (1); the box build (2); the quarter slide and reading (3); the dot plot source (4); the histogram source (5); the app (6); framed card (7); question cards (8 to 11); two box plots on one scale (12); key notes (13).
- **Worked examples (g01 order).** Scene 3: "about a quarter: 6.5 h or less | middle half: 6.5 to 8 h | at least half: 7.5 h or more" (framed green); "shape: negatively skewed" (framed green). Scene 4: "wickets: 0 | 1 | 2 | 3 | 5" (framed green). Scene 5: "screens: 0 | 1 | 1.5 | 2 | 3" (framed green); crossed slip in scene 3: "the left whisker holds the most students" (caption "each section holds about a quarter").
- **Memory aid.** Framed card: "Five numbers, one box, two whiskers." Key line: "Each section holds about a quarter of the data. A long whisker, or a median off-centre, points to the tail."
- **Attempts.** A1 (pack question 1): 8, 11, 14, 17, 24; crossed "Q1 = 10" (caption "Q1 is between the 3rd and 4th values"). A2 (pack question 2): 75%; negatively skewed; crossed "(a) 50%" (caption "14 is Q1: three quarters are above").
- **Mistake scene:** none separate. Length as count (3); box from min to max (2); halfway on the axis instead of counting dots (4, A1); quartile percentages (A2).
- **Cause chain taught, in order:** (1) the five numbers split ordered data into four groups with equal counts, so drawing them as a box and whiskers shows each quarter as a section (2, 3); (2) the sections have equal counts but different lengths, so a long section means the values there are spread out, which is how a box plot shows the tail and the skew (3); (3) quartiles depend on positions in order, so on a dot plot or a single-value histogram you count to the positions rather than measuring the axis (4, 5); (4) an app follows rules you can't see, so its settings decide the quartiles and whether outliers appear (6).
- **Entry knowledge (route):** math-s11-d15 (quartiles), d08 (dot plots), d06a (histograms), d11 (running totals), d09 (skew), d01 (the guideline). Recalled in grey chips.
- **Site notes.** MSY-46 (fences before outliers; no histogram or dot plot source; no digital tools; WE 2 and SA 2 errors).
- **Handoff (to math-s11-d17, parallel box plots).** Scene 12: board clear; the bedroom `ms12-bedroom-furniture-v1.png` (about 600 px wide) at the top left; one number line "Hours of sleep" 2 to 10 (about 1,300 px wide) with two box plots stacked above it: "phone in bedroom" (whiskers 3 and 8.5, box 6 to 7.5, median 6.75) and "elsewhere" (whiskers 7 and 9.5, box 7.5 to 8.75, median 8); chips "Two boxes, one scale?", "Next: parallel box plots" and "?". d17 opens on this frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Sleep: whiskers 6.5 − 3 = 3.5 and 9.5 − 8 = 1.5; median 7.5 is 1 above Q1 and 0.5 below Q3; values ≤ 6.5: 6 (30%, "about a quarter"; ties at 6.5); 6.5 to 8: 12; ≥ 7.5: 11; < 8: 13 (65%). The quarter-slide puts the dots by position: positions 1 to 5, 6 to 10, 11 to 15, 16 to 20.
  (b) Wickets: positions 1, 2 (0); 3 to 6 (1); 7 to 11 (2); 12 to 14 (3); 15 (4); 16 (5). Q1 (4th + 5th) ÷ 2 = 1; median (8th + 9th) ÷ 2 = 2; Q3 (12th + 13th) ÷ 2 = 3.
  (c) Screens: running totals 3, 10, 16, 20; 5th and 6th are 1; 10th 1 and 11th 2; 15th and 16th 2.
  (d) A1: Q1 (10 + 12) ÷ 2 = 11; median (14 + 14) ÷ 2 = 14; Q3 (16 + 18) ÷ 2 = 17.
  (e) A2: whiskers 14 − 9 = 5 and 19 − 17 = 2; median 2 above Q1, 1 below Q3.
  (f) Groups (d17): bedroom 3, 6, 6.75, 7.5, 8.5; elsewhere 7, 7.5, 8, 8.75, 9.5.

Main question: *Five numbers sum up twenty nights. How do we draw and read a box plot, including from a histogram or dot plot?*
Entry knowledge (math-s11-d15, d08, d06a, d11, d09, d01): quartiles; dot plots; histograms; running totals; skew; the guideline.
Stops after: drawing, reading and inferring from box plots; box plots from dot plots, histograms and apps.
Handoff: math-s11-d17: "Next: parallel box plots".

## Script and shots

Cue words in **bold** trigger the visual change. Colour roles (fixed): values blue; counts and bars olive; mean teal; median and quartiles violet; spread amber; answer green; mistake red. Header strip "DATA ANALYSIS", with the mini investigation strip ("organise and display", then "conclude" lit). Scene headings in the hand font, 44 px.

### 1. hook: five numbers, one picture
> Five numbers sum up our twenty nights of sleep. Three, six and a half, seven and a half, eight, and nine and a half. On a number line they already hint at a shape, a short middle, and a long stretch to the left. Turn them into a picture, and you can read the centre, the spread and the shape in a single glance. That picture is a box plot. So how do we draw and read a box plot, including from a histogram or dot **plot**?

Visual: opens on d15's final frame exactly. On "Five numbers" the "Next" chips fade and the five-number card pulses. On "a short middle" the gap 6.5 to 8 glows; on "a long stretch to the left" the gap 3 to 6.5 glows. On "box plot" a ghost box plot flickers over the ticks and fades. On "plot" heading "Box plots" writes on (hand font, 56 px).

### 2. drawing a box plot
> A box plot is a picture of the five-number summary. Start with a number line, with a scale that covers the data. Draw a box from Q one to Q three, here from six and a half to eight. Draw a line inside the box at the median, seven and a half. Then draw the whiskers, lines out from the box to the minimum, three, and the maximum, nine and a **half**. That's it. Five numbers, one box, and two whiskers. Some box plots show unusual values as separate dots, and we'll meet those later. For now, the whiskers reach the smallest and largest values.

Visual: stage change (simulation 1): the number line enlarges (about 1,500 px wide). On "a box from Q one to Q three" a violet box grows sideways from the 6.5 tick to the 8 tick (hand tag "box: Q1 to Q3"). On "a line inside the box at the median" a violet line drops at 7.5 (hand tag "line: median"). On "the whiskers" two blue lines extend from the box to 3 and to 9.5 with end caps; on "half" (first bold) the whole box plot frames green and its five values label under it (40 px) (hand tag "whiskers: min and max"). On "unusual values as separate dots" the 3 end of the whisker flickers with a grey chip "outliers: later".

### 3. a quarter in each section
> Here's the key to reading a box plot. The five numbers split the data into four sections, and each section holds about a quarter of the values. Watch the twenty dots drop in. Five land between three and six and a half. Five between six and a half and seven and a half. Five between seven and a half and eight. And five between eight and nine and a half. The left whisker is long, but it holds no more students than the short part of the box. Length shows spread, not how many. So about a quarter slept six and a half hours or less. The middle half slept between six and a half and eight. And at least half slept seven and a half hours or more. The long left whisker and the median sitting nearer Q three both point to a tail on the left, so the data are negatively **skewed**. Saying the left whisker holds the most students is a classic **slip**.

Visual: the sleep dot plot appears above the box plot (d07's, grey chip "d07: the 20 sleep values"); on "Watch the twenty dots drop in" the dots slide down by position into the four sections, with a counter under each section "5 | 5 | 5 | 5" (hand tag "a quarter in each"). On "Length shows spread" the left whisker's span (3.5) and the right half of the box (0.5) glow amber with their lengths (hand tag "length = spread, not count"). Reading rows, 40 px: "about a quarter: 6.5 h or less", "middle half: 6.5 to 8 h", "at least half: 7.5 h or more" (framed green as a set; hand tag "about a quarter"). On "skewed" (first bold) the left whisker glows with a tail pointer (grey chip "d09: the tail tells the skew"); row "shape: negatively skewed" (framed green; hand tag "long whisker = tail"). On "slip" a red slip "the left whisker holds the most students" writes and is crossed (caption "each section holds about a quarter").

### 4. what can we conclude?
> Now use it to answer our question. The guideline for teenagers is eight to ten hours. The median is seven and a half, below eight, so more than half our sample slept less than the guideline. In fact, Q three is eight, so about three quarters slept eight hours or less. That's a conclusion, a statement about the data we have. An inference goes further, to the population. It suggests that many Year 11 students at our school sleep less than the guideline on school nights. Notice the careful word, suggests, because this was one sample of twenty, on one **night**.

Visual: the box plot stays; on "eight to ten hours" a green band 8 to 10 shades over the number line (grey chip "d01: guideline 8 to 10 h"). On "The median is seven and a half, below eight" the median line glows left of the band; on "more than half" the two left sections tint (row "13 of 20 under 8 h", olive). On "Q three is eight" the Q3 line touches the band's edge; row "about three quarters: 8 h or less". On "That's a conclusion" chip "conclusion: about our data". On "An inference" chip "inference: about the population, carefully"; the 200-dot population field badge (d01's, about 300 px) appears beside the box plot with the sample's 20 dots lit. On "night" (bold) hand tag "suggests, carefully".

### 5. box plots from a dot plot and a histogram
> Exam questions often give a dot plot or a histogram instead of a list. You can still find the quartiles, by counting. Here's the bowler's wickets from sixteen matches. Count dots from the left. Q one is between the fourth and fifth dots, both one wicket. The median is between the eighth and ninth, both two. Q three is between the twelfth and thirteenth, both three. So the box goes from one to three, with a line at two, and whiskers to nought and **five**. A histogram where each bar is a single value works the same way, with a running total. The screens histogram has bars of three, seven, six and four. The running totals are three, ten, sixteen and twenty. The fifth and sixth values are ones, so Q one is one. The tenth is one and the eleventh is two, so the median is one and a half. And the fifteenth and sixteenth are twos, so Q three is **two**. If the bars are grouped classes, you can only estimate the quartiles.

Visual: stage change (simulation 2): the cricket ball badge (about 200 px) and the wickets dot plot (d08's; grey chip "d08: wickets"); a cursor counts dots left to right with a counter; it pauses at 4 and 5 ("Q1 = 1"), 8 and 9 ("median = 2"), 12 and 13 ("Q3 = 3") (hand tag "count the dots"); on "five" (first bold) a box plot draws beneath the dot plot, row "wickets: 0 | 1 | 2 | 3 | 5" (framed green). Simulation 3: on "A histogram" the screens histogram (d06a's, bars 3, 7, 6, 4; grey chip "d06a: screens") with a running-total column "3, 10, 16, 20" (hand tag "running total finds it"); markers find positions 5 and 6, 10 and 11, 15 and 16; on "two" (bold) a box plot draws beneath, row "screens: 0 | 1 | 1.5 | 2 | 3" (framed green). On "grouped classes" a small grouped histogram badge with chip "classes: estimate only".

### 6. with digital tools
> Apps and spreadsheets can draw box plots too. Paste in the values, choose box plot, and it appears. Check two settings before you trust it. First, how it finds the quartiles, because some tools use a slightly different rule from the halves method. Second, whether it shows unusual values as separate dots. Some do that automatically, and then the whisker stops short of the minimum. Draw it by hand once, and you'll know what the tool should **show**.

Visual: stage change: the phone dock `ma12-phone-dock-v1.png` (about 460 px tall) with a coded statistics-app screen: a paste box with the 20 values and a "box plot" button; on "it appears" a horizontal box plot draws on the screen. On "Check two settings" a settings panel slides in, 36 px: "quartile method: halves | other" and "show outliers: on | off" (hand tag "check the settings"). On "whether it shows unusual values" the toggle flips to "on" and the app's left whisker shortens to 5.5 with a separate dot at 3 (grey chip "outliers: d18"); it flips back. On "show" the hand-drawn box plot slides beside the app's for comparison (both match with outliers off).

### 7. memory aid
> Here's the card. Five numbers, one box, two whiskers. Each section holds about a quarter of the data. And a long whisker, or a median that's off-centre, points to the **tail**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the sleep box plot with "5 | 5 | 5 | 5" under its sections. Main line, hand font 56 px: "Five numbers, one box, two whiskers." On "tail" the key line, 40 px: "Each section holds about a quarter of the data. A long whisker, or a median off-centre, points to the tail." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. A dot plot shows the points a basketball player scored in twelve games. Eight, ten, ten, twelve, thirteen, fourteen, fourteen, fifteen, sixteen, eighteen, twenty and twenty-four. Find the five-number summary, and describe the box plot you would draw. Pause here to answer.

Visual: `QuestionCard`, 40 px: "A dot plot shows the points a basketball player scored in 12 games: 8, 10, 10, 12, 13, 14, 14, 15, 16, 18, 20, 24. Find the five-number summary and describe the box plot you would draw." Picture slot: the dot plot drawn (axis 6 to 26). Countdown ring shown full from "Pause here to answer.", then 10 s.

### 9. feedback 1 (brief)
> Twelve values, so the median is between the sixth and seventh, fourteen and fourteen, **fourteen**. Q one is between the third and fourth, ten and twelve, so eleven. Q three is between sixteen and eighteen, **seventeen**. So a box from eleven to seventeen, a line at fourteen, and whiskers to eight and twenty-four. Taking ten for Q one is the **slip**.

Visual: the card shrinks to the top (30 px). A counting cursor over the dots; on "fourteen" (first bold) "median = 14"; "Q1 = (10 + 12) ÷ 2 = 11"; on "seventeen" "Q3 = (16 + 18) ÷ 2 = 17". A box plot draws; row "8 | 11 | 14 | 17 | 24" (framed green). On "slip" a red slip "Q1 = 10" writes and is crossed (caption "Q1 is between the 3rd and 4th values"). Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. A box plot of the battery life of a phone model, in hours, shows a minimum of nine, Q one fourteen, a median of sixteen, Q three seventeen, and a maximum of nineteen. What percentage of the phones lasted fourteen hours or more? And describe the shape of the distribution. Pause here to answer.

Visual: `QuestionCard`, 40 px: "A box plot of the battery life (hours) of a phone model shows minimum 9, Q1 14, median 16, Q3 17, maximum 19. (a) What percentage of the phones lasted 14 hours or more? (b) Describe the shape of the distribution." Picture slot: the box plot drawn on a scale 8 to 20, and the phone `ma12-phone-v1.png` (about 220 px tall). Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> Fourteen is Q one, so a quarter of the phones are below it, and three quarters, seventy-five per cent, lasted fourteen hours or **more**. The left whisker is five hours long, against two on the right, and the median sits closer to Q three, so it's negatively **skewed**. Answering fifty per cent is the **slip**.

Visual: the card shrinks to the top. The three sections right of Q1 tint; on "more" row "(a) 75%" (framed green). The whiskers glow with lengths "5" and "2"; a tail pointer on the left; on "skewed" row "(b) negatively skewed: long left whisker" (framed green). On "slip" a red slip "(a) 50%" writes and is crossed (caption "14 is Q1: three quarters are above"). Hold about 1 s.

### 12. handoff: parallel box plots
> One box plot describes one group. But our investigation compared two. Draw both groups on the same scale, one above the other. The bedroom group's box sits lower, and stretches further left. The elsewhere group's box sits higher, and it's narrower. How do you compare two box plots properly, centre, spread and shape? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame (as under Decisions, "Handoff"): the bedroom plate at the top left; on "Draw both groups on the same scale" the number line 2 to 10 and the two box plots draw, "phone in bedroom" (3, 6, 6.75, 7.5, 8.5) then "elsewhere" (7, 7.5, 8, 8.75, 9.5). On "sits lower" the bedroom box pulses; on "narrower" the elsewhere box pulses. On "properly" chip "Two boxes, one scale?". On "next" chips "Next: parallel box plots" and "?". Hold about 2 s. Scene 13 returns to this frame silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Box: Q1 to Q3; line at the median; whiskers to min and max.
- Each section holds about a quarter of the data.
- Long whisker or off-centre median: the tail's side.
- Dot plot or histogram: count to the positions.
- Apps: check the quartile rule and outlier setting.

Memory aid (framed card, right side, as in scene 7): *Five numbers, one box, two whiskers.* Key: *Each section holds about a quarter of the data. A long whisker, or a median off-centre, points to the tail.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and d17's opening frame.

## Teaching checks

- **Does it explain causes?** Why a box and whiskers show quarters (2, 3); why length is spread, not count (3); why counting finds quartiles on graphs (5); why app settings matter (6); why an inference needs care (4).
- **Misconceptions addressed:** length as count (3); box from min to max (2); halfway on the axis (5, A1); quartile percentages (A2); over-claiming (4).
- **Visual standard, item by item:** 1 the five ticks and a ghost box in the first 20 s; 2 a new stage every 40 to 70 s; 3 the box build, the quarter slide with equal counts, the dot-count cursor and running totals, the app toggle; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 rows with framed answers and crossed slips; 8 framed card and five bullets; 9 five dots landing in the long whisker and five in the short box half.
- **One idea at a time:** drawing (2), reading (3), concluding (4), graph sources (5), tools (6).
- **Response opportunity:** two unseen tasks with every demand visible; 10 s each; feedback about 25.6 s and 22.6 s.
- **Avoided double teaching:** d15's quartiles and d09's skew are grey chips; outliers are left to d18.
- **Syllabus coverage:** `ci4c0893da` (2, 6, A1; notes 1, 5); `ci2d7c794d` (5, A1; note 4); `cic5161f3b` (3, 4, A2; notes 2, 3).
- **Out of scope by design:** outlier box plots (d18); estimating quartiles from grouped histograms.

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original HSC style, 2 marks suggested, not an official marking scheme).** As on the card.
Model answer: 8, 11, 14, 17, 24: a box from 11 to 17 with a line at 14, whiskers to 8 and 24. Classic mistake (crossed): "Q1 = 10".

**Attempt 2 (scene 10; pack question 2, 2 marks suggested).** As on the card.
Model answer: (a) 75%. (b) Negatively skewed: the left whisker (5 h) is longer than the right (2 h) and the median is closer to Q3. Classic mistake (crossed): "(a) 50%".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Sleep | 3, 6.5, 7.5, 8, 9.5; whiskers 3.5 and 1.5; 13 of 20 under 8 h | 1 to 4, 6 |
| Wickets | 0, 1, 2, 3, 5 | 5 |
| Screens | 0, 1, 1.5, 2, 3 | 5 |
| A1 | 8, 11, 14, 17, 24 | 8, 9 |
| A2 | 75%; whiskers 5 and 2 | 10, 11 |
| Groups (d17) | 3, 6, 6.75, 7.5, 8.5; 7, 7.5, 8, 8.75, 9.5 | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated (24 Nov 2026, scratchpad `s11d/stats.py`, `python -I`, halves method); Codex to re-check.
- Sleep: five-number 3, 6.5, 7.5, 8, 9.5; positions per section 5 each; values under 8: 13.
- Wickets: 0, 1, 2, 3, 5. Screens: 0, 1, 1.5, 2, 3.
- A1: 8, 11, 14, 17, 24. A2: whiskers 5 and 2.
- Groups: bedroom 3, 6, 6.75, 7.5, 8.5; elsewhere 7, 7.5, 8, 8.75, 9.5.

## Memory aid check

- **"Five numbers, one box, two whiskers."** with key line **"Each section holds about a quarter of the data. A long whisker, or a median off-centre, points to the tail."** Original. The main line is the drawing rule; the key line is the reading rule that fixes the length-as-count slip. It helps a new case: a box plot of commute times with a long right whisker (positively skewed; the top quarter spread over many minutes).
- **Considered, not used:** "box and whisker" naming jokes.

## Narration length estimate

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; `work/brief-review-s11-e/count.py`): **5,538 characters**, 13 scene headings. Characters per scene (1 to 13): 418, 539, 839, 560, 919, 447, 172, 283, 341, 303, 300, 330, 75. Feedback speech about 25.6 s and 22.6 s.6 s and 22.6 s.

At 13.3 characters per second the speech is about 416 s. Holds and settling: two 10 s countdowns (20 s); short holds 6 s; settling for the build, the dot slide, the counting cursor and the app toggle, about 18 s; the key-notes scene adds about 39 s beyond its line. Total **about 499 s**, 71 s under the 570 s cap.

Reserve trims if the voiced take runs long: scene 5's grouped-classes sentence; scene 6's last sentence.

## Scene list and build ids

Lesson key `m-s11d16` (route math-s11-d16). Explainer folder `src/explainer/lessons/math-s11-d16`; build inputs in `docs/production/claude-pm/lessons/math-s11-d16/` (at voicing).

In order (13 scene headings): hook-one-picture, drawing-box-plot, quarter-in-each, conclusions, from-dot-plot-and-histogram, digital-tools, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff-parallel, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 30 s | 1 | The five ticks |
| 30 to 70 s | 2 | The box build |
| 70 to 145 s | 3 | The quarter slide and reading |
| 145 to 185 s | 4 | Conclusions and inference |
| 185 to 260 s | 5 | Dot plot and histogram sources |
| 260 to 295 s | 6 | The app |
| 295 to 310 s | 7 | Framed memory card |
| 310 to 405 s | 8 to 11 | Question cards and countdowns, then feedback |
| 405 to 430 s | 12 | Two box plots on one scale |
| 430 to 475 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: d15's last frame continues into 1; 1 to 2 the ticks grow into the box; 2 to 3 the dot plot appears above; 3 to 4 the band shades in; 4 to 5 stage change; 5 to 6 stage change; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s11-d16-learning-review.md`, `science_check` = `checks/m-s11-d16-maths-check.md`.

## Assets

Inspected before choosing (24 Nov 2026, viewed on contact sheets): `ma11-alarm-clock-v1.png`; `ms12-bedroom-furniture-v1.png`; `ma12-cricket-ball-v1.png`; `ma12-phone-dock-v1.png`; `ma12-phone-v1.png`.

Need: none new. Reused: the five plates above.

Coded: the number line, box plots, dot plots, the counting cursor, the histogram and running totals, the guideline band, the population badge, the app screen and settings panel, boards, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `InvestigationStrip` (mini), `DotPlot` (d07), `ClassHistogram`, `FiveNumberCard` (d15), `DotField` (d01), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row d16):
1. **`BoxPlot`** (first use): a horizontal box plot from five numbers on a scale, with a grow-in build (box, median line, whiskers), optional stacking (parallel), and an outlier mode (whisker to the furthest non-outlier, outliers as dots; d18). Check: 3, 6.5, 7.5, 8, 9.5. Reused d17 to d19.
2. **Quarter slide**: a dot plot's dots slide by position into the box plot's four sections with section counters. Check: 5, 5, 5, 5.
3. **Dot-count cursor** for `DotPlot` and **running-total positions** for a single-value histogram, each stopping at quartile positions and drawing a linked `BoxPlot`. Check: wickets 1, 2, 3; screens 1, 1.5, 2.
4. **Statistics-app box plot screen** with settings toggles (quartile method; show outliers). Check: outliers on gives a whisker to 5.5 and a dot at 3.

## Codex asset brief

No new plate. All five plates exist and were viewed.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify".
2. Confirm the syllabus quotes match the route-inputs JSON exactly.
3. Confirm that drawing whiskers to the minimum and maximum (with the outlier version taught in d18) is consistent with NSW Standard practice.
4. Confirm both attempts carry every demand and show no answer.
5. Confirm scene 1 opens on d15's final frame exactly and scene 12 matches d17's Boundary.
6. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Box Plots: Drawing and Reading Them | Year 11 Maths Standard

(Title length: 60 characters.)

Description: Related lesson notes: https://hscscience.com.au/subjects/maths-standard/year11/data-analysis/lesson13.sa.html

Five numbers sum up twenty nights of sleep. Learn to draw a box plot from a five-number summary, read it (each section holds about a quarter of the data, so length shows spread, not count), draw conclusions and careful inferences, find quartiles from dot plots and histograms by counting, and check a box plot drawn by an app. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 11, Data analysis. For Standard 1 and Standard 2.
Syllabus content (NSW Mathematics Standard 11-12, 2024, Year 11):
"Represent numerical datasets using a box plot to display a five-number summary, with and without using digital tools"
"Determine quartiles from datasets displayed in histograms and dot plots, and represent these datasets as a box plot"
"Interpret box plots to draw conclusions and make inferences about a dataset"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa4de413b8

Builds on: Quartiles, the Five-Number Summary and the IQR. Next: Parallel Box Plots: Comparing Two Groups.

#Year11Maths #MathsStandard #Statistics #HSCScience

## Open decisions

- **1. Whiskers to min and max first.** The site draws fence-limited whiskers from the start; the design draws the five-number version here and the outlier version in d18, after outliers are defined. Root confirms.

## Review notes

- Revision 1. Next: student learning review (trace from d15; check that the box is built from the five ticks, that the quarter slide shows equal counts before "length shows spread" is said, that the inference uses "suggests" with its reason, that the dot-plot and histogram quartiles are found by counting, and that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
