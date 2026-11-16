# math-a11-s04: How do sample spaces and events give a probability?

Brief 243 research pack, 17 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `cib914fe5d` (Probability): Define an experiment or a trial to be any procedure that can be infinitely repeated and has a well-defined set of possible outcomes known as the sample space, denoted S [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa829162c5). Site coverage: covered. Pack note: the site names the sample space but never defines an experiment or trial as infinitely repeatable.
- `ci6948e56d` (Probability): Identify an event A as a subset A of the sample space S [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa829162c5). Site coverage: covered.
- `ci851335dd` (Probability): Define the probability of each outcome to be 1/(|S|) when all the outcomes are equally likely and the probability of the event A to be P(A) = (|A|)/(|S|) [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa829162c5). Site coverage: covered. Pack note: the site writes n(A)/n(S) and does not state 1/|S| for each outcome.
- `cid1a19692` (Probability): Interpret the notation A̅ to be the event ‘ A does not occur’, interpret A ∩ B to be the event ‘ A and B both occur’, and interpret A ∪ B to be the event ‘ A or B occurs’ [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa829162c5). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-s01: sets, subsets, complements. math-a11-s02: intersection and union. Years 7 to 10: simple probability as a fraction for equally likely outcomes.

**Prior video:** math-a11-s03.

**Start:** s03's sets, now filled with the outcomes of an experiment.

**Stop:** Define an experiment or trial (a procedure that can be repeated indefinitely with a well-defined set of outcomes) and its sample space S; identify an event as a subset of S; for equally likely outcomes, each outcome has probability 1/|S| and P(A) = |A|/|S|; interpret A̅ as "A does not occur", A ∩ B as "A and B both occur" and A ∪ B as "A or B occurs", finding each by counting a listed sample space. The complement and addition rules are s05; arrays and trees s06.

**Next:** math-a11-s05.

**Year 12 dependency:** Year 12 s01's entry knowledge is "Year 11 probability (sample spaces, equally likely outcomes and P(A) = favourable ÷ total, relative frequency as an estimate, listing outcomes of two- and three-stage experiments, complements)", and its memory aid "One trial, one value" assumes "each outcome is one result of one trial". s04 must deliver: a trial gives exactly one outcome in S; P(A) = |A|/|S| only for equally likely outcomes; listing small sample spaces (coins, a die and a coin). Relative frequency is s10; arrays and trees s06; the complement rule s05.

**Spoken maths:** "P of A"; "A complement" or "not A"; "A intersect B" for A ∩ B and "A union B" for A ∪ B, each followed once by its event meaning ("A and B both occur", "A or B occurs"); fractions as "one twelfth", decimals as "zero point two five".

## 2. Site order, sections and worked examples

