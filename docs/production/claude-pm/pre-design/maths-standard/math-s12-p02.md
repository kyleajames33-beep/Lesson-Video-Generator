# math-s12-p02: How do we find a probability from equally likely outcomes, and the chance it does not happen?

Maths Standard research pack (Year 12, Relative frequency and probability), 19 November 2026, using the methods of brief 243. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience (Standard 2 style), not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

Standard 2 (Year 12, Relative frequency and probability):

- `ci6224eb8c`: Express the probability of an event that has a finite number of equally likely outcomes, as P(event) = (number of favourable outcomes)/(total number of outcomes) [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fae778ced4). Site coverage: covered.
- `ci566abb19`: Apply P(an event does not occur) = 1 - P(the event does occur) to calculate the probability of the complement of an event [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/fae778ced4). Site coverage: covered.

Standard 1 (Year 12, Relative frequency and probability):

- `ci7cb75229`: Express the probability of an event that has a finite number of equally likely outcomes, as P(event) = (number of favourable outcomes)/(total number of outcomes) [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa473a4513).
- `ciefced297`: Apply P(an event does not occur) = 1 - P(the event does occur) to calculate the probability of the complement of an event [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa473a4513).

These are CMS codenames, not published content-point codes. The official HTML sets the formula as a stacked fraction; the text above is the crosswalk's linear form. Typeset from `sourceHtml` (route inputs 6) in descriptions and on screen.

**Course:** Standard 1 and Standard 2. Playlist order 70.

**Entry knowledge:** math-s12-p01 (`ci2b76fece`, `cibe388b4c`, `ci035d42a7`; S1 `ci5fa76f76`, `ci756e932d`, `ci69aa1698`): the 0 to 1 scale, the three forms, the sample space, counting outcomes.

**Prior video:** math-s12-p01.

**Start:** p01's final frame (proposed): the site's marble bag opened into ten marbles in a row (3 red, 5 blue, 2 yellow): "how likely is blue?".

**Stop:** For a finite number of equally likely outcomes, P(event) = number of favourable outcomes ÷ total number of outcomes; check "equally likely" first (each of the ten marbles is equally likely; the three colours are not, so P(blue) is not 1/3); simplify and give the form asked for; impossible (a green marble, 0) and certain events; the complement: "not E" is every outcome not in E, and P(not E) = 1 − P(E); use the complement when the "not" side is easier to count, or when the question says "not"; check P(E) + P(not E) = 1. Not taught: two-stage events (p03).

**Next:** math-s12-p03.

## 2. Site order, sections and worked examples

