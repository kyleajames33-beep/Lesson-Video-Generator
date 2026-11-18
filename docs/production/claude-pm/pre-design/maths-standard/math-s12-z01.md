# math-s12-z01: What does normally distributed data look like, and why do its mean, median and mode match?

Maths Standard research pack (Year 12, The normal distribution), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, The normal distribution, Normally distributed datasets):

- `cic0ba342d`: Recognise that a dataset that is normally distributed can be represented by a bell-shaped curve [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa92309f60). Site coverage: covered (the curve is described; no dataset is shown becoming a bell, MS-59).
- `cif956cc8e`: Explain that the mean, median and mode are approximately equal for data arising from a random variable that is normally distributed [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa92309f60). Site coverage: covered for the curve ("Mean = median = mode"); "approximately equal for data" is not shown (MS-59).

These are CMS codenames, not published content-point codes. The syllabus gives no density formula, no integral and no normal table for Standard 2: the strand works with the bell shape, z-scores and the empirical rule (68%, 95%, 99.7%) only.

**Course:** Standard 2 only. Playlist order 77 (the outline's number; rulings 46 and 58 changed only r and t). **Standard 1:** the 2024 Standard 1 course has no normal distribution, critical path analysis or network flow focus area. Standard 1 viewers finish the Year 12 course at math-s12-p08; z01 to f04 carry no Standard 1 codes and their descriptions use the Standard 2 heading only (ruling 16).

**Entry knowledge (outline dependency list):** math-s11-d11: `ciaf232c38` (mean, median and mode from graphs and tables); math-s11-d09: `ci0c94e728` (symmetric, positively skewed, negatively skewed). Also math-s11-d13: `ci14ad4af7` (population standard deviation σ, by calculator), used here only as "how spread out", and math-s12-p01 to p08 (probability language).

**Prior video:** math-s12-p08 (last video of the probability strand, and the last Standard 1 video).

**Start:** p08's final frame, as the p08 pack (`pre-design/maths-standard/math-s12-p08.md`, read 19 November 2026) accepts it from this pack: a two-route frame. Left, "Standard 2: next, the normal distribution": a bakery's quality sheet with 200 loaves labelled 700 g weighed, the masses dropping into a coded histogram, "what shape is this?". Right, a grey chip "Standard 1: Year 12 course complete" pointing to the Year 12 Standard playlist (no promise of further Standard 1 videos). z01 opens on the left panel, scaled up. The bakery plate is briefed once (p08 notes this): request it in z01's Codex asset brief, painted in time for p08 (ruling 17).

**Stop:** A large dataset drawn as a histogram becomes a smooth bell when there are many values and narrow classes; features of the bell: one peak in the middle, symmetric, most values near the centre, thin tails on both sides; the mean, median and mode sit together in the middle (the balance point, the middle value and the peak), so for real normal data they are approximately equal (the loaves: 709.95 g, 710 g, 710 g); a skewed set pulls the mean towards the tail (reaction times: mode 250 ms, median 300 ms, mean 321 ms); μ places the centre and σ sets the width (same mean, different σ: taller and narrower, or flatter and wider). Not taught: percentages in bands (z04), z-scores (z02).

**Next:** math-s12-z02.

## 2. Site order, sections and worked examples

Read-only source: [the-normal-distribution/lesson06.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/the-normal-distribution/lesson06.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `d4e654bcbf0d15841ccbf4dd5899b1f0bd15d43d8cd369c2a0468be454618d96`. Sections used: `orient-normal-distribution` (hook, card 02, key terms), `describe-normal-properties` (card 05 and its quick check), `compare-normal-distributions` (card 09, factory A and B). Also [lesson05.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/the-normal-distribution/lesson05.sa.html) (SHA256 `b6e3053ec2974ccd9f6a3deef897a85c23ea4a61a67d252f3457569d2419dcbe`), `practise-normal-applications-activities`, Activity 2 question 2. The page has no labelled worked example for these two points (`we-1` and `we-2` are empirical-rule examples, used in z04).

### Source lesson06, hook and properties

Hook: "Adult male heights in Australia are approximately normally distributed with mean 178 cm and standard deviation 7 cm. Without calculating, roughly what percentage of men are between 171 cm and 185 cm?" (answer in the revisit card, 68%; a z04 question, and an unsourced figure, MS-57). Card 05: "Symmetric: The left side is a mirror image of the right side. Unimodal: One peak at the centre. Mean = Median = Mode: All three measures of centre are equal. Asymptotic: Tails approach but never touch the horizontal axis. Total area under the curve = 1 (represents 100% of the data)." Quick check: "In a perfectly normal distribution, which statement is always true? ... C, Mean, median and mode are all equal".

### Source lesson06, comparing two curves; lesson05 Activity 2

Card 09: "Larger σ: Wider, flatter bell, data more spread out. Smaller σ: Narrower, taller bell, data more concentrated around the mean." Example: "Factory A: μ = 100 mm, σ = 2 mm. Factory B: μ = 100 mm, σ = 5 mm." (its "roughly 58%" uses a normal table, MS-56; use the two curves only). Lesson05 Activity 2: "A dataset is approximately normally distributed. What would the histogram look like?" Answer: "approximately bell-shaped (symmetric), with most bars near the centre and smaller bars tapering off symmetrically on both sides."

## 3. Recalculation

- Loaves (invented, labelled): 200 loaves at 695, 700, 705, 710, 715, 720, 725 g with frequencies 3, 15, 40, 84, 42, 13, 3. Mean 709.95 g, median 710 g, mode 710 g; population σ 5.57 g (shown as "about 5 g").
- Reaction taps (invented skewed contrast): 100 taps at 200 to 500 ms in 50 ms steps, frequencies 6, 30, 24, 16, 10, 8, 6. Mode 250 ms, median 300 ms, mean 321 ms (mean > median > mode, positive skew).
- Site: 171 and 185 are μ − σ and μ + σ for 178 and 7. Factory A: ±4 mm is ±2σ; factory B: ±4 mm is ±0.8σ.
- Question 1 and 2: no arithmetic beyond reading (values in section 6).

Every value above was recalculated in Python with exact fractions (`work/brief-standard-zcf/recalc.py`, output `recalc-output.txt`). All site statements used here are correct; MS-56 concerns a figure not used.

## 4. Misconceptions and HSC-style traps

- "Normal" meaning "usual" or "healthy" rather than a shape of data.
- Thinking every dataset is bell-shaped (incomes, waiting times and reaction times are usually skewed).
- Expecting mean, median and mode to be exactly equal in a real dataset; for data they are approximately equal.
- Reading a taller curve as "more data" rather than "less spread" (both curves hold the same 100%).
- Placing the mean at the peak of a skewed graph (the mean moves towards the tail).

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- A bakery scale feeding loaf masses into a histogram class by class (200 drops), then the classes narrowing and a coded bell laid over the bars.
- Three markers on the loaf histogram: mode (tallest bar), median (the 100th and 101st loaves), mean (a balance-point fulcrum under the axis) arriving at almost the same place; then the same three on the skewed reaction histogram spreading apart towards the tail.
- Two bells on one axis (same μ, σ 4 g and 9 g) with a "same area" fill readout.
- A grey callback chip to Year 11 shape words (symmetric, positively skewed).

Advanced reuse (visual parts only, ruling 7): `NormalCurve` with `marks` and `ghost` (normal-parts.tsx), `ClassHistogram` with `drop` (dist-parts.tsx), `BagFill` / `bagFillAt` as the pattern for items landing on a scale (repainted as loaves), `PegBoard` (optional, "many small nudges" in one sentence; it is Advanced s09's opening, so keep it short), `StudioBalanceBeam` and `balancePoint` (spread-parts.tsx) for the mean as balance point, `MedianReader` (a11-data-parts.tsx). Advanced anchors not reused: chips bags (s09), apples (s10), fish (s11), the drink-bottle filler (s12). Plates: a bakery loaf and a bench scale (new `ms12-` plates; ruling 17 says paint one video early, so for p08's final frame; brief once, here). Kit needs: none new; see `checks/maths-standard-kit-needs-z-c-f.md`.

## 6. Two original candidate practice questions

### Question 1

Two sets of data are summarised. Set A: daily coffee sales at a café over a year (mean 182, median 181, mode 180; the histogram has one peak in the middle and is close to symmetric). Set B: delivery times for a food delivery app (mean 34 min, median 30 min, mode 27 min). (a) Which set is more likely to be normally distributed? Explain. (b) Describe the shape of the other set.

**Worked answer:** (a) Set A: its mean, median and mode are approximately equal and its histogram is symmetric with one central peak. (b) Set B is positively skewed: mean > median > mode, so a tail of long delivery times pulls the mean up.

### Question 2

Two ovens at a bakery bake loaves with a mean mass of 710 g. Oven X has a standard deviation of 4 g and oven Y has a standard deviation of 9 g. Both are normally distributed. (a) Sketch both distributions on one set of axes. (b) Which oven is more consistent? Explain using your sketch.

**Worked answer:** (a) Two bells centred at 710 g; X narrower and taller, Y wider and flatter. (b) Oven X: its smaller σ means its loaves cluster more tightly around 710 g.

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (Question 1: "B, because its mean is bigger", crossed, "look at the shape and whether the three centres agree"; Question 2: "Y, because its curve is taller at the edges", crossed, "smaller σ = narrower = more consistent").

## 7. Everyday anchors

- **A bakery's loaves:** 200 loaves labelled 700 g, weighed off the line; the histogram builds into a bell (food, work; invented numbers, labelled).
- **A state-wide test's marks:** thousands of results make a bell; a single class does not (school; invented).
- **Reaction taps on a phone game:** a skewed contrast with a long slow tail; real reaction times are usually right-skewed, so this is the "not normal" example (games; invented numbers).

Varied everyday contexts, no science. Repeat check (grepped 19 November 2026 in `docs/production/claude-pm/lessons/` and the Standard packs): "loaf" and "bakery" have no hits; the Advanced normal anchors are chips (s09), apples (s10), fish (s11) and a bottle filler (s12). The site's height hook is not narrated as fact without a dated source (MS-57: ABS 2011-12 gives 175.6 cm for adult men). Claude picks; none is required. Objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`, section 9: MS-56 (factory B's 58% needs a table; the Central Limit Theorem line), MS-57 (the height hook), MS-59 (no dataset becomes a bell; "approximately equal" is not shown).

Decisions for Claude:

- **Original teaching** for the histogram and "approximately equal", built on the site's properties card; the loaves give the dataset.
- **Leave the density formula out** (not in Standard 2). "Total area = 1" can wait for z04 and z05, where areas become percentages.
- **Asymptotic tails:** one plain phrase ("the tails get very thin but never quite reach zero") is enough; the word itself is optional.
- **Pace: fits.** Histogram to bell, the three centres, a skewed contrast and two widths fit 6 to 8 minutes.
- **Join:** settled with the p08 pack (its final frame is this video's opening).
- Final frame: one loaf on the scale reading 718 g against the bell, "how unusual is this loaf?" (z02's opening).

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
