# Maths A12 S01: How do data and a model determine a discrete probability distribution? Random variables, relative frequency, why the estimates add to 1, and building a distribution (design)

Status: Revision 3 (7 Nov 2026): redesign to maths-visual-standard.md (d01 Revision 6 pattern, everyday anchor). Needs Codex learning review and maths check before voicing.

Previously Revision 2 (4 Nov 2026, brief 162 repairs). Not voiced (no `math-a12-s01/` folder, no audio, no `measured/lesson.json`), so the narration is rewritten freely where the bar needs it. Earlier text is in git history (`git log -p -- docs/production/claude-pm/lessons/math-a12-s01.md`).

Narration 5,792 characters, 14 scene headings, about 517 s with holds (the key-notes scene fixed at 45 s), counted by script with the build parser rules (see "Narration length estimate"). Nothing recorded; human listening pending.

Scope: first video of the Year 12 Mathematics Advanced statistics and probability strand (outline playlist order 53), after f15 (the last financial mathematics video) and before s02 (uniform discrete distributions). Revision 3 follows `math-a12-d01.md` (Revision 6, built and approved by the owner) and `../maths-visual-standard.md`, on the maths studio kit (`src/explainer/math/studio/`): painted plates carry the everyday anchor (a board-game die, its rolls landing live); bar graphs, tables and algebra stay coded. Site lesson read (3 Nov, read-only) in full: `C:/Users/kygs/hscscience/subjects/maths-advanced/year12/random-variables/lesson05.sa.html` (Discrete Probability Distributions), SHA256 `e4e82191b5488803872d0c4dc2af00c1bba15b708387ef339e819e8b56014bdd`. The site repo is no longer on this machine (root decision 35): every site worked example is kept exactly as recorded below, and Codex confirms them against the live site. Route entry: none yet (draft in Decisions). Outline entry: `math-a12-s01` in `../../programme/maths-a12-course-outline.json`.

Owner rules applied: new 2024 syllabus only, content points cited by codename and exact wording, no site "Module" or "MAV-12-07" label anywhere; painted plates for real objects, coded graphs, tables and algebra; no people, hands or faces; no gambling context or branding (the site's "casino die" is "a die from a board game"); one reasoning stage at a time with only the needed earlier results kept; worked examples in the g01 layout with a framed answer and a crossed slip; "Pause here to answer." then a 10 s countdown with the full worded question and a picture on screen; givens underlined in the feedback as they are used; brief feedback with one crossed mistake; original HSC-style questions; key notes as five short bullets with the framed memory card; Australian spelling; no em dashes; conversational narration that explains the cause before the rule.

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 12, Random variables; NESA content-system codenames, official `code` field empty), quoted from `../../programme/syllabus/maths-advanced-2024-y12-crosswalk.json`:

- `ci33ef8834`: "Use the relative frequencies of discrete random variable datasets to estimate the probabilities that the random variable X takes each of its values, and explain why these estimated probabilities add to 1"
- `ci49013884`: "Denote the probability that the discrete random variable X takes the value x by P(X=x), or by P(x) if the discrete random variable X is understood"
- `cicc08703c`: "Define a discrete probability distribution to be the set of values x taken by a discrete random variable X, together with the probabilities P(x) that x is the outcome of the experiment"
- `cif1d51f9d`: "Generate a probability distribution for a given discrete random variable and represent the probability distribution in graphical and tabular form"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54

**Boundary:** starts from f15's handoff frame, unchanged (the face 4 bar at 38 of 200 rolls, the other faces "?", chips "Next: is the die fair?" and "?"), and the site's question: a die rolled 200 times with counts 28, 35, 31, 38, 34, 34 (site card 03 and problem 3, numbers unchanged). Names a discrete random variable in plain words and the notation P(X = x) and P(x) (`ci49013884`); turns counts into relative-frequency estimates and explains why they add to 1 (`ci33ef8834`); defines a discrete probability distribution with its two checks and shows it as a table and a bar graph (`cicc08703c`, `cif1d51f9d`); sets the fair-die model beside the data and answers the hook with simulated fair runs; generates the distribution of the number of heads in three coin tosses (site card 06, numbers unchanged). Stops at building and checking distributions. Not taught: uniform distributions and "random is not uniform" (s02; the handoff asks the calendar question and feedback 2 crosses "one third each" as a first sign); expected value, variance and the balance point (s03); unknown-constant problems such as P(x) = kx (later home: the strand practice video); continuous random variables (s04 onwards); formal hypothesis testing (the hook is answered with a scoped "not strong evidence").

## Decisions

### Revision 3 redesign (7 Nov 2026; these bullets override older bullets below where they conflict)

- **Anchor: a die from a board game, rolled 200 times (painted plates, live).** The opening frame is fixed by f15 (a die's face counts, "Is the die fair?"), and the site lesson's data and hook are this die, so the die stays the anchor: a board-game die is an everyday chance object every student has handled, it needs no science, and it carries every idea in the lesson (a number decided by chance, counts, relative frequencies, the one-trial-one-value reason, the fair model and the wobble of fair data). The prompt's alternatives (a food truck's queue, goals per game) were weighed: either would need f15's handoff changed and would leave the site's numbers without a context. The anchor returns in scene 6 (the fair model and the simulated fair runs, each a die rolled 200 times), scene 8 (the memory card) and scene 13 (the handoff, beside the calendar for s02).
- **Simulations (standard item 3).**
  1. `RollSimulator` (scenes 1 and 3, new studio part): the painted die tumbles (its six painted top views cycling with a short squash and settle) while a roll counter climbs 0 to 200 and each roll drops a token into its face's column; the six blue bars grow live to 28, 35, 31, 38, 34, 34 with a `LiveReadoutBoard` showing "rolls", "fours" and "relative frequency of 4". The roll order is one stored shuffle of the site's counts (author note h), so the bars always end exactly on the site data. In scene 3 the replay runs again, slowed, while the relative-frequency readout for a four swings from 0.4 (10 rolls) to 0.2 (50 rolls) and settles near 0.19.
  2. Simulated fair runs (scene 6): three stored runs of 200 rolls of a fair die replace each other on the same axes, with the 1/6 line fixed, so the wobble of fair data is watched (author note c).
  3. `OutcomeSort` (scene 7, feedback 2): sequences and pairs slide into columns by their value and become the bars.
- **Colour roles (fixed for the whole video).**
  - **data bars and their counts and relative frequencies: blue** (`MATH_BLUE`);
  - **model probabilities (the fair die, the coins, the counters): teal** (`MATH_TEAL`);
  - **the value being asked about and reference lines: amber** (`MATH_AMBER`; the face 4 bar when it is the question, the 1/6 line, the mirror line);
  - **answer: green** (`MATH_ANSWER`), framed answers and ticks;
  - **mistake and invalid entries: red** (`MATH_MISTAKE`), crossed slips and the negative bar only;
  - ink for tables, axes and algebra. Colour is never the only carrier: every coloured set has a written label ("data", "fair model").
