# math-s12-z05: How do z-scores and shading under the curve give a probability?

Maths Standard research pack (Year 12, The normal distribution), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, The normal distribution, Probability using z-scores):

- `ci8b7ebb67`: Calculate probabilities using z-scores and the empirical rule [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa92309f60). Site coverage: covered.
- `cicf71571a`: Represent probabilities by shading areas under the normal distribution curve [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa92309f60). Site coverage: covered.

These are CMS codenames, not published content-point codes. Probabilities here come from the empirical rule only, so boundaries sit at whole z-scores (−3 to 3). A value between whole z-scores gives a range ("between 84% and 97.5%"), as the site's `we-1` (c) does; the site marks tables and supplied cut-offs as beyond the syllabus.

**Course:** Standard 2 only. Playlist order 81. **Standard 1:** not in the Standard 1 course (see z01).

**Entry knowledge:** math-s12-z04: `ci9d813bbf` (the bands and pieces 34, 13.5, 2.35, 0.15). math-s12-z02 (z-scores). math-s12-p02: `ci6224eb8c` (probability from 0 to 1, as a decimal or percentage) and math-s12-p06: `cib9b655d5` (expected number = probability × number of trials).

**Prior video:** math-s12-z04.

**Start:** z04's final frame (proposed): the loaf bell with the tail below 700 g shaded, "what's the chance a loaf is under its 700 g label?".

**Stop:** A probability is a shaded area; the whole curve is 1 (100%), each half 0.5; turn each boundary into a z-score first, sketch, then shade one of three shapes (less than, greater than, between); build the area from the pieces (P(z < 1) = 0.5 + 0.34 = 0.84; P(z > 1) = 0.16; P(−1 < z < 2) = 0.815); one tail beyond 2 is 2.5%; a not-symmetric interval split at the mean (site lesson03 `we-1`: 34% + 47.5% = 81.5%); turning a probability into an expected count (2.5% of 400 loaves = about 10); the check that the shaded part of the sketch agrees with the size of the answer; a z between whole numbers gives only a range. "Unusual" and "more extreme" are z06.

**Next:** math-s12-z06.

## 2. Site order, sections and worked examples

Read-only sources: [the-normal-distribution/lesson07.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/the-normal-distribution/lesson07.sa.html), SHA256 `02538caa91989ae43d07cd49cc1ab935e1fa3482f2f1f779c4695b447649a2f8`: `shade-areas-under-curve` (card 08, the three shapes, the "more than one standard deviation away" contrast, the check, `we-1` (b) and (c)). [lesson03.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/the-normal-distribution/lesson03.sa.html), SHA256 `75fc5aaa881ee73917745152df82bb12661b239d2a924938173498eeffe144a3`: `use-symmetry-and-combined-intervals` (card 03 one-sided, `we-1`). [lesson05.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/the-normal-distribution/lesson05.sa.html), SHA256 `b6e3053ec2974ccd9f6a3deef897a85c23ea4a61a67d252f3457569d2419dcbe`: `find-counts-with-z-scores` (card 03, `we-1` (a)). [lesson06.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/the-normal-distribution/lesson06.sa.html), SHA256 `d4e654bcbf0d15841ccbf4dd5899b1f0bd15d43d8cd369c2a0468be454618d96`: `we-1` (b), (c), `we-2` (b), (c), card 08 trap 01.

### Source lesson07, card 08 and `we-1`

"A z-score is a position. A probability is an area." Table: "$P(z < 1)$ | everything left of $z = 1$ | $0.5 + 0.34 = 0.84$"; "$P(z > 1)$ | ... | $1 - 0.84 = 0.16$"; "$P(-1 < z < 2)$ | the strip between the two | $0.34 + 0.34 + 0.135 = 0.815$". "'More than one standard deviation above the mean' is $z > 1$, one tail, $16\%$. 'More than one standard deviation away from the mean' is $z < -1$ or $z > 1$, both tails, $32\%$." `we-1` (b): "Shade everything left of $z = 1$ ... About 84% of the Maths class scored below Ava." (c): "$z = 1.4$ lies between $z = 1$ (84th percentile) and $z = 2$ (97.5th percentile), so between 84% and 97.5% of the English class scored below her."

### Source lesson03 `we-1`; lesson05 `we-1`

Lesson03 `we-1`: "The heights of 600 Year 12 students are normally distributed with mean $\mu = 165$ cm and standard deviation $\sigma = 7$ cm. (a) What percentage of the students are between 158 cm and 179 cm tall? (b) About how many of the 600 students are taller than 179 cm?" ("$34\% + 47.5\% = 81.5\%$"; "$0.025 \times 600 = 15$"). Lesson05 `we-1`: "A factory fills 1,200 bags of rice labelled 1 kg. The masses are normally distributed with mean $\mu = 1010$ g and standard deviation $\sigma = 5$ g. (a) About how many bags are underweight (less than 1000 g)?" ("$0.025 \times 1200 = 30$").

## 3. Recalculation

