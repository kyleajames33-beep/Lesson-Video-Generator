# math-a11-s02: How do intersections, unions and Venn diagrams sort overlapping sets?

Brief 243 research pack, 17 November 2026. Preparation for Claude, not design, narration, build or approval. The practice questions below are original HSC-style questions written for HSCScience, not an official marking scheme.

## 1. Exact 2024 syllabus content and entry knowledge

- `cifa472d11` (Sets and set notation): Define the intersection A ∩ B of sets A and B to be the set of elements that are in A and in B [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa829162c5). Site coverage: covered.
- `ci4459a28c` (Sets and set notation): Define the union A ∪ B of sets A and B to be the set of elements that are in A or in B [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa829162c5). Site coverage: covered.
- `cie7ef57c5` (Sets and set notation): Define sets A and B to be disjoint if A ∩ B = ∅, that is, they have no elements in common [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa829162c5). Site coverage: covered.
- `ci7c446d9f` (Sets and set notation): Use Venn diagrams in practical situations to represent and interpret sets that may intersect in various ways within a universal set [NESA](https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa829162c5). Site coverage: covered.

These are CMS codenames, not published content-point codes. Exact HTML and MathML are in the crosswalk and route inputs; quote equations from there.

**Entry knowledge:** math-a11-s01: sets, |A|, the universal set U, complements and subsets.

**Prior video:** math-a11-s01.

**Start:** s01's universal set with two sets that share some elements.

**Stop:** Define A ∩ B (elements in A and in B) and A ∪ B (elements in A or in B, the inclusive or); define disjoint sets (A ∩ B = ∅); draw and read two-set Venn diagrams inside a universal set from practical information, filling the overlap first and checking that the regions add to |U|. The counting rule as a formula is s03.

**Next:** math-a11-s03.

**Spoken maths:** "A intersect B" for A ∩ B and "A union B" for A ∪ B (also "A and B", "A or B" when explaining the meaning); "the empty set".

## 2. Site order, sections and worked examples