- **Large type (standard item 5).** Current working line and readout numbers 52 px; task strips, equation strips and givens 44 px; earlier lines 30 to 32 px and dimmed, never removed while needed; axis numbers and bar labels at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; all text above y = 950. The bar graph is the stage at 1,100 × 640 px; the die plate is at least 300 px tall whenever it carries the idea.
- **Handwritten voice (standard item 6).** `HandTag` in the role colours: "each roll: exactly one face", "same shape, new scale", "shows it", "explains it", "no values between", "can't be negative", "wobble", "× 3", "one sequence, one value", circles, arrows and crossings. At most two live at once.
- **Stage changes (standard item 2), a new visual idea at most about 60 to 70 s apart:** the die rolling into the bars (1); the top face and notation over the bars (2); the relabel and the replayed estimate (3); roll tokens and the bars tipping into one total bar (4); table and graph side by side with the invalid contrast panel (5); the fair model, then three fair runs (6); the coins' g01 board and the sort (7); the framed memory card (8); question cards with pictures (9 to 12); the die and calendar handoff (13); key notes (14).
- **Worked examples (g01 layout, standard item 7).** Scene 3 is set as a g01 board (task strip "Estimate P(X = 4)", equation strip "relative frequency = count ÷ number of trials", givens card "rolls: 200; fours: 38", a green framed "P(X = 4) ≈ 0.19" and the crossed slip "P(X = 4) = 0.19" captioned "it's an estimate"). Scene 7 is the coins' g01 board (task strip, the three-step strip as the equation strip, givens "fair coin, 3 tosses, X = number of heads", rows one at a time, the framed table, and the crossed slip "1/4 each" captioned "four values, not equally likely"). Feedback scenes carry a `GivensStrip` on the answer side, rows at 52 px, a green framed answer and one crossed slip each.
- **Memory aid (standard item 8).** Framed `MemoryAidCard`: "One trial, one value." with the key "so the counts add to n, and ΣP(x) = 1" and a die badge (one token dropping into one column). Key notes are five short one-line bullets beside the card; the notes scene is 45 s (1,350 frames).
- **Visual surprise (standard item 9).** The six count bars tip over and lie end to end as one bar of exactly 200, which relabels to 1 (scene 4): the sum to 1 is seen to be forced, not lucky. Second: every one of three simulated fair dice wobbles further from 33 than our four did (scene 6), so the "suspicious" 38 looks ordinary.
- **Question cards (full text and a picture).** A1 shows the full worded question, its count table and the painted spinner (four coded sectors numbered 1 to 4). A2 shows the full worded question and the four painted counters (two red, two yellow) beside a coded bag outline label "bag". Nothing answer-bearing on either card.
- **Narration (not voiced).** Scene 1 now says the die is from a board game and invites the student to watch the rolls land (419 to 466 characters); scene 3 replaces the "more rolls" sentence with the replayed estimate (536 to 674); scenes 11 and 12 change the counters from blue to yellow to match the existing counter plates (176 to 178; 364 to 368); scene 13 hands off to s02's calendar instead of the sum of two dice (286 to 338). All other scenes keep their Revision 2 text. Old notes: four long notes; now five short bullets.

### Kept from Revisions 1 and 2

