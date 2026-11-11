# Maths A12 S03: What do expectation and variance measure in a discrete model? The balance point and the long-run average, Σ xP(x), variance as an expected squared distance, and E(X²) − μ² (design)

Status: Revision 4 (12 Nov 2026): brief 238/240 findings resolved (root). Ready to voice. Previously: Revision 3 (7 Nov 2026): redesign to maths-visual-standard.md (d01 Revision 6 pattern, everyday anchor). Needs Codex learning review and maths check before voicing.

Previously Revision 2 (4 Nov 2026, brief 162 repairs). Not voiced (no `math-a12-s03/` folder, no audio, no `measured/lesson.json`), so the narration is rewritten freely where the bar needs it. Earlier text is in git history (`git log -p -- docs/production/claude-pm/lessons/math-a12-s03.md`).

Narration 5,981 characters (Revision 4; was 5,809), 14 scene headings, about 533 s with holds (the key-notes scene fixed at 45 s), counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending.

Scope: third video of the Year 12 Mathematics Advanced statistics and probability strand (outline playlist order 55), after s02 (uniform discrete distributions) and before s04 (continuous random variables). Revision 3 follows `math-a12-d01.md` (Revision 6) and `../maths-visual-standard.md`, on the maths studio kit: painted plates carry the everyday anchor (a pet cat's vet visits in a year, and the pet insurer who covers them); bar graphs, the beam, tables and algebra stay coded. Site lesson read (3 Nov, read-only) in full: `C:/Users/kygs/hscscience/subjects/maths-advanced/year12/random-variables/lesson07.sa.html` (Expected Value and Variance), SHA256 `4ba2ac7bbc5148f5c35f039fa552917d79ce5f82ca8abf3dbec30303460dafa3`. The site repo is no longer on this machine (root decision 35): every site worked example is kept exactly as recorded below; Codex confirms them against the live site. Route entry: none yet (draft in Decisions).

Owner rules applied: as s01 and s02 (2024 syllabus only; codenames and exact wording; no site module label; painted plates for real objects, coded graphs and algebra; no people, hands or faces; no gambling context (the site's stall game is not used); one reasoning stage at a time; calculations as task, formula and grouped givens in the g01 layout; "Pause here to answer." then a 10 s countdown with the full question and a picture on screen; givens underlined in feedback; brief feedback with one crossed mistake; original HSC-style questions; five short key-note bullets with the framed card; Australian spelling; no em dashes; causal conversational narration). Exact values where they are exact (1.7, 0.81 and 0.9 are exact; 35/12 for the die stays a fraction, its decimal in a grey readout).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 12, Random variables; NESA content-system codenames, official `code` field empty), quoted from `../../programme/syllabus/maths-advanced-2024-y12-crosswalk.json`:

- `ci5e2af56f`: "Recognise the mean, or expected value, μ or E(X), of a discrete random variable X as a measure of centre for its distribution"
- `cief06313d`: "Generate and use the formulas E(X)=μ=ΣxP(x) and Var(X)=σ^(2)=Σ(x-μ)^(2)P(x)=Σx^(2)P(x)-μ^(2) for the random variable X, where Var(X) is the variance and σ is the standard deviation of the distribution"
- `cib50250f9`: "Recognise that the variance is an expected value because Var(X)=E((X-μ)^(2))"
- `cia0e71266`: "Solve problems involving probabilities, expectation and variance of discrete random variables"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54

**Boundary:** starts from s02's last frame, unchanged (the fair die's six equal bars with a balance triangle under the axis and "?"). Finds the die's balance point, 3.5, a value it can never show (the site's hook), then moves to the anchor: the site's card 03 distribution, P(0) = 0.1, P(1) = 0.3, P(2) = 0.4, P(3) = 0.2, numbers unchanged, given the meaning "a cat's vet visits in a year". Reads E(X) as a long-run average with a simulated running mean over many cats (`ci5e2af56f`); generates E(X) = ΣxP(x) from a thousand imagined cats (`cief06313d`); shows that the probability-weighted deviations always cancel, which is why squared deviations are averaged, so Var(X) = E((X − μ)²) (`cib50250f9`); computes 0.81 and σ = 0.9 with spread brackets; generates and checks Σx²P(x) − μ² (site card 04, numbers unchanged); solves the site's insurance problem, now a pet insurer covering the cat, with expectation and standard deviation (`cia0e71266`; site short-answer Q2, numbers unchanged). Stops at discrete expectation and variance. Not taught: E(aX + b) and Var(aX + b); continuous expectation and variance (s08); the binomial distribution.

## Decisions

### Revision 3 redesign (7 Nov 2026; these bullets override older bullets below where they conflict)

- **Anchor: a pet cat's vet visits, and the pet insurer who covers them (painted plates).** The site's teaching distribution (0, 1, 2, 3 with 0.1, 0.3, 0.4, 0.2) becomes the number of times a cat visits the vet in a year, and the site's insurance problem (premium $300; $8,000 with probability 0.02, $1,000 with 0.05) becomes a pet insurer covering that cat. One everyday context now carries every idea: the balance point (1.7 visits, which no cat makes), the long-run average (many cats), the spread (visits squared, then visits), and why an insurer with a $90 expected profit still faces a large swing on one cat. Most students have a pet or know one; no science is needed (no illness is named).
- **Why this anchor.** Owner rule (7 Nov): everyday contexts. The suggested carnival payout was set aside as gambling-adjacent (the site's stall game was already removed); the warranty idea is kept in spirit as pet insurance, which uses the site's insurance numbers unchanged. Pets and vets are not used anywhere in `checks/root-decisions-maths-redesign.md` (d18's sheep are a fencing context).
- **Idealising assumptions (author notes, not learner copy).** (i) The visit distribution is the site's card 03 distribution, told as a story; it is not a veterinary statistic. (ii) Cats are independent of each other for the running mean and for "many independent policies". (iii) A claim is paid at most once a year, at one of the two sizes.
- **Join with s02 (fixed).** Scene 1 opens on s02's balance frame exactly; the die's 3.5 is found in the first sentence, then the cat arrives by about 15 s.
- **Join with s04 (changed by this revision).** Scene 13's frame is unchanged (the four bars splitting into 16, then 64 thin bars across a continuous axis, the chip "Next: what if X can take any value in an interval?" and "?"); its narration now says "like a sprinter's reaction time" instead of "like a waiting time", to match s04 Revision 4's anchor.
- **Simulations (standard item 3).**
  1. `BalanceBeam` (scenes 1, 3, 4, 7; feedback 1): the x axis is a beam on a fulcrum that tilts towards the heavier side and levels only at μ, with a live "balance point" readout. In scene 7 the beam carries the insurer's payouts as weights; a `ParameterSlider` grows the big claim from $0 to $8,000 and the fulcrum slides live from $50 to $210 (E = 50 + 0.02 × claim) while the beam stays level, so the student watches a small far weight do the pulling.
  2. `RunningMeanTrace` (scene 2): one stored simulated sequence of 2,000 cats' visit counts (author note c); cat badges tick past while the running average wobbles and settles towards a dashed line at 1.7, with readouts at 10 and 1,000 cats.
  3. `DeviationArms` (scene 4): arms from μ to each bar shrink to their weighted lengths, cancel in two equal stacks, then turn into squares.
- **Colour roles (fixed for the whole video).**
  - **probability bars: teal** (`MATH_TEAL`);
  - **μ, the beam, the fulcrum and the balance readout: violet** (`MATH_GRADIENT`);
  - **deviations left of μ: blue** (`MATH_BLUE`); **deviations right of μ: amber** (`MATH_AMBER`); **squared deviations: pale violet squares**;
  - **σ brackets: violet dashed**;
  - **answer: green**; **mistake: red**, crossed slips only; ink tables and algebra.
- **Large type, handwriting, layout.** Current line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; text above y = 950. `HandTag`: "no face shows 3.5", "no cat makes 1.7 visits", "pulled by the heavy bars", "weighted deviations cancel", "visits²", "back to visits", "the far weight pulls", "one cat: big swing". The cat plate is at least 320 px tall when it carries the idea.
- **Stage changes (standard item 2):** the die beam, then the cat and its visit bars (1); the running mean over many cats (2); a thousand cats on the g01 board (3); the arms cancelling and squaring (4); spread brackets in visits (5); the derivation board (6); the insurer's beam and slider (7); the framed card (8); question cards with pictures (9 to 12); thin bars across an interval (13); key notes (14).
- **Worked examples (g01 layout, standard item 7).** Scene 3 (task strip "Find E(X), the expected number of vet visits", equation strip "E(X) = μ = Σ x P(x)", givens card with the four probabilities, rows at 52 px, green framed "μ = 1.7", crossed slip "(0 + 1 + 2 + 3)/4 = 1.5" captioned "only for equal weights"); scene 5 (green framed Var and σ); scene 7 (task strip, grouped givens with units, green framed "$210" and "σ ≈ $1,134", crossed slip "expected profit $90, so no risk"). Feedback scenes carry a `GivensStrip`, framed answers and one crossed slip each.
- **Memory aid (standard item 8).** Framed `MemoryAidCard`: "Mean of the squares, minus the square of the mean." with the key "Var(X) = E(X²) − μ², never negative" and a cat badge "visits: μ = 1.7, σ = 0.9".
- **Visual surprise (standard item 9).** The beam levels at 1.7 visits, a number no cat can have (1, 3); the weighted arms slide into two stacks of exactly equal length (4); in scene 7 a weight of only 0.02, slid out to $8,000, drags the balance point from $50 to $210.
- **Question cards (full text and a picture).** A1: the worded question, its table and empty bar axes x 0 to 3 (no bars); A2: the worded question and a coded beam with three empty bar slots at 1, 2 and 3 marked "0.2", "a" and "b" and the fulcrum at 2.3 labelled "E(X) = 2.3" (both givens, nothing solved).
- **Narration (not voiced).** Scene 1 now finds 3.5 and introduces the cat (396 to 474); scene 2's running mean is over cats (504 to 548); scene 3 names the cats (665 to 579); scene 5 names visits as the unit (595 to 592); scene 7 becomes the pet insurer and adds the beam sentence (736 to 824); scene 13 says "a sprinter's reaction time" (375 to 4743). Scenes 4, 6, 8 to 12 and 14 keep their Revision 2 text.

### Kept from Revisions 1 and 2

- **Learner question kept (outline).** "What do expectation and variance measure in a discrete model?" The answer, built in order: E(X) is the balance point of the bar graph and the long-run average, so it need not be a value X can take (1, 2); weighting each value by its probability is what averaging many trials does (3); the weighted distances from μ always cancel, so spread is measured by the average squared distance, an expected value (4); the square root returns it to X's units (5); expanding the square gives a quicker form (6); in a problem, E gives the long-run cost and σ shows how far one year can swing (7).
- **Why square (`cib50250f9`; corrects the site).** Deviations −1.7, −0.7, 0.3, 1.3; weighted −0.17, −0.21, 0.12, 0.26, which add to exactly 0 for every distribution (Σ(x − μ)P(x) = μ − μ). The site's card 03 says the raw departures "always sum to zero" without the weights; see site corrections.
- **σ and spread brackets.** Var(X) = 0.81 (visits squared); σ = 0.9 visits. Brackets at 0.8 and 2.6, "a measure of spread"; the values 1 and 2 inside carry 0.7 of the probability ("most", said of this distribution only). No general fraction-inside-σ rule.
- **The computational form (site card 04).** Σx²P(x) − 2μΣxP(x) + μ²ΣP(x) = E(X²) − μ². Check: E(X²) = 3.7; 3.7 − 2.89 = 0.81. Trap: square the values, not the probabilities.
- **The applied problem (site short-answer Q2, numbers unchanged).** E(C) = $210; expected profit $90 per policy; σ ≈ $1,134 (Var in a grey readout, 1,285,900).
- **Attempts (original).** (A1) x 0, 1, 2, 3 with P 0.1, 0.3, 0.5, 0.1: E(X) = 1.6, E(X²) = 3.2, Var(X) = 0.64. Crossed: "3.2 − 1.6 = 1.6". (A2) X takes 1, 2, 3 with P(X = 1) = 0.2, P(X = 2) = a, P(X = 3) = b, E(X) = 2.3: a = 0.3, b = 0.5. Crossed: "a = b = 0.4" (its E is 2.2).
- **Mistake scene:** none separate. "The expected value is what you'll get" (1, 2); "the ordinary average of the values" (3, crossed); "average the distances" (4); "variance is in the units of X" (5); "Σx²P(x)²" and "E(X²) = μ²" (6, crossed); "a positive expected profit means no risk" (7, crossed); "subtract μ" (feedback 1); "one condition is enough" (feedback 2).
- **Site sources used:** lesson 7 hook (3.5 is not a face), cards 02, 03 and 04, traps 01 to 04 and short-answer Q2 (insurance). Not used: problem 2, problem 3 (stall game), Q1 and Q3; the die's variance 35/12 appears only as a grey chip.
- **Site corrections (for the log):** (1) card 03's "the positive and negative departures always sum to zero" is true only weighted (unweighted they sum to −0.8 here); (2) problem 2's "a variance larger than the mean would have been a signal to re-check" is false; (3) short-answer Q3(b) needs a shape assumption; (4) notes: the stall game is a gambling context, and several cards contain em dashes.
- **Entry knowledge (draft route `entryKnowledge`):** s01 (distributions, P(x), ΣP(x) = 1), s02 (uniform, 1/n). Years 7 to 10: the mean of a data set; square roots; expanding (a − b)².
- **Draft route entry (root to adopt).** id `math-a12-s03`; syllabusActions `ci5e2af56f`, `cief06313d`, `cib50250f9`, `cia0e71266`; site source `random-variables/lesson07.sa.html`; start: "From s02's die, find the balance point 3.5; then a cat's vet visits." Stop: "Generate ΣxP(x); weighted deviations cancel, so Var(X) = E((X − μ)²); σ with units; E(X²) − μ²; one applied problem with E and σ." Next: "math-a12-s04: why continuous probabilities are intervals (a question only)".
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Die: E(X) = 21/6 = 7/2; E(X²) = 91/6; Var(X) = 35/12 ≈ 2.917; σ ≈ 1.708.
  (b) Visits (site distribution): μ = 1.7. Deviations −1.7, −0.7, 0.3, 1.3; weighted −0.17, −0.21, 0.12, 0.26; sum 0 (stacks 0.38 and 0.38). Squared 2.89, 0.49, 0.09, 1.69; weighted 0.289, 0.147, 0.036, 0.338; sum 0.81. E(X²) = 3.7. σ = 0.9. μ ± σ = 0.8, 2.6. Unweighted deviations sum to −0.8.
  (c) Running mean of cats: Python 3.14 `random.Random(33).choices([0, 1, 2, 3], [0.1, 0.3, 0.4, 0.2], k=2000)`, stored as data. First ten 2, 2, 3, 1, 2, 3, 3, 1, 2, 2 (sum 21). Running mean after 1, 2, 3, 5, 10, 20, 50, 100, 200, 500, 1,000, 2,000 cats: 2, 2, 2.333, 2, 2.1, 1.95, 1.7, 1.61, 1.62, 1.698, 1.706, 1.708. Sums: 21 (10), 161 (100), 1,706 (1,000), 3,415 (2,000). Counts in the first 1,000: 97, 312, 379, 212.
  (d) Generation: N cats with frequencies about N P(x); with N = 1,000: 100, 300, 400, 200; Σ x f_x = 1,700.
  (e) Computational form: Σ(x − μ)²P(x) = E(X²) − μ² ≥ 0.
  (f) Insurance: C = 8,000 (0.02), 1,000 (0.05), 0 (0.93). E(C) = 210; profit 90. Slider: E(C) = 0.05 × 1,000 + 0.02 × c = 50 + 0.02c for a big claim of c dollars; c = 0 gives 50, c = 8,000 gives 210. E(C²) = 1,330,000; Var(C) = 1,285,900; σ ≈ 1,133.98.
  (g) A1: μ = 1.6; E(X²) = 3.2; Var = 0.64. A2: a + b = 0.8, 2a + 3b = 2.1, so b = 0.5, a = 0.3; a = b = 0.4 gives E = 2.2.
  (h) Pronunciations: "E of X"; "mu"; "sigma"; "E of X squared, the average of the squared values"; "one thousand one hundred and thirty-four dollars"; "visits squared".
  (i) Windows: die bars x 1 to 6, y 0 to 0.2; visit bars x 0 to 3, y 0 to 0.5, beam below with the fulcrum; running mean x 0 to 2,000 cats, y 0 to 3 with a dashed line at 1.7 (first 20 cats in an inset); insurance beam: a money line $0 to $8,000 (to scale) with weights drawn as discs whose areas follow the probabilities (0.93, 0.05, 0.02), the 0.02 disc enlarged by a labelled zoom ring so it stays visible.

Main question: *A cat makes 1.7 vet visits a year on average, a number no cat can make. So what is "expected"? And once we know the centre of a distribution, how do we measure its spread?*
Entry knowledge (s01, s02; the mean of a data set; expanding a square): distributions and their checks.
Stops after: E(X) as balance point and long-run average, ΣxP(x), Var(X) = E((X − μ)²) and E(X²) − μ², σ, and one applied problem.
Handoff: math-a12-s04: bars splitting into narrower bars on an interval, "what if X can be any value in an interval?" (a question only).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed; see Decisions): bars teal; μ, beam and fulcrum violet; left deviations blue, right deviations amber; squares pale violet; σ brackets violet dashed; answer green; mistake red. Header strip "MATHEMATICS ADVANCED · PROBABILITY"; scene headings in the hand font, 44 px. Screen maths writes E(X) = μ = ΣxP(x), Var(X) = σ² = Σ(x − μ)²P(x) = Σx²P(x) − μ², E(X²) and σ = √Var(X).

### 1. hook: a balance point no cat can have
> Last video ended with this question. Six equal weights on a beam balance right in the middle, at three point **five**. That's the expected value of one roll, but a die can never show three point five. Now a lopsided case. A vet clinic finds that a cat makes zero, one, two or three visits a year, with probabilities zero point one, zero point three, zero point four and zero point **two**. Where does this beam balance? What does that number mean? And how spread out are the visits?

Visual: opens on s02's last frame exactly (the fair die's six teal bars at 1/6 on x 1 to 6, the die plate, the balance triangle under the axis at "?", chip "Next: where does a distribution balance?"). Heading writes on: "What do expectation and variance measure?". The x axis thickens into a violet beam on the triangle (`BalanceBeam`), tilted. On "five" the triangle slides and the beam levels at 3.5, readout (52 px) "balance point: 3.5"; hand tag "no face shows 3.5". The die panel shrinks to a 280 px corner card. On "vet clinic" the painted cat (`biology/m5x-cat-orange-v1.png`, 380 px) walks in from the left beside the painted cat carrier (`ma12-pet-carrier-v1`, 300 px), tag "visits to the vet in a year: X". Empty bar axes x 0 to 3 (y 0 to 0.5), 1,000 × 520 px, solid at the right; as each probability is said a teal bar rises (0.1, 0.3, 0.4) and on "two" the last bar rises to 0.2, all labelled. The beam appears under these bars, tilted, its fulcrum under "?". The chip "Where does it balance? How spread out?" moves to the top right.

### 2. the long-run average
> Here's what the balance point means. Picture many cats, one after another, and keep a running average of their visits. This run starts two, two, three, so the average is high at **first**. After ten cats it's two point one. After a thousand cats, this run has settled at about one point **seven**. Another run would wobble differently, but long runs settle near the same centre. So the expected value is the long-run average of X. No cat makes one point seven visits. It isn't a prediction for one cat. It's the centre the results settle around. We write it as E of X, or the Greek letter mu, and it's a measure of centre for the **distribution**.

Visual: clear change to `RunningMeanTrace` (1,300 × 560 px): x axis "number of cats" 0 to 2,000, y axis "average visits so far" 0 to 3, a dashed violet line at 1.7 labelled "1.7". The cat plate sits at the top left (300 px) with a cat counter badge. Inset (first 20 cats): small coded cat badges each carrying its visit count (2, 2, 3, ...) with the running mean beside them: 2, 2, 2.33. On "first" the inset's line is high, hand tag "high at first". The trace reaches 10 cats (readout, 52 px, "after 10 cats: 2.1"), then runs to 2,000 over about 3 s, wobbling and settling. On "seven" a readout "after 1,000 cats: 1.706" (grey "simulated"). On the next sentences hand tags "long-run average" and "no cat makes 1.7 visits". On "distribution" the right column writes "E(X) = μ: the centre of the distribution" with the visit bars and their beam small beside it.

### 3. where Σ x P(x) comes from
> Where does one point seven come from? For a fair die, every value has the same weight, so E of X is just the ordinary average, twenty-one over six. The cat visits aren't uniform. Imagine a thousand cats. About a hundred make no visits, three hundred make one, four hundred make two and two hundred make **three**. That's seventeen hundred visits, so the average is one point **seven**. Dividing each count by a thousand gives its probability. So the expected value is the sum of each value times its probability. And the beam balances at one point seven, pulled towards the heavier **bars**.

Visual: g01 board, solid from the first frame: task strip, 44 px, "Find E(X), the expected number of vet visits"; equation strip "E(X) = μ = Σ x P(x)" (written dim, brightening on "sum of each value"); givens card "x: 0, 1, 2, 3" and "P(x): 0.1, 0.3, 0.4, 0.2"; the four teal bars at the left (900 × 480 px). On the first sentence a small chip "die: 21/6 = 3.5". On the third sentence a block of 1,000 small cat dots fills a coded tray and sorts into four piles above the bars. On "three" the row "in 1,000 cats, about: 100, 300, 400, 200" fills. On "seven" the row "0×100 + 1×300 + 2×400 + 3×200 = 1,700" and "1,700 ÷ 1,000 = 1.7" (52 px). On the next sentence "÷ 1,000" flashes and the counts turn into the P(x) row; the working "0(0.1) + 1(0.3) + 2(0.4) + 3(0.2) = 1.7" lands in a green frame "μ = 1.7". A red slip "(0 + 1 + 2 + 3)/4 = 1.5" writes and is crossed, caption "only for equal weights". On "bars" the beam under the bars tilts, then levels at 1.7, readout "balance point: 1.7"; the 1 and 2 bars tint as the heavy ones, hand tag "pulled by the heavy bars".

### 4. measuring spread: why we square
> Now, spread. A natural idea is to average how far each value is from mu, keeping the sign. These signed deviations are minus one point seven, minus zero point seven, zero point three and one point **three**. Weight each one by its probability, and add. You get exactly **zero**. That's not bad luck. Mu is the balance point, so the weighted deviations on the left always cancel the ones on the **right**. So we square each deviation first, which makes none of them negative, and then take the weighted average. That's the variance. It's an expected value too: the expected value of the squared deviation from **mu**.

Visual: camera continue (bars and level beam at 1.7, 1,100 × 560 px; the formula box shrinks to the top right). `DeviationArms`: arms draw from μ = 1.7 along the beam to each bar, labelled −1.7, −0.7 (blue) and 0.3, 1.3 (amber). On "three" the right column writes "x − μ: −1.7, −0.7, 0.3, 1.3" (52 px). On the next sentence each arm shrinks to its weighted length (−0.17, −0.21, 0.12, 0.26); on "zero" the left arms and right arms slide into two stacks of exactly equal length (0.38 each), row "−0.17 − 0.21 + 0.12 + 0.26 = 0". On "right" hand tag "weighted deviations cancel, for every distribution". On the squaring sentence each arm turns into a pale violet square on its bar's side, labelled 2.89, 0.49, 0.09, 1.69. On "mu" (last bold) a green frame "Var(X) = σ² = E((X − μ)²) = Σ (x − μ)² P(x)".

### 5. working out the variance and σ
> Here it is for the cats. The squared deviations are two point eight nine, zero point four nine, zero point zero nine and one point six nine. Weight them and add, and the variance is zero point eight **one**. But squaring changed the units. X counts visits, so the variance is in visits squared. So take the square root. The standard deviation, sigma, is the square root of zero point eight one, which is zero point **nine**. It measures the spread, in visits. Here, the values within one sigma of one point seven, from zero point eight to two point **six**, carry most of the probability.

Visual: `DistributionTable` extra rows under the bars: "(x − μ)²" 2.89, 0.49, 0.09, 1.69 and "(x − μ)² P(x)" 0.289, 0.147, 0.036, 0.338; on "one" the sum cell "0.81" ticks and a green frame "Var(X) = 0.81" lands. On the units sentence a hand tag "visits²". On "nine" green frame "σ = √Var(X) = √0.81 = 0.9 visits", hand tag "back to visits". On "six" violet dashed `SpreadBrackets` draw on the beam from 0.8 to 2.6 around μ = 1.7, tag "μ ± σ"; the bars at 1 and 2 (0.7 together) tint inside, tag "most, here". A small grey chip in the corner, 28 px: "the die: Var = 35/12 ≈ 2.92, σ ≈ 1.71".

### 6. a quicker formula
> There's a faster way to get the same number. Expand the square: x minus mu, squared, is x squared, minus two mu x, plus mu **squared**. Weight each part and add. The middle part has the sum of x times P of x, which is mu. The last has the sum of the probabilities, which is **one**. What's left is E of X squared, the average of the squared values, minus mu squared. For our distribution, E of X squared is three point seven, and three point seven minus one point seven squared is zero point eight one, the same **answer**. Be careful. E of X squared squares the values, not the probabilities, and it isn't the same as mu **squared**.

Visual: clear change to a full-width derivation board (the bars stay small at the left with the brackets, 420 px). Rows, current 52 px, earlier 32 px dimmed: "(x − μ)² = x² − 2μx + μ²"; on "squared" each term in its own colour. Row "Σ(x − μ)²P(x) = Σx²P(x) − 2μ ΣxP(x) + μ² ΣP(x)"; on the "which is mu" phrase "ΣxP(x)" is circled with a hand tag "= μ"; on "one" "ΣP(x)" is circled, tag "= 1". Row "= E(X²) − 2μ² + μ² = E(X²) − μ²", green frame "Var(X) = Σx²P(x) − μ²". On the check sentence: "E(X²) = 0(0.1) + 1(0.3) + 4(0.4) + 9(0.2) = 3.7"; on "answer" "3.7 − 1.7² = 3.7 − 2.89 = 0.81" with a green tick linking to scene 5's 0.81. On "squared" (last bold) two red slips write and are crossed: "Σx²P(x)²" (caption "square the values only") and "E(X²) = μ²" (caption "then the variance would always be 0").

### 7. a problem: the pet insurer
> Here's how these numbers get used. A pet insurer charges three hundred dollars a year to cover a cat. In a year, there's a zero point zero two chance of paying an eight thousand dollar claim, a zero point zero five chance of paying a one thousand dollar claim, and otherwise nothing. The expected payout is eight thousand times zero point zero two, plus one thousand times zero point zero five, which is two hundred and ten **dollars**. On the beam, that small weight far out at eight thousand does most of the pulling. So in the long run, the premium beats the expected claims by ninety dollars a policy, before the insurer's other costs. But the standard deviation of the payout is about one thousand one hundred and thirty-four **dollars**. One policy swings far more than ninety dollars either way. That's why insurers need many independent policies, so the long-run average takes **over**.

Visual: clear change to the g01 board. The cat plate (300 px) and the carrier sit at the top left, tag "one cat, one policy". Task strip, 44 px: "Find the insurer's expected profit per policy, and explain the risk on one policy." Givens card, grouped with units: "premium: $300 per year"; "claim $8,000: probability 0.02"; "claim $1,000: probability 0.05"; "otherwise $0 (probability 0.93)". `DistributionTable`: C 0, 1,000, 8,000; P 0.93, 0.05, 0.02. Below, the money-line beam ($0 to $8,000, to scale, 1,400 px) with weight discs at $0 (0.93) and $1,000 (0.05), the fulcrum at $50, readout "balance point: $50"; a `ParameterSlider` "big claim" sits at $0. On "dollars" (first) the slider runs from $0 to $8,000 and the 0.02 disc (circled by a zoom ring) slides out with it while the fulcrum slides live from $50 to $210; the row "E(C) = 8,000(0.02) + 1,000(0.05) + 0(0.93) = 160 + 50 = 210" lands in a green frame "$210". On the beam sentence hand tag "the far weight pulls". Row "premium − expected claims = 300 − 210 = $90 per policy" (grey "before other costs"). On "dollars" (second) a grey readout "E(C²) = 1,330,000; Var(C) = 1,330,000 − 210² = 1,285,900" and a green frame "σ ≈ $1,134". On "either way" violet dashed brackets on the money line around $210 reach far past $0 and $1,300, beside a small "$90" marker, hand tag "one cat: big swing"; a red slip "expected profit $90, so no risk" writes and is crossed. On "over" a hand tag "many policies: the average takes over".

### 8. memory aid
> Here's a way to remember the quicker formula. Mean of the squares, minus the square of the mean. Square the values, average them with the probabilities, and then subtract mu squared. The answer can never be negative.

Visual: stage change to the framed `MemoryAidCard` (1,300 × 600 px). Main line, hand font 60 px: "Mean of the squares, minus the square of the mean." Key, 40 px: "Var(X) = E(X²) − μ², never negative." Badge at the left: the cat (200 px) with "visits: μ = 1.7, σ = 0.9". Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. Find E of X and the variance of X for this distribution. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A discrete random variable X has the distribution below. Find E(X) and Var(X)." Table: x 0, 1, 2, 3; P(x) 0.1, 0.3, 0.5, 0.1. Picture slot: empty bar axes x 0 to 3, y 0 to 0.6 (no bars, no beam). The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> E of X is zero, plus zero point three, plus one, plus zero point three, which is one point **six**. E of X squared is zero point three, plus two, plus zero point nine, which is three point **two**. So the variance is three point two minus one point six squared, which is zero point six **four**. Three point two minus one point six is wrong. You subtract mu squared, not **mu**.

Visual: the card shrinks to the top (30 px). `GivensStrip`: "P(x): 0.1, 0.3, 0.5, 0.1". The P(x) row underlined as it is used. On "six" row (52 px) "E(X) = 0(0.1) + 1(0.3) + 2(0.5) + 3(0.1) = 1.6", and a small beam under four bars levels at 1.6. On "two" row "E(X²) = 0 + 1(0.3) + 4(0.5) + 9(0.1) = 3.2". On "four" green frame "Var(X) = 3.2 − 1.6² = 3.2 − 2.56 = 0.64". On "mu" a red slip "3.2 − 1.6 = 1.6" writes and is crossed, caption "subtract μ², not μ". Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. X takes the values one, two and three. Find a and b. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A discrete random variable X takes the values 1, 2 and 3, with P(X = 1) = 0.2, P(X = 2) = a and P(X = 3) = b. Given that E(X) = 2.3, find a and b." Picture slot: a coded beam with three empty bar slots at 1, 2 and 3 labelled "0.2", "a" and "b", and the fulcrum at 2.3 labelled "E(X) = 2.3". The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing (no equations).

### 12. feedback 2 (brief)
> Use both facts. The probabilities add to one, so a plus b is zero point **eight**. And the expected value gives zero point two, plus two a, plus three b, equals two point three, so two a plus three b is two point **one**. Take away twice the first equation, and b is zero point five, so a is zero point **three**. A and b both zero point four is wrong. It uses only one fact, and its expected value is two point **two**.

Visual: the card shrinks to the top. `GivensStrip`: "P(1) = 0.2", "P(2) = a", "P(3) = b", "E(X) = 2.3". Each underlined in the card as used. On "eight" row (52 px) "0.2 + a + b = 1, so a + b = 0.8". On "one" row "1(0.2) + 2a + 3b = 2.3, so 2a + 3b = 2.1". On "three" rows "(2a + 3b) − 2(a + b) = 2.1 − 1.6, so b = 0.5" and the green frame "a = 0.3, b = 0.5" with a grey check "0.2 + 0.6 + 1.5 = 2.3"; the card's beam fills its bars and levels at 2.3. On "two" (last) a red slip "a = b = 0.4" writes and is crossed, caption "E(X) would be 2.2". Hold about 1 s.

### 13. handoff
> So the expected value is the balance point, and the long-run average. The variance is the expected squared distance from it, and sigma brings it back to the units of X. Every sum here ran over a list of separate values. Next, a new question. What if X can be any value in an interval, like a sprinter's reaction time? Then the bars get thinner and **thinner**, and there's no list to add up.

Visual: the three framed results (E, Var two ways, σ) show small at the top, then fade on "Next". Board clears to the cat visit distribution's four teal bars on x 0 to 3 (no labels). On "interval" the x axis becomes a continuous line from 0 to 4 tagged "any value in an interval"; on "thinner" the bars split into 16, then 64 narrower bars across the interval (heights a smooth hump, no values, no y labels). Chip "Next: what if X can take any value in an interval?" and a "?". No density, area or probability claim. Hold about 2 s. This is s04's opening frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 36 to 40 px in the left 58 to 60% (root decision 58), each one line; the framed card on the right.
> Here are the key notes. Pause the video if you need more time to copy them.

- E(X) = μ = Σ x P(x): the balance point and the long-run average.
- E(X) need not be a value X can take.
- Var(X) = E((X − μ)²) = Σ (x − μ)² P(x).
- Quicker: Var(X) = Σ x² P(x) − μ². Square the values only.
- σ = √Var(X): a measure of spread, in X's units.

Memory aid (framed card, right half of the notes screen, as in scene 8): *Mean of the squares, minus the square of the mean.* Key: *Var(X) = E(X²) − μ², never negative.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent, no added speech): the notes board cross-fades (1 s) back to scene 13's frame exactly (the 64 thin bars across the interval, chip "Next: what if X can take any value in an interval?" and "?"). This is the final frame and s04's opening frame.

