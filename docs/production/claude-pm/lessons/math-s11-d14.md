# Maths S11 D14: How do we compare two datasets using centre and spread, by hand and in a spreadsheet? A spreadsheet summary for two groups, centre then spread with numbers, a full comparison sentence, and measures of spread used well and badly (design)

Status: Revision 2 (24 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (24 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), `math-s11-d01.md` to `d13.md` (Revision 1, this batch), `math-s11-f08.md` and `e06.md` (spreadsheet conventions), the coherence audit and root's Standard rulings 1 to 99 (ruling 3: syllabus-only teaching where the site has no lesson). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,546 characters by script (see "Narration length estimate"; Revision 2), 13 scene headings, about 500 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: fifteenth video of the Year 11 Data analysis strand, outline playlist order 74. One video for Standard 1 and Standard 2. Viewers arrive from d13's final frame. Pre-design pack: `../pre-design/maths-standard/math-s11-d14.md`. Route entry: `math-s11-d14` in `../../programme/maths-standard-route-inputs-14.json`. Site lessons: `year11/data-analysis/lesson07.sa.html` (cards 02, 05, 06; traps; SA 1) and `lesson11.sa.html`; spreadsheet statistics are taught from the syllabus (MSY-45). Visual system: maths studio kit; the bedroom, phone, delivery bag, coffee cart and swim goggles plates (all existing); the dot plots, spreadsheet, comparison board and gallery coded.

Owner rules applied: as d01 (header strip "DATA ANALYSIS" only; one question; one stage at a time; plain meanings; two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors; no people, hands or faces; unbranded software; Australian spelling; no em dashes).

Syllabus content points (Mathematics Standard 11-12 (2024), Year 11, Data analysis, "Measures of centre and spread", common to Standard 1 and Standard 2), quoted from `../../programme/maths-standard-route-inputs-14.json`:

- `ciabf18f84`: "Compare datasets using measures of centre and measures of spread"
- `ci6dfbf5c5` (measures of spread here; measures of centre in d12): "Identify and describe real-world examples illustrating appropriate and inappropriate uses of measures of centre and measures of spread"
- `ci6446263f`: "Use a spreadsheet to analyse data including calculating measures of centre and spread"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa4de413b8

**Boundary:** starts from d13's final frame exactly (the bedroom `ms12-bedroom-furniture-v1.png`, about 700 px wide, at the top left; two dot plots of the sleep sample, axis 2 to 10 in half hours: "phone in bedroom" (12 dots: 3, 5.5, 6, 6, 6.5, 6.5, 7, 7, 7.5, 7.5, 8, 8.5) with a teal triangle at 6.58 and an amber bracket "σ 1.37"; "elsewhere" (8 hollow dots: 7, 7.5, 7.5, 8, 8, 8.5, 9, 9.5) with a teal triangle at 8.13 and an amber bracket "σ 0.78"; a small spreadsheet badge; chips "Which group sleeps more, and more steadily?", "Next: comparing datasets" and "?"). Recalls d11 to d13 (measures and their formulas), d07 (spreadsheet layout) and d04 (observation, not cause) in grey chips. Teaches: a two-group spreadsheet summary; comparing centre and spread with numbers; a full comparison sentence; uses of spread that fit or mislead. Not taught: quartiles and IQR (d15); box plots (d16, d17).

## Revision 2: learning review resolved (24 Nov 2026)

Source review: `../checks/m-s11-d14-learning-review.md`; resolution record `../checks/m-s11-d-learning-review-resolution.md`.

- **D14-SEEN (should fix, root's ruling 7): applied by replacing the practice item.** Scene 6's coffee-machine card stays. Attempt 1 is now two bakeries' loaves labelled 500 g: Bakery 1 mean 503 g, σ 14 g; Bakery 2 mean 501 g, σ 3 g (example values). Bakery 2 is 1 g over the label against 3 g, and its σ is much smaller, so it sells the more reliable loaf. Crossed slip "Bakery 1: heavier on average" (caption "500 g is the label"). The bold cues are now "one", "two", "slip" in spoken order. Picture slot: `ms12-bread-loaf-v1.png` only if it has been delivered and viewed (it is briefed for Year 12 p08 and z01 and is not yet in `public/assets/maths`); otherwise the slot is left to the card. The Attempts line, model answer, Numbers used, Numbers to verify, `ComparisonBoard` check and memory-aid check match.
- **D14-DELIV (note): applied.** "some orders take close to an hour, and many take over forty-five minutes".
- Narration 5,546 characters (Revision 1: 5,512); about 500 s with holds, under the 570 s cap. Both attempts still end "Pause here to answer."; feedback about 20.8 s and 25.5 s. No em dash. Joins unchanged.

## Decisions

- **Anchor: the question the survey was for (d13's frame).** "Which group sleeps more, and more steadily?" is the investigation's conclusion step. The spreadsheet computes everything; the skill taught is the comparison.
- **The spreadsheet does the analysis (`ci6446263f`).** Raw values in two columns (B for phone in bedroom, C for elsewhere); a summary block under them with labels in A: "count", "mean", "median", "range", "σ"; formulas =COUNT(B2:B13), =AVERAGE(B2:B13), =MEDIAN(B2:B13), =MAX(B2:B13)−MIN(B2:B13), =STDEV.P(B2:B13), filled across to column C (the ranges change to C2:C9 because each column's data length is set in its own formula; said as "the same formulas, pointed at column C"). The mode is left out of the block (the bedroom group has four modes; a one-line chip says so).
- **Centre, then spread, with numbers and direction (site lesson07's framework).** Centre: the elsewhere group's mean is 8.13 h against 6.58 h, about 1.5 hours higher; the medians (8 against 6.75) tell the same story. Same measure for both (lesson07 trap 01). Spread: σ 0.78 against 1.37 h, so the elsewhere group's sleep is more consistent; the ranges agree (2.5 against 5.5 h). Every comparison names which group, which way, and by how much.
- **The full comparison sentence, with the caution.** "Students whose phones charged elsewhere slept more on average (mean 8.13 h against 6.58 h) and more consistently (σ 0.78 h against 1.37 h). This is an observational study, so it doesn't show that the phone caused the difference." (grey chip "d04: just watching").
- **Spread used well and badly (`ci6dfbf5c5`, spread).** Fits: σ to compare two machines' consistency; σ with the mean for delivery times. Misleads: "phone plans range from $15 to $250" (one plan sets the range; most are $15 to $40); "average delivery 30 minutes" with no spread (σ 18 minutes hides long waits); comparing σ of data in different units. Lower-is-better contexts (times) flip "higher" (A2).
- **Plain meanings at first use.** Compare ("say which is higher or more consistent, and by how much"); consistent (recalled from d13).
- **Simulations (standard item 3).**
  1. **Spreadsheet fill** (scene 2): the two raw columns fill, the summary formulas write one by one in column B and fill across to C, each result flying to a marker on its dot plot (mean triangles, median lines, σ brackets).
  2. **Comparison board** (scenes 3, 4): two scales, "centre" and "spread", with the two groups' markers; a "difference" arrow grows between them with a live readout ("1.54 h higher"; "σ 0.59 h smaller").
  3. **Gallery** (scene 6): d12's claim cards, now for spread, flip to "fits" or "misleads" with reasons.
- **Colour roles (strand, fixed).** As d01: values blue (the elsewhere group hollow blue); counts olive; mean teal; median violet; spread amber; answer green; mistake red.
- **Large type, handwritten voice.** Labels 40 px; working 52 px; nothing below 26 px; all text above y = 950. Hand tags: "same formulas, column C", "STDEV.P", "same measure for both", "which way, how much", "more consistent", "with numbers", "not cause", "one plan sets the range", "average without spread", "lower is better here". At most two live at once.
- **Stage changes (standard item 2).** The two groups (1); the spreadsheet (2); comparing centre (3); comparing spread (4); the full sentence (5); the gallery (6); framed card (7); question cards (8 to 11); the order strip and the middle half (12); key notes (13).
- **Worked examples (g01 order).** Scene 3: "centre: mean 8.13 h against 6.58 h: elsewhere about 1.5 h higher" (framed green). Scene 4: "spread: σ 0.78 h against 1.37 h: elsewhere more consistent" (framed green). Scene 5: the full sentence (framed green); crossed slip in scene 3: "elsewhere mean 8.13 against bedroom median 6.75" (caption "same measure for both").
- **Memory aid.** Framed card: "Compare centre, then spread, with numbers, in context." Key line: "Use the same measure for both groups; say which is higher or more consistent, and by how much."
- **Attempts.** A1 (Revision 2, D14-SEEN: a fresh case and fresh numbers, since scene 6's card shows the coffee machines): two bakeries' 500 g loaves, Bakery 1 mean 503 g, σ 14 g; Bakery 2 mean 501 g, σ 3 g; choose Bakery 2; crossed "Bakery 1: heavier on average" (caption "500 g is the label"). A2 (pack question 2): the formulas; B faster, A more consistent; crossed "(b) Swimmer A is faster: 31.2 is higher" (caption "lower times are faster").
- **Mistake scene:** none separate. Mixing measures (3); comparing without numbers (5); higher-is-better in a time context (A2); a range with one extreme (6); an average with no spread (6); claiming cause (5).
- **Cause chain taught, in order:** (1) a spreadsheet applies the same formula to every value in a column, so one set of formulas summarises both groups and updates if a value changes (2); (2) the centre says where each group typically is, so comparing centres says which is higher (3); (3) the spread says how much values vary, so comparing spreads says which group is more consistent (4); (4) a comparison is only useful with numbers, a direction and the context, and an observational comparison can't show cause (5); (5) a range depends on two values and an average hides the spread, so a measure of spread fits only when it describes what the reader needs (6).
- **Entry knowledge (route):** math-s11-d11 to d13 (the measures and formulas), d07 (spreadsheet layout), d04 (observation). Recalled in grey chips.
- **Site notes.** MSY-45 (no spreadsheet statistics; lesson07 WE's ranges).
- **Handoff (to math-s11-d15, quartiles and the IQR).** Scene 12: board clear; d11's order strip of the 20 sleep values (blue, 40 px, positions 1 to 20: 3, 5.5, 6, 6, 6.5, 6.5, 7, 7, 7, 7.5, 7.5, 7.5, 7.5, 8, 8, 8, 8.5, 8.5, 9, 9.5) across the centre; the violet median line between positions 10 and 11; an amber bracket over positions 6 to 15 with a "?"; the alarm clock small at the top left; chips "Where's the middle half?", "Next: quartiles and the IQR" and "?". d15 opens on this frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Bedroom: n 12, sum 79, mean 6.5833, median (6.5 + 7) ÷ 2 = 6.75, range 8.5 − 3 = 5.5, σ 1.3668. Elsewhere: n 8, sum 65, mean 8.125, median (8 + 8) ÷ 2 = 8, range 9.5 − 7 = 2.5, σ 0.7806.
  (b) Mean difference 1.5417 (1 h 32.5 min; said "about one and a half hours"); median difference 1.25; σ difference 0.586 (said "about 0.6 h smaller"; on screen "σ 0.59 h smaller"); 1.3668 ÷ 0.7806 = 1.75.
  (c) Phone plans (example): 15, 18, 20, 22, 25, 25, 28, 30, 35, 40, 250: range 235; ten plans within 15 to 40.
  (d) Delivery (example): mean 30 min, σ 18 min.
  (e) The summary block's spreadsheet formulas are as in Decisions; Codex confirms they run as written.

Main question: *Which group sleeps more, and more steadily: phones in the bedroom, or elsewhere? How do we compare two datasets using centre and spread, by hand and in a spreadsheet?*
Entry knowledge (math-s11-d11 to d13, d07, d04): the measures; spreadsheet layout; observation, not cause.
Stops after: a two-group spreadsheet summary; centre and spread compared with numbers; a full sentence; uses of spread that fit or mislead.
Handoff: math-s11-d15: "Next: quartiles and the IQR".

## Script and shots

Cue words in **bold** trigger the visual change. Colour roles (fixed): values blue (second group hollow); counts olive; mean teal; median violet; spread amber; answer green; mistake red. Header strip "DATA ANALYSIS", with the mini investigation strip ("conclude" lit). Scene headings in the hand font, 44 px.

### 1. hook: which group sleeps more, and more steadily?
> This is the question our whole investigation was for. Students whose phones charge in the bedroom, and students whose phones charge elsewhere. Which group sleeps more, and which sleeps more steadily? We have the centres and the spreads. Now we need to put them side by side, in numbers, and say what they mean. A spreadsheet can do the calculating. The comparing is up to us. So how do we compare two datasets using centre and spread, by hand and in a **spreadsheet**?

Visual: opens on d13's final frame exactly. On "This is the question" the "Next" chips fade; the mini investigation strip's "conclude" card pulses. On "phones charge in the bedroom" the first plot glows; on "elsewhere" the second. On "the centres and the spreads" both teal triangles and both amber brackets pulse. On "A spreadsheet can do the calculating" the spreadsheet badge enlarges slightly. On "spreadsheet" heading "Comparing datasets" writes on (hand font, 56 px).

### 2. the spreadsheet summary
> Start by organising the data. Each group gets its own column, with one value per cell, and a heading at the top so nobody mixes them up. The twelve bedroom values go in column B, and the eight elsewhere values in column C. Underneath, a summary block. Equals COUNT checks how many. Equals AVERAGE gives the mean. Equals MEDIAN, the median. Equals MAX minus MIN, the range. And equals STDEV dot P, the standard deviation. Write the five formulas for column B, then use the same formulas, pointed at column C. The bedroom group's mean is six point five eight hours, its median six point seven five, its range five point five, and its sigma one point three seven. The elsewhere group's are eight point one three, eight, two point five, and nought point seven **eight**. And if a value is wrong and gets fixed, every result updates by itself.

Visual: stage change (simulation 1): an unbranded `SpreadsheetGrid` (about 1,300 px wide) with a formula bar; column B "Phone in bedroom" fills 12 values; column C "Elsewhere" fills 8 (grey chip "d07: one value per cell"). Summary labels in A15 to A19: "count", "mean", "median", "range", "σ". On "Equals COUNT" B15 "=COUNT(B2:B13)" → 12; on "AVERAGE" B16 "=AVERAGE(B2:B13)" → 6.58; on "MEDIAN" B17 → 6.75; on "MAX minus MIN" B18 "=MAX(B2:B13)−MIN(B2:B13)" → 5.5; on "STDEV dot P" B19 "=STDEV.P(B2:B13)" → 1.37 (hand tag "STDEV.P"; grey chip "d13: σx, STDEV.P"). On "pointed at column C" the block fills across to C: 8, 8.13, 8, 2.5, 0.78 (hand tag "same formulas, column C"). On "eight" (first bold) each result flies to its marker on two small dot plots at the right. A small chip "mode: the bedroom group has four modes, so it's left out". On "updates by itself" the value 3 in B2 changes to 5 and the results flicker to new values, then back.

### 3. comparing centre
> Now compare. Start with the centre. Use the same measure for both groups. The elsewhere group's mean is eight point one three hours, against six point five eight. That's about one and a half hours more, on average. The medians agree, eight against six point seven five, so the extra sleep isn't just one or two big values. Quoting both, when they agree, makes the comparison stronger. Notice the pattern of the sentence. Which group, which way, and by how **much**. Comparing one group's mean with the other group's median would be a **slip**. They measure different things.

Visual: stage change (simulation 2): the comparison board: a horizontal "centre" scale 5 to 9 hours with teal triangles "bedroom 6.58" and "elsewhere 8.13" (hollow-blue label); on "about one and a half hours more" a difference arrow grows between them with a live readout "1.54 h higher" (hand tag "which way, how much"); violet lines "6.75" and "8" below them with their own arrow "1.25 h". Row, 52 px: "centre: mean 8.13 h against 6.58 h: elsewhere about 1.5 h higher" (framed green on "much"). On "slip" a red slip "elsewhere mean 8.13 against bedroom median 6.75" writes and is crossed (caption "same measure for both"; hand tag "same measure for both").

### 4. comparing spread
> Then compare the spread. The elsewhere group's sigma is nought point seven eight hours, against one point three seven for the bedroom group. Smaller spread means steadier sleep, so the elsewhere group's sleep is more consistent, typically within about three quarters of an hour of its mean. The bedroom group's sleep varies more, and its range, five and a half hours against two and a half, says the same. Part of that is the three hour night. One very short night widens the bedroom group's spread, and it pulls its mean down too. We'll measure exactly how much in a later **video**.

Visual: the comparison board adds a "spread" scale 0 to 2 hours below the centre scale, with amber bars "bedroom σ 1.37" and "elsewhere σ 0.78"; on "more consistent" a difference arrow "σ 0.59 h smaller" (hand tag "more consistent"); row "spread: σ 0.78 h against 1.37 h: elsewhere more consistent" (framed green). On "its range" two range brackets on the dot plots "5.5" and "2.5". On "the three hour night" the 3 dot in the bedroom plot rings grey with faint arrows to its σ bracket and its triangle. On "video" (bold) grey chip "the effect of one value: later".

### 5. the full comparison
> Put it together in a sentence or two, with numbers. Students whose phones charged elsewhere slept more on average, a mean of eight point one three hours against six point five eight, and more consistently, a standard deviation of nought point seven eight hours against one point three seven. Then the caution, because this was an observational study. It doesn't show that the phone caused the difference. A full comparison covers the centre, the spread, the numbers, the context, and what the data can't **show**.

Visual: stage change: the sentence builder (d09's) with five slots: "centre", "spread", "numbers", "context", "caution". On "slept more on average" the "centre" slot fills; on "more consistently" "spread"; the numbers write in teal and amber; on "observational study" the "caution" slot fills with grey chip "d04: just watching". The full sentence assembles, 40 px, and frames green on "show" (hand tags "with numbers", "not cause").

### 6. spread, used well and badly
> Measures of spread get used well and badly too. Fits. A café compares two coffee machines by their standard deviations, to find the consistent one. Misleads. A phone shop says its plans range from fifteen dollars to two hundred and fifty. One premium plan sets that range, and ten of the eleven plans cost between fifteen and forty. Misleads. A delivery app promises an average of thirty minutes. With a standard deviation of eighteen minutes, some orders take close to an hour, and many take over forty-five minutes. An average without a spread hides the **risk**. Fits. Our sleep comparison, which gives both the centre and the spread, side by side.

Visual: stage change (simulation 3): the gallery (d12's `ClaimGallery`): on "Fits. A café" a card "Machine 1: σ 1.2 mL; Machine 2: σ 6.8 mL" with the coffee cart badge flips "fits" (green; reason "σ compares consistency"). On "Misleads. A phone shop" a card "Plans from $15 to $250!" with a value strip 15, 18, 20, 22, 25, 25, 28, 30, 35, 40, 250 (the 250 far right) flips "misleads" (red; reason "one plan sets the range"; hand tag "one plan sets the range"). On "A delivery app" the delivery bag `ma11-delivery-bag-v1.png` (about 220 px) and a card "Average delivery 30 min" with a faint wide spread of dots appearing (σ 18 min) flips "misleads" (red; reason "average without spread"; hand tag). On "risk" (bold) the card's reason glows. On "Our sleep comparison" the sentence from scene 5 as a small card flips "fits" (green).

### 7. memory aid
> Here's the card. Compare centre, then spread, with numbers, in context. Use the same measure for both groups, and say which is higher or more consistent, and by how **much**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the comparison board with its two scales and arrows. Main line, hand font 56 px: "Compare centre, then spread, with numbers, in context." On "much" the key line, 40 px: "Use the same measure for both groups; say which is higher or more consistent, and by how much." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. Two bakeries sell loaves labelled five hundred grams. Bakery one's loaves have a mean of five hundred and three grams, with a standard deviation of fourteen. Bakery two's have a mean of five hundred and one, with a standard deviation of three. Compare the bakeries using centre and spread, and say which sells the more reliable loaf. Pause here to answer.

Visual: `QuestionCard`, 40 px: "Two bakeries sell loaves labelled 500 g. Bakery 1: mean 503 g, standard deviation 14 g. Bakery 2: mean 501 g, standard deviation 3 g. Compare the bakeries using centre and spread, and say which sells the more reliable loaf." Picture slot: the loaf `ms12-bread-loaf-v1.png` (about 280 px) if it has been delivered and viewed by the build (it is briefed for Year 12 p08 and z01, not yet in `public/assets/maths` on 24 Nov 2026); otherwise the slot is left to the card. No new plate is requested for d14. (Revision 2, D14-SEEN.) Countdown ring shown full from "Pause here to answer.", then 10 s.

### 9. feedback 1 (brief)
> Bakery two's mean is just one gram over the label, against three for bakery **one**. And its standard deviation is much smaller, three against fourteen, so its loaves are more consistent. Choose bakery **two**. Choosing bakery one because its loaves are heavier on average is the **slip**.

Visual: the card shrinks to the top (30 px). The comparison board: a centre scale with a label line at 500 and triangles at 501 and 503; on "one" row "centre: Bakery 2 1 g over against 3 g over" (green). The spread scale with bars 3 and 14; row "spread: σ 3 g against 14 g: Bakery 2 more consistent" (green); on "two" row "choose Bakery 2" (framed green). On "slip" a red slip "Bakery 1: heavier on average" writes and is crossed (caption "500 g is the label"). Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. Swimmer A's eight fifty metre times are in cells B two to B nine, and Swimmer B's in C two to C nine. Write spreadsheet formulas for Swimmer A's mean and population standard deviation. Then, the results are, A, mean thirty-one point two seconds, sigma nought point four. B, mean thirty point eight seconds, sigma one point five. Compare the swimmers. Pause here to answer.

Visual: `QuestionCard`, 40 px: "Swimmer A's eight 50 m times are in B2 to B9; Swimmer B's in C2 to C9. (a) Write spreadsheet formulas for Swimmer A's mean and population standard deviation. (b) Results: A: mean 31.2 s, σ 0.4 s; B: mean 30.8 s, σ 1.5 s. Compare the swimmers." Picture slot: the swim goggles `ma11-swim-goggles-v1.png` (about 280 px). Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> The formulas are equals AVERAGE, B two to B nine, and equals STDEV dot P, B two to B **nine**. In a race, lower times are faster, so Swimmer B is faster on average, by nought point four seconds. Swimmer A is more consistent, sigma nought point four against one point **five**. Saying A is faster because thirty-one point two is higher is the **slip**.

Visual: the card shrinks to the top. A spreadsheet strip shows "=AVERAGE(B2:B9)" and "=STDEV.P(B2:B9)"; on "nine" row "(a) =AVERAGE(B2:B9); =STDEV.P(B2:B9)" (framed green). A centre scale with "faster ←" marked (hand tag "lower is better here"); row "(b) B faster on average by 0.4 s"; on "five" row "A more consistent: σ 0.4 s against 1.5 s" (framed green). On "slip" a red slip "(b) A is faster: 31.2 is higher" writes and is crossed (caption "lower times are faster"). Hold about 1 s.

### 12. handoff: quartiles and the IQR
> The standard deviation uses every value, including that three hour night. Sometimes we want a spread that ignores the extremes, and looks only at the middle of the data. Here are our twenty sleeps in order again. The median splits them in half. Where does the middle half of the students sit, and how wide is it? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame (as under Decisions, "Handoff"): on "including that three hour night" a σ bracket flickers on the sleep plot with the 3 ringed, then fades. On "in order again" d11's order strip writes in (grey chip "d11: order first"); on "The median splits them in half" the violet line drops between positions 10 and 11. On "the middle half" an amber bracket over positions 6 to 15 with "?"; the alarm clock small at the top left. On "how wide is it?" chip "Where's the middle half?". On "next" chips "Next: quartiles and the IQR" and "?". Hold about 2 s. Scene 13 returns to this frame silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Spreadsheet: =AVERAGE, =MEDIAN, =MAX−MIN, =STDEV.P.
- Compare centre: same measure, which way, how much.
- Compare spread: which is more consistent, how much.
- Add the context and what the data can't show.
- A range or an average alone can mislead.

Memory aid (framed card, right side, as in scene 7): *Compare centre, then spread, with numbers, in context.* Key: *Use the same measure for both groups; say which is higher or more consistent, and by how much.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and d15's opening frame.

## Teaching checks

- **Does it explain causes?** Why one set of formulas serves both columns (2); what the centre comparison says (3); what the spread comparison says (4); why numbers, direction, context and caution (5); why a range or a lone average misleads (6).
- **Misconceptions addressed:** mixing measures (3); no numbers (5); higher-is-better with times (A2); a range with one extreme (6); an average without spread (6); claiming cause (5).
- **Visual standard, item by item:** 1 the two groups and the "conclude" step in the first 20 s; 2 a new stage every 40 to 70 s; 3 the spreadsheet fill with results flying to markers, the comparison board's growing arrows, the gallery flips; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 rows with framed answers and crossed slips; 8 framed card and five bullets; 9 changing one cell updates every result.
- **One idea at a time:** spreadsheet (2), centre (3), spread (4), sentence (5), real-world uses (6).
- **Response opportunity:** two unseen tasks with every demand visible; 10 s each; feedback about 20.8 s and 25.5 s.
- **Avoided double teaching:** d11 to d13's formulas are grey chips; d04's caution is a chip; the IQR is left to d15.
- **Syllabus coverage:** `ciabf18f84` (3 to 5, A1, A2; notes 2 to 4); `ci6dfbf5c5` spread (6; note 5); `ci6446263f` (2, A2; note 1).
- **Out of scope by design:** comparing with box plots (d17); significance tests.

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original HSC style, 2 marks suggested, not an official marking scheme).** As on the card.
Model answer: Bakery 2's mean is closer to 500 g (1 g over against 3 g) and its σ is much smaller (3 g against 14 g), so its loaves are closer to the label and more consistent: choose Bakery 2. Classic mistake (crossed): "Bakery 1, because its loaves are heavier on average".

**Attempt 2 (scene 10; pack question 2, 3 marks suggested).** As on the card.
Model answer: (a) =AVERAGE(B2:B9) and =STDEV.P(B2:B9). (b) Swimmer B is faster on average (30.8 s against 31.2 s, 0.4 s less); Swimmer A is more consistent (σ 0.4 s against 1.5 s). Classic mistake (crossed): "(b) Swimmer A is faster, because 31.2 is higher".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Bedroom | 12; 6.58; 6.75; 5.5; σ 1.37 | 1 to 5 |
| Elsewhere | 8; 8.13; 8; 2.5; σ 0.78 | 1 to 5 |
| Differences | 1.54 h (about 1.5 h); 1.25 h; σ 0.59 h | 3, 4 |
| Phone plans (example) | $15 to $250; ten within $15 to $40 | 6 |
| Delivery (example) | mean 30 min, σ 18 min | 6 |
| A1 (Revision 2) | Bakery 1: 503 g, σ 14 g; Bakery 2: 501 g, σ 3 g | 8, 9 |
| A2 | 31.2, 0.4; 30.8, 1.5 | 10, 11 |

## Numbers to verify (all values, repeated for Codex)

Recalculated (24 Nov 2026, scratchpad `s11d/stats.py`, `python -I`); Codex to re-check.
- Bedroom: n 12; 79 ÷ 12 = 6.5833; median 6.75; range 5.5; σ 1.3668. Elsewhere: n 8; 65 ÷ 8 = 8.125; median 8; range 2.5; σ 0.7806.
- 8.125 − 6.5833 = 1.5417; 8 − 6.75 = 1.25; 1.3668 − 0.7806 = 0.5862.
- Phone plans: range 250 − 15 = 235; ten of eleven within 15 to 40.
- A1 (Revision 2): Bakery 1 503 − 500 = 3 g over, σ 14 g; Bakery 2 501 − 500 = 1 g over, σ 3 g; Bakery 2 is closer to the label and more consistent (example values).
- The spreadsheet formulas run as written (=COUNT, =AVERAGE, =MEDIAN, =MAX−MIN, =STDEV.P).

## Memory aid check

- **"Compare centre, then spread, with numbers, in context."** with key line **"Use the same measure for both groups; say which is higher or more consistent, and by how much."** Original; it carries site lesson07's three traps (different measures, ignoring spread, no numbers). It helps a new case: two bakeries' loaf masses (the smaller σ is more consistent); since Revision 2 this is attempt 1, a case the teaching cards do not settle.
- **Considered, not used:** "CSN: centre, spread, numbers" (an acronym without a natural word).

## Narration length estimate

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; `work/brief-review-s11-e/count.py`): **5,546 characters** in Revision 2 (Revision 1: 5,512), 13 scene headings. Characters per scene (1 to 13): 464, 834, 566, 580, 509, 647, 170, 366, 277, 382, 339, 325, 75. Feedback speech about 20.8 s and 25.5 s.

At 13.3 characters per second the speech is about 417 s. Holds and settling: two 10 s countdowns (20 s); short holds 6 s; settling for the spreadsheet fill, the arrows and the card flips, about 18 s; the key-notes scene adds about 39 s beyond its line. Total **about 500 s**, 70 s under the 570 s cap (Revision 2).

Reserve trims if the voiced take runs long: scene 2's last sentence; scene 4's "three hour night" sentences.

## Scene list and build ids

Lesson key `m-s11d14` (route math-s11-d14). Explainer folder `src/explainer/lessons/math-s11-d14`; build inputs in `docs/production/claude-pm/lessons/math-s11-d14/` (at voicing).

In order (13 scene headings): hook-which-group, spreadsheet-summary, compare-centre, compare-spread, full-comparison, spread-used-well-and-badly, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff-quartiles, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 33 s | 1 | The two groups |
| 33 to 105 s | 2 | The spreadsheet summary |
| 105 to 150 s | 3 | Comparing centre |
| 150 to 195 s | 4 | Comparing spread |
| 195 to 235 s | 5 | The full sentence |
| 235 to 285 s | 6 | The gallery |
| 285 to 300 s | 7 | Framed memory card |
| 300 to 405 s | 8 to 11 | Question cards and countdowns, then feedback |
| 405 to 430 s | 12 | The order strip and the middle half |
| 430 to 475 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: d13's last frame continues into 1; 1 to 2 stage change; 2 to 3 the summary results fly to the board; 3 to 4 the spread scale slides in; 4 to 5 stage change; 5 to 6 stage change; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s11-d14-learning-review.md`, `science_check` = `checks/m-s11-d14-maths-check.md`.

## Assets

Inspected before choosing (24 Nov 2026, viewed on contact sheets): `ms12-bedroom-furniture-v1.png`; `ma11-coffee-cart-v1.png`; `ma11-delivery-bag-v1.png`; `ma11-swim-goggles-v1.png` (blue swim goggles); `ma11-alarm-clock-v1.png`.

Need: none new. Reused: the five plates above.

Coded: the dot plots, the spreadsheet grid and summary block, the comparison board, arrows and readouts, the sentence builder, claim cards and value strips, the order strip, boards, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `InvestigationStrip` (mini), `DotPlot` (d07), `SpreadsheetGrid`, `SpreadBrackets`, the description builder (d09), `ClaimGallery` (d12), `OrderStrip` (d11), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row d14):
1. **`SpreadsheetGrid` summary block with fill-across and live recompute**: formulas evaluated from the cells; results fly to linked plot markers; editing a cell recomputes. Check: B 12, 6.58, 6.75, 5.5, 1.37; C 8, 8.13, 8, 2.5, 0.78.
2. **`ComparisonBoard`**: centre and spread scales with two groups' markers, a target line option, growing difference arrows with readouts, and a "faster ←" direction flag. Check: 1.54 h; σ 0.59 h; A1 (Revision 2) 3 g and 1 g over 500 g, σ 14 and 3; A2 0.4 s.

## Codex asset brief

No new plate. All five plates exist and were viewed.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify".
2. Confirm the syllabus quotes match the route-inputs JSON exactly; `ci6dfbf5c5` is shared with d12.
3. Confirm the spreadsheet formulas run as written in common spreadsheet programs.
4. Confirm the example claims (plans, delivery) are labelled as examples.
5. Confirm both attempts carry every demand and show no answer; scene 1 opens on d13's final frame exactly; scene 12 matches d15's Boundary.
6. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Comparing Datasets: Centre, Spread and Spreadsheets | Year 11 Maths Standard

(Title length: 76 characters.)

Description: Related lesson notes: https://hscscience.com.au/subjects/maths-standard/year11/data-analysis/lesson07.sa.html

Phones in the bedroom or elsewhere: which group sleeps more, and more steadily? Learn to analyse two groups in a spreadsheet (AVERAGE, MEDIAN, MAX minus MIN, STDEV.P), compare their centres and spreads with numbers and direction, write a full comparison with its caution, and spot measures of spread that fit or mislead in the real world. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 11, Data analysis. For Standard 1 and Standard 2.
Syllabus content (NSW Mathematics Standard 11-12, 2024, Year 11):
"Compare datasets using measures of centre and measures of spread"
"Identify and describe real-world examples illustrating appropriate and inappropriate uses of measures of centre and measures of spread" (measures of spread; measures of centre in an earlier video)
"Use a spreadsheet to analyse data including calculating measures of centre and spread"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa4de413b8

Builds on: Range and Standard Deviation. Next: Quartiles, the Five-Number Summary and the IQR.

#Year11Maths #MathsStandard #Statistics #HSCScience

## Open decisions

- **1. The mode in the summary block.** Left out (the bedroom group has four modes); a one-line chip says why. Root may prefer =MODE in the block with a note.

## Review notes

- Revision 1. Next: student learning review (trace from d13; check that each formula is spoken with its meaning, that every comparison names a group, a direction and an amount, that the caution is in the sentence, that the swimmer context flips "higher", and that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
- Revision 2 (24 Nov 2026): learning review resolved (D14-SEEN; D14-DELIV). Next: Codex maths check and error check, then voicing and a build to grade A.
