# math-s12-z03: How do z-scores compare results from different tests?

Maths Standard research pack (Year 12, The normal distribution), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, The normal distribution, Calculating z-scores):

- `ci115110e6`: Use z-scores to compare scores from different datasets and justify conclusions in the context of the problem [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa92309f60). Site coverage: covered.

These are CMS codenames, not published content-point codes.

**Course:** Standard 2 only. Playlist order 79. **Standard 1:** not in the Standard 1 course (see z01).

**Entry knowledge:** math-s12-z02: `ci92695626`, `ci5c476cce` (the z-score and its sign). math-s11-d13: `ci14ad4af7` (σ as spread).

**Prior video:** math-s12-z02.

**Start:** z02's final frame (proposed): two report cards, Maths 72 (class mean 64, SD 8) and English 77 (class mean 70, SD 5), "which result is better?".

**Stop:** Raw marks on different tests are on different scales (different means and spreads); turn each into a z-score; the higher z is the stronger result relative to its own group; the conclusion written in context ("Ava did better in English relative to her class, because her English z-score, 1.4, is higher than her Maths z-score, 1.0"); a lower raw mark can be the better result (72 at z = 1.5 beats 85 at z = 1.0); when lower is better (race times), the more negative z is the better result; ranking three people. Not taught here: the percentage of the class below a mark (z05).

**Next:** math-s12-z04.

## 2. Site order, sections and worked examples

Read-only source: [the-normal-distribution/lesson07.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/the-normal-distribution/lesson07.sa.html), SHA256 `02538caa91989ae43d07cd49cc1ab935e1fa3482f2f1f779c4695b447649a2f8`. Sections used: `orient-z-scores` (think first), `compare-across-distributions` (card 06), `shade-areas-under-curve` (`we-1` steps 1 and 2 only), `consolidate-z-scores` (activity 2, revisit), `practise-z-scores` (SA 2). Also [lesson08.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/the-normal-distribution/lesson08.sa.html) (SHA256 `ca18927cfda5ccddc74b7e1f56cc7f7f8030095f18d4f86a8e85a26f5464fe9d`), `compare-spread` (card 06: smaller σ, more consistent), for the reason a spread changes the comparison.

### Source lesson07, think first, card 06 and `we-1`

Think first: "You score 72 on Test A (class mean = 60, SD = 8). Your friend scores 85 on Test B (class mean = 75, SD = 10). Who performed better relative to their class?" Card 06: "Student A performed better relative to their class ($z = 1.5 > 1.0$), even though their raw score is lower." `we-1`: "Ava scored 72 in a Maths test (mean 64, standard deviation 8) and 77 in an English test (mean 70, standard deviation 5) ... (a) In which subject did Ava perform better relative to her class?" ("$z_{\text{Maths}} = \dfrac{72 - 64}{8} = 1.0 \qquad z_{\text{English}} = \dfrac{77 - 70}{5} = 1.4$"; "$1.4 > 1.0$, so Ava performed better in English relative to her class.")

### Source lesson07, activity 2 and SA 2

Activity 2: "Sarah, Maths: 78 (mean 70, SD 8); Tom, Science: 82 (mean 75, SD 6); Emma, History: 85 (mean 80, SD 12). Rank them by relative performance." SA 2: "Ana, Maths: 78 (mean 70, SD 8); Ben, Science: 85 (mean 80, SD 5); Carla, English: 82 (mean 72, SD 10)" (all z = 1.0, "equally strong relative to their class").

## 3. Recalculation

- Think first: 1.5 and 1.0. `we-1`: 1.0 and 7/5 = 1.4. Activity 2: Sarah 1.0, Tom 7/6 = 1.17, Emma 5/12 = 0.42, so Tom, Sarah, Emma (the site gives no answer for this activity; this is the ranking). SA 2: 1.0, 1.0, 1.0.
- Anchor: basketball 24 points (league mean 15, SD 5) gives 1.8; netball 38 goals (mean 30, SD 4) gives 2.0.
- Question 1: Business Studies (68 − 60) ÷ 5 = 1.6; Maths (81 − 75) ÷ 4 = 1.5. Question 2: 100 m (13.2 − 14.0) ÷ 0.5 = −1.6; long jump (4.85 − 4.5) ÷ 0.25 = 1.4.

