# math-s12-z02: What does a z-score tell us, and how do we calculate it?

Maths Standard research pack (Year 12, The normal distribution), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, The normal distribution, Calculating z-scores):

- `ci92695626`: Describe the z-score as the number of standard deviations that a value is above or below the mean [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa92309f60). Site coverage: covered.
- `ci7864f60a`: Recognise that the set of z-scores for data arising from a random variable that is normally distributed has a mean of 0 and standard deviation of 1 [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa92309f60). Site coverage: covered as a statement only (MS-59).
- `ci5c476cce`: Calculate the z-score corresponding to a specific value in a dataset by applying the formula z = (x − μ)/σ, where x is a specific value, μ is the mean and σ is the standard deviation [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fa92309f60). Site coverage: covered (the page leads with the sample form, MS-56). Typeset the formula from the crosswalk's sourceHtml (a fraction).

These are CMS codenames, not published content-point codes.

**Course:** Standard 2 only. Playlist order 78. **Standard 1:** not in the Standard 1 course (see z01).

**Entry knowledge (outline dependency list):** math-s11-d13: `ci14ad4af7` (population standard deviation σ by calculator). Also math-s12-z01 (the bell; μ at the centre, σ as the width) and math-s11-f01: `ci7f303375` (substitution).

**Prior video:** math-s12-z01.

**Start:** z01's final frame (proposed): one loaf on the scale reading 718 g against the loaf bell (μ = 710 g, σ = 5 g), "how unusual is this loaf?".

**Stop:** "How many standard deviations from the mean?" first as steps on a ruler (718 g is 8 g above, 8 ÷ 5 = 1.6 steps), then as z = (x − μ)/σ; the sign (positive above, negative below, zero at the mean); the size (how far, in standard deviations, whatever the units); five loaves 704, 708, 710, 712, 716 (μ 710, σ 4) become −1.5, −0.5, 0, 0.5, 1.5, whose mean is 0 and standard deviation is 1 (the z-scale is the same bell slid to 0 and squeezed to width 1); going back from z to x (x = μ + zσ) in one line. Comparing two tests is z03; "unusual" thresholds are z06.

**Next:** math-s12-z03.

## 2. Site order, sections and worked examples

