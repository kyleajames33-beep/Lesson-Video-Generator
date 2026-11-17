# Maths A11 s06 Revision 1: independent learning review

17 November 2026. Design `lessons/math-a11-s06.md`, "How do arrays and tree diagrams organise multistage events?" Source SHA256 `8941e9519986e566256ac671c5c366ed127ade00ca6f7dfbe11a1181887b0117`.

Written design reviewed (narration, visual descriptions, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (s04: listing a sample space, |A|/|S|; s05: the complement rule) as a student starting Year 11. No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second and need measuring on the Year 11 voice. Maths was recalculated (`work/brief-review-s/verify.py`, including a brute-force count of the 90 ordered draws and of A2's 30 ordered draws); Codex's full maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: should-fix** (0 blockers, 3 should fix, 1 optional).

The hook earns attention: "eleven totals, so is each one an eleventh?" is refuted by comparing one way to make 2 with many ways to make 7. The array teaches ordered pairs with a reason ("In the first, the white die shows one, and in the second it shows two"), and the 5 × 5 "no six" block is an excellent visual cause for multiplying: five of six columns, and five of six rows in each. The tree is introduced for a reason (an array needs equally likely cells; the lights are not), adding across paths has its reason ("You can't take both paths on one trip home"), and without replacement is justified by the 10 × 9 array of ordered draws, not just asserted. "Independent" is avoided as planned. Recalculated: total 7 is 6/36, total 2 is 1/36; at least one six 11/36 both ways; (5/6)² = 25/36; GG 0.42, GR 0.18, RG 0.28, RR 0.12, sum 1, exactly one green 0.46; three coins 1/8 each; 90 ordered draws, 45 red first, 25 red then blue, 5/18 = ½ × 5/9; A1 7/36 (max 6 has 11 cells, max 1 has 1); A2 8/30 + 8/30 = 8/15; handoff total 8 has 5 cells and one double. All correct.

## Findings

1. **Should fix, scene 4 (why multiply along a tree path is not said).** Scene 3 shows multiplying as a block of equally likely cells. Scene 4 then says "Along a path, multiply. Green then green is zero point six times zero point seven" with no link back, and the lights are exactly the case where cells are not equally likely, so the block argument does not obviously carry over. This is the lesson's main rule. Fix, before "Along a path, multiply.": "Think of a hundred trips home. About sixty get a green first light, and seven tenths of those sixty, about forty-two, get a second green too. That's seven tenths of six tenths, the same fraction of a fraction as the block." Visual: on "a hundred trips" a 10 × 10 grid of dots beside the tree, 60 lit blue, then 42 of those teal-ringed; on "fraction of a fraction" a grey chip "same as the 5/6 of 5/6 block". Students should be able to say why a path's probability is a product even when the stages are unequal.

2. **Should fix, scene 7 (counter colours collide with the role colours).** The bag holds red and blue counters, but the ordered-draw array shades the "5 red rows" in role blue and the red-then-blue cells in violet, and the crossed slip is in mistake red. A student watching for "red" sees blue rows, and the blue counters are violet. Fix: keep the counters' own colours only on the plate and the tree letters ("R", "B" in ink); shade the red-first rows in a neutral grey band labelled "red first", and the red-then-blue cells violet with the tag "red, then blue". Alternatively paint the counters in two neutral colours (for example white and black) and rename them in the narration. Students should be able to follow "red first, then blue" without decoding colours.

3. **Should fix, feedback 1 (fourteen digits in a row by ear).** "That's four, one, four, two, four, three and four, four, then one, four, two, four and three, four" cannot be heard as seven pairs. Fix: "The larger number is four when one die shows four and the other shows four or less. That's the white four with the red one to four, four cells, and the red four with the white one to three, three more. Seven cells, so seven thirty-sixths." The L of violet cells already shows the pairs. Students should hear the count, not try to parse the list.

4. **Optional, scene 7 (a hold after "five ninths").** The without-replacement step and the 10 × 9 array arrive in one 53 s scene. A 1 s hold after "five **ninths**", before "Multiply along the branch", lets the "9 left" sink in before the array explains the product.

## Open decisions answered

- (1) Traffic light probabilities: keep. "Say" and the tag "model numbers" are enough; "whatever the first one did" is plausible for two sets of lights far apart. No new context needed.
- (2) Length: no trim needed (see Pace). If the voiced take runs long, trim scene 6 first, as named.

## Joins

s05 to s06 matches: the white and red dice with their chips open s06, and the first line picks up "totals 2 to 12: equally likely?". s06 to s07: the 6 × 6 array (no cells lit), the dice under a coded cloth cover, "told: the total is 8", "before: P(double) = 6/36", "P(double) now?", "Next: conditional probability", "?" are s07's opening frame, and s07's first line ("Here's the covered roll") picks it up.

## Practice and feedback

Both question cards keep the full worded question on screen through the 10 s countdown. A1's picture is an empty array; A2's shows the bag with "4 green, 2 yellow" (given in the question) and an unlabelled tree outline. Neither is answer-bearing. A1 practises reading an event off the array (scenes 2, 3); A2 combines scene 7 (without replacement) with scene 5 (add two paths), both modelled. Each feedback gives the answer, the key reason, short working and one crossed classic mistake. Feedback 1 about 23 s (finding 3 keeps it about the same), feedback 2 about 23 s.

## Pace

About 408 s of speech before the notes, about 499 s in all, with seven teaching scenes of 23 to 53 s. Overall this is not rushed: there is about 160 s of headroom under 570 s. Two scenes are dense: scene 3 (617 characters: at least one six by counting, by the complement, then the block) and scene 7 (705 characters: without replacement plus the array). Both have their reasons said; finding 1 adds about 230 characters (about 17 s) to scene 4 and finding 4 a 1 s hold. No split is needed.

## Year 12 handoff check

Year 12 s02 draws "Year 11's two-dice table" as the cause and lists the 6 × 6 table; Year 12 s01 lists two- and three-stage listing. Scene 2 builds the 6 × 6 array of ordered pairs with the white and red dice and says "(1, 2) and (2, 1) are different cells"; scene 6 is the three-stage tree. The pack's "differences read from it" is delivered in s09 A2 (absolute difference on the same array). Delivered.

## Site link

The YouTube description links `probability-and-data/lesson02.sa.html`; the design also draws on lesson01 (`we-2`, drill 4). Correct.

No speech, source edits or commits were made.