## Teaching checks

- **Does it explain causes?** Why 3.5 for the die: equal weights balance in the middle (1). Why 1.7 needn't be possible: it's a long-run average over many cats (2). Why ΣxP(x): in many trials each value turns up in proportion to its probability (3). Why 1.7 is right of 1.5: the heavier bars at 2 and 3 pull it (3). Why square: the weighted distances from the balance point always cancel (4). Why σ: squaring changed the units to visits squared (5). Why E(X²) − μ²: expanding and using ΣxP(x) = μ and ΣP(x) = 1 (6). Why the insurer's balance point is $210: a small probability far out pulls hard (7). Why a profitable policy is still a risk: σ ≈ $1,134 dwarfs $90 (7).
- **Misconceptions addressed:** "the expected value is what you'll get" (1, 2); "E(X) is the ordinary average of the values" (3, crossed); "average the distances" (4); "variance is in X's units" (5); "Σx²P(x)²" and "E(X²) = μ²" (6, crossed); "expected profit means no risk" (7, crossed); "subtract μ" (feedback 1); "one equation is enough" (feedback 2).
- **Visual standard, item by item:** 1 the painted cat and carrier by about 15 s, returning in 2, 3, 5, 7 and 8; 2 a new stage every 25 to 60 s; 3 `BalanceBeam` with the live claim slider, `RunningMeanTrace` over cats, `DeviationArms`; 4 fixed colour roles; 5 large type; 6 hand tags; 7 g01 boards (3, 7), framed answers and crossed slips; 8 framed card and five short bullets; 9 the beam levelling at 1.7, the equal stacks, the far weight dragging $50 to $210.
- **Response opportunity:** two unseen HSC-style tasks with every given visible and a picture each, 10 s each with the invitation to pause; nothing answer-bearing. One crossed mistake each; feedback about 28 s and 31 s.
- **Avoided double teaching:** s01's ΣP(x) = 1 and s02's 1/n are used, not re-taught; the mean of data is named once.
- **Syllabus coverage:** `ci5e2af56f` (1, 2; key notes 1, 2); `cief06313d` (3, 5, 6; A1; key notes 1, 3, 4, 5); `cib50250f9` (4; key note 3); `cia0e71266` (7; A1, A2).
- **Out of scope by design:** E(aX + b) and Var(aX + b); continuous moments (s08); the empirical rule.

