# math-s12-p03: How do arrays and tree diagrams list the outcomes of a two-stage event?

Maths Standard research pack (Year 12, Relative frequency and probability), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Relative frequency and probability):

- `cice3fd0ea`: Construct and use arrays, tree diagrams and probability trees to determine the outcomes and probabilities for multistage events [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fae778ced4). Site coverage: covered. Shared with p04: this video owns arrays and tree diagrams (listing outcomes); p04 owns probability trees (probabilities on branches) and three stages.

Standard 1 (Year 12, Relative frequency and probability):

- `ci381dd4c8`: Represent equally likely outcomes using arrays and tree diagrams to solve problems, involving replacement where applicable, in two-stage events [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa473a4513). Covered (Standard 2 lesson).

These are CMS codenames, not published content-point codes. **Standard 1 is limited to equally likely outcomes in two-stage events**, with replacement where it applies; it has no probability trees and no P(A and B) = P(A) × P(B).

**Course:** Standard 1 and Standard 2. Playlist order 71. Two-route final frame: Standard 2 to p04, Standard 1 to p05.

**Entry knowledge:** math-s12-p02 (`ci6224eb8c`, `ci566abb19`; S1 `ci7cb75229`, `ciefced297`): favourable ÷ total for equally likely outcomes, and the complement. math-s12-p01: counting outcomes by multiplying.

**Prior video:** math-s12-p02.

**Start:** p02's final frame (proposed): a school canteen's lunch-deal board, 3 mains and 4 drinks, one of each picked at random: "how many different lunches?".

**Stop:** A two-stage event (one thing, then another); an array: one stage's outcomes across the top, the other's down the side, every cell one combined outcome, n(S) = rows × columns; a tree diagram: one branch for each first-stage outcome, then branches from each tip for the second stage, every path from left to right one outcome; with replacement: the second draw starts from the full set again (a bag of 3 blue and 2 red, each marble lettered, gives 5 × 5 = 25 equally likely ordered pairs); probability by counting the cells or paths that fit, ÷ the total; "and", "or" and "at least one" read off the array. Standard 1 stops here. Probability trees with branch probabilities and P(A and B) = P(A) × P(B) are p04 (Standard 2). Two-route final frame.

**Next:** math-s12-p04 (Standard 2); math-s12-p05 (Standard 1).

## 2. Site order, sections and worked examples

