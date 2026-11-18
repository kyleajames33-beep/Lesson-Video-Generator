# math-s12-z04: How does the 68-95-99.7 rule describe normal data?

Maths Standard research pack (Year 12, The normal distribution), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, The normal distribution, Calculating z-scores):

- `ci9d813bbf`: Model and apply the empirical rule, where approximately 68% of data will have z-scores between −1 and 1, approximately 95% of data will have z-scores between −2 and 2, and approximately 99.7% of data will have z-scores between −3 and 3 [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa92309f60). Site coverage: covered.

These are CMS codenames, not published content-point codes. The point says "approximately" three times; keep the word in narration.

**Course:** Standard 2 only. Playlist order 80. **Standard 1:** not in the Standard 1 course (see z01).

**Entry knowledge:** math-s12-z02: `ci92695626`, `ci5c476cce` (z-scores; x = μ + zσ). math-s12-z01: `cic0ba342d` (the bell, symmetric).

**Prior video:** math-s12-z03.

**Start:** z03's final frame (proposed): the loaf bell (μ 710 g, σ 5 g) with the band from 705 to 715 g about to be shaded, "what fraction of loaves lie within one standard deviation?".

**Stop:** About 68% of normal data has z between −1 and 1, about 95% between −2 and 2, about 99.7% between −3 and 3; turning each z band into values (μ ± σ, μ ± 2σ, μ ± 3σ: loaves 705 to 715, 700 to 720, 695 to 725 g); the rule only for bell-shaped data (a skewed set breaks it); symmetry halves each band (34% from μ to μ + σ), and the pieces 34, 13.5, 2.35 and 0.15 come from subtracting and halving; the fully labelled bell (site SAQ 2 pattern). One-sided percentages, probabilities and counts are z05; "unusual" is z06.

**Next:** math-s12-z05.

## 2. Site order, sections and worked examples

Read-only sources: [the-normal-distribution/lesson06.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/the-normal-distribution/lesson06.sa.html), SHA256 `d4e654bcbf0d15841ccbf4dd5899b1f0bd15d43d8cd369c2a0468be454618d96`: `apply-empirical-rule` (card 06, `we-1`, `we-2`), `find-percentages-and-unusual-values` (card 08, traps 01 to 03), `consolidate-normal-distribution` (revisit card). [lesson03.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/the-normal-distribution/lesson03.sa.html), SHA256 `75fc5aaa881ee73917745152df82bb12661b239d2a924938173498eeffe144a3`: `orient-empirical-rule` (think first), `learn-empirical-rule` (card 01), `apply-empirical-rule` (card 02), `use-symmetry-and-combined-intervals` (card 04, the 13.5% and 2.35% pieces), `practise-empirical-rule-activities` (activity 1), `practise-empirical-rule` (SAQ 2).

### Source lesson06, `we-1` and `we-2`

`we-1`: "Exam marks: $\mu = 72$, $\sigma = 10$, normally distributed. (a) What percentage score between 62 and 82? (b) What percentage score above 92? (c) What is the minimum mark for the top 2.5%?" ("By the 68% rule: 68% score between 62 and 82"; (b) and (c) are one-sided, z05). `we-2`: "Weights of apples: $\mu = 150$ g, $\sigma = 15$ g ... (a) What percentage weigh between 135 g and 165 g?" (68%; (b) and (c) are z05).

### Source lesson03, think first, cards and SAQ 2

Think first: "exam marks are normally distributed with mean 70 and standard deviation 10 ... between 60 and 80?" (68%). Card 02: "IQ scores ... μ = 100, σ = 15. What percentage of people have IQ between 70 and 130?" (95%). Card 04: "95% − 68% = 27% lies between 1σ and 2σ from the mean (on both sides combined). By symmetry: 13.5% ... Similarly, between 2σ and 3σ on each side: (99.7 − 95) ÷ 2 = 2.35%." Activity 1 (μ = 65, σ = 12): "between 53 and 77" (68%), "between 41 and 89" (95%). SAQ 2: "Draw a fully labelled normal distribution diagram for a dataset with μ = 20 and σ = 3" ("x-axis values: 11, 14, 17, 20, 23, 26, 29"; regions 0.15, 2.35, 13.5, 34, 34, 13.5, 2.35, 0.15; the stated total is misworded, MS-47).

## 3. Recalculation

- Pieces: 68 ÷ 2 = 34; (95 − 68) ÷ 2 = 13.5; (99.7 − 95) ÷ 2 = 2.35; (100 − 99.7) ÷ 2 = 0.15. Six inner pieces 99.7%; with both tails 100%. (For reference only, the exact normal values are 68.27%, 95.45% and 99.73%; the syllabus uses the rounded rule.)
- Site ranges: exam 62 to 82, 52 to 92, 42 to 102; apples 135 to 165; IQ 85 to 115, 70 to 130, 55 to 145; activity 53 to 77, 41 to 89; SAQ 2 marks 11, 14, 17, 20, 23, 26, 29; think first 60 to 80.
- Anchors: loaves 705 to 715, 700 to 720, 695 to 725 g; bowler 128 to 136, 124 to 140, 120 to 144 km/h.
- Question 1: 700 to 720 g; 705 to 715 g is 68%. Question 2: 22, 24, 26, 28, 30, 32, 34 s with 2.35, 13.5, 34, 34, 13.5, 2.35 and 0.15 in each tail.

