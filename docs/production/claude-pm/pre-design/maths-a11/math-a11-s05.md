# math-a11-s05: How do the complement and addition rules work on a Venn diagram?

Brief 243 research pack, 17 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci4917e349` (Probability): Use Venn diagrams to represent the relationship between events within the same sample space, including mutually exclusive events, that is, events that as subsets of the sample space are disjoint [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa829162c5). Site coverage: covered.
- `ci8c8dbc06` (Probability): Establish and use the rules P(A̅) = 1 - P(A) and P(A ∪ B) = P(A) + P(B) - P(A ∩ B) [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa829162c5). Site coverage: covered. Pack note: the site states both rules and justifies the addition rule by the double count; the complement rule is stated, not established.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-s03: |A ∪ B| = |A| + |B| - |A ∩ B|. math-a11-s04: P(A) = |A|/|S| and events as subsets of S. math-a11-s01: |A| + |A̅| = |U| (site lesson11 we-2).

**Prior video:** math-a11-s04.

**Start:** s04's sample space drawn as a Venn diagram, with counts in the regions.

**Stop:** Use Venn diagrams for events in one sample space, including mutually exclusive events (disjoint subsets); establish P(A̅) = 1 - P(A) and P(A ∪ B) = P(A) + P(B) - P(A ∩ B) from the counting rules and use them, including with probabilities not from equally likely outcomes. Multistage events are s06; conditional probability s07.

**Next:** math-a11-s06.

**Year 12 dependency:** Year 12 s04 lists "Year 11 complement rule" as entry knowledge and Year 12 s01 lists complements. Deliver P(A̅) = 1 - P(A) as a rule students can use without a diagram.

**Spoken maths:** "P of A complement equals one minus P of A"; "P of A union B equals P of A plus P of B minus P of A intersect B"; decimals as "zero point six", "zero point three".

## 2. Site order, sections and worked examples

Read-only source: [probability-and-data/lesson02.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/probability-and-data/lesson02.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `fd871e534b47078ec8eae5d61d76a7168f25cddef525e3b779105c6df9629455`. Title: Probability Rules. Lesson id maths-adv-y12-m5-l02.

Data-step ids: `orient`, `the-two-moves`, `what-you-ll-master`, `the-addition-rule-for-p`, `model`, `the-power-of-complementary-events`, `apply`, `concept`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source probability-and-data/lesson02.sa.html, `we-1`

PROBLEM 1 · ADDITION RULE If $P(A) = 0.6$, $P(B) = 0.5$, and $P(A \cap B) = 0.3$, find: (a) $P(A \cup B)$; (b) $P(A' \cap B)$. 1 $P(A \cup B) = 0.6 + 0.5 - 0.3 = 0.8$ Apply the addition rule. Subtract the intersection once. 2 $P(A' \cap B) = P(B) - P(A \cap B) = 0.5 - 0.3 = 0.2$ "$B$ but not $A$" = all of $B$ minus the part shared with $A$. Verify: $P(A \cup B) + P(A' \cap B') = 0.8 + (1-0.8) = 1$ ✓

### Source probability-and-data/lesson02.sa.html, card 05 and activities

Card 05: "Since $P(A \cap B) \geq 0$, we always have $P(A \cup B) \leq P(A) + P(B)$. Also, since $A \subseteq (A \cup B)$, we have $P(A \cup B) \geq P(A)$." Quick check: $0.5 + 0.4 - 0.2 = 0.7$. Activity 3: mutually exclusive, $0.3 + 0.6 = 0.9$.

Second read-only source: [probability-and-data/lesson01.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/probability-and-data/lesson01.sa.html), SHA256 `c586ea3ff43c6df946cd1bb96dbd52e4feba58113fa6ee447b78cb3d6f1c7b78` (data-step ids as in s04).

### Source probability-and-data/lesson01.sa.html, `we-3`

PROBLEM 3 · VENN DIAGRAM In a survey of 50 people: 30 own a dog, 25 own a cat, and 12 own both. Find $P(\text{dog} \cup \text{cat})$. 1 $P(\text{dog}) = \dfrac{30}{50}$, $P(\text{cat}) = \dfrac{25}{50}$, $P(\text{both}) = \dfrac{12}{50}$ 2 $P(\text{dog} \cup \text{cat}) = \dfrac{30}{50} + \dfrac{25}{50} - \dfrac{12}{50} = \dfrac{43}{50} = 0.86$

### Source probability-and-data/lesson01.sa.html, `we-1` step 2 and short answers

we-1: $P(B \cup T) = \dfrac{18}{30} + \dfrac{15}{30} - \dfrac{8}{30} = \dfrac{25}{30} = \dfrac{5}{6}$. Fill-the-gap: $P(A) = 0.4$, $P(B) = 0.3$, $P(A \cap B) = 0.15$ gives $0.55$. Q1(b): $P(\text{not green}) = 1 - \frac{2}{10} = \frac{4}{5}$. Q2: 80 people, 45 smartphone, 50 laptop, 30 both: "smartphone or laptop but not both" $= \frac{35}{80} = \frac{7}{16}$.

Only the parts named in the stop boundary belong to this video. Lesson02's multiplication rule, P(B|A) and "at least one" examples belong to s06 to s08.

## 3. Recalculation

- lesson02 we-1: 0.8 and 0.2; neither 0.2. Quick check 0.7; activity 3 0.9.
- lesson01 we-1: 5/6; we-3: 43/50 = 0.86; fill-the-gap 0.55; drill 3: (22 + 18 - 10)/40 = 3/4; Q1(b) 4/5, Q1(c) 4/5 (mutually exclusive); Q2 regions 15, 30, 20, neither 15, exactly one 7/16.
- Establishing: |A| + |A̅| = |S| divided by |S| gives P(A) + P(A̅) = 1; s03's rule divided by |S| gives the addition rule.
- Practice answers below.

Every example above was recalculated with SymPy (`work/brief243-gs/verify_s.py`, run with `python -I`, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Adding P(A) + P(B) for events that overlap (a sum above 1 gives it away).
- Calling events "mutually exclusive" because they are different events.
- Treating the complement of A as "the other event B".
- Subtracting the intersection when the events are mutually exclusive and P(A ∩ B) is already 0 (harmless) or forgetting it when they are not (harmful).
- Mixing counts and probabilities in one line.

These follow from the official content, not claims about how often markers see them.

## 5. Visual needs

- A Venn diagram of one sample space with counts, then the same diagram with every count divided by |S| (counts and probabilities in matching positions).
- The complement: A's region and the rest of S together filling the rectangle, |A| + |A̅| = |S| turning into P(A) + P(A̅) = 1.
- The addition rule as s03's double count, re-labelled with P.
- Mutually exclusive events: the circles separate, the overlap region vanishes, the rule loses its last term.
- A "rule card" whose terms light as the narration says "P of A union B" and so on.

HSC-style diagrams: letters and numbers only. All diagrams coded in the shared paper style. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs: `../../checks/maths-a11-kit-needs-g-s.md`.

## 6. Two original candidate practice questions

### Question 1

For events A and B, P(A) = 0.45, P(B) = 0.35 and P(A ∪ B) = 0.6. Find P(A ∩ B) and the probability that neither A nor B occurs.

**Worked answer:** 0.6 = 0.45 + 0.35 - P(A ∩ B), so P(A ∩ B) = 0.2. Neither: 1 - P(A ∪ B) = 0.4. Crossed mistake: P(A ∩ B) = 0.45 × 0.35 (independence is not given).

### Question 2

A bag holds 30 balls numbered 1 to 30, and one is drawn at random. Find the probability that its number is a multiple of 5 or a multiple of 6. Then find the probability that it is not a multiple of 5.

**Worked answer:** Multiples of 5: 6 balls; of 6: 5 balls; of both (30): 1 ball. P = (6 + 5 - 1)/30 = 10/30 = 1/3. Not a multiple of 5: 1 - 6/30 = 4/5. Crossed mistake: 11/30 (30 counted twice).

Only the question goes on the card. Hide the answer and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- A sushi train: if 0.3 of the plates going past are salmon, the chance the next plate is not salmon is 1 - 0.3 (food).
- Hotel rooms with a sea view, a spa, or both: the chance a randomly allocated room has at least one of them, with the overlap subtracted (travel).
- A music app's library: songs that are Australian or released this year, with Australian songs from this year in the overlap (music).

Varied everyday contexts (money, phones, sport, travel, food, games, home, shopping, music). None repeats an anchor in the Year 12 Maths designs (including the rain gauge in the integration strand), the Year 11 w, c and e designs, the w, c and e pack suggestions, or another g or s pack (grepped, 17 November 2026). Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`, section 8. Resolve logged items before reusing site copy; the site stays read only.

- **S11-P07** (logged, minor): lesson02 card 10's lead-in promises tests for mutual exclusivity and independence, but the card teaches the complement rule.

Decisions for Claude:

- Establish both rules from s01 and s03 counts (equally likely case), then use them with given probabilities. This keeps the "establish" demand without new machinery.
- Do not use lesson02's "two moves" card (it pairs the addition rule with the multiplication rule and P(B|A), which come in s06 to s08).
- Use A̅ on screen (syllabus); the site writes A'.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