- **Learner question kept (outline).** "How do data and a model determine a discrete probability distribution?" The answer, built in order: a random variable is a number decided by a chance outcome (2); data give each probability as a relative frequency, an estimate (3); the estimates add to 1 because each trial lands in exactly one value (4); the result, values with their probabilities, is a distribution, valid only when both checks pass (5); a model gives probabilities by reasoning, before any trial, and comparing the two needs a sense of how much fair data wobble (6); a described experiment gives a distribution in three steps: list, find, check (7).
- **Hook (a question the data can't answer alone).** The site's hook, with the site's numbers, minus the casino: "Is the die fair?" (f15's handoff wording). A four came up 38 times, the most of any face. The answer needs the model and the size of a fair die's wobble, so the hook is answered in scene 6.
- **Notation (`ci49013884`).** Syllabus form P(X = x) and P(x) throughout. The site writes p(x); a grey note "some books write p(x)" appears once in scene 2. Capital X is the variable, small x one of its values, stated once in plain words.
- **Plain meanings at first use (Year 12 entry).** Random variable: "a number decided by the outcome of a chance experiment". Discrete: "its values are separate, and we can list them". Relative frequency: "that fraction of the rolls". Distribution: "the set of values X can take, together with the probability of each value". Model: "reasoning about how the experiment works".
- **Estimates use ≈ (site card 03 and trap 04).** Every data-derived probability is written with ≈ on screen and "approximately" in speech; the model's 1/6 uses =.
- **Two checks (site card 05 and trap 03).** 0 ≤ P(x) ≤ 1 for every x and ΣP(x) = 1. The contrast list 0.7, 0.7, −0.4 (site trap 03, unchanged) adds to 1 but fails the first check.
- **The hook answered without hypothesis testing (Revision 2, root decision 54).** The model gives 1/6 ≈ 0.167; the data give 0.19; about 4.7 more fours than the 33.3 expected. Three simulated fair runs each have a face further from 33⅓ than our 38 (run A 23 and 41, run B 20 and 42, run C 40). Conclusion, scoped as on the site: "these data aren't strong evidence that the die is unfair". The binomial tail (0.21) is author-only.
- **Generate from a model (`cif1d51f9d`; site card 06 and drill 3, numbers unchanged).** Three tosses of a fair coin, X the number of heads: 8 equally likely sequences, P(0) = 1/8, P(1) = 3/8, P(2) = 3/8, P(3) = 1/8. Three steps from site card 07 (list the values, find each probability, check). The graph shows symmetry about 1.5, and the middle values three times as likely as the ends.
- **Attempts (original).** (A1) A four-section spinner spun 250 times: 55, 70, 60, 65. (a) Estimate P(X = 2) ≈ 70/250 = 0.28. (b) Explain why the four estimates add to 1. Crossed: "0.22 + 0.28 + 0.24 + 0.26 = 1" offered as the explanation (site trap 02). (A2) A bag holds 2 red and 2 yellow counters (Revision 3: yellow replaces blue to match the existing counter plates); two are drawn together; X is the number of red counters drawn. Answer 1/6, 4/6, 1/6. Crossed: "1/3, 1/3, 1/3", also the bridge to s02.
- **Mistake scene:** none separate. "A count is a probability" (3); "estimates are exact" (3, crossed slip); "adding them up explains it" (4; feedback 1 crossed); "summing to 1 is enough" (5); "38 is more than 33, so it's unfair" (6); "values of X are equally likely" (7 slip; feedback 2 crossed).
- **Handoff (outline next: s02, "When is a finite distribution uniform?"; Revision 3).** Scene 13 sets the one fair die's model bars (all 1/6) beside a painted tear-off desk calendar and empty axes for the date, 1 to 31, with "?", and asks whether every date is equally likely. No bar heights are shown on the right. Chip "Next: when are all values equally likely?". This frame is s02 Revision 3's opening frame.
- **Site sources used:** lesson 5 cards 02 (theoretical against experimental; "counts mean estimating, a mechanism means calculating"), 03 (die counts and estimates), 04 (why the estimates add to 1), 05 (definition and two conditions), 06 (three-coin table and graph, gaps between bars), 07 (three steps) and problem 3 (is the die loaded: 0.19 against 0.1667, about 4.7 extra fours, "not sufficient evidence"), traps 02, 03 and 04.
- **Site corrections (for the brief 142 style log):** (1) the lesson 5 hero graphic labels a bar graph "total area = 1"; for a discrete distribution the bar heights add to 1 (suggested: "heights add to 1"). (2) Content note: the hook's "casino die" frames the lesson as gambling; "a die" carries the same question.
- **Entry knowledge (draft route `entryKnowledge`):** Year 11 probability (sample spaces, equally likely outcomes and P(A) = favourable ÷ total, relative frequency as an estimate, listing outcomes of two- and three-stage experiments, complements). Years 7 to 10: reading and drawing bar graphs and tables, fractions and decimals.
- **Draft route entry (root to adopt).** id `math-a12-s01`; syllabusActions `ci33ef8834`, `ci49013884`, `cicc08703c`, `cif1d51f9d`; site source `random-variables/lesson05.sa.html`; start: "Name a discrete random variable and P(X = x); estimate probabilities from counts as relative frequencies." Stop: "Explain why estimates add to 1; define a distribution with its two checks; set a fair model beside data; generate a distribution from a described experiment as a table and a bar graph." Next: "math-a12-s02: is every date on a calendar page equally likely? (when is a finite distribution uniform)".
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Relative frequencies: f_x/n with Σf_x = n because each of the n trials yields exactly one value; hence Σ f_x/n = 1. Data: 28 + 35 + 31 + 38 + 34 + 34 = 200; 0.14 + 0.175 + 0.155 + 0.19 + 0.17 + 0.17 = 1 exactly.
  (b) Hook comparison: under a fair model the number of fours in 200 rolls is Bin(200, 1/6), mean 33⅓, standard deviation ≈ 5.27; P(N ≥ 38) = 0.2123. Not spoken or shown (Revision 2).
  (c) Simulated fair runs (fixed data, 200 rolls each, faces 1 to 6): run A 41, 37, 23, 38, 34, 27; run B 20, 40, 36, 29, 33, 42; run C 32, 40, 28, 37, 30, 33 (each sums to 200; generated in Python with `random.Random(11)`, `(13)`, `(21)`). Largest distance from 33⅓: A 10.33 (face 3: 23), B 13.33 (face 1: 20), C 6.67 (face 2: 40); ours 4.67.
  (d) Three coins: HHH, HHT, HTH, THH, HTT, THT, TTH, TTT; heads counts 3, 2, 2, 2, 1, 1, 1, 0. Distribution 1/8, 3/8, 3/8, 1/8; symmetric about 1.5.
  (e) A2: counters R1, R2, Y1, Y2; pairs R1R2, R1Y1, R1Y2, R2Y1, R2Y2, Y1Y2 (6, equally likely when drawn together at random); red counts 2, 1, 1, 1, 1, 0. Distribution 1/6, 4/6, 1/6.
  (f) Pronunciations: "P of X equals four"; "P of x"; "zero point one nine"; "one sixth"; "zero point one six seven"; "three eighths"; "two hundred and fifty"; "zero point two eight"; "four sixths"; "thirty-first".
  (g) Windows: die bars x 1 to 6 (bar width 0.6, gaps 0.4), counts axis 0 to 50 (f15's handoff axis), proportion axis 0 to 0.25 (= 50/200, so the relabel keeps every bar height); 1/6 line at 0.1667 (33.3 on the counts axis). Coin bars x 0 to 3, y 0 to 0.5 (ticks labelled 1/8 to 4/8). Calendar handoff axes x 1 to 31, y 0 to 0.04, no bars.
  (h) Roll order for `RollSimulator`: the multiset of the site counts shuffled with Python `random.Random(5).shuffle` (stored as data; the build never regenerates it). First twelve rolls 1, 4, 4, 2, 2, 5, 5, 4, 6, 4, 3, 2. Checkpoints (counts of faces 1 to 6; relative frequency of 4): 10 rolls [1, 2, 0, 4, 2, 1], 0.4; 25 rolls [3, 5, 6, 6, 3, 2], 0.24; 50 rolls [7, 9, 8, 10, 8, 8], 0.2; 100 rolls [15, 18, 15, 19, 15, 18], 0.19; 150 rolls [21, 24, 25, 31, 27, 22], 0.207; 200 rolls [28, 35, 31, 38, 34, 34], 0.19.
  (i) Idealisation: the "board-game die" is a story context for the site's data; no claim is made about any real die.

Main question: *A board-game die rolled 200 times gives 38 fours, more than any other face. Is it fair? To decide, we need to know what the counts of a fair die should look like. How do data, and a model, each give a probability distribution?*
Entry knowledge (Year 11 probability; Years 7 to 10 graphs and tables): listing outcomes and finding P(A) for equally likely outcomes.
Stops after: estimates, why they add to 1, the definition and its two checks, the fair model against the data, and a generated distribution as a table and a graph. No uniformity, expectation or variance.
Handoff: math-a12-s02: one fair die's equal bars beside a calendar and empty date axes, "Is every date equally likely too?" (a question only).

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed; see Decisions): data blue; model teal; the value asked about and reference lines amber; answer green; mistake and invalid red; ink tables and algebra. Header strip "MATHEMATICS ADVANCED · PROBABILITY" at the top; scene headings in the hand font, 44 px. Type: current line and readouts 52 px; strips and givens 44 px; earlier lines 30 to 32 px dimmed; axis numbers at least 28 px; hand tags at least 34 px; question cards 40 px; nothing below 26 px; all text above y = 950. Screen maths writes P(X = 4), P(x), 38/200, 1/6, ΣP(x) = 1 and 0 ≤ P(x) ≤ 1.

### 1. hook: is this die fair?
> This video starts something new: random variables. Here's a die from a board game, rolled two hundred times. A four came up thirty-eight times. Let's watch all two hundred rolls land, and fill in the other **faces**. Four came up more than any other face. So is the die **fair**? Before we can answer, we need to know what the counts from a fair die should look like. That's what a probability distribution tells us. So how do data, and a model, each give us a distribution?

Visual: opens on f15's handoff frame exactly (coded face-count chart, axis "face" 1 to 6, "count" 0 to 50, tag "200 rolls", one bar at face 4 labelled "38", dashed "?" outlines at the other five faces, chips "Next: is the die fair?" and "?"). Camera continue. On the first sentence the chip "Next: is the die fair?" fades, the heading writes on ("How do data and a model give a probability distribution?") and the chart slides right to 1,100 × 640 px. On "board game" the painted die (`biology/m5x-die-v1.png`, 360 px tall) lands solid at the left on a coded strip of table, tag "a board-game die". On "watch" `RollSimulator` runs (about 7 s): the die tumbles, cycling its painted top views (`ma12-die-top-1-v1` to `-6-v1`, 300 px), each roll drops a small coded face token into its column, the face 4 bar resets to a dashed ghost at 38 and all six blue bars grow from 0; `LiveReadoutBoard` at the top left, 52 px: "rolls 0 → 200", "fours 0 → 38". On "faces" the bars settle on 28, 35, 31, 38, 34, 34 with count labels (the 4 bar fills its ghost exactly). On the next sentence the 4 bar glows amber, hand tag "38: the most". On "fair" the "?" chip moves beside the die, hand tag "fair?". On the last sentence the chip "Data or a model?" moves to the top right as the scene question.

### 2. a random variable, and P(X = x)
> First, a name for the number we're recording. A random variable is a number decided by the outcome of a chance experiment. Here, X is the number on the top **face**. It's discrete, which means its values are separate, and we can list them: one, two, three, four, five and **six**. We write P of X equals four for the probability that X takes the value **four**. Capital X is the variable, and small x stands for any one of its values. When it's clear which variable we mean, we just write P of **x**.

