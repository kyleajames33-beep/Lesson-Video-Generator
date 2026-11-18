# math-s12-p04: How do probability trees and P(A and B) = P(A) x P(B) handle multistage events?

Maths Standard research pack (Year 12, Relative frequency and probability), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Relative frequency and probability):

- `cice3fd0ea`: Construct and use arrays, tree diagrams and probability trees to determine the outcomes and probabilities for multistage events [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fae778ced4). Site coverage: covered. Shared with p03; this video owns probability trees and three-stage events.
- `ci90a4b4a6`: Determine the probabilities of outcomes for multistage events using P(A and B) = P(A) × P(B) [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fae778ced4). Site coverage: covered; the site also writes P(B|A), which the Standard course does not use (MS-66).

Standard 1: no matching point (Standard 1 stops at equally likely two-stage events, p03).

These are CMS codenames, not published content-point codes. The outline's learner question writes "x" for the multiplication sign; on screen use ×.

**Course:** Standard 2 only. Playlist order 72.

**Entry knowledge:** math-s12-p03 (`cice3fd0ea`): arrays and tree diagrams listing outcomes, with replacement. math-s12-p02: favourable ÷ total and the complement.

**Prior video:** math-s12-p03 (Standard 2 route).

**Start:** p03's Standard 2 panel (proposed): the 3 blue and 2 red tree with its four paths (BB, BR, RB, RR) and "?" on each branch: "can we write a probability on each branch?".

**Stop:** A probability tree: the probability written on each branch; the branches leaving one point add to 1; the probability of one path is the product of its branch probabilities, P(A and B) = P(A) × P(B); an event made of several paths: add those paths; all the paths together add to 1 (the check); "at least one" by the complement; without replacement: the second-stage branches change because the bag has changed (said in words: "after a blue is taken, 4 are left: 2 blue and 2 red"); three stages (three coins: 8 paths); unequal everyday chances (a bus 0.8 on time, then a train 0.9 on time). Ends on the frame shared with p03's Standard 1 panel.

**Next:** math-s12-p05.

## 2. Site order, sections and worked examples

