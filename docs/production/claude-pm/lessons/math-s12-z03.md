# Maths S12 Z03: How do z-scores compare results from different tests? Different tests on different rulers, both results turned into z-scores, a conclusion written in context, a lower mark that wins, times where lower is better, and three results ranked (design)

Status: Revision 1 (19 Nov 2026): first design, written to the maths visual standard (`../maths-visual-standard.md`), the accepted Standard designs (`math-s12-r12a.md`, `t05.md`, `i09.md` at Revision 2, and the t-strand resolution logs), the Year 12 Advanced normal distribution designs `math-a12-s09.md` to `s12.md` (visual approach only) and root's Standard rulings (1 to 74). Designer's decisions for z01 to z06, including every join: `../checks/root-decisions-maths-s12-z01-z06.md`. Next: student learning review, then the Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,126 characters by script (see "Narration length estimate"), 14 scene headings, about 488 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: third video of The normal distribution strand, playlist order 79. **Standard 2 only** (ruling 68). Pre-design pack: `../pre-design/maths-standard/math-s12-z03.md`. Site lessons (read through the pack's quotations, read only): `maths-standard/year12/the-normal-distribution/lesson07.sa.html` (SHA256 `02538caa91989ae43d07cd49cc1ab935e1fa3482f2f1f779c4695b447649a2f8`; think first, 72 (mean 60, SD 8) against 85 (mean 75, SD 10); card 06, "Student A performed better relative to their class ($z = 1.5 > 1.0$), even though their raw score is lower."; `we-1` (a), Ava, Maths 72 (mean 64, SD 8) and English 77 (mean 70, SD 5), "$1.4 > 1.0$, so Ava performed better in English relative to her class."; activity 2, Sarah, Tom and Emma) and `lesson08.sa.html` (SHA256 `ca18927cfda5ccddc74b7e1f56cc7f7f8030095f18d4f86a8e85a26f5464fe9d`; card 06, why the spread changes a comparison). Route entry: `math-s12-z03` in `../../programme/maths-standard-route-inputs-7.json`. Visual system: maths studio kit; Ava's two report cards (z02's final frame) as the anchor; number lines and the shared z-line coded; the stopwatch plate for the times.

Owner rules applied: plates for real objects, code for diagrams; no people, hands or faces (names on plain score cards only); one main question; one stage at a time; words before symbols; plain meanings ("relative to the class", "raw mark"); g01 worked example; two attempts with "Pause here to answer." and 10 s countdowns; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (school reports, a swimming carnival, an athletics carnival); Australian spelling; no em dashes; conversational narration; text above y = 950.

Syllabus content point (Mathematics Standard 11-12 (2024), Year 12), quoted from `../../programme/maths-standard-route-inputs-7.json`:

Standard 2 (The normal distribution):
- `ci115110e6`: "Use z-scores to compare scores from different datasets and justify conclusions in the context of the problem"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa92309f60

**Boundary:** starts from z02's final frame exactly (section 2 of `../checks/root-decisions-maths-s12-z01-z06.md`, z02 → z03): two plain report cards side by side, each headed "Ava"; "Maths: 72" over "class mean 64, standard deviation 8"; "English: 77" over "class mean 70, standard deviation 5"; chip "which result is better?"; chips "Next" and "?". Recalls z02 (the z-score and its formula; the σ-ruler) and Year 11 (σ as spread) in a phrase or grey chip. Teaches: raw marks from different tests sit on different scales; turn each result into a z-score; the higher z is the stronger result relative to its own group; the conclusion as a sentence with both z-scores; a lower raw mark can be the better result; for times, the more negative z is better; ranking three results. Stops before percentages of a class below a mark (z05 owns `we-1` (b) and (c)).

## Decisions

- **Anchor: Ava's report (the site's `we-1` (a); z02's handoff).** Maths (72 − 64)/8 = 1.0; English (77 − 70)/5 = 1.4. English is better relative to her class. The two classes' number lines are drawn on their own scales first (scene 2), so the student sees why "8 above" and "7 above" cannot be compared before any z is calculated.
- **Same raw gap, different step size (scene 2).** 8 marks above with steps of 8 is one step; 7 marks above with steps of 5 is 1.4 steps. The σ-ruler from z02 is reused on each line.
- **The written conclusion (scene 4).** Sentence frame on screen: "[Name] did better in [test] relative to the class, because the z-score [value] is higher than [value]." Filled for Ava. Every later example ends on a sentence (the syllabus says "justify conclusions in the context of the problem").
- **A lower mark that wins (scene 5; the site's think first and card 06).** 72 on test A (mean 60, SD 8): z = 1.5; 85 on test B (mean 75, SD 10): z = 1.0. The 72 is the stronger result. Labelled "Test A" and "Test B" score cards only.
- **When lower is better (scene 6).** An original swimming carnival time: 50 m freestyle, mean 36.0 s, SD 1.0 s; a swim of 34.5 s gives z = −1.5, one and a half standard deviations faster than the mean. The stopwatch plate (`ma12-stopwatch-v1.png`) carries the time. The rule: for times, the more negative z is the better result. Attempt 2 then mixes a time and a distance.
- **Worked example: the site's activity 2, ranked (g01).** Sarah, Maths 78 (mean 70, SD 8): 1.0; Tom, Science 82 (mean 75, SD 6): 7/6 = 1.17; Emma, History 85 (mean 80, SD 12): 5/12 = 0.42. Order Tom, Sarah, Emma (the site gives no answer; the ranking is computed). Crossed slip "Emma, Tom, Sarah (by marks)" (caption "rank by z-scores, not by marks"). The site's SA 2 (all 1.0) is not used, for pace; key note 5 is not needed for it.
- **Simulations (standard item 3).**
  1. **Two rulers onto one line** (scenes 2 and 3; `ScoreCompare`): Maths' line (40 to 88, ticks every 8) and English's line (55 to 85, ticks every 5) stacked, each with a violet σ-ruler laying steps from its mean to Ava's dot with a live count (1.0 and 1.4); on cue both dots slide down onto one shared z-line (−3 to 3), English's dot landing beyond Maths'.
  2. **Lower is better** (scene 6; `ScoreCompare` with the new lower-is-better flag): the swim's dot slides onto the z-line at −1.5, and a "faster" arrow on the z-line points left (green ring on the most negative z).
- **Colour roles (the strand's).** The bell teal (small bells above each line); data values (marks, times) and their dots **blue**; μ, σ-steps and z-scores **violet**; areas amber (none here); answer green; mistake red, crossed slips only; older rows grey.
- **Large type, handwritten voice.** Current rows 52 px, supporting rows 32 px, task strips 44 px. Hand tags: "steps of 8", "steps of 5", "8 above = 1 step", "7 above = 1.4 steps", "one ruler for both", "both z-scores in the sentence", "lower mark, higher z", "times: lower is better", "faster", "spread out class". At most two live at once.
- **Stage changes (standard item 2).** z02's frame (1); two number lines (2); one z-line (3); the sentence frame (4); test A and test B (5); the stopwatch and the swim (6); g01 board, three results (7); framed card (8); question cards (9 to 12); the loaf bell (13); key notes (14).
- **Worked example (g01 layout).** Scene 7: task strip "Sarah scored 78 in Maths (class mean 70, standard deviation 8). Tom scored 82 in Science (class mean 75, standard deviation 6). Emma scored 85 in History (class mean 80, standard deviation 12). Rank them by how well they did relative to their class."; givens card in three rows (marks blue; means and standard deviations violet); equation strip "z = (x − μ)/σ"; rows "Sarah: (78 − 70)/8 = 1.00", "Tom: (82 − 75)/6 = 1.17", "Emma: (85 − 80)/12 = 0.42"; framed "Tom, then Sarah, then Emma" (green); crossed slip "Emma, Tom, Sarah (by marks)".
- **Memory aid.** Framed card: "Different tests, different rulers: compare z-scores." Key line: "Higher z is better, unless lower is better (like times): then the more negative z wins."
- **Visual surprise.** The two dots slide off their own lines onto one z-line and the "smaller-looking" English gap lands further right (3); in scene 5 the 72 lands beyond the 85.
- **Plain meanings at first use.** Raw mark ("the mark itself, before any comparison"); relative to the class ("compared with the others who sat the same test"); "justify in context" ("say what you decided, about these results, and give the numbers that show it").
- **Attempts (original, HSC style).** A1 (pack question 1): Mia, Business Studies 68 (mean 60, SD 5): 1.6; Maths 81 (mean 75, SD 4): 1.5; Business Studies is better; crossed "Maths, because 81 > 68" (caption "compare z-scores, not raw marks"). A2 (pack question 2): Sam, 100 m 13.2 s (mean 14.0, SD 0.5): −1.6; long jump 4.85 m (mean 4.5, SD 0.25): 1.4; the 100 m is better; crossed "long jump, because 1.4 > −1.6" (caption "for times, below the mean is faster").
- **Mistake scene:** none separate. Comparing raw marks (2 said, 7 crossed, A1 crossed); comparing gaps without dividing by σ (2); the larger z chosen for a time (6 said, A2 crossed); a conclusion without numbers (4 said).
- **Cause chain taught, in order:** (1) each test has its own mean and spread, so a mark only means something against its own class (2); (2) a z-score measures each result in its own class's standard deviations, which puts both on one scale (3); (3) the higher z is further above its own class, so it is the stronger result, and the sentence must show both numbers (4); (4) a lower raw mark can sit more standard deviations above a lower or tighter class (5); (5) for times, being below the mean means faster, so the more negative z is better (6); (6) a spread-out class makes each mark above the mean count for less (7).
- **Entry knowledge (route):** math-s12-z02 (the z-score and its sign); math-s11-d13 (σ as spread). Recalled in a phrase or grey chip.
- **Handoff (to math-s12-z04, "How does the 68-95-99.7 rule describe normal data?").** Scene 13's frame, exactly as section 2 of the decisions file (z03 → z04): the bench scale with the loaf (display blank), and the loaf bell (teal) on a gram axis 690 to 730 with μ at 710 (violet) and violet dashed marks at 695, 700, 705, 715, 720, 725; the band from 705 to 715 outlined in dashed amber but not filled; chips "mean 710 g", "standard deviation 5 g", "what fraction of loaves lie within one standard deviation?"; chips "Next" and "?". No percentage is shown.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Ava: (72 − 64)/8 = 1; (77 − 70)/5 = 7/5 = 1.4. Lines: Maths 40 to 88 (μ ± 3σ), English 55 to 85.
  (b) Think first: (72 − 60)/8 = 12/8 = 1.5; (85 − 75)/10 = 1.
  (c) Swim (original): (34.5 − 36.0)/1.0 = −1.5.
  (d) Activity 2: 8/8 = 1; 7/6 = 1.16667, so 1.17; 5/12 = 0.41667, so 0.42. Raw order 85, 82, 78 (Emma, Tom, Sarah); z order Tom, Sarah, Emma.
  (e) A1: (68 − 60)/5 = 1.6; (81 − 75)/4 = 1.5. A2: (13.2 − 14.0)/0.5 = −1.6; (4.85 − 4.5)/0.25 = 1.4.
  (f) Pronunciations: "one point four"; "minus one point six"; "thirty-four point five seconds".

Main question: *Ava got 72 in Maths (class mean 64, standard deviation 8) and 77 in English (class mean 70, standard deviation 5). Which result is really better, and how do z-scores compare results from different tests?*
Entry knowledge (z02; Year 11 σ): z-scores and their sign.
Stops after: comparing two or three results by z-score, a written conclusion, lower-is-better times. No percentages.
Handoff: the loaf bell with the band 705 to 715 g outlined, "what fraction of loaves lie within one standard deviation?" (z04).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): bell teal; data blue; μ, σ-steps and z violet; answer green; mistake red. Header strip "MATHEMATICS STANDARD · THE NORMAL DISTRIBUTION". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: Ava's two results
> Here are Ava's two results, seventy-two in Maths and seventy-seven in English. Seventy-seven looks better, but the two tests were different. The Maths class had a mean of sixty-four and a standard deviation of eight. The English class had a mean of seventy and a standard deviation of five. So which result was really better? How do z-scores compare results from different **tests**?

Visual: opens on z02's final frame exactly. On the first sentence "Next" fades and both marks pulse blue. On "Maths class" the left card's "class mean 64, standard deviation 8" glows violet; on "English class" the right card's line glows. On "really better" the chip "which result is better?" rings. On "tests" heading "Comparing with z-scores" writes on and the question chip moves to the top right.

### 2. different tests, different rulers
> Put each mark on its own class's number line. The Maths marks are spread out, with steps of eight. The English marks are bunched up, with steps of five. In Maths, Ava is eight marks above the mean. In English, she's seven above. Seven looks smaller, but each English step is only five marks, so seven marks there is more steps. The raw marks, the marks themselves, are on different scales, so we can't compare them **directly**. We have to count steps.

Visual: stage change: simulation 1. The cards shrink to the top. Two stacked number lines (about 1,500 px each): "Maths" 40 to 88, ticks every 8 (hand tag "steps of 8"), small teal bell above; "English" 55 to 85, ticks every 5 (hand tag "steps of 5"), small teal bell above. Violet μ triangles at 64 and 70; Ava's blue dots at 72 and 77. On "eight marks above" a blue bracket "8 above" on the Maths line; on "seven above" a bracket "7 above" on the English line. On "more steps" violet σ-ruler steps lay on each line with live counts, "1.0" and "1.4" (hand tags "8 above = 1 step", "7 above = 1.4 steps"). On "directly" a grey chip "different scales".

### 3. one ruler for both
> So find both z-scores. Maths is seventy-two minus sixty-four, eight, over eight, a z-score of one point zero. English is seventy-seven minus seventy, seven, over five, one point **four**. Now slide both onto one z line, where every step is the same size. One point four is further right, further above its class. Relative to her class, Ava did better in **English**.

Visual: camera continue. Rows at the right, 52 px: "Maths: z = (72 − 64)/8 = 1.0"; on "four" "English: z = (77 − 70)/5 = 1.4" (z values violet). On "slide both" both blue dots drop from their lines onto one shared z-line (−3 to 3, violet ticks) below, each keeping its label "Maths 1.0", "English 1.4" (hand tag "one ruler for both"). On "English" the English dot rings green.

### 4. say it in context
> In an exam, the answer alone isn't enough. Write one sentence that says what you decided, about these results, and gives both numbers. Ava did better in English relative to her class, because her English z-score, one point four, is higher than her Maths z-score, one point **zero**. That's a conclusion in **context**.

Visual: stage change to a sentence frame, 44 px, on a card: "______ did better in ______ relative to the class, because the z-score ______ is higher than ______." On "says what you decided" the first two blanks glow; on "gives both numbers" the last two glow (hand tag "both z-scores in the sentence"). On "zero" the frame fills: "Ava did better in English relative to her class, because her English z-score (1.4) is higher than her Maths z-score (1.0)." (names ink, z values violet). On "context" the sentence is framed green.

### 5. the lower mark can win
> Here's the surprise. Sometimes the lower mark is the better result. On test A, the mean was sixty and the standard deviation was eight, and someone scored seventy-two. On test B, the mean was seventy-five and the standard deviation was ten, and someone scored eighty-five. The seventy-two has a z-score of twelve over eight, one point **five**. The eighty-five has ten over ten, one point **zero**. So the seventy-two was the stronger result, even though eighty-five is the bigger **number**.

Visual: stage change. Two score cards, "Test A: 72" (mean 60, standard deviation 8) and "Test B: 85" (mean 75, standard deviation 10), above two short number lines with σ-rulers. On the first "five" row "Test A: (72 − 60)/8 = 1.5"; on "zero" row "Test B: (85 − 75)/10 = 1.0". The dots slide onto the shared z-line; on "number" the 72's dot rings green beyond the 85's (hand tag "lower mark, higher z").

### 6. when lower is better
> Careful with times, because a lower time is better. At a swimming carnival, the fifty metre freestyle times have a mean of thirty-six seconds and a standard deviation of one second. A swim of thirty-four point five seconds has a z-score of minus one point **five**. Here, negative is good news. The swim was one and a half standard deviations faster than the mean. So for times, the more negative z-score is the better **result**.

Visual: stage change. The stopwatch plate `ma12-stopwatch-v1.png` (about 300 px) at the left with a coded reading "34.5 s" on its face (blue); a time line 33 to 39 s at the right with μ 36 (violet), steps of 1 s. On "mean of thirty-six" the μ triangle; on "thirty-four point five" the blue dot; row "z = (34.5 − 36)/1 = −1.5"; on "five" the σ-ruler lays 1.5 steps leftwards, "−1.5" (violet). On "good news" a green arrow along the z-line pointing left, labelled "faster" (hand tag "times: lower is better"); on "result" the −1.5 dot rings green.

### 7. worked example: rank three results
> Here's a worked example. Rank three students by how well they did relative to their class. Sarah got seventy-eight in Maths, where the mean was seventy and the standard deviation was eight. Tom got eighty-two in Science, with a mean of seventy-five and a standard deviation of six. Emma got eighty-five in History, with a mean of eighty and a standard deviation of twelve. Sarah's z-score is eight over eight, one. Tom's is seven over six, one point one **seven**. Emma's is five over twelve, zero point four **two**. So the order is Tom, then Sarah, then **Emma**. Emma had the highest mark but the lowest z-score, because her class was so spread out. Ranking by the marks, with Emma first, is the **slip**. Rank by the z-**scores**.

Visual: clear change to the g01 board. Task strip, 40 px: "Sarah scored 78 in Maths (class mean 70, standard deviation 8). Tom scored 82 in Science (class mean 75, standard deviation 6). Emma scored 85 in History (class mean 80, standard deviation 12). Rank them by how well they did relative to their class." (site lesson07 activity 2). Givens card in three rows (marks blue; means and standard deviations violet). Equation strip "z = (x − μ)/σ". Rows, 52 px: "Sarah: (78 − 70)/8 = 1.00"; on "seven" "Tom: (82 − 75)/6 = 1.17"; on "two" "Emma: (85 − 80)/12 = 0.42". Three dots slide onto a z-line under the rows. On "Emma" (first bold) framed "1st Tom, 2nd Sarah, 3rd Emma" (green). On "spread out" Emma's givens row glows "standard deviation 12" (hand tag "spread out class"). On "slip" a red slip "Emma, Tom, Sarah (by marks)" writes; on "scores" it is crossed (caption "rank by z-scores, not by marks").

### 8. memory aid
> Here's the summary. Different tests have different rulers, so compare z-scores, not marks. And finish with a sentence that uses both z-**scores**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the two lines and the shared z-line with Ava's dots. Main line, hand font 56 px: "Different tests, different rulers: compare z-scores." On "scores" the key line, 40 px: "Higher z is better, unless lower is better (like times): then the more negative z wins." Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. Mia scored sixty-eight in a Business Studies test, where the class mean was sixty and the standard deviation was five. She scored eighty-one in a Maths test, where the class mean was seventy-five and the standard deviation was four. In which test did Mia do better relative to her class? Justify your answer with z-scores. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Mia scored 68 in a Business Studies test (class mean 60, standard deviation 5) and 81 in a Maths test (class mean 75, standard deviation 4). In which test did Mia perform better relative to her class? Justify your answer with z-scores." Picture slot: two plain blank score cards headed "Business Studies" and "Maths" with the marks only. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> Business Studies is sixty-eight minus sixty, eight, over five, one point **six**. Maths is eighty-one minus seventy-five, six, over four, one point **five**. So Mia did better in Business Studies relative to her class, because one point six is higher than one point five. Choosing Maths because eighty-one is bigger is the slip. Compare the z-scores, not the **marks**.

Visual: the card shrinks to the top (30 px). Rows, 44 px: "Business Studies: (68 − 60)/5 = 1.6" (on "six"); "Maths: (81 − 75)/4 = 1.5" (on "five"). Framed sentence (green): "Mia did better in Business Studies relative to her class, because 1.6 > 1.5." On "slip" a red slip "Maths, because 81 > 68" writes; on "marks" it is crossed (caption "compare z-scores, not raw marks"). Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. At an athletics carnival, Sam ran a hundred metres in thirteen point two seconds. The year group's mean was fourteen seconds, with a standard deviation of zero point five. Sam long jumped four point eight five metres. The mean was four point five metres, with a standard deviation of zero point two five. In which event did Sam do better relative to the year group? Explain. Pause here to answer.

Visual: `QuestionCard`, 40 px: "At a school athletics carnival, Sam ran 100 m in 13.2 s (year group mean 14.0 s, standard deviation 0.5 s) and long jumped 4.85 m (year group mean 4.5 m, standard deviation 0.25 m). In which event did Sam perform better relative to the year group? Explain." Picture slot: the stopwatch plate (180 px) with a blank face beside a coded tape measure. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 12. feedback 2 (brief)
> The sprint is thirteen point two minus fourteen, over zero point five, minus one point **six**. That's one point six standard deviations faster than average. The long jump is zero point three five over zero point two five, one point **four**. So the hundred metres was Sam's better event. Picking the long jump because one point four is bigger is the slip. For times, below the mean is **faster**.

Visual: the card shrinks to the top. Rows, 44 px: "100 m: (13.2 − 14.0)/0.5 = −1.6" (on "six"; a green "faster" arrow beside it); "long jump: (4.85 − 4.5)/0.25 = 1.4" (on "four"). Framed sentence (green): "The 100 m was better: 1.6 standard deviations faster than the mean, against 1.4 above." On "slip" a red slip "long jump, because 1.4 > −1.6" writes; on "faster" it is crossed (caption "for times, below the mean is faster"). Hold about 1 s.

### 13. handoff: the loaves' band
> So z-scores put different results on one ruler. Next, back to the bakery. The loaves have a mean of seven hundred and ten grams and a standard deviation of five. One standard deviation either side runs from seven oh five to seven fifteen grams. What fraction of all the loaves land in that **band**?

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the handoff frame (exactly as decisions file section 2, z03 → z04): the bench scale `ma11-produce-scale-v1.png` (about 420 px wide, left) with the loaf `ms12-bread-loaf-v1.png` (about 300 px) on its tray and a blank display; the loaf bell (teal, about 1,200 px) on a gram axis 690 to 730 with the violet μ line at 710 and violet dashed marks at 695, 700, 705, 715, 720, 725; on "seven oh five to seven fifteen" the band from 705 to 715 outlines in dashed amber (not filled); on "band" chips "mean 710 g", "standard deviation 5 g", "what fraction of loaves lie within one standard deviation?", and "Next" and "?". No percentage is shown. Hold about 2 s. Scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Different tests, different means and spreads: don't compare raw marks.
- Find each z = (x − μ)/σ; the higher z is better relative to the group.
- A lower mark can have the higher z.
- Times (lower is better): the more negative z is better.
- Conclude in a sentence with both z-scores.

Memory aid (framed card, right side, as in scene 8): *Different tests, different rulers: compare z-scores.* Key: *Higher z is better, unless lower is better (like times): then the more negative z wins.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 13's frame exactly. This is the final frame: z04 opens on it.

## Teaching checks

- **Does it explain causes?** Why raw marks mislead: each class has its own mean and step size (2). Why z-scores fix it: each result is counted in its own class's standard deviations, so all land on one ruler (3). Why the lower mark wins: it sits more steps above its class (5). Why the more negative time wins: below the mean is faster (6). Why Emma ranks last: her class is spread out, so five marks above is less than half a step (7).
- **Misconceptions addressed:** comparing raw marks (2, 7, A1); comparing gaps without dividing (2); the larger z for a time (6, A2); a conclusion with no numbers (4).
- **Visual standard, item by item:** 1 the report cards and the stopwatch; 2 a new stage every 30 to 60 s; 3 the two rulers counting live, the dots sliding onto one z-line; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 board in 7; 8 framed card and five bullets; 9 the smaller-looking gap landing further right.
- **One idea at a time:** different scales (2), z on one line (3), the sentence (4), lower mark wins (5), times (6), ranking (7).
- **Response opportunity:** two unseen HSC-style tasks with every demand and every given visible; 10 s each; feedback about 27 s and 29 s.
- **Avoided double teaching:** z02's formula and ruler are phrases and grey chips.
- **Syllabus coverage:** `ci115110e6`: "compare scores from different datasets" (2, 3, 5 to 7, A1, A2), "justify conclusions in the context of the problem" (4, 7, A1, A2); key notes 1 to 5.
- **Out of scope by design:** the percentage of a class below a mark (z05).

## Practice questions and model answers

**Attempt 1 (scene 9; pack question 1, original, HSC style, 3 marks suggested, not an official marking scheme).** "Mia scored 68 in a Business Studies test (class mean 60, standard deviation 5) and 81 in a Maths test (class mean 75, standard deviation 4). In which test did Mia perform better relative to her class? Justify your answer with z-scores."
Model answer: Business Studies: z = (68 − 60)/5 = 1.6. Maths: z = (81 − 75)/4 = 1.5. Mia performed better in Business Studies relative to her class, because 1.6 > 1.5, even though her Maths mark is higher. Classic mistake (crossed): "Maths, because 81 > 68".

**Attempt 2 (scene 11; pack question 2, original, HSC style, 3 marks suggested).** "At a school athletics carnival, Sam ran 100 m in 13.2 s (year group mean 14.0 s, standard deviation 0.5 s) and long jumped 4.85 m (year group mean 4.5 m, standard deviation 0.25 m). In which event did Sam perform better relative to the year group? Explain."
Model answer: 100 m: z = (13.2 − 14.0)/0.5 = −1.6, so 1.6 standard deviations faster than the mean (a lower time is better). Long jump: z = (4.85 − 4.5)/0.25 = 1.4. The 100 m was the better performance: 1.6 standard deviations better than average, against 1.4. Classic mistake (crossed): "long jump, because 1.4 > −1.6".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Ava (site `we-1` (a)) | Maths 72, 64, 8: 1.0; English 77, 70, 5: 1.4 | 1 to 4, 8 |
| Site think first | Test A 72, 60, 8: 1.5; Test B 85, 75, 10: 1.0 | 5 |
| Swim (original) | 34.5 s; mean 36.0 s; SD 1.0 s; −1.5 | 6 |
| Site activity 2 | Sarah 78, 70, 8: 1.00; Tom 82, 75, 6: 1.17; Emma 85, 80, 12: 0.42; Tom, Sarah, Emma | 7 |
| A1 | 68, 60, 5: 1.6; 81, 75, 4: 1.5 | 9, 10 |
| A2 | 13.2, 14.0, 0.5: −1.6; 4.85, 4.5, 0.25: 1.4 | 11, 12 |
| Handoff (z04's) | μ 710 g; σ 5 g; band 705 to 715 g (no percentage) | 13 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with exact fractions in Python 3.14 (19 Nov 2026, scratchpad `z/verify.py`, `python -I`); Codex to re-check.

- (72 − 64)/8 = 1; (77 − 70)/5 = 1.4.
- (72 − 60)/8 = 1.5; (85 − 75)/10 = 1.
- (34.5 − 36.0)/1.0 = −1.5.
- (78 − 70)/8 = 1; (82 − 75)/6 = 1.166 667 → 1.17; (85 − 80)/12 = 0.416 667 → 0.42.
- (68 − 60)/5 = 1.6; (81 − 75)/4 = 1.5.
- (13.2 − 14.0)/0.5 = −1.6; (4.85 − 4.5)/0.25 = 1.4.
- 710 ± 5 = 705, 715; marks at 695, 700, 720, 725.

## Memory aid check

- **"Different tests, different rulers: compare z-scores."** with key line **"Higher z is better, unless lower is better (like times): then the more negative z wins."** From the site's card 06 ("Student A performed better relative to their class ... even though their raw score is lower") and the syllabus wording. Meaning, as said in scenes 2, 3, 6 and 8. Assumptions checked: each result is compared with its own group's mean and standard deviation; "better" means relative to the group, not an absolute standard; for measures where lower is better the direction flips. It helps a new case: a 5 km run of 24 min (mean 27, SD 2) gives −1.5 and a shot put of 9.0 m (mean 8.0, SD 0.8) gives 1.25; the run is better.
- **Considered, not used:** "Divide by the spread" alone (true, but says nothing about times or the sentence).

## Narration length estimate

Counted by script (scratchpad `z/count.py`, the method of `work/brief-resolve-standard-t1/count.py`, which reproduces e08's 5,632): **5,126 characters**, 14 scene headings. Characters per scene (1 to 14): 379, 448, 358, 310, 480, 422, 714, 142, 355, 357, 406, 385, 295, 75.

At 13.3 characters per second the speech is about 385 s. Holds and settling: two 10 s countdowns (20 s); short holds (memory card 2 s, feedbacks 1 s each, handoff 2 s) 6 s; settling for the two rulers (2), the slide onto one z-line (3), the sentence frame filling (4), the test A and B slide (5), the swim (6) and the board's three dots (7) about 38 s; the key-notes scene is 45 s, of which its 75-character line is about 6 s, so about 39 s more. Total **about 488 s**, under the 570 s cap. Feedback speech: about 27 s and 29 s.

Reserve trims if the voiced take runs long: scene 7's "Emma had the highest mark but the lowest z-score, because her class was so spread out." (about 6 s; the hand tag keeps the idea); scene 5's second sentence (about 4 s).

## Scene list and build ids

Lesson key `m-s12z03` (route math-s12-z03). Explainer folder `src/explainer/lessons/math-s12-z03`; build inputs in `docs/production/claude-pm/lessons/math-s12-z03/` (at voicing).

In order (14 scene headings): hook-ava-results, different-rulers, one-ruler, say-it-in-context, lower-mark-wins, lower-is-better, worked-rank-three, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff-loaf-band, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 30 s | 1 | z02's frame; Ava's two results |
| 30 to 70 s | 2 | Two number lines, two rulers |
| 70 to 100 s | 3 | One z-line |
| 100 to 125 s | 4 | The sentence frame |
| 125 to 160 s | 5 | Test A and test B |
| 160 to 195 s | 6 | The swim: lower is better |
| 195 to 260 s | 7 | g01 board: three results ranked |
| 260 to 275 s | 8 | Framed memory card |
| 275 to 390 s | 9 to 12 | Question cards and countdowns, then feedback |
| 390 to 415 s | 13 | The loaf bell with the band outlined |
| 415 to 460 s | 14 | Key notes, then a silent return to scene 13's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: z02's last frame continues into 1; 1 to 2 stage change; 2 to 3 camera continue; 3 to 4 stage change; 4 to 5 stage change; 5 to 6 stage change; 6 to 7 clear change to the board; 7 to 8 stage change; attempts and feedback: the card shrinks to the top; 12 to 13 board clear; 13 to 14 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-z03-learning-review.md`, `science_check` = `checks/m-s12-z03-maths-check.md`.

## Assets

Inspected before choosing (19 Nov 2026, opened at full size): `ma12-stopwatch-v1.png` (a silver mechanical stopwatch with a blank cream face and minute ticks, 1086 × 1448, true alpha; the face takes a coded reading; reads at 300 px and at 180 px). `ma11-produce-scale-v1.png` (bench scale, blank display; final frame). Not used (Advanced anchor, ruling 7): s11's fish plates.

Need (painted): none new. Reused: the stopwatch, the bench scale, the loaf (p08's brief).

Coded: the report and score cards, number lines, σ-rulers, the shared z-line, the sentence frame, the time line, the tape measure, the board, the loaf bell and its marks, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `PlateImg`, `HandTag`, `DrawnMark`, `ScoreCompare` (`items`, `toZ`), `SigmaRuler`, `NormalCurve` (`marks`, small bells), the g01 `WorkingBoard` parts, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row z03):
1. **Lower-is-better flag on ScoreCompare** (small): reverses the "best" cue so the most negative z rings green and a "faster" arrow points left on the z-line. Check: the swim at −1.5 rings green; in A2's feedback −1.6 is marked better than 1.4.

## Codex asset brief (Maths S12 Z03)

No new plate. Before the z03 build, check `ma12-stopwatch-v1.png` at 300 px and 180 px on the paper background (`#f6f1e7`) with a coded reading "34.5 s" (40 px) inside its face, centred; report if the face is too small for the reading at 300 px. Append the check to `status.md`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" with a CAS, and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quote matches the route-inputs JSON exactly, under the Standard 2 heading only.
3. Confirm the site's `we-1` (a) (1.0 and 1.4), think first (1.5 and 1.0) and activity 2 values keep their numbers, and that the ranking Tom, Sarah, Emma is right.
4. Confirm both attempts carry every demand and given, and neither card nor picture shows an answer.
5. Confirm scene 1 opens on z02's final frame exactly, and scene 13's frame matches z04's opening (section 2 of the decisions file).
6. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its scene's Visual in spoken order, and all text above y = 950.

## YouTube metadata (draft)

Title: Comparing Results with z-Scores | Year 12 Maths Standard 2

(Title length: 58 characters by script.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/the-normal-distribution/lesson07.sa.html

Ava scored 72 in Maths and 77 in English, but the two classes had different means and spreads. Which result was really better? Learn why raw marks from different tests can't be compared directly, turn each result into a z-score, and write the conclusion in a sentence with both z-scores. See how a lower mark can be the better result, why the more negative z-score wins for times, and rank three results. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 12, The normal distribution. Standard 2.
Syllabus content, Standard 2 (NSW Mathematics Standard 11-12, 2024):
"Use z-scores to compare scores from different datasets and justify conclusions in the context of the problem"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa92309f60

Builds on: z-Scores: How Far From the Mean? Next: The Empirical Rule: 68, 95, 99.7.

#Year12Maths #MathsStandard #zScores #HSCScience

## Open decisions

- **1. The swim (root).** An original time context (50 m freestyle, mean 36.0 s, SD 1.0 s) teaches "lower is better" before attempt 2 mixes a time and a distance, so the attempt is not the first time the student meets it. The pack's basketball and netball pair is not used (one more comparison of the same kind as Ava's).
- **2. The site's SA 2 (all z = 1.0) (root).** Left out for pace. If wanted, it fits as one sentence in scene 7 (about 10 s).

## Review notes

- Revision 1. Next: student learning review (trace from z02; check that the two rulers make "different scales" visible before any formula, that the sentence frame is followable, that "lower is better" lands before attempt 2, that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