Visual: camera continue; the bars stay solid at 70 per cent strength (not ghosted). The die sits at 320 px showing its top view `ma12-die-top-4-v1`. On "face" a hand arrow runs from the die's top face to a chip, 44 px, "X = number on the top face". On "six" the axis values 1 to 6 glow in turn, hand tag "discrete: separate values we can list". On "four" the right column writes "P(X = 4)" at 52 px with a gloss, 34 px, "the probability that X takes the value 4"; the 4 bar outline glows amber. On the next sentence "P(X = x)" with "X" tagged "the variable" and "x" tagged "one of its values". On "x" (last bold) "P(x)" writes beside it, with a small grey note, 28 px, "some books write p(x)".

### 3. from counts to estimates
> Now turn the counts into probabilities. Divide each count by the number of rolls, two hundred. Thirty-eight out of two hundred is zero point one **nine**. That fraction of the rolls is called a relative frequency. Now watch the **bars**. Every bar is divided by the same number, so the shape doesn't change, only the scale. These numbers are estimates, so we write approximately equals, not **equals**. A relative frequency describes these two hundred rolls. The probability belongs to the die itself. Replay the rolls and watch the estimate for a four. After ten rolls it read zero point four. After fifty, it was already near zero point two. More rolls usually give a better **estimate**.

Visual: g01 board at the right, solid from the first frame: task strip, 44 px, "Estimate P(X = 4)"; equation strip "relative frequency = count ÷ number of trials"; givens card "rolls: 200" and "fours: 38" (blue). The `DistributionTable` writes under it: row "x" 1 to 6, row "count" 28, 35, 31, 38, 34, 34, with "÷ 200" flashing over each count in turn. On "nine" the row "P(x) ≈" fills 0.14, 0.175, 0.155, 0.19, 0.17, 0.17 and the working row, 52 px, "P(X = 4) ≈ 38/200 = 0.19" lands in a green answer frame. On "bars" the y axis relabels from counts (0 to 50) to relative frequency (0 to 0.25) over about 1.5 s while every bar keeps its height (author note g); hand tag "same shape, new scale". On "equals" a red slip "P(X = 4) = 0.19" writes and is crossed, red caption "it's an estimate: use ≈". On "Replay" the bars empty and `RollSimulator` replays at half speed with a large readout, 52 px, "relative frequency of 4"; it reads 0.4 at 10 rolls (hand tag "10 rolls: 0.4"), 0.2 at 50, swings to 0.207 at 150 and lands on 0.19 at 200 with a small trace line of the readout drawn under it. On "estimate" the trace's settling tail is circled, hand tag "more rolls: steadier". A grey chip, 30 px, "relative frequency: these rolls; probability: the die" stays at the bottom right.

### 4. why the estimates add to 1
> Add the six estimates and you get exactly **one**. But adding them only shows that it happens. Here's why it has to happen. Every roll lands on exactly one face. No roll is counted twice, and none is **missed**. So the six counts add to two hundred, the total number of **rolls**. Divide that total by two hundred, and you get **one**. That works for a complete, one-value-per-trial count, so estimated probabilities from data always add to one.

Visual: on "one" the row "0.14 + 0.175 + 0.155 + 0.19 + 0.17 + 0.17 = 1" writes at 44 px, hand tag "shows it". The axis returns to counts. On the third sentence an `OutcomeDrop`: about twelve face tokens fall one at a time from the die plate (still at the left, 320 px), each into exactly one column, hand tag "each roll: exactly one face". On "missed" the six bars tip over and slide end to end into one horizontal `StackedTotalBar` (1,300 px long), each segment labelled with its count in blue. On "rolls" the total bar's label, 52 px, "28 + 35 + 31 + 38 + 34 + 34 = 200". On "one" (last bold) the bar relabels "200 ÷ 200 = 1" and the right column writes "Σ counts = 200, so ΣP(x) ≈ 200/200 = 1" with a green tick. On the last sentence the tag "shows it" is joined by "explains it" beside the tick.

### 5. what a probability distribution is
> What we've built is a probability distribution. It's the set of values X can take, together with the probability of each **value**. We show it two ways. A table gives the exact numbers we calculate with. A bar graph shows the **shape**. The bars stand apart, because X takes no values in **between**. Every probability must be between zero and one, and together they must add to **one**. Both checks matter. These three numbers add to one, but minus zero point four can't be a probability, so this list isn't a **distribution**.

Visual: the total bar stands back up into the six bars (relative-frequency axis), the table beside them. On "value" a bracket joins the table's x row and P(x) row, hand tag "values with their probabilities". On "shape" the table and graph sit side by side, each tagged ("table: exact numbers", "graph: shape"). On "between" the gaps between bars shade faintly, hand tag "no values between". On "one" two condition chips, 44 px, write under the graph: "0 ≤ P(x) ≤ 1 for every x" and "ΣP(x) = 1". On the last two sentences a contrast panel slides in at the right (600 × 420 px): list "0.7, 0.7, −0.4" with three bars, the third dipping below the axis in red; the sum "= 1" ticks, the first chip crosses for that value, and on "distribution" the list is crossed in red, caption "a probability can't be negative".

### 6. the model, and the hook answered
> Data is one way to get a distribution. A model is the other: reasoning about how the experiment works. If the die is fair, its six faces are equally likely, so each value has probability one sixth, before a single **roll**. So in a question, if you're given counts, you're estimating from data. If you're told how the experiment works, you're using a model. Now compare. The data gave zero point one nine for a four. The model says one sixth, about zero point one six **seven**. That's almost five more fours than a fair die would average. Is that a big gap? Here are three runs of two hundred rolls from a simulated fair **die**. Look how much their bars wobble. Every one of these fair runs has a face further from thirty-three than our four **is**. So these data aren't strong evidence that the die is unfair.

Visual: the contrast panel clears. On "roll" teal model bars rise beside the blue data bars, all to 1/6, and an amber dashed line at 1/6 spans the graph, label 34 px "fair model: P(x) = 1/6". On the next two sentences two chips write at the right: "given counts: estimate from data (≈)" and "told how it works: use a model (=)"; they dim on "compare". Right column, 52 px: "Data: P(X = 4) ≈ 0.19" and, on "seven", "Model: P(X = 4) = 1/6 ≈ 0.167". Next row, 44 px: "38 − 33.3 ≈ 4.7 more fours". On "die" the blue data bars become a dashed outline and a second die plate rolls beside the first, tag "simulated fair die"; three stored fair runs replace each other at about 1.5 s each on the counts axis (author note c), labelled "run A", "run B", "run C", with the 1/6 line (33.3) fixed; hand tag "wobble". On "is" the three runs sit side by side, small (each 520 × 320 px), each with its furthest bar circled and labelled by its distance ("A: 23, off by 10", "B: 20, off by 13", "C: 40, off by 7") against a grey tag "ours: 38, off by 5". On the last sentence the hook's data bars return full size and the "?" chip beside the die is replaced by a green-framed "not strong evidence of an unfair die".

### 7. generating a distribution: three coin tosses
> Often there's no data, just a description, and we generate the distribution ourselves. Toss a fair coin three times, and let X be the number of heads. Each sequence of tosses gives exactly one value of X. Step one, list the values. X can be zero, one, two or **three**. Step two, find each probability. There are eight equally likely sequences, and three of them have exactly one **head**, so P of one is three eighths. Step three, **check**. One eighth, three eighths, three eighths and one eighth are each between zero and one, and they add to one. The graph shows something the table hides. It's **symmetric**, and the middle values are three times as likely as the ends.

