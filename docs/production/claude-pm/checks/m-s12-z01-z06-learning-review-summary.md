# Maths Standard Year 12 z01 to z06 Revision 1: learning review summary

19 November 2026. Independent student learning review of the six normal distribution designs (`lessons/math-s12-z01.md` to `z06.md`, Standard 2 only), following `docs/production/student-learning-review.md`, root rulings 1 to 76 and `checks/root-decisions-maths-s12-z01-z06.md`. Each design was traced from its stated entry knowledge as a Mathematics Standard 2 student starting Year 12, from p08's two-route frame to z06's "Morning jobs" board. Written designs only: no built preview, plate inspection, playback or human listening is claimed. Every value under "Numbers to verify", and every number in the suggested fixes, was recalculated with exact fractions and `statistics` (`work/brief-review-standard-z/verify.py`, `python -I`, 0 failures); Codex's maths check is separate. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

## Verdicts

| Design | Verdict | Blockers | Should fix | Optional | File |
| --- | --- | --- | --- | --- | --- |
| z01 the bell; mean, median, mode | should-fix | 0 | 4 | 1 | `m-s12-z01-learning-review.md` |
| z02 the z-score | should-fix | 0 | 2 | 2 | `m-s12-z02-learning-review.md` |
| z03 comparing results | should-fix | 0 | 1 | 2 | `m-s12-z03-learning-review.md` |
| z04 the empirical rule | should-fix | 0 | 1 | 2 | `m-s12-z04-learning-review.md` |
| z05 probability by shading | blocker | 1 | 3 | 1 | `m-s12-z05-learning-review.md` |
| z06 unusual results | should-fix | 0 | 3 | 1 | `m-s12-z06-learning-review.md` |