Read-only source: [the-normal-distribution/lesson07.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/the-normal-distribution/lesson07.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `02538caa91989ae43d07cd49cc1ab935e1fa3482f2f1f779c4695b447649a2f8`. Sections used: `orient-z-scores` (card 02), `calculate-z-scores` (card 05, examples 1 and 2, quick check), `interpret-z-score-magnitude` (fill the gap), `consolidate-z-scores` (activity 1), `practise-z-scores` (SA 1). No labelled worked example covers these points (`we-1` is z03 and z05).

### Source lesson07, card 02 and card 05

Card 02: "Z-score formula: $z = \dfrac{x - \bar{x}}{s}$ (sample) or $z = \dfrac{x - \mu}{\sigma}$ (population). Convert back: $x = \bar{x} + z \cdot s$. Positive z means above the mean; negative z means below." "Standard normal: Any normal distribution standardised with z has mean 0 and SD 1". Card 05: "Example 1: IQ score of 115, mean = 100, SD = 15. $z = \frac{115 - 100}{15} = \frac{15}{15} = 1.0$" and "Example 2: Height of 160 cm, mean = 170 cm, SD = 8 cm. $z = \frac{160 - 170}{8} = \frac{-10}{8} = -1.25$". Quick check: "A student scores 88 on a test where the mean is 80 and SD is 4. What is their z-score?" (B, 2.0).

### Source lesson07, practice

Fill the gap: "A test has mean = 65 and SD = 10. A student with $z = -1.5$ has a raw score of $x =$" (50). Activity 1: "(a) $x=85$, mean $=75$, SD $=10$; (b) $x=55$, mean $=70$, SD $=12$; (c) $x=120$, mean $=100$, SD $=15$." SA 1: "(i) $x=92$, mean $=80$, SD $=8$; (ii) $x=65$, mean $=72$, SD $=6$; (iii) $x=110$, mean $=100$, SD $=15$ ... (c) Convert $z=-0.8$ back to a raw score with mean $=75$, SD $=10$." Answers "1.5", "−1.17", "0.67", "67".

## 3. Recalculation

- Site: 115 gives 1; 160 gives −1.25; 88 gives 2; activity 1: 1, −1.25, 1.33; SA 1: 1.5, −1.1667 (−1.17), 0.6667 (0.67); back: 75 − 8 = 67; fill the gap 65 − 15 = 50.
- Anchor: loaf 718 g gives 8/5 = 1.6; loaf 701 g gives −9/5 = −1.8.
- Five loaves 704, 708, 710, 712, 716: μ = 710, σ² = 16, σ = 4; z = −3/2, −1/2, 0, 1/2, 3/2; mean of the z-scores 0, standard deviation 1 exactly.
- Question 1: 38 min gives 1.5; 27 min gives −1.25. Question 2: 710 + (−0.8)(5) = 706 g.

Every value above was recalculated in Python with exact fractions (`work/brief-standard-zcf/recalc.py`). All site answers match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- Subtracting the wrong way (μ − x), so the sign flips.
- Dividing by the variance or forgetting to divide at all ("8 above" is not z = 8).
- Reading a negative z-score as "bad" (it only means below the mean; for times, below can be better, z03).
- Thinking a z-score needs normal data. Any value can be standardised; the percentages that go with z (z04 to z06) need a bell.
- Rounding z too early in a later step.

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- A σ-ruler under the loaf bell: steps of 5 g counted from 710 to 718 (1.6 steps), then from 710 down to 701 (−1.8 steps), the count shown live.
- The formula built from the ruler: "distance from the mean ÷ size of one step".
- Five loaf dots on a gram axis sliding down onto a z-axis (−1.5 to 1.5), the mean dot landing on 0, a spread bracket shrinking to width 1.
- A "go back" arrow on the ruler for x = μ + zσ (z = −0.8: 0.8 steps down from 710 = 706 g).

Advanced reuse (visual parts only): `SigmaRuler` (live σ-step count), `NormalCurve` with `morph` and `standardiseAt` (the standardising slide onto N(0, 1)), `ScoreCompare` (single row here) from normal-parts.tsx; `SpreadBrackets` (spread-parts.tsx); `WorkingBoard` rows (board.tsx). Advanced s11's snapper sprite and fishing anchor are not used. Kit needs: none new.

## 6. Two original candidate practice questions

### Question 1

A pizza shop's delivery times have a mean of 32 minutes and a standard deviation of 4 minutes. (a) Find the z-score of a delivery that took 38 minutes. (b) Find the z-score of a delivery that took 27 minutes. (c) Describe each z-score in words.

**Worked answer:** (a) (38 − 32) ÷ 4 = 1.5. (b) (27 − 32) ÷ 4 = −1.25. (c) 38 minutes is 1.5 standard deviations above the mean; 27 minutes is 1.25 standard deviations below the mean.

### Question 2

A bakery's loaves have a mean mass of 710 g and a standard deviation of 5 g. (a) A loaf has a z-score of −0.8. Find its mass. (b) Every loaf baked today is given a z-score. State the mean and the standard deviation of these z-scores.

**Worked answer:** (a) x = 710 + (−0.8)(5) = 706 g. (b) Mean 0, standard deviation 1.

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief (one crossed-out mistake: Question 1 (b) "(32 − 27) ÷ 4 = 1.25", crossed, "x − μ: below the mean gives a negative z"; Question 2 (b) "710 and 5", crossed, "the z-scores are centred on 0 with spread 1").

## 7. Everyday anchors

- **The bakery's loaves:** how far is a 718 g loaf from the usual? (food; continues z01's invented data).
- **Pizza delivery times:** z works on any set of times (part-time work; the delivery times need not be normal for z itself).
- **Test results:** the site's 88 with mean 80 and SD 4 (school; sets up z03).

Varied everyday contexts. Repeat check (grepped 19 November 2026): "pizza" appears in Standard r12's scooter run (distance-time graphs), a different idea; the site's IQ and height examples keep their numbers as plain number lines (no IQ narration needed). Claude picks; none is required. Objects, never people.

## 8. Site corrections and decisions for Claude

See section 9: MS-56 (lead with z = (x − μ)/σ, not the sample form), MS-59 (mean 0 and SD 1 stated, not shown).

Decisions for Claude:

- **Notation:** μ and σ only, as the syllabus writes them; say "mu, the mean" and "sigma, the standard deviation" at first use (ruling 36 pattern).
- **Show mean 0 and SD 1** with the five loaves; a calculator's σ button confirms σ = 1 for the z-scores (one shot).
- **Converting back:** one example only; the syllabus point is the forward calculation.
- **Pace: fits.** Meaning, formula, sign, the mean-0 SD-1 set and one back-conversion fit 6 to 8 minutes.
- Final frame: two report cards side by side, Maths 72 (class mean 64, SD 8) and English 77 (mean 70, SD 5), "which result is better?" (z03's opening, the site's `we-1`).

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
