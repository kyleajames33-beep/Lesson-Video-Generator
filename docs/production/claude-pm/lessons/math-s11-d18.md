# Maths S11 D18: How do we spot clusters, gaps and outliers, and test an outlier formally? Clusters and gaps explained in context, outliers as values well away from the rest, the fences Q1 − 1.5 × IQR and Q3 + 1.5 × IQR, outliers on a box plot, and what to do with one (design)

Status: Revision 3 (25 Nov 2026): preflight and fact repairs (see the final section, "Revision 3 (root, 25 November 2026)"). Revision 2 (24 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (24 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), `math-s11-d01.md` to `d17.md` (Revision 1, this batch), the Year 12 design that recalls this video (`math-s12-b02.md`: "Year 11: outliers"; outlier "a point well away from the rest"), the coherence audit and root's Standard rulings 1 to 99. Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,576 characters by script (see "Narration length estimate"; Revision 2), 13 scene headings, about 502 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: nineteenth video of the Year 11 Data analysis strand, outline playlist order 78. One video for Standard 1 and Standard 2. Viewers arrive from d17's final frame. Pre-design pack: `../pre-design/maths-standard/math-s11-d18.md`. Route entry: `math-s11-d18` in `../../programme/maths-standard-route-inputs-14.json`. Site lesson: `year11/data-analysis/lesson13.sa.html` (card 06; WE 1; card 08); clusters and gaps are taught from the syllabus (MSY-46). Visual system: maths studio kit; the bus, alarm clock, wall calendar, coffee cart and phone plates (all existing); the dot plots, fences, box plots and decision path coded.

Owner rules applied: as d01 (header strip "DATA ANALYSIS" only; one question; one stage at a time; plain meanings; two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors; no people, hands or faces; Australian spelling; no em dashes).

Syllabus content points (Mathematics Standard 11-12 (2024), Year 11, Data analysis, "Clusters and outliers", common to Standard 1 and Standard 2), quoted from `../../programme/maths-standard-route-inputs-14.json`:

- `ci72ffda24`: "Identify clusters, gaps and outliers and explain their occurrence in the context of the data"
- `ci02be1794`: "Apply Q_1 - 1.5 × IQR and Q_3 + 1.5 × IQR to formally identify outliers"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa4de413b8

**Boundary:** starts from d17's final frame exactly (at the left the sleep box plot, about 760 px wide, with the 3 ringed grey at the end of its left whisker and a chip "unusual?"; at the right a dot plot "Travel time to school (min)" 0 to 100, about 900 px wide, with dots at 6, 8, 10, 10, 12, 12, 15, 18 and 42, 45, 45, 48, 50, 52, 55, and one at 95; the bus `ma12-bus-side-v1.png`, about 300 px wide, above the right-hand group; chips "Unusual, or just different?", "Next: clusters, gaps and outliers" and "?"). Recalls d15 (quartiles, IQR), d16 (box plots), d09 (two peaks, two groups) and d04 (recording errors) in grey chips. Teaches: clusters; gaps; outliers informally and by the fences; explaining each in context; a box plot with an outlier; what to do with an outlier; the rule's limit with clustered data. Not taught: the effect on each measure (d19).

## Revision 2: learning review resolved (24 Nov 2026)

Source review: `../checks/m-s11-d18-learning-review.md`; resolution record `../checks/m-s11-d-learning-review-resolution.md`.

- **D18-GAP (should fix, root's ruling 8): applied.** Scene 2 now says "Nobody takes about half an hour, because students either make a short trip on foot, by bike or by car, or ride the long bus route. There's nothing in between." This agrees with the bus-route reason given just before it. On "nothing in between" the chips "walk, ride, dropped off" and "bus" glow either side of the gap band. The Decisions line on clusters and gaps matches.
- **D18-FENCE (note): no change**, as the reviewer advised.
- Narration 5,588 characters (Revision 1: 5,522); about 503 s with holds, under the 570 s cap. Both attempts still end "Pause here to answer."; feedback about 28.0 s and 22.9 s. No em dash. Joins unchanged.

## Decisions

- **Anchor: two questions from d17's frame.** The travel times show clusters and a gap; the sleep data's 3 asks "outlier or just short?". The video answers the first by describing and explaining, the second by the formal rule.
- **Year 12 b02's words.** Outlier: "a value well away from the rest of the data" (b02 says "a point well away from the rest"). Cluster and gap get plain meanings, and each is explained in context (the point says "explain their occurrence").
- **Clusters and gaps in context.** Walkers and riders take 6 to 18 minutes; bus students 42 to 55 minutes (the bus winds through other suburbs); nobody takes 18 to 42 minutes, so there's a gap, because students either make a short trip on foot, by bike or by car, or ride the long bus route, and no way of travelling falls in between (Revision 2, D18-GAP). Two clusters are two groups mixed together (d09's bimodal). The 95-minute trip sits alone: the bus broke down that day (an example explanation, labelled).
- **The fence rule, built from the box (visual).** Q1 and Q3 lines; the IQR bracket; copy it one and a half times out from Q1 and from Q3; the ends are the fences. Sleep: IQR 1.5; 1.5 × 1.5 = 2.25; lower fence 6.5 − 2.25 = 4.25; upper fence 8 + 2.25 = 10.25. The 3 falls below 4.25: an outlier; 5.5 doesn't; nothing above 10.25. A value exactly on a fence is not an outlier (site WE 1), said in one clause.
- **The outlier box plot (d16's promise).** The whisker snaps back to 5.5, the furthest value inside the fences, and the 3 becomes a separate point. Plain meaning: "the whisker stops at the furthest value that isn't an outlier".
- **What to do with an outlier (explain before deciding).** Check the record first (d04): was "8" typed as "3"? If it's an error, correct it. If it's genuine (a late flight home, a sick night), keep it and report it; you can describe the data with and without it (d19). Never delete a value just to tidy the data.
- **The rule's limit (one sentence and a picture).** Run the fences on the travel times: Q1 11, Q3 49, IQR 38, upper fence 106. The 95 passes, because the big gap between clusters makes the IQR wide. So look at the picture as well as the rule.
- **Plain meanings at first use.** Cluster ("a group of values bunched close together"); gap ("a stretch of the number line with no values"); outlier (above); fence ("a cut-off one and a half IQRs beyond a quartile").
- **Simulations (standard item 3).**
  1. **Cluster finder** (scene 2): outlines grow around the two bunches; a gap band shades the empty stretch; the 95 sits outside both.
  2. **Fence builder** (scenes 4, 5): the IQR bracket copies itself 1.5 times out from each quartile (the half copy grows last); dashed amber fences land; values outside them ring; the box plot's whisker snaps back.
  3. **Commute fences** (scene 6): the same builder on the travel times, its fences landing beyond 95.
- **Colour roles (strand, fixed).** As d01: values blue; counts olive; mean teal; median and quartiles violet; spread (IQR) and fences amber; outliers ringed grey with an "outlier" label (not red, which is kept for mistakes); answer green; mistake red.
- **Large type, handwritten voice.** Labels 40 px; working 52 px; nothing below 26 px; all text above y = 950. Hand tags: "cluster", "gap", "two groups", "well away from the rest", "1.5 boxes out", "× 1.5, then add", "outside a fence", "whisker stops at 5.5", "check the record", "keep it, report it", "look at the picture too". At most two live at once.
- **Stage changes (standard item 2).** The two displays (1); clusters and gaps (2); outliers informally (3); the fence builder on sleep (4); the outlier box plot (5); deciding, and the rule's limit (6); framed card (7); question cards (8 to 11); two box plots and a summary card (12); key notes (13).
- **Worked examples (g01 order).** Scene 4: task strip "Is 3 h an outlier in the sleep data?"; givens card "Q1 = 6.5, Q3 = 8, IQR = 1.5"; rows "1.5 × IQR = 1.5 × 1.5 = 2.25", "lower fence = 6.5 − 2.25 = 4.25", "upper fence = 8 + 2.25 = 10.25", "3 < 4.25: 3 is an outlier" (framed green); crossed slip "lower fence = 6.5 − 1.5 = 5" (caption "1.5 × IQR, not just 1.5").
- **Memory aid.** Framed card: "Fences sit one and a half boxes out." Key line: "Lower fence Q1 − 1.5 × IQR; upper fence Q3 + 1.5 × IQR. Outside a fence: an outlier. Explain it before deciding what to do."
- **Attempts.** A1 (pack question 1): fences 30.25 and 72.25; 96 an outlier; keep it; crossed "(b) yes, outliers are always removed" (caption "it's a real festival day"). A2 (pack question 2): two clusters and a gap; budget and premium phones; crossed "the expensive phones are outliers" (caption "eight phones make a cluster").
- **Mistake scene:** none separate. 1.5 not × IQR (4); whisker to the outlier (5); automatic removal (6, A1); a cluster called outliers (A2); the rule alone with clustered data (6).
- **Cause chain taught, in order:** (1) values bunch where a group of similar cases sits, and gaps appear where no cases fall, so clusters and gaps usually point to separate groups (2); (2) a value far from the rest has a reason, an error or something unusual, so it must be explained (3); (3) the IQR measures the usual spread, so a value more than one and a half IQRs beyond a quartile is unusually far out, which gives a fair rule (4); (4) an outlier isn't part of the usual spread, so the whisker stops at the last usual value and the outlier is shown on its own (5); (5) a genuine value is real information, so it is kept and reported, while an error is corrected (6).
- **Entry knowledge (route):** math-s11-d15 (quartiles, IQR), d16 (box plots), d17 (the 3 h night), d09 (two groups), d04 (recording errors). Recalled in grey chips.
- **Site notes.** lesson13 values recalculated; MSY-46 (clusters and gaps; WE 2; SA 2).
- **Handoff (to math-s11-d19, the effect of an outlier).** Scene 12: board clear; the alarm clock small at the top left; one number line "Hours of sleep" 2 to 10 with two box plots: "with the 3 h night" (point at 3, whisker from 5.5, box 6.5 to 8, median 7.5, whisker to 9.5) and "without it" (whiskers 5.5 and 9.5, box 6.5 to 8, median 7.5); a summary card at the right with rows "mean", "median", "mode", "range", "IQR", "σ" and two columns "with" (7.2, 7.5, 7.5, 6.5, 1.5, 1.39) and "without" (blank cells); chips "What changes?", "Next: the effect of an outlier" and "?". d19 opens on this frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Commute: 16 values; Q1 (10 + 12) ÷ 2 = 11; median (18 + 42) ÷ 2 = 30; Q3 (48 + 50) ÷ 2 = 49; IQR 38; fences 11 − 57 = −46 and 49 + 57 = 106; 95 < 106. "The bus broke down" is an example explanation.
  (b) Sleep: 1.5 × 1.5 = 2.25; 4.25 and 10.25; 3 below; 5.5 above 4.25; 9.5 below 10.25.
  (c) "8 typed as 3" is a possibility to check, not a finding; the design treats the 3 as genuine (d19 keeps it in the "with" column).
  (d) A1: median 50 (5th); lower half 42, 45, 47, 48: Q1 46; upper half 52, 55, 58, 96: Q3 56.5; IQR 10.5; × 1.5 = 15.75; fences 30.25 and 72.25.
  (e) A2: clusters 180 to 260 (6 phones) and 950 to 1,400 (8 phones); gap 690 wide.
  (f) d19's summary: with: 7.2, 7.5, 7.5, 6.5, 1.5, 1.39; without: 7.42, 7.5, 7.5, 4, 1.5, 1.03.

Main question: *A 95-minute trip, a 3-hour night, two bunches of travel times: unusual, or just different? How do we spot clusters, gaps and outliers, and test an outlier formally?*
Entry knowledge (math-s11-d15 to d17, d09, d04): quartiles and IQR; box plots; the 3 h night; two groups; recording errors.
Stops after: clusters, gaps and outliers explained in context; the fence rule; the outlier box plot; deciding what to do; the rule's limit.
Handoff: math-s11-d19: "Next: the effect of an outlier".

## Script and shots

Cue words in **bold** trigger the visual change. Colour roles (fixed): values blue; counts olive; mean teal; median and quartiles violet; spread and fences amber; outliers ringed grey; answer green; mistake red. Header strip "DATA ANALYSIS", with the mini investigation strip ("analyse" lit). Scene headings in the hand font, 44 px.

### 1. hook: unusual, or just different?
> Two puzzles. Our sleep data has one night of just three hours, well below the rest. Is that an outlier, or just a short night? And these travel times to school split into two bunches, with nothing in the middle, and one trip of ninety-five minutes way out on its own. Data often has bunches, empty stretches and lone values, and each one has a story. Our job is to spot them, test them fairly, and explain them. So how do we spot clusters, gaps and outliers, and test an outlier **formally**?

Visual: opens on d17's final frame exactly. On "Two puzzles" the "Next" chips fade. On "one night of just three hours" the 3 pulses. On "two bunches" the two groups of commute dots pulse in turn; on "nothing in the middle" the empty stretch glows faintly; on "ninety-five minutes" the 95 dot pulses. On "each one has a story" a small question chip floats over each. On "formally" heading "Clusters, gaps and outliers" writes on (hand font, 56 px).

### 2. clusters and gaps
> Start with the travel times. A cluster is a group of values bunched close together. There are two here. One from six to eighteen minutes, and one from forty-two to fifty-five. A gap is a stretch of the number line with no values at all, here from eighteen to forty-two minutes. The syllabus asks you to explain them, in context. The short times are students who walk, ride or get dropped off. The long ones are bus students, because the bus winds through other suburbs first. Nobody takes about half an hour, because students either make a short trip on foot, by bike or by car, or ride the long bus route. There's nothing in between. Two clusters usually mean two groups mixed together, like the bimodal shapes from **before**.

Visual: stage change (simulation 1): the commute dot plot enlarges (about 1,400 px wide). On "A cluster" an olive outline grows around the left bunch (6 to 18; hand tag "cluster"); on "forty-two to fifty-five" a second outline around the right bunch. On "A gap" a pale band shades 18 to 42 (hand tag "gap"). On "walk, ride or get dropped off" a chip "walk, ride, dropped off" under the left cluster; on "bus students" the bus plate glides above the right cluster with a chip "bus". On "Nobody takes about half an hour" the gap band pulses; on "nothing in between" the two chips "walk, ride, dropped off" and "bus" glow either side of it (Revision 2, D18-GAP: the gap is explained by how students travel, matching the bus-route reason). On "before" (bold) grey chip "d09: two peaks, two groups" (hand tag "two groups").

### 3. outliers: well away from the rest
> Then the lone value, ninety-five minutes. An outlier is a value well away from the rest of the data. It needs an explanation too. Maybe the bus broke down that day, or the student missed it and waited for the next one. Our sleep data's three hour night looks like an outlier as well, two and a half hours below the next shortest night. Maybe that student flew home late from a trip, or was sick. But looks can fool you. How far away is far enough? We need a fair test, the same for every dataset, so different people reach the same **answer**.

Visual: stage change: on "ninety-five minutes" the 95 dot rings grey with a label "outlier?" (hand tag "well away from the rest"); a chip "example: the bus broke down"; on "missed it" a wall calendar badge `ma12-wall-calendar-v1.png` (about 200 px) with one day ringed. On "three hour night" the sleep dot plot slides in below with the 3 ringed grey and a bracket "2.5 h" to the 5.5. On "How far away is far enough?" a sliding "far enough?" marker hovers between 3 and 5.5, uncertain. On "answer" (bold) chip "a fair rule: the same for every dataset".

### 4. the formal test: fences
> Here's the test, built from the box. Take the IQR, the width of the middle half, and multiply it by one and a half. Then step that far out from each quartile. Those cut-offs are called fences. For our sleep, Q one is six and a half, Q three is eight, and the IQR is one and a half. One and a half times one and a half is two point two five. The lower fence is six and a half minus two point two five, four point two **five**. The upper fence is eight plus two point two five, ten point two five. Any value below the lower fence, or above the upper fence, is an outlier. The three hour night is below four point two five, so it's an **outlier**. Five and a half isn't, and nothing reaches ten point two five. A common slip is subtracting just one and a half. It's one and a half times the IQR.

Visual: stage change (simulation 2): the g01 board at the left; the sleep box plot at the right (about 1,000 px). Task strip, 44 px: "Is 3 h an outlier in the sleep data?" Givens card: "Q1 = 6.5", "Q3 = 8", "IQR = 1.5" (violet and amber; grey chip "d15: IQR = Q3 − Q1"). On "multiply it by one and a half" the IQR bracket copies itself once and then half again leftward from Q1 and rightward from Q3 (hand tag "1.5 boxes out"); row "1.5 × IQR = 1.5 × 1.5 = 2.25" (hand tag "× 1.5, then add"). On "five" (first bold) row "lower fence = 6.5 − 2.25 = 4.25" and a dashed amber fence drops at 4.25; on "ten point two five" row "upper fence = 8 + 2.25 = 10.25" and a fence drops at 10.25. On "below the lower fence" the space left of 4.25 tints; on "outlier" (bold) the 3 rings grey with the label "outlier" and row "3 < 4.25: 3 is an outlier" (framed green; hand tag "outside a fence"). On "Five and a half isn't" the 5.5 dot ticks. On "subtracting just one and a half" a red slip "lower fence = 6.5 − 1.5 = 5" writes and is crossed (caption "1.5 × IQR, not just 1.5").

### 5. outliers on a box plot
> Now redraw the box plot, the way most exam box plots show outliers. The box and the median don't change. But the left whisker now stops at five and a half, the furthest value that isn't an outlier. And the three is drawn on its own, as a separate point. A value sitting exactly on a fence doesn't count, by the way. It has to be beyond it. Box plots drawn by apps often do this automatically, which is why the setting **matters**.

Visual: the sleep box plot enlarges; the fences stay dashed. On "the left whisker now stops at five and a half" the whisker retracts from 3 to 5.5 (hand tag "whisker stops at 5.5"); on "drawn on its own" the 3 becomes a separate grey-ringed point. On "exactly on a fence" a ghost dot sits on the 4.25 fence with a tick "not an outlier". On "matters" (bold) a small app badge (d16's settings panel) flips "show outliers: on" (grey chip "d16: check the settings").

### 6. what to do with an outlier, and the rule's limit
> Finding an outlier is the start, not the end. First, check the record. Did someone type three when they meant eight? If it's an error, correct it. If it's genuine, a real short night, keep it, and report it. You can describe the data with it and without it, and we'll see next time how much it changes. What you never do is delete a value just to make the data look tidy. And use your eyes as well as the rule. Run the fences on the travel times, and the upper fence is a hundred and six minutes, so the ninety-five passes. The big gap between the clusters makes the IQR wide. The rule is fair, but it works best when there's one **cluster**.

Visual: stage change: a decision path (40 px): "outlier found" → "check the record" (grey chip "d04: check before you use") → two branches: "error? correct it" (with a ghost "3 → 8" cell) and "genuine? keep it, report it" (green; hand tag "keep it, report it"); a crossed red branch "delete it to tidy up". On "Run the fences on the travel times" simulation 3: the commute dot plot returns; the fence builder runs: Q1 11, Q3 49, IQR 38, fences −46 and 106; the upper fence lands beyond 95 (row "upper fence = 49 + 1.5 × 38 = 106: 95 passes"). On "the big gap" the gap band pulses inside the wide IQR bracket. On "cluster" (bold) hand tag "look at the picture too".

### 7. memory aid
> Here's the card. Fences sit one and a half boxes out. The lower fence is Q one minus one and a half IQRs, and the upper fence is Q three plus one and a half IQRs. Outside a fence is an outlier, and you explain it before you decide what to **do**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the sleep box plot with its fences and the outlier point. Main line, hand font 56 px: "Fences sit one and a half boxes out." On "do" the key line, 40 px: "Lower fence Q1 − 1.5 × IQR; upper fence Q3 + 1.5 × IQR. Outside a fence: an outlier. Explain it before deciding what to do." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. A coffee stall's daily sales over nine days were forty-two, forty-five, forty-seven, forty-eight, fifty, fifty-two, fifty-five, fifty-eight and ninety-six, on the day of a local festival. Use the fences to decide whether ninety-six is an outlier. Then, should it be removed? Explain. Pause here to answer.

Visual: `QuestionCard`, 40 px: "A coffee stall's daily sales over nine days were 42, 45, 47, 48, 50, 52, 55, 58 and 96 (the day of a local festival). (a) Use Q1 − 1.5 × IQR and Q3 + 1.5 × IQR to decide whether 96 is an outlier. (b) Should it be removed? Explain." Picture slot: the coffee cart `ma11-coffee-cart-v1.png` (about 280 px). Countdown ring shown full from "Pause here to answer.", then 10 s.

### 9. feedback 1 (brief)
> The median is fifty, Q one is forty-six and Q three is fifty-six point five, so the IQR is ten point five. One and a half times that is fifteen point seven five, so the upper fence is seventy-two point two **five**. Ninety-six is above it, so it's an **outlier**. But it's a real festival day, so keep it and report **it**. Removing it because outliers are always removed is the **slip**.

Visual: the card shrinks to the top (30 px). Rows: "Q1 = 46, Q3 = 56.5, IQR = 10.5"; "1.5 × 10.5 = 15.75"; on "five" (first bold) "upper fence = 56.5 + 15.75 = 72.25" (a fence drops on a mini dot plot); on "outlier" "(a) 96 > 72.25: an outlier" (framed green). On "it" row "(b) keep it: a genuine festival day" (framed green). On "slip" a red slip "(b) yes, outliers are always removed" writes and is crossed (caption "it's a real festival day"). Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. A shop sells fourteen phones, priced at a hundred and eighty, two hundred, two twenty, two forty, two fifty, two sixty, then nine fifty, a thousand, ten fifty, eleven hundred, twelve hundred, twelve fifty, thirteen hundred and fourteen hundred dollars. Describe any clusters and gaps, and suggest a reason in context. Pause here to answer.

Visual: `QuestionCard`, 40 px: "A shop's 14 phones are priced at $180, $200, $220, $240, $250, $260, $950, $1,000, $1,050, $1,100, $1,200, $1,250, $1,300 and $1,400. Describe any clusters and gaps, and suggest a reason in context." Picture slot: a dot plot of the prices (axis $0 to $1,500) and the phone `ma12-phone-v1.png` (about 220 px tall). Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> There are two clusters, a hundred and eighty to two sixty, and nine fifty to fourteen hundred, with a gap from two sixty to nine **fifty**. The shop sells budget phones and premium phones, and nothing in **between**. Calling the expensive phones outliers is the **slip**. Eight phones make a cluster, not an outlier.

Visual: the card shrinks to the top. Cluster outlines grow around both groups and a gap band shades $260 to $950; on "fifty" row "two clusters: $180 to $260 and $950 to $1,400; gap $260 to $950" (framed green). On "between" row "budget and premium phones" (framed green). On "slip" a red slip "the expensive phones are outliers" writes and is crossed (caption "eight phones make a cluster"). Hold about 1 s.

### 12. handoff: the effect of an outlier
> So the three hour night is an outlier, and it's genuine, so we keep it. But how much does it change our results? Here's the sleep data with it, and without it. The boxes look almost the same. Yet the mean, the range and the standard deviation might tell a different story. What changes, and what stays put? That's **next**.

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame (as under Decisions, "Handoff"): on "with it, and without it" the two box plots draw on one scale; on "The boxes look almost the same" both boxes pulse; on "the mean, the range and the standard deviation" the summary card slides in at the right with the "with" column filled and the "without" column blank; the alarm clock small at the top left. On "What changes" chip "What changes?". On "next" chips "Next: the effect of an outlier" and "?". Hold about 2 s. Scene 13 returns to this frame silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Cluster: bunched values. Gap: no values. Explain both.
- Outlier: a value well away from the rest.
- Fences: Q1 − 1.5 × IQR and Q3 + 1.5 × IQR.
- Box plot: whisker to the last non-outlier; outlier as a dot.
- Check for errors; keep and report genuine outliers.

Memory aid (framed card, right side, as in scene 7): *Fences sit one and a half boxes out.* Key: *Lower fence Q1 − 1.5 × IQR; upper fence Q3 + 1.5 × IQR. Outside a fence: an outlier. Explain it before deciding what to do.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and d19's opening frame.

## Teaching checks

- **Does it explain causes?** Why clusters and gaps appear (2); why an outlier needs a reason (3); why 1.5 × IQR is a fair cut-off (4); why the whisker stops short (5); why genuine values are kept and why the rule can miss (6).
- **Misconceptions addressed:** 1.5 instead of 1.5 × IQR (4); whisker to the outlier (5); automatic removal (6, A1); a cluster called outliers (A2); the rule alone (6).
- **Visual standard, item by item:** 1 the 3 h night and the 95-minute trip in the first 20 s; 2 a new stage every 40 to 70 s; 3 the cluster finder, the fence builder copying the IQR out, the whisker snapping back, the commute fences landing past 95; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 layout with givens, framed answers and crossed slips; 8 framed card and five bullets; 9 the IQR bracket stepping out one and a half times to make a fence.
- **One idea at a time:** clusters and gaps (2), outliers (3), fences (4), the box plot (5), deciding and the limit (6).
- **Response opportunity:** two unseen tasks with every demand visible; 10 s each; feedback about 28.0 s and 22.9 s.
- **Avoided double teaching:** d15's IQR, d16's box plot and d09's two groups are grey chips; the effect on each measure is left to d19.
- **Syllabus coverage:** `ci72ffda24` (2, 3, 6, A2; notes 1, 2, 5); `ci02be1794` (4, 5, A1; notes 3, 4).
- **Out of scope by design:** other outlier rules (2 standard deviations); influence on correlation (Year 12 b02, b05).

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original HSC style, 3 marks suggested, not an official marking scheme).** As on the card.
Model answer: (a) Q1 46, Q3 56.5, IQR 10.5; upper fence 56.5 + 15.75 = 72.25 (lower 30.25); 96 > 72.25, so 96 is an outlier. (b) No: it is a genuine festival day; keep it and report it (the usual days can be described separately). Classic mistake (crossed): "(b) yes, outliers are always removed".

**Attempt 2 (scene 10; pack question 2, 2 marks suggested).** As on the card.
Model answer: two clusters, $180 to $260 and $950 to $1,400, with a gap from $260 to $950: the shop sells budget and premium phones and nothing in between. Classic mistake (crossed): "the expensive phones are outliers".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Commute | clusters 6 to 18, 42 to 55; gap 18 to 42; 95; fences −46 and 106 | 1 to 3, 6 |
| Sleep | Q1 6.5, Q3 8, IQR 1.5; 2.25; fences 4.25, 10.25; 3 an outlier; whisker to 5.5 | 3 to 6, 12 |
| A1 | Q1 46, Q3 56.5, IQR 10.5; 15.75; fences 30.25, 72.25 | 8, 9 |
| A2 | $180 to $260; $950 to $1,400; gap $260 to $950 | 10, 11 |
| d19 card | 7.2, 7.5, 7.5, 6.5, 1.5, 1.39 | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated (24 Nov 2026, scratchpad `s11d/stats.py`, `python -I`, halves method); Codex to re-check.
- Sleep: 1.5 × 1.5 = 2.25; 6.5 − 2.25 = 4.25; 8 + 2.25 = 10.25; only 3 lies outside.
- Commute: Q1 11, Q3 49, IQR 38; 1.5 × 38 = 57; fences −46 and 106; 95 inside.
- A1: Q1 46, Q3 56.5, IQR 10.5; 15.75; fences 30.25 and 72.25; only 96 outside.
- A2: two clusters of 6 and 8; gap 260 to 950.

## Memory aid check

- **"Fences sit one and a half boxes out."** with key line **"Lower fence Q1 − 1.5 × IQR; upper fence Q3 + 1.5 × IQR. Outside a fence: an outlier. Explain it before deciding what to do."** Original; "one and a half boxes" ties the multiplier to the IQR (the box's width), which blocks the "just 1.5" slip. It helps a new case: delivery times with Q1 20 and Q3 30 (fences 5 and 45; a 60-minute delivery is an outlier).
- **Considered, not used:** "1.5 IQR rule" alone (it names the rule but not the picture).

## Narration length estimate

Counted by script (lines starting "> " inside each `### N.` scene, joined with a space, `**` removed; `work/brief-review-s11-e/count.py`): **5,588 characters** in Revision 2 (Revision 1: 5,522), 13 scene headings. Characters per scene (1 to 13): 488, 724, 539, 784, 426, 638, 242, 316, 372, 349, 304, 319, 75. Feedback speech about 28.0 s and 22.9 s.

At 13.3 characters per second the speech is about 420 s. Holds and settling: two 10 s countdowns (20 s); short holds 6 s; settling for the outlines, the fence builder and the whisker snap, about 18 s; the key-notes scene adds about 39 s beyond its line. Total **about 503 s**, 67 s under the 570 s cap (Revision 2).

Reserve trims if the voiced take runs long: scene 5's app sentence; scene 3's "missed it" clause.

## Scene list and build ids

Lesson key `m-s11d18` (route math-s11-d18). Explainer folder `src/explainer/lessons/math-s11-d18`; build inputs in `docs/production/claude-pm/lessons/math-s11-d18/` (at voicing).

In order (13 scene headings): hook-unusual-or-different, clusters-and-gaps, outliers-informally, fences, outlier-box-plot, deciding-and-limits, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff-effect, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 35 s | 1 | The two displays |
| 35 to 90 s | 2 | Clusters and gaps |
| 90 to 135 s | 3 | Outliers informally |
| 135 to 205 s | 4 | The fence builder |
| 205 to 235 s | 5 | The outlier box plot |
| 235 to 295 s | 6 | Deciding; the commute fences |
| 295 to 312 s | 7 | Framed memory card |
| 312 to 415 s | 8 to 11 | Question cards and countdowns, then feedback |
| 415 to 440 s | 12 | Two box plots and the summary card |
| 440 to 485 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: d17's last frame continues into 1; 1 to 2 the commute plot enlarges; 2 to 3 the sleep plot slides in; 3 to 4 stage change; 4 to 5 the box plot enlarges; 5 to 6 stage change; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s11-d18-learning-review.md`, `science_check` = `checks/m-s11-d18-maths-check.md`.

## Assets

Inspected before choosing (24 Nov 2026, viewed on contact sheets): `ma12-bus-side-v1.png`; `ma12-wall-calendar-v1.png`; `ma11-alarm-clock-v1.png`; `ma11-coffee-cart-v1.png`; `ma12-phone-v1.png`.

Need: none new. Reused: the five plates above.

Coded: the dot plots, cluster outlines and gap bands, outlier rings, the fence builder and fences, the box plots, the decision path, the summary card, boards, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `InvestigationStrip` (mini), `DotPlot` (d07), `BoxPlot` (d16; outlier mode), `SpreadBrackets`, `FiveNumberCard` (d15), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row d18):
1. **`ClusterFinder`** for `DotPlot`: outlines around bunches and shaded gap bands from given ranges. Check: 6 to 18, 42 to 55, gap 18 to 42; A2 180 to 260, 950 to 1,400.
2. **`FenceBuilder`**: Q1 and Q3 lines, the IQR bracket copied 1.5 times outward from each quartile (one full copy, then a half), dashed fences, and rings on values outside. Check: sleep 4.25 and 10.25 (3 outside); commute −46 and 106 (none outside); A1 30.25 and 72.25 (96 outside).
3. **`BoxPlot` whisker snap**: in outlier mode the whisker retracts to the furthest value inside the fences and outliers become points. Check: 3 → whisker to 5.5.
4. **`SummaryCard`** with two columns and blank cells that fill later. Reused d19.

## Codex asset brief

No new plate. All five plates exist and were viewed.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify".
2. Confirm the syllabus quotes match the route-inputs JSON exactly (including "Q_1 - 1.5 × IQR" as written in the crosswalk).
3. Confirm "a value well away from the rest of the data" matches Year 12 b02's plain meaning, and that a value exactly on a fence is not an outlier (NSW Standard practice).
4. Confirm the example explanations (a bus breakdown; a late flight; a festival) are labelled as examples.
5. Confirm both attempts carry every demand and show no answer; scene 1 opens on d17's final frame exactly; scene 12 matches d19's Boundary.
6. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Clusters, Gaps and Outliers | Year 11 Maths Standard

(Title length: 52 characters.)

Description: Related lesson notes: https://hscscience.com.au/subjects/maths-standard/year11/data-analysis/lesson13.sa.html

A 95-minute trip to school and a 3-hour night's sleep: unusual, or just different? Learn to spot clusters and gaps and explain them in context, test outliers formally with the fences Q1 − 1.5 × IQR and Q3 + 1.5 × IQR, draw a box plot with an outlier shown as a point, decide what to do with an outlier, and see where the rule needs a second look. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 11, Data analysis. For Standard 1 and Standard 2.
Syllabus content (NSW Mathematics Standard 11-12, 2024, Year 11):
"Identify clusters, gaps and outliers and explain their occurrence in the context of the data"
"Apply Q_1 - 1.5 × IQR and Q_3 + 1.5 × IQR to formally identify outliers"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-11/fa4de413b8

Builds on: Parallel Box Plots: Comparing Two Groups. Next: The Effect of an Outlier on Centre and Spread.

#Year11Maths #MathsStandard #Statistics #HSCScience

## Open decisions

- **1. The rule's limit.** Scene 6 shows the fences missing the 95-minute trip in clustered data (one sentence and one picture). If the review finds it confusing at Standard pace, the sentence can go and the commute stays a clusters-and-gaps example only.
- **2. The description quotes "Q_1" as the crosswalk writes it.** The NESA page uses subscripts; the description may show "Q1" if subscripts don't render.

## Review notes

- Revision 1. Next: student learning review (trace from d17; check that clusters, gaps and outliers each get an explanation in context, that the fences are built from the IQR before the formula is written, that the whisker snap matches d16's promise, that "keep and report" has its reason, and that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
- Revision 2 (24 Nov 2026): learning review resolved (D18-GAP; D18-FENCE unchanged). Next: Codex maths check and error check, then voicing and a build to grade A.

## Revision 3 (root, 25 November 2026): preflight and fact repairs

This section overrides earlier text. Sources: `../checks/m-s11-d18-maths-check.md`, `../checks/maths-standard-y11-official-facts.md` and `../checks/brief264-fact-checks-2026-11-24.md`. Repair log: `../checks/m-s11-preflight-repair-2026-11-25.md`.

- **Count (count-mismatch): fixed.** The declared 5,588 included the spaces between scenes; the sum of the 13 scene strings at Revision 2 was 5,576 (Codex's value). Narration is **5,576 characters**. Counted in Python the same way as Codex (`> ` lines inside each `### N.` scene joined with a space, `**` removed, scenes summed with no separator; Revision 2 sum matches `work/brief272/source-inventory.json`). At 13.3 characters per second the speech is about 419 s; total about 502 s with holds, under the 570 s cap. The header line is updated; earlier totals under "Narration length estimate" and in Revision 2 are superseded.
- **Official facts:** none in the fact sheets apply to this design.
- **Recurring data.** The recurring constructed data (the 20-student sleep sample, the 12/8 bedroom and elsewhere split, the screen-time values, the nearby and bus splits) are unchanged, so they stay consistent across the strand; brief 272's recurring-data check passed them. They are teaching data, not population estimates.
- **Narration changed: no.**
- No em or en dashes added. Ready for the Codex re-check; human listening still pending.
