# math-a11-s10: How do frequency tables turn data into probability estimates?

Brief 243 research pack, 17 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci1c297b6d` (Data): Organise finite datasets using a table or a spreadsheet, listing the values, frequency, relative frequency, cumulative frequency, and cumulative relative frequency [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa829162c5). Site coverage: covered. Pack note: the site shows tables but no spreadsheet.
- `cifa805794` (Data): Use the relative frequency to estimate the probability of results in experiments [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa829162c5). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-s04: P(A) for equally likely outcomes. math-a11-s09: discrete random variables and their values.

**Prior video:** math-a11-s09.

**Start:** a spinner spun 40 times and the raw list of results.

**Stop:** Organise a finite dataset in a table or a spreadsheet listing the values, frequency, relative frequency, cumulative frequency and cumulative relative frequency; use relative frequency to estimate the probability of results in experiments, with more trials usually giving a more reliable estimate. Graphs of these columns and the mode and median are s11.

**Next:** math-a11-s11.

**Year 12 dependency:** Year 12 s01 lists "relative frequency as an estimate" as Year 11 entry knowledge and opens with a die rolled 200 times whose estimates steady without being forced to the theory. Deliver: relative frequency = frequency ÷ total; relative frequencies add to 1 because every result is in exactly one row; an estimate, not the true value; larger samples usually give more reliable estimates (never "must equal").

**Spoken maths:** decimals as "zero point two five", "zero point seven zero"; "cumulative" as "running total".

## 2. Site order, sections and worked examples

Read-only source: [probability-and-data/lesson15.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/probability-and-data/lesson15.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `29ad8f2a702a9afc03cee2333de3b998523b222f8688ad89182988b8fbb8bd1c`. Title: Frequency Tables and Relative Frequency. Lesson id maths-adv-y11-m5-l15.

Data-step ids: `recall-your-gut-answer-first`, `four-columns-four-questions`, `what-you-ll-master`, `building-the-table`, `model`, `quick-fire-practice`, `revisit-your-dice-estimate`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source probability-and-data/lesson15.sa.html, `we-1`

PROBLEM 1 · BUILDING A TABLE A spinner with values 1, 2, 3 is spun 40 times, giving 1 ten times, 2 eighteen times and 3 twelve times. Build the four-column frequency table. 1 Frequencies 10, 18, 12, totalling 40 2 Relative frequencies $\frac{10}{40} = 0.25$, $\frac{18}{40} = 0.45$, $\frac{12}{40} = 0.30$, summing to 1 ✓ 3 Cumulative frequencies $10, 28, 40$; cumulative relative frequencies $0.25, 0.70, 1.00$

### Source probability-and-data/lesson15.sa.html, `we-2`

PROBLEM 2 · ESTIMATING A PROBABILITY A die is rolled 60 times and a six appears 13 times. Estimate the probability of a six, and compare with the theoretical value. 1 Relative frequency $= \dfrac{13}{60} \approx 0.217$ 2 For a fair die the theoretical value is $\dfrac{1}{6} \approx 0.167$ 3 The estimate is higher, which is ordinary variation in $60$ trials and is not evidence of bias

### Source probability-and-data/lesson15.sa.html, `we-3`

PROBLEM 3 · READING A CUMULATIVE COLUMN In the spinner table above, what proportion of spins gave 2 or less, and how many spins was that? 2 Cumulative relative frequency is $0.70$ 3 Cumulative frequency is $28$ spins $10 + 18 = 28$, consistent with $0.70 \times 40$.

### Source probability-and-data/lesson15.sa.html, short answers

Q1: a four-sided spinner spun 50 times: 12, 15, 8, 15; relative 0.24, 0.30, 0.16, 0.30; cumulative 12, 27, 35, 50; 2 or less: 0.54. Q2: 46 of 200 trials: 0.23. Q3: seven sixes in 30 rolls is about 0.233, not evidence of bias.

Only the parts named in the stop boundary belong to this video.

## 3. Recalculation

- we-1: 0.25, 0.45, 0.30; 10, 28, 40; 0.25, 0.70, 1.00. we-2: 13/60 (about 0.217) against 1/6 (about 0.167). we-3: 0.70 and 28.
- Q1: as quoted, 27/50 = 0.54. Q2: 0.23. Q3: 7/30 (about 0.233). Quick-fire: 0.4; 4, 13, 20; 1; 0.575.
- Practice answers below.

Every example above was recalculated with SymPy (`work/brief243-gs/verify_s.py`, run with `python -I`, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Treating a relative frequency as the exact probability, or a difference from theory as proof of bias (the site's we-2 and Q3).
- Cumulative columns in an unordered table (they mean "this value or less" only in increasing order).
- Rounding relative frequencies and then complaining they add to 0.99.
- Dividing by the wrong total (for example by the number of values instead of the number of results).
- "More trials will make it exactly right" (more trials usually make it closer, never guaranteed).

These follow from the official content, not claims about how often markers see them.

## 5. Visual needs

- A spreadsheet-style table building column by column: values, frequency (tallied from the raw list), relative frequency (each cell showing its formula, for example =B2/B$6), cumulative frequency (running total, each cell adding the one above), cumulative relative frequency ending at 1. The syllabus names spreadsheets; the site shows none.
- The 40 raw spins sorting into rows, so "every result is in exactly one row" is seen before "the relative frequencies add to 1".
- A long-run graph: a simulated spinner's relative frequency for one value wandering and then settling near its probability, labelled as simulated (`chance.ts` `runTrials` with a weighted experiment, `ChanceShareGraph`).

All diagrams coded in the shared paper style. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs: `../../checks/maths-a11-kit-needs-g-s.md`.

## 6. Two original candidate practice questions

### Question 1

A market stall checked 40 egg cartons and recorded the number of cracked eggs in each: 0 cracked in 22 cartons, 1 in 11, 2 in 5 and 3 in 2. Complete a table with frequency, relative frequency, cumulative frequency and cumulative relative frequency, and estimate the probability that a carton has at least one cracked egg.

**Worked answer:** Relative frequencies 0.55, 0.275, 0.125, 0.05. Cumulative 22, 33, 38, 40; cumulative relative 0.55, 0.825, 0.95, 1. At least one cracked: 1 - 0.55 = 0.45 (18 of 40). Crossed mistake: 0.275 (only the row for 1).

### Question 2

In practice, a volleyball player's serve landed in 52 times out of 80. (a) Estimate the probability that the next serve lands in. (b) Estimate how many of the next 200 serves will land in.

**Worked answer:** (a) 52/80 = 0.65. (b) 0.65 × 200 = 130. Both are estimates: the true chance is unknown. Crossed mistake: "exactly 130".

Only the question goes on the card. Hide the answer and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- A volleyball serve record: 52 serves in out of 80 gives an estimate of the chance the next serve is in (sport; matches question 2).
- A shoe shop's sales by size over a month: the cumulative column answers "what share of pairs sold were size 9 or smaller?" (shopping).
- Cracked eggs per carton at a market stall (food; matches question 1).

Varied everyday contexts (money, phones, sport, travel, food, games, home, shopping, music). None repeats an anchor in the Year 12 Maths designs (Year 12 s01's 200 die rolls and the online game's win rate were avoided), the Year 11 w, c and e designs (w08's bowling and c12's basketball shooting were avoided), the w, c and e pack suggestions, or another g or s pack (grepped, 17 November 2026). Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`, section 8. Resolve logged items before reusing site copy; the site stays read only. No copy error was found in this lesson.

Decisions for Claude:

- Show a spreadsheet (the syllabus says "a table or a spreadsheet"); a coded, unbranded grid with visible formulas is enough.
- Keep the site's careful wording "tends to sit closer" for larger samples; Year 12 s01's review asks that the estimate is not claimed to be forced.
- Use the spinner (we-1) as the table and the die (we-2) only as the theory comparison; Year 12 s01 owns the repeated-die anchor.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