## Practice questions and model answers

**Attempt 1 (scene 9; original wording, HSC style, 2 marks suggested, not an official marking scheme).** "A discrete random variable X has the distribution below (x: 0, 1, 2, 3; P(x): 0.1, 0.3, 0.5, 0.1). Find E(X) and Var(X)."
Model answer: E(X) = 0(0.1) + 1(0.3) + 2(0.5) + 3(0.1) = 1.6. E(X²) = 0(0.1) + 1(0.3) + 4(0.5) + 9(0.1) = 3.2. Var(X) = 3.2 − 1.6² = 0.64. Classic mistake (crossed): "3.2 − 1.6 = 1.6".

**Attempt 2 (scene 11; original wording, HSC style, 2 marks suggested).** "A discrete random variable X takes the values 1, 2 and 3, with P(X = 1) = 0.2, P(X = 2) = a and P(X = 3) = b. Given that E(X) = 2.3, find a and b."
Model answer: 0.2 + a + b = 1, so a + b = 0.8. 1(0.2) + 2a + 3b = 2.3, so 2a + 3b = 2.1. Subtracting 2(a + b) = 1.6 gives b = 0.5, so a = 0.3. Classic mistake (crossed): "a = b = 0.4" (its E(X) is 2.2).

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Die | E(X) = 21/6 = 3.5; Var = 35/12 ≈ 2.92; σ ≈ 1.71 (grey) | 1, 3, 5 |
| Visits (site card 03) | P(0..3) = 0.1, 0.3, 0.4, 0.2; μ = 1.7 | 1 to 6, 8 |
| Running mean (simulated cats) | 2 after 1 cat; 2.1 after 10; 1.706 after 1,000; 1.708 after 2,000 | 2 |
| 1,000 cats | 100, 300, 400, 200; total 1,700 | 3 |
| Deviations | −1.7, −0.7, 0.3, 1.3; weighted −0.17, −0.21, 0.12, 0.26 (sum 0; stacks 0.38) | 4 |
| Squares | 2.89, 0.49, 0.09, 1.69; weighted 0.289, 0.147, 0.036, 0.338; Var = 0.81 visits² | 4, 5 |
| σ | 0.9 visits; μ ± σ = 0.8 to 2.6 (contains 1 and 2, probability 0.7) | 5 |
| E(X²) | 3.7; 3.7 − 2.89 = 0.81 | 6 |
| Insurance (site short-answer Q2) | P = 0.02, 0.05, 0.93; balance point $50 without the big claim, $210 with it; profit $90; E(C²) = 1,330,000; Var = 1,285,900; σ ≈ $1,134 | 7 |
| A1 | μ = 1.6; E(X²) = 3.2; Var = 0.64; crossed 1.6 | 9, 10 |
| A2 | a = 0.3, b = 0.5; crossed a = b = 0.4 (E = 2.2) | 11, 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with Python 3.14 (`fractions`, `random`; 7 Nov, scratchpad `sims.py`); Codex to re-check.