Visual: clear change to the g01 board (new case). Task strip, 44 px, "A fair coin is tossed three times. X = number of heads. Find the distribution of X." (site card 06). Equation strip: "1 List the values · 2 Find each probability · 3 Check". Givens card: "fair coin", "3 tosses", "X = number of heads". The painted coin pair (`ma12-coin-heads-v1`, `ma12-coin-tails-v1`, each 260 px) sits top left from the first frame, tag "H" and "T". On the third sentence one sequence "HTH" writes with an arrow to "X = 2", hand tag "one sequence, one value". On "three" the axis writes 0, 1, 2, 3 (teal empty columns, solid axes). On the next sentence the eight sequences write as a column of letter strings (HHH to TTT, author note d); on "head" they slide into columns by their number of heads (`OutcomeSort`: 1, 3, 3, 1), the columns turn into teal bars on the y axis 0 to 4/8, and the `DistributionTable` fills 1/8, 3/8, 3/8, 1/8 in step; a red slip "1/4 each" writes and is crossed, caption "four values, not equally likely". On "check" the two condition chips from scene 5 return and tick, and "1/8 + 3/8 + 3/8 + 1/8 = 8/8 = 1" lands in a green answer frame with the table. On "symmetric" a dashed amber mirror line at x = 1.5 and a hand tag "× 3" between an end bar and a middle bar.

### 8. memory aid
> Here's a way to remember why it all adds to one. One trial, one value. Every trial gives exactly one value of X, so the counts add to the number of trials, and the probabilities add to one. If your probabilities don't add to one, check your list of values, and your counting.

Visual: stage change to the framed `MemoryAidCard` (1,300 × 600 px, double ink frame, hand-font heading "Memory aid"). Left slot: the die plate (240 px) with one token dropping into one of six small columns, then the columns lying end to end as a bar labelled "= 1". Main line, hand font 60 px: "One trial, one value." Key line, 40 px: "So the counts add to n, and ΣP(x) = 1." On the last sentence a small grey line "doesn't add to 1? check the values and the counting". Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. A spinner numbered one to four is spun two hundred and fifty times. Estimate P of X equals two, then explain why the four estimates add to one. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A spinner with four sections, numbered 1 to 4, is spun 250 times. X is the number it lands on. The results are shown in the table. (a) Estimate P(X = 2). (b) Explain why the four estimated probabilities add to 1." Table: x 1, 2, 3, 4; count 55, 70, 60, 65. Picture slot: the painted spinner (`ma12-spinner-base-v1` with `ma12-spinner-pointer-v1`, 300 px) with four equal coded sectors numbered 1 to 4. The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing (no estimates row, no total bar).

### 10. feedback 1 (brief)
> Two came up seventy times out of two hundred and fifty, so P of X equals two is approximately zero point two **eight**. For the reason, don't just add the four estimates. Each spin lands on exactly one number, so the counts add to two hundred and fifty, and dividing by two hundred and fifty gives **one**. Adding the estimates to get one shows it, but it doesn't explain **it**.

Visual: the card shrinks to the top (30 px). `GivensStrip` on the answer side: "250 spins", "count of 2: 70". "70" and "250 times" underlined in the card as they are used. On "eight" a 52 px row "P(X = 2) ≈ 70/250 = 0.28" in a green answer frame. On "one" the row "55 + 70 + 60 + 65 = 250, so ΣP(x) ≈ 250/250 = 1" with the hand tag "each spin: exactly one number", in a second green frame. On "it" a red slip "0.22 + 0.28 + 0.24 + 0.26 = 1, so they add to 1" writes and is crossed, caption "shows it; doesn't explain why". Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. A bag holds two red and two yellow counters, and two are drawn together. Find the probability distribution of X, the number of red counters drawn. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "A bag holds 2 red counters and 2 yellow counters. Two counters are drawn together at random. Let X be the number of red counters drawn. Find the probability distribution of X and show it in a table." Picture slot: the four painted counters (`physics/y12p-counter-red-v1.png` twice and `physics/y12p-counter-yellow-v1.png` twice, 120 px each) inside a dashed coded outline labelled "bag". The full question stays on screen. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing (no list of pairs, no values row).

### 12. feedback 2 (brief)
> X can be zero, one or **two**. Call the counters red one, red two, yellow one and yellow two. There are six possible pairs, all equally **likely**. One pair has no reds, four pairs have one red, and one pair has two reds. So the probabilities are one sixth, four sixths and one sixth, and they add to **one**. One third each is wrong. Three values don't have to be equally **likely**.

Visual: the card shrinks to the top. `GivensStrip`: "2 red, 2 yellow", "drawn together". "2 red", "2 yellow" and "drawn together" underlined in the card as they are used. On "two" the values row 0, 1, 2. On "likely" the six pairs write as a short list "R1R2, R1Y1, R1Y2, R2Y1, R2Y2, Y1Y2" (author note e) with counter icons, then sort into three columns (`OutcomeSort`: 1, 4, 1). On "one" a green-framed table "x: 0, 1, 2; P(x): 1/6, 4/6, 1/6" with "sum 6/6 = 1" ticked, and three teal bars beside it. On "likely" (last bold) a red slip "1/3, 1/3, 1/3" writes and is crossed, caption "three values, not equally likely". Hold about 1 s.

### 13. handoff
> So data give a distribution through relative frequencies, and a model gives it by reasoning about equally likely outcomes. Next, a question. For one fair die, all six bars are the same height. Now tear a page at random off a desk calendar. The date could be anything from the first to the **thirty-first**. Are those dates equally likely too?

Visual: the memory line shows small at the top (30 px), then fades on "Next". Board clears to two panels side by side. Left: the fair die's model distribution, six teal bars at 1/6 on x 1 to 6, the die plate (240 px) above, tag "one fair die". Right: the painted tear-off desk calendar (`ma12-desk-calendar-v1`, 320 px tall, with its blank top page; coded "15" on the page) above empty axes "date" x 1 to 31, y 0 to 0.04; on "thirty-first" the 31 axis values write on left to right and a "?" sits over the empty axes. Chip "Next: when are all values equally likely?". No bar heights on the right. Hold about 2 s. This is s02 Revision 3's opening frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 40 px, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- X: a number decided by a chance outcome. P(X = x) or P(x).
- From data: P(x) ≈ count ÷ number of trials.
- The estimates add to 1: each trial gives one value.
- Distribution: the values of X with their probabilities.
- Check: 0 ≤ P(x) ≤ 1 and ΣP(x) = 1. Graph bars stand apart.

Memory aid (framed card, right half of the notes screen, as in scene 8): *One trial, one value.* Key: *So the counts add to n, and ΣP(x) = 1.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent, no added speech): after the notes hold the board cross-fades (1 s) back to scene 13's frame exactly (the die's six bars at 1/6; the calendar and the empty date axes with "?"; chip "Next: when are all values equally likely?"). This is the final frame and s02's opening frame.

## Teaching checks