Read-only source: [relative-frequency-and-probability/lesson01.sa.html](https://hscscience.com.au/subjects/maths-standard/year12/relative-frequency-and-probability/lesson01.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `0c40604b72edc6425e49660a3cd0f5055fa101111b172de7d44666c0d5bba9f5`. Sections used: `orient-and-prepare` (card 02 "equally likely must be assumed"), `connect-method` (card 06), `apply-method` (card 07 rounding note), `work-examples` (`we-1`, `we-3`), `independent-practice` (SA 1, SA 2, SA 3), `retrieve-and-finish` (revisit).

### Source lesson01, cards 02 and 06

Card 02: "Equally likely must be assumed: The formula $P(E) = n(E)/n(S)$ only works when every outcome in $S$ is equally likely (e.g., fair coin, well-shuffled deck, unbiased die). Always check this assumption." "Use complement when it's faster: ... P(not blue) = 1 − 5/10 = 5/10 = 1/2." Card 06: "Theoretical probabilities do not always make those outcomes equally likely: a biased coin can have P(heads) = 0.7 and P(tails) = 0.3." "Marble example: Bag: 3 red, 5 blue, 2 yellow. $n(S) = 10$. Direct: $P(\text{blue}) = 5/10 = 1/2$. Complement: $P(\text{not blue}) = 1 - 5/10 = 5/10 = 1/2$. Or: count non-blue directly: $n(\text{not blue}) = 3 + 2 = 5$". "Common error ... Never write $P(E) = 30$".

### Source lesson01, worked examples

`we-1`: "(b) Find $P(\text{even number})$. (c) Find $P(\text{not a 6})$ using the complement." → "$P(\text{even}) = 3/6 = 1/2$"; "$P(\text{not a 6}) = 1 - 1/6 = 5/6$". `we-3`: "In a class of 30 students, 12 study French ... (b) What is $P(\text{does not study French})$?" → "$P(F') = 1 - 2/5 = 3/5 = 0.6 = 60\%$"; "(c) ... more likely they study French or that they don't?" → "$0.4 < 0.6$".

### Source lesson01, short answers and revisit

SA 1: "A box contains 15 balls: 7 red, 4 white, and 4 black. ... (b) Find $P(\text{red})$ as a fraction. (c) Find $P(\text{not white})$ using the complement." Answers: "The equally likely outcomes are the 15 individual balls, so $n(S) = 15$ ... (The colours are not themselves equally likely, which is why the outcomes counted are the balls, not the three labels.)", "$7/15$", "$1 - 4/15 = 11/15$". SA 2: "A letter is chosen at random from the word STATISTICS." → "10 letters", "$P(T) = 3/10$", "$0.3 = 30\%$". SA 3: tea 85, coffee 70, neither 45 of 200 → "$155/200 = 31/40 = 0.775$", "$45/200 = 9/40 = 0.225$". Revisit: "P(green) = 0/10 = 0, impossible".

## 3. Recalculation

- Marbles: P(blue) = 5/10 = 1/2; P(not blue) = 1/2; P(green) = 0; P(red) = 3/10 (for the "not 1/3" contrast).
- Die: P(even) = 1/2; P(not a 6) = 5/6; P(greater than 4) = 1/3.
- French: 12/30 = 2/5 = 0.4 = 40%; not French 3/5 = 60%.
- SA 1: 7/15; 11/15. SA 2: 3/10 = 0.3 = 30%. SA 3: 31/40 = 0.775; 9/40 = 0.225.
- Question 1: P(red) = 5/20 = 1/4; P(not black) = 1 − 7/20 = 13/20. Question 2: CANTEEN has 7 letters; P(E) = 2/7; P(not N) = 1 − 2/7 = 5/7.
- Anchor: 3 electric cars of 12 nearby: P(not electric) = 9/12 = 3/4.

Values checked with Python `fractions` (`work/brief-standard-bp/recalc.py`). All site answers match. Keep the site's numbers.

## 4. Misconceptions and HSC-style traps

- Counting categories instead of equally likely outcomes (P(blue) = 1/3 because there are three colours).
- Counting the letters of a word without repeats (STATISTICS has 10 letters, not 5).
- Writing a percentage as a bare number, or leaving a fraction unsimplified when the question asks for simplest form.
- Subtracting the wrong thing for the complement (1 − 3 instead of 1 − 3/10).
- Believing "not E" and "E" can both be likely (they add to exactly 1).

These follow from the content, not claims about how often markers see them.

## 5. Visual needs

- The ten marbles in a row; the blue ones lift ("5 favourable") over the row ("10 total"), the fraction building beneath, then 1/2 = 0.5 = 50% on p01's chance line.
- The "three colours" trap: three colour chips with 1/3 each, crossed out, then the chips stretched to their true widths (3, 5, 2 of 10).
- Complement: the non-blue marbles dim; a bar of length 1 splits into "blue" and "not blue" pieces that always fill it.
- STATISTICS as letter tiles, the three T tiles lifting.
- A green marble searched for and not found: 0 on the chance line.
- Final frame (p03's opening, proposed): a school canteen lunch-deal board, 3 mains and 4 drinks, one of each picked at random: "how many different lunches?".

Advanced reuse (visual parts only): `OutcomeArray` (a11-prob-parts.tsx) in token-row mode for the marbles; `StackedTotalBar` (prob-parts.tsx) for the complement bar; `SetBraces`; p01's ChanceLine. Plates: `ma11-counter-bag-v1.png` (inspect for marbles); new letter tiles are coded. Kit needs: none beyond p01's ChanceLine.

## 6. Two original candidate practice questions

### Question 1

A pencil case holds 20 pens: 8 blue, 7 black and 5 red. One pen is taken at random. (a) Find the probability that it is red. (b) Use the complement to find the probability that it is not black. Give each answer as a fraction in simplest form.

**Worked answer:** (a) 5/20 = 1/4. (b) P(black) = 7/20, so P(not black) = 1 − 7/20 = 13/20.

### Question 2

The letters of the word CANTEEN are written on seven cards, and one card is chosen at random. (a) Find P(the letter is E). (b) Find P(the letter is not N). (c) Explain why P(the letter is a vowel) is not 1/2 even though a letter is either a vowel or a consonant.

**Worked answer:** (a) There are 7 letters and 2 are E: 2/7. (b) 2 are N, so 1 − 2/7 = 5/7. (c) The two groups are not equally likely: the vowels are A, E, E (3 cards) and the consonants are C, N, T, N (4 cards), so P(vowel) = 3/7.

Only the question goes on the card. Hide the answer until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake (for Question 1 (b): "1 − 7 = −6", crossed, "subtract the probability, 7/20"; for Question 2 (a): "1/6, six different letters", crossed, "count the 7 cards").

## 7. Everyday anchors

- **The site's marble bag:** ten equally likely marbles against three not equally likely colours (the lesson's key check; neutral object).
- **A rideshare app assigning one of 12 nearby cars at random, 3 of them electric:** P(not electric) = 3/4 by the complement (travel; invented).
- **CANTEEN letter cards:** counting repeated letters (school; Question 2).

Also the site's die, class of 30 and box of 15 balls. Repeat check (grepped 19 November 2026): Advanced s04 teaches the same trap with a gumball machine (not reused); "pencil case" and "CANTEEN" have no hits. Claude picks; none is required. Objects, never people. No gambling (ruling 6): the site's card deck is not used.

## 8. Site corrections and decisions for Claude

No new site error in the parts used. Owner note MS-68 covers the 52-card deck in `we-2`.

Decisions for Claude:

- **"Equally likely" before every fraction:** the site's SA 1 note ("the outcomes counted are the balls, not the three labels") is the clearest wording; use it.
- **Leave out "red or ace"** (`we-2` (c)): the overlap rule belongs with Venn diagrams (p07, Standard 2 only).
- **Pace: fits.** About 6 to 7 minutes.

Partial or missing coverage needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
