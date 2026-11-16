# math-a11-s06: How do arrays and tree diagrams organise multistage events?

Brief 243 research pack, 17 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci1f69f91f` (Probability): Use arrays and tree diagrams to determine the outcomes and probabilities for multistage events [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa829162c5). Site coverage: partial. Gap: Tree diagrams appear as a multiplication-rule note and in practice questions. Arrays (two-dice grids) and tree diagrams for multistage events are not taught as their own method.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-s04: listing a sample space and P(A) = |A|/|S|. math-a11-s05: the complement and addition rules.

**Prior video:** math-a11-s05.

**Start:** two dice rolled together, and the question "how do we list every outcome so none is missed?".

**Stop:** Use arrays (two stages, equally likely: two dice, a die and a coin) and tree diagrams (several stages, with or without replacement) to determine the outcomes and probabilities of multistage events; multiply along a branch and add the branches that make the event, justified by counting the ordered outcomes. P(A|B) notation is s07; the independence test is s08.

**Next:** math-a11-s07.

**Year 12 dependency:** Year 12 s02 says "Year 11's two-dice table is drawn as the cause" and lists "Year 11 probability (equally likely outcomes; the 6 × 6 table of two dice)" as entry knowledge; Year 12 s01 lists "listing outcomes of two- and three-stage experiments". Deliver the 6 × 6 array of ordered pairs (with totals and differences read from it) and a three-stage tree (three coins).

**Spoken maths:** "five sixths times five sixths", "eleven thirty-sixths"; along a branch "multiply", across branches "add".

## 2. Site order, sections and worked examples

No site lesson teaches arrays and trees as a method (crosswalk: partial). The sources are examples spread over three lessons.

Read-only source: [probability-and-data/lesson01.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/probability-and-data/lesson01.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `c586ea3ff43c6df946cd1bb96dbd52e4feba58113fa6ee447b78cb3d6f1c7b78`.

### Source probability-and-data/lesson01.sa.html, `we-2` and drill 4

PROBLEM 2 · COMPLEMENT What is the probability of rolling at least one 6 in two rolls of a die? 1 $P(\text{no sixes}) = \dfrac{5}{6} \times \dfrac{5}{6} = \dfrac{25}{36}$ Use the complement. $P(\text{no six on one roll}) = \frac{5}{6}$; rolls are independent. 2 $P(\text{at least one 6}) = 1 - \dfrac{25}{36} = \dfrac{11}{36}$ Subtract from 1. The complement method is faster than listing all 11 favourable outcomes directly. Drill 4: "A die is rolled twice. How many outcomes are in $S$? Find $P(\text{sum} = 7)$." $n(S)=36$; $\frac{6}{36}=\frac{1}{6}$.

Read-only source: [probability-and-data/lesson02.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/probability-and-data/lesson02.sa.html), SHA256 `fd871e534b47078ec8eae5d61d76a7168f25cddef525e3b779105c6df9629455`.

### Source probability-and-data/lesson02.sa.html, card 06 example and `we-3`

Card 06: "A bag has 5 red and 5 blue marbles. You draw two without replacement. What is $P(\text{red then blue})$? $P(\text{first red}) = \dfrac{5}{10} = \dfrac{1}{2}$. After removing one red, $P(\text{second blue} \mid \text{first red}) = \dfrac{5}{9}$. So $P(\text{red then blue}) = \dfrac{1}{2} \times \dfrac{5}{9} = \dfrac{5}{18}$." `we-3`: PROBLEM 3 · AT LEAST ONE (COMPLEMENT) A fair die is rolled three times. Find $P(\text{at least one six})$. 1 $P(\text{no sixes}) = \dfrac{5}{6} \times \dfrac{5}{6} \times \dfrac{5}{6} = \dfrac{125}{216}$ 2 $P(\text{at least one 6}) = 1 - \dfrac{125}{216} = \dfrac{91}{216} \approx 0.421$

### Source probability-and-data/lesson02.sa.html, short answers

Q1: 4 red, 5 blue, 6 green, two drawn without replacement: (a) $\frac{4}{15} \times \frac{3}{14} = \frac{2}{35}$; (b) $\frac{4}{15} \times \frac{5}{14} = \frac{2}{21}$; (c) $1 - \frac{11}{15} \times \frac{10}{14} = \frac{10}{21}$. Q3: a coin flipped until two heads or four flips: paths HH, HTH, HTTH, HTTT, THH, THTH, THTT, TTHH, TTHT, TTTH, TTTT; ends with two heads with probability $\frac{11}{16}$.

Read-only source: [probability-and-data/lesson03.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/probability-and-data/lesson03.sa.html), SHA256 `2ffabffce57e32867b9b07baebb196e3824f84f98a1467a12def2c8336cd66e0`.

### Source probability-and-data/lesson03.sa.html, `we-2` (part a only)

PROBLEM 2 · TOTAL PROBABILITY A company sources components from two suppliers: 60% from Supplier X (4% defective) and 40% from Supplier Y (2% defective). (a) Find $P(\text{defective})$. 2 $= 0.6 \times 0.04 + 0.4 \times 0.02 = 0.024 + 0.008 = 0.032$ Multiply along each branch then add.

Data-step ids: lesson01 as in s04; lesson02 as in s05; lesson03 `orient`, `the-two-moves`, `what-you-ll-master`, `what-is-conditional-probability`, `model`, `apply`, `drill`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

Only the parts named in the stop boundary belong to this video. The site writes P(second blue | first red) on lesson02's tree; in s06 say "after a red is taken, 5 of the 9 left are blue" and keep the bar notation for s07.

## 3. Recalculation

- At least one 6 in two rolls: 11 of the 36 array cells, 11/36 = 1 - (5/6)^2. Sum 7: 6/36.
- Three rolls: 1 - 125/216 = 91/216 (about 0.421).
- Red then blue: the 10 × 9 array of ordered draws has 90 cells, 25 red-then-blue, 25/90 = 5/18 = (1/2)(5/9). This is the counting reason for multiplying along a branch.
- lesson02 Q1: 2/35, 2/21, 10/21. Q3: 11/16 (equals P(at least two heads in four tosses)). Fill: (6/10)(4/9) = 4/15. Activity 4: (8/20)^2 = 4/25.
- Suppliers: 0.032.
- Practice answers below.

Every example above was recalculated with SymPy (`work/brief243-gs/verify_s.py`, run with `python -I`, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Treating (1, 2) and (2, 1) as one outcome, which makes the totals look equally likely.
- Counting tree paths as equally likely when branch probabilities differ (the site's own Q3(c) point).
- Adding along a branch or multiplying across branches.
- Keeping the same denominator on the second draw without replacement.
- Missing "either order" when the event is "one of each".

These follow from the official content, not claims about how often markers see them.

## 5. Visual needs

- A 6 × 6 array of ordered pairs (first die across, second down), cells lit by an event (at least one 6; a total of 7; the larger number is 4), with the count over 36 written beside. `OutcomeGrid` lights cells by a single value; event lighting by a rule is a kit need.
- A 6 × 2 array for a die and a coin (s04's 12 outcomes).
- A tree diagram: stages as columns, branch probabilities on the branches, each path's product at its tip, the paths that make the event highlighted and their products added. Letters and numbers only (HSC style).
- The bridge from array to tree: the 10 × 9 array of ordered draws shaded as "first red" (half the rows) and then "second blue" (5 of the 9 cells in each of those rows), so the product (1/2)(5/9) is a fraction of a fraction you can see.
- `chance.ts` (coins experiment) to confirm the three-coin tree's counts if a quick simulation beat is wanted.

All diagrams coded in the shared paper style. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs: `../../checks/maths-a11-kit-needs-g-s.md`.

## 6. Two original candidate practice questions

### Question 1

Two fair dice are rolled. Use an array to find the probability that the larger of the two numbers is 4.

**Worked answer:** The cells with largest number 4 are (4, 1), (4, 2), (4, 3), (4, 4), (1, 4), (2, 4), (3, 4): 7 cells. P = 7/36. Crossed mistake: 1/6 (thinking each largest value is equally likely).

### Question 2

A bag holds 4 green and 2 yellow counters. Two counters are drawn without replacement. Draw a tree diagram and find the probability that the two counters are different colours.

**Worked answer:** Green then yellow: (4/6)(2/5) = 8/30. Yellow then green: (2/6)(4/5) = 8/30. Total 16/30 = 8/15. Crossed mistake: 8/30 (only one order).

Only the question goes on the card. Hide the answer and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- Two sets of traffic lights on the way home: green or red at the first, then at the second, a two-stage tree (travel).
- A penalty shootout's first two kicks for one team, each scored or missed: a tree whose branch probabilities are not one half (sport; the ball and goal only).
- A café's mystery meal deal: a random entrée from 4 and a random dessert from 3 gives a 4 × 3 array of 12 equally likely deals (food).

Varied everyday contexts (money, phones, sport, travel, food, games, home, shopping, music). None repeats an anchor in the Year 12 Maths designs (Year 12 s01's die and s02's two-dice table are used here as the syllabus array, not as an anchor), the Year 11 w, c and e designs, the w, c and e pack suggestions, or another g or s pack (grepped, 17 November 2026). Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`, section 8. Resolve logged items before reusing site copy; the site stays read only. No copy error was found in the examples used here.

Decisions for Claude:

- `ci1f69f91f` is partial: the method (array for two equally likely stages, tree for several stages or unequal probabilities) is original teaching.
- Justify "multiply along a branch" by counting ordered outcomes (the 10 × 9 array), because conditional probability and independence come later (s07, s08). The site's "rolls are independent" in lesson01 we-2 uses a word not yet defined; in s06 say "the second roll doesn't depend on the first" and count the array.
- The suppliers example is a good unequal-probability tree; keep part (b) (P(X|defective)) for s07.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
