# math-s12-z06: How do z-scores tell us whether a result is unusual?

Maths Standard research pack (Year 12, The normal distribution), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, The normal distribution, Probability using z-scores):

- `cicf797bee`: Use z-scores to identify probabilities of events less or more extreme than a given event and solve problems [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa92309f60). Site coverage: covered.
- `ci36168bef`: Use z-scores to make judgements related to outcomes of a given event or sets of data [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa92309f60). Site coverage: covered.

These are CMS codenames, not published content-point codes.

**Course:** Standard 2 only. Playlist order 82. **Last normal distribution video.** **Standard 1:** not in the Standard 1 course (see z01).

**Entry knowledge:** math-s12-z05: `ci8b7ebb67`, `cicf71571a` (shaded areas from the rule). math-s12-z02 (z-scores).

**Prior video:** math-s12-z05.

**Start:** z05's final frame (proposed): a loaf reading 723 g on the scale, "is this loaf a problem?".

**Stop:** "More extreme" means further from the mean; the probability of a result at least as extreme as a given one (beyond z = 2 on one side 2.5%, either side 5%; beyond 3: 0.15% and 0.3%); |z| > 2 as the usual line for "unusual", |z| > 3 for "very unusual" (a convention, not a law); a value exactly 2 standard deviations away is on the line (the site's 484 mL bottle); judgements in context: quality control (accept, check, reject), a surprising test mark (unusual is not impossible), a batch decision from a count; the decision written with the z-score and its meaning. Final frame hands to math-s12-c01 (critical path analysis).

**Next:** math-s12-c01.

## 2. Site order, sections and worked examples

Read-only sources: [the-normal-distribution/lesson03.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/the-normal-distribution/lesson03.sa.html), SHA256 `75fc5aaa881ee73917745152df82bb12661b239d2a924938173498eeffe144a3`: `identify-unusual-values` (card 05, the bolt), `practise-empirical-rule-activities` (activity 2, juice bottles), `practise-empirical-rule` (MC 4, MC 5). [lesson05.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/the-normal-distribution/lesson05.sa.html), SHA256 `b6e3053ec2974ccd9f6a3deef897a85c23ea4a61a67d252f3457569d2419dcbe`: `apply-to-quality-control` (card 02, quick check), `find-counts-with-z-scores` (`we-1` (b)). [lesson07.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/the-normal-distribution/lesson07.sa.html), SHA256 `02538caa91989ae43d07cd49cc1ab935e1fa3482f2f1f779c4695b447649a2f8`: `interpret-z-score-magnitude` (card 07 table). [lesson06.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/the-normal-distribution/lesson06.sa.html), SHA256 `d4e654bcbf0d15841ccbf4dd5899b1f0bd15d43d8cd369c2a0468be454618d96`: `practise-normal-distribution` (MC 3).

### Source lesson03, card 05 and activity 2

Card 05: "A factory produces bolts with length μ = 10 mm, σ = 0.2 mm. A bolt measures 10.5 mm. Is this unusual? ... 0.5 ÷ 0.2 = 2.5 standard deviations above the mean. Since 2.5 > 2, this value is more than 2σ from the mean, it is unusual." Activity 2: "A machine fills juice bottles with μ = 500 mL, σ = 8 mL ... A bottle containing 484 mL; ... 520 mL; ... 510 mL" (answers "−2.0. Exactly 2σ below. This is borderline, on the boundary. Some would say not unusual (rule: strictly more than 2σ)", "2.5 ... unusual", "1.25 ... not unusual"). MC 5: "more than 3 standard deviations from the mean?" (0.3%).

### Source lesson05, card 02 and `we-1` (b); lesson06 MC 3

Card 02: "A machine fills bottles with a target volume of 750 mL ... μ = 750 mL, σ = 6 mL. Bottles outside the range 738–762 mL are rejected ... 5% are rejected. A bottle containing 765 mL: z = (765 − 750) ÷ 6 = 2.5." `we-1` (b): "One bag has a mass of 1017 g. Is it unusual?" ("$z = 1.4$ ... not unusual"). Lesson06 MC 3: "Battery life: $\mu = 500$ hours, $\sigma = 50$ hours. A battery lasts 650 hours." (D, "exactly 3 SD above mean, very unusual (only 0.15% above this)").

## 3. Recalculation

- Bolt 2.5; juice −2.0, 2.5, 1.25; bottles 2.5 and 5% rejected; rice 1.4; battery 3.0 (0.15% above); lesson03 MC 4: 95 with μ 150, σ 20 gives −2.75; lesson06 drill 1 (c): 40 with 65, 12 gives −2.08.
- More extreme than |z| = 2: 5% (2.5% each side); than |z| = 3: 0.3% (0.15% each side).
- Anchors: loaf 723 g gives 2.6; test mark 98 (mean 70, SD 10) gives 2.8; simulator reaction 1.0 s (mean 0.7 s, SD 0.1 s) gives 3.0.
- Question 1: 33 s gives 2.5 (unusual); 25 s gives −1.5 (not unusual). Question 2: slower than 32 s: 2.5%; at least 4 s from the mean either way: 5%.

Every value above was recalculated in Python with exact fractions (`work/brief-standard-zcf/recalc.py`). All site answers match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- Ignoring the sign and missing that a very low result is just as unusual as a very high one.
- Treating "unusual" as "impossible" or as proof of cheating or a fault.
- Mixing one-sided (2.5%) and two-sided (5%) "more extreme" probabilities.
- A decision with no number ("it's unusual") instead of "z = 2.6, more than 2 standard deviations above the mean, so unusual".
- Using the rule's percentages on skewed data.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- A z-gauge from −3 to 3 with a green zone (|z| ≤ 2), amber (2 to 3) and red (beyond 3); each tested value drops in as a needle with its z readout.
- "At least as extreme": both tails beyond the value's distance shade together, with the one-sided half shown after.
- A quality-control station: loaves pass a scale, each z computed; one at 723 g is set aside "check the oven"; a ticker "5% expected outside 700 to 720 g".
- A decision card frame: value, z, "unusual / not unusual", one sentence of action.

Advanced reuse (visual parts only): `ZSlider` (tail shading with a marker), `NormalCurve` with two-tail `shade`, `TailLadder`, `FillDial`'s flagging of short items as the pattern for set-aside loaves (motion only; s12's bottle-filler anchor is not reused). Kit needs: a small **z-gauge** (three-zone dial reading z, course-neutral; also usable in quality-control questions elsewhere).

