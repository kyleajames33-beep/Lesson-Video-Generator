# math-a11-s03: Why do we subtract the overlap when counting a union?

Brief 243 research pack, 17 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci5cd67d77` (Sets and set notation): Establish and use the rule |A ∪ B| = |A| + |B| - |A ∩ B| [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa829162c5). Site coverage: covered. Pack note: the site writes the rule with n( ) only.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-s02: two-set Venn diagrams, the overlap filled first, regions adding to |U|.

**Prior video:** math-a11-s02.

**Start:** two set totals that add to more than the whole group (the site's opening: 14 + 16 in a class of 25).

**Stop:** Establish |A ∪ B| = |A| + |B| - |A ∩ B| because adding the totals counts the overlap twice; use it to find any one of the four quantities, the number in neither (|U| - |A ∪ B|) and the disjoint case. Probability starts in s04.

**Next:** math-a11-s04.

**Spoken maths:** "the number of elements in A union B equals the number in A plus the number in B minus the number in A intersect B".

## 2. Site order, sections and worked examples

Read-only source: [probability-and-data/lesson13.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/probability-and-data/lesson13.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `68da3fe3e0bf8c05ecbad8f13aed03bd0eee8f29610836ffc6405f7c995fac38`. Title: The Counting Rule. Lesson id maths-adv-y11-m5-l13.

Data-step ids: `recall-your-gut-answer-first`, `add-then-take-the-overlap`, `what-you-ll-master`, `establishing-the-rule`, `model`, `quick-fire-practice`, `revisit-the-soccer-and-netball`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source probability-and-data/lesson13.sa.html, `we-1`

PROBLEM 1 · FINDING THE UNION In a group, 30 study music, 20 study art and 8 study both. How many study at least one of the two? 1 $n(A \cup B) = n(A) + n(B) - n(A \cap B)$ At least one means the union. 2 $= 30 + 20 - 8$ 3 $= 42$ students The 8 doing both were counted twice, so one copy is removed.

### Source probability-and-data/lesson13.sa.html, `we-2`

PROBLEM 2 · FINDING THE OVERLAP In a class of 25, every student plays soccer or netball or both. 14 play soccer and 16 play netball. How many play both? 1 Everyone plays at least one, so $n(A \cup B) = 25$ 2 $n(A \cap B) = n(A) + n(B) - n(A \cup B)$ 3 $= 14 + 16 - 25 = 5$ students The excess of the sum over the class size is the overlap.

### Source probability-and-data/lesson13.sa.html, `we-3`

PROBLEM 3 · INCLUDING NEITHER Of 80 people, 45 own a dog, 32 own a cat and 15 own both. How many own neither? 1 $n(A \cup B) = 45 + 32 - 15 = 62$ 2 $n(\text{neither}) = 80 - 62$ 3 $= 18$ people. Check: $30 + 15 + 17 + 18 = 80$ ✓

### Source probability-and-data/lesson13.sa.html, card 05 and short answers

Card 05 ("Establishing the rule"): "The $A$ only region is counted once, in $n(A)$. The $B$ only region is counted once, in $n(B)$. But the overlap is counted twice, once in each. ... So subtract one copy of the overlap." Q1: 60 people, 38 French, 27 German, 12 both: 53 speak at least one, 7 neither. Q2: 42 members, 25 chess, 23 bridge, all play at least one: 6 play both.

Only the parts named in the stop boundary belong to this video.

## 3. Recalculation

- we-1: 42. we-2: 5. we-3: 62 and 18; regions 30 + 15 + 17 + 18 = 80.
- Quick check 12 + 9 - 4 = 17. Quick-fire: 14; 5; 15; 12. Q1: 53 and 7. Q2: 6.
- Practice answers below.

Every example above was recalculated with SymPy (`work/brief243-gs/verify_s.py`, run with `python -I`, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Adding |A| + |B| for "at least one".
- Subtracting the overlap twice.
- Rearranging with a sign error (the site's own odd-one-out option A: |A ∩ B| = |A ∪ B| - |A| - |B|).
- Forgetting "neither" when the union is not the whole group.
- Using the rule with the overlap unknown and "everyone does at least one" not stated.

These follow from the official content, not claims about how often markers see them.

## 5. Visual needs

- Two bars of length |A| and |B| laid end to end beside a bar of length |U|: the sum overshoots, and the overshoot is exactly the overlap (the cause before the formula; `StackedTotalBar` style).
- The Venn diagram with each element counted by a tick: overlap elements receive two ticks from |A| + |B|; one tick per overlap element is removed.
- The rule written in the syllabus form |A ∪ B| = |A| + |B| - |A ∩ B|, with n( ) named once as the same thing.
- A four-quantity card showing that any three give the fourth.

HSC-style diagrams: letters and numbers only. All diagrams coded in the shared paper style. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs: `../../checks/maths-a11-kit-needs-g-s.md`.

## 6. Two original candidate practice questions

### Question 1

Of 120 guests at a hostel, 70 booked a tour, 45 hired a bike, and 30 did neither. How many guests booked a tour and hired a bike?

**Worked answer:** |A ∪ B| = 120 - 30 = 90. |A ∩ B| = |A| + |B| - |A ∪ B| = 70 + 45 - 90 = 25. Crossed mistake: 70 + 45 - 120 = -5 (the neither group ignored).

### Question 2

For sets A and B, |A| = 18, |A ∪ B| = 30 and |A ∩ B| = 7. Find |B| and the number of elements in exactly one of the two sets.

**Worked answer:** 30 = 18 + |B| - 7, so |B| = 19. Exactly one: |A ∪ B| - |A ∩ B| = 30 - 7 = 23 (A only 11, B only 12). Crossed mistake: |B| = 30 - 18 = 12.

Only the question goes on the card. Hide the answer and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- A library's borrowers: members who borrowed an ebook, a print book, or both this month; the two totals add to more than the members (leisure).
- A backpacker hostel's guests who booked a tour, hired a bike, or both (travel; matches question 1).
- A school canteen's lunch orders: wraps, smoothies, and orders with both (food).

Varied everyday contexts (money, phones, sport, travel, food, games, home, shopping, music). None repeats an anchor in the Year 12 Maths designs, the Year 11 w, c and e designs, the w, c and e pack suggestions, or another g or s pack (grepped, 17 November 2026; w12's gym and w08's loyalty card were avoided). Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`, section 8. Resolve logged items before reusing site copy; the site stays read only. No copy error was found in this lesson.

Decisions for Claude:

- Write the rule in the syllabus |A| form; say once that n(A) means the same.
- The "establish" is the double count: show it with ticks or bars before the formula.
- This rule divided by |S| becomes the addition rule in s05; plant one forward sentence at most.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