Every value above was recalculated in Python with exact fractions (`work/brief-standard-zcf/recalc.py`). All site answers match. Keep the site's numbers; MS-47 corrects lesson03's memory trick and SAQ 2 total, not any percentage.

## 4. Misconceptions and HSC-style traps

- Adding one σ instead of two for the 95% band (lesson06 trap 03).
- Using the rule on skewed data (trap 02).
- Reading 95% as the percentage between μ + σ and μ + 2σ, rather than inside ±2σ.
- Giving 68% as "exactly" rather than "approximately".
- Mislabelling the pieces (13.5 is between 1 and 2 standard deviations on one side, not 27).

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- The loaf bell with a band that widens from ±1σ to ±2σ to ±3σ, a live percentage readout (68, 95, 99.7), and the gram values at the band edges.
- Each band split at the mean into two halves (34 + 34), then the ring between 1σ and 2σ shown as 95 − 68 = 27, halved to 13.5 on each side; the same for 2.35; the tails 0.15.
- The finished labelled bell (seven axis values, eight pieces) built as a "Key notes" hold.
- A skewed histogram (z01's reaction taps) with a ±1σ band holding far more than 68%, crossed "rule only for bells".

Advanced reuse (visual parts only): `BandSlider` (normal-parts.tsx: the ±kσ band with a live area readout; set its readout to the rule's rounded values, not Φ, see kit needs), `NormalCurve` with `marks` and `shade`, `TailLadder`; `ClassHistogram` for the skewed contrast. Advanced s10 used apples measured on a graphing calculator; the site's apples (`we-2`) keep their numbers on a coded bell only. Kit needs: an **empirical-rule label set** (band pieces 34, 13.5, 2.35, 0.15 written on the curve, and a "rule" readout mode for BandSlider showing 68, 95, 99.7 instead of Φ to four places).

## 6. Two original candidate practice questions

### Question 1

A bakery's loaves have masses that are normally distributed with a mean of 710 g and a standard deviation of 5 g. (a) Between which two masses do the middle 95% of loaves lie? (b) About what percentage of loaves have a mass between 705 g and 715 g?

**Worked answer:** (a) μ ± 2σ = 710 ± 10, so 700 g to 720 g. (b) 705 and 715 are μ − σ and μ + σ, so about 68%.

### Question 2

A café's espresso shots take a time that is normally distributed with a mean of 28 seconds and a standard deviation of 2 seconds. Draw a normal curve and label the times at μ ± σ, μ ± 2σ and μ ± 3σ. Write the percentage of shots in each region.

**Worked answer:** Times 22, 24, 26, 28, 30, 32, 34 s. Regions from left: 0.15%, 2.35%, 13.5%, 34%, 34%, 13.5%, 2.35%, 0.15%.

Only the question goes on the card (Question 2 with empty axes). "Pause here to answer." then a 10-second countdown. Feedback stays brief (one crossed-out mistake: Question 1 (a) "705 to 715 g", crossed, "95% is two standard deviations each side"; Question 2 "27% between 30 and 32", crossed, "27% is both sides together; each side is 13.5%").

## 7. Everyday anchors

- **The bakery's loaves:** the bands in grams (food; continues the strand's invented data).
- **A fast bowler's deliveries:** mean 132 km/h, SD 4 km/h, so 95% between 124 and 140 km/h (sport; invented, labelled).
- **A café's espresso shots:** 28 s, SD 2 s (work; invented; the café also sets up c01).

Varied everyday contexts, no science. Repeat check (grepped 19 November 2026): "bowler" and "espresso" have no hits in the designs or Standard packs. The site's IQ, plant and newborn examples are not used as anchors (IQ numbers may stay on a plain number line; newborn weights are a health context). Claude picks; none is required. Objects, never people.

## 8. Site corrections and decisions for Claude

See section 9: MS-47 (lesson03's "roughly double" memory trick and the SAQ 2 total), MS-57 (the height hook, if used).

Decisions for Claude:

- **Scope split with z05:** z04 keeps the symmetric bands and the labelled bell; one-sided tails (16%, 2.5%), probability shading and counts move to z05. This keeps both videos near 7 minutes.
- **Memory aid:** "68, 95, 99.7: one, two, three standard deviations" and the halving picture; do not use the site's doubling trick.
- **Approximate:** narrate "about" with each percentage.
- **Pace: watch.** Three bands, symmetry pieces and the labelled bell fit about 8 minutes; the skewed contrast is the first trim.
- Final frame: the loaf bell with the tail below 700 g shaded, "what's the chance a loaf is under its 700 g label?" (z05's opening).

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