- Die: Σx/6 = 7/2; Σx²/6 = 91/6; 91/6 − 49/4 = 35/12; √(35/12) = 1.7078.
- Running mean checkpoints from the stored sequence (author note c): sums 21 (10 cats), 161 (100), 1,706 (1,000), 3,415 (2,000).
- Visits: μ = 17/10; Σ(x − μ)P(x) = 0; Σ(x − μ)²P(x) = 81/100; Σx²P(x) = 37/10; √0.81 = 0.9; unweighted Σ(x − μ) = −0.8.
- Insurance: 160 + 50 = 210; 50 + 0.02 × 8,000 = 210; 300 − 210 = 90; 1,280,000 + 50,000 = 1,330,000; 1,330,000 − 44,100 = 1,285,900; √1,285,900 = 1,133.98.
- A1: μ = 8/5; E(X²) = 16/5; Var = 16/25. A2: a = 3/10, b = 1/2; with a = b = 0.4, E = 2.2.

## Memory aid check

- **"Mean of the squares, minus the square of the mean."** A standard phrasing of Var(X) = E(X²) − [E(X)]². Meaning, as said in scene 8: square the values, average them with the probabilities, then subtract μ². Assumptions checked: "mean" is the probability-weighted mean E (scene 3 makes the distinction); "squares" means the squared values, not squared probabilities (scene 6); the result is never negative (author note e). It helps a new case: A1 uses it directly. Introduced after the cause (4) and the derivation (6).
- **Considered, not used:** "MOSSOM" as an acronym (one more thing to decode).

