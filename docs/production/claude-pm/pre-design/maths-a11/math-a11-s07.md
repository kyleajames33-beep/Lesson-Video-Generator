# math-a11-s07: How does knowing B happened change the probability of A?

Brief 243 research pack, 17 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci6b22bb73` (Conditional probability): Define conditional probability as the probability that an event A occurs given that another event B has already occurred, and use the notation P(A|B) [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa829162c5). Site coverage: covered.
- `ci720126e5` (Conditional probability): Examine conditional probability by restricting the sample space and event spaces in a Venn diagram, using a two-way table, a tree diagram and other arrays [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa829162c5). Site coverage: covered.
- `cidbe2315d` (Conditional probability): Establish that P(A|B) = (|A ∩ B|)/(|B|) when all outcomes are equally likely by restricting the sample space and event space, and hence P(A|B) = (P(A ∩ B))/(P(B)), provided |B| ≠ 0 [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa829162c5). Site coverage: covered (crosswalk). Pack note: the site starts from P(A ∩ B)/P(B); the counting form |A ∩ B|/|B| and the step "divide top and bottom by |S|" are not shown.
- `cif285e1d9` (Conditional probability): Use the formulas for P(A|B) to solve practical problems involving conditional probability [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa829162c5). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-s05: Venn diagrams of events and the addition rule. math-a11-s06: arrays and tree diagrams.

**Prior video:** math-a11-s06.

**Start:** s06's two-dice array, with one fact about the roll revealed ("the total is 8").

**Stop:** Define P(A|B), the probability that A occurs given that B has already occurred; restrict the sample space in a Venn diagram, a two-way table, a tree and an array; establish P(A|B) = |A ∩ B|/|B| for equally likely outcomes and hence P(A|B) = P(A ∩ B)/P(B), provided |B| ≠ 0; solve practical problems, keeping P(A|B) and P(B|A) apart. Independence is s08.

**Next:** math-a11-s08.

**Spoken maths:** "P of A given B"; "the probability of A, given that B has happened"; "A intersect B"; decimals as "zero point four".

## 2. Site order, sections and worked examples

Read-only source: [probability-and-data/lesson03.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/probability-and-data/lesson03.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `2ffabffce57e32867b9b07baebb196e3824f84f98a1467a12def2c8336cd66e0`. Title: Conditional Probability. Lesson id maths-adv-y12-m5-l03.

Data-step ids: `orient`, `the-two-moves`, `what-you-ll-master`, `what-is-conditional-probability`, `model`, `apply`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source probability-and-data/lesson03.sa.html, `we-1`

PROBLEM 1 · CONDITIONAL FORMULA If $P(A \cap B) = 0.2$ and $P(B) = 0.5$, find $P(A \mid B)$. 1 $P(A \mid B) = \dfrac{P(A \cap B)}{P(B)}$ 2 $= \dfrac{0.2}{0.5} = 0.4$

### Source probability-and-data/lesson03.sa.html, `we-2`

PROBLEM 2 · TOTAL PROBABILITY A company sources components from two suppliers: 60% from Supplier X (4% defective) and 40% from Supplier Y (2% defective). (a) Find $P(\text{defective})$. (b) Find $P(\text{from X} \mid \text{defective})$. 2 $= 0.6 \times 0.04 + 0.4 \times 0.02 = 0.024 + 0.008 = 0.032$ 3 $P(X \mid \text{def}) = \dfrac{P(X \cap \text{def})}{P(\text{def})} = \dfrac{0.6 \times 0.04}{0.032} = \dfrac{0.024}{0.032} = \dfrac{3}{4}$

### Source probability-and-data/lesson03.sa.html, `we-3`

PROBLEM 3 · TWO-WAY TABLE 200 students were surveyed on part-time work and sport. From the table: 45 work and play sport, 80 work total, 115 play sport total. Find $P(\text{work} \mid \text{sport})$ and $P(\text{sport} \mid \text{work})$. 1 $P(\text{work} \mid \text{sport}) = \dfrac{45}{115} = \dfrac{9}{23} \approx 0.391$ Restrict to the "sport" column (115 students). 2 $P(\text{sport} \mid \text{work}) = \dfrac{45}{80} = \dfrac{9}{16} = 0.5625$ Now restrict to the "work" row (80 students).

### Source probability-and-data/lesson03.sa.html, card 05 example and short answers

Card 05: 30% play basketball and 20% play both: $P(\text{tennis} \mid \text{basketball}) = \frac{0.20}{0.30} = \frac{2}{3}$ (see S11-P01 on the sentence after it). Q1: instrument 40%, choir 25% of players and 10% of non-players: $P(\text{choir}) = 0.16$, $P(\text{instrument} \mid \text{choir}) = \frac{5}{8}$. Q2: diet and exercise table of 500: $P(\text{healthy} \mid \text{regular}) = \frac{120}{210} = \frac{4}{7}$, $P(\text{regular} \mid \text{healthy}) = \frac{120}{200} = 0.6$. Q3: a test for a 2% disease, 98% true positive, 3% false positive, in 10 000 people: 196 true positives, 294 false positives, $P(\text{disease} \mid \text{positive}) = \frac{196}{490} = 0.4$.

Only the parts named in the stop boundary belong to this video. Q2(c) (an independence test) belongs to s08. The law of total probability is used inside trees, not named as a rule (it is not 2024 Year 11 wording).

## 3. Recalculation

- we-1: 0.4. we-2: 0.032 and 3/4. we-3: 9/23 (about 0.391) and 9/16 = 0.5625. Card 05: 2/3.
- Q1: 0.16 and 5/8. Q2: 4/7 and 0.6. Q3: 200 with the disease, 196 true positives, 4 false negatives, 294 false positives, 9506 true negatives; 0.4.
- Drills: 0.3; 4/9; 1/3; 0.029; 0.5.
- Counting form (original): two dice, B = "total 8" has 5 cells, A ∩ B = the double (4, 4) has 1 cell, so P(A|B) = 1/5; dividing top and bottom by 36 gives (1/36)/(5/36) = P(A ∩ B)/P(B).
- Practice answers below.

Every example above was recalculated with SymPy (`work/brief243-gs/verify_s.py`, run with `python -I`, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Swapping P(A|B) and P(B|A) (the site's trap 1; Q3's 98% against 40%).
- Dividing by the grand total instead of the row or column total (the site's trap 2).
- Reading "given" as "and", so P(A|B) is taken as P(A ∩ B).
- Thinking a condition always lowers (or always raises) a probability.
- Dividing by P(A) instead of P(B).

These follow from the official content, not claims about how often markers see them.

## 5. Visual needs

- The restriction, shown four ways with one motion: everything outside B dims and B becomes the new "whole".
  - Venn diagram: B becomes the new rectangle and A ∩ B is the part of it that is A.
  - Two-way table: one row or column stays lit, the rest greys out, and its total becomes the denominator.
  - Array: the cells of B stay lit and A's cells inside them are counted.
  - Tree: the branch already taken is followed.
- The counting form first (|A ∩ B|/|B| with cells), then "divide top and bottom by |S|" written as one step to reach P(A ∩ B)/P(B).
- A P(A|B) against P(B|A) pair on the same table, with the two denominators boxed in different colours.

HSC-style diagrams: letters and numbers only (two-way table headings in words are fine). All diagrams coded in the shared paper style. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs: `../../checks/maths-a11-kit-needs-g-s.md`.

## 6. Two original candidate practice questions

### Question 1

A food delivery app recorded 200 orders. 120 were placed in the peak hour and 30 of those arrived late; 80 were placed off-peak and 8 of those arrived late. Find P(late|peak) and P(peak|late).

**Worked answer:** P(late|peak) = 30/120 = 1/4. Late orders: 30 + 8 = 38, so P(peak|late) = 30/38 = 15/19. Crossed mistake: 30/200 (the grand total).

### Question 2

For events A and B, P(A) = 0.5, P(B) = 0.4 and P(A ∪ B) = 0.65. Find P(A|B) and P(B|A).

**Worked answer:** P(A ∩ B) = 0.5 + 0.4 - 0.65 = 0.25. P(A|B) = 0.25/0.4 = 0.625 (5/8). P(B|A) = 0.25/0.5 = 0.5. Crossed mistake: P(A|B) = 0.25/0.5 (dividing by P(A)).

Only the question goes on the card. Hide the answer and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- A food delivery app: the chance an order is late given it was placed in the peak hour, from a two-way table of orders (food, phones; matches question 1).
- A football team's season: the chance of winning given it scored first, against the chance of winning at all (sport; a results table only).
- Online clothes shopping: the chance an item is returned given it was bought in a sale (shopping).

Varied everyday contexts (money, phones, sport, travel, food, games, home, shopping, music). None repeats an anchor in the Year 12 Maths designs, the Year 11 w, c and e designs, the w, c and e pack suggestions, or another g or s pack (grepped, 17 November 2026). Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`, section 8. Resolve logged items before reusing site copy; the site stays read only.

- **S11-P01** (logged): card 05 says the unconditional probability of playing tennis "would be lower" than 2/3. The example does not give P(tennis); it is only known to be at least 0.2, and it could be higher than 2/3.

Decisions for Claude:

- `cidbe2315d` needs the counting form first (equally likely outcomes, |A ∩ B|/|B|) and then the probability form; the site skips the first.
- All four representations named in `ci720126e5` should appear at least briefly (Venn, two-way table, tree, array), with one motion for "restrict".
- The disease test (Q3) is a strong surprise but its context is medical; if used, keep it as numbers in a table, no people.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