Every value above was recalculated in Python with exact fractions (`work/brief-standard-zcf/recalc.py`). All site answers match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- Comparing raw marks or the distance from the mean without dividing by σ.
- Comparing marks across classes as if a 77 always beats a 72.
- With times, picking the larger z (a slower run) as the better result.
- A conclusion with no context or no numbers ("English is better" without the two z-scores).
- Treating equal z-scores in different subjects as "different" because the raw marks differ (SA 2).

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- Two report cards whose marks sit on two separate number lines (each μ − 3σ to μ + 3σ with σ ticks); the dots then slide down onto one shared z-line, where English's 1.4 sits beyond Maths' 1.0.
- A "same raw gap, different step size" comparison: 8 marks above in Maths (steps of 8) is one step; 7 marks above in English (steps of 5) is 1.4 steps.
- A sign flip panel for race times (13.2 s is below the mean: z = −1.6, and faster is better).
- A sentence frame for the conclusion: "[name] did better in [subject] relative to the class, because the z-score [value] is higher than [value]."

Advanced reuse (visual parts only): `ScoreCompare` (normal-parts.tsx: raw lines sliding onto one z-axis; exactly this job), `SigmaRuler`; `WorkingBoard` and `AnswerFrame` (board.tsx). Advanced s11's fish plates are not used; score cards stay plain text. Kit needs: a small **"lower is better" flag** on ScoreCompare (reverses the colour cue so the most negative z is lit as best).

## 6. Two original candidate practice questions

### Question 1

Mia scored 68 in a Business Studies test (class mean 60, standard deviation 5) and 81 in a Maths test (class mean 75, standard deviation 4). In which test did Mia perform better relative to her class? Justify your answer with z-scores.

**Worked answer:** Business Studies: (68 − 60) ÷ 5 = 1.6. Maths: (81 − 75) ÷ 4 = 1.5. Mia did better in Business Studies relative to her class, because 1.6 > 1.5, even though her Maths mark is higher.

### Question 2

At a school athletics carnival, Sam ran 100 m in 13.2 s (the year group's mean was 14.0 s, standard deviation 0.5 s) and long jumped 4.85 m (mean 4.5 m, standard deviation 0.25 m). In which event did Sam perform better relative to the year group? Explain.

**Worked answer:** 100 m: (13.2 − 14.0) ÷ 0.5 = −1.6, so 1.6 standard deviations faster than the mean (a lower time is better). Long jump: (4.85 − 4.5) ÷ 0.25 = 1.4. The 100 m was the better performance: 1.6 standard deviations better than average, against 1.4.

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief (one crossed-out mistake: Question 1 "Maths, 81 > 68", crossed, "compare z-scores, not raw marks"; Question 2 "long jump, because 1.4 > −1.6", crossed, "for times, below the mean is faster").

## 7. Everyday anchors

- **Test results across subjects:** Ava's Maths and English (the site's `we-1`; school, the strand's own example).
- **An athletics carnival:** a sprint time against a jump distance, where lower is better for one of them (sport).
- **Two sports leagues:** a basketballer's 24 points (mean 15, SD 5, z = 1.8) against a netballer's 38 goals (mean 30, SD 4, z = 2.0) (sport; invented league figures, labelled).

Varied everyday contexts, no science. Repeat check (grepped 19 November 2026): Advanced s11 compares two fish catches; "carnival" and "netball" have no hits in the designs. Names appear only on plain score cards, never as drawn people. Claude picks; none is required.

## 8. Site corrections and decisions for Claude

No new error in the parts used here. The site gives no answer for activity 2; the ranking above (Tom, Sarah, Emma) is computed.

Decisions for Claude:

- **Keep `we-1` (a) here** and leave its (b) and (c) (percent of the class below Ava) to z05, so this video stays on comparison.
- **"Justify in context"** is part of the point: every example ends on a full sentence with both z-scores.
- **Pace: fits.** Two-test comparison, a lower raw mark winning, the race-time sign and a three-person ranking fit 6 to 7 minutes.
- Final frame: the loaf bell with bands about to be shaded, "what fraction of loaves lie within one standard deviation?" (z04's opening).

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