- **Does it explain causes?** Why the shape survives the division: every count is divided by the same total (3). Why the estimates add to 1: each trial lands in exactly one value, so the counts add to n (4, 8, feedback 1). Why −0.4 fails: a probability can't be negative (5). Why bars have gaps: X takes no values between (5). Why the model gives 1/6: six equally likely faces (6). Why 38 fours is not strong evidence: three simulated fair dice each wobble further (6). Why P(1) = 3/8 for three coins: three of eight equally likely sequences (7). Why 1/3 each is wrong for the counters: the values come from different numbers of equally likely pairs (feedback 2).
- **Misconceptions addressed:** "a count is a probability" (3); "estimates are exact" (3, crossed); "adding the numbers explains why" (4, feedback 1 crossed); "a list adding to 1 is a distribution" (5); "more fours means unfair" (6); "a variable's values are equally likely" (7 slip; feedback 2 crossed).
- **Visual standard (`../maths-visual-standard.md`), item by item:** 1 the painted die from the first seconds, rolling live, returning in 6, 8 and 13; 2 a new stage or visual idea every 30 to 70 s (stage plan below); 3 `RollSimulator` with live counts and a live relative frequency, the fair-run sequence, `OutcomeSort`; 4 fixed colour roles; 5 large type; 6 hand tags; 7 g01 boards in 3 and 7, framed answers and crossed slips; 8 framed memory card and five short bullets; 9 the bars tipping into one total bar of 200, and the fair runs wobbling more than our die.
- **One idea at a time:** one new term per scene in 2 to 5; the model enters only in 6; one step per sentence in 7.
- **Response opportunity:** two unseen HSC-style tasks with every demand visible, each card with a picture; 10 s each with the invitation to pause; nothing answer-bearing. One crossed mistake each; feedback about 29 s each.
- **Syllabus coverage:** `ci33ef8834` (3, 4, 8; A1; key notes 2, 3); `ci49013884` (2; key note 1); `cicc08703c` (5; key notes 4, 5); `cif1d51f9d` (5, 7; A2; key notes 4, 5).
- **Out of scope by design:** uniformity (s02); expectation, variance and the balance point (s03); unknown constants in P(x); hypothesis tests; continuous variables.

## Practice questions and model answers

**Attempt 1 (scene 9; original wording, HSC style, 2 marks suggested, not an official marking scheme).** "A spinner with four sections, numbered 1 to 4, is spun 250 times. X is the number it lands on. The results are shown in the table (55, 70, 60, 65). (a) Estimate P(X = 2). (b) Explain why the four estimated probabilities add to 1."
Model answer: (a) P(X = 2) ≈ 70/250 = 0.28. (b) Each spin lands on exactly one of the four numbers, so the four counts add to the 250 spins; dividing each count by 250 gives estimates that add to 250/250 = 1. Classic mistake (crossed): "0.22 + 0.28 + 0.24 + 0.26 = 1, so they add to 1".

**Attempt 2 (scene 11; original wording, HSC style, 2 marks suggested).** "A bag holds 2 red counters and 2 yellow counters. Two counters are drawn together at random. Let X be the number of red counters drawn. Find the probability distribution of X and show it in a table."
Model answer: X can be 0, 1 or 2. Label the counters R1, R2, Y1, Y2: the six equally likely pairs are R1R2, R1Y1, R1Y2, R2Y1, R2Y2, Y1Y2. One has no red, four have one red, one has two red. So P(0) = 1/6, P(1) = 4/6 = 2/3, P(2) = 1/6, and they add to 1. Classic mistake (crossed): "1/3, 1/3, 1/3".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Hook counts | 28, 35, 31, 38, 34, 34; total 200 | 1 to 6 |
| Roll replay | relative frequency of 4: 0.4 (10 rolls), 0.24 (25), 0.2 (50), 0.19 (100), 0.207 (150), 0.19 (200) | 1, 3 |
| Estimates | 0.14, 0.175, 0.155, 0.19, 0.17, 0.17; sum 1 | 3, 4 |
| Axes | counts 0 to 50; proportions 0 to 0.25 (= 50/200) | 1, 3, 4 |
| Invalid list | 0.7, 0.7, −0.4; sum 1 | 5 |
| Fair model | P(x) = 1/6 ≈ 0.167; expected fours 33⅓ | 6 |
| Gap | 38 − 33.3 ≈ 4.7 | 6 |
| Simulated runs | A 41, 37, 23, 38, 34, 27; B 20, 40, 36, 29, 33, 42; C 32, 40, 28, 37, 30, 33; furthest faces A 23 (off by 10.3), B 20 (13.3), C 40 (6.7); ours 38 (4.7) | 6 |
| Three coins | 8 sequences; 1/8, 3/8, 3/8, 1/8; symmetric about 1.5; crossed 1/4 each | 7 |
| A1 | counts 55, 70, 60, 65 (sum 250); P(X = 2) ≈ 0.28; other estimates 0.22, 0.24, 0.26 | 9, 10 |
| A2 | six pairs; 1/6, 4/6, 1/6; crossed 1/3 each | 11, 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with Python 3.14 (7 Nov, scratchpad `sims.py`); Codex to re-check.

- 28 + 35 + 31 + 38 + 34 + 34 = 200; each count ÷ 200 gives 0.14, 0.175, 0.155, 0.19, 0.17, 0.17; exact sum 1.
- 1/6 = 0.1667; 200/6 = 33.33; 38 − 33.33 = 4.67.
- Runs A, B, C each sum to 200; largest distances from 33⅓: 10.33, 13.33, 6.67, all above 4.67.
- The stored roll order (author note h) reproduces the checkpoints listed there and ends on the site counts.
- Three coins: heads counts over the 8 sequences are 0 once, 1 three times, 2 three times, 3 once.
- A1: 55 + 70 + 60 + 65 = 250; 70/250 = 0.28; 55/250 = 0.22; 60/250 = 0.24; 65/250 = 0.26.
- A2: 6 pairs from 4 counters; red counts 0 (1 pair), 1 (4 pairs), 2 (1 pair).
- Binomial tail (author only): P(N ≥ 38) for Bin(200, 1/6) = 0.2123.

## Memory aid check

- **"One trial, one value."** Original. Meaning, as said in scene 8: every trial gives exactly one value of X, so the counts add to the number of trials and the probabilities add to 1. Assumptions checked: the listed values cover every possible outcome and no outcome gives two values; for a model, the same holds for equally likely outcomes each giving one value (7, feedback 2). It helps a new case: the explanation demand in A1 is one sentence. Introduced after the cause (4) and the method (7).
- **Considered, not used:** "Divide by the total" (carries no reason for the sum to 1).

## Narration length estimate

Counted 7 Nov with the build parser rules (`### N.` or `### Na.` headings; only lines starting "> " inside the scene, joined with a space, `**` removed; the total is the sum of the scene strings): **5,792 characters**, 14 scene headings (Revision 2: 5,549, confirmed by script). Characters per scene (1 to 14): 466, 484, 674, 429, 508, 796, 658, 275, 176, 367, 178, 368, 338, 75.

At 13.3 characters per second the speech before the notes is about 430 s. Holds: two 10 s countdowns (20 s), the memory-card hold (2 s), two feedback holds (2 s), the handoff hold (2 s), and about 16 s of settling for the roll simulation and its replay (1, 3), the relabel (3), the drop and tipping (4), the three runs (6) and the sort (7); the key-notes scene is 45 s (1,350 frames). Total **about 517 s**, inside the 5,500 to 7,000 character band and under the 570 s cap with about 53 s spare.