## Narration length estimate

Counted 7 Nov with the build parser rules (`### N.` or `### Na.` headings; only lines starting "> " inside the scene, joined with a space, `**` removed; the total is the sum of the scene strings): **5,809 characters**, 14 scene headings (Revision 2: 5,676 by script, as stated). Characters per scene (1 to 14): 474, 548, 579, 557, 592, 618, 824, 216, 89, 362, 84, 404, 387, 75.

At 13.3 characters per second the speech before the notes is about 431 s. Holds: two 10 s countdowns (20 s), the memory-card hold (2 s), two feedback holds (2 s), the handoff hold (2 s), and about 18 s of settling for the beam (1, 3), the bars rising (1), the running mean (2, about 4 s), the cat dots (3), the arms (4), the brackets (5) and the claim slider (7); the key-notes scene is 45 s (1,350 frames). Total **about 520 s**, inside the 5,500 to 7,000 character band and under the 570 s cap with about 50 s spare.

Reserve trims if the voiced take runs long: scene 13's second sentence (keep the framed results silent); scene 2's "It isn't a prediction for one cat." (keep the tag). Do not cut below 5,500 characters.

## Scene list and build ids

Lesson key `m-a12s03` (route math-a12-s03). Explainer folder `src/explainer/lessons/math-a12-s03`; build inputs in `docs/production/claude-pm/lessons/math-a12-s03/` (to be created at voicing).

