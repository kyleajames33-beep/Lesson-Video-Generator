# math-a11-s01: How do we describe a collection precisely with set notation?

Brief 243 research pack, 17 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `ci04bd3585` (Sets and set notation): Define a set as a collection of objects, called the elements of the set, and represent a set using notation such as {2,3,5,7} and {0,2,4,6, …} [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa829162c5). Site coverage: covered. Pack note: the site lists only finite sets; an infinite set written with "…" is not shown.
- `ciea6f77dc` (Sets and set notation): Use the notation n(A) or |A| to represent the number of elements in a finite set A [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa829162c5). Site coverage: covered. Note: Site uses n(A); the syllabus allows n(A) or |A|.
- `ci2b2bf2be` (Sets and set notation): Define the empty set as the set with no elements, denoted in set notation as ∅ [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa829162c5). Site coverage: covered.
- `ci2a98c57c` (Sets and set notation): Use the notation A̅, A' or A^c to represent the complement of a set A with respect to some universal set U [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa829162c5). Site coverage: covered. Pack note: the site writes only A' and calls the universal set ξ (xi), not U.
- `ci8e00ae50` (Sets and set notation): Define A to be a subset of B if all the elements of A are elements of B [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa829162c5). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** Years 7 to 10: factors, multiples, primes, even and odd numbers. No earlier Year 11 video is needed.

**Prior video:** math-a11-g06. The playlist changes topic here; s01's opening does not depend on g06's final frame. Probability can be designed in parallel with any other strand.

**Start:** a collection described in words (the even numbers from 1 to 11) and the same collection written in braces.

**Stop:** Define a set and its elements, writing finite and infinite sets in braces ({2, 3, 5, 7}, {0, 2, 4, 6, …}); use n(A) or |A| for the number of elements of a finite set; define the empty set ∅; use A̅, A' or A^c for the complement within a stated universal set U; define a subset. Intersection, union and Venn diagrams are s02.

**Next:** math-a11-s02.

**Spoken maths:** "A complement" or "the complement of A" (the bar, dash and c forms are all read this way); "the number of elements in A" for |A| and n(A); "the empty set"; "A is a subset of B". Do not read |A| as "absolute value of A".

## 2. Site order, sections and worked examples