Read-only source: [relative-frequency-and-probability/lesson02.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/relative-frequency-and-probability/lesson02.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `f2d0f17211bb6d5de203f1a688928e6c50b670045821a64fc953d8291f1f762d`. Sections used: `orient-and-prepare` (card 02 formulas), `connect-method` (card 06 three-stage example), `apply-method` (card 07), `work-examples` (`we-2`, `we-3`), `independent-practice` (SA 2, SA 3), `retrieve-and-finish` (revisit).

### Source lesson02, cards 02 and 07

Card 02: "The probability of any path through a probability tree is the product of its branch probabilities: $P(A \text{ and } B) = P(A) \times P(B)$." "Check your tree: The probabilities along any complete set of branches must sum to 1." Card 07: "Labelling branches: Write the probability as a fraction on each branch. From any single node, branch probabilities must sum to 1." "Adding paths: If the event can happen by multiple paths, add the probabilities of all those paths. E.g. P(exactly one red) = P(BR) + P(RB)." "WITHOUT replacement: Bag: 3 B, 2 R. ... Stage 2 IF first was B: 4 marbles left (2B, 2R) → $P(B) = 2/4$, $P(R) = 2/4$." The same card's lead, summary and pause prompt write "P(A and B) = P(A) × P(B|A)" (MS-66).

### Source lesson02, `we-2` and `we-3`

`we-2`: "A bag contains 3 blue and 2 red marbles. A marble is drawn, its colour noted, then REPLACED, and a second marble drawn. (a) Construct a probability tree. (b) Find $P(\text{both same colour})$. (c) Find $P(\text{at least one blue})$." → "$BB = \frac{9}{25}$, $BR = \frac{6}{25}$, $RB = \frac{6}{25}$, $RR = \frac{4}{25}$", "$\frac{13}{25}$", "$1 - P(RR) = \frac{21}{25}$". `we-3`: "A bag contains 2 red and 3 blue marbles. Two marbles are drawn WITHOUT replacement." → "$RR = \frac{1}{10}$, $RB = \frac{3}{10}$, $BR = \frac{3}{10}$, $BB = \frac{3}{10}$", "$P(\text{one of each}) = \frac{3}{5}$".

### Source lesson02, card 06, SA 2, SA 3

Card 06: "Flip a coin three times: $2 \times 2 \times 2 = 8$ outcomes ... HHH, HHT, HTH, HTT, THH, THT, TTH, TTT." SA 2: "4 green and 1 yellow marble ... REPLACED" → "$GG = 16/25$ ... $P(\text{at least one Y}) = 9/25$". SA 3: "3 red and 2 white balls. Two balls are drawn WITHOUT replacement" → "$P(\text{one each}) = 3/5$", two reds "$3/10 < 3/5$".

## 3. Recalculation

- `we-2` (with replacement): 9/25, 6/25, 6/25, 4/25 (sum 1); same colour 13/25; at least one blue 21/25.
- `we-3` (without replacement): 1/10, 3/10, 3/10, 3/10 (sum 1); one of each 3/5.
- SA 2: 16/25, 4/25, 4/25, 1/25; at least one yellow 9/25. SA 3: one each 3/5; two reds 3/10.
- Three coins: 8 paths, each 1/8.
- Anchors: bus 0.8 and train 0.9: both on time 0.72; at least one late 0.28. Free throws 0.7 each: both 0.49, at least one 0.91, exactly one 0.42.
- Question 1: shooter 0.8 each shot: exactly one 2 × 0.8 × 0.2 = 0.32; both miss 0.04. Question 2: 10 chargers, 3 faulty, two without replacement: both faulty 3/10 × 2/9 = 1/15; at least one faulty 1 − 7/10 × 6/9 = 8/15.

Values checked with Python `fractions` (`work/brief-standard-bp/recalc.py`). All site answers match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- Adding along a path and multiplying across paths (the reverse of the rule).
- Using the same second-stage probabilities without replacement.
- Forgetting one order for "one of each" (only RB, not BR).
- Branch probabilities from one point that do not add to 1.
- "At least one" worked path by path when 1 − P(none) is one step.
- Assuming two everyday events are unaffected by each other without saying so (the bus and train are treated as separate; say it is an assumption).

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- p03's tree gains fractions on its branches; each path's product writes at its tip; the four tips add to a "1" stamp.
- A path traced with a glowing marker while its branch probabilities multiply; then two paths light together and their tips add (one of each colour).
- Without replacement: the bag animates (one blue leaves), the second-stage branches rewrite from 3/5 to 2/4.
- Three coins: a three-layer tree, 8 tips, each 1/8.
- Commute: a bus then a train (coded icons or the existing bus plate), 0.8 and 0.9 on the branches, 0.72 at the "both on time" tip, and the complement 0.28 for "at least one late".
- Final frame (shared with p03's Standard 1 panel, so p05 has one opening): a coin and a tally card "10 flips: 7 heads": "is this coin unfair?".

Advanced reuse (visual parts only): `ProbabilityTree` (a11-prob-parts.tsx: branches growing by stage, products at the tips, path lighting, a summed event row, exact fractions via `fracProduct`, `fracSum`). Plates: `ma11-counter-bag-v1.png` (inspect); `ma12-bus-side-v1.png` (Advanced s07's bus; a plain object here, about punctuality, not waiting times); a train is coded; `ma12-coin-*`. Kit needs: none new; a "bag changes" token animation for without replacement (small).

## 6. Two original candidate practice questions

### Question 1

A netball shooter scores each shot with probability 0.8, and each shot is independent of the others. She takes two shots. (a) Draw a probability tree. (b) Find the probability that she scores exactly one goal. (c) Find the probability that she scores at least one goal.

**Worked answer:** (a) First shot: score 0.8, miss 0.2; second shot from each tip: score 0.8, miss 0.2. (b) Score then miss 0.8 × 0.2 = 0.16, miss then score 0.2 × 0.8 = 0.16; total 0.32. (c) 1 − P(miss, miss) = 1 − 0.2 × 0.2 = 0.96.

### Question 2

A box holds 10 phone chargers, 3 of which are faulty. Two chargers are taken at random, one after the other, without replacement. (a) Draw a probability tree. (b) Find the probability that both are faulty. (c) Find the probability that at least one is faulty.

**Worked answer:** (a) First: faulty 3/10, working 7/10; second after a faulty one: faulty 2/9, working 7/9; after a working one: faulty 3/9, working 6/9. (b) 3/10 × 2/9 = 6/90 = 1/15. (c) 1 − 7/10 × 6/9 = 1 − 42/90 = 48/90 = 8/15.

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1 (b): "0.16", crossed, "two orders: add both paths"; for Question 2 (b): "3/10 × 3/10", crossed, "one faulty charger is gone: 2/9").

## 7. Everyday anchors

- **A bus then a train to school:** both on time 0.72, at least one late 0.28 (commuting; invented; the separate-events assumption said aloud).
- **Two free throws or two netball shots:** exactly one, at least one (sport; Question 1, invented).
- **Faulty phone chargers taken without replacement:** a box that changes after the first pick (phones and shopping; Question 2, invented).

Also the site's marble trees. Repeat check (grepped 19 November 2026): Advanced s06 uses traffic lights for a tree and s08 uses two alarms for independence (not reused); "charger" appears in r13 and r14 only as an electricity cost; "free throw" has no hits; netball appears in other maths designs as shapes and rates, not shots. Claude picks; none is required. Objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-standard.md`, section 10: MS-66 (P(B|A) notation; the misplaced "covered in Lesson 2").

Decisions for Claude:

- **No conditional notation:** multiply the numbers on the branches; describe the changed second stage in words. P(A and B) = P(A) × P(B) is the formula on screen, with "the second branch already allows for what happened first" said once for without replacement.
- **Independence as an assumption:** say "we assume the shots do not affect each other" when multiplying everyday chances.
- **Final frame shared with p03's Standard 1 panel.**
- **Pace: watch.** With and without replacement plus three stages is full; three coins can be a 20-second aside.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