In order (kebab-case; 14 scene headings, all `### N.`): hook-cat, long-run-average, sum-x-p-x, why-square, variance-and-sigma, quicker-formula, pet-insurer, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (seconds from the estimate):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 39 s | 1 | The die beam levelling at 3.5, then the cat and its visit bars |
| 39 to 84 s | 2 | Running mean over 2,000 simulated cats |
| 84 to 130 s | 3 | g01 board: a thousand cats give Σ x P(x); the beam levels at 1.7 |
| 130 to 221 s | 4 to 5 | Arms cancelling, then squares; Var and σ with spread brackets |
| 221 to 267 s | 6 | Full-width derivation of Σx²P(x) − μ² |
| 267 to 333 s | 7 | g01 board: the pet insurer, the money-line beam and the claim slider |
| 333 to 351 s | 8 | Framed memory card |
| 351 to 444 s | 9 to 12 | Question cards with pictures and countdowns, then feedback with givens strips and crossed slips |
| 444 to 475 s | 13 | Thin bars across an interval (s04 opening frame) |
| 475 to 520 s | 14 | Key notes with the framed card, then a silent return to scene 13's frame |

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): s02's last frame continues into scene 1 (camera continue; the beam levels, then the cat arrives); 1 to 2 clear change (the running mean); 2 to 3 clear change (the g01 board); 3 to 4 to 5 camera continue (same bars and beam); 5 to 6 clear change (the derivation board); 6 to 7 clear change; 7 to 8 clear change to the card; attempts and feedback: the card shrinks to the top; 12 to 13 board clear; 13 to 14 fade to the notes board, then a silent return to scene 13's frame.