Read-only source: [probability-and-data/lesson12.sa.html](https://hscscience.com.au/subjects/maths-advanced/year11/probability-and-data/lesson12.sa.html) (kyleajames33-beep/Teaching-APP at 5d74a627), SHA256 `57d18d97e45a58432cee634d63698d1266ae976eb67e12485998fef2e62d453b`. Title: Intersection, Union and Venn Diagrams. Lesson id maths-adv-y11-m5-l12.

Data-step ids: `recall-your-gut-answer-first`, `and-or-and-the-picture`, `what-you-ll-master`, `intersection-and-union`, `model`, `quick-fire-practice`, `revisit-the-music-and-art`, `practice-mc`, `practice-short-answer`, `review-and-complete`.

### Source probability-and-data/lesson12.sa.html, `we-1`

PROBLEM 1 · INTERSECTION AND UNION Let $A = \{1,2,3,4\}$ and $B = \{3,4,5\}$. Find $A \cap B$, $A \cup B$ and $n(A \cup B)$. 1 Elements in both: 3 and 4, so $A \cap B = \{3,4\}$ 2 Elements in either: $A \cup B = \{1,2,3,4,5\}$ Each element listed once. 3 $n(A \cup B) = 5$ Not $4 + 3 = 7$, because 3 and 4 were shared.

### Source probability-and-data/lesson12.sa.html, `we-2`

PROBLEM 2 · FILLING A VENN DIAGRAM In a group of 50 students, 30 study music, 20 study art and 8 study both. How many study neither? 1 Middle region: $8$ study both 2 Music only $30 - 8 = 22$; art only $20 - 8 = 12$ 3 Neither: $50 - (22 + 8 + 12) = 8$ The four regions must total $n(\xi) = 50$.

### Source probability-and-data/lesson12.sa.html, `we-3`

PROBLEM 3 · DISJOINT SETS Let $P$ be the prime numbers under 10 and $E$ the even numbers under 10 excluding 2. Are $P$ and $E$ disjoint? 1 $P = \{2,3,5,7\}$ and $E = \{4,6,8\}$ 2 Shared elements: none, so $P \cap E = \varnothing$ 3 $P \cap E = \varnothing$, so they are disjoint

### Source probability-and-data/lesson12.sa.html, opening question and short answers

Opening: "Of 10 students, 6 study music and 5 study art. Can you tell how many study both?" (the overlap is at least 1 and at most 5). Q1: 80 people, 45 own a dog, 32 own a cat and 15 own both: dog only 30, cat only 17, neither 18. Q2: $A = \{2,4,6,8\}$, $B = \{1,2,3,4\}$: $A \cap B = \{2,4\}$, $A \cup B = \{1,2,3,4,6,8\}$, $n(A \cup B) = 6$.

Only the parts named in the stop boundary belong to this video.

## 3. Recalculation

- we-1: {3, 4}; {1, 2, 3, 4, 5}; 5. we-2: 22, 8, 12, neither 8. we-3: P ∩ E = ∅.
- Opening: overlap between 6 + 5 - 10 = 1 and 5. Q1: 30, 15, 17, 18. Q2 as quoted. Quick-fire: {2, 5}; {1, 2, 3}; disjoint; 40 - 33 = 7.
- Practice answers below.

Every example above was recalculated with SymPy and Python sets (`work/brief243-gs/verify_s.py`, run with `python -I`, sympy 1.14.0). All site answers match. Keep exact values until the final line; do not change the site's numbers.

## 4. Misconceptions and HSC-style traps

- Swapping ∩ and ∪.
- Reading "or" as "one but not both" (mathematical or is inclusive).
- Writing a shared element twice in a union.
- Putting a circle's total in its "only" region instead of filling the overlap first.
- Forgetting the region outside both circles, so the regions do not add to |U|.
- Thinking disjoint sets must be complements of each other.

These follow from the official content, not claims about how often markers see them.

## 5. Visual needs

- A two-set Venn diagram inside a U rectangle with four labelled regions (A only, both, B only, neither), filled with counts or listed elements, the overlap filled first and the region totals checked against |U|.
- Shading modes for A ∩ B, A ∪ B and a complement, each lit while the narration names it ("A intersect B").
- A disjoint mode: the circles pull apart, the overlap region disappears and the label "A ∩ B = ∅" appears.
- The opening question as a slider: the overlap can be any whole number from 1 to 5, so more information is needed.

HSC-style diagrams: letters and numbers only, no pictures inside regions. All diagrams coded in the shared paper style. Keep every given on screen during a response hold. No painted maths, people or hands. Kit needs: `../../checks/maths-a11-kit-needs-g-s.md`.

## 6. Two original candidate practice questions

### Question 1

Of 60 students, 35 play a team sport, 22 learn an instrument and 9 do both. Draw a Venn diagram and find how many do exactly one of the two activities.

**Worked answer:** Both 9; sport only 35 - 9 = 26; instrument only 22 - 9 = 13; neither 60 - (26 + 9 + 13) = 12. Exactly one: 26 + 13 = 39. Crossed mistake: 35 + 22 = 57.

### Question 2

Let U = {1, 2, 3, …, 12}, A be the multiples of 2 in U and B the multiples of 3 in U. List A ∩ B and A ∪ B. Are A and C = {1, 5, 7, 11} disjoint?

**Worked answer:** A = {2, 4, 6, 8, 10, 12}, B = {3, 6, 9, 12}. A ∩ B = {6, 12}; A ∪ B = {2, 3, 4, 6, 8, 9, 10, 12}. A ∩ C = ∅, so A and C are disjoint. Crossed mistake: A ∪ B listing 6 and 12 twice.

Only the question goes on the card. Hide the answer and any classification until feedback. "Pause here to answer." then a 10-second countdown. Feedback stays brief: answer, key reason, one crossed-out mistake. Answers were checked with SymPy.

## 7. Everyday anchors

- A two-day music festival's line-ups: acts playing Saturday, acts playing Sunday, and the acts playing both days in the overlap (music).
- Two group chats on a phone: contacts in the team chat, contacts in the family chat, and the few in both (phones; names only, no faces).
- A two-scoop ice-cream shop's orders: chocolate, vanilla, and the orders with one of each (food).

Varied everyday contexts (money, phones, sport, travel, food, games, home, shopping, music). None repeats an anchor in the Year 12 Maths designs, the Year 11 w, c and e designs, the w, c and e pack suggestions, or another g or s pack (grepped, 17 November 2026). Claude picks one; none is required. Anchors are drawn as objects, never people.

## 8. Site corrections and decisions for Claude

See `../../site-corrections-maths-a11.md`, section 8. Resolve logged items before reusing site copy; the site stays read only. No copy error was found in this lesson.

Decisions for Claude:

- Use U and |A| on screen (s01's decision); the site's ξ and n(A) are fine to mention once.
- The site's card 06 note that disjoint sets are "mutually exclusive" in probability is a useful forward link for s05; keep it to one sentence.
- s02 and s03 could merge if both run short (route recommendation); the counting rule is the natural cause of "fill the overlap first".

Partial or missing coverage above needs original teaching. Claude selects the exact examples, final length and any further split. Human listening and exact playback remain later gates.