## 6. Two original candidate practice questions

### Question 1

A café's espresso shots take a time that is normally distributed with a mean of 28 seconds and a standard deviation of 2 seconds. The café owner checks any shot that is unusual. (a) Is a 33-second shot unusual? (b) Is a 25-second shot unusual? Justify each answer with a z-score.

**Worked answer:** (a) (33 − 28) ÷ 2 = 2.5; more than 2 standard deviations above the mean, so unusual. (b) (25 − 28) ÷ 2 = −1.5; within 2 standard deviations, so not unusual.

### Question 2

For the espresso shots in Question 1: (a) what percentage of shots take longer than 32 seconds? (b) What percentage of shots are at least 4 seconds away from the mean, either faster or slower?

**Worked answer:** (a) 32 s is z = 2; one tail: (100 − 95) ÷ 2 = 2.5%. (b) At least 4 s away is |z| ≥ 2, both tails: 5%.

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief (one crossed-out mistake: Question 1 (b) "−1.5 is negative, so unusual", crossed, "unusual means far away, |z| > 2"; Question 2 (b) "2.5%", crossed, "either way: both tails").

## 7. Everyday anchors

- **The bakery's quality check:** a 723 g loaf (z = 2.6) is set aside and the oven checked (food, work; invented).
- **A surprising test mark:** 98 in a test with mean 70 and SD 10 (z = 2.8): unusual, not impossible (school; invented).
- **A driving simulator's reaction time:** 1.0 s against a mean of 0.7 s, SD 0.1 s (z = 3), very unusual: was the driver distracted? (road safety; invented and labelled "assume normal", since real reaction times are skewed).

Varied everyday contexts, no science. Repeat check (grepped 19 November 2026): no hits for "simulator" or "espresso" in the designs; the site's blood pressure (lesson05 SAQ 1) and newborn weights (lesson03 SAQ 1) are health contexts and are not used. Claude picks; none is required. Objects, never people.

## 8. Site corrections and decisions for Claude

No new error in the parts used here.

Decisions for Claude:

- **The boundary case:** say once that "unusual" usually means more than 2 standard deviations away, so exactly 2 sits on the line (the site's 484 mL bottle), and HSC questions state their own rule when it matters.
- **Judgement language:** every judgement names the z-score, compares it with 2 (or 3), and ends with an action in context.
- **Pace: fits.** More-extreme probabilities, the thresholds and three judgements fit 7 to 8 minutes.
- **Join to c01 (final frame, proposed):** the bakery-café at 6 am, the loaves checked and on the shelf; a chalkboard of morning jobs (switch on the oven, mix the muffin batter, bake muffins, heat pies, set out the display) with "what order, and how soon can we open?" (c01's café morning prep). Chip: "Normal distribution: done".

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