- Pieces as z04. P(z < 1) = 0.84; P(z > 1) = 0.16; P(−1 < z < 2) = 0.815; both tails beyond ±1 = 0.32.
- Lesson03 `we-1`: 158 and 179 are z = −1 and 2; 81.5%; above 179: 2.5% of 600 = 15. Lesson05 `we-1`: z = −2, 2.5%, 30 bags. Lesson05 card 03: 2.5% of 800 = 20; quick check 400 people, 186 cm is z = 2, 10 people. Lesson06 `we-1` (b) 2.5%, (c) 92; `we-2` (b) 2.5%, (c) 165 g.
- Anchors: loaves under 700 g: z = −2, 2.5%, 10 of 400. Phone battery (20 h, SD 1.5 h): under 17 h 2.5%; 18.5 to 23 h 81.5%.
- Question 1: 37 and 46 min are z = −1 and 2; 81.5%. Question 2: heavier than 715 g: 16% of 1000 = 160; 700 to 705 g: 13.5% of 1000 = 135.

Every value above was recalculated in Python with exact fractions (`work/brief-standard-zcf/recalc.py`). All site answers match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- Forgetting to halve the 5% outside ±2σ for one tail (lesson06 trap 01).
- "More than one standard deviation above" (one tail, 16%) mixed up with "more than one standard deviation away" (both tails, 32%).
- Subtracting when the shaded part is more than half (an answer below 0.5 under a mostly shaded sketch).
- Reading a z-score of 1.4 as a probability, or forcing an exact percentage from the rule.
- Leaving an expected count as a decimal of people, or claiming it is exact ("about 15").

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- The three shading shapes on one strip of small bells (left of, right of, between), each built from labelled pieces that light and add.
- A "z first" step: the boundary value drops onto the z-axis before any shading.
- Lesson03's interval split at the mean: 34% on the left joins 47.5% on the right.
- A count conveyor: 400 loaves, 2.5% of them peeled off under the 700 g line, a counter reading "about 10".
- A sketch check stamp: "more than half shaded, answer > 0.5".

Advanced reuse (visual parts only): `NormalCurve` with `shade` (from, to), `TailLadder` (named regions with their probabilities), `ZSlider` (side left or right; set to the rule's rounded values), `BandSlider`; `FillDial` as the conveyor pattern (Advanced s12's filler: reuse the motion, repaint as a loaf line, not its anchor). Kit needs: the same **rule readout mode** as z04 (values from the empirical rule, not Φ), and a **piece-sum** label (0.5 + 0.34 = 0.84 assembling on the shaded area).

## 6. Two original candidate practice questions

### Question 1

The time for a bus trip to school is normally distributed with a mean of 40 minutes and a standard deviation of 3 minutes. Find the probability that a trip takes between 37 and 46 minutes. Shade the region on a normal curve.

**Worked answer:** z = (37 − 40) ÷ 3 = −1 and (46 − 40) ÷ 3 = 2. Shade from z = −1 to z = 2: 34% + 34% + 13.5% = 81.5%, so 0.815.

### Question 2

A bakery bakes 1000 loaves a day. Their masses are normally distributed with a mean of 710 g and a standard deviation of 5 g. (a) About how many loaves are heavier than 715 g? (b) About how many have a mass between 700 g and 705 g?

**Worked answer:** (a) 715 g is z = 1; above it is (100 − 68) ÷ 2 = 16%; 0.16 × 1000 = about 160. (b) 700 g and 705 g are z = −2 and −1; that piece is 13.5%; about 135 loaves.

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief (one crossed-out mistake: Question 1 "68% + 95% ...", crossed, "split at the mean: 34% + 47.5%"; Question 2 (a) "32%", crossed, "one side only: half of 32%").

## 7. Everyday anchors

- **The bakery's loaves under the label:** the chance a loaf is under 700 g, and how many in a day's batch (food, consumer rights; invented).
- **A phone's battery life:** a full charge lasting under 17 hours (technology; invented, labelled).
- **A bus trip to school:** the chance of arriving within a time window (travel; invented).

Varied everyday contexts, no science. Repeat check (grepped 19 November 2026): "battery life" appears only in the site's lesson06 MC (500 h); "bus" has no hits in the Standard normal packs. The site's student heights and rice bags keep their numbers as worked examples on coded bells. Claude picks; none is required. Objects, never people.

## 8. Site corrections and decisions for Claude

No new error in the parts used here (MS-47 is in z04's sections).

Decisions for Claude:

- **Rule values only:** P(z < 1.4) is given as a range (between 84% and 97.5%), as the site's `we-1` (c) does; no table, no supplied cut-off in narration (an HSC question may supply one, which can be a one-line note).
- **Language:** "about" for counts; probabilities as decimals and percentages side by side.
- **Callback:** expected number (p06) in one grey chip.
- **Pace: watch.** Three shapes, a not-symmetric interval and counts fit 8 to 9 minutes; the range answer for a non-whole z is the first trim. Suggested split only if the design runs past 570 s: z05a (shading and probabilities) and z05b (counts and ranges).
- Final frame: a loaf reading 723 g flashing on the scale, "is this loaf a problem?" (z06's opening).

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
