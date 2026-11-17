# Maths A11 S01: How do we describe a collection precisely with set notation? Sets and elements in braces, finite and infinite sets, |A| and n(A), the empty set, the universal set and the complement, and subsets (design)

Status: Revision 2 (17 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (17 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`) and the accepted Year 11 designs (`math-a11-e08.md`, `c10.md`, `w14.md`; rulings in `../checks/root-acceptance-maths-a11-w01-w14.md`, `-w15-w31.md`, `../checks/root-rulings-maths-a11-c-e-packs.md` and `../checks/root-rulings-maths-a11-t-g-s-packs.md`). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,059 characters by script (see "Narration length estimate"; Revision 2), 13 scene headings, about 463 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (17 Nov 2026): learning review resolved

Review: `../checks/m-a11-s01-learning-review.md` (summary `../checks/m-a11-s01-s11-learning-review-summary.md`), with root's rulings in `../checks/root-rulings-maths-a11-t-g-s-packs.md` and root's resolution brief of 17 Nov. Resolution log: `../checks/m-a11-s01-s11-learning-review-resolution.md`. Findings by the review's numbers:

1. Should fix, scenes 2 and 3 ("finite" used before it is named): **accepted, adapted**. The reviewer's two sentences come straight after the "{0, 2, 4, 6, …}" brace writes, so that each word is heard beside its set: "A set like that is called infinite. A set you could finish counting, like E, is finite." The cues "infinite" and "finite" write the tags "infinite: never ends" and "finite: you can finish counting". Both words now have their plain meanings before scene 3 restricts |A| to finite sets.
2. Optional, scene 3 ("From caps one to twelve"): **applied**. "Let A be the caps that are multiples of three"; task strip "List A, the caps that are multiples of 3, and find |A|". The site's set {3, 6, 9, 12} and |A| = 4 are unchanged.
3. Optional, scene 4 (the states with no coastline): **applied**, reviewer's example. "The months with thirty-two days, for example. There aren't any, so that set is empty too." Chip "months with 32 days = ∅".
4. Optional, scene 6 and A2 (the "not a subset" symbol): **applied as root decided**. The crosswalk writes no symbol for "not a subset", so ⊈ (the struck form of the defined ⊆) replaces ⊄ everywhere: scene 6's "C ⊈ B", feedback 2's "{2, 4, 8} ⊈ E", author note (d) and the number tables. The Notation decision records it. No other s design writes the symbol.

Open decisions closed: see "Open decisions". Joins: scene 1 opens on g06's final frame, which g06 Revision 2 left unchanged, so the join is exact; scene 12 is still s02's opening frame. Changed and new values are rechecked in `work/brief-resolve-s/verify.py` (SymPy 1.14 and fractions, `python -I`).

Narration 5,059 characters by script (Revision 1: 5,015), about 463 s with holds; speech before the notes about 375 s, under the 570 s cap. Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. Nothing recorded; human listening pending.

Scope: eightieth video of Year 11 Mathematics Advanced (2024), outline order 80, Probability and data (Sets and set notation); the first video of the strand. Pre-design pack: `../pre-design/maths-a11/math-a11-s01.md` (brief 243). Site lesson (read through the pack's quotations, read only): `probability-and-data/lesson11.sa.html` (`we-1`, the multiples of 3 from 1 to 12, |A| = 4; `we-2`, a complement within U = {1, ..., 8} with 4 + 4 = 8; `we-3`, {1, 3} ⊆ {1, 2, 3, 4} but {1, 3, 5} is not; card 06's point that a complement depends on U; all with their numbers). Route entry: `math-a11-s01` in `../../programme/maths-a11-route-inputs-5.json`. Visual system: maths studio kit; a painted rail of water polo caps (prefix `ma11-`), and s02's painted ice-cream cabinet and cone for the handoff; every brace, token, rectangle and count coded, HSC style (letters and numbers only inside regions).

Owner rules applied: 2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (sport: a water polo team's numbered caps), Australian spelling, no em dashes, set symbols spoken in words, conversational narration.

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Probability and data, Sets and set notation), quoted from `../../programme/maths-a11-route-inputs-5.json`:

- `ci04bd3585`: "Define a set as a collection of objects, called the elements of the set, and represent a set using notation such as {2,3,5,7} and {0,2,4,6, …}"
- `ciea6f77dc`: "Use the notation n(A) or |A| to represent the number of elements in a finite set A"
- `ci2b2bf2be`: "Define the empty set as the set with no elements, denoted in set notation as ∅"
- `ci2a98c57c`: "Use the notation A̅, A' or A^c to represent the complement of a set A with respect to some universal set U"
- `ci8e00ae50`: "Define A to be a subset of B if all the elements of A are elements of B"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa829162c5

**Boundary:** starts from g06's final frame exactly (as written in `math-a11-g06.md` Revision 1, scene 11, and unchanged in g06 Revision 2: a coded frame, no plate; at the left a 260 px grey badge of the delivery circle with the caption "every point exactly 5 km from the store: a collection"; at the centre the words "the even numbers from 1 to 11" in the hand font, 52 px; at the right an empty pair of braces "{ }" with a "?" inside; chips "a collection, written precisely?", "Next: sets and set notation", "?"). Needs no earlier Year 11 video (Years 7 to 10: factors, multiples, primes, even and odd numbers). Teaches: a set as a collection of objects called elements, written in braces, each element once, in any order (`ci04bd3585`); a finite set and an infinite set written with "…" ({0, 2, 4, 6, …}, the syllabus example; the site has none); |A| for the number of elements of a finite set, with n(A) named once and |A| never read as absolute value (`ciea6f77dc`); the empty set ∅ with |∅| = 0, not {0} or {∅} (`ci2b2bf2be`); the universal set U and the complement A̅ (with A′ and A^c named once), and that the complement depends on U (`ci2a98c57c`); subsets, tested element by element, with ∅ a subset of every set (`ci8e00ae50`). Stops at single sets and subsets. Not taught: intersection, union and Venn diagrams (s02); set-builder notation (not in the syllabus wording; pack decision).

## Decisions

- **Anchor: a water polo team's thirteen numbered caps hanging on a pool fence (painted plate with coded numbers, live).** Caps 1 to 13 are a universal set you can see; "the even caps", "caps that are multiples of 3", "caps numbered above 13" (empty), "the starting seven" (a subset) and "the bench" (its complement) are all natural collections of the same objects, so one picture carries every syllabus point. Sport; the pack's anchor 3. No Year 11 or Year 12 Maths design uses water polo (grep 17 Nov 2026: no hits). The plate shows caps only, no people; the numbers are coded over the caps (plates carry no numbers).
- **The g06 join.** g06's final frame (written by another designer, Revision 1) is followed exactly: the words "the even numbers from 1 to 11" fill their braces in the first sentence, and the caps arrive in the hook's second half. This is also the pack's start boundary.
- **Notation (root ruling 9).** U for the universal set; |A| on screen, with "n(A)" said once as the same thing; the complement introduced in all three forms A̅, A′ and A^c, then A̅ used consistently (s02 to s05 use it); ⊆ for "is a subset of" and ⊈ for "is not a subset of" (root's decision of 17 Nov: the crosswalk writes no symbol for "not a subset", so the struck form of the defined ⊆ is used, here and anywhere later in the strand). Spoken: "the number of elements in A", "A complement", "the empty set", "A is a subset of B". The bars are never called absolute value.
- **Simulations (standard item 3).**
  1. **Elements into braces** (scenes 1, 2): number tokens fly from the caps into braces; a repeated 6 bounces off the brace and fades; shuffling the tokens' order leaves an "= same set" check lit.
  2. **Count badge** (scene 3): a badge "|E| = n" counts up as each element lands; for {0, 2, 4, 6, …} the badge spins without settling and a grey tag reads "no finite count".
  3. **Complement fill** (scene 5): the U rectangle of 13 caps; S lights blue, the rest fill amber; the rectangle then shrinks to caps 1 to 10 and the amber set shrinks with it.
  4. **Subset test** (scene 6): each element of a candidate set flies to B and gets a tick or a cross; one cross fails the whole set.
- **Colour roles (fixed for the s strand from here).** A set A **blue**; a second set B **teal**; the complement **amber**; U in ink; answer green; mistake red, crossed slips only. (s02 adds violet for intersections.)
- **Large type, handwritten voice.** Elements 52 px; hand tags: "element", "each element once", "any order", "the pattern continues", "infinite: never ends", "finite: you can finish counting", "|A|: count, not absolute value", "finite only", "no elements", "{0} ≠ ∅", "everything we're talking about", "everything in U not in A", "depends on U", "test every element", "smaller isn't enough", "nothing can fail".
- **Stage changes (standard item 2).** The g06 frame and the caps (1); braces and elements (2); counting and the infinite set (3); the empty set (4); U and the complement (5); the subset test (6); framed card (7); question cards (8 to 11); the ice-cream frame for s02 (12); key notes (13).
- **Worked examples (g01 layout).** 3: site `we-1` as caps (U = caps 1 to 13; the multiples of 3 up to 12 are the site's set, unchanged). 5: card 06's idea (the same S in two universal sets), with site `we-2`'s check |S| + |S̅| = |U|. 6: site `we-3` (numbers unchanged) and the pack's "{1, 9} is not a subset of {1, 2, 3}". Crossed slips: "{6, 2, 6, 4}" with a repeat (2), "{0}" for the empty set (4), "{1, 9} ⊆ {1, 2, 3}: it's smaller" (6).
- **Memory aid.** Framed card: "Braces list each element once, in any order. |A| counts them." Second line: "Complement: everything in U that's not in A."
- **Visual surprise.** The complement shrinking: the same starting seven has a bench of six caps, then of three, just because U changed.
- **Site notes (pack section 8).** No copy error in lesson11. The site writes ξ, n(A) and A′; the screen writes U and |A|, and uses A̅ after naming all three. The infinite set {0, 2, 4, 6, …} is added (the site lists only finite sets). Set-builder notation is not added.
- **Plain meanings at first use.** Set ("a collection of objects"); element ("one object in the set"); finite ("you could finish counting it"); infinite ("it goes on forever"); universal set ("everything we're talking about"); complement ("everything in U that's not in A"); subset ("every element of A is also in B").
- **Attempts (pack questions).** A1: U = {1, 2, ..., 15}, A the primes: A = {2, 3, 5, 7, 11, 13}, |A| = 6, A̅ = {1, 4, 6, 8, 9, 10, 12, 14, 15}; crossed "1 in A". A2: E the factors of 12: {1, 2, 3, 4, 6, 12}, |E| = 6; {2, 4, 8} ⊈ E; ∅ ⊆ E; crossed "{2, 4, 8} ⊆ E: 2 and 4 are in E".
- **Mistake scene:** none separate. A repeat or an order change taken as a new set (2 crossed); |A| read as absolute value (3 tag); ∅ written as {0} or {∅} (4 crossed); a complement without U, or in the wrong U (5); "smaller" taken as "subset" (6 crossed); partial checks of a subset (A2 crossed); 1 taken as prime (A1 crossed).
- **Cause chain taught, in order:** (1) words can be vague, so a set lists exactly what is in it (1); (2) a set records which objects are in it, so order and repeats change nothing (2); (3) counting needs a finite list, so |A| applies to finite sets (3); (4) a description can pick out nothing, and that is still a set, with zero elements (4); (5) "not in A" only makes sense against everything under discussion, so the complement depends on U, and A and A̅ share out U (5); (6) "subset" is a test on every element, so one failure is enough, and the empty set has nothing to fail (6).
- **Entry knowledge (route):** Years 7 to 10 (factors, multiples, primes, even and odd numbers). No earlier Year 11 video.
- **What later videos rely on.** s02 starts from U, braces, |A| and A̅; s03 uses |A| in the counting rule; s04 calls an event a subset of the sample space; s05 uses |A| + |A̅| = |U| (scene 5's check).
- **Handoff (to math-a11-s02, "How do intersections, unions and Venn diagrams sort overlapping sets?").** Scene 12: the painted ice-cream cabinet (`ma11-icecream-cabinet-v1.png`, 520 px) at the left; the two-scoop cone plate (`ma11-cone-choc-vanilla-v1.png`, 360 px) at the centre; braces "C = { cones with a chocolate scoop }" (blue) and "V = { cones with a vanilla scoop }" (teal) at the right; chips "this cone: in C? in V?", "Next: sets that overlap", "?". This is s02's opening frame (as written in `math-a11-s02.md`).
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Caps U = {1, ..., 13}; E (even) = {2, 4, 6, 8, 10, 12}, |E| = 6; multiples of 3 = {3, 6, 9, 12}, 4; above 13 = ∅.
  (b) "Caps 1 to 7 start in the pool" is stated as a supposition ("Say"), not a rule of water polo.
  (c) S = {1, ..., 7}; S̅ in U = {8, ..., 13}, 6 elements; in U′ = {1, ..., 10}: {8, 9, 10}.
  (d) we-3: {1, 3} ⊆ {1, 2, 3, 4}; {1, 3, 5} ⊈; {1, 9} ⊈ {1, 2, 3}.
  (e) A1: 6 + 9 = 15. A2: 8 is not a factor of 12.
  (f) Pronunciations: "the number of elements in E"; "n of E"; "S complement"; "A is a subset of B"; "the empty set".

Main question: *How do we describe a collection precisely with set notation? Which caps are even, which are on the bench, and is the starting seven inside the squad?*
Entry knowledge (Years 7 to 10): factors, multiples, primes, even and odd numbers.
Stops after: sets and elements, finite and infinite sets, |A|, ∅, U and the complement, and subsets. No ∩, ∪ or Venn diagrams.
Handoff: math-a11-s02: "a cone with a chocolate scoop and a vanilla scoop: which set does it belong to?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): A blue, B teal, complement amber, U ink, answer green, mistake red. Header strip "MATHEMATICS ADVANCED · PROBABILITY AND DATA". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: from words to braces
> Here's a collection described in words, the even numbers from one to eleven. Written in braces, it's two, four, six, eight and **ten**. Each number inside is called an element, and the whole collection is called a set. Words can be vague, but braces show exactly what's in. Here's a set you can actually see. A water polo team's caps hang on the pool fence, numbered one to thirteen. Which caps are even? Two, four, six, eight, ten and **twelve**. So how do we describe a collection precisely, with set **notation**?

Visual: opens on g06's final frame exactly (the grey delivery-circle badge with "every point exactly 5 km from the store: a collection"; "the even numbers from 1 to 11" in the hand font at the centre; empty braces "{ }" with "?" at the right; chips "a collection, written precisely?", "Next: sets and set notation", "?"). The "Next" chip fades; the badge fades. On "ten" the "?" leaves the braces and the tokens 2, 4, 6, 8, 10 drop in (blue, 52 px): "{2, 4, 6, 8, 10}"; tags "element" (on the 6) and "set" (on the braces). Stage change on "Here's a set you can actually see": the caps plate (`ma11-polo-caps-v1.png`, 1,300 px wide) slides in across the top, its 13 caps carrying coded numbers 1 to 13. On "twelve" the even caps ring blue in turn and their tokens fly into a new brace "E = {2, 4, 6, 8, 10, 12}". On "notation" heading "Sets and set notation" writes on, and the question chip "How do we write a collection precisely?" moves to the top right.

### 2. sets and elements
> A set is a collection of objects, called the elements of the set. We name a set with a capital letter, and list its elements inside braces, separated by commas. Call the even caps E. Order doesn't matter, so twelve, ten, eight, six, four, two is the same **set**. And repeats don't count. Writing six twice doesn't give you another cap, so each element is listed **once**. A set records which objects are in it, not how often, and not in what order. Some sets never end. The even numbers starting from zero are zero, two, four, six, and so on. We write the first few, then three dots, which mean the pattern **continues**. A set like that is called **infinite**. A set you could finish counting, like E, is **finite**.

Visual: stage change: the caps shrink to a strip at the top (300 px tall). Definition card, 44 px: "A set is a collection of objects, called the elements of the set." The brace "E = {2, 4, 6, 8, 10, 12}" (52 px) at the centre. On "set" (second) the tokens shuffle into "{12, 10, 8, 6, 4, 2}" and an "= same set" check lights; tag "any order". On "once" a second 6 token flies at the brace, bounces off and fades; a red slip "{6, 2, 6, 4, ...}" writes and is crossed, tag "each element once". On "continues" a second brace writes "{0, 2, 4, 6, …}" with the dots drawn last, tag "the pattern continues". On "infinite" the hand tag "infinite: never ends" writes beside "{0, 2, 4, 6, …}". On "finite" the tag "finite: you can finish counting" writes beside E.

### 3. counting elements
> The number of elements in a finite set is written with vertical bars around its name. So the number of elements in E is six. Some books write n of E instead, and that means the same thing. These bars around a set don't mean absolute value. They count. Now try one. Let A be the caps that are multiples of three. That's three, six, nine and twelve, so the number of elements in A is **four**. For an infinite set, like zero, two, four, six and so on, there's no final count, so we only use this for finite **sets**.

Visual: stage change: g01 board: task strip "List A, the caps that are multiples of 3, and find |A|"; equation strip "|A| = the number of elements in A"; grey chip "n(A) means |A|"; tag "|A|: count, not absolute value". Count badge: "|E| = 6" counts up as E's tokens light. The caps strip lights 3, 6, 9, 12 blue; row "A = {3, 6, 9, 12}"; on "four" the green frame "|A| = 4". On "sets" the infinite brace returns with its badge spinning "|…| = ?", tag "finite only".

### 4. the empty set
> What about the caps numbered above thirteen? There aren't any. That's still a set. It just has no elements. It's called the empty set, and it has its own symbol, a circle with a line through it. The number of elements in the empty set is **zero**. Lots of descriptions pick out nothing. The months with thirty-two days, for example. There aren't any, so that set is empty too. Don't write it as braces around a zero. That's a set with one element, the number zero, so it isn't empty at **all**.

Visual: stage change: the caps strip at the top, with an empty hook after cap 13 ringed grey. A brace "{ }" stays empty; on "symbol" the symbol "∅" (56 px) writes beside it, tag "no elements". On "zero" row "|∅| = 0" (green frame). On "thirty-two days" a small grey chip "months with 32 days = ∅" writes beside it. On "all" a red slip "{0}" writes and is crossed, caption "{0} has one element", tag "{0} ≠ ∅".

### 5. the universal set and the complement
> Now say caps one to seven start in the pool. Call that set S. Everything we're talking about here is the thirteen caps. That's called the universal set, and it's written U. The complement of S is everything in U that's not in S, so caps eight to thirteen, the bench. It can be written S with a bar over it, S dash, or S with a little c, and all three are read S **complement**. We'll use the bar. Every cap is in exactly one of S and S complement, so seven plus six is **thirteen**. And the complement depends on U. If U were only caps one to ten, S complement would be just eight, nine and ten. Same S, smaller U, smaller **complement**.

Visual: stage change: a U rectangle (1,300 × 520 px, ink) holding the 13 cap tokens in two rows, label "U = {1, 2, ..., 13}", tag "everything we're talking about". Complement fill: caps 1 to 7 light blue inside an outline "S"; the rest fill amber, label "S̅ = {8, 9, 10, 11, 12, 13}", tag "everything in U not in S". On "complement" (first) three labels write side by side "S̅", "S′", "Sᶜ" with the first circled, tag "all read 'S complement'". On "thirteen" row "|S| + |S̅| = 7 + 6 = 13 = |U|" (green frame). The rectangle shrinks to caps 1 to 10; on "complement" (last) the amber set shrinks to "S̅ = {8, 9, 10}", tag "depends on U".

### 6. subsets
> Every cap in the starting seven is one of the thirteen, so S is a subset of U. In general, A is a subset of B if all the elements of A are elements of B. We write it with this curved symbol. To check, test every element. Let A be one and three, and B be one, two, three, four. Is one in B? Yes. Is three in B? Yes. So A is a subset of B. Now let C be one, three, five. Five isn't in B, so C is not a **subset**. One failure is enough. And being smaller isn't enough either. One and nine is a small set, but nine isn't in one, two, three, so it's not a **subset**. Finally, the empty set is a subset of every set, because it has no element that could fail the **test**.

Visual: stage change: definition card, 44 px: "A is a subset of B (A ⊆ B) if all the elements of A are elements of B." The U rectangle shrinks to a badge with S inside, chip "S ⊆ U". Subset test board: "B = {1, 2, 3, 4}" (teal); "A = {1, 3}" (blue): each token flies to B and gets a green tick, row "A ⊆ B ✓"; tag "test every element". "C = {1, 3, 5}": 1 and 3 tick, 5 bounces off with a red cross; on "subset" (first) row "C ⊈ B" (green frame on the verdict). On "subset" (second) a red slip "{1, 9} ⊆ {1, 2, 3}: it's smaller" writes and is crossed, tag "smaller isn't enough". On "test" row "∅ ⊆ B", tag "nothing can fail".

### 7. memory aid
> Here's the summary. Braces list each element once, in any order. Bars around a set count its elements. And the complement is everything in U that's not in the **set**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the cap rectangle with S blue and S̅ amber. Main line, hand font 56 px: "Braces list each element once, in any order. |A| counts them." On "set" the key line, 40 px: "Complement: everything in U that's not in A." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. Let U be the whole numbers from one to fifteen, and let A be the set of prime numbers in U. List A, find the number of elements in A, and list the complement of A. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Let U = {1, 2, 3, …, 15} and let A be the set of prime numbers in U. List A, find |A|, and list the complement of A." The full question stays on screen. Picture slot: the numbers 1 to 15 as plain tokens inside a rectangle "U", none lit. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> The primes up to fifteen are two, three, five, seven, eleven and thirteen. So A has six **elements**. The complement is everything else in U, one, four, six, eight, nine, ten, twelve, fourteen and fifteen. That's nine elements, and six plus nine is **fifteen**. Putting one in A is the slip. One isn't prime.

Visual: the card shrinks to the top (30 px). The tokens light: primes blue, the rest amber. Rows, 44 px: "A = {2, 3, 5, 7, 11, 13}"; on "elements" the green frame "|A| = 6"; "A̅ = {1, 4, 6, 8, 9, 10, 12, 14, 15}"; on "fifteen" the check "6 + 9 = 15 = |U| ✓". On "the slip" a red slip "1 ∈ A" (written "A = {1, 2, 3, ...}") writes and is crossed, caption "1 isn't prime". Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. List the set E of factors of twelve, and find the number of elements in E. Is the set two, four, eight a subset of E? Is the empty set a subset of E? Pause here to answer.

Visual: `QuestionCard`, 40 px: "List the set E of factors of 12 and find |E|. Is {2, 4, 8} a subset of E? Is ∅ a subset of E?" Picture slot: an empty brace "E = { }". Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> The factors of twelve are one, two, three, four, six and twelve, so E has six elements. Two and four are in E, but eight isn't a factor of twelve, so two, four, eight is not a **subset**. The empty set is a subset, because it has no element that could **fail**. Saying yes because two and four are in E is the slip. Every element has to pass.

Visual: the card shrinks to the top. Rows, 44 px: "E = {1, 2, 3, 4, 6, 12}", "|E| = 6". The tokens 2, 4, 8 fly at E: 2 and 4 tick, 8 crosses; on "subset" the green frame "{2, 4, 8} ⊈ E". On "fail" the green frame "∅ ⊆ E". On "the slip" a red slip "{2, 4, 8} ⊆ E: 2 and 4 are in E" writes and is crossed, caption "every element must pass". Hold about 1 s.

### 12. handoff
> Sets get more interesting when they share elements. Here's an ice-cream shop. Some cones are all chocolate, some are all vanilla, and some are neither. Let's sort its cones into two sets, C, the cones with a chocolate scoop, and V, the cones with a vanilla scoop. Now here's a cone with one scoop of each. Which set does it belong **to**?

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the ice-cream cabinet plate (`ma11-icecream-cabinet-v1.png`, 520 px) at the left. Braces write as spoken at the right: "C = { cones with a chocolate scoop }" (blue), "V = { cones with a vanilla scoop }" (teal). On "one scoop of each" the cone plate (`ma11-cone-choc-vanilla-v1.png`, 360 px) appears at the centre. On "to" chips "this cone: in C? in V?", "Next: sets that overlap" and "?". Hold about 2 s. This is s02's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- A set lists its elements in braces, once each, in any order: {2, 4, 6}.
- Infinite set: {0, 2, 4, 6, …}.
- |A| (or n(A)): the number of elements in a finite set A.
- Empty set ∅: no elements, |∅| = 0.
- A̅ (A′, Aᶜ): everything in U not in A. A ⊆ B: every element of A is in B.

Memory aid (framed card, right side, as in scene 7): *Braces list each element once, in any order. |A| counts them.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and s02's opening frame.

## Teaching checks

- **Does it explain causes?** Why braces: words can be vague (1). Why order and repeats don't matter: a set records which objects are in it (2). Why |A| is for finite sets: there must be a final count (3). Why ∅ is a set: a description can pick out nothing (4). Why the complement depends on U: "not in A" needs a whole (5). Why one failure breaks a subset: "all the elements" (6).
- **Misconceptions addressed:** repeats or order (2 crossed); |A| as absolute value (3 tag); {0} for ∅ (4 crossed); a complement without U (5); "smaller" as "subset" (6 crossed); a partial subset check (A2 crossed); 1 as prime (A1 crossed).
- **Visual standard, item by item:** 1 the caps from the hook (after g06's frame), back in 3 to 5; 2 a new stage every 30 to 55 s; 3 elements into braces, the count badge, the complement fill, the subset test; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 board in 3, rows in 5 and 6; 8 framed card and five bullets; 9 the complement shrinking with U.
- **One idea at a time:** braces (1), sets and elements (2), counting (3), ∅ (4), U and complement (5), subsets (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 23 s and 25 s.
- **Avoided double teaching:** none needed (first video of the strand); Years 7 to 10 primes and factors are used, not taught.
- **Syllabus coverage:** `ci04bd3585` (1, 2; key notes 1, 2); `ciea6f77dc` (3, A1, A2; key note 3); `ci2b2bf2be` (4, A2; key note 4); `ci2a98c57c` (5, A1; key note 5); `ci8e00ae50` (6, A2; key note 5).
- **Out of scope by design:** ∩, ∪ and Venn diagrams (s02); set-builder notation.

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1, original, HSC style, 2 marks suggested, not an official marking scheme).** "Let U = {1, 2, 3, …, 15} and let A be the set of prime numbers in U. List A, find |A|, and list the complement of A."
Model answer: A = {2, 3, 5, 7, 11, 13}, |A| = 6. A̅ = {1, 4, 6, 8, 9, 10, 12, 14, 15} (9 elements; 6 + 9 = 15). Classic mistake (crossed): 1 included in A.

**Attempt 2 (scene 10; pack question 2, original, HSC style, 2 marks suggested).** "List the set E of factors of 12 and find |E|. Is {2, 4, 8} a subset of E? Is ∅ a subset of E?"
Model answer: E = {1, 2, 3, 4, 6, 12}, |E| = 6. {2, 4, 8} is not a subset (8 is not a factor of 12). ∅ is a subset of E (it has no element that could fail). Classic mistake (crossed): "yes, because 2 and 4 are in E".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Words to braces | {2, 4, 6, 8, 10} | 1 |
| Caps | U = {1, ..., 13}; E = {2, 4, 6, 8, 10, 12}, |E| = 6 | 1 to 3 |
| we-1 | {3, 6, 9, 12}, |A| = 4 | 3 |
| Infinite set | {0, 2, 4, 6, …} | 2, 3 |
| Empty set | caps above 13: ∅, |∅| = 0 | 4 |
| Complement | S = {1, ..., 7}; S̅ = {8, ..., 13}; 7 + 6 = 13; in {1, ..., 10}: {8, 9, 10} | 5 |
| we-3 | {1, 3} ⊆ {1, 2, 3, 4}; {1, 3, 5} ⊈; {1, 9} ⊈ {1, 2, 3} | 6 |
| A1 | 6 primes; 9 in the complement | 8, 9 |
| A2 | 6 factors; {2, 4, 8} ⊈ E; ∅ ⊆ E | 10, 11 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with Python sets and SymPy 1.14 (17 Nov 2026, scratchpad `s-designs/verify.py`); Codex to re-check.

- Even numbers 1 to 11: {2, 4, 6, 8, 10}. Even caps 1 to 13: 6 elements. Multiples of 3 in 1 to 12: {3, 6, 9, 12}.
- {1, ..., 13} minus {1, ..., 7}: {8, ..., 13}, 6 elements. {1, ..., 10} minus {1, ..., 7}: {8, 9, 10}.
- {1, 3} ⊆ {1, 2, 3, 4}: true; {1, 3, 5} ⊆ {1, 2, 3, 4}: false; {1, 9} ⊆ {1, 2, 3}: false.
- Primes ≤ 15: {2, 3, 5, 7, 11, 13}; complement in {1, ..., 15}: 9 elements.
- Factors of 12: {1, 2, 3, 4, 6, 12}; {2, 4, 8} ⊆: false; ∅ ⊆: true.

## Memory aid check

- **"Braces list each element once, in any order. |A| counts them."** Original. Meaning, as said in scene 7. Assumptions checked: |A| is for finite sets (scene 3 and key note 3 say so; the card speaks of listing, which an infinite set does only with "…"). Second line: the complement is relative to U (scene 5). It helps a new case: A1.
- **Considered, not used:** "a set is a bag of things" (a bag can hold repeats, which is the wrong picture).

## Narration length estimate

Revision 2 recount (narration blockquotes, bold markers removed; `work/brief-resolve-s/count.py`, which reproduces e08's 5,632): 5,059 characters (Revision 1: 5,015). At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 18 s of settling (tokens into braces, the complement fill and shrink, the subset test) and the 45 s notes scene: about 463 s. Characters per scene (1 to 13): 504, 698, 506, 486, 626, 656, 163, 196, 300, 181, 334, 334, 75. Speech before the notes is about 375 s, under the 570 s cap. Feedback speech: about 23 s and 25 s.

Reserve trims if the voiced take runs long: scene 6's "{1, 9}" sentence pair (keep the crossed slip); scene 5's "We'll use the bar" (keep the circle).

## Scene list and build ids

Lesson key `m-a11s01` (route math-a11-s01). Explainer folder `src/explainer/lessons/math-a11-s01`; build inputs in `docs/production/claude-pm/lessons/math-a11-s01/` (at voicing).

In order (13 scene headings): hook-words-to-braces, sets-and-elements, counting-elements, empty-set, universal-set-complement, subsets, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 40 s | 1 | g06's frame; the caps |
| 40 to 85 s | 2 | Braces and elements |
| 85 to 130 s | 3 | Counting; the infinite set |
| 130 to 160 s | 4 | The empty set |
| 160 to 220 s | 5 | U and the complement |
| 220 to 280 s | 6 | The subset test |
| 280 to 295 s | 7 | Framed memory card |
| 295 to 375 s | 8 to 11 | Question cards and countdowns, then feedback |
| 375 to 395 s | 12 | The ice-cream frame for s02 |
| 395 to 440 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: g06's last frame continues into 1; 1 to 2 the caps shrink to a strip; 2 to 3 stage change to the board; 3 to 4 stage change; 4 to 5 stage change to the U rectangle; 5 to 6 stage change; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11-s01-learning-review.md`, `science_check` = `checks/m-a11-s01-maths-check.md`.

## Assets

Inspected before choosing (17 Nov 2026, `public/assets/maths`, file list): no water polo, cap or ice-cream plate exists.

Need (painted, new; see the Codex asset brief): `ma11-polo-caps-v1.png` (1 to 6). The handoff's `ma11-icecream-cabinet-v1.png` and `ma11-cone-choc-vanilla-v1.png` are briefed in s02's asset brief and must be painted before the s01 build.

Coded: cap numbers (from the sidecar), braces, tokens, the U rectangle, badges, rows, cards, countdown, hand tags, key notes.

### Studio kit use and additions

Uses: `WorkingBoard`, `TaskStrip`, `EquationStrip`, `PlateImg`, `HandTag`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`, `VennDiagram` (s02's addition; here only its U rectangle and complement shading).

Additions:
1. **`SetBraces`** (kit list item 7): element tokens dropping into braces in order; a repeat bounces off; a reorder lights "= same set"; a count badge |A| (spinning for an infinite set with "…"); a subset-test mode in which each token flies to a target set and gets a tick or a cross. Check: the badge equals the number of distinct tokens in the braces at every frame.
2. **Numbered overlay on a plate** (small): coded numbers placed on each cap from the sidecar's cap centres, with per-cap ring highlights.

## Codex asset brief (Maths A11 S01, a rail of water polo caps)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-s01.md`. Paint after the learning review and maths check pass and root gives the go-ahead, and before the s01 build. Save to `public/assets/maths/`. Transparent PNG with a true alpha channel; ink and watercolour in the house style, matched to `maths/ma11-jellybean-jar-v1.png`; no text, numbers, signs, logos, people, hands, faces, glow or shadow. Never stretch.

1. `ma11-polo-caps-v1.png` (3000 × 900 px): thirteen water polo caps hanging by their chin straps from a single horizontal pool-fence rail, seen front-on, evenly spaced in one row: eleven navy caps and, at positions 1 and 13 (the two ends), red goalkeeper caps; each cap with plain round ear guards and a clear, unmarked area on its side where a number would go (code adds the numbers 1 to 13). A strip of pale pool tiles behind the rail. No numbers or lettering.

Sidecar JSON (`ma11-polo-caps-v1.json`): the pixel centre of each cap's number area, in order 1 to 13 from the left, and each cap's bounding box. Also confirm `ma11-icecream-cabinet-v1.png` and `ma11-cone-choc-vanilla-v1.png` (s02's brief) are painted before this build. Report inspection on the paper background (`#f6f1e7`) at 900 px and full width, and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-s01-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quotes match the route-inputs JSON exactly.
3. Confirm the notation follows root ruling 9 (U; |A| with n(A) named once; A̅, A′ and Aᶜ introduced once, then A̅), that |A| is never called absolute value, and that no set-builder notation appears.
4. Confirm the infinite set {0, 2, 4, 6, …} appears and that |A| is restricted to finite sets.
5. Confirm both attempts carry every demand and neither card nor picture shows an answer.
6. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its Visual in spoken order, that scene 1 opens on g06's final frame (scene 11, unchanged in Revision 2) and that scene 12 is s02's opening frame.

## YouTube metadata (draft)

Title: Sets, Elements, Complements and Subsets | Year 11 Maths Advanced

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/probability-and-data/lesson11.sa.html

A water polo team's caps hang on the pool fence, numbered 1 to 13. Which are even, which are on the bench, and is the starting seven inside the squad? Learn to write sets in braces, count elements with |A| (or n(A)), write an infinite set, use the empty set ∅, find a complement within a universal set U, and test whether one set is a subset of another. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Probability and data.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Define a set as a collection of objects, called the elements of the set, and represent a set using notation such as {2,3,5,7} and {0,2,4,6, …}"
"Use the notation n(A) or |A| to represent the number of elements in a finite set A"
"Define the empty set as the set with no elements, denoted in set notation as ∅"
"Use the notation A̅, A' or A^c to represent the complement of a set A with respect to some universal set U"
"Define A to be a subset of B if all the elements of A are elements of B"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa829162c5

Builds on: Circles by translation (the previous video; this one starts a new topic). Next: Intersection, union and Venn diagrams.

#Year11Maths #MathsAdvanced #SetNotation #HSCScience

## Open decisions

All three are closed in Revision 2: 1 because g06 Revision 2 left its final frame unchanged, so scene 1's opening is exact; 2 by root ruling 36 (the 65-character title is now the YouTube title); 3 by the review (keep the supposition). The Revision 1 text is kept below for the record.

- **1. The g06 join (root, and the g06 designer if g06 changes).** Scene 1 opens on g06 Revision 1's scene 11 frame as written today. If g06's frame changes in review, only scene 1's first two sentences and its opening Visual change here.
- **2. Title length (root).** The title is 96 characters; under 100 but long. A shorter alternative: "Sets, Elements, Complements and Subsets | Year 11 Maths Advanced" (65).
- **3. "Say caps one to seven start" (learning review).** Water polo starting caps are a convention, not a rule; the narration frames it as a supposition. Check that this reads naturally.

## Review notes

- Revision 2: the independent learning review (`../checks/m-a11-s01-learning-review.md`, should-fix, 0 blockers) is resolved; see "Revision 2" at the top. Next: the Codex maths check and error check, then voicing and a build to grade A.
- Revision 1 (superseded note): Revision 1 has had no independent review. Next: student learning review (trace from Years 7 to 10 number facts; check that braces feel like a cure for vague words, that "the bars count" is heard, that {0} against ∅ is clear, and that the shrinking complement makes "depends on U" visible), then the Codex maths check and error check, then voicing on the Google voice and a build to grade A.