Reserve trims if the voiced take runs long: scene 3's "After fifty, it was already near zero point two." (keep the readout); scene 6's "Look how much their bars wobble." (keep the tag). Do not cut below 5,500 characters.

## Scene list and build ids

Lesson key `m-a12s01` (route math-a12-s01). Explainer folder `src/explainer/lessons/math-a12-s01`; build inputs in `docs/production/claude-pm/lessons/math-a12-s01/` (to be created at voicing).

In order (kebab-case; 14 scene headings, all `### N.`): hook-die, random-variable, counts-to-estimates, why-they-add-to-one, distribution-defined, model-and-hook, three-coins, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (seconds from the estimate):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 39 s | 1 | f15's chart, then the painted die rolling 200 times into the bars |
| 39 to 75 s | 2 | The top face and the notation over the bars |
| 75 to 130 s | 3 | g01 board: counts to estimates, the relabel, the replayed estimate |
| 130 to 164 s | 4 | Roll tokens, then the bars tipping into one total bar |
| 164 to 203 s | 5 | Table and graph side by side; the invalid panel |
| 203 to 266 s | 6 | The fair model, then three simulated fair runs |
| 266 to 318 s | 7 | g01 board: three coins sorted into bars |
| 318 to 341 s | 8 | Framed memory card |
| 341 to 445 s | 9 to 12 | Question cards with pictures and countdowns, then feedback with givens strips and crossed slips |
| 445 to 472 s | 13 | Die and calendar handoff |
| 472 to 517 s | 14 | Key notes with the framed card, then a silent return to scene 13's frame |

Per-scene motion (schema 4): all scenes `motionRole: "explain"` except attempt-1, attempt-2 (`hold`) and key-notes (`hold`). Transitions (`pickTransition`): f15's last frame continues into scene 1 (camera continue; the die arrives); 1 to 2 to 3 camera continue (same bars); 3 to 4 to 5 camera continue; 5 to 6 camera continue (same axes); 6 to 7 clear change (new case); 7 to 8 clear change to the card; attempts and feedback: the card shrinks to the top; 12 to 13 board clear; 13 to 14 fade to the notes board, then a silent return to scene 13's frame.

Holds: attempt-1, attempt-2 (10 s countdown after the speech, the ring shown full from "Pause here to answer."). key-notes is 45 s (1,350 frames in `config.ts`). Review evidence paths: `learning_review` = `checks/m-a12s01-rev3-learning-review.md`, `science_check` = `checks/m-a12s01-rev3-maths-check.md`.

## Assets

Inspected before choosing (7 Nov, `public/assets`, read only, actual appearance):
- `biology/m5x-die-v1.png` (2048 × 2048, a white die with black pips in three-quarter view, faces showing 2 and 3; its top face is painted blank): reused for the tumbling die and the badges. Its blank top face cannot show "the number on the top face", so a set of six top views is commissioned.
- `physics/y12p-counter-red-v1.png` and `y12p-counter-yellow-v1.png` (flat round counters, top view): reused for A2 (the counters are now red and yellow).
- `biology/y11-coins-v1.png` (a pile of gold coins on a black backdrop with a glow): not usable (backdrop, no heads or tails).
- `biology/m5x-bead-bag-v1.png` (cloth bag with ten loose beads): not used, because its ten beads contradict A2's four counters.
- No spinner or calendar plate exists in any course.