Read-only source: [probability-and-data/lesson11.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/probability-and-data/lesson11.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `03640a2ccb4d60e33e1c80624211517cc89d6b82df28f8e00dbaf7187f2ce411`. Title: Sets, Elements and Notation. Lesson id maths-adv-y11-m5-l11.

Data-step ids: `recall-your-gut-answer-first`, `a-collection-written-precisely`, `what-you-ll-master`, `writing-sets-and-counting-elements`, `model`, `quick-fire-practice`, `revisit-your-two-sets`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source probability-and-data/lesson11.sa.html, `we-1`

PROBLEM 1 · LISTING AND COUNTING Let $\xi$ be the whole numbers from 1 to 12. Write $A$, the set of multiples of 3 in $\xi$, and find $n(A)$. 1 Multiples of 3 up to 12: 3, 6, 9, 12 2 $A = \{3, 6, 9, 12\}$ 3 $n(A) = 4$

### Source probability-and-data/lesson11.sa.html, `we-2`

PROBLEM 2 · COMPLEMENT With $\xi = \{1,2,3,4,5,6,7,8\}$ and $B = \{2,4,6,8\}$, find $B'$ and verify $n(B) + n(B') = n(\xi)$. 1 $B'$ is everything in $\xi$ not in $B$ 2 $B' = \{1,3,5,7\}$ 3 $n(B) = 4$, $n(B') = 4$, and $4 + 4 = 8 = n(\xi)$ ✓ Every element is in exactly one of $B$ and $B'$.

### Source probability-and-data/lesson11.sa.html, `we-3`

PROBLEM 3 · SUBSET Let $A = \{1,3\}$, $B = \{1,2,3,4\}$ and $C = \{1,3,5\}$. State which of $A \subseteq B$ and $C \subseteq B$ are true. 1 $A$: is 1 in $B$? yes. Is 3 in $B$? yes 2 So $A \subseteq B$ is true 3 $C$: 5 is not in $B$, so $C \subseteq B$ is false

### Source probability-and-data/lesson11.sa.html, card 06 and short answers

Card 06: with $A = \{2,4,6\}$, $A' = \{1,3,5\}$ when $\xi = \{1,\dots,6\}$ but $A' = \{1,3,5,7,8,9,10\}$ when $\xi$ is 1 to 10 ("The complement is never a property of $A$ alone"). Q1: $\xi = \{1, \dots, 10\}$, multiples of 4: $A = \{4, 8\}$, $n(A) = 2$, $A' = \{1,2,3,5,6,7,9,10\}$. Q2: $P = \{2,3,5,7\} \subseteq Q = \{2,3,4,5,6,7\}$, $n(Q) - n(P) = 2$.

Only the parts named in the stop boundary belong to this video.

## 3. Recalculation

- we-1: {3, 6, 9, 12}, 4 elements. we-2: B' = {1, 3, 5, 7}; 4 + 4 = 8. we-3: A is a subset of B; C is not.
- Card 06: both complements as quoted. Q1, Q2 and the quick-fire answers ({3, 5, 7, 9}; {3, 4, 5, 6}; yes; 0) match.
- Practice answers below.

Every example above was recalculated with SymPy and Python sets (`work/brief243-gs/verify_s.py`, run with `python -I`, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Listing a repeated element twice, or thinking order changes a set.
- Taking a complement without a universal set, or within the wrong one.
- Treating "smaller" as "subset" ({1, 9} is not a subset of {1, 2, 3}).
- Thinking ∅ is "nothing" rather than a set with |∅| = 0, or writing {∅} or {0} for it.
- Reading |A| as an absolute value.

These follow from the official content, not claims about how often markers see them.

## 5. Visual needs

- Element tokens dropping into braces: a repeat bounces off, a reordering changes nothing, a count badge reads |A| (and n(A)).
- A universal-set rectangle U with a set region; the complement shaded as "everything in U outside A", and the same A shown in a larger U with a larger complement (card 06's point).
- Subset test: each element of A checked against B with a tick, one cross failing the test (we-3).
- An infinite set {0, 2, 4, 6, …} with the dots meaning "the pattern continues"; |A| applies only to finite sets.

HSC-style diagrams: letters and numbers only, no pictures inside regions. All diagrams coded in the shared paper style. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs: `../../checks/maths-a11-kit-needs-g-s.md`.

## 6. Two original candidate practice questions

### Question 1

Let U = {1, 2, 3, …, 15} and let A be the set of prime numbers in U. List A, find |A|, and list the complement of A.

**Worked answer:** A = {2, 3, 5, 7, 11, 13}, so |A| = 6. A̅ = {1, 4, 6, 8, 9, 10, 12, 14, 15} (9 elements; 6 + 9 = 15). Crossed mistake: including 1 in A.

### Question 2

List the set E of factors of 12 and find |E|. Is {2, 4, 8} a subset of E? Is ∅ a subset of E?

**Worked answer:** E = {1, 2, 3, 4, 6, 12}, |E| = 6. {2, 4, 8} is not a subset, because 8 is not a factor of 12. ∅ is a subset: it has no element that could fail the test. Crossed mistake: "yes, because 2 and 4 are in E".

Only the question goes on the card. Hide the answer and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- Sandwich fillings as a set: {cheese, ham, tomato} is the same set as {tomato, cheese, ham}, and asking for "ham" twice does not add a filling (food).
- Australian states without a coastline: none of the six has one, so the set is ∅ (travel).
- A water polo squad of 13 and its starting seven: the starting seven is a subset of the squad, and the bench is its complement within the squad (sport).

Varied everyday contexts (money, phones, sport, travel, food, games, home, shopping, music). None repeats an anchor in the Year 12 Maths designs (including the s strand's die, calendar, vet visits and parcel), the Year 11 w, c and e designs, or the w, c and e pack suggestions (grepped, 17 November 2026). Claude picks one; none is required. Anchors are drawn as objects (a sandwich, a map outline, caps on a pool deck), never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`, section 8. Resolve logged items before reusing site copy; the site stays read only. No copy error was found in this lesson.

Decisions for Claude:

- Notation on screen follows the syllabus: U for the universal set (the site writes ξ), |A| beside n(A), and all three complement forms A̅, A' and A^c introduced once, then one form used consistently.
- Show one infinite set with "…" (the syllabus example {0, 2, 4, 6, …}); the site has none.
- Set-builder notation is not in the syllabus wording; do not add it.

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