Totals: 0 pass, 5 should-fix, 1 blocker; 1 blocker finding, 14 should-fix findings, 9 optional. The one blocker is a ruling not yet applied (z05's heights), with a drop-in replacement that keeps every number. Every should-fix is a sentence, label or visual-detail repair inside an existing scene; none needs a new scene, a new plate or a split. The designs are good: each puts the picture before the symbol (the bell from the loaves, the σ-ruler before the formula, two rulers onto one z-line, the 27% ring halving, z first as its own step, the gauge), and none is a slideshow on paper. z03 is the strongest.

## Top findings

1. **z05 scene 5: the student-heights example is still there (ruling 75).** Replace with "the heights of 600 Christmas trees at a tree farm" (μ 165 cm, σ 7 cm, 158 and 179 cm, 81.5%, about 15 trees). It keeps "tall", "taller" and centimetres, so nothing else changes. Root's parcels or a fill volume also work.
2. **z06 scene 4 against scene 6: one unusual loaf triggers an oven check, then twenty a day are called normal.** About 18 loaves a day lie beyond two standard deviations by chance. For one loaf: "set it aside and weigh it again"; say that one loaf alone doesn't prove the oven is wrong; keep "check the oven" for the batch.
3. **z04 scenes 2 and 3: 68, 95 and 99.7 are asserted.** Count z01's imagined loaves inside each band (683, 954 and 997 of 1,000), say that the share of loaves is the share of the area, and that every normal curve is the same bell slid and stretched, so the shares hold for any normal distribution.
4. **z01 scene 4: "why do they match?" is restated, not explained.** Use the fold: half the loaves on each side (median), every heavy loaf with a light partner the same distance out (mean).
5. **z01 scene 2: the imagined columns do not fit the axis.** 2,000 loaves in 1 g columns stand twice as tall as 200 loaves in 5 g columns. Use 1,000 imagined loaves (a ratio of exactly 1), so one bell traces both on the same axis. z04 then reuses them.
6. **z02 scene 1: why the standard deviation is the right ruler.** "Eight grams could be a lot, or hardly anything" is left unexplained. Add the σ = 20 against σ = 1 contrast: we measure the gap with the loaves' own spread.
7. **z03 scenes 4 and 6: the sentence frame produces attempt 2's slip.** "The z-score ___ is higher than ___" yields "long jump, 1.4 > −1.6". Show the times version in scene 6: "___ standard deviations better than the mean (faster), against ___".
8. **z06 scene 6 and z05 scene 3: no sense of chance variation in a count.** z05's simulated day lands on exactly the expected 10, and z06 calls 46 "unlikely to be luck" only because it is "more than twice". Seed z05's day to 11 ("about ten is what we expect"), and show five ordinary days (18, 23, 16, 21, 25) before yesterday's 46.
9. **z01 feedback 1: the crossed slip is unreadable.** "B, because its mean is bigger" (B's mean 34 is smaller than A's 182). Use "(b) negatively skewed" with "mean > median > mode: the tail is on the right".
10. **z06 scene 4: the given event's own probability is never said.** Add "Fewer than two and a half percent of loaves are that heavy or heavier", with the tail beyond 2.6 shaded inside the 2.5% tail.

Other should-fix items: z01 scene 2 (the "small differences" tags are two pluses; say that some pushes make a loaf heavier and some lighter, so most partly cancel); z02 A2 (b) (word it "using this mean and standard deviation", the condition scene 6 sets); z05 scene 2 (link area to z01's columns); z05 scene 4 (show only the pieces each small bell uses, not 24 faint labels).

## Root decisions

1. **z05's replacement context (ruling 75):** Christmas trees as proposed, or root's parcels or fill volume (a fill volume would sit next to z06's juice bottles).
2. **z01 finding 3 with z04 finding 1:** adopt 1,000 imagined loaves in z01 so z04 can count the same set; if z01 keeps 2,000, z04 seeds its own 1,000.
3. **z06's single-loaf action (finding 1):** confirm "set it aside and weigh it again" for one loaf and "check the oven" only for the batch. This also answers the designer's open decision 2 (the batch judgement), which stays with the visible run of ordinary days.
4. **Designer's open questions, as they bear on learning:** z01 open decision 1 can close (p08's section 8 matches; any 12 masses in the 695 to 725 g classes work, and z01's suggested 12 keep the drop consistent); z01 open decision 3 (eggs for A2): keep; z03's swim and z06's batch (decisions item 5): keep both, since each teaches what an attempt then relies on; z04 open decision 2 (keep the taps): keep, it is the only place the rule's condition is shown; z05 open decision 2 (A1 "less than 46"): keep, it tests the sketch check.

## Joins

- **p08 to z01:** correct. p08's decisions section 8 is now on disk and matches z01's Boundary and scene 1 item for item; Standard 1 viewers end at p08 with nothing promised (ruling 68).
- **z01 to z02, z02 to z03, z03 to z04, z04 to z05, z05 to z06:** each final frame is the next design's stated opening, matches section 2 of the decisions file, and states no answer it hands on (no z-score, percentage or probability).
- **z06 to c01a:** matches section 3 exactly, including the lead-in sentence, and the c01 pack's café jobs (10, 15, 25, 20 and 10 min). c01a is not designed yet; the join is provisional on its side.

## Practice and feedback

All 12 question cards keep the full worded question on screen through the 10 s countdown, with "Pause here to answer." in every attempt, and no picture is answer-bearing (empty bells, blank tick boxes, unmarked graphs, blank faces). Several attempts ask for more than 10 s of work (z01 A1, z04 A2, z05 A1); the pause line covers that. All 12 feedbacks give the answer, the key reason, short working and one crossed slip, between about 22 s and 30 s by speech estimate. Anchors are everyday and non-science (a bakery, a phone game, a café, a food app, eggs, pizza delivery, test marks, carnivals, a fast bowler, a bus trip, juice bottles); names appear only on plain score cards, and no people are drawn. After z05's blocker, no worked example concerns people's bodies.

## Lengths

All six are under 570 s by the designers' estimates (488 s to 502 s). After the should-fix repairs they run about 498 s to 515 s, leaving at least 55 s of margin in each. Measure on the voiced take.

## Housekeeping

- Every design's `learning_review` path matches these file names.
- No em dash (U+2014) was found in any of the six designs (scripted check).

No speech, design edits, builds or commits were made.