Need (painted, new; see the Codex asset brief): `ma12-die-top-1-v1` to `ma12-die-top-6-v1`, `ma12-coin-heads-v1`, `ma12-coin-tails-v1`, `ma12-spinner-base-v1`, `ma12-spinner-pointer-v1`, and `ma12-desk-calendar-v1` (also s02's anchor).

Coded (studio kit): bars, axes, tables, tokens, the total bar, the sort, the readouts, the spinner's sectors and numbers, working boards, question cards, the countdown, hand tags, the framed card and key notes.

### Studio kit use and additions

Uses: `MATH_ROLES` and `Role`, `HandTag`, `MarkSpan`, `PlateImg`, `LiveReadoutBoard`, `TaskStrip`, `EquationStrip`, `GivensCard`, `WorkingRows`, `AnswerFrame`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard` with its picture slot and `GivensStrip`.

Additions (no probability part exists in `src/explainer/math/studio/` yet; these serve s01 to s03 and later):
1. **`ProbabilityBars`** (studio version): separate bars at listed x values with gaps; modes counts and probability with an animated relabel that keeps bar heights (`scaleTo`); `ghost` outlines; `runs` (stored bar sets replacing each other); `referenceLines`; `invalid` (a red bar below the axis); `mirrorLine`; role colours per set. Check: the relabel keeps every bar's pixel height within 0.5 px; labels come from the same data as the heights.
2. **`RollSimulator`**: a plate sprite cycling top views with a short tumble, a roll counter, tokens dropping into columns and a linked `ProbabilityBars` growing live from a stored roll order; optional live readout of one value's relative frequency with a trace line. Check: at every frame the bars equal the counts of the rolls shown so far, and the readout equals that count ÷ rolls.
3. **`DistributionTable`**: rows x, count and P(x) aligned with the bars, per-cell cues, "≈" prefix, a sum cell that recomputes and throws on disagreement.
4. **`StackedTotalBar`**: bars tip and slide end to end into one labelled bar, relabel to 1, and stand back up; equal-segment mode for s02.
5. **`OutcomeDrop`** and **`OutcomeSort`**: tokens fall into one column each; outcome strings slide into columns by value and become bars (checks: 1, 3, 3, 1 and 1, 4, 1).
6. **Spinner sectors** over `ma12-spinner-base-v1` from its sidecar centre and radius (equal sectors, coded numbers, tinting by group; the pointer pivots from its sidecar point).

## Codex asset brief (Maths A12 S01, a board-game die)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a12-s01.md`, draft route entry math-a12-s01. Paint after the learning review and maths check pass and root gives the go-ahead. Save to `public/assets/maths/`. Every plate: **transparent PNG with a true alpha channel** and clean edges with no coloured fringe or halo (check on a black and a white background); ink and watercolour in the house style, matched in line weight and finish to `biology/m5x-die-v1.png`; at least 8 per cent clear margin; no text, labels, letters, numbers, scale marks, brand names, people, hands, faces, backdrop, glow or ground shadow, and no casino or gambling styling. Never stretch to fit; keep the native aspect ratio.

1. **Die top views (set of six), each 1200 × 1200 px:** `ma12-die-top-1-v1.png` to `ma12-die-top-6-v1.png`. The same white die with black pips as `biology/m5x-die-v1.png`, seen from directly above with a slight tilt so one top face fills most of the view and a sliver of two side faces shows. Each file shows a different top face: 1 to 6 pips in the standard layouts. All six files share identical framing, size and lighting, so code can cut between them as a tumbling die. Opposite faces add to 7 (the side slivers must agree with this).
2. **Coins (pair), each 900 × 900 px:** `ma12-coin-heads-v1.png` and `ma12-coin-tails-v1.png`. One plain generic silver-coloured coin, face on: heads face a simple embossed star, tails face a simple embossed laurel wreath. No real currency, monarch, text or numerals. Identical rim, size and lighting in both.
3. **Spinner (two layers), 1400 × 1400 px each:** `ma12-spinner-base-v1.png`, a board-game spinner: a round plastic base with a **blank, flat white disc** (so sectors and numbers are coded on top) and a short centre pin; `ma12-spinner-pointer-v1.png`, its arrow-shaped pointer alone on a transparent canvas of the same size, positioned so that it sits correctly over the pin. Codex reports in a sidecar JSON for each (`ma12-spinner-base-v1.json`: disc centre and radius in px; `ma12-spinner-pointer-v1.json`: pivot point in px).
4. **Desk calendar, 1400 × 1600 px:** `ma12-desk-calendar-v1.png`, a small tear-off desk calendar pad on a simple angled card stand, front view at slight elevation, with a thick block of pages and the top page **blank** (white, no printed numbers, no month name), and a few torn page stubs along the binding at the top. Codex reports the top page's blank rectangle in px in `ma12-desk-calendar-v1.json` (code writes the date on it). Shared with s02.

Report inspection on the paper background (`#f6f1e7`) at 300 px and 600 px, the alpha check, a test cut through the six die top views at 8 frames per view, the coded sectors registered on the spinner disc, and the calendar's page rectangle. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma12-s01-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and the values in the narration, screen text, attempts and key notes against the "Numbers used" table.
2. Confirm the stored roll order (author note h) ends exactly on the site counts and reproduces the spoken readouts (0.4 after 10 rolls; near 0.2 after 50).
3. Confirm the relative-frequency argument in scene 4 and key note 3 is stated as a reason and is true for any frequency table.
4. Confirm the scope of every learner-visible general claim: estimates written with ≈; both checks stated wherever "distribution" is defined; "more rolls usually give a better estimate" scoped with "usually"; the hook conclusion is "not strong evidence", with no test procedure claimed.
5. Confirm the three simulated runs each sum to 200, are labelled as simulated, and each has a face further from 33⅓ than 38.
6. Confirm both attempt questions carry every demand and condition, that each card has its picture, and that neither card shows an estimate, a list of pairs or a values row.
7. Confirm the opening equals f15's handoff frame unchanged, and scene 13's frame equals s02 Revision 3's opening frame.
8. Confirm the four syllabus quotes match the crosswalk JSON exactly and no site module label appears in learner copy or metadata.
9. Confirm no em dash (U+2014) anywhere in this file, Australian spelling, and the narration counts by script with every bold cue quoted in its scene's Visual in spoken order.
10. Confirm the plate requests contain no people, hands, real currency, text or gambling styling.

## YouTube metadata (draft)

Title: Discrete Probability Distributions from Data and Models | Year 12 Maths Advanced

(Title length: 82 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year12/random-variables/lesson05.sa.html

A board-game die is rolled 200 times and a four comes up 38 times. Is it fair? Watch the rolls land, meet random variables and the notation P(X = x), turn counts into relative frequencies, and see why the estimates must add to 1 (every roll lands on exactly one face). Define a discrete probability distribution with its two checks, compare the data with the fair-die model, and watch how much simulated fair dice wobble. Then generate a distribution from a description (three coin tosses) and show it as a table and a bar graph. Two exam-style questions at the end.

Mathematics Advanced 11-12 (2024 syllabus), Year 12, random variables.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Use the relative frequencies of discrete random variable datasets to estimate the probabilities that the random variable X takes each of its values, and explain why these estimated probabilities add to 1"
"Denote the probability that the discrete random variable X takes the value x by P(X=x), or by P(x) if the discrete random variable X is understood"
"Define a discrete probability distribution to be the set of values x taken by a discrete random variable X, together with the probabilities P(x) that x is the outcome of the experiment"
"Generate a probability distribution for a given discrete random variable and represent the probability distribution in graphical and tabular form"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-12/fa4579cc54

Builds on: Year 11 probability (equally likely outcomes, relative frequency). Next: When is a distribution uniform?

#Year12Maths #MathsAdvanced #Probability #HSCScience

## Open decisions

- **1. Anchor choice (root).** The die stays the anchor because f15's handoff frame (unchanged) and the site's data are the die. A food truck's queue or goals per game would need f15's handoff and the site's numbers changed. Root to confirm.
- **2. The ≈ crossed slip in scene 3 (learning review).** "P(X = 4) = 0.19" is crossed only because it overstates certainty (site trap 04). Confirm the caption "it's an estimate: use ≈" does not suggest 0.19 is the wrong number.
- **3. Route entry (root).** The draft route entry in Decisions is a provisional input.
- **4. Site link form.** `.sa.html`, as root decision 15.

## Review notes

- Revision 3 (7 Nov) has had no independent review. Next: student learning review (trace from Year 11 probability only; check that the live rolls make "data" concrete before any notation; that the replayed readout shows an estimate steadying without claiming it must; that the one-trial-one-value argument is a reason and not a sum; that the −0.4 contrast lands; that the simulated runs are clearly labelled as simulated; that the cards give nothing away), then the Codex maths check and error check, then voicing on the Google voice and a build on the studio kit to grade A.
- The rolls, the relabel, the tipping bars, the run sequence and the sort carry the explanation; judge them at playback speed in the voiced preview, not from stills. Every bar, cell and readout must come from the same data.

## Revision 2 (4 November 2026, brief 162 repairs)

Scene 6's binomial-tail sentence and its 0.21 readout replaced by the runs sentence (root decision 54); scene 4's sum-to-one claim scoped to a complete, one-value-per-trial count. Narration then 5,549 characters (stated).

## Revision 3 (7 Nov 2026)

Redesign to `../maths-visual-standard.md` on the d01 Revision 6 pattern, with an everyday anchor (owner rule, 7 Nov). Scope, boundaries, the site's numbers, the cause chain, the memory aid and A1 are unchanged.

- **Anchor and why:** a board-game die rolled 200 times, painted and rolling live from the first seconds. f15's handoff frame and the site's data fix the die, and it carries every idea of the lesson without any science. It returns in the fair-model comparison (6), the memory card (8) and the handoff (13).
- **Simulations:** `RollSimulator` (the die tumbles while the bars grow live to the site counts, with a live relative-frequency readout that is replayed in scene 3); three simulated fair runs replacing each other (6); `OutcomeSort` (7, feedback 2).
- **Colour roles:** data blue; model teal; the value asked about and reference lines amber; answer green; mistake and invalid red; ink tables and algebra.
- **Plates:** reused `biology/m5x-die-v1.png`, `physics/y12p-counter-red-v1.png`, `physics/y12p-counter-yellow-v1.png`; new `ma12-die-top-1-v1` to `-6-v1`, `ma12-coin-heads-v1`, `ma12-coin-tails-v1`, `ma12-spinner-base-v1`, `ma12-spinner-pointer-v1` and `ma12-desk-calendar-v1` (brief above; the calendar is shared with s02).
- **Narration changes (not voiced):** scene 1 (the board-game die and the live rolls), scene 3 (the replayed estimate), scenes 11 and 12 (yellow counters), scene 13 (the calendar handoff). Other scenes keep their Revision 2 text.
- **Counts:** 5,549 (Revision 2; the recount by script agrees) → 5,792 characters; about 518 s with the old 60 s notes hold → about 517 s with holds (notes 45 s).
- **Key notes:** five one-line bullets (were four long notes) beside the framed card.
- **Joins:** opens on f15's handoff frame (unchanged); ends on the die and calendar frame, which s02 Revision 3 opens on.
- **Kit additions:** studio `ProbabilityBars`, `RollSimulator`, `DistributionTable`, `StackedTotalBar`, `OutcomeDrop`, `OutcomeSort` and spinner sectors.