Holds: attempt-1, attempt-2 (10 s countdown, the ring shown full from "Pause here to answer."); key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a12s03-rev3-learning-review.md`, `science_check` = `checks/m-a12s03-rev3-maths-check.md`.

## Assets

Inspected before choosing (7 Nov, `public/assets`, read only, actual appearance): `biology/m5x-cat-orange-v1.png` (2000 × 2000, an orange tabby cat standing in side view, tail up, painted in the house style, transparent) is reused as the anchor's cat; `biology/m5x-cat-black-v1.png` and `m5x-cat-tortoiseshell-v1.png` exist as alternates for the cat badges. `biology/m5x-die-v1.png` is reused in scene 1. No pet carrier, vet or insurance object exists in any course; the coins plate (`biology/y11-coins-v1.png`) has a dark backdrop and is not usable.

Reused: `biology/m5x-cat-orange-v1.png`, `biology/m5x-die-v1.png`.

Need (painted, new; see the Codex asset brief): `ma12-pet-carrier-v1.png`.

Coded (studio kit): bars, the beam and fulcrum, the running-mean trace, cat badges and dots (small coded markers, not drawings of cats), arms and squares, brackets, the money line and its weight discs, the slider, tables, working boards, question cards and their pictures, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: the s01 additions (`ProbabilityBars`, `DistributionTable`) and the studio's `ParameterSlider`, `LiveReadoutBoard`, `TaskStrip`, `EquationStrip`, `GivensCard`, `WorkingRows`, `AnswerFrame`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard` with its picture slot and `GivensStrip`.

Additions:
1. **`BalanceBeam`**: the x axis of a `ProbabilityBars` set (or a to-scale money line with weight discs) drawn as a beam on a fulcrum; the tilt follows the net moment Σ(x − fulcrum)P(x), capped, so it is level only at μ; `settle: false` for s02's handoff; a live "balance point" readout; a linked `ParameterSlider` that moves one value and the fulcrum with it. Checks: level exactly at 3.5, 1.7, 1.6 and 2.3; the slider's fulcrum equals 50 + 0.02c at every frame.
2. **`RunningMeanTrace`**: the running mean of a stored sequence against the trial count, a dashed target line, an inset of the first k trials as badges, reveal cues and readouts. Checks: 2.1 at 10 cats, 1.706 at 1,000, 1.708 at 2,000 (author note c).
3. **`DeviationArms`**: arms from μ to each value, weighting, cancelling into two equal stacks, squares. Checks: stacks 0.38 and 0.38; squares 2.89, 0.49, 0.09, 1.69. Throws if the supplied μ is not the distribution's mean.
4. **`SpreadBrackets`**: μ ± σ on the beam or the money line, with optional tint of the bars inside.

## Codex asset brief (Maths A12 S03, a cat's vet visits)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a12-s03.md`, draft route entry math-a12-s03. Paint after the learning review and maths check pass and root gives the go-ahead. Save to `public/assets/maths/`. Every plate: **transparent PNG with a true alpha channel** and clean edges with no coloured fringe or halo (check on a black and a white background); ink and watercolour in the house style, matched in line weight, palette and finish to `biology/m5x-cat-orange-v1.png`; at least 8 per cent clear margin; no text, labels, letters, numbers, scale marks, brand names, people, hands, faces, backdrop, glow or ground shadow. Never stretch to fit; keep the native aspect ratio.

1. `ma12-pet-carrier-v1.png` (1600 × 1200 px): one plastic pet carrier for a cat, three-quarter front view, a hard two-tone shell (muted grey-blue top, off-white base) with a top carry handle and a front wire grille door, closed and **empty** (no animal inside). Sized so that, at the same pixel scale as `biology/m5x-cat-orange-v1.png`, the cat would fit inside it (the carrier's body about 55 per cent of the cat plate's width). No stickers, logos or labels.

