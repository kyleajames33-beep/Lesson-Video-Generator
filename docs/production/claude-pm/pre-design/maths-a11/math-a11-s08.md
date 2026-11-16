# math-a11-s08: When are two events independent, and how do we prove it?

Brief 243 research pack, 17 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci3b004211` (Conditional probability): Define two events to be independent if the occurrence of one event does not affect the probability that the other event occurs [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa829162c5). Site coverage: covered.
- `cifa01f762` (Conditional probability): Explain that two events A and B are independent means P(A|B) = P(A) and P(B|A) = P(B), and show algebraically that if one of these formulas is true, then the other is also true [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa829162c5). Site coverage: missing. Gap: No lesson shows algebraically that P(A|B) = P(A) implies P(B|A) = P(B).
- `ci3243e129` (Conditional probability): Use the formula P(A|B) = (P(A ∩ B))/(P(B)), and the test P(A|B) = P(A) for independence to prove that if two events are independent, then P(A ∩ B) = P(A) × P(B), and to prove conversely that if P(A ∩ B) = P(A) × P(B), then A and B are independent [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa829162c5). Site coverage: partial. Gap: The product rule for independent events is stated and used. The proof in both directions from the conditional formula is not worked.
- `ci4e7d5072` (Conditional probability): Solve practical problems involving independent events [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa829162c5). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-s07: P(A|B) = P(A ∩ B)/P(B). math-a11-s05: mutually exclusive events.

**Prior video:** math-a11-s07.

**Start:** two events where knowing one changes nothing about the other (the site's die: "even" and "greater than 4").

**Stop:** Define independent events (the occurrence of one does not affect the probability of the other); explain that independence means P(A|B) = P(A) and P(B|A) = P(B) and show algebraically that one implies the other; prove that independence gives P(A ∩ B) = P(A) × P(B) and the converse; solve practical problems; contrast with mutually exclusive events. Random variables are s09.

**Next:** math-a11-s09.

**Spoken maths:** "P of A given B equals P of A"; "P of A intersect B equals P of A times P of B"; decimals as "zero point three times zero point six".

## 2. Site order, sections and worked examples

Read-only source: [probability-and-data/lesson04.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/probability-and-data/lesson04.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `e6a1104d0c443b5f7101bf09cad903cbf880ade68e124d072f15d5cbfce5c283`. Title: Independence and Mutual Exclusivity. Lesson id maths-adv-y12-m5-l04.

Data-step ids: `orient`, `the-two-definitions-side-by`, `what-you-ll-master`, `independence-no-information-shared`, `model`, `apply`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source probability-and-data/lesson04.sa.html, `we-1`

PROBLEM 1 · INDEPENDENCE TEST A fair die is rolled. Let $A$ = "roll an even number" and $B$ = "roll a number greater than 4". (a) Are $A$ and $B$ mutually exclusive? (b) Are $A$ and $B$ independent? 1 $A = \{2,4,6\}$, $P(A) = \tfrac{1}{2}$ · $B = \{5,6\}$, $P(B) = \tfrac{1}{3}$ · $A \cap B = \{6\}$, $P(A \cap B) = \tfrac{1}{6}$ 2 $P(A \cap B) = \tfrac{1}{6} \neq 0$ ⇒ Not mutually exclusive 3 $P(A) \times P(B) = \tfrac{1}{2} \times \tfrac{1}{3} = \tfrac{1}{6} = P(A \cap B)$ ⇒ Independent

### Source probability-and-data/lesson04.sa.html, `we-2`

PROBLEM 2 · SURVEY DATA In 200 students: 80 study French, 60 study German, 20 study both. Test whether studying French and studying German are independent. Are they mutually exclusive? 1 $P(F) = \tfrac{80}{200} = 0.4$, $P(G) = \tfrac{60}{200} = 0.3$, $P(F \cap G) = \tfrac{20}{200} = 0.1$ 2 $P(F) \times P(G) = 0.4 \times 0.3 = 0.12 \neq 0.1 = P(F \cap G)$ 3 $P(F \cap G) = 0.1 \neq 0$ ⇒ Not mutually exclusive. This pair is neither independent nor mutually exclusive.

### Source probability-and-data/lesson04.sa.html, `we-3`

PROBLEM 3 · THE KEY THEOREM Two events have $P(A) = 0.5$, $P(B) = 0.5$, and $P(A \cap B) = 0$. Are they independent? ... 2 $P(A) \times P(B) = 0.5 \times 0.5 = 0.25 \neq 0 = P(A \cap B)$ ... they are dependent. 3 General proof: if $P(A) > 0$ and $P(B) > 0$, then $P(A) \times P(B) > 0$. But mutually exclusive means $P(A \cap B) = 0$. So $P(A \cap B) \neq P(A) \times P(B)$. Therefore dependent.

### Source probability-and-data/lesson04.sa.html, drill and short answers

Drill 1: even and prime on a die: $P(A) \times P(B) = \frac{1}{4} \neq \frac{1}{6}$, not independent. Drill 2: face card and red card: $\frac{3}{13} \times \frac{1}{2} = \frac{3}{26} = P(C \cap D)$, independent. Drill 5: if $A$ and $B$ are independent then so are $A'$ and $B'$. Q1: multiples of 2 and of 3 on a die: independent.

Only the parts named in the stop boundary belong to this video. Lesson03 Q2(c) (diet and exercise, 0.168 against 0.24) is a second survey test if needed.

## 3. Recalculation

- we-1: 1/6 = (1/2)(1/3). we-2: 0.12 ≠ 0.1. we-3: 0.25 ≠ 0.
- Drill 1: 1/4 ≠ 1/6. Drill 2: 3/26. Drill 3: 0.12 = 0.3 × 0.4. Drill 5: 1 - (a + b - ab) = (1 - a)(1 - b). Q1: 1/6 = (1/2)(1/3).
- `cifa01f762` (original): if P(A|B) = P(A), then P(A ∩ B) = P(A)P(B), so P(B|A) = P(A ∩ B)/P(A) = P(B), for P(A), P(B) > 0. Checked symbolically.
- Trap 3's "king and heart": (4/52)(13/52) = 1/52 = P(king of hearts). True, but the example is not in the lesson (S11-P06).
- Practice answers below.

Every example above was recalculated with SymPy (`work/brief243-gs/verify_s.py`, run with `python -I`, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Calling mutually exclusive events independent (with positive probabilities they are dependent; the site's trap 1).
- Judging independence by whether the events "seem related" instead of testing (we-1's surprise: even and greater than 4 are independent).
- Using P(A ∩ B) = P(A) × P(B) without independence being given or shown (draws without replacement).
- Testing only P(A|B) = P(A) and thinking P(B|A) = P(B) needs a separate check (the syllabus proof removes this).
- Checking whether P(A ∩ B) is "small" instead of comparing exactly.

These follow from the official content, not claims about how often markers see them.

## 5. Visual needs

- The definition as a restriction (s07's motion): restrict to B, and A's share of B equals A's share of S. On the die: A is 3 of 6 outcomes, and within B = {5, 6}, A is 1 of 2. Same share, so independent.
- The two proofs on a working board, one line at a time:
  - P(A|B) = P(A) gives P(A ∩ B) = P(A)P(B), which gives P(B|A) = P(B).
  - P(A ∩ B) = P(A)P(B) gives P(A|B) = P(A).
- A two-way table where every row has the same proportions (independent), against one where they differ.
- Mutually exclusive against independent: two disjoint circles (no overlap, so knowing A rules B out) beside two overlapping circles whose overlap is exactly the product.

HSC-style diagrams: letters and numbers only. All diagrams coded in the shared paper style. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs: `../../checks/maths-a11-kit-needs-g-s.md`.

## 6. Two original candidate practice questions

### Question 1

For events A and B, P(A) = 0.3, P(B) = 0.6 and P(A ∪ B) = 0.72. Determine whether A and B are independent.

**Worked answer:** P(A ∩ B) = 0.3 + 0.6 - 0.72 = 0.18. P(A) × P(B) = 0.18. They are equal, so A and B are independent. Crossed mistake: "not independent, because 0.72 ≠ 0.3 × 0.6".

### Question 2

A phone has two alarms set that work independently of each other. The first fails to go off with probability 0.05 and the second with probability 0.1. Find the probability that at least one alarm goes off.

**Worked answer:** Both fail: 0.05 × 0.1 = 0.005 (independent). At least one goes off: 1 - 0.005 = 0.995. Crossed mistake: 0.95 + 0.9 = 1.85 (not mutually exclusive, and over 1).

Only the question goes on the card. Hide the answer and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- A "lucky" jersey: from a season's results table, does wearing it change the chance of winning? If P(win|jersey) = P(win), the jersey makes no difference (sport; the jersey and a table only).
- A juice bar's orders: is adding a protein shot independent of choosing a large size? Test with the two-way table (food).
- Two independent phone alarms: the chance both fail is the product, so a backup alarm makes a big difference (phones; matches question 2).

Varied everyday contexts (money, phones, sport, travel, food, games, home, shopping, music). None repeats an anchor in the Year 12 Maths designs, the Year 11 w, c and e designs, the w, c and e pack suggestions, or another g or s pack (grepped, 17 November 2026; c01's coffee cart was avoided). Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`, section 8. Resolve logged items before reusing site copy; the site stays read only.

- **S11-P06** (logged, minor): trap 3 cites "the king-and-heart example", which the lesson does not contain.

Decisions for Claude:

- Both proofs (`cifa01f762` missing, `ci3243e129` partial) are original teaching; keep each to three or four lines with the condition P(A), P(B) > 0 said once.
- The definition in words (`ci3b004211`) comes first, through restriction (s07), before any formula.
- The site's card 04 lists "two separate lottery draws" as an example; Year 12 s02 ruled out lottery and raffle contexts. Use the alarms or a coin and a die instead.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