Read-only source: [relative-frequency-and-probability/lesson02.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/relative-frequency-and-probability/lesson02.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `f2d0f17211bb6d5de203f1a688928e6c50b670045821a64fc953d8291f1f762d`. Sections used: `orient-and-prepare` (card 01 hook, card 02), `build-foundation` (card 05, quick check), `connect-method` (card 06), `work-examples` (`we-1`, `we-2` (a) as a listing), `independent-practice` (SA 1), `retrieve-and-finish` (revisit).

### Source lesson02, cards 01, 02 and 05

Card 01: "A bag has 3 blue and 2 red marbles. You draw one marble, replace it, and draw again. ... How many different (colour, colour) combinations are possible? Are all these combinations equally likely?" Card 02: "Replacement matters: With replacement, probabilities stay the same on the second draw." "An array (grid) is fastest for two stages. A tree diagram is more flexible". Card 05: "Example, die and coin: Roll a die (columns 1–6) and flip a coin (rows H, T). The array is 2 × 6 = 12 cells". "Event 'head and odd': cells (H,1), (H,3), (H,5) → $n(E) = 3$, $P = 3/12 = 1/4$." Quick check: "4 coloured buttons ... and a fair coin is flipped" → "C, 8 (4 × 2)".

### Source lesson02, card 06 and the revisit

Card 06: "A tree diagram starts from a single point and branches at each stage. Every possible sequence of outcomes is one complete path from left to right." "With replacement example: Bag: 3 blue (B), 2 red (R). Draw twice WITH replacement. ... Four paths: BB, BR, RB, RR." Revisit: "All four combinations are NOT equally likely, BB has probability 9/25 while RR has 4/25."

### Source lesson02, `we-1` and SA 1

`we-1`: "A fair six-sided die is rolled and a fair coin is flipped. (a) Draw an array ... (b) Find $P(\text{head and even number})$. (c) Find $P(\text{tail or number less than 3})$ using the array." → "$n(S) = 12$", "$3/12 = 1/4$", "$n = 6 + 4 - 2 = 8$, $P = 8/12 = 2/3$" ("Avoid double-counting the overlap."). SA 1: "(b) Find $P(\text{a number greater than 4 and heads})$. (c) Find $P(\text{tails})$" → "$2/12 = 1/6$", "$6/12 = 1/2$".

## 3. Recalculation

- Die and coin: n(S) = 12; P(head and even) = 3/12 = 1/4; P(head and odd) = 1/4; P(tail or less than 3) = (6 + 4 − 2)/12 = 8/12 = 2/3; P(greater than 4 and head) = 2/12 = 1/6; P(tail) = 1/2.
- Buttons and coin: 4 × 2 = 8.
- 3 blue and 2 red, with replacement, as 25 lettered pairs (B1 to B3, R1, R2): BB 9 of 25, BR 6, RB 6, RR 4; same colour 13/25; at least one blue 1 − 4/25 = 21/25. The four colour paths are not equally likely; the 25 lettered pairs are (this is the Standard 1 route).
- Lunch deal: 3 × 4 = 12.
- Question 1: spinners 1 to 3 and 1 to 4: 12 outcomes; sum 5 in (1, 4), (2, 3), (3, 2): 3/12 = 1/4; both odd (1 or 3 with 1 or 3): 4/12 = 1/3. Question 2: 2 red and 3 white counters, with replacement: 25 pairs; different colours 6 + 6 = 12, so 12/25; both white 9/25.

Values checked with Python `fractions` and a full listing (`work/brief-standard-bp/recalc.py`). All site answers match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- Treating BB, BR, RB and RR as equally likely (they are not; the 25 lettered pairs are).
- Counting (H, 2) and (2, H) as different when the stages are fixed (die first, coin second), or forgetting BR and RB are different orders.
- Adding the stages' outcomes instead of multiplying (4 + 2 = 6 instead of 8).
- Double-counting overlap cells for "or" (the site's 6 + 4 − 2).
- Missing a branch in a tree (each first-stage tip needs every second-stage branch).

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- The lunch-deal board becoming a 3 × 4 array, each cell a tray icon (coded), with a count "12".
- The die and coin array (the site's `we-1`), cells lighting for "head and even", then for "tail or less than 3" with the two overlap cells pulsing once.
- The same 12 outcomes as a tree: 6 branches then 2 from each tip, paths drawing left to right; the tree and the array side by side ("same outcomes, two pictures").
- With replacement: five lettered marbles; one is drawn, a copy shown, and it drops back into the bag before the second draw; a 5 × 5 array of lettered pairs with the BB block (9 cells) and RR block (4 cells) shaded.
- Two-route final frame (ruling 38 pattern): left "Standard 2 next: a probability on every branch" (the 3 blue and 2 red tree with four paths and "?" on each branch; p04's opening); right "Standard 1 next: what does real data say?" (a coin and a tally card "10 flips: 7 heads", "is this coin unfair?"; p05's opening, which p04's final frame repeats).

Advanced reuse (visual parts only): `OutcomeArray` (a11-prob-parts.tsx: cells, predicate lighting, `unionLights`, `countCells`) and `ProbabilityTree` (branches by stage, path lighting; branch labels off for Standard 1); `OutcomeGrid` (prob-parts.tsx). Plates: `ma12-die-*`, `ma12-coin-heads-v1.png` and `-tails`, `ma11-counter-bag-v1.png` (inspect), `ma12-spinner-base-v1.png` (Advanced s10's spinner plate; reuse as a plain spinner for Question 1 only). Kit needs: none new (OutcomeArray and ProbabilityTree cover it); a lettered-marble token style.

## 6. Two original candidate practice questions

### Question 1

Spinner A has three equal sections numbered 1, 2 and 3. Spinner B has four equal sections numbered 1, 2, 3 and 4. Both are spun. (a) Draw an array showing all the outcomes. How many are there? (b) Find the probability that the two numbers add to 5. (c) Find the probability that both numbers are odd.

**Worked answer:** (a) A 3 by 4 array: 12 outcomes. (b) (1, 4), (2, 3), (3, 2): 3/12 = 1/4. (c) (1, 1), (1, 3), (3, 1), (3, 3): 4/12 = 1/3.

### Question 2

A bag holds 2 red counters and 3 white counters. A counter is taken out, its colour noted, and it is put back. Then a second counter is taken. (a) Draw a tree diagram or an array to show the possible outcomes. (b) Find the probability that the two counters are different colours.

**Worked answer:** (a) Label the counters R1, R2, W1, W2, W3; with replacement there are 5 × 5 = 25 equally likely ordered pairs (a tree with 5 branches, then 5 from each tip, or a 5 by 5 array). (b) Red then white: 2 × 3 = 6; white then red: 3 × 2 = 6; 12/25.

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1 (a): "3 + 4 = 7", crossed, "every number on A with every number on B: 3 × 4"; for Question 2 (b): "2/4: RW and WR out of RR, RW, WR, WW", crossed, "those four are not equally likely").

## 7. Everyday anchors

- **A school canteen lunch deal:** 3 mains and 4 drinks as an array (school; carried from p02's final frame).
- **Two spinners at a school maths fair** (no stake, no prize): a sum array (school; Question 1).
- **A counter bag drawn with replacement:** the site's marbles as lettered counters (neutral object; Question 2).

Also the site's die and coin. Repeat check (grepped 19 November 2026): Advanced s06 uses two dice for an array and traffic lights for a tree (not reused); "lunch deal" has no hits; the spinner plate belongs to Advanced s10's homemade-spinner anchor, so it is a plain object here. Claude picks; none is required. Objects, never people. No gambling (ruling 6): spinners and counters carry no prizes.

## 8. Site corrections and decisions for Claude

No new site error in the parts used. MS-66 (P(B|A) and the misplaced "covered in Lesson 2" reference) affects p04 and p07, not this video.

Decisions for Claude:

- **Equally likely outcomes only** in this video, so Standard 1 is fully served: with replacement, letter the marbles (25 equally likely pairs) instead of writing 3/5 on branches. Branch probabilities wait for p04.
- **"Or" on an array:** the site's `we-1` (c) overlap count is fine on an array (count the lit cells once); no formula.
- **Two-route final frame** as section 5; p04's final frame repeats the right panel so p05 has one opening.
- **Pace: watch.** Array, tree and replacement fit about 8 minutes; drop SA 1 to an attempt if long.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
