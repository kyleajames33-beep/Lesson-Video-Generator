# Maths A11 S06: How do arrays and tree diagrams organise multistage events? The 6 × 6 array of two dice, multiplying stages, a tree with unequal branches, three coins, and draws without replacement (design)

Status: Revision 2 (17 Nov 2026): learning review resolved (see "Revision 2" below); not voiced. Revision 1 (17 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`) and the accepted Year 11 designs (`math-a11-e08.md`, `c10.md`, `w14.md`; rulings in `../checks/root-acceptance-maths-a11-w01-w14.md`, `-w15-w31.md`, `../checks/root-rulings-maths-a11-c-e-packs.md` and `../checks/root-rulings-maths-a11-t-g-s-packs.md`). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,758 characters by script (see "Narration length estimate"; Revision 2), 14 scene headings, about 521 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

## Revision 2 (17 Nov 2026): learning review resolved

Review: `../checks/m-a11-s06-learning-review.md` (summary `../checks/m-a11-s01-s11-learning-review-summary.md`), with root's rulings in `../checks/root-rulings-maths-a11-t-g-s-packs.md` and root's resolution brief of 17 Nov. Resolution log: `../checks/m-a11-s01-s11-learning-review-resolution.md`. Findings by the review's numbers:

1. Should fix, scene 4 (why multiply along a tree path): **accepted**, reviewer's narration, opened with "Why multiply?" and closed with "So along a path, multiply." On the cue "trips" a 10 × 10 grid of dots replaces the plate: 60 light blue, then 42 of them ring teal. On "block" a grey chip "same as the 5/6 of 5/6 block" shows a thumbnail of scene 3's block. Scene 4 is now 916 characters (about 69 s).
2. Should fix, scene 7 (counter colours collide with role colours): **accepted as root decided**. The painted bag keeps real red and blue counters (brief unchanged). Every coded counter token and tree branch is neutral grey, lettered "R" and "B" in ink. The R-first rows sit in a neutral grey band labelled "R first"; the R-then-B cells are violet as the event, tag "R, then B". A2's tree uses the same convention ("G" and "Y" in ink). The Colour roles decision records it.
3. Should fix, feedback 1 (fourteen digits in a row): **accepted**, reviewer's narration. The cues "white" and "red" light the L in two parts (4 cells, then 3 more). Feedback 1 is now about 24 s.
4. Optional, scene 7 (a hold after "five ninths"): **applied**, about 1 s on "5/9".

Open decisions closed: see "Open decisions". Joins unchanged: scene 1 still opens on the previous design's final frame, and the handoff scene is still the next design's opening frame (no finding touched a joined frame). Changed and new values are rechecked in `work/brief-resolve-s/verify.py` (SymPy 1.14 and fractions, `python -I`).

Narration 5,758 characters by script (Revision 1: 5,500), about 521 s with holds; speech before the notes about 427 s, under the 570 s cap. Stage-plan times are Revision 1 approximations; frames come from the recording's word timings. Nothing recorded; human listening pending.

Scope: eighty-fifth video of Year 11 Mathematics Advanced (2024), outline order 85, Probability and data (Probability). Pre-design pack: `../pre-design/maths-a11/math-a11-s06.md` (brief 243). Site sources (read through the pack's quotations, read only; no site lesson teaches arrays and trees as a method, crosswalk partial): `probability-and-data/lesson01.sa.html` (`we-2`, at least one six in two rolls, 11/36; drill 4, a total of 7, 6/36) and `lesson02.sa.html` (card 06, 5 red and 5 blue drawn without replacement, 5/18). Route entry: `math-a11-s06` in `../../programme/maths-a11-route-inputs-5.json`. Visual system: maths studio kit; the reused painted dice (introduced on s05's final frame) and coins; a painted traffic light and a painted counter bag; every array and tree coded, HSC style (letters and numbers only).

Owner rules applied: as s02 (2024 syllabus, plates for real objects and code for diagrams, no people, one question, one stage at a time, g01 worked examples, two attempts with "Pause here to answer." and 10 s countdowns, brief feedback with one crossed slip, five key notes with a framed card, everyday anchor (travel: two sets of traffic lights on the way home), Australian spelling, no em dashes, "zero point" decimals, conversational narration). No gambling (root ruling 8): dice, coins and counters are neutral objects with nothing at stake.

Syllabus content point (Mathematics Advanced 11-12 (2024), Year 11, Probability and data, Probability), quoted from `../../programme/maths-a11-route-inputs-5.json`:

- `ci1f69f91f`: "Use arrays and tree diagrams to determine the outcomes and probabilities for multistage events"

Source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa829162c5

**Boundary:** starts from s05's final frame exactly (the white and red dice plates side by side; chips "roll both together", "totals 2 to 12: equally likely?", "how many outcomes?", "Next: arrays and tree diagrams", "?"). Recalls s04 (equally likely outcomes, |A|/|S|, three coins listed in A2) and s05 (the complement rule) in a phrase or grey chip each. Teaches: the totals of two dice are not equally likely; the 6 × 6 array of ordered pairs, 36 equally likely cells, with events read off (a total of 7, at least one six); multiplying stages, seen as a block of the array (5/6 × 5/6); a tree diagram for unequal stages (two sets of traffic lights): branch probabilities, multiply along a path, add the paths that make an event, paths adding to 1; a three-stage tree (three coins); a draw without replacement, where the second-stage denominator changes, with multiplication justified by the 10 × 9 array of ordered draws (`ci1f69f91f`). Stops at arrays and trees. Not taught: P(A|B) notation (s07; the second-stage branch is described in words); the word "independent" (s08; the narration says the second light "does whatever it does, whatever the first one did").

## Decisions

- **Anchor: two sets of traffic lights on the way home (painted plate, live), with the two dice as the array's sample-space objects.** The dice, fixed by s05's handoff and the route's start boundary, carry the array; the traffic lights carry the reason trees are needed (the stages are not equally likely, so a grid of equal cells does not fit). Travel; the pack's anchor 1. No Year 11 or Year 12 Maths design uses traffic lights (grep 17 Nov 2026: one Physics design only). The dice are neutral objects (root ruling 8); Year 12 s02 draws this video's 6 × 6 array as known.
- **"Doesn't depend on" without "independent".** Scene 4 says the second light is green with probability 0.7 "whatever the first one did"; s08 names and proves independence. The without-replacement branch is described as "now there are nine left" (the pack's advice), not as P(blue | red).
- **Simulations (standard item 3).**
  1. **Array build and lighting** (scenes 2, 3): `OutcomeGrid` 6 × 6 fills cell by cell as ordered pairs (white across, red down); predicate light shows "total 7", "total 2", "at least one 6" and the 5 × 5 "no 6" block; the block's columns and rows shade as 5/6 then 5/6 of that.
  2. **Car through the lights** (scenes 4, 5): `ProbabilityTree` grows with the traffic light plate beside it; a coded dot rides each path in turn (green, then green or red) while the path's product writes at its tip; a live sum of path products reaches 1.
  3. **Ordered-draw array** (scene 7): a 10 × 9 grid (no diagonal: a counter can't be drawn twice) shades the 5 red-first rows, then 5 of the 9 cells in each, and a counter reads "25 of 90".
- **Colour roles (fixed for the s strand).** The first stage blue, the second stage teal (array axes and tree columns), the event's cells or paths violet, the complement amber, answer green, mistake red. Lamp colours on the traffic light plate are coded tints (green and red), separate from the roles; in the tree, the branch labels are "G" and "R" in ink. Counters (scene 7, A2; root's decision of 17 Nov): the painted bag plate keeps real counters (brief unchanged); every coded counter token and tree branch is neutral grey, lettered "R", "B", "G" or "Y" in ink, so no counter is ever drawn in blue, teal, violet, green or red.
- **Large type, handwritten voice.** Hand tags: "ordered pairs", "(1, 2) ≠ (2, 1)", "36 equally likely", "6 + 6 − 1 = 11", "5/6 of 5/6", "along a branch: multiply", "across paths: add", "paths add to 1", "paths aren't equally likely", "9 left", "25 of 90", "R, then B", "R first".
- **Stage changes (standard item 2).** The dice and the totals (1); the array (2); events and the block (3); the traffic light and tree (4); adding paths (5); the coin tree (6); the counter bag and the ordered-draw array (7); framed card (8); question cards (9 to 12); the "total is 8" frame for s07 (13); key notes (14).
- **Worked examples (g01 layout).** 2 and 3: site drill 4 (7, 6/36) and `we-2` (at least one six, 11/36, also by the complement). 4 and 5: original traffic lights (0.42; exactly one green 0.46). 6: three coins (1/8 each). 7: site card 06 (5/18), justified by the 10 × 9 array. Crossed slips: "(1, 2) and (2, 1) are one outcome" (2), "second draw: 5/10" (7).
- **Memory aid.** Framed card: "Along a branch, multiply. Across branches, add." Second line: "Two equally likely stages: array. More stages or unequal chances: tree."
- **Visual surprise.** The 5 × 5 block in the corner of the array: "no six" is five sixths of the columns times five sixths of the rows, so the multiplication is visible as an area.
- **Site notes (pack section 8).** No copy error in the examples used. Lesson01 `we-2` says "rolls are independent", a word not yet defined; the design counts the array instead. Lesson03 `we-2`'s suppliers tree is left for s07 (its part (b) is conditional).
- **Plain meanings at first use.** Array ("a grid with one stage across and the other down, one cell per outcome"); tree diagram ("branches for each stage, with each branch's probability written on it"); path ("one route from the start to a tip: one outcome"); without replacement ("the first counter isn't put back").
- **Attempts (pack questions).** A1: two dice, the larger number is 4: 7/36; crossed "1/6". A2: 4 green and 2 yellow, two drawn without replacement, different colours: 8/15; crossed "8/30" (one order only).
- **Mistake scene:** none separate. (1, 2) and (2, 1) treated as one (2 crossed); tree paths treated as equally likely (5); adding along or multiplying across (5 tags); the same denominator after a draw without replacement (7 crossed); one order only for "one of each" (A2 crossed); the larger number's values treated as equally likely (A1 crossed).
- **Cause chain taught, in order:** (1) the totals are not equally likely because different numbers of pairs make them (1); (2) ordered pairs from two fair dice are equally likely, so the array's 36 cells can be counted (2); (3) a whole block of cells is a fraction of the columns times a fraction of the rows, so stage probabilities multiply (3); (4) when stages are not equally likely, a tree carries the probabilities on its branches, and a path's probability is the product along it (4); (5) different paths cannot both happen, so their probabilities add (5); (6) more stages just extend the tree (6); (7) without replacement, the second stage has fewer to choose from, and the ordered-draw array shows the product is still a fraction of a fraction (7).
- **Entry knowledge (route):** s04 (listing a sample space; P(A) = |A|/|S|); s05 (the complement and addition rules).
- **What Year 12 relies on.** Year 12 s02 "draws Year 11's two-dice table as the cause" and lists "the 6 × 6 table of two dice" as entry knowledge; Year 12 s01 lists "listing outcomes of two- and three-stage experiments". Scene 2 builds the 6 × 6 array of ordered pairs with the white and red dice that Year 12 s02 uses, and says "(1, 2) and (2, 1) are different cells"; scene 6 is a three-stage tree.
- **Handoff (to math-a11-s07, "How does knowing B happened change the probability of A?").** Scene 13: the 6 × 6 array (no cells lit) with the two dice plates above it under a coded cloth cover (the dice are hidden); chips "told: the total is 8", "P(double) now?", "before: 6/36", "Next: conditional probability", "?". This is s07's opening frame.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) Totals: 2 to 12 have 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1 cells.
  (b) At least one 6: 6 + 6 − 1 = 11; 1 − 25/36 = 11/36.
  (c) Lights: GG 0.42, GR 0.18, RG 0.28, RR 0.12 (sum 1); exactly one green 0.46; at least one green 0.88 (not said).
  (d) Coins: 8 paths of 1/8.
  (e) Draws: 10 × 9 = 90 ordered draws; red then blue 5 × 5 = 25; 25/90 = 5/18 = (1/2)(5/9).
  (f) A1: cells with max 4: (4, 1), (4, 2), (4, 3), (4, 4), (1, 4), (2, 4), (3, 4): 7. A2: (4/6)(2/5) + (2/6)(4/5) = 8/30 + 8/30 = 16/30 = 8/15.
  (g) Pronunciations: "five sixths times five sixths"; "eleven thirty-sixths"; "five eighteenths"; "zero point four two".

Main question: *How do arrays and tree diagrams organise multistage events? Roll two dice: how do we list every outcome so none is missed?*
Entry knowledge (s04, s05): listing a sample space, |A|/|S|, the complement rule.
Stops after: arrays for two equally likely stages and trees for several stages or unequal chances, with and without replacement; multiply along, add across. No P(A|B), no "independent".
Handoff: math-a11-s07: "you're told the total is 8: now what's the chance of a double?"

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed): first stage blue, second stage teal, event violet, complement amber, answer green, mistake red. Header strip "MATHEMATICS ADVANCED · PROBABILITY AND DATA". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: are the totals equally likely?
> Here are two dice, a white one and a red one, rolled together. The totals run from two to twelve. That's eleven totals, so is each one an eleventh? Think about a total of two. That needs a one on both dice, and nothing else works. Now think about seven. That could be one and six, two and five, and plenty more. So the totals can't all be equally likely. To get probabilities, we need outcomes that are equally likely, and we need every one of them, with none missed. So how do arrays and tree diagrams organise multistage **events**?

Visual: opens on s05's final frame exactly (the white die `biology/m5x-die-v1.png` and the red die `ma12-die-red-v1.png`, 300 px each, side by side; chips "roll both together", "totals 2 to 12: equally likely?", "how many outcomes?", "Next: arrays and tree diagrams", "?"). The "Next" chip fades. A number strip "2, 3, ..., 12" writes under the dice with "1/11 each?" over it. On "a total of two" the strip's 2 rings with "1 + 1" under it; on "seven" the 7 rings with "1 + 6, 2 + 5, ..." under it; the "1/11 each?" chip is struck through in grey. On "events" heading "Arrays and tree diagrams" writes on and the question chip "List every outcome?" moves to the top right.

### 2. the array
> An array lists two stages in a grid. The white die goes across the top, one to six, and the red die goes down the side. Each cell is one outcome, an ordered pair, white then red. Six columns of six rows makes thirty-six cells, and with fair dice, all thirty-six are equally **likely**. One, two and two, one are different cells. In the first, the white die shows one, and in the second it shows two. Treating them as one outcome is the **slip**. Now read off events. A total of seven runs along this diagonal, six cells, so its probability is six thirty-sixths, one **sixth**. A total of two is a single cell, one thirty-sixth.

Visual: stage change: the dice move to the array's edges (white above the columns, red beside the rows, 200 px); `OutcomeGrid` 6 × 6 (900 × 900 px) fills cell by cell with "(1, 1)" to "(6, 6)" (white value blue, red value teal, 30 px). Labels "white: 1 to 6" (blue) across and "red: 1 to 6" (teal) down; tag "ordered pairs". On "likely" chip "|S| = 36, each 1/36"; tag "36 equally likely". The cells (1, 2) and (2, 1) ring separately, tag "(1, 2) ≠ (2, 1)". On "slip" a red slip "(1, 2) and (2, 1): one outcome" writes and is crossed, caption "21 unordered pairs aren't equally likely". The diagonal of sevens lights violet; on "sixth" row "P(total 7) = 6/36 = 1/6" (green frame). The (1, 1) cell rings: "P(total 2) = 1/36".

### 3. at least one six, and why stages multiply
> What's the chance of at least one six? That's the last column and the last row. Six plus six is twelve, but the cell six, six is in both, so it's eleven cells, eleven thirty-**sixths**. There's another way, using the complement. No six at all is the five by five block in the corner, twenty-five cells. So at least one six is one minus twenty-five thirty-sixths, eleven thirty-sixths again. Now look at that block. It's five out of six columns, and in each column, five out of six rows. That's five sixths times five sixths, which is twenty-five thirty-**sixths**. When stages combine like this, their probabilities **multiply**.

Visual: same array. The last column and last row light violet; (6, 6) rings, tag "6 + 6 − 1 = 11"; on "sixths" (first) row "P(at least one 6) = 11/36" (green frame). The 5 × 5 block lights amber, chip "no 6: 25 cells"; row "1 − 25/36 = 11/36 ✓"; grey chip "s05: P(A̅) = 1 − P(A)". The block's five columns shade blue first ("5/6 of the columns"), then within them five of six rows shade teal ("5/6 of each"); on "sixths" (second) row "5/6 × 5/6 = 25/36", tag "5/6 of 5/6". On "multiply" tag "stages multiply".

### 4. a tree for the traffic lights
> An array needs every cell to be equally likely, and real stages often aren't. On the way home there are two sets of traffic lights. Say the first is green with probability zero point six, and the second is green with probability zero point seven, whatever the first one did. A tree diagram draws this. The first stage branches to green and red, zero point six and zero point **four**. From each of those, the second stage branches again, zero point seven and zero point three. Each path from left to right is one outcome. Why multiply? Think of a hundred **trips** home. About sixty get a green first light, and seven tenths of those sixty, about forty-two, get a second green too. That's seven tenths of six tenths, the same fraction of a fraction as the **block**. So along a path, multiply. Green then green is zero point six times zero point seven, which is zero point four **two**. Work out all four paths, and they add to **one**.

Visual: clear change: the traffic light plate (`ma11-traffic-light-v1.png`, 420 px) at the left, its lamps unlit; coded tints light its green or red lamp as the car-through-the-lights dot rides. `ProbabilityTree` (1,200 × 760 px) grows at the right: column "1st light" (blue), on "four" branches "G 0.6" and "R 0.4"; column "2nd light" (teal), branches "G 0.7", "R 0.3" from each. Tag "path = one outcome". On "trips" the traffic light plate shrinks to a 200 px badge and a 10 × 10 grid of dots (440 px) takes its place at the left: 60 dots light blue (first green), then 42 of those 60 ring teal (second green too), readouts "60 of 100" and "42 of the 60". On "block" a grey chip "same as the 5/6 of 5/6 block" with a thumbnail of scene 3's block; the grid then fades and the plate returns. Tag "along a branch: multiply". The dot rides G then G; on "two" the tip "GG: 0.6 × 0.7 = 0.42" writes. Tips "GR 0.18", "RG 0.28", "RR 0.12" write as the dot rides each; on "one" a sum "0.42 + 0.18 + 0.28 + 0.12 = 1" with a tick; tag "paths add to 1".

### 5. adding the paths for an event
> Now an event, exactly one green light. Two paths give it. Green then red is zero point six times zero point three, zero point one eight. Red then green is zero point four times zero point seven, zero point two **eight**. You can't take both paths on one trip home, so add them. That's zero point four **six**. Along a branch, multiply. Across the paths that make the event, add. And don't treat the four paths as equally likely. Red then red is only zero point one **two**, while green then green is zero point four two.

Visual: same tree. The GR and RG paths light violet in turn; rows at the right, 44 px: "GR: 0.6 × 0.3 = 0.18"; on "eight" "RG: 0.4 × 0.7 = 0.28"; on "six" the green frame "P(exactly one green) = 0.18 + 0.28 = 0.46"; tag "across paths: add". On "two" the RR tip rings beside the GG tip, tag "paths aren't equally likely"; a grey crossed chip "each path 1/4".

### 6. three stages
> A tree handles more stages too. Toss a coin three times. Each toss branches to heads and tails, a half each, so the tree ends in eight paths. Each one is a half, times a half, times a half, one **eighth**. Those are the eight outcomes we listed for three coins earlier, and the tree makes sure none is **missed**.

Visual: stage change: the coin plates (`ma12-coin-heads-v1.png`, `ma12-coin-tails-v1.png`, 140 px) at the top left; a three-column `ProbabilityTree` (columns "1st", "2nd", "3rd") grows to eight tips "HHH" to "TTT" (letters only), each branch "½". On "eighth" every tip writes "½ × ½ × ½ = 1/8". On "missed" grey chip "s04: |S| = 8" and the eight tips count up "1 to 8".

### 7. without replacement
> Last, a bag with five red and five blue counters. Take two, without putting the first one back. What's the chance of red, then blue? The first draw is red with probability five tenths, a half. Now there are nine counters left, and all five blues are still in there. So the second is blue with probability five **ninths**. Multiply along the branch, a half times five ninths, five eighteenths. Why multiply? Picture every ordered pair of draws in an array, ten choices first, then nine, ninety cells. Red first is half the rows. In each of those rows, five of the nine cells are blue. That's twenty-five cells out of ninety, which is five **eighteenths**. Keeping ten on the bottom for the second draw is the **slip**.

Visual: stage change: the counter bag plate (`ma11-counter-bag-v1.png`, 380 px; the painted counters keep their real colours) at the top left with coded counter tokens beside it: ten neutral grey discs lettered "R" (five) and "B" (five) in ink, chip "5 red, 5 blue". Counter colours never use a role colour (root's decision of 17 Nov): coded counters and tree branches are neutral, lettered "R" and "B". A two-stage `ProbabilityTree` at the left half, branch labels in ink: "R 5/10", "B 5/10", then from R: "R 4/9", on "ninths" "B 5/9", tag "9 left"; hold about 1 s on "5/9" before the next sentence (finding 4). Row "P(R then B) = 1/2 × 5/9 = 5/18". Ordered-draw array at the right: a 10 × 9 grid (rows "1st: counter 1 to 10", each row lettered R or B; the 5 R rows sit in a neutral grey band labelled "R first"; columns "2nd: the 9 left"; in each R row the 5 B cells shade violet, the event, tag "R, then B"); counter "R rows: 45 cells", then "R then B: 25 cells". On "eighteenths" row "25/90 = 5/18 ✓", tag "25 of 90". On "slip" a red slip "1/2 × 5/10" writes and is crossed, caption "only 9 left".

### 8. memory aid
> Here's the summary. For two equally likely stages, draw an array and count the cells. For more stages, or unequal chances, draw a tree. Along a branch, multiply. Across branches, **add**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: a small array beside a small tree. Main line, hand font 56 px: "Along a branch, multiply. Across branches, add." On "add" the key line, 40 px: "Two equally likely stages: array. More stages or unequal chances: tree." Hold about 2 s.

### 9. attempt 1 (countdown, 10 seconds)
> Your turn. Two fair dice are rolled. Use an array to find the probability that the larger of the two numbers is four. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "Two fair dice are rolled. Use an array to find the probability that the larger of the two numbers is 4." The full question stays on screen. Picture slot: an empty 6 × 6 array with axes 1 to 6, no cells lit. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 10. feedback 1 (brief)
> The larger number is four when one die shows four and the other shows four or less. That's the **white** four with the red one to four, four cells, and the **red** four with the white one to three, three more. Seven cells, so seven thirty-**sixths**. One sixth is the slip. The larger number isn't equally likely to be one to six.

Visual: the card shrinks to the top (30 px). On the array, on "white" column 4 rows 1 to 4 light violet, count "4"; on "red" row 4 columns 1 to 3 light violet, count "+ 3", forming an L; count "7 cells"; on "sixths" the green frame "P(larger is 4) = 7/36". On "the slip" a red slip "1/6" writes and is crossed, caption "larger = 6 has 11 cells, larger = 1 has 1". Hold about 1 s.

### 11. attempt 2 (countdown, 10 seconds)
> Last one. A bag holds four green and two yellow counters. Two counters are drawn without replacement. Draw a tree diagram and find the probability that the two counters are different colours. Pause here to answer.

Visual: `QuestionCard`, 40 px: "A bag holds 4 green and 2 yellow counters. Two counters are drawn without replacement. Draw a tree diagram and find the probability that the two counters are different colours." Picture slot: the counter bag plate (300 px) with chips "4 green, 2 yellow", and an empty two-stage tree outline with no labels. Countdown ring shown full from "Pause here to answer.", then 10 s.

### 12. feedback 2 (brief)
> Different colours can happen two ways. Green then yellow is four sixths times two fifths, eight thirtieths. Yellow then green is two sixths times four fifths, also eight **thirtieths**. Add them, sixteen thirtieths, which is eight **fifteenths**. Stopping at eight thirtieths is the slip. That only counts one order.

Visual: the card shrinks to the top. The tree fills, branch labels lettered in ink (neutral counters, as scene 7): "G 4/6", "Y 2/6", then "G 3/5", "Y 2/5" and "G 4/5", "Y 1/5". The GY and YG paths light violet; rows "GY: 4/6 × 2/5 = 8/30"; on "thirtieths" "YG: 2/6 × 4/5 = 8/30"; on "fifteenths" the green frame "P(different) = 16/30 = 8/15". On "the slip" a red slip "8/30" writes and is crossed, caption "one order only". Hold about 1 s.

### 13. handoff
> Arrays and trees list everything that could happen. But what if you learn something first? Roll the two dice under a cover. Someone peeks, and tells you the total is eight. Before you knew that, a double had a chance of six thirty-sixths. So now what's the chance you rolled a double? Does knowing the total change the **answer**?

Visual: the memory lines show small at the top (30 px), then fade. Board clear to the 6 × 6 array (no cells lit, 800 px) with the two dice plates above it under a coded grey cloth cover (only the cover's outline and the dice's top edges show). Chips write as spoken: "told: the total is 8", "before: P(double) = 6/36", "P(double) now?". On "answer" chips "Next: conditional probability" and "?". Hold about 2 s. This is s07's opening frame; scene 14 returns to it silently after the notes.

### 14. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- Two dice: a 6 × 6 array of 36 equally likely ordered pairs.
- (1, 2) and (2, 1) are different outcomes.
- Tree: multiply along a branch; add the paths for the event.
- Path probabilities add to 1.
- Without replacement: the second stage has one fewer.

Memory aid (framed card, right side, as in scene 8): *Along a branch, multiply. Across branches, add.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 13's frame exactly. This is the final frame and s07's opening frame.

## Teaching checks

- **Does it explain causes?** Why totals aren't equally likely: different numbers of pairs make them (1). Why ordered pairs: the dice are different, so (1, 2) and (2, 1) are different results (2). Why multiply along a branch: a block of cells is a fraction of a fraction (3, 7), and a path is a fraction of a fraction of a hundred trips (4). Why add across paths: one trip takes only one path (5). Why the second denominator changes: one counter is gone (7).
- **Misconceptions addressed:** unordered pairs (2 crossed); paths as equally likely (5); adding along or multiplying across (5 tags); the same denominator after a draw (7 crossed); one order only (A2 crossed); values of the larger number as equally likely (A1 crossed).
- **Visual standard, item by item:** 1 the dice from the first frame (s05's frame), the traffic light in 4 and 5; 2 a new stage every 30 to 60 s; 3 the array build and lighting, the car through the lights, the ordered-draw array; 4 fixed roles; 5 large type; 6 hand tags; 7 g01-style rows beside each diagram; 8 framed card and five bullets; 9 the 5 × 5 block as five sixths of five sixths.
- **One idea at a time:** unequal totals (1), the array (2), multiplying (3), the tree (4), adding paths (5), three stages (6), without replacement (7).
- **Response opportunity:** two unseen HSC-style tasks with every demand visible; 10 s each; feedback about 23 s and 23 s.
- **Avoided double teaching:** s04's listing and s05's complement rule are chips.
- **Syllabus coverage:** `ci1f69f91f` (2 to 7, A1, A2; key notes 1 to 5).
- **Out of scope by design:** P(A|B) notation (s07); independence (s08).

## Practice questions and model answers

**Attempt 1 (scene 9; pack question 1, original, HSC style, 2 marks suggested, not an official marking scheme).** "Two fair dice are rolled. Use an array to find the probability that the larger of the two numbers is 4."
Model answer: the cells (4, 1), (4, 2), (4, 3), (4, 4), (1, 4), (2, 4), (3, 4): 7 of 36. P = 7/36. Classic mistake (crossed): "1/6".

**Attempt 2 (scene 11; pack question 2, original, HSC style, 3 marks suggested).** "A bag holds 4 green and 2 yellow counters. Two counters are drawn without replacement. Draw a tree diagram and find the probability that the two counters are different colours."
Model answer: green then yellow (4/6)(2/5) = 8/30; yellow then green (2/6)(4/5) = 8/30; total 16/30 = 8/15. Classic mistake (crossed): "8/30".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| Array | 36 cells; total 7: 6/36 = 1/6; total 2: 1/36 | 2 |
| At least one six | 11/36; no six 25/36; 5/6 × 5/6 = 25/36 | 3 |
| Lights | 0.6, 0.4; 0.7, 0.3; GG 0.42, GR 0.18, RG 0.28, RR 0.12, sum 1; exactly one green 0.46 | 4, 5 |
| Coins | 8 paths, 1/8 each | 6 |
| Counters | 5/10 = 1/2; 5/9; 5/18; 90 cells, 45 red-first, 25 red then blue | 7 |
| A1 | 7/36 | 9, 10 |
| A2 | 8/30 + 8/30 = 16/30 = 8/15 | 11, 12 |
| Handoff | total 8; before 6/36 (answer 1/5 is s07's) | 13 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with Python (itertools) and SymPy 1.14 (17 Nov 2026, scratchpad `s-designs/verify.py`); Codex to re-check.

- Two dice: 36 ordered pairs; total 7: 6; total 2: 1; at least one 6: 11; no 6: 25; (5/6)² = 25/36; 1 − 25/36 = 11/36.
- 0.6 × 0.7 = 0.42; 0.6 × 0.3 = 0.18; 0.4 × 0.7 = 0.28; 0.4 × 0.3 = 0.12; sum 1; 0.18 + 0.28 = 0.46.
- (1/2)³ = 1/8; 8 paths.
- 10 × 9 = 90; red first 5 × 9 = 45; red then blue 5 × 5 = 25; 25/90 = 5/18 = (1/2)(5/9).
- Larger of two dice equal to 4: 7 cells (2 × 4 − 1); 7/36. Maximum 1: 1 cell; maximum 6: 11 cells.
- (4/6)(2/5) = 8/30; (2/6)(4/5) = 8/30; 16/30 = 8/15.
- Handoff: doubles 6/36; total 8 has 5 cells, one double (s07: 1/5).

## Memory aid check

- **"Along a branch, multiply. Across branches, add."** A standard tree-diagram rule, worded here. Meaning, as said in scene 8: a path's probability is the product of the probabilities on its branches; an event made of several paths has the sum of their probabilities. Assumptions checked: each branch probability is the chance of that branch given the path so far (as in scene 7's 5/9; named as conditional in s07); "add" applies to whole paths, which cannot happen together on one trial. Second line: an array needs equally likely cells. It helps a new case: A2.
- **Considered, not used:** "AND multiply, OR add" (true only with those conditions; s05 rejected it too).

## Narration length estimate

Revision 2 recount (narration blockquotes, bold markers removed; `work/brief-resolve-s/count.py`, which reproduces e08's 5,632): 5,758 characters (Revision 1: 5,500). At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 20 s of settling (the array build, the rider on the tree, the ordered-draw shading) and the 45 s notes scene: about 521 s (Revision 2 adds about 3 s of holds and settling). Characters per scene (1 to 14): 530, 615, 617, 916, 508, 305, 705, 183, 139, 318, 213, 308, 326, 75. Speech before the notes is about 427 s, under the 570 s cap. Feedback speech: about 24 s and 23 s.

Split test (root ruling 2 applied by analogy): the video teaches one method family in under 570 s, so it is not split. Reserve trims if the voiced take runs long: scene 6 (three coins) can drop to its first two sentences; scene 3's complement sentence pair (keep the amber block and its row).

## Scene list and build ids

Lesson key `m-a11s06` (route math-a11-s06). Explainer folder `src/explainer/lessons/math-a11-s06`; build inputs in `docs/production/claude-pm/lessons/math-a11-s06/` (at voicing).

In order (14 scene headings): hook-totals-equally-likely, the-array, at-least-one-six, tree-traffic-lights, adding-paths, three-stages, without-replacement, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 40 s | 1 | The dice and the unequal totals |
| 40 to 95 s | 2 | The 6 × 6 array |
| 95 to 145 s | 3 | At least one six; the 5 × 5 block |
| 145 to 200 s | 4 | The traffic light and the tree |
| 200 to 240 s | 5 | Adding paths |
| 240 to 265 s | 6 | Three coins |
| 265 to 325 s | 7 | The counter bag and the 10 × 9 array |
| 325 to 340 s | 8 | Framed memory card |
| 340 to 420 s | 9 to 12 | Question cards and countdowns, then feedback |
| 420 to 445 s | 13 | The covered dice for s07 |
| 445 to 490 s | 14 | Key notes, then a silent return to scene 13's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: s05's last frame continues into 1; 1 to 2 the dice move to the array's edges; 2 to 3 same array; 3 to 4 clear change; 4 to 5 same tree; 5 to 6 stage change; 6 to 7 stage change; 7 to 8 camera pull back; attempts and feedback: the card shrinks to the top; 12 to 13 board clear; 13 to 14 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-a11-s06-learning-review.md`, `science_check` = `checks/m-a11-s06-maths-check.md`.

## Assets

Inspected before choosing (17 Nov 2026, viewed): the white and red dice and the coin plates (see s04 and s05). No traffic light or counter bag plate exists.

Reused: `biology/m5x-die-v1.png`, `ma12-die-red-v1.png` (1, 2, 13), `ma12-coin-heads-v1.png`, `ma12-coin-tails-v1.png` (6).

Need (painted, new; see the Codex asset brief): `ma11-traffic-light-v1.png` (4, 5), `ma11-counter-bag-v1.png` (7, A2).

Coded: arrays, trees, the riding dot, lamp tints, the ordered-draw grid, the cloth cover, rows, cards, countdown, hand tags, key notes.

### Studio kit use and additions

Uses: `OutcomeGrid` (with s04's predicate light), `ProbabilityTree` (new), `PlateImg`, `HandTag`, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions:
1. **`ProbabilityTree`** (kit list item 10; shared by s06 to s08): stages as columns, branch labels (letters and fractions or decimals), a product at each tip, event paths lit and summed, a riding dot, and second-stage denominators that differ by branch. Check: tip products equal the product of the path's labels; the lit sum equals the row's answer.
2. **Ordered-draw array** (kit list item 9): an n × (n − 1) `OutcomeGrid` with row and column shading by rule and a live cell count.
3. **Lamp tint over a plate** (small): a coded green or red lamp tint at the traffic light's sidecar lamp positions.

## Codex asset brief (Maths A11 S06, a traffic light and a counter bag)

Read `docs/production/claude-pm/codex-prompts/00-standing-rules.md` first; the design is `docs/production/claude-pm/lessons/math-a11-s06.md`. Paint after the learning review and maths check pass and root gives the go-ahead, and before the s06 build. Save to `public/assets/maths/`. Transparent PNG with a true alpha channel; ink and watercolour in the house style, matched to `maths/ma11-jellybean-jar-v1.png`; no text, numbers, signs, logos, people, hands, faces, glow or shadow. Never stretch.

1. `ma11-traffic-light-v1.png` (900 × 2000 px): one Australian-style traffic signal on a grey pole, seen front-on: a dark housing with three round lamps (red, amber, green) under visors, all three lamps unlit (dull glass, no glow; code adds the lit colour). No signs on the pole.
2. `ma11-counter-bag-v1.png` (1200 × 1200 px): an open cloth drawstring bag, seen from slightly above, with the top of a few plain round counters just visible inside (colours not distinguishable). Nothing else.

Sidecar JSON for the traffic light (`ma11-traffic-light-v1.json`): the pixel centre and radius of each lamp. Report inspection on the paper background (`#f6f1e7`) at 900 px and full width, and the alpha check. Append the hand-in to `status.md`; write `docs/production/claude-pm/assets/ma11-s06-provenance.json`.

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify" (enumerate the 36 pairs and the 90 ordered draws) and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm the syllabus quote matches the route-inputs JSON exactly.
3. Confirm the array uses ordered pairs with the white die across and the red die down (Year 12 s02's picture), and that every tree is letters and numbers only.
4. Confirm the words "independent" and "given" and the notation P(A|B) do not appear (s07, s08).
5. Confirm both attempts carry every demand and neither card nor picture shows an answer.
6. Confirm no em dash (U+2014), Australian spelling, the narration count, every bold cue quoted in its Visual in spoken order, that scene 1 opens on s05's final frame and that scene 13 is s07's opening frame.

## YouTube metadata (draft)

Title: Arrays and Tree Diagrams for Multistage Events | Year 11 Maths Advanced

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-advanced/year11/probability-and-data/lesson02.sa.html

Roll two dice: are the totals from 2 to 12 equally likely? Build the 6 × 6 array of ordered pairs, read off a total of 7 and at least one six, and see why the probabilities of stages multiply. Then draw tree diagrams for two sets of traffic lights, three coin tosses and counters drawn without replacement: multiply along a branch, add across the paths. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Advanced 11-12 (2024 syllabus), Year 11, Probability and data.
Syllabus content (NSW Mathematics Advanced 11-12, 2024):
"Use arrays and tree diagrams to determine the outcomes and probabilities for multistage events"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/content/year-11/fa829162c5

Builds on: The complement and addition rules. Next: Conditional probability.

#Year11Maths #MathsAdvanced #TreeDiagrams #HSCScience

## Open decisions

Both are closed in Revision 2: 1 by the review (keep the model numbers with "Say" and the tag); 2 by the review (no trim needed; scene 6 is still the named first trim). The Revision 1 text is kept below for the record.

- **1. Traffic light probabilities (learning review).** 0.6 and 0.7 are invented and the second light is stated not to depend on the first. Real lights are often coordinated; the narration says "Say", and a grey tag "model numbers" sits on the plate. The reviewer may prefer a context with a clearer reason for not depending.
- **2. Length (root).** Seven teaching scenes are the most in the s strand. If the voiced take runs long, scene 6 shortens first (named above), not the without-replacement array.

## Review notes

- Revision 2: the independent learning review (`../checks/m-a11-s06-learning-review.md`, should-fix, 0 blockers) is resolved; see "Revision 2" at the top. Next: the Codex maths check and error check, then voicing and a build to grade A.
- Revision 1 (superseded note): Revision 1 has had no independent review. Next: student learning review (trace from s04 and s05; check that the 5 × 5 block makes multiplying feel caused, that the tree is introduced for a reason (unequal stages), that "add across" is about whole paths, and that the 10 × 9 array is clear without the word "given"), then the Codex maths check and error check, then voicing on the Google voice and a build to grade A.