Report inspection on the paper background (`#f6f1e7`) at 300 px and 600 px wide, side by side with `biology/m5x-cat-orange-v1.png` at matching scale, plus the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma12-s03-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the derivation in scene 6 and the claim that Var(X) is never negative.
3. Confirm the scope of every learner-visible general claim: "the weighted distances always cancel" stated with "weighted"; "the long-run average" is "settled at about", not "reaches"; "most of the probability" in scene 5 said of this distribution only; no fraction-inside-σ rule.
4. Confirm the running-mean readouts come from the stored sequence and are labelled simulated, and the build stores the data.
5. Confirm the insurance numbers (site short-answer Q2), that σ ≈ $1,134 includes the 0.93 outcome, and that the slider's balance point 50 + 0.02c is $50 at c = 0 and $210 at c = 8,000.
6. Confirm the cat context makes no veterinary claim and names no illness.
7. Confirm both attempt questions carry every demand and given, each card has its picture, and neither card shows a formula, an equation or the answer form.
8. Confirm the opening frame equals s02 scene 13, and scene 13's frame equals s04 Revision 4's opening frame.
9. Confirm the four syllabus quotes match the crosswalk JSON exactly and no site module label appears in learner copy or metadata.
10. Confirm no em dash (U+2014) anywhere in this file, Australian spelling, and the narration counts by script with every bold cue quoted in its scene's Visual in spoken order.

## YouTube metadata (draft)

Title: Expected Value and Variance of Discrete Random Variables | Year 12 Maths Advanced

(Title length: 82 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/random-variables/lesson07.sa.html

A die's expected value is 3.5, a number it can never show, and a cat makes 1.7 vet visits a year on average, though no cat makes 1.7 visits. So what is expected? See the expected value as the balance point of the bar graph and as the long-run average over many cats, and see where E(X) = Σ xP(x) comes from. Then measure spread: the weighted distances from the mean always cancel, so we average squared distances, which makes the variance an expected value, Var(X) = E((X − μ)²). Work out the variance and standard deviation, derive Σ x²P(x) − μ², and use expectation and standard deviation to explain a pet insurer's risk. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 12, random variables.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Recognise the mean, or expected value, μ or E(X), of a discrete random variable X as a measure of centre for its distribution"
"Generate and use the formulas E(X)=μ=ΣxP(x) and Var(X)=σ^(2)=Σ(x-μ)^(2)P(x)=Σx^(2)P(x)-μ^(2) for the random variable X, where Var(X) is the variance and σ is the standard deviation of the distribution"
"Recognise that the variance is an expected value because Var(X)=E((X-μ)^(2))"
"Solve problems involving probabilities, expectation and variance of discrete random variables"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54

Builds on: When is a distribution uniform? (previous video); the mean of a data set. Next: Continuous random variables.

#Year12Maths #MathsAdvanced #Probability #HSCScience

## Open decisions

- **1. The visit distribution as a story (learning review, maths check).** The site's card 03 numbers are told as a cat's vet visits; confirm the story reads as illustrative, not as a veterinary fact (the screen tags it "example").
- **2. Syllabus quote linear form (error check).** The crosswalk's linear text is quoted unchanged; root may prefer "σ²" and "Σx²P(x) − μ²" for readability in the description.
- **3. The die's variance chip (learning review).** 35/12 appears only as a small grey chip in scene 5; remove it if it competes with the 0.81 work.
- **4. Spoken "E of X squared" (voice pilot).** First use says "E of X squared, the average of the squared values".
- **5. Route entry (root).** The draft route entry in Decisions is a provisional input. **6. Site link form.** `.sa.html`, as root decision 15.

## Review notes

- Revision 3 (7 Nov) has had no independent review. Next: student learning review (trace from s01, s02 and the mean of data; check that the beam makes "balance point" concrete before the formula; that the running mean over cats is labelled simulated; that the thousand cats generate ΣxP(x) rather than assert it; that the cancelling arms are the reason for squaring; that "visits squared" motivates σ; that the claim slider shows the far weight pulling without overloading scene 7; that the cards give nothing away), then the Codex maths check and error check, then voicing on the Google voice and a build on the studio kit to grade A.
- The levelling beam, the running mean, the cancelling arms, the brackets and the claim slider carry the explanation; judge them at playback speed in the voiced preview, not from stills.

## Revision 2 (4 November 2026, brief 162 repairs)

Scene 7 says "many independent policies"; the author-only fulcrum note corrected. Narration then 5,676 characters.

## Revision 3 (7 Nov 2026)

Redesign to `../maths-visual-standard.md` on the d01 Revision 6 pattern, with an everyday anchor (owner rule, 7 Nov). Scope, every site number, the cause chain, both attempts and the memory aid are unchanged.

- **Anchor and why:** a pet cat's vet visits (the site's card 03 distribution) and the pet insurer covering it (the site's insurance problem). One everyday context carries the balance point, the long-run average, the spread in visits and the insurer's risk.
- **Simulations:** `BalanceBeam` (levelling at 3.5 and 1.7; in scene 7 a claim slider drags the balance point from $50 to $210); `RunningMeanTrace` over 2,000 simulated cats; `DeviationArms`.
- **Colour roles:** bars teal; μ, beam and fulcrum violet; left deviations blue, right amber; squares pale violet; σ brackets violet dashed; answer green; mistake red.
- **Plates:** reused `biology/m5x-cat-orange-v1.png` and `biology/m5x-die-v1.png`; new `ma12-pet-carrier-v1` (brief above).
- **Narration changes (not voiced):** scenes 1, 2, 3, 5, 7 and 13 (listed with counts in Decisions). Other scenes keep their Revision 2 text.
- **Counts:** 5,676 → 5,809 characters; about 529 s with the old 60 s notes hold → about 520 s with holds (notes 45 s).
- **Key notes:** five one-line bullets (were four long notes) beside the framed card.
- **Joins:** opens on s02's balance frame (unchanged); ends on the thin bars across an interval (frame unchanged, narration now names a sprinter's reaction time), which s04 Revision 4 opens on.
- **Kit additions:** `BalanceBeam` (with the money line and a linked slider), `RunningMeanTrace`, `DeviationArms`, `SpreadBrackets`.

## Revision 4 (12 Nov 2026)

Brief 240 findings (Codex, 11 Nov) and fixes:

- **Signed deviations (scene 4).** "Distances" become "signed deviations" and "deviations" throughout scenes 4 and 5 and the hand tags; squaring "makes none of them negative" (not "all positive").
- **Standard deviation (scene 5, key note 5).** "It measures the spread, in visits." (not "a typical distance"). The bracket label and key note match.
- **Insurer's $90 (scene 7).** "the premium beats the expected claims by ninety dollars a policy, before the insurer's other costs." The row reads "premium − expected claims" with a grey "before other costs".
- **Seeded run (scene 2).** Now "this run has settled", with "Another run would wobble differently, but long runs settle near the same centre."
- **Narration changed:** scenes 2 (548 to 635), 4 (557 to 600), 5 (592 to 576), 7 (824 to 882). Total 5,809 to 5,981 characters, 14 scene strings (build parser rules).
