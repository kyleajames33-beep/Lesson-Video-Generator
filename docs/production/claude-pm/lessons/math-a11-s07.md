# Maths A11 S07: How does knowing B happened change the probability of A? Restricting the sample space, P(A|B) = |A ∩ B|/|B| and hence P(A ∩ B)/P(B), two-way tables, trees, and keeping P(A|B) and P(B|A) apart (design)

Status: Revision 1 (17 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`) and the accepted Year 11 designs (`math-a11-e08.md`, `c10.md`, `w14.md`; rulings in `../checks/root-acceptance-maths-a11-w01-w14.md`, `-w15-w31.md`, `../checks/root-rulings-maths-a11-c-e-packs.md` and `../checks/root-rulings-maths-a11-t-g-s-packs.md`). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,205 characters by script (see "Narration length estimate"), 13 scene headings, about 475 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: eighty-sixth video of Year 11 Mathematics Advanced (2024), outline order 86, Probability and data (Conditional probability). Pre-design pack: `../pre-design/maths-a11/math-a11-s07.md` (brief 243). Site lesson (read through the pack's quotations, read only): `probability-and-data/lesson03.sa.html` (`we-1`, 0.2 ÷ 0.5 = 0.4; `we-3`'s two-way table method, restricting to a row or a column; trap 1, P(A|B) against P(B|A)). Route entry: `math-a11-s07` in `../../programme/maths-a11-route-inputs-5.json`. Visual system: maths studio kit; the covered dice and array (s06's final frame), a reused painted phone with a coded delivery-app screen and a painted delivery bag; every array, Venn diagram, table and tree coded, HSC style.

Owner rules applied: as s02 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (food and phones: a delivery app's late orders), Australian spelling, no em dashes, "zero point" decimals, set symbols spoken in words, conversational narration).

Syllabus content points (Mathematics Advanced 11-12 (2024), Year 11, Probability and data, Conditional probability), quoted from `../../programme/maths-a11-route-inputs-5.json`:

- `ci6b22bb73`: "Define conditional probability as the probability that an event A occurs given that another event B has already occurred, and use the notation P(A|B)"
- `ci720126e5`: "Examine conditional probability by restricting the sample space and event spaces in a Venn diagram, using a two-way table, a tree diagram and other arrays"
- `cidbe2315d`: "Establish that P(A|B) = (|A ∩ B|)/(|B|) when all outcomes are equally likely by restricting the sample space and event space, and hence P(A|B) = (P(A ∩ B))/(P(B)), provided |B| ≠ 0"
- `cif285e1d9`: "Use the formulas for P(A|B) to solve practical problems involving conditional probability"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa829162c5

**Boundary:** starts from s06's final frame exactly (the 6 × 6 array, no cells lit; the two dice under a coded cloth cover; chips "told: the total is 8", "before: P(double) = 6/36", "P(double) now?", "Next: conditional probability", "?"). Recalls s05 (Venn diagrams of events, P(A ∩ B)) and s06 (arrays, trees, "9 left") in a phrase or grey chip each. Teaches: knowing the total is 8 rules out every other cell, so P(double) becomes 1/5 (array restriction); P(A|B) defined in the syllabus words, the bar read "given" (`ci6b22bb73`); P(A|B) = |A ∩ B|/|B| for equally likely outcomes, then dividing top and bottom by |S| to reach P(A ∩ B)/P(B), provided |B| ≠ 0 (`cidbe2315d`); the Venn diagram restriction (B becomes the rectangle); a two-way table restricted to a row and then to a column, with P(late | peak) ≠ P(peak | late); the same numbers on a tree whose second branches are conditional (`ci720126e5`, `cif285e1d9`). Stops at conditional probability. Not taught: independence (s08); the name "law of total probability" (not 2024 Year 11 wording; the tree's sum is used without a name); Bayes' theorem by name.

## Decisions

- **Anchor: a food delivery app's orders, peak hour against off-peak (reused painted phone with a coded app screen, a new painted delivery bag, live).** "Was it late, given it was ordered in the peak hour?" and "Was it peak, given it was late?" are everyday questions with very different answers (0.25 and about 0.79) from one table, which is the lesson's trap. Food and phones; the pack's anchor 1. No Year 11 or Year 12 Maths design uses delivery orders (grep 17 Nov 2026: "delivery app" no hits; Year 12 s05's parcel tracker is a delivery window and density, a different idea, so the bag is food-delivery styled, not a parcel). The opening is the dice array, fixed by s06's handoff and the route's start boundary.
- **All four representations (pack decision; `ci720126e5`).** Array (1, 2), Venn diagram (3), two-way table (4, 5), tree (6), each with the same "restrict" motion: everything outside B dims and B's total boxes as the new denominator.
- **Counting form first (`cidbe2315d`; the site skips it).** Scene 3 writes |A ∩ B|/|B| = 1/5 with the cells, then one row "÷ 36 top and bottom" to P(A ∩ B)/P(B). The condition "|B| ≠ 0" is said once ("B can actually happen").
- **Simulations (standard item 3).**
  1. **Restrict** (1 to 6): one motion across four pictures: cells outside B fade to grey on the array; the Venn rectangle shrinks onto circle B; the table greys all but one row (then one column); the tree dims all but the branch taken.
  2. **Live app table** (4): the phone screen's order list scrolls and 200 order tokens drop into the four cells of a two-way table; totals tick up.
  3. **Denominator swap** (5): the boxed total slides from the peak row (120) to the late column (38) while the numerator 30 stays put.
- **Colour roles (fixed for the s strand).** A blue; B (the given event) teal; A ∩ B violet; dimmed outcomes grey; answer green; mistake red. In the table, "late" is A (blue) and "peak" B (teal) for scene 4; in scene 5 the roles swap with the swap of question, shown by the box colour.
- **Large type, handwritten voice.** Hand tags: "ruled out", "B is the new whole", "| = given", "share of B that is A", "÷ 36 top and bottom", "B can happen", "restrict to the row", "not ÷ 200", "same 30, new total", "after the bar: the denominator", "branches after the first are given".
- **Stage changes (standard item 2).** The covered dice and array (1); the definition card (2); the formula and Venn diagram (3); the phone and table (4); the column swap (5); the tree (6); framed card (7); question cards (8 to 11); the single die frame for s08 (12); key notes (13).
- **Worked examples (g01 layout).** 3: the dice (1/5) and site `we-1` (0.2 ÷ 0.5 = 0.4). 4: P(late | peak) = 30/120 = 0.25. 5: P(peak | late) = 30/38 = 15/19 ≈ 0.79. 6: the tree, 0.6 × 0.25 + 0.4 × 0.1 = 0.19 and 0.15/0.19 = 15/19. Crossed slips: "30/200" (4).
- **Memory aid.** Framed card: "Given B: B becomes the whole. P(A|B) = P(A ∩ B) / P(B)." Second line: "What comes after the bar goes on the bottom."
- **Visual surprise.** The denominator swap: the same 30 late peak orders give 0.25 one way and about 0.79 the other.
- **Site notes (pack section 8).** S11-P01 (lesson03 card 05's claim that the unconditional probability "would be lower") is not reused; card 05 is not used. The site's disease-test example is not used (medical; the delivery table carries the same P(A|B) against P(B|A) trap).
- **Plain meanings at first use.** Conditional probability ("a probability worked out after you know something has happened"); "given" (the vertical bar); "restrict" ("throw away the outcomes that are now impossible"); two-way table ("a table counting two features at once, with totals").
- **Attempts.** A1 (original, replacing the pack's question 1 because its delivery data are now the anchor; same method): 250 online items, 100 sale items with 30 returned, 150 full-price with 15 returned: P(returned | sale) = 0.3, P(sale | returned) = 2/3; crossed "30/250". A2 (pack question 2): P(A) = 0.5, P(B) = 0.4, P(A ∪ B) = 0.65: P(A ∩ B) = 0.25, P(A|B) = 0.625, P(B|A) = 0.5; crossed "P(A|B) = 0.25/0.5".
- **Mistake scene:** none separate. Dividing by the grand total (4 crossed, A1 crossed); swapping P(A|B) and P(B|A) (5); "given" read as "and" (4 tag: "that's P(late and peak)"); dividing by P(A) (A2 crossed).
- **Cause chain taught, in order:** (1) new information rules outcomes out, so the sample space shrinks to B (1); (2) within B, the equally likely outcomes still share equally, so P(A|B) is A's share of B (2, 3); (3) dividing both counts by |S| turns counts into probabilities without changing the fraction (3); (4) in a table, "given" picks the row or column, so its total is the denominator (4); (5) a different given picks a different total, so P(A|B) and P(B|A) differ (5); (6) on a tree, the second branches are already conditional, so multiplying along gives P(A ∩ B), and dividing recovers the conditional the other way (6).
- **Entry knowledge (route):** s05 (Venn diagrams of events, the addition rule); s06 (arrays and trees).
- **What later videos rely on.** s08 uses P(A|B) = P(A ∩ B)/P(B) and the restriction picture ("A's share of B against A's share of S").
- **Handoff (to math-a11-s08, "When are two events independent, and how do we prove it?").** Scene 12: one die (the red die plate) and a 1 × 6 strip of outcomes 1 to 6; braces "A = even = {2, 4, 6}" (blue), "B = greater than 4 = {5, 6}" (teal); chips "P(A) = 1/2", "told: B happened", "P(A | B) = ?", "Next: independent events", "?". This is s08's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Dice: B = total 8 = {(2, 6), (3, 5), (4, 4), (5, 3), (6, 2)}; A ∩ B = {(4, 4)}; P(A|B) = 1/5; P(A) = 1/6; 1/36 ÷ 5/36 = 1/5.
  (b) Table: peak 120 (late 30, on time 90); off-peak 80 (late 8, on time 72); late 38, on time 162; total 200. P(late) = 0.19; P(late | peak) = 0.25; P(late | off-peak) = 0.1; P(peak | late) = 15/19 ≈ 0.789; P(late and peak) = 0.15.
  (c) Tree: 0.6 × 0.25 = 0.15; 0.4 × 0.1 = 0.04; sum 0.19; 0.15/0.19 = 15/19.
  (d) A1: returned 45; 30/100 = 0.3; 30/45 = 2/3. A2: 0.5 + 0.4 − 0.65 = 0.25; 0.25/0.4 = 0.625 = 5/8; 0.25/0.5 = 0.5.
  (e) Pronunciations: "the probability of A given B", "P of A given B"; "about zero point seven nine"; "fifteen nineteenths".

Main question: *How does knowing B happened change the probability of A? If the total is 8, what's the chance of a double now?*
Entry knowledge (s05, s06): Venn diagrams of events; arrays and trees.
Stops after: P(A|B) defined, established by counting and as P(A ∩ B)/P(B), and used in four representations, with P(A|B) and P(B|A) kept apart. No independence.
Handoff: math-a11-s08: "even and greater than 4 on one die: does knowing one change the other?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): A blue, given event B teal, A ∩ B violet, ruled-out grey, answer green, mistake red. Header strip "MATHEMATICS ADVANCED · PROBABILITY AND DATA". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: the total is eight
> Here's the covered roll. Before we knew anything, a double was six cells out of thirty-six, a sixth. Now we're told the total is eight. Which cells are still possible? Two and six, three and five, four and four, five and three, and six and **two**. Just five cells. Every other cell has been ruled out. And only one of the five is a double, four and four. So the chance of a double is now one in five, not one in six. Knowing something changed the probability. So how does knowing B happened change the probability of **A**?

Visual: opens on s06's final frame exactly (the 6 × 6 array, 800 px, the covered dice above it; chips "told: the total is 8", "before: P(double) = 6/36", "P(double) now?", "Next: conditional probability", "?"). The "Next" chip fades. The six doubles ring briefly (blue) with "6/36 = 1/6". On "two" (the fifth pair spoken) the five total-8 cells light teal along their diagonal, one by one as they are named; every other cell fades to grey (restrict), tag "ruled out". The (4, 4) cell turns violet; row "P(double) = 1/5" (green frame). On "A" heading "Conditional probability" writes on, and the question chip "How does knowing B change A?" moves to the top right.

### 2. what "given" means
> Call the double A, and a total of eight B. What we just found is the probability of A given B. It's written P, then A, then a vertical bar, then B, and the bar is read "given". It means the probability that A occurs, given that B has already occurred. The method was to restrict the sample space. Once we know B happened, B becomes the whole sample space, and we only ask what share of B is also A. That's the outcomes in A intersect B, over the outcomes in **B**. One over five.

Visual: the array shrinks to 520 px at the left with its restriction kept; definition card at the right, 44 px: "P(A | B): the probability that A occurs, given that B has already occurred". The bar "|" rings, tag "| = given". Braces under it: "A = double" (blue), "B = total 8" (teal). Tag "B is the new whole" as the five teal cells lift slightly. On "B" (last) row, 52 px: "P(A | B) = |A ∩ B| / |B| = 1/5", tag "share of B that is A".

### 3. from counts to the formula
> So when outcomes are equally likely, P of A given B equals the number in A intersect B, over the number in B. Now divide the top and the bottom by thirty-six, the size of S. That doesn't change the fraction. The top becomes one thirty-sixth, which is P of A intersect B. The bottom becomes five thirty-sixths, which is P of **B**. So P of A given B equals P of A intersect B, over P of B. That works with probabilities we're given, too. If P of A intersect B is zero point two, and P of B is zero point five, then P of A given B is zero point **four**. The only condition is that B can actually happen, so its probability isn't zero. On a Venn diagram, B becomes the new rectangle, and A intersect B is the part of it that's **A**.

Visual: stage change: g01 board, full width: equation strip "P(A | B) = |A ∩ B| / |B|" (52 px). Row "= (1 ÷ 36) / (5 ÷ 36)" with a hand tag "÷ 36 top and bottom"; on "B" row "= P(A ∩ B) / P(B)" in a green frame; grey chip "provided |B| ≠ 0", tag "B can happen". Givens strip "P(A ∩ B) = 0.2, P(B) = 0.5" (site `we-1`); on "four" row "P(A | B) = 0.2 / 0.5 = 0.4" (green frame). On "A" (last) a `VennDiagram` at the right with rectangle S: the rectangle shrinks onto circle B (restrict mode), circle B becomes the new rectangle, and the A ∩ B lens stays violet inside it; tag "A's share of B".

### 4. the delivery app: late, given peak
> Now a practical one. A food delivery app recorded two hundred orders. A hundred and twenty were placed in the peak hour, and thirty of those arrived late. Eighty were off-peak, and eight of those were late. So overall, thirty-eight of the two hundred were late, zero point one nine. What's the chance an order is late, given it was placed in the peak hour? Restrict to the peak row. Its total, a hundred and twenty, is the new whole. Thirty of them were late, so it's thirty over a hundred and twenty, zero point two **five**. That's higher than zero point one nine overall. Dividing by two hundred is the **slip**. Thirty over two hundred is P of late and peak, not late given peak.

Visual: clear change: the phone plate (`ma12-phone-v1.png`, 460 px) at the left with a coded app screen (an order list, times and status ticks, no brand); the delivery bag plate (`ma11-delivery-bag-v1.png`, 300 px) beside it. Live app table: order tokens drop from the screen into a `TwoWayTable` at the right (44 px): rows "peak", "off-peak", "total"; columns "late", "on time", "total"; cells 30, 90, 120 / 8, 72, 80 / 38, 162, 200. Chip "P(late) = 38/200 = 0.19". Task strip "Find P(late | peak)". Restrict: every row but "peak" greys; the "120" boxes teal, tag "restrict to the row". Row "P(late | peak) = 30/120"; on "five" the green frame "= 0.25". On "slip" a red slip "30/200" writes and is crossed, caption "that's P(late ∩ peak)"; tag "not ÷ 200".

### 5. turning the question around
> Now flip the question. Given an order was late, what's the chance it was placed in the peak hour? This time, restrict to the late column. Its total is thirty-eight. Thirty of those were peak, so it's thirty over thirty-eight, about zero point seven **nine**. Same thirty on top, but a different total underneath. So P of late given peak, and P of peak given late, are different probabilities, zero point two five and about zero point seven nine. Whatever comes after the bar decides the **denominator**.

Visual: same table. Denominator swap: the teal box slides from "120" down and across to the "late" column's total "38"; the peak row un-greys and every column but "late" greys; the "30" stays violet. Task strip "Find P(peak | late)". Row "P(peak | late) = 30/38 = 15/19"; on "nine" the green frame "≈ 0.79"; tag "same 30, new total". The two answers sit side by side, 52 px: "P(late | peak) = 0.25" and "P(peak | late) ≈ 0.79". On "denominator" tag "after the bar: the denominator".

### 6. the same numbers on a tree
> A tree shows the same thing. The first branches are peak and off-peak, zero point six and zero point four. The second branches are late and on time, and they're already conditional. After the peak branch, late is a quarter. After off-peak, it's eight out of eighty, zero point **one**. Multiply along, so peak and late is zero point one five, and off-peak and late is zero point zero four. Add those, and late overall is zero point one **nine**, matching the table. Then peak given late is zero point one five, over zero point one nine, fifteen nineteenths, the same answer as **before**.

Visual: stage change: `ProbabilityTree` (1,200 × 700 px): "peak 0.6", "off-peak 0.4"; second column "late 0.25", "on time 0.75" and, on "one", "late 0.1", "on time 0.9"; tag "branches after the first are given"; grey chip "s06: '9 left' was a given". Tips "peak ∩ late: 0.6 × 0.25 = 0.15" and "off-peak ∩ late: 0.4 × 0.1 = 0.04" light; on "nine" row "P(late) = 0.15 + 0.04 = 0.19 ✓". Restrict: the two late paths stay lit and the rest dim; on "before" row "P(peak | late) = 0.15 / 0.19 = 15/19" (green frame).

### 7. memory aid
> Here's the summary. Given B, B becomes the whole sample space, so you divide by B. P of A given B is P of A intersect B, over P of B. Whatever comes after the bar goes on the **bottom**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the Venn rectangle shrinking onto B. Main line, hand font 56 px: "Given B: B becomes the whole. P(A | B) = P(A ∩ B) / P(B)." On "bottom" the key line, 40 px: "What comes after the bar goes on the bottom." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. An online clothes store sold two hundred and fifty items. A hundred were bought in a sale, and thirty of those were returned. Of the hundred and fifty full-price items, fifteen were returned. Find the probability an item was returned, given it was bought in a sale, and the probability it was bought in a sale, given it was returned. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "An online clothes store sold 250 items. 100 were bought in a sale, and 30 of those were returned. Of the 150 full-price items, 15 were returned. Find P(returned | sale) and P(sale | returned)." The full question stays on screen. Picture slot: an empty two-way table with rows "sale", "full price", "total" and columns "returned", "kept", "total". Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> Given a sale, restrict to the sale row, a hundred items. Thirty were returned, so it's zero point **three**. Given returned, restrict to the returned column. Thirty plus fifteen is forty-five returns, and thirty were sale items, so it's thirty over forty-five, two **thirds**. Thirty over two hundred and fifty is the slip. That divides by every item.

Visual: the card shrinks to the top (30 px). The table fills: 30, 70, 100 / 15, 135, 150 / 45, 205, 250. The sale row stays lit, "100" boxed; on "three" the green frame "P(returned | sale) = 30/100 = 0.3". The box slides to "45"; on "thirds" the green frame "P(sale | returned) = 30/45 = 2/3". On "the slip" a red slip "30/250" writes and is crossed, caption "not the grand total". Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. For events A and B, P of A is zero point five, P of B is zero point four, and P of A union B is zero point six five. Find P of A given B, and P of B given A. Pause here to answer.

Visual: `QuestionCard`, 40 px: "For events A and B, P(A) = 0.5, P(B) = 0.4 and P(A ∪ B) = 0.65. Find P(A | B) and P(B | A)." Picture slot: an empty two-circle Venn diagram labelled "A" and "B". Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> First the overlap, from the addition rule. Zero point five plus zero point four, minus zero point six five, is zero point two **five**. Given B, divide by P of B, so zero point two five over zero point four, zero point six two **five**. Given A, divide by P of A, zero point **five**. Dividing by zero point five for P of A given B is the slip.

Visual: the card shrinks to the top. Rows, 44 px: "P(A ∩ B) = 0.5 + 0.4 − 0.65"; on "five" (first) "= 0.25" (violet); on "five" (second) the green frame "P(A | B) = 0.25 / 0.4 = 0.625"; on "five" (third) the green frame "P(B | A) = 0.25 / 0.5 = 0.5". On "the slip" a red slip "P(A | B) = 0.25 / 0.5" writes and is crossed, caption "given B: divide by P(B)". Hold about 1 s.

### 12. handoff
> Knowing B usually changes the probability of A. But not always. Roll one die. A is an even number, and B is a number bigger than four. On its own, even has a chance of a half. Now you're told the number is bigger than four. Does that change the chance it's **even**?

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the red die plate (`ma12-die-red-v1.png`, 300 px) at the left and a 1 × 6 strip of cells "1" to "6" at the right (52 px). Braces write as spoken: "A = even = {2, 4, 6}" (blue) lighting 2, 4, 6; "B = bigger than 4 = {5, 6}" (teal) lighting 5, 6. Chips "P(A) = 1/2", "told: B happened", "P(A | B) = ?". On "even" chips "Next: independent events" and "?". Hold about 2 s. This is s08's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- P(A | B): the probability of A, given that B has occurred.
- Equally likely outcomes: P(A | B) = |A ∩ B| / |B|.
- P(A | B) = P(A ∩ B) / P(B), provided P(B) ≠ 0.
- Two-way table: restrict to B's row or column; its total is the denominator.
- P(A | B) and P(B | A) are usually different.

Memory aid (framed card, right side, as in scene 7): *Given B: B becomes the whole. What comes after the bar goes on the bottom.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and s08's opening frame.

## Teaching checks

- **Does it explain causes?** Why the probability changes: outcomes are ruled out (1). Why divide by |B|: B is the new sample space (2). Why the probability form follows: dividing top and bottom by |S| (3). Why the row or column total: "given" picks it (4). Why P(A|B) ≠ P(B|A): different givens, different totals (5). Why the tree's sum gives P(late): the paths are the ways to be late (6).
- **Misconceptions addressed:** the grand total as denominator (4 crossed, A1 crossed); P(A|B) and P(B|A) swapped (5); "given" as "and" (4 caption); dividing by P(A) (A2 crossed).
- **Visual standard, item by item:** 1 the covered dice from the first frame (s06's frame), the phone and bag in 4 and 5; 2 a new stage every 35 to 60 s; 3 the restrict motion on four pictures, the live app table, the denominator swap; 4 fixed roles; 5 large type; 6 hand tags; 7 g01 board in 3, rows beside each table and tree; 8 framed card and five bullets; 9 the same 30 giving 0.25 and 0.79.
- **One idea at a time:** the restriction (1), the definition (2), the formula (3), a row (4), a column (5), a tree (6).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 26 s and 25 s.
- **Avoided double teaching:** s06's array and tree are reused, not rebuilt; s05's addition rule is used in A2 without re-teaching.
- **Syllabus coverage:** `ci6b22bb73` (2; key note 1); `ci720126e5` (1 array, 3 Venn, 4 and 5 table, 6 tree; key note 4); `cidbe2315d` (2, 3; key notes 2, 3); `cif285e1d9` (4 to 6, A1, A2; key note 5).
- **Out of scope by design:** independence (s08); named total probability and Bayes' theorem.

## Practice questions and model answers

**Attempt 1 (scene 8; original, HSC style, 2 marks suggested, not an official marking scheme).** "An online clothes store sold 250 items. 100 were bought in a sale, and 30 of those were returned. Of the 150 full-price items, 15 were returned. Find P(returned | sale) and P(sale | returned)."
Model answer: P(returned | sale) = 30/100 = 0.3. Returned: 30 + 15 = 45, so P(sale | returned) = 30/45 = 2/3. Classic mistake (crossed): "30/250".

**Attempt 2 (scene 10; pack question 2, original, HSC style, 3 marks suggested).** "For events A and B, P(A) = 0.5, P(B) = 0.4 and P(A ∪ B) = 0.65. Find P(A | B) and P(B | A)."
Model answer: P(A ∩ B) = 0.5 + 0.4 − 0.65 = 0.25. P(A | B) = 0.25/0.4 = 0.625 (5/8). P(B | A) = 0.25/0.5 = 0.5. Classic mistake (crossed): "P(A | B) = 0.25/0.5".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Dice | doubles 6/36 = 1/6; total 8: 5 cells; P(double | total 8) = 1/5; (1/36)/(5/36) | 1 to 3 |
| we-1 | 0.2 / 0.5 = 0.4 | 3 |
| App table | 120 (30 late), 80 (8 late), 200; 38 late; 0.19; 30/120 = 0.25; 30/38 = 15/19 ≈ 0.79; 30/200 crossed | 4, 5 |
| Tree | 0.6, 0.4; 0.25, 0.75; 0.1, 0.9; 0.15, 0.04, 0.19; 15/19 | 6 |
| A1 | 30/100 = 0.3; 45; 30/45 = 2/3 | 8, 9 |
| A2 | 0.25; 0.625; 0.5 | 10, 11 |
| Handoff | {2, 4, 6}, {5, 6}; P(A) = 1/2 (s08 finds P(A | B) = 1/2) | 12 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with Python (itertools) and SymPy 1.14 (17 Nov 2026, scratchpad `s-designs/verify.py`); Codex to re-check.

- Two dice: total 8 has 5 cells; doubles among them 1; 1/5; (1/36)/(5/36) = 1/5.
- 0.2/0.5 = 0.4.
- 30 + 8 = 38; 38/200 = 0.19; 30/120 = 0.25; 30/38 = 15/19 = 0.7895; 120/200 = 0.6; 8/80 = 0.1; 0.6 × 0.25 = 0.15; 0.4 × 0.1 = 0.04; 0.15/0.19 = 15/19.
- 30/100 = 0.3; 30 + 15 = 45; 30/45 = 2/3; 100 − 30 = 70; 150 − 15 = 135; 250 − 45 = 205.
- 0.5 + 0.4 − 0.65 = 0.25; 0.25/0.4 = 0.625; 0.25/0.5 = 0.5.

## Memory aid check

- **"Given B: B becomes the whole. P(A | B) = P(A ∩ B) / P(B)."** Original. Meaning, as said in scene 7: knowing B restricts the sample space to B, so A's probability is the share of B taken by A ∩ B. Assumptions checked: P(B) ≠ 0 (said in scene 3, in key note 3); for the counting form, equally likely outcomes. Second line, "what comes after the bar goes on the bottom", is a reading rule that keeps P(A|B) and P(B|A) apart. It helps a new case: A2's P(B|A) puts P(A) underneath.
- **Considered, not used:** "given means and" (wrong; crossed in scene 4's caption).

## Narration length estimate

Counted by script (narration blockquotes, bold markers removed; 17 Nov, scratchpad `s-designs/count.py`): 5,205 characters. At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 18 s of settling (the restrict motions, the app table filling, the denominator swap) and the 45 s notes scene: about 475 s. Characters per scene (1 to 13): 516, 475, 719, 675, 495, 576, 182, 366, 343, 189, 332, 262, 75. Speech before the notes is about 386 s, under the 570 s cap. Feedback speech: about 26 s and 25 s.

Split test (root ruling 11): all four representations and both forms of the formula fit under 570 s, so s07 is not split. Reserve trims if the voiced take runs long: scene 3's `we-1` sentence (keep its row); scene 4's "That's higher than zero point one nine overall" (keep the chip).

## Scene list and build ids

Lesson key `m-a11s07` (route math-a11-s07). Explainer folder `src/explainer/lessons/math-a11-s07`; build inputs in `docs/production/claude-pm/lessons/math-a11-s07/` (at voicing).

In order (13 scene headings): hook-total-is-eight, what-given-means, counts-to-formula, late-given-peak, turning-it-around, tree, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 40 s | 1 | The covered dice; the array restricted |
| 40 to 75 s | 2 | The definition card |
| 75 to 135 s | 3 | The formula board and the Venn restriction |
| 135 to 195 s | 4 | The phone, bag and two-way table |
| 195 to 230 s | 5 | The denominator swap |
| 230 to 280 s | 6 | The tree |
| 280 to 295 s | 7 | Framed memory card |
| 295 to 390 s | 8 to 11 | Question cards and countdowns, then feedback |
| 390 to 410 s | 12 | The single die for s08 |
| 410 to 455 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: s06's last frame continues into 1; 1 to 2 the array shrinks left; 2 to 3 stage change; 3 to 4 clear change; 4 to 5 same table; 5 to 6 stage change; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11-s07-learning-review.md`, `science_check` = `checks/m-a11-s07-maths-check.md`.

## Assets

Inspected before choosing (17 Nov 2026, viewed): `ma12-phone-v1.png` (a plain phone, front-on, its screen blank and dark, ready for a coded screen; reused in w21 and c04 for other ideas). No delivery bag plate exists.

Reused: `biology/m5x-die-v1.png` and `ma12-die-red-v1.png` (1, 12), `ma12-phone-v1.png` (4, 5).

Need (painted, new; see the Codex asset brief): `ma11-delivery-bag-v1.png` (4, 5).

Coded: the cloth cover, the array, the definition card, the board, Venn diagram, app screen, table, tree, rows, cards, countdown, hand tags, key notes.

### Studio kit use and additions

Uses: `OutcomeGrid`, `VennDiagram`, `ProbabilityTree` (s06's addition), `ScreenApp`-style coded phone screen, `WorkingBoard`, `EquationStrip`, `PlateImg`, `HandTag`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions:
1. **`TwoWayTable`** (kit list item 11; also s08): rows and columns with totals; a restrict mode that greys everything outside one row or column and boxes its total as the denominator; the box can slide to another total. Check: the boxed number equals the row's answer denominator.
2. **Restrict modes** on `VennDiagram` (the rectangle shrinks onto B) and `OutcomeGrid` (cells outside B fade). Check: after the restriction, the visible region or cells equal B exactly.

## Codex asset brief (Maths A11 S07, a food delivery bag)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-s07.md`. Paint after the learning review and maths check pass and root gives the go-ahead, and before the s07 build. Save to `public/assets/maths/`. Transparent PNG with a true alpha channel; ink and watercolour in the house style, matched to `maths/ma11-jellybean-jar-v1.png`; no text, numbers, signs, logos, people, hands, faces, glow or shadow. Never stretch.

1. `ma11-delivery-bag-v1.png` (1400 × 1400 px): an insulated food delivery backpack box, teal, zipped shut, standing on the ground at a three-quarter angle, with its two straps folded behind. No brand, logo or reflective lettering. Nothing else.

Report inspection on the paper background (`#f6f1e7`) at 900 px and full width, and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-s07-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quotes match the route-inputs JSON exactly.
3. Confirm the counting form |A ∩ B|/|B| comes before P(A ∩ B)/P(B), with the "÷ |S|" step shown, and the condition |B| ≠ 0 stated.
4. Confirm a Venn diagram, a two-way table, a tree and an array each show the restriction.
5. Confirm no independence, "law of total probability" or Bayes' theorem is named.
6. Confirm both attempts carry every demand and neither card nor picture shows an answer.
7. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its Visual in spoken order, that scene 1 opens on s06's final frame and that scene 12 is s08's opening frame.

## YouTube metadata (draft)

Title: Conditional Probability: How Knowing B Changes A | Year 11 Maths Advanced

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/probability-and-data/lesson03.sa.html

Two dice are rolled under a cover and you're told the total is 8. What's the chance of a double now? Restrict the sample space to find P(A|B), establish P(A|B) = |A ∩ B|/|B| and then P(A|B) = P(A ∩ B)/P(B), and use a delivery app's two-way table and a tree to see why the chance an order is late given the peak hour is not the chance it was peak given it was late. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Probability and data.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Define conditional probability as the probability that an event A occurs given that another event B has already occurred, and use the notation P(A|B)"
"Examine conditional probability by restricting the sample space and event spaces in a Venn diagram, using a two-way table, a tree diagram and other arrays"
"Establish that P(A|B) = (|A ∩ B|)/(|B|) when all outcomes are equally likely by restricting the sample space and event space, and hence P(A|B) = (P(A ∩ B))/(P(B)), provided |B| ≠ 0"
"Use the formulas for P(A|B) to solve practical problems involving conditional probability"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa829162c5

Builds on: Arrays and tree diagrams. Next: Independent events.

#Year11Maths #MathsAdvanced #ConditionalProbability #HSCScience

## Open decisions

- **1. Anchor arriving after the dice (root).** The opening is s06's dice frame (the route's start boundary), so the delivery app arrives at about 135 s. The covered dice are a painted object from the first frame, so standard item 1 is met by the dice; the app carries the practical problem.
- **2. Scene 3's density (learning review).** It holds the division step, `we-1` and the Venn restriction. If the reviewer finds it crowded, `we-1` moves to a grey row without narration.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from s05 and s06; check that the restriction on the array makes "given" concrete before any formula, that the ÷ 36 step reads as one move, and that the denominator swap is the moment P(A|B) and P(B|A) separate), then the Codex maths check and error check, then voicing on the Google voice and a build to grade A.