Read-only source: [probability-and-data/lesson01.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/probability-and-data/lesson01.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `c586ea3ff43c6df946cd1bb96dbd52e4feba58113fa6ee447b78cb3d6f1c7b78`. Title: Introduction to Probability. Lesson id maths-adv-y12-m5-l01 (a Year 12 id on a Year 11 page; already noted in section 4 of the corrections file).

Data-step ids: `orient`, `the-two-moves`, `what-you-ll-master`, `sample-space-and-events`, `model`, `apply`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source probability-and-data/lesson01.sa.html, card 05 (sample space and events)

"Roll a die: $S = \{1, 2, 3, 4, 5, 6\}$ Flip a coin: $S = \{\text{H}, \text{T}\}$ Roll two dice: $S = \{(1,1),(1,2),\ldots,(6,6)\}$, 36 outcomes total For example, "rolling an even number" is the event $A = \{2, 4, 6\}$, so $n(A) = 3$. When all outcomes are equally likely: $$P(A) = \frac{n(A)}{n(S)}$$"

### Source probability-and-data/lesson01.sa.html, opening question and its revisit

Opening: "You roll a standard six-sided die and flip a coin. ... which do you think is more likely: getting a 6 and heads, or getting an even number or heads?" Revisit: "$P(6 \cap \text{H}) = \dfrac{1}{6} \times \dfrac{1}{2} = \dfrac{1}{12} \approx 0.083$ ... $P(\text{even} \cup \text{H}) = \dfrac{3}{6} + \dfrac{1}{2} - \dfrac{3}{12} = \dfrac{9}{12} = 0.75$."

### Source probability-and-data/lesson01.sa.html, `we-1` (counts only)

PROBLEM 1 · BASIC PROBABILITY In a class of 30 students: 18 play basketball ($B$), 15 play tennis ($T$), and 8 play both. Find $P(B)$, $P(T)$, $P(B \cap T)$, and $P(B \cup T)$. 1 $P(B) = \dfrac{18}{30} = \dfrac{3}{5}$, $P(T) = \dfrac{15}{30} = \dfrac{1}{2}$, $P(B \cap T) = \dfrac{8}{30} = \dfrac{4}{15}$ 2 $P(B \cup T) = \dfrac{18}{30} + \dfrac{15}{30} - \dfrac{8}{30} = \dfrac{25}{30} = \dfrac{5}{6}$

### Source probability-and-data/lesson01.sa.html, drill and short answers

Drill 1: $P(\text{heart}) = \frac{13}{52} = \frac{1}{4}$. Drill 2: two coins, $S = \{\text{HH,HT,TH,TT}\}$, $P(\text{at least one head}) = \frac{3}{4}$. Drill 4: two dice, $n(S) = 36$, $P(\text{sum} = 7) = \frac{6}{36} = \frac{1}{6}$. Q1: 5 red, 3 blue, 2 green marbles: $P(\text{red}) = \frac{1}{2}$. Q3: four coin flips, $n(S) = 16$.

Only the parts named in the stop boundary belong to this video. The site's revisit uses the multiplication and addition rules; in s04 the same two answers come from counting the 12 listed outcomes (6 and H: 1 outcome; even or H: 9 outcomes). we-1 step 2 and we-3 use the addition rule and belong to s05; we-2 (at least one six in two rolls) belongs to s06.

## 3. Recalculation

- Die-and-coin sample space: 12 outcomes; {6H}: 1/12; even or H: 9/12 = 3/4. Both match the site's answers.
- we-1 step 1: 3/5, 1/2, 4/15 (counts over 30). Drill 1, 2 and 4: 1/4, 3/4, 1/6. Quick check: "less than 4" has 3 outcomes.
- Oz Lotto (card 05): C(47, 7) = 62 891 499 and 1/62 891 499 is about 1.59 × 10^(-8). Correct, but see section 8.
- Q1 (a) 1/2; Q3 (a) 16.
- Practice answers below.

Every example above was recalculated with SymPy (`work/brief243-gs/verify_s.py`, run with `python -I`, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Using |A|/|S| when the outcomes are not equally likely (the site's trap 3: a weighted die or survey categories).
- Listing outcomes that are not equally likely as if they were (the totals 2 to 12 of two dice).
- Reading A ∩ B as "A or B", or "or" as excluding "both".
- Thinking A̅ is "B".
- A probability above 1 or below 0.

These follow from the official content, not claims about how often markers see them.

## 5. Visual needs

- An experiment card: "trial: one roll of a die and one toss of a coin", the outcome landing as one token in a sample-space set S of 12 listed outcomes (letters and numbers only).
- Events lit as subsets of S: A = "a 6", B = "heads"; then A ∩ B, A ∪ B and A̅ lit with their meanings written beside, and |A|/|S| read off each.
- "Equally likely" check before each fraction: equal-sized tokens; a counter-example with unequal outcomes shown once and crossed.
- `chance.ts` can generate repeated trials if a "can be repeated indefinitely" beat is wanted; keep long-run frequency for s10.

HSC-style diagrams: letters and numbers only, no dice faces drawn inside Venn regions. All diagrams coded in the shared paper style. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs: `../../checks/maths-a11-kit-needs-g-s.md`.

## 6. Two original candidate practice questions

### Question 1

A bag holds 20 tokens numbered 1 to 20, and one is drawn at random. A is the event "the number is a multiple of 4" and B is the event "the number is greater than 14". List A ∩ B and A ∪ B, and find P(A ∩ B) and P(A ∪ B).

**Worked answer:** A = {4, 8, 12, 16, 20}, B = {15, 16, 17, 18, 19, 20}. A ∩ B = {16, 20}, so P(A ∩ B) = 2/20 = 1/10. A ∪ B = {4, 8, 12, 15, 16, 17, 18, 19, 20}, so P(A ∪ B) = 9/20. Crossed mistake: P(A ∪ B) = (5 + 6)/20 (16 and 20 counted twice).

### Question 2

A fair coin is tossed three times. List the sample space. Find the probability of exactly two heads, and the probability that the three tosses are not all the same.

**Worked answer:** S = {HHH, HHT, HTH, THH, HTT, THT, TTH, TTT}, 8 equally likely outcomes. Exactly two heads: HHT, HTH, THH, so 3/8. Not all the same: every outcome except HHH and TTT, so 6/8 = 3/4. Crossed mistake: listing only 4 outcomes (0, 1, 2 or 3 heads) and answering 1/4.

Only the question goes on the card. Hide the answer and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- A quiz app that serves one of its 40 questions at random: S is the 40 questions, "a sport question" is an event, and P = (sport questions)/40 (phones, games).
- A gumball machine with 12 red, 8 blue and 5 yellow gumballs: one turn is one trial; P(blue) = 8/25 when each gumball is equally likely (food).
- A drawer of loose socks: pull one out without looking; the sample space is the socks, not the colours, so colours are not equally likely (home).

Varied everyday contexts (money, phones, sport, travel, food, games, home, shopping, music). None repeats an anchor in the Year 12 Maths designs (Year 12 s01's board-game die, s02's calendar and its ruling against raffle contexts), the Year 11 w, c and e designs, the w, c and e pack suggestions, or another g or s pack (grepped, 17 November 2026). Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`, section 8. Resolve logged items before reusing site copy; the site stays read only. No new copy error was found in this lesson.

Decisions for Claude:

- Define "experiment or trial" in the syllabus words (repeatable indefinitely, a well-defined set of outcomes); the site never does.
- Use |A|/|S| (the syllabus form) and say n(A) once; state "each outcome has probability 1/|S|" before P(A).
- Leave the Oz Lotto card out: Year 12 s02 ruled out raffles and prize draws as gambling-adjacent, and the site's line "the lottery is a tax on people who cannot do probability" is opinion.
- The revisit's die-and-coin question is a good hook if answered by counting 12 outcomes (no rules yet).

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
